import { Component, OnInit, Input } from '@angular/core';
import { DexihFileFormat } from '../../../shared/shared.models';

@Component({
    selector: 'fileFormat-view',
    templateUrl: './fileFormat-view.component.html'
})

export class FileFormatViewComponent implements OnInit {
    @Input() fileFormat: DexihFileFormat;

    constructor() { }

    ngOnInit() { }
}
