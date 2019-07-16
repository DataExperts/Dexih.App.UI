import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  DexihDatalinkTransformItem, eDatalinkTransformItemType, HubCache,
  DexihTable, DexihTableColumn, sortDirections, DexihDatalinkTable, DexihDatalinkColumn, eSeriesGrain, seriesGrains
}
  from '../../../hub.models';
import { HubService } from '../../../hub.service';
import { DatalinkEditService } from '../datalink-edit.service';
import { Observable, Subscription, combineLatest} from 'rxjs';
import { Location } from '@angular/common';
import { AuthService } from '../../../../+auth/auth.service';
import { FormGroup } from '@angular/forms';
import { eCompare, compare, eAggregate, aggregates } from '../../../hub.query.models';
import { eTransformType, eTypeCode } from '../../../hub.remote.models';
import { InputOutputColumns } from '../../../hub.lineage.models';

@Component({
  selector: 'mapping-edit',
  templateUrl: './mapping-edit.component.html'
})
export class MappingEditComponent implements OnInit, OnDestroy {
  // public hubCache: HubCache;

  public pageTitle: string;

  private _subscription: Subscription;
  private _formChangesObserve: Subscription;

  datalinkTransformItemKey: number;
  datalinkKey: number;
  datalinkTransformKey: number;

  public hubCache: HubCache;

  datalinkForm: FormGroup;
  datalinkTransformForm: FormGroup;
  datalinkTransformItemForm: FormGroup;
  transformItemType: eDatalinkTransformItemType;
  eDatalinkTransformItemType = eDatalinkTransformItemType;

  newDatalinkTransformItemForm: FormGroup;
  newColumn: DexihDatalinkColumn;
  filterValue: any;
  sourceValue: any;

  inputColumns: Array<DexihDatalinkColumn>;
  outputColumns: Array<DexihDatalinkColumn>;
  joinColumns: Array<DexihDatalinkColumn>;

  showInput = true;
  showOutput = true;

  eAggregate = eAggregate;
  aggregates = aggregates;
  compare = compare;
  eCompare = eCompare;

  sourceErrors: string;
  targetErrors: string;
  joinErrors: string;

  sortDirections = sortDirections;

  constructor(
    private hubService: HubService,
    private authService: AuthService,
    private editDatalinkService: DatalinkEditService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location) {
  }

  ngOnInit() {

    try {
      this._subscription = combineLatest(
        this.route.data,
        this.route.params,
        this.hubService.getHubCacheObservable(),
        this.editDatalinkService.hubFormsService.getCurrentFormObservable(),
        this.hubService.getRemoteLibrariesObservable()
      ).subscribe(result => {
        this.pageTitle = result[0]['pageTitle'];
        let data = result[0];
        let params = result[1];
        this.hubCache = result[2];
        let datalinkForm = result[3];
        let remoteLibraries = result[4];

        if (!this.hubCache.isLoaded()) { return; }

        this.datalinkForm = datalinkForm;

        this.datalinkTransformItemKey = +params['datalinkTransformItemKey'];
        this.datalinkTransformKey = +params['datalinkTransformKey'];
        this.transformItemType = params['type'];

        if (this.datalinkForm) {
          this.datalinkTransformForm = this.editDatalinkService.getDatalinkTransform(this.datalinkTransformKey);

          switch (this.transformItemType) {
              case eDatalinkTransformItemType.JoinPair:
                this.showInput = true;
                this.showOutput = false;
                this.pageTitle = 'Edit Join';
                break;
              case eDatalinkTransformItemType.Column:
              this.showInput = true;
              this.showOutput = false;
              this.pageTitle = 'Edit Group';
                break;
              case eDatalinkTransformItemType.JoinNode:
              this.showInput = false;
              this.showOutput = true;
                this.pageTitle = 'Edit Join Node';
                break;
              case eDatalinkTransformItemType.GroupNode:
              this.showInput = false;
              this.showOutput = true;
                this.pageTitle = 'Edit Group Node';
                break;
              case eDatalinkTransformItemType.Sort:
              this.showInput = true;
              this.showOutput = false;
                this.pageTitle = 'Edit Sort';
                break;
              case eDatalinkTransformItemType.FilterPair:
              this.showInput = true;
              this.showOutput = false;
                this.pageTitle = 'Edit Condition';
                break;
              case eDatalinkTransformItemType.AggregatePair:
                this.pageTitle = 'Edit Aggregate';
                this.showInput = true;
                this.showOutput = true;
                break;
              default:
                this.pageTitle = 'Edit Mapping';
                this.showInput = true;
                this.showOutput = true;
          }

          let nodeDatalinkColumn = this.datalinkTransformForm.controls.nodeDatalinkColumn.value;
          let nodeDatalinkColumnKey = nodeDatalinkColumn ? nodeDatalinkColumn.key : null;
          let io = new InputOutputColumns();
          if (nodeDatalinkColumnKey) {
            let inputColumns = <DexihDatalinkColumn[]> this.datalinkTransformForm.controls.runTime.value.inputColumns;
            this.inputColumns = io.getAvailableColumns(inputColumns, nodeDatalinkColumnKey, 0);
            this.outputColumns = this.datalinkTransformForm.controls.runTime.value.transformColumns;
          } else {
            this.inputColumns = this.datalinkTransformForm.controls.runTime.value.inputColumns;
            this.outputColumns = this.datalinkTransformForm.controls.runTime.value.transformColumns;
          }
          if (this.datalinkTransformForm.value.joinDatalinkTable) {
            this.joinColumns = this.datalinkTransformForm.value.joinDatalinkTable.dexihDatalinkColumns;
          }

          if (this.datalinkTransformItemKey) {
            this.datalinkTransformItemForm = this.editDatalinkService
              .getDatalinkTransformItem(this.datalinkTransformForm, this.datalinkTransformItemKey);

              this.filterValue = this.datalinkTransformItemForm.controls.filterValue.value;
              this.sourceValue = this.datalinkTransformItemForm.controls.sourceValue.value;

              // create a copy of the form item to allow for cancel.
            this.newDatalinkTransformItemForm = this.editDatalinkService.hubFormsService
              .datalinkDatalinkTransformItemFormGroup(this.datalinkTransformForm, this.datalinkTransformItemForm.value);
          } else {
            let newItem = new DexihDatalinkTransformItem();
            newItem.datalinkTransformKey = this.datalinkTransformKey;
            newItem.transformItemType = this.transformItemType;

            this.newDatalinkTransformItemForm = this.editDatalinkService.hubFormsService
              .datalinkDatalinkTransformItemFormGroup(this.datalinkTransformForm, newItem);
          }

          this.getErrors();
          if (this._formChangesObserve) { this._formChangesObserve.unsubscribe(); }
          this._formChangesObserve = this.newDatalinkTransformItemForm.statusChanges.subscribe(() => {
            this.getErrors();
          })
        }
      });
    } catch (e) {
      this.hubService.addHubClientErrorMessage(e, 'Edit Mapping Function');
    }
  }

