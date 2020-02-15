import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormArray } from '@angular/forms';
import { DatalinkEditService } from '../datalink-edit.service';
import { AuthService } from '../../../../+auth/auth.service';
import { HubCache } from '../../../hub.models';
import { HubService } from '../../../hub.service';
import { BehaviorSubject, Subscription, combineLatest} from 'rxjs';
import { eUpdateStrategy, DownloadObject, eSourceType, eDownloadFormat, eDataObjectType } from '../../../../shared/shared.models';
import { CancelToken } from '../../../../+auth/auth.models';

@Component({
    selector: 'datalink-save-button',
    templateUrl: './datalink-edit-save-button.component.html'
})

export class DatalinkEditSaveButtonComponent implements OnInit, OnDestroy {
    private _subscription: Subscription;
    private cancelToken: CancelToken = new CancelToken();

    datalinkForm: FormGroup;
    

    hubCache: HubCache;
    eUpdateStrategy = eUpdateStrategy;

    constructor(
        public hubService: HubService,
        public editDatalinkService: DatalinkEditService,
        public authService: AuthService,
        public router: Router,
        public route: ActivatedRoute
    ) { }

    ngOnInit() {

        try {
            this._subscription = combineLatest(
                this.editDatalinkService.hubFormsService.getCurrentFormObservable(),
                this.hubService.getHubCacheObservable(),
            ).subscribe(result => {
                this.datalinkForm = result[0];
                this.hubCache = result[1];
            });
        } catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'datalink save button');
        }
    }

    ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
        this.cancelToken.cancel();
    }

    async saveDatalink(saveAs = false) {
        this.editDatalinkService.savingDatalink.next(true);

        if (this.datalinkForm.controls.dexihDatalinkTargets.dirty) {
            let targets = <FormArray>this.datalinkForm.controls.dexihDatalinkTargets;
            let tables = targets.controls.map(c => {
                let target = <FormGroup>c;
                let table = target.controls.table;
                if (table) {
                    return table;
                }
            });

            let tableNames = tables.filter(c => c.value.key > 0 && c.dirty).map(c => c.value.name).join(', ');

            let doSave = async () => {
                for (let t of targets.controls) {
                    if (t.dirty) {
                        let target = <FormGroup>t;
                        let savedTable = await this.hubService.saveTables([target.controls.table.value]);
                        target.setControl('table', this.editDatalinkService.hubFormsService.tableForm(savedTable[0]));
                        target.controls.tableKey.setValue(savedTable[0].key);
                    }
                }

                this.editDatalinkService.hubFormsService.save(false, saveAs);
                this.editDatalinkService.savingDatalink.next(false);
            }

            // if no tables with key > 0 they are all new, so no need to prompt.
            if (tableNames.length === 0) {
                await doSave();
            } else {
            this.authService
                .confirmDialog(`Save Target Tables?`, `The existing target table(s)
                ${tableNames} have changed.
                This is a shared object, and may impact other dependencies if changed.
                Note, this will only save the metadata, use the 'Create Table' function to overwrite the physical table.`)
                .then(async (confirm) => {
                    if (confirm) {
                        await doSave();
                    }
                }).catch(() => this.editDatalinkService.savingDatalink.next(false))
            }
        } else {
            this.editDatalinkService.hubFormsService.save(false, saveAs);
            this.editDatalinkService.savingDatalink.next(false);
        }
    }

    preview() {
        const transformsArray = <FormArray>this.datalinkForm.controls.dexihDatalinkTransforms;
        let transforms = transformsArray.controls
//            .filter(c => c.value.transform.allowUserConfig)
            .sort((a, b) => b.value.position - a.value.position);

        if (transforms.length > 0) {
            this.router.navigate(['transforms/transform', transforms[0].value.key,
            'preview-transform-data'], { relativeTo: this.route });
        }
    }

    download() {
        if (this.datalinkForm.dirty) {
            this.authService.confirmDialog
                ('Save Datalink',
                    'The datalink must be saved before a data download task can be started.  Do you want to save the datalink?')
                .then(saveDatalink => {
                    if (saveDatalink) {
                        this.saveDatalink();
                        this.doDownload();
                    }
                })
        } else {
            this.doDownload();
        }
    }

    doDownload() {
        let downloadItems = new Array<DownloadObject>();
        let downloadObject = new DownloadObject();
        downloadObject.objectKey = this.datalinkForm.controls.key.value;
        downloadObject.objectType = eDataObjectType.Datalink;
        downloadItems.push(downloadObject);
        this.hubService.downloadData(downloadItems, true, eDownloadFormat.Csv, this.cancelToken)
    }

    cancel() {
        this.editDatalinkService.hubFormsService.cancel();
    }

    runDatalink(truncateTarget: boolean, resetIncremental: boolean) {
        if (this.editDatalinkService.hubFormsService.hasChanged) {
            this.authService.confirmDialog('Save Datalink', 'The datalink must be saved before running.  Would you like to save now?')
                .then(confirm => {
                    if (confirm) {
                        this.saveDatalink();
                        this.editDatalinkService.savingDatalink.toPromise().then(value => {
                            if (value) {
                                this.hubService
                                    .runDatalinks([this.datalinkForm.controls.key.value], truncateTarget, resetIncremental
                                        , null, null, null, this.cancelToken);
                            }
                        });
                    }
                });
        } else {
            this.hubService.runDatalinks([this.datalinkForm.controls.key.value], truncateTarget, resetIncremental,
                null, null, null, this.cancelToken);
        }
    }

    fixMappings() {
        this.editDatalinkService.fixMappings(this.datalinkForm);
    }
}

