using dexih.api.Services;
using dexih.api.Services.Remote;
using dexih.operations;
using dexih.repository;
using Dexih.Utils.ManagedTasks;
using Dexih.Utils.MessageHelpers;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.IO;
using System.IO.Compression;
using System.Linq;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Dexih.Utils.Crypto;
using Certes;
using Certes.Acme;
using Certes.Acme.Resource;
using dexih.api.Models;
using dexih.api.Services.Operations;
using dexih.api.Services.Remote.Exceptions;
using dexih.functions;
using dexih.remote.Operations.Services;
using Dexih.Utils.CopyProperties;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Caching.Distributed;
using Newtonsoft.Json;
using Directory = System.IO.Directory;

namespace dexih.api.Controllers
{
    [Authorize]
    [ApiExceptionFilter]
    [Route("api/[controller]")]
    public class RemoteController : Controller
    {
        
        public RemoteController(IDexihOperations operations,
            SignInManager<ApplicationUser> signInManager,
            IDistributedCache distributedCache,
            IRemoteAgents remoteServers,
            IHostingEnvironment hostingEnvironment,
            ILoggerFactory loggerFactory,
            ApplicationSettings applicationSettings)
        {
            _operations = operations;
            _signInManager = signInManager;
            _remoteServers = remoteServers;
            _hostingEnvironment = hostingEnvironment;
            _logger = loggerFactory.CreateLogger<RemoteController>();
            _distributedCache = distributedCache;
            _applicationSettings = applicationSettings;
        }

        private readonly IDexihOperations _operations;
        private readonly IRemoteAgents _remoteServers;
        private readonly IHostingEnvironment _hostingEnvironment;
        private readonly ILogger _logger;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly IDistributedCache _distributedCache;
        private readonly ApplicationSettings _applicationSettings;


