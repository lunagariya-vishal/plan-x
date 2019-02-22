(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/layout/header/header.component */ "./src/app/components/layout/header/header.component.ts");
/* harmony import */ var _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/layout/footer/footer.component */ "./src/app/components/layout/footer/footer.component.ts");
/* harmony import */ var _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/auth/login/login.component */ "./src/app/components/auth/login/login.component.ts");
/* harmony import */ var _components_auth_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/auth/forgot-password/forgot-password.component */ "./src/app/components/auth/forgot-password/forgot-password.component.ts");
/* harmony import */ var _components_auth_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/auth/change-password/change-password.component */ "./src/app/components/auth/change-password/change-password.component.ts");
/* harmony import */ var _components_study_study_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/study/study.component */ "./src/app/components/study/study.component.ts");
/* harmony import */ var _components_report_report_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/report/report.component */ "./src/app/components/report/report.component.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");














var routes = [
    { path: 'page-not-found', component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__["PageNotFoundComponent"], data: { title: 'Page not found' } },
    { path: '', component: _components_study_study_component__WEBPACK_IMPORTED_MODULE_9__["StudyComponent"], data: { title: 'Study' } },
    { path: 'study', component: _components_study_study_component__WEBPACK_IMPORTED_MODULE_9__["StudyComponent"], data: { title: 'Study' } },
    { path: 'report/:id', component: _components_report_report_component__WEBPACK_IMPORTED_MODULE_10__["ReportComponent"], data: { title: 'Report' } },
    { path: '**', redirectTo: '/page-not-found' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _components_auth_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__["ForgotPasswordComponent"],
                _components_auth_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_8__["ChangePasswordComponent"],
                _components_study_study_component__WEBPACK_IMPORTED_MODULE_9__["StudyComponent"],
                _components_study_study_component__WEBPACK_IMPORTED_MODULE_9__["AddStudyComponent"],
                _components_study_study_component__WEBPACK_IMPORTED_MODULE_9__["EditStudyComponent"],
                _components_report_report_component__WEBPACK_IMPORTED_MODULE_10__["ReportComponent"],
                _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__["PageNotFoundComponent"]
            ],
            declarations: [
                _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _components_auth_login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _components_auth_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__["ForgotPasswordComponent"],
                _components_auth_change_password_change_password_component__WEBPACK_IMPORTED_MODULE_8__["ChangePasswordComponent"],
                _components_study_study_component__WEBPACK_IMPORTED_MODULE_9__["StudyComponent"],
                _components_study_study_component__WEBPACK_IMPORTED_MODULE_9__["AddStudyComponent"],
                _components_study_study_component__WEBPACK_IMPORTED_MODULE_9__["EditStudyComponent"],
                _components_report_report_component__WEBPACK_IMPORTED_MODULE_10__["ReportComponent"],
                _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__["PageNotFoundComponent"]
            ],
            entryComponents: [
                _components_study_study_component__WEBPACK_IMPORTED_MODULE_9__["AddStudyComponent"],
                _components_study_study_component__WEBPACK_IMPORTED_MODULE_9__["EditStudyComponent"]
            ],
            providers: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");






var AppComponent = /** @class */ (function () {
    // showHead: boolean = false;
    // isLoggedIn$: Observable<boolean>;
    function AppComponent(router, userService, activatedRoute, titleService) {
        // this.showHead = this.userService.isLoggedIn;
        // on route change to '/login', set the variable showHead to false
        var _this = this;
        this.router = router;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.titleService = titleService;
        router.events.forEach(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                if (event['url'] == '/login' || event['url'] == '/forgot-password' || event['url'] == '/change-password') {
                    _this.showHead = _this.userService.isLoggedIn;
                }
                else {
                    _this.showHead = _this.userService.isLoggedIn;
                }
            }
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () { return _this.activatedRoute; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (route) {
            while (route.firstChild) {
                route = route.firstChild;
            }
            ;
            return route;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (route) { return route.outlet === 'primary'; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (route) { return route.data; })).subscribe(function (event) { return _this.titleService.setTitle(event['title']); });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_error_log_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/error-log.service */ "./src/app/services/error-log.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/components.module */ "./src/app/components/components.module.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrModule"].forRoot(),
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"]
            ],
            exports: [],
            providers: [
                _services_error_log_service__WEBPACK_IMPORTED_MODULE_6__["ErrorLogService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/auth/auth.module.ts":
/*!************************************************!*\
  !*** ./src/app/components/auth/auth.module.ts ***!
  \************************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [],
            exports: [],
            declarations: [],
            providers: [],
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/components/auth/change-password/change-password.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/auth/change-password/change-password.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-container{\r\n    margin-top: 15%;\r\n    margin-bottom: 15%;\r\n}\r\n.login-form{\r\n    padding: 5%;\r\n    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n.login-form h3{\r\n    text-align: center;\r\n    color: #333;\r\n}\r\n.login-container form{\r\n    padding: 10%;\r\n}\r\n.login-form .ForgetPwd{\r\n    color: #0062cc;\r\n    font-weight: 600;\r\n    text-decoration: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdXRoL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7SUFDWCw0RUFBNEU7QUFDaEY7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hdXRoL2NoYW5nZS1wYXNzd29yZC9jaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1jb250YWluZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAxNSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNSU7XHJcbn1cclxuLmxvZ2luLWZvcm17XHJcbiAgICBwYWRkaW5nOiA1JTtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA5cHggMjZweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbn1cclxuLmxvZ2luLWZvcm0gaDN7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzMzMztcclxufVxyXG4ubG9naW4tY29udGFpbmVyIGZvcm17XHJcbiAgICBwYWRkaW5nOiAxMCU7XHJcbn1cclxuLmxvZ2luLWZvcm0gLkZvcmdldFB3ZHtcclxuICAgIGNvbG9yOiAjMDA2MmNjO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/auth/change-password/change-password.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/auth/change-password/change-password.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container login-container\">\n  <div class=\"row\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-6\">\n      <div class=\"login-form\">\n        <h3>Change Password</h3>\n        <form [formGroup]=\"changePasswordForm\" (ngSubmit)=\"onSubmit()\">\n          <div class=\"form-group\">\n            <input type=\"password\" class=\"form-control\" placeholder=\"Old Password\" formControlName=\"old_password\" />\n            <validation-messages [control]=\"changePasswordForm.controls.old_password\">\n            </validation-messages>\n          </div>\n          <div class=\"form-group\">\n            <input type=\"password\" class=\"form-control\" placeholder=\"New Password\" formControlName=\"new_password\" />\n            <validation-messages [control]=\"changePasswordForm.controls.new_password\">\n            </validation-messages>\n          </div>\n          <div class=\"form-group\">\n            <input type=\"password\" class=\"form-control\" placeholder=\"Confirm Password\" formControlName=\"confirm_password\" />\n            <validation-messages [control]=\"changePasswordForm.controls.confirm_password\">\n            </validation-messages>\n          </div>\n          <div class=\"form-group\">\n            <input type=\"submit\" class=\"btn btn-primary btn-round btn-block\" value=\"Change Password\" [disabled]=\"!changePasswordForm.valid\" />\n          </div>\n          <div class=\"form-group\">\n            <a routerLink=\"/\" class=\"ForgetPwd\">Dashboard</a>\n          </div>\n        </form>\n      </div>\n    </div>\n    <div class=\"col-md-3\"></div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/auth/change-password/change-password.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/auth/change-password/change-password.component.ts ***!
  \******************************************************************************/
/*! exports provided: ChangePasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function() { return ChangePasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");





var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent(userService, formBuilder, titleService) {
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.titleService = titleService;
        this.title = "Change Password";
        this.submitted = false;
        this.titleService.setTitle('Change Password');
    }
    ChangePasswordComponent.prototype.ngOnInit = function () {
        this.changePasswordForm = this.formBuilder.group({
            old_password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            new_password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            confirm_password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    ChangePasswordComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.changePasswordForm.valid) {
            this.userService.changePassword(this.changePasswordForm.value);
        }
    };
    ChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-change-password',
            template: __webpack_require__(/*! ./change-password.component.html */ "./src/app/components/auth/change-password/change-password.component.html"),
            styles: [__webpack_require__(/*! ./change-password.component.css */ "./src/app/components/auth/change-password/change-password.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());



/***/ }),

/***/ "./src/app/components/auth/forgot-password/forgot-password.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/components/auth/forgot-password/forgot-password.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-container{\r\n    margin-top: 15%;\r\n    margin-bottom: 15%;\r\n}\r\n.login-form{\r\n    padding: 5%;\r\n    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n.login-form h3{\r\n    text-align: center;\r\n    color: #333;\r\n}\r\n.login-container form{\r\n    padding: 10%;\r\n}\r\n.login-form .ForgetPwd{\r\n    color: #0062cc;\r\n    font-weight: 600;\r\n    text-decoration: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdXRoL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7SUFDWCw0RUFBNEU7QUFDaEY7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIscUJBQXFCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hdXRoL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1jb250YWluZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAxNSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNSU7XHJcbn1cclxuLmxvZ2luLWZvcm17XHJcbiAgICBwYWRkaW5nOiA1JTtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA5cHggMjZweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbn1cclxuLmxvZ2luLWZvcm0gaDN7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzMzMztcclxufVxyXG4ubG9naW4tY29udGFpbmVyIGZvcm17XHJcbiAgICBwYWRkaW5nOiAxMCU7XHJcbn1cclxuLmxvZ2luLWZvcm0gLkZvcmdldFB3ZHtcclxuICAgIGNvbG9yOiAjMDA2MmNjO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/auth/forgot-password/forgot-password.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/components/auth/forgot-password/forgot-password.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container login-container\">\n  <div class=\"row\">\n    <div class=\"col-md-3\"></div>\n    <div class=\"col-md-6\">\n      <div class=\"login-form\">\n        <h3>Forgot Password</h3>\n        <form [formGroup]=\"forgotPasswordForm\" (ngSubmit)=\"onSubmit()\">\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Email\" formControlName=\"email\" />\n            <validation-messages [control]=\"forgotPasswordForm.controls.email\">\n            </validation-messages>\n          </div>\n          <div class=\"form-group\">\n            <input type=\"submit\" class=\"btn btn-primary btn-round btn-block\" value=\"Login\" [disabled]=\"!forgotPasswordForm.valid\" />\n          </div>\n          <div class=\"form-group\">\n            <a routerLink=\"/login\" class=\"ForgetPwd\">Cancel</a>\n          </div>\n        </form>\n      </div>\n    </div>\n    <div class=\"col-md-3\"></div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/auth/forgot-password/forgot-password.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/components/auth/forgot-password/forgot-password.component.ts ***!
  \******************************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");






var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(userService, router, formBuilder, titleService) {
        this.userService = userService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.titleService = titleService;
        this.title = "Forgot Password";
        this.submitted = false;
        this.titleService.setTitle('Forgot Password');
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
        if (this.userService.isLoggedIn) {
            this.router.navigate(['/']);
        }
        this.forgotPasswordForm = this.formBuilder.group({
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    ForgotPasswordComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.forgotPasswordForm.valid) {
            this.userService.forgotPassword(this.forgotPasswordForm.value);
        }
    };
    ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot-password',
            template: __webpack_require__(/*! ./forgot-password.component.html */ "./src/app/components/auth/forgot-password/forgot-password.component.html"),
            styles: [__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/components/auth/forgot-password/forgot-password.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/components/auth/login/login.component.css":
/*!***********************************************************!*\
  !*** ./src/app/components/auth/login/login.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-container{\r\n    margin-top: 15%;\r\n    margin-bottom: 15%;\r\n}\r\n.login-form{\r\n    padding: 5%;\r\n    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n.login-form h3{\r\n    text-align: center;\r\n    color: #333;\r\n}\r\n.login-container form{\r\n    padding: 10%;\r\n}\r\n.login-form .ForgetPwd{\r\n    color: #0062cc;\r\n    font-weight: 600;\r\n    text-decoration: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsNEVBQTRFO0FBQ2hGO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztBQUNmO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luLWNvbnRhaW5lcntcclxuICAgIG1hcmdpbi10b3A6IDE1JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1JTtcclxufVxyXG4ubG9naW4tZm9ybXtcclxuICAgIHBhZGRpbmc6IDUlO1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDlweCAyNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxufVxyXG4ubG9naW4tZm9ybSBoM3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG59XHJcbi5sb2dpbi1jb250YWluZXIgZm9ybXtcclxuICAgIHBhZGRpbmc6IDEwJTtcclxufVxyXG4ubG9naW4tZm9ybSAuRm9yZ2V0UHdke1xyXG4gICAgY29sb3I6ICMwMDYyY2M7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/auth/login/login.component.html":
/*!************************************************************!*\
  !*** ./src/app/components/auth/login/login.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container login-container\">\n    <div class=\"row\">\n        <div class=\"col-md-3\"></div>\n        <div class=\"col-md-6\">\n            <div class=\"login-form\">\n                <h3>Login</h3>\n                <form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\n                    <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Username\" formControlName=\"username\" />\n                        <validation-messages [control]=\"loginForm.controls.username\">\n                        </validation-messages>\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"password\" class=\"form-control\" placeholder=\"Password\" formControlName=\"password\" />\n                        <validation-messages [control]=\"loginForm.controls.password\">\n                        </validation-messages>\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"submit\" class=\"btn btn-primary btn-round btn-block\" value=\"Login\" [disabled]=\"!loginForm.valid\" />\n                    </div>\n                    <div class=\"form-group\">\n                        <a routerLink=\"/forgot-password\" class=\"ForgetPwd\">Forget Password?</a>\n                    </div>\n                </form>\n            </div>\n        </div>\n        <div class=\"col-md-3\"></div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/components/auth/login/login.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/components/auth/login/login.component.ts ***!
  \**********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/user.service */ "./src/app/services/user.service.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router, titleService, formBuilder) {
        this.userService = userService;
        this.router = router;
        this.titleService = titleService;
        this.formBuilder = formBuilder;
        this.title = "Login";
        this.submitted = false;
        this.titleService.setTitle('Login');
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.userService.isLoggedIn) {
            this.router.navigate(['/']);
        }
        this.loginForm = this.formBuilder.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        this.submitted = true;
        if (this.loginForm.valid) {
            this.userService.login(this.loginForm.value);
        }
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/auth/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/auth/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["Title"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/layout.module */ "./src/app/components/layout/layout.module.ts");
/* harmony import */ var _auth_auth_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth/auth.module */ "./src/app/components/auth/auth.module.ts");




var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _layout_layout_module__WEBPACK_IMPORTED_MODULE_2__["LayoutModule"],
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_3__["AuthModule"],
            ],
            exports: [
                _layout_layout_module__WEBPACK_IMPORTED_MODULE_2__["LayoutModule"],
                _auth_auth_module__WEBPACK_IMPORTED_MODULE_3__["AuthModule"]
            ],
            declarations: []
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/layout/footer/footer.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/layout/footer/footer.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/layout/footer/footer.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/layout/footer/footer.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/layout/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/layout/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/layout/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/layout/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/header/header.component.css":
/*!***************************************************************!*\
  !*** ./src/app/components/layout/header/header.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-container {\r\n\tposition: relative;\r\n\ttop: 0px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sYXlvdXQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0Msa0JBQWtCO0NBQ2xCLFFBQVE7QUFDVCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51LWNvbnRhaW5lciB7XHJcblx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG5cdHRvcDogMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/layout/header/header.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/layout/header/header.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg bg-red fixed-top\">\r\n  <a class=\"navbar-brand text-white\" routerLink=\"/\">Project Name</a>\r\n  <!-- <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" (click)=\"onLogout()\">Logout</a>\r\n      </li>\r\n    </ul>\r\n  </div> -->\r\n</nav>\r\n<ngx-spinner bdColor=\"rgba(255,255,255,0.5)\" size=\"default\" color=\"#c02942\" type=\"ball-pulse\">\r\n  <!-- <p style=\"font-size: 14px; color: white\">Loading...</p> -->\r\n</ngx-spinner>"

/***/ }),

/***/ "./src/app/components/layout/header/header.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/layout/header/header.component.ts ***!
  \**************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(userService) {
        this.userService = userService;
        this.fullname = "";
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.fullname = localStorage.getItem("fullname");
    };
    HeaderComponent.prototype.onLogout = function () {
        this.userService.logout();
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/layout/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/components/layout/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/layout/layout.module.ts":
/*!****************************************************!*\
  !*** ./src/app/components/layout/layout.module.ts ***!
  \****************************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [],
            exports: [],
            declarations: []
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS1ub3QtZm91bmQvcGFnZS1ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"block-header\">\n  <div class=\"row\">\n    <div class=\"col-lg-12 col-md-12 col-sm-12\">\n      <h2 class=\"page-title\"><span class=\"page-titles\">{{title}}</span>\n        <small class=\"page-title page-titles\">{{title}}</small>\n      </h2>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/page-not-found/page-not-found.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/page-not-found/page-not-found.component.ts ***!
  \***********************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
        this.title = "Page not found";
    }
    PageNotFoundComponent.prototype.ngOnInit = function () { };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/components/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/components/page-not-found/page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/report/report.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/report/report.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n\tpadding: 8rem 4rem;\r\n\tmax-width: 210mm;\r\n\tmargin: 0px auto;\r\n}\r\n\r\nfieldset {\r\n\tborder: 1px solid #ddd !important;\r\n\tmargin: 0px 0px 20px 0px;\r\n\tpadding: 10px;\r\n\tborder-radius: 5px;\r\n\tbackground-color: #f5f5f5;\r\n}\r\n\r\nlegend {\r\n\tfont-size: 1rem;\r\n\tfont-weight: 400;\r\n\tmargin-bottom: 0px;\r\n\twidth: 35%;\r\n\tborder: 1px solid #ddd;\r\n\tborder-radius: 5px;\r\n\tpadding: 5px 5px 5px 10px;\r\n\tbackground-color: #ffffff;\r\n}\r\n\r\n.info-list b, .info-list span {\r\n\tfont-size: 12px;\r\n}\r\n\r\n.report-header, .report-footer {\r\n\tmax-width: 210mm;\r\n\tmargin: 0px auto;\r\n}\r\n\r\n.report-body .form-control.form-control-sm, .patient-form-box .form-control.form-control-sm, .report-form-box .form-control.form-control-sm {\r\n\tbackground: transparent;\r\n\tpadding: 0;\r\n\tborder: none;\r\n}\r\n\r\n.report-body .form-control.form-control-sm:focus {\r\n\tbox-shadow: none;\r\n}\r\n\r\n.patient-details {\r\n\tpadding: 0px\r\n}\r\n\r\n.patient-details li {\r\n\tlist-style: none;\r\n\twidth: 50%;\r\n\tdisplay: inline-block;\r\n\tpadding: 0px 10px;\r\n}\r\n\r\n.patient-form-box {\r\n\tlist-style: none;\r\n\tpadding: 10px;\r\n\tcursor: -webkit-grab;\r\n\tcursor: grab;\r\n\tbackground: #f5f5f5;\r\n}\r\n\r\n.report-form-box {\r\n\tpadding-top: 15px;\r\n\tcursor: -webkit-grab;\r\n\tcursor: grab;\r\n\tbackground: white;\r\n}\r\n\r\n.drag-icon {\r\n\tcolor: #787878;\r\n\tmargin: 5px 10px;\r\n\tfont-size: 12px;\r\n}\r\n\r\n.cdk-drag-preview {\r\n\tbox-sizing: border-box;\r\n\tborder-radius: 4px;\r\n\tbox-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\r\n}\r\n\r\n.cdk-drag-placeholder {\r\n\topacity: 0;\r\n}\r\n\r\n.cdk-drag-animating {\r\n\ttransition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n\ttransition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n\ttransition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXBvcnQvcmVwb3J0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxrQkFBa0I7Q0FDbEIsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGlDQUFpQztDQUNqQyx3QkFBd0I7Q0FDeEIsYUFBYTtDQUNiLGtCQUFrQjtDQUNsQix5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1Ysc0JBQXNCO0NBQ3RCLGtCQUFrQjtDQUNsQix5QkFBeUI7Q0FDekIseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0MsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGdCQUFnQjtDQUNoQixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyx1QkFBdUI7Q0FDdkIsVUFBVTtDQUNWLFlBQVk7QUFDYjs7QUFFQTtDQUNDLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDO0FBQ0Q7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsVUFBVTtDQUNWLHFCQUFxQjtDQUNyQixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxnQkFBZ0I7Q0FDaEIsYUFBYTtDQUNiLG9CQUFZO0NBQVosWUFBWTtDQUNaLG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixvQkFBWTtDQUFaLFlBQVk7Q0FDWixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxjQUFjO0NBQ2QsZ0JBQWdCO0NBQ2hCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxzQkFBc0I7Q0FDdEIsa0JBQWtCO0NBQ2xCLHFIQUFxSDtBQUN0SDs7QUFFQTtDQUNDLFVBQVU7QUFDWDs7QUFFQTtDQUNDLDhEQUFzRDtDQUF0RCxzREFBc0Q7Q0FBdEQsMEdBQXNEO0FBQ3ZEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZXBvcnQvcmVwb3J0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcblx0cGFkZGluZzogOHJlbSA0cmVtO1xyXG5cdG1heC13aWR0aDogMjEwbW07XHJcblx0bWFyZ2luOiAwcHggYXV0bztcclxufVxyXG5cclxuZmllbGRzZXQge1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkICNkZGQgIWltcG9ydGFudDtcclxuXHRtYXJnaW46IDBweCAwcHggMjBweCAwcHg7XHJcblx0cGFkZGluZzogMTBweDtcclxuXHRib3JkZXItcmFkaXVzOiA1cHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxufVxyXG5cclxubGVnZW5kIHtcclxuXHRmb250LXNpemU6IDFyZW07XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRtYXJnaW4tYm90dG9tOiAwcHg7XHJcblx0d2lkdGg6IDM1JTtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG5cdGJvcmRlci1yYWRpdXM6IDVweDtcclxuXHRwYWRkaW5nOiA1cHggNXB4IDVweCAxMHB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5pbmZvLWxpc3QgYiwgLmluZm8tbGlzdCBzcGFuIHtcclxuXHRmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5yZXBvcnQtaGVhZGVyLCAucmVwb3J0LWZvb3RlciB7XHJcblx0bWF4LXdpZHRoOiAyMTBtbTtcclxuXHRtYXJnaW46IDBweCBhdXRvO1xyXG59XHJcblxyXG4ucmVwb3J0LWJvZHkgLmZvcm0tY29udHJvbC5mb3JtLWNvbnRyb2wtc20sIC5wYXRpZW50LWZvcm0tYm94IC5mb3JtLWNvbnRyb2wuZm9ybS1jb250cm9sLXNtLCAucmVwb3J0LWZvcm0tYm94IC5mb3JtLWNvbnRyb2wuZm9ybS1jb250cm9sLXNtIHtcclxuXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHRwYWRkaW5nOiAwO1xyXG5cdGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLnJlcG9ydC1ib2R5IC5mb3JtLWNvbnRyb2wuZm9ybS1jb250cm9sLXNtOmZvY3VzIHtcclxuXHRib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4ucGF0aWVudC1kZXRhaWxzIHtcclxuXHRwYWRkaW5nOiAwcHhcclxufVxyXG5cclxuLnBhdGllbnQtZGV0YWlscyBsaSB7XHJcblx0bGlzdC1zdHlsZTogbm9uZTtcclxuXHR3aWR0aDogNTAlO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRwYWRkaW5nOiAwcHggMTBweDtcclxufVxyXG5cclxuLnBhdGllbnQtZm9ybS1ib3gge1xyXG5cdGxpc3Qtc3R5bGU6IG5vbmU7XHJcblx0cGFkZGluZzogMTBweDtcclxuXHRjdXJzb3I6IGdyYWI7XHJcblx0YmFja2dyb3VuZDogI2Y1ZjVmNTtcclxufVxyXG5cclxuLnJlcG9ydC1mb3JtLWJveCB7XHJcblx0cGFkZGluZy10b3A6IDE1cHg7XHJcblx0Y3Vyc29yOiBncmFiO1xyXG5cdGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcblxyXG4uZHJhZy1pY29uIHtcclxuXHRjb2xvcjogIzc4Nzg3ODtcclxuXHRtYXJnaW46IDVweCAxMHB4O1xyXG5cdGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmNkay1kcmFnLXByZXZpZXcge1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG5cclxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcclxuXHRvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcclxuXHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/report/report.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/report/report.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"wrapper\">\n    <div class=\"report-header\">\n      <div class=\"row\">\n        <div class=\"col-lg-8 col-md-8 col-sm-8\">\n          <h6 class=\"m-0\">Patient: {{PatientName}} ({{PatientID}})</h6>\n          <small *ngIf=\"Study\">Study : {{Study}} ({{StudyDate}})</small>\n        </div>\n        <div class=\"col-lg-4 col-md-4 col-sm-4\">\n          <div class=\"text-right\">\n            <button type=\"button\" class=\"btn btn-sm bg-grey txt-white\" (click)=\"previewToggle()\"\n              style=\"margin: 0px 10px\">{{previewButton}}</button>\n            <a routerLink=\"/\" class=\"btn btn-sm bg-red txt-white float-right\">Report List</a>\n          </div>\n        </div>\n      </div>\n      <hr />\n    </div>\n    <div class=\"report-body\" *ngIf=\"!preview\">\n      <div class=\"card\">\n        <div class=\"row\">\n          <div class=\"col-lg-12 col-md-12 col-sm-12\">\n            <div class=\"form-group\">\n              <label>Report title</label>\n              <input class=\"form-control text-center\" type=\"text\" value=\"Report Title\">\n              <h6 class=\"text-center\"><small>{{currentDate | date:'longDate'}}</small></h6>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-12 col-md-12 col-sm-12\">\n            <label>Report basic info</label>\n            <fieldset>\n              <!-- <legend>Report basic info</legend> -->\n              <label class=\"float-left\">{{PatientID}}</label>\n              <div class=\"float-right\">\n                <button type=\"button\" class=\"btn btn-sm bg-grey txt-white\"\n                  (click)=\"editToggle()\">{{buttonName}}</button>\n              </div>\n              <div class=\"clearfix\"></div>\n              <hr />\n              <div class=\"info-list\" *ngIf=\"!show\">\n                <div class=\"row\">\n                  <div class=\"col-lg-6 col-md-6 col-sm-6\" *ngFor=\"let detail of ReportDetails | keyvalue\">\n                    <b>{{detail.value.key}} : </b><span>{{detail.value.value}}</span>\n                  </div>\n                </div>\n              </div>\n              <div class=\"info-edit\" *ngIf=\"show\">\n                <form [formGroup]=\"reportForm\" (ngSubmit)=\"reportDetailsSubmit()\">\n                  <input type=\"hidden\" formControlName=\"_id\">\n                  <ul class=\"patient-details\" cdkDropList (cdkDropListDropped)=\"dropReportDetails($event)\">\n                    <li class=\"patient-form-box\" formArrayName=\"ReportDetails\"\n                      *ngFor=\"let field of reportForm.get('ReportDetails')['controls']; let i = index\" cdkDrag>\n                      <div class=\"form-group\" [formGroupName]=\"i\">\n                        <label><input class=\"form-control form-control-sm\" formControlName=\"key\"\n                            placeholder=\"Write title...\" (blur)=\"reportDetailsSubmit()\"></label>\n                        <button type=\"button\" class=\"btn btn-sm bg-red txt-white float-right\"\n                          (click)=\"removeField(i)\"><i class=\"fa fa-close\"></i></button>\n                        <input class=\"form-control\" type=\"text\" formControlName=\"value\" (blur)=\"reportDetailsSubmit()\">\n                      </div>\n                    </li>\n                  </ul>\n                  <div class=\"row\">\n                    <div class=\"col-lg-6 col-md-6 col-sm-6\">\n                      <!-- <div class=\"form-group\">\n                          <button type=\"submit\" class=\"btn btn-sm bg-red txt-white\">Save</button>\n                        </div> -->\n                    </div>\n                    <div class=\"col-lg-6 col-md-6 col-sm-6\">\n                      <div class=\"form-group text-right\">\n                        <button type=\"button\" class=\"btn btn-success btn-sm\" (click)=\"addField()\"><i\n                            class=\"fa fa-plus-circle\"></i> Add\n                          field</button>\n                      </div>\n                    </div>\n                  </div>\n                </form>\n              </div>\n            </fieldset>\n          </div>\n        </div>\n        <form [formGroup]=\"reportForm\">\n          <div cdkDropList (cdkDropListDropped)=\"dropExtraReportDetails($event)\">\n            <div class=\"row report-form-box\" formArrayName=\"ExtraReportDetails\"\n              *ngFor=\"let field of reportForm.get('ExtraReportDetails')['controls']; let i = index\" cdkDrag>\n              <div class=\"col-lg-12 col-md-12 col-sm-12\">\n                <div class=\"form-group\" [formGroupName]=\"i\">\n                  <label><input type=\"text\" class=\"form-control form-control-sm\" formControlName=\"key\"\n                      (blur)=\"extraReportDetailsSubmit()\" placeholder=\"Write title...\" /></label>\n                  <button type=\"button\" class=\"btn btn-sm bg-red txt-white float-right\" (click)=\"removeDetails(i)\"><i\n                      class=\"fa fa-close\"></i></button>\n                  <span class=\"drag-icon float-right\"><i class=\"fa fa-arrows-alt\"></i> Drag to\n                    reorder</span>\n                  <textarea class=\"form-control\" formControlName=\"value\" (blur)=\"extraReportDetailsSubmit()\"></textarea>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12\">\n              <div class=\"form-group text-right\">\n                <button type=\"button\" class=\"btn btn-success btn-sm\" (click)=\"addDetails()\"><i\n                    class=\"fa fa-plus-circle\"></i> Add\n                  field</button>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12\">\n              <div class=\"form-group text-right\">\n                <b>Signature</b>\n              </div>\n            </div>\n          </div>\n        </form>\n      </div>\n      <div class=\"my-3\"></div>\n      <div class=\"card py-5\">\n        <div class=\"row\">\n          <div class=\"col-lg-12 col-md-12 col-sm-12\">\n            <h6>Key images</h6>\n            <hr />\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"report-body\" *ngIf=\"preview\">\n      <div class=\"card\">\n        <div class=\"row\">\n          <div class=\"col-lg-12 col-md-12 col-sm-12\">\n            <div class=\"form-group\">\n              <h5 class=\"text-center\"><b>Report Title</b></h5>\n              <h6 class=\"text-center\"><small>February 14, 2019</small></h6>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-12 col-md-12 col-sm-12\">\n            <fieldset>\n              <div class=\"info-list\">\n                <div class=\"row\">\n                  <div class=\"col-lg-6 col-md-6 col-sm-6\" *ngFor=\"let detail of ReportDetails | keyvalue\">\n                    <b>{{detail.value.key}} : </b><span>{{detail.value.value}}</span>\n                  </div>\n                </div>\n              </div>\n            </fieldset>\n          </div>\n        </div>\n        <div class=\"row\" *ngFor=\"let detail of ExtraReportDetails | keyvalue\">\n          <div class=\"col-lg-12 col-md-12 col-sm-12\">\n            <div class=\"form-group\">\n              <b>{{detail.value.key}} : </b>\n              <p class=\"text-justify\">{{detail.value.value}}</p>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-12 col-md-12 col-sm-12\">\n            <div class=\"form-group text-right\">\n              <b>Signature</b>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"my-3\"></div>\n      <div class=\"card py-5\">\n        <div class=\"row\">\n          <div class=\"col-lg-12 col-md-12 col-sm-12\">\n            <h6>Key images</h6>\n            <hr />\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"report-footer\">\n      <hr />\n      <div class=\"row\">\n        <div class=\"col-lg-6 col-md-6 col-sm-6\">\n          <a routerLink=\"/\" class=\"btn btn-sm bg-red txt-white\">Report List</a>\n        </div>\n        <div class=\"col-lg-6 col-md-6 col-sm-6\">\n          <div class=\"text-right\">\n            <button type=\"button\" class=\"btn btn-sm bg-grey txt-white\" (click)=\"previewToggle()\"\n              style=\"margin: 0px 10px\">{{previewButton}}</button>\n            <a routerLink=\"/\" class=\"btn btn-sm btn-success\">Finish report</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/report/report.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/report/report.component.ts ***!
  \*******************************************************/
/*! exports provided: ReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportComponent", function() { return ReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_error_log_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/error-log.service */ "./src/app/services/error-log.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var ReportComponent = /** @class */ (function () {
    function ReportComponent(commonService, errorLogService, route, router, formBuilder) {
        this.commonService = commonService;
        this.errorLogService = errorLogService;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.currentDate = new Date();
        this.preview = false;
        this.previewButton = 'Preview';
        this.show = false;
        this.buttonName = 'Edit';
    }
    ReportComponent.prototype.ngOnInit = function () {
        this.ID = this.route.snapshot.paramMap.get("id");
        this.reportForm = this.formBuilder.group({
            _id: [this.ID],
            ReportDetails: this.formBuilder.array([]),
            ExtraReportDetails: this.formBuilder.array([])
        });
        this.index();
    };
    ReportComponent.prototype.index = function () {
        var _this = this;
        this.commonService.getData('study/' + this.ID).subscribe(function (response) {
            if (response.status) {
                _this.PatientID = response.data.PatientID;
                _this.ReportDetails = Object.keys(response.data.ReportDetails).map(function (key) { return ({ field: key, key: response.data.ReportDetails[key].key, value: response.data.ReportDetails[key].value }); });
                _this.ReportDetails.forEach(function (object) {
                    if (object.field === 'PatientName') {
                        _this.PatientName = object.value;
                    }
                    if (object.field === 'StudyDescription') {
                        _this.Study = object.value;
                    }
                    if (object.field === 'StudyDate') {
                        _this.StudyDate = object.value;
                    }
                    _this.reportForm.get('ReportDetails').push(_this.formBuilder.group({
                        key: [object.key],
                        value: [object.value]
                    }));
                    // this.reportForm.addControl(object.key, this.formBuilder.control(object.value, Validators.required));
                });
                if (response.data.ExtraReportDetails !== undefined) {
                    _this.ExtraReportDetails = Object.keys(response.data.ExtraReportDetails).map(function (key) { return ({ field: key, key: response.data.ExtraReportDetails[key].key, value: response.data.ExtraReportDetails[key].value }); });
                    _this.ExtraReportDetails.forEach(function (object) {
                        _this.reportForm.get('ExtraReportDetails').push(_this.formBuilder.group({
                            key: [object.key],
                            value: [object.value]
                        }));
                    });
                }
            }
            else {
                _this.errorLogService.handleError(response.message);
                _this.router.navigate(['/']);
            }
        }, function (error) { return _this.errorLogService.handleError(error); });
    };
    ReportComponent.prototype.reportDetailsSubmit = function () {
        var _this = this;
        // var ReportDetails = {};
        // this.allDetails.forEach(object => {
        //   ReportDetails[object.field] = { 'key': object.key, 'value': this.reportForm.controls[object.field].value };
        // });
        // var NewField = this.reportForm.get('NewField').value;
        // var ExtraReportDetails = {};
        // NewField.forEach(object => {
        //   ExtraReportDetails[object.key.replace(" ", "")] = { 'key': object.key, 'value': object.value };
        // });
        // const AllDetails = Object.assign({}, ReportDetails, ExtraReportDetails);
        var ReportDetailsValue = this.reportForm.get('ReportDetails').value;
        var ExtraReportDetails = {};
        ReportDetailsValue.forEach(function (object) {
            if (object.key) {
                ExtraReportDetails[object.key.replace(" ", "")] = { 'key': object.key, 'value': object.value };
            }
        });
        this.commonService.updateData('report/edit/' + this.reportForm.controls['_id'].value, { 'ReportDetails': ExtraReportDetails }).subscribe(function (response) {
            if (response.status) {
                _this.errorLogService.handleSuccess(response.message);
                // this.router.navigate(['/']);
            }
            else {
                _this.errorLogService.handleError(response.message);
            }
        }, function (error) { return _this.errorLogService.handleError(error); });
    };
    ReportComponent.prototype.extraReportDetailsSubmit = function () {
        var _this = this;
        var ExtraReportDetailsValue = this.reportForm.get('ExtraReportDetails').value;
        var ExtraExtraReportDetails = {};
        ExtraReportDetailsValue.forEach(function (object) {
            if (object.key) {
                ExtraExtraReportDetails[object.key.replace(" ", "")] = { 'key': object.key, 'value': object.value };
            }
        });
        this.commonService.updateData('report/edit/' + this.reportForm.controls['_id'].value, { 'ExtraReportDetails': ExtraExtraReportDetails }).subscribe(function (response) {
            if (response.status) {
                _this.errorLogService.handleSuccess(response.message);
                // this.router.navigate(['/']);
            }
            else {
                _this.errorLogService.handleError(response.message);
            }
        }, function (error) { return _this.errorLogService.handleError(error); });
    };
    ReportComponent.prototype.addField = function () {
        var arrayControl = this.reportForm.get('ReportDetails');
        arrayControl.push(this.formBuilder.group({
            key: [''],
            value: ['']
        }));
    };
    ReportComponent.prototype.removeField = function (index) {
        var arrayControl = this.reportForm.get('ReportDetails');
        arrayControl.removeAt(index);
        this.reportDetailsSubmit();
    };
    ReportComponent.prototype.addDetails = function () {
        var arrayControl = this.reportForm.get('ExtraReportDetails');
        arrayControl.push(this.formBuilder.group({
            key: [''],
            value: ['']
        }));
    };
    ReportComponent.prototype.removeDetails = function (index) {
        var arrayControl = this.reportForm.get('ExtraReportDetails');
        arrayControl.removeAt(index);
        this.reportDetailsSubmit();
    };
    ReportComponent.prototype.editToggle = function () {
        this.show = !this.show;
        if (this.show)
            this.buttonName = "Done";
        else
            this.buttonName = "Edit";
    };
    ReportComponent.prototype.previewToggle = function () {
        this.preview = !this.preview;
        if (this.preview)
            this.previewButton = "Edit Report";
        else
            this.previewButton = "Preview";
    };
    ReportComponent.prototype.dropReportDetails = function (event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(this.reportForm.get('ReportDetails')['controls'], event.previousIndex, event.currentIndex);
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(this.reportForm.get('ReportDetails').value, event.previousIndex, event.currentIndex);
        this.reportDetailsSubmit();
    };
    ReportComponent.prototype.dropExtraReportDetails = function (event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(this.reportForm.get('ExtraReportDetails')['controls'], event.previousIndex, event.currentIndex);
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["moveItemInArray"])(this.reportForm.get('ExtraReportDetails').value, event.previousIndex, event.currentIndex);
        this.extraReportDetailsSubmit();
    };
    ReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-report',
            template: __webpack_require__(/*! ./report.component.html */ "./src/app/components/report/report.component.html"),
            styles: [__webpack_require__(/*! ./report.component.css */ "./src/app/components/report/report.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_common_service__WEBPACK_IMPORTED_MODULE_4__["CommonService"],
            _services_error_log_service__WEBPACK_IMPORTED_MODULE_5__["ErrorLogService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], ReportComponent);
    return ReportComponent;
}());



/***/ }),

/***/ "./src/app/components/study/add-study.html":
/*!*************************************************!*\
  !*** ./src/app/components/study/add-study.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-content\">\n  <header class=\"dialog-header\">\n    <h5>Add {{title}}</h5>\n  </header>\n  <main class=\"dialog-body\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12\">\n        <div class=\"form-group\">\n          <label>Upload folder</label>\n          <!-- <div class=\"custom-file\">\n      <input type=\"file\" class=\"custom-file-input\" id=\"customFileLang\" lang=\"es\">\n      <label class=\"custom-file-label\" for=\"customFileLang\">Seleccionar Archivo</label>\n    </div> -->\n          <input class=\"form-control-file\" type=\"file\" #folderInput (change)=\"onSubmit(folderInput.files)\"\n            webkitDirectory>\n        </div>\n        <div class=\"form-group\">\n          <label>Upload file</label>\n          <input class=\"form-control-file\" type=\"file\" name=\"photo\" (change)=\"onSubmit($event.target.files)\" multiple />\n        </div>\n      </div>\n    </div>\n  </main>\n  <footer class=\"dialog-footer\">\n    <div class=\"row\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12\">\n        <div class=\"text-right\">\n          <button type=\"button\" class=\"btn btn-sm bg-grey txt-white\" (click)=\"close()\">Close</button>\n        </div>\n      </div>\n    </div>\n  </footer>\n</div>"

/***/ }),

