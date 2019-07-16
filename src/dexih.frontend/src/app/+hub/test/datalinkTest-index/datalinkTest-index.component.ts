import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { HubService } from '../../hub.service';
import { DexihHubVariable, HubCache, eSharedObjectType, DexihHub, eCacheStatus, DexihDatalinkTest } from '../../hub.models';
import { AuthService } from '../../../+auth/auth.service';
import { Observable, Subscription, BehaviorSubject, combineLatest} from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'datalink-test',
  templateUrl: './datalinkTest-index.component.html',
  styles: []
})
export class DatalinkTestIndexComponent implements OnInit, OnDestroy {
  private _subscription: Subscription;
  private _hubCacheChangeSubscription: Subscription;

    hubCache: HubCache;

    datalinkTests: Array<DexihDatalinkTest>;

    columns = [
        { name: 'name', title: 'Name', format: ''},
        { name: 'description', title: 'Description', format: ''},
        { name: 'updateDate', title: 'Last Updated', format: 'Date'},
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
        try {
        // watch for any changes in the validations.
        this.watchChanges();

        this._subscription = combineLatest(
            this.hubService.getHubCacheObservable()
        ).subscribe(result => {
          this.hubCache = result[0];
          this.update();
        });
    } catch (e) {
        this.hubService.addHubClientErrorMessage(e, 'Datalink Tests Index');
      }
    }

    ngOnDestroy() {
        if (this._hubCacheChangeSubscription) { this._hubCacheChangeSubscription.unsubscribe(); }
        if (this._subscription) { this._subscription.unsubscribe(); }
    }

    close() {
        this.authService.navigateUp();
    }

    delete(items: Array<DexihDatalinkTest>) {
        this.hubService.deleteDatalinkTests(items);
    }

    snapshot(items: Array<DexihDatalinkTest>) {
        this.hubService.runDatalinkTestSnapshot(items);
    }

    run(items: Array<DexihDatalinkTest>) {
        let keys = items.map(c => c.key);
        this.hubService.runDatalinkTests(keys);
    }

    update() {
        if (this.hubCache && this.hubCache.isLoaded()) {
            let items: Array<DexihDatalinkTest>;
            items = this.hubCache.hub.dexihDatalinkTests.filter(c => c.isValid);
            this._tableData.next(items);
        } else {
            this._tableData.next(null);
        }
    }

    edit(item: DexihDatalinkTest) {
        this.router.navigate(['datalinkTest-edit', item.key], { relativeTo: this.route});
    }

    export(tests: Array<DexihDatalinkTest>) {
        const cache = this.hubCache;
        const hub = new DexihHub(this.hubCache.hub.hubKey, '');
        hub.dexihDatalinkTests = tests;
        let filename = 'datalink_tests.json';

        this.hubService.exportHub(hub, filename);
    }


    watchChanges() {
      // watch the current validation in case it is changed in another session.
      this._hubCacheChangeSubscription = this.hubService.getHubCacheChangeObservable().subscribe(hubCacheChange => {
          if (hubCacheChange.changeClass === eSharedObjectType.DatalinkTest) {
            this.update();
          }
      });
  }
}
