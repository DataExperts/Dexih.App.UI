using dexih.functions;
using dexih.repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using System.Collections.Concurrent;
using System.Diagnostics;
using dexih.api.Hubs;
using dexih.api.Services.Operations;
using dexih.api.Services.Remote.Exceptions;
using dexih.operations;
using Dexih.Utils.Crypto;
using dexih.functions.Query;
using dexih.remote.operations;
using dexih.transforms;
using Dexih.Utils.DataType;
using Dexih.Utils.ManagedTasks;
using Dexih.Utils.MessageHelpers;
using static dexih.operations.DownloadData;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Caching.Distributed;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using SharedData = dexih.operations.SharedData;

namespace dexih.api.Services.Remote
{

    public class DexihRemoteAgents : IRemoteAgents
    {
	    public const int MaxResponseWait = 30000;

	    public string remoteAgentIdentity(long remoteAgentKey) => $"RemoteAgentKey-{remoteAgentKey}";
	    
        public DexihRemoteAgents(

            ILoggerFactory loggerFactory,
            IDexihOperations operations,
            IDistributedCache distributedCache,
            IHubContext<RemoteAgentHub> remoteAgentContext
            )
        {
			_loggerFactory = loggerFactory;
            _remoteLogger = loggerFactory.CreateLogger("RemoteAgents");
	        _defaultProxyUrl = operations.Config.DefaultProxyUrl;
	        _distributedCache = distributedCache;
	        _remoteAgentContext = remoteAgentContext;
        }

		private readonly ILoggerFactory _loggerFactory;
        private readonly ILogger _remoteLogger;
        private readonly IDistributedCache _distributedCache;
	    private readonly string _defaultProxyUrl;

	    private readonly IHubContext<RemoteAgentHub> _remoteAgentContext;

//	    /// <summary>
//	    /// Agents with have been authorized, but do not have a signalr connection
//	    /// </summary>
//	    private readonly ConcurrentDictionary<string, RemoteAgent> _authorizedRemoteAgents = new ConcurrentDictionary<string, RemoteAgent>(); //list of connected servers
//	    
//	    /// <summary>
//	    /// Agents with have been authorized and have a signalr connection.
//	    /// </summary>
//	    private readonly ConcurrentDictionary<string, RemoteAgent> _connectedRemoteAgents = new ConcurrentDictionary<string, RemoteAgent>(); //list of connected servers
//	    

//	    #region Remote Agent Connections
//
//	    /// <summary>
//	    /// Remote Agents  with an active connection to the information hub.
//	    /// </summary>
//	    /// <returns></returns>
//		public ConcurrentDictionary<string, RemoteAgent> GetConnectedRemoteAgents()
//        {
//            return _connectedRemoteAgents;
//        }
//
//        /// <summary>
//        /// Add as a new remote agent
//        /// </summary>
//        /// <returns>Unique token for the agent to initiate connections.</returns>
//		public RemoteAgent AuthorizeRemoteAgent(long remoteAgentKey, RemoteSettings remoteSettings, string iPAddress, ApplicationUser user)
//        {
//			try
//			{
//				_remoteLogger.LogInformation(LoggingEvents.AddRemoteAgent, "AddRemoteAgent - Adding remote agent name: {name}, id: {remoteAgentId}, ipAddress {ipAddress}, user id: {userid}", remoteSettings.AppSettings.Name, remoteSettings.AppSettings.RemoteAgentId, iPAddress, user);
//
//				//create an authentication token
//				var securityToken = EncryptString.GenerateRandomKey();
//				var instanceId = Guid.NewGuid().ToString();
//
//				var activeAgent = new DexihActiveAgent()
//				{
//					Name = remoteSettings.AppSettings.Name,
//					IsRunning = true,
//					DataPrivacyStatus = remoteSettings.DataPrivacyStatus(),
//					DownloadUrls = remoteSettings.GetDownloadUrls(_defaultProxyUrl),
//					IpAddress = iPAddress,
//					IsEncrypted = remoteSettings.Network.EnforceHttps,
//					RemoteAgentKey = remoteAgentKey,
//					InstanceId = instanceId,
//					User = remoteSettings.AppSettings.User,
//					UpgradeAvailable = remoteSettings.UpgradeAvailable(),
//					Version = remoteSettings.Runtime.Version,
//					LatestVersion = remoteSettings.Runtime.LatestVersion,
//					LatestDownloadUrl = remoteSettings.Runtime.LatestDownloadUrl,
//				};
//				
//				var newAgent = new RemoteAgent(_loggerFactory, remoteAgentKey, remoteSettings, securityToken, iPAddress, user);
//
//				
//				
//				_authorizedRemoteAgents.TryAdd(securityToken, newAgent);
//
////				newAgent.OnDisconnect += AuthorizedDisconnected;
////				newAgent.StartConnectionTimer();
//
//				return newAgent;
//				
//			} catch(Exception ex) 
//			{
//				var message = $"Error adding a remote agent.  Name: {remoteSettings.AppSettings.Name}, Id: {remoteSettings.AppSettings.RemoteAgentId}, Ip Address: {iPAddress}. User Id: {user.Id}  Exception message: {ex.Message}";
//				var exception = new RemoteAgentAddException($"{message}.  See inner exception for details.", ex);
//				_remoteLogger.LogError(LoggingEvents.AddRemoteAgent, exception, "AddRemoteAgent - Error: {message}", message);
//				throw exception;
//			}
//        }
//	    
//	    // if the agent is added, but no signalr connection is discovered, remove it, or there is an exception calling it
//	    private void AuthorizedDisconnected(object sender, EventArgs args)
//	    {
//		    var agent = (RemoteAgent) sender;
//		    _authorizedRemoteAgents.TryRemove(agent.SecurityToken, out _);
//	    }
//
//
//	    /// <summary>
//	    /// Connects a new remote agent, and loads the hubs available to it.
//	    /// </summary>
//	    /// <param name="client"></param>
//	    /// <param name="connectionId"></param>
//	    /// <param name="securityToken"></param>
//	    /// <param name="database"></param>
//	    /// <returns></returns>
//	    /// <exception cref="RemoteAgentException"></exception>
//		public async Task ConnectRemoteAgent(string instanceId, string securityToken, RepositoryManager database)
//		{
//			if (_authorizedRemoteAgents.TryRemove(securityToken, out var authorizedAgent))
//			{
////				authorizedAgent.StopConnectionTimer();
//				authorizedAgent.ConnectionId = connectionId;
//				authorizedAgent.Client = client;
//
//				//gets a list of all hubs that remote agent's user id can access.
//				var remoteAgents = await database.AuthorizedRemoteAgentHubs(authorizedAgent.IpAddress, authorizedAgent.RemoteSettings);
//
//				var activeAgent = ConvertActiveRemoteAgent(authorizedAgent);
//				
//				// broadcast changes to the user, and to anyone using hubs available to the remote agent.
//				await BroadcastUsersMessageAsync(new [] { authorizedAgent.RemoteSettings.Runtime.User.Id}, "remoteAgent-update", activeAgent);
//
//				foreach (var remoteAgent in remoteAgents)
//				{
//					await BroadcastHubMessageAsync(remoteAgent.HubKey, "remoteAgent-update", activeAgent);
//					_remoteLogger.LogTrace(LoggingEvents.AddRemoteAgent, "AddRemoteAgent - update hub {hubKey}", remoteAgent.HubKey);
//				}
//
//				// authorizedAgent.AuthorizedHubKeys = authorizedHubKeys;
//				
//				// add the agent to the list of connected agents.
//				_connectedRemoteAgents.TryAdd(authorizedAgent.SecurityToken, authorizedAgent);
//
//				// _remoteLogger.LogInformation(LoggingEvents.AddRemoteAgent, "AddRemoteAgent - Added remote agent.  Authorized for following hubKeys: {hubKeys}", string.Join(",", authorizedHubKeys));
//				
//			}
//			else 
//			{
//				throw new RemoteAgentException("The securityToken was not found in the list of authenticated clients.");
//			}
//		}
//
//	    /// <summary>
//	    /// Called when the remote agent disconnects.
//	    /// </summary>
//	    /// <param name="connectionId"></param>
//	    /// <param name="database"></param>
//	    /// <returns></returns>
//		public async Task RemoveRemoteClient(string connectionId, RepositoryManager database)
//		{
//			var remoteAgents = _connectedRemoteAgents.Where(c => c.Value.ConnectionId == connectionId);
//			foreach(var remoteAgent in remoteAgents)
//			{
//				
//				var hubs = await database.AuthorizedRemoteAgentHubs(remoteAgent.Value.IpAddress, remoteAgent.Value.RemoteSettings);
//
//				var agent = ConvertActiveRemoteAgent(remoteAgent.Value);
//
//				// broadcast changes to the user, and to anyone using hubs available to the remote agent.
//				await BroadcastUsersMessageAsync(new [] { remoteAgent.Value.RemoteSettings.Runtime.User.Id}, "remoteAgent-update", agent);
//				foreach (var hub in hubs)
//				{
//					await BroadcastHubMessageAsync(hub.HubKey, "remoteAgent-delete", agent);
//				}
//
//				_connectedRemoteAgents.Remove(remoteAgent.Key, out var _);
//			}
//		}
////	    
//	    
//	#endregion


