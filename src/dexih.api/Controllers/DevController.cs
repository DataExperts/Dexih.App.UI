

using dexih.operations;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Text;

#if DEBUG
namespace dexih.api.Controllers
{
    [Route("api/[controller]")]
    public class DevController : Controller
    {
//        public ProtoController(ISerializer serializer)
//        {
//            _serializer = serializer;
//        }
//
//        private ISerializer _serializer;
//        
//        [HttpGet("[action]")]
//        public ActionResult CacheManager()
//        {
//
//            MessagePack.MessagePackSerializer.
//            var proto = _serializer.GetSchema<CacheManager>();
//            return Content(proto);
//        }

        [HttpGet("[action]")]
        public ActionResult JSModels()
        {
            var js = new StringBuilder();

            js.AppendLine("// Auto generated shared classes.");
            js.AppendLine("// Regenerate at http://localhost:5000/Proto/JSModels.");
            js.AppendLine();
            js.AppendLine();

            var currentDirectory = Path.GetDirectoryName(Assembly.GetExecutingAssembly().Location);

            var typeLookup = new Dictionary<string, Type>();

            foreach (var file in Directory.GetFiles(currentDirectory, "*.dll"))
            {
                var assembly = Assembly.LoadFrom(file);
                var types = assembly.GetTypes();
                // var types = AppDomain.CurrentDomain.GetAssemblies().Where(c=>c.FullName.StartsWith("dexih.functions")).SelectMany(s => s.GetTypes());

                var assemblyName = Path.GetFileName(file);
                if (assemblyName == Path.GetFileName(Assembly.GetExecutingAssembly().Location))
                {
                    assemblyName = null;
                }



                foreach (var type in types)
                {
                    var attribute = type.GetCustomAttribute<MessagePack.MessagePackObjectAttribute>();

                    if (attribute != null && !type.IsAbstract)
                    {
                        typeLookup.Add(type.Name, type);
                    }
                }
            }

            var enums = new Dictionary<string, Type>();

            js.AppendLine("// auto generated classes");
            js.AppendLine();

            foreach (var type in typeLookup.Values.OrderBy(c => c.Name))
            {
                if (!type.IsEnum)
                {
                    object typeInstance;
                    var generic = "";
                    var genericTypes = new List<string>();
                    Type genericType = null;
                    string typeName = null;
                    if(type.ContainsGenericParameters)
                    {
                        genericTypes.AddRange(type.GetGenericArguments().Select(c => c.Name));
                        generic = "<" + string.Join(",", genericTypes) + ">";

                        var genericArgs = type.GetGenericArguments().Select(c => typeof(object)).ToArray();
                        genericType = type.MakeGenericType(genericArgs);
                        typeInstance = Activator.CreateInstance(genericType);
                        typeName = type.GetGenericTypeDefinition().Name;
                        typeName = typeName.Substring(0, typeName.IndexOf('`'));
                    } else
                    {
                        // create instance to get defaults
                        typeInstance = Activator.CreateInstance(type);
                        typeName = type.Name;
                    }

                    js.AppendLine($"export class {typeName}{generic}{{");
                    foreach (var property in type.GetProperties())
                    {
                        var propAttribute = property.GetCustomAttribute<MessagePack.KeyAttribute>();
                        if (propAttribute != null)
                        {
                            var propertyType = property.PropertyType;
                            object value;
                            if (genericType != null)
                            {
                                if (propertyType.IsGenericParameter)
                                {
                                    value = null;
                                }
                                else
                                {
                                    var genericProperty = genericType.GetProperties().Single(c => c.Name == property.Name);
                                    value = genericProperty.GetValue(typeInstance);
                                }

                            }
                            else
                            {
                                value = propertyType.IsGenericParameter ? null : property.GetValue(typeInstance);
                            }

                            var propertyDetails = getPropertyDetails(property.PropertyType, value, genericType, typeLookup, enums);

                            js.AppendLine($"\tpublic {LowerFirst(property.Name)}: {propertyDetails.type} = {propertyDetails.defaultValue};");
                        }
                    }
                    js.AppendLine("}");
                    js.AppendLine();
                }
            }

            js.AppendLine("// auto generated enums");
            js.AppendLine();

            foreach (var type in enums.Values.OrderBy(c => c.Name))
            {
                var enumName = LowerFirst(type.Name);
                js.AppendLine("export enum " + enumName + "{");
                foreach (var field in type.GetFields(BindingFlags.Public | BindingFlags.Static))
                {
                    js.AppendLine($"\t{field.Name} = {field.GetRawConstantValue()},");
                }

                js.AppendLine("}");
                js.AppendLine();

                js.AppendLine("export const " + LowerFirst(type.Name) + "Items = [");
                if ( Convert.ToInt32(type.GetEnumValues().GetValue(0)) == 1)
                {
                    js.AppendLine($"\t{{key: 0, name: 'Unknown', description: 'Unknown'}},");
                   
                }
                foreach (var field in type.GetFields(BindingFlags.Public | BindingFlags.Static))
                {
                    var desc = field.GetCustomAttribute<DescriptionAttribute>();
                    js.AppendLine($"\t{{key: {enumName}.{field.Name}, name: '{field.Name}', description: '{desc?.Description}'}},");
                }

                js.AppendLine("]");
                js.AppendLine();


            }

            return Content(js.ToString());
        }

