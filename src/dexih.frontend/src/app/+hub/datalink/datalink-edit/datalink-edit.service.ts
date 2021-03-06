import { Injectable, OnDestroy, OnInit } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';
import { AuthService } from '../../../+auth/auth.service';
import { eLogLevel, LogFactory } from '../../../../logging';
import { HubFormsService } from '../../hub.forms.service';
import { InputOutputColumns } from '../../hub.lineage.models';
import { HubService } from '../../hub.service';
import { TransformReference } from '../../hub.remote.models';
import { CancelToken } from '../../../+auth/auth.models';
import { HubCache } from '../../hub.models';
import { eTransformType, DexihDatalinkColumn, eParameterDirection, eTypeCode, DexihDatalinkTransformItem,
    DexihDatalinkTransform, DexihDatalinkTable, eTransformItemType, eSourceType, eFunctionType, RemoteLibraries } from '../../../shared/shared.models';
import { BehaviorSubject, Observable } from 'rxjs';

// contains shared objects used to edit the datalink.

@Injectable()
export class DatalinkEditService implements OnInit, OnDestroy {

    private _hubCache: HubCache;

    public showAllErrors = false;

    public datalinkKey: number;

    public logger = new LogFactory('datalink-edit.service');

    public remoteLibraries: RemoteLibraries;

    // used to stop save occurring when changing functions and target ables.
    savingDatalink = new BehaviorSubject(false);

    constructor(
        private hubService: HubService,
        private authService: AuthService,
        public hubFormsService: HubFormsService) {
    }

    ngOnInit() {
    }

    public init(hubCache: HubCache) {
        this._hubCache = hubCache;

        this.hubService.getRemoteLibrariesPromise().then(remoteLibraries => this.remoteLibraries = remoteLibraries)
    }

    ngOnDestroy() {
        this.hubFormsService.ngOnDestroy();
    }

    savingDataLinkObservable(): Observable<boolean> {
        return this.savingDatalink.asObservable();
    }

    getValidationTransform(): FormGroup {
        this.logger.LogC(() => `getValidationTransform`, eLogLevel.Trace);

        let datalinkForm = this.hubFormsService.currentForm;
        let datalinkTransforms = <FormArray>datalinkForm.controls['dexihDatalinkTransforms'];
        let datalinkTransform = <FormGroup>datalinkTransforms.controls
            .find(c => c.value.transformType === eTransformType.Validation);

        return datalinkTransform;
    }
    
    enableValidation(): FormGroup {
        let transform = this.getValidationTransform();
        if (!transform) {
            let transform = this.remoteLibraries.transforms.find(c => c.transformType === eTransformType.Validation);
            return this.insertDatalinkTransform(1, transform);
        }

        return transform;
    }

    disableValidation() {
        let transform = this.getValidationTransform();
        if (transform) {
            this.deleteDatalinkTransform(transform.value);
        }
    }

    getDatalinkTransform(datalinkTransformKey: number): FormGroup {
        this.logger.LogC(() => `getDatalinkTransform`, eLogLevel.Trace);

        let datalinkForm = this.hubFormsService.currentForm;
        let datalinkTransforms = <FormArray>datalinkForm.controls['dexihDatalinkTransforms'];

        let datalinkTransform = <FormGroup>datalinkTransforms.controls
            .find(c => c.value.key === datalinkTransformKey);

        return datalinkTransform;
    }

    getDatalinkTransformItem(datalinkTransformForm: FormGroup, datalinkTransformItemKey: number): FormGroup {
        this.logger.LogC(() => `getDatalinkTransformItem, key:${datalinkTransformItemKey}.`, eLogLevel.Trace);

        let datalinkTransformItems = <FormArray>datalinkTransformForm.controls['dexihDatalinkTransformItems'];
        let datalinkTransformItem = <FormGroup>datalinkTransformItems.controls
            .find(c => c.value.key === datalinkTransformItemKey);

        this.logger.LogC(() => `getDatalinkTransformItem finished.`, eLogLevel.Trace);

        return datalinkTransformItem;
    }

