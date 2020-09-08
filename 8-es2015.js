(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./src/app/+hubs/help/help.component.ts":
/*!**********************************************!*\
  !*** ./src/app/+hubs/help/help.component.ts ***!
  \**********************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../+auth/auth.service */ "./src/app/+auth/auth.service.ts");
/* harmony import */ var _hub__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../+hub */ "./src/app/+hub/index.ts");
/* harmony import */ var _shared_help_dexih_help_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/help/dexih-help.component */ "./src/app/shared/help/dexih-help.component.ts");









class HelpComponent {
    constructor(authService, hubService, router, route) {
        this.authService = authService;
        this.hubService = hubService;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this._subscription = this.route.queryParams.subscribe(params => {
            let path = params['path'];
            if (path) {
                this.path = '/assets/help/' + path;
            }
            else {
                this.path = '/assets/help/intro/getting_started.md';
            }
        });
        this._hubCacheSubscription = this.hubService.getHubCacheObservable().subscribe(cache => {
            if (cache && cache.hub) {
                this.hubKey = cache.hub.hubKey;
            }
            else {
                this.hubKey = null;
            }
        });
    }
    ngOnDestroy() {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
        if (this._hubCacheSubscription) {
            this._hubCacheSubscription.unsubscribe();
        }
    }
    close() {
        this.authService.navigateUp();
    }
    linkClick(link) {
        this.router.navigate([], { relativeTo: this.route, queryParams: { 'path': link } });
    }
}
HelpComponent.ɵfac = function HelpComponent_Factory(t) { return new (t || HelpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hub__WEBPACK_IMPORTED_MODULE_3__["HubService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
HelpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HelpComponent, selectors: [["help"]], decls: 2, vars: 3, consts: [[1, "container-fluid"], ["title", "Help", 3, "path", "display", "hubKey", "linkClick"]], template: function HelpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "dexih-help", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("linkClick", function HelpComponent_Template_dexih_help_linkClick_1_listener($event) { return ctx.linkClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("path", ctx.path)("display", true)("hubKey", ctx.hubKey);
    } }, directives: [_shared_help_dexih_help_component__WEBPACK_IMPORTED_MODULE_4__["DexihHelpComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HelpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'help',
                templateUrl: './help.component.html',
                styles: []
            }]
    }], function () { return [{ type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _hub__WEBPACK_IMPORTED_MODULE_3__["HubService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/+hubs/help/index.ts":
/*!*************************************!*\
  !*** ./src/app/+hubs/help/index.ts ***!
  \*************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _help_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./help.component */ "./src/app/+hubs/help/help.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return _help_component__WEBPACK_IMPORTED_MODULE_0__["HelpComponent"]; });




/***/ }),

/***/ "./src/app/+hubs/hub-edit/hub-edit.component.ts":
/*!******************************************************!*\
  !*** ./src/app/+hubs/hub-edit/hub-edit.component.ts ***!
  \******************************************************/
/*! exports provided: HubEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HubEditComponent", function() { return HubEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../+auth/auth.service */ "./src/app/+auth/auth.service.ts");
/* harmony import */ var _auth_auth_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../+auth/auth.models */ "./src/app/+auth/auth.models.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_ui_dexihMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/ui/dexihMessage */ "./src/app/shared/ui/dexihMessage/index.ts");
/* harmony import */ var _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/shared.models */ "./src/app/shared/shared.models.ts");
/* harmony import */ var _shared_ui_dexihMessage_dexih_message_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/ui/dexihMessage/dexih-message.component */ "./src/app/shared/ui/dexihMessage/dexih-message.component.ts");
/* harmony import */ var ngx_d_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-d-components */ "./node_modules/ngx-d-components/__ivy_ngcc__/fesm2015/ngx-d-components.js");
















const _c0 = ["DexihMessage"];
function HubEditComponent_d_widget_3_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button-save", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HubEditComponent_d_widget_3_ng_template_1_Template_d_button_save_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return !ctx_r4.savingHub && !ctx_r4.mainForm.pristine && ctx_r4.saveHub(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "d-button-cancel", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HubEditComponent_d_widget_3_ng_template_1_Template_d_button_cancel_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return !ctx_r6.savingHub && ctx_r6.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r3.savingHub || ctx_r3.mainForm.pristine)("busy", ctx_r3.savingHub);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r3.savingHub);
} }
function HubEditComponent_d_widget_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-widget", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function HubEditComponent_d_widget_3_Template_d_widget_close_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HubEditComponent_d_widget_3_ng_template_1_Template, 2, 3, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "form-input", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "form-textarea", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form-input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " (");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "d-button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HubEditComponent_d_widget_3_Template_d_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.generateKey(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Generate a new key");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "form-select", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showCloseButton", true)("padding", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.mainForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autocapitalize", true)("errors", ctx_r1.formErrors.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isHidden", true)("showPreview", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r1.formErrors.encryptionKey);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("busy", ctx_r1.generatingKey);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r1.SharedAccessItems)("errors", ctx_r1.formErrors.sharedAccess)("enableFilter", false);
} }
class HubEditComponent {
    constructor(authService, router, route, location, fb) {
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.location = location;
        this.fb = fb;
        this.SharedAccessItems = _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["eSharedAccessItems"].filter(c => c.key > 0);
        this.generatingKey = false;
        this.savingHub = false;
        this.hasChanged = false;
        this.showAllErrors = false;
        this.formErrors = {
            'name': '',
            'encryptionKey': '',
            'sharedAccess': '',
            'expiryDate': ''
        };
        this.validationMessages = {
            'name': {
                'required': 'Name is required.',
                'minlength': 'Name must be at least 4 characters long.',
                'maxlength': 'Name cannot be more than 50 characters long.',
                'duplicateHubName': 'Name cannot be the same as an existing hub name.'
            },
            'encryptionKey': {
                'required': 'Encryption Key is required.',
                'minlength': 'Encryption Key must be at least 10 characters long.',
                'maxlength': 'Encryption Key cannot be more than 250 characters long.'
            },
            'sharedAccess': {
                'required': 'Specify the type of required access.'
            },
            'expiryDate': {
                'validateDate': 'The expiry date is invalid.'
            }
        };
    }
    ngOnInit() {
        try {
            this._subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])(this.route.data, this.route.params, this.authService.getHubsObservable(), this.authService.getRemoteAgentsObservable()).subscribe(result => {
                let data = result[0];
                let params = result[1];
                let hubs = result[2];
                this.action = data['action'];
                this.pageTitle = data['pageTitle'];
                if (this.action === 'New') {
                    this.hub = new _auth_auth_models__WEBPACK_IMPORTED_MODULE_5__["DexihHubAuth"]();
                    this.buildForm();
                }
                else {
                    if (hubs) {
                        let hubKey = +params['hubKey'];
                        this.hub = hubs.find(c => c.hubKey === hubKey);
                        this.buildForm();
                    }
                }
            });
        }
        catch (e) {
            this.dexihMessage.addErrorMessage(e.message);
        }
    }
    ngOnDestroy() {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
        if (this._valueChangesSubscription) {
            this._valueChangesSubscription.unsubscribe();
        }
    }
    generateKey() {
        this.generatingKey = true;
        this.authService.getRandomEncryptionKey().then(result => {
            this.mainForm.controls['encryptionKey'].setValue(result);
            this.mainForm.markAsDirty();
            this.generatingKey = false;
        }).catch(reason => {
            this.dexihMessage.addMessage(reason);
            this.generatingKey = false;
        });
    }
    saveHub() {
        if (this.mainForm.valid && this.hasChanged) {
            if (this.hub.hubKey > 0 && this.hub.encryptionKey !== this.mainForm.value.encryptionKey) {
                this.authService.confirmDialog('Warning: Encryption Key Changed', 
                // tslint:disable-next-line:max-line-length
                'The encryption key has changed.  This will require all connection password & connection strings in the hub to be updated.  Would you like to continue?').then(confirm => {
                    if (confirm) {
                        this.doSaveHub();
                    }
                });
            }
            else {
                this.doSaveHub();
            }
        }
        else {
            this.showAllErrors = true;
            this.onValueChanged();
        }
    }
    doSaveHub() {
        this.dexihMessage.reset();
        this.savingHub = true;
        Object.assign(this.hub, this.mainForm.value);
        this.authService.saveHub(this.hub)
            .then(result => {
            this.savingHub = false;
            this.cancel();
            this.router.navigate(['/hub', result.hubKey, 'summary', 'agents']);
            return;
        }).catch(reason => {
            this.dexihMessage.addMessage(reason);
            this.savingHub = false;
        });
    }
    cancel() {
        this.authService.navigateUp();
    }
    buildForm() {
        this.mainForm = this.fb.group({
            'name': [this.hub.name, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50),
                    this.duplicateHubNameValidator()
                ]
            ],
            'description': [this.hub.description, []],
            'encryptionKey': [this.hub.encryptionKey, []],
            'sharedAccess': [this.hub.sharedAccess, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                ]],
            'expiryDate': [this.hub.expiryDate, []],
        });
        if (this._valueChangesSubscription) {
            this._valueChangesSubscription.unsubscribe();
        }
        this._valueChangesSubscription = this.mainForm.valueChanges.subscribe(data => this.onValueChanged(data));
        this.onValueChanged(); // (re)set validation messages now
        this.hasChanged = false;
    }
    duplicateHubNameValidator() {
        return (control) => {
            const name = control.value;
            const no = this.authService.hubNameExists(this.hub.hubKey, name);
            return no ? { 'duplicateHubName': { name } } : null;
        };
    }
    onValueChanged(data) {
        if (!this.mainForm) {
            return;
        }
        const form = this.mainForm;
        this.hasChanged = true;
        for (const field of Object.keys(this.formErrors)) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            const control = form.get(field);
            if (control && (control.dirty || this.showAllErrors) && !control.valid) {
                const messages = this.validationMessages[field];
                for (const key of Object.keys(control.errors)) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    }
}
HubEditComponent.ɵfac = function HubEditComponent_Factory(t) { return new (t || HubEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"])); };
HubEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HubEditComponent, selectors: [["dexih-hub-edit-form"]], viewQuery: function HubEditComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dexihMessage = _t.first);
    } }, decls: 4, vars: 1, consts: [[1, "container"], ["DexihMessage", ""], ["title", "Edit Hub", "subTitle", "Complete the details to create/edit a new hub", "iconClass", "fa fa-lg fa-fw fa-life-saver", 3, "showCloseButton", "padding", "close", 4, "ngIf"], ["title", "Edit Hub", "subTitle", "Complete the details to create/edit a new hub", "iconClass", "fa fa-lg fa-fw fa-life-saver", 3, "showCloseButton", "padding", "close"], ["header", ""], ["id", "hub-edit-form", 3, "formGroup"], ["label", "Hub Name", "formControlName", "name", "placeholder", "Enter a name for the hub", "iconClass", "fa fa-life-ring", 3, "autocapitalize", "errors"], ["label", "Description", "formControlName", "description", "placeholder", "Enter a description for the hub", 3, "isHidden", "showPreview"], ["label", "Encryption Key", "formControlName", "encryptionKey", "placeholder", "Enter an encryption key", "iconClass", "fa fa-key", "note", "The encryption key will be used to encrypt table columns flagged as secure.  Ensure this key is kept securely as without it encrypted data will be lost.", 2, "z-index", "10000", 3, "errors"], ["buttonClass", "btn btn-link mb-1 p-0", "iconClass", "fa fa-refresh", 3, "busy", "click"], ["label", "Shared Data Access", "formControlName", "sharedAccess", "itemKey", "key", "itemName", "description", "iconClass", "fa fa-lock", "note", "The level of access required for users to access shared data in this hub.", 3, "items", "errors", "enableFilter"], [1, "mr-1", 3, "disabled", "busy", "click"], [3, "disabled", "click"]], template: function HubEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "dexih-message", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HubEditComponent_d_widget_3_Template, 17, 12, "d-widget", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mainForm);
    } }, directives: [_shared_ui_dexihMessage_dexih_message_component__WEBPACK_IMPORTED_MODULE_9__["DexihMessageComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], ngx_d_components__WEBPACK_IMPORTED_MODULE_10__["DWidgetComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], ngx_d_components__WEBPACK_IMPORTED_MODULE_10__["DFormInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], ngx_d_components__WEBPACK_IMPORTED_MODULE_10__["DFormTextAreaComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_10__["DButtonComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_10__["DFormSelectComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_10__["DButtonSaveComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_10__["DButtonCancelComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HubEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dexih-hub-edit-form',
                templateUrl: './hub-edit.component.html'
            }]
    }], function () { return [{ type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }]; }, { dexihMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['DexihMessage', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/+hubs/hub-index/hub-index.component.ts":
/*!********************************************************!*\
  !*** ./src/app/+hubs/hub-index/hub-index.component.ts ***!
  \********************************************************/
/*! exports provided: HubIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HubIndexComponent", function() { return HubIndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _hubs_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hubs.service */ "./src/app/+hubs/hubs.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../+auth/auth.service */ "./src/app/+auth/auth.service.ts");
/* harmony import */ var ngx_d_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-d-components */ "./node_modules/ngx-d-components/__ivy_ngcc__/fesm2015/ngx-d-components.js");
/* harmony import */ var ngx_d_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-d-table */ "./node_modules/ngx-d-table/__ivy_ngcc__/fesm2015/ngx-d-table.js");











