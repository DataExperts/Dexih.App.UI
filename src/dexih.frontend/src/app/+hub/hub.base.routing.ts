import { Route, RouterModule, Routes } from '@angular/router';

import { ColumnValidationEditComponent, ColumnValidationIndexComponent } from './columnValidation';
import { ConnectionEditComponent } from './connection/connection-edit';
import { ConnectionImportComponent } from './connection/connection-import';
import { ConnectionIndexComponent } from './connection/connection-index';
import { ImportComponent, ExportComponent } from './copy';
import { DatajobIndexComponent } from './datajob/datajob-index';
import { DatalinkIndexComponent } from './datalink/datalink-index';
import { DatalinkNewComponent } from './datalink/datalink-new';
import { DatalinkPreviewDataComponent } from './datalink/datalink-preview-data';
import { FileFormatEditComponent, FileFormatIndexComponent } from './fileFormat';
import { FilesManageComponent, FilesBulkLoadComponent } from './files';
import { HubVariableEditComponent, HubVariableIndexComponent } from './hubVariable';
import { ManageUsersIndexComponent } from './manage/manage-users-index/manage-users-index.component';
import { RemoteAgentEditComponent, RemoteAgentIndexComponent } from './remoteAgent';
import { ResultsIndexComponent, ResultsViewComponent } from './results';
import { SharedDataIndexComponent } from './sharedData/sharedData-index.component';
import { TableIndexComponent } from './table/table-index';
import { TablePreviewDataComponent } from './table/table-preview-data';
import { CustomFunctionIndexComponent, CustomFunctionEditComponent } from './customFunction';
import { ItemEditGuard } from './item-edit.guard';
import { DatalinkTestIndexComponent, DatalinkTestNewComponent } from './test'
import { ViewEditComponent } from './view/view-edit';
import { ViewIndexComponent } from './view/view-index';
import { ApiEditComponent } from './api/api-edit';
import { ApiIndexComponent } from './api/api-index';
import { DatalinkRunComponent } from './datalink/datalink-run/datalink-run.component';
import { SearchComponent } from './search';
import { DashboardEditComponent, DashboardIndexComponent } from './dashboard';
import { DatajobRunComponent } from './datajob/datajob-run/datajob-run.component';
import { DexihDashboard, DexihView, DexihApi } from '../shared/shared.models';
import { ListOfValuesEditComponent } from './listOfValues/listOfValues-edit';
import { ListOfValuesIndexComponent } from './listOfValues/listOfValues-index';

const resultViewRoute: Route = { path: 'result-view/:auditConnectionKey/:auditKey', children: [
        {path: '', pathMatch: 'full', component: ResultsViewComponent, data: { pageTitle: 'Detailed Result' }},
        { path: 'result-view/:auditConnectionKey/:auditKey', children: [
            {path: '', pathMatch: 'full', component: ResultsViewComponent, data: { pageTitle: 'Child Result' }},
            { path: 'result-view/:auditConnectionKey/:auditKey', children: [
                {path: '', pathMatch: 'full', component: ResultsViewComponent, data: { pageTitle: 'GrandChild Result' }},
            ]
        }
        ]
    }
    ]
};

const tableRoutes: Routes = [
    { path: 'table-edit/:tableKey', data: { pageTitle: 'Edit Table', action: 'edit'},
        loadChildren: () => import('./table/table-edit/table-edit.module').then(m => m.TableEditModule)},
    { path: 'table-new',  data: {  pageTitle: 'New Table', action: 'new'},
        loadChildren: () => import('./table/table-edit/table-edit.module').then(m => m.TableEditModule)},
    { path: 'table-new/:connectionKey',  data: {  pageTitle: 'New Table', action: 'new'},
        loadChildren: () => import('./table/table-edit/table-edit.module').then(m => m.TableEditModule)},
    { path: 'datalink-new/:sourceTableKeys/:targetConnectionKey',
        component: DatalinkNewComponent, data: { action: 'new', pageTitle: 'New Datalink' } },
    { path: 'table-preview/:tableKey', component: TablePreviewDataComponent, data: { pageTitle: 'Preview Table' } },
];