     // fixes the key mappings when a transform is removed or columns are refreshed
     fixMappings(datalinkForm: FormGroup) {
        let io = new InputOutputColumns();
        let datalinkTransforms = <FormArray> datalinkForm.controls.dexihDatalinkTransforms;
        datalinkTransforms.controls.forEach((datalinkTransformForm: FormGroup) => {
            let inputColumns = <DexihDatalinkColumn[]> datalinkTransformForm.controls.runTime.value.inputColumns;
            let joinColumns = null;
            if (datalinkTransformForm.value.joinDatalinkTable) {
                joinColumns = datalinkTransformForm.value.joinDatalinkTable.dexihDatalinkColumns;
            }

            let nodeColumns = this.getNodeColumns(inputColumns);

            this.fixMapping(nodeColumns, <FormGroup> datalinkTransformForm.controls.nodeDatalinkColumn);
            this.fixMapping(joinColumns, <FormGroup> datalinkTransformForm.controls.joinSortDatalinkColumn);

            // set the inputcolumns to the current node level.
            if (datalinkTransformForm.controls.nodeDatalinkColumn.value) {
                inputColumns = io.getAvailableColumns(inputColumns, datalinkTransformForm.controls.nodeDatalinkColumn.value.key , 0)
            }

            let items = <FormArray> datalinkTransformForm.controls.dexihDatalinkTransformItems;
            items.controls.forEach((item: FormGroup) => {
                this.fixMapping(inputColumns, <FormGroup> item.controls.sourceDatalinkColumn);
                this.fixMapping(joinColumns, <FormGroup> item.controls.joinDatalinkColumn);
                this.fixMapping(inputColumns, <FormGroup> item.controls.filterDatalinkColumn);

                let parameters = <FormArray> item.controls.dexihFunctionParameters;
                parameters.controls.forEach((parameter: FormGroup) => {
                    switch (parameter.controls.direction.value) {
                        case eParameterDirection.Input:
                            this.fixMapping(inputColumns, <FormGroup> parameter.controls.datalinkColumn);
                            break;
                        case eParameterDirection.Join:
                            this.fixMapping(joinColumns, <FormGroup> parameter.controls.datalinkColumn);
                            break;
                    }

                    let arrayParameters = <FormArray> parameter.controls.arrayParameters;
                    arrayParameters.controls.forEach((arrayParameter: FormGroup) => {
                        switch (arrayParameter.controls.direction.value) {
                            case eParameterDirection.Input:
                                this.fixMapping(inputColumns, <FormGroup> arrayParameter.controls.datalinkColumn);
                                break;
                            case eParameterDirection.Join:
                                this.fixMapping(joinColumns, <FormGroup> arrayParameter.controls.datalinkColumn);
                                break;
                        }
                    });
                });
            });
        });
    }

    private getNodeColumns(columns: DexihDatalinkColumn[]): DexihDatalinkColumn[] {
        let nodes: DexihDatalinkColumn[] = [];
        if (columns) {
            columns.filter(c => c.dataType === eTypeCode.Node && c.isValid).forEach(col => {
                nodes.push(col);
                if (col.childColumns && col.childColumns.length > 0) {
                    nodes = nodes.concat(this.getNodeColumns(col.childColumns));
                }
            });
        }

        return nodes;
    }

    private fixMapping(inputColumns: DexihDatalinkColumn[], columnForm: FormGroup) {
        let column  = <DexihDatalinkColumn> columnForm.value;
        if (!inputColumns || !column) { return; }

        if (inputColumns.findIndex(c => c.key === column.key) < 0) {
            let inputColumn = inputColumns
                .find(c => c.name === column.name && c.columnGroup === column.columnGroup);
            if (!inputColumn) {
                inputColumn = inputColumns.find(c => c.name === column.name);
            }

            if (inputColumn) {
                columnForm.setValue(inputColumn);
            }
        }
    }

