using System;
using System.ComponentModel;
using System.Diagnostics;
using System.IO;
using System.IO.Compression;
using System.Net;
using System.Net.Http;
using System.Threading;

namespace dexih.remote.run
{
    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                if(args.Length > 0 && (args[0] == "?" || args[0] == "-?" || args[0] == "--?" || args[0] == "-help" || args[0] == "--help"))
                {
                    Console.WriteLine(@"
To run use the syntax: dexih.remote.run {Information Hub Url} {pre/stable}.
The default options are: https://dexih.dataexpertsgroup.com stable
Example (this will use prerelease versions of the remote agents):
    dexih.remote.run https://dexih.dataexpertsgroup.com pre
");
                }

                Console.WriteLine(@"
 _______   _______ ___   ___  __   __    __  
|       \ |   ____|\  \ /  / |  | |  |  |  | 
|  .--.  ||  |__    \  V  /  |  | |  |__|  | 
|  |  |  ||   __|    >   <   |  | |   __   | 
|  '--'  ||  |____  /  .  \  |  | |  |  |  | 
|_______/ |_______|/__/ \__\ |__| |__|  |__| 

Welcome to Dexih - The Data Experts Information Hub
");
                Console.WriteLine("This will launch an instance of a remote agent.");
                var server = args.Length >= 1 ? args[0] : "https://dexih.com";
                const string directory = "dexih.remote";
                const string os = "windows";
                var pre = args.Length >=2 ? args[1] : "stable";

                if (!Directory.Exists(directory))
                {
                    Directory.CreateDirectory(directory);
                }

                var previousVersion = "";

                var upgrade = 20;
                while (upgrade == 20)
                {
                    string latestVersion;
                    string latestBinary;
                    string latestUrl;
                    var localVersion = "";

                    using (var httpClient = new HttpClient())
                    {
                        var result = httpClient.GetStringAsync($"{server}/api/Remote/LatestVersion/{os}/{pre}").Result;

                        if(string.IsNullOrEmpty(result))
                        {
                            Console.Error.WriteLine($"Error:  There was no response from the Information Hub at {server}.");
                            return;
                        }

                        var versionInfo = result.Split('\r', '\n');

                        if (versionInfo.Length != 3)
                        {
                            Console.Error.WriteLine($"Error:  Incorrect version information received from {server}.  The result was {versionInfo}");
                            return;
                        }

                        latestVersion = versionInfo[0];
                        latestBinary = versionInfo[1];
                        latestUrl = versionInfo[2];
                    }

                    var localVersionPath = Path.Combine(directory, "dexih.remote.version");
                    if (File.Exists(localVersionPath))
                    {
                        localVersion = File.ReadAllText(localVersionPath);
                    }

                    Console.WriteLine($"Local Version: {localVersion}");
                    Console.WriteLine($"Latest Version: {latestVersion}");
                    Console.WriteLine($"Latest Binary: {latestBinary}");
                    Console.WriteLine($"Latest Url: {latestUrl}");

                    if (!string.IsNullOrEmpty(previousVersion) && previousVersion == latestVersion)
                    {
                        Console.Error.WriteLine("The latest binary has already been downloaded, and another upgrade has been requested.");
                        Console.Error.WriteLine("The launcher will exit to avoid a infinte download loop.");
                        throw new Exception("Exiting");
                    }

                    if (latestVersion != localVersion || ! Directory.Exists(directory))
                    {
                        Console.Write($"Downloading latest version from {latestUrl}");

                        using (var progress = new ProgressBar())
                        {
                            var completeEvent = new ManualResetEvent(false);

                            //web client call back procedures
                            void DownloadProgressCallback(object sender, DownloadProgressChangedEventArgs e)
                            {
                                progress.Report(e.ProgressPercentage / 100.0);
                            }

                            //web client call back procedures
                            void DownloadProgressComplete(object sender, AsyncCompletedEventArgs e)
                            {
                                if (e.Cancelled)
                                {
                                    throw new Exception("The download was cancelled");
                                }
                                if (e.Error != null)
                                {
                                    throw e.Error;
                                }
                                completeEvent.Set();
                            }

                            using (var client = new WebClient())
                            {
                                try
                                {
                                    ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12;

                                    // Specify a progress notification handler.
                                    client.DownloadProgressChanged += DownloadProgressCallback;
                                    client.DownloadFileCompleted += DownloadProgressComplete;
                                    client.DownloadFileAsync(new Uri(latestUrl), latestBinary);
                                    completeEvent.WaitOne();
                                }
                                catch (Exception ex)
                                {
                                    Console.Error.WriteLine("Could not retrieve binaries at: " + latestUrl + ".  Error message: " + ex.Message);
                                    throw;
                                }
                            }
                        }

                        var tempDirectory = Path.Combine(Path.GetTempPath(), Path.GetRandomFileName());
                        var backupDirectory = "dexih_remote_" + DateTime.Now.ToString("yyyyMMddHHmmssmi");

                        Console.WriteLine();
                        Console.WriteLine("Extracting files to temp directory at " + tempDirectory);

                        Directory.CreateDirectory(tempDirectory);
                        ZipFile.ExtractToDirectory(latestBinary, tempDirectory);

                        // remove the old directory
                        if (Directory.Exists(directory))
                        {
                            Directory.Move(directory, backupDirectory);
                            Console.WriteLine();
                            Console.WriteLine("Previous version backed up to " + backupDirectory);
                        }

                        Directory.Move(tempDirectory, directory);
                        File.Delete(latestBinary);

                        File.WriteAllText(Path.Combine(directory, "dexih.remote.version"), latestVersion);

                        previousVersion = latestVersion;
                    }

                    var path = Path.Combine(directory, "dexih.remote.exe");
                    var process = Process.Start(path);

                    if (process == null)
                    {
                        Console.Error.WriteLine($"Error launching the remote agent at {path}.");
                        return;
                    }

                    Console.WriteLine("Launching remote agent...");

                    process.WaitForExit();
                    upgrade = process.ExitCode;
                }
            }
            catch(Exception ex)
            {
                Console.Error.WriteLine($"The following error was encountered:  {ex.Message}.  This could be an issue connecting to the download site.  If this continues the latest release can be downloaded manually from https://github.com/DataExperts/Dexih.App.Remote/releases/latest.");
            }
        }
    }
}