        // POST: /Account/RemoteLogin
        // Used by the job server to retrieve a Remote Communication guid.
        [HttpPost("[action]")]
        [AllowAnonymous]
        public async Task<JsonResult> Login([FromBody] RemoteSettings remoteSettings)
        {
            try
            {
                if (ModelState.IsValid)
                {
					_logger.LogInformation(LoggingEvents.RemoteLogin, "Login - Remote Agent Login {user}, {servername}, remoteAgentId {remoteAgentId}, version {version}", User, remoteSettings.AppSettings.User, remoteSettings.AppSettings.Name, remoteSettings.Runtime.Version);

					var user = await _operations.RepositoryManager.GetUserFromEmail(remoteSettings.AppSettings.User);
                    if (user == null)
                    {
                        _logger.LogWarning(LoggingEvents.RemoteLogin, "Login - Invalid remote login attempt using Email: " + User);
                        return Json(new { Success = false, Message = "Invalid login attempt." });
                    }

                    if (remoteSettings.Runtime.Version.Substring(0, 4) != "0.5.")
                    {
                        _logger.LogWarning(LoggingEvents.RemoteLogin, "Login - Invalid remote login attempt incorrect version: " + remoteSettings.Runtime.Version + " from login: " + User);
                        return Json(new { Success = false, Message = "The remote agent version number is not compatible with the current integration hub web site.  Please update." });
                    }
                    
                    var remoteIp = Request.HttpContext.Connection.RemoteIpAddress.MapToIPv4().ToString();
                    if (remoteIp == "::1")
                    {
                        remoteIp = "127.0.0.1";
                    }

                    _logger.LogInformation(LoggingEvents.RemoteLogin, "Login - Remote Agent Login {user}, {servername}, remoteAgentId {remoteAgentId}, version {version}, ipAddress {ipAddress}", User, remoteSettings.AppSettings.User, remoteSettings.AppSettings.Name, remoteSettings.Runtime.Version, remoteIp);

                    var dbRemoteAgent = await _operations.RepositoryManager.RemoteAgentLogin(remoteIp, remoteSettings.AppSettings.RemoteAgentId);

                    bool authenticated;
                    if(!string.IsNullOrEmpty(remoteSettings.AppSettings.UserToken))
                    {
                        if (dbRemoteAgent == null)
                        {
                            return Json(new { Success = false, Message = $"The specified remoteAgentId does not exist, cannot be used from this ip address ({remoteIp}) or has been revoked." });
                        }

                        authenticated = await _operations.RepositoryManager.VerifyUserTokenAsync(user, remoteSettings.AppSettings.RemoteAgentId, remoteSettings.AppSettings.UserToken);
                        if (!authenticated)
                        {
                            return Json(new { Success = false, Message = "The authentication token provided is invalid." });
                        }

                        // validate the login token.
                        var storedUserToken = dbRemoteAgent.HashedToken;
                        var passed = HashString.ValidateHash(remoteSettings.AppSettings.UserToken, storedUserToken);

                        if(!passed)
                        {
                            return Json(new { Success = false, Message = "The UserToken/RemoteID did not match the current value for this user.  Please generate a new token." });
                        }
                    }
                    else if(!string.IsNullOrEmpty(remoteSettings.Runtime.Password))
                    {
                        var result = await _signInManager.PasswordSignInAsync(user, remoteSettings.Runtime.Password, false, lockoutOnFailure: false);
                        authenticated = result.Succeeded;
                        remoteSettings.Runtime.GenerateUserToken = true;
                    }
                    else
                    {
                        return Json(new { Success = false, Message = "There was no password or authentication token provided." });
                    }

                    var newUserToken = "";

                    if (authenticated && remoteSettings.Runtime.GenerateUserToken)
                    {
                        if (string.IsNullOrEmpty(remoteSettings.Runtime.Password))
                        {
                            return Json(new { Success = false, Message = "To generate a new user token, a password must be specified." });
                        }

                        if (dbRemoteAgent == null)
                        {
                            dbRemoteAgent = new DexihRemoteAgent()
                            {
                                UserId =  user.Id,
                                RestrictIp = true,
                                IpAddresses = new [] {remoteIp},
                                Name = remoteSettings.AppSettings.Name,
                                RemoteAgentId = remoteSettings.AppSettings.RemoteAgentId,
                            };
                        }
                        else
                        {
                            if (dbRemoteAgent.UserId != user.Id)
                            {
                                return Json(new { Success = false, Message = "The remote agent can not be updated as it is registered with a different user id." });
                            }

                            dbRemoteAgent.Name = remoteSettings.AppSettings.Name;

                            if (dbRemoteAgent.RestrictIp && !(dbRemoteAgent.IpAddresses != null && dbRemoteAgent.IpAddresses.Contains(remoteIp)))
                            {
                                if (dbRemoteAgent.IpAddresses == null)
                                {
                                    dbRemoteAgent.IpAddresses = new[] {remoteIp};
                                }
                                else
                                {
                                    dbRemoteAgent.IpAddresses = dbRemoteAgent.IpAddresses.Append(remoteIp).ToArray();
                                }
                            }
                        }
                        
                        newUserToken = await _operations.RepositoryManager.GenerateRemoteUserToken(user, remoteSettings.AppSettings.RemoteAgentId);
                        
                        // hash the token so that it's not stored in plain text.
                        var hashedToken = HashString.CreateHash(newUserToken);

                        dbRemoteAgent.HashedToken = hashedToken;

                        dbRemoteAgent = await _operations.RepositoryManager.SaveRemoteAgent(user.Id, dbRemoteAgent);
                    }

                    if (authenticated)
                    {
                        if (dbRemoteAgent == null)
                        {
                            return Json(new { Success = false, Message = $"There is no remote agent registered with the id {remoteSettings.AppSettings.RemoteAgentId} ." });
                        }

                        if (dbRemoteAgent.UserId != user.Id)
                        {
                            return Json(new { Success = false, Message = $"There user {user.Email} is not associated with this remote agent {remoteSettings.AppSettings.RemoteAgentId} ." });
                        }
                        
                        if(dbRemoteAgent.RestrictIp && !(dbRemoteAgent.IpAddresses != null && dbRemoteAgent.IpAddresses.Contains(remoteIp) ))
                        {
                            return Json(new { Success = false, Message = $"The remote agent has restrictions on the IP, and the IP address {remoteIp} is not allowed.." });
                        }

                        if (dbRemoteAgent.Name != remoteSettings.AppSettings.Name)
                        {
                            dbRemoteAgent.Name = remoteSettings.AppSettings.Name;
                            await _operations.RepositoryManager.SaveRemoteAgent(dbRemoteAgent.UserId, dbRemoteAgent);
                        }
                        
                        await _signInManager.RefreshSignInAsync(user);

                        // create a hash of the userid, which is used as part of the dynamic url.
                        var userHash = user.Id.CreateSHA1();
                        
                        
                        // create a security key, which is not sent the the browser client, and used to ensure the instance id hasn't been hijacked by another remote agent.
                        var instance = await _remoteServers.AuthorizeRemoteAgent(remoteSettings.AppSettings.Name, dbRemoteAgent.RemoteAgentKey, remoteSettings.AppSettings.EncryptionKey, remoteIp, user.Id);

//                        remoteSettings.Runtime.ExternalIpAddress = remoteIp;
//                        remoteSettings.Runtime.User = user;
//                        remoteSettings.Runtime.UserHash = userHash;
//
//                        // as security precaution remove references to password/usertoken now that authentication is completed.
//                        remoteSettings.Runtime.Password = null;
//                        remoteSettings.AppSettings.UserToken = null;

                        // var agent = _remoteServers.AuthorizeRemoteAgent(dbRemoteAgent.RemoteAgentKey, remoteSettings, remoteIp, user);

                        return Json(new {
                            Success = true,
                            instance.instanceId,
                            instance.securityToken,
                            UserToken = newUserToken,
                            IpAddress = remoteIp,
                            Message = "Login success",
                            UserHash = userHash,
                            _operations.Config.DefaultProxyUrl,
                            dbRemoteAgent.RemoteAgentKey
                        });
                    }
                    else
                    {
                        return Json(new { Success = false, Message = "Invalid password or revoked security token." });
                    }
                }

                // If we got this far, something failed, redisplay form
                return Json(new { Success = false, Message = "Login failed." });
            }
            catch(Exception ex)
            {
                return Json(new ReturnValue(false, "An unexpected error occurred logging in: message: " + ex.Message, ex));
            }
        }
        
