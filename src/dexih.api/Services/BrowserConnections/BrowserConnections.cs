using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using dexih.api.Services.BackgroundTasks;
using dexih.api.Services.Operations;
using dexih.operations;
using Microsoft.AspNetCore.SignalR;
using Microsoft.Extensions.Logging;

namespace dexih.api.Services.BrowserConnections
{
    // We need to manually store the signalR connections as there is no means to access them directly.
    public class BrowserConnections: IBrowserConnections
    {
        public BrowserConnections(
            IHubContext<BrowserHub> browserContext,
            IBackgroundTaskQueue backgroundTaskQueue
        )
        {
            _browserContext = browserContext;
            _backgroundTaskQueue = backgroundTaskQueue;
        }
        
        private readonly ILogger _logger;

        private readonly IBackgroundTaskQueue _backgroundTaskQueue;
        
        private readonly IHubContext<BrowserHub> _browserContext;
        public RepositoryManager RepositoryManager { get; }

        public ApplicationSettings Config { get; }
        
        private readonly Dictionary<string, HashSet<string>> _connectedClients = new Dictionary<string, HashSet<string>>();
        
        public void AddClient(string connectionId, string userId)
        {
            var connected = _connectedClients.TryGetValue(userId, out var connections);
            if (!connected)
            {
                connections = new HashSet<string>();
                _connectedClients.Add(userId, connections);
            }

            if (!connections.Contains(connectionId))
            {
                connections.Add(connectionId);
            }
        }
        
        public void RemoveClient(string connectionId, string userId)
        {
            var connected = _connectedClients.TryGetValue(userId, out var connections);
            if (connected)
            {
                if (connections.Contains(connectionId))
                {
                    connections.Remove(connectionId);
                }
            }
        }
        
        public async Task UpdateHubClients(long hubKey, HashSet<string> userIds, CancellationToken cancellationToken)
        {
            var groupName = hubKey.ToString();

            _backgroundTaskQueue.QueueBackgroundWorkItem(async (cancellationToken) =>
            {
                foreach (var (userId, connectionIds) in _connectedClients)
                {
                    if (userIds.Contains(userId))
                    {
                        foreach (var connectionId in connectionIds)
                        {
                            await _browserContext.Groups.AddToGroupAsync(connectionId, groupName, cancellationToken);
                        }
                    }
                    else
                    {
                        foreach (var connectionId in connectionIds)
                        {
                            await _browserContext.Groups.RemoveFromGroupAsync(connectionId, groupName, cancellationToken);
                        }
                    }
                }
            });
        }
    }
}