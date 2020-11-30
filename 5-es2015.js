(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "N6eo":
/*!***********************************************************************!*\
  !*** ./src/app/+hub/files/files-bulk-load/files-bulk-load.routing.ts ***!
  \***********************************************************************/
/*! exports provided: tableEditRoutes, routes, Routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tableEditRoutes", function() { return tableEditRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routing", function() { return Routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _item_edit_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../item-edit.guard */ "bK5D");
/* harmony import */ var _files_bulk_load_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./files-bulk-load.component */ "/fhR");
/* harmony import */ var _table_column_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./table-column-edit.component */ "NYDG");
/* harmony import */ var _table_table_edit_table_edit_preview_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../table/table-edit/table-edit-preview-data */ "taGP");
/* harmony import */ var _fileFormat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../fileFormat */ "NUI7");
/* harmony import */ var _table_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./table-edit.component */ "los3");







const tableEditRoutes = [
    { path: '', component: _table_edit_component__WEBPACK_IMPORTED_MODULE_6__["TableEditComponent"], data: { navigateSkip: true } },
    { path: 'column', component: _table_column_edit_component__WEBPACK_IMPORTED_MODULE_3__["TableColumnEditComponent"], data: { pageTitle: 'Edit Column' } },
    { path: 'column/:columnKey', component: _table_column_edit_component__WEBPACK_IMPORTED_MODULE_3__["TableColumnEditComponent"], data: { pageTitle: 'Edit Column' } },
    { path: 'table-preview/:tableKey', component: _table_table_edit_table_edit_preview_data__WEBPACK_IMPORTED_MODULE_4__["TableEditPreviewDataComponent"], data: { pageTitle: 'Preview' } },
    { path: 'fileFormat-new', component: _fileFormat__WEBPACK_IMPORTED_MODULE_5__["FileFormatEditComponent"], data: { action: 'new', pageTitle: 'New File Format' } },
];
const routes = [
    { path: '', component: _files_bulk_load_component__WEBPACK_IMPORTED_MODULE_2__["FilesBulkLoadComponent"], canDeactivate: [_item_edit_guard__WEBPACK_IMPORTED_MODULE_1__["ItemEditGuard"]], children: [
            { path: 'table-edit', data: { pageTitle: 'Edit Table' }, children: tableEditRoutes },
            { path: 'fileFormat-new', component: _fileFormat__WEBPACK_IMPORTED_MODULE_5__["FileFormatEditComponent"], data: { action: 'new', pageTitle: 'New File Format' } },
        ] },
];
const Routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "NYDG":
/*!***************************************************************************!*\
  !*** ./src/app/+hub/files/files-bulk-load/table-column-edit.component.ts ***!
  \***************************************************************************/
/*! exports provided: TableColumnEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableColumnEditComponent", function() { return TableColumnEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../+auth/auth.service */ "ElCs");
/* harmony import */ var _hub_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hub.service */ "4Y1E");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _hub_forms_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hub.forms.service */ "cvPx");
/* harmony import */ var _table_column_edit_column_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../table/column-edit/column-edit.component */ "dn85");












class TableColumnEditComponent {
    constructor(authService, hubService, formService, route, router) {
        this.authService = authService;
        this.hubService = hubService;
        this.formService = formService;
        this.route = route;
        this.router = router;
        this.detailedView = true;
    }
    ngOnInit() {
        try {
            this._subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])(this.route.data, this.route.params, this.route.queryParams, this.formService.getCurrentFormObservable()).subscribe(result => {
                let data = result[0];
                let params = result[1];
                let queryParams = result[2];
                this.tableForm = result[3];
                this.pageTitle = data['pageTitle'];
                this.action = data['action'];
                this.columnKey = +params['columnKey'];
                this.detailedView = queryParams['detailed'] === 'false' ? false : true;
            });
        }
        catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Table Column Edit');
        }
    }
    ngOnDestroy() {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
    }
    isUpdated() {
        this.authService.navigateUp();
    }
    changeColumn(columnKey) {
        this.router.navigate(['column', columnKey], { relativeTo: this.route.parent });
    }
}
TableColumnEditComponent.ɵfac = function TableColumnEditComponent_Factory(t) { return new (t || TableColumnEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hub_service__WEBPACK_IMPORTED_MODULE_3__["HubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hub_forms_service__WEBPACK_IMPORTED_MODULE_5__["HubFormsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
TableColumnEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TableColumnEditComponent, selectors: [["dexih-table-column-edit"]], decls: 1, vars: 3, consts: [[3, "tableForm", "columnKey", "detailedView", "isUpdated", "changeColumn"]], template: function TableColumnEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "column-edit", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("isUpdated", function TableColumnEditComponent_Template_column_edit_isUpdated_0_listener() { return ctx.isUpdated(); })("changeColumn", function TableColumnEditComponent_Template_column_edit_changeColumn_0_listener($event) { return ctx.changeColumn($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tableForm", ctx.tableForm)("columnKey", ctx.columnKey)("detailedView", ctx.detailedView);
    } }, directives: [_table_column_edit_column_edit_component__WEBPACK_IMPORTED_MODULE_6__["ColumnEditComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableColumnEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dexih-table-column-edit',
                templateUrl: './table-column-edit.component.html',
            }]
    }], function () { return [{ type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _hub_service__WEBPACK_IMPORTED_MODULE_3__["HubService"] }, { type: _hub_forms_service__WEBPACK_IMPORTED_MODULE_5__["HubFormsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "los3":
/*!********************************************************************!*\
  !*** ./src/app/+hub/files/files-bulk-load/table-edit.component.ts ***!
  \********************************************************************/
/*! exports provided: TableEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableEditComponent", function() { return TableEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _hub_forms_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hub.forms.service */ "cvPx");
/* harmony import */ var _table_table_edit_table_edit_properties_table_edit_properties_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../table/table-edit/table-edit-properties/table-edit-properties.component */ "Qrk8");





class TableEditComponent {
    constructor(formsService) {
        this.formsService = formsService;
    }
    ngOnInit() {
    }
    ngOnDestroy() {
    }
}
TableEditComponent.ɵfac = function TableEditComponent_Factory(t) { return new (t || TableEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hub_forms_service__WEBPACK_IMPORTED_MODULE_1__["HubFormsService"])); };
TableEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TableEditComponent, selectors: [["dexih-table-edit-form"]], decls: 1, vars: 1, consts: [[3, "formsService"]], template: function TableEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dexih-table-edit-properties", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formsService", ctx.formsService);
    } }, directives: [_table_table_edit_table_edit_properties_table_edit_properties_component__WEBPACK_IMPORTED_MODULE_2__["TableEditPropertiesComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dexih-table-edit-form',
                templateUrl: './table-edit.component.html'
            }]
    }], function () { return [{ type: _hub_forms_service__WEBPACK_IMPORTED_MODULE_1__["HubFormsService"] }]; }, null); })();


