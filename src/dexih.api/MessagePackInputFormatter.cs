// using System.Threading.Tasks;
// 
// using Microsoft.AspNetCore.Mvc.Formatters;
//
// namespace dexih.api
// {
//     public class MessagePackInputFormatter : IInputFormatter
//     {
//         private const string ContentType = "application/x-msgpack";
//         private readonly MessagePackSerializerOptions options;
//
//         public MessagePackInputFormatter(MessagePackSerializerOptions resolver)
//         {
//             this.options = resolver ?? MessagePackSerializer.DefaultOptions;
//         }
//
//         public bool CanRead(InputFormatterContext context)
//         {
//             return context.HttpContext.Request.ContentType == ContentType;
//         }
//
//         public Task<InputFormatterResult> ReadAsync(
//             InputFormatterContext context)
//         {
//             var request = context.HttpContext.Request;
//             return InputFormatterResult.SuccessAsync(
//                 MessagePackSerializer.Deserialize(context.ModelType, request.Body, this.options));
//         }
//     }
// }