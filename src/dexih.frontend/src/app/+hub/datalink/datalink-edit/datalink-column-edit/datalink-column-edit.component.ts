import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HubCache, deltaTypes, securityFlags, } from '../../../hub.models';
import { AuthService } from '../../../../+auth/auth.service';
import { HubService } from '../../../hub.service';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Subscription ,  combineLatest} from 'rxjs';
import { HubFormsService } from '../../../hub.forms.service';
import { DatalinkEditService } from '../datalink-edit.service';
import { TypeCodes } from '../../../hub.remote.models';
import { eTypeCode, eParameterDirection, DexihDatalinkColumn } from '../../../../shared/shared.models';

@Component({
    selector: 'datalink-column-edit',
    templateUrl: './datalink-column-edit.component.html',
})
export class DatalinkColumnEditComponent implements OnInit, OnChanges, OnDestroy {
    private _subscription: Subscription;
    private _saveSubscription: Subscription;

    private hubCache: HubCache;
    public pageTitle: string;
    public action: string;

    public datalinkColumnKey: number;

    public errorMessage: string;
    public successMessage: string;
    public savingTable: boolean;

    public newColumnForm: FormGroup;
    private sourceDatalinkTableForm: FormGroup;

    eTypeCode = eTypeCode;
    typeCodes = TypeCodes;
    deltaTypes = deltaTypes;
    securityFlags = securityFlags;

    public columnFormService: HubFormsService;
    private originalColumnForm: FormGroup;

    constructor(
        private authService: AuthService,
        private hubService: HubService,
        private editDatalinkService: DatalinkEditService,
        fb: FormBuilder,
        private route: ActivatedRoute,
    ) {

        // create a separate formService instance to manage the copied form
        this.columnFormService = new HubFormsService(fb, hubService, authService);
    }

    ngOnInit() {

        try {
            this._subscription = combineLatest(
                this.route.params,
                this.hubService.getHubCacheObservable(),
            ).subscribe(result => {
                this.pageTitle = result[0]['pageTitle'];
                this.datalinkColumnKey = + result[0]['datalinkColumnKey'];
                this.hubCache = result[1];

                this.sourceDatalinkTableForm = <FormGroup>this.editDatalinkService.hubFormsService.currentForm
                .controls.sourceDatalinkTable;

                this.initializeForm();
            });

            if (this._saveSubscription) { this._saveSubscription.unsubscribe(); }
            this._saveSubscription = this.editDatalinkService.savingDatalink.subscribe(value => {
                if(value) {
                    this.applyExit();
                }
            });
        } catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Datalink column edit');
        }
    }

    ngOnChanges() {
        if (this.hubCache) {
            this.initializeForm();
        }
    }

    ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
        if (this._saveSubscription) { this._saveSubscription.unsubscribe(); }
    }



    initializeForm() {
        let columnForm: FormGroup;

        if (this.datalinkColumnKey) {
            this.originalColumnForm = this.editDatalinkService.findColumn(this.datalinkColumnKey);
            if (!this.originalColumnForm) {
                this.authService.informationDialog('Cannot Edit', 'The selected column could not be edited.').then(() => {
                    this.authService.navigateUp();
                });

                return;
            }
            columnForm = this.columnFormService.datalinkTableColumn(null, this.originalColumnForm.value);
        } else {
            let column = new DexihDatalinkColumn();
            column.key = this.hubCache.getNextSequence();
            column.datalinkTableKey = this.sourceDatalinkTableForm.controls.key.value;
            let columnsArray = <DexihDatalinkColumn[]>this.sourceDatalinkTableForm.controls.dexihDatalinkColumns.value;
            let maxPos = 1;
            columnsArray.forEach(col => {
                if (col.position > maxPos) { maxPos = col.position; }
            })
            column.position = maxPos + 1;
            columnForm = this.columnFormService.datalinkTableColumn(columnsArray, column);
        }
        this.columnFormService.startForm(columnForm);
    }

    cancel() {
        this.authService.navigateUp();
    }

    applyExit() {
        const columnForm = this.columnFormService.currentForm;

        // if no originalColumn, then add it to the source columns.
        if (!this.originalColumnForm) {
            let columnsArray = <FormArray>this.sourceDatalinkTableForm.controls.dexihDatalinkColumns;
            columnsArray.push(columnForm);
        } else {
            this.originalColumnForm.setValue(columnForm.value);
        }

        this.sourceDatalinkTableForm.markAsDirty();
        this.authService.navigateUp();
    }
}
