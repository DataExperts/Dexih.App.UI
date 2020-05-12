import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routing } from './hubs.routing';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

import { HubsService } from './hubs.service';
import { HubsComponent } from './hubs.component';
import { HubIndexComponent } from './hub-index/hub-index.component';
import { HubEditComponent } from './hub-edit/hub-edit.component';
import { HubsSummaryComponent} from './hubs-summary/hubs-summary.component';
import { ManageComponent } from './manage/manage.component';
import { TasksIndexComponent } from './tasks/tasks-index';
import { TaskStatusComponent } from './tasks/task-status';
import { TaskViewComponent } from './tasks/task-view';
import { NotificationsIndexComponent } from './notifications/notification-index';
import { NotificationViewComponent } from './notifications/notification-view';
import { RemoteAgentsComponent} from './remoteAgents/remote-agents/remote-agents.component';
import { HelpComponent } from './help'
import { RemoteAgentDownloadComponent } from './remoteAgents/remoteAgent-download';
import { RemoteAgentEditComponent } from './remoteAgents/remoteAgent-edit';
import { RemoteAgentTokenComponent} from './remoteAgents/remote-agent-token/remote-agent-token.component';
import { IssueEditComponent, IssueIndexComponent } from './support'
import { HubService } from '../+hub/hub.service';


@NgModule({
    imports: [
        SharedModule,
        Routing,
        ReactiveFormsModule
    ],
    declarations: [
        HubsComponent,
        HubIndexComponent,
        HubEditComponent,
        HubsSummaryComponent,
        ManageComponent,
        TasksIndexComponent,
        TaskStatusComponent,
        TaskViewComponent,
        NotificationsIndexComponent,
        NotificationViewComponent,
        RemoteAgentsComponent,
        RemoteAgentDownloadComponent,
        RemoteAgentEditComponent,
        HelpComponent,
        RemoteAgentTokenComponent,
        IssueEditComponent, IssueIndexComponent
    ],
    providers: [HubsService, HubService],
    exports: []
})
export class HubsModule {

    static forRoot(): ModuleWithProviders<HubsModule> {
        return {
            ngModule: HubsModule,
            providers: [HubsService, HubService]
        };
    }
}
