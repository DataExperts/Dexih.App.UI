import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../../+auth/auth.service';
import { HubService } from '../../hub.service';
import { HubCache, TransformWriterResult, eSharedObjectType } from '../../hub.models';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, Subscription, combineLatest} from 'rxjs';
import { CancelToken } from '../../../+auth/auth.models';

@Component({
    selector: 'results-view',
    templateUrl: './results-view.component.html',
    styles: []
})
export class ResultsViewComponent implements OnInit, OnDestroy {
    hubCache: HubCache;
    referenceKeys: Array<number>;

    private _subscription: Subscription;
    private _hubCacheChangeSubscription: Subscription;

    public auditResult: TransformWriterResult;

    showPage = false;
    showPageMessage = 'Loading...';
    view: string;

    resultChartData: Array<any>;

    private cancelToken = new CancelToken();
    
    constructor(
        private hubService: HubService,
        private authService: AuthService,
        private router: Router,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.watchChanges();

        try {
            this._subscription = combineLatest(
                this.route.data,
                this.route.params,
                this.route.queryParams,
                this.hubService.getHubCacheObservable(),
                this.hubService.getRemoteAgentObservable()
            ).subscribe(result => {
                let data = result[0];
                let params = result[1];
                let queryParams = result[2];
                this.hubCache = result[3];
                let remoteAgent = result[4]

                let auditConnectionKey = +params['auditConnectionKey'];
                let auditKey = +params['auditKey'];

                this.showPage = false;
                this.showPageMessage = 'Waiting for an active remote agent...';

                this.view = queryParams['view'];
                if (!this.view) { this.view = 'Stats'; }

                if (remoteAgent) {
                    this.showPage = true;
                    this.showPageMessage = '';
                    this.hubService.getResultDetail(auditConnectionKey, auditKey, this.cancelToken).then(r => {
                        this.auditResult = r;
                    });
                }

            });
        } catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Results View');
        }
    }

    ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
        if (this._hubCacheChangeSubscription) { this._hubCacheChangeSubscription.unsubscribe(); }
        this.cancelToken.cancel();
    }

    close() {
        this.authService.navigateUp();
    }

    watchChanges() {
        // watch the current connection in case it is changed in another session.
        if (this._hubCacheChangeSubscription) { this._hubCacheChangeSubscription.unsubscribe(); }
        this._hubCacheChangeSubscription = this.hubService.getHubCacheChangeObservable().subscribe(hubCacheChange => {
            if (hubCacheChange.changeClass === eSharedObjectType.TransformWriterResult) {
                let writerResult: TransformWriterResult = hubCacheChange.data;

                if (writerResult.auditConnectionKey === this.auditResult.auditConnectionKey &&
                     writerResult.auditKey === this.auditResult.auditKey) {
                    this.auditResult = writerResult;
                }
            }
        });
    }

}


