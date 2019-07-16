import { Component, Input, Output, ViewChild, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { DexihCustomFunctionParameter } from '../../hub.models';
import { FormGroup } from '@angular/forms';
import { Subscription, combineLatest} from 'rxjs';
import { TypeFunctions, TypeCodes, eBasicType } from '../../hub.remote.models';

@Component({

    selector: 'customFunction-parameter',
    templateUrl: './customFunction-parameter.component.html'
})
export class CustomFunctionParameterComponent implements OnInit, OnDestroy {

    @Input() public customFunctionParameterForm: FormGroup = null;

    @Output() public addParameter: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();
    @Output() public removeParameter: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();


    private type: TypeFunctions;
    eBasicType = eBasicType;
    typeCodes = TypeCodes;

    public staticValue: string;

    ignoreChanges = false;

    constructor() {
    }

    ngOnInit() {
    }

    ngOnDestroy() {
    }

    add() {
        this.addParameter.emit(this.customFunctionParameterForm);
    }

    remove() {
        this.removeParameter.emit(this.customFunctionParameterForm);
    }

}
