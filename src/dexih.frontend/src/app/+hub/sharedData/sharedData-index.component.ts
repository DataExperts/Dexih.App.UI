import { Component, OnInit, OnDestroy } from '@angular/core';
import { HubService } from '../hub.service';
import { HubCache } from '../hub.models';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, BehaviorSubject, Subscription, combineLatest} from 'rxjs';
import { AuthService } from '../../+auth/auth.service';
import { DexihDatalink, eSourceType, eDownloadFormat, DownloadObject, eDataObjectType, eSharedObjectType } from '../../shared/shared.models';

@Component({
    selector: 'sharedData-index',
    templateUrl: './sharedData-index.component.html',
    styles: []
})
export class SharedDataIndexComponent implements OnInit, OnDestroy {
    hubCache: HubCache;

    private _subscription: Subscription;
    private _hubCacheChangeSubscription: Subscription;

    columns = [
        { name: 'objectType', title: 'Type', format: '' },
        { name: 'name', title: 'Name', format: '' },
        { name: 'description', title: 'Description', format: 'Md' },
        { name: 'updateDate', title: 'Last Updated', format: 'Date' },
    ];

    typeFilter: string;

    private _tableData = new BehaviorSubject<Array<DexihDatalink>>(null);
    tableData: Observable<Array<DexihDatalink>> = this._tableData.asObservable();

    constructor(private hubService: HubService, private authService: AuthService, private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit() {

        try {
            this._subscription = combineLatest(
                this.route.data,
                this.route.params,
                this.route.queryParams,
                this.hubService.getHubCacheObservable(),
            ).subscribe(result => {
                let queryParams = result[2];
                this.hubCache = result[3];

                this.watchChanges();

                this.typeFilter = queryParams['typeFilter'];
                if (!this.typeFilter) {
                    this.typeFilter = 'All';
                }

                this.route.snapshot.data['pageTitle'] =  this.typeFilter;

                this.updateSharedData();

            });
        } catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Shared Data Index');
        }
    }

    ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
        if (this._hubCacheChangeSubscription) { this._hubCacheChangeSubscription.unsubscribe(); }
    }

    close() {
        this.authService.navigateUp();
    }

    private updateSharedData() {
        let objects = new Array<any>();
        if (this.hubCache) {
            if (!this.hubCache.hub.dexihDatalinks && !this.hubCache.hub.dexihConnections) {
                this._tableData.next(new Array<DexihDatalink>());
            } else {
                if (this.typeFilter === 'All' || this.typeFilter === 'Datalink') {
                    this.hubCache.hub.dexihDatalinks.filter(d => d.isShared).forEach(datalink => {
                        objects.push({
                            objectKey: datalink.key,
                            objectType: eSourceType.Datalink,
                            name: datalink.name,
                            description: datalink.description,
                            updateDate: datalink.updateDate
                        });
                    });
                }

                if (this.typeFilter === 'All' || this.typeFilter === 'Table') {
                    this.hubCache.hub.dexihTables.filter(c => c.isShared).forEach(table => {
                        objects.push({
                            objectKey: table.key,
                            objectType: eSourceType.Table,
                            name: table.logicalName + ' (' + table.name + ')',
                            description: table.description,
                            updateDate: table.updateDate
                        });
                    });
                }

                this._tableData.next(objects);
            }
        }

    }

    public downloadData(dataObjects: Array<any>) {
        this.hubService.downloadData(dataObjects, true, eDownloadFormat.Csv).then(() => {
            this.hubService.addHubSuccessMessage('The specified data is being downloaded.');
        }).catch(() => {
            //            this.hubService.addHubErrorMessage(reason);
        });
    }

    public preview(dataObject: DownloadObject) {
        if (dataObject.objectType === eDataObjectType.Table) {
            this.router.navigate(['table-preview', dataObject.objectKey], { relativeTo: this.route });
        }
        if (dataObject.objectType === eDataObjectType.Datalink) {
            this.router.navigate(['datalink-preview', dataObject.objectKey], { relativeTo: this.route });
        }
    }

    public unshareSelectedTables(dataObjects: Array<DownloadObject>) {
        let datalinkKeys = dataObjects.filter(c => c.objectType === eDataObjectType.Datalink).map(c => c.objectKey);
        if (datalinkKeys.length > 0) {
            this.hubService.shareItems(datalinkKeys, eDataObjectType.Datalink, false);
        }

        let tableKeys = dataObjects.filter(c => c.objectType === eDataObjectType.Table).map(c => c.objectKey);
        if (tableKeys.length > 0) {
            this.hubService.shareItems(tableKeys, eDataObjectType.Table, false);
        }
    }

    watchChanges() {
        // watch the current connection in case it is changed in another session.
        this._hubCacheChangeSubscription = this.hubService.getHubCacheChangeObservable().subscribe(hubCacheChange => {
            if (hubCacheChange.changeClass === eSharedObjectType.Datalink || hubCacheChange.changeClass === eSharedObjectType.Table) {
                this.updateSharedData();
            }
        });

    }
}


