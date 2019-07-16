import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User, logoUrl, eLoginType, ExternalLogin } from '../auth.models';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { FormsService } from '../../shared/forms/forms.service';
import { TermsComponent } from '../terms/terms.component';
import { Subscription, combineLatest } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['../auth.component.scss'],
  providers: [FormsService]
})
export class RegisterComponent implements OnInit, OnDestroy {
  private _queryParamSubscription: Subscription;

  logoUrl = logoUrl;

  message: string;
  googleMessage: string;
  verificationCode: string;

  public loginType = eLoginType.Password;
  eLoginType = eLoginType;

  passwordValidators = [
    Validators.required,
    Validators.minLength(8),
    Validators.maxLength(20),
    Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,}$'),
    this.passwordsMatch()
  ]

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService,
    public formsService: FormsService,
    private fb: FormBuilder) {
  }


  ngOnInit() {
    this._queryParamSubscription = this.route.queryParams.subscribe(params => {
      const email = params['email'];
      const code = params['code'];

      const registerForm = this.fb.group({
        'provider': [{value: '', disabled: true}, []],
        'email': [email, [
          Validators.required,
          Validators.email
        ]],
        'password': ['', this.passwordValidators],
        'passwordConfirm': ['', [
        ]],
        'firstName': ['', []],
        'lastName': ['', []],
        'terms': [false, [
          Validators.requiredTrue
        ]],
        'subscription': [false, []],
        'code': [code, []],
        'providerKey': [code, []],
        'authenticationToken': [code, []],
      }, { validator: this.passwordsMatch() }
      );

      this.formsService.startForm(registerForm);

      let loginType =  eLoginType[this.authService.getCookie('LoginType')];
      switch (loginType) {
          case eLoginType.Google:
              this.enableGoogle();
              break;
          case eLoginType.Microsoft:
              this.enableMicrosoft();
              break;
          default:
              this.enablePassword();
      }

      // this.formsService.currentForm.controls.provider.valueChanges.subscribe(provider => {
      //   if (provider !== this.previousProvider) {
      //     this.previousProvider = provider;
      //     switch (provider) {
      //       case eLoginProvider.UserPass:
      //         this.setExternalProvider(false);
      //         this.formsService.currentForm.controls.providerKey.setValue(null);
      //         this.formsService.currentForm.controls.authenticationToken.setValue(null);
      //         this.formsService.currentForm.controls.password.setValidators([
      //           Validators.required,
      //           Validators.minLength(3),
      //           Validators.maxLength(20),
      //           this.passwordsMatch()
      //         ]);
      //         break;
      //       case eLoginProvider.Google:
      //         this.googleLogin(false);
      //         break;
      //       case eLoginProvider.Microsoft:
      //         this.microsoftLogin(false);
      //         break;
      //     }
      //   }
      // });

    })

  }

  ngOnDestroy() {
    if (this._queryParamSubscription) { this._queryParamSubscription.unsubscribe(); }
  }

  enablePassword() {
    this.formsService.currentForm.controls.email.enable();
    this.formsService.currentForm.controls.provider.setValue('Dexih');
    this.authService.setCookie('LoginType', eLoginType.Password.toString());
    this.message = '';
    this.loginType = eLoginType.Password;
    this.formsService.currentForm.controls.providerKey.setValue(null);
    this.formsService.currentForm.controls.authenticationToken.setValue(null);
    this.formsService.currentForm.controls.password.setValidators(this.passwordValidators);
  }

enableGoogle() {
    this.formsService.currentForm.controls.email.setValue('');
    this.formsService.currentForm.controls.provider.setValue('Google');
    // this.formsService.currentForm.controls.email.disable();
    this.message = '';
    this.authService.setCookie('LoginType', eLoginType.Google.toString());
    this.loginType = eLoginType.Google;
    this.authService.getGlobalCachePromise().then(cache => {
        let clientId = cache.googleClientId;
        this.authService.googleEnable(clientId).then(
            externalLogin => {
              this.setExternalLogin(externalLogin);
            }).catch(
            reason => {
                this.message = reason.message;
            });
    });
}