/***/ "./src/app/components/study/edit-study.html":
/*!**************************************************!*\
  !*** ./src/app/components/study/edit-study.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"reportForm\" (ngSubmit)=\"patientDetailsSubmit()\">\n  <input type=\"hidden\" formControlName=\"_id\">\n  <div class=\"dialog-content\">\n    <header class=\"dialog-header\">\n      <h5>Edit {{title}}</h5>\n    </header>\n    <main class=\"dialog-body\">\n      <div class=\"row\">\n        <div class=\"col-lg-6 col-md-6 col-sm-6\" formArrayName=\"PatientDetails\"\n          *ngFor=\"let field of reportForm.get('PatientDetails')['controls']; let i = index\">\n          <div class=\"form-group\" [formGroupName]=\"i\">\n            <label>{{field.value.key}}</label>\n            <!-- <label><input class=\"form-control form-control-sm\" formControlName=\"key\"\n                placeholder=\"Write title...\"></label>\n             <button type=\"button\" class=\"btn btn-sm bg-red txt-white float-right\" (click)=\"removeField(i)\"><i\n                class=\"fa fa-close\"></i></button> -->\n            <input class=\"form-control\" type=\"text\" formControlName=\"value\">\n          </div>\n        </div>\n      </div>\n    </main>\n    <footer class=\"dialog-footer\">\n      <div class=\"row\">\n        <div class=\"col-lg-6 col-md-6 col-sm-6\">\n          <!-- <button type=\"button\" class=\"btn btn-success btn-sm\" (click)=\"addField()\"><i class=\"fa fa-plus-circle\"></i>\n            Add\n            field</button> -->\n        </div>\n        <div class=\"col-lg-6 col-md-6 col-sm-6\">\n          <div class=\"text-right\">\n            <button type=\"submit\" class=\"btn btn-sm bg-red txt-white mr-1\">Save</button>\n            <button type=\"button\" class=\"btn btn-sm bg-grey txt-white\" (click)=\"close()\">Close</button>\n          </div>\n        </div>\n      </div>\n    </footer>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/components/study/study.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/study/study.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n  margin: 15px 0px;\r\n}\r\n\r\n/* table {\r\n  width: 100%;\r\n} */\r\n\r\n.table th, .table td {\r\n  white-space: nowrap;\r\n  font-size: 12px;\r\n}\r\n\r\ntr.example-detail-row {\r\n  height: 0;\r\n}\r\n\r\ntr.example-element-row:not(.example-expanded-row):hover {\r\n  background: #f5f5f5;\r\n}\r\n\r\ntr.example-element-row:not(.example-expanded-row):active {\r\n  background: #efefef;\r\n}\r\n\r\n.example-element-row td {\r\n  border-bottom-width: 0;\r\n}\r\n\r\n.example-element-detail {\r\n  overflow: hidden;\r\n  display: flex;\r\n}\r\n\r\n.example-element-diagram {\r\n  min-width: 80px;\r\n  border: 2px solid black;\r\n  padding: 8px;\r\n  font-weight: lighter;\r\n  margin: 8px 0;\r\n  height: 104px;\r\n}\r\n\r\n.example-element-symbol {\r\n  font-weight: bold;\r\n  font-size: 40px;\r\n  line-height: normal;\r\n}\r\n\r\n.example-element-description {\r\n  padding: 16px;\r\n}\r\n\r\n.example-element-description-attribution {\r\n  opacity: 0.5;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdHVkeS9zdHVkeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBOztHQUVHOztBQUVIO0VBQ0UsbUJBQW1CO0VBQ25CLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3R1ZHkvc3R1ZHkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICBtYXJnaW46IDE1cHggMHB4O1xyXG59XHJcblxyXG4vKiB0YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn0gKi9cclxuXHJcbi50YWJsZSB0aCwgLnRhYmxlIHRkIHtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxudHIuZXhhbXBsZS1kZXRhaWwtcm93IHtcclxuICBoZWlnaHQ6IDA7XHJcbn1cclxuXHJcbnRyLmV4YW1wbGUtZWxlbWVudC1yb3c6bm90KC5leGFtcGxlLWV4cGFuZGVkLXJvdyk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbn1cclxuXHJcbnRyLmV4YW1wbGUtZWxlbWVudC1yb3c6bm90KC5leGFtcGxlLWV4cGFuZGVkLXJvdyk6YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xyXG59XHJcblxyXG4uZXhhbXBsZS1lbGVtZW50LXJvdyB0ZCB7XHJcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcclxufVxyXG5cclxuLmV4YW1wbGUtZWxlbWVudC1kZXRhaWwge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmV4YW1wbGUtZWxlbWVudC1kaWFncmFtIHtcclxuICBtaW4td2lkdGg6IDgwcHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgaGVpZ2h0OiAxMDRweDtcclxufVxyXG5cclxuLmV4YW1wbGUtZWxlbWVudC1zeW1ib2wge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4uZXhhbXBsZS1lbGVtZW50LWRlc2NyaXB0aW9uIHtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1lbGVtZW50LWRlc2NyaXB0aW9uLWF0dHJpYnV0aW9uIHtcclxuICBvcGFjaXR5OiAwLjU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/study/study.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/study/study.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"wrapper\">\n    <div class=\"row\">\n      <div class=\"col-lg-6 col-md-6 col-sm-6\">\n        <h5 class=\"m-0\">Study list</h5>\n      </div>\n      <div class=\"col-lg-6 col-md-6 col-sm-6\">\n        <p class=\"text-right m-0\">{{count}} reports found</p>\n      </div>\n    </div>\n    <hr />\n    <div class=\"row\">\n      <div class=\"col-lg-4 col-md-4 col-sm-4\">\n        <input type=\"search\" placeholder=\"Search\" class=\"form-control form-control-sm\"\n          (input)=\"search($event.target.value)\">\n      </div>\n      <div class=\"col-lg-8 col-md-8 col-sm-8\">\n        <button class=\"btn btn-sm bg-red txt-white float-right\" (click)=\"openAddStudy()\">Add\n          Study</button>\n      </div>\n    </div>\n    <hr />\n    <div class=\"row\">\n      <div class=\"col-lg-12 col-md-12 col-sm-12\">\n        <!-- <table mat-table [dataSource]=\"dataSource\" multiTemplateDataRows class=\"mat-elevation-z8\">\n            <ng-container matColumnDef=\"{{column}}\" *ngFor=\"let column of columnsToDisplay\">\n              <th mat-header-cell *matHeaderCellDef> {{column}} </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element[column]}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"expandedDetail\">\n              <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"columnsToDisplay.length\">\n                <div class=\"example-element-detail\"\n                  [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\n                  <div class=\"example-element-diagram\">\n                    <div class=\"example-element-position\"> {{element.position}} </div>\n                    <div class=\"example-element-symbol\"> {{element.symbol}} </div>\n                    <div class=\"example-element-name\"> {{element.name}} </div>\n                    <div class=\"example-element-weight\"> {{element.weight}} </div>\n                  </div>\n                  <div class=\"example-element-description\">\n                    {{element.description}}\n                    <span class=\"example-element-description-attribution\"> -- Wikipedia </span>\n                  </div>\n                </div>\n              </td>\n            </ng-container>\n\n            <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n            <tr mat-row *matRowDef=\"let element; columns: columnsToDisplay;\" class=\"example-element-row\"\n              [class.example-expanded-row]=\"expandedElement === element\"\n              (click)=\"expandedElement = expandedElement === element ? null : element\">\n            </tr>\n            <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\n          </table> -->\n\n        <div class=\"table-responsive\">\n          <table class=\"table table-bordered table-hover table-light\">\n            <thead class=\"thead-dark\">\n              <tr>\n                <th>Patient ID</th>\n                <th *ngFor=\"let column of columns\">{{column}}</th>\n                <!-- <th *ngFor=\"let row of report.value.Files[0] | keyvalue\">{{row.value.key}}</th> -->\n                <th>Assign</th>\n                <th>Status</th>\n                <th>Action</th>\n              </tr>\n            </thead>\n            <tbody *ngFor=\"let report of reports | keyvalue\">\n              <tr class=\"clickable\" data-toggle=\"collapse\" [attr.data-target]=\"'.row-'+report.key\">\n                <td>{{report.value.PatientID}}</td>\n                <td *ngFor=\"let row of report.value\">{{row.value}}</td>\n                <!-- <td *ngFor=\"let row of report.value.Files[0] | keyvalue\">{{row.value.value}}</td> -->\n                <td>\n                  <div class=\"form-group\">\n                    <select class=\"form-control form-control-sm\" style=\"width:100px;\">\n                      <option>Staff</option>\n                      <option>Other Staff</option>\n                    </select>\n                  </div>\n                </td>\n                <td>\n                  <div class=\"form-group\">\n                    <select class=\"form-control form-control-sm\" style=\"width:100px;\">\n                      <option>True</option>\n                      <option>False</option>\n                    </select>\n                  </div>\n                </td>\n                <td>\n                  <a class=\"btn btn-sm bg-grey txt-white mr-1\" routerLink=\"/report/{{report.key}}\">Report</a>\n                  <button class=\"btn btn-sm bg-grey txt-white\" (click)=\"openEditStudy(report.key)\">Edit</button>\n                </td>\n              </tr>\n              <!-- <tr class=\"collapse table-active row-{{report.key}}\" *ngFor=\"let file of report.value.Files | keyvalue\">\n                  <td colspan=\"6\"></td>\n                  <td *ngFor=\"let row of file.value | keyvalue\">{{row.value.value}}</td>\n                  <td colspan=\"2\"></td>\n                </tr> -->\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/study/study.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/study/study.component.ts ***!
  \*****************************************************/
/*! exports provided: StudyComponent, AddStudyComponent, EditStudyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudyComponent", function() { return StudyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddStudyComponent", function() { return AddStudyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditStudyComponent", function() { return EditStudyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_error_log_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/error-log.service */ "./src/app/services/error-log.service.ts");







