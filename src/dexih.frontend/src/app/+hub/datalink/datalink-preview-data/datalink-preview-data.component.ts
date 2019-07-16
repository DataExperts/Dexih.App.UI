import { Component, OnInit, OnDestroy } from '@angular/core';
import { HubCache, eCacheStatus, DexihColumnBase, DexihDatalinkTransform,
    InputColumn, DexihView, eViewType, ChartConfig, eSourceType } from '../../hub.models';
import { DownloadObject, eObjectType, eDownloadFormat, SelectQuery } from '../../hub.query.models';
import { HubService } from '../../hub.service';
import { AuthService } from '../../../+auth/auth.service';
import { Subscription, combineLatest} from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { InputOutputColumns } from '../../hub.lineage.models';

@Component({

    selector: 'datalink-preview-data',
    templateUrl: './datalink-preview-data.component.html'
})
export class DatalinkPreviewDataComponent implements OnInit, OnDestroy {
    private _subscription: Subscription;

    private datalinkKey: number;
    private hubCache: HubCache;

    public action: string; // new or edit
    public pageTitle: string;
    public message: string;

    public showChart = false;
    public chartConfig = new ChartConfig();

    public inputColumns: InputColumn[];
    public tableColumns: DexihColumnBase[];
    selectQuery: SelectQuery = new SelectQuery();

    public csvFileName: string;
    public title = 'Preview Table';

    datalinkTransformKey: number;

    columns: Array<any>;
    public data: Array<any>;

    isRefreshing = false;

    constructor(
        private hubService: HubService,
        private authService: AuthService,
        private route: ActivatedRoute) {

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
                    // get the hub key from the route data, and update the service.

                    this.datalinkKey = +params['datalinkKey'];

                    const datalink = this.hubCache.hub.dexihDatalinks.find(c => c.key === this.datalinkKey);

                    this.inputColumns = datalink.sourceDatalinkTable.dexihDatalinkColumns.filter(c => c.isInput).map(c => {
                        return  {datalinkKey: this.datalinkKey, datalinkName: datalink.name,
                            name: c.name, logicalName: c.logicalName, dataType: c.dataType, rank: c.rank, value: c.defaultValue};
                    }

                );

                    // get the outputs from the last transform in the datalink
                    const ioColumns = new InputOutputColumns();
                    ioColumns.buildInputOutput(this.hubCache, datalink);
                    this.tableColumns = ioColumns.getDatalinkOutputColumns(datalink);

                    this.csvFileName = datalink.name + '.csv';
                    this.title = 'Preview Datalink: ' + datalink.name;

                    if (remoteAgent) {
                        this.refresh();
                    } else {
                        this.hubService.addHubErrorMessage('Can not preview data without a remote agent connected');
                    }
                }
            });
        } catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Datalink Preview');
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
            this.hubService.previewDatalinkKeyData(this.datalinkKey, this.selectQuery, this.inputColumns).then((result) => {
                this.columns = result.columns;
                this.data = result.data;
                this.isRefreshing = false;
            }).catch(() => {
                this.data = [];
                this.isRefreshing = false;
            });
        }
    }

    download(format: eDownloadFormat = eDownloadFormat.Csv) {
        let downloadObject = new DownloadObject();
        downloadObject.objectKey = this.datalinkKey;
        downloadObject.objectType = eObjectType.Datalink;
        this.hubService.downloadData([downloadObject], false, format)
    }

    save() {
        this.authService.promptDialog('View Name', 'Enter a name for the view.').then(name => {
            let view = new DexihView();
            view.name = name;
            view.sourceType = eSourceType.Datalink;
            view.sourceDatalinkKey = this.datalinkKey;
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
}
