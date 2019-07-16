using System;

namespace dexih.api.Services.Remote.Exceptions
{
    public class SocketRemoteAgentException : Exception
    {
        public SocketRemoteAgentException(string message): base(message)
        {

        }

        public SocketRemoteAgentException(string message, Exception innerException): base(message, innerException)
        {

        }
    }
}
