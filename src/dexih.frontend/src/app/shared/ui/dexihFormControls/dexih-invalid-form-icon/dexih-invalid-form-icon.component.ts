import { Component, OnInit, OnChanges, OnDestroy, Input } from '@angular/core';
import { Subscription, combineLatest} from 'rxjs';
import { AbstractControl, FormGroup, FormArray } from '@angular/forms';

@Component({
    selector: 'dexih-invalid-form-icon',
    templateUrl: './dexih-invalid-form-icon.component.html'
})

export class DexihInvalidFormIconComponent implements OnInit, OnChanges, OnDestroy {
    @Input() control: AbstractControl;

    private _changesSubscription: Subscription;

    valid = true;
    message = '';

    constructor() { }

    ngOnInit() { }

    ngOnChanges() {
        if (!this.control) {
            this.valid = true;
            this.message = '';
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
            this.message = 'There are errors with this control.' + this.getFormErrors();
        } else {
            this.valid = true;
            this.message = '';
        }
    }

    public getFormErrors(): string {
        return this.getFormErrorsRecursive(<FormGroup>this.control, 0, 0);
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

    private createErrorMessage(key: string, control: AbstractControl): string {
        let message = '';
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
            default:
                message = 'Field error: ' + key;
        }
        return message;
    }
}