var StudyComponent = /** @class */ (function () {
    // columnsToDisplay = ['PatientID', 'Patient', 'Gender', 'Age', 'Study Description', 'Modality', 'Comments', 'Action'];
    function StudyComponent(formBuilder, commonService, errorLogService, dialog) {
        this.formBuilder = formBuilder;
        this.commonService = commonService;
        this.errorLogService = errorLogService;
        this.dialog = dialog;
        this.title = "Study";
        this.reports = [];
        this.columns = [];
        this.count = [];
        this.columnsToDisplay = [];
    }
    StudyComponent.prototype.ngOnInit = function () {
        this.index();
    };
    StudyComponent.prototype.index = function () {
        var _this = this;
        this.commonService.getData('study').subscribe(function (response) {
            _this.count = response.data.length;
            if (response.status) {
                // this.columnsToDisplay = Object.keys(response.data[0].PatientDetails).map(key => (key));
                // response.data.forEach(element => {
                //   let keys = {};
                //   var i = 0;
                //   Object.keys(element.PatientDetails).map(key => {
                //     keys[i + key] = response.data[0].PatientDetails[key].value;
                //     i++;
                //   });
                //   this.reports.push(keys);
                // });
                // this.dataSource = new MatTableDataSource(this.reports);
                // this.dataSource.sort = this.sort;
                // this.dataSource.paginator = this.paginator;
                _this.columns = Object.keys(response.data[0].PatientDetails).map(function (key) { return (response.data[0].PatientDetails[key].key); });
                response.data.forEach(function (element) {
                    _this.reports[element._id] = Object.keys(element.PatientDetails).map(function (key) { return ({ field: key, key: element.PatientDetails[key].key, value: element.PatientDetails[key].value }); });
                    _this.reports[element._id]['PatientID'] = element.PatientID;
                    // this.reports[element._id]['Files'] = Object.keys(element.FileDetails).map(key => (element.FileDetails[key]));
                    _this.reports[element._id]['Files'] = Object.keys(element.FileDetails).map(function (key) { return (Object.keys(element.FileDetails[key]).map(function (keys) { return ({ key: element.FileDetails[key][keys].key, value: element.FileDetails[key][keys].value }); })); });
                });
            }
        }, function (error) { return _this.errorLogService.handleError(error); });
    };
    StudyComponent.prototype.openAddStudy = function () {
        var _this = this;
        var dialogRef = this.dialog.open(AddStudyComponent, {
            width: '50%'
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.index();
        });
    };
    StudyComponent.prototype.openEditStudy = function (ID) {
        var _this = this;
        var dialogRef = this.dialog.open(EditStudyComponent, {
            width: '75%',
            // height: '600px',
            data: { id: ID }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.index();
        });
    };
    StudyComponent.prototype.search = function (value) {
        var _this = this;
        if (value) {
            this.commonService.getData('study/search/' + value).subscribe(function (response) {
                _this.count = response.data.length;
                if (response.status) {
                    _this.reports = [];
                    response.data.forEach(function (element) {
                        _this.reports[element._id] = Object.keys(element.PatientDetails).map(function (key) { return ({ field: key, key: element.PatientDetails[key].key, value: element.PatientDetails[key].value }); });
                        _this.reports[element._id]['PatientID'] = element.PatientID;
                        _this.reports[element._id]['Files'] = Object.keys(element.FileDetails).map(function (key) { return (Object.keys(element.FileDetails[key]).map(function (keys) { return ({ key: element.FileDetails[key][keys].key, value: element.FileDetails[key][keys].value }); })); });
                    });
                }
            }, function (error) { return _this.errorLogService.handleError(error); });
        }
        else {
            this.index();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
    ], StudyComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
    ], StudyComponent.prototype, "sort", void 0);
    StudyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-study',
            template: __webpack_require__(/*! ./study.component.html */ "./src/app/components/study/study.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('detailExpand', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ height: '0px', minHeight: '0', display: 'none' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ height: '*' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                ]),
            ],
            styles: [__webpack_require__(/*! ./study.component.css */ "./src/app/components/study/study.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
            _services_error_log_service__WEBPACK_IMPORTED_MODULE_6__["ErrorLogService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], StudyComponent);
    return StudyComponent;
}());

/****************************************************************************************** */
var AddStudyComponent = /** @class */ (function () {
    function AddStudyComponent(dialogRef, commonService, errorLogService) {
        this.dialogRef = dialogRef;
        this.commonService = commonService;
        this.errorLogService = errorLogService;
        this.title = "Study";
        this.fileToUpload = [];
    }
    AddStudyComponent.prototype.onSubmit = function (files) {
        var _this = this;
        this.fileToUpload = [];
        for (var i = 0; i < files.length; i++) {
            this.fileToUpload.push(files[i]);
        }
        var formData = new FormData();
        for (var i = 0; i < this.fileToUpload.length; i++) {
            formData.append("photo", this.fileToUpload[i]);
        }
        this.commonService.addData('study/add', formData).subscribe(function (response) {
            if (response.status) {
                _this.errorLogService.handleSuccess(response.message);
                _this.close();
            }
            else {
                _this.errorLogService.handleError(response.message);
            }
        }, function (error) { return _this.errorLogService.handleError(error); });
    };
    AddStudyComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    AddStudyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-study',
            template: __webpack_require__(/*! ./add-study.html */ "./src/app/components/study/add-study.html"),
            styles: [__webpack_require__(/*! ./study.component.css */ "./src/app/components/study/study.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
            _services_error_log_service__WEBPACK_IMPORTED_MODULE_6__["ErrorLogService"]])
    ], AddStudyComponent);
    return AddStudyComponent;
}());

