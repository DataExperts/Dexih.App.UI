import { Routes, RouterModule } from '@angular/router';
import { HubsComponent } from './hubs.component';
import { HubIndexComponent } from './hub-index/hub-index.component';
import { HubEditComponent } from './hub-edit/hub-edit.component';
import { HubsSummaryComponent} from './hubs-summary/hubs-summary.component';
import { ManageComponent } from './manage/manage.component';
import { TasksIndexComponent } from './tasks/tasks-index';
import { TaskViewComponent } from './tasks/task-view';
import { NotificationsIndexComponent } from './notifications/notification-index';
import { NotificationViewComponent } from './notifications/notification-view';
import { HubsSharedDataComponent, PreviewDataComponent} from './hubs-sharedData';
import { RemoteAgentsComponent} from './remoteAgents/remote-agents/remote-agents.component';
import { HelpComponent } from './help';
import { RemoteAgentDownloadComponent } from './remoteAgents/remoteAgent-download';
import { RemoteAgentEditComponent } from './remoteAgents/remoteAgent-edit';
import { RemoteAgentTokenComponent } from './remoteAgents/remote-agent-token/remote-agent-token.component';

const hubsView: Routes = [
    { path: '', component: HubIndexComponent, data: { pageTitle: 'Hubs View' } },
    { path: 'hub-edit/:hubKey', component: HubEditComponent, data: { action: 'Edit', pageTitle: 'Edit Hub' } },
    { path: 'hub-new', component: HubEditComponent, data: { action: 'New', pageTitle: 'New Hub' } },
];

// create a set of routes available from the "hubs" section.
const baseRoutes: Routes = [
    { path: 'manage', component: ManageComponent, data: { pageTitle: 'Manage' } },
    { path: 'sharedData', data: { pageTitle: 'Shared Data' }, children: [
        { path: '', component: HubsSharedDataComponent, data: { pageTitle: 'Shared Data' } },
        { path: 'preview/:hubKey/:objectType/:objectKey', component: PreviewDataComponent, data: { pageTitle: 'Task' } },
    ] },
    { path: 'tasks', data: { pageTitle: 'Tasks' }, children: [
        { path: '', component: TasksIndexComponent, data: { pageTitle: 'Tasks' } },
        { path: 'view/:reference', component: TaskViewComponent, data: { pageTitle: 'Task' } },
    ] },
    { path: 'notifications', data: { pageTitle: 'Notifications' }, children: [
        { path: '', component: NotificationsIndexComponent, data: { pageTitle: 'Notifications' } },
        { path: 'view/:reference', component: NotificationViewComponent, data: { pageTitle: 'Notification' } },
    ] },
    { path: 'agents', data: { pageTitle: 'Remote Agents' }, children: [
        { path: '', component: RemoteAgentsComponent, data: { pageTitle: 'Remote Agents' } },
        { path: 'edit/:remoteAgentKey', component: RemoteAgentEditComponent, data: { pageTitle: 'Remote Edit' } },
        { path: 'download', component: RemoteAgentDownloadComponent, data: {pageTitle: 'Download Agent'}},
        { path: 'token-new', component: RemoteAgentTokenComponent, data: {action: 'New', pageTitle: 'New Token'}},
        { path: 'token-renew/:remoteAgentKey', component: RemoteAgentTokenComponent, data: {action: 'Renew', pageTitle: 'Renew Token'}}
    ] } ,
    { path: 'help', component: HelpComponent, data: { pageTitle: 'Getting Started' } },
    { path: '', children: hubsView}
];

// insert the "hubs" routes once for the base, and once under the summary section to ensure the
// breadcrumbs are accurate.
export const routes: Routes = [
    {
        path: '',
        component: HubsComponent,
        children: [
            { path: '', redirectTo: 'index' },
            { path: 'index', data: { pageTitle: 'Hubs' }, children : [
                { path: '', component: HubsSummaryComponent, data: { pageTitle: 'Hubs Summary' } },
                { path: 'hubs-view', data: { pageTitle: 'Hubs View' }, children: hubsView },
                { path: '', children: baseRoutes}
            ] },
            { path: '', children: baseRoutes}
        ]
    }
];

export const Routing = RouterModule.forChild(routes);
