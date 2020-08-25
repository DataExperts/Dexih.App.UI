import { Injectable, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Subscription, BehaviorSubject, Observable, combineLatest} from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Injectable()
export class FormsService implements OnDestroy {
  private _valueChangesSubscription: Subscription;

  private _changesSubscription1: Subscription;
  private _changesSubscription2: Subscription;
  private _changesSubscription3: Subscription;
  private _changesSubscription4: Subscription;
  private _changesSubscription5: Subscription;

  public currentForm: FormGroup;
  private _currentFormObservable = new BehaviorSubject<FormGroup>(null);
  public formErrors: any = {};
  public hasChanged = false;
  public formSaving = false;
  public showAllErrors = false;

  private saveMethod: string;

  validationMessages = {
    'required': 'A value is required.',
    'duplicateName': 'The value is already being used.'
  };

  validationFieldMessages = {

  };

  constructor(
    private fb: FormBuilder,
  ) {
  }

  ngOnDestroy() {
    this.clearFormSubscriptions();
  }

  public clearFormSubscriptions() {
    if (this._valueChangesSubscription) { this._valueChangesSubscription.unsubscribe(); }
    if (this._changesSubscription1) { this._changesSubscription1.unsubscribe(); }
    if (this._changesSubscription2) { this._changesSubscription2.unsubscribe(); }
    if (this._changesSubscription3) { this._changesSubscription3.unsubscribe(); }
    if (this._changesSubscription4) { this._changesSubscription4.unsubscribe(); }
    if (this._changesSubscription5) { this._changesSubscription5.unsubscribe(); }
  }

  public createDefault(item: any, template: any) {
    const newForm = this.fb.group({ });
    this.addMissing(item, newForm, template);
    this.startForm(newForm);
  }

  public addMissing(item: any, form: FormGroup, itemTemplate: any) {
    let keys = Object.keys(itemTemplate);
    let existingKeys = Object.keys(form.controls);
    keys.forEach(key => {
      if (existingKeys.findIndex(c => c === key) >= 0) {
        // skip items already added.
      } else {
        let control = new FormControl(key);
        control.setValue(item[key]);
        form.addControl(key, control);
      }
    });
  }

  public startForm(form: FormGroup) {
    this.currentForm = form;
    this._currentFormObservable.next(form);

    if (this._valueChangesSubscription) { this._valueChangesSubscription.unsubscribe(); }

    // when a value changes, update the errors.
    this._valueChangesSubscription = this.currentForm.valueChanges
        .pipe(debounceTime(500))
        .subscribe(data => {
          this.onValueChanged(data);
        });

    this.onValueChanged(); // (re)set validation messages now

    this.hasChanged = false;
  }

  public getCurrentFormObservable(): Observable<FormGroup> {
    return this._currentFormObservable.asObservable();
  }

  private onValueChanged(data?: any) {
    if (!this.currentForm) { return; }
    const form = this.currentForm;

    this.hasChanged = true;

      for (const field of Object.keys(this.currentForm.controls)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);

        // if the control is dirty or flag is set to show all errors.
        if (control && (control.dirty || this.showAllErrors)) {
          if (!control.valid) {
            const messages = this.validationFieldMessages[field];
            if (control.errors) {
            for (const key of Object.keys(control.errors)) {
              if (messages && messages[key]) {
                this.formErrors[field] += messages[key] + ' ';
              } else if (this.validationMessages[key]) {
                this.formErrors[field] += this.validationMessages[key] + ' ';
              } else {
                let message: string;

                switch (key) {
                  case 'minlength':
                    message = 'Value is ' +
                      control.errors.minlength.actualLength +
                      ' charaters long, required minimum length is '
                      + control.errors.minlength.requiredLength + ' characters.';
                    break;
                  case 'maxlength':
                    message = 'Value is ' +
                      control.errors.maxlength.actualLength +
                      ' charaters long, required maximum length is '
                      + control.errors.maxlength.requiredLength + ' characters.';
                    break;
                  case 'maxvalue':
                    message = 'Value is ' +
                      control.value +
                      ' required maximum is '
                      + control.errors.maxvalue.requiredValue + '.';
                    break;
                  case 'minvalue':
                    message = 'Value is ' +
                      control.value +
                      ' required minimum is '
                      + control.errors.minvalue.requiredValue + '.';
                    break;
                  case 'email':
                    message = 'Value is not a valid email address.';
                    break;
                  case 'passwordMatch':
                    message = 'The passwords do not match.';
                    break;
                  case 'pattern':
                    message = 'Passwords must have one upper, lower, number, and symbol.';
                    break;
                  default:
                    message = 'Field error: ' + key;
                }
                this.formErrors[field] += message + ' ';
              }
            }
          } else {
            // this.formErrors[field] = 'Invalid value';
          }
          }
        }
      }
  }

  public showErrors() {
    this.showAllErrors = true;
    this.onValueChanged();
  }

}