const _c0 = function (a1) { return ["hub-edit", a1]; };
const _c1 = function (a1) { return ["/hub", a1]; };
const _c2 = function (a1) { return ["/hub", a1, "manage", "manage-users"]; };
function HubIndexComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "d-button-edit", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "d-button-open", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "d-button", 9);
} if (rf & 2) {
    const hub_r6 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, hub_r6.hubKey));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, hub_r6.hubKey));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c2, hub_r6.hubKey));
} }
function HubIndexComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button-delete", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HubIndexComponent_ng_template_5_Template_d_button_delete_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const items_r7 = ctx.items; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.deleteHubs(items_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c3 = function () { return ["hub-new"]; };
function HubIndexComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "d-button-new", 11);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c3));
} }
class HubIndexComponent {
    constructor(authService, hubService, router, route) {
        this.authService = authService;
        this.hubService = hubService;
        this.router = router;
        this.route = route;
        this.isLoaded = false;
        this.columns = [
            { name: 'name', title: 'Name', format: '' },
            { name: 'description', title: 'Description', format: '' },
            { name: 'updateDate', title: 'Last Modified', format: 'Calendar' },
        ];
        this._tableData = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.tableData = this._tableData.asObservable();
    }
    ngOnInit() {
        this.hubsObserve = this.authService.getHubsObservable().subscribe(hubs => {
            if (hubs) {
                this.isLoaded = true;
            }
            this._tableData.next(hubs);
        });
    }
    ngOnDestroy() {
        if (this.hubsObserve) {
            this.hubsObserve.unsubscribe();
        }
    }
    deleteHubs(hubs) {
        this.authService.deleteHubs(hubs).catch(reason => {
            this.hubService.addHubMessage(reason);
        });
    }
    edit(hub) {
        this.router.navigate(['hub-edit', hub.hubKey], { relativeTo: this.route });
    }
    close() {
        this.authService.navigateUp();
    }
}
HubIndexComponent.ɵfac = function HubIndexComponent_Factory(t) { return new (t || HubIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hubs_service__WEBPACK_IMPORTED_MODULE_1__["HubsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
HubIndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HubIndexComponent, selectors: [["hubs"]], decls: 9, vars: 6, consts: [[1, "container-fluid"], ["title", "Available Hubs", "iconClass", "fa fa-lg fa-fw fa-life-saver", 3, "showCloseButton", "close"], [3, "enableMultiSelect", "enableStickyToolbar", "toolbarZIndex", "columns", "dataObservable", "rowClick"], ["select", "selectedItemAction"], ["selectedItemAction", ""], ["select", "selectedItemsAction"], ["selectedItemsAction", ""], ["actions", ""], ["queryParamsHandling", "", "preserveFragment", "", 1, "mr-1", 3, "routerLink"], ["iconClass", "fa fa-lock", "queryParamsHandling", "", "preserveFragment", "", "text", "Permissions", 1, "mr-1", 3, "routerLink"], [1, "mr-1", 3, "click"], [1, "mr-1", 3, "routerLink"]], template: function HubIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "d-widget", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function HubIndexComponent_Template_d_widget_close_1_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "d-table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rowClick", function HubIndexComponent_Template_d_table_rowClick_2_listener($event) { return ctx.edit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HubIndexComponent_ng_template_3_Template, 3, 9, "ng-template", 3, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HubIndexComponent_ng_template_5_Template, 1, 0, "ng-template", 5, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HubIndexComponent_ng_template_7_Template, 1, 2, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showCloseButton", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("enableMultiSelect", true)("enableStickyToolbar", true)("toolbarZIndex", 100)("columns", ctx.columns)("dataObservable", ctx.tableData);
    } }, directives: [ngx_d_components__WEBPACK_IMPORTED_MODULE_5__["DWidgetComponent"], ngx_d_table__WEBPACK_IMPORTED_MODULE_6__["DTableComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_5__["DButtonEditComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], ngx_d_components__WEBPACK_IMPORTED_MODULE_5__["DButtonOpenComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_5__["DButtonComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_5__["DButtonDeleteComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_5__["DButtonNewComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HubIndexComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'hubs',
                templateUrl: './hub-index.component.html',
                styles: []
            }]
    }], function () { return [{ type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _hubs_service__WEBPACK_IMPORTED_MODULE_1__["HubsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/+hubs/hubs-summary/hubs-summary.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/+hubs/hubs-summary/hubs-summary.component.ts ***!
  \**************************************************************/
/*! exports provided: HubsSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HubsSummaryComponent", function() { return HubsSummaryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../+auth/auth.service */ "./src/app/+auth/auth.service.ts");
/* harmony import */ var _auth_auth_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../+auth/auth.models */ "./src/app/+auth/auth.models.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_shared_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.models */ "./src/app/shared/shared.models.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_d_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-d-components */ "./node_modules/ngx-d-components/__ivy_ngcc__/fesm2015/ngx-d-components.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");











function HubsSummaryComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "d-button-new", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Let's get started.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "You do not have any hubs currently available to you.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "To get started, either create a new hub, or request another user provide access.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { active: a0 }; };
function HubsSummaryComponent_ng_template_51_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HubsSummaryComponent_ng_template_51_Template_input_ngModelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.view = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HubsSummaryComponent_ng_template_51_Template_input_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.view = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HubsSummaryComponent_ng_template_51_Template_input_ngModelChange_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.view = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function HubsSummaryComponent_ng_template_51_Template_input_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.view = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx_r2.view === ctx_r2.eHubAccess.All));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r2.eHubAccess.All)("ngModel", ctx_r2.view);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx_r2.view === ctx_r2.eHubAccess.User));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r2.eHubAccess.User)("ngModel", ctx_r2.view);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c0, ctx_r2.view === ctx_r2.eHubAccess.ReadOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r2.eHubAccess.ReadOnly)("ngModel", ctx_r2.view);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c0, ctx_r2.view === ctx_r2.eHubAccess.Public));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r2.eHubAccess.Public)("ngModel", ctx_r2.view);
} }
function HubsSummaryComponent_ng_template_54_div_0_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hub_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](hub_r9.description);
} }
function HubsSummaryComponent_ng_template_54_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "d-button-open", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "d-button-edit", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, HubsSummaryComponent_ng_template_54_div_0_div_11_Template, 3, 1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const hub_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", hub_r9.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", ctx_r10.eHubAccess[hub_r9.hubAccess], ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/hub/", hub_r9.hubKey, "/summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "hub-edit/", hub_r9.hubKey, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", hub_r9.description);
} }
function HubsSummaryComponent_ng_template_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HubsSummaryComponent_ng_template_54_div_0_Template, 12, 5, "div", 41);
} if (rf & 2) {
    const hub_r9 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r3.view === ctx_r3.eHubAccess.All || hub_r9.hubAccess === ctx_r3.view) && (!ctx_r3.filterString || hub_r9.name.toUpperCase().includes(ctx_r3.filterString.toUpperCase())));
} }
class HubsSummaryComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.logoSmallUrl = _auth_auth_models__WEBPACK_IMPORTED_MODULE_2__["logoSmallUrl"];
        this.eSharedAccess = _shared_shared_models__WEBPACK_IMPORTED_MODULE_4__["eSharedAccess"];
        this.ePermission = _shared_shared_models__WEBPACK_IMPORTED_MODULE_4__["ePermission"];
        this.eHubAccess = _auth_auth_models__WEBPACK_IMPORTED_MODULE_2__["eHubAccess"];
        this.view = _auth_auth_models__WEBPACK_IMPORTED_MODULE_2__["eHubAccess"].User;
        this.hubAccess = {};
    }
    ngOnInit() {
        this.hubs = this.authService.getHubsObservable();
    }
}
HubsSummaryComponent.ɵfac = function HubsSummaryComponent_Factory(t) { return new (t || HubsSummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
HubsSummaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HubsSummaryComponent, selectors: [["hubs-summary"]], decls: 56, vars: 9, consts: [[1, "container-fluid"], [1, "d-flex", "align-items-center", "p-3", "my-3", "text-white-50", "bg-primary", "rounded"], [1, "lh-100"], [1, "mb-0", "text-white", "lh-100"], ["class", "alert alert-warning", 4, "ngIf"], [1, "card-deck"], [1, "card", "mb-3", 2, "min-width", "18rem"], [1, "card-header", "text-white", "bg-success"], [1, "fa", "fa-lg", "fa-fw", "fa-life-saver"], [1, "card-body"], [1, "card-text"], [1, "card-footer"], ["iconClass", "fa fa-life-saver", "routerLink", "hubs-view", 1, "ml-1"], ["routerLink", "hub-new", "title", "Create a new hub", 1, "ml-1"], [1, "card-header", "text-white", "bg-primary"], [1, "fa", "fa-lg", "fa-fw", "fa-user"], ["iconClass", "fa fa-user", "routerLink", "manage", 1, "ml-1"], [1, "card-header", "text-white", "bg-warning"], [1, "fa", "fa-lg", "fa-fw", "fa-wifi"], ["iconClass", "fa fa-wifi", "routerLink", "agents", 1, "mr-1"], ["iconClass", "fa fa-tasks", "routerLink", "tasks"], [1, "card-header", "text-white", "bg-danger"], [1, "fa", "fa-lg", "fa-fw", "fa-newspaper-o"], ["routerLink", "sharedData"], ["title", "Hubs", "iconClass", "fa fa-lg fa-fw fa-life-saver", 3, "showCloseButton", "padding", "showFilter", "filterString"], ["header", ""], [1, "card-columns"], ["ngFor", "", 3, "ngForOf"], [1, "alert", "alert-warning"], [1, "float-right"], ["routerLink", "hub-new", "title", "Create a new Hub", "text", "New Hub"], ["data-toggle", "buttons", 1, "btn-group", "btn-group-toggle", "ml-1"], ["title", "All Hubs.", 1, "btn", "btn-primary", 3, "ngClass"], ["type", "radio", "name", "options", "autocomplete", "off", 3, "value", "ngModel", "ngModelChange"], [1, "fa", "fa-globe"], ["title", "User owned hubs", 1, "btn", "btn-primary", 3, "ngClass"], [1, "fa", "fa-user-secret"], ["title", "Readonly hubs", 1, "btn", "btn-primary", 3, "ngClass"], [1, "fa", "fa-book"], ["title", "Public Hubs", 1, "btn", "btn-primary", 3, "ngClass"], [1, "fa", "fa-users"], ["class", "card", 4, "ngIf"], [1, "card"], [1, "card-header"], [1, "d-flex", "flex-row", "p-0"], [1, "small"], [1, "d-flex", "ml-auto"], [3, "routerLink"], [1, "ml-1", 3, "routerLink"], ["class", "card-body", 4, "ngIf"]], template: function HubsSummaryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Data Experts Integration Hub");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, HubsSummaryComponent_div_5_Template, 9, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Hub Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Hub's contain your data processing rules.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "d-button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Manage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "d-button-new", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Account Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Edit your account details, password, and login providers.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "d-button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Remote Agents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Remote agents connect to data and are used run and publish data.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "d-button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Agents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "d-button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Tasks");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Shared Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "View all datasets which have been shared.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "d-button-view", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "d-widget", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("filterString", function HubsSummaryComponent_Template_d_widget_filterString_50_listener($event) { return ctx.filterString = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, HubsSummaryComponent_ng_template_51_Template, 13, 20, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, HubsSummaryComponent_ng_template_54_Template, 1, 1, "ng-template", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](55, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        var tmp_0_0 = null;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ((tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 5, ctx.hubs)) == null ? null : tmp_0_0.length) == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showCloseButton", false)("padding", true)("showFilter", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](55, 7, ctx.hubs));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ngx_d_components__WEBPACK_IMPORTED_MODULE_6__["DButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], ngx_d_components__WEBPACK_IMPORTED_MODULE_6__["DButtonNewComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_6__["DButtonViewComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_6__["DWidgetComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], ngx_d_components__WEBPACK_IMPORTED_MODULE_6__["DButtonOpenComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_6__["DButtonEditComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HubsSummaryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'hubs-summary',
                templateUrl: './hubs-summary.component.html',
            }]
    }], function () { return [{ type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/+hubs/hubs.component.ts":
/*!*****************************************!*\
  !*** ./src/app/+hubs/hubs.component.ts ***!
  \*****************************************/
/*! exports provided: HubsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HubsComponent", function() { return HubsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _hubs_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hubs.service */ "./src/app/+hubs/hubs.service.ts");
/* harmony import */ var _shared_ui_dexihMessage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/ui/dexihMessage */ "./src/app/shared/ui/dexihMessage/index.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../+auth/auth.service */ "./src/app/+auth/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_ui_dexihMessage_dexih_message_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/ui/dexihMessage/dexih-message.component */ "./src/app/shared/ui/dexihMessage/dexih-message.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");










const _c0 = ["DexihMessage"];
function HubsComponent_section_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.webSocketStatus, " ");
} }
class HubsComponent {
    constructor(authService, hubsService) {
        this.authService = authService;
        this.hubsService = hubsService;
        this.openDelay = false; // used to pause the websocket error message displaying whilst a connect attempt occurs.
        authService.initialize();
    }
    ngOnInit() {
        this._hubsMessageSubscription = this.hubsService.getHubMessagesObservable().subscribe(messages => {
            if (!messages || messages.length === 0) {
                this.dexihMessage.reset();
            }
            else {
                this.dexihMessage.addMessage(messages[messages.length - 1]);
            }
        });
        this._webSocketStatusSubscription = this.authService.getWebSocketStatusObservable().subscribe(status => {
            this.webSocketStatus = status;
        });
        setTimeout(() => {
            this.openDelay = true;
        }, 5000);
    }
    ngOnDestroy() {
        if (this._hubsMessageSubscription) {
            this._hubsMessageSubscription.unsubscribe();
        }
        if (this._webSocketStatusSubscription) {
            this._webSocketStatusSubscription.unsubscribe();
        }
    }
    onFocus() {
        this.openDelay = false;
        setTimeout(() => {
            this.openDelay = true;
        }, 5000);
    }
}
HubsComponent.ɵfac = function HubsComponent_Factory(t) { return new (t || HubsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hubs_service__WEBPACK_IMPORTED_MODULE_1__["HubsService"])); };
HubsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HubsComponent, selectors: [["dexih-hubs"]], viewQuery: function HubsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dexihMessage = _t.first);
    } }, hostBindings: function HubsComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function HubsComponent_focus_HostBindingHandler($event) { return ctx.onFocus($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 6, vars: 1, consts: [["id", "content"], [4, "ngIf"], [1, "m-3"], ["DexihMessage", ""], [1, "alert", "alert-danger", "m-3"]], template: function HubsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HubsComponent_section_1_Template, 3, 1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "dexih-message", null, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.openDelay && ctx.webSocketStatus != "Connected");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _shared_ui_dexihMessage_dexih_message_component__WEBPACK_IMPORTED_MODULE_5__["DexihMessageComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HubsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dexih-hubs',
                templateUrl: './hubs.component.html'
            }]
    }], function () { return [{ type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _hubs_service__WEBPACK_IMPORTED_MODULE_1__["HubsService"] }]; }, { dexihMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['DexihMessage', { static: true }]
        }], onFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:focus', ['$event']]
        }] }); })();


/***/ }),

/***/ "./src/app/+hubs/hubs.module.ts":
/*!**************************************!*\
  !*** ./src/app/+hubs/hubs.module.ts ***!
  \**************************************/
/*! exports provided: HubsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HubsModule", function() { return HubsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _hubs_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hubs.routing */ "./src/app/+hubs/hubs.routing.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _hubs_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hubs.service */ "./src/app/+hubs/hubs.service.ts");
/* harmony import */ var _hubs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./hubs.component */ "./src/app/+hubs/hubs.component.ts");
/* harmony import */ var _hub_index_hub_index_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hub-index/hub-index.component */ "./src/app/+hubs/hub-index/hub-index.component.ts");
/* harmony import */ var _hub_edit_hub_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hub-edit/hub-edit.component */ "./src/app/+hubs/hub-edit/hub-edit.component.ts");
/* harmony import */ var _hubs_summary_hubs_summary_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./hubs-summary/hubs-summary.component */ "./src/app/+hubs/hubs-summary/hubs-summary.component.ts");
/* harmony import */ var _manage_manage_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./manage/manage.component */ "./src/app/+hubs/manage/manage.component.ts");
/* harmony import */ var _tasks_tasks_index__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tasks/tasks-index */ "./src/app/+hubs/tasks/tasks-index/index.ts");
/* harmony import */ var _tasks_task_status__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tasks/task-status */ "./src/app/+hubs/tasks/task-status/index.ts");
/* harmony import */ var _tasks_task_view__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tasks/task-view */ "./src/app/+hubs/tasks/task-view/index.ts");
/* harmony import */ var _notifications_notification_index__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./notifications/notification-index */ "./src/app/+hubs/notifications/notification-index/index.ts");
/* harmony import */ var _notifications_notification_view__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./notifications/notification-view */ "./src/app/+hubs/notifications/notification-view/index.ts");
/* harmony import */ var _remoteAgents_remote_agents_remote_agents_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./remoteAgents/remote-agents/remote-agents.component */ "./src/app/+hubs/remoteAgents/remote-agents/remote-agents.component.ts");
/* harmony import */ var _help__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./help */ "./src/app/+hubs/help/index.ts");
/* harmony import */ var _remoteAgents_remoteAgent_download__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./remoteAgents/remoteAgent-download */ "./src/app/+hubs/remoteAgents/remoteAgent-download/index.ts");
/* harmony import */ var _remoteAgents_remoteAgent_edit__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./remoteAgents/remoteAgent-edit */ "./src/app/+hubs/remoteAgents/remoteAgent-edit/index.ts");
/* harmony import */ var _remoteAgents_remote_agent_token_remote_agent_token_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./remoteAgents/remote-agent-token/remote-agent-token.component */ "./src/app/+hubs/remoteAgents/remote-agent-token/remote-agent-token.component.ts");
/* harmony import */ var _support__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./support */ "./src/app/+hubs/support/index.ts");
/* harmony import */ var _hub_hub_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../+hub/hub.service */ "./src/app/+hub/hub.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
























class HubsModule {
    static forRoot() {
        return {
            ngModule: HubsModule,
            providers: [_hubs_service__WEBPACK_IMPORTED_MODULE_4__["HubsService"], _hub_hub_service__WEBPACK_IMPORTED_MODULE_21__["HubService"]]
        };
    }
}
HubsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HubsModule });
HubsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HubsModule_Factory(t) { return new (t || HubsModule)(); }, providers: [_hubs_service__WEBPACK_IMPORTED_MODULE_4__["HubsService"], _hub_hub_service__WEBPACK_IMPORTED_MODULE_21__["HubService"]], imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _hubs_routing__WEBPACK_IMPORTED_MODULE_1__["Routing"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HubsModule, { declarations: [_hubs_component__WEBPACK_IMPORTED_MODULE_5__["HubsComponent"],
        _hub_index_hub_index_component__WEBPACK_IMPORTED_MODULE_6__["HubIndexComponent"],
        _hub_edit_hub_edit_component__WEBPACK_IMPORTED_MODULE_7__["HubEditComponent"],
        _hubs_summary_hubs_summary_component__WEBPACK_IMPORTED_MODULE_8__["HubsSummaryComponent"],
        _manage_manage_component__WEBPACK_IMPORTED_MODULE_9__["ManageComponent"],
        _tasks_tasks_index__WEBPACK_IMPORTED_MODULE_10__["TasksIndexComponent"],
        _tasks_task_status__WEBPACK_IMPORTED_MODULE_11__["TaskStatusComponent"],
        _tasks_task_view__WEBPACK_IMPORTED_MODULE_12__["TaskViewComponent"],
        _notifications_notification_index__WEBPACK_IMPORTED_MODULE_13__["NotificationsIndexComponent"],
        _notifications_notification_view__WEBPACK_IMPORTED_MODULE_14__["NotificationViewComponent"],
        _remoteAgents_remote_agents_remote_agents_component__WEBPACK_IMPORTED_MODULE_15__["RemoteAgentsComponent"],
        _remoteAgents_remoteAgent_download__WEBPACK_IMPORTED_MODULE_17__["RemoteAgentDownloadComponent"],
        _remoteAgents_remoteAgent_edit__WEBPACK_IMPORTED_MODULE_18__["RemoteAgentEditComponent"],
        _help__WEBPACK_IMPORTED_MODULE_16__["HelpComponent"],
        _remoteAgents_remote_agent_token_remote_agent_token_component__WEBPACK_IMPORTED_MODULE_19__["RemoteAgentTokenComponent"],
        _support__WEBPACK_IMPORTED_MODULE_20__["IssueEditComponent"], _support__WEBPACK_IMPORTED_MODULE_20__["IssueIndexComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HubsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                    _hubs_routing__WEBPACK_IMPORTED_MODULE_1__["Routing"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
                ],
                declarations: [
                    _hubs_component__WEBPACK_IMPORTED_MODULE_5__["HubsComponent"],
                    _hub_index_hub_index_component__WEBPACK_IMPORTED_MODULE_6__["HubIndexComponent"],
                    _hub_edit_hub_edit_component__WEBPACK_IMPORTED_MODULE_7__["HubEditComponent"],
                    _hubs_summary_hubs_summary_component__WEBPACK_IMPORTED_MODULE_8__["HubsSummaryComponent"],
                    _manage_manage_component__WEBPACK_IMPORTED_MODULE_9__["ManageComponent"],
                    _tasks_tasks_index__WEBPACK_IMPORTED_MODULE_10__["TasksIndexComponent"],
                    _tasks_task_status__WEBPACK_IMPORTED_MODULE_11__["TaskStatusComponent"],
                    _tasks_task_view__WEBPACK_IMPORTED_MODULE_12__["TaskViewComponent"],
                    _notifications_notification_index__WEBPACK_IMPORTED_MODULE_13__["NotificationsIndexComponent"],
                    _notifications_notification_view__WEBPACK_IMPORTED_MODULE_14__["NotificationViewComponent"],
                    _remoteAgents_remote_agents_remote_agents_component__WEBPACK_IMPORTED_MODULE_15__["RemoteAgentsComponent"],
                    _remoteAgents_remoteAgent_download__WEBPACK_IMPORTED_MODULE_17__["RemoteAgentDownloadComponent"],
                    _remoteAgents_remoteAgent_edit__WEBPACK_IMPORTED_MODULE_18__["RemoteAgentEditComponent"],
                    _help__WEBPACK_IMPORTED_MODULE_16__["HelpComponent"],
                    _remoteAgents_remote_agent_token_remote_agent_token_component__WEBPACK_IMPORTED_MODULE_19__["RemoteAgentTokenComponent"],
                    _support__WEBPACK_IMPORTED_MODULE_20__["IssueEditComponent"], _support__WEBPACK_IMPORTED_MODULE_20__["IssueIndexComponent"]
                ],
                providers: [_hubs_service__WEBPACK_IMPORTED_MODULE_4__["HubsService"], _hub_hub_service__WEBPACK_IMPORTED_MODULE_21__["HubService"]],
                exports: []
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/+hubs/hubs.routing.ts":
/*!***************************************!*\
  !*** ./src/app/+hubs/hubs.routing.ts ***!
  \***************************************/
/*! exports provided: routes, Routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routing", function() { return Routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _hubs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hubs.component */ "./src/app/+hubs/hubs.component.ts");
/* harmony import */ var _hub_index_hub_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hub-index/hub-index.component */ "./src/app/+hubs/hub-index/hub-index.component.ts");
/* harmony import */ var _hub_edit_hub_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hub-edit/hub-edit.component */ "./src/app/+hubs/hub-edit/hub-edit.component.ts");
/* harmony import */ var _hubs_summary_hubs_summary_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hubs-summary/hubs-summary.component */ "./src/app/+hubs/hubs-summary/hubs-summary.component.ts");
/* harmony import */ var _manage_manage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manage/manage.component */ "./src/app/+hubs/manage/manage.component.ts");
/* harmony import */ var _tasks_tasks_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tasks/tasks-index */ "./src/app/+hubs/tasks/tasks-index/index.ts");
/* harmony import */ var _tasks_task_view__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tasks/task-view */ "./src/app/+hubs/tasks/task-view/index.ts");
/* harmony import */ var _notifications_notification_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./notifications/notification-index */ "./src/app/+hubs/notifications/notification-index/index.ts");
/* harmony import */ var _notifications_notification_view__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./notifications/notification-view */ "./src/app/+hubs/notifications/notification-view/index.ts");
/* harmony import */ var _shared_ui_sharedData__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../shared/ui/sharedData */ "./src/app/shared/ui/sharedData/index.ts");
/* harmony import */ var _remoteAgents_remote_agents_remote_agents_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./remoteAgents/remote-agents/remote-agents.component */ "./src/app/+hubs/remoteAgents/remote-agents/remote-agents.component.ts");
/* harmony import */ var _help__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./help */ "./src/app/+hubs/help/index.ts");
/* harmony import */ var _remoteAgents_remoteAgent_download__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./remoteAgents/remoteAgent-download */ "./src/app/+hubs/remoteAgents/remoteAgent-download/index.ts");
/* harmony import */ var _remoteAgents_remoteAgent_edit__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./remoteAgents/remoteAgent-edit */ "./src/app/+hubs/remoteAgents/remoteAgent-edit/index.ts");
/* harmony import */ var _remoteAgents_remote_agent_token_remote_agent_token_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./remoteAgents/remote-agent-token/remote-agent-token.component */ "./src/app/+hubs/remoteAgents/remote-agent-token/remote-agent-token.component.ts");
/* harmony import */ var _support__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./support */ "./src/app/+hubs/support/index.ts");

















