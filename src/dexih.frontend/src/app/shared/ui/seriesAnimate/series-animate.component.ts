import { Component, OnInit, Input, OnChanges, Output, EventEmitter, OnDestroy, SimpleChanges } from '@angular/core';
import { AnimateConfig } from '../../shared.models';
import { Functions } from '../../../shared/utils/functions';

@Component({
    selector: 'series-animate',
    templateUrl: 'series-animate.component.html'
})

export class SeriesAnimateComponent implements OnInit, OnChanges, OnDestroy {
    @Input() showEdit = false;
    @Input() animateConfig: AnimateConfig;
    @Input() columns: Array<any>;
    @Input() baseData: Array<any>;

    @Input() data: Array<any>;
    @Output() dataChange = new EventEmitter<Array<any>>();

    @Output() hasChanged = new EventEmitter();


    public animationValues = [];
    public animationValue;
    public animationTimer;
    public animationColumnIndex: number;
    public animationRowIndex: number;
    public animationPaused = false;

    constructor() { }

    ngOnInit() {

    }

    ngOnDestroy() {
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.baseData || changes.columns || changes.animateConfig) {
            this.initializeAnimation();
        }
    }

    onChanged() {
        this.hasChanged.emit();
    }

    seriesChanged() {
        this.initializeAnimation();
        this.hasChanged.emit();
    }

    initializeAnimation() {
        if (this.baseData && this.columns && this.animateConfig && this.animateConfig.seriesColumn) {

            this.animationStop();
            this.animationSeriesValues();
            this.animationRowIndex = 0;

            if (this.animateConfig.automatic) {
                this.animationPlay();
            } else {
                this.animationFilter();
            }
        } else {
            this.dataChange.emit(this.baseData);
        }
    }

    animationSeriesValues() {
        this.animationColumnIndex = this.columns.findIndex(c => c.title === this.animateConfig.seriesColumn);
        const format = this.columns[this.animationColumnIndex].format;
        const values = Array.from(new Set(this.baseData.map(c => c[this.animationColumnIndex]))).sort((a, b) => {
            if (a > b) {
                return 1;
            }
            if (a < b) {
                return -1;
            }
            return 0;
        });
        this.animationValues = values.map(c => {
            return {
                name: Functions.formatValue(c, format),
                value: c
            }
        });
    }

    animationFilter() {
        const value = this.animationValues[this.animationRowIndex].value;
        this.animationValue = value;
        const data = this.baseData.filter(c => c[this.animationColumnIndex] === value);
        this.dataChange.emit(data);
    }

    animationPlay() {

        if (this.animationColumnIndex >= 0) {
            if (!this.animationPaused) {
                this.animationRowIndex = 0;
            }
            this.animationStop();

            let first = true;

            this.animationTimer = setInterval(() => {
                if (first) {
                    first = false;
                } else {
                    this.animationRowIndex++;
                }

                if (this.animationRowIndex + 1 >= this.animationValues.length) {
                    clearInterval(this.animationTimer);
                } else {
                    this.animationFilter();

                    // at last item, then stop.
                    if (this.animationRowIndex + 1 >= this.animationValues.length) {
                        clearInterval();
                    }
                }
            }, this.animateConfig.delay);

        } else {
            //   this.hubService.addHubErrorMessage('The animation did not start as a series column is not set.');
        }
    }

    animationPause() {
        if (this.animationTimer) {
            this.animationPaused = true;
            clearInterval(this.animationTimer);
        }
    }

    animationStepForward() {
        if (this.animationRowIndex + 1 < this.animationValues.length) {
            this.animationRowIndex++;
            this.animationFilter();
        }
    }

    animationStepBackward() {
        if (this.animationRowIndex > 0) {
            this.animationRowIndex--;
            this.animationFilter();
        }
    }

    animationLast() {
        if (this.animationRowIndex + 1 < this.animationValues.length) {
            this.animationRowIndex = this.animationValues.length - 1;
            this.animationFilter();
        }
    }

    animationFirst() {
        if (this.animationRowIndex > 0) {
            this.animationRowIndex = 0;
            this.animationFilter();
        }
    }

    animationChange($event) {
        this.animationRowIndex = this.animationValues.findIndex(c => c.value === $event);
        this.animationFilter();
    }

    animationStop() {
        this.animationPaused = false;
        if (this.animationTimer) {
            clearInterval(this.animationTimer);
        }
    }
}
