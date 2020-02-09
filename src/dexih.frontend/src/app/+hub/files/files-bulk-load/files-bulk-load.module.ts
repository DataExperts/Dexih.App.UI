import { NgModule, ModuleWithProviders } from '@angular/core';
import { TableSharedModule } from '../../table/table.shared.module';
import { HubFormsService } from '../../hub.forms.service';
import { ItemEditGuard } from '../../item-edit.guard';
import { Routing } from './files-bulk-load.routing';
import { FilesBulkLoadComponent } from './files-bulk-load.component';
import { SharedModule } from '../../../shared';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableColumnEditComponent } from './table-column-edit.component';
import { TableEditComponent } from './table-edit.component';

@NgModule({
    imports: [
        SharedModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        TableSharedModule,
        Routing
    ],
    exports: [],
    declarations: [
        FilesBulkLoadComponent,
        TableColumnEditComponent,
        TableEditComponent
    ],
    providers: [
        HubFormsService,
        ItemEditGuard
    ],
})
export class FilesBulkLoadModule {
    static forRoot(): ModuleWithProviders<FilesBulkLoadModule> {
        return {
            ngModule: FilesBulkLoadModule,
            providers: [ HubFormsService ]
        };
    }
}
