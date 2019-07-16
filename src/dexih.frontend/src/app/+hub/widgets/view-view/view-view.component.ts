import { Component, OnInit, Input } from '@angular/core';
import { DexihView } from '../../hub.models';

@Component({
    selector: 'view-view',
    templateUrl: './view-view.component.html'
})

export class ViewViewComponent implements OnInit {
    @Input() view: DexihView;

    constructor() { }

    ngOnInit() { }
}