enableMicrosoft() {
  this.formsService.currentForm.controls.email.setValue('');
  this.formsService.currentForm.controls.provider.setValue('Microsoft');
  // this.formsService.currentForm.controls.email.disable();
  this.message = '';
    this.loginType = eLoginType.Microsoft;
    this.authService.setCookie('LoginType', eLoginType.Microsoft.toString());
    this.authService.getGlobalCachePromise().then(cache => {
        let clientId = cache.microsoftClientId;
        this.authService.microsoftEnable(clientId).then(
            externalLogin => {
              this.setExternalLogin(externalLogin);
            }).catch(
            reason => {
                this.message = reason.message;
            });
    });
}

setExternalLogin(externalLogin: ExternalLogin) {
  this.formsService.currentForm.controls.email.disable();

  if (externalLogin) {
    this.formsService.currentForm.controls.email.setValue(externalLogin.email);
    this.formsService.currentForm.controls.password.setValidators([]);
    this.formsService.currentForm.controls.password.setErrors(null);
    this.formsService.currentForm.controls.passwordConfirm.setValidators([]);
    this.formsService.currentForm.controls.passwordConfirm.setErrors(null);
    this.formsService.currentForm.controls.providerKey.setValue(externalLogin.providerKey);
    this.formsService.currentForm.controls.authenticationToken.setValue(externalLogin.authenticationToken);
    if (externalLogin.firstName) { this.formsService.currentForm.controls.firstName.setValue(externalLogin.firstName); }
    if (externalLogin.lastName) { this.formsService.currentForm.controls.lastName.setValue(externalLogin.lastName); }
  } else {
    this.formsService.currentForm.controls.email.setValue(null);
    this.formsService.currentForm.controls.providerKey.setValue(null);
    this.formsService.currentForm.controls.authenticationToken.setValue(null);
  }
  this.formsService.currentForm.updateValueAndValidity();
}

  passwordsMatch(): ValidatorFn {
    return (group: FormGroup): { [key: string]: any } => {
      if (this.formsService.currentForm && this.loginType === eLoginType.Password) {
        const password = this.formsService.currentForm.controls['password'];
        const passwordConfirm = this.formsService.currentForm.controls['passwordConfirm'];

        if (password.value !== passwordConfirm.value) {
          passwordConfirm.setErrors({ 'passwordMatch': true });
        }
        return;
      }
    };
  }

  async refreshLogin() {
    switch (this.loginType) {
      case eLoginType.Google:
        await this.googleLogin(false);
        break;
      case eLoginType.Microsoft:
        await this.microsoftLogin(false);
        break;
      }
  }

  async onSubmit() {
    await this.refreshLogin();

    this.formsService.currentForm.updateValueAndValidity();

    if (this.formsService.currentForm.valid) {
      this.authService.register(this.formsService.currentForm.getRawValue()).then(
        async (result) => {
          if (result) {
            let user: User = result;
            if (user.emailConfirmed) {
              if (user.isInvited) {
                let cache = await this.authService.getGlobalCachePromise();
                switch (this.loginType) {
                  case eLoginType.Google:
                    await this.authService.googleLogin(cache.googleClientId, false);
                    break;
                  case eLoginType.Microsoft:
                    await this.authService.microsoftLogin(cache.microsoftClientId, false);
                    break;
                  }

                if (!this.authService.redirectUrl) {
                  this.router.navigate(['/']);
                } else {
                  this.router.navigate([this.authService.redirectUrl]);
                }
              } else {
                this.router.navigate(['notInvited'], { queryParams: { email: user.email }, relativeTo: this.route.parent });
              }
            } else {
              this.router.navigate(['verifyemail'], { queryParams: { email: user.email }, relativeTo: this.route.parent });
            }
          } else {
            this.message = 'Registration failed.  Please contact support to proceed.';
          }
        }).catch(
          reason => {
            this.message = reason.message;
          }
        );
    } else {
      this.formsService.showAllErrors = true;
    }
  }

  googleLogin(forceLogin: boolean): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.authService.getGlobalCachePromise().then(cache => {
        let clientId = cache.googleClientId;
        this.authService.googleSignIn(clientId, forceLogin).then(
          result => {
            this.setExternalLogin(result);
            resolve(true);
          }).catch(
            reason => {
              this.message = reason.message;
              reject(reason);
            });
      }).catch(reason => {
        this.message = reason.message;
        reject(reason);
      });
    });
  }

  microsoftLogin(forceLogin: boolean): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      this.authService.getGlobalCachePromise().then(cache => {
        let clientId = cache.microsoftClientId;
        this.authService.microsoftSignIn(clientId, forceLogin).then(
          result => {
            this.setExternalLogin(result);
            resolve(true);
          }).catch(
            reason => {
              this.message = reason.message;
              reject(reason);
            });
      }).catch(reason => {
        this.message = reason.message;
        reject(reason);
      });
    });
  }

  termsAccepted(termsAccepted: boolean) {
    this.formsService.currentForm.controls.terms.setValue(termsAccepted);
  }

  showTerms() {
    window.open('/auth/terms');
  }

  // setExternalProvider(value: boolean) {
  //   this.isExternalProvider = value;
  //   if (value) {
  //       this.formsService.currentForm.controls.email.disable();
  //   } else {
  //       this.formsService.currentForm.controls.email.enable();
  //   }
  // }

  // googleLogin(forceLogin: boolean) {
  //   this.message = '';

  //   this.authService.getGlobalCachePromise().then(cache => {
  //     let clientId = cache.googleClientId;

  //     if (!clientId) {
  //       this.message = 'There was an issue using the google authentication provider.  Contact support.';
  //       return;
  //     }

  //     this.authService.googleSignIn(clientId, forceLogin).then(
  //       result => {
  //         this.setExternalProvider(true);
  //         this.googleMessage = '';
  //         this.formsService.currentForm.controls.email.setValue(result.email);
  //         this.formsService.currentForm.controls.password.setValidators([]);
  //         this.formsService.currentForm.controls.password.setErrors(null);
  //         this.formsService.currentForm.controls.passwordConfirm.setValidators([]);
  //         this.formsService.currentForm.controls.passwordConfirm.setErrors(null);
  //         this.formsService.currentForm.controls.providerKey.setValue(result.providerKey);
  //         this.formsService.currentForm.controls.authenticationToken.setValue(result.authenticationToken);
  //         if (result.firstName) { this.formsService.currentForm.controls.firstName.setValue(result.firstName); }
  //         if (result.lastName) { this.formsService.currentForm.controls.lastName.setValue(result.lastName); }
  //         this.formsService.currentForm.updateValueAndValidity();
  //       }).catch(
  //         reason => {
  //           this.googleMessage = reason;
  //         });
  //   });
  // }

  // microsoftLogin(forceLogin: boolean)  {
  //   this.message = '';

  //   this.authService.getGlobalCachePromise().then(cache => {
  //     let clientId = cache.microsoftClientId;

  //     if (!clientId) {
  //       this.message = 'There was an issue using the microsoft authentication provider.  Contact support.';
  //       return;
  //     }

  //     this.authService.microsoftSignIn(clientId, forceLogin).then(
  //       result => {
  //         this.setExternalProvider(true);
  //         this.formsService.currentForm.controls.email.setValue(result.email);
  //         this.formsService.currentForm.controls.password.setValidators([]);
  //         this.formsService.currentForm.controls.password.setErrors(null);
  //         this.formsService.currentForm.controls.passwordConfirm.setValidators([]);
  //         this.formsService.currentForm.controls.passwordConfirm.setErrors(null);
  //         this.formsService.currentForm.controls.providerKey.setValue(result.providerKey);
  //         this.formsService.currentForm.controls.authenticationToken.setValue(result.authenticationToken);
  //         if (result.firstName) { this.formsService.currentForm.controls.firstName.setValue(result.firstName); }
  //         if (result.lastName) { this.formsService.currentForm.controls.lastName.setValue(result.lastName); }
  //         this.formsService.currentForm.updateValueAndValidity();
  //       }).catch(
  //         reason => {
  //           this.message = reason.message;
  //         });
  //   });
  // }

}
