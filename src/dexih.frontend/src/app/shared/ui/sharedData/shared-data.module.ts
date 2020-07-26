import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DComponentsModule } from 'ngx-d-components';
import { DTableModule} from 'ngx-d-table';
import { DMarkdownModule } from 'ngx-d-markdown';
import { GridsterModule} from 'angular-gridster2';

import { SharedDataComponent, PreviewDataComponent, PreviewDashboardComponent, PreviewDashboardItemComponent,
  PreviewComponent, InputParametersViewComponent} from './';
import { ChartBuilderModule } from '../charts/charts.module';
import { DexihMessageModule } from '../dexihMessage';
import { DexihIconsModule } from '../icons';
import { SeriesAnimateModule} from '../seriesAnimate/series-animate.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
   DComponentsModule,
   DTableModule,
    DMarkdownModule,
    ChartBuilderModule,
    GridsterModule,
    DexihMessageModule,
    DexihIconsModule,
    SeriesAnimateModule,
  ],
  declarations: [
    SharedDataComponent, PreviewDataComponent, PreviewDashboardComponent, PreviewDashboardItemComponent, PreviewComponent,
    InputParametersViewComponent
  ],
  exports: [],
})
export class SharedDataModule {

}
