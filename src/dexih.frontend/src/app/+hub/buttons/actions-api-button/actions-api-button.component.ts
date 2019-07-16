import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, combineLatest} from 'rxjs';

import { AuthService } from '../../../+auth/auth.service';
import { DexihApi, HubCache, DexihHub } from '../../hub.models';
import { HubService } from '../../hub.service';

@Component({
    selector: 'actions-api-button',
    templateUrl: './actions-api-button.component.html'
})

export class ActionsApiButtonComponent implements OnInit, OnDestroy {
    @Input() public apis: DexihApi[];
    @Input() public pullRight = false;

    public hubCache: HubCache;

    private _hubCacheSubscription: Subscription;

    constructor(
        private authService: AuthService,
        private hubService: HubService,
                private router: Router,
                private route: ActivatedRoute) { }

    ngOnInit() {
        this._hubCacheSubscription = this.hubService.getHubCacheObservable().subscribe(cache => {
            this.hubCache = cache;
        });
    }

    ngOnDestroy() {
        if (this._hubCacheSubscription) { this._hubCacheSubscription.unsubscribe(); }
        }

    delete() {
        this.hubService.deleteApis(this.apis);
    }

    editApi(api: DexihApi) {
        this.router.navigate(['api-edit', api.key], { relativeTo: this.route });
    }

    export() {
        const cache = this.hubCache;
        const hub = new DexihHub(this.hubCache.hub.hubKey, '');
        this.apis.forEach(item => { this.hubCache.cacheAddApi(item.key, hub); });

        let filename = this.apis.length === 1 ? 'Api - ' + this.apis[0].name + '.json' : 'apis.json';

        this.hubService.exportHub(hub, filename);
    }

    activateApis() {
        this.hubService.activateApis(this.apis);
    }

    cancelApis() {
        this.hubService.deactivateApis(this.apis.map(c => c.key));
    }
}
