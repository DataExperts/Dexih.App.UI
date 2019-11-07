import { Component, OnDestroy, OnInit, ViewChild, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../+auth/auth.service';
import { Subscription, combineLatest} from 'rxjs';
import { DexihMessageComponent } from '../../../shared/ui/dexihMessage/index';
import { HubsService} from '../../hubs.service';
import { CancelToken } from '../../../+auth/auth.models';
import { InputColumn, DexihColumnBase, SelectQuery, eDownloadFormat, SharedData, eDataObjectType, ChartConfig } from '../../../shared/shared.models';

@Component({

    selector: 'preview-data',
    templateUrl: './preview-data.component.html'
})
export class PreviewDataComponent implements OnInit, OnDestroy {
    @Input() public objectType: eDataObjectType;
    @Input() public objectKey: number;
    @Input() public hubKey: number;
    @Input() public showToolbar = false;

    @ViewChild('DexihMessage', { static: true }) public dexihMessage: DexihMessageComponent;


    private _subscription: Subscription;


    public action: string; // new or edit
    public pageTitle: string;
    public message: string;

    public inputColumns: InputColumn[];
    public tableColumns: DexihColumnBase[];

    public name = 'loading...';

    columns: Array<any>;
    selectQuery: SelectQuery = new SelectQuery();

    public data: Array<any>;
    public chartConfig: ChartConfig;
    public showChart = false;

    private cancelToken = new CancelToken();

    constructor(
        private authService: AuthService,
        private hubsService: HubsService,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        try {
            this._subscription = combineLatest(
                this.hubsService.getSharedDataIndex('', [], 50, false)
            ).subscribe(result => {
                let items = result[0];

                this.selectQuery.rows = 100;

                let object = items.find(c => c.hubKey === this.hubKey
                        && c.objectKey === this.objectKey && c.objectType === this.objectType );

                if (object != null) {
                    this.inputColumns = object.inputColumns;
                    this.tableColumns = object.outputColumns;
                }

                this.refresh();
            });
        } catch (e) {
            this.dexihMessage.addMessage(e);
        }
    }

    ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
        this.cancelToken.cancel();
    }

    close() {
        this.authService.navigateUp();
    }

    refresh() {
        this.hubsService.previewData(this.hubKey, this.objectKey, this.objectType, this.inputColumns, this.selectQuery,
            this.cancelToken).then((result) => {
                this.columns = result.columns;
                this.data = result.data;
                this.name = result.name;
                this.chartConfig = result.chartConfig;
                if (this.chartConfig) {
                    this.showChart = true;
                } else {
                    this.showChart = false;
                }
            }).catch(reason => {
                this.dexihMessage.addMessage(reason);
                this.data = [];
                this.name = 'failed';
            });
    }

    downloadData(format: eDownloadFormat) {
        let sharedData = new SharedData();
        sharedData.objectKey = this.objectKey;
        sharedData.objectType = this.objectType;
        sharedData.hubKey = this.hubKey;
        sharedData.inputColumns = this.inputColumns;
        sharedData.query = this.selectQuery;

        this.hubsService.downloadData([sharedData], true, format, this.cancelToken).then(() => {
            this.dexihMessage.addSuccessMessage('The download task has started.');
        }).catch(reason => {
            this.dexihMessage.addMessage(reason);
        });
    }
}
