using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using dexih.repository;
using dexih.operations;
using dexih.api.Models;
using dexih.api.Services;
using Microsoft.AspNetCore.Authorization;
using Newtonsoft.Json.Linq;
using Microsoft.AspNetCore.Http;
using System.IO;
using System.IO.Compression;
using System.Text;
using dexih.api.Services.Message;
using dexih.api.Services.Operations;
using Microsoft.Extensions.Logging;
using Dexih.Utils.ManagedTasks;
using dexih.api.Services.Remote;
using dexih.functions.Parameter;
using dexih.remote.operations;
using dexih.transforms;
using Dexih.Utils.DataType;
using Newtonsoft.Json;

namespace dexih.api.Controllers
{
    [Route("api/[controller]")]
	[RequestFormSizeLimit()]
    [Authorize]
    [ValidateAntiForgeryToken]
    [ApiExceptionFilter]
    [ApiFilter]
    public class HubController : Controller
    {
        public HubController(DexihRepositoryContext dbContext,
            IDexihOperations operations,
            IRemoteAgents remoteServers,
			ILoggerFactory loggerFactory,
	        IEmailSender emailSender
			)
        {
	        _remoteAgents = remoteServers;
            _operations = operations;
			_logger = loggerFactory.CreateLogger("HubController");
	        _emailSender = emailSender;
        }

        /// <summary>
        /// Note, this is set from the ValidateHub
        /// </summary>
        public DexihHubUser.EPermission HubPermission { get; set; }

	    private readonly IEmailSender _emailSender;
	    private readonly IRemoteAgents _remoteAgents;
        private readonly IDexihOperations _operations;
		private readonly ILogger _logger;

	    [HttpPost("[action]")]
        [ValidateHub(DexihHubUser.EPermission.FullReader)]
        public async Task<GetHubCacheResult> GetHubCache([FromBody] HubKeyValue hubKey)
        {
			_logger.LogTrace(LoggingEvents.HubGetHubCache, "HubController.GetHubCache: HubKey: {updateBrowserHub}", hubKey.HubKey);
	        var hub = await _operations.RepositoryManager.GetHub(hubKey.HubKey);
            return new GetHubCacheResult() {Permission =  HubPermission, Hub = hub};
        }
	    
        [HttpPost("[action]")]
        [ValidateHub(DexihHubUser.EPermission.Owner)]
        public Task<string> Decrypt([FromBody] DecryptValue decryptValue)
        {
			_logger.LogTrace(LoggingEvents.HubDecrypt, "HubController.Decrypt: HubKey: {updateBrowserHub}, Value: {value}.", decryptValue.HubKey, decryptValue.Value);
			var repositoryManager = _operations.RepositoryManager;
			var result = _remoteAgents.Decrypt(decryptValue.RemoteAgentId, decryptValue.HubKey, decryptValue.Value, repositoryManager);
            return result;
        }

        [HttpPost("[action]")]
        [ValidateHub(DexihHubUser.EPermission.Owner)]
        public async Task<object> RunRemoteCommand([FromBody] RemoteMessage remoteMessage)
        {
			_logger.LogTrace(LoggingEvents.HubRunRemoteCommand, "HubController.RunRemoteCommand: HubKey: {updateBrowserHub}, Method: {method}, Parameters: {parameters}.", remoteMessage.HubKey, remoteMessage.Method, remoteMessage.GetParametersDetails());
			var repositoryManager = _operations.RepositoryManager;
			var result = await _remoteAgents.SendRemoteMessage<object>(remoteMessage.HubKey,
				remoteMessage.RemoteAgentId, remoteMessage.Method, remoteMessage.Value, remoteMessage.Parameters,
				repositoryManager);
            return result;
        }


	    private  Task<List<RepositoryManager.HubUser>> GetHubUsers(long hubKey)
	    {
			var operations = _operations.RepositoryManager;
			var result = operations.GetHubUsers(hubKey);
			return result;
		    
	    }

        [HttpPost("[action]")]
        [ValidateHub(DexihHubUser.EPermission.Owner)]
        public Task<List<RepositoryManager.HubUser>> HubUsers([FromBody] HubKeyValue hubKeyValue)
        {
	        return GetHubUsers(hubKeyValue.HubKey);
        }

        [HttpPost("[action]")]
		[ValidateHub(DexihHubUser.EPermission.Owner)]
		public async Task SetUsersPermission([FromBody] UserPermissions userPermissions)
		{
			var database = _operations.RepositoryManager;
			var userIds = new List<ApplicationUser>();
			var appUser = await database.GetUser(User);

			var updateUsers = new List<ApplicationUser>();
			var newUsers = new List<ApplicationUser>();
			var inviteUsers = new List<ApplicationUser>();
			var inviteQuota = appUser.InviteQuota;
			
			foreach (var email in userPermissions.Emails)
			{
				var user = await _operations.RepositoryManager.GetUserFromEmail(email);
				var newUser = false;
				
				// if the user doesn't exist, create a dummy user entry.
				if (user == null)
				{
					user = new ApplicationUser()
					{
						Email = email,
						UserName = email,
						IsInvited = false,
						HubQuota = 0,
						InviteQuota = 0
					};
					newUser = true;
					newUsers.Add(user);
				}

				if (userPermissions.SendInvites && !user.IsInvited)
				{
					if (!_operations.Config.InviteOnly || appUser.IsAdmin || inviteQuota > 0)
					{
						user.IsInvited = true;
						if(!appUser.IsAdmin) inviteQuota--;
						
						if (!newUser)
						{
							updateUsers.Add(user);
						}

						inviteUsers.Add(user);
					}
					else
					{
						throw new HubControllerException("The current user does not have enough available invites to complete.");
					}
				}

				userIds.Add(user);
			}

			if (appUser.InviteQuota != inviteQuota)
			{
				await _operations.RepositoryManager.UpdateUserAsync(appUser);
			}

			foreach (var user in newUsers)
			{
				await _operations.RepositoryManager.CreateUserAsync(user);
			}

			foreach (var user in updateUsers)
			{
				await _operations.RepositoryManager.UpdateUserAsync(user);
			}

			if (inviteUsers.Count > 0)
			{
				await SendInvites(inviteUsers);
			}
			
			await database.HubSetUserPermissions(userPermissions.HubKey, userIds.Select(c=>c.Id), userPermissions.Permission);

			// send a notification email to invited users.
			var path = Path.Combine(Directory.GetCurrentDirectory(), "Resources", "EmailTemplates", "hubAccess.html");
			var bodyOriginal = System.IO.File.ReadAllText(path);
			var url = (Request.IsHttps ? "https://" : "http://") + Request.Host.ToUriComponent();
			var hub = await _operations.RepositoryManager.GetHub(userPermissions.HubKey);

			foreach (var user in userIds.Where(c=>c.IsEnabled && c.IsInvited && c.IsRegistered))
			{
				var body = new StringBuilder(bodyOriginal.Replace("{{url}}", url));
				body.Replace("{{hubKey}}", userPermissions.HubKey.ToString());
				body.Replace("{{hubName}}", hub.Name);
				body.Replace("{{permission}}", userPermissions.Permission.ToString());
				var name = string.IsNullOrEmpty(user.FirstName) ? "there" : user.FirstName;
				body.Replace("{{name}}", name);
				body.Replace("{{email}}", user.Email);

				_emailSender.SendEmail(user.Email, "Hub Access Granted", null, body.ToString());
			}
		}
	    
