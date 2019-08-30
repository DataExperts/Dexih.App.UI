using System.Collections.Generic;
using dexih.operations;
using dexih.repository;

namespace dexih.api.Models
{

    
    public class LoginModel { 
        public string Email; 
        public string Password; 
        public bool RememberMe; 
    };

    public class EmailModel { 
        public string Email;
    }

    public class RegisterModel
    {
        public RepositoryManager.ELoginProvider Provider;
        public string Email;
		public string Code;
        public string Password;
        public string Firstname;
        public string Lastname;
        public bool Subscription;
        public bool Terms;
        
        public string AuthenticationToken { get; set; }

    };

    public class ExternalRegisterModel
    {
        public string Firstname;
        public string Lastname;
        public bool Subscription;
        public bool Terms;

        public RepositoryManager.ELoginProvider Provider;
        public string ProviderKey;
        public string AuthenticationToken;
    }

    public class ConfirmEmailModel {
        public string Email;
        public string Code;
        public string Url;
    }

    public class ResetPasswordModel {
        public string Email;
        public string Code;
        public string Url;
        public string Password;
    }

    public class ChangePasswordModel {
        public string Password;
        public string NewPassword;
    }
    
	public class UpdateDetails {
		public string FirstName;
		public string LastName;
		public bool Subscription;
	}

    public class ExternalLoginModel {
        public RepositoryManager.ELoginProvider Provider;
        public string ProviderKey;
        public string AuthenticationToken;
    }

    public class ExternalLoginResult {
        public RepositoryManager.ELoginProvider Provider {get; set;}
        public string ProviderKey { get; set; }
        public string Email {get; set; }
        public bool IsSignedIn {get;set;} = false;
        public bool IsLocked {get;set;} = false;
        public bool IsAlreadyRegistered {get;set;} = false;

        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string PhoneNumber { get; set; }
    }

	public class ExternalLoginProviderModel
	{
		public RepositoryManager.ELoginProvider Provider { get; set; }
	    public string AuthenticationToken { get; set; }
    }

    public class RemoteExternalLoginProviderModel
    {
        public RepositoryManager.ELoginProvider Provider { get; set; }
        public string ProviderKey { get; set; }
    }

    public class ConnectionIdModel
    {
        public string ConnectionId { get; set; }
    }

    
    public class GoogleLoginModel
    {
        public string IdToken { get; set; }
        public string ProviderKey { get; set; }
    }

    public class GoogleAuthModel
    {
        public string error_description { get; set; }
        public string azp { get; set; }
        public string aud { get; set; }
        public string sub { get; set; }
        public string email { get; set; }
        public bool? email_verified { get; set; }
        public long? exp { get; set; }
        public string iss { get; set; }
        public string jti { get; set; }
        public long? iat { get; set; }
        public string name { get; set; }
        public string picture { get; set; }
        public string given_name { get; set; }
        public string family_name { get; set; }
        public string locale { get; set; }
        public string alg { get; set; }
        public string kid { get; set; }
    }

    public class MicrosoftAuthModel
    {
        public string displayName { get; set; }
        public string surname { get; set; }
        public string givenName { get; set; }
        public string id { get; set; }
        public string userPrincipalName { get; set; } //email address
        public string[] businessPhones { get; set; }
        public string jobTitle { get; set; }
        public string mail { get; set; }
        public string mobilePhone { get; set; }
        public string officeLocation { get; set; }
        public string preferredLanguage { get; set; }
    }

	public class DeleteHubs {
		public long[] HubKeys { get; set; }
	}

    public class UserTokenModel
    {
        public string RemoteAgentId { get; set; }
    }
    
    public class LogError
    {
        public string url { get; set; }
        public string message { get; set; }
        public string details { get; set; }
        public string context { get; set; }
    }

    public class RestartAgentsParameter
    {
        public IEnumerable<string> InstanceIds { get; set; }
        public bool Force { get; set; }
    }
    
    public class RemoteAgentUserToken
    {
        public string User { get; set; }
        public string RemoteAgentId { get; set; }
        public string UserToken { get; set; }
    }

    public class ReturnUser
    {
        public ReturnUser(ApplicationUser user)
        {
            Email = user.Email;
            Subscription = user.Subscription;
            Terms = user.Terms;
            FirstName = user.FirstName;
            HubQuota = user.HubQuota;
            InviteQuota = user.InviteQuota;
            IsAdmin = user.IsAdmin;
            Id = user.Id;
            IsRegistered = user.IsRegistered;
            LastName = user.LastName;
            UserRole = user.UserRole;
            EmailConfirmed = user.EmailConfirmed;
            UserName = user.UserName;
            IsInvited = user.IsInvited;

        }
        public string Email { get; set; }
        public bool Subscription { get; set; }
        public bool Terms { get; set; }
        public string FirstName { get; set; }
        public int HubQuota { get; set; }
        public int InviteQuota { get; set; }
        public bool IsAdmin { get; set; }
        public string Id { get; set; }
        public bool IsRegistered { get; set; }
        public string LastName { get; set; }
        public ApplicationUser.EUserRole UserRole { get; set; }
        public bool EmailConfirmed { get; set; }
        public string UserName { get; set; }
        public bool IsInvited { get; set; }
    }


}