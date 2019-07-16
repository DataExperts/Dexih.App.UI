import { Component, Input, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { DexihDatalinkColumn } from '../../../hub.models';
import { Subscription} from 'rxjs';
import { FormGroup } from '@angular/forms';

@Component({

    selector: 'input-columns',
    templateUrl: './input-columns.component.html'
})
export class InputColumnsComponent implements OnInit, OnChanges, OnDestroy {
    @Input() public datalinkTransformForm: FormGroup;

    private _inputColumnsSubscribe: Subscription;
    columns: Array<DexihDatalinkColumn> = [];
    columnGroups: Array<{group: string, columns: Array<DexihDatalinkColumn>}> = [];

    constructor() {
    }

    ngOnInit() {
    }

    ngOnChanges() {
        if (this._inputColumnsSubscribe) { this._inputColumnsSubscribe.unsubscribe(); }

        this.refreshColumns(this.datalinkTransformForm.controls.runTime.value.inputColumns);

        this._inputColumnsSubscribe =  this.datalinkTransformForm.controls.runTime.valueChanges.subscribe(() => {
            this.refreshColumns(this.datalinkTransformForm.controls.runTime.value.inputColumns);
        });
    }

    ngOnDestroy() {
        if (this._inputColumnsSubscribe) { this._inputColumnsSubscribe.unsubscribe(); }
    }

    refreshColumns(columns: DexihDatalinkColumn[]) {
        let previousGroup: string = null;

        let columnGroups: Array<{group: string, columns: Array<DexihDatalinkColumn>}> = [];
        let cols: Array<DexihDatalinkColumn> = null;

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
}
