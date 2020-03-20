import { NgModule, ModuleWithProviders } from '@angular/core';

import { Routing } from './auth.routing';
import { SharedModule} from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { LockedComponent } from './locked/locked.component';
import { NotInvitedComponent } from './notInvited/notInvited.component';
import { RegisterComponent } from './register/register.component';
import { ForgotComponent } from './forgot/forgot.component';
import { VerifyEmailComponent } from './verifyemail/verifyemail.component';
import { TermsComponent} from './terms/terms.component';
import { WelcomeComponent} from './welcome/welcome.component';
import { AuthComponent } from './auth.component';
import { AuthService } from './auth.service';
import { HelpComponent} from './help/help.component'
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    SharedModule,
    Routing,
    ReactiveFormsModule,
  ],
  declarations: [
      LoginComponent,
      LockedComponent,
      NotInvitedComponent,
      RegisterComponent,
      ForgotComponent,
      VerifyEmailComponent,
      AuthComponent,
      TermsComponent,
      WelcomeComponent,
      HelpComponent,
      HeaderComponent,
    ],
})
export class AuthModule {
  static forRoot(): ModuleWithProviders<AuthModule> {
    return {
      ngModule: AuthModule,
      providers: [AuthService]
    };
  }
}
