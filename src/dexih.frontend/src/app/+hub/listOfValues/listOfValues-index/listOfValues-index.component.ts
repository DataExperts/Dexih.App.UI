import { Component, OnInit, OnDestroy } from '@angular/core';
import { HubService } from '../../hub.service';
import { HubCache } from '../../hub.models';
import { AuthService } from '../../../+auth/auth.service';
import { Observable, Subscription, BehaviorSubject, combineLatest} from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { DexihListOfValues, eSharedObjectType, eLOVObjectType } from '../../../shared/shared.models';

@Component({
  selector: 'listOfValues',
  templateUrl: './listOfValues-index.component.html',
  styles: []
})
export class ListOfValuesIndexComponent implements OnInit, OnDestroy {
  private _subscription: Subscription;
  private _hubCacheChangeSubscription: Subscription;

    hubCache: HubCache;

    listOfValues: Array<DexihListOfValues>;
    public eSharedObjectType = eSharedObjectType;

    columns = [
        { name: 'name', title: 'Name', format: '', tags: 'tags'},
        { name: 'sourceType', title: 'Source Type', format: 'Enum', enum: eLOVObjectType},
        { name: 'updateDate', title: 'Last Modified', format: 'DateTime'},
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
        this.hubService.addHubClientErrorMessage(e, 'Hub List of Values Index');
      }
    }

    ngOnDestroy() {
        if (this._hubCacheChangeSubscription) { this._hubCacheChangeSubscription.unsubscribe(); }
        if (this._subscription) { this._subscription.unsubscribe(); }
    }

    close() {
        this.authService.navigateUp();
    }

    delete(lov: Array<DexihListOfValues>) {
        this.hubService.deleteListOfValues(lov);
    }

    update() {
        if (this.hubCache && this.hubCache.isLoaded()) {
            let listOfValues = this.hubCache.hub.dexihListOfValues.filter(c => c.isValid).map(c => {
                return {
                    key: c.key,
                    name: c.name,
                    description: c.description,
                    updateDate: c.updateDate,
                    tags: this.hubCache.getObjectTags(eSharedObjectType.ListOfValues, c.key)
                }
            });
            this._tableData.next(listOfValues);
        } else {
            this._tableData.next(null);
        }
    }

    edit(lov: DexihListOfValues) {
        this.router.navigate(['listOfValues-edit', lov.key], { relativeTo: this.route});
    }

    export(lov: Array<DexihListOfValues>) {
        const cache = this.hubCache;
        const hub = this.hubService.createHub(cache.hub.hubKey, '');
        hub.dexihListOfValues = lov;
        lov.forEach(lovItem => {
            cache.getListOfValuesCache(lovItem, hub);
        });
        let filename = 'list_of_values.json';

        this.hubService.exportHub(hub, filename);
    }


    watchChanges() {
      // watch the current validation in case it is changed in another session.
      this._hubCacheChangeSubscription = this.hubService.getHubCacheChangeObservable().subscribe(hubCacheChange => {
          if (hubCacheChange.changeClass === eSharedObjectType.ListOfValues || hubCacheChange.changeClass === eSharedObjectType.TagObjects) {
            this.update();
          }
      });
  }
}
