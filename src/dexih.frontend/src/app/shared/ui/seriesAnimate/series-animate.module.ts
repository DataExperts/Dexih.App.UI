import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SeriesAnimateComponent } from './series-animate.component';
import { SeriesAnimatePropertiesComponent } from './series-animate-properties.component';
import { DComponentsModule } from 'ngx-d-components';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DComponentsModule
  ],
  declarations: [
    SeriesAnimateComponent,
    SeriesAnimatePropertiesComponent
  ],
  exports: [SeriesAnimateComponent, SeriesAnimatePropertiesComponent],
})
export class SeriesAnimateModule {

}
