import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../../+auth/auth.service';
import { TransformWriterResult, Table, TableColumn, eDeltaType, HubCache, DexihTable, DexihDatalink } from '../../hub.models';
import { SelectQuery, Filter, eCompare, eAndOr, DownloadObject, eObjectType, eDownloadFormat } from '../../hub.query.models';
import { HubService } from '../../hub.service';
import { Subscription, BehaviorSubject, Observable, combineLatest} from 'rxjs';
import { eTypeCode } from '../../hub.remote.models';

@Component({
    selector: 'preview-results',
    templateUrl: './preview-results.component.html'
})

export class PreviewResultsComponent implements OnInit, OnDestroy {
    @Input() auditResult: TransformWriterResult;

    _hubCacheSubscription: Subscription;

    private cache: HubCache;

    public datalink: DexihDatalink;
    public targetTable: DexihTable;
    public columns: Array<any>;
    public data: Array<any>;
    public selectQuery = new SelectQuery();

    constructor(
        private authService: AuthService,
        private hubService: HubService
    ) {
    }

    ngOnInit() {
        this._hubCacheSubscription = this.hubService.getHubCacheObservable().subscribe(cache => {
            this.cache = cache;

            switch (this.auditResult.auditType) {
                case 'Table':
                    this.targetTable = this.cache.getTable(this.auditResult.referenceKey);
                    this.refresh();
                    break;
                case 'Datalink':
                case 'DatalinkStep':
                    this.datalink = this.cache.hub.dexihDatalinks.find(c => c.key === this.auditResult.referenceKey);

                    if (!this.datalink) {
                        this.hubService.addHubErrorMessage(`The datalink with the key ${this.auditResult.referenceKey} cannot be found.`)
                        return;
                    }

                    if (this.datalink.dexihDatalinkTargets.length >= 1) {
                        this.targetTable = this.cache.getTable(this.datalink.dexihDatalinkTargets[0].tableKey);
                    } else {
                        this.hubService.addHubErrorMessage(`There is no target table for this datalink.`)
                        return;
                    }
                    this.refresh();
                    break;

                case 'datajob':
                    break;
            }

        });
    }

    ngOnDestroy() {
        if (this._hubCacheSubscription ) { this._hubCacheSubscription.unsubscribe(); }
    }

    createSelectQuery(): SelectQuery {
        const createAuditColumn = this.targetTable.dexihTableColumns.find(c => c.deltaType === eDeltaType.CreateAuditKey);
        const updateAuditColumn = this.targetTable.dexihTableColumns.find(c => c.deltaType === eDeltaType.UpdateAuditKey);

        if (!createAuditColumn && !updateAuditColumn) {
            this.hubService.addHubErrorMessage(
            // tslint:disable-next-line:max-line-length
            `The table ${this.targetTable.name} does not contain a create or update audit column which is required to connect to an audit.`);
            return;
        }

        // clone the query, and add the audit filter columns
        let selectQuery = JSON.parse(JSON.stringify(this.selectQuery));

        if (createAuditColumn) {
            let filter = new Filter();
            filter.column1 = createAuditColumn;
            filter.operator = eCompare.IsEqual;
            filter.value2 = this.auditResult.auditKey;
            filter.andOr = eAndOr.Or
            filter.compareDataType = eTypeCode.Int64;
            selectQuery.filters.push(filter);
        }

        if (updateAuditColumn) {
            let filter = new Filter();
            filter.column1 = updateAuditColumn;
            filter.operator = eCompare.IsEqual;
            filter.value2 = this.auditResult.auditKey;
            filter.andOr = eAndOr.Or
            filter.compareDataType = eTypeCode.Int64;
            selectQuery.filters.push(filter);
        }

        return selectQuery;
    }

    refresh() {
        let selectQuery = this.createSelectQuery();

        this.hubService.previewTableDataQuery(this.targetTable, false, selectQuery, null).then(result => {
            this.columns = result.columns;
            this.data = result.data;
        }).catch(reason => {
            // this.hubService.addHubErrorMessage(reason);
        });

    }

    download() {
        let selectQuery = this.createSelectQuery();
        let downloadObject = new DownloadObject();
        downloadObject.objectKey = this.targetTable.key;
        downloadObject.objectType = eObjectType.Table;
        downloadObject.query = selectQuery;
        this.hubService.downloadData([downloadObject], false, eDownloadFormat.Csv)
    }
}
