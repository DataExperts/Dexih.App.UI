using System;
using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using dexih.operations;

namespace dexih.api.Services.Operations
{
    public interface IDexihOperations : IDisposable
    {
        ApplicationSettings Config { get; }
        RepositoryManager RepositoryManager { get; }
        
        Task BroadcastClientMessageAsync(string connectionId, string command, object content, CancellationToken cancellationToken);
        Task BroadcastHubMessageAsync(long hubKey, string command, object content, CancellationToken cancellationToken);
        Task BroadcastUsersMessageAsync(IEnumerable<string> userIds, string command, object content, CancellationToken cancellationToken);
    }
}
