(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "8MYa":
/*!************************************************!*\
  !*** ./src/app/+admin/admin-main.component.ts ***!
  \************************************************/
/*! exports provided: AdminMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminMainComponent", function() { return AdminMainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");



class AdminMainComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
AdminMainComponent.ɵfac = function AdminMainComponent_Factory(t) { return new (t || AdminMainComponent)(); };
AdminMainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AdminMainComponent, selectors: [["admin-main"]], decls: 2, vars: 0, consts: [["id", "content"]], template: function AdminMainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminMainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'admin-main',
                templateUrl: './admin-main.component.html'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "8VQH":
/*!*****************************************!*\
  !*** ./src/app/+admin/admin.routing.ts ***!
  \*****************************************/
/*! exports provided: routes, Routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routing", function() { return Routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _admin_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-main.component */ "8MYa");
/* harmony import */ var _users_users_index_users_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users/users-index/users-index.component */ "ONAe");
/* harmony import */ var _users_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users/user-edit/user-edit.component */ "PLRb");
/* harmony import */ var _users_users_invite_users_invite_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users/users-invite/users-invite.component */ "huSU");





const routes = [
    { path: '', component: _admin_main_component__WEBPACK_IMPORTED_MODULE_1__["AdminMainComponent"], children: [
            { path: 'users', data: { pageTitle: 'Users' }, children: [
                    { path: '', component: _users_users_index_users_index_component__WEBPACK_IMPORTED_MODULE_2__["UsersIndexComponent"], data: { pageTitle: 'Users Summary' } },
                    { path: 'edit-user/:userName', component: _users_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_3__["UserEditComponent"], data: { action: 'edit', pageTitle: 'Edit User' } },
                    { path: 'new-user', component: _users_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_3__["UserEditComponent"], data: { action: 'new', pageTitle: 'New User' } },
                    { path: 'invite-users', component: _users_users_invite_users_invite_component__WEBPACK_IMPORTED_MODULE_4__["UsersInviteComponent"], data: { pageTitle: 'Invite Users' } },
                ] },
        ] }
];
const Routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);


/***/ }),

/***/ "ONAe":
/*!*******************************************************************!*\
  !*** ./src/app/+admin/users/users-index/users-index.component.ts ***!
  \*******************************************************************/
/*! exports provided: UsersIndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersIndexComponent", function() { return UsersIndexComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../+auth/auth.service */ "ElCs");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _shared_ui_dexihMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/ui/dexihMessage */ "aCdC");
/* harmony import */ var _shared_ui_dexihMessage_dexih_message_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/ui/dexihMessage/dexih-message.component */ "24Dg");
/* harmony import */ var ngx_d_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-d-components */ "8V27");
/* harmony import */ var ngx_d_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-d-table */ "TRJD");











