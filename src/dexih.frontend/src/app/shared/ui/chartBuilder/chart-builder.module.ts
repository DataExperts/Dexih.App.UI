import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartBuilderComponent } from './chart-builder.component';
import { DexihComponentsModule } from 'dexih-ngx-components';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { GoogleMapComponent } from './google-map.component';
import { ChartViewComponent } from './chart-view.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DexihComponentsModule,
    NgxChartsModule,
  ],
  declarations: [
    ChartBuilderComponent,
    ChartViewComponent,
    GoogleMapComponent
  ],
  exports: [ChartBuilderComponent, ChartViewComponent, GoogleMapComponent],
})
export class ChartBuilderModule {

}
