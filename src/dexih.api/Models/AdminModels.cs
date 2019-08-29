using System;
using System.Collections.Generic;
using System.Security.Claims;
using dexih.repository;
using Microsoft.AspNetCore.Identity;

namespace dexih.api.Models
{
	public class GetUsersModel
	{
		public string SearchString { get; set; }
		public int MaxResults { get; set; }
	}


	/// <summary>
	/// Similar to ApplicationUser class, but excludes password hash and other information we don't want
	/// included for security purposes.
	/// </summary>
	public class UserModel
	{
		public string Email { get; set; }
		public string UserName { get; set; }
		public bool EmailConfirmed { get; set; }

		public int AccessFailedCount { get; set; }
		public string Id { get; set; }
		public bool LockoutEnabled { get; set; }
		public DateTimeOffset? LockoutEnd { get; set; }

		public ICollection<UserLoginInfo> Logins { get; set; }
		public ICollection<string> Roles { get; set; }
		public ICollection<Claim> Claims { get; set; }

		public bool TwoFactorEnabled { get; set; }
		public string PhoneNumber { get; set; }
		public bool PhoneNumberConfirmed { get; set; }

		public string FirstName { get; set; }
		public string LastName { get; set; }
		public bool Terms { get; set; }
		public bool Subscription { get; set; }

		public int InviteQuota { get; set; }
		public int HubQuota { get; set; }

		public bool IsRegistered { get; set; }
		public bool IsInvited { get; set; }
		public bool IsEnabled { get; set; }
	}

	public class AddUsers
	{
		public ApplicationUser[] Users { get; set; }
		public bool SendInvite { get; set; }
	}

	public class InviteUsers
	{
		public string[] Emails { get; set; }
		public int HubQuota { get; set; }
		public int InviteQuota { get; set; }
		public ApplicationUser.EUserRole Role { get; set; }
	}

	public class EmailsModel
	{
		public string[] Emails { get; set; }
	}

	public class SaveUsers
	{
		public ApplicationUser[] Users { get; set; }
	}

	public class RemoveExternalLoginModel
	{
		public string Email;
		public string Provider;
		public string ProviderKey;
	}
	


}
