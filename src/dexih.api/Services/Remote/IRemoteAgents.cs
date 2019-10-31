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
using dexih.remote.operations;
using dexih.transforms;
using Dexih.Utils.DataType;
using static dexih.operations.DownloadData;


namespace dexih.api.Services.Remote
{
    public interface IRemoteAgents
    {
//	    Task<T> SendRemoteMessage<T>(long hubKey, string instanceId, string method, object value,
//		    RepositoryManager repositoryManager,
//		    CancellationToken cancellationToken = default, bool awaitResponse = true);
//	    Task SetResponseMessage(string messageToken, ResponseMessage responseMessage, CancellationToken cancellationToken);
//
	    Task<string> Run<In>(HubValue<In> hubValue, string method, RepositoryManager repositoryManager,
		    CancellationToken cancellationToken = default);
	    
	    Task<string> SendRemoteCommand(string instanceId, long hubKey, DownloadUrl downloadUrl, string method, object value,
		    RepositoryManager repositoryManager, CancellationToken cancellationToken = default);

	    Task<(string instanceId, string securityToken)> AuthorizeRemoteAgent(string name, long remoteAgentKey,
		    string encryptionKey, string ipAddress, string userId, CancellationToken cancellationToken);

	    Task<RemoteAgentProperties> GetRemoteAgentProperties(string instanceId,
		    CancellationToken cancellationToken = default);

	    Task<DexihActiveAgent> GetHubReaderRemoteAgent(long hubKey, RepositoryManager database, CancellationToken cancellationToken);
	    
	    Task ConnectRemoteAgent(string connectionId, DexihActiveAgent activeAgent, IDexihOperations operations, CancellationToken cancellationToken);
	    Task DisconnectRemoteAgent(string instanceId, IDexihOperations operations, CancellationToken cancellationToken);
	    Task<string> Encrypt(string instanceId, long hubKey, DownloadUrl downloadUrl, string value, RepositoryManager database, CancellationToken cancellationToken);
		Task<string> Decrypt(string instanceId, long hubKey, DownloadUrl downloadUrl, string value, RepositoryManager database, CancellationToken cancellationToken);

		Task<string> UploadFile(string instanceId, long hubKey, DownloadUrl downloadUrl, long tableKey, EFlatFilePath path, string fileName,
			RepositoryManager database, CancellationToken cancellationToken);

	    Task<string> BulkUploadFiles(string instanceId, long hubKey, DownloadUrl downloadUrl, string connectionId, long connectionKey, long fileFormatKey, ETypeCode formatType, string fileName,
		    RepositoryManager database, CancellationToken cancellationToken);

	    Task<string> ImportTables(string instanceId, long hubKey, DownloadUrl downloadUrl, DexihTable[] hubTables,
		    RepositoryManager repositoryManager, CancellationToken cancellationToken);

	    Task<string> CreateTables(string instanceId, long hubKey, DownloadUrl downloadUrl, DexihTable[] tables, bool dropTables,
		    RepositoryManager repositoryManager, CancellationToken cancellationToken);

	    Task<string> ClearTables(string instanceId, long hubKey, DownloadUrl downloadUrl, DexihTable[] tables,
		    RepositoryManager repositoryManager, CancellationToken cancellationToken);
	    Task<string> PreviewTable(string instanceId, long hubKey, DownloadUrl downloadUrl, long tableKey, SelectQuery selectQuery, InputColumn[] inputColumns, InputParameters inputParameters, bool showRejectedData, RepositoryManager database, CancellationToken cancellationToken);
	    Task<string> PreviewTable(string instanceId, long hubKey, DownloadUrl downloadUrl, DexihTable hubTable, SelectQuery selectQuery, InputColumn[] inputColumns, InputParameters inputParameters, bool showRejectedData, RepositoryManager database, CancellationToken cancellationToken);
	    Task<string> PreviewDatalink(string instanceId, long hubKey, DownloadUrl downloadUrl, long datalinkKey, SelectQuery selectQuery, InputColumn[] inputColumns, InputParameters parameters, RepositoryManager database, CancellationToken cancellationToken);
	    Task<string> PreviewAuditResults(AuditResults auditResults, RepositoryManager database, CancellationToken cancellationToken);

	    Task<string> DatalinkProperties(string instanceId, long hubKey, DownloadUrl downloadUrl, long datalinkKey, SelectQuery selectQuery,
		    InputColumn[] inputColumns, InputParameters parameters, RepositoryManager database, CancellationToken cancellationToken);

	    Task<string> CallApi(string id, string apiKey, string action, string parameters, string ipAddress, RepositoryManager database, CancellationToken cancellationToken);

