import { ModuleWithProviders, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { ColumnValidationEditComponent, ColumnValidationIndexComponent } from './columnValidation';
import { ConnectionEditComponent, ConnectionImportComponent, ConnectionIndexComponent } from './connection';
import { ImportComponent, ExportComponent } from './copy';
import { DatajobIndexComponent } from './datajob';
import { DatalinkIndexComponent, DatalinkNewComponent } from './datalink';
import { DatalinkPreviewDataComponent } from './datalink/datalink-preview-data';
import { FileFormatIndexComponent } from './fileFormat';
import { FilesManageComponent, FilesBulkLoadComponent } from './files';
import { BaseRouting } from './hub.base.routing';
import { HubService } from './hub.service';
import { HubSharedModule } from './hub.shared.module';
import { HubVariableEditComponent, HubVariableIndexComponent } from './hubVariable';
import { ItemEditGuard } from './item-edit.guard';
import { ManageUsersIndexComponent } from './manage/manage-users-index/manage-users-index.component';
import { RemoteAgentEditComponent, RemoteAgentIndexComponent } from './remoteAgent';
import { ResultsIndexComponent } from './results';
import { ResultsViewModule } from './results/results-view/results-view.module';
import { SharedDataIndexComponent } from './sharedData/sharedData-index.component';
import { TableIndexComponent } from './table/table-index';
import { CustomFunctionIndexComponent, CustomFunctionEditComponent, CustomFunctionParameterComponent } from './customFunction';
import { DatalinkTestIndexComponent, DatalinkTestNewComponent } from './test'
import { ViewIndexComponent } from './view/view-index';
import { ViewEditComponent } from './view/view-edit';
import { DashboardIndexComponent } from './dashboard';
import { ApiIndexComponent } from './api/api-index';
import { ApiEditComponent } from './api/api-edit';
import { DatalinkRunComponent } from './datalink/datalink-run/datalink-run.component';
import { SearchModule} from './search';
import { DatajobRunComponent } from './datajob/datajob-run/datajob-run.component';

@NgModule({
    imports: [
        SharedModule,
        BaseRouting,
        ReactiveFormsModule,
        HubSharedModule,
        ResultsViewModule,
        SearchModule,
    ],
    declarations: [
        ConnectionIndexComponent,
        ConnectionEditComponent,
        ConnectionImportComponent,
        DatalinkIndexComponent,
        DatalinkPreviewDataComponent,
        DatalinkRunComponent,
        DatajobRunComponent,
        TableIndexComponent,
        DatalinkNewComponent,
        RemoteAgentIndexComponent,
        RemoteAgentEditComponent,
        ResultsIndexComponent,
        DatajobIndexComponent,
        ColumnValidationIndexComponent, ColumnValidationEditComponent,
        FileFormatIndexComponent,
        ViewIndexComponent, ViewEditComponent,
        ApiIndexComponent, ApiEditComponent,
        HubVariableEditComponent, HubVariableIndexComponent,
        ImportComponent, ExportComponent,
        FilesManageComponent,
        ManageUsersIndexComponent,
        SharedDataIndexComponent,
        CustomFunctionIndexComponent, CustomFunctionEditComponent, CustomFunctionParameterComponent,
        DatalinkTestIndexComponent, DatalinkTestNewComponent,
        DashboardIndexComponent
    ],
    providers: [ ItemEditGuard ],
    exports: [ ]
})
export class HubBaseModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: HubBaseModule,
            providers: [HubService, ItemEditGuard]
        };
    }
}
