import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {
  DexihDatalink, DexihDatalinkTransform, DexihDatalinkTransformItem, eDatalinkTransformItemType, HubCache,
  DexihTable, DexihTableColumn, DexihDatalinkTable, DexihDatalinkColumn,
  eTransformFunctionType, eParameterDirection, DexihFunctionParameter,  eOnNull, eOnError, eInvalidAction,
  onErrorActions, onNullActions, InvalidActions
}
  from '../../../hub.models';
import { HubService } from '../../../hub.service';
import { DatalinkEditService } from '../datalink-edit.service';
import { Subscription ,  Observable, combineLatest} from 'rxjs';
import { Location } from '@angular/common';
import { AuthService } from '../../../../+auth/auth.service';
import { FormGroup, FormArray, AbstractControl } from '@angular/forms';
import { RemoteLibraries, eTransformType, eTypeCode } from '../../../hub.remote.models';
import { InputOutputColumns } from '../../../hub.lineage.models';

@Component({

  selector: 'dexih-custom-function-edit',
  templateUrl: './custom-function-edit.component.html'
})
export class CustomFunctionEditComponent implements OnInit, OnDestroy {
  public hubCache: HubCache;
  private remoteLibraries: RemoteLibraries;

  public pageTitle: string;

  private _subscription: Subscription;
  private _returnParameterSubscription: Subscription;
  private _parametersSubscription: Subscription;

  eFunctionType = eTransformFunctionType;
  eParameterDirection = eParameterDirection;
  functionType: eTransformFunctionType;

  onErrorActions = onErrorActions;
  onNullActions = onNullActions;
  invalidActions = InvalidActions;

  datalinkTransformItemKey: number;
  datalinkKey: number;
  datalinkTransformKey: number;

  datalinkForm: FormGroup;
  datalinkTransformForm: FormGroup;
  datalinkTransformItemForm: FormGroup;
  returnParameterForm: FormGroup;

  newDatalinkTransformItemForm: FormGroup;

  parameters: FormArray;
  inputParameters: AbstractControl[] = [];
  outputParameters: AbstractControl[] = [];

  inputParameterValues = [];
  outputParameterValues = [];
  returnParameterValue;


  inputColumns: Array<DexihDatalinkColumn>;
  outputColumns: Array<DexihDatalinkColumn>;

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
        this.hubCache = result[2];
        this.datalinkForm = result[3];
        this.remoteLibraries = result[4];

        this.functionType = result[1]['functionType'];
        if (this.functionType === eTransformFunctionType.Validation) {
          this.datalinkTransformForm = this.editDatalinkService.getValidationTransform();
          this.datalinkTransformKey = this.datalinkTransformForm.value.key;
        } else {
          this.datalinkTransformKey = +result[1]['datalinkTransformKey'];
          this.datalinkTransformForm = this.editDatalinkService.getDatalinkTransform(this.datalinkTransformKey);
        }

        this.datalinkTransformItemKey = +result[1]['datalinkTransformItemKey'];

        if (this.datalinkTransformForm) {
          // // if this is a join transform, then the use the join columns for the input.
          // if (this.datalinkTransformForm.value.transformType === eTransformType.Join ||
          //   this.datalinkTransformForm.value.transformType === eTransformType.Lookup ) {
          //   const table = this.datalinkTransformForm.controls.joinDatalinkTable.value;
          //   if (!table) {
          //     this.hubService.addHubErrorMessage('The join table could not be found.');
          //     this.authService.navigateUp();
          //   }
          //   table.name = '(Joined) ' + table.name;
          //   this.sourceTables = this.datalinkTransformForm.controls.runTime.value.inputColumns;
          //   this.sourceTables.unshift(table);
          // }  else {
          //   this.inputColumns = this.datalinkTransformForm.controls.runTime.value.inputColumns;
          // }
          // this.outputColumns = this.datalinkTransformForm.controls.runTime.value.transformColumns;

          let nodeDatalinkColumn = <DexihDatalinkColumn> this.datalinkTransformForm.controls.nodeDatalinkColumn.value;
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

              // create a copy of the form item to allow for cancel.
              this.newDatalinkTransformItemForm = this.editDatalinkService.hubFormsService
                .datalinkDatalinkTransformItemFormGroup(this.datalinkTransformForm, this.datalinkTransformItemForm.value);

            if (!this.newDatalinkTransformItemForm) {
                this.authService.navigateUp();
            }
          } else {

            let newItem = new DexihDatalinkTransformItem();
            newItem.datalinkTransformKey = this.datalinkTransformKey;
            newItem.transformItemType = eDatalinkTransformItemType.CustomFunction;
            if (this.functionType === eTransformFunctionType.Condition
              || this.functionType === eTransformFunctionType.JoinCondition || this.functionType === eTransformFunctionType.Validation) {
              newItem.returnType = eTypeCode.Boolean;
            } else {
              newItem.returnType = eTypeCode.String;
            }

            let returnParameter = new DexihFunctionParameter();
            returnParameter.dataType = eTypeCode.String;
            returnParameter.name = 'Return';
            returnParameter.direction = eParameterDirection.ReturnValue;
            returnParameter.rank = 0;
            returnParameter.position = -1;
            returnParameter.datalinkColumn = null;
            returnParameter.isValid = true;

            newItem.dexihFunctionParameters = new Array<DexihFunctionParameter>();
            newItem.dexihFunctionParameters.push(returnParameter);
            this.newDatalinkTransformItemForm = this.editDatalinkService.hubFormsService
              .datalinkDatalinkTransformItemFormGroup(this.datalinkTransformForm, newItem);
          }

