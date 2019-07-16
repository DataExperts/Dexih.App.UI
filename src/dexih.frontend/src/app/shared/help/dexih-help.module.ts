import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DexihHelpComponent } from './dexih-help.component';
import { DexihComponentsModule} from 'dexih-ngx-components';
// import { DexihWidgetModule, DexihWidgetComponent } from '../ui/dexihWidget';
import { NgxMdModule } from 'ngx-md';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // DexihWidgetModule,
    DexihComponentsModule,
    NgxMdModule
  ],
  declarations: [DexihHelpComponent],
  exports: [DexihHelpComponent],
})
export class DexihHelpModule {

}