const _c0 = ["DexihMessage"];
function UsersIndexComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersIndexComponent_ng_template_5_Template_d_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const items_r7 = ctx.items; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.reinviteUsers(items_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Resend Invite");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "d-button-delete", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersIndexComponent_ng_template_5_Template_d_button_delete_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const items_r7 = ctx.items; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.deleteUsers(items_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "d-button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersIndexComponent_ng_template_5_Template_d_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const items_r7 = ctx.items; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.revokeUsers(items_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Revoke");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "d-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersIndexComponent_ng_template_5_Template_d_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const items_r7 = ctx.items; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.enableUsers(items_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Enable");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function (a1) { return ["edit-user", a1]; };
function UsersIndexComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "d-button-edit", 13);
} if (rf & 2) {
    const user_r13 = ctx.item;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, user_r13.userName));
} }
const _c2 = function () { return ["new-user"]; };
const _c3 = function () { return ["invite-users"]; };
function UsersIndexComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "d-button-new", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "d-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Invite");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c3));
} }
class UsersIndexComponent {
    constructor(authService, router, route) {
        this.authService = authService;
        this.router = router;
        this.route = route;
        this.columns = [
            { name: 'email', title: 'Email', format: '' },
            { name: 'firstName', title: 'First Name', format: '' },
            { name: 'lastName', title: 'Last Name', format: '' },
            { name: 'isInvited', title: 'Is Invited', format: 'Boolean' },
            { name: 'emailConfirmed', title: 'Email Confirmed', format: 'Boolean' },
            { name: 'isRegistered', title: 'Is Registered', format: 'Boolean' },
            { name: 'isEnabled', title: 'Is Enabled', format: 'Boolean' },
            { name: 'lockoutEnd', title: 'Lockout End', format: 'Time' },
            { name: 'terms', title: 'Agreed terms', format: 'Boolean' },
            { name: 'subscription', title: 'Agreed subscription', format: 'Boolean' },
        ];
        this._tableData = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.tableData = this._tableData.asObservable();
    }
    ngOnInit() {
        this.refreshUsers();
    }
    ngOnDestroy() {
    }
    refreshUsers() {
        this.authService.post('/api/Admin/GetUsers', {
            searchString: '',
            maxResults: 100,
        }, 'Getting user details...').then(result => {
            this._tableData.next(result);
        }).catch(reason => {
            this.dexihMessage.addMessage(reason);
        });
    }
    deleteUsers(users) {
        const emails = users.map(c => c.userName);
        this.authService.confirmDialog('Delete users?', 'This action will delete users with the following emails: <p>' +
            emails.join('</p><p>') + '</p>  <p></p>Are you sure?').then(confirm => {
            if (confirm) {
                this.authService.post('/api/Admin/DeleteUsers', {
                    emails: emails
                }, 'Deleting users...').then(() => {
                    this.refreshUsers();
                }).catch(reason => {
                    this.dexihMessage.addMessage(reason);
                });
            }
        });
    }
    revokeUsers(users) {
        const emails = users.map(c => c.userName);
        this.authService.confirmDialog('Revoke users?', 'This action will revoke users with the following emails: <p>' +
            emails.join('</p><p>') + '</p>  <p></p>Are you sure?').then(confirm => {
            if (confirm) {
                this.authService.post('/api/Admin/RevokeUsers', {
                    emails: users.map(c => c.userName)
                }, 'Revoking users...').then(() => {
                    this.refreshUsers();
                }).catch(reason => {
                    this.dexihMessage.addMessage(reason);
                });
            }
        });
    }
    enableUsers(users) {
        const emails = users.map(c => c.userName);
        this.authService.confirmDialog('Enable users?', 'This action will re-enable logins for users with the following emails: <p>' +
            emails.join('</p><p>') + '</p>  <p></p>Are you sure?').then(confirm => {
            if (confirm) {
                this.authService.post('/api/Admin/EnableUsers', {
                    emails: users.map(c => c.userName)
                }, 'Enabling users...').then(() => {
                    this.refreshUsers();
                }).catch(reason => {
                    this.dexihMessage.addMessage(reason);
                });
            }
        });
    }
    reinviteUsers(users) {
        this.authService.post('/api/Admin/ReInviteUsers', {
            emails: users.map(c => c.userName)
        }, 'Inviting users...').then(() => {
            this.dexihMessage.addSuccessMessage('Emails have been sent to the selected users.');
        }).catch(reason => {
            this.dexihMessage.addMessage(reason);
        });
    }
    editUser(user) {
        this.router.navigate(['edit-user', user.userName], { queryParamsHandling: 'merge', relativeTo: this.route.parent });
    }
}
UsersIndexComponent.ɵfac = function UsersIndexComponent_Factory(t) { return new (t || UsersIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
UsersIndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsersIndexComponent, selectors: [["users"]], viewQuery: function UsersIndexComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dexihMessage = _t.first);
    } }, decls: 11, vars: 3, consts: [["DexihMessage", ""], [1, "container"], ["title", "Users", "iconClass", "fa fa-lg fa-fw fa-group"], [3, "enableMultiSelect", "columns", "dataObservable", "rowClick"], ["select", "selectedItemsAction"], ["selectedItemsAction", ""], ["select", "selectedItemAction"], ["selectedItemAction", ""], ["actions", ""], ["iconClass", "fa fa-envelope", "buttonClass", "btn-primary", "title", "invite or resend invite to selected users.", 1, "mr-1", 3, "click"], ["title", "Delete selected users", 1, "mr-1", 3, "click"], ["iconClass", "fa fa-lock", "buttonClass", "btn-danger", "title", "Revoke selected users access.", 1, "mr-1", 3, "click"], ["iconClass", "fa fa-unlock", "buttonClass", "btn-success", "title", "Re-enable selected users access", 3, "click"], ["title", "Edit User", 3, "routerLink"], ["title", "Create a new user", 1, "mr-1", 3, "routerLink"], ["iconClass", "fa fa-envelope", "buttonClass", "btn-primary", "title", "Invite users", 3, "routerLink"]], template: function UsersIndexComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dexih-message", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "d-widget", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "d-table", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rowClick", function UsersIndexComponent_Template_d_table_rowClick_4_listener($event) { return ctx.editUser($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UsersIndexComponent_ng_template_5_Template, 7, 0, "ng-template", 4, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, UsersIndexComponent_ng_template_7_Template, 1, 3, "ng-template", 6, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UsersIndexComponent_ng_template_9_Template, 3, 4, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("enableMultiSelect", true)("columns", ctx.columns)("dataObservable", ctx.tableData);
    } }, directives: [_shared_ui_dexihMessage_dexih_message_component__WEBPACK_IMPORTED_MODULE_5__["DexihMessageComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_6__["DWidgetComponent"], ngx_d_table__WEBPACK_IMPORTED_MODULE_7__["DTableComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_6__["DButtonComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_6__["DButtonDeleteComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_6__["DButtonEditComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], ngx_d_components__WEBPACK_IMPORTED_MODULE_6__["DButtonNewComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersIndexComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'users',
                templateUrl: './users-index.component.html',
                styles: []
            }]
    }], function () { return [{ type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, { dexihMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['DexihMessage', { static: true }]
        }] }); })();


