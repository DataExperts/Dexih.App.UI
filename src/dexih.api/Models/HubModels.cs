using System;
using dexih.operations;
using dexih.repository;
using dexih.functions;
using dexih.functions.Query;
using dexih.remote.operations;
using dexih.transforms;
using Dexih.Utils.Crypto;
using Dexih.Utils.DataType;
using Microsoft.AspNetCore.SignalR;
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
        public EPermission Permission { get; set; }
        public string[] Emails { get; set; }
        public bool SendInvites { get; set; }
    }

    public class HubModelBase
    {
        public long HubKey { get; set; }
        public string RemoteAgentId { get; set; }
        public DownloadUrl DownloadUrl { get; set; }
    }
    

    public class GetHubCacheResult
    {
        public EPermission Permission { get; set; }
        public DexihHub Hub { get; set; }
    }

    
    public class HubValue<T> : HubModelBase
    {
        public T Value { get; set; }    
    }

    public class ColumnValidationTest : HubValue<DexihColumnValidation>
    {
        public object TestValue { get; set; }
    }

    public class CustomFunctionTest : HubValue<DexihDatalinkTransformItem>
    {
        public object[] TestValues { get; set; }
    }

    public class MoveFiles : HubValue<DexihTable>
    {
        public EFlatFilePath FromPath { get; set; }
        public EFlatFilePath ToPath { get; set; }
        public string[] Files { get; set; }
    }

    public class DeleteFiles : HubValue<DexihTable>
    {
        public EFlatFilePath Path { get; set; }
        public string[] Files { get; set; }
    }

    public class GetFileList : HubValue<DexihTable>
    {
        public EFlatFilePath Path { get; set; }
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
    }

    public class HubKeyItems: HubModelBase
    {
        public long[] ItemKeys {get;set;}
    }


    public class ShareItems: HubModelBase
    {
        public long[] Keys { get; set; }
        public EDataObjectType ObjectType { get; set; }
        public bool IsShared { get; set; }
    }

    
    public class ImportTables: HubModelBase
    {
        public DexihTable[] Tables { get; set; }
    }

    public class CreateTables: HubModelBase
    {
        public DexihTable[] Tables { get; set; }
        public bool dropTables { get; set; }
    }


	public class UploadFiles: HubModelBase
	{
		public long ConnectionKey { get; set; }
		public long TableKey { get; set; }
	    public string FileName { get; set; }
        public EFlatFilePath Path { get; set; }
	    public DownloadUrl DownloadUrl { get; set; }
	}

    public class BulkUploadFile: HubModelBase
    {
        public long ConnectionKey { get; set; }
        public long FileFormatKey { get; set; }
        public ETypeCode FormatType { get; set; }
        public string FileName { get; set; }
        public DownloadUrl DownloadUrl { get; set; }
        public string ConnectionId { get; set; }
    }

    public class DownloadFiles: HubModelBase
    {
        public string ConnectionId { get; set; }
        public long TableKey { get; set; }
        public EFlatFilePath Path { get; set; }
        public string[] Files { get; set; }
        public DownloadUrl DownloadUrl { get; set; }
    }

    public class ImportFileFormat: HubModelBase
    {
        public string Table { get; set; }
        public DexihTable TableObj => string.IsNullOrEmpty(Table) ? null : JsonExtensions.Deserialize<DexihTable>(Table);
        public bool Save { get; set; }
    }
    
    public class PreviewProfile: HubModelBase
    {
        public long AuditKey { get; set; }
        public string ProfileTableName { get; set; }
        public DexihConnection Connection { get; set; }
        public bool SummaryOnly { get; set; }
        public DownloadUrl DownloadUrl { get; set; }
        
    }

    
    public class PreviewBase: HubModelBase
    {
        public SelectQuery SelectQuery { get; set; }
        public DownloadUrl DownloadUrl { get; set; }
        public InputColumn[] InputColumns { get; set; }
        public InputParameters InputParameters { get; set; }
    }
    
    public class PreviewTable: PreviewBase
	{
		public long TableKey { get; set; }
		public bool ShowRejectedData { get; set; }
	}
    
    public class PreviewTableQuery: PreviewBase
    {
        public DexihTable Table { get; set; }
        public bool ShowRejectedData { get; set; }
    }
    
    public class PreviewDatalink: PreviewBase
    {
        public long DatalinkKey { get; set; }
    }

    public class PreviewDashboard: PreviewBase
    {
        public DexihDashboard Dashboard { get; set; }
    }

    public class DashboardDataKeys
    {
        public long DashboardItemKey { get; set; }
        public string DataKey { get; set; }
    }

    public class PreviewView: PreviewBase
    {
        public DexihView View { get; set; }

    }
    
    public class AuditResults: HubModelBase
    {

        public long[] ConnectionKeys { get; set; }
        public long[] ReferenceKeys { get; set; }
        public string AuditType { get; set; }
        public long? AuditKey { get; set; }
        public TransformWriterResult.ERunStatus? RunStatus { get; set; }
        public bool? PreviousResult { get; set; }
        public bool? PreviousSuccessResult { get; set; }
        public bool? CurrentResult { get; set; }
        public DateTime? StartTime { get; set; }
        public int? Rows { get; set; }
        public long? ParentAuditKey { get; set; }
        public bool? ChildItems { get; set; }
    }


    public class PreviewTransform: PreviewBase
    {
        public DexihDatalink Datalink { get; set; }
        public long DatalinkTransformKey { get; set; }

    }

    public class ImportFunctionMappings: HubModelBase
    {
        public DexihDatalink Datalink { get; set; }
        public long DatalinkTransformKey { get; set; }
        public DexihDatalinkTransformItem DatalinkTransformItem { get; set; }
    }

    public class NewDatalinks: HubModelBase
    {
        public long[] SourceTableKeys { get; set; }
        public string DatalinkName { get; set; }
        public EDatalinkType DatalinkType { get; set; }
        public long? TargetConnectionKey { get; set; }
        public long? TargetTableKey { get; set; }
        public string TargetTableName { get; set; }
        public long? AuditConnectionKey { get; set; }
        public bool AddSourceColumns { get; set; }
        public EDeltaType[] AuditColumns { get; set; }
    }
    
    public class DownloadTableDataModel: PreviewBase
    {
        public string ConnectionId { get; set; }
        public EDownloadFormat DownloadFormat { get; set; }
        public bool ZipFiles { get; set; }
        public DexihTable Table { get; set; }
        public InputColumn[] InputTableColumns { get; set; }
        public bool RejectedTable { get; set; }
    }

    public class DownloadDatalinkDataModel: PreviewBase
    {
        public string ConnectionId { get; set; }
        public EDownloadFormat DownloadFormat { get; set; }
        public bool ZipFiles { get; set; }
        public DexihDatalink Datalink { get; set; }
        public long DatalinkTransformKey { get; set; }
        public InputColumn[] InputTableColumns { get; set; }
    }

    public class DownloadDataModel: HubModelBase
    {
        public string ConnectionId { get; set; }
        public EDownloadFormat DownloadFormat { get; set; }
        public bool ZipFiles { get; set; }
        public DownloadObject[] DownloadObjects { get; set; }
        
    }
    
    
    public class RunDatalinks: HubModelBase
    {
        public string ConnectionId { get; set; }
        public long[] DatalinkKeys {get;set;}
        public bool TruncateTarget { get; set; }
        public bool ResetIncremental { get; set; }
        public string ResetIncrementalValue { get; set; }
        public InputColumn[] InputColumns { get; set; }
        public InputParameters InputParameters { get; set; }
    }

    public class RunDatalinkTests: HubModelBase
    {
        public string ConnectionId { get; set; }
        public long[] DatalinkTestKeys {get;set;}
    }
    
    public class RunDatajobs: HubModelBase
    {
        public string ConnectionId { get; set; }
        public long[] DatajobKeys {get;set;}
        public bool TruncateTarget { get; set; }
        public bool ResetIncremental { get; set; }
        public string ResetIncrementalValue { get; set; }
        public InputParameters InputParameters { get; set; }
    }

   
    public class ActivateDatajobs: HubModelBase
    {
        public string ConnectionId { get; set; }
        public long[] DatajobKeys {get;set;}
        public InputParameters InputParameters { get; set; }
    }

    public class ActivateApis: HubModelBase
    {
        public string ConnectionId { get; set; }
        public long[] ApiKeys {get;set;}
        public InputParameters InputParameters { get; set; }
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
