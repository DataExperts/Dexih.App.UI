import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../+auth/auth.service';
import { Subscription} from 'rxjs';
import { Location } from '@angular/common';
import { FormsService } from '../../../shared/forms/forms.service';
import { Invites, roles } from '../../admin.models';
import { DexihMessageComponent } from '../../../shared/ui/dexihMessage';

@Component({

  selector: 'users-invite-form',
  templateUrl: './users-invite.component.html',
  providers: [ FormsService ]
})
export class UsersInviteComponent implements OnInit, OnDestroy {
@ViewChild('DexihMessage', { static: true }) public dexihMessage: DexihMessageComponent;

  private _routeDataSubscription: Subscription;


  roles = roles;

  constructor(
    private authService: AuthService,
    public formsService: FormsService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {

    this._routeDataSubscription = this.route.data.subscribe(data => {

      const inviteUsers = new Invites();
      this.formsService.createDefault(inviteUsers, inviteUsers);
    });
  }

  ngOnDestroy() {
    if (this._routeDataSubscription) { this._routeDataSubscription.unsubscribe(); }
  }

  save() {
    const emails = this.formsService.currentForm.value.emails;
    const hubQuota = this.formsService.currentForm.value.hubQuota;
      const inviteQuota = this.formsService.currentForm.value.inviteQuota;
      const role = this.formsService.currentForm.value.role;
      this.authService.post('/api/Admin/InviteUsers', {
              emails: emails,
              hubQuota: hubQuota,
              inviteQuota: inviteQuota,
              role: role
          }, 'Inviting users...').then(() => {
            this.authService.navigateUp();
        }).catch(reason => {
          this.dexihMessage.addMessage(reason);
      });
  }

  cancel() {
    this.authService.navigateUp();
  }

}