const datalinkRoutes: Routes = [
    { path: 'datalink-edit', loadChildren: () => import('./datalink/datalink-edit/datalink-edit.module').then(m => m.DatalinkEditModule)},
    { path: 'datalink-preview/:datalinkKey', component: DatalinkPreviewDataComponent, data: { pageTitle: 'Preview Datalink' } },
    { path: 'table-preview/:tableKey', component: TablePreviewDataComponent, data: { pageTitle: 'Preview Table' } },
    { path: 'datalink-run/:datalinkKeys', component: DatalinkRunComponent, data: { pageTitle: 'Run Datalink' } },
    resultViewRoute
];

const tablesRoute: Route = { path: 'tables', data: { pageTitle: 'Tables' }, children: (<Routes>[
    {path: '', pathMatch: 'full', component: TableIndexComponent, data: { pageTitle: 'Tables' }},
    {path: '', children: (<Routes>tableRoutes)},
    {path: '', children: (<Routes>datalinkRoutes)},
    ])
};

const connectionRoutes: Routes = [
    { path: 'connection-edit/:connectionKey', component: ConnectionEditComponent, canDeactivate: [ItemEditGuard],
        data: {action: 'edit', pageTitle: 'Edit Connection' }},
    { path: 'connection-import/:connectionKey', data: { pageTitle: 'Import Tables'}, children: [
        {path: '', pathMatch: 'full', component: ConnectionImportComponent, data: { pageTitle: 'Import Tables' }} ,
        { path: 'table-edit/:tableKey', data: { pageTitle: 'Edit Table', action: 'edit'},
                loadChildren: () => import('./table/table-edit/table-edit.module').then(m => m.TableEditModule)},
        { path: 'datalink-new/:sourceTableKeys/:targetConnectionKey',
        component: DatalinkNewComponent, data: { action: 'new', pageTitle: 'New Datalink' } },
    ]},
    { path: 'connection-new/:purpose', component: ConnectionEditComponent, data: {action: 'new', pageTitle: 'New Connection' }},
    { path: 'connection-copy/:connectionKey', component: ConnectionEditComponent, data: {action: 'copy', pageTitle: 'New Connection' }}
];

const connectionsRoute: Route =  { path: 'connections', data: {pageTitle: 'Connections' }, children: (<Routes>[
    {path: '', pathMatch: 'full', component: ConnectionIndexComponent, data: {pageTitle: 'Connections' }},
    {path: '', children: (<Routes>connectionRoutes)},
    tablesRoute
    ])
};

const agentRoutes: Routes = [
    { path: '', pathMatch: 'full', component: RemoteAgentIndexComponent, data: { pageTitle: 'Remote Agents' }},
    { path: 'agent-edit/:remoteAgentKey/:remoteAgentHubKey', component: RemoteAgentEditComponent, data: { pageTitle: 'Edit Agent' }}
];

const agentsRoute: Route = { path: 'agents', data: { pageTitle: 'Remote Agents' }, children: agentRoutes
};

const resultRoutes: Routes = [
    { path: 'results', data: { pageTitle: 'Execution Results' }, children: [
        {path: '', pathMatch: 'full', component: ResultsIndexComponent, data: { pageTitle: 'Execution Results' } },
        resultViewRoute
    ] },
    resultViewRoute
];

const manageRoute: Route = { path: 'manage', children: (<Routes>[
    { path: 'manage-users', component: ManageUsersIndexComponent, data: {pageTitle: 'Manage Users'}}
    ])
};

const importRoute: Route = { path: 'import', children: (<Routes>[
    { path: '', pathMatch: 'full', component: ImportComponent, data: {pageTitle: 'Import Objects'}}
    ])
};

const exportRoute: Route = { path: 'export', children: (<Routes>[
    { path: '', pathMatch: 'full', component: ExportComponent, data: {pageTitle: 'Export Objects'}}
    ])
};

