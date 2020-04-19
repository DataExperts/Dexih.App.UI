import { Component, OnInit, OnChanges, OnDestroy, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HubService } from '../../../hub.service';
import { Subscription, Observable, BehaviorSubject} from 'rxjs';
import { FormGroup, FormArray } from '@angular/forms';
import { HubFormsService } from '../../../hub.forms.service';
import { HubCache, deltaTypes, securityFlags, eCacheStatus } from '../../../hub.models';
import { DexihTableColumn, eConnectionPurpose } from '../../../../shared/shared.models';

@Component({

    selector: 'table-edit-columns',
    templateUrl: './table-edit-columns.component.html',
})
export class TableEditColumnsComponent implements OnInit, OnChanges, OnDestroy {
    @Input() tableForm: FormGroup;
    @Input() parentColumnForm: FormGroup;

    private _hubCacheSubscription: Subscription;
    private _tableFormSubscription: Subscription;

    public entityType = 'Table';

    public canEdit = false;
    public tableKey: number;

    private hubCache: HubCache;
    public action: string; // new or edit
    public pageTitle: string;

    public mainForm: FormGroup;

    private deltaTypes = deltaTypes;
    private securityFlags = securityFlags;
    public showBulkEdit = false;

    inputColumns: Array<DexihTableColumn>;

    eConnectionPurpose = eConnectionPurpose;

    columns = [
        { name: 'position', title: '#', format: ''},
        { name: 'name', title: 'Column Name', format: '', class: 'nameClass', tooltip: 'description'},
        { name: 'logicalName', title: 'Logical Name', format: 'Md', footer: 'description', class: 'logicalNameClass'},
        { name: 'isInput', title: 'Input?', format: 'Boolean'},
        { name: 'dataType', title: 'Data Type', format: ''},
        { name: 'allowDbNull', title: 'Null?', format: 'Boolean'},
        { name: 'deltaType', title: 'Delta Type', format: ''},
        { name: 'defaultValue', title: 'Default Value', format: ''},
        { name: 'columnValidation', title: 'Column Validation', format: ''},
        { name: 'isIncrementalUpdate', title: 'Is Incremental', format: 'Boolean'},
        { name: 'securityFlag', title: 'Security Flag', format: ''},
        { name: 'updateDate', title: 'Last Modified', format: 'DateTime'},
    ];

    private _columnData = new BehaviorSubject<Array<DexihTableColumn>>(null);
    columnData: Observable<Array<DexihTableColumn>> = this._columnData.asObservable();

    constructor(
        private hubService: HubService,
        public formsService: HubFormsService,
        private route: ActivatedRoute,
        private router: Router) {
    }

    ngOnInit() {
        // load the initial connection from the cache
        this._hubCacheSubscription = this.hubService.getHubCacheObservable().subscribe(cache => {
            if (cache && cache.status === eCacheStatus.Loaded) {
                this.hubCache = cache;
                this.updateColumnData();
            }
        });
    }

    ngOnChanges() {
        if (this._tableFormSubscription) { this._tableFormSubscription.unsubscribe(); }
        if (this.formsService.currentForm) {
            this._tableFormSubscription = this.formsService.currentForm.valueChanges.subscribe(() => this.updateColumnData());
        }
        this.updateColumnData();
    }

    ngOnDestroy() {
        if (this._hubCacheSubscription) { this._hubCacheSubscription.unsubscribe(); }
        if (this._tableFormSubscription) { this._tableFormSubscription.unsubscribe(); }
    }

    updateColumnData() {
        if (this.hubCache && this.formsService.currentForm) {
            let tableData = [];

            let columns: FormArray;

            if (this.parentColumnForm) {
                columns = <FormArray>this.parentColumnForm.controls.childColumns;
            } else {
                columns = <FormArray>this.formsService.currentForm.controls.dexihTableColumns;
            }

            columns.controls
                .filter(c => c.value.isValid)
                .sort((a, b) => a.value.position - b.value.position)
                .forEach(column => {
                    let columnForm = <FormGroup>column;
                    tableData.push({
                        key: column.value.key,
                        position: column.value.position,
                        name: (column.value.columnGroup ? column.value.columnGroup + '.' : '') + column.value.name,
                        nameClass: (columnForm.controls.name.valid ? '' : 'dexih-state-error'),
                        description: column.value.description,
                        isInput: column.value.isInput,
                        dataType: this.hubCache.dataTypeToString(column.value),
                        allowDbNull: column.value.allowDbNull,
                        logicalName: column.value.logicalName,
                        logicalNameClass: (columnForm.controls.logicalName.valid ? '' : 'dexih-error-icon'),
                        deltaType: this.deltaTypes.find(c => c.key === column.value.deltaType).name,
                        defaultValue: column.value.defaultValue,
                        columnValidation: this.hubCache.getColumnValidation(column.value.columnValidationKey).name,
                        isIncrementalUpdate: column.value.isIncrementalUpdate,
                        securityFlag: this.securityFlags.find(c => c.key === column.value.securityFlag).name,
                        updateDate: column.value.updateDate,
                    });
                });
            this._columnData.next(tableData);
        } else {
            this._columnData.next(null);
        }
    }

  deleteColumn(column: DexihTableColumn) {
      this.deleteSelected([column]);
  }

  deleteSelected(columns: Array<DexihTableColumn>) {
      let columnsArray = <FormArray>this.formsService.currentForm.controls.dexihTableColumns;

    columns.forEach(column => {
        let index = columnsArray.controls.findIndex(c => c.value.key === column.key);
        columnsArray.removeAt(index);
    });
    // this._columnData.next(this.table.dexihTableColumns.filter(c => c.isValid));
  }

  newColumn() {
    this.router.navigate(['column'], { relativeTo: this.route.parent });
  }

  editColumn(column: DexihTableColumn) {
    this.router.navigate(['column', column.key], { relativeTo: this.route.parent });
  }

  columnSortChange(items: Array<any>) {
        let columnsArray = <FormArray>this.formsService.currentForm.controls.dexihTableColumns;
      let position = 1;
      items.forEach(c => {
        let column = <FormGroup>columnsArray.controls.find(control => control.value.key === c.key);
        column.controls.position.setValue(position++);
      });

      this.updateColumnData();
  }
}
