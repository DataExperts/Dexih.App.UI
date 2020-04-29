import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { HubService } from '../../hub.service';
import { AuthService } from '../../../+auth/auth.service';
import { Observable, Subscription, BehaviorSubject, combineLatest} from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { HubCache } from '../../hub.models';
import { DexihDatalinkTest, DexihHub, eSharedObjectType } from '../../../shared/shared.models';
import { CancelToken } from '../../../+auth/auth.models';

@Component({
  selector: 'datalink-test',
  templateUrl: './datalinkTest-index.component.html',
  styles: []
})
export class DatalinkTestIndexComponent implements OnInit, OnDestroy {
  private _subscription: Subscription;
  private _hubCacheChangeSubscription: Subscription;

    hubCache: HubCache;
    private cancelToken: CancelToken = new CancelToken();

    datalinkTests: Array<DexihDatalinkTest>;
    public eSharedObjectType = eSharedObjectType;

    columns = [
        { name: 'name', title: 'Name', format: '', tags: 'tags'},
        { name: 'description', title: 'Description', format: ''},
        { name: 'updateDate', title: 'Last Modified', format: 'Calendar'},
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
        this.cancelToken.cancel();
    }

    close() {
        this.authService.navigateUp();
    }

    delete(items: Array<DexihDatalinkTest>) {
        this.hubService.deleteDatalinkTests(items);
    }

    snapshot(items: Array<DexihDatalinkTest>) {
        this.hubService.runDatalinkTestSnapshot(items, this.cancelToken);
    }

    run(items: Array<DexihDatalinkTest>) {
        let keys = items.map(c => c.key);
        this.hubService.runDatalinkTests(keys, this.cancelToken);
    }

    update() {
        if (this.hubCache && this.hubCache.isLoaded()) {
            let items = this.hubCache.hub.dexihDatalinkTests.filter(c => c.isValid).map(c => {
                return {
                    key: c.key,
                    name: c.name,
                    description: c.description,
                    updateDate: c.updateDate,
                    tags: this.hubCache.getObjectTags(eSharedObjectType.DatalinkTest, c.key)
                }
            });
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
        const hub = this.hubService.createHub(this.hubCache.hub.hubKey, '');
        hub.dexihDatalinkTests = tests;
        let filename = 'datalink_tests.json';

        this.hubService.exportHub(hub, filename);
    }


    watchChanges() {
      // watch the current validation in case it is changed in another session.
      this._hubCacheChangeSubscription = this.hubService.getHubCacheChangeObservable().subscribe(hubCacheChange => {
          if (hubCacheChange.changeClass === eSharedObjectType.DatalinkTest ||
            hubCacheChange.changeClass === eSharedObjectType.TagObjects) {
            this.update();
          }
      });
  }
}
