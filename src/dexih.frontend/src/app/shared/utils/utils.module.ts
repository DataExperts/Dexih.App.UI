import {NgModule} from '@angular/core';
import {TimeDirective} from './time.directive';
import { FieldFilterPipe } from './field-filter.pipe';
import { BooleanFilterPipe } from './boolean-filter.pipe';
import { IsValidFilterPipe } from './isValid-filter.pipe';
import { AllFilterPipe } from './all-filter.pipe';
import { SortPipe } from './sort.pipe';
import { SortDescPipe } from './sort.desc.pipe';
import { CountdownComponent } from './countdown.component';
import { MaxItemsFilterPipe } from './max-items-filter';
import { DropZoneDirective } from './dropzone';
import { DragZoneDirective } from './dragzone';
@NgModule({
  declarations: [
    TimeDirective,
    FieldFilterPipe,
    BooleanFilterPipe,
    IsValidFilterPipe,
    AllFilterPipe,
    SortPipe,
    SortDescPipe,
    CountdownComponent,
    MaxItemsFilterPipe,
    DropZoneDirective,
    DragZoneDirective
    ],
  imports: [
    ],
  exports: [
    TimeDirective,
    FieldFilterPipe,
    BooleanFilterPipe,
    IsValidFilterPipe,
    AllFilterPipe,
    SortPipe,
    SortDescPipe,
    CountdownComponent,
    MaxItemsFilterPipe,
    DropZoneDirective,
    DragZoneDirective
    ]
})
export class UtilsModule {

}
