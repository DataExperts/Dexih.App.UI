import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DexihDialogComponent } from './dexihdialog.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [DexihDialogComponent],
  exports: [DexihDialogComponent],
})
export class DexihDialogModule {

}
