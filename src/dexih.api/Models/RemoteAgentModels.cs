using System.ComponentModel;
using dexih.repository;
using MessagePack;
using Microsoft.Extensions.Logging;

namespace dexih.api.Models
{
    [MessagePackObject]
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

        [Key(0)]
        public bool EmbedUserName { get; set; }
        
        [Key(1)]
        public EEnvironment Environment { get; set; }
        
        [Key(2)]
        public LogLevel LogLevel { get; set; }
        [Key(3)]
        public RemoteAgentSettingsSubset RemoteApplicationSettings { get; set; }
    }

    [MessagePackObject]
    public class RemoteAgentSettingsSubset
    {
        [Key(0)]
        public long[] AllowedHubs { get; set; }
        
        [Key(1)]
        public string[] AllowedPaths { get; set; }

        [Key(2)] 
        public bool AllowAllHubs { get; set; } = true;
        
        [Key(3)]
        public bool AllowAllPaths { get; set; } = true;
        
        [Key(4)]
        public bool AllowDownload { get; set; } = true;
        
        [Key(5)]
        public bool AllowExternalAccess { get; set; } = true;
        
        [Key(6)]
        public bool AllowLanAccess { get; set; } = true;
        
        [Key(7)]
        public bool AllowLocalFiles { get; set; } = true;
        
        [Key(8)]
        public bool AllowProxy { get; set; } = true;
        
        [Key(9)]
        public bool AllowUpload { get; set; } = true;

        [Key(10)]
        public bool AutoGenerateCertificate { get; set; } = true;
        
        [Key(11)]
        public bool AutoSchedule { get; set; } = true;
        [Key(12)]
        public bool AutoUpgrade { get; set; } = true;

        [Key(13)] 
        public int DownloadPort { get; set; } = 33944;
        
        [Key(14)]
        public bool EnableUPnP { get; set; } = true;
        
        [Key(15)]
        public string EncryptionKey { get; set; }
        
        [Key(16)]
        public bool EnforceHttps { get; set; } = true;
        
        [Key(17)]
        public string ExternalDownloadUrl { get; set; }

        [Key(18)] 
        public bool FirstRun { get; set; } = false;
        
        [Key(19)]
        public string Name { get; set; } 
        
        [Key(20)]
        public bool PreRelease { get; set; }
        
        [Key(21)]
        public string RemoteAgentId { get; set; }

        [Key(22)]
        public string User { get; set; }
        
        [Key(23)]
        public string UserToken { get; set; }
        
        [Key(24)]
        public string WebServer { get; set; }
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
