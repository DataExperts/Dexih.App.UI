import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import { AuthService } from '../auth.service';
import {logoUrl, User} from '../auth.models';
import { Subscription, combineLatest} from 'rxjs';

@Component({
  selector: 'app-verifyemail',
  templateUrl: './verifyemail.component.html',
  styleUrls: ['../auth.component.scss']
})
export class VerifyEmailComponent implements OnInit, OnDestroy {
    private _queryParamSubscription: Subscription;

    logoUrl = logoUrl;

    email: string;
    verificationCode: string;

    message: string;
    successMessage: string;

    resendingCode = false;
    submittingVerification = false;

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private userService: AuthService) {
    }

  ngOnInit() {
    this._queryParamSubscription = this.route.queryParams.subscribe((params) => {
          this.email = params['email'];
          this.verificationCode = params['code'];

          if (this.email && this.verificationCode) {
              this.submitVerification();
          }
        });
  }

  ngOnDestroy() {
    if (this._queryParamSubscription) { this._queryParamSubscription.unsubscribe(); }
  }

  submitVerification() {
    this.submittingVerification = true;
    this.userService.confirmEmail(this.email, this.verificationCode).then(
        result => {
            if (result) {
                let user: User = result;
                if (user.isInvited) {
                    if (!this.userService.redirectUrl) {
                        this.router.navigate(['/']);
                        return;
                    } else {
                      this.router.navigateByUrl(this.userService.redirectUrl);
                      return;
                    }
                } else {
                    this.router.navigate(['notInvited'], { queryParams: { email: user.email}, relativeTo: this.route.parent });
                    return;
                }
            } else {
              this.submittingVerification = false;
            }

            this.message = 'Confirm email failed.  Please contact support to proceed.';
            this.successMessage = '';

        }).catch(
        reason => {
          this.submittingVerification = false;
            this.message = reason.message;
            this.successMessage = '';
        }
    );
  }

  resendVerification() {
    this.resendingCode = true;
      this.userService.resendConfirmationEmail(this.email).then( () => {
          this.message = '';
          this.successMessage = 'The confirmation email has been resent to the email above.';
          this.resendingCode = false;
        }).catch(
        reason => {
            this.message = reason.message;
            this.successMessage = '';
            this.resendingCode = false;
        }
    );
  }
}
