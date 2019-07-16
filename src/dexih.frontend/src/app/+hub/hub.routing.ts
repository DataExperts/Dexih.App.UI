import { Routes, Route, RouterModule } from '@angular/router';
import { HubComponent } from './hub.component';
import { SummaryComponent } from './summary';
import { SearchComponent} from './search';
import { ItemEditGuard} from './item-edit.guard';


export const routes = [
{
    path: '',
    component: HubComponent,
    children: [
        { path: '', redirectTo: 'summary'},
        { path: 'summary', data: { pageTitle: 'Summary' }, children: (<Routes>[
            { path: '', pathMatch: 'full', component: SummaryComponent, data: { pageTitle: 'Summary' } },
            { path: '', loadChildren: () => import('./hub.base.module').then(m => m.HubBaseModule) }
         ])
        }
    ]}
];

export const Routing = RouterModule.forChild(routes);
