using dexih.functions;
using dexih.functions.Query;
using dexih.operations;
using dexih.repository;
using Dexih.Utils.ManagedTasks;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using dexih.api.Models;
using dexih.api.Services.Operations;
using dexih.transforms;
using Dexih.Utils.DataType;
using static dexih.operations.DownloadData;
using Newtonsoft.Json.Linq;

namespace dexih.api.Services.Remote
{
    public interface IRemoteAgents
    {
	    Task<T> SendRemoteMessage<T>(long hubKey, string instanceId, string method, object value,
		    RepositoryManager repositoryManager,
		    CancellationToken cancellationToken = default, bool awaitResponse = true);
	    Task SetResponseMessage(string messageToken, RemoteMessage remoteMessage, CancellationToken cancellationToken);

	    Task<Out> Run<In, Out>(HubValue<In> hubValue, string method, RepositoryManager repositoryManager,
		    CancellationToken cancellationToken = default, bool awaitResponse = true);
	    
//	    Task<string> SendRemoteCommand(long hubKey, string instanceId, string method, object value,
//		    RepositoryManager repositoryManager, CancellationToken cancellationToken = default);

	    Task<(string instanceId, string securityToken)> AuthorizeRemoteAgent(string name, long remoteAgentKey,
		    string encryptionKey, string ipAddress, string userId, CancellationToken cancellationToken);

	    Task<RemoteAgentProperties> GetRemoteAgentProperties(string instanceId,
		    CancellationToken cancellationToken = default);

	    Task<DexihActiveAgent> GetHubReaderRemoteAgent(long hubKey, RepositoryManager database, CancellationToken cancellationToken);
	    
	    Task ConnectRemoteAgent(string connectionId, DexihActiveAgent activeAgent, IDexihOperations operations, CancellationToken cancellationToken);
	    Task DisconnectRemoteAgent(string instanceId, IDexihOperations operations, CancellationToken cancellationToken);
	    Task<string> Encrypt(string instanceId, long hubKey, string value, RepositoryManager database, CancellationToken cancellationToken);
		Task<string> Decrypt(string instanceId, long hubKey, string value, RepositoryManager database, CancellationToken cancellationToken);

		Task<string> UploadFile(string id, long hubKey, long tableKey, EFlatFilePath path, string fileName,
			DownloadUrl downloadUrl, RepositoryManager database, CancellationToken cancellationToken);

	    Task<(string url, string reference)> BulkUploadFiles(string id, long hubKey, string connectionId, long connectionKey, long fileFormatKey, DataType.ETypeCode formatType, string fileName,
		    DownloadUrl downloadUrl, RepositoryManager database, CancellationToken cancellationToken);

	    Task<DexihTable[]> ImportTables(string instanceId, long hubKey, DexihTable[] hubTables,
		    RepositoryManager repositoryManager, CancellationToken cancellationToken);

	    Task<JToken> CreateTables(string instanceId, long hubKey, DexihTable[] tables, bool dropTables,
		    RepositoryManager repositoryManager, CancellationToken cancellationToken);

	    Task<JToken> ClearTables(string instanceId, long hubKey, DexihTable[] tables,
		    RepositoryManager repositoryManager, CancellationToken cancellationToken);
	    Task<string> PreviewTable(string instanceId, long hubKey, long tableKey, SelectQuery selectQuery, InputColumn[] inputColumns, InputParameters inputParameters, bool showRejectedData, DownloadUrl downloadUrl, RepositoryManager database, CancellationToken cancellationToken);
	    Task<string> PreviewTable(string instanceId, long hubKey, DexihTable hubTable, SelectQuery selectQuery, InputColumn[] inputColumns, InputParameters inputParameters, bool showRejectedData, DownloadUrl downloadUrl, RepositoryManager database, CancellationToken cancellationToken);
	    Task<string> PreviewDatalink(string instanceId, long hubKey, long datalinkKey, SelectQuery selectQuery, InputColumn[] inputColumns, InputParameters parameters, DownloadUrl downloadUrl, RepositoryManager database, CancellationToken cancellationToken);
	    Task<string> PreviewAuditResults(AuditResults auditResults, RepositoryManager database, CancellationToken cancellationToken);

	    Task<TransformProperties> DatalinkProperties(string id, long hubKey, long datalinkKey, SelectQuery selectQuery,
		    InputColumn[] inputColumns, InputParameters parameters, RepositoryManager database, CancellationToken cancellationToken);

	    Task<string> CallApi(string id, string apiKey, string action, string parameters, string ipAddress, CancellationToken cancellationToken);

