using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using dexih.api.Services;
using dexih.functions;
using dexih.operations;
using dexih.repository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using dexih.functions.Query;
using dexih.api.Services.Remote;
//using dexih.api.Services.DataReader;
using dexih.api.Services.Operations;
using dexih.remote.operations;
using Dexih.Utils.CopyProperties;


namespace dexih.api.Controllers
{
	[Authorize]
    [ApiExceptionFilter]
    [ApiFilter]
    public class ReaderController : Controller
	{
		public ReaderController(DexihRepositoryContext dbContext,
			IDexihOperations operations,
			SignInManager<ApplicationUser> signInManager,
			IRemoteAgents remoteAgents,
            //IDataReader dataReader,
			ILoggerFactory loggerFactory)
		{
			DbContext = dbContext;
			_operations = operations;
			_signInManager = signInManager;
			_remoteAgents = remoteAgents;
            //_dataReader = dataReader;
			_logger = loggerFactory.CreateLogger<RemoteController>();
		}
		
		private const string DatalinkSchema = "#Datalink";

		private DexihRepositoryContext DbContext { get; }
		private readonly IDexihOperations _operations;
		private readonly IRemoteAgents _remoteAgents;
        // private readonly IDataReader _dataReader;
        private readonly ILogger _logger;
		private readonly SignInManager<ApplicationUser> _signInManager;

		private async Task<DexihHub> IsAuthorizedHub(string hubName, ApplicationUser applicationUser, CancellationToken cancellationToken)
		{
			if (applicationUser == null)
			{
				applicationUser = await _operations.RepositoryManager.GetUser(HttpContext.User, cancellationToken);
			}

			if (applicationUser == null)
            {
                throw new ReaderControllerException("Authentication Error");
            }

            var hub = await DbContext.DexihHubs.SingleOrDefaultAsync(h => h.Name == hubName && h.IsValid, cancellationToken: cancellationToken);
			if (hub == null)
			{
                throw new ReaderControllerException($"The hub {hubName} could not be found.");
            }

			if (applicationUser.IsAdmin)
			{
				return hub;
			}
			
			var hubUser = await DbContext.DexihHubUser.Where(c => c.IsValid && c.HubKey == hub.HubKey 
				  && c.UserId == applicationUser.Id 
				  && ( c.Permission == EPermission.FullReader || c.Permission == EPermission.Owner || c.Permission == EPermission.PublishReader)).ToArrayAsync();

			if(hubUser.Any())
			{
				return hub;
			}
			else
			{
				throw new ReaderControllerException($"The user does not have permission to read the hub {hubName}.");
			}
		}


		// POST: /Reader/Login
		///[HttpPost]
		[AllowAnonymous]
		public async Task<DexihActiveAgent> Login(string user, string password, string hubName, CancellationToken cancellationToken)
		{
			try
			{
				if (ModelState.IsValid)
				{
					var applicationUser = await _operations.RepositoryManager.GetUserFromEmail(user, cancellationToken);
					if (applicationUser == null)
					{
						_logger.LogWarning("Invalid remote login attempt using Email: " + User);
						throw new ReaderControllerException(
							"Login failed due to invalid user/password or an an invalid account.");
					}

					var result = await _signInManager.PasswordSignInAsync(applicationUser, password, false,
						lockoutOnFailure: false);

					if (result.Succeeded)
					{
						if (string.IsNullOrEmpty(hubName))
						{
							return null;
						}
						else
						{
							var hub = await IsAuthorizedHub(hubName, applicationUser, cancellationToken);
							var remoteAgent =
								await _remoteAgents.GetHubReaderRemoteAgent(hub.HubKey, _operations.RepositoryManager, cancellationToken);
							return remoteAgent;
						}
					}

					throw new ReaderControllerException(
						"Login failed due to invalid user/password or an an invalid account.");
				}

				// If we got this far, something failed, redisplay form
				throw new ReaderControllerException("Login failed due to an issue with the login parameters..");
			}
			catch (ReaderControllerException)
			{
				throw;
			}
            catch (Exception ex)
			{
                // Don't display the exception message, as it may give something away regarding the login.
                throw new ReaderControllerException($"Login failed due to unexpected error.  {ex.Message}", ex);
            }
        }

