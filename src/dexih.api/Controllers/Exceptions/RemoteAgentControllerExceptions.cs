﻿using System;

namespace dexih.api.Controllers
{
	public class RemoteAgentControllerException : Exception
	{
		public RemoteAgentControllerException() : base()
		{
		}
		public RemoteAgentControllerException(string message) : base(message)
		{
		}
		public RemoteAgentControllerException(string message, Exception innerException) : base(message, innerException)
		{
		}
	}
    
}
