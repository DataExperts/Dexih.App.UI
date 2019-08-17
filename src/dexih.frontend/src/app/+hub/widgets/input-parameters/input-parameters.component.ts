import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { FormArray } from '@angular/forms';
import { HubFormsService } from '../../hub.forms.service';
import { DexihInputParameter } from '../../hub.models';

@Component({
    selector: 'input-parameters',
    templateUrl: 'input-parameters.component.html'
})

export class InputParametersComponent implements OnInit, OnChanges {
    @Input() formsService: HubFormsService
    @Input() parameters: FormArray
    @Input() showEdit = false;
    @Input() parentParameters: DexihInputParameter[];

    public selectItems: string[] = [];

    constructor() { }

    ngOnInit() { }

    ngOnChanges(changes: SimpleChanges): void {
        if (this.parentParameters) {
            this.selectItems = this.parentParameters.map(c => '{' + c.name + '}');
        }
    }

    add(index) {
        let parameter = new DexihInputParameter();
        let parameterForm = this.formsService.parameter(parameter);
        this.parameters.insert(index + 1, parameterForm);
    }

    delete(index) {
        this.parameters.removeAt(index);
    }
}
