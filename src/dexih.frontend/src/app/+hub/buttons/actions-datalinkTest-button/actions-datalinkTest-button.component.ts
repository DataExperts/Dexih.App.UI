import { Component, Input, OnDestroy, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { AuthService } from '../../../+auth/auth.service';
import { HubCache } from '../../hub.models';
import { HubService } from '../../hub.service';
import { DexihDatalinkTest, DexihDatalink } from '../../../shared/shared.models';

@Component({
    selector: 'actions-datalinkTest-button',
    templateUrl: './actions-datalinkTest-button.component.html'
})

export class ActionsDatalinkTestButtonComponent implements OnInit, OnDestroy, OnChanges {
    @Input() public datalinkTests: Array<DexihDatalinkTest>;
    @Input() public showEdit = true;
    @Input() public pullRight = false;

    public hubCache: HubCache;

    relatedDatalinks = [];

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

    ngOnChanges() {
        if (this.datalinkTests && this.datalinkTests.length === 1) {
            let datalinkKeys = this.datalinkTests[0].dexihDatalinkTestSteps.map(c => c.datalinkKey);
            this.hubCache.hub.dexihDatalinks.forEach(datalink => {
                if (datalinkKeys.findIndex(c => c === datalink.key) >= 0) {
                    this.relatedDatalinks.push({
                        datalinkKey: datalink.key,
                        name: `${datalink.name} (datalink source)`
                    });
                }
            });
        } else {
            this.relatedDatalinks = [];
        }
    }

    ngOnDestroy() {
        if (this._hubCacheSubscription) { this._hubCacheSubscription.unsubscribe(); }
    }

    navigateToDatalink(datalink: DexihDatalink) {
        this.router.navigate(['datalinks', 'datalink-edit', 'edit', datalink.key], { relativeTo: this.route.parent.parent });
    }

    delete() {
        this.hubService.deleteDatalinkTests(this.datalinkTests);
    }

    run() {
        this.hubService.runDatalinkTests(this.datalinkTests.map(c => c.key)).catch();
    }

    snapshot() {
        this.hubService.runDatalinkTestSnapshot(this.datalinkTests).catch();
    }

    cancel() {
        this.hubService.cancelDatalinks(this.datalinkTests.map(c => c.key)).catch();
    }

    export() {
        const cache = this.hubCache;
        const hub = this.hubService.createHub(this.hubCache.hub.hubKey, '');
        this.datalinkTests.forEach(datalinkTest => { this.hubCache.cacheAddDatalink(datalinkTest.key, hub); });

        let filename = this.datalinkTests.length === 1 ? 'DatalinkTest - ' + this.datalinkTests[0].name + '.json' : 'datalinkTests.json';

        this.hubService.exportHub(hub, filename);
    }
}
