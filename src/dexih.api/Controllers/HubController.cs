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

using Microsoft.AspNetCore.Http;
using System.IO;
using System.IO.Compression;
using System.Text;
using System.Threading;
using dexih.api.Extensions;
using dexih.api.Services.Message;
using dexih.api.Services.Operations;
using Microsoft.Extensions.Logging;
using dexih.api.Services.Remote;
using dexih.functions;
using dexih.functions.BuiltIn;
using dexih.functions.Parameter;
using dexih.functions.Query;
using dexih.remote.operations;
using dexih.transforms.View;
using Dexih.Utils.DataType;

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
		public HubController(
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
		public EPermission HubPermission { get; set; }

		private readonly IEmailSender _emailSender;
		private readonly IRemoteAgents _remoteAgents;
		private readonly IDexihOperations _operations;
		private readonly ILogger _logger;

		[HttpPost("[action]")]
		[ValidateHub(EPermission.FullReader)]
		public async Task<GetHubCacheResult> GetHubCache([FromBody] HubModelBase hubKey, CancellationToken cancellationToken)
		{
			_logger.LogTrace(LoggingEvents.HubGetHubCache, "HubController.GetHubCache: HubKey: {updateBrowserHub}",
				hubKey.HubKey);
			var hub = await _operations.RepositoryManager.GetHub(hubKey.HubKey, cancellationToken);
			return new GetHubCacheResult() {Permission = HubPermission, Hub = hub};
		}
		
		[HttpPost("[action]")]
		[ValidateHub(EPermission.Owner)]
		public Task<string> Encrypt([FromBody] HubValue<string> encryptValue, CancellationToken cancellationToken)
		{
			_logger.LogTrace(LoggingEvents.HubEncrypt, "HubController.Encrypt: HubKey: {updateBrowserHub}, Value: {value}.", encryptValue.HubKey, encryptValue.Value);
			var repositoryManager = _operations.RepositoryManager;
			var result = _remoteAgents.Encrypt(encryptValue.RemoteAgentId, encryptValue.HubKey, encryptValue.DownloadUrl, encryptValue.Value, repositoryManager, cancellationToken);
			return result;
		}

		[HttpPost("[action]")]
		[ValidateHub(EPermission.Owner)]
		public Task<string> Decrypt([FromBody] HubValue<string> decryptValue, CancellationToken cancellationToken)
		{
			_logger.LogTrace(LoggingEvents.HubDecrypt, "HubController.Decrypt: HubKey: {updateBrowserHub}, Value: {value}.", decryptValue.HubKey, decryptValue.Value);
			var repositoryManager = _operations.RepositoryManager;
			var result = _remoteAgents.Decrypt(decryptValue.RemoteAgentId, decryptValue.HubKey, decryptValue.DownloadUrl, decryptValue.Value, repositoryManager, cancellationToken);
			return result;
		}

//		[HttpPost("[action]")]
//		[ValidateHub(EPermission.Owner)]
//		public async Task<object> RunRemoteCommand([FromBody] RemoteMessage remoteMessage)
//		{
//			_logger.LogTrace(LoggingEvents.HubRunRemoteCommand,
//				"HubController.RunRemoteCommand: HubKey: {updateBrowserHub}, Method: {method}",
//				remoteMessage.HubKey, remoteMessage.Method);
//			var repositoryManager = _operations.RepositoryManager;
//			var result = await _remoteAgents.SendRemoteMessage<object>(remoteMessage.HubKey,
//				remoteMessage.RemoteAgentId, remoteMessage.Method, remoteMessage.Value, 
//				repositoryManager);
//			return result;
//		}
		
		private Task<List<HubUser>> GetHubUsers(long hubKey, CancellationToken cancellationToken)
		{
			var operations = _operations.RepositoryManager;
			var result = operations.GetHubUsers(hubKey, cancellationToken);
			return result;
		}

		[HttpPost("[action]")]
		[ValidateHub(EPermission.Owner)]
		public Task<List<HubUser>> HubUsers([FromBody] HubModelBase hubKeyValue, CancellationToken cancellationToken)
		{
			return GetHubUsers(hubKeyValue.HubKey, cancellationToken);
		}

		[HttpPost("[action]")]
		[ValidateHub(EPermission.Owner)]
		public async Task SetUsersPermission([FromBody] UserPermissions userPermissions, CancellationToken cancellationToken)
		{
			var database = _operations.RepositoryManager;
			var userIds = new List<ApplicationUser>();
			var appUser = await database.GetUserAsync(User, cancellationToken);

			var updateUsers = new List<ApplicationUser>();
			var newUsers = new List<ApplicationUser>();
			var inviteUsers = new List<ApplicationUser>();
			var inviteQuota = appUser.InviteQuota;
			
			var funcs = new ValidationFunctions();

			foreach (var email in userPermissions.Emails)
			{
				var user = await _operations.RepositoryManager.GetUserFromLoginAsync(email, cancellationToken);
				var newUser = false;

				// if the user doesn't exist, create a dummy user entry.
				if (user == null)
				{
					if (!funcs.IsValidEmail(email))
					{
						throw new HubControllerException(
							$"The email {email} is not a valid email.");
					}
					
					user = new ApplicationUser()
					{
						Email = email,
						UserName = "",
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
						if (!appUser.IsAdmin) inviteQuota--;

						if (!newUser)
						{
							updateUsers.Add(user);
						}

						inviteUsers.Add(user);
					}
					else
					{
						throw new HubControllerException(
							"The current user does not have enough available invites to complete.");
					}
				}

				userIds.Add(user);
			}

			if (appUser.InviteQuota != inviteQuota)
			{
				await _operations.RepositoryManager.UpdateUserAsync(appUser, cancellationToken);
			}

			foreach (var user in newUsers)
			{
				await _operations.RepositoryManager.CreateUserAsync(user, null, cancellationToken);
			}

			foreach (var user in updateUsers)
			{
				await _operations.RepositoryManager.UpdateUserAsync(user, cancellationToken);
			}

			if (inviteUsers.Count > 0)
			{
				await SendInvites(inviteUsers, cancellationToken);
			}

			await database.HubSetUserPermissions(userPermissions.HubKey, userIds.Select(c => c.Id),
				userPermissions.Permission, cancellationToken);

			// send a notification email to invited users.
			
			var url = Request.BaseUrl();
			var hub = await _operations.RepositoryManager.GetHub(userPermissions.HubKey, cancellationToken);
			
			var parameters = new Dictionary<string, string>()
			{
				{"url", url},
				{"hubKey", userPermissions.HubKey.ToString()},
				{"hubName", hub.Name},
				{"permission", userPermissions.Permission.ToString()},
			};

			var users = userIds.Where(c => c.IsEnabled && c.IsInvited && c.IsRegistered).ToArray();
			
			_emailSender.SendEmailTemplate("hubAccessRemove.html", "Hub Access Removed", parameters, users);

			
			// var path = Path.Combine(Directory.GetCurrentDirectory(), "Resources", "EmailTemplates", "hubAccess.html");
			// var bodyOriginal = System.IO.File.ReadAllText(path);
			// var url = (Request.IsHttps ? "https://" : "http://") + Request.Host.ToUriComponent();
			// var hub = await _operations.RepositoryManager.GetHub(userPermissions.HubKey, cancellationToken);
			//
			// foreach (var user in userIds.Where(c => c.IsEnabled && c.IsInvited && c.IsRegistered))
			// {
			// 	var body = new StringBuilder(bodyOriginal.Replace("{{url}}", url));
			// 	body.Replace("{{hubKey}}", userPermissions.HubKey.ToString());
			// 	body.Replace("{{hubName}}", hub.Name);
			// 	body.Replace("{{permission}}", userPermissions.Permission.ToString());
			// 	var name = string.IsNullOrEmpty(user.FirstName) ? "there" : user.FirstName;
			// 	body.Replace("{{name}}", name);
			// 	body.Replace("{{email}}", user.Email);
			//
			// 	_emailSender.SendEmail(user.Email, "Hub Access Granted", null, body.ToString());
			// }
		}

		private async Task SendInvites(IEnumerable<ApplicationUser> users, CancellationToken cancellationToken)
		{
			var url = Request.BaseUrl();

			foreach (var user in users)
			{
				string template;
				string code;
				string subject;

				if (user.EmailConfirmed)
				{
					template = "userReady.html";
					subject = "Integration Hub Access Granted!";
					code = "";
				}
				else
				{
					template = "invite.html";
					code = await _operations.RepositoryManager.GenerateEmailConfirmationTokenAsync(user, cancellationToken);
					subject = "Integration Hub Invitation Ready!";
				}
				
				var parameters = new Dictionary<string, string>()
				{
					{"code", code},
					{"url", url},
				};
				
				_emailSender.SendEmailTemplate(template, subject, parameters, new [] {user});


				// var path = Path.Combine(Directory.GetCurrentDirectory(), "Resources", "EmailTemplates", template);
				// var bodyOriginal = System.IO.File.ReadAllText(path);
				// var body = new StringBuilder(bodyOriginal.Replace("{{url}}", url));
				//
				// body.Replace("{{code}}", code);
				// var name = string.IsNullOrEmpty(user.FirstName) ? "there" : user.FirstName;
				// body.Replace("{{name}}", name);
				// body.Replace("{{email}}", user.Email);
				//
				// _emailSender.SendEmail(user.Email, subject, null, body.ToString());
			}
		}


		[HttpPost("[action]")]
		[ValidateHub(EPermission.Owner)]
		public async Task RemoveUsers([FromBody] UserPermissions userPermissions, CancellationToken cancellationToken)
		{
			var database = _operations.RepositoryManager;
			var userIds = new List<ApplicationUser>();

			foreach (var email in userPermissions.Emails)
			{
				var user = await _operations.RepositoryManager.GetUserFromLoginAsync(email, cancellationToken);

				// if the user doesn't exist, create a dummy user entry.
				if (user != null)
				{
					userIds.Add(user);
				}
			}

			await database.HubDeleteUsers(userPermissions.HubKey, userIds.Select(c => c.Id), cancellationToken);

			var url = Request.BaseUrl();
			var hub = await _operations.RepositoryManager.GetHub(userPermissions.HubKey, cancellationToken);
			
			var parameters = new Dictionary<string, string>()
			{
				{"url", url},
				{"hubKey", userPermissions.HubKey.ToString()},
				{"hubName", hub.Name},
			};

			var users = userIds.Where(c => c.IsEnabled && c.IsInvited && c.IsRegistered).ToArray();
			
			_emailSender.SendEmailTemplate("hubAccessRemove.html", "Hub Access Removed", parameters, users);

			// // send a notification email to invited users.
			// var path = Path.Combine(Directory.GetCurrentDirectory(), "Resources", "EmailTemplates",
			// 	"hubAccessRemove.html");
			// var bodyOriginal = System.IO.File.ReadAllText(path);
			// var url = (Request.IsHttps ? "https://" : "http://") + Request.Host.ToUriComponent();
			// var hub = await _operations.RepositoryManager.GetHub(userPermissions.HubKey, cancellationToken);
			//
			// foreach (var user in userIds.Where(c => c.IsEnabled && c.IsInvited && c.IsRegistered))
			// {
			// 	var body = new StringBuilder(bodyOriginal.Replace("{{url}}", url));
			// 	body.Replace("{{hubKey}}", userPermissions.HubKey.ToString());
			// 	body.Replace("{{hubName}}", hub.Name);
			// 	var name = string.IsNullOrEmpty(user.FirstName) ? "there" : user.FirstName;
			// 	body.Replace("{{name}}", name);
			// 	body.Replace("{{email}}", user.Email);
			//
			// 	_emailSender.SendEmail(user.Email, "Hub Access Removed", null, body.ToString());
			// }
		}

		[HttpPost("[action]")]
		[ValidateAntiForgeryToken]
		[ValidateHub(EPermission.PublishReader)]
		public async Task<string> GetRemoteAgentStatus([FromBody] HubModelBase remoteAgentStatus, CancellationToken cancellationToken)
		{
			var repositoryManager = _operations.RepositoryManager;
			var result = await _remoteAgents.SendRemoteCommand(
				remoteAgentStatus.RemoteAgentId, 
				remoteAgentStatus.HubKey,
				remoteAgentStatus.DownloadUrl,
				nameof(RemoteOperations.GetRemoteAgentStatus), 
				null, 
				repositoryManager, 
				cancellationToken
				);
			
			return result;
		}

		[HttpPost("[action]")]
		[ValidateHub(EPermission.Owner)]
		public async Task<DexihRemoteAgentHub> SaveRemoteAgent([FromBody] RemoteAgentUpdate remoteAgentUpdate, CancellationToken cancellationToken)
		{
			var operations = _operations.RepositoryManager;
			var appUser = await operations.GetUserAsync(User, cancellationToken);
			var dbRemoteAgent = remoteAgentUpdate.Value;

			var remoteAgent = await operations.SaveRemoteAgentHub(appUser.Id, remoteAgentUpdate.HubKey, dbRemoteAgent, cancellationToken);
			return remoteAgent;
		}

		[HttpPost("[action]")]
		[ValidateAntiForgeryToken]
		[ValidateHub(EPermission.Owner)]
		public Task DeleteRemoteAgent([FromBody] RemoteAgentDelete remoteAgentDelete, CancellationToken cancellationToken)
		{
			var database = _operations.RepositoryManager;

			//get the rules for this agent (if they exist).
			if (remoteAgentDelete != null && remoteAgentDelete.RemoteAgentHubKey > 0)
			{
				var result =
					database.DeleteRemoteAgentHub(remoteAgentDelete.HubKey, remoteAgentDelete.RemoteAgentHubKey, cancellationToken);
				return result;
			}

			throw new HubControllerException("The hub has not been registered, so the deauthorize action did nothing.");
		}

		[HttpPost("[action]")]
		[ValidateHub(EPermission.User)]
		public async Task<DexihConnection> SaveConnection([FromBody] HubValue<DexihConnection> saveConnection, CancellationToken cancellationToken)
		{
			_logger.LogTrace(LoggingEvents.HubSaveConnection,
				"HubController.SaveConnection: HubKey: {updateBrowserHub}.", saveConnection.HubKey);


			var connection = saveConnection.Value;

			// if the user is not an owner, then passwords and connection strings must be re-entered each time.
			if (HubPermission != EPermission.Owner)
			{
				if (!string.IsNullOrEmpty(connection.Password) )
				{
					throw new RepositoryException("The save cannot be completed, as the password must be re-entered.");
				}

				if (connection.UsePasswordVariable)
				{
					throw new RepositoryException(
						"The save cannot be completed, as only hub owners can save connections which use password variables.");
				}

				if (!string.IsNullOrEmpty(connection.ConnectionString))
				{
					throw new RepositoryException(
						"The save cannot be completed, as the connection string must be re-entered.");
				}

				if (connection.UseConnectionStringVariable)
				{
					throw new RepositoryException(
						"The save cannot be completed, as only hub owners can save connections which use connection string variables.");
				}
			}

//			var repositoryManager = _operations.RepositoryManager;
//			if (!string.IsNullOrEmpty(connection.PasswordRaw))
//			{
//				var result = await _remoteAgents.Encrypt(saveConnection.RemoteAgentId, saveConnection.HubKey,
//					connection.PasswordRaw, repositoryManager, cancellationToken);
//				connection.Password = result;
//				connection.PasswordRaw = null;
//			}
//
//			if (!string.IsNullOrEmpty(connection.ConnectionStringRaw))
//			{
//				var result = await _remoteAgents.Encrypt(saveConnection.RemoteAgentId, saveConnection.HubKey,
//					connection.ConnectionStringRaw, repositoryManager, cancellationToken);
//				connection.ConnectionString = result;
//				connection.ConnectionStringRaw = null;
//			}

			var saveResult =
				await _operations.RepositoryManager.SaveConnection(saveConnection.HubKey, saveConnection.Value, cancellationToken);

			return saveResult;
		}

		[HttpPost("[action]")]
		[ValidateHub(EPermission.User)]
		public Task<DexihConnection[]> DeleteConnections([FromBody] HubKeyItems hubKeyConnections, CancellationToken cancellationToken)
		{
			_logger.LogTrace(LoggingEvents.HubDeleteConnections,
				"HubController.DeleteConnections: HubKey: {updateBrowserHub}.", hubKeyConnections.HubKey);
			var deleteResult =
				_operations.RepositoryManager.DeleteConnections(hubKeyConnections.HubKey, hubKeyConnections.ItemKeys, cancellationToken);
			return deleteResult;
		}
		
		[HttpPost("[action]")]
		[ValidateHub(EPermission.Owner)]
		public Task<string> RefreshConnection([FromBody] HubValue<DexihConnection> connection, CancellationToken cancellationToken)
		{
			return _remoteAgents.Run(connection, nameof(RemoteOperations.RefreshConnection), _operations.RepositoryManager, cancellationToken);
		}
		
		[HttpPost("[action]")]
		[ValidateHub(EPermission.Owner)]
		public Task<string> DatabaseTableNames([FromBody] HubValue<DexihConnection> connection, CancellationToken cancellationToken)
		{
			return _remoteAgents.Run(connection, nameof(RemoteOperations.DatabaseTableNames), _operations.RepositoryManager, cancellationToken);
		}
		
		[HttpPost("[action]")]
		[ValidateHub(EPermission.Owner)]
		public Task<string> CreateDatabase([FromBody] HubValue<DexihConnection> connection, CancellationToken cancellationToken)
		{
			return _remoteAgents.Run(connection, nameof(RemoteOperations.CreateDatabase), _operations.RepositoryManager, cancellationToken);
		}

		[HttpPost("[action]")]
		[ValidateHub(EPermission.User)]
		public async Task<string> ImportFileFormat([FromForm] ImportFileFormat importFileFormat, IFormFile file, CancellationToken cancellationToken)
		{
			_logger.LogTrace(LoggingEvents.HubImportFileFormat,
				"HubController.ImportFileFormat: HubKey: {updateBrowserHub}.", importFileFormat.HubKey);

			if (file != null && file.Length > 0)
			{
				var table = importFileFormat.TableObj;
				var fileSample = new StringBuilder();

				if (table.FormatType == ETypeCode.Text)
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
				var importedTableResult = await ImportTables(importFileFormat.HubKey, importFileFormat.RemoteAgentId, importFileFormat.DownloadUrl,
					new[] {table}, cancellationToken);
				return importedTableResult;
			}
			else
			{
				throw new HubControllerException("Only one file should be selected and it should contain data.");
			}

		}

		[HttpPost("[action]")]
		[ValidateHub(EPermission.User)]
		public Task<string> ImportTables([FromBody] ImportTables importTables, CancellationToken cancellationToken)
		{
			_logger.LogTrace(LoggingEvents.HubImportTables, "HubController.ImportTables: HubKey: {updateBrowserHub}.",
				importTables.HubKey);

			var importedTableResult = ImportTables(importTables.HubKey, importTables.RemoteAgentId, importTables.DownloadUrl, importTables.Tables, cancellationToken);
			return importedTableResult;
		}

		private async Task<string> ImportTables(long hubKey, string remoteAgentId, DownloadUrl downloadUrl, DexihTable[] hubTables,
			 CancellationToken cancellationToken)
		{
			_logger.LogTrace(LoggingEvents.HubImportTables, "HubController.ImportTables: HubKey: {updateBrowserHub}.",
				hubKey);

			var repositoryManager = _operations.RepositoryManager;
			var importedTables = await _remoteAgents.ImportTables(remoteAgentId, hubKey, downloadUrl, hubTables, repositoryManager, cancellationToken);

			return importedTables;
			
//			var saveTables = new List<DexihTable>();
//			var errorTables = new List<DexihTable>();
//
//			foreach (var importedTable in importedTables)
//			{
//				if (importedTable.EntityStatus.LastStatus != EStatus.Error)
//				{
//					importedTable.HubKey = hubKey;
//					//importedTable.EntityStatus.IsBusy = true;
//					//importedTable.EntityStatus.Message = "Updating...";
//					saveTables.Add(importedTable);
//				}
//				else
//				{
//					importedTable.EntityStatus.IsBusy = false;
//					errorTables.Add(importedTable);
//				}
//			}
//
//			if (save)
//			{
//				var tablesSave = await repositoryManager.SaveTables(hubKey, saveTables, true, false, cancellationToken);
//				var returnTables = tablesSave.Concat(errorTables).ToArray();
//				return returnTables;
//			}
//			else
//			{
//				foreach (var table in saveTables)
//				{
//					var columnKey = -1;
//					foreach (var column in table.DexihTableColumns)
//					{
//						if (column.Key <= 0)
//						{
//							column.Key = columnKey;
//							columnKey--;
//						}
//					}
//				}
//
//				var returnTables = saveTables.Concat(errorTables).ToArray();
//				return returnTables;
//			}

		}


		[HttpPost("[action]")]
		[ValidateHub(EPermission.User)]
		public async Task<string> CreateTables([FromBody] CreateTables createTables, CancellationToken cancellationToken)
		{
			_logger.LogTrace(LoggingEvents.HubCreateTables, "HubController.CreateTables: HubKey: {updateBrowserHub}.",
				createTables.HubKey);

			var repositoryManager = _operations.RepositoryManager;
			var result = await _remoteAgents.CreateTables(createTables.RemoteAgentId, createTables.HubKey, createTables.DownloadUrl,
				createTables.Tables, createTables.dropTables, repositoryManager, cancellationToken);
			return result;
		}

		[HttpPost("[action]")]
		[ValidateHub(EPermission.User)]
		public async Task<string> ClearTables([FromBody] ImportTables clearTables, CancellationToken cancellationToken)
		{
			_logger.LogTrace(LoggingEvents.HubClearTables, "HubController.ClearTables: HubKey: {updateBrowserHub}.",
				clearTables.HubKey);

			var repositoryManager = _operations.RepositoryManager;
			var result = await _remoteAgents.ClearTables(clearTables.RemoteAgentId, clearTables.HubKey, clearTables.DownloadUrl,
				clearTables.Tables, repositoryManager, cancellationToken);

			return result;
		}

		[HttpPost("[action]")]
		[ValidateHub(EPermission.User)]
		public async Task<DexihTable> SaveTable([FromBody] HubValue<DexihTable> saveTable, CancellationToken cancellationToken)
		{
			_logger.LogTrace(LoggingEvents.HubSaveTable, "HubController.SaveTable: HubKey: {updateBrowserHub}",
				saveTable.HubKey);

			var repositoryManager = _operations.RepositoryManager;
			var savedTables =
				await repositoryManager.SaveTables(saveTable.HubKey, new [] { saveTable.Value}, true, false, cancellationToken);
			return savedTables[0];
		}

		[HttpPost("[action]")]
		[ValidateHub(EPermission.User)]
		public async Task<DexihTable[]> SaveTables([FromBody] HubValue<DexihTable[]> saveTables, CancellationToken cancellationToken)
		{
			_logger.LogTrace(LoggingEvents.HubSaveTable, "HubController.SaveTable: HubKey: {updateBrowserHub}",
				saveTables.HubKey);

			var repositoryManager = _operations.RepositoryManager;
			var savedTables =
				await repositoryManager.SaveTables(saveTables.HubKey, saveTables.Value, true, false, cancellationToken);
			return savedTables;
		}

		[HttpPost("[action]")]
		[ValidateHub(EPermission.User)]
		public Task DeleteTables([FromBody] HubKeyItems deleteTables, CancellationToken cancellationToken)
		{
			_logger.LogTrace(LoggingEvents.HubDeleteTables, "HubController.DeleteTables: HubKey: {updateBrowserHub}",
				deleteTables.HubKey);

			var repositoryManager = _operations.RepositoryManager;
			return repositoryManager.DeleteTables(deleteTables.HubKey, deleteTables.ItemKeys, cancellationToken);
		}

		[HttpPost("[action]")]
		[ValidateHub(EPermission.PublishReader)]
		public Task<string> PreviewTable([FromBody] PreviewTable previewTable, CancellationToken cancellationToken)
		{
			_logger.LogTrace(LoggingEvents.HubPreviewTable,
				"HubController.PreviewTable: HubKey: {updateBrowserHub}, TableKey: {tableKey}", previewTable.HubKey,
				previewTable.TableKey);
			var repositoryManager = _operations.RepositoryManager;
			var remoteServerResult = _remoteAgents.PreviewTable(previewTable.RemoteAgentId, previewTable.HubKey, previewTable.DownloadUrl,
				previewTable.TableKey, previewTable.SelectQuery, previewTable.ViewConfig, previewTable.InputColumns, previewTable.InputParameters,
				previewTable.ShowRejectedData, false, repositoryManager, cancellationToken);
			return remoteServerResult;
		}

		[HttpPost("[action]")]
		[ValidateHub(EPermission.User)]
		public Task<string> PreviewTableQuery([FromBody] PreviewTableQuery previewTableQuery, CancellationToken cancellationToken)
		{
			_logger.LogTrace(LoggingEvents.HubPreviewTable,
				"HubController.PreviewTable: HubKey: {updateBrowserHub}, TableKey: {tableKey}",
				previewTableQuery.HubKey, previewTableQuery.Table.Key);
			var repositoryManager = _operations.RepositoryManager;
			var remoteServerResult = _remoteAgents.PreviewTable(previewTableQuery.RemoteAgentId, previewTableQuery.HubKey, previewTableQuery.DownloadUrl,
				previewTableQuery.Table, previewTableQuery.SelectQuery, previewTableQuery.ViewConfig,
				previewTableQuery.InputColumns, previewTableQuery.InputParameters, previewTableQuery.ShowRejectedData,
				repositoryManager, cancellationToken);
			return remoteServerResult;
		}

		[HttpPost("[action]")]
		[ValidateHub(EPermission.PublishReader)]
		public Task<string> PreviewDatalink([FromBody] PreviewDatalink previewDatalink, CancellationToken cancellationToken)
		{
			_logger.LogTrace(LoggingEvents.HubPreviewDatalink,
				"HubController.PreviewDatalink: HubKey: {updateBrowserHub}, DatalinkKey: {DatalinkKey}",
				previewDatalink.HubKey, previewDatalink.DatalinkKey);
			var repositoryManager = _operations.RepositoryManager;
			var remoteServerResult = _remoteAgents.PreviewDatalink(previewDatalink.RemoteAgentId, previewDatalink.HubKey, previewDatalink.DownloadUrl, 
				previewDatalink.DatalinkKey, previewDatalink.PreviewUpdates, previewDatalink.SelectQuery, previewDatalink.ViewConfig,
				previewDatalink.InputColumns, previewDatalink.InputParameters, false,
				repositoryManager, cancellationToken);
			return remoteServerResult;
		}
		
		[HttpPost("[action]")]
		[ValidateHub(EPermission.User)]
		public Task<string> PreviewProfile([FromBody] PreviewProfile previewProfile, CancellationToken cancellationToken)
		{
			return _remoteAgents.SendRemoteCommand(previewProfile.RemoteAgentId, previewProfile.HubKey, previewProfile.DownloadUrl,
				nameof(RemoteOperations.PreviewProfile), previewProfile, _operations.RepositoryManager, cancellationToken);
		}
		
		[HttpPost("[action]")]
		[ValidateHub(EPermission.User)]
		public async Task<List<DashboardDataKeys>> PreviewDashboard([FromBody] PreviewDashboard previewDashboard, CancellationToken cancellationToken)
		{
			var repositoryManager = _operations.RepositoryManager;
			var hub = await _operations.RepositoryManager.GetHub(previewDashboard.HubKey, cancellationToken);

			var parameters = previewDashboard.InputParameters;

			var urls = new List<DashboardDataKeys>();

			foreach (var item in previewDashboard.Dashboard.DexihDashboardItems)
			{
				// merge dashboard parameters into the item parameters.
				var itemParameters = new InputParameters();
				foreach(var parameter in item.Parameters)
				{
					itemParameters.Add( parameter.Name, parameters.SetParameters(parameter.Value));
				}

				var view = hub.DexihViews.SingleOrDefault(c => c.IsValid &&  c.Key == item.ViewKey);

				if (view != null)
				{
					string url = null;

					switch (view.SourceType)
					{

						case EDataObjectType.Table:
							url = await _remoteAgents.PreviewTable(previewDashboard.RemoteAgentId,
								previewDashboard.HubKey, previewDashboard.DownloadUrl, view.SourceTableKey.Value,
								view.SelectQuery, view.GetViewConfig(), view.InputValues, itemParameters, false, false, repositoryManager,
								cancellationToken);
							break;
						case EDataObjectType.Datalink:
							url = await _remoteAgents.PreviewDatalink(previewDashboard.RemoteAgentId,
								previewDashboard.HubKey, previewDashboard.DownloadUrl, view.SourceDatalinkKey.Value, false,
								view.SelectQuery, view.GetViewConfig(), view.InputValues, itemParameters, false, repositoryManager,
								cancellationToken);
							break;
						default:
							throw new ArgumentOutOfRangeException();
					}

					urls.Add(new DashboardDataKeys() {DashboardItemKey = item.Key, DataKey = url});
				}
			}

			return urls;
		}

	
	[HttpPost("[action]")]
	    [ValidateHub(EPermission.PublishReader)]
	    public Task<string> DatalinkProperties([FromBody] PreviewDatalink previewDatalink, CancellationToken cancellationToken)
	    {
		    _logger.LogTrace(LoggingEvents.HubPreviewDatalink, "HubController.PreviewDatalink: HubKey: {updateBrowserHub}, DatalinkKey: {DatalinkKey}", previewDatalink.HubKey, previewDatalink.DatalinkKey);
		    var repositoryManager = _operations.RepositoryManager;
		    var remoteServerResult = _remoteAgents.DatalinkProperties(previewDatalink.RemoteAgentId, previewDatalink.HubKey, previewDatalink.DownloadUrl, previewDatalink.DatalinkKey, previewDatalink.SelectQuery, previewDatalink.InputColumns, previewDatalink.InputParameters, repositoryManager, cancellationToken);
		    return remoteServerResult;
	    }
	    
	    [HttpPost("[action]")]
	    [ValidateHub(EPermission.User)]
	    public Task<string> PreviewTransform([FromBody] PreviewTransform previewTransform, CancellationToken cancellationToken)
	    {
		    _logger.LogTrace(LoggingEvents.HubPreviewDatalink, "HubController.PreviewTransform: HubKey: {updateBrowserHub}, DatalinkKey: {DatalinkKey}", previewTransform.HubKey, previewTransform.Datalink.Key);
		    var repositoryManager = _operations.RepositoryManager;
		    var remoteServerResult = _remoteAgents.PreviewTransform(previewTransform.RemoteAgentId, previewTransform.HubKey, previewTransform.DownloadUrl, previewTransform.Datalink, previewTransform.DatalinkTransformKey, previewTransform.SelectQuery, previewTransform.ViewConfig, previewTransform.InputColumns, previewTransform.InputParameters, repositoryManager, cancellationToken);
		    return remoteServerResult;
	    } 
	    
	    [HttpPost("[action]")]
	    [ValidateHub(EPermission.PublishReader)]
	    public async Task<string> PreviewViewKey([FromBody] PreviewViewKey previewViewKey, CancellationToken cancellationToken)
	    {
		    var repositoryManager = _operations.RepositoryManager;
		    var hub = await repositoryManager.GetHub(previewViewKey.HubKey, cancellationToken);

		    var view = hub.DexihViews.SingleOrDefault(c => c.Key == previewViewKey.ViewKey && c.IsValid);

		    if (view == null)
		    {
			    throw new HubControllerException($"The view with the key {previewViewKey.ViewKey} could not be found.");
		    }
		    
		    var previewView = new PreviewView()
		    {
			    View = view,
			    ViewConfig = previewViewKey.ViewConfig,
			    DownloadUrl = previewViewKey.DownloadUrl,
			    HubKey = previewViewKey.HubKey,
			    InputColumns = previewViewKey.InputColumns,
			    InputParameters = previewViewKey.InputParameters,
			    ParentParameters = previewViewKey.ParentParameters,
			    SelectQuery = previewViewKey.SelectQuery,
			    RemoteAgentId = previewViewKey.RemoteAgentId
		    };

		    return await PreviewView(previewView, cancellationToken);
	    }
	    
	    [HttpPost("[action]")]
	    [ValidateHub(EPermission.User)]
	    public Task<string> PreviewView([FromBody] PreviewView previewView, CancellationToken cancellationToken)
	    {
		    if (previewView.View == null)
		    {
			    throw new ArgumentNullException(nameof(previewView.View));
		    }
		    
		    _logger.LogTrace(LoggingEvents.HubPreviewView, "HubController.PreviewView: HubKey: {updateBrowserHub}, DatalinkKey: {DatalinkKey}", previewView.HubKey, previewView.View?.Key);
		    var repositoryManager = _operations.RepositoryManager;

		    InputParameters itemParameters; 
		    if (previewView.ParentParameters == null)
		    {
			    itemParameters = previewView.InputParameters;
		    }
		    else
		    {
			    itemParameters = new InputParameters();
			    foreach(var parameter in previewView.InputParameters)
			    {
				    itemParameters.Add( parameter.Name, previewView.ParentParameters.SetParameters(parameter.Value));
			    }
		    }
		    
		    switch(previewView.View.SourceType)
		    {
			    case EDataObjectType.Table:
				    return _remoteAgents.PreviewTable(previewView.RemoteAgentId, previewView.HubKey, previewView.DownloadUrl, previewView.View.SourceTableKey.Value, previewView.View.SelectQuery, previewView.View.GetViewConfig(), previewView.InputColumns, itemParameters, false, false, repositoryManager, cancellationToken);
			    case EDataObjectType.Datalink:
				    return _remoteAgents.PreviewDatalink(previewView.RemoteAgentId, previewView.HubKey, previewView.DownloadUrl, previewView.View.SourceDatalinkKey.Value, false, previewView.View.SelectQuery, previewView.View.GetViewConfig(), previewView.InputColumns, itemParameters, false, repositoryManager, cancellationToken);
			    default:
				    throw new ArgumentOutOfRangeException();
		    }
	    }
	    
	    [HttpPost("[action]")]
	    [ValidateHub(EPermission.User)]
	    public Task<string> PreviewListOfValues([FromBody] PreviewListOfValues previewListOfValues, CancellationToken cancellationToken)
	    {
		    _logger.LogTrace(LoggingEvents.HubPreviewListOfValues,
			    "HubController.PreviewDatalink: HubKey: {hubKey}, ListOfValuesKey: {listOfValuesKey}",
			    previewListOfValues.HubKey, previewListOfValues.ListOfValues.Key);
		    var repositoryManager = _operations.RepositoryManager;
		    var remoteServerResult = _remoteAgents.PreviewListOfValues(previewListOfValues.RemoteAgentId, previewListOfValues.HubKey, previewListOfValues.DownloadUrl, 
			    previewListOfValues.ListOfValues, previewListOfValues.ResetCache, repositoryManager, cancellationToken);
		    return remoteServerResult;
	    }
	    
	    [HttpPost("[action]")]
	    [ValidateHub(EPermission.PublishReader)]
	    public Task<string> PreviewListOfValuesKey([FromBody] PreviewListOfValuesKey previewListOfValues, CancellationToken cancellationToken)
	    {
		    _logger.LogTrace(LoggingEvents.HubPreviewListOfValues,
			    "HubController.PreviewDatalink: HubKey: {hubKey}, ListOfValuesKey: {listOfValuesKey}",
			    previewListOfValues.HubKey, previewListOfValues.ListOfValuesKey);
		    var repositoryManager = _operations.RepositoryManager;
		    var remoteServerResult = _remoteAgents.PreviewListOfValues(previewListOfValues.RemoteAgentId, previewListOfValues.HubKey, previewListOfValues.DownloadUrl, 
			    previewListOfValues.ListOfValuesKey, previewListOfValues.ResetCache, repositoryManager, cancellationToken);
		    return remoteServerResult;
	    }
	    
	    [HttpPost("[action]")]
	    [ValidateHub(EPermission.User)]
	    public Task<string> PreviewAuditResults([FromBody] AuditResults auditResults, CancellationToken cancellationToken)
	    {
		    _logger.LogTrace(LoggingEvents.HubPreviewView, "HubController.PreviewAuditResults: HubKey: {updateBrowserHub}", auditResults.HubKey);
		    var repositoryManager = _operations.RepositoryManager;

		    return _remoteAgents.PreviewAuditResults(auditResults, repositoryManager, cancellationToken);
	    }
	    
	    [HttpPost("[action]")]
	    [ValidateHub(EPermission.User)]
	    public Task<string> ImportFunctionMappings([FromBody] ImportFunctionMappings importFunctionMappings, CancellationToken cancellationToken)
	    {
		    _logger.LogTrace(LoggingEvents.HubImportFunctionMappings, "HubController.ImportFunctionMappings: HubKey: {updateBrowserHub}, DatalinkKey: {DatalinkKey}", importFunctionMappings.HubKey, importFunctionMappings.Datalink.Key);
		    var repositoryManager = _operations.RepositoryManager;
		    var remoteServerResult = _remoteAgents.ImportFunctionMappings(importFunctionMappings.RemoteAgentId, importFunctionMappings.HubKey, importFunctionMappings.DownloadUrl, importFunctionMappings.Datalink, importFunctionMappings.DatalinkTransformKey, importFunctionMappings.DatalinkTransformItem, repositoryManager, cancellationToken);
		    return remoteServerResult;
	    }
	    
        [HttpPost("[action]")]
        [ValidateHub(EPermission.User)]
        public async Task<DexihDatalink[]> CreateDatalinks([FromBody] NewDatalinks datalink, CancellationToken cancellationToken)
        {
			_logger.LogTrace(LoggingEvents.HubCreateDatalinks, "HubController.CreateDatalinks: HubKey: {updateBrowserHub}, SourceTableKeys {sourceTableKeys}.", datalink.HubKey, string.Join(",", datalink.SourceTableKeys.Select(c=>c.ToString())));

			var repositoryManager = _operations.RepositoryManager;
	        var namingStandards = await _remoteAgents.NamingStandards(datalink.RemoteAgentId, cancellationToken) ??  new NamingStandards();

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
	            namingStandards, cancellationToken);

            return newDatalinks;
        }

        [HttpPost("[action]")]
        [ValidateHub(EPermission.User)]
        public Task<DexihDatalink[]> DeleteDatalinks([FromBody] HubKeyItems hubKeyDatalinks, CancellationToken cancellationToken)
        {
			_logger.LogTrace(LoggingEvents.HubDeleteDatalinks, "HubController.DeleteDatalinks: HubKey: {updateBrowserHub}, DatalinkKeys {DatalinkKeys}.", hubKeyDatalinks.HubKey, string.Join(",", hubKeyDatalinks.ItemKeys.Select(c => c.ToString())));

			var repositoryManager = _operations.RepositoryManager;
            var deletedDatalinks  = repositoryManager.DeleteDatalinks(hubKeyDatalinks.HubKey, hubKeyDatalinks.ItemKeys, cancellationToken);
            return deletedDatalinks;
        }

        [HttpPost("[action]")]
        [ValidateHub(EPermission.User)]
        public Task ShareItems([FromBody] ShareItems items, CancellationToken cancellationToken)
        {
	        _logger.LogTrace(LoggingEvents.HubShareItems, "HubController.HubShareItems: HubKey: {updateBrowserHub}", items.HubKey);

	        var repositoryManager = _operations.RepositoryManager;
	        return repositoryManager.ShareItems(items.HubKey, items.Keys, items.ObjectType, items.IsShared, cancellationToken);
        }
        
        [HttpPost("[action]")]
        [ValidateHub(EPermission.User)]
        public async Task<DexihDatalink> SaveDatalink([FromBody] HubValue<DexihDatalink> saveDatalink, CancellationToken cancellationToken)
        {
            var datalink = saveDatalink.Value;

			_logger.LogTrace(LoggingEvents.HubSaveDatalink, "HubController.SaveDatalink: HubKey: {updateBrowserHub}, DatalinkKey: {DatalinkKey}, Name: {datalinkName}.", saveDatalink.HubKey, datalink.Key, datalink.Name);

			var repositoryManager = _operations.RepositoryManager;
            var datalinks = await repositoryManager.SaveDatalinks(saveDatalink.HubKey, new[] { datalink }, false, cancellationToken);
            return datalinks[0];
        }

        [HttpPost("[action]")]
        [ValidateHub(EPermission.User)]
        public Task DeleteDatajobs([FromBody] HubKeyItems hubKeyDatajobs, CancellationToken cancellationToken)
        {
			_logger.LogTrace(LoggingEvents.HubDeleteDatajobs, "HubController.DeleteDatajobs: HubKey: {updateBrowserHub}, DatajobKeys {DatajobKeys}.", hubKeyDatajobs.HubKey, string.Join(",", hubKeyDatajobs.ItemKeys.Select(c => c.ToString())));

			var repositoryManager = _operations.RepositoryManager;
            return repositoryManager.DeleteDatajobs(hubKeyDatajobs.HubKey, hubKeyDatajobs.ItemKeys, cancellationToken);
        }

        [HttpPost("[action]")]
        [ValidateHub(EPermission.User)]
        public async Task<DexihDatajob> SaveDatajob([FromBody] HubValue<DexihDatajob> saveDatajob, CancellationToken cancellationToken)
        {
			_logger.LogTrace(LoggingEvents.HubSaveDatajob, "HubController.SaveDatajobs: HubKey: {updateBrowserHub}", saveDatajob.HubKey);

			var repositoryManager = _operations.RepositoryManager;
			var savedDatajobs = await repositoryManager.SaveDatajobs(saveDatajob.HubKey, new[] { saveDatajob.Value }, cancellationToken);
            return savedDatajobs[0];
        }

        [HttpPost("[action]")]
        [ValidateHub(EPermission.User)]
        public Task<DexihColumnValidation[]> DeleteColumnValidations([FromBody] HubKeyItems hubKeyValidations, CancellationToken cancellationToken)
        {
			_logger.LogTrace(LoggingEvents.HubDeleteValidations, "HubController.DeleteValidations: HubKey: {updateBrowserHub}, DatajobKeys {DatajobKeys}.", hubKeyValidations.HubKey, string.Join(",", hubKeyValidations.ItemKeys.Select(c => c.ToString())));

			var deleteResult = _operations.RepositoryManager.DeleteColumnValidations(hubKeyValidations.HubKey, hubKeyValidations.ItemKeys, cancellationToken);
            return deleteResult;
        }

        [HttpPost("[action]")]
        [ValidateHub(EPermission.User)]
        public Task<DexihColumnValidation> SaveColumnValidation([FromBody] HubValue<DexihColumnValidation> saveValidation, CancellationToken cancellationToken)
        {
			_logger.LogTrace(LoggingEvents.HubSaveValidation, "HubController.SaveValidation: HubKey: {updateBrowserHub}, ColumnValidationKey {columnValidationName}.", saveValidation.HubKey, saveValidation.Value.Name);

			var repositoryManager = _operations.RepositoryManager;
            var saveResult = repositoryManager.SaveColumnValidation(saveValidation.HubKey, saveValidation.Value, cancellationToken);

            //send an update of the connection to any connected clients.
            return saveResult;
        }
        
        [HttpPost("[action]")]
        [ValidateHub(EPermission.Owner)]
        public async Task<string> TestColumnValidation([FromBody] ColumnValidationTest validation, CancellationToken cancellationToken)
        {
	        var hub = await _operations.RepositoryManager.GetHub(validation.HubKey, cancellationToken);
	        var cache = new CacheManager(validation.HubKey, hub.EncryptionKey);
	        await cache.LoadColumnValidationDependencies(validation.Value, _operations.RepositoryManager.DbContext);
	        
	        return await _remoteAgents.SendRemoteCommand(validation.RemoteAgentId, validation.HubKey, validation.DownloadUrl, nameof(RemoteOperations.TestColumnValidation),
	        new {cache, columnValidation = validation.Value, testValue = validation.TestValue}, _operations.RepositoryManager, cancellationToken);
        }
	    
	    [HttpPost("[action]")]
	    [ValidateHub(EPermission.User)]
	    public Task<DexihCustomFunction[]> DeleteCustomFunctions([FromBody] HubKeyItems hubKeyValidations, CancellationToken cancellationToken)
	    {
		    _logger.LogTrace(LoggingEvents.HubDeleteCustomFunctions, "HubController.DeleteValidations: HubKey: {updateBrowserHub}, DatajobKeys {DatajobKeys}.", hubKeyValidations.HubKey, string.Join(",", hubKeyValidations.ItemKeys.Select(c => c.ToString())));

		    var deleteResult = _operations.RepositoryManager.DeleteCustomFunctions(hubKeyValidations.HubKey, hubKeyValidations.ItemKeys, cancellationToken);
		    return deleteResult;
	    }

	    [HttpPost("[action]")]
	    [ValidateHub(EPermission.User)]
	    public Task<DexihCustomFunction> SaveCustomFunction([FromBody] HubValue<DexihCustomFunction> saveCustomFunction, CancellationToken cancellationToken)
	    {
		    _logger.LogTrace(LoggingEvents.HubSaveCustomFunctions, "HubController.HubSaveCustomFunctions: HubKey: {updateBrowserHub}, CustomFunction {customFunctionName}.", saveCustomFunction.HubKey, saveCustomFunction.Value.Name);

		    var repositoryManager = _operations.RepositoryManager;
		    var saveResult = repositoryManager.SaveCustomFunction(saveCustomFunction.HubKey, saveCustomFunction.Value, cancellationToken);

		    //send an update of the connection to any connected clients.
		    return saveResult;
	    }
	    
	    [HttpPost("[action]")]
	    [ValidateHub(EPermission.Owner)]
	    public async Task<string> TestCustomFunction([FromBody] CustomFunctionTest customFunction, CancellationToken cancellationToken)
	    {
		    return await _remoteAgents.SendRemoteCommand(customFunction.RemoteAgentId, customFunction.HubKey, customFunction.DownloadUrl, nameof(RemoteOperations.TestCustomFunction),
			    new {datalinkTransformItem = customFunction.Value, testValues = customFunction.TestValues}, _operations.RepositoryManager, cancellationToken);
	    }

        [HttpPost("[action]")]
        [ValidateHub(EPermission.User)]
        public Task<DexihFileFormat[]> DeleteFileFormats([FromBody] HubKeyItems hubKeyFileFormats, CancellationToken cancellationToken)
        {
			_logger.LogTrace(LoggingEvents.HubDeleteFileformats, "HubController.DeleteFileFormats: HubKey: {updateBrowserHub}, DataValidationKeys {dataValidationKeys}.", hubKeyFileFormats.HubKey, string.Join(",", hubKeyFileFormats.ItemKeys.Select(c => c.ToString())));

			var deleteResult = _operations.RepositoryManager.DeleteFileFormats(hubKeyFileFormats.HubKey, hubKeyFileFormats.ItemKeys, cancellationToken);
            return deleteResult;
        }

        [HttpPost("[action]")]
        [ValidateHub(EPermission.User)]
        public Task<DexihFileFormat> SaveFileFormat([FromBody] HubValue<DexihFileFormat> saveFileFormat, CancellationToken cancellationToken)
        {
			_logger.LogTrace(LoggingEvents.HubSaveFileformat, "HubController.SaveFileFormat: HubKey: {updateBrowserHub}", saveFileFormat.HubKey);

			var repositoryManager = _operations.RepositoryManager;
            var saveResult = repositoryManager.SaveFileFormat(saveFileFormat.HubKey, saveFileFormat.Value, cancellationToken);
            return saveResult;
        }

        [HttpPost("[action]")]
        [ValidateHub(EPermission.User)]
        public Task<DexihHubVariable[]> DeleteHubVariables([FromBody] HubKeyItems hubKeyVariables, CancellationToken cancellationToken)
        {
            _logger.LogTrace(LoggingEvents.HubDeleteHubVariables, "HubController.DeleteHubVariables: HubKey: {updateBrowserHub}, VariableKeys {variableKeys}.", hubKeyVariables.HubKey, string.Join(",", hubKeyVariables.ItemKeys.Select(c => c.ToString())));

            var deleteResult = _operations.RepositoryManager.DeleteHubVariables(hubKeyVariables.HubKey, hubKeyVariables.ItemKeys, cancellationToken);
            return deleteResult;
        }

        [HttpPost("[action]")]
        [ValidateHub(EPermission.User)]
        public async Task<DexihHubVariable> SaveHubVariable([FromBody] HubValue<DexihHubVariable> saveHubVariable, CancellationToken cancellationToken)
        {
            _logger.LogTrace(LoggingEvents.HubSaveHubVariable, "HubController.SaveHubVariable: HubKey: {updateBrowserHub}", saveHubVariable.HubKey);

            var hubVariable = saveHubVariable.Value;
            var repositoryManager = _operations.RepositoryManager;

//            if (!string.IsNullOrEmpty(hubVariable.ValueRaw))
//            {
//                if (hubVariable.IsEncrypted)
//                {
//                    var result = await _remoteAgents.Encrypt(saveHubVariable.RemoteAgentId, saveHubVariable.HubKey, hubVariable.ValueRaw, repositoryManager, cancellationToken);
//                    hubVariable.Value = result;
//                }
//                else
//                {
//                    hubVariable.Value = hubVariable.ValueRaw;
//                }
//            }

            var saveResult = await repositoryManager.SaveHubVariable(saveHubVariable.HubKey, hubVariable, cancellationToken);
            return saveResult;
        }
	    
	    [HttpPost("[action]")]
	    [ValidateHub(EPermission.User)]
	    public Task<DexihView[]> DeleteViews([FromBody] HubKeyItems views, CancellationToken cancellationToken)
	    {
		    _logger.LogTrace(LoggingEvents.HubDeleteViews, "HubController.DeleteViews: HubKey: {updateBrowserHub}, ViewKeys {dataValidationKeys}.", views.HubKey, string.Join(",", views.ItemKeys.Select(c => c.ToString())));

		    var deleteResult = _operations.RepositoryManager.DeleteViews(views.HubKey, views.ItemKeys, cancellationToken);
		    return deleteResult;
	    }

	    [HttpPost("[action]")]
	    [ValidateHub(EPermission.User)]
	    public Task<DexihView> SaveView([FromBody] HubValue<DexihView> saveView, CancellationToken cancellationToken)
	    {
		    _logger.LogTrace(LoggingEvents.HubSaveViews, "HubController.SAveView: HubKey: {updateBrowserHub}", saveView.HubKey);

		    var repositoryManager = _operations.RepositoryManager;
		    var saveResult = repositoryManager.SaveView(saveView.HubKey, saveView.Value, cancellationToken);
		    return saveResult;
	    }
	    
	    [HttpPost("[action]")]
	    [ValidateHub(EPermission.User)]
	    public Task<DexihDashboard[]> DeleteDashboards([FromBody] HubKeyItems dashboards, CancellationToken cancellationToken)
	    {
		    _logger.LogTrace(LoggingEvents.HubDeleteViews, "HubController.DeleteDashboards: HubKey: {updateBrowserHub}, ViewKeys {dataValidationKeys}.", dashboards.HubKey, string.Join(",", dashboards.ItemKeys.Select(c => c.ToString())));

		    var deleteResult = _operations.RepositoryManager.DeleteDashboards(dashboards.HubKey, dashboards.ItemKeys, cancellationToken);
		    return deleteResult;
	    }

	    [HttpPost("[action]")]
	    [ValidateHub(EPermission.User)]
	    public Task<DexihDashboard> SaveDashboard([FromBody] HubValue<DexihDashboard> saveDashboard, CancellationToken cancellationToken)
	    {
		    _logger.LogTrace(LoggingEvents.HubSaveDashboards, "HubController.HubSaveDashboards: HubKey: {updateBrowserHub}", saveDashboard.HubKey);

		    var repositoryManager = _operations.RepositoryManager;
		    var saveResult = repositoryManager.SaveDashboard(saveDashboard.HubKey, saveDashboard.Value, cancellationToken);
		    return saveResult;
	    }
	    
	    [HttpPost("[action]")]
	    [ValidateHub(EPermission.User)]
	    public Task<DexihListOfValues[]> DeleteListOfValues([FromBody] HubKeyItems listOfValues, CancellationToken cancellationToken)
	    {
		    _logger.LogTrace(LoggingEvents.HubDeleteListOfValues, "HubController.DeleteListOfValues: HubKey: {updateBrowserHub}, Keys {dataValidationKeys}.", listOfValues.HubKey, string.Join(",", listOfValues.ItemKeys.Select(c => c.ToString())));

		    var deleteResult = _operations.RepositoryManager.DeleteListOfValues(listOfValues.HubKey, listOfValues.ItemKeys, cancellationToken);
		    return deleteResult;
	    }

	    [HttpPost("[action]")]
	    [ValidateHub(EPermission.User)]
	    public Task<DexihListOfValues> SaveListOfValues([FromBody] HubValue<DexihListOfValues> saveListOfValues, CancellationToken cancellationToken)
	    {
		    _logger.LogTrace(LoggingEvents.HubSaveListOfValues, "HubController.SaveListOfValues: HubKey: {updateBrowserHub}", saveListOfValues.HubKey);

		    var repositoryManager = _operations.RepositoryManager;
		    var saveResult = repositoryManager.SaveListOfValues(saveListOfValues.HubKey, saveListOfValues.Value, cancellationToken);
		    return saveResult;
	    }
	    
	    [HttpPost("[action]")]
	    [ValidateHub(EPermission.User)]
	    public Task<DexihTag[]> DeleteTags([FromBody] HubKeyItems tags, CancellationToken cancellationToken)
	    {
		    _logger.LogTrace(LoggingEvents.HubDeleteTags, "HubController.DeleteTags: HubKey: {updateBrowserHub}, TagKeys {keys}.", tags.HubKey, string.Join(",", tags.ItemKeys.Select(c => c.ToString())));

		    var deleteResult = _operations.RepositoryManager.DeleteTags(tags.HubKey, tags.ItemKeys, cancellationToken);
		    return deleteResult;
	    }

	    [HttpPost("[action]")]
	    [ValidateHub(EPermission.User)]
	    public Task<DexihTag> SaveTag([FromBody] HubValue<DexihTag> tagValue, CancellationToken cancellationToken)
	    {
		    _logger.LogTrace(LoggingEvents.HubSaveTags, "HubController.SaveTags: HubKey: {updateBrowserHub}", tagValue.HubKey);

		    var repositoryManager = _operations.RepositoryManager;
		    var saveResult = repositoryManager.SaveTag(tagValue.HubKey, tagValue.Value, cancellationToken);
		    return saveResult;
	    }
	    
	    [HttpPost("[action]")]
	    [ValidateHub(EPermission.User)]
	    public Task SaveObjectTags([FromBody] ObjectTags objectTags, CancellationToken cancellationToken)
	    {
		    _logger.LogTrace(LoggingEvents.HubSaveObjectTags, "HubController.HubSaveObjectTags: HubKey: {updateBrowserHub}", objectTags.HubKey);

		    var repositoryManager = _operations.RepositoryManager;
		    var saveResult = repositoryManager.SaveObjectTags(objectTags.HubKey, objectTags.ObjectKey, objectTags.ObjectType, objectTags.TagKeys , cancellationToken);
		    return saveResult;
	    }
	    
	    [HttpPost("[action]")]
	    [ValidateHub(EPermission.User)]
	    public Task SaveTagObjects([FromBody] TagObjects tagObjects, CancellationToken cancellationToken)
	    {
		    _logger.LogTrace(LoggingEvents.HubSaveTagObjects, "HubController.HubSaveTagObjects: HubKey: {updateBrowserHub}", tagObjects.HubKey);

		    var repositoryManager = _operations.RepositoryManager;
		    var saveResult = repositoryManager.SaveTagObjects(tagObjects.HubKey, tagObjects.TagKey, tagObjects.IsChecked, tagObjects.ObjectKeys, cancellationToken);
		    return saveResult;
	    }
	    
	    [HttpPost("[action]")]
	    [ValidateHub(EPermission.User)]
	    public Task DeleteTagObjects([FromBody] TagObjects tagObjects, CancellationToken cancellationToken)
	    {
		    _logger.LogTrace(LoggingEvents.HubDeleteTagObjects, "HubController.HubDeleteTagObjects: HubKey: {updateBrowserHub}", tagObjects.HubKey);

		    var repositoryManager = _operations.RepositoryManager;
		    var saveResult = repositoryManager.DeleteTagObjects(tagObjects.HubKey, tagObjects.ObjectKeys, cancellationToken);
		    return saveResult;
	    }
	    
	    [HttpPost("[action]")]
	    [ValidateHub(EPermission.User)]
	    public Task<DexihApi[]> DeleteAPIs([FromBody] HubKeyItems apis, CancellationToken cancellationToken)
	    {
		    _logger.LogTrace(LoggingEvents.HubDeleteApis, "HubController.DeleteApis: HubKey: {updateBrowserHub}, APIKeys {dataValidationKeys}.", apis.HubKey, string.Join(",", apis.ItemKeys.Select(c => c.ToString())));

		    var deleteResult = _operations.RepositoryManager.DeleteApis(apis.HubKey, apis.ItemKeys, cancellationToken);
		    return deleteResult;
	    }

	    [HttpPost("[action]")]
	    [ValidateHub(EPermission.User)]
	    public Task<DexihApi> SaveApi([FromBody] HubValue<DexihApi> saveApi, CancellationToken cancellationToken)
	    {
		    _logger.LogTrace(LoggingEvents.HubSaveApis, "HubController.SaveApis: HubKey: {updateBrowserHub}", saveApi.HubKey);

		    var repositoryManager = _operations.RepositoryManager;
		    var saveResult = repositoryManager.SaveApi(saveApi.HubKey, saveApi.Value, cancellationToken);
		    return saveResult;
	    }
	    
	    [HttpPost("[action]")]
	    [ValidateHub(EPermission.User)]
	    public Task<string> ActivateApis([FromBody] ActivateApis apis, CancellationToken cancellationToken)
	    {
		    _logger.LogTrace(LoggingEvents.HubActivateApis, "HubController.HubActivateApis: HubKey: {hubKey}, ApiKeys: {apiKeys}", apis.HubKey, string.Join(",", apis.ApiKeys));

		    var repositoryManager = _operations.RepositoryManager;
		    return _remoteAgents.ActivateApis(apis.RemoteAgentId, apis.HubKey, apis.DownloadUrl, apis.ConnectionId, apis.ApiKeys, apis.InputParameters, repositoryManager, cancellationToken);
	    }
	    
	    [HttpPost("[action]")]
	    [ValidateHub(EPermission.User)]
	    public Task<string> DeactivateApis([FromBody] ActivateApis apis, CancellationToken cancellationToken)
	    {
		    _logger.LogTrace(LoggingEvents.HubDeactivateApis, "HubController.DeactivateApis: HubKey: {hubKey}, ApiKeys: {apiKeys}", apis.HubKey, string.Join(",", apis.ApiKeys));

		    var repositoryManager = _operations.RepositoryManager;
		    return _remoteAgents.DeactivateApis(apis.RemoteAgentId, apis.HubKey, apis.DownloadUrl, apis.ApiKeys, repositoryManager, cancellationToken);
	    }
	    
	    
	    [HttpPost("[action]")]
	    [ValidateHub(EPermission.User)]
	    public async Task<string> UploadFile([FromBody] UploadFiles uploadFiles, CancellationToken cancellationToken)
	    {
		    _logger.LogTrace(LoggingEvents.HubUploadFiles, "HubController.UploadFile: HubKey: {updateBrowserHub}, TableKey: {TableKey}.", uploadFiles.HubKey, uploadFiles.TableKey);

		    var repositoryManager = _operations.RepositoryManager;
		    var table = await repositoryManager.GetTable(uploadFiles.HubKey, uploadFiles.TableKey, false, cancellationToken);

		    if (table == null)
		    {
			    throw new HubControllerException($"The table with the key {uploadFiles.TableKey} could not be found.");
		    }
		    
		    return await _remoteAgents.UploadFile(uploadFiles.RemoteAgentId, uploadFiles.HubKey, uploadFiles.DownloadUrl, uploadFiles.TableKey, uploadFiles.Path, uploadFiles.FileName, _operations.RepositoryManager, cancellationToken);
	    }
	    
	    [HttpPost("[action]")]
	    [ValidateHub(EPermission.Owner)]
	    public async Task<string> CreateFilePaths([FromBody] HubValue<DexihTable> table, CancellationToken cancellationToken)
	    {
		    var hub = await _operations.RepositoryManager.GetHub(table.HubKey, cancellationToken);
		    var cache = new CacheManager(table.HubKey, hub.EncryptionKey);
		    await cache.LoadTableDependencies(table.Value, _operations.RepositoryManager.DbContext);
		    
		    return await _remoteAgents.SendRemoteCommand(table.RemoteAgentId, table.HubKey, table.DownloadUrl, nameof(RemoteOperations.CreateFilePaths),
			    new {cache, table = table.Value}, _operations.RepositoryManager, cancellationToken);
	    }
	    
	    [HttpPost("[action]")]
	    [ValidateHub(EPermission.Owner)]
	    public async Task<string> MoveFiles([FromBody] MoveFiles table, CancellationToken cancellationToken)
	    {
		    var hub = await _operations.RepositoryManager.GetHub(table.HubKey, cancellationToken);
		    var cache = new CacheManager(table.HubKey, hub.EncryptionKey);
		    await cache.LoadTableDependencies(table.Value, _operations.RepositoryManager.DbContext);
	        
		    return await _remoteAgents.SendRemoteCommand(table.RemoteAgentId, table.HubKey, table.DownloadUrl, nameof(RemoteOperations.MoveFiles),
			    new {cache, table = table.Value, fromPath = table.FromPath, toPath = table.ToPath, files = table.Files}, _operations.RepositoryManager, cancellationToken);
	    }
	    
	    [HttpPost("[action]")]
	    [ValidateHub(EPermission.Owner)]
	    public async Task<string> DeleteFiles([FromBody] DeleteFiles table, CancellationToken cancellationToken)
	    {
		    var hub = await _operations.RepositoryManager.GetHub(table.HubKey, cancellationToken);
		    var cache = new CacheManager(table.HubKey, hub.EncryptionKey);
		    await cache.LoadTableDependencies(table.Value, _operations.RepositoryManager.DbContext);
	        
		    return await _remoteAgents.SendRemoteCommand(table.RemoteAgentId, table.HubKey, table.DownloadUrl, nameof(RemoteOperations.DeleteFiles),
			    new {cache, table = table.Value, path = table.Path, files = table.Files}, _operations.RepositoryManager, cancellationToken);
	    }

	    [HttpPost("[action]")]
	    [ValidateHub(EPermission.Owner)]
	    public async Task<string> GetFileList([FromBody] GetFileList table, CancellationToken cancellationToken)
	    {
		    var hub = await _operations.RepositoryManager.GetHub(table.HubKey, cancellationToken);
		    var cache = new CacheManager(table.HubKey, hub.EncryptionKey);
		    await cache.LoadTableDependencies(table.Value, _operations.RepositoryManager.DbContext);
	        
		    return await _remoteAgents.SendRemoteCommand(table.RemoteAgentId, table.HubKey, table.DownloadUrl, nameof(RemoteOperations.GetFileList),
			    new {cache, table = table.Value, path = table.Path}, _operations.RepositoryManager, cancellationToken);
	    }

	    
	    [HttpPost("[action]")]
	    [ValidateHub(EPermission.User)]
	    public async Task<string> BulkUploadFile([FromBody] BulkUploadFile bulkUploadFile, CancellationToken cancellationToken)
	    {
		    _logger.LogTrace(LoggingEvents.HubBulkUploadFiles, "HubController.HubBulkUploadFiles: HubKey: {updateBrowserHub}, ConnectionKey: {ConnectionKey}.", bulkUploadFile.HubKey, bulkUploadFile.ConnectionKey);

		    var result = await _remoteAgents.BulkUploadFiles(bulkUploadFile.RemoteAgentId, bulkUploadFile.HubKey, bulkUploadFile.DownloadUrl, bulkUploadFile.ConnectionId, bulkUploadFile.ConnectionKey, bulkUploadFile.FileFormatKey, bulkUploadFile.FormatType, bulkUploadFile.FileName, _operations.RepositoryManager, cancellationToken);
		    return result;
	    }
	    
        [HttpPost("[action]")]
        [ValidateHub(EPermission.User)]
        public Task<string> DownloadFiles([FromBody] DownloadFiles downloadFiles, CancellationToken cancellationToken)
        {
            _logger.LogTrace(LoggingEvents.HubUploadFiles, "HubController.DownloadFiles: HubKey: {updateBrowserHub}, TableKey: {TableKey}.", downloadFiles.HubKey, downloadFiles.TableKey);

            var repositoryManager = _operations.RepositoryManager;

            var result = _remoteAgents.DownloadFiles(downloadFiles.RemoteAgentId, downloadFiles.HubKey, downloadFiles.DownloadUrl, downloadFiles.ConnectionId, downloadFiles.TableKey, downloadFiles.Path, downloadFiles.Files, repositoryManager, cancellationToken);
	        return result;
        }

        [HttpPost("[action]")]
        [ValidateHub(EPermission.FullReader)]
        public Task<string> DownloadSharedData([FromBody] DownloadDataModel downloadData, CancellationToken cancellationToken)
        {
            _logger.LogTrace(LoggingEvents.HubUploadFiles, "HubController.DownloadData: HubKey: {updateBrowserHub}", downloadData.HubKey);

            var repositoryManager = _operations.RepositoryManager;
            var downloadDataReturn = _remoteAgents.DownloadData(downloadData.RemoteAgentId, downloadData.HubKey, downloadData.DownloadUrl,  downloadData.ConnectionId, downloadData.DownloadObjects, downloadData.DownloadFormat, false, downloadData.ZipFiles, repositoryManager, cancellationToken);
            return downloadDataReturn;
        }

	    [HttpPost("[action]")]
	    [ValidateHub(EPermission.FullReader)]
	    public Task<string> DownloadTableData([FromBody] DownloadTableDataModel downloadData, CancellationToken cancellationToken)
	    {
		    _logger.LogTrace(LoggingEvents.HubUploadFiles, "HubController.DownloadData: HubKey: {updateBrowserHub}", downloadData.HubKey);

		    var repositoryManager = _operations.RepositoryManager;
		    var downloadDataReturn = _remoteAgents.DownloadTableData(downloadData.RemoteAgentId, downloadData.HubKey, downloadData.DownloadUrl, downloadData.ConnectionId, downloadData.Table, downloadData.SelectQuery, downloadData.InputTableColumns, downloadData.InputParameters, downloadData.RejectedTable, downloadData.DownloadFormat, downloadData.ZipFiles, repositoryManager, cancellationToken);
		    return downloadDataReturn;
	    }
	    
	    [HttpPost("[action]")]
	    [ValidateHub(EPermission.FullReader)]
	    public Task<string> DownloadDatalinkData([FromBody] DownloadDatalinkDataModel downloadData, CancellationToken cancellationToken)
	    {
		    _logger.LogTrace(LoggingEvents.HubUploadFiles, "HubController.DownloadData: HubKey: {updateBrowserHub}", downloadData.HubKey);

		    var repositoryManager = _operations.RepositoryManager;
		    var downloadDataReturn = _remoteAgents.DownloadDatalinkData(downloadData.RemoteAgentId, downloadData.HubKey, downloadData.DownloadUrl, downloadData.ConnectionId, downloadData.Datalink, downloadData.DatalinkTransformKey, downloadData.SelectQuery, downloadData.InputTableColumns, downloadData.InputParameters, downloadData.DownloadFormat, downloadData.ZipFiles, repositoryManager, cancellationToken);
		    return downloadDataReturn;
	    }
	    
	    [HttpPost("[action]")]
	    [ValidateHub(EPermission.User)]
	    public Task<string> RunDatalinks([FromBody] RunDatalinks datalinks, CancellationToken cancellationToken)
	    {
		    _logger.LogTrace(LoggingEvents.HubRunDatalinks, "HubController.RunDatalinks: HubKey: {hubKey}, DatalinkKeys: {datalinkKeys}", datalinks.HubKey, string.Join(",", datalinks.DatalinkKeys));

		    var repositoryManager = _operations.RepositoryManager;
		    return _remoteAgents.RunDatalinks(datalinks.RemoteAgentId, datalinks.HubKey, datalinks.DownloadUrl, datalinks.ConnectionId, datalinks.DatalinkKeys, datalinks.TruncateTarget, datalinks.ResetIncremental, datalinks.ResetIncrementalValue, datalinks.InputColumns, datalinks.InputParameters, repositoryManager, cancellationToken);
	    }
	    
	    [HttpPost("[action]")]
	    [ValidateHub(EPermission.User)]
	    public Task<DexihDatalinkTest[]> DeleteDatalinkTests([FromBody] HubKeyItems items, CancellationToken cancellationToken)
	    {
		    _logger.LogTrace(LoggingEvents.HubDeleteHubVariables, "HubController.DeleteDatalinkTests: HubKey: {updateBrowserHub}, VariableKeys {variableKeys}.", items.HubKey, string.Join(",", items.ItemKeys.Select(c => c.ToString())));

		    var deleteResult = _operations.RepositoryManager.DeleteDatalinkTests(items.HubKey, items.ItemKeys, cancellationToken);
		    return deleteResult;
	    }

	    [HttpPost("[action]")]
	    [ValidateHub(EPermission.User)]
	    public async Task<DexihDatalinkTest> SaveDatalinkTest([FromBody] HubValue<DexihDatalinkTest> saveDatalinkTest, CancellationToken cancellationToken)
	    {
		    _logger.LogTrace(LoggingEvents.HubSaveHubVariable, "HubController.SaveDatalinkTest: HubKey: {updateBrowserHub}", saveDatalinkTest.HubKey);

		    var repositoryManager = _operations.RepositoryManager;
		    var saveResult = await repositoryManager.SaveDatalinkTest(saveDatalinkTest.HubKey, saveDatalinkTest.Value, cancellationToken);
		    return saveResult;
	    }
	    
	    [HttpPost("[action]")]
	    [ValidateHub(EPermission.User)]
	    public async Task<DexihDatalinkTest> NewDatalinkTest([FromBody] NewDatalinkTest newDatalinkTest, CancellationToken cancellationToken)
	    {
		    _logger.LogTrace(LoggingEvents.HubSaveHubVariable, "HubController.NewDatalinkTest: HubKey: {updateBrowserHub}", newDatalinkTest.HubKey);

		    var repositoryManager = _operations.RepositoryManager;
		    var hub = await _operations.RepositoryManager.GetHub(newDatalinkTest.HubKey, cancellationToken);
		    var saveResult = await repositoryManager.NewDatalinkTest(newDatalinkTest.HubKey, hub, newDatalinkTest.Name, newDatalinkTest.DatalinkKeys, newDatalinkTest.AuditConnectionKey, newDatalinkTest.TargetConnectionKey, newDatalinkTest.SourceConnectionKey, cancellationToken);
		    return saveResult;
	    }
	    
	    [HttpPost("[action]")]
	    [ValidateHub(EPermission.User)]
	    public Task<string> RunDatalinkTests([FromBody] RunDatalinkTests datalinkTests, CancellationToken cancellationToken)
	    {
		    _logger.LogTrace(LoggingEvents.HubRunDatalinks, "HubController.RunDatalinks: HubKey: {hubKey}, DatalinkKeys: {datalinkKeys}", datalinkTests.HubKey, string.Join(",", datalinkTests.DatalinkTestKeys));

		    var repositoryManager = _operations.RepositoryManager;
		    return _remoteAgents.RunDatalinkTests(datalinkTests.RemoteAgentId, datalinkTests.HubKey, datalinkTests.DownloadUrl, datalinkTests.ConnectionId, datalinkTests.DatalinkTestKeys, repositoryManager, cancellationToken);
	    }
	    
	    /// <summary>
	    /// Cancels any running datalinks 
	    /// </summary>
	    /// <returns></returns>
	    [HttpPost("[action]")]
	    [ValidateHub(EPermission.User)]
	    public Task<string> CancelDatalinkTests([FromBody] HubKeyItems cancelDatalinkTests, CancellationToken cancellationToken)
	    {
		    _logger.LogTrace(LoggingEvents.HubCancelDatalinkTests, "HubController.CancelDatalinkTests: HubKey: {hubKey}, AuditKeys: {auditKeys}", cancelDatalinkTests.HubKey, string.Join(",", cancelDatalinkTests.ItemKeys));

		    var repositoryManager = _operations.RepositoryManager;
		    return _remoteAgents.CancelDatalinkTests(cancelDatalinkTests.RemoteAgentId, cancelDatalinkTests.HubKey, cancelDatalinkTests.DownloadUrl, cancelDatalinkTests.ItemKeys, repositoryManager, cancellationToken);
	    }

	    [HttpPost("[action]")]
	    [ValidateHub(EPermission.User)]
	    public Task<string> RunDatalinkTestSnapshot([FromBody] RunDatalinkTests datalinkTests, CancellationToken cancellationToken)
	    {
		    _logger.LogTrace(LoggingEvents.HubSnapshotDatalinkTests, "HubController.SnapshotDatalinkTests: HubKey: {hubKey}, DatalinkKeys: {datalinkKeys}", datalinkTests.HubKey, string.Join(",", datalinkTests.DatalinkTestKeys));

		    var repositoryManager = _operations.RepositoryManager;
		    return _remoteAgents.RunDatalinkTestSnapshot(datalinkTests.RemoteAgentId, datalinkTests.HubKey, datalinkTests.DownloadUrl, datalinkTests.ConnectionId, datalinkTests.DatalinkTestKeys, repositoryManager, cancellationToken);
	    }

	    [HttpPost("[action]")]
	    [ValidateHub(EPermission.User)]
	    public Task<string> RunDatajobs([FromBody] RunDatajobs datajobs, CancellationToken cancellationToken)
	    {
		    _logger.LogTrace(LoggingEvents.HubRunDatajobs, "HubController.RunDatajobs: HubKey: {hubKey}, DatalinkKeys: {datajobKeys}", datajobs.HubKey, string.Join(",", datajobs.DatajobKeys));

		    var repositoryManager = _operations.RepositoryManager;
		    return _remoteAgents.RunDatajobs(datajobs.RemoteAgentId, datajobs.HubKey, datajobs.DownloadUrl, datajobs.ConnectionId, datajobs.DatajobKeys, datajobs.TruncateTarget, datajobs.ResetIncremental, datajobs.ResetIncrementalValue, datajobs.InputParameters, repositoryManager, cancellationToken);
	    }

        /// <summary>
        /// Cancels any running datalinks 
        /// </summary>
        /// <returns></returns>
        [HttpPost("[action]")]
        [ValidateHub(EPermission.User)]
        public Task<string> CancelDatalinks([FromBody] HubKeyItems cancelDatalinkKeys, CancellationToken cancellationToken)
        {
            _logger.LogTrace(LoggingEvents.HubRunDatalinks, "HubController.CancelDatalinks: HubKey: {hubKey}, AuditKeys: {auditKeys}", cancelDatalinkKeys.HubKey, string.Join(",", cancelDatalinkKeys.ItemKeys));

            var repositoryManager = _operations.RepositoryManager;
            return _remoteAgents.CancelDatalinks(cancelDatalinkKeys.RemoteAgentId, cancelDatalinkKeys.HubKey, cancelDatalinkKeys.DownloadUrl, cancelDatalinkKeys.ItemKeys, repositoryManager, cancellationToken);
        }

        [HttpPost("[action]")]
	    [ValidateHub(EPermission.User)]
	    public Task<string> ActivateDatajobs([FromBody] ActivateDatajobs datajobs, CancellationToken cancellationToken)
	    {
		    _logger.LogTrace(LoggingEvents.HubActivateDatajobs, "HubController.ActivateDatajobs: HubKey: {hubKey}, DatalinkKeys: {datajobKeys}", datajobs.HubKey, string.Join(",", datajobs.DatajobKeys));

		    var repositoryManager = _operations.RepositoryManager;
		    return _remoteAgents.ActivateDatajobs(datajobs.RemoteAgentId, datajobs.HubKey, datajobs.DownloadUrl, datajobs.ConnectionId, datajobs.DatajobKeys, datajobs.InputParameters, repositoryManager, cancellationToken);
	    }
	    
	    [HttpPost("[action]")]
	    [ValidateHub(EPermission.User)]
	    public Task<string> DeactivateDatajobs([FromBody] ActivateDatajobs datajobs, CancellationToken cancellationToken)
	    {
		    _logger.LogTrace(LoggingEvents.HubDeactivateDatajobs, "HubController.DeactivateDatajobs: HubKey: {hubKey}, DatalinkKeys: {datajobKeys}", datajobs.HubKey, string.Join(",", datajobs.DatajobKeys));

		    var repositoryManager = _operations.RepositoryManager;
		    return _remoteAgents.DeactivateDatajobs(datajobs.RemoteAgentId, datajobs.HubKey, datajobs.DownloadUrl, datajobs.DatajobKeys, repositoryManager, cancellationToken);
	    }
	    
	    [HttpPost("[action]")]
	    [ValidateHub(EPermission.Owner)]
	    public async Task<Import> ImportPlan([FromForm] ImportOptions importOptions, IFormFile file, CancellationToken cancellationToken)
	    {
		    _logger.LogTrace(LoggingEvents.HubImportPlan, "HubController.HubImportPlan");

		    var fileStream = file.OpenReadStream();
		    var hub = await fileStream.DeserializeAsync<DexihHub>(cancellationToken: cancellationToken);
		    var repositoryManager = _operations.RepositoryManager;
		    var import = await repositoryManager.CreateImportPlan(importOptions.HubKey, hub, importOptions.ImportActions, cancellationToken);
		    return import;

	    }
	    
	    [HttpPost("[action]")]
	    [ValidateHub(EPermission.Owner)]
	    public Task ImportPackage([FromBody] Import import, CancellationToken cancellationToken)
	    {
		    _logger.LogTrace(LoggingEvents.HubImportPackage, "HubController.HubImportPackage");
		    
		    var repositoryManager = _operations.RepositoryManager;
		    
		    // only owners can import passwords/connection strings
		    var allowPasswordImport = HubPermission == EPermission.Owner;
		    
		    return repositoryManager.ImportPackage(import, allowPasswordImport, cancellationToken);
	    }

	    [HttpPost("[action]")]
	    [ValidateHub(EPermission.User)]
	    public IActionResult DownloadFunctionCode([FromBody] DownloadFunctionCode downloadFunctionCode, CancellationToken cancellationToken)
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
						    c.Direction == EParameterDirection.Input).OrderBy(c => c.Position).Where(c => c.IsValid))
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
					    c.IsValid && c.Direction == EParameterDirection.ReturnValue);

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

	    [HttpPost("[action]")]
	    [ValidateHub(EPermission.PublishReader)]
	    public async Task<string> DBML([FromBody] HubKeyItems tables, CancellationToken cancellationToken)
	    {
		    var repositoryManager = _operations.RepositoryManager;
		    var hub = await repositoryManager.GetHub(tables.HubKey, cancellationToken);
		    
		    var dbml = new StringBuilder();
		    foreach (var key in tables.ItemKeys)
		    {
			    var table = hub.DexihTables.Single(c => c.Key == key);
			    dbml.AppendLine(table.GetTable(hub, null, null).DBML());
			    dbml.AppendLine();
		    }

		    return dbml.ToString();
	    }
    }
}
