import { Component, OnInit, OnDestroy } from '@angular/core';
import { HubService } from '../../hub.service';
import { AuthService } from '../../../+auth/auth.service';
import { Subscription, combineLatest} from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'table-preview-data',
    templateUrl: './table-preview-data.component.html'
})
export class TablePreviewDataComponent implements OnInit, OnDestroy {
    private _subscription: Subscription;

    public key: number;

    public action: string; // new or edit
    public pageTitle: string;
    public message: string;

    public title = 'Preview Table';

    constructor(
        private hubService: HubService,
        private authService: AuthService,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        try {
            this._subscription = combineLatest(
                this.route.params,
            ).subscribe(result => {
                let params = result[0];
                this.key = +params['tableKey'];
            });
        } catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Table Preview Data');
        }
    }

    ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
    }

    close() {
        this.authService.navigateUp();
    }
}
