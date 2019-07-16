import { LogFactory } from '../../../../logging';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SharedData, DexihColumnBase, InputColumn } from '../../../+hub/hub.models';
import { eObjectType, eDownloadFormat, SelectQuery } from '../../../+hub/hub.query.models';
import { AuthService } from '../../../+auth/auth.service';
import { Subscription, combineLatest} from 'rxjs';
import { DexihMessageComponent } from '../../../shared/ui/dexihMessage/index';
import { HubsService} from '../../hubs.service';

@Component({

    selector: 'preview-data',
    templateUrl: './preview-data.component.html'
})
export class PreviewDataComponent implements OnInit, OnDestroy {
    @ViewChild('DexihMessage', { static: true }) public dexihMessage: DexihMessageComponent;

    private _subscription: Subscription;


    public action: string; // new or edit
    public pageTitle: string;
    public message: string;

    public inputColumns: InputColumn[];
    public tableColumns: DexihColumnBase[];

    public name = 'loading...';


    objectKey: number;
    objectType: eObjectType;
    hubKey: number;

    columns: Array<any>;
    selectQuery: SelectQuery = new SelectQuery();

    public data: Array<any>;

    constructor(
        private authService: AuthService,
        private hubsService: HubsService,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        try {
            this._subscription = combineLatest(
                this.route.params,
                this.hubsService.getSharedDataIndex('', [], 50, false)
            ).subscribe(result => {
                let params = result[0];
                let items = result[1];

                this.hubKey = + params['hubKey'];
                this.objectType = + params['objectType'];
                this.objectKey = + params['objectKey'];

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
    }

    close() {
        this.authService.navigateUp();
    }

    refresh() {
        this.hubsService.previewDataUrl(this.hubKey, this.objectKey, this.objectType, this.inputColumns, this.selectQuery).then((url) => {
            this.hubsService.previewData(url).then((result) => {
            this.columns = result.columns;
            this.data = result.data;
            this.name = result.name;
            }).catch(reason => {
                this.dexihMessage.addMessage(reason);
                this.data = [];
                this.name = 'failed';
            });
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

        this.hubsService.downloadData([sharedData], true, format).then(() => {
            this.dexihMessage.addSuccessMessage('The download task has started.');
        }).catch(reason => {
            this.dexihMessage.addMessage(reason);
        });
    }
}
