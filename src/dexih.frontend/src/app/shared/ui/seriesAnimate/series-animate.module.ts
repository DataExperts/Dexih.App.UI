import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SeriesAnimateComponent } from './series-animate.component';
import { DComponentsModule } from 'ngx-d-components';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DComponentsModule
  ],
  declarations: [
    SeriesAnimateComponent,
  ],
  exports: [SeriesAnimateComponent],
})
export class SeriesAnimateModule {

}
