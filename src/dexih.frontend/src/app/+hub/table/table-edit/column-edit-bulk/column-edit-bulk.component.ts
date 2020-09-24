import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import {  deltaTypes, securityFlags, HubCache } from '../../../hub.models';
import { FormsService } from '../../../../shared/forms/forms.service';
import { HubFormsService } from '../../../hub.forms.service';
import { columnDateFormats, columnNumberFormats, columnTimeFormats, TypeCodes } from '../../../hub.remote.models';
import { DexihTableColumn } from '../../../../shared/shared.models';
import { HubService } from '../../../hub.service';
import { Subscription } from 'rxjs';
import { LinearGaugeComponent } from '@swimlane/ngx-charts';

@Component({
    selector: 'column-edit-bulk',
    templateUrl: 'column-edit-bulk.component.html'
})

export class ColumnEditBulkComponent implements OnInit, OnDestroy {
    @Input() columns: DexihTableColumn[];
    @Input() columnsFormArray: FormArray;

    @Output() updated = new EventEmitter();

    subscription: Subscription;

    public properties = [
        {name: 'Group Name', property: 'group'},
        {name: 'Data Type', property: 'dataType'},
        {name: 'Delta Type', property: 'deltaType'},
        {name: 'Format', property: 'format'},
        {name: 'Security Flag', property: 'securityFlag'},
        {name: 'Default Value', property: 'defaultValue'},
        {name: 'Validation Rule', property: 'validationRule'},
        {name: 'Allow DbNull', property: 'allowDbNull'},
        {name: 'Is Input', property: 'isInput'},
        {name: 'Is Unicode', property: 'isUnicode'},
    ];

    hubCache: HubCache;
    property: string;
    bulkColumn: FormGroup;
    typeCodes = TypeCodes;
    deltaTypes = deltaTypes;
    securityFlags = securityFlags;
    formats = columnNumberFormats.concat(columnDateFormats.concat(columnTimeFormats));

    constructor(private hubService: HubService,
        private formsService: HubFormsService) { }

    ngOnInit() {
        this.bulkColumn = this.formsService.tableColumn([], new DexihTableColumn());

        this.subscription = this.hubService.getHubCacheObservable().subscribe(hubCache => {
            this.hubCache = hubCache;
        });
    }

    ngOnDestroy() {
        if (this.subscription) {this.subscription.unsubscribe(); }
    }

    getColumnForm(column: DexihTableColumn): FormGroup {
        return <FormGroup> this.columnsFormArray.controls.find((c: FormGroup) => c.controls.key.value === column.key);
    }

    applyBulkEdit() {

        let bulkColumn = <DexihTableColumn> this.bulkColumn.value;

        if(this.columnsFormArray) {
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
                    case 'format':
                        columnForm.controls.format.setValue(bulkColumn.format);
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
        } else {
            this.columns.forEach(column => {
                switch (this.property) {
                    case 'group':
                        column.columnGroup = bulkColumn.columnGroup;
                        break;
                    case 'dataType':
                        column.dataType = bulkColumn.dataType;
                        column.maxLength = bulkColumn.maxLength;
                        column.rank = bulkColumn.rank;
                        column.precision = bulkColumn.precision;
                        column.scale = bulkColumn.scale;
                        break;
                    case 'deltaType':
                        column.deltaType = bulkColumn.deltaType;
                        break;
                    case 'format':
                        column.format = bulkColumn.format;
                        break;
                    case 'securityFlag':
                        column.securityFlag = bulkColumn.securityFlag;
                        break;
                    case 'defaultValue':
                        column.defaultValue = bulkColumn.defaultValue;
                        break;
                    case 'validationRule':
                        column.columnValidationKey = bulkColumn.columnValidationKey;
                        break;
                    case 'allowDbNull':
                        column.allowDbNull = bulkColumn.allowDbNull;
                        break;
                    case 'isUnicode':
                        column.isUnicode = bulkColumn.isUnicode;
                        break;
                    case 'isInput':
                        column.isInput = bulkColumn.isInput;
                        break;
                }
            });
        }

        this.updated.emit();

      }

      cancel() {
          this.updated.emit();
      }

      setAllowDbNull(value: boolean) {
        this.columns.forEach(column => {
            if (this.columnsFormArray) {
                let columnForm = this.getColumnForm(column);
                columnForm.controls.allowDbNull.setValue(value);
            } else {
                column.allowDbNull = value
            }
        });
      }

      setIsInput(value: boolean) {
        this.columns.forEach(column  => {
            if (this.columnsFormArray) {
                let columnForm = this.getColumnForm(column);
            columnForm.controls.isInput.setValue(value);
            } else {
                column.isInput = value
            }
        });
      }

      setIsUnicode(value: boolean) {
        this.columns.forEach(column  => {
            if (this.columnsFormArray) {
                let columnForm = this.getColumnForm(column);
            columnForm.controls.isUnicode.setValue(value);
            } else {
                column.isUnicode = value
            }
        });
      }
}
