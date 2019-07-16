import { Component, OnInit, OnDestroy } from '@angular/core';
import { HubCache, DexihTable, eFlatFilePath, eCacheStatus,
    InputColumn, DexihView, eSourceType, eViewType, ChartConfig } from '../../hub.models';
import { DownloadObject, eObjectType, eDownloadFormat, SelectQuery } from '../../hub.query.models';
import { HubService } from '../../hub.service';
import { AuthService } from '../../../+auth/auth.service';
import { Subscription, combineLatest} from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({

    selector: 'table-preview-data',
    templateUrl: './table-preview-data.component.html'
})
export class TablePreviewDataComponent implements OnInit, OnDestroy {
    private _subscription: Subscription;

    private tableKey: number;
    private hubCache: HubCache;

    public action: string; // new or edit
    public pageTitle: string;
    public message: string;

    public rows = 100;
    public table: DexihTable;
    public csvFileName: string;
    public title = 'Preview Table';

    public showChart = false;

    public fileName: string;
    public path: eFlatFilePath;

    datalinkTransformKey: number;

    public inputColumns: InputColumn[];

    columns: Array<any>;
    selectQuery: SelectQuery = new SelectQuery();
    chartConfig: ChartConfig = new ChartConfig();

    public data: Array<any>;

    public isRefreshing = false;
    private firstLoad = true;
    private dialogOpen = false;

    constructor(
        private hubService: HubService,
        private authService: AuthService,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        try {
            this._subscription = combineLatest(
                this.route.params,
                this.hubService.getHubCacheObservable(),
                this.hubService.getRemoteAgentObservable(),
            ).subscribe(result => {
                let params = result[0];
                this.hubCache = result[1];
                let remoteAgent = result[2];

                if (this.hubCache.isLoaded()) {
                    this.tableKey = +params['tableKey'];
                    this.selectQuery.fileName = params['fileName'];
                    this.selectQuery.path = params['path'];

                    this.table = this.hubCache.getTable(this.tableKey);

                    this.csvFileName = this.table.name + '.csv';
                    this.title = 'Preview Table: ' + this.table.name;

                    this.inputColumns = this.table.dexihTableColumns.filter(c => c.isInput).map(c => {
                        return  {datalinkKey: 0, datalinkName: null,
                            name: c.name, logicalName: c.logicalName, dataType: c.dataType, rank: c.rank, value: c.defaultValue};
                        }
                    );

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

                    this.firstLoad = false;
                }
            });
        } catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Table Preview Data');
        }
    }

    ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
    }

    close() {
        this.authService.navigateUp();
    }

    refresh() {
        if (!this.isRefreshing) {
            this.isRefreshing = true;
            this.hubService.previewTableKeyData(this.tableKey, false, this.selectQuery, this.inputColumns).then((result) => {
                this.columns = result.columns;
                this.data = result.data;
                this.isRefreshing = false;
            }).catch(() => {
                    this.data = [];
                    this.isRefreshing = false;
                });
        }
    }

    download(format: eDownloadFormat) {
        let downloadObject = new DownloadObject();
        downloadObject.objectKey = this.tableKey;
        downloadObject.objectType = eObjectType.Table;
        downloadObject.query = this.selectQuery;
        this.hubService.downloadData([downloadObject], false, format)
    }

    save() {
        this.authService.promptDialog('View Name', 'Enter a name for the view.').then(name => {
            let view = new DexihView();
            view.name = name;
            view.sourceType = eSourceType.Table;
            view.sourceTableKey = this.table.key;
            view.viewType = this.showChart ? eViewType.Chart : eViewType.Table;
            view.selectQuery = this.selectQuery;
            view.chartConfig = this.chartConfig;
            view.inputValues = this.inputColumns;

            this.hubService.saveView(view).then(() => {
            }).catch(() => {
                this.data = null;
            });
        });
    }

    toggleChart() {
        this.showChart = !this.showChart;
    }
}