		//[HttpPost("[action]")]
		public async Task<string[]> GetHubs(CancellationToken cancellationToken)
		{
			try
			{
				var applicationUser = await _operations.RepositoryManager.GetUser(User, cancellationToken);

                if (applicationUser == null)
                {
                    throw new ReaderControllerException("User Authentication Failed.");
                }

				string[] hubNames;
				if (applicationUser.IsAdmin)
				{
					hubNames = await DbContext.DexihHubs.Where(c => c.IsValid).Select(c=> c.Name).ToArrayAsync(cancellationToken: cancellationToken);
				}
				else
				{
					var hubKeys = await DbContext.DexihHubUser.Where(c => c.UserId == applicationUser.Id && c.IsValid).Select(c => c.HubKey).ToArrayAsync(cancellationToken: cancellationToken);
					hubNames = await DbContext.DexihHubs.Include(c => c.DexihHubUsers).Where(c => hubKeys.Contains(c.HubKey) && c.IsValid).Select(c=>c.Name).ToArrayAsync(cancellationToken: cancellationToken);
				}

                return hubNames;
			}
			catch(Exception ex)
			{
                throw new ReaderControllerException("GetHubs Error: " + ex.Message);
            }
        }

		//[HttpPost("[action]")]
		public async Task<IEnumerable<Table>> GetTables(string hubName, CancellationToken cancellationToken)
		{
			try
			{
				var hub = await IsAuthorizedHub(hubName, null, cancellationToken);

				var dbTables = await DbContext.DexihTables
                    .Include(c=>c.Connection)
                    .Include(c => c.FileFormat)
                    .Where(c => c.IsValid && c.HubKey == hub.HubKey && c.IsShared).ToArrayAsync(cancellationToken: cancellationToken);

                foreach(var dbTable in dbTables)
                {
                    dbTable.SourceConnectionName = dbTable.Connection.Name;
                }

				var tables = dbTables.Select(t => t.GetTable(hub, null, new TransformSettings())).ToArray();

                var dbDatalinks = await DbContext.DexihDatalinks
                    .Where(c => c.IsValid && c.HubKey == hub.HubKey && c.IsShared).ToArrayAsync(cancellationToken: cancellationToken);

                var datalinks = dbDatalinks.Select(d => new Table(d.Name, DatalinkSchema)).ToArray();

				return tables.Concat(datalinks);
			}
			catch (Exception ex)
			{
                throw new ReaderControllerException("GetTables failed: " + ex.Message, ex);
            }
        }

		//[HttpPost("[action]")]
		public async Task<Table> GetTableInfo(string hubName, string tableSchema, string sourceConnectionName, string tableName, CancellationToken cancellationToken)
		{
			try
			{
				var hub = await IsAuthorizedHub(hubName, null, cancellationToken);

                // if the source is a datalink, then scan the transforms to contruct the output columns.
                if (tableSchema == DatalinkSchema)
                {
                    // get the datalink from the name.
                    var dbDatalink = await DbContext.DexihDatalinks
                        .SingleOrDefaultAsync(c =>
                            c.IsValid &&
                            c.HubKey == hub.HubKey &&
                            c.IsShared &&
                            c.Name == tableName, cancellationToken: cancellationToken);

	                var dbCache = new CacheManager(hub.HubKey, "");
                    var dbDatalink2 = await dbCache.GetDatalink(dbDatalink.Key, DbContext);
                    var dbTable = dbDatalink2.GetOutputTable();

	                var table = dbTable.GetTable(null, null);
	                table.Schema = DatalinkSchema;
	                table.LogicalName = $"{DatalinkSchema}.{table.Name}";

	                return table;

                }
                else
                {

                    var dbTable = await DbContext.DexihTables
                        .Include(d => d.Connection)
                        .Include(c => c.FileFormat)
	                    .Include(d => d.DexihTableColumns )
                        .SingleOrDefaultAsync(c =>
                            c.IsValid &&
                            c.HubKey == hub.HubKey &&
                            c.IsShared &&
                            c.Name == tableName &&
	                        c.Schema == tableSchema &&
                            c.Connection.Name == sourceConnectionName &&
                            c.Connection.IsValid, cancellationToken: cancellationToken);

	                var table =dbTable.GetTable(hub, null, new TransformSettings());
	                table.SourceConnectionName = sourceConnectionName;
	                return table;
                }
			}
			catch (Exception ex)
			{
                throw new ReaderControllerException("GetTableInfo failed: " + ex.Message, ex);
            }
        }

        public class OpenTableQueryModel
        {
            public string HubName { get; set; }
            public string SourceConnectionName { get; set; }
            public string TableName { get; set; }
            public string TableSchema { get; set; }
            public SelectQuery Query { get; set; }
	        public DownloadUrl DownloadUrl { get; set; }
	        public string InstanceId { get; set; }
        }

