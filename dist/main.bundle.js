webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/another-page/another-page.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/another-page/another-page.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  another-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/another-page/another-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnotherPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnotherPageComponent = /** @class */ (function () {
    function AnotherPageComponent() {
    }
    AnotherPageComponent.prototype.ngOnInit = function () {
    };
    AnotherPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-another-page',
            template: __webpack_require__("./src/app/another-page/another-page.component.html"),
            styles: [__webpack_require__("./src/app/another-page/another-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AnotherPageComponent);
    return AnotherPageComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__another_page_another_page_component__ = __webpack_require__("./src/app/another-page/another-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dynamic_form_dynamic_form_component__ = __webpack_require__("./src/app/dynamic-form/dynamic-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    //{ path: 'hero/:id',      component: HeroDetailComponent },
    //{
    //  path: 'heroes',
    //  component: HeroListComponent,
    //  data: { title: 'Heroes List' }
    //},
    //{ path: '',
    //  redirectTo: '/heroes',
    //  pathMatch: 'full'
    //},
    { path: 'another', component: __WEBPACK_IMPORTED_MODULE_0__another_page_another_page_component__["a" /* AnotherPageComponent */] },
    { path: 'dynamic', component: __WEBPACK_IMPORTED_MODULE_1__dynamic_form_dynamic_form_component__["a" /* DynamicFormComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_1__dynamic_form_dynamic_form_component__["a" /* DynamicFormComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-page-header></app-page-header>\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dynamic_form_dynamic_form_component__ = __webpack_require__("./src/app/dynamic-form/dynamic-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__another_page_another_page_component__ = __webpack_require__("./src/app/another-page/another-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__page_header_page_header_component__ = __webpack_require__("./src/app/page-header/page-header.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__dynamic_form_dynamic_form_component__["a" /* DynamicFormComponent */],
                __WEBPACK_IMPORTED_MODULE_7__another_page_another_page_component__["a" /* AnotherPageComponent */],
                __WEBPACK_IMPORTED_MODULE_8__page_header_page_header_component__["a" /* PageHeaderComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dynamic-form/dynamic-form.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dynamic-form/dynamic-form.component.html":
/***/ (function(module, exports) {

module.exports = "\n \n<section class=\"container\" style=\"margin-top:30px\">\n    <!--<div >\n        <input #name type=\"text\" [(value)]=\"ss.learning.name\" (keyup)=\"ss.changeName(name.value)\">\n        {{ss.learning.name}}\n    </div>-->\n    <h2>Create your fields</h2>\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <label for=\"field-name\">Field name:</label>\n      </div>\n      <div class=\"col-md-2\">\n        <label for=\"field-name\">Field Type:</label>\n      </div>        \n    </div>\n    <div class=\"row form-group\" *ngFor=\"let field of fields\">\n        <div class=\"col-md-3\">\n            <input id=\"field-name\" class=\"form-control\" [(ngModel)]=\"field.name\" type=\"text\">\n        </div>\n        <div class=\"col-md-2\">\n            <select class=\"form-control\" [(ngModel)]=\"field.type\">\n                <option *ngFor=\"let type of types\" [value]=\"type.id\">{{type.name}}</option>\n            </select>\n        </div>        \n    </div>\n    <div class=\"row\">\n        <button class=\"btn btn-success\" (click)=\"addField()\">add field</button>\n    </div>\n    <br>\n    <div class=\"row\">\n      <div class=\"card col-md-6\">\n        <div class=\"card-header\">\n          <h5>This is my built in runtime form</h5>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\" *ngFor=\"let field of fields\">\n            <div class=\"col-md-12\" [ngSwitch]=\"field.type\">\n                <div *ngSwitchCase=\"0\">\n                    <label>{{field.name}}</label>\n                    <input [(ngModel)]=\"field.value\" class=\"form-control\" type=\"number\" pattern=\"\\d*\">\n                </div>\n                <div *ngSwitchCase=\"1\">\n                    <label>{{field.name}}</label>\n                    <input [(ngModel)]=\"field.value\" class=\"form-control\" type=\"text\">\n                </div>\n                <div *ngSwitchCase=\"2\">\n                    <label>{{field.name}}</label>\n                    <input [(ngModel)]=\"field.value\" class=\"form-control\" type=\"date\">\n                </div>\n                <div *ngSwitchCase=\"3\">\n                    <label>{{field.name}}</label>\n                    <input [(ngModel)]=\"field.value\" class=\"form-control\" type=\"number\" step=\"0.01\">\n                </div>\n            </div>\n        </div>        \n        </div> \n        <div class=\"card-footer\">\n          <span class=\"badge badge-info\">JSON</span>: \n          <span>{{fields|json}}</span>\n        </div>\n      </div>\n    </div>\n  </section>"

/***/ }),

/***/ "./src/app/dynamic-form/dynamic-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DynamicFormComponent = /** @class */ (function () {
    function DynamicFormComponent() {
        this.types = [
            { id: 0, name: 'number' },
            { id: 1, name: 'string' },
            { id: 2, name: 'date' },
            { id: 3, name: 'decimal' }
        ];
        this.selectedType = 0;
        this.fields = [{ name: 'name', type: 1 }];
        this.addField = function () {
            this.fields.push({
                name: '', type: 0
            });
        };
    }
    DynamicFormComponent.prototype.ngOnInit = function () {
    };
    DynamicFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-dynamic-form',
            template: __webpack_require__("./src/app/dynamic-form/dynamic-form.component.html"),
            styles: [__webpack_require__("./src/app/dynamic-form/dynamic-form.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DynamicFormComponent);
    return DynamicFormComponent;
}());



/***/ }),

/***/ "./src/app/page-header/page-header.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-header/page-header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n    <a class=\"navbar-brand\" href=\"javascript:void(0)\">TarkDynamic</a>\n    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navb\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  \n    <div class=\"collapse navbar-collapse\" id=\"navb\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"/dynamic\">Dynamic-form</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" href=\"/another\">Another-page</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link disabled\" href=\"javascript:void(0)\">Something-else</a>\n        </li>\n      </ul>\n      <form class=\"form-inline my-2 my-lg-0\">\n        <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search\">\n        <button class=\"btn btn-success my-2 my-sm-0\" type=\"button\">Search</button>\n      </form>\n    </div>\n  </nav>"

/***/ }),

/***/ "./src/app/page-header/page-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageHeaderComponent = /** @class */ (function () {
    function PageHeaderComponent() {
    }
    PageHeaderComponent.prototype.ngOnInit = function () {
    };
    PageHeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-header',
            template: __webpack_require__("./src/app/page-header/page-header.component.html"),
            styles: [__webpack_require__("./src/app/page-header/page-header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageHeaderComponent);
    return PageHeaderComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map