    public getFunctionType(datalinkTransform: DexihDatalinkTransform): eFunctionType {
        let functionType: eFunctionType;
        switch (datalinkTransform.transformType) {
            case eTransformType.Filter:
                functionType = eFunctionType.Condition;
                break;
            case eTransformType.Mapping:
                functionType = eFunctionType.Map;
                break;
            case eTransformType.Join:
                functionType = eFunctionType.JoinCondition;
                break;
            case eTransformType.Group:
            case eTransformType.Aggregate:
                functionType = eFunctionType.Aggregate;
                break;
            case eTransformType.Series:
                functionType = eFunctionType.Series;
                break;
            case eTransformType.Sort:
                functionType = eFunctionType.Sort;
                break;
            case eTransformType.Validation:
                functionType = eFunctionType.Validate;
                break;
            case eTransformType.Rows:
                functionType = eFunctionType.Rows;
                break;
            case eTransformType.Lookup:
                functionType = eFunctionType.JoinCondition;
                break;
            case eTransformType.Delta:
                break;
        }

        return functionType;
    }

    public getVariables(): string[] {
        let variables = this.hubFormsService.currentForm.controls.parameters.value.map(c => '{' + c.name + '}')
        .concat(this._hubCache.hub.dexihHubVariables.map(c => '{' + c.name + '}'));

        return variables;
    }

    public getColumnGroups(columns: DexihDatalinkColumn[]): Array<{ group: string, columns: Array<DexihDatalinkColumn> }> {
        let previousGroup: string = null;

        let columnGroups: Array<{ group: string, columns: Array<DexihDatalinkColumn> }> = [];
        let cols: Array<DexihDatalinkColumn> = null;

        if (columns === null) {
            return columnGroups;
        }

        columns
            .filter(c => c.isValid)
            .sort((a, b) => a.position - b.position)
            .forEach(column => {
                let group = column.columnGroup ? column.columnGroup : '(un-grouped)';
                if (group !== previousGroup) {
                    if (cols) {
                        columnGroups.push({ group: previousGroup, columns: cols });
                    }
                    previousGroup = group;
                    cols = [];
                }
                cols.push(column);
            });

        if (cols && cols.length > 0) {
            columnGroups.push({ group: previousGroup, columns: cols });
        }

        return columnGroups;
    }

    insertDatalinkTransformItem(datalinkTransformForm: FormGroup, datalinkTransformItemForm: FormGroup): DexihDatalinkTransformItem {
        this.logger.LogC(() => `insertDatalinkTransformItem`, eLogLevel.Trace);

        let datalinkTransformItem = <DexihDatalinkTransformItem> datalinkTransformItemForm.value;

        let datalinkTransformItemsArray = (<FormArray>datalinkTransformForm.controls['dexihDatalinkTransformItems']);
        // use temporary negative keys for items which have not been saved.
        if (!datalinkTransformItem.key) {
            datalinkTransformItem.key = this._hubCache.getNextSequence();
            if (datalinkTransformItemsArray.controls.length === 0) {
                datalinkTransformItem.position = 1;
            } else {
                datalinkTransformItem.position = Math.max.apply(Math, datalinkTransformItemsArray.controls.map(o => o.value.position)) + 1;
            }
            let form = this.hubFormsService.datalinkDatalinkTransformItemFormGroup(datalinkTransformForm, datalinkTransformItem);
            datalinkTransformItemsArray.push(form);
        } else {
            // existing item? lookup previous item and copy the updated values across.
            let currentIndex = datalinkTransformItemsArray.controls
                .findIndex(c => c.value['key'] === datalinkTransformItem.key);
            datalinkTransformItemsArray.removeAt(currentIndex);

            let form = this.hubFormsService.datalinkDatalinkTransformItemFormGroup(datalinkTransformForm, datalinkTransformItem);
            datalinkTransformItemsArray.push(form);
        }

        this.fixMappings(this.hubFormsService.currentForm);

        this.logger.LogC(() => `insertDatalinkTransformItem finished`, eLogLevel.Trace);

        return datalinkTransformItem;
    }

    deleteDatalinkTransformItem(datalinkTransformForm: FormGroup, datalinkTransformItemForm: FormGroup) {
        this.logger.LogC(() => `deleteDatalinkTransformItem`, eLogLevel.Trace);

        let datalinkTransformItems = <FormArray>datalinkTransformForm.controls['dexihDatalinkTransformItems'];
        let index = datalinkTransformItems.controls.indexOf(datalinkTransformItemForm);
        datalinkTransformItems.removeAt(index);

        this.fixMappings(this.hubFormsService.currentForm);
    }