/***/ }),

/***/ "xgYh":
/*!**********************************************************************!*\
  !*** ./src/app/+hub/files/files-bulk-load/files-bulk-load.module.ts ***!
  \**********************************************************************/
/*! exports provided: FilesBulkLoadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesBulkLoadModule", function() { return FilesBulkLoadModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _table_table_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../table/table.shared.module */ "vSNy");
/* harmony import */ var _hub_forms_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hub.forms.service */ "cvPx");
/* harmony import */ var _item_edit_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../item-edit.guard */ "bK5D");
/* harmony import */ var _files_bulk_load_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./files-bulk-load.routing */ "N6eo");
/* harmony import */ var _files_bulk_load_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./files-bulk-load.component */ "/fhR");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared */ "M0ag");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _table_column_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./table-column-edit.component */ "NYDG");
/* harmony import */ var _table_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./table-edit.component */ "los3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "iInd");













class FilesBulkLoadModule {
    static forRoot() {
        return {
            ngModule: FilesBulkLoadModule,
            providers: [_hub_forms_service__WEBPACK_IMPORTED_MODULE_2__["HubFormsService"]]
        };
    }
}
FilesBulkLoadModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FilesBulkLoadModule });
FilesBulkLoadModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FilesBulkLoadModule_Factory(t) { return new (t || FilesBulkLoadModule)(); }, providers: [
        _hub_forms_service__WEBPACK_IMPORTED_MODULE_2__["HubFormsService"],
        _item_edit_guard__WEBPACK_IMPORTED_MODULE_3__["ItemEditGuard"]
    ], imports: [[
            _shared__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _table_table_shared_module__WEBPACK_IMPORTED_MODULE_1__["TableSharedModule"],
            _files_bulk_load_routing__WEBPACK_IMPORTED_MODULE_4__["Routing"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FilesBulkLoadModule, { declarations: [_files_bulk_load_component__WEBPACK_IMPORTED_MODULE_5__["FilesBulkLoadComponent"],
        _table_column_edit_component__WEBPACK_IMPORTED_MODULE_9__["TableColumnEditComponent"],
        _table_edit_component__WEBPACK_IMPORTED_MODULE_10__["TableEditComponent"]], imports: [_shared__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        _table_table_shared_module__WEBPACK_IMPORTED_MODULE_1__["TableSharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FilesBulkLoadModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _shared__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                    _table_table_shared_module__WEBPACK_IMPORTED_MODULE_1__["TableSharedModule"],
                    _files_bulk_load_routing__WEBPACK_IMPORTED_MODULE_4__["Routing"]
                ],
                exports: [],
                declarations: [
                    _files_bulk_load_component__WEBPACK_IMPORTED_MODULE_5__["FilesBulkLoadComponent"],
                    _table_column_edit_component__WEBPACK_IMPORTED_MODULE_9__["TableColumnEditComponent"],
                    _table_edit_component__WEBPACK_IMPORTED_MODULE_10__["TableEditComponent"]
                ],
                providers: [
                    _hub_forms_service__WEBPACK_IMPORTED_MODULE_2__["HubFormsService"],
                    _item_edit_guard__WEBPACK_IMPORTED_MODULE_3__["ItemEditGuard"]
                ],
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=5-es2015.js.map