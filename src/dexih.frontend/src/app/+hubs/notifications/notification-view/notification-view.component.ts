import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../../+auth/auth.service';
import { Message } from '../../../+auth/auth.models';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subscription, combineLatest} from 'rxjs';

@Component({
    selector: 'notification-view',
    templateUrl: './notification-view.component.html',
    styles: []
})
export class NotificationViewComponent implements OnInit, OnDestroy {

    private _subscription: Subscription;

    public message: Message;

    showPage = false;
    showPageMessage = 'Loading...';
    view: string;

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
                this.route.params,
            ).subscribe(result => {
                let params = result[0];

                let reference = params['reference'];

                this.showPage = false;
                this.showPageMessage = 'Loading...';

                this.message = this.authService.getNotification(reference);

                if (!this.message) {
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


