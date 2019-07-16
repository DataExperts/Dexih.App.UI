using System;
using System.Threading.Tasks;
using dexih.api.Services.Operations;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Logging;

namespace dexih.api
{
	[Authorize]
	public class BrowserHub : Hub
	{
		private readonly IServiceProvider _serviceProvider;
		private readonly ILogger _logger;

		public BrowserHub(IServiceProvider serviceProvider, ILoggerFactory loggerFactory)
		{
			_serviceProvider = serviceProvider;
			_logger = loggerFactory.CreateLogger("Browser");
		}

		public override async Task OnConnectedAsync()
		{
			_logger.LogDebug($"New connection from {Context.UserIdentifier}");
			await base.OnConnectedAsync();
		}

		public async Task<string> Connect()
		{
			var operations = (IDexihOperations)_serviceProvider.GetService(typeof(IDexihOperations));
			var applicationUser = await operations.RepositoryManager.GetUser(Context.User);
			var hubs = await operations.RepositoryManager.GetUserHubs(applicationUser);

			foreach (var hub in hubs)
			{
				await Groups.AddToGroupAsync(Context.ConnectionId, hub.HubKey.ToString());
			}

			_logger.LogDebug($"Connected from {Context.UserIdentifier}");

			return Context.ConnectionId;
		}
	}
}
