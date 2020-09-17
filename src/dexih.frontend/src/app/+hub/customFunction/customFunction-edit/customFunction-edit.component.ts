import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { HubCache, eCacheStatus} from '../../hub.models';
import { HubService } from '../../hub.service';
import { AuthService } from '../../../+auth/auth.service';
import { Observable ,  Subscription, combineLatest} from 'rxjs';
import { Location } from '@angular/common';
import { HubFormsService } from '../../hub.forms.service';
import { TypeCodes, functionTypes } from '../../hub.remote.models';
import { FormGroup, FormArray } from '@angular/forms';
import { Message, CancelToken } from '../../../+auth/auth.models';
import { eParameterDirection, eFunctionType, DexihCustomFunction, eTypeCode,
  DexihCustomFunctionParameter, DexihDatalinkTransformItem, eTransformItemType, DexihFunctionParameter } from '../../../shared/shared.models';

@Component({

  selector: 'dexih-customFunction-edit-form',
  templateUrl: './customFunction-edit.component.html',
  providers: [HubFormsService]
})
export class CustomFunctionEditComponent implements OnInit, OnDestroy {

  private customFunctionKey: number;

  private hubCache: HubCache;
  public action: string; // new or edit
  public pageTitle: string;
  public params: Params;

  typeCodes = TypeCodes;
  eParameterDirection = eParameterDirection;

  outputParameters = [];
  inputParameters = [];

  outputParameterValues = [];
  inputParameterValues = [];
  returnParameterValue;

  functionType: eFunctionType;
  functionTypes = functionTypes;
  eFunctionType = eFunctionType;

  syntaxMessage: Message;

  public testValue: string;
  public testResult: any;

  public lookupColumnValue = '';
  private isLoaded = false;

  public cancelToken: CancelToken = new CancelToken();

  private _subscription: Subscription;
  private _formChangeSubscription: Subscription;
  private _functionTypeSubscription: Subscription;
  private _hubCacheChangeSubscription: Subscription;

  constructor(private hubService: HubService,
    private authService: AuthService,
    public formsService: HubFormsService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location) {
  }

  ngOnInit() {
    try {
      this._subscription = combineLatest([
        this.route.data,
        this.route.params,
        this.hubService.getHubCacheObservable()]
      ).subscribe(result => {
        let data = result[0];
        this.params = result[1];
        this.hubCache = result[2];

        this.action = data['action'];
        this.pageTitle = data['pageTitle'];

        if (!this.hubCache || this.hubCache.status !== eCacheStatus.Loaded ) { return; }

        if (this.isLoaded && this.action === 'new') { return; }

        if (this.isLoaded && this.formsService.hasChanged) {
            this.authService.confirmDialog('Synchronization warning',
            'The hub was disconnected, meaning this edit could have been changed by another session.  Would you like to discard the current changes, and reload the latest version?')
            .then(confirm => {
                if (confirm) {
                    this.load();
                }
            }).catch(reason => {
                return;
            });
        } else {
            this.load();
        }

      });
    } catch (e) {
      this.hubService.addHubClientErrorMessage(e, 'Column Validation');
    }
  }

  ngOnDestroy() {
    if (this._hubCacheChangeSubscription) { this._hubCacheChangeSubscription.unsubscribe(); }
    if (this._subscription) { this._subscription.unsubscribe(); }
    if (this._formChangeSubscription) { this._formChangeSubscription.unsubscribe(); }
    if (this._functionTypeSubscription) { this._functionTypeSubscription.unsubscribe(); }
    this.cancelToken.cancel();
  }

  private load() {
    this.isLoaded = true;

    if (this.action === 'edit') {
      // get the hub key from the route data, and update the service.
      this.customFunctionKey = + this.params['customFunctionKey'];

      if (!this.customFunctionKey) {
        this.hubService.addHubErrorMessage('There was no custom function specified to edit.');
        // this.errorMessage = 'There was no validation specified to edit.';
      } else {
        if (!this.hubCache.hub || !this.hubCache.hub.dexihCustomFunctions) {
          this.hubService.addHubErrorMessage('The hub cache is not loaded.');
        } else {
          let customFunction = this.hubCache.hub.dexihCustomFunctions.find(c => c.key === this.customFunctionKey);
          this.formsService.customFunction(customFunction);
          this.functionType = this.formsService.currentForm.controls.functionType.value;
        }
      }
    }

    if (this.action === 'new') {
      let customFunction = new DexihCustomFunction();
      customFunction.key = this.hubCache.getNextSequence();
      this.formsService.customFunction(customFunction);

      // update the url with the saved key
      this._formChangeSubscription = this.formsService.getCurrentFormObservable().subscribe(form => {
        let key = form.controls.key.value;
        if (key >= 0) {
          if (history.pushState) {
            let newUrl = window.location.pathname.replace('/customFunction-new', `/customFunction-edit/${key}`)
            this.router.navigateByUrl(newUrl);
            this._formChangeSubscription.unsubscribe();
          }
        }
      });

      this.functionType = this.formsService.currentForm.controls.functionType.value;
    }

    this._functionTypeSubscription = this.formsService.currentForm.controls.functionType.valueChanges.subscribe(functionType => {
      this.functionType = functionType;
      if (this.functionType === eFunctionType.Condition
        || this.functionType === eFunctionType.JoinCondition || this.functionType === eFunctionType.Validate) {
        this.formsService.currentForm.controls.returnType.setValue(eTypeCode.Boolean);
        this.updateParameters();
      }
    });

    this.updateParameters();
  }

