import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../+auth/auth.service';
import { UserLoginInfo, User } from '../../../+auth/auth.models';
import { Subscription,  Observable, combineLatest} from 'rxjs';
import { Location } from '@angular/common';
import { FormsService } from '../../../shared/forms/forms.service';
import { UserAuthorization, UserLogin } from '../../admin.models';
import { DexihMessageComponent } from '../../../shared/ui/dexihMessage';
import { UserModel } from '../../../shared/shared.models';

@Component({

  selector: 'user-edit-form',
  templateUrl: './user-edit.component.html',
  providers: [FormsService]
})
export class UserEditComponent implements OnInit, OnDestroy {
  @ViewChild('DexihMessage', { static: true }) public dexihMessage: DexihMessageComponent;

  private _subscription: Subscription;

  private action: string;
  email: string;
  logins: Array<UserLogin>;

  constructor(
    private authService: AuthService,
    public formsService: FormsService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location) {
  }

  ngOnInit() {
    try {
      this._subscription = combineLatest(
        this.route.data,
        this.route.params,
      ).subscribe(result => {
        let data = result[0];
        let params = result[1];

        this.action = data['action'];

        if (this.action === 'new') {
          const user = new UserAuthorization();
          this.formsService.createDefault(user, user);
        } else {
          this.email = params['email'];

          if (!this.email) {
            this.authService.navigateUp();
            return;
          }
          this.refreshForm();
        }
      });
    } catch (e) {
      this.dexihMessage.addMessage(e.message);
    }

  }

  ngOnDestroy() {
    if (this._subscription) { this._subscription.unsubscribe(); }
  }

  refreshForm() {
    this.authService.post<UserModel>('/api/Admin/GetUser', {
      email: this.email,
    }, 'Getting user details...').then(result => {
      this.logins = result.logins;
      this.formsService.createDefault(result, new UserAuthorization());
    }).catch(reason => {
      this.dexihMessage.addMessage(reason);
    });

  }
  save() {
    const user = this.formsService.currentForm.value;

    if (this.action === 'new') {
      this.authService.post('/api/Admin/AddUsers', {
        users: [user],
        sendInvite: true
      }, 'Adding users...').then(result => {
        this.authService.navigateUp();
      }).catch(reason => {
        this.dexihMessage.addMessage(reason);
      });
    } else {
      this.authService.post('/api/Admin/UpdateUsers', {
        users: [user],
      }, 'Updating users...').then(result => {
        this.authService.navigateUp();
      }).catch(reason => {
        this.dexihMessage.addMessage(reason);
      });

    }
  }

  cancel() {
    this.authService.navigateUp();
  }

  deleteLogin(login: UserLogin) {
    const user = this.formsService.currentForm.value;

    this.authService.post('/api/Admin/RemoveExternalLogin', {
      email: user.email,
      provider: login.loginProvider,
      providerKey: login.providerKey
    }, 'Removing external login...').then(result => {
      this.refreshForm();
    }).catch(reason => {
      this.dexihMessage.addMessage(reason);
    });
  }

}