/****************************************************************************************** */
var EditStudyComponent = /** @class */ (function () {
    function EditStudyComponent(dialogRef, data, commonService, formBuilder, errorLogService) {
        this.dialogRef = dialogRef;
        this.commonService = commonService;
        this.formBuilder = formBuilder;
        this.errorLogService = errorLogService;
        this.title = "Study";
        this.ID = data.id;
        this.reportForm = this.formBuilder.group({
            _id: [this.ID],
            PatientDetails: this.formBuilder.array([])
        });
    }
    EditStudyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.commonService.getData('study/' + this.ID).subscribe(function (response) {
            if (response.status) {
                var PatientDetails = Object.keys(response.data.PatientDetails).map(function (key) { return ({ field: key, value: response.data.PatientDetails[key].value, key: response.data.PatientDetails[key].key }); });
                PatientDetails.forEach(function (object) {
                    _this.reportForm.get('PatientDetails').push(_this.formBuilder.group({
                        key: [object.key],
                        value: [object.value]
                    }));
                });
            }
            else {
                _this.errorLogService.handleError(response.message);
            }
        }, function (error) { return _this.errorLogService.handleError(error); });
    };
    EditStudyComponent.prototype.patientDetailsSubmit = function () {
        var _this = this;
        var PatientDetailsValue = this.reportForm.get('PatientDetails').value;
        var ExtraPatientDetails = {};
        PatientDetailsValue.forEach(function (object) {
            if (object.key) {
                ExtraPatientDetails[object.key.replace(" ", "")] = { 'key': object.key, 'value': object.value };
            }
        });
        this.commonService.updateData('study/edit/' + this.reportForm.controls['_id'].value, { 'PatientDetails': ExtraPatientDetails }).subscribe(function (response) {
            if (response.status) {
                _this.errorLogService.handleSuccess(response.message);
                _this.close();
            }
            else {
                _this.errorLogService.handleError(response.message);
            }
        }, function (error) { return _this.errorLogService.handleError(error); });
    };
    EditStudyComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    EditStudyComponent.prototype.addField = function () {
        var arrayControl = this.reportForm.get('PatientDetails');
        arrayControl.push(this.formBuilder.group({
            key: [''],
            value: ['']
        }));
    };
    EditStudyComponent.prototype.removeField = function (index) {
        var arrayControl = this.reportForm.get('PatientDetails');
        arrayControl.removeAt(index);
    };
    EditStudyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-study',
            template: __webpack_require__(/*! ./edit-study.html */ "./src/app/components/study/edit-study.html"),
            styles: [__webpack_require__(/*! ./study.component.css */ "./src/app/components/study/study.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _services_error_log_service__WEBPACK_IMPORTED_MODULE_6__["ErrorLogService"]])
    ], EditStudyComponent);
    return EditStudyComponent;
}());