const hubsView = [
    { path: '', component: _hub_index_hub_index_component__WEBPACK_IMPORTED_MODULE_2__["HubIndexComponent"], data: { pageTitle: 'Hubs View' } },
    { path: 'hub-edit/:hubKey', component: _hub_edit_hub_edit_component__WEBPACK_IMPORTED_MODULE_3__["HubEditComponent"], data: { action: 'Edit', pageTitle: 'Edit Hub' } },
    { path: 'hub-new', component: _hub_edit_hub_edit_component__WEBPACK_IMPORTED_MODULE_3__["HubEditComponent"], data: { action: 'New', pageTitle: 'New Hub' } },
];
// create a set of routes available from the "hubs" section.
const baseRoutes = [
    { path: 'manage', component: _manage_manage_component__WEBPACK_IMPORTED_MODULE_5__["ManageComponent"], data: { pageTitle: 'Manage' } },
    { path: 'sharedData', data: { pageTitle: 'Shared Data' }, children: [
            { path: '', component: _shared_ui_sharedData__WEBPACK_IMPORTED_MODULE_10__["SharedDataComponent"], data: { pageTitle: 'Shared Data' } },
            { path: 'preview/:hubKey/:objectType/:objectKey', component: _shared_ui_sharedData__WEBPACK_IMPORTED_MODULE_10__["PreviewComponent"], data: { pageTitle: 'Preview' } },
            { path: 'previewDashboard/:hubKey/:dashboardKey', component: _shared_ui_sharedData__WEBPACK_IMPORTED_MODULE_10__["PreviewDashboardComponent"], data: { pageTitle: 'Preview Dashboard' } },
        ] },
    { path: 'tasks', data: { pageTitle: 'Tasks' }, children: [
            { path: '', component: _tasks_tasks_index__WEBPACK_IMPORTED_MODULE_6__["TasksIndexComponent"], data: { pageTitle: 'Tasks' } },
            { path: 'view/:reference', component: _tasks_task_view__WEBPACK_IMPORTED_MODULE_7__["TaskViewComponent"], data: { pageTitle: 'Task' } },
        ] },
    { path: 'notifications', data: { pageTitle: 'Notifications' }, children: [
            { path: '', component: _notifications_notification_index__WEBPACK_IMPORTED_MODULE_8__["NotificationsIndexComponent"], data: { pageTitle: 'Notifications' } },
            { path: 'view/:reference', component: _notifications_notification_view__WEBPACK_IMPORTED_MODULE_9__["NotificationViewComponent"], data: { pageTitle: 'Notification' } },
        ] },
    { path: 'support', data: { pageTitle: 'Issues' }, children: [
            { path: '', component: _support__WEBPACK_IMPORTED_MODULE_16__["IssueIndexComponent"], data: { pageTitle: 'Issues' } },
            { path: 'new', component: _support__WEBPACK_IMPORTED_MODULE_16__["IssueEditComponent"], data: { action: 'new', pageTitle: 'Create' } },
            { path: 'edit/:issueKey', component: _support__WEBPACK_IMPORTED_MODULE_16__["IssueEditComponent"], data: { action: 'edit', pageTitle: 'Edit' } },
        ] },
    { path: 'agents', data: { pageTitle: 'Remote Agents' }, children: [
            { path: '', component: _remoteAgents_remote_agents_remote_agents_component__WEBPACK_IMPORTED_MODULE_11__["RemoteAgentsComponent"], data: { pageTitle: 'Remote Agents' } },
            { path: 'edit/:remoteAgentKey', component: _remoteAgents_remoteAgent_edit__WEBPACK_IMPORTED_MODULE_14__["RemoteAgentEditComponent"], data: { pageTitle: 'Remote Edit' } },
            { path: 'download', component: _remoteAgents_remoteAgent_download__WEBPACK_IMPORTED_MODULE_13__["RemoteAgentDownloadComponent"], data: { pageTitle: 'Download Agent' } },
            { path: 'token-new', component: _remoteAgents_remote_agent_token_remote_agent_token_component__WEBPACK_IMPORTED_MODULE_15__["RemoteAgentTokenComponent"], data: { action: 'New', pageTitle: 'New Token' } },
            { path: 'token-renew/:remoteAgentKey', component: _remoteAgents_remote_agent_token_remote_agent_token_component__WEBPACK_IMPORTED_MODULE_15__["RemoteAgentTokenComponent"], data: { action: 'Renew', pageTitle: 'Renew Token' } }
        ] },
    { path: 'help', component: _help__WEBPACK_IMPORTED_MODULE_12__["HelpComponent"], data: { pageTitle: 'Help' } },
    { path: '', children: hubsView }
];
// insert the "hubs" routes once for the base, and once under the summary section to ensure the
// breadcrumbs are accurate.
const routes = [
    {
        path: '', component: _hubs_component__WEBPACK_IMPORTED_MODULE_1__["HubsComponent"],
        children: [
            { path: '', redirectTo: 'index' },
            { path: 'index', data: { pageTitle: 'Hubs' }, children: [
                    { path: '', component: _hubs_summary_hubs_summary_component__WEBPACK_IMPORTED_MODULE_4__["HubsSummaryComponent"], data: { pageTitle: 'Hubs Summary' } },
                    { path: 'hubs-view', data: { pageTitle: 'Hubs View' }, children: hubsView },
                    { path: '', children: baseRoutes }
                ] },
            { path: '', children: baseRoutes }
        ]
    }
];
const Routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "./src/app/+hubs/manage/manage.component.ts":
/*!**************************************************!*\
  !*** ./src/app/+hubs/manage/manage.component.ts ***!
  \**************************************************/
/*! exports provided: ManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageComponent", function() { return ManageComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../+auth/auth.service */ "./src/app/+auth/auth.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_forms_forms_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/forms/forms.service */ "./src/app/shared/forms/forms.service.ts");
/* harmony import */ var _auth_auth_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../+auth/auth.models */ "./src/app/+auth/auth.models.ts");
/* harmony import */ var _shared_ui_dexihMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/ui/dexihMessage */ "./src/app/shared/ui/dexihMessage/index.ts");
/* harmony import */ var _shared_shared_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/shared.models */ "./src/app/shared/shared.models.ts");
/* harmony import */ var _shared_ui_dexihMessage_dexih_message_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/ui/dexihMessage/dexih-message.component */ "./src/app/shared/ui/dexihMessage/dexih-message.component.ts");
/* harmony import */ var ngx_d_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-d-components */ "./node_modules/ngx-d-components/__ivy_ngcc__/fesm2015/ngx-d-components.js");

















const _c0 = ["DexihMessage"];
function ManageComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "d-button-save", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManageComponent_ng_template_5_Template_d_button_save_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r12.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "d-button-cancel", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManageComponent_ng_template_5_Template_d_button_cancel_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r14.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("busy", ctx_r2.formsService.formSaving)("disabled", ctx_r2.formsService.formSaving || !ctx_r2.formsService.hasChanged);
} }
function ManageComponent_form_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "form-input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "form-input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "section", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "form-input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "section", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "form-input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "form-checkbox", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "form-checkbox", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "form-checkbox", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r3.formsService.currentForm);
} }
function ManageComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "d-button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Forgot Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "d-button-save", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManageComponent_ng_template_9_Template_d_button_save_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r15.updatePassword(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Update Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r5.passwordForm.valid)("busy", ctx_r5.updatingPassword);
} }
function ManageComponent_form_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "form-input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "form-input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "form-input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r6.passwordForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("errors", ctx_r6.passwordMatchError);
} }
function ManageComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "d-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManageComponent_ng_template_13_Template_d_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.microsoftLogin(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Add Microsoft");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "d-button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManageComponent_ng_template_13_Template_d_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.googleLogin(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Add Google");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ManageComponent_li_16_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "d-button-delete", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManageComponent_li_16_Template_d_button_delete_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r22); const login_r20 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.deleteLogin(login_r20); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const login_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](login_r20.providerDisplayName);
} }
function ManageComponent_section_17_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "d-button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManageComponent_section_17_Template_d_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r23.googleLogin(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Google could not automatically sign-in due to \"", ctx_r10.googleMessage, "\". Click login button to open new window to login to your google account. ");
} }
function ManageComponent_section_18_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "d-button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ManageComponent_section_18_Template_d_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r25.microsoftLogin(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Microsoft could not automatically sign-in due to \"", ctx_r11.microsoftMessage, "\". Click login button to open new window to login to your microsoft account. ");
} }
class ManageComponent {
    constructor(authService, formsService, fb, route, router, location) {
        this.authService = authService;
        this.formsService = formsService;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.location = location;
        this.updatingPassword = false;
        this.passwordMatchError = '';
        this.passwordStrengthError = '';
        this.googleMessage = false;
        this.microsoftMessage = false;
    }
    ngOnInit() {
        this._userSubscription = this.authService.getUserObservable().subscribe(user => {
            this.formsService.createDefault(user, new _auth_auth_models__WEBPACK_IMPORTED_MODULE_6__["User"]());
            this.updateLogins();
            this.formsService.currentForm.controls.email.disable();
            // this.formsService.currentForm.controls.userName.disable();
            this.passwordForm = this.fb.group({
                'password': ['', []],
                'newPassword': ['', [
                        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required,
                        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].minLength(8),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(20),
                        _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,}$')
                    ]],
                'confirmPassword': ['', [
                        this.duplicatePasswordValidator()
                    ]],
            });
        });
    }
    ngOnDestroy() {
        if (this._userSubscription) {
            this._userSubscription.unsubscribe();
        }
    }
    updateLogins() {
        this.authService.getLoginProviders().then(result => {
            this.logins = result;
        });
    }
    duplicatePasswordValidator() {
        return (control) => {
            if (this.passwordForm) {
                let form = this.passwordForm;
                if (form.controls.confirmPassword.dirty && form.controls.newPassword.value !== form.controls.confirmPassword.value) {
                    this.passwordMatchError = 'The passwords do not match';
                    return { 'passwordMatch': {} };
                }
                else {
                    this.passwordMatchError = '';
                    return null;
                }
            }
        };
    }
    updatePassword() {
        this.updatingPassword = true;
        this.authService.changePassword(this.passwordForm.controls.password.value, this.passwordForm.controls.newPassword.value)
            .then(result => {
            this.updatingPassword = false;
            this.dexihMessage.addSuccessMessage('The password change was successful.');
        }).catch(reason => {
            this.dexihMessage.addMessage(reason);
            this.updatingPassword = false;
        });
    }
    save() {
        const user = this.formsService.currentForm.value;
        this.authService.updateUserDetails(user).then(c => {
            if (c) {
                this.dexihMessage.addSuccessMessage('Details updated successfully');
            }
            else {
            }
        }).catch(reason => {
            this.dexihMessage.addMessage(reason);
        });
    }
    cancel() {
        this.authService.navigateUp();
    }
    googleLogin(forceLogin) {
        this.dexihMessage.reset();
        this.authService.googleSignIn(forceLogin).then(result => {
            this.authService.addExternalLogin(_shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["eLoginProvider"].Google, result.providerKey, result.authenticationToken).then(loginResult => {
                this.updateLogins();
            }).catch(reason => {
                this.dexihMessage.addMessage(reason);
            });
        }).catch(reason => {
            this.googleMessage = reason;
            this.dexihMessage.addErrorMessage(reason);
        });
    }
    microsoftLogin(forceLogin) {
        this.dexihMessage.reset();
        this.authService.microsoftSignIn(forceLogin).then(result => {
            this.authService.addExternalLogin(_shared_shared_models__WEBPACK_IMPORTED_MODULE_8__["eLoginProvider"].Microsoft, result.providerKey, result.authenticationToken).then(loginResult => {
                this.updateLogins();
            }).catch(reason => {
                this.dexihMessage.addMessage(reason);
            });
        }).catch(reason => {
            this.microsoftMessage = reason;
            this.dexihMessage.addErrorMessage(reason);
        });
    }
    deleteLogin(login) {
        this.authService.removeExternalLogin(login.loginProvider, login.providerKey);
    }
}
ManageComponent.ɵfac = function ManageComponent_Factory(t) { return new (t || ManageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_forms_forms_service__WEBPACK_IMPORTED_MODULE_5__["FormsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"])); };
ManageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ManageComponent, selectors: [["manage-form"]], viewQuery: function ManageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.dexihMessage = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_shared_forms_forms_service__WEBPACK_IMPORTED_MODULE_5__["FormsService"]])], decls: 19, vars: 8, consts: [[1, "container"], ["DexihMessage", ""], ["title", "User Details", "iconClass", "fa fa-lg fa-fw fa-user", 3, "padding"], ["header", ""], [3, "formGroup", 4, "ngIf"], ["title", "Reset Password", "iconClass", "fa fa-lg fa-fw fa-lock", 3, "padding"], ["title", "Logins", "subTitle", "The following login providers are available", "iconClass", "fa fa-lg fa-fw fa-life-saver", 3, "padding"], ["subHeader", ""], [1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "mr-1", 3, "busy", "disabled", "click"], [3, "click"], [3, "formGroup"], [1, "form-row"], [1, "col-md-6"], ["label", "User Name", "formControlName", "userName", "placeholder", "Enter the user name.", "iconClass", "fa fa-list"], ["label", "Email Address", "formControlName", "email", "placeholder", "Enter the email.", "iconClass", "fa fa-list"], [1, "form-group", "col-md-6"], ["label", "First Name", "formControlName", "firstName", "placeholder", "First Name"], ["label", "Last Name", "formControlName", "lastName", "placeholder", "Last Name"], ["label", "I want to receive news and special offers", "formControlName", "subscription"], ["label", "I want to receive private notifications from other users.", "formControlName", "notifyPrivateMessage"], ["label", "I want to receive critical support and issue updates.", "formControlName", "notifySupportMessage"], ["iconClass", "fa fa-key", "btnClass", "btn btn-danger", "routerLink", "/auth/forgot-password", 1, "mr-1"], [3, "disabled", "busy", "click"], ["label", "Current Password", "formControlName", "password", "type", "password"], ["label", "New Password", "formControlName", "newPassword", "type", "password"], ["label", "Confirm New Password", "formControlName", "confirmPassword", "type", "password", 3, "errors"], ["buttonClass", "btn btn-primary", "iconClass", "fa fa-windows", 1, "mr-1", 3, "click"], ["buttonClass", "btn btn-danger", "iconClass", "fa fa-google", 3, "click"], [1, "list-group-item"], [1, "float-right"], ["title", "Remove the following login", 3, "click"], [1, "alert", "alert-danger"], ["buttonClass", "btn btn-danger", "iconClass", "fa fa-google", "text", "Google Login", 3, "click"], ["buttonClass", "btn btn-primary", "iconClass", "fa fa-microsoft", "text", "Microsoft Login", 3, "click"]], template: function ManageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "dexih-message", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "d-widget-vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "d-widget", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ManageComponent_ng_template_5_Template, 2, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ManageComponent_form_7_Template, 18, 1, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "d-widget", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, ManageComponent_ng_template_9_Template, 4, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, ManageComponent_form_11_Template, 8, 2, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "d-widget", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ManageComponent_ng_template_13_Template, 4, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, ManageComponent_li_16_Template, 5, 1, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, ManageComponent_section_17_Template, 4, 1, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ManageComponent_section_18_Template, 4, 1, "section", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("padding", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.formsService.currentForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("padding", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.passwordForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("padding", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.logins);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.googleMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.microsoftMessage);
    } }, directives: [_shared_ui_dexihMessage_dexih_message_component__WEBPACK_IMPORTED_MODULE_9__["DexihMessageComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_10__["DWidgetVerticalComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_10__["DWidgetComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], ngx_d_components__WEBPACK_IMPORTED_MODULE_10__["DButtonSaveComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_10__["DButtonCancelComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], ngx_d_components__WEBPACK_IMPORTED_MODULE_10__["DFormInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], ngx_d_components__WEBPACK_IMPORTED_MODULE_10__["DFormCheckboxComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_10__["DButtonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], ngx_d_components__WEBPACK_IMPORTED_MODULE_10__["DButtonDeleteComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ManageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'manage-form',
                templateUrl: './manage.component.html',
                providers: [_shared_forms_forms_service__WEBPACK_IMPORTED_MODULE_5__["FormsService"]]
            }]
    }], function () { return [{ type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _shared_forms_forms_service__WEBPACK_IMPORTED_MODULE_5__["FormsService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }]; }, { dexihMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['DexihMessage', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/+hubs/notifications/notification-index/index.ts":
/*!*****************************************************************!*\
  !*** ./src/app/+hubs/notifications/notification-index/index.ts ***!
  \*****************************************************************/
/*! exports provided: NotificationsIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _notification_index_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification-index.component */ "./src/app/+hubs/notifications/notification-index/notification-index.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationsIndexComponent", function() { return _notification_index_component__WEBPACK_IMPORTED_MODULE_0__["NotificationsIndexComponent"]; });




/***/ }),

/***/ "./src/app/+hubs/notifications/notification-index/notification-index.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/+hubs/notifications/notification-index/notification-index.component.ts ***!
  \****************************************************************************************/
/*! exports provided: NotificationsIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationsIndexComponent", function() { return NotificationsIndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../+auth/auth.service */ "./src/app/+auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var ngx_d_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-d-components */ "./node_modules/ngx-d-components/__ivy_ngcc__/fesm2015/ngx-d-components.js");
/* harmony import */ var ngx_d_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-d-table */ "./node_modules/ngx-d-table/__ivy_ngcc__/fesm2015/ngx-d-table.js");









function NotificationsIndexComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button-view", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationsIndexComponent_ng_template_3_Template_d_button_view_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const task_r2 = ctx.item; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.showMessage(task_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NotificationsIndexComponent {
    constructor(authService, router, route) {
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.showPage = false;
        this.showPageMessage = 'Loading...';
        this.columns = [
            { name: 'success', title: 'Success', format: '' },
            { name: 'message', title: 'Message', format: '' },
            { name: 'value', title: 'Value', format: '' },
        ];
        this._tableData = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.tableData = this._tableData.asObservable();
    }
    ngOnInit() {
        this.notifications = this.authService.getNotifications();
    }
    ngOnDestroy() {
    }
    showMessage(message) {
        this.router.navigate(['view', message.reference], { relativeTo: this.route });
    }
    close() {
        this.authService.navigateUp();
    }
}
NotificationsIndexComponent.ɵfac = function NotificationsIndexComponent_Factory(t) { return new (t || NotificationsIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
NotificationsIndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotificationsIndexComponent, selectors: [["notification-index"]], decls: 5, vars: 6, consts: [[1, "container-fluid"], ["title", "Notifications", "iconClass", "fa fa-lg fa-fw fa-exchange", 3, "showCloseButton", "close"], [3, "enableMultiSelect", "enableStickyToolbar", "toolbarZIndex", "columns", "data", "rowClick"], ["select", "selectedItemAction"], ["selectedItemAction", ""], [3, "click"]], template: function NotificationsIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "d-widget", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function NotificationsIndexComponent_Template_d_widget_close_1_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "d-table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rowClick", function NotificationsIndexComponent_Template_d_table_rowClick_2_listener($event) { return ctx.showMessage($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NotificationsIndexComponent_ng_template_3_Template, 1, 0, "ng-template", 3, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showCloseButton", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("enableMultiSelect", true)("enableStickyToolbar", true)("toolbarZIndex", 100)("columns", ctx.columns)("data", ctx.notifications);
    } }, directives: [ngx_d_components__WEBPACK_IMPORTED_MODULE_4__["DWidgetComponent"], ngx_d_table__WEBPACK_IMPORTED_MODULE_5__["DTableComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_4__["DButtonViewComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationsIndexComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'notification-index',
                templateUrl: './notification-index.component.html',
                styles: []
            }]
    }], function () { return [{ type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/+hubs/notifications/notification-view/index.ts":
/*!****************************************************************!*\
  !*** ./src/app/+hubs/notifications/notification-view/index.ts ***!
  \****************************************************************/
/*! exports provided: NotificationViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _notification_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./notification-view.component */ "./src/app/+hubs/notifications/notification-view/notification-view.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NotificationViewComponent", function() { return _notification_view_component__WEBPACK_IMPORTED_MODULE_0__["NotificationViewComponent"]; });




/***/ }),

/***/ "./src/app/+hubs/notifications/notification-view/notification-view.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/+hubs/notifications/notification-view/notification-view.component.ts ***!
  \**************************************************************************************/
/*! exports provided: NotificationViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationViewComponent", function() { return NotificationViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../+auth/auth.service */ "./src/app/+auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_d_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-d-components */ "./node_modules/ngx-d-components/__ivy_ngcc__/fesm2015/ngx-d-components.js");









function NotificationViewComponent_d_widget_1_section_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.message.exceptionDetails);
} }
function NotificationViewComponent_d_widget_1_section_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NotificationViewComponent_d_widget_1_section_1_div_3_Template, 4, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("alert-danger", ctx_r1.message.success == false)("alert-success", ctx_r1.message.success == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.message.message, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.message.exceptionDetails && ctx_r1.message.message != ctx_r1.message.exceptionDetails);
} }
function NotificationViewComponent_d_widget_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-widget", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function NotificationViewComponent_d_widget_1_Template_d_widget_close_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotificationViewComponent_d_widget_1_section_1_Template, 4, 6, "section", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showCloseButton", true)("padding", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.message);
} }
class NotificationViewComponent {
    constructor(authService, router, route) {
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.showPage = false;
        this.showPageMessage = 'Loading...';
        this.exceptionHidden = true;
    }
    ngOnInit() {
        this.watchChanges();
        try {
            this._subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(this.route.params).subscribe(result => {
                let params = result[0];
                let reference = params['reference'];
                this.showPage = false;
                this.showPageMessage = 'Loading...';
                this.message = this.authService.getNotification(reference);
                if (!this.message) {
                    this.authService.navigateUp();
                }
            });
        }
        catch (e) {
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
    watchChanges() {
    }
}
NotificationViewComponent.ɵfac = function NotificationViewComponent_Factory(t) { return new (t || NotificationViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
NotificationViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotificationViewComponent, selectors: [["notification-view"]], decls: 2, vars: 1, consts: [[1, "container-fluid"], ["title", "Notification", "iconClass", "fa fa-lg fa-fw fa-bell", 3, "showCloseButton", "padding", "close", 4, "ngIf"], ["title", "Notification", "iconClass", "fa fa-lg fa-fw fa-bell", 3, "showCloseButton", "padding", "close"], [4, "ngIf"], [1, "alert", "clearfix"]], template: function NotificationViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NotificationViewComponent_d_widget_1_Template, 2, 3, "d-widget", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], ngx_d_components__WEBPACK_IMPORTED_MODULE_5__["DWidgetComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'notification-view',
                templateUrl: './notification-view.component.html',
                styles: []
            }]
    }], function () { return [{ type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/+hubs/remoteAgents/remote-agent-token/remote-agent-token.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/+hubs/remoteAgents/remote-agent-token/remote-agent-token.component.ts ***!
  \***************************************************************************************/
/*! exports provided: RemoteAgentTokenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoteAgentTokenComponent", function() { return RemoteAgentTokenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../+auth/auth.service */ "./src/app/+auth/auth.service.ts");
/* harmony import */ var _shared_forms_forms_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/forms/forms.service */ "./src/app/shared/forms/forms.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _hubs_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hubs.service */ "./src/app/+hubs/hubs.service.ts");
/* harmony import */ var _shared_ui_dexihMessage_dexih_message_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/ui/dexihMessage/dexih-message.component */ "./src/app/shared/ui/dexihMessage/dexih-message.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_d_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-d-components */ "./node_modules/ngx-d-components/__ivy_ngcc__/fesm2015/ngx-d-components.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};














function RemoteAgentTokenComponent_div_2_ng_template_2_label_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "A new remote agent token has been generated. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RemoteAgentTokenComponent_div_2_ng_template_2_label_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "The token for this user/remote id has been renewed. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RemoteAgentTokenComponent_div_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RemoteAgentTokenComponent_div_2_ng_template_2_label_0_Template, 2, 0, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RemoteAgentTokenComponent_div_2_ng_template_2_label_1_Template, 2, 0, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Ensure this token is kept safe and secure. It cannot be viewed again. If it is lost or compromised, a new token should be created. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.action == "New");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.action == "ReNew");
} }
function RemoteAgentTokenComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "d-widget", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function RemoteAgentTokenComponent_div_2_Template_d_widget_close_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RemoteAgentTokenComponent_div_2_ng_template_2_Template, 4, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form-textarea", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RemoteAgentTokenComponent_div_2_Template_form_textarea_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.remoteToken.user = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form-textarea", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RemoteAgentTokenComponent_div_2_Template_form_textarea_ngModelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.remoteToken.remoteAgentId = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form-textarea", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RemoteAgentTokenComponent_div_2_Template_form_textarea_ngModelChange_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.remoteToken.userToken = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "form-textarea", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RemoteAgentTokenComponent_div_2_Template_form_textarea_ngModelChange_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.appSettings = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("padding", true)("showCloseButton", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showCopy", true)("showPreview", false)("hideToggle", true)("disabled", true)("ngModel", ctx_r1.remoteToken.user);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showCopy", true)("showPreview", false)("hideToggle", true)("disabled", true)("ngModel", ctx_r1.remoteToken.remoteAgentId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showCopy", true)("showPreview", false)("hideToggle", true)("disabled", true)("ngModel", ctx_r1.remoteToken.userToken);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showCopy", true)("showPreview", false)("hideToggle", true)("disabled", true)("ngModel", ctx_r1.appSettings);
} }
class RemoteAgentTokenComponent {
    constructor(route, hubsService, authService) {
        this.route = route;
        this.hubsService = hubsService;
        this.authService = authService;
    }
    ngOnInit() {
        this._subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])(this.route.data, this.route.params).subscribe((result) => __awaiter(this, void 0, void 0, function* () {
            let data = result[0];
            let params = result[1];
            this.action = data.action;
            let promise;
            if (data.action === 'New') {
                promise = this.authService.createRemoteAgent();
            }
            else {
                const remoteAgentKey = +params['remoteAgentKey'];
                promise = this.authService.refreshRemoteAgentToken(remoteAgentKey);
            }
            promise.then(remoteToken => {
                this.remoteToken = remoteToken;
                this.updateAppSettings();
            }).catch(reason => {
                this.hubsService.addHubMessage(reason);
                this.authService.navigateUp();
            });
        }));
    }
    updateAppSettings() {
        this.appSettings = `"RemoteAgentId": "${this.remoteToken.remoteAgentId}",
"User": "${this.remoteToken.user}",
"UserToken": "${this.remoteToken.userToken}",
`;
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
RemoteAgentTokenComponent.ɵfac = function RemoteAgentTokenComponent_Factory(t) { return new (t || RemoteAgentTokenComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hubs_service__WEBPACK_IMPORTED_MODULE_5__["HubsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
RemoteAgentTokenComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RemoteAgentTokenComponent, selectors: [["remote-agent-token"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_shared_forms_forms_service__WEBPACK_IMPORTED_MODULE_2__["FormsService"]])], decls: 3, vars: 1, consts: [["DexihMessage", ""], ["class", "container", 4, "ngIf"], [1, "container"], ["title", "New Agent Token", "iconClass", "fa fa-lg fa-fw fa-wifi", 3, "padding", "showCloseButton", "close"], ["subHeader", ""], ["rows", "1", "label", "User", 3, "showCopy", "showPreview", "hideToggle", "disabled", "ngModel", "ngModelChange"], ["rows", "1", "label", "RemoteAgentId", 3, "showCopy", "showPreview", "hideToggle", "disabled", "ngModel", "ngModelChange"], ["rows", "4", "label", "UserToken", 3, "showCopy", "showPreview", "hideToggle", "disabled", "ngModel", "ngModelChange"], ["rows", "4", "label", "AppSettings Content", "note", "Copy this section over the existing items in the AppSettings section of the appsettings.json configuration file for your remote agent.", 3, "showCopy", "showPreview", "hideToggle", "disabled", "ngModel", "ngModelChange"], ["class", "label", 4, "ngIf"], [1, "alert", "alert-info"], [1, "label"]], template: function RemoteAgentTokenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dexih-message", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RemoteAgentTokenComponent_div_2_Template, 12, 22, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.remoteToken);
    } }, directives: [_shared_ui_dexihMessage_dexih_message_component__WEBPACK_IMPORTED_MODULE_6__["DexihMessageComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], ngx_d_components__WEBPACK_IMPORTED_MODULE_8__["DWidgetComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_8__["DFormTextAreaComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RemoteAgentTokenComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'remote-agent-token',
                templateUrl: './remote-agent-token.component.html',
                providers: [_shared_forms_forms_service__WEBPACK_IMPORTED_MODULE_2__["FormsService"]]
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _hubs_service__WEBPACK_IMPORTED_MODULE_5__["HubsService"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/+hubs/remoteAgents/remote-agents/remote-agents.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/+hubs/remoteAgents/remote-agents/remote-agents.component.ts ***!
  \*****************************************************************************/
/*! exports provided: RemoteAgentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoteAgentsComponent", function() { return RemoteAgentsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _hubs_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hubs.service */ "./src/app/+hubs/hubs.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../+auth/auth.service */ "./src/app/+auth/auth.service.ts");
/* harmony import */ var _shared_shared_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/shared.models */ "./src/app/shared/shared.models.ts");
/* harmony import */ var _auth_auth_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../+auth/auth.models */ "./src/app/+auth/auth.models.ts");
/* harmony import */ var ngx_d_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-d-components */ "./node_modules/ngx-d-components/__ivy_ngcc__/fesm2015/ngx-d-components.js");
/* harmony import */ var ngx_d_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-d-table */ "./node_modules/ngx-d-table/__ivy_ngcc__/fesm2015/ngx-d-table.js");
/* harmony import */ var _shared_help_dexih_help_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/help/dexih-help.component */ "./src/app/shared/help/dexih-help.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");















