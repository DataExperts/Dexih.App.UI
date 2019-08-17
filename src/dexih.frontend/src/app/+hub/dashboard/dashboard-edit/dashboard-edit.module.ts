import { NgModule, ModuleWithProviders } from '@angular/core';

import { DashboardEditComponent } from './dashboard-edit.component';
import { DashboardItemComponent } from './item/dashboard-item.component';
import { HubFormsService } from '../../hub.forms.service';
import { ItemEditGuard } from '../../item-edit.guard';
import { SharedModule } from '../../../shared';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routing } from './dashboard-edit.routing';
import { HubSharedModule } from '../../hub.shared.module';
import { DashboardPropertiesComponent } from './properties//dashboard-properties.component';

@NgModule({
    imports: [
        SharedModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        Routing,
        HubSharedModule,
    ],
    exports: [],
    declarations: [
        DashboardEditComponent,
        DashboardItemComponent,
        DashboardPropertiesComponent],
    providers: [
        HubFormsService,
        ItemEditGuard
    ],
})
export class DashboardEditModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: DashboardEditModule,
            providers: [ HubFormsService ]
        };
    }
}