const sharedDataRoute: Route = { path: 'sharedData', data: { pageTitle: 'Shared Data' }, children: (<Routes>[
    {path: '', pathMatch: 'full', component: SharedDataIndexComponent},
    {path: '', children: [
        { path: 'table-preview/:tableKey', component: TablePreviewDataComponent, data: { pageTitle: 'Preview Table' } },
        { path: 'datalink-preview/:datalinkKey', component: DatalinkPreviewDataComponent, data: { pageTitle: 'Preview Datalink' } },
        { path: 'dashboard-preview/:dashboardKey', data: { pageTitle: 'Preview Dashboard', action: 'edit'},
        loadChildren: () => import('./dashboard/dashboard-edit/dashboard-edit.module').then(m => m.DashboardEditModule)},
        { path: 'view-preview/:viewKey', component: ViewEditComponent, data: { pageTitle: 'Preview View', action: 'edit' } },
        { path: 'api-preview/:apiKey', component: ApiEditComponent, data: { pageTitle: 'Preview Api', action: 'edit' } }
    ]}])
};

const customFunctionRoutes: Routes = [
    { path: 'customFunction-edit/:customFunctionKey', component: CustomFunctionEditComponent, canDeactivate: [ItemEditGuard],
        data: { action: 'edit', pageTitle: 'Edit Custom Function'}},
    { path: 'customFunction-new', component: CustomFunctionEditComponent, data: { action: 'new', pageTitle: 'New Custom Function'}},
];

const customFunctionRoute: Route = { path: 'customFunctions', data: { pageTitle: 'Custom Functions' }, children: (<Routes>[
    {path: '', pathMatch: 'full', component: CustomFunctionIndexComponent},
    {path: '', children: (<Routes>customFunctionRoutes)},
    ])
};

const columnValidationRoutes: Routes = [
    { path: 'columnValidation-edit/:validationKey', component: ColumnValidationEditComponent, canDeactivate: [ItemEditGuard],
        data: { action: 'edit', pageTitle: 'Edit Validation'}},
    { path: 'columnValidation-new', component: ColumnValidationEditComponent, data: { action: 'new', pageTitle: 'New Validation'}},
];

const columnValidationsRoute: Route = { path: 'columnValidations', data: { pageTitle: 'Column Validations' }, children: (<Routes>[
    {path: '', pathMatch: 'full', component: ColumnValidationIndexComponent},
    {path: '', children: (<Routes>columnValidationRoutes)},
    ])
};

const fileFormatRoutes: Routes = [
    { path: 'fileFormat-edit/:fileFormatKey', component: FileFormatEditComponent, canDeactivate: [ItemEditGuard],
        data: { action: 'edit', pageTitle: 'Edit FileFormat'}},
    { path: 'fileFormat-new', component: FileFormatEditComponent, data: { action: 'new', pageTitle: 'New FileFormat'}},
];

const fileFormatsRoute: Route = { path: 'fileFormats', data: { pageTitle: 'File Formats' }, children: (<Routes>[
    {path: '', pathMatch: 'full', component: FileFormatIndexComponent},
    {path: '', children: (<Routes>fileFormatRoutes)}
    ])
};

const viewRoutes: Routes = [
    { path: 'view-edit/:viewKey', component: ViewEditComponent, canDeactivate: [ItemEditGuard],
        data: { action: 'edit', pageTitle: 'Edit View'}},
    { path: 'view-new', component: ViewEditComponent, data: { action: 'new', pageTitle: 'New View'}},
];

const viewRoute: Route = { path: 'views', data: { pageTitle: 'Views' }, children: (<Routes>[
    {path: '', pathMatch: 'full', component: ViewIndexComponent},
    {path: '', children: (<Routes>viewRoutes)}
    ])
};

const dashboardRoutes: Routes = [
    { path: 'dashboard-edit/:dashboardKey', data: { pageTitle: 'Edit Dashboard', action: 'edit'},
        loadChildren: () => import('./dashboard/dashboard-edit/dashboard-edit.module').then(m => m.DashboardEditModule)},
    { path: 'dashboard-new',  data: {  pageTitle: 'New Dashboard', action: 'new'},
        loadChildren: () => import('./dashboard/dashboard-edit/dashboard-edit.module').then(m => m.DashboardEditModule)},
];

