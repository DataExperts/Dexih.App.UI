(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2], {
    /***/
    "DN8j":
    /*!************************************************************************!*\
      !*** ./src/app/+hub/dashboard/dashboard-edit/dashboard-edit.module.ts ***!
      \************************************************************************/

    /*! exports provided: DashboardEditModule */

    /***/
    function DN8j(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardEditModule", function () {
        return DashboardEditModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _dashboard_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./dashboard-edit.component */
      "LyCD");
      /* harmony import */


      var _item_dashboard_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./item/dashboard-item.component */
      "NbKI");
      /* harmony import */


      var _hub_forms_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../hub.forms.service */
      "cvPx");
      /* harmony import */


      var _item_edit_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../item-edit.guard */
      "bK5D");
      /* harmony import */


      var _shared__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../shared */
      "M0ag");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _dashboard_edit_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./dashboard-edit.routing */
      "j8tf");
      /* harmony import */


      var _hub_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../hub.shared.module */
      "RRRx");
      /* harmony import */


      var _properties_dashboard_properties_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./properties//dashboard-properties.component */
      "Kl9q");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      var DashboardEditModule = /*#__PURE__*/function () {
        function DashboardEditModule() {
          _classCallCheck(this, DashboardEditModule);
        }

        _createClass(DashboardEditModule, null, [{
          key: "forRoot",
          value: function forRoot() {
            return {
              ngModule: DashboardEditModule,
              providers: [_hub_forms_service__WEBPACK_IMPORTED_MODULE_3__["HubFormsService"]]
            };
          }
        }]);

        return DashboardEditModule;
      }();

      DashboardEditModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: DashboardEditModule
      });
      DashboardEditModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function DashboardEditModule_Factory(t) {
          return new (t || DashboardEditModule)();
        },
        providers: [_hub_forms_service__WEBPACK_IMPORTED_MODULE_3__["HubFormsService"], _item_edit_guard__WEBPACK_IMPORTED_MODULE_4__["ItemEditGuard"]],
        imports: [[_shared__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _dashboard_edit_routing__WEBPACK_IMPORTED_MODULE_8__["Routing"], _hub_shared_module__WEBPACK_IMPORTED_MODULE_9__["HubSharedModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DashboardEditModule, {
          declarations: [_dashboard_edit_component__WEBPACK_IMPORTED_MODULE_1__["DashboardEditComponent"], _item_dashboard_item_component__WEBPACK_IMPORTED_MODULE_2__["DashboardItemComponent"], _properties_dashboard_properties_component__WEBPACK_IMPORTED_MODULE_10__["DashboardPropertiesComponent"]],
          imports: [_shared__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterModule"], _hub_shared_module__WEBPACK_IMPORTED_MODULE_9__["HubSharedModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardEditModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_shared__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _dashboard_edit_routing__WEBPACK_IMPORTED_MODULE_8__["Routing"], _hub_shared_module__WEBPACK_IMPORTED_MODULE_9__["HubSharedModule"]],
            exports: [],
            declarations: [_dashboard_edit_component__WEBPACK_IMPORTED_MODULE_1__["DashboardEditComponent"], _item_dashboard_item_component__WEBPACK_IMPORTED_MODULE_2__["DashboardItemComponent"], _properties_dashboard_properties_component__WEBPACK_IMPORTED_MODULE_10__["DashboardPropertiesComponent"]],
            providers: [_hub_forms_service__WEBPACK_IMPORTED_MODULE_3__["HubFormsService"], _item_edit_guard__WEBPACK_IMPORTED_MODULE_4__["ItemEditGuard"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "Kl9q":
    /*!********************************************************************************************!*\
      !*** ./src/app/+hub/dashboard/dashboard-edit/properties/dashboard-properties.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: DashboardPropertiesComponent */

    /***/
    function Kl9q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DashboardPropertiesComponent", function () {
        return DashboardPropertiesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../.. */
      "Xjf6");
      /* harmony import */


      var _hub_forms_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../hub.forms.service */
      "cvPx");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var angular_gridster2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! angular-gridster2 */
      "nNJV");
      /* harmony import */


      var _shared_shared_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../shared/shared.models */
      "soiQ");
      /* harmony import */


      var _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../+auth/auth.service */
      "ElCs");
      /* harmony import */


      var _auth_auth_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../+auth/auth.models */
      "3WyZ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var ngx_d_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-d-components */
      "8V27");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _widgets_input_parameters_input_parameters_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../../../widgets/input-parameters/input-parameters.component */
      "YcGA");
      /* harmony import */


      var _item_dashboard_item_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../item/dashboard-item.component */
      "NbKI");

      var _c0 = ["gridster"];

      function DashboardPropertiesComponent_d_widget_section_1_form_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "fieldset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "form-input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "form-textarea", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "form-input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "form-input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "section", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "form-input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "form-input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "d-button-refresh", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardPropertiesComponent_d_widget_section_1_form_1_Template_d_button_refresh_click_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r7.updateGrid();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "form-checkbox", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "form-checkbox", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r6.formsService.currentForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autocapitalize", true)("errors", ctx_r6.formsService.formErrors["name"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showPreview", true)("isHidden", true);
        }
      }

      function DashboardPropertiesComponent_d_widget_section_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-widget-section", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardPropertiesComponent_d_widget_section_1_form_1_Template, 20, 5, "form", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showExpandButton", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.formsService.currentForm);
        }
      }

      function DashboardPropertiesComponent_d_widget_section_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-widget-section", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChange", function DashboardPropertiesComponent_d_widget_section_2_Template_d_widget_section_onChange_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.parameterChange();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input-parameters", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onChange", function DashboardPropertiesComponent_d_widget_section_2_Template_input_parameters_onChange_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.parameterChange();
          })("onRefreshData", function DashboardPropertiesComponent_d_widget_section_2_Template_input_parameters_onRefreshData_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r12.refresh();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showExpandButton", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showEdit", ctx_r1.showEdit)("parameters", ctx_r1.parameters)("formsService", ctx_r1.formsService)("refreshEvent", ctx_r1.refreshDataObservable);
        }
      }

      function DashboardPropertiesComponent_d_widget_section_3_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form-input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DashboardPropertiesComponent_d_widget_section_3_span_2_Template_form_input_ngModelChange_4_listener($event) {
            var column_r14 = ctx.$implicit;
            return column_r14.value = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var column_r14 = ctx.$implicit;
          var i_r15 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", column_r14.logicalName, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("name", "column", i_r15, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", "Enter " + column_r14.logicalName)("ngModel", column_r14.value);
        }
      }

      function DashboardPropertiesComponent_d_widget_section_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-widget-section", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DashboardPropertiesComponent_d_widget_section_3_span_2_Template, 5, 4, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showExpandButton", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.inputColumns);
        }
      }

      var _c1 = function _c1(a0, a1, a2, a3, a4) {
        return {
          x: a0,
          y: a1,
          cols: a2,
          rows: a3,
          control: a4
        };
      };

      function DashboardPropertiesComponent_ng_template_7_gridster_item_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "gridster-item", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "dashboard-item", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onRemove", function DashboardPropertiesComponent_ng_template_7_gridster_item_0_Template_dashboard_item_onRemove_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var i_r19 = ctx.index;

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r20.removeItem(i_r19);
          })("onMaximize", function DashboardPropertiesComponent_ng_template_7_gridster_item_0_Template_dashboard_item_onMaximize_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r22.maximize($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r18 = ctx.$implicit;

          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction5"](4, _c1, item_r18.controls.x.value, item_r18.controls.y.value, item_r18.controls.cols.value, item_r18.controls.rows.value, item_r18));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", item_r18)("showEdit", ctx_r17.showEdit)("refreshData", item_r18.controls.runTime.value.refreshData);
        }
      }

      function DashboardPropertiesComponent_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DashboardPropertiesComponent_ng_template_7_gridster_item_0_Template, 2, 10, "gridster-item", 32);
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.dashboardItemControls.controls);
        }
      }

      function DashboardPropertiesComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "dashboard-item", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onRemove", function DashboardPropertiesComponent_div_8_Template_dashboard_item_onRemove_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r23.removeItem(ctx_r23.i);
          })("onMaximize", function DashboardPropertiesComponent_div_8_Template_dashboard_item_onMaximize_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r25.maximize($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("item", ctx_r5.maximizedItem)("showEdit", ctx_r5.showEdit)("refreshData", ctx_r5.maximizedItem.controls.runTime.value.refreshData)("isMaximized", true);
        }
      }

      var _c2 = function _c2(a0) {
        return {
          "d-none": a0
        };
      };

      var DashboardPropertiesComponent = /*#__PURE__*/function () {
        function DashboardPropertiesComponent(authService, hubService, formsService) {
          _classCallCheck(this, DashboardPropertiesComponent);

          this.authService = authService;
          this.hubService = hubService;
          this.formsService = formsService;
          this.showEdit = false;
          this.lock = true;
          this.refreshDataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          this.refreshDataObservable = this.refreshDataSubject.asObservable();
          this.eViewType = _shared_shared_models__WEBPACK_IMPORTED_MODULE_5__["eViewType"];
          this.eSourceType = _shared_shared_models__WEBPACK_IMPORTED_MODULE_5__["eSourceType"];
          this.cancelToken = new _auth_auth_models__WEBPACK_IMPORTED_MODULE_7__["CancelToken"]();
        }

        _createClass(DashboardPropertiesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.options = {
              gridType: angular_gridster2__WEBPACK_IMPORTED_MODULE_4__["GridType"].ScrollVertical,
              compactType: angular_gridster2__WEBPACK_IMPORTED_MODULE_4__["CompactType"].None,
              margin: 5,
              outerMargin: true,
              outerMarginTop: null,
              outerMarginRight: null,
              outerMarginBottom: null,
              outerMarginLeft: null,
              useTransformPositioning: true,
              mobileBreakpoint: 640,
              minCols: 12,
              maxCols: 100,
              minRows: 6,
              maxRows: 100,
              maxItemCols: 100,
              minItemCols: 1,
              maxItemRows: 100,
              minItemRows: 1,
              maxItemArea: 2500,
              minItemArea: 1,
              defaultItemCols: 2,
              defaultItemRows: 2,
              fixedColWidth: 105,
              fixedRowHeight: 105,
              keepFixedHeightInMobile: false,
              keepFixedWidthInMobile: false,
              scrollSensitivity: 10,
              scrollSpeed: 20,
              enableEmptyCellClick: false,
              enableEmptyCellContextMenu: false,
              enableEmptyCellDrop: false,
              enableEmptyCellDrag: false,
              emptyCellDragMaxCols: 50,
              emptyCellDragMaxRows: 50,
              ignoreMarginInRow: false,
              // setGridSize: true,
              draggable: {
                enabled: false
              },
              resizable: {
                enabled: false
              },
              swap: false,
              pushItems: true,
              disablePushOnDrag: false,
              disablePushOnResize: false,
              pushDirections: {
                north: true,
                east: true,
                south: true,
                west: true
              },
              pushResizeItems: false,
              displayGrid: angular_gridster2__WEBPACK_IMPORTED_MODULE_4__["DisplayGrid"].None,
              disableWindowResize: false,
              disableWarnings: false,
              scrollToNewItems: false,
              itemChangeCallback: function itemChangeCallback(item, itemComponent) {
                _this.itemResize(item, itemComponent);
              },
              itemResizeCallback: function itemResizeCallback(item, itemComponent) {
                _this.itemResize(item, itemComponent);
              },
              itemInitCallback: function itemInitCallback(item, itemComponent) {
                _this.itemResize(item, itemComponent);
              }
            };
            this._hubCacheSubscription = this.hubService.getHubCacheObservable().subscribe(function (hubCache) {
              if (hubCache.isLoaded()) {
                _this.hubCache = hubCache;
              }
            });
            this._formChangeSubscription = this.formsService.getCurrentFormObservable().subscribe(function (currentForm) {
              _this.currentForm = currentForm;

              if (currentForm) {
                _this.dashboardItemControls = currentForm.controls.dexihDashboardItems;
                _this.parameters = currentForm.controls.parameters;
                _this.options.minCols = currentForm.controls.minCols.value;
                _this.options.maxCols = currentForm.controls.maxCols.value;
                _this.options.minRows = currentForm.controls.minRows.value;
                _this.options.maxRows = currentForm.controls.maxRows.value;
                _this.showEdit = currentForm.controls.runTime.value.showEdit;

                if (_this._runTimeSubscription) {
                  _this._runTimeSubscription.unsubscribe();
                }

                _this._runTimeSubscription = currentForm.controls.runTime.valueChanges.subscribe(function (runTime) {
                  _this.showEdit = runTime.showEdit;
                  _this.lock = runTime.lock;

                  _this.updateShowEdit();
                });

                _this.updateShowEdit();
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this._formChangeSubscription) {
              this._formChangeSubscription.unsubscribe();
            }

            if (this._runTimeSubscription) {
              this._runTimeSubscription.unsubscribe();
            }

            if (this._hubCacheSubscription) {
              this._hubCacheSubscription.unsubscribe();
            }

            this.cancelToken.cancel();
          }
        }, {
          key: "getNextPossiblePosition",
          value: function getNextPossiblePosition() {
            var gridItem = {
              x: 0,
              y: 0,
              cols: 1,
              rows: 1,
              control: null
            };
            var newItem = this.gridster.getFirstPossiblePosition(gridItem);
            return newItem;
          }
        }, {
          key: "updateShowEdit",
          value: function updateShowEdit() {
            if (this.showEdit || !this.lock) {
              this.options.displayGrid = angular_gridster2__WEBPACK_IMPORTED_MODULE_4__["DisplayGrid"].Always;
              this.options.draggable.enabled = true;
              this.options.resizable.enabled = true;
            } else {
              this.options.displayGrid = angular_gridster2__WEBPACK_IMPORTED_MODULE_4__["DisplayGrid"].None;
              this.options.draggable.enabled = false;
              this.options.resizable.enabled = false;
            }

            this.options = Object.assign({}, this.options);
          }
        }, {
          key: "itemResize",
          value: function itemResize(item, itemComponent) {
            function setWhenChanged(c, value) {
              if (c.value !== value) {
                c.setValue(value);
              }
            }

            var control = item.control;
            setWhenChanged(control.controls.x, item.x);
            setWhenChanged(control.controls.y, item.y);
            setWhenChanged(control.controls.cols, item.cols);
            setWhenChanged(control.controls.rows, item.rows);
            var resizeEvent = item.control.controls.runTime.value.resizeEvent;

            if (itemComponent.width) {
              resizeEvent.emit([itemComponent.width, itemComponent.height]);
            }
          }
        }, {
          key: "removeItem",
          value: function removeItem(index) {
            var form = this.formsService.currentForm;
            var items = form.controls.dexihDashboardItems;
            items.removeAt(index);
          }
        }, {
          key: "updateGrid",
          value: function updateGrid() {
            var currentForm = this.formsService.currentForm;
            this.options.minCols = currentForm.controls.minCols.value;
            this.options.maxCols = currentForm.controls.maxCols.value;
            this.options.minRows = currentForm.controls.minRows.value;
            this.options.maxRows = currentForm.controls.maxRows.value;
            this.options = Object.assign({}, this.options);
          }
        }, {
          key: "maximize",
          value: function maximize(item) {
            if (this.maximizedItem) {
              this.maximizedItem = null;
            } else {
              this.maximizedItem = item;
            }
          }
        }, {
          key: "parameterChange",
          value: function parameterChange() {
            if (this.formsService.currentForm.controls.autoRefresh.value) {
              this.refresh();
            }
          }
        }, {
          key: "refresh",
          value: function refresh() {
            var _this2 = this;

            this.hubService.previewDashboard(this.formsService.currentForm.value, this.formsService.currentForm.value.parameters, this.cancelToken).then(function (keys) {
              _this2.refreshDataSubject.next();

              var items = _this2.formsService.currentForm.controls.dexihDashboardItems;
              keys.forEach(function (url) {
                var item = items.controls.find(function (form) {
                  return form.controls.key.value === url.dashboardItemKey;
                });

                if (item) {
                  var data = item.controls.runTime.value.data;

                  _this2.hubService.getRemoteResponse(url.dataKey, _this2.cancelToken).then(function (result) {
                    result.columns = _this2.authService.constructDataTableColumns(result.columns);

                    if (result.status) {
                      _this2.hubService.addHubMessage(result.status, false, result.name);
                    }

                    data.data.next(result);
                  })["catch"]();
                }
              });
            });
          }
        }]);

        return DashboardPropertiesComponent;
      }();

      DashboardPropertiesComponent.ɵfac = function DashboardPropertiesComponent_Factory(t) {
        return new (t || DashboardPropertiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](___WEBPACK_IMPORTED_MODULE_1__["HubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hub_forms_service__WEBPACK_IMPORTED_MODULE_2__["HubFormsService"]));
      };

      DashboardPropertiesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: DashboardPropertiesComponent,
        selectors: [["dashboard-properties"]],
        viewQuery: function DashboardPropertiesComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.gridster = _t.first);
          }
        },
        inputs: {
          showEdit: "showEdit",
          lock: "lock"
        },
        decls: 9,
        vars: 9,
        consts: [[3, "ngClass"], ["title", "Properties", 3, "showExpandButton", 4, "ngIf"], ["title", "Parameters", 3, "showExpandButton", "onChange", 4, "ngIf"], ["title", "InputColumns", 3, "showExpandButton", 4, "ngIf"], [2, "height", "800px"], [3, "options"], ["gridster", ""], [3, "ngIf"], ["class", "position-relative", "style", "height:800px; overflow: hidden;", 4, "ngIf"], ["title", "Properties", 3, "showExpandButton"], ["class", "container", 3, "formGroup", 4, "ngIf"], [1, "container", 3, "formGroup"], ["label", "Dashboard Name", "formControlName", "name", "placeholder", "Enter the dashboard name.", "iconClass", "fa fa-list", 3, "autocapitalize", "errors"], ["label", "Description", "formControlName", "description", "placeholder", "Enter the description.", 3, "showPreview", "isHidden"], [1, "form-row"], [1, "form-group", "col-md-3"], ["type", "number", "label", "Minimum Columns", "formControlName", "minCols"], ["type", "number", "label", "Maximum Columns", "formControlName", "maxCols"], ["type", "number", "label", "Minimum Rows", "formControlName", "minRows"], ["type", "number", "label", "Maximum Rows", "formControlName", "maxRows"], ["text", "Update Grid", 3, "click"], ["formControlName", "autoRefresh", "label", "Automatically refresh data when view is opened"], ["label", "Table is shared in the catalog to users with read access.", "formControlName", "isShared"], ["title", "Parameters", 3, "showExpandButton", "onChange"], [1, "container"], [3, "showEdit", "parameters", "formsService", "refreshEvent", "onChange", "onRefreshData"], ["title", "InputColumns", 3, "showExpandButton"], ["class", "input-group", 4, "ngFor", "ngForOf"], [1, "input-group"], [1, "input-group-prepend"], [1, "input-group-text"], [1, "form-control", "p-0", 3, "name", "placeholder", "ngModel", "ngModelChange"], [3, "item", 4, "ngFor", "ngForOf"], [3, "item"], [3, "item", "showEdit", "refreshData", "onRemove", "onMaximize"], [1, "position-relative", 2, "height", "800px", "overflow", "hidden"], [3, "item", "showEdit", "refreshData", "isMaximized", "onRemove", "onMaximize"]],
        template: function DashboardPropertiesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardPropertiesComponent_d_widget_section_1_Template, 2, 2, "d-widget-section", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DashboardPropertiesComponent_d_widget_section_2_Template, 3, 5, "d-widget-section", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DashboardPropertiesComponent_d_widget_section_3_Template, 3, 2, "d-widget-section", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "gridster", 5, 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DashboardPropertiesComponent_ng_template_7_Template, 1, 1, "ng-template", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DashboardPropertiesComponent_div_8_Template, 2, 4, "div", 8);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c2, ctx.maximizedItem));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showEdit);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showEdit || (ctx.parameters == null ? null : ctx.parameters.length) > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.inputColumns && ctx.inputColumns.length > 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.options);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dashboardItemControls);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.maximizedItem);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], angular_gridster2__WEBPACK_IMPORTED_MODULE_4__["GridsterComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["ɵa"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormGroupDirective"], ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["DFormInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControlName"], ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["DFormTextAreaComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["DButtonRefreshComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["DFormCheckboxComponent"], _widgets_input_parameters_input_parameters_component__WEBPACK_IMPORTED_MODULE_11__["InputParametersComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgModel"], angular_gridster2__WEBPACK_IMPORTED_MODULE_4__["GridsterItemComponent"], _item_dashboard_item_component__WEBPACK_IMPORTED_MODULE_12__["DashboardItemComponent"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardPropertiesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'dashboard-properties',
            templateUrl: 'dashboard-properties.component.html'
          }]
        }], function () {
          return [{
            type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
          }, {
            type: ___WEBPACK_IMPORTED_MODULE_1__["HubService"]
          }, {
            type: _hub_forms_service__WEBPACK_IMPORTED_MODULE_2__["HubFormsService"]
          }];
        }, {
          showEdit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          lock: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          gridster: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['gridster', {
              "static": true
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "j8tf":
    /*!*************************************************************************!*\
      !*** ./src/app/+hub/dashboard/dashboard-edit/dashboard-edit.routing.ts ***!
      \*************************************************************************/

    /*! exports provided: dashboardEditRoutes, routes, Routing */

    /***/
    function j8tf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "dashboardEditRoutes", function () {
        return dashboardEditRoutes;
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


      var _dashboard_edit_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./dashboard-edit.component */
      "LyCD");
      /* harmony import */


      var _view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../view */
      "vJyJ");
      /* harmony import */


      var _item_edit_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../item-edit.guard */
      "bK5D");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _properties_dashboard_properties_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./properties/dashboard-properties.component */
      "Kl9q");

      var dashboardEditRoutes = [{
        path: '',
        redirectTo: 'properties'
      }, {
        path: 'properties',
        component: _properties_dashboard_properties_component__WEBPACK_IMPORTED_MODULE_4__["DashboardPropertiesComponent"],
        data: {
          navigateSkip: true
        }
      }, {
        path: 'view-edit/:viewKey',
        component: _view__WEBPACK_IMPORTED_MODULE_1__["ViewEditComponent"],
        data: {
          action: 'edit',
          pageTitle: 'Edit View'
        }
      }, {
        path: 'view-new',
        component: _view__WEBPACK_IMPORTED_MODULE_1__["ViewEditComponent"],
        data: {
          action: 'new',
          pageTitle: 'New View'
        }
      }];
      var routes = [{
        path: '',
        component: _dashboard_edit_component__WEBPACK_IMPORTED_MODULE_0__["DashboardEditComponent"],
        canDeactivate: [_item_edit_guard__WEBPACK_IMPORTED_MODULE_2__["ItemEditGuard"]],
        children: dashboardEditRoutes
      }];

      var Routing = _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes);
      /***/

    }
  }]);
})();
//# sourceMappingURL=2-es5.js.map