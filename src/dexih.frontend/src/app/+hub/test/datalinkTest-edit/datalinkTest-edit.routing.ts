import { Routes, RouterModule } from '@angular/router';
import { DatalinkTestEditComponent } from './datalinkTest-edit.component';
import { DatalinkTestPropertiesComponent } from './properties/datalinkTest-properties.component';
import { DatalinkTestEditStepComponent } from './step-edit/datalinkTest-edit-step.component';
import { DatalinkTestEditGuard} from './datalinkTest-edit-guard';

export const editRoutes = [
        { path: '', redirectTo: 'properties',  data: { navigateSkip: true}},
        { path: 'properties', component: DatalinkTestPropertiesComponent, data: { navigateSkip: true, pageTitle: 'Properties' } },
        { path: 'step', component: DatalinkTestEditStepComponent, data: { pageTitle: 'New Step' }  },
        { path: 'step/:datalinkTestStepKey', component: DatalinkTestEditStepComponent, data: { pageTitle: 'Edit Step' }  },
];

export const routes: Routes = [
        { path: '', component: DatalinkTestEditComponent, canDeactivate: [DatalinkTestEditGuard], children: editRoutes},
];

export const Routing = RouterModule.forChild(routes);
