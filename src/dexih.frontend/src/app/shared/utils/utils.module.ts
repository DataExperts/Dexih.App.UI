import {NgModule} from '@angular/core';
import {TimeDirective} from './time.directive';
import { FieldFilterPipe } from './field-filter.pipe';
import { EqualFilterPipe } from './equal-filter.pipe';
import { GtFilterPipe } from './gt-filter.pipe';
import { IsValidFilterPipe } from './isValid-filter.pipe';
import { AllFilterPipe } from './all-filter.pipe';
import { SortPipe } from './sort.pipe';
import { SortDescPipe } from './sort.desc.pipe';
import { CountdownComponent } from './countdown.component';
import { MaxItemsFilterPipe } from './max-items-filter';
import { DropZoneDirective } from './dropzone';
import { DragZoneDirective } from './dragzone';
import { CalendarPipe } from './calendar.pipe'
@NgModule({
  declarations: [
    TimeDirective,
    FieldFilterPipe,
    EqualFilterPipe,
    GtFilterPipe,
    IsValidFilterPipe,
    AllFilterPipe,
    SortPipe,
    SortDescPipe,
    CountdownComponent,
    MaxItemsFilterPipe,
    DropZoneDirective,
    DragZoneDirective,
    CalendarPipe
    ],
  imports: [
    ],
  exports: [
    TimeDirective,
    FieldFilterPipe,
    EqualFilterPipe,
    GtFilterPipe,
    IsValidFilterPipe,
    AllFilterPipe,
    SortPipe,
    SortDescPipe,
    CountdownComponent,
    MaxItemsFilterPipe,
    DropZoneDirective,
    DragZoneDirective,
    CalendarPipe
    ]
})
export class UtilsModule {

}
