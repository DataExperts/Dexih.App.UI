import { Component, Input, Output, ViewChild, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HubService } from '../../../hub.service';
import { Subscription, combineLatest} from 'rxjs';
import { TypeFunctions, TypeCodes, eBasicType } from '../../../hub.remote.models';
import { DexihTableColumn, DexihDatalinkColumn, eTypeCode } from '../../../../shared/shared.models';

@Component({

    selector: 'output-parameter',
    templateUrl: './output-parameter.component.html'
})
export class OutputParameterComponent implements OnInit, OnDestroy {

    @Input() public allowDataTypeSelect = false;
    @Input() public allowNameSelect = false;
    @Input() public allowAdd = false;
    @Input() public allowRemove = false;
    @Input() public outputParameterForm: FormGroup = null;
    @Input() public outputColumns: Array<DexihTableColumn> = null;
    @Input() public updateParameterName = false;
    @Input() public rank = 0;

    @Output() public addParameter: EventEmitter<any> = new EventEmitter<any>();
    @Output() public removeParameter: EventEmitter<any> = new EventEmitter<any>();
    @Output() public hasChanged: EventEmitter<any> = new EventEmitter<any>();

    private _datalinkColumnSubscription: Subscription;
    private _parameterSubscription: Subscription;

    newColumn: DexihDatalinkColumn;
    tmpColumnKey: number;

    type: TypeFunctions;
    eBasicType = eBasicType;
    eTypeCode = eTypeCode;

    typeCodes = TypeCodes;

    ignoreChanges = false;

    constructor(public hubService: HubService) {
    }

    ngOnInit() {
        this.updateItems();

        if (this.updateParameterName) {
            this._datalinkColumnSubscription = this.outputParameterForm.controls.datalinkColumn.valueChanges.subscribe(value => {
                this.outputParameterForm.controls.dataType.setValue(value.dataType);
                this.outputParameterForm.controls.name.setValue(value.name);
            });

        }
        this._parameterSubscription = this.outputParameterForm.valueChanges.subscribe(param => {
            this.updateItems();
        });
}

    ngOnDestroy() {
        if (this._datalinkColumnSubscription) { this._datalinkColumnSubscription.unsubscribe(); }
        if (this._parameterSubscription) { this._parameterSubscription.unsubscribe(); }
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

    updateNewColumn(value: string) {
        if (value) {
            if (!this.newColumn) {
                this.newColumn = new DexihDatalinkColumn();
                this.newColumn.key = this.hubService.getHubCache().getNextSequence();
                this.newColumn.position = 1000 - this.newColumn.key;
            }

            this.newColumn.dataType = this.outputParameterForm.controls.dataType.value;
            this.newColumn.allowDbNull = true;
            this.newColumn.name = value;
            this.newColumn.logicalName = value;
            this.newColumn.rank = this.rank;
            this.newColumn.columnGroup = 'mappings';

            this.outputParameterForm.controls.datalinkColumn.setValue(this.newColumn);

            this.updateItems();
        }
    }
}