        public class DatalinkProgress
        {
            public string InstanceId { get; set; }
            public string SecurityToken { get; set; }
            public string Command { get; set; }
            public IEnumerable<ManagedTask> Results { get; set; } 
        }

        /// <summary>
        /// This tracks task progress
        /// </summary>
        /// <param name="datalinkProgress"></param>
        [HttpPost("[action]")]
        public async Task<ReturnValue> UpdateTasks([FromBody] DatalinkProgress datalinkProgress)
        {
            try
            {
                var managedTasks = datalinkProgress.Results;

                //send any update to results to the clients
                foreach (var managedTask in managedTasks)
                {
                    managedTask.ReferenceId = datalinkProgress.InstanceId;
                    
                    await _operations.BroadcastClientMessageAsync(managedTask.OriginatorId, datalinkProgress.Command, managedTask);

                    switch (managedTask.Category)
                    {
                        case "Datalink":
                            await _operations.BroadcastHubMessageAsync(managedTask.ReferenceKey, "datalink-progress", managedTask);
                            break;
                        case "Datajob":
                            await _operations.BroadcastHubMessageAsync(managedTask.ReferenceKey, "datajob-progress", managedTask);
                            break;
                        case "DatalinkTest":
                        case "DatalinkTestSnapshot":
                            await _operations.BroadcastHubMessageAsync(managedTask.ReferenceKey, "datalinkTest-progress", managedTask);
                            break;
                        case "Table":
                            await _operations.BroadcastHubMessageAsync(managedTask.ReferenceKey, "table-progress", managedTask);
                            break;
                    }
                }
                return new ReturnValue(true);
            }
            catch (Exception ex)
            {
                return new ReturnValue(false, "Error occurred in UpdateTasks. " + ex.Message, ex);
            }
        }

        public class PostApiStatus
        {
            public string SecurityToken { get; set; }
            public IEnumerable<ApiData> ApiData { get; set; } 
        
        }

