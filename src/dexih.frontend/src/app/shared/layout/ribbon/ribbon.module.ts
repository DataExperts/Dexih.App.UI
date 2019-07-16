import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {RouteBreadcrumbsComponent} from './route-breadcrumbs/route-breadcrumbs.component'
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        BsDropdownModule
    ],
    exports: [
        RouteBreadcrumbsComponent,
    ],
    declarations: [
        RouteBreadcrumbsComponent,
        ],
    providers: [],
})
export class RibbonModule { }
