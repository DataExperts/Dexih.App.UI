import { Component, OnDestroy, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../../+auth/auth.service';
import { Subscription, combineLatest, Subject} from 'rxjs';
import { DexihMessageComponent } from '../../../../shared/ui/dexihMessage/index';
import { CancelToken, Message } from '../../../../+auth/auth.models';
import { InputColumn, DexihColumnBase, SelectQuery, eDownloadFormat, SharedData, eDataObjectType,
    ViewConfig, InputParameterBase, eViewType } from '../../../shared.models';

@Component({

    selector: 'preview-data',
    templateUrl: './preview-data.component.html',
})
export class PreviewDataComponent implements OnInit, OnDestroy {
    @Input() public objectType: eDataObjectType;
    @Input() public objectKey: number;
    @Input() public hubKey: number;
    @Input() parentParameters: InputParameterBase[]; // parameters passed from parent
    @Input() public showToolbar = false;
    @Input() isMaximized = false;
    @Output() onMaximize = new EventEmitter<boolean>();

    private _subscription: Subscription;

    private refreshDataSubject: Subject<void> = new Subject<void>();
    
    public action: string; // new or edit
    public pageTitle: string;
    public message: string;

    public inputColumns: InputColumn[];
    public tableColumns: DexihColumnBase[];
    public userParameters: InputParameterBase[]; // parameters that can be edited by user
    public parameters: InputParameterBase[]; // combined parameters

    public name = 'loading...';

    columns: Array<any>;
    selectQuery: SelectQuery = new SelectQuery();

    public baseData: Array<any>;
    public data: Array<any>;
    public viewConfig: ViewConfig;
    public showChart = false;

    public eViewType = eViewType;

    private cancelToken = new CancelToken();

    constructor(
        private authService: AuthService) {
    }

    ngOnInit() {
        try {
            this._subscription = combineLatest(
                this.authService.getSharedDataObject(this.hubKey, this.objectType, this.objectKey)
            ).subscribe(result => {
                let object = result[0];

                if (object != null) {
                    this.inputColumns = object.inputColumns;
                    this.tableColumns = object.outputColumns;
                    this.parameters = object.parameters;
                    this.userParameters = this.parameters;
                } else {
                    this.parameters = [];
                }

                if (this.parentParameters) {
                    this.parameters = this.parameters.concat(this.parentParameters);
                }

                this.refresh();
            });
        } catch (e) {
            this.authService.addUpdateNotification(e, false);
        }
    }

    ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
        this.cancelToken.cancel();
    }

    close() {
        this.authService.navigateUp();
    }

    public parameterChange() {
        this.refresh();
    }

    public refresh() {
        this.authService.previewData(this.hubKey, this.objectKey, this.objectType, this.inputColumns, this.selectQuery,
            this.parameters, this.cancelToken).then((result) => {
                this.refreshDataSubject.next();
                this.columns = result.columns;
                this.baseData = result.data;
                this.name = result.name;
                this.viewConfig = result.viewConfig;
                if (!this.viewConfig) {
                    this.data = this.baseData;
                }
                if (this.viewConfig && this.viewConfig.viewType === eViewType.Chart) {
                    this.showChart = true;
                } else {
                    this.showChart = false;
                }

                if (result.status) {
                    // this.dexihMessage.addMessage(result.status);
                    this.authService.addUpdateNotification(result.status, false);
                }
            }).catch(reason => {
                this.authService.addUpdateNotification(reason, false);
                this.baseData = [];
                this.data = [];
                this.name = 'failed';
            });
    }

    public downloadData(format: eDownloadFormat) {
        let sharedData = new SharedData();
        sharedData.objectKey = this.objectKey;
        sharedData.objectType = this.objectType;
        sharedData.hubKey = this.hubKey;
        sharedData.inputColumns = this.inputColumns;
        sharedData.parameters = this.parameters;
        sharedData.query = this.selectQuery;

        this.authService.downloadData([sharedData], true, format, this.cancelToken).then(() => {
            let message = new Message(true, 'The download task has started.', null, null);
            this.authService.addUpdateNotification(message, false);
        }).catch(reason => {
            this.authService.addUpdateNotification(reason, false);
        });
    }

    public maximize() {
        this.isMaximized = true;
        this.onMaximize.emit(true);
    }

    public minimize() {
        this.isMaximized = false;
        this.onMaximize.emit(false);
    }

}
