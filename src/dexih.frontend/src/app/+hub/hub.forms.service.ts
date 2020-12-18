import { Injectable, OnDestroy, EventEmitter } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators, AsyncValidatorFn, ValidationErrors } from '@angular/forms';
import { BehaviorSubject, combineLatest, merge, Observable, pipe, Subscription} from 'rxjs';

import { AuthService } from '../+auth/auth.service';
import { eLogLevel, LogFactory } from '../../logging';
import { InputOutputColumns } from './hub.lineage.models';
import {
  HubCache,
  eMappingStatus,
  sharedObjectProperties,
  SharedObjectProperty,
  DexihInputParameter,
  DataCache,
} from './hub.models';
import { HubService } from './hub.service';
import { eImportAction, Import, DexihConnection, DexihTable, DexihTableColumn, eTypeCode,
   DexihFileFormat, DexihView, DexihDashboard, DexihDashboardItem, DexihApi, DexihColumnValidation,
   DexihCustomFunction, DexihCustomFunctionParameter, DexihHubVariable, DexihDatalinkTest,
   DexihDatalinkTestStep, DexihDatalinkTestTable, DexihTrigger, DexihDatalinkStep, DexihDatalinkDependency,
   DexihDatalinkStepColumn, DexihDatajob, DexihRemoteAgentHub, DexihDatalink, DexihDatalinkColumn,
   DexihDatalinkTransform, DexihDatalinkTransformItem, DexihFunctionParameter, DexihFunctionArrayParameter,
   DexihDatalinkProfile, DexihDatalinkTarget, DexihDatalinkTable,
   eSourceType, eSharedObjectType, DexihListOfValues, InputParameterBase,
   eDataObjectType, ListOfValuesItem, eTransformItemType, DexihTag, DexihTableIndex, DexihTableIndexColumn, ChartConfig, SelectQuery, AnimateConfig, InputColumn } from '../shared/shared.models';
import { debounceTime, delay, first } from 'rxjs/operators';

@Injectable()
export class HubFormsService implements OnDestroy {
  private hubCache: HubCache;

  private _hubCacheSubscription: Subscription;
  private _hubCacheChangeSubscription: Subscription;
  private _valueChangesSubscription: Subscription;

  private _connectionChangesSubscription1: Subscription;
  private _connectionChangesSubscription2: Subscription;
  private _connectionChangesSubscription3: Subscription;
  private _tableChangesSubscription1: Subscription;
  private _tableChangesSubscription2: Subscription;
  private _tableColumnChangesSubscription1: Subscription;
  private _tableColumnChangesSubscription2: Subscription;
  private _tableColumnChangesSubscription3: Subscription;
  private _datalinkChangesSubscription1: Subscription;
  private _datalinkChangesSubscription2: Subscription;
  private _datalinkChangesSubscription3: Subscription;
  private _datalinkTestChangesSubscription: Subscription;
  private _genericParameterSubscription: Subscription;
  private _datalinkTargetChanges: Subscription[] = [];
  private _parameterChanges: Subscription[] = [];

  public currentForm: FormGroup;
  private _currentFormObservable = new BehaviorSubject<FormGroup>(null);
  public formErrors: any = {};
  public hasChanged = false;
  public formSaving = false;
  public showAllErrors = false;
  public IgnoreFormChange = false;
  private ignoreHubCacheChange = false; // used to avoid recursive loop in the hubCacheChange subscription.
  private formChangeCount = 0;

  private updateDate: Date;

  private saveMethod: string;
  private property: SharedObjectProperty;
  private formGroupFunc: (item) => void
  private valueMethod: string;

  private logger = new LogFactory('hub.forms.service');

  validationMessages = {
    'required': 'A value is required.',
    'duplicateName': 'The value is already being used.',
    'dataType': 'The data types are inconsistent.',
    'invalidClass': 'The function method could not be found'
  };

  validationFieldMessages = {

  };

  constructor(
    private fb: FormBuilder,
    private hubService: HubService,
    private authService: AuthService,

  ) {
    this._hubCacheSubscription = this.hubService.getHubCacheObservable().subscribe(hubCache => {
      this.hubCache = hubCache
    });
  }

  ngOnDestroy() {
    this.clearFormSubscriptions();

    this.currentForm = null;
    this.updateDate = null;
    this.formErrors = {};
    this.hasChanged = false;
    this.formSaving = false;
    this.showAllErrors = false;
    this.IgnoreFormChange = false;
    // this.ignoreHubCacheChange = false; // used to avoid recursive loop in the hubCacheChange subscription.
    this.formChangeCount = 0;
  }

  clearFormSubscriptions() {
    this.logger.LogC(() => `clearFormSubscriptions started`, eLogLevel.Trace);
    if (this._valueChangesSubscription) { this._valueChangesSubscription.unsubscribe(); }
    // if (this._hubCacheSubscription) { this._hubCacheSubscription.unsubscribe(); }
    if (this._hubCacheChangeSubscription) { this._hubCacheChangeSubscription.unsubscribe(); }
    if (this._connectionChangesSubscription1) { this._connectionChangesSubscription1.unsubscribe(); }
    if (this._connectionChangesSubscription2) { this._connectionChangesSubscription2.unsubscribe(); }
    if (this._connectionChangesSubscription3) { this._connectionChangesSubscription3.unsubscribe(); }
    if (this._tableChangesSubscription1) { this._tableChangesSubscription1.unsubscribe(); }
    if (this._tableChangesSubscription2) { this._tableChangesSubscription2.unsubscribe(); }
    if (this._tableColumnChangesSubscription1) { this._tableColumnChangesSubscription1.unsubscribe(); }
    if (this._tableColumnChangesSubscription2) { this._tableColumnChangesSubscription2.unsubscribe(); }
    if (this._tableColumnChangesSubscription3) { this._tableColumnChangesSubscription3.unsubscribe(); }
    if (this._datalinkChangesSubscription1) { this._datalinkChangesSubscription1.unsubscribe(); }
    if (this._datalinkChangesSubscription2) { this._datalinkChangesSubscription2.unsubscribe(); }
    if (this._datalinkChangesSubscription3) { this._datalinkChangesSubscription3.unsubscribe(); }
    if (this._datalinkTestChangesSubscription) { this._datalinkTestChangesSubscription.unsubscribe(); }
    if (this._genericParameterSubscription) { this._genericParameterSubscription.unsubscribe(); }
    this._datalinkTargetChanges.forEach(c => c.unsubscribe());
    this._datalinkTargetChanges = [];
    this._parameterChanges.forEach(c => c.unsubscribe());
    this._parameterChanges = [];
  }

  private addMissing(item: any, form: FormGroup, itemTemplate: any, excludeKeys: string[] = []) {
    if (!item) { return; }

    let keys = Object.keys(itemTemplate);
    let existingKeys = Object.keys(form.controls);
    keys.forEach(key => {
      if ((excludeKeys.findIndex(c => c === key) === -1)
        && existingKeys.findIndex(c => c === key) === -1) {
        let control = new FormControl(key);
        let value = item[key];
        if (typeof value === 'undefined') {
          value = null;
        }
        control.setValue(value);
        form.addControl(key, control);
      }
    });

    this.updateDate = item['updateDate'];  
  }

  public startForm(form: FormGroup) {
    this.logger.LogC(() => `startForm started`, eLogLevel.Trace);

    if (form) {
      if (this._valueChangesSubscription) { this._valueChangesSubscription.unsubscribe(); }
      this._valueChangesSubscription = form.valueChanges.subscribe(data => {
        this.onValueChanged()
      });

      this.onValueChanged(); // (re)set validation messages now
    }

    this.currentForm = form;
    this._currentFormObservable.next(form);

    this.hasChanged = false;

    this.logger.LogC(() => `startForm finished`, eLogLevel.Trace);
  }

  public getCurrentFormObservable(): Observable<FormGroup> {
    return this._currentFormObservable.asObservable();
  }

  // re-create any error messages whenever the form changes.
  private onValueChanged() {
    if (this.IgnoreFormChange === false) {

      this.logger.LogC(() => `onValueChanged started.  Counter = ${this.formChangeCount++}`, eLogLevel.Trace);

      if (!this.currentForm || !this.currentForm.value) { return; }
      const form = this.currentForm;

      this.hasChanged = true;
      this.formErrors = this.getFormErrorMessages(form, this.showAllErrors);

      this.logger.LogC(() => `onValueChanged completed`, eLogLevel.Trace);
    }
  }

  public markAsChanged() {
    if (!this.currentForm || !this.currentForm.value) { return; }

    this.hasChanged = true;
    this.currentForm.markAsDirty();
  }

  public showErrors() {
    this.showAllErrors = true;
    this.onValueChanged();
  }

  // returns an object containing any error message for controls contained within the specified form.
  public getFormErrorMessages(form: FormGroup, showAllErrors: boolean): {} {
    let formErrors = {};

    if (!form.controls) { return ''; }

    for (const field of Object.keys(form.controls)) {
      // clear previous error message (if any)
      formErrors[field] = '';
      const control = form.get(field);

      // if the control is dirty or flag is set to show all errors.
      if (control && (control.dirty || showAllErrors)) {
        if (!control.valid) {
          if (control instanceof FormArray) {

          } else {
            const messages = this.validationFieldMessages[field];
            if (control && control.errors) {
              for (const key of Object.keys(control.errors)) {
                if (messages && messages[key]) {
                  formErrors[field] += messages[key] + ' ';
                } else if (this.validationMessages[key]) {
                  formErrors[field] += this.validationMessages[key] + ' ';
                } else {
                  let message = this.createErrorMessage(key, control);
                  formErrors[field] += message + ' ';
                }
              }
            }
          }
        }
      }
    }

    return formErrors;
  }

