(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9], {
    /***/
    "./src/app/+auth/auth.component.ts":
    /*!*****************************************!*\
      !*** ./src/app/+auth/auth.component.ts ***!
      \*****************************************/

    /*! exports provided: AuthComponent */

    /***/
    function srcAppAuthAuthComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthComponent", function () {
        return AuthComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./auth.service */
      "./src/app/+auth/auth.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var AuthComponent = /*#__PURE__*/function () {
        function AuthComponent(authService) {
          _classCallCheck(this, AuthComponent);

          authService.initialize();
        }

        _createClass(AuthComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AuthComponent;
      }();

      AuthComponent.ɵfac = function AuthComponent_Factory(t) {
        return new (t || AuthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]));
      };

      AuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AuthComponent,
        selectors: [["app-auth"]],
        decls: 1,
        vars: 0,
        template: function AuthComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
        encapsulation: 2
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-auth',
            template: '<router-outlet></router-outlet>'
          }]
        }], function () {
          return [{
            type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/+auth/auth.module.ts":
    /*!**************************************!*\
      !*** ./src/app/+auth/auth.module.ts ***!
      \**************************************/

    /*! exports provided: AuthModule */

    /***/
    function srcAppAuthAuthModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthModule", function () {
        return AuthModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _auth_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./auth.routing */
      "./src/app/+auth/auth.routing.ts");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../shared/shared.module */
      "./src/app/shared/shared.module.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./login/login.component */
      "./src/app/+auth/login/login.component.ts");
      /* harmony import */


      var _locked_locked_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./locked/locked.component */
      "./src/app/+auth/locked/locked.component.ts");
      /* harmony import */


      var _notInvited_notInvited_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./notInvited/notInvited.component */
      "./src/app/+auth/notInvited/notInvited.component.ts");
      /* harmony import */


      var _register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./register/register.component */
      "./src/app/+auth/register/register.component.ts");
      /* harmony import */


      var _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./forgot/forgot.component */
      "./src/app/+auth/forgot/forgot.component.ts");
      /* harmony import */


      var _verifyemail_verifyemail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./verifyemail/verifyemail.component */
      "./src/app/+auth/verifyemail/verifyemail.component.ts");
      /* harmony import */


      var _terms_terms_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./terms/terms.component */
      "./src/app/+auth/terms/terms.component.ts");
      /* harmony import */


      var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./welcome/welcome.component */
      "./src/app/+auth/welcome/welcome.component.ts");
      /* harmony import */


      var _auth_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./auth.component */
      "./src/app/+auth/auth.component.ts");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./auth.service */
      "./src/app/+auth/auth.service.ts");
      /* harmony import */


      var _help_help_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./help/help.component */
      "./src/app/+auth/help/help.component.ts");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./header/header.component */
      "./src/app/+auth/header/header.component.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var AuthModule = /*#__PURE__*/function () {
        function AuthModule() {
          _classCallCheck(this, AuthModule);
        }

        _createClass(AuthModule, null, [{
          key: "forRoot",
          value: function forRoot() {
            return {
              ngModule: AuthModule,
              providers: [_auth_service__WEBPACK_IMPORTED_MODULE_13__["AuthService"]]
            };
          }
        }]);

        return AuthModule;
      }();

      AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AuthModule
      });
      AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AuthModule_Factory(t) {
          return new (t || AuthModule)();
        },
        imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _auth_routing__WEBPACK_IMPORTED_MODULE_1__["Routing"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthModule, {
          declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _locked_locked_component__WEBPACK_IMPORTED_MODULE_5__["LockedComponent"], _notInvited_notInvited_component__WEBPACK_IMPORTED_MODULE_6__["NotInvitedComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"], _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_8__["ForgotComponent"], _verifyemail_verifyemail_component__WEBPACK_IMPORTED_MODULE_9__["VerifyEmailComponent"], _auth_component__WEBPACK_IMPORTED_MODULE_12__["AuthComponent"], _terms_terms_component__WEBPACK_IMPORTED_MODULE_10__["TermsComponent"], _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_11__["WelcomeComponent"], _help_help_component__WEBPACK_IMPORTED_MODULE_14__["HelpComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_15__["HeaderComponent"]],
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _auth_routing__WEBPACK_IMPORTED_MODULE_1__["Routing"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _locked_locked_component__WEBPACK_IMPORTED_MODULE_5__["LockedComponent"], _notInvited_notInvited_component__WEBPACK_IMPORTED_MODULE_6__["NotInvitedComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"], _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_8__["ForgotComponent"], _verifyemail_verifyemail_component__WEBPACK_IMPORTED_MODULE_9__["VerifyEmailComponent"], _auth_component__WEBPACK_IMPORTED_MODULE_12__["AuthComponent"], _terms_terms_component__WEBPACK_IMPORTED_MODULE_10__["TermsComponent"], _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_11__["WelcomeComponent"], _help_help_component__WEBPACK_IMPORTED_MODULE_14__["HelpComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_15__["HeaderComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/+auth/auth.routing.ts":
    /*!***************************************!*\
      !*** ./src/app/+auth/auth.routing.ts ***!
      \***************************************/

    /*! exports provided: routes, Routing */

    /***/
    function srcAppAuthAuthRoutingTs(module, __webpack_exports__, __webpack_require__) {
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


      var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./login/login.component */
      "./src/app/+auth/login/login.component.ts");
      /* harmony import */


      var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./register/register.component */
      "./src/app/+auth/register/register.component.ts");
      /* harmony import */


      var _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./forgot/forgot.component */
      "./src/app/+auth/forgot/forgot.component.ts");
      /* harmony import */


      var _locked_locked_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./locked/locked.component */
      "./src/app/+auth/locked/locked.component.ts");
      /* harmony import */


      var _verifyemail_verifyemail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./verifyemail/verifyemail.component */
      "./src/app/+auth/verifyemail/verifyemail.component.ts");
      /* harmony import */


      var _terms_terms_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./terms/terms.component */
      "./src/app/+auth/terms/terms.component.ts");
      /* harmony import */


      var _notInvited_notInvited_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./notInvited/notInvited.component */
      "./src/app/+auth/notInvited/notInvited.component.ts");
      /* harmony import */


      var _help_help_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./help/help.component */
      "./src/app/+auth/help/help.component.ts");
      /* harmony import */


      var _auth_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./auth.component */
      "./src/app/+auth/auth.component.ts");

      var routes = [{
        path: '',
        component: _auth_component__WEBPACK_IMPORTED_MODULE_9__["AuthComponent"],
        children: [{
          path: 'login',
          component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]
        }, {
          path: 'register',
          component: _register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"]
        }, {
          path: 'terms',
          component: _terms_terms_component__WEBPACK_IMPORTED_MODULE_6__["TermsComponent"]
        }, {
          path: 'privacy',
          redirectTo: '/help?path=policies%2Fprivacy.md',
          pathMatch: 'full'
        }, {
          path: 'unsubscribe',
          redirectTo: '/hubs/index/manage',
          pathMatch: 'full'
        }, {
          path: 'forgot-password',
          component: _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_3__["ForgotComponent"]
        }, {
          path: 'locked',
          component: _locked_locked_component__WEBPACK_IMPORTED_MODULE_4__["LockedComponent"]
        }, {
          path: 'notInvited',
          component: _notInvited_notInvited_component__WEBPACK_IMPORTED_MODULE_7__["NotInvitedComponent"]
        }, {
          path: 'verifyemail',
          component: _verifyemail_verifyemail_component__WEBPACK_IMPORTED_MODULE_5__["VerifyEmailComponent"]
        }, {
          path: 'help',
          component: _help_help_component__WEBPACK_IMPORTED_MODULE_8__["HelpComponent"]
        }]
      }];

      var Routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);
      /***/

    },

    /***/
    "./src/app/+auth/forgot/forgot.component.ts":
    /*!**************************************************!*\
      !*** ./src/app/+auth/forgot/forgot.component.ts ***!
      \**************************************************/

    /*! exports provided: ForgotComponent */

    /***/
    function srcAppAuthForgotForgotComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ForgotComponent", function () {
        return ForgotComponent;
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


      var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../auth.service */
      "./src/app/+auth/auth.service.ts");
      /* harmony import */


      var _auth_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../auth.models */
      "./src/app/+auth/auth.models.ts");
      /* harmony import */


      var _shared_forms_forms_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../shared/forms/forms.service */
      "./src/app/shared/forms/forms.service.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../header/header.component */
      "./src/app/+auth/header/header.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var ngx_d_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-d-components */
      "./node_modules/ngx-d-components/__ivy_ngcc__/fesm2015/ngx-d-components.js");

      function ForgotComponent_form_3_section_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " A verification code has been sent to your email. Cut/paste the code below and enter your new password. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ForgotComponent_form_3_section_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " If you have received already received your verification code, cut/paste the code below and enter your new password. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function ForgotComponent_form_3_section_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.message, " ");
        }
      }

      function ForgotComponent_form_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Integration Hub - Forgot Password ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Enter your email to request a verification code before resetting your password. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "fieldset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "form-input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "I remembered my password!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgotComponent_form_3_Template_button_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.submitCodeRequest();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Request Reset Code ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ForgotComponent_form_3_section_18_Template, 3, 0, "section", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, ForgotComponent_form_3_section_19_Template, 3, 0, "section", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ForgotComponent_form_3_section_20_Template, 3, 1, "section", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " New Password ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "fieldset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "form-input", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "form-input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "form-input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ForgotComponent_form_3_Template_button_click_32_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6.submitPasswordReset();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "i", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Reset Password ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.formsService.currentForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.codeSent);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.codeSent);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.message);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r0.formsService.formErrors.password);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r0.formsService.formErrors.passwordConfirm);
        }
      }

      var ForgotComponent = /*#__PURE__*/function () {
        function ForgotComponent(router, route, formsService, userService, fb) {
          _classCallCheck(this, ForgotComponent);

          this.router = router;
          this.route = route;
          this.formsService = formsService;
          this.userService = userService;
          this.fb = fb;
          this.logoUrl = _auth_models__WEBPACK_IMPORTED_MODULE_3__["logoUrl"];
          this.codeSent = false;
        }

        _createClass(ForgotComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this._queryParamSubscription = this.route.queryParams.subscribe(function (params) {
              var email = params['email'];
              var verificationCode = params['code'];

              var registerForm = _this.fb.group({
                'email': [email, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
                'verificationCode': [verificationCode, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
                'password': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,}$')]],
                'passwordConfirm': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
              }, {
                validator: _this.passwordsMatch()
              });

              _this.formsService.startForm(registerForm);

              if (email && verificationCode) {
                _this.codeSent = true;
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this._queryParamSubscription) {
              this._queryParamSubscription.unsubscribe();
            }
          }
        }, {
          key: "passwordsMatch",
          value: function passwordsMatch() {
            var _this2 = this;

            return function (group) {
              if (_this2.formsService.currentForm) {
                var password = group.controls['password'];
                var passwordConfirm = group.controls['passwordConfirm'];

                if (password.value !== passwordConfirm.value) {
                  passwordConfirm.setErrors({
                    'passwordMatch': true
                  });
                }

                return;
              }
            };
          }
        }, {
          key: "submitCodeRequest",
          value: function submitCodeRequest() {
            var _this3 = this;

            var email = this.formsService.currentForm.controls.email.value;
            this.userService.forgotPassword(email).then(function (result) {
              _this3.codeSent = true;
              _this3.message = 'Email has been sent with instructions for resetting password.';
            })["catch"](function (reason) {
              _this3.message = reason.message;
            });
          }
        }, {
          key: "submitPasswordReset",
          value: function submitPasswordReset() {
            var _this4 = this;

            var email = this.formsService.currentForm.controls.email.value;
            var verificationCode = this.formsService.currentForm.controls.verificationCode.value;
            var password = this.formsService.currentForm.controls.password.value;
            var passwordConfirm = this.formsService.currentForm.controls.passwordConfirm.value;

            if (password !== passwordConfirm) {
              this.message = 'The passwords do not match.';
              return;
            }

            this.userService.resetPassword(email, verificationCode, password).then(function (result) {
              if (result) {
                if (!_this4.userService.redirectUrl) {
                  _this4.router.navigate(['/']);
                } else {
                  _this4.router.navigateByUrl(_this4.userService.redirectUrl);
                }
              } else {
                _this4.message = 'Reset password failed.  Please contact support to proceed.';
              }
            })["catch"](function (reason) {
              _this4.message = reason.message;
            });
          }
        }]);

        return ForgotComponent;
      }();

      ForgotComponent.ɵfac = function ForgotComponent_Factory(t) {
        return new (t || ForgotComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_forms_forms_service__WEBPACK_IMPORTED_MODULE_4__["FormsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]));
      };

      ForgotComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ForgotComponent,
        selectors: [["app-forgot"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_shared_forms_forms_service__WEBPACK_IMPORTED_MODULE_4__["FormsService"]])],
        decls: 4,
        vars: 2,
        consts: [[3, "showSignIn"], [1, "login-container"], [1, "card"], [3, "formGroup", 4, "ngIf"], [3, "formGroup"], [1, "card-header"], [1, "card-body"], [1, "alert", "alert-info"], ["label", "Email", "formControlName", "email", "iconClass", "fa fa-envelope"], [1, "note"], ["routerLink", "/auth/login"], [1, "card-footer"], [1, "btn", "btn-primary", 3, "click"], [1, "fa", "fa-refresh"], [4, "ngIf"], ["label", "Verification Code", "formControlName", "verificationCode", "iconClass", "fa fa-lock"], ["label", "Password", "formControlName", "password", "type", "password", "placeholder", "Password", "iconClass", "fa fa-lock", 3, "errors"], ["label", "Confirm Password", "formControlName", "passwordConfirm", "type", "password", "placeholder", "Confirm Password", "iconClass", "fa fa-lock", 3, "errors"], [1, "alert", "alert-success"], [1, "alert", "alert-danger"]],
        template: function ForgotComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "auth-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ForgotComponent_form_3_Template, 35, 6, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showSignIn", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formsService.currentForm);
          }
        },
        directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroupDirective"], ngx_d_components__WEBPACK_IMPORTED_MODULE_8__["DFormInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        styles: [".login-container[_ngcontent-%COMP%] {\n  max-width: 500px;\n  max-height: 100%;\n  padding: 5px;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvK2F1dGgvYXV0aC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC8rYXV0aC9hdXRoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA1MDBweDsgXG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWFyZ2luOiBhdXRvO1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ForgotComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-forgot',
            templateUrl: './forgot.component.html',
            styleUrls: ['../auth.component.scss'],
            providers: [_shared_forms_forms_service__WEBPACK_IMPORTED_MODULE_4__["FormsService"]]
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: _shared_forms_forms_service__WEBPACK_IMPORTED_MODULE_4__["FormsService"]
          }, {
            type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/+auth/header/header.component.ts":
    /*!**************************************************!*\
      !*** ./src/app/+auth/header/header.component.ts ***!
      \**************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function srcAppAuthHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _auth_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../auth.models */
      "./src/app/+auth/auth.models.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var ngx_d_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-d-components */
      "./node_modules/ngx-d-components/__ivy_ngcc__/fesm2015/ngx-d-components.js");

      function HeaderComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Need an account? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sign Up");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function HeaderComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Already Registered? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Sign In");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var HeaderComponent = function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);

        this.showSignUp = false;
        this.showSignIn = false;
        this.logoUrl = _auth_models__WEBPACK_IMPORTED_MODULE_1__["logoUrl"];
      };

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)();
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["auth-header"]],
        inputs: {
          showSignUp: "showSignUp",
          showSignIn: "showSignIn"
        },
        decls: 30,
        vars: 5,
        consts: [[1, "navbar", "navbar-expand-md", "navbar-dark", "bg-dark"], ["id", "logo-group"], ["id", "logo"], ["alt", "Data Experts Group", 3, "src"], [1, "collapse", "navbar-collapse", "mr-sm-2"], [1, "form-inline"], [4, "ngIf"], ["routerLink", "/auth/help", 1, "d-none", "d-md-inline", "btn", "btn-secondary", "text-white", "mr-1"], ["buttonClass", "btn-primary", "iconClass", "fa fa-navicon", 3, "pullRight", "hideCarrot"], ["routerLink", "/auth/register", 1, "dropdown-item"], ["routerLink", "/auth/login", 1, "dropdown-item"], [1, "dropdown-divider"], ["routerLink", "/auth/forgot-password", 1, "dropdown-item"], ["routerLink", "/auth/verifyemail", 1, "dropdown-item"], ["routerLink", "/public", 1, "dropdown-item"], ["routerLink", "/auth/privacy", 1, "dropdown-item"], ["routerLink", "/auth/terms", 1, "dropdown-item"], ["routerLink", "/auth/help", 1, "dropdown-item"], [1, "d-none", "d-md-inline", "text-white", "m-1"], ["routerLink", "/auth/register", 1, "btn", "btn-success", "mr-1"], ["routerLink", "/auth/login", 1, "btn", "btn-success", "mr-1"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, HeaderComponent_div_6_Template, 5, 0, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, HeaderComponent_div_7_Template, 5, 0, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Help");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "d-button-dropdown", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Sign Up");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Sign In");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Forgot password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Verify password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Public Data Sets");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Privacy Policy");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Terms and Conditions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Help");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSignUp);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showSignIn);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pullRight", true)("hideCarrot", true);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], ngx_d_components__WEBPACK_IMPORTED_MODULE_5__["DButtonDropDownComponent"]],
        styles: [".login-container[_ngcontent-%COMP%] {\n  max-width: 500px;\n  max-height: 100%;\n  padding: 5px;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvK2F1dGgvYXV0aC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC8rYXV0aC9hdXRoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA1MDBweDsgXG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWFyZ2luOiBhdXRvO1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'auth-header',
            templateUrl: './header.component.html',
            styleUrls: ['../auth.component.scss']
          }]
        }], null, {
          showSignUp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          showSignIn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/+auth/help/help.component.ts":
    /*!**********************************************!*\
      !*** ./src/app/+auth/help/help.component.ts ***!
      \**********************************************/

    /*! exports provided: HelpComponent */

    /***/
    function srcAppAuthHelpHelpComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HelpComponent", function () {
        return HelpComponent;
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


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _auth_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../auth.models */
      "./src/app/+auth/auth.models.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../header/header.component */
      "./src/app/+auth/header/header.component.ts");
      /* harmony import */


      var ngx_d_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-d-components */
      "./node_modules/ngx-d-components/__ivy_ngcc__/fesm2015/ngx-d-components.js");
      /* harmony import */


      var ngx_d_markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-d-markdown */
      "./node_modules/ngx-d-markdown/fesm2015/ngx-d-markdown.js");
      /* harmony import */


      var _shared_ui_icons_print_print_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../shared/ui/icons/print/print-button.component */
      "./src/app/shared/ui/icons/print/print-button.component.ts");

      function HelpComponent_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "print-button");
        }
      }

      var HelpComponent = /*#__PURE__*/function () {
        function HelpComponent(router, route, http, location) {
          _classCallCheck(this, HelpComponent);

          this.router = router;
          this.route = route;
          this.http = http;
          this.location = location;
          this.logoUrl = _auth_models__WEBPACK_IMPORTED_MODULE_3__["logoUrl"];
        }

        _createClass(HelpComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this._subscription = this.route.queryParams.subscribe(function (params) {
              var path = params['path'];

              if (path) {
                _this5.path = '/assets/help/' + path;
              } else {
                _this5.path = '/assets/help/intro/getting_started.md';
              }

              _this5.getData(_this5.path);
            });
          }
        }, {
          key: "getData",
          value: function getData(path) {
            var _this6 = this;

            if (path) {
              var url = this.location.prepareExternalUrl(this.path);
              this.http.get(url, {
                responseType: 'text'
              }).subscribe(function (result) {
                var matches = new RegExp('{{SERVER}}|{{HUBKEY}}', 'gi');
                _this6.data = result.replace(matches, function (match) {
                  switch (match) {
                    case '{{SERVER}}':
                      return _this6.location.prepareExternalUrl('./');
                  }
                });
              });
            }
          }
        }, {
          key: "printTerms",
          value: function printTerms() {
            var printContents, popupWin;
            printContents = document.getElementById('help-body').innerHTML;
            popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
            popupWin.document.open();
            popupWin.document.write("\n      <html>\n        <head>\n          <title>Print tab</title>\n          <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css\" integrity=\"sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh\" crossorigin=\"anonymous\">\n          <style>\n          </style>\n        </head>\n    <body onload=\"window.print();window.close()\">".concat(printContents, "</body>\n      </html>"));
            popupWin.document.close();
          }
        }, {
          key: "getRoute",
          value: function getRoute(event) {
            var element = event.target;

            while (element) {
              var link = element.getAttribute('href');

              if (link) {
                if (link.endsWith('.md') && !link.startsWith('http')) {
                  this.router.navigate([], {
                    relativeTo: this.route,
                    queryParams: {
                      'path': link
                    }
                  });
                } else if (link.startsWith('route:')) {// don't allow link clicks unless logged in
                } else if (link.startsWith('unsafe:route:')) {
                  var route = link.substr(13);
                  this.router.navigate([route]);
                } else if (link.startsWith('#')) {
                  this.router.navigate(['.', link]);
                } else {
                  window.open(link);
                }

                event.preventDefault();
              }

              element = element.parentElement;
            }
          }
        }]);

        return HelpComponent;
      }();

      HelpComponent.ɵfac = function HelpComponent_Factory(t) {
        return new (t || HelpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]));
      };

      HelpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HelpComponent,
        selectors: [["help"]],
        decls: 7,
        vars: 3,
        consts: [[3, "showSignIn"], ["id", "print-section", 1, "container", "p-1"], ["title", "Help", "iconClass", "fa fa-lg fa-fw fa-question", 3, "padding"], ["header", ""], ["id", "print-body", 1, "container-fluid"], [3, "data", "click"]],
        template: function HelpComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "auth-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "d-widget", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HelpComponent_ng_template_3_Template, 1, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "markdown", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HelpComponent_Template_markdown_click_6_listener($event) {
              return ctx.getRoute($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showSignIn", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("padding", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.data);
          }
        },
        directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_6__["DWidgetComponent"], ngx_d_markdown__WEBPACK_IMPORTED_MODULE_7__["DMarkdownComponent"], _shared_ui_icons_print_print_button_component__WEBPACK_IMPORTED_MODULE_8__["PrintButtonComponent"]],
        styles: [".terms-body[_ngcontent-%COMP%] {\n  max-height: 400px;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvK2F1dGgvaGVscC9oZWxwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MsaUJBQWlCO0VBQ2pCLGNBQWM7QUFDZiIsImZpbGUiOiJzcmMvYXBwLythdXRoL2hlbHAvaGVscC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXJtcy1ib2R5IHtcblx0bWF4LWhlaWdodDogNDAwcHg7XG5cdG92ZXJmbG93OiBhdXRvO1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HelpComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'help',
            templateUrl: './help.component.html',
            styleUrls: ['./help.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/+auth/locked/locked.component.ts":
    /*!**************************************************!*\
      !*** ./src/app/+auth/locked/locked.component.ts ***!
      \**************************************************/

    /*! exports provided: LockedComponent */

    /***/
    function srcAppAuthLockedLockedComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LockedComponent", function () {
        return LockedComponent;
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


      var _auth_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../auth.models */
      "./src/app/+auth/auth.models.ts");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../header/header.component */
      "./src/app/+auth/header/header.component.ts");

      var LockedComponent = /*#__PURE__*/function () {
        function LockedComponent(router, route) {
          _classCallCheck(this, LockedComponent);

          this.router = router;
          this.route = route;
          this.logoUrl = _auth_models__WEBPACK_IMPORTED_MODULE_2__["logoUrl"];
        }

        _createClass(LockedComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this7 = this;

            this._queryParamSubscription = this.route.queryParams.subscribe(function (queryParams) {
              _this7.email = queryParams['email'];
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this._queryParamSubscription) {
              this._queryParamSubscription.unsubscribe();
            }
          }
        }, {
          key: "unlock",
          value: function unlock($event) {
            alert('This function is not available.');
          }
        }]);

        return LockedComponent;
      }();

      LockedComponent.ɵfac = function LockedComponent_Factory(t) {
        return new (t || LockedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
      };

      LockedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LockedComponent,
        selectors: [["app-locked"]],
        decls: 10,
        vars: 2,
        consts: [[3, "showSignIn"], [1, "login-container"], [1, "card"], [1, "card-header"], [1, "card-body"], ["href", "mailto:support@dataexpertsgroup.com", 1, "btn", "btn-primary"]],
        template: function LockedComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "auth-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Accounts can become locked with multiple failed logins, or when suspected malicious activity occurs. To unlock your account, email support below. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Email support");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showSignIn", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.email, " is locked ");
          }
        },
        directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]],
        styles: [".login-container[_ngcontent-%COMP%] {\n  max-width: 500px;\n  max-height: 100%;\n  padding: 5px;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvK2F1dGgvYXV0aC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC8rYXV0aC9hdXRoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA1MDBweDsgXG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWFyZ2luOiBhdXRvO1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LockedComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-locked',
            templateUrl: './locked.component.html',
            styleUrls: ['../auth.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/+auth/login/login.component.ts":
    /*!************************************************!*\
      !*** ./src/app/+auth/login/login.component.ts ***!
      \************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function srcAppAuthLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
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


      var _auth_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../auth.models */
      "./src/app/+auth/auth.models.ts");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../auth.service */
      "./src/app/+auth/auth.service.ts");
      /* harmony import */


      var _logging__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../logging */
      "./src/logging.ts");
      /* harmony import */


      var _shared_shared_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../shared/shared.models */
      "./src/app/shared/shared.models.ts");
      /* harmony import */


      var _shared_utils_functions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../shared/utils/functions */
      "./src/app/shared/utils/functions.ts");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../header/header.component */
      "./src/app/+auth/header/header.component.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var ngx_d_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ngx-d-components */
      "./node_modules/ngx-d-components/__ivy_ngcc__/fesm2015/ngx-d-components.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

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

      function LoginComponent_section_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form-input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_section_10_Template_form_input_ngModelChange_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r8.user.password = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Forgot password?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.user.password);
        }
      }

      function LoginComponent_section_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.message, " ");
        }
      }

      function LoginComponent_div_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onsubmit", function LoginComponent_div_14_Template_button_onsubmit_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10.login($event);
          })("click", function LoginComponent_div_14_Template_button_click_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r12.login($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Sign In \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_div_15_button_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_15_button_4_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r15.googleLogin(true);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Change User \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_div_15_button_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_15_button_5_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r17.googleLogout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logout \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_div_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onsubmit", function LoginComponent_div_15_Template_button_onsubmit_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r19.login($event);
          })("click", function LoginComponent_div_15_Template_button_click_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r21.login($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Google Sign In \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LoginComponent_div_15_button_4_Template, 3, 0, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LoginComponent_div_15_button_5_Template, 3, 0, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.externalLogin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.externalLogin);
        }
      }

      function LoginComponent_div_16_button_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_16_button_4_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r24.microsoftLogin(true);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Change User \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_div_16_button_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_16_button_5_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r26.microsoftLogout();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logout \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_div_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onsubmit", function LoginComponent_div_16_Template_button_onsubmit_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r28.login($event);
          })("click", function LoginComponent_div_16_Template_button_click_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r30.login($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Microsoft Sign In \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LoginComponent_div_16_button_4_Template, 3, 0, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LoginComponent_div_16_button_5_Template, 3, 0, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.externalLogin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.externalLogin);
        }
      }

      function LoginComponent_div_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_21_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r31.enablePassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xA0\xA0Change to User/Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_div_22_Template(rf, ctx) {
        if (rf & 1) {
          var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_22_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r33.enableGoogle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xA0\xA0Change to Google");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function LoginComponent_div_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_23_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r35.enableMicrosoft();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xA0\xA0Change to Microsoft");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(router, route, authService) {
          _classCallCheck(this, LoginComponent);

          this.router = router;
          this.route = route;
          this.authService = authService;
          this.logoUrl = _auth_models__WEBPACK_IMPORTED_MODULE_2__["logoUrl"];
          this.externalLogin = null;
          this.loginType = _shared_shared_models__WEBPACK_IMPORTED_MODULE_5__["eLoginProvider"].Dexih;
          this.eLoginProvider = _shared_shared_models__WEBPACK_IMPORTED_MODULE_5__["eLoginProvider"];
          this.logger = new _logging__WEBPACK_IMPORTED_MODULE_4__["LogFactory"]('login.component');
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.user = new _auth_models__WEBPACK_IMPORTED_MODULE_2__["User"]('', '', '', false); // this.authService.refreshGlobalCache();

            var loginType = +_shared_utils_functions__WEBPACK_IMPORTED_MODULE_6__["Functions"].getCookie('LoginType');

            switch (loginType) {
              case _shared_shared_models__WEBPACK_IMPORTED_MODULE_5__["eLoginProvider"].Google:
                this.enableGoogle();
                break;

              case _shared_shared_models__WEBPACK_IMPORTED_MODULE_5__["eLoginProvider"].Microsoft:
                this.enableMicrosoft();
                break;

              default:
                this.enablePassword();
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {}
        }, {
          key: "login",
          value: function login() {
            var _this8 = this;

            switch (this.loginType) {
              case _shared_shared_models__WEBPACK_IMPORTED_MODULE_5__["eLoginProvider"].Dexih:
                this.authService.login(this.user).then(function (result) {
                  _this8.doLogin(result);
                })["catch"](function (reason) {
                  _this8.message = reason.message;
                });
                break;

              case _shared_shared_models__WEBPACK_IMPORTED_MODULE_5__["eLoginProvider"].Google:
                this.googleLogin(false);
                break;

              case _shared_shared_models__WEBPACK_IMPORTED_MODULE_5__["eLoginProvider"].Microsoft:
                this.microsoftLogin(false);
                break;
            }
          }
        }, {
          key: "enablePassword",
          value: function enablePassword() {
            _shared_utils_functions__WEBPACK_IMPORTED_MODULE_6__["Functions"].setCookie('LoginType', _shared_shared_models__WEBPACK_IMPORTED_MODULE_5__["eLoginProvider"].Dexih.toString());

            this.user.email = '';
            this.message = '';
            this.loginType = _shared_shared_models__WEBPACK_IMPORTED_MODULE_5__["eLoginProvider"].Dexih;
          }
        }, {
          key: "enableGoogle",
          value: function enableGoogle() {
            var _this9 = this;

            this.user.email = '';
            this.message = '';

            _shared_utils_functions__WEBPACK_IMPORTED_MODULE_6__["Functions"].setCookie('LoginType', _shared_shared_models__WEBPACK_IMPORTED_MODULE_5__["eLoginProvider"].Google.toString());

            this.loginType = _shared_shared_models__WEBPACK_IMPORTED_MODULE_5__["eLoginProvider"].Google;
            this.authService.googleEnable().then(function (externalLogin) {
              _this9.externalLogin = externalLogin;

              if (externalLogin) {
                _this9.user.email = externalLogin.email;
              } else {
                _this9.user.email = '(no current google login)';
              }
            })["catch"](function (reason) {
              _this9.message = reason.message;
            });
          }
        }, {
          key: "enableMicrosoft",
          value: function enableMicrosoft() {
            var _this10 = this;

            this.user.email = '';
            this.message = '';
            this.loginType = _shared_shared_models__WEBPACK_IMPORTED_MODULE_5__["eLoginProvider"].Microsoft;

            _shared_utils_functions__WEBPACK_IMPORTED_MODULE_6__["Functions"].setCookie('LoginType', _shared_shared_models__WEBPACK_IMPORTED_MODULE_5__["eLoginProvider"].Microsoft.toString());

            this.authService.microsoftEnable().then(function (externalLogin) {
              _this10.externalLogin = externalLogin;

              if (externalLogin) {
                _this10.user.email = externalLogin.email;
              } else {
                _this10.user.email = '(no current microsoft login)';
              }
            })["catch"](function (reason) {
              _this10.message = reason.message;
            });
          }
        }, {
          key: "googleLogin",
          value: function googleLogin(forceLogin) {
            var _this11 = this;

            this.authService.googleLogin(forceLogin).then(function (result) {
              _this11.doLogin(result);
            })["catch"](function (reason) {
              _this11.message = reason.message;
            });
          }
        }, {
          key: "googleLogout",
          value: function googleLogout() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.authService.googleSignOut();

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "microsoftLogin",
          value: function microsoftLogin(forceLogin) {
            var _this12 = this;

            this.authService.microsoftLogin(forceLogin).then(function (result) {
              _this12.doLogin(result);
            })["catch"](function (reason) {
              _this12.message = reason.message;
            });
          }
        }, {
          key: "microsoftLogout",
          value: function microsoftLogout() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.authService.microsoftSignOut();

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "doLogin",
          value: function doLogin(user) {
            if (user) {
              if (user.emailConfirmed) {
                if (!this.authService.redirectUrl) {
                  this.router.navigate(['/']);
                } else {
                  this.router.navigateByUrl(this.authService.redirectUrl);
                }
              } else {
                this.router.navigate(['verifyemail'], {
                  queryParams: {
                    email: user.email
                  },
                  relativeTo: this.route.parent
                });
              }
            } else {
              this.message = 'Login failed.  Please check credentials.';
            }
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        decls: 32,
        vars: 12,
        consts: [[3, "showSignUp"], [1, "login-container"], [1, "card"], [1, "card-header"], [1, "card-body"], ["label", "Login", "name", "email", "iconClass", "fa fa-user txt-color-teal", "title", "Please enter your user name or email address", "placeholder", "Login", 3, "disabled", "ngModel", "ngModelChange"], [4, "ngIf"], ["label", "Stay signed in", "name", "remember", 3, "ngModel", "ngModelChange"], ["class", "card-footer", 4, "ngIf"], [1, "card", "mt-2"], ["class", "mt-2", 4, "ngIf"], [1, "mt-2"], ["routerLink", "/public", 1, "btn", "btn-success", 2, "width", "100%"], [1, "fa", "fa-newspaper-o"], ["label", "Password", "name", "password", "type", "password", "iconClass", "fa fa-lock txt-color-teal", "placeholder", "Password...", "title", "Please enter your password", 3, "ngModel", "ngModelChange"], ["routerLink", "/auth/forgot-password"], [1, "alert", "alert-danger"], [1, "card-footer"], ["type", "submit", 1, "btn", "btn-success", 3, "onsubmit", "click"], [1, "fa", "fa-sign-in"], ["type", "submit", 1, "btn", "btn-danger", 3, "onsubmit", "click"], ["class", "btn btn-danger ml-1", 3, "click", 4, "ngIf"], [1, "btn", "btn-danger", "ml-1", 3, "click"], [1, "fa", "fa-google"], ["type", "submit", 1, "btn", "btn-primary", 3, "onsubmit", "click"], ["class", "btn btn-primary ml-1", 3, "click", 4, "ngIf"], [1, "btn", "btn-primary", "ml-1", 3, "click"], [1, "fa", "fa-windows"], [1, "btn", "btn-success", 2, "width", "100%", 3, "click"], [1, "btn", "btn-danger", 2, "width", "100%", 3, "click"], [1, "btn", "btn-primary", 2, "width", "100%", 3, "click"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "auth-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Integration Hub - Sign In ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "fieldset");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form-input", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_form_input_ngModelChange_9_listener($event) {
              return ctx.user.email = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LoginComponent_section_10_Template, 5, 1, "section", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form-checkbox", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_form_checkbox_ngModelChange_12_listener($event) {
              return ctx.user.rememberMe = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LoginComponent_section_13_Template, 3, 1, "section", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, LoginComponent_div_14_Template, 4, 0, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LoginComponent_div_15_Template, 6, 2, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, LoginComponent_div_16_Template, 6, 2, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Other Sign-in Options ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, LoginComponent_div_21_Template, 4, 0, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, LoginComponent_div_22_Template, 4, 0, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, LoginComponent_div_23_Template, 4, 0, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " View the Public Data ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\xA0\xA0View Public Data");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showSignUp", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loginType != ctx.eLoginProvider.Dexih)("ngModel", ctx.user.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginType == ctx.eLoginProvider.Dexih);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.user.rememberMe);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginType === ctx.eLoginProvider.Dexih);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginType === ctx.eLoginProvider.Google);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginType === ctx.eLoginProvider.Microsoft);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginType != ctx.eLoginProvider.Dexih);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginType != ctx.eLoginProvider.Google);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginType != ctx.eLoginProvider.Microsoft);
          }
        },
        directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgForm"], ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["DFormInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], ngx_d_components__WEBPACK_IMPORTED_MODULE_9__["DFormCheckboxComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        styles: [".login-container[_ngcontent-%COMP%] {\n  max-width: 500px;\n  max-height: 100%;\n  padding: 5px;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvK2F1dGgvYXV0aC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC8rYXV0aC9hdXRoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA1MDBweDsgXG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWFyZ2luOiBhdXRvO1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['../auth.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/+auth/notInvited/notInvited.component.ts":
    /*!**********************************************************!*\
      !*** ./src/app/+auth/notInvited/notInvited.component.ts ***!
      \**********************************************************/

    /*! exports provided: NotInvitedComponent */

    /***/
    function srcAppAuthNotInvitedNotInvitedComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotInvitedComponent", function () {
        return NotInvitedComponent;
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


      var _auth_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../auth.models */
      "./src/app/+auth/auth.models.ts");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../header/header.component */
      "./src/app/+auth/header/header.component.ts");

      var NotInvitedComponent = /*#__PURE__*/function () {
        function NotInvitedComponent(router, route) {
          _classCallCheck(this, NotInvitedComponent);

          this.router = router;
          this.route = route;
          this.logoUrl = _auth_models__WEBPACK_IMPORTED_MODULE_2__["logoUrl"];
        }

        _createClass(NotInvitedComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this13 = this;

            this._queryParamSubscription = this.route.queryParams.subscribe(function (params) {
              _this13.email = params['email'];
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this._queryParamSubscription) {
              this._queryParamSubscription.unsubscribe();
            }
          }
        }]);

        return NotInvitedComponent;
      }();

      NotInvitedComponent.ɵfac = function NotInvitedComponent_Factory(t) {
        return new (t || NotInvitedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
      };

      NotInvitedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NotInvitedComponent,
        selectors: [["app-notInvited"]],
        decls: 23,
        vars: 2,
        consts: [[3, "showSignIn"], [1, "login-container"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "no-margin", "margin-top-5"], ["routerLink", "/auth/login"], [1, "pb-3"], ["href", "mailto:support@dataexpertsgroup.com"], ["href", "https://dataexpertsgroup.com", 1, "btn", "btn-primary", "mr-1"], ["href", "http://dataexpertsgroup.com/integration_hub", 1, "btn", "btn-primary"]],
        template: function NotInvitedComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "auth-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Access will be provided shortly... ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Login as someone else? ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Click here");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " This platform currently is invite only. Your email has been registered and an invite will be sent when available. Please contact support with any queries at ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "support@dataexpertsgroup.com");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, ". ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Data Experts Group");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Find out more");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " < ");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showSignIn", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Your email \"", ctx.email, "\"\" does not have an invite to the Integration Hub.");
          }
        },
        directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        styles: [".login-container[_ngcontent-%COMP%] {\n  max-width: 500px;\n  max-height: 100%;\n  padding: 5px;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvK2F1dGgvYXV0aC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC8rYXV0aC9hdXRoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA1MDBweDsgXG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWFyZ2luOiBhdXRvO1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotInvitedComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-notInvited',
            templateUrl: './notInvited.component.html',
            styleUrls: ['../auth.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/+auth/register/register.component.ts":
    /*!******************************************************!*\
      !*** ./src/app/+auth/register/register.component.ts ***!
      \******************************************************/

    /*! exports provided: RegisterComponent */

    /***/
    function srcAppAuthRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
        return RegisterComponent;
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


      var _auth_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../auth.models */
      "./src/app/+auth/auth.models.ts");
      /* harmony import */


      var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../auth.service */
      "./src/app/+auth/auth.service.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _shared_forms_forms_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../shared/forms/forms.service */
      "./src/app/shared/forms/forms.service.ts");
      /* harmony import */


      var _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../shared/shared.models */
      "./src/app/shared/shared.models.ts");
      /* harmony import */


      var _shared_utils_functions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../shared/utils/functions */
      "./src/app/shared/utils/functions.ts");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../header/header.component */
      "./src/app/+auth/header/header.component.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var ngx_d_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-d-components */
      "./node_modules/ngx-d-components/__ivy_ngcc__/fesm2015/ngx-d-components.js");

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

      function RegisterComponent_form_3_section_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "form-input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r4.formsService.formErrors.password);
        }
      }

      function RegisterComponent_form_3_form_input_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "form-input", 27);
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r5.formsService.formErrors.passwordConfirm);
        }
      }

      function RegisterComponent_form_3_section_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.message, " ");
        }
      }

      function RegisterComponent_form_3_section_30_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "d-button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_form_3_section_30_Template_d_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r11.googleLogin(true);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Google could not automatically sign-in due to \"", ctx_r7.googleMessage, "\". Click login button to open new window to login to your google account. ");
        }
      }

      function RegisterComponent_form_3_section_31_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "d-button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_form_3_section_31_Template_d_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r13.microsoftLogin(true);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Microsoft could not automatically sign-in due to \"", ctx_r8.microsoftMessage, "\". Click login button to open new window to login to your microsoft account. ");
        }
      }

      function RegisterComponent_form_3_button_35_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_form_3_button_35_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r15.googleLogin(true);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Change User \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_form_3_button_36_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_form_3_button_36_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r17.microsoftLogin(true);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Change User \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return {
          standalone: true
        };
      };

      var _c1 = function _c1() {
        return {
          "path": "policies/privacy.md"
        };
      };

      function RegisterComponent_form_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Complete your Registration ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "fieldset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form-input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function RegisterComponent_form_3_Template_form_input_ngModelChange_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r19.eLoginProvider[ctx_r19.formsService.currentForm.controls.provider.value] = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "form-input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "form-input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, RegisterComponent_form_3_section_11_Template, 2, 1, "section", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, RegisterComponent_form_3_form_input_13_Template, 1, 1, "form-input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "fieldset");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "section", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "form-input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "section", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "form-input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "form-checkbox", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "form-checkbox", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " I agree with the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_form_3_Template_a_click_24_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r21.showTerms();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Terms and Conditions ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " & ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Privacy Policy ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, RegisterComponent_form_3_section_29_Template, 3, 1, "section", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, RegisterComponent_form_3_section_30_Template, 4, 1, "section", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, RegisterComponent_form_3_section_31_Template, 4, 1, "section", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_form_3_Template_button_click_33_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r22.register();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Register ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, RegisterComponent_form_3_button_35_Template, 3, 0, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, RegisterComponent_form_3_button_36_Template, 3, 0, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.formsService.currentForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.eLoginProvider[ctx_r0.formsService.currentForm.controls.provider.value])("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c0))("disabled", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r0.formsService.formErrors.userName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r0.formsService.formErrors.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loginType == ctx_r0.eLoginProvider.Dexih);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loginType == ctx_r0.eLoginProvider.Dexih);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r0.formsService.formErrors.firstName)("autocapitalize", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r0.formsService.formErrors.lastName)("autocapitalize", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("errors", ctx_r0.formsService.formErrors.terms);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.message);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loginType != ctx_r0.eLoginProvider.Google && ctx_r0.googleMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loginType != ctx_r0.eLoginProvider.Microsoft && ctx_r0.microsoftMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loginType == ctx_r0.eLoginProvider.Google);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loginType == ctx_r0.eLoginProvider.Microsoft);
        }
      }

      function RegisterComponent_div_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_div_8_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r23.enablePassword();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xA0\xA0Sign in with User/Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_div_9_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r25.enableGoogle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xA0\xA0Sign in with Google");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function RegisterComponent_div_10_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_div_10_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r28);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r27.enableMicrosoft();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xA0\xA0Sign in with Microsoft");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var RegisterComponent = /*#__PURE__*/function () {
        function RegisterComponent(router, route, authService, formsService, fb) {
          _classCallCheck(this, RegisterComponent);

          this.router = router;
          this.route = route;
          this.authService = authService;
          this.formsService = formsService;
          this.fb = fb;
          this.logoUrl = _auth_models__WEBPACK_IMPORTED_MODULE_2__["logoUrl"];
          this.loginType = _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eLoginProvider"].Dexih;
          this.eLoginProvider = _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eLoginProvider"];
          this.passwordValidators = [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,}$'), this.passwordsMatch()];
        }

        _createClass(RegisterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this14 = this;

            this._queryParamSubscription = this.route.queryParams.subscribe(function (params) {
              var email = params['email'];
              var code = params['code'];

              var registerForm = _this14.fb.group({
                'provider': [{
                  value: '',
                  disabled: true
                }, []],
                'userName': ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                'email': [email, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
                'password': ['', _this14.passwordValidators],
                'passwordConfirm': ['', []],
                'firstName': ['', []],
                'lastName': ['', []],
                'terms': [false, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].requiredTrue]],
                'subscription': [false, []],
                'code': [code, []],
                'providerKey': [code, []],
                'authenticationToken': [code, []]
              }, {
                validator: _this14.passwordsMatch()
              });

              _this14.formsService.startForm(registerForm);

              var loginType = +_shared_utils_functions__WEBPACK_IMPORTED_MODULE_7__["Functions"].getCookie('LoginType');

              switch (loginType) {
                case _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eLoginProvider"].Google:
                  _this14.enableGoogle();

                  break;

                case _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eLoginProvider"].Microsoft:
                  _this14.enableMicrosoft();

                  break;

                default:
                  _this14.enablePassword();

              } // this.formsService.currentForm.controls.provider.valueChanges.subscribe(provider => {
              //   if (provider !== this.previousProvider) {
              //     this.previousProvider = provider;
              //     switch (provider) {
              //       case eLoginProvider.UserPass:
              //         this.setExternalProvider(false);
              //         this.formsService.currentForm.controls.providerKey.setValue(null);
              //         this.formsService.currentForm.controls.authenticationToken.setValue(null);
              //         this.formsService.currentForm.controls.password.setValidators([
              //           Validators.required,
              //           Validators.minLength(3),
              //           Validators.maxLength(20),
              //           this.passwordsMatch()
              //         ]);
              //         break;
              //       case eLoginProvider.Google:
              //         this.googleLogin(false);
              //         break;
              //       case eLoginProvider.Microsoft:
              //         this.microsoftLogin(false);
              //         break;
              //     }
              //   }
              // });

            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this._queryParamSubscription) {
              this._queryParamSubscription.unsubscribe();
            }
          }
        }, {
          key: "enablePassword",
          value: function enablePassword() {
            this.formsService.currentForm.controls.email.enable();
            this.formsService.currentForm.controls.provider.setValue(_shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eLoginProvider"].Dexih);

            _shared_utils_functions__WEBPACK_IMPORTED_MODULE_7__["Functions"].setCookie('LoginType', _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eLoginProvider"].Dexih.toString());

            this.message = '';
            this.loginType = _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eLoginProvider"].Dexih;
            this.formsService.currentForm.controls.providerKey.setValue(null);
            this.formsService.currentForm.controls.authenticationToken.setValue(null);
            this.formsService.currentForm.controls.password.setValidators(this.passwordValidators);
          }
        }, {
          key: "enableGoogle",
          value: function enableGoogle() {
            var _this15 = this;

            this.formsService.currentForm.controls.email.setValue('');
            this.formsService.currentForm.controls.provider.setValue(_shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eLoginProvider"].Google); // this.formsService.currentForm.controls.email.disable();

            this.message = '';

            _shared_utils_functions__WEBPACK_IMPORTED_MODULE_7__["Functions"].setCookie('LoginType', _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eLoginProvider"].Google.toString());

            this.loginType = _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eLoginProvider"].Google;
            this.authService.googleEnable().then(function (externalLogin) {
              _this15.setExternalLogin(externalLogin);
            })["catch"](function (reason) {
              _this15.message = reason.message;
            });
          }
        }, {
          key: "enableMicrosoft",
          value: function enableMicrosoft() {
            var _this16 = this;

            this.formsService.currentForm.controls.email.setValue('');
            this.formsService.currentForm.controls.provider.setValue(_shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eLoginProvider"].Microsoft); // this.formsService.currentForm.controls.email.disable();

            this.message = '';
            this.loginType = _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eLoginProvider"].Microsoft;

            _shared_utils_functions__WEBPACK_IMPORTED_MODULE_7__["Functions"].setCookie('LoginType', _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eLoginProvider"].Microsoft.toString());

            this.authService.microsoftEnable().then(function (externalLogin) {
              _this16.setExternalLogin(externalLogin);
            })["catch"](function (reason) {
              _this16.message = reason.message;
            });
          }
        }, {
          key: "setExternalLogin",
          value: function setExternalLogin(externalLogin) {
            this.formsService.currentForm.controls.email.disable();

            if (externalLogin) {
              this.formsService.currentForm.controls.email.setValue(externalLogin.email);
              this.formsService.currentForm.controls.password.setValidators([]);
              this.formsService.currentForm.controls.password.setErrors(null);
              this.formsService.currentForm.controls.passwordConfirm.setValidators([]);
              this.formsService.currentForm.controls.passwordConfirm.setErrors(null);
              this.formsService.currentForm.controls.providerKey.setValue(externalLogin.providerKey);
              this.formsService.currentForm.controls.authenticationToken.setValue(externalLogin.authenticationToken);

              if (externalLogin.firstName) {
                this.formsService.currentForm.controls.firstName.setValue(externalLogin.firstName);
              }

              if (externalLogin.lastName) {
                this.formsService.currentForm.controls.lastName.setValue(externalLogin.lastName);
              }
            } else {
              this.formsService.currentForm.controls.email.setValue(null);
              this.formsService.currentForm.controls.providerKey.setValue(null);
              this.formsService.currentForm.controls.authenticationToken.setValue(null);
            }

            this.formsService.currentForm.updateValueAndValidity();
          }
        }, {
          key: "passwordsMatch",
          value: function passwordsMatch() {
            var _this17 = this;

            return function () {
              if (_this17.formsService.currentForm && _this17.loginType === _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eLoginProvider"].Dexih) {
                var password = _this17.formsService.currentForm.controls['password'];
                var passwordConfirm = _this17.formsService.currentForm.controls['passwordConfirm'];

                if (password.value !== passwordConfirm.value) {
                  passwordConfirm.setErrors({
                    'passwordMatch': true
                  });
                }

                return;
              }
            };
          }
        }, {
          key: "refreshLogin",
          value: function refreshLogin() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.t0 = this.loginType;
                      _context3.next = _context3.t0 === _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eLoginProvider"].Google ? 3 : _context3.t0 === _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eLoginProvider"].Microsoft ? 5 : 8;
                      break;

                    case 3:
                      this.googleLogin(false);
                      return _context3.abrupt("break", 8);

                    case 5:
                      _context3.next = 7;
                      return this.microsoftLogin(false);

                    case 7:
                      return _context3.abrupt("break", 8);

                    case 8:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "register",
          value: function register() {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this18 = this;

              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.refreshLogin();

                    case 2:
                      this.formsService.currentForm.updateValueAndValidity();

                      if (this.formsService.currentForm.valid) {
                        this.authService.register(this.formsService.currentForm.getRawValue()).then(function (result) {
                          return __awaiter(_this18, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                            var user;
                            return regeneratorRuntime.wrap(function _callee4$(_context4) {
                              while (1) {
                                switch (_context4.prev = _context4.next) {
                                  case 0:
                                    if (!result) {
                                      _context4.next = 22;
                                      break;
                                    }

                                    user = result;

                                    if (!user.emailConfirmed) {
                                      _context4.next = 19;
                                      break;
                                    }

                                    if (!user.isInvited) {
                                      _context4.next = 16;
                                      break;
                                    }

                                    _context4.t0 = this.loginType;
                                    _context4.next = _context4.t0 === _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eLoginProvider"].Google ? 7 : _context4.t0 === _shared_shared_models__WEBPACK_IMPORTED_MODULE_6__["eLoginProvider"].Microsoft ? 10 : 13;
                                    break;

                                  case 7:
                                    _context4.next = 9;
                                    return this.authService.googleLogin(false);

                                  case 9:
                                    return _context4.abrupt("break", 13);

                                  case 10:
                                    _context4.next = 12;
                                    return this.authService.microsoftLogin(false);

                                  case 12:
                                    return _context4.abrupt("break", 13);

                                  case 13:
                                    if (!this.authService.redirectUrl) {
                                      this.router.navigate(['/']);
                                    } else {
                                      this.router.navigateByUrl(this.authService.redirectUrl);
                                    }

                                    _context4.next = 17;
                                    break;

                                  case 16:
                                    this.router.navigate(['notInvited'], {
                                      queryParams: {
                                        email: user.email
                                      },
                                      relativeTo: this.route.parent
                                    });

                                  case 17:
                                    _context4.next = 20;
                                    break;

                                  case 19:
                                    this.router.navigate(['verifyemail'], {
                                      queryParams: {
                                        email: user.email
                                      },
                                      relativeTo: this.route.parent
                                    });

                                  case 20:
                                    _context4.next = 23;
                                    break;

                                  case 22:
                                    this.message = 'Registration failed.  Please contact support to proceed.';

                                  case 23:
                                  case "end":
                                    return _context4.stop();
                                }
                              }
                            }, _callee4, this);
                          }));
                        })["catch"](function (reason) {
                          _this18.message = reason.message;
                        });
                      } else {
                        this.formsService.showAllErrors = true;
                      }

                    case 4:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "googleLogin",
          value: function googleLogin(forceLogin) {
            var _this19 = this;

            this.authService.googleSignIn(forceLogin).then(function (result) {
              _this19.setExternalLogin(result);
            })["catch"](function (reason) {
              _this19.message = reason.message;
            });
          }
        }, {
          key: "microsoftLogin",
          value: function microsoftLogin(forceLogin) {
            var _this20 = this;

            this.authService.microsoftSignIn(forceLogin).then(function (externalLogin) {
              _this20.setExternalLogin(externalLogin);
            })["catch"](function (reason) {
              _this20.message = reason.message;
            });
          }
        }, {
          key: "termsAccepted",
          value: function termsAccepted(_termsAccepted) {
            this.formsService.currentForm.controls.terms.setValue(_termsAccepted);
          }
        }, {
          key: "showTerms",
          value: function showTerms() {
            window.open('/auth/terms');
          }
        }]);

        return RegisterComponent;
      }();

      RegisterComponent.ɵfac = function RegisterComponent_Factory(t) {
        return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_forms_forms_service__WEBPACK_IMPORTED_MODULE_5__["FormsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]));
      };

      RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: RegisterComponent,
        selectors: [["app-register"]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_shared_forms_forms_service__WEBPACK_IMPORTED_MODULE_5__["FormsService"]])],
        decls: 11,
        vars: 5,
        consts: [[3, "showSignIn"], [1, "login-container"], [1, "card"], [3, "formGroup", 4, "ngIf"], [1, "card", "mt-2"], [1, "card-header"], [1, "card-body"], ["class", "mt-2", 4, "ngIf"], [3, "formGroup"], ["label", "Login Provider", 3, "ngModel", "ngModelOptions", "disabled", "ngModelChange"], ["label", "User Name", "formControlName", "userName", "placeholder", "User Name", "note", "The user name that can be seen by other users.", "iconClass", "fa fa-user-o", 3, "errors"], ["label", "Email Address", "formControlName", "email", "placeholder", "Email address", "iconClass", "fa fa-envelope", 3, "errors"], [4, "ngIf"], ["label", "Confirm Password", "formControlName", "passwordConfirm", "type", "password", "placeholder", "Confirm Password", "iconClass", "fa fa-lock", 3, "errors", 4, "ngIf"], [1, "form-row"], [1, "form-group", "col-md-6"], ["label", "First name", "formControlName", "firstName", "placeholder", "First name", 3, "errors", "autocapitalize"], ["label", "Last name", "formControlName", "lastName", "placeholder", "Last name", 3, "errors", "autocapitalize"], ["label", "I want to receive news and special offers", "formControlName", "subscription"], ["formControlName", "terms", 3, "errors"], ["href", "javascript:void(0)", 3, "click"], ["routerLink", "/auth/help", 3, "queryParams"], [1, "card-footer"], [1, "btn", "btn-primary", 3, "click"], ["class", "btn btn-danger ml-1", 3, "click", 4, "ngIf"], ["class", "btn btn-primary ml-1", 3, "click", 4, "ngIf"], ["label", "Password", "formControlName", "password", "type", "password", "placeholder", "Password", "iconClass", "fa fa-lock", 3, "errors"], ["label", "Confirm Password", "formControlName", "passwordConfirm", "type", "password", "placeholder", "Confirm Password", "iconClass", "fa fa-lock", 3, "errors"], [1, "alert", "alert-danger"], ["buttonClass", "btn btn-danger", "iconClass", "fa fa-google", "text", "Google Login", 3, "click"], ["buttonClass", "btn btn-primary", "iconClass", "fa fa-microsoft", "text", "Microsoft Login", 3, "click"], [1, "btn", "btn-danger", "ml-1", 3, "click"], [1, "fa", "fa-google"], [1, "btn", "btn-primary", "ml-1", 3, "click"], [1, "fa", "fa-windows"], [1, "mt-2"], [1, "btn", "btn-success", 2, "width", "100%", 3, "click"], [1, "fa", "fa-sign-in"], [1, "btn", "btn-danger", 2, "width", "100%", 3, "click"], [1, "btn", "btn-primary", 2, "width", "100%", 3, "click"]],
        template: function RegisterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "auth-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RegisterComponent_form_3_Template, 37, 21, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Other Sign-in Options ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, RegisterComponent_div_8_Template, 4, 0, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RegisterComponent_div_9_Template, 4, 0, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, RegisterComponent_div_10_Template, 4, 0, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showSignIn", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formsService.currentForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginType != ctx.eLoginProvider.Dexih);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginType != ctx.eLoginProvider.Google);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginType != ctx.eLoginProvider.Microsoft);
          }
        },
        directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], ngx_d_components__WEBPACK_IMPORTED_MODULE_10__["DFormInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], ngx_d_components__WEBPACK_IMPORTED_MODULE_10__["DFormCheckboxComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], ngx_d_components__WEBPACK_IMPORTED_MODULE_10__["DButtonComponent"]],
        styles: [".login-container[_ngcontent-%COMP%] {\n  max-width: 500px;\n  max-height: 100%;\n  padding: 5px;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvK2F1dGgvYXV0aC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC8rYXV0aC9hdXRoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA1MDBweDsgXG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWFyZ2luOiBhdXRvO1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-register',
            templateUrl: './register.component.html',
            styleUrls: ['../auth.component.scss'],
            providers: [_shared_forms_forms_service__WEBPACK_IMPORTED_MODULE_5__["FormsService"]]
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
          }, {
            type: _shared_forms_forms_service__WEBPACK_IMPORTED_MODULE_5__["FormsService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/+auth/terms/terms.component.ts":
    /*!************************************************!*\
      !*** ./src/app/+auth/terms/terms.component.ts ***!
      \************************************************/

    /*! exports provided: TermsComponent */

    /***/
    function srcAppAuthTermsTermsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TermsComponent", function () {
        return TermsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../header/header.component */
      "./src/app/+auth/header/header.component.ts");
      /* harmony import */


      var ngx_d_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ngx-d-components */
      "./node_modules/ngx-d-components/__ivy_ngcc__/fesm2015/ngx-d-components.js");

      function TermsComponent_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TermsComponent_ng_template_3_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.printTerms();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Print ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var TermsComponent = /*#__PURE__*/function () {
        function TermsComponent() {
          _classCallCheck(this, TermsComponent);

          this.termsAccepted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.showDialog = false;
        }

        _createClass(TermsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.termsAccepted.emit(false);
          }
        }, {
          key: "printTerms",
          value: function printTerms() {
            var printContents, popupWin;
            printContents = document.getElementById('terms-body').innerHTML;
            popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
            popupWin.document.open();
            popupWin.document.write("\n      <html>\n        <head>\n          <title>Print tab</title>\n          <style>\n          //........Customized style.......\n          </style>\n        </head>\n    <body onload=\"window.print();window.close()\">".concat(printContents, "</body>\n      </html>"));
            popupWin.document.close();
          }
        }, {
          key: "acceptTerms",
          value: function acceptTerms() {
            this.termsAccepted.emit(true);
            this.showDialog = false;
          }
        }]);

        return TermsComponent;
      }();

      TermsComponent.ɵfac = function TermsComponent_Factory(t) {
        return new (t || TermsComponent)();
      };

      TermsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TermsComponent,
        selectors: [["terms"]],
        outputs: {
          termsAccepted: "termsAccepted"
        },
        decls: 161,
        vars: 2,
        consts: [[3, "showSignIn"], ["id", "print-section", 1, "container", "p-3"], ["title", "Terms & Conditions", "iconClass", "fa fa-lg fa-fw fa-life-saver", 3, "padding"], ["header", ""], ["id", "terms-body", 1, "container-fluid"], ["href", "https://connectonline.asic.gov.au/RegistrySearch"], ["type", "button", "id", "print", 1, "btn", "btn-danger", 3, "click"], [1, "fa", "fa-print"]],
        template: function TermsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "auth-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "d-widget", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TermsComponent_ng_template_3_Template, 3, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Data Experts Group Terms & Conditions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Introduction");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "These terms and conditions govern your use of the Data Experts Integration Hub, referred henceforth as \"The Platform\". The platform consists of this website and the downloadable Remote Agent application. By using the platform, you accept these terms and conditions in full. If you disagree with these terms and conditions or any part of these terms and conditions, you must not use the platform.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "License to use the platform");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Unless otherwise stated, Data Experts Group (c) and/or its licensors own the intellectual property rights in the website and material on the website. Subject to the license below, all these intellectual property rights are reserved.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "You may view, download for caching purposes only, and print pages from the website for your own personal use, subject to the restrictions set out below and elsewhere in these terms and conditions.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "You must not:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "republish material from this website (including republication on another website);");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "sell, rent or sub-license material from the website;");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "show any material from the website in public;");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "reproduce, duplicate, copy or otherwise exploit material on this website for a commercial purpose;");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "redistribute material from this website [except for content specifically and expressly made available for redistribution.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Where content is specifically made available for redistribution, it may only be redistributed within your organisation.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Acceptable use");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "You must not use the platform in any way that causes, or may cause, damage to the website or impairment of the availability or accessibility of the website; or in any way which is unlawful, illegal, fraudulent or harmful, or in connection with any unlawful, illegal, fraudulent or harmful purpose or activity.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "You must not use the platform to copy, store, host, transmit, send, use, publish or distribute any material which consists of (or is linked to) any spyware, computer virus, Trojan horse, worm, keystroke logger, rootkit or other malicious computer software.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "You must not use the platform conduct any systematic or automated data collection activities (including without limitation scraping, data mining, data extraction and data harvesting) without Data Experts Group express written consent.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "You must not use the platform to transmit or send unsolicited commercial communications.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "You must not use the platform for any purposes related to marketing without Data Experts Group express written consent.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Restricted access");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Access to certain areas of the platform is restricted. Data Experts Group reserves the right to restrict access to [other] areas of the platform, or indeed this entire website, at Data Experts Group discretion.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "If Data Experts Group provides you with a user ID and password to enable you to access restricted areas of the platform or other content or services, you must ensure that the user ID and password are kept confidential.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Data Experts Group may disable your user ID and password in Data Experts Group sole discretion without notice or explanation.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "User content");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "In these terms and conditions, \u201Cyour user content\u201D means material (including without limitation any data, text, images, audio material, video material and audio-visual material) that you submit or process through the platform, for whatever purpose.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Your user content must not be illegal or unlawful, must not infringe any third party's legal rights, and must not be capable of giving rise to legal action whether against you or Data Experts Group or a third party (in each case under any applicable law).");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "You must not submit any user content to the website that is or has ever been the subject of any threatened or actual legal proceedings or other similar complaint.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Data Experts Group reserves the right to edit or remove any material submitted to the platform, or stored on Data Experts Group servers, or hosted or published upon the platform.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Notwithstanding Data Experts Group rights under these terms and conditions in relation to user content, Data Experts Group does not undertake to monitor the submission of such content to, or the publication of such content on, the platform.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "No warranties");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "The platform is provided \u201Cas is\u201D without any representations or warranties, express or implied. Data Experts Group makes no representations or warranties in relation to the platform or the information and materials provided on the platform.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Without prejudice to the generality of the foregoing paragraph, Data Experts Group does not warrant that:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "The platform will be constantly available, or available at all; or");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "the information on the platform is complete, true, accurate or non-misleading.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Nothing on the platform constitutes, or is meant to constitute, advice of any kind. If you require advice in relation to any legal, financial or medical matter you should consult an appropriate professional.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Limitations of liability");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Data Experts Group will not be liable to you (whether under the law of contact, the law of torts or otherwise) in relation to the contents of, or use of, or otherwise in connection with, the platform:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "to the extent that the website is provided free-of-charge, for any direct loss;");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "for any indirect, special or consequential loss; or");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "for any business losses, loss of revenue, income, profits or anticipated savings, loss of contracts or business relationships, loss of reputation or goodwill, or loss or corruption of information or data.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "These limitations of liability apply even if Data Experts Group has been expressly advised of the potential loss.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Exceptions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Nothing in the platform disclaimer will exclude or limit any warranty implied by law that it would be unlawful to exclude or limit; and nothing in the platform disclaimer will exclude or limit Data Experts Group liability in respect of any:");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "death or personal injury caused by Data Experts Group negligence;");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, "fraud or fraudulent misrepresentation on the part of Data Experts Group; or");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "matter which it would be illegal or unlawful for Data Experts Group to exclude or limit, or to attempt or purport to exclude or limit, its liability.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Reasonableness");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "By using the platform, you agree that the exclusions and limitations of liability set out in the platform disclaimer are reasonable.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "If you do not think they are reasonable, you must not use the platform.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](109, "Other parties");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "[You accept that, as a limited liability entity, Data Experts Group has an interest in limiting the personal liability of its officers and employees. You agree that you will not bring any claim personally against Data Experts Group officers or employees in respect of any losses you suffer in connection with the website.]");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](113, "[Without prejudice to the foregoing paragraph,] you agree that the limitations of warranties and liability set out in the platform disclaimer will protect Data Experts Group officers, employees, agents, subsidiaries, successors, assigns and sub-contractors as well as Data Experts Group.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Unenforceable provisions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "If any provision of the platform disclaimer is, or is found to be, unenforceable under applicable law, that will not affect the enforceability of the other provisions of the platform disclaimer.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Indemnity");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "You hereby indemnify Data Experts Group and undertake to keep Data Experts Group indemnified against any losses, damages, costs, liabilities and expenses (including without limitation legal expenses and any amounts paid by Data Experts Group to a third party in settlement of a claim or dispute on the advice of Data Experts Group legal advisers) incurred or suffered by Data Experts Group arising out of any breach by you of any provision of these terms and conditions[, or arising out of any claim that you have breached any provision of these terms and conditions].");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Breaches of these terms and conditions");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "Without prejudice to Data Experts Group other rights under these terms and conditions, if you breach these terms and conditions in any way, Data Experts Group may take such action as Data Experts Group deems appropriate to deal with the breach, including suspending your access to the website, prohibiting you from accessing the website, blocking computers using your IP address from accessing the website, contacting your internet service provider to request that they block your access to the website and/or bringing court proceedings against you.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "Variation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Data Experts Group may revise these terms and conditions from time-to-time. Revised terms and conditions will apply to the use of the platform from the date of the publication of the revised terms and conditions on the platform. Please check this page regularly to ensure you are familiar with the current version.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Assignment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "Data Experts Group may transfer, sub-contract or otherwise deal with Data Experts Group rights and/or obligations under these terms and conditions without notifying you or obtaining your consent.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "You may not transfer, sub-contract or otherwise deal with your rights and/or obligations under these terms and conditions.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Severability");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "If a provision of these terms and conditions is determined by any court or other competent authority to be unlawful and/or unenforceable, the other provisions will continue in effect. If any unlawful and/or unenforceable provision would be lawful or enforceable if part of it were deleted, that part will be deemed to be deleted, and the rest of the provision will continue in effect.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, "Entire agreement");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](143, "These terms and conditions [, together with [DOCUMENTS],] constitute the entire agreement between you and Data Experts Group in relation to your use of the platform, and supersede all previous agreements in respect of your use of the platform.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](145, "Law and jurisdiction");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "These terms and conditions will be governed by and construed in accordance with Australian law, and any disputes relating to these terms and conditions will be subject to the jurisdiction of the courts of Australia.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "Registrations and authorisations");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](151, "Data Experts Group is registered with the Australian Securities & Investments Commission. You can find the online version of the register at ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](153, "ASIC registry search");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, ". Data Experts Group company number is 138 270 658.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, "Data Experts Group details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](157, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, "The full name of Data Experts Group is \"DATA EXPERTS GROUP PTY LTD\".");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, "You can contact Data Experts Group by email to enquiry@dataexpertsgroup.com.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showSignIn", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("padding", true);
          }
        },
        directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], ngx_d_components__WEBPACK_IMPORTED_MODULE_2__["DWidgetComponent"]],
        styles: [".terms-body[_ngcontent-%COMP%] {\n  max-height: 400px;\n  overflow: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvK2F1dGgvdGVybXMvdGVybXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxpQkFBaUI7RUFDakIsY0FBYztBQUNmIiwiZmlsZSI6InNyYy9hcHAvK2F1dGgvdGVybXMvdGVybXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGVybXMtYm9keSB7XG5cdG1heC1oZWlnaHQ6IDQwMHB4O1xuXHRvdmVyZmxvdzogYXV0bztcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TermsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'terms',
            templateUrl: './terms.component.html',
            styleUrls: ['./terms.component.scss']
          }]
        }], null, {
          termsAccepted: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/+auth/verifyemail/verifyemail.component.ts":
    /*!************************************************************!*\
      !*** ./src/app/+auth/verifyemail/verifyemail.component.ts ***!
      \************************************************************/

    /*! exports provided: VerifyEmailComponent */

    /***/
    function srcAppAuthVerifyemailVerifyemailComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerifyEmailComponent", function () {
        return VerifyEmailComponent;
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


      var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../auth.service */
      "./src/app/+auth/auth.service.ts");
      /* harmony import */


      var _auth_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../auth.models */
      "./src/app/+auth/auth.models.ts");
      /* harmony import */


      var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../header/header.component */
      "./src/app/+auth/header/header.component.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var ngx_d_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-d-components */
      "./node_modules/ngx-d-components/__ivy_ngcc__/fesm2015/ngx-d-components.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function VerifyEmailComponent_section_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.message, " ");
        }
      }

      function VerifyEmailComponent_section_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.successMessage, " ");
        }
      }

      function VerifyEmailComponent_i_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 16);
        }
      }

      function VerifyEmailComponent_i_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 17);
        }
      }

      function VerifyEmailComponent_i_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i", 16);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          disabled: a0
        };
      };

      var VerifyEmailComponent = /*#__PURE__*/function () {
        function VerifyEmailComponent(router, route, userService) {
          _classCallCheck(this, VerifyEmailComponent);

          this.router = router;
          this.route = route;
          this.userService = userService;
          this.logoUrl = _auth_models__WEBPACK_IMPORTED_MODULE_3__["logoUrl"];
          this.resendingCode = false;
          this.submittingVerification = false;
        }

        _createClass(VerifyEmailComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this21 = this;

            this._queryParamSubscription = this.route.queryParams.subscribe(function (params) {
              _this21.email = params['email'];
              _this21.verificationCode = params['code'];

              if (_this21.email && _this21.verificationCode) {
                _this21.submitVerification();
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this._queryParamSubscription) {
              this._queryParamSubscription.unsubscribe();
            }
          }
        }, {
          key: "submitVerification",
          value: function submitVerification() {
            var _this22 = this;

            this.submittingVerification = true;
            this.userService.confirmEmail(this.email, this.verificationCode).then(function (result) {
              if (result) {
                var user = result;

                if (user.isInvited) {
                  if (!_this22.userService.redirectUrl) {
                    _this22.router.navigate(['/']);

                    return;
                  } else {
                    _this22.router.navigateByUrl(_this22.userService.redirectUrl);

                    return;
                  }
                } else {
                  _this22.router.navigate(['notInvited'], {
                    queryParams: {
                      email: user.email
                    },
                    relativeTo: _this22.route.parent
                  });

                  return;
                }
              } else {
                _this22.submittingVerification = false;
              }

              _this22.message = 'Confirm email failed.  Please contact support to proceed.';
              _this22.successMessage = '';
            })["catch"](function (reason) {
              _this22.submittingVerification = false;
              _this22.message = reason.message;
              _this22.successMessage = '';
            });
          }
        }, {
          key: "resendVerification",
          value: function resendVerification() {
            var _this23 = this;

            this.resendingCode = true;
            this.userService.resendConfirmationEmail(this.email).then(function () {
              _this23.message = '';
              _this23.successMessage = 'The confirmation email has been resent to the email above.';
              _this23.resendingCode = false;
            })["catch"](function (reason) {
              _this23.message = reason.message;
              _this23.successMessage = '';
              _this23.resendingCode = false;
            });
          }
        }]);

        return VerifyEmailComponent;
      }();

      VerifyEmailComponent.ɵfac = function VerifyEmailComponent_Factory(t) {
        return new (t || VerifyEmailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]));
      };

      VerifyEmailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: VerifyEmailComponent,
        selectors: [["app-verifyemail"]],
        decls: 25,
        vars: 13,
        consts: [[3, "showSignIn"], [1, "login-container"], [1, "card"], [1, "card-header"], [1, "card-body"], [1, "alert", "alert-info"], ["label", "E-mail", "name", "email", "iconClass", "fa fa-user txt-color-teal", "title", "Please enter your email address", "placeholder", "E-mail...", 3, "ngModel", "ngModelChange"], ["label", "Verification Code", "name", "verificationCode", "iconClass", "fa fa-lock", "title", "Please the verification code.", "placeholder", "Paste Verification Code", 3, "ngModel", "hideToggle", "showPreview", "ngModelChange"], [4, "ngIf"], [1, "card-footer"], ["type", "button", 1, "btn", "btn-success", "mr-1", 3, "ngClass", "click"], ["class", "fa fa-spin fa-refresh", 4, "ngIf"], [1, "btn", "btn-primary", 3, "click"], ["class", "fa fa-refresh", 4, "ngIf"], [1, "alert", "alert-danger"], [1, "alert", "alert-success"], [1, "fa", "fa-spin", "fa-refresh"], [1, "fa", "fa-refresh"]],
        template: function VerifyEmailComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "auth-header", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Integration Hub - Verify email address ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Please enter the email address and code that was emailed to you when you registered. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "fieldset");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "form-input", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VerifyEmailComponent_Template_form_input_ngModelChange_12_listener($event) {
              return ctx.email = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "form-textarea", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VerifyEmailComponent_Template_form_textarea_ngModelChange_14_listener($event) {
              return ctx.verificationCode = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, VerifyEmailComponent_section_15_Template, 3, 1, "section", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, VerifyEmailComponent_section_16_Template, 3, 1, "section", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VerifyEmailComponent_Template_button_click_18_listener() {
              return !ctx.resendingCode && ctx.resendVerification();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, VerifyEmailComponent_i_19_Template, 1, 0, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Re-send code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VerifyEmailComponent_Template_button_click_21_listener() {
              return ctx.submitVerification();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, VerifyEmailComponent_i_22_Template, 1, 0, "i", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, VerifyEmailComponent_i_23_Template, 1, 0, "i", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Verify ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("showSignIn", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.verificationCode)("hideToggle", true)("showPreview", false);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.successMessage);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.resendingCode));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.resendingCode);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.submittingVerification);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submittingVerification);
          }
        },
        directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], ngx_d_components__WEBPACK_IMPORTED_MODULE_6__["DFormInputComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], ngx_d_components__WEBPACK_IMPORTED_MODULE_6__["DFormTextAreaComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"]],
        styles: [".login-container[_ngcontent-%COMP%] {\n  max-width: 500px;\n  max-height: 100%;\n  padding: 5px;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvK2F1dGgvYXV0aC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC8rYXV0aC9hdXRoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiA1MDBweDsgXG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWFyZ2luOiBhdXRvO1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VerifyEmailComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-verifyemail',
            templateUrl: './verifyemail.component.html',
            styleUrls: ['../auth.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
          }, {
            type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/+auth/welcome/welcome.component.ts":
    /*!****************************************************!*\
      !*** ./src/app/+auth/welcome/welcome.component.ts ***!
      \****************************************************/

    /*! exports provided: WelcomeComponent */

    /***/
    function srcAppAuthWelcomeWelcomeComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function () {
        return WelcomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var WelcomeComponent = /*#__PURE__*/function () {
        function WelcomeComponent() {
          _classCallCheck(this, WelcomeComponent);
        }

        _createClass(WelcomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return WelcomeComponent;
      }();

      WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) {
        return new (t || WelcomeComponent)();
      };

      WelcomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: WelcomeComponent,
        selectors: [["welcome"]],
        decls: 21,
        vars: 0,
        consts: [[1, "card"], [1, "card-header"], [1, "card-body"], [1, "pb-3"], ["href", "https://dataexpertsgroup.com", 1, "btn", "btn-danger", "btn-sm"], ["href", "http://dataexpertsgroup.com/integration_hub", 1, "btn", "btn-danger", "btn-sm"], [1, "alert", "alert-success"]],
        template: function WelcomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Welcome! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Data Experts Integration Hub");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Data Experts Group");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Find out more");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Data Experts Group - Do you trust your data?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " And do you understand it. The integration hub is a platform that allows you to manage and catalog your information and data. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Why use the integration hub?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " Getting started takes just a few minutes, and you'll quickly be loading and performing complex transformations on your data. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwLythdXRoL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: '<welcome>',
            templateUrl: './welcome.component.html',
            styleUrls: ['./welcome.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=9-es5.js.map