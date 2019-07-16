import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../../../+auth/auth.service';
import { ManagedTask, eTaskStatus, Message } from '../../../../+auth/auth.models';
import { Observable, Subscription} from 'rxjs';
import { Router } from '@angular/router';

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

    eTaskStatus = eTaskStatus;

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
            this.tasksRunning = tasks.findIndex(c => c.status === eTaskStatus.Created
                || c.status === eTaskStatus.Queued
                || c.status === eTaskStatus.Running) >= 0;
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

    showTask(item) {
        this.router.navigate(['/hubs/tasks/view', item.reference])
      }

    cancelTask() {
        // TBC
        alert('cancel task not completed.');
    }

}
