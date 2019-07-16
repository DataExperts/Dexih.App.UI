import { AbstractControl, FormBuilder, FormControl, ValidatorFn, Validators, FormGroup } from '@angular/forms';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../+auth/auth.service';
import { Subscription, combineLatest} from 'rxjs';
import { Location } from '@angular/common';
import { FormsService } from '../../shared/forms/forms.service';
import { User, UserLoginInfo } from '../../+auth/auth.models';
import { DexihMessageComponent } from '../../shared/ui/dexihMessage';

@Component({
  selector: 'manage-form',
  templateUrl: './manage.component.html',
  providers: [FormsService]
})
export class ManageComponent implements OnInit, OnDestroy {
  @ViewChild('DexihMessage', { static: true }) public dexihMessage: DexihMessageComponent;

  private _userSubscription: Subscription;
  private action: string;

  public logins: UserLoginInfo[];

  public passwordForm: FormGroup;
  public updatingPassword = false;
  public passwordMatchError = '';
  public passwordStrengthError = '';

  public googleMessage = false;
  public microsoftMessage = false;

  constructor(
    private authService: AuthService,
    public formsService: FormsService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location) {
  }

  ngOnInit() {
    this._userSubscription = this.authService.getUserObservable().subscribe(user => {
      this.formsService.createDefault(user, new User());
      this.updateLogins();
      this.formsService.currentForm.controls.email.disable();

      this.passwordForm = this.fb.group({
        'password': ['', [
        ]],
        'newPassword': ['', [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(20),
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,}$')
        ]],
        'confirmPassword': ['', [
          this.duplicatePasswordValidator()
        ]],
      });

    })
  }

  ngOnDestroy() {
    if (this._userSubscription) { this._userSubscription.unsubscribe(); }
  }

  updateLogins() {
    this.authService.getLoginProviders().then(result => {
      this.logins = result;
    });
  }

  private duplicatePasswordValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (this.passwordForm) {
        let form = this.passwordForm;
        if (form.controls.confirmPassword.dirty && form.controls.newPassword.value !== form.controls.confirmPassword.value) {
          this.passwordMatchError = 'The passwords do not match';
          return { 'passwordMatch': {} };
        } else {
          this.passwordMatchError = '';
          return null;
        }
      }
    };
  }

  public updatePassword() {
    this.updatingPassword = true;
    this.authService.changePassword(this.passwordForm.controls.password.value, this.passwordForm.controls.newPassword.value)
      .then(result => {
        this.updatingPassword = false;
        this.dexihMessage.addSuccessMessage('The password change was successful.');
    }).catch(reason => {
      this.dexihMessage.addMessage(reason);
      this.updatingPassword = false;
    });
  }

  save() {
    const user: User = this.formsService.currentForm.value;

    this.authService.updateUserDetails(user.firstName, user.lastName, user.subscription).then(c => {
      if (c) {
        this.dexihMessage.addSuccessMessage('Details updated successfully');
      } else {
      }

    }).catch(reason => {
      this.dexihMessage.addMessage(reason);
    })
  }

  cancel() {
    this.authService.navigateUp();
  }

  googleLogin(forceLogin: boolean) {
    this.dexihMessage.reset();

    this.authService.getGlobalCachePromise().then(cache => {
      let clientId = cache.googleClientId;

      if (!clientId) {
        this.dexihMessage.addErrorMessage('There was an issue using the google authentication provider.  Contact support.');
        return;
      }

      this.authService.googleSignIn(clientId, forceLogin).then(result => {
          this.authService.addExternalLogin('google', result.providerKey, result.authenticationToken).then(
            loginResult => {
              this.updateLogins();
            }).catch(
            reason => {
              this.dexihMessage.addMessage(reason);
            });
        }).catch(
          reason => {
            this.googleMessage = reason;
            this.dexihMessage.addErrorMessage(reason);
          });
    });
  }

  microsoftLogin(forceLogin: boolean)  {
    this.dexihMessage.reset();

    this.authService.getGlobalCachePromise().then(cache => {
      let clientId = cache.microsoftClientId;

      if (!clientId) {
        this.dexihMessage.addErrorMessage('There was an issue using the microsoft authentication provider.  Contact support.');
        return;
      }

      this.authService.microsoftSignIn(clientId, forceLogin).then(result => {
          this.authService.addExternalLogin('microsoft', result.providerKey, result.authenticationToken).then(
            loginResult => {
              this.updateLogins();
            }).catch(
            reason => {
              this.dexihMessage.addMessage(reason);
            });
        }).catch(
          reason => {
            this.microsoftMessage = reason;
            this.dexihMessage.addErrorMessage(reason);
          });
    });
  }

  deleteLogin(login: UserLoginInfo) {
    this.authService.removeExternalLogin(login.loginProvider, login.providerKey);
  }
}
