﻿using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using dexih.operations;
using dexih.repository;
using Dexih.Utils.Crypto;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Caching.Distributed;
using Microsoft.Extensions.Caching.Memory;
using Microsoft.Extensions.Logging;

namespace dexih.api.Services.Operations
{

    public class DexihOperations : IDexihOperations
    {
        public DexihOperations(
			DexihRepositoryContext dbContext, 
			UserManager<ApplicationUser> userManager,
			ApplicationSettings config,
			ILoggerFactory loggerFactory,
			ICacheService cacheService,
			IHubContext<BrowserHub> browserContext
			)
        {
            Config = config;
            RepositoryManager = new RepositoryManager(dbContext, userManager, cacheService, loggerFactory );
            RepositoryManager.OnHubChange += SendHubChange;

            _browserContext = browserContext;
            _logger = loggerFactory.CreateLogger("DexihOperations");
            
        }

        private async void SendHubChange(Import import, string[] users)
        {
            try
            {
                var sendMessage = new RemoteMessage("", "", "hub-change", Json.JTokenFromObject(import, ""));
                await _browserContext.Clients.Users(users).SendAsync("Command", sendMessage, CancellationToken.None);
            }
            catch (Exception e)
            {
                _logger.LogCritical($"An unexpected error occurred sending a update hub message to hub {import?.HubKey}.  {e.Message}");
            }
        }

        private readonly ILogger _logger;
        
        private readonly IHubContext<BrowserHub> _browserContext;
        public RepositoryManager RepositoryManager { get; }
        public ApplicationSettings Config { get; }

        public void Dispose()
        {
            RepositoryManager.Dispose();
        }
        
        #region Broadcast Messages

        /// <summary>
        /// Broadcasts the hub message async.
        /// </summary>
        /// <returns>The hub message async.</returns>
        /// <param name="hubKey">Hub key.</param>
        /// <param name="command">Command.</param>
        /// <param name="content">Content.</param>
        /// <param name="cancellationToken"></param>
        public async Task BroadcastHubMessageAsync(long hubKey, string command, object content, CancellationToken cancellationToken)
        {
            var sendMessage = new RemoteMessage("", "", command, Json.JTokenFromObject(content, "none"));
            await _browserContext.Clients.Group(hubKey.ToString()).SendAsync("Command", sendMessage, cancellationToken: cancellationToken);
        }

        /// <summary>
        /// Broadcasts a message to all conntected userIds.
        /// </summary>
        /// <returns>The users message async.</returns>
        /// <param name="userIds">User identifiers.</param>
        /// <param name="command">Command.</param>
        /// <param name="content">Content.</param>
        /// <param name="cancellationToken"></param>
        public async Task BroadcastUsersMessageAsync(IEnumerable<string> userIds, string command, object content, CancellationToken cancellationToken)
        {
            var sendMessage = new RemoteMessage("", "", command, Json.JTokenFromObject(content, "none"));
			
            foreach (var userId in userIds)
            {
                await _browserContext.Clients.User(userId).SendAsync("Command", sendMessage, cancellationToken: cancellationToken);
            }
        }

        /// <summary>
        /// Broadcast a message to a specific browser client.
        /// </summary>
        /// <param name="connectionId"></param>
        /// <param name="command"></param>
        /// <param name="content"></param>
        /// <returns></returns>
        public async Task BroadcastClientMessageAsync(string connectionId, string command, object content, CancellationToken cancellationToken)
        {
            if (string.IsNullOrEmpty(connectionId))
            {
                _logger.LogWarning($"BroadcastClientMessage failed due to empty client id.  The command was: {command}.");
                return;
            }

            var sendMessage = new RemoteMessage("", "", command, Json.JTokenFromObject(content, "none"));
            await _browserContext.Clients.Client(connectionId).SendAsync("Command", sendMessage, cancellationToken: cancellationToken);
        }
	    
        #endregion
        

    }
}
