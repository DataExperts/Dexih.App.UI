import {Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import { HubService } from '../../../+hub/hub.service';
import { AuthService } from '../../../+auth/auth.service';
import { HubCache, eCacheStatus } from '../../../+hub/hub.models';
import { Subscription, combineLatest} from 'rxjs';
import { LayoutService } from '../layout.service';
import { DexihToastComponent, ToastMessage } from 'dexih-ngx-components';
import { Message } from '../../../+auth/auth.models';

@Component({
  selector: 'dexih-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {
      @ViewChild('toasts', { static: true }) public toasts: DexihToastComponent;


  _hubCacheSubscription: Subscription;
  _displayHelpSubscription: Subscription;
  _layoutSubscription: Subscription;
  _notificationSubscription: Subscription;

  searchString;

  displayHelp: boolean;

  collapsed = false;
  mobileViewActivated = false;


  hubCache: HubCache;
  public waitMessage: string;

  constructor(private router: Router,
    private hubService: HubService,
    private authService: AuthService,
    private layoutService: LayoutService) {
  }


  ngOnInit() {
    this._hubCacheSubscription = this.hubService.getHubCacheObservable().subscribe(cache => {
      if (cache.status === eCacheStatus.Loaded) {
        this.hubCache = cache;
      }
    });

    this._layoutSubscription = this.layoutService.subscribe(store => {
      this.collapsed = store.menuCollapsed;
      this.mobileViewActivated = store.mobileViewActivated;
    });

    this._displayHelpSubscription = this.authService.getDisplayHelp().subscribe(displayHelp => this.displayHelp = displayHelp);

    this._notificationSubscription = this.authService.getNotificationObservable().subscribe(message => {
      if (message) {
        let toastMessage: ToastMessage = {
          content: message.message,
          type: message.success ? 'success' : 'error',
          buttonName: 'details',
          reference: message.reference,
          delay: 6000,
          title: 'Message',
          onButtonClick: (m) => this.toastClick(message)
        }
        this.toasts.add(toastMessage);
      }

    });
  }

  ngOnDestroy() {
    if (this._hubCacheSubscription) { this._hubCacheSubscription.unsubscribe(); }
    if (this._displayHelpSubscription) { this._displayHelpSubscription.unsubscribe(); }
    if (this._layoutSubscription) { this._layoutSubscription.unsubscribe(); }
    if (this._notificationSubscription) { this._notificationSubscription.unsubscribe(); }
  }

  onSubmit() {
    if (this.hubCache) {
      this.router.navigate(['/hub', this.hubCache.hub.hubKey, 'search', 'All', this.searchString ], { });
    }
  }

  onHelpToggle() {
    this.authService.setDisplayHelp(!this.displayHelp);
  }

  toastClick(message: Message) {
    this.authService.informationDialog('Error Notification',
      message.message + '<br><br>' + message.exceptionDetails);
  }

  onFullScreenToggle() {
    const documentMethods = {
      enter: ['requestFullscreen', 'mozRequestFullScreen', 'webkitRequestFullscreen', 'msRequestFullscreen'],
      exit: ['cancelFullScreen', 'mozCancelFullScreen', 'webkitCancelFullScreen', 'msCancelFullScreen']
    };

    if (!document.body.classList.contains('full-screen')) {
      document.body.classList.add('full-screen');
      document.documentElement[documentMethods.enter.filter((method) => {
        return document.documentElement[method]
      })[0]]()
    } else {
      document.body.classList.remove('full-screen');
      document[documentMethods.exit.filter((method) => {
        return document[method]
      })[0]]()
    }
  }

  onMenuToggle() {
    this.layoutService.onCollapseMenu();
  }

  logOut() {
    this.authService.logout().then(result => {
    });
  }
}
