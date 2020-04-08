import { AbstractControl, FormGroup, FormArray } from '@angular/forms';

export class DexihFormErrorsModule {

    public static createErrorMessage(key: string, control: AbstractControl): string {
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
            case 'dataType':
                message = 'There is a datatype mismatch.';
                break;
            default:
                message = 'Field error: ' + key;
        }
        return message;
    }
    
}