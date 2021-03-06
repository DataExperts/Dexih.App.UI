﻿using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using dexih.api.Services.BackgroundTasks;
using dexih.api.Services.Operations;
using dexih.repository;
using Microsoft.Extensions.Logging;
using SendGrid;
using SendGrid.Helpers.Mail;

namespace dexih.api.Services.Message
{
    // This class is used by the application to send Email and SMS
    // when you turn on two-factor authentication in ASP.NET Identity.
    // For more details see this link http://go.microsoft.com/fwlink/?LinkID=532713
    public class AuthMessageSender : IEmailSender, ISmsSender
    {
        private string SendGridApi { get; set; }

        private readonly ILogger _logger;

        public AuthMessageSender(
            IDexihOperations configuration,
            IBackgroundTaskQueue backgroundTaskQueue,
            ILoggerFactory loggerFactory)
        {
            _logger = loggerFactory.CreateLogger("EmailMessages");
            _backgroundTaskQueue = backgroundTaskQueue;
            SendGridApi = configuration.Config.SendGridApi;
        }

        private readonly IBackgroundTaskQueue _backgroundTaskQueue;
        
        public void SendEmail(string email, string subject, string body, string html = null)
        {
            var emailMessage = new EmailMessage()
            {
                Email =  email,
                Subject = subject,
                Body = body,
                Html = html
            };

            _backgroundTaskQueue.QueueBackgroundWorkItem( async token =>
            {
                //send a confirm email
                var client = new SendGridClient(SendGridApi);
                var from = new EmailAddress("support@dataexpertsgroup.com", "Data Experts Support");
                var to = new EmailAddress(emailMessage.Email);
                var msg = MailHelper.CreateSingleEmail(from, to, emailMessage.Subject, emailMessage.Body, emailMessage.Html);

                for (var i = 0; i < 3; i++)
                {
                    var response = await client.SendEmailAsync(msg, CancellationToken.None);

                    if (response.StatusCode == System.Net.HttpStatusCode.Accepted ||
                        response.StatusCode == System.Net.HttpStatusCode.OK)
                    {
                        break;
                    }

                    _logger.LogError($"{(i > 0 ? "Retry " + i : "")} There was an issue sending the email.  The following status code was returned: {response.StatusCode}");
                    await Task.Delay(5000, CancellationToken.None);
                }
            });
        }
        
        public void SendEmailTemplate(string templateName, string subject, Dictionary<string, string> parameters, ICollection<ApplicationUser> users)
        {
            var path = Path.Combine(Directory.GetCurrentDirectory(), "Resources", "EmailTemplates", "template.html");
            var template = new StringBuilder(File.ReadAllText(path));

            path = Path.Combine(Directory.GetCurrentDirectory(), "Resources", "EmailTemplates", templateName);
            var body = new StringBuilder(File.ReadAllText(path));
		    
            template.Replace("{{title}}", subject);
            template.Replace("{{body}}", body.ToString());

            foreach (var user in users)
            {
                var final = new StringBuilder(template.ToString());

                if (parameters != null)
                {
                    foreach (var parameter in parameters)
                    {
                        final.Replace("{{" + parameter.Key + "}}", parameter.Value);
                    }
                }
                
                final.Replace("{{name}}", user.FirstName);
                final.Replace("{{user}}", user.UserName);
                final.Replace("{{email}}", user.Email);

                SendEmail(user.Email, subject, null, final.ToString());
            }
        }
        
        //TODO  Waiting for .net core support for sending SMS.
        public Task SendSmsAsync(string number, string message)
        {
            //var twilio = new TwilioRestClient("user", "pass");

            //var result = twilio.SendMessage(TwilioSettings.PhoneNumber, message.Destination, message.Body);

            //Trace.TraceInformation(result.Status);

            //// Twilio doesn't currently have an async API, so we return success.
            return Task.FromResult(0);
        }
        
        
    }


}
