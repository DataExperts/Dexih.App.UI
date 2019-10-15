using System;
using System.Threading;
using System.Threading.Tasks;
using dexih.api.Services.Operations;
using dexih.api.Services.Remote;
using dexih.functions;
using dexih.operations;
using dexih.repository;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Caching.Distributed;
using Microsoft.Extensions.Logging;


namespace dexih.api.Hubs
{
	[Authorize]
	public class RemoteAgentHub : Hub
	{
		private readonly IServiceProvider _serviceProvider;
		private readonly ILogger _logger;
		private readonly IDistributedCache _distributedCache;
		
		public RemoteAgentHub(IServiceProvider serviceProvider, ILoggerFactory loggerFactory, IDistributedCache distributedCache)
		{
			_serviceProvider = serviceProvider;
			_logger = loggerFactory.CreateLogger("Browser");
			_distributedCache = distributedCache;
		}

		public override async Task OnDisconnectedAsync(Exception exception)
		{
			_logger.LogDebug($"Disconnect from {Context.UserIdentifier}");
			
			var remoteAgents = (IRemoteAgents)_serviceProvider.GetService(typeof(IRemoteAgents));
			var operations = (IDexihOperations)_serviceProvider.GetService(typeof(IDexihOperations));
			await remoteAgents.DisconnectRemoteAgent((string)Context.Items["InstanceId"], operations, CancellationToken.None);
			await base.OnDisconnectedAsync(exception);
		}
		
		public async Task Connect(DexihActiveAgent activeAgent, string securityToken)
		{
			try
			{
				_logger.LogDebug($"Connect from {Context.UserIdentifier}");

				Context.Items.Add("InstanceId", activeAgent.InstanceId);
				Context.Items.Add("SecurityToken", securityToken);
				var remoteAgents = (IRemoteAgents) _serviceProvider.GetService(typeof(IRemoteAgents));
				var operations = (IDexihOperations)_serviceProvider.GetService(typeof(IDexihOperations));
				await remoteAgents.ConnectRemoteAgent(Context.ConnectionId, activeAgent, operations, CancellationToken.None);
			}
			catch (Exception e)
			{
				Console.WriteLine(e);
				throw;
			}
		}

		public async Task Ping(DexihActiveAgent activeAgent, string connectionId)
		{
			_logger.LogTrace($"Ping from {Context.UserIdentifier}");

			var operations = (IDexihOperations)_serviceProvider.GetService(typeof(IDexihOperations));
			await operations.BroadcastClientMessageAsync(connectionId, EClientCommand.RemoteAgentUpdate, activeAgent, CancellationToken.None);
		}
		
		public async Task PingServer(DexihActiveAgent activeAgent, string pingKey)
		{
			_logger.LogTrace($"Ping from {Context.UserIdentifier}");
			var json = JsonExtensions.Serialize(activeAgent);
			await _distributedCache.SetStringAsync(pingKey, json, new DistributedCacheEntryOptions() {SlidingExpiration = TimeSpan.FromMilliseconds(5000)});
		}
	}
}
