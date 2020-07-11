import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Functions } from '../shared/utils/functions';
import { tap } from 'rxjs/operators';


// intercept is used to map the XSRF-TOKEN to the X-XSRF-TOKEN which is used
// to present x-scripting attacks.
// can't use the build in interceptor as it does not support x-domain.
@Injectable()
export class AddCsrfHeaderInterceptorService implements HttpInterceptor {

    // private token;
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        // const token = this.token ?? Functions.getCookie('XSRF-TOKEN');
        // if (token) {
        //     req = req.clone({
        //         headers: req.headers.set('X-XSRF-TOKEN', token)
        //     });
        // }

        return next.handle(req).pipe(tap((event: HttpEvent<any>) => {
            // if the token is in the header (cross domain request, then set it to the local cookie)
            if (event instanceof HttpResponse) {
                const xsrfToken = event.headers.get('XSRF-TOKEN');
                if (xsrfToken) {
                    Functions.setCookie('XSRF-TOKEN', xsrfToken);
                    // this.token = xsrfToken;
                }
                return event;
            }
        }));
    }

}
