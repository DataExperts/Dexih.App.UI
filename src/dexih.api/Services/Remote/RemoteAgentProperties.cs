namespace dexih.api.Services.Remote
{
    public class RemoteAgentProperties
    {
        public string Name { get; set; }
        public string IpAddress { get; set; }
        public string SecurityToken { get; set; }
        public long RemoteAgentKey { get; set; }
        public string EncryptionKey { get; set; }
        public string UserId { get; set; }
        
        public string ConnectionId { get; set; }
    }
}