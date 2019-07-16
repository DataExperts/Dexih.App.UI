using Microsoft.AspNetCore.DataProtection;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;

namespace dexih.api.Services.Remote
{
    public class RemoteAuthenticationProvider<TUser> : DataProtectorTokenProvider<TUser> where TUser : class
    {
        public RemoteAuthenticationProvider(IDataProtectionProvider dataProtectionProvider, IOptions<RemoteAuthenticationProviderOptions> options) : base(dataProtectionProvider, options)
        {
        }
    }

    public class RemoteAuthenticationProviderOptions : DataProtectionTokenProviderOptions { }

}