  ngOnDestroy() {
    if (this._formChangesObserve) { this._formChangesObserve.unsubscribe(); }
    if (this._subscription) { this._subscription.unsubscribe(); }
  }

  cancel() {
    this.authService.navigateUp();
  }

  getErrors() {
    this.targetErrors = this.editDatalinkService.hubFormsService.getErrorMessage(
      this.newDatalinkTransformItemForm.controls.targetDatalinkColumn);
    this.sourceErrors = this.editDatalinkService.hubFormsService.getErrorMessage(
      this.newDatalinkTransformItemForm.controls.sourceDatalinkColumn);
    this.joinErrors = this.editDatalinkService.hubFormsService.getErrorMessage(
      this.newDatalinkTransformItemForm.controls.sourceDatalinkColumn);
  }

  apply() {
    // this.datalinkTransformItemForm.setValue(this.newDatalinkTransformItemForm.value);
    this.editDatalinkService.insertDatalinkTransformItem(this.datalinkTransformForm, this.newDatalinkTransformItemForm);
  }

  updateNewColumn(value: string) {
    if (value) {
      let key: number;
      if (this.newColumn) {
        key = this.newColumn.key;
      } else {
        key = this.hubService.getHubCache().getNextSequence();
      }

      let sourceColumn = <DexihDatalinkColumn>this.newDatalinkTransformItemForm.controls.sourceDatalinkColumn.value;

      if (sourceColumn) {
        let io = new InputOutputColumns();
        this.newColumn = io.copyDatalinkColumn(sourceColumn, 1000 - key, 'mappings');
      } else {
        this.newColumn = new DexihDatalinkColumn();
        this.newColumn.position = 1000 - key;

        if (this.transformItemType === eDatalinkTransformItemType.JoinNode) {
          this.newColumn.dataType = eTypeCode.Node;
          this.newColumn.childColumns = this.joinColumns;
        } else {
          this.newColumn.dataType = eTypeCode.String;
        }
      }

      this.newColumn.name = value;
      this.newColumn.logicalName = value;
      this.newColumn.columnGroup = 'mappings';
      this.newColumn.key = key;

      this.newDatalinkTransformItemForm.controls.targetDatalinkColumn.setValue(this.newColumn);
    }
  }

  updateFilterValue(value: string) {
    this.newDatalinkTransformItemForm.controls.filterValue.setValue(value);
  }

  updateSourceValue(value: string) {
    this.newDatalinkTransformItemForm.controls.sourceValue.setValue(value);
  }

  applyExit() {
    this.apply();
    this.authService.navigateUp();
  }
}

