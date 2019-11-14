import { Component, Input, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { Subscription} from 'rxjs';
import { FormGroup } from '@angular/forms';
import { DexihDatalinkColumn } from '../../../../shared/shared.models';
import { DatalinkEditService } from '../datalink-edit.service';

@Component({

    selector: 'input-columns',
    templateUrl: './input-columns.component.html'
})
export class InputColumnsComponent implements OnInit, OnChanges, OnDestroy {
    @Input() public datalinkTransformForm: FormGroup;

    private _inputColumnsSubscribe: Subscription;
    columns: Array<DexihDatalinkColumn> = [];
    columnGroups: Array<{group: string, columns: Array<DexihDatalinkColumn>}> = [];

    constructor(private editDatalinkService: DatalinkEditService) {
    }

    ngOnInit() {
    }

    ngOnChanges() {
        if (this._inputColumnsSubscribe) { this._inputColumnsSubscribe.unsubscribe(); }

        this.columnGroups = this.editDatalinkService.getColumnGroups(this.datalinkTransformForm.controls.runTime.value.inputColumns);

        this._inputColumnsSubscribe =  this.datalinkTransformForm.controls.runTime.valueChanges.subscribe(() => {
            this.columnGroups = this.editDatalinkService.getColumnGroups(this.datalinkTransformForm.controls.runTime.value.inputColumns);
        });
    }

    ngOnDestroy() {
        if (this._inputColumnsSubscribe) { this._inputColumnsSubscribe.unsubscribe(); }
    }
}
