import { Component, OnInit, Input, OnChanges, Output, EventEmitter, OnDestroy, SimpleChanges } from '@angular/core';
import { AnimateConfig } from '../../shared.models';
import { Functions } from '../../utils/functions';

@Component({
    selector: 'series-animate-properties',
    templateUrl: 'series-animate-properties.component.html'
})
export class SeriesAnimatePropertiesComponent {
    @Input() animateConfig: AnimateConfig;
    @Input() columns: Array<any>;
    @Output() hasChanged = new EventEmitter();

    constructor() { }


    onChanged() {
        this.hasChanged.emit();
    }

    seriesChanged() {
        this.hasChanged.emit();
    }

   
}
