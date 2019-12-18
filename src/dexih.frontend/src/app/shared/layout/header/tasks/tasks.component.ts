import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../../../+auth/auth.service';
import { Observable, Subscription} from 'rxjs';
import { Router } from '@angular/router';
import { ManagedTask, eManagedTaskStatus, eManagedTaskStatusItems } from '../../../shared.models';

@Component({
    selector: 'dexih-tasks',
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit, OnDestroy {
    private _tasksSubscription: Subscription;

    count: number;
    lastUpdate: any;
    active: boolean;
    activities: any;
    loading: boolean;
    tasksRunning = false;

    eManagedTaskStatus = eManagedTaskStatus;
    eManagedTaskStatusItems = eManagedTaskStatusItems

    tasks: Observable<Array<ManagedTask>>;

    constructor(
        private authService: AuthService,
        private router: Router
    ) {
        this.active = false;
        this.loading = false;
        this.activities = [];
        this.count = 0;
        this.lastUpdate = new Date();
    }

    ngOnInit() {
        this.tasks = this.authService.getTasksObservable();

        this._tasksSubscription = this.tasks.subscribe(tasks => {
            this.count = tasks.length;
            this.tasksRunning = tasks.findIndex(c => c.status === eManagedTaskStatus.Created
                || c.status === eManagedTaskStatus.Queued
                || c.status === eManagedTaskStatus.Running) >= 0;
        });
    }

    ngOnDestroy() {
        if (this._tasksSubscription) { this._tasksSubscription.unsubscribe(); }
        if (this._tasksSubscription) { this._tasksSubscription.unsubscribe(); }
    }

    update() {
        this.loading = true;
        setTimeout(() => {
            this.lastUpdate = new Date()
            this.loading = false
        }, 1000)
    }

    showTask(item: ManagedTask) {
        this.router.navigate(['/hubs/tasks/view', item.taskId])
      }

    cancelTask() {
        // TBC
        alert('cancel task not completed.');
    }

}