/***/ }),

/***/ "./src/app/components/validation/validation.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/validation/validation.component.ts ***!
  \***************************************************************/
/*! exports provided: ValidationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationComponent", function() { return ValidationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_validation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/validation.service */ "./src/app/shared/validation.service.ts");




var ValidationComponent = /** @class */ (function () {
    function ValidationComponent() {
    }
    Object.defineProperty(ValidationComponent.prototype, "errorMessage", {
        get: function () {
            for (var propertyName in this.control.errors) {
                if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
                    return _shared_validation_service__WEBPACK_IMPORTED_MODULE_3__["ValidationService"].getValidatorErrorMessage(propertyName, this.control.errors[propertyName]);
                }
            }
            return false;
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"])
    ], ValidationComponent.prototype, "control", void 0);
    ValidationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'validation-messages',
            template: "<div *ngIf=\"errorMessage !== false\" class=\"text-danger\">{{errorMessage}}</div>"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ValidationComponent);
    return ValidationComponent;
}());



/***/ }),

/***/ "./src/app/services/common.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/common.service.ts ***!
  \********************************************/
/*! exports provided: CommonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommonService", function() { return CommonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _error_log_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./error-log.service */ "./src/app/services/error-log.service.ts");
/* harmony import */ var _shared_app_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/app.constants */ "./src/app/shared/app.constants.ts");







