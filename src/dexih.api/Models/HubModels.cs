using dexih.operations;
using dexih.repository;
using dexih.functions;
using dexih.functions.Query;
using Dexih.Utils.Crypto;
using Dexih.Utils.DataType;
using static dexih.operations.DownloadData;

namespace dexih.api.Models
{
    public class UpdateBrowserHub
    {
        public long HubKey { get; set; }
        public string ConnectionId { get; set; }
    }
    
    public class UserPermissions
    {
        public long HubKey { get; set; }
        public DexihHubUser.EPermission Permission { get; set; }
        public string[] Emails { get; set; }
        public bool SendInvites { get; set; }
    }
    
    public class HubKeyValue
    {
        public long HubKey { get; set; }
        public string Value { get; set; }
    }

    public class GetHubCacheResult
    {
        public DexihHubUser.EPermission Permission { get; set; }
        public DexihHub Hub { get; set; }
    }

    public class SaveConnection
    {
        public long HubKey { get; set; }
        public string RemoteAgentId { get; set; }
        public DexihConnection Value { get; set; }
    }

	public class DecryptValue
	{
		public long HubKey { get; set; }
		public string RemoteAgentId { get; set; }
		public string Value { get; set; }
	}

    public class SaveValidation
    {
        public long HubKey { get; set; }
        public string RemoteAgentId { get; set; }
        public DexihColumnValidation Value { get; set; }
    }

    public class SaveCustomFunction
    {
        public long HubKey { get; set; }
        public string RemoteAgentId { get; set; }
        public DexihCustomFunction Value { get; set; }
    }

    public class SaveFileFormat
    {
        public long HubKey { get; set; }
        public string RemoteAgentId { get; set; }
        public DexihFileFormat Value { get; set; }
    }

    public class SaveView
    {
        public long HubKey { get; set; }
        public string RemoteAgentId { get; set; }
        public DexihView Value { get; set; }
    }

    public class SaveDashboard
    {
        public long HubKey { get; set; }
        public string RemoteAgentId { get; set; }
        public DexihDashboard Value { get; set; }
    }

    public class SaveApi
    {
        public long HubKey { get; set; }
        public string RemoteAgentId { get; set; }
        public DexihApi Value { get; set; }
    }

    public class SaveHubVariable
    {
        public long HubKey { get; set; }
        public string RemoteAgentId { get; set; }
        public DexihHubVariable Value { get; set; }
    }
    
    public class SaveDatalinkTest
    {
        public long HubKey { get; set; }
        public string RemoteAgentId { get; set; }
        public DexihDatalinkTest Value { get; set; }
    }

    public class NewDatalinkTest
    {
        public long HubKey { get; set; }
        public string RemoteAgentId { get; set; }
        public string ConnectionId { get; set; }
        public string Name { get; set; }
        public long[] DatalinkKeys { get; set; }
        public long AuditConnectionKey { get; set; }
        public long SourceConnectionKey { get; set; }
        public long TargetConnectionKey { get; set; }
        public bool SnapshotData { get; set; }
    }

    public class HubKeyItems
    {
        public long HubKey {get; set;}
        public string RemoteAgentId { get; set; }
        public long[] ItemKeys {get;set;}
    }

    public class ShareDatalinks
    {
        public long HubKey { get; set; }
        public string RemoteAgentId { get; set; }
        public long[] DatalinkKeys { get; set; }
        public bool IsShared { get; set; }
    }

    public class ImportTables
    {
        public long HubKey { get; set; }
        public string RemoteAgentId { get; set; }
        public DexihTable[] Tables { get; set; }
        public bool Save { get; set; }
    }

    public class CreateTables
    {
        public long HubKey { get; set; }
        public string RemoteAgentId { get; set; }
        public DexihTable[] Tables { get; set; }
        public bool dropTables { get; set; }
    }

    public class ImportFileFormat
    {
        public long HubKey { get; set; }
        public string RemoteAgentId { get; set; }
        public string Table { get; set; }
        public DexihTable TableObj {
            get { return string.IsNullOrEmpty(Table) ? null : Json.DeserializeObject<DexihTable>(Table, null); }
        }
        public bool Save { get; set; }
    }

	public class UploadFiles
	{
		public long HubKey { get; set; }
		public string RemoteAgentId { get; set; }
		public long ConnectionKey { get; set; }
		public long TableKey { get; set; }
	    public string FileName { get; set; }
	    public DownloadUrl DownloadUrl { get; set; }
	}

