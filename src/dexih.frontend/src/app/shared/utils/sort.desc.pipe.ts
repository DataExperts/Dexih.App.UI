import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fieldSortDesc',
})
export class SortDescPipe implements PipeTransform {

  transform(items: any[], field: string): any[] {
    if (!items) { return []; }
    return items.sort((b, a) => {
      if (a[field] > b[field]) {
        return 1;
    }

    if (a[field] < b[field]) {
        return -1;
    }

    return 0;
    });
  }
}

