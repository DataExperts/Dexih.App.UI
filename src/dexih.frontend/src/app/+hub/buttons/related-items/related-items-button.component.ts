import { Component, Input, OnDestroy, OnInit, OnChanges } from '@angular/core';
import { Subscription ,  combineLatest} from 'rxjs';

import {HubCache } from '../../hub.models';
import { HubService } from '../../hub.service';
import { ConnectionReference, eConnectionCategory, eSharedObjectType, DexihHub } from '../../../shared/shared.models';


@Component({
    selector: 'related-items-button',
    templateUrl: './related-items-button.component.html'
})

export class RelatedItemsButtonComponent implements OnInit, OnDestroy, OnChanges {
    @Input() public objectType: eSharedObjectType
    @Input() public key: number;
    @Input() public pullRight = false;

    private _subscription: Subscription;

    public hubCache: HubCache;
    public hubPath: string;

    public related: DexihHub;

    constructor(
        private hubService: HubService) { }

    ngOnInit() {
        this._subscription = combineLatest(
            this.hubService.getHubCacheObservable(),
        ).subscribe(async result => {
            this.hubCache = result[0];

            if (!this.hubCache.isLoaded()) {
                return;
            }

            this.hubPath = this.hubCache.getHubUrl();

            this.related = new DexihHub();
            this.hubCache.cacheAddObjectFromKey(this.objectType, this.key, this.related)

        });
    }

    ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
    }

    ngOnChanges() {

    }


}
