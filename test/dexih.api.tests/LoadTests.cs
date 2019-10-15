using System;
using System.Diagnostics;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using dexih.functions;
using dexih.repository;
using Dexih.Utils.MessageHelpers;

using Xunit;
using Xunit.Abstractions;

namespace dexih.api.tests
{
    public class LoadTests
    {
        private readonly string _url;
        private readonly string _email;
        private readonly string _password;

        private readonly ITestOutputHelper _output;

        public LoadTests(ITestOutputHelper output)
        {
            _output = output;

            _url = Configuration.AppSettings["DexihUrl"];
            _password = Configuration.AppSettings["DexihPassword"];
            _email = Configuration.AppSettings["DexihEmail"];
        }

       
        [Theory]
        [InlineData(10, 1000)]
        public async void LoginPerformance(int concurrent, int delay)
        {


            var timer = Stopwatch.StartNew();
            var bestTime = long.MaxValue;
            var worstTime = 0L;
            var totalTime = 0L;

            var tasks = Enumerable.Range(0, concurrent).Select(i => Task.Run(async () =>
            {
                await Task.Delay(delay * i);
                
                var loginTimer = Stopwatch.StartNew();

                await Configuration.Login();
                
                loginTimer.Stop();
                var ellapsed = loginTimer.ElapsedMilliseconds;
                _output.WriteLine($"Time - {ellapsed}.");
                if (ellapsed < bestTime) bestTime = ellapsed;
                if (ellapsed > worstTime) worstTime = ellapsed;
                Interlocked.Add(ref totalTime, ellapsed);
            }));

            await Task.WhenAll(tasks);
            
            timer.Stop();
            
            _output.WriteLine($"Best Time - {bestTime}.");
            _output.WriteLine($"Worst Time - {worstTime}.");
            _output.WriteLine($"Total Time - {timer.ElapsedMilliseconds}.");
            _output.WriteLine($"Average Time - {totalTime / concurrent}");
        }
        
        [Theory]
        [InlineData(1, 0)]
        [InlineData(10, 1000)]
        [InlineData(100, 10)]
        [InlineData(1000, 100)]
        public async void GetHubPerformance(int concurrent, int delay)
        {
            await Configuration.Login();

            var timer = Stopwatch.StartNew();
            var bestTime = long.MaxValue;
            var worstTime = 0L;
            var totalTime = 0L;

            var data = new long[concurrent];
            var errors = new string[concurrent];

            var tasks = Enumerable.Range(0, concurrent).Select(i => Task.Run(async () =>
            {
                await Task.Delay(delay * i);
                var loopTimer = Stopwatch.StartNew();

                try
                {
                    var hubKey = new {HubKey = 2};
                    var response = await Configuration.Post("/api/Hub/GetHubCache", hubKey);

                    var hubCache = JsonExtensions.Deserialize<ReturnValue<DexihHub>>(response);

                    if (!hubCache.Success)
                    {
                        errors[i] = hubCache.Message;
                    }

                }
                catch (Exception e)
                {
                    errors[i] = e.Message;
                }
                finally
                {
                    loopTimer.Stop();
                    var elapsed = loopTimer.ElapsedMilliseconds;
                    data[i] = elapsed;
                    if (elapsed < bestTime) bestTime = elapsed;
                    if (elapsed > worstTime) worstTime = elapsed;
                    Interlocked.Add(ref totalTime, elapsed);
                }
            }));

            await Task.WhenAll(tasks);

            for(var i = 0; i < concurrent; i++)
            {
                _output.WriteLine($"{data[i]}\t{errors[i]}");
            }
            
            timer.Stop();
            
            _output.WriteLine($"Best Time - {bestTime}.");
            _output.WriteLine($"Worst Time - {worstTime}.");
            _output.WriteLine($"Total Time - {timer.ElapsedMilliseconds}.");
            _output.WriteLine($"Average Time - {totalTime / concurrent}");
        }
    }
}
