using dexih.repository;
using Microsoft.Extensions.Logging;

namespace dexih.api.Models
{
    public class RemoteAgentSettings
    {
        public enum EEnvironment
        {
            Windows,
            Osx,
            Linux
        }

        public bool EmbedUserName { get; set; }
        public EEnvironment Environment { get; set; }
        public LogLevel LogLevel { get; set; }
        
        public RemoteAgentSettingsSubset RemoteApplicationSettings { get; set; }
    }

    public class RemoteAgentSettingsSubset
    {
        public bool AllowAllHubs { get; set; }
        public bool AllowAllPaths { get; set; }
        public bool AllowDownload { get; set; }
        public int[] AllowedHubs { get; set; }
        public string[] AllowedPaths { get; set; }
        public bool AllowExternalAccess { get; set; }
        public bool AllowLanAccess { get; set; }
        public bool AllowLocalFiles { get; set; }
        public bool AllowProxy { get; set; }
        public bool AllowUpload { get; set; }
        public bool AutoGenerateCertificate { get; set; }
        public bool AutoSchedule { get; set; }
        public bool AutoUpgrade { get; set; }
        public int DownloadPort { get; set; }
        public bool EnableUPnP { get; set; }
        public string EncryptionKey { get; set; }
        public bool EnforceHttps { get; set; }
        public string ExternalDownloadUrl { get; set; }
        public bool FirstRun { get; set; }
        public string Name { get; set; }
        public bool PreRelease { get; set; }
        public string RemoteAgentId { get; set; }
        public string User { get; set; }
        public string UserToken { get; set; }
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
        public string RemoteAgentInstanceId { get; set; }
        public DexihRemoteAgentHub Value { get; set; }
    }

    public class RemoteAgentDelete
    {
        public long HubKey { get; set; } 
        public long RemoteAgentHubKey { get; set; } 
    }

    public class GetRemoteAgentStatus
    {
        public long HubKey { get; set; } 
        public string InstanceId { get; set; } 
    }

    public class RemoteAgentStatusReturn
    {
        
    }


}
