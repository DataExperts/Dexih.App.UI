import { Component, ViewContainerRef, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { AuthService } from './+auth/auth.service';
import { Observable, Subscription } from 'rxjs';
import { Router, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';
import { DexihModalComponent } from 'dexih-ngx-components';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('modal', { static: true }) modal: DexihModalComponent;

  private viewContainerRef: ViewContainerRef;

  private _waitMessagesSubscription: Subscription;
  private _routeEventsSubscription: Subscription;
  public waitMessages: string[];

  private loadingRouteKey: string;

  public constructor(
    viewContainerRef: ViewContainerRef,
    private authService: AuthService,
    private router: Router
  ) {
    // Small hack in order to catch application root view container ref
    this.viewContainerRef = viewContainerRef;

  }

  ngOnInit() {
    this.authService.setDialogDefaultContainer(this.modal);
    let waitMessagesObservable = this.authService.getWaitMessagesObservable();

    this._waitMessagesSubscription = waitMessagesObservable.subscribe(waitMessages => {
      // setTimeout forces microtask to stop ExpressionChangedAfterItHasBeenCheckedError
      setTimeout(() => {
        this.waitMessages = Array.from(waitMessages.values());
      });
    });

    this._routeEventsSubscription = this.router.events.subscribe(event => {
      if (event instanceof RouteConfigLoadStart) {
        if (this.loadingRouteKey) {
          this.authService.removeWaitMessage(this.loadingRouteKey);
        }
        this.loadingRouteKey = this.authService.addWaitMessage('Loading scripts...')
      } else if (event instanceof RouteConfigLoadEnd) {
        this.authService.removeWaitMessage(this.loadingRouteKey);
        this.loadingRouteKey = null;
      }
    });
  }

  ngOnDestroy() {
    if (this._waitMessagesSubscription) { this._waitMessagesSubscription.unsubscribe(); }
    if (this._routeEventsSubscription) { this._routeEventsSubscription.unsubscribe(); }
  }
}
