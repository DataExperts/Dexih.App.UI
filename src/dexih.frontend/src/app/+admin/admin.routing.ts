import { Routes, RouterModule } from '@angular/router';
import { AdminMainComponent } from './admin-main.component';
import { UsersIndexComponent } from './users/users-index/users-index.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UsersInviteComponent } from './users/users-invite/users-invite.component';

export const routes: Routes = [
    { path: '', component: AdminMainComponent, children: [
    { path: 'users', data: { pageTitle: 'Users' }, children : [
        { path: '', component: UsersIndexComponent, data: { pageTitle: 'Users Summary' } },
        { path: 'edit-user/:userName', component: UserEditComponent, data: { action: 'edit', pageTitle: 'Edit User' } },
        { path: 'new-user', component: UserEditComponent, data: { action: 'new', pageTitle: 'New User' } },
        { path: 'invite-users', component: UsersInviteComponent, data: { pageTitle: 'Invite Users' } },
    ] },
    ]}
];

export const Routing = RouterModule.forChild(routes);
