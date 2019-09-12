import { Component, OnInit, Input } from '@angular/core';
import { DexihTable, DexihTableColumn } from '../../../shared/shared.models';

@Component({
    selector: 'table-column-view',
    templateUrl: './table-column-view.component.html'
})

export class TableColumnViewComponent implements OnInit {
    @Input() table: DexihTable;
    @Input() column: DexihTableColumn;

    constructor() { }

    ngOnInit() { }
}
