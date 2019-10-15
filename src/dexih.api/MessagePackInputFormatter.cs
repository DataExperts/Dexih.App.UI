using System.Threading.Tasks;
using MessagePack;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc.Formatters;
using Microsoft.AspNetCore.WebUtilities;

namespace dexih.api
{
    public class MessagePackInputFormatter : IInputFormatter
    {
        private const string ContentType = "application/x-msgpack";
        private readonly IFormatterResolver resolver;

        public MessagePackInputFormatter(IFormatterResolver resolver)
        {
            this.resolver = resolver ?? MessagePackSerializer.DefaultResolver;
        }

        public bool CanRead(InputFormatterContext context)
        {
            return context.HttpContext.Request.ContentType == ContentType;
        }

        public Task<InputFormatterResult> ReadAsync(
            InputFormatterContext context)
        {
            var request = context.HttpContext.Request;
            return InputFormatterResult.SuccessAsync(
                MessagePackSerializer.NonGeneric.Deserialize(context.ModelType, request.Body, this.resolver));
        }
    }
}