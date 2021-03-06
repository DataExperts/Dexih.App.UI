import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NavigationComponent} from './navigation.component';
import {AuthModule} from '../../../+auth/auth.module';
import {RouterModule} from '@angular/router';
import {LoginInfoComponent} from './login-info/login-info.component';
import {MenuParentComponent, MenuItemComponent } from './menu';
import {RemoteAgentComponent} from './remote-agent/remote-agent.component';
import {HubsComponent} from './hubs/hubs.component';
import { DComponentsModule } from 'ngx-d-components';
import { DexihIconsModule} from '../../ui/icons/icons.module'
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DComponentsModule,
    DexihIconsModule,
  ],
  declarations: [
    NavigationComponent,
    LoginInfoComponent,
    MenuParentComponent, MenuItemComponent,
    RemoteAgentComponent,
    HubsComponent,
  ],
  exports: [
    NavigationComponent
  ]
})
export class NavigationModule { }
