using System;
using System.Runtime.Serialization;
using dexih.repository;
using MessagePack;

namespace dexih.api.Services.Remote
{
    [MessagePackObject]
    public class RemoteAgentProperties
    {
        [Key(1)]
        public string Name { get; set; }

        [Key(2)]
        public string IpAddress { get; set; }

        [Key(3)]
        public string SecurityToken { get; set; }

        [Key(4)]
        public long RemoteAgentKey { get; set; }

        [Key(5)]
        public string EncryptionKey { get; set; }

        [Key(6)]
        public string UserId { get; set; }

        [Key(7)]
        public string ConnectionId { get; set; }
        
        [Key(8)]
        public NamingStandards NamingStandards { get; set; }
    }
}