import { Routes, RouterModule } from '@angular/router';
import { DatalinkEditPropertiesComponent } from './properties/datalink-edit-properties.component';
import { DatalinkEditComponent } from './datalink-edit.component';
import { DatalinkEditSourceTableComponent } from './source-table/datalink-edit-source-table.component';
import { DatalinkEditTargetComponent } from './target/datalink-edit-target.component';
import { DatalinkEditTransformComponent } from './transform/datalink-edit-transform.component';
import { DatalinkEditProfileRulesComponent } from './profile-rules/profile-rules.component';
import { DatalinkEditValidationComponent } from './validation/datalink-edit-validation.component';
import { DatalinkRunPlanComponent } from './run-plan/datalink-run-plan.component';

import { StandardFunctionEditComponent }  from './standard-function-edit';
import { CustomFunctionEditComponent }  from './custom-function-edit';
import { MappingEditComponent } from './mapping-edit';
import { DatalinkEditGuard } from './datalink-edit-guard';
import { PreviewDataComponent } from './preview-data';
import { PreviewTableComponent} from './preview-table';
import { TransformTableEditComponent } from './transform-table-edit/transform-table-edit.component';
import { DatalinkEditNewTransformComponent } from './new-transform/datalink-edit-new-transform.component';
import { TargetTableColumnComponent } from './target-table-column/target-table-column.component';
import { DatalinkColumnEditComponent } from './datalink-column-edit/datalink-column-edit.component'
import { ResultsIndexComponent, ResultsViewComponent } from '../../results';
import { UnGroupEditComponent } from './unGroup-edit';
import { DatalinkEditTargetTableComponent } from './target/datalink-edit-target-table.component';

export const standardFunctionRoutes: Routes = [
    {path: '', canDeactivate: [DatalinkEditGuard], component: StandardFunctionEditComponent, data: { pageTitle: 'Standard Function' }},
    {path: ':functionType', canDeactivate: [DatalinkEditGuard],
        component: StandardFunctionEditComponent, data: { pageTitle: 'Standard Function' }},
    {path: ':functionType/:datalinkTransformItemKey',
        canDeactivate: [DatalinkEditGuard], component: StandardFunctionEditComponent, data: { pageTitle: 'Standard Function' }},
//    {path: 'edit-column/:columnKey', component: TableColumnEditComponent, data: { pageTitle: 'Edit Column', action: 'edit'}}
]

export const customFunctionRoutes: Routes = [
    {path: '', canDeactivate: [DatalinkEditGuard], component: CustomFunctionEditComponent, data: { pageTitle: 'Custom Function' }},
//    {path: 'edit-column/:columnKey', component: TableColumnEditComponent, data: { pageTitle: 'Edit Column', action: 'edit'}}
]

export const mappingEditRoutes: Routes = [
    {path: '', canDeactivate: [DatalinkEditGuard], component: MappingEditComponent, data: { pageTitle: 'Mapping' }},
//    {path: 'edit-column/:columnKey', component: TableColumnEditComponent, data: { pageTitle: 'Edit Column', action: 'edit'}}
]

export const sourceTableRoutes: Routes = [
    { path: '', pathMatch: 'full', component: DatalinkEditSourceTableComponent},
    { path: 'preview-table-data/table/:tableKey', component: PreviewTableComponent,
        data: { pageTitle: 'Preview Table', action: 'preview'} },
    { path: 'preview-table-data/datalink/:datalinkKey', component: PreviewTableComponent,
        data: { pageTitle: 'Preview Datalink', action: 'preview'} },
    { path: 'column/:datalinkColumnKey', component: DatalinkColumnEditComponent,
        data: { pageTitle: 'Edit Column', action: 'edit'} },
    { path: 'newcolumn', component: DatalinkColumnEditComponent,
        data: { pageTitle: 'New Column', action: 'new'} },
    { path: 'table-edit/:tableKey', data: { pageTitle: 'Edit Table', action: 'edit'},
            loadChildren: () => import('../../table/table-edit/table-edit.module').then(m => m.TableEditModule)},
];

export const targetRoutes: Routes = [
    { path: '', pathMatch: 'full', component: DatalinkEditTargetComponent},
    { path: 'table-edit/:targetKey', data: { pageTitle: 'Edit Target Table', action: 'edit'}, children: [
        { path: '', pathMatch: 'full', canDeactivate: [DatalinkEditGuard], component: DatalinkEditTargetTableComponent },
        { path: 'preview-table-data/:tableKey', component: PreviewTableComponent,
            data: { pageTitle: 'Preview Table', action: 'preview'} },
        ]},
    { path: 'table-new', data: { pageTitle: 'New Target Table', action: 'new'}, children: [
        { path: '', pathMatch: 'full', canDeactivate: [DatalinkEditGuard], component: DatalinkEditTargetTableComponent },
        { path: 'preview-table-data/:tableKey', component: PreviewTableComponent,
            data: { pageTitle: 'Preview Table', action: 'preview'} },
        ]},
];

