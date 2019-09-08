import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HubCache, eCacheStatus, eSourceType, DexihDatalink,
  InputColumn, DexihColumnBase, DexihApi,
  ConnectionTables,
  eViewSource} from '../../hub.models';
import { HubService } from '../../hub.service';
import { Subscription, combineLatest, merge} from 'rxjs';
import { HubFormsService } from '../../hub.forms.service';
import { AuthService } from '../../../+auth/auth.service';
import { DownloadObject, SelectQuery } from '../../hub.query.models';
import { InputOutputColumns } from '../../hub.lineage.models';
import { CancelToken } from '../../../+auth/auth.models';

@Component({
  selector: 'dexih-api-edit-form',
  templateUrl: './api-edit.component.html',
  providers: [HubFormsService]
})
export class ApiEditComponent implements OnInit, OnDestroy {
  public apiKey: number;

  private hubCache: HubCache;
  public action: string; // new or edit
  public pageTitle: string;

  private _subscription: Subscription;
  private _formChangeSubscription: Subscription;
  private _changesSubscription: Subscription;

  sourceTypes = [
    { key: eSourceType.Datalink, name: 'Datalink' },
    { key: eSourceType.Table, name: 'Table' }
  ];

  eSourceType = eSourceType;

  public connectionTables: ConnectionTables[] = [];
  public datalinks: DexihDatalink[] = [];

  public inputColumns: InputColumn[];
  public tableColumns: DexihColumnBase[];
  selectQuery: SelectQuery = new SelectQuery();

  columns: Array<any>;
  public data: Array<any> = [];
  private isLoaded = false;

  private cancelToken = new CancelToken();

  constructor(
    private hubService: HubService,
    private authService: AuthService,
    public formsService: HubFormsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
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

          if (this.hubCache && this.hubCache.isLoaded()) {
            this.connectionTables = this.hubCache.getConnectionTables();
            this.datalinks = this.hubCache.hub.dexihDatalinks;
          }

          if (this.action === 'edit') {
            // get the hub key from the route data, and update the service.
            this.apiKey = + params['apiKey'];

            if (!this.apiKey) {
              this.hubService.addHubErrorMessage('There was no api specified to edit.');
            } else {
              if (!this.hubCache.hub || !this.hubCache.hub.dexihApis) {
                this.hubService.addHubErrorMessage('The hub cache is not loaded.');
              } else {

                let api = this.hubCache.hub.dexihApis.find(c => c.key === this.apiKey);

                this.selectQuery = api.selectQuery;
                if (!this.selectQuery) { this.selectQuery = new SelectQuery(); }

                this.formsService.api(api);
                this.watchChanges();

                this.getColumns();
                // this.refresh();
              }
            }
          }

          if (this.action === 'new') {
            let api = new DexihApi();
            this.formsService.api(api);
            this.watchChanges();

            // update the url with the saved key
            this._formChangeSubscription = this.formsService.getCurrentFormObservable().subscribe(form => {
              let key = form.controls.key.value;
              if (key) {
                if (history.pushState) {
                  let newUrl = window.location.pathname.replace('/api-new', `/api-edit/${key}`)
                  this.router.navigateByUrl(newUrl);
                  this._formChangeSubscription.unsubscribe();
                }
              }
            });
          }
        }
      });
    } catch (e) {
      this.hubService.addHubClientErrorMessage(e, 'Api Edit');
    }
  }

  watchChanges() {
    if (this._changesSubscription) { this._changesSubscription.unsubscribe(); }
    this._changesSubscription = merge(
      this.formsService.currentForm.controls.sourceDatalinkKey.valueChanges,
      this.formsService.currentForm.controls.sourceTableKey.valueChanges
    ).subscribe(() => {
      this.reset();
      this.selectQuery = new SelectQuery();
      this.getColumns();
  //    this.refresh();
  });
  }

  ngOnDestroy() {
    if (this._subscription) { this._subscription.unsubscribe(); }
    if (this._formChangeSubscription) { this._formChangeSubscription.unsubscribe(); }
    if (this._changesSubscription) { this._changesSubscription.unsubscribe(); }
    this.cancelToken.cancel();
  }

  close() {
    this.authService.navigateUp();
  }

  getColumns() {
    let apiForm = this.formsService.currentForm;

    if (apiForm.controls.sourceType.value === eSourceType.Table && apiForm.controls.sourceTableKey.value > 0) {
      let table = this.hubCache.getTable(apiForm.controls.sourceTableKey.value);
      if (table) {
        this.tableColumns = table.dexihTableColumns;
        this.inputColumns = this.getInputColumns(table.dexihTableColumns);
        return;
      } else {
        this.reset();
      }
    } else {
      this.reset();
    }

    if (apiForm.controls.sourceType.value === eSourceType.Datalink && apiForm.controls.sourceDatalinkKey.value > 0) {
      let datalink = this.datalinks.find(c => c.key === apiForm.controls.sourceDatalinkKey.value);
      if (datalink) {
        const ioColumns = new InputOutputColumns();
        ioColumns.buildInputOutput(this.hubCache, datalink);
        this.tableColumns = ioColumns.getDatalinkOutputColumns(datalink);
        this.inputColumns = this.getInputColumns(datalink.sourceDatalinkTable.dexihDatalinkColumns);
      } else {
        this.reset();
      }
    } else {
      this.reset();
    }
  }

  getInputColumns(columns: DexihColumnBase[]): InputColumn[] {
    let inputColumns = columns.filter(c => c.isInput).map(c => {
      return <InputColumn>  {
          name: c.name, logicalName: c.logicalName, dataType: c.dataType, rank: c.rank, value: c.defaultValue};
    });

    return inputColumns;
  }

  reset() {
    this.tableColumns = [];
    this.inputColumns = [];
    this.columns = null;
    this.data = null;
  }

  refresh() {
    let apiForm = this.formsService.currentForm;
    if (apiForm.controls.sourceType.value === eSourceType.Datalink) {
      this.hubService.previewDatalinkKeyData(apiForm.controls.sourceDatalinkKey.value,
        this.selectQuery, this.inputColumns, apiForm.controls.parameters.value, this.cancelToken).then((result) => {
        this.columns = result.columns;
        this.data = result.data;
      }).catch(() => {
      });

    }
    if (apiForm.controls.sourceType.value === eSourceType.Table) {
      this.hubService.previewTableKeyData(apiForm.controls.sourceTableKey.value,
          false, this.selectQuery, this.inputColumns, apiForm.controls.parameters.value, this.cancelToken).then((result) => {
        this.columns = result.columns;
        this.data = result.data;
      }).catch(() => {
      });
    }
  }

  download(format) {
    let api = <DexihApi>this.formsService.currentForm.value;
    let downloadObject = new DownloadObject();
    if (api.sourceType === eSourceType.Table) {
      downloadObject.objectKey = api.sourceDatalinkKey;
      downloadObject.objectType = eViewSource.Datalink;
    }
    if (api.sourceType === eSourceType.Table) {
      downloadObject.objectKey = api.sourceTableKey;
      downloadObject.objectType = eViewSource.Table;
    }

    downloadObject.query = this.selectQuery;
    this.hubService.downloadData([downloadObject], false, format)
  }

  public canDeactivate(): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      if (this.formsService.hasChanged) {
        this.authService.confirmDialog('The api has not been saved',
          'The api changes have not been saved.  Do you want to discard the changes and exit?')
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
      $event.returnValue = 'The api changes have not been saved.  Do you want to discard the changes and exit?';
    }
  }
}
