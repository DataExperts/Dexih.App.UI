import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { seriesGrains } from '../../../hub.models';
import { HubService } from '../../../hub.service';
import { DatalinkEditService } from '../datalink-edit.service';
import { Observable, Subscription, combineLatest } from 'rxjs';
import { AuthService } from '../../../../+auth/auth.service';
import { FormGroup, FormArray } from '@angular/forms';
import { LogFactory, eLogLevel } from '../../../../../logging';
import { InputOutputColumns } from '../../../hub.lineage.models';
import { eTransformType, eTransformItemType, DexihDatalinkColumn, DexihDatalinkTransform,
    eTypeCode, DexihDatalinkTransformItem, eAggregate, eSortDirection, eJoinNotFoundStrategyItems,
    eDuplicateStrategyItems, eSeriesGrain, eJoinStrategyItems, eTransformTypeItems, DexihConnection } from '../../../../shared/shared.models';

@Component({

    selector: 'dexih-datalink-edit-transform-form',
    templateUrl: './datalink-edit-transform.component.html',
})
export class DatalinkEditTransformComponent implements OnInit, OnDestroy {
    public datalinkForm: FormGroup;
    public datalinkTransformForm: FormGroup;
    public seriesForm: FormGroup;

    private _subscription: Subscription;
    private _datalinkFormSubscription: Subscription;
    private _transformsArraySubscription: Subscription;

    public action: string; // new or edit
    public pageTitle = 'Transform';
    public message: string;
    public datalinkTransformKey: number;

    public showName = false;
    public showDescription = false;

    eTransformType = eTransformType;
    eTransformItemType = eTransformItemType;
    eDuplicateStrategyItems = eDuplicateStrategyItems;
    eJoinNotFoundStrategyItems = eJoinNotFoundStrategyItems;
    eJoinStrategyItems = eJoinStrategyItems;
    
    public allowMappingOutputs: boolean;
    inputColumns: Array<DexihDatalinkColumn>;

    eSeriesGrain = eSeriesGrain;
    seriesGrains = seriesGrains;

    public managedConnections: DexihConnection[];

    public allowNode = false;
    public nodeName = '';
    public nodeType: eTransformItemType;

    public logger = new LogFactory('datalink-edit-transform');

    public nodes = [];

    public formErrors: any = {};

