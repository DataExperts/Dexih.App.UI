import { Component, OnInit, Input, OnChanges, SimpleChanges, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { HubFormsService } from '../../hub.forms.service';
import { DexihInputParameter, LOVItem } from '../../hub.models';
import { DexihConnection, DexihListOfValues, InputParameterBase } from '../../../shared/shared.models';
import { HubService } from '../../hub.service';
import { Subscription, merge } from 'rxjs';
import { CancelToken } from '../../../+auth/auth.models';

@Component({
    selector: 'input-parameters',
    templateUrl: 'input-parameters.component.html'
})

export class InputParametersComponent implements OnInit, OnChanges, OnDestroy {
    @Input() formsService: HubFormsService
    @Input() parameters: FormArray
    @Input() showEdit = false;
    @Input() parentParameters: InputParameterBase[];

    @Output() onChange = new EventEmitter();

    private _hubSubscription: Subscription;

    public parentParams: string[] = [];
    public values: LOVItem[] = [];
    public listOfValues: Array<DexihListOfValues>;

    public cancelToken: CancelToken = new CancelToken();

    constructor(private hubService: HubService) { }

    ngOnInit() {
        this._hubSubscription = this.hubService.getHubCacheObservable(true).subscribe(cache => {
            this.listOfValues = cache.hub.dexihListOfValues;

            this.parameters.controls.forEach((parameterForm: FormGroup) => {
                if (!parameterForm.controls.runTime) {
                    parameterForm.controls['runTime'].setValue([]);
                }
            });

        });
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (this.parentParameters) {
            this.parentParams = this.parentParameters.map(c => '{' + c.name + '}');
        }
    }

    ngOnDestroy() {
        if (this._hubSubscription) { this._hubSubscription.unsubscribe(); }
    }

    add(index) {
        let parameter = new InputParameterBase();
        let parameterForm = this.formsService.parameter(parameter);
        this.parameters.insert(index + 1, parameterForm);
    }

    delete(index) {
        this.parameters.removeAt(index);
    }

    refresh(parameterForm: FormGroup) {
        let parameter = <InputParameterBase>parameterForm.value;
        if (!parameter.listOfValuesKey) { return; }
        if (parameter['runTime'][0].key === -9999999) {
            this.hubService.previewListOfValuesKey(parameter.listOfValuesKey, this.cancelToken).then(result => {
                parameterForm.controls['runTime'].setValue(result);
            });
        }
    }

    change($event) {
        this.onChange.emit();
    }
}
