//using System;
//using System.Threading.Tasks;
//using System.Collections.Concurrent;
//using System.Threading;
//using Dexih.Utils.Crypto;
//using System.Threading.Tasks.Dataflow;
//
//namespace dexih.api.Services.DataReader
//{
//    public class DexihDataReader : IDataReader, IDisposable
//    {
//		private readonly ConcurrentDictionary<string, BufferBlock<object>> _dataQueues;
//
//        public DexihDataReader()
//        {
//			_dataQueues = new ConcurrentDictionary<string, BufferBlock<object>>();
//        }
//
//		public async Task<string> CreateDataReader(int maxBuffers)
//		{
//            try
//            {
//                var token = EncryptString.GenerateRandomKey();
//				var newDataBuffer = new BufferBlock<object>(new DataflowBlockOptions() { BoundedCapacity = maxBuffers});
//
//                var attempts = 0;
//                while (attempts < 10)
//                {
//                    var added = _dataQueues.TryAdd(token, newDataBuffer);
//                    if (added)
//                    {
//                        return token;
//                    }
//                    await Task.Delay(100);
//                    attempts++;
//                }
//
//                throw new DataReaderException("Failed to add the buffer.", null);
//            }
//            catch(Exception ex)
//            {
//                throw new DataReaderException($"The data reader buffer could not be created.  {ex.Message}", ex);
//            }
//        }
//
//
//	    public async Task SendData(string continuationKey, object buffer, CancellationToken cancellationToken)
//		{
//            try
//            {
//
//                if (!_dataQueues.ContainsKey(continuationKey))
//                {
//                    throw new DataReaderException("The data buffer could not be found.");
//                }
//
//                var dataBuffer = _dataQueues[continuationKey];
//                await dataBuffer.SendAsync(buffer, cancellationToken);
//            }
//            catch (Exception ex)
//            {
//                throw new DataReaderException($"The data reader buffer could not be pushed.  {ex.Message}", ex);
//            }
//        }
//
//        public async Task<(bool IsComplete, object Package)> ReceiveData(string continuationKey, CancellationToken cancellationToken)
//        {
//            try
//            {
//                if (!_dataQueues.ContainsKey(continuationKey))
//                {
//                    throw new DataReaderException("The data buffer could not be found.");
//                }
//
//                var dataBuffer = _dataQueues[continuationKey];
//				var moreData = await dataBuffer.OutputAvailableAsync(cancellationToken);
//
//				if(moreData) 
//				{
//					var popResult = await dataBuffer.ReceiveAsync(cancellationToken);
//
//					if (dataBuffer.Completion.IsFaulted)
//				    {
//				        throw dataBuffer.Completion.Exception;
//				    }
//
//					return (true, popResult);
//				}
//				else
//				{
//				    if (dataBuffer.Completion.IsFaulted)
//				    {
//				        throw dataBuffer.Completion.Exception;
//				    }
//				    await Dequeue(continuationKey);
//				    return (false, null);
//				}
//
//            }
//            catch (Exception ex)
//            {
//                await Dequeue(continuationKey);
//                throw new DataReaderException($"The data reader buffer could not be read.  {ex.Message}", ex);
//            }
//        }
//
//	    public void Complete(string continuationKey)
//	    {
//		    if (!_dataQueues.ContainsKey(continuationKey))
//		    {
//			    throw new DataReaderException("The data buffer could not be found.");
//		    }
//		    var dataBuffer = _dataQueues[continuationKey];
//
//		    dataBuffer.Complete();
//	    }
//
//        public void Fault(string continuationKey, Exception exception)
//        {
//            try
//            {
//                if (!_dataQueues.ContainsKey(continuationKey))
//                {
//                    throw new DataReaderException("The data buffer could not be found.");
//                }
//                var dataBuffer = _dataQueues[continuationKey];
//
//				((IDataflowBlock)dataBuffer).Fault(exception);
//            }
//            catch (Exception ex)
//            {
//                throw new DataReaderException($"The error could not be set on the buffer.  {ex.Message}", ex);
//            }
//        }
//
//        private async Task Dequeue(string continuationKey)
//        {
//            var attempts = 0;
//            while (attempts < 10)
//            {
//                var removed = _dataQueues.TryRemove(continuationKey, out var oldBuffer);
//                if (removed)
//                {
//                    return;
//                }
//                await Task.Delay(100);
//                attempts++;
//            }
//            throw new DataReaderException($"The data reader could not be removed.");
//
//        }
//
//        public void Dispose()
//        {
//        }
//	}
//
//}