        private (string type, string defaultValue) getPropertyDetails(Type propertyType, object value, Type genericType, Dictionary<string, Type> typeLookup, Dictionary<string, Type> enums)
        {
            var isArray = false;

            string defaultValue = null;
            if (propertyType.IsGenericType && propertyType.GetGenericTypeDefinition() == typeof(Nullable<>))
            {
                propertyType = Nullable.GetUnderlyingType(propertyType);
            }

            if (propertyType.GetInterface(nameof(System.Collections.IEnumerable)) != null
                && propertyType != typeof(Object)
                && propertyType != typeof(string)
                )
            {
                isArray = true;

                if (propertyType.GetElementType() != null)
                {
                    propertyType = propertyType.GetElementType();
                }
                else if (propertyType.GetProperties().FirstOrDefault(prop => prop.Name == "Item") != null)
                {
                    propertyType = propertyType.GetProperties().FirstOrDefault(prop => prop.Name == "Item").PropertyType;
                }
                else if (propertyType.GenericTypeArguments.FirstOrDefault() != null)
                {
                    propertyType = propertyType.GenericTypeArguments.FirstOrDefault();
                }
                else
                {
                    propertyType = typeof(object);
                }
            }

            string javaType = "";

            if (typeLookup.ContainsKey(propertyType.Name))
            {
                if (propertyType.GenericTypeArguments.Length > 0)
                {
                    var name = propertyType.Name;
                    javaType = name.Substring(0, name.IndexOf('`'));
                    var genericTypes = new List<string>();
                    foreach (var typeArg in propertyType.GenericTypeArguments)
                    {
                        var propertyDetails = getPropertyDetails(typeArg, null, null, typeLookup, enums);
                        genericTypes.Add(propertyDetails.type);
                    }
                    javaType += $"<{string.Join(",", genericTypes)}>";
                }
                else
                {
                    javaType = propertyType.Name;
                    if (value != null)
                    {
                        defaultValue = $"new {propertyType.Name}()";
                    }
                }

            }
            else if (propertyType.IsGenericParameter)
            {
                javaType = propertyType.Name;
                defaultValue = "null";
            }
            else if (propertyType.IsEnum)
            {
                javaType = LowerFirst(propertyType.Name);

                if (value != null)
                {
                    var name = Enum.GetName(propertyType, value);
                    if(name != null)
                    {
                        defaultValue = $"{LowerFirst(propertyType.Name)}.{name}";
                    }
                    
                }

                if (!enums.ContainsKey(propertyType.Name))
                {
                    enums.Add(propertyType.Name, propertyType);
                }
            }
            else
            {

                switch (Type.GetTypeCode(propertyType))
                {
                    case TypeCode.Boolean:
                        javaType = "boolean";
                        if (value != null)
                        {
                            defaultValue = $"{value.ToString().ToLower()}";
                        }
                        break;
                    case TypeCode.UInt16:
                    case TypeCode.UInt32:
                    case TypeCode.UInt64:
                    case TypeCode.Decimal:
                    case TypeCode.Double:
                    case TypeCode.Int16:
                    case TypeCode.Int32:
                    case TypeCode.Int64:
                    case TypeCode.Byte:
                    case TypeCode.SByte:
                    case TypeCode.Single:
                        javaType = "number";
                        if (value != null)
                        {
                            defaultValue = $"{value.ToString()}";
                        }

                        break;
                    case TypeCode.DateTime:
                        javaType = "Date";
                        defaultValue = "null";
                        break;
                    case TypeCode.Char:
                    case TypeCode.String:
                        javaType = "string";
                        if (value != null)
                        {
                            var stringValue = value.ToString();
                            if (stringValue.Contains("\""))
                            {
                                stringValue = stringValue.Replace("\"", "\\\"");
                            }
                            defaultValue = $"\"{stringValue}\"";
                        }

                        break;
                    case TypeCode.DBNull:
                    case TypeCode.Empty:
                    case TypeCode.Object:
                        javaType = "any";
                        defaultValue = "null";
                        break;
                }
            }

            if (defaultValue == null)
            {
                defaultValue = "null";
            }

            if (isArray && defaultValue != null)
            {
                defaultValue = "[]";
            }

            return ($"{javaType}{ (isArray ? "[]" : "")}", defaultValue);
        }

        public string LowerFirst(string value)
        {
            return value.Substring(0, 1).ToLower() + value.Substring(1);
        }


    }

#endif
}
