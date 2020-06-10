import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { InputOutputColumns, eObjectUse, ColumnUsageNode, eDatalinkObjectType } from '../../../hub.lineage.models';
import { AuthService } from '../../../../+auth/auth.service';
import { HubService } from '../../../hub.service';
import { DatalinkEditService } from '../datalink-edit.service';
import { Observable, Subscription, BehaviorSubject , combineLatest} from 'rxjs';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { HubFormsService } from '../../../hub.forms.service';
import { LogFactory, eLogLevel } from '../../../../../logging';
import { HubCache, eMappingStatus, updateStrategies, loadStrategies, ConnectionTables, lineageMappingStatuses, deltaTypes } from '../../../hub.models';
import { eDeltaType, eUpdateStrategy, eTransformWriterMethod, DexihConnection,
    DexihDatalinkColumn, DexihDatalinkTarget, DexihTable, DexihTableColumn, DexihDatalinkTable, eTypeCode, eSecurityFlag } from '../../../../shared/shared.models';
import { CancelToken } from '../../../../+auth/auth.models';

@Component({

    selector: 'dexih-datalink-edit-target-table',
    templateUrl: './datalink-edit-target-table.component.html'
})
export class DatalinkEditTargetTableComponent implements OnInit, OnDestroy {
    public datalinkForm: FormGroup;
    private hubCache: HubCache;
    public action: string; // new or edit
    public pageTitle: string;
    public message: string;

    private _subscription: Subscription;
    private _loadStrategySubscription: Subscription;
    private _tableFormSubscription: Subscription;
    private _saveSubscription: Subscription;

    private cancelToken: CancelToken = new CancelToken();

    public eMappingStatus = eMappingStatus;
    public eDeltaType = eDeltaType;

    public tableFormService: HubFormsService;

    public eUpdateStrategy = eUpdateStrategy;
    public updateStrategies = updateStrategies;

    public eTransformWriterMethod = eTransformWriterMethod;
    public loadStrategies = loadStrategies;

    public managedConnections: DexihConnection[];
    public connectionTables: ConnectionTables[];

    public showTableProperties = false;
    public showColumn = false;

    private ignoreUpdateTable = false;

    public nodes = [];

    public newTable = false;

    public inputColumns: DexihDatalinkColumn[];

    public targetKey: number;
    public targetTableForm: FormGroup;

    public columnKey: number;
    public deltaType: eDeltaType;

    public showBulkEdit = false;

    private canExit = false;

    public logger = new LogFactory('datalink-edit-target-table');

    columns = [
        { name: 'position', title: '#', format: '' },
        { name: 'columnStatus', title: 'Lineage', format: 'Html' },
        { name: 'name', title: 'Name', format: '' },
        { name: 'logicalName', title: 'Logical', format: '' },
        { name: 'dataType', title: 'Data Type', format: '' },
        { name: 'deltaType', title: 'Delta Type', format: '' },
        { name: 'allowDbNull', title: 'Null?', format: 'Boolean' },
        { name: 'defaultValue', title: 'Default Value', format: '' },
        { name: 'securityFlag', title: 'Security Flag', format: 'Enum', enum: eSecurityFlag },
        { name: 'columnValidation', title: 'Validation', format: '', class: 'columnValidationClass', tooltip: 'columnValidationTooltip' }
    ];

    private _tableData = new BehaviorSubject<Array<any>>(null);
    tableData: Observable<Array<any>> = this._tableData.asObservable();

    private _missingColumnsData = new BehaviorSubject<Array<any>>(null);
    missingColumnsData: Observable<Array<any>> = this._missingColumnsData.asObservable();

    constructor(
        private hubService: HubService,
        private authService: AuthService,
        private editDatalinkService: DatalinkEditService,
        private route: ActivatedRoute,
        private router: Router,
        private fb: FormBuilder) {

        this.tableFormService = new HubFormsService(fb, hubService, authService);
    }

