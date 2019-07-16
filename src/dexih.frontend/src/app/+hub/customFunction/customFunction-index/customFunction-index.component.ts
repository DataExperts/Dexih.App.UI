import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { HubService } from '../../hub.service';
import { DexihHub, HubCache, eSharedObjectType, DexihCustomFunction, eCacheStatus } from '../../hub.models';
import { AuthService } from '../../../+auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription, Observable, BehaviorSubject, combineLatest} from 'rxjs';

@Component({
  selector: 'customFunction',
  templateUrl: './customFunction-index.component.html',
  styles: []
})
export class CustomFunctionIndexComponent implements OnInit, OnDestroy {
    @Input() public hubKey: number;

  private _subscription: Subscription;
  private _hubCacheChangeSubscription: Subscription;

    hubCache: HubCache;

    customFunctions: Array<DexihCustomFunction>;

    columns = [
        { name: 'name', title: 'Name', footer: 'description', format: 'Md' },
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
        // watch for any changes in the validations.
        this.watchChanges();

        try {
            this._subscription = combineLatest(
                this.hubService.getHubCacheObservable(),
            ).subscribe(result => {
                this.hubCache = result[0];
                this.updateCustomFunctions();
            });
        } catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Column Validation Index');
        }
    }

    ngOnDestroy() {
        if (this._hubCacheChangeSubscription) { this._hubCacheChangeSubscription.unsubscribe(); }
        if (this._subscription) { this._subscription.unsubscribe(); }
    }

    close() {
        this.authService.navigateUp();
    }

    deleteCustomFunctions(functions: Array<DexihCustomFunction>) {
        this.hubService.deleteCustomFunctions(functions);
    }

    updateCustomFunctions() {
        if (this.hubCache && this.hubCache.isLoaded()) {
            let functions: Array<DexihCustomFunction>;
            functions = this.hubCache.hub.dexihCustomFunctions.filter(c => c.isValid);
            this._tableData.next(functions);
        } else {
            this._tableData.next(null);
        }
    }

    edit(customFunction: DexihCustomFunction) {
        this.router.navigate(['customFunction-edit', customFunction.key], { relativeTo: this.route});
    }

    export(items: Array<DexihCustomFunction>) {
        const cache = this.hubCache;
        const hub = new DexihHub(this.hubCache.hub.hubKey, '');
        items.forEach(item => { this.hubCache.cacheAddCustomFunction(item.key, hub); });

        let filename = items.length === 1 ? 'CustomFunction - ' + items[0].name + '.json' : 'customFunctions.json';

        this.hubService.exportHub(hub, filename);
    }

    watchChanges() {
      // watch the current validation in case it is changed in another session.
      this._hubCacheChangeSubscription = this.hubService.getHubCacheChangeObservable().subscribe(hubCacheChange => {
          if (hubCacheChange.changeClass === eSharedObjectType.CustomFunction) {
            this.updateCustomFunctions();
          }
      });
  }
}
