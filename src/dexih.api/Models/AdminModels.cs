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