/***/ }),

/***/ "PLRb":
/*!***************************************************************!*\
  !*** ./src/app/+admin/users/user-edit/user-edit.component.ts ***!
  \***************************************************************/
/*! exports provided: UserEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEditComponent", function() { return UserEditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../+auth/auth.service */ "ElCs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _shared_forms_forms_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/forms/forms.service */ "d2yJ");
/* harmony import */ var _admin_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../admin.models */ "fV0Z");
/* harmony import */ var _shared_ui_dexihMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/ui/dexihMessage */ "aCdC");
/* harmony import */ var _shared_ui_dexihMessage_dexih_message_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/ui/dexihMessage/dexih-message.component */ "24Dg");
/* harmony import */ var ngx_d_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-d-components */ "8V27");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "s7LF");















const _c0 = ["DexihMessage"];
function UserEditComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button-save", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserEditComponent_ng_template_6_Template_d_button_save_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "d-button-cancel", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserEditComponent_ng_template_6_Template_d_button_cancel_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("busy", ctx_r2.formsService.formSaving);
} }
function UserEditComponent_form_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "form-input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "form-input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "form-input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "form-input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "form-checkbox", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "form-checkbox", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "form-input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "form-input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "form-checkbox", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "form-checkbox", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "form-checkbox", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "form-checkbox", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "form-checkbox", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "form-input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "form-input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "form-checkbox", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "section", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "form-checkbox", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r3.formsService.currentForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autocapitalize", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autocapitalize", true);
} }
function UserEditComponent_li_11_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserEditComponent_li_11_Template_a_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const login_r8 = ctx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.deleteLogin(login_r8); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const login_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Provider: ", login_r8.loginProvider, "");
} }
class UserEditComponent {
    constructor(authService, formsService, route) {
        this.authService = authService;
        this.formsService = formsService;
        this.route = route;
    }
    ngOnInit() {
        try {
            this._subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([
                this.route.data,
                this.route.params
            ]).subscribe(result => {
                let data = result[0];
                let params = result[1];
                this.action = data['action'];
                if (this.action === 'new') {
                    const user = new _admin_models__WEBPACK_IMPORTED_MODULE_5__["UserAuthorization"]();
                    this.formsService.createDefault(user, user);
                }
                else {
                    this.email = params['userName'];
                    if (!this.email) {
                        this.authService.navigateUp();
                        return;
                    }
                    this.refreshForm();
                }
            });
        }
        catch (e) {
            this.dexihMessage.addMessage(e.message);
        }
    }
    ngOnDestroy() {
        if (this._subscription) {
            this._subscription.unsubscribe();
        }
    }
    refreshForm() {
        this.authService.post('/api/Admin/GetUser', {
            email: this.email,
        }, 'Getting user details...').then(result => {
            this.logins = result.logins;
            this.formsService.createDefault(result, new _admin_models__WEBPACK_IMPORTED_MODULE_5__["UserAuthorization"]());
        }).catch(reason => {
            this.dexihMessage.addMessage(reason);
        });
    }
    save() {
        const user = this.formsService.currentForm.value;
        if (this.action === 'new') {
            this.authService.post('/api/Admin/AddUsers', {
                users: [user],
                sendInvite: true
            }, 'Adding users...').then(() => {
                this.authService.navigateUp();
            }).catch(reason => {
                this.dexihMessage.addMessage(reason);
            });
        }
        else {
            this.authService.post('/api/Admin/UpdateUsers', {
                users: [user],
            }, 'Updating users...').then(() => {
                this.authService.navigateUp();
            }).catch(reason => {
                this.dexihMessage.addMessage(reason);
            });
        }
    }
    cancel() {
        this.authService.navigateUp();
    }
    deleteLogin(login) {
        const user = this.formsService.currentForm.value;
        this.authService.post('/api/Admin/RemoveExternalLogin', {
            email: user.email,
            provider: login.loginProvider,
            providerKey: login.providerKey
        }, 'Removing external login...').then(() => {
            this.refreshForm();
        }).catch(reason => {
            this.dexihMessage.addMessage(reason);
        });
    }
}
UserEditComponent.ɵfac = function UserEditComponent_Factory(t) { return new (t || UserEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_forms_forms_service__WEBPACK_IMPORTED_MODULE_4__["FormsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
UserEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserEditComponent, selectors: [["user-edit-form"]], viewQuery: function UserEditComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dexihMessage = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_shared_forms_forms_service__WEBPACK_IMPORTED_MODULE_4__["FormsService"]])], decls: 12, vars: 6, consts: [["DexihMessage", ""], [1, "container", "pt-3"], ["title", "Edit User", 3, "padding"], ["title", "User Details", "iconClass", "fa fa-lg fa-fw fa-user", 3, "padding", "showHeader"], ["tabHeader", ""], [3, "formGroup", 4, "ngIf"], ["title", "Logins", "subTitle", "The following login providers are available for this login", "iconClass", "fa fa-lg fa-fw fa-life-saver", 3, "padding"], [1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "mr-1", 3, "busy", "click"], [3, "click"], [3, "formGroup"], ["label", "Email Address", "formControlName", "email", "placeholder", "Enter the email.", "iconClass", "fa fa-list"], ["label", "User Name", "formControlName", "userName", "placeholder", "Enter the user name.", "iconClass", "fa fa-list"], [1, "form-row"], [1, "form-group", "col-md-6"], ["label", "First Name", "formControlName", "firstName", "placeholder", "First Name", 3, "autocapitalize"], ["label", "Last Name", "formControlName", "lastName", "placeholder", "Last Name", 3, "autocapitalize"], ["label", "Agreed Terms", "formControlName", "terms"], ["label", "Agreed Subscription", "formControlName", "subscription"], ["type", "number", "label", "Maximum Personal Hubs", "formControlName", "hubQuota", "placeholder", "Enter the number of hubs", "iconClass", "fa fa-list"], ["type", "number", "label", "Number of invites", "formControlName", "inviteQuota"], ["label", "Is Invited", "formControlName", "isInvited"], ["label", "IsRegistered", "formControlName", "isRegistered"], ["label", "Is Enabled", "formControlName", "isEnabled"], ["label", "Email is confirmed", "formControlName", "emailConfirmed"], ["label", "Lockout Enabled", "formControlName", "lockoutEnabled"], ["type", "date", "label", "Lockout End", "formControlName", "lockoutEnd"], ["label", "Phone Number", "formControlName", "phoneNumber"], ["label", "Phone Number Confirmed", "formControlName", "phoneNumberConfirmed"], ["label", "Two Factor Enabled", "formControlName", "twoFactorEnabled"], [1, "list-group-item"], ["title", "Remove the following login", 1, "btn", "btn-danger", "text-white", 3, "click"]], template: function UserEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dexih-message", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "d-widget");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "d-tabs", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "d-tab", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UserEditComponent_ng_template_6_Template, 2, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UserEditComponent_form_8_Template, 44, 3, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "d-tab", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, UserEditComponent_li_11_Template, 7, 1, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("padding", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("padding", true)("showHeader", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formsService.currentForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("padding", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.logins);
    } }, directives: [_shared_ui_dexihMessage_dexih_message_component__WEBPACK_IMPORTED_MODULE_7__["DexihMessageComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_8__["DWidgetComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_8__["ɵf"], ngx_d_components__WEBPACK_IMPORTED_MODULE_8__["ɵg"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], ngx_d_components__WEBPACK_IMPORTED_MODULE_8__["DButtonSaveComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_8__["DButtonCancelComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormGroupDirective"], ngx_d_components__WEBPACK_IMPORTED_MODULE_8__["DFormInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControlName"], ngx_d_components__WEBPACK_IMPORTED_MODULE_8__["DFormCheckboxComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'user-edit-form',
                templateUrl: './user-edit.component.html',
                providers: [_shared_forms_forms_service__WEBPACK_IMPORTED_MODULE_4__["FormsService"]]
            }]
    }], function () { return [{ type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _shared_forms_forms_service__WEBPACK_IMPORTED_MODULE_4__["FormsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, { dexihMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['DexihMessage', { static: true }]
        }] }); })();


