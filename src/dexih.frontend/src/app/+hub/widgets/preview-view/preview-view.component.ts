import { Component, OnInit, Input, OnDestroy, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { combineLatest, Subscription, Subject } from 'rxjs';
import { AuthService } from '../../../+auth/auth.service';
import { HubService } from '../../hub.service';
import { DexihInputParameter, DataCache, HubCache, PreviewResults } from '../../hub.models';
import { DexihActiveAgent, InputColumn, DexihColumnBase, DexihView, eViewType,
    eDownloadFormat, DownloadObject, eDataObjectType } from '../../../shared/shared.models';
import { CancelToken } from '../../../+auth/auth.models';

@Component({
    selector: 'preview-view',
    templateUrl: 'preview-view.component.html'
})

export class PreviewViewComponent implements OnInit, OnChanges, OnDestroy {
    @Input() parameters: DexihInputParameter[];
    @Input() viewKey: number
    @Input() data: DataCache;

    @Output() dataChange = new EventEmitter<DataCache>();

    private _subscription: Subscription;
    private _refreshDataSubscription: Subscription;

    private hubCache: HubCache;
    private remoteAgent: DexihActiveAgent;

    public action: string; // new or edit
    public pageTitle: string;
    public message: string;

    public inputColumns: InputColumn[];
    public tableColumns: DexihColumnBase[];

    public title: string;

    private firstLoad = true;
    private dialogOpen = false;

    public allowViewSave = false;

    public view: DexihView;
    public eViewType = eViewType


    public dataResult: PreviewResults;
    private cancelToken = new CancelToken();

    public dataRows = [];

    private refreshDataSubject: Subject<void> = new Subject<void>();
    
    constructor(
        private hubService: HubService,
        private authService: AuthService,
        ) {
    }

    ngOnInit() {
        try {
            this._subscription = combineLatest(
                this.hubService.getHubCacheObservable(),
                this.hubService.getRemoteAgentObservable()
            ).subscribe(result => {
                this.hubCache = result[0];
                this.remoteAgent = result[1];

                if (this.hubCache && this.hubCache.isLoaded()) {
                    // get the hub key from the route data, and update the service.

                    if (this.viewKey) {
                        this.view = this.hubCache.hub.dexihViews.find(c => c.key === this.viewKey);

                        if (!this.view) {
                            this.hubService.addHubErrorMessage('The view with the key ' + this.viewKey + 'was not found.');
                            this.authService.navigateUp();
                        }

                        if (this.data) {
                            this._refreshDataSubscription = this.data.data.subscribe(dataResult => {
                                if (!dataResult) {
                                    return;
                                }

                                this.dataResult = dataResult;

                                if (!dataResult.viewConfig.animateConfig) {
                                    this.dataRows = this.dataResult.data;
                                }

                                if (dataResult.status) {
                                    this.hubService.addHubMessage(dataResult.status, false, this.view.name);
                                }
                            });

                        } else if (this.remoteAgent) {
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
                    }
                }

            });
        } catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Datalink Preview');
        }
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (!this.hubCache || !this.hubCache.isLoaded()) {
            return;
        }

        if (changes.data) {
            if (this._refreshDataSubscription) { this._refreshDataSubscription.unsubscribe(); }
            this._refreshDataSubscription = this.data.data.subscribe(dataResult => {
                this.dataResult = dataResult;

                if (dataResult.status) {
                    this.hubService.addHubMessage(dataResult.status);
                }
            });
        }

        if (changes.viewKey) {
            this.view = this.hubCache.hub.dexihViews.find(c => c.key === this.viewKey);

            if (!this.view) {
                this.hubService.addHubErrorMessage('The view with the key ' + this.viewKey + 'was not found.');
                this.authService.navigateUp();
            }
        }
    }

    ngOnDestroy(): void {
        if (this._subscription) { this._subscription.unsubscribe(); }
        if (this._refreshDataSubscription) { this._refreshDataSubscription.unsubscribe(); }
        this.cancelToken.cancel();
    }

    parameterChange() {
        this.refresh();
    }

    close() {
        this.authService.navigateUp();
    }

    public refresh(url: string = null) {
        if (!this.data) {
            this.data = new DataCache();
            this.dataChange.emit(this.data);

            if (this._refreshDataSubscription) { this._refreshDataSubscription.unsubscribe(); }
            this._refreshDataSubscription = this.data.data.subscribe(dataResult => {
                this.dataResult = dataResult;
            });
        }

        if (!this.data.isRefreshing) {

            let previewQuery: Promise<PreviewResults>;

            if (url) {
                previewQuery = this.hubService.downloadUrlData(url, this.cancelToken);
            } else {
                previewQuery = this.hubService.previewViewKey(this.viewKey, this.inputColumns, this.parameters, this.cancelToken)
            }

            if (previewQuery) {
                this.data.refresh(previewQuery);
            }
        }
    }

    download(format: eDownloadFormat = eDownloadFormat.Csv) {
        if (this.view) {
            let downloadObject = new DownloadObject();
            downloadObject.objectKey = this.view.sourceType === eDataObjectType.Datalink ?
                this.view.sourceDatalinkKey : this.view.sourceTableKey;
            downloadObject.objectType = this.view.sourceType;
            this.hubService.downloadData([downloadObject], false, format, this.cancelToken)
        }
    }
}