          // this.returnParameterForm = this.editDatalinkService.hubFormsService
          //   .datalinkFunctionParametersFormGroup(returnParameter);

          // if (this._returnParameterSubscription) { this._returnParameterSubscription.unsubscribe(); }
          // this._returnParameterSubscription = this.returnParameterForm.valueChanges.subscribe(parameter => {
          //   this.newDatalinkTransformItemForm.controls.targetDatalinkColumn.setValue(parameter.datalinkColumn);
          //   this.newDatalinkTransformItemForm.controls.returnType.setValue(parameter.dataType);
          //   this.newDatalinkTransformItemForm.markAsDirty();
          // });

          this.parameters = <FormArray>this.newDatalinkTransformItemForm.controls.dexihFunctionParameters;

          this.setParameters(this.parameters.controls);

          if (this._parametersSubscription) { this._parametersSubscription.unsubscribe(); }
          this._parametersSubscription = this.parameters.valueChanges.subscribe(p => {
            this.setParameters(p);
          });
        }
      });
    } catch (e) {
      this.hubService.addHubClientErrorMessage(e, 'Edit Custom Function');
    }
  }

  ngOnDestroy() {
    if (this._subscription) { this._subscription.unsubscribe(); }
    if (this._returnParameterSubscription) { this._returnParameterSubscription.unsubscribe(); }
    if (this._parametersSubscription) { this._parametersSubscription.unsubscribe(); }
  }

  canDeactivate(): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      if (this.newDatalinkTransformItemForm && !this.newDatalinkTransformItemForm.pristine) {
        this.authService.confirmDialog('Function has changed',
        'The function has changed.  Would you like to discard the changes and return to the previous screen?'
        ).then(confirm => {
          resolve(true);
        }).catch(reason => {
          resolve(false);
        });
      } else {
        resolve(true);
      }
    });
  }

  private setParameters(p: AbstractControl[]) {
      this.inputParameters = this.parameters.controls.sort((a, b) => a.value.position - b.value.position)
      .filter(c => c.value.direction === eParameterDirection.Input);

      this.inputParameterValues = new Array(this.inputParameters.length);

    this.outputParameters = this.parameters.controls.sort((a, b) => a.value.position - b.value.position)
      .filter(c => c.value.direction === eParameterDirection.Output);

      this.outputParameterValues = new Array(this.inputParameters.length);

      this.returnParameterForm = <FormGroup> this.parameters.controls.find(c => c.value.direction === eParameterDirection.ReturnValue);
    }

  private parametersArray() {
    return <FormArray>this.newDatalinkTransformItemForm.controls.dexihFunctionParameters;
  }

  addParameter(parameter: FormGroup, direction: eParameterDirection) {
    try {
      let newParameter = new DexihFunctionParameter();
      if (parameter) {
        let oldParameter = parameter.value;
        newParameter.dataType = oldParameter.dataType;
        newParameter.name = oldParameter.name;
        newParameter.position = oldParameter.position + 1;
      }

      newParameter.name = '';
      newParameter.datalinkColumn = null;
      newParameter.value = null;
      newParameter.direction = direction;
      newParameter.rank = 0;
      newParameter.isValid = true;

      let parameters = this.parametersArray();
      let newParameterForm = this.editDatalinkService.hubFormsService
        .datalinkFunctionParametersFormGroup(newParameter);
      parameters.push(newParameterForm);

      // reset the positions
      parameters.controls.sort((a, b) => a.value.position - b.value.position).forEach((p, index) => {
        (<FormGroup>p).controls.position.setValue(index * 10);
      });
    } catch (e) {
      this.hubService.addHubClientErrorMessage(e, 'Edit Custom Function, add parameter');
    }

  }

  removeParameter(parameter: FormGroup) {
    try {
      let inputParameters = this.parametersArray();
      let index: number = inputParameters.controls.indexOf(parameter);
      if (index > -1) {
        inputParameters.removeAt(index);
      }
    } catch (e) {
      this.hubService.addHubClientErrorMessage(e, 'Edit Custom Function, remove parameter');
    }
  }

  newDefaultParameter(): DexihFunctionParameter {
    try {
      let parameter = new DexihFunctionParameter();
      parameter.datalinkTransformItemKey = this.newDatalinkTransformItemForm.value.key;
      parameter.dataType = eTypeCode.String;
      parameter.rank = 0;
      parameter.isValid = true;
      return parameter;
    } catch (e) {
      this.hubService.addHubClientErrorMessage(e, 'Edit Custom Function, default parameter');
    }

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

  downloadCode(parameters = null) {
    this.hubService.downloadCustomFunction(this.newDatalinkTransformItemForm.value, parameters);
  }

  test(parameters = null) {
    this.hubService.testCustomFunction(this.newDatalinkTransformItemForm.value, parameters).then(result => {
      this.hubService.addHubSuccessMessage('The function has successfully compiled.');

      if (result && result.length > 0) {
        result.forEach((value, index) => {
          if (index === 0) {
            this.returnParameterValue = value;
          } else {
            this.outputParameterValues[index - 1] = value;
          }
        });
      } else {
        this.returnParameterValue = null;
        this.outputParameterValues.forEach(c => c = null );
      }
    }).catch(() => {
      this.returnParameterValue = null;
      this.outputParameterValues.forEach(c => c = null );
    });
  }
}

