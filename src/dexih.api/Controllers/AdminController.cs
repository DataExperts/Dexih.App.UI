﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using dexih.api.Controllers;
using dexih.api.Models;
using dexih.api.Services;
using dexih.api.Services.Message;
using dexih.api.Services.Operations;
using dexih.repository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using Dexih.Utils.CopyProperties;

namespace dexih.api
{
	[Route("api/[controller]")]
	[RequestFormSizeLimit()]
	[Authorize(Roles = "ADMINISTRATOR")]
	[ValidateAntiForgeryToken]
	[ApiExceptionFilter]
    [ApiFilter]
	public class AdminController : Controller
	{
		public AdminController(
				DexihRepositoryContext dbContext,
				IEmailSender emailSender,
			   	IDexihOperations operations,
			   	ILoggerFactory loggerFactory
			   )
		{
			DbContext = dbContext;
			_emailSender = emailSender;
			_operations = operations;
			_logger = loggerFactory.CreateLogger("HubController");
		}

		private DexihRepositoryContext DbContext { get; }
		private readonly IEmailSender _emailSender;
		private readonly IDexihOperations _operations;
		private readonly ILogger _logger;

		[HttpPost("[action]")]
		public async Task<ApplicationUser[]> GetUsers([FromBody] GetUsersModel getUsers)
		{
			try
			{
				var maxResults = getUsers.MaxResults > 0 ? getUsers.MaxResults : 100;

				if (string.IsNullOrEmpty(getUsers.SearchString))
				{
					var users = await DbContext.Users
					  .Take(getUsers.MaxResults).ToArrayAsync();

                    return users;
				}
				else
				{
					var searchString = getUsers.SearchString.Normalize();

					var users = await DbContext.Users.Where(c =>
						  c.Email.Normalize().Contains(getUsers.SearchString) ||
						  c.FirstName.Normalize().Contains(getUsers.SearchString) ||
						c.LastName.Normalize().Contains(getUsers.SearchString))
					  .Take(getUsers.MaxResults).ToArrayAsync();

                    return users;
				}
			} catch(Exception ex)
			{
                throw new AdminControllerException($"Error getting users: {ex.Message}", ex);
			}
		}

		[HttpPost("[action]")]
		public async Task<UserModel> GetUser([FromBody] ApplicationUser getUser)
		{
			try
			{
				var applicationUser = await _operations.RepositoryManager.GetUserFromEmail(getUser.Email);
				var user = new UserModel();
				applicationUser.CopyProperties(user, true);

				user.Logins = await _operations.RepositoryManager.GetLoginsAsync(applicationUser);
                return user;
			}
			catch (Exception ex)
			{
                throw new AdminControllerException($"Error getting user: {ex.Message}", ex);
            }
        }

		[HttpPost("[action]")]
		public async Task InviteUsers([FromBody] InviteUsers inviteUsers)
		{
			try 
			{
				var emailsNotInvited = new List<string>();

				var invitedUsers = new List<ApplicationUser>();

				foreach (var email in inviteUsers.Emails)
				{
					var user = await _operations.RepositoryManager.GetUserFromEmail(email);

					if(user != null && user.IsInvited) {
						emailsNotInvited.Add(email);
					}
					else if(user != null)
					{
						user.IsInvited = true;
						user.HubQuota = inviteUsers.HubQuota;
						user.InviteQuota = inviteUsers.InviteQuota;
						user.UserRole = inviteUsers.Role;
                        await _operations.RepositoryManager.UpdateUserAsync(user);
						invitedUsers.Add(user);
					}
					else 
					{
						user = new ApplicationUser()
						{
							Email = email,
                            UserName = email,
							IsInvited = true,
							HubQuota = inviteUsers.HubQuota,
							InviteQuota = inviteUsers.InviteQuota,
							IsEnabled = true
						};
                        await _operations.RepositoryManager.CreateUserAsync(user);
						invitedUsers.Add(user);
					}
				}
				await SendInvites(invitedUsers);

				if (emailsNotInvited.Count > 0)
				{
                    throw new AdminControllerException("The following emails were not added: " + string.Join(", ", emailsNotInvited));
				}
			}
			catch (Exception ex)
			{
                throw new AdminControllerException($"Error inviting users: {ex.Message}", ex);
			}
		}

		private async Task SendInvites(IEnumerable<ApplicationUser> users) 
		{
			var url = (Request.IsHttps ? "https://" : "http://") + Request.Host.ToUriComponent();

			foreach (var user in users)
			{
				string template;
				string code;
				string subject;
				
				if (user.EmailConfirmed)
				{
					template = "userReady.html";
					subject = "Information Hub Access Granted!";
					code = "";
				}
				else
				{
					template = "invite.html";
					code = await _operations.RepositoryManager.GenerateEmailConfirmationTokenAsync(user);
					subject = "Information Hub Invitation!";
				}

				var path = Path.Combine(Directory.GetCurrentDirectory(), "Resources", "EmailTemplates", template);
				var bodyOriginal = System.IO.File.ReadAllText(path);
				var body = new StringBuilder(bodyOriginal.Replace("{{url}}", url));

				body.Replace("{{code}}", code);
				var name = string.IsNullOrEmpty(user.FirstName) ? "there" : user.FirstName;
				body.Replace("{{name}}", name);
				body.Replace("{{email}}", user.Email);

				_emailSender.SendEmail(user.Email, subject, null, body.ToString());
			}
		}

