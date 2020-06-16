import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { HubService } from '../../hub.service';
import { HubCache, EntityStatus } from '../../hub.models';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, BehaviorSubject, Subscription, combineLatest} from 'rxjs';
import { AuthService } from '../../../+auth/auth.service';
import { DexihConnection, DexihTable, eTableType, eStatus, eImportAction, eSharedObjectType, ConnectionReference } from '../../../shared/shared.models';
import { CancelToken } from '../../../+auth/auth.models';

@Component({
    selector: 'connections',
    templateUrl: './connection-import.component.html',
    styles: []
})
export class ConnectionImportComponent implements OnInit, OnDestroy {
    @Input() public hubKey: number;

    private _subscription: Subscription;
    private _hubCacheChangeSubscription: Subscription;

    hubCache: HubCache;
    connectionKey: number;
    connection: DexihConnection;
    connectionReference: ConnectionReference;
    names: Array<string>;
    tables: Array<DexihTable>;

    showPage = false;
    showPageMessage = 'Loading...';

    tableFilter: string;
    viewFilter: string;

    private cancelToken = new CancelToken();

    columns = [
        { name: 'schema', title: 'Schema', format: '' },
        { name: 'name', title: 'Name', format: '' },
        { name: 'tableType', title: 'Type', enum: eTableType, format: 'Enum' },
        { name: 'entityStatus.message', title: 'Latest Status' },
        { name: 'updateDate', title: 'Last Modified', format: 'Calendar' },
    ];

    private _tableData = new BehaviorSubject<Array<any>>(null);
    tableData: Observable<Array<DexihTable>> = this._tableData.asObservable();

    constructor(
        private authService: AuthService,
        private hubService: HubService,
        private router: Router,
        private route: ActivatedRoute
    ) {
        this.tableFilter = 'All';
        this.viewFilter = 'Tables';
    }

    ngOnInit() {
        this.showPageMessage = 'Querying source database tables.  Please wait...';

        try {
            this._subscription = combineLatest(
                this.route.data,
                this.route.params,
                this.hubService.getHubCacheObservable(),
                this.hubService.getRemoteAgentObservable()
            ).subscribe(async result => {
                let data = result[0];
                let params = result[1];
                this.hubCache = result[2];
                let remoteAgent = result[3];

                this.connectionKey = + params['connectionKey'];

                if (!this.connectionKey) {
                    this.hubService.addHubErrorMessage('There was no connection specified to import tables.');
                    this.close();
                } else {
                    if (this.hubCache.isLoaded()) {
                        this.connection = this.hubCache.hub.dexihConnections
                            .find(connection => connection.key === this.connectionKey);

                        this.connectionReference = await this.hubService.GetConnectionReference(this.connection);

                        this.showPage = false;

                        if (remoteAgent) {
                            if (this.connection) {
                                this.getTables(this.connection);
                            } else {
                                this.hubService.addHubErrorMessage('The connection could not be found.');
                                this.close();
                            }
                        } else {
                            this.showPageMessage = 'Waiting for an active remote agent...';
                        }
                    }
                }
            });
        } catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Connection Import');
        }

