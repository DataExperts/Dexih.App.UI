import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartBuilderComponent } from './chart-builder.component';
import { DComponentsModule } from 'ngx-d-components';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { GoogleMapComponent } from '../googleMap/google-map.component';
import { ComboChartComponent } from '../comboChart';
import { AngularResizedEventModule } from 'angular-resize-event';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DComponentsModule,
    NgxChartsModule,
    AngularResizedEventModule,
    ComboChartComponent
  ],
  declarations: [
    ChartBuilderComponent,
    GoogleMapComponent
  ],
  exports: [ChartBuilderComponent, GoogleMapComponent],
})
export class ChartBuilderModule {

}
