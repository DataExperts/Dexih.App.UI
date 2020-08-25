import { Component, Input, Output, OnInit, OnChanges, OnDestroy, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { DexihDatalinkColumn, DexihDatalinkTarget } from '../../../../shared/shared.models';

@Component({

    selector: 'target-columns',
    templateUrl: './target-columns.component.html'
})
export class TargetColumnsComponent implements OnInit, OnChanges, OnDestroy {
    @Input() public datalinkTransformForm: FormGroup;
    @Input() public targets: DexihDatalinkTarget[];
    @Input() public allowMappingOutputs = true;

    @Output() public inputOutputDrop: EventEmitter<{ inputColumn: DexihDatalinkColumn, outputColumn: DexihDatalinkColumn }>
        = new EventEmitter<{ inputColumn: DexihDatalinkColumn, outputColumn: DexihDatalinkColumn }>();


    constructor() { }

    ngOnInit() {
    }

    ngOnChanges() {
    }

    ngOnDestroy() {
    }

    newInputOutputDrop(inputColumn: DexihDatalinkColumn, outputColumn: DexihDatalinkColumn) {
        this.inputOutputDrop.emit({
            inputColumn: inputColumn,
            outputColumn: outputColumn
        });
    }
}
