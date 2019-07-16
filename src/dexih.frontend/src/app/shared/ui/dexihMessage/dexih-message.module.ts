import {NgModule, ModuleWithProviders} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DexihMessageComponent } from './dexih-message.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    DexihMessageComponent,
  ],
  exports: [
    DexihMessageComponent
  ],
})
export class DexihMessageModule {
}
