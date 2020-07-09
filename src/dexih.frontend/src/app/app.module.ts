import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';

import {SharedModule} from './shared/shared.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {routing} from './app.routing';
// import {HubService} from './+hub/hub.service';
import {AuthService} from './+auth/auth.service';
import {LayoutGuard} from './shared/layout/layout.guard';
import {HubsService } from './+hubs/hubs.service';
import { GlobalErrorHandler } from './global.error.handler';
import { LayoutModule } from './shared/layout/layout.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddCsrfHeaderInterceptorService } from './+auth/token.interceptor.service';

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
    // HubService,
      HubsService,
      AuthService,
      LayoutGuard,
        { provide: HTTP_INTERCEPTORS,
          useClass: AddCsrfHeaderInterceptorService,
          multi: true
        }
  ],
  // entryComponents: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {

}