		[HttpPost("[action]")]
		public async Task AddUsers([FromBody] AddUsers addUsers)
		{
			try
			{
				var inviteUsers = new List<ApplicationUser>();

				foreach (var user in addUsers.Users)
				{
					var appUser = await _operations.RepositoryManager.GetUserFromEmail(user.Email);
					if (appUser != null)
					{
                        throw new AdminControllerException($"The email address {user.Email} already exists and cannot be added.", null);
					}
					if(string.IsNullOrEmpty(user.UserName))
					{
						user.UserName = user.Email;
					}
					await _operations.RepositoryManager.CreateUserAsync(user);
					if (user.IsInvited && !user.IsRegistered)
					{
						inviteUsers.Add(user);
					}
				}

				await SendInvites(inviteUsers);

				
			}
			catch (Exception ex)
			{
                throw new AdminControllerException($"Error adding users: {ex.Message}", ex);
            }
        }

		[HttpPost("[action]")]
		public async Task UpdateUsers([FromBody] SaveUsers saveUsers)
		{
			try
			{
				foreach (var user in saveUsers.Users)
				{
					var appUser = await _operations.RepositoryManager.GetUserFromEmail(user.Email);
					if (appUser == null)
					{
                        throw new AdminControllerException($"The email address {user.Email} does not exist and cannot be updated.", null);
					}

					appUser.FirstName = user.FirstName;
					appUser.LastName = user.LastName;
					appUser.Terms = user.Terms;
					appUser.Subscription = user.Subscription;
					appUser.HubQuota = user.HubQuota;
					appUser.InviteQuota = user.InviteQuota;
					appUser.IsInvited = user.IsInvited;
					appUser.IsRegistered = user.IsRegistered;
					appUser.IsEnabled = user.IsEnabled;
					appUser.EmailConfirmed = user.EmailConfirmed;
					appUser.LockoutEnabled = user.LockoutEnabled;
					appUser.LockoutEnd = user.LockoutEnd;
					appUser.PhoneNumber = user.PhoneNumber;
					appUser.PhoneNumberConfirmed = user.PhoneNumberConfirmed;
					appUser.TwoFactorEnabled = user.TwoFactorEnabled;
					await _operations.RepositoryManager.UpdateUserAsync(appUser);
				}
			}
			catch (Exception ex)
			{
                throw new AdminControllerException($"Error updating users: {ex.Message}", ex);
            }
        }


		[HttpPost("[action]")]
		public async Task RevokeUsers([FromBody] EmailsModel users)
		{
			try
			{
				foreach (var email in users.Emails)
				{
					var appUser = await _operations.RepositoryManager.GetUserFromEmail(email);
					if (appUser == null)
					{
                        throw new AdminControllerException($"The email address {email} does not exist and cannot be revoked.", null);
					}
					appUser.IsEnabled = false;

					await _operations.RepositoryManager.UpdateUserAsync(appUser);
				}
			}
			catch (Exception ex)
			{
                throw new AdminControllerException($"Error revoking user permissions: {ex.Message}", ex);
            }
        }

		// POST: /Account/RemoveExternalLogin
		[HttpPost("[action]")]
		[AllowAnonymous]
		[ValidateAntiForgeryToken]
		public async Task RemoveExternalLogin([FromBody] RemoveExternalLoginModel externalProvider)
		{
            try
            {
	            var user = await _operations.RepositoryManager.GetUserFromEmail(externalProvider.Email);

                if (user == null)
                {
                    throw new AdminControllerException($"The user with the email {externalProvider.Email} could not be found.", null);
                }

                await _operations.RepositoryManager.RemoveLoginAsync(user, externalProvider.Provider, externalProvider.ProviderKey);
            }
            catch (Exception ex)
            {
                throw new AdminControllerException($"Error removing external login: {ex.Message}", ex);
            }
        }

		[HttpPost("[action]")]
		public async Task EnableUsers([FromBody] EmailsModel users)
		{
			try
			{
				foreach (var email in users.Emails)
				{
					var appUser = await _operations.RepositoryManager.GetUserFromEmail(email);
					if (appUser == null)
					{
                        throw new AdminControllerException($"The email address {email} does not exist and cannot be enabled.", null);

                    }
					appUser.IsEnabled = true;
					appUser.LockoutEnd = null;
					appUser.AccessFailedCount = 0;
					
					await _operations.RepositoryManager.UpdateUserAsync(appUser);
				}
			}
			catch (Exception ex)
			{
                throw new AdminControllerException($"Error enabling users: {ex.Message}", ex);
            }
        }

		[HttpPost("[action]")]
		public async Task DeleteUsers([FromBody] EmailsModel users)
		{
			try
			{
				foreach (var email in users.Emails)
				{
					var user = await _operations.RepositoryManager.GetUserFromEmail(email);
					if(user != null)
					{
						await _operations.RepositoryManager.DeleteUserAsync(user);
					}
				}
			}
			catch (Exception ex)
			{
                throw new AdminControllerException($"Error deleting users: {ex.Message}", ex);
            }
        }

		[HttpPost("[action]")]
		public async Task ReInviteUsers([FromBody] EmailsModel users)
		{
			try
			{
				var emails = new List<ApplicationUser>();

				foreach (var email in users.Emails)
				{
					var dbUser = await _operations.RepositoryManager.GetUserFromEmail(email);
					if (dbUser == null)
					{
                        throw new AdminControllerException($"The email address {email} has not been created.", null);
                    }
                    if (!dbUser.IsRegistered)
					{
						emails.Add(dbUser);
					}

					if (!dbUser.IsInvited)
					{
						dbUser.IsInvited = true;
						await _operations.RepositoryManager.UpdateUserAsync(dbUser);
					}
				}

				await SendInvites(emails);
				
			}
			catch (Exception ex)
			{
                throw new AdminControllerException($"Error re-inviting users: {ex.Message}", ex);
            }
        }
	}
}