function RemoteAgentsComponent_ng_template_3_Template(rf, ctx) { }
function RemoteAgentsComponent_ng_template_5_Template(rf, ctx) { }
const _c0 = function (a1) { return ["edit", a1]; };
const _c1 = function (a1) { return ["token-renew", a1]; };
function RemoteAgentsComponent_ng_template_7_d_button_dropdown_0_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Refresh Token");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const items_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).items;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, items_r10[0].remoteAgentKey));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, items_r10[0].remoteAgentKey));
} }
function RemoteAgentsComponent_ng_template_7_d_button_dropdown_0_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RemoteAgentsComponent_ng_template_7_d_button_dropdown_0_ng_template_10_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const items_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).items; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.test(items_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Test");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RemoteAgentsComponent_ng_template_7_d_button_dropdown_0_ng_template_10_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const items_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).items; const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.restartAgents(items_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Restart");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RemoteAgentsComponent_ng_template_7_d_button_dropdown_0_ng_template_10_Template_a_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const items_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).items; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.removeUserTokens(items_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Revoke Tokens");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c2 = function () { return ["token-new"]; };
const _c3 = function () { return ["download"]; };
function RemoteAgentsComponent_ng_template_7_d_button_dropdown_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button-dropdown", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " New Token");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " New Agent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RemoteAgentsComponent_ng_template_7_d_button_dropdown_0_ng_template_9_Template, 8, 6, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RemoteAgentsComponent_ng_template_7_d_button_dropdown_0_ng_template_10_Template, 13, 0, "ng-template", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const items_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().items;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", items_r10.length > 1 ? "Agents" : "Agent");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", items_r10.length == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", items_r10.length > 0);
} }
function RemoteAgentsComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RemoteAgentsComponent_ng_template_7_d_button_dropdown_0_Template, 11, 7, "d-button-dropdown", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "d-button-refresh", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RemoteAgentsComponent_ng_template_7_Template_d_button_refresh_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r23.refresh(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const items_r10 = ctx.items;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", items_r10 && items_r10.length >= 0);
} }
function RemoteAgentsComponent_ng_template_9_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RemoteAgentsComponent_ng_template_9_button_0_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const item_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().item; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.test([item_r25]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "test");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RemoteAgentsComponent_ng_template_9_div_2_button_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Failed");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const url_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", url_r31.testMessage);
} }
function RemoteAgentsComponent_ng_template_9_div_2_button_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Success");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const url_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", url_r31.testMessage);
} }
function RemoteAgentsComponent_ng_template_9_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Open");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RemoteAgentsComponent_ng_template_9_div_2_button_4_Template, 2, 1, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RemoteAgentsComponent_ng_template_9_div_2_button_5_Template, 2, 1, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const url_r31 = ctx.$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r27.eDownloadUrlType[url_r31.downloadUrlType], ": ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", url_r31.url + "/ping", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", url_r31.testStatus == "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", url_r31.testStatus == "success");
} }
function RemoteAgentsComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, RemoteAgentsComponent_ng_template_9_button_0_Template, 2, 0, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RemoteAgentsComponent_ng_template_9_div_2_Template, 6, 4, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r25 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r25.downloadUrls == null ? null : item_r25.downloadUrls.length) > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r25.downloadUrls);
} }
class RemoteAgentsComponent {
    constructor(hubsService, authService, hubService, router, route) {
        this.hubsService = hubsService;
        this.authService = authService;
        this.hubService = hubService;
        this.router = router;
        this.route = route;
        this.columns = [
            { name: 'name', title: 'Name', format: '' },
            { name: 'connected', title: 'Status', format: 'Text', footer: 'ipAddress' },
            // { name: 'remoteAgentId', title: 'Remote Agent Id', format: ''},
            { name: 'user', title: 'Owner', format: '' },
            { name: 'version', footer: 'latestVersion', title: 'Version', format: 'Md', class: 'versionClass', tooltip: 'versionTooltip' },
            // { name: 'lastLoginIpAddress', title: 'Last Ip', format: ''},
            { name: 'lastLoginDateTime', title: 'Last Login', format: 'Calendar' },
        ];
        this._tableData = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.tableData = this._tableData.asObservable();
        this.eDownloadUrlType = _shared_shared_models__WEBPACK_IMPORTED_MODULE_5__["eDownloadUrlType"];
        this.cancelToken = new _auth_auth_models__WEBPACK_IMPORTED_MODULE_6__["CancelToken"]();
    }
    ngOnInit() {
        this._subscription = this.authService.getRemoteAgentsObservable().subscribe(remoteAgents => {
            if (remoteAgents) {
                this.remoteAgents = remoteAgents;
                this.refreshData();
            }
        });
    }
    ngOnDestroy() {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
        this.cancelToken.cancel();
    }
    close() {
        this.authService.navigateUp();
    }
    refreshData() {
        let data = [];
        this.remoteAgents.forEach(remoteAgent => {
            let activeAgent = remoteAgent['activeAgents'] && remoteAgent['activeAgents'].length > 0 ? remoteAgent['activeAgents'][0] : null;
            if (activeAgent) {
                data.push({
                    remoteAgentKey: remoteAgent.remoteAgentKey,
                    connected: 'active',
                    name: activeAgent ? activeAgent.name : (remoteAgent ? remoteAgent.name : 'Unknown'),
                    user: activeAgent.user,
                    dataPrivacyStatus: activeAgent.dataPrivacyStatus,
                    isEncrypted: activeAgent.dataPrivacyStatus,
                    ipAddress: activeAgent.ipAddress,
                    restrictIp: remoteAgent.restrictIp,
                    ipAddresses: remoteAgent.ipAddresses,
                    lastLoginIpAddress: remoteAgent.lastLoginIpAddress,
                    lastLoginDateTime: remoteAgent.lastLoginDateTime,
                    remoteAgentId: remoteAgent.remoteAgentId,
                    downloadUrls: activeAgent.downloadUrls,
                    instanceId: activeAgent.instanceId,
                    version: activeAgent.version,
                    latestVersion: 'Latest(' + activeAgent.latestVersion + ')',
                    versionTooltip: (activeAgent.upgradeAvailable ? 'Upgrade is available.' : 'Agent is up to date.'),
                    versionClass: (activeAgent.upgradeAvailable ? 'dexih-error-text' : ''),
                    activeAgent: activeAgent
                });
            }
            else {
                data.push({
                    remoteAgentKey: remoteAgent.remoteAgentKey,
                    connected: 'not connected',
                    name: remoteAgent.name,
                    user: '',
                    dataPrivacyStatus: '',
                    isEncrypted: '',
                    ipAddress: '',
                    restrictIp: remoteAgent.restrictIp,
                    ipAddresses: remoteAgent.ipAddresses,
                    lastLoginIpAddress: remoteAgent.lastLoginIpAddress,
                    lastLoginDateTime: remoteAgent.lastLoginDateTime,
                    remoteAgentId: remoteAgent.remoteAgentId,
                    downloadUrls: [],
                    instanceId: null,
                    version: '',
                    latestVersion: '',
                    versionTooltip: '',
                    versionClass: '',
                    activeAgent: null
                });
            }
        });
        this._tableData.next(data);
    }
    test(items, cancelToken) {
        items.forEach(item => {
            let agent = item;
            agent.downloadUrls.forEach((downloadUrl, index) => {
                let url = downloadUrl.url + '/ping';
                this.authService.getFromExternal(url, 'Testing remote agent connectivity...', cancelToken).then(result => {
                    if (result && result.status === 'alive') {
                        downloadUrl['testStatus'] = 'success';
                    }
                    else {
                        downloadUrl['testStatus'] = 'error';
                        downloadUrl['testMessage'] = 'Server returned invalid message.';
                    }
                }).catch(reason => {
                    downloadUrl['testStatus'] = 'error';
                    downloadUrl['testMessage'] = reason.message;
                });
            });
        });
    }
    removeUserTokens(items) {
        this.authService.removeUserTokens(items.map(c => c.remoteAgentKey))
            .then(result => this.refreshData())
            .catch(reason => this.hubsService.addHubClientErrorMessage(reason, 'Remove tokens'));
    }
    refreshUserToken(item) {
        // this.authService.refreshRemoteAgentToken(item.remoteAgentKey).then( result => this.refreshData());
        this.router.navigate(['token-renew', item.remoteAgentKey], { relativeTo: this.route });
    }
    edit(item) {
        this.router.navigate(['edit', item.remoteAgentKey], { relativeTo: this.route });
    }
    restartAgents(items) {
        let activeAgents = items.filter(c => c.activeAgent).map(c => c.activeAgent);
        if (activeAgents.length === 0) {
            this.hubService.addHubErrorMessage('No active agents were selected.');
            return;
        }
        activeAgents.forEach(activeAgent => {
            this.hubsService.restartAgent(activeAgent, false, this.cancelToken);
        });
    }
    refresh() {
        this.authService.pingRemoteAgents();
    }
}
RemoteAgentsComponent.ɵfac = function RemoteAgentsComponent_Factory(t) { return new (t || RemoteAgentsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hubs_service__WEBPACK_IMPORTED_MODULE_1__["HubsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hubs_service__WEBPACK_IMPORTED_MODULE_1__["HubsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
RemoteAgentsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RemoteAgentsComponent, selectors: [["remoteAgents"]], decls: 12, vars: 6, consts: [[1, "container-fluid"], ["title", "Connected Agents", "iconClass", "fa fa-lg fa-fw fa-life-saver", 3, "showCloseButton", "close"], ["rowStatusHeading", "Direct Data Connections", 3, "enableMultiSelect", "enableStickyToolbar", "toolbarZIndex", "columns", "dataObservable", "rowClick"], ["select", "selectedItemAction"], ["selectedItemAction", ""], ["select", "selectedItemsAction"], ["selectedItemsAction", ""], ["actions", ""], ["select", "rowStatus"], ["rowStatus", ""], ["title", "Remote Agent Installation", "path", "/assets/help/intro/remote_agent.md", 1, "m-3"], ["buttonClass", "btn-primary", "iconClass", "fa fa-table", 3, "text", 4, "ngIf"], ["text", "Refresh Agents", "title", "Refresh the active agents", 1, "ml-1", 3, "click"], ["buttonClass", "btn-primary", "iconClass", "fa fa-table", 3, "text"], ["title", "Create a new remote agent token.", 1, "dropdown-item", 3, "routerLink"], [1, "fa", "fa-file-o"], ["title", "Configure and download a new remote agent", 1, "dropdown-item", 3, "routerLink"], [1, "fa", "fa-download"], [3, "ngIf"], [1, "dropdown-item", 3, "routerLink"], [1, "fa", "fa-edit"], [1, "fa", "fa-refresh"], ["title", "Test the connectivity of the remote agents.", 1, "dropdown-item", 3, "click"], [1, "fa", "fa-thumbs-o-up"], ["title", "Restart the selected agents", 1, "dropdown-item", 3, "click"], ["title", "Revoke the selected tokens", 1, "dropdown-item", 3, "click"], [1, "text-danger"], [1, "fa", "fa-ban"], ["class", "btn btn-primary btn-sm", 3, "click", 4, "ngIf"], [1, "list-group", "mt-1"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "list-group-item"], ["target", "_blank", 3, "href"], ["class", "btn btn-danger btn-sm float-right", 3, "title", 4, "ngIf"], ["class", "btn btn-success btn-sm float-right", 3, "title", 4, "ngIf"], [1, "btn", "btn-danger", "btn-sm", "float-right", 3, "title"], [1, "btn", "btn-success", "btn-sm", "float-right", 3, "title"]], template: function RemoteAgentsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "d-widget", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function RemoteAgentsComponent_Template_d_widget_close_1_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "d-table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rowClick", function RemoteAgentsComponent_Template_d_table_rowClick_2_listener($event) { return ctx.edit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RemoteAgentsComponent_ng_template_3_Template, 0, 0, "ng-template", 3, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, RemoteAgentsComponent_ng_template_5_Template, 0, 0, "ng-template", 5, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RemoteAgentsComponent_ng_template_7_Template, 2, 1, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RemoteAgentsComponent_ng_template_9_Template, 3, 2, "ng-template", 8, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "dexih-help", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showCloseButton", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("enableMultiSelect", true)("enableStickyToolbar", true)("toolbarZIndex", 100)("columns", ctx.columns)("dataObservable", ctx.tableData);
    } }, directives: [ngx_d_components__WEBPACK_IMPORTED_MODULE_7__["DWidgetComponent"], ngx_d_table__WEBPACK_IMPORTED_MODULE_8__["DTableComponent"], _shared_help_dexih_help_component__WEBPACK_IMPORTED_MODULE_9__["DexihHelpComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], ngx_d_components__WEBPACK_IMPORTED_MODULE_7__["DButtonRefreshComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_7__["DButtonDropDownComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RemoteAgentsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'remoteAgents',
                templateUrl: './remote-agents.component.html',
                styles: []
            }]
    }], function () { return [{ type: _hubs_service__WEBPACK_IMPORTED_MODULE_1__["HubsService"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _hubs_service__WEBPACK_IMPORTED_MODULE_1__["HubsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/+hubs/remoteAgents/remoteAgent-download/index.ts":
/*!******************************************************************!*\
  !*** ./src/app/+hubs/remoteAgents/remoteAgent-download/index.ts ***!
  \******************************************************************/
/*! exports provided: RemoteAgentDownloadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remoteAgent_download_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remoteAgent-download.component */ "./src/app/+hubs/remoteAgents/remoteAgent-download/remoteAgent-download.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RemoteAgentDownloadComponent", function() { return _remoteAgent_download_component__WEBPACK_IMPORTED_MODULE_0__["RemoteAgentDownloadComponent"]; });




/***/ }),

/***/ "./src/app/+hubs/remoteAgents/remoteAgent-download/remoteAgent-download.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/+hubs/remoteAgents/remoteAgent-download/remoteAgent-download.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: RemoteAgentDownloadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoteAgentDownloadComponent", function() { return RemoteAgentDownloadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../+auth/auth.service */ "./src/app/+auth/auth.service.ts");
/* harmony import */ var _hubs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../hubs.service */ "./src/app/+hubs/hubs.service.ts");
/* harmony import */ var _shared_forms_forms_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/forms/forms.service */ "./src/app/shared/forms/forms.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_shared_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/shared.models */ "./src/app/shared/shared.models.ts");
/* harmony import */ var ngx_d_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-d-components */ "./node_modules/ngx-d-components/__ivy_ngcc__/fesm2015/ngx-d-components.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_help_dexih_help_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/help/dexih-help.component */ "./src/app/shared/help/dexih-help.component.ts");














function RemoteAgentDownloadComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button-download", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RemoteAgentDownloadComponent_ng_template_2_Template_d_button_download_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return !ctx_r3.downloading && ctx_r3.download(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "d-button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RemoteAgentDownloadComponent_ng_template_2_Template_d_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return !ctx_r5.downloading && ctx_r5.downloadRemoteSettings(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "d-button-cancel", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RemoteAgentDownloadComponent_ng_template_2_Template_d_button_cancel_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return !ctx_r6.downloading && ctx_r6.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("busy", ctx_r1.downloading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("busy", ctx_r1.downloading);
} }
function RemoteAgentDownloadComponent_form_4_a_9_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RemoteAgentDownloadComponent_form_4_a_9_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.generateEncryptionKey(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Generate Random Key ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RemoteAgentDownloadComponent_form_4_span_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Refreshing... please wait ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RemoteAgentDownloadComponent_form_4_form_checkbox_63_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "form-checkbox", 49);
} }
function RemoteAgentDownloadComponent_form_4_section_64_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "form-tags", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r10.formsService.formErrors.allowedPaths);
} }
function RemoteAgentDownloadComponent_form_4_section_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "form-tags-dropdown", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r11.hubs)("errors", ctx_r11.formsService.formErrors.allowedHubs)("returnKeys", true);
} }
const _c0 = function () { return { standalone: true }; };
function RemoteAgentDownloadComponent_form_4_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "form-input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form-select", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RemoteAgentDownloadComponent_form_4_Template_form_select_ngModelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.environment = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form-input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " ( ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RemoteAgentDownloadComponent_form_4_a_9_Template, 3, 0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RemoteAgentDownloadComponent_form_4_span_10_Template, 3, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " ) ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form-checkbox", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RemoteAgentDownloadComponent_form_4_Template_form_checkbox_ngModelChange_14_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.embedUserName = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "form-checkbox", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "form-checkbox", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "form-checkbox", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "form-checkbox", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "form-select", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RemoteAgentDownloadComponent_form_4_Template_form_select_ngModelChange_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r17.logLevel = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "form-input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "form-input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "form-checkbox", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "form-checkbox", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "form-checkbox", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "form-checkbox", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "form-checkbox", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "form-checkbox", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "form-checkbox", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "form-checkbox", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "form-checkbox", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "form-checkbox", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "form-checkbox", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](63, RemoteAgentDownloadComponent_form_4_form_checkbox_63_Template, 1, 0, "form-checkbox", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](64, RemoteAgentDownloadComponent_form_4_section_64_Template, 2, 1, "section", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "form-checkbox", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](67, RemoteAgentDownloadComponent_form_4_section_67_Template, 2, 3, "section", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "form-input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "form-input", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "form-input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "form-input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "form-input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "form-checkbox", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "form-checkbox", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "form-checkbox", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "form-tags", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.formsService.currentForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r2.formsService.formErrors.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.environment)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c0))("items", ctx_r2.eEnvironmentItems)("enableFilter", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autocapitalize", true)("errors", ctx_r2.formsService.formErrors.encryptionKey);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.refreshingEncryptionKey == false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.refreshingEncryptionKey == true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.embedUserName)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r2.logLevel)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c0))("items", ctx_r2.logLevelItems)("enableFilter", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.formsService.currentForm.controls.allowLocalFiles.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.formsService.currentForm.controls.allowLocalFiles.value && !ctx_r2.formsService.currentForm.controls.allowAllPaths.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.formsService.currentForm.controls.allowAllHubs.value);
} }
class RemoteAgentDownloadComponent {
    constructor(hubsService, authService, formsService, fb) {
        this.hubsService = hubsService;
        this.authService = authService;
        this.formsService = formsService;
        this.fb = fb;
        this.downloading = false;
        this.refreshingEncryptionKey = false;
        this.refreshingUserToken = false;
        this.logLevelItems = _shared_shared_models__WEBPACK_IMPORTED_MODULE_5__["logLevelItems"];
        this.eEnvironmentItems = _shared_shared_models__WEBPACK_IMPORTED_MODULE_5__["eEnvironmentItems"].filter(c => c.key > 0);
        this.embedUserName = true;
        this.logLevel = _shared_shared_models__WEBPACK_IMPORTED_MODULE_5__["logLevel"].Information;
        this.environment = _shared_shared_models__WEBPACK_IMPORTED_MODULE_5__["eEnvironment"].Windows;
    }
    ngOnInit() {
        this.hubs = this.authService.getHubs();
        let remoteApplicationSettings = new _shared_shared_models__WEBPACK_IMPORTED_MODULE_5__["RemoteAgentSettingsSubset"]();
        this.remoteAgentSettings(remoteApplicationSettings);
        this.logLevel = _shared_shared_models__WEBPACK_IMPORTED_MODULE_5__["logLevel"].Information;
    }
    ngOnDestroy() {
    }
    cancel() {
        this.authService.navigateUp();
    }
    download() {
        if (this.formsService.currentForm.valid) {
            this.downloading = true;
            this.hubsService.downloadRemoteAgent(this.embedUserName, this.environment, this.logLevel, this.formsService.currentForm.value).then(result => {
                this.downloading = false;
                this.hubsService.addHubSuccessMessage('Download successful.');
            }).catch(reason => {
                this.downloading = false;
                this.hubsService.addHubMessage(reason);
            });
        }
        else {
            this.formsService.showErrors();
        }
    }
    downloadRemoteSettings() {
        if (this.formsService.currentForm.valid) {
            this.downloading = true;
            this.hubsService.downloadRemoteSettings(this.embedUserName, this.environment, this.logLevel, this.formsService.currentForm.value).then(result => {
                this.downloading = false;
                this.hubsService.addHubSuccessMessage('Download successful.');
            }).catch(reason => {
                this.downloading = false;
                // this.hubsService.addHubErrorMessage(reason);
            });
        }
        else {
            this.formsService.showErrors();
        }
    }
    generateEncryptionKey() {
        this.refreshingEncryptionKey = true;
        this.authService.getRandomEncryptionKey().then(result => {
            this.formsService.currentForm.controls.encryptionKey.setValue(result);
            this.refreshingEncryptionKey = false;
        }).catch(reason => {
            this.hubsService.addHubErrorMessage(reason);
            this.refreshingEncryptionKey = false;
        });
    }
    generateUserToken() {
        this.refreshingUserToken = true;
        this.authService.getUserToken().then(result => {
            this.formsService.currentForm.controls.userToken.setValue(result.userToken);
            this.formsService.currentForm.controls.remoteAgentId.setValue(result.remoteAgentId);
            this.refreshingUserToken = false;
        }).catch(reason => {
            this.hubsService.addHubErrorMessage(reason);
            this.refreshingUserToken = false;
        });
    }
    remoteAgentSettings(remoteAgent) {
        const remoteAgentForm = this.fb.group({
            'name': [remoteAgent.name, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(3),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(50),
                ]],
            'encryptionKey': [remoteAgent.encryptionKey, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                ]]
        });
        this.formsService.addMissing(remoteAgent, remoteAgentForm, new _shared_shared_models__WEBPACK_IMPORTED_MODULE_5__["RemoteAgentSettingsSubset"]());
        this.formsService.clearFormSubscriptions();
        this.formsService.startForm(remoteAgentForm);
    }
}
RemoteAgentDownloadComponent.ɵfac = function RemoteAgentDownloadComponent_Factory(t) { return new (t || RemoteAgentDownloadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hubs_service__WEBPACK_IMPORTED_MODULE_2__["HubsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_forms_forms_service__WEBPACK_IMPORTED_MODULE_3__["FormsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"])); };
RemoteAgentDownloadComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RemoteAgentDownloadComponent, selectors: [["dexih-remoteAgent-download-form"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_shared_forms_forms_service__WEBPACK_IMPORTED_MODULE_3__["FormsService"]])], decls: 6, vars: 3, consts: [[1, "container"], ["title", "Download Agent", "iconClass", "fa fa-lg fa-fw fa-download", 3, "showCloseButton", "padding", "close"], ["header", ""], [3, "formGroup", 4, "ngIf"], ["title", "Remote Agent Installation", "path", "/assets/help/intro/remote_agent.md", 1, "m-3"], ["text", "Download", 1, "mr-1", 3, "busy", "click"], ["iconClass", "fa fa-wrench", "text", "Settings File", 1, "mr-1", 3, "busy", "click"], [3, "click"], [3, "formGroup"], ["label", "Remote Agent Name", "formControlName", "name", "placeholder", "Enter the name.", "iconClass", "fa fa-list", 3, "errors"], ["label", "Operating System", "itemKey", "key", "itemName", "name", "note", "The operating system that remote agent will be executed on.", 3, "ngModel", "ngModelOptions", "items", "enableFilter", "ngModelChange"], ["label", "Encryption Key", "formControlName", "encryptionKey", "placeholder", "Encryption key (blank will auto-generate)", "iconClass", "fa fa-key", "note", "Encryption key is used to encrypt secure fields and connection passwords.  Note: this key is not retained by the integration hub, and if lost encrypted data can not be restored.", 3, "autocapitalize", "errors"], ["href", "javascript:void(0)", 3, "click", 4, "ngIf"], [4, "ngIf"], [1, "form-row"], [1, "form-group", "col-md-6"], ["label", "Auto-login using current user.", 3, "ngModel", "ngModelOptions", "ngModelChange"], ["label", "Auto-upgrade when new versions of the remote agent become available.", "formControlName", "autoUpgrade"], ["label", "Allow beta and pre-releases.", "formControlName", "preRelease"], ["label", "Allow data and files to be uploaded to the remote agent.", "formControlName", "allowUpload"], ["label", "Allow data and files to be downloaded (including data previews) from the remote agent.", "formControlName", "allowDownload"], ["label", "Logging Level", "itemKey", "key", "itemName", "name", "note", "The level of detail to be included in the diagnostic logs.", 3, "ngModel", "ngModelOptions", "items", "enableFilter", "ngModelChange"], ["label", "Local Upload/Download Port", "formControlName", "downloadPort", "placeholder", "Enter the upload/download port", "note", "The local port for the remote agent to use for upload/download operations."], ["label", "External Upload/Download Url", "formControlName", "externalDownloadUrl", "note", "The url which can be used to access the upload/download operations on the remote agent.  e.g. https://10.10.10.10:33944."], ["label", "Include plugin for Oracle databases (~4MB download)", "formControlName", "oracle"], ["label", "Include plugin for DB2 databases (~30MB download)", "formControlName", "dB2"], ["label", "Include plugin for Mongo databases  (~4MB download)", "formControlName", "mongo"], ["label", "Include plugin for Excel files (~3MB download)", "formControlName", "excel"], ["label", "Include plugin for Machine Learning Functions (~32-40MB download)", "formControlName", "mLNet"], ["label", "Allow data access through the Local Area Network (LAN).", "formControlName", "allowLanAccess"], ["label", "Allow data access through the Internet.", "formControlName", "allowExternalAccess"], ["label", "Allow data access through an internet based Proxy Server.", "formControlName", "allowProxy"], ["label", "Enforce Https (SSL encrypted connections).", "formControlName", "enforceHttps"], ["label", "Automatically attempt to create an SSL certificate (used for encryption).", "formControlName", "autoGenerateCertificate"], ["label", "Allow files to be managed on local file system.", "formControlName", "allowLocalFiles"], ["label", "Allow all remote agent paths to be available.", "formControlName", "allowAllPaths", 4, "ngIf"], ["label", "Allow all hubs to be available.", "formControlName", "allowAllHubs"], ["label", "Alerts Smtp Server", "formControlName", "smtpServer", "placeholder", "Alerts Smtp Server", "note", "Enter the Smtp Server name to use to send alert emails."], ["type", "number", "label", "Smtp Port Number", "formControlName", "smtpPort", "note", "The port number to for tme Smtp Server"], ["label", "Alerts Smtp UserName", "formControlName", "smtpUserName", "placeholder", "Alerts Smtp Server", "note", "Enter the Smtp user name to use to send alert emails."], ["label", "Smtp Password", "formControlName", "smtpPassword", "note", "The Smtp password"], ["label", "Alerts From Email", "formControlName", "fromEmail", "note", "Email address listed \"From\" when sending alerts."], ["label", "Smpt Server Requires SSL encryption.", "formControlName", "enableSsl"], ["label", "Send alert on startup and shutdown.", "formControlName", "alertOnShutdown"], ["label", "Send alert on critical remote agent errors.", "formControlName", "alertOnCritical"], ["label", "Email addresses to send the bcc alerts to.", "formControlName", "adminEmails", "iconClass", "fa fa-email", "note", "A set of emails that any alerts will be bcc'd to."], ["href", "javascript:void(0)", 3, "click"], [1, "fa", "fa-refresh"], [1, "fa", "fa-spin", "fa-refresh"], ["label", "Allow all remote agent paths to be available.", "formControlName", "allowAllPaths"], ["label", "Allowed root paths for local file management.", "formControlName", "allowedPaths", "iconClass", "fa fa-list", "note", "The root directories which can be accessed when managing flat files.   All directories below the specified root directories will be available.", 3, "errors"], ["label", "Hubs allowed by the remote agent.", "formControlName", "allowedHubs", "itemKey", "hubKey", "itemName", "name", "iconClass", "fa fa-list", 3, "items", "errors", "returnKeys"]], template: function RemoteAgentDownloadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "d-widget", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function RemoteAgentDownloadComponent_Template_d_widget_close_1_listener() { return ctx.cancel(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RemoteAgentDownloadComponent_ng_template_2_Template, 3, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RemoteAgentDownloadComponent_form_4_Template, 90, 22, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "dexih-help", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showCloseButton", true)("padding", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formsService.currentForm);
    } }, directives: [ngx_d_components__WEBPACK_IMPORTED_MODULE_6__["DWidgetComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _shared_help_dexih_help_component__WEBPACK_IMPORTED_MODULE_8__["DexihHelpComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_6__["DButtonDownloadComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_6__["DButtonComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_6__["DButtonCancelComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], ngx_d_components__WEBPACK_IMPORTED_MODULE_6__["DFormInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], ngx_d_components__WEBPACK_IMPORTED_MODULE_6__["DFormSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], ngx_d_components__WEBPACK_IMPORTED_MODULE_6__["DFormCheckboxComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_6__["DFormTagsComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_6__["DFormTagsDropdownComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RemoteAgentDownloadComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'dexih-remoteAgent-download-form',
                templateUrl: './remoteAgent-download.component.html',
                providers: [_shared_forms_forms_service__WEBPACK_IMPORTED_MODULE_3__["FormsService"]]
            }]
    }], function () { return [{ type: _hubs_service__WEBPACK_IMPORTED_MODULE_2__["HubsService"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _shared_forms_forms_service__WEBPACK_IMPORTED_MODULE_3__["FormsService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/+hubs/remoteAgents/remoteAgent-edit/index.ts":
/*!**************************************************************!*\
  !*** ./src/app/+hubs/remoteAgents/remoteAgent-edit/index.ts ***!
  \**************************************************************/
/*! exports provided: RemoteAgentEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _remoteAgent_edit_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./remoteAgent-edit.component */ "./src/app/+hubs/remoteAgents/remoteAgent-edit/remoteAgent-edit.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RemoteAgentEditComponent", function() { return _remoteAgent_edit_component__WEBPACK_IMPORTED_MODULE_0__["RemoteAgentEditComponent"]; });




/***/ }),

/***/ "./src/app/+hubs/remoteAgents/remoteAgent-edit/remoteAgent-edit.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/+hubs/remoteAgents/remoteAgent-edit/remoteAgent-edit.component.ts ***!
  \***********************************************************************************/
/*! exports provided: RemoteAgentEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemoteAgentEditComponent", function() { return RemoteAgentEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../+auth/auth.service */ "./src/app/+auth/auth.service.ts");
/* harmony import */ var _shared_forms_forms_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/forms/forms.service */ "./src/app/shared/forms/forms.service.ts");
/* harmony import */ var _hubs_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../hubs.service */ "./src/app/+hubs/hubs.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_shared_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/shared.models */ "./src/app/shared/shared.models.ts");
/* harmony import */ var _shared_ui_dexihMessage_dexih_message_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/ui/dexihMessage/dexih-message.component */ "./src/app/shared/ui/dexihMessage/dexih-message.component.ts");
/* harmony import */ var ngx_d_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-d-components */ "./node_modules/ngx-d-components/__ivy_ngcc__/fesm2015/ngx-d-components.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

















function RemoteAgentEditComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button-save", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RemoteAgentEditComponent_ng_template_4_Template_d_button_save_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "d-button-cancel", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RemoteAgentEditComponent_ng_template_4_Template_d_button_cancel_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function RemoteAgentEditComponent_form_6_section_10_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " ( ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RemoteAgentEditComponent_form_6_section_10_span_2_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r9.addCurrentIp(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Add Current (", ctx_r8.ipAddress, ") ");
} }
function RemoteAgentEditComponent_form_6_section_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form-tags", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, RemoteAgentEditComponent_form_6_section_10_span_2_Template, 6, 1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.ipAddress);
} }
function RemoteAgentEditComponent_form_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "form-input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "form-input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "form-checkbox", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "form-checkbox", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RemoteAgentEditComponent_form_6_section_10_Template, 3, 1, "section", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r3.formsService.currentForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.formsService.currentForm.controls.restrictIp.value);
} }
class RemoteAgentEditComponent {
    constructor(authService, hubsService, formsService, fb, router, route) {
        this.authService = authService;
        this.hubsService = hubsService;
        this.formsService = formsService;
        this.fb = fb;
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        try {
            this._subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(this.route.data, this.route.params, this.authService.getRemoteAgentsObservable()).subscribe(result => {
                let data = result[0];
                let params = result[1];
                this.remoteAgents = result[2];
                if (!this.remoteAgents) {
                    return;
                }
                this.remoteAgentKey = +params['remoteAgentKey'];
                this.hubsService.remoteAgents().then(remoteAgents => {
                    let remoteAgent = this.remoteAgents.find(c => c.remoteAgentKey === this.remoteAgentKey);
                    const remoteAgentForm = this.fb.group({});
                    this.formsService.addMissing(remoteAgent, remoteAgentForm, new _shared_shared_models__WEBPACK_IMPORTED_MODULE_7__["DexihRemoteAgent"]());
                    remoteAgentForm.controls.name.disable();
                    remoteAgentForm.controls.remoteAgentId.disable();
                    this.formsService.clearFormSubscriptions();
                    this.formsService.startForm(remoteAgentForm);
                });
            });
        }
        catch (e) {
            this.hubsService.addHubClientErrorMessage(e, 'Remote Agent Edit');
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
    save() {
        let form = this.formsService.currentForm;
        let remoteAgent = form.value;
        remoteAgent.name = form.controls.name.value;
        remoteAgent.remoteAgentId = form.controls.remoteAgentId.value;
        this.authService.saveRemoteAgent(this.formsService.currentForm.value).then(result => {
            this.hubsService.addHubSuccessMessage('The remote agent was updated successfully.');
            this.authService.pingRemoteAgents();
        });
    }
    addCurrentIp() {
        if (this.ipAddress) {
            let form = this.formsService.currentForm;
            let ipAddressesControl = form.controls.ipAddresses;
            let ipAddresses = ipAddressesControl.value;
            if (ipAddresses.findIndex(c => c === this.ipAddress) < 0) {
                ipAddresses.push(this.ipAddress);
                ipAddressesControl.setValue(ipAddresses);
            }
        }
    }
}
RemoteAgentEditComponent.ɵfac = function RemoteAgentEditComponent_Factory(t) { return new (t || RemoteAgentEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hubs_service__WEBPACK_IMPORTED_MODULE_5__["HubsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_forms_forms_service__WEBPACK_IMPORTED_MODULE_4__["FormsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
RemoteAgentEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RemoteAgentEditComponent, selectors: [["remote-agents"]], inputs: { hubKey: "hubKey" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_shared_forms_forms_service__WEBPACK_IMPORTED_MODULE_4__["FormsService"]])], decls: 7, vars: 3, consts: [["DexihMessage", ""], [1, "container"], ["title", "Edit Agent", "iconClass", "fa fa-lg fa-fw fa-database", 3, "padding", "showCloseButton", "close"], ["header", ""], [3, "formGroup", 4, "ngIf"], [1, "mr-1", 3, "click"], [3, "click"], [3, "formGroup"], ["label", "Agent name", "note", "This can only be changed on the remote agent settings file.", "formControlName", "name", "iconClass", "fa fa-comment"], ["label", "Remote Agent Id", "note", "This can only be changed on the remote agent settings file.", "formControlName", "remoteAgentId", "iconClass", "fa fa-comment"], ["label", "Allow data sharing through the agent via other hubs or through the API.", "formControlName", "allowExternalConnect"], ["label", "Restrict remote agent ip addresses.", "formControlName", "restrictIp"], [4, "ngIf"], ["label", "Restricted IP Addresses", "formControlName", "ipAddresses", "placeholder", "Enter the IP Address.", "note", "List of Ip Addresses.  The remote agent only be authorized for this hub if originating from one of the listed ip addresses."], ["href", "javascript:void(0)", 3, "click"], [1, "fa", "fa-refresh"]], template: function RemoteAgentEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dexih-message", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "d-widget", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function RemoteAgentEditComponent_Template_d_widget_close_3_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, RemoteAgentEditComponent_ng_template_4_Template, 2, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RemoteAgentEditComponent_form_6_Template, 11, 2, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("padding", true)("showCloseButton", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formsService.currentForm);
    } }, directives: [_shared_ui_dexihMessage_dexih_message_component__WEBPACK_IMPORTED_MODULE_8__["DexihMessageComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["DWidgetComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["DButtonSaveComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["DButtonCancelComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupDirective"], ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["DFormInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlName"], ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["DFormCheckboxComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["DFormTagsComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RemoteAgentEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'remote-agents',
                templateUrl: './remoteAgent-edit.component.html',
                providers: [_shared_forms_forms_service__WEBPACK_IMPORTED_MODULE_4__["FormsService"]]
            }]
    }], function () { return [{ type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _hubs_service__WEBPACK_IMPORTED_MODULE_5__["HubsService"] }, { type: _shared_forms_forms_service__WEBPACK_IMPORTED_MODULE_4__["FormsService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, { hubKey: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/+hubs/support/edit/issue-edit.component.ts":
/*!************************************************************!*\
  !*** ./src/app/+hubs/support/edit/issue-edit.component.ts ***!
  \************************************************************/
/*! exports provided: IssueEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueEditComponent", function() { return IssueEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../+auth/auth.service */ "./src/app/+auth/auth.service.ts");
/* harmony import */ var _auth_auth_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../+auth/auth.models */ "./src/app/+auth/auth.models.ts");
/* harmony import */ var _shared_ui_dexihMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/ui/dexihMessage */ "./src/app/shared/ui/dexihMessage/index.ts");
/* harmony import */ var _shared_shared_models__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/shared.models */ "./src/app/shared/shared.models.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _shared_ui_dexihMessage_dexih_message_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/ui/dexihMessage/dexih-message.component */ "./src/app/shared/ui/dexihMessage/dexih-message.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_d_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-d-components */ "./node_modules/ngx-d-components/__ivy_ngcc__/fesm2015/ngx-d-components.js");
/* harmony import */ var _shared_ui_supportOptions_support_options_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/ui/supportOptions/support-options.component */ "./src/app/shared/ui/supportOptions/support-options.component.ts");
/* harmony import */ var _shared_utils_calendar_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/utils/calendar.pipe */ "./src/app/shared/utils/calendar.pipe.ts");


















