(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./src/app/+hub/datajob/datajob-edit/datajob-edit-guard.ts":
/*!*****************************************************************!*\
  !*** ./src/app/+hub/datajob/datajob-edit/datajob-edit-guard.ts ***!
  \*****************************************************************/
/*! exports provided: DatajobEditGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatajobEditGuard", function() { return DatajobEditGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DatajobEditGuard {
    canDeactivate(component) {
        return component && component.canDeactivate ? component.canDeactivate() : true;
    }
}
DatajobEditGuard.ɵfac = function DatajobEditGuard_Factory(t) { return new (t || DatajobEditGuard)(); };
DatajobEditGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DatajobEditGuard, factory: DatajobEditGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatajobEditGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/+hub/datajob/datajob-edit/datajob-edit.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/+hub/datajob/datajob-edit/datajob-edit.module.ts ***!
  \******************************************************************/
/*! exports provided: DatajobEditModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatajobEditModule", function() { return DatajobEditModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _datajob_edit_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datajob-edit.routing */ "./src/app/+hub/datajob/datajob-edit/datajob-edit.routing.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _datajob_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datajob-edit.component */ "./src/app/+hub/datajob/datajob-edit/datajob-edit.component.ts");
/* harmony import */ var _properties_datajob_edit_properties_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./properties/datajob-edit-properties.component */ "./src/app/+hub/datajob/datajob-edit/properties/datajob-edit-properties.component.ts");
/* harmony import */ var _trigger_edit_datajob_edit_trigger_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./trigger-edit/datajob-edit-trigger.component */ "./src/app/+hub/datajob/datajob-edit/trigger-edit/datajob-edit-trigger.component.ts");
/* harmony import */ var _step_edit_datajob_edit_step_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./step-edit/datajob-edit-step.component */ "./src/app/+hub/datajob/datajob-edit/step-edit/datajob-edit-step.component.ts");
/* harmony import */ var _steps_add_datajob_add_steps_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./steps-add/datajob-add-steps.component */ "./src/app/+hub/datajob/datajob-edit/steps-add/datajob-add-steps.component.ts");
/* harmony import */ var _trigger_edit_dexih_form_daysofweek_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./trigger-edit/dexih-form-daysofweek.component */ "./src/app/+hub/datajob/datajob-edit/trigger-edit/dexih-form-daysofweek.component.ts");
/* harmony import */ var _hub_forms_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../hub.forms.service */ "./src/app/+hub/hub.forms.service.ts");
/* harmony import */ var _datajob_edit_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./datajob-edit-guard */ "./src/app/+hub/datajob/datajob-edit/datajob-edit-guard.ts");
/* harmony import */ var _hub_shared_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../hub.shared.module */ "./src/app/+hub/hub.shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
















class DatajobEditModule {
    static forRoot() {
        return {
            ngModule: DatajobEditModule,
            providers: [_hub_forms_service__WEBPACK_IMPORTED_MODULE_11__["HubFormsService"]]
        };
    }
}
DatajobEditModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DatajobEditModule });
DatajobEditModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DatajobEditModule_Factory(t) { return new (t || DatajobEditModule)(); }, providers: [_hub_forms_service__WEBPACK_IMPORTED_MODULE_11__["HubFormsService"], _datajob_edit_guard__WEBPACK_IMPORTED_MODULE_12__["DatajobEditGuard"]], imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _datajob_edit_routing__WEBPACK_IMPORTED_MODULE_2__["Routing"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _hub_shared_module__WEBPACK_IMPORTED_MODULE_13__["HubSharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DatajobEditModule, { declarations: [_datajob_edit_component__WEBPACK_IMPORTED_MODULE_5__["DatajobEditComponent"],
        _properties_datajob_edit_properties_component__WEBPACK_IMPORTED_MODULE_6__["DatajobEditPropertiesComponent"],
        _trigger_edit_datajob_edit_trigger_component__WEBPACK_IMPORTED_MODULE_7__["DatajobEditTriggerComponent"],
        _step_edit_datajob_edit_step_component__WEBPACK_IMPORTED_MODULE_8__["DatajobEditStepComponent"],
        _steps_add_datajob_add_steps_component__WEBPACK_IMPORTED_MODULE_9__["DatajobAddStepsComponent"],
        _trigger_edit_dexih_form_daysofweek_component__WEBPACK_IMPORTED_MODULE_10__["DexihFormDaysOfWeekComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _hub_shared_module__WEBPACK_IMPORTED_MODULE_13__["HubSharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatajobEditModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _datajob_edit_routing__WEBPACK_IMPORTED_MODULE_2__["Routing"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _hub_shared_module__WEBPACK_IMPORTED_MODULE_13__["HubSharedModule"]
                ],
                declarations: [
                    _datajob_edit_component__WEBPACK_IMPORTED_MODULE_5__["DatajobEditComponent"],
                    _properties_datajob_edit_properties_component__WEBPACK_IMPORTED_MODULE_6__["DatajobEditPropertiesComponent"],
                    _trigger_edit_datajob_edit_trigger_component__WEBPACK_IMPORTED_MODULE_7__["DatajobEditTriggerComponent"],
                    _step_edit_datajob_edit_step_component__WEBPACK_IMPORTED_MODULE_8__["DatajobEditStepComponent"],
                    _steps_add_datajob_add_steps_component__WEBPACK_IMPORTED_MODULE_9__["DatajobAddStepsComponent"],
                    _trigger_edit_dexih_form_daysofweek_component__WEBPACK_IMPORTED_MODULE_10__["DexihFormDaysOfWeekComponent"]
                ],
                providers: [_hub_forms_service__WEBPACK_IMPORTED_MODULE_11__["HubFormsService"], _datajob_edit_guard__WEBPACK_IMPORTED_MODULE_12__["DatajobEditGuard"]],
                exports: []
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/+hub/datajob/datajob-edit/datajob-edit.routing.ts":
/*!*******************************************************************!*\
  !*** ./src/app/+hub/datajob/datajob-edit/datajob-edit.routing.ts ***!
  \*******************************************************************/
/*! exports provided: datajobEditRoutes, routes, Routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "datajobEditRoutes", function() { return datajobEditRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routing", function() { return Routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _datajob_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./datajob-edit.component */ "./src/app/+hub/datajob/datajob-edit/datajob-edit.component.ts");
/* harmony import */ var _properties_datajob_edit_properties_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./properties/datajob-edit-properties.component */ "./src/app/+hub/datajob/datajob-edit/properties/datajob-edit-properties.component.ts");
/* harmony import */ var _trigger_edit_datajob_edit_trigger_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trigger-edit/datajob-edit-trigger.component */ "./src/app/+hub/datajob/datajob-edit/trigger-edit/datajob-edit-trigger.component.ts");
/* harmony import */ var _step_edit_datajob_edit_step_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./step-edit/datajob-edit-step.component */ "./src/app/+hub/datajob/datajob-edit/step-edit/datajob-edit-step.component.ts");
/* harmony import */ var _steps_add_datajob_add_steps_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./steps-add/datajob-add-steps.component */ "./src/app/+hub/datajob/datajob-edit/steps-add/datajob-add-steps.component.ts");
/* harmony import */ var _datajob_edit_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./datajob-edit-guard */ "./src/app/+hub/datajob/datajob-edit/datajob-edit-guard.ts");







