import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HubService } from '../../../hub.service';
import { Subscription, combineLatest} from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Location } from '@angular/common';
import { FormControl, FormGroup, FormArray } from '@angular/forms';
import { HubFormsService } from '../../../hub.forms.service';
import { DexihConnection, DexihTable, eTypeCode, DexihTableColumn, eDeltaType } from '../../../../shared/shared.models';
import { HubCache, ConnectionTables, formatTypes, eCacheStatus } from '../../../hub.models';
import { CancelToken } from '../../../../+auth/auth.models';

@Component({
    selector: 'dexih-table-edit-rest',
    templateUrl: './table-edit-rest.component.html'
})
export class TableEditRestComponent implements OnInit, OnDestroy {
    @Input() public formService: HubFormsService;
    @Input() public connection: DexihConnection;

    private _hubCacheSubscription: Subscription;
    private _currentFormSubscription: Subscription;
    private _restfulUrlSubscription: Subscription;
    private cancelToken: CancelToken = new CancelToken();

    private hubCache: HubCache;

    tables: ConnectionTables[];
    inputColumns: Array<FormGroup>;
    inputTable: DexihTable = null;

    formatTypes = formatTypes;
    eTypeCode = eTypeCode;

    constructor(private hubService: HubService, private route: ActivatedRoute, private router: Router, private location: Location) {
    }

    ngOnInit() {
        // load the initial connection from the cache
        this._hubCacheSubscription = this.hubService.getHubCacheObservable().subscribe(cache => {
            if (cache && cache.status === eCacheStatus.Loaded) {

                this.hubCache = cache;

                this.tables = this.hubCache.getConnectionTables();

            }
        });

        this._currentFormSubscription = this.formService.getCurrentFormObservable().subscribe( currentForm => {
            // load the inputColumns
            const columns = <FormArray>this.formService.currentForm.controls.dexihTableColumns;
            this.inputColumns = <Array<FormGroup>>columns.controls.filter(c => c.value.isInput && c.value.isValid);

            if (this._restfulUrlSubscription) { this._restfulUrlSubscription.unsubscribe(); }
            this._restfulUrlSubscription = currentForm.controls.restfulUri.valueChanges
                .pipe(debounceTime(500))
                .subscribe(newValue => {
                    this.updateInputColumns();
                });
        });

    }

    ngOnDestroy() {
        if (this._hubCacheSubscription) { this._hubCacheSubscription.unsubscribe(); }
        if (this._restfulUrlSubscription) { this._restfulUrlSubscription.unsubscribe(); }
        if (this._currentFormSubscription) { this._currentFormSubscription.unsubscribe(); }
        this.cancelToken.cancel();
    }

    hasChanged($event) {
        // this.tableChanged = true;
    }

    importTable() {
        let importTable = this.formService.currentForm.value;
        let inputColumns = this.formService.currentForm.value.dexihTableColumns.filter(c => c.isInput && c.isValid);

        // merge any input columns with columns already in the table
        if (inputColumns) {
            inputColumns.forEach(column => {
                let importCol = importTable.dexihTableColumns.find(c => c.name === column.name);
                if (importCol) {
                    importCol.inputValue = column.inputValue;
                } else {
                    importCol = column;
                    importTable.dexihTableColumns.push(importCol);
                }
            });
        }

        this.hubService.importTables([importTable], false, this.cancelToken)
            .then(result => {
                const columns = <FormArray>this.formService.currentForm.controls.dexihTableColumns;
                while (columns.controls.length > 0) {
                    columns.removeAt(0);
                }

                result[0].dexihTableColumns.forEach(column => {
                    columns.push(this.formService.tableColumn(result[0].dexihTableColumns, column));
                });
            }).catch();
    }

    updateInputColumns() {
        // use the regex to extract items in uri between { }.  These will be input columns
        const regExp = /\{([^}]+)\}/g;

        const columns = <FormArray>this.formService.currentForm.controls.dexihTableColumns;
        const inputColumns = <Array<FormGroup>>columns.controls.filter(c => c.value.isInput && c.value.isValid);

        inputColumns.forEach(item => {
            const columnForm = <FormGroup>item;
            columnForm.controls.isValid.setValue(false);
        });
        let match;
        let position = -1000;

        while ((match = regExp.exec(this.formService.currentForm.value.restfulUri))) {
            let columnForm = <FormGroup>columns.controls.find(c => c.value.name === match[1] && c.value.isInput);

            if (!columnForm) {
                let col = new DexihTableColumn();

                // add the basic properties
                col.name = match[1];
                col.isInput = true;
                col.logicalName = match[1];
                col.dataType = eTypeCode.String;
                col.deltaType = eDeltaType.NaturalKey;
                col.maxLength = 1024;
                col.position = position++;
                col.description = 'Url Parameter ' + match[1];

                col.allowDbNull = true;
                col.isUnique = false;
                col.isValid = true;

                columnForm = this.formService.tableColumn(columns.value, col);
                columns.push(columnForm);
            } else {
                columnForm.controls.isValid.setValue(true);
            }
        }

        position = 1;
        columns.controls.filter(column => column.value.isValid) .sort((a, b) => a.value.position - b.value.position).forEach(column => {
            (<FormGroup>column).controls.position.setValue(position++);
        });

        this.inputColumns = <Array<FormGroup>>columns.controls.filter(c => c.value.isInput && c.value.isValid);
    }
}
