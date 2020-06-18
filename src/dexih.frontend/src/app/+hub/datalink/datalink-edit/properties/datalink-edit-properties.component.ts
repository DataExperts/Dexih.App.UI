import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HubService } from '../../../hub.service';
import { DatalinkEditService } from '../datalink-edit.service';
import { Subscription, combineLatest} from 'rxjs';
import { FormGroup } from '@angular/forms';
import { eConnectionPurpose, eDatalinkTypeItems, eAlertLevelItems, eAlertLevel } from '../../../../shared/shared.models';

@Component({
    selector: 'dexih-datalink-edit-properties-form',
    templateUrl: './datalink-edit-properties.component.html'
})
export class DatalinkEditPropertiesComponent implements OnInit, OnDestroy {
    public datalinkForm: FormGroup;

    public pageTitle: string;
    public message: string;

    private _subscription: Subscription;

    public eConnectionPurpose = eConnectionPurpose;
    eDatalinkTypeItems = eDatalinkTypeItems.filter(c => c.key > 0);

    public eAlertLevelItems = eAlertLevelItems;
    public eAlertLevel = eAlertLevel;

    constructor(
        private hubService: HubService,
        public editDatalinkService: DatalinkEditService,
        private route: ActivatedRoute) {
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
