import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { HubService } from '../../hub.service';
import { HubCache } from '../../hub.models';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { DexihDatajob, DexihHub } from '../../../shared/shared.models';
import { CancelToken } from '../../../+auth/auth.models';

@Component({
    selector: 'actions-datajob-button',
    templateUrl: './actions-datajob-button.component.html'
})

export class ActionsDatajobButtonComponent implements OnInit, OnDestroy {
    @Input() public datajobs: DexihDatajob[];
    @Input() public showEdit = true;
    @Input() public pullRight = false;

    public hubCache: HubCache;

    private _hubCacheSubscription: Subscription;
    private cancelToken: CancelToken = new CancelToken();


    constructor(private hubService: HubService,
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
        this.hubService.deleteDatajobs(this.datajobs);
    }

    runDatajobs(truncate: boolean, resetIncremental: boolean) {
        this.hubService.runDatajobs(this.datajobs, truncate, resetIncremental, null, null, this.cancelToken);
    }

    runDatajobsOptions() {
        let datajobs = this.datajobs.map(c => c.key);
        let datajobsString = datajobs.join('|');
        this.router.navigate(['datajobs', 'datajob-run', datajobsString], { relativeTo: this.route.parent.parent });
    }

    export() {
        const cache = this.hubCache;
        const hub = this.hubService.createHub(this.hubCache.hub.hubKey, '');
        this.datajobs.forEach(datajob => { this.hubCache.cacheAddDatajob(datajob.key, hub); });

        let filename = this.datajobs.length === 1 ? 'Datajob - ' + this.datajobs[0].name + '.json' : 'datajobs.json';

        this.hubService.exportHub(hub, filename);
    }

    activateDatajobs() {
        this.hubService.activateDatajobs(this.datajobs, null, this.cancelToken);
    }

    cancelDatajobs() {
        this.hubService.deactivateDatajobs(this.datajobs.map(c => c.key), this.cancelToken);
    }

    editDatajob(datajob: DexihDatajob) {
        this.router.navigate(['datajob-edit', datajob.key], { relativeTo: this.route });
    }
}
