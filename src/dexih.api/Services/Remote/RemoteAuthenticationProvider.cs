using Microsoft.AspNetCore.DataProtection;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace dexih.api.Services.Remote
{
    public class RemoteAuthenticationProvider<TUser> : DataProtectorTokenProvider<TUser> where TUser : class
    {
        public RemoteAuthenticationProvider(IDataProtectionProvider dataProtectionProvider, IOptions<RemoteAuthenticationProviderOptions> options, ILogger<DataProtectorTokenProvider<TUser>> logger) : base(dataProtectionProvider, options, logger)
        {
        }
    }

    public class RemoteAuthenticationProviderOptions : DataProtectionTokenProviderOptions { }

}
