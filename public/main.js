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
/* harmony import */ var _components_study_study_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/study/study.component */ "./src/app/components/study/study.component.ts");
/* harmony import */ var _components_report_report_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/report/report.component */ "./src/app/components/report/report.component.ts");
/* harmony import */ var _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/page-not-found/page-not-found.component */ "./src/app/components/page-not-found/page-not-found.component.ts");









var routes = [
    { path: 'page-not-found', component: _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"] },
    { path: '', component: _components_study_study_component__WEBPACK_IMPORTED_MODULE_6__["StudyComponent"] },
    { path: 'dashboard', component: _components_study_study_component__WEBPACK_IMPORTED_MODULE_6__["StudyComponent"] },
    { path: 'report/:id', component: _components_report_report_component__WEBPACK_IMPORTED_MODULE_7__["ReportComponent"] },
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
                _components_study_study_component__WEBPACK_IMPORTED_MODULE_6__["StudyComponent"],
                _components_report_report_component__WEBPACK_IMPORTED_MODULE_7__["ReportComponent"],
                _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"]
            ],
            declarations: [
                _components_layout_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _components_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"],
                _components_study_study_component__WEBPACK_IMPORTED_MODULE_6__["StudyComponent"],
                _components_report_report_component__WEBPACK_IMPORTED_MODULE_7__["ReportComponent"],
                _components_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_8__["PageNotFoundComponent"]
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
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");




var AppComponent = /** @class */ (function () {
    // showHead: boolean = false;
    // isLoggedIn$: Observable<boolean>;  
    function AppComponent(router, userService) {
        // this.showHead = this.userService.isLoggedIn;
        // on route change to '/login', set the variable showHead to false
        var _this = this;
        this.router = router;
        this.userService = userService;
        this.title = 'school';
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
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]])
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
    FooterComponent.prototype.ngOnInit = function () {
    };
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

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-red fixed-top\">\r\n  <a class=\"navbar-brand text-white\" routerLink=\"/\">Project Name</a>\r\n  <!-- <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" (click)=\"onLogout()\">Logout</a>\r\n      </li>\r\n    </ul>\r\n  </div> -->\r\n</nav>"

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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent(titleService) {
        this.titleService = titleService;
        this.title = "Page not found";
        this.titleService.setTitle('Page not found');
    }
    PageNotFoundComponent.prototype.ngOnInit = function () { };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/components/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/components/page-not-found/page-not-found.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
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

module.exports = "<div class=\"jumbotron\">\n  <div class=\"container\">\n    <div class=\"wrapper\">\n      <div class=\"report-header\">\n        <div class=\"row\">\n          <div class=\"col-lg-8 col-md-8 col-sm-8\">\n            <h6 class=\"m-0\">Patient: {{PatientName}}</h6>\n            <small>Study : {{Study}} ({{StudyDate}})</small>\n          </div>\n          <div class=\"col-lg-4 col-md-4 col-sm-4\">\n            <div class=\"text-right\">\n              <button type=\"button\" class=\"btn btn-sm bg-grey txt-white\" (click)=\"previewToggle()\"\n                style=\"margin: 0px 10px\">{{previewButton}}</button>\n              <a routerLink=\"/\" class=\"btn btn-sm bg-red txt-white float-right\">Report List</a>\n            </div>\n          </div>\n        </div>\n        <hr />\n      </div>\n      <div class=\"report-body\" *ngIf=\"!preview\">\n        <div class=\"card\">\n          <div class=\"row\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12\">\n              <div class=\"form-group\">\n                <label>Report title</label>\n                <input class=\"form-control text-center\" type=\"text\" value=\"Report Title\">\n                <h6 class=\"text-center\"><small>{{currentDate | date:'longDate'}}</small></h6>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12\">\n              <label>Report basic info</label>\n              <fieldset>\n                <!-- <legend>Report basic info</legend> -->\n                <div class=\"info-button text-right\">\n                  <button type=\"button\" class=\"btn btn-sm bg-grey txt-white\"\n                    (click)=\"editToggle()\">{{buttonName}}</button>\n                </div>\n                <hr />\n                <div class=\"info-list\" *ngIf=\"!show\">\n                  <div class=\"row\">\n                    <div class=\"col-lg-6 col-md-6 col-sm-6\" *ngFor=\"let detail of patientDetails | keyvalue\">\n                      <b>{{detail.value.key}} : </b><span>{{detail.value.value}}</span>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"info-edit\" *ngIf=\"show\">\n                  <form [formGroup]=\"reportForm\" (ngSubmit)=\"patientDetailsSubmit()\">\n                    <input type=\"hidden\" formControlName=\"_id\">\n                    <ul class=\"patient-details\" cdkDropList (cdkDropListDropped)=\"dropPatientDetails($event)\">\n                      <li class=\"patient-form-box\" formArrayName=\"PatientDetails\"\n                        *ngFor=\"let field of reportForm.get('PatientDetails')['controls']; let i = index\" cdkDrag>\n                        <div class=\"form-group\" [formGroupName]=\"i\">\n                          <label><input class=\"form-control form-control-sm\" formControlName=\"key\"\n                              placeholder=\"Write title...\" (blur)=\"patientDetailsSubmit()\"></label>\n                          <button type=\"button\" class=\"btn btn-sm bg-red txt-white float-right\"\n                            (click)=\"removeField(i)\"><i class=\"fa fa-close\"></i></button>\n                          <input class=\"form-control\" type=\"text\" formControlName=\"value\"\n                            (blur)=\"patientDetailsSubmit()\">\n                        </div>\n                      </li>\n                    </ul>\n                    <div class=\"row\">\n                      <div class=\"col-lg-6 col-md-6 col-sm-6\">\n                        <!-- <div class=\"form-group\">\n                          <button type=\"submit\" class=\"btn btn-sm bg-red txt-white\">Save</button>\n                        </div> -->\n                      </div>\n                      <div class=\"col-lg-6 col-md-6 col-sm-6\">\n                        <div class=\"form-group text-right\">\n                          <button type=\"button\" class=\"btn btn-success btn-sm\" (click)=\"addField()\"><i\n                              class=\"fa fa-plus-circle\"></i> Add\n                            field</button>\n                        </div>\n                      </div>\n                    </div>\n                  </form>\n                </div>\n              </fieldset>\n            </div>\n          </div>\n          <form [formGroup]=\"reportForm\">\n            <div cdkDropList (cdkDropListDropped)=\"dropReportDetails($event)\">\n              <div class=\"row report-form-box\" formArrayName=\"ReportDetails\"\n                *ngFor=\"let field of reportForm.get('ReportDetails')['controls']; let i = index\" cdkDrag>\n                <div class=\"col-lg-12 col-md-12 col-sm-12\">\n                  <div class=\"form-group\" [formGroupName]=\"i\">\n                    <label><input type=\"text\" class=\"form-control form-control-sm\" formControlName=\"key\"\n                        (blur)=\"reportDetailsSubmit()\" placeholder=\"Write title...\" /></label>\n                    <button type=\"button\" class=\"btn btn-sm bg-red txt-white float-right\" (click)=\"removeDetails(i)\"><i\n                        class=\"fa fa-close\"></i></button>\n                    <span class=\"drag-icon float-right\"><i class=\"fa fa-arrows-alt\"></i> Drag to\n                      reorder</span>\n                    <textarea class=\"form-control\" formControlName=\"value\" (blur)=\"reportDetailsSubmit()\"></textarea>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"row\">\n              <div class=\"col-lg-12 col-md-12 col-sm-12\">\n                <div class=\"form-group text-right\">\n                  <button type=\"button\" class=\"btn btn-success btn-sm\" (click)=\"addDetails()\"><i\n                      class=\"fa fa-plus-circle\"></i> Add\n                    field</button>\n                </div>\n              </div>\n            </div>\n          </form>\n        </div>\n      </div>\n      <div class=\"report-body\" *ngIf=\"preview\">\n        <div class=\"card\">\n          <div class=\"row\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12\">\n              <div class=\"form-group\">\n                <h5 class=\"text-center\"><b>Report Title</b></h5>\n                <h6 class=\"text-center\"><small>February 14, 2019</small></h6>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12\">\n              <fieldset>\n                <div class=\"info-list\">\n                  <div class=\"row\">\n                    <div class=\"col-lg-6 col-md-6 col-sm-6\" *ngFor=\"let detail of patientDetails | keyvalue\">\n                      <b>{{detail.value.key}} : </b><span>{{detail.value.value}}</span>\n                    </div>\n                  </div>\n                </div>\n              </fieldset>\n            </div>\n          </div>\n          <div class=\"row\" *ngFor=\"let detail of reportDetails | keyvalue\">\n            <div class=\"col-lg-12 col-md-12 col-sm-12\">\n              <div class=\"form-group\">\n                <b>{{detail.value.key}} : </b>\n                <p>{{detail.value.value}}</p>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"report-footer\">\n        <hr />\n        <div class=\"row\">\n          <div class=\"col-lg-6 col-md-6 col-sm-6\">\n            <a routerLink=\"/\" class=\"btn btn-sm bg-red txt-white\">Report List</a>\n          </div>\n          <div class=\"col-lg-6 col-md-6 col-sm-6\">\n            <div class=\"text-right\">\n              <button type=\"button\" class=\"btn btn-sm bg-grey txt-white\" (click)=\"previewToggle()\"\n                style=\"margin: 0px 10px\">{{previewButton}}</button>\n              <a routerLink=\"/\" class=\"btn btn-sm btn-success\">Finish report</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_error_log_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/error-log.service */ "./src/app/services/error-log.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var ReportComponent = /** @class */ (function () {
    function ReportComponent(titleService, commonService, errorLogService, route, router, formBuilder) {
        this.titleService = titleService;
        this.commonService = commonService;
        this.errorLogService = errorLogService;
        this.route = route;
        this.router = router;
        this.formBuilder = formBuilder;
        this.title = 'Report';
        this.currentDate = new Date();
        this.preview = false;
        this.previewButton = 'Preview';
        this.show = false;
        this.buttonName = 'Edit';
        this.titleService.setTitle('Report');
    }
    ReportComponent.prototype.ngOnInit = function () {
        this.PatientID = this.route.snapshot.paramMap.get("id");
        this.reportForm = this.formBuilder.group({
            _id: [this.PatientID],
            PatientDetails: this.formBuilder.array([]),
            ReportDetails: this.formBuilder.array([])
        });
        this.index();
    };
    ReportComponent.prototype.index = function () {
        var _this = this;
        this.commonService.getData('study/' + this.PatientID).subscribe(function (response) {
            if (response.status) {
                _this.PatientDetails = Object.keys(response.data.PatientDetails).map(function (key) { return ({ objectkey: key, value: response.data.PatientDetails[key].value, key: response.data.PatientDetails[key].key }); });
                _this.PatientDetails.forEach(function (object) {
                    if (object.objectkey === 'PatientName') {
                        _this.PatientName = object.value;
                    }
                    if (object.objectkey === 'StudyDescription') {
                        _this.Study = object.value;
                    }
                    if (object.objectkey === 'StudyDate') {
                        _this.StudyDate = object.value;
                    }
                    _this.reportForm.get('PatientDetails').push(_this.formBuilder.group({
                        key: [object.key],
                        value: [object.value]
                    }));
                    // this.reportForm.addControl(object.key, this.formBuilder.control(object.value, Validators.required));
                });
                _this.patientDetails = response.data.PatientDetails;
                // console.log(this.patientDetails);
                if (response.data.ReportDetails !== undefined) {
                    _this.ReportDetails = Object.keys(response.data.ReportDetails).map(function (key) { return ({ objectkey: key, value: response.data.ReportDetails[key].value, key: response.data.ReportDetails[key].key }); });
                    _this.ReportDetails.forEach(function (object) {
                        _this.reportForm.get('ReportDetails').push(_this.formBuilder.group({
                            key: [object.key],
                            value: [object.value]
                        }));
                    });
                    _this.reportDetails = response.data.ReportDetails;
                }
            }
            else {
                _this.errorLogService.handleError(response.message);
                _this.router.navigate(['/']);
            }
        }, function (error) { return _this.errorLogService.handleError(error); });
    };
    ReportComponent.prototype.patientDetailsSubmit = function () {
        var _this = this;
        // var PatientDetails = {};
        // this.allDetails.forEach(object => {
        //   PatientDetails[object.objectkey] = { 'key': object.key, 'value': this.reportForm.controls[object.objectkey].value };
        // });
        // var NewField = this.reportForm.get('NewField').value;
        // var ExtraPatientDetails = {};
        // NewField.forEach(object => {
        //   ExtraPatientDetails[object.key.replace(" ", "")] = { 'key': object.key, 'value': object.value };
        // });
        // const AllDetails = Object.assign({}, PatientDetails, ExtraPatientDetails);
        var PatientDetailsValue = this.reportForm.get('PatientDetails').value;
        var ExtraPatientDetails = {};
        PatientDetailsValue.forEach(function (object) {
            if (object.key && object.value) {
                ExtraPatientDetails[object.key.replace(" ", "")] = { 'key': object.key, 'value': object.value };
            }
        });
        this.commonService.updateData('study/edit/' + this.reportForm.controls['_id'].value, { 'PatientDetails': ExtraPatientDetails }).subscribe(function (response) {
            if (response.status) {
                _this.errorLogService.handleSuccess(response.message);
                // this.router.navigate(['/']);
            }
            else {
                _this.errorLogService.handleError(response.message);
            }
        }, function (error) { return _this.errorLogService.handleError(error); });
    };
    ReportComponent.prototype.reportDetailsSubmit = function () {
        var _this = this;
        var ReportDetailsValue = this.reportForm.get('ReportDetails').value;
        var ExtraPatientDetails = {};
        ReportDetailsValue.forEach(function (object) {
            if (object.key && object.value) {
                ExtraPatientDetails[object.key.replace(" ", "")] = { 'key': object.key, 'value': object.value };
            }
        });
        this.commonService.updateData('study/edit-report/' + this.reportForm.controls['_id'].value, { 'ReportDetails': ReportDetailsValue }).subscribe(function (response) {
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
        var arrayControl = this.reportForm.get('PatientDetails');
        arrayControl.push(this.formBuilder.group({
            key: [''],
            value: ['']
        }));
    };
    ReportComponent.prototype.removeField = function (index) {
        var arrayControl = this.reportForm.get('PatientDetails');
        arrayControl.removeAt(index);
        this.patientDetailsSubmit();
    };
    ReportComponent.prototype.addDetails = function () {
        var arrayControl = this.reportForm.get('ReportDetails');
        arrayControl.push(this.formBuilder.group({
            key: [''],
            value: ['']
        }));
    };
    ReportComponent.prototype.removeDetails = function (index) {
        var arrayControl = this.reportForm.get('ReportDetails');
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
    ReportComponent.prototype.dropPatientDetails = function (event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["moveItemInArray"])(this.reportForm.get('PatientDetails')['controls'], event.previousIndex, event.currentIndex);
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["moveItemInArray"])(this.reportForm.get('PatientDetails').value, event.previousIndex, event.currentIndex);
        this.patientDetailsSubmit();
    };
    ReportComponent.prototype.dropReportDetails = function (event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["moveItemInArray"])(this.reportForm.get('ReportDetails')['controls'], event.previousIndex, event.currentIndex);
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["moveItemInArray"])(this.reportForm.get('ReportDetails').value, event.previousIndex, event.currentIndex);
        this.reportDetailsSubmit();
    };
    ReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-report',
            template: __webpack_require__(/*! ./report.component.html */ "./src/app/components/report/report.component.html"),
            styles: [__webpack_require__(/*! ./report.component.css */ "./src/app/components/report/report.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
            _services_error_log_service__WEBPACK_IMPORTED_MODULE_6__["ErrorLogService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], ReportComponent);
    return ReportComponent;
}());



/***/ }),

/***/ "./src/app/components/study/study.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/study/study.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n    margin: 15px 0px;\r\n}\r\n/* table {\r\n  width: 100%;\r\n} */\r\n.table th,.table td {\r\n  white-space: nowrap;\r\n  font-size:12px;\r\n}\r\ntr.example-detail-row {\r\n  height: 0;\r\n}\r\ntr.example-element-row:not(.example-expanded-row):hover {\r\n  background: #f5f5f5;\r\n}\r\ntr.example-element-row:not(.example-expanded-row):active {\r\n  background: #efefef;\r\n}\r\n.example-element-row td {\r\n  border-bottom-width: 0;\r\n}\r\n.example-element-detail {\r\n  overflow: hidden;\r\n  display: flex;\r\n}\r\n.example-element-diagram {\r\n  min-width: 80px;\r\n  border: 2px solid black;\r\n  padding: 8px;\r\n  font-weight: lighter;\r\n  margin: 8px 0;\r\n  height: 104px;\r\n}\r\n.example-element-symbol {\r\n  font-weight: bold;\r\n  font-size: 40px;\r\n  line-height: normal;\r\n}\r\n.example-element-description {\r\n  padding: 16px;\r\n}\r\n.example-element-description-attribution {\r\n  opacity: 0.5;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdHVkeS9zdHVkeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0FBQ3BCO0FBQ0E7O0dBRUc7QUFFSDtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCO0FBRUE7RUFDRSxTQUFTO0FBQ1g7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7QUFFQTtFQUNFLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixhQUFhO0VBQ2IsYUFBYTtBQUNmO0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3N0dWR5L3N0dWR5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgICBtYXJnaW46IDE1cHggMHB4O1xyXG59XHJcbi8qIHRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxufSAqL1xyXG5cclxuLnRhYmxlIHRoLC50YWJsZSB0ZCB7XHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBmb250LXNpemU6MTJweDtcclxufVxyXG5cclxudHIuZXhhbXBsZS1kZXRhaWwtcm93IHtcclxuICBoZWlnaHQ6IDA7XHJcbn1cclxuXHJcbnRyLmV4YW1wbGUtZWxlbWVudC1yb3c6bm90KC5leGFtcGxlLWV4cGFuZGVkLXJvdyk6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbn1cclxuXHJcbnRyLmV4YW1wbGUtZWxlbWVudC1yb3c6bm90KC5leGFtcGxlLWV4cGFuZGVkLXJvdyk6YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kOiAjZWZlZmVmO1xyXG59XHJcblxyXG4uZXhhbXBsZS1lbGVtZW50LXJvdyB0ZCB7XHJcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcclxufVxyXG5cclxuLmV4YW1wbGUtZWxlbWVudC1kZXRhaWwge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmV4YW1wbGUtZWxlbWVudC1kaWFncmFtIHtcclxuICBtaW4td2lkdGg6IDgwcHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgaGVpZ2h0OiAxMDRweDtcclxufVxyXG5cclxuLmV4YW1wbGUtZWxlbWVudC1zeW1ib2wge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4uZXhhbXBsZS1lbGVtZW50LWRlc2NyaXB0aW9uIHtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcblxyXG4uZXhhbXBsZS1lbGVtZW50LWRlc2NyaXB0aW9uLWF0dHJpYnV0aW9uIHtcclxuICBvcGFjaXR5OiAwLjU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/study/study.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/study/study.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n  <div class=\"container\">\n    <div class=\"wrapper\">\n      <div class=\"row\">\n        <div class=\"col-lg-6 col-md-6 col-sm-6\">\n          <h5 class=\"m-0\">Your reports</h5>\n        </div>\n        <div class=\"col-lg-6 col-md-6 col-sm-6\">\n          <p class=\"text-right m-0\">{{count}} reports found</p>\n        </div>\n      </div>\n      <hr />\n      <div class=\"row\">\n        <div class=\"col-lg-6 col-md-6 col-sm-6\">\n          <input type=\"search\" placeholder=\"Search\" class=\"form-control\">\n        </div>\n        <div class=\"col-lg-6 col-md-6 col-sm-6\">\n          <button class=\"btn bg-red txt-white float-right\" data-toggle=\"modal\" data-target=\"#studyModal\">Add\n            Study</button>\n        </div>\n      </div>\n      <hr />\n      <div class=\"row\">\n        <div class=\"col-lg-12 col-md-12 col-sm-12\">\n          <!-- <table mat-table [dataSource]=\"dataSource\" multiTemplateDataRows class=\"mat-elevation-z8\">\n            <ng-container matColumnDef=\"{{column}}\" *ngFor=\"let column of columnsToDisplay\">\n              <th mat-header-cell *matHeaderCellDef> {{column}} </th>\n              <td mat-cell *matCellDef=\"let element\"> {{element[column]}} </td>\n            </ng-container>\n\n            <ng-container matColumnDef=\"expandedDetail\">\n              <td mat-cell *matCellDef=\"let element\" [attr.colspan]=\"columnsToDisplay.length\">\n                <div class=\"example-element-detail\"\n                  [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\n                  <div class=\"example-element-diagram\">\n                    <div class=\"example-element-position\"> {{element.position}} </div>\n                    <div class=\"example-element-symbol\"> {{element.symbol}} </div>\n                    <div class=\"example-element-name\"> {{element.name}} </div>\n                    <div class=\"example-element-weight\"> {{element.weight}} </div>\n                  </div>\n                  <div class=\"example-element-description\">\n                    {{element.description}}\n                    <span class=\"example-element-description-attribution\"> -- Wikipedia </span>\n                  </div>\n                </div>\n              </td>\n            </ng-container>\n\n            <tr mat-header-row *matHeaderRowDef=\"columnsToDisplay\"></tr>\n            <tr mat-row *matRowDef=\"let element; columns: columnsToDisplay;\" class=\"example-element-row\"\n              [class.example-expanded-row]=\"expandedElement === element\"\n              (click)=\"expandedElement = expandedElement === element ? null : element\">\n            </tr>\n            <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\n          </table> -->\n\n          <div class=\"table-responsive\">\n            <table class=\"table table-bordered table-hover\">\n              <thead class=\"thead-dark\">\n                <tr *ngFor=\"let report of columns | keyvalue\">\n                  <th *ngFor=\"let row of report.value\">{{row.data}}</th>\n                  <th *ngFor=\"let row of report.value.Files[0] | keyvalue\">{{row.value.key}}</th>\n                  <th>Action</th>\n                </tr>\n              </thead>\n              <tbody *ngFor=\"let report of reports | keyvalue\">\n                <tr class=\"clickable\" data-toggle=\"collapse\" [attr.id]=\"'row'+report.key\"\n                  [attr.data-target]=\"'.row-'+report.key\">\n                  <td *ngFor=\"let row of report.value\">{{row.value}}</td>\n                  <td *ngFor=\"let row of report.value.Files[0] | keyvalue\">{{row.value.value}}</td>\n                  <td> <a class=\"btn btn-sm bg-grey txt-white\" routerLink=\"/report/{{report.key}}\">Edit</a></td>\n                </tr>\n                <tr class=\"collapse table-active row-{{report.key}}\" *ngFor=\"let file of report.value.Files | keyvalue\">\n                  <td *ngFor=\"let row of report.value\"></td>\n                  <td *ngFor=\"let row of file.value | keyvalue\">{{row.value.value}}</td>\n                  <td></td>\n                </tr>\n              </tbody>\n              <!-- <tbody>\n                <tr *ngFor=\"let report of reports; let i=index\" class=\"clickable\" data-toggle=\"collapse\"\n                  [attr.id]=\"'row'+i\" [attr.data-target]=\"'.row-'+report._id\">\n                  <td>{{report.PatientID}}</td>\n                  <td>{{report.ExtraData.PatientName.value}}</td>\n                  <td>{{report.ExtraData.Gender.value}}</td>\n                  <td>{{report.ExtraData.Age.value}}</td>\n                  <td>-</td>\n                  <td>-</td>\n                  <td><a class=\"btn btn-primary\" routerLink=\"/report/{{report._id}}\">Edit</a></td>\n                </tr>\n                <tr class=\"collapse row-{{file.key}}\" *ngFor=\"let file of files | keyvalue; let i=index\">\n                  <div *ngFor=\"let rows of file.value | keyvalue\">\n                    <b>{{rows.value.Protocol.key}} : </b>{{rows.value.Protocol.value}} <br />\n                    <b>{{rows.value.StudyDescription.key}} : </b>{{rows.value.StudyDescription.value}} <br />\n                    <b>{{rows.value.Modality.key}} : </b>{{rows.value.Modality.value}} <br />\n                    <b>{{rows.value.Comments.key}} : </b>{{rows.value.Comments.value}} <br /><br />\n                  </div>\n                </tr>\n              </tbody> -->\n            </table>\n          </div>\n        </div>\n      </div>\n      <!-- <div class=\"row\">\n        <div class=\"col-lg-6 col-md-6 col-sm-6\" *ngFor=\"let report of reports\">\n          <div class=\"card\">\n            <div class=\"card-header\">\n              {{report.PatientID}}\n            </div>\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">{{report.ExtraData.PatientName.value}}</h5>\n              <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n              <a class=\"btn btn-primary\" routerLink=\"/report/{{report._id}}\">Edit</a>\n            </div>\n          </div>\n        </div>\n      </div> -->\n    </div>\n  </div>\n</div>\n<div class=\"modal fade\" id=\"studyModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"studyModalLabel\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Add {{title}}</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"form-group\">\n          <label>Upload folder</label>\n          <!-- <div class=\"custom-file\">\n  <input type=\"file\" class=\"custom-file-input\" id=\"customFileLang\" lang=\"es\">\n  <label class=\"custom-file-label\" for=\"customFileLang\">Seleccionar Archivo</label>\n</div> -->\n          <input class=\"form-control-file\" type=\"file\" #folderInput (change)=\"onSubmit(folderInput.files)\"\n            webkitDirectory>\n        </div>\n        <div class=\"form-group\">\n          <label>Upload file</label>\n          <input class=\"form-control-file\" type=\"file\" name=\"photo\" (change)=\"onSubmit($event.target.files)\" multiple />\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/study/study.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/study/study.component.ts ***!
  \*****************************************************/
/*! exports provided: StudyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudyComponent", function() { return StudyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/common.service */ "./src/app/services/common.service.ts");
/* harmony import */ var _services_error_log_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/error-log.service */ "./src/app/services/error-log.service.ts");







