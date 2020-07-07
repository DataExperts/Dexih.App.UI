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
using Dexih.Utils.Crypto;
using dexih.api.Services.Remote;
using dexih.operations;
using System;
using System.Collections.Concurrent;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading;
using System.Web;
using dexih.api.Extensions;
using dexih.api.Services.Message;
using dexih.api.Services.Operations;
using dexih.functions;
using Dexih.Utils.ManagedTasks;
using Microsoft.AspNetCore.Antiforgery;
using Microsoft.AspNetCore.Http;
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
        private readonly ICacheService _cache;
        private readonly ErrorLogger _errorLogger;
        private readonly IHttpClientFactory _clientFactory;

        public AccountController(
            DexihSignInManager signInManager,
            IAntiforgery antiforgery,
            IEmailSender emailSender,
            ILoggerFactory loggerFactory,
            IDexihOperations operations,
            IRemoteAgents remoteAgents,
            IUserClaimsPrincipalFactory<ApplicationUser> principalFactory,
            ICacheService cache,
            ErrorLogger errorLogger,
            IHttpClientFactory clientFactory
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
            _clientFactory = clientFactory;
        }

        private Task<ApplicationUser> GetApplicationUser(CancellationToken cancellationToken)
        {
	        if (!_signInManager.IsSignedIn(User))
	        {
		        // throw new AccountControllerException("There is no user logged in.");
		        return Task.FromResult((ApplicationUser)null);
	        }
	        else
	        {
		        return _operations.RepositoryManager.GetUserAsync(User, cancellationToken);
	        }
        }

        //
        // POST: /Account/Login
        [HttpPost("[action]")]
        [AllowAnonymous]
        public async Task<ReturnUser> Login([FromBody] LoginModel login, CancellationToken cancellationToken)
        {
            var user = await _operations.RepositoryManager.GetUserFromLoginAsync(login.Email, cancellationToken);

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

                    return new ReturnUser(user);
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

            throw new AccountControllerException("Unknown error logging in.");
        }

	    private async  Task<ExternalLoginResult> GetExternalLogin(ELoginProvider provider, string authenticationToken)
	    {
		    ExternalLoginResult externalLoginResult;
		    
		    switch (provider)
		    {
			    case ELoginProvider.Dexih:
				    externalLoginResult = null;
				    break;

			    case ELoginProvider.Google:
				    externalLoginResult = await GoogleTokenVerification(authenticationToken);
				    break;
			    case ELoginProvider.Microsoft:
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
        public async Task<ReturnUser> ExternalLogin([FromBody] ExternalLoginProviderModel externalProvider, CancellationToken cancellationToken)
        {
            if (ModelState.IsValid)
            {
	            if (string.IsNullOrEmpty(externalProvider.AuthenticationToken))
	            {
		            throw new AccountControllerException("There was no authentication token provided when attempting to authenticate through Microsoft.");
	            }
	            var externalLoginResult =
		            await GetExternalLogin(externalProvider.Provider, externalProvider.AuthenticationToken);
	            
	            var user = await _operations.RepositoryManager.GetUserFromLoginAsync(externalLoginResult.Provider.ToString(), externalLoginResult.ProviderKey, cancellationToken);
                
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
                        return new ReturnUser(user);
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
        public async Task<ReturnUser> Register([FromBody] RegisterModel register, CancellationToken cancellationToken)
        {
            if (ModelState.IsValid)
            {
	            var externalLoginResult = await GetExternalLogin(register.Provider, register.AuthenticationToken);

	            if (register.Provider != ELoginProvider.Dexih)
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
	            
	            var existingUser = await _operations.RepositoryManager.GetUserFromLoginAsync(register.Email, cancellationToken);

	            if (existingUser == null)
	            {
		            existingUser = await _operations.RepositoryManager.GetUserFromLoginAsync(register.UserName, cancellationToken);
	            }

                if(existingUser == null)
				{
					var user = new ApplicationUser
					{
						UserName = register.UserName,
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

						if (register.Provider == ELoginProvider.Dexih)
						{
							await _operations.RepositoryManager.CreateUserAsync(user, register.Password, cancellationToken);
						}
						else
						{
							user.Email = externalLoginResult.Email;
							user.EmailConfirmed = true;

							await _operations.RepositoryManager.CreateUserAsync(user, null, cancellationToken);
						}

						if (register.Provider != ELoginProvider.Dexih)
						{
							await _operations.RepositoryManager.AddLoginAsync(user, register.Provider, externalLoginResult.ProviderKey, cancellationToken);
							await _signInManager.SignInAsync(user, false);
							SendRegisteredEmail(user);
							return new ReturnUser(user);
						}
						else
						{
							if (register.Code != null)
							{
								await _operations.RepositoryManager.ConfirmEmailAsync(user, register.Code, cancellationToken);
								await _signInManager.SignInAsync(user, false);
								SendRegisteredEmail(user);
							}
							else
							{
								await SendConfirmationEmail(user, cancellationToken);
							}

							SendSupportMessage($"User registration succeeded for {user.Email}.",
								$"The user user {user.Email} is not registered.  Invitation status is {user.IsInvited}.");

							return new ReturnUser(user);
						}
					}
					catch (Exception ex)
					{
						SendSupportMessage($"User registration failed for {user.Email}.", ex.Message);
						throw;
					}
				}
				else
                {
					if(existingUser.IsRegistered) 
					{
                        throw new AccountControllerException("The specified username / email address is already registered.");
					}
					else 
					{
						existingUser.UserName = register.UserName;
						existingUser.Email = register.Email;
						existingUser.FirstName = register.Firstname;
						existingUser.LastName = register.Lastname;
						existingUser.Terms = register.Terms;
						existingUser.Subscription = register.Subscription;
						existingUser.IsRegistered = true;

						if (register.Provider != ELoginProvider.Dexih)
						{
							await _operations.RepositoryManager.AddLoginAsync(existingUser, register.Provider, externalLoginResult.ProviderKey, cancellationToken);
							await _signInManager.SignInAsync(existingUser, false);
							SendRegisteredEmail(existingUser);
						}
						else
						{
							if (string.IsNullOrEmpty(register.Code))
							{
								await SendConfirmationEmail(existingUser, cancellationToken);
							}
							else
							{
								await _operations.RepositoryManager.ConfirmEmailAsync(existingUser, register.Code, cancellationToken);
								await _signInManager.SignInAsync(existingUser, false);
								SendRegisteredEmail(existingUser);
							}
						}

						if (register.Provider == ELoginProvider.Dexih)
						{
							await _operations.RepositoryManager.AddPasswordAsync(existingUser, register.Password, cancellationToken);
						}

						await _operations.RepositoryManager.UpdateUserAsync(existingUser, cancellationToken);
						SendSupportMessage($"User registration completed for {existingUser.Email}.", $"The user user {existingUser.Email} is has registered.  Invitation status is {existingUser.IsInvited}.");

						return new ReturnUser(existingUser);
					}
                }

            }

            // If we got this far, something failed in the model.
	        SendSupportMessage($"User registration failed for {register.Email}.", "Unknown error");
            throw new AccountControllerException("Registration failed.");
        }
	    
	  	public async Task SendConfirmationEmail([FromBody] ApplicationUser user, CancellationToken cancellationToken)
        {
            // For more information on how to enable account confirmation and password reset please visit http://go.microsoft.com/fwlink/?LinkID=532713
            // Send an email with this link
	        var code = await _operations.RepositoryManager.GenerateEmailConfirmationTokenAsync(user, cancellationToken);
	        var url = Request.BaseUrl();
	        var verifyUrl = $"{url}/auth/verifyemail?email={user.Email}&code={HttpUtility.UrlEncode(code)}";

	        var parameters = new Dictionary<string, string>()
	        {
		        {"name", user.FirstName},
		        {"email", user.Email},
		        {"verifyUrl", verifyUrl},
		        {"code", code},
		        {"url", url},
	        };
	        
	        _emailSender.SendEmailTemplate("confirmEmail.html", "Confirm Email", parameters, new [] {user} );
	        
	  //       var path = Path.Combine(Directory.GetCurrentDirectory(), "Resources", "EmailTemplates", "confirmEmail.html");
			// var body = new StringBuilder(System.IO.File.ReadAllText(path));
			// body.Replace("{{url}}", url);
			// body.Replace("{{name}}", user.FirstName);
	  //       body.Replace("{{email}}", user.Email);
	  //       body.Replace("{{verifyUrl}}", verifyUrl);
			// body.Replace("{{code}}", code);
			// _emailSender.SendEmail(user.Email, "Confirm Email", null, body.ToString());
        }


	    
	    public void SendRegisteredEmail([FromBody] ApplicationUser user)
	    {
		    var parameters = new Dictionary<string, string>()
		    {
			    {"url", Request.BaseUrl()}
		    };
		    if (user.IsInvited)
		    {
			    _emailSender.SendEmailTemplate("userReady.html", "Integration Hub Registration is Completed.", parameters, new [] {user});
		    }
		    else
		    {
			    _emailSender.SendEmailTemplate("inviteRequired.html", "Integration Hub Invite Pending", parameters, new [] {user});
		    }

		    // if (user.IsInvited)
		    // {
			   //  path = Path.Combine(Directory.GetCurrentDirectory(), "Resources", "EmailTemplates", "userReady.html");
			   //  subject = "Integration Hub Registration is Completed.";
		    // }
		    // else
		    // {
			   //  path = Path.Combine(Directory.GetCurrentDirectory(), "Resources", "EmailTemplates", "inviteRequired.html");
			   //  subject = "Integration Hub Invite Pending";
		    // }
		    //
		    // var body = new StringBuilder(System.IO.File.ReadAllText(path));
		    // var url = (Request.IsHttps ? "https://" : "http://") + Request.Host.ToUriComponent();
		    // body.Replace("{{url}}", url);
		    // body.Replace("{{name}}", user.FirstName);
		    // body.Replace("{{email}}", user.Email);
		    //
		    // _emailSender.SendEmail(user.Email, subject, null, body.ToString());
	    }

	    public void SendSupportMessage(string subject, string message)
	    {
		    if (!string.IsNullOrEmpty(_operations.Config.SupportEmailAccount))
		    {
			    try
			    {
				    var user = new ApplicationUser()
				    {
					    Email = _operations.Config.SupportEmailAccount,
					    FirstName = "Support"
				    };

				    var parameters = new Dictionary<string, string>()
				    {
					    {"message", message},
					    {"url", Request.BaseUrl()},
				    };
				    
				    _emailSender.SendEmailTemplate("supportEmail.html", "Integration Hub Invite Pending", parameters, new [] {user});

				    // string path = Path.Combine(Directory.GetCurrentDirectory(), "Resources", "EmailTemplates",
					   //  "supportEmail.html");
				    // var body = new StringBuilder(System.IO.File.ReadAllText(path));
				    // body.Replace("{{message}}", message);
				    //
				    // _emailSender.SendEmail(_operations.Config.SupportEmailAccount, subject, null,
					   //  body.ToString());

			    }
			    catch (Exception ex)
			    {
				    _logger.LogError(ex, $"Error sending support message.  subject: {subject}, message: {message}");
			    }
		    }
	    }
	    

        // GET: /Account/ConfirmEmail
        [HttpPost("[action]")]
        [AllowAnonymous]
        public async Task<ReturnUser> ConfirmEmail([FromBody] ConfirmEmailModel email, CancellationToken cancellationToken)
        {
            if (email.Email == null || email.Code == null)
            {
                throw new AccountControllerException("The email and verification code were not completed.");
            }

	        var user = await _operations.RepositoryManager.GetUserFromLoginAsync(email.Email, cancellationToken);

	        if (user == null)
            {
                throw new AccountControllerException("There was an error verifying.  Check the email and verification code are entered correctly.");
            }

	        await _operations.RepositoryManager.ConfirmEmailAsync(user, email.Code, cancellationToken);
	        SendRegisteredEmail(user);
	        return new ReturnUser(user);
        }

        //
        // POST: /Account/GetUser
        [HttpPost("[action]")]
        [AllowAnonymous]
        public async Task<ReturnUser> GetUser(CancellationToken cancellationToken)
        {
            if(!_signInManager.IsSignedIn(User)) 
            {
                // throw new AccountControllerException("There is no user logged in.");
	            return null;
            }
            else
            {
	            var user = await  _operations.RepositoryManager.GetUserAsync(User, cancellationToken);
	            
	            return new ReturnUser(user);
            }
        }
	    
	    ///Sends out a ping request to all remote agents to indicate they are active.
	    [HttpPost("[action]")]
	    public async Task<DexihRemoteAgent[]> PingRemoteAgents([FromBody] ConnectionIdModel connectionId, CancellationToken cancellationToken)
	    {
		    var user = await GetApplicationUser(cancellationToken);
		    return await _remoteAgents.PingAgents(user, connectionId.ConnectionId, _operations.RepositoryManager, cancellationToken);
	    }

        //
        // POST: /Account/GetAuthorizedHubs
        [HttpPost("[action]")]
        [AllowAnonymous]
        public async Task<IEnumerable<DexihHub>> GetAuthorizedHubs(CancellationToken cancellationToken)
        {
            if(!_signInManager.IsSignedIn(User)) 
            {
                throw new AccountControllerException("Cannot get authorized hubs as there is no user logged in.");
            }

	        var applicationUser = await _operations.RepositoryManager.GetUserAsync(User, cancellationToken);

            if (applicationUser == null)
            {
                throw new AccountControllerException("User not logged in.");
            }

            var hubs = await _operations.RepositoryManager.GetUserHubs(applicationUser, cancellationToken);

            return hubs;
        }

	    private async Task<ExternalLoginResult> GoogleTokenVerification(string idToken)
	    {
		    var client = _clientFactory.CreateClient();

		    var apiResult = await client.GetAsync("https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=" + idToken);
		    if (!apiResult.IsSuccessStatusCode)
		    {
			    throw new AccountControllerException("The google api could not be contacted for authentication.  Error: " + apiResult.ReasonPhrase);
		    }

		    GoogleAuthModel googleAuthModel;
		    try
		    {
			    var response = await apiResult.Content.ReadAsStringAsync();
			    googleAuthModel = response.Deserialize<GoogleAuthModel>();

		    }
		    catch (Exception ex)
		    {
			    throw new AccountControllerException("Failed to parse the google authentication response.", ex);
		    }

		    if (!string.IsNullOrEmpty(googleAuthModel.error_description))
		    {
			    throw new AccountControllerException($"The google authentication returned the error {googleAuthModel.error_description}.");
		    }

		    if (string.IsNullOrEmpty(googleAuthModel.email_verified) || googleAuthModel.email_verified != "true")
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
			    Provider = ELoginProvider.Google
		    };

		    return result;
	    }
	    
	    private async Task<ExternalLoginResult> MicrosoftTokenVerification(string authenticationToken)
	    {
		    var client = _clientFactory.CreateClient();
		    var request = new HttpRequestMessage(HttpMethod.Get, "https://graph.microsoft.com/v1.0/me");
		    request.Headers.Authorization = new AuthenticationHeaderValue("Bearer", authenticationToken);
		    var apiResult = await client.SendAsync(request);
		    if (!apiResult.IsSuccessStatusCode)
		    {
			    throw new AccountControllerException("The microsoft authentication API could not be contacted for authentication.  Error: " + apiResult.ReasonPhrase);
		    }

		    MicrosoftAuthModel microsoftAuthModel;
		    try
		    {
			    microsoftAuthModel = (await apiResult.Content.ReadAsStringAsync()).Deserialize<MicrosoftAuthModel>();
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
			    Provider = ELoginProvider.Microsoft
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
        // [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public async Task<ReturnUser> AddExternalLogin([FromBody] ExternalLoginModel externalLoginModel, CancellationToken cancellationToken)
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
		            var user = await _operations.RepositoryManager.GetUserAsync(User, cancellationToken);

		            if (user == null || !user.IsRegistered)
		            {
			            throw new AccountControllerException("There is no user currently logged in.");
		            }

		            await _operations.RepositoryManager.AddLoginAsync(user, info.Provider, info.ProviderKey, cancellationToken);
		            await _signInManager.SignInAsync(user, isPersistent: false);
		            return new ReturnUser(user);
	            }
		          
	            throw new AccountControllerException("External login provider not current.");

            }

            throw new AccountControllerException("Registration failed");
        }
	    
        // POST: /Account/ExternalLogins
        [HttpPost("[action]")]
		// [AllowAnonymous]
		[ValidateAntiForgeryToken]
		public async Task<IEnumerable<UserLoginInfo>> ExternalLogins(CancellationToken cancellationToken)
		{
			if (!ModelState.IsValid)
			{
                throw new AccountControllerException("The update details failed.");
            }

            var currentUser = await GetApplicationUser(cancellationToken);
			if (currentUser == null)
			{
				// Don't reveal that the user does not exist
                throw new AccountControllerException("The update details failed as the user could not be found.");
            }

			var result = await _operations.RepositoryManager.GetLoginsAsync(currentUser, cancellationToken);
			return result;
		}
	    


		// POST: /Account/RemoveExternalLogin
		[HttpPost("[action]")]
		// [AllowAnonymous]
		[ValidateAntiForgeryToken]
		public async Task RemoveExternalLogin([FromBody] RemoveExternalLoginModel externalProvider, CancellationToken cancellationToken)
		{
			if (!ModelState.IsValid)
			{
                throw new AccountControllerException("The update details failed.");
            }
			
            var currentUser = await GetApplicationUser(cancellationToken);

			if (currentUser == null)
			{
				// Don't reveal that the user does not exist
                throw new AccountControllerException("The update details failed as the user could not be found.");
            }

			await _operations.RepositoryManager.RemoveLoginAsync(currentUser, externalProvider.Provider,
				externalProvider.ProviderKey, cancellationToken);
			await _signInManager.SignInAsync(currentUser, isPersistent: false);
		}


        // GET: /Account/ResendConfirmationEmail
        [HttpPost("[action]")]
        [AllowAnonymous]
        public async Task ResendConfirmationEmail([FromBody] EmailModel email, CancellationToken cancellationToken)
        {
	        var user = await _operations.RepositoryManager.GetUserFromLoginAsync(email.Email, cancellationToken);
            await SendConfirmationEmail(user, cancellationToken);
        }

        //
        // POST: /Account/ForgotPassword
        [HttpPost("[action]")]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public async Task ForgotPassword([FromBody] LoginModel login, CancellationToken cancellationToken)
        {
            if (ModelState.IsValid)
            {
	            var user = await _operations.RepositoryManager.GetUserFromLoginAsync(login.Email, cancellationToken);
	            
                if (user == null || !user.EmailConfirmed)
                {
                    // Don't reveal that the user does not exist or is not confirmed
                    throw new AccountControllerException("The reset password failed.");
                }

                // For more information on how to enable account confirmation and password reset please visit http://go.    crosoft.com/fwlink/?LinkID=532713
                // Send an email with this link
                var url = Request.BaseUrl();
                var code = await _operations.RepositoryManager.GeneratePasswordResetTokenAsync(user, cancellationToken);
                var forgotUrl = $"{url}/auth/forgot-password?email={user.Email}&code={HttpUtility.UrlEncode(code)}";
                var parameters = new Dictionary<string, string>()
                {
	                {"code", code},
	                {"forgotUrl", forgotUrl},
	                {"url", url}
                };
                
                _emailSender.SendEmailTemplate("forgotPassword.html", "Reset Password", parameters, new [] {user});
                
				// var url = (Request.IsHttps ? "https://" : "http://") + Request.Host.ToUriComponent();
	   //          var path = Path.Combine(Directory.GetCurrentDirectory(), "Resources", "EmailTemplates", "forgotPassword.html");
				// var body = new StringBuilder(System.IO.File.ReadAllText(path));
				// body.Replace("{{url}}", url);
	   //          body.Replace("{{email}}", user.Email);
				// body.Replace("{{name}}", user.FirstName);
				// body.Replace("{{code}}", code);
				// _emailSender.SendEmail(user.Email, "Reset Password", null, body.ToString());

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
        public async Task ResetPassword([FromBody] ResetPasswordModel resetPassword, CancellationToken cancellationToken)
        {
            if (!ModelState.IsValid)
            {
                throw new AccountControllerException("The reset password failed.");
            }
            
	        var user = await _operations.RepositoryManager.GetUserFromLoginAsync(resetPassword.Email, cancellationToken);
            await _operations.RepositoryManager.ResetPasswordAsync(user, resetPassword.Code, resetPassword.Password, cancellationToken);
        }

        // POST: /Account/UpdateDetails
        [HttpPost("[action]")]
		// [AllowAnonymous]
		[ValidateAntiForgeryToken]
		public async Task UpdateDetails([FromBody] UpdateDetails updateDetails, CancellationToken cancellationToken)
		{
			if (!ModelState.IsValid)
			{
                throw new AccountControllerException("The update details failed.");
            }

            var currentUser = await GetApplicationUser(cancellationToken);

			if (currentUser == null)
			{
				// Don't reveal that the user does not exist
                throw new AccountControllerException("The update details failed as the user could not be found.");
            }

			currentUser.UserName = updateDetails.UserName;
            currentUser.FirstName = updateDetails.FirstName;
			currentUser.LastName = updateDetails.LastName;
			currentUser.Subscription = updateDetails.Subscription;
			currentUser.NotifySupportMessage = updateDetails.NotifySupportMessage;
			currentUser.NotifyPrivateMessage = updateDetails.NotifyPrivateMessage;

			await _operations.RepositoryManager.UpdateUserAsync(currentUser, cancellationToken);
        }

	    //
	    // POST: /Account/ChangePassword
	    [HttpPost("[action]")]
	    [ValidateAntiForgeryToken]
	    public async Task ChangePassword([FromBody] ChangePasswordModel changePassword, CancellationToken cancellationToken)
	    {
		    if (!ModelState.IsValid)
		    {
			    throw new AccountControllerException("The reset password failed.");
		    }
		    var user = await GetApplicationUser(cancellationToken);
		    if (user == null)
		    {
			    // Don't reveal that the user does not exist
			    throw new AccountControllerException("The reset password failed.");
		    }
		    
		    await _operations.RepositoryManager.ChangePasswordAsync(user, changePassword.Password, changePassword.NewPassword, cancellationToken);
	    }


        // POST: /Account/SaveHub
        [HttpPost("[action]")]
        [ValidateAntiForgeryToken]
        public async Task<DexihHub> SaveHub([FromBody] DexihHub hub, CancellationToken cancellationToken)
        {
            if (!ModelState.IsValid)
            {
                throw new AccountControllerException("The save hub failed.");
            }

	        var user = await GetApplicationUser(cancellationToken);
	        if (user == null)
	        {
		        throw new AccountControllerException("The save hub failed.");
	        }

	        var existingHub = hub.HubKey > 0;

            if(user.IsAdmin || user.HubQuota > 0 || existingHub)
            {
                var repositoryManager = _operations.RepositoryManager;
                var result = await repositoryManager.SaveHub(hub, user, cancellationToken);

		        // broadcast the update so any connected browsers will see the new hub.
		        var userIds = await repositoryManager.GetHubUserIds(hub.HubKey, cancellationToken);
                if (userIds != null)
                {
                    await _operations.BroadcastUsersMessageAsync(userIds, EClientCommand.HubUpdate, result, cancellationToken);
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
		public async Task DeleteHubs([FromBody] DeleteHubs deleteHubs, CancellationToken cancellationToken)
		{
			if (!ModelState.IsValid)
			{
                throw new AccountControllerException("The delete hubs failed.");
            }

			var user = await GetApplicationUser(cancellationToken);

			if (user == null)
			{
				throw new AccountControllerException("The delete hubs failed.");
			}

			var repositoryManager = _operations.RepositoryManager;

			var hubs = await repositoryManager.DeleteHubs(user, deleteHubs.HubKeys, cancellationToken);
			
			if (!user.IsAdmin)
			{
				user.HubQuota += hubs.Length;
			}

			foreach(var hubKey in deleteHubs.HubKeys)
			{
				var userIds = await repositoryManager.GetHubUserIds(hubKey, cancellationToken);
                if (userIds != null)
                {
                    await _operations.BroadcastUsersMessageAsync(userIds, EClientCommand.HubDelete, new[] { hubKey }, cancellationToken);
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
        
        // POST: /Account/GetUserRemoteAgents
	    [HttpPost("[action]")]
	    [ValidateAntiForgeryToken]
	    public async Task<IEnumerable<DexihRemoteAgent>> GetUserRemoteAgents(CancellationToken cancellationToken)
	    {
		    var user = await GetApplicationUser(cancellationToken);

		    if (user == null)
		    {
			    throw new AccountControllerException("Current user not found.");
		    }

		    var remoteAgents = await _operations.RepositoryManager.GetRemoteAgents(user, cancellationToken);
		    return remoteAgents;
	    }
	    
	    // POST: /Account/RevokeUserToken
	    [HttpPost("[action]")]
	    [ValidateAntiForgeryToken]
	    public async Task SaveRemoteAgent([FromBody] DexihRemoteAgent hubRemoteAgent, CancellationToken cancellationToken)
	    {   
		    var user = await GetApplicationUser(cancellationToken);

		    if (user == null)
		    {
			    throw new AccountControllerException("The save remote agent failed.");
		    }
		    await _operations.RepositoryManager.SaveRemoteAgent(user.Id, hubRemoteAgent, cancellationToken);
	    }


	    // POST: /Account/GetUserToken
	    [HttpPost("[action]")]
	    [ValidateAntiForgeryToken]
	    public async Task<RemoteAgentUserToken> CreateRemoteAgent(CancellationToken cancellationToken)
	    {
		    var user = await GetApplicationUser(cancellationToken);

		    if (user == null)
		    {
			    throw new AccountControllerException("The create remote agent token failed.");
		    }

		    var remoteAgentId = Guid.NewGuid().ToString();
		    var token = await _operations.RepositoryManager.GenerateRemoteUserTokenAsync(user, remoteAgentId, cancellationToken);

		    var dbRemoteAgent = new DexihRemoteAgent()
		    {
			    RemoteAgentId = remoteAgentId,
			    RestrictIp = false,
			    Name = "Unnamed",
			    UserId = user.Id,
			    HashedToken = SecureHash.CreateHash(token)
		    };
		    
		    await _operations.RepositoryManager.SaveRemoteAgent(user.Id, dbRemoteAgent, cancellationToken);

		    await _operations.BroadcastUsersMessageAsync(new [] { user.Id}, EClientCommand.RemoteAgentUpdateKey, dbRemoteAgent, cancellationToken);

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
	    public async Task<RemoteAgentUserToken> RefreshRemoteAgentToken([FromBody] RefreshRemoteAgentId refreshRemoteAgentId, CancellationToken cancellationToken)
	    {
		    var user = await GetApplicationUser(cancellationToken);

		    if (user == null)
		    {
			    throw new AccountControllerException("The create user token failed.");
		    }

		    var dbRemoteAgent = await _operations.RepositoryManager.GetRemoteAgent(refreshRemoteAgentId.RemoteAgentKey, cancellationToken);

		    var userToken = await _operations.RepositoryManager.GenerateRemoteUserTokenAsync(user, dbRemoteAgent.RemoteAgentId, cancellationToken);
			
		    // hash the token so that it's not stored in plain text.
		    var hashedToken = SecureHash.CreateHash(userToken);

		    dbRemoteAgent.HashedToken = hashedToken;
		    await _operations.RepositoryManager.SaveRemoteAgent(user.Id, dbRemoteAgent, cancellationToken);
		    
	    
		    // disconnect any running agents with this id
		    await _remoteAgents.RestartAgent(user.Id, refreshRemoteAgentId.RemoteAgentKey, true, _operations.RepositoryManager, cancellationToken);

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
	    public async Task RemoveRemoteAgents([FromBody] RemoveRemoteAgents removeRemoteAgents, CancellationToken cancellationToken)
	    {
		    var user = await GetApplicationUser(cancellationToken);
		    if (user == null)
		    {
			    throw new AccountControllerException("The remove user token failed.");
		    }

		    var exceptions = new ConcurrentQueue<Exception>();

		    foreach(var remoteAgentKey in removeRemoteAgents.RemoteAgentKeys)
		    {
			    try
			    {
				    await _operations.RepositoryManager.DeleteRemoteAgent(user, remoteAgentKey, cancellationToken);
		    
				    // disconnect any running agents.
				    await _remoteAgents.RestartAgent(user.Id, remoteAgentKey, true, _operations.RepositoryManager, cancellationToken);
				    await _operations.BroadcastUsersMessageAsync(new [] { user.Id}, EClientCommand.RemoteAgentDeleteKey, remoteAgentKey, cancellationToken);
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
	    
     //   [HttpGet("[action]")]
	    //[AllowAnonymous]
     //   [ResponseCache(Duration = 3600)]
     //   public CacheManager GetGlobalCache()
     //   {
     //       try
     //       {
     //           return _cache.GetOrCreate($"GLOBAL_CACHE", entry =>
     //           {
	    //            _logger.LogInformation("Loading global cache.");
	                
	    //            var version = Assembly.GetExecutingAssembly().GetCustomAttribute<AssemblyInformationalVersionAttribute>().InformationalVersion;
	    //            var buildDate = System.IO.File.GetLastWriteTime(Assembly.GetExecutingAssembly().Location);

	                
     //               var cache = new CacheManager(0, "");
     //               var repositoryManager = _operations.RepositoryManager;
     //               var returnValue = cache.LoadGlobal(version, buildDate, repositoryManager.DbContext);
     //               cache.GoogleClientId = _operations.Config.GoogleClientId;
     //               cache.MicrosoftClientId = _operations.Config.MicrosoftClientId;
     //               cache.GoogleMapsAPIKey = _operations.Config.GoogleMapsAPIKey;

     //               if (returnValue)
     //               {
	    //                return cache;
     //               }

     //               throw new AccountControllerException("Could not get the global cache");
     //           });
     //       }
     //       catch (Exception ex)
     //       {
     //           throw new AccountControllerException($"Could not get the global cache. {ex.Message}", ex);
     //       }
     //   }

        [HttpGet("[action]")]
        [AllowAnonymous]
        [ResponseCache(Duration = 60)]
        public CacheManager GetGlobalCache()
        {
            try
            {
	            return _cache.MemoryCache.Get<CacheManager>("GLOBAL_CACHE");
            }
            catch (Exception ex)
            {
                throw new AccountControllerException($"Could not get the global cache. {ex.Message}", ex);
            }
        }

        [HttpPost("[action]")]
        public async Task LogError([FromBody] LogError logError, CancellationToken cancellationToken)
        {
	        var user = await GetApplicationUser(cancellationToken);
	        _errorLogger.Log(logError.message, logError.details, logError.context, logError.url, user?.Email??"Unknown");
        }
	    
	    /// <summary>
	    /// Cancels any running tasks 
	    /// </summary>
	    /// <returns></returns>
	    [HttpPost("[action]")]
	    //[ValidateHub(EPermission.User)]
	    public async Task CancelTasks([FromBody] ManagedTask[] tasks, CancellationToken cancellationToken)
	    {
		    _logger.LogTrace(LoggingEvents.HubRunDatalinks, "AccountController.CancelTasks {references}", string.Join(",", tasks.Select(c=>c.TaskId)));

		    var repositoryManager = _operations.RepositoryManager;
		    await _remoteAgents.CancelTasks(tasks, repositoryManager, cancellationToken);
	    }
	    
	    /// <summary>
	    /// Cancels any running tasks 
	    /// </summary>
	    /// <returns></returns>
	    [HttpPost("[action]")]
	    //[ValidateHub(EPermission.User)]
	    public async Task<string> RestartAgent([FromBody] RestartAgentsParameter restartAgents, CancellationToken cancellationToken)
	    {
		    var user = await GetApplicationUser(cancellationToken);
		    if (user == null)
		    {
			    throw new AccountControllerException("Could not find the current user.");
		    }
		    
		    _logger.LogTrace(LoggingEvents.HubRestartAgent, "AccountController.HubRestartAgent {references}", string.Join(",", restartAgents.InstanceId));

		    var repositoryManager = _operations.RepositoryManager;
		    return await _remoteAgents.RestartAgent(user.Id, restartAgents.DownloadUrl, restartAgents.InstanceId,  restartAgents.Force, repositoryManager, cancellationToken);
	    }
	    
	    /// <summary>
	    /// Cancels any running tasks 
	    /// </summary>
	    /// <returns></returns>
	    [HttpPost("[action]")]
	    //[ValidateHub(EPermission.User)]
	    public async Task<DexihIssue> SaveIssue([FromBody] DexihIssue issue, CancellationToken cancellationToken)
	    {
		    var user = await GetApplicationUser(cancellationToken);
		    if (user == null)
		    {
			    throw new AccountControllerException("Could not find the current user.");
		    }
		    
		    _logger.LogTrace(LoggingEvents.SaveIssue, "AccountController.SaveIssue {references}", issue.Name);
		    
		    var newIssue = await _operations.RepositoryManager.SaveIssueAsync(issue, _operations.Config.GitHubAccessToken, user, cancellationToken);
		    
		    await SendIssueMessages(newIssue, "A new issue was created",
			    "A new issue was created, please review the link or log into the integration hub for more information", cancellationToken);
		    return newIssue;
	    }
	    
	    /// <summary>
	    /// Cancels any running tasks 
	    /// </summary>
	    /// <returns></returns>
	    [HttpGet("[action]")]
	    public async Task<DexihIssue[]> GetIssues(CancellationToken cancellationToken)
	    {
		    var user = await GetApplicationUser(cancellationToken);
		    if (user == null)
		    {
			    throw new AccountControllerException("Could not find the current user.");
		    }
		    
		    _logger.LogTrace(LoggingEvents.GetIssues, "AccountController.GetIssues");
		    return await _operations.RepositoryManager.GetUserIssues(user, cancellationToken);
	    }
	    
	    /// <returns></returns>
	    [HttpPost("[action]")]
	    //[ValidateHub(EPermission.User)]
	    public async Task<DexihIssue> GetIssue([FromBody] GetIssue getIssue, CancellationToken cancellationToken)
	    {
		    var user = await GetApplicationUser(cancellationToken);
		    if (user == null)
		    {
			    throw new AccountControllerException("Could not find the current user.");
		    }
		    
		    _logger.LogTrace(LoggingEvents.GetIssue, "AccountController.GetIssue {references}", getIssue.IssueKey);
		    return await _operations.RepositoryManager.GetIssue(user, getIssue.IssueKey, cancellationToken);
	    }
	    
	    /// <returns></returns>
	    [HttpPost("[action]")]
	    //[ValidateHub(EPermission.User)]
	    public async Task<DexihIssue> AddIssueComment([FromBody] IssueComment issueComment, CancellationToken cancellationToken)
	    {
		    var user = await GetApplicationUser(cancellationToken);
		    if (user == null)
		    {
			    throw new AccountControllerException("Could not find the current user.");
		    }

		    var newIssueComment = new DexihIssueComment()
		    {
			    IssueKey = issueComment.IssueKey,
			    Comment = issueComment.Comment,
			    UserId = user.Id,
		    };
		    
		    _logger.LogTrace(LoggingEvents.AddIssueComment, "AccountController.AddIssueComment {references}", issueComment.IssueKey);
		    await _operations.RepositoryManager.AddIssueComment(user, newIssueComment, cancellationToken);
		    var newIssue = await _operations.RepositoryManager.GetIssue(user, issueComment.IssueKey, cancellationToken);

		    await SendIssueMessages(newIssue, "A comment was added to an issue",
			    "A comment was added to an existing issue, please review the link or log into the integration hub for more information", cancellationToken);
		    
		    return newIssue;
	    }
	    
	    public async Task SendIssueMessages(DexihIssue issue, string subject, string message, CancellationToken cancellationToken)
	    {
		    try
		    {
			    var users = (await _operations.RepositoryManager.GetIssueUsers(issue, cancellationToken)).ToList();
			    users.Add(new ApplicationUser() {Email = _operations.Config.SupportEmailAccount, FirstName = "support"});

			    var url = Request.BaseUrl();
			    
			    var parameters = new Dictionary<string, string>()
			    {
				    {"message", message},
				    {"link", $"{url}/hubs/index/support/edit/" + issue.Key},
				    {"url", url},
			    };
			    
			    _emailSender.SendEmailTemplate("issueEmail.html", $"{subject}: {issue.Name}", parameters, users);
			    
			    // var path = Path.Combine(Directory.GetCurrentDirectory(), "Resources", "EmailTemplates", "issueEmail.html");
			    // var body = new StringBuilder(System.IO.File.ReadAllText(path));
			    // var url = (Request.IsHttps ? "https://" : "http://") + Request.Host.ToUriComponent();
			    // body.Replace("{{url}}", url);
			    // body.Replace("{{message}}", message);
			    //
			    // var issueUrl = $"{url}/hubs/index/support/edit/{issue.Key}";
			    // body.Replace("{{link}}", issueUrl);
			    //
			    // var newSubject = $"{subject}: issue: {issue.Name}";
			    //
			    // foreach (var user in users.Where(c => c.NotifySupportMessage))
			    // {
				   //  var bodyString = body.ToString().Replace("{{user}}", user.UserName);
				   //  _emailSender.SendEmail(user.Email, newSubject, null,bodyString);
			    // }
			    //
			    // if (_operations.Config.SupportEmailAccount != null)
			    // {
				   //  var bodyString = body.ToString().Replace("{{user}}", "support");
				   //  _emailSender.SendEmail(_operations.Config.SupportEmailAccount, newSubject, null,
					  //   bodyString);
			    // }
		    }
		    catch (Exception ex)
		    {
			    _logger.LogError(ex, $"Error sending support message.  subject: {subject}, message: {message}");
		    }
	    }
    }
}
