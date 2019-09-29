import { Component, Input, Output, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Subscription} from 'rxjs';
import { TypeCodes, eBasicType, TypeFunctions } from '../../../hub.remote.models';
import { HubService } from '../../../hub.service';
import { InputOutputColumns } from '../../../hub.lineage.models';
import { DexihDatalinkColumn, DexihTableColumn, DexihFunctionParameter, eTypeCode } from '../../../../shared/shared.models';

export class InputValues {
    public staticValue: string;
    public textItems: string[];
    public name: string;
    public inputParameterSubscription: Subscription;
    public datalinkColumnSubscription: Subscription;
}

@Component({

    selector: 'input-parameter',
    templateUrl: './input-parameter.component.html'
})
export class InputParameterComponent implements OnInit, OnDestroy {

    @Input() public allowDataTypeSelect = false;
    @Input() public allowNameSelect = false;
    @Input() public allowAdd = false;
    @Input() public allowRemove = false;
    @Input() public inputParameterForms: FormGroup[] = [];
    @Input() public inputColumns: Array<DexihDatalinkColumn> = null;
    @Input() public updateParameterName = false;
    @Input() public rank = 0;
    @Input() public nodeDatalinkColumnKey = null;

    @Input() public outputParameterForms: FormGroup[] = null;
    @Input() public outputColumns: Array<DexihTableColumn> = null;
    @Input() public variables = [];

    @Output() public addParameter: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
    @Output() public removeParameter: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

    private type: TypeFunctions;
    eBasicType = eBasicType;
    typeCodes = TypeCodes;
    eTypeCode = eTypeCode;

    public columns: Array<DexihTableColumn>;

    public inputs: InputValues[] = [];

    ignoreChanges = false;

    newColumn: DexihDatalinkColumn;

    constructor(public hubService: HubService) {
    }

    ngOnInit() {
        this.inputs = this.inputParameterForms.map(param => new InputValues());

        let io = new InputOutputColumns();
        if (this.nodeDatalinkColumnKey) {
            this.inputColumns = io.getAvailableColumns(this.inputColumns, this.nodeDatalinkColumnKey, 0);
        }

        if (this.rank > 0 && this.inputColumns) {
            let tables = [];
            this.inputColumns = this.inputColumns.filter(c => c.rank > 0);
        }

        for ( let i = 0; i < this.inputParameterForms.length; i++) {
            let inputParameter: DexihFunctionParameter = this.inputParameterForms[i].value;

            if (inputParameter.datalinkColumn || inputParameter.value === null || inputParameter.value === undefined) {
                this.inputs[i].staticValue = '';
            } else {
                this.inputs[i].staticValue = inputParameter.value;
            }

            this.inputs[i].textItems = [];

            if (inputParameter.dataType === eTypeCode.Boolean) {
                this.inputs[i].textItems = this.inputs[i].textItems.concat(['true', 'false' ]);
                this.inputs[i].staticValue = this.inputs[i].staticValue.toString();
            }

            if (inputParameter['runTime'].functionParameter.listOfValues) {
                this.inputs[i].textItems = this.inputs[i].textItems.concat(inputParameter['runTime'].functionParameter.listOfValues);
            }

            this.inputs[i].textItems = this.inputs[i].textItems.concat(this.variables);
        }

        this.updateItems();

        for ( let i = 0; i < this.inputParameterForms.length; i++) {
            if (!this.inputParameterForms[i].value.runTime.functionParameter
                || !this.inputParameterForms[i].value.runTime.functionParameter.listOfValues) {
                this.inputs[i].inputParameterSubscription = this.inputParameterForms[i].valueChanges.subscribe(() => {
                    if (!this.ignoreChanges) {
                        this.updateItems();
                        this.ignoreChanges = true;
                        if (this.inputParameterForms[i].controls.datalinkColumn.value) {
                            this.inputParameterForms[i].controls.value.setValue(null);
                        } else {
                            this.inputParameterForms[i].controls.value.setValue(this.inputs[i].staticValue);
                        }
                        this.ignoreChanges = false;
                    }
                });
            }

            if (this.updateParameterName) {
                this.inputs[i].datalinkColumnSubscription
                    = this.inputParameterForms[i].controls.datalinkColumn.valueChanges.subscribe(value => {
                    if (value) {
                        this.inputParameterForms[i].controls.dataType.setValue(value.dataType);
                        this.inputParameterForms[i].controls.name.setValue(value.name);
                    } else {
                        this.inputParameterForms[i].controls.dataType.setValue(eTypeCode.String);
                        this.inputParameterForms[i].controls.name.setValue('');
                    }
                });
            }
        }
    }

    updateStatic(event: any, i: number) {
        this.inputParameterForms[i].controls.value.setValue(event);
    }

    ngOnDestroy() {
        if (this.inputs) {
            this.inputs.forEach(input => {
                if (input.datalinkColumnSubscription) { input.datalinkColumnSubscription.unsubscribe(); }
                if (input.inputParameterSubscription) { input.inputParameterSubscription.unsubscribe(); }
            });
        }
    }

    updateItems() {
        for ( let i = 0; i < this.inputParameterForms.length; i++) {
            let inputParameter: DexihFunctionParameter = this.inputParameterForms[i].value;
            this.type = new TypeFunctions(inputParameter.dataType, null, null, null);

            if (!this.allowDataTypeSelect && !this.allowNameSelect) {
                this.inputs[i].name = inputParameter.name + '(' + this.type.dataType + ')' + (this.rank > 0 ? '[]' : '')
            } else {
                this.inputs[i].name = inputParameter.name
            }
        }
    }

    add() {
        this.addParameter.emit(this.inputParameterForms[0]);
    }

    remove() {
        this.removeParameter.emit(this.inputParameterForms[0]);
    }

    updateNewColumn(value: string, i: number) {
        if (value) {
            if (!this.newColumn) {
                this.newColumn = new DexihDatalinkColumn();
                this.newColumn.position = 1000 - this.newColumn.key;
                this.newColumn.key = this.hubService.getHubCache().getNextSequence();
            }

            this.newColumn.dataType = this.outputParameterForms[i].controls.dataType.value;
            this.newColumn.name = value;
            this.newColumn.logicalName = value;

            this.outputParameterForms[i].controls.datalinkColumn.setValue(this.newColumn);

            this.updateItems();
        }
    }

}
