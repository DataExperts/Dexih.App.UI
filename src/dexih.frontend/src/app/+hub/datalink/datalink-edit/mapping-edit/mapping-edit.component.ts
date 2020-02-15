import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HubCache, sortDirections } from '../../../hub.models';
import { HubService } from '../../../hub.service';
import { DatalinkEditService } from '../datalink-edit.service';
import { Subscription, combineLatest} from 'rxjs';
import { AuthService } from '../../../../+auth/auth.service';
import { FormGroup } from '@angular/forms';
import { compare, aggregates } from '../../../hub.query.models';
import { InputOutputColumns } from '../../../hub.lineage.models';
import { eTransformItemType, DexihDatalinkColumn, eAggregate, eCompare, DexihDatalinkTransformItem, eTypeCode, DexihDatalinkTarget, DexihTable, DexihTableColumn } from '../../../../shared/shared.models';

@Component({
  selector: 'mapping-edit',
  templateUrl: './mapping-edit.component.html'
})
export class MappingEditComponent implements OnInit, OnDestroy {
  // public hubCache: HubCache;

  public pageTitle: string;

  private _subscription: Subscription;
  private _formChangesObserve: Subscription;
  private _saveSubscription: Subscription;

  datalinkTransformItemKey: number;
  datalinkKey: number;
  datalinkTransformKey: number;

  public hubCache: HubCache;

  datalinkForm: FormGroup;
  datalinkTransformForm: FormGroup;
  datalinkTransformItemForm: FormGroup;
  transformItemType: eTransformItemType;
  eTransformItemType = eTransformItemType;

  variables: string[];

  newDatalinkTransformItemForm: FormGroup;
  newColumn: DexihDatalinkColumn;
  filterValue: any;
  sourceValue: any;

  inputColumns: Array<{group: string, columns: Array<DexihDatalinkColumn>}> = [];
  outputColumns: Array<DexihDatalinkColumn>;
  joinColumns: Array<DexihDatalinkColumn>;
  datalinkTargets: Array<DexihDatalinkTarget>;
  outputTables: Array<DexihTable>;
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
    private route: ActivatedRoute) {
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
        let params = result[1];
        this.hubCache = result[2];
        let datalinkForm = result[3];

        if (!this.hubCache.isLoaded()) { return; }

        this.datalinkForm = datalinkForm;

        this.variables = this.editDatalinkService.getVariables();

        this.datalinkTransformItemKey = +params['datalinkTransformItemKey'];
        this.datalinkTransformKey = +params['datalinkTransformKey'];
        this.transformItemType = +params['type'];

        if (this.datalinkForm) {
          this.datalinkTransformForm = this.editDatalinkService.getDatalinkTransform(this.datalinkTransformKey);

          switch (this.transformItemType) {
              case eTransformItemType.JoinPair:
                this.showInput = true;
                this.showOutput = false;
                this.pageTitle = 'Edit Join';
                break;
              case eTransformItemType.Column:
              this.showInput = true;
              this.showOutput = false;
              this.pageTitle = 'Edit Group';
                break;
              case eTransformItemType.JoinNode:
              this.showInput = false;
              this.showOutput = true;
                this.pageTitle = 'Edit Join Node';
                break;
              case eTransformItemType.GroupNode:
              this.showInput = false;
              this.showOutput = true;
                this.pageTitle = 'Edit Group Node';
                break;
              case eTransformItemType.Sort:
              this.showInput = true;
              this.showOutput = false;
                this.pageTitle = 'Edit Sort';
                break;
              case eTransformItemType.FilterPair:
              this.showInput = true;
              this.showOutput = false;
                this.pageTitle = 'Edit Condition';
                break;
              case eTransformItemType.AggregatePair:
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
            let nodeColumns = io.getAvailableColumns(inputColumns, nodeDatalinkColumnKey, 0);
            this.inputColumns = this.editDatalinkService.getColumnGroups(nodeColumns);
            this.outputColumns = this.datalinkTransformForm.controls.runTime.value.transformColumns;
          } else {
            this.inputColumns = this.editDatalinkService.getColumnGroups(this.datalinkTransformForm.controls.runTime.value.inputColumns);
            this.outputColumns = this.datalinkTransformForm.controls.runTime.value.transformColumns;
          }
          if (this.datalinkTransformForm.value.joinDatalinkTable) {
            this.joinColumns = this.datalinkTransformForm.value.joinDatalinkTable.dexihDatalinkColumns;
          }

          this.datalinkTargets = this.datalinkForm.controls.dexihDatalinkTargets.value;
          let table = new DexihTable() 
          table.name = "Output Columns";
          table.dexihTableColumns = this.datalinkTransformForm.controls.runTime.value.transformColumns;
          this.outputTables = [table];

          if(this.datalinkTargets) {
              this.datalinkTargets.forEach(target => {
                  this.outputTables.push(target['table']);
              });
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

        if (this._saveSubscription) { this._saveSubscription.unsubscribe(); }
        this._saveSubscription = this.editDatalinkService.savingDatalink.subscribe(value => {
            if(value) {
                this.apply();
            }
        });
      });
    } catch (e) {
      this.hubService.addHubClientErrorMessage(e, 'Edit Mapping Function');
    }
  }

  ngOnDestroy() {
    if (this._formChangesObserve) { this._formChangesObserve.unsubscribe(); }
    if (this._subscription) { this._subscription.unsubscribe(); }
    if (this._saveSubscription) { this._saveSubscription.unsubscribe(); }
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
        this.newColumn = io.copyDatalinkColumn(sourceColumn, 1000 - key, 'mapping');
      } else {
        this.newColumn = new DexihDatalinkColumn();
        this.newColumn.position = 1000 - key;

        if (this.transformItemType === eTransformItemType.JoinNode) {
          this.newColumn.dataType = eTypeCode.Node;
          this.newColumn.childColumns = this.joinColumns;
        } else {
          this.newColumn.dataType = eTypeCode.String;
        }
      }

      this.newColumn.name = value;
      this.newColumn.logicalName = value;
      this.newColumn.columnGroup = 'mapping';
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

