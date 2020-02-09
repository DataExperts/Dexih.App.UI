import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routing } from './datajob-edit.routing';
import { SharedModule } from '../../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DatajobEditComponent } from './datajob-edit.component';
import { DatajobEditPropertiesComponent } from './properties/datajob-edit-properties.component';
import { DatajobEditTriggerComponent } from './trigger-edit/datajob-edit-trigger.component';
import { DatajobEditStepComponent } from './step-edit/datajob-edit-step.component';
import { DatajobAddStepsComponent } from './steps-add/datajob-add-steps.component';

import { DexihFormDaysOfWeekComponent } from './trigger-edit/dexih-form-daysofweek.component';
import { HubFormsService } from '../../hub.forms.service';
import { DatajobEditGuard } from './datajob-edit-guard';
import { HubSharedModule } from '../../hub.shared.module';

@NgModule({
    imports: [
        SharedModule,
        CommonModule,
        FormsModule,
        Routing,
        ReactiveFormsModule,
        HubSharedModule
    ],
    declarations: [
        DatajobEditComponent,
        DatajobEditPropertiesComponent,
        DatajobEditTriggerComponent,
        DatajobEditStepComponent,
        DatajobAddStepsComponent,
        DexihFormDaysOfWeekComponent
    ],
    providers: [ HubFormsService, DatajobEditGuard ],
    exports: []
})
export class DatajobEditModule {

    static forRoot(): ModuleWithProviders<DatajobEditModule> {
        return {
            ngModule: DatajobEditModule,
            providers: [ HubFormsService ]
        };
    }
}
