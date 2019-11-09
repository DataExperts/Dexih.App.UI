import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'equalFilter',
})
export class EqualFilterPipe implements PipeTransform {

  transform(items: any[], field: string, value = true): any[] {
    if (!items) {
        return [];
    }
    return items.filter(it => it[field] === value);
  }
}

