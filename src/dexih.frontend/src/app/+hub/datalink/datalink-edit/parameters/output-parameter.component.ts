import { Component, Input, Output, OnInit, OnDestroy, EventEmitter, OnChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HubService } from '../../../hub.service';
import { Subscription} from 'rxjs';
import { TypeFunctions, TypeCodes, eBasicType } from '../../../hub.remote.models';
import { DexihTableColumn, DexihDatalinkColumn, eTypeCode, DexihDatalinkTarget, DexihDatalinkTable, DexihTable } from '../../../../shared/shared.models';
import { DatalinkEditService } from '../datalink-edit.service';

@Component({

    selector: 'output-parameter',
    templateUrl: './output-parameter.component.html'
})
export class OutputParameterComponent implements OnInit, OnChanges, OnDestroy {

    @Input() public allowDataTypeSelect = false;
    @Input() public allowNameSelect = false;
    @Input() public allowAdd = false;
    @Input() public allowRemove = false;
    @Input() public outputParameterForm: FormGroup = null;
    @Input() public outputColumns: Array<DexihTableColumn> = null;
    @Input() public datalinkTargets: Array<DexihDatalinkTarget> = null;
    @Input() public updateParameterName = false;
    @Input() public rank = 0;

    @Output() public addParameter: EventEmitter<any> = new EventEmitter<any>();
    @Output() public removeParameter: EventEmitter<any> = new EventEmitter<any>();
    @Output() public hasChanged: EventEmitter<any> = new EventEmitter<any>();

    private _datalinkColumnSubscription: Subscription;
    private _parameterSubscription: Subscription;
    private _dataTypeSubscription: Subscription;

    newColumn: DexihDatalinkColumn;
    newColumnUpdating = false;
    tmpColumnKey: number;

    outputTables: Array<DexihTable>;

    type: TypeFunctions;
    eBasicType = eBasicType;
    eTypeCode = eTypeCode;

    typeCodes = TypeCodes;

    public errors;

    ignoreChanges = false;

    constructor(public hubService: HubService, public editDatalinkService: DatalinkEditService) {
    }

    ngOnInit() {
        this.updateItems();
        this.errors = this.editDatalinkService.hubFormsService.getFormErrorMessages(this.outputParameterForm, true);

        if (this.updateParameterName) {
            this._datalinkColumnSubscription = this.outputParameterForm.controls.datalinkColumn.valueChanges.subscribe(value => {
                this.outputParameterForm.controls.dataType.setValue(value.dataType);
                this.outputParameterForm.controls.name.setValue(value.name);
            });
        }
        this._parameterSubscription = this.outputParameterForm.valueChanges.subscribe(param => {
            this.errors = this.editDatalinkService.hubFormsService.getFormErrorMessages(this.outputParameterForm, true);
            this.updateItems();
        });

        this._dataTypeSubscription = this.outputParameterForm.controls.dataType.valueChanges.subscribe(dataType => {
            if (this.newColumn) {
                this.newColumn.dataType = dataType;
            }
        });
    }

    ngOnChanges() {
        let table = new DexihTable();
        table.name = 'Output Columns';
        table.dexihTableColumns = this.outputColumns;

        this.outputTables = [table];

        if (this.datalinkTargets) {
            this.datalinkTargets.forEach(target => {
                this.outputTables.push(target['table']);
            });
        }
    }

    ngOnDestroy() {
        if (this._datalinkColumnSubscription) { this._datalinkColumnSubscription.unsubscribe(); }
        if (this._parameterSubscription) { this._parameterSubscription.unsubscribe(); }
        if (this._dataTypeSubscription) { this._dataTypeSubscription.unsubscribe(); }
    }

    updateItems() {
        this.type = new TypeFunctions(this.outputParameterForm.value.dataType, null, null, null);
    }

    add() {
        this.addParameter.emit(this.outputParameterForm);
    }

    remove() {
        this.removeParameter.emit(this.outputParameterForm);
    }

    fixDataType() {
        const column = this.outputParameterForm.controls.datalinkColumn.value;
        column.dataType = this.outputParameterForm.controls.dataType.value;
        let format = this.outputParameterForm.controls.runTime?.value?.functionParameter?.defaultFormat;
        if (format) {
            column.format = format;
        }
        this.outputParameterForm.updateValueAndValidity();
        this.errors = this.editDatalinkService.hubFormsService.getFormErrorMessages(this.outputParameterForm, true);
    }

    updateNewColumn(value: {textValue: string, item: any}) {
        if (value.item === null && !this.newColumnUpdating) {
            this.newColumnUpdating = true;
            if (!this.newColumn) {
                this.newColumn = new DexihDatalinkColumn();
                this.newColumn.key = this.hubService.getHubCache().getNextSequence();
                this.newColumn.position = 1000 - this.newColumn.key;
            }

            this.newColumn.dataType = this.outputParameterForm.controls.dataType.value;
            this.newColumn.allowDbNull = true;
            this.newColumn.name = value.textValue;
            this.newColumn.logicalName = value.textValue;
            this.newColumn.rank = this.rank;
            this.newColumn.format = this.outputParameterForm.controls.runTime?.value?.functionParameter?.defaultFormat;
            this.newColumn.columnGroup = 'mapping';

            // emitModelToViewChange stops the event propagating to the control and causing it to revert to null.
            this.outputParameterForm.controls.datalinkColumn.setValue(this.newColumn, { emitModelToViewChange: false });
            this.outputParameterForm.markAsDirty();
            this.newColumnUpdating = false;
            this.updateItems();
        }
    }
}
