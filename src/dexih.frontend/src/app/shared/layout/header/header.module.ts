

import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {RouterModule } from '@angular/router';

import {HeaderComponent} from './header.component';
import {MessagesComponent} from './messages/messages.component';
import {TasksComponent} from './tasks/tasks.component';

import {UtilsModule} from '../../utils/utils.module';
import {FormsModule} from '@angular/forms';
import {AuthModule} from '../../../+auth/auth.module';
import { DexihComponentsModule } from 'dexih-ngx-components';
import { NavigationModule } from '../navigation/navigation.module'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    UtilsModule,
    AuthModule,
    DexihComponentsModule,
    NavigationModule
  ],
  declarations: [
    TasksComponent,
    HeaderComponent,
    MessagesComponent
  ],
  exports: [
    HeaderComponent,
    // DexihComponentsModule,
    // CommonModule, FormsModule, RouterModule,
  ]
})
export class HeaderModule {}
