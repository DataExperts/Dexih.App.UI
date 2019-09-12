import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { HubCache, sourceTypes, ConnectionTables } from '../../../hub.models';
import { HubService } from '../../../hub.service';
import { Subscription, combineLatest, merge} from 'rxjs';
import { AuthService } from '../../../../+auth/auth.service';
import { FormGroup, FormArray } from '@angular/forms';
import { DatalinkEditService } from '../datalink-edit.service';
import { eSourceType, DexihDatalink, DexihDatalinkTable } from '../../../../shared/shared.models';

@Component({
    selector: 'datalink-table',
    templateUrl: './datalink-table.component.html'
})

export class DatalinkTableComponent implements OnInit, OnDestroy {
    @Input() datalinkTableForm: FormGroup;

    public errors: {};

    private _subscription: Subscription;
    private _datalinkTableSubscription: Subscription;

    private hubCache: HubCache;

    public eSourceType = eSourceType;
    public sourceTypes = sourceTypes;

    public connectionTables: ConnectionTables[] = [];
    public datalinks: DexihDatalink[] = [];

    constructor(
        private hubService: HubService,
        public datalinkEditService: DatalinkEditService) {
        }

    ngOnInit() {
        this.errors = this.datalinkEditService.hubFormsService.getFormErrorMessages(this.datalinkTableForm);

        try {
            this._subscription = combineLatest(
                this.hubService.getHubCacheObservable(),
            ).subscribe(result => {
                this.hubCache = result[0];

                this.subscribeDatalinkChanges();

                if (this.hubCache && this.hubCache.isLoaded() && this.datalinkTableForm) {
                    this.connectionTables = this.hubCache.getConnectionTables();
                    this.datalinks = this.hubCache.hub.dexihDatalinks;
                }
            });

        } catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Selected datalink table');
        }
    }

    subscribeDatalinkChanges() {
        if (this._datalinkTableSubscription) { this._datalinkTableSubscription.unsubscribe(); }
        this._datalinkTableSubscription = merge(
            this.datalinkTableForm.controls.sourceType.valueChanges,
            this.datalinkTableForm.controls.sourceTableKey.valueChanges,
            this.datalinkTableForm.controls.sourceDatalinkKey.valueChanges,
        ).subscribe(() => {
            this.errors = this.datalinkEditService.hubFormsService.getFormErrorMessages(this.datalinkTableForm);
            this.refreshColumns();
        });
    }

    ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
        if (this._datalinkTableSubscription) { this._datalinkTableSubscription.unsubscribe(); }
    }

    refreshColumns() {
        try {
            // temporarily unsubscribe to avoid a recursive loop.
            if (this._datalinkTableSubscription) { this._datalinkTableSubscription.unsubscribe(); }

            let datalinkTable = <DexihDatalinkTable>this.datalinkTableForm.value;
            datalinkTable.sourceType = this.datalinkTableForm.controls.sourceType.value;
            datalinkTable.sourceTableKey = this.datalinkTableForm.controls.sourceTableKey.value;
            datalinkTable.sourceDatalinkKey = this.datalinkTableForm.controls.sourceDatalinkKey.value;

            this.datalinkEditService.reBuildDatalinkTable(datalinkTable);

            this.datalinkEditService.fixMappings(this.datalinkEditService.hubFormsService.currentForm);
            // let columns = datalinkTable.dexihDatalinkColumns;
            // datalinkTable.dexihDatalinkColumns = [];

            this.datalinkTableForm.controls.name.setValue(datalinkTable.name);
            this.datalinkTableForm.controls.rowsEndAt.setValue(datalinkTable.rowsEndAt);
            this.datalinkTableForm.controls.rowsStartAt.setValue(datalinkTable.rowsStartAt);
            this.datalinkTableForm.controls.rowsIncrement.setValue(datalinkTable.rowsIncrement);
            this.datalinkTableForm.controls.sourceType.setValue(datalinkTable.sourceType);

            let tableColumnsForm = <FormArray>this.datalinkTableForm.controls.dexihDatalinkColumns;
            while (tableColumnsForm.length > 0) {
                tableColumnsForm.removeAt(0);
            }

            datalinkTable.dexihDatalinkColumns.filter(c => c.isValid).forEach(column => {
                tableColumnsForm.push(this.datalinkEditService.hubFormsService.datalinkTableColumn(tableColumnsForm.value, column));
            });

            this.subscribeDatalinkChanges();
        } catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Refresh datalink columns');
        }
    }


}
