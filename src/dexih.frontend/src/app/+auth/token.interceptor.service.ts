import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


// intercept is used to map the XSRF-TOKEN to the X-XSRF-TOKEN which is used
// to present x-scripting attacks.
// can't use the build in interceptor as it does not support x-domain.
@Injectable()
export class AddCsrfHeaderInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let requestToken = this.getCookieValue('XSRF-TOKEN');
        return next.handle(req.clone({
            headers: req.headers.set('X-XSRF-TOKEN', requestToken)
        }));
    }

    private getCookieValue(cookieName: string) {
        const allCookies = decodeURIComponent(document.cookie).split('; ');
        for (let i = 0; i < allCookies.length; i++) {
            const cookie = allCookies[i];
            if (cookie.startsWith(cookieName + '=')) {
                return cookie.substring(cookieName.length + 1);
            }
        }
        return '';
    }
}
