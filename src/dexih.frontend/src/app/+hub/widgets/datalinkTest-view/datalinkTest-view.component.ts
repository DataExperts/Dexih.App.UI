import { Component, OnInit, Input } from '@angular/core';
import { DexihDatalink, DexihDatalinkTest } from '../../../shared/shared.models';

@Component({
    selector: 'datalinkTest-view',
    templateUrl: './datalinkTest-view.component.html'
})

export class DatalinkTestViewComponent implements OnInit {
    @Input() datalinkTest: DexihDatalinkTest;

    constructor() { }

    ngOnInit() { }
}