	    private async Task SendInvites(IEnumerable<ApplicationUser> users) 
	    {
		    var url = (Request.IsHttps ? "https://" : "http://") + Request.Host.ToUriComponent();

		    foreach (var user in users)
		    {
			    string template;
			    string code;
			    string subject;
				
			    if (user.EmailConfirmed)
			    {
				    template = "userReady.html";
				    subject = "Information Hub Access Granted!";
				    code = "";
			    }
			    else
			    {
				    template = "invite.html";
				    code = await _operations.RepositoryManager.GenerateEmailConfirmationTokenAsync(user);
				    subject = "Information Hub Invitation Ready!";
			    }

			    var path = Path.Combine(Directory.GetCurrentDirectory(), "Resources", "EmailTemplates", template);
			    var bodyOriginal = System.IO.File.ReadAllText(path);
			    var body = new StringBuilder(bodyOriginal.Replace("{{url}}", url));

			    body.Replace("{{code}}", code);
			    var name = string.IsNullOrEmpty(user.FirstName) ? "there" : user.FirstName;
			    body.Replace("{{name}}", name);
			    body.Replace("{{email}}", user.Email);

			    _emailSender.SendEmail(user.Email, subject, null, body.ToString());
		    }
	    }
	    
	    
		[HttpPost("[action]")]
		[ValidateHub(DexihHubUser.EPermission.Owner)]
		public async Task RemoveUsers([FromBody] UserPermissions userPermissions)
		{
			var database = _operations.RepositoryManager;
			var userIds = new List<ApplicationUser>();
			
			foreach (var email in userPermissions.Emails)
			{
				var user = await _operations.RepositoryManager.GetUserFromEmail(email);

				// if the user doesn't exist, create a dummy user entry.
				if (user != null)
				{
					userIds.Add(user);
				}
			}
			
			await database.HubDeleteUsers(userPermissions.HubKey, userIds.Select(c=>c.Id));
			
			// send a notification email to invited users.
			var path = Path.Combine(Directory.GetCurrentDirectory(), "Resources", "EmailTemplates", "hubAccessRemove.html");
			var bodyOriginal = System.IO.File.ReadAllText(path);
			var url = (Request.IsHttps ? "https://" : "http://") + Request.Host.ToUriComponent();
			var hub = await _operations.RepositoryManager.GetHub(userPermissions.HubKey);

			foreach (var user in userIds.Where(c=>c.IsEnabled && c.IsInvited && c.IsRegistered))
			{
				var body = new StringBuilder(bodyOriginal.Replace("{{url}}", url));
				body.Replace("{{hubKey}}", userPermissions.HubKey.ToString());
				body.Replace("{{hubName}}", hub.Name);
				var name = string.IsNullOrEmpty(user.FirstName) ? "there" : user.FirstName;
				body.Replace("{{name}}", name);
				body.Replace("{{email}}", user.Email);

				_emailSender.SendEmail(user.Email, "Hub Access Removed", null, body.ToString());
			}
		}
	    
	    [HttpPost("[action]")]
	    [ValidateAntiForgeryToken]
	    [ValidateHub(DexihHubUser.EPermission.PublishReader)]
	    public async Task<RemoteAgentStatus> GetRemoteAgentStatus([FromBody] GetRemoteAgentStatus remoteAgentStatus)
	    {
		    var database = _operations.RepositoryManager;
		    var result = await _remoteAgents.SendRemoteMessage<RemoteAgentStatus>(remoteAgentStatus.HubKey,
			    remoteAgentStatus.InstanceId, nameof(RemoteOperations.GetRemoteAgentStatus), null, null, database);
		    return result;
	    }
	    
	    
	    
	    [HttpPost("[action]")]
	    [ValidateHub(DexihHubUser.EPermission.Owner)]
	    public async Task<DexihRemoteAgentHub> SaveRemoteAgent([FromBody] RemoteAgentUpdate remoteAgentUpdate)
	    {
		    var operations = _operations.RepositoryManager;
		    var appUser = await operations.GetUser(User);
		    var dbRemoteAgent = remoteAgentUpdate.Value;

//			var activeAgent = _remoteAgents.GetConnectedRemoteAgents().Values.SingleOrDefault(c => c.RemoteAgentKey == dbRemoteAgent.RemoteAgentKey);
//			if (activeAgent == null)
//			{
//				throw new HubControllerException("An active instance of the selected remote agent can not be found..");
//			}
//			if (activeAgent.RemoteSettings.Runtime.User.Id != appUser.Id)
//			{
//				throw new HubControllerException("The remote agent cannot be saved as the user id for the current user and remote agent do not match.  To create or modify a remote agent authorization ensure that the remote agent is logged in as the current user.");
//			}

		    var remoteAgent = await operations.SaveRemoteAgentHub(appUser.Id, remoteAgentUpdate.HubKey, dbRemoteAgent);
		    return remoteAgent;
	    }
	    
	    [HttpPost("[action]")]
	    [ValidateAntiForgeryToken]
	    [ValidateHub(DexihHubUser.EPermission.Owner)]
	    public Task DeleteRemoteAgent([FromBody] RemoteAgentDelete remoteAgentDelete)
	    {
		    var database = _operations.RepositoryManager;

		    //get the rules for this agent (if they exist).
		    if (remoteAgentDelete != null && remoteAgentDelete.RemoteAgentHubKey > 0)
		    {
			    var result = database.DeleteRemoteAgentHub(remoteAgentDelete.HubKey, remoteAgentDelete.RemoteAgentHubKey);
			    return result;
		    }

		    throw new HubControllerException("The hub has not been registered, so the deauthorize action did nothing.");
	    }
	    
        [HttpPost("[action]")]
        [ValidateHub(DexihHubUser.EPermission.User)]
        public async Task<DexihConnection> SaveConnection([FromBody] SaveConnection saveConnection)
        {
			_logger.LogTrace(LoggingEvents.HubSaveConnection, "HubController.SaveConnection: HubKey: {updateBrowserHub}.", saveConnection.HubKey);


	        var connection = saveConnection.Value;
	        
	        // if the user is not an owner, then passwords and connection strings must be re-entered each time.
	        if (HubPermission != DexihHubUser.EPermission.Owner)
	        {
		        if (!string.IsNullOrEmpty(connection.Password) && string.IsNullOrEmpty(connection.PasswordRaw))
		        {
			        throw new RepositoryException("The save cannot be completed, as the password must be re-entered.");
		        }
		        
		        if (connection.UsePasswordVariable)
		        {
			        throw new RepositoryException("The save cannot be completed, as only hub owners can save connections which use password variables.");
		        }
		        
		        if (!string.IsNullOrEmpty(connection.ConnectionString) && string.IsNullOrEmpty(connection.ConnectionStringRaw))
		        {
			        throw new RepositoryException("The save cannot be completed, as the connection string must be re-entered.");
		        }
		        
		        if (connection.UseConnectionStringVariable)
		        {
			        throw new RepositoryException("The save cannot be completed, as only hub owners can save connections which use connection string variables.");
		        }
	        }

            var repositoryManager = _operations.RepositoryManager;
            if (!string.IsNullOrEmpty(connection.PasswordRaw))
            {
                var result = await _remoteAgents.Encrypt(saveConnection.RemoteAgentId, saveConnection.HubKey, connection.PasswordRaw, repositoryManager);
                connection.Password = result;
                connection.PasswordRaw = null;
            }
            if (!string.IsNullOrEmpty(connection.ConnectionStringRaw))
            {
                var result = await _remoteAgents.Encrypt(saveConnection.RemoteAgentId, saveConnection.HubKey, connection.ConnectionStringRaw, repositoryManager);
                connection.ConnectionString = result;
                connection.ConnectionStringRaw = null;
            }
            var saveResult = await _operations.RepositoryManager.SaveConnection(saveConnection.HubKey, saveConnection.Value);

            return saveResult;
        }

        [HttpPost("[action]")]
        [ValidateHub(DexihHubUser.EPermission.User)]
        public Task<DexihConnection[]> DeleteConnections([FromBody] HubKeyItems hubKeyConnections)
        {
			_logger.LogTrace(LoggingEvents.HubDeleteConnections, "HubController.DeleteConnections: HubKey: {updateBrowserHub}.", hubKeyConnections.HubKey);
			var deleteResult = _operations.RepositoryManager.DeleteConnections(hubKeyConnections.HubKey, hubKeyConnections.ItemKeys);
            return deleteResult;
        }

