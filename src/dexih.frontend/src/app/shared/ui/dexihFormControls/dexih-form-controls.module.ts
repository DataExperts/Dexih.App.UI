import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DexihInvalidFormIconComponent } from './dexih-invalid-form-icon/dexih-invalid-form-icon.component';
import { DexihInvalidFormDetailsComponent } from './dexih-invalid-form-details/dexih-invalid-form-details.component';
import { DexihComponentsModule } from 'dexih-ngx-components';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    DexihComponentsModule
  ],
  declarations: [
    DexihInvalidFormIconComponent,
    DexihInvalidFormDetailsComponent
  ],
  exports: [
    DexihInvalidFormIconComponent,
    DexihInvalidFormDetailsComponent
  ],
})
export class DexihFormControlsModule {

}
