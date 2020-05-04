import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SeriesAnimateComponent } from './series-animate.component';
import { DexihComponentsModule } from 'dexih-ngx-components';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DexihComponentsModule
  ],
  declarations: [
    SeriesAnimateComponent,
  ],
  exports: [SeriesAnimateComponent],
})
export class SeriesAnimateModule {

}
