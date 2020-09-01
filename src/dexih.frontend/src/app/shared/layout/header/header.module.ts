

import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { SharedModule } from '../../shared.module';

import {HeaderComponent} from './header.component';
// import {MessagesComponent} from './messages/messages.component';
import {TasksComponent} from './tasks/tasks.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    TasksComponent,
    HeaderComponent,
//    MessagesComponent
  ],
  exports: [
    HeaderComponent,
  ]
})
export class HeaderModule {}