        /// <summary>
        /// This tracks task progress
        /// </summary>
        /// <param name="datalinkProgress"></param>
        /// <param name="apiData"></param>
        [HttpPost("[action]")]
        public async Task<ReturnValue> UpdateApi([FromBody] PostApiStatus apiData)
        {
            try
            {
                if (string.IsNullOrEmpty(apiData.SecurityToken))
                {
                    return new ReturnValue(false, $"Could not update api status as no securityToken was provided by the remote agent.", null );
                }

                //send any update to results to the clients
                foreach (var item in apiData.ApiData)
                {
                    await _operations.BroadcastHubMessageAsync(item.HubKey, "api-status", item);
                }

                return new ReturnValue(true);
            }
            catch (Exception ex)
            {
                return new ReturnValue(false, "Error occurred in UpdateTasks. " + ex.Message, ex);
            }
        }
                
        public class PostApiQuery
        {
            public string SecurityToken { get; set; }
            public IEnumerable<ApiQuery> ApiQueries { get; set; } 

        }
          
        /// <summary>
        /// This tracks task progress
        /// </summary>
        /// <param name="datalinkProgress"></param>
        [HttpPost("[action]")]
        public async Task<ReturnValue> ApiQuery([FromBody] PostApiQuery apiQuery)
        {
            try
            {
                if (string.IsNullOrEmpty(apiQuery.SecurityToken))
                {
                    return new ReturnValue(false, $"Could not update api query as no securityToken was provided by the remote agent.", null );
                }

                //send any update to results to the clients
                foreach (var item in apiQuery.ApiQueries)
                {
                    await _operations.BroadcastHubMessageAsync(item.HubKey, "api-query", item);
                }

                return new ReturnValue(true);
            }
            catch (Exception ex)
            {
                return new ReturnValue(false, "Error occurred in UpdateTasks. " + ex.Message, ex);
            }
        }
        
        [HttpPost("[action]")]
        public ReturnValue UpdateResponseMessage([FromBody] RemoteMessage[] returnMessages)
        {
            try
            {
                foreach (var returnMessage in returnMessages)
                {
                    _remoteServers.SetResponseMessage(returnMessage.MessageId, returnMessage, CancellationToken.None);
                }
                
                return new ReturnValue(true);

            }
            catch (Exception ex)
            {
                return new ReturnValue(false, "Error occurred in UpdateResponseMessage. " + ex.Message, ex);
            }
        }

//        [HttpGet("[action]")]
//        public FileStreamResult GetFileStream(string instanceId, string securityToken, string fileReference)
//        {
//            try
//            {
//                var streamResult = _remoteServers.GetFileStream(fileReference);
//
//                return File(streamResult.ContentStream, streamResult.ContentType, streamResult.FileName);
//
//            }
//            catch (Exception ex)
//            {
//                var bf = new BinaryFormatter();
//                using (var ms = new MemoryStream())
//                {
//                    bf.Serialize(ms, ex);
//                    ms.Seek(0, SeekOrigin.Begin);
//                    return File(ms, "application/json", "download_errors.json");
//                }
//            }
//        }
//        
//        [HttpPost("[action]")]
//        [ValidateHub(DexihHubUser.EPermission.None)]
//        public FileStreamResult GetFileStream([FromBody] FileStreamModel fileStreamModel)
//        {
//            try
//            {
//                var remoteServer = _remoteServers.GetRemoteAgentFromSecurityToken(fileStreamModel.SecurityToken);
//                if (remoteServer == null)
//                    return null;
//
//                var streamResult = remoteServer.GetFileStream(fileStreamModel.FileReference);
//                streamResult.ContentStream.Position = 0;
//                return File(streamResult.ContentStream, "application/csv", streamResult.FileName);
//
//            }
//            catch (Exception)
//            {
//                return null;
//            }
//        }
//
//        public class SetFileStreamModel
//        {
//            public long hubKey { get; set; }
//            public string instanceId { get; set; }
//            public string clientId { get; set; }
//            public string reference { get; set; }
//            public string contentType { get; set; }
//        }
//
//        [HttpPost("[action]")]
//         public async Task<ReturnValue> SetFileStream(SetFileStreamModel setFileStreamModel, IFormFile file)
//        {
//            try
//            {
//                var remoteServer = _remoteServers.GetRemoteAgentFromSecurityToken(setFileStreamModel.instanceId);
//                if (remoteServer == null)
//                {
//                    return new ReturnValue(false, "Security token invalid.", null);
//                }
//
//                //copy the filestream, as IFormFile will dispose after the action finishes.
//                var stream = new MemoryStream();
//                await file.CopyToAsync(stream);
//                stream.Position = 0;
//
//                var fileStream = new RemoteAgent.FileStream(file.FileName, setFileStreamModel.contentType, stream);
//                
//                remoteServer.SetFileStream(setFileStreamModel.reference, fileStream);
//
//                //broadcast the new file to the client
//                if (!string.IsNullOrEmpty(setFileStreamModel.clientId))
//                {
//
//                    var content = new
//                    {
//                        setFileStreamModel.hubKey,
//                        setFileStreamModel.instanceId,
//                        setFileStreamModel.reference,
//                        contentType = file.ContentType,
//                        fileName = file.FileName
//                    };
//
//                    await _operations.BroadcastClientMessageAsync(setFileStreamModel.clientId, "file-download", content);
//                }
//                
//                return new ReturnValue(true);
//            }
//            catch (Exception ex)
//            {
//                return new ReturnValue(false, "Error occurred in SetFileStream: " + ex.Message, ex);
//            }
//        }

