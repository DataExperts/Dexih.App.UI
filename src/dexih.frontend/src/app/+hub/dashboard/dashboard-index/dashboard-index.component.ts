import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { HubService } from '../../hub.service';
import { AuthService } from '../../../+auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription, Observable, BehaviorSubject, combineLatest} from 'rxjs';
import { HubCache } from '../../hub.models';
import { DexihDashboard, DexihHub, eSharedObjectType } from '../../../shared/shared.models';

@Component({
    selector: 'dashboards',
    templateUrl: './dashboard-index.component.html',
    styles: []
})
export class DashboardIndexComponent implements OnInit, OnDestroy {
    @Input() public hubKey: number;

    private _subscription: Subscription;
    private _hubCacheChangeSubscription: Subscription;

    hubCache: HubCache;

    dashboards: Array<DexihDashboard>;

    columns = [
        { iconClass: 'sharedIcon', tooltip: 'sharedToolTip', width: '1%', align: 'center' },
        { name: 'name', title: 'Name', footer: 'description', format: 'Md' },
        { name: 'updateDate', title: 'Last Updated', format: 'DateTime' },
    ];

    private _tableData = new BehaviorSubject<Array<any>>(null);
    tableData: Observable<Array<any>> = this._tableData.asObservable();

    constructor(
        private hubService: HubService,
        private authService: AuthService,
        private router: Router,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        // watch for any changes in the validations.
        this.watchChanges();

        try {
            this._subscription = combineLatest(
                this.route.data,
                this.route.params,
                this.hubService.getHubCacheObservable(),
            ).subscribe(result => {
                let data = result[0];
                let params = result[1];
                this.hubCache = result[2];

                this.updateDashboards();
            });
        } catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Dashboard Index');
        }
    }

    ngOnDestroy() {
        if (this._hubCacheChangeSubscription) { this._hubCacheChangeSubscription.unsubscribe(); }
        if (this._subscription) { this._subscription.unsubscribe(); }
    }

    close() {
        this.authService.navigateUp();
    }

    delete(dashboard: Array<DexihDashboard>) {
        // TDB
        this.hubService.deleteDashboards(dashboard);
    }

    updateDashboards() {
        if (this.hubCache && this.hubCache.isLoaded()) {
            let dashboards: Array<DexihDashboard>;
            dashboards = this.hubCache.hub.dexihDashboards.filter(c => c.isValid);
            let tableData = dashboards.map(dashboard => {
                return {
                    key: dashboard.key,
                    name: dashboard.name,
                    updateDate: dashboard.updateDate,
                    sharedIcon: dashboard.isShared ? 'fa fa-group' : 'fa fa-user-secret',
                    sharedToolTip: dashboard.isShared ? 'Table is shared' : 'Table is private'
                };
            });
            this._tableData.next(tableData);
        } else {
            this._tableData.next(null);
        }
    }

    edit(dashboard: DexihDashboard) {
        this.router.navigate(['dashboard-edit', dashboard.key], { relativeTo: this.route });
    }

    // TBD
    export(items: Array<DexihDashboard>) {
        const cache = this.hubCache;
        const hub = this.hubService.createHub(cache.hub.hubKey, '');
        items.forEach(item => { cache.cacheAddDashboard(item.key, hub); });

        let filename = items.length === 1 ? 'Dashboard - ' + items[0].name + '.json' : 'dashboards.json';

        this.hubService.exportHub(hub, filename);
    }

    // TBD
    watchChanges() {
        // watch the current validation in case it is changed in another session.
        this._hubCacheChangeSubscription = this.hubService.getHubCacheChangeObservable().subscribe(hubCacheChange => {
            if (hubCacheChange.changeClass === eSharedObjectType.Dashboard) {
                this.updateDashboards();
            }
        });
    }
}
