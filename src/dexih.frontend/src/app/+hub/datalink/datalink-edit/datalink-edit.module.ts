import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routing } from './datalink-edit.routing';
import { SharedModule } from '../../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DatalinkEditService } from './datalink-edit.service';
import { HubFormsService } from '../../hub.forms.service';

import { DatalinkEditComponent } from './datalink-edit.component';
import { DatalinkEditPropertiesComponent } from './properties/datalink-edit-properties.component';
import { DatalinkEditSourceTableComponent } from './source-table/datalink-edit-source-table.component';
import { DatalinkEditTargetTableComponent } from './target/datalink-edit-target-table.component';
import { DatalinkEditTargetComponent } from './target/datalink-edit-target.component';
import { DatalinkEditTransformComponent } from './transform/datalink-edit-transform.component';
import { DatalinkEditValidationComponent } from './validation/datalink-edit-validation.component';
import { DatalinkEditProfileRulesComponent } from './profile-rules/profile-rules.component';
import { DatalinkEditSaveButtonComponent } from './save-button/datalink-edit-save-button.component';
import { DatalinkRunPlanComponent } from './run-plan/datalink-run-plan.component';
import { DatalinkEditNewTransformComponent } from './new-transform/datalink-edit-new-transform.component';
import { StandardFunctionEditComponent }  from './standard-function-edit';
import { CustomFunctionEditComponent } from './custom-function-edit';
import { UnGroupEditComponent } from './unGroup-edit';
import { OutputColumnComponent, OutputColumnsComponent } from './output-columns';
import { JoinColumnComponent, JoinColumnsComponent } from './join-columns';
import { InputColumnsComponent, InputColumnComponent } from './input-columns';
import { MappingEditComponent } from './mapping-edit';
import { MappingComponent, MappingItemComponent } from './mapping';
import { PreviewDataComponent } from './preview-data';
import { PreviewTableComponent} from './preview-table';
import { DatalinkEditGuard } from './datalink-edit-guard';
import { TransformTableEditComponent } from './transform-table-edit/transform-table-edit.component';
import { DatalinkEditTransformsComponent } from './transforms/datalink-edit-transforms.component';
import { HubSharedModule } from '../../hub.shared.module';
import { TargetTableColumnComponent } from './target-table-column/target-table-column.component';
import { TableSharedModule } from '../../table/table.shared.module';
import { DatalinkTableComponent } from './datalink-table/datalink-table.component'
import { DatalinkColumnEditComponent } from './datalink-column-edit/datalink-column-edit.component'
import { ResultsViewModule } from '../../results/results-view/results-view.module';
import { InputParameterComponent, OutputParameterComponent} from './parameters'
import { TargetColumnsComponent, TargetColumnComponent} from './target-columns';
import { DatalinkPreviewDataComponent } from '../datalink-preview-data';

@NgModule({
    imports: [
        SharedModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        Routing,
        HubSharedModule,
        TableSharedModule,
        ResultsViewModule
    ],
    declarations: [
        DatalinkEditComponent,
        DatalinkEditPropertiesComponent,
        DatalinkEditSourceTableComponent,
        DatalinkEditTargetTableComponent,
        DatalinkEditTargetComponent,
        DatalinkEditTransformComponent,
        DatalinkEditValidationComponent,
        DatalinkEditProfileRulesComponent,
        DatalinkRunPlanComponent,
        StandardFunctionEditComponent,
        CustomFunctionEditComponent,
        OutputColumnComponent, OutputColumnsComponent,
        JoinColumnComponent, JoinColumnsComponent,
        InputColumnsComponent, InputColumnComponent,
        TargetColumnsComponent, TargetColumnComponent,
        MappingEditComponent,
        MappingComponent, MappingItemComponent,
        PreviewDataComponent,
        PreviewTableComponent,
        // DatalinkPreviewDataComponent,
        TransformTableEditComponent,
        DatalinkEditTransformsComponent,
        DatalinkEditSaveButtonComponent,
        DatalinkEditNewTransformComponent,
        TargetTableColumnComponent,
        DatalinkTableComponent,
        DatalinkColumnEditComponent,
        InputParameterComponent, OutputParameterComponent,
        UnGroupEditComponent
    ],
    providers: [ DatalinkEditService, HubFormsService, DatalinkEditGuard ],
    exports: []
})
export class DatalinkEditModule {

    static forRoot(): ModuleWithProviders<DatalinkEditModule> {
        return {
            ngModule: DatalinkEditModule,
            providers: [ DatalinkEditService, HubFormsService ]
        };
    }
}
