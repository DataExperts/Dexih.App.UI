import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { HubService } from '../../hub.service';
import { Subscription, combineLatest, merge, Subject } from 'rxjs';
import { HubFormsService } from '../../hub.forms.service';
import { AuthService } from '../../../+auth/auth.service';
import { InputOutputColumns } from '../../hub.lineage.models';
import { CancelToken } from '../../../+auth/auth.models';
import { HubCache, ConnectionTables, eCacheStatus } from '../../hub.models';
import { eViewType, DexihDatalink, InputColumn, DexihColumnBase, SelectQuery,
  DexihView, DownloadObject, eDataObjectType, ChartConfig, InputParameterBase, DexihActiveAgent, AnimateConfig } from '../../../shared/shared.models';
import { FormArray, FormGroup } from '@angular/forms';

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
  public params: Params;
  public remoteAgent: DexihActiveAgent;

  public showEdit = false;
  public hasEdited = false;

  private _subscription: Subscription;
  private _formChangeSubscription: Subscription;
  private _changesSubscription: Subscription;

  private refreshDataSubject: Subject<void> = new Subject<void>();
  public refreshDataObservable = this.refreshDataSubject.asObservable();
  
  sourceTypes = [
    { key: eDataObjectType.Datalink, name: 'Datalink' },
    { key: eDataObjectType.Table, name: 'Table' }
  ];

  eViewType = eViewType;
  eDataObjectType = eDataObjectType;

  public connectionTables: ConnectionTables[] = [];
  public datalinks: DexihDatalink[] = [];

  public showChart = false;
  public inputColumns: InputColumn[];
  public tableColumns: DexihColumnBase[];

  private isLoaded = false;

  private firstLoad = true;
  private dialogOpen = false;

  columns: Array<any>;
  public baseData: Array<any>;
  public data: Array<any>;

  public animationValues = [];
  public animationValue;
  public animationTimer;
  public animationColumnIndex: number;
  public animationRowIndex: number;
  public animationPaused = false;

  private cancelToken = new CancelToken();

  get animateConfig(): AnimateConfig {
    return this.formsService?.currentForm?.controls.animateConfig.value;
  }
  set animateConfig(value: AnimateConfig) {
    this.formsService?.currentForm?.controls.animateConfig.setValue(value);
  }

  get selectQuery(): SelectQuery {
    return this.formsService?.currentForm?.controls.selectQuery.value;
  }
  set selectQuery(value: SelectQuery) {
    this.formsService?.currentForm?.controls.selectQuery.setValue(value);
  }

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
        this.params = result[1];
        this.hubCache = result[2];
        this.remoteAgent = result[3];

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
            }).catch(() => {
                return;
            });
        } else {
            this.load();
        }

      });
    } catch (e) {
      this.hubService.addHubClientErrorMessage(e, 'View Edit');
    }
  }

  load() {
    this.isLoaded = true;

    if (this.hubCache && this.hubCache.isLoaded()) {
      this.connectionTables = this.hubCache.getConnectionTables();
      this.datalinks = this.hubCache.hub.dexihDatalinks;
    }

    if (this.action === 'edit') {
      // get the hub key from the route data, and update the service.
      this.viewKey = + this.params['viewKey'];

      if (!this.viewKey) {
        this.hubService.addHubErrorMessage('There was no view specified to edit.');
      } else {
        if (!this.hubCache.hub || !this.hubCache.hub.dexihColumnValidations) {
          this.hubService.addHubErrorMessage('The hub cache is not loaded.');
        } else {

          let view = this.hubCache.hub.dexihViews.find(c => c.key === this.viewKey);

          // create a copy of the view to avoid changes to the hub cache.
          view = JSON.parse(JSON.stringify(view));
          if (view.selectQuery == null) {
            view.selectQuery = new SelectQuery();
          }

          if (view.animateConfig == null) {
            view.animateConfig = new AnimateConfig()
          }
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
      view.selectQuery = new SelectQuery();
      view.animateConfig = new AnimateConfig();
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

  if (this.remoteAgent) {
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

  watchChanges() {
    if (this._changesSubscription) { this._changesSubscription.unsubscribe(); }
    this._changesSubscription = merge(
      this.formsService.currentForm.controls.sourceDatalinkKey.valueChanges,
      this.formsService.currentForm.controls.sourceTableKey.valueChanges
    ).subscribe(() => {
      this.reset();
      this.selectQuery = new SelectQuery();
      this.animateConfig = new AnimateConfig();
      this.getColumns();
      this.refreshDatalink();
      this.refresh();
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

  toggleChart() {
    if (this.showChart) {
      this.showChart = false;
      this.formsService.currentForm.controls.viewType.setValue(eViewType.Table);
    } else {
      this.showChart = true;
      if (this.formsService.currentForm.controls.chartConfig.value == null) {
        this.formsService.currentForm.controls.chartConfig.setValue(new ChartConfig());
      }
      this.formsService.currentForm.controls.viewType.setValue(eViewType.Chart);
    }
  }

  getColumns() {

    let viewForm = this.formsService.currentForm;
    let viewInputs = <InputColumn[]>viewForm.controls.inputValues.value;

    if (viewForm.controls.sourceType.value === eDataObjectType.Table && viewForm.controls.sourceTableKey.value > 0) {
      let table = this.hubCache.getTable(viewForm.controls.sourceTableKey.value);
      if (table) {
        this.inputColumns = table.dexihTableColumns.filter(c => c.isInput).map(c => {
          let input = viewInputs.find(i => i.name === c.name);
          if (input) {
          } else {
          }
          return {
            datalinkKey: 0, datalinkName: '',
            name: c.name, logicalName: c.logicalName, dataType: c.dataType, rank: c.rank,
            value: c.defaultValue, defaultValue: c.defaultValue
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

    if (viewForm.controls.sourceType.value === eDataObjectType.Datalink && viewForm.controls.sourceDatalinkKey.value > 0) {
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
            name: c.name, logicalName: c.logicalName, dataType: c.dataType, rank: c.rank, value: value, defaultValue: c.defaultValue
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
    this.baseData = null;
  }

  refreshDatalink() {
    let viewForm = this.formsService.currentForm;

    // clear current datalink parameters.
    let viewParameters =  <FormArray> this.formsService.currentForm.controls.parameters;
    for (let i = viewParameters.controls.length - 1; i >= 0; i--) {
      if (viewParameters.controls[i].value.datalinkParameterKey) {
        viewParameters.removeAt(i);
      }
    }

    if (viewForm.controls.sourceType.value === eDataObjectType.Datalink && viewForm.controls.sourceDatalinkKey.value > 0) {
      let datalink = this.datalinks.find(c => c.key === viewForm.controls.sourceDatalinkKey.value);
      if (datalink) {
        let datalinkParameters = datalink.parameters;

        // add the datalink parameter back again.
        for (let datalinkParameter of datalinkParameters) {
          let parameter = Object.assign({}, datalinkParameter);
          parameter['datalinkParameterKey'] = datalinkParameter.key;
          parameter.key = this.hubCache.getNextSequence();
          let parameterForm = this.formsService.parameter(parameter);
          viewParameters.push(parameterForm);
        }
      }
    }
  }

  refresh() {
    let viewForm = this.formsService.currentForm;
    let parameters: InputParameterBase[] = [];

    let viewParameters =  (<FormGroup> this.formsService.currentForm.controls.parameters).getRawValue();

    if (viewParameters) {
      parameters = parameters.concat(viewParameters);
    }

    let view = <DexihView>viewForm.value;
    view.selectQuery = viewForm.controls.selectQuery.value;
    view.animateConfig = viewForm.controls.animateConfig.value;

    if ((view.sourceType === eDataObjectType.Table && view.sourceTableKey > 0) ||
      (view.sourceType === eDataObjectType.Datalink && view.sourceDatalinkKey > 0)) {

      this.hubService.previewView(view, this.inputColumns, parameters, this.cancelToken).then((result) => {
        this.refreshDataSubject.next();
        this.columns = result.columns;
        this.baseData = result.data;

        if (!this.animateConfig.seriesColumn) {
        //   this.initializeAnimation();
        // } else {
          this.data = this.baseData;
        }
      }).catch(() => {
      });
    }
  }

  download(format) {
    let view = <DexihView>this.formsService.currentForm.value;
    let downloadObject = new DownloadObject();
    if (view.sourceType === eDataObjectType.Datalink) {
      downloadObject.objectKey = view.sourceDatalinkKey;
      downloadObject.objectType = eDataObjectType.Datalink;
    }
    if (view.sourceType === eDataObjectType.Table) {
      downloadObject.objectKey = view.sourceTableKey;
      downloadObject.objectType = eDataObjectType.Table;
    }

    downloadObject.query = this.selectQuery;
    this.hubService.downloadData([downloadObject], false, format, this.cancelToken)
  }

  hasChanged() {
    this.formsService.markAsChanged();
  }

  parameterChange() {
    if (this.formsService.currentForm.controls.autoRefresh.value) {
      this.refresh();
    }
  }

  toggleEdit() {
    this.showEdit = !this.showEdit;
    this.hasEdited = true;
  }

  public canDeactivate(): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      if (this.hasEdited && this.formsService.hasChanged) {
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
    if (this.hasEdited && this.formsService.hasChanged) {
      $event.returnValue = 'The view changes have not been saved.  Do you want to discard the changes and exit?';
    }
  }
}
