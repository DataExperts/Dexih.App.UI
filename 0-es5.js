(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0], {
    /***/
    "8OPm":
    /*!********************************************************************************************!*\
      !*** ./src/app/+hub/table/table-edit/table-edit-rest/table-edit-input-column.component.ts ***!
      \********************************************************************************************/

    /*! exports provided: TableEditInputColumnComponent */

    /***/
    function OPm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TableEditInputColumnComponent", function () {
        return TableEditInputColumnComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var ngx_d_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-d-components */
      "8V27");

      var TableEditInputColumnComponent = /*#__PURE__*/function () {
        function TableEditInputColumnComponent() {
          _classCallCheck(this, TableEditInputColumnComponent);

          this.columnForm = null;
        }

        _createClass(TableEditInputColumnComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {}
        }, {
          key: "toggleInput",
          value: function toggleInput($event) {}
        }]);

        return TableEditInputColumnComponent;
      }();

      TableEditInputColumnComponent.ɵfac = function TableEditInputColumnComponent_Factory(t) {
        return new (t || TableEditInputColumnComponent)();
      };

      TableEditInputColumnComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TableEditInputColumnComponent,
        selectors: [["table-edit-input-column"]],
        inputs: {
          columnForm: "columnForm"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 3,
        vars: 2,
        consts: [[1, "", 3, "formGroup"], ["formControlName", "defaultValue", "placeholder", "Enter default value for the input column", "iconClass", "fa fa-dollar", 3, "label"]],
        template: function TableEditInputColumnComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "form-input", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.columnForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", ctx.columnForm.value.name);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], ngx_d_components__WEBPACK_IMPORTED_MODULE_2__["DFormInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableEditInputColumnComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'table-edit-input-column',
            templateUrl: './table-edit-input-column.component.html'
          }]
        }], function () {
          return [];
        }, {
          columnForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "9nsk":
    /*!**********************************************************************!*\
      !*** ./src/app/+hub/table/column-edit/column-edit-base.component.ts ***!
      \**********************************************************************/

    /*! exports provided: ColumnEditBaseComponent */

    /***/
    function nsk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ColumnEditBaseComponent", function () {
        return ColumnEditBaseComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _hub_forms_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../hub.forms.service */
      "cvPx");
      /* harmony import */


      var _hub_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../hub.models */
      "2v7R");
      /* harmony import */


      var _hub_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../hub.service */
      "4Y1E");
      /* harmony import */


      var _hub_remote_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../hub.remote.models */
      "1qMd");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var ngx_d_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-d-components */
      "8V27");
      /* harmony import */


      var _buttons_columnValidation_edit_button_columnValidation_edit_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../buttons/columnValidation-edit-button/columnValidation-edit-button.component */
      "gLgY");

      function ColumnEditBaseComponent_form_0_section_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "form-input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r1.columnFormService.formErrors.logicalName);
        }
      }

      function ColumnEditBaseComponent_form_0_section_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "form-textarea", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showPreview", true)("isHidden", true)("errors", ctx_r2.columnFormService.formErrors.description);
        }
      }

      function ColumnEditBaseComponent_form_0_section_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "form-input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r3.columnFormService.formErrors.maxLength);
        }
      }

      function ColumnEditBaseComponent_form_0_section_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "form-input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r4.columnFormService.formErrors.precision);
        }
      }

      function ColumnEditBaseComponent_form_0_section_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "form-input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r5.columnFormService.formErrors.scale);
        }
      }

      function ColumnEditBaseComponent_form_0_div_19_section_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form-select", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "columnValidation-edit-button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowNullSelect", true)("items", ctx_r7.hubCache == null ? null : ctx_r7.hubCache.hub.dexihColumnValidations);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("key", ctx_r7.columnFormService.currentForm.controls.columnValidationKey.value);
        }
      }

      function ColumnEditBaseComponent_form_0_div_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "form-checkbox", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "form-checkbox", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "form-checkbox", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "form-checkbox", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "form-select", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "section", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "form-select", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "form-select", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "form-input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ColumnEditBaseComponent_form_0_div_19_section_19_Template, 3, 3, "section", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r6.columnFormService.formErrors.format)("items", ctx_r6.formatItems)("enableTextEntry", true)("enableTextEntryMatch", false)("allowNullSelect", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r6.columnFormService.formErrors.deltaType)("items", ctx_r6.deltaTypes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r6.columnFormService.formErrors.securityFlag)("items", ctx_r6.securityFlags);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r6.columnFormService.formErrors.defaultValue);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.columnFormService.currentForm.controls.columnValidationKey);
        }
      }

      function ColumnEditBaseComponent_form_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "fieldset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "form-input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "form-input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "form-checkbox", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ColumnEditBaseComponent_form_0_section_9_Template, 2, 1, "section", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ColumnEditBaseComponent_form_0_section_10_Template, 2, 3, "section", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "section", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "form-select", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "form-input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ColumnEditBaseComponent_form_0_section_16_Template, 2, 1, "section", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ColumnEditBaseComponent_form_0_section_17_Template, 2, 1, "section", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ColumnEditBaseComponent_form_0_section_18_Template, 2, 1, "section", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ColumnEditBaseComponent_form_0_div_19_Template, 20, 11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.columnFormService.currentForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r0.columnFormService.formErrors.columnGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r0.columnFormService.formErrors.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.columnFormService.currentForm.value.useLogical);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.detailedView);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r0.columnFormService.formErrors.dataType)("items", ctx_r0.typeCodes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r0.columnFormService.formErrors.rank);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.columnFormService.currentForm.value.isString);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.columnFormService.currentForm.value.isNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.columnFormService.currentForm.value.isNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.detailedView);
        }
      }

      var ColumnEditBaseComponent = /*#__PURE__*/function () {
        function ColumnEditBaseComponent(hubService) {
          _classCallCheck(this, ColumnEditBaseComponent);

          this.hubService = hubService;
          this.detailedView = true;
          this.typeCodes = _hub_remote_models__WEBPACK_IMPORTED_MODULE_4__["TypeCodes"];
          this.deltaTypes = _hub_models__WEBPACK_IMPORTED_MODULE_2__["deltaTypes"];
          this.securityFlags = _hub_models__WEBPACK_IMPORTED_MODULE_2__["securityFlags"];
          this.formatItems = [];
        }

        _createClass(ColumnEditBaseComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this._hubCacheSubscription = this.hubService.getHubCacheObservable().subscribe(function (cache) {
              _this.hubCache = cache;

              if (_this.columnFormService.currentForm) {
                if (_this._dataTypeSubscription) {
                  _this._dataTypeSubscription.unsubscribe();
                }

                _this._dataTypeSubscription = _this.columnFormService.currentForm.controls.dataType.valueChanges.subscribe(function (dataType) {
                  _this.updateColumnFormats(dataType);
                });

                _this.updateColumnFormats(_this.columnFormService.currentForm.controls.dataType.value);
              }
            });
          }
        }, {
          key: "updateColumnFormats",
          value: function updateColumnFormats(dataType) {
            var type = new _hub_remote_models__WEBPACK_IMPORTED_MODULE_4__["TypeFunctions"](dataType, null, null, null);
            this.formatItems = type.getColumnFormats();
            var format = this.columnFormService.currentForm.controls.format.value;

            if (format && this.formatItems.findIndex(function (c) {
              return c.value === format;
            }) < 0) {
              this.formatItems = this.formatItems.concat({
                value: format,
                name: format
              });
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this._dataTypeSubscription) {
              this._dataTypeSubscription.unsubscribe();
            }

            if (this._hubCacheSubscription) {
              this._hubCacheSubscription.unsubscribe();
            }
          }
        }]);

        return ColumnEditBaseComponent;
      }();

      ColumnEditBaseComponent.ɵfac = function ColumnEditBaseComponent_Factory(t) {
        return new (t || ColumnEditBaseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hub_service__WEBPACK_IMPORTED_MODULE_3__["HubService"]));
      };

      ColumnEditBaseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ColumnEditBaseComponent,
        selectors: [["column-edit-base"]],
        inputs: {
          columnFormService: "columnFormService",
          detailedView: "detailedView"
        },
        decls: 1,
        vars: 1,
        consts: [[3, "formGroup", 4, "ngIf"], [3, "formGroup"], [1, "form-row"], [1, "form-group", "col-md-6"], ["label", "Group", "formControlName", "columnGroup", "placeholder", "Enter a column group name", "iconClass", "fa fa-list", "note", "The group column grouping, used to distinguish duplicate column names when applying to structured data (such as json).", 3, "errors"], ["label", "Column Name", "formControlName", "name", "placeholder", "Enter the column name.", "iconClass", "fa fa-list", "note", "The physical column name in the underlying table", 3, "errors"], ["label", "Specify a different logical name", "formControlName", "useLogical"], [4, "ngIf"], [1, "form-group", "col-md-4"], ["label", "Data Type", "formControlName", "dataType", "itemKey", "key", "itemName", "name", 3, "errors", "items"], [1, "form-group", "col-md-2"], ["type", "number", "label", "Array Dimensions", "formControlName", "rank", 3, "errors"], ["class", "form-group col-md-6", 4, "ngIf"], ["class", "form-group col-md-3", 4, "ngIf"], ["label", "Logical Name", "formControlName", "logicalName", "placeholder", "Enter the logical name.", "iconClass", "fa fa-list", "note", "The logical name is a short term to represent the column", 3, "errors"], ["label", "Description", "formControlName", "description", "placeholder", "Enter the description.", 3, "showPreview", "isHidden", "errors"], ["label", "Max Length", "formControlName", "maxLength", "placeholder", "Max Length", "type", "number", "note", "Maximum string length (blank for unlimited)", 3, "errors"], [1, "form-group", "col-md-3"], ["label", "Precision", "formControlName", "precision", "placeholder", "Precision", "type", "number", 3, "errors"], ["label", "Scale", "formControlName", "scale", "placeholder", "Scale", "type", "number", 3, "errors"], ["label", "Allow Nulls", "formControlName", "allowDbNull"], ["label", "Is Unicode", "formControlName", "isUnicode"], ["label", "Is an Input Column", "formControlName", "isInput"], ["label", "Is always incrementing column that can be used for change detection", "formControlName", "isIncrementalUpdate"], ["label", "Format", "formControlName", "format", "itemKey", "value", "itemName", "name", "selectNullMessage", "No Format", "note", "How to format the column when displayed.", 3, "errors", "items", "enableTextEntry", "enableTextEntryMatch", "allowNullSelect"], ["label", "Delta Type", "formControlName", "deltaType", "itemKey", "key", "itemName", "name", "note", "How to treat the column when used to update target table.", 3, "errors", "items"], ["label", "Security Flag", "formControlName", "securityFlag", "itemKey", "key", "itemName", "name", "note", "How to secure this column when reading data.", 3, "errors", "items"], ["label", "Default Value", "formControlName", "defaultValue", "placeholder", "Default Value", "note", "Default value if unmapped or null.", 3, "errors"], ["label", "Validation Rule", "formControlName", "columnValidationKey", "itemKey", "key", "itemName", "name", "note", "Validation rule to apply.", 3, "allowNullSelect", "items"], [3, "key"]],
        template: function ColumnEditBaseComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ColumnEditBaseComponent_form_0_Template, 20, 12, "form", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.columnFormService.currentForm);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupDirective"], ngx_d_components__WEBPACK_IMPORTED_MODULE_7__["DFormInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlName"], ngx_d_components__WEBPACK_IMPORTED_MODULE_7__["DFormCheckboxComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_7__["DFormSelectComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_7__["DFormTextAreaComponent"], _buttons_columnValidation_edit_button_columnValidation_edit_button_component__WEBPACK_IMPORTED_MODULE_8__["ColumnValidationEditButtonComponent"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColumnEditBaseComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'column-edit-base',
            templateUrl: './column-edit-base.component.html'
          }]
        }], function () {
          return [{
            type: _hub_service__WEBPACK_IMPORTED_MODULE_3__["HubService"]
          }];
        }, {
          columnFormService: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          detailedView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "Qrk8":
    /*!************************************************************************************************!*\
      !*** ./src/app/+hub/table/table-edit/table-edit-properties/table-edit-properties.component.ts ***!
      \************************************************************************************************/

    /*! exports provided: TableEditPropertiesComponent */

    /***/
    function Qrk8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TableEditPropertiesComponent", function () {
        return TableEditPropertiesComponent;
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


      var _hub_forms_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../hub.forms.service */
      "cvPx");
      /* harmony import */


      var _hub_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../hub.models */
      "2v7R");
      /* harmony import */


      var _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../shared/shared.models */
      "soiQ");
      /* harmony import */


      var _hub_remote_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../hub.remote.models */
      "1qMd");
      /* harmony import */


      var _auth_auth_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../+auth/auth.models */
      "3WyZ");
      /* harmony import */


      var ngx_d_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-d-components */
      "8V27");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _buttons_connection_edit_button_connection_edit_button_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../buttons/connection-edit-button/connection-edit-button.component */
      "qMYE");
      /* harmony import */


      var _shared_ui_dexihMessage_dexih_message_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../../../../shared/ui/dexihMessage/dexih-message.component */
      "24Dg");
      /* harmony import */


      var _table_edit_rest_table_edit_rest_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ../table-edit-rest/table-edit-rest.component */
      "REzP");
      /* harmony import */


      var _table_edit_file_table_edit_file_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ../table-edit-file/table-edit-file.component */
      "u2Ae");
      /* harmony import */


      var _table_edit_columns_table_edit_columns_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ../table-edit-columns/table-edit-columns.component */
      "vDxl");

      var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };

      function TableEditPropertiesComponent_form_2_section_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "form-input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", ctx_r5.entityType + " Schema")("errors", ctx_r5.formsService.formErrors.schema);
        }
      }

      function TableEditPropertiesComponent_form_2_section_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "form-input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r6.formsService.formErrors.logicalName);
        }
      }

      function TableEditPropertiesComponent_form_2_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "form-input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r7.formsService.formErrors.rejectedTableName);
        }
      }

      function TableEditPropertiesComponent_form_2_section_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "form-select", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r8.formsService.formErrors.tableType)("items", ctx_r8.eTableTypeItems);
        }
      }

      function TableEditPropertiesComponent_form_2_section_16_a_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableEditPropertiesComponent_form_2_section_16_a_2_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r14.test();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ( ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Test) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TableEditPropertiesComponent_form_2_section_16_a_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableEditPropertiesComponent_form_2_section_16_a_3_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r16.reloadColumns();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ( ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Reload Columns) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TableEditPropertiesComponent_form_2_section_16_span_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " (Busy... please wait) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TableEditPropertiesComponent_form_2_section_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form-textarea", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableEditPropertiesComponent_form_2_section_16_a_2_Template, 4, 0, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TableEditPropertiesComponent_form_2_section_16_a_3_Template, 4, 0, "a", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TableEditPropertiesComponent_form_2_section_16_span_4_Template, 3, 0, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "dexih-message", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hideToggle", true)("showPreview", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.runningSql == false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.runningSql == false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.runningSql == true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("message", ctx_r9.sqlMessage);
        }
      }

      function TableEditPropertiesComponent_form_2_section_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "form-input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TableEditPropertiesComponent_form_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "fieldset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form-select", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "connection-edit-button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "form-input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TableEditPropertiesComponent_form_2_section_8_Template, 2, 2, "section", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "form-checkbox", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TableEditPropertiesComponent_form_2_section_11_Template, 2, 1, "section", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "form-textarea", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TableEditPropertiesComponent_form_2_div_14_Template, 3, 1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, TableEditPropertiesComponent_form_2_section_15_Template, 2, 2, "section", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, TableEditPropertiesComponent_form_2_section_16_Template, 6, 6, "section", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, TableEditPropertiesComponent_form_2_section_17_Template, 2, 0, "section", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "form-checkbox", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.mainForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r0.connections)("errors", ctx_r0.formsService.formErrors.connectionKey);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("key", ctx_r0.mainForm.controls.connectionKey.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("label", ctx_r0.entityType + " Name")("errors", ctx_r0.formsService.formErrors.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.connectionReference == null ? null : ctx_r0.connectionReference.connectionCategory) == ctx_r0.eConnectionCategory.SqlDatabase);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.mainForm.value.useLogical);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showPreview", true)("isHidden", true)("errors", ctx_r0.formsService.formErrors.description);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.connection == null ? null : ctx_r0.connection.purpose) == ctx_r0.eConnectionPurpose.Managed);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.connectionReference == null ? null : ctx_r0.connectionReference.connectionCategory) == ctx_r0.eConnectionCategory.SqlDatabase);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.mainForm.controls.tableType.value === ctx_r0.eTableType.Query);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.connectionReference == null ? null : ctx_r0.connectionReference.connectionCategory) == ctx_r0.eConnectionCategory.Hub);
        }
      }

      function TableEditPropertiesComponent_d_tab_3_div_1_form_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "form-select", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "form-select", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableEditPropertiesComponent_d_tab_3_div_1_form_5_Template_button_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

            var j_r23 = ctx.index;

            var index_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r24.addColumn(index_r19, j_r23);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableEditPropertiesComponent_d_tab_3_div_1_form_5_Template_button_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

            var j_r23 = ctx.index;

            var index_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r27.removeColumn(index_r19, j_r23);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var column_r22 = ctx.$implicit;

          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", column_r22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("border", false)("items", ctx_r21.mainForm.controls.dexihTableColumns.value);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("border", false)("items", ctx_r21.eSortDirectionItems);
        }
      }

      function TableEditPropertiesComponent_d_tab_3_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "form-input", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TableEditPropertiesComponent_d_tab_3_div_1_form_5_Template, 10, 5, "form", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "d-button", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableEditPropertiesComponent_d_tab_3_div_1_Template_d_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

            var index_r19 = ctx.$implicit;

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r29.addColumn(index_r19, 0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Add Column");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "d-button-delete", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableEditPropertiesComponent_d_tab_3_div_1_Template_d_button_delete_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

            var index_r19 = ctx.$implicit;

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r31.removeIndex(index_r19);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var index_r19 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", index_r19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", index_r19.controls.columns.controls);
        }
      }

      function TableEditPropertiesComponent_d_tab_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-tab", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableEditPropertiesComponent_d_tab_3_div_1_Template, 10, 2, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "d-button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableEditPropertiesComponent_d_tab_3_Template_d_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r32.addIndex(ctx_r32.mainForm.controls.dexihTableIndexes.controls.length);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Add Index");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.mainForm.controls.dexihTableIndexes.controls);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autoCompact", false);
        }
      }

      function TableEditPropertiesComponent_d_tab_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-tab", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "dexih-table-edit-rest", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formService", ctx_r2.formsService)("connection", ctx_r2.connection);
        }
      }

      function TableEditPropertiesComponent_d_tab_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-tab", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "dexih-table-edit-file", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formService", ctx_r3.formsService)("connection", ctx_r3.connection)("isFile", (ctx_r3.connectionReference == null ? null : ctx_r3.connectionReference.connectionCategory) == ctx_r3.eConnectionCategory.File);
        }
      }

      function TableEditPropertiesComponent_d_tab_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-tab", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "table-edit-columns", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("padding", false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tableForm", ctx_r4.mainForm);
        }
      }

      var TableEditPropertiesComponent = /*#__PURE__*/function () {
        function TableEditPropertiesComponent(hubService, route, router) {
          _classCallCheck(this, TableEditPropertiesComponent);

          this.hubService = hubService;
          this.route = route;
          this.router = router;
          this.isExpanded = true;
          this.showColumns = true;
          this.cancelToken = new _auth_auth_models__WEBPACK_IMPORTED_MODULE_8__["CancelToken"]();
          this.entityType = 'Table';
          this.canEdit = false;
          this.typeCodes = _hub_remote_models__WEBPACK_IMPORTED_MODULE_7__["TypeCodes"];
          this.deltaTypes = _hub_models__WEBPACK_IMPORTED_MODULE_5__["deltaTypes"];
          this.securityFlags = _hub_models__WEBPACK_IMPORTED_MODULE_5__["securityFlags"];
          this.eTableType = _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eTableType"];
          this.eTableTypeItems = _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eTableTypeItems"];
          this.eSortDirectionItems = _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eSortDirectionItems"];
          this.eConnectionCategory = _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eConnectionCategory"];
          this.eConnectionPurpose = _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eConnectionPurpose"];
          this.runningSql = false;
          this.option = 0;
          this._columnData = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
          this.columnData = this._columnData.asObservable();
        }

        _createClass(TableEditPropertiesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            try {
              this._subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([this.route.data, this.route.queryParams, this.hubService.getHubCacheObservable(), this.formsService.getCurrentFormObservable(), this.hubService.getRemoteLibrariesObservable()]).subscribe(function (result) {
                return __awaiter(_this2, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                  var _this3 = this;

                  var data, queryParams;
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          data = result[0];
                          queryParams = result[1];
                          this.hubCache = result[2];
                          this.mainForm = result[3];
                          this.action = data['action'];
                          this.pageTitle = data['pageTitle'];

                          if (queryParams['option']) {
                            this.option = +queryParams['option'];
                          } else {
                            this.option = 0;
                          }

                          if (!(this.hubCache && this.hubCache.isLoaded() && this.mainForm)) {
                            _context2.next = 15;
                            break;
                          }

                          this.connections = this.hubCache.hub.dexihConnections;
                          this.connection = this.connections.find(function (c) {
                            return c.key === _this3.mainForm.controls.connectionKey.value;
                          });
                          _context2.next = 12;
                          return this.hubService.GetConnectionReference(this.connection);

                        case 12:
                          this.connectionReference = _context2.sent;

                          if (this._connectionSubscription) {
                            this._connectionSubscription.unsubscribe();
                          }

                          this._connectionSubscription = this.mainForm.controls.connectionKey.valueChanges.subscribe(function (connectionKey) {
                            return __awaiter(_this3, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                              return regeneratorRuntime.wrap(function _callee$(_context) {
                                while (1) {
                                  switch (_context.prev = _context.next) {
                                    case 0:
                                      this.connection = this.connections.find(function (c) {
                                        return c.key === connectionKey;
                                      });
                                      _context.next = 3;
                                      return this.hubService.GetConnectionReference(this.connection);

                                    case 3:
                                      this.connectionReference = _context.sent;

                                    case 4:
                                    case "end":
                                      return _context.stop();
                                  }
                                }
                              }, _callee, this);
                            }));
                          });

                        case 15:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2, this);
                }));
              });
            } catch (e) {
              this.hubService.addHubClientErrorMessage(e, 'Table edit properties');
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this._subscription) {
              this._subscription.unsubscribe();
            }

            if (this._connectionSubscription) {
              this._connectionSubscription.unsubscribe();
            }

            this.cancelToken.cancel();
          }
        }, {
          key: "reloadColumns",
          value: function reloadColumns() {
            var _this4 = this;

            this.runningSql = true;
            this.hubService.importTables([this.mainForm.value], false, this.cancelToken).then(function (tables) {
              if (!tables || tables.length === 0) {
                return;
              }

              var table = tables[0];
              var tableColumnsForm = _this4.formsService.currentForm.controls.dexihTableColumns;

              while (tableColumnsForm.controls.length > 0) {
                tableColumnsForm.removeAt(0);
              }

              table.dexihTableColumns.filter(function (c) {
                return c.isValid;
              }).forEach(function (column) {
                tableColumnsForm.push(_this4.formsService.tableColumn(table.dexihTableColumns, column));
              });
              _this4.runningSql = false;
            })["catch"](function () {
              return _this4.runningSql = false;
            });
          }
        }, {
          key: "test",
          value: function test() {
            var _this5 = this;

            this.runningSql = true;
            this.hubService.doImport([this.mainForm.value], false, this.cancelToken).then(function (tables) {
              var columns = tables[0].dexihTableColumns.map(function (c) {
                return c.name;
              });

              _this5.hubService.addHubSuccessMessage('The query was successful, and returned the following columns.  ' + columns.join(', '));

              _this5.runningSql = false;
            })["catch"](function (reason) {
              _this5.runningSql = false;
              _this5.sqlMessage = reason;

              _this5.hubService.addHubMessage(reason);
            });
          }
        }, {
          key: "addIndex",
          value: function addIndex(i) {
            var index = new _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["DexihTableIndex"]();
            index.columns.push(new _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["DexihTableIndexColumn"]());
            var table = this.mainForm.value;
            var control = this.formsService.tableIndex(table, index);
            var indexes = this.mainForm.controls.dexihTableIndexes;
            indexes.insert(i, control);
          }
        }, {
          key: "removeIndex",
          value: function removeIndex(i) {
            var indexes = this.mainForm.controls.dexihTableIndexes;
            indexes.removeAt(i);
          }
        }, {
          key: "addColumn",
          value: function addColumn(index, j) {
            var control = this.formsService.tableIndexColumn(new _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["DexihTableIndexColumn"]());
            var columns = index.controls.columns;
            columns.insert(j, control);
          }
        }, {
          key: "removeColumn",
          value: function removeColumn(index, j) {
            var columns = index.controls.columns;
            columns.removeAt(j);
          }
        }, {
          key: "changeOption",
          value: function changeOption(index) {
            if (history.pushState) {
              this.router.navigateByUrl(window.location.pathname + "?option=".concat(index));
            }
          }
        }]);

        return TableEditPropertiesComponent;
      }();

      TableEditPropertiesComponent.ɵfac = function TableEditPropertiesComponent_Factory(t) {
        return new (t || TableEditPropertiesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hub_service__WEBPACK_IMPORTED_MODULE_2__["HubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      TableEditPropertiesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TableEditPropertiesComponent,
        selectors: [["dexih-table-edit-properties"]],
        inputs: {
          formsService: "formsService",
          isExpanded: "isExpanded",
          showColumns: "showColumns"
        },
        decls: 7,
        vars: 8,
        consts: [["title", "Edit Table Properties", 3, "showExpandButton", "padding", "selectedIndex", "selectedIndexChange"], ["title", "Properties"], ["class", "container", 3, "formGroup", 4, "ngIf"], ["title", "Indexes", 4, "ngIf"], ["title", "Web Service Properties", 4, "ngIf"], ["title", "File Properties", 4, "ngIf"], ["title", "Columns", 3, "padding", 4, "ngIf"], [1, "container", 3, "formGroup"], [1, "form-row"], [1, "form-group", "col-md-4"], ["label", "Connection", "formControlName", "connectionKey", "itemKey", "key", "itemName", "name", "iconClass", "fa fa-database", "note", "The connection for this table.", 3, "items", "errors"], [3, "key"], ["formControlName", "name", "placeholder", "Enter the physical name.", "iconClass", "fa fa-list", "note", "The physical name of the underlying entity", 3, "label", "errors"], ["class", "form-group col-md-4", 4, "ngIf"], ["label", "Specify a different logical name", "formControlName", "useLogical"], [4, "ngIf"], ["label", "Description", "formControlName", "description", "placeholder", "Enter the description.", 3, "showPreview", "isHidden", "errors"], ["class", "form-row", 4, "ngIf"], ["label", "Table is shared in the catalog to users with read access.", "formControlName", "isShared"], ["formControlName", "schema", "placeholder", "Enter the (database) schema name", "iconClass", "fa fa-list", "note", "The physical name of the database schema (if applicable).", 3, "label", "errors"], ["label", "Logical Name", "formControlName", "logicalName", "placeholder", "Enter the logical name.", "iconClass", "fa fa-list", "note", "The logical name is a short term to represent the table", 3, "errors"], [1, "form-group", "col-md-6"], ["label", "Reject Table Name", "formControlName", "rejectedTableName", "placeholder", "Enter the rejected table name.", "iconClass", "fa fa-list", "note", "The name of the table to send any records that could not be written to the primary table.", 3, "errors"], ["label", "Table Type", "formControlName", "tableType", "itemKey", "key", "itemName", "name", 3, "errors", "items"], ["label", "Specify the sql query", "rows", "15", "formControlName", "queryString", "placeholder", "Sql Query", 3, "hideToggle", "showPreview"], ["href", "javascript:void(0)", 3, "click", 4, "ngIf"], [3, "message"], ["href", "javascript:void(0)", 3, "click"], [1, "fa", "fa-check-circle-o"], [1, "fa", "fa-refresh"], [1, "fa", "fa-spin", "fa-refresh"], ["label", "Source Connection Name", "formControlName", "sourceConnectionName", "placeholder", "Name of the source connection.", "iconClass", "fa fa-list", "note", "The name of the connection for this table in the source hub."], ["title", "Indexes"], ["class", "container form-row w-100 mb-3", 4, "ngFor", "ngForOf"], ["iconClass", "fa fa-plus-square-o", 3, "autoCompact", "click"], [1, "container", "form-row", "w-100", "mb-3"], [1, "form-row", "w-100", 3, "formGroup"], [1, "input-group"], ["labelLeft", "Name", "formControlName", "name", "placeholder", "Index Name", "iconClass", "fa fa-list"], [1, "p-3"], ["class", "input-group", 3, "formGroup", 4, "ngFor", "ngForOf"], [1, "input-group-append", "flex-shrink-1", "ml-1"], ["iconClass", "fa fa-plus-square-o", 3, "click"], [3, "click"], [1, "input-group", 3, "formGroup"], [1, "form-control", "p-0"], ["labelLeft", "Column", "formControlName", "columnKey", "itemKey", "key", "itemName", "name", 3, "border", "items"], ["labelLeft", "Direction", "formControlName", "direction", "itemKey", "key", "itemName", "name", 3, "border", "items"], [1, "input-group-append", "flex-shrink-1"], ["type", "button", "value", "Add", 1, "btn", "btn-light", 3, "click"], [1, "fa", "fa-plus-square-o"], ["type", "button", "value", "Remove", 1, "btn", "btn-light", 3, "click"], [1, "fa", "fa-minus-square-o"], ["title", "Web Service Properties"], [3, "formService", "connection"], ["title", "File Properties"], [3, "formService", "connection", "isFile"], ["title", "Columns", 3, "padding"], [3, "tableForm"]],
        template: function TableEditPropertiesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-tabs", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedIndexChange", function TableEditPropertiesComponent_Template_d_tabs_selectedIndexChange_0_listener($event) {
              return ctx.changeOption($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "d-tab", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableEditPropertiesComponent_form_2_Template, 20, 15, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TableEditPropertiesComponent_d_tab_3_Template, 4, 2, "d-tab", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TableEditPropertiesComponent_d_tab_4_Template, 2, 2, "d-tab", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TableEditPropertiesComponent_d_tab_5_Template, 2, 3, "d-tab", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TableEditPropertiesComponent_d_tab_6_Template, 2, 2, "d-tab", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showExpandButton", false)("padding", false)("selectedIndex", ctx.option);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mainForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mainForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.connectionReference == null ? null : ctx.connectionReference.connectionCategory) == ctx.eConnectionCategory.WebService);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.connection && ((ctx.connectionReference == null ? null : ctx.connectionReference.connectionCategory) == ctx.eConnectionCategory.File || (ctx.connection == null ? null : ctx.connection.purpose) !== ctx.eConnectionPurpose.Source));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showColumns);
          }
        },
        directives: [ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["ɵf"], ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["ɵg"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormGroupDirective"], ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["DFormSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormControlName"], _buttons_connection_edit_button_connection_edit_button_component__WEBPACK_IMPORTED_MODULE_12__["ConnectionEditButtonComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["DFormInputComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["DFormCheckboxComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["DFormTextAreaComponent"], _shared_ui_dexihMessage_dexih_message_component__WEBPACK_IMPORTED_MODULE_13__["DexihMessageComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["DButtonComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["DButtonDeleteComponent"], _table_edit_rest_table_edit_rest_component__WEBPACK_IMPORTED_MODULE_14__["TableEditRestComponent"], _table_edit_file_table_edit_file_component__WEBPACK_IMPORTED_MODULE_15__["TableEditFileComponent"], _table_edit_columns_table_edit_columns_component__WEBPACK_IMPORTED_MODULE_16__["TableEditColumnsComponent"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableEditPropertiesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'dexih-table-edit-properties',
            templateUrl: './table-edit-properties.component.html'
          }]
        }], function () {
          return [{
            type: _hub_service__WEBPACK_IMPORTED_MODULE_2__["HubService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, {
          formsService: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          isExpanded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          showColumns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "REzP":
    /*!************************************************************************************!*\
      !*** ./src/app/+hub/table/table-edit/table-edit-rest/table-edit-rest.component.ts ***!
      \************************************************************************************/

    /*! exports provided: TableEditRestComponent */

    /***/
    function REzP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TableEditRestComponent", function () {
        return TableEditRestComponent;
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


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _hub_forms_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../hub.forms.service */
      "cvPx");
      /* harmony import */


      var _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../shared/shared.models */
      "soiQ");
      /* harmony import */


      var _hub_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../hub.models */
      "2v7R");
      /* harmony import */


      var _auth_auth_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../+auth/auth.models */
      "3WyZ");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var ngx_d_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-d-components */
      "8V27");
      /* harmony import */


      var _table_edit_input_column_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./table-edit-input-column.component */
      "8OPm");
      /* harmony import */


      var _shared_utils_isValid_filter_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../../../../shared/utils/isValid-filter.pipe */
      "Vjuc");

      function TableEditRestComponent_form_0_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "table-edit-input-column", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var columnForm_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columnForm", columnForm_r5);
        }
      }

      function TableEditRestComponent_form_0_section_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "form-select", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r2.formService.formErrors.fileFormatKey)("items", ctx_r2.hubCache.hub.dexihFileFormats)("enableFilter", false);
        }
      }

      function TableEditRestComponent_form_0_section_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "form-input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r3.formService.formErrors.rowPath);
        }
      }

      function TableEditRestComponent_form_0_div_14_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Max Import Levels");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TableEditRestComponent_form_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "form-input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TableEditRestComponent_form_0_div_5_Template, 2, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "isValidFilter");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "form-select", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TableEditRestComponent_form_0_section_9_Template, 2, 3, "section", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, TableEditRestComponent_form_0_section_10_Template, 2, 1, "section", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "d-button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableEditRestComponent_form_0_Template_d_button_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return !ctx_r6.formService.formSaving && ctx_r6.importTable();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Import ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TableEditRestComponent_form_0_div_14_Template, 5, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.formService.currentForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r0.formService.formErrors.restfulUri)("note", "Specify the uri following the base path " + ctx_r0.connection.server + ".  To include input columns use {} in the uri definition (eg. GetWeather?City={CityName})");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 9, ctx_r0.inputColumns));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r0.formatTypes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.formService.currentForm.value.formatType == ctx_r0.eTypeCode.Text);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.formService.currentForm.value.formatType == ctx_r0.eTypeCode.Json || ctx_r0.formService.currentForm.value.formatType == ctx_r0.eTypeCode.Xml);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("busy", ctx_r0.formService.formSaving);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.formService.currentForm.value.formatType == ctx_r0.eTypeCode.Json || ctx_r0.formService.currentForm.value.formatType == ctx_r0.eTypeCode.Xml);
        }
      }

      var TableEditRestComponent = /*#__PURE__*/function () {
        function TableEditRestComponent(hubService, route, router, location) {
          _classCallCheck(this, TableEditRestComponent);

          this.hubService = hubService;
          this.route = route;
          this.router = router;
          this.location = location;
          this.cancelToken = new _auth_auth_models__WEBPACK_IMPORTED_MODULE_8__["CancelToken"]();
          this.inputTable = null;
          this.formatTypes = _hub_models__WEBPACK_IMPORTED_MODULE_7__["formatTypes"];
          this.eTypeCode = _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eTypeCode"];
        }

        _createClass(TableEditRestComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            // load the initial connection from the cache
            this._hubCacheSubscription = this.hubService.getHubCacheObservable().subscribe(function (cache) {
              if (cache && cache.status === _hub_models__WEBPACK_IMPORTED_MODULE_7__["eCacheStatus"].Loaded) {
                _this6.hubCache = cache;
                _this6.tables = _this6.hubCache.getConnectionTables();
              }
            });
            this._currentFormSubscription = this.formService.getCurrentFormObservable().subscribe(function (currentForm) {
              // load the inputColumns
              var columns = _this6.formService.currentForm.controls.dexihTableColumns;
              _this6.inputColumns = columns.controls.filter(function (c) {
                return c.value.isInput && c.value.isValid;
              });

              if (_this6._restfulUrlSubscription) {
                _this6._restfulUrlSubscription.unsubscribe();
              }

              _this6._restfulUrlSubscription = currentForm.controls.restfulUri.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(500)).subscribe(function (newValue) {
                _this6.updateInputColumns();
              });
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this._hubCacheSubscription) {
              this._hubCacheSubscription.unsubscribe();
            }

            if (this._restfulUrlSubscription) {
              this._restfulUrlSubscription.unsubscribe();
            }

            if (this._currentFormSubscription) {
              this._currentFormSubscription.unsubscribe();
            }

            this.cancelToken.cancel();
          }
        }, {
          key: "hasChanged",
          value: function hasChanged($event) {// this.tableChanged = true;
          }
        }, {
          key: "importTable",
          value: function importTable() {
            var _this7 = this;

            var importTable = this.formService.currentForm.value;
            var inputColumns = this.formService.currentForm.value.dexihTableColumns.filter(function (c) {
              return c.isInput && c.isValid;
            }); // merge any input columns with columns already in the table

            if (inputColumns) {
              inputColumns.forEach(function (column) {
                var importCol = importTable.dexihTableColumns.find(function (c) {
                  return c.name === column.name;
                });

                if (importCol) {
                  importCol.inputValue = column.inputValue;
                } else {
                  importCol = column;
                  importTable.dexihTableColumns.push(importCol);
                }
              });
            }

            this.hubService.importTables([importTable], false, this.cancelToken).then(function (result) {
              var columns = _this7.formService.currentForm.controls.dexihTableColumns;

              while (columns.controls.length > 0) {
                columns.removeAt(0);
              }

              result[0].dexihTableColumns.forEach(function (column) {
                columns.push(_this7.formService.tableColumn(result[0].dexihTableColumns, column));
              });
            })["catch"]();
          }
        }, {
          key: "updateInputColumns",
          value: function updateInputColumns() {
            // use the regex to extract items in uri between { }.  These will be input columns
            var regExp = /\{([^}]+)\}/g;
            var columns = this.formService.currentForm.controls.dexihTableColumns;
            var inputColumns = columns.controls.filter(function (c) {
              return c.value.isInput && c.value.isValid;
            });
            inputColumns.forEach(function (item) {
              var columnForm = item;
              columnForm.controls.isValid.setValue(false);
            });
            var match;
            var position = -1000;

            while (match = regExp.exec(this.formService.currentForm.value.restfulUri)) {
              var columnForm = columns.controls.find(function (c) {
                return c.value.name === match[1] && c.value.isInput;
              });

              if (!columnForm) {
                var col = new _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["DexihTableColumn"](); // add the basic properties

                col.name = match[1];
                col.isInput = true;
                col.logicalName = match[1];
                col.dataType = _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eTypeCode"].String;
                col.deltaType = _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eDeltaType"].NaturalKey;
                col.maxLength = 1024;
                col.position = position++;
                col.description = 'Url Parameter ' + match[1];
                col.allowDbNull = true;
                col.isUnique = false;
                col.isValid = true;
                columnForm = this.formService.tableColumn(columns.value, col);
                columns.push(columnForm);
              } else {
                columnForm.controls.isValid.setValue(true);
              }
            }

            position = 1;
            columns.controls.filter(function (column) {
              return column.value.isValid;
            }).sort(function (a, b) {
              return a.value.position - b.value.position;
            }).forEach(function (column) {
              column.controls.position.setValue(position++);
            });
            this.inputColumns = columns.controls.filter(function (c) {
              return c.value.isInput && c.value.isValid;
            });
          }
        }]);

        return TableEditRestComponent;
      }();

      TableEditRestComponent.ɵfac = function TableEditRestComponent_Factory(t) {
        return new (t || TableEditRestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hub_service__WEBPACK_IMPORTED_MODULE_2__["HubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]));
      };

      TableEditRestComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TableEditRestComponent,
        selectors: [["dexih-table-edit-rest"]],
        inputs: {
          formService: "formService",
          connection: "connection"
        },
        decls: 1,
        vars: 1,
        consts: [["class", "container", 3, "formGroup", 4, "ngIf"], [1, "container", 3, "formGroup"], ["label", "Web Service Uri String", "formControlName", "restfulUri", "placeholder", "Enter the uri.", "iconClass", "fa fa-feed", 3, "errors", "note"], [4, "ngFor", "ngForOf"], ["label", "Format Type", "formControlName", "formatType", "itemKey", "key", "itemName", "name", "iconClass", "fa fa-database", "note", "The format of data.", 3, "items"], [4, "ngIf"], [1, "btn-toolbar"], [3, "busy", "click"], ["class", "input-group pl-1", 4, "ngIf"], [3, "columnForm"], ["label", "File Format", "formControlName", "fileFormatKey", "placeholder", "File Format", "itemKey", "key", "itemName", "name", "note", "Specify the file format to use, if not specified, defaults will be used.", 3, "errors", "items", "enableFilter"], ["label", "Optional: Web Service Row Path", "formControlName", "rowPath", "placeholder", "Enter the row path.", "iconClass", "fa fa-feed", "note", "Optional Json Path indicating where a row should be read from.", 3, "errors"], [1, "input-group", "pl-1"], [1, "input-group-prepend"], [1, "input-group-text"], ["placeholder", "Maximum levels...", "title", "Maximum import levels", "formControlName", "maxImportLevels", 1, "form-control", 2, "width", "100%", "max-width", "100px"]],
        template: function TableEditRestComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TableEditRestComponent_form_0_Template, 15, 11, "form", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formService == null ? null : ctx.formService.currentForm);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroupDirective"], ngx_d_components__WEBPACK_IMPORTED_MODULE_10__["DFormInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], ngx_d_components__WEBPACK_IMPORTED_MODULE_10__["DFormSelectComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_10__["DButtonComponent"], _table_edit_input_column_component__WEBPACK_IMPORTED_MODULE_11__["TableEditInputColumnComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"]],
        pipes: [_shared_utils_isValid_filter_pipe__WEBPACK_IMPORTED_MODULE_12__["IsValidFilterPipe"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableEditRestComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'dexih-table-edit-rest',
            templateUrl: './table-edit-rest.component.html'
          }]
        }], function () {
          return [{
            type: _hub_service__WEBPACK_IMPORTED_MODULE_2__["HubService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
          }];
        }, {
          formService: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          connection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "TvSu":
    /*!****************************************************************************************************!*\
      !*** ./src/app/+hub/table/table-edit/table-edit-preview-data/table-edit-preview-data.component.ts ***!
      \****************************************************************************************************/

    /*! exports provided: TableEditPreviewDataComponent */

    /***/
    function TvSu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TableEditPreviewDataComponent", function () {
        return TableEditPreviewDataComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _hub_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../hub.service */
      "4Y1E");
      /* harmony import */


      var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../+auth/auth.service */
      "ElCs");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _hub_forms_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../hub.forms.service */
      "cvPx");
      /* harmony import */


      var _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../shared/shared.models */
      "soiQ");
      /* harmony import */


      var ngx_d_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-d-components */
      "8V27");
      /* harmony import */


      var _widgets_preview_data_preview_data_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../widgets/preview-data/preview-data.component */
      "NHAS");

      function TableEditPreviewDataComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button-close", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableEditPreviewDataComponent_ng_template_1_Template_d_button_close_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var TableEditPreviewDataComponent = /*#__PURE__*/function () {
        function TableEditPreviewDataComponent(formsService, hubService, authService, route) {
          _classCallCheck(this, TableEditPreviewDataComponent);

          this.formsService = formsService;
          this.hubService = hubService;
          this.authService = authService;
          this.route = route;
          this.eDataObjectType = _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eDataObjectType"];
        }

        _createClass(TableEditPreviewDataComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this8 = this;

            try {
              this._subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(this.route.data, this.hubService.getHubCacheObservable(), this.formsService.getCurrentFormObservable()).subscribe(function (result) {
                var data = result[0];
                var tableForm = result[2];
                _this8.action = data['action'];
                _this8.pageTitle = data['pageTitle'];

                if (tableForm) {
                  _this8.table = tableForm.value;
                }
              });
            } catch (e) {
              this.hubService.addHubClientErrorMessage(e, 'Table Edit Preview');
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
          key: "close",
          value: function close() {
            this.authService.navigateUp();
          }
        }]);

        return TableEditPreviewDataComponent;
      }();

      TableEditPreviewDataComponent.ɵfac = function TableEditPreviewDataComponent_Factory(t) {
        return new (t || TableEditPreviewDataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hub_forms_service__WEBPACK_IMPORTED_MODULE_5__["HubFormsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hub_service__WEBPACK_IMPORTED_MODULE_1__["HubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]));
      };

      TableEditPreviewDataComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TableEditPreviewDataComponent,
        selectors: [["table-edit-preview-data"]],
        decls: 4,
        vars: 4,
        consts: [["title", "Preview Table", 3, "showExpandButton", "padding"], ["sectionHeader", ""], [3, "table", "viewSource"], [3, "click"]],
        template: function TableEditPreviewDataComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-widget-section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableEditPreviewDataComponent_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "preview-data", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showExpandButton", false)("padding", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("table", ctx.table)("viewSource", ctx.eDataObjectType.Table);
          }
        },
        directives: [ngx_d_components__WEBPACK_IMPORTED_MODULE_7__["ɵa"], _widgets_preview_data_preview_data_component__WEBPACK_IMPORTED_MODULE_8__["PreviewDataComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_7__["DButtonCloseComponent"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableEditPreviewDataComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'table-edit-preview-data',
            templateUrl: './table-edit-preview-data.component.html'
          }]
        }], function () {
          return [{
            type: _hub_forms_service__WEBPACK_IMPORTED_MODULE_5__["HubFormsService"]
          }, {
            type: _hub_service__WEBPACK_IMPORTED_MODULE_1__["HubService"]
          }, {
            type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "WRQR":
    /*!*************************************************!*\
      !*** ./src/app/+hub/table/column-edit/index.ts ***!
      \*************************************************/

    /*! exports provided: ColumnEditComponent, ColumnEditBaseComponent */

    /***/
    function WRQR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _column_edit_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./column-edit.component */
      "dn85");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ColumnEditComponent", function () {
        return _column_edit_component__WEBPACK_IMPORTED_MODULE_0__["ColumnEditComponent"];
      });
      /* harmony import */


      var _column_edit_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./column-edit-base.component */
      "9nsk");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "ColumnEditBaseComponent", function () {
        return _column_edit_base_component__WEBPACK_IMPORTED_MODULE_1__["ColumnEditBaseComponent"];
      });
      /***/

    },

    /***/
    "dn85":
    /*!*****************************************************************!*\
      !*** ./src/app/+hub/table/column-edit/column-edit.component.ts ***!
      \*****************************************************************/

    /*! exports provided: ColumnEditComponent */

    /***/
    function dn85(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ColumnEditComponent", function () {
        return ColumnEditComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _hub_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../hub.models */
      "2v7R");
      /* harmony import */


      var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../+auth/auth.service */
      "ElCs");
      /* harmony import */


      var _hub_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../hub.service */
      "4Y1E");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _hub_forms_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../hub.forms.service */
      "cvPx");
      /* harmony import */


      var _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../shared/shared.models */
      "soiQ");
      /* harmony import */


      var ngx_d_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-d-components */
      "8V27");
      /* harmony import */


      var _column_edit_base_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./column-edit-base.component */
      "9nsk");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _shared_ui_dexihFormControls_dexih_invalid_form_details_dexih_invalid_form_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../shared/ui/dexihFormControls/dexih-invalid-form-details/dexih-invalid-form-details.component */
      "iFLP");
      /* harmony import */


      var _table_edit_table_edit_columns_table_edit_columns_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../table-edit/table-edit-columns/table-edit-columns.component */
      "vDxl");

      function ColumnEditComponent_ng_template_1_li_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColumnEditComponent_ng_template_1_li_2_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var col_r4 = ctx.$implicit;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r5.navigateToColumn(col_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var col_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", col_r4.columnGroup ? col_r4.columnGroup + "." : "", "", col_r4.name, "");
        }
      }

      function ColumnEditComponent_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "dexih-invalid-form-details", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColumnEditComponent_ng_template_1_Template_dexih_invalid_form_details_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.columnFormService.showErrors();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "d-button-dropdown", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ColumnEditComponent_ng_template_1_li_2_Template, 3, 2, "li", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "d-button-apply", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColumnEditComponent_ng_template_1_Template_d_button_apply_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.applyExit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "d-button-cancel", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColumnEditComponent_ng_template_1_Template_d_button_cancel_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.cancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("control", ctx_r1.columnFormService.currentForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.columns);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !(ctx_r1.columnFormService == null ? null : ctx_r1.columnFormService.hasChanged));
        }
      }

      function ColumnEditComponent_table_edit_columns_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "table-edit-columns", 10);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("tableForm", ctx_r2.tableForm)("parentColumnForm", ctx_r2.columnFormService.currentForm);
        }
      }

      var ColumnEditComponent = /*#__PURE__*/function () {
        function ColumnEditComponent(authService, hubService, fb) {
          _classCallCheck(this, ColumnEditComponent);

          this.authService = authService;
          this.hubService = hubService;
          this.detailedView = true;
          this.isUpdated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.changeColumn = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.eTypeCode = _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eTypeCode"]; // create a separate formService instance to manage the copied form

          this.columnFormService = new _hub_forms_service__WEBPACK_IMPORTED_MODULE_5__["HubFormsService"](fb, hubService, authService);
        }

        _createClass(ColumnEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this9 = this;

            this._hubCacheSubscription = this.hubService.getHubCacheObservable().subscribe(function (hubCache) {
              if (hubCache.status === _hub_models__WEBPACK_IMPORTED_MODULE_1__["eCacheStatus"].Loaded) {
                _this9.hubCache = hubCache;

                if (!_this9.hubCache.isLoaded() || !_this9.tableForm) {
                  return;
                }

                _this9.initializeForm();

                _this9.updateColumns();
              }
            });
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            if (this.tableForm && this.hubCache) {
              this.initializeForm();
              this.updateColumns();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this._hubCacheSubscription) {
              this._hubCacheSubscription.unsubscribe();
            }
          }
        }, {
          key: "initializeForm",
          value: function initializeForm() {
            var _this10 = this;

            var columnForm;
            var columns = this.tableForm.value.dexihTableColumns;

            if (this.columnKey) {
              if (this.tableForm) {
                this.originalColumn = columns.find(function (c) {
                  return c.key === _this10.columnKey;
                });

                if (!this.originalColumn) {
                  this.authService.navigateUp();
                  return;
                }

                columnForm = this.columnFormService.tableColumn(columns, this.originalColumn);
              }
            } else {
              var column = this.hubCache.newColumn(this.tableForm.value, this.deltaType);

              if (column) {
                columnForm = this.columnFormService.tableColumn(columns, column);
              } else {
                this.authService.informationDialog('Column not added.', "The column with delta type ".concat(this.deltaType, " could not be inserted into the current table."));
              }
            }

            this.columnFormService.startForm(columnForm);
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this.isUpdated.emit(false);
          }
        }, {
          key: "apply",
          value: function apply() {
            var columnForm = this.columnFormService.currentForm;
            var columnsArray = this.tableForm.controls.dexihTableColumns;

            if (!this.originalColumn) {
              columnsArray.push(columnForm);
            } else {
              var originalColumn = columnsArray.controls.find(function (c) {
                return c.value.key === columnForm.value.key;
              });
              originalColumn.setValue(columnForm.value);
            }

            this.tableForm.markAsDirty();
          }
        }, {
          key: "updateColumns",
          value: function updateColumns() {
            if (this.tableForm && this.originalColumn) {
              this.columns = this.originalColumn.childColumns.sort(function (a, b) {
                return a.position - b.position;
              });
            }
          }
        }, {
          key: "navigateToColumn",
          value: function navigateToColumn(col) {
            this.apply();
            this.changeColumn.emit(col.key);
          }
        }, {
          key: "applyExit",
          value: function applyExit() {
            if (this.columnFormService.hasChanged) {
              this.apply();
              this.isUpdated.emit(true);
            }
          }
        }]);

        return ColumnEditComponent;
      }();

      ColumnEditComponent.ɵfac = function ColumnEditComponent_Factory(t) {
        return new (t || ColumnEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hub_service__WEBPACK_IMPORTED_MODULE_3__["HubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]));
      };

      ColumnEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ColumnEditComponent,
        selectors: [["column-edit"]],
        inputs: {
          tableForm: "tableForm",
          columnKey: "columnKey",
          deltaType: "deltaType",
          detailedView: "detailedView"
        },
        outputs: {
          isUpdated: "isUpdated",
          changeColumn: "changeColumn"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 5,
        vars: 4,
        consts: [["title", "Edit Column", 3, "showExpandButton"], ["sectionHeader", ""], [3, "columnFormService", "detailedView"], [3, "tableForm", "parentColumnForm", 4, "ngIf"], [1, "mr-1", 3, "control", "click"], ["buttonClass", "btn-primary", "text", "Column", 1, "mr-1"], [4, "ngFor", "ngForOf"], [1, "mr-1", 3, "disabled", "click"], [3, "click"], [1, "dropdown-item", 3, "click"], [3, "tableForm", "parentColumnForm"]],
        template: function ColumnEditComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-widget-section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ColumnEditComponent_ng_template_1_Template, 5, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "column-edit-base", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ColumnEditComponent_table_edit_columns_4_Template, 1, 2, "table-edit-columns", 3);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showExpandButton", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columnFormService", ctx.columnFormService)("detailedView", ctx.detailedView);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx.columnFormService == null ? null : ctx.columnFormService.currentForm == null ? null : ctx.columnFormService.currentForm.controls.dataType.value) === ctx.eTypeCode.Node);
          }
        },
        directives: [ngx_d_components__WEBPACK_IMPORTED_MODULE_7__["ɵa"], _column_edit_base_component__WEBPACK_IMPORTED_MODULE_8__["ColumnEditBaseComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _shared_ui_dexihFormControls_dexih_invalid_form_details_dexih_invalid_form_details_component__WEBPACK_IMPORTED_MODULE_10__["DexihInvalidFormDetailsComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_7__["DButtonDropDownComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], ngx_d_components__WEBPACK_IMPORTED_MODULE_7__["DButtonApplyComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_7__["DButtonCancelComponent"], _table_edit_table_edit_columns_table_edit_columns_component__WEBPACK_IMPORTED_MODULE_11__["TableEditColumnsComponent"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColumnEditComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'column-edit',
            templateUrl: './column-edit.component.html'
          }]
        }], function () {
          return [{
            type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
          }, {
            type: _hub_service__WEBPACK_IMPORTED_MODULE_3__["HubService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
          }];
        }, {
          tableForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          columnKey: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          deltaType: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          detailedView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          isUpdated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          changeColumn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "taGP":
    /*!************************************************************************!*\
      !*** ./src/app/+hub/table/table-edit/table-edit-preview-data/index.ts ***!
      \************************************************************************/

    /*! exports provided: TableEditPreviewDataComponent */

    /***/
    function taGP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _table_edit_preview_data_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./table-edit-preview-data.component */
      "TvSu");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "TableEditPreviewDataComponent", function () {
        return _table_edit_preview_data_component__WEBPACK_IMPORTED_MODULE_0__["TableEditPreviewDataComponent"];
      });
      /***/

    },

    /***/
    "u2Ae":
    /*!************************************************************************************!*\
      !*** ./src/app/+hub/table/table-edit/table-edit-file/table-edit-file.component.ts ***!
      \************************************************************************************/

    /*! exports provided: TableEditFileComponent */

    /***/
    function u2Ae(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TableEditFileComponent", function () {
        return TableEditFileComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../+auth/auth.service */
      "ElCs");
      /* harmony import */


      var _hub_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../hub.service */
      "4Y1E");
      /* harmony import */


      var _hub_forms_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../hub.forms.service */
      "cvPx");
      /* harmony import */


      var _shared_shared_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../shared/shared.models */
      "soiQ");
      /* harmony import */


      var _hub_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../hub.models */
      "2v7R");
      /* harmony import */


      var _auth_auth_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../+auth/auth.models */
      "3WyZ");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var ngx_d_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-d-components */
      "8V27");
      /* harmony import */


      var _shared_utils_dropzone__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../../shared/utils/dropzone */
      "obiC");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      function TableEditFileComponent_form_0_ng_template_1_div_6_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "form-input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "form-input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "form-input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "form-input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r5.formService.formErrors.fileIncomingPath);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r5.formService.formErrors.fileOutgoingPath);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r5.formService.formErrors.fileProcessedPath);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r5.formService.formErrors.fileRejectedPath);
        }
      }

      function TableEditFileComponent_form_0_ng_template_1_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "form-checkbox", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TableEditFileComponent_form_0_ng_template_1_div_6_div_3_Template, 9, 4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("note", "If custom paths are not specified files will be read/written to the directory: " + ctx_r4.connection.server + "/" + ctx_r4.formService.currentForm.value.name + "/");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.formService.currentForm.value.useCustomFilePaths);
        }
      }

      function TableEditFileComponent_form_0_ng_template_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "form-input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "form-input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "form-checkbox", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TableEditFileComponent_form_0_ng_template_1_div_6_Template, 4, 2, "div", 4);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r1.formService.formErrors.fileRootPath)("note", "Specify the subdirectory.  This will be the connection directory (" + ctx_r1.connection.server + ") plus the path specified.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r1.formService.formErrors.fileMatchPattern);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.formService.currentForm.value.autoManageFiles);
        }
      }

      function TableEditFileComponent_form_0_section_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form-select", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "(");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " New Format )");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r2.formService.formErrors.fileFormatKey)("items", ctx_r2.hubCache.hub.dexihFileFormats)("enableFilter", false)("allowNullSelect", true);
        }
      }

      function TableEditFileComponent_form_0_section_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "form-input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r3.formService.formErrors.rowPath);
        }
      }

      function TableEditFileComponent_form_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableEditFileComponent_form_0_ng_template_1_Template, 7, 4, "ng-template", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "form-select", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TableEditFileComponent_form_0_section_4_Template, 6, 4, "section", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TableEditFileComponent_form_0_section_5_Template, 2, 1, "section", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Add a sample file which will be used to determine column names. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableEditFileComponent_form_0_Template_a_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6["import"]();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "(");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Import directly from source )");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dropFiles", function TableEditFileComponent_form_0_Template_div_dropFiles_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.filesDrop($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Drop Sample File Here ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function TableEditFileComponent_form_0_Template_input_change_16_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.uploadFile($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Choose file");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "form-input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.formService.currentForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isFile);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r0.formatTypes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.formService.currentForm.value.formatType == ctx_r0.eTypeCode.Text);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.formService.currentForm.value.formatType == ctx_r0.eTypeCode.Json || ctx_r0.formService.currentForm.value.formatType == ctx_r0.eTypeCode.Xml);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("requireFiles", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r0.formService.formErrors.maxImportLevels);
        }
      }

      var TableEditFileComponent = /*#__PURE__*/function () {
        function TableEditFileComponent(authService, hubService) {
          _classCallCheck(this, TableEditFileComponent);

          this.authService = authService;
          this.hubService = hubService;
          this.isFile = false;
          this.hasBaseDropZoneOver = false;
          this.updatingTable = false;
          this.formatTypes = _hub_models__WEBPACK_IMPORTED_MODULE_5__["formatTypes"];
          this.eTypeCode = _shared_shared_models__WEBPACK_IMPORTED_MODULE_4__["eTypeCode"];
          this.cancelToken = new _auth_auth_models__WEBPACK_IMPORTED_MODULE_6__["CancelToken"]();
        }

        _createClass(TableEditFileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this11 = this;

            try {
              this._subscription = this.hubService.getHubCacheObservable().subscribe(function (result) {
                _this11.hubCache = result;
              });
            } catch (e) {
              this.hubService.addHubClientErrorMessage(e, 'Table Edit File');
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this._subscription) {
              this._subscription.unsubscribe();
            }

            this.cancelToken.cancel();
          }
        }, {
          key: "filesDrop",
          value: function filesDrop(files) {
            this.doImport(files[0]);
          }
        }, {
          key: "uploadFile",
          value: function uploadFile(event) {
            var files = event.srcElement.files;
            this.doImport(files[0]);
          }
        }, {
          key: "doImport",
          value: function doImport(file) {
            var _this12 = this;

            if (this.formService.currentForm.value.fileFormat) {
              this.formService.currentForm.value.fileFormatKey = this.formService.currentForm.value.fileFormat.fileFormatKey;
            }

            if (file.size > 100000) {
              if (file.type === 'text/csv' || file.type === 'text/plain') {
                file = new File([file.slice(0, 100000)], file.name);
              } else {
                // tslint:disable-next-line:max-line-length
                this.hubService.addHubErrorMessage("The file size ".concat(file.size, "b exceeded the maximum of 100,000b.  Submit a smaller sample file, or a plain text file (which will be trimmed automatically) to proceed."));
                return;
              }
            }

            var form = new FormData();
            form.append('file', file, file.name);
            form.append('hubKey', this.hubCache.hub.hubKey.toString());
            form.append('table', this.authService.JsonNoNulls(this.formService.currentForm.value));
            form.append('connectionKey', this.connection.key.toString());
            form.append('save', 'false');
            var remoteAgent = this.hubService.getRemoteAgentCurrent();
            this.authService.postFormRemoteGetKey('/api/Hub/ImportFileFormat', form, remoteAgent, this.cancelToken).then(function (key) {
              _this12.authService.getRemoteData(remoteAgent, key, _this12.cancelToken, 'download').then(function (importedTables) {
                var importedTable = importedTables[0];

                if (importedTable.entityStatus.lastStatus.toString() === 'Error') {
                  _this12.hubService.addHubErrorMessage(importedTable.entityStatus.message);
                }

                _this12.updateColumns(importedTable.dexihTableColumns);
              });
            })["catch"](function (reason) {
              if (reason) {
                _this12.hubService.addHubMessage(reason);
              } else {
                // tslint:disable-next-line:max-line-length
                _this12.hubService.addHubErrorMessage('The file upload failed.  This may be due to the file being too large, try making the sample file smaller (headings only) and upload again.');
              }
            });
          }
        }, {
          key: "import",
          value: function _import() {
            var _this13 = this;

            this.hubService.importTables([this.formService.currentForm.value], false, this.cancelToken).then(function (tables) {
              if (tables && tables.length > 0) {
                _this13.updateColumns(tables[0].dexihTableColumns);
              }
            })["catch"](function (reason) {
              if (reason) {
                _this13.hubService.addHubMessage(reason);
              } else {
                // tslint:disable-next-line:max-line-length
                _this13.hubService.addHubErrorMessage('The file upload failed.  This may be due to the file being too large, try making the sample file smaller (headings only) and upload again.');
              }
            });
          }
        }, {
          key: "updateColumns",
          value: function updateColumns(columns) {
            var _this14 = this;

            var tableColumnsForm = this.formService.currentForm.controls.dexihTableColumns; // remove existing columns.

            var count = tableColumnsForm.controls.length;

            for (var i = 0; i <= count; i++) {
              tableColumnsForm.removeAt(0);
            }

            columns.filter(function (c) {
              return c.isValid;
            }).forEach(function (column) {
              tableColumnsForm.push(_this14.formService.tableColumn(tableColumnsForm.value, column));
            });
          }
        }]);

        return TableEditFileComponent;
      }();

      TableEditFileComponent.ɵfac = function TableEditFileComponent_Factory(t) {
        return new (t || TableEditFileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hub_service__WEBPACK_IMPORTED_MODULE_2__["HubService"]));
      };

      TableEditFileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TableEditFileComponent,
        selectors: [["dexih-table-edit-file"]],
        inputs: {
          connection: "connection",
          isFile: "isFile",
          formService: "formService"
        },
        decls: 1,
        vars: 1,
        consts: [["class", "container", 3, "formGroup", 4, "ngIf"], [1, "container", 3, "formGroup"], [3, "ngIf"], ["label", "Format Type", "formControlName", "formatType", "itemKey", "key", "itemName", "name", "iconClass", "fa fa-database", "note", "The format of data.", 3, "items"], [4, "ngIf"], [1, "label"], ["href", "javascript:void(0)", 3, "click"], [1, "fa", "fa-download"], ["dropZone", "", "dropAllowedClass", "nv-file-over", 1, "well", "my-drop-zone", 3, "requireFiles", "dropFiles"], [1, "custom-file", "w-25", "float-right"], ["type", "file", "onclick", "this.value=null", 1, "custom-file-input", 3, "change"], ["for", "inputGroupFile01", 1, "custom-file-label"], ["label", "Max Import Levels", "formControlName", "maxImportLevels", "placeholder", "Enter the maximum node levels to query the json structure.", "iconClass", "fa fa-file", "note", "Enter the maximum levels to query the json file.", 3, "errors"], ["label", "Files Subdirectory", "formControlName", "fileRootPath", "placeholder", "Enter the file path name.", "iconClass", "fa fa-file", 3, "errors", "note"], ["label", "File Match Pattern", "formControlName", "fileMatchPattern", "placeholder", "Enter the file path.", "iconClass", "fa fa-file", "note", "Specify the file pattern to use to match files when bulk uploading.  Patterns can include wildcards */?, leave blank for all files.", 3, "errors"], ["label", "Auto manage files", "formControlName", "autoManageFiles", "note", "Files loaded from the incoming directory, and moved to the processed or rejected directories when they are loaded by a datalink.  If not checked source files will be left untouched after a load."], ["label", "Specify custom file paths for auto-managed files", "formControlName", "useCustomFilePaths", 3, "note"], ["label", "Incoming subdirectory", "formControlName", "fileIncomingPath", "placeholder", "Enter the file path.", "iconClass", "fa fa-file", "note", "Specify the sub-directory for incoming files", 3, "errors"], ["label", "Outgoing subdirectory", "formControlName", "fileOutgoingPath", "placeholder", "Enter the file path.", "iconClass", "fa fa-file", "note", "Specify the sub-directory for outgoing (written) files", 3, "errors"], ["label", "Processed subdirectory", "formControlName", "fileProcessedPath", "placeholder", "Enter the file path.", "iconClass", "fa fa-file", "note", "Specify the sub-directory for processed files", 3, "errors"], ["label", "Rejected subdirectory", "formControlName", "fileRejectedPath", "placeholder", "Enter the file path.", "iconClass", "fa fa-file", "note", "Specify the sub-directory for rejected files", 3, "errors"], ["label", "File Format", "formControlName", "fileFormatKey", "placeholder", "File Format", "itemKey", "key", "itemName", "name", "note", "Specify the file format to use, if not specified, a csv (command separated) format will be used.", "selectNullMessage", "Use default (csv) format", 3, "errors", "items", "enableFilter", "allowNullSelect"], ["routerLink", "../fileFormat-new"], [1, "fa", "fa-sticky-note-o"], ["label", "Optional: Web Service Row Path", "formControlName", "rowPath", "placeholder", "Enter the row path.", "iconClass", "fa fa-feed", "note", "Optional Json Path indicating where a row should be read from.", 3, "errors"]],
        template: function TableEditFileComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TableEditFileComponent_form_0_Template, 22, 7, "form", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formService == null ? null : ctx.formService.currentForm);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroupDirective"], ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["DFormSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControlName"], _shared_utils_dropzone__WEBPACK_IMPORTED_MODULE_10__["DropZoneDirective"], ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["DFormInputComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["DFormCheckboxComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["RouterLinkWithHref"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableEditFileComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'dexih-table-edit-file',
            templateUrl: './table-edit-file.component.html'
          }]
        }], function () {
          return [{
            type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }, {
            type: _hub_service__WEBPACK_IMPORTED_MODULE_2__["HubService"]
          }];
        }, {
          connection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          isFile: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          formService: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "vDxl":
    /*!******************************************************************************************!*\
      !*** ./src/app/+hub/table/table-edit/table-edit-columns/table-edit-columns.component.ts ***!
      \******************************************************************************************/

    /*! exports provided: TableEditColumnsComponent */

    /***/
    function vDxl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TableEditColumnsComponent", function () {
        return TableEditColumnsComponent;
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


      var _hub_forms_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../hub.forms.service */
      "cvPx");
      /* harmony import */


      var _hub_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../hub.models */
      "2v7R");
      /* harmony import */


      var _shared_shared_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../shared/shared.models */
      "soiQ");
      /* harmony import */


      var ngx_d_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-d-components */
      "8V27");
      /* harmony import */


      var ngx_d_table__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-d-table */
      "TRJD");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _column_edit_bulk_column_edit_bulk_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../column-edit-bulk/column-edit-bulk.component */
      "zal2");

      function TableEditColumnsComponent_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button-delete", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableEditColumnsComponent_ng_template_2_Template_d_button_delete_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var items_r8 = ctx.items;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.deleteSelected(items_r8);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "d-button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableEditColumnsComponent_ng_template_2_Template_d_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.showBulkEdit = !ctx_r11.showBulkEdit;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.showBulkEdit ? "Hide Bulk Edit" : "Show Bulk Edit", " ");
        }
      }

      function TableEditColumnsComponent_ng_template_4_column_edit_bulk_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "column-edit-bulk", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("updated", function TableEditColumnsComponent_ng_template_4_column_edit_bulk_0_Template_column_edit_bulk_updated_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r14.showBulkEdit = false;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var items_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().items;

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columns", items_r12)("columnsFormArray", ctx_r13.formsService.currentForm.controls.dexihTableColumns);
        }
      }

      function TableEditColumnsComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TableEditColumnsComponent_ng_template_4_column_edit_bulk_0_Template, 1, 2, "column-edit-bulk", 11);
        }

        if (rf & 2) {
          var items_r12 = ctx.items;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.formsService.currentForm && ctx_r3.showBulkEdit && items_r12.length > 0);
        }
      }

      function TableEditColumnsComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button-new", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableEditColumnsComponent_ng_template_6_Template_d_button_new_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r18.newColumn();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TableEditColumnsComponent_ng_template_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button-edit", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableEditColumnsComponent_ng_template_8_Template_d_button_edit_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

            var item_r20 = ctx.item;

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r21.editColumn(item_r20);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var TableEditColumnsComponent = /*#__PURE__*/function () {
        function TableEditColumnsComponent(hubService, formsService, route, router) {
          _classCallCheck(this, TableEditColumnsComponent);

          this.hubService = hubService;
          this.formsService = formsService;
          this.route = route;
          this.router = router;
          this.entityType = 'Table';
          this.canEdit = false;
          this.deltaTypes = _hub_models__WEBPACK_IMPORTED_MODULE_6__["deltaTypes"];
          this.securityFlags = _hub_models__WEBPACK_IMPORTED_MODULE_6__["securityFlags"];
          this.showBulkEdit = false;
          this.eConnectionPurpose = _shared_shared_models__WEBPACK_IMPORTED_MODULE_7__["eConnectionPurpose"];
          this.columns = [{
            name: 'position',
            title: '#',
            format: ''
          }, {
            name: 'name',
            title: 'Column Name',
            format: '',
            "class": 'nameClass',
            tooltip: 'description'
          }, {
            name: 'logicalName',
            title: 'Logical Name',
            format: 'Md',
            footer: 'description',
            "class": 'logicalNameClass'
          }, {
            name: 'isInput',
            title: 'Input?',
            format: 'Boolean'
          }, {
            name: 'dataType',
            title: 'Data Type',
            format: ''
          }, {
            name: 'allowDbNull',
            title: 'Null?',
            format: 'Boolean'
          }, {
            name: 'deltaType',
            title: 'Delta Type',
            format: ''
          }, {
            name: 'defaultValue',
            title: 'Default Value',
            format: ''
          }, {
            name: 'columnValidation',
            title: 'Column Validation',
            format: ''
          }, {
            name: 'isIncrementalUpdate',
            title: 'Is Incremental',
            format: 'Boolean'
          }, {
            name: 'format',
            title: 'Format'
          }, {
            name: 'securityFlag',
            title: 'Security Flag',
            format: ''
          }, {
            name: 'updateDate',
            title: 'Last Modified',
            format: 'Calendar'
          }];
          this._columnData = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
          this.columnData = this._columnData.asObservable();
        }

        _createClass(TableEditColumnsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this15 = this;

            // load the initial connection from the cache
            this._hubCacheSubscription = this.hubService.getHubCacheObservable().subscribe(function (cache) {
              if (cache && cache.status === _hub_models__WEBPACK_IMPORTED_MODULE_6__["eCacheStatus"].Loaded) {
                _this15.hubCache = cache;

                _this15.updateColumnData();
              }
            });
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges() {
            var _this16 = this;

            if (this._tableFormSubscription) {
              this._tableFormSubscription.unsubscribe();
            }

            if (this.formsService.currentForm) {
              this._tableFormSubscription = this.formsService.currentForm.controls.dexihTableColumns.valueChanges.subscribe(function () {
                return _this16.updateColumnData();
              });
            }

            this.updateColumnData();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this._hubCacheSubscription) {
              this._hubCacheSubscription.unsubscribe();
            }

            if (this._tableFormSubscription) {
              this._tableFormSubscription.unsubscribe();
            }
          }
        }, {
          key: "updateColumnData",
          value: function updateColumnData() {
            var _this17 = this;

            if (this.hubCache && this.formsService.currentForm) {
              var tableData = [];
              var columns;

              if (this.parentColumnForm) {
                columns = this.parentColumnForm.controls.childColumns;
              } else {
                columns = this.formsService.currentForm.controls.dexihTableColumns;
              }

              columns.controls.filter(function (c) {
                return c.value.isValid;
              }).sort(function (a, b) {
                return a.value.position - b.value.position;
              }).forEach(function (column) {
                var columnForm = column;
                tableData.push({
                  key: column.value.key,
                  position: column.value.position,
                  name: (column.value.columnGroup ? column.value.columnGroup + '.' : '') + column.value.name,
                  nameClass: columnForm.controls.name.valid ? '' : 'dexih-state-error',
                  description: column.value.description,
                  isInput: column.value.isInput,
                  dataType: _this17.hubCache.dataTypeToString(column.value),
                  allowDbNull: column.value.allowDbNull,
                  logicalName: column.value.logicalName,
                  logicalNameClass: columnForm.controls.logicalName.valid ? '' : 'dexih-error-icon',
                  deltaType: _this17.deltaTypes.find(function (c) {
                    return c.key === column.value.deltaType;
                  }).name,
                  defaultValue: column.value.defaultValue,
                  columnValidation: _this17.hubCache.getColumnValidation(column.value.columnValidationKey).name,
                  isIncrementalUpdate: column.value.isIncrementalUpdate,
                  format: column.value.format,
                  securityFlag: _this17.securityFlags.find(function (c) {
                    return c.key === column.value.securityFlag;
                  }).name,
                  updateDate: column.value.updateDate
                });
              });

              this._columnData.next(tableData);
            } else {
              this._columnData.next(null);
            }
          }
        }, {
          key: "deleteColumn",
          value: function deleteColumn(column) {
            this.deleteSelected([column]);
          }
        }, {
          key: "deleteSelected",
          value: function deleteSelected(columns) {
            var columnsArray = this.formsService.currentForm.controls.dexihTableColumns;
            columns.forEach(function (column) {
              var index = columnsArray.controls.findIndex(function (c) {
                return c.value.key === column.key;
              });
              columnsArray.removeAt(index);
            }); // this._columnData.next(this.table.dexihTableColumns.filter(c => c.isValid));
          }
        }, {
          key: "newColumn",
          value: function newColumn() {
            this.router.navigate(['column'], {
              relativeTo: this.route.parent,
              queryParamsHandling: 'preserve'
            });
          }
        }, {
          key: "editColumn",
          value: function editColumn(column) {
            this.router.navigate(['column', column.key], {
              relativeTo: this.route.parent,
              queryParamsHandling: 'preserve'
            });
          }
        }, {
          key: "columnSortChange",
          value: function columnSortChange(items) {
            var columnsArray = this.formsService.currentForm.controls.dexihTableColumns;
            var position = 1;
            items.forEach(function (c) {
              var column = columnsArray.controls.find(function (control) {
                return control.value.key === c.key;
              });
              column.controls.position.setValue(position++);
            });
            this.updateColumnData();
          }
        }]);

        return TableEditColumnsComponent;
      }();

      TableEditColumnsComponent.ɵfac = function TableEditColumnsComponent_Factory(t) {
        return new (t || TableEditColumnsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hub_service__WEBPACK_IMPORTED_MODULE_2__["HubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hub_forms_service__WEBPACK_IMPORTED_MODULE_5__["HubFormsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
      };

      TableEditColumnsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TableEditColumnsComponent,
        selectors: [["table-edit-columns"]],
        inputs: {
          tableForm: "tableForm",
          parentColumnForm: "parentColumnForm"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
        decls: 10,
        vars: 8,
        consts: [["title", "Columns", 3, "showExpandButton", "padding"], ["sortColumn", "position", 3, "enableMultiSelect", "enableStickyToolbar", "toolbarZIndex", "enableManualSort", "columns", "dataObservable", "onSortChanged", "rowClick"], ["select", "selectedItemsAction"], ["selectedItemsAction", ""], ["tableHeader", ""], ["select", "actionsTemplate"], ["actions", ""], ["select", "selectedItemAction", "class", "mr-1"], ["selectedItemAction", ""], ["title", "Delete selected columns", 1, "mr-1", 3, "click"], ["iconClass", "fa fa-th-list", 1, "mr-1", 3, "click"], ["class", "mr-1", 3, "columns", "columnsFormArray", "updated", 4, "ngIf"], [1, "mr-1", 3, "columns", "columnsFormArray", "updated"], ["title", "Create a new column", 1, "mr-1", 3, "click"], ["title", "Edit selected column", 1, "mr-1", 3, "click"]],
        template: function TableEditColumnsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-widget-section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "d-table", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSortChanged", function TableEditColumnsComponent_Template_d_table_onSortChanged_1_listener($event) {
              return ctx.columnSortChange($event);
            })("rowClick", function TableEditColumnsComponent_Template_d_table_rowClick_1_listener($event) {
              return ctx.editColumn($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableEditColumnsComponent_ng_template_2_Template, 3, 1, "ng-template", 2, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TableEditColumnsComponent_ng_template_4_Template, 1, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TableEditColumnsComponent_ng_template_6_Template, 1, 0, "ng-template", 5, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TableEditColumnsComponent_ng_template_8_Template, 1, 0, "ng-template", 7, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showExpandButton", true)("padding", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("enableMultiSelect", true)("enableStickyToolbar", true)("toolbarZIndex", 100)("enableManualSort", true)("columns", ctx.columns)("dataObservable", ctx.columnData);
          }
        },
        directives: [ngx_d_components__WEBPACK_IMPORTED_MODULE_8__["ɵa"], ngx_d_table__WEBPACK_IMPORTED_MODULE_9__["DTableComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_8__["DButtonDeleteComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_8__["DButtonComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _column_edit_bulk_column_edit_bulk_component__WEBPACK_IMPORTED_MODULE_11__["ColumnEditBulkComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_8__["DButtonNewComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_8__["DButtonEditComponent"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableEditColumnsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'table-edit-columns',
            templateUrl: './table-edit-columns.component.html'
          }]
        }], function () {
          return [{
            type: _hub_service__WEBPACK_IMPORTED_MODULE_2__["HubService"]
          }, {
            type: _hub_forms_service__WEBPACK_IMPORTED_MODULE_5__["HubFormsService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }];
        }, {
          tableForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          parentColumnForm: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "vSNy":
    /*!***************************************************!*\
      !*** ./src/app/+hub/table/table.shared.module.ts ***!
      \***************************************************/

    /*! exports provided: TableSharedModule */

    /***/
    function vSNy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TableSharedModule", function () {
        return TableSharedModule;
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


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../shared/shared.module */
      "PCNd");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _table_edit_table_edit_properties_table_edit_properties_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./table-edit/table-edit-properties/table-edit-properties.component */
      "Qrk8");
      /* harmony import */


      var _table_edit_table_edit_columns_table_edit_columns_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./table-edit//table-edit-columns/table-edit-columns.component */
      "vDxl");
      /* harmony import */


      var _table_edit_table_edit_file_table_edit_file_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./table-edit/table-edit-file/table-edit-file.component */
      "u2Ae");
      /* harmony import */


      var _table_edit_table_edit_rest_table_edit_rest_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./table-edit/table-edit-rest/table-edit-rest.component */
      "REzP");
      /* harmony import */


      var _table_edit_table_edit_rest_table_edit_input_column_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./table-edit//table-edit-rest/table-edit-input-column.component */
      "8OPm");
      /* harmony import */


      var _hub_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../hub.shared.module */
      "RRRx");
      /* harmony import */


      var _table_edit_table_edit_preview_data__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./table-edit//table-edit-preview-data */
      "taGP");
      /* harmony import */


      var _column_edit__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./column-edit */
      "WRQR");
      /* harmony import */


      var _table_edit_column_edit_bulk_column_edit_bulk_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./table-edit/column-edit-bulk/column-edit-bulk.component */
      "zal2");

      var TableSharedModule = /*#__PURE__*/function () {
        function TableSharedModule() {
          _classCallCheck(this, TableSharedModule);
        }

        _createClass(TableSharedModule, null, [{
          key: "forRoot",
          value: function forRoot() {
            return {
              ngModule: TableSharedModule
            };
          }
        }]);

        return TableSharedModule;
      }();

      TableSharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: TableSharedModule
      });
      TableSharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function TableSharedModule_Factory(t) {
          return new (t || TableSharedModule)();
        },
        imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _hub_shared_module__WEBPACK_IMPORTED_MODULE_9__["HubSharedModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TableSharedModule, {
          declarations: [_table_edit_table_edit_properties_table_edit_properties_component__WEBPACK_IMPORTED_MODULE_4__["TableEditPropertiesComponent"], _table_edit_table_edit_columns_table_edit_columns_component__WEBPACK_IMPORTED_MODULE_5__["TableEditColumnsComponent"], _table_edit_table_edit_file_table_edit_file_component__WEBPACK_IMPORTED_MODULE_6__["TableEditFileComponent"], _table_edit_table_edit_rest_table_edit_rest_component__WEBPACK_IMPORTED_MODULE_7__["TableEditRestComponent"], _table_edit_table_edit_rest_table_edit_input_column_component__WEBPACK_IMPORTED_MODULE_8__["TableEditInputColumnComponent"], _table_edit_table_edit_preview_data__WEBPACK_IMPORTED_MODULE_10__["TableEditPreviewDataComponent"], _column_edit__WEBPACK_IMPORTED_MODULE_11__["ColumnEditComponent"], _column_edit__WEBPACK_IMPORTED_MODULE_11__["ColumnEditBaseComponent"], _table_edit_column_edit_bulk_column_edit_bulk_component__WEBPACK_IMPORTED_MODULE_12__["ColumnEditBulkComponent"]],
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _hub_shared_module__WEBPACK_IMPORTED_MODULE_9__["HubSharedModule"]],
          exports: [_table_edit_table_edit_properties_table_edit_properties_component__WEBPACK_IMPORTED_MODULE_4__["TableEditPropertiesComponent"], _table_edit_table_edit_columns_table_edit_columns_component__WEBPACK_IMPORTED_MODULE_5__["TableEditColumnsComponent"], _table_edit_table_edit_file_table_edit_file_component__WEBPACK_IMPORTED_MODULE_6__["TableEditFileComponent"], _table_edit_table_edit_rest_table_edit_rest_component__WEBPACK_IMPORTED_MODULE_7__["TableEditRestComponent"], _table_edit_table_edit_rest_table_edit_input_column_component__WEBPACK_IMPORTED_MODULE_8__["TableEditInputColumnComponent"], _table_edit_table_edit_preview_data__WEBPACK_IMPORTED_MODULE_10__["TableEditPreviewDataComponent"], _column_edit__WEBPACK_IMPORTED_MODULE_11__["ColumnEditComponent"], _column_edit__WEBPACK_IMPORTED_MODULE_11__["ColumnEditBaseComponent"], _table_edit_column_edit_bulk_column_edit_bulk_component__WEBPACK_IMPORTED_MODULE_12__["ColumnEditBulkComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableSharedModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _hub_shared_module__WEBPACK_IMPORTED_MODULE_9__["HubSharedModule"]],
            declarations: [_table_edit_table_edit_properties_table_edit_properties_component__WEBPACK_IMPORTED_MODULE_4__["TableEditPropertiesComponent"], _table_edit_table_edit_columns_table_edit_columns_component__WEBPACK_IMPORTED_MODULE_5__["TableEditColumnsComponent"], _table_edit_table_edit_file_table_edit_file_component__WEBPACK_IMPORTED_MODULE_6__["TableEditFileComponent"], _table_edit_table_edit_rest_table_edit_rest_component__WEBPACK_IMPORTED_MODULE_7__["TableEditRestComponent"], _table_edit_table_edit_rest_table_edit_input_column_component__WEBPACK_IMPORTED_MODULE_8__["TableEditInputColumnComponent"], _table_edit_table_edit_preview_data__WEBPACK_IMPORTED_MODULE_10__["TableEditPreviewDataComponent"], _column_edit__WEBPACK_IMPORTED_MODULE_11__["ColumnEditComponent"], _column_edit__WEBPACK_IMPORTED_MODULE_11__["ColumnEditBaseComponent"], _table_edit_column_edit_bulk_column_edit_bulk_component__WEBPACK_IMPORTED_MODULE_12__["ColumnEditBulkComponent"]],
            exports: [_table_edit_table_edit_properties_table_edit_properties_component__WEBPACK_IMPORTED_MODULE_4__["TableEditPropertiesComponent"], _table_edit_table_edit_columns_table_edit_columns_component__WEBPACK_IMPORTED_MODULE_5__["TableEditColumnsComponent"], _table_edit_table_edit_file_table_edit_file_component__WEBPACK_IMPORTED_MODULE_6__["TableEditFileComponent"], _table_edit_table_edit_rest_table_edit_rest_component__WEBPACK_IMPORTED_MODULE_7__["TableEditRestComponent"], _table_edit_table_edit_rest_table_edit_input_column_component__WEBPACK_IMPORTED_MODULE_8__["TableEditInputColumnComponent"], _table_edit_table_edit_preview_data__WEBPACK_IMPORTED_MODULE_10__["TableEditPreviewDataComponent"], _column_edit__WEBPACK_IMPORTED_MODULE_11__["ColumnEditComponent"], _column_edit__WEBPACK_IMPORTED_MODULE_11__["ColumnEditBaseComponent"], _table_edit_column_edit_bulk_column_edit_bulk_component__WEBPACK_IMPORTED_MODULE_12__["ColumnEditBulkComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "zal2":
    /*!**************************************************************************************!*\
      !*** ./src/app/+hub/table/table-edit/column-edit-bulk/column-edit-bulk.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: ColumnEditBulkComponent */

    /***/
    function zal2(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ColumnEditBulkComponent", function () {
        return ColumnEditBulkComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _hub_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../hub.models */
      "2v7R");
      /* harmony import */


      var _hub_forms_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../hub.forms.service */
      "cvPx");
      /* harmony import */


      var _hub_remote_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../hub.remote.models */
      "1qMd");
      /* harmony import */


      var _shared_shared_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../shared/shared.models */
      "soiQ");
      /* harmony import */


      var _hub_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../hub.service */
      "4Y1E");
      /* harmony import */


      var ngx_d_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-d-components */
      "8V27");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _buttons_columnValidation_edit_button_columnValidation_edit_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../buttons/columnValidation-edit-button/columnValidation-edit-button.component */
      "gLgY");

      function ColumnEditBulkComponent_div_4_section_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "form-input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ColumnEditBulkComponent_div_4_section_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "form-input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ColumnEditBulkComponent_div_4_section_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "form-input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ColumnEditBulkComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "form-select", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "form-input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ColumnEditBulkComponent_div_4_section_5_Template, 2, 0, "section", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ColumnEditBulkComponent_div_4_section_6_Template, 2, 0, "section", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ColumnEditBulkComponent_div_4_section_7_Template, 2, 0, "section", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r0.typeCodes);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.bulkColumn.value.isString);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.bulkColumn.value.isNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.bulkColumn.value.isNumber);
        }
      }

      function ColumnEditBulkComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "form-input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ColumnEditBulkComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "form-select", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r2.formats)("enableTextEntryMatch", false)("enableTextEntry", true)("allowNullSelect", true);
        }
      }

      function ColumnEditBulkComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "form-select", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r3.securityFlags);
        }
      }

      function ColumnEditBulkComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "form-select", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r4.deltaTypes);
        }
      }

      function ColumnEditBulkComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "form-input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ColumnEditBulkComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form-select", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "columnValidation-edit-button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("allowNullSelect", true)("items", ctx_r6.hubCache == null ? null : ctx_r6.hubCache.hub.dexihColumnValidations);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("key", ctx_r6.bulkColumn.controls.columnValidationKey.value);
        }
      }

      function ColumnEditBulkComponent_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "form-checkbox", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ColumnEditBulkComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "form-checkbox", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ColumnEditBulkComponent_div_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "form-checkbox", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ColumnEditBulkComponent_ng_template_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button-apply", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColumnEditBulkComponent_ng_template_14_Template_d_button_apply_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r15.applyBulkEdit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "d-button-cancel", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ColumnEditBulkComponent_ng_template_14_Template_d_button_cancel_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r17.cancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return {
          standalone: true
        };
      };

      var ColumnEditBulkComponent = /*#__PURE__*/function () {
        function ColumnEditBulkComponent(hubService, formsService) {
          _classCallCheck(this, ColumnEditBulkComponent);

          this.hubService = hubService;
          this.formsService = formsService;
          this.updated = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.properties = [{
            name: 'Group Name',
            property: 'group'
          }, {
            name: 'Data Type',
            property: 'dataType'
          }, {
            name: 'Delta Type',
            property: 'deltaType'
          }, {
            name: 'Format',
            property: 'format'
          }, {
            name: 'Security Flag',
            property: 'securityFlag'
          }, {
            name: 'Default Value',
            property: 'defaultValue'
          }, {
            name: 'Validation Rule',
            property: 'validationRule'
          }, {
            name: 'Allow DbNull',
            property: 'allowDbNull'
          }, {
            name: 'Is Input',
            property: 'isInput'
          }, {
            name: 'Is Unicode',
            property: 'isUnicode'
          }];
          this.typeCodes = _hub_remote_models__WEBPACK_IMPORTED_MODULE_4__["TypeCodes"];
          this.deltaTypes = _hub_models__WEBPACK_IMPORTED_MODULE_2__["deltaTypes"];
          this.securityFlags = _hub_models__WEBPACK_IMPORTED_MODULE_2__["securityFlags"];
          this.formats = _hub_remote_models__WEBPACK_IMPORTED_MODULE_4__["columnNumberFormats"].concat(_hub_remote_models__WEBPACK_IMPORTED_MODULE_4__["columnDateFormats"].concat(_hub_remote_models__WEBPACK_IMPORTED_MODULE_4__["columnTimeFormats"]));
        }

        _createClass(ColumnEditBulkComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this18 = this;

            this.bulkColumn = this.formsService.tableColumn([], new _shared_shared_models__WEBPACK_IMPORTED_MODULE_5__["DexihTableColumn"]());
            this.subscription = this.hubService.getHubCacheObservable().subscribe(function (hubCache) {
              _this18.hubCache = hubCache;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.subscription) {
              this.subscription.unsubscribe();
            }
          }
        }, {
          key: "getColumnForm",
          value: function getColumnForm(column) {
            return this.columnsFormArray.controls.find(function (c) {
              return c.controls.key.value === column.key;
            });
          }
        }, {
          key: "applyBulkEdit",
          value: function applyBulkEdit() {
            var _this19 = this;

            var bulkColumn = this.bulkColumn.value;

            if (this.columnsFormArray) {
              this.columns.forEach(function (column) {
                var columnForm = _this19.getColumnForm(column);

                if (!columnForm) {
                  return;
                }

                switch (_this19.property) {
                  case 'group':
                    columnForm.controls.columnGroup.setValue(bulkColumn.columnGroup);
                    break;

                  case 'dataType':
                    columnForm.controls.dataType.setValue(bulkColumn.dataType);
                    columnForm.controls.maxLength.setValue(bulkColumn.maxLength);
                    columnForm.controls.rank.setValue(bulkColumn.rank);
                    columnForm.controls.precision.setValue(bulkColumn.precision);
                    columnForm.controls.scale.setValue(bulkColumn.scale);
                    break;

                  case 'deltaType':
                    columnForm.controls.deltaType.setValue(bulkColumn.deltaType);
                    break;

                  case 'format':
                    columnForm.controls.format.setValue(bulkColumn.format);
                    break;

                  case 'securityFlag':
                    columnForm.controls.securityFlag.setValue(bulkColumn.securityFlag);
                    break;

                  case 'defaultValue':
                    columnForm.controls.defaultValue.setValue(bulkColumn.defaultValue);
                    break;

                  case 'validationRule':
                    columnForm.controls.columnValidationKey.setValue(bulkColumn.columnValidationKey);
                    break;

                  case 'allowDbNull':
                    columnForm.controls.allowDbNull.setValue(bulkColumn.allowDbNull);
                    break;

                  case 'isUnicode':
                    columnForm.controls.isUnicode.setValue(bulkColumn.isUnicode);
                    break;

                  case 'isInput':
                    columnForm.controls.isInput.setValue(bulkColumn.isInput);
                    break;
                }
              });
            } else {
              this.columns.forEach(function (column) {
                switch (_this19.property) {
                  case 'group':
                    column.columnGroup = bulkColumn.columnGroup;
                    break;

                  case 'dataType':
                    column.dataType = bulkColumn.dataType;
                    column.maxLength = bulkColumn.maxLength;
                    column.rank = bulkColumn.rank;
                    column.precision = bulkColumn.precision;
                    column.scale = bulkColumn.scale;
                    break;

                  case 'deltaType':
                    column.deltaType = bulkColumn.deltaType;
                    break;

                  case 'format':
                    column.format = bulkColumn.format;
                    break;

                  case 'securityFlag':
                    column.securityFlag = bulkColumn.securityFlag;
                    break;

                  case 'defaultValue':
                    column.defaultValue = bulkColumn.defaultValue;
                    break;

                  case 'validationRule':
                    column.columnValidationKey = bulkColumn.columnValidationKey;
                    break;

                  case 'allowDbNull':
                    column.allowDbNull = bulkColumn.allowDbNull;
                    break;

                  case 'isUnicode':
                    column.isUnicode = bulkColumn.isUnicode;
                    break;

                  case 'isInput':
                    column.isInput = bulkColumn.isInput;
                    break;
                }
              });
            }

            this.updated.emit();
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this.updated.emit();
          }
        }, {
          key: "setAllowDbNull",
          value: function setAllowDbNull(value) {
            var _this20 = this;

            this.columns.forEach(function (column) {
              if (_this20.columnsFormArray) {
                var columnForm = _this20.getColumnForm(column);

                columnForm.controls.allowDbNull.setValue(value);
              } else {
                column.allowDbNull = value;
              }
            });
          }
        }, {
          key: "setIsInput",
          value: function setIsInput(value) {
            var _this21 = this;

            this.columns.forEach(function (column) {
              if (_this21.columnsFormArray) {
                var columnForm = _this21.getColumnForm(column);

                columnForm.controls.isInput.setValue(value);
              } else {
                column.isInput = value;
              }
            });
          }
        }, {
          key: "setIsUnicode",
          value: function setIsUnicode(value) {
            var _this22 = this;

            this.columns.forEach(function (column) {
              if (_this22.columnsFormArray) {
                var columnForm = _this22.getColumnForm(column);

                columnForm.controls.isUnicode.setValue(value);
              } else {
                column.isUnicode = value;
              }
            });
          }
        }]);

        return ColumnEditBulkComponent;
      }();

      ColumnEditBulkComponent.ɵfac = function ColumnEditBulkComponent_Factory(t) {
        return new (t || ColumnEditBulkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hub_service__WEBPACK_IMPORTED_MODULE_6__["HubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hub_forms_service__WEBPACK_IMPORTED_MODULE_3__["HubFormsService"]));
      };

      ColumnEditBulkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ColumnEditBulkComponent,
        selectors: [["column-edit-bulk"]],
        inputs: {
          columns: "columns",
          columnsFormArray: "columnsFormArray"
        },
        outputs: {
          updated: "updated"
        },
        decls: 16,
        vars: 15,
        consts: [["title", "Update columns", "headerClass", "text-white bg-primary"], [3, "formGroup"], [1, "form-group", "col-md-4"], ["label", "Property", "itemKey", "property", "itemName", "name", 3, "ngModel", "ngModelOptions", "items", "ngModelChange"], [4, "ngIf"], ["footer", ""], ["label", "Data Type", "formControlName", "dataType", "itemKey", "key", "itemName", "name", 3, "items"], [1, "form-group", "col-md-2"], ["type", "number", "label", "Array Dimensions", "formControlName", "rank"], ["class", "form-group col-md-6", 4, "ngIf"], ["class", "form-group col-md-3", 4, "ngIf"], [1, "form-group", "col-md-6"], ["label", "Max Length", "formControlName", "maxLength", "placeholder", "Max Length", "type", "number", "note", "Maximum string length (blank for unlimited)"], [1, "form-group", "col-md-3"], ["label", "Precision", "formControlName", "precision", "placeholder", "Precision", "type", "number"], ["label", "Scale", "formControlName", "scale", "placeholder", "Scale", "type", "number"], ["label", "Group", "formControlName", "columnGroup", "placeholder", "Enter a column group name", "iconClass", "fa fa-list", "note", "The group column grouping, used to distinguish duplicate column names when applying to structured data (such as json)."], ["label", "Format", "formControlName", "format", "selectNullMessage", "No Format", "itemKey", "value", "itemName", "name", "note", "The display format of the column.", 3, "items", "enableTextEntryMatch", "enableTextEntry", "allowNullSelect"], ["label", "Security Flag", "formControlName", "securityFlag", "itemKey", "key", "itemName", "name", "note", "How to secure this column when reading data.", 3, "items"], ["label", "Delta Type", "formControlName", "deltaType", "itemKey", "key", "itemName", "name", "note", "How to treat the column when used to update target table.", 3, "items"], ["label", "Default Value", "formControlName", "defaultValue", "placeholder", "Default Value", "note", "Default value if unmapped or null."], ["label", "Validation Rule", "formControlName", "columnValidationKey", "itemKey", "key", "itemName", "name", "note", "Validation rule to apply.", 3, "allowNullSelect", "items"], [3, "key"], ["label", "Allow Nulls", "formControlName", "allowDbNull"], ["label", "Is an Input Column", "formControlName", "isInput"], ["label", "Is Unicode", "formControlName", "isUnicode"], [1, "mr-1", 3, "click"]],
        template: function ColumnEditBulkComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-widget", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form-select", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ColumnEditBulkComponent_Template_form_select_ngModelChange_3_listener($event) {
              return ctx.property = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ColumnEditBulkComponent_div_4_Template, 8, 4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ColumnEditBulkComponent_div_5_Template, 3, 0, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ColumnEditBulkComponent_div_6_Template, 3, 4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ColumnEditBulkComponent_div_7_Template, 3, 1, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ColumnEditBulkComponent_div_8_Template, 3, 1, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ColumnEditBulkComponent_div_9_Template, 3, 0, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ColumnEditBulkComponent_div_10_Template, 4, 3, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ColumnEditBulkComponent_div_11_Template, 3, 0, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ColumnEditBulkComponent_div_12_Template, 3, 0, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ColumnEditBulkComponent_div_13_Template, 3, 0, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ColumnEditBulkComponent_ng_template_14_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.bulkColumn);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.property)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c0))("items", ctx.properties);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.property == "dataType");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.property == "group");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.property == "format");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.property == "securityFlag");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.property == "deltaType");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.property == "defaultValue");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.property == "validationRule");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.property == "allowDbNull");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.property == "isInput");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.property == "isUnicode");
          }
        },
        directives: [ngx_d_components__WEBPACK_IMPORTED_MODULE_7__["DWidgetComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], ngx_d_components__WEBPACK_IMPORTED_MODULE_7__["DFormSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], ngx_d_components__WEBPACK_IMPORTED_MODULE_7__["DFormInputComponent"], _buttons_columnValidation_edit_button_columnValidation_edit_button_component__WEBPACK_IMPORTED_MODULE_9__["ColumnValidationEditButtonComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_7__["DFormCheckboxComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_7__["DButtonApplyComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_7__["DButtonCancelComponent"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ColumnEditBulkComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'column-edit-bulk',
            templateUrl: 'column-edit-bulk.component.html'
          }]
        }], function () {
          return [{
            type: _hub_service__WEBPACK_IMPORTED_MODULE_6__["HubService"]
          }, {
            type: _hub_forms_service__WEBPACK_IMPORTED_MODULE_3__["HubFormsService"]
          }];
        }, {
          columns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          columnsFormArray: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          updated: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=0-es5.js.map