import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonsModule} from './buttons/buttons.module';
import { WidgetsModule} from './widgets/widgets.module';
import { TablePreviewDataComponent } from './table/table-preview-data/table-preview-data.component';
import { FileFormatEditComponent } from './fileFormat';

@NgModule({
    imports: [
        SharedModule,
        ReactiveFormsModule,
        ButtonsModule,
        WidgetsModule
    ],
    declarations: [
        TablePreviewDataComponent,
        FileFormatEditComponent
    ],
    exports: [
        ButtonsModule,
        WidgetsModule
    ]
})
export class HubSharedModule {

}
