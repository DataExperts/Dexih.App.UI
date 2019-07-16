using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.Options;
using System.Threading.Tasks;
using dexih.repository;
using Microsoft.AspNetCore.Authentication;

namespace dexih.api.Services
{
	public class DexihSignInManager : SignInManager<ApplicationUser> 
	{
		public DexihSignInManager(
			UserManager<ApplicationUser> userManager, 
			IHttpContextAccessor contextAccessor, 
			IUserClaimsPrincipalFactory<ApplicationUser> claimsFactory, 
			IOptions<IdentityOptions> optionsAccessor, 
			ILogger<SignInManager<ApplicationUser>> logger, 
			IAuthenticationSchemeProvider schemes)
        : base(userManager, contextAccessor, claimsFactory, optionsAccessor, logger, schemes)
    	{
		}

		public bool IsNotInvited { get; set; }
		public bool IsNotRegistered { get; set; }
		public bool IsNotEnabled { get; set; }

		public override async Task<bool> CanSignInAsync(ApplicationUser user)
		{
			IsNotEnabled = !user.IsEnabled;
			IsNotInvited = !user.IsInvited;
			IsNotRegistered = !user.IsRegistered;

			var canSignIn = await base.CanSignInAsync(user);
			return canSignIn && user.CanLogin();
		}

	}

	public class DexihSignInResult : SignInResult
	{
		public bool IsNotInvited { get; set; }
		public bool IsNotRegistered { get; set; }
		public bool IsNotEnabled { get; set; }
		
	}
}
