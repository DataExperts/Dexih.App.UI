(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/shared/forms/forms.service.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/forms/forms.service.ts ***!
  \***********************************************/
/*! exports provided: FormsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsService", function() { return FormsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






class FormsService {
    constructor(fb) {
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
    ngOnDestroy() {
        this.clearFormSubscriptions();
    }
    clearFormSubscriptions() {
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
    createDefault(item, template) {
        const newForm = this.fb.group({});
        this.addMissing(item, newForm, template);
        this.startForm(newForm);
    }
    addMissing(item, form, itemTemplate) {
        let keys = Object.keys(itemTemplate);
        let existingKeys = Object.keys(form.controls);
        keys.forEach(key => {
            if (existingKeys.findIndex(c => c === key) >= 0) {
                // skip items already added.
            }
            else {
                let control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](key);
                control.setValue(item[key]);
                form.addControl(key, control);
            }
        });
    }
    startForm(form) {
        this.currentForm = form;
        this._currentFormObservable.next(form);
        if (this._valueChangesSubscription) {
            this._valueChangesSubscription.unsubscribe();
        }
        // when a value changes, update the errors.
        this._valueChangesSubscription = this.currentForm.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(500))
            .subscribe(data => {
            this.onValueChanged(data);
        });
        this.onValueChanged(); // (re)set validation messages now
        this.hasChanged = false;
    }
    getCurrentFormObservable() {
        return this._currentFormObservable.asObservable();
    }
    onValueChanged(data) {
        if (!this.currentForm) {
            return;
        }
        const form = this.currentForm;
        this.hasChanged = true;
        for (const field of Object.keys(this.currentForm.controls)) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            const control = form.get(field);
            // if the control is dirty or flag is set to show all errors.
            if (control && (control.dirty || this.showAllErrors)) {
                if (!control.valid) {
                    const messages = this.validationFieldMessages[field];
                    if (control.errors) {
                        for (const key of Object.keys(control.errors)) {
                            if (messages && messages[key]) {
                                this.formErrors[field] += messages[key] + ' ';
                            }
                            else if (this.validationMessages[key]) {
                                this.formErrors[field] += this.validationMessages[key] + ' ';
                            }
                            else {
                                let message;
                                switch (key) {
                                    case 'minlength':
                                        message = 'Value is ' +
                                            control.errors.minlength.actualLength +
                                            ' charaters long, required minimum length is '
                                            + control.errors.minlength.requiredLength + ' characters.';
                                        break;
                                    case 'maxlength':
                                        message = 'Value is ' +
                                            control.errors.maxlength.actualLength +
                                            ' charaters long, required maximum length is '
                                            + control.errors.maxlength.requiredLength + ' characters.';
                                        break;
                                    case 'maxvalue':
                                        message = 'Value is ' +
                                            control.value +
                                            ' required maximum is '
                                            + control.errors.maxvalue.requiredValue + '.';
                                        break;
                                    case 'minvalue':
                                        message = 'Value is ' +
                                            control.value +
                                            ' required minimum is '
                                            + control.errors.minvalue.requiredValue + '.';
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
                    }
                    else {
                        // this.formErrors[field] = 'Invalid value';
                    }
                }
            }
        }
    }
    showErrors() {
        this.showAllErrors = true;
        this.onValueChanged();
    }
}
FormsService.ɵfac = function FormsService_Factory(t) { return new (t || FormsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
FormsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: FormsService, factory: FormsService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/index.ts":
/*!*********************************!*\
  !*** ./src/app/shared/index.ts ***!
  \*********************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared.module */ "./src/app/shared/shared.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return _shared_module__WEBPACK_IMPORTED_MODULE_0__["SharedModule"]; });




/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map