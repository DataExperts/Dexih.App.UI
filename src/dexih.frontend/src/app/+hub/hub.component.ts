import { Component, OnDestroy, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, combineLatest} from 'rxjs';

import { AuthService } from '../+auth/auth.service';
import { DexihHub, HubCache, eCacheStatus } from './hub.models';
import { HubService } from './hub.service';
import { DexihActiveAgent, ePermission } from '../+auth/auth.models';

@Component({
    selector: 'dexih-hub',
    templateUrl: './hub.component.html'
})
export class HubComponent implements OnInit, OnDestroy {
    private _subscription: Subscription;
    private _routeSubscription: Subscription;
    private _hubMessageSubscription: Subscription;

    public hubCache: HubCache;

    hubKey: number;
    hub: DexihHub;
    remoteAgent: DexihActiveAgent;

    eCacheStatus = eCacheStatus;
    ePermission = ePermission;

    webSocketStatus: string;
    openDelay = false; // used to pause the websocket error message displaying whilst a connect attempt occurs.

    constructor(private hubService: HubService,
        private authService: AuthService,
        private router: Router,
        private route: ActivatedRoute) { }

    ngOnInit() {
        try {
            this._subscription = combineLatest(
                this.hubService.getHubCacheObservable(),
                this.authService.getWebSocketStatusObservable(),
                this.hubService.getRemoteAgentObservable()
            ).subscribe(result => {
                this.hubCache = result[0];
                this.webSocketStatus = result[1];
                this.remoteAgent = result[2];
            });

            this._routeSubscription = combineLatest(
                this.route.data,
                this.route.params,
            ).subscribe(result => {
                let params = result[1];

                this.hubKey = + params['hubKey'];
                if (this.hubKey > 0) {
                    this.hubService.updateHub(this.hubKey, 'Loading...');
                } else {
                    this.router.navigate(['/hubs']);
                }

                if (this.hubCache.hub != null) {
                    this.hubKey = this.hubCache.hub.hubKey;
                    this.hub = this.hubCache.hub;
                }
            });

        } catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Hub Component');
        }

        setTimeout(() => {
            this.openDelay = true;
        }, 5000);

    }

    ngOnDestroy() {
        if (this._hubMessageSubscription) { this._hubMessageSubscription.unsubscribe(); }
        if (this._routeSubscription) { this._routeSubscription.unsubscribe(); }
        if (this._subscription) { this._subscription.unsubscribe(); }
    }

    refresh() {
        this.authService.pingRemoteAgents();
    }

    @HostListener('window:focus', ['$event'])
    onFocus(): void {
        this.openDelay = false;
        setTimeout(() => {
            this.openDelay = true;
        }, 5000);
    }
}
