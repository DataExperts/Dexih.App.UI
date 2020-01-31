import {Routes, RouterModule} from '@angular/router';
import {MainLayoutComponent} from './shared/layout/app-layouts/main-layout.component';
import {AuthLayoutComponent} from './shared/layout/app-layouts/auth-layout.component';
import { LayoutGuard } from './shared/layout/layout.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'hubs', pathMatch: 'full' },
    { path: 'admin',  canActivate: [LayoutGuard],
        component: MainLayoutComponent, loadChildren:  () => import('./+admin/admin.module').then(m => m.AdminModule), data: { pageTitle: '' } },
    { path: 'hubs',  canActivate: [LayoutGuard],
        component: MainLayoutComponent, loadChildren:  () => import('./+hubs/hubs.module').then(m => m.HubsModule), data: { pageTitle: '' } },
    { path: 'hub/:hubKey', canActivate: [LayoutGuard],
        component: MainLayoutComponent, loadChildren: () => import('./+hub/hub.module').then(m => m.HubModule), data: { pageTitle: 'Hub' } },
    { path: 'auth', component: AuthLayoutComponent, loadChildren: () => import('./+auth/auth.module').then(m => m.AuthModule) },

    { path: 'terms', redirectTo: '/auth/terms', pathMatch: 'full'},
    { path: 'privacy', redirectTo: '/help?path=policies%2Fprivacy.md', pathMatch: 'full'},
    { path: 'unsubscribe', redirectTo: '/hubs/index/manage', pathMatch: 'full' },

    { path: '**', redirectTo: 'hubs' }
    //
];

export const routing = RouterModule.forRoot(routes);