	    Task<string> PreviewTransform(string instanceId, long hubKey, DownloadUrl downloadUrl, DexihDatalink hubDatalink, long datalinkTransformKey, SelectQuery selectQuery, InputColumn[] inputColumns, InputParameters parameters, RepositoryManager database, CancellationToken cancellationToken);
	    Task<string> ImportFunctionMappings(string instanceId, long hubKey, DownloadUrl downloadUrl, DexihDatalink hubDatalink, long datalinkTransformKey, DexihDatalinkTransformItem datalinkTransformItem, RepositoryManager database, CancellationToken cancellationToken);
        
	    Task<string> DownloadFiles(string instanceId, long hubKey, DownloadUrl downloadUrl, string connectionId, long tableKey, EFlatFilePath path, string[] files, RepositoryManager database, CancellationToken cancellationToken);
        Task<string> DownloadData(string instanceId, long hubKey, DownloadUrl downloadUrl, string connectionId, DownloadData.DownloadObject[] downloadObjects, EDownloadFormat downloadFormat, bool zipFiles, RepositoryManager database, CancellationToken cancellationToken);

	    Task<string> DownloadTableData(string instanceId, long hubKey, DownloadUrl downloadUrl, string connectionId, DexihTable hubTable, SelectQuery selectQuery, InputColumn[] inputColumns, InputParameters inputParameters, bool showRejectedData,EDownloadFormat downloadFormat, bool zipFiles, RepositoryManager database, CancellationToken cancellationToken);
	    Task<string> DownloadDatalinkData(string instanceId, long hubKey, DownloadUrl downloadUrl, string connectionId, DexihDatalink table, long datalinkTransformKey, SelectQuery selectQuery, InputColumn[] inputColumns, InputParameters parameters, EDownloadFormat downloadFormat, bool zipFiles, RepositoryManager database, CancellationToken cancellationToken);
	    
	    Task<string> RunDatalinks(string instanceId, long hubKey, DownloadUrl downloadUrl, string connectionId, long[] datalinkKeys, bool truncateTarget,
		    bool resetIncremental, string resetIncrementalValue, InputColumn[] inputColumns, InputParameters parameters, RepositoryManager database, CancellationToken cancellationToken);

	    Task<string> RunDatalinkTests(string instanceId, long hubKey, DownloadUrl downloadUrl, string connectionId, long[] datalinkTestKeys,
		    RepositoryManager database, CancellationToken cancellationToken);

	    Task<string> RunDatalinkTestSnapshot(string instanceId, long hubKey, DownloadUrl downloadUrl, string connectionId, long[] datalinkTestKeys,
		    RepositoryManager database, CancellationToken cancellationToken);
	    
        Task<string> CancelDatalinks(string instanceId, long hubKey, DownloadUrl downloadUrl, long[] datalinkKeys, RepositoryManager database, CancellationToken cancellationToken);
	    Task<string> CancelDatalinkTests(string instanceId, long hubKey, DownloadUrl downloadUrl, long[] datalinkTestKeys, RepositoryManager database, CancellationToken cancellationToken);

        Task<string> RunDatajobs(string instanceId, long hubKey, DownloadUrl downloadUrl, string connectionId, long[] datajobKeys, bool truncateTarget,
		    bool resetIncremental, string resetIncrementalValue, InputParameters inputParameters, RepositoryManager database, CancellationToken cancellationToken);
        
		Task CancelTasks(ManagedTask[] tasks, RepositoryManager database, CancellationToken cancellationToken);
		Task<string> ActivateDatajobs(string instanceId, long hubKey, DownloadUrl downloadUrl, string connectionId, long[] datajobKeys, InputParameters inputParameters, RepositoryManager database, CancellationToken cancellationToken);
	    Task<string> DeactivateDatajobs(string instanceId, long hubKey, DownloadUrl downloadUrl, long[] datajobKeys, RepositoryManager database, CancellationToken cancellationToken);
	    Task<string> ActivateApis(string instanceId, long hubKey, DownloadUrl downloadUrl, string connectionId, long[] apiKeys, InputParameters inputParameters, RepositoryManager database, CancellationToken cancellationToken);
	    Task<string> DeactivateApis(string instanceId, long hubKey, DownloadUrl downloadUrl, long[] apiKeys, RepositoryManager database, CancellationToken cancellationToken);
	    
	    Task RestartAgents(string userId, IEnumerable<string> instanceIds, bool force, RepositoryManager database, CancellationToken cancellationToken);
	    Task RestartAgents(string userId, IEnumerable<long> remoteAgentKeys, bool force, RepositoryManager database, CancellationToken cancellationToken);
	    Task<DexihRemoteAgent[]> PingAgents(ApplicationUser user, string connectionId, RepositoryManager repositoryManager, CancellationToken cancellationToken);
	    Task<NamingStandards> NamingStandards(string instanceId, CancellationToken cancellationToken);

    }
}
