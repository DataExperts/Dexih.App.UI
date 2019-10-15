import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../../+auth/auth.service';
import { HubService } from '../../../hub.service';
import { Subscription} from 'rxjs';
import { Location } from '@angular/common';
import { FormArray } from '@angular/forms';
import { HubFormsService } from '../../../hub.forms.service';
import { DexihConnection, DexihFileFormat, eTypeCode, DexihTable } from '../../../../shared/shared.models';
import { HubCache, formatTypes } from '../../../hub.models';
import { CancelToken } from '../../../../+auth/auth.models';

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

    public cancelToken: CancelToken = new CancelToken();

    constructor(private authService: AuthService,
        private hubService: HubService) {

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
        this.cancelToken.cancel();
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
        form.append('table', this.authService.JsonNoNulls(this.formService.currentForm.value));
        form.append('connectionKey', this.connection.key.toString());
        form.append('save', 'false');

        let remoteAgent = this.hubService.getRemoteAgentCurrent();

        this.authService.postFormRemoteGetKey('/api/Hub/ImportFileFormat', form, remoteAgent, this.cancelToken)
            .then(key => {
                this.authService.getRemoteData<DexihTable[]>(remoteAgent, key, this.cancelToken, 'download').then(importedTables => {
                    let importedTable = importedTables[0];
                    if (importedTable.entityStatus.lastStatus.toString() === 'Error') {
                        this.hubService.addHubErrorMessage(importedTable.entityStatus.message);
                    }

                    // importedTable.fileFormat = this.hubCache.getFileFormat(importedTable.fileFormatKey);

                    let tableColumnsForm = <FormArray>this.formService.currentForm.controls.dexihTableColumns;

                    // remove existing columns.
                    const count = tableColumnsForm.controls.length;
                    for (let i = 0; i <= count; i++) {
                        tableColumnsForm.removeAt(0);
                    }
                    importedTable.dexihTableColumns.filter(c => c.isValid).forEach(column => {
                        tableColumnsForm.push(this.formService.tableColumn(tableColumnsForm.value, column));
                    });
                });

        }).catch(reason => {
            if (reason) {
                this.hubService.addHubMessage(reason);
            } else {
                // tslint:disable-next-line:max-line-length
                this.hubService.addHubErrorMessage('The file upload failed.  This may be due to the file being too large, try making the sample file smaller (headings only) and upload again.')
            }
        });
    }
}
