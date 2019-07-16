import { Routes, RouterModule } from '@angular/router';
import { TableEditComponent } from './table-edit.component';
import { TableColumnEditComponent } from './table-column-edit/table-column-edit.component';
import { ItemEditGuard } from '../../item-edit.guard';
import { TableEditPreviewDataComponent } from './table-edit-preview-data';
import { TableEditMainComponent } from './table-edit-main.component';
import { FileFormatEditComponent } from '../../fileFormat';

export const tableEditRoutes = [
        { path: '', component: TableEditMainComponent,  data: { navigateSkip: true} },
        { path: 'column', component: TableColumnEditComponent, data: { pageTitle: 'Edit Column' } },
        { path: 'column/:columnKey', component: TableColumnEditComponent, data: { pageTitle: 'Edit Column' } },
        { path: 'table-preview/:tableKey', component: TableEditPreviewDataComponent, data: { pageTitle: 'Preview' } },
        { path: 'fileFormat-new', component: FileFormatEditComponent, data: { action: 'new', pageTitle: 'New File Format'}},
];

export const routes: Routes = [
        { path: '', component: TableEditComponent, canDeactivate: [ItemEditGuard], children: tableEditRoutes},
];

export const Routing = RouterModule.forChild(routes);
