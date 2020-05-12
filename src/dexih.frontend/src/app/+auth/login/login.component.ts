import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User, logoUrl, ExternalLogin } from '../auth.models';
import { AuthService } from '../auth.service';
import { LogFactory, eLogLevel } from '../../../logging';
import { async } from 'q';
import { eLoginProvider } from '../../shared/shared.models';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['../auth.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
    logoUrl = logoUrl;

    user: User;
    externalLogin: ExternalLogin = null;
    message: string;


    public loginType = eLoginProvider.Dexih;
    public eLoginProvider = eLoginProvider;
    public logger = new LogFactory('login.component');

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private authService: AuthService,
    ) { }

    ngOnInit() {
        this.user = new User('', '', '', false);

        // this.authService.refreshGlobalCache();

        let loginType = +this.authService.getCookie('LoginType');
        switch (loginType) {
            case eLoginProvider.Google:
                this.enableGoogle();
                break;
            case eLoginProvider.Microsoft:
                this.enableMicrosoft();
                break;
            default:
                this.enablePassword();
        }
    }

    ngOnDestroy() {

    }

    login(event) {
        switch (this.loginType) {
            case eLoginProvider.Dexih:
                this.authService.login(this.user).then(
                    result => {
                        this.doLogin(result);
                    }).catch(
                        reason => {
                            this.message = reason.message;
                        }
                    );
                break;
            case eLoginProvider.Google:
                this.googleLogin(false);
                break;
            case eLoginProvider.Microsoft:
                this.microsoftLogin(false);
                break;
        }
    }

    enablePassword() {
        this.authService.setCookie('LoginType', eLoginProvider.Dexih.toString());
        this.user.email = '';
        this.message = '';
        this.loginType = eLoginProvider.Dexih;
    }

    enableGoogle() {
        this.user.email = '';
        this.message = '';
        this.authService.setCookie('LoginType', eLoginProvider.Google.toString());
        this.loginType = eLoginProvider.Google;
        this.authService.googleEnable().then(
            externalLogin => {
                this.externalLogin = externalLogin;
                if (externalLogin) {
                    this.user.email = externalLogin.email;
                } else {
                    this.user.email = '(no current google login)';
                }
            }).catch(
                reason => {
                    this.message = reason.message;
                });
    }

    enableMicrosoft() {
        this.user.email = '';
        this.message = '';
        this.loginType = eLoginProvider.Microsoft;
        this.authService.setCookie('LoginType', eLoginProvider.Microsoft.toString());
        this.authService.microsoftEnable().then(
            externalLogin => {
                this.externalLogin = externalLogin;
                if (externalLogin) {
                    this.user.email = externalLogin.email;
                } else {
                    this.user.email = '(no current microsoft login)';
                }
            }).catch(
                reason => {
                    this.message = reason.message;
                });
    }

    googleLogin(forceLogin: boolean) {
        this.authService.googleLogin(forceLogin).then(
            result => {
                this.doLogin(result);
            }).catch(
                reason => {
                    this.message = reason.message;
                });
    }

    async googleLogout() {
        await this.authService.googleSignOut();
    }

    microsoftLogin(forceLogin: boolean) {
        this.authService.microsoftLogin(forceLogin).then(
            result => {
                this.doLogin(result);
            }).catch(
                reason => {
                    this.message = reason.message;
                });
    }

    async microsoftLogout() {
        await this.authService.microsoftSignOut();
    }

    doLogin(user: User) {
        if (user) {
            if (user.emailConfirmed) {
                if (!this.authService.redirectUrl) {
                    this.router.navigate(['/']);
                } else {
                    this.router.navigateByUrl(this.authService.redirectUrl);
                }
            } else {
                this.router.navigate(['verifyemail'], { queryParams: { email: user.email }, relativeTo: this.route.parent });
            }
        } else {
            this.message = 'Login failed.  Please check credentials.';
        }
    }

}
