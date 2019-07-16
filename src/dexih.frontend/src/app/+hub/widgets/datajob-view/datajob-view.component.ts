import { Component, OnInit, Input } from '@angular/core';
import { DexihDatajob } from '../../hub.models';

@Component({
    selector: 'datajob-view',
    templateUrl: './datajob-view.component.html'
})

export class DatajobViewComponent implements OnInit {
    @Input() datajob: DexihDatajob;

    constructor() { }

    ngOnInit() { }
}
