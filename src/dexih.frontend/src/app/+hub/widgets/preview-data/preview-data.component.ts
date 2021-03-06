import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { HubCache, PreviewResults, DexihInputParameter } from '../../hub.models';
import { combineLatest, Subscription, Subject } from 'rxjs';
import { AuthService } from '../../../+auth/auth.service';
import { HubService } from '../../hub.service';
import { InputOutputColumns } from '../../hub.lineage.models';
import { PromiseWithCancel, CancelToken } from '../../../+auth/auth.models';
import { eSourceType, DexihTable, DexihDatalink, ChartConfig, InputColumn, DexihColumnBase, SelectQuery,
    eDownloadFormat, DownloadObject, DexihView, eViewType, eDataObjectType, DexihViewParameter } from '../../../shared/shared.models';

@Component({
    selector: 'preview-data',
    templateUrl: 'preview-data.component.html'
})

export class PreviewDataComponent implements OnInit, OnDestroy {
    @Input() viewSource: eDataObjectType;
    @Input() key: number;
    @Input() table: DexihTable;
    @Input() datalink: DexihDatalink;
    @Input() datalinkTransformKey: number;
    @Input() previewUpdates = false;

    private _subscription: Subscription;

    private hubCache: HubCache;

    private refreshDataSubject: Subject<void> = new Subject<void>();
    public refreshDataObservable = this.refreshDataSubject.asObservable();

    private requiresRefreshDataSubject: Subject<void> = new Subject<void>();
    public requiresRefreshDataObservable = this.requiresRefreshDataSubject.asObservable();
    
    public action: string; // new or edit
    public pageTitle: string;
    public message: string;

    public chartConfig = new ChartConfig();
    public view = 'table';
    public transformProperties = null;

    public inputColumns: InputColumn[];
    public parameters: DexihInputParameter[];
    public tableColumns: DexihColumnBase[];
    selectQuery: SelectQuery = new SelectQuery();

    public title: string;

    columns: Array<any>;
    public data: Array<any>;

    public isRefreshing = false;
    private firstLoad = true;
    private dialogOpen = false;

    public allowViewSave = false;

    public previewQuery: PromiseWithCancel<PreviewResults>;
    public cancelToken: CancelToken = new CancelToken();

    constructor(
        private hubService: HubService,
        private authService: AuthService,
        ) {
            this.selectQuery.rows = 100;
    }

