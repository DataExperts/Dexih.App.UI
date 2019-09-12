import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { HubService } from '../../hub.service';
import { AuthService } from '../../../+auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription, Observable, BehaviorSubject, combineLatest} from 'rxjs';
import { HubCache } from '../../hub.models';
import { DexihDatajob, eSharedObjectType } from '../../../shared/shared.models';

@Component({
    selector: 'datajobs',
    templateUrl: './datajob-index.component.html',
    styles: []
})
export class DatajobIndexComponent implements OnInit, OnDestroy {
    @Input() public hubKey: number;

    private _subscription: Subscription;
    private _hubCacheChangeSubscription: Subscription;

    hubCache: HubCache;

    datajobs: Array<DexihDatajob>;

    columns = [
        { name: 'name', title: 'Name', footer: 'description', format: 'Md' },
        { name: 'updateDate', title: 'Last Updated', format: 'DateTime' },
    ];

    private _tableData = new BehaviorSubject<Array<any>>(null);
    tableData: Observable<Array<any>> = this._tableData.asObservable();

    constructor(
        private hubService: HubService,
        private authService: AuthService,
        private router: Router,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        // watch for any changes in the datajobs.
        this.watchChanges();

        try {
            this._subscription = combineLatest(
                this.route.data,
                this.route.params,
                this.hubService.getHubCacheObservable(),
            ).subscribe(result => {
                let data = result[0];
                let params = result[1];
                this.hubCache = result[2];

                this.updateDatajobs();
            });
        } catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Datajob Index');
        }

    }

    ngOnDestroy() {
        if (this._hubCacheChangeSubscription) { this._hubCacheChangeSubscription.unsubscribe(); }
        if (this._subscription) { this._subscription.unsubscribe(); }
    }

    close() {
        this.authService.navigateUp();
    }

    // deleteDatajob(datajob: DexihDatajob) {
    //     this.hubService.deleteDatajobs([datajob]).catch(reason => {
    //     });
    // }

    // deleteDatajobs(datajobs: Array<DexihDatajob>) {
    //     this.hubService.deleteDatajobs(datajobs);
    // }

    updateDatajobs() {
        if (this.hubCache && this.hubCache.isLoaded()) {
            this._tableData.next(this.hubCache.hub.dexihDatajobs);
        } else {
            this._tableData.next(null);
        }
    }

    // runDatajobs(datajobs, truncateTarget, resetIncremental) {
    //     this.hubService.runDatajobs(datajobs, truncateTarget, resetIncremental, null);
    // }

    // activateDatajobs(datajobs) {
    //     this.hubService.activateDatajobs(datajobs);
    // }

    // cancelDatajobs(datajobs: Array<DexihDatajob>) {
    //     this.hubService.deactivateDatajobs(datajobs.map(c => c.key));
    // }

    editDatajob(datajob: DexihDatajob) {
        this.router.navigate(['datajob-edit', datajob.key], { relativeTo: this.route });
    }

    // exportDatajobs(datajobs: Array<DexihDatajob>) {
    //     const cache = this.hubCache;
    //     const hub = new DexihHub(this.hubCache.hub.hubKey, '');
    //     datajobs.forEach(datajob => { this.hubCache.cacheAddDatajob(datajob.key, hub); });

    //     let filename = datajobs.length === 1 ? 'Datajob - ' + datajobs[0].name + '.json' : 'datajobs.json';

    //     this.hubService.exportHub(hub, filename);
    // }

    watchChanges() {
        // watch the current datajob in case it is changed in another session.
        this._hubCacheChangeSubscription = this.hubService.getHubCacheChangeObservable().subscribe(hubCacheChange => {
            if (hubCacheChange.changeClass === eSharedObjectType.Datajob) {
                this.updateDatajobs();
            }
        });
    }
}