        [HttpPost("[action]")]
        [ValidateHub(DexihHubUser.EPermission.User)]
        public async Task<DexihTable> ImportFileFormat([FromForm] ImportFileFormat importFileFormat, IFormFile file)
        {
			_logger.LogTrace(LoggingEvents.HubImportFileFormat, "HubController.ImportFileFormat: HubKey: {updateBrowserHub}.", importFileFormat.HubKey);

            if (file !=  null  && file.Length > 0)
            {
                var table = importFileFormat.TableObj;
	            var fileSample = new StringBuilder();

	            if (table.FormatType == DataType.ETypeCode.Text)
	            {
		            //get the first 20 lines of the file as a sample.
		            var reader = new StreamReader(file.OpenReadStream());

		            for (var i = 0; i < 20; i++)
		            {
			            fileSample.AppendLine(await reader.ReadLineAsync());

			            if (reader.EndOfStream)
				            break;
		            }
	            }
	            else
	            {
		            var reader = new StreamReader(file.OpenReadStream());
		            fileSample.AppendLine(await reader.ReadToEndAsync());
	            }

	            //attached the filesample to the file to be imported.
                table.FileSample = fileSample.ToString();
                var importedTableResult = await ImportTables(importFileFormat.HubKey, importFileFormat.RemoteAgentId, new[] { table }, importFileFormat.Save);
                return importedTableResult[0];
            }
            else
            {
                throw new HubControllerException("Only one file should be selected and it should contain data.");
            }

        }

		[HttpPost("[action]")]
		[ValidateHub(DexihHubUser.EPermission.User)]
		public Task<DexihTable[]> ImportTables([FromBody] ImportTables importTables)
		{
			_logger.LogTrace(LoggingEvents.HubImportTables, "HubController.ImportTables: HubKey: {updateBrowserHub}.", importTables.HubKey);

			var importedTableResult = ImportTables(importTables.HubKey, importTables.RemoteAgentId, importTables.Tables, importTables.Save);
			return importedTableResult;
		}

        private async Task<DexihTable[]> ImportTables(long hubKey, string remoteAgentId, DexihTable[] hubTables, bool save)
        {
			_logger.LogTrace(LoggingEvents.HubImportTables, "HubController.ImportTables: HubKey: {updateBrowserHub}.", hubKey);

			var repositoryManager = _operations.RepositoryManager;
			var importedTables = await _remoteAgents.ImportTables(remoteAgentId, hubKey, hubTables, repositoryManager);

			var saveTables = new List<DexihTable>();
			var errorTables = new List<DexihTable>();

            foreach(var importedTable in importedTables)
            {
				if ( importedTable.EntityStatus.LastStatus != EntityStatus.EStatus.Error)
				{
					importedTable.HubKey = hubKey;
					//importedTable.EntityStatus.IsBusy = true;
					//importedTable.EntityStatus.Message = "Updating...";
					saveTables.Add(importedTable);
				}
				else 
				{
					importedTable.EntityStatus.IsBusy = false;
					errorTables.Add(importedTable);
				}
            }

            if (save)
            {
                var tablesSave = await repositoryManager.SaveTables(hubKey, saveTables, true);
                var returnTables = tablesSave.Concat(errorTables).ToArray();
                return returnTables;
            }
            else
            {
                foreach (var table in saveTables)
                {
                    var columnKey = -1;
                    foreach (var column in table.DexihTableColumns)
                    {
                        if (column.Key <= 0)
                        {
                            column.Key = columnKey;
                            columnKey--;
                        }
                    }
                }
                var returnTables = saveTables.Concat(errorTables).ToArray();
                return returnTables;
            }

        }


        [HttpPost("[action]")]
        [ValidateHub(DexihHubUser.EPermission.User)]
        public async Task<JToken> CreateTables([FromBody] CreateTables createTables)
        {
            _logger.LogTrace(LoggingEvents.HubCreateTables, "HubController.CreateTables: HubKey: {updateBrowserHub}.", createTables.HubKey);

            var repositoryManager = _operations.RepositoryManager;
            var result = await _remoteAgents.CreateTables(createTables.RemoteAgentId, createTables.HubKey,
	            createTables.Tables, createTables.dropTables, repositoryManager);
            return result;
        }

        [HttpPost("[action]")]
	    [ValidateHub(DexihHubUser.EPermission.User)]
	    public async Task<JToken> ClearTables([FromBody] ImportTables clearTables)
	    {
		    _logger.LogTrace(LoggingEvents.HubClearTables, "HubController.ClearTables: HubKey: {updateBrowserHub}.", clearTables.HubKey);

		    var repositoryManager = _operations.RepositoryManager;
		    var result = await _remoteAgents.ClearTables(clearTables.RemoteAgentId, clearTables.HubKey, clearTables.Tables, repositoryManager);

		    return result;
	    }
	    

        [HttpPost("[action]")]
        [ValidateHub(DexihHubUser.EPermission.User)]
        public async Task<DexihTable> SaveTable([FromBody] SaveTable saveTable)
        {
			_logger.LogTrace(LoggingEvents.HubSaveTable, "HubController.SaveTable: HubKey: {updateBrowserHub}", saveTable.HubKey);

			var repositoryManager = _operations.RepositoryManager;
            var savedTables = await repositoryManager.SaveTables(saveTable.HubKey, new DexihTable[1] {saveTable.Value}, true);
            return savedTables[0];
        }

        [HttpPost("[action]")]
        [ValidateHub(DexihHubUser.EPermission.User)]
        public Task DeleteTables([FromBody] DeleteTables deleteTables)
        {
			_logger.LogTrace(LoggingEvents.HubDeleteTables, "HubController.DeleteTables: HubKey: {updateBrowserHub}", deleteTables.HubKey);

            var repositoryManager = _operations.RepositoryManager;
            return repositoryManager.DeleteTables(deleteTables.HubKey, deleteTables.TableKeys);
        }

        [HttpPost("[action]")]
        [ValidateHub(DexihHubUser.EPermission.User)]
        public Task ShareTables([FromBody] ShareTables shareTables)
        {
            _logger.LogTrace(LoggingEvents.HubShareTables, "HubController.HubShareTables: HubKey: {updateBrowserHub}", shareTables.HubKey);
            var repositoryManager = _operations.RepositoryManager;
            return repositoryManager.ShareTables(shareTables.HubKey, shareTables.TableKeys, shareTables.IsShared);
        }

        [HttpPost("[action]")]
		[ValidateHub(DexihHubUser.EPermission.PublishReader)]
		public Task<string> PreviewTable([FromBody] PreviewTable previewTable)
		{
			_logger.LogTrace(LoggingEvents.HubPreviewTable, "HubController.PreviewTable: HubKey: {updateBrowserHub}, TableKey: {tableKey}", previewTable.HubKey, previewTable.TableKey);
			var repositoryManager = _operations.RepositoryManager;
			var remoteServerResult = _remoteAgents.PreviewTable(previewTable.RemoteAgentId, previewTable.HubKey, previewTable.TableKey, previewTable.SelectQuery, previewTable.InputColumns, previewTable.ShowRejectedData, previewTable.DownloadUrl, repositoryManager);
			return remoteServerResult;
		}
	    
	    [HttpPost("[action]")]
	    [ValidateHub(DexihHubUser.EPermission.PublishReader)]
	    public Task<string> PreviewTableQuery([FromBody] PreviewTableQuery previewTableQuery)
	    {
		    _logger.LogTrace(LoggingEvents.HubPreviewTable, "HubController.PreviewTable: HubKey: {updateBrowserHub}, TableKey: {tableKey}", previewTableQuery.HubKey, previewTableQuery.Table.Key);
		    var repositoryManager = _operations.RepositoryManager;
		    var remoteServerResult = _remoteAgents.PreviewTable(previewTableQuery.RemoteAgentId, previewTableQuery.HubKey, previewTableQuery.Table, previewTableQuery.SelectQuery, previewTableQuery.InputColumns, previewTableQuery.ShowRejectedData, previewTableQuery.DownloadUrl, repositoryManager);
		    return remoteServerResult;
	    }

