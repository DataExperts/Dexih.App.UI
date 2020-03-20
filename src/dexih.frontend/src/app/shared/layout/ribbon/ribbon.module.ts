import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {RouteBreadcrumbsComponent} from './route-breadcrumbs/route-breadcrumbs.component'
import {BsDropdownModule} from 'ngx-bootstrap/dropdown';
import {RibbonComponent} from './ribbon.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        BsDropdownModule
    ],
    exports: [
        RibbonComponent,
        RouteBreadcrumbsComponent,
    ],
    declarations: [
        RibbonComponent,
        RouteBreadcrumbsComponent,
        ],
    providers: [],
})
export class RibbonModule { }
