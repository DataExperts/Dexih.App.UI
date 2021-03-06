import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { ButtonsModule} from '../buttons/buttons.module';
import { DatalinkStatusComponent } from './datalink-status/datalink-status.component';
import { ColumnValidationViewComponent } from './columnValidation-view/columnValidation-view.component';
import { ConnectionViewComponent } from './connection-view/connection-view.component';
import { DatajobViewComponent } from './datajob-view/datajob-view.component';
import { DatalinkViewComponent } from './datalink-view/datalink-view.component';
import { FileFormatViewComponent } from './fileFormat-view/fileFormat-view.component';
import { TableViewComponent } from './table-view/table-view.component';
import { TableColumnViewComponent } from './table-column-view/table-column-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewViewComponent } from './view-view/view-view.component';
import { ApiViewComponent } from './api-view/api-view.component';
import { ApiStatusComponent } from './api-status/api-status.component'
import { RemoteAgentViewComponent } from './remoteAgent-view/remoteAgent-view.component';
import { TransformPropertiesComponent } from './transform-properties/transform-properties.component';
import { TransformPropertiesItemComponent } from './transform-properties/transform-properties-item.component';
import { PreviewDataComponent } from './preview-data/preview-data.component';
import { InputParametersComponent } from './input-parameters/input-parameters.component'
import { InputParametersViewComponent } from './input-parameters-view/input-parameters-view.component'
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { ListOfValuesViewComponent } from './listOfValues-view/listOfValues-view.component';
import { DatalinkTestViewComponent } from './datalinkTest-view/datalinkTest-view.component';

@NgModule({
    imports: [
        SharedModule,
        ButtonsModule,
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [
        DatalinkStatusComponent,
        ColumnValidationViewComponent,
        ConnectionViewComponent,
        ColumnValidationViewComponent,
        DatalinkViewComponent,
        DatajobViewComponent,
        FileFormatViewComponent,
        TableViewComponent,
        TableColumnViewComponent,
        ViewViewComponent,
        ApiViewComponent,
        ApiStatusComponent,
        DashboardViewComponent,
        RemoteAgentViewComponent,
        TransformPropertiesComponent, TransformPropertiesItemComponent,
        PreviewDataComponent,
        InputParametersComponent,
        InputParametersViewComponent,
        ListOfValuesViewComponent,
        DatalinkTestViewComponent,
    ],
    declarations: [
        DatalinkStatusComponent,
        ColumnValidationViewComponent,
        ConnectionViewComponent,
        DatalinkViewComponent,
        DatajobViewComponent,
        FileFormatViewComponent,
        TableViewComponent,
        TableColumnViewComponent,
        ViewViewComponent,
        ApiViewComponent,
        ApiStatusComponent,
        DashboardViewComponent,
        RemoteAgentViewComponent,
        TransformPropertiesComponent, TransformPropertiesItemComponent,
        PreviewDataComponent,
        InputParametersComponent,
        InputParametersViewComponent,
        ListOfValuesViewComponent,
        DatalinkTestViewComponent,
    ],
    providers: [],
})
export class WidgetsModule { }
