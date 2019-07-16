﻿using System;

namespace dexih.api.Controllers
{
	public class HubControllerException : Exception
	{
		public HubControllerException() : base()
		{
		}
		public HubControllerException(string message) : base(message)
		{
		}
		public HubControllerException(string message, Exception innerException) : base(message, innerException)
		{
		}
	}
    
}