var StudyComponent = /** @class */ (function () {
    // columnsToDisplay = ['PatientID', 'Patient', 'Gender', 'Age', 'Study Description', 'Modality', 'Comments', 'Action'];
    function StudyComponent(titleService, commonService, errorLogService) {
        this.titleService = titleService;
        this.commonService = commonService;
        this.errorLogService = errorLogService;
        this.title = 'Study';
        this.reports = [];
        this.columns = [];
        this.count = [];
        this.fileToUpload = [];
        this.columnsToDisplay = ['PatientID', 'Action'];
        this.titleService.setTitle('Study');
    }
    StudyComponent.prototype.ngOnInit = function () {
        this.index();
    };
    StudyComponent.prototype.index = function () {
        var _this = this;
        this.commonService.getData('study').subscribe(function (response) {
            _this.count = response.data.length;
            if (response.status) {
                // this.dataSource = new MatTableDataSource(response.data);
                // this.dataSource.sort = this.sort;
                // this.dataSource.paginator = this.paginator;
                _this.columns[0] = Object.keys(response.data[0].PatientDetails).map(function (key) { return ({ key: key, value: response.data[0].PatientDetails[key].value, data: response.data[0].PatientDetails[key].key }); });
                _this.columns[0]['Files'] = Object.keys(response.data[0].FileDetails).map(function (key) { return (response.data[0].FileDetails[key]); });
                response.data.forEach(function (element) {
                    _this.reports[element._id] = Object.keys(element.PatientDetails).map(function (key) { return ({ key: key, value: element.PatientDetails[key].value, data: element.PatientDetails[key].key }); });
                    _this.reports[element._id]['Files'] = Object.keys(element.FileDetails).map(function (key) { return (element.FileDetails[key]); });
                });
                // this.reports = response.data;
                // response.data.forEach(element => {
                //   this.files[element._id] = element.Files;
                // })
            }
        }, function (error) { return _this.errorLogService.handleError(error); });
    };
    StudyComponent.prototype.onSubmit = function (files) {
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
                _this.index();
                _this.errorLogService.handleSuccess(response.message);
            }
            else {
                _this.errorLogService.handleError(response.message);
            }
        }, function (error) { return _this.errorLogService.handleError(error); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], StudyComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSort"])
    ], StudyComponent.prototype, "sort", void 0);
    StudyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-study',
            template: __webpack_require__(/*! ./study.component.html */ "./src/app/components/study/study.component.html"),
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('detailExpand', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ height: '0px', minHeight: '0', display: 'none' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ height: '*' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                ]),
            ],
            styles: [__webpack_require__(/*! ./study.component.css */ "./src/app/components/study/study.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"],
            _services_common_service__WEBPACK_IMPORTED_MODULE_5__["CommonService"],
            _services_error_log_service__WEBPACK_IMPORTED_MODULE_6__["ErrorLogService"]])
    ], StudyComponent);
    return StudyComponent;
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
/* harmony import */ var _error_log_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./error-log.service */ "./src/app/services/error-log.service.ts");
/* harmony import */ var _shared_app_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/app.constants */ "./src/app/shared/app.constants.ts");






