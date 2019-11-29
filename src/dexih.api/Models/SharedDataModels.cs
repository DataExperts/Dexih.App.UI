using dexih.functions.Query;
using dexih.operations;
using dexih.repository;

namespace dexih.api.Models
{
    public class SharedDataIndex
    {
        public string SearchString { get; set; }
        public long[] HubKeys { get; set; }
        public int MaxResults { get; set; }
    }

    public class HubKeyOnly
    {
        public long HubKey { get; set; }
    }

    public class PreviewData : HubModelBase
    {
        public long ObjectKey { get; set; }
        public EDataObjectType ObjectType { get; set; }
        public SelectQuery SelectQuery { get; set; }
        public InputColumn[] InputColumns { get; set; }
        public InputParameters Parameters { get; set; }
    }

    public class PreviewLOV : HubModelBase
    {
        public long ObjectKey { get; set; }
        public EDataObjectType ObjectType { get; set; }
        public string ParameterName { get; set; }
    }
    
    public class PreviewSharedDashboard : HubModelBase
    {
        public long DashboardKey { get; set; }
        public InputParameters Parameters { get; set; }
    }

    public class PreviewSharedDashboardItem : HubModelBase
    {
        public long DashboardKey { get; set; }
        public long DashboardItemKey { get; set; }
        public InputParameters Parameters { get; set; }
    }

    public class DownloadSharedData : HubModelBase
    {
        public string ClientId { get; set; }
        public DownloadData.EDownloadFormat DownloadFormat { get; set; }
        public bool ZipFiles { get; set; }
        public SharedData[] SharedItems { get; set; }
    }
            
}