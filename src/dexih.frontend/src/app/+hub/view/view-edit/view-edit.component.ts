import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HubCache, eCacheStatus, DexihView, eSourceType, DexihDatalink,
  DexihConnection, ChartConfig, InputColumn, DexihColumnBase, eViewType, DexihDatalinkTransform, ConnectionTables } from '../../hub.models';
import { HubService } from '../../hub.service';
import { Subscription, combineLatest, merge} from 'rxjs';
import { HubFormsService } from '../../hub.forms.service';
import { AuthService } from '../../../+auth/auth.service';
import { DownloadObject, eObjectType, eDownloadFormat, SelectQuery } from '../../hub.query.models';
import { InputOutputColumns } from '../../hub.lineage.models';

@Component({
  selector: 'dexih-view-edit-form',
  templateUrl: './view-edit.component.html',
  providers: [HubFormsService]
})
export class ViewEditComponent implements OnInit, OnDestroy {
  public viewKey: number;

  private hubCache: HubCache;
  public action: string; // new or edit
  public pageTitle: string;

  public showEdit = false;

  private _subscription: Subscription;
  private _formChangeSubscription: Subscription;
  private _changesSubscription: Subscription;

  sourceTypes = [
    { key: eSourceType.Datalink, name: 'Datalink' },
    { key: eSourceType.Table, name: 'Table' }
  ];

  eViewType = eViewType;
  eSourceType = eSourceType;

  public connectionTables: ConnectionTables[] = [];
  public datalinks: DexihDatalink[] = [];

  public showChart = false;
  public chartConfig = new ChartConfig();

  public inputColumns: InputColumn[];
  public tableColumns: DexihColumnBase[];
  selectQuery: SelectQuery = new SelectQuery();
  private isLoaded = false;

  columns: Array<any>;
  public data: Array<any>;

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
            this.viewKey = + params['viewKey'];

