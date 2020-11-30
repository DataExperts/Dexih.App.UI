(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "EIom":
/*!********************************************************************!*\
  !*** ./src/app/+hub/table/table-edit/table-edit-main.component.ts ***!
  \********************************************************************/
/*! exports provided: TableEditMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableEditMainComponent", function() { return TableEditMainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _hub_forms_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hub.forms.service */ "cvPx");
/* harmony import */ var _table_edit_properties_table_edit_properties_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table-edit-properties/table-edit-properties.component */ "Qrk8");





class TableEditMainComponent {
    constructor(formsService) {
        this.formsService = formsService;
    }
    ngOnInit() {
    }
    ngOnDestroy() {
    }
}
TableEditMainComponent.ɵfac = function TableEditMainComponent_Factory(t) { return new (t || TableEditMainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hub_forms_service__WEBPACK_IMPORTED_MODULE_1__["HubFormsService"])); };
TableEditMainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TableEditMainComponent, selectors: [["dexih-table-edit-form"]], decls: 1, vars: 1, consts: [[3, "formsService"]], template: function TableEditMainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dexih-table-edit-properties", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formsService", ctx.formsService);
    } }, directives: [_table_edit_properties_table_edit_properties_component__WEBPACK_IMPORTED_MODULE_2__["TableEditPropertiesComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableEditMainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dexih-table-edit-form',
                templateUrl: './table-edit-main.component.html'
            }]
    }], function () { return [{ type: _hub_forms_service__WEBPACK_IMPORTED_MODULE_1__["HubFormsService"] }]; }, null); })();


/***/ }),

/***/ "gQFH":
/*!************************************************************!*\
  !*** ./src/app/+hub/table/table-edit/table-edit.module.ts ***!
  \************************************************************/
/*! exports provided: TableEditModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableEditModule", function() { return TableEditModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/shared.module */ "PCNd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _table_edit_routing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./table-edit.routing */ "o0Jf");
/* harmony import */ var _table_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./table-edit.component */ "lgMK");
/* harmony import */ var _table_edit_main_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./table-edit-main.component */ "EIom");
/* harmony import */ var _hub_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hub.shared.module */ "RRRx");
/* harmony import */ var _item_edit_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../item-edit.guard */ "bK5D");
/* harmony import */ var _hub_forms_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hub.forms.service */ "cvPx");
/* harmony import */ var _table_column_edit_table_column_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./table-column-edit/table-column-edit.component */ "ugKZ");
/* harmony import */ var _table_shared_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../table.shared.module */ "vSNy");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "iInd");














class TableEditModule {
    static forRoot() {
        return {
            ngModule: TableEditModule,
            providers: [_hub_forms_service__WEBPACK_IMPORTED_MODULE_9__["HubFormsService"]]
        };
    }
}
TableEditModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TableEditModule });
TableEditModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TableEditModule_Factory(t) { return new (t || TableEditModule)(); }, providers: [
        _hub_forms_service__WEBPACK_IMPORTED_MODULE_9__["HubFormsService"],
        _item_edit_guard__WEBPACK_IMPORTED_MODULE_8__["ItemEditGuard"]
    ], imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _table_edit_routing__WEBPACK_IMPORTED_MODULE_4__["Routing"],
            _hub_shared_module__WEBPACK_IMPORTED_MODULE_7__["HubSharedModule"],
            _table_shared_module__WEBPACK_IMPORTED_MODULE_11__["TableSharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TableEditModule, { declarations: [_table_edit_component__WEBPACK_IMPORTED_MODULE_5__["TableEditComponent"],
        _table_edit_main_component__WEBPACK_IMPORTED_MODULE_6__["TableEditMainComponent"],
        _table_column_edit_table_column_edit_component__WEBPACK_IMPORTED_MODULE_10__["TableColumnEditComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["RouterModule"], _hub_shared_module__WEBPACK_IMPORTED_MODULE_7__["HubSharedModule"],
        _table_shared_module__WEBPACK_IMPORTED_MODULE_11__["TableSharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableEditModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _table_edit_routing__WEBPACK_IMPORTED_MODULE_4__["Routing"],
                    _hub_shared_module__WEBPACK_IMPORTED_MODULE_7__["HubSharedModule"],
                    _table_shared_module__WEBPACK_IMPORTED_MODULE_11__["TableSharedModule"]
                ],
                declarations: [
                    _table_edit_component__WEBPACK_IMPORTED_MODULE_5__["TableEditComponent"],
                    _table_edit_main_component__WEBPACK_IMPORTED_MODULE_6__["TableEditMainComponent"],
                    _table_column_edit_table_column_edit_component__WEBPACK_IMPORTED_MODULE_10__["TableColumnEditComponent"],
                ],
                providers: [
                    _hub_forms_service__WEBPACK_IMPORTED_MODULE_9__["HubFormsService"],
                    _item_edit_guard__WEBPACK_IMPORTED_MODULE_8__["ItemEditGuard"]
                ],
                exports: []
            }]
    }], null, null); })();


