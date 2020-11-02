import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartBuilderComponent } from './chartBuilder/chart-builder.component';
import { ChartSeriesComponent } from './chartBuilder/chart-series.component';
import { DComponentsModule } from 'ngx-d-components';
import { GoogleMapComponent } from './googleMap/google-map.component';
import { ChartViewComponent } from './chartView/chart-view.component';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DComponentsModule,
    ChartsModule,
  ],
  declarations: [
    ChartBuilderComponent,
    ChartSeriesComponent,
    ChartViewComponent,
    GoogleMapComponent,
  ],
  exports: [ChartBuilderComponent, ChartViewComponent, GoogleMapComponent],
})
export class ChartBuilderModule {

}
