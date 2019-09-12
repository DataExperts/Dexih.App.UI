import { Component, OnInit, OnDestroy } from '@angular/core';
import { HubCache } from '../../../hub.models';
import { HubService } from '../../../hub.service';
import { AuthService } from '../../../../+auth/auth.service';
import { DatalinkEditService } from '../datalink-edit.service';
import { Subscription, combineLatest} from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({

    selector: 'datalink-preview-data',
    templateUrl: './preview-data.component.html'
})
export class PreviewDataComponent implements OnInit, OnDestroy {
    private _subscription: Subscription;

    public datalinkForm: FormGroup;
    public datalinkTransformForm: FormGroup;

    private hubCache: HubCache;
    public action: string; // new or edit
    public pageTitle: string;
    public message: string;


    public error: string;

    datalinkTransformKey: number;

    constructor(
        private hubService: HubService,
        private authService: AuthService,
        private editDatalinkService: DatalinkEditService,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        try {
            this._subscription = combineLatest(
                this.route.data,
                this.route.params,
                this.hubService.getHubCacheObservable(),
                this.hubService.getRemoteAgentObservable(),
                this.editDatalinkService.hubFormsService.getCurrentFormObservable()
            ).subscribe(result => {
                let data = result[0];
                let params = result[1];
                this.hubCache = result[2];
                this.datalinkForm = result[4];

                this.action = data['action'];
                this.pageTitle = data['pageTitle'];

                // load the cache first
                if (this.hubCache.isLoaded()) {
                    // get the hub key from the route data, and update the service.
                    this.datalinkTransformKey = + params['datalinkTransformKey'];
                }
            });
        } catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Preview Transform DAta');
        }
    }

    ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
    }

    close() {
        this.authService.navigateUp();
    }

}