const dashboardRoute: Route = { path: 'dashboards', data: { pageTitle: 'Dashboards' }, children: (<Routes>[
    {path: '', pathMatch: 'full', component: DashboardIndexComponent},
    {path: '', children: (<Routes>dashboardRoutes)}
    ])
};

const lovRoutes: Routes = [
    { path: 'listOfValues-edit/:listOfValuesKey', component: ListOfValuesEditComponent, canDeactivate: [ItemEditGuard],
        data: { action: 'edit', pageTitle: 'Edit List Of Values'}},
    { path: 'listOfValues-new', component: ListOfValuesEditComponent, data: { action: 'new', pageTitle: 'New List of Values'}},
];

const lovRoute: Route = { path: 'listOfValues', data: { pageTitle: 'List of Values' }, children: (<Routes>[
    {path: '', pathMatch: 'full', component: ListOfValuesIndexComponent},
    {path: '', children: (<Routes>lovRoutes)}
    ])
};

const apiRoutes: Routes = [
    { path: 'api-edit/:apiKey', component: ApiEditComponent, canDeactivate: [ItemEditGuard],
        data: { action: 'edit', pageTitle: 'Edit Api'}},
    { path: 'api-new', component: ApiEditComponent, data: { action: 'new', pageTitle: 'New Api'}},
];

const apiRoute: Route = { path: 'apis', data: { pageTitle: 'Apis' }, children: (<Routes>[
    {path: '', pathMatch: 'full', component: ApiIndexComponent},
    {path: '', children: (<Routes>apiRoutes)}
    ])
};
const hubVariableRoutes: Routes = [
    { path: 'hubVariable-edit/:hubVariableKey', component: HubVariableEditComponent, data: { action: 'edit',
        pageTitle: 'Edit Hub Variable'}},
    { path: 'hubVariable-new', component: HubVariableEditComponent, data: { action: 'new', pageTitle: 'New Hub Variable'}},
];

const hubVariablesRoute: Route = { path: 'hubVariables', data: { pageTitle: 'Hub Variables' }, children: (<Routes>[
    {path: '', pathMatch: 'full', component: HubVariableIndexComponent},
    {path: '', children: (<Routes>hubVariableRoutes)}
    ])
};

const datalinkTestRoutes: Routes = [
    { path: 'datalinkTest-edit/:datalinkTestKey', data: { pageTitle: 'Edit Datalink Test', action: 'edit'},
            loadChildren: () => import('./test/datalinkTest-edit/datalinkTest-edit.module').then(m => m.DatalinkTestEditModule)},
    { path: 'datalinkTest-new',  data: {  pageTitle: 'New Datalink Test', action: 'new'},
            loadChildren: () => import('./test/datalinkTest-edit/datalinkTest-edit.module').then(m => m.DatalinkTestEditModule)},
    { path: 'datalinkTest-new/:datalinkKeys', component: DatalinkTestNewComponent,
        data: {  pageTitle: 'New Datalink Test', action: 'new'}},
    resultViewRoute
];

const datalinkTestsRoute: Route = { path: 'datalinkTests', data: { pageTitle: 'Datalink Tests' }, children: (<Routes>[
    {path: '', pathMatch: 'full', component: DatalinkTestIndexComponent},
    {path: '', children: (<Routes>datalinkTestRoutes)},
    {path: '', children: (<Routes>resultRoutes)},
    ])
};

const filesRoutes: Routes = [
    { path: 'manage', children: (<Routes> [
        { path: '', component: FilesManageComponent, data: { action: 'edit', pageTitle: 'Manage Files'}},
        { path: ':tableKey', data: { action: 'edit', pageTitle: 'Manage Files'}, children: (<Routes> [
            { path: '', component: FilesManageComponent, data: { action: 'edit', pageTitle: 'Manage Files'}},
            { path: 'file-preview/:path/:fileName', component: TablePreviewDataComponent, data: { pageTitle: 'Preview File' } }
        ])}
    ])},
    { path: 'bulk-load', children: (<Routes> [
       {path: '', data: { action: 'new', pageTitle: 'Bulk Load Files'},
        loadChildren: () => import('./files/files-bulk-load/files-bulk-load.module').then(m => m.FilesBulkLoadModule)},
       {path: ':connectionKey', data: { action: 'new', pageTitle: 'Bulk Load Files'},
        loadChildren: () => import('./files/files-bulk-load/files-bulk-load.module').then(m => m.FilesBulkLoadModule)},
    ])},
];

