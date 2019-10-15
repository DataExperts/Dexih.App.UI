using System;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using dexih.functions;
using dexih.repository;
using Dexih.Utils.MessageHelpers;
using Microsoft.Extensions.Configuration;

using Xunit;

namespace dexih.api.tests
{
 public static class Configuration
    {
        public static int counter = 1;

        public static IConfigurationSection AppSettings { get; set; }
        public static HttpClient _httpClient;
        public static CookieContainer _CookieContainer;

        private static readonly string _url;

        static Configuration()
        {
            Console.WriteLine("Current directory is: " + Directory.GetCurrentDirectory());

            try
            {
                var builder = new ConfigurationBuilder()
                    .SetBasePath(Directory.GetCurrentDirectory())
                    .AddJsonFile("appsettings.json")
                    .AddUserSecrets<Startup>()
                    .AddEnvironmentVariables();

                var configuration = builder.Build();
                AppSettings = configuration.GetSection("AppSettings");

                _url = AppSettings["DexihUrl"];

            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }

        public static string EncryptionKey()
        {
            return AppSettings["EncryptionKey"];
        }


        public static async Task Login()
        {
            var user = new
            {
                Email = AppSettings["DexihEmail"],
                Password = AppSettings["DexihPassword"],
                RememberMe = true
            };
            
            _CookieContainer = new CookieContainer();

            var handler = new HttpClientHandler()
            {
                CookieContainer = _CookieContainer
            };

            if (_httpClient == null)
            {
                _httpClient = new HttpClient(handler) {Timeout = TimeSpan.FromSeconds(600)};
            }
            
            var result = await Post("/api/Account/Login", user);
            var message = JsonExtensions.Deserialize<ReturnValue>(result);
            Assert.True(message.Success);
            
            // Get user required to refresh the antiforgerytoken
            result = await Post("/api/Account/GetUser", null);
            var user2 = JsonExtensions.Deserialize<ReturnValue<ApplicationUser>>(result);
            
            Assert.True(user2.Success);
            
            Assert.Equal(user.Email, user2.Value.Email);
        }
        
        public static async Task<string> Post(string uri, object data)
        {
            var messagesString = JsonExtensions.Serialize(data);
            var content = new StringContent(messagesString, Encoding.UTF8, "application/json");

            var cookies = _CookieContainer.GetCookies(new Uri(_url));
            var token = cookies["XSRF-TOKEN"];
            if (token != null) content.Headers.Add("X-XSRF-TOKEN", token.Value);
            var response = await _httpClient.PostAsync(_url + uri, content);

            if (response.IsSuccessStatusCode)
            {
                var message = await response.Content.ReadAsStringAsync();
                return message;
            }
            
            throw new Exception($"Post to {uri} failed.  Error: {response.ReasonPhrase}.");

        }
        
    }

    public class Startup
    {
        
    }

}