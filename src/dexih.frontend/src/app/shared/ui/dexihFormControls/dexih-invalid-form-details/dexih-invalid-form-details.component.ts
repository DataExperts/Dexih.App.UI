import { Component, OnInit, OnChanges, OnDestroy, Input } from '@angular/core';
import { Subscription, combineLatest} from 'rxjs';
import { AbstractControl, FormGroup, FormArray, FormControl } from '@angular/forms';

class ControlError {
    public field: string;
    public name: string;
    public position: number;
    public errors: string[];

    public childControlErrors: ControlError[];

    constructor() {
        this.childControlErrors = new Array<ControlError>();
        this.errors = [];
    }
}

@Component({
    selector: 'dexih-invalid-form-details',
    templateUrl: './dexih-invalid-form-details.component.html',
})
export class DexihInvalidFormDetailsComponent implements OnInit, OnChanges, OnDestroy {
    @Input() control: AbstractControl;

    public showErrors = false;


    private _changesSubscription: Subscription;

    valid = true;
    public controlErrors = [];

    constructor() { }

    ngOnInit() { }

    ngOnChanges() {
        if (!this.control) {
            this.valid = true;
            this.controlErrors = [];
            return;
        }

        this.refresh();

        if (this._changesSubscription) { this._changesSubscription.unsubscribe(); }

        this._changesSubscription = this.control.statusChanges.subscribe(() => {
            this.refresh();
        });
    }

    ngOnDestroy() {
        if (this._changesSubscription) { this._changesSubscription.unsubscribe(); }
    }

    refresh() {
        if (this.control && !this.control.valid) {
            this.valid = false;
            this.controlErrors = this.getFormErrors();
        } else {
            this.valid = true;
            this.controlErrors = [];
        }
    }

    public getFormErrors(): ControlError[] {
        return this.getFormErrorsRecursive(<FormGroup>this.control, 0, 0);
    }

    private getFormErrorsRecursive(form: FormGroup, depth: number, index: number): ControlError[] {
        let controlErrors = [];

        if (form && !form.valid) {
            const parentControl = new ControlError();
            for (const field of Object.keys(form.controls)) {
                const control = form.get(field);

                // if the control is dirty or flag is set to show all errors.
                if (control && !control.valid) {

                    if (control instanceof FormArray) {
                        const formArray = <FormArray>control;
                        formArray.controls.forEach((cont, formIndex) => {
                            if (!cont.valid) {
                            let controlError = new ControlError();

                            if (cont.value && cont.value.name) {
                                controlError.name = cont.value.name;
                            }

                            controlError.field = field;
                            controlError.position = formIndex;
                            controlError.childControlErrors = this.getFormErrorsRecursive(<FormGroup>cont, depth + 1, formIndex);
                            controlErrors.push(controlError);
                        }
                        });
                    } else if (control instanceof FormGroup) {
                        let controlError = new ControlError();

                        if (control.value && control.value.name) {
                            controlError.name = control.value.name;
                        }

                        controlError.field = field;
                        controlError.position = 0;
                        controlError.childControlErrors = this.getFormErrorsRecursive(<FormGroup>control, depth + 1, 0);
                        controlErrors.push(controlError);

                    } else {
                        let controlError = new ControlError();
                        controlError.field = field;
                        controlError.position = 0;
                        for (const key of Object.keys(control.errors)) {
                                let message = this.createErrorMessage(key, control);
                                controlError.errors.push(message);
                            }
                            controlErrors.push(controlError);
                        }
                }
            }
        }

        return controlErrors;
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
                    + control.errors.maxvalue.requiredValue + '.';
                break;
            case 'minvalue':
                message = 'Value is ' +
                    control.value +
                    ' required minimum is '
                    + control.errors.minvalue.requiredValue + '.';
                break;
            case 'required':
                message = 'A value is required.';
                break;
            default:
                message = 'Field error: ' + key;
        }
        return message;
    }
}
