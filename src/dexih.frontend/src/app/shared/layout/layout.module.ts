import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { RouterModule} from '@angular/router';
import { RibbonModule } from './ribbon';
import { SharedModule} from '../shared.module';

import {HeaderModule} from './header/header.module';

import {FooterComponent} from './footer/footer.component';
import {NavigationModule} from './navigation/navigation.module';
import { MainLayoutComponent } from './app-layouts/main-layout.component';
import { EmptyLayoutComponent } from './app-layouts/empty-layout.component';
import { AuthLayoutComponent } from './app-layouts/auth-layout.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,

    SharedModule,
    HeaderModule,
    NavigationModule,
    RibbonModule,
  ],
  declarations: [
    FooterComponent,
    MainLayoutComponent,
    EmptyLayoutComponent,
    AuthLayoutComponent,
  ],
  exports: [
    // HeaderModule,
    // NavigationModule,
    // FooterComponent,
    // RibbonComponent,
  ]
})
export class LayoutModule {

}
