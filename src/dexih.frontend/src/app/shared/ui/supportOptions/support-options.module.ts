import {NgModule, ModuleWithProviders} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SupportOptionsComponent } from './support-options.component';
import { DComponentsModule } from 'ngx-d-components';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DComponentsModule,
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
