import { Component, Input, OnDestroy, OnInit, OnChanges } from '@angular/core';
import { Subscription ,  combineLatest} from 'rxjs';

import {HubCache, sharedObjectProperties } from '../../hub.models';
import { HubService } from '../../hub.service';
import { ConnectionReference, eConnectionCategory, eSharedObjectType, DexihHub } from '../../../shared/shared.models';


@Component({
    selector: 'dependent-items-button',
    templateUrl: './dependent-items-button.component.html'
})

export class DependentItemsButtonComponent implements OnInit, OnDestroy, OnChanges {
    @Input() public objectType: eSharedObjectType
    @Input() public key: number;
    @Input() public pullRight = false;

    private _subscription: Subscription;

    public hubCache: HubCache;
    public hubPath: string;

    public dependent: DexihHub;
    public sharedObjectProperties = sharedObjectProperties;

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

            this.dependent = new DexihHub();
            this.hubCache.cacheAddObjectFromKey(this.objectType, this.key, this.dependent)

        });
    }

    ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
    }

    ngOnChanges() {

    }

}
