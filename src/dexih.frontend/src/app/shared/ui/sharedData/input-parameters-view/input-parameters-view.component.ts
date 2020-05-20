import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { DexihListOfValues, InputParameterBase, eDataObjectType, ListOfValuesItem } from '../../../shared.models';
import { Subscription, Observable } from 'rxjs';
import { CancelToken } from '../../../../+auth/auth.models';
import { AuthService } from '../../../../+auth/auth.service';

@Component({
    selector: 'input-parameters-view',
    templateUrl: 'input-parameters-view.component.html'
})
export class InputParametersViewComponent implements OnInit, OnDestroy {
    @Input() hubKey: number;
    @Input() objectType: eDataObjectType;
    @Input() objectKey: number;
    @Input() parameters: InputParameterBase[];
    @Input() refreshEvent: Observable<void>;
    @Output() onChange = new EventEmitter();
    @Output() onRefreshData = new EventEmitter();

    private _hubSubscription: Subscription;
    private _refreshSubscription: Subscription;

    public parentParams: string[] = [];
    public values: ListOfValuesItem[] = [];
    public listOfValues: Array<DexihListOfValues>;

    public cancelToken: CancelToken = new CancelToken();

    public userParameters: InputParameterBase[];

    public requiresRefresh = false;

    public showRefresh = false;
    public isRefreshing = false;

    constructor(private authService: AuthService) { }

    ngOnInit() {
        this.userParameters = [];
        this.parameters.filter(c => c.isValid && c.allowUserSelect).forEach((parameter: InputParameterBase) => {
            parameter['runTime'] = {showRefresh: parameter.listOfValuesKey > 0, isRefreshing: false, items: []};
            if (parameter.value) {
                parameter['runTime'].items = [{key: parameter.value, name: parameter.valueDesc}];
            }

            this.userParameters.push(parameter);
        });

        this._refreshSubscription = this.refreshEvent.subscribe(() => {
            this.requiresRefresh = false;
        });
    }

    ngOnDestroy() {
        if (this._hubSubscription) { this._hubSubscription.unsubscribe(); }
        if (this._refreshSubscription) { this._refreshSubscription.unsubscribe(); }
    }

    refresh(parameter: InputParameterBase) {
        if (!parameter.listOfValuesKey) { return; }
        parameter['runTime'].isRefreshing = true;
        this.authService.previewListOfValues(this.hubKey, this.objectKey, this.objectType,
            parameter.name, false, this.cancelToken).then(result => {
            parameter['runTime'].items = result;
            parameter['runTime'].showRefresh = false;
        }).catch(reason => {
            this.authService.addUpdateNotification(reason, false);
        }).finally(() => {
            parameter['runTime'].isRefreshing = false;
        });
    }

    refreshData() {
        this.onRefreshData.emit();
    }

    change(parameter: InputParameterBase) {
        if (parameter.listOfValuesKey > 0) {
            this.onChange.emit();
        } else {
            this.requiresRefresh = true;
        }
    }
}
