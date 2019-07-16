import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fieldSortDesc',
})
export class SortDescPipe implements PipeTransform {

  transform(items: any[], field: string): any[] {
    if (!items) { return []; }
    return items.sort((a, b) => b[field] - a[field]);
  }
}

