import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ManagedTask, eTaskStatus } from '../../../+auth/auth.models';
import { HubService } from '../../../+hub/hub.service';
import { AuthService } from '../../../+auth/auth.service';
import { Observable, BehaviorSubject, Subscription, combineLatest} from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { HubsService } from '../../hubs.service';

@Component({
    selector: 'task-status',
    templateUrl: './task-status.component.html'
})
export class TaskStatusComponent implements OnInit, OnDestroy {
    @Input() public task: ManagedTask;

    private dataObject: any;
    public currentStatus: StatusInfo;

    constructor(private hubService: HubService, private hubsService: HubsService,
        private router: Router) {
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
                case eTaskStatus.Error:
                case eTaskStatus.Cancelled:
                    statusInfo.statusType = 'danger';
                    statusInfo.canCancel = false;
                    break;
                case eTaskStatus.Created:
                case eTaskStatus.Running:
                case eTaskStatus.Scheduled:
                case eTaskStatus.Queued:
                    statusInfo.statusType = 'primary';
                    statusInfo.canCancel = true;
                    break;
                case eTaskStatus.Completed:
                    statusInfo.statusType = 'success';
                    statusInfo.canCancel = false;
                    break;
            }

            // update the type, which is used for the colour of the progress
            switch (task.status) {
                case eTaskStatus.Error:
                    statusInfo.iconClass = 'fa fa-ban text-danger'
                    break;
                case eTaskStatus.Cancelled:
                    statusInfo.iconClass = 'fa fa-ban text-warning'
                    break;
                case eTaskStatus.Created:
                    statusInfo.iconClass = 'fa fa-circle text-success'
                    break;
                case eTaskStatus.Queued:
                    statusInfo.iconClass = 'fa fa-square'
                    break;
                case eTaskStatus.Running:
                    statusInfo.iconClass = 'fa fa-cogs text-success'
                    break;
                case eTaskStatus.Scheduled:
                    statusInfo.iconClass = 'fa fa-calendar text-success'
                    break;
                case eTaskStatus.Created:
                    statusInfo.iconClass = 'fa fa-cog text-success'
                    break;
                case eTaskStatus.Completed:
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
