import { Component, OnInit, Input } from '@angular/core';
import { DexihApi } from '../../../shared/shared.models';

@Component({
    selector: 'api-view',
    templateUrl: './api-view.component.html'
})

export class ApiViewComponent implements OnInit {
    @Input() api: DexihApi;

    constructor() { }

    ngOnInit() { }
}
