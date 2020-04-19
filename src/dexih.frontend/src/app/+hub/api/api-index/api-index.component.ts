import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { HubService } from '../../hub.service';
import { HubCache } from '../../hub.models';
import { AuthService } from '../../../+auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription, Observable, BehaviorSubject, combineLatest} from 'rxjs';
import { DexihApi, eSourceType, eSharedObjectType } from '../../../shared/shared.models';

@Component({
    selector: 'apis',
    templateUrl: './api-index.component.html',
    styles: []
})
export class ApiIndexComponent implements OnInit, OnDestroy {
    @Input() public hubKey: number;

    private _subscription: Subscription;
    private _hubCacheChangeSubscription: Subscription;

    hubCache: HubCache;

    views: Array<DexihApi>;

    columns = [
        { iconClass: 'sharedIcon', tooltip: 'sharedToolTip', width: '1%', align: 'center' },
        { name: 'name', title: 'Name', footer: 'description', format: 'Md' },
        { name: 'apiSource', title: 'Api Source' },
        { name: 'updateDate', title: 'Last Modified', format: 'DateTime' },
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

                this.updateApis();
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

    editApi(api: DexihApi) {
        this.router.navigate(['api-edit', api.key], { relativeTo: this.route });
    }

    updateApis() {
        if (this.hubCache.isLoaded()) {
            let apis: Array<DexihApi>;
            apis = this.hubCache.hub.dexihApis.filter(c => c.isValid);

            let tableData = apis.map(api => {
                return {
                    key: api.key,
                    name: api.name,
                    apiSource: this.getSourceDetails(api),
                    updateDate: api.updateDate,
                    sharedIcon: api.isShared ? 'fa fa-group' : 'fa fa-user-secret',
                    sharedToolTip: api.isShared ? 'Table is shared' : 'Table is private'
                };
            });
            this._tableData.next(tableData);
        } else {
            this._tableData.next(null);
        }
    }

    getSourceDetails(api: DexihApi): string {
        if (api.sourceType === eSourceType.Table) {
            let table = this.hubCache.getTable(api.sourceTableKey);
            if (table) {
                return 'Table: ' + table.name;
            } else {
                return 'Error: Table not found';
            }
        } else {
            let datalink = this.hubCache.hub.dexihDatalinks.find(c => c.key === api.sourceDatalinkKey);
            if (datalink) {
                return 'Datalink: ' + datalink.name;
            } else {
                return 'Error: Datalink not found';
            }
        }

        return 'Error: Source not configured';
    }



    watchChanges() {
        // watch the current validation in case it is changed in another session.
        this._hubCacheChangeSubscription = this.hubService.getHubCacheChangeObservable().subscribe(hubCacheChange => {
            if (hubCacheChange.changeClass === eSharedObjectType.Api) {
                this.updateApis();
            }
        });
    }
}
