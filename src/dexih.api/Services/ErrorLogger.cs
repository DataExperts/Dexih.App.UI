using Microsoft.Extensions.Logging;
using OfficeOpenXml.FormulaParsing.Excel.Functions.Math;

namespace dexih.api.Services
{
    public class ErrorLogger
    {
        private readonly ILogger _logger;
        
        public ErrorLogger(ILoggerFactory loggerFactory)
        {
            _logger = loggerFactory.CreateLogger("ErrorLogger");
        }

        public void Log(string message, string details, string context, string url, string user)
        {
            var fullMessage = $"Message: {message}.\n" +
                              $"Url: {url}.\n" +
                              $"User: {user}.\n" +
                              $"Details: {details}.\n" +
                              $"Context: {context}.";
            
            _logger.LogError(fullMessage);
        }
    }
}