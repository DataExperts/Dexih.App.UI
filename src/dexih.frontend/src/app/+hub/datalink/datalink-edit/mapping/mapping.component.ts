import { Component, Input, Output, ViewChild, OnInit, OnChanges, OnDestroy, EventEmitter, ElementRef } from '@angular/core';
import { Observable, BehaviorSubject, Subscription, combineLatest } from 'rxjs';
import { HubService } from '../../../hub.service';
import { DatalinkEditService } from '../datalink-edit.service';
import { AuthService } from '../../../../+auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormArray } from '@angular/forms';
import { InputOutputColumns } from '../../../hub.lineage.models';
import { eFunctionType, eTransformType, eTransformItemType, DexihDatalinkTransformItem,
    DexihDatalinkTransform, DexihDatalinkColumn, eTypeCode, DexihDatalinkTable, eDeltaType, eCleanActionItems, eCompare } from '../../../../shared/shared.models';

@Component({

    selector: 'mapping',
    templateUrl: './mapping.component.html'
})
export class MappingComponent implements OnInit, OnDestroy, OnChanges {
    @Input() public datalinkTransformForm: FormGroup;
    @Input() public allowStandard = false;
    @Input() public allowMapping = false;
    @Input() public allowAggregate = false;
    @Input() public allowRow = false;
    @Input() public allowCondition = false;
    @Input() public allowValidation = false;
    @Input() public allowOutput = false;
    @Input() public allowGroup = false;
    @Input() public allowJoin = false;
    @Input() public allowSort = false;
    @Input() public allowSeries = false;
    @Input() public allowJoinNode = false;
    @Input() public title: string;

    @Output() public addMapping: EventEmitter<any> = new EventEmitter<any>();
    @Output() public removeMapping: EventEmitter<any> = new EventEmitter<any>();
    @Output() public updateMapping: EventEmitter<any> = new EventEmitter<any>();
    @Output() public hasChanged: EventEmitter<any> = new EventEmitter<any>();
    @Output() public onColumnDrop: EventEmitter<any> = new EventEmitter<any>();

    @ViewChild('mappingTable', { static: true }) public mappingTable: ElementRef;

    private _subscription: Subscription;
    private _changesSubscription: Subscription;

    columns: Array<any>;

    private _tableData = new BehaviorSubject<Array<any>>(null);
    tableData: Observable<Array<any>> = this._tableData.asObservable();

    public functionType: eFunctionType;
    public transformType: eTransformType;
    public eTransformType = eTransformType;
    public eTransformItemType = eTransformItemType;

    columnGroups: Array<{group: string, columns: Array<DexihDatalinkColumn>}> = [];
    inputDateColumns: DexihDatalinkColumn[];

