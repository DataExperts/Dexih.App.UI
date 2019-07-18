using dexih.functions;
using dexih.functions.Query;
using dexih.operations;
using dexih.repository;
using Dexih.Utils.ManagedTasks;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using dexih.api.Services.Operations;
using dexih.transforms;
using static dexih.operations.DownloadData;
using Newtonsoft.Json.Linq;

namespace dexih.api.Services.Remote
{
    public interface IRemoteAgents
    {
	    Task<T> SendRemoteMessage<T>(long hubKey, string instanceId, string method, object value,
		    operations.KeyValuePair[] parameters, RepositoryManager repositoryManager,
		    CancellationToken cancellationToken = default, bool awaitResponse = true);
	    Task SetResponseMessage(string messageToken, RemoteMessage remoteMessage, CancellationToken cancellationToken);

	    Task<(string instanceId, string securityToken)> AuthorizeRemoteAgent(string name, long remoteAgentKey,
		    string encryptionKey, string ipAddress, string userId);

	    Task<RemoteAgentProperties> GetRemoteAgentProperties(string instanceId,
		    CancellationToken cancellationToken = default);

	    Task<DexihActiveAgent> GetHubReaderRemoteAgent(long hubKey, RepositoryManager database);
	    
	    Task ConnectRemoteAgent(string connectionId, DexihActiveAgent activeAgent, IDexihOperations operations);
	    Task DisconnectRemoteAgent(string instanceId, IDexihOperations operations);
	    Task<string> Encrypt(string instanceId, long hubKey, string value, RepositoryManager database);
		Task<string> Decrypt(string instanceId, long hubKey, string value, RepositoryManager database);
	    Task<string> UploadFile(string instanceId, long hubKey, long tableKey, string fileName, DownloadUrl downloadUrl, RepositoryManager database);

	    Task<DexihTable[]> ImportTables(string instanceId, long hubKey, DexihTable[] hubTables,
		    RepositoryManager repositoryManager);

	    Task<JToken> CreateTables(string instanceId, long hubKey, DexihTable[] tables, bool dropTables,
		    RepositoryManager repositoryManager);

	    Task<JToken> ClearTables(string instanceId, long hubKey, DexihTable[] tables,
		    RepositoryManager repositoryManager);
	    Task<string> PreviewTable(string instanceId, long hubKey, long tableKey, SelectQuery selectQuery, InputColumn[] inputColumns, bool showRejectedData, DownloadUrl downloadUrl, RepositoryManager database);
	    Task<string> PreviewTable(string instanceId, long hubKey, DexihTable hubTable, SelectQuery selectQuery, InputColumn[] inputColumns, bool showRejectedData, DownloadUrl downloadUrl, RepositoryManager database);
	    Task<string> PreviewDatalink(string instanceId, long hubKey, long datalinkKey, SelectQuery selectQuery, InputColumn[] inputColumns, DownloadUrl downloadUrl, RepositoryManager database);

	    Task<TransformProperties> DatalinkProperties(string id, long hubKey, long datalinkKey, SelectQuery selectQuery,
		    InputColumn[] inputColumns, RepositoryManager database);

	    Task<string> CallApi(string id, string apiKey, string action, string parameters, string ipAddress);

	    Task<string> PreviewTransform(string instanceId, long hubKey, DexihDatalink hubDatalink, long datalinkTransformKey, SelectQuery selectQuery, InputColumn[] inputColumns, DownloadUrl downloadUrl, RepositoryManager database);
	    Task<string[]> ImportFunctionMappings(string instanceId, long hubKey, DexihDatalink hubDatalink, long datalinkTransformKey, DexihDatalinkTransformItem datalinkTransformItem, RepositoryManager database);
        
	    Task<ManagedTask> DownloadFiles(string instanceId, long hubKey, string connectionId, long tableKey, EFlatFilePath path, string[] files, DownloadUrl downloadUrl, RepositoryManager database);
        Task<ManagedTask> DownloadData(string instanceId, long hubKey, string connectionId, DownloadObject[] downloadObjects, EDownloadFormat downloadFormat, bool zipFiles, DownloadUrl downloadUrl, RepositoryManager database);

	    Task<ManagedTask> DownloadTableData(string id, long hubKey, string connectionId, DexihTable hubTable, SelectQuery selectQuery, InputColumn[] inputColumns, bool showRejectedData,EDownloadFormat downloadFormat, bool zipFiles, DownloadUrl downloadUrl, RepositoryManager database);
	    Task<ManagedTask> DownloadDatalinkData(string id, long hubKey, string connectionId, DexihDatalink table, long datalinkTransformKey, SelectQuery selectQuery, InputColumn[] inputColumns, EDownloadFormat downloadFormat, bool zipFiles, DownloadUrl downloadUrl, RepositoryManager database);
	    
	    Task RunDatalinks(string instanceId, long hubKey, string connectionId, long[] datalinkKeys, bool truncateTarget,
		    bool resetIncremental, string resetIncrementalValue, InputColumn[] inputColumns, RepositoryManager database);

	    Task RunDatalinkTests(string id, long hubKey, string connectionId, long[] datalinkTestKeys,
		    RepositoryManager database);

	    Task RunDatalinkTestSnapshot(string id, long hubKey, string connectionId, long[] datalinkTestKeys,
		    RepositoryManager database);
	    
        Task CancelDatalinks(string instanceId, long hubKey, long[] datalinkKeys, RepositoryManager database);
	    Task CancelDatalinkTests(string instanceId, long hubKey, long[] datalinkTestKeys, RepositoryManager database);

        Task RunDatajobs(string instanceId, long hubKey, string connectionId, long[] datajobKeys, bool truncateTarget,
		    bool resetIncremental, string resetIncrementalValue, RepositoryManager database);
        
		Task CancelTasks(ManagedTask[] tasks, RepositoryManager database);
		Task ActivateDatajobs(string instanceId, long hubKey, string connectionId, long[] datajobKeys, RepositoryManager database);
	    Task DeactivateDatajobs(string instanceId, long hubKey, long[] datajobKeys, RepositoryManager database);
	    Task ActivateApis(string instanceId, long hubKey, string connectionId, long[] apiKeys, RepositoryManager database);
	    Task DeactivateApis(string instanceId, long hubKey, long[] apiKeys, RepositoryManager database);
	    
	    Task RestartAgents(string userId, IEnumerable<string> instanceIds, bool force, RepositoryManager database);
	    Task RestartAgents(string userId, IEnumerable<long> remoteAgentKeys, bool force, RepositoryManager database);
	    Task<DexihRemoteAgent[]> PingAgents(ApplicationUser user, string connectionId, RepositoryManager repositoryManager);
	    Task<NamingStandards> NamingStandards(string instanceId, long hubKey, RepositoryManager repositoryManager);

    }
}
