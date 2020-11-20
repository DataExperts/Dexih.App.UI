﻿using System;

namespace dexih.api.Controllers
{
	public class AdminControllerException : Exception
	{
		public AdminControllerException(string message) : base(message)
		{
		}
		public AdminControllerException(string message, Exception innerException) : base(message, innerException)
		{
		}
	}
    
}