	    [HttpPost("[action]")]
	    [ValidateHub(DexihHubUser.EPermission.PublishReader)]
	    public Task<string> PreviewDatalink([FromBody] PreviewDatalink previewDatalink)
	    {
		    _logger.LogTrace(LoggingEvents.HubPreviewDatalink, "HubController.PreviewDatalink: HubKey: {updateBrowserHub}, DatalinkKey: {DatalinkKey}", previewDatalink.HubKey, previewDatalink.DatalinkKey);
		    var repositoryManager = _operations.RepositoryManager;
		    var remoteServerResult = _remoteAgents.PreviewDatalink(previewDatalink.RemoteAgentId, previewDatalink.HubKey, previewDatalink.DatalinkKey, previewDatalink.SelectQuery, previewDatalink.InputColumns, previewDatalink.DownloadUrl, repositoryManager);
		    return remoteServerResult;
	    }
	    
	    [HttpPost("[action]")]
	    [ValidateHub(DexihHubUser.EPermission.PublishReader)]
	    public Task<TransformProperties> DatalinkProperties([FromBody] PreviewDatalink previewDatalink)
	    {
		    _logger.LogTrace(LoggingEvents.HubPreviewDatalink, "HubController.PreviewDatalink: HubKey: {updateBrowserHub}, DatalinkKey: {DatalinkKey}", previewDatalink.HubKey, previewDatalink.DatalinkKey);
		    var repositoryManager = _operations.RepositoryManager;
		    var remoteServerResult = _remoteAgents.DatalinkProperties(previewDatalink.RemoteAgentId, previewDatalink.HubKey, previewDatalink.DatalinkKey, previewDatalink.SelectQuery, previewDatalink.InputColumns, repositoryManager);
		    return remoteServerResult;
	    }
	    
	    [HttpPost("[action]")]
	    [ValidateHub(DexihHubUser.EPermission.PublishReader)]
	    public Task<string> PreviewTransform([FromBody] PreviewTransform previewTransform)
	    {
		    _logger.LogTrace(LoggingEvents.HubPreviewDatalink, "HubController.PreviewTransform: HubKey: {updateBrowserHub}, DatalinkKey: {DatalinkKey}", previewTransform.HubKey, previewTransform.Datalink.Key);
		    var repositoryManager = _operations.RepositoryManager;
		    var remoteServerResult = _remoteAgents.PreviewTransform(previewTransform.RemoteAgentId, previewTransform.HubKey, previewTransform.Datalink, previewTransform.DatalinkTransformKey, previewTransform.SelectQuery, previewTransform.InputColumns, previewTransform.DownloadUrl, repositoryManager);
		    return remoteServerResult;
	    } 
	    
	    [HttpPost("[action]")]
	    [ValidateHub(DexihHubUser.EPermission.PublishReader)]
	    public Task<string> PreviewView([FromBody] PreviewView previewView)
	    {
		    if (previewView.HubView == null)
		    {
			    throw new ArgumentNullException(nameof(previewView.HubView));
		    }
		    
		    _logger.LogTrace(LoggingEvents.HubPreviewView, "HubController.PreviewView: HubKey: {updateBrowserHub}, DatalinkKey: {DatalinkKey}", previewView.HubKey, previewView.HubView?.Key);
		    var repositoryManager = _operations.RepositoryManager;

		    switch(previewView.HubView.SourceType)
		    {
			    case ESourceType.Table:
				    return _remoteAgents.PreviewTable(previewView.RemoteAgentId, previewView.HubKey, previewView.HubView.SourceTableKey.Value, previewView.HubView.SelectQuery, previewView.HubView.InputValues, false, previewView.DownloadUrl, repositoryManager);
			    case ESourceType.Datalink:
				    return _remoteAgents.PreviewDatalink(previewView.RemoteAgentId, previewView.HubKey, previewView.HubView.SourceDatalinkKey.Value, previewView.HubView.SelectQuery, previewView.HubView.InputValues, previewView.DownloadUrl, repositoryManager);
			    default:
				    throw new ArgumentOutOfRangeException();
		    }
	    }
	    
	    [HttpPost("[action]")]
	    [ValidateHub(DexihHubUser.EPermission.User)]
	    public Task<string[]> ImportFunctionMappings([FromBody] ImportFunctionMappings importFunctionMappings)
	    {
		    _logger.LogTrace(LoggingEvents.HubPreviewDatalink, "HubController.ImportFunctionMappings: HubKey: {updateBrowserHub}, DatalinkKey: {DatalinkKey}", importFunctionMappings.HubKey, importFunctionMappings.Datalink.Key);
		    var repositoryManager = _operations.RepositoryManager;
		    var remoteServerResult = _remoteAgents.ImportFunctionMappings(importFunctionMappings.RemoteAgentId, importFunctionMappings.HubKey, importFunctionMappings.Datalink, importFunctionMappings.DatalinkTransformKey, importFunctionMappings.DatalinkTransformItem, repositoryManager);
		    return remoteServerResult;
	    }
	    
        [HttpPost("[action]")]
        [ValidateHub(DexihHubUser.EPermission.User)]
        public async Task<DexihDatalink[]> CreateDatalinks([FromBody] NewDatalinks datalink)
        {
			_logger.LogTrace(LoggingEvents.HubCreateDatalinks, "HubController.CreateDatalinks: HubKey: {updateBrowserHub}, SourceTableKeys {sourceTableKeys}.", datalink.HubKey, string.Join(",", datalink.SourceTableKeys.Select(c=>c.ToString())));

			var repositoryManager = _operations.RepositoryManager;
	        var namingStandards = await _remoteAgents.NamingStandards(datalink.RemoteAgentId, datalink.HubKey, repositoryManager) ??  new NamingStandards();

	        var newDatalinks  = await repositoryManager.NewDatalinks(
                datalink.HubKey,
                datalink.DatalinkName,
                datalink.DatalinkType,
                datalink.TargetConnectionKey,
                datalink.SourceTableKeys,
                datalink.TargetTableKey,
                datalink.TargetTableName,
                datalink.AuditConnectionKey,
                datalink.AddSourceColumns,
	            datalink.AuditColumns,
	            namingStandards);

            return newDatalinks;
        }

        [HttpPost("[action]")]
        [ValidateHub(DexihHubUser.EPermission.User)]
        public Task<DexihDatalink[]> DeleteDatalinks([FromBody] HubKeyItems hubKeyDatalinks)
        {
			_logger.LogTrace(LoggingEvents.HubDeleteDatalinks, "HubController.DeleteDatalinks: HubKey: {updateBrowserHub}, DatalinkKeys {DatalinkKeys}.", hubKeyDatalinks.HubKey, string.Join(",", hubKeyDatalinks.ItemKeys.Select(c => c.ToString())));

			var repositoryManager = _operations.RepositoryManager;
            var deletedDatalinks  = repositoryManager.DeleteDatalinks(hubKeyDatalinks.HubKey, hubKeyDatalinks.ItemKeys);
            return deletedDatalinks;
        }

        [HttpPost("[action]")]
        [ValidateHub(DexihHubUser.EPermission.User)]
        public Task ShareDatalinks([FromBody] ShareDatalinks shareDatalinks)
        {
            _logger.LogTrace(LoggingEvents.HubShareDatalinks, "HubController.HubShareDatalinks: HubKey: {updateBrowserHub}", shareDatalinks.HubKey);

            var repositoryManager = _operations.RepositoryManager;
            return repositoryManager.ShareDatalinks(shareDatalinks.HubKey, shareDatalinks.DatalinkKeys, shareDatalinks.IsShared);
        }

