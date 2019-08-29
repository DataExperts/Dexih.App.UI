using System.Collections.Generic;
using dexih.operations;
using dexih.remote.Operations.Services;
using dexih.repository;
using Dexih.Utils.ManagedTasks;

namespace dexih.api.Models
{
    public class DatalinkProgress
    {
        public string InstanceId { get; set; }
        public string SecurityToken { get; set; }
        public string Command { get; set; }
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
    
    public class DownloadReadyModel
    {
        public long HubKey { get; set; }
        public string InstanceId { get; set; }
        public string SecurityToken { get; set; }
        public string ConnectionId { get; set; }
        public string Reference { get; set; }
        public string Url { get; set; }
    }
    
    public class FlatFilesReadyModel
    {
        public long HubKey { get; set; }
        public string InstanceId { get; set; }
        public string SecurityToken { get; set; }
        public string ConnectionId { get; set; }
        public string Reference { get; set; }
        public DexihTable[] tables { get; set; }
    }
    
    public class GenerateCertificateModel
    {
        public string domain { get; set; }
        public string password { get; set; }
    }
}