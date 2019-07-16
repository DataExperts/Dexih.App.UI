//using dexih.api.Services.DnsKeys;
//using Microsoft.AspNetCore.Authorization;
//using Microsoft.AspNetCore.Mvc;
//
//namespace dexih.api.Controllers
//{
//    
//    [Route(".well-known/acme-challenge/")]
//    public class LetsEncryptController : Controller
//    {
//        public LetsEncryptController(
//            IDnsKeys dnsKeys)
//        {
//            dnsKeys = _dnsKeys;
//        }
//
//        private IDnsKeys _dnsKeys;
//        
//        [AllowAnonymous]
//        [HttpGet("{id}")]
//        public string LetsEncrypt(string id)
//        {
//            _dnsKeys.
//            return "hi there " + id;
//        }
//    }
//}