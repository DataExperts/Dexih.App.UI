import {NgModule, ModuleWithProviders} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SupportOptionsComponent } from './support-options.component';
import { DexihComponentsModule } from 'dexih-ngx-components';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DexihComponentsModule,
  ],
  declarations: [
    SupportOptionsComponent,
  ],
  exports: [
    SupportOptionsComponent
  ],
})
export class DexihSupportOptionsModule {
}
