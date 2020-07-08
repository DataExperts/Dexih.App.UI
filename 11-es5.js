function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11], {
  /***/
  "./src/app/+public/public.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/+public/public.component.ts ***!
    \*********************************************/

  /*! exports provided: PublicComponent */

  /***/
  function srcAppPublicPublicComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PublicComponent", function () {
      return PublicComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_auth_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../+auth/auth.models */
    "./src/app/+auth/auth.models.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var dexih_ngx_components__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! dexih-ngx-components */
    "./node_modules/dexih-ngx-components/__ivy_ngcc__/fesm2015/dexih-ngx-components.js");
    /* harmony import */


    var _shared_layout_ribbon_ribbon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/layout/ribbon/ribbon.component */
    "./src/app/shared/layout/ribbon/ribbon.component.ts");

    function PublicComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Need an account? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Sign Up");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Already Registered? ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Sign In");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Help");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "dexih-button-dropdown", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Sign Up");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Sign In");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Forgot password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Verify password");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Privacy Policy");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Terms and Conditions");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Help");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "dexih-ribbon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "router-outlet");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r0.logoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pullRight", true)("hideCarrot", true);
      }
    }

    function PublicComponent_router_outlet_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
      }
    }

    var PublicComponent = /*#__PURE__*/function () {
      function PublicComponent(route) {
        _classCallCheck(this, PublicComponent);

        this.route = route;
        this.logoUrl = _auth_auth_models__WEBPACK_IMPORTED_MODULE_1__["logoUrl"];
        this.embedded = false;
      }

      _createClass(PublicComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this._subscription = this.route.queryParams.subscribe(function (p) {
            if (p['embed'] === 'true') {
              _this.embedded = true;
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this._subscription) {
            this._subscription.unsubscribe();
          }
        }
      }]);

      return PublicComponent;
    }();

    PublicComponent.ɵfac = function PublicComponent_Factory(t) {
      return new (t || PublicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    PublicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PublicComponent,
      selectors: [["dexih-public"]],
      decls: 2,
      vars: 2,
      consts: [["id", "content", 4, "ngIf"], [4, "ngIf"], ["id", "content"], [1, "navbar", "navbar-expand-md", "navbar-dark", "bg-dark"], ["id", "logo-group"], ["id", "logo"], ["alt", "Data Experts Group", 3, "src"], [1, "collapse", "navbar-collapse", "mr-sm-2"], [1, "form-inline"], [1, "d-none", "d-md-inline", "text-white", "m-1"], ["routerLink", "/auth/register", 1, "btn", "btn-success", "mr-1"], ["routerLink", "/auth/login", 1, "btn", "btn-success", "mr-1"], ["routerLink", "/auth/help", 1, "d-none", "d-md-inline", "btn", "btn-secondary", "text-white", "mr-1"], ["buttonClass", "btn-primary", "iconClass", "fa fa-navicon", 3, "pullRight", "hideCarrot"], ["routerLink", "/auth/register", 1, "dropdown-item"], ["routerLink", "/auth/login", 1, "dropdown-item"], [1, "dropdown-divider"], ["routerLink", "/auth/forgot-password", 1, "dropdown-item"], ["routerLink", "/auth/verifyemail", 1, "dropdown-item"], ["routerLink", "/auth/privacy", 1, "dropdown-item"], ["routerLink", "/auth/terms", 1, "dropdown-item"], ["routerLink", "/auth/help", 1, "dropdown-item"]],
      template: function PublicComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PublicComponent_div_0_Template, 38, 3, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PublicComponent_router_outlet_1_Template, 1, 0, "router-outlet", 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.embedded);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.embedded);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], dexih_ngx_components__WEBPACK_IMPORTED_MODULE_5__["DexihButtonDropDownComponent"], _shared_layout_ribbon_ribbon_component__WEBPACK_IMPORTED_MODULE_6__["RibbonComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PublicComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'dexih-public',
          templateUrl: './public.component.html'
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/+public/public.module.ts":
  /*!******************************************!*\
    !*** ./src/app/+public/public.module.ts ***!
    \******************************************/

  /*! exports provided: PublicModule */

  /***/
  function srcAppPublicPublicModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PublicModule", function () {
      return PublicModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _public_routing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./public.routing */
    "./src/app/+public/public.routing.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _public_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./public.service */
    "./src/app/+public/public.service.ts");
    /* harmony import */


    var _public_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./public.component */
    "./src/app/+public/public.component.ts");
    /* harmony import */


    var _shared_layout_ribbon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../shared/layout/ribbon */
    "./src/app/shared/layout/ribbon/index.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var PublicModule = /*#__PURE__*/function () {
      function PublicModule() {
        _classCallCheck(this, PublicModule);
      }

      _createClass(PublicModule, null, [{
        key: "forRoot",
        value: function forRoot() {
          return {
            ngModule: PublicModule,
            providers: [_public_service__WEBPACK_IMPORTED_MODULE_4__["PublicService"]]
          };
        }
      }]);

      return PublicModule;
    }();

    PublicModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: PublicModule
    });
    PublicModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function PublicModule_Factory(t) {
        return new (t || PublicModule)();
      },
      providers: [_public_service__WEBPACK_IMPORTED_MODULE_4__["PublicService"]],
      imports: [[_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _public_routing__WEBPACK_IMPORTED_MODULE_1__["Routing"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _shared_layout_ribbon__WEBPACK_IMPORTED_MODULE_6__["RibbonModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PublicModule, {
        declarations: [_public_component__WEBPACK_IMPORTED_MODULE_5__["PublicComponent"]],
        imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _shared_layout_ribbon__WEBPACK_IMPORTED_MODULE_6__["RibbonModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PublicModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"], _public_routing__WEBPACK_IMPORTED_MODULE_1__["Routing"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _shared_layout_ribbon__WEBPACK_IMPORTED_MODULE_6__["RibbonModule"]],
          declarations: [_public_component__WEBPACK_IMPORTED_MODULE_5__["PublicComponent"]],
          providers: [_public_service__WEBPACK_IMPORTED_MODULE_4__["PublicService"]],
          exports: []
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/+public/public.routing.ts":
  /*!*******************************************!*\
    !*** ./src/app/+public/public.routing.ts ***!
    \*******************************************/

  /*! exports provided: routes, Routing */

  /***/
  function srcAppPublicPublicRoutingTs(module, __webpack_exports__, __webpack_require__) {
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


    var _public_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./public.component */
    "./src/app/+public/public.component.ts");
    /* harmony import */


    var _shared_ui_sharedData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/ui/sharedData */
    "./src/app/shared/ui/sharedData/index.ts"); // insert the "hubs" routes once for the base, and once under the summary section to ensure the
    // breadcrumbs are accurate.


    var routes = [{
      path: '',
      component: _public_component__WEBPACK_IMPORTED_MODULE_1__["PublicComponent"],
      children: [{
        path: '',
        redirectTo: 'index'
      }, {
        path: 'index',
        data: {
          pageTitle: 'Shared Data'
        },
        children: [{
          path: '',
          component: _shared_ui_sharedData__WEBPACK_IMPORTED_MODULE_2__["SharedDataComponent"],
          data: {
            pageTitle: 'Shared Data'
          }
        }, {
          path: 'preview/:hubKey/:objectType/:objectKey',
          component: _shared_ui_sharedData__WEBPACK_IMPORTED_MODULE_2__["PreviewComponent"],
          data: {
            pageTitle: 'Preview'
          }
        }, {
          path: 'previewDashboard/:hubKey/:dashboardKey',
          component: _shared_ui_sharedData__WEBPACK_IMPORTED_MODULE_2__["PreviewDashboardComponent"],
          data: {
            pageTitle: 'Preview Dashboard'
          }
        }]
      }]
    }];

    var Routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes);
    /***/

  },

  /***/
  "./src/app/+public/public.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/+public/public.service.ts ***!
    \*******************************************/

  /*! exports provided: PublicService */

  /***/
  function srcAppPublicPublicServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PublicService", function () {
      return PublicService;
    });
    /* harmony import */


    var _auth_auth_models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../+auth/auth.models */
    "./src/app/+auth/auth.models.ts");
    /* harmony import */


    var _logging__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../logging */
    "./src/logging.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../+auth/auth.service */
    "./src/app/+auth/auth.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var PublicService = /*#__PURE__*/function () {
      function PublicService(authService) {
        _classCallCheck(this, PublicService);

        this.authService = authService;
        this.logger = new _logging__WEBPACK_IMPORTED_MODULE_1__["LogFactory"]('public.service');
        this._hubMessages = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"]([]);
      }

      _createClass(PublicService, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {}
      }, {
        key: "getHubMessagesObservable",
        value: function getHubMessagesObservable() {
          return this._hubMessages.asObservable();
        }
      }, {
        key: "getHubMessages",
        value: function getHubMessages() {
          return this._hubMessages.value;
        }
      }, {
        key: "addHubMessage",
        value: function addHubMessage(message) {
          this.authService.addUpdateNotification(message, false);
          var messages = this.getHubMessages();
          messages.push(message);

          this._hubMessages.next(messages);
        }
      }, {
        key: "addHubErrorMessage",
        value: function addHubErrorMessage(message) {
          var newMessage = new _auth_auth_models__WEBPACK_IMPORTED_MODULE_0__["Message"](false, message, null, null);
          this.addHubMessage(newMessage);
        }
      }, {
        key: "addHubClientErrorMessage",
        value: function addHubClientErrorMessage(error, context) {
          var message = context + '.  The following error occurred on the client: ' + error.message;
          var newMessage = new _auth_auth_models__WEBPACK_IMPORTED_MODULE_0__["Message"](false, message, error.stack, null);
          this.addHubMessage(newMessage);
        }
      }, {
        key: "addHubSuccessMessage",
        value: function addHubSuccessMessage(message) {
          var newMessage = new _auth_auth_models__WEBPACK_IMPORTED_MODULE_0__["Message"](true, message, null, null);
          this.addHubMessage(newMessage);
        } // gets all shared data items

      }, {
        key: "getSharedDataIndex",
        value: function getSharedDataIndex(searchString, hubKeys, maxResults, reload) {
          if (reload || !this.sharedItemsIndex) {
            return this.authService.post('/api/SharedData/SharedDataIndex', {
              searchString: searchString,
              hubKeys: hubKeys,
              maxResults: maxResults
            }, 'Getting shared data index...');
          } else {
            Promise.resolve(this.sharedItemsIndex);
          }
        }
      }, {
        key: "downloadData",
        value: function downloadData(sharedItems, zipFiles, downloadFormat, cancelToken) {
          var _this2 = this;

          return new Promise(function (resolve, reject) {
            // get distinct list of hubKeys
            var flags = [],
                hubKeys = [];

            for (var i = 0; i < sharedItems.length; i++) {
              if (flags[sharedItems[i].hubKey]) {
                continue;
              }

              ;
              flags[sharedItems[i].hubKey] = true;
              hubKeys.push(sharedItems[i].hubKey);
            }

            hubKeys.forEach(function (hubKey) {
              _this2.authService.post('/api/SharedData/GetActiveAgent', {
                hubKey: hubKey
              }, 'Getting active remote agent...').then(function (activeAgent) {
                _this2.authService.postRemote('/api/SharedData/DownloadData', {
                  hubKey: hubKey,
                  clientId: _this2.authService.getWebSocketConnectionId(),
                  downloadFormat: downloadFormat,
                  zipFiles: zipFiles,
                  sharedItems: sharedItems.filter(function (c) {
                    return c.hubKey === hubKey;
                  }),
                  remoteAgentId: activeAgent.instanceId
                }, activeAgent, 'Downloading data...', cancelToken).then(function (task) {
                  _this2.authService.addUpdateTask(task);

                  resolve(true);
                })["catch"](function (reason) {
                  _this2.logger.LogC(function () {
                    return "downloadData, error: ".concat(reason.message, ".");
                  }, _logging__WEBPACK_IMPORTED_MODULE_1__["eLogLevel"].Error);

                  reject(reason);
                });
              });
            });
          });
        } // starts a preview, and returns the url to get the download stream.

      }, {
        key: "previewData",
        value: function previewData(hubKey, objectKey, objectType, inputColumns, selectQuery, parameters, cancelToken) {
          var _this3 = this;

          return new Promise(function (resolve, reject) {
            _this3.authService.post('/api/SharedData/GetActiveAgent', {
              hubKey: hubKey
            }, 'Getting active remote agent...').then(function (activeAgent) {
              _this3.authService.postRemote('/api/SharedData/PreviewData', {
                hubKey: hubKey,
                objectType: objectType,
                objectKey: objectKey,
                selectQuery: selectQuery,
                remoteAgentId: activeAgent.instanceId,
                inputColumns: inputColumns,
                parameters: parameters
              }, activeAgent, 'Previewing data...', cancelToken).then(function (result) {
                result.columns = _this3.authService.constructDataTableColumns(result.columns);
                resolve(result);
              })["catch"](function (reason) {
                reject(reason);
              });
            })["catch"](function (reason) {
              reject(reason);
            });
          });
        } // starts a preview, and returns the url to get the download stream.

      }, {
        key: "previewListOfValues",
        value: function previewListOfValues(hubKey, objectKey, objectType, parameterName, resetCache, cancelToken) {
          var _this4 = this;

          return new Promise(function (resolve, reject) {
            _this4.authService.post('/api/SharedData/GetActiveAgent', {
              hubKey: hubKey
            }, 'Getting active remote agent...').then(function (activeAgent) {
              _this4.authService.postRemote('/api/SharedData/PreviewListOfValues', {
                hubKey: hubKey,
                objectType: objectType,
                objectKey: objectKey,
                parameterName: parameterName,
                resetCache: resetCache,
                remoteAgentId: activeAgent.instanceId
              }, activeAgent, 'Previewing list of values...', cancelToken).then(function (result) {
                resolve(result);
              })["catch"](function (reason) {
                reject(reason);
              });
            })["catch"](function (reason) {
              reject(reason);
            });
          });
        }
      }, {
        key: "getDashboard",
        value: function getDashboard(hubKey, dashboardKey) {
          var _this5 = this;

          return new Promise(function (resolve, reject) {
            _this5.authService.post('/api/SharedData/PreviewDashboard', {
              hubKey: hubKey,
              dashboardKey: dashboardKey
            }, 'Getting dashboard download locations...').then(function (dashboard) {
              resolve(dashboard);
            })["catch"](function (reason) {
              return reject(reason);
            });
          });
        }
      }]);

      return PublicService;
    }();

    PublicService.ɵfac = function PublicService_Factory(t) {
      return new (t || PublicService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]));
    };

    PublicService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      token: PublicService,
      factory: PublicService.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](PublicService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"]
      }], function () {
        return [{
          type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=11-es5.js.map