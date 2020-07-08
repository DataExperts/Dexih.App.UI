function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/shared/forms/forms.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/shared/forms/forms.service.ts ***!
    \***********************************************/

  /*! exports provided: FormsService */

  /***/
  function srcAppSharedFormsFormsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormsService", function () {
      return FormsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var FormsService = /*#__PURE__*/function () {
      function FormsService(fb) {
        _classCallCheck(this, FormsService);

        this.fb = fb;
        this._currentFormObservable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.formErrors = {};
        this.hasChanged = false;
        this.formSaving = false;
        this.showAllErrors = false;
        this.validationMessages = {
          'required': 'A value is required.',
          'duplicateName': 'The value is already being used.'
        };
        this.validationFieldMessages = {};
      }

      _createClass(FormsService, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.clearFormSubscriptions();
        }
      }, {
        key: "clearFormSubscriptions",
        value: function clearFormSubscriptions() {
          if (this._valueChangesSubscription) {
            this._valueChangesSubscription.unsubscribe();
          }

          if (this._changesSubscription1) {
            this._changesSubscription1.unsubscribe();
          }

          if (this._changesSubscription2) {
            this._changesSubscription2.unsubscribe();
          }

          if (this._changesSubscription3) {
            this._changesSubscription3.unsubscribe();
          }

          if (this._changesSubscription4) {
            this._changesSubscription4.unsubscribe();
          }

          if (this._changesSubscription5) {
            this._changesSubscription5.unsubscribe();
          }
        }
      }, {
        key: "createDefault",
        value: function createDefault(item, template) {
          var newForm = this.fb.group({});
          this.addMissing(item, newForm, template);
          this.startForm(newForm);
        }
      }, {
        key: "addMissing",
        value: function addMissing(item, form, itemTemplate) {
          var keys = Object.keys(itemTemplate);
          var existingKeys = Object.keys(form.controls);
          keys.forEach(function (key) {
            if (existingKeys.findIndex(function (c) {
              return c === key;
            }) >= 0) {// skip items already added.
            } else {
              var control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](key);
              control.setValue(item[key]);
              form.addControl(key, control);
            }
          });
        }
      }, {
        key: "startForm",
        value: function startForm(form) {
          var _this = this;

          this.currentForm = form;

          this._currentFormObservable.next(form);

          if (this._valueChangesSubscription) {
            this._valueChangesSubscription.unsubscribe();
          } // when a value changes, update the errors.


          this._valueChangesSubscription = this.currentForm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(500)).subscribe(function (data) {
            _this.onValueChanged(data);
          });
          this.onValueChanged(); // (re)set validation messages now

          this.hasChanged = false;
        }
      }, {
        key: "getCurrentFormObservable",
        value: function getCurrentFormObservable() {
          return this._currentFormObservable.asObservable();
        }
      }, {
        key: "onValueChanged",
        value: function onValueChanged(data) {
          if (!this.currentForm) {
            return;
          }

          var form = this.currentForm;
          this.hasChanged = true;

          for (var _i = 0, _Object$keys = Object.keys(this.currentForm.controls); _i < _Object$keys.length; _i++) {
            var field = _Object$keys[_i];
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field); // if the control is dirty or flag is set to show all errors.

            if (control && (control.dirty || this.showAllErrors)) {
              if (!control.valid) {
                var messages = this.validationFieldMessages[field];

                if (control.errors) {
                  for (var _i2 = 0, _Object$keys2 = Object.keys(control.errors); _i2 < _Object$keys2.length; _i2++) {
                    var key = _Object$keys2[_i2];

                    if (messages && messages[key]) {
                      this.formErrors[field] += messages[key] + ' ';
                    } else if (this.validationMessages[key]) {
                      this.formErrors[field] += this.validationMessages[key] + ' ';
                    } else {
                      var message = void 0;

                      switch (key) {
                        case 'minlength':
                          message = 'Value is ' + control.errors.minlength.actualLength + ' charaters long, required minimum length is ' + control.errors.minlength.requiredLength + ' characters.';
                          break;

                        case 'maxlength':
                          message = 'Value is ' + control.errors.maxlength.actualLength + ' charaters long, required maximum length is ' + control.errors.maxlength.requiredLength + ' characters.';
                          break;

                        case 'maxvalue':
                          message = 'Value is ' + control.value + ' required maximum is ' + control.errors.maxvalue.requiredValue + '.';
                          break;

                        case 'minvalue':
                          message = 'Value is ' + control.value + ' required minimum is ' + control.errors.minvalue.requiredValue + '.';
                          break;

                        case 'email':
                          message = 'Value is not a valid email address.';
                          break;

                        case 'passwordMatch':
                          message = 'The passwords do not match.';
                          break;

                        case 'pattern':
                          message = 'Passwords must have one upper, lower, number, and symbol.';
                          break;

                        default:
                          message = 'Field error: ' + key;
                      }

                      this.formErrors[field] += message + ' ';
                    }
                  }
                } else {// this.formErrors[field] = 'Invalid value';
                }
              }
            }
          }
        }
      }, {
        key: "showErrors",
        value: function showErrors() {
          this.showAllErrors = true;
          this.onValueChanged();
        }
      }]);

      return FormsService;
    }();

    FormsService.ɵfac = function FormsService_Factory(t) {
      return new (t || FormsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    FormsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: FormsService,
      factory: FormsService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shared/index.ts":
  /*!*********************************!*\
    !*** ./src/app/shared/index.ts ***!
    \*********************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppSharedIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return _shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"];
    });
    /***/

  }
}]);
//# sourceMappingURL=common-es5.js.map