const datajobEditRoutes = [
    { path: '', redirectTo: 'properties', data: { navigateSkip: true } },
    { path: 'properties', component: _properties_datajob_edit_properties_component__WEBPACK_IMPORTED_MODULE_2__["DatajobEditPropertiesComponent"], data: { navigateSkip: true, pageTitle: 'Properties' } },
    { path: 'trigger', component: _trigger_edit_datajob_edit_trigger_component__WEBPACK_IMPORTED_MODULE_3__["DatajobEditTriggerComponent"], data: { pageTitle: 'New Trigger' } },
    { path: 'trigger/:triggerKey', component: _trigger_edit_datajob_edit_trigger_component__WEBPACK_IMPORTED_MODULE_3__["DatajobEditTriggerComponent"], data: { pageTitle: 'Edit Trigger' } },
    { path: 'step', component: _step_edit_datajob_edit_step_component__WEBPACK_IMPORTED_MODULE_4__["DatajobEditStepComponent"], data: { pageTitle: 'New Step' } },
    { path: 'step/:datalinkStepKey', component: _step_edit_datajob_edit_step_component__WEBPACK_IMPORTED_MODULE_4__["DatajobEditStepComponent"], data: { pageTitle: 'Edit Step' } },
    { path: 'add-steps', component: _steps_add_datajob_add_steps_component__WEBPACK_IMPORTED_MODULE_5__["DatajobAddStepsComponent"], data: { pageTitle: 'Add Multiple Steps' } }
];
const routes = [
    { path: '', component: _datajob_edit_component__WEBPACK_IMPORTED_MODULE_1__["DatajobEditComponent"], canDeactivate: [_datajob_edit_guard__WEBPACK_IMPORTED_MODULE_6__["DatajobEditGuard"]], children: datajobEditRoutes },
];
const Routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/+hub/datajob/datajob-edit/properties/datajob-edit-properties.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/+hub/datajob/datajob-edit/properties/datajob-edit-properties.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: DatajobEditPropertiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatajobEditPropertiesComponent", function() { return DatajobEditPropertiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _hub_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hub.service */ "./src/app/+hub/hub.service.ts");
/* harmony import */ var _hub_forms_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hub.forms.service */ "./src/app/+hub/hub.forms.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_shared_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/shared.models */ "./src/app/shared/shared.models.ts");
/* harmony import */ var ngx_d_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-d-components */ "./node_modules/ngx-d-components/__ivy_ngcc__/fesm2015/ngx-d-components.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_d_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-d-table */ "./node_modules/ngx-d-table/__ivy_ngcc__/fesm2015/ngx-d-table.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _buttons_connection_edit_button_connection_edit_button_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../buttons/connection-edit-button/connection-edit-button.component */ "./src/app/+hub/buttons/connection-edit-button/connection-edit-button.component.ts");
/* harmony import */ var _widgets_input_parameters_input_parameters_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../widgets/input-parameters/input-parameters.component */ "./src/app/+hub/widgets/input-parameters/input-parameters.component.ts");
















