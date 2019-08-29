import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { HubService } from '../../hub.service';
import { DexihHub, HubCache, eSharedObjectType, eCacheStatus, DexihView } from '../../hub.models';
import { AuthService } from '../../../+auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription, Observable, BehaviorSubject, combineLatest} from 'rxjs';

@Component({
    selector: 'views',
    templateUrl: './view-index.component.html',
    styles: []
})
export class ViewIndexComponent implements OnInit, OnDestroy {
    @Input() public hubKey: number;

    private _subscription: Subscription;
    private _hubCacheChangeSubscription: Subscription;

    hubCache: HubCache;

    views: Array<DexihView>;

    columns = [
        { iconClass: 'sharedIcon', tooltip: 'sharedToolTip', width: '1%', align: 'center' },
        { name: 'name', title: 'Name', footer: 'description', format: 'Md' },
        { name: 'viewType', title: 'Chart/Table' },
        { name: 'sourceType', title: 'Source Type'},
        { name: 'updateDate', title: 'Last Updated', format: 'Date' },
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

                this.updateViews();
            });
        } catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'View Index');
        }


    }

    ngOnDestroy() {
        if (this._hubCacheChangeSubscription) { this._hubCacheChangeSubscription.unsubscribe(); }
        if (this._subscription) { this._subscription.unsubscribe(); }
    }

    close() {
        this.authService.navigateUp();
    }

    deleteViews(views: Array<DexihView>) {
        this.hubService.deleteViews(views);
    }

    updateViews() {
        if (this.hubCache && this.hubCache.isLoaded()) {
            let views: Array<DexihView>;
            views = this.hubCache.hub.dexihViews.filter(c => c.isValid);
            let tableData = views.map(view => {
                return {
                    key: view.key,
                    name: view.name,
                    viewType: view.viewType,
                    sourceType: view.sourceType,
                    updateDate: view.updateDate,
                    sharedIcon: view.isShared ? 'fa fa-group' : 'fa fa-user-secret',
                    sharedToolTip: view.isShared ? 'Table is shared' : 'Table is private'
                };
            });
            this._tableData.next(tableData);
        } else {
            this._tableData.next(null);
        }
    }

    editView(view: DexihView) {
        this.router.navigate(['view-edit', view.key], { relativeTo: this.route });
    }

    export(items: Array<DexihView>) {
        const cache = this.hubCache;
        const hub = new DexihHub(cache.hub.hubKey, '');
        items.forEach(item => { cache.cacheAddView(item.key, hub); });

        let filename = items.length === 1 ? 'View - ' + items[0].name + '.json' : 'views.json';

        this.hubService.exportHub(hub, filename);
    }

    watchChanges() {
        // watch the current validation in case it is changed in another session.
        this._hubCacheChangeSubscription = this.hubService.getHubCacheChangeObservable().subscribe(hubCacheChange => {
            if (hubCacheChange.changeClass === eSharedObjectType.View) {
                this.updateViews();
            }
        });
    }
}
