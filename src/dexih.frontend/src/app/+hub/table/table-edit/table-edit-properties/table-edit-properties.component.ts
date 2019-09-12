import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HubService } from '../../../hub.service';
import { Subscription, Observable, BehaviorSubject, combineLatest} from 'rxjs';
import { FormGroup, FormArray } from '@angular/forms';
import { HubFormsService } from '../../../hub.forms.service';
import { HubCache, deltaTypes, securityFlags } from '../../../hub.models';
import { RemoteLibraries, eTableType, DexihConnection, ConnectionReference, eConnectionCategory, DexihTableColumn, eConnectionPurpose, DexihTable } from '../../../../shared/shared.models';
import { TypeCodes } from '../../../hub.remote.models';

@Component({

    selector: 'dexih-table-edit-properties',
    templateUrl: './table-edit-properties.component.html',
})
export class TableEditPropertiesComponent implements OnInit, OnDestroy {
    @Input() public formsService: HubFormsService;

    // private connection: DexihConnection;

    private _subscription: Subscription;
    private _connectionSubscription: Subscription;

    public entityType = 'Table';

    public canEdit = false;
    public tableKey: number;

    private hubCache: HubCache;
    private remoteLibraries: RemoteLibraries;
    public action: string; // new or edit
    public pageTitle: string;

    public mainForm: FormGroup;

    typeCodes = TypeCodes;
    deltaTypes = deltaTypes;
    securityFlags = securityFlags;
    eTableType = eTableType;
    tableTypes = Object.keys(eTableType);

    public connections: DexihConnection[];
    public connection: DexihConnection;
    public connectionReference: ConnectionReference;
    eConnectionCategory = eConnectionCategory;

    inputColumns: Array<DexihTableColumn>;

    eConnectionPurpose = eConnectionPurpose;

    public runningSql = false;

    private _columnData = new BehaviorSubject<Array<DexihTableColumn>>(null);
    columnData: Observable<Array<DexihTableColumn>> = this._columnData.asObservable();

    constructor(
        private hubService: HubService,
        private route: ActivatedRoute    ) {
    }

    ngOnInit() {
        try {
            this._subscription = combineLatest(
                this.route.data,
                this.route.params,
                this.hubService.getHubCacheObservable(),
                this.formsService.getCurrentFormObservable(),
            ).subscribe(result => {
                let data = result[0];
                this.hubCache = result[2];
                this.mainForm = result[3];

                this.action = data['action'];
                this.pageTitle = data['pageTitle'];

                if (this.hubCache && this.hubCache.isLoaded() && this.mainForm  && this.remoteLibraries) {
                    this.connections = this.hubCache.hub.dexihConnections;
                    this.connection = this.connections.find(c => c.key === this.mainForm.controls.connectionKey.value);
                    this.connectionReference = this.hubService.GetConnectionReference(this.connection);

                    if (this._connectionSubscription) { this._connectionSubscription.unsubscribe(); }
                    this._connectionSubscription = this.mainForm.controls.connectionKey.valueChanges.subscribe((connectionKey) => {
                        this.connection = this.connections.find(c => c.key === connectionKey);
                        this.connectionReference = this.hubService.GetConnectionReference(this.connection);
                    });
                }

            });
        } catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Table edit properties');
        }
    }

    ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
        if (this._connectionSubscription) { this._connectionSubscription.unsubscribe(); }
    }

    reloadColumns() {
        this.runningSql = true;
        this.hubService.importTables([this.mainForm.value], false).then(tables => {
            const table: DexihTable = tables[0];
            const tableColumnsForm = <FormArray>this.formsService.currentForm.controls.dexihTableColumns;
            while (tableColumnsForm.controls.length > 0) {
                tableColumnsForm.removeAt(0);
            }
            table.dexihTableColumns.filter(c => c.isValid).forEach(column => {
                tableColumnsForm.push(this.formsService.tableColumn(table.dexihTableColumns, column));
            });
            this.runningSql = false;
        }).catch(() => this.runningSql = false);
    }

    test() {
        this.runningSql = true;
        this.hubService.doImport([this.mainForm.value], false).then(tables => {
            let columns = tables[0].dexihTableColumns.map(c => c.name);
            this.hubService.addHubSuccessMessage('The query was successful, and returned the following columns.  ' + columns.join(', '));
            this.runningSql = false;
        }).catch(() => this.runningSql = false);
    }
}
