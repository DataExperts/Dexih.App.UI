import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {HeaderModule} from './header/header.module';
import {FooterComponent} from './footer/footer.component';
import {NavigationModule} from './navigation/navigation.module';
import {RibbonComponent} from './ribbon/ribbon.component';
import { MainLayoutComponent } from './app-layouts/main-layout.component';
import { EmptyLayoutComponent } from './app-layouts/empty-layout.component';
import { RouterModule} from '@angular/router';
import { AuthLayoutComponent } from './app-layouts/auth-layout.component';
import { RibbonModule } from './ribbon';

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    NavigationModule,
    FormsModule,
    RouterModule,
    RibbonModule,
//    BsDropdownModule,
  ],
  declarations: [
    FooterComponent,
    RibbonComponent,
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
