import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fieldSort',
})
export class SortPipe implements PipeTransform {

  transform(items: any[], field: string): any[] {
    if (!items) { return []; }
    return items.sort((a, b) => a[field] - b[field]);
  }
}

