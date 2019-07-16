using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using dexih.api.Models;
using dexih.api.Services;
using dexih.repository;
using System.Collections.Generic;
using System.Text;
using System.IO;
using Dexih.Utils.Crypto;
using dexih.api.Services.Remote;
using dexih.operations;
using System;
using System.Collections.Concurrent;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Reflection;
using System.Web;
using dexih.api.Services.Message;
using dexih.api.Services.Operations;
using Dexih.Utils.ManagedTasks;
using Microsoft.AspNetCore.Antiforgery;
using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using Microsoft.Extensions.Caching.Memory;

namespace dexih.api.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    [ApiFilter]
    [ApiExceptionFilter]
    public class AccountController : Controller
    {
        private readonly DexihSignInManager _signInManager;
        private readonly IEmailSender _emailSender;
        private readonly ILogger _logger;
        private readonly IDexihOperations _operations;
        private readonly IRemoteAgents _remoteAgents;
	    private readonly IAntiforgery _antiforgery;
	    private readonly IUserClaimsPrincipalFactory<ApplicationUser> _principalFactory;
        private readonly IMemoryCache _cache;
        private readonly ErrorLogger _errorLogger;

        public AccountController(
            DexihSignInManager signInManager,
            IAntiforgery antiforgery,
            IEmailSender emailSender,
            ILoggerFactory loggerFactory,
            IDexihOperations operations,
            IRemoteAgents remoteAgents,
            IUserClaimsPrincipalFactory<ApplicationUser> principalFactory,
            IMemoryCache cache,
            ErrorLogger errorLogger
            )
        {
            _signInManager = signInManager;
            _emailSender = emailSender;
            _logger = loggerFactory.CreateLogger<AccountController>();
            _operations = operations;
            _remoteAgents = remoteAgents;
	        _antiforgery = antiforgery;
	        _principalFactory = principalFactory;
            _cache = cache;
            _errorLogger = errorLogger;
        }

        private Task<ApplicationUser> GetApplicationUser()
        {
	        if (!_signInManager.IsSignedIn(User))
	        {
		        // throw new AccountControllerException("There is no user logged in.");
		        return Task.FromResult((ApplicationUser)null);
	        }
	        else
	        {
		        return _operations.RepositoryManager.GetUser(User);
	        }
        }

        //
        // POST: /Account/Login
        [HttpPost("[action]")]
        [AllowAnonymous]
        public async Task<ApplicationUser> Login([FromBody] LoginModel login)
        {
            if (ModelState.IsValid)
            {
	            var user = await _operations.RepositoryManager.GetUserFromEmail(login.Email);

                if (user == null)
                {
                    throw new AccountControllerException("Login failed, check username and password.");
                }
                else
                {
                    // This doesn't count login failures towards account lockout
                    // To enable password failures to trigger account lockout, set lockoutOnFailure: true
                    var result = await _signInManager.PasswordSignInAsync(user, login.Password, login.RememberMe, lockoutOnFailure: true);
                    if (result.Succeeded)
                    {
	                    // Must manually set the HttpContext user claims to those of the logged
	                    // in user. Otherwise MVC will still include a XSRF token for the "null"
	                    // user and token validation will fail. (MVC appends the correct token for
	                    // all subsequent responses but this isn't good enough for a single page
	                    // app.)
	                    var principal = await _principalFactory.CreateAsync(user);
	                    HttpContext.User = principal;

	                    // Update the anti-forgery token following the authentication.
	                    var tokens = _antiforgery.GetAndStoreTokens(HttpContext);
	                    Response.Cookies.Delete("XSRF-TOKEN");
	                    Response.Cookies.Append("XSRF-TOKEN", tokens.RequestToken, new CookieOptions() {HttpOnly = false});

	                    return user;
                    }
                    //if (result.RequiresTwoFactor)
                    //{
                    //    return RedirectToAction(nameof(SendCode), new { ReturnUrl = returnUrl, RememberMe = model.RememberMe });
                    //}
                    if (result.IsLockedOut)
                    {
                        throw new AccountControllerException("The account is locked out.");
                    }
					if(_signInManager.IsNotEnabled)
					{
                        throw new AccountControllerException("The account has been disabled.");
					}
	                if (_signInManager.IsNotRegistered)
	                {
		                throw new AccountControllerException("The account has not completed registration.");
	                }
					if (_signInManager.IsNotInvited)
					{
                        throw new AccountControllerException("The account has not been invited to use platform.");
					}
				}
            }
            else
            {
                var message = string.Join("; ", ModelState.Values.SelectMany(x => x.Errors).Select(x => x.ErrorMessage));
                throw new AccountControllerException("Invalid login attempt: " + message);
            }

            // If we got this far, something failed in the model.
            throw new AccountControllerException("Login failed.");
        }

	    private async  Task<ExternalLoginResult> GetExternalLogin(RepositoryManager.ELoginProvider provider, string authenticationToken)
	    {
		    ExternalLoginResult externalLoginResult;
		    
		    switch (provider)
		    {
			    case RepositoryManager.ELoginProvider.Dexih:
				    externalLoginResult = null;
				    break;

			    case RepositoryManager.ELoginProvider.Google:
				    externalLoginResult = await GoogleTokenVerification(authenticationToken);
				    break;
			    case RepositoryManager.ELoginProvider.Microsoft:
				    externalLoginResult = await MicrosoftTokenVerification(authenticationToken);
				    break;
			    default:
				    throw new AccountControllerException($"The external provider {provider} is not currently supported.");
		    }

		    return externalLoginResult;
	    }
	            //
        // POST: /Account/Login
        [HttpPost("[action]")]
        [AllowAnonymous]
        public async Task<ApplicationUser> ExternalLogin([FromBody] ExternalLoginProviderModel externalProvider)
        {
            if (ModelState.IsValid)
            {
	            var externalLoginResult =
		            await GetExternalLogin(externalProvider.Provider, externalProvider.AuthenticationToken);
	            
	            var user = await _operations.RepositoryManager.GetUserFromLogin(externalLoginResult.Provider.ToString(), externalLoginResult.ProviderKey);
                
	            if (user == null)
                {
                    throw new AccountControllerException("Login failed, user not found.");
                }
                else
                {
                    // This doesn't count login failures towards account lockout
                    // To enable password failures to trigger account lockout, set lockoutOnFailure: true
                    var result = await _signInManager.ExternalLoginSignInAsync(externalLoginResult.Provider.ToString(), externalLoginResult.ProviderKey, false);
                    if (result.Succeeded)
                    {
                        return user;
                    }
                    //if (result.RequiresTwoFactor)
                    //{
                    //    return RedirectToAction(nameof(SendCode), new { ReturnUrl = returnUrl, RememberMe = model.RememberMe });
                    //}
                    if (result.IsLockedOut)
                    {
                        throw new AccountControllerException("The account is locked out.");
                    }
					if(_signInManager.IsNotEnabled)
					{
                        throw new AccountControllerException("The account has been disabled.");
					}
	                if (_signInManager.IsNotRegistered)
	                {
		                throw new AccountControllerException("The account has not completed registration.");
	                }
					if (_signInManager.IsNotInvited)
					{
                        throw new AccountControllerException("The account has not been invited to use platform.");
					}
				}
            }
            else
            {
                var message = string.Join("; ", ModelState.Values.SelectMany(x => x.Errors).Select(x => x.ErrorMessage));
                throw new AccountControllerException("Invalid login attempt: " + message);
            }

            // If we got this far, something failed in the model.
            throw new AccountControllerException("Login failed.");
        }

        //
        // POST: /Account/LogOff
        [HttpPost("[action]")]
        [ValidateAntiForgeryToken]
        public async Task Logout()
        {
            await _signInManager.SignOutAsync();
        }

                //
        // POST: /Account/Register
        [HttpPost("[action]")]
        [AllowAnonymous]
        public async Task<ApplicationUser> Register([FromBody] RegisterModel register)
        {
            if (ModelState.IsValid)
            {
	            var externalLoginResult = await GetExternalLogin(register.Provider, register.AuthenticationToken);

	            if (register.Provider != RepositoryManager.ELoginProvider.Dexih)
	            {
		            register.Password = "";

		            if (externalLoginResult == null)
		            {
			            throw new AccountControllerException("The registration external provider login details could not be retrieved.");
		            }
		            
		            if ( externalLoginResult.Email != register.Email)
		            {
			            throw new AccountControllerException("The registration email and the external email do not match.");
		            }

	            }
	            
	            var existingUser = await _operations.RepositoryManager.GetUserFromEmail(register.Email);

                if(existingUser == null)
				{
					var user = new ApplicationUser
					{
						UserName = register.Email,
						Email = register.Email,
						FirstName = register.Firstname,
						LastName = register.Lastname,
						Terms = register.Terms,
						Subscription = register.Subscription,
						IsRegistered = true,
						IsEnabled = true,
						IsInvited = !_operations.Config.InviteOnly,
						InviteQuota =  _operations.Config.DefaultInvites,
						HubQuota =  _operations.Config.HubQuota
					};

					try
					{

						if (register.Provider == RepositoryManager.ELoginProvider.Dexih)
						{
							await _operations.RepositoryManager.CreateUserAsync(user, register.Password);
						}
						else
						{
							user.Email = externalLoginResult.Email;
							user.EmailConfirmed = true;

							await _operations.RepositoryManager.CreateUserAsync(user);
						}

						if (register.Provider != RepositoryManager.ELoginProvider.Dexih)
						{
							await _operations.RepositoryManager.AddLoginAsync(user, register.Provider, externalLoginResult.ProviderKey);
							await _signInManager.SignInAsync(user, false);
							SendRegisteredEmail(user);
							return user;
						}
						else
						{
							if (register.Code != null)
							{
								await _operations.RepositoryManager.ConfirmEmailAsync(user, register.Code);
								await _signInManager.SignInAsync(user, false);
								SendRegisteredEmail(user);
							}
							else
							{
								await SendConfirmationEmail(user);
							}

							await SendSupportMessage($"User registration succeeded for {user.Email}.",
								$"The user user {user.Email} is not registered.  Invitation status is {user.IsInvited}.");

							return user;
						}
					}
					catch (Exception ex)
					{
						await SendSupportMessage($"User registration failed for {user.Email}.", ex.Message);
						throw;
					}
				}
				else
                {
					if(existingUser.IsRegistered) 
					{
                        throw new AccountControllerException("The specified email address is already registered.");
					}
					else 
					{
						existingUser.UserName = register.Email;
						existingUser.FirstName = register.Firstname;
						existingUser.LastName = register.Lastname;
						existingUser.Terms = register.Terms;
						existingUser.Subscription = register.Subscription;
						existingUser.IsRegistered = true;

						if (register.Provider != RepositoryManager.ELoginProvider.Dexih)
						{
							await _operations.RepositoryManager.AddLoginAsync(existingUser, register.Provider, externalLoginResult.ProviderKey);
							await _signInManager.SignInAsync(existingUser, false);
							SendRegisteredEmail(existingUser);
						}
						else
						{
							if (string.IsNullOrEmpty(register.Code))
							{
								await SendConfirmationEmail(existingUser);
							}
							else
							{
								await _operations.RepositoryManager.ConfirmEmailAsync(existingUser, register.Code);
								await _signInManager.SignInAsync(existingUser, false);
								SendRegisteredEmail(existingUser);
							}
						}

						if (register.Provider == RepositoryManager.ELoginProvider.Dexih)
						{
							await _operations.RepositoryManager.AddPasswordAsync(existingUser, register.Password);
						}

						await _operations.RepositoryManager.UpdateUserAsync(existingUser);
						await SendSupportMessage($"User registration completed for {existingUser.Email}.", $"The user user {existingUser.Email} is has registered.  Invitation status is {existingUser.IsInvited}.");

						return existingUser;
					}
                }

            }

            // If we got this far, something failed in the model.
	        await SendSupportMessage($"User registration failed for {register.Email}.", "Unknown error");
            throw new AccountControllerException("Registration failed.");
        }
	    
	  	public async Task SendConfirmationEmail([FromBody] ApplicationUser user)
        {
            // For more information on how to enable account confirmation and password reset please visit http://go.microsoft.com/fwlink/?LinkID=532713
            // Send an email with this link
	        var code = await _operations.RepositoryManager.GenerateEmailConfirmationTokenAsync(user);
			var url = (Request.IsHttps ? "https://" : "http://") + Request.Host.ToUriComponent();

	        var verifyUrl = $"{url}/auth/verifyemail?email={user.Email}&code={HttpUtility.UrlEncode(code)}";
	        
	        var path = Path.Combine(Directory.GetCurrentDirectory(), "Resources", "EmailTemplates", "confirmEmail.html");
			var body = new StringBuilder(System.IO.File.ReadAllText(path));
			body.Replace("{{url}}", url);
			body.Replace("{{name}}", user.FirstName);
	        body.Replace("{{email}}", user.Email);
	        body.Replace("{{verifyUrl}}", verifyUrl);
			body.Replace("{{code}}", code);
			_emailSender.SendEmail(user.Email, "Confirm Email", null, body.ToString());
        }
	    
	    public void SendRegisteredEmail([FromBody] ApplicationUser user)
	    {
		    string path;
		    string subject;
		    if (user.IsInvited)
		    {
			    path = Path.Combine(Directory.GetCurrentDirectory(), "Resources", "EmailTemplates", "userReady.html");
			    subject = "Information Hub Registration is Completed.";
		    }
		    else
		    {
			    path = Path.Combine(Directory.GetCurrentDirectory(), "Resources", "EmailTemplates", "inviteRequired.html");
			    subject = "Information Hub Invite Pending";
		    }

		    var body = new StringBuilder(System.IO.File.ReadAllText(path));
		    var url = (Request.IsHttps ? "https://" : "http://") + Request.Host.ToUriComponent();
		    body.Replace("{{url}}", url);
		    body.Replace("{{name}}", user.FirstName);
		    body.Replace("{{email}}", user.Email);

		    _emailSender.SendEmail(user.Email, subject, null, body.ToString());
	    }

	    public Task SendSupportMessage(string subject, string message)
	    {
		    if (!string.IsNullOrEmpty(_operations.Config.SupportEmailAccount))
		    {
			    try
			    {

				    string path = Path.Combine(Directory.GetCurrentDirectory(), "Resources", "EmailTemplates",
					    "supportEmail.html");
				    var body = new StringBuilder(System.IO.File.ReadAllText(path));
				    body.Replace("{{message}}", message);

				    _emailSender.SendEmail(_operations.Config.SupportEmailAccount, subject, null,
					    body.ToString());

			    }
			    catch (Exception ex)
			    {
				    _logger.LogError(ex, $"Error sending support message.  subject: {subject}, message: {message}");
			    }
		    }
		    return Task.CompletedTask;
	    }

        // GET: /Account/ConfirmEmail
        [HttpPost("[action]")]
        [AllowAnonymous]
        public async Task<ApplicationUser> ConfirmEmail([FromBody] ConfirmEmailModel email)
        {
            if (email.Email == null || email.Code == null)
            {
                throw new AccountControllerException("The email and verification code were not completed.");
            }

	        var user = await _operations.RepositoryManager.GetUserFromEmail(email.Email);

	        if (user == null)
            {
                throw new AccountControllerException("There was an error verifying.  Check the email and verification code are entered correcly.");
            }

	        await _operations.RepositoryManager.ConfirmEmailAsync(user, email.Code);
	        SendRegisteredEmail(user);
	        return user;
        }

        //
        // POST: /Account/GetUser
        [HttpPost("[action]")]
        [AllowAnonymous]
        //[ValidateAntiForgeryToken]
        public async Task<object> GetUser()
        {
            if(!_signInManager.IsSignedIn(User)) 
            {
                // throw new AccountControllerException("There is no user logged in.");
	            return null;
            }
            else
            {
	            var user = await  _operations.RepositoryManager.GetUser(User);
	            
	            // just return the non sensitive user components.
	            return new
	            {
		            user.Email,
		            user.Subscription,
		            user.Terms,
		            user.FirstName,
		            user.HubQuota,
		            user.InviteQuota,
		            user.IsAdmin,
		            user.Id,
		            user.IsRegistered,
		            user.LastName,
		            user.UserRole,
		            user.EmailConfirmed,
		            user.UserName,
	            };
            }
        }
	    
	    ///Sends out a ping request to all remote agents to indicate they are active.
	    [HttpPost("[action]")]
	    public async Task<DexihRemoteAgent[]> PingRemoteAgents([FromBody] ConnectionIdModel connectionId)
	    {
		    var user = await GetApplicationUser();
		    return await _remoteAgents.PingAgents(user, connectionId.ConnectionId, _operations.RepositoryManager);
	    }

        //
        // POST: /Account/GetAuthorizedHubs
        [HttpPost("[action]")]
        [AllowAnonymous]
        public async Task<IEnumerable<DexihHub>> GetAuthorizedHubs()
        {
            if(!_signInManager.IsSignedIn(User)) 
            {
                throw new AccountControllerException("Cannot get authorized hubs as there is no user logged in.");
            }

	        var applicationUser = await _operations.RepositoryManager.GetUser(User);

            if (applicationUser == null)
            {
                throw new AccountControllerException("User not logged in.");
            }

            var hubs = await _operations.RepositoryManager.GetUserHubs(applicationUser);

            return hubs;
        }

	    private async Task<ExternalLoginResult> GoogleTokenVerification(string idToken)
	    {
		    var client = new HttpClient();

		    var apiResult = await client.GetAsync("https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=" + idToken);
		    if (!apiResult.IsSuccessStatusCode)
		    {
			    throw new AccountControllerException("The google api could not be contacted for authentication.  Error: " + apiResult.ReasonPhrase);
		    }

		    GoogleAuthModel googleAuthModel;
		    try
		    {
			    googleAuthModel = JsonConvert.DeserializeObject<GoogleAuthModel>(await apiResult.Content.ReadAsStringAsync());

		    }
		    catch (Exception ex)
		    {
			    throw new AccountControllerException("Failed to parse the google authentication response.", ex);
		    }

		    if (!string.IsNullOrEmpty(googleAuthModel.error_description))
		    {
			    throw new AccountControllerException($"The google authentication returned the error {googleAuthModel.error_description}.");
		    }

		    if (googleAuthModel.email_verified != null && !googleAuthModel.email_verified.Value)
		    {
			    throw new AccountControllerException("The google account used as not had email verification.");
		    }

		    if (string.IsNullOrEmpty(googleAuthModel.email))
		    {
			    throw new AccountControllerException("The google authentication did not return an email address.");
		    }

		    var result = new ExternalLoginResult()
		    {
			    Email =  googleAuthModel.email,
			    FirstName =  googleAuthModel.given_name,
			    LastName = googleAuthModel.family_name,
			    ProviderKey = googleAuthModel.aud,
			    Provider = RepositoryManager.ELoginProvider.Google
		    };

		    return result;
	    }
	    
	    private async Task<ExternalLoginResult> MicrosoftTokenVerification(string authenticationToken)
	    {
		    var client = new HttpClient();
		    client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", authenticationToken);
		    var apiResult = await client.GetAsync("https://graph.microsoft.com/v1.0/me");
		    if (!apiResult.IsSuccessStatusCode)
		    {
			    throw new AccountControllerException("The microsoft authentication API could not be contacted for authentication.  Error: " + apiResult.ReasonPhrase);
		    }

		    MicrosoftAuthModel microsoftAuthModel;
		    try
		    {
			    microsoftAuthModel = JsonConvert.DeserializeObject<MicrosoftAuthModel>(await apiResult.Content.ReadAsStringAsync());

		    }
		    catch (Exception ex)
		    {
			    throw new AccountControllerException("Failed to parse the microsoft authentication response.", ex);
		    }

		    if (string.IsNullOrEmpty(microsoftAuthModel.userPrincipalName))
		    {
			    throw new AccountControllerException("The google authentication did not return an email address.");
		    }

		    var result = new ExternalLoginResult()
		    {
			    Email =  microsoftAuthModel.userPrincipalName,
			    FirstName =  microsoftAuthModel.givenName,
			    LastName = microsoftAuthModel.surname,
			    ProviderKey = microsoftAuthModel.id,
			    Provider = RepositoryManager.ELoginProvider.Microsoft
		    };

		    return result;

	    }
	
	    /// <summary>
	    /// This view is required for the microsoft authenticator, as it needs a redirect page to go back to reinitialize the Msal.
	    /// </summary>
	    /// <returns></returns>
	    [HttpGet("[action]")]
	    [AllowAnonymous]
	    public IActionResult MicrosoftRedirect()
	    {
		    var client = _operations.Config.MicrosoftClientId;
		    return View("MicrosoftRedirect", client);
	    }

		 // POST: /Account/ExternalLoginConfirmation
        [HttpPost("[action]")]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public async Task<ApplicationUser> AddExternalLogin([FromBody] ExternalLoginModel externalLoginModel)
        {
          	if (ModelState.IsValid)
            {
	            // Get the information about the user from the external login provider
	            // var info = await _signInManager.GetExternalLoginInfoAsync();
	            var info = await GetExternalLogin(externalLoginModel.Provider, externalLoginModel.AuthenticationToken);
                
	            if (info == null)
	            {
		            throw new AccountControllerException("The external user login information was not found.");
	            }

	            // if the provider is the same as the one being added, then continue.
	            if (info.Provider == externalLoginModel.Provider)
	            {
		            var user = await _operations.RepositoryManager.GetUser(User);

		            if (user == null || !user.IsRegistered)
		            {
			            throw new AccountControllerException("There is no user currently logged in.");
		            }

		            await _operations.RepositoryManager.AddLoginAsync(user, info.Provider, info.ProviderKey);
		            await _signInManager.SignInAsync(user, isPersistent: false);
		            return user;
	            }
		          
	            throw new AccountControllerException("External login provider not current.");

            }

            throw new AccountControllerException("Registration failed");
        }
	    
        // POST: /Account/ExternalLogins
        [HttpPost("[action]")]
		[AllowAnonymous]
		[ValidateAntiForgeryToken]
		public async Task<IEnumerable<UserLoginInfo>> ExternalLogins()
		{
			if (!ModelState.IsValid)
			{
                throw new AccountControllerException("The update details failed.");
            }

            var currentUser = await GetApplicationUser();
			if (currentUser == null)
			{
				// Don't reveal that the user does not exist
                throw new AccountControllerException("The update details failed as the user could not be found.");
            }

			var result = await _operations.RepositoryManager.GetLoginsAsync(currentUser);
			return result;
		}
	    


		// POST: /Account/RemoveExternalLogin
		[HttpPost("[action]")]
		[AllowAnonymous]
		[ValidateAntiForgeryToken]
		public async Task RemoveExternalLogin([FromBody] RemoveExternalLoginModel externalProvider)
		{
			if (!ModelState.IsValid)
			{
                throw new AccountControllerException("The update details failed.");
            }
			
            var currentUser = await GetApplicationUser();

			if (currentUser == null)
			{
				// Don't reveal that the user does not exist
                throw new AccountControllerException("The update details failed as the user could not be found.");
            }

			await _operations.RepositoryManager.RemoveLoginAsync(currentUser, externalProvider.Provider,
				externalProvider.ProviderKey);
			await _signInManager.SignInAsync(currentUser, isPersistent: false);
		}


        // GET: /Account/ResendConfirmationEmail
        [HttpPost("[action]")]
        [AllowAnonymous]
        public async Task ResendConfirmationEmail([FromBody] EmailModel email)
        {
	        var user = await _operations.RepositoryManager.GetUserFromEmail(email.Email);
            await SendConfirmationEmail(user);
        }

        //
        // POST: /Account/ForgotPassword
        [HttpPost("[action]")]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public async Task ForgotPassword([FromBody] LoginModel login)
        {
            if (ModelState.IsValid)
            {
	            var user = await _operations.RepositoryManager.GetUserFromEmail(login.Email);
	            
                if (user == null || !user.EmailConfirmed)
                {
                    // Don't reveal that the user does not exist or is not confirmed
                    throw new AccountControllerException("The reset password failed.");
                }

                // For more information on how to enable account confirmation and password reset please visit http://go.    crosoft.com/fwlink/?LinkID=532713
                // Send an email with this link
                var code = await _operations.RepositoryManager.GeneratePasswordResetTokenAsync(user);
				var url = (Request.IsHttps ? "https://" : "http://") + Request.Host.ToUriComponent();
	            var path = Path.Combine(Directory.GetCurrentDirectory(), "Resources", "EmailTemplates", "forgotPassword.html");
				var body = new StringBuilder(System.IO.File.ReadAllText(path));
				body.Replace("{{url}}", url);
	            body.Replace("{{email}}", user.Email);
				body.Replace("{{name}}", user.FirstName);
				body.Replace("{{code}}", code);
				_emailSender.SendEmail(user.Email, "Reset Password", null, body.ToString());

				return;
            }

            // If we got this far, something failed, redisplay form
            throw new AccountControllerException("Reset password failed");
        }

        //
        // POST: /Account/ResetPassword
        [HttpPost("[action]")]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public async Task ResetPassword([FromBody] ResetPasswordModel resetPassword)
        {
            if (!ModelState.IsValid)
            {
                throw new AccountControllerException("The reset password failed.");
            }
            
	        var user = await _operations.RepositoryManager.GetUserFromEmail(resetPassword.Email);
            await _operations.RepositoryManager.ResetPasswordAsync(user, resetPassword.Code, resetPassword.Password);
        }

        // POST: /Account/UpdateDetails
        [HttpPost("[action]")]
		[AllowAnonymous]
		[ValidateAntiForgeryToken]
		public async Task UpdateDetails([FromBody] UpdateDetails updateDetails)
		{
			if (!ModelState.IsValid)
			{
                throw new AccountControllerException("The update details failed.");
            }

            var currentUser = await GetApplicationUser();

			if (currentUser == null)
			{
				// Don't reveal that the user does not exist
                throw new AccountControllerException("The update details failed as the user could not be found.");
            }

            currentUser.FirstName = updateDetails.FirstName;
			currentUser.LastName = updateDetails.LastName;
			currentUser.Subscription = updateDetails.Subscription;

			await _operations.RepositoryManager.UpdateUserAsync(currentUser);
        }

	    //
	    // POST: /Account/ChangePassword
	    [HttpPost("[action]")]
	    [ValidateAntiForgeryToken]
	    public async Task ChangePassword([FromBody] ChangePasswordModel changePassword)
	    {
		    if (!ModelState.IsValid)
		    {
			    throw new AccountControllerException("The reset password failed.");
		    }
		    var user = await GetApplicationUser();
		    if (user == null)
		    {
			    // Don't reveal that the user does not exist
			    throw new AccountControllerException("The reset password failed.");
		    }
		    
		    await _operations.RepositoryManager.ChangePasswordAsync(user, changePassword.Password, changePassword.NewPassword);
	    }


        // POST: /Account/SaveHub
        [HttpPost("[action]")]
        [ValidateAntiForgeryToken]
        public async Task<DexihHub> SaveHub([FromBody] DexihHub hub)
        {
            if (!ModelState.IsValid)
            {
                throw new AccountControllerException("The save hub failed.");
            }

	        var user = await GetApplicationUser();
	        if (user == null)
	        {
		        throw new AccountControllerException("The save hub failed.");
	        }

	        var existingHub = hub.HubKey > 0;

            if(user.IsAdmin || user.HubQuota > 0 || existingHub)
            {
                var repositoryManager = _operations.RepositoryManager;
                var result = await repositoryManager.SaveHub(hub, user);

		        // broadcast the update so any connected browsers will see the new hub.
		        var userIds = await repositoryManager.GetHubUserIds(hub.HubKey);
                if (userIds != null)
                {
                    await _operations.BroadcastUsersMessageAsync(userIds, "hub-update", result);
                }

                return result;
            }
            else
            {
                throw new AccountControllerException("The hub quota has been exceeded.  Contact support for more hubs.");
            }

        }

		// POST: /Account/DeleteHubs
		[HttpPost("[action]")]
		[ValidateAntiForgeryToken]
		public async Task DeleteHubs([FromBody] DeleteHubs deleteHubs)
		{
			if (!ModelState.IsValid)
			{
                throw new AccountControllerException("The delete hubs failed.");
            }

			var user = await GetApplicationUser();

			if (user == null)
			{
				throw new AccountControllerException("The delete hubs failed.");
			}

			var repositoryManager = _operations.RepositoryManager;

			var hubs = await repositoryManager.DeleteHubs(user, deleteHubs.HubKeys);
			
			if (!user.IsAdmin)
			{
				user.HubQuota += hubs.Length;
			}

			foreach(var hubKey in deleteHubs.HubKeys)
			{
				var userIds = await repositoryManager.GetHubUserIds(hubKey);
                if (userIds != null)
                {
                    await _operations.BroadcastUsersMessageAsync(userIds, "hubs-delete", new[] { hubKey });
                }
			}
		}

		// POST: /Account/GetRandomEncryptionKey
		[HttpPost("[action]")]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public string GetRandomEncryptionKey()
        {
            var key = EncryptString.GenerateRandomKey();
            return key;
        }

	    public class RemoteAgentUserToken
	    {
		    public string User { get; set; }
		    public string RemoteAgentId { get; set; }
		    public string UserToken { get; set; }
	    }

	    public class RemoteAgentLogin
	    {
		    public string RemoteAgentId { get; set; }
		    public string AuthorizedHubs { get; set; }
		    public DateTime? LastLoginDateTime { get; set; }
		    public string Name { get; set; }
		    public IEnumerable<DexihRemoteAgentHub> AuthorizedRemoteAgents { get; set; }
	    }

	    
	    // POST: /Account/GetUserRemoteAgents
	    [HttpPost("[action]")]
	    [ValidateAntiForgeryToken]
	    public async Task<IEnumerable<DexihRemoteAgent>> GetUserRemoteAgents()
	    {
		    var user = await GetApplicationUser();

		    if (user == null)
		    {
			    throw new AccountControllerException("Current user not found.");
		    }

		    var remoteAgents = await _operations.RepositoryManager.GetRemoteAgents(user);
		    return remoteAgents;
	    }
	    
	    // POST: /Account/RevokeUserToken
	    [HttpPost("[action]")]
	    [ValidateAntiForgeryToken]
	    public async Task SaveRemoteAgent([FromBody] DexihRemoteAgent hubRemoteAgent)
	    {   var user = await GetApplicationUser();

		    if (user == null)
		    {
			    throw new AccountControllerException("The save remote agent failed.");
		    }
		    await _operations.RepositoryManager.SaveRemoteAgent(user.Id, hubRemoteAgent);
	    }


	    // POST: /Account/GetUserToken
	    [HttpPost("[action]")]
	    [ValidateAntiForgeryToken]
	    public async Task<RemoteAgentUserToken> CreateRemoteAgent()
	    {
		    var user = await GetApplicationUser();

		    if (user == null)
		    {
			    throw new AccountControllerException("The create remote agent token failed.");
		    }

		    var remoteAgentId = Guid.NewGuid().ToString();
		    var token = await _operations.RepositoryManager.GenerateRemoteUserToken(user, remoteAgentId);

		    var dbRemoteAgent = new DexihRemoteAgent()
		    {
			    RemoteAgentId = remoteAgentId,
			    RestrictIp = false,
			    Name = "Unnamed",
			    UserId = user.Id,
			    HashedToken = HashString.CreateHash(token)
		    };
		    
		    await _operations.RepositoryManager.SaveRemoteAgent(user.Id, dbRemoteAgent);

		    await _operations.BroadcastUsersMessageAsync(new [] { user.Id}, "remoteAgent-update", dbRemoteAgent);

		    return new RemoteAgentUserToken
		    {
			    User = user.Email,
			    RemoteAgentId = remoteAgentId,
			    UserToken = token
		    };
	    }
	    
	    // POST: /Account/GetUserToken
	    [HttpPost("[action]")]
	    [ValidateAntiForgeryToken]
	    public async Task<RemoteAgentUserToken> RefreshRemoteAgentToken([FromBody] long remoteAgentKey)
	    {
		    var user = await GetApplicationUser();

		    if (user == null)
		    {
			    throw new AccountControllerException("The create user token failed.");
		    }

		    var dbRemoteAgent = await _operations.RepositoryManager.GetRemoteAgent(remoteAgentKey);

		    var userToken = await _operations.RepositoryManager.GenerateRemoteUserToken(user, dbRemoteAgent.RemoteAgentId);
			
		    // hash the token so that it's not stored in plain text.
		    var hashedToken = HashString.CreateHash(userToken);

		    dbRemoteAgent.HashedToken = hashedToken;
		    await _operations.RepositoryManager.SaveRemoteAgent(user.Id, dbRemoteAgent);
		    
	    
		    // disconnect any running agents with this id
		    await _remoteAgents.RestartAgents(user.Id, new [] {remoteAgentKey}, true, _operations.RepositoryManager);

		    return new RemoteAgentUserToken
		    {
			    User = user.Email,
			    RemoteAgentId = dbRemoteAgent.RemoteAgentId,
			    UserToken = userToken
		    };
	    }
	    
	    // POST: /Account/RevokeUserToken
	    [HttpPost("[action]")]
	    [ValidateAntiForgeryToken]
	    public async Task RemoveRemoteAgents([FromBody] IEnumerable<long> remoteAgentKeys)
	    {
		    var user = await GetApplicationUser();
		    if (user == null)
		    {
			    throw new AccountControllerException("The remove user token failed.");
		    }

		    var exceptions = new ConcurrentQueue<Exception>();

		    foreach(var remoteAgentKey in remoteAgentKeys)
		    {
			    try
			    {
				    await _operations.RepositoryManager.DeleteRemoteAgent(user, remoteAgentKey);
		    
				    // disconnect any running agents.
				    await _remoteAgents.RestartAgents(user.Id, new [] {remoteAgentKey}, true, _operations.RepositoryManager);
				    await _operations.BroadcastUsersMessageAsync(new [] { user.Id}, "remoteAgent-deleteKey", remoteAgentKey);
			    }
			    catch (Exception ex)
			    {
				    exceptions.Enqueue(ex);				    
			    }
		    }
		    

		    if (exceptions.Count > 0)
		    {
			    throw new AggregateException("There was an issue removing some remote agents.", exceptions);
		    }
		    
	    }
	    
        [HttpGet("[action]")]
	    [AllowAnonymous]
        [ResponseCache(Duration = 3600)]
        public async Task<CacheManager> GetGlobalCache()
        {
            try
            {
                return await _cache.GetOrCreateAsync($"GLOBAL_CACHE", entry =>
                {
	                _logger.LogInformation("Loading global cache.");
	                
	                var version = Assembly.GetExecutingAssembly().GetCustomAttribute<AssemblyInformationalVersionAttribute>().InformationalVersion;
	                var buildDate = System.IO.File.GetLastWriteTime(Assembly.GetExecutingAssembly().Location);

	                
                    var cache = new CacheManager(0, "");
                    var repositoryManager = _operations.RepositoryManager;
                    var returnValue = cache.LoadGlobal(version, buildDate, repositoryManager.DbContext);
                    cache.GoogleClientId = _operations.Config.GoogleClientId;
                    cache.MicrosoftClientId = _operations.Config.MicrosoftClientId;
                    cache.GoogleMapsAPIKey = _operations.Config.GoogleMapsAPIKey;

                    if (returnValue)
                    {
                        return Task.FromResult(cache);
                    }

                    throw new AccountControllerException("Could not get the global cache");
                });
            }
            catch (Exception ex)
            {
                throw new AccountControllerException($"Could not get the global cache. {ex.Message}", ex);
            }
        }

        [HttpPost("[action]")]
        public async Task LogError([FromBody] LogError logError)
        {
	        var user = await GetApplicationUser();
	        _errorLogger.Log(logError.message, logError.details, logError.context, logError.url, user?.Email??"Unknown");
        }
	    
	    /// <summary>
	    /// Cancels any running tasks 
	    /// </summary>
	    /// <returns></returns>
	    [HttpPost("[action]")]
	    //[ValidateHub(DexihHubUser.EPermission.User)]
	    public async Task CancelTasks([FromBody] ManagedTask[] tasks)
	    {
		    _logger.LogTrace(LoggingEvents.HubRunDatalinks, "HubController.CancelTasks {references}", string.Join(",", tasks.Select(c=>c.Reference)));

		    var repositoryManager = _operations.RepositoryManager;
		    await _remoteAgents.CancelTasks(tasks, repositoryManager);
	    }

	    public class RestartAgentsParameter
	    {
		    public IEnumerable<string> InstanceIds;
		    public bool Force;
	    }
	    
	    /// <summary>
	    /// Cancels any running tasks 
	    /// </summary>
	    /// <returns></returns>
	    [HttpPost("[action]")]
	    //[ValidateHub(DexihHubUser.EPermission.User)]
	    public async Task RestartAgents([FromBody] RestartAgentsParameter restartAgents)
	    {
		    var user = await GetApplicationUser();
		    if (user == null)
		    {
			    throw new AccountControllerException("The remove user token failed.");
		    }
		    
		    _logger.LogTrace(LoggingEvents.HubRestartAgent, "HubController.HubRestartAgent {references}", string.Join(",", restartAgents.InstanceIds));

		    var repositoryManager = _operations.RepositoryManager;
		    await _remoteAgents.RestartAgents(user.Id, restartAgents.InstanceIds, restartAgents.Force, repositoryManager);
	    }
	    
    }
}
