import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DexihDatalink, HubCache } from '../../../hub.models';
import { HubService } from '../../../hub.service';
import { AuthService } from '../../../../+auth/auth.service';
import { DatalinkEditService } from '../datalink-edit.service';
import { Observable, Subscription, combineLatest} from 'rxjs';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'dexih-datalink-run-plan',
    templateUrl: './datalink-run-plan.component.html'
})
export class DatalinkRunPlanComponent implements OnInit, OnDestroy {
    public datalinkForm: FormGroup;

    private hubCache: HubCache;
    public pageTitle: string;
    public message: string;

    private _subscription: Subscription;

    public allowSave = false;

    constructor(
        private hubService: HubService,
        private authService: AuthService,
        private editDatalinkService: DatalinkEditService,
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
            this.hubService.addHubClientErrorMessage(e, 'Datalink Run Plan');
        }

    }

    ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
    }

}