const _c0 = ["DexihMessage"];
function IssueEditComponent_d_widget_3_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button-save", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IssueEditComponent_d_widget_3_ng_template_3_Template_d_button_save_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return !ctx_r7.saving && !ctx_r7.mainForm.pristine && ctx_r7.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "d-button-cancel", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IssueEditComponent_d_widget_3_ng_template_3_Template_d_button_cancel_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return !ctx_r9.saving && ctx_r9.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r3.saving || ctx_r3.mainForm.pristine)("busy", ctx_r3.saving);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r3.saving);
} }
function IssueEditComponent_d_widget_3_d_widget_section_23_form_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form-textarea", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "calendar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "d-button-delete", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IssueEditComponent_d_widget_3_d_widget_section_23_form_1_Template_d_button_delete_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const comment_r11 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r12.deleteComment(comment_r11.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const comment_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", comment_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("label", "", comment_r11.value.userName, " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, comment_r11.value.updateDate), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hideToggle", true)("isHidden", true);
} }
function IssueEditComponent_d_widget_3_d_widget_section_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-widget-section", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, IssueEditComponent_d_widget_3_d_widget_section_23_form_1_Template, 6, 7, "form", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showExpandButton", true)("padding", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.comments.controls);
} }
function IssueEditComponent_d_widget_3_d_widget_section_24_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button-save", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IssueEditComponent_d_widget_3_d_widget_section_24_ng_template_1_Template_d_button_save_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return !ctx_r16.saving && ctx_r16.newComment && ctx_r16.saveComment(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "d-button-cancel", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IssueEditComponent_d_widget_3_d_widget_section_24_ng_template_1_Template_d_button_cancel_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return !ctx_r18.saving && ctx_r18.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r15.saving || !ctx_r15.newComment)("busy", ctx_r15.saving);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r15.saving);
} }
const _c1 = function () { return { standalone: true }; };
function IssueEditComponent_d_widget_3_d_widget_section_24_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-widget-section", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, IssueEditComponent_d_widget_3_d_widget_section_24_ng_template_1_Template, 2, 3, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form-textarea", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function IssueEditComponent_d_widget_3_d_widget_section_24_Template_form_textarea_ngModelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r19.newComment = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showExpandButton", true)("padding", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r5.newComment)("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1))("isHidden", false)("hideToggle", true);
} }
function IssueEditComponent_d_widget_3_d_widget_section_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-widget-section", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "This is a public issue and is managed through the GitHub issue below.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "GitHub Issue");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showExpandButton", true)("padding", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r6.mainForm.controls.gitHubLink == null ? null : ctx_r6.mainForm.controls.gitHubLink.value, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function IssueEditComponent_d_widget_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-widget", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "support-options", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "d-widget-section", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, IssueEditComponent_d_widget_3_ng_template_3_Template, 2, 3, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "form-input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "form-select", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "section", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "form-select", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "section", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "form-select", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "form-select", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "form-checkbox", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "form-textarea", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, IssueEditComponent_d_widget_3_d_widget_section_23_Template, 2, 3, "d-widget-section", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, IssueEditComponent_d_widget_3_d_widget_section_24_Template, 7, 7, "d-widget-section", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, IssueEditComponent_d_widget_3_d_widget_section_25_Template, 6, 3, "d-widget-section", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isExpanded", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("subTitle", ctx_r1.subTitle)("showExpandButton", true)("padding", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.mainForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r1.formErrors.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r1.eIssueTypeItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r1.eIssueSeverityItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r1.eIssueCategoryItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r1.eIssueStatusItems);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hideToggle", ctx_r1.isNew)("isHidden", !ctx_r1.isNew);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.comments.controls.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.mainForm.controls.key.value > 0 && ctx_r1.mainForm.controls.isPrivate.value);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.mainForm.controls.key.value > 0 && !ctx_r1.mainForm.controls.isPrivate.value);
} }
const moment = moment__WEBPACK_IMPORTED_MODULE_8__;
class IssueEditComponent {
    constructor(authService, route, fb) {
        this.authService = authService;
        this.route = route;
        this.fb = fb;
        this.eIssueTypeItems = _shared_shared_models__WEBPACK_IMPORTED_MODULE_7__["eIssueTypeItems"];
        this.eIssueSeverityItems = _shared_shared_models__WEBPACK_IMPORTED_MODULE_7__["eIssueSeverityItems"];
        this.eIssueStatusItems = _shared_shared_models__WEBPACK_IMPORTED_MODULE_7__["eIssueStatusItems"];
        this.eIssueCategoryItems = _shared_shared_models__WEBPACK_IMPORTED_MODULE_7__["eIssueCategoryItems"];
        this.SharedAccessItems = _shared_shared_models__WEBPACK_IMPORTED_MODULE_7__["eSharedAccessItems"].filter(c => c.key > 0);
        this.generatingKey = false;
        this.saving = false;
        this.hasChanged = false;
        this.showAllErrors = false;
        this.disable = false;
        this.isNew = true;
        this.formErrors = {
            'name': '',
            'description': '',
        };
        this.validationMessages = {
            'name': {
                'required': 'Name is required.',
                'minlength': 'Name must be at least 4 characters long.',
                'maxlength': 'Name cannot be more than 50 characters long.',
                'duplicateHubName': 'Name cannot be the same as an existing hub name.'
            },
            'description': {
                'required': 'Description is required.',
            },
        };
        this.supportOptions = [
            { name: 'Forums', icon: 'fa fa-smile-o', link: 'https://dexih.mn.co/feed', description: 'Use the community forums for questions and other integration hub discussion.' },
            { name: 'Twitter', icon: 'fa fa-twitter', link: 'https://twitter.com/dataexperts', description: 'Send messages to our twitter for quick short queries and comments.' },
            { name: 'YouTube', icon: 'fa fa-youtube', link: 'https://www.youtube.com/channel/UCUQQ_sVuFti-xYvKtfLJNkg', description: 'Refer to our youtube channel for video tutorials.' },
            { name: 'Features / Issues', icon: 'fa fa-github', link: 'https://github.com/DataExperts/Dexih.App.UI', description: 'We are an open source platform.  Raise feature requests and bugs on our github pages.' }
        ];
        this.cancelToken = new _auth_auth_models__WEBPACK_IMPORTED_MODULE_5__["CancelToken"]();
    }
    ngOnInit() {
        try {
            this._subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["combineLatest"])(this.route.data, this.route.params).subscribe(result => {
                let data = result[0];
                let params = result[1];
                this.action = data['action'];
                this.pageTitle = data['pageTitle'];
                if (this.action === 'new') {
                    this.issue = new _shared_shared_models__WEBPACK_IMPORTED_MODULE_7__["DexihIssue"]();
                    this.buildForm();
                    this.isNew = true;
                    this.disable = false;
                }
                else if (this.action === 'edit') {
                    this.key = +params['issueKey'];
                    this.isNew = false;
                    this.refresh();
                }
            });
        }
        catch (e) {
            this.dexihMessage.addErrorMessage(e.message);
        }
    }
    ngOnDestroy() {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
        if (this._valueChangesSubscription) {
            this._valueChangesSubscription.unsubscribe();
        }
        this.cancelToken.cancel();
    }
    refresh() {
        this.authService.getIssue(this.key, this.cancelToken).then(issue => {
            this.issue = issue;
            this.subTitle = 'Updated by ' + issue.userName + ' - ' + moment(issue.updateDate).calendar();
            this.buildForm();
            if (this.authService.getUser().isAdmin) {
                this.disable = false;
            }
            else {
                this.disable = true;
            }
        });
    }
    save() {
        this.dexihMessage.reset();
        this.saving = true;
        Object.assign(this.issue, this.mainForm.value);
        this.authService.saveIssue(this.issue)
            .then(() => {
            this.saving = false;
            this.dexihMessage.addSuccessMessage('Issue created successfully.');
            this.cancel();
        }).catch(reason => {
            this.dexihMessage.addMessage(reason);
            this.saving = false;
        });
    }
    saveComment() {
        this.dexihMessage.reset();
        this.saving = true;
        this.authService.addIssueComment(this.issue.key, this.newComment)
            .then(() => {
            this.saving = false;
            this.dexihMessage.addSuccessMessage('Issue comment added successfully.');
            this.cancel();
        }).catch(reason => {
            this.dexihMessage.addMessage(reason);
            this.saving = false;
        });
    }
    deleteComment(comment) {
        this.authService.deleteIssueComments([comment.key]).then(() => {
            this.refresh();
            this.dexihMessage.addSuccessMessage('Issue comment deleted.');
        }).catch(reason => {
            this.dexihMessage.addMessage(reason);
        });
    }
    cancel() {
        this.authService.navigateUp();
    }
    buildForm() {
        this.comments = this.fb.array(this.issue.dexihIssueComments.map(c => {
            return this.fb.group({
                'key': [{ value: c.key, disabled: false }, []],
                'comment': [{ value: c.comment, disabled: this.disable }, []],
                'userName': [{ value: c.userName, disabled: false }, []],
                'updateDate': [{ value: c.updateDate, disabled: false }, []],
            });
        }));
        this.mainForm = this.fb.group({
            'key': [{ value: this.issue.key, disabled: this.disable }, []],
            'name': [{ value: this.issue.name, disabled: this.disable }, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(50),
                ]],
            'description': [{ value: this.issue.description, disabled: this.disable }, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                ]],
            'type': [{ value: this.issue.type, disabled: this.disable }, []],
            'category': [{ value: this.issue.category, disabled: this.disable }, []],
            'severity': [{ value: this.issue.severity, disabled: this.disable }, []],
            'isPrivate': [{ value: this.issue.isPrivate, disabled: this.disable }, []],
            'updateDate': [{ value: this.issue.updateDate, disabled: true }, []],
            'userName': [{ value: this.issue.userName, disabled: true }, []],
            'issueStatus': [{ value: this.issue.issueStatus, disabled: false }, []],
            'gitHubLink': [{ value: this.issue.gitHubLink, disabled: false }, []],
            'dexihIssueComments': this.comments
        });
        if (this._valueChangesSubscription) {
            this._valueChangesSubscription.unsubscribe();
        }
        this._valueChangesSubscription = this.mainForm.valueChanges.subscribe(() => this.onValueChanged());
        this.onValueChanged(); // (re)set validation messages now
        this.hasChanged = false;
    }
    onValueChanged() {
        if (!this.mainForm) {
            return;
        }
        const form = this.mainForm;
        this.hasChanged = true;
        for (const field of Object.keys(this.formErrors)) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            const control = form.get(field);
            if (control && (control.dirty || this.showAllErrors) && !control.valid) {
                const messages = this.validationMessages[field];
                for (const key of Object.keys(control.errors)) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    }
}
IssueEditComponent.ɵfac = function IssueEditComponent_Factory(t) { return new (t || IssueEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"])); };
IssueEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IssueEditComponent, selectors: [["issue-edit-form"]], viewQuery: function IssueEditComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dexihMessage = _t.first);
    } }, decls: 4, vars: 1, consts: [[1, "container"], ["DexihMessage", ""], ["iconClass", "fa fa-ticket", "title", "Support", 4, "ngIf"], ["iconClass", "fa fa-ticket", "title", "Support"], [3, "isExpanded"], ["title", "Raise Issue", "iconClass", "fa fa-lg fa-fw fa-comments", 3, "subTitle", "showExpandButton", "padding"], ["header", ""], ["id", "edit-form", 3, "formGroup"], ["label", "Title", "formControlName", "name", "placeholder", "Title", "iconClass", "fa fa-life-ring", 3, "errors"], [1, "form-row"], [1, "form-group", "col-md-6"], ["label", "Type", "formControlName", "type", "iconClass", "fa fa-life-ring", "itemKey", "key", "itemName", "description", 3, "items"], ["label", "Severity", "formControlName", "severity", "iconClass", "fa fa-life-ring", "itemKey", "key", "itemName", "description", 3, "items"], ["label", "Category", "formControlName", "category", "iconClass", "fa fa-life-ring", "itemKey", "key", "itemName", "description", 3, "items"], ["label", "Status", "formControlName", "issueStatus", "iconClass", "fa fa-circle-notch", "itemKey", "key", "itemName", "description", 3, "items"], ["c", "", "label", "Is Private (will not be published to public github issue)", "formControlName", "isPrivate"], ["label", "Description", "formControlName", "description", "placeholder", "Details of the issue of feature request", "rows", "20", 3, "hideToggle", "isHidden"], ["title", "Commentary", "iconClass", "fa fa-lg fa-fw fa-comments", 3, "showExpandButton", "padding", 4, "ngIf"], ["title", "Add new comment", "iconClass", "fa fa-lg fa-fw fa-comments", 3, "showExpandButton", "padding", 4, "ngIf"], [1, "mr-1", 3, "disabled", "busy", "click"], [3, "disabled", "click"], ["title", "Commentary", "iconClass", "fa fa-lg fa-fw fa-comments", 3, "showExpandButton", "padding"], ["id", "comment-form", 3, "formGroup", 4, "ngFor", "ngForOf"], ["id", "comment-form", 3, "formGroup"], ["formControlName", "comment", "placeholder", "Comment", "iconClass", "fa fa-comment", 3, "label", "hideToggle", "isHidden"], [3, "click"], ["title", "Add new comment", "iconClass", "fa fa-lg fa-fw fa-comments", 3, "showExpandButton", "padding"], ["placeholder", "Enter a new comment", "iconClass", "fa fa-comment", "rows", "20", 3, "ngModel", "ngModelOptions", "isHidden", "hideToggle", "ngModelChange"], ["target", "_blank", 1, "btn", "btn-primary", 3, "href"], [1, "fa", "fa-github"]], template: function IssueEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "dexih-message", null, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, IssueEditComponent_d_widget_3_Template, 26, 15, "d-widget", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mainForm);
    } }, directives: [_shared_ui_dexihMessage_dexih_message_component__WEBPACK_IMPORTED_MODULE_9__["DexihMessageComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], ngx_d_components__WEBPACK_IMPORTED_MODULE_11__["DWidgetComponent"], _shared_ui_supportOptions_support_options_component__WEBPACK_IMPORTED_MODULE_12__["SupportOptionsComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_11__["ɵa"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], ngx_d_components__WEBPACK_IMPORTED_MODULE_11__["DFormInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], ngx_d_components__WEBPACK_IMPORTED_MODULE_11__["DFormSelectComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_11__["DFormCheckboxComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_11__["DFormTextAreaComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_11__["DButtonSaveComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_11__["DButtonCancelComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], ngx_d_components__WEBPACK_IMPORTED_MODULE_11__["DButtonDeleteComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]], pipes: [_shared_utils_calendar_pipe__WEBPACK_IMPORTED_MODULE_13__["CalendarPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IssueEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'issue-edit-form',
                templateUrl: './issue-edit.component.html'
            }]
    }], function () { return [{ type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }]; }, { dexihMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['DexihMessage', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/+hubs/support/index.ts":
/*!****************************************!*\
  !*** ./src/app/+hubs/support/index.ts ***!
  \****************************************/
/*! exports provided: IssueEditComponent, IssueIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _edit_issue_edit_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit/issue-edit.component */ "./src/app/+hubs/support/edit/issue-edit.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IssueEditComponent", function() { return _edit_issue_edit_component__WEBPACK_IMPORTED_MODULE_0__["IssueEditComponent"]; });

/* harmony import */ var _index_issue_index_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index/issue-index.component */ "./src/app/+hubs/support/index/issue-index.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IssueIndexComponent", function() { return _index_issue_index_component__WEBPACK_IMPORTED_MODULE_1__["IssueIndexComponent"]; });





/***/ }),

