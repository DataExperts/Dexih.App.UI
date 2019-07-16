import { Component, OnInit, OnDestroy } from '@angular/core';
import { DexihTable, InputColumn, DexihView, ChartConfig, eViewType, eSourceType } from '../../../hub.models';
import { HubService } from '../../../hub.service';
import { AuthService } from '../../../../+auth/auth.service';
import { Subscription, combineLatest} from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { HubFormsService } from '../../../hub.forms.service';
import { SelectQuery, eDownloadFormat } from '../../../hub.query.models';

@Component({

    selector: 'table-edit-preview-data',
    templateUrl: './table-edit-preview-data.component.html'
})
export class TableEditPreviewDataComponent implements OnInit, OnDestroy {
    private _subscription: Subscription;

    public table: DexihTable;
    public action: string; // new or edit
    public pageTitle: string;
    public message: string;

    public showChart = false;
    public rows = 100;
    datalinkTransformKey: number;

    columns: Array<any>;
    data: Array<any>;

    inputColumns: InputColumn[];
    selectQuery: SelectQuery = new SelectQuery();
    chartConfig: ChartConfig = new ChartConfig();

    isRefreshing = false;

    constructor(
        public formsService: HubFormsService,
        private hubService: HubService,
        private authService: AuthService,
        private route: ActivatedRoute) {

    }

    ngOnInit() {
        try {
            this._subscription = combineLatest(
                this.route.data,
                this.hubService.getHubCacheObservable(),
                this.formsService.getCurrentFormObservable(),
            ).subscribe(result => {
                let data = result[0];
                let tableForm = result[2];

                this.action = data['action'];
                this.pageTitle = data['pageTitle'];

                if (tableForm) {
                    this.table = tableForm.value;
                    this.inputColumns = this.table.dexihTableColumns.filter(c => c.isInput).map(c => {
                            return  {datalinkKey: 0, datalinkName: null,
                                name: c.name, logicalName: c.logicalName, dataType: c.dataType, rank: c.rank, value: c.defaultValue};
                        }
                    );

                    this.refresh();
                }

            });
        } catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Table Edit Preview');
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
            this.hubService.previewTableData(this.table, false, this.selectQuery, this.inputColumns).then((result) => {
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
        this.hubService.downloadTableData(this.table, false, this.selectQuery, this.inputColumns, false, format);
    }
}
