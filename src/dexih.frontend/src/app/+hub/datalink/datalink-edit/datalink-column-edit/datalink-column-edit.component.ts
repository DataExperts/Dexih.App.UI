import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
    DexihDatalinkColumn, HubCache, deltaTypes, securityFlags, eParameterDirection,
} from '../../../hub.models';
import { AuthService } from '../../../../+auth/auth.service';
import { HubService } from '../../../hub.service';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Subscription ,  combineLatest} from 'rxjs';
import { HubFormsService } from '../../../hub.forms.service';
import { DatalinkEditService } from '../datalink-edit.service';
import { TypeCodes, eTypeCode } from '../../../hub.remote.models';

@Component({
    selector: 'datalink-column-edit',
    templateUrl: './datalink-column-edit.component.html',
})
export class DatalinkColumnEditComponent implements OnInit, OnChanges, OnDestroy {
    private _subscription: Subscription;

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
    }

    // searches the datalink and transforms for a column
    findColumn(): FormGroup {
        // look for column in source table
        let columnsArray = <FormArray>this.sourceDatalinkTableForm.controls.dexihDatalinkColumns;
        let column = <FormGroup> columnsArray.controls.find(c => c.value.key === this.datalinkColumnKey);
        if (column) { return column; }

        // look for column as transform outputs
        let transformForms = <FormArray>this.editDatalinkService.hubFormsService.currentForm
            .controls.dexihDatalinkTransforms;

        transformForms.controls.forEach(t => {
            let datalinkTransformForm = <FormGroup>t
            let items = <FormArray>datalinkTransformForm.controls.dexihDatalinkTransformItems;
            items.controls.forEach(i => {
                if (!column) {
                    let itemForm = <FormGroup>i;
                    if (itemForm.controls.targetDatalinkColumn.value &&
                        itemForm.controls.targetDatalinkColumn.value.key === this.datalinkColumnKey) {
                        column = <FormGroup> itemForm.controls.targetDatalinkColumn;
                    }

                    if (!column) {
                        columnsArray = <FormArray> itemForm.controls.dexihFunctionParameters;
                        let parameter = <FormGroup> columnsArray.controls.find(c =>
                            c.value.direction = eParameterDirection.Output &&
                            c.value.datalinkColumn &&
                            c.value.datalinkColumn.key === this.datalinkColumnKey
                        );
                        if (parameter) {
                            column = <FormGroup> parameter.controls.datalinkColumn;
                        }
                        if (!column) {
                            columnsArray.controls.forEach(c => {
                                let arrayParameters = <FormArray> (<FormGroup> c).controls.arrayParameters;
                                if (arrayParameters) {
                                    parameter = <FormGroup> arrayParameters.controls.find(p =>
                                        p.value.direction = eParameterDirection.Output &&
                                        p.value.datalinkColumn &&
                                        p.value.datalinkColumn.key === this.datalinkColumnKey
                                    );
                                    if (parameter) {
                                        column = <FormGroup> parameter.controls.datalinkColumn;
                                    }
                                }
                            });
                        }
                    }
                }
            });
        });

        return column;
    }

    initializeForm() {
        let columnForm: FormGroup;

        if (this.datalinkColumnKey) {
            this.originalColumnForm = this.findColumn();
            if (!this.originalColumnForm) {
                this.authService.navigateUp();
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