        [HttpPost("[action]")]
        [ValidateHub(DexihHubUser.EPermission.User)]
        public async Task<DexihDatalink> SaveDatalink([FromBody] SaveDatalink saveDatalink)
        {
            var datalink = saveDatalink.Value;

			_logger.LogTrace(LoggingEvents.HubSaveDatalink, "HubController.SaveDatalink: HubKey: {updateBrowserHub}, DatalinkKey: {DatalinkKey}, Name: {datalinkName}.", saveDatalink.HubKey, datalink.Key, datalink.Name);

			var repositoryManager = _operations.RepositoryManager;
            var datalinks = await repositoryManager.SaveDatalinks(saveDatalink.HubKey, new[] { datalink }, false);
            return datalinks[0];
        }

        [HttpPost("[action]")]
        [ValidateHub(DexihHubUser.EPermission.User)]
        public Task DeleteDatajobs([FromBody] HubKeyItems hubKeyDatajobs)
        {
			_logger.LogTrace(LoggingEvents.HubDeleteDatajobs, "HubController.DeleteDatajobs: HubKey: {updateBrowserHub}, DatajobKeys {DatajobKeys}.", hubKeyDatajobs.HubKey, string.Join(",", hubKeyDatajobs.ItemKeys.Select(c => c.ToString())));

			var repositoryManager = _operations.RepositoryManager;
            return repositoryManager.DeleteDatajobs(hubKeyDatajobs.HubKey, hubKeyDatajobs.ItemKeys);
        }

        [HttpPost("[action]")]
        [ValidateHub(DexihHubUser.EPermission.User)]
        public async Task<DexihDatajob> SaveDatajob([FromBody] SaveDatajob saveDatajob)
        {
			_logger.LogTrace(LoggingEvents.HubSaveDatajob, "HubController.SaveDatajobs: HubKey: {updateBrowserHub}", saveDatajob.HubKey);

			var repositoryManager = _operations.RepositoryManager;
			var savedDatajobs = await repositoryManager.SaveDatajobs(saveDatajob.HubKey, new[] { saveDatajob.Value } );
            return savedDatajobs[0];
        }

        [HttpPost("[action]")]
        [ValidateHub(DexihHubUser.EPermission.User)]
        public Task<DexihColumnValidation[]> DeleteColumnValidations([FromBody] HubKeyItems hubKeyValidations)
        {
			_logger.LogTrace(LoggingEvents.HubDeleteValidations, "HubController.DeleteValidations: HubKey: {updateBrowserHub}, DatajobKeys {DatajobKeys}.", hubKeyValidations.HubKey, string.Join(",", hubKeyValidations.ItemKeys.Select(c => c.ToString())));

			var deleteResult = _operations.RepositoryManager.DeleteColumnValidations(hubKeyValidations.HubKey, hubKeyValidations.ItemKeys);
            return deleteResult;
        }

        [HttpPost("[action]")]
        [ValidateHub(DexihHubUser.EPermission.User)]
        public Task<DexihColumnValidation> SaveColumnValidation([FromBody] SaveValidation saveValidation)
        {
			_logger.LogTrace(LoggingEvents.HubSaveValidation, "HubController.SaveValidation: HubKey: {updateBrowserHub}, ColumnValidationKey {columnValidationName}.", saveValidation.HubKey, saveValidation.Value.Name);

			var repositoryManager = _operations.RepositoryManager;
            var saveResult = repositoryManager.SaveColumnValidation(saveValidation.HubKey, saveValidation.Value);

            //send an update of the connection to any connected clients.
            return saveResult;
        }
	    
	    [HttpPost("[action]")]
	    [ValidateHub(DexihHubUser.EPermission.User)]
	    public Task<DexihCustomFunction[]> DeleteCustomFunctions([FromBody] HubKeyItems hubKeyValidations)
	    {
		    _logger.LogTrace(LoggingEvents.HubDeleteCustomFunctions, "HubController.DeleteValidations: HubKey: {updateBrowserHub}, DatajobKeys {DatajobKeys}.", hubKeyValidations.HubKey, string.Join(",", hubKeyValidations.ItemKeys.Select(c => c.ToString())));

		    var deleteResult = _operations.RepositoryManager.DeleteCustomFunctions(hubKeyValidations.HubKey, hubKeyValidations.ItemKeys);
		    return deleteResult;
	    }

	    [HttpPost("[action]")]
	    [ValidateHub(DexihHubUser.EPermission.User)]
	    public Task<DexihCustomFunction> SaveCustomFunction([FromBody] SaveCustomFunction saveCustomFunction)
	    {
		    _logger.LogTrace(LoggingEvents.HubSaveCustomFunctions, "HubController.HubSaveCustomFunctions: HubKey: {updateBrowserHub}, CustomFunction {customFunctionName}.", saveCustomFunction.HubKey, saveCustomFunction.Value.Name);

		    var repositoryManager = _operations.RepositoryManager;
		    var saveResult = repositoryManager.SaveCustomFunction(saveCustomFunction.HubKey, saveCustomFunction.Value);

		    //send an update of the connection to any connected clients.
		    return saveResult;
	    }

        [HttpPost("[action]")]
        [ValidateHub(DexihHubUser.EPermission.User)]
        public Task<DexihFileFormat[]> DeleteFileFormats([FromBody] HubKeyItems hubKeyFileFormats)
        {
			_logger.LogTrace(LoggingEvents.HubDeleteFileformats, "HubController.DeleteFileFormats: HubKey: {updateBrowserHub}, DataValidationKeys {dataValidationKeys}.", hubKeyFileFormats.HubKey, string.Join(",", hubKeyFileFormats.ItemKeys.Select(c => c.ToString())));

			var deleteResult = _operations.RepositoryManager.DeleteFileFormats(hubKeyFileFormats.HubKey, hubKeyFileFormats.ItemKeys);
            return deleteResult;
        }

        [HttpPost("[action]")]
        [ValidateHub(DexihHubUser.EPermission.User)]
        public Task<DexihFileFormat> SaveFileFormat([FromBody] SaveFileFormat saveFileFormat)
        {
			_logger.LogTrace(LoggingEvents.HubSaveFileformat, "HubController.SaveFileFormat: HubKey: {updateBrowserHub}", saveFileFormat.HubKey);

			var repositoryManager = _operations.RepositoryManager;
            var saveResult = repositoryManager.SaveFileFormat(saveFileFormat.HubKey, saveFileFormat.Value);
            return saveResult;
        }

        [HttpPost("[action]")]
        [ValidateHub(DexihHubUser.EPermission.User)]
        public Task<DexihHubVariable[]> DeleteHubVariables([FromBody] HubKeyItems hubKeyVariables)
        {
            _logger.LogTrace(LoggingEvents.HubDeleteHubVariables, "HubController.DeleteHubVariables: HubKey: {updateBrowserHub}, VariableKeys {variableKeys}.", hubKeyVariables.HubKey, string.Join(",", hubKeyVariables.ItemKeys.Select(c => c.ToString())));

            var deleteResult = _operations.RepositoryManager.DeleteHubVariables(hubKeyVariables.HubKey, hubKeyVariables.ItemKeys);
            return deleteResult;
        }

        [HttpPost("[action]")]
        [ValidateHub(DexihHubUser.EPermission.User)]
        public async Task<DexihHubVariable> SaveHubVariable([FromBody] SaveHubVariable saveHubVariable)
        {
            _logger.LogTrace(LoggingEvents.HubSaveHubVariable, "HubController.SaveHubVariable: HubKey: {updateBrowserHub}", saveHubVariable.HubKey);

            var hubVariable = saveHubVariable.Value;
            var repositoryManager = _operations.RepositoryManager;

            if (!string.IsNullOrEmpty(hubVariable.ValueRaw))
            {
                if (hubVariable.IsEncrypted)
                {
                    var result = await _remoteAgents.Encrypt(saveHubVariable.RemoteAgentId, saveHubVariable.HubKey, hubVariable.ValueRaw, repositoryManager);
                    hubVariable.Value = result;
                }
                else
                {
                    hubVariable.Value = hubVariable.ValueRaw;
                }
            }

            var saveResult = await repositoryManager.SaveHubVariable(saveHubVariable.HubKey, hubVariable);
            return saveResult;
        }
	    
