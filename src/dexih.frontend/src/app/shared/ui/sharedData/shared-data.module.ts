import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedDataComponent, PreviewDataComponent, PreviewDashboardComponent, PreviewDashboardItemComponent,
  PreviewComponent, InputParametersViewComponent} from './';
import { DexihComponentsModule } from 'dexih-ngx-components';
import { DexihTableModule} from 'dexih-ngx-table';
import { ChartBuilderModule } from '../chartBuilder/chart-builder.module';
import { GridsterModule} from 'angular-gridster2';
import { DexihMessageModule } from '../dexihMessage';
import { DexihIconsModule } from '../icons';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DexihComponentsModule,
    DexihTableModule,
    ChartBuilderModule,
    GridsterModule,
    DexihMessageModule,
    DexihIconsModule
  ],
  declarations: [
    SharedDataComponent, PreviewDataComponent, PreviewDashboardComponent, PreviewDashboardItemComponent, PreviewComponent,
    InputParametersViewComponent
  ],
  exports: [],
})
export class SharedDataModule {

}
