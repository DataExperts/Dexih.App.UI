import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DexihHelpComponent } from './dexih-help.component';
import { DComponentsModule} from 'ngx-d-components';
import { DMarkdownModule } from 'ngx-d-markdown';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    DComponentsModule,
    DMarkdownModule
  ],
  declarations: [DexihHelpComponent],
  exports: [DexihHelpComponent],
})
export class DexihHelpModule {

}