    deleteDatalinkTarget(datalinkForm: FormGroup, datalinkTargetKey: Number) {
        this.logger.LogC(() => `deleteDatalinkTarget`, eLogLevel.Trace);

        let datalinkTargets = <FormArray>datalinkForm.controls['dexihDatalinkTargets'];
        let index = datalinkTargets.controls.findIndex(c => c.value.key === datalinkTargetKey);
        if (index >= 0) {
            datalinkTargets.removeAt(index);
        }
    }

    insertDatalinkTransform(position: number, transform: TransformReference): FormGroup {
        this.logger.LogC(() => `insertDatalinkTransform`, eLogLevel.Trace);

        let datalinkForm = this.hubFormsService.currentForm;
        let datalinkTransforms = <FormArray>datalinkForm.controls['dexihDatalinkTransforms'];

        let newDatalinkTransform = new DexihDatalinkTransform();

        // use temporary negative keys for datalink transforms which have not been saved.
        let minKey = -1;
        datalinkTransforms.controls.forEach(dt => {
            if (dt.value['key'] <= minKey) {
                minKey = dt.value['key'] - 1;
            }
        });

        this.logger.LogC(() => `insertDatalinkTransform key:${minKey}`, eLogLevel.Trace);

        newDatalinkTransform.key = minKey;
        newDatalinkTransform.transformType = transform.transformType;
        newDatalinkTransform.transformAssemblyName = transform.transformAssemblyName;
        newDatalinkTransform.transformClassName = transform.transformClassName;
        // newDatalinkTransform.name = transform.name;
        // newDatalinkTransform.description = transform.description;
        newDatalinkTransform.dexihDatalinkTransformItems = new Array<DexihDatalinkTransformItem>();
        newDatalinkTransform.isValid = true;

        // default pass-through columns off for map, group, and row transforms.
        switch (transform.transformType) {
            case eTransformType.Group:
            case eTransformType.Rows:
            case eTransformType.Mapping:
                newDatalinkTransform.passThroughColumns = false;
                break;
            default:
                newDatalinkTransform.passThroughColumns = true;
        }

        if (transform.transformType === eTransformType.Join
            || transform.transformType === eTransformType.Lookup || transform.transformType === eTransformType.Concatenate) {
            newDatalinkTransform.joinDatalinkTable = new DexihDatalinkTable();
            newDatalinkTransform.joinDatalinkTable.key = this._hubCache.getNextSequence();
        }

        if (transform.transformType === eTransformType.Series) {
            let seriesItem = new DexihDatalinkTransformItem();
            seriesItem.transformItemType = eTransformItemType.Series;
            seriesItem.position = 0;
            seriesItem.isValid = true;
            newDatalinkTransform.dexihDatalinkTransformItems.push(seriesItem);
        }

        newDatalinkTransform.position = position;

        let datalinkTransformForm = this.hubFormsService.datalinkTransformFormGroup(newDatalinkTransform);
        datalinkTransforms.push(datalinkTransformForm);

        this.resetDatalinkTransformPositions();

        this.logger.LogC(() => `insertDatalinkTransform finished.`, eLogLevel.Trace);

        return datalinkTransformForm;
    }

    deleteDatalinkTransform(datalinkTransform: DexihDatalinkTransform): Promise<boolean> {
        return new Promise<boolean>((resolve) => {
            this.authService.confirmDialog('Delete Transform',
                `Are you sure you would like to remove the transform ${datalinkTransform.name}?`)
                .then(confirm => {
                    if (confirm) {
                        let datalinkForm = this.hubFormsService.currentForm;
                        let datalinkTransforms = <FormArray>datalinkForm.controls['dexihDatalinkTransforms'];
                        let index = datalinkTransforms.controls
                            .findIndex(c => c.value.key === datalinkTransform.key);
                        datalinkTransforms.removeAt(index);
                        this.resetDatalinkTransformPositions();
                    }
                    resolve(confirm);
                }).catch(() => {
                    resolve(false);
                });
        });
    }

