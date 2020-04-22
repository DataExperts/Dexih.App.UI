import { Component, OnInit, OnDestroy } from '@angular/core';
import { HubService } from '../hub.service';
import { HubCache } from '../hub.models';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, BehaviorSubject, Subscription, combineLatest} from 'rxjs';
import { AuthService } from '../../+auth/auth.service';
import { DexihDatalink, eSourceType, eDownloadFormat, DownloadObject,
    eDataObjectType, eSharedObjectType } from '../../shared/shared.models';
import { CancelToken } from '../../+auth/auth.models';

@Component({
    selector: 'sharedData-index',
    templateUrl: './sharedData-index.component.html',
    styles: []
})
export class SharedDataIndexComponent implements OnInit, OnDestroy {
    hubCache: HubCache;

    private _subscription: Subscription;
    private _hubCacheChangeSubscription: Subscription;
    private cancelToken: CancelToken = new CancelToken();

    public eSharedObjectType = eSharedObjectType;

    columns = [
        { name: 'objectTypeName', title: 'Type', format: '' },
        { name: 'name', title: 'Name', format: '', tags: 'tags' },
        { name: 'description', title: 'Description', format: 'Md' },
        { name: 'updateDate', title: 'Last Modified', format: 'DateTime' },
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
        this.cancelToken.cancel();
    }

    close() {
        this.authService.navigateUp();
    }

    private updateSharedData() {
        let objects = new Array<any>();
        if (this.hubCache && this.hubCache.isLoaded()) {
            if (!this.hubCache.hub.dexihDatalinks && !this.hubCache.hub.dexihConnections) {
                this._tableData.next(new Array<DexihDatalink>());
            } else {
                if (this.typeFilter === 'All' || this.typeFilter === 'Datalink') {
                    this.hubCache.hub.dexihDatalinks.filter(d => d.isShared).forEach(datalink => {
                        objects.push({
                            objectKey: datalink.key,
                            objectTypeName: eDataObjectType[eDataObjectType.Datalink],
                            objectType: eDataObjectType.Datalink,
                            name: datalink.name,
                            description: datalink.description,
                            updateDate: datalink.updateDate,
                            tags: this.hubCache.getObjectTags(eSharedObjectType.Datalink, datalink.key)
                        });
                    });
                }

                if (this.typeFilter === 'All' || this.typeFilter === 'Table') {
                    this.hubCache.hub.dexihTables.filter(c => c.isShared).forEach(table => {
                        objects.push({
                            objectKey: table.key,
                            objectTypeName: eDataObjectType[eDataObjectType.Table],
                            objectType: eDataObjectType.Table,
                            name: table.logicalName + ' (' + table.name + ')',
                            description: table.description,
                            updateDate: table.updateDate,
                            tags: this.hubCache.getObjectTags(eSharedObjectType.TagObjects, table.key)
                        });
                    });
                }

                if (this.typeFilter === 'All' || this.typeFilter === 'View') {
                    this.hubCache.hub.dexihViews.filter(c => c.isShared).forEach(view => {
                        objects.push({
                            objectKey: view.key,
                            objectTypeName: eDataObjectType[eDataObjectType.View],
                            objectType: eDataObjectType.View,
                            name: view.name,
                            description: view.description,
                            updateDate: view.updateDate,
                            tags: this.hubCache.getObjectTags(eSharedObjectType.View, view.key)
                        });
                    });
                }

                if (this.typeFilter === 'All' || this.typeFilter === 'Dashboard') {
                    this.hubCache.hub.dexihDashboards.filter(c => c.isShared).forEach(dashboard => {
                        objects.push({
                            objectKey: dashboard.key,
                            objectTypeName: eDataObjectType[eDataObjectType.Dashboard],
                            objectType: eDataObjectType.Dashboard,
                            name: dashboard.name,
                            description: dashboard.description,
                            updateDate: dashboard.updateDate,
                            tags: this.hubCache.getObjectTags(eSharedObjectType.Dashboard, dashboard.key)
                        });
                    });
                }

                if (this.typeFilter === 'All' || this.typeFilter === 'Api') {
                    this.hubCache.hub.dexihApis.filter(c => c.isShared).forEach(api => {
                        objects.push({
                            objectKey: api.key,
                            objectTypeName: eDataObjectType[eDataObjectType.Api],
                            objectType: eDataObjectType.Api,
                            name: api.name,
                            description: api.description,
                            updateDate: api.updateDate,
                            tags: this.hubCache.getObjectTags(eSharedObjectType.Api, api.key)
                        });
                    });
                }

                this._tableData.next(objects);
            }
        }

    }

    public downloadData(dataObjects: Array<any>) {
        this.hubService.downloadData(dataObjects, true, eDownloadFormat.Csv, this.cancelToken).then(() => {
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
        if (dataObject.objectType === eDataObjectType.View) {
            this.router.navigate(['view-preview', dataObject.objectKey], { relativeTo: this.route });
        }
        if (dataObject.objectType === eDataObjectType.Dashboard) {
            this.router.navigate(['dashboard-preview', dataObject.objectKey], { relativeTo: this.route });
        }
        if (dataObject.objectType === eDataObjectType.Api) {
            this.router.navigate(['api-preview', dataObject.objectKey], { relativeTo: this.route });
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