const filesRoute: Route = { path: 'files', data: { pageTitle: 'Files' }, children: (<Routes>[
    {path: '', children: (<Routes>filesRoutes)}
    ])
};

const datalinksRoute = { path: 'datalinks', data: { pageTitle: 'Data Links' }, children: (<Routes>[
    {path: '', pathMatch: 'full', data: { pageTitle: 'Data Links' }, component: DatalinkIndexComponent},
    {path: '', children: (<Routes>datalinkRoutes)},
    {path: '', children: (<Routes>resultRoutes)},
    ])
};

// const publishedRoute: Route = { path: 'published', children: (<Routes>[
//     { path: '', redirectTo: 'All'},
//     { path: ':typeFilter', children: (<Routes> [
//         {path: '', pathMatch: 'full', component: DatalinkIndexComponent, data: { pageTitle: 'Published' }},
//     {path: '', children: (<Routes>datalinkRoutes)},
//     {path: '', children: (<Routes>resultRoutes)},
//     ])}
//     ])
// };

const datajobRoutes: Routes = [
    { path: 'datajob-edit/:datajobKey', data: { pageTitle: 'Edit Data Job', action: 'edit'},
            loadChildren: () => import('./datajob/datajob-edit/datajob-edit.module').then(m => m.DatajobEditModule)},
    { path: 'datajob-new',  data: {  pageTitle: 'New Data Job', action: 'new'},
            loadChildren: () => import('./datajob/datajob-edit/datajob-edit.module').then(m => m.DatajobEditModule)},
    { path: 'datajob-run/:datajobKeys', component: DatajobRunComponent, data: { pageTitle: 'Run datajobs' } },

];

const datajobsRoute: Route = { path: 'datajobs', data: { pageTitle: 'Data Jobs' }, children: (<Routes>[
    {path: '', pathMatch: 'full', component: DatajobIndexComponent},
    {path: '', children: (<Routes>datajobRoutes)},
    {path: '', children: (<Routes>resultRoutes)},
    ])
};

const searchRoute: Route =  { path: 'search',  data: {pageTitle: 'Search'}, children: (<Routes> [
    { path: '', pathMatch: 'full', redirectTo: '0/' },

    // { path: '', loadChildren: './hub.base.module#HubBaseModule' },
     { path: ':searchObject/:search', pathMatch: 'full', component: SearchComponent, },
     { path: ':searchObject/:search', loadChildren: () => import('./hub.base.module').then(m => m.HubBaseModule) }
  ])
 };

const routes: Routes = (<Routes>[
    agentsRoute,
    connectionsRoute,
//    publishedRoute,
    datalinksRoute,
    tablesRoute,
    datajobsRoute,
  // resultsRoute,
    columnValidationsRoute,
    customFunctionRoute,
    fileFormatsRoute,
    viewRoute,
    dashboardRoute,
    lovRoute,
    apiRoute,
    hubVariablesRoute,
    manageRoute,
    importRoute,
    exportRoute,
    sharedDataRoute,
    filesRoute,
    datalinkTestsRoute,
    searchRoute,
    { path: '', children : connectionRoutes},
    { path: '', children : datalinkRoutes},
    { path: '', children : tableRoutes},
    { path: '', children : datajobRoutes},
    { path: '', children : resultRoutes},
    { path: '', children : customFunctionRoutes},
    { path: '', children : columnValidationRoutes},
    { path: '', children : fileFormatRoutes},
    { path: '', children : viewRoutes},
    { path: '', children : dashboardRoutes},
    { path: '', children : lovRoutes},
    { path: '', children : apiRoutes},
    { path: '', children : hubVariableRoutes},
    { path: '', children : filesRoutes},
    { path: '', children : agentRoutes},
    { path: '', children : datalinkTestRoutes},
])

export const BaseRouting = RouterModule.forChild(routes);