            if (!this.viewKey) {
              this.hubService.addHubErrorMessage('There was no view specified to edit.');
            } else {
              if (!this.hubCache.hub || !this.hubCache.hub.dexihColumnValidations) {
                this.hubService.addHubErrorMessage('The hub cache is not loaded.');
              } else {

                let view = this.hubCache.hub.dexihViews.find(c => c.key === this.viewKey);

                // create a copy of the view to avoid changes to the hub cache.
                view = JSON.parse(JSON.stringify(view));
                this.selectQuery = view.selectQuery;
                this.inputColumns = view.inputValues;
                this.chartConfig = view.chartConfig;
                this.showChart = view.viewType === eViewType.Chart;

                this.formsService.view(view);
                this.watchChanges();

                this.getColumns();
                this.refresh();
              }
            }
          }

          if (this.action === 'new') {
            let view = new DexihView();
            this.formsService.view(view);
            this.watchChanges();
            this.showEdit = true;

            // update the url with the saved key
            this._formChangeSubscription = this.formsService.getCurrentFormObservable().subscribe(form => {
              let key = form.controls.key.value;
              if (key) {
                if (history.pushState) {
                  let newUrl = window.location.pathname.replace('/view-new', `/view-edit/${key}`)
                  this.router.navigateByUrl(newUrl);
                  this._formChangeSubscription.unsubscribe();
                }
              }
            });
          }
        }



      });
    } catch (e) {
      this.hubService.addHubClientErrorMessage(e, 'View Edit');
    }
  }

  watchChanges() {
    if (this._changesSubscription) { this._changesSubscription.unsubscribe(); }
    this._changesSubscription = merge(
      this.formsService.currentForm.controls.sourceDatalinkKey.valueChanges,
      this.formsService.currentForm.controls.sourceTableKey.valueChanges
    ).subscribe(result1 => {
      this.reset();
      this.selectQuery = new SelectQuery();
      this.getColumns();
      this.refresh();
  });
  }

  ngOnDestroy() {
    if (this._subscription) { this._subscription.unsubscribe(); }
    if (this._formChangeSubscription) { this._formChangeSubscription.unsubscribe(); }
    if (this._changesSubscription) { this._changesSubscription.unsubscribe(); }
  }

  close() {
    this.authService.navigateUp();
  }

  getColumns() {

    let viewForm = this.formsService.currentForm;
    let viewInputs = <InputColumn[]> viewForm.controls.inputValues.value;

    if (viewForm.controls.sourceType.value === eSourceType.Table && viewForm.controls.sourceTableKey.value > 0) {
      let table = this.hubCache.getTable(viewForm.controls.sourceTableKey.value);
      if (table) {
        this.inputColumns = table.dexihTableColumns.filter(c => c.isInput).map(c => {
          let input = viewInputs.find(i => i.name === c.name);
          let value = null;
          if (input) {
            value = input.value;
          } else {
            value = c.defaultValue;
          }
          return {datalinkKey: 0, datalinkName: '',
            name: c.name, logicalName: c.logicalName, dataType: c.dataType, rank: c.rank, value: c.defaultValue };
        }
        );
        this.tableColumns = table.dexihTableColumns;
        return;
      } else {
        this.reset();
      }
    } else {
      this.reset();
    }

    if (viewForm.controls.sourceType.value === eSourceType.Datalink && viewForm.controls.sourceDatalinkKey.value > 0) {
      let datalink = this.datalinks.find(c => c.key === viewForm.controls.sourceDatalinkKey.value);
      if (datalink) {
        const ioColumns = new InputOutputColumns();
        ioColumns.buildInputOutput(this.hubCache, datalink);
        this.tableColumns = ioColumns.getDatalinkOutputColumns(datalink);

        this.inputColumns = datalink.sourceDatalinkTable.dexihDatalinkColumns.filter(c => c.isInput).map(c => {
          let input = viewInputs.find(i => i.name === c.name);
          let value = null;
          if (input) {
            value = input.value;
          } else {
            value = c.defaultValue;
          }
          return { datalinkKey: datalink.key, datalinkName: datalink.name,
            name: c.name, logicalName: c.logicalName, dataType: c.dataType, rank: c.rank, value: value };
        });
      } else {
        this.reset();
      }
    } else {
      this.reset();
    }
  }

  reset() {
    this.tableColumns = [];
    this.inputColumns = [];
    this.columns = null;
    this.data = null;
  }

  refresh() {
    let viewForm = this.formsService.currentForm;
    if (viewForm.controls.sourceType.value === eSourceType.Datalink) {
      this.hubService.previewDatalinkKeyData(viewForm.controls.sourceDatalinkKey.value,
        this.selectQuery, this.inputColumns).then((result) => {
        this.columns = result.columns;
        this.data = result.data;
      }).catch(() => {
      });

    }
    if (viewForm.controls.sourceType.value === eSourceType.Table) {
      this.hubService.previewTableKeyData(viewForm.controls.sourceTableKey.value,
          false, this.selectQuery, this.inputColumns).then((result) => {
        this.columns = result.columns;
        this.data = result.data;
      }).catch(() => {
      });
    }
  }

  download(format) {
    let view = <DexihView>this.formsService.currentForm.value;
    let downloadObject = new DownloadObject();
    if (view.sourceType === eSourceType.Table) {
      downloadObject.objectKey = view.sourceDatalinkKey;
      downloadObject.objectType = eObjectType.Datalink;
    }
    if (view.sourceType === eSourceType.Table) {
      downloadObject.objectKey = view.sourceTableKey;
      downloadObject.objectType = eObjectType.Table;
    }

    downloadObject.query = this.selectQuery;
    this.hubService.downloadData([downloadObject], false, format)
  }

  save() {
    if (!this.formsService.currentForm.valid) {
      this.formsService.showAllErrors = true;

      this.authService.confirmDialog('There are errors!',
        'There are errors in the current form.  Confirm that would like to save the changes anyhow?')
        .then(confirm => {
          this.hubService.addHubErrorMessage(this.formsService.getFormErrors());
          this.doSave();
        }).catch(reason => {

        });
    } else {
      this.doSave();
    }
  }

  doSave() {
      let view = <DexihView>this.formsService.currentForm.value;
      view.viewType = this.showChart ? eViewType.Chart : eViewType.Table;
      view.selectQuery = this.selectQuery;
      view.chartConfig = this.chartConfig;
      view.inputValues = this.inputColumns;

      this.hubService.saveView(view).then(() => {
        this.hubService.addHubSuccessMessage('The view was saved.');
      }).catch(() => {
        this.data = null;
      });
  }

  public canDeactivate(): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      if (this.formsService.hasChanged) {
        this.authService.confirmDialog('The view has not been saved',
          'The view changes have not been saved.  Do you want to discard the changes and exit?')
          .then(() => {
              resolve(true);
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
      $event.returnValue = 'The view changes have not been saved.  Do you want to discard the changes and exit?';
    }
  }
}
