using Dexih.Utils.MessageHelpers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace dexih.api.Services
{
    public class ApiFilterAttribute : ActionFilterAttribute
    {

        public override Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
        {
            var controllerName = context.Controller.GetType().Name;
            var loggerFactory = (ILoggerFactory)context.HttpContext.RequestServices.GetService(typeof(ILoggerFactory));
            var _logger = loggerFactory.CreateLogger(controllerName);

            try
            {
                _logger.LogTrace(LoggingEvents.HubOnaction, controllerName + " started {action},  ", context.ActionDescriptor.DisplayName);

                if (!context.ModelState.IsValid)
                {
                    var message = $"{controllerName}: There was an issue calling the API {context.ActionDescriptor.DisplayName}. ";
                    var exceptions = new List<Exception>();

                    foreach (var modelState in context.ModelState.Values)
                    {
                        foreach (var error in modelState.Errors)
                        {
                            message += error.ErrorMessage;
                            if (error.Exception != null)
                            {
                                exceptions.Add(error.Exception);
                            }
                        }
                    }

                    var exception = new AggregateException(message, exceptions);
                    _logger.LogWarning(LoggingEvents.HubOnaction, exception, message);
                    var result = new ReturnValue(false, message, exception);
                    context.Result = new JsonResult(result);
                    context.HttpContext.Response.StatusCode = 400;
                    return Task.CompletedTask;
                }
                else
                {
                    return base.OnActionExecutionAsync(context, next);
                }
            }
            catch (Exception ex)
            {
                var message = $"{controllerName}: An unknown error was encountered in {context.Controller} calling {context.ActionDescriptor.DisplayName}, message: {ex.Message}";
                _logger.LogError(LoggingEvents.HubOnaction, ex, message);
                var result = new ReturnValue(false, message, ex);
                context.Result = new JsonResult(result);
                context.HttpContext.Response.StatusCode = 400;
                return Task.CompletedTask;
            }
        }

//        public override void OnActionExecuted(ActionExecutedContext context)
//        {
//            if (context.Exception == null)
//            {
//                if (context.Result == null || context.Result is EmptyResult)
//                {
//                    context.Result = new JsonResult(new { Success = true });
//                }
//                else
//                {
//                    if (context.Result is ObjectResult result)
//                    {
//                        context.Result = new JsonResult(new { Success = true, result.Value });
//                    }
//
//                }
//                base.OnActionExecuted(context);
//            }
//            else
//            {
//                context.HttpContext.Response.StatusCode = 400;
//                base.OnActionExecuted(context);
//            }
//        }

    }
}