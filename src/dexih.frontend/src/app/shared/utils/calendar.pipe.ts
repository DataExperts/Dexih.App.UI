import { Pipe, PipeTransform } from '@angular/core';
import * as moment_ from 'moment';
const moment = moment_;

@Pipe({
  name: 'calendar'
})
export class CalendarPipe implements PipeTransform {
  transform(value: Date): any {
    return moment(value).calendar();
  }
}