var CommonService = /** @class */ (function () {
    function CommonService(http, errorLogService) {
        this.http = http;
        this.errorLogService = errorLogService;
    }
    CommonService.prototype.getData = function (method) {
        return this.http.get(Object(_shared_app_constants__WEBPACK_IMPORTED_MODULE_5__["createUrl"])(method))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError.bind(this)));
    };
    CommonService.prototype.addData = function (method, data) {
        return this.http.post(Object(_shared_app_constants__WEBPACK_IMPORTED_MODULE_5__["createUrl"])(method), data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError.bind(this)));
    };
    CommonService.prototype.updateData = function (method, data) {
        return this.http.put(Object(_shared_app_constants__WEBPACK_IMPORTED_MODULE_5__["createUrl"])(method), data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return response;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError.bind(this)));
    };
    CommonService.prototype.deleteData = function (method) {
        return this.http.delete(Object(_shared_app_constants__WEBPACK_IMPORTED_MODULE_5__["createUrl"])(method))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError.bind(this)));
    };
    CommonService.prototype.handleError = function (error) {
        this.errorLogService.handleError(error);
    };
    CommonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _error_log_service__WEBPACK_IMPORTED_MODULE_4__["ErrorLogService"]])
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
/* harmony import */ var _components_validation_validation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/validation/validation.component */ "./src/app/components/validation/validation.component.ts");








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
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["DragDropModule"]
            ],
            declarations: [
                _components_validation_validation_component__WEBPACK_IMPORTED_MODULE_7__["ValidationComponent"]
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSortModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["DragDropModule"],
                _components_validation_validation_component__WEBPACK_IMPORTED_MODULE_7__["ValidationComponent"]
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
    // apiHost: 'http://localhost:3000/'
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