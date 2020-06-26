import { NgModule, ModuleWithProviders} from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule} from '@angular/forms';
import { RouterModule} from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule } from '@angular/common/http';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';

import { LayoutService} from './layout/layout.service';
import { UtilsModule} from './utils/utils.module';
import { DexihTableModule} from 'dexih-ngx-table';
import { DexihMessageModule } from './ui/dexihMessage';
import { DexihFormControlsModule } from './ui/dexihFormControls';
import { DexihComponentsModule } from 'dexih-ngx-components';
import { DexihHelpModule } from './help/dexih-help.module';
import { NgxMdModule } from 'ngx-md';
import { DexihIconsModule } from './ui/icons'
import { QueryBuilderModule } from './ui/queryBuilder/query-builder.module';
import { ChartBuilderModule } from './ui/charts/charts.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { GridsterModule} from 'angular-gridster2';
import { DexihSupportOptionsModule } from './ui/supportOptions/support-options.module'
import { SharedDataModule} from './ui/sharedData/shared-data.module';
import { SeriesAnimateModule } from './ui/seriesAnimate/series-animate.module';

@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule, HttpClientModule,

    DragDropModule,

    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    NgxMdModule.forRoot(),

    DexihTableModule,
    DexihMessageModule,
    DexihFormControlsModule,
    DexihComponentsModule,
    DexihHelpModule,
    DexihIconsModule,
    QueryBuilderModule,
    ChartBuilderModule,
    NgxChartsModule,
    GridsterModule,
    DexihSupportOptionsModule,
    SharedDataModule,
    SeriesAnimateModule
  ],
  declarations: [
  ],
  exports: [
    CommonModule, FormsModule, RouterModule, DragDropModule,

    BsDropdownModule,
    UtilsModule,
    NgxMdModule,

    DexihTableModule,
    DexihMessageModule,
    DexihFormControlsModule,
    DexihComponentsModule,
    DexihHelpModule,
    DexihIconsModule,
    QueryBuilderModule,
    ChartBuilderModule,
    NgxChartsModule,
    GridsterModule,
    DexihSupportOptionsModule,
    SeriesAnimateModule
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
