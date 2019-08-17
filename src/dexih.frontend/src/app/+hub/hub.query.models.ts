import { TableColumn, eFlatFilePath, eSourceType, eViewSource, InputColumn, DexihInputParameter } from './hub.models';
import { eTypeCode } from './hub.remote.models';
import { Input } from '@angular/compiler/src/core';

export class UpdateQueries {
    public baseUpdateQuery: UpdateQuery;
    public data: Array<any>;
}

export class SelectQuery {
    public columns: Array<SelectColumn>;
    public table: string;
    public filters: Array<Filter>;
    public sorts: Array<Sort>;
    public groups: Array<TableColumn>;
    public rows: number;

    public fileName: string;
    public path: eFlatFilePath;

    constructor() {
        this.columns = new Array<SelectColumn>();
        this.filters = new Array<Filter>();
        this.sorts = new Array<Sort>();
        this.groups = new Array<TableColumn>();
        this.rows = 100; // -1 means show all rows.
    }
}

export class SelectColumn {
    public column: TableColumn;
    public aggregate: eAggregate;
}

export class UpdateQuery {
    public updateColumns: Array<QueryColumn>;
    public table: string;
    public filters: Array<Filter>;
}

export class DeleteQuery {
    public table: string;
    public filters: Array<Filter>;
}

export class InsertQuery {
    public table: string;
    public insertColumns: Array<QueryColumn>;
}

export class QueryColumn {
    public column: TableColumn;
    public Value: any;
}

export class Filter {
    public column1: TableColumn;
    public value1: any;
    public compareDataType: eTypeCode;

    public column2: TableColumn;
    public value2: any;

    public operator: eCompare;
    public andOr: eAndOr;
}

export class Sort {
    public column: TableColumn;
    public direction: eDirection;

    get details(): string {
        return this.column + ' ' + this.direction;
    };
}

export class DownloadObject {
    public objectType: eViewSource;
    public objectKey: number;
    public query: SelectQuery;
    public inputColumns: InputColumn[];
    public parameters: DexihInputParameter[];
}

export enum eDownloadFormat {
    Csv = <any>'Csv',
    Json = <any>'Json',
    JsonCompact = <any>'JsonCompact'
}

export const downloadFormats = [
    {key: eDownloadFormat.Csv, name: 'Comma Separated File'},
    {key: eDownloadFormat.Json, name: 'Json File'},
    {key: eDownloadFormat.JsonCompact, name: 'Json File (separate headers section)'},
];

export enum eAggregate {
    Sum = <any>'Sum',
    Average = <any>'Average',
    Min = <any>'Min',
    Max = <any>'Max',
    Count = <any>'Count',
    First = <any>'First',
    Last = <any>'Last'
}

export const aggregates = [
    {key: eAggregate.Sum, name: 'Sum'},
    {key: eAggregate.Average, name: 'Average'},
    {key: eAggregate.Min, name: 'Minimum'},
    {key: eAggregate.Max, name: 'Maximum'},
    {key: eAggregate.Count, name: 'Count'},
    {key: eAggregate.First, name: 'Last'},
    {key: eAggregate.Last, name: 'First'},
];

export enum eCompare {
    IsEqual = <any>'IsEqual',
    GreaterThan = <any>'GreaterThan',
    GreaterThanEqual = <any>'GreaterThanEqual',
    LessThan = <any>'LessThan',
    LessThanEqual = <any>'LessThanEqual',
    NotEqual = <any>'NotEqual',
    IsIn = <any>'IsIn',
    IsNull = <any>'IsNull',
    IsNotNull = <any>'IsNotNull',
    Like = <any>'Like'
}

export const compare = [
    {key: eCompare.IsEqual, name: '=', showFilter: false},
    {key: eCompare.GreaterThan, name: '>', showFilter: false},
    {key: eCompare.GreaterThanEqual, name: '>=', showFilter: false},
    {key: eCompare.LessThan, name: '<', showFilter: false},
    {key: eCompare.LessThanEqual, name: '<=', showFilter: false},
    {key: eCompare.NotEqual, name: '!=', showFilter: false},
    {key: eCompare.IsIn, name: 'IN', showFilter: false},
    {key: eCompare.IsNull, name: 'Is Null', showFilter: true},
    {key: eCompare.IsNotNull, name: 'Is Not Null', showFilter: true},
    {key: eCompare.Like, name: 'like', showFilter: false},
];

export enum eAndOr {
    And = <any>'And',
    Or = <any>'Or'
}


export enum eDirection {
    Ascending = <any>'Ascending',
    Descending = <any>'Descending',
}


