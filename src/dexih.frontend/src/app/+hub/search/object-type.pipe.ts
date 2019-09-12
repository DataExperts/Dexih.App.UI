import { Pipe, PipeTransform } from '@angular/core';
import { eSearchObjectType, SearchObjectTypes } from '../hub.models';

@Pipe({
  name: 'objectTypeName'
})
export class ObjectTypePipe implements PipeTransform {

  transform(value: eSearchObjectType): any {
    return SearchObjectTypes.find(c => c.key === value).name;
  }
}