        public class DownloadReadyModel
        {
            public long HubKey { get; set; }
            public string InstanceId { get; set; }
            public string SecurityToken { get; set; }
            public string ConnectionId { get; set; }
            public string Reference { get; set; }
            public string Url { get; set; }
        }

        [HttpPost("[action]")]
        public async Task<ReturnValue> DownloadReady([FromBody] DownloadReadyModel downloadReady)
        {
            try
            {
                var content = new
                {
                    hubKey = downloadReady.HubKey,
                    reference = downloadReady.Reference,
                    url = downloadReady.Url
                };

                //broadcast the new file to the client
                await _operations.BroadcastClientMessageAsync(downloadReady.ConnectionId, "download-ready", content);
                
                return new ReturnValue(true);
            }
            catch (Exception ex)
            {
                return new ReturnValue(false, "Error occurred in SetFileStream: " + ex.Message, ex);
            }
        }

        public class GenerateCertificateModel
        {
            public string domain { get; set; }
            public string password { get; set; }
        }

        /// <summary>
        /// Generates a new Pfx Certificate for a dynamic domain.
        /// This is used in conjunction with the Dexih.Dns.
        /// </summary>
        /// <param name="data"></param>
        /// <returns></returns>
        [HttpPost("[action]")]
        public async Task<ActionResult> GenerateCertificate([FromBody] GenerateCertificateModel data)
        {
            var appUser = await _operations.RepositoryManager.GetUser(User);
            _logger.LogInformation($"Generating ssl certificate for user {appUser.Email}, stored certificate expires: {appUser.CertificateExpiry}.");

            CertificateChain cert;
            IKey privateKey;

            // if the certificate expires in more than 30 days, use the stored one, otherwise create a new one.
            if (appUser.CertificateExpiry != null && appUser.CertificateExpiry >= DateTime.Now.AddDays(30))
            {
                cert = new CertificateChain(appUser.CertificateChain);
                privateKey = KeyFactory.FromPem(appUser.PrivateKey);
                _logger.LogDebug($"Used stored certificate chain for user {appUser.Email}.");
            }
            else
            {
                _logger.LogDebug($"Generating new certificate for user {appUser.Email}.");

                // the domain for the certificate is a hash of the userid.domain.
                var hash = appUser.Id.CreateSHA1();
                var domain = $"{hash}.{data.domain}";

                var txtName = $"_acme-challenge.{domain}";

                AcmeContext acme;
                var server = _hostingEnvironment.IsDevelopment()
                    ? WellKnownServers.LetsEncryptStagingV2
                    : WellKnownServers.LetsEncryptV2;

                // Load the saved account key
                if (System.IO.File.Exists("letsencrypt.pem"))
                {
                    _logger.LogDebug($"Using existing letencrypt account.");
                    var pemKey = System.IO.File.ReadAllText("letsencrypt.pem");
                    var accountKey = KeyFactory.FromPem(pemKey);
                    acme = new AcmeContext(server, accountKey);
                }
                else
                {
                    _logger.LogDebug($"Creating new letsencrypt account.");
                    acme = new AcmeContext(server);
                    if (string.IsNullOrEmpty(_operations.Config.LetsEncryptAccount))
                    {
                        throw new RemoteAgentException("There was no LetsEncryptAccount specific in the appsettings.json file on the web server.");
                    }
                    var account = acme.NewAccount(_operations.Config.LetsEncryptAccount, true);

                    // Save the account key for later use
                    var pemKey = acme.AccountKey.ToPem();
                    System.IO.File.WriteAllText("letsencrypt.pem", pemKey);
                }

                // place order for new certificate
                var order = await acme.NewOrder(new[] {$"*.{domain}"});
            
                // generate the dns challenge
                var authz = (await order.Authorizations()).First();
                var dnsChallenge = await authz.Dns();
                var dnxText = acme.AccountKey.DnsTxt(dnsChallenge.Token);
                var pair = new KeyValuePair<string, string>(txtName, dnxText);
                
                // get current items
                var txtItemsJson = await _distributedCache.GetStringAsync("txtRecords");
                List<KeyValuePair<string, string>> txtItems;
                
                if (txtItemsJson == null)
                {
                    txtItems = new List<KeyValuePair<string, string>>();
                }
                else
                {
                    txtItems = JsonConvert.DeserializeObject<List<KeyValuePair<string, string>>>(txtItemsJson);
                }

                txtItems.Add(pair);

                txtItemsJson = JsonConvert.SerializeObject(txtItems);
                var txtItemsByte = Encoding.ASCII.GetBytes(txtItemsJson);
                var options = new DistributedCacheEntryOptions() {SlidingExpiration = TimeSpan.FromSeconds(600)};
                await _distributedCache.SetAsync(txtName, txtItemsByte, options);

                try
                {
                    // validate certificate
                    var challenge = await dnsChallenge.Validate();

                    if (challenge.Error != null)
                    {
                        var message = $"Error running letsEncrypt challenge.  {challenge.Error.Detail}";
                        _logger.LogError(message);
                        throw new RemoteAgentException(message);
                    }

                    while (true)
                    {
                        await Task.Delay(100);
                        var a = await authz.Resource();
                        if (AuthorizationStatus.Invalid == a.Status)
                        {
                            var message = $"The authorization status is invalid.  Details:{challenge.Error?.Detail??"none"}";
                            _logger.LogError(message);
                            throw new RemoteAgentException(message);
                        }

                        var status = a.Status ?? AuthorizationStatus.Pending;

                        if (status == AuthorizationStatus.Valid)
                        {
                            break;
                        }
                    }
                } finally
                {
                    await _distributedCache.RemoveAsync(txtName);
                }

                // download certificate once validation is complete
                privateKey = KeyFactory.NewKey(KeyAlgorithm.ES256);
                cert = await order.Generate(new CsrInfo
                {
                    CountryName = "AU",
                    State = "Victoria",
                    Locality = "Melbourne",
                    Organization = "Data Experts Group",
                    OrganizationUnit = "Information Hub",
                    CommonName = $"*.{domain}",

                }, privateKey);

                // save the certificate for future usage
                appUser.PrivateKey = privateKey.ToPem();
                appUser.CertificateChain = cert.ToPem();
                appUser.CertificateExpiry = DateTime.Now.AddDays(90); // let's encrypt default expiry date.
                await _operations.RepositoryManager.UpdateUserAsync(appUser);
            }

            // build the pfx file
            var pfxBuilder = cert.ToPfx(privateKey);
            var pfx = pfxBuilder.Build("Data Experts Information Hub Certificate", data.password);

            return File(pfx, "application/octet-stream", "dexih.pfx");
        }




