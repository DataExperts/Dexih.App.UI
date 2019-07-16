using System;

namespace dexih.api.Services.Remote.Exceptions
{
    public class SocketBrowserException : Exception
    {
        public SocketBrowserException(string message) : base(message)
        {

        }

        public SocketBrowserException(string message, Exception innerException) : base(message, innerException)
        {

        }
    }
}
