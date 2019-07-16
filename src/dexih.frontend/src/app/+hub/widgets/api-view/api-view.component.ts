import { Component, OnInit, Input } from '@angular/core';
import { DexihView, DexihApi } from '../../hub.models';

@Component({
    selector: 'api-view',
    templateUrl: './api-view.component.html'
})

export class ApiViewComponent implements OnInit {
    @Input() api: DexihApi;

    constructor() { }

    ngOnInit() { }
}
