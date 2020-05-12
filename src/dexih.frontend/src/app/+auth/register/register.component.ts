import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User, logoUrl, ExternalLogin } from '../auth.models';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { FormsService } from '../../shared/forms/forms.service';
import { TermsComponent } from '../terms/terms.component';
import { Subscription, combineLatest } from 'rxjs';
import { eLoginProvider } from '../../shared/shared.models';

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

  public loginType = eLoginProvider.Dexih;
  eLoginProvider = eLoginProvider;

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
        'provider': [{ value: '', disabled: true }, []],
        'userName': ['', [
          Validators.required,
        ]],
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
    this.formsService.currentForm.controls.provider.setValue(eLoginProvider.Dexih);
    this.authService.setCookie('LoginType', eLoginProvider.Dexih.toString());
    this.message = '';
    this.loginType = eLoginProvider.Dexih;
    this.formsService.currentForm.controls.providerKey.setValue(null);
    this.formsService.currentForm.controls.authenticationToken.setValue(null);
    this.formsService.currentForm.controls.password.setValidators(this.passwordValidators);
  }

  enableGoogle() {
    this.formsService.currentForm.controls.email.setValue('');
    this.formsService.currentForm.controls.provider.setValue(eLoginProvider.Google);
    // this.formsService.currentForm.controls.email.disable();
    this.message = '';
    this.authService.setCookie('LoginType', eLoginProvider.Google.toString());
    this.loginType = eLoginProvider.Google;
    this.authService.googleEnable().then(
      externalLogin => {
        this.setExternalLogin(externalLogin);
      }).catch(
        reason => {
          this.message = reason.message;
        });
  }

  enableMicrosoft() {
    this.formsService.currentForm.controls.email.setValue('');
    this.formsService.currentForm.controls.provider.setValue(eLoginProvider.Microsoft);
    // this.formsService.currentForm.controls.email.disable();
    this.message = '';
    this.loginType = eLoginProvider.Microsoft;
    this.authService.setCookie('LoginType', eLoginProvider.Microsoft.toString());
    this.authService.microsoftEnable().then(
      externalLogin => {
        this.setExternalLogin(externalLogin);
      }).catch(
        reason => {
          this.message = reason.message;
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
      if (this.formsService.currentForm && this.loginType === eLoginProvider.Dexih) {
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
      case eLoginProvider.Google:
        this.googleLogin(false);
        break;
      case eLoginProvider.Microsoft:
        await this.microsoftLogin(false);
        break;
    }
  }

  async register() {
    await this.refreshLogin();

    this.formsService.currentForm.updateValueAndValidity();

    if (this.formsService.currentForm.valid) {
      this.authService.register(this.formsService.currentForm.getRawValue()).then(
        async (result) => {
          if (result) {
            let user: User = result;
            if (user.emailConfirmed) {
              if (user.isInvited) {
                switch (this.loginType) {
                  case eLoginProvider.Google:
                    await this.authService.googleLogin(false);
                    break;
                  case eLoginProvider.Microsoft:
                    await this.authService.microsoftLogin(false);
                    break;
                }

                if (!this.authService.redirectUrl) {
                  this.router.navigate(['/']);
                } else {
                  this.router.navigateByUrl(this.authService.redirectUrl);
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

  googleLogin(forceLogin: boolean) {
    this.authService.googleSignIn(forceLogin).then(
      result => {
        this.setExternalLogin(result);
      }).catch(
        reason => {
          this.message = reason.message;
        });
  }

  microsoftLogin(forceLogin: boolean) {
    this.authService.microsoftSignIn(forceLogin).then(externalLogin => {
      this.setExternalLogin(externalLogin);
    }).catch(
      reason => {
        this.message = reason.message;
      });
  }

  termsAccepted(termsAccepted: boolean) {
    this.formsService.currentForm.controls.terms.setValue(termsAccepted);
  }

  showTerms() {
    window.open('/auth/terms');
  }
}
