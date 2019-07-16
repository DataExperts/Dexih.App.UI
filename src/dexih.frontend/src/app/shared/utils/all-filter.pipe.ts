import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'allFilter',
})
export class AllFilterPipe implements PipeTransform {

  transform(items: any[], value: string): any[] {
    if (!items) { return []; }
    if (!value) { return items; }

    const filterValue = value.toLowerCase();
    return items.filter(item => {
      const keys = Object.keys(item);
      let found = false;
      keys.forEach(key => {
        if (!found) {
          if ((typeof item[key] === 'string' || item[key] instanceof String)) {
            if (item[key].toLowerCase().indexOf(value.toLowerCase()) > -1) {
              found = true;
            }
          }
        }
      });
      return found;
    });
  }
}

