import { Component, OnInit, Input } from '@angular/core';
import { DexihDatalink } from '../../hub.models';

@Component({
    selector: 'datalink-view',
    templateUrl: './datalink-view.component.html'
})

export class DatalinkViewComponent implements OnInit {
    @Input() datalink: DexihDatalink;

    constructor() { }

    ngOnInit() { }
}
