import { Component, OnInit, Input } from '@angular/core';
import { HubService } from '../../hub.service';
import { DexihDatajob, HubCache, DexihHub} from '../../hub.models';
import { Subscription, combineLatest} from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'actions-datajob-button',
    templateUrl: './actions-datajob-button.component.html'
})

export class ActionsDatajobButtonComponent implements OnInit {
    @Input() public datajobs: DexihDatajob[];
    @Input() public showEdit = true;
    @Input() public pullRight = false;

    public hubCache: HubCache;

    private _hubCacheSubscription: Subscription;

    constructor(private hubService: HubService,
        private router: Router,
        private route: ActivatedRoute) { }

    ngOnInit() {
        this._hubCacheSubscription = this.hubService.getHubCacheObservable().subscribe(cache => {
            this.hubCache = cache;
        });
    }

    delete() {
        this.hubService.deleteDatajobs(this.datajobs);
    }

    runDatajobs(truncate: boolean, resetIncremental: boolean) {
        this.hubService.runDatajobs(this.datajobs, truncate, resetIncremental, null, null);
    }

    runDatajobsOptions() {
        let datajobs = this.datajobs.map(c => c.key);
        let datajobsString = datajobs.join('|');
        this.router.navigate(['datajobs', 'datajob-run', datajobsString], { relativeTo: this.route.parent.parent });
    }

    export() {
        const cache = this.hubCache;
        const hub = new DexihHub(this.hubCache.hub.hubKey, '');
        this.datajobs.forEach(datajob => { this.hubCache.cacheAddDatajob(datajob.key, hub); });

        let filename = this.datajobs.length === 1 ? 'Datajob - ' + this.datajobs[0].name + '.json' : 'datajobs.json';

        this.hubService.exportHub(hub, filename);
    }

    activateDatajobs() {
        this.hubService.activateDatajobs(this.datajobs, null);
    }

    cancelDatajobs() {
        this.hubService.deactivateDatajobs(this.datajobs.map(c => c.key));
    }

    editDatajob(datajob: DexihDatajob) {
        this.router.navigate(['datajob-edit', datajob.key], { relativeTo: this.route });
    }
}