/***/ "./src/app/+hubs/support/index/issue-index.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/+hubs/support/index/issue-index.component.ts ***!
  \**************************************************************/
/*! exports provided: IssueIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IssueIndexComponent", function() { return IssueIndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../+auth/auth.service */ "./src/app/+auth/auth.service.ts");
/* harmony import */ var _auth_auth_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../+auth/auth.models */ "./src/app/+auth/auth.models.ts");
/* harmony import */ var _shared_shared_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/shared.models */ "./src/app/shared/shared.models.ts");
/* harmony import */ var ngx_d_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-d-components */ "./node_modules/ngx-d-components/__ivy_ngcc__/fesm2015/ngx-d-components.js");
/* harmony import */ var _shared_ui_supportOptions_support_options_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/ui/supportOptions/support-options.component */ "./src/app/shared/ui/supportOptions/support-options.component.ts");
/* harmony import */ var ngx_d_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-d-table */ "./node_modules/ngx-d-table/__ivy_ngcc__/fesm2015/ngx-d-table.js");












const _c0 = function (a1) { return ["edit", a1]; };
function IssueIndexComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "d-button-edit", 10);
} if (rf & 2) {
    const item_r6 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, item_r6.key));
} }
function IssueIndexComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button-delete", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IssueIndexComponent_ng_template_7_Template_d_button_delete_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const items_r7 = ctx.items; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.delete(items_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function () { return ["new"]; };
function IssueIndexComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "d-button-new", 12);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
} }
class IssueIndexComponent {
    constructor(authService, router, route) {
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.columns = [
            { name: 'name', title: 'Name', format: '' },
            { name: 'description', title: 'Description', format: 'Md' },
            { name: 'type', title: 'Type', format: 'Enum', enum: _shared_shared_models__WEBPACK_IMPORTED_MODULE_5__["eIssueType"] },
            { name: 'category', title: 'Category', format: 'Enum', enum: _shared_shared_models__WEBPACK_IMPORTED_MODULE_5__["eIssueCategory"] },
            { name: 'severity', title: 'Severity', format: 'Enum', enum: _shared_shared_models__WEBPACK_IMPORTED_MODULE_5__["eIssueSeverity"] },
            { name: 'issueStatus', title: 'Status', format: 'Enum', enum: _shared_shared_models__WEBPACK_IMPORTED_MODULE_5__["eIssueStatus"] },
            { name: 'gitHubLink', title: 'Github Issue', format: 'Md' },
            { name: 'updateDate', title: 'Last Modified', format: 'Calendar' },
        ];
        this._tableData = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.tableData = this._tableData.asObservable();
        this.cancelToken = new _auth_auth_models__WEBPACK_IMPORTED_MODULE_4__["CancelToken"]();
    }
    ngOnInit() {
        this.refresh();
    }
    ngOnDestroy() {
        this.cancelToken.cancel();
    }
    refresh() {
        this.authService.getIssues(this.cancelToken).then(i => {
            const issues = i.map(issue => {
                return {
                    key: issue.key,
                    name: issue.name,
                    description: issue.description,
                    type: issue.type,
                    category: issue.category,
                    severity: issue.severity,
                    issueStatus: issue.issueStatus,
                    gitHubLink: issue.gitHubLink ? `[github](${issue.gitHubLink})` : null,
                    updateDate: issue.updateDate,
                };
            });
            this._tableData.next(issues);
        });
    }
    edit(issue) {
        this.router.navigate(['edit', issue.key], { relativeTo: this.route });
    }
    delete(issues) {
        let issueKeys = issues.map(c => c.key);
        this.authService.deleteIssues(issueKeys).then(() => {
            this.refresh();
        });
    }
    close() {
        this.authService.navigateUp();
    }
}
IssueIndexComponent.ɵfac = function IssueIndexComponent_Factory(t) { return new (t || IssueIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
IssueIndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IssueIndexComponent, selectors: [["issue"]], decls: 11, vars: 8, consts: [[1, "container-fluid"], ["title", "Raised Issues", "iconClass", "fa fa-lg fa-fw fa-life-saver", 3, "showCloseButton", "close"], [3, "isExpanded"], ["title", "Current Support Issues", 3, "padding"], [3, "enableMultiSelect", "enableStickyToolbar", "toolbarZIndex", "columns", "dataObservable", "rowClick"], ["select", "selectedItemAction"], ["selectedItemAction", ""], ["select", "selectedItemsAction"], ["selectedItemsAction", ""], ["actions", ""], ["queryParamsHandling", "", "preserveFragment", "", 1, "mr-1", 3, "routerLink"], [3, "click"], [1, "mr-1", 3, "routerLink"]], template: function IssueIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "d-widget", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function IssueIndexComponent_Template_d_widget_close_1_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "support-options", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "d-widget-section", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "d-table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rowClick", function IssueIndexComponent_Template_d_table_rowClick_4_listener($event) { return ctx.edit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, IssueIndexComponent_ng_template_5_Template, 1, 3, "ng-template", 5, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, IssueIndexComponent_ng_template_7_Template, 1, 0, "ng-template", 7, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, IssueIndexComponent_ng_template_9_Template, 1, 2, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showCloseButton", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isExpanded", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("padding", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("enableMultiSelect", true)("enableStickyToolbar", true)("toolbarZIndex", 100)("columns", ctx.columns)("dataObservable", ctx.tableData);
    } }, directives: [ngx_d_components__WEBPACK_IMPORTED_MODULE_6__["DWidgetComponent"], _shared_ui_supportOptions_support_options_component__WEBPACK_IMPORTED_MODULE_7__["SupportOptionsComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_6__["ɵa"], ngx_d_table__WEBPACK_IMPORTED_MODULE_8__["DTableComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_6__["DButtonEditComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], ngx_d_components__WEBPACK_IMPORTED_MODULE_6__["DButtonDeleteComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_6__["DButtonNewComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IssueIndexComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'issue',
                templateUrl: './issue-index.component.html',
                styles: []
            }]
    }], function () { return [{ type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/+hubs/tasks/task-status/index.ts":
/*!**************************************************!*\
  !*** ./src/app/+hubs/tasks/task-status/index.ts ***!
  \**************************************************/
/*! exports provided: TaskStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _task_status_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task-status.component */ "./src/app/+hubs/tasks/task-status/task-status.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TaskStatusComponent", function() { return _task_status_component__WEBPACK_IMPORTED_MODULE_0__["TaskStatusComponent"]; });




/***/ }),

/***/ "./src/app/+hubs/tasks/task-status/task-status.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/+hubs/tasks/task-status/task-status.component.ts ***!
  \******************************************************************/
/*! exports provided: TaskStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskStatusComponent", function() { return TaskStatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _hubs_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hubs.service */ "./src/app/+hubs/hubs.service.ts");
/* harmony import */ var _shared_shared_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/shared.models */ "./src/app/shared/shared.models.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_d_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-d-components */ "./node_modules/ngx-d-components/__ivy_ngcc__/fesm2015/ngx-d-components.js");







function TaskStatusComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "d-progressbar", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cancelled", function TaskStatusComponent_div_0_Template_d_progressbar_cancelled_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.cancelled(); })("click", function TaskStatusComponent_div_0_Template_d_progressbar_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.clicked(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("animate", true)("showCancel", ctx_r0.currentStatus.canCancel)("value", ctx_r0.currentStatus.percentage)("type", ctx_r0.currentStatus.statusType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.currentStatus.message, " ");
} }
class TaskStatusComponent {
    constructor(hubsService) {
        this.hubsService = hubsService;
    }
    ngOnInit() {
        this.currentStatus = this.getStatus(this.task);
    }
    ngOnDestroy() {
    }
    getStatus(task) {
        const statusInfo = new StatusInfo();
        if (!task) {
            statusInfo.message = 'not running';
            statusInfo.percentage = 0;
            statusInfo.statusType = 'info';
            statusInfo.error = '';
        }
        else {
            statusInfo.percentage = task.percentage;
            // update the type, which is used for the colour of the progress
            switch (task.status) {
                case _shared_shared_models__WEBPACK_IMPORTED_MODULE_2__["eManagedTaskStatus"].Error:
                case _shared_shared_models__WEBPACK_IMPORTED_MODULE_2__["eManagedTaskStatus"].Cancelled:
                    statusInfo.statusType = 'danger';
                    statusInfo.canCancel = false;
                    break;
                case _shared_shared_models__WEBPACK_IMPORTED_MODULE_2__["eManagedTaskStatus"].Created:
                case _shared_shared_models__WEBPACK_IMPORTED_MODULE_2__["eManagedTaskStatus"].Running:
                case _shared_shared_models__WEBPACK_IMPORTED_MODULE_2__["eManagedTaskStatus"].Scheduled:
                case _shared_shared_models__WEBPACK_IMPORTED_MODULE_2__["eManagedTaskStatus"].Queued:
                    statusInfo.statusType = 'primary';
                    statusInfo.canCancel = true;
                    break;
                case _shared_shared_models__WEBPACK_IMPORTED_MODULE_2__["eManagedTaskStatus"].Completed:
                    statusInfo.statusType = 'success';
                    statusInfo.canCancel = false;
                    break;
            }
            // update the type, which is used for the colour of the progress
            switch (task.status) {
                case _shared_shared_models__WEBPACK_IMPORTED_MODULE_2__["eManagedTaskStatus"].Error:
                    statusInfo.iconClass = 'fa fa-ban text-danger';
                    break;
                case _shared_shared_models__WEBPACK_IMPORTED_MODULE_2__["eManagedTaskStatus"].Cancelled:
                    statusInfo.iconClass = 'fa fa-ban text-warning';
                    break;
                case _shared_shared_models__WEBPACK_IMPORTED_MODULE_2__["eManagedTaskStatus"].Created:
                    statusInfo.iconClass = 'fa fa-circle text-success';
                    break;
                case _shared_shared_models__WEBPACK_IMPORTED_MODULE_2__["eManagedTaskStatus"].Queued:
                    statusInfo.iconClass = 'fa fa-square';
                    break;
                case _shared_shared_models__WEBPACK_IMPORTED_MODULE_2__["eManagedTaskStatus"].Running:
                    statusInfo.iconClass = 'fa fa-cogs text-success';
                    break;
                case _shared_shared_models__WEBPACK_IMPORTED_MODULE_2__["eManagedTaskStatus"].Scheduled:
                    statusInfo.iconClass = 'fa fa-calendar text-success';
                    break;
                case _shared_shared_models__WEBPACK_IMPORTED_MODULE_2__["eManagedTaskStatus"].Created:
                    statusInfo.iconClass = 'fa fa-cog text-success';
                    break;
                case _shared_shared_models__WEBPACK_IMPORTED_MODULE_2__["eManagedTaskStatus"].Completed:
                    statusInfo.iconClass = 'fa fa-square text-success';
                    break;
            }
            // update the message and error
            statusInfo.message = task.message;
            statusInfo.error = task.message;
        }
        return statusInfo;
    }
    cancelled() {
        if (this.task) {
            this.hubsService.cancelTasks([this.task]);
        }
    }
}
TaskStatusComponent.ɵfac = function TaskStatusComponent_Factory(t) { return new (t || TaskStatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_hubs_service__WEBPACK_IMPORTED_MODULE_1__["HubsService"])); };
TaskStatusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TaskStatusComponent, selectors: [["task-status"]], inputs: { task: "task" }, decls: 1, vars: 1, consts: [["style", "width:100%", 4, "ngIf"], [2, "width", "100%"], [3, "animate", "showCancel", "value", "type", "cancelled", "click"]], template: function TaskStatusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TaskStatusComponent_div_0_Template, 3, 5, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentStatus);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], ngx_d_components__WEBPACK_IMPORTED_MODULE_4__["DProgressbarComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskStatusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'task-status',
                templateUrl: './task-status.component.html'
            }]
    }], function () { return [{ type: _hubs_service__WEBPACK_IMPORTED_MODULE_1__["HubsService"] }]; }, { task: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();
class StatusInfo {
}


/***/ }),

