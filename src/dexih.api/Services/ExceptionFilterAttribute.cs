using Dexih.Utils.MessageHelpers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Logging;

namespace dexih.api.Services
{
    public class ApiExceptionFilter : ExceptionFilterAttribute
    {
        public override void OnException(ExceptionContext context)
        {
            // Unhandled errors
            var msg = context.Exception.Message;
#if !DEBUG
            var returnValue = new ReturnValue(false, msg, null);
#else
            
            var returnValue = new ReturnValue(false, msg, context.Exception);
#endif

            var errorLogger = (ErrorLogger)context.HttpContext.RequestServices.GetService(typeof(ErrorLogger));
            var message = $"There was an error at {context.ActionDescriptor.DisplayName}.  {returnValue.Message} ";
            errorLogger.LogEvent(context.Exception, message);
            
            // always return a JSON result
            context.HttpContext.Response.ContentType = "application/json";
            context.HttpContext.Response.StatusCode = 400;
            context.Result = new JsonResult(returnValue);

            base.OnException(context);
        }
    }
}