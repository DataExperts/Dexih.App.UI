using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;


namespace dexih.api.Services.Operations
{

    /// <summary>
    /// Class mapping of the AppSettings file used for the RemoteAgent settings.
    /// </summary>
    public class ApplicationSettings
    {
        public string RepositoryType { get; set; }
        public string RepositoryDatabase { get; set; }
        public string AzureStorageConnectionString { get; set; }
        
        public string ExceptionsDirectory { get; set; }

        public string GoogleClientId { get; set; }
        public string GoogleClientSecret { get; set; }
        public string MicrosoftClientId { get; set; }
        public string MicrosoftClientSecret { get; set; }
        
        public string RedisCacheConnectionString { get; set; }

        public string EncryptionKey { get; set; }
        public string SendGridApi { get; set; }
            
        public bool InviteOnly { get; set; }
        public int DefaultInvites { get; set; }
        public int HubQuota { get; set; }

        public string DefaultProxyUrl { get; set; }
        public string LetsEncryptAccount { get; set; }
        public string SupportEmailAccount { get; set; }
        
        public string SignalRConnectionString { get; set; }
        
        public string GoogleMapsAPIKey { get; set; }

        public bool CreateRepository { get; set; } = false;

        public bool UseResponseCompression { get; set; } = true;

        private DateTime _lastApiCall = DateTime.MinValue;
        private Dictionary<(string os, bool preRelease), VersionInfo> _latestVersions = new Dictionary<(string, bool), VersionInfo>();
        
        
        public async Task<VersionInfo> RemoteAgentVersion(string os, bool preRelease)
        {
            await RefreshRemoteAgentVersions();
            
            return _latestVersions[(os, preRelease)];
        }

        private async Task RefreshRemoteAgentVersions()
        {
            // limit the api calls to the github api to 10 minute to avoid rate limits
            if (DateTime.Now > _lastApiCall.AddMinutes(10))
            {
                using (var httpClient = new HttpClient())
                {
                    httpClient.DefaultRequestHeaders.Add("User-Agent", "Dexih Remote Agent");
                    var response =
                        await httpClient.GetAsync(
                            "https://api.github.com/repos/DataExperts/Dexih.App.Remote/releases");
                    var releases = await JsonDocument.ParseAsync(await response.Content.ReadAsStreamAsync());

                    UpdateRemoteVersionInfo(releases.RootElement[0], true);

                    foreach (var release in releases.RootElement.EnumerateArray())
                    {
                        if (!release.GetProperty("prerelease").GetBoolean())
                        {
                            UpdateRemoteVersionInfo(release, false);
                            break;
                        }
                    }
                    
                    _lastApiCall = DateTime.Now;
                }
            }
           
        }
        
        private void UpdateRemoteVersionInfo(JsonElement version, bool preRelease)
        {
            var versionString = version.GetProperty("tag_name").GetString();

            foreach (var asset in version.GetProperty("assets").EnumerateArray())
            {
                var name = asset.GetProperty("name").GetString().ToLower();
                var url =asset.GetProperty("browser_download_url").GetString();

                var versionInfo = new VersionInfo() {Version = versionString, Url = url, FileName = name};
                
                if (name.Contains("windows"))
                {
                    versionInfo.OS = "windows";
                    _latestVersions[("windows", preRelease)] = versionInfo;
                } 
                else if (name.Contains("osx"))
                {
                    versionInfo.OS = "osx";
                    _latestVersions[("osx", preRelease)] = versionInfo;
                }
                else if (name.Contains("linux"))
                {
                    versionInfo.OS = "linux";
                    _latestVersions[("linux", preRelease)] = versionInfo;
                }
                else if (name.Contains("alpine"))
                {
                    versionInfo.OS = "alpine";
                    _latestVersions[("alpine", preRelease)] = versionInfo;
                }
            }
        }

        public async Task<IEnumerable<VersionInfo>> RemoteAgentVersions(bool preRelease)
        {
            await RefreshRemoteAgentVersions();

            var versionInfo = new List<VersionInfo>();

            foreach (var key in _latestVersions.Keys)
            {
                if (key.preRelease == preRelease)
                {
                    versionInfo.Add(_latestVersions[key]);
                }
            }

            return versionInfo;
        }
}

public class VersionInfo {
    public string Version { get; set; }
    public string OS { get; set; }
    public string Url { get; set; }
    public string FileName { get; set; }
}
}