/***/ "./src/app/+hubs/tasks/task-view/index.ts":
/*!************************************************!*\
  !*** ./src/app/+hubs/tasks/task-view/index.ts ***!
  \************************************************/
/*! exports provided: TaskViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _task_view_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task-view.component */ "./src/app/+hubs/tasks/task-view/task-view.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TaskViewComponent", function() { return _task_view_component__WEBPACK_IMPORTED_MODULE_0__["TaskViewComponent"]; });




/***/ }),

/***/ "./src/app/+hubs/tasks/task-view/task-view.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/+hubs/tasks/task-view/task-view.component.ts ***!
  \**************************************************************/
/*! exports provided: TaskViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskViewComponent", function() { return TaskViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../+auth/auth.service */ "./src/app/+auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_shared_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.models */ "./src/app/shared/shared.models.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var ngx_d_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-d-components */ "./node_modules/ngx-d-components/__ivy_ngcc__/fesm2015/ngx-d-components.js");
/* harmony import */ var _shared_utils_calendar_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/utils/calendar.pipe */ "./src/app/shared/utils/calendar.pipe.ts");











function TaskViewComponent_d_widget_1_li_3_d_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskViewComponent_d_widget_1_li_3_d_button_6_Template_d_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r6.exceptionHidden = !ctx_r6.exceptionHidden; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Toggle Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TaskViewComponent_d_widget_1_li_3_pre_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "pre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.task.exceptionDetails);
} }
function TaskViewComponent_d_widget_1_li_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Error encountered!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TaskViewComponent_d_widget_1_li_3_d_button_6_Template, 2, 0, "d-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TaskViewComponent_d_widget_1_li_3_pre_8_Template, 2, 1, "pre", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.task.message, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.task.exceptionDetails);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.exceptionHidden && ctx_r1.task.exceptionDetails);
} }
const _c0 = function (a1, a5, a6) { return ["/hub", a1, "summary", "datalinks", "result-view", a5, a6]; };
function TaskViewComponent_d_widget_1_h6_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "d-button-view", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](1, _c0, ctx_r2.task.referenceKey, ctx_r2.task.data.auditConnectionKey, ctx_r2.task.data.auditKey));
} }
function TaskViewComponent_d_widget_1_h6_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "d-button-view", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](1, _c0, ctx_r3.task.referenceKey, ctx_r3.task.data.auditConnectionKey, ctx_r3.task.data.auditKey));
} }
function TaskViewComponent_d_widget_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-widget", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function TaskViewComponent_d_widget_1_Template_d_widget_close_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TaskViewComponent_d_widget_1_li_3_Template, 9, 3, "li", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Last Updated");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "calendar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, TaskViewComponent_d_widget_1_h6_36_Template, 2, 5, "h6", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, TaskViewComponent_d_widget_1_h6_37_Template, 2, 5, "h6", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Task - " + (ctx_r0.task == null ? null : ctx_r0.task.name))("showCloseButton", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r0.view);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.task == null ? null : ctx_r0.task.status) == ctx_r0.eManagedTaskStatus.Error);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.eManagedTaskStatus[ctx_r0.task.status]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](19, 11, ctx_r0.task.lastUpdate));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.task.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.task.category);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.task.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.task.category === "Datalink");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.task.category === "Datajob");
} }
class TaskViewComponent {
    constructor(authService, router, route) {
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.showPage = false;
        this.showPageMessage = 'Loading...';
        this.eManagedTaskStatus = _shared_shared_models__WEBPACK_IMPORTED_MODULE_4__["eManagedTaskStatus"];
        this.exceptionHidden = true;
    }
    ngOnInit() {
        this.watchChanges();
        try {
            this._subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(this.route.data, this.route.params, this.authService.getTasksObservable()).subscribe(result => {
                let data = result[0];
                let params = result[1];
                let tasks = result[2];
                let reference = params['reference'];
                this.showPage = false;
                this.showPageMessage = 'Loading...';
                this.task = tasks.find(c => c.taskId === reference);
                if (!this.task) {
                    this.authService.navigateUp();
                }
            });
        }
        catch (e) {
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
    watchChanges() {
    }
}
TaskViewComponent.ɵfac = function TaskViewComponent_Factory(t) { return new (t || TaskViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
TaskViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TaskViewComponent, selectors: [["task-view"]], decls: 2, vars: 1, consts: [[1, "container-fluid"], ["iconClass", "fa fa-lg fa-fw fa-trophy", 3, "title", "showCloseButton", "close", 4, "ngIf"], ["iconClass", "fa fa-lg fa-fw fa-trophy", 3, "title", "showCloseButton", "close"], [1, "content", 3, "ngSwitch"], [1, "list-group"], ["class", "list-group-item list-group-item-danger", 4, "ngIf"], [1, "list-group-item", "list-group-item-info"], [1, "list-group-item"], [1, "container"], [1, "row", "rounded", "text-white", "bg-secondary"], [1, "col", "border", "border-white"], [1, "w-100"], [4, "ngIf"], [1, "list-group-item", "list-group-item-danger"], [1, "float-right"], [3, "click", 4, "ngIf"], [3, "click"], ["text", "Datalink Result", 3, "routerLink"], ["text", "Datajob Result", 3, "routerLink"]], template: function TaskViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TaskViewComponent_d_widget_1_Template, 38, 13, "d-widget", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.task);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], ngx_d_components__WEBPACK_IMPORTED_MODULE_6__["DWidgetComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitch"], ngx_d_components__WEBPACK_IMPORTED_MODULE_6__["DButtonComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_6__["DButtonViewComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], pipes: [_shared_utils_calendar_pipe__WEBPACK_IMPORTED_MODULE_7__["CalendarPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'task-view',
                templateUrl: './task-view.component.html',
                styles: []
            }]
    }], function () { return [{ type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/+hubs/tasks/tasks-index/index.ts":
/*!**************************************************!*\
  !*** ./src/app/+hubs/tasks/tasks-index/index.ts ***!
  \**************************************************/
/*! exports provided: TasksIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tasks_index_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tasks-index.component */ "./src/app/+hubs/tasks/tasks-index/tasks-index.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TasksIndexComponent", function() { return _tasks_index_component__WEBPACK_IMPORTED_MODULE_0__["TasksIndexComponent"]; });




/***/ }),

/***/ "./src/app/+hubs/tasks/tasks-index/tasks-index.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/+hubs/tasks/tasks-index/tasks-index.component.ts ***!
  \******************************************************************/
/*! exports provided: TasksIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksIndexComponent", function() { return TasksIndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../+auth/auth.service */ "./src/app/+auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_shared_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/shared.models */ "./src/app/shared/shared.models.ts");
/* harmony import */ var ngx_d_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-d-components */ "./node_modules/ngx-d-components/__ivy_ngcc__/fesm2015/ngx-d-components.js");
/* harmony import */ var ngx_d_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-d-table */ "./node_modules/ngx-d-table/__ivy_ngcc__/fesm2015/ngx-d-table.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _task_status_task_status_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../task-status/task-status.component */ "./src/app/+hubs/tasks/task-status/task-status.component.ts");












const _c0 = function (a1, a5, a6) { return ["/hub", a1, "summary", "datalinks", "result-view", a5, a6]; };
function TasksIndexComponent_ng_template_3_d_button_view_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "d-button-view", 10);
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](1, _c0, item_r4.task.referenceKey, item_r4.task.data.auditConnectionKey, item_r4.task.data.auditKey));
} }
function TasksIndexComponent_ng_template_3_d_button_view_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "d-button-view", 11);
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](1, _c0, item_r4.task.referenceKey, item_r4.task.data.auditConnectionKey, item_r4.task.data.auditKey));
} }
function TasksIndexComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button-view", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TasksIndexComponent_ng_template_3_Template_d_button_view_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const item_r4 = ctx.item; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.showTask(item_r4.task); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TasksIndexComponent_ng_template_3_d_button_view_1_Template, 1, 5, "d-button-view", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TasksIndexComponent_ng_template_3_d_button_view_2_Template, 1, 5, "d-button-view", 9);
} if (rf & 2) {
    const item_r4 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r4.task.category == "Datalink");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r4.task.category == "Datajob");
} }
function TasksIndexComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "task-status", 12);
} if (rf & 2) {
    const item_r11 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("task", item_r11.task);
} }
class TasksIndexComponent {
    constructor(authService, router, route) {
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.showPage = false;
        this.showPageMessage = 'Loading...';
        this.columns = [
            { name: 'hub', title: 'Hub', format: '' },
            { name: 'task.category', title: 'Category', format: '' },
            { name: 'task.status', title: 'Status', format: 'Enum', enum: _shared_shared_models__WEBPACK_IMPORTED_MODULE_4__["eManagedTaskStatus"] },
            { name: 'task.stepName', title: 'Current Step', format: '' },
            { name: 'task.name', title: 'Name', format: '' },
            { name: 'task.lastUpdate', title: 'Last Modified', format: 'Calendar' },
        ];
        this._tableData = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.tableData = this._tableData.asObservable();
    }
    ngOnInit() {
        this._subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(this.route.data, this.route.params, this.authService.getHubsObservable(), this.authService.getTasksObservable()).subscribe(result => {
            let hubs = result[2];
            let tasks = result[3];
            let data = [];
            tasks.forEach(task => {
                let hub = hubs.find(c => c.hubKey === task.referenceKey);
                data.push({
                    hub: hub ? hub.name : 'Unknown hub',
                    task: task
                });
            });
            this._tableData.next(data);
        });
    }
    ngOnDestroy() {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
    }
    showTask(task) {
        this.router.navigate(['view', task.taskId], { relativeTo: this.route });
    }
    close() {
        this.authService.navigateUp();
    }
}
TasksIndexComponent.ɵfac = function TasksIndexComponent_Factory(t) { return new (t || TasksIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
TasksIndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TasksIndexComponent, selectors: [["tasks-index"]], decls: 7, vars: 4, consts: [[1, "container-fluid"], ["title", "Tasks", "iconClass", "fa fa-lg fa-fw fa-exchange", 3, "showCloseButton", "close"], [3, "enableMultiSelect", "columns", "dataObservable", "rowClick"], ["select", "selectedItemAction"], ["selectedItemAction", ""], ["select", "rowStatus"], ["rowStatus", ""], ["text", "View Task", 3, "click"], ["class", "ml-1", "text", "Datalink Result", 3, "routerLink", 4, "ngIf"], ["class", "ml-1", "text", "Datajob Result", 3, "routerLink", 4, "ngIf"], ["text", "Datalink Result", 1, "ml-1", 3, "routerLink"], ["text", "Datajob Result", 1, "ml-1", 3, "routerLink"], [3, "task"]], template: function TasksIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "d-widget", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function TasksIndexComponent_Template_d_widget_close_1_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "d-table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rowClick", function TasksIndexComponent_Template_d_table_rowClick_2_listener($event) { return ctx.showTask($event.task); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TasksIndexComponent_ng_template_3_Template, 3, 2, "ng-template", 3, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TasksIndexComponent_ng_template_5_Template, 1, 1, "ng-template", 5, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showCloseButton", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("enableMultiSelect", true)("columns", ctx.columns)("dataObservable", ctx.tableData);
    } }, directives: [ngx_d_components__WEBPACK_IMPORTED_MODULE_5__["DWidgetComponent"], ngx_d_table__WEBPACK_IMPORTED_MODULE_6__["DTableComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_5__["DButtonViewComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _task_status_task_status_component__WEBPACK_IMPORTED_MODULE_8__["TaskStatusComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TasksIndexComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'tasks-index',
                templateUrl: './tasks-index.component.html',
                styles: []
            }]
    }], function () { return [{ type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=8-es2015.js.map