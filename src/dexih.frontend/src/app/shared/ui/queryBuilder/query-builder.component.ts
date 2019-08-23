import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { SelectQuery, SelectColumn, Sort, eAggregate, eDirection, eCompare, compare, Filter } from '../../../+hub/hub.query.models';
import { DexihTableColumn, TableColumn, DexihColumnBase, InputColumn, DexihInputParameter } from '../../../+hub/hub.models';
import { eTypeCode, TypeCodes } from '../../../+hub/hub.remote.models';

@Component({
    selector: 'query-builder',
    templateUrl: 'query-builder.component.html'
})

export class QueryBuilderComponent implements OnInit, OnChanges {
    @Input() selectQuery: SelectQuery;
    @Input() columns: DexihTableColumn[];
    @Input() inputColumns: InputColumn[];
    @Input() parameters: DexihInputParameter[];
    @Output() hasChanged = new EventEmitter();

    tableColumns: TableColumn[];
    selectColumns: SelectColumn[];
    sortColumns: Sort[];

    compare = compare;

    allRows = false;
    savedRowCount: number;
    typeCodes = TypeCodes;

    variables: string[];

    constructor() { }

    ngOnInit() {
        if (!this.selectQuery) {
            this.selectQuery = new SelectQuery();
        }

        this.allRows = this.selectQuery.rows < 0 ? true : false;
    }

    ngOnChanges() {
        if (this.parameters) {
            this.variables = this.parameters.map(c => '{' + c.name + '}');
        }
        if (this.columns) {
            this.tableColumns = new Array(this.columns.length);
            this.selectColumns = new Array(this.columns.length);
            this.sortColumns = new Array(this.columns.length * 2);

            for (let i = 0; i < this.columns.length; i++) {
                this.tableColumns[i] = Object.assign({}, this.columns[i]);
                this.selectColumns[i] = { column: this.tableColumns[i], aggregate: null };
                this.sortColumns[i * 2] = { column: this.tableColumns[i], direction: eDirection.Ascending,
                    details: this.tableColumns[i].logicalName + ' asc' };
                this.sortColumns[i * 2 + 1] = { column: this.tableColumns[i], direction: eDirection.Descending,
                    details: this.tableColumns[i].logicalName + ' desc' };
            }
        }
    }

    addFilter(index: number) {
        let filter = new Filter();
        filter.compareDataType = eTypeCode.String;
        this.selectQuery.filters.splice(index, 0, filter);
    }

    removeFilter(index: number) {
        this.selectQuery.filters.splice(index, 1);
    }

    selectAllRows() {
        if (this.allRows) {
            this.selectQuery.rows = this.savedRowCount > 0 ? this.savedRowCount : 100;
        } else {
            this.savedRowCount = this.selectQuery.rows;
            this.selectQuery.rows = -1;
        }
    }

    onChanged() {
        this.hasChanged.emit();
    }
}
