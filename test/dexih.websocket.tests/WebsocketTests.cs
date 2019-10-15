using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using dexih.functions;
using Dexih.Utils.MessageHelpers;

using Xunit;

namespace dexih.websocket.tests
{
    public class WebSocketTests
    {
        private const string Url = "http://localhost:5000/api/";

        [Fact]
        public async Task WebSocketEchoTests()
        {
            var cookies = new CookieContainer();
            var handler = new HttpClientHandler
            {
                CookieContainer = cookies
            };
            
            //Login to the web server to receive an authenicated cookie.
            using (var httpClient = new HttpClient(handler))
            {
                httpClient.DefaultRequestHeaders.Add("Accept", "application/json");

                var content = new StringContent("{\"Email\":\"admin@dataexpertsgroup.com\",\"Password\":\"dexIH-1\"}", Encoding.UTF8, "application/json");
                var response = await httpClient.PostAsync(Url + "Account/Login", content);
                var result = await response.Content.ReadAsStringAsync();
                Assert.False(string.IsNullOrEmpty(result), "Error Account/Login");
                var loginResult = JsonExtensions.Deserialize<ReturnValue<object>>(result);
                Assert.True(loginResult.Success, "login failed: " + loginResult.Message);
            }
        }
    }
}