    public class BulkUploadFiles
    {
        public long HubKey { get; set; }
        public string RemoteAgentId { get; set; }
        public long ConnectionKey { get; set; }
        public long FileFormatKey { get; set; }
        public DataType.ETypeCode FormatType { get; set; }
        public string FileName { get; set; }
        public DownloadUrl DownloadUrl { get; set; }
        public string ConnectionId { get; set; }
    }

    public class BulkUploadFilesReturn
    {
        public string Url;
        public string Reference;
    }

    public class DownloadFiles
    {
        public long HubKey { get; set; }
        public string ConnectionId { get; set; }
        public string RemoteAgentId { get; set; }
        public long TableKey { get; set; }
        public EFlatFilePath Path { get; set; }
        public string[] Files { get; set; }
        public DownloadUrl DownloadUrl { get; set; }
    }

    public class DeleteTables
    {
        public long HubKey { get; set; }
        public long[] TableKeys { get; set; }
    }

    public class ShareTables
    {
        public long HubKey { get; set; }
        public long[] TableKeys { get; set; }
        public bool IsShared { get; set; }
    }

    public class SaveTable
    {
        public long HubKey { get; set; }
        public DexihTable Value { get; set; }
    }

    public class SaveDatalink
    {
        public long HubKey { get; set; }
        public DexihDatalink Value { get; set; }
    }

    public class PreviewTable
	{
		public long HubKey { get; set; }
		public string RemoteAgentId { get; set; }
		public long TableKey { get; set; }
		public SelectQuery SelectQuery { get; set; }
		public bool ShowRejectedData { get; set; }
	    public DownloadUrl DownloadUrl { get; set; }
	    public InputColumn[] InputColumns { get; set; }
        public InputParameters Parameters { get; set; }
	}
    
    public class PreviewTableQuery
    {
        public long HubKey { get; set; }
        public string RemoteAgentId { get; set; }
        public DexihTable Table { get; set; }
        public SelectQuery SelectQuery { get; set; }
        public bool ShowRejectedData { get; set; }
        public DownloadUrl DownloadUrl { get; set; }
        public InputColumn[] InputColumns { get; set; }
        public InputParameters Parameters { get; set; }
    }
    
    public class PreviewDatalink
    {
        public long HubKey { get; set; }
        public string RemoteAgentId { get; set; }
        public long DatalinkKey { get; set; }
        public SelectQuery SelectQuery { get; set; }
        public DownloadUrl DownloadUrl { get; set; }
        public InputColumn[] InputColumns { get; set; }
        public InputParameters Parameters { get; set; }
    }

    public class PreviewDashboard
    {
        public long HubKey { get; set; }
        public string RemoteAgentId { get; set; }
        public DexihDashboard Dashboard { get; set; }
        public DownloadUrl DownloadUrl { get; set; }
        public InputParameters Parameters { get; set; }
    }

    public class DashboardUrls
    {
        public long DashboardItemKey { get; set; }
        public string DownloadUrl { get; set; }
    }

    public class PreviewView
    {
        public long HubKey { get; set; }
        public string RemoteAgentId { get; set; }
        public DexihView HubView { get; set; }
        public DownloadUrl DownloadUrl { get; set; }
        public InputColumn[] InputColumns { get; set; }
        public InputParameters Parameters { get; set; }

    }

    public class PreviewTransform
    {
        public long HubKey { get; set; }
        public string RemoteAgentId { get; set; }
        public DexihDatalink Datalink { get; set; }
        public long DatalinkTransformKey { get; set; }
        public SelectQuery SelectQuery { get; set; }
        public DownloadUrl DownloadUrl { get; set; }
        public InputColumn[] InputColumns { get; set; }
        public InputParameters Parameters { get; set; }

    }

    public class ImportFunctionMappings
    {
        public long HubKey { get; set; }
        public string RemoteAgentId { get; set; }
        public DexihDatalink Datalink { get; set; }
        public long DatalinkTransformKey { get; set; }
        public DexihDatalinkTransformItem DatalinkTransformItem { get; set; }
    }

    public class NewDatalinks
    {
        public long HubKey { get; set; }
        public string RemoteAgentId { get; set; }
        public long[] SourceTableKeys { get; set; }
        public string DatalinkName { get; set; }
        public DexihDatalink.EDatalinkType DatalinkType { get; set; }
        public long? TargetConnectionKey { get; set; }
        public long? TargetTableKey { get; set; }
        public string TargetTableName { get; set; }
        public long? AuditConnectionKey { get; set; }
        public bool AddSourceColumns { get; set; }
        public TableColumn.EDeltaType[] AuditColumns { get; set; }
    }

