function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function _createClass(e,t,i){return t&&_defineProperties(e.prototype,t),i&&_defineProperties(e,i),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{M0ag:function(e,t,i){"use strict";var n=i("PCNd");i.d(t,"a",(function(){return n.a}))},d2yJ:function(e,t,i){"use strict";i.d(t,"a",(function(){return c}));var n=i("3Pt+"),r=i("2Vo4"),a=i("Kj3r"),s=i("fXoL"),c=function(){var e=function(){function e(t){_classCallCheck(this,e),this.fb=t,this._currentFormObservable=new r.a(null),this.formErrors={},this.hasChanged=!1,this.formSaving=!1,this.showAllErrors=!1,this.validationMessages={required:"A value is required.",duplicateName:"The value is already being used."},this.validationFieldMessages={}}return _createClass(e,[{key:"ngOnDestroy",value:function(){this.clearFormSubscriptions()}},{key:"clearFormSubscriptions",value:function(){this._valueChangesSubscription&&this._valueChangesSubscription.unsubscribe(),this._changesSubscription1&&this._changesSubscription1.unsubscribe(),this._changesSubscription2&&this._changesSubscription2.unsubscribe(),this._changesSubscription3&&this._changesSubscription3.unsubscribe(),this._changesSubscription4&&this._changesSubscription4.unsubscribe(),this._changesSubscription5&&this._changesSubscription5.unsubscribe()}},{key:"createDefault",value:function(e,t){var i=this.fb.group({});this.addMissing(e,i,t),this.startForm(i)}},{key:"addMissing",value:function(e,t,i){var r=Object.keys(i),a=Object.keys(t.controls);r.forEach((function(i){if(a.findIndex((function(e){return e===i}))>=0);else{var r=new n.h(i);r.setValue(e[i]),t.addControl(i,r)}}))}},{key:"startForm",value:function(e){var t=this;this.currentForm=e,this._currentFormObservable.next(e),this._valueChangesSubscription&&this._valueChangesSubscription.unsubscribe(),this._valueChangesSubscription=this.currentForm.valueChanges.pipe(Object(a.a)(500)).subscribe((function(e){t.onValueChanged(e)})),this.onValueChanged(),this.hasChanged=!1}},{key:"getCurrentFormObservable",value:function(){return this._currentFormObservable.asObservable()}},{key:"onValueChanged",value:function(e){if(this.currentForm){var t=this.currentForm;this.hasChanged=!0;for(var i=0,n=Object.keys(this.currentForm.controls);i<n.length;i++){var r=n[i];this.formErrors[r]="";var a=t.get(r);if(a&&(a.dirty||this.showAllErrors)&&!a.valid){var s=this.validationFieldMessages[r];if(a.errors)for(var c=0,o=Object.keys(a.errors);c<o.length;c++){var u=o[c];if(s&&s[u])this.formErrors[r]+=s[u]+" ";else if(this.validationMessages[u])this.formErrors[r]+=this.validationMessages[u]+" ";else{var l=void 0;switch(u){case"minlength":l="Value is "+a.errors.minlength.actualLength+" charaters long, required minimum length is "+a.errors.minlength.requiredLength+" characters.";break;case"maxlength":l="Value is "+a.errors.maxlength.actualLength+" charaters long, required maximum length is "+a.errors.maxlength.requiredLength+" characters.";break;case"maxvalue":l="Value is "+a.value+" required maximum is "+a.errors.maxvalue.requiredValue+".";break;case"minvalue":l="Value is "+a.value+" required minimum is "+a.errors.minvalue.requiredValue+".";break;case"email":l="Value is not a valid email address.";break;case"passwordMatch":l="The passwords do not match.";break;case"pattern":l="Passwords must have one upper, lower, number, and symbol.";break;default:l="Field error: "+u}this.formErrors[r]+=l+" "}}}}}}},{key:"showErrors",value:function(){this.showAllErrors=!0,this.onValueChanged()}}]),e}();return e.\u0275fac=function(t){return new(t||e)(s.Sb(n.g))},e.\u0275prov=s.Gb({token:e,factory:e.\u0275fac}),e}()},gQFH:function(e,t,i){"use strict";i.r(t),i.d(t,"TableEditModule",(function(){return U}));var n=i("ofXK"),r=i("PCNd"),a=i("3Pt+"),s=i("tyNb"),c=i("4Y1E"),o=i("ElCs"),u=i("itXk"),l=i("cvPx"),h=i("soiQ"),b=i("2v7R"),d=i("3WyZ"),f=i("fXoL"),v=i("Wumg"),m=i("iFLP"),g=i("Wz3H"),p=i("64E1"),y=i("oLr2");function C(e,t){if(1&e){var i=f.Pb();f.Ob(0,"dexih-button",8),f.Vb("click",(function(){return f.vc(i),f.Zb(2).createPaths()})),f.Fc(1," Create Paths "),f.Nb()}}function S(e,t){if(1&e&&f.Lb(0,"save-button",9),2&e){var i=f.Zb(2);f.hc("formsService",i.formsService)}}var w=function(e){return[e]},k=function(){return[]};function _(e,t){if(1&e){var i=f.Pb();f.Ob(0,"dexih-invalid-form-details",3),f.Vb("click",(function(){return f.vc(i),f.Zb().formsService.showErrors()})),f.Nb(),f.Ob(1,"actions-table-button",4),f.Vb("changedTables",(function(e){return f.vc(i),f.Zb().changedTables(e)})),f.Nb(),f.Dc(2,C,2,0,"dexih-button",5),f.Dc(3,S,1,1,"save-button",6),f.Lb(4,"cancel-button",7)}if(2&e){var n=f.Zb();f.hc("control",n.formsService.currentForm),f.yb(1),f.hc("showEdit",!1)("tables",null!=n.formsService&&null!=n.formsService.currentForm&&n.formsService.currentForm.value?f.mc(6,w,null==n.formsService||null==n.formsService.currentForm?null:n.formsService.currentForm.value):f.lc(8,k)),f.yb(1),f.hc("ngIf",(null==n.hubCache?null:n.hubCache.canWrite)&&(null==n.connectionReference?null:n.connectionReference.connectionCategory)==n.eConnectionCategory.File),f.yb(1),f.hc("ngIf",null==n.hubCache?null:n.hubCache.canWrite),f.yb(1),f.hc("formsService",n.formsService)}}var T,F,E,O,K=((T=function(){function e(t,i,n,r,a){_classCallCheck(this,e),this.hubService=t,this.formsService=i,this.authService=n,this.route=r,this.router=a,this.eConnectionCategory=h.ib,this.cancelToken=new d.a,this.isLoaded=!1}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;try{this._subscription=Object(u.a)(this.route.data,this.route.params,this.hubService.getHubCacheObservable()).subscribe((function(t){var i=t[0];e.params=t[1],e.hubCache=t[2],e.action=i.action,e.pageTitle=i.pageTitle,e.hubCache&&e.hubCache.status===b.j.Loaded&&(e.isLoaded&&"new"===e.action||(e.isLoaded&&e.formsService.hasChanged?e.authService.confirmDialog("Synchronization warning","The hub was disconnected, meaning this edit could have been changed by another session.  Would you like to discard the current changes, and reload the latest version?").then((function(t){t&&e.load()})).catch((function(e){})):e.load()))}))}catch(t){this.hubService.addHubClientErrorMessage(t,"Table Edit")}}},{key:"ngOnDestroy",value:function(){this._hubCacheChangeSubscription&&this._hubCacheChangeSubscription.unsubscribe(),this._formChangeSubscription&&this._formChangeSubscription.unsubscribe(),this._subscription&&this._subscription.unsubscribe(),this.cancelToken.cancel(),this.formsService.ngOnDestroy()}},{key:"load",value:function(){var e,t=this;if(this.isLoaded=!0,"edit"===this.action)if(this.tableKey=+this.params.tableKey,this.tableKey)if(this.hubCache.hub&&this.hubCache.hub.dexihDatajobs){var i=this.hubCache.getTable(this.tableKey);i?(this.connection=this.hubCache.getConnection(i.connectionKey),this.formsService.table(i)):this.hubService.addHubErrorMessage("The specified table could not be found.")}else this.hubService.addHubErrorMessage("The hub cache is not loaded.");else this.hubService.addHubErrorMessage("There was no table specified to edit.");"new"===this.action&&(this.hubService.newTable?(e=this.hubService.newTable,this.hubService.newTable=null):(this.connectionKey=+this.params.connectionKey,(e=new h.H).key=0,e.connectionKey=this.connectionKey),this.formsService.table(e),this._formChangeSubscription=this.formsService.getCurrentFormObservable().subscribe((function(e){var i=e.controls.key.value;if(i&&history.pushState){var n=window.location.pathname.replace("/table-new","/table-edit/"+i);t.router.navigateByUrl(n),t._formChangeSubscription.unsubscribe()}})))}},{key:"close",value:function(){this.authService.navigateUp()}},{key:"changedTables",value:function(e){this.formsService.table(e[0])}},{key:"createPaths",value:function(){var e=this;this.hubService.createPaths(this.formsService.currentForm.value,this.cancelToken).then((function(){e.hubService.addHubSuccessMessage("The paths have been created.")})).catch()}},{key:"canDeactivate",value:function(){var e=this;return new Promise((function(t){e.formsService.hasChanged?e.authService.confirmDialog("The table has not been saved","The table changes have not been saved.  Do you want to discard the changes and exit?").then((function(e){t(e)})).catch((function(){t(!1)})):t(!0)}))}},{key:"unloadNotification",value:function(e){this.formsService.hasChanged&&(e.returnValue="The table changes have not been saved.  Do you want to discard the changes and exit?")}}]),e}()).\u0275fac=function(e){return new(e||T)(f.Kb(c.a),f.Kb(l.a),f.Kb(o.a),f.Kb(s.a),f.Kb(s.e))},T.\u0275cmp=f.Eb({type:T,selectors:[["dexih-table-edit-form"]],hostBindings:function(e,t){1&e&&f.Vb("beforeunload",(function(e){return t.unloadNotification(e)}),!1,f.uc)},decls:6,vars:2,consts:[[1,"container-fluid"],["iconClass","fa fa-lg fa-fw fa-table",3,"title","showCloseButton","close"],["header",""],[1,"mr-1",3,"control","click"],[1,"mr-1",3,"showEdit","tables","changedTables"],["class","mr-1","title","Create the file paths (or folders).","iconClass","fa fa-folder-open","buttonClass","btn-primary",3,"click",4,"ngIf"],["class","mr-1",3,"formsService",4,"ngIf"],[3,"formsService"],["title","Create the file paths (or folders).","iconClass","fa fa-folder-open","buttonClass","btn-primary",1,"mr-1",3,"click"],[1,"mr-1",3,"formsService"]],template:function(e,t){1&e&&(f.Ob(0,"div",0),f.Ob(1,"dexih-widget",1),f.Vb("close",(function(){return t.close()})),f.Dc(2,_,5,9,"ng-template",null,2,f.Ec),f.Ob(4,"div"),f.Lb(5,"router-outlet"),f.Nb(),f.Nb(),f.Nb()),2&e&&(f.yb(1),f.hc("title","Edit Table ("+(null==t.formsService.currentForm||null==t.formsService.currentForm.controls||null==t.formsService.currentForm.controls.name?null:t.formsService.currentForm.controls.name.value)+")")("showCloseButton",!0))},directives:[v.P,s.j,m.a,g.a,n.t,p.a,v.f,y.a],encapsulation:2}),T),x=i("dn85"),P=((F=function(){function e(t,i,n,r,a){_classCallCheck(this,e),this.authService=t,this.hubService=i,this.formService=n,this.route=r,this.router=a,this.detailedView=!0}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;try{this._subscription=Object(u.a)(this.route.data,this.route.params,this.route.queryParams,this.formService.getCurrentFormObservable()).subscribe((function(t){var i=t[0],n=t[1],r=t[2];e.tableForm=t[3],e.pageTitle=i.pageTitle,e.action=i.action,e.columnKey=+n.columnKey,e.detailedView="false"!==r.detailed}))}catch(t){this.hubService.addHubClientErrorMessage(t,"Table Column Edit")}}},{key:"ngOnDestroy",value:function(){this._subscription&&this._subscription.unsubscribe()}},{key:"isUpdated",value:function(){this.authService.navigateUp()}},{key:"changeColumn",value:function(e){this.router.navigate(["column",e],{relativeTo:this.route.parent})}}]),e}()).\u0275fac=function(e){return new(e||F)(f.Kb(o.a),f.Kb(c.a),f.Kb(l.a),f.Kb(s.a),f.Kb(s.e))},F.\u0275cmp=f.Eb({type:F,selectors:[["dexih-table-column-edit"]],decls:1,vars:3,consts:[[3,"tableForm","columnKey","detailedView","isUpdated","changeColumn"]],template:function(e,t){1&e&&(f.Ob(0,"column-edit",0),f.Vb("isUpdated",(function(){return t.isUpdated()}))("changeColumn",(function(e){return t.changeColumn(e)})),f.Nb()),2&e&&f.hc("tableForm",t.tableForm)("columnKey",t.columnKey)("detailedView",t.detailedView)},directives:[x.a],encapsulation:2}),F),V=i("bK5D"),D=i("taGP"),L=i("Qrk8"),N=i("vDxl"),M=((E=function(){function e(t){_classCallCheck(this,e),this.formsService=t}return _createClass(e,[{key:"ngOnInit",value:function(){}},{key:"ngOnDestroy",value:function(){}}]),e}()).\u0275fac=function(e){return new(e||E)(f.Kb(l.a))},E.\u0275cmp=f.Eb({type:E,selectors:[["dexih-table-edit-form"]],decls:2,vars:2,consts:[[3,"formsService"],[3,"tableForm"]],template:function(e,t){1&e&&(f.Lb(0,"dexih-table-edit-properties",0),f.Lb(1,"table-edit-columns",1)),2&e&&(f.hc("formsService",t.formsService),f.yb(1),f.hc("tableForm",t.formsService.currentForm))},directives:[L.a,N.a],encapsulation:2}),E),j=i("NUI7"),H=s.i.forChild([{path:"",component:K,canDeactivate:[V.a],children:[{path:"",redirectTo:"properties"},{path:"properties",component:M,data:{navigateSkip:!0}},{path:"column",component:P,data:{pageTitle:"Edit Column"}},{path:"column/:columnKey",component:P,data:{pageTitle:"Edit Column"}},{path:"table-preview/:tableKey",component:D.a,data:{pageTitle:"Preview"}},{path:"fileFormat-new",component:j.a,data:{action:"new",pageTitle:"New File Format"}}]}]),q=i("RRRx"),I=i("vSNy"),U=((O=function(){function e(){_classCallCheck(this,e)}return _createClass(e,null,[{key:"forRoot",value:function(){return{ngModule:e,providers:[l.a]}}}]),e}()).\u0275mod=f.Ib({type:O}),O.\u0275inj=f.Hb({factory:function(e){return new(e||O)},providers:[l.a,V.a],imports:[[r.a,n.c,a.n,a.C,H,q.a,I.a]]}),O)},taGP:function(e,t,i){"use strict";i.d(t,"a",(function(){return f}));var n=i("4Y1E"),r=i("ElCs"),a=i("itXk"),s=i("cvPx"),c=i("soiQ"),o=i("fXoL"),u=i("tyNb"),l=i("Wumg"),h=i("NHAS");function b(e,t){if(1&e){var i=o.Pb();o.Ob(0,"dexih-button-close",3),o.Vb("click",(function(){return o.vc(i),o.Zb().close()})),o.Nb()}}var d,f=((d=function(){function e(t,i,n,r){_classCallCheck(this,e),this.formsService=t,this.hubService=i,this.authService=n,this.route=r,this.eDataObjectType=c.lb}return _createClass(e,[{key:"ngOnInit",value:function(){var e=this;try{this._subscription=Object(a.a)(this.route.data,this.hubService.getHubCacheObservable(),this.formsService.getCurrentFormObservable()).subscribe((function(t){var i=t[0],n=t[2];e.action=i.action,e.pageTitle=i.pageTitle,n&&(e.table=n.value)}))}catch(t){this.hubService.addHubClientErrorMessage(t,"Table Edit Preview")}}},{key:"ngOnDestroy",value:function(){this._subscription&&this._subscription.unsubscribe()}},{key:"close",value:function(){this.authService.navigateUp()}}]),e}()).\u0275fac=function(e){return new(e||d)(o.Kb(s.a),o.Kb(n.a),o.Kb(r.a),o.Kb(u.a))},d.\u0275cmp=o.Eb({type:d,selectors:[["table-edit-preview-data"]],decls:4,vars:4,consts:[["title","Preview Table",3,"showExpandButton","padding"],["header",""],[3,"table","viewSource"],[3,"click"]],template:function(e,t){1&e&&(o.Ob(0,"dexih-widget-section",0),o.Dc(1,b,1,0,"ng-template",null,1,o.Ec),o.Lb(3,"preview-data",2),o.Nb()),2&e&&(o.hc("showExpandButton",!1)("padding",!1),o.yb(3),o.hc("table",t.table)("viewSource",t.eDataObjectType.Table))},directives:[l.T,h.a,l.d],encapsulation:2}),d)}}]);