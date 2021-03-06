import { Component, OnInit, OnDestroy } from '@angular/core';
import { HubService } from '../../hub.service';
import { HubCache } from '../../hub.models';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, BehaviorSubject, Subscription, combineLatest} from 'rxjs';
import { CancelToken } from '../../../+auth/auth.models';
import { TransformWriterResult, eConnectionPurpose } from '../../../shared/shared.models';

@Component({
    selector: 'results-index',
    templateUrl: './results-index.component.html',
    styles: []
})
export class ResultsIndexComponent implements OnInit, OnDestroy {
    hubCache: HubCache;

    private _subscription: Subscription;
    private _transformWriterResultChangeSubscription: Subscription;

    public hubPath;
    public rows = 20;
    private datalinkStatus: Map<number, TransformWriterResult>;

    private cancelToken = new CancelToken();

    showPage = false;
    showPageMessage = 'Loading...';

    columns = [
        { name: 'auditKey', title: '#', format: '' },
        { name: 'auditType', title: 'Type', format: '' },
        { name: 'referenceName', title: 'Name', format: '' },
        { name: 'rowsTotal', title: 'Rows Total', format: '' },
        { name: 'startTime', title: 'Start Date', format: 'Calendar' },
        { name: 'startTime', title: 'Time', format: 'Time' },
        { name: 'endTime', title: 'Finished At', format: 'Time' },
        { name: 'message', title: 'Message', format: '' },
    ];

    auditTypes = [ 'Datalink', 'Datajob', 'DatalinkTest' ];

    private _tableData = new BehaviorSubject<Array<TransformWriterResult>>(null);
    tableData: Observable<Array<TransformWriterResult>> = this._tableData.asObservable();

    datalinks: Array<number> = [];
    datajobs: Array<number> = [];
    datalinkTests: Array<number> = [];

    auditType: string = null;

    constructor(private hubService: HubService, private router: Router, private route: ActivatedRoute) {
    }

    ngOnInit() {
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
                let remoteAgent = result[4];

                this.showPage = false;
                this.showPageMessage = 'Waiting for an active remote agent...';

                if (this.hubCache.isLoaded() && remoteAgent) {
                    this.hubPath = this.hubCache.getHubUrl();

                    let datalinkKeysString = queryParams['datalinkKeys'];
                    let datajobKeysString = queryParams['datajobKeys'];
                    let datalinkTestsKeysString = queryParams['datalinkTestKeys'];

                    if (datalinkKeysString) {
                        this.datalinks = (datalinkKeysString + '').split(',').map(c => +c);
                        this.auditType = 'Datalink';
                    }
                    if (datajobKeysString) {
                        this.datajobs = (datajobKeysString + '').split(',').map(c => +c);
                        this.auditType = 'Datajob';
                    }
                    if (datalinkTestsKeysString) {
                        this.datalinkTests = (datalinkTestsKeysString + '').split(',').map(c => +c);
                        this.auditType = 'DatalinkTest';
                    }

                    this.refresh();

                    this.showPage = true;
                    this.showPageMessage = '';
                }

            });
        } catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Results Index');
        }

    }

    ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
        if (this._transformWriterResultChangeSubscription) { this._transformWriterResultChangeSubscription.unsubscribe(); }
        this.cancelToken.cancel();
    }

    showResult(result: TransformWriterResult) {
        this.router.navigate(['result-view', result.auditConnectionKey, result.auditKey], { relativeTo: this.route })
    }

    refresh() {
        let data = [];

        let keys: number[];
        let connectionKeys: number[] = [];

        switch (this.auditType) {
            case 'Datalink':
                keys = this.datalinks;
                connectionKeys = this.datalinks.map(c => this.hubCache.hub.dexihDatalinks.find(d => d.key === c).auditConnectionKey);
                break;
            case 'Datajob':
                keys = this.datajobs;
                connectionKeys = this.datajobs.map(c => this.hubCache.hub.dexihDatajobs.find(d => d.key === c).auditConnectionKey);
                break;
            case 'DatalinkTest':
                keys = this.datalinkTests;
                connectionKeys = this.datalinkTests.map(c => this.hubCache.hub.dexihDatalinkTests
                    .find(d => d.key === c).auditConnectionKey);
                break;
            default:
                keys = null;
                break;
        }

        let uniqueKeys = connectionKeys.filter(function(item, i, ar) { return ar.indexOf(item) === i; });

        if (uniqueKeys.length === 0) {
            uniqueKeys = this.hubCache.hub.dexihConnections.filter(c => c.purpose === eConnectionPurpose.Managed).map(c => c.key);
        }

        this.hubService.getAuditResults(this.auditType, uniqueKeys, keys, true, this.rows, this.cancelToken)
        .then(results => {
            this._tableData.next(results);
            this.watchChanges();
            return;
        });
    }

    watchChanges() {
        // watch the current connection in case it is changed in another session.
        if (this._transformWriterResultChangeSubscription) { this._transformWriterResultChangeSubscription.unsubscribe(); }
        this._transformWriterResultChangeSubscription =
            this.hubService.getTransformWriterResultChangeObservable().subscribe(writerResult => {
                let results: TransformWriterResult[] = this._tableData.value;

                if (this.datalinks && this.datalinks.findIndex(c => c === writerResult.referenceKey) >= 0) {
                    let existingResult = results.find(c => c.auditKey === writerResult.auditKey);
                    if (existingResult) {
                        Object.assign(existingResult, writerResult);
                        this._tableData.next(results);
                    } else {
                        this._tableData.next([writerResult].concat(results));
                    }
                }
                if (this.datajobs && this.datajobs.findIndex(c => c === writerResult.referenceKey) >= 0) {
                    let existingResult = results.find(c => c.auditKey === writerResult.auditKey);
                    if (existingResult) {
                        Object.assign(existingResult, writerResult);
                        this._tableData.next(results);
                    } else {
                        this._tableData.next([writerResult].concat(results));
                    }
                }

                if (this.datalinkTests && this.datalinkTests.findIndex(c => c === writerResult.referenceKey) >= 0) {
                    let existingResult = results.find(c => c.auditKey === writerResult.auditKey);
                    if (existingResult) {
                        Object.assign(existingResult, writerResult);
                        this._tableData.next(results);
                    } else {
                        this._tableData.next([writerResult].concat(results));
                    }
                }
        });
    }
}