	    #region Remote Agent Messaging

	    public async Task<(string instanceId, string securityToken)> AuthorizeRemoteAgent(string name, long remoteAgentKey, string encryptionKey, string ipAddress, string userId)
	    {
		    var remoteAgentProperties = new RemoteAgentProperties()
		    {
			    SecurityToken = EncryptString.GenerateRandomKey(),
			    RemoteAgentKey = remoteAgentKey,
			    EncryptionKey = encryptionKey,
			    Name = name,
			    IpAddress = ipAddress,
			    UserId = userId
		    };
		    
		    var instanceId = Guid.NewGuid().ToString();
		    await SetRemoteAgentProperties(instanceId, remoteAgentProperties);

		    return (instanceId, remoteAgentProperties.SecurityToken);
	    }
	    
	    public async Task ConnectRemoteAgent(string connectionId, DexihActiveAgent activeAgent, IDexihOperations operations)
	    {
		    var remoteAgentProperties = await GetRemoteAgentProperties(activeAgent.InstanceId);
		    remoteAgentProperties.ConnectionId = connectionId;
		    await SetRemoteAgentProperties(activeAgent.InstanceId, remoteAgentProperties);
		    
		    await _remoteAgentContext.Groups.AddToGroupAsync(connectionId, remoteAgentIdentity(remoteAgentProperties.RemoteAgentKey));
		    activeAgent.RemoteAgentKey = remoteAgentProperties.RemoteAgentKey;
		    
		    var hubs = await operations.RepositoryManager.AuthorizedRemoteAgentHubs(remoteAgentProperties.RemoteAgentKey);
		    foreach (var hub in hubs)
		    {
			    await operations.BroadcastHubMessageAsync(hub.HubKey, "remoteAgent-update", activeAgent);
		    }
	    }

	    public async Task DisconnectRemoteAgent(string instanceId, IDexihOperations operations)
	    {
		    var remoteAgentProperties = await GetRemoteAgentProperties(instanceId);
		    await _distributedCache.RemoveAsync(instanceId);
		    
		    var hubs = await operations.RepositoryManager.AuthorizedRemoteAgentHubs(remoteAgentProperties.RemoteAgentKey);

		    foreach (var hub in hubs)
		    {
			    await operations.BroadcastHubMessageAsync(hub.HubKey, "remoteAgent-delete", instanceId);
		    }
	    }

	    public async Task<RemoteAgentProperties> GetRemoteAgentProperties(string instanceId, CancellationToken cancellationToken =  default)
	    {
		    var properties = await _distributedCache.GetStringAsync(instanceId, cancellationToken);
		    if (properties == null) return null;
		    
		    var remoteAgentProperties = JsonConvert.DeserializeObject<RemoteAgentProperties>(properties);
		    return remoteAgentProperties;
	    }

	    public async Task SetRemoteAgentProperties(string instanceId, RemoteAgentProperties remoteAgentProperties, CancellationToken cancellationToken =  default)
	    {
		    var propertiesString = JsonConvert.SerializeObject(remoteAgentProperties);
		    await _distributedCache.SetStringAsync(instanceId, propertiesString, cancellationToken);
	    }


	    /// <summary>
		/// sends a message to the remote agent and awaits for a response.
		/// </summary>
		/// <param name="value"></param>
		/// <param name="cancellationToken"></param>
		/// <param name="awaitResponse"></param>
		/// <returns>MessageToken</returns>
		public async Task<T> SendRemoteMessage<T>(long hubKey, string instanceId, string method, object value, operations.KeyValuePair[] parameters, RepositoryManager repositoryManager, CancellationToken cancellationToken = default, bool awaitResponse = true)
        {
	        var remoteAgentProperties = await GetRemoteAgentProperties(instanceId, cancellationToken);
            try
            {
	            if (hubKey > 0)
	            {
		            var remoteAgentHub = await repositoryManager.AuthorizedRemoteAgentHub(hubKey, remoteAgentProperties.RemoteAgentKey);
		            if (remoteAgentHub == null)
		            {
			            _remoteLogger.LogWarning(LoggingEvents.GetRemoteAgent,
				            "GetRemoteAgent - remote agent not authorized for hub, id {id}, HubKey {hubKey}.",
				            instanceId, hubKey);
			            throw new RemoteAgentGetRemoteAgentException(
				            $"The selected remote agent is not authorized for this hub.  Instance {instanceId}, HubKey: {hubKey}, Name: {remoteAgentProperties.Name}",
				            null, instanceId, hubKey);
		            }
	            }

	            var messageId = Guid.NewGuid().ToString();
	            
	            var remoteMessage = new RemoteMessage()
	            {
		            MessageId = messageId,
		            SecurityToken = remoteAgentProperties.SecurityToken,
		            Value = Json.JTokenFromObject(value, remoteAgentProperties.EncryptionKey),
		            Parameters = parameters,
		            Method = method,
		            HubKey = hubKey,
		            HubVariables = await repositoryManager.GetHubVariables(hubKey),
		            TimeOut = int.MaxValue
	            };
	            
                var client = _remoteAgentContext.Clients.Clients(remoteAgentProperties.ConnectionId);

				await client.SendAsync("Command", remoteMessage, cancellationToken);       

	            // if awaitResponse = false, this is a send and forget message, so don't wait for a response.
				if (awaitResponse == false)
				{
					return default;
				}

                var responseMessage = await GetResponseMessage<T>(messageId, cancellationToken);

				if (!responseMessage.Success)
				{
                    throw new RemoteAgentException(responseMessage.Message, responseMessage.ExceptionDetails);
				}

				return responseMessage.Value;

            }
            catch (Exception ex)
            {
				throw new RemoteAgentException($"From remote agent \"{remoteAgentProperties.Name}\":\n{ex.Message}", ex);
            }
        }
	            
	    /// <summary>
		/// Waits for a matching response message to be send from the client.
		/// </summary>
		/// <param name="messageToken"></param>
		/// <param name="cancellationToken"></param>
		/// <returns></returns>
		private async Task<ReturnValue<T>> GetResponseMessage<T>(string messageToken, CancellationToken cancellationToken)
        {
            try
            {
	            _remoteLogger.LogTrace(LoggingEvents.SocketRemoteAgentGetResponse, "GetResponseMessage started - message token: {token}.",  messageToken);

				var watch = Stopwatch.StartNew();

                var remainingTime = MaxResponseWait;

                while (remainingTime > 0)
                {
	                var response = await _distributedCache.GetStringAsync(messageToken, cancellationToken);
	                if (response == null)
	                {
		                var responseMessageWait = Task.Delay(100, cancellationToken);
		                await Task.WhenAny(responseMessageWait, Task.Delay(remainingTime, cancellationToken));

		                if (cancellationToken.IsCancellationRequested)
		                {
			                return new ReturnValue<T>(false, "The response request was cancelled.", null);

		                }

		                continue;
	                }

	                await _distributedCache.RemoveAsync(messageToken, cancellationToken);

	                var message = JsonConvert.DeserializeObject<RemoteMessage>(response);


	                //if the message is a running update (used for long running tasks), then reset the timer.
	                if (message.Message == "running")
	                {
		                watch.Restart();
	                }
	                else
	                {
		                var value = message.Value == null ? default : message.Value.ToObject<T>();
		                var returnValue =
			                new ReturnValue<T>(message.Success, message.Message, message.Exception, value)
			                {
				                ExceptionDetails = message.ExceptionDetails
			                };
		                return returnValue;
	                }

	                remainingTime = MaxResponseWait - Convert.ToInt32(watch.ElapsedMilliseconds);
                }

				return new ReturnValue<T>(false, "The remote agent did not respond to the request.", null);
            }
            catch (Exception ex)
            {
				return new ReturnValue<T>(false, "The remote agent response failed with error: " + ex.Message, ex);
            }
        }

