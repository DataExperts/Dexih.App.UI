//using System.Collections.Concurrent;
//using System.Collections.Generic;
//using System.Linq;
//
//namespace dexih.api.Services
//{
//    public class DexihOperationsConfig
//    {
//        public DexihOperationsConfig(ApplicationSettings applicationSettings)
//        {
//            SystemEncryptionKey = encryptionKey;
//            InviteOnly = inviteOnly;
//            InviteQuota = inviteQuota;
//            HubQuota = hubQuota;
//            MicrosoftClientId = microsoftClientId;
//            MicrosoftClientSecret = microsoftClientSecret;
//            GoogleClientId = googleClientId;
//            GoogleClientSecret = googleClientSecret;
//            DefaultProxyUrl = defaultProxyUrl;
//            LetsEncryptAccount = letsEncryptAccount;
//            SupportEmailAccount = supportEmailAccount;
//            
//            _txtRecords = new ConcurrentDictionary<string, string>();
//        }
//
//        public string SystemEncryptionKey { get; }
//        public bool InviteOnly { get; }
//        public int InviteQuota { get; }
//        public int HubQuota { get; }
//
//        public string GoogleClientId { get; set; }
//        public string GoogleClientSecret { get; set; }
//        public string MicrosoftClientId { get; set; }
//        public string MicrosoftClientSecret { get; set; }
//        
//        public string DefaultProxyUrl { get; set; }
//        public string LetsEncryptAccount { get; set; }
//        public string SupportEmailAccount { get; set; }
//
//        /// <summary>
//        /// Used by the DNS server to retrieve txtRecords for DNS verification (with Let's Encrypt).
//        /// </summary>
//        private readonly ConcurrentDictionary<string, string> _txtRecords;
//
//        public bool AddTxtRecord(string key, string value)
//        {
//            return _txtRecords.TryAdd(key, value);
//        }
//
//        public bool RemoveTxtRecord(string key)
//        {
//            return _txtRecords.TryRemove(key, out _);
//        }
//
//        public IEnumerable<KeyValuePair<string, string>> GetTextRecords()
//        {
//            return _txtRecords.AsEnumerable();
//        }
//    }
//}