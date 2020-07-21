(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10], {
    /***/
    "./src/app/+admin/admin-main.component.ts":
    /*!************************************************!*\
      !*** ./src/app/+admin/admin-main.component.ts ***!
      \************************************************/

    /*! exports provided: AdminMainComponent */

    /***/
    function srcAppAdminAdminMainComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminMainComponent", function () {
        return AdminMainComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var AdminMainComponent = /*#__PURE__*/function () {
        function AdminMainComponent() {
          _classCallCheck(this, AdminMainComponent);
        }

        _createClass(AdminMainComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AdminMainComponent;
      }();

      AdminMainComponent.ɵfac = function AdminMainComponent_Factory(t) {
        return new (t || AdminMainComponent)();
      };

      AdminMainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AdminMainComponent,
        selectors: [["admin-main"]],
        decls: 2,
        vars: 0,
        consts: [["id", "content"]],
        template: function AdminMainComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminMainComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'admin-main',
            templateUrl: './admin-main.component.html'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/+admin/admin.models.ts":
    /*!****************************************!*\
      !*** ./src/app/+admin/admin.models.ts ***!
      \****************************************/

    /*! exports provided: UserAuthorization, UserLogin, UserClaim, Invites, eRole, roles */

    /***/
    function srcAppAdminAdminModelsTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserAuthorization", function () {
        return UserAuthorization;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserLogin", function () {
        return UserLogin;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserClaim", function () {
        return UserClaim;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Invites", function () {
        return Invites;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "eRole", function () {
        return eRole;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "roles", function () {
        return roles;
      });

      var UserAuthorization = function UserAuthorization() {
        _classCallCheck(this, UserAuthorization);

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
      };

      var UserLogin = function UserLogin() {
        _classCallCheck(this, UserLogin);

        this.loginProvider = null;
        this.providerDisplayName = null;
        this.providerKey = null;
        this.userId = null;
      };

      var UserClaim = function UserClaim() {
        _classCallCheck(this, UserClaim);

        this.issuer = null;
        this.originalIssuer = null;
        this.type = null;
        this.valueType = null;
        this.value = null;
      };

      var Invites = function Invites() {
        _classCallCheck(this, Invites);

        this.emails = [];
        this.hubQuota = 1;
        this.inviteQuota = 5;
        this.role = eRole.User;
      };

      var eRole;

      (function (eRole) {
        eRole[eRole["Administrator"] = 1] = "Administrator";
        eRole[eRole["Manager"] = 2] = "Manager";
        eRole[eRole["User"] = 3] = "User";
        eRole[eRole["Viewer"] = 4] = "Viewer";
        eRole[eRole["None"] = 5] = "None";
      })(eRole || (eRole = {}));

      var roles = [{
        key: eRole.Administrator,
        name: 'Administrator'
      }, {
        key: eRole.Manager,
        name: 'Manager'
      }, {
        key: eRole.User,
        name: 'User'
      }, {
        key: eRole.Viewer,
        name: 'Viewer'
      }, {
        key: eRole.None,
        name: 'None'
      }];
      /***/
    },

    /***/
    "./src/app/+admin/admin.module.ts":
    /*!****************************************!*\
      !*** ./src/app/+admin/admin.module.ts ***!
      \****************************************/

    /*! exports provided: AdminModule */

    /***/
    function srcAppAdminAdminModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AdminModule", function () {
        return AdminModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _admin_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./admin.routing */
      "./src/app/+admin/admin.routing.ts");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared/shared.module */
      "./src/app/shared/shared.module.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _admin_main_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./admin-main.component */
      "./src/app/+admin/admin-main.component.ts");
      /* harmony import */


      var _users_users_index_users_index_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./users/users-index/users-index.component */
      "./src/app/+admin/users/users-index/users-index.component.ts");
      /* harmony import */


      var _users_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./users/user-edit/user-edit.component */
      "./src/app/+admin/users/user-edit/user-edit.component.ts");
      /* harmony import */


      var _users_users_invite_users_invite_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./users/users-invite/users-invite.component */
      "./src/app/+admin/users/users-invite/users-invite.component.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var AdminModule = function AdminModule() {
        _classCallCheck(this, AdminModule);
      };

      AdminModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AdminModule
      });
      AdminModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AdminModule_Factory(t) {
          return new (t || AdminModule)();
        },
        providers: [],
        imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _admin_routing__WEBPACK_IMPORTED_MODULE_1__["Routing"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminModule, {
          declarations: [_admin_main_component__WEBPACK_IMPORTED_MODULE_4__["AdminMainComponent"], _users_users_index_users_index_component__WEBPACK_IMPORTED_MODULE_5__["UsersIndexComponent"], _users_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_6__["UserEditComponent"], _users_users_invite_users_invite_component__WEBPACK_IMPORTED_MODULE_7__["UsersInviteComponent"]],
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _admin_routing__WEBPACK_IMPORTED_MODULE_1__["Routing"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
            exports: [],
            declarations: [_admin_main_component__WEBPACK_IMPORTED_MODULE_4__["AdminMainComponent"], _users_users_index_users_index_component__WEBPACK_IMPORTED_MODULE_5__["UsersIndexComponent"], _users_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_6__["UserEditComponent"], _users_users_invite_users_invite_component__WEBPACK_IMPORTED_MODULE_7__["UsersInviteComponent"]],
            providers: []
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/+admin/admin.routing.ts":
    /*!*****************************************!*\
      !*** ./src/app/+admin/admin.routing.ts ***!
      \*****************************************/

    /*! exports provided: routes, Routing */

    /***/
    function srcAppAdminAdminRoutingTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
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
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _admin_main_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./admin-main.component */
      "./src/app/+admin/admin-main.component.ts");
      /* harmony import */


      var _users_users_index_users_index_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./users/users-index/users-index.component */
      "./src/app/+admin/users/users-index/users-index.component.ts");
      /* harmony import */


      var _users_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./users/user-edit/user-edit.component */
      "./src/app/+admin/users/user-edit/user-edit.component.ts");
      /* harmony import */


      var _users_users_invite_users_invite_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./users/users-invite/users-invite.component */
      "./src/app/+admin/users/users-invite/users-invite.component.ts");

      var routes = [{
        path: '',
        component: _admin_main_component__WEBPACK_IMPORTED_MODULE_1__["AdminMainComponent"],
        children: [{
          path: 'users',
          data: {
            pageTitle: 'Users'
          },
          children: [{
            path: '',
            component: _users_users_index_users_index_component__WEBPACK_IMPORTED_MODULE_2__["UsersIndexComponent"],
            data: {
              pageTitle: 'Users Summary'
            }
          }, {
            path: 'edit-user/:userName',
            component: _users_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_3__["UserEditComponent"],
            data: {
              action: 'edit',
              pageTitle: 'Edit User'
            }
          }, {
            path: 'new-user',
            component: _users_user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_3__["UserEditComponent"],
            data: {
              action: 'new',
              pageTitle: 'New User'
            }
          }, {
            path: 'invite-users',
            component: _users_users_invite_users_invite_component__WEBPACK_IMPORTED_MODULE_4__["UsersInviteComponent"],
            data: {
              pageTitle: 'Invite Users'
            }
          }]
        }]
      }];

      var Routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);
      /***/

    },

    /***/
    "./src/app/+admin/users/user-edit/user-edit.component.ts":
    /*!***************************************************************!*\
      !*** ./src/app/+admin/users/user-edit/user-edit.component.ts ***!
      \***************************************************************/

    /*! exports provided: UserEditComponent */

    /***/
    function srcAppAdminUsersUserEditUserEditComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UserEditComponent", function () {
        return UserEditComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../+auth/auth.service */
      "./src/app/+auth/auth.service.ts");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _shared_forms_forms_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../shared/forms/forms.service */
      "./src/app/shared/forms/forms.service.ts");
      /* harmony import */


      var _admin_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../admin.models */
      "./src/app/+admin/admin.models.ts");
      /* harmony import */


      var _shared_ui_dexihMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../shared/ui/dexihMessage */
      "./src/app/shared/ui/dexihMessage/index.ts");
      /* harmony import */


      var _shared_ui_dexihMessage_dexih_message_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../shared/ui/dexihMessage/dexih-message.component */
      "./src/app/shared/ui/dexihMessage/dexih-message.component.ts");
      /* harmony import */


      var ngx_d_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-d-components */
      "./node_modules/ngx-d-components/__ivy_ngcc__/fesm2015/ngx-d-components.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      var _c0 = ["DexihMessage"];

      function UserEditComponent_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button-save", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserEditComponent_ng_template_5_Template_d_button_save_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "d-button-cancel", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserEditComponent_ng_template_5_Template_d_button_cancel_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.cancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("busy", ctx_r2.formsService.formSaving);
        }
      }

      function UserEditComponent_form_7_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r3.formsService.currentForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autocapitalize", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autocapitalize", true);
        }
      }

      function UserEditComponent_ng_template_9_Template(rf, ctx) {}

      function UserEditComponent_li_12_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserEditComponent_li_12_Template_a_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var login_r10 = ctx.$implicit;

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.deleteLogin(login_r10);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var login_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Provider: ", login_r10.loginProvider, "");
        }
      }

      var UserEditComponent = /*#__PURE__*/function () {
        function UserEditComponent(authService, formsService, route, router, location) {
          _classCallCheck(this, UserEditComponent);

          this.authService = authService;
          this.formsService = formsService;
          this.route = route;
          this.router = router;
          this.location = location;
        }

        _createClass(UserEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            try {
              this._subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(this.route.data, this.route.params).subscribe(function (result) {
                var data = result[0];
                var params = result[1];
                _this.action = data['action'];

                if (_this.action === 'new') {
                  var user = new _admin_models__WEBPACK_IMPORTED_MODULE_6__["UserAuthorization"]();

                  _this.formsService.createDefault(user, user);
                } else {
                  _this.email = params['userName'];

                  if (!_this.email) {
                    _this.authService.navigateUp();

                    return;
                  }

                  _this.refreshForm();
                }
              });
            } catch (e) {
              this.dexihMessage.addMessage(e.message);
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
          key: "refreshForm",
          value: function refreshForm() {
            var _this2 = this;

            this.authService.post('/api/Admin/GetUser', {
              email: this.email
            }, 'Getting user details...').then(function (result) {
              _this2.logins = result.logins;

              _this2.formsService.createDefault(result, new _admin_models__WEBPACK_IMPORTED_MODULE_6__["UserAuthorization"]());
            })["catch"](function (reason) {
              _this2.dexihMessage.addMessage(reason);
            });
          }
        }, {
          key: "save",
          value: function save() {
            var _this3 = this;

            var user = this.formsService.currentForm.value;

            if (this.action === 'new') {
              this.authService.post('/api/Admin/AddUsers', {
                users: [user],
                sendInvite: true
              }, 'Adding users...').then(function (result) {
                _this3.authService.navigateUp();
              })["catch"](function (reason) {
                _this3.dexihMessage.addMessage(reason);
              });
            } else {
              this.authService.post('/api/Admin/UpdateUsers', {
                users: [user]
              }, 'Updating users...').then(function (result) {
                _this3.authService.navigateUp();
              })["catch"](function (reason) {
                _this3.dexihMessage.addMessage(reason);
              });
            }
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this.authService.navigateUp();
          }
        }, {
          key: "deleteLogin",
          value: function deleteLogin(login) {
            var _this4 = this;

            var user = this.formsService.currentForm.value;
            this.authService.post('/api/Admin/RemoveExternalLogin', {
              email: user.email,
              provider: login.loginProvider,
              providerKey: login.providerKey
            }, 'Removing external login...').then(function (result) {
              _this4.refreshForm();
            })["catch"](function (reason) {
              _this4.dexihMessage.addMessage(reason);
            });
          }
        }]);

        return UserEditComponent;
      }();

      UserEditComponent.ɵfac = function UserEditComponent_Factory(t) {
        return new (t || UserEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_forms_forms_service__WEBPACK_IMPORTED_MODULE_5__["FormsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]));
      };

      UserEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UserEditComponent,
        selectors: [["user-edit-form"]],
        viewQuery: function UserEditComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dexihMessage = _t.first);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_shared_forms_forms_service__WEBPACK_IMPORTED_MODULE_5__["FormsService"]])],
        decls: 13,
        vars: 4,
        consts: [["DexihMessage", ""], [1, "container", "pt-3"], ["title", "User Details", "iconClass", "fa fa-lg fa-fw fa-user", 3, "padding"], ["header", ""], [3, "formGroup", 4, "ngIf"], ["title", "Logins", "subTitle", "The following login providers are available for this login", "iconClass", "fa fa-lg fa-fw fa-life-saver", 3, "padding"], ["tools", ""], [1, "list-group"], ["class", "list-group-item", 4, "ngFor", "ngForOf"], [1, "mr-1", 3, "busy", "click"], [3, "click"], [3, "formGroup"], ["label", "Email Address", "formControlName", "email", "placeholder", "Enter the email.", "iconClass", "fa fa-list"], ["label", "User Name", "formControlName", "userName", "placeholder", "Enter the user name.", "iconClass", "fa fa-list"], [1, "form-row"], [1, "form-group", "col-md-6"], ["label", "First Name", "formControlName", "firstName", "placeholder", "First Name", 3, "autocapitalize"], ["label", "Last Name", "formControlName", "lastName", "placeholder", "Last Name", 3, "autocapitalize"], ["label", "Agreed Terms", "formControlName", "terms"], ["label", "Agreed Subscription", "formControlName", "subscription"], ["type", "number", "label", "Maximum Personal Hubs", "formControlName", "hubQuota", "placeholder", "Enter the number of hubs", "iconClass", "fa fa-list"], ["type", "number", "label", "Number of invites", "formControlName", "inviteQuota"], ["label", "Is Invited", "formControlName", "isInvited"], ["label", "IsRegistered", "formControlName", "isRegistered"], ["label", "Is Enabled", "formControlName", "isEnabled"], ["label", "Email is confirmed", "formControlName", "emailConfirmed"], ["label", "Lockout Enabled", "formControlName", "lockoutEnabled"], ["type", "date", "label", "Lockout End", "formControlName", "lockoutEnd"], ["label", "Phone Number", "formControlName", "phoneNumber"], ["label", "Phone Number Confirmed", "formControlName", "phoneNumberConfirmed"], ["label", "Two Factor Enabled", "formControlName", "twoFactorEnabled"], [1, "list-group-item"], ["title", "Remove the following login", 1, "btn", "btn-danger", "text-white", 3, "click"]],
        template: function UserEditComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dexih-message", null, 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "d-widget-vertical");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "d-widget", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UserEditComponent_ng_template_5_Template, 2, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, UserEditComponent_form_7_Template, 44, 3, "form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "d-widget", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UserEditComponent_ng_template_9_Template, 0, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "ul", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, UserEditComponent_li_12_Template, 7, 1, "li", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("padding", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formsService.currentForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("padding", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.logins);
          }
        },
        directives: [_shared_ui_dexihMessage_dexih_message_component__WEBPACK_IMPORTED_MODULE_8__["DexihMessageComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["DWidgetVerticalComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["DWidgetComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["DButtonSaveComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["DButtonCancelComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormGroupDirective"], ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["DFormInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormControlName"], ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["DFormCheckboxComponent"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserEditComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'user-edit-form',
            templateUrl: './user-edit.component.html',
            providers: [_shared_forms_forms_service__WEBPACK_IMPORTED_MODULE_5__["FormsService"]]
          }]
        }], function () {
          return [{
            type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
          }, {
            type: _shared_forms_forms_service__WEBPACK_IMPORTED_MODULE_5__["FormsService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
          }];
        }, {
          dexihMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['DexihMessage', {
              "static": true
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/+admin/users/users-index/users-index.component.ts":
    /*!*******************************************************************!*\
      !*** ./src/app/+admin/users/users-index/users-index.component.ts ***!
      \*******************************************************************/

    /*! exports provided: UsersIndexComponent */

    /***/
    function srcAppAdminUsersUsersIndexUsersIndexComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsersIndexComponent", function () {
        return UsersIndexComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../+auth/auth.service */
      "./src/app/+auth/auth.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "./node_modules/rxjs/_esm2015/index.js");
      /* harmony import */


      var _shared_ui_dexihMessage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../shared/ui/dexihMessage */
      "./src/app/shared/ui/dexihMessage/index.ts");
      /* harmony import */


      var _shared_ui_dexihMessage_dexih_message_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../shared/ui/dexihMessage/dexih-message.component */
      "./src/app/shared/ui/dexihMessage/dexih-message.component.ts");
      /* harmony import */


      var ngx_d_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-d-components */
      "./node_modules/ngx-d-components/__ivy_ngcc__/fesm2015/ngx-d-components.js");
      /* harmony import */


      var ngx_d_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-d-table */
      "./node_modules/ngx-d-table/__ivy_ngcc__/fesm2015/ngx-d-table.js");

      var _c0 = ["DexihMessage"];

      function UsersIndexComponent_ng_template_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "d-button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersIndexComponent_ng_template_5_Template_d_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var items_r7 = ctx.items;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.reinviteUsers(items_r7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Resend Invite");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "d-button-delete", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersIndexComponent_ng_template_5_Template_d_button_delete_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var items_r7 = ctx.items;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.deleteUsers(items_r7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "d-button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersIndexComponent_ng_template_5_Template_d_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var items_r7 = ctx.items;

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.revokeUsers(items_r7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Revoke");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "d-button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersIndexComponent_ng_template_5_Template_d_button_click_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var items_r7 = ctx.items;

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r12.enableUsers(items_r7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Enable");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c1 = function _c1(a1) {
        return ["edit-user", a1];
      };

      function UsersIndexComponent_ng_template_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "d-button-edit", 13);
        }

        if (rf & 2) {
          var user_r13 = ctx.item;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, user_r13.userName));
        }
      }

      var _c2 = function _c2() {
        return ["new-user"];
      };

      var _c3 = function _c3() {
        return ["invite-users"];
      };

      function UsersIndexComponent_ng_template_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "d-button-new", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "d-button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Invite");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c3));
        }
      }

      var UsersIndexComponent = /*#__PURE__*/function () {
        function UsersIndexComponent(authService, router, route) {
          _classCallCheck(this, UsersIndexComponent);

          this.authService = authService;
          this.router = router;
          this.route = route;
          this.columns = [{
            name: 'email',
            title: 'Email',
            format: ''
          }, {
            name: 'firstName',
            title: 'First Name',
            format: ''
          }, {
            name: 'lastName',
            title: 'Last Name',
            format: ''
          }, {
            name: 'isInvited',
            title: 'Is Invited',
            format: 'Boolean'
          }, {
            name: 'emailConfirmed',
            title: 'Email Confirmed',
            format: 'Boolean'
          }, {
            name: 'isRegistered',
            title: 'Is Registered',
            format: 'Boolean'
          }, {
            name: 'isEnabled',
            title: 'Is Enabled',
            format: 'Boolean'
          }, {
            name: 'lockoutEnd',
            title: 'Lockout End',
            format: 'Time'
          }, {
            name: 'terms',
            title: 'Agreed terms',
            format: 'Boolean'
          }, {
            name: 'subscription',
            title: 'Agreed subscription',
            format: 'Boolean'
          }];
          this._tableData = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
          this.tableData = this._tableData.asObservable();
        }

        _createClass(UsersIndexComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.refreshUsers();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {}
        }, {
          key: "refreshUsers",
          value: function refreshUsers() {
            var _this5 = this;

            this.authService.post('/api/Admin/GetUsers', {
              searchString: '',
              maxResults: 100
            }, 'Getting user details...').then(function (result) {
              _this5._tableData.next(result);
            })["catch"](function (reason) {
              _this5.dexihMessage.addMessage(reason);
            });
          }
        }, {
          key: "deleteUsers",
          value: function deleteUsers(users) {
            var _this6 = this;

            var emails = users.map(function (c) {
              return c.userName;
            });
            this.authService.confirmDialog('Delete users?', 'This action will delete users with the following emails: <p>' + emails.join('</p><p>') + '</p>  <p></p>Are you sure?').then(function (confirm) {
              if (confirm) {
                _this6.authService.post('/api/Admin/DeleteUsers', {
                  emails: emails
                }, 'Deleting users...').then(function (result) {
                  _this6.refreshUsers();
                })["catch"](function (reason) {
                  _this6.dexihMessage.addMessage(reason);
                });
              }
            });
          }
        }, {
          key: "revokeUsers",
          value: function revokeUsers(users) {
            var _this7 = this;

            var emails = users.map(function (c) {
              return c.userName;
            });
            this.authService.confirmDialog('Revoke users?', 'This action will revoke users with the following emails: <p>' + emails.join('</p><p>') + '</p>  <p></p>Are you sure?').then(function (confirm) {
              if (confirm) {
                _this7.authService.post('/api/Admin/RevokeUsers', {
                  emails: users.map(function (c) {
                    return c.userName;
                  })
                }, 'Revoking users...').then(function (result) {
                  _this7.refreshUsers();
                })["catch"](function (reason) {
                  _this7.dexihMessage.addMessage(reason);
                });
              }
            });
          }
        }, {
          key: "enableUsers",
          value: function enableUsers(users) {
            var _this8 = this;

            var emails = users.map(function (c) {
              return c.userName;
            });
            this.authService.confirmDialog('Enable users?', 'This action will re-enable logins for users with the following emails: <p>' + emails.join('</p><p>') + '</p>  <p></p>Are you sure?').then(function (confirm) {
              if (confirm) {
                _this8.authService.post('/api/Admin/EnableUsers', {
                  emails: users.map(function (c) {
                    return c.userName;
                  })
                }, 'Enabling users...').then(function (result) {
                  _this8.refreshUsers();
                })["catch"](function (reason) {
                  _this8.dexihMessage.addMessage(reason);
                });
              }
            });
          }
        }, {
          key: "reinviteUsers",
          value: function reinviteUsers(users) {
            var _this9 = this;

            this.authService.post('/api/Admin/ReInviteUsers', {
              emails: users.map(function (c) {
                return c.userName;
              })
            }, 'Inviting users...').then(function (result) {
              _this9.dexihMessage.addSuccessMessage('Emails have been sent to the selected users.');
            })["catch"](function (reason) {
              _this9.dexihMessage.addMessage(reason);
            });
          }
        }, {
          key: "editUser",
          value: function editUser(user) {
            this.router.navigate(['edit-user', user.userName], {
              queryParamsHandling: 'merge',
              relativeTo: this.route.parent
            });
          }
        }]);

        return UsersIndexComponent;
      }();

      UsersIndexComponent.ɵfac = function UsersIndexComponent_Factory(t) {
        return new (t || UsersIndexComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
      };

      UsersIndexComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UsersIndexComponent,
        selectors: [["users"]],
        viewQuery: function UsersIndexComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dexihMessage = _t.first);
          }
        },
        decls: 11,
        vars: 3,
        consts: [["DexihMessage", ""], [1, "container-fluid"], ["title", "Users", "iconClass", "fa fa-lg fa-fw fa-group"], [3, "enableMultiSelect", "columns", "dataObservable", "rowClick"], ["select", "selectedItemsAction"], ["selectedItemsAction", ""], ["select", "selectedItemAction"], ["selectedItemAction", ""], ["actions", ""], ["iconClass", "fa fa-envelope", "buttonClass", "btn-primary", "title", "invite or resend invite to selected users.", 1, "mr-1", 3, "click"], ["title", "Delete selected users", 1, "mr-1", 3, "click"], ["iconClass", "fa fa-lock", "buttonClass", "btn-danger", "title", "Revoke selected users access.", 1, "mr-1", 3, "click"], ["iconClass", "fa fa-unlock", "buttonClass", "btn-success", "title", "Re-enable selected users access", 3, "click"], ["title", "Edit User", 3, "routerLink"], ["title", "Create a new user", 1, "mr-1", 3, "routerLink"], ["iconClass", "fa fa-envelope", "buttonClass", "btn-primary", "title", "Invite users", 3, "routerLink"]],
        template: function UsersIndexComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dexih-message", null, 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "d-widget", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "d-table", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("rowClick", function UsersIndexComponent_Template_d_table_rowClick_4_listener($event) {
              return ctx.editUser($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UsersIndexComponent_ng_template_5_Template, 7, 0, "ng-template", 4, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, UsersIndexComponent_ng_template_7_Template, 1, 3, "ng-template", 6, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UsersIndexComponent_ng_template_9_Template, 3, 4, "ng-template", null, 8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("enableMultiSelect", true)("columns", ctx.columns)("dataObservable", ctx.tableData);
          }
        },
        directives: [_shared_ui_dexihMessage_dexih_message_component__WEBPACK_IMPORTED_MODULE_5__["DexihMessageComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_6__["DWidgetComponent"], ngx_d_table__WEBPACK_IMPORTED_MODULE_7__["DTableComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_6__["DButtonComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_6__["DButtonDeleteComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_6__["DButtonEditComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], ngx_d_components__WEBPACK_IMPORTED_MODULE_6__["DButtonNewComponent"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersIndexComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'users',
            templateUrl: './users-index.component.html',
            styles: []
          }]
        }], function () {
          return [{
            type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }];
        }, {
          dexihMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['DexihMessage', {
              "static": true
            }]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/+admin/users/users-invite/users-invite.component.ts":
    /*!*********************************************************************!*\
      !*** ./src/app/+admin/users/users-invite/users-invite.component.ts ***!
      \*********************************************************************/

    /*! exports provided: UsersInviteComponent */

    /***/
    function srcAppAdminUsersUsersInviteUsersInviteComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "UsersInviteComponent", function () {
        return UsersInviteComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../+auth/auth.service */
      "./src/app/+auth/auth.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _shared_forms_forms_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../shared/forms/forms.service */
      "./src/app/shared/forms/forms.service.ts");
      /* harmony import */


      var _admin_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../admin.models */
      "./src/app/+admin/admin.models.ts");
      /* harmony import */


      var _shared_ui_dexihMessage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../shared/ui/dexihMessage */
      "./src/app/shared/ui/dexihMessage/index.ts");
      /* harmony import */


      var _shared_ui_dexihMessage_dexih_message_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../shared/ui/dexihMessage/dexih-message.component */
      "./src/app/shared/ui/dexihMessage/dexih-message.component.ts");
      /* harmony import */


      var ngx_d_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-d-components */
      "./node_modules/ngx-d-components/__ivy_ngcc__/fesm2015/ngx-d-components.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      var _c0 = ["DexihMessage"];

      function UsersInviteComponent_ng_template_4_i_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 8);
        }
      }

      var _c1 = function _c1(a0) {
        return {
          disabled: a0
        };
      };

      function UsersInviteComponent_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersInviteComponent_ng_template_4_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.save();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UsersInviteComponent_ng_template_4_i_1_Template, 1, 0, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Send Invites ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "d-button-cancel", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersInviteComponent_ng_template_4_Template_d_button_cancel_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.cancel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx_r2.formsService.formSaving || !ctx_r2.formsService.hasChanged));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.formsService.formSaving);
        }
      }

      function UsersInviteComponent_form_6_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r3.formsService.currentForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r3.roles)("enableFilter", false);
        }
      }

      var UsersInviteComponent = /*#__PURE__*/function () {
        function UsersInviteComponent(authService, formsService, route, router, location) {
          _classCallCheck(this, UsersInviteComponent);

          this.authService = authService;
          this.formsService = formsService;
          this.route = route;
          this.router = router;
          this.location = location;
          this.roles = _admin_models__WEBPACK_IMPORTED_MODULE_5__["roles"];
        }

        _createClass(UsersInviteComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this10 = this;

            this._routeDataSubscription = this.route.data.subscribe(function (data) {
              _this10.action = data['action'];
              var inviteUsers = new _admin_models__WEBPACK_IMPORTED_MODULE_5__["Invites"]();

              _this10.formsService.createDefault(inviteUsers, inviteUsers);
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this._routeDataSubscription) {
              this._routeDataSubscription.unsubscribe();
            }
          }
        }, {
          key: "save",
          value: function save() {
            var _this11 = this;

            var emails = this.formsService.currentForm.value.emails;
            var hubQuota = this.formsService.currentForm.value.hubQuota;
            var inviteQuota = this.formsService.currentForm.value.inviteQuota;
            var role = this.formsService.currentForm.value.role;
            this.authService.post('/api/Admin/InviteUsers', {
              emails: emails,
              hubQuota: hubQuota,
              inviteQuota: inviteQuota,
              role: role
            }, 'Inviting users...').then(function (result) {
              _this11.authService.navigateUp();
            })["catch"](function (reason) {
              _this11.dexihMessage.addMessage(reason);
            });
          }
        }, {
          key: "cancel",
          value: function cancel() {
            this.authService.navigateUp();
          }
        }]);

        return UsersInviteComponent;
      }();

      UsersInviteComponent.ɵfac = function UsersInviteComponent_Factory(t) {
        return new (t || UsersInviteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_forms_forms_service__WEBPACK_IMPORTED_MODULE_4__["FormsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]));
      };

      UsersInviteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: UsersInviteComponent,
        selectors: [["users-invite-form"]],
        viewQuery: function UsersInviteComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.dexihMessage = _t.first);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_shared_forms_forms_service__WEBPACK_IMPORTED_MODULE_4__["FormsService"]])],
        decls: 7,
        vars: 2,
        consts: [["DexihMessage", ""], [1, "container-fluid"], ["title", "Invite Users", "iconClass", "fa fa-lg fa-fw fa-user", 3, "padding"], ["tools", ""], [3, "formGroup", 4, "ngIf"], [1, "btn", "btn-primary", "mr-1", 3, "ngClass", "click"], ["class", "fa fa-spin fa-cog", 4, "ngIf"], [3, "click"], [1, "fa", "fa-spin", "fa-cog"], [3, "formGroup"], ["label", "Email Addresses", "formControlName", "emails", "placeholder", "Provide emails to invite.", "note", "Enter email addresses of users to invite to join the integration hub."], [1, "form-row"], [1, "form-group", "col-md-6"], ["type", "number", "label", "Maximum Personal Hubs", "formControlName", "hubQuota", "placeholder", "Enter the number of hubs.", "iconClass", "fa fa-list"], ["type", "number", "label", "Number of invites", "formControlName", "inviteQuota", "placeholder", "Enter the number of invites."], ["label", "Default Role", "formControlName", "role", "itemName", "name", "itemKey", "key", "note", "Enter the role provided to the invited users.", 3, "items", "enableFilter"]],
        template: function UsersInviteComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "dexih-message", null, 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "d-widget", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UsersInviteComponent_ng_template_4_Template, 4, 4, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, UsersInviteComponent_form_6_Template, 11, 3, "form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("padding", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formsService.currentForm);
          }
        },
        directives: [_shared_ui_dexihMessage_dexih_message_component__WEBPACK_IMPORTED_MODULE_7__["DexihMessageComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_8__["DWidgetComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], ngx_d_components__WEBPACK_IMPORTED_MODULE_8__["DButtonCancelComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroupDirective"], ngx_d_components__WEBPACK_IMPORTED_MODULE_8__["DFormTagsComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormControlName"], ngx_d_components__WEBPACK_IMPORTED_MODULE_8__["DFormInputComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_8__["DFormSelectComponent"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersInviteComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'users-invite-form',
            templateUrl: './users-invite.component.html',
            providers: [_shared_forms_forms_service__WEBPACK_IMPORTED_MODULE_4__["FormsService"]]
          }]
        }], function () {
          return [{
            type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
          }, {
            type: _shared_forms_forms_service__WEBPACK_IMPORTED_MODULE_4__["FormsService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
          }];
        }, {
          dexihMessage: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['DexihMessage', {
              "static": true
            }]
          }]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=10-es5.js.map