    // searches the datalink and transforms for a column
    public findColumn(columnKey: number): FormGroup {
        // look for column in source table
        let sourceDatalinkTableForm = <FormGroup>this.hubFormsService.currentForm
                .controls.sourceDatalinkTable
        let columnsArray = <FormArray>sourceDatalinkTableForm.controls.dexihDatalinkColumns;
        let column = <FormGroup> columnsArray.controls.find(c => c.value.key === columnKey);
        if (column) { return column; }

        // look for column as transform outputs
        let transformForms = <FormArray>this.hubFormsService.currentForm.controls.dexihDatalinkTransforms;

        transformForms.controls.forEach(t => {
            let datalinkTransformForm = <FormGroup>t
            let items = <FormArray>datalinkTransformForm.controls.dexihDatalinkTransformItems;
            items.controls.forEach(i => {
                if (!column) {
                    let itemForm = <FormGroup>i;
                    if (itemForm.controls.targetDatalinkColumn.value &&
                        itemForm.controls.targetDatalinkColumn.value.key === columnKey) {
                        column = <FormGroup> itemForm.controls.targetDatalinkColumn;
                    }

                    if (!column) {
                        columnsArray = <FormArray> itemForm.controls.dexihFunctionParameters;
                        let parameter = <FormGroup> columnsArray.controls.find(c =>
                            HubCache.parameterIsOutput(c.value) &&
                            c.value.datalinkColumn &&
                            c.value.datalinkColumn.key === columnKey
                        );
                        if (parameter) {
                            column = <FormGroup> parameter.controls.datalinkColumn;
                        }
                        if (!column) {
                            columnsArray.controls.forEach(c => {
                                let arrayParameters = <FormArray> (<FormGroup> c).controls.arrayParameters;
                                if (arrayParameters) {
                                    parameter = <FormGroup> arrayParameters.controls.find(p =>
                                        HubCache.parameterIsOutput(p.value) &&
                                        p.value.datalinkColumn &&
                                        p.value.datalinkColumn.key === columnKey
                                    );
                                    if (parameter) {
                                        column = <FormGroup> parameter.controls.datalinkColumn;
                                    }
                                }
                            });
                        }
                    }
                }
            });
        });

        return column;
    }

    async resetDatalinkTransformPositions() {
        const datalinkForm = this.hubFormsService.currentForm;
        const datalinkTransforms = <FormArray>datalinkForm.controls.dexihDatalinkTransforms;

        let userConfigTransforms = await this.hubService.GetUserConfigTransformReference();

        let position = 10;
        datalinkTransforms.controls.sort((a, b) => a.value.position - b.value.position).forEach(datalinkTransform => {
            const dt = <FormGroup>datalinkTransform;

            let transformReference = userConfigTransforms.find(e => e.transformClassName === datalinkTransform.value.transformClassName);

            // if the transform is a validation/delta, then position at the end.
            if (transformReference) {
                dt.controls.position.setValue(position);
                position += 10;
            } else {
                dt.controls.position.setValue(1000000);
            }
        });
    }

    importFunctionMappings(datalinkTransformKey: number, item: DexihDatalinkTransformItem, cancelToken: CancelToken):
        Promise<string[]> {

        let datalink = this.hubFormsService.getDatalinkValue();
        const cache = this._hubCache;

        return this.hubService.hubPostRemote<string[]>('/api/Hub/ImportFunctionMappings', {
            hubKey: cache.hub.hubKey,
            remoteAgentId: this.hubService.getCurrentRemoteAgentId(),
            datalink: datalink,
            datalinkTransformKey: datalinkTransformKey,
            datalinkTransformItem: item
        }, 'Importing function mappings...', cancelToken);
    }

    reBuildDatalinkTable(datalinkTable: DexihDatalinkTable, confirm = false) {
        if (confirm) {
            // tslint:disable-next-line:max-line-length
            this.authService.confirmDialog('Rebuild Columns?', `This action will load the selected table columns, and replace or delete any existing columns.  This may require fixing some mappings.  Do you want to proceed?`)
                .then((confirm2) => {
                    if (confirm2) {
                    this.doRebuildDatalinkTable(datalinkTable)
                    }
                }).catch();
        } else {
            this.doRebuildDatalinkTable(datalinkTable);
        }
    }