  public getErrorMessage(control: AbstractControl): string {
    if (control && control.errors) {
      let errorMessage = '';

      for (const key of Object.keys(control.errors)) {
        if (this.validationMessages[key]) {
          errorMessage += this.validationMessages[key] + ' ';
        } else {
          errorMessage = this.createErrorMessage(key, control);
        }
      }
      return errorMessage;
    } else {
      return '';
    }
  }

  private createErrorMessage(key: string, control: AbstractControl): string {
    let message = '';
    switch (key) {
      case 'minlength':
        message = 'Value is ' +
          control.errors.minlength.actualLength +
          ' characters long, required minimum length is '
          + control.errors.minlength.requiredLength + ' characters.';
        break;
      case 'maxlength':
        message = 'Value is ' +
          control.errors.maxlength.actualLength +
          ' characters long, required maximum length is '
          + control.errors.maxlength.requiredLength + ' characters.';
        break;
      case 'maxvalue':
        message = 'Value is ' +
          control.value +
          ' required maximum is '
          + control.errors.maxvalue.required + '.';
        break;
      case 'minvalue':
        message = 'Value is ' +
          control.value +
          ' required minimum is '
          + control.errors.minvalue.required + '.';
        break;
      default:
        message = 'Field error: ' + key;
    }
    return message;

  }

  watchChanges(changeClass: eSharedObjectType, keyField: string, description: string, formGroupFunc: (item) => void) {
    if (this._hubCacheChangeSubscription) { this._hubCacheChangeSubscription.unsubscribe(); }
    // if (this._hubCacheSubscription) { this._hubCacheSubscription.unsubscribe(); }

    if (this.formSaving) {
      return;
    }

    // watch the current form in case it is changed in another session.
    this._hubCacheChangeSubscription = this.hubService.getHubCacheChangeObservable().subscribe(hubCacheChange => {
      if (!this.ignoreHubCacheChange) {
        this.ignoreHubCacheChange = true;
        if (hubCacheChange.changeClass === changeClass &&
          hubCacheChange.data && hubCacheChange.data[keyField] === this.currentForm.value[keyField]) {
          switch (hubCacheChange.changeType) {
            case eImportAction.Replace:
              if (this.currentForm.pristine) {
                let item = Object.assign({}, hubCacheChange.data);
                formGroupFunc.call(this, item);
              } else {
                this.authService.confirmDialog('The ' + description + ' has changed',
                  'Another session has updated this ' +
                  description + ', would you like to discard any changes in this session and update with the new version?')
                  .then(confirm => {
                    if (confirm) {
                      let item = Object.assign({}, hubCacheChange.data);
                      this.ngOnDestroy() // clear old subscriptions
                      formGroupFunc.call(this, item);
                    }
                  }).catch(() => {

                  });
              }
              break;
            case eImportAction.Delete:
              this.authService.confirmDialog('The ' + description + ' has been deleted',
                'Another session has deleted this ' + description + ', would you like to discard current changes?')
                .then(confirm => {
                  if (confirm) {
                    this.authService.navigateUp();
                  }
                }).catch(() => {

              });
          }
        }
        this.ignoreHubCacheChange = false;
      }
    });

    // this._hubCacheSubscription = this.hubService.getHubCacheObservable().subscribe(hubCache => {
    //   if (!this.currentForm) { return; }

    //   this.hubCache = hubCache;

    //   let item = hubCache.getCacheItem(changeClass, this.currentForm.value[keyField]);

    //   if (item) {
    //     // if the version from the cache was updated more recently than current version, prompt user.
    //     if (this.updateDate && this.updateDate < item.updateDate) {
    //       this.authService.confirmDialog('The ' + description + ' has changed',
    //         'This is likely due to a another session changing the ' +
    //         description + ' whilst this session was disconnected.  ' +
//         'Would you like to discard the changes and reload the newer version from the server (otherwise this will be created a a copy)?')
    //         .then(confirm => {
    //           if (confirm) {
    //             let newItem = Object.assign({}, item);
    //             this.ngOnDestroy() // clear old subscriptions
    //             formGroupFunc.call(this, newItem);
    //           }
    //         }).catch(reason => {
    //           this.currentForm.controls[keyField].setValue(0);
    //         });
    //     }
    //   }
    // });
  }

  public async save(navigateUp = false, saveAs = false) {
    try {
      if (!saveAs && (this.formSaving || !this.hasChanged)) {
        return;
      }

      // if (!this.currentForm.valid) {
      //   this.showAllErrors = true;
      //   this.onValueChanged();

      //   let confirm = await this.authService.confirmDialog('There are errors!',
      //     'There are errors in the current form.  Confirm that would like to save the changes anyhow?');
      //   if (!confirm) {
      //     return;
      //   }
      // }

      this.formSaving = true;

      let value;
      if (this.valueMethod) {
        value = this[this.valueMethod]()
      } else {
        value = this.currentForm.getRawValue();
      }

      if (saveAs) {
        let name = value.name;
        while (this.hubCache.hub[this.property.cacheProperty].find(c => c.name === name)) {
          name = await this.authService.promptDialog('Specify a new name',
            // tslint:disable-next-line:max-line-length
            `The name ${name} already exists.  Specify a new name for the ${this.property.displayName} and then select ok to save this as a copy.`,
            '', name + ' 2');

          if (!name) {
            return;
          }
        }

        value.name = name;
        value.key = 0;
      }

      this.ignoreHubCacheChange = true;

      const currentStatus =  value.currentStatus;
      const entityStatus = value.entityStatus;
      const previousStatus = value.previousStatus;
      const runTime = value.runTime;

      // remove status as they will not parse into json.
      value.currentStatus = null;
      value.entityStatus = null;
      value.previousStatus = null;
      value.runTime = null;

      let result = await this.authService.post('/api/Hub/' + this.saveMethod, {
        hubKey: this.hubCache.hub.hubKey,
        value: value
      }, 'Saving...');

      let import1 = new Import();
      import1[this.property.property] = [{ importAction: eImportAction.New, item: result }];
      this.hubService.updateHubChange(import1);

      if (this.formGroupFunc) {
        // this.ignoreHubCacheChange = true;
        this.formGroupFunc(result);

        if (this.currentForm.controls.currentStatus) { this.currentForm.controls.currentStatus.setValue(currentStatus); }
        if (this.currentForm.controls.entityStatus) { this.currentForm.controls.entityStatus.setValue(entityStatus); }
        if (this.currentForm.controls.previousStatus) { this.currentForm.controls.previousStatus.setValue(previousStatus); }
        if (this.currentForm.controls.runTime) { this.currentForm.controls.runTime.setValue(runTime); }
        this.ignoreHubCacheChange = false;
      }

      this.formSaving = false;
      this.hasChanged = false;

      if (navigateUp) {
        this.authService.navigateUp();
      } else {
        this.hubService.addHubSuccessMessage('The save operation completed.');
      }
    } catch (error) {
      if (error) {
        this.hubService.addHubMessage(error);
        this.currentForm.markAsDirty();
      }
    } finally {
      this.formSaving = false;
    }
  }

  public saveLocal() {
    let value;
    if (this.valueMethod) {
      value = this[this.valueMethod]()
    } else {
      value = this.currentForm.getRawValue();
    }

    const cache = this.hubCache;
    const hub = this.hubService.createHub(this.hubCache.hub.hubKey, '');

    if (this.property.cacheGetMethod) {
      cache[this.property.cacheGetMethod](value, hub);
    }

    hub[this.property.cacheProperty].push(value);
    let filename = this.property.displayName + '-' + value.name + '.json';
    this.hubService.exportHub(hub, filename);
  }

  cancel() {
    if (!this.formSaving) {
      this.authService.navigateUp();
    }
  }

  public getFormErrors(): string {
    return this.getFormErrorsRecursive(this.currentForm, 0, 0);
  }

  private getFormErrorsRecursive(form: FormGroup, depth: number, index: number): string {
    let message = '';

    for (const field of Object.keys(form.controls)) {
      const control = form.get(field);

      // if the control is dirty or flag is set to show all errors.
      if (control && !control.valid) {
        message += ' '.repeat(depth * 3) + `The control ${field} at position ${index} has the following error(s):<p></p>`;
        if (control instanceof FormArray) {
          const formArray = <FormArray>control;
          formArray.controls.forEach((cont, formIndex) => {
            message += this.getFormErrorsRecursive(<FormGroup>cont, depth + 1, formIndex);
          });
        } else if (control instanceof FormGroup) {
          message += this.getFormErrorsRecursive(<FormGroup>control, depth + 1, 0);
        } else {
          for (const key of Object.keys(control.errors)) {
            message += ' '.repeat(depth * 3 + 1) + key + ':' + this.createErrorMessage(key, control) + '<p></p>';
          }
        }
      }
    }

    return message;
  }

