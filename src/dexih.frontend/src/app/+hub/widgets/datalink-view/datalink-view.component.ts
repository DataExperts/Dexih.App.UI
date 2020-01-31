import { Component, OnInit, Input } from '@angular/core';
import { DexihDatalink, eDatalinkType } from '../../../shared/shared.models';

@Component({
    selector: 'datalink-view',
    templateUrl: './datalink-view.component.html'
})

export class DatalinkViewComponent implements OnInit {
    @Input() datalink: DexihDatalink;

    eDatalinkType = eDatalinkType;

    constructor() { }

    ngOnInit() { }
}
