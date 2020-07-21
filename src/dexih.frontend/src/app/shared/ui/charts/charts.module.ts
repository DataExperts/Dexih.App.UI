import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartBuilderComponent } from './chartBuilder/chart-builder.component';
import { DComponentsModule } from 'ngx-d-components';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { GoogleMapComponent } from './googleMap/google-map.component';
import { ChartViewComponent } from './chartView/chart-view.component';
import { ComboChartComponent, ComboSeriesVerticalComponent } from './comboChart';
import { AngularResizedEventModule } from 'angular-resize-event';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DComponentsModule,
    NgxChartsModule,
    AngularResizedEventModule,
  ],
  declarations: [
    ChartBuilderComponent,
    ChartViewComponent,
    GoogleMapComponent,
    ComboChartComponent, ComboSeriesVerticalComponent
  ],
  exports: [ChartBuilderComponent, ChartViewComponent, GoogleMapComponent, ComboChartComponent],
})
export class ChartBuilderModule {

}