    public class DeleteDatalinks
    {
        public long HubKey { get; set; }
        public long[] DatalinkKeys { get; set; }
    }

    public class SaveDatajob
    {
        public long HubKey { get; set; }
        public DexihDatajob Value { get; set; }
    }

    public class DownloadTableDataModel
    {
        public long HubKey { get; set; }
        public string RemoteAgentId { get; set; }
        public string ConnectionId { get; set; }
        public EDownloadFormat DownloadFormat { get; set; }
        public bool ZipFiles { get; set; }
        public DexihTable Table { get; set; }
        public InputColumn[] InputTableColumns { get; set; }
        public SelectQuery SelectQuery { get; set; }
        public InputParameters Parameters { get; set; }
        public bool RejectedTable { get; set; }
        public DownloadUrl DownloadUrl { get; set; }
    }

    public class DownloadDatalinkDataModel
    {
        public long HubKey { get; set; }
        public string RemoteAgentId { get; set; }
        public string ConnectionId { get; set; }
        public EDownloadFormat DownloadFormat { get; set; }
        public bool ZipFiles { get; set; }
        public DexihDatalink Datalink { get; set; }
        public long DatalinkTransformKey { get; set; }
        public InputColumn[] InputTableColumns { get; set; }
        public InputParameters Parameters { get; set; }
        public SelectQuery SelectQuery { get; set; }
        public DownloadUrl DownloadUrl { get; set; }
    }

    public class DownloadDataModel
    {
        public long HubKey { get; set; }
        public string RemoteAgentId { get; set; }
        public string ConnectionId { get; set; }
        public EDownloadFormat DownloadFormat { get; set; }
        public bool ZipFiles { get; set; }
        public DownloadObject[] DownloadObjects { get; set; }
        public DownloadUrl DownloadUrl { get; set; }
    }

    public class FileStreamModel
    {
        public long HubKey { get; set; }
        public string SecurityToken { get; set; }
        public string FileReference { get; set; }
        public EDownloadFormat DownloadFormat { get; set; } = EDownloadFormat.Json;
        public DownloadUrl DownloadUrl { get; set; }
    }
    
    public class RunDatalinks
    {
        public long HubKey {get; set;}
        public string ConnectionId { get; set; }
        public string RemoteAgentId { get; set; }
        public long[] DatalinkKeys {get;set;}
        public bool TruncateTarget { get; set; }
        public bool ResetIncremental { get; set; }
        public string ResetIncrementalValue { get; set; }
        public InputColumn[] InputColumns { get; set; }
        public InputParameters Parameters { get; set; }
    }

    public class RunDatalinkTests
    {
        public long HubKey {get; set;}
        public string ConnectionId { get; set; }
        public string RemoteAgentId { get; set; }
        public long[] DatalinkTestKeys {get;set;}
    }
    
    public class CancelDatalinkTests
    {
        public long HubKey { get; set; }
        public string RemoteAgentId { get; set; }
        public long[] DatalinkTestKeys { get; set; }
    }

    public class RunDatajobs
    {
        public long HubKey {get; set;}
        public string ConnectionId { get; set; }
        public string RemoteAgentId { get; set; }
        public long[] DatajobKeys {get;set;}
        public bool TruncateTarget { get; set; }
        public bool ResetIncremental { get; set; }
        public string ResetIncrementalValue { get; set; }
    }

    public class CancelDatalinks
    {
        public long HubKey { get; set; }
        public string RemoteAgentId { get; set; }
        public long[] DatalinkKeys { get; set; }
    }
    
    public class ActivateDatajobs
    {
        public long HubKey {get; set;}
        public string RemoteAgentId { get; set; }
        public string ConnectionId { get; set; }
        public long[] DatajobKeys {get;set;}
    }

    public class ActivateApis
    {
        public long HubKey {get; set;}
        public string RemoteAgentId { get; set; }
        public string ConnectionId { get; set; }
        public long[] ApiKeys {get;set;}
    }

    public class ImportOptions
    {
        public long HubKey { get; set; }
        public ImportAction[] ImportActions { get; set; }
    }
    
    public class DownloadFunctionCode
    {
        public long HubKey {get; set;}
        public DexihDatalinkTransformItem DatalinkTransformItem { get; set; }
        public object[] TestValues { get; set; }
    }

}
