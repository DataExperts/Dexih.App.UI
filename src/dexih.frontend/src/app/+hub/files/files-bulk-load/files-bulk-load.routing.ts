import { Routes, RouterModule } from '@angular/router';
import { ItemEditGuard } from '../../item-edit.guard';
import { FilesBulkLoadComponent } from './files-bulk-load.component';
import { TableColumnEditComponent } from './table-column-edit.component';
import { TableEditPreviewDataComponent } from '../../table/table-edit/table-edit-preview-data';
import { FileFormatEditComponent } from '../../fileFormat';
import { TableEditComponent } from './table-edit.component';

export const tableEditRoutes = [
        { path: '', component: TableEditComponent,  data: { navigateSkip: true} },
        { path: 'column', component: TableColumnEditComponent, data: { pageTitle: 'Edit Column' } },
        { path: 'column/:columnKey', component: TableColumnEditComponent, data: { pageTitle: 'Edit Column' } },
        { path: 'table-preview/:tableKey', component: TableEditPreviewDataComponent, data: { pageTitle: 'Preview' } },
        { path: 'fileFormat-new', component: FileFormatEditComponent, data: { action: 'new', pageTitle: 'New File Format'}},
];

export const routes: Routes = [
        { path: '', component: FilesBulkLoadComponent, canDeactivate: [ItemEditGuard], children: [
                { path: 'table-edit', data: { pageTitle: 'Edit Table' }, children: tableEditRoutes},
                { path: 'fileFormat-new', component: FileFormatEditComponent, data: { action: 'new', pageTitle: 'New File Format'}},
        ]},
];

export const Routing = RouterModule.forChild(routes);
