import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { HubService } from '../../hub.service';
import { HubCache, SharedObject } from '../../hub.models';
import { AuthService } from '../../../+auth/auth.service';
import { Subscription, combineLatest} from 'rxjs';
import { DexihApi, DexihHub } from '../../../shared/shared.models';

@Component({
    selector: 'export',
    templateUrl: './export.component.html',
    styles: []
})
export class ExportComponent implements OnInit, OnDestroy {
    @Input() public hubKey: number;

    private _subscription: Subscription;
    private _hubCacheChangeSubscription: Subscription;

    hubCache: HubCache;

    columns = [
        { name: 'name', title: 'Name', footer: 'description', format: 'Md', tags: 'tags' },
        { name: 'label', title: 'Item Type'},
        { name: 'updateDate', title: 'Last Modified', format: 'DateTime' },
    ];

    public data: Array<SharedObject>;

    constructor(
        private hubService: HubService,
        private authService: AuthService) {
    }

    ngOnInit() {
        try {
            this._subscription = combineLatest(
                this.hubService.getHubCacheObservable(),
            ).subscribe(result => {
                this.hubCache = result[0];

                if (!this.hubCache.isLoaded()) { return; }


                let data: SharedObject[] = this.hubCache.getSharedObjects();
                this.data = data;
            });
        } catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'View Index');
        }
    }

    exportAll() {
        this.export(this.data);
    }

    export(items: Array<SharedObject>) {
        const hub = this.hubService.createHub(this.hubCache.hub.hubKey, '');
        items.forEach(item => {
            this.hubCache.cacheAddObject(item.type, item.item, hub);
        });

        let filename = items.length === 1 ? `${items[0].label}-${items[0].type}.json` : `hub-${this.hubCache.hub.name}.json`;

        this.hubService.exportHub(hub, filename);
    }

    ngOnDestroy() {
        if (this._hubCacheChangeSubscription) { this._hubCacheChangeSubscription.unsubscribe(); }
        if (this._subscription) { this._subscription.unsubscribe(); }
    }

    close() {
        this.authService.navigateUp();
    }
}