	    public async Task SetResponseMessage(string messageToken, RemoteMessage remoteMessage, CancellationToken cancellationToken)
	    {
		    var message = JsonConvert.SerializeObject(remoteMessage);

		    await _distributedCache.SetStringAsync(messageToken, message, cancellationToken);
	    }
	    
	    

	    #endregion


//	    #region Get Remote Agents
//	    
//	    /// <summary>
//	    /// Updates the "ActiveAgents" property of the remoteAgents.
//	    /// </summary>
//	    /// <param name="hubRemoteAgents"></param>
//	    /// <returns></returns>
//	    public void ResetActiveRemoteAgents(DexihRemoteAgent[] hubRemoteAgents)
//	    {
//		    foreach (var remoteAgent in hubRemoteAgents)
//		    {
//			    var activeRemoteAgents = _connectedRemoteAgents.Values.Where(c => c.RemoteAgentKey == remoteAgent.RemoteAgentKey).ToArray();
//			    remoteAgent.ActiveAgents = activeRemoteAgents.Select(ConvertActiveRemoteAgent).ToArray();
//		    }
//		}
//
//	    /// <summary>
//	    /// Converts a RemoteAgent -> DexihActiveAgent (which does not include sensative info and can be send to client).
//	    /// </summary>
//	    /// <param name="activeRemoteAgent"></param>
//	    /// <returns></returns>
//	    private DexihActiveAgent ConvertActiveRemoteAgent(RemoteAgent activeRemoteAgent)
//	    {
//		    var activeAgent = new DexihActiveAgent()
//		    {
//			    Name = activeRemoteAgent.RemoteSettings.AppSettings.Name,
//			    IsRunning = true,
//			    DataPrivacyStatus = activeRemoteAgent.RemoteSettings.DataPrivacyStatus(),
//			    DownloadUrls = activeRemoteAgent.RemoteSettings.GetDownloadUrls(_defaultProxyUrl),
//			    IpAddress = activeRemoteAgent.IpAddress,
//			    IsEncrypted = activeRemoteAgent.RemoteSettings.Network.EnforceHttps,
//			    RemoteAgentKey = activeRemoteAgent.RemoteAgentKey,
//			    InstanceId = activeRemoteAgent.InstanceId,
//			    User = activeRemoteAgent.RemoteSettings.AppSettings.User,
//			    UpgradeAvailable = activeRemoteAgent.RemoteSettings.UpgradeAvailable(),
//			    Version = activeRemoteAgent.RemoteSettings.Runtime.Version,
//			    LatestVersion = activeRemoteAgent.RemoteSettings.Runtime.LatestVersion,
//			    LatestDownloadUrl = activeRemoteAgent.RemoteSettings.Runtime.LatestDownloadUrl,
//		    };
//
//		    return activeAgent;
//	    }
//
//	    /// <summary>
//	    /// Gets all remote agents in hubs available to the user, and connected remote agents with the same user.
//	    /// </summary>
//	    /// <param name="userId"></param>
//	    /// <param name="isAdmin"></param>
//	    /// <param name="database"></param>
//	    /// <returns></returns>
//	    public async Task<IEnumerable<DexihRemoteAgent>> GetUserRemoteAgents(ApplicationUser user, RepositoryManager database)
//	    {
//		    var remoteAgents = await database.GetRemoteAgents(user);
//		    ResetActiveRemoteAgents(remoteAgents);
//		    return remoteAgents;
//	    }
//
//		/// <summary>
//		/// Gets a remoteAgent reference if it is authorized to the hub.
//		/// </summary>
//		/// <returns>The remote agent.</returns>
//		/// <param name="instanceId">Identifier.</param>
//		/// <param name="hubKey">Hub key.</param>
//		/// <param name="database">Database.</param>
//        public async Task<RemoteAgent> GetRemoteAgent(string instanceId, long hubKey, RepositoryManager database)
//        {
//	        try
//	        {
//		        _remoteLogger.LogTrace(LoggingEvents.GetRemoteAgent, "GetRemoteAgent - id {id}, HubKey {hubKey}.",
//			        instanceId, hubKey);
//
//		        var remoteAgent = _connectedRemoteAgents.Values.SingleOrDefault(c => c.InstanceId == instanceId);
//
//		        if (remoteAgent == null)
//		        {
//			        _remoteLogger.LogWarning(LoggingEvents.GetRemoteAgent,
//				        "GetRemoteAgent - remote agent not found, id {id}, HubKey {hubKey}.", instanceId, hubKey);
//			        throw new RemoteAgentGetRemoteAgentException(
//				        $"The remote agent is not active.  Try refreshing your browser or using another remote agent.",
//				        null, instanceId, hubKey);
//		        }
//
//		        if (!remoteAgent.RemoteSettings.Permissions.AllowAllHubs &&
//		            !remoteAgent.RemoteSettings.Permissions.AllowedHubs.Contains(hubKey))
//		        {
//			        _remoteLogger.LogWarning(LoggingEvents.GetRemoteAgent,
//				        "GetRemoteAgent - remote agent not authorized for hub, id {id}, HubKey {hubKey}, remoteAgentname: {name}.",
//				        instanceId, hubKey, remoteAgent.RemoteSettings.AppSettings.Name);
//			        throw new RemoteAgentGetRemoteAgentException(
//				        $"The selected remote agent cannot be used as the settings do now allow the hub with key {hubKey}.",
//				        null, instanceId, hubKey);
//		        }
//
//		        var authorizedRemoteAgent = await database.AuthorizedRemoteAgentHub(hubKey, remoteAgent.RemoteAgentKey);
//		        if (authorizedRemoteAgent == null)
//		        {
//			        _remoteLogger.LogWarning(LoggingEvents.GetRemoteAgent,
//				        "GetRemoteAgent - remote agent not authorized for hub, id {id}, HubKey {hubKey}, remoteAgentname: {name}.",
//				        instanceId, hubKey, remoteAgent.RemoteSettings.AppSettings.Name);
//			        throw new RemoteAgentGetRemoteAgentException($"The selected remote agent is not authorized for this hub.", null, instanceId, hubKey);
//		        }
//
//		        if (remoteAgent.User.IsAdmin)
//		        {
//			        _remoteLogger.LogDebug(LoggingEvents.GetRemoteAgent,
//				        "GetRemoteAgent - remote agent is admin user {user}, id {id}, HubKey {hubKey}, remoteAgentname: {name}.",
//				        remoteAgent.RemoteSettings.AppSettings.User, instanceId, hubKey,
//				        remoteAgent.RemoteSettings.AppSettings.Name);
//			        return remoteAgent;
//		        }
//
//		        if (await database.GetUserHub(hubKey, remoteAgent.RemoteSettings.Runtime.User) != null)
//		        {
//			        _remoteLogger.LogDebug(LoggingEvents.GetRemoteAgent,
//				        "GetRemoteAgent - remote agent is authorized user {user}, id {id}, HubKey {hubKey}, remoteAgentname: {name}.",
//				        remoteAgent.RemoteSettings.AppSettings.User, instanceId, hubKey,
//				        remoteAgent.RemoteSettings.AppSettings.Name);
//			        return remoteAgent;
//		        }
//
//		        _remoteLogger.LogWarning(LoggingEvents.GetRemoteAgent,
//			        "GetRemoteAgent - remote agent cannot use the hub, id {id}, HubKey {hubKey}, remoteAgentname: {name}.",
//			        instanceId, hubKey, remoteAgent.RemoteSettings.AppSettings.Name);
//		        throw new RemoteAgentGetRemoteAgentException($"The remote agent can not use this hub.", null,
//			        instanceId, hubKey);
//	        }
//	        catch (RemoteAgentGetRemoteAgentException)
//	        {
//		        throw;
//	        }
//            catch (Exception ex)
//            {
//				var message = $"GetRemoteAgent - HubKey {hubKey}.";
//				var exception = new RemoteAgentGetRemoteAgentException(message, ex, instanceId, hubKey);
//				_remoteLogger.LogError(LoggingEvents.GetRemoteAgent, exception, message);
//
//                throw exception;
//			}
//        }
//

/// <summary>
/// Pings any agents and returns the first active one that responds.
/// </summary>
/// <param name="remoteAgentKeys"></param>
/// <returns></returns>
	    public async Task<DexihActiveAgent> GetActiveAgent(long[] remoteAgentKeys)
	    {
		    var pingKey = Guid.NewGuid().ToString();
		    var exceptions = new ConcurrentQueue<Exception>();

		    //send a ping to any active remote agents, which will be routed back to the original remote agent.
		    await Task.WhenAll(remoteAgentKeys.Select(async remoteAgentKey =>

			    {
				    try
				    {
					    await _remoteAgentContext.Clients.Groups(remoteAgentIdentity(remoteAgentKey))
						    .SendAsync("PingServer", pingKey);
				    }
				    catch (Exception ex)
				    {
					    exceptions.Enqueue(ex);
				    }
			    }).ToArray());

		    if (exceptions.Count > 0)
		    {
			    throw new AggregateException("There were some issues finding an active agent.", exceptions);
		    }

		    // wait for a remoteAgent to be available
		    var timer = Stopwatch.StartNew();

		    while (timer.ElapsedMilliseconds < 5000)
		    {
			    var remoteAgentJson = await _distributedCache.GetStringAsync(pingKey);
			    if (remoteAgentJson != null)
			    {
				    var activeAgent = JsonConvert.DeserializeObject<DexihActiveAgent>(remoteAgentJson);
				    return activeAgent;
			    }

			    await Task.Delay(500);
		    }

		    return null;
	    }
	    

