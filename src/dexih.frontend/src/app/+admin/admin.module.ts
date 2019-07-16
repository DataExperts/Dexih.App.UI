import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routing } from './admin.routing';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminMainComponent } from './admin-main.component';
import { UsersIndexComponent } from './users/users-index/users-index.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UsersInviteComponent } from './users/users-invite/users-invite.component';

@NgModule({
    imports: [
        SharedModule,
        Routing,
        ReactiveFormsModule
    ],
    exports: [],
    declarations: [
        AdminMainComponent,
        UsersIndexComponent,
        UserEditComponent,
        UsersInviteComponent
    ],
    providers: [],
})
export class AdminModule { }
