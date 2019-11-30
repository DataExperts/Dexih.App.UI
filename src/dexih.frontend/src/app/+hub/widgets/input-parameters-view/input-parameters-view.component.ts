import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { LOVItem } from '../../hub.models';
import { DexihListOfValues, InputParameterBase } from '../../../shared/shared.models';
import { HubService } from '../../hub.service';
import { Subscription, Observable } from 'rxjs';
import { CancelToken } from '../../../+auth/auth.models';

@Component({
    selector: 'input-parameters-view',
    templateUrl: 'input-parameters-view.component.html'
})

export class InputParametersViewComponent implements OnInit, OnDestroy {
    @Input() parameters: InputParameterBase[];
    @Input() refreshEvent: Observable<void>;

    @Output() onChange = new EventEmitter();
    @Output() onRefreshData = new EventEmitter();

    private _hubSubscription: Subscription;
    private _refreshSubscription: Subscription;

    public parentParams: string[] = [];
    public values: LOVItem[] = [];
    public listOfValues: Array<DexihListOfValues>;

    public userParameters: InputParameterBase[];

    public requiresRefresh = false;

    public cancelToken: CancelToken = new CancelToken();

    constructor(private hubService: HubService) { }

    ngOnInit() {
        this._hubSubscription = this.hubService.getHubCacheObservable(true).subscribe(cache => {
            this.listOfValues = cache.hub.dexihListOfValues;

            this.userParameters = [];

            this.parameters.filter(c => c.isValid && c.allowUserSelect).forEach((parameter: InputParameterBase) => {
                parameter['runTime'] = {showRefresh: parameter.listOfValuesKey > 0, isRefreshing: false, items: []};
                if (parameter.value) {
                    parameter['runTime'].items = [{key: parameter.value, name: parameter.valueDesc}];
                }
                this.userParameters.push(parameter);
            });

        });

        this._refreshSubscription = this.refreshEvent.subscribe(() => {
            this.requiresRefresh = false;
        });
    }

    ngOnDestroy() {
        if (this._hubSubscription) { this._hubSubscription.unsubscribe(); }
        if (this._refreshSubscription) { this._refreshSubscription.unsubscribe(); }
    }

    refreshLOV(parameter: InputParameterBase) {
        if (!parameter.listOfValuesKey) { return; }
        parameter['runTime'].isRefreshing = true;
        this.hubService.previewListOfValuesKey(parameter.listOfValuesKey, this.cancelToken).then(result => {
            parameter['runTime'].items = result;
            parameter['runTime'].showRefresh = false;
        }).finally(() => {
            parameter['runTime'].isRefreshing = false;
        });
    }

    refreshData() {
        this.onRefreshData.emit();
    }

    change(parameter: InputParameterBase, $event) {
        if (parameter.listOfValuesKey > 0) {
            this.onChange.emit();
        } else {
            this.requiresRefresh = true;
        }
    }
}