  canDeactivate(): Promise<boolean> {
    return new Promise<boolean>(resolve => {
      if (this.formsService.currentForm && !this.formsService.currentForm.pristine) {
        this.authService.confirmDialog('Function has changed',
        'The function has changed.  Would you like to discard the changes and return to the previous screen?'
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

  parametersArray(): FormArray {
    return <FormArray> this.formsService.currentForm.controls.dexihCustomFunctionParameters;
  }

  private updateParameters() {
    let parameters = this.parametersArray();
    this.inputParameters = parameters.controls.sort((a, b) => a.value.position - b.value.position)
      .filter(c => c.value.direction === eParameterDirection.Input);

  this.outputParameters = parameters.controls.sort((a, b) => a.value.position - b.value.position)
    .filter(c => c.value.direction === eParameterDirection.Output);

    this.inputParameterValues.length = this.inputParameters.length;
    this.outputParameterValues.length = this.outputParameters.length;
  }

  addParameter(parameter: FormGroup, direction: eParameterDirection) {
    try {
      let newParameter = new DexihCustomFunctionParameter();
      if (parameter) {
        let oldParameter = parameter.value;
        newParameter.dataType = oldParameter.dataType;
        newParameter.name = oldParameter.name;
        newParameter.position = oldParameter.position + 1;
      }

      newParameter.key = this.hubCache.getNextSequence();
      newParameter.name = '';
      newParameter.direction = direction;
      newParameter.rank = 0;
      newParameter.isValid = true;

      let parameters = this.parametersArray();
      let newParameterForm = this.formsService.customFunctionParametersFormGroup(newParameter);
      parameters.push(newParameterForm);

      // reset the positions
      parameters.controls.sort((a, b) => a.value.position - b.value.position).forEach((p, index) => {
        (<FormGroup>p).controls.position.setValue(index * 10);
      });

      this.updateParameters();
    } catch (e) {
      this.hubService.addHubClientErrorMessage(e, 'Edit Custom Function, add parameter');
    }

  }

  addParameterValue(index: number, valueIndex: number) {
    if (Array.isArray(this.inputParameterValues[index])) {
      this.inputParameterValues[index].splice(valueIndex + 1, 0, '');
    } else {
      this.inputParameterValues[index] = new Array(1);
    }
  }

  removeParameterValue(index: number, valueIndex: number) {
    this.inputParameterValues[index].splice(valueIndex, 1);
  }

  removeParameter(parameter: FormGroup) {
    try {
      let inputParameters = this.parametersArray();
      let index: number = inputParameters.controls.indexOf(parameter);
      if (index > -1) {
        inputParameters.removeAt(index);
      }

      this.updateParameters();

    } catch (e) {
      this.hubService.addHubClientErrorMessage(e, 'Edit Custom Function, remove parameter');
    }
  }

  downloadCode(parameters = null) {
    let tmpTransform = this.createDataTransformItem();

    this.hubService.downloadCustomFunction(tmpTransform, parameters);
  }

  test(parameters = null) {
    let tmpTransform = this.createDataTransformItem();

    this.hubService.testCustomFunction(tmpTransform, parameters, this.cancelToken).then(result => {
      this.syntaxMessage = new Message(true, 'The function has successfully compiled.', null, null);

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
    }).catch(reason => {
      let converted = reason;
      if (reason.stack) {
          converted = new Message(false, 'Client Error: ' + reason.message, reason.stack, '');
      }
      this.syntaxMessage = converted;
      this.returnParameterValue = null;
      this.outputParameterValues.forEach(c => c = null );
    });
  }

  createDataTransformItem(): DexihDatalinkTransformItem {
    let selectedCustomFunction: DexihCustomFunction = this.formsService.currentForm.value;

    let item = new DexihDatalinkTransformItem();
    item.functionCode = selectedCustomFunction.methodCode;
    item.functionResultCode = selectedCustomFunction.resultCode;
    item.transformItemType = eTransformItemType.CustomFunction;

    let parameters: DexihFunctionParameter[] = [];

      selectedCustomFunction.dexihCustomFunctionParameters.sort((a, b) => a.position - b.position)
        .forEach((param: DexihCustomFunctionParameter, index: number) => {
        if (param) {
          let newParameter = new DexihFunctionParameter();
          newParameter.key = 0;
          newParameter.datalinkTransformItemKey = 0;
          newParameter.name = param.name;
          newParameter.rank = param.rank;
          newParameter.direction = param.direction;
          newParameter.dataType = param.dataType;
          newParameter.position = index;
          newParameter.isValid = true;

          parameters.push(newParameter);
        }
      });

      let returnParam = new DexihFunctionParameter();
      returnParam.key = 0;
      returnParam.datalinkTransformItemKey = 0;
      returnParam.name = 'Return';
      returnParam.rank = 0;
      returnParam.direction = eParameterDirection.ReturnValue;
      returnParam.dataType = selectedCustomFunction.returnType;
      returnParam.position = 0;
      returnParam.isValid = true;
      parameters.push(returnParam);

      // item.returnType = selectedCustomFunction.returnType;
      item.dexihFunctionParameters = parameters;

      return item;

  }

  close() {
    this.authService.navigateUp();
  }

}
