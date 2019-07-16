import { Component, OnInit, OnDestroy, Input, ViewChild } from '@angular/core';
import { AuthService } from '../../../+auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription, Observable, BehaviorSubject, combineLatest} from 'rxjs';
import { UserAuthorization } from '../../admin.models';
import { DexihMessageComponent } from '../../../shared/ui/dexihMessage';

@Component({
  selector: 'users',
  templateUrl: './users-index.component.html',
  styles: []
})
export class UsersIndexComponent implements OnInit, OnDestroy {
  @ViewChild('DexihMessage', { static: true }) public dexihMessage: DexihMessageComponent;

    users: Array<UserAuthorization>;

    columns = [
        { name: 'email', title: 'Email', format: ''},
        { name: 'firstName', title: 'First Name', format: ''},
        { name: 'lastName', title: 'Last Name', format: ''},
        { name: 'isInvited', title: 'Is Invited', format: 'Boolean'},
        { name: 'emailConfirmed', title: 'Email Confirmed', format: 'Boolean'},
        { name: 'isRegistered', title: 'Is Registered', format: 'Boolean'},
        { name: 'isEnabled', title: 'Is Enabled', format: 'Boolean'},
        { name: 'lockoutEnd', title: 'Lockout End', format: 'Time'},
        { name: 'terms', title: 'Agreed terms', format: 'Boolean'},
        { name: 'subscription', title: 'Agreed subscription', format: 'Boolean'},
    ];

    private _tableData = new BehaviorSubject<Array<any>>(null);
    tableData: Observable<Array<any>> = this._tableData.asObservable();

    constructor(
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
        this.authService.post('/api/Admin/GetUsers', {
                searchString: '',
                maxResults:  100,
            }, 'Getting user details...').then(result => {
            this._tableData.next(result.value);
        }).catch(reason => {
            this.dexihMessage.addMessage(reason);
        });
    }

    deleteUsers(users: Array<UserAuthorization>) {
        const emails = users.map(c => c.email);

        this.authService.confirmDialog('Delete users?', 'This action will delete users with the following emails: <p>' +
            emails.join('</p><p>') + '</p>  <p></p>Are you sure?').then(confirm => {

            this.authService.post('/api/Admin/DeleteUsers', {
                    emails: emails
                }, 'Deleting users...').then(result => {
                this.refreshUsers();
            }).catch(reason => {
                this.dexihMessage.addMessage(reason);
            });
        });
    }

    revokeUsers(users: Array<UserAuthorization>) {
        const emails = users.map(c => c.email);

        this.authService.confirmDialog('Revoke users?', 'This action will revoke users with the following emails: <p>' +
            emails.join('</p><p>') + '</p>  <p></p>Are you sure?').then(confirm => {

            this.authService.post('/api/Admin/RevokeUsers', {
                    emails: users.map(c => c.email)
                }, 'Revoking users...').then(result => {
                this.refreshUsers();
            }).catch(reason => {
                this.dexihMessage.addMessage(reason);
            });
        });
    }

    enableUsers(users: Array<UserAuthorization>) {
        const emails = users.map(c => c.email);

        this.authService.confirmDialog('Enable users?', 'This action will re-enable logins for users with the following emails: <p>' +
            emails.join('</p><p>') + '</p>  <p></p>Are you sure?').then(confirm => {

            this.authService.post('/api/Admin/EnableUsers', {
                    emails: users.map(c => c.email)
                }, 'Enabling users...').then(result => {
                this.refreshUsers();
            }).catch(reason => {
                this.dexihMessage.addMessage(reason);
            });
        });
    }

    reinviteUsers(users: Array<UserAuthorization>) {
        this.authService.post('/api/Admin/ReInviteUsers', {
                emails: users.map(c => c.email)
            }, 'Inviting users...').then(result => {
                this.dexihMessage.addSuccessMessage('Emails have been sent to the selected users.');
        }).catch(reason => {
            this.dexihMessage.addMessage(reason);
        });
    }

    editUser(user: UserAuthorization) {
        this.router.navigate(['edit-user', user.email], { queryParamsHandling: 'merge', relativeTo: this.route.parent });
    }

}