	    Task<string> PreviewTransform(string instanceId, long hubKey, DexihDatalink hubDatalink, long datalinkTransformKey, SelectQuery selectQuery, InputColumn[] inputColumns, InputParameters parameters, DownloadUrl downloadUrl, RepositoryManager database, CancellationToken cancellationToken);
	    Task<string[]> ImportFunctionMappings(string instanceId, long hubKey, DexihDatalink hubDatalink, long datalinkTransformKey, DexihDatalinkTransformItem datalinkTransformItem, RepositoryManager database, CancellationToken cancellationToken);
        
	    Task<ManagedTask> DownloadFiles(string instanceId, long hubKey, string connectionId, long tableKey, EFlatFilePath path, string[] files, DownloadUrl downloadUrl, RepositoryManager database, CancellationToken cancellationToken);
        Task<ManagedTask> DownloadData(string instanceId, long hubKey, string connectionId, DownloadObject[] downloadObjects, EDownloadFormat downloadFormat, bool zipFiles, DownloadUrl downloadUrl, RepositoryManager database, CancellationToken cancellationToken);

	    Task<ManagedTask> DownloadTableData(string id, long hubKey, string connectionId, DexihTable hubTable, SelectQuery selectQuery, InputColumn[] inputColumns, InputParameters inputParameters, bool showRejectedData,EDownloadFormat downloadFormat, bool zipFiles, DownloadUrl downloadUrl, RepositoryManager database, CancellationToken cancellationToken);
	    Task<ManagedTask> DownloadDatalinkData(string id, long hubKey, string connectionId, DexihDatalink table, long datalinkTransformKey, SelectQuery selectQuery, InputColumn[] inputColumns, InputParameters parameters, EDownloadFormat downloadFormat, bool zipFiles, DownloadUrl downloadUrl, RepositoryManager database, CancellationToken cancellationToken);
	    
	    Task RunDatalinks(string instanceId, long hubKey, string connectionId, long[] datalinkKeys, bool truncateTarget,
		    bool resetIncremental, string resetIncrementalValue, InputColumn[] inputColumns, InputParameters parameters, RepositoryManager database, CancellationToken cancellationToken);

	    Task RunDatalinkTests(string id, long hubKey, string connectionId, long[] datalinkTestKeys,
		    RepositoryManager database, CancellationToken cancellationToken);

	    Task RunDatalinkTestSnapshot(string id, long hubKey, string connectionId, long[] datalinkTestKeys,
		    RepositoryManager database, CancellationToken cancellationToken);
	    
        Task CancelDatalinks(string instanceId, long hubKey, long[] datalinkKeys, RepositoryManager database, CancellationToken cancellationToken);
	    Task CancelDatalinkTests(string instanceId, long hubKey, long[] datalinkTestKeys, RepositoryManager database, CancellationToken cancellationToken);

        Task RunDatajobs(string instanceId, long hubKey, string connectionId, long[] datajobKeys, bool truncateTarget,
		    bool resetIncremental, string resetIncrementalValue, InputParameters inputParameters, RepositoryManager database, CancellationToken cancellationToken);
        
		Task CancelTasks(ManagedTask[] tasks, RepositoryManager database, CancellationToken cancellationToken);
		Task ActivateDatajobs(string instanceId, long hubKey, string connectionId, long[] datajobKeys, InputParameters inputParameters, RepositoryManager database, CancellationToken cancellationToken);
	    Task DeactivateDatajobs(string instanceId, long hubKey, long[] datajobKeys, RepositoryManager database, CancellationToken cancellationToken);
	    Task ActivateApis(string instanceId, long hubKey, string connectionId, long[] apiKeys, InputParameters inputParameters, RepositoryManager database, CancellationToken cancellationToken);
	    Task DeactivateApis(string instanceId, long hubKey, long[] apiKeys, RepositoryManager database, CancellationToken cancellationToken);
	    
	    Task RestartAgents(string userId, IEnumerable<string> instanceIds, bool force, RepositoryManager database, CancellationToken cancellationToken);
	    Task RestartAgents(string userId, IEnumerable<long> remoteAgentKeys, bool force, RepositoryManager database, CancellationToken cancellationToken);
	    Task<DexihRemoteAgent[]> PingAgents(ApplicationUser user, string connectionId, RepositoryManager repositoryManager, CancellationToken cancellationToken);
	    Task<NamingStandards> NamingStandards(string instanceId, long hubKey, RepositoryManager repositoryManager, CancellationToken cancellationToken);

    }
}