/***/ }),

/***/ "V0Sv":
/*!****************************************!*\
  !*** ./src/app/+admin/admin.module.ts ***!
  \****************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _admin_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin.routing */ "8VQH");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _admin_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin-main.component */ "8MYa");
/* harmony import */ var _users_users_index_users_index_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users/users-index/users-index.component */ "ONAe");
/* harmony import */ var _users_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users/user-edit/user-edit.component */ "PLRb");
/* harmony import */ var _users_users_invite_users_invite_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./users/users-invite/users-invite.component */ "huSU");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "iInd");










class AdminModule {
}
AdminModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdminModule });
AdminModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdminModule_Factory(t) { return new (t || AdminModule)(); }, providers: [], imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _admin_routing__WEBPACK_IMPORTED_MODULE_1__["Routing"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminModule, { declarations: [_admin_main_component__WEBPACK_IMPORTED_MODULE_4__["AdminMainComponent"],
        _users_users_index_users_index_component__WEBPACK_IMPORTED_MODULE_5__["UsersIndexComponent"],
        _users_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_6__["UserEditComponent"],
        _users_users_invite_users_invite_component__WEBPACK_IMPORTED_MODULE_7__["UsersInviteComponent"]], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                    _admin_routing__WEBPACK_IMPORTED_MODULE_1__["Routing"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
                ],
                exports: [],
                declarations: [
                    _admin_main_component__WEBPACK_IMPORTED_MODULE_4__["AdminMainComponent"],
                    _users_users_index_users_index_component__WEBPACK_IMPORTED_MODULE_5__["UsersIndexComponent"],
                    _users_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_6__["UserEditComponent"],
                    _users_users_invite_users_invite_component__WEBPACK_IMPORTED_MODULE_7__["UsersInviteComponent"]
                ],
                providers: [],
            }]
    }], null, null); })();


