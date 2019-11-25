import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { HubFormsService } from '../../hub.forms.service';
import { HubService } from '../../hub.service';
import { Subscription } from 'rxjs';
import { HubCache } from '../../hub.models';

@Component({
    selector: 'save-button',
    templateUrl: './save-button.component.html'
})

export class SaveButtonComponent implements OnInit, OnDestroy {
    @Input() formsService: HubFormsService;

    private _hubCacheSubscription: Subscription;
    public hubCache: HubCache;

    constructor(public hubService: HubService) { }

    ngOnInit() {
        this._hubCacheSubscription = this.hubService.getHubCacheObservable().subscribe(cache => {
            this.hubCache = cache;
        });
    }

    ngOnDestroy() {
        if (this._hubCacheSubscription) { this._hubCacheSubscription.unsubscribe(); }
    }
}