var CommonService = /** @class */ (function () {
    function CommonService(http, spinner, errorLogService) {
        this.http = http;
        this.spinner = spinner;
        this.errorLogService = errorLogService;
    }
    CommonService.prototype.getData = function (method) {
        return this.http.get(Object(_shared_app_constants__WEBPACK_IMPORTED_MODULE_6__["createUrl"])(method))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError.bind(this)));
    };
    CommonService.prototype.addData = function (method, data) {
        var _this = this;
        this.spinner.show();
        return this.http.post(Object(_shared_app_constants__WEBPACK_IMPORTED_MODULE_6__["createUrl"])(method), data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            _this.spinner.hide();
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError.bind(this)));
    };
    CommonService.prototype.updateData = function (method, data) {
        var _this = this;
        this.spinner.show();
        return this.http.post(Object(_shared_app_constants__WEBPACK_IMPORTED_MODULE_6__["createUrl"])(method), data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            _this.spinner.hide();
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError.bind(this)));
    };
    CommonService.prototype.deleteData = function (method) {
        return this.http.delete(Object(_shared_app_constants__WEBPACK_IMPORTED_MODULE_6__["createUrl"])(method))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError.bind(this)));
    };
    CommonService.prototype.handleError = function (error) {
        this.spinner.hide();
        this.errorLogService.handleError(error);
    };
    CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"],
            _error_log_service__WEBPACK_IMPORTED_MODULE_5__["ErrorLogService"]])
    ], CommonService);
    return CommonService;
}());



