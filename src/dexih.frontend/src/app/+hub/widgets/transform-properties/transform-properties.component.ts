import { Component, OnInit, Input } from '@angular/core';
import { TransformProperties } from '../../../shared/shared.models';

@Component({
    selector: 'transform-properties',
    templateUrl: 'transform-properties.component.html'
})

export class TransformPropertiesComponent implements OnInit {
    @Input() transformProperties: TransformProperties;

    constructor() { }

    ngOnInit() { }
}
