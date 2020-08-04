(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./src/app/+hub/datalink/datalink-edit/custom-function-edit/custom-function-edit.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/+hub/datalink/datalink-edit/custom-function-edit/custom-function-edit.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: CustomFunctionEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomFunctionEditComponent", function() { return CustomFunctionEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _hub_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hub.service */ "./src/app/+hub/hub.service.ts");
/* harmony import */ var _datalink_edit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../datalink-edit.service */ "./src/app/+hub/datalink/datalink-edit/datalink-edit.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../+auth/auth.service */ "./src/app/+auth/auth.service.ts");
/* harmony import */ var _hub_lineage_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../hub.lineage.models */ "./src/app/+hub/hub.lineage.models.ts");
/* harmony import */ var _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/shared.models */ "./src/app/shared/shared.models.ts");
/* harmony import */ var _auth_auth_models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../+auth/auth.models */ "./src/app/+auth/auth.models.ts");
/* harmony import */ var ngx_d_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-d-components */ "./node_modules/ngx-d-components/__ivy_ngcc__/fesm2015/ngx-d-components.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _parameters_input_parameter_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../parameters/input-parameter.component */ "./src/app/+hub/datalink/datalink-edit/parameters/input-parameter.component.ts");
/* harmony import */ var _parameters_output_parameter_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../parameters/output-parameter.component */ "./src/app/+hub/datalink/datalink-edit/parameters/output-parameter.component.ts");




















function CustomFunctionEditComponent_div_0_d_widget_section_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button-validate", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomFunctionEditComponent_div_0_d_widget_section_1_ng_template_1_Template_d_button_validate_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r6.test(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "d-button-download", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomFunctionEditComponent_div_0_d_widget_section_1_ng_template_1_Template_d_button_download_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r8.downloadCode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "d-button-apply", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomFunctionEditComponent_div_0_d_widget_section_1_ng_template_1_Template_d_button_apply_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return !ctx_r9.newDatalinkTransformItemForm.pristine && ctx_r9.applyExit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "d-button-cancel", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomFunctionEditComponent_div_0_d_widget_section_1_ng_template_1_Template_d_button_cancel_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r10.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r4.newDatalinkTransformItemForm.pristine);
} }
const _c0 = function () { return { "z-index": 305, "position": "relative" }; };
function CustomFunctionEditComponent_div_0_d_widget_section_1_form_3_section_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "form-select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r11.eErrorActionItems)("enableFilter", false);
} }
const _c1 = function () { return { "z-index": 303, "position": "relative" }; };
function CustomFunctionEditComponent_div_0_d_widget_section_1_form_3_section_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "form-checkbox", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
} }
const _c2 = function () { return { "z-index": 302, "position": "relative" }; };
function CustomFunctionEditComponent_div_0_d_widget_section_1_form_3_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "form-select", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r13.eInvalidActionItems)("enableFilter", false);
} }
function CustomFunctionEditComponent_div_0_d_widget_section_1_form_3_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "d-button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomFunctionEditComponent_div_0_d_widget_section_1_form_3_div_11_Template_d_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r17.addParameter(null, ctx_r17.eParameterDirection.Input); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add Parameter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c3 = function (a0) { return { "z-index": a0, "position": "relative" }; };
const _c4 = function (a0) { return [a0]; };
function CustomFunctionEditComponent_div_0_d_widget_section_1_form_3_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input-parameter", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("hasChanged", function CustomFunctionEditComponent_div_0_d_widget_section_1_form_3_div_12_Template_input_parameter_hasChanged_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r21.parameterHasChanged($event); })("addParameter", function CustomFunctionEditComponent_div_0_d_widget_section_1_form_3_div_12_Template_input_parameter_addParameter_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r23.addParameter($event, ctx_r23.eParameterDirection.Input); })("removeParameter", function CustomFunctionEditComponent_div_0_d_widget_section_1_form_3_div_12_Template_input_parameter_removeParameter_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r24.removeParameter($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const inputParameter_r19 = ctx.$implicit;
    const i_r20 = ctx.index;
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c3, 200 - i_r20));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowNameSelect", true)("allowDataTypeSelect", true)("inputParameterForms", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c4, inputParameter_r19))("inputColumns", ctx_r15.inputColumns)("nodeDatalinkColumnKey", ctx_r15.datalinkTransformForm.controls.nodeDatalinkColumn.value == null ? null : ctx_r15.datalinkTransformForm.controls.nodeDatalinkColumn.value.key)("updateParameterName", true)("allowAdd", true)("allowRemove", true);
} }
function CustomFunctionEditComponent_div_0_d_widget_section_1_form_3_div_13_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "d-button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomFunctionEditComponent_div_0_d_widget_section_1_form_3_div_13_div_5_Template_d_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r27.addParameter(null, ctx_r27.eParameterDirection.Output); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add Parameter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomFunctionEditComponent_div_0_d_widget_section_1_form_3_div_13_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "output-parameter", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("addParameter", function CustomFunctionEditComponent_div_0_d_widget_section_1_form_3_div_13_div_6_Template_output_parameter_addParameter_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r31.addParameter($event, ctx_r31.eParameterDirection.Output); })("removeParameter", function CustomFunctionEditComponent_div_0_d_widget_section_1_form_3_div_13_div_6_Template_output_parameter_removeParameter_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5); return ctx_r33.removeParameter($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const parameter_r29 = ctx.$implicit;
    const i_r30 = ctx.index;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c3, 100 - i_r30));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowNameSelect", true)("allowDataTypeSelect", true)("outputParameterForm", parameter_r29)("outputColumns", ctx_r26.outputColumns)("datalinkTargets", ctx_r26.datalinkTargets)("updateParameterName", true)("allowAdd", true)("allowRemove", true);
} }
const _c5 = function () { return { "z-index": 101, "position": "relative" }; };
function CustomFunctionEditComponent_div_0_d_widget_section_1_form_3_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Output Parameters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "output-parameter", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("addParameter", function CustomFunctionEditComponent_div_0_d_widget_section_1_form_3_div_13_Template_output_parameter_addParameter_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r34.addParameter($event, ctx_r34.eParameterDirection.Output); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CustomFunctionEditComponent_div_0_d_widget_section_1_form_3_div_13_div_5_Template, 3, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CustomFunctionEditComponent_div_0_d_widget_section_1_form_3_div_13_div_6_Template, 2, 11, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowNameSelect", false)("allowDataTypeSelect", true)("outputParameterForm", ctx_r16.returnParameterForm)("outputColumns", ctx_r16.outputColumns)("datalinkTargets", ctx_r16.datalinkTargets);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r16.outputParameters.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r16.outputParameters);
} }
const _c6 = function () { return { "z-index": 304, "position": "relative" }; };
function CustomFunctionEditComponent_div_0_d_widget_section_1_form_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CustomFunctionEditComponent_div_0_d_widget_section_1_form_3_section_3_Template, 2, 4, "section", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "form-select", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CustomFunctionEditComponent_div_0_d_widget_section_1_form_3_section_6_Template, 2, 2, "section", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CustomFunctionEditComponent_div_0_d_widget_section_1_form_3_div_7_Template, 2, 4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Input Parameters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CustomFunctionEditComponent_div_0_d_widget_section_1_form_3_div_11_Template, 3, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CustomFunctionEditComponent_div_0_d_widget_section_1_form_3_div_12_Template, 2, 13, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CustomFunctionEditComponent_div_0_d_widget_section_1_form_3_div_13_Template, 7, 9, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Function Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "textarea", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r5.newDatalinkTransformItemForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.functionType != ctx_r5.eFunctionType.Validate && ctx_r5.functionType != ctx_r5.eFunctionType.condition);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c6));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r5.eErrorActionItems)("enableFilter", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.selectedFunction && (ctx_r5.selectedFunction == null ? null : ctx_r5.selectedFunction.returnType) == "Boolean");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.functionType == ctx_r5.eFunctionType.Validate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.inputParameters.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.inputParameters);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.functionType != ctx_r5.eFunctionType.Condition && ctx_r5.functionType != ctx_r5.eFunctionType.JoinCondition);
} }
function CustomFunctionEditComponent_div_0_d_widget_section_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-widget-section", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomFunctionEditComponent_div_0_d_widget_section_1_ng_template_1_Template, 4, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CustomFunctionEditComponent_div_0_d_widget_section_1_form_3_Template, 16, 11, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showExpandButton", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.newDatalinkTransformItemForm);
} }
function CustomFunctionEditComponent_div_0_d_widget_section_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomFunctionEditComponent_div_0_d_widget_section_2_ng_template_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r41.test(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Syntax Check");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomFunctionEditComponent_div_0_d_widget_section_2_ng_template_1_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r43.test(ctx_r43.inputParameterValues); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Run");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CustomFunctionEditComponent_div_0_d_widget_section_2_ng_template_1_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r44.downloadCode(ctx_r44.inputParameterValues); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Download Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomFunctionEditComponent_div_0_d_widget_section_2_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form-input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomFunctionEditComponent_div_0_d_widget_section_2_div_6_Template_form_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r48); const i_r46 = ctx.index; const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return (ctx_r47.inputParameterValues[i_r46] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const inputParameter_r45 = ctx.$implicit;
    const i_r46 = ctx.index;
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c3, 200 - i_r46));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", inputParameter_r45.controls.name.value)("ngModel", ctx_r38.inputParameterValues[i_r46])("name", "inputParameterValues" + i_r46);
} }
function CustomFunctionEditComponent_div_0_d_widget_section_2_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Outputs Parameters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CustomFunctionEditComponent_div_0_d_widget_section_2_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form-input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomFunctionEditComponent_div_0_d_widget_section_2_div_9_Template_form_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const i_r50 = ctx.index; const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return (ctx_r51.outputParameterValues[i_r50] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const outputParameter_r49 = ctx.$implicit;
    const i_r50 = ctx.index;
    const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c3, 200 - i_r50));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true)("label", outputParameter_r49.controls.name.value)("ngModel", ctx_r40.outputParameterValues[i_r50])("name", "outputParameterValues" + i_r50);
} }
function CustomFunctionEditComponent_div_0_d_widget_section_2_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-widget-section", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomFunctionEditComponent_div_0_d_widget_section_2_ng_template_1_Template, 6, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Input Parameters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CustomFunctionEditComponent_div_0_d_widget_section_2_div_6_Template, 2, 6, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form-input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CustomFunctionEditComponent_div_0_d_widget_section_2_Template_form_input_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r54); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r53.returnParameterValue = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CustomFunctionEditComponent_div_0_d_widget_section_2_div_8_Template, 2, 0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CustomFunctionEditComponent_div_0_d_widget_section_2_div_9_Template, 2, 7, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showExpandButton", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.inputParameters);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true)("ngModel", ctx_r2.returnParameterValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.outputParameters.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.outputParameters);
} }
function CustomFunctionEditComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CustomFunctionEditComponent_div_0_d_widget_section_1_Template, 4, 2, "d-widget-section", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CustomFunctionEditComponent_div_0_d_widget_section_2_Template, 10, 6, "d-widget-section", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.datalinkTransformForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.datalinkTransformForm && ctx_r0.newDatalinkTransformItemForm);
} }
class CustomFunctionEditComponent {
    constructor(hubService, authService, editDatalinkService, route, router, location) {
        this.hubService = hubService;
        this.authService = authService;
        this.editDatalinkService = editDatalinkService;
        this.route = route;
        this.router = router;
        this.location = location;
        this.cancelToken = new _auth_auth_models__WEBPACK_IMPORTED_MODULE_9__["CancelToken"]();
        this.eFunctionType = _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["eFunctionType"];
        this.eParameterDirection = _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["eParameterDirection"];
        this.eInvalidActionItems = _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["eInvalidActionItems"].filter(c => c.key > 0);
        this.eErrorActionItems = _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["eErrorActionItems"].filter(c => c.key > 0);
        this.inputParameters = [];
        this.outputParameters = [];
        this.inputParameterValues = [];
        this.outputParameterValues = [];
    }
    ngOnInit() {
        try {
            this._subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])(this.route.data, this.route.params, this.hubService.getHubCacheObservable(), this.editDatalinkService.hubFormsService.getCurrentFormObservable(), this.hubService.getRemoteLibrariesObservable()).subscribe(result => {
                this.pageTitle = result[0]['pageTitle'];
                this.hubCache = result[2];
                this.datalinkForm = result[3];
                this.functionType = result[1]['functionType'];
                if (this.functionType === _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["eFunctionType"].Validate) {
                    this.datalinkTransformForm = this.editDatalinkService.getValidationTransform();
                    this.datalinkTransformKey = this.datalinkTransformForm.value.key;
                }
                else {
                    this.datalinkTransformKey = +result[1]['datalinkTransformKey'];
                    this.datalinkTransformForm = this.editDatalinkService.getDatalinkTransform(this.datalinkTransformKey);
                }
                this.datalinkTransformItemKey = +result[1]['datalinkTransformItemKey'];
                if (this.datalinkTransformForm) {
                    // // if this is a join transform, then the use the join columns for the input.
                    // if (this.datalinkTransformForm.value.transformType === eTransformType.Join ||
                    //   this.datalinkTransformForm.value.transformType === eTransformType.Lookup ) {
                    //   const table = this.datalinkTransformForm.controls.joinDatalinkTable.value;
                    //   if (!table) {
                    //     this.hubService.addHubErrorMessage('The join table could not be found.');
                    //     this.authService.navigateUp();
                    //   }
                    //   table.name = '(Joined) ' + table.name;
                    //   this.sourceTables = this.datalinkTransformForm.controls.runTime.value.inputColumns;
                    //   this.sourceTables.unshift(table);
                    // }  else {
                    //   this.inputColumns = this.datalinkTransformForm.controls.runTime.value.inputColumns;
                    // }
                    // this.outputColumns = this.datalinkTransformForm.controls.runTime.value.transformColumns;
                    let nodeDatalinkColumn = this.datalinkTransformForm.controls.nodeDatalinkColumn.value;
                    let nodeDatalinkColumnKey = nodeDatalinkColumn ? nodeDatalinkColumn.key : null;
                    let io = new _hub_lineage_models__WEBPACK_IMPORTED_MODULE_7__["InputOutputColumns"]();
                    if (nodeDatalinkColumnKey) {
                        let inputColumns = this.datalinkTransformForm.controls.runTime.value.inputColumns;
                        this.inputColumns = io.getAvailableColumns(inputColumns, nodeDatalinkColumnKey, 0);
                    }
                    else {
                        this.inputColumns = this.datalinkTransformForm.controls.runTime.value.inputColumns;
                    }
                    this.outputColumns = this.datalinkTransformForm.controls.runTime.value.transformColumns;
                    this.datalinkTargets = this.datalinkForm.controls.dexihDatalinkTargets.value;
                    if (this.datalinkTransformItemKey) {
                        this.datalinkTransformItemForm = this.editDatalinkService
                            .getDatalinkTransformItem(this.datalinkTransformForm, this.datalinkTransformItemKey);
                        // create a copy of the form item to allow for cancel.
                        this.newDatalinkTransformItemForm = this.editDatalinkService.hubFormsService
                            .datalinkDatalinkTransformItemFormGroup(this.datalinkTransformForm, this.datalinkTransformItemForm.value);
                        if (!this.newDatalinkTransformItemForm) {
                            this.authService.navigateUp();
                            return;
                        }
                    }
                    else {
                        let newItem = new _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["DexihDatalinkTransformItem"]();
                        newItem.datalinkTransformKey = this.datalinkTransformKey;
                        newItem.transformItemType = _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["eTransformItemType"].CustomFunction;
                        let returnParameter = new _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["DexihFunctionParameter"]();
                        if (this.functionType === _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["eFunctionType"].Condition
                            || this.functionType === _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["eFunctionType"].JoinCondition || this.functionType === _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["eFunctionType"].Validate) {
                            returnParameter.dataType = _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["eTypeCode"].Boolean;
                        }
                        else {
                            returnParameter.dataType = _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["eTypeCode"].String;
                        }
                        returnParameter.name = 'Return';
                        returnParameter.direction = _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["eParameterDirection"].ReturnValue;
                        returnParameter.rank = 0;
                        returnParameter.position = -1;
                        returnParameter.datalinkColumn = null;
                        returnParameter.isValid = true;
                        let funcParam = new _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["FunctionParameter"]();
                        funcParam.name = 'Return';
                        returnParameter['runTime'] = { functionParameter: funcParam };
                        newItem.dexihFunctionParameters = new Array();
                        newItem.dexihFunctionParameters.push(returnParameter);
                        this.newDatalinkTransformItemForm = this.editDatalinkService.hubFormsService
                            .datalinkDatalinkTransformItemFormGroup(this.datalinkTransformForm, newItem);
                    }
                    // this.returnParameterForm = this.editDatalinkService.hubFormsService
                    //   .datalinkFunctionParametersFormGroup(returnParameter);
                    // if (this._returnParameterSubscription) { this._returnParameterSubscription.unsubscribe(); }
                    // this._returnParameterSubscription = this.returnParameterForm.valueChanges.subscribe(parameter => {
                    //   this.newDatalinkTransformItemForm.controls.targetDatalinkColumn.setValue(parameter.datalinkColumn);
                    //   this.newDatalinkTransformItemForm.controls.returnType.setValue(parameter.dataType);
                    //   this.newDatalinkTransformItemForm.markAsDirty();
                    // });
                    this.parameters = this.newDatalinkTransformItemForm.controls.dexihFunctionParameters;
                    this.setParameters(this.parameters.controls);
                    if (this._parametersSubscription) {
                        this._parametersSubscription.unsubscribe();
                    }
                    this._parametersSubscription = this.parameters.valueChanges.subscribe(p => {
                        this.setParameters(p);
                    });
                }
                if (this._saveSubscription) {
                    this._saveSubscription.unsubscribe();
                }
                this._saveSubscription = this.editDatalinkService.savingDatalink.subscribe(value => {
                    if (value) {
                        this.apply();
                    }
                });
            });
        }
        catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Edit Custom Function');
        }
    }
    ngOnDestroy() {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
        if (this._returnParameterSubscription) {
            this._returnParameterSubscription.unsubscribe();
        }
        if (this._parametersSubscription) {
            this._parametersSubscription.unsubscribe();
        }
        if (this._saveSubscription) {
            this._saveSubscription.unsubscribe();
        }
        this.cancelToken.cancel();
    }
    canDeactivate() {
        return new Promise(resolve => {
            if (this.newDatalinkTransformItemForm && !this.newDatalinkTransformItemForm.pristine) {
                this.authService.confirmDialog('Function has changed', 'The function has changed.  Would you like to discard the changes and return to the previous screen?').then(confirm => {
                    resolve(confirm);
                }).catch(reason => {
                    resolve(false);
                });
            }
            else {
                resolve(true);
            }
        });
    }
    setParameters(p) {
        this.inputParameters = this.parameters.controls.sort((a, b) => a.value.position - b.value.position)
            .filter(c => c.value.direction === _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["eParameterDirection"].Input);
        this.inputParameterValues = new Array(this.inputParameters.length);
        this.outputParameters = this.parameters.controls.sort((a, b) => a.value.position - b.value.position)
            .filter(c => c.value.direction === _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["eParameterDirection"].Output);
        this.outputParameterValues = new Array(this.inputParameters.length);
        this.returnParameterForm = this.parameters.controls.find(c => c.value.direction === _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["eParameterDirection"].ReturnValue);
    }
    parametersArray() {
        return this.newDatalinkTransformItemForm.controls.dexihFunctionParameters;
    }
    addParameter(parameter, direction) {
        try {
            let newParameter = new _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["DexihFunctionParameter"]();
            if (parameter) {
                let oldParameter = parameter.value;
                newParameter.dataType = oldParameter.dataType;
                newParameter.name = oldParameter.name;
                newParameter.position = oldParameter.position + 1;
            }
            newParameter.name = '';
            newParameter.datalinkColumn = null;
            newParameter.value = null;
            newParameter.dataType = _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["eTypeCode"].String;
            newParameter.direction = direction;
            newParameter.rank = 0;
            newParameter.isValid = true;
            let parameters = this.parametersArray();
            let newParameterForm = this.editDatalinkService.hubFormsService
                .datalinkFunctionParametersFormGroup(newParameter);
            parameters.push(newParameterForm);
            // reset the positions
            parameters.controls.sort((a, b) => a.value.position - b.value.position).forEach((p, index) => {
                p.controls.position.setValue(index * 10);
            });
        }
        catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Edit Custom Function, add parameter');
        }
    }
    removeParameter(parameter) {
        try {
            let inputParameters = this.parametersArray();
            let index = inputParameters.controls.indexOf(parameter);
            if (index > -1) {
                inputParameters.removeAt(index);
            }
        }
        catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Edit Custom Function, remove parameter');
        }
    }
    newDefaultParameter() {
        try {
            let parameter = new _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["DexihFunctionParameter"]();
            parameter.datalinkTransformItemKey = this.newDatalinkTransformItemForm.value.key;
            parameter.dataType = _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["eTypeCode"].String;
            parameter.rank = 0;
            parameter.isValid = true;
            return parameter;
        }
        catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Edit Custom Function, default parameter');
        }
    }
    cancel() {
        this.authService.navigateUp();
    }
    apply() {
        this.editDatalinkService.insertDatalinkTransformItem(this.datalinkTransformForm, this.newDatalinkTransformItemForm);
        this.newDatalinkTransformItemForm.markAsPristine();
    }
    applyExit() {
        this.apply();
        this.authService.navigateUp();
    }
    downloadCode(parameters = null) {
        this.hubService.downloadCustomFunction(this.newDatalinkTransformItemForm.value, parameters).catch(reason => { });
    }
    test(parameters = null) {
        this.hubService.testCustomFunction(this.newDatalinkTransformItemForm.value, parameters, this.cancelToken).then(result => {
            this.hubService.addHubSuccessMessage('The function has successfully compiled.');
            if (result && result.length > 0) {
                result.forEach((value, index) => {
                    if (index === 0) {
                        this.returnParameterValue = value;
                    }
                    else {
                        this.outputParameterValues[index - 1] = value;
                    }
                });
            }
            else {
                this.returnParameterValue = null;
                this.outputParameterValues.forEach(c => c = null);
            }
        }).catch(reason => {
            this.returnParameterValue = null;
            this.outputParameterValues.forEach(c => c = null);
            this.hubService.addHubMessage(reason);
        });
    }
}
CustomFunctionEditComponent.ɵfac = function CustomFunctionEditComponent_Factory(t) { return new (t || CustomFunctionEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hub_service__WEBPACK_IMPORTED_MODULE_2__["HubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_datalink_edit_service__WEBPACK_IMPORTED_MODULE_3__["DatalinkEditService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"])); };
CustomFunctionEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CustomFunctionEditComponent, selectors: [["dexih-custom-function-edit"]], decls: 1, vars: 1, consts: [[4, "ngIf"], ["title", "Edit Custom Function", 3, "showExpandButton", 4, "ngIf"], ["title", "Test Function", 3, "showExpandButton", 4, "ngIf"], ["title", "Edit Custom Function", 3, "showExpandButton"], ["header", ""], [3, "formGroup", 4, "ngIf"], ["text", "Syntax Check", 1, "mr-1", 3, "click"], ["text", "Download Code", 1, "mr-1", 3, "click"], [1, "mr-1", 3, "disabled", "click"], [3, "click"], [3, "formGroup"], [1, "form-row"], ["class", "col col-xs-4", 3, "ngStyle", 4, "ngIf"], [1, "col", "col-xs-4", 3, "ngStyle"], ["label", "Action when error", "formControlName", "onError", "itemKey", "key", "itemName", "name", "iconClass", "fa fa-database", 3, "items", "enableFilter"], [1, "label"], ["class", "mb-1", 4, "ngIf"], ["class", "pl-2", 3, "ngStyle", 4, "ngFor", "ngForOf"], ["rows", "20", "width", "100%", "spellcheck", "false", "formControlName", "functionCode", 1, "form-control"], ["label", "Action when null", "formControlName", "onNull", "itemKey", "key", "itemName", "name", "iconClass", "fa fa-database", 3, "items", "enableFilter"], ["label", "Return 'NOT' result", "formControlName", "notCondition"], ["label", "Action when false", "formControlName", "invalidAction", "itemKey", "key", "itemName", "name", "iconClass", "fa fa-database", 3, "items", "enableFilter"], [1, "mb-1"], ["iconClass", "fa fa-plus-square-o", "title", "Click to add a parameter", 3, "click"], [1, "pl-2", 3, "ngStyle"], [3, "allowNameSelect", "allowDataTypeSelect", "inputParameterForms", "inputColumns", "nodeDatalinkColumnKey", "updateParameterName", "allowAdd", "allowRemove", "hasChanged", "addParameter", "removeParameter"], [1, "label", "mb-1"], [3, "ngStyle"], [3, "allowNameSelect", "allowDataTypeSelect", "outputParameterForm", "outputColumns", "datalinkTargets", "addParameter"], [3, "ngStyle", 4, "ngFor", "ngForOf"], [3, "allowNameSelect", "allowDataTypeSelect", "outputParameterForm", "outputColumns", "datalinkTargets", "updateParameterName", "allowAdd", "allowRemove", "addParameter", "removeParameter"], ["title", "Test Function", 3, "showExpandButton"], ["label", "Return Value", "name", "returnParameterValue", "type", "text", 3, "disabled", "ngModel", "ngModelChange"], ["class", "label", 4, "ngIf"], [1, "btn", "btn-success", "mr-1", 3, "click"], [1, "btn", "btn-success", 3, "click"], ["type", "text", "placeholder", "Enter a test value for the parameter", 3, "label", "ngModel", "name", "ngModelChange"], ["type", "text", 3, "disabled", "label", "ngModel", "name", "ngModelChange"]], template: function CustomFunctionEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CustomFunctionEditComponent_div_0_Template, 3, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newDatalinkTransformItemForm && ctx.inputColumns && ctx.outputColumns);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ngx_d_components__WEBPACK_IMPORTED_MODULE_10__["ɵa"], ngx_d_components__WEBPACK_IMPORTED_MODULE_10__["DButtonValidateComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_10__["DButtonDownloadComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_10__["DButtonApplyComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_10__["DButtonCancelComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], ngx_d_components__WEBPACK_IMPORTED_MODULE_10__["DFormSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], ngx_d_components__WEBPACK_IMPORTED_MODULE_10__["DFormCheckboxComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_10__["DButtonComponent"], _parameters_input_parameter_component__WEBPACK_IMPORTED_MODULE_12__["InputParameterComponent"], _parameters_output_parameter_component__WEBPACK_IMPORTED_MODULE_13__["OutputParameterComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgForm"], ngx_d_components__WEBPACK_IMPORTED_MODULE_10__["DFormInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CustomFunctionEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dexih-custom-function-edit',
                templateUrl: './custom-function-edit.component.html'
            }]
    }], function () { return [{ type: _hub_service__WEBPACK_IMPORTED_MODULE_2__["HubService"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }, { type: _datalink_edit_service__WEBPACK_IMPORTED_MODULE_3__["DatalinkEditService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"] }]; }, null); })();


/***/ }),

/***/ "./src/app/+hub/datalink/datalink-edit/custom-function-edit/index.ts":
/*!***************************************************************************!*\
  !*** ./src/app/+hub/datalink/datalink-edit/custom-function-edit/index.ts ***!
  \***************************************************************************/
/*! exports provided: CustomFunctionEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _custom_function_edit_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-function-edit.component */ "./src/app/+hub/datalink/datalink-edit/custom-function-edit/custom-function-edit.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CustomFunctionEditComponent", function() { return _custom_function_edit_component__WEBPACK_IMPORTED_MODULE_0__["CustomFunctionEditComponent"]; });




/***/ }),

/***/ "./src/app/+hub/datalink/datalink-edit/datalink-column-edit/datalink-column-edit.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/+hub/datalink/datalink-edit/datalink-column-edit/datalink-column-edit.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: DatalinkColumnEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatalinkColumnEditComponent", function() { return DatalinkColumnEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _hub_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hub.models */ "./src/app/+hub/hub.models.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../+auth/auth.service */ "./src/app/+auth/auth.service.ts");
/* harmony import */ var _hub_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hub.service */ "./src/app/+hub/hub.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _hub_forms_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../hub.forms.service */ "./src/app/+hub/hub.forms.service.ts");
/* harmony import */ var _datalink_edit_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../datalink-edit.service */ "./src/app/+hub/datalink/datalink-edit/datalink-edit.service.ts");
/* harmony import */ var _hub_remote_models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../hub.remote.models */ "./src/app/+hub/hub.remote.models.ts");
/* harmony import */ var _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/shared.models */ "./src/app/shared/shared.models.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_ui_dexihFormControls_dexih_invalid_form_details_dexih_invalid_form_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/ui/dexihFormControls/dexih-invalid-form-details/dexih-invalid-form-details.component */ "./src/app/shared/ui/dexihFormControls/dexih-invalid-form-details/dexih-invalid-form-details.component.ts");
/* harmony import */ var ngx_d_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-d-components */ "./node_modules/ngx-d-components/__ivy_ngcc__/fesm2015/ngx-d-components.js");
/* harmony import */ var _table_column_edit_column_edit_base_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../table/column-edit/column-edit-base.component */ "./src/app/+hub/table/column-edit/column-edit-base.component.ts");
/* harmony import */ var _table_table_edit_table_edit_columns_table_edit_columns_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../table/table-edit/table-edit-columns/table-edit-columns.component */ "./src/app/+hub/table/table-edit/table-edit-columns/table-edit-columns.component.ts");






















function DatalinkColumnEditComponent_div_0_table_edit_columns_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "table-edit-columns", 10);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parentColumnForm", ctx_r1.columnFormService.currentForm);
} }
function DatalinkColumnEditComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Edit Column ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "dexih-invalid-form-details", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatalinkColumnEditComponent_div_0_Template_dexih_invalid_form_details_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.columnFormService.showErrors(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "d-button-apply", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatalinkColumnEditComponent_div_0_Template_d_button_apply_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return !ctx_r4.columnFormService.currentForm.pristine && ctx_r4.applyExit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "d-button-cancel", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatalinkColumnEditComponent_div_0_Template_d_button_cancel_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "column-edit-base", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DatalinkColumnEditComponent_div_0_table_edit_columns_11_Template, 1, 1, "table-edit-columns", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r0.columnFormService.currentForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.columnFormService.currentForm.pristine);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columnFormService", ctx_r0.columnFormService)("detailedView", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.columnFormService.currentForm.controls.dataType.value === ctx_r0.eTypeCode.Node);
} }
class DatalinkColumnEditComponent {
    constructor(authService, hubService, editDatalinkService, fb, route) {
        this.authService = authService;
        this.hubService = hubService;
        this.editDatalinkService = editDatalinkService;
        this.route = route;
        this.eTypeCode = _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eTypeCode"];
        this.typeCodes = _hub_remote_models__WEBPACK_IMPORTED_MODULE_9__["TypeCodes"];
        this.deltaTypes = _hub_models__WEBPACK_IMPORTED_MODULE_2__["deltaTypes"];
        this.securityFlags = _hub_models__WEBPACK_IMPORTED_MODULE_2__["securityFlags"];
        // create a separate formService instance to manage the copied form
        this.columnFormService = new _hub_forms_service__WEBPACK_IMPORTED_MODULE_7__["HubFormsService"](fb, hubService, authService);
    }
    ngOnInit() {
        try {
            this._subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["combineLatest"])(this.route.params, this.hubService.getHubCacheObservable()).subscribe(result => {
                this.pageTitle = result[0]['pageTitle'];
                this.datalinkColumnKey = +result[0]['datalinkColumnKey'];
                this.hubCache = result[1];
                this.sourceDatalinkTableForm = this.editDatalinkService.hubFormsService.currentForm
                    .controls.sourceDatalinkTable;
                this.initializeForm();
            });
            if (this._saveSubscription) {
                this._saveSubscription.unsubscribe();
            }
            this._saveSubscription = this.editDatalinkService.savingDatalink.subscribe(value => {
                if (value) {
                    this.applyExit();
                }
            });
        }
        catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Datalink column edit');
        }
    }
    ngOnChanges() {
        if (this.hubCache) {
            this.initializeForm();
        }
    }
    ngOnDestroy() {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
        if (this._saveSubscription) {
            this._saveSubscription.unsubscribe();
        }
    }
    // searches the datalink and transforms for a column
    findColumn() {
        // look for column in source table
        let columnsArray = this.sourceDatalinkTableForm.controls.dexihDatalinkColumns;
        let column = columnsArray.controls.find(c => c.value.key === this.datalinkColumnKey);
        if (column) {
            return column;
        }
        // look for column as transform outputs
        let transformForms = this.editDatalinkService.hubFormsService.currentForm
            .controls.dexihDatalinkTransforms;
        transformForms.controls.forEach(t => {
            let datalinkTransformForm = t;
            let items = datalinkTransformForm.controls.dexihDatalinkTransformItems;
            items.controls.forEach(i => {
                if (!column) {
                    let itemForm = i;
                    if (itemForm.controls.targetDatalinkColumn.value &&
                        itemForm.controls.targetDatalinkColumn.value.key === this.datalinkColumnKey) {
                        column = itemForm.controls.targetDatalinkColumn;
                    }
                    if (!column) {
                        columnsArray = itemForm.controls.dexihFunctionParameters;
                        let parameter = columnsArray.controls.find(c => _hub_models__WEBPACK_IMPORTED_MODULE_2__["HubCache"].parameterIsOutput(c.value) &&
                            c.value.datalinkColumn &&
                            c.value.datalinkColumn.key === this.datalinkColumnKey);
                        if (parameter) {
                            column = parameter.controls.datalinkColumn;
                        }
                        if (!column) {
                            columnsArray.controls.forEach(c => {
                                let arrayParameters = c.controls.arrayParameters;
                                if (arrayParameters) {
                                    parameter = arrayParameters.controls.find(p => _hub_models__WEBPACK_IMPORTED_MODULE_2__["HubCache"].parameterIsOutput(p.value) &&
                                        p.value.datalinkColumn &&
                                        p.value.datalinkColumn.key === this.datalinkColumnKey);
                                    if (parameter) {
                                        column = parameter.controls.datalinkColumn;
                                    }
                                }
                            });
                        }
                    }
                }
            });
        });
        return column;
    }
    initializeForm() {
        let columnForm;
        if (this.datalinkColumnKey) {
            this.originalColumnForm = this.findColumn();
            if (!this.originalColumnForm) {
                this.authService.informationDialog('Cannot Edit', 'The selected column could not be edited.').then(() => {
                    this.authService.navigateUp();
                });
                return;
            }
            columnForm = this.columnFormService.datalinkTableColumn(null, this.originalColumnForm.value);
        }
        else {
            let column = new _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["DexihDatalinkColumn"]();
            column.key = this.hubCache.getNextSequence();
            column.datalinkTableKey = this.sourceDatalinkTableForm.controls.key.value;
            let columnsArray = this.sourceDatalinkTableForm.controls.dexihDatalinkColumns.value;
            let maxPos = 1;
            columnsArray.forEach(col => {
                if (col.position > maxPos) {
                    maxPos = col.position;
                }
            });
            column.position = maxPos + 1;
            columnForm = this.columnFormService.datalinkTableColumn(columnsArray, column);
        }
        this.columnFormService.startForm(columnForm);
    }
    cancel() {
        this.authService.navigateUp();
    }
    applyExit() {
        const columnForm = this.columnFormService.currentForm;
        // if no originalColumn, then add it to the source columns.
        if (!this.originalColumnForm) {
            let columnsArray = this.sourceDatalinkTableForm.controls.dexihDatalinkColumns;
            columnsArray.push(columnForm);
        }
        else {
            this.originalColumnForm.setValue(columnForm.value);
        }
        this.sourceDatalinkTableForm.markAsDirty();
        this.authService.navigateUp();
    }
}
DatalinkColumnEditComponent.ɵfac = function DatalinkColumnEditComponent_Factory(t) { return new (t || DatalinkColumnEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hub_service__WEBPACK_IMPORTED_MODULE_4__["HubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_datalink_edit_service__WEBPACK_IMPORTED_MODULE_8__["DatalinkEditService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
DatalinkColumnEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DatalinkColumnEditComponent, selectors: [["datalink-column-edit"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "list-group-item", "list-group-item-info", "rounded-0"], [1, "d-flex", "flex-row"], [1, "ml-auto"], [1, "mr-1", 3, "control", "click"], [1, "mr-1", 3, "disabled", "click"], [3, "click"], [1, "container", "mt-3", "mb-3"], [3, "columnFormService", "detailedView"], [3, "parentColumnForm", 4, "ngIf"], [3, "parentColumnForm"]], template: function DatalinkColumnEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DatalinkColumnEditComponent_div_0_Template, 12, 5, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.columnFormService == null ? null : ctx.columnFormService.currentForm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _shared_ui_dexihFormControls_dexih_invalid_form_details_dexih_invalid_form_details_component__WEBPACK_IMPORTED_MODULE_12__["DexihInvalidFormDetailsComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_13__["DButtonApplyComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_13__["DButtonCancelComponent"], _table_column_edit_column_edit_base_component__WEBPACK_IMPORTED_MODULE_14__["ColumnEditBaseComponent"], _table_table_edit_table_edit_columns_table_edit_columns_component__WEBPACK_IMPORTED_MODULE_15__["TableEditColumnsComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatalinkColumnEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'datalink-column-edit',
                templateUrl: './datalink-column-edit.component.html',
            }]
    }], function () { return [{ type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _hub_service__WEBPACK_IMPORTED_MODULE_4__["HubService"] }, { type: _datalink_edit_service__WEBPACK_IMPORTED_MODULE_8__["DatalinkEditService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/+hub/datalink/datalink-edit/datalink-edit-guard.ts":
/*!********************************************************************!*\
  !*** ./src/app/+hub/datalink/datalink-edit/datalink-edit-guard.ts ***!
  \********************************************************************/
/*! exports provided: DatalinkEditGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatalinkEditGuard", function() { return DatalinkEditGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class DatalinkEditGuard {
    canDeactivate(component) {
        return component && component.canDeactivate ? component.canDeactivate() : true;
    }
}
DatalinkEditGuard.ɵfac = function DatalinkEditGuard_Factory(t) { return new (t || DatalinkEditGuard)(); };
DatalinkEditGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DatalinkEditGuard, factory: DatalinkEditGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatalinkEditGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], null, null); })();


/***/ }),

/***/ "./src/app/+hub/datalink/datalink-edit/datalink-edit.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/+hub/datalink/datalink-edit/datalink-edit.component.ts ***!
  \************************************************************************/
/*! exports provided: DatalinkEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatalinkEditComponent", function() { return DatalinkEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _hub_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hub.service */ "./src/app/+hub/hub.service.ts");
/* harmony import */ var _datalink_edit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./datalink-edit.service */ "./src/app/+hub/datalink/datalink-edit/datalink-edit.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../+auth/auth.service */ "./src/app/+auth/auth.service.ts");
/* harmony import */ var _logging__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../logging */ "./src/logging.ts");
/* harmony import */ var _hub_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../hub.models */ "./src/app/+hub/hub.models.ts");
/* harmony import */ var _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/shared.models */ "./src/app/shared/shared.models.ts");
/* harmony import */ var _hub_remote_models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../hub.remote.models */ "./src/app/+hub/hub.remote.models.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_d_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-d-components */ "./node_modules/ngx-d-components/__ivy_ngcc__/fesm2015/ngx-d-components.js");
/* harmony import */ var _widgets_datalink_status_datalink_status_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../widgets/datalink-status/datalink-status.component */ "./src/app/+hub/widgets/datalink-status/datalink-status.component.ts");
/* harmony import */ var _save_button_datalink_edit_save_button_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./save-button/datalink-edit-save-button.component */ "./src/app/+hub/datalink/datalink-edit/save-button/datalink-edit-save-button.component.ts");
/* harmony import */ var _transform_step_transform_step_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./transform-step/transform-step.component */ "./src/app/+hub/datalink/datalink-edit/transform-step/transform-step.component.ts");
/* harmony import */ var _shared_help_dexih_help_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/help/dexih-help.component */ "./src/app/shared/help/dexih-help.component.ts");





















function DatalinkEditComponent_div_0_ng_template_2_d_dropdown_item_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-dropdown-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatalinkEditComponent_div_0_ng_template_2_d_dropdown_item_3_Template_d_dropdown_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r6.enableValidation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["target", "table-new"]; };
function DatalinkEditComponent_div_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "datalink-status", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "d-button-dropdown", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DatalinkEditComponent_div_0_ng_template_2_d_dropdown_item_3_Template, 1, 0, "d-dropdown-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "d-dropdown-item", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "datalink-save-button");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datalinkKey", ctx_r2.datalinkForm == null ? null : ctx_r2.datalinkForm.controls.key.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.validationTransform);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
} }
const _c1 = function (a1) { return ["new", a1]; };
const _c2 = function (a1) { return ["transform", a1]; };
const _c3 = function (a1) { return ["transform", a1, "preview-transform-data"]; };
function DatalinkEditComponent_div_0_div_4_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "transform-step", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onDelete", function DatalinkEditComponent_div_0_div_4_ng_template_5_Template_transform_step_onDelete_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const datalinkTransform_r11 = ctx.$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r14.deleteTransform(datalinkTransform_r11.transform.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const datalinkTransform_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkBefore", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, datalinkTransform_r11.transform.value.position - 1))("routerLinkAfter", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, datalinkTransform_r11.transform.value.position + 1))("routerLinkCurrent", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c2, datalinkTransform_r11.transform.value.key))("routerLinkPreview", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c3, datalinkTransform_r11.transform.value.key))("name", datalinkTransform_r11.name)("title", datalinkTransform_r11.name + " transform.")("icon", datalinkTransform_r11.icon)("control", datalinkTransform_r11.transform)("showDelete", true);
} }
const _c4 = function () { return ["new", 1]; };
function DatalinkEditComponent_div_0_div_4_transform_step_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "transform-step", 23);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkBefore", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c4))("routerLinkAfter", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c4))("routerLinkCurrent", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c4))("name", "Add Transform")("title", "Add new transform")("icon", "fa fa-plus")("showDelete", false);
} }
const _c5 = function () { return ["validation"]; };
function DatalinkEditComponent_div_0_div_4_transform_step_7_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "transform-step", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onDelete", function DatalinkEditComponent_div_0_div_4_transform_step_7_Template_transform_step_onDelete_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r16.disableValidation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkBefore", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, ctx_r10.datalinkTransforms.length === 0 ? 1 : ctx_r10.datalinkTransforms[ctx_r10.datalinkTransforms.length - 1].transform.value.position + 1))("routerLinkCurrent", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c5))("name", "Validation")("title", "Validate Data")("icon", "fa fa-check-square-o")("showDelete", true);
} }
const _c6 = function () { return ["properties"]; };
const _c7 = function () { return ["source"]; };
const _c8 = function () { return ["target"]; };
const _c9 = function () { return ["profiles"]; };
function DatalinkEditComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "transform-step", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "transform-step", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DatalinkEditComponent_div_0_div_4_ng_template_5_Template, 1, 17, "ng-template", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DatalinkEditComponent_div_0_div_4_transform_step_6_Template, 1, 10, "transform-step", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DatalinkEditComponent_div_0_div_4_transform_step_7_Template, 1, 9, "transform-step", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "transform-step", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "transform-step", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkCurrent", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c6))("name", "Properties")("title", "Edit the properties.")("icon", "fa fa-cog")("showDelete", false)("showArrow", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkAfter", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c4))("routerLinkCurrent", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](31, _c7))("routerLinkPreview", ctx_r3.source.link)("name", ctx_r3.source.name)("title", ctx_r3.source.name + " " + (ctx_r3.source.description ? ctx_r3.source.description : ""))("icon", ctx_r3.source.icon)("showDelete", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.datalinkTransforms);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.datalinkTransforms.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.validationTransform);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkBefore", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](32, _c1, ctx_r3.datalinkTransforms.length === 0 ? 1 : ctx_r3.datalinkTransforms[ctx_r3.datalinkTransforms.length - 1].transform.value.position + 1))("routerLinkCurrent", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](34, _c8))("name", "Target")("title", "Target tables(s)")("icon", "fa fa-arrow-circle-right")("showArrow", false)("showDelete", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLinkCurrent", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](35, _c9))("name", "Profiles")("title", "Edit the profiles.")("icon", "fa fa-bug")("showDelete", false)("isLast", true);
} }
function DatalinkEditComponent_div_0_dexih_help_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dexih-help", 25);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("path", "/assets/help/reference/", ctx_r4.help, "");
} }
function DatalinkEditComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "d-widget", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function DatalinkEditComponent_div_0_Template_d_widget_close_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DatalinkEditComponent_div_0_ng_template_2_Template, 6, 4, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DatalinkEditComponent_div_0_div_4_Template, 10, 36, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DatalinkEditComponent_div_0_dexih_help_6_Template, 1, 1, "dexih-help", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showCloseButton", true)("padding", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.datalinkTransforms);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.help);
} }
class DatalinkEditComponent {
    constructor(hubService, authService, editDatalinkService, route, router) {
        this.hubService = hubService;
        this.authService = authService;
        this.editDatalinkService = editDatalinkService;
        this.route = route;
        this.router = router;
        this.savingDatalink = false;
        this.logger = new _logging__WEBPACK_IMPORTED_MODULE_6__["LogFactory"]('datalink-edit.component');
        this.logCount = 0;
        this.eSourceType = _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["eSourceType"];
        this.datalinkTransforms = null;
        this.eTransformWriterMethod = _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["eTransformWriterMethod"];
        this.isLoaded = false;
        this.showPage = false;
        this.showPageMessage = 'Loading datalink...';
        this.source = {};
    }
    getHelp() {
        let route = this.router.routerState.root.snapshot;
        while (route.firstChild) {
            route = route.firstChild;
        }
        this.help = route.data['help'];
    }
    ngOnInit() {
        this.logger.LogC(() => `OnInit`, _logging__WEBPACK_IMPORTED_MODULE_6__["eLogLevel"].Trace);
        try {
            this.router.events.subscribe(event => {
                if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                    this.getHelp();
                }
            });
            this.getHelp();
            this._subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])(this.route.data, this.route.params, this.hubService.getHubCacheObservable()).subscribe(result => {
                this.action = result[0]['action'];
                this.pageTitle = result[0]['pageTitle'];
                this.params = result[1];
                this.hubCache = result[2];
                if (!this.hubCache || this.hubCache.status !== _hub_models__WEBPACK_IMPORTED_MODULE_7__["eCacheStatus"].Loaded) {
                    return;
                }
                this.editDatalinkService.init(this.hubCache);
                if (this.isLoaded && this.action === 'new') {
                    return;
                }
                if (this.isLoaded && this.editDatalinkService.hubFormsService.hasChanged) {
                    this.authService.confirmDialog('Datalink synchronization warning', 'The hub was disconnected, meaning the datalink could have been changed by another session.  Would you like to discard the current changes, and reload the latest version of the datalink?')
                        .then(confirm => {
                        if (confirm) {
                            this.load();
                        }
                    }).catch(() => {
                        return;
                    });
                }
                else {
                    this.load();
                }
            });
            this.editDatalinkService.ngOnInit();
        }
        catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Datalink Edit');
        }
    }
    ngOnDestroy() {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
        if (this._datalinkFormSubscription) {
            this._datalinkFormSubscription.unsubscribe();
        }
        if (this._transformsChange) {
            this._transformsChange.unsubscribe();
        }
        if (this._sourceChange) {
            this._sourceChange.unsubscribe();
        }
        //        if (this._datalinkTransformsSubscription) { this._datalinkTransformsSubscription.unsubscribe(); }
        // shut down service
        this.editDatalinkService.ngOnDestroy();
    }
    load() {
        this.logger.LogC(() => `Subscription count: ${this.logCount++}`, _logging__WEBPACK_IMPORTED_MODULE_6__["eLogLevel"].Trace);
        if (this.action === 'edit') {
            // get the hub key from the route data, and update the service.
            let datalinkKey = +this.params['datalinkKey'];
            if (!datalinkKey) {
                this.logger.LogC(() => `no datalink found.`, _logging__WEBPACK_IMPORTED_MODULE_6__["eLogLevel"].Warning);
                this.hubService.addHubErrorMessage('There was no datalink specified to edit.');
                this.showPageMessage = 'Edit failed...';
                this.editDatalinkService.hubFormsService.datalink(null);
            }
            else {
                let originalDatalink = this.hubCache.hub.dexihDatalinks.find(d => d.key === datalinkKey);
                if (originalDatalink) {
                    this.editDatalinkService.hubFormsService.datalink(originalDatalink);
                    this.route.snapshot.data['pageTitle'] = 'Datalink (' + originalDatalink.name + ')';
                }
                else {
                    this.logger.LogC(() => `no datalink found. key: ${datalinkKey}`, _logging__WEBPACK_IMPORTED_MODULE_6__["eLogLevel"].Warning);
                    this.hubService.addHubErrorMessage('A datalink with the key ' +
                        datalinkKey + ' could not be found in the repository.');
                    this.showPageMessage = 'Edit failed...';
                }
            }
        }
        else if (!this.isLoaded && this.action === 'new') {
            let datalink = new _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["DexihDatalink"]();
            datalink.sourceDatalinkTable = new _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["DexihDatalinkTable"]();
            this.editDatalinkService.hubFormsService.datalink(datalink);
            this.logger.LogC(() => `new datalink set.`, _logging__WEBPACK_IMPORTED_MODULE_6__["eLogLevel"].Warning);
        }
        else if (!this.isLoaded && this.action === 'copy') {
            // get the hub key from the route data, and update the service.
            let datalinkKey = +this.params['datalinkKey'];
            if (!datalinkKey) {
                this.logger.LogC(() => `no datalink found.`, _logging__WEBPACK_IMPORTED_MODULE_6__["eLogLevel"].Warning);
                this.hubService.addHubErrorMessage('There was no datalink specified to copy.');
                this.showPageMessage = 'Copy failed...';
                this.editDatalinkService.hubFormsService.datalink(null);
            }
            else {
                let originalDatalink = this.hubCache.hub.dexihDatalinks.find(d => d.key === datalinkKey);
                if (originalDatalink) {
                    let copyDatalink = this.hubCache.CopyDatalink(originalDatalink);
                    this.editDatalinkService.hubFormsService.datalink(copyDatalink);
                    this.editDatalinkService.hubFormsService.hasChanged = true;
                    this.route.snapshot.data['pageTitle'] = 'Datalink (' + copyDatalink.name + ')';
                }
                else {
                    this.logger.LogC(() => `no datalink found. key: ${datalinkKey}`, _logging__WEBPACK_IMPORTED_MODULE_6__["eLogLevel"].Warning);
                    this.hubService.addHubErrorMessage('A datalink with the key ' +
                        datalinkKey + ' could not be found in the repository.');
                    this.showPageMessage = 'Copy failed...';
                }
            }
        }
        else if (this.action === 'sourceTable') {
            let datalink = new _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["DexihDatalink"]();
            datalink.datalinkType = _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["eDatalinkType"].Query;
            datalink.sourceDatalinkTable = new _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["DexihDatalinkTable"]();
            datalink.sourceDatalinkTable.sourceType = _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["eSourceType"].Table;
            datalink.sourceDatalinkTable.sourceTableKey = +this.params['sourceTableKey'];
            this.editDatalinkService.reBuildDatalinkTable(datalink.sourceDatalinkTable);
            datalink.name = 'Datalink query for ' + datalink.sourceDatalinkTable.name;
            this.editDatalinkService.hubFormsService.datalink(datalink);
            this.editDatalinkService.hubFormsService.currentForm.markAsDirty();
            this.editDatalinkService.hubFormsService.hasChanged = true;
            this.logger.LogC(() => `new source table datalink set.`, _logging__WEBPACK_IMPORTED_MODULE_6__["eLogLevel"].Warning);
        }
        this.isLoaded = true;
        // monitor for any changes to the datalink
        if (this._datalinkFormSubscription) {
            this._datalinkFormSubscription.unsubscribe();
        }
        this._datalinkFormSubscription =
            this.editDatalinkService.hubFormsService.getCurrentFormObservable().subscribe(datalinkForm => {
                if (!datalinkForm) {
                    return;
                }
                this.datalinkForm = datalinkForm;
                this.refreshTransforms();
                this.refreshSource(this.datalinkForm.controls.sourceDatalinkTable.value);
                if (this._sourceChange) {
                    this._sourceChange.unsubscribe();
                }
                this._sourceChange = this.datalinkForm.controls.sourceDatalinkTable.valueChanges.subscribe(source => {
                    this.refreshSource(source);
                });
                if (this._transformsChange) {
                    this._transformsChange.unsubscribe();
                }
                this._transformsChange = this.datalinkForm.controls.dexihDatalinkTransforms.valueChanges
                    .subscribe(() => this.refreshTransforms());
                let key = datalinkForm.controls.key.value;
                if (key) {
                    if (history.pushState) {
                        let newUrl = window.location.pathname.replace('/new', `/edit/${key}`);
                        this.router.navigateByUrl(newUrl);
                    }
                }
            });
        this.showPage = true;
        this.showPageMessage = '';
    }
    canDeactivate() {
        return new Promise((resolve) => {
            if (this.editDatalinkService.hubFormsService.hasChanged) {
                this.authService.confirmDialog('Datalink changes have not been saved', 'The datalink changes have not been saved.  Do you want to discard the changes and exit?')
                    .then(confirm => {
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
    // @HostListener allows us to also guard against browser refresh, close, etc.
    unloadNotification($event) {
        if (this.editDatalinkService.hubFormsService.hasChanged) {
            $event.returnValue = 'The datalink changes have not been saved.  Do you want to discard the changes and exit?';
        }
    }
    enableValidation() {
        if (!this.validationTransform) {
            this.validationTransform = this.editDatalinkService.enableValidation();
        }
        this.router.navigate(['validation'], { relativeTo: this.route });
    }
    disableValidation() {
        if (this.validationTransform) {
            this.editDatalinkService.disableValidation();
            this.validationTransform = null;
        }
    }
    refreshSource(sourceDatalinkTable) {
        this.source = {
            name: sourceDatalinkTable.name,
            description: sourceDatalinkTable.description
        };
        switch (sourceDatalinkTable.sourceType) {
            case _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["eSourceType"].Datalink:
                this.source['icon'] = 'fa fa-exchange';
                this.source['link'] = ['source', 'preview-table-data', 'datalink', sourceDatalinkTable.sourceDatalinkKey];
                break;
            case _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["eSourceType"].Table:
                this.source['icon'] = 'fa fa-table';
                this.source['link'] = ['source', 'preview-table-data', 'table', sourceDatalinkTable.sourceTableKey];
                break;
            case _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["eSourceType"].Rows:
                this.source['icon'] = 'fa fa-bars';
                this.source['link'] = null;
        }
    }
    refreshTransforms() {
        this.logger.LogC(() => `refreshing transforms list`, _logging__WEBPACK_IMPORTED_MODULE_6__["eLogLevel"].Trace);
        const transformsArray = this.datalinkForm.controls.dexihDatalinkTransforms;
        const transforms = transformsArray.controls
            .filter(c => c.value.transformType !== _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["eTransformType"].Validation &&
            c.value.transformType !== _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["eTransformType"].Profile)
            .sort((a, b) => a.value.position - b.value.position);
        const datalinkTransforms = transforms.map(transform => {
            const type = _hub_remote_models__WEBPACK_IMPORTED_MODULE_9__["transformTypes"].find(c => c.key === transform.value.transformType);
            let icon = '';
            if (type) {
                icon = type.icon;
            }
            const name = this.hubCache.getTransformName(transform.value);
            return { transform: transform, icon: icon, name: name, invalid: transform.invalid };
        });
        this.datalinkTransforms = datalinkTransforms;
    }
    deleteTransform(datalinkTransform) {
        this.logger.LogC(() => `deleteTransform`, _logging__WEBPACK_IMPORTED_MODULE_6__["eLogLevel"].Trace);
        this.editDatalinkService.deleteDatalinkTransform(datalinkTransform).then(() => {
            this.refreshTransforms();
        });
    }
    previewData(datalinkTransform) {
        this.router.navigate(['transform', datalinkTransform.key, 'preview-transform-data'], { relativeTo: this.route });
    }
    saveDatalink() {
        this.editDatalinkService.hubFormsService.save();
    }
    cancel() {
        this.editDatalinkService.hubFormsService.cancel();
    }
}
DatalinkEditComponent.ɵfac = function DatalinkEditComponent_Factory(t) { return new (t || DatalinkEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hub_service__WEBPACK_IMPORTED_MODULE_2__["HubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_datalink_edit_service__WEBPACK_IMPORTED_MODULE_3__["DatalinkEditService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
DatalinkEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DatalinkEditComponent, selectors: [["dexih-datalink-edit-form"]], hostBindings: function DatalinkEditComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("beforeunload", function DatalinkEditComponent_beforeunload_HostBindingHandler($event) { return ctx.unloadNotification($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 1, vars: 1, consts: [["class", "container-fluid", 4, "ngIf"], [1, "container-fluid"], ["title", "Edit Datalink", "iconClass", "fa fa-lg fa-fw fa-exchange", 3, "showCloseButton", "padding", "close"], ["header", ""], ["class", "bg-light pt-1 pb-1 d-flex", 4, "ngIf"], ["class", "m-3", "title", "Datalinks", 3, "path", 4, "ngIf"], [1, "d-none", "d-xl-inline", 3, "datalinkKey"], [1, "ml-auto"], ["iconClass", "fa fa-plus", "text", "Options", 1, "mr-1"], ["iconClass", "fa fa-check-square-o", "text", "Enable target table validation", 3, "click", 4, "ngIf"], ["iconClass", "fa fa-arrow-circle-right", "text", "Add a target table.", 3, "routerLink"], ["iconClass", "fa fa-check-square-o", "text", "Enable target table validation", 3, "click"], [1, "bg-light", "pt-1", "pb-1", "d-flex"], [1, "transform-container"], [1, "d-flex", "m-3"], [3, "routerLinkCurrent", "name", "title", "icon", "control", "showDelete", "showArrow"], [3, "routerLinkAfter", "routerLinkCurrent", "routerLinkPreview", "name", "title", "icon", "control", "showDelete"], ["ngFor", "", 3, "ngForOf"], [3, "routerLinkBefore", "routerLinkAfter", "routerLinkCurrent", "name", "title", "icon", "showDelete", 4, "ngIf"], [3, "routerLinkBefore", "routerLinkCurrent", "name", "title", "icon", "showDelete", "onDelete", 4, "ngIf"], [3, "routerLinkBefore", "routerLinkCurrent", "name", "title", "icon", "control", "showArrow", "showDelete"], [3, "routerLinkCurrent", "name", "title", "icon", "control", "showDelete", "isLast"], [3, "routerLinkBefore", "routerLinkAfter", "routerLinkCurrent", "routerLinkPreview", "name", "title", "icon", "control", "showDelete", "onDelete"], [3, "routerLinkBefore", "routerLinkAfter", "routerLinkCurrent", "name", "title", "icon", "showDelete"], [3, "routerLinkBefore", "routerLinkCurrent", "name", "title", "icon", "showDelete", "onDelete"], ["title", "Datalinks", 1, "m-3", 3, "path"]], template: function DatalinkEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DatalinkEditComponent_div_0_Template, 7, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.datalinkForm && !ctx.datalinkForm.pending);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], ngx_d_components__WEBPACK_IMPORTED_MODULE_11__["DWidgetComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _widgets_datalink_status_datalink_status_component__WEBPACK_IMPORTED_MODULE_12__["DatalinkStatusComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_11__["DButtonDropDownComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_11__["ɵb"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _save_button_datalink_edit_save_button_component__WEBPACK_IMPORTED_MODULE_13__["DatalinkEditSaveButtonComponent"], _transform_step_transform_step_component__WEBPACK_IMPORTED_MODULE_14__["TransformStepComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _shared_help_dexih_help_component__WEBPACK_IMPORTED_MODULE_15__["DexihHelpComponent"]], styles: [".transform-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  margin: auto;\n  overflow-y: hidden;\n}\n\nul[_ngcontent-%COMP%] {\n  display: flex;\n  list-style: none;\n  padding: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvK2h1Yi9kYXRhbGluay9kYXRhbGluay1lZGl0L2RhdGFsaW5rLWVkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGtCQUFrQjtBQUR0Qjs7QUFJQTtFQUNJLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsWUFBWTtBQURoQiIsImZpbGUiOiJzcmMvYXBwLytodWIvZGF0YWxpbmsvZGF0YWxpbmstZWRpdC9kYXRhbGluay1lZGl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyBhbGxvdyB0cmFuc2Zvcm0gbGlzdCB0byBzY3JvbGwgaG9yaXpvbnRhbFxuLnRyYW5zZm9ybS1jb250YWluZXIge1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cblxudWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwcHg7XG4gIH1cbiAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatalinkEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dexih-datalink-edit-form',
                templateUrl: './datalink-edit.component.html',
                styleUrls: ['./datalink-edit.component.scss']
            }]
    }], function () { return [{ type: _hub_service__WEBPACK_IMPORTED_MODULE_2__["HubService"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }, { type: _datalink_edit_service__WEBPACK_IMPORTED_MODULE_3__["DatalinkEditService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { unloadNotification: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:beforeunload', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/+hub/datalink/datalink-edit/datalink-edit.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/+hub/datalink/datalink-edit/datalink-edit.module.ts ***!
  \*********************************************************************/
/*! exports provided: DatalinkEditModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatalinkEditModule", function() { return DatalinkEditModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _datalink_edit_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datalink-edit.routing */ "./src/app/+hub/datalink/datalink-edit/datalink-edit.routing.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _datalink_edit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./datalink-edit.service */ "./src/app/+hub/datalink/datalink-edit/datalink-edit.service.ts");
/* harmony import */ var _hub_forms_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hub.forms.service */ "./src/app/+hub/hub.forms.service.ts");
/* harmony import */ var _datalink_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./datalink-edit.component */ "./src/app/+hub/datalink/datalink-edit/datalink-edit.component.ts");
/* harmony import */ var _properties_datalink_edit_properties_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./properties/datalink-edit-properties.component */ "./src/app/+hub/datalink/datalink-edit/properties/datalink-edit-properties.component.ts");
/* harmony import */ var _source_table_datalink_edit_source_table_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./source-table/datalink-edit-source-table.component */ "./src/app/+hub/datalink/datalink-edit/source-table/datalink-edit-source-table.component.ts");
/* harmony import */ var _target_datalink_edit_target_table_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./target/datalink-edit-target-table.component */ "./src/app/+hub/datalink/datalink-edit/target/datalink-edit-target-table.component.ts");
/* harmony import */ var _target_datalink_edit_target_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./target/datalink-edit-target.component */ "./src/app/+hub/datalink/datalink-edit/target/datalink-edit-target.component.ts");
/* harmony import */ var _transform_datalink_edit_transform_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./transform/datalink-edit-transform.component */ "./src/app/+hub/datalink/datalink-edit/transform/datalink-edit-transform.component.ts");
/* harmony import */ var _validation_datalink_edit_validation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./validation/datalink-edit-validation.component */ "./src/app/+hub/datalink/datalink-edit/validation/datalink-edit-validation.component.ts");
/* harmony import */ var _profile_rules_profile_rules_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./profile-rules/profile-rules.component */ "./src/app/+hub/datalink/datalink-edit/profile-rules/profile-rules.component.ts");
/* harmony import */ var _save_button_datalink_edit_save_button_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./save-button/datalink-edit-save-button.component */ "./src/app/+hub/datalink/datalink-edit/save-button/datalink-edit-save-button.component.ts");
/* harmony import */ var _run_plan_datalink_run_plan_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./run-plan/datalink-run-plan.component */ "./src/app/+hub/datalink/datalink-edit/run-plan/datalink-run-plan.component.ts");
/* harmony import */ var _new_transform_datalink_edit_new_transform_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./new-transform/datalink-edit-new-transform.component */ "./src/app/+hub/datalink/datalink-edit/new-transform/datalink-edit-new-transform.component.ts");
/* harmony import */ var _standard_function_edit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./standard-function-edit */ "./src/app/+hub/datalink/datalink-edit/standard-function-edit/index.ts");
/* harmony import */ var _custom_function_edit__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./custom-function-edit */ "./src/app/+hub/datalink/datalink-edit/custom-function-edit/index.ts");
/* harmony import */ var _unGroup_edit__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./unGroup-edit */ "./src/app/+hub/datalink/datalink-edit/unGroup-edit/index.ts");
/* harmony import */ var _output_columns__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./output-columns */ "./src/app/+hub/datalink/datalink-edit/output-columns/index.ts");
/* harmony import */ var _join_columns__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./join-columns */ "./src/app/+hub/datalink/datalink-edit/join-columns/index.ts");
/* harmony import */ var _input_columns__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./input-columns */ "./src/app/+hub/datalink/datalink-edit/input-columns/index.ts");
/* harmony import */ var _mapping_edit__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./mapping-edit */ "./src/app/+hub/datalink/datalink-edit/mapping-edit/index.ts");
/* harmony import */ var _mapping__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./mapping */ "./src/app/+hub/datalink/datalink-edit/mapping/index.ts");
/* harmony import */ var _preview_data__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./preview-data */ "./src/app/+hub/datalink/datalink-edit/preview-data/index.ts");
/* harmony import */ var _preview_table__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./preview-table */ "./src/app/+hub/datalink/datalink-edit/preview-table/index.ts");
/* harmony import */ var _datalink_edit_guard__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./datalink-edit-guard */ "./src/app/+hub/datalink/datalink-edit/datalink-edit-guard.ts");
/* harmony import */ var _transform_table_edit_transform_table_edit_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./transform-table-edit/transform-table-edit.component */ "./src/app/+hub/datalink/datalink-edit/transform-table-edit/transform-table-edit.component.ts");
/* harmony import */ var _hub_shared_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../hub.shared.module */ "./src/app/+hub/hub.shared.module.ts");
/* harmony import */ var _target_table_column_target_table_column_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./target-table-column/target-table-column.component */ "./src/app/+hub/datalink/datalink-edit/target-table-column/target-table-column.component.ts");
/* harmony import */ var _table_table_shared_module__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../table/table.shared.module */ "./src/app/+hub/table/table.shared.module.ts");
/* harmony import */ var _datalink_table_datalink_table_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./datalink-table/datalink-table.component */ "./src/app/+hub/datalink/datalink-edit/datalink-table/datalink-table.component.ts");
/* harmony import */ var _datalink_column_edit_datalink_column_edit_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./datalink-column-edit/datalink-column-edit.component */ "./src/app/+hub/datalink/datalink-edit/datalink-column-edit/datalink-column-edit.component.ts");
/* harmony import */ var _results_results_view_results_view_module__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../results/results-view/results-view.module */ "./src/app/+hub/results/results-view/results-view.module.ts");
/* harmony import */ var _parameters__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./parameters */ "./src/app/+hub/datalink/datalink-edit/parameters/index.ts");
/* harmony import */ var _target_columns__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./target-columns */ "./src/app/+hub/datalink/datalink-edit/target-columns/index.ts");
/* harmony import */ var _transform_step_transform_step_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./transform-step/transform-step.component */ "./src/app/+hub/datalink/datalink-edit/transform-step/transform-step.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");









































class DatalinkEditModule {
    static forRoot() {
        return {
            ngModule: DatalinkEditModule,
            providers: [_datalink_edit_service__WEBPACK_IMPORTED_MODULE_5__["DatalinkEditService"], _hub_forms_service__WEBPACK_IMPORTED_MODULE_6__["HubFormsService"]]
        };
    }
}
DatalinkEditModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DatalinkEditModule });
DatalinkEditModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DatalinkEditModule_Factory(t) { return new (t || DatalinkEditModule)(); }, providers: [_datalink_edit_service__WEBPACK_IMPORTED_MODULE_5__["DatalinkEditService"], _hub_forms_service__WEBPACK_IMPORTED_MODULE_6__["HubFormsService"], _datalink_edit_guard__WEBPACK_IMPORTED_MODULE_28__["DatalinkEditGuard"]], imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _datalink_edit_routing__WEBPACK_IMPORTED_MODULE_2__["Routing"],
            _hub_shared_module__WEBPACK_IMPORTED_MODULE_30__["HubSharedModule"],
            _table_table_shared_module__WEBPACK_IMPORTED_MODULE_32__["TableSharedModule"],
            _results_results_view_results_view_module__WEBPACK_IMPORTED_MODULE_35__["ResultsViewModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DatalinkEditModule, { declarations: [_datalink_edit_component__WEBPACK_IMPORTED_MODULE_7__["DatalinkEditComponent"],
        _properties_datalink_edit_properties_component__WEBPACK_IMPORTED_MODULE_8__["DatalinkEditPropertiesComponent"],
        _source_table_datalink_edit_source_table_component__WEBPACK_IMPORTED_MODULE_9__["DatalinkEditSourceTableComponent"],
        _target_datalink_edit_target_table_component__WEBPACK_IMPORTED_MODULE_10__["DatalinkEditTargetTableComponent"],
        _target_datalink_edit_target_component__WEBPACK_IMPORTED_MODULE_11__["DatalinkEditTargetComponent"],
        _transform_datalink_edit_transform_component__WEBPACK_IMPORTED_MODULE_12__["DatalinkEditTransformComponent"],
        _validation_datalink_edit_validation_component__WEBPACK_IMPORTED_MODULE_13__["DatalinkEditValidationComponent"],
        _profile_rules_profile_rules_component__WEBPACK_IMPORTED_MODULE_14__["DatalinkEditProfileRulesComponent"],
        _run_plan_datalink_run_plan_component__WEBPACK_IMPORTED_MODULE_16__["DatalinkRunPlanComponent"],
        _standard_function_edit__WEBPACK_IMPORTED_MODULE_18__["StandardFunctionEditComponent"],
        _custom_function_edit__WEBPACK_IMPORTED_MODULE_19__["CustomFunctionEditComponent"],
        _output_columns__WEBPACK_IMPORTED_MODULE_21__["OutputColumnComponent"], _output_columns__WEBPACK_IMPORTED_MODULE_21__["OutputColumnsComponent"],
        _join_columns__WEBPACK_IMPORTED_MODULE_22__["JoinColumnComponent"], _join_columns__WEBPACK_IMPORTED_MODULE_22__["JoinColumnsComponent"],
        _input_columns__WEBPACK_IMPORTED_MODULE_23__["InputColumnsComponent"], _input_columns__WEBPACK_IMPORTED_MODULE_23__["InputColumnComponent"],
        _target_columns__WEBPACK_IMPORTED_MODULE_37__["TargetColumnsComponent"], _target_columns__WEBPACK_IMPORTED_MODULE_37__["TargetColumnComponent"],
        _mapping_edit__WEBPACK_IMPORTED_MODULE_24__["MappingEditComponent"],
        _mapping__WEBPACK_IMPORTED_MODULE_25__["MappingComponent"], _mapping__WEBPACK_IMPORTED_MODULE_25__["MappingItemComponent"],
        _preview_data__WEBPACK_IMPORTED_MODULE_26__["PreviewDataComponent"],
        _preview_table__WEBPACK_IMPORTED_MODULE_27__["PreviewTableComponent"],
        _transform_table_edit_transform_table_edit_component__WEBPACK_IMPORTED_MODULE_29__["TransformTableEditComponent"],
        _save_button_datalink_edit_save_button_component__WEBPACK_IMPORTED_MODULE_15__["DatalinkEditSaveButtonComponent"],
        _new_transform_datalink_edit_new_transform_component__WEBPACK_IMPORTED_MODULE_17__["DatalinkEditNewTransformComponent"],
        _target_table_column_target_table_column_component__WEBPACK_IMPORTED_MODULE_31__["TargetTableColumnComponent"],
        _datalink_table_datalink_table_component__WEBPACK_IMPORTED_MODULE_33__["DatalinkTableComponent"],
        _datalink_column_edit_datalink_column_edit_component__WEBPACK_IMPORTED_MODULE_34__["DatalinkColumnEditComponent"],
        _parameters__WEBPACK_IMPORTED_MODULE_36__["InputParameterComponent"], _parameters__WEBPACK_IMPORTED_MODULE_36__["OutputParameterComponent"],
        _unGroup_edit__WEBPACK_IMPORTED_MODULE_20__["UnGroupEditComponent"],
        _transform_step_transform_step_component__WEBPACK_IMPORTED_MODULE_38__["TransformStepComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_39__["RouterModule"], _hub_shared_module__WEBPACK_IMPORTED_MODULE_30__["HubSharedModule"],
        _table_table_shared_module__WEBPACK_IMPORTED_MODULE_32__["TableSharedModule"],
        _results_results_view_results_view_module__WEBPACK_IMPORTED_MODULE_35__["ResultsViewModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatalinkEditModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _datalink_edit_routing__WEBPACK_IMPORTED_MODULE_2__["Routing"],
                    _hub_shared_module__WEBPACK_IMPORTED_MODULE_30__["HubSharedModule"],
                    _table_table_shared_module__WEBPACK_IMPORTED_MODULE_32__["TableSharedModule"],
                    _results_results_view_results_view_module__WEBPACK_IMPORTED_MODULE_35__["ResultsViewModule"]
                ],
                declarations: [
                    _datalink_edit_component__WEBPACK_IMPORTED_MODULE_7__["DatalinkEditComponent"],
                    _properties_datalink_edit_properties_component__WEBPACK_IMPORTED_MODULE_8__["DatalinkEditPropertiesComponent"],
                    _source_table_datalink_edit_source_table_component__WEBPACK_IMPORTED_MODULE_9__["DatalinkEditSourceTableComponent"],
                    _target_datalink_edit_target_table_component__WEBPACK_IMPORTED_MODULE_10__["DatalinkEditTargetTableComponent"],
                    _target_datalink_edit_target_component__WEBPACK_IMPORTED_MODULE_11__["DatalinkEditTargetComponent"],
                    _transform_datalink_edit_transform_component__WEBPACK_IMPORTED_MODULE_12__["DatalinkEditTransformComponent"],
                    _validation_datalink_edit_validation_component__WEBPACK_IMPORTED_MODULE_13__["DatalinkEditValidationComponent"],
                    _profile_rules_profile_rules_component__WEBPACK_IMPORTED_MODULE_14__["DatalinkEditProfileRulesComponent"],
                    _run_plan_datalink_run_plan_component__WEBPACK_IMPORTED_MODULE_16__["DatalinkRunPlanComponent"],
                    _standard_function_edit__WEBPACK_IMPORTED_MODULE_18__["StandardFunctionEditComponent"],
                    _custom_function_edit__WEBPACK_IMPORTED_MODULE_19__["CustomFunctionEditComponent"],
                    _output_columns__WEBPACK_IMPORTED_MODULE_21__["OutputColumnComponent"], _output_columns__WEBPACK_IMPORTED_MODULE_21__["OutputColumnsComponent"],
                    _join_columns__WEBPACK_IMPORTED_MODULE_22__["JoinColumnComponent"], _join_columns__WEBPACK_IMPORTED_MODULE_22__["JoinColumnsComponent"],
                    _input_columns__WEBPACK_IMPORTED_MODULE_23__["InputColumnsComponent"], _input_columns__WEBPACK_IMPORTED_MODULE_23__["InputColumnComponent"],
                    _target_columns__WEBPACK_IMPORTED_MODULE_37__["TargetColumnsComponent"], _target_columns__WEBPACK_IMPORTED_MODULE_37__["TargetColumnComponent"],
                    _mapping_edit__WEBPACK_IMPORTED_MODULE_24__["MappingEditComponent"],
                    _mapping__WEBPACK_IMPORTED_MODULE_25__["MappingComponent"], _mapping__WEBPACK_IMPORTED_MODULE_25__["MappingItemComponent"],
                    _preview_data__WEBPACK_IMPORTED_MODULE_26__["PreviewDataComponent"],
                    _preview_table__WEBPACK_IMPORTED_MODULE_27__["PreviewTableComponent"],
                    _transform_table_edit_transform_table_edit_component__WEBPACK_IMPORTED_MODULE_29__["TransformTableEditComponent"],
                    _save_button_datalink_edit_save_button_component__WEBPACK_IMPORTED_MODULE_15__["DatalinkEditSaveButtonComponent"],
                    _new_transform_datalink_edit_new_transform_component__WEBPACK_IMPORTED_MODULE_17__["DatalinkEditNewTransformComponent"],
                    _target_table_column_target_table_column_component__WEBPACK_IMPORTED_MODULE_31__["TargetTableColumnComponent"],
                    _datalink_table_datalink_table_component__WEBPACK_IMPORTED_MODULE_33__["DatalinkTableComponent"],
                    _datalink_column_edit_datalink_column_edit_component__WEBPACK_IMPORTED_MODULE_34__["DatalinkColumnEditComponent"],
                    _parameters__WEBPACK_IMPORTED_MODULE_36__["InputParameterComponent"], _parameters__WEBPACK_IMPORTED_MODULE_36__["OutputParameterComponent"],
                    _unGroup_edit__WEBPACK_IMPORTED_MODULE_20__["UnGroupEditComponent"],
                    _transform_step_transform_step_component__WEBPACK_IMPORTED_MODULE_38__["TransformStepComponent"],
                ],
                providers: [_datalink_edit_service__WEBPACK_IMPORTED_MODULE_5__["DatalinkEditService"], _hub_forms_service__WEBPACK_IMPORTED_MODULE_6__["HubFormsService"], _datalink_edit_guard__WEBPACK_IMPORTED_MODULE_28__["DatalinkEditGuard"]],
                exports: []
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/+hub/datalink/datalink-edit/datalink-edit.routing.ts":
/*!**********************************************************************!*\
  !*** ./src/app/+hub/datalink/datalink-edit/datalink-edit.routing.ts ***!
  \**********************************************************************/
/*! exports provided: standardFunctionRoutes, customFunctionRoutes, mappingEditRoutes, sourceTableRoutes, targetRoutes, validationRoutes, datalinkEditRoutes, routes, Routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "standardFunctionRoutes", function() { return standardFunctionRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customFunctionRoutes", function() { return customFunctionRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mappingEditRoutes", function() { return mappingEditRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sourceTableRoutes", function() { return sourceTableRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "targetRoutes", function() { return targetRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validationRoutes", function() { return validationRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "datalinkEditRoutes", function() { return datalinkEditRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routing", function() { return Routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _properties_datalink_edit_properties_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./properties/datalink-edit-properties.component */ "./src/app/+hub/datalink/datalink-edit/properties/datalink-edit-properties.component.ts");
/* harmony import */ var _datalink_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datalink-edit.component */ "./src/app/+hub/datalink/datalink-edit/datalink-edit.component.ts");
/* harmony import */ var _source_table_datalink_edit_source_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./source-table/datalink-edit-source-table.component */ "./src/app/+hub/datalink/datalink-edit/source-table/datalink-edit-source-table.component.ts");
/* harmony import */ var _target_datalink_edit_target_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./target/datalink-edit-target.component */ "./src/app/+hub/datalink/datalink-edit/target/datalink-edit-target.component.ts");
/* harmony import */ var _transform_datalink_edit_transform_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transform/datalink-edit-transform.component */ "./src/app/+hub/datalink/datalink-edit/transform/datalink-edit-transform.component.ts");
/* harmony import */ var _profile_rules_profile_rules_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile-rules/profile-rules.component */ "./src/app/+hub/datalink/datalink-edit/profile-rules/profile-rules.component.ts");
/* harmony import */ var _validation_datalink_edit_validation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./validation/datalink-edit-validation.component */ "./src/app/+hub/datalink/datalink-edit/validation/datalink-edit-validation.component.ts");
/* harmony import */ var _run_plan_datalink_run_plan_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./run-plan/datalink-run-plan.component */ "./src/app/+hub/datalink/datalink-edit/run-plan/datalink-run-plan.component.ts");
/* harmony import */ var _standard_function_edit__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./standard-function-edit */ "./src/app/+hub/datalink/datalink-edit/standard-function-edit/index.ts");
/* harmony import */ var _custom_function_edit__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./custom-function-edit */ "./src/app/+hub/datalink/datalink-edit/custom-function-edit/index.ts");
/* harmony import */ var _mapping_edit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./mapping-edit */ "./src/app/+hub/datalink/datalink-edit/mapping-edit/index.ts");
/* harmony import */ var _datalink_edit_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./datalink-edit-guard */ "./src/app/+hub/datalink/datalink-edit/datalink-edit-guard.ts");
/* harmony import */ var _preview_data__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./preview-data */ "./src/app/+hub/datalink/datalink-edit/preview-data/index.ts");
/* harmony import */ var _preview_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./preview-table */ "./src/app/+hub/datalink/datalink-edit/preview-table/index.ts");
/* harmony import */ var _transform_table_edit_transform_table_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./transform-table-edit/transform-table-edit.component */ "./src/app/+hub/datalink/datalink-edit/transform-table-edit/transform-table-edit.component.ts");
/* harmony import */ var _new_transform_datalink_edit_new_transform_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./new-transform/datalink-edit-new-transform.component */ "./src/app/+hub/datalink/datalink-edit/new-transform/datalink-edit-new-transform.component.ts");
/* harmony import */ var _datalink_column_edit_datalink_column_edit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./datalink-column-edit/datalink-column-edit.component */ "./src/app/+hub/datalink/datalink-edit/datalink-column-edit/datalink-column-edit.component.ts");
/* harmony import */ var _results__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../results */ "./src/app/+hub/results/index.ts");
/* harmony import */ var _unGroup_edit__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./unGroup-edit */ "./src/app/+hub/datalink/datalink-edit/unGroup-edit/index.ts");
/* harmony import */ var _target_datalink_edit_target_table_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./target/datalink-edit-target-table.component */ "./src/app/+hub/datalink/datalink-edit/target/datalink-edit-target-table.component.ts");





















const standardFunctionRoutes = [
    { path: '', canDeactivate: [_datalink_edit_guard__WEBPACK_IMPORTED_MODULE_12__["DatalinkEditGuard"]], component: _standard_function_edit__WEBPACK_IMPORTED_MODULE_9__["StandardFunctionEditComponent"], data: { pageTitle: 'Standard Function' } },
    { path: ':functionType', canDeactivate: [_datalink_edit_guard__WEBPACK_IMPORTED_MODULE_12__["DatalinkEditGuard"]],
        component: _standard_function_edit__WEBPACK_IMPORTED_MODULE_9__["StandardFunctionEditComponent"], data: { pageTitle: 'Standard Function' } },
    { path: ':functionType/:datalinkTransformItemKey',
        canDeactivate: [_datalink_edit_guard__WEBPACK_IMPORTED_MODULE_12__["DatalinkEditGuard"]], component: _standard_function_edit__WEBPACK_IMPORTED_MODULE_9__["StandardFunctionEditComponent"], data: { pageTitle: 'Standard Function' } },
];
const customFunctionRoutes = [
    { path: '', canDeactivate: [_datalink_edit_guard__WEBPACK_IMPORTED_MODULE_12__["DatalinkEditGuard"]], component: _custom_function_edit__WEBPACK_IMPORTED_MODULE_10__["CustomFunctionEditComponent"], data: { pageTitle: 'Custom Function' } },
];
const mappingEditRoutes = [
    { path: '', canDeactivate: [_datalink_edit_guard__WEBPACK_IMPORTED_MODULE_12__["DatalinkEditGuard"]], component: _mapping_edit__WEBPACK_IMPORTED_MODULE_11__["MappingEditComponent"], data: { pageTitle: 'Mapping' } },
];
const sourceTableRoutes = [
    { path: '', pathMatch: 'full', component: _source_table_datalink_edit_source_table_component__WEBPACK_IMPORTED_MODULE_3__["DatalinkEditSourceTableComponent"] },
    { path: 'preview-table-data/table/:tableKey', component: _preview_table__WEBPACK_IMPORTED_MODULE_14__["PreviewTableComponent"],
        data: { pageTitle: 'Preview Table', action: 'preview' } },
    { path: 'preview-table-data/datalink/:datalinkKey', component: _preview_table__WEBPACK_IMPORTED_MODULE_14__["PreviewTableComponent"],
        data: { pageTitle: 'Preview Datalink', action: 'preview' } },
    { path: 'column/:datalinkColumnKey', component: _datalink_column_edit_datalink_column_edit_component__WEBPACK_IMPORTED_MODULE_17__["DatalinkColumnEditComponent"],
        data: { pageTitle: 'Edit Column', action: 'edit' } },
    { path: 'newcolumn', component: _datalink_column_edit_datalink_column_edit_component__WEBPACK_IMPORTED_MODULE_17__["DatalinkColumnEditComponent"],
        data: { pageTitle: 'New Column', action: 'new' } },
    { path: 'table-edit/:tableKey', data: { pageTitle: 'Edit Table', action: 'edit' },
        loadChildren: () => __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../../table/table-edit/table-edit.module */ "./src/app/+hub/table/table-edit/table-edit.module.ts")).then(m => m.TableEditModule) },
];
const targetRoutes = [
    { path: '', pathMatch: 'full', component: _target_datalink_edit_target_component__WEBPACK_IMPORTED_MODULE_4__["DatalinkEditTargetComponent"] },
    { path: 'table-edit/:targetKey', data: { pageTitle: 'Edit Target Table', action: 'edit' }, children: [
            { path: '', pathMatch: 'full', canDeactivate: [_datalink_edit_guard__WEBPACK_IMPORTED_MODULE_12__["DatalinkEditGuard"]], component: _target_datalink_edit_target_table_component__WEBPACK_IMPORTED_MODULE_20__["DatalinkEditTargetTableComponent"] },
            { path: 'preview-table-data/:tableKey', component: _preview_table__WEBPACK_IMPORTED_MODULE_14__["PreviewTableComponent"],
                data: { pageTitle: 'Preview Table', action: 'preview' } },
        ] },
    { path: 'table-new', data: { pageTitle: 'New Target Table', action: 'new' }, children: [
            { path: '', pathMatch: 'full', canDeactivate: [_datalink_edit_guard__WEBPACK_IMPORTED_MODULE_12__["DatalinkEditGuard"]], component: _target_datalink_edit_target_table_component__WEBPACK_IMPORTED_MODULE_20__["DatalinkEditTargetTableComponent"] },
            { path: 'preview-table-data/:tableKey', component: _preview_table__WEBPACK_IMPORTED_MODULE_14__["PreviewTableComponent"],
                data: { pageTitle: 'Preview Table', action: 'preview' } },
        ] },
];
const validationRoutes = [
    { path: '', pathMatch: 'full', component: _validation_datalink_edit_validation_component__WEBPACK_IMPORTED_MODULE_7__["DatalinkEditValidationComponent"], data: { pageTitle: 'Validation' } },
    { path: 'standard-function-edit', data: { pageTitle: 'Standard Function' },
        canDeactivate: [_datalink_edit_guard__WEBPACK_IMPORTED_MODULE_12__["DatalinkEditGuard"]], component: _standard_function_edit__WEBPACK_IMPORTED_MODULE_9__["StandardFunctionEditComponent"] },
    { path: 'standard-function-edit/:functionType', data: { pageTitle: 'Standard Function' },
        canDeactivate: [_datalink_edit_guard__WEBPACK_IMPORTED_MODULE_12__["DatalinkEditGuard"]], component: _standard_function_edit__WEBPACK_IMPORTED_MODULE_9__["StandardFunctionEditComponent"] },
    { path: 'standard-function-edit/:functionType/:datalinkTransformItemKey', data: { pageTitle: 'Standard Function' },
        canDeactivate: [_datalink_edit_guard__WEBPACK_IMPORTED_MODULE_12__["DatalinkEditGuard"]], component: _standard_function_edit__WEBPACK_IMPORTED_MODULE_9__["StandardFunctionEditComponent"] },
    { path: 'custom-function-edit', data: { pageTitle: 'Custom Function' },
        canDeactivate: [_datalink_edit_guard__WEBPACK_IMPORTED_MODULE_12__["DatalinkEditGuard"]], component: _custom_function_edit__WEBPACK_IMPORTED_MODULE_10__["CustomFunctionEditComponent"] },
    { path: 'custom-function-edit/:functionType', data: { pageTitle: 'Custom Function' },
        canDeactivate: [_datalink_edit_guard__WEBPACK_IMPORTED_MODULE_12__["DatalinkEditGuard"]], component: _custom_function_edit__WEBPACK_IMPORTED_MODULE_10__["CustomFunctionEditComponent"] },
    { path: 'column/:datalinkColumnKey', component: _datalink_column_edit_datalink_column_edit_component__WEBPACK_IMPORTED_MODULE_17__["DatalinkColumnEditComponent"],
        data: { pageTitle: 'Edit Column', action: 'edit' } },
];
const datalinkEditRoutes = [
    { path: '', redirectTo: 'properties' },
    { path: 'properties', component: _properties_datalink_edit_properties_component__WEBPACK_IMPORTED_MODULE_1__["DatalinkEditPropertiesComponent"], data: { pageTitle: 'Properties', help: 'datalink.md' } },
    { path: 'source', data: { pageTitle: 'Source' }, children: sourceTableRoutes },
    { path: 'target', data: { pageTitle: 'Target' }, children: targetRoutes },
    { path: 'validation', data: { pageTitle: 'Validation' }, children: validationRoutes },
    { path: 'profiles', component: _profile_rules_profile_rules_component__WEBPACK_IMPORTED_MODULE_6__["DatalinkEditProfileRulesComponent"], data: { pageTitle: 'Profile Rules' } },
    { path: 'new/:position', component: _new_transform_datalink_edit_new_transform_component__WEBPACK_IMPORTED_MODULE_16__["DatalinkEditNewTransformComponent"], data: { pageTitle: 'New Transform' } },
    { path: 'transform/:datalinkTransformKey', data: { pageTitle: 'Transform' }, children: [
            { path: '', pathMatch: 'full', component: _transform_datalink_edit_transform_component__WEBPACK_IMPORTED_MODULE_5__["DatalinkEditTransformComponent"] },
            { path: 'table-edit/:tableKey', data: { pageTitle: 'Edit Table', action: 'edit' },
                loadChildren: () => __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../../table/table-edit/table-edit.module */ "./src/app/+hub/table/table-edit/table-edit.module.ts")).then(m => m.TableEditModule) },
            { path: 'standard-function-edit', data: { pageTitle: 'Standard Function' },
                canDeactivate: [_datalink_edit_guard__WEBPACK_IMPORTED_MODULE_12__["DatalinkEditGuard"]], component: _standard_function_edit__WEBPACK_IMPORTED_MODULE_9__["StandardFunctionEditComponent"] },
            { path: 'standard-function-edit/:functionType', data: { pageTitle: 'Standard Function' },
                canDeactivate: [_datalink_edit_guard__WEBPACK_IMPORTED_MODULE_12__["DatalinkEditGuard"]], component: _standard_function_edit__WEBPACK_IMPORTED_MODULE_9__["StandardFunctionEditComponent"] },
            { path: 'standard-function-edit/:functionType/:datalinkTransformItemKey', data: { pageTitle: 'Standard Function' },
                canDeactivate: [_datalink_edit_guard__WEBPACK_IMPORTED_MODULE_12__["DatalinkEditGuard"]], component: _standard_function_edit__WEBPACK_IMPORTED_MODULE_9__["StandardFunctionEditComponent"] },
            { path: 'custom-function-edit', data: { pageTitle: 'Custom Function', help: 'function.md' },
                canDeactivate: [_datalink_edit_guard__WEBPACK_IMPORTED_MODULE_12__["DatalinkEditGuard"]], component: _custom_function_edit__WEBPACK_IMPORTED_MODULE_10__["CustomFunctionEditComponent"] },
            { path: 'custom-function-edit/:functionType', data: { pageTitle: 'Custom Function', help: 'function.md' },
                canDeactivate: [_datalink_edit_guard__WEBPACK_IMPORTED_MODULE_12__["DatalinkEditGuard"]], component: _custom_function_edit__WEBPACK_IMPORTED_MODULE_10__["CustomFunctionEditComponent"] },
            { path: 'custom-function-edit/:functionType/:datalinkTransformItemKey',
                data: { pageTitle: 'Custom Function', help: 'function.md' },
                canDeactivate: [_datalink_edit_guard__WEBPACK_IMPORTED_MODULE_12__["DatalinkEditGuard"]], component: _custom_function_edit__WEBPACK_IMPORTED_MODULE_10__["CustomFunctionEditComponent"] },
            { path: 'mapping-edit/:type', data: { pageTitle: 'Mapping Edit' },
                component: _mapping_edit__WEBPACK_IMPORTED_MODULE_11__["MappingEditComponent"] },
            { path: 'mapping-edit/:type/:datalinkTransformItemKey', data: { pageTitle: 'Mapping Edit' },
                component: _mapping_edit__WEBPACK_IMPORTED_MODULE_11__["MappingEditComponent"] },
            { path: 'unGroup-edit', data: { pageTitle: 'Un-Group Edit' },
                component: _unGroup_edit__WEBPACK_IMPORTED_MODULE_19__["UnGroupEditComponent"] },
            { path: 'unGroup-edit/:datalinkTransformItemKey', data: { pageTitle: 'Un-Group Edit' },
                component: _unGroup_edit__WEBPACK_IMPORTED_MODULE_19__["UnGroupEditComponent"] },
            { path: 'preview-transform-data', data: { pageTitle: 'Preview Data' },
                component: _preview_data__WEBPACK_IMPORTED_MODULE_13__["PreviewDataComponent"] },
            { path: 'transform-table-edit', data: { pageTitle: 'Transform Table Edit' },
                component: _transform_table_edit_transform_table_edit_component__WEBPACK_IMPORTED_MODULE_15__["TransformTableEditComponent"] },
            { path: 'column/:datalinkColumnKey', component: _datalink_column_edit_datalink_column_edit_component__WEBPACK_IMPORTED_MODULE_17__["DatalinkColumnEditComponent"],
                data: { pageTitle: 'Edit Column', action: 'edit' } },
        ] },
    { path: 'run-plan', component: _run_plan_datalink_run_plan_component__WEBPACK_IMPORTED_MODULE_8__["DatalinkRunPlanComponent"], data: { pageTitle: 'Run Plan' } },
    { path: 'result-view/:auditConnectionKey/:auditKey', component: _results__WEBPACK_IMPORTED_MODULE_18__["ResultsViewComponent"], data: { pageTitle: 'Detailed Result' } }
];
const routes = [
    { path: 'new', component: _datalink_edit_component__WEBPACK_IMPORTED_MODULE_2__["DatalinkEditComponent"], canDeactivate: [_datalink_edit_guard__WEBPACK_IMPORTED_MODULE_12__["DatalinkEditGuard"]],
        data: { action: 'new', navigateSkip: true, pageTitle: 'New Datalink' }, children: datalinkEditRoutes },
    { path: 'edit/:datalinkKey', component: _datalink_edit_component__WEBPACK_IMPORTED_MODULE_2__["DatalinkEditComponent"], canDeactivate: [_datalink_edit_guard__WEBPACK_IMPORTED_MODULE_12__["DatalinkEditGuard"]],
        data: { action: 'edit', navigateSkip: true, pageTitle: 'Edit Datalink' }, children: datalinkEditRoutes },
    { path: 'copy/:datalinkKey', component: _datalink_edit_component__WEBPACK_IMPORTED_MODULE_2__["DatalinkEditComponent"], canDeactivate: [_datalink_edit_guard__WEBPACK_IMPORTED_MODULE_12__["DatalinkEditGuard"]],
        data: { action: 'copy', navigateSkip: true, pageTitle: 'Copy Datalink' }, children: datalinkEditRoutes },
    { path: 'sourceTable/:sourceTableKey', component: _datalink_edit_component__WEBPACK_IMPORTED_MODULE_2__["DatalinkEditComponent"], canDeactivate: [_datalink_edit_guard__WEBPACK_IMPORTED_MODULE_12__["DatalinkEditGuard"]],
        data: { action: 'sourceTable', navigateSkip: true, pageTitle: 'Edit Datalink' }, children: datalinkEditRoutes }
];
const Routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/+hub/datalink/datalink-edit/datalink-edit.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/+hub/datalink/datalink-edit/datalink-edit.service.ts ***!
  \**********************************************************************/
/*! exports provided: DatalinkEditService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatalinkEditService", function() { return DatalinkEditService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../+auth/auth.service */ "./src/app/+auth/auth.service.ts");
/* harmony import */ var _logging__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../logging */ "./src/logging.ts");
/* harmony import */ var _hub_forms_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../hub.forms.service */ "./src/app/+hub/hub.forms.service.ts");
/* harmony import */ var _hub_lineage_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../hub.lineage.models */ "./src/app/+hub/hub.lineage.models.ts");
/* harmony import */ var _hub_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hub.service */ "./src/app/+hub/hub.service.ts");
/* harmony import */ var _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/shared.models */ "./src/app/shared/shared.models.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};












// contains shared objects used to edit the datalink.
class DatalinkEditService {
    constructor(hubService, authService, hubFormsService) {
        this.hubService = hubService;
        this.authService = authService;
        this.hubFormsService = hubFormsService;
        this.showAllErrors = false;
        this.logger = new _logging__WEBPACK_IMPORTED_MODULE_2__["LogFactory"]('datalink-edit.service');
        // used to stop save occurring when changing functions and target ables.
        this.savingDatalink = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](false);
    }
    ngOnInit() {
    }
    init(hubCache) {
        this._hubCache = hubCache;
        this.hubService.getRemoteLibrariesPromise().then(remoteLibraries => this.remoteLibraries = remoteLibraries);
    }
    ngOnDestroy() {
        this.hubFormsService.ngOnDestroy();
    }
    savingDataLinkObservable() {
        return this.savingDatalink.asObservable();
    }
    getValidationTransform() {
        this.logger.LogC(() => `getValidationTransform`, _logging__WEBPACK_IMPORTED_MODULE_2__["eLogLevel"].Trace);
        let datalinkForm = this.hubFormsService.currentForm;
        let datalinkTransforms = datalinkForm.controls['dexihDatalinkTransforms'];
        let datalinkTransform = datalinkTransforms.controls
            .find(c => c.value.transformType === _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eTransformType"].Validation);
        return datalinkTransform;
    }
    enableValidation() {
        let transform = this.getValidationTransform();
        if (!transform) {
            let transform = this.remoteLibraries.transforms.find(c => c.transformType === _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eTransformType"].Validation);
            return this.insertDatalinkTransform(1, transform);
        }
        return transform;
    }
    disableValidation() {
        let transform = this.getValidationTransform();
        if (transform) {
            this.deleteDatalinkTransform(transform.value);
        }
    }
    getDatalinkTransform(datalinkTransformKey) {
        this.logger.LogC(() => `getDatalinkTransform`, _logging__WEBPACK_IMPORTED_MODULE_2__["eLogLevel"].Trace);
        let datalinkForm = this.hubFormsService.currentForm;
        let datalinkTransforms = datalinkForm.controls['dexihDatalinkTransforms'];
        let datalinkTransform = datalinkTransforms.controls
            .find(c => c.value.key === datalinkTransformKey);
        return datalinkTransform;
    }
    getDatalinkTransformItem(datalinkTransformForm, datalinkTransformItemKey) {
        this.logger.LogC(() => `getDatalinkTransformItem, key:${datalinkTransformItemKey}.`, _logging__WEBPACK_IMPORTED_MODULE_2__["eLogLevel"].Trace);
        let datalinkTransformItems = datalinkTransformForm.controls['dexihDatalinkTransformItems'];
        let datalinkTransformItem = datalinkTransformItems.controls
            .find(c => c.value.key === datalinkTransformItemKey);
        this.logger.LogC(() => `getDatalinkTransformItem finished.`, _logging__WEBPACK_IMPORTED_MODULE_2__["eLogLevel"].Trace);
        return datalinkTransformItem;
    }
    // fixes the key mappings when a transform is removed or columns are refreshed
    fixMappings(datalinkForm) {
        let io = new _hub_lineage_models__WEBPACK_IMPORTED_MODULE_4__["InputOutputColumns"]();
        let datalinkTransforms = datalinkForm.controls.dexihDatalinkTransforms;
        datalinkTransforms.controls.forEach((datalinkTransformForm) => {
            let inputColumns = datalinkTransformForm.controls.runTime.value.inputColumns;
            let joinColumns = null;
            if (datalinkTransformForm.value.joinDatalinkTable) {
                joinColumns = datalinkTransformForm.value.joinDatalinkTable.dexihDatalinkColumns;
            }
            let nodeColumns = this.getNodeColumns(inputColumns);
            this.fixMapping(nodeColumns, datalinkTransformForm.controls.nodeDatalinkColumn);
            this.fixMapping(joinColumns, datalinkTransformForm.controls.joinSortDatalinkColumn);
            // set the inputcolumns to the current node level.
            if (datalinkTransformForm.controls.nodeDatalinkColumn.value) {
                inputColumns = io.getAvailableColumns(inputColumns, datalinkTransformForm.controls.nodeDatalinkColumn.value.key, 0);
            }
            let items = datalinkTransformForm.controls.dexihDatalinkTransformItems;
            items.controls.forEach((item) => {
                this.fixMapping(inputColumns, item.controls.sourceDatalinkColumn);
                this.fixMapping(joinColumns, item.controls.joinDatalinkColumn);
                this.fixMapping(inputColumns, item.controls.filterDatalinkColumn);
                let parameters = item.controls.dexihFunctionParameters;
                parameters.controls.forEach((parameter) => {
                    switch (parameter.controls.direction.value) {
                        case _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eParameterDirection"].Input:
                            this.fixMapping(inputColumns, parameter.controls.datalinkColumn);
                            break;
                        case _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eParameterDirection"].Join:
                            this.fixMapping(joinColumns, parameter.controls.datalinkColumn);
                            break;
                    }
                    let arrayParameters = parameter.controls.arrayParameters;
                    arrayParameters.controls.forEach((arrayParameter) => {
                        switch (arrayParameter.controls.direction.value) {
                            case _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eParameterDirection"].Input:
                                this.fixMapping(inputColumns, arrayParameter.controls.datalinkColumn);
                                break;
                            case _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eParameterDirection"].Join:
                                this.fixMapping(joinColumns, arrayParameter.controls.datalinkColumn);
                                break;
                        }
                    });
                });
            });
        });
    }
    getNodeColumns(columns) {
        let nodes = [];
        if (columns) {
            columns.filter(c => c.dataType === _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eTypeCode"].Node && c.isValid).forEach(col => {
                nodes.push(col);
                if (col.childColumns && col.childColumns.length > 0) {
                    nodes = nodes.concat(this.getNodeColumns(col.childColumns));
                }
            });
        }
        return nodes;
    }
    fixMapping(inputColumns, columnForm) {
        let column = columnForm.value;
        if (!inputColumns || !column) {
            return;
        }
        if (inputColumns.findIndex(c => c.key === column.key) < 0) {
            let inputColumn = inputColumns
                .find(c => c.name === column.name && c.columnGroup === column.columnGroup);
            if (!inputColumn) {
                inputColumn = inputColumns.find(c => c.name === column.name);
            }
            if (inputColumn) {
                columnForm.setValue(inputColumn);
            }
        }
    }
    getFunctionType(datalinkTransform) {
        let functionType;
        switch (datalinkTransform.transformType) {
            case _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eTransformType"].Filter:
                functionType = _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eFunctionType"].Condition;
                break;
            case _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eTransformType"].Mapping:
                functionType = _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eFunctionType"].Map;
                break;
            case _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eTransformType"].Join:
                functionType = _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eFunctionType"].JoinCondition;
                break;
            case _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eTransformType"].Group:
            case _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eTransformType"].Aggregate:
                functionType = _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eFunctionType"].Aggregate;
                break;
            case _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eTransformType"].Series:
                functionType = _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eFunctionType"].Series;
                break;
            case _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eTransformType"].Sort:
                functionType = _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eFunctionType"].Sort;
                break;
            case _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eTransformType"].Validation:
                functionType = _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eFunctionType"].Validate;
                break;
            case _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eTransformType"].Rows:
                functionType = _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eFunctionType"].Rows;
                break;
            case _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eTransformType"].Lookup:
                functionType = _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eFunctionType"].JoinCondition;
                break;
            case _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eTransformType"].Delta:
                break;
        }
        return functionType;
    }
    getVariables() {
        let variables = this.hubFormsService.currentForm.controls.parameters.value.map(c => '{' + c.name + '}')
            .concat(this._hubCache.hub.dexihHubVariables.map(c => '{' + c.name + '}'));
        return variables;
    }
    getColumnGroups(columns) {
        let previousGroup = null;
        let columnGroups = [];
        let cols = null;
        columns
            .filter(c => c.isValid)
            .sort((a, b) => a.position - b.position)
            .forEach(column => {
            let group = column.columnGroup ? column.columnGroup : '(un-grouped)';
            if (group !== previousGroup) {
                if (cols) {
                    columnGroups.push({ group: previousGroup, columns: cols });
                }
                previousGroup = group;
                cols = [];
            }
            cols.push(column);
        });
        if (cols && cols.length > 0) {
            columnGroups.push({ group: previousGroup, columns: cols });
        }
        return columnGroups;
    }
    insertDatalinkTransformItem(datalinkTransformForm, datalinkTransformItemForm) {
        this.logger.LogC(() => `insertDatalinkTransformItem`, _logging__WEBPACK_IMPORTED_MODULE_2__["eLogLevel"].Trace);
        let datalinkTransformItem = datalinkTransformItemForm.value;
        let datalinkTransformItemsArray = datalinkTransformForm.controls['dexihDatalinkTransformItems'];
        // use temporary negative keys for items which have not been saved.
        if (!datalinkTransformItem.key) {
            datalinkTransformItem.key = this._hubCache.getNextSequence();
            if (datalinkTransformItemsArray.controls.length === 0) {
                datalinkTransformItem.position = 1;
            }
            else {
                datalinkTransformItem.position = Math.max.apply(Math, datalinkTransformItemsArray.controls.map(o => o.value.position)) + 1;
            }
            let form = this.hubFormsService.datalinkDatalinkTransformItemFormGroup(datalinkTransformForm, datalinkTransformItem);
            datalinkTransformItemsArray.push(form);
        }
        else {
            // existing item? lookup previous item and copy the updated values across.
            let currentIndex = datalinkTransformItemsArray.controls
                .findIndex(c => c.value['key'] === datalinkTransformItem.key);
            datalinkTransformItemsArray.removeAt(currentIndex);
            let form = this.hubFormsService.datalinkDatalinkTransformItemFormGroup(datalinkTransformForm, datalinkTransformItem);
            datalinkTransformItemsArray.push(form);
        }
        this.fixMappings(this.hubFormsService.currentForm);
        this.logger.LogC(() => `insertDatalinkTransformItem finished`, _logging__WEBPACK_IMPORTED_MODULE_2__["eLogLevel"].Trace);
        return datalinkTransformItem;
    }
    deleteDatalinkTransformItem(datalinkTransformForm, datalinkTransformItemForm) {
        this.logger.LogC(() => `deleteDatalinkTransformItem`, _logging__WEBPACK_IMPORTED_MODULE_2__["eLogLevel"].Trace);
        let datalinkTransformItems = datalinkTransformForm.controls['dexihDatalinkTransformItems'];
        let index = datalinkTransformItems.controls.indexOf(datalinkTransformItemForm);
        datalinkTransformItems.removeAt(index);
        this.fixMappings(this.hubFormsService.currentForm);
    }
    deleteDatalinkTarget(datalinkForm, datalinkTargetKey) {
        this.logger.LogC(() => `deleteDatalinkTarget`, _logging__WEBPACK_IMPORTED_MODULE_2__["eLogLevel"].Trace);
        let datalinkTargets = datalinkForm.controls['dexihDatalinkTargets'];
        let index = datalinkTargets.controls.findIndex(c => c.value.key === datalinkTargetKey);
        if (index >= 0) {
            datalinkTargets.removeAt(index);
        }
    }
    insertDatalinkTransform(position, transform) {
        this.logger.LogC(() => `insertDatalinkTransform`, _logging__WEBPACK_IMPORTED_MODULE_2__["eLogLevel"].Trace);
        let datalinkForm = this.hubFormsService.currentForm;
        let datalinkTransforms = datalinkForm.controls['dexihDatalinkTransforms'];
        let newDatalinkTransform = new _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["DexihDatalinkTransform"]();
        // use temporary negative keys for datalink transforms which have not been saved.
        let minKey = -1;
        datalinkTransforms.controls.forEach(dt => {
            if (dt.value['key'] <= minKey) {
                minKey = dt.value['key'] - 1;
            }
        });
        this.logger.LogC(() => `insertDatalinkTransform key:${minKey}`, _logging__WEBPACK_IMPORTED_MODULE_2__["eLogLevel"].Trace);
        newDatalinkTransform.key = minKey;
        newDatalinkTransform.transformType = transform.transformType;
        newDatalinkTransform.transformAssemblyName = transform.transformAssemblyName;
        newDatalinkTransform.transformClassName = transform.transformClassName;
        // newDatalinkTransform.name = transform.name;
        // newDatalinkTransform.description = transform.description;
        newDatalinkTransform.dexihDatalinkTransformItems = new Array();
        newDatalinkTransform.isValid = true;
        // default pass-through columns off for map, group, and row transforms.
        switch (transform.transformType) {
            case _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eTransformType"].Group:
            case _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eTransformType"].Rows:
            case _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eTransformType"].Mapping:
                newDatalinkTransform.passThroughColumns = false;
                break;
            default:
                newDatalinkTransform.passThroughColumns = true;
        }
        if (transform.transformType === _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eTransformType"].Join
            || transform.transformType === _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eTransformType"].Lookup || transform.transformType === _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eTransformType"].Concatenate) {
            newDatalinkTransform.joinDatalinkTable = new _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["DexihDatalinkTable"]();
            newDatalinkTransform.joinDatalinkTable.key = this._hubCache.getNextSequence();
        }
        if (transform.transformType === _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eTransformType"].Series) {
            let seriesItem = new _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["DexihDatalinkTransformItem"]();
            seriesItem.transformItemType = _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eTransformItemType"].Series;
            seriesItem.position = 0;
            seriesItem.isValid = true;
            newDatalinkTransform.dexihDatalinkTransformItems.push(seriesItem);
        }
        newDatalinkTransform.position = position;
        let datalinkTransformForm = this.hubFormsService.datalinkTransformFormGroup(newDatalinkTransform);
        datalinkTransforms.push(datalinkTransformForm);
        this.resetDatalinkTransformPositions();
        this.logger.LogC(() => `insertDatalinkTransform finished.`, _logging__WEBPACK_IMPORTED_MODULE_2__["eLogLevel"].Trace);
        return datalinkTransformForm;
    }
    deleteDatalinkTransform(datalinkTransform) {
        return new Promise((resolve) => {
            this.authService.confirmDialog('Delete Transform', `Are you sure you would like to remove the transform ${datalinkTransform.name}?`)
                .then(confirm => {
                if (confirm) {
                    let datalinkForm = this.hubFormsService.currentForm;
                    let datalinkTransforms = datalinkForm.controls['dexihDatalinkTransforms'];
                    let index = datalinkTransforms.controls
                        .findIndex(c => c.value.key === datalinkTransform.key);
                    datalinkTransforms.removeAt(index);
                    this.resetDatalinkTransformPositions();
                }
                resolve(confirm);
            }).catch(() => {
                resolve(false);
            });
        });
    }
    resetDatalinkTransformPositions() {
        return __awaiter(this, void 0, void 0, function* () {
            const datalinkForm = this.hubFormsService.currentForm;
            const datalinkTransforms = datalinkForm.controls.dexihDatalinkTransforms;
            let userConfigTransforms = yield this.hubService.GetUserConfigTransformReference();
            let position = 10;
            datalinkTransforms.controls.sort((a, b) => a.value.position - b.value.position).forEach(datalinkTransform => {
                const dt = datalinkTransform;
                let transformReference = userConfigTransforms.find(e => e.transformClassName === datalinkTransform.value.transformClassName);
                // if the transform is a validation/delta, then position at the end.
                if (transformReference) {
                    dt.controls.position.setValue(position);
                    position += 10;
                }
                else {
                    dt.controls.position.setValue(1000000);
                }
            });
        });
    }
    importFunctionMappings(datalinkTransformKey, item, cancelToken) {
        let datalink = this.hubFormsService.getDatalinkValue();
        const cache = this._hubCache;
        return this.hubService.hubPostRemote('/api/Hub/ImportFunctionMappings', {
            hubKey: cache.hub.hubKey,
            remoteAgentId: this.hubService.getCurrentRemoteAgentId(),
            datalink: datalink,
            datalinkTransformKey: datalinkTransformKey,
            datalinkTransformItem: item
        }, 'Importing function mappings...', cancelToken);
    }
    reBuildDatalinkTable(datalinkTable, confirm = false) {
        if (confirm) {
            // tslint:disable-next-line:max-line-length
            this.authService.confirmDialog('Rebuild Columns?', `This action will load the selected table columns, and replace or delete any existing columns.  This may require fixing some mappings.  Do you want to proceed?`)
                .then((confirm2) => {
                if (confirm2) {
                    this.doRebuildDatalinkTable(datalinkTable);
                }
            }).catch();
        }
        else {
            this.doRebuildDatalinkTable(datalinkTable);
        }
    }
    doRebuildDatalinkTable(datalinkTable) {
        datalinkTable.dexihDatalinkColumns.forEach(datalinkColumn => datalinkColumn.isValid = false);
        switch (datalinkTable.sourceType) {
            case _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eSourceType"].Table:
                let sourceTable = this._hubCache.getTable(datalinkTable.sourceTableKey);
                if (sourceTable) {
                    datalinkTable.name = sourceTable.name;
                    datalinkTable.dexihDatalinkColumns = this.mergeDatalinkColumns(datalinkTable.name, datalinkTable.key, sourceTable.dexihTableColumns, datalinkTable.dexihDatalinkColumns);
                }
                break;
            case _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eSourceType"].Datalink:
                let datalink = this._hubCache.hub.dexihDatalinks.find(c => c.key === datalinkTable.sourceDatalinkKey);
                if (datalink) {
                    datalinkTable.name = datalink.name;
                    let io = new _hub_lineage_models__WEBPACK_IMPORTED_MODULE_4__["InputOutputColumns"]();
                    // const datalinkColumns = io.getInputColumns(this._hubCache, datalink, null, []);
                    io.buildInputOutput(this._hubCache, datalink);
                    let datalinkColumns;
                    if (datalink.dexihDatalinkTransforms.length === 0) {
                        datalinkColumns = datalink.sourceDatalinkTable.dexihDatalinkColumns;
                    }
                    else {
                        let transforms = datalink.dexihDatalinkTransforms.sort((a, b) => a.position - b.position);
                        let transform = transforms[transforms.length - 1];
                        datalinkColumns = transform['runTime'].outputColumns;
                    }
                    datalinkTable.dexihDatalinkColumns = this.mergeDatalinkColumns(datalinkTable.name, datalinkTable.key, datalinkColumns, datalinkTable.dexihDatalinkColumns);
                }
                break;
            case _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eSourceType"].Rows:
                datalinkTable.name = 'Static Row Set';
                let rowDatalinkColumn = datalinkTable.dexihDatalinkColumns.find(c => c.name === 'RowNumber');
                if (!rowDatalinkColumn) {
                    rowDatalinkColumn = new _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["DexihDatalinkColumn"]();
                    rowDatalinkColumn.key = this._hubCache.getNextSequence();
                    rowDatalinkColumn.datalinkTableKey = datalinkTable.key;
                    datalinkTable.dexihDatalinkColumns.push(rowDatalinkColumn);
                }
                rowDatalinkColumn.name = 'RowNumber';
                rowDatalinkColumn.logicalName = rowDatalinkColumn.name;
                rowDatalinkColumn.dataType = _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eTypeCode"].Int32;
                rowDatalinkColumn.isMandatory = true;
                rowDatalinkColumn.isValid = true;
                rowDatalinkColumn.description = 'The generated row number of the static row set';
                break;
        }
    }
    mergeDatalinkColumns(groupName, datalinkTableKey, newColumns, existingColumns) {
        newColumns.forEach(column => {
            let datalinkColumn = existingColumns.find(c => c.name === column.name && c.columnGroup === groupName);
            if (!datalinkColumn) {
                datalinkColumn = existingColumns.find(c => c.name === column.name);
            }
            if (!datalinkColumn) {
                datalinkColumn = new _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["DexihDatalinkColumn"]();
                datalinkColumn.key = this._hubCache.getNextSequence();
                datalinkColumn.datalinkTableKey = datalinkTableKey;
                existingColumns.push(datalinkColumn);
            }
            Object.keys(datalinkColumn).forEach(key => {
                if (key === 'childColumns') {
                    if (column[key] && column[key].length > 0) {
                        datalinkColumn[key] = this.mergeDatalinkColumns(groupName, datalinkTableKey, column[key], datalinkColumn[key]);
                    }
                    else {
                        datalinkColumn[key] = [];
                    }
                }
                else if (key !== 'key' && column[key]) {
                    datalinkColumn[key] = column[key];
                }
                else if (key === 'columnGroup') {
                    if (groupName) {
                        if (datalinkColumn[key] && datalinkColumn[key] !== groupName) {
                            datalinkColumn[key] = groupName + '.' + datalinkColumn[key];
                        }
                        else {
                            datalinkColumn[key] = groupName;
                        }
                    }
                }
            });
        });
        return existingColumns;
    }
}
DatalinkEditService.ɵfac = function DatalinkEditService_Factory(t) { return new (t || DatalinkEditService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_hub_service__WEBPACK_IMPORTED_MODULE_5__["HubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_hub_forms_service__WEBPACK_IMPORTED_MODULE_3__["HubFormsService"])); };
DatalinkEditService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DatalinkEditService, factory: DatalinkEditService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatalinkEditService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _hub_service__WEBPACK_IMPORTED_MODULE_5__["HubService"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _hub_forms_service__WEBPACK_IMPORTED_MODULE_3__["HubFormsService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/+hub/datalink/datalink-edit/datalink-table/datalink-table.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/+hub/datalink/datalink-edit/datalink-table/datalink-table.component.ts ***!
  \****************************************************************************************/
/*! exports provided: DatalinkTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatalinkTableComponent", function() { return DatalinkTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _hub_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hub.models */ "./src/app/+hub/hub.models.ts");
/* harmony import */ var _hub_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hub.service */ "./src/app/+hub/hub.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _datalink_edit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../datalink-edit.service */ "./src/app/+hub/datalink/datalink-edit/datalink-edit.service.ts");
/* harmony import */ var _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/shared.models */ "./src/app/shared/shared.models.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_d_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-d-components */ "./node_modules/ngx-d-components/__ivy_ngcc__/fesm2015/ngx-d-components.js");
/* harmony import */ var _buttons_table_edit_button_table_edit_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../buttons/table-edit-button/table-edit-button.component */ "./src/app/+hub/buttons/table-edit-button/table-edit-button.component.ts");
/* harmony import */ var _buttons_datalink_edit_button_datalink_edit_button_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../buttons/datalink-edit-button/datalink-edit-button.component */ "./src/app/+hub/buttons/datalink-edit-button/datalink-edit-button.component.ts");















function DatalinkTableComponent_form_0_section_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form-select", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "table-edit-button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r1.errors == null ? null : ctx_r1.errors.sourceTableKey)("items", ctx_r1.connectionTables);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("key", ctx_r1.datalinkTableForm.controls.sourceTableKey.value);
} }
function DatalinkTableComponent_form_0_section_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form-select", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "datalink-edit-button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r2.errors == null ? null : ctx_r2.errors.sourceDatalinkKey)("items", ctx_r2.datalinks);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("key", ctx_r2.datalinkTableForm.controls.sourceDatalinkKey.value);
} }
function DatalinkTableComponent_form_0_section_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "form-input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "form-input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "form-input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DatalinkTableComponent_form_0_form_checkbox_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "form-checkbox", 16);
} }
function DatalinkTableComponent_form_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "form-select", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DatalinkTableComponent_form_0_section_4_Template, 3, 3, "section", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DatalinkTableComponent_form_0_section_5_Template, 3, 3, "section", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DatalinkTableComponent_form_0_section_6_Template, 8, 0, "section", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "form-checkbox", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DatalinkTableComponent_form_0_form_checkbox_9_Template, 1, 0, "form-checkbox", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "form-input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "d-button-refresh", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatalinkTableComponent_form_0_Template_d_button_refresh_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.refreshColumns(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.datalinkTableForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r0.sourceTypes)("enableFilter", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.datalinkTableForm.value.sourceType == ctx_r0.eSourceType.Table);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.datalinkTableForm.value.sourceType == ctx_r0.eSourceType.Datalink);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.datalinkTableForm.value.sourceType == ctx_r0.eSourceType.Rows);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isVersioned);
} }
class DatalinkTableComponent {
    constructor(hubService, datalinkEditService) {
        this.hubService = hubService;
        this.datalinkEditService = datalinkEditService;
        this.eSourceType = _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eSourceType"];
        this.sourceTypes = _hub_models__WEBPACK_IMPORTED_MODULE_1__["sourceTypes"];
        this.connectionTables = [];
        this.datalinks = [];
        this.isVersioned = false;
    }
    ngOnInit() {
        this.errors = this.datalinkEditService.hubFormsService.getFormErrorMessages(this.datalinkTableForm, true);
        try {
            this._subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(this.hubService.getHubCacheObservable()).subscribe(result => {
                this.hubCache = result[0];
                this.subscribeDatalinkChanges();
                if (this.hubCache && this.hubCache.isLoaded() && this.datalinkTableForm) {
                    this.connectionTables = this.hubCache.getConnectionTables();
                    this.datalinks = this.hubCache.hub.dexihDatalinks;
                    this.updateIsVersioned();
                }
            });
        }
        catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Selected datalink table');
        }
    }
    updateIsVersioned() {
        if (this.datalinkTableForm.controls.sourceType.value === _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eSourceType"].Table) {
            var table = this.hubCache.getTable(this.datalinkTableForm.controls.sourceTableKey.value);
            if (table) {
                this.isVersioned = table.isVersioned;
            }
        }
    }
    subscribeDatalinkChanges() {
        if (this._datalinkTableSubscription) {
            this._datalinkTableSubscription.unsubscribe();
        }
        this._datalinkTableSubscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(this.datalinkTableForm.controls.sourceType.valueChanges, this.datalinkTableForm.controls.sourceTableKey.valueChanges, this.datalinkTableForm.controls.sourceDatalinkKey.valueChanges).subscribe(() => {
            this.errors = this.datalinkEditService.hubFormsService.getFormErrorMessages(this.datalinkTableForm, true);
            this.refreshColumns();
        });
    }
    ngOnDestroy() {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
        if (this._datalinkTableSubscription) {
            this._datalinkTableSubscription.unsubscribe();
        }
    }
    refreshColumns() {
        try {
            // temporarily unsubscribe to avoid a recursive loop.
            if (this._datalinkTableSubscription) {
                this._datalinkTableSubscription.unsubscribe();
            }
            let datalinkTable = this.datalinkTableForm.value;
            datalinkTable.sourceType = this.datalinkTableForm.controls.sourceType.value;
            datalinkTable.sourceTableKey = this.datalinkTableForm.controls.sourceTableKey.value;
            datalinkTable.sourceDatalinkKey = this.datalinkTableForm.controls.sourceDatalinkKey.value;
            this.datalinkEditService.reBuildDatalinkTable(datalinkTable);
            this.datalinkEditService.fixMappings(this.datalinkEditService.hubFormsService.currentForm);
            this.datalinkTableForm.controls.name.setValue(datalinkTable.name);
            this.datalinkTableForm.controls.rowsEndAt.setValue(datalinkTable.rowsEndAt);
            this.datalinkTableForm.controls.rowsStartAt.setValue(datalinkTable.rowsStartAt);
            this.datalinkTableForm.controls.rowsIncrement.setValue(datalinkTable.rowsIncrement);
            this.datalinkTableForm.controls.sourceType.setValue(datalinkTable.sourceType);
            this.updateIsVersioned();
            let tableColumnsForm = this.datalinkTableForm.controls.dexihDatalinkColumns;
            while (tableColumnsForm.length > 0) {
                tableColumnsForm.removeAt(0);
            }
            datalinkTable.dexihDatalinkColumns.sort((a, b) => a.position - b.position).filter(c => c.isValid).forEach(column => {
                tableColumnsForm.push(this.datalinkEditService.hubFormsService.datalinkTableColumn(tableColumnsForm.value, column));
            });
            this.subscribeDatalinkChanges();
        }
        catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Refresh datalink columns');
        }
    }
}
DatalinkTableComponent.ɵfac = function DatalinkTableComponent_Factory(t) { return new (t || DatalinkTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hub_service__WEBPACK_IMPORTED_MODULE_2__["HubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_datalink_edit_service__WEBPACK_IMPORTED_MODULE_5__["DatalinkEditService"])); };
DatalinkTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DatalinkTableComponent, selectors: [["datalink-table"]], inputs: { datalinkTableForm: "datalinkTableForm" }, decls: 1, vars: 1, consts: [[3, "formGroup", 4, "ngIf"], [3, "formGroup"], ["label", "Data Source Type", "formControlName", "sourceType", "itemKey", "key", "itemName", "name", "iconClass", "fa fa-database", "note", "Specify the source type for this table", 3, "items", "enableFilter"], [4, "ngIf"], ["label", "Disable query logic being pushed down to the database", "formControlName", "disablePushDown"], ["label", "Disable source table versions", "formControlName", "disableVersioning", 4, "ngIf"], ["label", "Table Alias", "formControlName", "name", "note", "An alias that can be used to describe the table instance (this is generally used to differentiate self-joined tables)."], ["tooltip", "Refresh the columns from the source table.", 3, "click"], ["label", "Source Table", "formControlName", "sourceTableKey", "parentName", "name", "childItems", "dexihTables", "itemKey", "key", "itemName", "logicalName", "note", "Select the source table", 3, "errors", "items"], [3, "key"], ["label", "Source Datalink", "formControlName", "sourceDatalinkKey", "itemKey", "key", "itemName", "name", "note", "Select the source datalink", 3, "errors", "items"], [1, "row"], [1, "col-4"], ["label", "Start At", "type", "number", "formControlName", "rowsStartAt", "placeholder", "Enter start row number", "iconClass", "fa fa-list"], ["label", "End At", "type", "number", "formControlName", "rowsEndAt", "placeholder", "Enter end row number", "iconClass", "fa fa-list"], ["label", "Increment By", "type", "number", "formControlName", "rowsIncrement", "placeholder", "Enter increment value", "iconClass", "fa fa-list"], ["label", "Disable source table versions", "formControlName", "disableVersioning"]], template: function DatalinkTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DatalinkTableComponent_form_0_Template, 12, 7, "form", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.datalinkTableForm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], ngx_d_components__WEBPACK_IMPORTED_MODULE_8__["DFormSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], ngx_d_components__WEBPACK_IMPORTED_MODULE_8__["DFormCheckboxComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_8__["DFormInputComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_8__["DButtonRefreshComponent"], _buttons_table_edit_button_table_edit_button_component__WEBPACK_IMPORTED_MODULE_9__["TableEditButtonComponent"], _buttons_datalink_edit_button_datalink_edit_button_component__WEBPACK_IMPORTED_MODULE_10__["DatalinkEditButtonComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatalinkTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'datalink-table',
                templateUrl: './datalink-table.component.html'
            }]
    }], function () { return [{ type: _hub_service__WEBPACK_IMPORTED_MODULE_2__["HubService"] }, { type: _datalink_edit_service__WEBPACK_IMPORTED_MODULE_5__["DatalinkEditService"] }]; }, { datalinkTableForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/+hub/datalink/datalink-edit/input-columns/index.ts":
/*!********************************************************************!*\
  !*** ./src/app/+hub/datalink/datalink-edit/input-columns/index.ts ***!
  \********************************************************************/
/*! exports provided: InputColumnsComponent, InputColumnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _input_columns_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input-columns.component */ "./src/app/+hub/datalink/datalink-edit/input-columns/input-columns.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputColumnsComponent", function() { return _input_columns_component__WEBPACK_IMPORTED_MODULE_0__["InputColumnsComponent"]; });

/* harmony import */ var _input_column_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./input-column.component */ "./src/app/+hub/datalink/datalink-edit/input-columns/input-column.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputColumnComponent", function() { return _input_column_component__WEBPACK_IMPORTED_MODULE_1__["InputColumnComponent"]; });





/***/ }),

/***/ "./src/app/+hub/datalink/datalink-edit/input-columns/input-column.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/+hub/datalink/datalink-edit/input-columns/input-column.component.ts ***!
  \*************************************************************************************/
/*! exports provided: InputColumnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputColumnComponent", function() { return InputColumnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _hub_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hub.service */ "./src/app/+hub/hub.service.ts");
/* harmony import */ var _datalink_edit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../datalink-edit.service */ "./src/app/+hub/datalink/datalink-edit/datalink-edit.service.ts");
/* harmony import */ var _hub_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hub.models */ "./src/app/+hub/hub.models.ts");
/* harmony import */ var _hub_lineage_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hub.lineage.models */ "./src/app/+hub/hub.lineage.models.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_shared_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/shared.models */ "./src/app/shared/shared.models.ts");
/* harmony import */ var _shared_utils_dragzone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/utils/dragzone */ "./src/app/shared/utils/dragzone.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");













function InputColumnComponent_div_6_input_column_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input-column", 8);
} if (rf & 2) {
    const childColumn_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("column", childColumn_r2)("datalinkTransformForm", ctx_r1.datalinkTransformForm);
} }
function InputColumnComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InputColumnComponent_div_6_input_column_1_Template, 1, 2, "input-column", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.childColumns);
} }
class InputColumnComponent {
    constructor(hubService, editDatalinkService) {
        this.hubService = hubService;
        this.editDatalinkService = editDatalinkService;
        this.column = null;
        this.eMappingStatus = _hub_models__WEBPACK_IMPORTED_MODULE_3__["eMappingStatus"];
        this.eTypeCode = _shared_shared_models__WEBPACK_IMPORTED_MODULE_7__["eTypeCode"];
    }
    ngOnInit() {
        try {
            this._subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])(this.hubService.getHubCacheObservable(), this.editDatalinkService.hubFormsService.getCurrentFormObservable()).subscribe(result => {
                this.hubCache = result[0];
                this.datalinkForm = result[1];
                let datalinkTransform = this.datalinkTransformForm.value;
                let columnUsage = new _hub_lineage_models__WEBPACK_IMPORTED_MODULE_4__["ColumnUsageNode"](_hub_lineage_models__WEBPACK_IMPORTED_MODULE_4__["eDatalinkObjectType"].Transform, _hub_lineage_models__WEBPACK_IMPORTED_MODULE_4__["eObjectUse"].Target, this.datalinkForm.value, this.column, null, datalinkTransform, null, _hub_models__WEBPACK_IMPORTED_MODULE_3__["eMappingStatus"].NotMapped, this.hubCache);
                let mappingStatusImpact = columnUsage.createDatalinkImpact(false);
                this.mappingStatusInfoImpact = _hub_models__WEBPACK_IMPORTED_MODULE_3__["impactMappingStatuses"].find(c => c.key === mappingStatusImpact);
                let mappingStatusLineage = columnUsage.createDatalinkLineage(true);
                this.mappingStatusInfoLineage = _hub_models__WEBPACK_IMPORTED_MODULE_3__["lineageMappingStatuses"].find(c => c.key === mappingStatusLineage);
                let io = new _hub_lineage_models__WEBPACK_IMPORTED_MODULE_4__["InputOutputColumns"]();
                if (io.findColumn(this.column, datalinkTransform.nodeDatalinkColumn ? datalinkTransform.nodeDatalinkColumn.key : null)) {
                    this.childColumns = this.column.childColumns;
                }
            });
        }
        catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Input Column');
        }
    }
    ngOnDestroy() {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
    }
}
InputColumnComponent.ɵfac = function InputColumnComponent_Factory(t) { return new (t || InputColumnComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hub_service__WEBPACK_IMPORTED_MODULE_1__["HubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_datalink_edit_service__WEBPACK_IMPORTED_MODULE_2__["DatalinkEditService"])); };
InputColumnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputColumnComponent, selectors: [["input-column"]], inputs: { column: "column", datalinkTransformForm: "datalinkTransformForm" }, decls: 7, vars: 8, consts: [["dragZone", "", "zone", "input-column", "zone", "input-column", 1, "list-group-item", "p-0", "rounded-0", 3, "data"], [1, "d-flex", "flex-row"], [1, "input-group-text", "rounded-0", "border-0", "border-r1", 3, "ngClass", "title"], [1, "flex-fill", "input-group-text", "ellipsis-overflow", "rounded-0", "border-0", 2, "overflow", "hidden", "text-overflow", "ellipsis", 3, "title"], [1, "input-group-text", "rounded-0", "border-0", "border-l1", 3, "ngClass", "title"], ["class", "p-2", 4, "ngIf"], [1, "p-2"], [3, "column", "datalinkTransformForm", 4, "ngFor", "ngForOf"], [3, "column", "datalinkTransformForm"]], template: function InputColumnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, InputColumnComponent_div_6_Template, 2, 1, "div", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.column);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mappingStatusInfoLineage.statusClass)("title", ctx.mappingStatusInfoLineage.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.column.logicalName + " " + ctx.eTypeCode[ctx.column.dataType]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.column.logicalName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mappingStatusInfoImpact.statusClass)("title", ctx.mappingStatusInfoImpact.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.childColumns == null ? null : ctx.childColumns.length) > 0);
    } }, directives: [_shared_utils_dragzone__WEBPACK_IMPORTED_MODULE_8__["DragZoneDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], InputColumnComponent], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputColumnComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'input-column',
                templateUrl: './input-column.component.html'
            }]
    }], function () { return [{ type: _hub_service__WEBPACK_IMPORTED_MODULE_1__["HubService"] }, { type: _datalink_edit_service__WEBPACK_IMPORTED_MODULE_2__["DatalinkEditService"] }]; }, { column: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], datalinkTransformForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/+hub/datalink/datalink-edit/input-columns/input-columns.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/+hub/datalink/datalink-edit/input-columns/input-columns.component.ts ***!
  \**************************************************************************************/
/*! exports provided: InputColumnsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputColumnsComponent", function() { return InputColumnsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _datalink_edit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../datalink-edit.service */ "./src/app/+hub/datalink/datalink-edit/datalink-edit.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var ngx_d_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-d-components */ "./node_modules/ngx-d-components/__ivy_ngcc__/fesm2015/ngx-d-components.js");
/* harmony import */ var _input_column_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./input-column.component */ "./src/app/+hub/datalink/datalink-edit/input-columns/input-column.component.ts");
/* harmony import */ var _shared_utils_isValid_filter_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/utils/isValid-filter.pipe */ "./src/app/shared/utils/isValid-filter.pipe.ts");
/* harmony import */ var _shared_utils_sort_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/utils/sort.pipe */ "./src/app/shared/utils/sort.pipe.ts");











function InputColumnsComponent_div_0_span_2_d_widget_section_1_input_column_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input-column", 9);
} if (rf & 2) {
    const column_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datalinkTransformForm", ctx_r7.datalinkTransformForm)("column", column_r8);
} }
function InputColumnsComponent_div_0_span_2_d_widget_section_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-widget-section", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InputColumnsComponent_div_0_span_2_d_widget_section_1_input_column_2_Template, 1, 2, "input-column", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "isValidFilter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "fieldSort");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const table_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", table_r4.name)("padding", false)("showExpandButton", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 6, table_r4.dexihDatalinkColumns, "position")));
} }
function InputColumnsComponent_div_0_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InputColumnsComponent_div_0_span_2_d_widget_section_1_Template, 5, 9, "d-widget-section", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const table_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", table_r4.dexihDatalinkColumns.length > 0);
} }
function InputColumnsComponent_div_0_d_widget_section_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input-column", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r12 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datalinkTransformForm", ctx_r11.datalinkTransformForm)("column", column_r12);
} }
function InputColumnsComponent_div_0_d_widget_section_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-widget-section", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InputColumnsComponent_div_0_d_widget_section_3_div_1_Template, 2, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "isValidFilter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "fieldSort");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const columnGroup_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", columnGroup_r10.group)("padding", false)("showExpandButton", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 6, columnGroup_r10.columns, "position")));
} }
function InputColumnsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InputColumnsComponent_div_0_span_2_Template, 2, 1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, InputColumnsComponent_div_0_d_widget_section_3_Template, 4, 9, "d-widget-section", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.inputTables);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.columnGroups);
} }
class InputColumnsComponent {
    constructor(editDatalinkService) {
        this.editDatalinkService = editDatalinkService;
        this.columns = [];
        this.columnGroups = [];
    }
    ngOnInit() {
    }
    ngOnChanges() {
        if (this._inputColumnsSubscribe) {
            this._inputColumnsSubscribe.unsubscribe();
        }
        this.columnGroups = this.editDatalinkService.getColumnGroups(this.datalinkTransformForm.controls.runTime.value.inputColumns);
        this._inputColumnsSubscribe = this.datalinkTransformForm.controls.runTime.valueChanges.subscribe(() => {
            this.columnGroups = this.editDatalinkService.getColumnGroups(this.datalinkTransformForm.controls.runTime.value.inputColumns);
        });
    }
    ngOnDestroy() {
        if (this._inputColumnsSubscribe) {
            this._inputColumnsSubscribe.unsubscribe();
        }
    }
}
InputColumnsComponent.ɵfac = function InputColumnsComponent_Factory(t) { return new (t || InputColumnsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_datalink_edit_service__WEBPACK_IMPORTED_MODULE_2__["DatalinkEditService"])); };
InputColumnsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputColumnsComponent, selectors: [["input-columns"]], inputs: { datalinkTransformForm: "datalinkTransformForm" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [["cdkDropList", "", 4, "ngIf"], ["cdkDropList", ""], ["cdkDropList", "cdkDropList"], [4, "ngFor", "ngForOf"], [3, "title", "padding", "showExpandButton", 4, "ngFor", "ngForOf"], [3, "title", "padding", "showExpandButton", 4, "ngIf"], [3, "title", "padding", "showExpandButton"], [1, "list-group"], [3, "datalinkTransformForm", "column", 4, "ngFor", "ngForOf"], [3, "datalinkTransformForm", "column"]], template: function InputColumnsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, InputColumnsComponent_div_0_Template, 4, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.datalinkTransformForm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], ngx_d_components__WEBPACK_IMPORTED_MODULE_5__["ɵa"], _input_column_component__WEBPACK_IMPORTED_MODULE_6__["InputColumnComponent"]], pipes: [_shared_utils_isValid_filter_pipe__WEBPACK_IMPORTED_MODULE_7__["IsValidFilterPipe"], _shared_utils_sort_pipe__WEBPACK_IMPORTED_MODULE_8__["SortPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputColumnsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'input-columns',
                templateUrl: './input-columns.component.html'
            }]
    }], function () { return [{ type: _datalink_edit_service__WEBPACK_IMPORTED_MODULE_2__["DatalinkEditService"] }]; }, { datalinkTransformForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/+hub/datalink/datalink-edit/join-columns/index.ts":
/*!*******************************************************************!*\
  !*** ./src/app/+hub/datalink/datalink-edit/join-columns/index.ts ***!
  \*******************************************************************/
/*! exports provided: JoinColumnComponent, JoinColumnsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _join_column_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./join-column.component */ "./src/app/+hub/datalink/datalink-edit/join-columns/join-column.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JoinColumnComponent", function() { return _join_column_component__WEBPACK_IMPORTED_MODULE_0__["JoinColumnComponent"]; });

/* harmony import */ var _join_columns_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./join-columns.component */ "./src/app/+hub/datalink/datalink-edit/join-columns/join-columns.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "JoinColumnsComponent", function() { return _join_columns_component__WEBPACK_IMPORTED_MODULE_1__["JoinColumnsComponent"]; });





/***/ }),

/***/ "./src/app/+hub/datalink/datalink-edit/join-columns/join-column.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/+hub/datalink/datalink-edit/join-columns/join-column.component.ts ***!
  \***********************************************************************************/
/*! exports provided: JoinColumnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinColumnComponent", function() { return JoinColumnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _hub_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hub.models */ "./src/app/+hub/hub.models.ts");
/* harmony import */ var _hub_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hub.service */ "./src/app/+hub/hub.service.ts");
/* harmony import */ var _hub_lineage_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hub.lineage.models */ "./src/app/+hub/hub.lineage.models.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_shared_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/shared.models */ "./src/app/shared/shared.models.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function JoinColumnComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r0.column.logicalName + " " + ctx_r0.eTypeCode[ctx_r0.column.dataType]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.column.logicalName, " ");
} }
function JoinColumnComponent_a_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r1.column.logicalName + " " + ctx_r1.eTypeCode[ctx_r1.column.dataType]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.column.logicalName, " ");
} }
class JoinColumnComponent {
    constructor(hubService) {
        this.hubService = hubService;
        this.column = null;
        this.inputTables = null;
        this.inputJoinDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.eMappingStatus = _hub_models__WEBPACK_IMPORTED_MODULE_1__["eMappingStatus"];
        this.eTypeCode = _shared_shared_models__WEBPACK_IMPORTED_MODULE_5__["eTypeCode"];
    }
    ngOnInit() {
        this._hubCacheSubscription = this.hubService.getHubCacheObservable().subscribe(hubCache => {
            if (hubCache.isLoaded()) {
                this.hubCache = hubCache;
                let columnUsage = new _hub_lineage_models__WEBPACK_IMPORTED_MODULE_3__["ColumnUsageNode"](_hub_lineage_models__WEBPACK_IMPORTED_MODULE_3__["eDatalinkObjectType"].Transform, _hub_lineage_models__WEBPACK_IMPORTED_MODULE_3__["eObjectUse"].Target, this.datalinkForm.value, this.column, null, this.datalinkTransformForm.value, null, _hub_models__WEBPACK_IMPORTED_MODULE_1__["eMappingStatus"].NotMapped, this.hubCache);
                let lineageMappingStatus = columnUsage.createDatalinkLineage(false);
                this.mappingStatusInfoLineage = _hub_models__WEBPACK_IMPORTED_MODULE_1__["lineageMappingStatuses"].find(c => c.key === lineageMappingStatus);
                let impactMappingStatus = columnUsage.createDatalinkImpact(false);
                this.mappingStatusInfoImpact = _hub_models__WEBPACK_IMPORTED_MODULE_1__["impactMappingStatuses"].find(c => c.key === impactMappingStatus);
            }
        });
    }
    ngOnDestroy() {
        if (this._hubCacheSubscription) {
            this._hubCacheSubscription.unsubscribe();
        }
    }
}
JoinColumnComponent.ɵfac = function JoinColumnComponent_Factory(t) { return new (t || JoinColumnComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hub_service__WEBPACK_IMPORTED_MODULE_2__["HubService"])); };
JoinColumnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JoinColumnComponent, selectors: [["join-column"]], inputs: { column: "column", datalinkTransformForm: "datalinkTransformForm", datalinkForm: "datalinkForm", inputTables: "inputTables" }, outputs: { inputJoinDrop: "inputJoinDrop" }, decls: 6, vars: 6, consts: [[1, "list-group-item", "p-0", "rounded-0"], [1, "d-flex", "flex-row"], [1, "input-group-text", "rounded-0", "border-0", "border-r1", 3, "ngClass", "title"], ["class", "flex-fill input-group-text ellipsis-overflow rounded-0 border-0", "style", "overflow:hidden; text-overflow :ellipsis;", 3, "title", 4, "ngIf"], [1, "input-group-text", "rounded-0", "border-0", "border-l1", 3, "ngClass", "title"], [1, "flex-fill", "input-group-text", "ellipsis-overflow", "rounded-0", "border-0", 2, "overflow", "hidden", "text-overflow", "ellipsis", 3, "title"]], template: function JoinColumnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, JoinColumnComponent_a_3_Template, 2, 2, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, JoinColumnComponent_a_4_Template, 2, 2, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mappingStatusInfoLineage.statusClass)("title", ctx.mappingStatusInfoLineage.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mappingStatusInfoLineage.key != ctx.eMappingStatus.Joined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mappingStatusInfoLineage.key == ctx.eMappingStatus.Joined);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.mappingStatusInfoImpact.statusClass)("title", ctx.mappingStatusInfoImpact.name);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JoinColumnComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'join-column',
                templateUrl: './join-column.component.html'
            }]
    }], function () { return [{ type: _hub_service__WEBPACK_IMPORTED_MODULE_2__["HubService"] }]; }, { column: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], datalinkTransformForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], datalinkForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], inputTables: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], inputJoinDrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/+hub/datalink/datalink-edit/join-columns/join-columns.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/+hub/datalink/datalink-edit/join-columns/join-columns.component.ts ***!
  \************************************************************************************/
/*! exports provided: JoinColumnsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinColumnsComponent", function() { return JoinColumnsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _hub_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hub.service */ "./src/app/+hub/hub.service.ts");
/* harmony import */ var _datalink_edit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../datalink-edit.service */ "./src/app/+hub/datalink/datalink-edit/datalink-edit.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_shared_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/shared.models */ "./src/app/shared/shared.models.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_d_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-d-components */ "./node_modules/ngx-d-components/__ivy_ngcc__/fesm2015/ngx-d-components.js");
/* harmony import */ var _join_column_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./join-column.component */ "./src/app/+hub/datalink/datalink-edit/join-columns/join-column.component.ts");
/* harmony import */ var _shared_utils_dropzone__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/utils/dropzone */ "./src/app/shared/utils/dropzone.ts");
/* harmony import */ var _shared_utils_isValid_filter_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/utils/isValid-filter.pipe */ "./src/app/shared/utils/isValid-filter.pipe.ts");
/* harmony import */ var _shared_utils_sort_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/utils/sort.pipe */ "./src/app/shared/utils/sort.pipe.ts");















function JoinColumnsComponent_div_0_join_column_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "join-column", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dropData", function JoinColumnsComponent_div_0_join_column_2_Template_join_column_dropData_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const column_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r3.newInputJoinDrop($event, column_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datalinkForm", ctx_r1.datalinkForm)("datalinkTransformForm", ctx_r1.datalinkTransformForm)("column", column_r2);
} }
function JoinColumnsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "d-widget-section", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, JoinColumnsComponent_div_0_join_column_2_Template, 1, 3, "join-column", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "isValidFilter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "fieldSort");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", (ctx_r0.joinTable == null ? null : ctx_r0.joinTable.name) + "(" + ctx_r0.eTransformType[ctx_r0.datalinkTransformForm.value.transformType] + ")")("padding", false)("showExpandButton", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 6, ctx_r0.joinColumns, "position")));
} }
class JoinColumnsComponent {
    constructor(hubService, editDatalinkService) {
        this.hubService = hubService;
        this.editDatalinkService = editDatalinkService;
        this.inputJoinDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.eTransformType = _shared_shared_models__WEBPACK_IMPORTED_MODULE_5__["eTransformType"];
    }
    ngOnInit() {
        try {
            this._subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(this.hubService.getHubCacheObservable(), this.editDatalinkService.hubFormsService.getCurrentFormObservable()).subscribe(result => {
                this.datalinkForm = result[1];
                if (this.datalinkForm) {
                    this.updateTableData();
                }
            });
        }
        catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Edit Custom Function');
        }
    }
    ngOnChanges() {
        this.updateTableData();
        if (this._changesSubscription) {
            this._changesSubscription.unsubscribe();
        }
        this._changesSubscription = this.datalinkTransformForm.controls.joinDatalinkTable.valueChanges.subscribe(() => {
            this.updateTableData();
        });
    }
    ngOnDestroy() {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
        if (this._changesSubscription) {
            this._changesSubscription.unsubscribe();
        }
    }
    updateTableData() {
        if (this.datalinkTransformForm && this.datalinkTransformForm.controls.joinDatalinkTable.value) {
            this.joinTable = this.datalinkTransformForm.controls.joinDatalinkTable.value;
            if (this.joinTable) {
                this.joinColumns = new Array();
                this.joinTable.dexihDatalinkColumns.forEach(column => {
                    this.joinColumns.push(column);
                });
            }
            else {
                this.joinColumns = null;
            }
        }
        else {
            this.joinColumns = null;
        }
    }
    newInputJoinDrop(inputColumn, joinColumn) {
        this.inputJoinDrop.emit({ inputColumn, joinColumn });
    }
}
JoinColumnsComponent.ɵfac = function JoinColumnsComponent_Factory(t) { return new (t || JoinColumnsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hub_service__WEBPACK_IMPORTED_MODULE_1__["HubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_datalink_edit_service__WEBPACK_IMPORTED_MODULE_2__["DatalinkEditService"])); };
JoinColumnsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JoinColumnsComponent, selectors: [["join-columns"]], inputs: { datalinkTransformForm: "datalinkTransformForm" }, outputs: { inputJoinDrop: "inputJoinDrop" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "title", "padding", "showExpandButton"], ["dropZone", "", "zone", "input-column", "dropAllowedClass", "drop-zone-green", 3, "datalinkForm", "datalinkTransformForm", "column", "dropData", 4, "ngFor", "ngForOf"], ["dropZone", "", "zone", "input-column", "dropAllowedClass", "drop-zone-green", 3, "datalinkForm", "datalinkTransformForm", "column", "dropData"]], template: function JoinColumnsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, JoinColumnsComponent_div_0_Template, 5, 9, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.joinColumns);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], ngx_d_components__WEBPACK_IMPORTED_MODULE_7__["ɵa"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _join_column_component__WEBPACK_IMPORTED_MODULE_8__["JoinColumnComponent"], _shared_utils_dropzone__WEBPACK_IMPORTED_MODULE_9__["DropZoneDirective"]], pipes: [_shared_utils_isValid_filter_pipe__WEBPACK_IMPORTED_MODULE_10__["IsValidFilterPipe"], _shared_utils_sort_pipe__WEBPACK_IMPORTED_MODULE_11__["SortPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](JoinColumnsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'join-columns',
                templateUrl: './join-columns.component.html'
            }]
    }], function () { return [{ type: _hub_service__WEBPACK_IMPORTED_MODULE_1__["HubService"] }, { type: _datalink_edit_service__WEBPACK_IMPORTED_MODULE_2__["DatalinkEditService"] }]; }, { datalinkTransformForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], inputJoinDrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/+hub/datalink/datalink-edit/mapping-edit/index.ts":
/*!*******************************************************************!*\
  !*** ./src/app/+hub/datalink/datalink-edit/mapping-edit/index.ts ***!
  \*******************************************************************/
/*! exports provided: MappingEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mapping_edit_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapping-edit.component */ "./src/app/+hub/datalink/datalink-edit/mapping-edit/mapping-edit.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MappingEditComponent", function() { return _mapping_edit_component__WEBPACK_IMPORTED_MODULE_0__["MappingEditComponent"]; });




/***/ }),

/***/ "./src/app/+hub/datalink/datalink-edit/mapping-edit/mapping-edit.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/+hub/datalink/datalink-edit/mapping-edit/mapping-edit.component.ts ***!
  \************************************************************************************/
/*! exports provided: MappingEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MappingEditComponent", function() { return MappingEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _hub_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hub.models */ "./src/app/+hub/hub.models.ts");
/* harmony import */ var _hub_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hub.service */ "./src/app/+hub/hub.service.ts");
/* harmony import */ var _datalink_edit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../datalink-edit.service */ "./src/app/+hub/datalink/datalink-edit/datalink-edit.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../+auth/auth.service */ "./src/app/+auth/auth.service.ts");
/* harmony import */ var _hub_query_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../hub.query.models */ "./src/app/+hub/hub.query.models.ts");
/* harmony import */ var _hub_lineage_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../hub.lineage.models */ "./src/app/+hub/hub.lineage.models.ts");
/* harmony import */ var _shared_shared_models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/shared.models */ "./src/app/shared/shared.models.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_d_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-d-components */ "./node_modules/ngx-d-components/__ivy_ngcc__/fesm2015/ngx-d-components.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");


















function MappingEditComponent_div_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button-apply", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MappingEditComponent_div_0_ng_template_2_Template_d_button_apply_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return !ctx_r10.newDatalinkTransformItemForm.pristine && ctx_r10.applyExit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "d-button-cancel", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MappingEditComponent_div_0_ng_template_2_Template_d_button_cancel_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r2.newDatalinkTransformItemForm.pristine);
} }
function MappingEditComponent_div_0_section_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "form-select", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r3.eAggregateItems);
} }
function MappingEditComponent_div_0_section_8_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form-select", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("textValueChange", function MappingEditComponent_div_0_section_8_Template_form_select_textValueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.sourceValue = $event; })("textValueChange", function MappingEditComponent_div_0_section_8_Template_form_select_textValueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.updateSourceValue($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r4.inputColumns)("textValue", ctx_r4.sourceValue)("enableKeySelect", false)("enableTextEntry", true)("enableTextEntryMatch", false)("errors", ctx_r4.sourceErrors);
} }
function MappingEditComponent_div_0_section_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "form-select", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r5.compare);
} }
function MappingEditComponent_div_0_section_10_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form-select", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("textValueChange", function MappingEditComponent_div_0_section_10_Template_form_select_textValueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.filterValue = $event; })("textValueChange", function MappingEditComponent_div_0_section_10_Template_form_select_textValueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r18.updateFilterValue($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r6.inputColumns)("enableTextEntry", true)("textValue", ctx_r6.filterValue)("enableTextEntryMatch", false)("enableKeySelect", false)("errors", ctx_r6.filterValueErrors)("textEntryItems", ctx_r6.variables)("setTextEntryToValue", false);
} }
function MappingEditComponent_div_0_section_11_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form-select", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("textValueChange", function MappingEditComponent_div_0_section_11_Template_form_select_textValueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r19.updateNewColumn($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r7.outputTables)("enableKeySelect", false)("enableTextEntry", true)("setTextEntryToValue", false)("errors", ctx_r7.targetErrors);
} }
function MappingEditComponent_div_0_section_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "form-select", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r8.sortDirections);
} }
function MappingEditComponent_div_0_section_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "form-select", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r9.joinColumns)("enableKeySelect", false)("errors", ctx_r9.joinErrors);
} }
function MappingEditComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "d-widget-section", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MappingEditComponent_div_0_ng_template_2_Template, 2, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MappingEditComponent_div_0_section_7_Template, 2, 1, "section", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MappingEditComponent_div_0_section_8_Template, 2, 6, "section", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MappingEditComponent_div_0_section_9_Template, 2, 1, "section", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, MappingEditComponent_div_0_section_10_Template, 2, 8, "section", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, MappingEditComponent_div_0_section_11_Template, 2, 5, "section", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, MappingEditComponent_div_0_section_12_Template, 2, 1, "section", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, MappingEditComponent_div_0_section_13_Template, 2, 3, "section", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r0.pageTitle)("showExpandButton", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.newDatalinkTransformItemForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.transformItemType == ctx_r0.eTransformItemType.AggregatePair);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showInput);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.transformItemType == ctx_r0.eTransformItemType.FilterPair || ctx_r0.transformItemType == ctx_r0.eTransformItemType.JoinPair);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.transformItemType == ctx_r0.eTransformItemType.FilterPair && ctx_r0.newDatalinkTransformItemForm.controls.filterCompare.value != ctx_r0.eCompare.IsNotNull && ctx_r0.newDatalinkTransformItemForm.controls.filterCompare.value != ctx_r0.eCompare.IsNull);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.showOutput);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.transformItemType == ctx_r0.eTransformItemType.Sort);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.transformItemType == ctx_r0.eTransformItemType.JoinPair);
} }
class MappingEditComponent {
    constructor(hubService, authService, editDatalinkService, route) {
        this.hubService = hubService;
        this.authService = authService;
        this.editDatalinkService = editDatalinkService;
        this.route = route;
        this.eTransformItemType = _shared_shared_models__WEBPACK_IMPORTED_MODULE_9__["eTransformItemType"];
        this.inputColumns = [];
        this.showInput = true;
        this.showOutput = true;
        this.eAggregate = _shared_shared_models__WEBPACK_IMPORTED_MODULE_9__["eAggregate"];
        this.eAggregateItems = _shared_shared_models__WEBPACK_IMPORTED_MODULE_9__["eAggregateItems"].filter(c => c.key > 0);
        this.compare = _hub_query_models__WEBPACK_IMPORTED_MODULE_7__["compare"];
        this.eCompare = _shared_shared_models__WEBPACK_IMPORTED_MODULE_9__["eCompare"];
        this.sortDirections = _hub_models__WEBPACK_IMPORTED_MODULE_2__["sortDirections"];
    }
    ngOnInit() {
        try {
            this._subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])(this.route.data, this.route.params, this.hubService.getHubCacheObservable(), this.editDatalinkService.hubFormsService.getCurrentFormObservable(), this.hubService.getRemoteLibrariesObservable()).subscribe(result => {
                this.pageTitle = result[0]['pageTitle'];
                let params = result[1];
                this.hubCache = result[2];
                let datalinkForm = result[3];
                if (!this.hubCache.isLoaded()) {
                    return;
                }
                this.datalinkForm = datalinkForm;
                this.variables = this.editDatalinkService.getVariables();
                this.datalinkTransformItemKey = +params['datalinkTransformItemKey'];
                this.datalinkTransformKey = +params['datalinkTransformKey'];
                this.transformItemType = +params['type'];
                if (this.datalinkForm) {
                    this.datalinkTransformForm = this.editDatalinkService.getDatalinkTransform(this.datalinkTransformKey);
                    switch (this.transformItemType) {
                        case _shared_shared_models__WEBPACK_IMPORTED_MODULE_9__["eTransformItemType"].JoinPair:
                            this.showInput = true;
                            this.showOutput = false;
                            this.pageTitle = 'Edit Join';
                            break;
                        case _shared_shared_models__WEBPACK_IMPORTED_MODULE_9__["eTransformItemType"].Column:
                            this.showInput = true;
                            this.showOutput = false;
                            this.pageTitle = 'Edit Group';
                            break;
                        case _shared_shared_models__WEBPACK_IMPORTED_MODULE_9__["eTransformItemType"].JoinNode:
                            this.showInput = false;
                            this.showOutput = true;
                            this.pageTitle = 'Edit Join Node';
                            break;
                        case _shared_shared_models__WEBPACK_IMPORTED_MODULE_9__["eTransformItemType"].GroupNode:
                            this.showInput = false;
                            this.showOutput = true;
                            this.pageTitle = 'Edit Group Node';
                            break;
                        case _shared_shared_models__WEBPACK_IMPORTED_MODULE_9__["eTransformItemType"].Sort:
                            this.showInput = true;
                            this.showOutput = false;
                            this.pageTitle = 'Edit Sort';
                            break;
                        case _shared_shared_models__WEBPACK_IMPORTED_MODULE_9__["eTransformItemType"].FilterPair:
                            this.showInput = true;
                            this.showOutput = false;
                            this.pageTitle = 'Edit Condition';
                            break;
                        case _shared_shared_models__WEBPACK_IMPORTED_MODULE_9__["eTransformItemType"].AggregatePair:
                            this.pageTitle = 'Edit Aggregate';
                            this.showInput = true;
                            this.showOutput = true;
                            break;
                        default:
                            this.pageTitle = 'Edit Mapping';
                            this.showInput = true;
                            this.showOutput = true;
                    }
                    let nodeDatalinkColumn = this.datalinkTransformForm.controls.nodeDatalinkColumn.value;
                    let nodeDatalinkColumnKey = nodeDatalinkColumn ? nodeDatalinkColumn.key : null;
                    let io = new _hub_lineage_models__WEBPACK_IMPORTED_MODULE_8__["InputOutputColumns"]();
                    if (nodeDatalinkColumnKey) {
                        let inputColumns = this.datalinkTransformForm.controls.runTime.value.inputColumns;
                        let nodeColumns = io.getAvailableColumns(inputColumns, nodeDatalinkColumnKey, 0);
                        this.inputColumns = this.editDatalinkService.getColumnGroups(nodeColumns);
                        this.outputColumns = this.datalinkTransformForm.controls.runTime.value.transformColumns;
                    }
                    else {
                        this.inputColumns = this.editDatalinkService.getColumnGroups(this.datalinkTransformForm.controls.runTime.value.inputColumns);
                        this.outputColumns = this.datalinkTransformForm.controls.runTime.value.transformColumns;
                    }
                    if (this.datalinkTransformForm.value.joinDatalinkTable) {
                        this.joinColumns = this.datalinkTransformForm.value.joinDatalinkTable.dexihDatalinkColumns;
                    }
                    this.datalinkTargets = this.datalinkForm.controls.dexihDatalinkTargets.value;
                    let table = new _shared_shared_models__WEBPACK_IMPORTED_MODULE_9__["DexihTable"]();
                    table.name = "Output Columns";
                    table.dexihTableColumns = this.datalinkTransformForm.controls.runTime.value.transformColumns;
                    this.outputTables = [table];
                    if (this.datalinkTargets) {
                        this.datalinkTargets.forEach(target => {
                            this.outputTables.push(target['table']);
                        });
                    }
                    if (this.datalinkTransformItemKey) {
                        this.datalinkTransformItemForm = this.editDatalinkService
                            .getDatalinkTransformItem(this.datalinkTransformForm, this.datalinkTransformItemKey);
                        this.filterValue = this.datalinkTransformItemForm.controls.filterValue.value;
                        this.sourceValue = this.datalinkTransformItemForm.controls.sourceValue.value;
                        // create a copy of the form item to allow for cancel.
                        this.newDatalinkTransformItemForm = this.editDatalinkService.hubFormsService
                            .datalinkDatalinkTransformItemFormGroup(this.datalinkTransformForm, this.datalinkTransformItemForm.value);
                    }
                    else {
                        let newItem = new _shared_shared_models__WEBPACK_IMPORTED_MODULE_9__["DexihDatalinkTransformItem"]();
                        newItem.datalinkTransformKey = this.datalinkTransformKey;
                        newItem.transformItemType = this.transformItemType;
                        this.newDatalinkTransformItemForm = this.editDatalinkService.hubFormsService
                            .datalinkDatalinkTransformItemFormGroup(this.datalinkTransformForm, newItem);
                    }
                    this.getErrors();
                    if (this._formChangesObserve) {
                        this._formChangesObserve.unsubscribe();
                    }
                    this._formChangesObserve = this.newDatalinkTransformItemForm.statusChanges.subscribe(() => {
                        this.getErrors();
                    });
                }
                if (this._saveSubscription) {
                    this._saveSubscription.unsubscribe();
                }
                this._saveSubscription = this.editDatalinkService.savingDatalink.subscribe(value => {
                    if (value) {
                        this.apply();
                    }
                });
            });
        }
        catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Edit Mapping Function');
        }
    }
    ngOnDestroy() {
        if (this._formChangesObserve) {
            this._formChangesObserve.unsubscribe();
        }
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
        if (this._saveSubscription) {
            this._saveSubscription.unsubscribe();
        }
    }
    cancel() {
        this.authService.navigateUp();
    }
    getErrors() {
        this.targetErrors = this.editDatalinkService.hubFormsService.getErrorMessage(this.newDatalinkTransformItemForm.controls.targetDatalinkColumn);
        this.sourceErrors = this.editDatalinkService.hubFormsService.getErrorMessage(this.newDatalinkTransformItemForm.controls.sourceDatalinkColumn);
        this.joinErrors = this.editDatalinkService.hubFormsService.getErrorMessage(this.newDatalinkTransformItemForm.controls.sourceDatalinkColumn);
    }
    apply() {
        // this.datalinkTransformItemForm.setValue(this.newDatalinkTransformItemForm.value);
        this.editDatalinkService.insertDatalinkTransformItem(this.datalinkTransformForm, this.newDatalinkTransformItemForm);
    }
    updateNewColumn(value) {
        let current = this.newDatalinkTransformItemForm.controls.targetDatalinkColumn.value;
        if (value && (!current || current.name !== value)) {
            let key;
            if (this.newColumn) {
                key = this.newColumn.key;
            }
            else {
                key = this.hubService.getHubCache().getNextSequence();
            }
            let sourceColumn = this.newDatalinkTransformItemForm.controls.sourceDatalinkColumn.value;
            if (sourceColumn) {
                let io = new _hub_lineage_models__WEBPACK_IMPORTED_MODULE_8__["InputOutputColumns"]();
                this.newColumn = io.copyDatalinkColumn(sourceColumn, 1000 - key, 'mapping');
            }
            else {
                this.newColumn = new _shared_shared_models__WEBPACK_IMPORTED_MODULE_9__["DexihDatalinkColumn"]();
                this.newColumn.position = 1000 - key;
                if (this.transformItemType === _shared_shared_models__WEBPACK_IMPORTED_MODULE_9__["eTransformItemType"].JoinNode) {
                    this.newColumn.dataType = _shared_shared_models__WEBPACK_IMPORTED_MODULE_9__["eTypeCode"].Node;
                    this.newColumn.childColumns = this.joinColumns;
                }
                else {
                    this.newColumn.dataType = _shared_shared_models__WEBPACK_IMPORTED_MODULE_9__["eTypeCode"].String;
                }
            }
            this.newColumn.name = value;
            this.newColumn.logicalName = value;
            this.newColumn.columnGroup = 'mapping';
            this.newColumn.key = key;
            this.newDatalinkTransformItemForm.controls.targetDatalinkColumn.setValue(this.newColumn);
        }
    }
    updateFilterValue(value) {
        this.newDatalinkTransformItemForm.controls.filterValue.setValue(value);
    }
    updateSourceValue(value) {
        this.newDatalinkTransformItemForm.controls.sourceValue.setValue(value);
    }
    applyExit() {
        this.apply();
        this.authService.navigateUp();
    }
}
MappingEditComponent.ɵfac = function MappingEditComponent_Factory(t) { return new (t || MappingEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hub_service__WEBPACK_IMPORTED_MODULE_3__["HubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_datalink_edit_service__WEBPACK_IMPORTED_MODULE_4__["DatalinkEditService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
MappingEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MappingEditComponent, selectors: [["mapping-edit"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "title", "showExpandButton"], ["header", ""], [3, "formGroup"], [1, "form-row"], ["class", "form-group col-md-4", 4, "ngIf"], [1, "mr-1", 3, "disabled", "click"], [3, "click"], [1, "form-group", "col-md-4"], ["label", "Aggregate", "formControlName", "aggregate", "itemKey", "key", "itemName", "name", 3, "items"], ["label", "Input Column", "formControlName", "sourceDatalinkColumn", "parentName", "group", "childItems", "columns", "itemName", "logicalName", "itemKey", "key", 3, "items", "textValue", "enableKeySelect", "enableTextEntry", "enableTextEntryMatch", "errors", "textValueChange"], ["label", "Compare", "formControlName", "filterCompare", "itemKey", "key", "itemName", "name", 3, "items"], ["label", "Compare Column/Value", "formControlName", "filterDatalinkColumn", "parentName", "group", "childItems", "columns", "itemKey", "key", "itemName", "logicalName", "textEntryItemsTitle", "Variables", "note", "Note: For static date values use format YYYY-MM-DD (e.g. 2018-01-30)", 3, "items", "enableTextEntry", "textValue", "enableTextEntryMatch", "enableKeySelect", "errors", "textEntryItems", "setTextEntryToValue", "textValueChange"], ["label", "Output Column", "formControlName", "targetDatalinkColumn", "parentName", "name", "childItems", "dexihTableColumns", "itemKey", "key", "itemName", "logicalName", "note", "Enter new column, or select existing", "textEntryNote", "Enter new column name, or select existing", 3, "items", "enableKeySelect", "enableTextEntry", "setTextEntryToValue", "errors", "textValueChange"], ["label", "Direction", "formControlName", "sortDirection", "itemKey", "key", "itemName", "name", 3, "items"], ["label", "Join Column", "formControlName", "joinDatalinkColumn", "itemKey", "key", "itemName", "logicalName", "note", "Select a join column", "textEntryNote", "Enter a value to add a new column", 3, "items", "enableKeySelect", "errors"]], template: function MappingEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MappingEditComponent_div_0_Template, 14, 10, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newDatalinkTransformItemForm && ctx.inputColumns && ctx.outputColumns);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], ngx_d_components__WEBPACK_IMPORTED_MODULE_11__["ɵa"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormGroupDirective"], ngx_d_components__WEBPACK_IMPORTED_MODULE_11__["DButtonApplyComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_11__["DButtonCancelComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_11__["DFormSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControlName"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MappingEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mapping-edit',
                templateUrl: './mapping-edit.component.html'
            }]
    }], function () { return [{ type: _hub_service__WEBPACK_IMPORTED_MODULE_3__["HubService"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }, { type: _datalink_edit_service__WEBPACK_IMPORTED_MODULE_4__["DatalinkEditService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/+hub/datalink/datalink-edit/mapping/index.ts":
/*!**************************************************************!*\
  !*** ./src/app/+hub/datalink/datalink-edit/mapping/index.ts ***!
  \**************************************************************/
/*! exports provided: MappingComponent, MappingItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mapping_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapping.component */ "./src/app/+hub/datalink/datalink-edit/mapping/mapping.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MappingComponent", function() { return _mapping_component__WEBPACK_IMPORTED_MODULE_0__["MappingComponent"]; });

/* harmony import */ var _mapping_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mapping-item.component */ "./src/app/+hub/datalink/datalink-edit/mapping/mapping-item.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MappingItemComponent", function() { return _mapping_item_component__WEBPACK_IMPORTED_MODULE_1__["MappingItemComponent"]; });





/***/ }),

/***/ "./src/app/+hub/datalink/datalink-edit/mapping/mapping-item.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/+hub/datalink/datalink-edit/mapping/mapping-item.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ValidValue, ValidParameter, ValidMapping, MappingItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidValue", function() { return ValidValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidParameter", function() { return ValidParameter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidMapping", function() { return ValidMapping; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MappingItemComponent", function() { return MappingItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _hub_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hub.models */ "./src/app/+hub/hub.models.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../.. */ "./src/app/+hub/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _hub_lineage_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hub.lineage.models */ "./src/app/+hub/hub.lineage.models.ts");
/* harmony import */ var _hub_query_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../hub.query.models */ "./src/app/+hub/hub.query.models.ts");
/* harmony import */ var _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/shared.models */ "./src/app/shared/shared.models.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};










function MappingItemComponent_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.error, " ");
} }
function MappingItemComponent_div_1_div_5_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 10);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r5.source.error);
} }
function MappingItemComponent_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MappingItemComponent_div_1_div_5_i_1_Template, 1, 1, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.source.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.source.text);
} }
function MappingItemComponent_div_1_div_6_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 13);
} }
function MappingItemComponent_div_1_div_6_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 10);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r7.target.error);
} }
function MappingItemComponent_div_1_div_6_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.compare);
} }
function MappingItemComponent_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MappingItemComponent_div_1_div_6_i_1_Template, 1, 0, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MappingItemComponent_div_1_div_6_i_2_Template, 1, 1, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MappingItemComponent_div_1_div_6_span_3_Template, 2, 1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.source && !ctx_r4.compare);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.target.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.compare);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.target.text, " ");
} }
function MappingItemComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MappingItemComponent_div_1_div_4_Template, 3, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MappingItemComponent_div_1_div_5_Template, 3, 2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MappingItemComponent_div_1_div_6_Template, 5, 4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.source);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.target);
} }
function MappingItemComponent_ng_template_2_div_4_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 10);
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r13.source.error);
} }
function MappingItemComponent_ng_template_2_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MappingItemComponent_ng_template_2_div_4_i_1_Template, 1, 1, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r9.source.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Source = ", ctx_r9.source.text, " ");
} }
function MappingItemComponent_ng_template_2_ng_template_5_ng_template_9_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const parameter_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](parameter_r15.name);
} }
function MappingItemComponent_ng_template_2_ng_template_5_ng_template_9_div_0_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 8);
} }
function MappingItemComponent_ng_template_2_ng_template_5_ng_template_9_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MappingItemComponent_ng_template_2_ng_template_5_ng_template_9_div_0_div_2_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MappingItemComponent_ng_template_2_ng_template_5_ng_template_9_div_0_i_4_Template, 1, 0, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r17 = ctx.$implicit;
    const i_r18 = ctx.index;
    const parameter_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r18 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", value_r17.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !value_r17.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (parameter_r15.values.length > 1 ? "[" + i_r18 + "] " : "") + value_r17.text, " ");
} }
function MappingItemComponent_ng_template_2_ng_template_5_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MappingItemComponent_ng_template_2_ng_template_5_ng_template_9_div_0_Template, 6, 4, "div", 21);
} if (rf & 2) {
    const parameter_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", parameter_r15.values);
} }
function MappingItemComponent_ng_template_2_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Inputs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Parameter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Column / Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MappingItemComponent_ng_template_2_ng_template_5_ng_template_9_Template, 1, 1, "ng-template", 20);
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.inputParameters);
} }
function MappingItemComponent_ng_template_2_ng_template_6_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const parameter_r27 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](parameter_r27.name);
} }
function MappingItemComponent_ng_template_2_ng_template_6_div_0_div_7_div_1_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 8);
} }
function MappingItemComponent_ng_template_2_ng_template_6_div_0_div_7_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MappingItemComponent_ng_template_2_ng_template_6_div_0_div_7_div_1_i_1_Template, 1, 0, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const parameter_r31 = ctx.$implicit;
    const i_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", parameter_r31.values[i_r29].error);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !parameter_r31.values[i_r29].valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", parameter_r31.values[i_r29].text, " ");
} }
function MappingItemComponent_ng_template_2_ng_template_6_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MappingItemComponent_ng_template_2_ng_template_6_div_0_div_7_div_1_Template, 3, 3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mapParameter_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", mapParameter_r24.parameters);
} }
function MappingItemComponent_ng_template_2_ng_template_6_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MappingItemComponent_ng_template_2_ng_template_6_div_0_div_6_Template, 2, 1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MappingItemComponent_ng_template_2_ng_template_6_div_0_div_7_Template, 2, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mapParameter_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](mapParameter_r24.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", mapParameter_r24.parameters);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", mapParameter_r24.parameters[0].values);
} }
function MappingItemComponent_ng_template_2_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MappingItemComponent_ng_template_2_ng_template_6_div_0_Template, 8, 3, "div", 25);
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r11.mapParameters);
} }
function MappingItemComponent_ng_template_2_ng_template_7_ng_template_9_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const parameter_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](parameter_r36.name);
} }
function MappingItemComponent_ng_template_2_ng_template_7_ng_template_9_div_0_i_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 8);
} }
function MappingItemComponent_ng_template_2_ng_template_7_ng_template_9_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MappingItemComponent_ng_template_2_ng_template_7_ng_template_9_div_0_div_2_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MappingItemComponent_ng_template_2_ng_template_7_ng_template_9_div_0_i_4_Template, 1, 0, "i", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const value_r38 = ctx.$implicit;
    const i_r39 = ctx.index;
    const parameter_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", i_r39 == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", value_r38.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !value_r38.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (parameter_r36.values.length > 1 ? "[" + i_r39 + "] " : "") + value_r38.text, " ");
} }
function MappingItemComponent_ng_template_2_ng_template_7_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MappingItemComponent_ng_template_2_ng_template_7_ng_template_9_div_0_Template, 6, 4, "div", 21);
} if (rf & 2) {
    const parameter_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", parameter_r36.values);
} }
function MappingItemComponent_ng_template_2_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Outputs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Parameter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Column / Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MappingItemComponent_ng_template_2_ng_template_7_ng_template_9_Template, 1, 1, "ng-template", 20);
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r12.outputParameters);
} }
function MappingItemComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MappingItemComponent_ng_template_2_div_4_Template, 3, 2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MappingItemComponent_ng_template_2_ng_template_5_Template, 10, 1, "ng-template", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MappingItemComponent_ng_template_2_ng_template_6_Template, 1, 1, "ng-template", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MappingItemComponent_ng_template_2_ng_template_7_Template, 10, 1, "ng-template", 2);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.source);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r1.inputParameters == null ? null : ctx_r1.inputParameters.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.mapParameters);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r1.outputParameters == null ? null : ctx_r1.outputParameters.length) > 0);
} }
class ValidValue {
}
class ValidParameter {
}
class ValidMapping {
}
class MappingItemComponent {
    constructor(hubService) {
        this.hubService = hubService;
    }
    ngOnInit() {
        try {
            if (this._subscription) {
                this._subscription.unsubscribe();
            }
            this._subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(this.hubService.getHubCacheObservable(), this.hubService.getRemoteLibrariesObservable()).subscribe(result => {
                this.hubCache = result[0];
                this.updateMapping();
            });
        }
        catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Mappings');
        }
    }
    updateMapping() {
        return __awaiter(this, void 0, void 0, function* () {
            let item = this.transformItem;
            let itemType = _hub_models__WEBPACK_IMPORTED_MODULE_1__["transformItemTypes"].find(c => c.key === item.transformItemType);
            switch (item.transformItemType) {
                case _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eTransformItemType"].BuiltInFunction:
                    if (item.functionClassName) {
                        let func = yield this.hubService.GetFunctionReference(item);
                        if (func) {
                            this.label = func.name;
                            this.addBuiltInFunctionParameters(func);
                        }
                        else {
                            this.error = `Error, function ${item.functionClassName}.${item.functionMethodName} not found.`;
                        }
                    }
                    else if (item.customFunctionKey) {
                        let func = this.hubCache.hub.dexihCustomFunctions.find(c => c.key === item.customFunctionKey);
                        if (func) {
                            this.label = func.name;
                            this.addCustomFunctionParameters();
                        }
                        else {
                            this.error = 'Error, function not found.';
                        }
                    }
                    else {
                        this.error = 'Error, function not found';
                    }
                    break;
                case _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eTransformItemType"].CustomFunction:
                    this.addCustomFunctionParameters();
                    break;
                case _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eTransformItemType"].AggregatePair:
                    this.label = _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eAggregate"][item.aggregate];
                    break;
                case _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eTransformItemType"].Sort:
                    this.label = _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eSortDirection"][item.sortDirection];
                    break;
                case _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eTransformItemType"].UnGroup:
                    this.label = 'UnGroup';
                    this.addUnGroupParameters();
                    break;
                default:
                    this.label = itemType.name;
                    break;
            }
            if (itemType.useSource) {
                this.source = this.columnOrValue(null, item.sourceDatalinkColumn, item.sourceValue);
            }
            if (itemType.useTarget) {
                this.target = this.describeDatalinkColumn(null, item.targetDatalinkColumn);
            }
            if (itemType.useJoin) {
                this.target = this.describeDatalinkColumn(null, item.joinDatalinkColumn);
            }
            if (itemType.useFilter) {
                this.target = this.columnOrValue(null, item.filterDatalinkColumn, item.filterValue);
            }
            ;
            if (itemType.useFilter || itemType.useJoin) {
                let filterCompare = item.filterCompare;
                if (filterCompare === null) {
                    filterCompare = _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eCompare"].IsEqual;
                }
                ;
                this.compare = _hub_query_models__WEBPACK_IMPORTED_MODULE_5__["compare"].find(c => c.key === filterCompare).name;
            }
            else {
                this.compare = null;
            }
        });
    }
    columnOrValue(expectedDataType, column, value) {
        if (column) {
            return this.describeDatalinkColumn(expectedDataType, column);
        }
        else {
            return { text: this.describeStaticValue(value), valid: true, error: '' };
        }
    }
    // concatenates the arrays together.
    // node: .concat will append null arrays, where this ignores null arrays.
    concat(...args) {
        let array = [];
        args.forEach(arg => {
            if (arg) {
                array = array.concat(arg);
            }
        });
        return array;
    }
    addBuiltInFunctionParameters(func) {
        let functionInputs = this.concat(func.inputParameters, func.resultInputParameters);
        let functionOutputs = this.concat(func.outputParameters, func.returnParameters, func.resultOutputParameters, func.resultReturnParameters);
        let inputParams = this.transformItem.dexihFunctionParameters
            .filter(c => c.direction === _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eParameterDirection"].Input ||
            c.direction === _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eParameterDirection"].ResultInput ||
            c.direction === _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eParameterDirection"].Join);
        this.inputParameters = functionInputs.filter(c => c && !c.linkedName).map(param => {
            let p = inputParams.find(c => c.name === param.parameterName);
            if (p) {
                if (p.rank === 0) {
                    let value = this.columnOrValue(p.dataType, p.datalinkColumn, p.value);
                    return { name: this.describeParameterName(p), values: [value] };
                }
                else {
                    let values = p.arrayParameters.sort((a, b) => a.position - b.position).map(ap => {
                        return this.columnOrValue(ap.dataType, ap.datalinkColumn, ap.value);
                    });
                    return { name: this.describeParameterName(p), values: values };
                }
            }
            else {
                return { name: this.describeParameterName(p), values: [{ valid: false, error: 'Not Mapped', text: '' }] };
            }
        });
        let outputParams = this.transformItem.dexihFunctionParameters
            .filter(c => _hub_models__WEBPACK_IMPORTED_MODULE_1__["HubCache"].parameterIsOutput(c));
        this.outputParameters = functionOutputs.filter(c => c && !c.linkedName).map(param => {
            let p = outputParams.find(c => c.name === param.parameterName);
            if (p) {
                if (this.allowCondition &&
                    (p.direction === _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eParameterDirection"].ReturnValue || p.direction === _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eParameterDirection"].ResultReturnValue)) {
                    return null;
                }
                if (p.rank === 0 || p.datalinkColumn !== null) {
                    let value = this.describeDatalinkColumn(p.dataType, p.datalinkColumn);
                    return { name: this.describeParameterName(p), values: [value] };
                }
                else {
                    let values = p.arrayParameters.sort((a, b) => a.position - b.position).map(ap => {
                        return this.describeDatalinkColumn(ap.dataType, ap.datalinkColumn);
                    });
                    return { name: this.describeParameterName(p), values: values };
                }
            }
            else {
                // return {name: param.name, values: [{valid: false, text: 'Not mapped'}]  };
                return null;
            }
        }).filter(c => c !== null);
        let linkedNames = Array.from(new Set(this.concat(functionInputs, functionOutputs).map(c => c && c.linkedName).filter(c => c)));
        this.mapParameters = linkedNames.map(name => {
            let parameters = functionInputs.filter(c => c.linkedName === name).map(param => {
                let p = inputParams.find(c => c.name === param.parameterName);
                let values = p.arrayParameters.sort((a, b) => a.position - b.position).map(ap => {
                    return this.columnOrValue(ap.dataType, ap.datalinkColumn, ap.value);
                });
                return { name: this.describeParameterName(param), values: values };
            });
            let parameters2 = functionOutputs.filter(c => c.linkedName === name).map(param => {
                let p = outputParams.find(c => c.name === param.parameterName);
                let values = p.arrayParameters.sort((a, b) => a.position - b.position).map(ap => {
                    return this.describeDatalinkColumn(ap.dataType, ap.datalinkColumn);
                });
                return { name: this.describeParameterName(param), values: values };
            });
            return { name: name, parameters: this.concat(parameters, parameters2) };
        });
    }
    addCustomFunctionParameters() {
        let inputParams = this.transformItem.dexihFunctionParameters
            .filter(c => c.direction === _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eParameterDirection"].Input ||
            c.direction === _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eParameterDirection"].ResultInput ||
            c.direction === _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eParameterDirection"].Join);
        this.inputParameters = inputParams.map(p => {
            if (p.rank === 0) {
                let value = this.columnOrValue(p.dataType, p.datalinkColumn, p.value);
                return { name: this.describeParameterName(p), values: [value] };
            }
            else {
                let values = p.arrayParameters.sort((a, b) => a.position - b.position).map(ap => {
                    return this.columnOrValue(ap.dataType, ap.datalinkColumn, ap.value);
                });
                return { name: this.describeParameterName(p), values: values };
            }
        });
        let outputParams = this.transformItem.dexihFunctionParameters
            .filter(c => _hub_models__WEBPACK_IMPORTED_MODULE_1__["HubCache"].parameterIsOutput(c));
        this.outputParameters = outputParams.map(p => {
            if (p.rank === 0) {
                let value = this.describeDatalinkColumn(p.dataType, p.datalinkColumn);
                return { name: this.describeParameterName(p), values: [value] };
            }
            else {
                let values = p.arrayParameters.sort((a, b) => a.position - b.position).map(ap => {
                    return this.describeDatalinkColumn(ap.dataType, ap.datalinkColumn);
                });
                return { name: this.describeParameterName(p), values: values };
            }
        });
    }
    addUnGroupParameters() {
        let parameters = this.transformItem.dexihFunctionParameters;
        let runTime = this.transform['runTime'];
        let inputColumns = runTime.inputColumns;
        let sourceColumn = inputColumns.find(c => c.key === this.transformItem.sourceDatalinkColumn.key);
        if (sourceColumn) {
            this.outputParameters = parameters.map(p => {
                if (p.datalinkColumn) {
                    let find = sourceColumn.childColumns.find(c => c.key === p.datalinkColumn.key);
                    if (find) {
                        return { name: this.describeParameterName(p), values: [{ valid: true, error: '', text: p.datalinkColumn.name }] };
                    }
                    return { name: this.describeParameterName(p),
                        values: [{ valid: false, error: '(Invalid column) ', text: p.datalinkColumn.name }] };
                }
                else {
                    return { name: this.describeParameterName(p), values: [{ valid: false, error: '(No column)', text: '' }] };
                }
            });
        }
    }
    describeParameterName(param) {
        return param.name + ' (' + _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eTypeCode"][param.dataType] + ')';
    }
    describeDatalinkColumn(expectedDataType, value) {
        if (!value) {
            return { error: '(not mapped)', text: '', valid: false };
        }
        let runTime = this.transform['runTime'];
        let inputColumns = runTime.inputColumns;
        let nodeDatalinkColumn = this.transform.nodeDatalinkColumn ? this.transform.nodeDatalinkColumn : null;
        let nodeDatalinkColumnKey = nodeDatalinkColumn ? nodeDatalinkColumn.key : null;
        let returnValue = null;
        let io = new _hub_lineage_models__WEBPACK_IMPORTED_MODULE_4__["InputOutputColumns"]();
        let col = io.findValidColumn(value, nodeDatalinkColumnKey, inputColumns);
        if (col) {
            returnValue = (value.columnGroup ? ('(' + value.columnGroup + ')') : '') + value.logicalName;
        }
        if (!returnValue) {
            runTime.transformColumns.forEach(column => {
                if (!returnValue && column.key === value.key) {
                    returnValue = value.logicalName;
                }
            });
        }
        if (!returnValue && this.transform.joinDatalinkTable) {
            let joinTable = this.transform.joinDatalinkTable;
            joinTable.dexihDatalinkColumns.forEach(column => {
                if (!returnValue && column.key === value.key) {
                    returnValue = '(' + joinTable.name + ') ' + value.logicalName;
                }
            });
        }
        if (returnValue) {
            if (expectedDataType == null || value.dataType === expectedDataType) {
                return { text: returnValue, valid: true, error: '' };
            }
            else {
                return { text: returnValue, error: '(inconsistent datatype ' + _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eTypeCode"][value.dataType] + ')', valid: false };
            }
        }
        else {
            return { text: value.logicalName, error: '(Invalid column) ', valid: false };
        }
    }
    describeStaticValue(value) {
        if (value === ' ') {
            return '<space>';
        }
        if (!value) {
            return '<null>';
        }
        return '"' + value + '"';
    }
}
MappingItemComponent.ɵfac = function MappingItemComponent_Factory(t) { return new (t || MappingItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](___WEBPACK_IMPORTED_MODULE_2__["HubService"])); };
MappingItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MappingItemComponent, selectors: [["mapping-item"]], inputs: { transform: "transform", transformItem: "transformItem", allowCondition: "allowCondition" }, decls: 3, vars: 2, consts: [[1, "container"], ["class", "row justify-content-start", 4, "ngIf"], [3, "ngIf"], [1, "row", "justify-content-start"], [1, "col-auto"], ["class", "text-danger", 4, "ngIf"], ["class", "col-auto", 4, "ngIf"], [1, "text-danger"], [1, "fa", "fa-exclamation-circle", "text-danger"], ["class", "fa fa-exclamation-circle text-danger", 3, "title", 4, "ngIf"], [1, "fa", "fa-exclamation-circle", "text-danger", 3, "title"], ["class", "fa fa-arrow-right mr-2", 4, "ngIf"], ["class", "mr-2", 4, "ngIf"], [1, "fa", "fa-arrow-right", "mr-2"], [1, "mr-2"], [1, "row"], [1, "col"], [4, "ngIf"], [1, "row", "pt-2"], [1, "col", "border", "bg-primary", "text-white", "font-weight-bold", "text-truncate"], ["ngFor", "", 3, "ngForOf"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "col", "border", "bg-secondary", "text-white", "text-truncate"], [1, "col", "border", "border", "text-white", "bg-secondary", "text-truncate", 3, "title"], ["class", "fa fa-exclamation-circle text-danger", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "col", "text-truncate"], ["class", "col border bg-primary text-white font-weight-bold text-truncate", 4, "ngFor", "ngForOf"], ["class", "col border bg-secondary text-white text-truncate", 3, "title", 4, "ngFor", "ngForOf"], [1, "col", "border", "bg-secondary", "text-white", "text-truncate", 3, "title"], [1, "col", "border", "border", "bg-secondary", "text-white", "text-truncate", 3, "title"]], template: function MappingItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MappingItemComponent_div_1_Template, 7, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MappingItemComponent_ng_template_2_Template, 8, 5, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.outputParameters);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.outputParameters);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MappingItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mapping-item',
                templateUrl: 'mapping-item.component.html'
            }]
    }], function () { return [{ type: ___WEBPACK_IMPORTED_MODULE_2__["HubService"] }]; }, { transform: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], transformItem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], allowCondition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/+hub/datalink/datalink-edit/mapping/mapping.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/+hub/datalink/datalink-edit/mapping/mapping.component.ts ***!
  \**************************************************************************/
/*! exports provided: MappingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MappingComponent", function() { return MappingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _hub_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hub.service */ "./src/app/+hub/hub.service.ts");
/* harmony import */ var _datalink_edit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../datalink-edit.service */ "./src/app/+hub/datalink/datalink-edit/datalink-edit.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../+auth/auth.service */ "./src/app/+auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _hub_lineage_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../hub.lineage.models */ "./src/app/+hub/hub.lineage.models.ts");
/* harmony import */ var _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/shared.models */ "./src/app/shared/shared.models.ts");
/* harmony import */ var ngx_d_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-d-components */ "./node_modules/ngx-d-components/__ivy_ngcc__/fesm2015/ngx-d-components.js");
/* harmony import */ var ngx_d_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-d-table */ "./node_modules/ngx-d-table/__ivy_ngcc__/fesm2015/ngx-d-table.js");
/* harmony import */ var _shared_utils_dropzone__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/utils/dropzone */ "./src/app/shared/utils/dropzone.ts");
/* harmony import */ var _mapping_item_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./mapping-item.component */ "./src/app/+hub/datalink/datalink-edit/mapping/mapping-item.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



















const _c0 = ["mappingTable"];
function MappingComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button-edit", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MappingComponent_ng_template_3_Template_d_button_edit_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const datalinkTransformItem_r9 = ctx.item; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.editMapping(datalinkTransformItem_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MappingComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button-delete", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MappingComponent_ng_template_5_Template_d_button_delete_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const items_r12 = ctx.items; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.deleteSelected(items_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MappingComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mapping-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MappingComponent_ng_template_7_Template_mapping_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const item_r15 = ctx.item; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.editMapping(item_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r15 = ctx.item;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("transform", ctx_r6.datalinkTransformForm.value)("transformItem", item_r15.datalinkTransformItem)("allowCondition", ctx_r6.allowCondition);
} }
function MappingComponent_ng_template_9_ng_template_0_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MappingComponent_ng_template_9_ng_template_0_li_4_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const columnGroup_r29 = ctx.$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r30.addGroup(columnGroup_r29); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const columnGroup_r29 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Add all " + columnGroup_r29.group);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Add all ", columnGroup_r29.group, "");
} }
function MappingComponent_ng_template_9_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button-splitdropdown", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("buttonClick", function MappingComponent_ng_template_9_ng_template_0_Template_d_button_splitdropdown_buttonClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r32.newMapping(ctx_r32.eTransformItemType.ColumnPair); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MappingComponent_ng_template_9_ng_template_0_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r34.addAll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add all input columns");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MappingComponent_ng_template_9_ng_template_0_li_4_Template, 3, 2, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r19.columnGroups);
} }
function MappingComponent_ng_template_9_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Filter ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "mapping-edit/", ctx_r20.eTransformItemType.FilterPair, "");
} }
function MappingComponent_ng_template_9_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Aggregate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "mapping-edit/", ctx_r21.eTransformItemType.AggregatePair, "");
} }
const _c1 = function (a1) { return ["standard-function-edit", a1]; };
const _c2 = function (a1) { return ["custom-function-edit", a1]; };
function MappingComponent_ng_template_9_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Standard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "d-button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Custom");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx_r22.functionType));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c2, ctx_r22.functionType));
} }
function MappingComponent_ng_template_9_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Un-Group");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MappingComponent_ng_template_9_ng_template_5_li_7_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MappingComponent_ng_template_9_ng_template_5_li_7_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const column_r36 = ctx.$implicit; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r37.addValidFromTo(column_r36); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", column_r36.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](column_r36.name);
} }
function MappingComponent_ng_template_9_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Join ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "d-button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "d-button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Custom Filter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "d-button-dropdown", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MappingComponent_ng_template_9_ng_template_5_li_7_Template, 3, 2, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "mapping-edit/", ctx_r24.eTransformItemType.JoinPair, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx_r24.functionType));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c2, ctx_r24.functionType));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r24.inputDateColumns);
} }
function MappingComponent_ng_template_9_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Sort");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "mapping-edit/", ctx_r25.eTransformItemType.Sort, "");
} }
function MappingComponent_ng_template_9_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Group");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "mapping-edit/", ctx_r26.eTransformItemType.Column, "");
} }
function MappingComponent_ng_template_9_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MappingComponent_ng_template_9_ng_template_8_Template_d_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r39.createJoinNode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Node");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MappingComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MappingComponent_ng_template_9_ng_template_0_Template, 5, 1, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MappingComponent_ng_template_9_ng_template_1_Template, 2, 1, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MappingComponent_ng_template_9_ng_template_2_Template, 2, 1, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MappingComponent_ng_template_9_ng_template_3_Template, 4, 6, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MappingComponent_ng_template_9_ng_template_4_Template, 2, 0, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MappingComponent_ng_template_9_ng_template_5_Template, 8, 8, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MappingComponent_ng_template_9_ng_template_6_Template, 2, 1, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MappingComponent_ng_template_9_ng_template_7_Template, 2, 1, "ng-template", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, MappingComponent_ng_template_9_ng_template_8_Template, 2, 0, "ng-template", 12);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.allowMapping);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.allowCondition && !ctx_r8.allowValidation);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.allowAggregate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.allowStandard || ctx_r8.allowAggregate || ctx_r8.allowCondition || ctx_r8.allowRow || ctx_r8.allowValidation);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.allowRow);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.allowJoin);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.allowSort);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.allowGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.allowJoinNode);
} }
class MappingComponent {
    constructor(authService, hubService, editDatalinkService, router, route) {
        this.authService = authService;
        this.hubService = hubService;
        this.editDatalinkService = editDatalinkService;
        this.router = router;
        this.route = route;
        this.allowStandard = false;
        this.allowMapping = false;
        this.allowAggregate = false;
        this.allowRow = false;
        this.allowCondition = false;
        this.allowValidation = false;
        this.allowOutput = false;
        this.allowGroup = false;
        this.allowJoin = false;
        this.allowSort = false;
        this.allowSeries = false;
        this.allowJoinNode = false;
        this.addMapping = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.removeMapping = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.updateMapping = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hasChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onColumnDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this._tableData = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.tableData = this._tableData.asObservable();
        this.eTransformType = _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["eTransformType"];
        this.eTransformItemType = _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["eTransformItemType"];
        this.columnGroups = [];
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
        if (this._changesSubscription) {
            this._changesSubscription.unsubscribe();
        }
    }
    ngOnChanges() {
        try {
            // this.columns = [{ name: 'function', title: 'Mapping', format: 'Md', class: 'functionClass' }];
            this.columns = [];
            // if (!this.allowSort) {
            //     this.columns.push({ name: 'function', title: 'Function Name', format: '', class: 'functionClass' });
            // }
            // this.columns.push({ name: 'input', title: 'Input(s)', format: 'Md', class: 'inputClass' });
            // if (this.allowOutput || this.allowJoinNode) {
            //     this.columns.push({ name: 'output', title: 'Output(s)', format: 'Md', class: 'outputClass' });
            // }
            // if (this.allowSort) {
            //     this.columns.push({ name: 'sortDirection', title: 'Direction', format: '' });
            // }
            if (this._subscription) {
                this._subscription.unsubscribe();
            }
            this._subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])(this.hubService.getHubCacheObservable(), this.hubService.getRemoteLibrariesObservable()).subscribe(() => {
                this.functionType = this.editDatalinkService.getFunctionType(this.datalinkTransformForm.value);
                this.transformType = this.datalinkTransformForm.value.transformType;
                this.updateTableData();
                if (this._changesSubscription) {
                    this._changesSubscription.unsubscribe();
                }
                this._changesSubscription = this.datalinkTransformForm.valueChanges.subscribe(() => this.updateTableData());
            });
        }
        catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Mappings');
        }
    }
    updateTableData() {
        try {
            if (this.datalinkTransformForm) {
                let runTime = this.datalinkTransformForm.controls['runTime'].value;
                let inputColumns = runTime.inputColumns;
                this.inputDateColumns = inputColumns.filter(c => c.dataType === _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["eTypeCode"].DateTime || c.dataType === _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["eTypeCode"].Date);
                this.columnGroups = this.editDatalinkService.getColumnGroups(inputColumns);
                let data = [];
                let items = this.datalinkTransformForm.controls.dexihDatalinkTransformItems;
                let filteredItems = [];
                if (this.allowJoinNode) {
                    filteredItems = filteredItems.concat(items.controls
                        .filter(d => d.value.transformItemType === _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["eTransformItemType"].JoinNode));
                }
                if (this.allowGroup) {
                    filteredItems = filteredItems.concat(items.controls
                        .filter(d => d.value.transformItemType === _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["eTransformItemType"].Column));
                }
                if (this.allowStandard || this.allowJoin) {
                    filteredItems = filteredItems.concat(items.controls
                        .filter(d => d.value.transformItemType === _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["eTransformItemType"].BuiltInFunction
                        || d.value.transformItemType === _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["eTransformItemType"].CustomFunction));
                }
                if (this.allowAggregate) {
                    filteredItems = filteredItems.concat(items.controls
                        .filter(d => d.value.transformItemType === _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["eTransformItemType"].AggregatePair));
                }
                if (this.allowMapping) {
                    filteredItems = filteredItems.concat(items.controls
                        .filter(d => d.value.transformItemType === _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["eTransformItemType"].ColumnPair));
                }
                if (this.allowCondition) {
                    filteredItems = filteredItems.concat(items.controls
                        .filter(d => d.value.transformItemType === _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["eTransformItemType"].FilterPair));
                }
                if (this.allowJoin) {
                    filteredItems = filteredItems.concat(items.controls
                        .filter(d => d.value.transformItemType === _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["eTransformItemType"].JoinPair));
                }
                if (this.allowRow) {
                    filteredItems = filteredItems.concat(items.controls
                        .filter(d => d.value.transformItemType === _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["eTransformItemType"].UnGroup));
                }
                if (this.allowSort) {
                    filteredItems = filteredItems.concat(items.controls
                        .filter(d => d.value.transformItemType === _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["eTransformItemType"].Sort));
                }
                filteredItems.sort((a, b) => a.value.position - b.value.position).forEach(item => {
                    const transformItem = item.value;
                    let functionItem = {
                        datalinkTransformItem: transformItem,
                        key: transformItem.key,
                    };
                    data.push(functionItem);
                });
                this._tableData.next(data);
            }
        }
        catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Mappings, update data');
        }
    }
    getItemFormGroup(datalinkTransformItemKey) {
        let items = this.datalinkTransformForm.controls['dexihDatalinkTransformItems'];
        let item = items.controls.find(c => c.value.key === datalinkTransformItemKey);
        return item;
    }
    editMapping(item) {
        let key = item.key;
        let itemForm = this.getItemFormGroup(key);
        let transformItemType = itemForm.value.transformItemType;
        switch (transformItemType) {
            case _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["eTransformItemType"].BuiltInFunction:
                this.router.navigate(['standard-function-edit', this.functionType, key], { relativeTo: this.route.parent });
                break;
            case _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["eTransformItemType"].CustomFunction:
                this.router.navigate(['custom-function-edit', this.functionType, key], { relativeTo: this.route.parent });
                break;
            case _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["eTransformItemType"].Column:
            case _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["eTransformItemType"].JoinNode:
            case _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["eTransformItemType"].GroupNode:
            case _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["eTransformItemType"].ColumnPair:
            case _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["eTransformItemType"].Sort:
            case _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["eTransformItemType"].JoinPair:
            case _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["eTransformItemType"].FilterPair:
            case _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["eTransformItemType"].AggregatePair:
            case _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["eTransformItemType"].Series:
                this.router.navigate(['mapping-edit', transformItemType, key], { relativeTo: this.route.parent });
                break;
            case _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["eTransformItemType"].UnGroup:
                this.router.navigate(['unGroup-edit', key], { relativeTo: this.route.parent });
                break;
        }
    }
    deleteMapping(item) {
        this.deleteSelected([item]);
    }
    deleteSelected(items) {
        items.forEach(item => {
            let key = item.key;
            let itemForm = this.getItemFormGroup(key);
            this.editDatalinkService.deleteDatalinkTransformItem(this.datalinkTransformForm, itemForm);
        });
    }
    // if a sort event has triggered from the table, then reset the positions of the datalink transform items.
    datalinkItemSortChange(items) {
        items.forEach((item, index) => {
            let existingItems = this.datalinkTransformForm.controls.dexihDatalinkTransformItems;
            let datalinkTransformItem = existingItems.controls
                .find(c => c.value.key === item.key);
            if (datalinkTransformItem) {
                datalinkTransformItem.controls.position.setValue(index);
            }
        });
    }
    // triggered when a source column is dropped onto the output column
    newOutputDrop(inputColumn) {
        this.onColumnDrop.emit({
            inputColumn: inputColumn,
            outputColumn: null
        });
    }
    createJoinNode() {
        let items = this.datalinkTransformForm.controls.dexihDatalinkTransformItems;
        if (items.controls.find(d => d.value.transformItemType === _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["eTransformItemType"].JoinNode)) {
            this.authService.informationDialog('Can not add node', 'Only one join node can be added.');
            return;
        }
        let joinTable = this.datalinkTransformForm.value.joinDatalinkTable;
        let item = new _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["DexihDatalinkTransformItem"]();
        let outputColumn = new _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["DexihDatalinkColumn"]();
        outputColumn.position = 0;
        outputColumn.key = this.hubService.getHubCache().getNextSequence();
        outputColumn.name = joinTable.name;
        outputColumn.logicalName = joinTable.name;
        let io = new _hub_lineage_models__WEBPACK_IMPORTED_MODULE_7__["InputOutputColumns"]();
        let columns = joinTable.dexihDatalinkColumns.map((col, index) => {
            let childColumn = io.copyDatalinkColumn(col, index, 'Join Node');
            childColumn.key = this.hubService.getHubCache().getNextSequence();
            childColumn.datalinkTableKey = null;
            return childColumn;
        });
        outputColumn.childColumns = columns;
        outputColumn.dataType = _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["eTypeCode"].Node;
        item.position = -1;
        item.datalinkTransformKey = this.datalinkTransformForm.value.key;
        item.targetDatalinkColumn = outputColumn;
        item.isValid = true;
        item.transformItemType = _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["eTransformItemType"].JoinNode;
        let itemForm = this.editDatalinkService.hubFormsService.datalinkDatalinkTransformItemFormGroup(this.datalinkTransformForm, item);
        this.editDatalinkService.insertDatalinkTransformItem(this.datalinkTransformForm, itemForm);
    }
    createGroupNode() {
        let items = this.datalinkTransformForm.controls.dexihDatalinkTransformItems;
        if (items.controls.find(d => d.value.transformItemType === _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["eTransformItemType"].GroupNode)) {
            this.authService.informationDialog('Can not add node', 'Only one group node can be added.');
            return;
        }
        let item = new _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["DexihDatalinkTransformItem"]();
        let outputColumn = new _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["DexihDatalinkColumn"]();
        outputColumn.position = 0;
        outputColumn.key = this.hubService.getHubCache().getNextSequence();
        outputColumn.name = 'Group';
        outputColumn.logicalName = 'Group';
        outputColumn.dataType = _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["eTypeCode"].Node;
        item.position = -1;
        item.datalinkTransformKey = this.datalinkTransformForm.value.key;
        item.targetDatalinkColumn = outputColumn;
        item.isValid = true;
        item.transformItemType = _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["eTransformItemType"].GroupNode;
        let itemForm = this.editDatalinkService.hubFormsService.datalinkDatalinkTransformItemFormGroup(this.datalinkTransformForm, item);
        this.editDatalinkService.insertDatalinkTransformItem(this.datalinkTransformForm, itemForm);
    }
    newMapping(itemType) {
        this.router.navigate(['mapping-edit', itemType], { relativeTo: this.route });
    }
    addAll() {
        let runTime = this.datalinkTransformForm.controls['runTime'].value;
        let inputColumns = runTime.inputColumns;
        inputColumns.forEach(inputColumn => {
            this.createMapping(inputColumn);
        });
    }
    addGroup(group) {
        group.columns.forEach(inputColumn => {
            this.createMapping(inputColumn);
        });
    }
    createMapping(inputColumn) {
        let runTime = this.datalinkTransformForm.controls['runTime'].value;
        let outputColumns = runTime.outputColumns;
        if (outputColumns.findIndex(c => c.name === inputColumn.name) >= 0) {
            return;
        }
        let item = new _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["DexihDatalinkTransformItem"]();
        let io = new _hub_lineage_models__WEBPACK_IMPORTED_MODULE_7__["InputOutputColumns"]();
        let outputColumn = io.copyDatalinkColumn(inputColumn, 0, 'mapping');
        outputColumn.key = this.hubService.getHubCache().getNextSequence();
        if (outputColumn.childColumns) {
            outputColumn.childColumns.forEach(col => {
                col.key = this.hubService.getHubCache().getNextSequence();
            });
        }
        outputColumn.datalinkTableKey = null;
        item.datalinkTransformKey = this.datalinkTransformForm.value.key;
        item.sourceDatalinkColumn = inputColumn;
        item.targetDatalinkColumn = outputColumn;
        item.transformItemType = _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["eTransformItemType"].ColumnPair;
        item.isValid = true;
        let itemForm = this.editDatalinkService.hubFormsService
            .datalinkDatalinkTransformItemFormGroup(this.datalinkTransformForm, item);
        this.editDatalinkService.insertDatalinkTransformItem(this.datalinkTransformForm, itemForm);
    }
    // joins the column to the valid from/to columns
    addValidFromTo(column) {
        let joinTable = this.datalinkTransformForm.value.joinDatalinkTable;
        let validFrom = joinTable.dexihDatalinkColumns.find(c => c.deltaType === _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["eDeltaType"].ValidFromDate);
        let validTo = joinTable.dexihDatalinkColumns.find(c => c.deltaType === _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["eDeltaType"].ValidToDate);
        if (!validFrom || !validTo) {
            this.authService.informationDialog('No valid from', 'The join table does not contain a columns with a valid from/to delta type.');
            return;
        }
        let item = new _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["DexihDatalinkTransformItem"]();
        item.sourceDatalinkColumn = column;
        item.joinDatalinkColumn = validFrom;
        item.transformItemType = _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["eTransformItemType"].JoinPair;
        item.filterCompare = _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["eCompare"].GreaterThanEqual;
        let itemForm = this.editDatalinkService.hubFormsService.datalinkDatalinkTransformItemFormGroup(this.datalinkTransformForm, item);
        this.editDatalinkService.insertDatalinkTransformItem(this.datalinkTransformForm, itemForm);
        item = new _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["DexihDatalinkTransformItem"]();
        item.sourceDatalinkColumn = column;
        item.joinDatalinkColumn = validTo;
        item.transformItemType = _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["eTransformItemType"].JoinPair;
        item.filterCompare = _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["eCompare"].LessThan;
        itemForm = this.editDatalinkService.hubFormsService.datalinkDatalinkTransformItemFormGroup(this.datalinkTransformForm, item);
        this.editDatalinkService.insertDatalinkTransformItem(this.datalinkTransformForm, itemForm);
    }
}
MappingComponent.ɵfac = function MappingComponent_Factory(t) { return new (t || MappingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hub_service__WEBPACK_IMPORTED_MODULE_2__["HubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_datalink_edit_service__WEBPACK_IMPORTED_MODULE_3__["DatalinkEditService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
MappingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MappingComponent, selectors: [["mapping"]], viewQuery: function MappingComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mappingTable = _t.first);
    } }, inputs: { datalinkTransformForm: "datalinkTransformForm", allowStandard: "allowStandard", allowMapping: "allowMapping", allowAggregate: "allowAggregate", allowRow: "allowRow", allowCondition: "allowCondition", allowValidation: "allowValidation", allowOutput: "allowOutput", allowGroup: "allowGroup", allowJoin: "allowJoin", allowSort: "allowSort", allowSeries: "allowSeries", allowJoinNode: "allowJoinNode", title: "title" }, outputs: { addMapping: "addMapping", removeMapping: "removeMapping", updateMapping: "updateMapping", hasChanged: "hasChanged", onColumnDrop: "onColumnDrop" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 11, vars: 9, consts: [[3, "title", "scrollable", "showExpandButton"], ["tableClass", "table table-striped table-hover m-0", "dropZone", "", "zone", "input-column", "dropAllowedClass", "drop-zone-green", "actionHeading", "Mappings", 3, "enableMultiSelect", "enableManualSort", "columns", "dataObservable", "enableStickyToolbar", "toolbarZIndex", "rowClick", "onSortChanged", "dropData"], ["mappingTable", ""], ["select", "selectedItemAction"], ["selectedItemAction", ""], ["select", "selectedItemsAction"], ["selectedItemsAction", ""], ["rowAction", ""], ["actions", ""], ["title", "Edit this mapping", 1, "mr-1", 3, "click"], ["title", "Delete selected mapping functions", 1, "mr-1", 3, "click"], [3, "transform", "transformItem", "allowCondition", "click"], [3, "ngIf"], ["buttonClass", "btn-primary", "iconClass", "fa fa-map", "title", "Create a new mapping, or drop a column to create new mapping.", "text", "Mapping", 1, "mr-1", 3, "buttonClick"], ["title", "Add all", 1, "dropdown-item", 3, "click"], [4, "ngFor", "ngForOf"], [1, "dropdown-item", 3, "title", "click"], ["buttonClass", "btn-primary mr-1 ", "iconClass", "fa fa-filter", "title", "Create a simple filter", 3, "routerLink"], ["buttonClass", "btn-primary mr-1 ", "iconClass", "fa fa-cubes", "title", "Create a simple aggregate", 3, "routerLink"], ["buttonClass", "btn-primary mr-1 ", "iconClass", "fa fa-dollar", "title", "Create a new standard function", 3, "routerLink"], ["buttonClass", "btn-primary mr-1 ", "iconClass", "fa fa-code", "title", "Create a new custom function", 3, "routerLink"], ["routerLink", "unGroup-edit", "buttonClass", "btn-primary mr-1 ", "iconClass", "fa fa-map", "title", "Un-Group a Node"], ["buttonClass", "btn-primary mr-1 ", "iconClass", "fa fa-link", "title", "Create a new join", 3, "routerLink"], ["buttonClass", "btn-primary mr-1 ", "iconClass", "fa fa-dollar", "title", "Create a new standard filter", 3, "routerLink"], ["buttonClass", "btn-primary mr-1 ", "iconClass", "fa fa-code", "title", "Create a new custom filter", 3, "routerLink"], ["buttonClass", "btn-primary", "iconClass", "fa fa-calendar", "title", "Add a joins between the column and the valid from/to", "text", "Valid From/To", 1, "mr-1"], ["buttonClass", "btn-primary mr-1 ", "iconClass", "fa fa-sort-alpha-asc", "title", "New Sort", 3, "routerLink"], ["buttonClass", "btn-primary mr-1 ", "iconClass", "fa fa-list", "title", "New Group", 3, "routerLink"], ["buttonClass", "btn-primary mr-1 ", "iconClass", "fa fa-list", "title", "Join Node", 3, "click"]], template: function MappingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-widget", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "d-table", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rowClick", function MappingComponent_Template_d_table_rowClick_1_listener($event) { return ctx.editMapping($event); })("onSortChanged", function MappingComponent_Template_d_table_onSortChanged_1_listener($event) { return ctx.datalinkItemSortChange($event); })("dropData", function MappingComponent_Template_d_table_dropData_1_listener($event) { return ctx.newOutputDrop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MappingComponent_ng_template_3_Template, 1, 0, "ng-template", 3, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MappingComponent_ng_template_5_Template, 1, 0, "ng-template", 5, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MappingComponent_ng_template_7_Template, 1, 3, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, MappingComponent_ng_template_9_Template, 9, 9, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.title)("scrollable", true)("showExpandButton", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("enableMultiSelect", true)("enableManualSort", true)("columns", ctx.columns)("dataObservable", ctx.tableData)("enableStickyToolbar", true)("toolbarZIndex", 100);
    } }, directives: [ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["DWidgetComponent"], ngx_d_table__WEBPACK_IMPORTED_MODULE_10__["DTableComponent"], _shared_utils_dropzone__WEBPACK_IMPORTED_MODULE_11__["DropZoneDirective"], ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["DButtonEditComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["DButtonDeleteComponent"], _mapping_item_component__WEBPACK_IMPORTED_MODULE_12__["MappingItemComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["DButtonSplitDropDownComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["DButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["DButtonDropDownComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MappingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mapping',
                templateUrl: './mapping.component.html'
            }]
    }], function () { return [{ type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _hub_service__WEBPACK_IMPORTED_MODULE_2__["HubService"] }, { type: _datalink_edit_service__WEBPACK_IMPORTED_MODULE_3__["DatalinkEditService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }]; }, { datalinkTransformForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], allowStandard: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], allowMapping: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], allowAggregate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], allowRow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], allowCondition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], allowValidation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], allowOutput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], allowGroup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], allowJoin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], allowSort: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], allowSeries: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], allowJoinNode: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], addMapping: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], removeMapping: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], updateMapping: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], hasChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onColumnDrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], mappingTable: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['mappingTable', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/+hub/datalink/datalink-edit/new-transform/datalink-edit-new-transform.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/+hub/datalink/datalink-edit/new-transform/datalink-edit-new-transform.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: DatalinkEditNewTransformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatalinkEditNewTransformComponent", function() { return DatalinkEditNewTransformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _hub_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hub.service */ "./src/app/+hub/hub.service.ts");
/* harmony import */ var _datalink_edit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../datalink-edit.service */ "./src/app/+hub/datalink/datalink-edit/datalink-edit.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../+auth/auth.service */ "./src/app/+auth/auth.service.ts");
/* harmony import */ var _hub_remote_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../hub.remote.models */ "./src/app/+hub/hub.remote.models.ts");
/* harmony import */ var ngx_d_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-d-components */ "./node_modules/ngx-d-components/__ivy_ngcc__/fesm2015/ngx-d-components.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};














function DatalinkEditNewTransformComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatalinkEditNewTransformComponent_a_2_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const transform_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.insert(transform_r1.transformReference); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const transform_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", transform_r1.transformReference.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", transform_r1.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", transform_r1.transformReference.description, " ");
} }
class DatalinkEditNewTransformComponent {
    constructor(hubService, editDatalinkService, authService, route, router) {
        this.hubService = hubService;
        this.editDatalinkService = editDatalinkService;
        this.authService = authService;
        this.route = route;
        this.router = router;
    }
    ngOnInit() {
        try {
            this._subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])(this.route.data, this.route.params, this.editDatalinkService.hubFormsService.getCurrentFormObservable()).subscribe((result) => __awaiter(this, void 0, void 0, function* () {
                this.transforms = [];
                let userConfigTransforms = yield this.hubService.GetUserConfigTransformReference();
                userConfigTransforms.forEach(transform => {
                    let transformType = _hub_remote_models__WEBPACK_IMPORTED_MODULE_6__["transformTypes"].find(c => c.key === transform.transformType);
                    let icon = '';
                    if (transformType) {
                        icon = transformType.icon;
                    }
                    this.transforms.push({ transformReference: transform, icon: icon });
                });
                this.position = +result[1]['position'];
            }));
        }
        catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'New Transform');
        }
    }
    ngOnDestroy() {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
    }
    insert(transform) {
        let newDatalinkTransformForm = this.editDatalinkService.insertDatalinkTransform(this.position, transform);
        this.router.navigate(['transform', newDatalinkTransformForm.value.key], { relativeTo: this.route.parent });
    }
    close() {
        this.authService.navigateUp();
    }
}
DatalinkEditNewTransformComponent.ɵfac = function DatalinkEditNewTransformComponent_Factory(t) { return new (t || DatalinkEditNewTransformComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hub_service__WEBPACK_IMPORTED_MODULE_2__["HubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_datalink_edit_service__WEBPACK_IMPORTED_MODULE_3__["DatalinkEditService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
DatalinkEditNewTransformComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DatalinkEditNewTransformComponent, selectors: [["datalink-edit-new-transform"]], decls: 3, vars: 2, consts: [["title", "Select a Transform", 3, "padding"], [1, "d-flex", "flex-wrap", "justify-content-around"], ["href", "javascript:void(0)", "class", "btn btn-outline-primary p-0 m-3", "style", "width:400px", 3, "click", 4, "ngFor", "ngForOf"], ["href", "javascript:void(0)", 1, "btn", "btn-outline-primary", "p-0", "m-3", 2, "width", "400px", 3, "click"], [1, "d-flex", "h-100"], [1, "border-right", "border-primary", "p-3", 2, "min-width", "140px"], [1, "d-block"], [1, "fa", "fa-4x", 3, "ngClass"], [1, "p-3", "text-left"]], template: function DatalinkEditNewTransformComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-widget-section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DatalinkEditNewTransformComponent_a_2_Template, 8, 3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("padding", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.transforms);
    } }, directives: [ngx_d_components__WEBPACK_IMPORTED_MODULE_7__["ɵa"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatalinkEditNewTransformComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'datalink-edit-new-transform',
                templateUrl: './datalink-edit-new-transform.component.html'
            }]
    }], function () { return [{ type: _hub_service__WEBPACK_IMPORTED_MODULE_2__["HubService"] }, { type: _datalink_edit_service__WEBPACK_IMPORTED_MODULE_3__["DatalinkEditService"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/+hub/datalink/datalink-edit/output-columns/index.ts":
/*!*********************************************************************!*\
  !*** ./src/app/+hub/datalink/datalink-edit/output-columns/index.ts ***!
  \*********************************************************************/
/*! exports provided: OutputColumnComponent, OutputColumnsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _output_column_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./output-column.component */ "./src/app/+hub/datalink/datalink-edit/output-columns/output-column.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OutputColumnComponent", function() { return _output_column_component__WEBPACK_IMPORTED_MODULE_0__["OutputColumnComponent"]; });

/* harmony import */ var _output_columns_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./output-columns.component */ "./src/app/+hub/datalink/datalink-edit/output-columns/output-columns.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OutputColumnsComponent", function() { return _output_columns_component__WEBPACK_IMPORTED_MODULE_1__["OutputColumnsComponent"]; });





/***/ }),

/***/ "./src/app/+hub/datalink/datalink-edit/output-columns/output-column.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/+hub/datalink/datalink-edit/output-columns/output-column.component.ts ***!
  \***************************************************************************************/
/*! exports provided: OutputColumnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutputColumnComponent", function() { return OutputColumnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _hub_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hub.service */ "./src/app/+hub/hub.service.ts");
/* harmony import */ var _datalink_edit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../datalink-edit.service */ "./src/app/+hub/datalink/datalink-edit/datalink-edit.service.ts");
/* harmony import */ var _hub_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hub.models */ "./src/app/+hub/hub.models.ts");
/* harmony import */ var _hub_lineage_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hub.lineage.models */ "./src/app/+hub/hub.lineage.models.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _logging__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../logging */ "./src/logging.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../+auth/auth.service */ "./src/app/+auth/auth.service.ts");
/* harmony import */ var _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/shared.models */ "./src/app/shared/shared.models.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

















function OutputColumnComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OutputColumnComponent_div_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.editColumn(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r0.column.logicalName + " " + ctx_r0.column.dataType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.mappingStatusInfoLineage.statusClass)("title", ctx_r0.mappingStatusInfoLineage.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.column.logicalName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.mappingStatusInfoImpact.statusClass)("title", ctx_r0.mappingStatusInfoImpact.name);
} }
function OutputColumnComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OutputColumnComponent_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.editColumn(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r1.column.logicalName + " " + ctx_r1.eTypeCode[ctx_r1.column.dataType]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.mappingStatusInfoLineage.statusClass)("title", ctx_r1.mappingStatusInfoLineage.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.column.logicalName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.mappingStatusInfoImpact.statusClass)("title", ctx_r1.mappingStatusInfoImpact.name);
} }
class OutputColumnComponent {
    constructor(authService, hubService, editDatalinkService, router, route) {
        this.authService = authService;
        this.hubService = hubService;
        this.editDatalinkService = editDatalinkService;
        this.router = router;
        this.route = route;
        this.column = null;
        this.inputTables = null;
        this.inputOutputDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.eMappingStatus = _hub_models__WEBPACK_IMPORTED_MODULE_3__["eMappingStatus"];
        this.logger = new _logging__WEBPACK_IMPORTED_MODULE_7__["LogFactory"]('output-column.component');
        this.logCount = 0;
        this.eTypeCode = _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eTypeCode"];
    }
    ngOnInit() {
        try {
            this._subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])(this.hubService.getHubCacheObservable(), this.editDatalinkService.hubFormsService.getCurrentFormObservable()).subscribe(result => {
                this.hubCache = result[0];
                this.datalinkForm = result[1];
                this.logger.LogC(() => `Subscription count: ${this.logCount++}`, _logging__WEBPACK_IMPORTED_MODULE_7__["eLogLevel"].Trace);
                this.childColumns = this.column.childColumns;
                this.refreshStatus();
            });
        }
        catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Output Column');
        }
    }
    ngOnChanges() {
        this.refreshStatus();
    }
    ngOnDestroy() {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
    }
    refreshStatus() {
        if (this.datalinkForm) {
            let columnUsage = new _hub_lineage_models__WEBPACK_IMPORTED_MODULE_4__["ColumnUsageNode"](_hub_lineage_models__WEBPACK_IMPORTED_MODULE_4__["eDatalinkObjectType"].Transform, _hub_lineage_models__WEBPACK_IMPORTED_MODULE_4__["eObjectUse"].Target, this.datalinkForm.value, this.column, null, this.datalinkTransformForm.value, null, _hub_models__WEBPACK_IMPORTED_MODULE_3__["eMappingStatus"].NotMapped, this.hubCache);
            this.mappingStatusLineage = columnUsage.createDatalinkLineage(false);
            this.mappingStatusInfoLineage = _hub_models__WEBPACK_IMPORTED_MODULE_3__["lineageMappingStatuses"].find(c => c.key === this.mappingStatusLineage);
            let mappingStatusImpact = columnUsage.createDatalinkImpact(true);
            if (this.mappingStatusLineage === _hub_models__WEBPACK_IMPORTED_MODULE_3__["eMappingStatus"].NotMapped && mappingStatusImpact !== _hub_models__WEBPACK_IMPORTED_MODULE_3__["eMappingStatus"].AutoGenerate) {
                mappingStatusImpact = _hub_models__WEBPACK_IMPORTED_MODULE_3__["eMappingStatus"].NotMapped;
            }
            this.mappingStatusInfoImpact = _hub_models__WEBPACK_IMPORTED_MODULE_3__["impactMappingStatuses"].find(c => c.key === mappingStatusImpact);
        }
    }
    editColumn() {
        if (this.column.key && (this.mappingStatusLineage === _hub_models__WEBPACK_IMPORTED_MODULE_3__["eMappingStatus"].Mapped
            || this.mappingStatusLineage === _hub_models__WEBPACK_IMPORTED_MODULE_3__["eMappingStatus"].MappedToNothing)) {
            this.router.navigate(['column', this.column.key], { relativeTo: this.route.parent });
        }
        else {
            this.authService.informationDialog('Can not edit column', 
            // tslint:disable-next-line:max-line-length
            'This column is not created by the current transform (i.e. a pass-through or target column).  To edit a column first create a mapping.');
        }
    }
}
OutputColumnComponent.ɵfac = function OutputColumnComponent_Factory(t) { return new (t || OutputColumnComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hub_service__WEBPACK_IMPORTED_MODULE_1__["HubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_datalink_edit_service__WEBPACK_IMPORTED_MODULE_2__["DatalinkEditService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"])); };
OutputColumnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OutputColumnComponent, selectors: [["output-column"]], inputs: { column: "column", datalinkTransformForm: "datalinkTransformForm", inputTables: "inputTables" }, outputs: { inputOutputDrop: "inputOutputDrop" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 2, consts: [["class", "list-group-item p-0 rounded-0", 3, "title", "click", 4, "ngIf"], [1, "list-group-item", "p-0", "rounded-0", 3, "title", "click"], [1, "d-flex", "flex-row"], [1, "input-group-text", "rounded-0", "border-0", "border-r1", 3, "ngClass", "title"], [1, "flex-fill", "input-group-text", "ellipsis-overflow", "rounded-0", "border-0"]], template: function OutputColumnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, OutputColumnComponent_div_0_Template, 6, 6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OutputColumnComponent_div_1_Template, 6, 6, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mappingStatusInfoLineage.key != ctx.eMappingStatus.Mapped);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mappingStatusInfoLineage.key == ctx.eMappingStatus.Mapped);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OutputColumnComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'output-column',
                templateUrl: './output-column.component.html'
            }]
    }], function () { return [{ type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] }, { type: _hub_service__WEBPACK_IMPORTED_MODULE_1__["HubService"] }, { type: _datalink_edit_service__WEBPACK_IMPORTED_MODULE_2__["DatalinkEditService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }]; }, { column: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], datalinkTransformForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], inputTables: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], inputOutputDrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/+hub/datalink/datalink-edit/output-columns/output-columns.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/+hub/datalink/datalink-edit/output-columns/output-columns.component.ts ***!
  \****************************************************************************************/
/*! exports provided: OutputColumnsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutputColumnsComponent", function() { return OutputColumnsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _shared_utils_dropzone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/utils/dropzone */ "./src/app/shared/utils/dropzone.ts");
/* harmony import */ var ngx_d_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-d-components */ "./node_modules/ngx-d-components/__ivy_ngcc__/fesm2015/ngx-d-components.js");
/* harmony import */ var _output_column_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./output-column.component */ "./src/app/+hub/datalink/datalink-edit/output-columns/output-column.component.ts");
/* harmony import */ var _shared_utils_isValid_filter_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/utils/isValid-filter.pipe */ "./src/app/shared/utils/isValid-filter.pipe.ts");
/* harmony import */ var _shared_utils_sort_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/utils/sort.pipe */ "./src/app/shared/utils/sort.pipe.ts");










function OutputColumnsComponent_div_0_li_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dropData", function OutputColumnsComponent_div_0_li_2_Template_li_dropData_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.newOutputDrop($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u00A0(Drop\u00A0Column) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zone", ctx_r2.allowMappingOutputs ? "input-column" : "");
} }
function OutputColumnsComponent_div_0_d_widget_section_3_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dropData", function OutputColumnsComponent_div_0_d_widget_section_3_div_1_Template_div_dropData_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const column_r8 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r10.newInputOutputDrop($event, column_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "output-column", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zone", ctx_r7.allowMappingOutputs ? "input-column" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datalinkTransformForm", ctx_r7.datalinkTransformForm)("column", column_r8);
} }
function OutputColumnsComponent_div_0_d_widget_section_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-widget-section", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OutputColumnsComponent_div_0_d_widget_section_3_div_1_Template, 2, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "isValidFilter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "fieldSort");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const columnGroup_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", columnGroup_r6.group)("padding", false)("showExpandButton", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 6, columnGroup_r6.columns, "position")));
} }
function OutputColumnsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OutputColumnsComponent_div_0_li_2_Template, 2, 1, "li", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, OutputColumnsComponent_div_0_d_widget_section_3_Template, 4, 9, "d-widget-section", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.allowMappingOutputs);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.columnGroups);
} }
class OutputColumnsComponent {
    constructor() {
        this.allowMappingOutputs = true;
        this.inputOutputDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.columns = [];
        this.columnGroups = [];
    }
    ngOnInit() {
    }
    ngOnChanges() {
        if (this._outputColumnsSubscribe) {
            this._outputColumnsSubscribe.unsubscribe();
        }
        this.refreshColumns(this.datalinkTransformForm.controls.runTime.value.transformColumns);
        this._outputColumnsSubscribe = this.datalinkTransformForm.controls.runTime.valueChanges.subscribe(() => {
            this.refreshColumns(this.datalinkTransformForm.controls.runTime.value.transformColumns);
        });
    }
    ngOnDestroy() {
        if (this._outputColumnsSubscribe) {
            this._outputColumnsSubscribe.unsubscribe();
        }
    }
    refreshColumns(columns) {
        let previousGroup = null;
        let columnGroups = [];
        let cols = null;
        columns
            .filter(c => c.isValid)
            .sort((a, b) => a.position - b.position)
            .forEach(column => {
            let group = column.columnGroup ? column.columnGroup : '(un-grouped)';
            if (group !== previousGroup) {
                if (cols) {
                    columnGroups.push({ group: previousGroup, columns: cols });
                }
                previousGroup = group;
                cols = [];
            }
            cols.push(column);
        });
        if (cols && cols.length > 0) {
            columnGroups.push({ group: previousGroup, columns: cols });
        }
        this.columnGroups = columnGroups;
    }
    // triggered when a source column is dropped onto the output column
    newOutputDrop(inputColumn) {
        let outputColumn = this.columns.find(c => c.name === inputColumn.name);
        this.inputOutputDrop.emit({
            inputColumn: inputColumn,
            outputColumn: outputColumn
        });
    }
    newInputOutputDrop(inputColumn, outputColumn) {
        this.inputOutputDrop.emit({
            inputColumn: inputColumn,
            outputColumn: outputColumn
        });
    }
}
OutputColumnsComponent.ɵfac = function OutputColumnsComponent_Factory(t) { return new (t || OutputColumnsComponent)(); };
OutputColumnsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OutputColumnsComponent, selectors: [["output-columns"]], inputs: { datalinkTransformForm: "datalinkTransformForm", allowMappingOutputs: "allowMappingOutputs" }, outputs: { inputOutputDrop: "inputOutputDrop" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [["cdkDropList", "", 4, "ngIf"], ["cdkDropList", ""], ["cdkDropList", "cdkDropList"], ["class", "list-group-item p-1 dexih-overflow b-0", "style", "height: 40px;", "title", "drop to create new mapping...", "dropZone", "", "dropAllowedClass", "drop-zone-green", 3, "zone", "dropData", 4, "ngIf"], [3, "title", "padding", "showExpandButton", 4, "ngFor", "ngForOf"], ["title", "drop to create new mapping...", "dropZone", "", "dropAllowedClass", "drop-zone-green", 1, "list-group-item", "p-1", "dexih-overflow", "b-0", 2, "height", "40px", 3, "zone", "dropData"], [3, "title", "padding", "showExpandButton"], ["dropZone", "", "dropAllowedClass", "drop-zone-green", 3, "zone", "dropData", 4, "ngFor", "ngForOf"], ["dropZone", "", "dropAllowedClass", "drop-zone-green", 3, "zone", "dropData"], [3, "datalinkTransformForm", "column"]], template: function OutputColumnsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, OutputColumnsComponent_div_0_Template, 4, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.datalinkTransformForm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _shared_utils_dropzone__WEBPACK_IMPORTED_MODULE_4__["DropZoneDirective"], ngx_d_components__WEBPACK_IMPORTED_MODULE_5__["ɵa"], _output_column_component__WEBPACK_IMPORTED_MODULE_6__["OutputColumnComponent"]], pipes: [_shared_utils_isValid_filter_pipe__WEBPACK_IMPORTED_MODULE_7__["IsValidFilterPipe"], _shared_utils_sort_pipe__WEBPACK_IMPORTED_MODULE_8__["SortPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OutputColumnsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'output-columns',
                templateUrl: './output-columns.component.html'
            }]
    }], function () { return []; }, { datalinkTransformForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], allowMappingOutputs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], inputOutputDrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/+hub/datalink/datalink-edit/parameters/index.ts":
/*!*****************************************************************!*\
  !*** ./src/app/+hub/datalink/datalink-edit/parameters/index.ts ***!
  \*****************************************************************/
/*! exports provided: InputValues, InputParameterComponent, OutputParameterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _input_parameter_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./input-parameter.component */ "./src/app/+hub/datalink/datalink-edit/parameters/input-parameter.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputValues", function() { return _input_parameter_component__WEBPACK_IMPORTED_MODULE_0__["InputValues"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "InputParameterComponent", function() { return _input_parameter_component__WEBPACK_IMPORTED_MODULE_0__["InputParameterComponent"]; });

/* harmony import */ var _output_parameter_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./output-parameter.component */ "./src/app/+hub/datalink/datalink-edit/parameters/output-parameter.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OutputParameterComponent", function() { return _output_parameter_component__WEBPACK_IMPORTED_MODULE_1__["OutputParameterComponent"]; });





/***/ }),

/***/ "./src/app/+hub/datalink/datalink-edit/parameters/input-parameter.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/+hub/datalink/datalink-edit/parameters/input-parameter.component.ts ***!
  \*************************************************************************************/
/*! exports provided: InputValues, InputParameterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputValues", function() { return InputValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputParameterComponent", function() { return InputParameterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _hub_remote_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hub.remote.models */ "./src/app/+hub/hub.remote.models.ts");
/* harmony import */ var _hub_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hub.service */ "./src/app/+hub/hub.service.ts");
/* harmony import */ var _hub_lineage_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hub.lineage.models */ "./src/app/+hub/hub.lineage.models.ts");
/* harmony import */ var _shared_shared_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/shared.models */ "./src/app/shared/shared.models.ts");
/* harmony import */ var _datalink_edit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../datalink-edit.service */ "./src/app/+hub/datalink/datalink-edit/datalink-edit.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_d_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-d-components */ "./node_modules/ngx-d-components/__ivy_ngcc__/fesm2015/ngx-d-components.js");
/* harmony import */ var ngx_d_markdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-d-markdown */ "./node_modules/ngx-d-markdown/__ivy_ngcc__/fesm2015/ngx-d-markdown.js");













function InputParameterComponent_form_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const inputParameterForm_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", (inputParameterForm_r4.value.runTime == null ? null : inputParameterForm_r4.value.runTime.functionParameter == null ? null : inputParameterForm_r4.value.runTime.functionParameter.name) + "(" + ctx_r6.eTypeCode[ctx_r6.type.dataType] + ")", " ", ctx_r6.rank > 0 ? "[]" : "", " ");
} }
function InputParameterComponent_form_2_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "form-input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("border", false);
} }
function InputParameterComponent_form_2_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form-select", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("textValueChange", function InputParameterComponent_form_2_div_4_Template_form_select_textValueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.inputs[i_r5].staticValue = $event; })("textValueChange", function InputParameterComponent_form_2_div_4_Template_form_select_textValueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.updateStatic($event, i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("border", false)("items", ctx_r8.inputColumnGroups)("textValue", ctx_r8.inputs[i_r5].staticValue)("enableKeySelect", false)("enableTextEntry", ctx_r8.rank === 0)("enableTextEntryMatch", false)("setTextEntryToValue", false)("textEntryNote", ctx_r8.rank > 0 ? "Select an array type source (otherwise select add to build an array)" : "Select a column or enter a static value.")("textEntryItems", ctx_r8.inputs[i_r5].textItems)("errors", ctx_r8.errors[i_r5].datalinkColumn);
} }
const _c0 = function () { return { standalone: true }; };
function InputParameterComponent_form_2_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form-input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InputParameterComponent_form_2_div_5_Template_form_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.inputs[i_r5].staticValue = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("border", false)("ngModel", ctx_r9.inputs[i_r5].staticValue)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
} }
function InputParameterComponent_form_2_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "(" + ctx_r10.eTypeCode[ctx_r10.type.dataType] + ")", " ");
} }
function InputParameterComponent_form_2_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "form-select", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("border", false)("items", ctx_r11.typeCodes);
} }
function InputParameterComponent_form_2_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "form-checkbox", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("border", false);
} }
function InputParameterComponent_form_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InputParameterComponent_form_2_div_2_Template, 3, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, InputParameterComponent_form_2_div_3_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, InputParameterComponent_form_2_div_4_Template, 2, 10, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InputParameterComponent_form_2_div_5_Template, 2, 4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, InputParameterComponent_form_2_div_6_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, InputParameterComponent_form_2_div_7_Template, 2, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, InputParameterComponent_form_2_div_8_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const inputParameterForm_r4 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", inputParameterForm_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.allowNameSelect);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.allowNameSelect == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(inputParameterForm_r4.value.runTime == null ? null : inputParameterForm_r4.value.runTime.functionParameter == null ? null : inputParameterForm_r4.value.runTime.functionParameter.isLabel));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", inputParameterForm_r4.value.runTime == null ? null : inputParameterForm_r4.value.runTime.functionParameter == null ? null : inputParameterForm_r4.value.runTime.functionParameter.isLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.allowDataTypeSelect == false && ctx_r0.allowNameSelect == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.allowDataTypeSelect == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.allowDataTypeSelect == true);
} }
function InputParameterComponent_form_3_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form-select", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("textValueChange", function InputParameterComponent_form_3_Template_form_select_textValueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const i_r25 = ctx.index; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.updateNewColumn($event, i_r25); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const outputParameterForm_r24 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", outputParameterForm_r24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("border", false)("items", ctx_r1.outputTables)("enableKeySelect", false)("enableTextEntry", true)("setTextEntryToValue", false);
} }
function InputParameterComponent_div_4_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputParameterComponent_div_4_button_1_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r30.add(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r28.allowAdd);
} }
function InputParameterComponent_div_4_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InputParameterComponent_div_4_button_2_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r32.remove(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r29.allowRemove);
} }
function InputParameterComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, InputParameterComponent_div_4_button_1_Template, 2, 1, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InputParameterComponent_div_4_button_2_Template, 2, 1, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.allowAdd);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.allowRemove);
} }
function InputParameterComponent_small_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "markdown", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r3.inputParameterForms[0].value.runTime.functionParameter.description);
} }
class InputValues {
}
class InputParameterComponent {
    constructor(hubService, editDatalinkService) {
        this.hubService = hubService;
        this.editDatalinkService = editDatalinkService;
        this.allowDataTypeSelect = false;
        this.allowNameSelect = false;
        this.allowAdd = false;
        this.allowRemove = false;
        this.inputParameterForms = [];
        this.inputColumns = null;
        this.updateParameterName = false;
        this.rank = 0;
        this.nodeDatalinkColumnKey = null;
        this.outputParameterForms = null;
        this.outputColumns = null;
        this.datalinkTargets = null;
        this.variables = [];
        this.addParameter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.removeParameter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.eBasicType = _hub_remote_models__WEBPACK_IMPORTED_MODULE_1__["eBasicType"];
        this.typeCodes = _hub_remote_models__WEBPACK_IMPORTED_MODULE_1__["TypeCodes"];
        this.eTypeCode = _shared_shared_models__WEBPACK_IMPORTED_MODULE_4__["eTypeCode"];
        this.inputColumnGroups = [];
        this.inputs = [];
        this.ignoreChanges = false;
    }
    ngOnInit() {
        this.inputs = this.inputParameterForms.map(param => new InputValues());
        this.errors = this.inputParameterForms.map(a => this.editDatalinkService.hubFormsService.getFormErrorMessages(a, true));
        let io = new _hub_lineage_models__WEBPACK_IMPORTED_MODULE_3__["InputOutputColumns"]();
        if (this.nodeDatalinkColumnKey) {
            this.inputColumns = io.getAvailableColumns(this.inputColumns, this.nodeDatalinkColumnKey, 0);
        }
        if (this.rank > 0 && this.inputColumns) {
            let tables = [];
            this.inputColumns = this.inputColumns.filter(c => c.rank > 0);
        }
        if (this.inputColumns) {
            this.inputColumnGroups = this.editDatalinkService.getColumnGroups(this.inputColumns);
        }
        else {
            this.inputColumnGroups = [];
        }
        for (let i = 0; i < this.inputParameterForms.length; i++) {
            let inputParameter = this.inputParameterForms[i].value;
            if (inputParameter.datalinkColumn || inputParameter.value === null || inputParameter.value === undefined) {
                this.inputs[i].staticValue = '';
            }
            else {
                this.inputs[i].staticValue = inputParameter.value;
            }
            this.inputs[i].textItems = [];
            if (inputParameter.dataType === _shared_shared_models__WEBPACK_IMPORTED_MODULE_4__["eTypeCode"].Boolean) {
                this.inputs[i].textItems = this.inputs[i].textItems.concat(['true', 'false']);
                this.inputs[i].staticValue = this.inputs[i].staticValue.toString();
            }
            if (inputParameter['runTime'] && inputParameter['runTime'].functionParameter.listOfValues) {
                this.inputs[i].textItems = this.inputs[i].textItems.concat(inputParameter['runTime'].functionParameter.listOfValues);
            }
            this.inputs[i].textItems = this.inputs[i].textItems.concat(this.variables);
        }
        this.updateItems();
        for (let i = 0; i < this.inputParameterForms.length; i++) {
            let runTime = this.inputParameterForms[i].value.runTime;
            if (!runTime || !runTime.functionParameter || !runTime.functionParameter.listOfValues) {
                this.inputs[i].inputParameterSubscription = this.inputParameterForms[i].valueChanges.subscribe(() => {
                    if (!this.ignoreChanges) {
                        this.updateItems();
                        this.ignoreChanges = true;
                        if (this.inputParameterForms[i].controls.datalinkColumn.value) {
                            this.inputParameterForms[i].controls.value.setValue(null);
                        }
                        else {
                            this.inputParameterForms[i].controls.value.setValue(this.inputs[i].staticValue);
                        }
                        this.ignoreChanges = false;
                    }
                    this.errors[i] = this.editDatalinkService.hubFormsService.getFormErrorMessages(this.inputParameterForms[i], true);
                });
            }
            if (this.updateParameterName) {
                this.inputs[i].datalinkColumnSubscription
                    = this.inputParameterForms[i].controls.datalinkColumn.valueChanges.subscribe(value => {
                        if (value) {
                            this.inputParameterForms[i].controls.dataType.setValue(value.dataType);
                            this.inputParameterForms[i].controls.name.setValue(value.name);
                        }
                        else {
                            this.inputParameterForms[i].controls.dataType.setValue(_shared_shared_models__WEBPACK_IMPORTED_MODULE_4__["eTypeCode"].String);
                            this.inputParameterForms[i].controls.name.setValue('');
                        }
                        this.errors[i] = this.editDatalinkService.hubFormsService.getFormErrorMessages(this.inputParameterForms[i], true);
                    });
            }
        }
    }
    updateStatic(event, i) {
        this.inputParameterForms[i].controls.value.setValue(event);
    }
    ngOnDestroy() {
        if (this.inputs) {
            this.inputs.forEach(input => {
                if (input.datalinkColumnSubscription) {
                    input.datalinkColumnSubscription.unsubscribe();
                }
                if (input.inputParameterSubscription) {
                    input.inputParameterSubscription.unsubscribe();
                }
            });
        }
    }
    ngOnChanges() {
        let table = new _shared_shared_models__WEBPACK_IMPORTED_MODULE_4__["DexihTable"]();
        table.name = 'Output Columns';
        table.dexihTableColumns = this.outputColumns;
        this.outputTables = [table];
        if (this.datalinkTargets) {
            this.datalinkTargets.forEach(target => {
                this.outputTables.push(target['table']);
            });
        }
    }
    updateItems() {
        for (let i = 0; i < this.inputParameterForms.length; i++) {
            let inputParameter = this.inputParameterForms[i].value;
            this.type = new _hub_remote_models__WEBPACK_IMPORTED_MODULE_1__["TypeFunctions"](inputParameter.dataType, null, null, null);
            if (!this.allowDataTypeSelect && !this.allowNameSelect) {
                this.inputs[i].name = inputParameter.name + '(' + this.type.dataType + ')' + (this.rank > 0 ? '[]' : '');
            }
            else {
                this.inputs[i].name = inputParameter.name;
            }
        }
    }
    add() {
        this.addParameter.emit(this.inputParameterForms[0]);
    }
    remove() {
        this.removeParameter.emit(this.inputParameterForms[0]);
    }
    updateNewColumn(value, i) {
        let current = this.outputParameterForms[i].controls.targetDatalinkColumn.value;
        if (value && (!current || value !== current.name)) {
            if (!this.newColumn) {
                this.newColumn = new _shared_shared_models__WEBPACK_IMPORTED_MODULE_4__["DexihDatalinkColumn"]();
                this.newColumn.position = 1000 - this.newColumn.key;
                this.newColumn.key = this.hubService.getHubCache().getNextSequence();
            }
            this.newColumn.dataType = this.outputParameterForms[i].controls.dataType.value;
            this.newColumn.name = value;
            this.newColumn.logicalName = value;
            this.outputParameterForms[i].controls.datalinkColumn.setValue(this.newColumn);
            this.updateItems();
        }
    }
}
InputParameterComponent.ɵfac = function InputParameterComponent_Factory(t) { return new (t || InputParameterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hub_service__WEBPACK_IMPORTED_MODULE_2__["HubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_datalink_edit_service__WEBPACK_IMPORTED_MODULE_5__["DatalinkEditService"])); };
InputParameterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputParameterComponent, selectors: [["input-parameter"]], inputs: { allowDataTypeSelect: "allowDataTypeSelect", allowNameSelect: "allowNameSelect", allowAdd: "allowAdd", allowRemove: "allowRemove", inputParameterForms: "inputParameterForms", inputColumns: "inputColumns", updateParameterName: "updateParameterName", rank: "rank", nodeDatalinkColumnKey: "nodeDatalinkColumnKey", outputParameterForms: "outputParameterForms", outputColumns: "outputColumns", datalinkTargets: "datalinkTargets", variables: "variables" }, outputs: { addParameter: "addParameter", removeParameter: "removeParameter" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 6, vars: 4, consts: [[1, "input-group", "d-flex"], ["class", "flex-fill", 3, "formGroup", 4, "ngFor", "ngForOf"], ["class", "ml-1  flex-fill", 3, "formGroup", 4, "ngFor", "ngForOf"], ["class", "input-group-append flex-shrink-1 ml-1 ", 4, "ngIf"], ["class", "form-text text-muted", 4, "ngIf"], [1, "flex-fill", 3, "formGroup"], [1, "input-group"], ["class", "input-group-prepend", 4, "ngIf"], ["class", "form-control p-0", 4, "ngIf"], ["class", "input-group-text", 4, "ngIf"], ["class", "form-control", 4, "ngIf"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "form-control", "p-0"], ["formControlName", "name", "type", "text", "placeholder", "Enter a name for the parameter", 3, "border"], ["formControlName", "datalinkColumn", "parentName", "group", "childItems", "columns", "itemKey", "key", "itemName", "logicalName", "textEntryItemsTitle", "Variables", 3, "border", "items", "textValue", "enableKeySelect", "enableTextEntry", "enableTextEntryMatch", "setTextEntryToValue", "textEntryNote", "textEntryItems", "errors", "textValueChange"], ["type", "text", "placeholder", "Enter a static value.", 3, "border", "ngModel", "ngModelOptions", "ngModelChange"], ["formControlName", "dataType", "itemKey", "key", "itemName", "name", 3, "border", "items"], [1, "form-control"], ["label", "Allow Null", "formControlName", "allowNull", 3, "border"], [1, "ml-1", "flex-fill", 3, "formGroup"], ["formControlName", "datalinkColumn", "parentName", "name", "childItems", "dexihTableColumns", "itemKey", "key", "itemName", "logicalName", "textEntryNote", "Enter new column name, or select existing", 1, "form-control", "p-0", 3, "border", "items", "enableKeySelect", "enableTextEntry", "setTextEntryToValue", "textValueChange"], [1, "input-group-append", "flex-shrink-1", "ml-1"], ["class", "btn btn-light", "type", "button", "value", "Add", 3, "disabled", "click", 4, "ngIf"], ["class", "btn btn-light", "type", "button", "value", "Remove", 3, "disabled", "click", 4, "ngIf"], ["type", "button", "value", "Add", 1, "btn", "btn-light", 3, "disabled", "click"], [1, "fa", "fa-plus-square-o"], ["type", "button", "value", "Remove", 1, "btn", "btn-light", 3, "disabled", "click"], [1, "fa", "fa-minus-square-o"], [1, "form-text", "text-muted"], [3, "data"]], template: function InputParameterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, InputParameterComponent_form_2_Template, 9, 8, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, InputParameterComponent_form_3_Template, 2, 6, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, InputParameterComponent_div_4_Template, 3, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, InputParameterComponent_small_5_Template, 2, 1, "small", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.inputParameterForms);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.outputParameterForms);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.allowAdd && ctx.allowRemove);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.allowAdd && (ctx.inputParameterForms[0].value.runTime == null ? null : ctx.inputParameterForms[0].value.runTime.functionParameter == null ? null : ctx.inputParameterForms[0].value.runTime.functionParameter.description));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroupDirective"], ngx_d_components__WEBPACK_IMPORTED_MODULE_8__["DFormInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControlName"], ngx_d_components__WEBPACK_IMPORTED_MODULE_8__["DFormSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], ngx_d_components__WEBPACK_IMPORTED_MODULE_8__["DFormCheckboxComponent"], ngx_d_markdown__WEBPACK_IMPORTED_MODULE_9__["DMarkdownComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputParameterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'input-parameter',
                templateUrl: './input-parameter.component.html'
            }]
    }], function () { return [{ type: _hub_service__WEBPACK_IMPORTED_MODULE_2__["HubService"] }, { type: _datalink_edit_service__WEBPACK_IMPORTED_MODULE_5__["DatalinkEditService"] }]; }, { allowDataTypeSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], allowNameSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], allowAdd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], allowRemove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], inputParameterForms: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], inputColumns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], updateParameterName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rank: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], nodeDatalinkColumnKey: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], outputParameterForms: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], outputColumns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], datalinkTargets: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], variables: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], addParameter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], removeParameter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/+hub/datalink/datalink-edit/parameters/output-parameter.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/+hub/datalink/datalink-edit/parameters/output-parameter.component.ts ***!
  \**************************************************************************************/
/*! exports provided: OutputParameterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutputParameterComponent", function() { return OutputParameterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _hub_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hub.service */ "./src/app/+hub/hub.service.ts");
/* harmony import */ var _hub_remote_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hub.remote.models */ "./src/app/+hub/hub.remote.models.ts");
/* harmony import */ var _shared_shared_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/shared.models */ "./src/app/shared/shared.models.ts");
/* harmony import */ var _datalink_edit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../datalink-edit.service */ "./src/app/+hub/datalink/datalink-edit/datalink-edit.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_d_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-d-components */ "./node_modules/ngx-d-components/__ivy_ngcc__/fesm2015/ngx-d-components.js");
/* harmony import */ var ngx_d_markdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-d-markdown */ "./node_modules/ngx-d-markdown/__ivy_ngcc__/fesm2015/ngx-d-markdown.js");













function OutputParameterComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", (ctx_r0.outputParameterForm.value.runTime == null ? null : ctx_r0.outputParameterForm.value.runTime.functionParameter == null ? null : ctx_r0.outputParameterForm.value.runTime.functionParameter.name) + "(" + ctx_r0.eTypeCode[ctx_r0.type.dataType] + ")", " ", ctx_r0.rank > 0 ? "[]" : "", " ");
} }
function OutputParameterComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.outputParameterForm.value.runTime == null ? null : ctx_r1.outputParameterForm.value.runTime.functionParameter == null ? null : ctx_r1.outputParameterForm.value.runTime.functionParameter.name, " ");
} }
function OutputParameterComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "form-input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("border", false);
} }
function OutputParameterComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", "(" + ctx_r3.eTypeCode[ctx_r3.type.dataType] + ")", " ");
} }
function OutputParameterComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "form-select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("border", false)("items", ctx_r4.typeCodes);
} }
function OutputParameterComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "form-checkbox", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("border", false);
} }
function OutputParameterComponent_button_12_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OutputParameterComponent_button_12_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.fixDataType(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OutputParameterComponent_small_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "markdown", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r7.outputParameterForm.value.runTime.functionParameter.description);
} }
class OutputParameterComponent {
    constructor(hubService, editDatalinkService) {
        this.hubService = hubService;
        this.editDatalinkService = editDatalinkService;
        this.allowDataTypeSelect = false;
        this.allowNameSelect = false;
        this.allowAdd = false;
        this.allowRemove = false;
        this.outputParameterForm = null;
        this.outputColumns = null;
        this.datalinkTargets = null;
        this.updateParameterName = false;
        this.rank = 0;
        this.addParameter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.removeParameter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hasChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.eBasicType = _hub_remote_models__WEBPACK_IMPORTED_MODULE_3__["eBasicType"];
        this.eTypeCode = _shared_shared_models__WEBPACK_IMPORTED_MODULE_4__["eTypeCode"];
        this.typeCodes = _hub_remote_models__WEBPACK_IMPORTED_MODULE_3__["TypeCodes"];
        this.ignoreChanges = false;
    }
    ngOnInit() {
        this.updateItems();
        this.errors = this.editDatalinkService.hubFormsService.getFormErrorMessages(this.outputParameterForm, true);
        if (this.updateParameterName) {
            this._datalinkColumnSubscription = this.outputParameterForm.controls.datalinkColumn.valueChanges.subscribe(value => {
                this.outputParameterForm.controls.dataType.setValue(value.dataType);
                this.outputParameterForm.controls.name.setValue(value.name);
            });
        }
        this._parameterSubscription = this.outputParameterForm.valueChanges.subscribe(param => {
            this.errors = this.editDatalinkService.hubFormsService.getFormErrorMessages(this.outputParameterForm, true);
            this.updateItems();
        });
        this._dataTypeSubscription = this.outputParameterForm.controls.dataType.valueChanges.subscribe(dataType => {
            if (this.newColumn) {
                this.newColumn.dataType = dataType;
            }
        });
    }
    ngOnChanges() {
        let table = new _shared_shared_models__WEBPACK_IMPORTED_MODULE_4__["DexihTable"]();
        table.name = 'Output Columns';
        table.dexihTableColumns = this.outputColumns;
        this.outputTables = [table];
        if (this.datalinkTargets) {
            this.datalinkTargets.forEach(target => {
                this.outputTables.push(target['table']);
            });
        }
    }
    ngOnDestroy() {
        if (this._datalinkColumnSubscription) {
            this._datalinkColumnSubscription.unsubscribe();
        }
        if (this._parameterSubscription) {
            this._parameterSubscription.unsubscribe();
        }
        if (this._dataTypeSubscription) {
            this._dataTypeSubscription.unsubscribe();
        }
    }
    updateItems() {
        this.type = new _hub_remote_models__WEBPACK_IMPORTED_MODULE_3__["TypeFunctions"](this.outputParameterForm.value.dataType, null, null, null);
    }
    add() {
        this.addParameter.emit(this.outputParameterForm);
    }
    remove() {
        this.removeParameter.emit(this.outputParameterForm);
    }
    fixDataType() {
        const column = this.outputParameterForm.controls.datalinkColumn.value;
        column.dataType = this.outputParameterForm.controls.dataType.value;
    }
    updateNewColumn(value) {
        let current = this.outputParameterForm.controls.datalinkColumn.value;
        if (value && (!current || current.name !== value)) {
            if (!this.newColumn) {
                this.newColumn = new _shared_shared_models__WEBPACK_IMPORTED_MODULE_4__["DexihDatalinkColumn"]();
                this.newColumn.key = this.hubService.getHubCache().getNextSequence();
                this.newColumn.position = 1000 - this.newColumn.key;
            }
            this.newColumn.dataType = this.outputParameterForm.controls.dataType.value;
            this.newColumn.allowDbNull = true;
            this.newColumn.name = value;
            this.newColumn.logicalName = value;
            this.newColumn.rank = this.rank;
            this.newColumn.columnGroup = 'mapping';
            this.outputParameterForm.controls.datalinkColumn.setValue(this.newColumn);
            this.updateItems();
        }
    }
}
OutputParameterComponent.ɵfac = function OutputParameterComponent_Factory(t) { return new (t || OutputParameterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hub_service__WEBPACK_IMPORTED_MODULE_2__["HubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_datalink_edit_service__WEBPACK_IMPORTED_MODULE_5__["DatalinkEditService"])); };
OutputParameterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OutputParameterComponent, selectors: [["output-parameter"]], inputs: { allowDataTypeSelect: "allowDataTypeSelect", allowNameSelect: "allowNameSelect", allowAdd: "allowAdd", allowRemove: "allowRemove", outputParameterForm: "outputParameterForm", outputColumns: "outputColumns", datalinkTargets: "datalinkTargets", updateParameterName: "updateParameterName", rank: "rank" }, outputs: { addParameter: "addParameter", removeParameter: "removeParameter", hasChanged: "hasChanged" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 18, vars: 17, consts: [[1, "mb-1", 3, "formGroup"], [1, "input-group"], ["class", "input-group-prepend", 4, "ngIf"], ["class", "form-control p-0", 4, "ngIf"], ["class", "input-group-text", 4, "ngIf"], [1, "form-control", "p-0"], ["formControlName", "datalinkColumn", "parentName", "name", "childItems", "dexihTableColumns", "itemKey", "key", "itemName", "logicalName", "textEntryNote", "Enter new column name, or select existing", 3, "border", "items", "enableKeySelect", "enableTextEntry", "setTextEntryToValue", "errors", "textValueChange"], ["class", "form-control", 4, "ngIf"], [1, "input-group-append"], ["class", "btn btn-danger", "type", "button", "title", "fix target column datatype", 3, "click", 4, "ngIf"], ["type", "button", "value", "Add", 1, "btn", "btn-light", 3, "disabled", "click"], [1, "fa", "fa-plus-square-o"], ["type", "button", "value", "Remove", 1, "btn", "btn-light", 3, "disabled", "click"], [1, "fa", "fa-minus-square-o"], ["class", "form-text text-muted", 4, "ngIf"], [1, "input-group-prepend"], [1, "input-group-text"], ["formControlName", "name", "type", "text", "name", "name", "placeholder", "Enter a name for the parameter", 3, "border"], [1, "input-group-btn", 2, "width", "0px"], ["formControlName", "dataType", "itemKey", "key", "itemName", "name", 3, "border", "items"], [1, "form-control"], ["label", "Allow Null", "formControlName", "allowNull", 3, "border"], ["type", "button", "title", "fix target column datatype", 1, "btn", "btn-danger", 3, "click"], [1, "fa", "fa-medkit"], [1, "form-text", "text-muted"], [3, "data"]], template: function OutputParameterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, OutputParameterComponent_div_3_Template, 3, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, OutputParameterComponent_div_4_Template, 3, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, OutputParameterComponent_div_5_Template, 3, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, OutputParameterComponent_div_6_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("textValueChange", function OutputParameterComponent_Template_form_select_textValueChange_8_listener($event) { return ctx.updateNewColumn($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, OutputParameterComponent_div_9_Template, 2, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, OutputParameterComponent_div_10_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, OutputParameterComponent_button_12_Template, 2, 0, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OutputParameterComponent_Template_button_click_13_listener() { return ctx.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OutputParameterComponent_Template_button_click_15_listener() { return ctx.remove(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, OutputParameterComponent_small_17_Template, 2, 1, "small", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.outputParameterForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.allowDataTypeSelect == false && ctx.allowNameSelect == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.allowDataTypeSelect == true && ctx.allowNameSelect == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.allowNameSelect);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.allowDataTypeSelect == false && ctx.allowNameSelect == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("border", false)("items", ctx.outputTables)("enableKeySelect", false)("enableTextEntry", true)("setTextEntryToValue", false)("errors", ctx.errors.datalinkColumn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.allowDataTypeSelect == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.allowDataTypeSelect == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.outputParameterForm.controls.datalinkColumn == null ? null : ctx.outputParameterForm.controls.datalinkColumn.value) && ctx.outputParameterForm.controls.dataType.value !== (ctx.outputParameterForm.controls.datalinkColumn == null ? null : ctx.outputParameterForm.controls.datalinkColumn.value == null ? null : ctx.outputParameterForm.controls.datalinkColumn.value.dataType));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.allowAdd);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.allowRemove);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.outputParameterForm.value.runTime == null ? null : ctx.outputParameterForm.value.runTime.functionParameter == null ? null : ctx.outputParameterForm.value.runTime.functionParameter.description);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], ngx_d_components__WEBPACK_IMPORTED_MODULE_7__["DFormSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], ngx_d_components__WEBPACK_IMPORTED_MODULE_7__["DFormInputComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_7__["DFormCheckboxComponent"], ngx_d_markdown__WEBPACK_IMPORTED_MODULE_8__["DMarkdownComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OutputParameterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'output-parameter',
                templateUrl: './output-parameter.component.html'
            }]
    }], function () { return [{ type: _hub_service__WEBPACK_IMPORTED_MODULE_2__["HubService"] }, { type: _datalink_edit_service__WEBPACK_IMPORTED_MODULE_5__["DatalinkEditService"] }]; }, { allowDataTypeSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], allowNameSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], allowAdd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], allowRemove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], outputParameterForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], outputColumns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], datalinkTargets: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], updateParameterName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], rank: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], addParameter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], removeParameter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], hasChanged: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/+hub/datalink/datalink-edit/preview-data/index.ts":
/*!*******************************************************************!*\
  !*** ./src/app/+hub/datalink/datalink-edit/preview-data/index.ts ***!
  \*******************************************************************/
/*! exports provided: PreviewDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _preview_data_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preview-data.component */ "./src/app/+hub/datalink/datalink-edit/preview-data/preview-data.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PreviewDataComponent", function() { return _preview_data_component__WEBPACK_IMPORTED_MODULE_0__["PreviewDataComponent"]; });




/***/ }),

/***/ "./src/app/+hub/datalink/datalink-edit/preview-data/preview-data.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/+hub/datalink/datalink-edit/preview-data/preview-data.component.ts ***!
  \************************************************************************************/
/*! exports provided: PreviewDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewDataComponent", function() { return PreviewDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _hub_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hub.service */ "./src/app/+hub/hub.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../+auth/auth.service */ "./src/app/+auth/auth.service.ts");
/* harmony import */ var _datalink_edit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../datalink-edit.service */ "./src/app/+hub/datalink/datalink-edit/datalink-edit.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/shared.models */ "./src/app/shared/shared.models.ts");
/* harmony import */ var ngx_d_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-d-components */ "./node_modules/ngx-d-components/__ivy_ngcc__/fesm2015/ngx-d-components.js");
/* harmony import */ var _widgets_preview_data_preview_data_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../widgets/preview-data/preview-data.component */ "./src/app/+hub/widgets/preview-data/preview-data.component.ts");














function PreviewDataComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button-close", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PreviewDataComponent_ng_template_1_Template_d_button_close_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PreviewDataComponent {
    constructor(hubService, authService, editDatalinkService, route) {
        this.hubService = hubService;
        this.authService = authService;
        this.editDatalinkService = editDatalinkService;
        this.route = route;
        this.eDataObjectType = _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eDataObjectType"];
    }
    ngOnInit() {
        try {
            this._subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])(this.route.data, this.route.params, this.hubService.getHubCacheObservable(), this.hubService.getRemoteAgentObservable(), this.editDatalinkService.hubFormsService.getCurrentFormObservable()).subscribe(result => {
                let data = result[0];
                let params = result[1];
                this.hubCache = result[2];
                this.datalinkForm = result[4];
                this.action = data['action'];
                this.pageTitle = data['pageTitle'];
                // load the cache first
                if (this.hubCache.isLoaded()) {
                    // get the hub key from the route data, and update the service.
                    this.datalinkTransformKey = +params['datalinkTransformKey'];
                }
            });
        }
        catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Preview Transform Data');
        }
    }
    ngOnDestroy() {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
    }
    close() {
        this.authService.navigateUp();
    }
}
PreviewDataComponent.ɵfac = function PreviewDataComponent_Factory(t) { return new (t || PreviewDataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hub_service__WEBPACK_IMPORTED_MODULE_1__["HubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_datalink_edit_service__WEBPACK_IMPORTED_MODULE_3__["DatalinkEditService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"])); };
PreviewDataComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PreviewDataComponent, selectors: [["datalink-preview-data"]], decls: 4, vars: 5, consts: [["title", "Preview Transform Data", 3, "showExpandButton", "padding"], ["header", ""], [3, "datalink", "datalinkTransformKey", "viewSource"], [3, "click"]], template: function PreviewDataComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-widget-section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PreviewDataComponent_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "preview-data", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showExpandButton", true)("padding", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datalink", ctx.datalinkForm == null ? null : ctx.datalinkForm.value)("datalinkTransformKey", ctx.datalinkTransformKey)("viewSource", ctx.eDataObjectType.Datalink);
    } }, directives: [ngx_d_components__WEBPACK_IMPORTED_MODULE_7__["ɵa"], _widgets_preview_data_preview_data_component__WEBPACK_IMPORTED_MODULE_8__["PreviewDataComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_7__["DButtonCloseComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreviewDataComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'datalink-preview-data',
                templateUrl: './preview-data.component.html'
            }]
    }], function () { return [{ type: _hub_service__WEBPACK_IMPORTED_MODULE_1__["HubService"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _datalink_edit_service__WEBPACK_IMPORTED_MODULE_3__["DatalinkEditService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/+hub/datalink/datalink-edit/preview-table/index.ts":
/*!********************************************************************!*\
  !*** ./src/app/+hub/datalink/datalink-edit/preview-table/index.ts ***!
  \********************************************************************/
/*! exports provided: PreviewTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _preview_table_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./preview-table.component */ "./src/app/+hub/datalink/datalink-edit/preview-table/preview-table.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PreviewTableComponent", function() { return _preview_table_component__WEBPACK_IMPORTED_MODULE_0__["PreviewTableComponent"]; });




/***/ }),

/***/ "./src/app/+hub/datalink/datalink-edit/preview-table/preview-table.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/+hub/datalink/datalink-edit/preview-table/preview-table.component.ts ***!
  \**************************************************************************************/
/*! exports provided: PreviewTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewTableComponent", function() { return PreviewTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _hub_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hub.service */ "./src/app/+hub/hub.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../+auth/auth.service */ "./src/app/+auth/auth.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_shared_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/shared.models */ "./src/app/shared/shared.models.ts");
/* harmony import */ var ngx_d_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-d-components */ "./node_modules/ngx-d-components/__ivy_ngcc__/fesm2015/ngx-d-components.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _widgets_preview_data_preview_data_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../widgets/preview-data/preview-data.component */ "./src/app/+hub/widgets/preview-data/preview-data.component.ts");













function PreviewTableComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button-close", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PreviewTableComponent_ng_template_1_Template_d_button_close_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PreviewTableComponent_preview_data_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "preview-data", 4);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("key", ctx_r2.tableKey)("viewSource", ctx_r2.eDataObjectType.Table);
} }
function PreviewTableComponent_preview_data_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "preview-data", 4);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("key", ctx_r3.datalinkKey)("viewSource", ctx_r3.eDataObjectType.Datalink);
} }
class PreviewTableComponent {
    constructor(hubService, authService, route) {
        this.hubService = hubService;
        this.authService = authService;
        this.route = route;
        this.eDataObjectType = _shared_shared_models__WEBPACK_IMPORTED_MODULE_5__["eDataObjectType"];
    }
    ngOnInit() {
        try {
            this._subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(this.route.data, this.route.params, this.hubService.getHubCacheObservable()).subscribe(result => {
                let data = result[0];
                let params = result[1];
                this.hubCache = result[2];
                this.action = data['action'];
                this.pageTitle = data['pageTitle'];
                // load the cache first
                if (this.hubCache.isLoaded()) {
                    // get the hub key from the route data, and update the service.
                    if (params['tableKey']) {
                        this.tableKey = +params['tableKey'];
                        let table = this.hubCache.getTable(this.tableKey);
                        if (table) {
                            this.name = table.name;
                        }
                    }
                    else {
                        this.datalinkKey = +params['datalinkKey'];
                        let datalink = this.hubCache.hub.dexihDatalinks.find(c => c.key == this.datalinkKey);
                        if (datalink) {
                            this.name = datalink.name;
                        }
                    }
                }
            });
        }
        catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Preview Table Data');
        }
    }
    ngOnDestroy() {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
    }
    close() {
        this.authService.navigateUp();
    }
}
PreviewTableComponent.ɵfac = function PreviewTableComponent_Factory(t) { return new (t || PreviewTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hub_service__WEBPACK_IMPORTED_MODULE_1__["HubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
PreviewTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PreviewTableComponent, selectors: [["datalink-preview-table"]], decls: 5, vars: 5, consts: [[3, "title", "showExpandButton", "padding"], ["header", ""], [3, "key", "viewSource", 4, "ngIf"], [3, "click"], [3, "key", "viewSource"]], template: function PreviewTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-widget-section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PreviewTableComponent_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PreviewTableComponent_preview_data_3_Template, 1, 2, "preview-data", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PreviewTableComponent_preview_data_4_Template, 1, 2, "preview-data", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Preview " + ctx.name)("showExpandButton", false)("padding", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tableKey);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.datalinkKey);
    } }, directives: [ngx_d_components__WEBPACK_IMPORTED_MODULE_6__["ɵa"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], ngx_d_components__WEBPACK_IMPORTED_MODULE_6__["DButtonCloseComponent"], _widgets_preview_data_preview_data_component__WEBPACK_IMPORTED_MODULE_8__["PreviewDataComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreviewTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'datalink-preview-table',
                templateUrl: './preview-table.component.html'
            }]
    }], function () { return [{ type: _hub_service__WEBPACK_IMPORTED_MODULE_1__["HubService"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/+hub/datalink/datalink-edit/profile-rules/profile-rules.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/+hub/datalink/datalink-edit/profile-rules/profile-rules.component.ts ***!
  \**************************************************************************************/
/*! exports provided: DatalinkEditProfileRulesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatalinkEditProfileRulesComponent", function() { return DatalinkEditProfileRulesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _hub_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hub.service */ "./src/app/+hub/hub.service.ts");
/* harmony import */ var _datalink_edit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../datalink-edit.service */ "./src/app/+hub/datalink/datalink-edit/datalink-edit.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../+auth/auth.service */ "./src/app/+auth/auth.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/shared.models */ "./src/app/shared/shared.models.ts");
/* harmony import */ var ngx_d_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-d-components */ "./node_modules/ngx-d-components/__ivy_ngcc__/fesm2015/ngx-d-components.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_d_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-d-table */ "./node_modules/ngx-d-table/__ivy_ngcc__/fesm2015/ngx-d-table.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
















function DatalinkEditProfileRulesComponent_form_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "form-input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.datalinkForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autocapitalize", true);
} }
function DatalinkEditProfileRulesComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form-checkbox", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DatalinkEditProfileRulesComponent_ng_template_3_Template_form_checkbox_ngModelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const item_r3 = ctx.item; return item_r3.detailedResults = $event; })("change", function DatalinkEditProfileRulesComponent_ng_template_3_Template_form_checkbox_change_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const item_r3 = ctx.item; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.updateProfileRule(item_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", item_r3.detailedResults);
} }
class DatalinkEditProfileRulesComponent {
    constructor(hubService, authService, editDatalinkService, route, router) {
        this.hubService = hubService;
        this.authService = authService;
        this.editDatalinkService = editDatalinkService;
        this.route = route;
        this.router = router;
        this.selectedProfileRules = new Array();
        this.columns = [
            { name: 'name', title: 'Profile Name', format: '' },
            { name: 'description', title: 'Description', format: '' }
        ];
        this._tableData = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](null);
        this.tableData = this._tableData.asObservable();
    }
    ngOnInit() {
        try {
            this._subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])(this.hubService.getHubCacheObservable(), this.editDatalinkService.hubFormsService.getCurrentFormObservable()).subscribe((result) => __awaiter(this, void 0, void 0, function* () {
                this.hubCache = result[0];
                this.datalinkForm = result[1];
                if (this.datalinkForm) {
                    // load the cache first
                    if (this.hubCache.isLoaded()) {
                        this.selectedProfileRules = this.datalinkForm.value.dexihDatalinkProfiles;
                        let profileRules = (yield this.hubService.GetFunctionsByType(_shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eFunctionType"].Profile))
                            .map(profile => {
                            let profileRuleForm = this.selectedProfileRules.find(c => c.functionAssemblyName === profile.functionAssemblyName
                                && c.functionClassName === profile.functionClassName
                                && c.functionMethodName === profile.functionMethodName);
                            return {
                                name: profile.name,
                                description: profile.description,
                                functionAssemblyName: profile.functionAssemblyName,
                                functionClassName: profile.functionClassName,
                                functionMethodName: profile.functionMethodName,
                                detailedResults: profileRuleForm ? profileRuleForm.detailedResults : false
                            };
                        });
                        this._tableData.next(profileRules);
                    }
                }
            }));
        }
        catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Edit Custom Function');
        }
    }
    updateProfileRules() {
        if (this.datalinkForm) {
            let profiles = this.datalinkForm.controls.dexihDatalinkProfiles;
            // reset existing profiles.
            profiles.controls.forEach(profile => {
                let profileFormGroup = profile;
                profileFormGroup.controls.isValid.setValue(false);
            });
            // add the selected profiles, with isValid = true
            this.selectedProfileRules.forEach(profile => {
                let profileRuleForm = profiles.controls.find(c => c.value.functionAssemblyName === profile.functionAssemblyName
                    && c.value.functionClassName === profile.functionClassName
                    && c.value.functionMethodName === profile.functionMethodName);
                if (!profileRuleForm) {
                    let profileRule = new _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["DexihDatalinkProfile"]();
                    profileRule.key = this.hubCache.getNextSequence();
                    profileRule.datalinkKey = this.datalinkForm.value.key;
                    profileRule.functionAssemblyName = profile.functionAssemblyName;
                    profileRule.functionClassName = profile.functionClassName;
                    profileRule.functionMethodName = profile.functionMethodName;
                    profileRule.detailedResults = profile.detailedResults;
                    profileRule.isValid = true;
                    profileRuleForm = this.editDatalinkService.hubFormsService.datalinkProfileFormGroup(profileRule);
                    profiles.push(profileRuleForm);
                }
                else {
                    profileRuleForm.controls.isValid.setValue(true);
                }
            });
            for (let i = profiles.controls.length - 1; i >= 0; i--) {
                if (!profiles.controls[i].value.isValid) {
                    profiles.removeAt(i);
                }
            }
        }
    }
    updateProfileRule(profile) {
        let profiles = this.datalinkForm.controls.dexihDatalinkProfiles;
        let profileRuleForm = profiles.controls.find(c => c.value.functionAssemblyName === profile.functionAssemblyName
            && c.value.functionClassName === profile.functionClassName
            && c.value.functionMethodName === profile.functionMethodName);
        profileRuleForm.controls.detailedResults.setValue(profile.detailedResults);
        this.editDatalinkService.hubFormsService.hasChanged = true;
    }
    ngOnDestroy() {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
        this.updateProfileRules();
    }
    hasChanged(items) {
        if (items) {
            this.selectedProfileRules = items;
        }
        this.updateProfileRules();
        this.editDatalinkService.hubFormsService.hasChanged = true;
    }
}
DatalinkEditProfileRulesComponent.ɵfac = function DatalinkEditProfileRulesComponent_Factory(t) { return new (t || DatalinkEditProfileRulesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hub_service__WEBPACK_IMPORTED_MODULE_2__["HubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_datalink_edit_service__WEBPACK_IMPORTED_MODULE_3__["DatalinkEditService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
DatalinkEditProfileRulesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DatalinkEditProfileRulesComponent, selectors: [["profile-rules"]], decls: 5, vars: 8, consts: [["title", "Profile Rules", 3, "showExpandButton"], [3, "formGroup", 4, "ngIf"], ["keyColumn", "functionMethodName", 3, "enableMultiSelect", "enableManualSort", "enableFilter", "columns", "dataObservable", "selectedItems", "selectedItemsChange", "onSelectedChange"], ["select", "rowAction"], ["rowAction", ""], [3, "formGroup"], ["label", "Profile Table Name", "formControlName", "profileTableName", "placeholder", "Enter the profile table name.", "iconClass", "fa fa-list", "note", "Specify the table name in the 'Audit Connection' to send the profile results to.  If this table does not exist, it will be created on first run.", 3, "autocapitalize"], ["label", "Capture Detailed Distribution", "name", "detailedResults", 3, "ngModel", "ngModelChange", "change"]], template: function DatalinkEditProfileRulesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-widget-section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DatalinkEditProfileRulesComponent_form_1_Template, 4, 2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "d-table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedItemsChange", function DatalinkEditProfileRulesComponent_Template_d_table_selectedItemsChange_2_listener($event) { return ctx.selectedProfileRules = $event; })("onSelectedChange", function DatalinkEditProfileRulesComponent_Template_d_table_onSelectedChange_2_listener($event) { return ctx.hasChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DatalinkEditProfileRulesComponent_ng_template_3_Template, 1, 1, "ng-template", 3, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showExpandButton", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.datalinkForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("enableMultiSelect", true)("enableManualSort", false)("enableFilter", false)("columns", ctx.columns)("dataObservable", ctx.tableData)("selectedItems", ctx.selectedProfileRules);
    } }, directives: [ngx_d_components__WEBPACK_IMPORTED_MODULE_7__["ɵa"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], ngx_d_table__WEBPACK_IMPORTED_MODULE_9__["DTableComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormGroupDirective"], ngx_d_components__WEBPACK_IMPORTED_MODULE_7__["DFormInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControlName"], ngx_d_components__WEBPACK_IMPORTED_MODULE_7__["DFormCheckboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatalinkEditProfileRulesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'profile-rules',
                templateUrl: './profile-rules.component.html'
            }]
    }], function () { return [{ type: _hub_service__WEBPACK_IMPORTED_MODULE_2__["HubService"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _datalink_edit_service__WEBPACK_IMPORTED_MODULE_3__["DatalinkEditService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/+hub/datalink/datalink-edit/properties/datalink-edit-properties.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/+hub/datalink/datalink-edit/properties/datalink-edit-properties.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: DatalinkEditPropertiesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatalinkEditPropertiesComponent", function() { return DatalinkEditPropertiesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _hub_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hub.service */ "./src/app/+hub/hub.service.ts");
/* harmony import */ var _datalink_edit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../datalink-edit.service */ "./src/app/+hub/datalink/datalink-edit/datalink-edit.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_shared_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/shared.models */ "./src/app/shared/shared.models.ts");
/* harmony import */ var ngx_d_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-d-components */ "./node_modules/ngx-d-components/__ivy_ngcc__/fesm2015/ngx-d-components.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _widgets_input_parameters_input_parameters_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../widgets/input-parameters/input-parameters.component */ "./src/app/+hub/widgets/input-parameters/input-parameters.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");














function DatalinkEditPropertiesComponent_form_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "form-select", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "form-input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "form-textarea", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "form-select", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "form-checkbox", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.datalinkForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r0.eDatalinkTypeItems)("enableFilter", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autocapitalize", true)("errors", ctx_r0.editDatalinkService.hubFormsService.formErrors.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showMarkdown", true)("errors", ctx_r0.editDatalinkService.hubFormsService.formErrors.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r0.eAlertLevelItems)("errors", ctx_r0.editDatalinkService.hubFormsService.formErrors.alertLevel)("enableFilter", false);
} }
class DatalinkEditPropertiesComponent {
    constructor(hubService, editDatalinkService, route) {
        this.hubService = hubService;
        this.editDatalinkService = editDatalinkService;
        this.route = route;
        this.eConnectionPurpose = _shared_shared_models__WEBPACK_IMPORTED_MODULE_5__["eConnectionPurpose"];
        this.eDatalinkTypeItems = _shared_shared_models__WEBPACK_IMPORTED_MODULE_5__["eDatalinkTypeItems"].filter(c => c.key > 0);
        this.eAlertLevelItems = _shared_shared_models__WEBPACK_IMPORTED_MODULE_5__["eAlertLevelItems"];
        this.eAlertLevel = _shared_shared_models__WEBPACK_IMPORTED_MODULE_5__["eAlertLevel"];
    }
    ngOnInit() {
        try {
            this._subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])(this.route.data, this.route.params, this.hubService.getHubCacheObservable(), this.editDatalinkService.hubFormsService.getCurrentFormObservable()).subscribe(result => {
                this.pageTitle = result[0]['pageTitle'];
                this.datalinkForm = result[3];
            });
        }
        catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Datalink Properties');
        }
    }
    ngOnDestroy() {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
    }
}
DatalinkEditPropertiesComponent.ɵfac = function DatalinkEditPropertiesComponent_Factory(t) { return new (t || DatalinkEditPropertiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hub_service__WEBPACK_IMPORTED_MODULE_2__["HubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_datalink_edit_service__WEBPACK_IMPORTED_MODULE_3__["DatalinkEditService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
DatalinkEditPropertiesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DatalinkEditPropertiesComponent, selectors: [["dexih-datalink-edit-properties-form"]], decls: 4, vars: 6, consts: [["title", "Properties", 3, "showExpandButton"], [3, "formGroup", 4, "ngIf"], ["title", "Input Parameters", 3, "showExpandButton"], [3, "showEdit", "parameters", "formsService"], [3, "formGroup"], ["label", "Datalink Type", "formControlName", "datalinkType", "itemKey", "key", "itemName", "description", "iconClass", "fa fa-database", "note", "Categorize the type of function this datalink is performing.", 3, "items", "enableFilter"], ["label", "Datalink Name", "formControlName", "name", "placeholder", "Enter the datalink name.", "iconClass", "fa fa-list", 3, "autocapitalize", "errors"], ["label", "Description", "formControlName", "description", "placeholder", "Enter the description.", 3, "showMarkdown", "errors"], ["label", "Alerting Level", "formControlName", "alertLevel", "itemKey", "key", "itemName", "description", "iconClass", "fa fa-bell", "note", "When alerts should be sent.", 3, "items", "errors", "enableFilter"], ["label", "Datalink is shared in the catalog to users with read access.", "formControlName", "isShared"]], template: function DatalinkEditPropertiesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-widget-section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DatalinkEditPropertiesComponent_form_1_Template, 12, 10, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "d-widget-section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input-parameters", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showExpandButton", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.datalinkForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showExpandButton", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showEdit", true)("parameters", ctx.datalinkForm.controls.parameters)("formsService", ctx.editDatalinkService.hubFormsService);
    } }, directives: [ngx_d_components__WEBPACK_IMPORTED_MODULE_6__["ɵa"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _widgets_input_parameters_input_parameters_component__WEBPACK_IMPORTED_MODULE_8__["InputParametersComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroupDirective"], ngx_d_components__WEBPACK_IMPORTED_MODULE_6__["DFormSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControlName"], ngx_d_components__WEBPACK_IMPORTED_MODULE_6__["DFormInputComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_6__["DFormTextAreaComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_6__["DFormCheckboxComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatalinkEditPropertiesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dexih-datalink-edit-properties-form',
                templateUrl: './datalink-edit-properties.component.html'
            }]
    }], function () { return [{ type: _hub_service__WEBPACK_IMPORTED_MODULE_2__["HubService"] }, { type: _datalink_edit_service__WEBPACK_IMPORTED_MODULE_3__["DatalinkEditService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/+hub/datalink/datalink-edit/run-plan/datalink-run-plan.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/+hub/datalink/datalink-edit/run-plan/datalink-run-plan.component.ts ***!
  \*************************************************************************************/
/*! exports provided: DatalinkRunPlanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatalinkRunPlanComponent", function() { return DatalinkRunPlanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _hub_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hub.service */ "./src/app/+hub/hub.service.ts");
/* harmony import */ var _datalink_edit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../datalink-edit.service */ "./src/app/+hub/datalink/datalink-edit/datalink-edit.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");









class DatalinkRunPlanComponent {
    constructor(hubService, editDatalinkService, route) {
        this.hubService = hubService;
        this.editDatalinkService = editDatalinkService;
        this.route = route;
        this.allowSave = false;
    }
    ngOnInit() {
        try {
            this._subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])(this.route.data, this.route.params, this.hubService.getHubCacheObservable(), this.editDatalinkService.hubFormsService.getCurrentFormObservable()).subscribe(result => {
                this.pageTitle = result[0]['pageTitle'];
                this.datalinkForm = result[3];
            });
        }
        catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Datalink Run Plan');
        }
    }
    ngOnDestroy() {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
    }
}
DatalinkRunPlanComponent.ɵfac = function DatalinkRunPlanComponent_Factory(t) { return new (t || DatalinkRunPlanComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hub_service__WEBPACK_IMPORTED_MODULE_2__["HubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_datalink_edit_service__WEBPACK_IMPORTED_MODULE_3__["DatalinkEditService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
DatalinkRunPlanComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DatalinkRunPlanComponent, selectors: [["dexih-datalink-run-plan"]], decls: 9, vars: 0, consts: [[1, "no-padding"], [1, "widget-body"], ["section", "", 1, "widget-body-toolbar"], [1, "form-row"], [1, "col-sm-6"], [1, "col-sm-6", "text-right"]], template: function DatalinkRunPlanComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Run Plan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " NOT COMPLETED ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatalinkRunPlanComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dexih-datalink-run-plan',
                templateUrl: './datalink-run-plan.component.html'
            }]
    }], function () { return [{ type: _hub_service__WEBPACK_IMPORTED_MODULE_2__["HubService"] }, { type: _datalink_edit_service__WEBPACK_IMPORTED_MODULE_3__["DatalinkEditService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/+hub/datalink/datalink-edit/save-button/datalink-edit-save-button.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/+hub/datalink/datalink-edit/save-button/datalink-edit-save-button.component.ts ***!
  \************************************************************************************************/
/*! exports provided: DatalinkEditSaveButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatalinkEditSaveButtonComponent", function() { return DatalinkEditSaveButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _datalink_edit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../datalink-edit.service */ "./src/app/+hub/datalink/datalink-edit/datalink-edit.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../+auth/auth.service */ "./src/app/+auth/auth.service.ts");
/* harmony import */ var _hub_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hub.service */ "./src/app/+hub/hub.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../shared/shared.models */ "./src/app/shared/shared.models.ts");
/* harmony import */ var _auth_auth_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../+auth/auth.models */ "./src/app/+auth/auth.models.ts");
/* harmony import */ var _shared_ui_dexihFormControls_dexih_invalid_form_details_dexih_invalid_form_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/ui/dexihFormControls/dexih-invalid-form-details/dexih-invalid-form-details.component */ "./src/app/shared/ui/dexihFormControls/dexih-invalid-form-details/dexih-invalid-form-details.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _buttons_cancel_button_cancel_button_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../buttons/cancel-button/cancel-button.component */ "./src/app/+hub/buttons/cancel-button/cancel-button.component.ts");
/* harmony import */ var ngx_d_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-d-components */ "./node_modules/ngx-d-components/__ivy_ngcc__/fesm2015/ngx-d-components.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

















function DatalinkEditSaveButtonComponent_d_button_splitdropdown_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button-splitdropdown", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("buttonClick", function DatalinkEditSaveButtonComponent_d_button_splitdropdown_1_Template_d_button_splitdropdown_buttonClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.saveDatalink(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatalinkEditSaveButtonComponent_d_button_splitdropdown_1_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.saveDatalink(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatalinkEditSaveButtonComponent_d_button_splitdropdown_1_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.editDatalinkService.hubFormsService.saveLocal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Save as file");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatalinkEditSaveButtonComponent_d_button_splitdropdown_1_Template_a_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.saveDatalink(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Save As...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.editDatalinkService.hubFormsService.hasChanged);
} }
function DatalinkEditSaveButtonComponent_d_button_dropdown_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button-dropdown", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatalinkEditSaveButtonComponent_d_button_dropdown_2_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.fixMappings(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Fix Mappings");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatalinkEditSaveButtonComponent_d_button_dropdown_2_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.runDatalink(false, false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Run");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatalinkEditSaveButtonComponent_d_button_dropdown_2_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.runDatalink(true, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Run (with truncate)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatalinkEditSaveButtonComponent_d_button_dropdown_2_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.runDatalink(false, true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Run (reset incremental)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatalinkEditSaveButtonComponent_d_button_dropdown_2_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.preview(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Preview Datalink");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatalinkEditSaveButtonComponent_d_button_dropdown_2_Template_a_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.download(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Download Datalink Data");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pullRight", true);
} }
class DatalinkEditSaveButtonComponent {
    constructor(hubService, editDatalinkService, authService, router, route) {
        this.hubService = hubService;
        this.editDatalinkService = editDatalinkService;
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.cancelToken = new _auth_auth_models__WEBPACK_IMPORTED_MODULE_7__["CancelToken"]();
        this.eUpdateStrategy = _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eUpdateStrategy"];
    }
    ngOnInit() {
        try {
            this._subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])(this.editDatalinkService.hubFormsService.getCurrentFormObservable(), this.hubService.getHubCacheObservable()).subscribe(result => {
                this.datalinkForm = result[0];
                this.hubCache = result[1];
            });
        }
        catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'datalink save button');
        }
    }
    ngOnDestroy() {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
        this.cancelToken.cancel();
    }
    saveDatalink(saveAs = false) {
        return __awaiter(this, void 0, void 0, function* () {
            this.editDatalinkService.savingDatalink.next(true);
            if (this.datalinkForm.controls.dexihDatalinkTargets.dirty) {
                let targets = this.datalinkForm.controls.dexihDatalinkTargets;
                let tables = targets.controls.map(c => {
                    let target = c;
                    let table = target.controls.table;
                    if (table) {
                        return table;
                    }
                });
                let tableNames = tables.filter(c => c.value.key > 0 && c.dirty).map(c => c.value.name).join(', ');
                let doSave = () => __awaiter(this, void 0, void 0, function* () {
                    for (let t of targets.controls) {
                        if (t.dirty) {
                            let target = t;
                            let savedTable = yield this.hubService.saveTables([target.controls.table.value]);
                            target.setControl('table', this.editDatalinkService.hubFormsService.tableForm(savedTable[0]));
                            target.controls.tableKey.setValue(savedTable[0].key);
                        }
                    }
                    this.editDatalinkService.hubFormsService.save(false, saveAs);
                    this.editDatalinkService.savingDatalink.next(false);
                });
                // if no tables with key > 0 they are all new, so no need to prompt.
                if (tableNames.length === 0) {
                    yield doSave();
                }
                else {
                    this.authService
                        .confirmDialog(`Save Target Tables?`, `The existing target table(s)
                ${tableNames} have changed.
                This is a shared object, and may impact other dependencies if changed.
                Note, this will only save the metadata, use the 'Create Table' function to overwrite the physical table.`)
                        .then((confirm) => __awaiter(this, void 0, void 0, function* () {
                        if (confirm) {
                            yield doSave();
                        }
                    })).catch(() => this.editDatalinkService.savingDatalink.next(false));
                }
            }
            else {
                this.editDatalinkService.hubFormsService.save(false, saveAs);
                this.editDatalinkService.savingDatalink.next(false);
            }
        });
    }
    preview() {
        const transformsArray = this.datalinkForm.controls.dexihDatalinkTransforms;
        let transforms = transformsArray.controls
            //            .filter(c => c.value.transform.allowUserConfig)
            .sort((a, b) => b.value.position - a.value.position);
        if (transforms.length > 0) {
            this.router.navigate(['transforms/transform', transforms[0].value.key,
                'preview-transform-data'], { relativeTo: this.route });
        }
    }
    download() {
        if (this.datalinkForm.dirty) {
            this.authService.confirmDialog('Save Datalink', 'The datalink must be saved before a data download task can be started.  Do you want to save the datalink?')
                .then(saveDatalink => {
                if (saveDatalink) {
                    this.saveDatalink();
                    this.doDownload();
                }
            });
        }
        else {
            this.doDownload();
        }
    }
    doDownload() {
        let downloadItems = new Array();
        let downloadObject = new _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["DownloadObject"]();
        downloadObject.objectKey = this.datalinkForm.controls.key.value;
        downloadObject.objectType = _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eDataObjectType"].Datalink;
        downloadItems.push(downloadObject);
        this.hubService.downloadData(downloadItems, true, _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eDownloadFormat"].Csv, this.cancelToken);
    }
    cancel() {
        this.editDatalinkService.hubFormsService.cancel();
    }
    runDatalink(truncateTarget, resetIncremental) {
        if (this.editDatalinkService.hubFormsService.hasChanged) {
            this.authService.confirmDialog('Save Datalink', 'The datalink must be saved before running.  Would you like to save now?')
                .then(confirm => {
                if (confirm) {
                    this.saveDatalink();
                    this.editDatalinkService.savingDatalink.toPromise().then(value => {
                        if (value) {
                            this.hubService
                                .runDatalinks([this.datalinkForm.controls.key.value], truncateTarget, resetIncremental, null, null, null, this.cancelToken);
                        }
                    });
                }
            });
        }
        else {
            this.hubService.runDatalinks([this.datalinkForm.controls.key.value], truncateTarget, resetIncremental, null, null, null, this.cancelToken);
        }
    }
    fixMappings() {
        this.editDatalinkService.fixMappings(this.datalinkForm);
    }
}
DatalinkEditSaveButtonComponent.ɵfac = function DatalinkEditSaveButtonComponent_Factory(t) { return new (t || DatalinkEditSaveButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hub_service__WEBPACK_IMPORTED_MODULE_4__["HubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_datalink_edit_service__WEBPACK_IMPORTED_MODULE_2__["DatalinkEditService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
DatalinkEditSaveButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DatalinkEditSaveButtonComponent, selectors: [["datalink-save-button"]], decls: 4, vars: 4, consts: [[1, "mr-1", 3, "control"], ["buttonClass", "btn-primary", "iconClass", "fa fa-save", "text", "Save", "class", "mr-1", 3, "disabled", "buttonClick", 4, "ngIf"], ["class", "mr-1", "text", "Actions", "iconClass", "fa fa-bolt", "buttonClass", "btn-primary", 3, "pullRight", 4, "ngIf"], [3, "formsService"], ["buttonClass", "btn-primary", "iconClass", "fa fa-save", "text", "Save", 1, "mr-1", 3, "disabled", "buttonClick"], ["title", "Save in the hub", 1, "dropdown-item", 3, "click"], [1, "fa", "fa-cloud"], ["title", "Export as a local file", 1, "dropdown-item", 3, "click"], [1, "fa", "fa-floppy-o"], ["title", "Save another version", 1, "dropdown-item", 3, "click"], [1, "fa", "fa-plus-circle"], ["text", "Actions", "iconClass", "fa fa-bolt", "buttonClass", "btn-primary", 1, "mr-1", 3, "pullRight"], ["title", "Attempt to fix mappings broken when removing/inserting transforms.", 1, "dropdown-item", 3, "click"], ["title", "Run datalink, truncating the target table for each.", 1, "dropdown-item", 3, "click"], ["title", "Run datalink, resetting the incremental (i.e. reload all source data rows) ", 1, "dropdown-item", 3, "click"], ["title", "Preview the output of this datalink", 1, "dropdown-item", 3, "click"], ["title", "Download the output from this datalink", 1, "dropdown-item", 3, "click"]], template: function DatalinkEditSaveButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dexih-invalid-form-details", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DatalinkEditSaveButtonComponent_d_button_splitdropdown_1_Template, 13, 1, "d-button-splitdropdown", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DatalinkEditSaveButtonComponent_d_button_dropdown_2_Template, 13, 1, "d-button-dropdown", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "cancel-button", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.datalinkForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hubCache.canWrite);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hubCache.canWrite && (ctx.datalinkForm == null ? null : ctx.datalinkForm.controls.dexihDatalinkTargets.value.length) > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formsService", ctx.editDatalinkService.hubFormsService);
    } }, directives: [_shared_ui_dexihFormControls_dexih_invalid_form_details_dexih_invalid_form_details_component__WEBPACK_IMPORTED_MODULE_8__["DexihInvalidFormDetailsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _buttons_cancel_button_cancel_button_component__WEBPACK_IMPORTED_MODULE_10__["CancelButtonComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_11__["DButtonSplitDropDownComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_11__["DButtonDropDownComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatalinkEditSaveButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'datalink-save-button',
                templateUrl: './datalink-edit-save-button.component.html'
            }]
    }], function () { return [{ type: _hub_service__WEBPACK_IMPORTED_MODULE_4__["HubService"] }, { type: _datalink_edit_service__WEBPACK_IMPORTED_MODULE_2__["DatalinkEditService"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/+hub/datalink/datalink-edit/source-table/datalink-edit-source-table.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/+hub/datalink/datalink-edit/source-table/datalink-edit-source-table.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: DatalinkEditSourceTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatalinkEditSourceTableComponent", function() { return DatalinkEditSourceTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _hub_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hub.models */ "./src/app/+hub/hub.models.ts");
/* harmony import */ var _hub_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hub.service */ "./src/app/+hub/hub.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _datalink_edit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../datalink-edit.service */ "./src/app/+hub/datalink/datalink-edit/datalink-edit.service.ts");
/* harmony import */ var _hub_lineage_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../hub.lineage.models */ "./src/app/+hub/hub.lineage.models.ts");
/* harmony import */ var _shared_shared_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/shared.models */ "./src/app/shared/shared.models.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../+auth/auth.service */ "./src/app/+auth/auth.service.ts");
/* harmony import */ var ngx_d_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-d-components */ "./node_modules/ngx-d-components/__ivy_ngcc__/fesm2015/ngx-d-components.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_d_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-d-table */ "./node_modules/ngx-d-table/__ivy_ngcc__/fesm2015/ngx-d-table.js");
/* harmony import */ var _datalink_table_datalink_table_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../datalink-table/datalink-table.component */ "./src/app/+hub/datalink/datalink-edit/datalink-table/datalink-table.component.ts");


















const _c0 = function (a1) { return ["table-edit", a1]; };
function DatalinkEditSourceTableComponent_ng_template_1_d_button_edit_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button-edit", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Table ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r9.datalinkForm.controls.sourceDatalinkTable.value.sourceTableKey));
} }
const _c1 = function (a1) { return ["../../edit", a1]; };
function DatalinkEditSourceTableComponent_ng_template_1_d_button_edit_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button-edit", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Datalink ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, ctx_r10.datalinkForm.controls.sourceDatalinkTable.value.sourceDatalinkKey));
} }
function DatalinkEditSourceTableComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DatalinkEditSourceTableComponent_ng_template_1_d_button_edit_0_Template, 2, 3, "d-button-edit", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DatalinkEditSourceTableComponent_ng_template_1_d_button_edit_1_Template, 2, 3, "d-button-edit", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "d-button-preview", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatalinkEditSourceTableComponent_ng_template_1_Template_d_button_preview_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.previewData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.datalinkForm.controls.sourceDatalinkTable.value.sourceType == ctx_r1.eSourceType.Table && ctx_r1.datalinkForm.controls.sourceDatalinkTable.value.sourceTableKey);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.datalinkForm.controls.sourceDatalinkTable.value.sourceType == ctx_r1.eSourceType.Datalink && ctx_r1.datalinkForm.controls.sourceDatalinkTable.value.sourceDatalinkKey);
} }
function DatalinkEditSourceTableComponent_datalink_table_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "datalink-table", 14);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datalinkTableForm", ctx_r2.datalinkForm.controls.sourceDatalinkTable);
} }
function DatalinkEditSourceTableComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button-delete", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatalinkEditSourceTableComponent_ng_template_6_Template_d_button_delete_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const items_r13 = ctx.items; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.deleteSelected(items_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DatalinkEditSourceTableComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button-new", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatalinkEditSourceTableComponent_ng_template_8_Template_d_button_new_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.newColumn(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DatalinkEditSourceTableComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button-edit", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatalinkEditSourceTableComponent_ng_template_10_Template_d_button_edit_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const item_r19 = ctx.item; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.editColumn(item_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DatalinkEditSourceTableComponent {
    constructor(authService, hubService, editDatalinkService, route, router) {
        this.authService = authService;
        this.hubService = hubService;
        this.editDatalinkService = editDatalinkService;
        this.route = route;
        this.router = router;
        this.eMappingStatus = _hub_models__WEBPACK_IMPORTED_MODULE_2__["eMappingStatus"];
        this.eSourceType = _shared_shared_models__WEBPACK_IMPORTED_MODULE_7__["eSourceType"];
        this.sourceTypes = _hub_models__WEBPACK_IMPORTED_MODULE_2__["sourceTypes"];
        this.columns = [
            { name: 'position', title: '#', format: '' },
            { name: 'columnStatus', title: 'Impact', format: 'Html' },
            { name: 'columnGroup', title: 'Group', format: '' },
            { name: 'name', title: 'Name', format: '' },
            { name: 'logicalName', title: 'Logical', format: '' },
            { name: 'dataType', title: 'Data Type', format: '' },
            { name: 'deltaType', title: 'Delta Type', format: 'Enum', enum: _shared_shared_models__WEBPACK_IMPORTED_MODULE_7__["eDeltaType"] },
            { name: 'allowDbNull', title: 'Null?', format: 'Boolean' },
            { name: 'isIncrementalUpdate', title: 'Incremental?', format: 'Boolean' },
            { name: 'securityFlag', title: 'Security Flag', format: 'Enum', enum: _shared_shared_models__WEBPACK_IMPORTED_MODULE_7__["eSecurityFlag"] },
            { name: 'isInput', title: 'Input?', format: 'Boolean' },
        ];
        this._tableData = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.tableData = this._tableData.asObservable();
    }
    ngOnInit() {
        try {
            this._subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])(this.route.data, this.route.params, this.hubService.getHubCacheObservable(), this.editDatalinkService.hubFormsService.getCurrentFormObservable()).subscribe(result => {
                this.pageTitle = result[0]['pageTitle'];
                this.hubCache = result[2];
                this.datalinkForm = result[3];
                if (this.datalinkForm) {
                    this.updateData();
                    if (this._sourceSubscription) {
                        this._sourceSubscription.unsubscribe();
                    }
                    this._sourceSubscription = this.datalinkForm.controls.sourceDatalinkTable.valueChanges.subscribe(() => {
                        this.updateData();
                    });
                }
            });
        }
        catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Datalink Edit Source Table');
        }
    }
    ngOnDestroy() {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
        if (this._sourceSubscription) {
            this._sourceSubscription.unsubscribe();
        }
    }
    previewData() {
        let sourceDatalinkTable = this.datalinkForm.controls.sourceDatalinkTable.value;
        switch (sourceDatalinkTable.sourceType) {
            case _shared_shared_models__WEBPACK_IMPORTED_MODULE_7__["eSourceType"].Table:
                let sourceTableKey = sourceDatalinkTable.sourceTableKey;
                this.router.navigate(['preview-table-data', 'table', sourceTableKey], { relativeTo: this.route });
                break;
            case _shared_shared_models__WEBPACK_IMPORTED_MODULE_7__["eSourceType"].Datalink:
                let datalinkKey = sourceDatalinkTable.sourceDatalinkKey;
                this.router.navigate(['preview-table-data', 'datalink', datalinkKey], { relativeTo: this.route });
                break;
            default:
                this.authService.informationDialog('Cannot Preview', 'Previews are only available for tables and datalinks.');
                break;
        }
    }
    columnStatus(column) {
        let columnUsage = new _hub_lineage_models__WEBPACK_IMPORTED_MODULE_6__["ColumnUsageNode"](_hub_lineage_models__WEBPACK_IMPORTED_MODULE_6__["eDatalinkObjectType"].SourceTable, _hub_lineage_models__WEBPACK_IMPORTED_MODULE_6__["eObjectUse"].Source, this.datalinkForm.value, column, null, null, null, _hub_models__WEBPACK_IMPORTED_MODULE_2__["eMappingStatus"].PassThroughMap, this.hubCache);
        const lineage = columnUsage.createDatalinkImpact(true);
        const mappingStatus = _hub_models__WEBPACK_IMPORTED_MODULE_2__["impactMappingStatuses"].find(c => c.key === lineage);
        if (mappingStatus) {
            return `${mappingStatus.name}<i class="float-right ${mappingStatus.statusClass}"></i>`;
        }
    }
    updateData() {
        let sourceDatalinkTable = this.datalinkForm.controls.sourceDatalinkTable;
        let columnData = [];
        let columnsArray = sourceDatalinkTable.controls.dexihDatalinkColumns;
        columnsArray.controls.filter(c => c.value.isValid)
            .sort((a, b) => a.value.position - b.value.position)
            .forEach(columnForm => {
            let column = columnForm.value;
            let newColumn = {
                key: column.key,
                position: column.position,
                columnStatus: this.columnStatus(column),
                columnGroup: column.columnGroup,
                name: column.name,
                dataType: this.hubCache.dataTypeToString(column),
                deltaType: column.deltaType,
                allowDbNull: column.allowDbNull,
                logicalName: column.logicalName,
                isIncrementalUpdate: column.isIncrementalUpdate,
                securityFlag: column.securityFlag,
                isInput: column.isInput
            };
            columnData.push(newColumn);
        });
        this._tableData.next(columnData);
    }
    deleteSelected(columns) {
        let sourceDatalinkTable = this.datalinkForm.controls.sourceDatalinkTable;
        let columnsArray = sourceDatalinkTable.controls.dexihDatalinkColumns;
        columns.forEach(column => {
            let index = columnsArray.controls.findIndex(c => c.value.key === column.key);
            columnsArray.removeAt(index);
        });
        this.updateData();
    }
    newColumn() {
        this.router.navigate(['newcolumn'], { relativeTo: this.route.parent });
    }
    editColumn(column) {
        this.router.navigate(['column', column.key], { relativeTo: this.route.parent });
    }
    columnSortChange(items) {
        let sourceDatalinkTable = this.datalinkForm.controls.sourceDatalinkTable;
        let existingItems = sourceDatalinkTable.controls.dexihDatalinkColumns;
        let position = 1;
        items.forEach(item => {
            let column = existingItems.controls.find(c => c.value.key === item.key);
            if (column) {
                column.controls.position.setValue(position++);
            }
        });
        this.updateData();
    }
}
DatalinkEditSourceTableComponent.ɵfac = function DatalinkEditSourceTableComponent_Factory(t) { return new (t || DatalinkEditSourceTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hub_service__WEBPACK_IMPORTED_MODULE_3__["HubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_datalink_edit_service__WEBPACK_IMPORTED_MODULE_5__["DatalinkEditService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
DatalinkEditSourceTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DatalinkEditSourceTableComponent, selectors: [["dexih-datalink-edit-source-table-form"]], decls: 12, vars: 8, consts: [["title", "Source Type", 3, "showExpandButton"], ["header", ""], [3, "datalinkTableForm", 4, "ngIf"], ["title", "Columns", 3, "showExpandButton", "padding"], [3, "enableMultiSelect", "enableManualSort", "columns", "dataObservable", "onSortChanged", "rowClick"], ["select", "selectedItemsAction"], ["selectedItemsAction", ""], ["select", "actionsTemplate"], ["actions", ""], ["select", "selectedItemAction"], ["selectedItemAction", ""], ["class", "mr-1", 3, "routerLink", 4, "ngIf"], [3, "click"], [1, "mr-1", 3, "routerLink"], [3, "datalinkTableForm"], ["title", "Delete selected columns", 3, "click"], ["title", "Create a new column", 3, "click"], ["title", "Edit selected column", 3, "click"]], template: function DatalinkEditSourceTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-widget-section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DatalinkEditSourceTableComponent_ng_template_1_Template, 3, 2, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DatalinkEditSourceTableComponent_datalink_table_3_Template, 1, 1, "datalink-table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "d-widget-section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "d-table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSortChanged", function DatalinkEditSourceTableComponent_Template_d_table_onSortChanged_5_listener($event) { return ctx.columnSortChange($event); })("rowClick", function DatalinkEditSourceTableComponent_Template_d_table_rowClick_5_listener($event) { return ctx.editColumn($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DatalinkEditSourceTableComponent_ng_template_6_Template, 1, 0, "ng-template", 5, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DatalinkEditSourceTableComponent_ng_template_8_Template, 1, 0, "ng-template", 7, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DatalinkEditSourceTableComponent_ng_template_10_Template, 1, 0, "ng-template", 9, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showExpandButton", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.datalinkForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showExpandButton", true)("padding", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("enableMultiSelect", true)("enableManualSort", true)("columns", ctx.columns)("dataObservable", ctx.tableData);
    } }, directives: [ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["ɵa"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], ngx_d_table__WEBPACK_IMPORTED_MODULE_11__["DTableComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["DButtonPreviewComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["DButtonEditComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _datalink_table_datalink_table_component__WEBPACK_IMPORTED_MODULE_12__["DatalinkTableComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["DButtonDeleteComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["DButtonNewComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatalinkEditSourceTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dexih-datalink-edit-source-table-form',
                templateUrl: './datalink-edit-source-table.component.html'
            }]
    }], function () { return [{ type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] }, { type: _hub_service__WEBPACK_IMPORTED_MODULE_3__["HubService"] }, { type: _datalink_edit_service__WEBPACK_IMPORTED_MODULE_5__["DatalinkEditService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/+hub/datalink/datalink-edit/standard-function-edit/index.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/+hub/datalink/datalink-edit/standard-function-edit/index.ts ***!
  \*****************************************************************************/
/*! exports provided: ArrayParameter, ArrayParameterItem, StandardFunctionEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _standard_function_edit_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./standard-function-edit.component */ "./src/app/+hub/datalink/datalink-edit/standard-function-edit/standard-function-edit.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrayParameter", function() { return _standard_function_edit_component__WEBPACK_IMPORTED_MODULE_0__["ArrayParameter"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ArrayParameterItem", function() { return _standard_function_edit_component__WEBPACK_IMPORTED_MODULE_0__["ArrayParameterItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "StandardFunctionEditComponent", function() { return _standard_function_edit_component__WEBPACK_IMPORTED_MODULE_0__["StandardFunctionEditComponent"]; });




/***/ }),

/***/ "./src/app/+hub/datalink/datalink-edit/standard-function-edit/standard-function-edit.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/+hub/datalink/datalink-edit/standard-function-edit/standard-function-edit.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: ArrayParameter, ArrayParameterItem, StandardFunctionEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayParameter", function() { return ArrayParameter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayParameterItem", function() { return ArrayParameterItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StandardFunctionEditComponent", function() { return StandardFunctionEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _hub_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hub.models */ "./src/app/+hub/hub.models.ts");
/* harmony import */ var _hub_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hub.service */ "./src/app/+hub/hub.service.ts");
/* harmony import */ var _datalink_edit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../datalink-edit.service */ "./src/app/+hub/datalink/datalink-edit/datalink-edit.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../+auth/auth.service */ "./src/app/+auth/auth.service.ts");
/* harmony import */ var _logging__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../logging */ "./src/logging.ts");
/* harmony import */ var _hub_remote_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../hub.remote.models */ "./src/app/+hub/hub.remote.models.ts");
/* harmony import */ var _hub_lineage_models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../hub.lineage.models */ "./src/app/+hub/hub.lineage.models.ts");
/* harmony import */ var _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/shared.models */ "./src/app/shared/shared.models.ts");
/* harmony import */ var _auth_auth_models__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../+auth/auth.models */ "./src/app/+auth/auth.models.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_d_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-d-components */ "./node_modules/ngx-d-components/__ivy_ngcc__/fesm2015/ngx-d-components.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _buttons_customFunction_edit_button_customFunction_edit_button_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../buttons/customFunction-edit-button/customFunction-edit-button.component */ "./src/app/+hub/buttons/customFunction-edit-button/customFunction-edit-button.component.ts");
/* harmony import */ var _parameters_input_parameter_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../parameters/input-parameter.component */ "./src/app/+hub/datalink/datalink-edit/parameters/input-parameter.component.ts");
/* harmony import */ var ngx_d_markdown__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-d-markdown */ "./node_modules/ngx-d-markdown/__ivy_ngcc__/fesm2015/ngx-d-markdown.js");
/* harmony import */ var _parameters_output_parameter_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../parameters/output-parameter.component */ "./src/app/+hub/datalink/datalink-edit/parameters/output-parameter.component.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
























function StandardFunctionEditComponent_div_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button-apply", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StandardFunctionEditComponent_div_0_ng_template_2_Template_d_button_apply_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return !ctx_r4.newDatalinkTransformItemForm.pristine && ctx_r4.applyExit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "d-button-cancel", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StandardFunctionEditComponent_div_0_ng_template_2_Template_d_button_cancel_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r2.newDatalinkTransformItemForm.pristine);
} }
const _c0 = function () { return { standalone: true }; };
function StandardFunctionEditComponent_div_0_form_4_section_2_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form-checkbox", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StandardFunctionEditComponent_div_0_form_4_section_2_Template_form_checkbox_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r14.useCustomFunction = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r7.useCustomFunction)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
} }
const _c1 = function () { return { "z-index": 499, "position": "relative" }; };
function StandardFunctionEditComponent_div_0_form_4_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form-select", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "customFunction-edit-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r8.customFunctions);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("key", ctx_r8.newDatalinkTransformItemForm.controls.customFunctionKey.value);
} }
const _c2 = function () { return { "z-index": 500, "position": "relative" }; };
function StandardFunctionEditComponent_div_0_form_4_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form-select", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StandardFunctionEditComponent_div_0_form_4_ng_template_4_Template_form_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r16.functionCategory = $event; })("ngModelChange", function StandardFunctionEditComponent_div_0_form_4_ng_template_4_Template_form_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r18.updateCategory($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form-select", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function StandardFunctionEditComponent_div_0_form_4_ng_template_4_Template_form_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r19.selectFunction($event, true); })("ngModelChange", function StandardFunctionEditComponent_div_0_form_4_ng_template_4_Template_form_select_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r20.selectedFunction = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r9.functionCategories)("allowNullSelect", true)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c0))("ngModel", ctx_r9.functionCategory)("sortItems", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r9.selectedFunction)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c0))("items", ctx_r9.filteredFunctions)("enableKeySelect", false)("note", ctx_r9.selectedFunction == null ? null : ctx_r9.selectedFunction.description)("sortItems", true);
} }
const _c3 = function () { return { "z-index": 405, "position": "relative" }; };
function StandardFunctionEditComponent_div_0_form_4_div_5_section_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "form-select", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r21.eErrorActionItems)("enableFilter", false);
} }
const _c4 = function () { return { "z-index": 402, "position": "relative" }; };
function StandardFunctionEditComponent_div_0_form_4_div_5_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "form-select", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r22.eInvalidActionItems)("enableFilter", false);
} }
function StandardFunctionEditComponent_div_0_form_4_div_5_section_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "form-checkbox", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StandardFunctionEditComponent_div_0_form_4_div_5_section_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "form-select", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r24.typeCodes);
} }
const _c5 = function () { return { "z-index": 404, "position": "relative" }; };
function StandardFunctionEditComponent_div_0_form_4_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StandardFunctionEditComponent_div_0_form_4_div_5_section_1_Template, 2, 4, "section", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "form-select", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, StandardFunctionEditComponent_div_0_form_4_div_5_div_4_Template, 2, 4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, StandardFunctionEditComponent_div_0_form_4_div_5_section_5_Template, 2, 0, "section", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, StandardFunctionEditComponent_div_0_form_4_div_5_section_6_Template, 2, 1, "section", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "form-select", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.transformFunctionType != ctx_r10.eFunctionType.Validate && ctx_r10.transformFunctionType != ctx_r10.eFunctionType.condition);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r10.eErrorActionItems)("enableFilter", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.transformFunctionType == ctx_r10.eFunctionType.Validate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r10.selectedFunction == null ? null : ctx_r10.selectedFunction.returnType) == "Boolean" || ctx_r10.selectedCustomFunction && (ctx_r10.selectedCustomFunction == null ? null : ctx_r10.selectedCustomFunction.returnType) == "Boolean");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r10.selectedFunction == null ? null : ctx_r10.selectedFunction.genericType) !== ctx_r10.eGenericType.None);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r10.functionCache);
} }
function StandardFunctionEditComponent_div_0_form_4_div_6_div_3_div_1_d_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StandardFunctionEditComponent_div_0_form_4_div_6_div_3_div_1_d_button_5_Template_d_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const inputParameter_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r33.importMappings(inputParameter_r26); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c6 = function (a0) { return [a0]; };
function StandardFunctionEditComponent_div_0_form_4_div_6_div_3_div_1_input_parameter_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input-parameter", 44);
} if (rf & 2) {
    const inputParameter_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inputParameterForms", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c6, inputParameter_r26))("nodeDatalinkColumnKey", ctx_r31.datalinkTransformForm.controls.nodeDatalinkColumn.value == null ? null : ctx_r31.datalinkTransformForm.controls.nodeDatalinkColumn.value.key)("inputColumns", ctx_r31.inputColumns)("allowAdd", false)("allowRemove", false)("updateParameterName", false)("rank", inputParameter_r26.value.rank)("variables", ctx_r31.variables);
} }
function StandardFunctionEditComponent_div_0_form_4_div_6_div_3_div_1_div_10_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "markdown", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const arrayParameter_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", arrayParameter_r37.value.runTime.functionParameter.description);
} }
const _c7 = function (a0) { return { "z-index": a0, "position": "relative" }; };
function StandardFunctionEditComponent_div_0_form_4_div_6_div_3_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input-parameter", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("addParameter", function StandardFunctionEditComponent_div_0_form_4_div_6_div_3_div_1_div_10_Template_input_parameter_addParameter_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const j_r38 = ctx.index; const inputParameter_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r42.addParameter(inputParameter_r26, ctx_r42.eParameterDirection.Input, j_r38); })("removeParameter", function StandardFunctionEditComponent_div_0_form_4_div_6_div_3_div_1_div_10_Template_input_parameter_removeParameter_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r44); const j_r38 = ctx.index; const inputParameter_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r45.removeParameter(inputParameter_r26, j_r38); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StandardFunctionEditComponent_div_0_form_4_div_6_div_3_div_1_div_10_small_2_Template, 2, 1, "small", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const arrayParameter_r37 = ctx.$implicit;
    const j_r38 = ctx.index;
    const last_r39 = ctx.last;
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c7, 300 - j_r38));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inputParameterForms", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c6, arrayParameter_r37))("inputColumns", ctx_r32.inputColumns)("allowAdd", true)("nodeDatalinkColumnKey", ctx_r32.datalinkTransformForm.controls.nodeDatalinkColumn.value == null ? null : ctx_r32.datalinkTransformForm.controls.nodeDatalinkColumn.value.key)("allowRemove", true)("updateParameterName", false)("variables", ctx_r32.variables);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", last_r39 && (arrayParameter_r37.value.runTime == null ? null : arrayParameter_r37.value.runTime.functionParameter == null ? null : arrayParameter_r37.value.runTime.functionParameter.description));
} }
function StandardFunctionEditComponent_div_0_form_4_div_6_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, StandardFunctionEditComponent_div_0_form_4_div_6_div_3_div_1_d_button_5_Template, 1, 0, "d-button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "d-button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StandardFunctionEditComponent_div_0_form_4_div_6_div_3_div_1_Template_d_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const inputParameter_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r47.addParameter(inputParameter_r26, ctx_r47.eParameterDirection.Input); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "d-button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StandardFunctionEditComponent_div_0_form_4_div_6_div_3_div_1_Template_d_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const inputParameter_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r50.addAllColumns(inputParameter_r26); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "d-button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StandardFunctionEditComponent_div_0_form_4_div_6_div_3_div_1_Template_d_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const inputParameter_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r52.clearArray(inputParameter_r26); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, StandardFunctionEditComponent_div_0_form_4_div_6_div_3_div_1_input_parameter_9_Template, 1, 10, "input-parameter", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, StandardFunctionEditComponent_div_0_form_4_div_6_div_3_div_1_div_10_Template, 3, 13, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const inputParameter_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Array - ", inputParameter_r26.value.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r28.selectedFunction.importMethodName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", inputParameter_r26.controls.arrayParameters.controls.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", inputParameter_r26.controls.arrayParameters.controls);
} }
function StandardFunctionEditComponent_div_0_form_4_div_6_div_3_input_parameter_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input-parameter", 50);
} if (rf & 2) {
    const inputParameter_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inputParameterForms", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c6, inputParameter_r26))("inputColumns", ctx_r29.inputColumns)("nodeDatalinkColumnKey", ctx_r29.datalinkTransformForm.controls.nodeDatalinkColumn.value == null ? null : ctx_r29.datalinkTransformForm.controls.nodeDatalinkColumn.value.key)("allowAdd", false)("allowRemove", false)("updateParameterName", false)("variables", ctx_r29.variables);
} }
function StandardFunctionEditComponent_div_0_form_4_div_6_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StandardFunctionEditComponent_div_0_form_4_div_6_div_3_div_1_Template, 11, 4, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StandardFunctionEditComponent_div_0_form_4_div_6_div_3_input_parameter_2_Template, 1, 9, "input-parameter", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const inputParameter_r26 = ctx.$implicit;
    const i_r27 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c7, 300 - i_r27));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", inputParameter_r26.value.rank > 0 && !inputParameter_r26.value.runTime.functionParameter.linkedName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", inputParameter_r26.value.rank == 0 && !inputParameter_r26.value.runTime.functionParameter.linkedName);
} }
function StandardFunctionEditComponent_div_0_form_4_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Input Parameters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StandardFunctionEditComponent_div_0_form_4_div_6_div_3_Template, 3, 5, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r11.inputParameterControls);
} }
function StandardFunctionEditComponent_div_0_form_4_div_7_d_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StandardFunctionEditComponent_div_0_form_4_div_7_d_button_4_Template_d_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r61); const arrayParameter_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r59.importInputOutputMappings(arrayParameter_r56); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function StandardFunctionEditComponent_div_0_form_4_div_7_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "input-parameter", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("addParameter", function StandardFunctionEditComponent_div_0_form_4_div_7_div_8_Template_input_parameter_addParameter_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66); const j_r63 = ctx.index; const arrayParameter_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r64.addInputOutputParameter(arrayParameter_r56, j_r63); })("removeParameter", function StandardFunctionEditComponent_div_0_form_4_div_7_div_8_Template_input_parameter_removeParameter_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66); const j_r63 = ctx.index; const arrayParameter_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r67.removeInputOutputParameter(arrayParameter_r56, j_r63); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const parameterItem_r62 = ctx.$implicit;
    const j_r63 = ctx.index;
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c7, 200 - j_r63));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("inputParameterForms", parameterItem_r62.inputItems)("outputParameterForms", parameterItem_r62.outputItems)("nodeDatalinkColumnKey", ctx_r58.datalinkTransformForm.controls.nodeDatalinkColumn.value == null ? null : ctx_r58.datalinkTransformForm.controls.nodeDatalinkColumn.value.key)("inputColumns", ctx_r58.inputColumns)("outputColumns", ctx_r58.outputColumns)("datalinkTargets", ctx_r58.datalinkTargets)("allowAdd", true)("allowRemove", true)("updateParameterName", false)("variables", ctx_r58.variables);
} }
function StandardFunctionEditComponent_div_0_form_4_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, StandardFunctionEditComponent_div_0_form_4_div_7_d_button_4_Template, 1, 0, "d-button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "d-button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StandardFunctionEditComponent_div_0_form_4_div_7_Template_d_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const arrayParameter_r56 = ctx.$implicit; const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r69.addInputOutputParameter(arrayParameter_r56); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "d-button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StandardFunctionEditComponent_div_0_form_4_div_7_Template_d_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const arrayParameter_r56 = ctx.$implicit; const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r71.addAllInputOutputColumns(arrayParameter_r56); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "d-button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StandardFunctionEditComponent_div_0_form_4_div_7_Template_d_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r70); const arrayParameter_r56 = ctx.$implicit; const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r72.clearInputOutputArray(arrayParameter_r56); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, StandardFunctionEditComponent_div_0_form_4_div_7_div_8_Template, 2, 13, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const arrayParameter_r56 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", arrayParameter_r56.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.selectedFunction.importMethodName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", arrayParameter_r56.parameterItems);
} }
function StandardFunctionEditComponent_div_0_form_4_div_8_div_6_div_1_output_parameter_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "output-parameter", 60);
} if (rf & 2) {
    const outputParameter_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("outputParameterForm", outputParameter_r74)("outputColumns", ctx_r78.outputColumns)("datalinkTargets", ctx_r78.datalinkTargets)("allowAdd", false)("allowRemove", false)("rank", outputParameter_r74.value.rank);
} }
function StandardFunctionEditComponent_div_0_form_4_div_8_div_6_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "output-parameter", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("addParameter", function StandardFunctionEditComponent_div_0_form_4_div_8_div_6_div_1_div_8_Template_output_parameter_addParameter_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r85); const j_r82 = ctx.index; const outputParameter_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r83.addParameter(outputParameter_r74, ctx_r83.eParameterDirection.Output, j_r82); })("removeParameter", function StandardFunctionEditComponent_div_0_form_4_div_8_div_6_div_1_div_8_Template_output_parameter_removeParameter_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r85); const j_r82 = ctx.index; const outputParameter_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit; const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r86.removeParameter(outputParameter_r74, j_r82); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const arrayParameter_r81 = ctx.$implicit;
    const j_r82 = ctx.index;
    const ctx_r79 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c7, 200 - j_r82));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("outputParameterForm", arrayParameter_r81)("outputColumns", ctx_r79.outputColumns)("datalinkTargets", ctx_r79.datalinkTargets)("allowAdd", true)("allowRemove", true);
} }
function StandardFunctionEditComponent_div_0_form_4_div_8_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "d-button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StandardFunctionEditComponent_div_0_form_4_div_8_div_6_div_1_Template_d_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90); const outputParameter_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r88.addParameter(outputParameter_r74, ctx_r88.eParameterDirection.Output); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "d-button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StandardFunctionEditComponent_div_0_form_4_div_8_div_6_div_1_Template_d_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r90); const outputParameter_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r91.clearArray(outputParameter_r74); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, StandardFunctionEditComponent_div_0_form_4_div_8_div_6_div_1_output_parameter_7_Template, 1, 6, "output-parameter", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, StandardFunctionEditComponent_div_0_form_4_div_8_div_6_div_1_div_8_Template, 2, 8, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const outputParameter_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Array - ", outputParameter_r74.value.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", outputParameter_r74.controls.arrayParameters.controls.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", outputParameter_r74.controls.arrayParameters.controls);
} }
function StandardFunctionEditComponent_div_0_form_4_div_8_div_6_output_parameter_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "output-parameter", 62);
} if (rf & 2) {
    const outputParameter_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("outputParameterForm", outputParameter_r74)("outputColumns", ctx_r77.outputColumns)("datalinkTargets", ctx_r77.datalinkTargets)("allowAdd", false)("allowRemove", false);
} }
function StandardFunctionEditComponent_div_0_form_4_div_8_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, StandardFunctionEditComponent_div_0_form_4_div_8_div_6_div_1_Template, 9, 3, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StandardFunctionEditComponent_div_0_form_4_div_8_div_6_output_parameter_2_Template, 1, 5, "output-parameter", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const outputParameter_r74 = ctx.$implicit;
    const i_r75 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c7, 100 - i_r75));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", outputParameter_r74.value.rank > 0 && !outputParameter_r74.value.runTime.functionParameter.linkedName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", outputParameter_r74.value.rank == 0);
} }
function StandardFunctionEditComponent_div_0_form_4_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Output Parameters ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "d-button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StandardFunctionEditComponent_div_0_form_4_div_8_Template_d_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r96); const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r95.autoMap(ctx_r95.outputParameter); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, StandardFunctionEditComponent_div_0_form_4_div_8_div_6_Template, 3, 5, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r13.outputParameterControls);
} }
function StandardFunctionEditComponent_div_0_form_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StandardFunctionEditComponent_div_0_form_4_section_2_Template, 2, 3, "section", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StandardFunctionEditComponent_div_0_form_4_ng_template_3_Template, 3, 4, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, StandardFunctionEditComponent_div_0_form_4_ng_template_4_Template, 4, 17, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, StandardFunctionEditComponent_div_0_form_4_div_5_Template, 9, 9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, StandardFunctionEditComponent_div_0_form_4_div_6_Template, 4, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, StandardFunctionEditComponent_div_0_form_4_div_7_Template, 9, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, StandardFunctionEditComponent_div_0_form_4_div_8_Template, 7, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r3.newDatalinkTransformItemForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r3.hubCache == null ? null : ctx_r3.hubCache.hub.dexihCustomFunctions.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.useCustomFunction);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.useCustomFunction);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.selectedFunction || ctx_r3.selectedCustomFunction);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r3.selectedFunction || ctx_r3.selectedCustomFunction) && ctx_r3.inputParameterControls.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.arrayParameters);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r3.selectedFunction || ctx_r3.selectedCustomFunction) && ctx_r3.allowOutput);
} }
function StandardFunctionEditComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "d-widget-section", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StandardFunctionEditComponent_div_0_ng_template_2_Template, 2, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, StandardFunctionEditComponent_div_0_form_4_Template, 9, 8, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showExpandButton", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.datalinkTransformForm);
} }
class ArrayParameter {
    constructor() {
        this.inputParameterForms = [];
        this.outputParameterForms = [];
        this.parameterItems = [];
    }
    resetItems() {
        let inputArray = this.inputParameterForms[0].controls.arrayParameters;
        for (let i = 0; i < inputArray.controls.length; i++) {
            let item = new ArrayParameterItem();
            this.inputParameterForms.forEach(inputParameterForm => {
                let array = inputParameterForm.controls.arrayParameters;
                item.inputItems.push(array.controls[i]);
            });
            this.outputParameterForms.forEach(outputParameterForm => {
                let array = outputParameterForm.controls.arrayParameters;
                item.outputItems.push(array.controls[i]);
            });
            this.parameterItems.push(item);
        }
    }
}
class ArrayParameterItem {
    constructor() {
        this.inputItems = [];
        this.outputItems = [];
    }
}
class StandardFunctionEditComponent {
    constructor(hubService, authService, editDatalinkService, route) {
        this.hubService = hubService;
        this.authService = authService;
        this.editDatalinkService = editDatalinkService;
        this.route = route;
        this.eFunctionType = _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eFunctionType"];
        this.eParameterDirection = _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eParameterDirection"];
        this.typeCodes = _hub_remote_models__WEBPACK_IMPORTED_MODULE_8__["TypeCodes"];
        this.cancelToken = new _auth_auth_models__WEBPACK_IMPORTED_MODULE_11__["CancelToken"]();
        this.invalidActions = _hub_models__WEBPACK_IMPORTED_MODULE_2__["InvalidActions"];
        this.functionCache = _hub_models__WEBPACK_IMPORTED_MODULE_2__["FunctionCache"];
        this.eGenericType = _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eGenericType"];
        this.variables = [];
        this.allowOutput = false;
        this.allowReturn = true;
        this.arrayParameters = [];
        this.eInvalidActionItems = _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eInvalidActionItems"].filter(c => c.key > 0);
        this.eErrorActionItems = _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eErrorActionItems"].filter(c => c.key > 0);
        this.logger = new _logging__WEBPACK_IMPORTED_MODULE_7__["LogFactory"]('standard-function-edit');
        this.isJoin = false;
    }
    ngOnInit() {
        try {
            this._subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])(this.route.data, this.route.params, this.hubService.getHubCacheObservable(), this.hubService.getRemoteLibrariesObservable(), this.editDatalinkService.hubFormsService.getCurrentFormObservable()).subscribe(result => {
                this.pageTitle = result[0]['pageTitle'];
                let params = result[1];
                this.hubCache = result[2];
                this.remoteLibraries = result[3];
                this.datalinkForm = result[4];
                this.logger.LogC(() => `OnInit`, _logging__WEBPACK_IMPORTED_MODULE_7__["eLogLevel"].Trace);
                if (this.hubCache && this.hubCache.isLoaded() && this.datalinkForm
                    && this.remoteLibraries && this.remoteLibraries.functions.length > 0) {
                    this.transformFunctionType = +params['functionType'];
                    if (this.transformFunctionType === _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eFunctionType"].Validate) {
                        this.datalinkTransformForm = this.editDatalinkService.getValidationTransform();
                        this.datalinkTransformKey = this.datalinkTransformForm.value.key;
                    }
                    else {
                        this.datalinkTransformKey = +params['datalinkTransformKey'];
                        this.datalinkTransformForm = this.editDatalinkService.getDatalinkTransform(this.datalinkTransformKey);
                    }
                    this.variables = this.editDatalinkService.getVariables();
                    this.useCustomFunction = this.datalinkTransformForm.controls.customFunctionKey ? true : false;
                    this.datalinkTransformItemKey = +params['datalinkTransformItemKey'];
                    this.isJoin = this.datalinkTransformForm.value.transformType === _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eTransformType"].Join ||
                        this.datalinkTransformForm.value.transformType === _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eTransformType"].Lookup;
                    // if this is a join transform, then the use the join columns for the input.
                    if (this.isJoin) {
                        const table = this.datalinkTransformForm.controls.joinDatalinkTable.value;
                        if (!table) {
                            this.hubService.addHubErrorMessage('The join table could not be found.');
                            this.authService.navigateUp();
                            return;
                        }
                        this.inputColumns = table.dexihDatalinkColumns;
                    }
                    else {
                        let nodeDatalinkColumn = this.datalinkTransformForm.controls.nodeDatalinkColumn.value;
                        let nodeDatalinkColumnKey = nodeDatalinkColumn ? nodeDatalinkColumn.key : null;
                        let io = new _hub_lineage_models__WEBPACK_IMPORTED_MODULE_9__["InputOutputColumns"]();
                        if (nodeDatalinkColumnKey) {
                            let inputColumns = this.datalinkTransformForm.controls.runTime.value.inputColumns;
                            this.inputColumns = io.getAvailableColumns(inputColumns, nodeDatalinkColumnKey, 0);
                        }
                        else {
                            this.inputColumns = this.datalinkTransformForm.controls.runTime.value.inputColumns;
                        }
                    }
                    this.outputColumns = this.datalinkTransformForm.controls.runTime.value.transformColumns;
                    this.datalinkTargets = this.datalinkForm.controls.dexihDatalinkTargets.value;
                    if (this.datalinkTransformItemKey) {
                        this.datalinkTransformItemForm = this.editDatalinkService
                            .getDatalinkTransformItem(this.datalinkTransformForm, this.datalinkTransformItemKey);
                        if (!this.datalinkTransformItemForm) {
                            this.authService.navigateUp();
                            return;
                        }
                        // create a copy of the form item to allow for cancel.
                        this.newDatalinkTransformItemForm = this.editDatalinkService.hubFormsService
                            .datalinkDatalinkTransformItemFormGroup(this.datalinkTransformForm, this.datalinkTransformItemForm.value);
                        if (this.datalinkTransformItemForm.controls.customFunctionKey.value) {
                            this.selectCustomFunction(this.datalinkTransformItemForm.value.customFunctionKey, false);
                        }
                        else {
                            let selectedFunction = this.remoteLibraries.functions.find(c => c.functionClassName === this.datalinkTransformItemForm.value.functionClassName &&
                                c.functionMethodName === this.datalinkTransformItemForm.value.functionMethodName &&
                                c.functionAssemblyName === this.datalinkTransformItemForm.value.functionAssemblyName);
                            // this.selectedFunction = selectedFunction;
                            this.selectFunction(selectedFunction, false);
                            // this.refreshParameters();
                        }
                    }
                    else {
                        let newItem = new _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["DexihDatalinkTransformItem"]();
                        newItem.datalinkTransformKey = this.datalinkTransformKey;
                        newItem.transformItemType = _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eTransformItemType"].BuiltInFunction;
                        this.newDatalinkTransformItemForm = this.editDatalinkService.hubFormsService
                            .datalinkDatalinkTransformItemFormGroup(this.datalinkTransformForm, newItem);
                    }
                    switch (this.transformFunctionType) {
                        case _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eFunctionType"].Condition:
                        case _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eFunctionType"].JoinCondition:
                            this.functions = this.remoteLibraries.functions.filter(c => c.functionType === _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eFunctionType"].Condition);
                            this.allowOutput = false;
                            break;
                        case _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eFunctionType"].Validate:
                            this.functions = this.remoteLibraries.functions
                                .filter(c => c.functionType === _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eFunctionType"].Condition || c.functionType === _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eFunctionType"].Validate);
                            this.allowOutput = true;
                            break;
                        case _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eFunctionType"].Map:
                            this.functions = this.remoteLibraries.functions
                                .filter(c => c.functionType === _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eFunctionType"].Condition ||
                                c.functionType === _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eFunctionType"].Validate ||
                                c.functionType === _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eFunctionType"].Map);
                            this.allowOutput = true;
                            break;
                        case _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eFunctionType"].Aggregate:
                            this.functions = this.remoteLibraries.functions.filter(c => c.functionType === _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eFunctionType"].Aggregate);
                            this.allowOutput = true;
                            break;
                        case _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eFunctionType"].Series:
                            this.functions = this.remoteLibraries.functions.filter(c => c.functionType === _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eFunctionType"].Series ||
                                c.functionType === _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eFunctionType"].Aggregate);
                            this.allowOutput = true;
                            break;
                        case _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eFunctionType"].Rows:
                            this.functions = this.remoteLibraries.functions.filter(c => c.functionType === _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eFunctionType"].Rows);
                            this.allowOutput = true;
                            this.allowReturn = false;
                            break;
                        case _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eFunctionType"].Profile:
                            this.functions = this.remoteLibraries.functions.filter(c => c.functionType === _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eFunctionType"].Profile);
                            this.allowOutput = false;
                            break;
                        default:
                            this.functions = null;
                    }
                    this.functionCategories = Array.from(new Set(this.functions.map(c => c.category)));
                    this.filteredFunctions = this.functions;
                    this.customFunctions = this.hubCache.hub.dexihCustomFunctions;
                    if (this.datalinkTransformItemForm && this.datalinkTransformItemForm.value.customFunctionKey) {
                        this.useCustomFunction = true;
                        this.selectedCustomFunction = this.hubCache.hub.dexihCustomFunctions
                            .find(c => c.key === this.datalinkTransformItemForm.value.customFunctionKey);
                    }
                    if (this._functionSubscription) {
                        this._functionSubscription.unsubscribe();
                    }
                    this._functionSubscription = this.newDatalinkTransformItemForm.controls.customFunctionKey.valueChanges
                        .subscribe(customFunctionKey => {
                        this.selectCustomFunction(customFunctionKey, false);
                    });
                }
                if (this._saveSubscription) {
                    this._saveSubscription.unsubscribe();
                }
                this._saveSubscription = this.editDatalinkService.savingDatalink.subscribe(value => {
                    if (value) {
                        this.apply();
                    }
                });
            });
        }
        catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Standard Function Edit');
        }
    }
    ngOnDestroy() {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
        if (this._returnParameterSubscription) {
            this._returnParameterSubscription.unsubscribe();
        }
        if (this._functionSubscription) {
            this._functionSubscription.unsubscribe();
        }
        if (this._saveSubscription) {
            this._saveSubscription.unsubscribe();
        }
        this.cancelToken.cancel();
    }
    updateCategory(value) {
        if (value) {
            this.filteredFunctions = this.functions.filter(c => c.category === value);
        }
        else {
            this.filteredFunctions = this.functions;
        }
    }
    canDeactivate() {
        return new Promise(resolve => {
            if (this.newDatalinkTransformItemForm && !this.newDatalinkTransformItemForm.pristine) {
                this.authService.confirmDialog('The function has changed', 'The function has changed.  Do you want to discard the changes and continue?')
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
    parametersArray() {
        return this.newDatalinkTransformItemForm.controls.dexihFunctionParameters;
    }
    refreshParameters() {
        var _a, _b, _c, _d, _e;
        let parametersArray = this.parametersArray();
        // convoluted sort below allows sorting by the direction then the position
        this.inputParameterControls = parametersArray.controls
            .sort((a, b) => a.value.position - b.value.position)
            .filter(c => (c.value.direction === _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eParameterDirection"].Input || c.value.direction === _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eParameterDirection"].ResultInput
            || c.value.direction === _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eParameterDirection"].Join));
        // convoluted sort below allows sorting by the direction then the position
        this.outputParameterControls = parametersArray.controls
            .sort((a, b) => a.value.position - b.value.position)
            .filter(c => _hub_models__WEBPACK_IMPORTED_MODULE_2__["HubCache"].parameterIsOutput(c.value));
        // don't include return value (which will determine pass/fail) for validation transforms.
        if (this.transformFunctionType === _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eFunctionType"].Validate) {
            this.outputParameterControls = this.outputParameterControls.filter(c => c.value.direction !== _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eParameterDirection"].ReturnValue);
        }
        this.arrayParameters = [];
        if (this.selectedFunction) {
            (_a = this.selectedFunction.inputParameters) === null || _a === void 0 ? void 0 : _a.filter(c => c.linkedName).forEach(parameter => {
                this.addArrayParameter(parameter, true);
            });
            (_b = this.selectedFunction.outputParameters) === null || _b === void 0 ? void 0 : _b.filter(c => c.linkedName).forEach(parameter => {
                this.addArrayParameter(parameter, false);
            });
            (_c = this.selectedFunction.resultInputParameters) === null || _c === void 0 ? void 0 : _c.filter(c => c.linkedName).forEach(parameter => {
                this.addArrayParameter(parameter, true);
            });
            (_d = this.selectedFunction.resultOutputParameters) === null || _d === void 0 ? void 0 : _d.filter(c => c.linkedName).forEach(parameter => {
                this.addArrayParameter(parameter, false);
            });
            (_e = this.selectedFunction.resultReturnParameters) === null || _e === void 0 ? void 0 : _e.filter(c => c.linkedName).forEach(parameter => {
                this.addArrayParameter(parameter, false);
            });
        }
        this.arrayParameters.forEach(arrayParameter => arrayParameter.resetItems());
    }
    addArrayParameter(parameter, isInput) {
        let arrayParameter = this.arrayParameters.find(c => c.name === parameter.linkedName);
        if (!arrayParameter) {
            arrayParameter = new ArrayParameter();
            arrayParameter.name = parameter.linkedName;
            arrayParameter.functionParameter = parameter;
            this.arrayParameters.push(arrayParameter);
        }
        if (isInput) {
            let controls = this.inputParameterControls.find(c => c.controls.name.value === parameter.name);
            arrayParameter.inputParameterForms.push(controls);
        }
        else {
            let controls = this.outputParameterControls.find(c => c.controls.name.value === parameter.name);
            arrayParameter.outputParameterForms.push(controls);
        }
    }
    // when a new standard function is selected
    // reset all the parameters
    selectFunction(value, markAsDirty) {
        this.selectedFunction = value;
        if (value === null || value === undefined) {
            return;
        }
        this.newDatalinkTransformItemForm.controls.functionAssemblyName.setValue(this.selectedFunction.functionAssemblyName);
        this.newDatalinkTransformItemForm.controls.functionClassName.setValue(this.selectedFunction.functionClassName);
        this.newDatalinkTransformItemForm.controls.functionMethodName.setValue(this.selectedFunction.functionMethodName);
        this.newDatalinkTransformItemForm.controls.targetDatalinkColumn.setValue(null);
        if (!this.newDatalinkTransformItemForm.controls.genericTypeCode.value) {
            if (this.selectedFunction.genericTypeDefault) {
                this.newDatalinkTransformItemForm.controls.genericTypeCode.setValue(this.selectedFunction.genericTypeDefault);
            }
            else {
                if (this.selectedFunction.genericType === _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eGenericType"].Numeric) {
                    this.newDatalinkTransformItemForm.controls.genericTypeCode.setValue(_shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eTypeCode"].Decimal);
                }
                else {
                    this.newDatalinkTransformItemForm.controls.genericTypeCode.setValue(_shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eTypeCode"].String);
                }
            }
        }
        switch (this.selectedFunction.genericType) {
            case _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eGenericType"].All:
                this.typeCodes = _hub_remote_models__WEBPACK_IMPORTED_MODULE_8__["TypeCodes"];
                break;
            case _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eGenericType"].Numeric:
                this.typeCodes = _hub_remote_models__WEBPACK_IMPORTED_MODULE_8__["TypeCodes"].filter(c => c.isNumeric);
                break;
            case _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eGenericType"].String:
                this.typeCodes = _hub_remote_models__WEBPACK_IMPORTED_MODULE_8__["TypeCodes"].filter(c => c.isString);
                break;
            case _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eGenericType"].None:
                this.typeCodes = [];
        }
        if (this.selectedFunction) {
            let parameters = this.parametersArray();
            let existingParameters = [];
            while (parameters.length) {
                existingParameters.push(parameters.value[0]);
                parameters.removeAt(0);
            }
            if (this.selectedFunction.inputParameters) {
                this.selectedFunction.inputParameters.forEach((param, index) => {
                    if (param) {
                        parameters.push(this.newParameter(existingParameters, param, index, this.isJoin ? _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eParameterDirection"].Join : _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eParameterDirection"].Input, this.selectedFunction.genericTypeDefault));
                    }
                });
            }
            if (this.selectedFunction.outputParameters) {
                this.selectedFunction.outputParameters.forEach((param, index) => {
                    if (param) {
                        if (param) {
                            parameters.push(this.newParameter(existingParameters, param, index + 100, _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eParameterDirection"].Output, this.selectedFunction.genericTypeDefault));
                        }
                    }
                });
            }
            if (this.selectedFunction.resultInputParameters) {
                this.selectedFunction.resultInputParameters.forEach((param, index) => {
                    if (param) {
                        parameters.push(this.newParameter(existingParameters, param, index + 200, _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eParameterDirection"].ResultInput, this.selectedFunction.genericTypeDefault));
                    }
                });
            }
            if (this.selectedFunction.resultOutputParameters) {
                this.selectedFunction.resultOutputParameters.forEach((param, index) => {
                    if (param) {
                        if (param) {
                            parameters.push(this.newParameter(existingParameters, param, index + 300, _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eParameterDirection"].ResultOutput, this.selectedFunction.genericTypeDefault));
                        }
                    }
                });
            }
            if (this.selectedFunction.returnParameters) {
                if (this.allowReturn && this.selectedFunction.returnParameters.length > 0) {
                    this.selectedFunction.returnParameters.forEach((parameter, index) => {
                        parameters.push(this.newParameter(existingParameters, parameter, index + 400, _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eParameterDirection"].ReturnValue, this.selectedFunction.genericTypeDefault));
                    });
                }
            }
            if (this.selectedFunction.resultReturnParameters) {
                if (this.allowReturn && this.selectedFunction.resultReturnParameters.length > 0) {
                    this.selectedFunction.resultReturnParameters.forEach(parameter => {
                        parameters.push(this.newParameter(existingParameters, parameter, 0, _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eParameterDirection"].ResultReturnValue, this.selectedFunction.genericTypeDefault));
                    });
                }
            }
            this.refreshParameters();
            if (markAsDirty) {
                this.newDatalinkTransformItemForm.markAsDirty();
            }
        }
        else {
            this.selectedFunction = null;
        }
    }
    newParameter(existingParameters, param, index, direction, genericTypeDefault) {
        let existingValue = existingParameters.find(c => c.name === param.parameterName);
        let newParameter = new _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["DexihFunctionParameter"]();
        // newParameter.datalinkTransformItemKey = this.datalinkTransformItemKey;
        newParameter.name = param.parameterName;
        newParameter.rank = param.rank;
        newParameter.direction = direction;
        newParameter.isGeneric = param.isGeneric;
        newParameter.position = index;
        newParameter.key = this.hubCache.getNextSequence();
        newParameter['runTime'] = { functionParameter: param };
        if (existingValue) {
            newParameter.key = existingValue.key;
            newParameter.datalinkColumn = existingValue.datalinkColumn;
            newParameter.value = existingValue.value;
            newParameter.dataType = param.isGeneric ? existingValue.dataType : param.dataType;
            existingValue.arrayParameters.forEach(p => {
                p['runTime'] = { functionParameter: param };
            });
            newParameter.arrayParameters = existingValue.arrayParameters;
        }
        else {
            newParameter.value = param.defaultValue;
            newParameter.dataType = param.isGeneric ? genericTypeDefault : param.dataType;
        }
        newParameter.isValid = true;
        let newParameterForm = this.editDatalinkService.hubFormsService.datalinkFunctionParametersFormGroup(newParameter);
        return newParameterForm;
    }
    // when a new standard function is selected
    // reset all the parameters
    selectCustomFunction(customFunctionKey, markAsDirty) {
        this.selectedCustomFunction = this.hubCache.hub.dexihCustomFunctions.find(c => c.key === customFunctionKey);
        if (this.selectedCustomFunction) {
            let parameters = this.parametersArray();
            let existingParameters = [];
            while (parameters.length) {
                existingParameters.push(parameters.value[0]);
                parameters.removeAt(0);
            }
            this.selectedCustomFunction.dexihCustomFunctionParameters
                .filter(c => (c.direction === _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eParameterDirection"].Input || c.direction === _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eParameterDirection"].Join) && c.isValid)
                .forEach((param, index) => {
                if (param) {
                    let newParameterForm = this.newParameter(existingParameters, param, index, this.isJoin ? _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eParameterDirection"].Join : _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eParameterDirection"].Input, this.selectedCustomFunction.genericTypeDefault);
                    parameters.push(newParameterForm);
                }
            });
            this.selectedCustomFunction.dexihCustomFunctionParameters.filter(c => c.direction === _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eParameterDirection"].Output && c.isValid)
                .forEach((param, index) => {
                if (param) {
                    let newParameterForm = this.newParameter(existingParameters, param, index, _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eParameterDirection"].Output, this.selectedCustomFunction.genericTypeDefault);
                    parameters.push(newParameterForm);
                }
            });
            let returnParameter = new _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["DexihFunctionParameter"]();
            returnParameter.dataType = this.selectedCustomFunction.returnType;
            returnParameter.name = 'Return';
            returnParameter.direction = _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eParameterDirection"].Output;
            returnParameter.rank = 0;
            returnParameter.position = -1;
            returnParameter.isValid = true;
            let newParameterForm2 = this.newParameter(existingParameters, returnParameter, 0, _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eParameterDirection"].ReturnValue, this.selectedCustomFunction.genericTypeDefault);
            parameters.push(newParameterForm2);
            this.refreshParameters();
            if (markAsDirty) {
                this.newDatalinkTransformItemForm.markAsDirty();
            }
        }
    }
    createArrayParameter(parentParameter, direction, position = null, genericTypeDefault) {
        let param = parentParameter['runTime'].functionParameter;
        let newParameter = new _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["DexihFunctionArrayParameter"]();
        newParameter.isGeneric = param.isGeneric;
        newParameter.dataType = param.isGeneric ? genericTypeDefault : parentParameter.dataType;
        newParameter.position = position ? position + 1 : 10000000;
        newParameter.name = param.name;
        newParameter.direction = direction;
        newParameter.rank = 0;
        newParameter.key = this.hubCache.getNextSequence();
        newParameter.datalinkColumn = null;
        newParameter.isValid = true;
        newParameter['runTime'] = { functionParameter: param };
        return newParameter;
    }
    addParameter(parentParameterForm, direction, position = null) {
        if (direction === _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eParameterDirection"].Input && this.isJoin) {
            direction = _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eParameterDirection"].Join;
        }
        let parentParameter = parentParameterForm.value;
        let newParameter = this.createArrayParameter(parentParameter, direction, 0, this.newDatalinkTransformItemForm.controls.genericTypeCode.value);
        let newParameterForm = this.editDatalinkService.hubFormsService.datalinkFunctionArrayParametersFormGroup(newParameter);
        let arrayForm = parentParameterForm.controls.arrayParameters;
        if (position !== null) {
            arrayForm.insert(position + 1, newParameterForm);
        }
        else {
            arrayForm.push(newParameterForm);
        }
        // reset the positions
        arrayForm.controls.forEach((p, index) => {
            p.controls.position.setValue(index * 10);
        });
        this.refreshParameters();
        return newParameterForm;
    }
    addInputOutputParameter(arrayParameter, position = null) {
        let item = new ArrayParameterItem();
        arrayParameter.inputParameterForms.forEach(parameterForm => {
            let parameter = this.addParameter(parameterForm, this.isJoin ? _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eParameterDirection"].Join : _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eParameterDirection"].Input, position);
            item.inputItems.push(parameter);
        });
        arrayParameter.outputParameterForms.forEach(parameterForm => {
            let parameter = this.addParameter(parameterForm, _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eParameterDirection"].Output, position);
            item.outputItems.push(parameter);
        });
        if (position !== null) {
            arrayParameter.parameterItems.splice(position, 0, item);
        }
        else {
            arrayParameter.parameterItems.push(item);
        }
    }
    removeParameter(parentParameterForm, position) {
        let arrayForm = parentParameterForm.controls.arrayParameters;
        if (position > -1) {
            arrayForm.removeAt(position);
            this.newDatalinkTransformItemForm.markAsDirty();
            this.refreshParameters();
        }
    }
    removeInputOutputParameter(arrayParameter, position = null) {
        arrayParameter.inputParameterForms.forEach(parameterForm => {
            this.removeParameter(parameterForm, position);
        });
        arrayParameter.outputParameterForms.forEach(parameterForm => {
            this.removeParameter(parameterForm, position);
        });
        if (position !== null) {
            arrayParameter.parameterItems.splice(position, 1);
        }
        else {
            arrayParameter.parameterItems.splice(arrayParameter.parameterItems.length - 1, 1);
        }
    }
    addAllColumns(parentParameterForm) {
        this.clearArray(parentParameterForm);
        let isLabel = parentParameterForm.value.runTime.functionParameter.isLabel;
        let parentParameter = parentParameterForm.value;
        let arrayForm = parentParameterForm.controls.arrayParameters;
        let position = 1;
        this.inputColumns.forEach(column => {
            let newParameter = this.createArrayParameter(parentParameter, this.isJoin ? _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eParameterDirection"].Join : _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eParameterDirection"].Input, position++, this.selectedFunction.genericTypeDefault);
            if (isLabel) {
                newParameter.value = column.name;
            }
            else {
                newParameter.datalinkColumn = column;
            }
            let newParameterForm = this.editDatalinkService.hubFormsService.datalinkFunctionArrayParametersFormGroup(newParameter);
            arrayForm.push(newParameterForm);
        });
        this.refreshParameters();
    }
    addAllInputOutputColumns(arrayParameter) {
        // add the first parameter
        this.addAllColumns(arrayParameter.inputParameterForms[0]);
        let inputArrayForm = arrayParameter.inputParameterForms[0].controls.arrayParameters;
        if (arrayParameter.inputParameterForms.length > 1) {
            this.clearArray(arrayParameter.inputParameterForms[1]);
            for (let i = 0; i < inputArrayForm.length; i++) {
                let parameter = this.addParameter(arrayParameter.inputParameterForms[1], this.isJoin ? _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eParameterDirection"].Join : _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eParameterDirection"].Input);
                // if the first parameter is a label, then map the matching column to the second input parameter
                if (arrayParameter.inputParameterForms[0].value.runTime.functionParameter.isLabel) {
                    parameter.controls.datalinkColumn.setValue(this.inputColumns[i]);
                }
            }
            // add any other parameters with default values.
            for (let i = 2; i < arrayParameter.inputParameterForms.length; i++) {
                this.clearArray(arrayParameter.inputParameterForms[i]);
                for (let j = 0; j < inputArrayForm.length; j++) {
                    let parameter = this.addParameter(arrayParameter.inputParameterForms[i], this.isJoin ? _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eParameterDirection"].Join : _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eParameterDirection"].Input);
                    parameter.controls.value.setValue(arrayParameter.inputParameterForms[i].value.runTime.functionParameter.defaultValue);
                }
            }
        }
        // add any output columns of the same length.
        if (arrayParameter.outputParameterForms.length > 0) {
            for (let i = 0; i < arrayParameter.outputParameterForms.length; i++) {
                this.clearArray(arrayParameter.outputParameterForms[i]);
                for (let j = 0; j < inputArrayForm.length; j++) {
                }
            }
        }
        arrayParameter.resetItems();
    }
    clearArray(parameterForm) {
        let arrayForm = parameterForm.controls.arrayParameters;
        for (let i = arrayForm.controls.length - 1; i >= 0; i--) {
            arrayForm.removeAt(i);
        }
        this.refreshParameters();
    }
    clearInputOutputArray(arrayParameter) {
        arrayParameter.inputParameterForms.forEach(form => {
            this.clearArray(form);
        });
        arrayParameter.outputParameterForms.forEach(form => {
            this.clearArray(form);
        });
    }
    importInputOutputMappings(arrayParameter) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = yield this.editDatalinkService
                .importFunctionMappings(this.datalinkTransformKey, this.newDatalinkTransformItemForm.value, this.cancelToken);
            if (result === null) {
                return;
            }
            let inputArrayForm = arrayParameter.inputParameterForms[0].controls.arrayParameters;
            this.clearArray(arrayParameter.inputParameterForms[0]);
            for (let i = 0; i < result.length; i++) {
                let parameter = this.addParameter(arrayParameter.inputParameterForms[0], this.isJoin ? _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eParameterDirection"].Join : _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eParameterDirection"].Input);
                parameter.controls.value.setValue(result[i]);
                // // if the first parameter is a label, then map the matching column to the second input parameter
                // if (arrayParameter.inputParameterForms[0].value.runTime.functionParameter.isLabel) {
                //   parameter.controls.datalinkColumn.setValue(this.inputColumns[i]);
                // }
            }
            // add any other parameters with default values.
            for (let i = 1; i < arrayParameter.inputParameterForms.length; i++) {
                this.clearArray(arrayParameter.inputParameterForms[i]);
                for (let j = 0; j < inputArrayForm.length; j++) {
                    let parameter = this.addParameter(arrayParameter.inputParameterForms[i], this.isJoin ? _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eParameterDirection"].Join : _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eParameterDirection"].Input);
                    parameter.controls.value.setValue(arrayParameter.inputParameterForms[i].value.runTime.functionParameter.defaultValue);
                }
            }
            // add any output columns of the same length.
            if (arrayParameter.outputParameterForms.length > 0) {
                for (let i = 0; i < arrayParameter.outputParameterForms.length; i++) {
                    this.clearArray(arrayParameter.outputParameterForms[i]);
                    for (let j = 0; j < inputArrayForm.length; j++) {
                    }
                }
            }
            arrayParameter.resetItems();
        });
    }
    autoMap() {
        this.outputParameterControls.forEach(param => {
            let newColumn = new _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["DexihDatalinkColumn"]();
            newColumn.key = this.hubService.getHubCache().getNextSequence();
            newColumn.position = 1000 - newColumn.key;
            let paramValue = param.value;
            newColumn.dataType = paramValue.dataType;
            newColumn.allowDbNull = true;
            newColumn.name = paramValue['runTime'].functionParameter.name;
            newColumn.logicalName = paramValue['runTime'].functionParameter.name;
            newColumn.rank = paramValue.rank;
            param.controls.datalinkColumn.setValue(newColumn);
            this.newDatalinkTransformItemForm.markAsDirty();
        });
    }
    cancel() {
        this.authService.navigateUp();
    }
    apply() {
        this.editDatalinkService.insertDatalinkTransformItem(this.datalinkTransformForm, this.newDatalinkTransformItemForm);
        this.newDatalinkTransformItemForm.markAsPristine();
    }
    applyExit() {
        this.apply();
        this.authService.navigateUp();
    }
}
StandardFunctionEditComponent.ɵfac = function StandardFunctionEditComponent_Factory(t) { return new (t || StandardFunctionEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hub_service__WEBPACK_IMPORTED_MODULE_3__["HubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_datalink_edit_service__WEBPACK_IMPORTED_MODULE_4__["DatalinkEditService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
StandardFunctionEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StandardFunctionEditComponent, selectors: [["dexih-function-edit"]], decls: 1, vars: 1, consts: [[4, "ngIf"], ["title", "Edit Function", 3, "showExpandButton"], ["header", ""], [3, "formGroup", 4, "ngIf"], [1, "mr-1", 3, "disabled", "click"], [3, "click"], [3, "formGroup"], [3, "ngIf"], ["class", "form-row", 4, "ngIf"], ["class", "mt-1", 4, "ngIf"], ["class", "mt-1", 4, "ngFor", "ngForOf"], ["label", "Use a custom function", 3, "ngModel", "ngModelOptions", "ngModelChange"], [3, "ngStyle"], ["label", "Select a hub function", "formControlName", "customFunctionKey", "itemKey", "key", "itemName", "name", "itemTitle", "description", 3, "items"], [3, "key"], ["label", "Category", "selectNullMessage", "(All functions)", 3, "items", "allowNullSelect", "ngModelOptions", "ngModel", "sortItems", "ngModelChange"], ["label", "Select a standard function", "itemKey", "name", "itemName", "name", "itemTitle", "description", 3, "ngModel", "ngModelOptions", "items", "enableKeySelect", "note", "sortItems", "ngModelChange"], [1, "form-row"], ["class", "col-xs-12 col-sm-6 col-md-3", 3, "ngStyle", 4, "ngIf"], [1, "col-xs-12", "col-sm-6", "col-md-3", 3, "ngStyle"], ["label", "Action when error", "formControlName", "onError", "itemKey", "key", "itemName", "name", "iconClass", "fa fa-database", 3, "items", "enableFilter"], ["class", "col-xs-12 col-sm-6 col-md-4", 4, "ngIf"], ["class", "col-xs-12 col-sm-6 col-md-3", 4, "ngIf"], [1, "col-xs-12", "col-sm-6", "col-md-3"], ["label", "Cache Options", "formControlName", "functionCaching", "itemKey", "key", "itemName", "name", 3, "items"], ["label", "Action when null", "formControlName", "onNull", "itemKey", "key", "itemName", "name", "iconClass", "fa fa-database", 3, "items", "enableFilter"], ["label", "Action when false", "formControlName", "invalidAction", "itemKey", "key", "itemName", "name", "iconClass", "fa fa-database", 3, "items", "enableFilter"], [1, "col-xs-12", "col-sm-6", "col-md-4"], ["label", "Return 'NOT' result", "formControlName", "notCondition"], ["label", "Data Type", "formControlName", "genericTypeCode", "itemKey", "key", "itemName", "name", 3, "items"], [1, "mt-1"], [1, "d-flex", "flex-row", "mb-1"], ["class", "mb-1", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "mb-1", 3, "ngStyle"], [3, "inputParameterForms", "inputColumns", "nodeDatalinkColumnKey", "allowAdd", "allowRemove", "updateParameterName", "variables", 4, "ngIf"], [1, "input-group-text"], [1, "ml-auto"], ["iconClass", "fa fa-download", "text", "Import Mappings", "title", "Attempt to import the mappings from the source data", "class", "mr-1", 3, "click", 4, "ngIf"], ["iconClass", "fa fa-plus", "text", "Add Parameter", "title", "Add a parameter to the array", 1, "mr-1", 3, "click"], ["iconClass", "fa fa-columns", "text", "Add All Inputs", "title", "Add all the input columns to the array", 1, "mr-1", 3, "click"], ["iconClass", "fa fa-eraser", "text", "Clear", 3, "click"], [3, "inputParameterForms", "nodeDatalinkColumnKey", "inputColumns", "allowAdd", "allowRemove", "updateParameterName", "rank", "variables", 4, "ngIf"], ["class", "pl-2 mb-1", 3, "ngStyle", 4, "ngFor", "ngForOf"], ["iconClass", "fa fa-download", "text", "Import Mappings", "title", "Attempt to import the mappings from the source data", 1, "mr-1", 3, "click"], [3, "inputParameterForms", "nodeDatalinkColumnKey", "inputColumns", "allowAdd", "allowRemove", "updateParameterName", "rank", "variables"], [1, "pl-2", "mb-1", 3, "ngStyle"], [3, "inputParameterForms", "inputColumns", "allowAdd", "nodeDatalinkColumnKey", "allowRemove", "updateParameterName", "variables", "addParameter", "removeParameter"], ["class", "form-text text-muted", 4, "ngIf"], [1, "form-text", "text-muted"], [3, "data"], [3, "inputParameterForms", "inputColumns", "nodeDatalinkColumnKey", "allowAdd", "allowRemove", "updateParameterName", "variables"], ["iconClass", "fa fa-plus", "text", "Add Mapping", "title", "Add a parameter to the array", 1, "mr-1", 3, "click"], ["class", "pl-2", 3, "ngStyle", 4, "ngFor", "ngForOf"], [1, "pl-2", 3, "ngStyle"], [3, "inputParameterForms", "outputParameterForms", "nodeDatalinkColumnKey", "inputColumns", "outputColumns", "datalinkTargets", "allowAdd", "allowRemove", "updateParameterName", "variables", "addParameter", "removeParameter"], [1, "d-flex", "flex-row"], ["text", "Auto Map", "buttonClass", "btn-sm btn-outline-primary", 3, "click"], [3, "ngStyle", 4, "ngFor", "ngForOf"], [3, "outputParameterForm", "outputColumns", "datalinkTargets", "allowAdd", "allowRemove", 4, "ngIf"], [3, "outputParameterForm", "outputColumns", "datalinkTargets", "allowAdd", "allowRemove", "rank", 4, "ngIf"], [3, "outputParameterForm", "outputColumns", "datalinkTargets", "allowAdd", "allowRemove", "rank"], [3, "outputParameterForm", "outputColumns", "datalinkTargets", "allowAdd", "allowRemove", "addParameter", "removeParameter"], [3, "outputParameterForm", "outputColumns", "datalinkTargets", "allowAdd", "allowRemove"]], template: function StandardFunctionEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, StandardFunctionEditComponent_div_0_Template, 5, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newDatalinkTransformItemForm && ctx.inputColumns && ctx.outputColumns);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], ngx_d_components__WEBPACK_IMPORTED_MODULE_13__["ɵa"], ngx_d_components__WEBPACK_IMPORTED_MODULE_13__["DButtonApplyComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_13__["DButtonCancelComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], ngx_d_components__WEBPACK_IMPORTED_MODULE_13__["DFormCheckboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgStyle"], ngx_d_components__WEBPACK_IMPORTED_MODULE_13__["DFormSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormControlName"], _buttons_customFunction_edit_button_customFunction_edit_button_component__WEBPACK_IMPORTED_MODULE_15__["CustomFunctionEditButtonComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_13__["DButtonComponent"], _parameters_input_parameter_component__WEBPACK_IMPORTED_MODULE_16__["InputParameterComponent"], ngx_d_markdown__WEBPACK_IMPORTED_MODULE_17__["DMarkdownComponent"], _parameters_output_parameter_component__WEBPACK_IMPORTED_MODULE_18__["OutputParameterComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StandardFunctionEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dexih-function-edit',
                templateUrl: './standard-function-edit.component.html'
            }]
    }], function () { return [{ type: _hub_service__WEBPACK_IMPORTED_MODULE_3__["HubService"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }, { type: _datalink_edit_service__WEBPACK_IMPORTED_MODULE_4__["DatalinkEditService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/+hub/datalink/datalink-edit/target-columns/index.ts":
/*!*********************************************************************!*\
  !*** ./src/app/+hub/datalink/datalink-edit/target-columns/index.ts ***!
  \*********************************************************************/
/*! exports provided: TargetColumnComponent, TargetColumnsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _target_column_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./target-column.component */ "./src/app/+hub/datalink/datalink-edit/target-columns/target-column.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TargetColumnComponent", function() { return _target_column_component__WEBPACK_IMPORTED_MODULE_0__["TargetColumnComponent"]; });

/* harmony import */ var _target_columns_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./target-columns.component */ "./src/app/+hub/datalink/datalink-edit/target-columns/target-columns.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TargetColumnsComponent", function() { return _target_columns_component__WEBPACK_IMPORTED_MODULE_1__["TargetColumnsComponent"]; });





/***/ }),

/***/ "./src/app/+hub/datalink/datalink-edit/target-columns/target-column.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/+hub/datalink/datalink-edit/target-columns/target-column.component.ts ***!
  \***************************************************************************************/
/*! exports provided: TargetColumnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TargetColumnComponent", function() { return TargetColumnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _hub_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../hub.service */ "./src/app/+hub/hub.service.ts");
/* harmony import */ var _datalink_edit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../datalink-edit.service */ "./src/app/+hub/datalink/datalink-edit/datalink-edit.service.ts");
/* harmony import */ var _hub_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hub.models */ "./src/app/+hub/hub.models.ts");
/* harmony import */ var _hub_lineage_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hub.lineage.models */ "./src/app/+hub/hub.lineage.models.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _logging__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../logging */ "./src/logging.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../+auth/auth.service */ "./src/app/+auth/auth.service.ts");
/* harmony import */ var _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/shared.models */ "./src/app/shared/shared.models.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

















function TargetColumnComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TargetColumnComponent_div_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.editColumn(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r0.column.logicalName + " " + ctx_r0.eTypeCode[ctx_r0.column.dataType]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.mappingStatusInfoLineage.statusClass)("title", ctx_r0.mappingStatusInfoLineage.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.column.logicalName, " ");
} }
function TargetColumnComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TargetColumnComponent_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.editColumn(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r1.column.logicalName + " " + ctx_r1.eTypeCode[ctx_r1.column.dataType]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r1.mappingStatusInfoLineage.statusClass)("title", ctx_r1.mappingStatusInfoLineage.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.column.logicalName, " ");
} }
class TargetColumnComponent {
    constructor(authService, hubService, editDatalinkService, router, route) {
        this.authService = authService;
        this.hubService = hubService;
        this.editDatalinkService = editDatalinkService;
        this.router = router;
        this.route = route;
        this.column = null;
        this.inputTables = null;
        this.inputOutputDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.eMappingStatus = _hub_models__WEBPACK_IMPORTED_MODULE_3__["eMappingStatus"];
        this.eTypeCode = _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eTypeCode"];
        this.logger = new _logging__WEBPACK_IMPORTED_MODULE_7__["LogFactory"]('output-column.component');
        this.logCount = 0;
    }
    ngOnInit() {
        try {
            this._subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])(this.hubService.getHubCacheObservable(), this.editDatalinkService.hubFormsService.getCurrentFormObservable()).subscribe(result => {
                this.hubCache = result[0];
                this.datalinkForm = result[1];
                this.logger.LogC(() => `Subscription count: ${this.logCount++}`, _logging__WEBPACK_IMPORTED_MODULE_7__["eLogLevel"].Trace);
                this.childColumns = this.column.childColumns;
                this.refreshStatus();
            });
        }
        catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Output Column');
        }
    }
    ngOnChanges() {
        this.refreshStatus();
    }
    ngOnDestroy() {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
    }
    refreshStatus() {
        if (this.datalinkForm) {
            let columnUsage = new _hub_lineage_models__WEBPACK_IMPORTED_MODULE_4__["ColumnUsageNode"](_hub_lineage_models__WEBPACK_IMPORTED_MODULE_4__["eDatalinkObjectType"].TargetTable, _hub_lineage_models__WEBPACK_IMPORTED_MODULE_4__["eObjectUse"].Target, this.datalinkForm.value, null, this.column, null, null, _hub_models__WEBPACK_IMPORTED_MODULE_3__["eMappingStatus"].NotMapped, this.hubCache);
            this.mappingStatusLineage = columnUsage.createDatalinkLineage(true);
            this.mappingStatusInfoLineage = _hub_models__WEBPACK_IMPORTED_MODULE_3__["lineageMappingStatuses"].find(c => c.key === this.mappingStatusLineage);
        }
    }
    editColumn() {
        if (this.column.key && (this.mappingStatusLineage === _hub_models__WEBPACK_IMPORTED_MODULE_3__["eMappingStatus"].Mapped
            || this.mappingStatusLineage === _hub_models__WEBPACK_IMPORTED_MODULE_3__["eMappingStatus"].MappedToNothing)) {
            this.router.navigate(['column', this.column.key], { relativeTo: this.route.parent });
        }
        else {
            this.authService.informationDialog('Can not edit column', 
            // tslint:disable-next-line:max-line-length
            'This column is not created by the current transform (i.e. a pass-through or target column).  To edit a column first create a mapping.');
        }
    }
}
TargetColumnComponent.ɵfac = function TargetColumnComponent_Factory(t) { return new (t || TargetColumnComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hub_service__WEBPACK_IMPORTED_MODULE_1__["HubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_datalink_edit_service__WEBPACK_IMPORTED_MODULE_2__["DatalinkEditService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"])); };
TargetColumnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TargetColumnComponent, selectors: [["target-column"]], inputs: { column: "column", datalinkTransformForm: "datalinkTransformForm", inputTables: "inputTables" }, outputs: { inputOutputDrop: "inputOutputDrop" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 2, consts: [["class", "list-group-item p-0 rounded-0", 3, "title", "click", 4, "ngIf"], [1, "list-group-item", "p-0", "rounded-0", 3, "title", "click"], [1, "d-flex", "flex-row"], [1, "input-group-text", "rounded-0", "border-0", "border-r1", 3, "ngClass", "title"], [1, "flex-fill", "input-group-text", "ellipsis-overflow", "rounded-0", "border-0"]], template: function TargetColumnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TargetColumnComponent_div_0_Template, 5, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TargetColumnComponent_div_1_Template, 5, 4, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mappingStatusInfoLineage.key != ctx.eMappingStatus.Mapped);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mappingStatusInfoLineage.key == ctx.eMappingStatus.Mapped);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TargetColumnComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'target-column',
                templateUrl: './target-column.component.html'
            }]
    }], function () { return [{ type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"] }, { type: _hub_service__WEBPACK_IMPORTED_MODULE_1__["HubService"] }, { type: _datalink_edit_service__WEBPACK_IMPORTED_MODULE_2__["DatalinkEditService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }]; }, { column: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], datalinkTransformForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], inputTables: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], inputOutputDrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/+hub/datalink/datalink-edit/target-columns/target-columns.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/+hub/datalink/datalink-edit/target-columns/target-columns.component.ts ***!
  \****************************************************************************************/
/*! exports provided: TargetColumnsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TargetColumnsComponent", function() { return TargetColumnsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var ngx_d_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-d-components */ "./node_modules/ngx-d-components/__ivy_ngcc__/fesm2015/ngx-d-components.js");
/* harmony import */ var _shared_utils_dropzone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/utils/dropzone */ "./src/app/shared/utils/dropzone.ts");
/* harmony import */ var _target_column_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./target-column.component */ "./src/app/+hub/datalink/datalink-edit/target-columns/target-column.component.ts");
/* harmony import */ var _shared_utils_isValid_filter_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/utils/isValid-filter.pipe */ "./src/app/shared/utils/isValid-filter.pipe.ts");
/* harmony import */ var _shared_utils_sort_pipe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/utils/sort.pipe */ "./src/app/shared/utils/sort.pipe.ts");










function TargetColumnsComponent_div_0_d_widget_section_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dropData", function TargetColumnsComponent_div_0_d_widget_section_2_div_1_Template_div_dropData_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const column_r5 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r7.newInputOutputDrop($event, column_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "target-column", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const column_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("zone", ctx_r4.allowMappingOutputs ? "input-column" : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datalinkTransformForm", ctx_r4.datalinkTransformForm)("column", column_r5);
} }
function TargetColumnsComponent_div_0_d_widget_section_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-widget-section", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TargetColumnsComponent_div_0_d_widget_section_2_div_1_Template, 2, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "isValidFilter");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "fieldSort");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const target_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Target (" + target_r3.table.name + ")")("padding", false)("showExpandButton", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 6, target_r3.table.dexihTableColumns, "position")));
} }
function TargetColumnsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1, 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TargetColumnsComponent_div_0_d_widget_section_2_Template, 4, 9, "d-widget-section", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.targets);
} }
class TargetColumnsComponent {
    constructor() {
        this.allowMappingOutputs = true;
        this.inputOutputDrop = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    ngOnChanges() {
    }
    ngOnDestroy() {
    }
    newInputOutputDrop(inputColumn, outputColumn) {
        this.inputOutputDrop.emit({
            inputColumn: inputColumn,
            outputColumn: outputColumn
        });
    }
}
TargetColumnsComponent.ɵfac = function TargetColumnsComponent_Factory(t) { return new (t || TargetColumnsComponent)(); };
TargetColumnsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TargetColumnsComponent, selectors: [["target-columns"]], inputs: { datalinkTransformForm: "datalinkTransformForm", targets: "targets", allowMappingOutputs: "allowMappingOutputs" }, outputs: { inputOutputDrop: "inputOutputDrop" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [["cdkDropList", "", 4, "ngIf"], ["cdkDropList", ""], ["cdkDropList", "cdkDropList"], [3, "title", "padding", "showExpandButton", 4, "ngFor", "ngForOf"], [3, "title", "padding", "showExpandButton"], ["dropZone", "", "dropAllowedClass", "drop-zone-green", 3, "zone", "dropData", 4, "ngFor", "ngForOf"], ["dropZone", "", "dropAllowedClass", "drop-zone-green", 3, "zone", "dropData"], [3, "datalinkTransformForm", "column"]], template: function TargetColumnsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TargetColumnsComponent_div_0_Template, 3, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.targets);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["CdkDropList"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ngx_d_components__WEBPACK_IMPORTED_MODULE_4__["ɵa"], _shared_utils_dropzone__WEBPACK_IMPORTED_MODULE_5__["DropZoneDirective"], _target_column_component__WEBPACK_IMPORTED_MODULE_6__["TargetColumnComponent"]], pipes: [_shared_utils_isValid_filter_pipe__WEBPACK_IMPORTED_MODULE_7__["IsValidFilterPipe"], _shared_utils_sort_pipe__WEBPACK_IMPORTED_MODULE_8__["SortPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TargetColumnsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'target-columns',
                templateUrl: './target-columns.component.html'
            }]
    }], function () { return []; }, { datalinkTransformForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], targets: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], allowMappingOutputs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], inputOutputDrop: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/+hub/datalink/datalink-edit/target-table-column/target-table-column.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/+hub/datalink/datalink-edit/target-table-column/target-table-column.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: TargetTableColumnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TargetTableColumnComponent", function() { return TargetTableColumnComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _hub_forms_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hub.forms.service */ "./src/app/+hub/hub.forms.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../+auth/auth.service */ "./src/app/+auth/auth.service.ts");
/* harmony import */ var _table_column_edit_column_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../table/column-edit/column-edit.component */ "./src/app/+hub/table/column-edit/column-edit.component.ts");









class TargetTableColumnComponent {
    constructor(authService, formsService, route) {
        this.authService = authService;
        this.formsService = formsService;
        this.route = route;
    }
    ngOnInit() {
        this._currentFormSubscription = this.route.params.subscribe(params => {
            this.targetKey = +params['targetKey'];
            this.columnKey = +params['columnKey'];
            this.deltaType = params['deltaType'];
            this.formsService.getCurrentFormObservable().subscribe(datalinkForm => {
                if (datalinkForm) {
                    let targets = datalinkForm.controls.dexihDatalinkTargets;
                    let targetForm = targets.controls.find(c => c.value.key === this.targetKey);
                    this.tableForm = targetForm.controls.table;
                }
            });
        });
    }
    ngOnDestroy() {
        if (this._currentFormSubscription) {
            this._currentFormSubscription.unsubscribe();
        }
    }
    columnUpdated() {
        this.authService.navigateUp();
    }
}
TargetTableColumnComponent.ɵfac = function TargetTableColumnComponent_Factory(t) { return new (t || TargetTableColumnComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hub_forms_service__WEBPACK_IMPORTED_MODULE_2__["HubFormsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
TargetTableColumnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TargetTableColumnComponent, selectors: [["target-table-column"]], decls: 1, vars: 3, consts: [[3, "columnKey", "tableForm", "deltaType", "isUpdated"]], template: function TargetTableColumnComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "column-edit", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("isUpdated", function TargetTableColumnComponent_Template_column_edit_isUpdated_0_listener() { return ctx.columnUpdated(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columnKey", ctx.columnKey)("tableForm", ctx.tableForm)("deltaType", ctx.deltaType);
    } }, directives: [_table_column_edit_column_edit_component__WEBPACK_IMPORTED_MODULE_4__["ColumnEditComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TargetTableColumnComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'target-table-column',
                templateUrl: './target-table-column.component.html'
            }]
    }], function () { return [{ type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _hub_forms_service__WEBPACK_IMPORTED_MODULE_2__["HubFormsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/+hub/datalink/datalink-edit/target/datalink-edit-target-table.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/+hub/datalink/datalink-edit/target/datalink-edit-target-table.component.ts ***!
  \********************************************************************************************/
/*! exports provided: DatalinkEditTargetTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatalinkEditTargetTableComponent", function() { return DatalinkEditTargetTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _hub_lineage_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hub.lineage.models */ "./src/app/+hub/hub.lineage.models.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../+auth/auth.service */ "./src/app/+auth/auth.service.ts");
/* harmony import */ var _hub_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../hub.service */ "./src/app/+hub/hub.service.ts");
/* harmony import */ var _datalink_edit_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../datalink-edit.service */ "./src/app/+hub/datalink/datalink-edit/datalink-edit.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _hub_forms_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../hub.forms.service */ "./src/app/+hub/hub.forms.service.ts");
/* harmony import */ var _logging__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../logging */ "./src/logging.ts");
/* harmony import */ var _hub_models__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../hub.models */ "./src/app/+hub/hub.models.ts");
/* harmony import */ var _shared_shared_models__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/shared.models */ "./src/app/shared/shared.models.ts");
/* harmony import */ var _auth_auth_models__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../+auth/auth.models */ "./src/app/+auth/auth.models.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_d_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-d-components */ "./node_modules/ngx-d-components/__ivy_ngcc__/fesm2015/ngx-d-components.js");
/* harmony import */ var _buttons_cancel_button_cancel_button_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../buttons/cancel-button/cancel-button.component */ "./src/app/+hub/buttons/cancel-button/cancel-button.component.ts");
/* harmony import */ var ngx_d_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-d-table */ "./node_modules/ngx-d-table/__ivy_ngcc__/fesm2015/ngx-d-table.js");
/* harmony import */ var _table_table_edit_column_edit_bulk_column_edit_bulk_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../table/table-edit/column-edit-bulk/column-edit-bulk.component */ "./src/app/+hub/table/table-edit/column-edit-bulk/column-edit-bulk.component.ts");
/* harmony import */ var _table_column_edit_column_edit_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../table/column-edit/column-edit.component */ "./src/app/+hub/table/column-edit/column-edit.component.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

























function DatalinkEditTargetTableComponent_div_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button-preview", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatalinkEditTargetTableComponent_div_0_ng_template_2_Template_d_button_preview_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.previewData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "d-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatalinkEditTargetTableComponent_div_0_ng_template_2_Template_d_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.importTable(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Re-Import ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "d-button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatalinkEditTargetTableComponent_div_0_ng_template_2_Template_d_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.createTable(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Drop & Create ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "d-button-apply", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatalinkEditTargetTableComponent_div_0_ng_template_2_Template_d_button_apply_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.apply(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "cancel-button", 10);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !(ctx_r3.targetTableForm == null ? null : ctx_r3.targetTableForm.dirty));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formsService", ctx_r3.tableFormService);
} }
function DatalinkEditTargetTableComponent_div_0_form_4_section_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "form-select", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r12.connectionTables);
} }
function DatalinkEditTargetTableComponent_div_0_form_4_section_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "form-select", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r13.nodes)("enableKeySelect", false)("allowNullSelect", true);
} }
const _c0 = function () { return { standalone: true }; };
function DatalinkEditTargetTableComponent_div_0_form_4_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form-checkbox", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DatalinkEditTargetTableComponent_div_0_form_4_Template_form_checkbox_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.newTable = $event; })("ngModelChange", function DatalinkEditTargetTableComponent_div_0_form_4_Template_form_checkbox_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.toggleNewTable($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DatalinkEditTargetTableComponent_div_0_form_4_section_4_Template, 2, 1, "section", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DatalinkEditTargetTableComponent_div_0_form_4_section_5_Template, 2, 3, "section", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r4.targetTableForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0))("ngModel", ctx_r4.newTable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.newTable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r4.nodes == null ? null : ctx_r4.nodes.length) > 0);
} }
function DatalinkEditTargetTableComponent_div_0_datalink_table_edit_properties_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "datalink-table-edit-properties", 15);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formsService", ctx_r5.tableFormService)("isExpanded", ctx_r5.newTable);
} }
function DatalinkEditTargetTableComponent_div_0_ng_template_6_ng_template_2_column_edit_bulk_25_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "column-edit-bulk", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("updated", function DatalinkEditTargetTableComponent_div_0_ng_template_6_ng_template_2_column_edit_bulk_25_Template_column_edit_bulk_updated_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r27.updateData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const items_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().items;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columns", items_r25)("columnsFormArray", ctx_r26.targetTableForm.controls.table.controls.dexihTableColumns);
} }
function DatalinkEditTargetTableComponent_div_0_ng_template_6_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button-splitdropdown", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("buttonClick", function DatalinkEditTargetTableComponent_div_0_ng_template_6_ng_template_2_Template_d_button_splitdropdown_buttonClick_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r30.newColumn(null); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatalinkEditTargetTableComponent_div_0_ng_template_6_ng_template_2_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r32.newColumn(ctx_r32.eDeltaType.AutoIncrement); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add Auto Incrementing Key Column");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatalinkEditTargetTableComponent_div_0_ng_template_6_ng_template_2_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r33.newColumn(ctx_r33.eDeltaType.ValidFromDate); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Add Valid from Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatalinkEditTargetTableComponent_div_0_ng_template_6_ng_template_2_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r34.newColumn(ctx_r34.eDeltaType.ValidToDate); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Add Valid to Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatalinkEditTargetTableComponent_div_0_ng_template_6_ng_template_2_Template_a_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r35.newColumn(ctx_r35.eDeltaType.IsCurrentField); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Add Is Current Column");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatalinkEditTargetTableComponent_div_0_ng_template_6_ng_template_2_Template_a_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r36.newColumn(ctx_r36.eDeltaType.CreateAuditKey); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Add Create Audit Key");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatalinkEditTargetTableComponent_div_0_ng_template_6_ng_template_2_Template_a_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r37.newColumn(ctx_r37.eDeltaType.UpdateAuditKey); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Add Update Audit Key");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatalinkEditTargetTableComponent_div_0_ng_template_6_ng_template_2_Template_a_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r38.newColumn(ctx_r38.eDeltaType.CreateDate); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Add Create Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatalinkEditTargetTableComponent_div_0_ng_template_6_ng_template_2_Template_a_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r39.newColumn(ctx_r39.eDeltaType.UpdateDate); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Add Update Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, DatalinkEditTargetTableComponent_div_0_ng_template_6_ng_template_2_column_edit_bulk_25_Template, 1, 2, "column-edit-bulk", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "d-button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatalinkEditTargetTableComponent_div_0_ng_template_6_ng_template_2_Template_d_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r40.resetColumns(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Reset All Columns");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "d-button-preview", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatalinkEditTargetTableComponent_div_0_ng_template_6_ng_template_2_Template_d_button_preview_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r41.previewData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "d-button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatalinkEditTargetTableComponent_div_0_ng_template_6_ng_template_2_Template_d_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r42.importTable(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Re-Import ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "d-button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatalinkEditTargetTableComponent_div_0_ng_template_6_ng_template_2_Template_d_button_click_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r43.createTable(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Drop & Create ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const items_r25 = ctx.items;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r18.showBulkEdit && items_r25.length > 0);
} }
function DatalinkEditTargetTableComponent_div_0_ng_template_6_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button-edit", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatalinkEditTargetTableComponent_div_0_ng_template_6_ng_template_4_Template_d_button_edit_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const column_r44 = ctx.item; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r45.editColumn(column_r44); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DatalinkEditTargetTableComponent_div_0_ng_template_6_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button-delete", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatalinkEditTargetTableComponent_div_0_ng_template_6_ng_template_6_Template_d_button_delete_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const items_r47 = ctx.items; const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r48.deleteColumns(items_r47); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "d-button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatalinkEditTargetTableComponent_div_0_ng_template_6_ng_template_6_Template_d_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r50.showBulkEdit = !ctx_r50.showBulkEdit; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r22.showBulkEdit ? "Hide Bulk Edit" : "Show Bulk Edit", " ");
} }
function DatalinkEditTargetTableComponent_div_0_ng_template_6_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    const _r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatalinkEditTargetTableComponent_div_0_ng_template_6_ng_template_10_Template_d_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r53); const items_r51 = ctx.items; const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r52.addMissing(items_r51); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add To Table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DatalinkEditTargetTableComponent_div_0_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-widget-section", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "d-table", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSortChanged", function DatalinkEditTargetTableComponent_div_0_ng_template_6_Template_d_table_onSortChanged_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r54.columnSortChange($event); })("rowClick", function DatalinkEditTargetTableComponent_div_0_ng_template_6_Template_d_table_rowClick_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55); const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r56.editColumn($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DatalinkEditTargetTableComponent_div_0_ng_template_6_ng_template_2_Template, 33, 1, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DatalinkEditTargetTableComponent_div_0_ng_template_6_ng_template_4_Template, 1, 0, "ng-template", 19, 20, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DatalinkEditTargetTableComponent_div_0_ng_template_6_ng_template_6_Template, 3, 1, "ng-template", 21, 22, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "d-widget-section", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "d-table", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DatalinkEditTargetTableComponent_div_0_ng_template_6_ng_template_10_Template, 2, 0, "ng-template", 21, 22, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showExpandButton", true)("padding", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("enableMultiSelect", true)("enableManualSort", true)("enableSort", false)("enableFilter", false)("columns", ctx_r6.columns)("dataObservable", ctx_r6.tableData)("enableStickyToolbar", true)("toolbarZIndex", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showExpandButton", true)("padding", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("enableMultiSelect", true)("enableFilter", false)("columns", ctx_r6.columns)("dataObservable", ctx_r6.missingColumnsData)("enableStickyToolbar", true)("toolbarZIndex", 100);
} }
function DatalinkEditTargetTableComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "d-widget-section", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DatalinkEditTargetTableComponent_div_0_ng_template_2_Template, 7, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DatalinkEditTargetTableComponent_div_0_form_4_Template, 6, 6, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DatalinkEditTargetTableComponent_div_0_datalink_table_edit_properties_5_Template, 1, 2, "datalink-table-edit-properties", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DatalinkEditTargetTableComponent_div_0_ng_template_6_Template, 12, 18, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showExpandButton", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.targetTableForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.tableFormService.currentForm.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.targetTableForm == null ? null : ctx_r0.targetTableForm.controls.table.value);
} }
function DatalinkEditTargetTableComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "column-edit", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("isUpdated", function DatalinkEditTargetTableComponent_div_1_Template_column_edit_isUpdated_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r58); const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r57.columnUpdated(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columnKey", ctx_r1.columnKey)("tableForm", ctx_r1.targetTableForm.controls.table)("deltaType", ctx_r1.deltaType);
} }
class DatalinkEditTargetTableComponent {
    constructor(hubService, authService, editDatalinkService, route, router, fb) {
        this.hubService = hubService;
        this.authService = authService;
        this.editDatalinkService = editDatalinkService;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.cancelToken = new _auth_auth_models__WEBPACK_IMPORTED_MODULE_12__["CancelToken"]();
        this.eMappingStatus = _hub_models__WEBPACK_IMPORTED_MODULE_10__["eMappingStatus"];
        this.eDeltaType = _shared_shared_models__WEBPACK_IMPORTED_MODULE_11__["eDeltaType"];
        this.eUpdateStrategy = _shared_shared_models__WEBPACK_IMPORTED_MODULE_11__["eUpdateStrategy"];
        this.updateStrategies = _hub_models__WEBPACK_IMPORTED_MODULE_10__["updateStrategies"];
        this.eTransformWriterMethod = _shared_shared_models__WEBPACK_IMPORTED_MODULE_11__["eTransformWriterMethod"];
        this.loadStrategies = _hub_models__WEBPACK_IMPORTED_MODULE_10__["loadStrategies"];
        this.showTableProperties = false;
        this.showColumn = false;
        this.ignoreUpdateTable = false;
        this.nodes = [];
        this.newTable = false;
        this.showBulkEdit = false;
        this.canExit = false;
        this.logger = new _logging__WEBPACK_IMPORTED_MODULE_9__["LogFactory"]('datalink-edit-target-table');
        this.columns = [
            { name: 'position', title: '#', format: '' },
            { name: 'columnStatus', title: 'Lineage', format: 'Html' },
            { name: 'name', title: 'Name', format: '' },
            { name: 'logicalName', title: 'Logical', format: '' },
            { name: 'dataType', title: 'Data Type', format: '' },
            { name: 'deltaType', title: 'Delta Type', format: '' },
            { name: 'allowDbNull', title: 'Null?', format: 'Boolean' },
            { name: 'defaultValue', title: 'Default Value', format: '' },
            { name: 'securityFlag', title: 'Security Flag', format: 'Enum', enum: _shared_shared_models__WEBPACK_IMPORTED_MODULE_11__["eSecurityFlag"] },
            { name: 'columnValidation', title: 'Validation', format: '', class: 'columnValidationClass', tooltip: 'columnValidationTooltip' }
        ];
        this._tableData = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](null);
        this.tableData = this._tableData.asObservable();
        this._missingColumnsData = new rxjs__WEBPACK_IMPORTED_MODULE_6__["BehaviorSubject"](null);
        this.missingColumnsData = this._missingColumnsData.asObservable();
        this.tableFormService = new _hub_forms_service__WEBPACK_IMPORTED_MODULE_8__["HubFormsService"](fb, hubService, authService);
    }
    ngOnInit() {
        this.logger.LogC(() => `ngOnInit`, _logging__WEBPACK_IMPORTED_MODULE_9__["eLogLevel"].Trace);
        try {
            this._subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["combineLatest"])(this.route.data, this.route.params, this.hubService.getHubCacheObservable(), this.editDatalinkService.hubFormsService.getCurrentFormObservable()).subscribe(result => {
                let data = result[0];
                let params = result[1];
                this.hubCache = result[2];
                this.datalinkForm = result[3];
                this.action = data['action'];
                this.pageTitle = data['pageTitle'];
                const ioColumns = new _hub_lineage_models__WEBPACK_IMPORTED_MODULE_2__["InputOutputColumns"]();
                this.inputColumns = ioColumns.getDatalinkOutputColumns(this.datalinkForm.value);
                if (this.action === 'edit') {
                    this.targetKey = +params['targetKey'];
                    let targets = this.datalinkForm.controls.dexihDatalinkTargets;
                    // create a copy of the target form.
                    let originalTargetTableForm = targets.controls.find(c => c.value.key === this.targetKey);
                    if (originalTargetTableForm && originalTargetTableForm.controls.key.value <= 0) {
                        this.newTable = true;
                    }
                    // if the table is not found, then navigate back to the parent.
                    if (originalTargetTableForm === undefined) {
                        this.canExit = true;
                        this.authService.navigateUp();
                        return;
                    }
                    this.targetTableForm = this.editDatalinkService.hubFormsService
                        .datalinkTargetFormGroup(originalTargetTableForm.value, originalTargetTableForm.controls.table.value);
                }
                else if (this.action === 'new') {
                    let target = new _shared_shared_models__WEBPACK_IMPORTED_MODULE_11__["DexihDatalinkTarget"]();
                    target.key = this.hubCache.getNextSequence();
                    this.targetTableForm = this.editDatalinkService.hubFormsService.datalinkTargetFormGroup(target);
                }
                else {
                    this.hubService.addHubErrorMessage('Invalid action ' + this.action);
                }
                if (this.hubCache.isLoaded() && this.datalinkForm) {
                    this.connectionTables = this.hubCache.getConnectionTables();
                    this.managedConnections = this.hubCache.getManagedConnections();
                    this.updateData();
                    this.resetSubscription();
                    this.logger.LogC(() => `ngOnInit - completed`, _logging__WEBPACK_IMPORTED_MODULE_9__["eLogLevel"].Trace);
                }
                if (this._saveSubscription) {
                    this._saveSubscription.unsubscribe();
                }
                this._saveSubscription = this.editDatalinkService.savingDatalink.subscribe(value => {
                    if (value) {
                        this.apply();
                    }
                });
            });
        }
        catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Edit Target Table');
        }
    }
    ngOnDestroy() {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
        if (this._loadStrategySubscription) {
            this._loadStrategySubscription.unsubscribe();
        }
        if (this._tableFormSubscription) {
            this._tableFormSubscription.unsubscribe();
        }
        if (this._saveSubscription) {
            this._saveSubscription.unsubscribe();
        }
    }
    canDeactivate() {
        return new Promise(resolve => {
            var _a;
            if (!this.canExit && ((_a = this.targetTableForm) === null || _a === void 0 ? void 0 : _a.dirty)) {
                this.authService.confirmDialog('Target Table Changed', 'The table has changed.  Would you like to discard the changes and return to the previous screen?  Otherwise, use the apply button to save the changes.').then(confirm => {
                    resolve(confirm);
                }).catch(reason => {
                    resolve(false);
                });
            }
            else {
                resolve(true);
            }
        });
    }
    resetSubscription() {
        if (this._tableFormSubscription) {
            this._tableFormSubscription.unsubscribe();
        }
        this._tableFormSubscription = this.targetTableForm.controls.tableKey.valueChanges.subscribe(() => {
            this.updateData();
        });
    }
    previewData() {
        this.router.navigate(['preview-table-data', this.targetTableForm.controls.tableKey.value], { relativeTo: this.route });
    }
    columnStatus(table, column) {
        let columnUsage = new _hub_lineage_models__WEBPACK_IMPORTED_MODULE_2__["ColumnUsageNode"](_hub_lineage_models__WEBPACK_IMPORTED_MODULE_2__["eDatalinkObjectType"].TargetTable, _hub_lineage_models__WEBPACK_IMPORTED_MODULE_2__["eObjectUse"].Target, this.datalinkForm.value, null, column, null, null, _hub_models__WEBPACK_IMPORTED_MODULE_10__["eMappingStatus"].NotMapped, this.hubCache);
        const lineage = columnUsage.createDatalinkLineage(true);
        const mappingStatus = _hub_models__WEBPACK_IMPORTED_MODULE_10__["lineageMappingStatuses"].find(c => c.key === lineage);
        if (mappingStatus) {
            return `<i class="${mappingStatus.statusClass}"></i>&nbsp;${mappingStatus.name}`;
        }
    }
    datalinkColumnStatus(table, column) {
        let columnUsage = new _hub_lineage_models__WEBPACK_IMPORTED_MODULE_2__["ColumnUsageNode"](_hub_lineage_models__WEBPACK_IMPORTED_MODULE_2__["eDatalinkObjectType"].TargetTable, _hub_lineage_models__WEBPACK_IMPORTED_MODULE_2__["eObjectUse"].Target, this.datalinkForm.value, column, null, null, null, _hub_models__WEBPACK_IMPORTED_MODULE_10__["eMappingStatus"].NotMapped, this.hubCache);
        const lineage = columnUsage.createDatalinkLineage(true);
        const mappingStatus = _hub_models__WEBPACK_IMPORTED_MODULE_10__["lineageMappingStatuses"].find(c => c.key === lineage);
        if (mappingStatus) {
            return `<i class="${mappingStatus.statusClass}"></i>&nbsp;${mappingStatus.name}`;
        }
    }
    addNodeColumns(columns, path) {
        if (!path) {
            this.nodes = [];
        }
        if (columns) {
            columns.filter(c => c.dataType === _shared_shared_models__WEBPACK_IMPORTED_MODULE_11__["eTypeCode"].Node && c.isValid).forEach(col => {
                let name = path ? (path + '.' + col.logicalName) : col.logicalName;
                this.nodes.push({ key: col.key, name: name });
                if (col.childColumns && col.childColumns.length > 0) {
                    this.addNodeColumns(col.childColumns, name);
                }
            });
        }
    }
    updateData() {
        if (this.ignoreUpdateTable) {
            return;
        }
        this.logger.LogC(() => `updateData started`, _logging__WEBPACK_IMPORTED_MODULE_9__["eLogLevel"].Trace);
        this.showBulkEdit = false;
        let validation = this.editDatalinkService.getValidationTransform();
        this.tableFormService.startForm(this.targetTableForm.controls.table);
        if (this.targetTableForm.controls.table) {
            if (!this.targetTableForm.controls.table.value) {
                this.logger.LogC(() => `updateData no targetTable specified.`, _logging__WEBPACK_IMPORTED_MODULE_9__["eLogLevel"].Trace);
                this._tableData.next(null);
            }
            else {
                const table = this.targetTableForm.controls.table.value;
                this.logger.LogC(() => `updateData targetTable ${table.name}`, _logging__WEBPACK_IMPORTED_MODULE_9__["eLogLevel"].Trace);
                let columnData = [];
                table.dexihTableColumns
                    .filter(c => c.isValid)
                    .sort((a, b) => a.position - b.position)
                    .forEach(column => {
                    let deltaType = _hub_models__WEBPACK_IMPORTED_MODULE_10__["deltaTypes"].find(c => c.key === column.deltaType);
                    let newColumn = {
                        key: column.key,
                        position: column.position,
                        columnStatus: this.columnStatus(table, column),
                        name: column.name,
                        dataType: this.hubCache.dataTypeToString(column),
                        deltaType: deltaType ? deltaType.name : 'Not specified',
                        allowDbNull: column.allowDbNull,
                        logicalName: column.logicalName,
                        isIncrementalUpdate: column.isIncrementalUpdate,
                        securityFlag: column.securityFlag,
                        defaultValue: column.defaultValue,
                        columnValidation: this.hubCache.getColumnValidation(column.columnValidationKey).name,
                        columnValidationClass: column.columnValidationKey && !validation ? 'dexih-error-icon' : '',
                        columnValidationTooltip: column.columnValidationKey && !validation ?
                            'Enabled the validation transform for this to function' : '',
                    };
                    columnData.push(newColumn);
                });
                this._tableData.next(columnData);
                let validColumns = this.validColumns();
                if (validColumns) {
                    this.addNodeColumns(validColumns, '');
                    let missingColumnData = [];
                    let position = 0;
                    validColumns.forEach(column => {
                        if (table.dexihTableColumns.findIndex(c => c.name === column.name) < 0 &&
                            missingColumnData.findIndex(c => c.name === column.name) < 0) {
                            let deltaType = _hub_models__WEBPACK_IMPORTED_MODULE_10__["deltaTypes"].find(c => c.key === column.deltaType);
                            let newColumn = {
                                key: column.key,
                                position: column.position + position,
                                columnStatus: this.datalinkColumnStatus(table, column),
                                name: column.name,
                                dataType: this.hubCache
                                    .dataTypeToString(column),
                                deltaType: deltaType ? deltaType.name : 'Not specified',
                                allowDbNull: column.allowDbNull,
                                logicalName: column.logicalName,
                                isIncrementalUpdate: column.isIncrementalUpdate,
                                securityFlag: column.securityFlag,
                                defaultValue: column.defaultValue,
                                columnValidation: '',
                            };
                            missingColumnData.push(newColumn);
                        }
                        position += 1000;
                    });
                    this._missingColumnsData.next(missingColumnData);
                }
                this.logger.LogC(() => `updateData columns loaded`, _logging__WEBPACK_IMPORTED_MODULE_9__["eLogLevel"].Trace);
            }
        }
        else {
            this._tableData.next(null);
        }
    }
    validColumns() {
        let validColumns = this.inputColumns;
        if (this.targetTableForm.controls.nodeDatalinkColumn && this.targetTableForm.controls.nodeDatalinkColumn.value) {
            let io = new _hub_lineage_models__WEBPACK_IMPORTED_MODULE_2__["InputOutputColumns"]();
            validColumns = io.validColumns(this.targetTableForm.controls.nodeDatalinkColumn.value.key, this.inputColumns);
        }
        return validColumns;
    }
    addMissing(items) {
        this.logger.LogC(() => `addMissing started`, _logging__WEBPACK_IMPORTED_MODULE_9__["eLogLevel"].Trace);
        const tableForm = this.targetTableForm.controls.table;
        // const ioColumns = new InputOutputColumns();
        // const outputColumns = ioColumns.getDatalinkOutputColumns(this.datalinkForm.value);
        const outputColumns = this.validColumns();
        if (tableForm && outputColumns) {
            const tableColumns = tableForm.controls.dexihTableColumns;
            items.forEach(item => {
                let missingColumn = null;
                outputColumns.forEach(column => {
                    if (!missingColumn && item.key === column.key) {
                        missingColumn = column;
                    }
                });
                if (missingColumn) {
                    const newColumn = new _shared_shared_models__WEBPACK_IMPORTED_MODULE_11__["DexihTableColumn"]();
                    Object.assign(newColumn, missingColumn);
                    this.resetColumnKeys(newColumn);
                    let positions = tableColumns.controls.map(c => c.value.position);
                    let position = positions.length === 0 ? 0 : Math.max(...positions) + 1; // add the the last position
                    newColumn.position = position;
                    const columnForm = this.editDatalinkService.hubFormsService.tableColumn(tableColumns.value, newColumn);
                    tableColumns.push(columnForm);
                    tableForm.markAsDirty();
                    this.targetTableForm.markAsDirty();
                }
            });
            this.updateData();
        }
        this.logger.LogC(() => `addMissing completed`, _logging__WEBPACK_IMPORTED_MODULE_9__["eLogLevel"].Trace);
    }
    resetColumnKeys(column) {
        column.key = this.hubCache.getNextSequence();
        if (column.childColumns) {
            column.childColumns.forEach(childColumn => this.resetColumnKeys(childColumn));
        }
    }
    toggleNewTable() {
        this.logger.LogC(() => `newTable started`, _logging__WEBPACK_IMPORTED_MODULE_9__["eLogLevel"].Trace);
        if (this.newTable) {
            const newTable = new _shared_shared_models__WEBPACK_IMPORTED_MODULE_11__["DexihTable"]();
            this.targetTableForm.setControl('table', this.editDatalinkService.hubFormsService.tableForm(newTable));
            this.targetTableForm.controls.tableKey.setValue(0);
            this.resetSubscription();
            this.addMissing(this._missingColumnsData.value);
            this.showTableProperties = true;
        }
        this.logger.LogC(() => `newTable completed`, _logging__WEBPACK_IMPORTED_MODULE_9__["eLogLevel"].Trace);
    }
    editColumn(column) {
        this.columnKey = column.key;
        this.showColumn = true;
    }
    newColumn(deltaType) {
        if (deltaType !== null) {
            const tableForm = this.targetTableForm.controls.table;
            const tableColumns = tableForm.controls.dexihTableColumns;
            let newColumn = this.hubCache.newColumn(tableForm.value, deltaType);
            if (newColumn === null) {
                this.authService.informationDialog('Invalid column.', `The column ${deltaType} could not be added as it already exists.`);
                return;
            }
            const columnForm = this.editDatalinkService.hubFormsService.tableColumn(tableColumns.value, newColumn);
            tableColumns.push(columnForm);
            tableForm.markAsDirty();
            this.targetTableForm.markAsDirty();
        }
        else {
            this.columnKey = null;
            this.deltaType = deltaType;
            this.showColumn = true;
        }
    }
    resetColumns() {
        return __awaiter(this, void 0, void 0, function* () {
            let confirm = yield this.authService.confirmDialog('Warning reset columns', 'This will remove and reload all the columns in this table using the last mapped outputs.  Continue?');
            if (confirm) {
                const tableForm = this.targetTableForm.controls.table;
                const tableColumns = tableForm.controls.dexihTableColumns;
                while (tableColumns.length !== 0) {
                    tableColumns.removeAt(0);
                }
            }
            this.addMissing(this.validColumns());
        });
    }
    deleteColumns(columns) {
        columns.forEach(column => {
            const tableForm = this.targetTableForm.controls.table;
            const tableColumns = tableForm.controls.dexihTableColumns;
            const index = tableColumns.controls.findIndex(c => c.value.key === column.key);
            if (index >= 0) {
                tableColumns.removeAt(index);
                tableForm.markAsDirty();
            }
        });
        this.updateData();
    }
    importTable() {
        const table = this.targetTableForm.controls.table.value;
        const connection = this.hubCache.getConnection(table.connectionKey);
        this.hubService.importTables([table], false, this.cancelToken)
            .then(tables => {
            if (!tables || tables.length === 0) {
                return;
            }
            const returnTable = tables[0];
            returnTable.useLogical =
                this.hubCache.defaultTableLogicalName(returnTable.schema, returnTable.name) !== returnTable.logicalName;
            let tableForm = this.editDatalinkService.hubFormsService.tableForm(returnTable);
            this.targetTableForm.controls.tableKey.setValue(returnTable.key);
            this.targetTableForm.setControl('table', tableForm);
        }).catch(reason => {
            // this.hubService.addHubErrorMessage(reason);
        });
    }
    createTable() {
        const table = this.targetTableForm.controls.table.value;
        const connection = this.hubCache.getConnection(table.connectionKey);
        this.hubService.createTables([table], this.cancelToken)
            .then(tables => {
            this.hubService.addHubSuccessMessage('The table was created successfully.');
            // this.targetTableForm.controls.table.setValue(returnTable);
        }).catch(reason => {
            // this.hubService.addHubErrorMessage(reason);
        });
    }
    columnSortChange(items) {
        this.logger.LogC(() => `columns sort change - started `, _logging__WEBPACK_IMPORTED_MODULE_9__["eLogLevel"].Trace);
        this.tableFormService.IgnoreFormChange = true;
        this.editDatalinkService.hubFormsService.IgnoreFormChange = true;
        this.ignoreUpdateTable = true;
        const tableForm = this.targetTableForm.controls.table;
        let columnsArray = tableForm.controls.dexihTableColumns;
        let position = 1;
        items.forEach(c => {
            let column = columnsArray.controls.find(control => control.value.key === c.key);
            column.controls.position.setValue(position++);
        });
        tableForm.markAsDirty();
        this.editDatalinkService.hubFormsService.IgnoreFormChange = false;
        this.tableFormService.IgnoreFormChange = false;
        this.ignoreUpdateTable = false;
        this.updateData();
        this.logger.LogC(() => `columns sort change - finished `, _logging__WEBPACK_IMPORTED_MODULE_9__["eLogLevel"].Trace);
    }
    columnUpdated() {
        this.showColumn = false;
        this.updateData();
    }
    saveTable() {
        const table = this.targetTableForm.controls.table.value;
        this.hubService.saveTables([table]).then(savedTables => {
            let savedTable = savedTables[0];
            this.targetTableForm.setControl('table', this.editDatalinkService.hubFormsService.tableForm(savedTable));
            this.targetTableForm.controls.tableKey.setValue(savedTable.key);
            this.resetSubscription();
            this.editDatalinkService.hubFormsService.save(false);
        });
    }
    apply() {
        if (this.targetTableForm.dirty) {
            let targets = this.datalinkForm.controls.dexihDatalinkTargets;
            let index = targets.length;
            if (this.action === 'edit') {
                index = targets.controls.findIndex(c => c.value.key === this.targetKey);
                targets.removeAt(index);
            }
            targets.insert(index, this.targetTableForm);
            targets.markAsDirty();
            this.canExit = true;
            this.authService.navigateUp();
        }
    }
}
DatalinkEditTargetTableComponent.ɵfac = function DatalinkEditTargetTableComponent_Factory(t) { return new (t || DatalinkEditTargetTableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hub_service__WEBPACK_IMPORTED_MODULE_4__["HubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_datalink_edit_service__WEBPACK_IMPORTED_MODULE_5__["DatalinkEditService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"])); };
DatalinkEditTargetTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DatalinkEditTargetTableComponent, selectors: [["dexih-datalink-edit-target-table"]], decls: 2, vars: 2, consts: [[4, "ngIf"], ["title", "Edit Target Table", 3, "showExpandButton"], ["header", ""], [3, "formGroup", 4, "ngIf"], [3, "formsService", "isExpanded", 4, "ngIf"], [3, "ngIf"], [1, "mr-1", 3, "click"], ["buttonClass", "btn-primary", "iconClass", "fa fa-refresh", "title", "Re-import table from connection.", 1, "mr-1", 3, "click"], ["buttonClass", "btn-primary", "iconClass", "fa fa-bullseye", "title", "Drop & re-create the table on the connection.  Warning: This remove all data from the table!", 1, "mr-1", 3, "click"], [1, "mr-1", 3, "disabled", "click"], [3, "formsService"], [3, "formGroup"], ["label", "Create a new table", 3, "ngModelOptions", "ngModel", "ngModelChange"], ["label", "Target Table", "formControlName", "tableKey", "parentName", "name", "childItems", "dexihTables", "itemKey", "key", "itemName", "logicalName", "note", "Select the target table", 3, "items"], ["label", "Node level", "formControlName", "nodeDatalinkColumn", "itemKey", "key", "itemName", "name", "node", "Specify the node where the transform should be applied to.", "selectNullMessage", "Use top level", 3, "items", "enableKeySelect", "allowNullSelect"], [3, "formsService", "isExpanded"], ["title", "Columns", 3, "showExpandButton", "padding"], [3, "enableMultiSelect", "enableManualSort", "enableSort", "enableFilter", "columns", "dataObservable", "enableStickyToolbar", "toolbarZIndex", "onSortChanged", "rowClick"], ["actions", ""], ["select", "selectedItemAction"], ["selectedItemAction", ""], ["select", "selectedItemsAction"], ["selectedItemsAction", ""], ["title", "Unused Columns", 3, "showExpandButton", "padding"], ["sortColumn", "position", 3, "enableMultiSelect", "enableFilter", "columns", "dataObservable", "enableStickyToolbar", "toolbarZIndex"], ["text", "Add Column", "title", "Create a new column", "iconClass", "fa fa-plus-square", "buttonClass", "btn-primary", 3, "buttonClick"], [1, "dropdown-item", 3, "click"], [3, "columns", "columnsFormArray", "updated", 4, "ngIf"], ["iconClass", "fa fa-retweet", 1, "ml-1", 3, "click"], [1, "ml-1", 3, "click"], ["buttonClass", "btn-primary", "iconClass", "fa fa-refresh", "title", "Re-import table from connection.", 1, "ml-1", 3, "click"], ["buttonClass", "btn-primary", "iconClass", "fa fa-bullseye", "title", "Drop & re-create the table on the connection.  Warning: This remove all data from the table!", 1, "ml-1", 3, "click"], [3, "columns", "columnsFormArray", "updated"], ["iconClass", "fa fa-th-list", 1, "ml-1", 3, "click"], ["buttonClass", "btn-primary", "iconClass", "fa fa-plus-square", "title", "Add selected outputs to the target table", 3, "click"], [3, "columnKey", "tableForm", "deltaType", "isUpdated"]], template: function DatalinkEditTargetTableComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DatalinkEditTargetTableComponent_div_0_Template, 7, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DatalinkEditTargetTableComponent_div_1_Template, 2, 3, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showColumn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showColumn);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], ngx_d_components__WEBPACK_IMPORTED_MODULE_14__["ɵa"], ngx_d_components__WEBPACK_IMPORTED_MODULE_14__["DButtonPreviewComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_14__["DButtonComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_14__["DButtonApplyComponent"], _buttons_cancel_button_cancel_button_component__WEBPACK_IMPORTED_MODULE_15__["CancelButtonComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormGroupDirective"], ngx_d_components__WEBPACK_IMPORTED_MODULE_14__["DFormCheckboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], ngx_d_components__WEBPACK_IMPORTED_MODULE_14__["DFormSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControlName"], ngx_d_table__WEBPACK_IMPORTED_MODULE_16__["DTableComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_14__["DButtonSplitDropDownComponent"], _table_table_edit_column_edit_bulk_column_edit_bulk_component__WEBPACK_IMPORTED_MODULE_17__["ColumnEditBulkComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_14__["DButtonEditComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_14__["DButtonDeleteComponent"], _table_column_edit_column_edit_component__WEBPACK_IMPORTED_MODULE_18__["ColumnEditComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatalinkEditTargetTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dexih-datalink-edit-target-table',
                templateUrl: './datalink-edit-target-table.component.html'
            }]
    }], function () { return [{ type: _hub_service__WEBPACK_IMPORTED_MODULE_4__["HubService"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _datalink_edit_service__WEBPACK_IMPORTED_MODULE_5__["DatalinkEditService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/+hub/datalink/datalink-edit/target/datalink-edit-target.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/+hub/datalink/datalink-edit/target/datalink-edit-target.component.ts ***!
  \**************************************************************************************/
/*! exports provided: DatalinkEditTargetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatalinkEditTargetComponent", function() { return DatalinkEditTargetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../+auth/auth.service */ "./src/app/+auth/auth.service.ts");
/* harmony import */ var _hub_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hub.service */ "./src/app/+hub/hub.service.ts");
/* harmony import */ var _datalink_edit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../datalink-edit.service */ "./src/app/+hub/datalink/datalink-edit/datalink-edit.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _hub_forms_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../hub.forms.service */ "./src/app/+hub/hub.forms.service.ts");
/* harmony import */ var _logging__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../logging */ "./src/logging.ts");
/* harmony import */ var _hub_models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../hub.models */ "./src/app/+hub/hub.models.ts");
/* harmony import */ var _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/shared.models */ "./src/app/shared/shared.models.ts");
/* harmony import */ var ngx_d_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-d-components */ "./node_modules/ngx-d-components/__ivy_ngcc__/fesm2015/ngx-d-components.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _buttons_connection_edit_button_connection_edit_button_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../buttons/connection-edit-button/connection-edit-button.component */ "./src/app/+hub/buttons/connection-edit-button/connection-edit-button.component.ts");
/* harmony import */ var ngx_d_table__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-d-table */ "./node_modules/ngx-d-table/__ivy_ngcc__/fesm2015/ngx-d-table.js");





















function DatalinkEditTargetComponent_form_1_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "form-select", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "form-select", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form-select", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "connection-edit-button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "form-input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "form-input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "form-checkbox", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r2.loadStrategies)("errors", ctx_r2.editDatalinkService.hubFormsService.formErrors.loadStrategy);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r2.updateStrategies)("errors", ctx_r2.editDatalinkService.hubFormsService.formErrors.updateStrategy);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r2.managedConnections)("errors", ctx_r2.editDatalinkService.hubFormsService.formErrors.auditConnectionKey);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("key", ctx_r2.datalinkForm.controls.auditConnectionKey.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r2.editDatalinkService.hubFormsService.formErrors.rowsPerCommit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r2.editDatalinkService.hubFormsService.formErrors.rowsPerProgress);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r2.editDatalinkService.hubFormsService.formErrors.addDefaultRow);
} }
function DatalinkEditTargetComponent_form_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "form-checkbox", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DatalinkEditTargetComponent_form_1_span_3_Template, 15, 10, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.datalinkForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r0.editDatalinkService.hubFormsService.formErrors.isQuery);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx_r0.datalinkForm == null ? null : ctx_r0.datalinkForm.controls.isQuery.value));
} }
function DatalinkEditTargetComponent_d_widget_section_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button-new", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatalinkEditTargetComponent_d_widget_section_2_ng_template_2_Template_d_button_new_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.addTable(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DatalinkEditTargetComponent_d_widget_section_2_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button-edit", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatalinkEditTargetComponent_d_widget_section_2_ng_template_4_Template_d_button_edit_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const item_r12 = ctx.item; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.editTable(item_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DatalinkEditTargetComponent_d_widget_section_2_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button-delete", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatalinkEditTargetComponent_d_widget_section_2_ng_template_6_Template_d_button_delete_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const items_r15 = ctx.items; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r16.deleteTables(items_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DatalinkEditTargetComponent_d_widget_section_2_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-widget-section", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "d-table", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSortChanged", function DatalinkEditTargetComponent_d_widget_section_2_Template_d_table_onSortChanged_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.targetSortChange($event); })("rowClick", function DatalinkEditTargetComponent_d_widget_section_2_Template_d_table_rowClick_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.editTable($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DatalinkEditTargetComponent_d_widget_section_2_ng_template_2_Template, 1, 0, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DatalinkEditTargetComponent_d_widget_section_2_ng_template_4_Template, 1, 0, "ng-template", 19, 20, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DatalinkEditTargetComponent_d_widget_section_2_ng_template_6_Template, 1, 0, "ng-template", 21, 22, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showExpandButton", true)("padding", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("enableMultiSelect", true)("enableManualSort", true)("enableSort", false)("enableFilter", false)("columns", ctx_r1.targetTableColumns)("data", ctx_r1.targets);
} }
class DatalinkEditTargetComponent {
    constructor(hubService, authService, editDatalinkService, route, router, fb) {
        this.hubService = hubService;
        this.editDatalinkService = editDatalinkService;
        this.route = route;
        this.router = router;
        this.eMappingStatus = _hub_models__WEBPACK_IMPORTED_MODULE_9__["eMappingStatus"];
        this.eDeltaType = _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eDeltaType"];
        this.eUpdateStrategy = _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eUpdateStrategy"];
        this.updateStrategies = _hub_models__WEBPACK_IMPORTED_MODULE_9__["updateStrategies"];
        this.eTransformWriterMethod = _shared_shared_models__WEBPACK_IMPORTED_MODULE_10__["eTransformWriterMethod"];
        this.loadStrategies = _hub_models__WEBPACK_IMPORTED_MODULE_9__["loadStrategies"];
        this.showTableProperties = false;
        this.targets = [];
        this.logger = new _logging__WEBPACK_IMPORTED_MODULE_8__["LogFactory"]('datalink-edit-target-table');
        this.targetTableColumns = [
            { name: 'table.name', title: 'Name', format: '' },
            { name: 'table.logicalName', title: 'Logical', format: '' },
            { name: 'nodeDatalinkColumn.logicalName', title: 'Node', format: '' }
        ];
        this.tableFormService = new _hub_forms_service__WEBPACK_IMPORTED_MODULE_7__["HubFormsService"](fb, hubService, authService);
    }
    ngOnInit() {
        this.logger.LogC(() => `ngOnInit`, _logging__WEBPACK_IMPORTED_MODULE_8__["eLogLevel"].Trace);
        try {
            this._subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])(this.route.data, this.route.params, this.hubService.getHubCacheObservable(), this.editDatalinkService.hubFormsService.getCurrentFormObservable(), this.hubService.getRemoteLibrariesObservable()).subscribe(result => {
                let data = result[0];
                this.hubCache = result[2];
                this.datalinkForm = result[3];
                this.action = data['action'];
                this.pageTitle = data['pageTitle'];
                if (this.hubCache.isLoaded() && this.datalinkForm) {
                    this.connectionTables = this.hubCache.getConnectionTables();
                    this.managedConnections = this.hubCache.getManagedConnections();
                    this.logger.LogC(() => `ngOnInit - completed`, _logging__WEBPACK_IMPORTED_MODULE_8__["eLogLevel"].Trace);
                }
                this.updateTargets();
            });
        }
        catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Edit Target Table');
        }
    }
    ngOnDestroy() {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
        if (this._loadStrategySubscription) {
            this._loadStrategySubscription.unsubscribe();
        }
    }
    updateTargets() {
        this.targets = this.datalinkForm.controls.dexihDatalinkTargets.value.sort((a, b) => a.position - b.position);
    }
    editTable(target) {
        this.router.navigate(['table-edit', target.key], { relativeTo: this.route });
    }
    addTable() {
        this.router.navigate(['table-new'], { relativeTo: this.route });
    }
    deleteTables(targets) {
        targets.forEach(target => {
            this.editDatalinkService.deleteDatalinkTarget(this.datalinkForm, target.key);
            this.updateTargets();
        });
    }
    targetSortChange(targets) {
        let position = 1;
        targets.forEach(target => {
            target.position = position++;
        });
        this.updateTargets();
    }
}
DatalinkEditTargetComponent.ɵfac = function DatalinkEditTargetComponent_Factory(t) { return new (t || DatalinkEditTargetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hub_service__WEBPACK_IMPORTED_MODULE_3__["HubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_datalink_edit_service__WEBPACK_IMPORTED_MODULE_4__["DatalinkEditService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"])); };
DatalinkEditTargetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DatalinkEditTargetComponent, selectors: [["dexih-datalink-edit-target-form"]], decls: 4, vars: 3, consts: [["title", "Target Load Rules", 3, "showExpandButton"], [3, "formGroup", 4, "ngIf"], ["title", "Tables", 3, "showExpandButton", "padding", 4, "ngIf"], [3, "formGroup"], ["label", "Datalink is a query and does not populate target tables.", "formControlName", "isQuery", 3, "errors"], [4, "ngIf"], ["label", "Load Strategy", "formControlName", "loadStrategy", "itemKey", "key", "itemName", "description", "iconClass", "fa fa-database", "note", "Specify processing method for target table(s).", 3, "items", "errors"], ["label", "Update Strategy", "formControlName", "updateStrategy", "itemKey", "key", "itemName", "description", "iconClass", "fa fa-database", "note", "Specify how records should be inserted/updated in the target table.", 3, "items", "errors"], ["label", "Audit Connection", "formControlName", "auditConnectionKey", "itemKey", "key", "itemName", "name", "iconClass", "fa fa-database", "note", "Specify the connection where audit data (such as job results) should be written to.", 3, "items", "errors"], [3, "key"], [1, "form-row"], [1, "form-group", "col-md-6"], ["label", "Maximum Rows Per Commit", "type", "number", "formControlName", "rowsPerCommit", "placeholder", "Enter maximum rows per commit", "iconClass", "fa fa-list", 3, "errors"], ["label", "Maximum Rows Per Progress Update", "type", "number", "formControlName", "rowsPerProgress", "placeholder", "Enter maximum rows per progress update", "iconClass", "fa fa-list", 3, "errors"], [1, "form-row", "mb-2"], ["label", "Add a default row to the target table.  Edit the 'Default Value' of the target columns determine the value to populate.", "formControlName", "addDefaultRow", 3, "errors"], ["title", "Tables", 3, "showExpandButton", "padding"], [3, "enableMultiSelect", "enableManualSort", "enableSort", "enableFilter", "columns", "data", "onSortChanged", "rowClick"], ["actions", ""], ["select", "selectedItemAction"], ["selectedItemAction", ""], ["select", "selectedItemsAction"], ["selectedItemsAction", ""], [1, "mr-1", 3, "click"]], template: function DatalinkEditTargetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-widget-section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DatalinkEditTargetComponent_form_1_Template, 4, 3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DatalinkEditTargetComponent_d_widget_section_2_Template, 8, 8, "d-widget-section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showExpandButton", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.datalinkForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.datalinkForm == null ? null : ctx.datalinkForm.controls.isQuery.value));
    } }, directives: [ngx_d_components__WEBPACK_IMPORTED_MODULE_11__["ɵa"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupDirective"], ngx_d_components__WEBPACK_IMPORTED_MODULE_11__["DFormCheckboxComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlName"], ngx_d_components__WEBPACK_IMPORTED_MODULE_11__["DFormSelectComponent"], _buttons_connection_edit_button_connection_edit_button_component__WEBPACK_IMPORTED_MODULE_13__["ConnectionEditButtonComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_11__["DFormInputComponent"], ngx_d_table__WEBPACK_IMPORTED_MODULE_14__["DTableComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_11__["DButtonNewComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_11__["DButtonEditComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_11__["DButtonDeleteComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatalinkEditTargetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dexih-datalink-edit-target-form',
                templateUrl: './datalink-edit-target.component.html'
            }]
    }], function () { return [{ type: _hub_service__WEBPACK_IMPORTED_MODULE_3__["HubService"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _datalink_edit_service__WEBPACK_IMPORTED_MODULE_4__["DatalinkEditService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/+hub/datalink/datalink-edit/transform-step/transform-step.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/+hub/datalink/datalink-edit/transform-step/transform-step.component.ts ***!
  \****************************************************************************************/
/*! exports provided: TransformStepComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransformStepComponent", function() { return TransformStepComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_ui_dexihFormControls_dexih_invalid_form_icon_dexih_invalid_form_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/ui/dexihFormControls/dexih-invalid-form-icon/dexih-invalid-form-icon.component */ "./src/app/shared/ui/dexihFormControls/dexih-invalid-form-icon/dexih-invalid-form-icon.component.ts");





function TransformStepComponent_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r0.routerLinkBefore);
} }
function TransformStepComponent_a_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r1.routerLinkAfter);
} }
function TransformStepComponent_a_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TransformStepComponent_a_4_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.onDelete.emit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0, a1) { return { "preview": a0, "preview-last": a1 }; };
function TransformStepComponent_li_12_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, !ctx_r7.isLast, ctx_r7.isLast))("routerLink", ctx_r7.routerLinkPreview);
} }
function TransformStepComponent_li_12_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 22);
} }
const _c1 = function (a0, a1) { return { "arrow": a0, "arrow-last": a1 }; };
function TransformStepComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TransformStepComponent_li_12_a_2_Template, 2, 5, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TransformStepComponent_li_12_div_3_Template, 1, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c1, !ctx_r3.isLast, ctx_r3.isLast));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.routerLinkPreview);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.isLast);
} }
function TransformStepComponent_li_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "li", 23);
} }
class TransformStepComponent {
    constructor() {
        this.showArrow = true;
        this.showDelete = false;
        this.isLast = false;
        this.onDelete = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
}
TransformStepComponent.ɵfac = function TransformStepComponent_Factory(t) { return new (t || TransformStepComponent)(); };
TransformStepComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TransformStepComponent, selectors: [["transform-step"]], inputs: { routerLinkBefore: "routerLinkBefore", routerLinkAfter: "routerLinkAfter", routerLinkCurrent: "routerLinkCurrent", routerLinkPreview: "routerLinkPreview", name: "name", title: "title", icon: "icon", control: "control", showArrow: "showArrow", showDelete: "showDelete", isLast: "isLast" }, outputs: { onDelete: "onDelete" }, decls: 14, vars: 10, consts: [[1, "d-flex"], [1, "d-flex", "align-items-stretch", "p-0"], ["class", "insert-before btn btn-sm btn-primary", "title", "Insert a transform before this", 3, "routerLink", 4, "ngIf"], ["class", "insert-after btn btn-sm btn-primary", "title", "Insert a transform after this", 3, "routerLink", 4, "ngIf"], ["class", "delete btn btn-sm btn-danger mr-1", "href", "javascript:void(0)", "title", "Delete", 3, "click", 4, "ngIf"], ["routerLinkActive", "btn-outline-success", 1, "btn", "btn-outline-primary", 2, "width", "100%", 3, "routerLink", "title"], [1, "d-block"], [1, "text-truncate", 2, "max-width", "150px"], [1, "fa-4x", 3, "ngClass"], [3, "control"], [4, "ngIf"], ["class", "no-arrow", 4, "ngIf"], ["title", "Insert a transform before this", 1, "insert-before", "btn", "btn-sm", "btn-primary", 3, "routerLink"], [1, "fa", "fa-plus"], ["title", "Insert a transform after this", 1, "insert-after", "btn", "btn-sm", "btn-primary", 3, "routerLink"], ["href", "javascript:void(0)", "title", "Delete", 1, "delete", "btn", "btn-sm", "btn-danger", "mr-1", 3, "click"], [1, "fa", "fa-remove"], [1, "bg-primary", 3, "ngClass"], ["class", "btn btn-sm btn-primary  mr-1", "title", "Preview transform data", 3, "ngClass", "routerLink", 4, "ngIf"], ["class", "arrow-head", 4, "ngIf"], ["title", "Preview transform data", 1, "btn", "btn-sm", "btn-primary", "mr-1", 3, "ngClass", "routerLink"], [1, "fa", "fa-search"], [1, "arrow-head"], [1, "no-arrow"]], template: function TransformStepComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TransformStepComponent_a_2_Template, 2, 1, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TransformStepComponent_a_3_Template, 2, 1, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TransformStepComponent_a_4_Template, 2, 0, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "dexih-invalid-form-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TransformStepComponent_li_12_Template, 4, 6, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TransformStepComponent_li_13_Template, 1, 0, "li", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.routerLinkBefore);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.routerLinkAfter);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showDelete);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx.routerLinkCurrent)("title", ctx.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx.control);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLast && ctx.showArrow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.showArrow);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _shared_ui_dexihFormControls_dexih_invalid_form_icon_dexih_invalid_form_icon_component__WEBPACK_IMPORTED_MODULE_3__["DexihInvalidFormIconComponent"]], styles: [".transform-container[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  margin: auto;\n  overflow-y: hidden;\n}\n\nul[_ngcontent-%COMP%] {\n  display: flex;\n  list-style: none;\n  padding: 0px;\n}\n\nli[_ngcontent-%COMP%] {\n  margin: auto;\n  position: relative;\n  text-align: center;\n  min-width: 120px;\n}\n\na.active[_ngcontent-%COMP%] {\n  color: white;\n  background: lightgrey;\n}\n\n.arrow[_ngcontent-%COMP%] {\n  height: 1px;\n  min-width: 88px;\n  width: 88px;\n  right: -13px;\n  position: relative;\n  top: 50%;\n}\n\n.arrow-last[_ngcontent-%COMP%] {\n  height: 1px;\n  min-width: 44px;\n  width: 44px;\n  right: -13px;\n  position: relative;\n  top: 50%;\n}\n\n.no-arrow[_ngcontent-%COMP%] {\n  min-width: 44px;\n  width: 44px;\n  right: -13px;\n  position: relative;\n  top: 50%;\n}\n\n.arrow-head[_ngcontent-%COMP%] {\n  content: '';\n  position: absolute;\n  width: 0;\n  height: 0;\n  top: 50%;\n  border-style: solid;\n  border-width: 7px 0 7px 20px;\n  border-color: transparent transparent transparent  #3a5f8d;\n  left: calc(100% - 15px);\n  transform: translateY(-50%);\n}\n\n.preview[_ngcontent-%COMP%] {\n  content: '';\n  position: absolute;\n  top: 50%;\n  left: calc(50% - 19px);\n  transform: translateY(-50%);\n}\n\n.preview-last[_ngcontent-%COMP%] {\n  content: '';\n  position: absolute;\n  top: 50%;\n  left: calc(100% - 19px);\n  transform: translateY(-50%);\n}\n\n.insert-before[_ngcontent-%COMP%] {\n  content: '';\n  position: absolute;\n  top: 50%;\n  left: -16px;\n  transform: translateY(-50%);\n}\n\n.insert-after[_ngcontent-%COMP%] {\n  content: '';\n  position: absolute;\n  top: 50%;\n  left: calc(100% - 16px);\n  transform: translateY(-50%);\n}\n\n.delete[_ngcontent-%COMP%] {\n  content: '';\n  position: absolute;\n  left: calc(100% - 16px);\n  top: -16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvK2h1Yi9kYXRhbGluay9kYXRhbGluay1lZGl0L3RyYW5zZm9ybS1zdGVwL3RyYW5zZm9ybXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osa0JBQWtCO0FBRHRCOztBQUlBO0VBQ0ksYUFBYTtFQUNiLGdCQUFnQjtFQUNoQixZQUFZO0FBRGhCOztBQUdFO0VBRUUsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFFbEIsZ0JBQWdCO0FBRnBCOztBQUtBO0VBQ0ksWUFBWTtFQUNaLHFCQUFxQjtBQUZ6Qjs7QUFLQTtFQUNJLFdBQVc7RUFDWCxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsUUFBUTtBQUZaOztBQUtFO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixRQUFRO0FBRlo7O0FBS0U7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsUUFBUTtBQUZaOztBQUtFO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULFFBQVE7RUFDUixtQkFBbUI7RUFDbkIsNEJBQTRCO0VBQzVCLDBEQUEwRDtFQUUxRCx1QkFBdUI7RUFDdkIsMkJBQTJCO0FBSC9COztBQU1FO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1Isc0JBQXNCO0VBQ3RCLDJCQUEyQjtBQUgvQjs7QUFNRTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLHVCQUF1QjtFQUN2QiwyQkFBMkI7QUFIL0I7O0FBTUU7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXO0VBQ1gsMkJBQTJCO0FBSC9COztBQU1FO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtBQUgvQjs7QUFNRTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLFVBQVU7QUFIZCIsImZpbGUiOiJzcmMvYXBwLytodWIvZGF0YWxpbmsvZGF0YWxpbmstZWRpdC90cmFuc2Zvcm0tc3RlcC90cmFuc2Zvcm1zLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vIGFsbG93IHRyYW5zZm9ybSBsaXN0IHRvIHNjcm9sbCBob3Jpem9udGFsXG4udHJhbnNmb3JtLWNvbnRhaW5lciB7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICBtYXJnaW46IGF1dG87XG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuXG51bCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgfVxuICBsaSB7XG4gICAgLy8gcGFkZGluZzogMjBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvLyBoZWlnaHQ6IDE1MHB4O1xuICAgIG1pbi13aWR0aDogMTIwcHg7XG4gIH1cblxuYS5hY3RpdmUgeyAgICBcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZDogbGlnaHRncmV5O1xufVxuXG4uYXJyb3cge1xuICAgIGhlaWdodDogMXB4O1xuICAgIG1pbi13aWR0aDogODhweDtcbiAgICB3aWR0aDogODhweDtcbiAgICByaWdodDogLTEzcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogNTAlO1xuICB9XG5cbiAgLmFycm93LWxhc3Qge1xuICAgIGhlaWdodDogMXB4O1xuICAgIG1pbi13aWR0aDogNDRweDtcbiAgICB3aWR0aDogNDRweDtcbiAgICByaWdodDogLTEzcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogNTAlO1xuICB9XG5cbiAgLm5vLWFycm93IHtcbiAgICBtaW4td2lkdGg6IDQ0cHg7XG4gICAgd2lkdGg6IDQ0cHg7XG4gICAgcmlnaHQ6IC0xM3B4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDUwJTtcbiAgfVxuXG4gIC5hcnJvdy1oZWFkIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIHRvcDogNTAlO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiA3cHggMCA3cHggMjBweDtcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICAjM2E1ZjhkOztcbiAgICAvLyByaWdodDogLTUwcHg7XG4gICAgbGVmdDogY2FsYygxMDAlIC0gMTVweCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB9XG5cbiAgLnByZXZpZXcge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDE5cHgpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgfVxuXG4gIC5wcmV2aWV3LWxhc3Qge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiBjYWxjKDEwMCUgLSAxOXB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIH1cblxuICAuaW5zZXJ0LWJlZm9yZSB7XG4gICAgY29udGVudDogJyc7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IC0xNnB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgfVxuXG4gIC5pbnNlcnQtYWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiBjYWxjKDEwMCUgLSAxNnB4KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIH1cblxuICAuZGVsZXRlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogY2FsYygxMDAlIC0gMTZweCk7XG4gICAgdG9wOiAtMTZweDtcbiAgfSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransformStepComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'transform-step',
                templateUrl: 'transform-step.component.html',
                styleUrls: ['./transforms.scss']
            }]
    }], function () { return []; }, { routerLinkBefore: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], routerLinkAfter: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], routerLinkCurrent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], routerLinkPreview: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], icon: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], control: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showArrow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], showDelete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], isLast: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onDelete: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/+hub/datalink/datalink-edit/transform-table-edit/transform-table-edit.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/+hub/datalink/datalink-edit/transform-table-edit/transform-table-edit.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: TransformTableEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransformTableEditComponent", function() { return TransformTableEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _hub_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hub.models */ "./src/app/+hub/hub.models.ts");
/* harmony import */ var _hub_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hub.service */ "./src/app/+hub/hub.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../+auth/auth.service */ "./src/app/+auth/auth.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _datalink_edit_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../datalink-edit.service */ "./src/app/+hub/datalink/datalink-edit/datalink-edit.service.ts");
/* harmony import */ var _hub_remote_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../hub.remote.models */ "./src/app/+hub/hub.remote.models.ts");
/* harmony import */ var _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/shared.models */ "./src/app/shared/shared.models.ts");
/* harmony import */ var ngx_d_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-d-components */ "./node_modules/ngx-d-components/__ivy_ngcc__/fesm2015/ngx-d-components.js");
/* harmony import */ var ngx_d_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-d-table */ "./node_modules/ngx-d-table/__ivy_ngcc__/fesm2015/ngx-d-table.js");
















function TransformTableEditComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button-delete", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TransformTableEditComponent_ng_template_9_Template_d_button_delete_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const items_r6 = ctx.items; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.deleteSelected(items_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TransformTableEditComponent_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button-edit", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TransformTableEditComponent_ng_template_11_Template_d_button_edit_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const column_r9 = ctx.item; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.editColumn(column_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TransformTableEditComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button-new", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TransformTableEditComponent_ng_template_13_Template_d_button_new_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const items_r12 = ctx.items; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.deleteSelected(items_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class TransformTableEditComponent {
    constructor(hubService, authService, editDatalinkService, route, router) {
        this.hubService = hubService;
        this.authService = authService;
        this.editDatalinkService = editDatalinkService;
        this.route = route;
        this.router = router;
        this.canEdit = false;
        this.typeCodes = _hub_remote_models__WEBPACK_IMPORTED_MODULE_7__["TypeCodes"];
        this.deltaTypes = _hub_models__WEBPACK_IMPORTED_MODULE_2__["deltaTypes"];
        this.securityFlags = _hub_models__WEBPACK_IMPORTED_MODULE_2__["securityFlags"];
        this.eConnectionPurpose = _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["eConnectionPurpose"];
        this.columns = [
            { name: 'position', title: '#', format: '' },
            { control: 'name', title: 'Column Name', format: '', tooltip: 'description' },
            { name: 'dataType', title: 'Data Type', format: '' },
            { name: 'allowDbNull', title: 'Null?', format: 'Boolean' },
            { name: 'logicalName', title: 'Logical Name', format: '' },
            { name: 'updateDate', title: 'Last Modified', format: 'Calendar' },
        ];
        this._columnData = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](null);
        this.columnData = this._columnData.asObservable();
    }
    ngOnInit() {
        try {
            this._subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])(this.route.data, this.route.params, this.hubService.getHubCacheObservable()).subscribe(result => {
                this.pageTitle = result[0]['pageTitle'];
                let params = result[1];
                this.hubCache = result[2];
                this.datalinkTransformKey = +params['datalinkTransformKey'];
                this.datalinkTransformForm = this.editDatalinkService.getDatalinkTransform(this.datalinkTransformKey);
                this.transformTableForm = this.datalinkTransformForm.controls.transformTable;
                this.updateColumnData();
            });
        }
        catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Transform Table Edit');
        }
    }
    ngOnDestroy() {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
    }
    updateColumnData() {
        let tableData = [];
        let tableColumns = this.transformTableForm.controls.dexihTableColumns;
        tableColumns.controls
            .filter(c => c.value.isValid)
            .sort((a, b) => a.value.position - b.value.position)
            .forEach(column => {
            const columnForm = column;
            tableData.push({
                key: column.value.key,
                position: column.value.position,
                name: columnForm.controls.name,
                description: column.value.description,
                dataType: column.value.dataType,
                allowDbNull: column.value.allowDbNull,
                logicalName: column.value.logicalName,
                updateDate: column.value.updateDate,
            });
        });
        this._columnData.next(tableData);
    }
    deleteColumn(column) {
        this.deleteSelected([column]);
    }
    deleteSelected(columns) {
        const columnsArray = this.transformTableForm.controls.dexihTableColumns;
        columns.forEach(column => {
            let columnIndex = columnsArray.controls.findIndex(c => c.value.key === column.key);
            if (columnIndex >= 0) {
                columnsArray.removeAt(columnIndex);
            }
            this.updateColumnData();
        });
    }
    newColumn() {
        this.router.navigate(['column'], { relativeTo: this.route.parent });
    }
    editColumn(column) {
        this.router.navigate(['column', column.key], { relativeTo: this.route.parent });
    }
    columnSortChange(items) {
        let columnsArray = this.transformTableForm.controls.dexihTableColumns;
        let position = 1;
        items.forEach(c => {
            let column = columnsArray.controls.find(control => control.value.key === c.key);
            column.controls.position.setValue(position++);
        });
        this.updateColumnData();
    }
    close() {
        this.authService.navigateUp();
    }
}
TransformTableEditComponent.ɵfac = function TransformTableEditComponent_Factory(t) { return new (t || TransformTableEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hub_service__WEBPACK_IMPORTED_MODULE_3__["HubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_datalink_edit_service__WEBPACK_IMPORTED_MODULE_6__["DatalinkEditService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
TransformTableEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TransformTableEditComponent, selectors: [["transform-table-edit-form"]], decls: 15, vars: 4, consts: [[1, "widget-body-toolbar"], [1, "form-row"], [1, "col-sm-6"], [1, "col-sm-6", "text-right"], [3, "click"], ["sortColumn", "position", 3, "enableMultiSelect", "enableManualSort", "columns", "dataObservable", "onSortChanged"], ["select", "selectedItemsAction"], ["selectedItemsAction", ""], ["select", "selectedItemAction"], ["selectedItemAction", ""], ["select", "actionsTemplate"], ["actions", ""], ["title", "Delete selected columns", 3, "click"], ["title", "Edit the column", 3, "click"], ["title", "Create a new column", 3, "click"]], template: function TransformTableEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Transform Output Columns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "d-button-close", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TransformTableEditComponent_Template_d_button_close_click_7_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "d-table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSortChanged", function TransformTableEditComponent_Template_d_table_onSortChanged_8_listener($event) { return ctx.columnSortChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TransformTableEditComponent_ng_template_9_Template, 1, 0, "ng-template", 6, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TransformTableEditComponent_ng_template_11_Template, 1, 0, "ng-template", 8, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TransformTableEditComponent_ng_template_13_Template, 1, 0, "ng-template", 10, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("enableMultiSelect", true)("enableManualSort", true)("columns", ctx.columns)("dataObservable", ctx.columnData);
    } }, directives: [ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["DButtonCloseComponent"], ngx_d_table__WEBPACK_IMPORTED_MODULE_10__["DTableComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["DButtonDeleteComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["DButtonEditComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["DButtonNewComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TransformTableEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'transform-table-edit-form',
                templateUrl: './transform-table-edit.component.html',
            }]
    }], function () { return [{ type: _hub_service__WEBPACK_IMPORTED_MODULE_3__["HubService"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _datalink_edit_service__WEBPACK_IMPORTED_MODULE_6__["DatalinkEditService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/+hub/datalink/datalink-edit/transform/datalink-edit-transform.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/+hub/datalink/datalink-edit/transform/datalink-edit-transform.component.ts ***!
  \********************************************************************************************/
/*! exports provided: DatalinkEditTransformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatalinkEditTransformComponent", function() { return DatalinkEditTransformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _hub_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hub.models */ "./src/app/+hub/hub.models.ts");
/* harmony import */ var _hub_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../hub.service */ "./src/app/+hub/hub.service.ts");
/* harmony import */ var _datalink_edit_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../datalink-edit.service */ "./src/app/+hub/datalink/datalink-edit/datalink-edit.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../+auth/auth.service */ "./src/app/+auth/auth.service.ts");
/* harmony import */ var _logging__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../logging */ "./src/logging.ts");
/* harmony import */ var _hub_lineage_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../hub.lineage.models */ "./src/app/+hub/hub.lineage.models.ts");
/* harmony import */ var _shared_shared_models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/shared.models */ "./src/app/shared/shared.models.ts");
/* harmony import */ var ngx_d_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-d-components */ "./node_modules/ngx-d-components/__ivy_ngcc__/fesm2015/ngx-d-components.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _datalink_table_datalink_table_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../datalink-table/datalink-table.component */ "./src/app/+hub/datalink/datalink-edit/datalink-table/datalink-table.component.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _input_columns_input_columns_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../input-columns/input-columns.component */ "./src/app/+hub/datalink/datalink-edit/input-columns/input-columns.component.ts");
/* harmony import */ var _output_columns_output_columns_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../output-columns/output-columns.component */ "./src/app/+hub/datalink/datalink-edit/output-columns/output-columns.component.ts");
/* harmony import */ var _target_columns_target_columns_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../target-columns/target-columns.component */ "./src/app/+hub/datalink/datalink-edit/target-columns/target-columns.component.ts");
/* harmony import */ var _join_columns_join_columns_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../join-columns/join-columns.component */ "./src/app/+hub/datalink/datalink-edit/join-columns/join-columns.component.ts");
/* harmony import */ var _mapping_mapping_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../mapping/mapping.component */ "./src/app/+hub/datalink/datalink-edit/mapping/mapping.component.ts");

























function DatalinkEditTransformComponent_form_1_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "form-checkbox", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DatalinkEditTransformComponent_form_1_section_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "form-select", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r7.nodes)("enableKeySelect", false)("allowNullSelect", true);
} }
function DatalinkEditTransformComponent_form_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "form-input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "form-textarea", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DatalinkEditTransformComponent_form_1_div_6_Template, 3, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DatalinkEditTransformComponent_form_1_section_7_Template, 2, 3, "section", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "form-input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "form-input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.datalinkTransformForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autocapitalize", true)("errors", ctx_r0.formErrors.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r0.formErrors.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.datalinkTransformForm.value.transformType == ctx_r0.eTransformType.Aggregate || ctx_r0.datalinkTransformForm.value.transformType == ctx_r0.eTransformType.Series || ctx_r0.datalinkTransformForm.value.transformType == ctx_r0.eTransformType.Rows || ctx_r0.datalinkTransformForm.value.transformType == ctx_r0.eTransformType.Mapping);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.nodes == null ? null : ctx_r0.nodes.length) > 0);
} }
function DatalinkEditTransformComponent_d_widget_section_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-widget-section", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "datalink-table", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "form-select", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "form-select", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showExpandButton", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.datalinkTransformForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datalinkTableForm", ctx_r1.datalinkTransformForm.controls.joinDatalinkTable);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Strategy when " + ctx_r1.eTransformType[ctx_r1.datalinkTransformForm.value.transformType] + " produces duplicate matches")("items", ctx_r1.eDuplicateStrategyItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", "Strategy when " + ctx_r1.eTransformType[ctx_r1.datalinkTransformForm.value.transformType] + " produces no match ")("items", ctx_r1.eJoinNotFoundStrategyItems);
} }
function DatalinkEditTransformComponent_d_widget_section_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-widget-section", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "datalink-table", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showExpandButton", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.datalinkTransformForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datalinkTableForm", ctx_r2.datalinkTransformForm.controls.joinDatalinkTable);
} }
function DatalinkEditTransformComponent_d_widget_section_4_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "form-input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "form-input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DatalinkEditTransformComponent_d_widget_section_4_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "form-input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "form-input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DatalinkEditTransformComponent_d_widget_section_4_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-widget-section", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "form-select", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form-select", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("textValueChange", function DatalinkEditTransformComponent_d_widget_section_4_Template_form_select_textValueChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.sourceValue = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "form-checkbox", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DatalinkEditTransformComponent_d_widget_section_4_div_9_Template, 5, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DatalinkEditTransformComponent_d_widget_section_4_div_10_Template, 5, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showExpandButton", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r3.seriesForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r3.seriesGrains);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r3.inputColumns)("textValue", ctx_r3.sourceValue)("enableKeySelect", false)("errors", ctx_r3.sourceErrors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.seriesForm.controls.seriesFill.value && ctx_r3.seriesForm.controls.seriesGrain.value !== ctx_r3.eSeriesGrain.Number);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.seriesForm.controls.seriesFill.value && ctx_r3.seriesForm.controls.seriesGrain.value === ctx_r3.eSeriesGrain.Number);
} }
const _c0 = function () { return { standalone: true }; };
function DatalinkEditTransformComponent_d_widget_section_5_section_4_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form-input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DatalinkEditTransformComponent_d_widget_section_5_section_4_Template_form_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.nodeName = $event; })("ngModelChange", function DatalinkEditTransformComponent_d_widget_section_5_section_4_Template_form_input_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.updateNode($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0))("ngModel", ctx_r12.nodeName);
} }
function DatalinkEditTransformComponent_d_widget_section_5_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-widget-section", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form-checkbox", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DatalinkEditTransformComponent_d_widget_section_5_Template_form_checkbox_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.allowNode = $event; })("ngModelChange", function DatalinkEditTransformComponent_d_widget_section_5_Template_form_checkbox_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.toggleNode($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DatalinkEditTransformComponent_d_widget_section_5_section_4_Template, 2, 3, "section", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showExpandButton", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0))("ngModel", ctx_r4.allowNode);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.allowNode);
} }
function DatalinkEditTransformComponent_div_7_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "join-columns", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("inputJoinDrop", function DatalinkEditTransformComponent_div_7_div_3_Template_join_columns_inputJoinDrop_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r29.newDragDropJoin($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datalinkTransformForm", ctx_r19.datalinkTransformForm);
} }
function DatalinkEditTransformComponent_div_7_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mapping", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("title", "", ctx_r20.eTransformType[ctx_r20.datalinkTransformForm.value.transformType], " Table");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datalinkTransformForm", ctx_r20.datalinkTransformForm)("allowJoin", true);
} }
function DatalinkEditTransformComponent_div_7_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mapping", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onColumnDrop", function DatalinkEditTransformComponent_div_7_div_6_Template_mapping_onColumnDrop_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r31.newDragDropMapping(ctx_r31.eTransformItemType.ColumnPair, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datalinkTransformForm", ctx_r21.datalinkTransformForm)("allowStandard", true)("allowMapping", true)("allowOutput", true);
} }
function DatalinkEditTransformComponent_div_7_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mapping", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onColumnDrop", function DatalinkEditTransformComponent_div_7_div_7_Template_mapping_onColumnDrop_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r33.newDragDropMapping(ctx_r33.eTransformItemType.Sort, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datalinkTransformForm", ctx_r22.datalinkTransformForm)("allowSort", true);
} }
function DatalinkEditTransformComponent_div_7_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mapping", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onColumnDrop", function DatalinkEditTransformComponent_div_7_div_8_Template_mapping_onColumnDrop_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r35.newDragDropMapping(ctx_r35.eTransformItemType.Column, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datalinkTransformForm", ctx_r23.datalinkTransformForm)("allowGroup", true)("allowSeries", ctx_r23.datalinkTransformForm.value.transformType == ctx_r23.eTransformType.Series);
} }
function DatalinkEditTransformComponent_div_7_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mapping", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onColumnDrop", function DatalinkEditTransformComponent_div_7_div_9_Template_mapping_onColumnDrop_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r37.newDragDropMapping(ctx_r37.eTransformItemType.AggregatePair, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datalinkTransformForm", ctx_r24.datalinkTransformForm)("allowStandard", true)("allowAggregate", true)("allowOutput", true);
} }
function DatalinkEditTransformComponent_div_7_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mapping", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onColumnDrop", function DatalinkEditTransformComponent_div_7_div_10_Template_mapping_onColumnDrop_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r39.newDragDropMapping(ctx_r39.eTransformItemType.AggregatePair, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mapping", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onColumnDrop", function DatalinkEditTransformComponent_div_7_div_10_Template_mapping_onColumnDrop_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r40); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r41.newDragDropMapping(ctx_r41.eTransformItemType.ColumnPair, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datalinkTransformForm", ctx_r25.datalinkTransformForm)("allowStandard", true)("allowAggregate", true)("allowSeries", true)("allowOutput", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datalinkTransformForm", ctx_r25.datalinkTransformForm)("allowMapping", true)("allowOutput", true);
} }
function DatalinkEditTransformComponent_div_7_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mapping", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onColumnDrop", function DatalinkEditTransformComponent_div_7_div_11_Template_mapping_onColumnDrop_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r42.newDragDropMapping(ctx_r42.eTransformItemType.AggregatePair, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mapping", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onColumnDrop", function DatalinkEditTransformComponent_div_7_div_11_Template_mapping_onColumnDrop_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r44.newDragDropMapping(ctx_r44.eTransformItemType.ColumnPair, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datalinkTransformForm", ctx_r26.datalinkTransformForm)("allowStandard", true)("allowAggregate", true)("allowOutput", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datalinkTransformForm", ctx_r26.datalinkTransformForm)("allowMapping", true)("allowOutput", true);
} }
function DatalinkEditTransformComponent_div_7_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mapping", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datalinkTransformForm", ctx_r27.datalinkTransformForm)("allowStandard", true)("allowCondition", true)("allowOutput", false);
} }
function DatalinkEditTransformComponent_div_7_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mapping", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datalinkTransformForm", ctx_r28.datalinkTransformForm)("allowRow", true)("allowStandard", true)("allowJoinNode", false)("allowOutput", true)("allowCondition", true);
} }
function DatalinkEditTransformComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "d-widget", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input-columns", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DatalinkEditTransformComponent_div_7_div_3_Template, 2, 1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DatalinkEditTransformComponent_div_7_div_5_Template, 2, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DatalinkEditTransformComponent_div_7_div_6_Template, 2, 4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DatalinkEditTransformComponent_div_7_div_7_Template, 2, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DatalinkEditTransformComponent_div_7_div_8_Template, 2, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DatalinkEditTransformComponent_div_7_div_9_Template, 2, 4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DatalinkEditTransformComponent_div_7_div_10_Template, 3, 8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DatalinkEditTransformComponent_div_7_div_11_Template, 3, 7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DatalinkEditTransformComponent_div_7_div_12_Template, 2, 4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DatalinkEditTransformComponent_div_7_div_13_Template, 2, 6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "d-widget", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "output-columns", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("inputOutputDrop", function DatalinkEditTransformComponent_div_7_Template_output_columns_inputOutputDrop_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45.newDragDropMapping(ctx_r45.eTransformItemType.ColumnPair, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "target-columns", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("inputOutputDrop", function DatalinkEditTransformComponent_div_7_Template_target_columns_inputOutputDrop_16_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r47.newDragDropMapping(ctx_r47.eTransformItemType.ColumnPair, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scrollable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datalinkTransformForm", ctx_r5.datalinkTransformForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.datalinkTransformForm.controls.joinDatalinkTable.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.datalinkTransformForm.value.transformType == ctx_r5.eTransformType.Join || ctx_r5.datalinkTransformForm.value.transformType == ctx_r5.eTransformType.Lookup);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.datalinkTransformForm.value.transformType == ctx_r5.eTransformType.Mapping);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.datalinkTransformForm.value.transformType == ctx_r5.eTransformType.Sort);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.datalinkTransformForm.value.transformType == ctx_r5.eTransformType.Group || ctx_r5.datalinkTransformForm.value.transformType == ctx_r5.eTransformType.Aggregate || ctx_r5.datalinkTransformForm.value.transformType == ctx_r5.eTransformType.Series || ctx_r5.datalinkTransformForm.value.transformType == ctx_r5.eTransformType.Rows);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.datalinkTransformForm.value.transformType == ctx_r5.eTransformType.Group);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.datalinkTransformForm.value.transformType == ctx_r5.eTransformType.Series);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.datalinkTransformForm.value.transformType == ctx_r5.eTransformType.Aggregate);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.datalinkTransformForm.value.transformType == ctx_r5.eTransformType.Filter);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.datalinkTransformForm.value.transformType == ctx_r5.eTransformType.Rows);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Outputs" + ((ctx_r5.datalinkTransformForm.controls.nodeDatalinkColumn == null ? null : ctx_r5.datalinkTransformForm.controls.nodeDatalinkColumn.value) ? "(@" + ctx_r5.datalinkTransformForm.controls.nodeDatalinkColumn.value.name + ")" : ""))("scrollable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datalinkTransformForm", ctx_r5.datalinkTransformForm)("allowMappingOutputs", ctx_r5.allowMappingOutputs);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datalinkTransformForm", ctx_r5.datalinkTransformForm)("targets", ctx_r5.datalinkForm.controls.dexihDatalinkTargets.value)("allowMappingOutputs", ctx_r5.allowMappingOutputs);
} }
class DatalinkEditTransformComponent {
    constructor(hubService, authService, editDatalinkService, route, router) {
        this.hubService = hubService;
        this.authService = authService;
        this.editDatalinkService = editDatalinkService;
        this.route = route;
        this.router = router;
        this.pageTitle = 'Transform';
        this.showName = false;
        this.showDescription = false;
        this.eTransformType = _shared_shared_models__WEBPACK_IMPORTED_MODULE_9__["eTransformType"];
        this.eTransformItemType = _shared_shared_models__WEBPACK_IMPORTED_MODULE_9__["eTransformItemType"];
        this.eDuplicateStrategyItems = _shared_shared_models__WEBPACK_IMPORTED_MODULE_9__["eDuplicateStrategyItems"];
        this.eJoinNotFoundStrategyItems = _shared_shared_models__WEBPACK_IMPORTED_MODULE_9__["eJoinNotFoundStrategyItems"];
        this.eSeriesGrain = _shared_shared_models__WEBPACK_IMPORTED_MODULE_9__["eSeriesGrain"];
        this.seriesGrains = _hub_models__WEBPACK_IMPORTED_MODULE_2__["seriesGrains"];
        this.allowNode = false;
        this.nodeName = '';
        this.logger = new _logging__WEBPACK_IMPORTED_MODULE_7__["LogFactory"]('datalink-edit-transform');
        this.nodes = [];
        this.formErrors = {};
    }
    ngOnInit() {
        this.logger.LogC(() => `OnInit`, _logging__WEBPACK_IMPORTED_MODULE_7__["eLogLevel"].Trace);
        try {
            this._subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["combineLatest"])(this.route.data, this.route.params, this.editDatalinkService.hubFormsService.getCurrentFormObservable()).subscribe(result => {
                this.action = result[0]['action'];
                this.pageTitle = result[0]['pageTitle'];
                this.datalinkTransformKey = +result[1]['datalinkTransformKey'];
                this.datalinkForm = result[2];
                if (this.datalinkForm) {
                    let transformsArray = this.datalinkForm.controls.dexihDatalinkTransforms;
                    if (this._transformsArraySubscription) {
                        this._transformsArraySubscription.unsubscribe();
                    }
                    this._transformsArraySubscription = transformsArray.valueChanges.subscribe(transforms => {
                        let tmpDatalinkTransformForm = transforms
                            .find(c => c.datalinkTransformKey === this.datalinkTransformKey);
                        if (!tmpDatalinkTransformForm) {
                            this.router.navigate(['properties'], { relativeTo: this.route.parent.parent });
                        }
                    });
                    this.datalinkTransformForm = transformsArray.controls
                        .find(c => c.value.key === this.datalinkTransformKey);
                    // if the transform isn't found, this is probably due to a save/reload which changes the keys.
                    // navigate up one level when this happens.
                    if (!this.datalinkTransformForm) {
                        this.router.navigate(['properties'], { relativeTo: this.route.parent.parent });
                        //                        this.authService.navigateUp();
                        return;
                    }
                    let datalinkTransform = this.datalinkTransformForm.value;
                    let items = this.datalinkTransformForm.controls.dexihDatalinkTransformItems;
                    if (datalinkTransform.transformType === _shared_shared_models__WEBPACK_IMPORTED_MODULE_9__["eTransformType"].Series) {
                        this.seriesForm = items.controls
                            .filter(d => d.value.transformItemType === _shared_shared_models__WEBPACK_IMPORTED_MODULE_9__["eTransformItemType"].Series)[0];
                    }
                    if (datalinkTransform.transformType === _shared_shared_models__WEBPACK_IMPORTED_MODULE_9__["eTransformType"].Aggregate) {
                        this.nodeType = _shared_shared_models__WEBPACK_IMPORTED_MODULE_9__["eTransformItemType"].GroupNode;
                    }
                    if (datalinkTransform.transformType === _shared_shared_models__WEBPACK_IMPORTED_MODULE_9__["eTransformType"].Lookup
                        || datalinkTransform.transformType === _shared_shared_models__WEBPACK_IMPORTED_MODULE_9__["eTransformType"].Join) {
                        this.nodeType = _shared_shared_models__WEBPACK_IMPORTED_MODULE_9__["eTransformItemType"].JoinNode;
                    }
                    if (this.nodeType) {
                        let node = datalinkTransform.dexihDatalinkTransformItems
                            .find(d => d.transformItemType === this.nodeType);
                        if (node) {
                            this.allowNode = true;
                            this.nodeName = node.targetDatalinkColumn.name;
                        }
                        else {
                            this.allowNode = false;
                        }
                    }
                    this.inputColumns = datalinkTransform['runTime'].inputColumns;
                    this.nodes = [];
                    this.addNodeColumns(this.inputColumns, '');
                    let transformType = datalinkTransform.transformType;
                    this.allowMappingOutputs =
                        // transformType === eTransformType.Group ||
                        transformType === _shared_shared_models__WEBPACK_IMPORTED_MODULE_9__["eTransformType"].Series ||
                            // transformType === eTransformType.Aggregate ||
                            transformType === _shared_shared_models__WEBPACK_IMPORTED_MODULE_9__["eTransformType"].Rows ||
                            transformType === _shared_shared_models__WEBPACK_IMPORTED_MODULE_9__["eTransformType"].Mapping ||
                            transformType === _shared_shared_models__WEBPACK_IMPORTED_MODULE_9__["eTransformType"].Validation;
                    if (this._datalinkFormSubscription) {
                        this._datalinkFormSubscription.unsubscribe();
                    }
                    this._datalinkFormSubscription = this.datalinkForm.valueChanges.subscribe(value => {
                        this.formErrors = this.editDatalinkService.hubFormsService.getFormErrorMessages(this.datalinkForm, true);
                    });
                    if (!this.datalinkTransformForm) {
                        this.router.navigate(['properties'], { relativeTo: this.route.parent.parent });
                    }
                    this.logger.LogC(() => `datalink form is loaded`, _logging__WEBPACK_IMPORTED_MODULE_7__["eLogLevel"].Trace);
                }
            });
        }
        catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Edit Transform');
        }
    }
    addNodeColumns(columns, path) {
        if (columns) {
            columns.filter(c => c.dataType === _shared_shared_models__WEBPACK_IMPORTED_MODULE_9__["eTypeCode"].Node && c.isValid).forEach(col => {
                let name = path ? (path + '.' + col.logicalName) : col.logicalName;
                this.nodes.push({ key: col.key, name: name });
                if (col.childColumns && col.childColumns.length > 0) {
                    this.addNodeColumns(col.childColumns, name);
                }
            });
        }
    }
    ngOnDestroy() {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
        if (this._transformsArraySubscription) {
            this._transformsArraySubscription.unsubscribe();
        }
        if (this._datalinkFormSubscription) {
            this._datalinkFormSubscription.unsubscribe();
        }
    }
    // deleteTransform() {
    //     this.logger.LogC(() => `deleteTransform`, eLogLevel.Trace);
    //     this.editDatalinkService.deleteDatalinkTransform(this.datalinkTransformForm.value);
    //     this.router.navigate(['properties'], { relativeTo: this.route });
    // }
    previewData() {
        this.router.navigate(['preview-transform-data'], { relativeTo: this.route.parent });
    }
    toggleNode(allowNode) {
        let items = this.datalinkTransformForm.controls.dexihDatalinkTransformItems;
        let nodeItem = items.controls.find(d => d.value.transformItemType === this.nodeType);
        if (allowNode) {
            if (!this.nodeName) {
                this.nodeName = _shared_shared_models__WEBPACK_IMPORTED_MODULE_9__["eTransformItemType"][this.nodeType];
            }
            if (nodeItem) {
                this.authService.informationDialog('Can not add node', 'Only one node can be added per transform.');
                return;
            }
            let item = new _shared_shared_models__WEBPACK_IMPORTED_MODULE_9__["DexihDatalinkTransformItem"]();
            let outputColumn = new _shared_shared_models__WEBPACK_IMPORTED_MODULE_9__["DexihDatalinkColumn"]();
            outputColumn.position = 0;
            outputColumn.key = this.hubService.getHubCache().getNextSequence();
            outputColumn.name = this.nodeName;
            outputColumn.logicalName = this.nodeName;
            outputColumn.dataType = _shared_shared_models__WEBPACK_IMPORTED_MODULE_9__["eTypeCode"].Node;
            item.position = -1;
            item.datalinkTransformKey = this.datalinkTransformForm.value.key;
            item.targetDatalinkColumn = outputColumn;
            item.isValid = true;
            item.transformItemType = this.nodeType;
            let itemForm = this.editDatalinkService.hubFormsService
                .datalinkDatalinkTransformItemFormGroup(this.datalinkTransformForm, item);
            this.editDatalinkService.insertDatalinkTransformItem(this.datalinkTransformForm, itemForm);
        }
        else {
            this.editDatalinkService.deleteDatalinkTransformItem(this.datalinkTransformForm, nodeItem);
        }
    }
    updateNode(name) {
        let items = this.datalinkTransformForm.controls.dexihDatalinkTransformItems;
        let nodeItem = items.controls.find(d => d.value.transformItemType === this.nodeType);
        if (nodeItem) {
            let column = nodeItem.controls.targetDatalinkColumn.value;
            if (column) {
                column.name = name;
                column.logicalName = name;
                nodeItem.controls.targetDatalinkColumn.setValue(column);
            }
        }
    }
    newDragDropMapping(itemType, $event) {
        let item = new _shared_shared_models__WEBPACK_IMPORTED_MODULE_9__["DexihDatalinkTransformItem"]();
        let outputColumn = $event.outputColumn;
        let inputColumn = $event.inputColumn;
        let io = new _hub_lineage_models__WEBPACK_IMPORTED_MODULE_8__["InputOutputColumns"]();
        switch (itemType) {
            case _shared_shared_models__WEBPACK_IMPORTED_MODULE_9__["eTransformItemType"].ColumnPair:
                if (!outputColumn) {
                    outputColumn = io.copyDatalinkColumn(inputColumn, 0, 'mapping');
                }
                outputColumn.key = this.hubService.getHubCache().getNextSequence();
                if (outputColumn.childColumns) {
                    outputColumn.childColumns.forEach(col => {
                        col.key = this.hubService.getHubCache().getNextSequence();
                    });
                }
                outputColumn.datalinkTableKey = null;
                break;
            case _shared_shared_models__WEBPACK_IMPORTED_MODULE_9__["eTransformItemType"].Sort:
                item.sortDirection = _shared_shared_models__WEBPACK_IMPORTED_MODULE_9__["eSortDirection"].Ascending;
                break;
            case _shared_shared_models__WEBPACK_IMPORTED_MODULE_9__["eTransformItemType"].AggregatePair:
                if (!outputColumn) {
                    outputColumn = io.copyDatalinkColumn(inputColumn, 0, 'mapping');
                }
                outputColumn.key = this.hubService.getHubCache().getNextSequence();
                if (outputColumn.childColumns) {
                    outputColumn.childColumns.forEach(col => {
                        col.key = this.hubService.getHubCache().getNextSequence();
                    });
                }
                outputColumn.datalinkTableKey = null;
                // outputColumn.name = 'Sum ' + outputColumn.name;
                item.aggregate = _shared_shared_models__WEBPACK_IMPORTED_MODULE_9__["eAggregate"].Sum;
                break;
        }
        if (itemType) {
            item.datalinkTransformKey = this.datalinkTransformForm.value.key;
            item.sourceDatalinkColumn = inputColumn;
            item.targetDatalinkColumn = outputColumn;
            item.isValid = true;
            item.transformItemType = itemType;
            let itemForm = this.editDatalinkService.hubFormsService
                .datalinkDatalinkTransformItemFormGroup(this.datalinkTransformForm, item);
            this.editDatalinkService.insertDatalinkTransformItem(this.datalinkTransformForm, itemForm);
        }
    }
    newDragDropJoin($event) {
        let transformType = this.datalinkTransformForm.value.transformType;
        if (transformType === _shared_shared_models__WEBPACK_IMPORTED_MODULE_9__["eTransformType"].Join
            || transformType === _shared_shared_models__WEBPACK_IMPORTED_MODULE_9__["eTransformType"].Lookup) {
            let joinColumn = $event.joinColumn;
            let inputColumn = $event.inputColumn;
            let item = new _shared_shared_models__WEBPACK_IMPORTED_MODULE_9__["DexihDatalinkTransformItem"]();
            item.transformItemType = _shared_shared_models__WEBPACK_IMPORTED_MODULE_9__["eTransformItemType"].JoinPair;
            item.datalinkTransformKey = this.datalinkTransformForm.value.key;
            item.sourceDatalinkColumn = inputColumn;
            item.joinDatalinkColumn = joinColumn;
            item.isValid = true;
            let itemForm = this.editDatalinkService.hubFormsService
                .datalinkDatalinkTransformItemFormGroup(this.datalinkTransformForm, item);
            this.editDatalinkService.insertDatalinkTransformItem(this.datalinkTransformForm, itemForm);
        }
    }
}
DatalinkEditTransformComponent.ɵfac = function DatalinkEditTransformComponent_Factory(t) { return new (t || DatalinkEditTransformComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hub_service__WEBPACK_IMPORTED_MODULE_3__["HubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_datalink_edit_service__WEBPACK_IMPORTED_MODULE_4__["DatalinkEditService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
DatalinkEditTransformComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DatalinkEditTransformComponent, selectors: [["dexih-datalink-edit-transform-form"]], decls: 8, vars: 8, consts: [["title", "Properties", 3, "showExpandButton", "isExpanded"], [3, "formGroup", 4, "ngIf"], ["title", "Join Settings", 3, "showExpandButton", 4, "ngIf"], ["title", "Concatenate Settings", 3, "showExpandButton", 4, "ngIf"], ["title", "Series Settings", 3, "showExpandButton", 4, "ngIf"], ["title", "Group Node", 3, "showExpandButton", 4, "ngIf"], [1, "list-group-item", "p-1"], ["class", "d-flex", "cdkDropListGroup", "", 4, "ngIf"], [3, "formGroup"], ["label", "Transform Name", "formControlName", "name", "placeholder", "Enter a name for the transform", "iconClass", "fa fa-list", 3, "autocapitalize", "errors"], ["label", "Description", "formControlName", "description", "placeholder", "Enter the description.", 3, "errors"], [4, "ngIf"], [1, "form-row"], [1, "form-group", "col-md-6"], ["type", "number", "formControlName", "maxInputRows", "label", "Maximum number of rows to input into the transform (0 = unlimited)"], ["type", "number", "formControlName", "maxOutputRows", "label", "Maximum number of rows to output into the transform (0 = unlimited)"], ["label", "Allow unmapped input columns to pass through to the next transform.", "formControlName", "passThroughColumns"], ["label", "Node level", "formControlName", "nodeDatalinkColumn", "itemKey", "key", "itemName", "name", "node", "Specify the node where the transform should be applied to.", "selectNullMessage", "Use top level", 3, "items", "enableKeySelect", "allowNullSelect"], ["title", "Join Settings", 3, "showExpandButton"], [3, "datalinkTableForm"], ["formControlName", "joinDuplicateStrategy", "itemKey", "key", "itemName", "name", 3, "label", "items"], ["formControlName", "joinNotFoundStrategy", "itemKey", "key", "itemName", "description", 3, "label", "items"], ["title", "Concatenate Settings", 3, "showExpandButton"], ["title", "Series Settings", 3, "showExpandButton"], ["label", "Series Grain", "formControlName", "seriesGrain", "itemKey", "key", "itemName", "name", 3, "items"], ["label", "Input Column", "formControlName", "sourceDatalinkColumn", "itemKey", "key", "itemName", "name", 3, "items", "textValue", "enableKeySelect", "errors", "textValueChange"], ["label", "Fill empty series values", "formControlName", "seriesFill"], ["class", "form-row", 4, "ngIf"], ["type", "date", "formControlName", "seriesStart", "label", "Series Start Date (empty to use first value)"], ["type", "date", "formControlName", "seriesFinish", "label", "Series Finish Date (empty to use last value)"], ["formControlName", "seriesStart", "label", "Series Start Number (empty to use first value)"], ["formControlName", "seriesFinish", "label", "Series Finish Number (empty to use last value)"], ["title", "Group Node", 3, "showExpandButton"], ["label", "Group rows under a node", 3, "ngModelOptions", "ngModel", "ngModelChange"], ["class", "form-group col-md-6", 4, "ngIf"], ["label", "Name of the node", 3, "ngModelOptions", "ngModel", "ngModelChange"], ["cdkDropListGroup", "", 1, "d-flex"], ["title", "Inputs", "height", "80vh", 1, "d-none", "d-lg-inline", 2, "width", "300px", 3, "scrollable"], [3, "datalinkTransformForm"], ["class", "mt-1", 4, "ngIf"], [1, "w-100", "mr-1", "ml-1"], ["height", "80vh", 1, "d-none", "d-lg-inline", 2, "width", "300px", 3, "title", "scrollable"], [3, "datalinkTransformForm", "allowMappingOutputs", "inputOutputDrop"], [3, "datalinkTransformForm", "targets", "allowMappingOutputs", "inputOutputDrop"], [1, "mt-1"], [3, "datalinkTransformForm", "inputJoinDrop"], [3, "datalinkTransformForm", "allowJoin", "title"], ["title", "Mapping Functions", 3, "datalinkTransformForm", "allowStandard", "allowMapping", "allowOutput", "onColumnDrop"], ["title", "Sort Columns", 3, "datalinkTransformForm", "allowSort", "onColumnDrop"], ["title", "Group Columns", 3, "datalinkTransformForm", "allowGroup", "allowSeries", "onColumnDrop"], ["title", "Aggregate Functions", 3, "datalinkTransformForm", "allowStandard", "allowAggregate", "allowOutput", "onColumnDrop"], ["title", "Series/Aggregate Functions", 3, "datalinkTransformForm", "allowStandard", "allowAggregate", "allowSeries", "allowOutput", "onColumnDrop"], ["title", "Mappings", 3, "datalinkTransformForm", "allowMapping", "allowOutput", "onColumnDrop"], ["title", "Filters", 3, "datalinkTransformForm", "allowStandard", "allowCondition", "allowOutput"], ["title", "Row Functions", 3, "datalinkTransformForm", "allowRow", "allowStandard", "allowJoinNode", "allowOutput", "allowCondition"]], template: function DatalinkEditTransformComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-widget-section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DatalinkEditTransformComponent_form_1_Template, 13, 6, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DatalinkEditTransformComponent_d_widget_section_2_Template, 9, 7, "d-widget-section", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DatalinkEditTransformComponent_d_widget_section_3_Template, 4, 3, "d-widget-section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DatalinkEditTransformComponent_d_widget_section_4_Template, 11, 9, "d-widget-section", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DatalinkEditTransformComponent_d_widget_section_5_Template, 5, 5, "d-widget-section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DatalinkEditTransformComponent_div_7_Template, 17, 19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showExpandButton", true)("isExpanded", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.datalinkTransformForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.datalinkTransformForm && (ctx.datalinkTransformForm.value.transformType == ctx.eTransformType.Join || ctx.datalinkTransformForm.value.transformType == ctx.eTransformType.Lookup));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.datalinkTransformForm && ctx.datalinkTransformForm.value.transformType == ctx.eTransformType.Concatenate);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.datalinkTransformForm && ctx.datalinkTransformForm.value.transformType == ctx.eTransformType.Series);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.datalinkTransformForm && ctx.nodeType);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.datalinkTransformForm);
    } }, directives: [ngx_d_components__WEBPACK_IMPORTED_MODULE_10__["ɵa"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormGroupDirective"], ngx_d_components__WEBPACK_IMPORTED_MODULE_10__["DFormInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControlName"], ngx_d_components__WEBPACK_IMPORTED_MODULE_10__["DFormTextAreaComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_10__["DFormCheckboxComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_10__["DFormSelectComponent"], _datalink_table_datalink_table_component__WEBPACK_IMPORTED_MODULE_13__["DatalinkTableComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_14__["CdkDropListGroup"], ngx_d_components__WEBPACK_IMPORTED_MODULE_10__["DWidgetComponent"], _input_columns_input_columns_component__WEBPACK_IMPORTED_MODULE_15__["InputColumnsComponent"], _output_columns_output_columns_component__WEBPACK_IMPORTED_MODULE_16__["OutputColumnsComponent"], _target_columns_target_columns_component__WEBPACK_IMPORTED_MODULE_17__["TargetColumnsComponent"], _join_columns_join_columns_component__WEBPACK_IMPORTED_MODULE_18__["JoinColumnsComponent"], _mapping_mapping_component__WEBPACK_IMPORTED_MODULE_19__["MappingComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatalinkEditTransformComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dexih-datalink-edit-transform-form',
                templateUrl: './datalink-edit-transform.component.html',
            }]
    }], function () { return [{ type: _hub_service__WEBPACK_IMPORTED_MODULE_3__["HubService"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }, { type: _datalink_edit_service__WEBPACK_IMPORTED_MODULE_4__["DatalinkEditService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/+hub/datalink/datalink-edit/unGroup-edit/index.ts":
/*!*******************************************************************!*\
  !*** ./src/app/+hub/datalink/datalink-edit/unGroup-edit/index.ts ***!
  \*******************************************************************/
/*! exports provided: UnGroupEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _unGroup_edit_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unGroup-edit.component */ "./src/app/+hub/datalink/datalink-edit/unGroup-edit/unGroup-edit.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UnGroupEditComponent", function() { return _unGroup_edit_component__WEBPACK_IMPORTED_MODULE_0__["UnGroupEditComponent"]; });




/***/ }),

/***/ "./src/app/+hub/datalink/datalink-edit/unGroup-edit/unGroup-edit.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/+hub/datalink/datalink-edit/unGroup-edit/unGroup-edit.component.ts ***!
  \************************************************************************************/
/*! exports provided: UnGroupEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnGroupEditComponent", function() { return UnGroupEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _hub_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hub.service */ "./src/app/+hub/hub.service.ts");
/* harmony import */ var _datalink_edit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../datalink-edit.service */ "./src/app/+hub/datalink/datalink-edit/datalink-edit.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../+auth/auth.service */ "./src/app/+auth/auth.service.ts");
/* harmony import */ var _logging__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../../logging */ "./src/logging.ts");
/* harmony import */ var _hub_remote_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../hub.remote.models */ "./src/app/+hub/hub.remote.models.ts");
/* harmony import */ var _hub_lineage_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../hub.lineage.models */ "./src/app/+hub/hub.lineage.models.ts");
/* harmony import */ var _shared_shared_models__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/shared.models */ "./src/app/shared/shared.models.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_d_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-d-components */ "./node_modules/ngx-d-components/__ivy_ngcc__/fesm2015/ngx-d-components.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");


















function UnGroupEditComponent_div_0_div_8_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const parameter_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](parameter_r3.controls.name.value);
} }
function UnGroupEditComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form-select", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("textValueChange", function UnGroupEditComponent_div_0_div_8_Template_form_select_textValueChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.sourceValue = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "UnGroup Column");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UnGroupEditComponent_div_0_div_8_div_9_Template, 4, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.newDatalinkTransformItemForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r1.inputColumns)("textValue", ctx_r1.sourceValue)("enableTextEntry", true)("enableTextEntryMatch", false)("enableKeySelect", false)("errors", ctx_r1.sourceErrors);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.newDatalinkTransformItemForm.controls.dexihFunctionParameters.controls);
} }
function UnGroupEditComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Un-Group Column Node");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "d-button-apply", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UnGroupEditComponent_div_0_Template_d_button_apply_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return !ctx_r7.newDatalinkTransformItemForm.pristine && ctx_r7.applyExit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "d-button-cancel", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UnGroupEditComponent_div_0_Template_d_button_cancel_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UnGroupEditComponent_div_0_div_8_Template, 10, 8, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.newDatalinkTransformItemForm.pristine);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.datalinkTransformForm);
} }
class UnGroupEditComponent {
    constructor(hubService, authService, editDatalinkService, route) {
        this.hubService = hubService;
        this.authService = authService;
        this.editDatalinkService = editDatalinkService;
        this.route = route;
        this.eFunctionType = _shared_shared_models__WEBPACK_IMPORTED_MODULE_9__["eFunctionType"];
        this.eParameterDirection = _shared_shared_models__WEBPACK_IMPORTED_MODULE_9__["eParameterDirection"];
        this.typeCodes = _hub_remote_models__WEBPACK_IMPORTED_MODULE_7__["TypeCodes"];
        this.variables = [];
        this.allowOutput = false;
        this.allowReturn = true;
        this.logger = new _logging__WEBPACK_IMPORTED_MODULE_6__["LogFactory"]('unGroup-edit');
    }
    ngOnInit() {
        try {
            this._subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])(this.route.data, this.route.params, this.hubService.getHubCacheObservable(), this.editDatalinkService.hubFormsService.getCurrentFormObservable()).subscribe(result => {
                this.pageTitle = result[0]['pageTitle'];
                let params = result[1];
                this.hubCache = result[2];
                this.datalinkForm = result[3];
                this.logger.LogC(() => `OnInit`, _logging__WEBPACK_IMPORTED_MODULE_6__["eLogLevel"].Trace);
                if (this.hubCache && this.hubCache.isLoaded() && this.datalinkForm) {
                    this.datalinkTransformKey = +params['datalinkTransformKey'];
                    this.datalinkTransformItemKey = +params['datalinkTransformItemKey'];
                    this.datalinkTransformForm = this.editDatalinkService.getDatalinkTransform(this.datalinkTransformKey);
                    this.variables = this.editDatalinkService.getVariables();
                    let nodeDatalinkColumn = this.datalinkTransformForm.controls.nodeDatalinkColumn.value;
                    let nodeDatalinkColumnKey = nodeDatalinkColumn ? nodeDatalinkColumn.key : null;
                    let io = new _hub_lineage_models__WEBPACK_IMPORTED_MODULE_8__["InputOutputColumns"]();
                    if (nodeDatalinkColumnKey) {
                        let inputColumns = this.datalinkTransformForm.controls.runTime.value.inputColumns;
                        this.inputColumns = io.getAvailableColumns(inputColumns, nodeDatalinkColumnKey, 0);
                        this.outputColumns = this.datalinkTransformForm.controls.runTime.value.transformColumns;
                    }
                    else {
                        this.inputColumns = this.datalinkTransformForm.controls.runTime.value.inputColumns;
                        this.outputColumns = this.datalinkTransformForm.controls.runTime.value.transformColumns;
                    }
                    this.inputColumns = this.inputColumns.filter(c => c.dataType === _shared_shared_models__WEBPACK_IMPORTED_MODULE_9__["eTypeCode"].Node);
                    if (this.datalinkTransformItemKey) {
                        this.datalinkTransformItemForm = this.editDatalinkService
                            .getDatalinkTransformItem(this.datalinkTransformForm, this.datalinkTransformItemKey);
                        if (!this.datalinkTransformItemForm) {
                            this.authService.navigateUp();
                            return;
                        }
                        // create a copy of the form item to allow for cancel.
                        this.newDatalinkTransformItemForm = this.editDatalinkService.hubFormsService
                            .datalinkDatalinkTransformItemFormGroup(this.datalinkTransformForm, this.datalinkTransformItemForm.value);
                        let parameters = this.newDatalinkTransformItemForm.controls.dexihFunctionParameters;
                        parameters.controls.forEach((control) => {
                            let runTime = {};
                            runTime['functionParameter'] = new _shared_shared_models__WEBPACK_IMPORTED_MODULE_9__["FunctionParameter"]();
                            if (control.value.datalinkColumn) {
                                runTime['functionParameter'].name = control.value.datalinkColumn.name;
                            }
                            control.controls['runTime'].setValue(runTime);
                        });
                    }
                    else {
                        let newItem = new _shared_shared_models__WEBPACK_IMPORTED_MODULE_9__["DexihDatalinkTransformItem"]();
                        newItem.datalinkTransformKey = this.datalinkTransformKey;
                        newItem.transformItemType = _shared_shared_models__WEBPACK_IMPORTED_MODULE_9__["eTransformItemType"].UnGroup;
                        this.datalinkTransformItemKey = 0;
                        this.newDatalinkTransformItemForm = this.editDatalinkService.hubFormsService
                            .datalinkDatalinkTransformItemFormGroup(this.datalinkTransformForm, newItem);
                    }
                    if (this._nodeSubscription) {
                        this._nodeSubscription.unsubscribe();
                    }
                    this._nodeSubscription = this.newDatalinkTransformItemForm.controls.sourceDatalinkColumn.valueChanges
                        .subscribe(sourceDatalinkColumn => {
                        let parameters = this.newDatalinkTransformItemForm.controls.dexihFunctionParameters;
                        // clear previous parameters
                        while (parameters.length) {
                            parameters.removeAt(0);
                        }
                        let column = sourceDatalinkColumn;
                        // add a paramter for each childColumn
                        if (column.childColumns && column.childColumns.length > 0) {
                            column.childColumns.forEach((childColumn, index) => {
                                let outputColumn = io.copyDatalinkColumn(childColumn, 0, 'un-group');
                                let newParameter = new _shared_shared_models__WEBPACK_IMPORTED_MODULE_9__["DexihFunctionParameter"]();
                                newParameter.datalinkTransformItemKey = this.datalinkTransformItemKey;
                                newParameter.name = childColumn.name;
                                newParameter.rank = childColumn.rank;
                                newParameter.direction = _shared_shared_models__WEBPACK_IMPORTED_MODULE_9__["eParameterDirection"].Output;
                                newParameter.dataType = childColumn.dataType;
                                newParameter.position = index;
                                newParameter.key = this.hubCache.getNextSequence();
                                newParameter.datalinkColumn = outputColumn;
                                newParameter.isValid = true;
                                newParameter['runTime'] = {};
                                newParameter['runTime'].functionParameter = new _shared_shared_models__WEBPACK_IMPORTED_MODULE_9__["FunctionParameter"]();
                                newParameter['runTime'].functionParameter.name = childColumn.name;
                                let newParameterForm = this.editDatalinkService.hubFormsService.datalinkFunctionParametersFormGroup(newParameter);
                                parameters.push(newParameterForm);
                            });
                        }
                    });
                }
            });
        }
        catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'UnGroup Node Edit');
        }
    }
    ngOnDestroy() {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
        if (this._nodeSubscription) {
            this._nodeSubscription.unsubscribe();
        }
    }
    canDeactivate() {
        return new Promise(resolve => {
            if (this.newDatalinkTransformItemForm && !this.newDatalinkTransformItemForm.pristine) {
                this.authService.confirmDialog('The function has changed', 'The function has changed.  Do you want to discard the changes and continue?')
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
    cancel() {
        this.authService.navigateUp();
    }
    apply() {
        this.editDatalinkService.insertDatalinkTransformItem(this.datalinkTransformForm, this.newDatalinkTransformItemForm);
        this.newDatalinkTransformItemForm.markAsPristine();
    }
    applyExit() {
        this.apply();
        this.authService.navigateUp();
    }
}
UnGroupEditComponent.ɵfac = function UnGroupEditComponent_Factory(t) { return new (t || UnGroupEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hub_service__WEBPACK_IMPORTED_MODULE_2__["HubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_datalink_edit_service__WEBPACK_IMPORTED_MODULE_3__["DatalinkEditService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
UnGroupEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UnGroupEditComponent, selectors: [["dexih-unGroup-edit"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "list-group-item", "list-group-item-info", "rounded-0"], [1, "d-flex", "flex-row"], [1, "ml-auto"], [1, "mr-1", 3, "disabled", "click"], [3, "click"], ["class", "container  mt-3 mb-3", 4, "ngIf"], [1, "container", "mt-3", "mb-3"], [3, "formGroup"], [1, "col", "col-xs-12"], ["label", "Column Node", "formControlName", "sourceDatalinkColumn", "itemKey", "key", "itemName", "logicalName", 3, "items", "textValue", "enableTextEntry", "enableTextEntryMatch", "enableKeySelect", "errors", "textValueChange"], [1, "mt-1"], [1, "row"], [1, "col", "border", "bg-primary", "text-white", "font-weight-bold", "text-truncate"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "col", "border", "bg-secondary", "text-white", "text-truncate"]], template: function UnGroupEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UnGroupEditComponent_div_0_Template, 9, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.newDatalinkTransformItemForm && ctx.inputColumns && ctx.outputColumns);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], ngx_d_components__WEBPACK_IMPORTED_MODULE_11__["DButtonApplyComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_11__["DButtonCancelComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormGroupDirective"], ngx_d_components__WEBPACK_IMPORTED_MODULE_11__["DFormSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnGroupEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dexih-unGroup-edit',
                templateUrl: './unGroup-edit.component.html'
            }]
    }], function () { return [{ type: _hub_service__WEBPACK_IMPORTED_MODULE_2__["HubService"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }, { type: _datalink_edit_service__WEBPACK_IMPORTED_MODULE_3__["DatalinkEditService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/+hub/datalink/datalink-edit/validation/datalink-edit-validation.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/+hub/datalink/datalink-edit/validation/datalink-edit-validation.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: DatalinkEditValidationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatalinkEditValidationComponent", function() { return DatalinkEditValidationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _hub_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../hub.service */ "./src/app/+hub/hub.service.ts");
/* harmony import */ var _datalink_edit_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../datalink-edit.service */ "./src/app/+hub/datalink/datalink-edit/datalink-edit.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_shared_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/shared.models */ "./src/app/shared/shared.models.ts");
/* harmony import */ var ngx_d_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-d-components */ "./node_modules/ngx-d-components/__ivy_ngcc__/fesm2015/ngx-d-components.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _input_columns_input_columns_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../input-columns/input-columns.component */ "./src/app/+hub/datalink/datalink-edit/input-columns/input-columns.component.ts");
/* harmony import */ var _mapping_mapping_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../mapping/mapping.component */ "./src/app/+hub/datalink/datalink-edit/mapping/mapping.component.ts");
/* harmony import */ var _output_columns_output_columns_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../output-columns/output-columns.component */ "./src/app/+hub/datalink/datalink-edit/output-columns/output-columns.component.ts");
















function DatalinkEditValidationComponent_div_1_d_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatalinkEditValidationComponent_div_1_d_button_4_Template_d_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.enableValidation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enable");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autoCompact", false);
} }
function DatalinkEditValidationComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Target column validation is not enabled. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DatalinkEditValidationComponent_div_1_d_button_4_Template, 2, 1, "d-button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.datalinkTransformForm);
} }
function DatalinkEditValidationComponent_div_2_form_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "d-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatalinkEditValidationComponent_div_2_form_1_Template_d_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.disableValidation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Disable Validation");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "form-textarea", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r6.datalinkTransformForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autoCompact", false);
} }
function DatalinkEditValidationComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DatalinkEditValidationComponent_div_2_form_1_Template, 7, 2, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.datalinkTransformForm);
} }
function DatalinkEditValidationComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Inputs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input-columns", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "mapping", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Outputs ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "output-columns", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("inputOutputDrop", function DatalinkEditValidationComponent_div_4_Template_output_columns_inputOutputDrop_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.newDragDropMapping(ctx_r9.eTransformItemType.ColumnPair, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datalinkTransformForm", ctx_r2.datalinkTransformForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datalinkTransformForm", ctx_r2.datalinkTransformForm)("allowCondition", true)("allowOutput", true)("allowStandard", true)("allowValidation", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("datalinkTransformForm", ctx_r2.datalinkTransformForm)("allowMappingOutputs", ctx_r2.allowMappingOutputs);
} }
class DatalinkEditValidationComponent {
    constructor(hubService, editDatalinkService, route) {
        this.hubService = hubService;
        this.editDatalinkService = editDatalinkService;
        this.route = route;
        this.pageTitle = 'Validation';
        this.showName = false;
        this.showDescription = false;
    }
    ngOnInit() {
        try {
            this._subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])(this.route.data, this.hubService.getHubCacheObservable(), this.editDatalinkService.hubFormsService.getCurrentFormObservable(), this.hubService.getRemoteLibrariesObservable()).subscribe(result => {
                this.pageTitle = result[0]['pageTitle'];
                this.hubCache = result[1];
                this.datalinkForm = result[2];
                this.remoteLibraries = result[3];
                if (this.hubCache.isLoaded() && this.datalinkForm) {
                    this.datalinkTransformForm = this.editDatalinkService.getValidationTransform();
                    this._transformsChange = this.datalinkForm.controls.dexihDatalinkTransforms.valueChanges
                        .subscribe(() => this.datalinkTransformForm = this.editDatalinkService.getValidationTransform());
                }
            });
        }
        catch (e) {
            this.hubService.addHubClientErrorMessage(e, 'Datalink Edit Validation');
        }
    }
    ngOnDestroy() {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
        if (this._transformsChange) {
            this._transformsChange.unsubscribe();
        }
    }
    enableValidation() {
        let transform = this.remoteLibraries.transforms.find(c => c.transformType === _shared_shared_models__WEBPACK_IMPORTED_MODULE_5__["eTransformType"].Validation);
        this.datalinkTransformForm = this.editDatalinkService.insertDatalinkTransform(1, transform);
    }
    disableValidation() {
        this.editDatalinkService.deleteDatalinkTransform(this.datalinkTransformForm.value);
        this.datalinkTransformForm = null;
    }
}
DatalinkEditValidationComponent.ɵfac = function DatalinkEditValidationComponent_Factory(t) { return new (t || DatalinkEditValidationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hub_service__WEBPACK_IMPORTED_MODULE_2__["HubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_datalink_edit_service__WEBPACK_IMPORTED_MODULE_3__["DatalinkEditService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
DatalinkEditValidationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DatalinkEditValidationComponent, selectors: [["dexih-datalink-edit-validation-form"]], decls: 5, vars: 4, consts: [["title", "Validation", 3, "showExpandButton"], [4, "ngIf"], [1, "list-group-item", "p-1"], ["class", "d-flex", 4, "ngIf"], [1, "alert", "alert-danger", "m-3"], ["buttonClass", "btn btn-success", "iconClass", "fa fa-check", "title", "Enable the validation on the target table.", 3, "autoCompact", "click", 4, "ngIf"], ["buttonClass", "btn btn-success", "iconClass", "fa fa-check", "title", "Enable the validation on the target table.", 3, "autoCompact", "click"], [3, "formGroup", 4, "ngIf"], [3, "formGroup"], ["label", "Description", "formControlName", "description", "placeholder", "Enter the description."], [1, "d-flex"], [1, "mr-1", "d-none", "d-md-inline"], [1, "alert", "alert-primary", "mb-1"], [3, "datalinkTransformForm"], [1, "w-100"], ["title", "Validation", 3, "datalinkTransformForm", "allowCondition", "allowOutput", "allowStandard", "allowValidation"], [1, "ml-1", "d-none", "d-md-inline"], [1, "float-right"], [3, "datalinkTransformForm", "allowMappingOutputs", "inputOutputDrop"]], template: function DatalinkEditValidationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-widget-section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DatalinkEditValidationComponent_div_1_Template, 5, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DatalinkEditValidationComponent_div_2_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DatalinkEditValidationComponent_div_4_Template, 16, 8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showExpandButton", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.datalinkTransformForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.datalinkTransformForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.datalinkTransformForm);
    } }, directives: [ngx_d_components__WEBPACK_IMPORTED_MODULE_6__["ɵa"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], ngx_d_components__WEBPACK_IMPORTED_MODULE_6__["DButtonComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroupDirective"], ngx_d_components__WEBPACK_IMPORTED_MODULE_6__["DFormTextAreaComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControlName"], _input_columns_input_columns_component__WEBPACK_IMPORTED_MODULE_9__["InputColumnsComponent"], _mapping_mapping_component__WEBPACK_IMPORTED_MODULE_10__["MappingComponent"], _output_columns_output_columns_component__WEBPACK_IMPORTED_MODULE_11__["OutputColumnsComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatalinkEditValidationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dexih-datalink-edit-validation-form',
                templateUrl: './datalink-edit-validation.component.html',
            }]
    }], function () { return [{ type: _hub_service__WEBPACK_IMPORTED_MODULE_2__["HubService"] }, { type: _datalink_edit_service__WEBPACK_IMPORTED_MODULE_3__["DatalinkEditService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=7-es2015.js.map