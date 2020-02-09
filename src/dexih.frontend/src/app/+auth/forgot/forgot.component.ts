import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { AuthService } from '../auth.service';
import { logoUrl } from '../auth.models';
import { Subscription, combineLatest} from 'rxjs';
import { FormsService } from '../../shared/forms/forms.service';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['../auth.component.scss'],
  providers: [FormsService]
})
export class ForgotComponent implements OnInit, OnDestroy {

    private _queryParamSubscription: Subscription;

    logoUrl = logoUrl;

  message: string;

  codeSent = false;

  constructor(
      private router: Router,
      private route: ActivatedRoute,
      public formsService: FormsService,
      private userService: AuthService,
      private fb: FormBuilder) {
  }

  ngOnInit() {
    this._queryParamSubscription = this.route.queryParams.subscribe((params) => {
        let email = params['email'];
        let verificationCode = params['code'];

        const registerForm = this.fb.group({
            'email': [email, [
              Validators.required
            ]],
            'verificationCode': [verificationCode, [
                Validators.required
              ]],
            'password': ['', [
              Validators.required,
              Validators.minLength(8),
              Validators.maxLength(20),
              Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,}$')
            ]
          ],
            'passwordConfirm': ['', [
              Validators.required,
            ]],
          }, { validator: this.passwordsMatch() }
          );
          this.formsService.startForm(registerForm);

        if (email && verificationCode) {
            this.codeSent = true;
        }
    });
  }

  ngOnDestroy() {
      if (this._queryParamSubscription) { this._queryParamSubscription.unsubscribe(); }
  }

  passwordsMatch(): ValidatorFn {
    return (group: FormGroup): { [key: string]: any } => {
      if (this.formsService.currentForm) {
        const password = group.controls['password'];
        const passwordConfirm = group.controls['passwordConfirm'];

        if (password.value !== passwordConfirm.value) {
          passwordConfirm.setErrors({'passwordMatch': true});
        }
        return;
      }
    };
  }

  submitCodeRequest() {
    let email = this.formsService.currentForm.controls.email.value;
    this.userService.forgotPassword(email).then(result =>  {
        this.codeSent = true;
        this.message = 'Email has been sent with instructions for resetting password.';
    }).catch(reason => {
      this.message = reason.message;
    });
  }

    submitPasswordReset() {
      let email = this.formsService.currentForm.controls.email.value;
      let verificationCode = this.formsService.currentForm.controls.verificationCode.value;
      let password = this.formsService.currentForm.controls.password.value;
      let passwordConfirm = this.formsService.currentForm.controls.passwordConfirm.value;

      if (password !== passwordConfirm) {
        this.message = 'The passwords do not match.';
        return;
    }

      this.userService.resetPassword(email, verificationCode, password).then(
      result => {
          if (result) {
              if (!this.userService.redirectUrl) {
                  this.router.navigate(['/']);
              } else {
                this.router.navigateByUrl(this.userService.redirectUrl);
              }
          } else {
            this.message = 'Reset password failed.  Please contact support to proceed.';
          }
      }).catch(
      reason => {
          this.message = reason.message;
      }
    );
  }
}
