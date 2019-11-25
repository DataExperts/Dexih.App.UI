import { Component, OnInit, Input } from '@angular/core';
import { DexihListOfValues } from '../../../shared/shared.models';

@Component({
    selector: 'listOfValues-view',
    templateUrl: './listOfValues-view.component.html'
})

export class ListOfValuesViewComponent implements OnInit {
    @Input() listOfValues: DexihListOfValues;

    constructor() { }

    ngOnInit() { }
}
