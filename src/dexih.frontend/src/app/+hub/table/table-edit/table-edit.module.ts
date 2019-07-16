import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routing } from './table-edit.routing';
import { TableEditComponent } from './table-edit.component';
import { TableEditMainComponent } from './table-edit-main.component';
import { HubSharedModule } from '../../hub.shared.module';
import { ItemEditGuard } from '../../item-edit.guard';
import { HubFormsService } from '../../hub.forms.service';
import { TableColumnEditComponent } from './table-column-edit/table-column-edit.component';
import { TableSharedModule } from '../table.shared.module';

@NgModule({
    imports: [
        SharedModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        Routing,
        HubSharedModule,
        TableSharedModule
    ],
    declarations: [
      TableEditComponent,
      TableEditMainComponent,
      TableColumnEditComponent,
    ],
    providers: [
        HubFormsService,
        ItemEditGuard
        ],
    exports: [
    ]
})
export class TableEditModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: TableEditModule,
            providers: [ HubFormsService ]
        };
    }
}
