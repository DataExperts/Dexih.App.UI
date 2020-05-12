import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { HubsService } from '../../hubs.service';
import { ManagedTask, eManagedTaskStatus } from '../../../shared/shared.models';

@Component({
    selector: 'task-status',
    templateUrl: './task-status.component.html'
})
export class TaskStatusComponent implements OnInit, OnDestroy {
    @Input() public task: ManagedTask;

    public currentStatus: StatusInfo;

    constructor(private hubsService: HubsService) {
    }

    ngOnInit() {
        this.currentStatus = this.getStatus(this.task);
    }

    ngOnDestroy() {
    }

    getStatus(task: ManagedTask): StatusInfo {
        const statusInfo = new StatusInfo();

        if (!task) {
            statusInfo.message = 'not running';
            statusInfo.percentage = 0;
            statusInfo.statusType = 'info';
            statusInfo.error = '';
        } else {
            statusInfo.percentage = task.percentage;

            // update the type, which is used for the colour of the progress
            switch (task.status) {
                case eManagedTaskStatus.Error:
                case eManagedTaskStatus.Cancelled:
                    statusInfo.statusType = 'danger';
                    statusInfo.canCancel = false;
                    break;
                case eManagedTaskStatus.Created:
                case eManagedTaskStatus.Running:
                case eManagedTaskStatus.Scheduled:
                case eManagedTaskStatus.Queued:
                    statusInfo.statusType = 'primary';
                    statusInfo.canCancel = true;
                    break;
                case eManagedTaskStatus.Completed:
                    statusInfo.statusType = 'success';
                    statusInfo.canCancel = false;
                    break;
            }

            // update the type, which is used for the colour of the progress
            switch (task.status) {
                case eManagedTaskStatus.Error:
                    statusInfo.iconClass = 'fa fa-ban text-danger'
                    break;
                case eManagedTaskStatus.Cancelled:
                    statusInfo.iconClass = 'fa fa-ban text-warning'
                    break;
                case eManagedTaskStatus.Created:
                    statusInfo.iconClass = 'fa fa-circle text-success'
                    break;
                case eManagedTaskStatus.Queued:
                    statusInfo.iconClass = 'fa fa-square'
                    break;
                case eManagedTaskStatus.Running:
                    statusInfo.iconClass = 'fa fa-cogs text-success'
                    break;
                case eManagedTaskStatus.Scheduled:
                    statusInfo.iconClass = 'fa fa-calendar text-success'
                    break;
                case eManagedTaskStatus.Created:
                    statusInfo.iconClass = 'fa fa-cog text-success'
                    break;
                case eManagedTaskStatus.Completed:
                    statusInfo.iconClass = 'fa fa-square text-success'
                    break;
            }

            // update the message and error
            statusInfo.message = task.message;
            statusInfo.error = task.message;
        }
        return statusInfo;
    }

    cancelled() {
        if (this.task) {
            this.hubsService.cancelTasks([this.task]);
        }
    }
}

class StatusInfo {
    public percentage;
    public message;
    public statusType;
    public error;
    public iconClass;
    public canCancel: boolean;
}
