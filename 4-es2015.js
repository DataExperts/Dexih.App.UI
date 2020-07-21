(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./src/app/+hub/test/datalinkTest-edit/datalinkTest-edit-guard.ts":
/*!************************************************************************!*\
  !*** ./src/app/+hub/test/datalinkTest-edit/datalinkTest-edit-guard.ts ***!
  \************************************************************************/
/*! exports provided: DatalinkTestEditGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatalinkTestEditGuard", function() { return DatalinkTestEditGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DatalinkTestEditGuard {
    canDeactivate(component) {
        return component && component.canDeactivate ? component.canDeactivate() : true;
    }
}
DatalinkTestEditGuard.ɵfac = function DatalinkTestEditGuard_Factory(t) { return new (t || DatalinkTestEditGuard)(); };
DatalinkTestEditGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DatalinkTestEditGuard, factory: DatalinkTestEditGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatalinkTestEditGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/+hub/test/datalinkTest-edit/datalinkTest-edit.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/+hub/test/datalinkTest-edit/datalinkTest-edit.component.ts ***!
  \****************************************************************************/
/*! exports provided: DatalinkTestEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatalinkTestEditComponent", function() { return DatalinkTestEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _hub_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hub.service */ "./src/app/+hub/hub.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../+auth/auth.service */ "./src/app/+auth/auth.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _hub_forms_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hub.forms.service */ "./src/app/+hub/hub.forms.service.ts");
/* harmony import */ var _hub_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hub.models */ "./src/app/+hub/hub.models.ts");
/* harmony import */ var _shared_shared_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/shared.models */ "./src/app/shared/shared.models.ts");
/* harmony import */ var ngx_d_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-d-components */ "./node_modules/ngx-d-components/__ivy_ngcc__/fesm2015/ngx-d-components.js");
/* harmony import */ var _shared_ui_dexihFormControls_dexih_invalid_form_details_dexih_invalid_form_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/ui/dexihFormControls/dexih-invalid-form-details/dexih-invalid-form-details.component */ "./src/app/shared/ui/dexihFormControls/dexih-invalid-form-details/dexih-invalid-form-details.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _buttons_cancel_button_cancel_button_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../buttons/cancel-button/cancel-button.component */ "./src/app/+hub/buttons/cancel-button/cancel-button.component.ts");
/* harmony import */ var _buttons_save_button_save_button_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../buttons/save-button/save-button.component */ "./src/app/+hub/buttons/save-button/save-button.component.ts");


















