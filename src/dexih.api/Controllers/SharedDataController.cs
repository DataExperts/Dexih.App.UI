using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using dexih.api.Models;
using dexih.api.Services;
using dexih.api.Services.Operations;
using dexih.api.Services.Remote;
using dexih.functions;
using dexih.operations;
using Dexih.Utils.ManagedTasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace dexih.api.Controllers
{
    [Route("api/[controller]")]
    [ValidateAntiForgeryToken]
    [ApiExceptionFilter]
    [ApiFilter]
    public class SharedDataController : Controller
    {
        private readonly ILogger _logger;
        private readonly IDexihOperations _operations;
        private readonly IRemoteAgents _remoteAgents;

        public SharedDataController(
            ILoggerFactory loggerFactory,
            IDexihOperations operations,
            IRemoteAgents remoteAgents
        )
        {
            _logger = loggerFactory.CreateLogger<AccountController>();
            _operations = operations;
            _remoteAgents = remoteAgents;
        }


        [HttpPost("[action]")]
        public async Task<DexihActiveAgent> GetActiveAgent([FromBody] HubKeyOnly hubKey)
        {
            var remoteAgent = await _remoteAgents.GetHubReaderRemoteAgent(hubKey.HubKey, _operations.RepositoryManager);
            return remoteAgent;
        }

        [HttpPost("[action]")]
        public async Task<IEnumerable<SharedData>> SharedDataIndex([FromBody] SharedDataIndex sharedDataIndex)
        {
            var user = await _operations.RepositoryManager.GetUser(User);
            var sharedData = await _operations.RepositoryManager.GetSharedDataIndex(user, sharedDataIndex.SearchString, sharedDataIndex.HubKeys, sharedDataIndex.MaxResults);
            return sharedData;
        }
        
        [HttpPost("[action]")]
        public async Task<string> PreviewData([FromBody] PreviewData previewData)
        {
            var user = await _operations.RepositoryManager.GetUser(User);
            var repositoryManager = _operations.RepositoryManager;

            //check user can access the hub.
            var canAccess = await repositoryManager.CanAccessSharedObjects(user, previewData.HubKey);
            if (!canAccess)
            {
                throw new Exception($"Can not access shared objects in the hub with the key ${previewData.HubKey}.");
            }
            
            string data;

            if (previewData.ObjectType == SharedData.EObjectType.Table)
            {
                data = await _remoteAgents.PreviewTable(previewData.RemoteAgentId, previewData.HubKey, previewData.ObjectKey, previewData.SelectQuery, previewData.InputColumns, false, previewData.DownloadUrl, repositoryManager);
            }
            else
            {
                data = await _remoteAgents.PreviewDatalink(previewData.RemoteAgentId, previewData.HubKey, previewData.ObjectKey, previewData.SelectQuery, previewData.InputColumns, previewData.DownloadUrl, repositoryManager);
            }

            _logger.LogTrace(LoggingEvents.HubPreviewTable, "SharedDataController.PreviewData: HubKey: {updateBrowserHub}, ObjectKey: {objectKey}", previewData.HubKey, previewData.ObjectKey);
            return data;
        }
        
        [HttpPost("[action]")]
        public async Task<IEnumerable<ManagedTask>> DownloadData([FromBody] DownloadSharedData downloadSharedData)
        {
            _logger.LogTrace(LoggingEvents.HubUploadFiles, "SharedDataController.DownloadData");
            
            // use a dictionary to group the download requests by hub.
            var downloadData = new Dictionary<long, List<DownloadData.DownloadObject>>();

            foreach (var item in downloadSharedData.SharedItems)
            {
                var downloadObject = new DownloadData.DownloadObject()
                {
                    ObjectKey =  item.ObjectKey,
                    ObjectType =  item.ObjectType,
                    InputColumns = item.InputColumns,
                    Query = item.Query
                };
                
                if (downloadData.ContainsKey(item.HubKey))
                {
                    downloadData[item.HubKey].Add(downloadObject);
                }
                else
                {
                    var list = new List<DownloadData.DownloadObject> {downloadObject};
                    downloadData.Add(item.HubKey, list);
                }
            }

            var managedTasks = new List<ManagedTask>();
            var repositoryManager = _operations.RepositoryManager;

            foreach (var item in downloadData)
            {
                var managedTask = await _remoteAgents.DownloadData(downloadSharedData.RemoteAgentId, item.Key, downloadSharedData.ClientId, item.Value.ToArray(), downloadSharedData.DownloadFormat, downloadSharedData.ZipFiles, downloadSharedData.DownloadUrl, repositoryManager);
                managedTasks.Add(managedTask);
            }
            
            return managedTasks;
        }

    }
}