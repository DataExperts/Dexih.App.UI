import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maxItems',
})
export class MaxItemsFilterPipe implements PipeTransform {

  transform(items: any[], value: number): any[] {
    if (!items) { return []; }
    if (!value) { return items; }

    return items.slice(0, value);

  }
}

