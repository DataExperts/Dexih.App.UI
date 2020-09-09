import { Component, OnInit, Input, OnChanges, Output, EventEmitter, OnDestroy, SimpleChanges } from '@angular/core';
import { SelectQuery, InputColumn, TableColumn, SelectColumn, eSortDirection, Filter, eTypeCode, eCompare } from '../../shared.models';
import { DexihInputParameter } from '../../../+hub/hub.models';
import { compare } from '../../../+hub/hub.query.models';
import { TypeCodes } from '../../../+hub/hub.remote.models';
import { Observable, Subscription } from 'rxjs';

@Component({
    selector: 'query-builder',
    templateUrl: 'query-builder.component.html',
    styleUrls: ['./query-builder.component.scss']
})

export class QueryBuilderComponent implements OnInit, OnChanges, OnDestroy {
    @Input() selectQuery: SelectQuery;
    @Input() columns: TableColumn[];
    @Input() inputColumns: InputColumn[];
    @Input() parameters: DexihInputParameter[];
    @Input() refreshEvent: Observable<void>;
    @Input() requiresRefreshEvent: Observable<void>;

    @Output() hasChanged = new EventEmitter();
    @Output() onRefreshData = new EventEmitter();

    private _refreshSubscription: Subscription;
    private _requiresRefreshSubscription: Subscription;
    
    selectColumns: SelectColumn[];
    sortColumns: any[];

    compare = compare;

    allRows = false;
    savedRowCount: number;
    typeCodes = TypeCodes;
    eCompare = eCompare;

    requiresRefresh = false;

    variables: string[];

    constructor() { }

    ngOnInit() {
        if (!this.selectQuery) {
            this.selectQuery = new SelectQuery();
            this.selectQuery.rows = 100;
        }

        if (this.selectQuery.sorts) {
            this.selectQuery.sorts.forEach(sort => {
                sort.column['runTime'] = sort.column.name + sort.direction;
            });
        }

        if (this.refreshEvent) {
            this._refreshSubscription = this.refreshEvent.subscribe(() => {
                this.requiresRefresh = false;
            });
        }

        if (this.requiresRefreshEvent) {
            this._requiresRefreshSubscription = this.requiresRefreshEvent.subscribe(() => {
                this.requiresRefresh = true;
            });
        }

        this.allRows = this.selectQuery.rows < 0 ? true : false;
    }

    ngOnDestroy() {
        if (this._refreshSubscription) { this._refreshSubscription.unsubscribe(); }
        if (this._requiresRefreshSubscription) { this._requiresRefreshSubscription.unsubscribe(); }
    }

    ngOnChanges(changed: SimpleChanges) {
        if (this.parameters) {
            this.variables = this.parameters.map(c => '{' + c.name + '}');
        }
        if (this.columns) {
            this.selectColumns = new Array(this.columns.length);
            this.sortColumns = new Array(this.columns.length * 2);

            for (let i = 0; i < this.columns.length; i++) {
                this.selectColumns[i] = { column: this.columns[i], aggregate: null, outputColumn: null };

                let column1 = Object.assign({}, this.columns[i]);
                column1['details'] = column1.logicalName + ' asc';
                column1['runTime'] = column1.name + eSortDirection.Ascending;
                this.sortColumns[i * 2] = { key: column1['details'], column: column1, direction: eSortDirection.Ascending };

                let column2 = Object.assign({}, this.columns[i]);
                column2['details'] = column2.logicalName + ' desc';
                column2['runTime'] = column2.name + eSortDirection.Descending;
                this.sortColumns[i * 2 + 1] = { key: column2['details'], column: column2, direction: eSortDirection.Descending };
            }
        }
    }

    addFilter(index: number) {
        let filter = new Filter();
        filter.compareDataType = eTypeCode.String;
        this.selectQuery.filters.splice(index, 0, filter);
        this.onChanged();
    }

    removeFilter(index: number) {
        this.selectQuery.filters.splice(index, 1);
        this.onChanged();
    }

    selectAllRows() {
        if (this.allRows) {
            this.selectQuery.rows = this.savedRowCount > 0 ? this.savedRowCount : 100;
        } else {
            this.savedRowCount = this.selectQuery.rows;
            this.selectQuery.rows = -1;
        }
        this.onChanged();
    }

    refreshData() {
        this.onRefreshData.emit();
    }

    onChanged() {
        this.hasChanged.emit();
        this.requiresRefresh = true;
    }
}
