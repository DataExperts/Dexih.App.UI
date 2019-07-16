import { Component, OnInit, Input } from '@angular/core';
import { DexihConnection, DexihTable } from '../../hub.models';

@Component({
    selector: 'table-view',
    templateUrl: './table-view.component.html'
})

export class TableViewComponent implements OnInit {
    @Input() connection: DexihConnection;
    @Input() table: DexihTable;

    constructor() { }

    ngOnInit() { }
}
