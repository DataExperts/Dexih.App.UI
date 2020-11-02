import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ChartSeries } from '../../../shared.models';

@Component({
    selector: 'chart-series',
    templateUrl: 'chart-series.component.html'
})
export class ChartSeriesComponent implements OnInit, OnChanges {
    @Input() series: ChartSeries[];
    @Input() columns: any[];
    @Input() minItems: number = 1;
    @Input() maxItems: number = 5;
    @Input() allowLineChart = false;
    @Input() allowAlternateAxis = false;

    @Output() seriesChange = new EventEmitter<ChartSeries[]>();

    constructor() { }

    ngOnInit() { 
        this.ngOnChanges(null);
    }

    ngOnChanges(changes: SimpleChanges): void {
        if(!this.series) {
            this.series = [];
        }

        if (this.series.length < this.minItems) {
            for (let i = 0; i < this.minItems; i++ ) {
                this.series.push(new ChartSeries());
            }
            this.seriesChange.emit(this.series);
        }
    }

    onChanged() {
        this.seriesChange.emit(this.series);
    }

    add(index: number) {
        if (this.series.length < this.maxItems) {
            this.series.splice(index + 1, 0, new ChartSeries());
            this.seriesChange.emit(this.series);
        }
    }

    remove(index: number) {
        if (this.series.length > this.minItems) {
            this.series.splice(index, 1);
            this.seriesChange.emit(this.series);
        }
    }
}
