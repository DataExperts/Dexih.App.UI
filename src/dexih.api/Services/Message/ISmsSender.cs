using System.Threading.Tasks;

namespace dexih.api.Services.Message
{
    public interface ISmsSender
    {
        Task SendSmsAsync(string number, string message);
    }
}
