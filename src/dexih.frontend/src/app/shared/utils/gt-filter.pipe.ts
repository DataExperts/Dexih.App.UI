import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gtFilter',
})
export class GtFilterPipe implements PipeTransform {

  transform(items: any[], field: string, value: number): any[] {
    if (!items) {
        return [];
    }
    return items.filter(it => it[field] > value);
  }
}