	    [HttpPost("[action]")]
	    [ValidateHub(DexihHubUser.EPermission.User)]
	    public Task<DexihView[]> DeleteViews([FromBody] HubKeyItems views)
	    {
		    _logger.LogTrace(LoggingEvents.HubDeleteViews, "HubController.DeleteViews: HubKey: {updateBrowserHub}, ViewKeys {dataValidationKeys}.", views.HubKey, string.Join(",", views.ItemKeys.Select(c => c.ToString())));

		    var deleteResult = _operations.RepositoryManager.DeleteViews(views.HubKey, views.ItemKeys);
		    return deleteResult;
	    }

	    [HttpPost("[action]")]
	    [ValidateHub(DexihHubUser.EPermission.User)]
	    public Task<DexihView> SaveView([FromBody] SaveView saveView)
	    {
		    _logger.LogTrace(LoggingEvents.HubSaveViews, "HubController.SAveView: HubKey: {updateBrowserHub}", saveView.HubKey);

		    var repositoryManager = _operations.RepositoryManager;
		    var saveResult = repositoryManager.SaveView(saveView.HubKey, saveView.Value);
		    return saveResult;
	    }
	    
	    [HttpPost("[action]")]
	    [ValidateHub(DexihHubUser.EPermission.User)]
	    public Task<DexihApi[]> DeleteAPIs([FromBody] HubKeyItems apis)
	    {
		    _logger.LogTrace(LoggingEvents.HubDeleteApis, "HubController.DeleteApis: HubKey: {updateBrowserHub}, APIKeys {dataValidationKeys}.", apis.HubKey, string.Join(",", apis.ItemKeys.Select(c => c.ToString())));

		    var deleteResult = _operations.RepositoryManager.DeleteApis(apis.HubKey, apis.ItemKeys);
		    return deleteResult;
	    }

	    [HttpPost("[action]")]
	    [ValidateHub(DexihHubUser.EPermission.User)]
	    public Task<DexihApi> SaveApi([FromBody] SaveApi saveApi)
	    {
		    _logger.LogTrace(LoggingEvents.HubSaveApis, "HubController.SaveApis: HubKey: {updateBrowserHub}", saveApi.HubKey);

		    var repositoryManager = _operations.RepositoryManager;
		    var saveResult = repositoryManager.SaveApi(saveApi.HubKey, saveApi.Value);
		    return saveResult;
	    }
	    
	    [HttpPost("[action]")]
	    [ValidateHub(DexihHubUser.EPermission.User)]
	    public Task ActivateApis([FromBody] ActivateApis apis)
	    {
		    _logger.LogTrace(LoggingEvents.HubActivateApis, "HubController.HubActivateApis: HubKey: {hubKey}, ApiKeys: {apiKeys}", apis.HubKey, string.Join(",", apis.ApiKeys));

		    var repositoryManager = _operations.RepositoryManager;
		    return _remoteAgents.ActivateApis(apis.RemoteAgentId, apis.HubKey, apis.ConnectionId, apis.ApiKeys, repositoryManager);
	    }
	    
	    [HttpPost("[action]")]
	    [ValidateHub(DexihHubUser.EPermission.User)]
	    public Task DeactivateApis([FromBody] ActivateApis apis)
	    {
		    _logger.LogTrace(LoggingEvents.HubDeactivateApis, "HubController.DeactivateApis: HubKey: {hubKey}, ApiKeys: {apiKeys}", apis.HubKey, string.Join(",", apis.ApiKeys));

		    var repositoryManager = _operations.RepositoryManager;
		    return _remoteAgents.DeactivateApis(apis.RemoteAgentId, apis.HubKey, apis.ApiKeys, repositoryManager);
	    }
	    

	    [HttpPost("[action]")]
	    [ValidateHub(DexihHubUser.EPermission.User)]
	    public async Task<string> UploadFile([FromBody] UploadFiles uploadFiles)
	    {
		    _logger.LogTrace(LoggingEvents.HubUploadFiles, "HubController.UploadFile: HubKey: {updateBrowserHub}, TableKey: {TableKey}.", uploadFiles.HubKey, uploadFiles.TableKey);

		    var repositoryManager = _operations.RepositoryManager;
		    var table = await repositoryManager.GetTable(uploadFiles.HubKey, uploadFiles.TableKey, false);

		    if (table == null)
		    {
			    throw new HubControllerException($"The table with the key {uploadFiles.TableKey} could not be found.");
		    }
		    
		    return await _remoteAgents.UploadFile(uploadFiles.RemoteAgentId, uploadFiles.HubKey, uploadFiles.TableKey, uploadFiles.FileName, uploadFiles.DownloadUrl, _operations.RepositoryManager);
	    }
	    
	    [HttpPost("[action]")]
	    [ValidateHub(DexihHubUser.EPermission.User)]
	    public async Task<BulkUploadFilesReturn> BulkUploadFiles([FromBody] BulkUploadFiles bulkUploadFiles)
	    {
		    _logger.LogTrace(LoggingEvents.HubBulkUploadFiles, "HubController.HubBulkUploadFiles: HubKey: {updateBrowserHub}, ConnectionKey: {ConnectionKey}.", bulkUploadFiles.HubKey, bulkUploadFiles.ConnectionKey);

		    var repositoryManager = _operations.RepositoryManager;
	    
		    var result = await _remoteAgents.BulkUploadFiles(bulkUploadFiles.RemoteAgentId, bulkUploadFiles.HubKey, bulkUploadFiles.ConnectionId, bulkUploadFiles.ConnectionKey, bulkUploadFiles.FileFormatKey, bulkUploadFiles.FormatType, bulkUploadFiles.FileName, bulkUploadFiles.DownloadUrl, _operations.RepositoryManager);
		    return new BulkUploadFilesReturn() {Reference = result.reference, Url = result.url};
	    }
	    
        [HttpPost("[action]")]
        [ValidateHub(DexihHubUser.EPermission.User)]
        public Task<ManagedTask> DownloadFiles([FromBody] DownloadFiles downloadFiles)
        {
            _logger.LogTrace(LoggingEvents.HubUploadFiles, "HubController.DownloadFiles: HubKey: {updateBrowserHub}, TableKey: {TableKey}.", downloadFiles.HubKey, downloadFiles.TableKey);

            var repositoryManager = _operations.RepositoryManager;

            var result = _remoteAgents.DownloadFiles(downloadFiles.RemoteAgentId, downloadFiles.HubKey, downloadFiles.ConnectionId, downloadFiles.TableKey, downloadFiles.Path, downloadFiles.Files, downloadFiles.DownloadUrl, repositoryManager);
	        return result;
        }

        [HttpPost("[action]")]
        [ValidateHub(DexihHubUser.EPermission.FullReader)]
        public Task<ManagedTask> DownloadSharedData([FromBody] DownloadDataModel downloadData)
        {
            _logger.LogTrace(LoggingEvents.HubUploadFiles, "HubController.DownloadData: HubKey: {updateBrowserHub}", downloadData.HubKey);

            var repositoryManager = _operations.RepositoryManager;
            var downloadDataReturn = _remoteAgents.DownloadData(downloadData.RemoteAgentId, downloadData.HubKey, downloadData.ConnectionId, downloadData.DownloadObjects, downloadData.DownloadFormat, downloadData.ZipFiles, downloadData.DownloadUrl, repositoryManager);
            return downloadDataReturn;
        }

