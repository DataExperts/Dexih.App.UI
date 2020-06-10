import { Component, OnInit, Input, OnChanges, SimpleChanges, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { HubFormsService } from '../../hub.forms.service';
import { DexihConnection, DexihListOfValues, InputParameterBase, ListOfValuesItem, eLOVObjectType } from '../../../shared/shared.models';
import { HubService } from '../../hub.service';
import { Subscription, merge, Subject, Observable } from 'rxjs';
import { CancelToken } from '../../../+auth/auth.models';
import { ILogger } from '@microsoft/signalr';
import { eLogLevel, LogFactory } from '../../../../logging';

@Component({
    selector: 'input-parameters',
    templateUrl: 'input-parameters.component.html'
})

export class InputParametersComponent implements OnInit, OnChanges, OnDestroy {
    @Input() formsService: HubFormsService
    @Input() parameters: FormArray
    @Input() showEdit = false;
    @Input() parentParameters: InputParameterBase[];
    @Input() refreshEvent: Observable<void>;
    @Input() allowAddRemove = true;

    @Output() onChange = new EventEmitter();
    @Output() onRefreshData = new EventEmitter();

    private _hubSubscription: Subscription;
    private _refreshSubscription: Subscription;

    public parentParams: string[] = [];
    public listOfValues: Array<DexihListOfValues>;

    public cancelToken: CancelToken = new CancelToken();

    public showRefresh = false;
    public isRefreshing = false;

    public requiresRefresh = false;

    constructor(private hubService: HubService) { }

    ngOnInit() {
        this._hubSubscription = this.hubService.getHubCacheObservable(true).subscribe(cache => {
            this.listOfValues = cache.hub.dexihListOfValues;

            this.parameters.controls.forEach((parameterForm: FormGroup) => {
                let parameter = <InputParameterBase>parameterForm.value;
                if (parameter.listOfValuesKey > 0) {
                    let lov = this.listOfValues.find(c => c.key === parameter.listOfValuesKey && c.isValid);
                    if (lov && lov.sourceType === eLOVObjectType.Static) {
                        this.refreshLOV(parameterForm);
                    }
                }
            });
        });

        if (this.refreshEvent) {
            this._refreshSubscription = this.refreshEvent.subscribe(() => {
                this.requiresRefresh = false;
            });
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (this.parentParameters) {
            this.parentParams = this.parentParameters.map(c => '{' + c.name + '}');
        }
    }

    ngOnDestroy() {
        if (this._hubSubscription) { this._hubSubscription.unsubscribe(); }
        if (this._refreshSubscription) { this._refreshSubscription.unsubscribe(); }
    }

    add(index) {
        let parameter = new InputParameterBase();
        let parameterForm = this.formsService.parameter(parameter);
        this.parameters.insert(index + 1, parameterForm);
    }

    delete(index) {
        this.parameters.removeAt(index);
    }

    refreshLOV(parameterForm: FormGroup) {
        let parameter = <InputParameterBase>parameterForm.value;
        if (!parameter.listOfValuesKey) { return; }

        let runTime = parameterForm.controls.runTime.value;
        runTime.isRefreshing = true;
        this.hubService.previewListOfValuesKey(parameter.listOfValuesKey, false, this.cancelToken).then(result => {
            // runTime.items = result;
            // runTime.showRefresh = false;

            // update any other parameters with same list of values.
            for (let p of this.parameters.controls
                .filter( (c: FormGroup) => c.controls.listOfValuesKey.value === parameter.listOfValuesKey)) {
                runTime = (<FormGroup>p).controls.runTime.value;
                runTime.items = result;
                runTime.showRefresh = false;
            }
        }).finally(() => {
            runTime.isRefreshing = false;
        });
    }

    refreshData() {
        this.onRefreshData.emit();
    }

    textValueChange(parameterForm: FormGroup, $event) {
        parameterForm.controls.value.setValue($event);
        parameterForm.controls.valueDesc.setValue($event);
    }

    change(parameterForm: FormGroup, $event) {
        this.requiresRefresh = true;
        if (parameterForm.controls.listOfValuesKey.value > 0) {
            parameterForm.controls.valueDesc.setValue($event);
            this.onChange.emit();
        }
    }
}
