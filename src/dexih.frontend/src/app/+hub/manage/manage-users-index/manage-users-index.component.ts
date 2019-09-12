import { Component, OnInit, OnDestroy, Input, ViewChild } from '@angular/core';
import { AuthService } from '../../../+auth/auth.service';
import { Permissions } from '../../../+auth/auth.models';
import { HubService } from '../../hub.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription, Observable, BehaviorSubject, combineLatest} from 'rxjs';
import { DexihMessageComponent } from  '../../../shared/ui/dexihMessage/dexih-message.component';
import { UserAuthorization } from '../../../+admin/admin.models';
import { ePermission } from '../../../shared/shared.models';

@Component({
  selector: 'users',
  templateUrl: './manage-users-index.component.html',
  styles: []
})
export class ManageUsersIndexComponent implements OnInit, OnDestroy {
  @ViewChild('DexihMessage', { static: true }) public dexihMessage: DexihMessageComponent;

    columns = [
        { name: 'email', title: 'Email', format: ''},
        { name: 'firstName', title: 'First Name', format: ''},
        { name: 'lastName', title: 'Last Name', format: ''},
        { name: 'permission', title: 'Permission', format: ''}
    ];

    private _tableData = new BehaviorSubject<Array<any>>(null);
    tableData: Observable<Array<any>> = this._tableData.asObservable();

    ePermission = ePermission;
    Permissions = Permissions;

    permission = ePermission.PublishReader;
    emails: string[] = [];
    sendInvites = true;

    constructor(
        private hubService: HubService,
        private authService: AuthService,
        private router: Router,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.refreshUsers();
    }

    ngOnDestroy() {
    }

    refreshUsers() {
        this.hubService.getHubUsers().then(result => {
            this._tableData.next(result.value);
        });
    }

    setPermission(permission: ePermission, users: Array<UserAuthorization>) {
        const emails = users.map(c => c.email);

        this.authService.confirmDialog('Confirm Permission Change',
            `This action will change the selected user(s) hub permission to ${permission}.  Proceed?`).then(confirm => {
                if (confirm) {
                    this.hubService.setUserPermissions(emails, permission, false).then(result => {
                        this.dexihMessage.addSuccessMessage('The specified user(s) permission have been updated.');
                        this.refreshUsers();
                    });
                }
            })
    }

    deleteUsers(users: Array<UserAuthorization>) {
        const emails = users.map(c => c.email);

        this.authService.confirmDialog('Confirm Delete Users',
        `This action will delete the selected user(s) from using this hub.  Proceed?`).then(confirm => {
            if (confirm) {
                this.hubService.removeUsers(emails).then(result => {
                    this.dexihMessage.addSuccessMessage('The specified users have been removed from the hub.');
                    this.refreshUsers();
                });
            }
        });
    }

    addUsers() {
        if (this.emails.length > 0 && this.permission) {
            this.authService.confirmDialog('Add Users',
            // tslint:disable-next-line:max-line-length
            `This action will added users with the specified emails to this hub with permission ${this.permission}.  Proceed?`).then(confirm => {
                if (confirm) {
                    this.hubService.setUserPermissions(this.emails, this.permission, this.sendInvites).then(result => {
                        this.emails = [];
                        this.dexihMessage.addSuccessMessage('The specified users have been added to the hub.');
                        this.refreshUsers();
                    });
                }
            });
        }
    }
}
