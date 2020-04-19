import { Component, OnInit, OnChanges, OnDestroy, Input } from '@angular/core';
import { Subscription} from 'rxjs';
import { AbstractControl, FormGroup, FormArray } from '@angular/forms';
import { DexihFormErrorsModule } from '../dexih-form-errors.module';

@Component({
    selector: 'dexih-invalid-form-icon',
    templateUrl: './dexih-invalid-form-icon.component.html'
})

export class DexihInvalidFormIconComponent  {
    @Input() control: AbstractControl;

    private _changesSubscription: Subscription;

    display = false;
    message = '';

    constructor() { }

    // ngOnInit() {
    // }

    // ngOnChanges() {
    //     if (!this.control || this.control.pending) {
    //         this.message = '';
    //         return;
    //     }

    //     this.refresh();

    //     if (this._changesSubscription) { this._changesSubscription.unsubscribe(); }
    //     this._changesSubscription = this.control.statusChanges.subscribe((status) => {
    //         if (status !== 'PENDING') {
    //             this.refresh();
    //         }
    //     });
    // }

    // ngOnDestroy() {
    //     if (this._changesSubscription) { this._changesSubscription.unsubscribe(); }
    // }

    // refresh() {
    //    this.display = false;
    //     this.message = '';

    //     if (this.control && this.control.invalid) {
    //         this.display = true;
    //         this.message = 'There are errors with this control.\n' + this.getFormErrors();
    //     }
    // }

    // public getFormErrors(): string {
    //     return this.getFormErrorsRecursive(<FormGroup>this.control, 0, 0);
    // }

    // private getFormErrorsRecursive(form: FormGroup, depth: number, index: number): string {
    //     let message = '';

    //     for (const field of Object.keys(form.controls)) {
    //         const control = form.get(field);

    //         // if the control is dirty or flag is set to show all errors.
    //         if (control && control.invalid) {
    //             message += ' '.repeat(depth * 3) + `The control ${field} at position ${index} has the following error(s): \n`;
    //             if (control instanceof FormArray) {
    //                 const formArray = <FormArray>control;
    //                 formArray.controls.forEach((cont, formIndex) => {
    //                     message += this.getFormErrorsRecursive(<FormGroup>cont, depth + 1, formIndex);
    //                 });
    //             } else if (control instanceof FormGroup) {
    //                 message += this.getFormErrorsRecursive(<FormGroup>control, depth + 1, 0);
    //             } else {
    //                 if (control.errors) {
    //                     for (const key of Object.keys(control.errors)) {
    //                         message += ' '.repeat(depth * 3 + 1) + key + ':' +
    //                         DexihFormErrorsModule.createErrorMessage(key, control) + '\n'; // + '<p></p>';
    //                     }
    //                 }
    //             }
    //         }
    //     }

    //     return message;
    // }


}
