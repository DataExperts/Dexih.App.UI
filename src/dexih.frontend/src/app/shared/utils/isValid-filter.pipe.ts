import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Pipe({
    name: 'isValidFilter'
})
@Injectable()
export class IsValidFilterPipe implements PipeTransform {
    transform(items: any[], field: string): any {
        if (!items) {
            return [];
        } else {
            if (items[0] instanceof FormGroup) {
                return items.filter(c => c.controls.isValid.value);
            } else {
                return items.filter(c => c.isValid);
            }
        }
    }
}
