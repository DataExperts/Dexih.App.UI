import { Component, OnDestroy, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, combineLatest} from 'rxjs';

import { AuthService } from '../+auth/auth.service';
import { HubCache, eCacheStatus } from './hub.models';
import { HubService } from './hub.service';
import { DexihHub, DexihActiveAgent, ePermission } from '../shared/shared.models';
import { first, filter, take } from 'rxjs/operators';

@Component({
    selector: 'dexih-hub',
    templateUrl: './hub.component.html'
})
export class HubComponent implements OnInit, OnDestroy {
    private _subscription: Subscription;
    private _hubCacheSubscription: Subscription;
    private _remoteAgentSubscription: Subscription;
    private _webSocketSubscription: Subscription;

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
        this._hubCacheSubscription = this.hubService.getHubCacheObservable().subscribe(hubCache => {
            this.hubCache = hubCache;
        });

        this._webSocketSubscription = this.authService.getWebSocketStatusObservable().subscribe(webSocketStatus => {
            this.webSocketStatus = webSocketStatus;
        });

        this._remoteAgentSubscription = this.hubService.getRemoteAgentObservable().subscribe(remoteAgent => {
            this.remoteAgent = remoteAgent;
        })

        try {
            this._subscription = combineLatest(
                this.route.params,
                this.authService.getUserObservable()
            ).subscribe(async result => {
                let params = result[0];
                let user = result[1];

                if (!user) {
                    return;
                }

                this.hubKey = + params['hubKey'];

                if (this.hubKey > 0) {
                    await this.hubService.updateHub(this.hubKey, 'Loading...');
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
        if (this._hubCacheSubscription) { this._hubCacheSubscription.unsubscribe(); }
        if (this._remoteAgentSubscription) { this._remoteAgentSubscription.unsubscribe(); }
        if (this._webSocketSubscription) { this._webSocketSubscription.unsubscribe(); }
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
