import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { HubService } from '../../hub.service';
import { DexihHub, DexihColumnValidation, HubCache, eSharedObjectType, eCacheStatus } from '../../hub.models';
import { AuthService } from '../../../+auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription, Observable, BehaviorSubject, combineLatest} from 'rxjs';

@Component({
  selector: 'columnValidations',
  templateUrl: './columnValidation-index.component.html',
  styles: []
})
export class ColumnValidationIndexComponent implements OnInit, OnDestroy {
    @Input() public hubKey: number;

  private _subscription: Subscription;
  private _hubCacheChangeSubscription: Subscription;

    hubCache: HubCache;

    validations: Array<DexihColumnValidation>;

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
                this.updateValidations();
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

    deleteValidations(validations: Array<DexihColumnValidation>) {
        this.hubService.deleteColumnValidations(validations);
    }

    updateValidations() {
        if (this.hubCache && this.hubCache.isLoaded()) {
            let validations: Array<DexihColumnValidation>;
            validations = this.hubCache.hub.dexihColumnValidations.filter(c => c.isValid);
            this._tableData.next(validations);
        } else {
            this._tableData.next(null);
        }
    }

    edit(validation: DexihColumnValidation) {
        this.router.navigate(['columnValidation-edit', validation.key], { relativeTo: this.route});
    }

    export(items: Array<DexihColumnValidation>) {
        const cache = this.hubCache;
        const hub = new DexihHub(this.hubCache.hub.hubKey, '');
        items.forEach(item => { this.hubCache.cacheAddColumnValidation(item.key, hub); });

        let filename = items.length === 1 ? 'ColumnValidation - ' + items[0].name + '.json' : 'columnValidations.json';

        this.hubService.exportHub(hub, filename);
    }

    watchChanges() {
      // watch the current validation in case it is changed in another session.
      this._hubCacheChangeSubscription = this.hubService.getHubCacheChangeObservable().subscribe(hubCacheChange => {
          if (hubCacheChange.changeClass === eSharedObjectType.ColumnValidation) {
            this.updateValidations();
          }
      });
  }
}
