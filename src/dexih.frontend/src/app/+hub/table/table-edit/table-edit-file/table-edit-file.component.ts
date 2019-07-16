import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DexihConnection, DexihTable, DexihFileFormat, HubCache, eStatus, formatTypes } from '../../../hub.models';
import { AuthService } from '../../../../+auth/auth.service';
import { HubService } from '../../../hub.service';
import { Subscription ,  Observable, combineLatest} from 'rxjs';
import { Location } from '@angular/common';
import { Message, FileHandler } from '../../../../+auth/auth.models';
import { FormGroup, FormArray } from '@angular/forms';
import { HubFormsService } from '../../../hub.forms.service';
import { eTypeCode } from '../../../hub.remote.models';

@Component({

    selector: 'dexih-table-edit-file',
    templateUrl: './table-edit-file.component.html'
})
export class TableEditFileComponent implements OnInit, OnDestroy {
    @Input() public connection: DexihConnection;
    @Input() public formService: HubFormsService;

    public hasBaseDropZoneOver = false;

    public updatingTable = false;

    private _subscription: Subscription;
    public hubCache: HubCache;
    public fileFormats: DexihFileFormat[];

    filesSubdirectory: string;

    formatTypes = formatTypes;
    eTypeCode = eTypeCode;

    constructor(private authService: AuthService,
        private hubService: HubService,
        private route: ActivatedRoute,
        private router: Router,
        private location: Location) {

    }

    ngOnInit() {
        // let XSRFToken = this.authService.getXSRFToken();
        // this.uploader = new FileUploader({
        //     url: '/api/Hub/ImportFileFormat',
        //     headers: [{
        //         name: 'X-XSRF-TOKEN',
        //         value: XSRFToken
        //     }],
        // });

        try {
            this._subscription = this.hubService.getHubCacheObservable().subscribe(result => {
                this.hubCache = result;
            });
        } catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Table Edit File');
        }


    }

    ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
    }

    public filesDrop(files: any) {
        this.doImport(files[0]);
    }

    public uploadFile(event) {
        let files = event.srcElement.files;
        this.doImport(files[0]);
    }

    public doImport(file: File) {

        if (this.formService.currentForm.value.fileFormat) {
            this.formService.currentForm.value.fileFormatKey = this.formService.currentForm.value.fileFormat.fileFormatKey;
        }

        if (file.size > 100000) {
            if (file.type === 'text/csv' || file.type === 'text/plain') {
                file = new File([file.slice(0, 100000) ], file.name);
            } else {
                // tslint:disable-next-line:max-line-length
                this.hubService.addHubErrorMessage(`The file size ${file.size}b exceeded the maximum of 100,000b.  Submit a smaller sample file, or a plain text file (which will be trimmed automatically) to proceed.`);
                return;
            }
        }

        const form: FormData = new FormData();
        form.append('file', file, file.name);
        form.append('hubKey', this.hubCache.hub.hubKey.toString());
        form.append('table', JSON.stringify(this.formService.currentForm.value));
        form.append('connectionKey', this.connection.key.toString());
        form.append('remoteAgentId', this.hubService.getCurrentRemoteAgentInstanceId());
        form.append('save', 'false');

        this.authService.postForm('/api/Hub/ImportFileFormat', form).then(result => {
            if (result.success) {
                let importedTable: DexihTable = result.value;
                if (importedTable.entityStatus.lastStatus.toString() === 'Error') {
                    this.hubService.addHubErrorMessage(importedTable.entityStatus.message);
                }

                importedTable.fileFormat = this.hubCache.getFileFormat(importedTable.fileFormatKey);

                let tableColumnsForm = <FormArray>this.formService.currentForm.controls.dexihTableColumns;

                // remove existing columns.
                const count = tableColumnsForm.controls.length;
                for (let i = 0; i <= count; i++) {
                    tableColumnsForm.removeAt(0);
                }
                importedTable.dexihTableColumns.filter(c => c.isValid).forEach(column => {
                    tableColumnsForm.push(this.formService.tableColumn(tableColumnsForm.value, column));
                });


                // let columnsArray = <FormArray>this.formService.currentForm.controls.dexihTableColumns;
                // columnsArray.setValue(tableColumnsForm.value);
            } else {
                this.hubService.addHubMessage(result);
            }
        }).catch(reason => {
            if (reason) {
                this.hubService.addHubMessage(reason);
            } else {
                // tslint:disable-next-line:max-line-length
                this.hubService.addHubErrorMessage('The file upload failed.  This may be due to the file being too large, try making the sample file smaller (headings only) and upload again.')
            }
        });
    }

    // importTable() {
    //     let tableColumnsForm = <FormArray>this.formService.currentForm.controls.dexihTableColumns;
    //     if (tableColumnsForm.length > 0) {
    //         this.authService.confirmDialog('Warning: Reloading Columns',
    //             'The following action will review the provided file and will remove and reload all columns.  Do you want to continue?')
    //             .then((result) => {
    //                 this.uploader.uploadAll();
    //             }).catch();
    //     } else {
    //         this.uploader.uploadAll();
    //     }
    // }
}
