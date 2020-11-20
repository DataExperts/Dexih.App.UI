using System;
using dexih.operations;

namespace dexih.api.Services.Remote.Exceptions
{
	public class RemoteAgentException : Exception
	{
		
		public RemoteAgentException(string message) : base(message)
		{
		}

		public RemoteAgentException(string message, Exception innerException) : base(message, innerException)
		{
		}

        public RemoteAgentException(string message, string details) : base(message, new Exception(details))
        {
        }

    }

    public class RemoteAgentAddException : RemoteAgentException
	{
		public RemoteAgentAddException(string message, Exception innerException) : base(message, innerException)
		{
		}

	}

//	public class RemoteAgentDisconnectException : RemoteAgentException
//	{
//		public RemoteAgent RemoteAgent { get; set; }
//
//		public RemoteAgentDisconnectException(string message, Exception innerException, RemoteAgent remoteAgent) : base(message, innerException)
//		{
//			RemoteAgent = remoteAgent;
//		}
//
//	}

	public class RemoteAgentBroadcastMessageException : RemoteAgentException
	{
		public object Content { get; set; }

        public RemoteAgentBroadcastMessageException(string message) : base(message)
        {
        }
        public RemoteAgentBroadcastMessageException(string message, Exception innerException, object content) : base(message, innerException)
		{
			Content = content;
		}
	}

	//public class RemoteAgentRemoveBrowserException : RemoteAgentException
	//{
	//	public SocketBrowser Browser { get; set; }

	//	public RemoteAgentRemoveBrowserException(string message, Exception innerException, SocketBrowser browser) : base(message, innerException)
	//	{
	//		Browser = browser;
	//	}
	//}

	public class RemoteAgentGetRemoteAgentsException : RemoteAgentException
	{
		public long HubKey { get; set; }

		public RemoteAgentGetRemoteAgentsException(string message, Exception innerException, long hubKey) : base(message, innerException)
		{
			HubKey = hubKey;
		}

	}
	
	public class RemoteAgentUpdateHubException : RemoteAgentException
	{
		public long HubKey { get; }
		public string UserId { get; }
		public string ConnectionId { get; }

		public RemoteAgentUpdateHubException(string message, Exception innerException, string userId, string connectionId, long hubKey) : base(message, innerException)
		{
			HubKey = hubKey;
			UserId = userId;
			ConnectionId = connectionId;
		}

	}

	public class RemoteAgentGetRemoteAgentException : RemoteAgentException
	{
		public string Id { get; set; }
		public long HubKey { get; set; }

		public RemoteAgentGetRemoteAgentException(string message, Exception innerException, string id, long hubKey) : base(message, innerException)
		{
			HubKey = hubKey;
			Id = id;
		}

	}

	public class RemoteAgentGetHubReaderRemoteAgentException : RemoteAgentException
	{
		public long HubKey { get; set; }

		public RemoteAgentGetHubReaderRemoteAgentException(string message, Exception innerException, long hubKey) : base(message, innerException)
		{
			HubKey = hubKey;
		}

	}

	public class RemoteAgentSendException : RemoteAgentException
	{
		public RemoteMessage RemoteMessage { get; set; }

		public RemoteAgentSendException(string message, Exception innerException, RemoteMessage remoteMessage) : base(message, innerException)
		{
			RemoteMessage = remoteMessage;
		}

	}
}
