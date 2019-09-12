import { Component, Input, Output, OnInit, OnChanges, OnDestroy, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { DexihTable, DexihDatalinkColumn } from '../../../../shared/shared.models';

@Component({

    selector: 'target-columns',
    templateUrl: './target-columns.component.html'
})
export class TargetColumnsComponent implements OnInit, OnChanges, OnDestroy {
    @Input() public datalinkTransformForm: FormGroup;
    @Input() public targets: DexihTable[];
    @Input() public allowMappingOutputs = true;

    @Output() public inputOutputDrop: EventEmitter<{ inputColumn: DexihDatalinkColumn, outputColumn: DexihDatalinkColumn }>
        = new EventEmitter<{ inputColumn: DexihDatalinkColumn, outputColumn: DexihDatalinkColumn }>();

    private _outputColumnsSubscribe: Subscription;

    constructor(
    ) {
    }

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
