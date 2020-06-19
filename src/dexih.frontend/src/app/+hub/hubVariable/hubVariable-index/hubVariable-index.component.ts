import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { HubService } from '../../hub.service';
import { HubCache } from '../../hub.models';
import { AuthService } from '../../../+auth/auth.service';
import { Observable, Subscription, BehaviorSubject, combineLatest} from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { DexihHubVariable, DexihHub, eSharedObjectType } from '../../../shared/shared.models';

@Component({
  selector: 'hubVariable',
  templateUrl: './hubVariable-index.component.html',
  styles: []
})
export class HubVariableIndexComponent implements OnInit, OnDestroy {
  private _subscription: Subscription;
  private _hubCacheChangeSubscription: Subscription;

    hubCache: HubCache;

    hubVariables: Array<DexihHubVariable>;
    public eSharedObjectType = eSharedObjectType;

    columns = [
        { name: 'name', title: 'Name', format: '', tags: 'tags'},
        { name: 'value', title: 'Value', format: ''},
        { name: 'isEncrypted', title: 'Encrypted?', format: 'Boolean'},
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
          this.updateVariables();
        });
    } catch (e) {
        this.hubService.addHubClientErrorMessage(e, 'Hub Variables Index');
      }
    }

    ngOnDestroy() {
        if (this._hubCacheChangeSubscription) { this._hubCacheChangeSubscription.unsubscribe(); }
        if (this._subscription) { this._subscription.unsubscribe(); }
    }

    close() {
        this.authService.navigateUp();
    }

    deleteHubVariables(variables: Array<DexihHubVariable>) {
        this.hubService.deleteHubVariables(variables);
    }

    updateVariables() {
        if (this.hubCache && this.hubCache.isLoaded()) {
            let variables = this.hubCache.hub.dexihHubVariables.filter(c => c.isValid).map(c => {
                return {
                    key: c.key,
                    name: c.name,
                    description: c.description,
                    updateDate: c.updateDate,
                    value: c.isEncrypted ? '(Encrypted)' : c.value,
                    isEncrypted: c.isEncrypted,
                    tags: this.hubCache.getObjectTags(eSharedObjectType.HubVariable, c.key)
                }
            });
            this._tableData.next(variables);
        } else {
            this._tableData.next(null);
        }
    }

    edit(variable: DexihHubVariable) {
        this.router.navigate(['hubVariable-edit', variable.key], { relativeTo: this.route});
    }

    export(variables: Array<DexihHubVariable>) {
        let vars = this.hubCache.hub.dexihHubVariables.filter(c => {
            return variables.findIndex(d => d.key === c.key) >= 0
        });
        const cache = this.hubCache;
        const hub = this.hubService.createHub(this.hubCache.hub.hubKey, '');
        hub.dexihHubVariables = vars;
        let filename = 'hub_variables.json';

        this.hubService.exportHub(hub, filename);
    }


    watchChanges() {
      // watch the current validation in case it is changed in another session.
      this._hubCacheChangeSubscription = this.hubService.getHubCacheChangeObservable().subscribe(hubCacheChange => {
          if (hubCacheChange.changeClass === eSharedObjectType.HubVariable || hubCacheChange.changeClass === eSharedObjectType.TagObjects) {
            this.updateVariables();
          }
      });
  }
}
