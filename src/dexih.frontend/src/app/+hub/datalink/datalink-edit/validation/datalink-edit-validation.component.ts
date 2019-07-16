import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
    DexihDatalink, DexihDatalinkTransform, DexihDatalinkTransformItem, DexihTable, DexihTableColumn, HubCache,
    eDatalinkTransformItemType,
    eCacheStatus
}
    from '../../../hub.models';
import { HubService } from '../../../hub.service';
import { DatalinkEditService } from '../datalink-edit.service';
import { Observable, Subscription, combineLatest} from 'rxjs';
import { AuthService } from '../../../../+auth/auth.service';
import { FormGroup, FormArray } from '@angular/forms';
import { RemoteLibraries, eTransformType } from '../../../hub.remote.models';

@Component({

    selector: 'dexih-datalink-edit-validation-form',
    templateUrl: './datalink-edit-validation.component.html',
})
export class DatalinkEditValidationComponent implements OnInit, OnDestroy {
    public datalinkForm: FormGroup;
    public datalinkTransformForm: FormGroup;

    private _subscription: Subscription;

    private hubCache: HubCache;
    private remoteLibraries: RemoteLibraries;
    public action: string; // new or edit
    public pageTitle = 'Validation';
    public message: string;

    public showName = false;
    public showDescription = false;

    public inputColumns: Array<DexihTable>;
    public outputColumns: Array<DexihTableColumn>;

    constructor(
        private hubService: HubService,
        private authService: AuthService,
        private editDatalinkService: DatalinkEditService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {

        try {
            this._subscription = combineLatest(
                this.route.data,
                this.hubService.getHubCacheObservable(),
                this.editDatalinkService.hubFormsService.getCurrentFormObservable(),
                this.hubService.getRemoteLibrariesObservable()
            ).subscribe(result => {
                this.pageTitle = result[0]['pageTitle'];
                this.hubCache = result[1];
                this.datalinkForm = result[2];
                this.remoteLibraries = result[3];

                if (this.hubCache.isLoaded() && this.datalinkForm) {
                    this.datalinkTransformForm = this.editDatalinkService.getValidationTransform();
                }

            });
        } catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Datalink Edit Validation');
        }
    }

    ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
    }

    enableValidation() {
        let transform = this.remoteLibraries.transforms.find(c => c.transformType === eTransformType.Validation);
        this.datalinkTransformForm = this.editDatalinkService.insertDatalinkTransform(1, transform);
    }

    disableValidation() {
        this.editDatalinkService.deleteDatalinkTransform(this.datalinkTransformForm.value);
        this.datalinkTransformForm = null;
    }
}
