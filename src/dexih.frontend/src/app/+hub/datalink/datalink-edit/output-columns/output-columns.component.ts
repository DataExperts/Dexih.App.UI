import { Component, Input, Output, OnInit, OnChanges, OnDestroy, EventEmitter } from '@angular/core';
import { combineLatest, forkJoin, merge, Subscription } from 'rxjs';
import { FormGroup } from '@angular/forms';
import { DexihDatalinkColumn } from '../../../../shared/shared.models';
import { timeout } from 'rxjs/operators';

@Component({

    selector: 'output-columns',
    templateUrl: './output-columns.component.html'
})
export class OutputColumnsComponent implements OnInit, OnChanges, OnDestroy {
    @Input() public datalinkTransformForm: FormGroup;
    @Input() public allowMappingOutputs = true;

    @Output() public inputOutputDrop: EventEmitter<{ inputColumn: DexihDatalinkColumn, outputColumn: DexihDatalinkColumn }>
        = new EventEmitter<{ inputColumn: DexihDatalinkColumn, outputColumn: DexihDatalinkColumn }>();

    private _outputColumnsSubscribe: Subscription;
    columns: Array<DexihDatalinkColumn> = [];
    columnGroups: Array<{group: string, columns: Array<DexihDatalinkColumn>}> = [];

    constructor(
    ) {
    }

    ngOnInit() {
    }

    ngOnChanges() {
        if (this._outputColumnsSubscribe) { this._outputColumnsSubscribe.unsubscribe(); }
        this.refreshColumns(this.datalinkTransformForm.controls.runTime.value.transformColumns);
        this._outputColumnsSubscribe = this.datalinkTransformForm.controls.runTime.valueChanges.subscribe(() => {
            this.refreshColumns(this.datalinkTransformForm.controls.runTime.value.transformColumns);
        });

        this.datalinkTransformForm.controls.passThroughColumns.valueChanges.subscribe(() => {
            setTimeout(() => {
                this.refreshColumns(this.datalinkTransformForm.controls.runTime.value.transformColumns);
            }, 0);
            
        });


    }

    ngOnDestroy() {
        if (this._outputColumnsSubscribe) { this._outputColumnsSubscribe.unsubscribe(); }
    }

    refreshColumns(columns: DexihDatalinkColumn[]) {
        let previousGroup: string = null;

        let columnGroups: Array<{group: string, columns: Array<DexihDatalinkColumn>}> = [];
        let cols: Array<DexihDatalinkColumn> = null;

        if(columns === null) {
            return;
        }
        
        columns
            .filter(c => c.isValid)
            .sort((a, b) => a.position - b.position)
            .forEach(column => {
            let group = column.columnGroup ? column.columnGroup : '(un-grouped)';
            if (group !== previousGroup) {
                if (cols) {
                    columnGroups.push({group: previousGroup, columns: cols});
                }
                previousGroup = group;
                cols = [];
            }
            cols.push(column);
        });

        if (cols && cols.length > 0) {
            columnGroups.push({group: previousGroup, columns: cols});
        }

        this.columnGroups = columnGroups;
    }

    // triggered when a source column is dropped onto the output column
    newOutputDrop(inputColumn: DexihDatalinkColumn) {
        let outputColumn = this.columns.find(c => c.name === inputColumn.name);
        this.inputOutputDrop.emit({
            inputColumn: inputColumn,
            outputColumn: outputColumn
        });
    }

    newInputOutputDrop(inputColumn: DexihDatalinkColumn, outputColumn: DexihDatalinkColumn) {
        this.inputOutputDrop.emit({
            inputColumn: inputColumn,
            outputColumn: outputColumn
        });
    }
}
