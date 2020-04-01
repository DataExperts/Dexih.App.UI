import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './public.component';
import { SharedDataComponent, PreviewComponent, PreviewDashboardComponent } from '../shared/ui/sharedData';

// insert the "hubs" routes once for the base, and once under the summary section to ensure the
// breadcrumbs are accurate.
export const routes: Routes = [
    {
        path: '',
        component: PublicComponent,
        children: [
            { path: '', redirectTo: 'index' },
            { path: 'index', data: { pageTitle: 'Shared Data' }, children : [
                { path: '', component: SharedDataComponent, data: { pageTitle: 'Shared Data' } },
                { path: 'preview/:hubKey/:objectType/:objectKey', component: PreviewComponent, data: { pageTitle: 'Preview' } },
                { path: 'previewDashboard/:hubKey/:dashboardKey', component: PreviewDashboardComponent, data: { pageTitle: 'Preview Dashboard' } },
            ] },
        ]
    }
];

export const Routing = RouterModule.forChild(routes);
