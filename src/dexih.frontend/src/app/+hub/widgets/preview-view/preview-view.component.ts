import { Component, OnInit, Input, OnDestroy, OnChanges, SimpleChanges, EventEmitter, Output } from '@angular/core';
import { eViewType, InputColumn, DexihColumnBase, ChartConfig,
    HubCache, DexihView, eViewSource, PreviewResults, DexihTable, DexihDatalink, eSourceType, DexihInputParameter } from '../../hub.models';
import { combineLatest, Subscription } from 'rxjs';
import { AuthService } from '../../../+auth/auth.service';
import { HubService } from '../../hub.service';
import { SelectQuery, eDownloadFormat, DownloadObject } from '../../hub.query.models';
import { InputOutputColumns } from '../../hub.lineage.models';
import { DexihRemoteAgent, DexihActiveAgent } from '../../../+auth/auth.models';

@Component({
    selector: 'preview-view',
    templateUrl: 'preview-view.component.html'
})

export class PreviewViewComponent implements OnInit, OnChanges, OnDestroy {
    @Input() parameters: DexihInputParameter[];
    @Input() viewKey: number
    @Input() resizeEvent: EventEmitter<any[]>;
    @Input() refreshData: EventEmitter<string> = null;

    public resizeEvent2 = new EventEmitter<any[]>();

    private _subscription: Subscription;
    private _resizeSubscription: Subscription;
    private _refreshDataSubscription: Subscription;

    private hubCache: HubCache;
    private remoteAgent: DexihActiveAgent;

    public action: string; // new or edit
    public pageTitle: string;
    public message: string;

    public transformProperties = null;

    public inputColumns: InputColumn[];
    public tableColumns: DexihColumnBase[];

    public title: string;

    columns: Array<any>;
    public data: Array<any>;

    public isRefreshing = false;
    private firstLoad = true;
    private dialogOpen = false;

    public allowViewSave = false;

    public view: DexihView;
    public eViewType = eViewType

    public width: number;
    public height: number;

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
                            throw('The view with the key ' + this.viewKey + 'was not found.');
                            this.authService.navigateUp();
                        }

                        if (this.refreshData) {
                            this._refreshDataSubscription = this.refreshData.subscribe(url => {
                                if (url) {
                                    this.refresh(url);
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

        this._resizeSubscription = this.resizeEvent.subscribe((value: any[]) => {
            if (value && value.length > 1) {
                this.width = value[0];
                this.height = value[1];
            }
        });
    }

    ngOnChanges(changes: SimpleChanges): void {
        // this.update();
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
        if (!this.isRefreshing) {
            this.isRefreshing = true;

            let previewQuery: Promise<PreviewResults>;

            if (url) {
                previewQuery = this.hubService.downloadUrlData(url);
            } else {
                switch (this.view.sourceType) {
                    case eViewSource.Datalink:
                        previewQuery = this.hubService.previewDatalinkKeyData(this.view.sourceDatalinkKey,
                            this.view.selectQuery, this.inputColumns, this.parameters);
                        break;
                    case eViewSource.Table:
                        previewQuery = this.hubService.previewTableKeyData(this.view.sourceTableKey,
                            false, this.view.selectQuery, this.inputColumns, this.parameters)
                        break;
                }
            }


            if (previewQuery) {
                previewQuery.then((result) => {
                    this.columns = result.columns;
                    this.data = result.data;
                    this.transformProperties = result.transformProperties;
                    this.isRefreshing = false;
                }).catch(() => {
                    this.data = [];
                    this.isRefreshing = false;
                });
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
