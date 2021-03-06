import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fieldSort',
})
export class SortPipe implements PipeTransform {

  transform(items: any[], field: string): any[] {
    if (!items) { return []; }
    return items.sort((a, b) => {
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

