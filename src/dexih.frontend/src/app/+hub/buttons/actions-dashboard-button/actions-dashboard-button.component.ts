import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription} from 'rxjs';

import { AuthService } from '../../../+auth/auth.service';
import { HubCache } from '../../hub.models';
import { HubService } from '../../hub.service';
import { DexihView, eDataObjectType, DexihDashboard } from '../../../shared/shared.models';

@Component({
    selector: 'actions-dashboard-button',
    templateUrl: './actions-dashboard-button.component.html'
})

export class ActionsDashboardButtonComponent implements OnInit, OnDestroy {
    @Input() public dashboards: DexihDashboard[];
    @Input() public pullRight = false;

    private _hubCacheSubscription: Subscription;
    public hubCache: HubCache;

        tables = [];

        constructor(
            private authService: AuthService,
            private hubService: HubService,
                    private router: Router,
                    private route: ActivatedRoute) { }

        ngOnInit() {
            this._hubCacheSubscription = this.hubService.getHubCacheObservable().subscribe(cache => {
                this.hubCache = cache;
            });

        }

        ngOnDestroy() {
            if (this._hubCacheSubscription) { this._hubCacheSubscription.unsubscribe(); }
         }

         delete() {
            this.hubService.deleteDashboards(this.dashboards);
        }

        shareItems(isShared: boolean) {
            this.hubService.shareItems(this.dashboards.map(c => c.key), eDataObjectType.Dashboard, isShared);
        }

        export() {
            const hub = this.hubService.createHub(this.hubCache.hub.hubKey, '');
            this.dashboards.forEach(dashboard => { this.hubCache.cacheAddDashboard(dashboard.key, hub); });

            let filename = this.dashboards.length === 1 ? 'Dashboard - ' + this.dashboards[0].name + '.json' : 'dashboards.json';

            this.hubService.exportHub(hub, filename);
        }


}
