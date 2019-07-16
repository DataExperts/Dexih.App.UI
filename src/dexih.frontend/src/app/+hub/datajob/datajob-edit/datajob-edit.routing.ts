import { Routes, RouterModule } from '@angular/router';
import { DatajobEditComponent } from './datajob-edit.component';
import { DatajobEditPropertiesComponent } from './properties/datajob-edit-properties.component';
import { DatajobEditTriggerComponent } from './trigger-edit/datajob-edit-trigger.component';
import { DatajobEditStepComponent } from './step-edit/datajob-edit-step.component';
import { DatajobAddStepsComponent } from './steps-add/datajob-add-steps.component';
import { DatajobEditGuard} from './datajob-edit-guard';

export const datajobEditRoutes = [
        { path: '', redirectTo: 'properties',  data: { navigateSkip: true}},
        { path: 'properties', component: DatajobEditPropertiesComponent, data: { navigateSkip: true, pageTitle: 'Properties' } },
        { path: 'trigger', component: DatajobEditTriggerComponent, data: { pageTitle: 'New Trigger' } },
        { path: 'trigger/:triggerKey', component: DatajobEditTriggerComponent, data: { pageTitle: 'Edit Trigger' }  },
        { path: 'step', component: DatajobEditStepComponent, data: { pageTitle: 'New Step' }  },
        { path: 'step/:datalinkStepKey', component: DatajobEditStepComponent, data: { pageTitle: 'Edit Step' }  },
        { path: 'add-steps', component: DatajobAddStepsComponent, data: { pageTitle: 'Add Multiple Steps' }  }
];

export const routes: Routes = [
        { path: '', component: DatajobEditComponent, canDeactivate: [DatajobEditGuard], children: datajobEditRoutes},
];


export const Routing = RouterModule.forChild(routes);
