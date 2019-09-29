import { Component, OnInit, OnDestroy, ViewChild, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HubCache, InvalidActions, CleanActions, eCacheStatus } from '../../hub.models';
import { HubService } from '../../hub.service';
import { AuthService } from '../../../+auth/auth.service';
import { Observable ,  Subscription, combineLatest} from 'rxjs';
import { Location } from '@angular/common';
import { HubFormsService } from '../../hub.forms.service';
import { TypeCodes } from '../../hub.remote.models';
import { eInvalidAction, eCleanAction, eTypeCode, DexihConnection, DexihColumnValidation } from '../../../shared/shared.models';
import { CancelToken } from '../../../+auth/auth.models';

@Component({

  selector: 'dexih-columnValidation-edit-form',
  templateUrl: './columnValidation-edit.component.html',
  providers: [HubFormsService]
})
export class ColumnValidationEditComponent implements OnInit, OnDestroy {

  private columnValidationKey: number;

  private hubCache: HubCache;
  public action: string; // new or edit
  public pageTitle: string;

  eInvalidAction = eInvalidAction;
  eCleanAction = eCleanAction;
  eTypeCode = eTypeCode;
  InvalidActions = InvalidActions;
  CleanActions = CleanActions;

  typeCodes = TypeCodes;
  invalidActions = InvalidActions;
  cleanActions = CleanActions;

  public testValue: string;
  public testResult: any;

  public lookupColumnValue = '';

  public connections: Array<DexihConnection>;
  private isLoaded = false;

  public eCacheStatus = eCacheStatus;
  public cancelToken: CancelToken = new CancelToken();

  private _subscription: Subscription;
  private _formChangeSubscription: Subscription;
  private _hubCacheChangeSubscription: Subscription;

  constructor(private hubService: HubService,
    private authService: AuthService,
    public formsService: HubFormsService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location) {
  }

  ngOnInit() {
    try {
      this._subscription = combineLatest(
        this.route.data,
        this.route.params,
        this.hubService.getHubCacheObservable(),
      ).subscribe(result => {
        let data = result[0];
        let params = result[1];
        this.hubCache = result[2];

        this.action = data['action'];
        this.pageTitle = data['pageTitle'];

        if (this.hubCache.isLoaded()) {
          if (!this.hubCache || this.hubCache.status !== eCacheStatus.Loaded || this.isLoaded) { return; }
          this.isLoaded = true;

          this.connections = this.hubCache.getConnectionTables();

          if (this.action === 'edit') {
            // get the hub key from the route data, and update the service.
            this.columnValidationKey = + params['validationKey'];

            if (!this.columnValidationKey) {
              this.hubService.addHubErrorMessage('There was no validation specified to edit.');
              // this.errorMessage = 'There was no validation specified to edit.';
            } else {
              if (!this.hubCache.hub || !this.hubCache.hub.dexihColumnValidations) {
                this.hubService.addHubErrorMessage('The hub cache is not loaded.');
              } else {
                let validation = this.hubCache.hub.dexihColumnValidations.find(c => c.key === this.columnValidationKey);
                this.formsService.validation(validation);
              }
            }
          }

          if (this.action === 'new') {
            let validation = new DexihColumnValidation();
            this.formsService.validation(validation);

            // update the url with the saved key
            this._formChangeSubscription = this.formsService.getCurrentFormObservable().subscribe(form => {
              let key = form.controls.key.value;
              if (key) {
                if (history.pushState) {
                  let newUrl = window.location.pathname.replace('/columnValidation-new', `/columnValidation-edit/${key}`)
                  this.router.navigateByUrl(newUrl);
                  this._formChangeSubscription.unsubscribe();
                }
              }
            });
          }

          this.getValidationLookupColumn();
          this.formsService.currentForm.controls.lookupColumnKey.valueChanges.subscribe(() => {
            this.getValidationLookupColumn();
          });
        }
      });
    } catch (e) {
      this.hubService.addHubClientErrorMessage(e, 'Column Validation');
    }
  }

  ngOnDestroy() {
    if (this._hubCacheChangeSubscription) { this._hubCacheChangeSubscription.unsubscribe(); }
    if (this._subscription) { this._subscription.unsubscribe(); }
    if (this._formChangeSubscription) { this._formChangeSubscription.unsubscribe(); }
    this.cancelToken.cancel();
  }

  getValidationLookupColumn() {
    let lookupColumnKey = this.formsService.currentForm.controls.lookupColumnKey.value;
    if (lookupColumnKey) {
      let column = this.hubCache.getColumn(lookupColumnKey);
      if (column) {
        let table = this.hubCache.getTable(column.tableKey);
        this.lookupColumnValue = 'Exists in table:' + table.name + ', column:' + column.name;
      } else {
        this.lookupColumnValue = 'Column not found.  Re-select a valid column.';
      }
    } else {
      this.lookupColumnValue = '';
    }
  }

  test() {
    this.hubService.testColumnValidation(this.formsService.currentForm.value, this.testValue, this.cancelToken).then(result => {
      this.testResult = result;
    });
  }

  close() {
    this.authService.navigateUp();
  }

  public canDeactivate(): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      if (this.formsService.hasChanged) {
        this.authService.confirmDialog('The view has not been saved',
          'The column validation changes have not been saved.  Do you want to discard the changes and exit?')
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
      $event.returnValue = 'The column validation changes have not been saved.  Do you want to discard the changes and exit?';
    }
  }
}
