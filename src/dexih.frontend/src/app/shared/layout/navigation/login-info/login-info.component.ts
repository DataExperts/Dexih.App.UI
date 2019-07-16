import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../../../+auth/auth.service';
import { Router } from '@angular/router';
import { User } from '../../../../+auth/auth.models';
import { Subscription, combineLatest} from 'rxjs';

@Component({

    selector: 'dexih-login-info',
    templateUrl: './login-info.component.html'
})
export class LoginInfoComponent implements OnInit, OnDestroy {
    user: User;
    userSubcription: Subscription;

    constructor(
        private authService: AuthService,
        private router: Router
        ) {
        this.userSubcription = this.authService.getUserObservable().subscribe(user => this.user = user);
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        if (this.userSubcription) { this.userSubcription.unsubscribe(); }
    }

    manageUser() {
        this.router.navigate(['/hubs/manage']);
    }

    logout() {
        this.authService.logout().then(result => {
            if (result === true) {
                this.login();
            }
        });
    }

    login() {
        this.authService.redirectUrl = this.router.url;
        this.router.navigate(['/auth/login']);
    }
}