    constructor(
        private authService: AuthService,
        private hubService: HubService,
        private editDatalinkService: DatalinkEditService,
        private router: Router,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
    }

    ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
        if (this._changesSubscription) { this._changesSubscription.unsubscribe(); }
    }

    ngOnChanges() {
        try {
            // this.columns = [{ name: 'function', title: 'Mapping', format: 'Md', class: 'functionClass' }];
            this.columns = [];

            // if (!this.allowSort) {
            //     this.columns.push({ name: 'function', title: 'Function Name', format: '', class: 'functionClass' });
            // }

            // this.columns.push({ name: 'input', title: 'Input(s)', format: 'Md', class: 'inputClass' });

            // if (this.allowOutput || this.allowJoinNode) {
            //     this.columns.push({ name: 'output', title: 'Output(s)', format: 'Md', class: 'outputClass' });
            // }

            // if (this.allowSort) {
            //     this.columns.push({ name: 'sortDirection', title: 'Direction', format: '' });
            // }

            if (this._subscription) { this._subscription.unsubscribe(); }
            this._subscription = combineLatest(
                this.hubService.getHubCacheObservable(),
                this.hubService.getRemoteLibrariesObservable()
            ).subscribe(() => {

                this.functionType = this.editDatalinkService.getFunctionType(this.datalinkTransformForm.value);
                this.transformType = this.datalinkTransformForm.value.transformType;

                this.updateTableData();

                if (this._changesSubscription) { this._changesSubscription.unsubscribe(); }
                this._changesSubscription = this.datalinkTransformForm.valueChanges.subscribe(() => this.updateTableData());
            });
        } catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Mappings');
        }
    }

    updateTableData() {
        try {
            if (this.datalinkTransformForm) {
                let runTime = this.datalinkTransformForm.controls['runTime'].value;
                let inputColumns = <DexihDatalinkColumn[]> runTime.inputColumns;
                this.inputDateColumns = inputColumns.filter(c => c.dataType === eTypeCode.DateTime || c.dataType === eTypeCode.Date);
                this.columnGroups = this.editDatalinkService.getColumnGroups(inputColumns);

                let data = [];
                let items = <FormArray>this.datalinkTransformForm.controls.dexihDatalinkTransformItems;
                let filteredItems: Array<any> = [];

                if (this.allowJoinNode) {
                    filteredItems = filteredItems.concat(items.controls
                        .filter(d => d.value.transformItemType === eTransformItemType.JoinNode));
                }

                if (this.allowGroup) {
                    filteredItems = filteredItems.concat(items.controls
                        .filter(d => d.value.transformItemType === eTransformItemType.Column));
                }

                if (this.allowStandard || this.allowJoin) {
                    filteredItems = filteredItems.concat(items.controls
                        .filter(d => d.value.transformItemType === eTransformItemType.BuiltInFunction
                            || d.value.transformItemType === eTransformItemType.CustomFunction));
                }

                if (this.allowAggregate) {
                    filteredItems = filteredItems.concat(items.controls
                        .filter(d => d.value.transformItemType === eTransformItemType.AggregatePair));
                }

                if (this.allowMapping) {
                    filteredItems = filteredItems.concat(items.controls
                        .filter(d => d.value.transformItemType === eTransformItemType.ColumnPair));
                }

                if (this.allowCondition) {
                    filteredItems = filteredItems.concat(items.controls
                        .filter(d => d.value.transformItemType === eTransformItemType.FilterPair));
                }

                if (this.allowJoin) {
                    filteredItems = filteredItems.concat(items.controls
                        .filter(d => d.value.transformItemType === eTransformItemType.JoinPair));
                }

                if (this.allowRow) {
                    filteredItems = filteredItems.concat(items.controls
                        .filter(d => d.value.transformItemType === eTransformItemType.UnGroup));
                }

                if (this.allowSort) {
                    filteredItems = filteredItems.concat(items.controls
                        .filter(d => d.value.transformItemType === eTransformItemType.Sort));
                }

                filteredItems.sort((a, b) => a.value.position - b.value.position).forEach(item => {
                    const transformItem: DexihDatalinkTransformItem = item.value;
                    let functionItem = {
                        datalinkTransformItem: transformItem,
                        key: transformItem.key,
                    }

                    data.push(functionItem);
                });

                this._tableData.next(data);
            }
        } catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Mappings, update data');
        }

    }

    private getItemFormGroup(datalinkTransformItemKey: number): FormGroup {
        let items = <FormArray>this.datalinkTransformForm.controls['dexihDatalinkTransformItems'];
        let item = <FormGroup>items.controls.find(c => c.value.key === datalinkTransformItemKey);
        return item;
    }

    editMapping(item: DexihDatalinkTransformItem) {
        let key = item.key;
        let itemForm = this.getItemFormGroup(key);
        let transformItemType = itemForm.value.transformItemType;

        switch (transformItemType) {
            case eTransformItemType.BuiltInFunction:
                this.router.navigate(
                    ['standard-function-edit', this.functionType, key],
                    { relativeTo: this.route.parent });
                break;
            case eTransformItemType.CustomFunction:
                this.router.navigate(
                    ['custom-function-edit', this.functionType, key],
                    { relativeTo: this.route.parent });
                break;
            case eTransformItemType.Column:
            case eTransformItemType.JoinNode:
            case eTransformItemType.GroupNode:
            case eTransformItemType.ColumnPair:
            case eTransformItemType.Sort:
            case eTransformItemType.JoinPair:
            case eTransformItemType.FilterPair:
            case eTransformItemType.AggregatePair:
            case eTransformItemType.Series:
                this.router.navigate(['mapping-edit', transformItemType, key],
                    { relativeTo: this.route.parent });
                break;
            case eTransformItemType.UnGroup:
                this.router.navigate(['unGroup-edit', key], { relativeTo: this.route.parent });
                break;
}
    }

    deleteMapping(item: DexihDatalinkTransformItem) {
        this.deleteSelected([item]);
    }

    deleteSelected(items: Array<DexihDatalinkTransformItem>) {
        items.forEach(item => {
            let key = item.key;
            let itemForm = this.getItemFormGroup(key);
            this.editDatalinkService.deleteDatalinkTransformItem(this.datalinkTransformForm, itemForm);
        });
    }

    // if a sort event has triggered from the table, then reset the positions of the datalink transform items.
    datalinkItemSortChange(items: Array<DexihDatalinkTransformItem>) {
        items.forEach((item, index) => {
            let existingItems = <FormArray>this.datalinkTransformForm.controls.dexihDatalinkTransformItems;
            let datalinkTransformItem = <FormGroup>existingItems.controls
                .find(c => c.value.key === item.key);
            if (datalinkTransformItem) {
                datalinkTransformItem.controls.position.setValue(index);
            }
        });
    }

    // triggered when a source column is dropped onto the output column
    newOutputDrop(inputColumn: DexihDatalinkColumn) {
        this.onColumnDrop.emit({
            inputColumn: inputColumn,
            outputColumn: null
        });
    }

    createJoinNode() {
        let items = <FormArray>this.datalinkTransformForm.controls.dexihDatalinkTransformItems;
        if (items.controls.find(d => d.value.transformItemType === eTransformItemType.JoinNode)) {
            this.authService.informationDialog('Can not add node',  'Only one join node can be added.');
            return;
        }

        let joinTable = this.datalinkTransformForm.value.joinDatalinkTable;

        let item = new DexihDatalinkTransformItem();
        let outputColumn: DexihDatalinkColumn = new DexihDatalinkColumn();
        outputColumn.position = 0;
        outputColumn.key = this.hubService.getHubCache().getNextSequence();
        outputColumn.name = joinTable.name;
        outputColumn.logicalName = joinTable.name;
        let io = new InputOutputColumns();
        let columns = joinTable.dexihDatalinkColumns.map((col, index) => {
            let childColumn = io.copyDatalinkColumn(col, index, 'Join Node');
            childColumn.key = this.hubService.getHubCache().getNextSequence();
            childColumn.datalinkTableKey = null;
            return childColumn;
        });
        outputColumn.childColumns = columns;
        outputColumn.dataType = eTypeCode.Node;

        item.position = -1;
        item.datalinkTransformKey = this.datalinkTransformForm.value.key;
        item.targetDatalinkColumn = outputColumn;
        item.isValid = true;
        item.transformItemType = eTransformItemType.JoinNode;

        let itemForm = this.editDatalinkService.hubFormsService.datalinkDatalinkTransformItemFormGroup(this.datalinkTransformForm, item);
        this.editDatalinkService.insertDatalinkTransformItem(this.datalinkTransformForm, itemForm);
    }

    createGroupNode() {
        let items = <FormArray>this.datalinkTransformForm.controls.dexihDatalinkTransformItems;
        if (items.controls.find(d => d.value.transformItemType === eTransformItemType.GroupNode)) {
            this.authService.informationDialog('Can not add node',  'Only one group node can be added.');
            return;
        }

        let item = new DexihDatalinkTransformItem();
        let outputColumn: DexihDatalinkColumn = new DexihDatalinkColumn();
        outputColumn.position = 0;
        outputColumn.key = this.hubService.getHubCache().getNextSequence();
        outputColumn.name = 'Group';
        outputColumn.logicalName = 'Group';
        outputColumn.dataType = eTypeCode.Node;

        item.position = -1;
        item.datalinkTransformKey = this.datalinkTransformForm.value.key;
        item.targetDatalinkColumn = outputColumn;
        item.isValid = true;
        item.transformItemType = eTransformItemType.GroupNode;

        let itemForm = this.editDatalinkService.hubFormsService.datalinkDatalinkTransformItemFormGroup(this.datalinkTransformForm, item);
        this.editDatalinkService.insertDatalinkTransformItem(this.datalinkTransformForm, itemForm);
    }

    newMapping(itemType: eTransformItemType) {
        this.router.navigate(['mapping-edit', itemType], { relativeTo: this.route });
    }

    addAll() {
        let runTime = this.datalinkTransformForm.controls['runTime'].value;
        let inputColumns = <DexihDatalinkColumn[]> runTime.inputColumns;

        inputColumns.forEach(inputColumn => {
            this.createMapping(inputColumn);
        });
    }

    addGroup(group: {group: string, columns: Array<DexihDatalinkColumn>}) {
        group.columns.forEach(inputColumn => {
            this.createMapping(inputColumn);
        });
    }

    private createMapping(inputColumn: DexihDatalinkColumn) {
        let runTime = this.datalinkTransformForm.controls['runTime'].value;
        let outputColumns = <DexihDatalinkColumn[]> runTime.outputColumns;

        if ( outputColumns.findIndex(c => c.name === inputColumn.name) >= 0) {
            return;
        }

        let item = new DexihDatalinkTransformItem();
        let io = new InputOutputColumns();
        let outputColumn = io.copyDatalinkColumn(inputColumn, 0, 'mapping');
        outputColumn.key = this.hubService.getHubCache().getNextSequence();
        if (outputColumn.childColumns) {
            outputColumn.childColumns.forEach(col => {
                col.key = this.hubService.getHubCache().getNextSequence();
            });
        }
        outputColumn.datalinkTableKey = null;
        item.datalinkTransformKey = this.datalinkTransformForm.value.key;
        item.sourceDatalinkColumn = inputColumn;
        item.targetDatalinkColumn = outputColumn;
        item.transformItemType = eTransformItemType.ColumnPair;
        item.isValid = true;
        let itemForm = this.editDatalinkService.hubFormsService
            .datalinkDatalinkTransformItemFormGroup(this.datalinkTransformForm, item);
        this.editDatalinkService.insertDatalinkTransformItem(this.datalinkTransformForm, itemForm);
    }

    // joins the column to the valid from/to columns
    addValidFromTo(column: DexihDatalinkColumn) {
        let joinTable = <DexihDatalinkTable> this.datalinkTransformForm.value.joinDatalinkTable;
        let validFrom = joinTable.dexihDatalinkColumns.find(c => c.deltaType === eDeltaType.ValidFromDate);
        let validTo = joinTable.dexihDatalinkColumns.find(c => c.deltaType === eDeltaType.ValidToDate);
        if ( !validFrom || !validTo ) {
            this.authService.informationDialog('No valid from',  'The join table does not contain a columns with a valid from/to delta type.');
            return;
        }

        let item = new DexihDatalinkTransformItem();
        item.sourceDatalinkColumn = column;
        item.joinDatalinkColumn = validFrom;
        item.transformItemType = eTransformItemType.JoinPair;
        item.filterCompare = eCompare.GreaterThanEqual;
        let itemForm = this.editDatalinkService.hubFormsService.datalinkDatalinkTransformItemFormGroup(this.datalinkTransformForm, item);
        this.editDatalinkService.insertDatalinkTransformItem(this.datalinkTransformForm, itemForm);

        item = new DexihDatalinkTransformItem();
        item.sourceDatalinkColumn = column;
        item.joinDatalinkColumn = validTo;
        item.transformItemType = eTransformItemType.JoinPair;
        item.filterCompare = eCompare.LessThan;
        itemForm = this.editDatalinkService.hubFormsService.datalinkDatalinkTransformItemFormGroup(this.datalinkTransformForm, item);
        this.editDatalinkService.insertDatalinkTransformItem(this.datalinkTransformForm, itemForm);

    }
}
