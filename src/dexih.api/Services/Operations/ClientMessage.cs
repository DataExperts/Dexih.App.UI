using System.Runtime.Serialization;
using Dexih.Utils.MessageHelpers;

namespace dexih.api.Services.Operations
{
    
    /// <summary>
    /// Message structure sent to the browser content.
    /// Contains a command, and a value.
    /// </summary>
    [DataContract]
    public sealed class ClientMessage: ReturnValue<object>
    {
        public ClientMessage()
        {
            
        }

        public ClientMessage(EClientCommand command, object value)
        {
            Command = command;
            Value = value;
        }
        /// <summary>
        /// Command 
        /// </summary>
        [DataMember(Order = 4)]
        public EClientCommand Command { get; set; }
    }
}