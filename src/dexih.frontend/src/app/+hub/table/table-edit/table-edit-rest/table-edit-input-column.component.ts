import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'table-edit-input-column',
    templateUrl: './table-edit-input-column.component.html'
})
export class TableEditInputColumnComponent implements OnInit, OnChanges {
    @Input() public columnForm: FormGroup = null;

    constructor() {
    }

    ngOnInit() {
    }

    ngOnChanges() {
    }

    toggleInput($event) {
    }
}
