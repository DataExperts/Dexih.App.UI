using System.Collections.Generic;
using dexih.repository;

namespace dexih.api.Services.Message
{
    public interface IEmailSender
    {
        void SendEmail(string email, string subject, string message, string html);

        void SendEmailTemplate(string templateName, string subject, Dictionary<string, string> parameters,
            ICollection<ApplicationUser> users);
    }
}