/***/ }),

/***/ "lgMK":
/*!***************************************************************!*\
  !*** ./src/app/+hub/table/table-edit/table-edit.component.ts ***!
  \***************************************************************/
/*! exports provided: TableEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableEditComponent", function() { return TableEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _hub_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hub.service */ "4Y1E");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../+auth/auth.service */ "ElCs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _hub_forms_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hub.forms.service */ "cvPx");
/* harmony import */ var _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/shared.models */ "soiQ");
/* harmony import */ var _hub_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hub.models */ "2v7R");
/* harmony import */ var _auth_auth_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../+auth/auth.models */ "3WyZ");
/* harmony import */ var ngx_d_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-d-components */ "8V27");
/* harmony import */ var _shared_ui_dexihFormControls_dexih_invalid_form_details_dexih_invalid_form_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/ui/dexihFormControls/dexih-invalid-form-details/dexih-invalid-form-details.component */ "iFLP");
/* harmony import */ var _buttons_actions_table_button_actions_table_button_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../buttons/actions-table-button/actions-table-button.component */ "Wz3H");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _buttons_cancel_button_cancel_button_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../buttons/cancel-button/cancel-button.component */ "64E1");
/* harmony import */ var _buttons_save_button_save_button_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../buttons/save-button/save-button.component */ "oLr2");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




















