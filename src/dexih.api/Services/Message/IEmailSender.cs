namespace dexih.api.Services.Message
{
    public interface IEmailSender
    {
        void SendEmail(string email, string subject, string message, string html);
    }
}
