﻿using System;

namespace dexih.api.Controllers
{
	public class AccountControllerException : Exception
	{
		public AccountControllerException() : base()
		{
		}
		public AccountControllerException(string message) : base(message)
		{
		}
		public AccountControllerException(string message, Exception innerException) : base(message, innerException)
		{
		}
	}
    
}