	    [HttpPost("[action]")]
	    [ValidateHub(DexihHubUser.EPermission.FullReader)]
	    public Task<ManagedTask> DownloadTableData([FromBody] DownloadTableDataModel downloadData)
	    {
		    _logger.LogTrace(LoggingEvents.HubUploadFiles, "HubController.DownloadData: HubKey: {updateBrowserHub}", downloadData.HubKey);

		    var repositoryManager = _operations.RepositoryManager;
		    var downloadDataReturn = _remoteAgents.DownloadTableData(downloadData.RemoteAgentId, downloadData.HubKey, downloadData.ConnectionId, downloadData.Table, downloadData.SelectQuery, downloadData.InputTableColumns, downloadData.RejectedTable, downloadData.DownloadFormat, downloadData.ZipFiles, downloadData.DownloadUrl, repositoryManager);
		    return downloadDataReturn;
	    }
	    
	    [HttpPost("[action]")]
	    [ValidateHub(DexihHubUser.EPermission.FullReader)]
	    public Task<ManagedTask> DownloadDatalinkData([FromBody] DownloadDatalinkDataModel downloadData)
	    {
		    _logger.LogTrace(LoggingEvents.HubUploadFiles, "HubController.DownloadData: HubKey: {updateBrowserHub}", downloadData.HubKey);

		    var repositoryManager = _operations.RepositoryManager;
		    var downloadDataReturn = _remoteAgents.DownloadDatalinkData(downloadData.RemoteAgentId, downloadData.HubKey, downloadData.ConnectionId, downloadData.Datalink, downloadData.DatalinkTransformKey, downloadData.SelectQuery, downloadData.InputTableColumns, downloadData.DownloadFormat, downloadData.ZipFiles, downloadData.DownloadUrl, repositoryManager);
		    return downloadDataReturn;
	    }
	    
	    [HttpPost("[action]")]
	    [ValidateHub(DexihHubUser.EPermission.User)]
	    public Task RunDatalinks([FromBody] RunDatalinks datalinks)
	    {
		    _logger.LogTrace(LoggingEvents.HubRunDatalinks, "HubController.RunDatalinks: HubKey: {hubKey}, DatalinkKeys: {datalinkKeys}", datalinks.HubKey, string.Join(",", datalinks.DatalinkKeys));

		    var repositoryManager = _operations.RepositoryManager;
		    return _remoteAgents.RunDatalinks(datalinks.RemoteAgentId, datalinks.HubKey, datalinks.ConnectionId, datalinks.DatalinkKeys, datalinks.TruncateTarget, datalinks.ResetIncremental, datalinks.ResetIncrementalValue, datalinks.InputColumns, repositoryManager);
	    }
	    
	    [HttpPost("[action]")]
	    [ValidateHub(DexihHubUser.EPermission.User)]
	    public Task<DexihDatalinkTest[]> DeleteDatalinkTests([FromBody] HubKeyItems items)
	    {
		    _logger.LogTrace(LoggingEvents.HubDeleteHubVariables, "HubController.DeleteDatalinkTests: HubKey: {updateBrowserHub}, VariableKeys {variableKeys}.", items.HubKey, string.Join(",", items.ItemKeys.Select(c => c.ToString())));

		    var deleteResult = _operations.RepositoryManager.DeleteDatalinkTests(items.HubKey, items.ItemKeys);
		    return deleteResult;
	    }

	    [HttpPost("[action]")]
	    [ValidateHub(DexihHubUser.EPermission.User)]
	    public async Task<DexihDatalinkTest> SaveDatalinkTest([FromBody] SaveDatalinkTest saveDatalinkTest)
	    {
		    _logger.LogTrace(LoggingEvents.HubSaveHubVariable, "HubController.SaveDatalinkTest: HubKey: {updateBrowserHub}", saveDatalinkTest.HubKey);

		    var repositoryManager = _operations.RepositoryManager;
		    var saveResult = await repositoryManager.SaveDatalinkTest(saveDatalinkTest.HubKey, saveDatalinkTest.Value);
		    return saveResult;
	    }
	    
	    [HttpPost("[action]")]
	    [ValidateHub(DexihHubUser.EPermission.User)]
	    public async Task<DexihDatalinkTest> NewDatalinkTest([FromBody] NewDatalinkTest newDatalinkTest)
	    {
		    _logger.LogTrace(LoggingEvents.HubSaveHubVariable, "HubController.NewDatalinkTest: HubKey: {updateBrowserHub}", newDatalinkTest.HubKey);

		    var repositoryManager = _operations.RepositoryManager;
		    var hub = await _operations.RepositoryManager.GetHub(newDatalinkTest.HubKey);
		    var saveResult = await repositoryManager.NewDatalinkTest(newDatalinkTest.HubKey, hub, newDatalinkTest.Name, newDatalinkTest.DatalinkKeys, newDatalinkTest.AuditConnectionKey, newDatalinkTest.TargetConnectionKey, newDatalinkTest.SourceConnectionKey);

		    if (newDatalinkTest.SnapshotData)
		    {
			    await _remoteAgents.RunDatalinkTestSnapshot(newDatalinkTest.RemoteAgentId, newDatalinkTest.HubKey, newDatalinkTest.ConnectionId, new [] {saveResult.Key}, repositoryManager);
		    }
		    return saveResult;
	    }
	    
	    [HttpPost("[action]")]
	    [ValidateHub(DexihHubUser.EPermission.User)]
	    public Task RunDatalinkTests([FromBody] RunDatalinkTests datalinkTests)
	    {
		    _logger.LogTrace(LoggingEvents.HubRunDatalinks, "HubController.RunDatalinks: HubKey: {hubKey}, DatalinkKeys: {datalinkKeys}", datalinkTests.HubKey, string.Join(",", datalinkTests.DatalinkTestKeys));

		    var repositoryManager = _operations.RepositoryManager;
		    return _remoteAgents.RunDatalinkTests(datalinkTests.RemoteAgentId, datalinkTests.HubKey, datalinkTests.ConnectionId, datalinkTests.DatalinkTestKeys, repositoryManager);
	    }
	    
	    /// <summary>
	    /// Cancels any running datalinks 
	    /// </summary>
	    /// <returns></returns>
	    [HttpPost("[action]")]
	    [ValidateHub(DexihHubUser.EPermission.User)]
	    public Task CancelDatalinkTests([FromBody] CancelDatalinkTests cancelDatalinkTests)
	    {
		    _logger.LogTrace(LoggingEvents.HubCancelDatalinkTests, "HubController.CancelDatalinkTests: HubKey: {hubKey}, AuditKeys: {auditKeys}", cancelDatalinkTests.HubKey, string.Join(",", cancelDatalinkTests.DatalinkTestKeys));

		    var repositoryManager = _operations.RepositoryManager;
		    return _remoteAgents.CancelDatalinkTests(cancelDatalinkTests.RemoteAgentId, cancelDatalinkTests.HubKey, cancelDatalinkTests.DatalinkTestKeys, repositoryManager);
	    }

	    [HttpPost("[action]")]
	    [ValidateHub(DexihHubUser.EPermission.User)]
	    public Task RunDatalinkTestSnapshot([FromBody] RunDatalinkTests datalinkTests)
	    {
		    _logger.LogTrace(LoggingEvents.HubSnapshotDatalinkTests, "HubController.SnapshotDatalinkTests: HubKey: {hubKey}, DatalinkKeys: {datalinkKeys}", datalinkTests.HubKey, string.Join(",", datalinkTests.DatalinkTestKeys));

		    var repositoryManager = _operations.RepositoryManager;
		    return _remoteAgents.RunDatalinkTestSnapshot(datalinkTests.RemoteAgentId, datalinkTests.HubKey, datalinkTests.ConnectionId, datalinkTests.DatalinkTestKeys, repositoryManager);
	    }