    constructor(
        private hubService: HubService,
        private authService: AuthService,
        private editDatalinkService: DatalinkEditService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        this.logger.LogC(() => `OnInit`, eLogLevel.Trace);

        try {
            this._subscription = combineLatest([
                this.route.data,
                this.route.params,
                this.editDatalinkService.hubFormsService.getCurrentFormObservable(),
                this.hubService.getHubCacheObservable()]
            ).subscribe(result => {

                this.action = result[0]['action'];
                this.pageTitle = result[0]['pageTitle'];
                this.datalinkTransformKey = + result[1]['datalinkTransformKey'];
                this.datalinkForm = result[2];
                let hubCache = result[3];

                if (hubCache.isLoaded) {
                    this.managedConnections = hubCache.getManagedConnections();
                }
                
                if (this.datalinkForm) {

                    let transformsArray = <FormArray>this.datalinkForm.controls.dexihDatalinkTransforms;

                    if (this._transformsArraySubscription) { this._transformsArraySubscription.unsubscribe(); }
                    this._transformsArraySubscription = transformsArray.valueChanges.subscribe(transforms => {
                        let tmpDatalinkTransformForm = transforms
                            .find(c => c.datalinkTransformKey === this.datalinkTransformKey);

                        if (!tmpDatalinkTransformForm) {
                            this.router.navigate(['properties'], { relativeTo: this.route.parent.parent });
                        }
                    });

                    this.datalinkTransformForm = <FormGroup>transformsArray.controls
                        .find(c => c.value.key === this.datalinkTransformKey);

                    // if the transform isn't found, this is probably due to a save/reload which changes the keys.
                    // navigate up one level when this happens.
                    if (!this.datalinkTransformForm) {
                        this.router.navigate(['properties'], { relativeTo: this.route.parent.parent });
//                        this.authService.navigateUp();
                        return;
                    }

                    let datalinkTransform = <DexihDatalinkTransform> this.datalinkTransformForm.value;

                    let items = <FormArray>this.datalinkTransformForm.controls.dexihDatalinkTransformItems;

                    if (datalinkTransform.transformType === eTransformType.Series) {
                        this.seriesForm = <FormGroup>items.controls
                            .filter(d => d.value.transformItemType === eTransformItemType.Series)[0];
                    }

                    if (datalinkTransform.transformType === eTransformType.Aggregate) {
                        this.nodeType = eTransformItemType.GroupNode;
                    }

                    if (datalinkTransform.transformType === eTransformType.Lookup
                        || datalinkTransform.transformType === eTransformType.Join) {
                        this.nodeType = eTransformItemType.JoinNode;
                    }

                    if (this.nodeType) {
                        let node = datalinkTransform.dexihDatalinkTransformItems
                        .find(d => d.transformItemType === this.nodeType);

                        if (node) {
                            this.allowNode = true;
                            this.nodeName = node.targetDatalinkColumn.name;
                        } else {
                            this.allowNode = false;
                        }
                    }

                    this.inputColumns = datalinkTransform['runTime'].inputColumns;

                    this.nodes = [];
                    this.addNodeColumns(this.inputColumns, '');

                    let transformType = datalinkTransform.transformType;
                    this.allowMappingOutputs =
                        // transformType === eTransformType.Group ||
                        transformType === eTransformType.Series ||
                        // transformType === eTransformType.Aggregate ||
                        transformType === eTransformType.Rows ||
                        transformType === eTransformType.Mapping ||
                        transformType === eTransformType.Validation;

                    if (this._datalinkFormSubscription) { this._datalinkFormSubscription.unsubscribe(); }
                    this._datalinkFormSubscription = this.datalinkForm.valueChanges.subscribe(value => {
                        this.formErrors = this.editDatalinkService.hubFormsService.getFormErrorMessages(this.datalinkForm, true);
                    });

                    if (!this.datalinkTransformForm) {
                        this.router.navigate(['properties'], { relativeTo: this.route.parent.parent });
                    }

                    this.logger.LogC(() => `datalink form is loaded`, eLogLevel.Trace);
                }
            });

        } catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Edit Transform');
        }
    }

    private addNodeColumns(columns: DexihDatalinkColumn[], path: string) {
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


    ngOnDestroy() {
        if (this._subscription) { this._subscription.unsubscribe(); }
        if (this._transformsArraySubscription) { this._transformsArraySubscription.unsubscribe(); }
        if (this._datalinkFormSubscription) { this._datalinkFormSubscription.unsubscribe(); }
    }

    // deleteTransform() {
    //     this.logger.LogC(() => `deleteTransform`, eLogLevel.Trace);
    //     this.editDatalinkService.deleteDatalinkTransform(this.datalinkTransformForm.value);
    //     this.router.navigate(['properties'], { relativeTo: this.route });
    // }

    previewData() {
        this.router.navigate(['preview-transform-data'], { relativeTo: this.route.parent });
    }

    toggleNode(allowNode: boolean) {
        let items = <FormArray>this.datalinkTransformForm.controls.dexihDatalinkTransformItems;
        let nodeItem = <FormGroup> items.controls.find(d => d.value.transformItemType === this.nodeType);
        if (allowNode) {
            if (!this.nodeName) {
                this.nodeName = eTransformItemType[this.nodeType];
            }

            if (nodeItem) {
                this.authService.informationDialog('Can not add node',  'Only one node can be added per transform.');
                return;
            }

            let item = new DexihDatalinkTransformItem();
            let outputColumn: DexihDatalinkColumn = new DexihDatalinkColumn();
            outputColumn.position = 0;
            outputColumn.key = this.hubService.getHubCache().getNextSequence();
            outputColumn.name = this.nodeName;
            outputColumn.logicalName = this.nodeName;
            outputColumn.dataType = eTypeCode.Node;

            item.position = -1;
            item.datalinkTransformKey = this.datalinkTransformForm.value.key;
            item.targetDatalinkColumn = outputColumn;
            item.isValid = true;
            item.transformItemType = this.nodeType;

            let itemForm = this.editDatalinkService.hubFormsService
                .datalinkDatalinkTransformItemFormGroup(this.datalinkTransformForm, item);
            this.editDatalinkService.insertDatalinkTransformItem(this.datalinkTransformForm, itemForm);
        } else {
            this.editDatalinkService.deleteDatalinkTransformItem(this.datalinkTransformForm, nodeItem);
        }
    }

    updateNode(name: string) {
        let items = <FormArray>this.datalinkTransformForm.controls.dexihDatalinkTransformItems;
        let nodeItem = <FormGroup> items.controls.find(d => d.value.transformItemType === this.nodeType);
        if (nodeItem) {
            let column = <DexihDatalinkColumn> nodeItem.controls.targetDatalinkColumn.value;
            if (column) {
                column.name = name;
                column.logicalName = name;
                nodeItem.controls.targetDatalinkColumn.setValue(column);
            }
        }
    }

    newDragDropMapping(itemType: eTransformItemType, $event) {
        let item = new DexihDatalinkTransformItem();
        let outputColumn: DexihDatalinkColumn = $event.outputColumn;
        let inputColumn: DexihDatalinkColumn = $event.inputColumn;
        let io = new InputOutputColumns();


        switch (itemType) {
            case eTransformItemType.ColumnPair:
                if (!outputColumn) {
                    outputColumn = io.copyDatalinkColumn(inputColumn, 0, 'mapping');
                }

                outputColumn.key = this.hubService.getHubCache().getNextSequence();
                if (outputColumn.childColumns) {
                    outputColumn.childColumns.forEach(col => {
                        col.key = this.hubService.getHubCache().getNextSequence();
                    });
                }
                outputColumn.datalinkTableKey = null;
                break;
            case eTransformItemType.Sort:
                item.sortDirection = eSortDirection.Ascending;
                break;
            case eTransformItemType.AggregatePair:
                if (!outputColumn) {
                    outputColumn = io.copyDatalinkColumn(inputColumn, 0, 'mapping');
                }

                outputColumn.key = this.hubService.getHubCache().getNextSequence();
                if (outputColumn.childColumns) {
                    outputColumn.childColumns.forEach(col => {
                        col.key = this.hubService.getHubCache().getNextSequence();
                    });
                }
                outputColumn.datalinkTableKey = null;
                // outputColumn.name = 'Sum ' + outputColumn.name;
                item.aggregate = eAggregate.Sum;
                break;
        }

        if (itemType) {

            item.datalinkTransformKey = this.datalinkTransformForm.value.key;
            item.sourceDatalinkColumn = inputColumn;
            item.targetDatalinkColumn = outputColumn;
            item.isValid = true;

            item.transformItemType = itemType;
            let itemForm = this.editDatalinkService.hubFormsService
                .datalinkDatalinkTransformItemFormGroup(this.datalinkTransformForm, item);
            this.editDatalinkService.insertDatalinkTransformItem(this.datalinkTransformForm, itemForm);
        }
    }

    newDragDropJoin($event) {
        let transformType = this.datalinkTransformForm.value.transformType;

        if (transformType === eTransformType.Join
            || transformType === eTransformType.Lookup) {
            let joinColumn: DexihDatalinkColumn = $event.joinColumn;
            let inputColumn: DexihDatalinkColumn = $event.inputColumn;
            let item = new DexihDatalinkTransformItem();
            item.transformItemType = eTransformItemType.JoinPair;
            item.datalinkTransformKey = this.datalinkTransformForm.value.key;
            item.sourceDatalinkColumn = inputColumn;
            item.joinDatalinkColumn = joinColumn;
            item.isValid = true;
            let itemForm = this.editDatalinkService.hubFormsService
                .datalinkDatalinkTransformItemFormGroup(this.datalinkTransformForm, item);

            this.editDatalinkService.insertDatalinkTransformItem(this.datalinkTransformForm, itemForm);
        }
    }
}