		/// <summary>
		/// Gets the hub reader remote agent, which is the remote agent that will serve requests when being used by the "Hub Reader" or shared connection.
		/// </summary>
		/// <returns>The hub reader remote agent.</returns>
		/// <param name="hubKey">Hub key.</param>
		/// <param name="database">Database.</param>
        public async Task<DexihActiveAgent> GetHubReaderRemoteAgent(long hubKey, RepositoryManager database)
        {
			_remoteLogger.LogTrace(LoggingEvents.GetHubReaderRemoteAgent, "GetHubReaderRemoteAgent - HubKey {hubKey}.", hubKey);

			var hubCache = await database.GetHub(hubKey);
	        var hubAgents = hubCache.DexihRemoteAgentHubs.Where(c=> c.IsAuthorized && c.IsValid).ToArray();
	        
	        // attempt to get the agent set as the default first.
	        var defaultAgentKeys = hubAgents.Where(c => c.IsDefault).Select(c => c.RemoteAgentKey).ToArray();

	        DexihActiveAgent activeAgent = null;
	        if (defaultAgentKeys.Any())
	        {
		        activeAgent = await GetActiveAgent(defaultAgentKeys);
	        }

	        if (activeAgent == null)
	        {
		        var otherAgents = hubAgents.Where(c => !c.IsDefault).Select(c => c.RemoteAgentKey).ToArray();
		        if (otherAgents.Any())
		        {
			        activeAgent = await GetActiveAgent(otherAgents);
		        }
	        }

	        if (activeAgent == null)
	        {
		        _remoteLogger.LogWarning(LoggingEvents.GetHubReaderRemoteAgent, "GetHubReaderRemoteAgent - There is no active remote agent for this hub - HubKey {hubKey}.", hubKey);
		        throw new RemoteAgentGetHubReaderRemoteAgentException("There is no active remote agent for this hub", null, hubKey);
	        }
	        
	        var remoteAgent = await GetRemoteAgentProperties(activeAgent.InstanceId);

//			var authorizedRemoteAgent = await database.RemoteAgentAuthorize(hubKey, remoteAgent.RemoteSettings.Runtime.UserId, remoteAgent.IpAddress, remoteAgent.RemoteSettings);
//			if (authorizedRemoteAgent == null)
//			{
//				_remoteLogger.LogWarning(LoggingEvents.GetHubReaderRemoteAgent, "GetHubReaderRemoteAgent - The remote agent is not authorized - HubKey {hubKey}, RemoteAgentName: {name}.", hubKey, remoteAgent.RemoteSettings.AppSettings.Name);
//				throw new RemoteAgentGetHubReaderRemoteAgentException("The remote agent is not authorized.  This could be due to a change in the remote agents ip agress or unique identifier.", null, hubKey);
//			}

	        var user = await database.GetUser(remoteAgent.UserId);
	
			if (user.IsAdmin)
			{
				_remoteLogger.LogDebug(LoggingEvents.GetHubReaderRemoteAgent, "GetHubReaderRemoteAgent - remote agent is admin user {user}, HubKey {hubKey}, remoteAgentname: {name}.", user.Email, hubKey, activeAgent.Name);
				return activeAgent;
			}

			if ((await database.GetUserHub(hubKey, user)) != null)
			{
				_remoteLogger.LogDebug(LoggingEvents.GetHubReaderRemoteAgent, "GetHubReaderRemoteAgent - remote agent is authorized user {user}, HubKey {hubKey}, remoteAgentname: {name}.", user.Email, hubKey, activeAgent.Name);
				return activeAgent;
			}

			_remoteLogger.LogWarning(LoggingEvents.GetHubReaderRemoteAgent, "GetHubReaderRemoteAgent - remote agent cannot use the hub, HubKey {hubKey}, remoteAgentname: {name}.", hubKey, activeAgent.Name);
			throw new RemoteAgentGetHubReaderRemoteAgentException("The remote agent can not use this hub.", null, hubKey);
        }

//        public RemoteAgent GetRemoteAgentFromSecurityToken(string securityToken)
//        {
//            if (_connectedRemoteAgents.ContainsKey(securityToken))
//                return _connectedRemoteAgents[securityToken];
//
//			_remoteLogger.LogWarning(LoggingEvents.GetRemoteAgentFromSecurityToken, "GetRemoteAgentFromSecurityToken - remote agent with security token {token} not found.", securityToken);
//			return null;
//        }
//
//	    public RemoteAgent[] GetRemoteAgentsFromId(string remoteAgentId)
//	    {
//		    return _connectedRemoteAgents.Values.Where(c =>
//			    c.RemoteSettings.AppSettings.RemoteAgentId == remoteAgentId).ToArray();
//	    }
////	    
//	    #endregion

	    #region Remote Operations
	    
        public async Task<string> Encrypt(string id, long hubKey, string value, RepositoryManager database)
        {
            try
            {
                _remoteLogger.LogTrace(LoggingEvents.RemoteEncrypt, "Encrypt - Id: {Id}, HubKey: {hubKey}.", id, hubKey);
                var result = await SendRemoteMessage<string>(hubKey, id, nameof(RemoteOperations.Encrypt), value, null, database, CancellationToken.None);
	            return result;
            }
            catch(Exception ex)
            {
                throw new RemoteAgentException($"Encrypt failed.\n{ex.Message}", ex);
            }
        }

		public async Task<string> Decrypt(string id, long hubKey, string value, RepositoryManager database)
		{
            try
            {
                _remoteLogger.LogTrace(LoggingEvents.RemoteDecrypt, "Decrypt - Id: {Id}, HubKey: {hubKey}.", id, hubKey);
                var result = await SendRemoteMessage<string>(hubKey, id, nameof(RemoteOperations.Decrypt), value, null, database, CancellationToken.None);
                return result;
            }
            catch (Exception ex)
            {
                throw new RemoteAgentException($"Decrypt failed.\n{ex.Message}", ex);
            }
        }
		
	    /// <summary>
	    /// </summary>
	    /// <param name="id"></param>
	    /// <param name="hubKey"></param>
	    /// <param name="tableKey"></param>
	    /// <param name="fileName"></param>
	    /// <param name="downloadUrl"></param>
	    /// <param name="database"></param>
	    /// <returns>Reference Url for the upload</returns>
	    /// <exception cref="RemoteAgentException"></exception>
	    public async Task<string> UploadFile(string id, long hubKey, long tableKey, string fileName, DownloadUrl downloadUrl, RepositoryManager database)
	    {
		    try
		    {
			    _remoteLogger.LogTrace(LoggingEvents.RemoteSaveFile, "UploadFile - Id: {Id}, HubKey: {hubKey}, TableKey: {tableKey}.", id, hubKey, tableKey);

			    var hub = await database.GetHub(hubKey);

			    var cache = new CacheManager(hubKey, hub.EncryptionKey);
			    cache.AddTables(new[] { tableKey }, hub);

			    var value = new
			    {
				    cache,
				    downloadUrl
			    };

			    var parameters = new[]
			    {
				    new operations.KeyValuePair("FileName", fileName)
			    };

			    var result = await SendRemoteMessage<string>(hubKey, id, nameof(RemoteOperations.UploadFile), value, parameters, database, CancellationToken.None);
			    return result;
		    }
		    catch(Exception ex)
		    {
			    throw new RemoteAgentException($"Error saving file.\n{ex.Message}", ex);
		    }
	    }
	    