        // watch for any changes in the connections.
        this.watchChanges();
    }

    setTableFilter(tableFilter) {
        this.tableFilter = tableFilter;
        this.updateFilter();
    }

    setViewFilter(viewFilter) {
        this.viewFilter = viewFilter;
        this.updateFilter();
    }

    ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
        if (this._hubCacheChangeSubscription) { this._hubCacheChangeSubscription.unsubscribe(); }
        this.cancelToken.cancel();
    }

    updateFilter() {
        let tables;
        switch (this.tableFilter) {
            case 'Imported':
                tables = this.tables.filter(c => c.key > 0);
                break;
            case 'NonImported':
                tables = this.tables.filter(c => c.key === 0 || !c.key);
                break;
            default:
                tables = this.tables;
                break;
        }

        switch (this.viewFilter) {
            case 'Views':
                tables = tables.filter(c => c.tableType === eTableType.View);
                break;
            case 'Tables':
                tables = tables.filter(c => c.tableType === eTableType.Table);
                break;
        }

        this._tableData.next(tables);
    }

    getTables(connection: DexihConnection) {
        this.showPage = false;
        this.showPageMessage = 'Importing tables from remote database...';

        this.hubService.getDatabaseTableNames(connection, this.cancelToken)
            .then(tables => {
                this.tables = tables;

                let cacheTables = this.hubCache.hub.dexihTables.filter(c => c.connectionKey === connection.key);

                for (let i = 0; i < tables.length; i++) {
                    let cacheTable = null;
                    let table = tables[i];

                    if (cacheTables) {
                        cacheTable = cacheTables.find(t => t.name === table.name && t.schema === table.schema);

                        if (!cacheTable && this.connectionReference && this.connectionReference.defaultSchema === table.schema) {
                            cacheTable = cacheTables.find(t => t.name === table.name && !t.schema)
                        }
                    }

                    if (cacheTable) {
                        this.tables[i] = cacheTable;
                    } else {
                        table.connectionKey = connection.key;
                        table.tableType = <eTableType>table.tableType;
                        table.entityStatus = new EntityStatus();
                    }
                }

                this.showPage = true;
                this.showPageMessage = '';

                this.updateFilter();


            }).catch(reason => {
                this.hubService.addHubMessage(reason);
            });
    }


    import(table: DexihTable) {
        this.hubService.importTables([table], true, this.cancelToken).then(importResult => {
            this.mergeTables(importResult);
            // if (importResult) {
            //     importResult[0].entityStatus.isBusy = false;
            // }
        }).catch(reason => {
            table.entityStatus.isBusy = false;
            table.entityStatus.lastStatus = eStatus.Error;
            table.entityStatus.message = reason.message;
        });
    }

    deleteTable(table: DexihTable) {
        this.hubService.deleteTables([table]).then(result => {
            table.entityStatus.isBusy = false;
        }).catch(reason => {
            table.entityStatus.isBusy = false;
            table.entityStatus.lastStatus = eStatus.Error;
            table.entityStatus.message = reason.message;
        });
    }

    importSelected(selected: Array<DexihTable>) {
        let selectedTables = selected.filter(t => !t.entityStatus.isBusy);
        selectedTables.forEach(t => t.entityStatus.isBusy = true);
        this.hubService.importTables(selectedTables, true, this.cancelToken).then(result => {
            this.mergeTables(result);
            // selectedTables.forEach(t => t.entityStatus.isBusy = false);
        }).catch(reason => {
            selectedTables.forEach(t => t.entityStatus.isBusy = false);
        });
    }

    mergeTables(tables: Array<DexihTable>) {
        if (!tables) { return; }
        tables.forEach(table => {
            let index = this.tables.findIndex(t => t.name === table.name && t.schema === table.schema);

            if (index >= 0) {
                this.tables[index] = table;
            }
        });

        this.updateFilter();
    }

    deleteSelected(selected: Array<DexihTable>) {
        let selectedTables = selected.filter(t => !t.entityStatus.isBusy && t.key > 0);

        if (selectedTables.length === 0) {
            this.authService.informationDialog(
                'Can not delete', 'None of the selected tables can be deleted, as they are either busy, or have not been imported.');
        }
        selectedTables.forEach(t => t.entityStatus.isBusy = true);
        this.hubService.deleteTables(selectedTables).then(result => {
            selectedTables.forEach(t => t.entityStatus.isBusy = false);
        }).catch(reason => {
            selectedTables.forEach(t => t.entityStatus.isBusy = false);
        });
    }

    editTable(table: DexihTable) {
        if (table && table.key) {
            this.router.navigate(['table-edit', table.key], { relativeTo: this.route.parent });
        }
    }

    newDatalinks(items: Array<DexihTable>) {
        let selectedTables = items.filter(t => !t.entityStatus.isBusy);
        selectedTables.forEach(t => t.entityStatus.isBusy = true);
        this.hubService.importTables(selectedTables, true, this.cancelToken).then(result => {
            this.mergeTables(result);

            let tableKeys = result.map(c => c.key).join('|');
            this.router.navigate(['datalink-new', tableKeys, 0], { relativeTo: this.route.parent });

        }).catch(reason => {
            selectedTables.forEach(t => t.entityStatus.isBusy = false);
        });

    }

    watchChanges() {
        // watch the current connection in case it is changed in another session.
        this._hubCacheChangeSubscription = this.hubService.getHubCacheChangeObservable().subscribe(hubCacheChange => {
            if (hubCacheChange.changeClass === eSharedObjectType.Table) {
                if (hubCacheChange.changeType === eImportAction.Replace || hubCacheChange.changeType === eImportAction.New) {
                    let table: DexihTable = hubCacheChange.data;

                    if (table.connectionKey === this.connectionKey) {
                        let index = this.tables.findIndex(t => t.name === table.name && t.schema === table.schema);
                        if (index >= 0) {
                            this.tables[index] = table;
                            this.updateFilter();
                        }
                    }
                }
                if (hubCacheChange.changeType === eImportAction.Delete) {
                    let deletedTable: DexihTable = hubCacheChange.data;
                    if (deletedTable.connectionKey === this.connectionKey) {
                        let previousTable = this.tables.find(t => t.key === deletedTable.key);
                        if (previousTable) {
                            // table has been delete, so clear key attributes so it appears deleted.
                            previousTable.key = null;
                            previousTable.entityStatus.isBusy = false;
                            previousTable.updateDate = null;
                            previousTable.createDate = null;
                            this.updateFilter();
                        }
                    }
                }
            }
        });
    }

    close() {
        this.authService.navigateUp();
    }
}
