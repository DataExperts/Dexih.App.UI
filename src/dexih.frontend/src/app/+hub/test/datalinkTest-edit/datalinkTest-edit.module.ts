import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routing } from './datalinkTest-edit.routing';
import { SharedModule } from '../../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DatalinkTestEditComponent } from './datalinkTest-edit.component';
import { DatalinkTestPropertiesComponent } from './properties/datalinkTest-properties.component';
import { DatalinkTestEditStepComponent } from './step-edit/datalinkTest-edit-step.component';

import { HubFormsService } from '../../hub.forms.service';
import { DatalinkTestEditGuard } from './datalinkTest-edit-guard';
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
        DatalinkTestEditComponent,
        DatalinkTestPropertiesComponent,
        DatalinkTestEditStepComponent,
    ],
    providers: [ HubFormsService, DatalinkTestEditGuard ],
    exports: []
})
export class DatalinkTestEditModule {

    static forRoot(): ModuleWithProviders {
        return {
            ngModule: DatalinkTestEditModule,
            providers: [ HubFormsService ]
        };
    }
}
