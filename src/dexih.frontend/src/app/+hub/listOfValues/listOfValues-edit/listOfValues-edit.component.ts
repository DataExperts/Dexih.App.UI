import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HubCache, eCacheStatus, ConnectionTables } from '../../hub.models';
import { HubService } from '../../hub.service';
import { AuthService } from '../../../+auth/auth.service';
import { Subscription, combineLatest, merge} from 'rxjs';
import { HubFormsService } from '../../hub.forms.service';
import { DexihListOfValues, DexihDatalink, eLOVObjectType,
  DexihColumnBase, eLOVObjectTypeItems, SelectQuery, ListOfValuesItem } from '../../../shared/shared.models';
import { CancelToken } from '../../../+auth/auth.models';
import { InputOutputColumns } from '../../hub.lineage.models';
import { FormGroup, FormArray } from '@angular/forms';

@Component({

  selector: 'dexih-listOfValues-edit-form',
  templateUrl: './listOfValues-edit.component.html',
  providers: [HubFormsService]
})
export class ListOfValuesEditComponent implements OnInit, OnDestroy {

  private listOfValuesKey: number;

  private hubCache: HubCache;
  public action: string; // new or edit
  public pageTitle: string;

  private _subscription: Subscription;
  private _formChangeSubscription: Subscription;
  private _sourceChangeSubscription: Subscription;
  private isLoaded = false;

  private cancelToken = new CancelToken();

  public eLOVObjectType = eLOVObjectType;
  public connectionTables: ConnectionTables[] = [];
  public datalinks: DexihDatalink[] = [];

  public tableColumns: DexihColumnBase[];
  public sourceTypes = eLOVObjectTypeItems.filter( c => c.key > 0);

  columns = [
    { name: 'key', title: 'Key'},
    { name: 'name', title: 'Name'},
    { name: 'description', title: 'Description'},
];
  public data: Array<any>;

  constructor(private hubService: HubService,
    private authService: AuthService,
    public formsService: HubFormsService,
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
        let params = result[1];
        this.hubCache = result[2];

        this.pageTitle = data['pageTitle'];
        this.action = data['action'];

        if (this.hubCache.isLoaded()) {
          if (!this.hubCache || this.hubCache.status !== eCacheStatus.Loaded || this.isLoaded) { return; }
          this.isLoaded = true;

          this.connectionTables = this.hubCache.getConnectionTables();
          this.datalinks = this.hubCache.hub.dexihDatalinks;

          if (this.action === 'edit') {
            // get the hub key from the route data, and update the service.
            this.listOfValuesKey = + params['listOfValuesKey'];

            if (!this.listOfValuesKey) {
              this.hubService.addHubErrorMessage('There was no list of values specified to edit.');
              // this.errorMessage = 'There was no validation specified to edit.';
            } else {
              if (!this.hubCache.hub || !this.hubCache.hub.dexihListOfValues) {
                this.hubService.addHubErrorMessage('The hub cache is not loaded.');
              } else {
                let listOfValues = this.hubCache.hub.dexihListOfValues.find(c => c.key === this.listOfValuesKey);
                if (! listOfValues.selectQuery) {
                  listOfValues.selectQuery = new SelectQuery();
                }
                this.formsService.listOfValues(listOfValues);
              }
            }
          }

          if (this.action === 'new') {
            let listOfValues = new DexihListOfValues();
            listOfValues.selectQuery = new SelectQuery();
            this.formsService.listOfValues(listOfValues);

            // update the url with the saved key
            this._formChangeSubscription = this.formsService.getCurrentFormObservable().subscribe(form => {
              let key = form.controls.key.value;
              if (key) {
                if (history.pushState) {
                  let newUrl = window.location.pathname.replace('/listOfValues-new', `/listOfValues-edit/${key}`)
                  this.router.navigateByUrl(newUrl);
                  this._formChangeSubscription.unsubscribe();
                }
              }
            });
          }

          this.refreshColumns();

          let currentForm = this.formsService.currentForm;

          // if any source table/datalink changed, refresh the columns.
          this._sourceChangeSubscription = merge(
            currentForm.controls.sourceType.valueChanges,
            currentForm.controls.sourceTableKey.valueChanges,
            currentForm.controls.sourceDatalinkKey.valueChanges).subscribe(() => {
              this.refreshColumns();
          });
        }
      });
    } catch (e) {
      this.hubService.addHubClientErrorMessage(e, 'Edit List Of Values');
    }
  }

  ngOnDestroy() {
    if (this._subscription) { this._subscription.unsubscribe(); }
    if (this._formChangeSubscription) { this._formChangeSubscription.unsubscribe(); }
    if (this._sourceChangeSubscription) { this._sourceChangeSubscription.unsubscribe(); }
    this.cancelToken.cancel();
  }

  refreshColumns() {
    let currentForm = this.formsService.currentForm;
    let sourceType = <eLOVObjectType> currentForm.controls.sourceType.value;

    switch (sourceType) {
      case eLOVObjectType.Datalink:
        let datalinkKey = currentForm.controls.sourceDatalinkKey.value;
        let datalink = this.hubCache.hub.dexihDatalinks.find(c => c.key === datalinkKey);
        if (datalink) {
          // get the outputs from the last transform in the datalink
          const ioColumns = new InputOutputColumns();
          ioColumns.buildInputOutput(this.hubCache, datalink);
          this.tableColumns = ioColumns.getDatalinkOutputColumns(datalink);
        } else {
          if (datalinkKey > 0) {
            this.hubService.addHubErrorMessage(`The datalink with the key ${datalinkKey} could not be found.`);
          }
          this.tableColumns = null;
        }
        break;
      case eLOVObjectType.Table:
        let tableKey = currentForm.controls.sourceTableKey.value;
        let table = this.hubCache.hub.dexihTables.find(c => c.key === tableKey);
        if (table) {
          this.tableColumns = table.dexihTableColumns;
        } else {
          if (tableKey > 0) {
            this.hubService.addHubErrorMessage(`The table with the key ${tableKey} could not be found.`);
          }
          this.tableColumns = null;
        }
        break;
      }
  }

  refreshData() {
    let form = this.formsService.currentForm;

    let listOfValues = <DexihListOfValues>form.value;

    this.hubService.previewListOfValues(listOfValues, this.cancelToken).then((data) => {
      this.data = data;
    }).catch(() => {
    });
  }

  hasChanged() {

  }

  add(index: number) {
    let currentForm = <FormGroup> this.formsService.currentForm;
    let item = this.formsService.listOfValuesItem(new ListOfValuesItem());
    let staticData = <FormArray> currentForm.controls.staticData;
    staticData.insert(index + 1, item);
  }

  remove(index: number) {
    let currentForm = <FormGroup> this.formsService.currentForm;
    let staticData = <FormArray> currentForm.controls.staticData;
    staticData.removeAt(index);
  }

  clear() {
    let currentForm = <FormGroup> this.formsService.currentForm;
    let staticData = <FormArray> currentForm.controls.staticData;
    while(staticData.controls.length > 0) {
      staticData.removeAt(0);
    }
  }

  close() {
    this.authService.navigateUp();
  }

}
