using System;
using dexih.functions;
using dexih.repository;

using Xunit;
using Xunit.Abstractions;
using Dexih.Utils.MessageHelpers;

namespace dexih.api.tests
{
    [TestCaseOrderer("dexih.api.tests.PriorityOrderer", "dexih.api.tests")]
    public class UnitTests
    {
        private readonly string _url;
        private readonly string _email;
        private readonly string _password;

        public static string _hubName = "hub-" + Guid.NewGuid();

        private readonly ITestOutputHelper _output;

      
        public UnitTests(ITestOutputHelper output)
        {
            _output = output;

            _url = Configuration.AppSettings["DexihUrl"];
            _password = Configuration.AppSettings["DexihPassword"];
            _email = Configuration.AppSettings["DexihEmail"];
        }

 
        
        [Fact, TestPriority(0)]
        public async void Login()
        {
            await Configuration.Login();
        }

        [Fact, TestPriority(5)]
        public async void SaveHub()
        {
            var hub = new DexihHub()
            {
                Name = _hubName,
                Description = "The description",
                EncryptionKey = "123"
            };
            
            var message = await Configuration.Post("/api/Account/SaveHub", hub);
            var user = JsonExtensions.Deserialize<ReturnValue<DexihHub>>(message);
            
            Assert.True(user.Success);

        }
        
        [Fact, TestPriority(5)]
        public async void GetAuthorizedHubs()
        {
            var message = await Configuration.Post("/api/Account/GetAuthorizedHubs", null);
            var user = JsonExtensions.Deserialize<ReturnValue<DexihHub[]>>(message);
            
            Assert.True(user.Success);

        }
        
        [Fact, TestPriority(5)]
        public async void GetHub()
        {
            var hubKey = new {HubKey = 2};
            var message = await Configuration.Post("/api/Hub/GetHubCache", hubKey);
            var hubResult = JsonExtensions.Deserialize<ReturnValue<DexihHub>>(message);
            
            Assert.True(hubResult.Success);
            
            
        }
    }
}