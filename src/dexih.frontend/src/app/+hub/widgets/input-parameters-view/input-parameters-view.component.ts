import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { LOVItem } from '../../hub.models';
import { DexihListOfValues, InputParameterBase } from '../../../shared/shared.models';
import { HubService } from '../../hub.service';
import { Subscription } from 'rxjs';
import { CancelToken } from '../../../+auth/auth.models';

@Component({
    selector: 'input-parameters-view',
    templateUrl: 'input-parameters-view.component.html'
})

export class InputParametersViewComponent implements OnInit, OnDestroy {
    @Input() parameters: InputParameterBase[]

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

            this.parameters.forEach((parameter: InputParameterBase) => {
                if (!parameter['runTime']) {
                    parameter['runTime'] = [{key: -9999999, name: 'refreshing...'}];
                }
            });

        });
    }

    ngOnDestroy() {
        if (this._hubSubscription) { this._hubSubscription.unsubscribe(); }
    }

    refresh(parameter: InputParameterBase) {
        if (!parameter.listOfValuesKey) { return; }
        if (parameter['runTime'][0].key === -9999999) {
            this.hubService.previewListOfValuesKey(parameter.listOfValuesKey, this.cancelToken).then(result => {
                parameter['runTime'] = result;
            });
        }
    }

    change() {
        this.onChange.emit();
    }
}
