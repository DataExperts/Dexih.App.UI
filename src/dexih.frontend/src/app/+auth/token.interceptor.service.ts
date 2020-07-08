// import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { Functions } from '../shared/utils/functions';


// // intercept is used to map the XSRF-TOKEN to the X-XSRF-TOKEN which is used
// // to present x-scripting attacks.
// // can't use the build in interceptor as it does not support x-domain.
// @Injectable()
// export class AddCsrfHeaderInterceptorService implements HttpInterceptor {
//     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//         let requestToken = Functions.getCookie('XSRF-TOKEN');
//         return next.handle(req.clone({
//             headers: req.headers.set('X-XSRF-TOKEN', requestToken)
//         }));
//     }

// }
