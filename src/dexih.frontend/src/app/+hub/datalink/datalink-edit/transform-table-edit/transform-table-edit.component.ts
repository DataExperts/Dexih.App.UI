import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DexihTableColumn, eConnectionPurpose, deltaTypes, securityFlags, HubCache } from '../../../hub.models';
import { HubService } from '../../../hub.service';
import { AuthService} from '../../../../+auth/auth.service';
import { Observable, Subscription, BehaviorSubject, combineLatest} from 'rxjs';
import { FormGroup, FormArray } from '@angular/forms';
import { DatalinkEditService } from '../datalink-edit.service';
import { TypeCodes } from '../../../hub.remote.models';

@Component({

    selector: 'transform-table-edit-form',
    templateUrl: './transform-table-edit.component.html',
})
export class TransformTableEditComponent implements OnInit, OnDestroy {

    private _subscription: Subscription;

    public canEdit = false;
    public tableKey: number;

    private hubCache: HubCache;
    public action: string; // new or edit
    public pageTitle: string;

    public mainForm: FormGroup;

    typeCodes = TypeCodes;
    deltaTypes = deltaTypes;
    securityFlags = securityFlags;

    inputColumns: Array<DexihTableColumn>;

    eConnectionPurpose = eConnectionPurpose;

    datalinkTransformKey: number;
    datalinkTransformForm: FormGroup;
    transformTableForm: FormGroup;

    columns = [
        { name: 'position', title: '#', format: ''},
        { control: 'name', title: 'Column Name', format: '', tooltip: 'description'},
        { name: 'dataType', title: 'Data Type', format: ''},
        { name: 'allowDbNull', title: 'Null?', format: 'Boolean'},
        { name: 'logicalName', title: 'Logical Name', format: ''},
        { name: 'updateDate', title: 'Last Updated', format: 'Date'},
    ];

    private _columnData = new BehaviorSubject<Array<DexihTableColumn>>(null);
    columnData: Observable<Array<DexihTableColumn>> = this._columnData.asObservable();

    constructor(
        private hubService: HubService,
        private authService: AuthService,
        private editDatalinkService: DatalinkEditService,
        private route: ActivatedRoute,
        private router: Router,
        ) {
    }

    ngOnInit() {
        try {
            this._subscription = combineLatest(
                this.route.data,
                this.route.params,
                this.hubService.getHubCacheObservable(),
            ).subscribe(result => {
                this.pageTitle = result[0]['pageTitle'];
                let params = result[1];
                this.hubCache = result[2];

                this.datalinkTransformKey = +params['datalinkTransformKey'];
                this.datalinkTransformForm = this.editDatalinkService.getDatalinkTransform(this.datalinkTransformKey);

                this.transformTableForm = <FormGroup>this.datalinkTransformForm.controls.transformTable
                this.updateColumnData();

            });
        } catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Transform Table Edit');
        }
    }

    ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
    }

    updateColumnData() {
        let tableData = [];

        let tableColumns = <FormArray>this.transformTableForm.controls.dexihTableColumns;
        tableColumns.controls
        .filter(c => c.value.isValid)
        .sort((a, b) => a.value.position - b.value.position)
        .forEach(column => {
            const columnForm = <FormGroup>column;
            tableData.push({
                key: column.value.key,
                position: column.value.position,
                name: columnForm.controls.name,
                description: column.value.description,
                dataType: column.value.dataType,
                allowDbNull: column.value.allowDbNull,
                logicalName: column.value.logicalName,
                updateDate: column.value.updateDate,
            });
        });
        this._columnData.next(tableData);
    }

  deleteColumn(column: DexihTableColumn) {
      this.deleteSelected([column]);
  }

  deleteSelected(columns: Array<DexihTableColumn>) {
      const columnsArray = <FormArray>this.transformTableForm.controls.dexihTableColumns;

    columns.forEach(column => {
        let columnIndex = columnsArray.controls.findIndex(c => c.value.key === column.key);
        if (columnIndex >= 0) {
            columnsArray.removeAt(columnIndex);
        }
        this.updateColumnData();
    });
  }

  newColumn() {
    this.router.navigate(['column'], { relativeTo: this.route.parent });
  }

  editColumn(column: DexihTableColumn) {
    this.router.navigate(['column', column.key], { relativeTo: this.route.parent });
  }

  columnSortChange(items: Array<any>) {
        let columnsArray = <FormArray>this.transformTableForm.controls.dexihTableColumns;
      let position = 1;
      items.forEach(c => {
        let column = <FormGroup>columnsArray.controls.find(control => control.value.key === c.key);
        column.controls.position.setValue(position++);
      });

      this.updateColumnData();
  }

  close() {
      this.authService.navigateUp();
  }

}
