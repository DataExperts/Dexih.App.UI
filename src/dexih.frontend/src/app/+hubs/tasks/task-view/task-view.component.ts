import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../../+auth/auth.service';
import { ManagedTask, eTaskStatus } from '../../../+auth/auth.models';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subscription, combineLatest} from 'rxjs';

@Component({
    selector: 'task-view',
    templateUrl: './task-view.component.html',
    styles: []
})
export class TaskViewComponent implements OnInit, OnDestroy {

    private _subscription: Subscription;

    public task: ManagedTask;

    showPage = false;
    showPageMessage = 'Loading...';
    view: string;

    eTaskStatus = eTaskStatus;

    public exceptionHidden = true;

    resultChartData: Array<any>;

    constructor(
        private authService: AuthService,
        private router: Router,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.watchChanges();

        try {
            this._subscription = combineLatest(
                this.route.data,
                this.route.params,
                this.authService.getTasksObservable(),
            ).subscribe(result => {
                let data = result[0];
                let params = result[1];
                let tasks = result[2];

                let reference = params['reference'];

                this.showPage = false;
                this.showPageMessage = 'Loading...';

                this.task = tasks.find(c => c.reference === reference);

                if (!this.task) {
                    this.authService.navigateUp();
                }

            });
        } catch (e) {
        }


    }

    ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
    }

    close() {
        this.authService.navigateUp();
    }

    watchChanges() {
    }

}