	    public async Task<(string url, string reference)> BulkUploadFiles(
		    string id, 
		    long hubKey, 
		    string connectionId, 
		    long connectionKey, 
		    long fileFormatKey, 
		    DataType.ETypeCode formatType, 
		    string fileName, 
		    DownloadUrl downloadUrl, 
		    RepositoryManager database)
	    {
		    try
		    {
			    _remoteLogger.LogTrace(LoggingEvents.RemoteSaveFile, "BulkUploadFiles - Id: {Id}, HubKey: {hubKey}, TableKey: {connectionKey}.", id, hubKey, connectionKey);

			    var hub = await database.GetHub(hubKey);

			    var cache = new CacheManager(hubKey, hub.EncryptionKey);
			    cache.AddConnections(new[] { connectionKey }, false, hub);
			    cache.AddFileFormats(new[] {fileFormatKey}, hub);

			    var value = new
			    {
				    cache,
				    downloadUrl,
				    connectionId,
				    connectionKey,
				    fileFormatKey,
				    formatType
			    };

			    var parameters = new[]
			    {
				    new operations.KeyValuePair("FileName", fileName)
			    };

			    var result = await SendRemoteMessage<(string url, string reference)>(hubKey, id, nameof(RemoteOperations.BulkUploadFiles), value, parameters, database, CancellationToken.None);
			    return result;
		    }
		    catch(Exception ex)
		    {
			    throw new RemoteAgentException($"Error saving file.\n{ex.Message}", ex);
		    }
	    }


	    public async Task<DexihTable[]> ImportTables(string instanceId, long hubKey, DexihTable[] hubTables, RepositoryManager repositoryManager)
	    {
            var hub = await repositoryManager.GetHub(hubKey);
	        var cache = new CacheManager(hubKey, hub.EncryptionKey);
	        cache.AddConnections(hubTables.Select(c => c.ConnectionKey).Distinct(), false, hub);

	        var value = new
	        {
		        cache,
		        tables = hubTables
	        };
	        
	        var importedTables = await SendRemoteMessage<DexihTable[]>(hubKey, instanceId, nameof(RemoteOperations.ImportDatabaseTables), value, null, repositoryManager, CancellationToken.None);
	        return importedTables;

	    }
	    
	    public async Task<JToken> CreateTables(string instanceId, long hubKey, DexihTable[] tables, bool dropTables, RepositoryManager repositoryManager)
	    {
		    var hub = await repositoryManager.GetHub(hubKey);
		    var cache = new CacheManager(hubKey, hub.EncryptionKey);
		    cache.AddConnections(tables.Select(c => c.ConnectionKey).Distinct(), false, hub);

		    var value = new
		    {
			    cache,
			    tables = tables,
			    dropTables = dropTables
		    };
	        
		    var result = await SendRemoteMessage<JToken>(hubKey, instanceId, nameof(RemoteOperations.CreateDatabaseTables), value, null, repositoryManager, CancellationToken.None);
		    return result;
	    }
	    
	    public async Task<JToken> ClearTables(string instanceId, long hubKey, DexihTable[] tables, RepositoryManager repositoryManager)
	    {
		    var hub = await repositoryManager.GetHub(hubKey);
		    var cache = new CacheManager(hubKey, hub.EncryptionKey);
		    cache.AddConnections(tables.Select(c => c.ConnectionKey).Distinct(), false, hub);

		    var value = new
		    {
			    cache,
			    tables = tables
		    };
	        
		    var result = await SendRemoteMessage<JToken>(hubKey, instanceId, nameof(RemoteOperations.ClearDatabaseTables), value, null, repositoryManager, CancellationToken.None);
		    return result;
	    }
	    
	    public async Task<string> PreviewTable(string id, long hubKey, DexihTable table, SelectQuery selectQuery, InputColumn[] inputColumns, InputParameters inputParameters, bool showRejectedData, DownloadUrl downloadUrl, RepositoryManager database)
	    {
		    try
		    {
			    _remoteLogger.LogTrace(LoggingEvents.PreviewTable, "Preview Table - Id: {Id}, HubKey: {hubKey}, TableKey: {tableKey}.", id, hubKey, table.Key);

			    var hub = await database.GetHub(hubKey);
			    var cache = new CacheManager(hubKey, hub.EncryptionKey);
			    cache.AddConnections(new[] { table.ConnectionKey }, false, hub);
			    cache.AddTable(table, hub);

			    var value = new
			    {
				    cache,
				    tableKey = table.Key,
				    showRejectedData,
				    selectQuery,
				    downloadUrl,
				    inputColumns,
				    inputParameters
			    };

			    var result = await SendRemoteMessage<string>(hubKey, id, nameof(RemoteOperations.PreviewTable), value, null, database, CancellationToken.None);
			    return result;
		    }
		    catch (Exception ex)
		    {
			    throw new RemoteAgentException($"Error previewing table {table.Name}.\n{ex.Message}", ex);
		    }
	    }
	    
		public async Task<string> PreviewTable(string id, long hubKey, long tableKey, SelectQuery selectQuery, InputColumn[] inputColumns, InputParameters inputParameters, bool showRejectedData, DownloadUrl downloadUrl, RepositoryManager database)
		{
			var table = await database.GetTable(hubKey, tableKey, true);
			return await PreviewTable(id, hubKey, table, selectQuery, inputColumns, inputParameters, showRejectedData, downloadUrl, database);
        }

	    
	    public async Task<ManagedTask> DownloadTableData(string id, long hubKey, string connectionId, DexihTable hubTable, SelectQuery selectQuery, InputColumn[] inputColumns, InputParameters inputParameters,  bool showRejectedData, EDownloadFormat downloadFormat, bool zipFiles, DownloadUrl downloadUrl, RepositoryManager database)
	    {
		    try
		    {
			    _remoteLogger.LogTrace(LoggingEvents.PreviewTable, "Preview Table - Id: {Id}, HubKey: {hubKey}, TableKey: {tableKey}.", id, hubKey, hubTable.Key);

			    var hub = await database.GetHub(hubKey);
			    var cache = new CacheManager(hubKey, hub.EncryptionKey);
			    cache.AddTable(hubTable, hub);

			    var downloadObject = new DownloadObject()
			    {
				    InputColumns = inputColumns,
				    InputParameters = inputParameters,
				    ObjectKey = hubTable.Key,
				    ObjectType = SharedData.EObjectType.Table,
				    Query = selectQuery
			    };

			    var downloadObjects = new[] {downloadObject};
			    
			    var value = new
			    {
				    cache,
				    connectionId,
				    downloadObjects,
				    downloadFormat,
				    zipFiles,
				    downloadUrl
			    };

			    var result = await SendRemoteMessage<ManagedTask>(hubKey, id, nameof(RemoteOperations.DownloadData), value, null, database, CancellationToken.None);
			    return result;
		    }
		    catch (Exception ex)
		    {
			    throw new RemoteAgentException($"Error downloading table {hubTable.Name}.\n{ex.Message}", ex);
		    }
	    }
	    
	    public async Task<ManagedTask> DownloadDatalinkData(string id, long hubKey, string connectionId, DexihDatalink hubDatalink, long datalinkTransformKey, SelectQuery selectQuery, InputColumn[] inputColumns, InputParameters inputParameters, EDownloadFormat downloadFormat, bool zipFiles, DownloadUrl downloadUrl, RepositoryManager database)
	    {
		    try
		    {
			    _remoteLogger.LogTrace(LoggingEvents.PreviewTable, "Preview Datalink - Id: {Id}, HubKey: {hubKey}, Name: {name}.", id, hubKey, hubDatalink.Name);

			    var hub = await database.GetHub(hubKey);
			    var cache = new CacheManager(hubKey, hub.EncryptionKey);
			    cache.AddDatalink(hubDatalink, hub);

			    var downloadObject = new DownloadObject()
			    {
				    InputColumns = inputColumns,
				    InputParameters = inputParameters,
				    ObjectKey = hubDatalink.Key,
				    DatalinkTransformKey = datalinkTransformKey,
				    ObjectType = SharedData.EObjectType.Datalink,
				    Query = selectQuery
			    };

			    var downloadObjects = new[] {downloadObject};

			    var value = new
			    {
				    cache,
				    connectionId,
				    downloadObjects,
				    downloadFormat,
				    zipFiles,
				    downloadUrl
			    };
			    
			    var result = await SendRemoteMessage<ManagedTask>(hubKey, id, nameof(RemoteOperations.DownloadData), value, null, database, CancellationToken.None);
			    return result;
		    }
		    catch (Exception ex)
		    {
			    throw new RemoteAgentException($"Error downloading table {hubDatalink.Name}.\n{ex.Message}", ex);
		    }
	    }
	    
