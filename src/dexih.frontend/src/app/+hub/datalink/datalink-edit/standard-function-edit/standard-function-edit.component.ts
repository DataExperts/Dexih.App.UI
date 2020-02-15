import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HubCache, InvalidActions, FunctionCache} from '../../../hub.models';
import { HubService } from '../../../hub.service';
import { DatalinkEditService } from '../datalink-edit.service';
import { Subscription, combineLatest } from 'rxjs';
import { AuthService } from '../../../../+auth/auth.service';
import { FormGroup, FormArray } from '@angular/forms';
import { LogFactory, eLogLevel } from '../../../../../logging';
import { TypeCodes } from '../../../hub.remote.models';
import { InputOutputColumns } from '../../../hub.lineage.models';
import { FunctionParameter, eFunctionType, eParameterDirection, eGenericType, DexihDatalinkColumn, FunctionReference,
  DexihCustomFunction, eTransformType, DexihDatalinkTable, DexihDatalinkTransformItem, eTransformItemType,
  DexihFunctionParameter, eTypeCode, DexihCustomFunctionParameter,
  DexihFunctionArrayParameter, RemoteLibraries, eInvalidActionItems, eErrorActionItems, DexihDatalinkTarget } from '../../../../shared/shared.models';
import { CancelToken } from '../../../../+auth/auth.models';

export class ArrayParameter {
  public name: string;
  public functionParameter: FunctionParameter;

  public inputParameterForms: FormGroup[] = [];
  public outputParameterForms: FormGroup[] = [];

  public parameterItems: ArrayParameterItem[] = [];

  public resetItems() {
    let inputArray = <FormArray>this.inputParameterForms[0].controls.arrayParameters;
    for (let i = 0; i < inputArray.controls.length; i++) {
      let item = new ArrayParameterItem();
      this.inputParameterForms.forEach(inputParameterForm => {
        let array = <FormArray>inputParameterForm.controls.arrayParameters;
        item.inputItems.push(<FormGroup>array.controls[i]);
      });
      this.outputParameterForms.forEach(outputParameterForm => {
        let array = <FormArray>outputParameterForm.controls.arrayParameters;
        item.outputItems.push(<FormGroup>array.controls[i]);
      });

      this.parameterItems.push(item);
    }
  }
}

export class ArrayParameterItem {
  public inputItems: FormGroup[] = [];
  public outputItems: FormGroup[] = [];
}


@Component({

  selector: 'dexih-function-edit',
  templateUrl: './standard-function-edit.component.html'
})
export class StandardFunctionEditComponent implements OnInit, OnDestroy {
  public hubCache: HubCache;
  public remoteLibraries: RemoteLibraries;

  eFunctionType = eFunctionType;
  eParameterDirection = eParameterDirection;
  typeCodes = TypeCodes;

  public pageTitle: string;

  private _subscription: Subscription;
  private _returnParameterSubscription: Subscription;
  private _functionSubscription: Subscription;
  private _saveSubscription: Subscription;

  private cancelToken: CancelToken = new CancelToken();

  transformFunctionType: eFunctionType;
  datalinkTransformItemKey: number;
  datalinkKey: number;
  datalinkTransformKey: number;

  datalinkForm: FormGroup;
  datalinkTransformForm: FormGroup;
  datalinkTransformItemForm: FormGroup;
  // returnParameterForm: FormGroup;
  resultReturnParameterForm: FormGroup;

  useCustomFunction: boolean;

  invalidActions = InvalidActions;
  functionCache = FunctionCache;
  eGenericType = eGenericType;

  newDatalinkTransformItemForm: FormGroup;

  inputColumns: Array<DexihDatalinkColumn>;
  outputColumns: Array<DexihDatalinkColumn>;
  datalinkTargets: Array<DexihDatalinkTarget>;

  functionCategory: string;
  functionCategories: Array<string>;
  functions: Array<FunctionReference>;
  filteredFunctions: Array<FunctionReference>;
  selectedFunction: FunctionReference;
  customFunctions: Array<DexihCustomFunction>;
  selectedCustomFunction: DexihCustomFunction;

  variables = [];

  allowOutput = false;
  allowReturn = true;

  inputParameterControls: Array<FormGroup>;
  outputParameterControls: Array<FormGroup>;

  arrayParameters: ArrayParameter[] = [];

  eInvalidActionItems = eInvalidActionItems.filter(c => c.key > 0);
  eErrorActionItems = eErrorActionItems.filter(c => c.key > 0);

