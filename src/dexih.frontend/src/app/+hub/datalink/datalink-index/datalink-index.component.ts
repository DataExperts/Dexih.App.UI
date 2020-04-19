import { Component, OnInit, OnDestroy } from '@angular/core';
import { HubService } from '../../hub.service';
import { HubCache } from '../../hub.models';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, BehaviorSubject, Subscription, combineLatest} from 'rxjs';
import { AuthService } from '../../../+auth/auth.service';
import { eDatalinkType, DexihDatalink, eSourceType, eSharedObjectType, eDatalinkTypeItems, DexihTag } from '../../../shared/shared.models';

@Component({
    selector: 'datalink-index',
    templateUrl: './datalink-index.component.html',
    styles: []
})
export class DatalinkIndexComponent implements OnInit, OnDestroy {
    hubCache: HubCache;
    typeFilter: number;

    private _subscription: Subscription;
    private _hubCacheChangeSubscription: Subscription;

    public eSharedObjectType = eSharedObjectType;
    public eDatalinkType = eDatalinkType;
    public eDatalinkTypeItems = eDatalinkTypeItems;

    columns = [
        { iconClass: 'sharedIcon', tooltip: 'sharedToolTip', width: '1%', align: 'center' },
        { name: 'datalinkType', title: 'Datalink Type', format: '' },
        { name: 'name', title: 'Name', format: 'Md', footer: 'description', tags: 'tags' },
        { name: 'sourceName', title: 'Source', format: '' },
        { name: 'targetName', title: 'Target', format: '' },
        { name: 'updateDate', title: 'Last Modified', format: 'DateTime' },
    ];

    private _tableData = new BehaviorSubject<Array<DexihDatalink>>(null);
    tableData: Observable<Array<DexihDatalink>> = this._tableData.asObservable();

    constructor(private hubService: HubService, private authService: AuthService, private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.watchChanges();

        try {
            this._subscription = combineLatest(
                this.route.data,
                this.route.params,
                this.route.queryParams,
                this.hubService.getHubCacheObservable(),
            ).subscribe(result => {
                let queryParams = result[2];
                this.hubCache = result[3];

                if (!this.hubCache.isLoaded()) { return; }

                this.typeFilter = + queryParams['typeFilter'];
                if (!this.typeFilter) {
                    this.typeFilter = 0;
                }
                this.updateDatalinks();
            });
        } catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Datalink Index');
        }

    }

    ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
        if (this._hubCacheChangeSubscription) { this._hubCacheChangeSubscription.unsubscribe(); }
    }

    close() {
        this.authService.navigateUp();
    }

    private updateDatalinks() {
        let newDatalinks: Array<DexihDatalink>;
        if (this.hubCache.isLoaded()) {
            if (!this.hubCache.hub.dexihDatalinks) {
                this._tableData.next(new Array<DexihDatalink>());
            } else {

                if (this.typeFilter === 0 || !this.typeFilter) {
                    newDatalinks = this.hubCache.hub.dexihDatalinks;
                } else {
                    newDatalinks = this.hubCache.hub.dexihDatalinks.filter(d => d.datalinkType === this.typeFilter);
                }

                let datalinkData = new Array<any>();

                newDatalinks.forEach(d => {
                    let sourceName = '';
                    let targetName = '';

                    switch (d.sourceDatalinkTable.sourceType) {
                        case eSourceType.Table:
                            let sourceTable = this.hubCache.getTable(d.sourceDatalinkTable.sourceTableKey);
                            sourceName = sourceTable ? sourceTable.name : 'Error, not found';
                            break;
                        case eSourceType.Datalink:
                            let sourceDatalink = this.hubCache.hub.dexihDatalinks
                                .find(c => c.key === d.sourceDatalinkTable.sourceDatalinkKey);
                            sourceName = sourceDatalink ? 'Datalink: ' + sourceDatalink.name : 'Error, not found';
                            break;
                        case eSourceType.Rows:
                            sourceName = 'Static Rows';
                            break;
                    }

                    if (d.isQuery) {
                        targetName = 'None specified.';
                    } else {
                        targetName = d.dexihDatalinkTargets.filter(t => t.isValid).map(c => {
                            let table = this.hubCache.getTable(c.tableKey);
                            return table && table.name || 'Error, not found';
                        }).join(', ');
                    }

                    datalinkData.push({
                        key: d.key,
                        datalinkType: this.eDatalinkType[d.datalinkType],
                        name: d.name,
                        tags: this.hubCache.getObjectTags(eSharedObjectType.Datalink, d.key),
                        description: d.description,
                        sourceName: sourceName,
                        targetName: targetName,
                        updateDate: d.updateDate,
                        sharedIcon: d.isShared ? 'fa fa-group' : 'fa fa-user-secret',
                        sharedToolTip: d.isShared ? 'Table is shared' : 'Table is private'
                    });
                });

                this._tableData.next(datalinkData);
            }
        }

    }

    // ngOnDestroy() {
    //    this.hubSubscription.unsubscribe();
    // }

    editDatalink(datalink: DexihDatalink) {
        this.router.navigate(['datalink-edit', 'edit', datalink.key],
            { queryParamsHandling: 'merge', relativeTo: this.route.parent });
    }

    watchChanges() {
        if (this._hubCacheChangeSubscription) { this._hubCacheChangeSubscription.unsubscribe(); }

        // watch the current connection in case it is changed in another session.
        this._hubCacheChangeSubscription = this.hubService.getHubCacheChangeObservable().subscribe(hubCacheChange => {
            if (hubCacheChange.changeClass === eSharedObjectType.Datalink || hubCacheChange.changeClass === eSharedObjectType.TagObjects) {
                this.updateDatalinks();
            }
        });
    }
}