        /// <summary>
        /// Provides a list of Txt values that the Dexih.Dns can provide to validate the domain ownership.
        /// </summary>
        /// <returns></returns>
        [HttpGet("[action]")]
        [AllowAnonymous]
        public async Task<IActionResult> GetTxtRecords()
        {
            var txtItemsJson = await _distributedCache.GetStringAsync("txtRecords");
            return Content(txtItemsJson);
        }

        /// <summary>
        /// Returns the commands to kick off an install
        /// </summary>
        /// <returns></returns>
        [HttpGet("[action]/{os}")]
        [AllowAnonymous]
        public async Task<IActionResult> Install(string os)
        {
            var host = Request.Scheme + "://" + Request.Host;
            var command = "";

            switch (os.ToLower())
            {
                case "osx":
                case "linux":
                case "alpine":
                    command = $@"#!/usr/bin/env bash
curl -o ""dexih.remote.run.{os}.sh"" {host}/api/Remote/DownloadRemoteRun/{os}/stable
chmod a+x dexih.remote.run.{os}.sh
./dexih.remote.run.{os}.sh";
                    break;
                case "windows":
                    return await DownloadRemoteRun(os, "stable");
            }

            var memoryStream = new MemoryStream(Encoding.ASCII.GetBytes(command));
            return File(memoryStream, "text/plain", $"dexih.remote.install.{os.ToLower()}.sh");
        }

