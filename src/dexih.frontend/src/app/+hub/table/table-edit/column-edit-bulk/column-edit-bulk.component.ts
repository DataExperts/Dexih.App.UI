import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import {  deltaTypes, securityFlags } from '../../../hub.models';
import { FormsService } from '../../../../shared/forms/forms.service';
import { HubFormsService } from '../../../hub.forms.service';
import { TypeCodes } from '../../../hub.remote.models';
import { DexihTableColumn } from '../../../../shared/shared.models';

@Component({
    selector: 'column-edit-bulk',
    templateUrl: 'column-edit-bulk.component.html'
})

export class ColumnEditBulkComponent implements OnInit {
    @Input() columns: DexihTableColumn[];
    @Input() columnsFormArray: FormArray;

    @Output() updated = new EventEmitter();

    public properties = [
        {name: 'Group Name', property: 'group'},
        {name: 'Data Type', property: 'dataType'},
        {name: 'Delta Type', property: 'deltaType'},
        {name: 'Security Flag', property: 'securityFlag'},
        {name: 'Default Value', property: 'defaultValue'},
        {name: 'Validation Rule', property: 'validationRule'},
        {name: 'Allow DbNull', property: 'allowDbNull'},
        {name: 'Is Input', property: 'isInput'},
        {name: 'Is Unicode', property: 'isUnicode'},
    ];

    property: string;
    bulkColumn: FormGroup;
    typeCodes = TypeCodes;
    deltaTypes = deltaTypes;
    securityFlags = securityFlags;

    constructor(private formsService: HubFormsService) { }

    ngOnInit() {
        this.bulkColumn = this.formsService.tableColumn([], new DexihTableColumn());
    }

    getColumnForm(column: DexihTableColumn): FormGroup {
        return <FormGroup> this.columnsFormArray.controls.find((c: FormGroup) => c.controls.key.value === column.key);
    }

    applyBulkEdit() {

        let bulkColumn = <DexihTableColumn> this.bulkColumn.value;
        this.columns.forEach(column => {
            let columnForm = this.getColumnForm(column);
            if (!columnForm) { return; }

            switch (this.property) {
                case 'group':
                    columnForm.controls.columnGroup.setValue(bulkColumn.columnGroup);
                    break;
                case 'dataType':
                    columnForm.controls.dataType.setValue(bulkColumn.dataType);
                    columnForm.controls.maxLength.setValue(bulkColumn.maxLength);
                    columnForm.controls.rank.setValue(bulkColumn.rank);
                    columnForm.controls.precision.setValue(bulkColumn.precision);
                    columnForm.controls.scale.setValue(bulkColumn.scale);
                    break;
                case 'deltaType':
                    columnForm.controls.deltaType.setValue(bulkColumn.deltaType);
                    break;
                case 'securityFlag':
                    columnForm.controls.securityFlag.setValue(bulkColumn.securityFlag);
                    break;
                case 'defaultValue':
                    columnForm.controls.defaultValue.setValue(bulkColumn.defaultValue);
                    break;
                case 'validationRule':
                    columnForm.controls.columnValidationKey.setValue(bulkColumn.columnValidationKey);
                    break;
                case 'allowDbNull':
                    columnForm.controls.allowDbNull.setValue(bulkColumn.allowDbNull);
                    break;
                case 'isUnicode':
                    columnForm.controls.isUnicode.setValue(bulkColumn.isUnicode);
                    break;
                case 'isInput':
                    columnForm.controls.isInput.setValue(bulkColumn.isInput);
                    break;
            }
        });
        this.updated.emit();
      }

      setAllowDbNull(value: boolean) {
        this.columns.forEach(column => {
            let columnForm = this.getColumnForm(column);
            columnForm.controls.allowDbNull.setValue(value);
        });
      }

      setIsInput(value: boolean) {
        this.columns.forEach(column  => {
            let columnForm = this.getColumnForm(column);
            columnForm.controls.isInput.setValue(value);
        });
      }

      setIsUnicode(value: boolean) {
        this.columns.forEach(column  => {
            let columnForm = this.getColumnForm(column);
            columnForm.controls.isUnicode.setValue(value);
        });
      }
}
