//using System;
//using System.Collections.Concurrent;
//using System.Diagnostics;
//using System.IO;
//using System.Threading;
//using System.Threading.Tasks;
//using dexih.api.Services.Remote.Exceptions;
//using dexih.operations;
//using dexih.repository;
//using Dexih.Utils.MessageHelpers;
//using Microsoft.AspNetCore.SignalR;
//using Microsoft.Extensions.Logging;
//
//namespace dexih.api.Services.Remote
//{
//	public class FileStream
//	{
//		public FileStream(string fileName, string contentType, Stream contentStream)
//		{
//			ContentStream = contentStream;
//			ContentType = contentType;
//			FileName = fileName;
//		}
//
//		public Stream ContentStream { get; set; }
//		public string ContentType { get; set; }
//		public string FileName { get; set; }
//	}
//
//	
//	public class RemoteAgent
//	{
//		// public EventHandler OnDisconnect;
//
//		public RemoteAgent(ILoggerFactory loggerFactory, long remoteAgentKey, RemoteSettings remoteSettings, string securityToken, string iPAddress, ApplicationUser user)
//		{
//			_logger = loggerFactory.CreateLogger("RemoteAgent");
//			_logger.LogInformation(LoggingEvents.SocketRemoteAgentNew, "SocketRemoteAgent - userId {userId}, agentName: {agentName}, ipAddress {ipAddress}, remoteAgentId: {remoteAgentId}.", remoteSettings.AppSettings.User, remoteSettings.AppSettings.Name, iPAddress, remoteSettings.AppSettings.RemoteAgentId);
//
//			RemoteSettings = remoteSettings;
//			SecurityToken = securityToken;
//			IpAddress = iPAddress;
//			InstanceId = Guid.NewGuid().ToString();
//			RemoteAgentKey = remoteAgentKey;
//			User = user;
//		}
//		
//		public long RemoteAgentKey { get; }
//		public RemoteSettings RemoteSettings { get; }
//		public string SecurityToken { get; }
//		public string IpAddress { get; }
//		public string InstanceId { get; }
//		public ApplicationUser User { get; }
//		
//		public IClientProxy Client { get; set; }
//		public string ConnectionId {get;set;}
//
//        private readonly ILogger _logger;
//		private readonly ConcurrentDictionary<string, RemoteMessage> _responseMessages = new ConcurrentDictionary<string, RemoteMessage>(); //list of responses returned from clients.  This is updated by the hub.
//		private readonly ConcurrentDictionary<string, FileStream> _fileSaveStreams = new ConcurrentDictionary<string, FileStream>();
//
//		public const int MaxAcknowledgeWait = 30000;
//
////		private System.Timers.Timer _connectionTimer;
////
////		/// <summary>
////		/// Start a connection timer for 60 seconds that issues a disconnect if a signalr connection is not called.
////		/// </summary>
////		public void StartConnectionTimer()
////		{
////			_connectionTimer = new System.Timers.Timer(60000);
////			_connectionTimer.Elapsed += ConnectionTimerTrigger;
////		}
////
////		private void ConnectionTimerTrigger(object sender, EventArgs e)
////		{
////			OnDisconnect?.Invoke(this, EventArgs.Empty);
////		}
////
////		public void StopConnectionTimer()
////		{
////			if (_connectionTimer != null)
////			{
////				_connectionTimer.Stop();
////				_connectionTimer.Dispose();
////			}
////		}
////
////		public void Disconnect()
////		{
////			Client.SendAsync("Abort");
////			OnDisconnect?.Invoke(this, EventArgs.Empty);
////		}
//
////		/// <summary>
////		/// sends a message to the remote agent and awaits for a response.
////		/// </summary>
////		/// <param name="message"></param>
////		/// <param name="cancellationToken"></param>
////		/// <param name="awaitResponse"></param>
////		/// <returns>MessageToken</returns>
////		public async Task<T> SendRemoteMessage<T>(RemoteMessage message, CancellationToken cancellationToken, bool awaitResponse = true)
////        {
////            try
////            {
////				_logger.LogTrace(LoggingEvents.SocketRemoteAgentSendMessage, "SendRemoteMessage - agentName: {agentName}, remoteAgentId: {remoteAgentId}, MessageId: {messageId}, Method: {Method}.", RemoteSettings.AppSettings.Name, RemoteSettings.AppSettings.RemoteAgentId, message.MessageId, message.Method);
////
////				var messageId = Guid.NewGuid().ToString();
////                message.MessageId = messageId;
////                message.SecurityToken = SecurityToken;
////
////	            if (Client == null)
////	            {
////		            // OnDisconnect?.Invoke(this, EventArgs.Empty);
////		            throw new RemoteAgentException("The remote agent has been disconnected.");
////	            }
////
////				await Client.SendAsync("Command", message, cancellationToken: cancellationToken);       
////
////	            // if awaitResponse = false, this is a send and forget message, so don't wait for a response.
////				if (awaitResponse == false)
////				{
////					_logger.LogTrace(LoggingEvents.SocketRemoteAgentSendMessage, "SendRemoteMessage - response ignored: {agentName}, remoteAgentId: {remoteAgentId}, MessageId: {messageId}, Method: {Method}.", RemoteSettings.AppSettings.Name, RemoteSettings.AppSettings.RemoteAgentId, message.MessageId, message.Method);
////					return default(T);
////				}
////
////                var responseMessage = await GetResponseMessage<T>(messageId, cancellationToken);
////
////				if (!responseMessage.Success)
////				{
////					_logger.LogWarning(LoggingEvents.SocketRemoteAgentSendMessage, responseMessage.Exception, "SendRemoteMessage - response message failed: {agentName}, remoteAgentId: {remoteAgentId}, MessageId: {messageId}, Method: {Method}, Fail Message {message}", RemoteSettings.AppSettings.Name, RemoteSettings.AppSettings.RemoteAgentId, message.MessageId, message.Method, responseMessage.Message);
////                    throw new RemoteAgentException(responseMessage.Message, responseMessage.ExceptionDetails);
////				}
////				else 
////				{
////					_logger.LogTrace(LoggingEvents.SocketRemoteAgentSendMessage, "SendRemoteMessage - response complete: {agentName}, remoteAgentId: {remoteAgentId}, MessageId: {messageId}, Method: {Method}.", RemoteSettings.AppSettings.Name, RemoteSettings.AppSettings.RemoteAgentId, message.MessageId, message.Method);
////				}
////
////				return responseMessage.Value;
////
////            }
////            catch (Exception ex)
////            {
////				_logger.LogWarning(LoggingEvents.SocketRemoteAgentSendMessage, ex, "SendRemoteMessage - error: {agentName}, remoteAgentId: {remoteAgentId}, MessageId: {messageId}, Method: {Method}, Fail Message {message}", RemoteSettings.AppSettings.Name, RemoteSettings.AppSettings.RemoteAgentId, message.MessageId, message.Method, ex.Message);
////				throw new RemoteAgentException($"From remote agent {RemoteSettings.AppSettings.Name}:\n{ex.Message}", ex);
////            }
////        }
////
////		/// <summary>
////		/// Waits for a matching response message to be send from the client.
////		/// </summary>
////		/// <param name="messageToken"></param>
////		/// <param name="cancellationToken"></param>
////		/// <returns></returns>
////		public async Task<ReturnValue<T>> GetResponseMessage<T>(string messageToken, CancellationToken cancellationToken)
////        {
////            try
////            {
////				_logger.LogTrace(LoggingEvents.SocketRemoteAgentGetResponse, "GetResponseMessage started - agentName: {agentName}, remoteAgentId: {remoteAgentId}, token {token}.", RemoteSettings.AppSettings.Name, RemoteSettings.AppSettings.RemoteAgentId, messageToken);
////
////				var watch = Stopwatch.StartNew();
////
////                var remainingTime = MaxAcknowledgeWait;
////
////                while (remainingTime > 0)
////                {
////                    if(_responseMessages.ContainsKey(messageToken) == false)
////                    {
////						// var responseMessageWait = _responseMessageEvent.WaitAsync();
////	                    var responseMessageWait = Task.Delay(100);
////						await Task.WhenAny(responseMessageWait, Task.Delay(remainingTime, cancellationToken));
////
////						if(cancellationToken.IsCancellationRequested) 
////						{
////							_logger.LogTrace(LoggingEvents.SocketRemoteAgentGetResponse, "GetResponseMessage cancelled - agentName: {agentName}, remoteAgentId: {remoteAgentId}, token {token}.", RemoteSettings.AppSettings.Name, RemoteSettings.AppSettings.RemoteAgentId, messageToken);
////							return new ReturnValue<T>(false, "The response request was cancelled.", null);
////
////						}
////                    }
////
////					_logger.LogTrace(LoggingEvents.SocketRemoteAgentGetResponse, "GetResponseMessage message wait finished - agentName: {agentName}, remoteAgentId: {remoteAgentId}, token {token}.", RemoteSettings.AppSettings.Name, RemoteSettings.AppSettings.RemoteAgentId, messageToken);
////
////					if (_responseMessages.ContainsKey(messageToken))
////                    {
////						_logger.LogTrace(LoggingEvents.SocketRemoteAgentGetResponse, "GetResponseMessage matching message found - agentName: {agentName}, remoteAgentId: {remoteAgentId}, token {token}.", RemoteSettings.AppSettings.Name, RemoteSettings.AppSettings.RemoteAgentId, messageToken);
////
////						var result = _responseMessages[messageToken];
////	                    _responseMessages.TryRemove(messageToken, out _);
////
////						//if the message is a running update (used for long running tasks), then reset the timer.
////						if (result.Message == "running")
////						{
////							_logger.LogTrace(LoggingEvents.SocketRemoteAgentGetResponse, "GetResponseMessage message is running - agentName: {agentName}, remoteAgentId: {remoteAgentId}, token {token}.", RemoteSettings.AppSettings.Name, RemoteSettings.AppSettings.RemoteAgentId, messageToken);
////							watch.Restart();
////						}
////						else
////						{
////							_logger.LogTrace(LoggingEvents.SocketRemoteAgentGetResponse, "GetResponseMessage message returned - agentName: {agentName}, remoteAgentId: {remoteAgentId}, token {token}.", RemoteSettings.AppSettings.Name, RemoteSettings.AppSettings.RemoteAgentId, messageToken);
////							var value = result.Value == null ? default : result.Value.ToObject<T>();
////							var message =
////								new ReturnValue<T>(result.Success, result.Message, result.Exception, value)
////								{
////									ExceptionDetails = result.ExceptionDetails
////								};
////							return message;
////						}
////                    }
////
////                    remainingTime = MaxAcknowledgeWait - Convert.ToInt32(watch.ElapsedMilliseconds);
////                }
////
////				_logger.LogWarning(LoggingEvents.SocketRemoteAgentGetResponse, "GetResponseMessage no responding message - agentName: {agentName}, remoteAgentId: {remoteAgentId}, token {token}.", RemoteSettings.AppSettings.Name, RemoteSettings.AppSettings.RemoteAgentId, messageToken);
////				return new ReturnValue<T>(false, "The remote agent did not respond to the request.", null);
////            }
////            catch (Exception ex)
////            {
////				_logger.LogError(LoggingEvents.SocketRemoteAgentGetResponse, ex, "GetResponseMessage error - agentName: {agentName}, remoteAgentId: {remoteAgentId}, token {token}, Message: {message}", RemoteSettings.AppSettings.Name, RemoteSettings.AppSettings.RemoteAgentId, messageToken, ex.Message);
////				return new ReturnValue<T>(false, "The remote agent response failed with error: " + ex.Message, ex);
////            }
////        }
////
////        public void UpdateResponseMessage(string messageToken, RemoteMessage returnMessage)
////        {
////			_logger.LogTrace(LoggingEvents.SocketRemoteUpdateResponseMessage, "UpdateResponseMessage - adding response message to queue, token {token}", messageToken);
////
////			var responseAdded = _responseMessages.TryAdd(messageToken, returnMessage);
////			if(!responseAdded) {
////				_logger.LogError(LoggingEvents.SocketRemoteUpdateResponseMessage, "UpdateResponseMessage - could not add response message to queue, token {messageToken}", messageToken);
////			}
////            //_responseMessageEvent.Set();
////        }
//
////		public void SetFileStream(string fileReference, FileStream fileStream)
////		{
////			try
////			{
////				_logger.LogTrace(LoggingEvents.SocketRemoteSetFileStream, "SetFileStream - adding filestream to queue, reference {reference}", fileReference);
////
////				if (!_fileSaveStreams.TryAdd(fileReference, fileStream))
////				{
////					_logger.LogError(LoggingEvents.SocketRemoteSetFileStream, "SetFileStream - could not add filestream to queue queue, reference {reference}", fileReference);
////					throw new SocketRemoteAgentException("Could not add the filestream to the queue.");
////				}
////			}
////			catch (Exception ex)
////			{
////				throw new SocketRemoteAgentException($"Error setting file stream.  {ex.Message}.", ex);
////			}
////		}
////
////        public FileStream GetFileStream(string fileReference)
////        {
////            try
////            {
////                _logger.LogTrace(LoggingEvents.SocketRemoteGetFileStream, "GetFileStream - getting filestream to queue, reference {reference}", fileReference);
////
////                if (!_fileSaveStreams.ContainsKey(fileReference))
////                {
////                    _logger.LogWarning(LoggingEvents.SocketRemoteGetFileStream, "GetFileStream - the requested filestream is not on the queue, reference {reference}", fileReference);
////                    throw new SocketRemoteAgentException("Could not get the file stream from the queue.");
////                }
////
////	            if (!_fileSaveStreams.TryRemove(fileReference, out var fileStream))
////                {
////                    _logger.LogWarning(LoggingEvents.SocketRemoteGetFileStream, "GetFileStream - the requested filestream could not be removed from the queue, reference {reference}", fileReference);
////                    throw new SocketRemoteAgentException("Could not remove the file stream from the queue.");
////                }
////
////                _logger.LogTrace(LoggingEvents.SocketRemoteGetFileStream, "GetFileStream - found filestream, reference {reference}", fileReference);
////                return fileStream;
////            }
////            catch (Exception ex)
////            {
////                throw new SocketRemoteAgentException($"Error getting file stream.  {ex.Message}.", ex);
////            }
////        }
////
////        //wait for a period of time for the remote agent to send back a filestream.
////        public async Task<FileStream> GetFileStream(string fileReference, int waitMilliseconds, CancellationToken cancellationToken)
////        {
////            try
////            {
////                _logger.LogTrace(LoggingEvents.SocketRemoteGetFileStream, "GetFileStream - getting filestream to queue, reference {reference}", fileReference);
////
////                var time = Stopwatch.StartNew();
////                var remainingTime = waitMilliseconds;
////
////                while (time.ElapsedMilliseconds < waitMilliseconds && !_fileSaveStreams.ContainsKey(fileReference))
////                {
////                    // var fileStreamWait = _fileStreamEvent.WaitAsync();
////					var fileStreamWait = Task.Delay(100, cancellationToken);
////                    await Task.WhenAny(fileStreamWait, Task.Delay(remainingTime, cancellationToken));
////                }
////
////                if (_fileSaveStreams.ContainsKey(fileReference))
////                {
////	                if (!_fileSaveStreams.TryRemove(fileReference, out var fileStream))
////                    {
////                        _logger.LogWarning(LoggingEvents.SocketRemoteGetFileStream, "GetFileStream - the requested filestream could not be removed from the queue, reference {reference}", fileReference);
////                        throw new SocketRemoteAgentException("Could not remove the file stream from the queue.");
////                    }
////
////                    _logger.LogTrace(LoggingEvents.SocketRemoteGetFileStream, "GetFileStream - found filestream, reference {reference}", fileReference);
////                    return fileStream;
////                }
////                else
////                {
////                    _logger.LogWarning(LoggingEvents.SocketRemoteGetFileStream, "GetFileStream - the requested filestream is not on the queue, reference {reference}", fileReference);
////                    throw new SocketRemoteAgentException("Could not get the file stream from the queue.");
////                }
////            }
////            catch (Exception ex)
////            {
////                throw new SocketRemoteAgentException($"Error getting file stream.  {ex.Message}.", ex);
////            }
////        }
//	}
//}
