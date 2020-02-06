using System.ComponentModel;
using System.Runtime.Serialization;
using dexih.repository;

using Microsoft.Extensions.Logging;

namespace dexih.api.Models
{
    [DataContract]
    public class RemoteAgentSettings
    {
        public enum EEnvironment
        {
            [Description("Windows 7/8/8.1/10")]
            Windows = 1,
            
            [Description("Mac OSX")]
            Osx,
            
            [Description("Linux")]
            Linux
        }

        [DataMember(Order = 0)]
        public bool EmbedUserName { get; set; }
        
        [DataMember(Order = 1)]
        public EEnvironment Environment { get; set; }
        
        [DataMember(Order = 2)]
        public LogLevel LogLevel { get; set; }
        [DataMember(Order = 3)]
        public RemoteAgentSettingsSubset RemoteApplicationSettings { get; set; }
    }

    [DataContract]
    public class RemoteAgentSettingsSubset
    {
        [DataMember(Order = 0)]
        public long[] AllowedHubs { get; set; }
        
        [DataMember(Order = 1)]
        public string[] AllowedPaths { get; set; }

        [DataMember(Order = 2)] 
        public bool AllowAllHubs { get; set; } = true;
        
        [DataMember(Order = 3)]
        public bool AllowAllPaths { get; set; } = true;
        
        [DataMember(Order = 4)]
        public bool AllowDownload { get; set; } = true;
        
        [DataMember(Order = 5)]
        public bool AllowExternalAccess { get; set; } = true;
        
        [DataMember(Order = 6)]
        public bool AllowLanAccess { get; set; } = true;
        
        [DataMember(Order = 7)]
        public bool AllowLocalFiles { get; set; } = true;
        
        [DataMember(Order = 8)]
        public bool AllowProxy { get; set; } = true;
        
        [DataMember(Order = 9)]
        public bool AllowUpload { get; set; } = true;

        [DataMember(Order = 10)]
        public bool AutoGenerateCertificate { get; set; } = true;
        
        [DataMember(Order = 11)]
        public bool AutoSchedule { get; set; } = true;
        [DataMember(Order = 12)]
        public bool AutoUpgrade { get; set; } = true;

        [DataMember(Order = 13)] 
        public int DownloadPort { get; set; } = 33944;
        
        [DataMember(Order = 14)]
        public bool EnableUPnP { get; set; } = true;
        
        [DataMember(Order = 15)]
        public string EncryptionKey { get; set; }
        
        [DataMember(Order = 16)]
        public bool EnforceHttps { get; set; } = true;
        
        [DataMember(Order = 17)]
        public string ExternalDownloadUrl { get; set; }

        [DataMember(Order = 18)] 
        public bool FirstRun { get; set; } = false;
        
        [DataMember(Order = 19)]
        public string Name { get; set; } 
        
        [DataMember(Order = 20)]
        public bool PreRelease { get; set; }
        
        [DataMember(Order = 21)]
        public string RemoteAgentId { get; set; }

        [DataMember(Order = 22)]
        public string User { get; set; }
        
        [DataMember(Order = 23)]
        public string UserToken { get; set; }
        
        [DataMember(Order = 24)]
        public string WebServer { get; set; }
        
        [DataMember(Order = 25)]
        public bool MLNet { get; set; } = false;

        [DataMember(Order = 26)]
        public bool Excel { get; set; } = false;

        [DataMember(Order = 27)]
        public bool Oracle { get; set; } = false;

        [DataMember(Order = 28)]
        public bool DB2 { get; set; } = false;

        [DataMember(Order = 29)]
        public bool Mongo { get; set; } = false;
    }

    public class RemoteAgentAuthorizationToken
    {
        public string RemoteAgentId { get; set; }
        public string Token { get; set; }
    }

    public class RemoteAgentUpdate
    {
        public long HubKey { get; set; }
        public DexihRemoteAgentHub Value { get; set; }
    }

    public class RemoteAgentDelete
    {
        public long HubKey { get; set; } 
        public long RemoteAgentHubKey { get; set; } 
    }

}
