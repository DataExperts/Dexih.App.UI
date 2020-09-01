import { Component, ViewContainerRef, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { AuthService } from './+auth/auth.service';
import { Subscription } from 'rxjs';
import { Router, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';
import { DModalComponent } from 'ngx-d-components';
import { WaitMessage } from './+auth/auth.models';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('modal', { static: true }) modal: DModalComponent;

  private _waitMessagesSubscription: Subscription;
  private _routeEventsSubscription: Subscription;
  public waitMessages: WaitMessage[];

  private loadingRouteKey: string;

  public constructor(
    private authService: AuthService,
    private router: Router
  ) {

  }

  ngOnInit() {
    this.authService.setDialogDefaultContainer(this.modal);
    let waitMessagesObservable = this.authService.getWaitMessagesObservable();

    this._waitMessagesSubscription = waitMessagesObservable.subscribe(waitMessages => {
      // setTimeout forces micro-task to stop ExpressionChangedAfterItHasBeenCheckedError
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