        [HttpGet("[action]/{os}/{pre}")]
        [AllowAnonymous]
        public async Task<IActionResult> DownloadRemoteRun(string os, string pre)
        {
            var download = await GetRemoteRun(os, pre);
            return File(download.stream, download.contentType, download.fileName);
        }

        /// <summary>
        /// Retrieves the latest version number which is used by upgrade scripts.
        /// </summary>
        /// <param name="os"></param>
        /// <param name="preRelease"></param>
        /// <returns></returns>
        [HttpGet("[action]/{os}/{preRelease}")]
        [AllowAnonymous]
        public async Task<string> LatestVersion(string os, string preRelease)
        {
            try
            {
                var versionInfo = await _applicationSettings.RemoteAgentVersion(os, preRelease.ToUpper() == "PRE");
                return versionInfo.Version + '\n' + versionInfo.FileName + '\n' + versionInfo.Url;
            }
            catch (Exception e)
            {
                _logger.LogError(e, $"Error getting latest remote agent version {e.Message}");
                return "";
            }

        }

        /// <summary>
        /// Downloads the latest agent
        /// </summary>
        /// <returns></returns>
        [HttpGet("[action]/{os}/{preRelease}")]
        [AllowAnonymous]
        public async Task<ActionResult> DownloadLatest(string os, string preRelease)
        {
            var versionInfo = await _applicationSettings.RemoteAgentVersion(os, preRelease.ToUpper() == "PRE");
            if (versionInfo != null)
            {
                return Redirect(versionInfo.Url);
            }

            throw new Exception("Remote download agent not found");
        }

        private async Task<(Stream stream, string contentType, string fileName)> GetRemoteRun(string os, string pre)
        {
            var host = Request.Scheme + "://" + Request.Host;
            var path = Path.Combine(Directory.GetCurrentDirectory(), "Resources", "RemoteAgents");

            switch (os.ToLower())
            {
                case "osx":
                case "linux":
                case "alpine":
                    var file = await System.IO.File.ReadAllLinesAsync(Path.Combine(path, $"dexih.remote.run.{os}.sh"));

                    for(var i =0; i < file.Length; i++)
                    {
                        if(file[i].Contains("{{SERVER}}")) file[i] = file[i].Replace("{{SERVER}}", host);
                        if(file[i].Contains("{{PRE}}")) file[i] = file[i].Replace("{{PRE}}", pre);
                    }
                
                    var memoryStream = new MemoryStream(Encoding.ASCII.GetBytes(string.Join('\n', file)));
                    return (memoryStream, "text/plain", $"dexih.remote.run.{os.ToLower()}.sh");
                case "windows":
                    var file2 = System.IO.File.OpenRead(Path.Combine(path, $"dexih.remote.run.exe"));
                    return (file2, "application/octet-stream", $"dexih.remote.run.exe");
            }

            throw new RemoteAgentControllerException($"The operating system {os} is not supported.");
        }
        
