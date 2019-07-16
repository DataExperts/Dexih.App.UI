import { Component, Input, Output, OnInit, OnChanges, OnDestroy, EventEmitter } from '@angular/core';
import { HubCache, DexihDatalink, DexihTable, eCacheStatus, DexihColumnBase, DexihDatalinkTable, InputColumn } from '../../../hub.models';
import { HubService } from '../../../hub.service';
import { AuthService } from '../../../../+auth/auth.service';
import { DatalinkEditService } from '../datalink-edit.service';
import { Observable, Subscription, BehaviorSubject, combineLatest} from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormArray } from '@angular/forms';
import { SelectQuery, DownloadObject, eDownloadFormat } from '../../../hub.query.models';

@Component({

    selector: 'preview-data',
    templateUrl: './preview-data.component.html'
})
export class PreviewDataComponent implements OnInit, OnDestroy {
    private _subscription: Subscription;

    public datalinkForm: FormGroup;
    public datalinkTransformForm: FormGroup;

    private hubCache: HubCache;
    public action: string; // new or edit
    public pageTitle: string;
    public message: string;

    public showChart = false;

    public error: string;

    private firstLoad = true;
    private dialogOpen = false;

    public inputColumns: InputColumn[];
    public tableColumns: DexihColumnBase[];
    selectQuery: SelectQuery = new SelectQuery();

    datalinkTransformKey: number;

    columns: Array<any>;

    data: Array<any>;

    isRefreshing = false;
    eDownloadFormat = eDownloadFormat;

    constructor(
        private hubService: HubService,
        private authService: AuthService,
        private editDatalinkService: DatalinkEditService,
        private route: ActivatedRoute,
        private router: Router,
        private location: Location) {
    }

    ngOnInit() {
        try {
            this._subscription = combineLatest(
                this.route.data,
                this.route.params,
                this.hubService.getHubCacheObservable(),
                this.hubService.getRemoteAgentObservable(),
                this.editDatalinkService.hubFormsService.getCurrentFormObservable()
            ).subscribe(result => {
                let data = result[0];
                let params = result[1];
                this.hubCache = result[2];
                let remoteAgent = result[3];
                this.datalinkForm = result[4];

                this.action = data['action'];
                this.pageTitle = data['pageTitle'];

                // load the cache first
                if (this.hubCache.isLoaded()) {
                    // get the hub key from the route data, and update the service.
                    this.datalinkTransformKey = + params['datalinkTransformKey'];

                    if (this.datalinkForm) {
                        let transformsArray = (<FormArray>this.datalinkForm.controls.dexihDatalinkTransforms);

                        this.datalinkTransformForm = <FormGroup>transformsArray.controls
                            .find(c => c.value.datalinkTransformKey === this.datalinkTransformKey);

                        if (!this.datalinkTransformForm) {
                            this.authService.navigateUp();
                        }

                        this.tableColumns = this.datalinkTransformForm.controls.runTime.value.transformColumns;
                        let sourceTable = <DexihDatalinkTable> this.datalinkForm.controls.sourceDatalinkTable.value;
                        this.inputColumns = sourceTable.dexihDatalinkColumns.filter(c => c.isInput).map(c => {
                            return  {datalinkKey: <number>this.datalinkForm.controls.key.value,
                                datalinkName: this.datalinkForm.controls.name.value, name: c.name,
                                logicalName: c.logicalName, dataType: c.dataType, rank: c.rank, value: c.defaultValue};
                        });

                        this.route.snapshot.data['pageTitle'] =
                            'Preview Data: ' + this.datalinkTransformForm.value.name;

                        if (remoteAgent) {
                            if (!this.firstLoad) {
                                if (!this.dialogOpen) {
                                    this.dialogOpen = true;
                                    this.authService.confirmDialog('Remote Agent Available',
                                        'A remote agent is available, would you like to refresh the data?').then(confirm => {
                                            if (confirm) {
                                                this.refresh();
                                            }
                                            this.dialogOpen = false;
                                        });
                                }
                            } else {
                                this.refresh();
                            }
                        }

                        this.firstLoad = false;
                    }
                }
            });
        } catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Edit Custom Function');
        }
    }

    ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
    }

    close() {
        this.authService.navigateUp();
    }

    download(format: eDownloadFormat) {
        let datalink = this.datalinkForm.value;

        this.hubService.downloadDatalinkData(datalink, this.datalinkTransformKey, this.selectQuery,
            this.inputColumns, false, format);
    }

    refresh() {
        if (!this.isRefreshing) {
            this.isRefreshing = true;
            this.columns = null;
            this.data = null;

            this.editDatalinkService.previewTransformData(this.datalinkTransformKey, this.selectQuery, this.inputColumns).then((result) => {
                this.data = result.data;
                this.columns = result.columns;
                this.error = null;
                this.isRefreshing = false;
            }).catch(reason => {
                this.error = `The preview data could not be loaded due to: ${reason.message}`;
                this.data = [];
                this.isRefreshing = false;
            });
        }
    }
}
