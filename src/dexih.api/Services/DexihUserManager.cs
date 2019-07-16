//using System;
//using Microsoft.AspNetCore.Identity;
//using Microsoft.Extensions.Logging;
//using Microsoft.Extensions.Options;
//using System.Threading.Tasks;
//using dexih.repository;
//using System.Collections.Generic;
//
//namespace dexih.api.Services
//{
//	public class DexihUserManager : UserManager<ApplicationUser>
//	{
//		public DexihUserManager(IUserStore<ApplicationUser> store, IOptions<IdentityOptions> optionsAccessor, IPasswordHasher<ApplicationUser> passwordHasher, IEnumerable<IUserValidator<ApplicationUser>> userValidators, IEnumerable<IPasswordValidator<ApplicationUser>> passwordValidators, ILookupNormalizer keyNormalizer, IdentityErrorDescriber errors, IServiceProvider services, ILogger<UserManager<ApplicationUser>> logger) 
//			: base(store, optionsAccessor, passwordHasher, userValidators, passwordValidators, keyNormalizer, errors, services, logger)
//		{
//		}
//
//		public override Task<IdentityResult> CreateAsync(ApplicationUser user)
//		{
//			return base.CreateAsync(user);
//		}
//	}
//
//
//}