/***/ }),

/***/ "./src/app/services/error-log.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/error-log.service.ts ***!
  \***********************************************/
/*! exports provided: ErrorLogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorLogService", function() { return ErrorLogService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_app_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/app.constants */ "./src/app/shared/app.constants.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng6-toastr-notifications */ "./node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");





var ErrorLogService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ErrorLogService, _super);
    function ErrorLogService(toastr) {
        var _this = _super.call(this) || this;
        _this.toastr = toastr;
        return _this;
    }
    // handleError(error): void {
    //   this.errorLogService.logError(error);
    // }
    ErrorLogService.prototype.handleError = function (error) {
        if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpErrorResponse"]) {
            if (typeof error.error.message !== 'undefined') {
                this.toastr.errorToastr(error.error.message);
            }
            else if (typeof error.message !== 'undefined') {
                if (error.status === 404) {
                    this.toastr.errorToastr('404: ' + _shared_app_constants__WEBPACK_IMPORTED_MODULE_3__["errorMessage"].pageNotFound);
                }
                else if (error.status === 500) {
                    this.toastr.errorToastr('500: ' + _shared_app_constants__WEBPACK_IMPORTED_MODULE_3__["errorMessage"].internalServerError);
                }
                else if (error.status === 403) {
                    this.toastr.errorToastr('403: ' + _shared_app_constants__WEBPACK_IMPORTED_MODULE_3__["errorMessage"].forbidden);
                }
                else if (error.status === 0) {
                    this.toastr.errorToastr('0: ' + _shared_app_constants__WEBPACK_IMPORTED_MODULE_3__["errorMessage"].unknownError);
                }
                else {
                    this.toastr.errorToastr(error.message);
                }
            }
            else if (typeof error.status !== 'undefined') {
                this.toastr.errorToastr(error.status.toString());
            }
            else {
                this.toastr.errorToastr(_shared_app_constants__WEBPACK_IMPORTED_MODULE_3__["errorMessage"].httpError);
            }
            // console.error(date, AppConstants.httpError, error.message, 'Status code:',
            // (<HttpErrorResponse>error).status);
        }
        else if (error instanceof TypeError) {
            if (typeof error.message !== 'undefined') {
                this.toastr.errorToastr(error.message);
            }
            else {
                this.toastr.errorToastr(_shared_app_constants__WEBPACK_IMPORTED_MODULE_3__["errorMessage"].typeError);
            }
            // console.error(date, AppConstants.typeError, error.message, error.stack);
        }
        else if (error instanceof Error) {
            if (typeof error.message !== 'undefined') {
                this.toastr.errorToastr(error.message);
            }
            else {
                this.toastr.errorToastr(_shared_app_constants__WEBPACK_IMPORTED_MODULE_3__["errorMessage"].generalError);
            }
            // console.error(date, AppConstants.generalError, error.message, error.stack);
        }
        else if (error instanceof ErrorEvent) {
            if (typeof error.message !== 'undefined') {
                this.toastr.errorToastr(error.message);
            }
            else {
                this.toastr.errorToastr(_shared_app_constants__WEBPACK_IMPORTED_MODULE_3__["errorMessage"].generalError);
            }
            //A client-side or network error occurred. Handle it accordingly.
            // console.error(date, AppConstants.generalError, error.message);
        }
        else {
            if (typeof error !== 'undefined') {
                this.toastr.errorToastr(error);
            }
            else {
                this.toastr.errorToastr(_shared_app_constants__WEBPACK_IMPORTED_MODULE_3__["errorMessage"].somethingWrong);
            }
            // console.error(date, AppConstants.somethingHappened, error.message, error.stack);
        }
    };
    ErrorLogService.prototype.handleSuccess = function (message) {
        this.toastr.successToastr(message);
    };
    ErrorLogService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"]])
    ], ErrorLogService);
    return ErrorLogService;
}(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ErrorHandler"]));



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _error_log_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error-log.service */ "./src/app/services/error-log.service.ts");
/* harmony import */ var _shared_app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/app.constants */ "./src/app/shared/app.constants.ts");