/***/ }),

/***/ "fV0Z":
/*!****************************************!*\
  !*** ./src/app/+admin/admin.models.ts ***!
  \****************************************/
/*! exports provided: UserAuthorization, UserLogin, UserClaim, Invites, eRole, roles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAuthorization", function() { return UserAuthorization; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLogin", function() { return UserLogin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserClaim", function() { return UserClaim; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Invites", function() { return Invites; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eRole", function() { return eRole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roles", function() { return roles; });
class UserAuthorization {
    constructor() {
        this.hubQuota = 1;
        this.inviteQuota = 5;
        this.firstName = null;
        this.lastName = null;
        this.terms = false;
        this.subscription = false;
        this.isEnabled = false;
        this.isRegistered = false;
        this.isInvited = false;
        this.accessFailedCount = 0;
        this.email = null;
        this.emailConfirmed = false;
        this.userName = null;
        this.id = null;
        this.lockoutEnabled = false;
        this.lockoutEnd = null;
        this.twoFactorEnabled = false;
        this.phoneNumber = null;
        this.phoneNumberConfirmed = false;
    }
}
class UserLogin {
    constructor() {
        this.loginProvider = null;
        this.providerDisplayName = null;
        this.providerKey = null;
        this.userId = null;
    }
}
class UserClaim {
    constructor() {
        this.issuer = null;
        this.originalIssuer = null;
        this.type = null;
        this.valueType = null;
        this.value = null;
    }
}
class Invites {
    constructor() {
        this.emails = [];
        this.hubQuota = 1;
        this.inviteQuota = 5;
        this.role = eRole.User;
    }
}
var eRole;
(function (eRole) {
    eRole[eRole["Administrator"] = 1] = "Administrator";
    eRole[eRole["Manager"] = 2] = "Manager";
    eRole[eRole["User"] = 3] = "User";
    eRole[eRole["Viewer"] = 4] = "Viewer";
    eRole[eRole["None"] = 5] = "None";
})(eRole || (eRole = {}));
const roles = [
    { key: eRole.Administrator, name: 'Administrator' },
    { key: eRole.Manager, name: 'Manager' },
    { key: eRole.User, name: 'User' },
    { key: eRole.Viewer, name: 'Viewer' },
    { key: eRole.None, name: 'None' },
];


/***/ }),

