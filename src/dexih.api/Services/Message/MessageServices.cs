using System;
using System.Collections.Concurrent;
using System.Threading;
using System.Threading.Tasks;
using dexih.api.Services.Operations;
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
            ILoggerFactory loggerFactory)
        {
            _logger = loggerFactory.CreateLogger("EmailMessages");
            SendGridApi = configuration.Config.SendGridApi;
        }

        private readonly ConcurrentQueue<EmailMessage> _emailMessages = new ConcurrentQueue<EmailMessage>();
        private bool _emailSpoolerRunning;

        /// <summary>
        /// Spooler sends all emails in the background.
        /// </summary>
        /// <returns></returns>
        private async Task EmailSpooler()
        {
            _emailSpoolerRunning = true;
            while (!_emailMessages.IsEmpty)
            {
                try
                {
                    _emailMessages.TryDequeue(out var emailMessage);

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

                        _logger.LogError(
                            $"{(i > 0 ? "Retry " + i : "")} There was an issue sending the email.  The following status code was returned: {response.StatusCode}");
                        await Task.Delay(5000, CancellationToken.None);
                    }
                }

                catch (Exception e)
                {
                    _logger.LogCritical(e,
                        $"There was an issue sending the email.  The following error was thrown {e.Message}");
                }
            }
            _emailSpoolerRunning = false;
        }

        public void SendEmail(string email, string subject, string body, string html = null)
        {
            _emailMessages.Enqueue(new EmailMessage()
            {
                Email =  email,
                Subject = subject,
                Body = body,
                Html = html
            });

            if (!_emailSpoolerRunning)
            {
                // don't await as we want this to run in the background.
#pragma warning disable 4014
                EmailSpooler();    
#pragma warning restore 4014
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
