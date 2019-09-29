using System.Collections.Generic;
using dexih.operations;
using dexih.remote.operations;
using Dexih.Utils.ManagedTasks;
using MessagePack;

namespace dexih.api.Models
{
    [MessagePackObject]
    public class DatalinkProgress
    {
        [Key(0)]
        public string InstanceId { get; set; }

        [Key(2)]
        public string SecurityToken { get; set; }
        
        [Key(3)]
        public EMessageCommand Command { get; set; }
        
        [Key(4)]
        public IEnumerable<ManagedTask> Results { get; set; } 
    }
    
    public class PostApiStatus
    {
        public string SecurityToken { get; set; }
        public IEnumerable<ApiData> ApiData { get; set; } 
        
    }
    
    public class PostApiQuery
    {
        public string SecurityToken { get; set; }
        public IEnumerable<ApiQuery> ApiQueries { get; set; } 

    }
    
//    public class DownloadReadyModel
//    {
//        public long HubKey { get; set; }
//        public string InstanceId { get; set; }
//        public string SecurityToken { get; set; }
//        public string ConnectionId { get; set; }
//        public string Reference { get; set; }
//        public string Url { get; set; }
//    }
    
//    public class FlatFilesReadyModel
//    {
//        public long HubKey { get; set; }
//        public string InstanceId { get; set; }
//        public string SecurityToken { get; set; }
//        public string ConnectionId { get; set; }
//        public string Reference { get; set; }
//        public DexihTable[] tables { get; set; }
//    }
    
    public class GenerateCertificateModel
    {
        public string domain { get; set; }
        public string password { get; set; }
    }
}