function TableEditComponent_ng_template_2_d_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableEditComponent_ng_template_2_d_button_2_Template_d_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.createPaths(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Create Paths ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TableEditComponent_ng_template_2_save_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "save-button", 9);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formsService", ctx_r3.formsService);
} }
const _c0 = function (a0) { return [a0]; };
const _c1 = function () { return []; };
function TableEditComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "dexih-invalid-form-details", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableEditComponent_ng_template_2_Template_dexih_invalid_form_details_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.formsService.showErrors(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "actions-table-button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changedTables", function TableEditComponent_ng_template_2_Template_actions_table_button_changedTables_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.changedTables($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableEditComponent_ng_template_2_d_button_2_Template, 2, 0, "d-button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TableEditComponent_ng_template_2_save_button_3_Template, 1, 1, "save-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "cancel-button", 7);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r1.formsService.currentForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showEdit", false)("tables", (ctx_r1.formsService == null ? null : ctx_r1.formsService.currentForm == null ? null : ctx_r1.formsService.currentForm.value) ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx_r1.formsService == null ? null : ctx_r1.formsService.currentForm == null ? null : ctx_r1.formsService.currentForm.value) : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r1.hubCache == null ? null : ctx_r1.hubCache.canWrite) && (ctx_r1.connectionReference == null ? null : ctx_r1.connectionReference.connectionCategory) == ctx_r1.eConnectionCategory.File);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.hubCache == null ? null : ctx_r1.hubCache.canWrite);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formsService", ctx_r1.formsService);
} }
class TableEditComponent {
    constructor(hubService, formsService, authService, route, router) {
        this.hubService = hubService;
        this.formsService = formsService;
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.eConnectionCategory = _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eConnectionCategory"];
        this.cancelToken = new _auth_auth_models__WEBPACK_IMPORTED_MODULE_8__["CancelToken"]();
        this.isLoaded = false;
    }
    ngOnInit() {
        try {
            this._subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])(this.route.data, this.route.params, this.hubService.getHubCacheObservable()).subscribe((result) => __awaiter(this, void 0, void 0, function* () {
                let data = result[0];
                this.params = result[1];
                this.hubCache = result[2];
                this.action = data['action'];
                this.pageTitle = data['pageTitle'];
                if (!this.hubCache || this.hubCache.status !== _hub_models__WEBPACK_IMPORTED_MODULE_7__["eCacheStatus"].Loaded) {
                    return;
                }
                if (this.isLoaded && this.action === 'new') {
                    return;
                }
                this.connectionReference = yield this.hubService.GetConnectionReference(this.connection);
                if (this.isLoaded && this.formsService.hasChanged) {
                    this.authService.confirmDialog('Synchronization warning', 'The hub was disconnected, meaning this edit could have been changed by another session.  Would you like to discard the current changes, and reload the latest version?')
                        .then(confirm => {
                        if (confirm) {
                            this.load();
                        }
                    }).catch(reason => {
                        return;
                    });
                }
                else {
                    this.load();
                }
            }));
        }
        catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Table Edit');
        }
    }
    ngOnDestroy() {
        if (this._hubCacheChangeSubscription) {
            this._hubCacheChangeSubscription.unsubscribe();
        }
        if (this._formChangeSubscription) {
            this._formChangeSubscription.unsubscribe();
        }
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
        this.cancelToken.cancel();
        // shut down service
        this.formsService.ngOnDestroy();
    }
    load() {
        this.isLoaded = true;
        if (this.action === 'edit') {
            // get the hub key from the route data, and update the service.
            this.tableKey = +this.params['tableKey'];
            if (!this.tableKey) {
                this.hubService.addHubErrorMessage('There was no table specified to edit.');
            }
            else {
                if (!this.hubCache.hub || !this.hubCache.hub.dexihDatajobs) {
                    this.hubService.addHubErrorMessage('The hub cache is not loaded.');
                }
                else {
                    let table = this.hubCache.getTable(this.tableKey);
                    if (!table) {
                        this.hubService.addHubErrorMessage('The specified table could not be found.');
                    }
                    else {
                        this.connection = this.hubCache.getConnection(table.connectionKey);
                        this.formsService.table(table);
                    }
                }
            }
        }
        if (this.action === 'new') {
            let table;
            if (this.hubService.newTable) {
                table = this.hubService.newTable;
                this.hubService.newTable = null;
            }
            else {
                this.connectionKey = +this.params['connectionKey'];
                table = new _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["DexihTable"]();
                table.key = 0;
                table.connectionKey = this.connectionKey;
            }
            this.formsService.table(table);
            // update the url with the saved key
            this._formChangeSubscription = this.formsService.getCurrentFormObservable().subscribe(tableForm => {
                let key = tableForm.controls.key.value;
                if (key) {
                    if (history.pushState) {
                        let newUrl = window.location.pathname.replace('/table-new', `/table-edit/${key}`);
                        this.router.navigateByUrl(newUrl);
                        this._formChangeSubscription.unsubscribe();
                    }
                }
            });
        }
    }
    close() {
        this.authService.navigateUp();
    }
    changedTables(tables) {
        this.formsService.table(tables[0]);
    }
    createPaths() {
        this.hubService.createPaths(this.formsService.currentForm.value, this.cancelToken).then(() => {
            this.hubService.addHubSuccessMessage('The paths have been created.');
        }).catch();
    }
    canDeactivate() {
        return new Promise((resolve) => {
            if (this.formsService.hasChanged) {
                this.authService.confirmDialog('The table has not been saved', 'The table changes have not been saved.  Do you want to discard the changes and exit?')
                    .then((confirm) => {
                    resolve(confirm);
                }).catch(() => {
                    resolve(false);
                });
            }
            else {
                resolve(true);
            }
        });
    }
    // @HostListener allows is to guard against browser refresh, close, etc.
    unloadNotification($event) {
        if (this.formsService.hasChanged) {
            $event.returnValue = 'The table changes have not been saved.  Do you want to discard the changes and exit?';
        }
    }
}
TableEditComponent.ɵfac = function TableEditComponent_Factory(t) { return new (t || TableEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hub_service__WEBPACK_IMPORTED_MODULE_2__["HubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hub_forms_service__WEBPACK_IMPORTED_MODULE_5__["HubFormsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
TableEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TableEditComponent, selectors: [["dexih-table-edit-form"]], hostBindings: function TableEditComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("beforeunload", function TableEditComponent_beforeunload_HostBindingHandler($event) { return ctx.unloadNotification($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 6, vars: 2, consts: [[1, "container"], ["iconClass", "fa fa-lg fa-fw fa-table", 3, "title", "showCloseButton", "close"], ["header", ""], [1, "mr-1", 3, "control", "click"], [1, "mr-1", 3, "showEdit", "tables", "changedTables"], ["class", "mr-1", "title", "Create the file paths (or folders).", "iconClass", "fa fa-folder-open", "buttonClass", "btn-primary", 3, "click", 4, "ngIf"], ["class", "mr-1", 3, "formsService", 4, "ngIf"], [3, "formsService"], ["title", "Create the file paths (or folders).", "iconClass", "fa fa-folder-open", "buttonClass", "btn-primary", 1, "mr-1", 3, "click"], [1, "mr-1", 3, "formsService"]], template: function TableEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "d-widget", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function TableEditComponent_Template_d_widget_close_1_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableEditComponent_ng_template_2_Template, 5, 9, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Edit Table (" + (ctx.formsService.currentForm == null ? null : ctx.formsService.currentForm.controls == null ? null : ctx.formsService.currentForm.controls.name == null ? null : ctx.formsService.currentForm.controls.name.value) + ")")("showCloseButton", true);
    } }, directives: [ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["DWidgetComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _shared_ui_dexihFormControls_dexih_invalid_form_details_dexih_invalid_form_details_component__WEBPACK_IMPORTED_MODULE_10__["DexihInvalidFormDetailsComponent"], _buttons_actions_table_button_actions_table_button_component__WEBPACK_IMPORTED_MODULE_11__["ActionsTableButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _buttons_cancel_button_cancel_button_component__WEBPACK_IMPORTED_MODULE_13__["CancelButtonComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["DButtonComponent"], _buttons_save_button_save_button_component__WEBPACK_IMPORTED_MODULE_14__["SaveButtonComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dexih-table-edit-form',
                templateUrl: './table-edit.component.html'
            }]
    }], function () { return [{ type: _hub_service__WEBPACK_IMPORTED_MODULE_2__["HubService"] }, { type: _hub_forms_service__WEBPACK_IMPORTED_MODULE_5__["HubFormsService"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { unloadNotification: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:beforeunload', ['$event']]
        }] }); })();


/***/ }),

