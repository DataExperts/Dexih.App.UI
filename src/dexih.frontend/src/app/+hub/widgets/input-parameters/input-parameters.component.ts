import { Component, OnInit, Input, OnChanges, SimpleChanges, OnDestroy, Output, EventEmitter } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { HubFormsService } from '../../hub.forms.service';
import { DexihInputParameter, LOVItem } from '../../hub.models';
import { DexihConnection, DexihListOfValues, InputParameterBase } from '../../../shared/shared.models';
import { HubService } from '../../hub.service';
import { Subscription, merge, Subject, Observable } from 'rxjs';
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
    @Input() refreshEvent: Observable<void>;

    @Output() onChange = new EventEmitter();
    @Output() onRefreshData = new EventEmitter();

    private _hubSubscription: Subscription;
    private _refreshSubscription: Subscription;

    public parentParams: string[] = [];
    public values: LOVItem[] = [];
    public listOfValues: Array<DexihListOfValues>;

    public cancelToken: CancelToken = new CancelToken();

    public showRefresh = false;
    public isRefreshing = false;

    public requiresRefresh = false;

    constructor(private hubService: HubService) { }

    ngOnInit() {
        this._hubSubscription = this.hubService.getHubCacheObservable(true).subscribe(cache => {
            this.listOfValues = cache.hub.dexihListOfValues;

            // this.parameters.controls.forEach((parameterForm: FormGroup) => {
            //     if (!parameterForm.controls.runTime) {
            //         parameterForm.controls['runTime']
            //             .setValue({showRefresh: parameterForm.controls.listOfValuesKey.value > 0, isRefreshing: false, items: []});
            //     }
            // });

        });

        this._refreshSubscription = this.refreshEvent.subscribe(() => {
            this.requiresRefresh = false;
        });
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
        this.hubService.previewListOfValuesKey(parameter.listOfValuesKey, this.cancelToken).then(result => {
            runTime.items = result;
            runTime.showRefresh = false;
        }).finally(() => {
            runTime.isRefreshing = false;
        });
    }

    refreshData() {
        this.onRefreshData.emit();
    }

    textValueChange(parameterForm: FormGroup, $event) {
        parameterForm.controls.valueDesc.setValue($event);
    }

    change(parameterForm: FormGroup, $event) {
        this.requiresRefresh = true;
        if (parameterForm.controls.listOfValuesKey.value > 0) {
            this.onChange.emit();
        }
    }
}
