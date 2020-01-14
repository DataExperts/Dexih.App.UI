import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { PreviewResults, HubCache } from '../../hub.models';
import { HubService } from '../../hub.service';
import { Subscription, Subject} from 'rxjs';
import { PromiseWithCancel, CancelToken } from '../../../+auth/auth.models';
import { TransformWriterResult, DexihDatalink, DexihTable, SelectQuery, eDeltaType, Filter, eCompare,
    eAndOr, eTypeCode, DownloadObject, eSourceType, eDownloadFormat, DexihDatalinkColumn,
    TableColumn, eDataObjectType, DexihTableColumn } from '../../../shared/shared.models';

@Component({
    selector: 'preview-results',
    templateUrl: './preview-results.component.html'
})

export class PreviewResultsComponent implements OnInit, OnDestroy {
    @Input() auditResult: TransformWriterResult;

    _hubCacheSubscription: Subscription;

    private cache: HubCache;

    public targetTable: DexihTable;
    public columns: Array<any>;
    public data: Array<any>;
    public selectQuery = new SelectQuery();

    private refreshDataSubject: Subject<void> = new Subject<void>();

    private runningQuery: PromiseWithCancel<PreviewResults>;
    private cancelToken = new CancelToken();

    constructor(
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
                    let datalink = this.cache.hub.dexihDatalinks.find(c => c.key === this.auditResult.referenceKey);

                    if (!datalink) {
                        this.hubService.addHubErrorMessage(`The datalink with the key ${this.auditResult.referenceKey} cannot be found.`)
                        return;
                    }

                    if (datalink.dexihDatalinkTargets.length >= 1) {
                        this.targetTable = this.cache.getTable(datalink.dexihDatalinkTargets[0].tableKey);
                    } else {
                        this.hubService.addHubErrorMessage(`There is no target table for this datalink.`)
                        return;
                    }
                    this.refresh();
                    break;
                case 'DatalinkTestStep':
                    let testStep = this.cache.getDatalinkTestStep(this.auditResult.referenceKey);

                    if (!testStep) {
                        this.hubService.addHubErrorMessage(`The test step with the key ${this.auditResult.referenceKey} cannot be found.`)
                        return;
                    }

                    let testDatalink = this.cache.hub.dexihDatalinks.find(c => c.key === testStep.datalinkKey);

                    if (testDatalink.dexihDatalinkTargets.length >= 1) {
                        let table = this.cache.getTable(testDatalink.dexihDatalinkTargets[0].tableKey);
                        let testTable = JSON.parse(JSON.stringify(table));
                        testTable.name = testStep.errorTableName;
                        testTable.schema = testStep.errorSchema;
                        testTable.connectionKey = testStep.errorConnectionKey;

                        for (let column of testTable.dexihTableColumns) {
                            column.deltaType = eDeltaType.NonTrackingField;
                        }
                        let auditCol = new DexihTableColumn();
                        auditCol.name = 'error_audit_key';
                        auditCol.dataType = eTypeCode.Int64;
                        auditCol.deltaType = eDeltaType.CreateAuditKey;

                        let opCol = new DexihTableColumn();
                        opCol.name = 'error_operation';
                        opCol.dataType = eTypeCode.CharArray;
                        opCol.maxLength = 1;
                        opCol.deltaType = eDeltaType.DatabaseOperation;


                        let reasonCol = new DexihTableColumn();
                        reasonCol.name = 'mismatch_reason';
                        reasonCol.dataType = eTypeCode.String;
                        reasonCol.deltaType = eDeltaType.UpdateReason;

                        testTable.dexihTableColumns.push(auditCol);
                        testTable.dexihTableColumns.push(opCol);
                        testTable.dexihTableColumns.push(reasonCol);

                        this.targetTable = testTable;
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
        if (this.runningQuery) { this.runningQuery.cancel(); }
        this.cancelToken.cancel();
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
            filter.column1 = new TableColumn();
            Object.assign(filter.column1, createAuditColumn);
            filter.operator = eCompare.IsEqual;
            filter.value2 = this.auditResult.auditKey;
            filter.andOr = eAndOr.Or
            filter.compareDataType = eTypeCode.Int64;
            selectQuery.filters.push(filter);
        }

        if (updateAuditColumn) {
            let filter = new Filter();
            filter.column1 = new TableColumn();
            Object.assign(filter.column1, updateAuditColumn);
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

        let query = this.hubService.previewTableDataQuery(this.targetTable, false, selectQuery, null, null, this.cancelToken);

        query.then(result => {
            this.refreshDataSubject.next();
            this.columns = result.columns;
            this.data = result.data;
        }).catch(() => {
            // this.hubService.addHubErrorMessage(reason);
        });

        this.runningQuery = query;
    }

    download() {
        let selectQuery = this.createSelectQuery();
        let downloadObject = new DownloadObject();
        downloadObject.objectKey = this.targetTable.key;
        downloadObject.objectType = eDataObjectType.Table;
        downloadObject.query = selectQuery;
        this.hubService.downloadData([downloadObject], false, eDownloadFormat.Csv, this.cancelToken)
    }
}