        public async Task<string> PreviewDatalink(string id, long hubKey, long datalinkKey, SelectQuery selectQuery, InputColumn[] inputColumns, InputParameters inputParameters, DownloadUrl downloadUrl, RepositoryManager database)
        {
            try
            {
                _remoteLogger.LogTrace(LoggingEvents.PreviewDatalink, "Preview Datalink - Id: {Id}, HubKey: {hubKey}, DatalinkKey: {datalinkKey}.", id, hubKey, datalinkKey);

                var hub = await database.GetHub(hubKey);

                var cache = new CacheManager(hubKey, hub.EncryptionKey);
                cache.AddDatalinks(new[] { datalinkKey }, hub);

                var value = new
                {
	                cache,
	                datalinkKey,
	                selectQuery,
	                downloadUrl,
	                inputColumns,
	                inputParameters
                };

                var result = await SendRemoteMessage<string>(hubKey, id, nameof(RemoteOperations.PreviewDatalink), value, null, database, CancellationToken.None);
	            return result;
            }
            catch (Exception ex)
            {
                throw new RemoteAgentException($"Error previewing datalink.\n{ex.Message}", ex);
            }
        }
        
        public async Task<TransformProperties> DatalinkProperties(string id, long hubKey, long datalinkKey, SelectQuery selectQuery, InputColumn[] inputColumns, InputParameters inputParameters, RepositoryManager database)
        {
	        try
	        {
		        _remoteLogger.LogTrace(LoggingEvents.DatalinkProperties, "Preview Datalink - Id: {Id}, HubKey: {hubKey}, DatalinkKey: {datalinkKey}.", id, hubKey, datalinkKey);

		        var hub = await database.GetHub(hubKey);

		        var cache = new CacheManager(hubKey, hub.EncryptionKey);
		        cache.AddDatalinks(new[] { datalinkKey }, hub);

		        var value = new
		        {
			        cache,
			        datalinkKey,
			        selectQuery,
			        inputColumns,
			        inputParameters
		        };

		        var result = await SendRemoteMessage<TransformProperties>(hubKey, id, nameof(RemoteOperations.DatalinkProperties), value, null, database, CancellationToken.None);
		        return result;
	        }
	        catch (Exception ex)
	        {
		        throw new RemoteAgentException($"Error previewing datalink.\n{ex.Message}", ex);
	        }
        }
	    
	    public async Task<string> PreviewTransform(string id, long hubKey, DexihDatalink hubDatalink, long datalinkTransformKey, SelectQuery selectQuery, InputColumn[] inputColumns, InputParameters inputParameters, DownloadUrl downloadUrl, RepositoryManager database)
	    {
		    try
		    {
			    _remoteLogger.LogTrace(LoggingEvents.PreviewDatalink, "Preview Datalink - Id: {Id}, HubKey: {hubKey}, DatalinkKey: {datalinkKey}.", id, hubKey, hubDatalink.Key);

			    var hub = await database.GetHub(hubKey);


			    var cache = new CacheManager(hubKey, hub.EncryptionKey);
			    cache.AddDatalink(hubDatalink, hub);

			    var value = new
			    {
				    cache,
				    datalink = hubDatalink,
				    datalinkTransformKey,
				    selectQuery,
				    inputColumns,
				    inputParameters,
				    downloadUrl
			    };

			    var result = await SendRemoteMessage<string>(hubKey, id, nameof(RemoteOperations.PreviewTransform), value, null, database, CancellationToken.None);
			    return result;
		    }
		    catch (Exception ex)
		    {
			    throw new RemoteAgentException($"Error previewing datalink.\n{ex.Message}", ex);
		    }
	    }
	    
		public async Task<string[]> ImportFunctionMappings(string id, long hubKey, DexihDatalink hubDatalink, long datalinkTransformKey, DexihDatalinkTransformItem datalinkTransformItem, RepositoryManager database)
	    {
		    try
		    {
			    _remoteLogger.LogTrace(LoggingEvents.PreviewDatalink, "ImportFunctionMappings - Id: {Id}, HubKey: {hubKey}, DatalinkKey: {datalinkKey}.", id, hubKey, hubDatalink.Key);

			    var hub = await database.GetHub(hubKey);

			    var cache = new CacheManager(hubKey, hub.EncryptionKey);
			    if (hubDatalink.SourceDatalinkTable.SourceType == ESourceType.Table && hubDatalink.SourceDatalinkTable.SourceTableKey != null)
			    {
				    cache.AddTables(new[] { hubDatalink.SourceDatalinkTable.SourceTableKey.Value }, hub);
			    }
			    else if ( hubDatalink.SourceDatalinkTable.SourceDatalinkKey != null)
			    {
				    cache.AddDatalinks(new[] { hubDatalink.SourceDatalinkTable.SourceDatalinkKey.Value }, hub);
			    }

			    foreach(var target in hubDatalink.DexihDatalinkTargets)
			    {
				    cache.AddTables(new[] {(long)target.TableKey}, hub);
			    }

			    if (hubDatalink.AuditConnectionKey != null)
			    {
				    cache.AddConnections(new[] {hubDatalink.AuditConnectionKey.Value}, false, hub);
			    }

			    foreach (var datalinkTransform in hubDatalink.DexihDatalinkTransforms)
			    {
				    if (datalinkTransform.JoinDatalinkTable != null)
				    {
					    if (datalinkTransform.JoinDatalinkTable.SourceType == ESourceType.Table && datalinkTransform.JoinDatalinkTable.SourceTableKey != null)
					    {
						    cache.AddTables(new[] { datalinkTransform.JoinDatalinkTable.SourceTableKey.Value }, hub);
					    }
					    else if ( datalinkTransform.JoinDatalinkTable.SourceDatalinkKey != null)
					    {
						    cache.AddDatalinks(new[] { datalinkTransform.JoinDatalinkTable.SourceDatalinkKey.Value }, hub);
					    }
				    }

				    foreach (var item in datalinkTransform.DexihDatalinkTransformItems)
				    {
					    if (item.CustomFunctionKey != null)
					    {
						    cache.AddCustomFunctions(new[] {(long)item.CustomFunctionKey}, hub);
					    }
				    }
			    }
			    
			    var value = new
			    {
				    cache,
				    datalink = hubDatalink,
				    datalinkTransformKey,
				    datalinkTransformItem = datalinkTransformItem
			    };

			    var result = await SendRemoteMessage<string[]>(hubKey, id, nameof(RemoteOperations.ImportFunctionMappings), value, null, database, CancellationToken.None);
			    return result;
		    }
		    catch (Exception ex)
		    {
			    throw new RemoteAgentException($"Error importing function mappings.\n{ex.Message}", ex);
		    }
	    }
	    
        public async Task<ManagedTask> DownloadFiles(string id, long hubKey, string connectionId, long tableKey, EFlatFilePath path, string[] files, DownloadUrl downloadUrl, RepositoryManager database)
        {
            try
            {
                _remoteLogger.LogTrace(LoggingEvents.DownloadFiles, "DownloadFiles - Id: {Id}, HubKey: {hubKey}, TableKey: {tableKey}.", id, hubKey);

                var hub = await database.GetHub(hubKey);

                // populate the table/datalink cache to be send to the remote agent.
                var cache = new CacheManager(hubKey, hub.EncryptionKey);
                var table = await database.GetTable(hubKey, tableKey, true);

                cache.AddConnections(new[] { table.ConnectionKey }, false, hub);
                
                var value = new
                {
	                cache.Hub,
	                connectionId,
	                table,
	                path,
	                files,
	                downloadUrl
                };

                var result = await SendRemoteMessage<ManagedTask>(hubKey, id, nameof(RemoteOperations.DownloadFiles), value, null, database, CancellationToken.None);
                return result;
            }
            catch (Exception ex)
            {
                throw new RemoteAgentException($"Error downloading files. {ex.Message}.", ex);
            }
        }

