import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';

import {SharedModule} from './shared/shared.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {routing} from './app.routing';
import {HubService} from './+hub/hub.service';
import {AuthService} from './+auth/auth.service';
import {LayoutGuard} from './shared/layout/layout.guard';
import {HubsService } from './+hubs/hubs.service';
import { GlobalErrorHandler } from './global.error.handler';
import { LayoutModule } from './shared/layout/layout.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    LayoutModule,
    SharedModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {provide: ErrorHandler, useClass: GlobalErrorHandler},
    HubService,
      HubsService,
      AuthService,
      LayoutGuard,
  ],
  // entryComponents: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {

}
