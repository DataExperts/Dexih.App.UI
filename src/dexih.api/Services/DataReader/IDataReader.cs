//using System.Threading.Tasks;
//using System;
//using System.Threading;
//
//namespace dexih.api.Services.DataReader
//{
//    public interface IDataReader : IDisposable
//    {
//        Task<string> CreateDataReader(int maxBuffers);
//        Task SendData(string continuationKey, object buffer, CancellationToken cancellationToken);
//		Task<(bool IsComplete, object Package)> ReceiveData(string continuationKey, CancellationToken cancellationToken);
//        void Fault(string continuationKey, Exception exception);
//        void Complete(string continuationKey);
//    }
//}
