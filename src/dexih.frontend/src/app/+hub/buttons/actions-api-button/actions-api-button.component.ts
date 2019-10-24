import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription} from 'rxjs';

import { AuthService } from '../../../+auth/auth.service';
import { HubCache } from '../../hub.models';
import { HubService } from '../../hub.service';
import { DexihApi, DexihHub, eDataObjectType } from '../../../shared/shared.models';
import { CancelToken } from '../../../+auth/auth.models';

@Component({
    selector: 'actions-api-button',
    templateUrl: './actions-api-button.component.html'
})

export class ActionsApiButtonComponent implements OnInit, OnDestroy {
    @Input() public apis: DexihApi[];
    @Input() public pullRight = false;

    public hubCache: HubCache;

    private _hubCacheSubscription: Subscription;

    private cancelToken: CancelToken = new CancelToken();


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
        this.cancelToken.cancel();
    }

    delete() {
        this.hubService.deleteApis(this.apis);
    }

    editApi(api: DexihApi) {
        this.router.navigate(['api-edit', api.key], { relativeTo: this.route });
    }

    export() {
        const cache = this.hubCache;
        const hub = this.hubService.createHub(this.hubCache.hub.hubKey, '');
        this.apis.forEach(item => { this.hubCache.cacheAddApi(item.key, hub); });

        let filename = this.apis.length === 1 ? 'Api - ' + this.apis[0].name + '.json' : 'apis.json';

        this.hubService.exportHub(hub, filename);
    }

    shareItems(isShared: boolean) {
        this.hubService.shareItems(this.apis.map(c => c.key), eDataObjectType.Api, isShared);
    }

    activateApis() {
        this.hubService.activateApis(this.apis, this.cancelToken);
    }

    cancelApis() {
        this.hubService.deactivateApis(this.apis.map(c => c.key), this.cancelToken);
    }
}
