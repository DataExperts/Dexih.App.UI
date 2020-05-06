import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../../+auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, BehaviorSubject, Subscription, combineLatest} from 'rxjs';
import { ManagedTask, eManagedTaskStatus } from '../../../shared/shared.models';

@Component({
  selector: 'tasks-index',
  templateUrl: './tasks-index.component.html',
  styles: []
})
export class TasksIndexComponent implements OnInit, OnDestroy {

    private _subscription: Subscription;

    showPage = false;
    showPageMessage = 'Loading...';

    columns = [
        { name: 'hub', title: 'Hub', format: ''},
        { name: 'task.category', title: 'Category', format: ''},
        { name: 'task.status', title: 'Status', format: 'Enum', enum: eManagedTaskStatus},
        { name: 'task.stepName', title: 'Current Step', format: ''},
        { name: 'task.name', title: 'Name', format: ''},
        { name: 'task.lastUpdate', title: 'Last Modified', format: 'Calendar'},
    ];

    private _tableData = new BehaviorSubject<Array<any>>(null);
    tableData: Observable<Array<any>> = this._tableData.asObservable();

    constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this._subscription = combineLatest(
            this.route.data,
            this.route.params,
            this.authService.getHubsObservable(),
            this.authService.getTasksObservable()
        ).subscribe(result => {
            let hubs = result[2];
            let tasks = result[3];

            let data = [];

            tasks.forEach(task => {
                let hub = hubs.find(c => c.hubKey === task.referenceKey);
                data.push({
                    hub: hub ? hub.name : 'Unknown hub',
                    task: task
                })
            })
            this._tableData.next(data);

        });

    }

    ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
    }


    showTask(task: ManagedTask) {
        this.router.navigate(['view', task.taskId], {relativeTo: this.route})
    }

    close() {
        this.authService.navigateUp();
    }
}


