import { Component, OnInit, OnChanges, OnDestroy, Input, AfterViewInit } from '@angular/core';
import { Subscription} from 'rxjs';
import { AbstractControl, FormGroup, FormArray } from '@angular/forms';
import { DexihFormErrorsModule } from '../dexih-form-errors.module';

@Component({
    selector: 'dexih-invalid-form-icon',
    templateUrl: './dexih-invalid-form-icon.component.html'
})

export class DexihInvalidFormIconComponent implements AfterViewInit  {
    @Input() control: AbstractControl;

    public pageLoaded = false;

    constructor() { }


    // workaround to stop ExpressionChangedAfterItHasBeenCheckedError
    ngAfterViewInit() {
        this.pageLoaded = true;
    }

    isFormValid(): boolean {
        if (this.pageLoaded) {
            return this.control.valid;
        } else {
            return false;
        }
    }

}