        public async Task<ManagedTask> DownloadData(string id, long hubKey, string connectionId, DownloadObject[] downloadObjects, EDownloadFormat downloadFormat, bool zipFiles, DownloadUrl downloadUrl, RepositoryManager database)
        {
            try
            {
                _remoteLogger.LogTrace(LoggingEvents.DownloadData, "DownloadData - Id: {Id}, HubKey: {hubKey}, TableKey: {tableKey}.", id, hubKey);

	            if (string.IsNullOrEmpty(connectionId))
	            {
		            throw new RemoteAgentAddException("The client id for the download task was not found.", null);
	            }

                var hub = await database.GetHub(hubKey);

                // populate the table/datalink cache to be send to the remote agent.
                var cache = new CacheManager(hubKey, hub.EncryptionKey);
                var tableKeys = downloadObjects.Where(c => c.ObjectType == SharedData.EObjectType.Table).Select(c => c.ObjectKey).ToArray();
                cache.AddTables(tableKeys, hub);
                var datalinkKeys = downloadObjects.Where(c => c.ObjectType == SharedData.EObjectType.Datalink).Select(c => c.ObjectKey).ToArray();
                cache.AddDatalinks(datalinkKeys, hub);

                var value = new
                {
	                cache,
	                connectionId,
	                downloadObjects,
	                downloadFormat,
	                zipFiles,
	                downloadUrl
                };

                var result = await SendRemoteMessage<ManagedTask>(hubKey, id, nameof(RemoteOperations.DownloadData), value, null, database, CancellationToken.None);
                return result;
            }
            catch (Exception ex)
            {
                throw new RemoteAgentException($"Error downloading data. {ex.Message}.", ex);
            }
        }
	    
		
	    
		public async Task RunDatalinks(string id, long hubKey, string connectionId, long[] datalinkKeys, bool truncateTarget, bool resetIncremental, string resetIncrementalValue, InputColumn[] inputColumns, InputParameters inputParameters, RepositoryManager database)
        {
            try
            {
                _remoteLogger.LogTrace(LoggingEvents.RunDatalinks, "RunDatalinks - Id: {Id}, HubKey: {hubKey}, ConnectionId: {connectionId}, DatalinkKeys: {datalinkKeys}.", id, hubKey, connectionId, string.Join(",", datalinkKeys));

                var hub = await database.GetHub(hubKey);

                // populate the table/datalink cache to be send to the remote agent.
                var cache = new CacheManager(hubKey, hub.EncryptionKey);
                cache.AddDatalinks(datalinkKeys, hub);
                
                var value = new
                {
	                cache,
	                datalinkKeys,
	                connectionId,
	                truncateTarget,
	                resetIncremental,
	                resetIncrementalValue,
	                inputColumns,
	                inputParameters
                };
                
                await SendRemoteMessage<JToken>(hubKey, id, nameof(RemoteOperations.RunDatalinks), value, null, database, CancellationToken.None);
            }
            catch (Exception ex)
            {
                throw new RemoteAgentException($"Error running datalinks. {ex.Message}.", ex);
            }
        }
	    
	    public async Task RunDatalinkTests(string id, long hubKey, string connectionId, long[] datalinkTestKeys, RepositoryManager database)
	    {
		    try
		    {
			    _remoteLogger.LogTrace(LoggingEvents.RunDatalinkTests, "RunDatalinkTests - Id: {Id}, HubKey: {hubKey}, DatalinkKeys: {datalinkKeys}.", id, hubKey, string.Join(",", datalinkTestKeys));

			    var timer = Stopwatch.StartNew();
	            
			    var hub = await database.GetHub(hubKey);

			    // populate the table/datalink cache to be send to the remote agent.
			    var cache = new CacheManager(hubKey, hub.EncryptionKey);
			    cache.AddDatalinkTests(datalinkTestKeys, hub);

			    timer.Stop();
			    _remoteLogger.LogInformation(LoggingEvents.RunDatalinks, "RunDatalinks - Timetaken {elapsed}", timer.Elapsed);
	            
			    var value = new
			    {
				    cache,
				    datalinkTestKeys,
				    connectionId,
			    };

			    var result = await SendRemoteMessage<JToken>(hubKey, id, nameof(RemoteOperations.RunDatalinkTests), value, null, database, CancellationToken.None);
		    }
		    catch (Exception ex)
		    {
			    throw new RemoteAgentException($"Error running datalinks. {ex.Message}.", ex);
		    }
	    }
	    
	    public async Task RunDatalinkTestSnapshot(string id, long hubKey, string connectionId, long[] datalinkTestKeys, RepositoryManager database)
	    {
		    try
		    {
			    _remoteLogger.LogTrace(LoggingEvents.SnapshotDatalinkTests, "SnapshotDatalinkTests - Id: {Id}, HubKey: {hubKey}, DatalinkKeys: {datalinkKeys}.", id, hubKey, string.Join(",", datalinkTestKeys));

			    var timer = Stopwatch.StartNew();
	            
			    var hub = await database.GetHub(hubKey);

			    // populate the table/datalink cache to be send to the remote agent.
			    var cache = new CacheManager(hubKey, hub.EncryptionKey);
			    cache.AddDatalinkTests(datalinkTestKeys, hub);

			    timer.Stop();
			    _remoteLogger.LogInformation(LoggingEvents.RunDatalinks, "RunDatalinks - RunDatalinkTestSnapshot {elapsed}", timer.Elapsed);
	            
			    var value = new
			    {
				    cache,
				    datalinkTestKeys,
				    connectionId,
			    };

			    var result = await SendRemoteMessage<JToken>(hubKey, id, nameof(RemoteOperations.RunDatalinkTestSnapshots), value, null, database, CancellationToken.None);
		    }
		    catch (Exception ex)
		    {
			    throw new RemoteAgentException($"Error running datalinks. {ex.Message}.", ex);
		    }
	    }
	    
		public async Task RunDatajobs(string id, long hubKey, string connectionId, long[] datajobKeys, bool truncateTarget, bool resetIncremental, string resetIncrementalValue, InputParameters inputParameters, RepositoryManager database)
        {
            try
            {
                _remoteLogger.LogTrace(LoggingEvents.RunDatajobs, "RunDatajobs - Id: {Id}, HubKey: {hubKey}, DatalinkKeys: {datalinkKeys}.", id, hubKey, string.Join(",", datajobKeys));

                var hub = await database.GetHub(hubKey);

                // populate the table/datalink cache to be send to the remote agent.
                var cache = new CacheManager(hubKey, hub.EncryptionKey);
                cache.AddDatajobs(datajobKeys, hub);
                
                var value = new
                {
	                cache,
	                connectionId,
	                datajobKeys,
	                truncateTarget,
	                resetIncremental,
	                resetIncrementalValue,
	                inputParameters
                };

                var result = await SendRemoteMessage<JToken>(hubKey, id, nameof(RemoteOperations.RunDatajobs), value, null, database, CancellationToken.None);
            }
            catch (Exception ex)
            {
                throw new RemoteAgentException($"Error running datajobs. {ex.Message}.", ex);
            }
        }

        public async Task CancelDatalinks(string id, long hubKey, long[] datalinkKeys, RepositoryManager database)
        {
            try
            {
                _remoteLogger.LogTrace(LoggingEvents.CancelDatalinks, "CancelDatalinks - Id: {Id}, HubKey: {hubKey}, AuditKeys: {auditKeys}.", id, hubKey, string.Join(",", datalinkKeys));

                var value = new
                {
	                hubKey,
	                datalinkKeys
                };

                var result = await SendRemoteMessage<JToken>(hubKey, id, nameof(RemoteOperations.CancelDatalinks), value, null, database, CancellationToken.None);
            }
            catch (Exception ex)
            {
                throw new RemoteAgentException($"Error cancelling datalinks. {ex.Message}.", ex);
            }
        }
	    
	    public async Task CancelDatalinkTests(string id, long hubKey, long[] datalinkTestKeys, RepositoryManager database)
	    {
		    try
		    {
			    _remoteLogger.LogTrace(LoggingEvents.CancelDatalinkTests, "CancelDatalinkTests - Id: {Id}, HubKey: {hubKey}, AuditKeys: {auditKeys}.", id, hubKey, string.Join(",", datalinkTestKeys));

			    var value = new
			    {
				    hubKey,
				    datalinkTestKeys
			    };

			    var result = await SendRemoteMessage<JToken>(hubKey, id, nameof(RemoteOperations.CancelDatalinkTests), value, null, database, CancellationToken.None);
		    }
		    catch (Exception ex)
		    {
			    throw new RemoteAgentException($"Error cancelling datalinks. {ex.Message}.", ex);
		    }
	    }

        public async Task ActivateDatajobs(string id, long hubKey, string connectionId, long[] datajobKeys, InputParameters inputParameters, RepositoryManager database)
        {
            try
            {
                _remoteLogger.LogTrace(LoggingEvents.ActivateDatajobs, "ActivateDatajobs - Id: {Id}, HubKey: {hubKey}, DatalinkKeys: {datalinkKeys}.", id, hubKey, string.Join(",", datajobKeys));

                var hub = await database.GetHub(hubKey);

                // populate the table/datalink cache to be send to the remote agent.
                var cache = new CacheManager(hubKey, hub.EncryptionKey);
                cache.AddDatajobs(datajobKeys, hub);

                var value = new
                {
	                cache,
	                connectionId,
	                datajobKeys,
	                inputParameters
                };
                var result = await SendRemoteMessage<JToken>(hubKey, id, nameof(RemoteOperations.ActivateDatajobs), value, null, database, CancellationToken.None);
            }
            catch (Exception ex)
            {
                throw new RemoteAgentException($"Error activating datajobs. {ex.Message}.", ex);
            }
        }
	    
