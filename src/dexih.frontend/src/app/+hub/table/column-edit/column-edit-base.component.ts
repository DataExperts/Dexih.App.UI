import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HubFormsService } from '../../hub.forms.service';
import { HubCache, deltaTypes, securityFlags} from '../../hub.models';
import { Subscription, combineLatest} from 'rxjs';
import { HubService } from '../../hub.service';
import { TypeCodes } from '../../hub.remote.models';

@Component({
    selector: 'column-edit-base',
    templateUrl: './column-edit-base.component.html',
})
export class ColumnEditBaseComponent implements OnInit, OnDestroy {
    @Input() columnFormService: HubFormsService;
    @Input() detailedView = true;

    private _hubCacheSubscription: Subscription;

    hubCache: HubCache;

    typeCodes = TypeCodes;
    deltaTypes = deltaTypes;
    securityFlags = securityFlags;

    constructor(private hubService: HubService) { }

    ngOnInit() {
        this._hubCacheSubscription = this.hubService.getHubCacheObservable().subscribe(cache => {
            this.hubCache = cache;
        });
    }

    ngOnDestroy() {
        if (this._hubCacheSubscription) { this._hubCacheSubscription.unsubscribe(); }
    }
}
