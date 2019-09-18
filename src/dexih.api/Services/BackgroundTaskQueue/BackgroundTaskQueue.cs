using System.Collections.Concurrent;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.Extensions.Hosting;

namespace dexih.api.Services.BackgroundTasks
{
    public class BackgroundTasks: IHostedService
    {
        private ConcurrentQueue<Task> _tasks = new ConcurrentQueue<Task>();
        private 
        public Task StartAsync(CancellationToken cancellationToken)
        {
            throw new System.NotImplementedException();
        }

        private ProcessTasks()
        {
            _tasks.
        }

        public Task StopAsync(CancellationToken cancellationToken)
        {
            throw new System.NotImplementedException();
        }
    }
}