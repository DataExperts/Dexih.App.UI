﻿using System;
using System.Collections.Generic;
using System.Net.Http;
using System.Runtime.InteropServices;
using System.Threading.Tasks;
using Newtonsoft.Json.Linq;

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
            // limit the api calls to the github api to 10 minute to avoid rate limits
            if (DateTime.Now > _lastApiCall.AddMinutes(10))
            {
                using (var httpClient = new HttpClient())
                {
                    httpClient.DefaultRequestHeaders.Add("User-Agent", "Dexih Remote Agent");
                    var response =
                        await httpClient.GetAsync(
                            "https://api.github.com/repos/DataExperts/Dexih.App.Remote/releases");
                    var responseText = await response.Content.ReadAsStringAsync();
                    var releases = JArray.Parse(responseText);

                    UpdateRemoteVersionInfo(releases[0], true);

                    foreach (var release in releases)
                    {
                        if (!(bool) release["prerelease"])
                        {
                            UpdateRemoteVersionInfo(release, false);
                            break;
                        }
                    }
                    
                    _lastApiCall = DateTime.Now;
                }
            }

            return _latestVersions[(os, preRelease)];
        }
        
        private void UpdateRemoteVersionInfo(JToken version, bool preRelease)
        {
            var versionString = (string) version["tag_name"];

            foreach (var asset in version["assets"])
            {
                var name = ((string) asset["name"]).ToLower();
                var url =(string) asset["browser_download_url"];

                var versionInfo = new VersionInfo() {Version = versionString, Url = url, FileName = name};
                
                if (name.Contains("windows"))
                {
                    _latestVersions[("windows", preRelease)] = versionInfo;
                } 
                else if (name.Contains("osx"))
                {
                    _latestVersions[("osx", preRelease)] = versionInfo;
                }
                else if (name.Contains("linux"))
                {
                    _latestVersions[("linux", preRelease)] = versionInfo;
                }
                else if (name.Contains("alpine"))
                {
                    _latestVersions[("alpine", preRelease)] = versionInfo;
                }
            }
        }
}

public class VersionInfo {
    public string Version { get; set; }
    public string Url { get; set; }
    public string FileName { get; set; }
}
}