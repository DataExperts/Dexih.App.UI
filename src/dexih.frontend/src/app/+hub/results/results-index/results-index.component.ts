import { Component, OnInit, OnDestroy } from '@angular/core';
import { HubService } from '../../hub.service';
import { HubCache, eDatalinkType, DexihDatalink, eSharedObjectType,
    TransformWriterResult, DexihDatajob, DexihDatalinkTest } from '../../hub.models';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, BehaviorSubject, Subscription, combineLatest} from 'rxjs';

@Component({
    selector: 'results-index',
    templateUrl: './results-index.component.html',
    styles: []
})
export class ResultsIndexComponent implements OnInit, OnDestroy {
    hubCache: HubCache;

    private _subscription: Subscription;
    private _hubCacheChangeSubscription: Subscription;

    public hubPath;
    public rows = 20;
    private datalinkStatus: Map<number, TransformWriterResult>;

    showPage = false;
    showPageMessage = 'Loading...';

    columns = [
        { name: 'auditKey', title: '#', format: '' },
        { name: 'auditType', title: 'Type', format: '' },
        { name: 'referenceName', title: 'Name', format: '' },
        { name: 'rowsTotal', title: 'Rows Total', format: '' },
        { name: 'startTime', title: 'Start Date', format: 'Date' },
        { name: 'startTime', title: 'Time', format: 'Time' },
        { name: 'endTime', title: 'Finished At', format: 'Time' },
        { name: 'message', title: 'Message', format: '' },
    ];

    auditTypes = [ 'Datalink', 'Datajob', 'DatalinkTest', 'Table' ];

    private _tableData = new BehaviorSubject<Array<TransformWriterResult>>(null);
    tableData: Observable<Array<TransformWriterResult>> = this._tableData.asObservable();

    datalinks: Array<DexihDatalink> = [];
    datajobs: Array<DexihDatajob> = [];
    datalinkTests: Array<DexihDatalinkTest> = [];

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
                        let datalinkKeys = (datalinkKeysString + '').split(',').map(c => +c);
                        this.datalinks = datalinkKeys.map(key => this.hubCache.hub.dexihDatalinks.find(c => c.key === key)).filter(d => d);
                        this.auditType = 'Datalink';
                    }
                    if (datajobKeysString) {
                        let datajobKeys = (datajobKeysString + '').split(',').map(c => +c);
                        this.datajobs = datajobKeys.map(key => this.hubCache.hub.dexihDatajobs.find(c => c.key === key)).filter(d => d);
                        this.auditType = 'Datajob';
                    }
                    if (datalinkTestsKeysString) {
                        let datalinkTestKeys = (datalinkTestsKeysString + '').split(',').map(c => +c);
                        this.datalinkTests = datalinkTestKeys.map(key => this.hubCache.hub.dexihDatalinkTests.find(c => c.key === key))
                            .filter(d => d);
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
        if (this._hubCacheChangeSubscription) { this._hubCacheChangeSubscription.unsubscribe(); }
    }

    showResult(result: TransformWriterResult) {
        this.router.navigate(['result-view', result.auditConnectionKey, result.auditKey], { relativeTo: this.route })
    }

    refresh() {
        let data = [];

        let keys: number[];
        let connectionKeys: number[];

        switch (this.auditType) {
            case 'Datalink':
                keys = this.datalinks.map(c => c.key);
                connectionKeys = this.datalinks.map(c => c.auditConnectionKey);
                break;
            case 'Datajob':
                keys = this.datajobs.map(c => c.key);
                connectionKeys = this.datajobs.map(c => c.auditConnectionKey);
                break;
            case 'DatalinkTest':
                keys = this.datalinkTests.map(c => c.key);
                connectionKeys = this.datalinkTests.map(c => c.auditConnectionKey);
                break;
            default:
                keys = null;
                break;
        }

        let uniqueKeys = connectionKeys.filter(function(item, i, ar) { return ar.indexOf(item) === i; });

        this.hubService.getAuditResults(this.auditType, uniqueKeys, keys, true, this.rows)
        .then(results => {
            this._tableData.next(results);
            this.watchChanges();
            return;
        });
    }

    watchChanges() {
        // watch the current connection in case it is changed in another session.
        if (this._hubCacheChangeSubscription) { this._hubCacheChangeSubscription.unsubscribe(); }
        this._hubCacheChangeSubscription = this.hubService.getHubCacheChangeObservable().subscribe(hubCacheChange => {
            if (hubCacheChange.changeClass === eSharedObjectType.TransformWriterResult) {
                let writerResult: TransformWriterResult = hubCacheChange.data;
                let results: TransformWriterResult[] = this._tableData.value;
                if (this.datalinks && this.datalinks.findIndex(c => c.key === writerResult.referenceKey) >= 0) {
                    let existingResult = results.find(c => c.auditKey === writerResult.auditKey);
                    if (existingResult) {
                        Object.assign(existingResult, writerResult);
                        this._tableData.next(results);
                    } else {
                        this._tableData.next([writerResult].concat(results));
                    }
                }
                if (this.datajobs && this.datajobs.findIndex(c => c.key === writerResult.referenceKey) >= 0) {
                    let existingResult = results.find(c => c.auditKey === writerResult.auditKey);
                    if (existingResult) {
                        Object.assign(existingResult, writerResult);
                        this._tableData.next(results);
                    } else {
                        this._tableData.next([writerResult].concat(results));
                    }
                }

                if (this.datalinkTests && this.datalinkTests.findIndex(c => c.key === writerResult.referenceKey) >= 0) {
                    let existingResult = results.find(c => c.auditKey === writerResult.auditKey);
                    if (existingResult) {
                        Object.assign(existingResult, writerResult);
                        this._tableData.next(results);
                    } else {
                        this._tableData.next([writerResult].concat(results));
                    }
                }

            }
        });
    }
}


