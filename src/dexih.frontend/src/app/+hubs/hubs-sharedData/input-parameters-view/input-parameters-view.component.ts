import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { DexihListOfValues, InputParameterBase, eDataObjectType } from '../../../shared/shared.models';
import { Subscription } from 'rxjs';
import { CancelToken } from '../../../+auth/auth.models';
import { HubsService } from '../../hubs.service';
import { LOVItem } from '../../../+hub/hub.models';
import { logging } from 'selenium-webdriver';

@Component({
    selector: 'input-parameters-view',
    templateUrl: 'input-parameters-view.component.html'
})

export class InputParametersViewComponent implements OnInit, OnDestroy {
    @Input() hubKey: number;
    @Input() objectType: eDataObjectType;
    @Input() objectKey: number;
    @Input() parameters: InputParameterBase[];

    @Output() onChange = new EventEmitter();

    private _hubSubscription: Subscription;

    public parentParams: string[] = [];
    public values: LOVItem[] = [];
    public listOfValues: Array<DexihListOfValues>;

    public cancelToken: CancelToken = new CancelToken();

    public userParameters: InputParameterBase[];

    constructor(private hubsService: HubsService) { }

    ngOnInit() {
        this.userParameters = [];
        this.parameters.filter(c => c.isValid && c.allowUserSelect).forEach((parameter: InputParameterBase) => {
            parameter['runTime'] = [];
            this.userParameters.push(parameter);
        });
    }

    ngOnDestroy() {
        if (this._hubSubscription) { this._hubSubscription.unsubscribe(); }
    }

    refresh(parameter: InputParameterBase) {
        if (!parameter.listOfValuesKey) { return; }
        this.hubsService.previewListOfValues(this.hubKey, this.objectKey, this.objectType,
            parameter.name, this.cancelToken).then(result => {
            parameter['runTime'] = result;
        });
    }

    change() {
        this.onChange.emit();
    }
}
