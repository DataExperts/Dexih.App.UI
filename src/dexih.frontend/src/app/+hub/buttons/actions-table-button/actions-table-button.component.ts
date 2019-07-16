import { Component, OnInit, OnChanges, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HubService } from '../../hub.service';
import { HubCache, DexihHub, DexihTable, DexihDatalink, DexihConnection, eDatalinkType, eCacheStatus} from '../../hub.models';
import { Subscription ,  Observable, combineLatest} from 'rxjs';
import { DownloadObject, eObjectType, eDownloadFormat } from '../../hub.query.models';
import { DatalinkColumnEditComponent } from '../../datalink/datalink-edit/datalink-column-edit';
import { ConnectionReference, RemoteLibraries, eConnectionCategory } from '../../hub.remote.models';

@Component({
    selector: 'actions-table-button',
    templateUrl: './actions-table-button.component.html'
})

export class ActionsTableButtonComponent implements OnInit, OnChanges, OnDestroy {
    @Input() public tables: DexihTable[] = [];
    @Input() public refreshTables = false;
    @Input() public showEdit = true;
    @Input() public pullRight = false;

    @Output() public changedTables: EventEmitter<Array<DexihTable>> = new EventEmitter<Array<DexihTable>>();

    private _subscription: Subscription;
    private hubCache: HubCache;
    private remoteLibraries: RemoteLibraries;
    eConnectionCategory = eConnectionCategory;

    public connection: DexihConnection;
    public connectionReference: ConnectionReference;

    datalinksSource: Array<DexihDatalink> = [];
    datalinksTarget: Array<DexihDatalink> = [];

    public hubPath: string;
    public canWrite: boolean;

    constructor(private hubService: HubService,
        private router: Router,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        this._subscription = combineLatest(
            this.hubService.getHubCacheObservable(),
            this.hubService.getRemoteLibrariesObservable()
        ).subscribe(result => {
            this.hubCache = result[0];
            this.remoteLibraries = result[1];

            if (this.hubCache.isLoaded() && this.remoteLibraries) {
                this.hubPath = this.hubCache.getHubUrl();

                this.canWrite = this.hubCache.canWrite;
                if (this.tables && this.tables.length === 1) {
                    this.connection = this.hubCache.getConnection(this.tables[0].connectionKey);
                    if (this.remoteLibraries) {
                        this.connectionReference = this.remoteLibraries.GetConnectionReference(this.connection);
                    }
                }
            }
        });
     }

     ngOnChanges() {
        if (this.tables && this.hubCache) {
            this.datalinksSource = this.hubCache.hub.dexihDatalinks
                .filter(c => this.tables.find(t => t.key === c.sourceDatalinkTable.sourceTableKey));

            this.datalinksTarget = this.hubCache.hub.dexihDatalinks.filter(c => {
                for (let target of c.dexihDatalinkTargets) {
                    if (this.tables.find(t => t.key === target.tableKey)) { return true; }
                }
            });

            if (this.tables.length === 1) {
                if (this.hubCache && this.remoteLibraries) {
                    this.connection = this.hubCache.getConnection(this.tables[0].connectionKey);
                    this.connectionReference = this.remoteLibraries.GetConnectionReference(this.connection);
                }
            }
        }
     }

     ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
     }

     getTables(): DexihTable[] {

        if (!this.refreshTables) {
            return this.tables;
        }

        let tableKeys = this.tables.map(c => c.key);
        let tables = tableKeys.map(c => this.hubCache.getTable(c));
        return tables;
     }

     getTableKeys(): number[] {
        if (!this.refreshTables) {
            return this.tables.map(c => c.key);
        }

        return this.tables.map(c => c.key);
    }

    reImport() {
        this.hubService.reImportTables(this.getTableKeys(), true).then(tables => {
            if (tables) {
                let tableNames = tables.map(c => c.name).join(', ');
                this.hubService.addHubSuccessMessage(`Tables ${tableNames} imported successfully.`);
                this.changedTables.emit(tables);
            }
        }).catch();
    }

    clear() {
        if (this.canWrite) {
            this.hubService.clearTables(this.getTableKeys()).then(tables => {
                if (tables) {
                    let tableNames = this.tables.map(c => c.name).join(', ');
                    this.hubService.addHubSuccessMessage(`Tables ${tableNames} have been truncated.`);
                }
            }).catch();
        }
    }

    rebuild() {
        if (this.canWrite) {
            this.hubService.createTables(this.getTables()).then(tables => {
                if (tables) {
                    let tableNames = this.tables.map(c => c.name).join(', ');
                    this.hubService.addHubSuccessMessage(`Tables ${tableNames} have been dropped & recreated.`);
                }
            });
        }
    }

    delete() {
        this.hubService.deleteTables(this.getTables());
    }

    shareSelectedTables(isShared: boolean) {
        this.hubService.shareTables(this.getTableKeys(), isShared);
    }

    newDatalinks() {
        let tableKeys = this.getTableKeys().join('|');
        this.router.navigate(['/hub', this.hubCache.hub.hubKey, 'tables', 'datalink-new', tableKeys, 0],
            { relativeTo: this.route.root });
        // this.router.navigate(['datalink-new', tableKeys, 0], { relativeTo: this.route.parent });
    }

    datalinkQuery() {
        this.router.navigate(['/hub', this.hubCache.hub.hubKey, 'datalinks', 'datalink-edit', 'sourceTable', this.tables[0].key],
        { relativeTo: this.route.root });
    }

    download() {
        let downloadItems = new Array<DownloadObject>();

        this.getTables().forEach(c => {
            let downloadObject = new DownloadObject();
            downloadObject.objectKey = c.key;
            downloadObject.objectType = eObjectType.Table;
            downloadItems.push(downloadObject);
        });
        this.hubService.downloadData(downloadItems, true, eDownloadFormat.Csv)
    }

    export() {
        const cache = this.hubCache;
        const hub = new DexihHub(this.hubCache.hub.hubKey, '');
        let tables = this.getTables();
        tables.forEach(table => { this.hubCache.cacheAddTable(table.key, hub); });

        let filename = tables.length === 1 ? 'Table - ' + tables[0].name + '.json' : 'tables.json';

        this.hubService.exportHub(hub, filename);
    }
}