    ngOnInit() {
        try {
            this._subscription = combineLatest(
                this.hubService.getHubCacheObservable(),
                this.hubService.getRemoteAgentObservable()
            ).subscribe(result => {
                this.hubCache = result[0];
                let remoteAgent = result[1];

                if (this.hubCache.isLoaded()) {
                    // get the hub key from the route data, and update the service.

                    switch (this.viewSource) {
                        case eDataObjectType.Datalink:
                            let datalink: DexihDatalink;
                            if ( this.key ) {
                                datalink = this.hubCache.hub.dexihDatalinks.find(c => c.key === this.key);
                            } else {
                                datalink = this.datalink;
                            }

                            if (!datalink) { return; }
                            // this.key = datalink.key;

                            // only allows view creation on saved datalink
                            this.allowViewSave = datalink.key && !this.datalinkTransformKey ? true : false;

                            this.title = 'Datalink - ' + datalink.name;

                            // get the outputs from the last transform in the datalink
                            const ioColumns = new InputOutputColumns();
                            ioColumns.buildInputOutput(datalink);
                            if (this.datalinkTransformKey) {
                                let transform = datalink.dexihDatalinkTransforms.find(c => c.key === this.datalinkTransformKey);
                                this.tableColumns = transform['runTime']['outputColumns'];
                            } else {
                                this.tableColumns = ioColumns.getDatalinkOutputColumns(datalink);
                            }

                            this.inputColumns = datalink.sourceDatalinkTable.dexihDatalinkColumns.filter(c => c.isInput).map(c => {
                                return  {datalinkKey: this.key, datalinkName: datalink.name,
                                    name: c.name, logicalName: c.logicalName, dataType: c.dataType,
                                    rank: c.rank, value: c.defaultValue, defaultValue: c.defaultValue};
                            });

                            this.parameters = datalink.parameters;
                            break;

                        case eDataObjectType.Table:
                            let table: DexihTable;
                            if ( this.key ) {
                                table = this.hubCache.getTable(this.key);
                            } else {
                                table = this.table;
                            }

                            if (!table) { return; }
                            // this.key = table.key;

                            // only allows view creation on saved table
                            this.allowViewSave = table.key ? true : false;

                            this.title = 'Table - ' + table.name;

                            this.tableColumns = table.dexihTableColumns;
                            this.inputColumns = table.dexihTableColumns.filter(c => c.isInput).map(c => {
                                return  {datalinkKey: 0, datalinkName: null,
                                    name: c.name, logicalName: c.logicalName, dataType: c.dataType,
                                    rank: c.rank, value: c.defaultValue, defaultValue: c.defaultValue};
                                }
                            );
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
                        this.refresh();
                    }
                }
            });
        } catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Datalink Preview');
        }

    }

    ngOnDestroy(): void {
        if (this._subscription) { this._subscription.unsubscribe(); }
        this.cancelToken.cancel();
    }

    close() {
        this.authService.navigateUp();
    }

    parameterChange() {
        this.requiresRefreshDataSubject.next();
    }

    refresh() {
        if (!this.isRefreshing) {
            this.isRefreshing = true;

            // cancel any existing query.
            if (this.previewQuery) { this.previewQuery.cancel(); }

            let previewQuery: PromiseWithCancel<PreviewResults>;

            switch (this.viewSource) {
                case eDataObjectType.Datalink:
                    if (this.key) {
                        previewQuery = this.hubService.previewDatalinkKeyData(this.key, this.previewUpdates, this.selectQuery,
                            this.inputColumns, this.parameters, this.cancelToken);
                    } else {
                        if (this.datalink) {
                            previewQuery = this.hubService.previewTransformData(this.datalink, this.datalinkTransformKey,
                                this.selectQuery, this.inputColumns, this.parameters, this.cancelToken);
                        }
                    }
                    break;
                case eDataObjectType.Table:
                    if (this.key) {
                        previewQuery = this.hubService.previewTableKeyData(this.key, false, this.selectQuery,
                            this.inputColumns, this.parameters, this.cancelToken);
                    } else {
                        if (this.table) {
                            previewQuery = this.hubService.previewTableData(this.table, false, this.selectQuery,
                                this.inputColumns, this.parameters, this.cancelToken);
                        }
                    }
                    break;
            }

            if (previewQuery) {
                previewQuery.then((result) => {
                    this.refreshDataSubject.next();
                    this.columns = result.columns;
                    this.data = result.data;
                    this.transformProperties = result.transformProperties;
                    this.isRefreshing = false;

                    if (result.status) {
                        this.hubService.addHubMessage(result.status, false, 'Preview Data');
                    }
                }).catch(() => {
                    this.data = [];
                    this.isRefreshing = false;
                });
            }
        }
    }

    download(format: eDownloadFormat = eDownloadFormat.Csv) {
        if (this.key) {
            let downloadObject = new DownloadObject();
            downloadObject.objectKey = this.key;
            downloadObject.objectType = this.viewSource;
            let query = Object.assign({}, this.selectQuery);
            query.rows = null;
            downloadObject.query = query;
            this.hubService.downloadData([downloadObject], false, format, this.cancelToken)
        } else {
            switch (this.viewSource) {
                case eDataObjectType.Datalink:
                    this.hubService.downloadDatalinkData(this.datalink, this.datalinkTransformKey,
                        this.selectQuery, this.inputColumns, false, format, this.parameters, this.cancelToken);
                    break;
                case eDataObjectType.Table:
                    this.hubService.downloadTableData(this.table, false, this.selectQuery, this.inputColumns,
                        false, format, this.cancelToken);
                    break;
            }
        }
    }

    save() {
        if (this.view === 'properties') {
            this.authService.informationDialog('Cannot save', 'Select a chart or table view to save.');
            return;
        }

        this.authService.promptDialog('View Name', 'Enter a name for the view.').then(name => {
            let view = new DexihView();
            view.name = name;
            view.sourceType = this.viewSource;
            switch (this.viewSource) {
                case eDataObjectType.Datalink:
                    view.sourceDatalinkKey = this.key;
                    for (let datalinkParameter of this.parameters) {
                        let parameter = <DexihViewParameter> Object.assign({}, datalinkParameter);
                        parameter['datalinkParameterKey'] = datalinkParameter.key;
                        parameter.key = this.hubCache.getNextSequence();
                        view.parameters.push(parameter);
                      }
                    break;
                case eDataObjectType.Table:
                    view.sourceTableKey = this.key;
                    break;
            }
            view.viewType = this.view === 'chart' ? eViewType.Chart : eViewType.Table;
            view.selectQuery = this.selectQuery;
            view.chartConfig = this.chartConfig;
            view.inputValues = this.inputColumns;

            this.hubService.saveView(view).then(() => {
                this.hubService.addHubSuccessMessage(`The view ${view.name} was successfully saved.`);
            }).catch(() => {
                this.data = null;
            });
        });
    }
}
