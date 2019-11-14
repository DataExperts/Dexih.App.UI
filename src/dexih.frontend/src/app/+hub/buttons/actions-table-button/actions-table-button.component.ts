import { Component, OnInit, OnChanges, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HubService } from '../../hub.service';
import { HubCache } from '../../hub.models';
import { Subscription, combineLatest} from 'rxjs';
import { DexihTable, eConnectionCategory, DexihConnection, ConnectionReference, DexihDatalink,
    DownloadObject, eSourceType, eDownloadFormat, DexihHub, eDataObjectType } from '../../../shared/shared.models';
import { CancelToken } from '../../../+auth/auth.models';

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
    private cancelToken: CancelToken = new CancelToken()
    private hubCache: HubCache;
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
        ).subscribe(async result => {
            this.hubCache = result[0];

            if (this.hubCache.isLoaded()) {
                this.hubPath = this.hubCache.getHubUrl();

                this.canWrite = this.hubCache.canWrite;
                if (this.tables && this.tables.length === 1) {
                    this.connection = this.hubCache.getConnection(this.tables[0].connectionKey);
                    this.connectionReference = await this.hubService.GetConnectionReference(this.connection);
                }
            }
        });
     }

     async ngOnChanges() {
        if (this.tables && this.hubCache) {
            this.datalinksSource = this.hubCache.hub.dexihDatalinks
                .filter(c => this.tables.find(t => t.key === c.sourceDatalinkTable.sourceTableKey));

            this.datalinksTarget = this.hubCache.hub.dexihDatalinks.filter(c => {
                for (let target of c.dexihDatalinkTargets) {
                    if (this.tables.find(t => t.key === target.tableKey)) { return true; }
                }
            });

            if (this.tables.length === 1) {
                this.connection = this.hubCache.getConnection(this.tables[0].connectionKey);
                this.connectionReference = await this.hubService.GetConnectionReference(this.connection);
            }
        }
     }

     ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
        this.cancelToken.cancel();
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
        this.hubService.reImportTables(this.getTableKeys(), true, this.cancelToken).then(tables => {
            if (tables) {
                let tableNames = tables.map(c => c.name).join(', ');
                this.hubService.addHubSuccessMessage(`Tables ${tableNames} imported successfully.`);
                this.changedTables.emit(tables);
            }
        }).catch();
    }

    clear() {
        if (this.canWrite) {
            this.hubService.clearTables(this.getTableKeys(), this.cancelToken).then(tables => {
                if (tables) {
                    let tableNames = this.tables.map(c => c.name).join(', ');
                    this.hubService.addHubSuccessMessage(`Tables ${tableNames} have been truncated.`);
                }
            }).catch();
        }
    }

    rebuild() {
        if (this.canWrite) {
            this.hubService.createTables(this.getTables(), this.cancelToken).then(tables => {
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

    dbml() {
        this.hubService.getDbml(this.getTables());
    }

    shareItems(isShared: boolean) {
        this.hubService.shareItems(this.getTableKeys(), eDataObjectType.Table, isShared);
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
            downloadObject.objectType = eDataObjectType.Table;
            downloadItems.push(downloadObject);
        });
        this.hubService.downloadData(downloadItems, true, eDownloadFormat.Csv, this.cancelToken)
    }

    export() {
        const cache = this.hubCache;
        const hub = this.hubService.createHub(this.hubCache.hub.hubKey, '');
        let tables = this.getTables();
        tables.forEach(table => { this.hubCache.cacheAddTable(table.key, hub); });

        let filename = tables.length === 1 ? 'Table - ' + tables[0].name + '.json' : 'tables.json';

        this.hubService.exportHub(hub, filename);
    }
}
