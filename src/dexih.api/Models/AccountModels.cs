using System.Collections.Generic;
using System.Runtime.Serialization;
using dexih.functions;
using dexih.repository;


namespace dexih.api.Models
{

    [DataContract]
    public class LoginModel { 
        public string Email { get; set; }
        public string Password { get; set; } 
        public bool RememberMe { get; set; }
    }

    public class EmailModel { 
        public string Email{get; set; }
    }

    [DataContract]
    public class RegisterModel
    {
        [DataMember(Order = 0)]
        public ELoginProvider Provider { get; set; } = ELoginProvider.Dexih;

        [DataMember(Order = 1)]
        public string UserName{get; set; }
        
        [DataMember(Order = 2)]
        public string Email{get; set; }
		
        [DataMember(Order = 3)]
        public string Code{get; set; }
        
        [DataMember(Order = 4)]
        public string Password{get; set; }
        
        [DataMember(Order = 5)]
        public string Firstname{get; set; }
        
        [DataMember(Order = 6)]
        public string Lastname{get; set; }
        
        [DataMember(Order = 7)]
        public bool Subscription{get; set; }
        
        [DataMember(Order = 8)]
        public bool Terms{get; set; }
        
        [DataMember(Order = 9)]
        public string AuthenticationToken {get; set; }

    }



    public class ConfirmEmailModel {
        public string Email{get; set; }
        public string Code{get; set; }
        public string Url{get; set; }
    }

    public class ResetPasswordModel {
        public string Email{get; set; }
        public string Code{get; set; }
        public string Url{get; set; }
        public string Password{get; set; }
    }

    public class ChangePasswordModel {
        public string Password{get; set; }
        public string NewPassword{get; set; }
    }
    
	public class UpdateDetails {
        public string UserName {get; set; }
		public string FirstName{get; set; }
		public string LastName{get; set; }
		public bool Subscription{get; set; }
        public bool NotifyPrivateMessage { get; set; }
        public bool NotifySupportMessage { get; set; }
    }

    public class ExternalLoginModel {
        public ELoginProvider Provider{get; set; }
        public string ProviderKey{get; set; }
        public string AuthenticationToken{get; set; }
    }

    public class ExternalLoginResult {
        public ELoginProvider Provider {get; set;}
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
		public ELoginProvider Provider { get; set; }
	    public string AuthenticationToken { get; set; }
    }
    
    public class ConnectionIdModel
    {
        public string ConnectionId { get; set; }
    }
    
    public class GoogleAuthModel
    {
        public string error_description { get; set; }
        public string azp { get; set; }
        public string aud { get; set; }
        public string sub { get; set; }
        public string email { get; set; }
        public string email_verified { get; set; }
        public string exp { get; set; }
        public string iss { get; set; }
        public string jti { get; set; }
        public string iat { get; set; }
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

    public class RemoveRemoteAgents {
        public long[] RemoteAgentKeys { get; set; }
    }

    public class RefreshRemoteAgentId {
        public long RemoteAgentKey { get; set; }
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
        public string InstanceId { get; set; }
        public bool Force { get; set; }
        public DownloadUrl DownloadUrl { get; set; }
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
            NotifySupportMessage = user.NotifySupportMessage;
            NotifyPrivateMessage = user.NotifyPrivateMessage;

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
        public EUserRole UserRole { get; set; }
        public bool EmailConfirmed { get; set; }
        public string UserName { get; set; }
        public bool IsInvited { get; set; }
        public bool NotifyPrivateMessage { get; set; }
        public bool NotifySupportMessage { get; set; }
    }

    public class SaveIssue
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public EIssueType Type { get; set; }
        public EIssueCategory Category { get; set; }
        public EIssueSeverity Severity { get; set; }
        public string Link { get; set; }
        public string Data { get; set; }
        public bool IsPrivate { get; set; }
        public long HubKey { get; set; }
    }

    public class GetIssue
    {
        public long IssueKey { get; set; }
    }

    public class IssueComment
    {
        public long IssueKey { get; set; }
        public string Comment { get; set; }
    }
}