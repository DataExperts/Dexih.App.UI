import { HubCache, eSharedObjectType, DexihRemoteAgentHub, sharedObjectProperties } from '../../../+hub/hub.models';
import { Subscription, combineLatest} from 'rxjs';
import { Component, OnDestroy, OnInit, HostListener, ViewChild } from '@angular/core';
import { HubService } from '../../../+hub/hub.service';
import { AuthService, } from '../../../+auth/auth.service';
import { DexihHubAuth, User, ePermission } from '../../../+auth/auth.models';
import { LayoutService } from '../layout.service';

@Component({

  selector: 'dexih-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit, OnDestroy {
  @ViewChild('sidebar', { static: true }) sidebarElement: any;

  hubKey: number;

  _layoutSubscription: Subscription;
  _subscription: Subscription;
  _hubCacheObserve: Subscription;

  hubCache: HubCache;
  message: string;

  hubCacheLoaded = false;

  public expanded = false;
  public state = 'collapsed';

  user: User;
  hubs: Array<DexihHubAuth>;
  remoteAgents: Array<DexihRemoteAgentHub>;
  ePermission = ePermission;
  sharedObjectProperties = sharedObjectProperties;
  objectCounts = [];
  ignoreClick = false;

  mobileViewActivated = false;

  activeAgentCount = 0;


  constructor(
    private hubService: HubService,
    private authService: AuthService,
    private layoutService: LayoutService) {
  }

  ngOnInit() {
    this._subscription = combineLatest(
      this.hubService.getHubCacheObservable(),
      this.authService.getUserObservable(),
      this.authService.getHubsObservable(),
      this.authService.getRemoteAgentsObservable()
    ).subscribe(result => {
      this.hubCache = result[0];
      this.user = result[1];
      this.hubs = result[2];
      let activeAgents = result[3];


      if (activeAgents) {
        this.activeAgentCount = activeAgents.length;
      } else {
        this.activeAgentCount = 0;
      }

      if (this.hubCache && this.hubCache.isLoaded()) {
        this.remoteAgents = this.hubCache.hub.dexihRemoteAgentHubs;

        this.sharedObjectProperties.forEach(c => {
          this.objectCounts[c.type] = this.hubCache.hub[c.cacheProperty].filter(d => d.isValid).length;
        });

        this.hubCacheLoaded = true;
        this.watchChanges();
    } else {
        this.hubCacheLoaded = false;
    }
    });

    if (this._layoutSubscription) { this._layoutSubscription.unsubscribe(); }
      this._layoutSubscription = this.layoutService.subscribe(store => {
        this.mobileViewActivated = store.mobileViewActivated;
        if (store.menuCollapsed) {
          this.expanded = false;
          this.state = 'collapsed';
        } else {
          this.ignoreClick = true;
          this.expanded = true;
          this.state = 'expanded';
        }
      });

  }

  hideMenu() {
    this.layoutService.hideMenu();
  }

  ngOnDestroy() {
    if (this._subscription) { this._subscription.unsubscribe(); }
    if (this._layoutSubscription) { this._layoutSubscription.unsubscribe(); }
    if (this._hubCacheObserve) { this._hubCacheObserve.unsubscribe(); }
  }

  watchChanges() {
    // watch the current connection in case it is changed in another session.
    if (this._hubCacheObserve) { this._hubCacheObserve.unsubscribe(); }
    this._hubCacheObserve = this.hubService.getHubCacheChangeObservable().subscribe(hubCacheChange => {
      let hubCache = this.hubCache;
      this.hubCache = hubCache;

      let property = this.sharedObjectProperties.find(c => c.type === hubCacheChange.changeClass);
      if (property) {
        this.objectCounts[hubCacheChange.changeClass] = this.hubCache.hub[property.cacheProperty].filter(d => d.isValid).length;
      }

    });
  }

  // detect a click outside the control, and hide the sidebar
  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement: any) {
        const clickedInside = this.sidebarElement.nativeElement.contains(targetElement);
        if (!clickedInside && !this.ignoreClick && this.mobileViewActivated && this.expanded) {
            this.layoutService.hideMenu();
        }
    }

}