        // [HttpPost("[action]")]
        public async Task<string> OpenTableQuery([FromBody] OpenTableQueryModel parameters, CancellationToken cancellationToken)
        {
            try
            {
                var hub = await IsAuthorizedHub(parameters.HubName, null, cancellationToken);
	            var repositoryManager = _operations.RepositoryManager;

                // var remoteAgent = await _remoteAgents.GetRemoteAgent(parameters.InstanceId, hub.HubKey, _operations.RepositoryManager);

	            var cache = new CacheManager(hub.HubKey, hub.EncryptionKey);
                await cache.InitHub(DbContext);

                DexihDatalink dbDatalink;

                if (parameters.TableSchema == DatalinkSchema)
                {
                    var dbDatalinkObject = await DbContext.DexihDatalinks.SingleOrDefaultAsync(c =>
                        c.IsValid
                        && c.HubKey == hub.HubKey
                        && c.Name == parameters.TableName
                        && c.IsShared, cancellationToken: cancellationToken);

                    dbDatalink = await cache.GetDatalink(dbDatalinkObject.Key, DbContext);
                    await cache.LoadDatalinkDependencies(dbDatalink, true, DbContext);
                }
                else
                {
                    // get a reference to the source connection
                    var dbSourceConnection = await DbContext.DexihConnections.SingleOrDefaultAsync(c =>
                        c.IsValid &&
                        c.Name == parameters.SourceConnectionName &&
                        c.HubKey == hub.HubKey, cancellationToken: cancellationToken);
	                
                    var dbTable = await DbContext.DexihTables.SingleOrDefaultAsync(c =>
                        c.IsValid
                        && c.HubKey == hub.HubKey
                        && c.Name == parameters.TableName
	                	&& c.Schema == parameters.TableSchema
                        && c.ConnectionKey == dbSourceConnection.Key
                        && c.IsShared, cancellationToken: cancellationToken);

	                var dbColumns = await DbContext.DexihTableColumns
		                .Where(c => c.TableKey == dbTable.Key && c.IsValid).ToArrayAsync(cancellationToken: cancellationToken);

                    // create a temporary datalink that pulls data from the source table.
	                dbDatalink = new DexihDatalink
	                {
		                SourceDatalinkTable = new DexihDatalinkTable
		                {
			                SourceType = ESourceType.Table,
			                SourceTable = dbTable,
			                SourceTableKey = dbTable.Key,
			                DexihDatalinkColumns = dbColumns.OrderBy(c=>c.Position).Select(c =>
			                {
				                var column = new DexihDatalinkColumn();
				                c.CopyProperties(column, true);
				                return column;
			                }).ToArray()
		                },
	                };

	                await cache.AddTables(new[] { dbTable.Key}, DbContext);

                }

                dbDatalink.AuditConnectionKey = 0;
                cache.Hub.DexihDatalinks.Add(dbDatalink);

	            var value = new
	            {
		            cache,
		            DatalinkKey = dbDatalink.Key,
		            SelectQuery = parameters.Query,
		            parameters.DownloadUrl
	            };

	            var result = await _remoteAgents.SendRemoteCommand(parameters.InstanceId, hub.HubKey, parameters.DownloadUrl, nameof(RemoteOperations.GetReaderData), value, repositoryManager, cancellationToken);

	            // returns a pointer to the download url.
	            return result;

            }
            catch (Exception ex)
            {
                throw new ReaderControllerException("OpenTableQuery Error: " + ex.Message, ex);
            }
        }

//        [AllowAnonymous]
//		public async Task<(bool IsComplete, object Package)> ReceiveData(string continuationToken)
//        {
//            try
//            {
//                var popData = await _dataReader.ReceiveData(continuationToken, CancellationToken.None);
//                return popData;
//            }
//            catch (Exception ex)
//            {
//                throw new ReaderControllerException("Receive data failed: " + ex.Message, ex);
//            }
//        }
//
//        [AllowAnonymous]
//        public void SetError([FromBody] ErrorModel error)
//        {
//            try
//            {
//                _dataReader.Fault(error.ContinuationToken, error.Exception);
//                return;
//            }
//            catch (Exception ex)
//            {
//                throw new ReaderControllerException("Set Error failed: " + ex.Message, ex);
//            }
//        }
//
//        [AllowAnonymous]
//        public async Task SendData([FromBody] SendDataModel pushData )
//        {
//            try
//            {
//                await _dataReader.SendData(pushData.ContinuationToken, pushData.DataSet, CancellationToken.None);
//                return;
//            }
//            catch (Exception ex)
//            {
//                throw new ReaderControllerException("PushData failed: " + ex.Message, ex);
//            }
//        }
//
//        [AllowAnonymous]
//        public void Complete(string continuationToken)
//        {
//            try
//            {
//                _dataReader.Complete(continuationToken);
//            }
//            catch (Exception ex)
//            {
//                throw new ReaderControllerException("PushFinish failed: " + ex.Message, ex);
//            }
//        }

//        public class SendDataModel
//        {
//            public string ContinuationToken { get; set; }
//            public object DataSet { get; set; }
//        }
//
//        public class ErrorModel
//        {
//            public string ContinuationToken { get; set; }
//            public Exception Exception { get; set; }
//        }
    }
}
