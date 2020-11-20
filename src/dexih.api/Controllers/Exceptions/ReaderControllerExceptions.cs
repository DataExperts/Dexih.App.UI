﻿using System;

namespace dexih.api.Controllers
{
	public class ReaderControllerException : Exception
	{
		public ReaderControllerException(string message) : base(message)
		{
		}
		public ReaderControllerException(string message, Exception innerException) : base(message, innerException)
		{
		}
	}
    
}
