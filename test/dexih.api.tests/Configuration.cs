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
        public static IConfigurationSection AppSettings { get; set; }
        public static HttpClient HttpClient;
        public static CookieContainer CookieContainer;

        private static readonly string Url;

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

                Url = AppSettings["DexihUrl"];

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
            
            CookieContainer = new CookieContainer();

            var handler = new HttpClientHandler()
            {
                CookieContainer = CookieContainer
            };

            if (HttpClient == null)
            {
                HttpClient = new HttpClient(handler) {Timeout = TimeSpan.FromSeconds(600)};
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

            var cookies = CookieContainer.GetCookies(new Uri(Url));
            var token = cookies["XSRF-TOKEN"];
            if (token != null) content.Headers.Add("X-XSRF-TOKEN", token.Value);
            var response = await HttpClient.PostAsync(Url + uri, content);

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