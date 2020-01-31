import {Routes, RouterModule} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ForgotComponent} from './forgot/forgot.component';
import {LockedComponent} from './locked/locked.component';
import { VerifyEmailComponent } from './verifyemail/verifyemail.component';
import { TermsComponent } from './terms/terms.component';
import { NotInvitedComponent } from './notInvited/notInvited.component';
import { HelpComponent} from './help/help.component'

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'privacy', redirectTo: '/help?path=policies%2Fprivacy.md', pathMatch: 'full'},
  { path: 'unsubscribe', redirectTo: '/hubs/index/manage', pathMatch: 'full' },
  { path: 'forgot-password', component: ForgotComponent },
  { path: 'locked', component: LockedComponent },
  { path: 'notInvited', component: NotInvitedComponent },
  { path: 'verifyemail', component: VerifyEmailComponent  },
  { path: 'help', component: HelpComponent  },

];

export const Routing = RouterModule.forChild(routes);