export const validationRoutes: Routes = [
    {path: '', pathMatch: 'full', component: DatalinkEditValidationComponent, data: { pageTitle: 'Validation' } },
    { path: 'standard-function-edit', data: { pageTitle: 'Standard Function' },
        canDeactivate: [DatalinkEditGuard], component: StandardFunctionEditComponent },
    { path: 'standard-function-edit/:functionType', data: { pageTitle: 'Standard Function' },
        canDeactivate: [DatalinkEditGuard], component: StandardFunctionEditComponent },
    { path: 'standard-function-edit/:functionType/:datalinkTransformItemKey', data: { pageTitle: 'Standard Function' },
        canDeactivate: [DatalinkEditGuard], component: StandardFunctionEditComponent },
    { path: 'custom-function-edit', data: { pageTitle: 'Custom Function' },
        canDeactivate: [DatalinkEditGuard], component: CustomFunctionEditComponent },
    { path: 'custom-function-edit/:functionType', data: { pageTitle: 'Custom Function' },
        canDeactivate: [DatalinkEditGuard], component: CustomFunctionEditComponent },
    { path: 'column/:datalinkColumnKey', component: DatalinkColumnEditComponent,
        data: { pageTitle: 'Edit Column', action: 'edit'} },
];

export const datalinkEditRoutes: Routes = [
    { path: '', redirectTo: 'properties'},

    { path: 'properties', component: DatalinkEditPropertiesComponent, data: { pageTitle: 'Properties', help: 'datalink.md' } },
    { path: 'source', data: { pageTitle: 'Source'}, children: sourceTableRoutes },
    { path: 'target', data: { pageTitle: 'Target'}, children: targetRoutes },
    { path: 'validation', data: { pageTitle: 'Validation' }, children: validationRoutes},
    { path: 'profiles', component: DatalinkEditProfileRulesComponent, data: { pageTitle: 'Profile Rules' } },
    { path: 'new/:position', component: DatalinkEditNewTransformComponent, data: {pageTitle: 'New Transform'}},
    { path: 'transform/:datalinkTransformKey', data: { pageTitle: 'Transform' } , children: [
        { path: '', pathMatch: 'full', component: DatalinkEditTransformComponent },
        { path: 'table-edit/:tableKey', data: { pageTitle: 'Edit Table', action: 'edit'},
                loadChildren: () => import('../../table/table-edit/table-edit.module').then(m => m.TableEditModule)},
        { path: 'standard-function-edit', data: { pageTitle: 'Standard Function' },
            canDeactivate: [DatalinkEditGuard], component: StandardFunctionEditComponent },
        { path: 'standard-function-edit/:functionType', data: { pageTitle: 'Standard Function' },
            canDeactivate: [DatalinkEditGuard], component: StandardFunctionEditComponent },
        { path: 'standard-function-edit/:functionType/:datalinkTransformItemKey', data: { pageTitle: 'Standard Function' },
            canDeactivate: [DatalinkEditGuard], component: StandardFunctionEditComponent },
        { path: 'custom-function-edit', data: { pageTitle: 'Custom Function', help: 'function.md' },
            canDeactivate: [DatalinkEditGuard], component: CustomFunctionEditComponent },
        { path: 'custom-function-edit/:functionType', data: { pageTitle: 'Custom Function', help: 'function.md' },
            canDeactivate: [DatalinkEditGuard], component: CustomFunctionEditComponent },
        { path: 'custom-function-edit/:functionType/:datalinkTransformItemKey',
            data: { pageTitle: 'Custom Function', help: 'function.md' },
            canDeactivate: [DatalinkEditGuard], component: CustomFunctionEditComponent },
        { path: 'mapping-edit/:type', data: { pageTitle: 'Mapping Edit' },
            component: MappingEditComponent },
        { path: 'mapping-edit/:type/:datalinkTransformItemKey', data: { pageTitle: 'Mapping Edit' },
            component: MappingEditComponent },
        { path: 'unGroup-edit', data: { pageTitle: 'Un-Group Edit' },
            component: UnGroupEditComponent },
        { path: 'unGroup-edit/:datalinkTransformItemKey', data: { pageTitle: 'Un-Group Edit' },
            component: UnGroupEditComponent },
        { path: 'preview-transform-data', data: { pageTitle: 'Preview Data' },
            component: PreviewDataComponent },
        { path: 'transform-table-edit', data: { pageTitle: 'Transform Table Edit' },
            component: TransformTableEditComponent },
        { path: 'column/:datalinkColumnKey', component: DatalinkColumnEditComponent,
            data: { pageTitle: 'Edit Column', action: 'edit'} },
    ] },

    { path: 'run-plan', component: DatalinkRunPlanComponent, data: { pageTitle: 'Run Plan' } },
    { path: 'result-view/:auditConnectionKey/:auditKey', component: ResultsViewComponent, data: { pageTitle: 'Detailed Result' } }
];

export const routes: Routes = [
        { path: 'new', component: DatalinkEditComponent, canDeactivate: [DatalinkEditGuard],
            data: { action: 'new', navigateSkip: true, pageTitle: 'New Datalink' }, children: datalinkEditRoutes},
        { path: 'edit/:datalinkKey', component: DatalinkEditComponent, canDeactivate: [DatalinkEditGuard],
            data: { action: 'edit', navigateSkip: true, pageTitle: 'Edit Datalink' }, children: datalinkEditRoutes},
        { path: 'copy/:datalinkKey', component: DatalinkEditComponent, canDeactivate: [DatalinkEditGuard],
            data: { action: 'copy', navigateSkip: true, pageTitle: 'Copy Datalink' }, children: datalinkEditRoutes},
        { path: 'sourceTable/:sourceTableKey', component: DatalinkEditComponent, canDeactivate: [DatalinkEditGuard],
            data: { action: 'sourceTable', navigateSkip: true, pageTitle: 'Edit Datalink' }, children: datalinkEditRoutes}
];

export const Routing = RouterModule.forChild(routes);
