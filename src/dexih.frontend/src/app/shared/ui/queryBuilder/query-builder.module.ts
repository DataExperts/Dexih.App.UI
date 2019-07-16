import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QueryBuilderComponent } from './query-builder.component';
import { DexihComponentsModule } from 'dexih-ngx-components';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DexihComponentsModule
  ],
  declarations: [
    QueryBuilderComponent,
  ],
  exports: [QueryBuilderComponent],
})
export class QueryBuilderModule {

}
