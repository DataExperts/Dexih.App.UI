import { DashboardEditComponent } from './dashboard-edit.component';
import { ViewEditComponent } from '../../view';
import { ItemEditGuard } from '../../item-edit.guard';
import { RouterModule, Routes } from '@angular/router';
import { DashboardPropertiesComponent } from './properties/dashboard-properties.component';

export const dashboardEditRoutes = [
    { path: '', redirectTo: 'properties'},
    { path: 'properties', component: DashboardPropertiesComponent,  data: { navigateSkip: true} },
    { path: 'view-edit/:viewKey', component: ViewEditComponent,  data: { action: 'edit', pageTitle: 'Edit View'} },
    { path: 'view-new', component: ViewEditComponent, data: { action: 'new', pageTitle: 'New View'}}
];

export const routes: Routes = [
    { path: '', component: DashboardEditComponent, canDeactivate: [ItemEditGuard], children: dashboardEditRoutes},
];

export const Routing = RouterModule.forChild(routes);