    ngOnInit() {
        this.logger.LogC(() => `ngOnInit`, eLogLevel.Trace);

        try {
            this._subscription = combineLatest(
                this.route.data,
                this.route.params,
                this.hubService.getHubCacheObservable(),
                this.editDatalinkService.hubFormsService.getCurrentFormObservable(),
            ).subscribe(result => {
                let data = result[0];
                let params = result[1];
                this.hubCache = result[2];
                this.datalinkForm = result[3];

                this.action = data['action'];
                this.pageTitle = data['pageTitle'];

                const ioColumns = new InputOutputColumns();
                this.inputColumns = ioColumns.getDatalinkOutputColumns(this.datalinkForm.value);

                if (this.action === 'edit') {
                    this.targetKey = +params['targetKey'];
                    let targets = <FormArray>this.datalinkForm.controls.dexihDatalinkTargets;

                    // create a copy of the target form.
                    let originalTargetTableForm = <FormGroup> targets.controls.find(c => c.value.key === this.targetKey);

                    if (originalTargetTableForm && originalTargetTableForm.controls.key.value <= 0) {
                        this.newTable = true;
                    }

                    // if the table is not found, then navigate back to the parent.
                    if (originalTargetTableForm === undefined) {
                        this.canExit = true;
                        this.authService.navigateUp();
                        return;
                    }

                    this.targetTableForm = this.editDatalinkService.hubFormsService
                        .datalinkTargetFormGroup(originalTargetTableForm.value, originalTargetTableForm.controls.table.value);

                } else if (this.action === 'new') {
                    let target = new DexihDatalinkTarget();
                    target.key = this.hubCache.getNextSequence();
                    this.targetTableForm = this.editDatalinkService.hubFormsService.datalinkTargetFormGroup(target);

                } else {
                    this.hubService.addHubErrorMessage('Invalid action ' + this.action);
                }

                if (this.hubCache.isLoaded() && this.datalinkForm) {
                    this.connectionTables = this.hubCache.getConnectionTables();
                    this.managedConnections = this.hubCache.getManagedConnections();

                    this.updateData();
                    this.resetSubscription();


                    this.logger.LogC(() => `ngOnInit - completed`, eLogLevel.Trace);
                }

                if (this._saveSubscription) { this._saveSubscription.unsubscribe(); }
                this._saveSubscription = this.editDatalinkService.savingDatalink.subscribe(value => {
                    if(value) {
                        this.apply();
                    }
                });
            });
        } catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Edit Target Table');
        }
    }

    ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
        if (this._loadStrategySubscription) { this._loadStrategySubscription.unsubscribe(); }
        if (this._tableFormSubscription) { this._tableFormSubscription.unsubscribe(); }
        if (this._saveSubscription) { this._saveSubscription.unsubscribe(); }
    }

    canDeactivate(): Promise<boolean> {
        return new Promise<boolean>(resolve => {
          if (!this.canExit && this.targetTableForm?.dirty) {
            this.authService.confirmDialog('Target Table Changed',
            'The table has changed.  Would you like to discard the changes and return to the previous screen?  Otherwise, use the apply button to save the changes.'
            ).then(confirm => {
              resolve(confirm);
            }).catch(reason => {
              resolve(false);
            });
          } else {
            resolve(true);
          }
        });
      }

    resetSubscription() {
        if (this._tableFormSubscription) { this._tableFormSubscription.unsubscribe(); }
        this._tableFormSubscription = this.targetTableForm.controls.tableKey.valueChanges.subscribe(() => {
            this.updateData();
        });
    }

    previewData() {
        this.router.navigate(['preview-table-data', this.targetTableForm.controls.tableKey.value], { relativeTo: this.route });
    }

    columnStatus(table: DexihTable, column: DexihTableColumn): string {
        let columnUsage: ColumnUsageNode = new ColumnUsageNode(
            eDatalinkObjectType.TargetTable, eObjectUse.Target,
            this.datalinkForm.value, null, column, null, null, eMappingStatus.NotMapped, this.hubCache);
        const lineage = columnUsage.createDatalinkLineage(true);
        const mappingStatus = lineageMappingStatuses.find(c => c.key === lineage);
        if (mappingStatus) {
            return `<i class="${mappingStatus.statusClass}"></i>&nbsp;${mappingStatus.name}`
        }
    }

    datalinkColumnStatus(table: DexihDatalinkTable, column: DexihDatalinkColumn): string {
        let columnUsage: ColumnUsageNode = new ColumnUsageNode(
            eDatalinkObjectType.TargetTable, eObjectUse.Target,
            this.datalinkForm.value, column, null, null, null, eMappingStatus.NotMapped, this.hubCache);
        const lineage = columnUsage.createDatalinkLineage(true);
        const mappingStatus = lineageMappingStatuses.find(c => c.key === lineage);
        if (mappingStatus) {
            return `<i class="${mappingStatus.statusClass}"></i>&nbsp;${mappingStatus.name}`
        }
    }

    private addNodeColumns(columns: DexihDatalinkColumn[], path: string) {
        if (!path) {
            this.nodes = [];
        }
        if (columns) {
            columns.filter(c => c.dataType === eTypeCode.Node && c.isValid).forEach(col => {
                let name = path ? (path + '.' + col.logicalName) : col.logicalName;
                this.nodes.push({key: col.key, name: name});

                if (col.childColumns && col.childColumns.length > 0) {
                    this.addNodeColumns(col.childColumns, name);
                }
            });
        }
    }

    updateData() {
        if (this.ignoreUpdateTable) {
            return;
        }

        this.logger.LogC(() => `updateData started`, eLogLevel.Trace);
        this.showBulkEdit = false;

        let validation = this.editDatalinkService.getValidationTransform()

        this.tableFormService.startForm(<FormGroup>this.targetTableForm.controls.table)
        if (this.targetTableForm.controls.table) {

            if (!this.targetTableForm.controls.table.value) {
                this.logger.LogC(() => `updateData no targetTable specified.`, eLogLevel.Trace);
                this._tableData.next(null);
            } else {
                const table = this.targetTableForm.controls.table.value;
                this.logger.LogC(() => `updateData targetTable ${table.name}`, eLogLevel.Trace);

                let columnData = [];
                table.dexihTableColumns
                    .filter(c => c.isValid)
                    .sort((a, b) => a.position - b.position)
                    .forEach(column => {
                        let deltaType = deltaTypes.find(c => c.key === column.deltaType);
                        let newColumn = {
                            key: column.key,
                            position: column.position,
                            columnStatus: this.columnStatus(table, column),
                            name: column.name,
                            dataType: this.hubCache.dataTypeToString(column),
                            deltaType: deltaType ? deltaType.name : 'Not specified',
                            allowDbNull: column.allowDbNull,
                            logicalName: column.logicalName,
                            isIncrementalUpdate: column.isIncrementalUpdate,
                            securityFlag: column.securityFlag,
                            defaultValue: column.defaultValue,
                            columnValidation: this.hubCache.getColumnValidation(column.columnValidationKey).name,
                            columnValidationClass: column.columnValidationKey && !validation ? 'dexih-error-icon' : '',
                            columnValidationTooltip: column.columnValidationKey && !validation ?
                                'Enabled the validation transform for this to function' : '',
                        };

                        columnData.push(newColumn);
                    });

                this._tableData.next(columnData);

                let validColumns = this.validColumns();

                if (validColumns) {
                    this.addNodeColumns(validColumns, '');

                    let missingColumnData = [];
                    let position = 0;
                    validColumns.forEach(column => {
                        if (table.dexihTableColumns.findIndex(c => c.name === column.name) < 0 &&
                            missingColumnData.findIndex(c => c.name === column.name) < 0) {
                            let deltaType = deltaTypes.find(c => c.key === column.deltaType);
                            let newColumn = {
                                key: column.key,
                                position: column.position + position,
                                columnStatus: this.datalinkColumnStatus(table, column),
                                name: column.name,
                                dataType: this.hubCache
                                    .dataTypeToString(column),
                                deltaType: deltaType ? deltaType.name : 'Not specified',
                                allowDbNull: column.allowDbNull,
                                logicalName: column.logicalName,
                                isIncrementalUpdate: column.isIncrementalUpdate,
                                securityFlag: column.securityFlag,
                                defaultValue: column.defaultValue,
                                columnValidation: '',
                            };
                            missingColumnData.push(newColumn);
                        }
                        position += 1000;
                    });
                    this._missingColumnsData.next(missingColumnData);
                }

                this.logger.LogC(() => `updateData columns loaded`, eLogLevel.Trace);
            }
        } else {
            this._tableData.next(null);
        }
    }

    validColumns(): DexihDatalinkColumn[] {
        let validColumns = this.inputColumns;

        if (this.targetTableForm.controls.nodeDatalinkColumn && this.targetTableForm.controls.nodeDatalinkColumn.value) {
            let io = new InputOutputColumns();
            validColumns =  io.validColumns(this.targetTableForm.controls.nodeDatalinkColumn.value.key,
                    this.inputColumns);
        }

        return validColumns;
    }

    addMissing(items: Array<DexihDatalinkColumn>) {
        this.logger.LogC(() => `addMissing started`, eLogLevel.Trace);

        const tableForm = <FormGroup>this.targetTableForm.controls.table;

        // const ioColumns = new InputOutputColumns();
        // const outputColumns = ioColumns.getDatalinkOutputColumns(this.datalinkForm.value);

        const outputColumns = this.validColumns();

        if (tableForm && outputColumns) {
            const tableColumns = <FormArray>tableForm.controls.dexihTableColumns;
            items.forEach(item => {
                let missingColumn: DexihDatalinkColumn = null;
                outputColumns.forEach(column => {
                    if (!missingColumn && item.key === column.key) {
                        missingColumn = column;
                    }
                });
                if (missingColumn) {
                    const newColumn = new DexihTableColumn();

                    Object.assign(newColumn, missingColumn);

                    this.resetColumnKeys(newColumn);
                    let positions = tableColumns.controls.map<number>(c => <number>c.value.position);
                    let position = positions.length === 0 ? 0 : Math.max(...positions) + 1; // add the the last position
                    newColumn.position = position;
                    const columnForm = this.editDatalinkService.hubFormsService.tableColumn(tableColumns.value, newColumn);
                    tableColumns.push(columnForm);
                    tableForm.markAsDirty();
                    this.targetTableForm.markAsDirty();
                }
            });
            this.updateData();
        }
        this.logger.LogC(() => `addMissing completed`, eLogLevel.Trace);
    }

    resetColumnKeys(column: DexihTableColumn) {
        column.key = this.hubCache.getNextSequence();

        if (column.childColumns) {
            column.childColumns.forEach(childColumn => this.resetColumnKeys(childColumn));
        }
    }

    toggleNewTable() {
        this.logger.LogC(() => `newTable started`, eLogLevel.Trace);

        if (this.newTable) {
            const newTable = new DexihTable();
            this.targetTableForm.setControl('table', this.editDatalinkService.hubFormsService.tableForm(newTable));
            this.targetTableForm.controls.tableKey.setValue(0);
            this.resetSubscription();
            this.addMissing(this._missingColumnsData.value);

            this.showTableProperties = true;
        }

        this.logger.LogC(() => `newTable completed`, eLogLevel.Trace);
    }

    editColumn(column: DexihTableColumn) {
        this.columnKey = column.key;
        this.showColumn = true;
    }

    newColumn(deltaType: eDeltaType) {
        if (deltaType !== null) {
            const tableForm = <FormGroup>this.targetTableForm.controls.table;
            const tableColumns = <FormArray>tableForm.controls.dexihTableColumns;
            let newColumn = this.hubCache.newColumn(tableForm.value, deltaType);
            if (newColumn === null) {
                this.authService.informationDialog('Invalid column.', `The column ${deltaType} could not be added as it already exists.`);
                return;
            }
            const columnForm = this.editDatalinkService.hubFormsService.tableColumn(tableColumns.value, newColumn);
            tableColumns.push(columnForm);
            tableForm.markAsDirty();
            this.targetTableForm.markAsDirty();
        } else {
            this.columnKey = null;
            this.deltaType = deltaType;
            this.showColumn = true;
        }
    }

    deleteColumns(columns: Array<DexihTableColumn>) {
        columns.forEach(column => {
            const tableForm = <FormGroup>this.targetTableForm.controls.table;
            const tableColumns = <FormArray>tableForm.controls.dexihTableColumns;
            const index = tableColumns.controls.findIndex(c => c.value.key === column.key);
            if (index >= 0) {
                tableColumns.removeAt(index);
                tableForm.markAsDirty();
            }
        });

        this.updateData();
    }

    importTable() {
        const table: DexihTable = this.targetTableForm.controls.table.value;
        const connection = this.hubCache.getConnection(table.connectionKey)
        this.hubService.importTables([table], false, this.cancelToken)
            .then(tables => {
                if (!tables || tables.length === 0) { return; }
                const returnTable: any = tables[0];
                returnTable.useLogical =
                    this.hubCache.defaultTableLogicalName(returnTable.schema, returnTable.name) !== returnTable.logicalName;
                let tableForm = this.editDatalinkService.hubFormsService.tableForm(returnTable);
                this.targetTableForm.controls.tableKey.setValue(returnTable.key);
                this.targetTableForm.setControl('table', tableForm);
            }).catch(reason => {
                // this.hubService.addHubErrorMessage(reason);
            });
    }

    createTable() {
        const table: DexihTable = this.targetTableForm.controls.table.value;
        const connection = this.hubCache.getConnection(table.connectionKey)
        this.hubService.createTables([table], this.cancelToken)
            .then(tables => {
                this.hubService.addHubSuccessMessage('The table was created successfully.');
                // this.targetTableForm.controls.table.setValue(returnTable);
            }).catch(reason => {
                // this.hubService.addHubErrorMessage(reason);
            });
    }

    columnSortChange(items: Array<DexihTableColumn>) {
        this.logger.LogC(() => `columns sort change - started `, eLogLevel.Trace);
        this.tableFormService.IgnoreFormChange = true;
        this.editDatalinkService.hubFormsService.IgnoreFormChange = true;
        this.ignoreUpdateTable = true;
        const tableForm = <FormGroup>this.targetTableForm.controls.table;
        let columnsArray = <FormArray>tableForm.controls.dexihTableColumns;
        let position = 1;
        items.forEach(c => {
            let column = <FormGroup>columnsArray.controls.find(control => control.value.key === c.key);
            column.controls.position.setValue(position++);
        });

        tableForm.markAsDirty();
        this.editDatalinkService.hubFormsService.IgnoreFormChange = false;
        this.tableFormService.IgnoreFormChange = false;
        this.ignoreUpdateTable = false;
        this.updateData();
        this.logger.LogC(() => `columns sort change - finished `, eLogLevel.Trace);
    }

    columnUpdated() {
        this.showColumn = false;
        this.updateData();
    }

    saveTable() {
        const table: DexihTable = this.targetTableForm.controls.table.value;
        this.hubService.saveTables([table]).then(savedTables => {
            let savedTable = savedTables[0];
            this.targetTableForm.setControl('table', this.editDatalinkService.hubFormsService.tableForm(savedTable));
            this.targetTableForm.controls.tableKey.setValue(savedTable.key);
            this.resetSubscription();
            this.editDatalinkService.hubFormsService.save(false);
        });
    }

    apply() {
        if (this.targetTableForm.dirty) {
            let targets = <FormArray>this.datalinkForm.controls.dexihDatalinkTargets;
            let index = targets.length;
            if (this.action === 'edit') {
                index = targets.controls.findIndex(c => c.value.key === this.targetKey);
                targets.removeAt(index);
            }
            targets.insert(index, this.targetTableForm);
            targets.markAsDirty();
            this.canExit = true;
            this.authService.navigateUp();
        }
    }
}
