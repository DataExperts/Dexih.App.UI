using System;
using System.Linq;
using System.Threading.Tasks;
using dexih.api.Services.Operations;
using dexih.repository;
using Dexih.Utils.MessageHelpers;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.Extensions.Logging;

namespace dexih.api.Services
{
    internal class ValidateHubAttribute : ActionFilterAttribute
    {
        private readonly DexihHubUser.EPermission _minimumPermission;

        public ValidateHubAttribute(DexihHubUser.EPermission minimumPermission)
        {
            _minimumPermission = minimumPermission;
        }

        //public override void OnActionExecuted(ActionExecutedContext context)
        //{
        //    if (context.Exception != null)
        //    {
        //        var result = new ReturnValue(false, "An unknown error was encountered in " + context.Controller + ", message:" + context.Exception.Message, context.Exception);
        //        context.Result = new JsonResult(result);
        //        return;
        //    }
        //}

        public override async Task OnActionExecutionAsync(ActionExecutingContext context, ActionExecutionDelegate next)
        {
            var controllerName = context.Controller.GetType().Name;

            DexihHubUser.EPermission hubPermission;
            var operations = (IDexihOperations)context.HttpContext.RequestServices.GetService(typeof(IDexihOperations));
            var repositoryManager = operations.RepositoryManager;
            var applicationUser = await repositoryManager.GetUser(context.HttpContext.User);
            var loggerFactory = (ILoggerFactory)context.HttpContext.RequestServices.GetService(typeof(ILoggerFactory));
            var logger = loggerFactory.CreateLogger(controllerName);

            var argument = context.ActionArguments.First().Value;

            if (argument != null)
            {
                var argumentType = argument.GetType();
                var hubKeyParameter = argumentType.GetProperty("HubKey");
                var hubKey = (long)hubKeyParameter.GetValue(argument);

                if (applicationUser != null)
                {
                    try
                    {
                        hubPermission = await repositoryManager.ValidateHub(applicationUser, hubKey);
                        logger.LogInformation(LoggingEvents.HubOnaction,
                            controllerName + ": Hub accessed. HubKey: {HubKey}, User: {user}, Permission Level:{permission}, Action: {Action}.",
                            hubKey, applicationUser.UserName, hubPermission, context.ActionDescriptor.DisplayName);
                    }
                    catch (Exception ex)
                    {
                        hubPermission = DexihHubUser.EPermission.None;
                        logger.LogWarning(LoggingEvents.HubOnaction,
                            controllerName + ": Hub can not be accessed. HubKey: {HubKey}, User: {user}, Action: {Action}.  Error: {Error}", hubKey,
                            applicationUser.UserName, context.ActionDescriptor.DisplayName, ex.Message);
                    }
                }
                else
                {
                    hubPermission = DexihHubUser.EPermission.None;
                }
            }
            else
            {
                hubPermission = DexihHubUser.EPermission.None;
                var result = new ReturnValue(false, "No hub has been specified, please select a hub from the menu or contact support for assistance.", null);
                context.Result = new JsonResult(result);
            }

            if (hubPermission > _minimumPermission)
            {
                var result = new ReturnValue(false, "The current user does not have the necessary permissions to access this resource", null);
                context.Result = new JsonResult(result);
            }
            
            context.Controller.GetType().GetProperty("HubPermission").SetValue(context.Controller, hubPermission);

            await base.OnActionExecutionAsync(context, next);
        }

     }
}