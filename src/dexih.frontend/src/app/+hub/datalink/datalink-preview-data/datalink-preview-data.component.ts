import { Component, OnInit, OnDestroy } from '@angular/core';
import { HubService } from '../../hub.service';
import { AuthService } from '../../../+auth/auth.service';
import { Subscription, combineLatest} from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({

    selector: 'datalink-preview-data',
    templateUrl: './datalink-preview-data.component.html'
})
export class DatalinkPreviewDataComponent implements OnInit, OnDestroy {
    private _subscription: Subscription;

    public key: number;

    public action: string; // new or edit
    public pageTitle: string;
    public message: string;

    constructor(
        private hubService: HubService,
        private authService: AuthService,
        private route: ActivatedRoute) {

    }

    ngOnInit() {
        try {
            this._subscription = combineLatest(
                this.route.data,
                this.route.params,
            ).subscribe(result => {
                let data = result[0];
                let params = result[1];

                this.action = data['action'];
                this.pageTitle = data['pageTitle'];
                this.key = +params['datalinkKey'];
            });
        } catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Datalink Preview');
        }
    }

    ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
    }

    close() {
        this.authService.navigateUp();
    }

}
