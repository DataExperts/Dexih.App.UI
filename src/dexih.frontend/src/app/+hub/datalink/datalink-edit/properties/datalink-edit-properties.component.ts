import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DexihDatalink, HubCache, eConnectionPurpose, datalinkTypes } from '../../../hub.models';
import { HubService } from '../../../hub.service';
import { AuthService } from '../../../../+auth/auth.service';
import { DatalinkEditService } from '../datalink-edit.service';
import { Observable, Subscription, combineLatest} from 'rxjs';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'dexih-datalink-edit-properties-form',
    templateUrl: './datalink-edit-properties.component.html'
})
export class DatalinkEditPropertiesComponent implements OnInit, OnDestroy {
    public datalinkForm: FormGroup;

    private hubCache: HubCache;
    public pageTitle: string;
    public message: string;

    private _subscription: Subscription;

    public eConnectionPurpose = eConnectionPurpose;
    datalinkTypes = datalinkTypes;

    constructor(
        private hubService: HubService,
        private authService: AuthService,
        public editDatalinkService: DatalinkEditService,
        private route: ActivatedRoute,
        private router: Router) {
    }

    ngOnInit() {
        try {
            this._subscription = combineLatest(
                this.route.data,
                this.route.params,
                this.hubService.getHubCacheObservable(),
                this.editDatalinkService.hubFormsService.getCurrentFormObservable()
            ).subscribe(result => {
                this.pageTitle = result[0]['pageTitle'];
                this.hubCache = result[2];
                this.datalinkForm = result[3];
            });
        } catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Datalink Properties');
        }
    }

    ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
    }


}
