import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HubCache, sourceTypes, eMappingStatus, impactMappingStatuses } from '../../../hub.models';
import { HubService } from '../../../hub.service';
import { Observable, Subscription, BehaviorSubject , combineLatest} from 'rxjs';
import { DatalinkEditService } from '../datalink-edit.service';
import { eObjectUse, ColumnUsageNode, eDatalinkObjectType } from '../../../hub.lineage.models';
import { FormGroup, FormArray } from '@angular/forms';
import { DexihDatalinkTable, eSourceType, DexihDatalinkColumn, eSecurityFlag, eDeltaType } from '../../../../shared/shared.models';
import { AuthService } from '../../../../+auth/auth.service';

@Component({
    selector: 'dexih-datalink-edit-source-table-form',
    templateUrl: './datalink-edit-source-table.component.html'
})
export class DatalinkEditSourceTableComponent implements OnInit, OnDestroy {
    public datalinkForm: FormGroup;

    private _subscription: Subscription;
    private _sourceSubscription: Subscription;

    public sourceTables: DexihDatalinkTable[];
    private hubCache: HubCache;
    public action: string; // new or edit
    public pageTitle: string;
    public message: string;

    public eMappingStatus = eMappingStatus;

    public eSourceType = eSourceType;
    public sourceTypes = sourceTypes;

    columns = [
        { name: 'position', title: '#', format: '' },
        { name: 'columnStatus', title: 'Impact', format: 'Html' },
        { name: 'columnGroup', title: 'Group', format: '' },
        { name: 'name', title: 'Name', format: '' },
        { name: 'logicalName', title: 'Logical', format: '' },
        { name: 'dataType', title: 'Data Type', format: '' },
        { name: 'deltaType', title: 'Delta Type', format: 'Enum', enum: eDeltaType },
        { name: 'allowDbNull', title: 'Null?', format: 'Boolean' },
        { name: 'isIncrementalUpdate', title: 'Incremental?', format: 'Boolean' },
        { name: 'securityFlag', title: 'Security Flag', format: 'Enum', enum: eSecurityFlag },
        { name: 'isInput', title: 'Input?', format: 'Boolean' },
    ];

    private _tableData = new BehaviorSubject<Array<any>>(null);
    tableData: Observable<Array<any>> = this._tableData.asObservable();

    constructor(
        private authService: AuthService,
        private hubService: HubService,
        private editDatalinkService: DatalinkEditService,
        private route: ActivatedRoute,
        private router: Router) {
    }

    ngOnInit() {
        try {
            this._subscription = combineLatest(
                this.route.data,
                this.route.params,
                this.hubService.getHubCacheObservable(),
                this.editDatalinkService.hubFormsService.getCurrentFormObservable()
            ).subscribe(result => {
                this.pageTitle = result[0]['pageTitle'];
                this.hubCache = result[2];
                this.datalinkForm = result[3];

                if (this.datalinkForm) {
                    this.updateData();

                    if (this._sourceSubscription) { this._sourceSubscription.unsubscribe(); }
                    const sourceDatalinkTable = <FormGroup> this.datalinkForm.controls.sourceDatalinkTable;
                    this._sourceSubscription = sourceDatalinkTable.controls.dexihDatalinkColumns.valueChanges.subscribe(() => {
                        this.updateData();
                    });
                }
            });
        } catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Datalink Edit Source Table');
        }


    }

    ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
        if (this._sourceSubscription) { this._sourceSubscription.unsubscribe(); }
    }

    previewData() {
        let sourceDatalinkTable = <DexihDatalinkTable> this.datalinkForm.controls.sourceDatalinkTable.value;

        switch (sourceDatalinkTable.sourceType) {
            case eSourceType.Table:
                let sourceTableKey = sourceDatalinkTable.sourceTableKey;
                this.router.navigate(['preview-table-data', 'table', sourceTableKey], { relativeTo: this.route });
                break;
            case eSourceType.Datalink:
                let datalinkKey = sourceDatalinkTable.sourceDatalinkKey;
                this.router.navigate(['preview-table-data', 'datalink', datalinkKey], { relativeTo: this.route });
                break;
            default:
                this.authService.informationDialog('Cannot Preview', 'Previews are only available for tables and datalinks.');
                break;
        }
    }

    columnStatus(column: DexihDatalinkColumn): string {
        let columnUsage: ColumnUsageNode = new ColumnUsageNode(
            eDatalinkObjectType.SourceTable,
            eObjectUse.Source,
            this.datalinkForm.value,
            column,
            null,
            null,
            null,
            eMappingStatus.PassThroughMap,
            this.hubCache
        );
        const lineage = columnUsage.createDatalinkImpact(true);
        const mappingStatus = impactMappingStatuses.find(c => c.key === lineage);
        if (mappingStatus) {
            return `${mappingStatus.name}<i class="float-right ${mappingStatus.statusClass}"></i>`
        }
    }

    updateData() {
        let sourceDatalinkTable = <FormGroup>this.datalinkForm.controls.sourceDatalinkTable;
        let columnData = [];

        let columnsArray = <FormArray>sourceDatalinkTable.controls.dexihDatalinkColumns;

        columnsArray.controls.filter(c => c.value.isValid)
            .sort((a, b) => a.value.position - b.value.position)
            .forEach(columnForm => {
                let column = <DexihDatalinkColumn> columnForm.value;
                let newColumn = {
                    key: column.key,
                    position: column.position,
                    columnStatus: this.columnStatus(column),
                    columnGroup: column.columnGroup,
                    name: column.name,
                    dataType: this.hubCache.dataTypeToString(column),
                    deltaType: column.deltaType,
                    allowDbNull: column.allowDbNull,
                    logicalName: column.logicalName,
                    isIncrementalUpdate: column.isIncrementalUpdate,
                    securityFlag: column.securityFlag,
                    isInput: column.isInput
                };

            columnData.push(newColumn);
        });

        this._tableData.next(columnData);
    }

    deleteSelected(columns: Array<DexihDatalinkColumn>) {
        let sourceDatalinkTable = <FormGroup>this.datalinkForm.controls.sourceDatalinkTable;
        let columnsArray = <FormArray>sourceDatalinkTable.controls.dexihDatalinkColumns;

        columns.forEach(column => {
            let index = columnsArray.controls.findIndex(c => c.value.key === column.key);
            columnsArray.removeAt(index);
        });

        this.updateData();
    }

    newColumn() {
        this.router.navigate(['newcolumn'], { relativeTo: this.route.parent });
    }

    editColumn(column: DexihDatalinkColumn) {
        this.router.navigate(['column', column.key], { relativeTo: this.route.parent });
    }

    columnSortChange(items: Array<DexihDatalinkColumn>) {
        let sourceDatalinkTable = <FormGroup>this.datalinkForm.controls.sourceDatalinkTable;
        let existingItems = <FormArray>sourceDatalinkTable.controls.dexihDatalinkColumns;

        let position = 1;
        items.forEach(item => {
            let column = <FormGroup>existingItems.controls.find(c => c.value.key === item.key);
            if (column) {
                column.controls.position.setValue(position++);
            }
        });

        this.updateData();
    }
}