	    [HttpPost("[action]")]
	    [ValidateHub(DexihHubUser.EPermission.User)]
	    public Task RunDatajobs([FromBody] RunDatajobs datajobs)
	    {
		    _logger.LogTrace(LoggingEvents.HubRunDatajobs, "HubController.RunDatajobs: HubKey: {hubKey}, DatalinkKeys: {datajobKeys}", datajobs.HubKey, string.Join(",", datajobs.DatajobKeys));

		    var repositoryManager = _operations.RepositoryManager;
		    return _remoteAgents.RunDatajobs(datajobs.RemoteAgentId, datajobs.HubKey, datajobs.ConnectionId, datajobs.DatajobKeys, datajobs.TruncateTarget, datajobs.ResetIncremental, datajobs.ResetIncrementalValue, repositoryManager);
	    }

        /// <summary>
        /// Cancels any running datalinks 
        /// </summary>
        /// <returns></returns>
        [HttpPost("[action]")]
        [ValidateHub(DexihHubUser.EPermission.User)]
        public Task CancelDatalinks([FromBody] CancelDatalinks cancelDatalinkKeys)
        {
            _logger.LogTrace(LoggingEvents.HubRunDatalinks, "HubController.CancelDatalinks: HubKey: {hubKey}, AuditKeys: {auditKeys}", cancelDatalinkKeys.HubKey, string.Join(",", cancelDatalinkKeys.DatalinkKeys));

            var repositoryManager = _operations.RepositoryManager;
            return _remoteAgents.CancelDatalinks(cancelDatalinkKeys.RemoteAgentId, cancelDatalinkKeys.HubKey, cancelDatalinkKeys.DatalinkKeys, repositoryManager);
        }

        [HttpPost("[action]")]
	    [ValidateHub(DexihHubUser.EPermission.User)]
	    public Task ActivateDatajobs([FromBody] ActivateDatajobs datajobs)
	    {
		    _logger.LogTrace(LoggingEvents.HubActivateDatajobs, "HubController.ActivateDatajobs: HubKey: {hubKey}, DatalinkKeys: {datajobKeys}", datajobs.HubKey, string.Join(",", datajobs.DatajobKeys));

		    var repositoryManager = _operations.RepositoryManager;
		    return _remoteAgents.ActivateDatajobs(datajobs.RemoteAgentId, datajobs.HubKey, datajobs.ConnectionId, datajobs.DatajobKeys, repositoryManager);
	    }
	    
	    [HttpPost("[action]")]
	    [ValidateHub(DexihHubUser.EPermission.User)]
	    public Task DeactivateDatajobs([FromBody] ActivateDatajobs datajobs)
	    {
		    _logger.LogTrace(LoggingEvents.HubDeactivateDatajobs, "HubController.DeactivateDatajobs: HubKey: {hubKey}, DatalinkKeys: {datajobKeys}", datajobs.HubKey, string.Join(",", datajobs.DatajobKeys));

		    var repositoryManager = _operations.RepositoryManager;
		    return _remoteAgents.DeactivateDatajobs(datajobs.RemoteAgentId, datajobs.HubKey, datajobs.DatajobKeys, repositoryManager);
	    }
	    
	    [HttpPost("[action]")]
	    [ValidateHub(DexihHubUser.EPermission.Owner)]
	    public Task<Import> ImportPlan([FromForm] ImportOptions importOptions, IFormFile file)
	    {
		    _logger.LogTrace(LoggingEvents.HubImportPlan, "HubController.HubImportPlan");

		    var fileStream = file.OpenReadStream();
		    var serializer = new JsonSerializer();

		    using(var reader = new StreamReader(fileStream))
		    using (var jsonTextReader = new JsonTextReader(reader))
		    {
			    var hub = serializer.Deserialize<DexihHub>(jsonTextReader);
			    
			    var repositoryManager = _operations.RepositoryManager;
		    
			    var import = repositoryManager.CreateImportPlan(importOptions.HubKey, hub, importOptions.ImportActions);

			    return import;
		    }
	    }
	    
	    [HttpPost("[action]")]
	    [ValidateHub(DexihHubUser.EPermission.Owner)]
	    public Task ImportPackage([FromBody] Import import)
	    {
		    _logger.LogTrace(LoggingEvents.HubImportPackage, "HubController.HubImportPackage");
		    
		    var repositoryManager = _operations.RepositoryManager;
		    
		    // only owners can import passwords/connection strings
		    var allowPasswordImport = HubPermission == DexihHubUser.EPermission.Owner;
		    
		    return repositoryManager.ImportPackage(import, allowPasswordImport);
	    }

	    [HttpPost("[action]")]
	    [ValidateHub(DexihHubUser.EPermission.User)]
	    public IActionResult DownloadFunctionCode([FromBody] DownloadFunctionCode downloadFunctionCode)
	    {
		    var index = 0;
		    // Parameter[] inputs = null;

		    var parameters = new Parameters()
		    {
			    Inputs = new List<Parameter>(),
			    ReturnParameters = new List<Parameter>()
		    };

		    if (downloadFunctionCode.TestValues != null)
		    {
			    // inputs = new Parameter[downloadFunctionCode.TestValues.Length];
			    foreach (var functionParam in downloadFunctionCode.DatalinkTransformItem.DexihFunctionParameters
				    .Where(
					    c =>
						    c.Direction == DexihParameterBase.EParameterDirection.Input).OrderBy(c => c.Position))
			    {
				    if (index > downloadFunctionCode.TestValues.Length)
				    {
					    throw new HubControllerException(
						    "The number of test parameters did not match the number of function parameters");
				    }

//					    inputs[index] = new Parameter(functionParam.ParameterName, functionParam.DataType, false,
//						    downloadFunctionCode.TestValues[index], null);

				    parameters.Inputs.Add(new ParameterValue(functionParam.Name, functionParam.DataType,
					    downloadFunctionCode.TestValues[index]));

				    index++;
			    }

			    //TODO Download function code needs more functionality around arrays and output parameters.

			    var returnParam =
				    downloadFunctionCode.DatalinkTransformItem.DexihFunctionParameters.SingleOrDefault(c =>
					    c.Direction == DexihParameterBase.EParameterDirection.ReturnValue);

			    if (returnParam != null)
			    {
				    parameters.ReturnParameters.Add(new ParameterColumn("Return", returnParam.DataType));
			    }
		    }

		    // var code = downloadFunctionCode.DatalinkTransformItem.CreateFunctionCode(inputs, null, null, true);

		    var code = downloadFunctionCode.DatalinkTransformItem.CreateFunctionCode(parameters, null, true);

		    var zipStream = new MemoryStream();

		    using (var archive = new ZipArchive(zipStream, ZipArchiveMode.Create, true))
		    {
			    var codeEntry = archive.CreateEntry("Program.cs");
			    using (var codeEntryStream = codeEntry.Open())
			    {
				    var byteArray = Encoding.UTF8.GetBytes(code);
				    var stream = new MemoryStream(byteArray) {Position = 0};
				    stream.CopyTo(codeEntryStream);
			    }

			    const string csProj = @"
<Project Sdk=""Microsoft.NET.Sdk\"">
	<PropertyGroup>
	<OutputType>Exe</OutputType>
	<TargetFramework>netcoreapp2.0</TargetFramework>
	</PropertyGroup>
</Project>			                
";
			    var csprojEntry = archive.CreateEntry("CustomFunction.csproj");
			    using (var csprojEntryStream = csprojEntry.Open())
			    {
				    var byteArray = Encoding.UTF8.GetBytes(csProj);
				    var stream = new MemoryStream(byteArray) {Position = 0};
				    stream.CopyTo(csprojEntryStream);
			    }

		    }

		    zipStream.Seek(0, SeekOrigin.Begin);

		    var response = File(zipStream, "application/octet-stream", "dexih.custom.function.zip");
		    return response;
	    }
    }
}