/***/ "huSU":
/*!*********************************************************************!*\
  !*** ./src/app/+admin/users/users-invite/users-invite.component.ts ***!
  \*********************************************************************/
/*! exports provided: UsersInviteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersInviteComponent", function() { return UsersInviteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../+auth/auth.service */ "ElCs");
/* harmony import */ var _shared_forms_forms_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/forms/forms.service */ "d2yJ");
/* harmony import */ var _admin_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../admin.models */ "fV0Z");
/* harmony import */ var _shared_ui_dexihMessage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/ui/dexihMessage */ "aCdC");
/* harmony import */ var _shared_ui_dexihMessage_dexih_message_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/ui/dexihMessage/dexih-message.component */ "24Dg");
/* harmony import */ var ngx_d_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-d-components */ "8V27");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "s7LF");














const _c0 = ["DexihMessage"];
function UsersInviteComponent_ng_template_4_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 8);
} }
const _c1 = function (a0) { return { disabled: a0 }; };
function UsersInviteComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersInviteComponent_ng_template_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.save(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UsersInviteComponent_ng_template_4_i_1_Template, 1, 0, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Send Invites ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "d-button-cancel", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersInviteComponent_ng_template_4_Template_d_button_cancel_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.cancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx_r2.formsService.formSaving || !ctx_r2.formsService.hasChanged));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.formsService.formSaving);
} }
function UsersInviteComponent_form_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "fieldset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "form-tags", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "form-input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "form-input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "form-select", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r3.formsService.currentForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r3.roles)("enableFilter", false);
} }
class UsersInviteComponent {
    constructor(authService, formsService, route) {
        this.authService = authService;
        this.formsService = formsService;
        this.route = route;
        this.roles = _admin_models__WEBPACK_IMPORTED_MODULE_4__["roles"];
    }
    ngOnInit() {
        this._routeDataSubscription = this.route.data.subscribe(data => {
            const inviteUsers = new _admin_models__WEBPACK_IMPORTED_MODULE_4__["Invites"]();
            this.formsService.createDefault(inviteUsers, inviteUsers);
        });
    }
    ngOnDestroy() {
        if (this._routeDataSubscription) {
            this._routeDataSubscription.unsubscribe();
        }
    }
    save() {
        const emails = this.formsService.currentForm.value.emails;
        const hubQuota = this.formsService.currentForm.value.hubQuota;
        const inviteQuota = this.formsService.currentForm.value.inviteQuota;
        const role = this.formsService.currentForm.value.role;
        this.authService.post('/api/Admin/InviteUsers', {
            emails: emails,
            hubQuota: hubQuota,
            inviteQuota: inviteQuota,
            role: role
        }, 'Inviting users...').then(() => {
            this.authService.navigateUp();
        }).catch(reason => {
            this.dexihMessage.addMessage(reason);
        });
    }
    cancel() {
        this.authService.navigateUp();
    }
}
UsersInviteComponent.ɵfac = function UsersInviteComponent_Factory(t) { return new (t || UsersInviteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_forms_forms_service__WEBPACK_IMPORTED_MODULE_3__["FormsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
UsersInviteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsersInviteComponent, selectors: [["users-invite-form"]], viewQuery: function UsersInviteComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dexihMessage = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_shared_forms_forms_service__WEBPACK_IMPORTED_MODULE_3__["FormsService"]])], decls: 7, vars: 2, consts: [["DexihMessage", ""], [1, "container"], ["title", "Invite Users", "iconClass", "fa fa-lg fa-fw fa-user", 3, "padding"], ["tools", ""], [3, "formGroup", 4, "ngIf"], [1, "btn", "btn-primary", "mr-1", 3, "ngClass", "click"], ["class", "fa fa-spin fa-cog", 4, "ngIf"], [3, "click"], [1, "fa", "fa-spin", "fa-cog"], [3, "formGroup"], ["label", "Email Addresses", "formControlName", "emails", "placeholder", "Provide emails to invite.", "note", "Enter email addresses of users to invite to join the integration hub."], [1, "form-row"], [1, "form-group", "col-md-6"], ["type", "number", "label", "Maximum Personal Hubs", "formControlName", "hubQuota", "placeholder", "Enter the number of hubs.", "iconClass", "fa fa-list"], ["type", "number", "label", "Number of invites", "formControlName", "inviteQuota", "placeholder", "Enter the number of invites."], ["label", "Default Role", "formControlName", "role", "itemName", "name", "itemKey", "key", "note", "Enter the role provided to the invited users.", 3, "items", "enableFilter"]], template: function UsersInviteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dexih-message", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "d-widget", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UsersInviteComponent_ng_template_4_Template, 4, 4, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UsersInviteComponent_form_6_Template, 11, 3, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("padding", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formsService.currentForm);
    } }, directives: [_shared_ui_dexihMessage_dexih_message_component__WEBPACK_IMPORTED_MODULE_6__["DexihMessageComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_7__["DWidgetComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], ngx_d_components__WEBPACK_IMPORTED_MODULE_7__["DButtonCancelComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroupDirective"], ngx_d_components__WEBPACK_IMPORTED_MODULE_7__["DFormTagsComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControlName"], ngx_d_components__WEBPACK_IMPORTED_MODULE_7__["DFormInputComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_7__["DFormSelectComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersInviteComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'users-invite-form',
                templateUrl: './users-invite.component.html',
                providers: [_shared_forms_forms_service__WEBPACK_IMPORTED_MODULE_3__["FormsService"]]
            }]
    }], function () { return [{ type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _shared_forms_forms_service__WEBPACK_IMPORTED_MODULE_3__["FormsService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, { dexihMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['DexihMessage', { static: true }]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=10-es2015.js.map