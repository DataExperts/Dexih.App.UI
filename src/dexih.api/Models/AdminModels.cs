using dexih.repository;

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
		public EUserRole Role { get; set; }
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
		public string Email { get; set; }
		public string Provider { get; set; }
		public string ProviderKey { get; set; }
	}
	
}
