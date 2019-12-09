import { Component, OnInit, Input } from '@angular/core';
import { TransformWriterResult } from '../../../shared/shared.models';

@Component({
    selector: 'result-progress',
    templateUrl: './progress.component.html'
})

export class ProgressComponent implements OnInit {
    @Input() public value: number;
    @Input() public total: number;
    @Input() public caption: string;
    @Input() public color: string;

    percent = '0%';

    constructor() {

    }

    ngOnInit() {
        if (this.value === 0) {
            this.percent = '0%';
        } else if (this.total === 0) {
            this.percent = '100%';
        } else {
            let percent = 100 * this.value / this.total;
            if (percent < 0) { percent = 0; }
            if (percent > 100) { percent = 100; }
            this.percent = percent.toString() + '%';
        }
    }
}
