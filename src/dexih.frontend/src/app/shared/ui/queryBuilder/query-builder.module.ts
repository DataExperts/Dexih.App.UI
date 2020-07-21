import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QueryBuilderComponent } from './query-builder.component';
import { DComponentsModule } from 'ngx-d-components';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DComponentsModule
  ],
  declarations: [
    QueryBuilderComponent,
  ],
  exports: [QueryBuilderComponent],
})
export class QueryBuilderModule {

}
