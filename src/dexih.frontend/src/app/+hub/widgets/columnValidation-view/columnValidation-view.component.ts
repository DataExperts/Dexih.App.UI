import { Component, OnInit, Input } from '@angular/core';
import { DexihColumnValidation } from '../../../shared/shared.models';

@Component({
    selector: 'columnValidation-view',
    templateUrl: './columnValidation-view.component.html'
})

export class ColumnValidationViewComponent implements OnInit {
    @Input() columnValidation: DexihColumnValidation;

    constructor() { }

    ngOnInit() { }
}
