import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HubFormsService } from '../../hub.forms.service';
import { HubCache, deltaTypes, securityFlags} from '../../hub.models';
import { Subscription, combineLatest} from 'rxjs';
import { HubService } from '../../hub.service';
import { TypeCodes, TypeFunctions } from '../../hub.remote.models';

@Component({
    selector: 'column-edit-base',
    templateUrl: './column-edit-base.component.html',
})
export class ColumnEditBaseComponent implements OnInit, OnDestroy {
    @Input() columnFormService: HubFormsService;
    @Input() detailedView = true;

    private _hubCacheSubscription: Subscription;
    private _dataTypeSubscription: Subscription;

    hubCache: HubCache;

    typeCodes = TypeCodes;
    deltaTypes = deltaTypes;
    securityFlags = securityFlags;

    formatItems = [];

    constructor(private hubService: HubService) { }

    ngOnInit() {
        this._hubCacheSubscription = this.hubService.getHubCacheObservable().subscribe(cache => {
            this.hubCache = cache;

            if (this.columnFormService.currentForm) {
                if(this._dataTypeSubscription) {this._dataTypeSubscription.unsubscribe();}
                this._dataTypeSubscription = this.columnFormService.currentForm.controls.dataType.valueChanges.subscribe(dataType => {
                    this.updateColumnFormats(dataType);
                });

                this.updateColumnFormats(this.columnFormService.currentForm.controls.dataType.value);
            }
        });
    }

    private updateColumnFormats(dataType) {
        const type = new TypeFunctions(dataType, null, null, null);
        this.formatItems = type.getColumnFormats();

        const format = this.columnFormService.currentForm.controls.format.value;
        if (format && this.formatItems.findIndex(c => c.value === format) < 0) {
            this.formatItems = this.formatItems.concat({value: format, name: format})
        }
    }

    ngOnDestroy() {
        if(this._dataTypeSubscription) {this._dataTypeSubscription.unsubscribe();}
        if (this._hubCacheSubscription) { this._hubCacheSubscription.unsubscribe(); }
    }
}