		public async Task DeactivateDatajobs(string id, long hubKey, long[] datajobKeys, RepositoryManager database)
        {
            try
            {
                _remoteLogger.LogTrace(LoggingEvents.DeactivateDatajobs, "DeactivateDatajobs - Id: {Id}, HubKey: {hubKey}, DatalinkKeys: {datalinkKeys}.", id, hubKey, string.Join(",", datajobKeys));

                var value = new
                {
	                hubKey,
	                datajobKeys,
                };

                var result = await SendRemoteMessage<JToken>(hubKey, id, nameof(RemoteOperations.DeactivateDatajobs), value, null, database, CancellationToken.None);
            }
            catch (Exception ex)
            {
                throw new RemoteAgentException($"Error deactivating datajobs. {ex.Message}.", ex);
            }
        }
		
		public async Task ActivateApis(string id, long hubKey, string connectionId, long[] apiKeys, InputParameters inputParameters, RepositoryManager database)
        {
            try
            {
                _remoteLogger.LogTrace(LoggingEvents.ActivateApis, "ActivateApis - Id: {Id}, HubKey: {hubKey}, ApiKeys: {apiKeys}.", id, hubKey, string.Join(",", apiKeys));

                var hub = await database.GetHub(hubKey);

                // populate the table/datalink cache to be send to the remote agent.
                var cache = new CacheManager(hubKey, hub.EncryptionKey);
                cache.AddApis(apiKeys, hub);

                var value = new
                {
	                cache,
	                connectionId,
	                apiKeys = apiKeys,
	                inputParameters
                };

                var result = await SendRemoteMessage<JToken>(hubKey, id, nameof(RemoteOperations.ActivateApis), value, null, database, CancellationToken.None);
            }
            catch (Exception ex)
            {
                throw new RemoteAgentException($"Error activating apis. {ex.Message}.", ex);
            }
        }
	    
		public async Task DeactivateApis(string id, long hubKey, long[] apiKeys, RepositoryManager database)
        {
            try
            {
                _remoteLogger.LogTrace(LoggingEvents.DeactivateApis, "DeactivateApis - Id: {Id}, HubKey: {hubKey}, ApiKeys: {apiKeys}.", id, hubKey, string.Join(",", apiKeys));

                var value = new
                {
	                hubKey,
	                apiKeys = apiKeys,
                };

                var result = await SendRemoteMessage<JToken>(hubKey, id, nameof(RemoteOperations.DeactivateApis), value, null, database, CancellationToken.None);
            }
            catch (Exception ex)
            {
                throw new RemoteAgentException($"Error deactivating apis. {ex.Message}.", ex);
            }
        }

		public Task<string> CallApi(string id, string apiKey, string action, string parameters, string ipAddress)
		{
			try
			{
				_remoteLogger.LogTrace(LoggingEvents.DeactivateApis, "Call Api - Id: {Id}, ApiKey: {apiKey}, {parameters}.", id, apiKey, parameters);

				var value = new
				{
					apiKey,
					action,
					parameters,
					ipAddress,
					proxyUrl = _defaultProxyUrl
				};
				
				var result = SendRemoteMessage<string>(0, id, nameof(RemoteOperations.CallApi), value, null, null, CancellationToken.None);
				return result;
			}
			catch (Exception ex)
			{
				throw new RemoteAgentException($"Error calling api. {ex.Message}.", ex);
			}
		}

		public async Task  CancelTasks(ManagedTask[] tasks, RepositoryManager database)
		{
            try
            {
	            var remoteAgents = tasks.Select(c => (RemoteAgentId: c.ReferenceId, HubKey: c.ReferenceKey)).Distinct();

	            foreach (var remoteAgentId in remoteAgents)
	            {
		            _remoteLogger.LogTrace(LoggingEvents.CancelTasks,
			            "CancelTasks - Id: {Id}, references: {references}.", remoteAgentId.RemoteAgentId,
			            string.Join(",", tasks.Select(c=>c.Reference)));

		            var references = tasks.Where(c=>c.ReferenceId == remoteAgentId.RemoteAgentId && c.ReferenceKey == remoteAgentId.HubKey)
			            .Select(c => c.Reference).ToArray();
		            
		            var remoteMessage = new RemoteMessage()
		            {
			            Value = Json.JTokenFromObject(references, ""),
			            Method = nameof(RemoteOperations.CancelTasks),
			            HubKey = remoteAgentId.HubKey,
			            TimeOut = int.MaxValue
		            };

		            //TODO Cancel Tasks need to get the instance id somehow.  Not working.
		            var result = await SendRemoteMessage<ManagedTask>(remoteAgentId.HubKey, remoteAgentId.RemoteAgentId, nameof(RemoteOperations.CancelTasks), references, null, database, CancellationToken.None);
	            }
            }
            catch (Exception ex)
            {
                throw new RemoteAgentException($"Error cancelling tasks. {ex.Message}.", ex);
            }
        }

		public async Task RestartAgents(string userId, IEnumerable<string> instanceIds, bool force, RepositoryManager database)
		{
			var value = new
			{
				force,
			};
			
			var exceptions = new ConcurrentQueue<Exception>();
			
			foreach(var instanceId in instanceIds)
			{
				try
				{
					var remoteAgentProperties = await GetRemoteAgentProperties(instanceId, CancellationToken.None);

					if (remoteAgentProperties != null)
					{
						if (remoteAgentProperties.UserId == userId)
						{
							await SendRemoteMessage<bool>(0, instanceId, nameof(RemoteOperations.ReStart), value, null, database, CancellationToken.None);	
						}
						else
						{
							exceptions.Enqueue(new RemoteAgentException("The remote agent could not be restarted as the current user must be the same as the remote agent user."));							
						}
					}

				}
				catch (Exception e)
				{
					exceptions.Enqueue(e);
				}
			}

			if (exceptions.Count > 0)
			{
				throw new AggregateException("There were some issues restarting the agents.", exceptions);
			}
		}
		
		public async Task RestartAgents(string userId, IEnumerable<long> remoteAgentKeys, bool force, RepositoryManager database)
		{
			var exceptions = new ConcurrentQueue<Exception>();
			
			await Task.WhenAll(remoteAgentKeys.Select(async remoteAgentKey =>

			{
				try
				{
					var remoteAgent = await database.GetRemoteAgent(remoteAgentKey);

					if (remoteAgent != null)
					{
						if (remoteAgent.UserId == userId)
						{
							await _remoteAgentContext.Clients.Groups(remoteAgentIdentity(remoteAgent.RemoteAgentKey))
								.SendAsync("Restart");
							return;
						}

						exceptions.Enqueue(new RemoteAgentException(
							"The remote agent could not be restarted as the current user must be the same as the remote agent user."));
					}
				}
				catch (Exception e)
				{
					exceptions.Enqueue(e);
				}

			}).ToArray());
			
			if (exceptions.Count > 0)
			{
				throw new AggregateException("There were some issues restarting the agents.", exceptions);
			}
		}

		public async Task<DexihRemoteAgent[]> PingAgents(ApplicationUser user, string connectionId, RepositoryManager repositoryManager)
		{
			var remoteAgents = await repositoryManager.GetRemoteAgents(user);

			var exceptions = new ConcurrentQueue<Exception>();
			
			await Task.WhenAll(remoteAgents.Select(async remoteAgent =>

				{
					try
					{
						await _remoteAgentContext.Clients.Groups(remoteAgentIdentity(remoteAgent.RemoteAgentKey))
							.SendAsync("Ping", connectionId);
					}
					catch (Exception ex)
					{
						exceptions.Enqueue(ex);
					}

				}).ToArray());

			if (exceptions.Count > 0)
			{
				throw new AggregateException("There were some issues pinging the agents.", exceptions);
			}
			
			return remoteAgents;
		}
		
		public async Task<NamingStandards> NamingStandards(string instanceId, long hubKey, RepositoryManager repositoryManager)
		{
			var result = await SendRemoteMessage<NamingStandards>(hubKey, instanceId, nameof(RemoteOperations.NamingStandards), null, null, repositoryManager, CancellationToken.None);
			return result;
		}
		
	    #endregion

    }
}