  private stringCompare(value1: string, value2: string): boolean {
    if (!value1 && !value2) {
      return true;
    }
    if (!value1 || !value2) {
      return false;
    }

    return value1.trim().toLowerCase() === value2.trim().toLowerCase();
  }

  public parameter(parameter: InputParameterBase): FormGroup {
    let runTime = {showRefresh: parameter.listOfValuesKey > 0, isRefreshing: false, items: []};
    if (parameter.value) {
      if (parameter.rank === 0 && parameter.listOfValuesKey > 0) {
        runTime.items = [{key: parameter.value, name: parameter.valueDesc}];
      }
    }

    const form = this.fb.group({
      'name': [{value: parameter.name, disabled: parameter['datalinkParameterKey'] > 0 }, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50),
      ]],
      'runTime': [runTime],
      'datalinkParameterKey': parameter['datalinkParameterKey'] // used specifically for view
    }
    );

    this.addMissing(parameter, form, new InputParameterBase());

    let subscription = form.controls.listOfValuesKey.valueChanges.subscribe(() => {
        form.controls.runTime.setValue({showRefresh: form.controls.listOfValuesKey.value > 0, isRefreshing: false, items: []});
    });
    this._parameterChanges.push(subscription);

    let subscription2 = form.controls.rank.valueChanges.subscribe(rank => {
      let value = form.controls.value.value;
        if (rank === 0) {
          if (value && Array.isArray(value)) {
            if (value.length === 0) {
              form.controls.value.setValue(null);
              form.controls.valueDesc.setValue(value[0]);
            } else {
              form.controls.value.setValue(value[0]);
              form.controls.valueDesc.setValue(value[0]);
            }
          }
        }

        if (rank === 1) {
          if (value && !Array.isArray(value)) {
            form.controls.value.setValue(null);
          }
        }
      });
    this._parameterChanges.push(subscription2);

    return form;
  }

  public connection(connection: DexihConnection) {
    this.logger.LogC(() => `connection`, eLogLevel.Trace);

    const connectionForm = this.fb.group({
      'name': [connection.name, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
        this.duplicateConnectionNameValidator()
      ]],
      'connectionStringDisplay': [connection.connectionString ? '(Connection string hidden)' : '', [
      ]],
      'passwordDisplay': [connection.password ? '**************************' : '', [
      ]],
      'connectionStringRaw': ['', [
      ]],
      'passwordRaw': ['', [
      ]],
    }, { validators: [this.requiredConnectionFields()] }
    );

    this.property = sharedObjectProperties.find(c => c.type === eSharedObjectType.Connection);
    this.saveMethod = 'SaveConnection';
    this.formGroupFunc = this.connection;
    this.addMissing(connection, connectionForm, new DexihConnection());

    this.clearFormSubscriptions();

    // whenever the passwordDisplay or connectionStringDisplay changes, write the value to the raw
    // this allows encrypted values to be loaded, then overwritten when use changes.
    if (this._connectionChangesSubscription1) { this._connectionChangesSubscription1.unsubscribe(); }
    this._connectionChangesSubscription1 = connectionForm.controls.passwordDisplay.valueChanges.subscribe(value => {
      connectionForm.controls.passwordRaw.setValue(value);
    });

    if (this._connectionChangesSubscription2) { this._connectionChangesSubscription2.unsubscribe(); }
    this._connectionChangesSubscription2 = connectionForm.controls.connectionStringDisplay.valueChanges.subscribe(value => {
      connectionForm.controls.connectionStringRaw.setValue(value);
    });

    this.startForm(connectionForm);
    this.watchChanges(eSharedObjectType.Connection, 'key', 'Connection', this.connection);

    this.logger.LogC(() => `connection finished`, eLogLevel.Trace);
  }

  private duplicateConnectionNameValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (this.currentForm) {
        const name = control.value;
        const no = this.hubCache.hub.dexihConnections.findIndex(c =>
          c.key !== this.currentForm.value.key && c.isValid && this.stringCompare(c.name, name)) >= 0;
        return no ? { 'duplicateName': { name } } : null;
      }
    };
  }

  requiredConnectionFields(): ValidatorFn {
    return (group: FormGroup): { [key: string]: any } => {
      if (this.currentForm) {
        const useConnectionString = group.controls['useConnectionString'];
        const connectionStringDisplay = group.controls['connectionStringDisplay'];
        const server = group.controls['server'];

        if (!useConnectionString || !connectionStringDisplay || !server) {
          return;
        }

        connectionStringDisplay.setErrors(null);
        server.setErrors(null);

        // if use connection string is selected, connectionString is required.
        if (useConnectionString.value && !connectionStringDisplay.value) {
          connectionStringDisplay.setErrors({ 'required': true });
        }

        // use not connection string, server is required.
        if (!useConnectionString.value) {
          if (!server.value) {
            server.setErrors({ 'required': true });
          }
        }
        return;
      }
    };
  }

  public table(table: DexihTable) {
    this.clearFormSubscriptions();
    const tableForm = this.tableForm(table);

    this.formGroupFunc = this.table;
    this.property = sharedObjectProperties.find(c => c.type === eSharedObjectType.Table);
    this.saveMethod = 'SaveTable';
    this.watchChanges(eSharedObjectType.Table, 'tableKey', 'table', this.table);
    this.startForm(tableForm);
  }

  public tableIndex(table: DexihTable, index: DexihTableIndex): FormGroup {
    return this.fb.group({
      'name': [index.name, [
        Validators.required,
        Validators.maxLength(250),
        this.duplicateIndexNameValidator(table.dexihTableIndexes)
      ]],
        'columns': this.fb.array(
          index.columns.map(ic => {
            return this.tableIndexColumn(ic);
          })
        )
    });
  }

  public tableIndexColumn(ic: DexihTableIndexColumn): FormGroup {
      return this.fb.group({
        'columnKey': [ic.columnKey, []],
        'direction': [ic.direction, []],
      });
  }

  public tableForm(table: DexihTable): FormGroup {

    const indexes = table.dexihTableIndexes.filter(c => c.isValid).map(index => this.tableIndex(table, index));

    const tableForm = this.fb.group({
      'name': [table.name, [
        Validators.required,
        Validators.maxLength(250),
        this.duplicateTableNameValidator()
      ]],
      'connectionKey': [table.connectionKey, [
        Validators.required
      ]],
      'logicalName': [table.logicalName, [
        Validators.required,
        Validators.maxLength(250)
      ]],
      'useLogical': [this.hubCache.defaultTableLogicalName(table.schema, table.name) !== table.logicalName, [
      ]],
      'dexihTableColumns': this.fb.array([]),
      'dexihTableIndexes': this.fb.array(indexes),
    }, { validator: this.requiredTableFields() }
    );

    let tableColumnsForm = <FormArray>tableForm.controls.dexihTableColumns;
    table.dexihTableColumns.filter(c => c.isValid).forEach(column => {
      tableColumnsForm.push(this.tableColumn(tableColumnsForm.value, column));
    });

    if (this._tableChangesSubscription1) { this._tableChangesSubscription1.unsubscribe(); }
    this._tableChangesSubscription1 = tableForm.controls.useLogical.valueChanges.subscribe(() => {
      if (!tableForm.controls.useLogical.value) {
        tableForm.controls.logicalName.setValue(
          this.hubCache.defaultTableLogicalName(tableForm.controls.schema.value, tableForm.controls.name.value));
      }
    });

    if (this._tableChangesSubscription2) { this._tableChangesSubscription2.unsubscribe(); }
    this._tableChangesSubscription2 = tableForm.controls.name.valueChanges.subscribe(() => {
      if (!tableForm.controls.useLogical.value) {
        tableForm.controls.logicalName.setValue(
          this.hubCache.defaultTableLogicalName(tableForm.controls.schema.value, tableForm.controls.name.value));
      }
    });

    this.addMissing(table, tableForm, new DexihTable());

    return tableForm;
  }

  private duplicateIndexNameValidator(indexes: DexihTableIndex[]): ValidatorFn {
    // validate no matching tables names in the same connection.
    return (control: AbstractControl): { [key: string]: any } => {
      if (this.currentForm) {
        const name = control.value;

        const no = indexes
        .find(c => c.key !== this.currentForm.controls.key.value &&
            c.isValid && this.stringCompare(c.name, name));
          return no ? { 'duplicateName': { name } } : null;
      }
    };
  }

  private duplicateTableNameValidator(): ValidatorFn {
    // validate no matching tables names in the same connection.
    return (control: AbstractControl): { [key: string]: any } => {
      if (this.currentForm) {
        const name = control.value;

        const no = this.hubCache.hub.dexihTables
        .find(c => c.key !== this.currentForm.controls.key.value &&
            c.isValid && this.stringCompare(c.name, name) && c.connectionKey === this.currentForm.value.connectionKey);
          return no ? { 'duplicateName': { name } } : null;
      }
    };
  }

  requiredTableFields(): ValidatorFn {
    return (group: FormGroup): { [key: string]: any } => {
      if (this.currentForm) {
        const useConnectionString = group.controls['useConnectionString'];
        const connectionStringDisplay = group.controls['connectionStringDisplay'];
        const server = group.controls['server'];

        if (!useConnectionString || !connectionStringDisplay || !server) {
          return;
        }

        connectionStringDisplay.setErrors(null);
        server.setErrors(null);

        // if use connection string is selected, connectionString is required.
        if (useConnectionString.value && !connectionStringDisplay.value) {
          connectionStringDisplay.setErrors({ 'required': true });
        }

        // use not connection string, server is required.
        if (!useConnectionString.value) {
          if (!server.value) {
            server.setErrors({ 'required': true });
          }
        }
        return;
      }
    };
  }


  tableColumn(siblingColumns: DexihTableColumn[], column: DexihTableColumn): FormGroup {
    let childColumns = column.childColumns ? column.childColumns : [];
    let columnForm = this.fb.group({
      'name': [column.name, [
        Validators.required,
        Validators.maxLength(250),
        this.duplicateTableColumnNameValidator(siblingColumns)
      ]],
      'logicalName': [column.logicalName, [
        Validators.required,
        Validators.maxLength(250)
      ]],
      'precision': [column.precision, [
        this.columnMinRangeValidator(0),
        this.columnMaxRangeValidator(30),
      ]],
      'scale': [column.scale, [
        this.columnMinRangeValidator(0),
        this.columnMaxRangeValidator(30),
      ]],
      'useLogical': [column.name !== column.logicalName, [
      ]],
      'isString': [column.dataType === eTypeCode.String || column.dataType === eTypeCode.CharArray ? true : false, [
      ]],
      'isNumber': [column.dataType === eTypeCode.Double || column.dataType === eTypeCode.Decimal ||
        column.dataType === eTypeCode.Single ? true : false, [
      ]],
      'childColumns': this.fb.array(childColumns.filter(c => c.isValid).map(col => {
        return this.tableColumn(childColumns, col);
      })),
      'runTime': {impact: eMappingStatus, lineage: eMappingStatus}
    }
    );

    this.addMissing(column, columnForm, new DexihTableColumn());

    // update isString and isNumber properties automatically when dataType changes.
    if (this._tableColumnChangesSubscription1) { this._tableColumnChangesSubscription1.unsubscribe(); }
    this._tableColumnChangesSubscription1 = columnForm.controls.dataType.valueChanges.subscribe(dataType => {
      if (dataType === eTypeCode.String || dataType === eTypeCode.CharArray) {
        columnForm.controls.isString.setValue(true);
      } else {
        columnForm.controls.isString.setValue(false);
      }

      if (dataType === eTypeCode.Double || dataType === eTypeCode.Decimal || dataType === eTypeCode.Single) {
        columnForm.controls.isNumber.setValue(true);
      } else {
        columnForm.controls.isNumber.setValue(false);
      }
    });

    // match logical name, unless the logical name is changed.
    if (this._tableColumnChangesSubscription2) { this._tableColumnChangesSubscription2.unsubscribe(); }
    this._tableColumnChangesSubscription2 = columnForm.controls.useLogical.valueChanges.subscribe(() => {
      if (!columnForm.controls.useLogical.value) {
        columnForm.controls.logicalName.setValue(columnForm.controls.name.value);
      }
    });

    if (this._tableColumnChangesSubscription3) { this._tableColumnChangesSubscription3.unsubscribe(); }
    this._tableColumnChangesSubscription3 = columnForm.controls.name.valueChanges.subscribe(() => {
      if (!columnForm.controls.useLogical.value) {
        columnForm.controls.logicalName.setValue(columnForm.controls.name.value);
      }
    });

    for (const field of Object.keys(columnForm.controls)) {
      let control = columnForm.controls[field];
      if (control.validator) {
        columnForm.controls[field].updateValueAndValidity();
      }
    }
    return columnForm;
  }

  private duplicateTableColumnNameValidator(columnsArray: DexihTableColumn[]): ValidatorFn {
    if (!columnsArray) { return null; }

    // validate no matching tables names in the same connection.
    return (control: AbstractControl): { [key: string]: any } => {
      if (this.currentForm) {
        const name = control.value;
        if (control.parent) {
          const key = control.parent.value.key;
          const columnGroup = control.parent.value.columnGroup;
          if (columnsArray) {
            const no = columnsArray.findIndex(c =>
              c.key !== key &&
              c.columnGroup === columnGroup &&
              c.isValid &&
              this.stringCompare(c.name, name)) >= 0;
            return no ? { 'duplicateName': { name } } : null;
          }
        }
      }
    };
  }

  private requiredNotZero(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      const name = control.value;
      const value = control.value;
      const no = !value || value === 0;
      return no ? { 'required': { name } } : null;
    }
  }

  private columnMinRangeValidator(min: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      const name = control.value;
      const column = <FormGroup>control.parent;
      if (column) {
        if (column.controls.isNumber.value) {
          const value = control.value;
          const no = Number(value) >= min;
          return no ? null : { 'minvalue': { name, required: min }};
        } else {
          return;
        }
      }
    };
  }

  private columnMaxRangeValidator(max: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      const name = control.value;
      const column = <FormGroup>control.parent;
      if (column) {
        if (column.controls.isNumber.value) {
          const value = control.value;
          const no = Number(value) <= max;
          return no ? null : { 'maxvalue': { name , required: max } };
        } else {
          return;
        }
      }
    };
  }

  public fileFormat(fileFormat: DexihFileFormat) {
    const fileFormatForm = this.fb.group({
      'name': [fileFormat.name, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
        this.duplicateFileFormatNameValidator()
      ]],
      'quote': [fileFormat.quote, [
        Validators.maxLength(1)
      ]],
    }
    );

    this.formGroupFunc = this.fileFormat;
    this.property = sharedObjectProperties.find(c => c.type === eSharedObjectType.FileFormat);
    this.saveMethod = 'SaveFileFormat';
    this.addMissing(fileFormat, fileFormatForm, new DexihFileFormat());
    this.clearFormSubscriptions();
    this.watchChanges(eSharedObjectType.FileFormat, 'fileFormatKey', 'file format', this.fileFormat);
    this.startForm(fileFormatForm);
  }

  duplicateFileFormatNameValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (this.currentForm) {
        const name = control.value;
        const no = this.hubCache.hub.dexihFileFormats.findIndex(c =>
          c.key !== this.currentForm.controls.key.value && c.isValid && this.stringCompare(c.name, name)) >= 0;
        return no ? { 'duplicateName': { name } } : null;
      }
    };
  }

  public inputValue(inputValue: InputColumn): FormGroup {
    return this.fb.group({
      'name': [inputValue.name],
      'logicalName': [inputValue.logicalName],
      'value': [inputValue.value],
      'rank': [inputValue.rank],
      'dataType': [inputValue.dataType],
      'defaultValue': [inputValue.defaultValue]
    });
  }

  public view(view: DexihView) {

    this.clearFormSubscriptions();

    let parameters = view.parameters.filter(c => c.isValid).map(parameter => {
      return this.parameter(parameter);
    });

    let inputColumns = view.inputValues.map(c => this.inputValue(c));

    const viewForm = this.fb.group({
      'name': [view.name, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
        this.duplicateViewNameValidator()
      ]],
      'sourceType': [view.sourceType, [
        Validators.required,
      ]],
      'sourceDatalinkKey': [view.sourceDatalinkKey],
      'sourceTableKey': [view.sourceTableKey],
      'parameters': this.fb.array(parameters),
      'inputValues': this.fb.array(inputColumns),
      'chartConfig': [view.chartConfig ?? new ChartConfig()],
      'selectQuery': [view.selectQuery ?? new SelectQuery()],
      'animateConfig': [view.animateConfig ?? new AnimateConfig()],

    }, { validator: this.validateViewSource() }
    );

    this.formGroupFunc = this.view;
    this.property = sharedObjectProperties.find(c => c.type === eSharedObjectType.View);
    this.saveMethod = 'SaveView';
    this.addMissing(view, viewForm, new DexihView());
    this.watchChanges(eSharedObjectType.View, 'viewKey', 'view', this.view);
    this.startForm(viewForm);
  }

  duplicateViewNameValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (this.currentForm) {
        const name = control.value;
        const no = this.hubCache.hub.dexihViews.findIndex(c =>
          c.key !== this.currentForm.controls.key.value && c.isValid && this.stringCompare(c.name, name)) >= 0;
        return no ? { 'duplicateName': { name } } : null;
      }
    };
  }

  private validateViewSource() {
    return (group: FormGroup) => {
      let sourceType = group.get('sourceType').value;
      let sourceTableKey = group.get('sourceTableKey');
      let sourceDatalinkKey = group.get('sourceDatalinkKey');

      sourceTableKey.setErrors(null);
      sourceDatalinkKey.setErrors(null);

      if (sourceType === eDataObjectType.Table) {
        if (!sourceTableKey.value) {
          return sourceTableKey.setErrors({ required: true });
        }
      } else if (sourceType === eDataObjectType.Datalink) {
        if (!sourceDatalinkKey.value) {
          return sourceDatalinkKey.setErrors({ required: true });
        }
      }
    };
  }

  public dashboard(dashboard: DexihDashboard) {
    this.clearFormSubscriptions();

    let parameters = dashboard.parameters.filter(c => c.isValid).map(parameter => {
      return this.parameter(parameter);
    });


    const form = this.fb.group({
      'name': [dashboard.name, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
        this.duplicateDashboardNameValidator()
      ]],
      'dexihDashboardItems': this.fb.array([]),
      'parameters': this.fb.array(parameters),
      'runTime': {showEdit: false, lock: true},
    }, { }
    );

    let dashboardItemsForm = <FormArray>form.controls.dexihDashboardItems;
    dashboard.dexihDashboardItems.filter(c => c.isValid).forEach(item => {
      dashboardItemsForm.push(this.dashboardItem(item));
    });

    this.formGroupFunc = this.dashboard;
    this.property = sharedObjectProperties.find(c => c.type === eSharedObjectType.Dashboard);
    this.saveMethod = 'SaveDashboard';
    this.addMissing(dashboard, form, new DexihDashboard());
    this.watchChanges(eSharedObjectType.Dashboard, 'dashboardKey', 'dashboard', this.dashboard);
    this.startForm(form);
  }

  duplicateDashboardNameValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (this.currentForm) {
        const name = control.value;
        const no = this.hubCache.hub.dexihDashboards.findIndex(c =>
          c.key !== this.currentForm.controls.key.value && c.isValid && this.stringCompare(c.name, name)) >= 0;
        return no ? { 'duplicateName': { name } } : null;
      }
    };
  }

  public dashboardItem(dashboardItem: DexihDashboardItem): FormGroup {
    let parameters = dashboardItem.parameters.filter(c => c.isValid).map(parameter => {
      return this.parameter(parameter);
    });

    const form = this.fb.group({
      'name': [dashboardItem.name, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ]],
      'parameters': this.fb.array(parameters),
      'runTime': {resizeEvent: new EventEmitter<any[]>(), data: new DataCache()},
    }
    );

    this.addMissing(dashboardItem, form, new DexihDashboardItem());

    return form;
  }

  // updates the parameters when a new dashboard item is created.
  public updateDashboardItemView(item: FormGroup) {
    let views = this.hubCache.hub.dexihViews;
    if (views && item.controls.viewKey.value) {
        let view = this.hubCache.hub.dexihViews.find(c => c.key === item.controls.viewKey.value);
        if (this.view) {
            item.controls.name.setValue(this.view.name);
            item.controls.runTime.value.data = new DataCache();

            // reset parameters.
            let formParameters = <FormArray> item.controls.parameters;
            let currentParameters = <DexihInputParameter[]> formParameters.value;

            formParameters.clear();

            let parameters = <InputParameterBase[]> view.parameters;
            // if (view.sourceType === eDataObjectType.Datalink) {
            //     let datalink = this.hubCache.hub.dexihDatalinks.find(c => c.key === view.sourceDatalinkKey);
            //     if (datalink && datalink.parameters) {
            //         parameters = parameters.concat(datalink.parameters);
            //     }
            // }

            parameters.forEach(parameter => {
                let currentParameter = currentParameters.find( c => c.name === parameter.name);
                let newParameter = new InputParameterBase();
                if (currentParameter) {
                    newParameter.name = currentParameter.name;
                    newParameter.value = currentParameter.value;
                  //  newParameter.listOfValuesKey = currentParameter.listOfValuesKey;
                } else {
                    newParameter.name = parameter.name;
                    newParameter.value = parameter.value;
                    newParameter.listOfValuesKey = parameter.listOfValuesKey;
                }
                let newFormParameter = this.parameter(newParameter);
                formParameters.push(newFormParameter);
            });
        }
    }
}

  public listOfValuesItem(item: ListOfValuesItem) {
    const form = this.fb.group({
      'key': [item.key, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50),
      ]],
    }
    );

    this.addMissing(item, form, new ListOfValuesItem());

    return form;
  }

  public listOfValues(listOfValues: DexihListOfValues) {

    let staticData: FormGroup[]
    if (listOfValues.staticData) {
      staticData = listOfValues.staticData.map(item => {
        return this.listOfValuesItem(item);
      });
    } else {
      staticData = [];
    }

    const lovForm = this.fb.group({
      'name': [listOfValues.name, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
        this.duplicateLovNameValidator()
      ]],
      'sourceType': [listOfValues.sourceType, [
        Validators.required,
      ]],
      'sourceDatalinkKey': [listOfValues.sourceDatalinkKey],
      'sourceTableKey': [listOfValues.sourceTableKey],
      'staticData': this.fb.array(staticData),
    }, { validator: this.validateViewSource() }
    );

    this.formGroupFunc = this.listOfValues;
    this.property = sharedObjectProperties.find(c => c.type === eSharedObjectType.ListOfValues);
    this.saveMethod = 'SaveListOfValues';
    this.addMissing(listOfValues, lovForm, new DexihListOfValues());
    this.clearFormSubscriptions();
    this.watchChanges(eSharedObjectType.ListOfValues, 'listOfValuesKey', 'listOfValues', this.listOfValues);
    this.startForm(lovForm);
  }

  duplicateLovNameValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (this.currentForm) {
        const name = control.value;
        const no = this.hubCache.hub.dexihListOfValues.findIndex(c =>
          c.key !== this.currentForm.controls.key.value && c.isValid && this.stringCompare(c.name, name)) >= 0;
        return no ? { 'duplicateName': { name } } : null;
      }
    };
  }

  public api(api: DexihApi) {
    this.clearFormSubscriptions();

    let parameters = api.parameters.filter(c => c.isValid).map(parameter => {
      return this.parameter(parameter);
    });

    const apiForm = this.fb.group({
      'name': [api.name, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
      ]],
      'sourceType': [api.sourceType, [
        Validators.required,
      ]],
      'sourceDatalinkKey': [api.sourceDatalinkKey],
      'sourceTableKey': [api.sourceTableKey],
      'parameters': this.fb.array(parameters),
    }, { validator: this.validateDatalinkTable() }
    );

    this.formGroupFunc = this.api;
    this.saveMethod = 'SaveApi';
    this.property = sharedObjectProperties.find(c => c.type === eSharedObjectType.Api);
    this.addMissing(api, apiForm, new DexihApi());
    this.watchChanges(eSharedObjectType.Api, 'apiKey', 'api', this.api);
    this.startForm(apiForm);
  }

  public validation(validation: DexihColumnValidation) {
    const validationForm = this.fb.group({
      'name': [validation.name, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
        this.duplicateValidationNameValidator()
      ]],
    }
    );

    this.formGroupFunc = this.validation;
    this.property = sharedObjectProperties.find(c => c.type === eSharedObjectType.ColumnValidation);
    this.saveMethod = 'SaveColumnValidation';
    this.addMissing(validation, validationForm, new DexihColumnValidation());
    this.watchChanges(eSharedObjectType.ColumnValidation, 'key', 'column validation', this.validation);
    this.startForm(validationForm);
  }

  duplicateValidationNameValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (this.currentForm) {
        const name = control.value;
        const no = this.hubCache.hub.dexihColumnValidations.findIndex(c =>
          c.key !== this.currentForm.controls.key.value && c.isValid
          && this.stringCompare(c.name, name)) >= 0;
        return no ? { 'duplicateName': { name } } : null;
      }
    };
  }

  public customFunction(customFunction: DexihCustomFunction) {
    const customFunctionForm = this.fb.group({
      'name': [customFunction.name, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
        this.duplicateCustomFunctionNameValidator()
      ]],
      'dexihCustomFunctionParameters': this.fb.array(customFunction.dexihCustomFunctionParameters.filter(c => c.isValid).map(parameter => {
        return this.customFunctionParametersFormGroup(parameter);
      })),

    }
    );

    this.formGroupFunc = this.customFunction;
    this.saveMethod = 'SaveCustomFunction';
    this.property = sharedObjectProperties.find(c => c.type === eSharedObjectType.CustomFunction);
    this.addMissing(customFunction, customFunctionForm, new DexihCustomFunction());
    this.watchChanges(eSharedObjectType.CustomFunction, 'customFunctionKey', 'custom function', this.customFunction);
    this.startForm(customFunctionForm);
  }

  duplicateCustomFunctionNameValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (this.currentForm) {
        const name = control.value;
        const no = this.hubCache.hub.dexihCustomFunctions.findIndex(c =>
          c.key !== this.currentForm.controls.key.value && c.isValid
          && this.stringCompare(c.name, name)) >= 0;
        return no ? { 'duplicateName': { name } } : null;
      }
    };
  }

  public customFunctionParametersFormGroup(parameter: DexihCustomFunctionParameter): FormGroup {
    const parameterForm = this.fb.group({
      'name': [parameter.name, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50),
      ]],
    });

    this.addMissing(parameter, parameterForm, new DexihCustomFunctionParameter());
    return parameterForm;
  }

  public hubVariable(hubVariable: DexihHubVariable) {
    const hubVariableForm = this.fb.group({
      'name': [hubVariable.name, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
        this.duplicateHubVariableNameValidator()
      ]],
      'valueRaw': [hubVariable.isEncrypted ? null : hubVariable.value]
    }
    );

    this.formGroupFunc = this.hubVariable;
    this.saveMethod = 'SaveHubVariable';
    this.property = sharedObjectProperties.find(c => c.type === eSharedObjectType.HubVariable);
    this.addMissing(hubVariable, hubVariableForm, new DexihHubVariable());
    this.watchChanges(eSharedObjectType.HubVariable, 'hubVariable', 'hub variable', this.hubVariable);
    this.startForm(hubVariableForm);
  }

  duplicateHubVariableNameValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (this.currentForm) {
        const name = control.value;
        const no = this.hubCache.hub.dexihHubVariables.findIndex(c =>
          c.key !== this.currentForm.controls.key.value && c.isValid
          && this.stringCompare(c.name, name)) >= 0;
        return no ? { 'duplicateName': { name } } : null;
      }
    };
  }

  public tag(tag: DexihTag) {
    const form = this.fb.group({
      'name': [tag.name, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
        this.duplicateTagNameValidator()
      ]],
    }
    );

    this.formGroupFunc = this.tag;
    this.saveMethod = 'SaveTag';
    this.property = sharedObjectProperties.find(c => c.type === eSharedObjectType.Tags);
    this.addMissing(tag, form, new DexihTag());
    this.watchChanges(eSharedObjectType.Tags, 'tag', 'hub variable', this.tag);
    this.startForm(form);
  }

  duplicateTagNameValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (this.currentForm) {
        const name = control.value;
        const no = this.hubCache.hub.dexihTags.findIndex(c =>
          c.key !== this.currentForm.controls.key.value && c.isValid
          && this.stringCompare(c.name, name)) >= 0;
        return no ? { 'duplicateName': { name } } : null;
      }
    };
  }

  public datalinkTest(datalinkTest: DexihDatalinkTest) {
    const form = this.fb.group({
      'name': [datalinkTest.name, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
        this.duplicateDatalinkTestNameValidator()
      ]],
      'dexihDatalinkTestSteps': this.fb.array([]),
    });

    let testStepsForm = <FormArray>form.controls.dexihDatalinkTestSteps;
    datalinkTest.dexihDatalinkTestSteps.filter(c => c.isValid).forEach(step => {
      testStepsForm.push(this.datalinkTestStep(step));
    });

    this.formGroupFunc = this.datalinkTest;
    this.saveMethod = 'SaveDatalinkTest';
    this.property = sharedObjectProperties.find(c => c.type === eSharedObjectType.DatalinkTest);
    this.addMissing(datalinkTest, form, new DexihDatalinkTest());
    this.watchChanges(eSharedObjectType.DatalinkTest, 'datalinkTest', 'datalink test', this.datalinkTest);
    this.startForm(form);
  }

  duplicateDatalinkTestNameValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (this.currentForm) {
        const name = control.value;
        const no = this.hubCache.hub.dexihDatalinkTests.findIndex(c =>
          c.key !== this.currentForm.controls.key.value && c.isValid
          && this.stringCompare(c.name, name)) >= 0;
        return no ? { 'duplicateName': { name } } : null;
      }
    };
  }

  public datalinkTestStep(step: DexihDatalinkTestStep): FormGroup {
    const form = this.fb.group({
      'dexihDatalinkTestTables': this.fb.array([]),
    });

    let testTablesForm = <FormArray>form.controls.dexihDatalinkTestTables;
    step.dexihDatalinkTestTables.filter(c => c.isValid).forEach(table => {
      testTablesForm.push(this.datalinkTestTable(table));
    });

    this.addMissing(step, form, new DexihDatalinkTestStep());

    if (this._datalinkTestChangesSubscription) {this._datalinkTestChangesSubscription.unsubscribe(); }
    this._datalinkTestChangesSubscription = form.controls.datalinkKey.valueChanges.subscribe(datalinkKey => {
      let datalink = this.hubCache.hub.dexihDatalinks.find(c => c.key === datalinkKey);

      while (testTablesForm.length > 0) {testTablesForm.removeAt(0); }

      if (datalink.sourceDatalinkTable.sourceTableKey) {
          let testTable = new DexihDatalinkTestTable();
          testTable.tableKey = datalink.sourceDatalinkTable.sourceTableKey;
          testTable.isValid = true;
          testTablesForm.push(this.datalinkTestTable(testTable));
      }

      datalink.dexihDatalinkTransforms.filter(c => c.joinDatalinkTable && c.joinDatalinkTable.sourceTableKey).forEach(transform => {
          let testTable = new DexihDatalinkTestTable();
          testTable.tableKey = transform.joinDatalinkTable.sourceTableKey;
          testTable.isValid = true;
          testTablesForm.push(this.datalinkTestTable(testTable));
      });
    });
    return form;
  }

  public datalinkTestTable(table: DexihDatalinkTestTable): FormGroup {
    const form = this.fb.group({});
    this.addMissing(table, form, new DexihDatalinkTestTable());
    return form;
  }



  /// ***********
  /// Datajob forms
  /// ***********

  public triggerFormGroup(trigger: DexihTrigger): FormGroup {
    let triggerForm = this.fb.group({
    });

    this.addMissing(trigger, triggerForm, new DexihTrigger());
    return triggerForm;
  }

  public datalinkStepFormGroup(datajobForm: FormGroup, step: DexihDatalinkStep): FormGroup {

    let parameters = step.parameters.filter(c => c.isValid).map(parameter => {
      return this.parameter(parameter);
    });

    let stepForm = this.fb.group({
      'key': [step.key, [
      ]],
      'name': [step.name, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
        this.duplicateStepNameValidator(datajobForm)
      ]],
      'datalinkKey': [step.datalinkKey, [
        Validators.required
      ]],
      'dexihDatalinkDependencies': this.fb.array(step.dexihDatalinkDependencies.filter(c => c.isValid).map(dep => {
        return this.datalinkDependencyFormGroup(dep);
      })),
      'dexihDatalinkStepColumns': this.fb.array(step.dexihDatalinkStepColumns.filter(c => c.isValid).map(col => {
        return this.datalinkStepColumnFormGroup(col);
      })),
      'parameters': this.fb.array(parameters)
    });

    this.addMissing(step, stepForm, new DexihDatalinkStep());
    return stepForm;
  }

  public datalinkDependencyFormGroup(dep: DexihDatalinkDependency): FormGroup {
    let depForm = this.fb.group({
    });

    this.addMissing(dep, depForm, new DexihDatalinkDependency());
    return depForm;
  }

  public datalinkStepColumnFormGroup(col: DexihDatalinkStepColumn): FormGroup {
    let colForm = this.fb.group({
    });

    this.addMissing(col, colForm, new DexihDatalinkStepColumn());
    return colForm;
  }

  public datajob(datajob: DexihDatajob): void {
    this.clearFormSubscriptions();

    const triggers = datajob.dexihTriggers.filter(c => c.isValid).map(trigger => {
      return this.triggerFormGroup(trigger);
    });

    let parameters = datajob.parameters.filter(c => c.isValid).map(parameter => {
      return this.parameter(parameter);
    });

    const stepsArray = this.fb.array([]);

    const datajobForm = this.fb.group({
      'key': [datajob.key, [
      ]],
      'name': [datajob.name, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
        this.duplicateDatajobNameValidator()
      ]],
      'auditConnectionKey': [datajob.auditConnectionKey, [
        this.requiredNotZero()
      ]],
      'failAction': [datajob.failAction, [
        Validators.required
      ]],
      'dexihDatalinkSteps': stepsArray,
      'dexihTriggers': this.fb.array(triggers),
      'parameters': this.fb.array(parameters)
    });

    datajob.dexihDatalinkSteps.filter(c => c.isValid).forEach(step => {
      stepsArray.push(this.datalinkStepFormGroup(datajobForm, step));
    });

    this.formGroupFunc = this.datajob;
    this.saveMethod = 'SaveDatajob';
    this.property = sharedObjectProperties.find(c => c.type === eSharedObjectType.Datajob);
    this.addMissing(datajob, datajobForm, new DexihDatajob());
    this.watchChanges(eSharedObjectType.Datajob, 'key', 'data job', this.datajob);
    this.startForm(datajobForm);
  }

  duplicateDatajobNameValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (this.currentForm) {
        const name = control.value;
        const no = this.hubCache.hub.dexihDatajobs.findIndex(c =>
          c.key !== this.currentForm.controls.key.value && c.isValid && this.stringCompare(c.name, name)) >= 0;
        return no ? { 'duplicateName': { name } } : null;
      }
    };
  }


  duplicateStepNameValidator(datajobForm: FormGroup): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (this.currentForm) {
        const name = control.value;
        if (control && control.parent) {
          let key = control.parent.controls['key'].value;
          const no = datajobForm.value.dexihDatalinkSteps.findIndex(c =>
            c.key !== key && c.isValid && c.name === name) >= 0;
          return no ? { 'duplicateName': { name } } : null;
        }
      }
    };
  }

  public remoteAgent(remoteAgent: DexihRemoteAgentHub) {
    const remoteAgentForm = this.fb.group({
    }
    );

    // this.formGroupFunc = this.remoteAgentSettings;
    // this.saveMethod = 'SaveRemoteAgent';
    // this.property = sharedObjectProperties.find(c => c.type === eSharedObjectType.RemoteAgent);
    this.clearFormSubscriptions();
    this.addMissing(remoteAgent, remoteAgentForm, new DexihRemoteAgentHub());
    this.startForm(remoteAgentForm);
  }

  //
  //
  // Datalink Edit Forms
  //
  //

  // gets the datalink object with embedded data stripped off.
  public getDatalinkValue(): DexihDatalink {
    const datalink = this.currentForm.value;

    // causes problems with target table as output columns seems to get set null in the form.
    // datalink.dexihDatalinkTransforms.forEach(t => {
    //   t.inputColumns = null;
    //   t.outputColumns = null;
    // });

    // datalink.targetTable = null;

    return datalink;
  }

  datalinkTableColumn(siblingColumns: DexihDatalinkColumn[], column: DexihDatalinkColumn): FormGroup {
    let childColumns = column.childColumns ? column.childColumns : [];

    let columnForm = this.fb.group({
      'name': [column.name, [
        Validators.required,
        Validators.maxLength(250),
        this.duplicateDatalinkColumnNameValidator(siblingColumns)
      ]],
      'logicalName': [column.logicalName, [
        Validators.required,
        Validators.maxLength(250)
      ]],
      'precision': [column.precision, [
        this.columnMinRangeValidator(0),
        this.columnMaxRangeValidator(30),
      ]],
      'scale': [column.scale, [
        this.columnMinRangeValidator(0),
        this.columnMaxRangeValidator(30),
      ]],
      'useLogical': [column.name !== column.logicalName, [
      ]],
      'isString': [column.dataType === eTypeCode.String  || column.dataType === eTypeCode.CharArray ? true : false, [
      ]],
      'isNumber': [column.dataType === eTypeCode.Double || column.dataType === eTypeCode.Decimal ||
        column.dataType === eTypeCode.Single ? true : false, [
      ]],
      'childColumns': this.fb.array(childColumns.filter(c => c.isValid).map(col => {
        return this.datalinkTableColumn(childColumns, col);
      })),
      'runTime': {impact: eMappingStatus, lineage: eMappingStatus}
    });

    this.addMissing(column, columnForm, new DexihDatalinkColumn());

    // update isString and isNumber properties automatically when dataType changes.
    if (this._tableColumnChangesSubscription1) { this._tableColumnChangesSubscription1.unsubscribe(); }
    this._tableColumnChangesSubscription1 = columnForm.controls.dataType.valueChanges.subscribe(dataType => {
      if (dataType === eTypeCode.String  || dataType === eTypeCode.CharArray) {
        columnForm.controls.isString.setValue(true);
      } else {
        columnForm.controls.isString.setValue(false);
      }

      if (dataType === eTypeCode.Double || dataType === eTypeCode.Decimal || dataType === eTypeCode.Single) {
        columnForm.controls.isNumber.setValue(true);
      } else {
        columnForm.controls.isNumber.setValue(false);
      }
    });

    // match logical name, unless the logical name is changed.
    if (this._tableColumnChangesSubscription2) { this._tableColumnChangesSubscription2.unsubscribe(); }
    this._tableColumnChangesSubscription2 = columnForm.controls.useLogical.valueChanges.subscribe(() => {
      if (!columnForm.controls.useLogical.value) {
        columnForm.controls.logicalName.setValue(columnForm.controls.name.value);
      }
    });

    if (this._tableColumnChangesSubscription3) { this._tableColumnChangesSubscription3.unsubscribe(); }
    this._tableColumnChangesSubscription3 = columnForm.controls.name.valueChanges.subscribe(() => {
      if (!columnForm.controls.useLogical.value) {
        columnForm.controls.logicalName.setValue(columnForm.controls.name.value);
      }
    });

    for (const field of Object.keys(columnForm.controls)) {
      let control = columnForm.controls[field];
      if (control.validator) {
        columnForm.controls[field].updateValueAndValidity();
      }
    }
    return columnForm;
  }

  private duplicateDatalinkColumnNameValidator(columnsArray: DexihDatalinkColumn[]): ValidatorFn {
    // validate no matching tables names in the same connection.
    return (control: AbstractControl): { [key: string]: any } => {
      if (!columnsArray) { return null; }
      if (this.currentForm) {
        const name = control.value;
        if (control.parent) {
          const key = control.parent.value.key;
          if (columnsArray) {
            const no = columnsArray.findIndex(c =>
              c.key !== key && c.isValid && this.stringCompare(c.name, name)) >= 0;
            return no ? { 'duplicateName': { name } } : null;
          }
        }
      }
    };
  }

  public datalinkTransformFormGroup(transform: DexihDatalinkTransform): FormGroup {

    const transformForm = this.fb.group({
      'datalinkTransformKey': [transform.key, [
      ]],
      'name': [transform.name, [
        // Validators.required,
        // Validators.minLength(3),
        // Validators.maxLength(50),
      ]],
      'datalinkKey': [transform.datalinkKey, [
        Validators.required
      ]],
      'joinDatalinkTable': transform.joinDatalinkTable ? this.sourceDatalinkTableFormGroup(transform.joinDatalinkTable) : null,
      'nodeDatalinkColumn': transform.nodeDatalinkColumn ? transform.nodeDatalinkColumn : null,
      'isValid': true,

      'runTime': {inputColumns: null, outputColumns: null, transformColumns: null},
    });

    transformForm.addControl('dexihDatalinkTransformItems', this.fb.array(transform.dexihDatalinkTransformItems
      .filter(c => c.isValid).map(item => {
        return this.datalinkDatalinkTransformItemFormGroup(transformForm, item);
      })));

    this.addMissing(transform, transformForm, new DexihDatalinkTransform());
    return transformForm;
  }


  public  datalinkDatalinkTransformItemFormGroup(datalinkTransformForm: FormGroup, item: DexihDatalinkTransformItem): FormGroup {
    const itemForm = this.fb.group({
      'dexihFunctionParameters': this.fb.array(item.dexihFunctionParameters.filter(c => c.isValid).map(parameter => {
        return this.datalinkFunctionParametersFormGroup(parameter);
      })),
      // 'standardFunction': item.standardFunction,
      'targetDatalinkColumn': [item.targetDatalinkColumn, [
        this.duplicateOutputColumn(datalinkTransformForm)
      ]],
      'functionClassName': [item.functionClassName],
      'functionMethodName': [item.functionMethodName],
      'isValid': true
    }, {asyncValidators: [this.invalidClassName()]});

    this.addMissing(item, itemForm, new DexihDatalinkTransformItem());

    // itemForm.controls.functionMethodName.setAsyncValidators(this.invalidClassName(itemForm));

    // when ever generic parameter changes, change all underlying types.
    if (this._genericParameterSubscription) { this._genericParameterSubscription.unsubscribe(); }
    this._genericParameterSubscription = itemForm.controls.genericTypeCode.valueChanges.subscribe(() => {
      let typeCode = itemForm.controls.genericTypeCode.value;
      let parameters = <FormArray> itemForm.controls.dexihFunctionParameters;
      parameters.controls.filter(c => c.value.isGeneric).forEach(p => {
        let param = <FormGroup>p;
        param.controls.dataType.setValue(typeCode);
        let arrayParams = <FormArray> param.controls.arrayParameters;
        arrayParams.controls.forEach(ap => {
          let aParam = <FormGroup>ap;
          aParam.controls.dataType.setValue(typeCode);
        });
      });
    });


    return itemForm;
  }

  duplicateOutputColumn(datalinkTransformForm: FormGroup): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (this.currentForm) {
        const column = <DexihDatalinkColumn>control.value;
        const transformColumns = <DexihDatalinkColumn[]>datalinkTransformForm.controls.runTime.value.transformColumns;
        if (transformColumns && column) {
          const no = transformColumns.filter(c => c.name === column.name).length > 1;
          return no ? { 'duplicateName': { name } } : null;
        } else {
          return null;
        }
      }
    };
  }

  invalidClassName(): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> => {
      const datalinkTransformItemForm = <FormGroup>control;
      datalinkTransformItemForm.controls.functionMethodName.setErrors(null);
      if (this.currentForm && datalinkTransformItemForm.controls.transformItemType
        && datalinkTransformItemForm.controls.transformItemType.value === eTransformItemType.BuiltInFunction ) {
        return new Promise((resolve, reject) => {
          this.hubService.GetFunctionReference(datalinkTransformItemForm.value).then(func => {
          if (func) {
            resolve(null);
          } else {
            const value = datalinkTransformItemForm.controls.functionClassName.value + '.' +
              datalinkTransformItemForm.controls.functionMethodName.value;
              datalinkTransformItemForm.controls.functionMethodName.setErrors({ 'invalidClass': { value } });
            resolve({ 'invalidClass': { value } });
          }
        }).catch(reason => {
          reject(reason);
        });
      });
      } else {
        return Promise.resolve(null);
      }
    };
  }

  public datalinkFunctionParametersFormGroup(parameter: DexihFunctionParameter): FormGroup {
    const parameterForm = this.fb.group({
      // 'name': [, [ // used for adding new columns
      // ]],
      'datalinkColumn': parameter.datalinkColumn,
      'runTime': parameter['runTime'],
      'arrayParameters': this.fb.array(parameter.arrayParameters.filter(c => c.isValid).map(p => {
        return this.datalinkFunctionArrayParametersFormGroup(p);
      })),
    }, { validator: this.inconsistentDataType()});

    this.addMissing(parameter, parameterForm, new DexihFunctionParameter());

    return parameterForm;
  }

  public datalinkFunctionArrayParametersFormGroup(parameter: DexihFunctionArrayParameter): FormGroup {
    const parameterForm = this.fb.group({
      // 'name': [, [ // used for adding new columns
      // ]],
      'datalinkColumn': parameter.datalinkColumn,
      'runTime': parameter['runTime'],
    }, { validator: this.inconsistentDataType()});

    this.addMissing(parameter, parameterForm, new DexihFunctionArrayParameter());

    return parameterForm;
  }

  inconsistentDataType(): ValidatorFn {
    return (group: FormGroup): { [key: string]: any } => {
      if (this.currentForm) {
        const datalinkColumn = group.controls.datalinkColumn;
        if (datalinkColumn && datalinkColumn.value) {
          const dataType = datalinkColumn.value.dataType;
          const parameterDataType = group.controls.dataType?.value;
          if (dataType !== parameterDataType && parameterDataType !== eTypeCode.Unknown) {
            datalinkColumn.setErrors({'dataType': { dataType }});
            return { 'dataType': { dataType }};
          } else {
            datalinkColumn.setErrors(null);
          }
        }
      }
      return null;
    };
  }

  public datalinkProfileFormGroup(profile: DexihDatalinkProfile): FormGroup {
    const profileForm = this.fb.group({
      'isValid': true
    });

    this.addMissing(profile, profileForm, new DexihDatalinkProfile());
    return profileForm;
  }

  public datalinkTargetFormGroup(target: DexihDatalinkTarget, table: DexihTable = null): FormGroup {

    if (!table && target.tableKey) {
      table = this.hubCache.getTable(target.tableKey);
    }
    // if (!table) {
    //   table = new DexihTable();
    // }

    const targetForm = this.fb.group({
      'table': table ? this.tableForm(table) : null,
      'runTime': {inputColumns: null},
      'nodeDatalinkColumn': target.nodeDatalinkColumn ? target.nodeDatalinkColumn : null,
      'isValid': true
    });

    this.addMissing(target, targetForm, new DexihDatalinkTarget());

    let subscription = targetForm.controls.tableKey.valueChanges.subscribe(tableKey => {
      if (tableKey > 0) {
        table = this.hubCache.getTable(tableKey);
        const tableForm = table ? this.tableForm(table) : null;
        targetForm.setControl('table', tableForm);
      }
    });

    this._datalinkTargetChanges.push(subscription);

    return targetForm;
  }


  public sourceDatalinkTableFormGroup(datalinkTable: DexihDatalinkTable): FormGroup {
    const form = this.fb.group({
      'sourceType': [datalinkTable.sourceType, [
        Validators.required,
      ]],
      'sourceTableKey': [datalinkTable.sourceTableKey, [
      ]],
      'sourceDatalinkKey': [datalinkTable.sourceDatalinkKey, [
      ]],
      'isValid': true,
      'dexihDatalinkColumns': this.fb.array([]),
    }, { validator: this.validateDatalinkTable() });

    let tableColumnsForm = <FormArray>form.controls.dexihDatalinkColumns;
    datalinkTable.dexihDatalinkColumns.filter(c => c.isValid).forEach(column => {
      tableColumnsForm.push(this.datalinkTableColumn(tableColumnsForm.value, column));
    });

    this.addMissing(datalinkTable, form, new DexihDatalinkTable());
    return form;
  }

  private validateDatalinkTable() {
    return (group: FormGroup) => {
      let sourceType = group.get('sourceType').value;
      let sourceTableKey = group.get('sourceTableKey');
      let sourceDatalinkKey = group.get('sourceDatalinkKey');

      sourceTableKey.setErrors(null);
      sourceDatalinkKey.setErrors(null);

      if (sourceType === eSourceType.Table) {
        if (!sourceTableKey.value) {
          return sourceTableKey.setErrors({ required: true });
        }
      } else if (sourceType === eSourceType.Datalink) {
        if (!sourceDatalinkKey.value) {
          return sourceDatalinkKey.setErrors({ required: true });
        }
      }
    };
  }


  datalink(datalink: DexihDatalink): void {
    this.logger.LogC(() => `datalink key:${datalink.key} datalink:${datalink.name}`, eLogLevel.Debug);

    this.clearFormSubscriptions();

    let profiles = datalink.dexihDatalinkProfiles.filter(c => c.isValid).map(profile => {
      return this.datalinkProfileFormGroup(profile);
    });

    let source = this.sourceDatalinkTableFormGroup(datalink.sourceDatalinkTable);

    let targets = datalink.dexihDatalinkTargets.filter(c => c.isValid).map(target => {
      return this.datalinkTargetFormGroup(target);
    });

    let transforms = datalink.dexihDatalinkTransforms.filter(c => c.isValid).map(transform => {
      return this.datalinkTransformFormGroup(transform);
    });

    let parameters = datalink.parameters.filter(c => c.isValid).map(parameter => {
      return this.parameter(parameter);
    });


    const datalinkForm = this.fb.group({
      'name': [datalink.name, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50),
        this.duplicateDatalinkNameValidator(datalink.key)
      ]],
      'sourceDatalinkTable': source,
      'auditConnectionKey': [datalink.auditConnectionKey, [
        // Validators.required,
      ]],
      'updateStrategy': [datalink.updateStrategy, [
        // Validators.required,
      ]],
      'dexihDatalinkTransforms': this.fb.array(transforms),
      'dexihDatalinkProfiles': this.fb.array(profiles),
      'dexihDatalinkTargets': this.fb.array(targets),
      'parameters': this.fb.array(parameters),
      'isValid': true
    });

    let templateDatalink = new DexihDatalink();
    templateDatalink.sourceDatalinkTable = new DexihDatalinkTable();
    this.addMissing(datalink, datalinkForm, templateDatalink);

    this.formGroupFunc = this.datalink;
    this.saveMethod = 'SaveDatalink';
    this.property = sharedObjectProperties.find(c => c.type === eSharedObjectType.Datalink);
    this.valueMethod = 'getDatalinkValue';

    // whenever a source table, transform mapping, or target table changes update the input/output columns
    // let listenControls = new Array<Observable<any>>();
    // listenControls.push(source.controls.dexihDatalinkColumns.valueChanges);

    // transforms.forEach(transform => {
    //   listenControls.push(transform.valueChanges);
    // });

    // targets.forEach(target => {
    //   const table = <FormGroup> target.controls.table;
    //   listenControls.push(table.controls.dexihTableColumns.valueChanges);
    // });

    if (this._datalinkChangesSubscription1) { this._datalinkChangesSubscription1.unsubscribe(); }
    this._datalinkChangesSubscription1 = datalinkForm.valueChanges.subscribe(() => {
      this.updateTransformFormColumns(datalinkForm);
    });
    this.updateTransformFormColumns(datalinkForm);

    this.watchChanges(eSharedObjectType.Datalink, 'key', 'datalink', this.datalink);
    this.startForm(datalinkForm);
  }

  private duplicateDatalinkNameValidator(datalinkKey: number): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (this.currentForm) {
        const name = control.value;
        const no = this.hubCache.hub.dexihDatalinks.findIndex(c =>
          c.key !== datalinkKey && c.isValid && this.stringCompare(c.name, name)) >= 0;
        return no ? { 'duplicateName': { name } } : null;
      }
    };
  }

  private updateTransformFormColumns(datalinkForm: FormGroup) {
    if (this.IgnoreFormChange === false) {
      this.IgnoreFormChange = true;
      const transformsArray = <FormArray>datalinkForm.controls.dexihDatalinkTransforms;
      const datalink = <DexihDatalink> datalinkForm.value;
      const ioColumns = new InputOutputColumns();

      ioColumns.buildInputOutput(datalink);

      transformsArray.controls.forEach(transformFormControl => {
        const datalinkTransformForm = <FormGroup>transformFormControl;
        const datalinkTransform = datalinkTransformForm.value;

        // const inputColumns = ioColumns.getInputColumns(this.hubCache, datalink, datalinkTransform, []);
        // const outputColumns = ioColumns.getOutputColumns(this.hubCache, datalink, datalinkTransform);

        const transform = datalink.dexihDatalinkTransforms.find(c => c.key === datalinkTransform.datalinkTransformKey);

        datalinkTransformForm.controls.runTime.setValue(transform['runTime'], { emitEvent: false } );

        const items = <FormArray>datalinkTransformForm.controls.dexihDatalinkTransformItems;
        items.controls.forEach(item => {
          const transformItemForm = <FormGroup>item;
          if (transformItemForm.controls.targetDatalinkColumn) {
            transformItemForm.controls.targetDatalinkColumn.updateValueAndValidity( {emitEvent: false});
          }
          if (transformItemForm.controls.sourceDatalinkColumn) {
            transformItemForm.controls.sourceDatalinkColumn.updateValueAndValidity( {emitEvent: false});
          }

          const params = <FormArray>transformItemForm.controls.dexihFunctionParameters;
          params.controls.forEach(param => {
            const paramForm = <FormGroup>param;
            if (paramForm.controls.datalinkColumn) {
              paramForm.controls.datalinkColumn.updateValueAndValidity( {emitEvent: false} );
            }
          });
        });
      });

      const targetsArray = <FormArray>datalinkForm.controls.dexihDatalinkTargets;
      targetsArray.controls.forEach((targetForm: FormGroup) => {
        let target = datalink.dexihDatalinkTargets.find(c => c.key === targetForm.controls.key.value);
        if (target) {
          targetForm.controls.runTime.setValue(target['runTime'], {emitEvent: false});
        }
      });

      this.IgnoreFormChange = false;
    }
  }
}
