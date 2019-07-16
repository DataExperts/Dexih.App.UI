
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableEditPropertiesComponent } from './table-edit/table-edit-properties/table-edit-properties.component';
import { TableEditColumnsComponent } from './table-edit//table-edit-columns/table-edit-columns.component';
import { TableEditFileComponent } from './table-edit/table-edit-file/table-edit-file.component';
import { TableEditRestComponent } from './table-edit/table-edit-rest/table-edit-rest.component';
import { TableEditInputColumnComponent } from './table-edit//table-edit-rest/table-edit-input-column.component';
import { HubSharedModule } from '../hub.shared.module';
import { TableEditPreviewDataComponent } from './table-edit//table-edit-preview-data';
import { ColumnEditComponent, ColumnEditBaseComponent } from './column-edit';
import { ColumnEditBulkComponent } from './table-edit/column-edit-bulk/column-edit-bulk.component';
@NgModule({
    imports: [
        SharedModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HubSharedModule
    ],
    declarations: [
      TableEditPropertiesComponent,
      TableEditColumnsComponent,
      TableEditFileComponent,
      TableEditRestComponent,
      TableEditInputColumnComponent,
      TableEditPreviewDataComponent,
      ColumnEditComponent, ColumnEditBaseComponent,
      ColumnEditBulkComponent
    ],
    exports: [
      TableEditPropertiesComponent,
      TableEditColumnsComponent,
      TableEditFileComponent,
      TableEditRestComponent,
      TableEditInputColumnComponent,
      TableEditPreviewDataComponent,
      ColumnEditComponent, ColumnEditBaseComponent,
      ColumnEditBulkComponent
    ]
})
export class TableSharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: TableSharedModule,
        };
    }
}
