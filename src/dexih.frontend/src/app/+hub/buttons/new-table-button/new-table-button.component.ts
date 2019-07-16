import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { HubService } from '../../hub.service';
import { DexihConnection, eCacheStatus } from '../../hub.models';
import { Subscription, combineLatest} from 'rxjs';

@Component({
    selector: 'new-table-button',
    templateUrl: './new-table-button.component.html'
})

export class NewTableButtonComponent implements OnInit, OnDestroy {
    @Input() pullRight = true;

    private _hubCacheSubscription: Subscription;

    connections: Array<DexihConnection>;

    constructor(private hubService: HubService) { }

    ngOnInit() {
        this._hubCacheSubscription = this.hubService.getHubCacheObservable().subscribe(cache => {
            if (cache.isLoaded()) {
                this.connections = cache.hub.dexihConnections;
            }
        });
    }

    ngOnDestroy() {
        if (this._hubCacheSubscription) { this._hubCacheSubscription.unsubscribe(); }
      }
}
