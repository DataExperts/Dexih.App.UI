import { Component, Input, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { ApiData, DexihApi, eApiStatus } from '../../hub.models';
import { HubService } from '../../hub.service';
import { Subscription, combineLatest } from 'rxjs';
import { EDownloadUrlType } from '../../../+auth/auth.models';

@Component({
    selector: 'api-status',
    templateUrl: './api-status.component.html'
})
export class ApiStatusComponent implements OnInit, OnDestroy {
    @Input() public apiKey: number;
    @Output() public progressClick = new EventEmitter();

    private _subscription: Subscription;
    private _currentStatusSubscription: Subscription;

    private api: DexihApi;
    public apiData: ApiData;

    eApiStatus = eApiStatus;

    public showCancel = false;

    public statusClass: string;
    public statusIcon: string;
    public urls: any[];

    public proxyUrl;

    constructor(private hubService: HubService) {
    }

    ngOnInit() {
        this._subscription = combineLatest(
            this.hubService.getHubCacheObservable(),
            this.hubService.getRemoteAgentObservable()
        ).subscribe(result => {
            let cache = result[0];
            let remoteAgent = result[1];

            if (this.apiKey) {
                this.api = cache.hub.dexihApis.find(c => c.key === this.apiKey);
                if (this.api) {
                    this._currentStatusSubscription = this.api.currentStatus.subscribe(apiData => {

                        this.apiData = apiData;

                        if (apiData) {

                            if (apiData.apiStatus === eApiStatus.Activated && remoteAgent) {
                                this.urls = remoteAgent.downloadUrls.filter(c => c.downloadUrlType !== EDownloadUrlType.Proxy).map(url => {
                                    return {
                                        downloadType: url.downloadUrlType,
                                        downloadUrl: url.url + '/api/' + apiData.securityKey,
                                        testUrl: url.url + '/api/' + apiData.securityKey + '/ping'
                                    };
                                });

                                let proxy = remoteAgent.downloadUrls.find(c => c.downloadUrlType === EDownloadUrlType.Proxy);
                                if (proxy) {
                                    this.urls.push({
                                        downloadType: 'Proxy',
                                        downloadUrl: window.location.origin + '/api/remote/api/'
                                            + remoteAgent.instanceId + '/' + apiData.securityKey,
                                        testUrl: proxy.url + '/ping'
                                    });
                                }

                                if (apiData.errorCount === 0 ) {
                                    this.statusClass = 'success';
                                    this.statusIcon = 'bolt';
                                } else {
                                    this.statusClass = 'warning';
                                    this.statusIcon = 'exclamation-circle';
                                }
                            } else {
                                this.statusClass = 'danger';
                                this.statusIcon = 'chain-broken';
                                this.urls = [];
                            }
                        } else {
                            this.statusClass = 'danger';
                            this.statusIcon = 'chain-broken';
                            this.urls = [];                        }
                    });
                }
            }
        });
    }

    ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
        if (this._currentStatusSubscription) { this._currentStatusSubscription.unsubscribe(); }
    }

    deactivate() {
        if (this.apiKey) {
            this.hubService.deactivateApis([this.apiKey]);
        }
    }

    activate() {
        if (this.apiKey) {
            this.hubService.activateApis([this.api]);
        }
    }

    onProgressClick($event: any) {
        this.progressClick.emit($event);
    }

    copyToClipboard(val: string) {
        let selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = val;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
      }

}

