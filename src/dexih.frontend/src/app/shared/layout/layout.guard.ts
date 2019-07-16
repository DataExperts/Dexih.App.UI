import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

import { User } from '../../+auth/auth.models';
import { AuthService } from '../../+auth/auth.service';
import { HubService } from '../../+hub/hub.service';

@Injectable()
export class LayoutGuard implements CanActivate {
    constructor(private authService: AuthService, private hubService: HubService, private router: Router, private route: ActivatedRoute) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            this.authService.isLoggedIn().then(result => {
                if (!result) {
                    this.authService.redirectUrl = state.url;
                    this.router.navigate(['/auth/login']);
                    resolve(false);
                } else {
                    let user: User = result;
                    resolve(true);
                }
            }).catch(reason => {
                this.authService.redirectUrl = state.url;
                this.router.navigate(['/auth/login']);
            });
        });
    }
}
