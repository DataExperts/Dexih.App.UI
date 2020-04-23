using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;
using dexih.api.Services.Message;
using dexih.api.Services.Operations;
using Microsoft.Extensions.Logging;

namespace dexih.api.Services
{
    public class ErrorLogger
    {
        private readonly ILogger _logger;
        private readonly IEmailSender _emailSender;
        private readonly IDexihOperations _operations;
        
        public ErrorLogger(             
            IEmailSender emailSender,
            ILoggerFactory loggerFactory,
            IDexihOperations operations)
        {
            _logger = loggerFactory.CreateLogger("ErrorLogger");
            _emailSender = emailSender;
            _operations = operations;
        }

        public void Log(string message, string details, string context, string url, string user)
        {
            var fullMessage = $"Message: {message}.\n" +
                              $"Url: {url}.\n" +
                              $"User: {user}.\n" +
                              $"Details: {details}.\n" +
                              $"Context: {context}.";

            LogEvent(message);
        }

        public void LogEvent(Exception exception, string message, params object[] args)
        {
            _logger.LogError(exception, message, args);

            var msg = new StringBuilder(message);

            if (exception != null)
            {
                msg.AppendLine("<p></p>Exception Details: " + string.Join("\n", exception.GetType().GetProperties().Select(property => new
                {
                    Name = property.Name,
                    Value = property.GetValue(exception, null)
                }).Select(x => $"{(object) x.Name} = {(x.Value != null ? (object) x.Value.ToString() : (object) string.Empty)}")));
            }
            
            if (_operations.Config.EmailErrors)
            {
                var path = Path.Combine(Directory.GetCurrentDirectory(), "Resources", "EmailTemplates",
                    "supportEmail.html");
                var body = new StringBuilder(File.ReadAllText(path));
                body.Replace("{{message}}", msg.ToString());
                _emailSender.SendEmail(_operations.Config.SupportEmailAccount, "Support Event Logged", null,
                    body.ToString());
            }

        }
        
        public void LogEvent(string message, params object[] args)
        {
            LogEvent(null, message, args);
        }
    }
}