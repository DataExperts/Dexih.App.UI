(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4], {
    /***/
    "3Ivb":
    /*!**************************************************************************!*\
      !*** ./src/app/+hub/test/datalinkTest-edit/datalinkTest-edit.routing.ts ***!
      \**************************************************************************/

    /*! exports provided: editRoutes, routes, Routing */

    /***/
    function Ivb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "editRoutes", function () {
        return editRoutes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "routes", function () {
        return routes;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Routing", function () {
        return Routing;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _datalinkTest_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./datalinkTest-edit.component */
      "qwqF");
      /* harmony import */


      var _properties_datalinkTest_properties_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./properties/datalinkTest-properties.component */
      "ly09");
      /* harmony import */


      var _step_edit_datalinkTest_edit_step_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./step-edit/datalinkTest-edit-step.component */
      "C+JB");
      /* harmony import */


      var _datalinkTest_edit_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./datalinkTest-edit-guard */
      "89C+");

      var editRoutes = [{
        path: '',
        redirectTo: 'properties',
        data: {
          navigateSkip: true
        }
      }, {
        path: 'properties',
        component: _properties_datalinkTest_properties_component__WEBPACK_IMPORTED_MODULE_2__["DatalinkTestPropertiesComponent"],
        data: {
          navigateSkip: true,
          pageTitle: 'Properties'
        }
      }, {
        path: 'step',
        component: _step_edit_datalinkTest_edit_step_component__WEBPACK_IMPORTED_MODULE_3__["DatalinkTestEditStepComponent"],
        data: {
          pageTitle: 'New Step'
        }
      }, {
        path: 'step/:datalinkTestStepKey',
        component: _step_edit_datalinkTest_edit_step_component__WEBPACK_IMPORTED_MODULE_3__["DatalinkTestEditStepComponent"],
        data: {
          pageTitle: 'Edit Step'
        }
      }];
      var routes = [{
        path: '',
        component: _datalinkTest_edit_component__WEBPACK_IMPORTED_MODULE_1__["DatalinkTestEditComponent"],
        canDeactivate: [_datalinkTest_edit_guard__WEBPACK_IMPORTED_MODULE_4__["DatalinkTestEditGuard"]],
        children: editRoutes
      }];

      var Routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);
      /***/

    },

    /***/
    "3ZyD":
    /*!*************************************************************************!*\
      !*** ./src/app/+hub/test/datalinkTest-edit/datalinkTest-edit.module.ts ***!
      \*************************************************************************/

    /*! exports provided: DatalinkTestEditModule */

    /***/
    function ZyD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatalinkTestEditModule", function () {
        return DatalinkTestEditModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _datalinkTest_edit_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./datalinkTest-edit.routing */
      "3Ivb");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../shared/shared.module */
      "PCNd");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _datalinkTest_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./datalinkTest-edit.component */
      "qwqF");
      /* harmony import */


      var _properties_datalinkTest_properties_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./properties/datalinkTest-properties.component */
      "ly09");
      /* harmony import */


      var _step_edit_datalinkTest_edit_step_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./step-edit/datalinkTest-edit-step.component */
      "C+JB");
      /* harmony import */


      var _hub_forms_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../hub.forms.service */
      "cvPx");
      /* harmony import */


      var _datalinkTest_edit_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./datalinkTest-edit-guard */
      "89C+");
      /* harmony import */


      var _hub_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../hub.shared.module */
      "RRRx");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      var DatalinkTestEditModule = /*#__PURE__*/function () {
        function DatalinkTestEditModule() {
          _classCallCheck(this, DatalinkTestEditModule);
        }

        _createClass(DatalinkTestEditModule, null, [{
          key: "forRoot",
          value: function forRoot() {
            return {
              ngModule: DatalinkTestEditModule,
              providers: [_hub_forms_service__WEBPACK_IMPORTED_MODULE_8__["HubFormsService"]]
            };
          }
        }]);

        return DatalinkTestEditModule;
      }();

      DatalinkTestEditModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: DatalinkTestEditModule
      });
      DatalinkTestEditModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function DatalinkTestEditModule_Factory(t) {
          return new (t || DatalinkTestEditModule)();
        },
        providers: [_hub_forms_service__WEBPACK_IMPORTED_MODULE_8__["HubFormsService"], _datalinkTest_edit_guard__WEBPACK_IMPORTED_MODULE_9__["DatalinkTestEditGuard"]],
        imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _datalinkTest_edit_routing__WEBPACK_IMPORTED_MODULE_2__["Routing"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _hub_shared_module__WEBPACK_IMPORTED_MODULE_10__["HubSharedModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DatalinkTestEditModule, {
          declarations: [_datalinkTest_edit_component__WEBPACK_IMPORTED_MODULE_5__["DatalinkTestEditComponent"], _properties_datalinkTest_properties_component__WEBPACK_IMPORTED_MODULE_6__["DatalinkTestPropertiesComponent"], _step_edit_datalinkTest_edit_step_component__WEBPACK_IMPORTED_MODULE_7__["DatalinkTestEditStepComponent"]],
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _hub_shared_module__WEBPACK_IMPORTED_MODULE_10__["HubSharedModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatalinkTestEditModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _datalinkTest_edit_routing__WEBPACK_IMPORTED_MODULE_2__["Routing"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _hub_shared_module__WEBPACK_IMPORTED_MODULE_10__["HubSharedModule"]],
            declarations: [_datalinkTest_edit_component__WEBPACK_IMPORTED_MODULE_5__["DatalinkTestEditComponent"], _properties_datalinkTest_properties_component__WEBPACK_IMPORTED_MODULE_6__["DatalinkTestPropertiesComponent"], _step_edit_datalinkTest_edit_step_component__WEBPACK_IMPORTED_MODULE_7__["DatalinkTestEditStepComponent"]],
            providers: [_hub_forms_service__WEBPACK_IMPORTED_MODULE_8__["HubFormsService"], _datalinkTest_edit_guard__WEBPACK_IMPORTED_MODULE_9__["DatalinkTestEditGuard"]],
            exports: []
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "89C+":
    /*!************************************************************************!*\
      !*** ./src/app/+hub/test/datalinkTest-edit/datalinkTest-edit-guard.ts ***!
      \************************************************************************/

    /*! exports provided: DatalinkTestEditGuard */

    /***/
    function C(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatalinkTestEditGuard", function () {
        return DatalinkTestEditGuard;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");

      var DatalinkTestEditGuard = /*#__PURE__*/function () {
        function DatalinkTestEditGuard() {
          _classCallCheck(this, DatalinkTestEditGuard);
        }

        _createClass(DatalinkTestEditGuard, [{
          key: "canDeactivate",
          value: function canDeactivate(component) {
            return component && component.canDeactivate ? component.canDeactivate() : true;
          }
        }]);

        return DatalinkTestEditGuard;
      }();

      DatalinkTestEditGuard.ɵfac = function DatalinkTestEditGuard_Factory(t) {
        return new (t || DatalinkTestEditGuard)();
      };

      DatalinkTestEditGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: DatalinkTestEditGuard,
        factory: DatalinkTestEditGuard.ɵfac
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatalinkTestEditGuard, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
        }], null, null);
      })();
      /***/

    },

    /***/
    "C+JB":
    /*!*******************************************************************************************!*\
      !*** ./src/app/+hub/test/datalinkTest-edit/step-edit/datalinkTest-edit-step.component.ts ***!
      \*******************************************************************************************/

    /*! exports provided: DatalinkTestEditStepComponent */

    /***/
    function CJB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatalinkTestEditStepComponent", function () {
        return DatalinkTestEditStepComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _hub_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../hub.service */
      "4Y1E");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../+auth/auth.service */
      "ElCs");
      /* harmony import */


      var _hub_forms_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../hub.forms.service */
      "cvPx");
      /* harmony import */


      var _shared_shared_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../shared/shared.models */
      "soiQ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var ngx_d_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-d-components */
      "8V27");
      /* harmony import */


      var _buttons_datalink_edit_button_datalink_edit_button_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../buttons/datalink-edit-button/datalink-edit-button.component */
      "hJJo");
      /* harmony import */


      var _buttons_connection_edit_button_connection_edit_button_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../buttons/connection-edit-button/connection-edit-button.component */
      "qMYE");

      function DatalinkTestEditStepComponent_div_0_div_25_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

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
        }
      }

      function DatalinkTestEditStepComponent_div_0_div_26_div_8_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          var testTable_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

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
        }
      }

      function DatalinkTestEditStepComponent_div_0_div_26_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "d-button-apply", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatalinkTestEditStepComponent_div_0_div_26_Template_d_button_apply_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r7.applyExit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "d-button-cancel", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatalinkTestEditStepComponent_div_0_div_26_Template_d_button_cancel_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r9.cancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DatalinkTestEditStepComponent_div_0_div_26_div_8_Template, 19, 11, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r4 = ctx.index;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Source Table: ", ctx_r2.inputTableNames[i_r4], "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r2.stepFormService.hasChanged);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.stepFormService.currentForm);
        }
      }

      function DatalinkTestEditStepComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Step Properties");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "d-button-apply", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatalinkTestEditStepComponent_div_0_Template_d_button_apply_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.applyExit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "d-button-cancel", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatalinkTestEditStepComponent_div_0_Template_d_button_cancel_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r12.cancel();
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatalinkTestEditStepComponent_div_0_Template_d_button_apply_click_23_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.applyExit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "d-button-cancel", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatalinkTestEditStepComponent_div_0_Template_d_button_cancel_click_24_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r14.cancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, DatalinkTestEditStepComponent_div_0_div_25_Template, 27, 16, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, DatalinkTestEditStepComponent_div_0_div_26_Template, 9, 3, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.stepFormService.hasChanged);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.stepFormService.currentForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autocapitalize", true)("errors", ctx_r0.stepFormService.formErrors.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showPreview", true)("isHidden", true)("errors", ctx_r0.stepFormService.formErrors["description"]);

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
        }
      }

      var DatalinkTestEditStepComponent = /*#__PURE__*/function () {
        function DatalinkTestEditStepComponent(hubService, authService, formService, route, fb) {
          _classCallCheck(this, DatalinkTestEditStepComponent);

          this.hubService = hubService;
          this.authService = authService;
          this.formService = formService;
          this.route = route;
          this.fb = fb;
          this.showAllErrors = false;
          this.stepColumns = [{
            name: 'name',
            title: 'Name',
            format: ''
          }, {
            name: 'datalink',
            title: 'Datalink',
            format: ''
          }, {
            name: 'dependencies',
            title: 'Dependencies',
            format: ''
          }, {
            name: 'updateDate',
            title: 'Last Modified',
            format: 'Calendar'
          }];
          this._stepTableData = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
          this.stepTableData = this._stepTableData.asObservable(); // create a separate formService instance to manage the copied form

          this.stepFormService = new _hub_forms_service__WEBPACK_IMPORTED_MODULE_6__["HubFormsService"](fb, hubService, authService);
        }

        _createClass(DatalinkTestEditStepComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            try {
              this._subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(this.route.data, this.route.params, this.hubService.getHubCacheObservable(), this.formService.getCurrentFormObservable()).subscribe(function (result) {
                var params = result[1];
                _this.hubCache = result[2];
                var mainForm = result[3];
                _this.datalinkTestStepKey = +params['datalinkTestStepKey'];

                if (mainForm) {
                  _this.datalinkTestForm = mainForm;
                  var step;

                  if (_this.datalinkTestStepKey) {
                    step = mainForm.value.dexihDatalinkTestSteps.find(function (c) {
                      return c.key === _this.datalinkTestStepKey;
                    });

                    if (!step) {
                      _this.authService.navigateUp();

                      return;
                    }
                  } else {
                    step = new _shared_shared_models__WEBPACK_IMPORTED_MODULE_7__["DexihDatalinkTestStep"](); // if new trigger, then set a temporary key of -1 or lower.

                    var minKey = -1;

                    _this.datalinkTestForm.value.dexihDatalinkTestSteps.forEach(function (t) {
                      if (t.key <= minKey) {
                        minKey = t.key - 1;
                      }
                    });

                    step.key = minKey;
                    _this.datalinkTestStepKey = minKey;
                    step.isValid = true;
                  }

                  _this.updateTableNames(step);

                  var stepForm = _this.stepFormService.datalinkTestStep(step);

                  _this._formChanges = stepForm.controls.datalinkKey.valueChanges.subscribe(function (datalinkKey) {
                    _this.updateTableNames(stepForm.value);
                  });

                  _this.stepFormService.startForm(stepForm);
                }
              });
            } catch (e) {
              this.hubService.addHubClientErrorMessage(e, 'DatalinkTest Edit Step');
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this._subscription) {
              this._subscription.unsubscribe();
            }
          }
        }, {
          key: "updateTableNames",
          value: function updateTableNames(step) {
            var _this2 = this;

            this.inputTableNames = step.dexihDatalinkTestTables.map(function (tt) {
              var table = _this2.hubCache.getTable(tt.tableKey);

              if (table) {
                return table.name;
              } else {
                return 'Table not found.';
              }
            });
            this.targetTableName = 'No target defined.';

            if (step.datalinkKey) {
              var datalink = this.hubCache.hub.dexihDatalinks.find(function (c) {
                return c.key === step.datalinkKey;
              });

              if (datalink && datalink.dexihDatalinkTargets.length > 0) {
                this.targetTableName = datalink.dexihDatalinkTargets.map(function (c) {
                  return _this2.hubCache.getTable(c.tableKey).name;
                }).join(', ');
              }
            }
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this.authService.navigateUp();
          }
        }, {
          key: "applyExit",
          value: function applyExit() {
            var _this3 = this;

            var stepForm = this.stepFormService.currentForm;
            var stepsArray = this.datalinkTestForm.controls.dexihDatalinkTestSteps;
            var index = stepsArray.controls.findIndex(function (c) {
              return c.value.key === _this3.datalinkTestStepKey && c.value.isValid;
            });

            if (index < 0) {
              stepsArray.push(stepForm);
            } else {
              stepsArray.removeAt(index);
              stepsArray.push(stepForm);
            }

            this.authService.navigateUp();
          }
        }]);

        return DatalinkTestEditStepComponent;
      }();

      DatalinkTestEditStepComponent.ɵfac = function DatalinkTestEditStepComponent_Factory(t) {
        return new (t || DatalinkTestEditStepComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hub_service__WEBPACK_IMPORTED_MODULE_2__["HubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hub_forms_service__WEBPACK_IMPORTED_MODULE_6__["HubFormsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]));
      };

      DatalinkTestEditStepComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DatalinkTestEditStepComponent,
        selectors: [["datalinkTest-edit-step"]],
        decls: 1,
        vars: 1,
        consts: [[4, "ngIf"], [1, "list-group-item", "list-group-item-info", "rounded-0"], [1, "d-flex", "flex-row"], [1, "ml-auto"], [1, "mr-1", 3, "disabled", "click"], [3, "click"], [1, "list-group-item"], [3, "formGroup"], ["label", "Data Step Name", "formControlName", "name", "placeholder", "Enter the step name.", "iconClass", "fa fa-list", "note", "Enter a name for the data step, blank will use datalink name.", 3, "autocapitalize", "errors"], ["label", "Description", "formControlName", "description", "placeholder", "Enter a description", "iconClass", "fa fa-comment", 3, "showPreview", "isHidden", "errors"], ["label", "Data Link", "formControlName", "datalinkKey", "itemKey", "key", "itemName", "name", "iconClass", "fa fa-database", 3, "items", "errors"], [3, "key"], ["class", "list-group-item", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["label", "Target Connection", "formControlName", "targetConnectionKey", "itemKey", "key", "itemName", "name", "iconClass", "fa fa-database", "note", "Connection for the datalink target table", 3, "items", "errors"], [1, "form-row"], [1, "form-group", "col-md-6"], ["label", "Target Table Name", "formControlName", "targetTableName", "placeholder", "Enter the name.", "iconClass", "fa fa-list", "note", "Name of target table", 3, "errors"], ["label", "Target Table Schema", "formControlName", "targetSchema", "placeholder", "Enter the name.", "iconClass", "fa fa-list", 3, "errors"], ["label", "Expected Connection", "formControlName", "expectedConnectionKey", "itemKey", "key", "itemName", "name", "iconClass", "fa fa-database", "note", "Connection where the expected target data is.", 3, "items", "errors"], ["label", "Expected Table Name", "formControlName", "expectedTableName", "placeholder", "Enter the name.", "iconClass", "fa fa-list", 3, "errors"], ["label", "Expected Table Schema", "formControlName", "expectedSchema", "placeholder", "Enter the name.", "iconClass", "fa fa-list", 3, "errors"], ["label", "Error Connection", "formControlName", "errorConnectionKey", "itemKey", "key", "itemName", "name", "iconClass", "fa fa-database", "note", "Connection where the error data should be sent.", 3, "items", "errors"], ["label", "Error Table Name", "formControlName", "errorTableName", "placeholder", "Enter the name.", "iconClass", "fa fa-list", 3, "errors"], ["label", "Error Table Schema", "formControlName", "errorSchema", "placeholder", "Enter the name.", "iconClass", "fa fa-list", 3, "errors"], ["label", "Source Connection", "formControlName", "sourceConnectionKey", "itemKey", "key", "itemName", "name", "iconClass", "fa fa-database", "note", "Connection where the source test data is.", 3, "items", "errors"], ["label", "Source Table Name", "formControlName", "sourceTableName", "placeholder", "Enter the name.", "iconClass", "fa fa-list", 3, "errors"], ["label", "Source Table Schema", "formControlName", "sourceSchema", "placeholder", "Enter the name.", "iconClass", "fa fa-list", 3, "errors"], ["label", "Test Connection", "formControlName", "testConnectionKey", "itemKey", "key", "itemName", "name", "iconClass", "fa fa-database", "note", "Connection where the test data is.", 3, "items", "errors"], ["label", "Test Table Name", "formControlName", "testTableName", "placeholder", "Enter the name.", "iconClass", "fa fa-list", 3, "errors"], ["label", "Test Table Schema", "formControlName", "testSchema", "placeholder", "Enter the name.", "iconClass", "fa fa-list", 3, "errors"]],
        template: function DatalinkTestEditStepComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DatalinkTestEditStepComponent_div_0_Template, 27, 14, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.stepFormService.currentForm);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["DButtonApplyComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["DButtonCancelComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["DFormInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["DFormTextAreaComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["DFormSelectComponent"], _buttons_datalink_edit_button_datalink_edit_button_component__WEBPACK_IMPORTED_MODULE_10__["DatalinkEditButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _buttons_connection_edit_button_connection_edit_button_component__WEBPACK_IMPORTED_MODULE_11__["ConnectionEditButtonComponent"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatalinkTestEditStepComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'datalinkTest-edit-step',
            templateUrl: './datalinkTest-edit-step.component.html'
          }]
        }], function () {
          return [{
            type: _hub_service__WEBPACK_IMPORTED_MODULE_2__["HubService"]
          }, {
            type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
          }, {
            type: _hub_forms_service__WEBPACK_IMPORTED_MODULE_6__["HubFormsService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ly09":
    /*!*********************************************************************************************!*\
      !*** ./src/app/+hub/test/datalinkTest-edit/properties/datalinkTest-properties.component.ts ***!
      \*********************************************************************************************/

    /*! exports provided: DatalinkTestPropertiesComponent */

    /***/
    function ly09(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatalinkTestPropertiesComponent", function () {
        return DatalinkTestPropertiesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _hub_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../hub.service */
      "4Y1E");
      /* harmony import */


      var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../+auth/auth.service */
      "ElCs");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _hub_forms_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../hub.forms.service */
      "cvPx");
      /* harmony import */


      var ngx_d_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-d-components */
      "8V27");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var ngx_d_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-d-table */
      "TRJD");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _buttons_connection_edit_button_connection_edit_button_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../buttons/connection-edit-button/connection-edit-button.component */
      "qMYE");

      function DatalinkTestPropertiesComponent_form_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "fieldset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "form-input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "form-textarea", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form-select", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "connection-edit-button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.mainForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autocapitalize", true)("errors", ctx_r0.formsService.formErrors["name"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r0.formsService.formErrors["description"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r0.hubCache.hub.dexihConnections)("errors", ctx_r0.formsService.formErrors.auditConnectionKey);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("key", ctx_r0.mainForm.controls.auditConnectionKey.value);
        }
      }

      function DatalinkTestPropertiesComponent_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button-delete", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatalinkTestPropertiesComponent_ng_template_5_Template_d_button_delete_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var items_r7 = ctx.items;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.deleteSteps(items_r7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DatalinkTestPropertiesComponent_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button-edit", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatalinkTestPropertiesComponent_ng_template_7_Template_d_button_edit_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var item_r10 = ctx.item;

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.editStep(item_r10);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function DatalinkTestPropertiesComponent_ng_template_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button-new", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatalinkTestPropertiesComponent_ng_template_9_Template_d_button_new_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r14.newStep();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var DatalinkTestPropertiesComponent = /*#__PURE__*/function () {
        function DatalinkTestPropertiesComponent(hubService, authService, formsService, route, router) {
          _classCallCheck(this, DatalinkTestPropertiesComponent);

          this.hubService = hubService;
          this.authService = authService;
          this.formsService = formsService;
          this.route = route;
          this.router = router;
          this.hasChanged = false;
          this.stepColumns = [{
            name: 'name',
            title: 'Name',
            format: ''
          }, {
            name: 'datalink',
            title: 'Datalink',
            format: ''
          }, {
            name: 'updateDate',
            title: 'Last Modified',
            format: 'Calendar'
          }, {
            name: 'errors',
            title: 'Errors',
            format: ''
          }];
          this._stepTableData = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
          this.stepTableData = this._stepTableData.asObservable();
        }

        _createClass(DatalinkTestPropertiesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            try {
              this._subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])(this.hubService.getHubCacheObservable(), this.formsService.getCurrentFormObservable()).subscribe(function (result) {
                _this4.hubCache = result[0];
                _this4.mainForm = result[1];

                _this4.updateSteps();
              });
            } catch (e) {
              this.hubService.addHubClientErrorMessage(e, 'Data Job Edit Properties');
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this._subscription) {
              this._subscription.unsubscribe();
            }
          }
        }, {
          key: "updateSteps",
          value: function updateSteps() {
            var _this5 = this;

            var stepData = [];

            if (this.mainForm) {
              var steps = this.mainForm.controls['dexihDatalinkTestSteps'];
              steps.controls.forEach(function (stepControl) {
                var step = stepControl.value;

                var datalink = _this5.hubCache.hub.dexihDatalinks.find(function (c) {
                  return c.key === step.datalinkKey;
                });

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
        }, {
          key: "newStep",
          value: function newStep() {
            this.router.navigate(['step'], {
              relativeTo: this.route.parent
            });
          }
        }, {
          key: "editStep",
          value: function editStep(step) {
            this.router.navigate(['step', step.key], {
              relativeTo: this.route.parent
            });
          }
        }, {
          key: "deleteSteps",
          value: function deleteSteps(steps) {
            var stepsArray = this.mainForm.controls.dexihDatalinkTestSteps;
            steps.forEach(function (step) {
              var index = stepsArray.controls.findIndex(function (c) {
                return c.value.datalinkTestStepKey === step.key;
              });
              stepsArray.removeAt(index);
            });
            this.updateSteps();
          }
        }, {
          key: "close",
          value: function close() {
            this.authService.navigateUp();
          }
        }]);

        return DatalinkTestPropertiesComponent;
      }();

      DatalinkTestPropertiesComponent.ɵfac = function DatalinkTestPropertiesComponent_Factory(t) {
        return new (t || DatalinkTestPropertiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hub_service__WEBPACK_IMPORTED_MODULE_2__["HubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hub_forms_service__WEBPACK_IMPORTED_MODULE_5__["HubFormsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      DatalinkTestPropertiesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DatalinkTestPropertiesComponent,
        selectors: [["datalinkTest-properties-form"]],
        decls: 11,
        vars: 7,
        consts: [["title", "Test Properties", 3, "padding"], ["title", "Properties"], [3, "formGroup", 4, "ngIf"], ["title", "Steps", 3, "padding"], ["sortColumn", "position", 3, "enableMultiSelect", "enableManualSort", "columns", "dataObservable", "rowClick"], ["select", "selectedItemsAction"], ["selectedItemsAction", ""], ["select", "selectedItemAction"], ["selectedItemAction", ""], ["select", "actionsTemplate"], ["actions", ""], [3, "formGroup"], ["label", "Test Name", "formControlName", "name", "placeholder", "Enter the name.", "iconClass", "fa fa-list", 3, "autocapitalize", "errors"], ["label", "Description", "formControlName", "description", "placeholder", "Enter a description", "iconClass", "fa fa-comment", 3, "errors"], ["label", "Audit Connection", "formControlName", "auditConnectionKey", "itemKey", "key", "itemName", "name", "iconClass", "fa fa-database", "note", "Connection where test results are stored.", 3, "items", "errors"], [3, "key"], [3, "click"], ["title", "Create a new step", 1, "mr-1", 3, "click"]],
        template: function DatalinkTestPropertiesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-tabs", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "d-tab", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DatalinkTestPropertiesComponent_form_2_Template, 9, 7, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "d-tab", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "d-table", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rowClick", function DatalinkTestPropertiesComponent_Template_d_table_rowClick_4_listener($event) {
              return ctx.editStep($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DatalinkTestPropertiesComponent_ng_template_5_Template, 1, 0, "ng-template", 5, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DatalinkTestPropertiesComponent_ng_template_7_Template, 1, 0, "ng-template", 7, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DatalinkTestPropertiesComponent_ng_template_9_Template, 1, 0, "ng-template", 9, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("padding", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mainForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("padding", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("enableMultiSelect", true)("enableManualSort", true)("columns", ctx.stepColumns)("dataObservable", ctx.stepTableData);
          }
        },
        directives: [ngx_d_components__WEBPACK_IMPORTED_MODULE_6__["ɵf"], ngx_d_components__WEBPACK_IMPORTED_MODULE_6__["ɵg"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], ngx_d_table__WEBPACK_IMPORTED_MODULE_8__["DTableComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroupDirective"], ngx_d_components__WEBPACK_IMPORTED_MODULE_6__["DFormInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControlName"], ngx_d_components__WEBPACK_IMPORTED_MODULE_6__["DFormTextAreaComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_6__["DFormSelectComponent"], _buttons_connection_edit_button_connection_edit_button_component__WEBPACK_IMPORTED_MODULE_10__["ConnectionEditButtonComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_6__["DButtonDeleteComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_6__["DButtonEditComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_6__["DButtonNewComponent"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatalinkTestPropertiesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'datalinkTest-properties-form',
            templateUrl: './datalinkTest-properties.component.html'
          }]
        }], function () {
          return [{
            type: _hub_service__WEBPACK_IMPORTED_MODULE_2__["HubService"]
          }, {
            type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
          }, {
            type: _hub_forms_service__WEBPACK_IMPORTED_MODULE_5__["HubFormsService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "qwqF":
    /*!****************************************************************************!*\
      !*** ./src/app/+hub/test/datalinkTest-edit/datalinkTest-edit.component.ts ***!
      \****************************************************************************/

    /*! exports provided: DatalinkTestEditComponent */

    /***/
    function qwqF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DatalinkTestEditComponent", function () {
        return DatalinkTestEditComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _hub_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../hub.service */
      "4Y1E");
      /* harmony import */


      var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../+auth/auth.service */
      "ElCs");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _hub_forms_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../hub.forms.service */
      "cvPx");
      /* harmony import */


      var _hub_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../hub.models */
      "2v7R");
      /* harmony import */


      var _shared_shared_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../shared/shared.models */
      "soiQ");
      /* harmony import */


      var ngx_d_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-d-components */
      "8V27");
      /* harmony import */


      var _shared_ui_dexihFormControls_dexih_invalid_form_details_dexih_invalid_form_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../shared/ui/dexihFormControls/dexih-invalid-form-details/dexih-invalid-form-details.component */
      "iFLP");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _buttons_cancel_button_cancel_button_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../buttons/cancel-button/cancel-button.component */
      "64E1");
      /* harmony import */


      var _buttons_save_button_save_button_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../buttons/save-button/save-button.component */
      "oLr2");

      function DatalinkTestEditComponent_ng_template_2_save_button_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "save-button", 5);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formsService", ctx_r2.formsService);
        }
      }

      function DatalinkTestEditComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "dexih-invalid-form-details", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DatalinkTestEditComponent_ng_template_2_Template_dexih_invalid_form_details_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r3.formsService.showErrors();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DatalinkTestEditComponent_ng_template_2_save_button_1_Template, 1, 1, "save-button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "cancel-button", 5);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r1.formsService.currentForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.hubCache.canWrite);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formsService", ctx_r1.formsService);
        }
      }

      var DatalinkTestEditComponent = /*#__PURE__*/function () {
        function DatalinkTestEditComponent(hubService, formsService, authService, route, router) {
          _classCallCheck(this, DatalinkTestEditComponent);

          this.hubService = hubService;
          this.formsService = formsService;
          this.authService = authService;
          this.route = route;
          this.router = router;
          this.isLoaded = false;
        }

        _createClass(DatalinkTestEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            try {
              this._subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])(this.route.data, this.route.params, this.hubService.getHubCacheObservable()).subscribe(function (result) {
                var data = result[0];
                _this6.params = result[1];
                _this6.hubCache = result[2];
                _this6.action = data['action'];
                _this6.pageTitle = data['pageTitle'];

                if (!_this6.hubCache || _this6.hubCache.status !== _hub_models__WEBPACK_IMPORTED_MODULE_6__["eCacheStatus"].Loaded) {
                  return;
                }

                if (_this6.isLoaded && _this6.action === 'new') {
                  return;
                }

                if (_this6.isLoaded && _this6.formsService.hasChanged) {
                  _this6.authService.confirmDialog('Synchronization warning', 'The hub was disconnected, meaning this edit could have been changed by another session.  Would you like to discard the current changes, and reload the latest version?').then(function (confirm) {
                    if (confirm) {
                      _this6.load();
                    }
                  })["catch"](function (reason) {
                    return;
                  });
                } else {
                  _this6.load();
                }
              });
            } catch (e) {
              this.hubService.addHubClientErrorMessage(e, 'DatalinkTest Edit');
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
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
        }, {
          key: "load",
          value: function load() {
            var _this7 = this;

            this.isLoaded = true;

            if (this.action === 'edit') {
              // get the hub key from the route data, and update the service.
              this.datalinkTestKey = +this.params['datalinkTestKey'];

              if (!this.datalinkTestKey) {
                this.hubService.addHubErrorMessage('There was no datalink test specified to edit.');
              } else {
                if (!this.hubCache.hub || !this.hubCache.hub.dexihDatalinkTests) {
                  this.hubService.addHubErrorMessage('The hub cache is not loaded.');
                } else {
                  var datalinkTest = this.hubCache.hub.dexihDatalinkTests.find(function (c) {
                    return c.key === _this7.datalinkTestKey;
                  });

                  if (!datalinkTest) {
                    this.hubService.addHubErrorMessage('The specified datalink test could not be found.');
                  } else {
                    this.formsService.datalinkTest(datalinkTest);
                  }
                }
              }
            }

            if (this.action === 'new') {
              var _datalinkTest = new _shared_shared_models__WEBPACK_IMPORTED_MODULE_7__["DexihDatalinkTest"]();

              _datalinkTest.key = 0;
              this.formsService.datalinkTest(_datalinkTest); // update the url with the saved key

              this._formChangeSubscription = this.formsService.getCurrentFormObservable().subscribe(function (form) {
                var key = form.controls.key.value;

                if (key) {
                  if (history.pushState) {
                    var newUrl = window.location.pathname.replace('/datalinkTest-new', "/datalinkTest-edit/".concat(key));

                    _this7.router.navigateByUrl(newUrl);

                    _this7._formChangeSubscription.unsubscribe();
                  }
                }
              });
            }
          }
        }, {
          key: "canDeactivate",
          value: function canDeactivate() {
            var _this8 = this;

            return new Promise(function (resolve) {
              if (_this8.formsService.hasChanged) {
                _this8.authService.confirmDialog('The data job has not been saved', 'The datalink test changes have not been saved.  Do you want to discard the changes and exit?').then(function (confirm) {
                  resolve(confirm);
                })["catch"](function () {
                  resolve(false);
                });
              } else {
                resolve(true);
              }
            });
          } // @HostListener allows is to guard against browser refresh, close, etc.

        }, {
          key: "unloadNotification",
          value: function unloadNotification($event) {
            if (this.formsService.hasChanged) {
              $event.returnValue = 'The datalink test changes have not been saved.  Do you want to discard the changes and exit?';
            }
          }
        }]);

        return DatalinkTestEditComponent;
      }();

      DatalinkTestEditComponent.ɵfac = function DatalinkTestEditComponent_Factory(t) {
        return new (t || DatalinkTestEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hub_service__WEBPACK_IMPORTED_MODULE_2__["HubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hub_forms_service__WEBPACK_IMPORTED_MODULE_5__["HubFormsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      DatalinkTestEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DatalinkTestEditComponent,
        selectors: [["dexih-datalinkTest-edit-form"]],
        hostBindings: function DatalinkTestEditComponent_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("beforeunload", function DatalinkTestEditComponent_beforeunload_HostBindingHandler($event) {
              return ctx.unloadNotification($event);
            }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
          }
        },
        decls: 5,
        vars: 0,
        consts: [[1, "container"], ["title", "Edit Datalink Test", "iconClass", "fa fa-lg fa-fw fa-cog"], ["header", ""], [1, "mr-1", 3, "control", "click"], ["class", "mr-1", 3, "formsService", 4, "ngIf"], [1, "mr-1", 3, "formsService"]],
        template: function DatalinkTestEditComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "d-widget", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DatalinkTestEditComponent_ng_template_2_Template, 3, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [ngx_d_components__WEBPACK_IMPORTED_MODULE_8__["DWidgetComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _shared_ui_dexihFormControls_dexih_invalid_form_details_dexih_invalid_form_details_component__WEBPACK_IMPORTED_MODULE_9__["DexihInvalidFormDetailsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _buttons_cancel_button_cancel_button_component__WEBPACK_IMPORTED_MODULE_11__["CancelButtonComponent"], _buttons_save_button_save_button_component__WEBPACK_IMPORTED_MODULE_12__["SaveButtonComponent"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatalinkTestEditComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'dexih-datalinkTest-edit-form',
            templateUrl: './datalinkTest-edit.component.html'
          }]
        }], function () {
          return [{
            type: _hub_service__WEBPACK_IMPORTED_MODULE_2__["HubService"]
          }, {
            type: _hub_forms_service__WEBPACK_IMPORTED_MODULE_5__["HubFormsService"]
          }, {
            type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, {
          unloadNotification: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:beforeunload', ['$event']]
          }]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=4-es5.js.map