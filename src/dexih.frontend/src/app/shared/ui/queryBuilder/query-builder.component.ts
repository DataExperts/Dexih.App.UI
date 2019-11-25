import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { SelectQuery, InputColumn, TableColumn, SelectColumn, eDirection, Filter, eTypeCode } from '../../shared.models';
import { DexihInputParameter } from '../../../+hub/hub.models';
import { compare } from '../../../+hub/hub.query.models';
import { TypeCodes } from '../../../+hub/hub.remote.models';

@Component({
    selector: 'query-builder',
    templateUrl: 'query-builder.component.html'
})

export class QueryBuilderComponent implements OnInit, OnChanges {
    @Input() selectQuery: SelectQuery;
    @Input() columns: TableColumn[];
    @Input() inputColumns: InputColumn[];
    @Input() parameters: DexihInputParameter[];
    @Output() hasChanged = new EventEmitter();

    selectColumns: SelectColumn[];
    sortColumns: any[];

    compare = compare;

    allRows = false;
    savedRowCount: number;
    typeCodes = TypeCodes;

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

        this.allRows = this.selectQuery.rows < 0 ? true : false;
    }

    ngOnChanges() {
        if (this.parameters) {
            this.variables = this.parameters.map(c => '{' + c.name + '}');
        }
        if (this.columns) {
            this.selectColumns = new Array(this.columns.length);
            this.sortColumns = new Array(this.columns.length * 2);

            for (let i = 0; i < this.columns.length; i++) {
                this.selectColumns[i] = { column: this.columns[i], aggregate: null };

                let column1 = Object.assign({}, this.columns[i]);
                column1['details'] = column1.logicalName + ' asc';
                column1['runTime'] = column1.name + eDirection.Ascending;
                this.sortColumns[i * 2] = { key: column1['details'], column: column1, direction: eDirection.Ascending };

                let column2 = Object.assign({}, this.columns[i]);
                column2['details'] = column2.logicalName + ' desc';
                column2['runTime'] = column2.name + eDirection.Descending;
                this.sortColumns[i * 2 + 1] = { key: column2['details'], column: column2, direction: eDirection.Descending };
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
