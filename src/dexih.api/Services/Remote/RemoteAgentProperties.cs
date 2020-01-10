using System.Runtime.Serialization;
using dexih.functions;


namespace dexih.api.Services.Remote
{
    [DataContract]
    public class RemoteAgentProperties
    {
        [DataMember(Order = 1)]
        public string Name { get; set; }

        [DataMember(Order = 2)]
        public string IpAddress { get; set; }

        [DataMember(Order = 3)]
        public string SecurityToken { get; set; }

        [DataMember(Order = 4)]
        public long RemoteAgentKey { get; set; }

        [DataMember(Order = 5)]
        public string EncryptionKey { get; set; }

        [DataMember(Order = 6)]
        public string UserId { get; set; }

        [DataMember(Order = 7)]
        public string ConnectionId { get; set; }
        
        [DataMember(Order = 8)]
        public NamingStandards NamingStandards { get; set; }
        
        [DataMember(Order = 9)]
        public DownloadUrl[] DownloadUrls { get; set; }
    }
}