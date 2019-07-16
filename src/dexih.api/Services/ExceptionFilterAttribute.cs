using Dexih.Utils.MessageHelpers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;

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

            // always return a JSON result
            context.Result = new JsonResult(returnValue);

            base.OnException(context);
        }
    }
}