using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using dexih.api.Models;
using dexih.api.Services;
using dexih.api.Services.Operations;
using dexih.api.Services.Remote;
using dexih.functions;
using dexih.functions.Query;
using dexih.operations;
using dexih.repository;
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
        public async Task<DexihActiveAgent> GetActiveAgent([FromBody] HubKeyOnly hubKey, CancellationToken cancellationToken)
        {
            var remoteAgent = await _remoteAgents.GetHubReaderRemoteAgent(hubKey.HubKey, _operations.RepositoryManager, cancellationToken);
            return remoteAgent;
        }

        [HttpPost("[action]")]
        public async Task<IEnumerable<SharedData>> SharedDataIndex([FromBody] SharedDataIndex sharedDataIndex, CancellationToken cancellationToken)
        {
            var user = await _operations.RepositoryManager.GetUserAsync(User, cancellationToken);
            var sharedData = await _operations.RepositoryManager.GetSharedDataIndex(user, sharedDataIndex.SearchString, sharedDataIndex.HubKeys, sharedDataIndex.MaxResults, cancellationToken);
            return sharedData;
        }
        
        [HttpPost("[action]")]
        public async Task<string> PreviewData([FromBody] PreviewData previewData, CancellationToken cancellationToken)
        {
            var user = await _operations.RepositoryManager.GetUserAsync(User, cancellationToken);
            var repositoryManager = _operations.RepositoryManager;

            //check user can access the hub.
            var canAccess = await repositoryManager.CanAccessSharedObjects(user, previewData.HubKey, cancellationToken);
            if (!canAccess)
            {
                throw new Exception($"Can not access shared objects in the hub with the key ${previewData.HubKey}.");
            }
            
            string data;
            ChartConfig chartConfig = null;

            switch (previewData.ObjectType)
            {
                case EDataObjectType.Table:
                    data = await _remoteAgents.PreviewTable(previewData.RemoteAgentId, previewData.HubKey, previewData.DownloadUrl, previewData.ObjectKey, previewData.SelectQuery, null, previewData.InputColumns, previewData.Parameters, false, repositoryManager, cancellationToken);
                    break;
                case EDataObjectType.Datalink:
                    data = await _remoteAgents.PreviewDatalink(previewData.RemoteAgentId, previewData.HubKey, previewData.DownloadUrl, previewData.ObjectKey, previewData.SelectQuery, null, previewData.InputColumns, previewData.Parameters, repositoryManager, cancellationToken);
                    break;
                case EDataObjectType.View:
                    var view = await repositoryManager.GetView(previewData.HubKey, previewData.ObjectKey, cancellationToken);
                    if (view.ViewType == EViewType.Chart)
                    {
                        chartConfig = view.ChartConfig;
                    }
                    var selectQuery = view.SelectQuery ?? new SelectQuery();
                    selectQuery.Rows = previewData.SelectQuery.Rows;

                    switch (view.SourceType)
                    {
                        case EDataObjectType.Table:
                            data = await _remoteAgents.PreviewTable(previewData.RemoteAgentId, previewData.HubKey, previewData.DownloadUrl, view.SourceTableKey.Value, selectQuery, view.ChartConfig, previewData.InputColumns, previewData.Parameters, false, repositoryManager, cancellationToken);
                            break;
                        case EDataObjectType.Dashboard:
                            data = await _remoteAgents.PreviewDatalink(previewData.RemoteAgentId, previewData.HubKey, previewData.DownloadUrl, view.SourceDatalinkKey.Value, selectQuery, view.ChartConfig, previewData.InputColumns, previewData.Parameters, repositoryManager, cancellationToken);
                            break;
                        default:
                            throw new ArgumentOutOfRangeException();
                    }
                    
                    break;
                default:
                    throw new ArgumentOutOfRangeException();
            }
    
            _logger.LogTrace(LoggingEvents.HubPreviewTable, "SharedDataController.PreviewData: HubKey: {updateBrowserHub}, ObjectKey: {objectKey}", previewData.HubKey, previewData.ObjectKey);
            return data;
        }
        
        [HttpPost("[action]")]
        public async Task<string> DownloadData([FromBody] DownloadSharedData downloadSharedData, CancellationToken cancellationToken)
        {
            _logger.LogTrace(LoggingEvents.HubUploadFiles, "SharedDataController.DownloadData");
            
            // use a dictionary to group the download requests by hub.
            var downloadData = new List<DownloadData.DownloadObject>();

            foreach (var item in downloadSharedData.SharedItems)
            {
                var downloadObject = new DownloadData.DownloadObject()
                {
                    ObjectKey =  item.ObjectKey,
                    ObjectType =  item.ObjectType,
                    InputColumns = item.InputColumns,
                    Query = item.Query
                };
                
                downloadData.Add(downloadObject);
            }

            var responseKeys = new List<string>();
            var repositoryManager = _operations.RepositoryManager;

            var responseKey = await _remoteAgents.DownloadData(downloadSharedData.RemoteAgentId, downloadSharedData.HubKey, downloadSharedData.DownloadUrl, downloadSharedData.ClientId, downloadData.ToArray(), downloadSharedData.DownloadFormat, downloadSharedData.ZipFiles, repositoryManager, cancellationToken);
            return responseKey;
        }
        
        [HttpPost("[action]")]
        public async Task<DexihDashboard> PreviewDashboard([FromBody] PreviewSharedDashboard previewDashboard, CancellationToken cancellationToken)
        {
            var user = await _operations.RepositoryManager.GetUserAsync(User, cancellationToken);
            var repositoryManager = _operations.RepositoryManager;

            //check user can access the hub.
            var canAccess = await repositoryManager.CanAccessSharedObjects(user, previewDashboard.HubKey, cancellationToken);
            if (!canAccess)
            {
                throw new Exception($"Can not access shared objects in the hub with the key ${previewDashboard.HubKey}.");
            }

            var dashboard = await repositoryManager.GetDashboard(previewDashboard.HubKey, previewDashboard.DashboardKey, cancellationToken);

//            foreach (var item in dashboard.DexihDashboardItems)
//            {
//                var view = await repositoryManager.GetView(dashboard.HubKey, item.ViewKey, cancellationToken);
//                
//                var itemParameters = new InputParameters();
//                foreach(var parameter in item.Parameters)
//                {
//                    itemParameters.Add( parameter.Name, previewDashboard.Parameters.SetParameters(parameter.Value));
//                }
//                
//                switch (view.SourceType)
//                {
//
//                    case EDataObjectType.Table:
//                        item.DownloadKey = await _remoteAgents.PreviewTable(previewDashboard.RemoteAgentId,
//                            previewDashboard.HubKey, previewDashboard.DownloadUrl, view.SourceTableKey.Value,
//                            view.SelectQuery, view.ChartConfig, view.InputValues, itemParameters, false, repositoryManager,
//                            cancellationToken);
//                        break;
//                    case EDataObjectType.Datalink:
//                        item.DownloadKey = await _remoteAgents.PreviewDatalink(previewDashboard.RemoteAgentId,
//                            previewDashboard.HubKey, previewDashboard.DownloadUrl, view.SourceDatalinkKey.Value,
//                            view.SelectQuery, view.ChartConfig, view.InputValues, itemParameters, repositoryManager,
//                            cancellationToken);
//                        break;
//                    default:
//                        throw new ArgumentOutOfRangeException();
//                }
//            }
    
            return dashboard;
        }
    }
}