function DatajobEditPropertiesComponent_form_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "form-input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "form-textarea", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "form-select", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "form-select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form-select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "connection-edit-button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "form-checkbox", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "section", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "form-checkbox", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.mainForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autocapitalize", true)("errors", ctx_r0.formService.formErrors.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showMarkdown", true)("errors", ctx_r0.formService.formErrors.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r0.failActions)("errors", ctx_r0.formService.formErrors.failAction)("enableFilter", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r0.eAlertLevelItems)("errors", ctx_r0.formService.formErrors.alertLevel)("enableFilter", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r0.managedConnections)("errors", ctx_r0.formService.formErrors.auditConnectionKey)("errors", ctx_r0.formService.formErrors.auditConnectionKey);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("key", ctx_r0.mainForm.controls.auditConnectionKey.value);
} }
function DatajobEditPropertiesComponent_input_parameters_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input-parameters", 24);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showEdit", true)("parameters", ctx_r1.mainForm == null ? null : ctx_r1.mainForm.controls.parameters)("formsService", ctx_r1.formService);
} }
function DatajobEditPropertiesComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button-delete", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatajobEditPropertiesComponent_ng_template_6_Template_d_button_delete_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const items_r14 = ctx.items; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.deleteTriggers(items_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DatajobEditPropertiesComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button-edit", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatajobEditPropertiesComponent_ng_template_8_Template_d_button_edit_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const trigger_r17 = ctx.item; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.editTrigger(trigger_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DatajobEditPropertiesComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button-new", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatajobEditPropertiesComponent_ng_template_10_Template_d_button_new_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r21.newTrigger(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DatajobEditPropertiesComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatajobEditPropertiesComponent_ng_template_14_Template_d_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const items_r23 = ctx.items; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.updateDependencies(items_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "d-button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatajobEditPropertiesComponent_ng_template_14_Template_d_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const items_r23 = ctx.items; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.clearDependencies(items_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "d-button-delete", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatajobEditPropertiesComponent_ng_template_14_Template_d_button_delete_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const items_r23 = ctx.items; const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r27.deleteDatalinkSteps(items_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DatajobEditPropertiesComponent_ng_template_16_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button-edit", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatajobEditPropertiesComponent_ng_template_16_Template_d_button_edit_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const item_r28 = ctx.item; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.editDatalinkStep(item_r28); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DatajobEditPropertiesComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button-new", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatajobEditPropertiesComponent_ng_template_18_Template_d_button_new_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.newDatalinkStep(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "d-button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatajobEditPropertiesComponent_ng_template_18_Template_d_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r34.addDatalinkSteps(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DatajobEditPropertiesComponent {
    constructor(hubService, formService, route, router) {
        this.hubService = hubService;
        this.formService = formService;
        this.route = route;
        this.router = router;
        this.hasChanged = false;
        this.showAllErrors = false;
        this.failActions = [
            { key: _shared_shared_models__WEBPACK_IMPORTED_MODULE_5__["eFailAction"].Continue, name: 'Continue Execution' },
            { key: _shared_shared_models__WEBPACK_IMPORTED_MODULE_5__["eFailAction"].ContinueNonDependent, name: 'Continue execution (non dependent datalinks only)' },
            { key: _shared_shared_models__WEBPACK_IMPORTED_MODULE_5__["eFailAction"].Abend, name: 'Abend' },
        ];
        this.datajobChanged = false;
        this.triggerColumns = [
            { name: 'details', title: 'Details', format: 'Html' },
            { name: 'updateDate', title: 'Last Modified', format: 'Calendar' },
            { name: 'errors', title: 'Errors', format: '' },
        ];
        this._triggerTableData = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.triggerTableData = this._triggerTableData.asObservable();
        this.stepColumns = [
            { name: 'name', title: 'Name', format: '' },
            { name: 'datalink', title: 'Datalink', format: '', tags: 'tags' },
            { name: 'dependencies', title: 'Dependencies', format: 'Html' },
            { name: 'inputs', title: 'Inputs', format: 'Html' },
            { name: 'updateDate', title: 'Last Modified', format: 'Calendar' },
            { name: 'errors', title: 'Errors', format: '' },
        ];
        this._stepTableData = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.stepTableData = this._stepTableData.asObservable();
        this.eAlertLevelItems = _shared_shared_models__WEBPACK_IMPORTED_MODULE_5__["eAlertLevelItems"];
        this.eAlertLevel = _shared_shared_models__WEBPACK_IMPORTED_MODULE_5__["eAlertLevel"];
    }
    ngOnInit() {
        let isFirst = true;
        try {
            this._subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])(this.hubService.getHubCacheObservable(), this.formService.getCurrentFormObservable()).subscribe(result => {
                this.hubCache = result[0];
                this.mainForm = result[1];
                if (!this.hubCache.isLoaded()) {
                    return;
                }
                this.managedConnections = this.hubCache.getManagedConnections();
                this.updateTriggers();
                this.updateSteps();
                // if this is first load of new form, then reset the dependencies.
                if (this.mainForm.controls['key'].value <= 0 && isFirst) {
                    isFirst = false;
                    let steps = this.mainForm.controls['dexihDatalinkSteps'].value;
                    this.updateDependencies(steps);
                }
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
    updateTriggers() {
        let triggerData = [];
        if (this.mainForm) {
            let triggers = this.mainForm.controls['dexihTriggers'];
            triggers.controls.forEach(triggerControl => {
                let trigger = triggerControl.value;
                triggerData.push({
                    key: trigger.key,
                    details: this.hubCache.getTriggerDetails(trigger),
                    updateDate: trigger.updateDate,
                    errors: triggerControl.valid ? 'No errors' : 'Errors'
                });
            });
        }
        this._triggerTableData.next(triggerData);
    }
    updateSteps() {
        let stepData = [];
        if (this.mainForm) {
            let steps = this.mainForm.controls['dexihDatalinkSteps'];
            steps.controls.sort((a, b) => a.controls.position.value - b.controls.position.value)
                .forEach(stepControl => {
                let step = stepControl.value;
                let datalink = this.hubCache.hub.dexihDatalinks.find(c => c.key === step.datalinkKey);
                stepData.push({
                    key: step.key,
                    name: step.name,
                    datalinkKey: datalink.key,
                    datalink: datalink ? datalink.name : 'Not specified',
                    tags: this.hubCache.getObjectTags(_shared_shared_models__WEBPACK_IMPORTED_MODULE_5__["eSharedObjectType"].Datalink, datalink.key),
                    dependencies: this.getDependencies(step.dexihDatalinkDependencies),
                    inputs: this.getInputs(step.dexihDatalinkStepColumns),
                    updateDate: step.updateDate,
                    errors: stepControl.valid ? 'No errors' : 'Errors'
                });
            });
        }
        this._stepTableData.next(stepData);
    }
    stepSortChanged(items) {
        let steps = this.mainForm.controls['dexihDatalinkSteps'];
        items.forEach((item, index) => {
            let step = steps.controls
                .find(c => c.value.key === item.key);
            if (step) {
                step.controls.position.setValue(index);
            }
        });
    }
    getDependencies(dependencies) {
        let depString = '';
        if (dependencies) {
            dependencies.forEach(dep => {
                let step = this.mainForm.value.dexihDatalinkSteps.find(c => c.key === dep.dependentDatalinkStepKey);
                if (step) {
                    depString = depString + step.name + '<br>';
                }
                else {
                    depString = depString + 'Error: step not found.<br>';
                }
            });
        }
        return depString;
    }
    getInputs(columns) {
        let depString = '';
        if (columns) {
            columns.forEach(column => {
                depString = depString + column.name + ' = ' + column.defaultValue + '<br>';
            });
        }
        return depString;
    }
    newTrigger() {
        this.router.navigate(['trigger'], { relativeTo: this.route.parent });
    }
    addDatalinkSteps() {
        this.router.navigate(['add-steps'], { relativeTo: this.route.parent });
    }
    editTrigger(trigger) {
        this.router.navigate(['trigger', trigger.key], { relativeTo: this.route.parent });
    }
    deleteTriggers(triggers) {
        let triggersArray = this.mainForm.controls.dexihTriggers;
        triggers.forEach(trigger => {
            let index = triggersArray.controls.findIndex(c => c.value.key === trigger.key);
            triggersArray.removeAt(index);
        });
        this.updateTriggers();
    }
    newDatalinkStep() {
        this.router.navigate(['step'], { relativeTo: this.route.parent });
    }
    editDatalinkStep(step) {
        this.router.navigate(['step', step.key], { relativeTo: this.route.parent });
    }
    deleteDatalinkSteps(steps) {
        let stepsArray = this.mainForm.controls.dexihDatalinkSteps;
        steps.forEach(step => {
            let index = stepsArray.controls.findIndex(c => c.value.key === step.key);
            stepsArray.removeAt(index);
        });
        this.updateSteps();
    }
    clearDependencies(steps) {
        let stepsArray = this.mainForm.controls.dexihDatalinkSteps;
        steps.forEach(step => {
            let stepControl = stepsArray.controls.find(c => c.value.key === step.key);
            let dependencies = stepControl.controls['dexihDatalinkDependencies'];
            dependencies.clear();
        });
        this.updateSteps();
    }
    updateDependencies(steps) {
        let stepsArray = this.mainForm.controls.dexihDatalinkSteps;
        let allSteps = stepsArray.value;
        let stepTargets = [];
        let minKey = -1;
        allSteps.forEach(step => {
            stepTargets.push({ key: step.key, tables: this.getDatalinkTargetTables(step.datalinkKey) });
        });
        steps.forEach(step => {
            let stepControl = stepsArray.controls.find(c => c.value.key === step.key);
            let dependencies = stepControl.controls['dexihDatalinkDependencies'];
            dependencies.clear();
            let sourceTables = this.getDatalinkSourceTables(step.datalinkKey);
            stepTargets.forEach(stepTarget => {
                for (let t of stepTarget.tables) {
                    if (sourceTables.indexOf(t) >= 0) {
                        let dep = new _shared_shared_models__WEBPACK_IMPORTED_MODULE_5__["DexihDatalinkDependency"]();
                        dep.key = minKey;
                        dep.datalinkStepKey = step.key;
                        dep.dependentDatalinkStepKey = stepTarget.key;
                        dependencies.push(this.formService.datalinkDependencyFormGroup(dep));
                        minKey--;
                        break;
                    }
                }
            });
        });
        this.updateSteps();
    }
    getDatalinkTargetTables(datalinkKey) {
        let datalink = this.hubCache.hub.dexihDatalinks.find(c => c.key === datalinkKey);
        if (!datalink) {
            return [];
        }
        return datalink.dexihDatalinkTargets.map(c => c.tableKey);
    }
    // gets any dependent source tables from the given datalink key.
    getDatalinkSourceTables(datalinkKey) {
        let datalink = this.hubCache.hub.dexihDatalinks.find(c => c.key === datalinkKey);
        if (!datalink) {
            return [];
        }
        let tables = this.getDatalinkTable(datalink.sourceDatalinkTable);
        datalink.dexihDatalinkTransforms.forEach(transform => {
            if (transform.joinDatalinkTable) {
                let joinTables = this.getDatalinkTable(transform.joinDatalinkTable);
                joinTables.forEach(t => {
                    if (tables.indexOf(t) < 0) {
                        tables.push(t);
                    }
                });
            }
        });
        return tables;
    }
    getDatalinkTable(datalinkTable) {
        if (!datalinkTable) {
            return [];
        }
        switch (datalinkTable.sourceType) {
            case _shared_shared_models__WEBPACK_IMPORTED_MODULE_5__["eSourceType"].Table: {
                return [datalinkTable.sourceTableKey];
            }
            case _shared_shared_models__WEBPACK_IMPORTED_MODULE_5__["eSourceType"].Datalink: {
                return this.getDatalinkSourceTables(datalinkTable.sourceDatalinkKey);
            }
        }
        return [];
    }
}
DatajobEditPropertiesComponent.ɵfac = function DatajobEditPropertiesComponent_Factory(t) { return new (t || DatajobEditPropertiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hub_service__WEBPACK_IMPORTED_MODULE_2__["HubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hub_forms_service__WEBPACK_IMPORTED_MODULE_3__["HubFormsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
DatajobEditPropertiesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DatajobEditPropertiesComponent, selectors: [["dexih-datajob-edit-form"]], decls: 20, vars: 23, consts: [["title", "Properties", 3, "showExpandButton"], [3, "formGroup", 4, "ngIf"], ["title", "Parameters", 3, "showExpandButton", "padding"], [3, "showEdit", "parameters", "formsService", 4, "ngIf"], ["title", "Triggers", 3, "showExpandButton", "padding"], ["sortColumn", "position", 3, "enableMultiSelect", "enableStickyToolbar", "toolbarZIndex", "enableManualSort", "columns", "dataObservable", "rowClick"], ["select", "selectedItemsAction"], ["selectedItemsAction", ""], ["select", "selectedItemAction"], ["selectedItemAction", ""], ["select", "actionsTemplate"], ["actions", ""], ["title", "Steps", 3, "showExpandButton", "padding"], ["sortColumn", "position", 3, "enableMultiSelect", "enableStickyToolbar", "toolbarZIndex", "enableManualSort", "columns", "tags", "dataObservable", "onSortChanged", "rowClick"], [3, "formGroup"], ["label", "Data Job Name", "formControlName", "name", "placeholder", "Enter the job name.", "iconClass", "fa fa-list", 3, "autocapitalize", "errors"], ["label", "Description", "formControlName", "description", "placeholder", "Enter the description.", 3, "showMarkdown", "errors"], ["label", "Datalink Fail Action", "formControlName", "failAction", "itemKey", "key", "itemName", "name", "iconClass", "fa fa-database", "note", "Action to take when a datalink execution fails.", 3, "items", "errors", "enableFilter"], ["label", "Alerting Level", "formControlName", "alertLevel", "itemKey", "key", "itemName", "description", "iconClass", "fa fa-bell", "note", "When alerts should be sent.", 3, "items", "errors", "enableFilter"], ["label", "Audit Connection", "formControlName", "auditConnectionKey", "itemKey", "key", "itemName", "name", "iconClass", "fa fa-database", "note", "Specify the connection where audit data (such as job results) should be written to.", 3, "items", "errors"], [3, "key"], [1, "col", "col-12"], ["label", "Trigger datajob when new files arrive", "formControlName", "fileWatch"], ["label", "Auto Start", "formControlName", "autoStart", "note", "Re-activate the datajob when the remote agent is restarted."], [3, "showEdit", "parameters", "formsService"], [3, "click"], ["title", "New Trigger", 3, "click"], ["iconClass", "fa fa-magic", "text", "AutoSet Dependencies", 3, "click"], ["iconClass", "fa fa-eraser", "text", "Clear Dependencies", 1, "ml-1", 3, "click"], [1, "ml-1", 3, "click"], [1, "mr-1", 3, "click"], ["title", "Create a new step", 1, "mr-1", 3, "click"], ["iconClass", "fa fa-plus-square", "buttonClass", "btn-primary", "title", "Select multiple datalinks to add as steps", 1, "mr-1", 3, "click"]], template: function DatajobEditPropertiesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-widget-section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DatajobEditPropertiesComponent_form_1_Template, 17, 15, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "d-widget-section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DatajobEditPropertiesComponent_input_parameters_3_Template, 1, 3, "input-parameters", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "d-widget-section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "d-table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rowClick", function DatajobEditPropertiesComponent_Template_d_table_rowClick_5_listener($event) { return ctx.editTrigger($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DatajobEditPropertiesComponent_ng_template_6_Template, 1, 0, "ng-template", 6, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DatajobEditPropertiesComponent_ng_template_8_Template, 1, 0, "ng-template", 8, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DatajobEditPropertiesComponent_ng_template_10_Template, 1, 0, "ng-template", 10, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "d-widget-section", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "d-table", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSortChanged", function DatajobEditPropertiesComponent_Template_d_table_onSortChanged_13_listener($event) { return ctx.stepSortChanged($event); })("rowClick", function DatajobEditPropertiesComponent_Template_d_table_rowClick_13_listener($event) { return ctx.editDatalinkStep($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DatajobEditPropertiesComponent_ng_template_14_Template, 3, 0, "ng-template", 6, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, DatajobEditPropertiesComponent_ng_template_16_Template, 1, 0, "ng-template", 8, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, DatajobEditPropertiesComponent_ng_template_18_Template, 3, 0, "ng-template", 10, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showExpandButton", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mainForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showExpandButton", true)("padding", true)("padding", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mainForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showExpandButton", true)("padding", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("enableMultiSelect", true)("enableStickyToolbar", true)("toolbarZIndex", 100)("enableManualSort", true)("columns", ctx.triggerColumns)("dataObservable", ctx.triggerTableData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showExpandButton", true)("padding", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("enableMultiSelect", true)("enableStickyToolbar", true)("toolbarZIndex", 100)("enableManualSort", true)("columns", ctx.stepColumns)("tags", ctx.hubCache.hub.dexihTags)("dataObservable", ctx.stepTableData);
    } }, directives: [ngx_d_components__WEBPACK_IMPORTED_MODULE_6__["ɵa"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], ngx_d_table__WEBPACK_IMPORTED_MODULE_8__["DTableComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroupDirective"], ngx_d_components__WEBPACK_IMPORTED_MODULE_6__["DFormInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControlName"], ngx_d_components__WEBPACK_IMPORTED_MODULE_6__["DFormTextAreaComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_6__["DFormSelectComponent"], _buttons_connection_edit_button_connection_edit_button_component__WEBPACK_IMPORTED_MODULE_10__["ConnectionEditButtonComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_6__["DFormCheckboxComponent"], _widgets_input_parameters_input_parameters_component__WEBPACK_IMPORTED_MODULE_11__["InputParametersComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_6__["DButtonDeleteComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_6__["DButtonEditComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_6__["DButtonNewComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_6__["DButtonComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatajobEditPropertiesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dexih-datajob-edit-form',
                templateUrl: './datajob-edit-properties.component.html'
            }]
    }], function () { return [{ type: _hub_service__WEBPACK_IMPORTED_MODULE_2__["HubService"] }, { type: _hub_forms_service__WEBPACK_IMPORTED_MODULE_3__["HubFormsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/+hub/datajob/datajob-edit/step-edit/datajob-edit-step.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/+hub/datajob/datajob-edit/step-edit/datajob-edit-step.component.ts ***!
  \************************************************************************************/
/*! exports provided: DatajobEditStepComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatajobEditStepComponent", function() { return DatajobEditStepComponent; });
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
/* harmony import */ var _widgets_input_parameters_input_parameters_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../widgets/input-parameters/input-parameters.component */ "./src/app/+hub/widgets/input-parameters/input-parameters.component.ts");
/* harmony import */ var ngx_d_table__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-d-table */ "./node_modules/ngx-d-table/__ivy_ngcc__/fesm2015/ngx-d-table.js");



















function DatajobEditStepComponent_d_widget_section_0_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button-apply", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatajobEditStepComponent_d_widget_section_0_ng_template_1_Template_d_button_apply_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.applyExit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "d-button-cancel", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatajobEditStepComponent_d_widget_section_0_ng_template_1_Template_d_button_cancel_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r4.stepFormService.hasChanged);
} }
function DatajobEditStepComponent_d_widget_section_0_div_10_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "form-input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", column_r10.value.logicalName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", column_r10.value.logicalName)("autocapitalize", true)("formControl", column_r10.controls.defaultValue);
} }
function DatajobEditStepComponent_d_widget_section_0_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Input Values ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DatajobEditStepComponent_d_widget_section_0_div_10_span_3_Template, 5, 4, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.stepFormService.currentForm.controls.dexihDatalinkStepColumns.controls);
} }
function DatajobEditStepComponent_d_widget_section_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-widget-section", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DatajobEditStepComponent_d_widget_section_0_ng_template_1_Template, 2, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "form-input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form-select", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "datalink-edit-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DatajobEditStepComponent_d_widget_section_0_div_10_Template, 4, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showExpandButton", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.stepFormService.currentForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autocapitalize", true)("errors", ctx_r0.stepFormService.formErrors.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r0.hubCache.hub.dexihDatalinks)("errors", ctx_r0.stepFormService.formErrors.datalinkKey);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("key", ctx_r0.stepFormService.currentForm.controls.datalinkKey.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.stepFormService.currentForm.controls.dexihDatalinkStepColumns.controls.length > 0);
} }
function DatajobEditStepComponent_d_widget_section_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-widget-section", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input-parameters", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showExpandButton", true)("padding", false)("padding", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showEdit", true)("parameters", ctx_r1.stepFormService.currentForm.controls.parameters)("formsService", ctx_r1.formService)("parentParameters", ctx_r1.formService.currentForm.controls.parameters.value);
} }
function DatajobEditStepComponent_d_widget_section_2_d_table_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-table", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedItemsChange", function DatajobEditStepComponent_d_widget_section_2_d_table_1_Template_d_table_selectedItemsChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.stepFormService.currentForm.value.dexihDatalinkDependencies = $event; })("onSelectedChange", function DatajobEditStepComponent_d_widget_section_2_d_table_1_Template_d_table_onSelectedChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.dependentStepsChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("enableMultiSelect", true)("columns", ctx_r12.stepColumns)("dataObservable", ctx_r12.stepTableData)("selectedItems", ctx_r12.stepFormService.currentForm.value.dexihDatalinkDependencies)("tags", ctx_r12.hubCache.hub.dexihTags);
} }
function DatajobEditStepComponent_d_widget_section_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-widget-section", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DatajobEditStepComponent_d_widget_section_2_d_table_1_Template, 1, 5, "d-table", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showExpandButton", false)("padding", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.stepFormService.currentForm);
} }
class DatajobEditStepComponent {
    constructor(hubService, authService, formService, route, fb) {
        this.hubService = hubService;
        this.authService = authService;
        this.formService = formService;
        this.route = route;
        this.showAllErrors = false;
        this.stepColumns = [
            { name: 'name', title: 'Name', format: '', tags: 'tags' },
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
                this.datalinkStepKey = +params['datalinkStepKey'];
                if (mainForm) {
                    this.datajobForm = mainForm;
                    let step;
                    if (this.datalinkStepKey) {
                        step = mainForm.value.dexihDatalinkSteps
                            .find(c => c.key === this.datalinkStepKey);
                        if (!step) {
                            this.authService.navigateUp();
                            return;
                        }
                    }
                    else {
                        step = new _shared_shared_models__WEBPACK_IMPORTED_MODULE_7__["DexihDatalinkStep"]();
                        // if new step, then set a temporary key of -1 or lower.
                        let minKey = -1;
                        this.datajobForm.value.dexihDatalinkSteps.forEach(t => {
                            if (t.key <= minKey) {
                                minKey = t.key - 1;
                            }
                        });
                        step.key = minKey;
                        this.datalinkStepKey = minKey;
                    }
                    const stepForm = this.stepFormService.datalinkStepFormGroup(mainForm, step);
                    this.stepFormService.startForm(stepForm);
                    this.updateSteps();
                    this._datalinkSubscription = stepForm.controls.datalinkKey.valueChanges.subscribe(datalinkKey => {
                        this.updateDatalinkStepColumns(datalinkKey);
                    });
                }
            });
        }
        catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Datajob Edit Step');
        }
    }
    ngOnDestroy() {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
        if (this._datalinkSubscription) {
            this._datalinkSubscription.unsubscribe();
        }
    }
    updateSteps() {
        let stepData = [];
        if (this.datajobForm.value.dexihDatalinkSteps) {
            this.datajobForm.value.dexihDatalinkSteps.forEach(step => {
                if (step.key !== this.stepFormService.currentForm.value.key) {
                    let datalink = this.hubCache.hub.dexihDatalinks.find(c => c.key === step.datalinkKey);
                    stepData.push({
                        key: step.key,
                        name: step.name,
                        datalink: datalink ? datalink.name : 'Not specified',
                        tags: this.hubCache.getObjectTags(_shared_shared_models__WEBPACK_IMPORTED_MODULE_7__["eSharedObjectType"].Datalink, datalink.key),
                        dependencies: '',
                        updateDate: step.updateDate
                    });
                }
            });
        }
        this._stepTableData.next(stepData);
    }
    updateDatalinkStepColumns(datalinkKey) {
        let datalink = this.hubCache.hub.dexihDatalinks.find(c => c.key === datalinkKey);
        let stepForm = this.stepFormService.currentForm;
        let stepParameters = stepForm.controls.parameters;
        let currentParameters = stepParameters.value;
        stepParameters.clear();
        datalink.parameters.forEach(parameter => {
            let currentParameter = currentParameters.find(c => c.name === parameter.name);
            let newParameter = new _shared_shared_models__WEBPACK_IMPORTED_MODULE_7__["InputParameterBase"]();
            if (currentParameter) {
                newParameter.name = currentParameter.name;
                newParameter.value = currentParameter.value;
            }
            else {
                newParameter.name = parameter.name;
                newParameter.value = parameter.value;
            }
            let newFormParameter = this.formService.parameter(newParameter);
            stepParameters.push(newFormParameter);
        });
        let stepColumnsForm = stepForm.controls.dexihDatalinkStepColumns;
        let stepColumns = stepColumnsForm.value;
        while (stepColumnsForm.length !== 0) {
            stepColumnsForm.removeAt(0);
        }
        let inputColumns = datalink.sourceDatalinkTable.dexihDatalinkColumns.filter(c => c.isInput);
        inputColumns.forEach(col => {
            let stepColumn = stepColumns.find(c => c.name === col.name);
            if (!stepColumn) {
                stepColumn = new _shared_shared_models__WEBPACK_IMPORTED_MODULE_7__["DexihDatalinkStepColumn"]();
                stepColumn.defaultValue = col.defaultValue;
            }
            stepColumn.dataType = col.dataType;
            stepColumn.name = col.name;
            stepColumn.logicalName = col.logicalName;
            stepColumn.columnGroup = col.columnGroup;
            stepColumn.rank = col.rank;
            stepColumn.maxLength = col.maxLength;
            stepColumn.deltaType = col.deltaType;
            stepColumn.allowDbNull = col.allowDbNull;
            stepColumn.isUnicode = col.isUnicode;
            stepColumn.isValid = true;
            let stepColumnForm = this.formService.datalinkStepColumnFormGroup(stepColumn);
            stepColumnsForm.push(stepColumnForm);
        });
        if (!stepForm.controls.name.value) {
            stepForm.controls.name.setValue(datalink.name);
        }
    }
    dependentStepsChange(items) {
        let datalinkDependencies = this.stepFormService.currentForm.controls.dexihDatalinkDependencies;
        let minKey = -1;
        if (datalinkDependencies) {
            datalinkDependencies.controls.forEach(dep => {
                if (dep.valid['key'] <= minKey) {
                    minKey = dep['key'] - 1;
                }
            });
        }
        while (datalinkDependencies.length > 0) {
            datalinkDependencies.removeAt(0);
        }
        items.forEach(newDep => {
            let oldDep = datalinkDependencies ?
                datalinkDependencies.controls.find(c => c.value.datalinkStepKey === newDep.datalinkStepKey)
                : null;
            if (oldDep) {
                datalinkDependencies.push(oldDep);
            }
            else {
                let dep = new _shared_shared_models__WEBPACK_IMPORTED_MODULE_7__["DexihDatalinkDependency"]();
                dep.key = minKey;
                dep.datalinkStepKey = this.datalinkStepKey;
                dep.dependentDatalinkStepKey = newDep.key;
                datalinkDependencies.push(this.stepFormService.datalinkDependencyFormGroup(dep));
                minKey--;
            }
        });
        this.stepFormService.hasChanged = true;
    }
    cancel() {
        this.authService.navigateUp();
    }
    applyExit() {
        const stepForm = this.stepFormService.currentForm;
        const stepsArray = this.datajobForm.controls.dexihDatalinkSteps;
        const index = stepsArray.controls
            .findIndex(c => c.value.key === stepForm.value.key && c.value.isValid);
        if (index < 0) {
            stepsArray.push(stepForm);
        }
        else {
            stepsArray.removeAt(index);
            stepsArray.insert(index, stepForm);
        }
        this.authService.navigateUp();
    }
}
DatajobEditStepComponent.ɵfac = function DatajobEditStepComponent_Factory(t) { return new (t || DatajobEditStepComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hub_service__WEBPACK_IMPORTED_MODULE_2__["HubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hub_forms_service__WEBPACK_IMPORTED_MODULE_6__["HubFormsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"])); };
DatajobEditStepComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DatajobEditStepComponent, selectors: [["datajob-edit-step"]], decls: 3, vars: 3, consts: [["title", "Add Datalink Step", 3, "showExpandButton", 4, "ngIf"], ["title", "Parameters", 3, "showExpandButton", "padding", 4, "ngIf"], ["title", "Dependent Steps", 3, "showExpandButton", "padding", 4, "ngIf"], ["title", "Add Datalink Step", 3, "showExpandButton"], ["header", ""], [3, "formGroup"], ["label", "Data Step Name", "formControlName", "name", "placeholder", "Enter the step name.", "iconClass", "fa fa-list", "note", "Enter a name for the data step, blank will use datalink name.", 3, "autocapitalize", "errors"], ["label", "Data Link", "formControlName", "datalinkKey", "itemKey", "key", "itemName", "name", "iconClass", "fa fa-database", 3, "items", "errors"], [3, "key"], ["class", "d-flex flex-wrap pt-1", 4, "ngIf"], [1, "mr-1", 3, "disabled", "click"], [3, "click"], [1, "d-flex", "flex-wrap", "pt-1"], ["class", "input-group", 4, "ngFor", "ngForOf"], [1, "input-group"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "form-control", "p-0", 3, "placeholder", "autocapitalize", "formControl"], ["title", "Parameters", 3, "showExpandButton", "padding"], [3, "showEdit", "parameters", "formsService", "parentParameters"], ["title", "Dependent Steps", 3, "showExpandButton", "padding"], ["keyColumn", "key", "selectedKeyColumn", "dependentDatalinkStepKey", 3, "enableMultiSelect", "columns", "dataObservable", "selectedItems", "tags", "selectedItemsChange", "onSelectedChange", 4, "ngIf"], ["keyColumn", "key", "selectedKeyColumn", "dependentDatalinkStepKey", 3, "enableMultiSelect", "columns", "dataObservable", "selectedItems", "tags", "selectedItemsChange", "onSelectedChange"]], template: function DatajobEditStepComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DatajobEditStepComponent_d_widget_section_0_Template, 11, 8, "d-widget-section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DatajobEditStepComponent_d_widget_section_1_Template, 2, 7, "d-widget-section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DatajobEditStepComponent_d_widget_section_2_Template, 2, 3, "d-widget-section", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.stepFormService.currentForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.stepFormService.currentForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.stepFormService.currentForm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["ɵa"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["DFormInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["DFormSelectComponent"], _buttons_datalink_edit_button_datalink_edit_button_component__WEBPACK_IMPORTED_MODULE_10__["DatalinkEditButtonComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["DButtonApplyComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["DButtonCancelComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlDirective"], _widgets_input_parameters_input_parameters_component__WEBPACK_IMPORTED_MODULE_11__["InputParametersComponent"], ngx_d_table__WEBPACK_IMPORTED_MODULE_12__["DTableComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatajobEditStepComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'datajob-edit-step',
                templateUrl: './datajob-edit-step.component.html'
            }]
    }], function () { return [{ type: _hub_service__WEBPACK_IMPORTED_MODULE_2__["HubService"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }, { type: _hub_forms_service__WEBPACK_IMPORTED_MODULE_6__["HubFormsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/+hub/datajob/datajob-edit/steps-add/datajob-add-steps.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/+hub/datajob/datajob-edit/steps-add/datajob-add-steps.component.ts ***!
  \************************************************************************************/
/*! exports provided: DatajobAddStepsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatajobAddStepsComponent", function() { return DatajobAddStepsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _hub_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hub.service */ "./src/app/+hub/hub.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../+auth/auth.service */ "./src/app/+auth/auth.service.ts");
/* harmony import */ var _hub_forms_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../hub.forms.service */ "./src/app/+hub/hub.forms.service.ts");
/* harmony import */ var _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/shared.models */ "./src/app/shared/shared.models.ts");
/* harmony import */ var ngx_d_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-d-components */ "./node_modules/ngx-d-components/__ivy_ngcc__/fesm2015/ngx-d-components.js");
/* harmony import */ var ngx_d_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-d-table */ "./node_modules/ngx-d-table/__ivy_ngcc__/fesm2015/ngx-d-table.js");














function DatajobAddStepsComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button-close", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatajobAddStepsComponent_ng_template_1_Template_d_button_close_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DatajobAddStepsComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatajobAddStepsComponent_ng_template_4_Template_d_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const items_r6 = ctx.items; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.addSelected(items_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DatajobAddStepsComponent {
    constructor(hubService, authService, formService, route, router) {
        this.hubService = hubService;
        this.authService = authService;
        this.formService = formService;
        this.route = route;
        this.router = router;
        this.hasChanged = false;
        this.columns = [
            { name: 'name', title: 'Name', format: '', tags: 'tags' },
            { name: 'datalinkType', title: 'Datalink Type', enum: _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eDatalinkType"], format: 'Enum' },
            { name: 'sourceTableName', title: 'Source Table', format: '' },
            { name: 'targetTableName', title: 'Target Table', format: '' },
            { name: 'updateDate', title: 'Last Modified', format: 'Calendar' },
        ];
        this._tableData = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.tableData = this._tableData.asObservable();
    }
    ngOnInit() {
        try {
            this._subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(this.route.data, this.route.params, this.hubService.getHubCacheObservable(), this.formService.getCurrentFormObservable()).subscribe(result => {
                let data = result[0];
                let params = result[1];
                this.hubCache = result[2];
                this.mainForm = result[3];
                this.updateDatalinks();
            });
        }
        catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Datalink Index');
        }
    }
    ngOnDestroy() {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
        if (this._hubCacheChangeSubscription) {
            this._hubCacheChangeSubscription.unsubscribe();
        }
    }
    changeEvent($event) {
        this.hasChanged = true;
    }
    updateDatalinks() {
        let newDatalinks;
        if (this.hubCache) {
            if (!this.hubCache.hub.dexihDatalinks) {
                this._tableData.next(new Array());
            }
            else {
                let datalinks = this.hubCache.hub.dexihDatalinks.map(d => {
                    let sourceTable = this.hubCache.getTable(d.sourceDatalinkTable.sourceTableKey);
                    return {
                        key: d.key,
                        name: d.name,
                        datalinkType: d.datalinkType,
                        sourceTableName: sourceTable ? sourceTable.name : 'No source table',
                        targetTableName: d.dexihDatalinkTargets.map(target => {
                            let table = this.hubCache.getTable(target.tableKey);
                            if (table) {
                                return table.name;
                            }
                        }).join(', '),
                        updateDate: d.updateDate,
                        tags: this.hubCache.getObjectTags(_shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eSharedObjectType"].Datalink, d.key),
                    };
                });
                this._tableData.next(datalinks);
            }
        }
    }
    watchChanges() {
        // watch the current connection in case it is changed in another session.
        this._hubCacheChangeSubscription = this.hubService.getHubCacheChangeObservable().subscribe(hubCacheChange => {
            if (hubCacheChange.changeClass === _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eSharedObjectType"].Datalink) {
                this.updateDatalinks();
            }
        });
    }
    close() {
        this.authService.navigateUp();
    }
    addSelected(items) {
        let existingDatalinks = new Array();
        let formDexihDatalinkSteps = this.mainForm.value.dexihDatalinkSteps;
        items.forEach(item => {
            let exists = formDexihDatalinkSteps.find(c => c.datalinkKey === item.key);
            if (exists) {
                existingDatalinks.push(item.name);
            }
        });
        if (existingDatalinks.length > 0) {
            let names = existingDatalinks.join(', ');
            this.authService.confirmDialog('Warning duplicate datalinks', 'The following datalinks already exist as steps within the job.  ' + names +
                '.<br />Are you sure you want these datalinks added to the job').then(confirm => {
                if (confirm) {
                    this.addSelectedConfirmed(items);
                }
            }).catch(reason => { });
        }
        else {
            this.addSelectedConfirmed(items);
        }
    }
    addSelectedConfirmed(items) {
        let formDexihDatalinkSteps = this.mainForm.value.dexihDatalinkSteps;
        let minKey = -1;
        formDexihDatalinkSteps.forEach(t => {
            if (t.key <= minKey) {
                minKey = t.key - 1;
            }
        });
        let stepsArray = this.mainForm.controls['dexihDatalinkSteps'];
        items.forEach(datalink => {
            let newDatalinkStep = new _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["DexihDatalinkStep"]();
            newDatalinkStep.name = datalink.name;
            // ensure the name is unique by appending a count to the end.
            let i = 0;
            while (true) {
                if (!formDexihDatalinkSteps.find(c => c.name === newDatalinkStep.name)) {
                    break;
                }
                newDatalinkStep.name = datalink.name + '_' + i.toString();
                i++;
            }
            newDatalinkStep.key = minKey;
            newDatalinkStep.datalinkKey = datalink.key;
            newDatalinkStep.datajobKey = this.mainForm.value.key;
            newDatalinkStep.isValid = true;
            let stepFormGroup = this.formService.datalinkStepFormGroup(this.mainForm, newDatalinkStep);
            stepsArray.push(stepFormGroup);
            minKey--;
        });
        this.authService.navigateUp();
    }
}
DatajobAddStepsComponent.ɵfac = function DatajobAddStepsComponent_Factory(t) { return new (t || DatajobAddStepsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hub_service__WEBPACK_IMPORTED_MODULE_2__["HubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hub_forms_service__WEBPACK_IMPORTED_MODULE_5__["HubFormsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
DatajobAddStepsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DatajobAddStepsComponent, selectors: [["datajob-add-steps"]], decls: 6, vars: 6, consts: [["title", "Add Datalinks to Job", 3, "showExpandButton", "padding"], ["header", ""], [3, "enableMultiSelect", "columns", "dataObservable", "tags"], ["select", "selectedItemsAction"], ["selectedItemsAction", ""], [3, "click"], ["iconClass", "fa fa-plus", "buttonClass", "btn-primary", "title", "Add selected datalinks to the job", 3, "click"]], template: function DatajobAddStepsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-widget-section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DatajobAddStepsComponent_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "d-table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DatajobAddStepsComponent_ng_template_4_Template, 2, 0, "ng-template", 3, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showExpandButton", false)("padding", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("enableMultiSelect", true)("columns", ctx.columns)("dataObservable", ctx.tableData)("tags", ctx.hubCache.hub.dexihTags);
    } }, directives: [ngx_d_components__WEBPACK_IMPORTED_MODULE_7__["ɵa"], ngx_d_table__WEBPACK_IMPORTED_MODULE_8__["DTableComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_7__["DButtonCloseComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_7__["DButtonComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatajobAddStepsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'datajob-add-steps',
                templateUrl: './datajob-add-steps.component.html'
            }]
    }], function () { return [{ type: _hub_service__WEBPACK_IMPORTED_MODULE_2__["HubService"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _hub_forms_service__WEBPACK_IMPORTED_MODULE_5__["HubFormsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/+hub/datajob/datajob-edit/trigger-edit/datajob-edit-trigger.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/+hub/datajob/datajob-edit/trigger-edit/datajob-edit-trigger.component.ts ***!
  \******************************************************************************************/
/*! exports provided: DatajobEditTriggerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatajobEditTriggerComponent", function() { return DatajobEditTriggerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../+auth/auth.service */ "./src/app/+auth/auth.service.ts");
/* harmony import */ var _hub_forms_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../hub.forms.service */ "./src/app/+hub/hub.forms.service.ts");
/* harmony import */ var _hub_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../hub.service */ "./src/app/+hub/hub.service.ts");
/* harmony import */ var _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/shared.models */ "./src/app/shared/shared.models.ts");
/* harmony import */ var ngx_d_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-d-components */ "./node_modules/ngx-d-components/__ivy_ngcc__/fesm2015/ngx-d-components.js");
/* harmony import */ var _dexih_form_daysofweek_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dexih-form-daysofweek.component */ "./src/app/+hub/datajob/datajob-edit/trigger-edit/dexih-form-daysofweek.component.ts");


















function DatajobEditTriggerComponent_d_widget_section_0_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button-apply", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatajobEditTriggerComponent_d_widget_section_0_ng_template_1_Template_d_button_apply_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r3.applyExit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "d-button-cancel", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatajobEditTriggerComponent_d_widget_section_0_ng_template_1_Template_d_button_cancel_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r2.triggerFormService.hasChanged);
} }
function DatajobEditTriggerComponent_d_widget_section_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-widget-section", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DatajobEditTriggerComponent_d_widget_section_0_ng_template_1_Template, 2, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "form-date", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "form-time", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "form-input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "form-time", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "section", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "form-time", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "daysofweek", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showExpandButton", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.triggerFormService.currentForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r0.triggerFormService.formErrors.startDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r0.triggerFormService.formErrors.intervalTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r0.triggerFormService.formErrors.maxRecurs);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r0.triggerFormService.formErrors.startTime);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r0.triggerFormService.formErrors.endTime);
} }
class DatajobEditTriggerComponent {
    constructor(authService, hubService, formService, route, router, location, fb) {
        this.authService = authService;
        this.hubService = hubService;
        this.formService = formService;
        this.route = route;
        this.router = router;
        this.location = location;
        this.fb = fb;
        // create a seperate formService instance to manage the copied form
        this.triggerFormService = new _hub_forms_service__WEBPACK_IMPORTED_MODULE_6__["HubFormsService"](fb, hubService, authService);
    }
    ngOnInit() {
        try {
            this._subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(this.route.data, this.route.params, this.formService.getCurrentFormObservable()).subscribe(result => {
                let data = result[0];
                let params = result[1];
                this.mainForm = result[2];
                if (!this.mainForm) {
                    return;
                }
                this.pageTitle = data['pageTitle'];
                this.action = data['action'];
                this.triggerKey = +params['triggerKey'];
                let triggerForm;
                if (this.triggerKey) {
                    this.originalTrigger = this.mainForm.value.dexihTriggers.find(c => c.key === this.triggerKey);
                    if (!this.originalTrigger) {
                        this.authService.navigateUp();
                        return;
                    }
                    triggerForm = this.triggerFormService.triggerFormGroup(this.originalTrigger);
                }
                else {
                    let trigger = new _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["DexihTrigger"]();
                    // if new trigger, then set a temporary key of -1 or lower.
                    let minKey = -1;
                    this.mainForm.value.dexihTriggers.forEach(t => {
                        if (t.key <= minKey) {
                            minKey = t.key - 1;
                        }
                    });
                    trigger.key = minKey;
                    triggerForm = this.triggerFormService.triggerFormGroup(trigger);
                }
                this.triggerFormService.startForm(triggerForm);
            });
        }
        catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Datajob Edit Trigger');
        }
    }
    ngOnDestroy() {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
    }
    cancel() {
        this.authService.navigateUp();
    }
    applyExit() {
        const triggerForm = this.triggerFormService.currentForm;
        const triggersArray = this.mainForm.controls.dexihTriggers;
        if (!this.originalTrigger) {
            triggersArray.push(triggerForm);
        }
        else {
            const originalTrigger = triggersArray.controls.find(c => c.value.key === triggerForm.value.key);
            originalTrigger.setValue(triggerForm.value);
        }
        this.authService.navigateUp();
    }
}
DatajobEditTriggerComponent.ɵfac = function DatajobEditTriggerComponent_Factory(t) { return new (t || DatajobEditTriggerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hub_service__WEBPACK_IMPORTED_MODULE_7__["HubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hub_forms_service__WEBPACK_IMPORTED_MODULE_6__["HubFormsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"])); };
DatajobEditTriggerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DatajobEditTriggerComponent, selectors: [["datajob-edit-trigger"]], decls: 1, vars: 1, consts: [["title", "Edit Trigger", 3, "showExpandButton", 4, "ngIf"], ["title", "Edit Trigger", 3, "showExpandButton"], ["header", ""], [3, "formGroup"], [1, "form-row"], [1, "form-group", "col-md-6"], ["label", "Start Date", "formControlName", "startDate", "note", "This is the date that the trigger will start.  Leave blank for immediate start.", 3, "errors"], [1, "form-group", "col-md-3"], ["label", "Interval", "formControlName", "intervalTime", "note", "The intra-day interval which the trigger restarts.  Leave blank for once a day jobs.", 3, "errors"], ["type", "number", "label", "Max Recurrences", "formControlName", "maxRecurs", "placeholder", "Enter the max recurrences", "iconClass", "fa fa-refresh", "note", " The maximum number of times job can recur in one day.", 3, "errors"], ["label", "Start Time", "formControlName", "startTime", "note", "Time of the day the job will activate.", 3, "errors"], ["label", "End Time", "formControlName", "endTime", "note", "Time of the day the triggers will deactivate.", 3, "errors"], ["label", "Days of the week", "formControlName", "daysOfWeek", "note", " The days of the week the trigger is valid."], [1, "mr-1", 3, "disabled", "click"], [3, "click"]], template: function DatajobEditTriggerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DatajobEditTriggerComponent_d_widget_section_0_Template, 20, 7, "d-widget-section", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.triggerFormService.currentForm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["ɵa"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["DFormDateComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["DFormTimeComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["DFormInputComponent"], _dexih_form_daysofweek_component__WEBPACK_IMPORTED_MODULE_10__["DexihFormDaysOfWeekComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["DButtonApplyComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["DButtonCancelComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatajobEditTriggerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'datajob-edit-trigger',
                templateUrl: './datajob-edit-trigger.component.html'
            }]
    }], function () { return [{ type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }, { type: _hub_service__WEBPACK_IMPORTED_MODULE_7__["HubService"] }, { type: _hub_forms_service__WEBPACK_IMPORTED_MODULE_6__["HubFormsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/+hub/datajob/datajob-edit/trigger-edit/dexih-form-daysofweek.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/+hub/datajob/datajob-edit/trigger-edit/dexih-form-daysofweek.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: DexihFormDaysOfWeekComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DexihFormDaysOfWeekComponent", function() { return DexihFormDaysOfWeekComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_shared_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/shared.models */ "./src/app/shared/shared.models.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_d_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-d-markdown */ "./node_modules/ngx-d-markdown/fesm2015/ngx-d-markdown.js");







function DexihFormDaysOfWeekComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.errors, " ");
} }
function DexihFormDaysOfWeekComponent_small_45_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "markdown", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DexihFormDaysOfWeekComponent_small_45_Template_markdown_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.sharedFunctions.getRoute($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r1.note);
} }
const _c0 = ["*"];
class DexihFormDaysOfWeekComponent {
    constructor(_changeDetectionRef) {
        this._changeDetectionRef = _changeDetectionRef;
        this.eDayOfWeek = _shared_shared_models__WEBPACK_IMPORTED_MODULE_2__["eDayOfWeek"];
        this.daysOfWeek = new Array(7);
        this.id = 'input_' + Math.random().toString(36).substr(2, 9);
        this.onChange = () => { };
        this.onTouched = () => { };
    }
    ngAfterViewInit() {
        if (this.value) {
            this.value.forEach(value => {
                switch (value) {
                    case _shared_shared_models__WEBPACK_IMPORTED_MODULE_2__["eDayOfWeek"].Sunday:
                        this.daysOfWeek[0] = true;
                        break;
                    case _shared_shared_models__WEBPACK_IMPORTED_MODULE_2__["eDayOfWeek"].Monday:
                        this.daysOfWeek[1] = true;
                        break;
                    case _shared_shared_models__WEBPACK_IMPORTED_MODULE_2__["eDayOfWeek"].Tuesday:
                        this.daysOfWeek[2] = true;
                        break;
                    case _shared_shared_models__WEBPACK_IMPORTED_MODULE_2__["eDayOfWeek"].Wednesday:
                        this.daysOfWeek[3] = true;
                        break;
                    case _shared_shared_models__WEBPACK_IMPORTED_MODULE_2__["eDayOfWeek"].Thursday:
                        this.daysOfWeek[4] = true;
                        break;
                    case _shared_shared_models__WEBPACK_IMPORTED_MODULE_2__["eDayOfWeek"].Friday:
                        this.daysOfWeek[5] = true;
                        break;
                    case _shared_shared_models__WEBPACK_IMPORTED_MODULE_2__["eDayOfWeek"].Saturday:
                        this.daysOfWeek[6] = true;
                        break;
                }
            });
        }
        // workaround for change detection required when using Afterview Init https://github.com/angular/angular/issues/6005
        this._changeDetectionRef.detectChanges();
    }
    hasChanged($event) {
        let daysOfWeek = new Array();
        if (this.daysOfWeek[0]) {
            daysOfWeek.push(_shared_shared_models__WEBPACK_IMPORTED_MODULE_2__["eDayOfWeek"].Sunday);
        }
        if (this.daysOfWeek[1]) {
            daysOfWeek.push(_shared_shared_models__WEBPACK_IMPORTED_MODULE_2__["eDayOfWeek"].Monday);
        }
        if (this.daysOfWeek[2]) {
            daysOfWeek.push(_shared_shared_models__WEBPACK_IMPORTED_MODULE_2__["eDayOfWeek"].Tuesday);
        }
        if (this.daysOfWeek[3]) {
            daysOfWeek.push(_shared_shared_models__WEBPACK_IMPORTED_MODULE_2__["eDayOfWeek"].Wednesday);
        }
        if (this.daysOfWeek[4]) {
            daysOfWeek.push(_shared_shared_models__WEBPACK_IMPORTED_MODULE_2__["eDayOfWeek"].Thursday);
        }
        if (this.daysOfWeek[5]) {
            daysOfWeek.push(_shared_shared_models__WEBPACK_IMPORTED_MODULE_2__["eDayOfWeek"].Friday);
        }
        if (this.daysOfWeek[6]) {
            daysOfWeek.push(_shared_shared_models__WEBPACK_IMPORTED_MODULE_2__["eDayOfWeek"].Saturday);
        }
        this.value = daysOfWeek;
        this.onChange(this.value);
        this.onTouched();
    }
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    writeValue(value) {
        if (value) {
            this.value = value;
        }
    }
    selectWeekend() {
        this.daysOfWeek[0] = true;
        this.daysOfWeek[1] = false;
        this.daysOfWeek[2] = false;
        this.daysOfWeek[3] = false;
        this.daysOfWeek[4] = false;
        this.daysOfWeek[5] = false;
        this.daysOfWeek[6] = true;
        this.hasChanged(null);
    }
    selectWeekDays() {
        this.daysOfWeek[0] = false;
        this.daysOfWeek[1] = true;
        this.daysOfWeek[2] = true;
        this.daysOfWeek[3] = true;
        this.daysOfWeek[4] = true;
        this.daysOfWeek[5] = true;
        this.daysOfWeek[6] = false;
        this.hasChanged(null);
    }
    selectAllDays() {
        this.daysOfWeek[0] = true;
        this.daysOfWeek[1] = true;
        this.daysOfWeek[2] = true;
        this.daysOfWeek[3] = true;
        this.daysOfWeek[4] = true;
        this.daysOfWeek[5] = true;
        this.daysOfWeek[6] = true;
        this.hasChanged(null);
    }
    selectNoDays() {
        this.daysOfWeek[0] = false;
        this.daysOfWeek[1] = false;
        this.daysOfWeek[2] = false;
        this.daysOfWeek[3] = false;
        this.daysOfWeek[4] = false;
        this.daysOfWeek[5] = false;
        this.daysOfWeek[6] = false;
        this.hasChanged(null);
    }
}
DexihFormDaysOfWeekComponent.ɵfac = function DexihFormDaysOfWeekComponent_Factory(t) { return new (t || DexihFormDaysOfWeekComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
DexihFormDaysOfWeekComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DexihFormDaysOfWeekComponent, selectors: [["daysofweek"]], inputs: { label: "label", labelLeft: "labelLeft", note: "note", errors: "errors", value: "value" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => DexihFormDaysOfWeekComponent), multi: true }])], ngContentSelectors: _c0, decls: 46, vars: 25, consts: [[1, "form-group"], [1, "mt-1", 3, "for"], [1, "input-group"], [1, "input-group-prepend"], [1, "btn", "btn-outline-primary", "btn-sm", 3, "click"], [1, "input-group-append"], [1, "form-check", "form-check-inline"], ["type", "checkbox", 1, "form-check-input", 3, "id", "ngModel", "ngModelChange"], [1, "form-check-label", 3, "for"], ["class", "invalid-feedback d-block", 4, "ngIf"], ["class", "form-text text-muted", 4, "ngIf"], [1, "invalid-feedback", "d-block"], [1, "form-text", "text-muted"], [3, "data", "click"]], template: function DexihFormDaysOfWeekComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DexihFormDaysOfWeekComponent_Template_a_click_5_listener() { return ctx.selectAllDays(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "All");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DexihFormDaysOfWeekComponent_Template_a_click_7_listener() { return ctx.selectNoDays(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "None");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DexihFormDaysOfWeekComponent_Template_a_click_9_listener() { return ctx.selectWeekend(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Weekend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DexihFormDaysOfWeekComponent_Template_a_click_12_listener() { return ctx.selectWeekDays(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Weekdays");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DexihFormDaysOfWeekComponent_Template_input_ngModelChange_17_listener($event) { return (ctx.daysOfWeek[0] = $event); })("ngModelChange", function DexihFormDaysOfWeekComponent_Template_input_ngModelChange_17_listener($event) { return ctx.hasChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Sunday");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DexihFormDaysOfWeekComponent_Template_input_ngModelChange_21_listener($event) { return (ctx.daysOfWeek[1] = $event); })("ngModelChange", function DexihFormDaysOfWeekComponent_Template_input_ngModelChange_21_listener($event) { return ctx.hasChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Monday");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DexihFormDaysOfWeekComponent_Template_input_ngModelChange_25_listener($event) { return (ctx.daysOfWeek[2] = $event); })("ngModelChange", function DexihFormDaysOfWeekComponent_Template_input_ngModelChange_25_listener($event) { return ctx.hasChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Tuesday");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DexihFormDaysOfWeekComponent_Template_input_ngModelChange_29_listener($event) { return (ctx.daysOfWeek[3] = $event); })("ngModelChange", function DexihFormDaysOfWeekComponent_Template_input_ngModelChange_29_listener($event) { return ctx.hasChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Wednesday");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DexihFormDaysOfWeekComponent_Template_input_ngModelChange_33_listener($event) { return (ctx.daysOfWeek[4] = $event); })("ngModelChange", function DexihFormDaysOfWeekComponent_Template_input_ngModelChange_33_listener($event) { return ctx.hasChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Thursday");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DexihFormDaysOfWeekComponent_Template_input_ngModelChange_37_listener($event) { return (ctx.daysOfWeek[5] = $event); })("ngModelChange", function DexihFormDaysOfWeekComponent_Template_input_ngModelChange_37_listener($event) { return ctx.hasChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Friday");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DexihFormDaysOfWeekComponent_Template_input_ngModelChange_41_listener($event) { return (ctx.daysOfWeek[6] = $event); })("ngModelChange", function DexihFormDaysOfWeekComponent_Template_input_ngModelChange_41_listener($event) { return ctx.hasChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Saturday");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, DexihFormDaysOfWeekComponent_div_44_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, DexihFormDaysOfWeekComponent_small_45_Template, 2, 1, "small", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.label, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id + "1")("ngModel", ctx.daysOfWeek[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx.id + "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id + "2")("ngModel", ctx.daysOfWeek[1]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx.id + "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id + "3")("ngModel", ctx.daysOfWeek[2]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx.id + "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id + "4")("ngModel", ctx.daysOfWeek[3]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx.id + "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id + "5")("ngModel", ctx.daysOfWeek[4]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx.id + "5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id + "6")("ngModel", ctx.daysOfWeek[5]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx.id + "6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.id + "7")("ngModel", ctx.daysOfWeek[6]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("for", ctx.id + "7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.note);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ngx_d_markdown__WEBPACK_IMPORTED_MODULE_4__["DMarkdownComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DexihFormDaysOfWeekComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'daysofweek',
                templateUrl: './dexih-form-daysofweek.component.html',
                providers: [{ provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"], useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => DexihFormDaysOfWeekComponent), multi: true }]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { label: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], labelLeft: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], note: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], errors: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=3-es2015.js.map