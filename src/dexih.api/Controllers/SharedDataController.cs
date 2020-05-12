﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
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
            var user = await _operations.RepositoryManager.GetUserAsync(User, cancellationToken, false);
            var sharedData = await _operations.RepositoryManager.GetSharedDataIndex(user, sharedDataIndex.SearchString, sharedDataIndex.HubKeys, sharedDataIndex.MaxResults, cancellationToken);
            return sharedData;
        }

        [HttpPost("[action]")]
        public async Task<SharedData> SharedDataObject([FromBody] SharedDataObject sharedDataObject, CancellationToken cancellationToken)
        {
            var user = await _operations.RepositoryManager.GetUserAsync(User, cancellationToken, false);
            var sharedData = await _operations.RepositoryManager.GetSharedDataObject(user, sharedDataObject.HubKey, sharedDataObject.ObjectType, sharedDataObject.ObjectKey, cancellationToken);
            return sharedData;
        }
        
        [HttpPost("[action]")]
        public async Task<string> PreviewListOfValues([FromBody] PreviewLOV previewLov, CancellationToken cancellationToken)
        {
            var user = await _operations.RepositoryManager.GetUserAsync(User, cancellationToken, false);
            var repositoryManager = _operations.RepositoryManager;

            //check user can access the hub.
            var canAccess = await repositoryManager.CanAccessSharedObjects(user, previewLov.HubKey, cancellationToken);
            if (!canAccess)
            {
                throw new Exception($"Can not access shared objects in the hub with the key {previewLov.HubKey}.");
            }

            var listOfValuesKey = await repositoryManager.GetSharedListOfValueKey(previewLov.ObjectType, previewLov.ObjectKey, previewLov.ParameterName, cancellationToken);
            return await _remoteAgents.PreviewListOfValues(previewLov.RemoteAgentId, previewLov.HubKey,
                previewLov.DownloadUrl, listOfValuesKey, previewLov.ResetCache, repositoryManager, cancellationToken);
        }
        
        [HttpPost("[action]")]
        public async Task<IActionResult> PreviewData([FromBody] PreviewData previewData, CancellationToken cancellationToken)
        {
            var remoteAgent = await _remoteAgents.GetHubReaderRemoteAgent(previewData.HubKey, _operations.RepositoryManager, cancellationToken);

            if (previewData.RemoteAgentId != remoteAgent.InstanceId)
            {
                return StatusCode(426, remoteAgent);
                // throw new Exception("The remote agent did not match the current agent.");
            }
            
            var user = await _operations.RepositoryManager.GetUserAsync(User, cancellationToken, false);
            var repositoryManager = _operations.RepositoryManager;

            //check user can access the hub.
            var canAccess = await repositoryManager.CanAccessSharedObjects(user, previewData.HubKey, cancellationToken);
            if (!canAccess)
            {
                throw new Exception($"Can not access shared objects in the hub with the key {previewData.HubKey}.");
            }
            
            string data;
            ChartConfig chartConfig = null;

            switch (previewData.ObjectType)
            {
                case EDataObjectType.Table:
                    data = await _remoteAgents.PreviewTable(previewData.RemoteAgentId, previewData.HubKey, previewData.DownloadUrl, previewData.ObjectKey, previewData.SelectQuery, null, previewData.InputColumns, previewData.Parameters, false, true, repositoryManager, cancellationToken);
                    break;
                case EDataObjectType.Datalink:
                    data = await _remoteAgents.PreviewDatalink(previewData.RemoteAgentId, previewData.HubKey, previewData.DownloadUrl, previewData.ObjectKey, false, previewData.SelectQuery, null, previewData.InputColumns, previewData.Parameters, true, repositoryManager, cancellationToken);
                    break;
                case EDataObjectType.View:
                case EDataObjectType.Dashboard:
                    DexihView view;
                    if (previewData.ObjectType == EDataObjectType.Dashboard)
                    {
                        view = await repositoryManager.GetDashboardItemView(previewData.HubKey, previewData.ObjectKey,
                            true, cancellationToken);
                    }
                    else
                    {
                        view = await repositoryManager.GetView(previewData.HubKey, previewData.ObjectKey, cancellationToken);    
                        if (!view.IsShared)
                        {
                            throw new Exception($"The view {view.Name} is not shared.");
                        }                    
                    }
                    
                    var selectQuery = view.SelectQuery ?? new SelectQuery();
                    // selectQuery.Rows = previewData.SelectQuery.Rows;

                    switch (view.SourceType)
                    {
                        case EDataObjectType.Table:
                            data = await _remoteAgents.PreviewTable(previewData.RemoteAgentId, previewData.HubKey, previewData.DownloadUrl, view.SourceTableKey.Value, selectQuery, view.GetViewConfig(), previewData.InputColumns, previewData.Parameters, false, false, repositoryManager, cancellationToken);
                            break;
                        case EDataObjectType.Datalink:
                            data = await _remoteAgents.PreviewDatalink(previewData.RemoteAgentId, previewData.HubKey, previewData.DownloadUrl, view.SourceDatalinkKey.Value, false, selectQuery, view.GetViewConfig(), previewData.InputColumns, previewData.Parameters, false, repositoryManager, cancellationToken);
                            break;
                        default:
                            throw new ArgumentOutOfRangeException();
                    }
                    
                    break;
                default:
                    throw new ArgumentOutOfRangeException();
            }
    
            _logger.LogTrace(LoggingEvents.HubPreviewTable, "SharedDataController.PreviewData: HubKey: {updateBrowserHub}, ObjectKey: {objectKey}", previewData.HubKey, previewData.ObjectKey);
            return Ok(data);
        }
        
        [HttpPost("[action]")]
        public async Task<IActionResult> DownloadData([FromBody] DownloadSharedData downloadSharedData, CancellationToken cancellationToken)
        {
            _logger.LogTrace(LoggingEvents.HubUploadFiles, "SharedDataController.DownloadData");
            
            var remoteAgent = await _remoteAgents.GetHubReaderRemoteAgent(downloadSharedData.HubKey, _operations.RepositoryManager, cancellationToken);

            if (downloadSharedData.RemoteAgentId != remoteAgent.InstanceId)
            {
                return StatusCode(426, remoteAgent);
                // throw new Exception("The remote agent did not match the current agent.");
            }
            
            // use a dictionary to group the download requests by hub.
            var downloadData = new List<DownloadData.DownloadObject>();

            foreach (var item in downloadSharedData.SharedItems)
            {
                var inputParameters = new InputParameters();
                foreach (var parameter in item.Parameters)
                {
                    inputParameters.Add(new InputParameter() {Name = parameter.Name, Value =  parameter.Value});
                }
                
                var downloadObject = new DownloadData.DownloadObject()
                {
                    ObjectKey =  item.ObjectKey,
                    ObjectType =  item.ObjectType,
                    InputColumns = item.InputColumns,
                    InputParameters = inputParameters,
                    Query = item.Query
                };
                
                downloadData.Add(downloadObject);
            }

            var repositoryManager = _operations.RepositoryManager;

            var responseKey = await _remoteAgents.DownloadData(downloadSharedData.RemoteAgentId, downloadSharedData.HubKey, downloadSharedData.DownloadUrl, downloadSharedData.ClientId, downloadData.ToArray(), downloadSharedData.DownloadFormat, true, downloadSharedData.ZipFiles, repositoryManager, cancellationToken);
            return Ok(responseKey);
        }
        
        [HttpPost("[action]")]
        public async Task<IActionResult> PreviewDashboard([FromBody] PreviewSharedDashboard previewDashboard, CancellationToken cancellationToken)
        {
            var user = await _operations.RepositoryManager.GetUserAsync(User, cancellationToken, false);
            var repositoryManager = _operations.RepositoryManager;
            
            //check user can access the hub.
            var canAccess = await repositoryManager.CanAccessSharedObjects(user, previewDashboard.HubKey, cancellationToken);
            if (!canAccess)
            {
                throw new Exception($"Can not access shared objects in the hub with the key {previewDashboard.HubKey}.");
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
//                    case EDataObjectType.Table:
//                        item.DownloadKey = await _remoteAgents.PreviewTable(previewDashboard.RemoteAgentId,
//                            previewDashboard.HubKey, previewDashboard.DownloadUrl, view.SourceTableKey.Value,
//                            view.SelectQuery, view.ChartConfig, view.InputValues, itemParameters, false, false, repositoryManager,
//                            cancellationToken);
//                        break;
//                    case EDataObjectType.Datalink:
//                        item.DownloadKey = await _remoteAgents.PreviewDatalink(previewDashboard.RemoteAgentId,
//                            previewDashboard.HubKey, previewDashboard.DownloadUrl, view.SourceDatalinkKey.Value,
//                            view.SelectQuery, view.ChartConfig, view.InputValues, itemParameters, false, repositoryManager,
//                            cancellationToken);
//                        break;
//                    default:
//                        throw new ArgumentOutOfRangeException();
//                }
//            }
    
            return Ok(dashboard);
        }
        
        [HttpPost("[action]")]
        public async Task<IActionResult> PreviewDashboardItem([FromBody] PreviewSharedDashboardItem previewDashboard, CancellationToken cancellationToken)
        {
            var remoteAgent = await _remoteAgents.GetHubReaderRemoteAgent(previewDashboard.HubKey, _operations.RepositoryManager, cancellationToken);

            if (previewDashboard.RemoteAgentId != remoteAgent.InstanceId)
            {
                return StatusCode(426, remoteAgent);
                // throw new Exception("The remote agent did not match the current agent.");
            }
            
            var user = await _operations.RepositoryManager.GetUserAsync(User, cancellationToken, false);
            var repositoryManager = _operations.RepositoryManager;

            //check user can access the hub.
            var canAccess = await repositoryManager.CanAccessSharedObjects(user, previewDashboard.HubKey, cancellationToken);
            if (!canAccess)
            {
                throw new Exception($"Can not access shared objects in the hub with the key {previewDashboard.HubKey}.");
            }

            var dashboard = await repositoryManager.GetDashboard(previewDashboard.HubKey, previewDashboard.DashboardKey, cancellationToken);
            var item = dashboard.DexihDashboardItems.SingleOrDefault(c => c.Key == previewDashboard.DashboardItemKey);

            if (item == null)
            {
                throw new Exception($"The dashboard with the key {previewDashboard.DashboardItemKey} could not be found.");
            }
            
            var view = await repositoryManager.GetView(dashboard.HubKey, item.ViewKey, cancellationToken);

            var itemParameters = new InputParameters();
            foreach(var parameter in item.Parameters)
            {
                itemParameters.Add( parameter.Name, previewDashboard.Parameters.SetParameters(parameter.Value));
            }
            
            switch (view.SourceType)
            {
                case EDataObjectType.Table:
                    return Ok(await _remoteAgents.PreviewTable(previewDashboard.RemoteAgentId,
                        previewDashboard.HubKey, previewDashboard.DownloadUrl, view.SourceTableKey.Value,
                        view.SelectQuery, view.GetViewConfig(), view.InputValues, itemParameters, false, false, repositoryManager,
                        cancellationToken));
                case EDataObjectType.Datalink:
                    return Ok(await _remoteAgents.PreviewDatalink(previewDashboard.RemoteAgentId,
                        previewDashboard.HubKey, previewDashboard.DownloadUrl, view.SourceDatalinkKey.Value, false,
                        view.SelectQuery, view.GetViewConfig(), view.InputValues, itemParameters, false, repositoryManager,
                        cancellationToken));
                default:
                    throw new ArgumentOutOfRangeException();
            }
        }
    }
}