  logger = new LogFactory('standard-function-edit');

  isJoin = false;

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
        this.hubService.getRemoteLibrariesObservable(),
        this.editDatalinkService.hubFormsService.getCurrentFormObservable()
      ).subscribe(result => {
        this.pageTitle = result[0]['pageTitle'];
        let params = result[1];
        this.hubCache = result[2];
        this.remoteLibraries = result[3]
        this.datalinkForm = result[4];

        this.logger.LogC(() => `OnInit`, eLogLevel.Trace);

        if (this.hubCache && this.hubCache.isLoaded() && this.datalinkForm
          && this.remoteLibraries && this.remoteLibraries.functions.length > 0) {

          this.transformFunctionType = +params['functionType'];
          if (this.transformFunctionType === eFunctionType.Validate) {
            this.datalinkTransformForm = this.editDatalinkService.getValidationTransform();
            this.datalinkTransformKey = this.datalinkTransformForm.value.key;
          } else {
            this.datalinkTransformKey = +params['datalinkTransformKey'];
            this.datalinkTransformForm = this.editDatalinkService.getDatalinkTransform(this.datalinkTransformKey);
          }

          this.variables = this.editDatalinkService.getVariables();

          this.useCustomFunction = this.datalinkTransformForm.controls.customFunctionKey ? true : false;
          this.datalinkTransformItemKey = +params['datalinkTransformItemKey'];

          this.isJoin = this.datalinkTransformForm.value.transformType === eTransformType.Join ||
            this.datalinkTransformForm.value.transformType === eTransformType.Lookup;

          // if this is a join transform, then the use the join columns for the input.
          if (this.isJoin) {
            const table = <DexihDatalinkTable>this.datalinkTransformForm.controls.joinDatalinkTable.value;
            if (!table) {
              this.hubService.addHubErrorMessage('The join table could not be found.');
              this.authService.navigateUp();
              return;
            }

            this.inputColumns = table.dexihDatalinkColumns;
          } else {
            let nodeDatalinkColumn = <DexihDatalinkColumn> this.datalinkTransformForm.controls.nodeDatalinkColumn.value;
            let nodeDatalinkColumnKey = nodeDatalinkColumn ? nodeDatalinkColumn.key : null;
            let io = new InputOutputColumns();
            if (nodeDatalinkColumnKey) {
              let inputColumns = <DexihDatalinkColumn[]> this.datalinkTransformForm.controls.runTime.value.inputColumns;
              this.inputColumns = io.getAvailableColumns(inputColumns, nodeDatalinkColumnKey, 0);
            } else {
              this.inputColumns = this.datalinkTransformForm.controls.runTime.value.inputColumns;
            }
          }

          this.outputColumns = this.datalinkTransformForm.controls.runTime.value.transformColumns;
          this.datalinkTargets = this.datalinkForm.controls.dexihDatalinkTargets.value;

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

            if (this.datalinkTransformItemForm.controls.customFunctionKey.value) {
                this.selectCustomFunction(this.datalinkTransformItemForm.value.customFunctionKey);
            } else {
            let selectedFunction = this.remoteLibraries.functions.find(c =>
              c.functionClassName === this.datalinkTransformItemForm.value.functionClassName &&
              c.functionMethodName === this.datalinkTransformItemForm.value.functionMethodName &&
              c.functionAssemblyName === this.datalinkTransformItemForm.value.functionAssemblyName
            );

            // this.selectedFunction = selectedFunction;
              this.selectFunction(selectedFunction);
            // this.refreshParameters();
            }

          } else {
            let newItem = new DexihDatalinkTransformItem();
            newItem.datalinkTransformKey = this.datalinkTransformKey;
            newItem.transformItemType = eTransformItemType.BuiltInFunction;

            this.newDatalinkTransformItemForm = this.editDatalinkService.hubFormsService
              .datalinkDatalinkTransformItemFormGroup(this.datalinkTransformForm, newItem);
          }

          switch (this.transformFunctionType) {
            case eFunctionType.Condition:
            case eFunctionType.JoinCondition:
              this.functions = this.remoteLibraries.functions.filter(c => c.functionType === eFunctionType.Condition);
              this.allowOutput = false;
              break;
            case eFunctionType.Validate:
              this.functions = this.remoteLibraries.functions
                .filter(c => c.functionType === eFunctionType.Condition || c.functionType === eFunctionType.Validate);
              this.allowOutput = true;
              break;
            case eFunctionType.Map:
              this.functions = this.remoteLibraries.functions
                .filter(c => c.functionType === eFunctionType.Condition ||
                  c.functionType === eFunctionType.Validate ||
                  c.functionType === eFunctionType.Map);

              this.allowOutput = true;
              break;
            case eFunctionType.Aggregate:
              this.functions = this.remoteLibraries.functions.filter(c => c.functionType === eFunctionType.Aggregate);
              this.allowOutput = true;
              break;
            case eFunctionType.Series:
              this.functions = this.remoteLibraries.functions.filter(c => c.functionType === eFunctionType.Series ||
                c.functionType === eFunctionType.Aggregate);
              this.allowOutput = true;
              break;
            case eFunctionType.Rows:
              this.functions = this.remoteLibraries.functions.filter(c => c.functionType === eFunctionType.Rows);
              this.allowOutput = true;
              this.allowReturn = false;
              break;
            case eFunctionType.Profile:
              this.functions = this.remoteLibraries.functions.filter(c => c.functionType === eFunctionType.Profile);
              this.allowOutput = false;
              break;
            default:
              this.functions = null;
          }

          this.functionCategories = Array.from(new Set(this.functions.map(c => c.category)));
          this.filteredFunctions = this.functions;
          this.customFunctions = this.hubCache.hub.dexihCustomFunctions;
          if (this.datalinkTransformItemForm && this.datalinkTransformItemForm.value.customFunctionKey) {
            this.useCustomFunction = true;
            this.selectedCustomFunction = this.hubCache.hub.dexihCustomFunctions
              .find(c => c.key === this.datalinkTransformItemForm.value.customFunctionKey);
          }

          if (this._functionSubscription) { this._functionSubscription.unsubscribe(); }
          this._functionSubscription = this.newDatalinkTransformItemForm.controls.customFunctionKey.valueChanges
            .subscribe(customFunctionKey => {
              this.selectCustomFunction(customFunctionKey);
            });
        }

        if (this._saveSubscription) { this._saveSubscription.unsubscribe(); }
        this._saveSubscription = this.editDatalinkService.savingDatalink.subscribe(value => {
            if(value) {
                this.apply();
            }
        });

      });
    } catch (e) {
      this.hubService.addHubClientErrorMessage(e, 'Standard Function Edit');
    }
  }

  ngOnDestroy() {
    if (this._subscription) { this._subscription.unsubscribe(); }
    if (this._returnParameterSubscription) { this._returnParameterSubscription.unsubscribe(); }
    if (this._functionSubscription) { this._functionSubscription.unsubscribe(); }
    if (this._saveSubscription) { this._saveSubscription.unsubscribe(); }
    this.cancelToken.cancel();
  }

  updateCategory(value) {
    if (value) {
      this.filteredFunctions = this.functions.filter(c => c.category === value);
    } else {
      this.filteredFunctions = this.functions;
    }
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

  private parametersArray() {
    return <FormArray>this.newDatalinkTransformItemForm.controls.dexihFunctionParameters;
  }

  refreshParameters() {
    let parametersArray = this.parametersArray();

    // convoluted sort below allows sorting by the direction then the position
    this.inputParameterControls = <FormGroup[]>parametersArray.controls
      .sort((a, b) => a.value.position - b.value.position)
      .filter(c => (c.value.direction === eParameterDirection.Input || c.value.direction === eParameterDirection.ResultInput
        || c.value.direction === eParameterDirection.Join));

    // convoluted sort below allows sorting by the direction then the position
    this.outputParameterControls = <FormGroup[]>parametersArray.controls
      .sort((a, b) => a.value.position - b.value.position)
      .filter(c => !c.value.runTime.functionParameter.linkedName && HubCache.parameterIsOutput(c.value));

    // don't include return value (which will determine pass/fail) for validation transforms.
    if (this.transformFunctionType === eFunctionType.Validate) {
      this.outputParameterControls = this.outputParameterControls.filter(c => c.value.direction !== eParameterDirection.ReturnValue);
    }

    this.arrayParameters = [];

    if (this.selectedFunction) {

      this.selectedFunction.inputParameters.filter(c => c.linkedName).forEach(parameter => {
        let arrayParameter = this.arrayParameters.find(c => c.name === parameter.linkedName);
        if (!arrayParameter) {
          arrayParameter = new ArrayParameter();
          arrayParameter.name = parameter.linkedName;
          arrayParameter.functionParameter = parameter;
          this.arrayParameters.push(arrayParameter);
        }

        let controls = this.inputParameterControls.find(c => c.controls.name.value === parameter.name);
        arrayParameter.inputParameterForms.push(controls);
      });

      this.selectedFunction.outputParameters.filter(c => c.linkedName).forEach(parameter => {
        let arrayParameter = this.arrayParameters.find(c => c.name === parameter.linkedName);
        if (!arrayParameter) {
          arrayParameter = new ArrayParameter();
          arrayParameter.name = parameter.linkedName;
          arrayParameter.functionParameter = parameter;
          this.arrayParameters.push(arrayParameter);
        }

        let controls = this.outputParameterControls.find(c => c.controls.name.value === parameter.name);
        arrayParameter.outputParameterForms.push(controls);

      });
    }

    this.arrayParameters.forEach(arrayParameter => arrayParameter.resetItems());
  }

  // when a new standard function is selected
  // reset all the parameters
  selectFunction(value: FunctionReference) {
    this.selectedFunction = value;

    if (value === null || value === undefined) { return; }

    this.newDatalinkTransformItemForm.controls.functionAssemblyName.setValue(this.selectedFunction.functionAssemblyName);
    this.newDatalinkTransformItemForm.controls.functionClassName.setValue(this.selectedFunction.functionClassName);
    this.newDatalinkTransformItemForm.controls.functionMethodName.setValue(this.selectedFunction.functionMethodName);
    this.newDatalinkTransformItemForm.controls.targetDatalinkColumn.setValue(null);
    this.newDatalinkTransformItemForm.controls.genericTypeCode.setValue(this.selectedFunction.genericTypeDefault);

    switch (this.selectedFunction.genericType) {
      case eGenericType.All:
        this.typeCodes = TypeCodes;
        break;
      case eGenericType.Numeric:
        this.typeCodes = TypeCodes.filter(c => c.isNumeric);
        break;
      case eGenericType.String:
        this.typeCodes = TypeCodes.filter(c => c.isString);
        break;
      case eGenericType.None:
        this.typeCodes = [];
    }

    if (this.selectedFunction) {
      let parameters = this.parametersArray();
      let existingParameters: any[] = [];

      while (parameters.length) {
        existingParameters.push(parameters.value[0])
        parameters.removeAt(0);
      }

      if (this.selectedFunction.inputParameters) {
        this.selectedFunction.inputParameters.forEach((param: FunctionParameter, index: number) => {
          if (param) {
            parameters.push(
                this.newParameter(existingParameters, param, index, this.isJoin ? eParameterDirection.Join : eParameterDirection.Input,
                    this.selectedFunction.genericTypeDefault));
          }
        });
      }

      if (this.selectedFunction.outputParameters) {
        this.selectedFunction.outputParameters.forEach((param: FunctionParameter, index: number) => {
          if (param) {
            if (param) {
              parameters.push(this.newParameter(existingParameters, param, index + 100, eParameterDirection.Output,
                this.selectedFunction.genericTypeDefault));
            }
          }
        });
      }

      if (this.selectedFunction.resultInputParameters) {
        this.selectedFunction.resultInputParameters.forEach((param: FunctionParameter, index: number) => {
          if (param) {
            parameters.push(
                this.newParameter(existingParameters, param, index + 200, eParameterDirection.ResultInput,
                  this.selectedFunction.genericTypeDefault));
          }
        });
      }

      if (this.selectedFunction.resultOutputParameters) {
        this.selectedFunction.resultOutputParameters.forEach((param: FunctionParameter, index: number) => {
          if (param) {
            if (param) {
              parameters.push(
                  this.newParameter(existingParameters, param, index + 300, eParameterDirection.ResultOutput,
                    this.selectedFunction.genericTypeDefault));
            }
          }
        });
      }

      if (this.selectedFunction.returnParameters) {
        if (this.allowReturn && this.selectedFunction.returnParameters.length > 0) {
          this.selectedFunction.returnParameters.forEach((parameter: FunctionParameter, index: number) => {
            parameters.push(this.newParameter(existingParameters, parameter, index + 400,
              eParameterDirection.ReturnValue, this.selectedFunction.genericTypeDefault ));
          });
        }
      }

      if (this.selectedFunction.resultReturnParameters) {
        if (this.allowReturn && this.selectedFunction.resultReturnParameters.length > 0) {
            this.selectedFunction.resultReturnParameters.forEach(parameter => {
            parameters.push(this.newParameter(existingParameters, parameter, 0,
                eParameterDirection.ResultReturnValue, this.selectedFunction.genericTypeDefault));
          });
        }
      }

      this.refreshParameters()
    } else {
      this.selectedFunction = null;
    }
  }

  private newParameter(existingParameters: DexihFunctionParameter[],
    param: any, index: number, direction: eParameterDirection, genericTypeDefault: eTypeCode): FormGroup {

    let existingValue = existingParameters.find(c => c.name === param.parameterName)

    let newParameter = new DexihFunctionParameter();
    // newParameter.datalinkTransformItemKey = this.datalinkTransformItemKey;
    newParameter.name = param.parameterName;
    newParameter.rank = param.rank;
    newParameter.direction = direction;
    newParameter.isGeneric = param.isGeneric;
    newParameter.position = index;
    newParameter.key = this.hubCache.getNextSequence();
    newParameter['runTime'] = {functionParameter: param};

    if (existingValue) {
      newParameter.key = existingValue.key;
      newParameter.datalinkColumn = existingValue.datalinkColumn;
      newParameter.value = existingValue.value;
      newParameter.dataType = param.isGeneric ? existingValue.dataType : param.dataType;
      existingValue.arrayParameters.forEach(p => {
        p['runTime'] = {functionParameter: param};
      });
      newParameter.arrayParameters = existingValue.arrayParameters;
    } else {
      newParameter.value = param.defaultValue;
      newParameter.dataType = param.isGeneric ? genericTypeDefault : param.dataType;
    }

    newParameter.isValid = true;

    let newParameterForm = this.editDatalinkService.hubFormsService.datalinkFunctionParametersFormGroup(newParameter);
    return newParameterForm;
  }

  // when a new standard function is selected
  // reset all the parameters
  selectCustomFunction(customFunctionKey: number) {
    this.selectedCustomFunction = this.hubCache.hub.dexihCustomFunctions.find(c => c.key === customFunctionKey);

    if (this.selectedCustomFunction) {
      let parameters = this.parametersArray();
      let existingParameters: any[] = [];

      while (parameters.length) {
        existingParameters.push(parameters.value[0]);
        parameters.removeAt(0);
      }

      this.selectedCustomFunction.dexihCustomFunctionParameters
        .filter(c => (c.direction === eParameterDirection.Input || c.direction === eParameterDirection.Join)  && c.isValid)
        .forEach((param: DexihCustomFunctionParameter, index: number) => {
          if (param) {
            let newParameterForm =
              this.newParameter(existingParameters, param, index, this.isJoin ? eParameterDirection.Join : eParameterDirection.Input,
                this.selectedCustomFunction.genericTypeDefault);
            parameters.push(newParameterForm);
          }
        });

      this.selectedCustomFunction.dexihCustomFunctionParameters.filter(c => c.direction === eParameterDirection.Output && c.isValid)
        .forEach((param: DexihCustomFunctionParameter, index: number) => {
          if (param) {
            let newParameterForm =
              this.newParameter(existingParameters, param, index, eParameterDirection.Output,
                this.selectedCustomFunction.genericTypeDefault);
            parameters.push(newParameterForm);
          }
        });

        let returnParameter = new DexihFunctionParameter();
        returnParameter.dataType = this.selectedCustomFunction.returnType;
        returnParameter.name = 'Return';
        returnParameter.direction = eParameterDirection.Output;
        returnParameter.rank = 0;
        returnParameter.position = -1;
        returnParameter.isValid = true;
        let newParameterForm2 = this.newParameter(existingParameters, returnParameter, 0, eParameterDirection.ReturnValue,
          this.selectedCustomFunction.genericTypeDefault);
        parameters.push(newParameterForm2);

      this.refreshParameters()
    }
  }

  private createArrayParameter(parentParameter: DexihFunctionArrayParameter,
    direction: eParameterDirection, position: number = null, genericTypeDefault: eTypeCode):
    DexihFunctionArrayParameter {
    let param = parentParameter['runTime'].functionParameter;
    let newParameter = new DexihFunctionArrayParameter();
    newParameter.isGeneric = param.isGeneric;
    newParameter.dataType = param.isGeneric ? genericTypeDefault : parentParameter.dataType;
    newParameter.position = position ? position + 1 : 10000000;
    newParameter.name = param.name;
    newParameter.direction = direction;
    newParameter.rank = 0;
    newParameter.key = this.hubCache.getNextSequence();
    newParameter.datalinkColumn = null;
    newParameter.isValid = true;
    newParameter['runTime'] = {functionParameter: param};

    return newParameter;
  }

  addParameter(parentParameterForm: FormGroup, direction: eParameterDirection, position: number = null): FormGroup {
    if (direction === eParameterDirection.Input && this.isJoin) { direction = eParameterDirection.Join; }
    let parentParameter = parentParameterForm.value;
    let newParameter = this.createArrayParameter(parentParameter, direction, 0,
      this.newDatalinkTransformItemForm.controls.genericTypeCode.value);
    let newParameterForm = this.editDatalinkService.hubFormsService.datalinkFunctionArrayParametersFormGroup(newParameter);
    let arrayForm = <FormArray>parentParameterForm.controls.arrayParameters;
    if (position !== null) {
      arrayForm.insert(position + 1, newParameterForm);
    } else {
      arrayForm.push(newParameterForm);
    }

    // reset the positions
    arrayForm.controls.forEach((p, index) => {
      (<FormGroup>p).controls.position.setValue(index * 10);
    });

    this.refreshParameters()
    return newParameterForm;
  }

  addInputOutputParameter(arrayParameter: ArrayParameter, position: number = null) {
    let item = new ArrayParameterItem();

    arrayParameter.inputParameterForms.forEach(parameterForm => {
      let parameter = this.addParameter(parameterForm, this.isJoin ? eParameterDirection.Join : eParameterDirection.Input, position);
      item.inputItems.push(parameter);
    });

    arrayParameter.outputParameterForms.forEach(parameterForm => {
      let parameter = this.addParameter(parameterForm, eParameterDirection.Output, position);
      item.outputItems.push(parameter);
    });

    if (position !== null) {
      arrayParameter.parameterItems.splice(position, 0, item);
    } else {
      arrayParameter.parameterItems.push(item);
    }
  }

  removeParameter(parentParameterForm: FormGroup, position: number) {
    let arrayForm = <FormArray>parentParameterForm.controls.arrayParameters;
    if (position > -1) {
      arrayForm.removeAt(position);
      this.newDatalinkTransformItemForm.markAsDirty();
      this.refreshParameters();
    }
  }

  removeInputOutputParameter(arrayParameter: ArrayParameter, position: number = null) {

    arrayParameter.inputParameterForms.forEach(parameterForm => {
      this.removeParameter(parameterForm, position);
    });

    arrayParameter.outputParameterForms.forEach(parameterForm => {
      this.removeParameter(parameterForm, position);
    });

    if (position !== null) {
      arrayParameter.parameterItems.splice(position, 1);
    } else {
      arrayParameter.parameterItems.splice(arrayParameter.parameterItems.length - 1, 1);
    }
  }

  addAllColumns(parentParameterForm: FormGroup) {
    this.clearArray(parentParameterForm);

    let isLabel = parentParameterForm.value.runTime.functionParameter.isLabel;
    let parentParameter = parentParameterForm.value;
    let arrayForm = <FormArray>parentParameterForm.controls.arrayParameters;
    let position = 1;
    this.inputColumns.forEach(column => {
      let newParameter = this.createArrayParameter(parentParameter,
        this.isJoin ? eParameterDirection.Join : eParameterDirection.Input, position++, this.selectedFunction.genericTypeDefault);
        if (isLabel) {
          newParameter.value = column.name;
        } else {
          newParameter.datalinkColumn = column;
        }

      let newParameterForm = this.editDatalinkService.hubFormsService.datalinkFunctionArrayParametersFormGroup(newParameter);
      arrayForm.push(newParameterForm);
    });
    this.refreshParameters();
  }

  addAllInputOutputColumns(arrayParameter: ArrayParameter) {
    // add the first parameter
    this.addAllColumns(arrayParameter.inputParameterForms[0]);
    let inputArrayForm = <FormArray>arrayParameter.inputParameterForms[0].controls.arrayParameters;

    if (arrayParameter.inputParameterForms.length > 1) {
      this.clearArray(arrayParameter.inputParameterForms[1]);
      for (let i = 0; i < inputArrayForm.length; i++) {
        let parameter = this.addParameter(arrayParameter.inputParameterForms[1],
          this.isJoin ? eParameterDirection.Join : eParameterDirection.Input);

        // if the first parameter is a label, then map the matching column to the second input parameter
        if (arrayParameter.inputParameterForms[0].value.runTime.functionParameter.isLabel) {
          parameter.controls.datalinkColumn.setValue(this.inputColumns[i]);
        }
      }

      // add any other parameters with default values.
      for (let i = 2; i < arrayParameter.inputParameterForms.length; i++) {
        this.clearArray(arrayParameter.inputParameterForms[i]);
        for (let j = 0; j < inputArrayForm.length; j++) {
          let parameter = this.addParameter(arrayParameter.inputParameterForms[i],
            this.isJoin ? eParameterDirection.Join : eParameterDirection.Input);
            parameter.controls.value.setValue(arrayParameter.inputParameterForms[i].value.runTime.functionParameter.defaultValue);
        }
      }
    }

    // add any output columns of the same length.
    if (arrayParameter.outputParameterForms.length > 0) {
      for (let i = 0; i < arrayParameter.outputParameterForms.length; i++) {
        this.clearArray(arrayParameter.outputParameterForms[i]);
        for (let j = 0; j < inputArrayForm.length; j++) {
        }
      }
    }

    arrayParameter.resetItems();
  }

  clearArray(parameterForm: FormGroup) {
    let arrayForm = <FormArray>parameterForm.controls.arrayParameters;
    for (let i = arrayForm.controls.length - 1; i >= 0; i--) {
      arrayForm.removeAt(i);
    }
    this.refreshParameters();
  }

  clearInputOutputArray(arrayParameter: ArrayParameter) {
    arrayParameter.inputParameterForms.forEach(form => {
      this.clearArray(form);
    });

    arrayParameter.outputParameterForms.forEach(form => {
      this.clearArray(form);
    });
  }


  async importInputOutputMappings(arrayParameter: ArrayParameter) {
    let result = await this.editDatalinkService
      .importFunctionMappings(this.datalinkTransformKey, this.newDatalinkTransformItemForm.value, this.cancelToken);

      if (result === null) { return; }

      let inputArrayForm = <FormArray>arrayParameter.inputParameterForms[0].controls.arrayParameters;

      this.clearArray(arrayParameter.inputParameterForms[0]);
      for (let i = 0; i < result.length; i++) {
        let parameter = this.addParameter(arrayParameter.inputParameterForms[0],
          this.isJoin ? eParameterDirection.Join : eParameterDirection.Input);

          parameter.controls.value.setValue(result[i]);

        // // if the first parameter is a label, then map the matching column to the second input parameter
        // if (arrayParameter.inputParameterForms[0].value.runTime.functionParameter.isLabel) {
        //   parameter.controls.datalinkColumn.setValue(this.inputColumns[i]);
        // }
      }

      // add any other parameters with default values.
      for (let i = 1; i < arrayParameter.inputParameterForms.length; i++) {
        this.clearArray(arrayParameter.inputParameterForms[i]);
        for (let j = 0; j < inputArrayForm.length; j++) {
          let parameter = this.addParameter(arrayParameter.inputParameterForms[i],
            this.isJoin ? eParameterDirection.Join : eParameterDirection.Input);
            parameter.controls.value.setValue(arrayParameter.inputParameterForms[i].value.runTime.functionParameter.defaultValue);
        }
      }

      // add any output columns of the same length.
      if (arrayParameter.outputParameterForms.length > 0) {
        for (let i = 0; i < arrayParameter.outputParameterForms.length; i++) {
          this.clearArray(arrayParameter.outputParameterForms[i]);
          for (let j = 0; j < inputArrayForm.length; j++) {
          }
        }
      }

      arrayParameter.resetItems();
  }

  autoMap() {
    this.outputParameterControls.forEach(param => {
      let newColumn = new DexihDatalinkColumn();
      newColumn.key = this.hubService.getHubCache().getNextSequence();
      newColumn.position = 1000 - newColumn.key;

      let paramValue = <DexihFunctionParameter> param.value;

      newColumn.dataType = paramValue.dataType;
      newColumn.allowDbNull = true;
      newColumn.name = paramValue['runTime'].functionParameter.name;
      newColumn.logicalName = paramValue['runTime'].functionParameter.name;
      newColumn.rank = paramValue.rank;

      param.controls.datalinkColumn.setValue(newColumn);
      this.newDatalinkTransformItemForm.markAsDirty();
    })
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