/***/ "o0Jf":
/*!*************************************************************!*\
  !*** ./src/app/+hub/table/table-edit/table-edit.routing.ts ***!
  \*************************************************************/
/*! exports provided: tableEditRoutes, routes, Routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tableEditRoutes", function() { return tableEditRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routing", function() { return Routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _table_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./table-edit.component */ "lgMK");
/* harmony import */ var _table_column_edit_table_column_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./table-column-edit/table-column-edit.component */ "ugKZ");
/* harmony import */ var _item_edit_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../item-edit.guard */ "bK5D");
/* harmony import */ var _table_edit_preview_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./table-edit-preview-data */ "taGP");
/* harmony import */ var _table_edit_main_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./table-edit-main.component */ "EIom");
/* harmony import */ var _fileFormat__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../fileFormat */ "NUI7");







const tableEditRoutes = [
    { path: '', redirectTo: 'properties' },
    { path: 'properties', component: _table_edit_main_component__WEBPACK_IMPORTED_MODULE_5__["TableEditMainComponent"], data: { navigateSkip: true } },
    { path: 'column', component: _table_column_edit_table_column_edit_component__WEBPACK_IMPORTED_MODULE_2__["TableColumnEditComponent"], data: { pageTitle: 'Edit Column' } },
    { path: 'column/:columnKey', component: _table_column_edit_table_column_edit_component__WEBPACK_IMPORTED_MODULE_2__["TableColumnEditComponent"], data: { pageTitle: 'Edit Column' } },
    { path: 'table-preview/:tableKey', component: _table_edit_preview_data__WEBPACK_IMPORTED_MODULE_4__["TableEditPreviewDataComponent"], data: { pageTitle: 'Preview' } },
    { path: 'fileFormat-new', component: _fileFormat__WEBPACK_IMPORTED_MODULE_6__["FileFormatEditComponent"], data: { action: 'new', pageTitle: 'New File Format' } },
];
const routes = [
    { path: '', component: _table_edit_component__WEBPACK_IMPORTED_MODULE_1__["TableEditComponent"], canDeactivate: [_item_edit_guard__WEBPACK_IMPORTED_MODULE_3__["ItemEditGuard"]], children: tableEditRoutes },
];
const Routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "ugKZ":
/*!****************************************************************************************!*\
  !*** ./src/app/+hub/table/table-edit/table-column-edit/table-column-edit.component.ts ***!
  \****************************************************************************************/
/*! exports provided: TableColumnEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableColumnEditComponent", function() { return TableColumnEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../+auth/auth.service */ "ElCs");
/* harmony import */ var _hub_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hub.service */ "4Y1E");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _hub_forms_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../hub.forms.service */ "cvPx");
/* harmony import */ var _column_edit_column_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../column-edit/column-edit.component */ "dn85");












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
    } }, directives: [_column_edit_column_edit_component__WEBPACK_IMPORTED_MODULE_6__["ColumnEditComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableColumnEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dexih-table-column-edit',
                templateUrl: './table-column-edit.component.html',
            }]
    }], function () { return [{ type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _hub_service__WEBPACK_IMPORTED_MODULE_3__["HubService"] }, { type: _hub_forms_service__WEBPACK_IMPORTED_MODULE_5__["HubFormsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=1-es2015.js.map