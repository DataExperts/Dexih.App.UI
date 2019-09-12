import { Component, OnInit, Input } from '@angular/core';
import { DexihView } from '../../../shared/shared.models';

@Component({
    selector: 'view-view',
    templateUrl: './view-view.component.html'
})

export class ViewViewComponent implements OnInit {
    @Input() view: DexihView;

    constructor() { }

    ngOnInit() { }
}
