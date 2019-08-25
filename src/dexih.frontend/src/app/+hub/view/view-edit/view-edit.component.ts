import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  HubCache, eCacheStatus, DexihView, eSourceType, DexihDatalink,
  ChartConfig, InputColumn, DexihColumnBase, eViewType, ConnectionTables, eViewSource
} from '../../hub.models';
import { HubService } from '../../hub.service';
import { Subscription, combineLatest, merge } from 'rxjs';
import { HubFormsService } from '../../hub.forms.service';
import { AuthService } from '../../../+auth/auth.service';
import { DownloadObject, SelectQuery } from '../../hub.query.models';
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
  public inputColumns: InputColumn[];
  public tableColumns: DexihColumnBase[];
  selectQuery: SelectQuery = new SelectQuery();
  private isLoaded = false;

  private firstLoad = true;
  private dialogOpen = false;

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
        this.hubService.getRemoteAgentObservable()
      ).subscribe(result => {
        let data = result[0];
        let params = result[1];
        this.hubCache = result[2];
        let remoteAgent = result[3];

        this.action = data['action'];
        this.pageTitle = data['pageTitle'];

        if (this.hubCache.isLoaded()) {
          if (!this.hubCache || this.hubCache.status !== eCacheStatus.Loaded) { return; }

          if (!this.isLoaded) {
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
                  this.showChart = view.viewType === eViewType.Chart;

                  this.formsService.view(view);
                  this.watchChanges();

                  this.getColumns();
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

          if (remoteAgent) {
            if (!this.firstLoad) {
              if (!this.dialogOpen) {
                this.dialogOpen = true;
                this.authService.confirmDialog('Remote Agent Available',
                  'A remote agent is available, would you like to refresh the data?').then(confirm => {
                    if (confirm) {
                      this.refresh();
                    }
                    this.dialogOpen = false;
                  });
              }
            } else {
              if (this.formsService.currentForm.controls.autoRefresh.value) {
                this.refresh();
              }

            }
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
    ).subscribe(() => {
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
    let viewInputs = <InputColumn[]>viewForm.controls.inputValues.value;

    if (viewForm.controls.sourceType.value === eSourceType.Table && viewForm.controls.sourceTableKey.value > 0) {
      let table = this.hubCache.getTable(viewForm.controls.sourceTableKey.value);
      if (table) {
        this.inputColumns = table.dexihTableColumns.filter(c => c.isInput).map(c => {
          let input = viewInputs.find(i => i.name === c.name);
          if (input) {
          } else {
          }
          return {
            datalinkKey: 0, datalinkName: '',
            name: c.name, logicalName: c.logicalName, dataType: c.dataType, rank: c.rank, value: c.defaultValue
          };
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
          return {
            datalinkKey: datalink.key, datalinkName: datalink.name,
            name: c.name, logicalName: c.logicalName, dataType: c.dataType, rank: c.rank, value: value
          };
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
    let parameters = this.formsService.currentForm.controls.parameters.value;

    let view = viewForm.value;
    view.selectQuery = this.selectQuery;

    this.hubService.previewView(viewForm.value, this.inputColumns, parameters).then((result) => {
      this.columns = result.columns;
      this.data = result.data;
    }).catch(() => {
    });

    // if (viewForm.controls.sourceType.value === eSourceType.Datalink && viewForm.controls.sourceDatalinkKey.value) {
    //   this.hubService.previewDatalinkKeyData(viewForm.controls.sourceDatalinkKey.value,
    //     this.selectQuery, this.inputColumns, parameters).then((result) => {
    //     this.columns = result.columns;
    //     this.data = result.data;
    //   }).catch(() => {
    //   });

    // }
    // if (viewForm.controls.sourceType.value === eSourceType.Table && viewForm.controls.sourceTableKey.value) {
    //   this.hubService.previewTableKeyData(viewForm.controls.sourceTableKey.value,
    //       false, this.selectQuery, this.inputColumns, parameters).then((result) => {
    //     this.columns = result.columns;
    //     this.data = result.data;
    //   }).catch(() => {
    //   });
    // }
  }

  download(format) {
    let view = <DexihView>this.formsService.currentForm.value;
    let downloadObject = new DownloadObject();
    if (view.sourceType === eViewSource.Table) {
      downloadObject.objectKey = view.sourceDatalinkKey;
      downloadObject.objectType = eViewSource.Datalink;
    }
    if (view.sourceType === eViewSource.Table) {
      downloadObject.objectKey = view.sourceTableKey;
      downloadObject.objectType = eViewSource.Table;
    }

    downloadObject.query = this.selectQuery;
    this.hubService.downloadData([downloadObject], false, format)
  }

  hasChanged() {
    this.formsService.markAsChanged();
  }

  public canDeactivate(): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      if (this.formsService.hasChanged) {
        this.authService.confirmDialog('The view has not been saved',
          'The view changes have not been saved.  Do you want to discard the changes and exit?')
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
      $event.returnValue = 'The view changes have not been saved.  Do you want to discard the changes and exit?';
    }
  }
}
