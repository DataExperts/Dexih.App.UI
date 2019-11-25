import { NgModule, ModuleWithProviders } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { CancelButtonComponent, SaveButtonComponent } from './';
import { NewDatalinkButtonComponent } from './new-datalink-button/new-datalink-button.component';
import { NewConnectionButtonComponent } from './new-connection-button/new-connection-button.component';
import { NewTableButtonComponent} from './new-table-button/new-table-button.component';
import { ActionsDatajobButtonComponent } from './actions-datajob-button/actions-datajob-button.component'
import { ActionsDatalinkButtonComponent } from './actions-datalink-button/actions-datalink-button.component'
import { ActionsConnectionButtonComponent } from './actions-connection-button/actions-connection-button.component';
import { ActionsTableButtonComponent } from './actions-table-button/actions-table-button.component';
import { ActionsFileFormatButtonComponent } from './actions-fileFormat-button/actions-fileFormat-button.component';
import { ActionsColumnValidationButtonComponent } from './actions-columnValidation-button/actions-columnValidation-button.component';
import { ActionsDatalinkTestButtonComponent } from './actions-datalinkTest-button/actions-datalinkTest-button.component';
import { ActionsViewButtonComponent } from './actions-view-button/actions-view-button.component';
import { ActionsApiButtonComponent } from './actions-api-button/actions-api-button.component';
import { ActionsDashboardButtonComponent } from './actions-dashboard-button/actions-dashboard-button.component';
import { ActionsListOfValuesButtonComponent } from './actions-listOfValues-button/actions-listOfValues-button.component';

@NgModule({
    imports: [
        SharedModule
    ],
    exports: [
        CancelButtonComponent,
        SaveButtonComponent,
        NewDatalinkButtonComponent,
        NewConnectionButtonComponent,
        NewTableButtonComponent,
        ActionsDatajobButtonComponent,
        ActionsDatalinkButtonComponent,
        ActionsConnectionButtonComponent,
        ActionsTableButtonComponent,
        ActionsFileFormatButtonComponent,
        ActionsColumnValidationButtonComponent,
        ActionsDatalinkTestButtonComponent,
        ActionsViewButtonComponent,
        ActionsApiButtonComponent,
        ActionsDashboardButtonComponent,
        ActionsListOfValuesButtonComponent
    ],
    declarations: [
        CancelButtonComponent,
        SaveButtonComponent,
        NewDatalinkButtonComponent,
        NewConnectionButtonComponent,
        NewTableButtonComponent,
        ActionsDatajobButtonComponent,
        ActionsDatalinkButtonComponent,
        ActionsConnectionButtonComponent,
        ActionsTableButtonComponent,
        ActionsFileFormatButtonComponent,
        ActionsColumnValidationButtonComponent,
        ActionsDatalinkTestButtonComponent,
        ActionsViewButtonComponent,
        ActionsApiButtonComponent,
        ActionsDashboardButtonComponent,
        ActionsListOfValuesButtonComponent
    ],
    providers: [],
})
export class ButtonsModule { }