function DatalinkTestEditComponent_ng_template_2_save_button_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "save-button", 5);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formsService", ctx_r2.formsService);
} }
function DatalinkTestEditComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "dexih-invalid-form-details", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatalinkTestEditComponent_ng_template_2_Template_dexih_invalid_form_details_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.formsService.showErrors(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DatalinkTestEditComponent_ng_template_2_save_button_1_Template, 1, 1, "save-button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "cancel-button", 5);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r1.formsService.currentForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.hubCache.canWrite);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formsService", ctx_r1.formsService);
} }
class DatalinkTestEditComponent {
    constructor(hubService, formsService, authService, route, router) {
        this.hubService = hubService;
        this.formsService = formsService;
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.isLoaded = false;
    }
    ngOnInit() {
        try {
            this._subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])(this.route.data, this.route.params, this.hubService.getHubCacheObservable()).subscribe(result => {
                let data = result[0];
                this.params = result[1];
                this.hubCache = result[2];
                this.action = data['action'];
                this.pageTitle = data['pageTitle'];
                if (!this.hubCache || this.hubCache.status !== _hub_models__WEBPACK_IMPORTED_MODULE_6__["eCacheStatus"].Loaded) {
                    return;
                }
                if (this.isLoaded && this.action === 'new') {
                    return;
                }
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
            });
        }
        catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'DatalinkTest Edit');
        }
    }
    ngOnDestroy() {
        if (this._hubCacheChangeSubscription) {
            this._hubCacheChangeSubscription.unsubscribe();
        }
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
        if (this._formChangeSubscription) {
            this._formChangeSubscription.unsubscribe();
        }
        this.formsService.ngOnDestroy();
    }
    load() {
        this.isLoaded = true;
        if (this.action === 'edit') {
            // get the hub key from the route data, and update the service.
            this.datalinkTestKey = +this.params['datalinkTestKey'];
            if (!this.datalinkTestKey) {
                this.hubService.addHubErrorMessage('There was no datalink test specified to edit.');
            }
            else {
                if (!this.hubCache.hub || !this.hubCache.hub.dexihDatalinkTests) {
                    this.hubService.addHubErrorMessage('The hub cache is not loaded.');
                }
                else {
                    let datalinkTest = this.hubCache.hub.dexihDatalinkTests.find(c => c.key === this.datalinkTestKey);
                    if (!datalinkTest) {
                        this.hubService.addHubErrorMessage('The specified datalink test could not be found.');
                    }
                    else {
                        this.formsService.datalinkTest(datalinkTest);
                    }
                }
            }
        }
        if (this.action === 'new') {
            let datalinkTest = new _shared_shared_models__WEBPACK_IMPORTED_MODULE_7__["DexihDatalinkTest"]();
            datalinkTest.key = 0;
            this.formsService.datalinkTest(datalinkTest);
            // update the url with the saved key
            this._formChangeSubscription = this.formsService.getCurrentFormObservable().subscribe(form => {
                let key = form.controls.key.value;
                if (key) {
                    if (history.pushState) {
                        let newUrl = window.location.pathname.replace('/datalinkTest-new', `/datalinkTest-edit/${key}`);
                        this.router.navigateByUrl(newUrl);
                        this._formChangeSubscription.unsubscribe();
                    }
                }
            });
        }
    }
    canDeactivate() {
        return new Promise((resolve) => {
            if (this.formsService.hasChanged) {
                this.authService.confirmDialog('The data job has not been saved', 'The datalink test changes have not been saved.  Do you want to discard the changes and exit?')
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
            $event.returnValue = 'The datalink test changes have not been saved.  Do you want to discard the changes and exit?';
        }
    }
}
DatalinkTestEditComponent.ɵfac = function DatalinkTestEditComponent_Factory(t) { return new (t || DatalinkTestEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hub_service__WEBPACK_IMPORTED_MODULE_2__["HubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hub_forms_service__WEBPACK_IMPORTED_MODULE_5__["HubFormsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
DatalinkTestEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DatalinkTestEditComponent, selectors: [["dexih-datalinkTest-edit-form"]], hostBindings: function DatalinkTestEditComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("beforeunload", function DatalinkTestEditComponent_beforeunload_HostBindingHandler($event) { return ctx.unloadNotification($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 5, vars: 0, consts: [[1, "container"], ["title", "Edit Datalink Test", "iconClass", "fa fa-lg fa-fw fa-cog"], ["header", ""], [1, "mr-1", 3, "control", "click"], ["class", "mr-1", 3, "formsService", 4, "ngIf"], [1, "mr-1", 3, "formsService"]], template: function DatalinkTestEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "d-widget", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DatalinkTestEditComponent_ng_template_2_Template, 3, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [ngx_d_components__WEBPACK_IMPORTED_MODULE_8__["DWidgetComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _shared_ui_dexihFormControls_dexih_invalid_form_details_dexih_invalid_form_details_component__WEBPACK_IMPORTED_MODULE_9__["DexihInvalidFormDetailsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _buttons_cancel_button_cancel_button_component__WEBPACK_IMPORTED_MODULE_11__["CancelButtonComponent"], _buttons_save_button_save_button_component__WEBPACK_IMPORTED_MODULE_12__["SaveButtonComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatalinkTestEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dexih-datalinkTest-edit-form',
                templateUrl: './datalinkTest-edit.component.html'
            }]
    }], function () { return [{ type: _hub_service__WEBPACK_IMPORTED_MODULE_2__["HubService"] }, { type: _hub_forms_service__WEBPACK_IMPORTED_MODULE_5__["HubFormsService"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { unloadNotification: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:beforeunload', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/+hub/test/datalinkTest-edit/datalinkTest-edit.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/+hub/test/datalinkTest-edit/datalinkTest-edit.module.ts ***!
  \*************************************************************************/
/*! exports provided: DatalinkTestEditModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatalinkTestEditModule", function() { return DatalinkTestEditModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _datalinkTest_edit_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datalinkTest-edit.routing */ "./src/app/+hub/test/datalinkTest-edit/datalinkTest-edit.routing.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _datalinkTest_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datalinkTest-edit.component */ "./src/app/+hub/test/datalinkTest-edit/datalinkTest-edit.component.ts");
/* harmony import */ var _properties_datalinkTest_properties_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./properties/datalinkTest-properties.component */ "./src/app/+hub/test/datalinkTest-edit/properties/datalinkTest-properties.component.ts");
/* harmony import */ var _step_edit_datalinkTest_edit_step_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./step-edit/datalinkTest-edit-step.component */ "./src/app/+hub/test/datalinkTest-edit/step-edit/datalinkTest-edit-step.component.ts");
/* harmony import */ var _hub_forms_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../hub.forms.service */ "./src/app/+hub/hub.forms.service.ts");
/* harmony import */ var _datalinkTest_edit_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./datalinkTest-edit-guard */ "./src/app/+hub/test/datalinkTest-edit/datalinkTest-edit-guard.ts");
/* harmony import */ var _hub_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../hub.shared.module */ "./src/app/+hub/hub.shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");













class DatalinkTestEditModule {
    static forRoot() {
        return {
            ngModule: DatalinkTestEditModule,
            providers: [_hub_forms_service__WEBPACK_IMPORTED_MODULE_8__["HubFormsService"]]
        };
    }
}
DatalinkTestEditModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DatalinkTestEditModule });
DatalinkTestEditModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DatalinkTestEditModule_Factory(t) { return new (t || DatalinkTestEditModule)(); }, providers: [_hub_forms_service__WEBPACK_IMPORTED_MODULE_8__["HubFormsService"], _datalinkTest_edit_guard__WEBPACK_IMPORTED_MODULE_9__["DatalinkTestEditGuard"]], imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _datalinkTest_edit_routing__WEBPACK_IMPORTED_MODULE_2__["Routing"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _hub_shared_module__WEBPACK_IMPORTED_MODULE_10__["HubSharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DatalinkTestEditModule, { declarations: [_datalinkTest_edit_component__WEBPACK_IMPORTED_MODULE_5__["DatalinkTestEditComponent"],
        _properties_datalinkTest_properties_component__WEBPACK_IMPORTED_MODULE_6__["DatalinkTestPropertiesComponent"],
        _step_edit_datalinkTest_edit_step_component__WEBPACK_IMPORTED_MODULE_7__["DatalinkTestEditStepComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _hub_shared_module__WEBPACK_IMPORTED_MODULE_10__["HubSharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatalinkTestEditModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _datalinkTest_edit_routing__WEBPACK_IMPORTED_MODULE_2__["Routing"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _hub_shared_module__WEBPACK_IMPORTED_MODULE_10__["HubSharedModule"]
                ],
                declarations: [
                    _datalinkTest_edit_component__WEBPACK_IMPORTED_MODULE_5__["DatalinkTestEditComponent"],
                    _properties_datalinkTest_properties_component__WEBPACK_IMPORTED_MODULE_6__["DatalinkTestPropertiesComponent"],
                    _step_edit_datalinkTest_edit_step_component__WEBPACK_IMPORTED_MODULE_7__["DatalinkTestEditStepComponent"],
                ],
                providers: [_hub_forms_service__WEBPACK_IMPORTED_MODULE_8__["HubFormsService"], _datalinkTest_edit_guard__WEBPACK_IMPORTED_MODULE_9__["DatalinkTestEditGuard"]],
                exports: []
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/+hub/test/datalinkTest-edit/datalinkTest-edit.routing.ts":
/*!**************************************************************************!*\
  !*** ./src/app/+hub/test/datalinkTest-edit/datalinkTest-edit.routing.ts ***!
  \**************************************************************************/
/*! exports provided: editRoutes, routes, Routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editRoutes", function() { return editRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routing", function() { return Routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _datalinkTest_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datalinkTest-edit.component */ "./src/app/+hub/test/datalinkTest-edit/datalinkTest-edit.component.ts");
/* harmony import */ var _properties_datalinkTest_properties_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./properties/datalinkTest-properties.component */ "./src/app/+hub/test/datalinkTest-edit/properties/datalinkTest-properties.component.ts");
/* harmony import */ var _step_edit_datalinkTest_edit_step_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./step-edit/datalinkTest-edit-step.component */ "./src/app/+hub/test/datalinkTest-edit/step-edit/datalinkTest-edit-step.component.ts");
/* harmony import */ var _datalinkTest_edit_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./datalinkTest-edit-guard */ "./src/app/+hub/test/datalinkTest-edit/datalinkTest-edit-guard.ts");





const editRoutes = [
    { path: '', redirectTo: 'properties', data: { navigateSkip: true } },
    { path: 'properties', component: _properties_datalinkTest_properties_component__WEBPACK_IMPORTED_MODULE_2__["DatalinkTestPropertiesComponent"], data: { navigateSkip: true, pageTitle: 'Properties' } },
    { path: 'step', component: _step_edit_datalinkTest_edit_step_component__WEBPACK_IMPORTED_MODULE_3__["DatalinkTestEditStepComponent"], data: { pageTitle: 'New Step' } },
    { path: 'step/:datalinkTestStepKey', component: _step_edit_datalinkTest_edit_step_component__WEBPACK_IMPORTED_MODULE_3__["DatalinkTestEditStepComponent"], data: { pageTitle: 'Edit Step' } },
];
const routes = [
    { path: '', component: _datalinkTest_edit_component__WEBPACK_IMPORTED_MODULE_1__["DatalinkTestEditComponent"], canDeactivate: [_datalinkTest_edit_guard__WEBPACK_IMPORTED_MODULE_4__["DatalinkTestEditGuard"]], children: editRoutes },
];
const Routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/+hub/test/datalinkTest-edit/properties/datalinkTest-properties.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/+hub/test/datalinkTest-edit/properties/datalinkTest-properties.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: DatalinkTestPropertiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatalinkTestPropertiesComponent", function() { return DatalinkTestPropertiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _hub_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hub.service */ "./src/app/+hub/hub.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../+auth/auth.service */ "./src/app/+auth/auth.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _hub_forms_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../hub.forms.service */ "./src/app/+hub/hub.forms.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_d_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-d-table */ "./node_modules/ngx-d-table/__ivy_ngcc__/fesm2015/ngx-d-table.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_d_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-d-components */ "./node_modules/ngx-d-components/__ivy_ngcc__/fesm2015/ngx-d-components.js");
/* harmony import */ var _buttons_connection_edit_button_connection_edit_button_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../buttons/connection-edit-button/connection-edit-button.component */ "./src/app/+hub/buttons/connection-edit-button/connection-edit-button.component.ts");
















function DatalinkTestPropertiesComponent_form_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "form-input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "form-textarea", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form-select", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "connection-edit-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.mainForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autocapitalize", ctx_r0.on)("errors", ctx_r0.formsService.formErrors["name"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r0.formsService.formErrors["description"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r0.hubCache.hub.dexihConnections)("errors", ctx_r0.formsService.formErrors.auditConnectionKey);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("key", ctx_r0.mainForm.controls.auditConnectionKey.value);
} }
function DatalinkTestPropertiesComponent_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button-delete", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatalinkTestPropertiesComponent_ng_template_12_Template_d_button_delete_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const items_r7 = ctx.items; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.deleteSteps(items_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DatalinkTestPropertiesComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button-edit", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatalinkTestPropertiesComponent_ng_template_14_Template_d_button_edit_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const item_r10 = ctx.item; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.editStep(item_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DatalinkTestPropertiesComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button-new", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatalinkTestPropertiesComponent_ng_template_16_Template_d_button_new_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.newStep(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DatalinkTestPropertiesComponent {
    constructor(hubService, authService, formsService, route, router) {
        this.hubService = hubService;
        this.authService = authService;
        this.formsService = formsService;
        this.route = route;
        this.router = router;
        this.hasChanged = false;
        this.stepColumns = [
            { name: 'name', title: 'Name', format: '' },
            { name: 'datalink', title: 'Datalink', format: '' },
            { name: 'updateDate', title: 'Last Modified', format: 'Calendar' },
            { name: 'errors', title: 'Errors', format: '' },
        ];
        this._stepTableData = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.stepTableData = this._stepTableData.asObservable();
    }
    ngOnInit() {
        try {
            this._subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])(this.hubService.getHubCacheObservable(), this.formsService.getCurrentFormObservable()).subscribe(result => {
                this.hubCache = result[0];
                this.mainForm = result[1];
                this.updateSteps();
            });
        }
        catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Data Job Edit Properties');
        }
    }
    ngOnDestroy() {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
    }
    updateSteps() {
        let stepData = [];
        if (this.mainForm) {
            let steps = this.mainForm.controls['dexihDatalinkTestSteps'];
            steps.controls.forEach(stepControl => {
                let step = stepControl.value;
                let datalink = this.hubCache.hub.dexihDatalinks.find(c => c.key === step.datalinkKey);
                stepData.push({
                    key: step.key,
                    name: step.name,
                    datalink: datalink ? datalink.name : 'Not specified',
                    updateDate: step.updateDate,
                    errors: stepControl.valid ? 'No errors' : 'Errors'
                });
            });
        }
        this._stepTableData.next(stepData);
    }
    newStep() {
        this.router.navigate(['step'], { relativeTo: this.route.parent });
    }
    editStep(step) {
        this.router.navigate(['step', step.key], { relativeTo: this.route.parent });
    }
    deleteSteps(steps) {
        let stepsArray = this.mainForm.controls.dexihDatalinkTestSteps;
        steps.forEach(step => {
            let index = stepsArray.controls.findIndex(c => c.value.datalinkTestStepKey === step.key);
            stepsArray.removeAt(index);
        });
        this.updateSteps();
    }
    close() {
        this.authService.navigateUp();
    }
}
DatalinkTestPropertiesComponent.ɵfac = function DatalinkTestPropertiesComponent_Factory(t) { return new (t || DatalinkTestPropertiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hub_service__WEBPACK_IMPORTED_MODULE_2__["HubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hub_forms_service__WEBPACK_IMPORTED_MODULE_5__["HubFormsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
DatalinkTestPropertiesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DatalinkTestPropertiesComponent, selectors: [["datalinkTest-properties-form"]], decls: 18, vars: 5, consts: [[1, "list-group-item", "list-group-item-info", "rounded-0"], [1, "d-flex", "flex-row"], [1, "list-group-item", "p-3"], [3, "formGroup", 4, "ngIf"], [1, "list-group-item", "p-0"], ["sortColumn", "position", 3, "enableMultiSelect", "enableManualSort", "columns", "dataObservable", "rowClick"], ["select", "selectedItemsAction"], ["selectedItemsAction", ""], ["select", "selectedItemAction"], ["selectedItemAction", ""], ["select", "actionsTemplate"], ["actions", ""], [3, "formGroup"], ["label", "Test Name", "formControlName", "name", "placeholder", "Enter the name.", "iconClass", "fa fa-list", 3, "autocapitalize", "errors"], ["label", "Description", "formControlName", "description", "placeholder", "Enter a description", "iconClass", "fa fa-comment", 3, "errors"], ["label", "Audit Connection", "formControlName", "auditConnectionKey", "itemKey", "key", "itemName", "name", "iconClass", "fa fa-database", "note", "Connection where test results are stored.", 3, "items", "errors"], [3, "key"], [3, "click"], ["title", "Create a new step", 1, "mr-1", 3, "click"]], template: function DatalinkTestPropertiesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Properties");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DatalinkTestPropertiesComponent_form_5_Template, 9, 7, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Steps");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "d-table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rowClick", function DatalinkTestPropertiesComponent_Template_d_table_rowClick_11_listener($event) { return ctx.editStep($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DatalinkTestPropertiesComponent_ng_template_12_Template, 1, 0, "ng-template", 6, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DatalinkTestPropertiesComponent_ng_template_14_Template, 1, 0, "ng-template", 8, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DatalinkTestPropertiesComponent_ng_template_16_Template, 1, 0, "ng-template", 10, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mainForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("enableMultiSelect", true)("enableManualSort", true)("columns", ctx.stepColumns)("dataObservable", ctx.stepTableData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], ngx_d_table__WEBPACK_IMPORTED_MODULE_7__["DTableComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroupDirective"], ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["DFormInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControlName"], ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["DFormTextAreaComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["DFormSelectComponent"], _buttons_connection_edit_button_connection_edit_button_component__WEBPACK_IMPORTED_MODULE_10__["ConnectionEditButtonComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["DButtonDeleteComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["DButtonEditComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["DButtonNewComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatalinkTestPropertiesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'datalinkTest-properties-form',
                templateUrl: './datalinkTest-properties.component.html'
            }]
    }], function () { return [{ type: _hub_service__WEBPACK_IMPORTED_MODULE_2__["HubService"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _hub_forms_service__WEBPACK_IMPORTED_MODULE_5__["HubFormsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/+hub/test/datalinkTest-edit/step-edit/datalinkTest-edit-step.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/+hub/test/datalinkTest-edit/step-edit/datalinkTest-edit-step.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: DatalinkTestEditStepComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatalinkTestEditStepComponent", function() { return DatalinkTestEditStepComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _hub_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hub.service */ "./src/app/+hub/hub.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../+auth/auth.service */ "./src/app/+auth/auth.service.ts");
/* harmony import */ var _hub_forms_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../hub.forms.service */ "./src/app/+hub/hub.forms.service.ts");
/* harmony import */ var _shared_shared_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/shared.models */ "./src/app/shared/shared.models.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_d_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-d-components */ "./node_modules/ngx-d-components/__ivy_ngcc__/fesm2015/ngx-d-components.js");
/* harmony import */ var _buttons_datalink_edit_button_datalink_edit_button_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../buttons/datalink-edit-button/datalink-edit-button.component */ "./src/app/+hub/buttons/datalink-edit-button/datalink-edit-button.component.ts");
/* harmony import */ var _buttons_connection_edit_button_connection_edit_button_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../buttons/connection-edit-button/connection-edit-button.component */ "./src/app/+hub/buttons/connection-edit-button/connection-edit-button.component.ts");


















function DatalinkTestEditStepComponent_div_0_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form-select", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "connection-edit-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "form-input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "form-input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form-select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "connection-edit-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "section", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "form-input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "form-input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "form-select", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "connection-edit-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "section", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "form-input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "section", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "form-input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.stepFormService.currentForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r1.hubCache.hub.dexihConnections)("errors", ctx_r1.stepFormService.formErrors.targetConnectionKey);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("key", ctx_r1.stepFormService.currentForm.controls.targetConnectionKey == null ? null : ctx_r1.stepFormService.currentForm.controls.targetConnectionKey.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r1.stepFormService.formErrors["targetTableName"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r1.stepFormService.formErrors["targetSchema"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r1.hubCache.hub.dexihConnections)("errors", ctx_r1.stepFormService.formErrors.expectedConnectionKey);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("key", ctx_r1.stepFormService.currentForm.controls.expectedConnectionKey == null ? null : ctx_r1.stepFormService.currentForm.controls.expectedConnectionKey.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r1.stepFormService.formErrors["expectedTableName"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r1.stepFormService.formErrors["expectedSchema"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r1.hubCache.hub.dexihConnections)("errors", ctx_r1.stepFormService.formErrors.errorConnectionKey);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("key", ctx_r1.stepFormService.currentForm.controls.errorConnectionKey == null ? null : ctx_r1.stepFormService.currentForm.controls.errorConnectionKey.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r1.stepFormService.formErrors["errorTableName"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r1.stepFormService.formErrors["errorSchema"]);
} }
function DatalinkTestEditStepComponent_div_0_div_26_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form-select", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "connection-edit-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "form-input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "form-input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form-select", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "connection-edit-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "section", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "form-input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "form-input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const testTable_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", testTable_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r5.hubCache.hub.dexihConnections)("errors", ctx_r5.stepFormService.formErrors.sourceConnectionKey);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("key", ctx_r5.stepFormService.currentForm.controls.sourceConnectionKey == null ? null : ctx_r5.stepFormService.currentForm.controls.sourceConnectionKey.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r5.stepFormService.formErrors["sourceTableName"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r5.stepFormService.formErrors["sourceSchema"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r5.hubCache.hub.dexihConnections)("errors", ctx_r5.stepFormService.formErrors.testConnectionKey);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("key", ctx_r5.stepFormService.currentForm.controls.testConnectionKey == null ? null : ctx_r5.stepFormService.currentForm.controls.testConnectionKey.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r5.stepFormService.formErrors["testTableName"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r5.stepFormService.formErrors["testSchema"]);
} }
function DatalinkTestEditStepComponent_div_0_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "d-button-apply", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatalinkTestEditStepComponent_div_0_div_26_Template_d_button_apply_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.applyExit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "d-button-cancel", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatalinkTestEditStepComponent_div_0_div_26_Template_d_button_cancel_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DatalinkTestEditStepComponent_div_0_div_26_div_8_Template, 19, 11, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r4 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Source Table: ", ctx_r2.inputTableNames[i_r4], "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r2.stepFormService.hasChanged);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.stepFormService.currentForm);
} }
function DatalinkTestEditStepComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Step Properties");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "d-button-apply", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatalinkTestEditStepComponent_div_0_Template_d_button_apply_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.applyExit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "d-button-cancel", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatalinkTestEditStepComponent_div_0_Template_d_button_cancel_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "form-input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "form-textarea", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "form-select", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "datalink-edit-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "d-button-apply", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatalinkTestEditStepComponent_div_0_Template_d_button_apply_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.applyExit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "d-button-cancel", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatalinkTestEditStepComponent_div_0_Template_d_button_cancel_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, DatalinkTestEditStepComponent_div_0_div_25_Template, 27, 16, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, DatalinkTestEditStepComponent_div_0_div_26_Template, 9, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.stepFormService.hasChanged);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.stepFormService.currentForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autocapitalize", ctx_r0.on)("errors", ctx_r0.stepFormService.formErrors.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r0.stepFormService.formErrors["description"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r0.hubCache.hub.dexihDatalinks)("errors", ctx_r0.stepFormService.formErrors.datalinkKey);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("key", ctx_r0.stepFormService.currentForm.controls.datalinkKey == null ? null : ctx_r0.stepFormService.currentForm.controls.datalinkKey.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Target Table: ", ctx_r0.targetTableName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.stepFormService.hasChanged);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.stepFormService.currentForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.stepFormService.currentForm.controls.dexihDatalinkTestTables.controls);
} }
class DatalinkTestEditStepComponent {
    constructor(hubService, authService, formService, route, fb) {
        this.hubService = hubService;
        this.authService = authService;
        this.formService = formService;
        this.route = route;
        this.fb = fb;
        this.showAllErrors = false;
        this.stepColumns = [
            { name: 'name', title: 'Name', format: '' },
            { name: 'datalink', title: 'Datalink', format: '' },
            { name: 'dependencies', title: 'Dependencies', format: '' },
            { name: 'updateDate', title: 'Last Modified', format: 'Calendar' },
        ];
        this._stepTableData = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.stepTableData = this._stepTableData.asObservable();
        // create a separate formService instance to manage the copied form
        this.stepFormService = new _hub_forms_service__WEBPACK_IMPORTED_MODULE_6__["HubFormsService"](fb, hubService, authService);
    }
    ngOnInit() {
        try {
            this._subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(this.route.data, this.route.params, this.hubService.getHubCacheObservable(), this.formService.getCurrentFormObservable()).subscribe(result => {
                let params = result[1];
                this.hubCache = result[2];
                let mainForm = result[3];
                this.datalinkTestStepKey = +params['datalinkTestStepKey'];
                if (mainForm) {
                    this.datalinkTestForm = mainForm;
                    let step;
                    if (this.datalinkTestStepKey) {
                        step = mainForm.value.dexihDatalinkTestSteps
                            .find(c => c.key === this.datalinkTestStepKey);
                        if (!step) {
                            this.authService.navigateUp();
                            return;
                        }
                    }
                    else {
                        step = new _shared_shared_models__WEBPACK_IMPORTED_MODULE_7__["DexihDatalinkTestStep"]();
                        // if new trigger, then set a temporary key of -1 or lower.
                        let minKey = -1;
                        this.datalinkTestForm.value.dexihDatalinkTestSteps.forEach(t => {
                            if (t.key <= minKey) {
                                minKey = t.key - 1;
                            }
                        });
                        step.key = minKey;
                        this.datalinkTestStepKey = minKey;
                        step.isValid = true;
                    }
                    this.updateTableNames(step);
                    const stepForm = this.stepFormService.datalinkTestStep(step);
                    this._formChanges = stepForm.controls.datalinkKey.valueChanges.subscribe(datalinkKey => {
                        this.updateTableNames(stepForm.value);
                    });
                    this.stepFormService.startForm(stepForm);
                }
            });
        }
        catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'DatalinkTest Edit Step');
        }
    }
    ngOnDestroy() {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
    }
    updateTableNames(step) {
        this.inputTableNames = step.dexihDatalinkTestTables.map(tt => {
            let table = this.hubCache.getTable(tt.tableKey);
            if (table) {
                return table.name;
            }
            else {
                return 'Table not found.';
            }
        });
        this.targetTableName = 'No target defined.';
        if (step.datalinkKey) {
            let datalink = this.hubCache.hub.dexihDatalinks.find(c => c.key === step.datalinkKey);
            if (datalink && datalink.dexihDatalinkTargets.length > 0) {
                this.targetTableName = datalink.dexihDatalinkTargets.map(c => this.hubCache.getTable(c.tableKey).name).join(', ');
            }
        }
    }
    cancel() {
        this.authService.navigateUp();
    }
    applyExit() {
        const stepForm = this.stepFormService.currentForm;
        const stepsArray = this.datalinkTestForm.controls.dexihDatalinkTestSteps;
        const index = stepsArray.controls
            .findIndex(c => c.value.key === this.datalinkTestStepKey && c.value.isValid);
        if (index < 0) {
            stepsArray.push(stepForm);
        }
        else {
            stepsArray.removeAt(index);
            stepsArray.push(stepForm);
        }
        this.authService.navigateUp();
    }
}
DatalinkTestEditStepComponent.ɵfac = function DatalinkTestEditStepComponent_Factory(t) { return new (t || DatalinkTestEditStepComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hub_service__WEBPACK_IMPORTED_MODULE_2__["HubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hub_forms_service__WEBPACK_IMPORTED_MODULE_6__["HubFormsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"])); };
DatalinkTestEditStepComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DatalinkTestEditStepComponent, selectors: [["datalinkTest-edit-step"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "list-group-item", "list-group-item-info", "rounded-0"], [1, "d-flex", "flex-row"], [1, "ml-auto"], [1, "mr-1", 3, "disabled", "click"], [3, "click"], [1, "list-group-item"], [3, "formGroup"], ["label", "Data Step Name", "formControlName", "name", "placeholder", "Enter the step name.", "iconClass", "fa fa-list", "note", "Enter a name for the data step, blank will use datalink name.", 3, "autocapitalize", "errors"], ["label", "Description", "formControlName", "description", "placeholder", "Enter a description", "iconClass", "fa fa-comment", 3, "errors"], ["label", "Data Link", "formControlName", "datalinkKey", "itemKey", "key", "itemName", "name", "iconClass", "fa fa-database", 3, "items", "errors"], [3, "key"], ["class", "list-group-item", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["label", "Target Connection", "formControlName", "targetConnectionKey", "itemKey", "key", "itemName", "name", "iconClass", "fa fa-database", "note", "Connection for the datalink target table", 3, "items", "errors"], [1, "form-row"], [1, "form-group", "col-md-6"], ["label", "Target Table Name", "formControlName", "targetTableName", "placeholder", "Enter the name.", "iconClass", "fa fa-list", "note", "Name of target table", 3, "errors"], ["label", "Target Table Schema", "formControlName", "targetSchema", "placeholder", "Enter the name.", "iconClass", "fa fa-list", 3, "errors"], ["label", "Expected Connection", "formControlName", "expectedConnectionKey", "itemKey", "key", "itemName", "name", "iconClass", "fa fa-database", "note", "Connection where the expected target data is.", 3, "items", "errors"], ["label", "Expected Table Name", "formControlName", "expectedTableName", "placeholder", "Enter the name.", "iconClass", "fa fa-list", 3, "errors"], ["label", "Expected Table Schema", "formControlName", "expectedSchema", "placeholder", "Enter the name.", "iconClass", "fa fa-list", 3, "errors"], ["label", "Error Connection", "formControlName", "errorConnectionKey", "itemKey", "key", "itemName", "name", "iconClass", "fa fa-database", "note", "Connection where the error data should be sent.", 3, "items", "errors"], ["label", "Error Table Name", "formControlName", "errorTableName", "placeholder", "Enter the name.", "iconClass", "fa fa-list", 3, "errors"], ["label", "Error Table Schema", "formControlName", "errorSchema", "placeholder", "Enter the name.", "iconClass", "fa fa-list", 3, "errors"], ["label", "Source Connection", "formControlName", "sourceConnectionKey", "itemKey", "key", "itemName", "name", "iconClass", "fa fa-database", "note", "Connection where the source test data is.", 3, "items", "errors"], ["label", "Source Table Name", "formControlName", "sourceTableName", "placeholder", "Enter the name.", "iconClass", "fa fa-list", 3, "errors"], ["label", "Source Table Schema", "formControlName", "sourceSchema", "placeholder", "Enter the name.", "iconClass", "fa fa-list", 3, "errors"], ["label", "Test Connection", "formControlName", "testConnectionKey", "itemKey", "key", "itemName", "name", "iconClass", "fa fa-database", "note", "Connection where the test data is.", 3, "items", "errors"], ["label", "Test Table Name", "formControlName", "testTableName", "placeholder", "Enter the name.", "iconClass", "fa fa-list", 3, "errors"], ["label", "Test Table Schema", "formControlName", "testSchema", "placeholder", "Enter the name.", "iconClass", "fa fa-list", 3, "errors"]], template: function DatalinkTestEditStepComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DatalinkTestEditStepComponent_div_0_Template, 27, 12, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.stepFormService.currentForm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["DButtonApplyComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["DButtonCancelComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["DFormInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["DFormTextAreaComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["DFormSelectComponent"], _buttons_datalink_edit_button_datalink_edit_button_component__WEBPACK_IMPORTED_MODULE_10__["DatalinkEditButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _buttons_connection_edit_button_connection_edit_button_component__WEBPACK_IMPORTED_MODULE_11__["ConnectionEditButtonComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatalinkTestEditStepComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'datalinkTest-edit-step',
                templateUrl: './datalinkTest-edit-step.component.html'
            }]
    }], function () { return [{ type: _hub_service__WEBPACK_IMPORTED_MODULE_2__["HubService"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }, { type: _hub_forms_service__WEBPACK_IMPORTED_MODULE_6__["HubFormsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=4-es2015.js.map