import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { HubCache, SearchResult, eObjectType, ObjectTypes } from '../hub.models';

@Pipe({
  name: 'objectTypeName'
})
export class ObjectTypePipe implements PipeTransform {

  transform(value: eObjectType): any {
    return ObjectTypes.find(c => c.key === value).name;
  }
}
