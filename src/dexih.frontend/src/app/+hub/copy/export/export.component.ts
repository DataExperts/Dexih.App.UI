import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { HubService } from '../../hub.service';
import { DexihHub, HubCache, eSharedObjectType, DexihView, DexihApi, eSourceType, sharedObjectProperties,
    SharedObject } from '../../hub.models';
import { AuthService } from '../../../+auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription, Observable, BehaviorSubject, combineLatest} from 'rxjs';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { share } from 'rxjs/operators';

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

    views: Array<DexihApi>;

    columns = [
        { name: 'label', title: 'Item Type'},
        { name: 'name', title: 'Name', footer: 'description', format: 'Md' },
        { name: 'updateDate', title: 'Last Updated', format: 'Date' },
    ];

    public data: Array<SharedObject>;

    constructor(
        private hubService: HubService,
        private authService: AuthService,
        private router: Router,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        try {
            this._subscription = combineLatest(
                this.hubService.getHubCacheObservable(),
            ).subscribe(result => {
                this.hubCache = result[0];

                if (!this.hubCache.isLoaded()) { return; }

                let hub = this.hubCache.hub;

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
        const cache = this.hubCache;
        const hub = new DexihHub(this.hubCache.hub.hubKey, '');
        items.forEach(item => {
            this.hubCache.cacheAddObject(item.type, item.item, hub);
        });

        let filename = items.length === 1 ? `${items[0].label}-${items[0].type}.json` : `hub-${hub.name}.json`;

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
