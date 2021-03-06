import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';

import { DTableModule } from 'ngx-d-table';
import { DComponentsModule } from 'ngx-d-components';
import { DMarkdownModule } from 'ngx-d-markdown';
import { GridsterModule } from 'angular-gridster2';

import { LayoutService } from './layout/layout.service';
import { UtilsModule } from './utils/utils.module';
import { DexihMessageModule } from './ui/dexihMessage';
import { DexihFormControlsModule } from './ui/dexihFormControls';
import { DexihHelpModule } from './help/dexih-help.module';
import { DexihIconsModule } from './ui/icons'
import { QueryBuilderModule } from './ui/queryBuilder/query-builder.module';
import { ChartBuilderModule } from './ui/charts/charts.module';
import { DexihSupportOptionsModule } from './ui/supportOptions/support-options.module'
import { SharedDataModule } from './ui/sharedData/shared-data.module';
import { SeriesAnimateModule } from './ui/seriesAnimate/series-animate.module';
import { ChartsModule } from 'ng2-charts';

@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule, HttpClientModule,

    DragDropModule,

    DMarkdownModule,
    DComponentsModule,
    DTableModule,
    GridsterModule,

    DexihMessageModule,
    DexihFormControlsModule,
    DexihHelpModule,
    DexihIconsModule,
    QueryBuilderModule,
    ChartBuilderModule,
    DexihSupportOptionsModule,
    SharedDataModule,
    SeriesAnimateModule,
    ChartsModule,
  ],
  declarations: [
  ],
  exports: [
    CommonModule, FormsModule, RouterModule, DragDropModule,

    DComponentsModule,
    DTableModule,
    GridsterModule,

    UtilsModule,
    DexihMessageModule,
    DexihFormControlsModule,
    DexihHelpModule,
    DexihIconsModule,
    QueryBuilderModule,
    ChartBuilderModule,
    DexihSupportOptionsModule,
    SeriesAnimateModule,
    ChartsModule,
  ],
  providers: [
    LayoutService,
    HttpClientModule
  ]

})
export class SharedModule {

  static forRoot(): ModuleWithProviders<SharedModule> {
    return {
      ngModule: SharedModule,
      providers: [
        LayoutService
      ]
    };
  }
}