var UserService = /** @class */ (function () {
    function UserService(http, router, errorLogService) {
        this.http = http;
        this.router = router;
        this.errorLogService = errorLogService;
        this.loggedInStatus = JSON.parse(localStorage.getItem('loggedIn') || 'false');
    }
    UserService.prototype.login = function (data) {
        var _this = this;
        // let input = new FormData();
        // for (var key in data) {
        //   if (typeof data[key] == 'object') {
        //     var details = JSON.stringify(data[key]);
        //     input.append(key, details);
        //   } else {
        //     input.append(key, data[key]);
        //   }
        // }
        return this.http.post(_shared_app_constants__WEBPACK_IMPORTED_MODULE_5__["appApi"].login, data).subscribe(function (result) {
            if (result.status) {
                localStorage.setItem('loggedIn', 'true');
                // localStorage.setItem('login_token', result.data.login_token);
                localStorage.setItem('user_id', result.data._id);
                // localStorage.setItem('role_id', result.data.role_id);
                // localStorage.setItem('device_id', '192.168.0.114');
                localStorage.setItem('fullname', result.data.firstname + ' ' + result.data.lastname);
                _this.errorLogService.handleSuccess(result.message);
                _this.router.navigate(['/']);
            }
            else {
                _this.errorLogService.handleError(result.message);
            }
        }, function (error) { return _this.handleError(error); });
    };
    Object.defineProperty(UserService.prototype, "isLoggedIn", {
        get: function () {
            return JSON.parse(localStorage.getItem('loggedIn') || this.loggedInStatus.toString());
        },
        enumerable: true,
        configurable: true
    });
    UserService.prototype.logout = function () {
        var _this = this;
        return this.http.post(_shared_app_constants__WEBPACK_IMPORTED_MODULE_5__["appApi"].logout, {}).subscribe(function (result) {
            if (result.status) {
                localStorage.setItem('loggedIn', 'false');
                // localStorage.setItem('login_token', 'false');
                localStorage.setItem('user_id', 'false');
                // localStorage.setItem('role_id', 'false');
                // localStorage.setItem('device_id', 'false');
                localStorage.setItem('fullname', 'false');
                _this.router.navigate(['/login']);
            }
            else {
                _this.errorLogService.handleError(result.message);
            }
        }, function (error) { return _this.handleError(error); });
    };
    UserService.prototype.forgotPassword = function (data) {
        var _this = this;
        return this.http.post('auth/forgot_password', data).subscribe(function (result) {
            if (result.status) {
                _this.errorLogService.handleSuccess(result.message);
                _this.router.navigate(['/login']);
            }
            else {
                _this.errorLogService.handleError(result.message);
            }
        }, function (error) { return _this.handleError(error); });
    };
    UserService.prototype.changePassword = function (data) {
        var _this = this;
        return this.http.post('auth/change_password', data).subscribe(function (result) {
            if (result.status) {
                _this.errorLogService.handleSuccess(result.message);
                _this.router.navigate(['/']);
            }
            else {
                _this.errorLogService.handleError(result.message);
            }
        }, function (error) { return _this.handleError(error); });
    };
    UserService.prototype.roleCheck = function (role_id) {
        var isMatch = false;
        var userRole = JSON.parse(localStorage.getItem('role_id'));
        role_id.forEach(function (element) {
            if (userRole.toString().indexOf(element) > -1) {
                // console.log(userRole.toString().indexOf(element));
                isMatch = true;
                return false;
            }
        });
        return isMatch;
    };
    UserService.prototype.handleError = function (error) {
        this.errorLogService.handleError(error);
    };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _error_log_service__WEBPACK_IMPORTED_MODULE_4__["ErrorLogService"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/shared/app.constants.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/app.constants.ts ***!
  \*****************************************/
/*! exports provided: roleNames, createUrl, appApi, appVariables, errorMessage, AppConstants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roleNames", function() { return roleNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUrl", function() { return createUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appApi", function() { return appApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appVariables", function() { return appVariables; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorMessage", function() { return errorMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConstants", function() { return AppConstants; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");

var roleNames = {
    superAdmin: 'SuperAdmin',
    admin: 'Admin',
    manager: 'Manager',
    client: 'Client',
};
function createUrl(actionName) {
    return "" + _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiHost + actionName;
}
var appApi = {
    baseUrl: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiHost,
    staticUploadsPath: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiHost + "Uploads/",
    login: createUrl('api/users/login'),
    logout: createUrl('api/users/logout')
};
var appVariables = {
    accessToken: 'X-Auth-Token',
    contentType: 'application/json',
    resourceActions: {
        getActionName: 'Read',
        addActionName: 'Create',
        updateActionName: 'Update',
        deleteActionName: 'Delete',
    }
};
var errorMessage = {
    pageNotFound: 'Page not found',
    forbidden: 'Forbidden',
    internalServerError: 'Internal Server error',
    unknownError: 'Unknown Error (Response not get)',
    httpError: 'There was an HTTP error.',
    typeError: 'There was a Type error.',
    generalError: 'There was a general error.',
    somethingWrong: 'Nobody threw an Error but something wrong!'
};
var AppConstants = /** @class */ (function () {
    function AppConstants() {
    }
    return AppConstants;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _components_validation_validation_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/validation/validation.component */ "./src/app/components/validation/validation.component.ts");









var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["DragDropModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerModule"]
            ],
            declarations: [
                _components_validation_validation_component__WEBPACK_IMPORTED_MODULE_8__["ValidationComponent"]
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["DragDropModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerModule"],
                _components_validation_validation_component__WEBPACK_IMPORTED_MODULE_8__["ValidationComponent"]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/shared/validation.service.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/validation.service.ts ***!
  \**********************************************/
/*! exports provided: ValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationService", function() { return ValidationService; });
var ValidationService = /** @class */ (function () {
    function ValidationService() {
    }
    ValidationService.getValidatorErrorMessage = function (code, validatorValue) {
        var config = {
            'required': "This field is required",
            'invalidCreditCard': 'Is invalid credit card number',
            'invalidEmailAddress': 'Invalid email address',
            'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
            'minlength': "Minimum length " + validatorValue.requiredLength
        };
        return config[code];
    };
    ValidationService.creditCardValidator = function (control) {
        // Visa, MasterCard, American Express, Diners Club, Discover, JCB
        if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
            return null;
        }
        else {
            return { 'invalidCreditCard': true };
        }
    };
    ValidationService.emailValidator = function (control) {
        // RFC 2822 compliant regex
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        }
        else {
            return { 'invalidEmailAddress': true };
        }
    };
    ValidationService.passwordValidator = function (control) {
        // {6,100}           - Assert password is between 6 and 100 characters
        // (?=.*[0-9])       - Assert a string has at least one number
        if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
            return null;
        }
        else {
            return { 'invalidPassword': true };
        }
    };
    return ValidationService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiHost: '/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! Z:\planx\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map