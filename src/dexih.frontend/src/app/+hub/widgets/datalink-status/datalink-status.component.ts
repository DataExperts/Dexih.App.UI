import { Component, Input, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { HubService } from '../../hub.service';
import { Subscription} from 'rxjs';
import { eTaskStatus } from '../../../+auth/auth.models';
import { Functions } from '../../../shared/utils/functions';
import { AuthService } from '../../../+auth/auth.service';
import { TransformWriterResult, eRunStatus } from '../../../shared/shared.models';
import { runStatus } from '../../hub.models';

@Component({
    selector: 'datalink-status',
    templateUrl: './datalink-status.component.html'
})
export class DatalinkStatusComponent implements OnInit, OnDestroy {
    @Input() public datalinkKey: number;
    @Input() public datalinkTestKey: number;
    @Input() public datajobKey: number;
    @Input() public tableKey: number;
    @Input() public writerResult: TransformWriterResult;

    @Output() public progressClick = new EventEmitter();

    private _hubCacheSubscription: Subscription;
    private _currentStatusSubscription: Subscription;
    private _previousStatusSubscription: Subscription;

    private dataObject: any;

    eTaskStatus = eTaskStatus;
    runStatus = runStatus;

    public currentWriterResult: TransformWriterResult;
    public currentStatus: StatusInfo;
    public previousStatus: StatusInfo;

    public showCancel = false;

    constructor(private hubService: HubService, private authService: AuthService) {
    }

    ngOnInit() {
        if (this.writerResult) {
            this.previousStatus = this.getStatus(this.writerResult);
        } else {
            this._hubCacheSubscription = this.hubService.getHubCacheObservable().subscribe(cache => {
                if (!cache.isLoaded()) { return; }

                if (this.datalinkKey) {
                    this.dataObject = cache.hub.dexihDatalinks.find(c => c.key === this.datalinkKey);
                } else if (this.datajobKey) {
                    this.dataObject = cache.hub.dexihDatajobs.find(c => c.key === this.datajobKey);
                } else if (this.datalinkTestKey) {
                    this.dataObject = cache.hub.dexihDatalinkTests.find(c => c.key === this.datalinkTestKey);
                } else if (this.tableKey) {
                    this.dataObject = cache.getTable(this.tableKey);
                }

                if (this.dataObject) {
                    if (this._currentStatusSubscription) { this._currentStatusSubscription.unsubscribe(); }
                    this._currentStatusSubscription = this.dataObject.currentStatus.subscribe(writerResult => {
                        this.currentWriterResult = writerResult;
                        if (writerResult) {
                            this.currentStatus = this.getStatus(writerResult);
                        } else {
                            this.currentStatus = null;
                        }

                    });
                    if (this._previousStatusSubscription) { this._previousStatusSubscription.unsubscribe(); }
                    this._previousStatusSubscription = this.dataObject.previousStatus.subscribe(previousStatus => {
                        if (previousStatus) {
                            this.previousStatus = this.getStatus(previousStatus);
                        } else {
                            this.previousStatus = null;
                        }
                    });
                }
            });
        }
    }

    ngOnDestroy() {
        if (this._hubCacheSubscription) { this._hubCacheSubscription.unsubscribe(); }
        if (this._currentStatusSubscription) { this._currentStatusSubscription.unsubscribe(); }
        if (this._previousStatusSubscription) { this._previousStatusSubscription.unsubscribe(); }
    }

    getStatus(writerResult: TransformWriterResult): StatusInfo {
        const statusInfo = new StatusInfo();

        if (! writerResult) {
            statusInfo.message = 'not running';
            statusInfo.percentage = 0;
            statusInfo.statusType = 'info';
            statusInfo.error = '';
        } else {
            statusInfo.writerResult = writerResult;

            // calculate the percentage complete.
            let value: number;
            switch (writerResult.runStatus) {
                case eRunStatus.Running:
                case eRunStatus.RunningErrors:
                    // use last row count to calculate percentage
                    if (writerResult.lastRowTotal > 0) {
                        value = 100 * (writerResult.rowsTotal / writerResult.lastRowTotal);
                        if (value >= 100) {
                            value = 99; // if it exceeds 100 leave it on 99%
                        }
                    } else {
                        value = 50; // no last rows count, then use 50%.
                    }
                    this.showCancel = true;
                    break;
                case eRunStatus.Abended:
                case eRunStatus.Cancelled:
                case eRunStatus.Finished:
                case eRunStatus.FinishedErrors:
                case eRunStatus.Passed:
                case eRunStatus.Failed:
                    value = 100;
                    this.showCancel = false;
                    break;
                case eRunStatus.NotRunning:
                    value = 0;
                    this.showCancel = false;
                    break;
                case eRunStatus.Initialised:
                case eRunStatus.Scheduled:
                case eRunStatus.Started:
                    value = 0;
                    this.showCancel = true;
                    break;
            }

            statusInfo.percentage = value;

            // update the type, which is used for the colour of the progress
            switch (writerResult.runStatus) {
                case eRunStatus.Abended:
                case eRunStatus.Cancelled:
                case eRunStatus.FinishedErrors:
                case eRunStatus.RunningErrors:
                case eRunStatus.Failed:
                    statusInfo.statusType = 'danger';
                    break;
                case eRunStatus.Initialised:
                case eRunStatus.NotRunning:
                case eRunStatus.Running:
                case eRunStatus.Scheduled:
                case eRunStatus.Started:
                    statusInfo.statusType = 'primary';
                    break;
                case eRunStatus.Finished:
                case eRunStatus.Passed:
                    statusInfo.statusType = 'success';
                    break;
            }

            // update the type, which is used for the colour of the progress
            switch (writerResult.runStatus) {
                case eRunStatus.Abended:
                case eRunStatus.Failed:
                case eRunStatus.FinishedErrors:
                    statusInfo.iconClass = 'fa fa-ban text-danger'
                    break;
                case eRunStatus.Cancelled:
                    statusInfo.iconClass = 'fa fa-ban text-warning'
                    break;
                case eRunStatus.RunningErrors:
                    statusInfo.iconClass = 'fa fa-cogs text-danger'
                    break;
                case eRunStatus.Initialised:
                    statusInfo.iconClass = 'fa fa-circle text-success'
                    break;
                case eRunStatus.NotRunning:
                    statusInfo.iconClass = 'fa fa-square'
                    break;
                case eRunStatus.Running:
                    statusInfo.iconClass = 'fa fa-cogs text-success'
                    break;
                case eRunStatus.Scheduled:
                    statusInfo.iconClass = 'fa fa-calendar text-success'
                    break;
                case eRunStatus.Started:
                    statusInfo.iconClass = 'fa fa-cog text-success'
                    break;
                case eRunStatus.Finished:
                case eRunStatus.Passed:
                    statusInfo.iconClass = 'fa fa-square text-success'
                    break;
            }

            // update the message and error
            const status = this.runStatus.find(c => c.key === writerResult.runStatus).name;
            // tslint:disable-next-line:max-line-length
            statusInfo.message = `(read: ${Functions.numberWithCommas(writerResult.rowsReadPrimary)}, written: ${Functions.numberWithCommas(writerResult.rowsTotal)}) ${status}`;

            statusInfo.error = writerResult.message;
        }
        return statusInfo;
    }

    cancelled() {
        if (this.datalinkKey) {
            this.hubService.cancelDatalinks([this.datalinkKey]);
        } else if (this.datajobKey) {
            this.hubService.deactivateDatajobs([this.datajobKey]);
        }
}

    onProgressClick($event: any) {
        if (!this.writerResult.auditConnectionKey) {
            this.authService.informationDialog('No audit connection',
            'The selected audit item is attached to a datalink/datajob that does not have an Audit Connection specified. ' +
            'To view detailed results, specify a audit connection.')
        }
        this.progressClick.emit($event);
    }

}

class StatusInfo {
    public writerResult: TransformWriterResult;
    public percentage;
    public message;
    public statusType;
    public error;
    public iconClass;
}
