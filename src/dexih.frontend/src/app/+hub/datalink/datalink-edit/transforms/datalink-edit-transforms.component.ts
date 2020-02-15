import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { HubService } from '../../../hub.service';
import { DatalinkEditService } from '../datalink-edit.service';
import { Observable, Subscription, combineLatest} from 'rxjs';
import { AuthService } from '../../../../+auth/auth.service';
import { FormGroup, FormArray, AbstractControl } from '@angular/forms';
import { LogFactory, eLogLevel } from '../../../../../logging';
import { transformTypes } from '../../../hub.remote.models';
import { HubCache } from '../../../hub.models';
import { DexihDatalinkTransform, eTransformType } from '../../../../shared/shared.models';

@Component({

    selector: 'dexih-datalink-edit-transforms-form',
    templateUrl: './datalink-edit-transforms.component.html',
    styleUrls: ['./transforms.scss']
})
export class DatalinkEditTransformsComponent implements OnInit, OnDestroy {
    public datalinkForm: FormGroup;

    private _subscription: Subscription;
    private _transformsChange: Subscription;

    private hubCache: HubCache;
    public action: string; // new or edit
    public pageTitle = 'Transform';
    public message: string;

    public datalinkTransforms: {transform: DexihDatalinkTransform, icon: string}[];

    public logger = new LogFactory('datalink-edit-transforms');


    constructor(
        private hubService: HubService,
        private authService: AuthService,
        private editDatalinkService: DatalinkEditService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        this.logger.LogC(() => `OnInit`, eLogLevel.Trace);

        try {
            this._subscription = combineLatest(
                this.route.data,
                this.route.params,
                this.hubService.getHubCacheObservable(),
                this.editDatalinkService.hubFormsService.getCurrentFormObservable(),
                this.hubService.getRemoteLibrariesObservable()
            ).subscribe(result => {
                this.action = result[0]['action'];
                this.pageTitle = result[0]['pageTitle'];
                let params = result[1];
                this.hubCache = result[2];
                this.datalinkForm = result[3];

                if (this.hubCache.isLoaded() && this.datalinkForm) {
                    let datalinkTransformKey = + params['datalinkTransformKey'];

                    this.logger.LogC(() => `loading transform with key ${datalinkTransformKey}`, eLogLevel.Trace);

                    this.refreshTransforms();

                    if (this._transformsChange) { this._transformsChange.unsubscribe(); }
                    this._transformsChange = this.datalinkForm.controls.dexihDatalinkTransforms.valueChanges
                        .subscribe(() => this.refreshTransforms());
                }


            });
        } catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Datalink Edit Transform');
        }


    }

    ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
        if (this._transformsChange) { this._transformsChange.unsubscribe(); }
    }

    refreshTransforms() {
        const transformsArray = <FormArray> this.datalinkForm.controls.dexihDatalinkTransforms;
        let transforms =  transformsArray.controls
            .filter(c => c.value.transformType !== eTransformType.Validation &&
                c.value.transformType !== eTransformType.Profile)
            .sort((a, b) => a.value.position - b.value.position);

        let datalinkTransforms = [];
        transforms.forEach(transform => {
            let type = transformTypes.find(c => c.key === transform.value.transformType);
            let icon = '';
            if (type) {
                icon = type.icon
            }
            let name = this.hubCache.getTransformName(transform.value);
            datalinkTransforms.push({transform: transform, icon: icon, name: name});
        });

        this.datalinkTransforms = datalinkTransforms;
    }

    deleteTransform(datalinkTransform: DexihDatalinkTransform) {
        this.logger.LogC(() => `deleteTransform`, eLogLevel.Trace);
        this.editDatalinkService.deleteDatalinkTransform(datalinkTransform).then(result => {
            this.refreshTransforms();
        });
    }

    previewData(datalinkTransform: DexihDatalinkTransform) {
        this.router.navigate(['transform', datalinkTransform.key,
            'preview-transform-data'], { relativeTo: this.route });
    }
}
