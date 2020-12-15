using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;

namespace dexih.api.Services.BrowserConnections
{
    public interface IBrowserConnections
    {
        void AddClient(string connectionId, string userId);
        void RemoveClient(string connectionId, string userId);

        Task UpdateHubClients(long hubKey, HashSet<string> userIds, CancellationToken cancellationToken);

    }
}