        private async Task<MemoryStream> CreateAppSettingsFile(RemoteAgentSettings settings)
        {
	        var remoteSettings = new RemoteSettings();
	        
	        // copy any settings across.
	        settings.RemoteApplicationSettings.CopyProperties(remoteSettings.AppSettings);
	        settings.RemoteApplicationSettings.CopyProperties(remoteSettings.Network);
	        settings.RemoteApplicationSettings.CopyProperties(remoteSettings.Permissions);
	        settings.RemoteApplicationSettings.CopyProperties(remoteSettings.Privacy);
	        remoteSettings.NamingStandards.LoadDefault();

	        remoteSettings.AppSettings.WebServer = (HttpContext.Request.IsHttps ? "https://" : "http://") +
	                                               HttpContext.Request.Host + HttpContext.Request.PathBase.Value;
	        remoteSettings.AppSettings.RemoteAgentId = Guid.NewGuid().ToString();

            var user = await _operations.RepositoryManager.GetUser(User);
            
            var dbRemoteAgent = new DexihRemoteAgent()
            {
                RemoteAgentId = remoteSettings.AppSettings.RemoteAgentId,
                RestrictIp = false,
                Name = remoteSettings.AppSettings.Name,
                UserId = user.Id
            };

	        if (settings.EmbedUserName)
	        {
		        remoteSettings.AppSettings.UserToken = await _operations.RepositoryManager.GenerateRemoteUserToken(user, remoteSettings.AppSettings.RemoteAgentId);
		        
		        var hashedToken = HashString.CreateHash(remoteSettings.AppSettings.UserToken);
	            dbRemoteAgent.HashedToken = hashedToken;	        
		        remoteSettings.AppSettings.User = user.UserName;
	        }

            if (settings.RemoteApplicationSettings.AutoGenerateCertificate)
            {
                remoteSettings.Network.CertificateFilename = "dexih.pfx";
                remoteSettings.Network.CertificatePassword = EncryptString.GenerateRandomKey();
            }
            
	        remoteSettings.Logging.LogLevel.Default = settings.LogLevel;
	        remoteSettings.Logging.LogLevel.System = settings.LogLevel;
	        remoteSettings.Logging.LogLevel.Microsoft = settings.LogLevel;

            await _operations.RepositoryManager.SaveRemoteAgent(user.Id, dbRemoteAgent);
	        var json = JsonConvert.SerializeObject(remoteSettings, Formatting.Indented);
	        var appSettingsStream = new MemoryStream(Encoding.ASCII.GetBytes(json));
            return appSettingsStream;
        }

        [HttpPost("[action]")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DownloadAppSettings([FromBody] RemoteAgentSettings settings)
        {
            var appsettingsStream = await CreateAppSettingsFile(settings);
            return File(appsettingsStream, "application/json", "appsettings.json");
        }

        [HttpPost("[action]")]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> DownloadZip([FromBody] RemoteAgentSettings settings)
        {
            var appSettingsStream = await CreateAppSettingsFile(settings);
            var remoteRunStream = await GetRemoteRun(settings.Environment.ToString(),
                settings.RemoteApplicationSettings.PreRelease ? "prerelease" : "stable");
            
            var memoryStream = new MemoryStream();

            using (var archive = new ZipArchive(memoryStream, ZipArchiveMode.Create, true))
            {
                var appSettingsEntry = archive.CreateEntry("appsettings.json");
                using (var appSettings = appSettingsEntry.Open())
                {
                    appSettingsStream.CopyTo(appSettings);
                }

                var remoteRunEntry = archive.CreateEntry(remoteRunStream.fileName);
                using (var remoteRunSettings = remoteRunEntry.Open())
                {
                    remoteRunStream.stream.CopyTo(remoteRunSettings);
                }
            }

            memoryStream.Position = 0;
            return File(memoryStream, "application/octet-stream", "dexih.remote.zip");
        }

        [AllowAnonymous]
        [HttpGet("[action]/{remoteAgentId}/{key}/{queryAction}")]
        public async Task<IActionResult> Api(string remoteAgentId, string key, string queryAction)
        {
            var parameters =Request.QueryString.Value;
            var ipAddress = Request.HttpContext.Connection.RemoteIpAddress;

            var url = await _remoteServers.CallApi(remoteAgentId, key, queryAction, parameters, ipAddress.ToString());

            return Redirect(url);
        }
        
    }
}
