import { NgModule, ModuleWithProviders} from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule} from '@angular/forms';
import { RouterModule} from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { BsDropdownModule, ModalModule } from 'ngx-bootstrap';

import { LayoutService} from './layout/layout.service';
import { LayoutModule } from './layout';
import { UtilsModule} from './utils/utils.module';
import { DexihTableModule} from 'dexih-ngx-table';
import { DexihMessageModule } from './ui/dexihMessage';
import { DexihFormControlsModule } from './ui/dexihFormControls';
import { DexihComponentsModule } from 'dexih-ngx-components';
import { DexihHelpModule } from './help/dexih-help.module';
import { NgxMdModule } from 'ngx-md';
import { DexihIconsModule } from './ui/icons'
import { QueryBuilderModule } from './ui/queryBuilder/query-builder.module';
import { ChartBuilderModule } from './ui/chartBuilder/chart-builder.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  imports: [
    CommonModule, FormsModule, RouterModule,

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
  ],
  declarations: [
  ],
  exports: [
    CommonModule, FormsModule, RouterModule, DragDropModule,

    BsDropdownModule,
    LayoutModule,
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
  ],
  providers: [
    LayoutService
  ]

})
export class SharedModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        LayoutService
      ]
    };
  }
}
