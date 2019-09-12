using System;
using System.Runtime.Serialization;
using ProtoBuf;

namespace dexih.api.Services.Remote
{
    [ProtoContract]
    public class RemoteAgentProperties
    {
        [ProtoMember(1)]
        public string Name { get; set; }

        [ProtoMember(2)]
        public string IpAddress { get; set; }

        [ProtoMember(3)]
        public string SecurityToken { get; set; }

        [ProtoMember(4)]
        public long RemoteAgentKey { get; set; }

        [ProtoMember(5)]
        public string EncryptionKey { get; set; }

        [ProtoMember(6)]
        public string UserId { get; set; }

        [ProtoMember(7)]
        public string ConnectionId { get; set; }
    }
}