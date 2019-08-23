import { Component, OnInit, Input, OnDestroy, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { eViewType, InputColumn, DexihColumnBase, HubCache, DexihView,
    eViewSource, PreviewResults, DexihInputParameter, DataCache } from '../../hub.models';
import { combineLatest, Subscription } from 'rxjs';
import { AuthService } from '../../../+auth/auth.service';
import { HubService } from '../../hub.service';
import { eDownloadFormat, DownloadObject } from '../../hub.query.models';
import { DexihActiveAgent } from '../../../+auth/auth.models';

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
    private _resizeSubscription: Subscription;
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

    public width: number;
    public height: number;

    public dataResult: PreviewResults;

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
                                this.dataResult = dataResult;
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
        if (this._resizeSubscription) { this._resizeSubscription.unsubscribe(); }
        if (this._refreshDataSubscription) { this._refreshDataSubscription.unsubscribe(); }
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
                previewQuery = this.hubService.downloadUrlData(url);
            } else {
                previewQuery = this.hubService.previewView(this.view, this.inputColumns, this.parameters)
            }

            if (previewQuery) {
                this.data.refresh(previewQuery);
            }
        }
    }

    download(format: eDownloadFormat = eDownloadFormat.Csv) {
        if (this.view) {
            let downloadObject = new DownloadObject();
            downloadObject.objectKey = this.view.sourceType === eViewSource.Datalink ?
                this.view.sourceDatalinkKey : this.view.sourceTableKey;
            downloadObject.objectType = this.view.sourceType;
            this.hubService.downloadData([downloadObject], false, format)
        }
    }
}