    private doRebuildDatalinkTable(datalinkTable: DexihDatalinkTable) {

        datalinkTable.dexihDatalinkColumns.forEach(datalinkColumn => datalinkColumn.isValid = false);

        switch (datalinkTable.sourceType) {
            case eSourceType.Table:
                let sourceTable = this._hubCache.getTable(datalinkTable.sourceTableKey);
                if (sourceTable) {
                    datalinkTable.name = sourceTable.name;

                    datalinkTable.dexihDatalinkColumns = this.mergeDatalinkColumns(
                        datalinkTable.name, datalinkTable.key,
                        sourceTable.dexihTableColumns, datalinkTable.dexihDatalinkColumns);

                }
                break;
            case eSourceType.Datalink:
                let datalink = this._hubCache.hub.dexihDatalinks.find(c => c.key === datalinkTable.sourceDatalinkKey);
                if (datalink) {
                    datalinkTable.name = datalink.name;

                    let io = new InputOutputColumns();
                    // const datalinkColumns = io.getInputColumns(this._hubCache, datalink, null, []);
                    io.buildInputOutput(datalink);

                    let datalinkColumns: DexihDatalinkColumn[];

                    if (datalink.dexihDatalinkTransforms.length === 0) {
                        datalinkColumns = datalink.sourceDatalinkTable.dexihDatalinkColumns;
                    } else {
                        let transforms = datalink.dexihDatalinkTransforms.sort((a, b) => a.position - b.position);
                        let transform = transforms[transforms.length - 1];
                        datalinkColumns = transform['runTime'].outputColumns;
                    }

                    datalinkTable.dexihDatalinkColumns = this.mergeDatalinkColumns(
                        datalinkTable.name, datalinkTable.key,
                        datalinkColumns, datalinkTable.dexihDatalinkColumns);
                }
                break;
            case eSourceType.Rows:
                datalinkTable.name = 'Static Row Set';

                let rowDatalinkColumn = datalinkTable.dexihDatalinkColumns.find(c => c.name === 'RowNumber');
                if (!rowDatalinkColumn) {
                    rowDatalinkColumn = new DexihDatalinkColumn();
                    rowDatalinkColumn.key = this._hubCache.getNextSequence();
                    rowDatalinkColumn.datalinkTableKey = datalinkTable.key;
                    datalinkTable.dexihDatalinkColumns.push(rowDatalinkColumn);
                }

                rowDatalinkColumn.name = 'RowNumber';
                rowDatalinkColumn.logicalName = rowDatalinkColumn.name;
                rowDatalinkColumn.dataType = eTypeCode.Int32;
                rowDatalinkColumn.isMandatory = true;
                rowDatalinkColumn.isValid = true;
                rowDatalinkColumn.description = 'The generated row number of the static row set';

                break;
        }
    }

    private mergeDatalinkColumns(groupName: string, datalinkTableKey: number,
            newColumns: any, existingColumns: DexihDatalinkColumn[]): DexihDatalinkColumn[] {
        newColumns.forEach(column => {
            let datalinkColumn = existingColumns.find(c => c.name === column.name && c.columnGroup === groupName);
            if (!datalinkColumn) {
                datalinkColumn = existingColumns.find(c => c.name === column.name);
            }
            if (!datalinkColumn) {
                datalinkColumn = new DexihDatalinkColumn();
                datalinkColumn.key = this._hubCache.getNextSequence();
                datalinkColumn.datalinkTableKey = datalinkTableKey;
                existingColumns.push(datalinkColumn);
            }

            Object.keys(datalinkColumn).forEach(key => {
                if (key === 'childColumns') {
                    if (column[key] && column[key].length > 0) {
                        datalinkColumn[key] = this.mergeDatalinkColumns(groupName, datalinkTableKey, column[key], datalinkColumn[key]);
                    } else {
                        datalinkColumn[key] = [];
                    }
                } else if (key !== 'key' && column[key]) {
                    datalinkColumn[key] = column[key];
                } else if (key === 'columnGroup') {
                    if (groupName) {
                        if (datalinkColumn[key] && datalinkColumn[key] !== groupName) {
                            datalinkColumn[key] = groupName + '.' + datalinkColumn[key];
                        } else {
                            datalinkColumn[key] = groupName;
                        }
                    }
                }
            });
        });

        return existingColumns;
    }

}
