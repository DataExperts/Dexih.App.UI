using Microsoft.AspNetCore.Http;

namespace dexih.api.Extensions
{
    public static class extensions
    {
        public static string BaseUrl(this HttpRequest request)
        {
            return (request.IsHttps ? "https://" : "http://") + request.Host.ToUriComponent();
        }
    }
}