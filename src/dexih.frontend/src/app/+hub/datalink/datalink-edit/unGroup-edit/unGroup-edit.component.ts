import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HubCache } from '../../../hub.models';
import { HubService } from '../../../hub.service';
import { DatalinkEditService } from '../datalink-edit.service';
import { Subscription, combineLatest } from 'rxjs';
import { AuthService } from '../../../../+auth/auth.service';
import { FormGroup, FormArray } from '@angular/forms';
import { LogFactory, eLogLevel } from '../../../../../logging';
import { TypeCodes } from '../../../hub.remote.models';
import { InputOutputColumns } from '../../../hub.lineage.models';
import { eFunctionType, eParameterDirection, DexihDatalinkColumn, DexihDatalinkTransformItem, eTransformItemType, DexihFunctionParameter, FunctionParameter } from '../../../../shared/shared.models';

@Component({

  selector: 'dexih-unGroup-edit',
  templateUrl: './unGroup-edit.component.html'
})
export class UnGroupEditComponent implements OnInit, OnDestroy {
  public hubCache: HubCache;

  eFunctionType = eFunctionType;
  eParameterDirection = eParameterDirection;
  typeCodes = TypeCodes;

  public pageTitle: string;

  private _subscription: Subscription;
  private _nodeSubscription: Subscription;

  transformFunctionType: eFunctionType;
  datalinkTransformItemKey: number;
  datalinkKey: number;
  datalinkTransformKey: number;

  datalinkForm: FormGroup;
  datalinkTransformForm: FormGroup;
  datalinkTransformItemForm: FormGroup;

  newDatalinkTransformItemForm: FormGroup;

  inputColumns: Array<DexihDatalinkColumn>;
  outputColumns: Array<DexihDatalinkColumn>;

  variables = [];

  allowOutput = false;
  allowReturn = true;

  logger = new LogFactory('unGroup-edit');

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
        this.editDatalinkService.hubFormsService.getCurrentFormObservable()
      ).subscribe(result => {
        this.pageTitle = result[0]['pageTitle'];
        let params = result[1];
        this.hubCache = result[2];
        this.datalinkForm = result[3];

        this.logger.LogC(() => `OnInit`, eLogLevel.Trace);

        if (this.hubCache && this.hubCache.isLoaded() && this.datalinkForm) {
            this.datalinkTransformKey = +params['datalinkTransformKey'];
            this.datalinkTransformItemKey = +params['datalinkTransformItemKey'];
            this.datalinkTransformForm = this.editDatalinkService.getDatalinkTransform(this.datalinkTransformKey);

            this.variables = this.editDatalinkService.getVariables();

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

            if (this.datalinkTransformItemKey) {
            this.datalinkTransformItemForm = this.editDatalinkService
              .getDatalinkTransformItem(this.datalinkTransformForm, this.datalinkTransformItemKey);

            if (!this.datalinkTransformItemForm) {
              this.authService.navigateUp();
              return;
            }

            // create a copy of the form item to allow for cancel.
            this.newDatalinkTransformItemForm = this.editDatalinkService.hubFormsService
              .datalinkDatalinkTransformItemFormGroup(this.datalinkTransformForm, this.datalinkTransformItemForm.value);

          } else {
            let newItem = new DexihDatalinkTransformItem();
            newItem.datalinkTransformKey = this.datalinkTransformKey;
            newItem.transformItemType = eTransformItemType.UnGroup;

            this.newDatalinkTransformItemForm = this.editDatalinkService.hubFormsService
              .datalinkDatalinkTransformItemFormGroup(this.datalinkTransformForm, newItem);
          }

          if (this._nodeSubscription) { this._nodeSubscription.unsubscribe(); }
          this._nodeSubscription = this.newDatalinkTransformItemForm.controls.sourceDatalinkColumn.valueChanges
            .subscribe(sourceDatalinkColumn => {
              let parameters = <FormArray>this.newDatalinkTransformItemForm.controls.dexihFunctionParameters;
              // clear previous parameters
              while (parameters.length) {
                parameters.removeAt(0);
              }
              let column = <DexihDatalinkColumn> sourceDatalinkColumn;
              // add a paramter for each childColumn
              if (column.childColumns && column.childColumns.length > 0) {
                column.childColumns.forEach((childColumn, index) => {
                  let outputColumn = io.copyDatalinkColumn(childColumn, 0, 'un-group')
                  let newParameter = new DexihFunctionParameter();
                  newParameter.datalinkTransformItemKey = this.datalinkTransformItemKey;
                  newParameter.name = childColumn.name;
                  newParameter.rank = 0;
                  newParameter.direction = eParameterDirection.Output;
                  newParameter.dataType = childColumn.dataType;
                  newParameter.position = index;
                  newParameter.key = this.hubCache.getNextSequence();
                  newParameter.datalinkColumn = outputColumn
                  newParameter.isValid = true;
                  newParameter['runTime'].functionParameter = new FunctionParameter();
                  newParameter['runTime'].functionParameter.name = childColumn.name;

                  let newParameterForm = this.editDatalinkService.hubFormsService.datalinkFunctionParametersFormGroup(newParameter);
                  parameters.push(newParameterForm);
                });
              }
            });
        }
      });
    } catch (e) {
      this.hubService.addHubClientErrorMessage(e, 'UnGroup Node Edit');
    }
  }

  ngOnDestroy() {
    if (this._subscription) { this._subscription.unsubscribe(); }
    if (this._nodeSubscription) { this._nodeSubscription.unsubscribe(); }
  }

  canDeactivate(): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      if (this.newDatalinkTransformItemForm && !this.newDatalinkTransformItemForm.pristine) {
        this.authService.confirmDialog('The function has changed',
          'The function has changed.  Do you want to discard the changes and continue?')
          .then((confirm) => {
              resolve(confirm);
            }).catch(() => {
              resolve(false);
            });
      } else {
        resolve(true);
      }
    });
  }

  cancel() {
    this.authService.navigateUp();
  }

  apply() {
    this.editDatalinkService.insertDatalinkTransformItem(this.datalinkTransformForm, this.newDatalinkTransformItemForm);
    this.newDatalinkTransformItemForm.markAsPristine();
  }

  applyExit() {
    this.apply();
    this.authService.navigateUp();
  }

}

