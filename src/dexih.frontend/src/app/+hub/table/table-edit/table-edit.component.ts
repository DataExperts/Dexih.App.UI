import { HostListener, Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { HubService } from '../../hub.service';
import { AuthService } from '../../../+auth/auth.service';
import { Subscription, combineLatest} from 'rxjs';
import { HubFormsService } from '../../hub.forms.service';
import { DexihConnection, eConnectionCategory, DexihTable } from '../../../shared/shared.models';
import { HubCache, eCacheStatus } from '../../hub.models';
import { CancelToken } from '../../../+auth/auth.models';

@Component({
  selector: 'dexih-table-edit-form',
  templateUrl: './table-edit.component.html'
})
export class TableEditComponent implements OnInit, OnDestroy {
  public tableKey: number;
  public connectionKey: number;
  public connection: DexihConnection;

  eConnectionCategory = eConnectionCategory;

  public hubCache: HubCache;
  public action: string; // new or edit
  public pageTitle: string;
  public params: Params;

  public cancelToken: CancelToken = new CancelToken();

  private _subscription: Subscription;
  private _hubCacheChangeSubscription: Subscription;
  private _formChangeSubscription: Subscription;
  private isLoaded = false;


  constructor(private hubService: HubService,
    public formsService: HubFormsService,
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    try {
      this._subscription = combineLatest(
        this.route.data,
        this.route.params,
        this.hubService.getHubCacheObservable(),
      ).subscribe(result => {
        let data = result[0];
        this.params = result[1];
        this.hubCache = result[2];

        this.action = data['action'];
        this.pageTitle = data['pageTitle'];

        if (!this.hubCache || this.hubCache.status !== eCacheStatus.Loaded ) { return; }

        if (this.isLoaded && this.action === 'new') { return; }

        if (this.isLoaded && this.formsService.hasChanged) {
            this.authService.confirmDialog('Synchronization warning',
            'The hub was disconnected, meaning this edit could have been changed by another session.  Would you like to discard the current changes, and reload the latest version?')
            .then(confirm => {
                if (confirm) {
                    this.load();
                }
            }).catch(reason => {
                return;
            });
        } else {
            this.load();
        }

      });
    } catch (e) {
      this.hubService.addHubClientErrorMessage(e, 'Table Edit');
    }
  }

  ngOnDestroy() {
    if (this._hubCacheChangeSubscription) { this._hubCacheChangeSubscription.unsubscribe(); }
    if (this._formChangeSubscription) { this._formChangeSubscription.unsubscribe(); }
    if (this._subscription) { this._subscription.unsubscribe(); }
    this.cancelToken.cancel();

    // shut down service
    this.formsService.ngOnDestroy();
  }

  load() {
    this.isLoaded = true;

    if (this.action === 'edit') {
      // get the hub key from the route data, and update the service.
      this.tableKey = + this.params['tableKey'];

      if (!this.tableKey) {
        this.hubService.addHubErrorMessage('There was no table specified to edit.');
      } else {
        if (!this.hubCache.hub || !this.hubCache.hub.dexihDatajobs) {
          this.hubService.addHubErrorMessage('The hub cache is not loaded.');
        } else {

          let table = this.hubCache.getTable(this.tableKey);
          if (!table) {
            this.hubService.addHubErrorMessage('The specified table could not be found.');
          } else {
            this.connection = this.hubCache.getConnection(table.connectionKey);
            this.formsService.table(table);
          }
        }
      }
    }

    if (this.action === 'new') {
      let table: DexihTable;
      if (this.hubService.newTable) {
        table = this.hubService.newTable;
        this.hubService.newTable = null;
      } else {
        this.connectionKey = + this.params['connectionKey'];

        table = new DexihTable();
        table.key = 0;
        table.connectionKey = this.connectionKey;
      }
      this.formsService.table(table);

      // update the url with the saved key
      this._formChangeSubscription = this.formsService.getCurrentFormObservable().subscribe(tableForm => {
        let key = tableForm.controls.key.value;
        if (key) {
          if (history.pushState) {
            let newUrl = window.location.pathname.replace('/table-new', `/table-edit/${key}`)
            this.router.navigateByUrl(newUrl);
            this._formChangeSubscription.unsubscribe();
          }
        }
      });
    }
  }

  close() {
    this.authService.navigateUp();
  }

  changedTables(tables) {
    this.formsService.table(tables[0]);
  }

  createPaths() {
    this.hubService.createPaths(this.formsService.currentForm.value, this.cancelToken).then(() => {
      this.hubService.addHubSuccessMessage('The paths have been created.');
    }).catch();
  }


  public canDeactivate(): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      if (this.formsService.hasChanged) {
        this.authService.confirmDialog('The table has not been saved',
          'The table changes have not been saved.  Do you want to discard the changes and exit?')
          .then((confirm) => {
              resolve(confirm);
            }).catch(() => {
              resolve(false);
            });
      } else {
        resolve(true);
      }
    });
  }

  // @HostListener allows is to guard against browser refresh, close, etc.
  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    if (this.formsService.hasChanged) {
      $event.returnValue = 'The table changes have not been saved.  Do you want to discard the changes and exit?';
    }
  }
}
