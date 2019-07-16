import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { HubService } from '../../hub.service';
import { DexihHub, DexihTable, HubCache, eSharedObjectType, DexihDatalinkTable, eCacheStatus, connectionPurposes } from '../../hub.models';
import { Subscription, Observable, BehaviorSubject, combineLatest} from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { DownloadObject, eObjectType, eDownloadFormat } from '../../hub.query.models';
import { AuthService } from '../../../+auth/auth.service';
import { RemoteLibraries, eConnectionCategory } from '../../hub.remote.models';

@Component({
    selector: 'table-index',
    templateUrl: './table-index.component.html',
    styles: []
})
export class TableIndexComponent implements OnInit, OnDestroy {
    private _hubCacheChangeSubscription: Subscription;
    private _subscription: Subscription;

    hubCache: HubCache;
    remoteLibraries: RemoteLibraries;
    purposeFilter: string;
    connectionKey: number;
    connectionName: string;
    connectionPurposes = connectionPurposes;

    title: string;

    columns = [
        { iconClass: 'sharedIcon', tooltip: 'sharedToolTip', width: '1%', align: 'center' },
        { name: 'logicalName', title: 'Logical Name', format: 'Md', footer: 'description' },
        { name: 'tableType', title: 'Table Type', format: '' },
        { name: 'connectionName', title: 'Connection', format: '' },
        { name: 'name', title: 'Table Name'  },
        { name: 'updateDate', title: 'Last Updated', format: 'Date' },
    ];

    private _tableData = new BehaviorSubject<Array<DexihTable>>(null);
    tableData: Observable<Array<DexihTable>> = this._tableData.asObservable();


    constructor(private hubService: HubService, private authService: AuthService, private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit() {
        try {
            this._subscription = combineLatest(
                this.route.data,
                this.route.params,
                this.route.queryParams,
                this.hubService.getHubCacheObservable(),
                this.hubService.getRemoteLibrariesObservable()
            ).subscribe(result => {
                let data = result[0];
                let params = result[1];
                let queryParams = result[2];
                this.hubCache = result[3];
                this.remoteLibraries = result[4];

                if (!this.hubCache.isLoaded()) { return; }
                this.purposeFilter = queryParams['purposeFilter'];
                if (!this.purposeFilter) { this.purposeFilter = 'All' }

                this.connectionKey = +queryParams['connectionKey'];
                if (this.connectionKey) {
                    let connection = this.hubCache.hub.dexihConnections.find(c => c.key === this.connectionKey);
                    if (connection) {
                        this.connectionName = connection.name;
                    }
                } else {
                    this.connectionName = 'All';
                }

                this.updateTableData();

            });
        } catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Table Index');
        }

        // watch for any changes in the connections.
        this.watchChanges();
    }

    ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
        if (this._hubCacheChangeSubscription) { this._hubCacheChangeSubscription.unsubscribe(); }
    }

    close() {
        this.authService.navigateUp();
    }

    updateTableData() {
        this.title = 'Tables ';
        this.connectionName = 'All';

        if (this.purposeFilter) {
            this.title += ': ' + this.purposeFilter;
        }
        if (this.hubCache && this.hubCache.isLoaded()) {
            let tableData = [];
            this.hubCache.hub.dexihTables.forEach(table => {
                let connection = this.hubCache.hub.dexihConnections.find(c => c.key === table.connectionKey);
                let connectionReference = this.remoteLibraries && connection ?
                    this.remoteLibraries.GetConnectionReference(connection) : null;

                if (
                    ((this.purposeFilter === 'All' || !this.purposeFilter) ||
                        (connection && connection.purpose.toString() === this.purposeFilter)) &&
                    (!this.connectionKey || table.connectionKey === this.connectionKey)
                ) {
                    let name: string;
                    if (table.useQuery) {
                        name = '(Sql Query)';
                    } else {
                        if (table.schema) {
                            name = table.schema + '.' + table.name;
                        } else {
                            name = table.name;
                        }
                    }

                    tableData.push({
                        key: table.key,
                        tableType: connection ? connection.purpose : 'undefined',
                        connectionName: connection ? connection.name : 'undefined',
                        description: table.description,
                        name: name,
                        logicalName: table.logicalName,
                        updateDate: table.updateDate,
                        connectionKey: connection ? connection.key : '',
                        isFile: connectionReference ? connectionReference.connectionCategory === eConnectionCategory.File : false,
                        sharedIcon: table.isShared ? 'fa fa-group' : 'fa fa-user-secret',
                        sharedToolTip: table.isShared ? 'Table is shared' : 'Table is private'
                    });
                }
            });

            if (this.connectionKey) {
                let connection = this.hubCache.hub.dexihConnections.find(c => c.key === this.connectionKey);
                if (connection) {
                    this.connectionName = connection.name;
                    this.title += ' for connection - ' + connection.name;
                }
            }

            this._tableData.next(tableData);
        } else {
            this._tableData.next(null);
        }
    }

    routeSibling(path) {
        this.router.navigate(['..', path]);
    }


    editTable(table: DexihTable) {
        this.router.navigate(['table-edit', table.key], { queryParamsHandling: 'merge', relativeTo: this.route.parent });
    }


    getConnection(connectionKey: number) {
        return this.hubCache.hub.dexihConnections.find(c => c.key === connectionKey);
    }

    watchChanges() {
        // watch the current connection in case it is changed in another session.
        this._hubCacheChangeSubscription = this.hubService.getHubCacheChangeObservable().subscribe(hubCacheChange => {
            if (hubCacheChange.changeClass === eSharedObjectType.Table) {
                this.updateTableData();
            }
        });
    }


}
