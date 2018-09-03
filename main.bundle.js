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

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "ul {\n  text-align: center;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

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
        this.title = "CodeSandbox";
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-root",
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_mask__ = __webpack_require__("./node_modules/ngx-mask/esm5/ngx-mask.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__ = __webpack_require__("./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular5_data_table__ = __webpack_require__("./node_modules/angular5-data-table/esm5/angular5-data-table.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_progressbar__ = __webpack_require__("./node_modules/ngx-progressbar/modules/ngx-progressbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_routing_module__ = __webpack_require__("./src/app/app.routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__ = __webpack_require__("./src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_user_service__ = __webpack_require__("./src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_student_service__ = __webpack_require__("./src/app/services/student.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_class_service__ = __webpack_require__("./src/app/services/class.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_feetype_service__ = __webpack_require__("./src/app/services/feetype.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_classfee_service__ = __webpack_require__("./src/app/services/classfee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__main_header_header_component__ = __webpack_require__("./src/app/main/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__main_sidenavigation_sidenav_component__ = __webpack_require__("./src/app/main/sidenavigation/sidenav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__main_main_component__ = __webpack_require__("./src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__forgotpassword_forgotpassword_component__ = __webpack_require__("./src/app/forgotpassword/forgotpassword.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__signup_signup_component__ = __webpack_require__("./src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__main_dashboard_dashboard_component__ = __webpack_require__("./src/app/main/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__main_categories_categories_component__ = __webpack_require__("./src/app/main/categories/categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__main_updatecategory_updatecategory_component__ = __webpack_require__("./src/app/main/updatecategory/updatecategory.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__main_classes_classes_component__ = __webpack_require__("./src/app/main/classes/classes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__main_classes_updateclass_updateclass_component__ = __webpack_require__("./src/app/main/classes/updateclass/updateclass.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__main_classes_addclass_addclass_component__ = __webpack_require__("./src/app/main/classes/addclass/addclass.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__main_classes_classdetail_classdetail_component__ = __webpack_require__("./src/app/main/classes/classdetail/classdetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__main_student_student_component__ = __webpack_require__("./src/app/main/student/student.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__main_student_addstudent_addstudent_component__ = __webpack_require__("./src/app/main/student/addstudent/addstudent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__main_student_updatestudent_updatestudent_component__ = __webpack_require__("./src/app/main/student/updatestudent/updatestudent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__main_student_studentdetail_studentdetail_component__ = __webpack_require__("./src/app/main/student/studentdetail/studentdetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__main_feetype_feetype_component__ = __webpack_require__("./src/app/main/feetype/feetype.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__main_feetype_addfeetype_addfeetype_component__ = __webpack_require__("./src/app/main/feetype/addfeetype/addfeetype.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__main_feetype_updatefeetype_updatefeetype_component__ = __webpack_require__("./src/app/main/feetype/updatefeetype/updatefeetype.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__main_feetype_feetypedetail_feetypedetail_component__ = __webpack_require__("./src/app/main/feetype/feetypedetail/feetypedetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__main_classfee_classfee_component__ = __webpack_require__("./src/app/main/classfee/classfee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__main_classfee_addclassfee_addclassfee_component__ = __webpack_require__("./src/app/main/classfee/addclassfee/addclassfee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__main_classfee_classfeedetail_classfeedetail_component__ = __webpack_require__("./src/app/main/classfee/classfeedetail/classfeedetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__main_classfee_updateclassfee_updateclassfee_component__ = __webpack_require__("./src/app/main/classfee/updateclassfee/updateclassfee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__main_generateclassfee_generateclassfee_component__ = __webpack_require__("./src/app/main/generateclassfee/generateclassfee.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









// Routing


// Service








// Component

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_17__main_header_header_component__["a" /* HeaderComponent */], __WEBPACK_IMPORTED_MODULE_18__main_sidenavigation_sidenav_component__["a" /* SideNavComponent */], __WEBPACK_IMPORTED_MODULE_20__login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_21__main_main_component__["a" /* MainComponent */], __WEBPACK_IMPORTED_MODULE_22__forgotpassword_forgotpassword_component__["a" /* ForgotPasswordComponent */],
                __WEBPACK_IMPORTED_MODULE_23__signup_signup_component__["a" /* SignupComponent */], __WEBPACK_IMPORTED_MODULE_24__main_dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_25__main_categories_categories_component__["a" /* CategoriesComponent */], __WEBPACK_IMPORTED_MODULE_26__main_updatecategory_updatecategory_component__["a" /* UpdateCategoryComponent */],
                __WEBPACK_IMPORTED_MODULE_27__main_classes_classes_component__["a" /* ClassesComponent */], __WEBPACK_IMPORTED_MODULE_28__main_classes_updateclass_updateclass_component__["a" /* UpdateClassComponent */], __WEBPACK_IMPORTED_MODULE_29__main_classes_addclass_addclass_component__["a" /* AddClassComponent */], __WEBPACK_IMPORTED_MODULE_30__main_classes_classdetail_classdetail_component__["a" /* ClassDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_31__main_student_student_component__["a" /* StudentComponent */], __WEBPACK_IMPORTED_MODULE_32__main_student_addstudent_addstudent_component__["a" /* AddStudentComponent */], __WEBPACK_IMPORTED_MODULE_33__main_student_updatestudent_updatestudent_component__["a" /* UpdateStudentComponent */], __WEBPACK_IMPORTED_MODULE_34__main_student_studentdetail_studentdetail_component__["a" /* StudentDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_35__main_feetype_feetype_component__["a" /* FeeTypeComponent */], __WEBPACK_IMPORTED_MODULE_36__main_feetype_addfeetype_addfeetype_component__["a" /* AddFeeTypeComponent */], __WEBPACK_IMPORTED_MODULE_37__main_feetype_updatefeetype_updatefeetype_component__["a" /* UpdateFeeTypeComponent */], __WEBPACK_IMPORTED_MODULE_38__main_feetype_feetypedetail_feetypedetail_component__["a" /* FeeTypeDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_39__main_classfee_classfee_component__["a" /* ClassFeeComponent */], __WEBPACK_IMPORTED_MODULE_40__main_classfee_addclassfee_addclassfee_component__["a" /* AddClassFeeComponent */], __WEBPACK_IMPORTED_MODULE_41__main_classfee_classfeedetail_classfeedetail_component__["a" /* ClassFeeDetailComponent */], __WEBPACK_IMPORTED_MODULE_42__main_classfee_updateclassfee_updateclassfee_component__["a" /* UpdateClassFeeComponent */],
                __WEBPACK_IMPORTED_MODULE_43__main_generateclassfee_generateclassfee_component__["a" /* GenerateClassFeeComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"], __WEBPACK_IMPORTED_MODULE_9__app_routing_module__["a" /* AppRouting */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_4_ngx_mask__["a" /* NgxMaskModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__["SimpleNotificationsModule"].forRoot({
                    timeOut: 3000,
                    showProgressBar: true,
                    pauseOnHover: true,
                    clickToClose: true,
                    maxLength: 250,
                    preventDuplicates: true
                }), __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */], __WEBPACK_IMPORTED_MODULE_7_angular5_data_table__["a" /* DataTableModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8_ngx_progressbar__["b" /* NgProgressModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__guards_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_11__services_authentication_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_12__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_13__services_student_service__["a" /* StudentService */],
                __WEBPACK_IMPORTED_MODULE_14__services_class_service__["a" /* ClassService */],
                __WEBPACK_IMPORTED_MODULE_15__services_feetype_service__["a" /* FeeTypeService */],
                __WEBPACK_IMPORTED_MODULE_16__services_classfee_service__["a" /* ClassFeeService */] //s,
                // providers used to create fake backend
                //fakeBackendProvider,
                //MockBackend,
                // BaseRequestOptions
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_19__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRouting; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__ = __webpack_require__("./src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_main_component__ = __webpack_require__("./src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__forgotpassword_forgotpassword_component__ = __webpack_require__("./src/app/forgotpassword/forgotpassword.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__signup_signup_component__ = __webpack_require__("./src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__main_dashboard_dashboard_component__ = __webpack_require__("./src/app/main/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__main_categories_categories_component__ = __webpack_require__("./src/app/main/categories/categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__main_updatecategory_updatecategory_component__ = __webpack_require__("./src/app/main/updatecategory/updatecategory.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__main_classes_classes_component__ = __webpack_require__("./src/app/main/classes/classes.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__main_classes_updateclass_updateclass_component__ = __webpack_require__("./src/app/main/classes/updateclass/updateclass.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__main_classes_addclass_addclass_component__ = __webpack_require__("./src/app/main/classes/addclass/addclass.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__main_classes_classdetail_classdetail_component__ = __webpack_require__("./src/app/main/classes/classdetail/classdetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__main_student_student_component__ = __webpack_require__("./src/app/main/student/student.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__main_student_addstudent_addstudent_component__ = __webpack_require__("./src/app/main/student/addstudent/addstudent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__main_student_updatestudent_updatestudent_component__ = __webpack_require__("./src/app/main/student/updatestudent/updatestudent.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__main_student_studentdetail_studentdetail_component__ = __webpack_require__("./src/app/main/student/studentdetail/studentdetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__main_feetype_feetype_component__ = __webpack_require__("./src/app/main/feetype/feetype.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__main_feetype_addfeetype_addfeetype_component__ = __webpack_require__("./src/app/main/feetype/addfeetype/addfeetype.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__main_feetype_updatefeetype_updatefeetype_component__ = __webpack_require__("./src/app/main/feetype/updatefeetype/updatefeetype.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__main_feetype_feetypedetail_feetypedetail_component__ = __webpack_require__("./src/app/main/feetype/feetypedetail/feetypedetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__main_classfee_classfee_component__ = __webpack_require__("./src/app/main/classfee/classfee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__main_classfee_addclassfee_addclassfee_component__ = __webpack_require__("./src/app/main/classfee/addclassfee/addclassfee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__main_classfee_classfeedetail_classfeedetail_component__ = __webpack_require__("./src/app/main/classfee/classfeedetail/classfeedetail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__main_classfee_updateclassfee_updateclassfee_component__ = __webpack_require__("./src/app/main/classfee/updateclassfee/updateclassfee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__main_generateclassfee_generateclassfee_component__ = __webpack_require__("./src/app/main/generateclassfee/generateclassfee.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__login_login_component__["a" /* LoginComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_6__signup_signup_component__["a" /* SignupComponent */] },
    { path: 'forgot-password', component: __WEBPACK_IMPORTED_MODULE_5__forgotpassword_forgotpassword_component__["a" /* ForgotPasswordComponent */] },
    { path: 'app', component: __WEBPACK_IMPORTED_MODULE_4__main_main_component__["a" /* MainComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]],
        children: [
            { path: "categories", component: __WEBPACK_IMPORTED_MODULE_8__main_categories_categories_component__["a" /* CategoriesComponent */] },
            { path: "updatecategory", component: __WEBPACK_IMPORTED_MODULE_9__main_updatecategory_updatecategory_component__["a" /* UpdateCategoryComponent */] },
            { path: "dashboard", component: __WEBPACK_IMPORTED_MODULE_7__main_dashboard_dashboard_component__["a" /* DashboardComponent */] },
            { path: "student", component: __WEBPACK_IMPORTED_MODULE_14__main_student_student_component__["a" /* StudentComponent */] },
            { path: "addstudent", component: __WEBPACK_IMPORTED_MODULE_15__main_student_addstudent_addstudent_component__["a" /* AddStudentComponent */] },
            { path: "updatestudent/:id", component: __WEBPACK_IMPORTED_MODULE_16__main_student_updatestudent_updatestudent_component__["a" /* UpdateStudentComponent */] },
            { path: "studentdetail/:id", component: __WEBPACK_IMPORTED_MODULE_17__main_student_studentdetail_studentdetail_component__["a" /* StudentDetailComponent */] },
            { path: "classes", component: __WEBPACK_IMPORTED_MODULE_10__main_classes_classes_component__["a" /* ClassesComponent */] },
            { path: "addclass", component: __WEBPACK_IMPORTED_MODULE_12__main_classes_addclass_addclass_component__["a" /* AddClassComponent */] },
            { path: "updateclass/:id", component: __WEBPACK_IMPORTED_MODULE_11__main_classes_updateclass_updateclass_component__["a" /* UpdateClassComponent */] },
            { path: "classdetail/:id", component: __WEBPACK_IMPORTED_MODULE_13__main_classes_classdetail_classdetail_component__["a" /* ClassDetailComponent */] },
            { path: "feetype", component: __WEBPACK_IMPORTED_MODULE_18__main_feetype_feetype_component__["a" /* FeeTypeComponent */] },
            { path: "addfeetype", component: __WEBPACK_IMPORTED_MODULE_19__main_feetype_addfeetype_addfeetype_component__["a" /* AddFeeTypeComponent */] },
            { path: "updatefeetype/:id", component: __WEBPACK_IMPORTED_MODULE_20__main_feetype_updatefeetype_updatefeetype_component__["a" /* UpdateFeeTypeComponent */] },
            { path: "feetypedetail/:id", component: __WEBPACK_IMPORTED_MODULE_21__main_feetype_feetypedetail_feetypedetail_component__["a" /* FeeTypeDetailComponent */] },
            { path: "classfee", component: __WEBPACK_IMPORTED_MODULE_22__main_classfee_classfee_component__["a" /* ClassFeeComponent */] },
            { path: "addclassfee", component: __WEBPACK_IMPORTED_MODULE_23__main_classfee_addclassfee_addclassfee_component__["a" /* AddClassFeeComponent */] },
            { path: "classfeedetail/:id", component: __WEBPACK_IMPORTED_MODULE_24__main_classfee_classfeedetail_classfeedetail_component__["a" /* ClassFeeDetailComponent */] },
            { path: "updateclassfee/:id", component: __WEBPACK_IMPORTED_MODULE_25__main_classfee_updateclassfee_updateclassfee_component__["a" /* UpdateClassFeeComponent */] },
            { path: "generateclassfee", component: __WEBPACK_IMPORTED_MODULE_26__main_generateclassfee_generateclassfee_component__["a" /* GenerateClassFeeComponent */] }
        ]
    }
];
var AppRouting = /** @class */ (function () {
    function AppRouting() {
    }
    AppRouting = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
            declarations: []
        })
    ], AppRouting);
    return AppRouting;
}());



/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar\">\r\n\t<a class=\"navbar-brand mr-0 mr-md-2\" href=\"https://getbootstrap.com/\" aria-label=\"Bootstrap\">\r\n\t</a>\r\n\t<img src=\"https://themes.getbootstrap.com/wp-content/themes/bootstrap-marketplace/assets/images/elements/bootstrap-stack.png\"\r\n\t srcset=\"https://themes.getbootstrap.com/wp-content/themes/bootstrap-marketplace/assets/images/elements/bootstrap-stack.png 1x, https://themes.getbootstrap.com/wp-content/themes/bootstrap-marketplace/assets/images/elements/bootstrap-stack@2x.png 2x\"\r\n\t style=\"width:3%\">\r\n\t<h5 class=\"my-0 mr-md-auto font-weight-normal pl-md-3 text-white\"> Admin Console</h5>\r\n  \r\n  <a class=\"btn btn-bd-download d-none d-lg-inline-block mb-3 mb-md-0 ml-md-3\" [routerLink]=\"['/login']\">Log in</a>\r\n\t<a class=\"btn btn-bd-download d-none d-lg-inline-block mb-3 mb-md-0 ml-md-3\" [routerLink]=\"['/signup']\">Sign up</a>\r\n</header>\r\n<form class=\"form-signin\">\r\n\t<h1 class=\"h3 mb-3 font-weight-normal\">Reset your password</h1>\r\n\t<label for=\"inputEmail\" class=\"sr-only\">User Name or Email</label>\r\n\t<input type=\"email\" class=\"form-control \" placeholder=\"User Name or Email\" required=\"\" autofocus=\"\">\r\n\r\n\t<!--<div class=\"alert alert-danger\" role=\"alert\">\r\n\t\t<h4 class=\"alert-heading\">Error!</h4>\r\n\t\t<p>User Name is required</p>\r\n\t\t<hr>\r\n\t\t<p class=\"mb-0\">Password is required</p>\r\n\t</div>\r\n-->\r\n\t<button class=\"btn btn-lg btn-bd-primary btn-block mt-3\" type=\"submit\">Submit</button>\r\n\r\n</form>"

/***/ }),

/***/ "./src/app/forgotpassword/forgotpassword.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgotPasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent() {
    }
    ForgotPasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/forgotpassword/forgotpassword.component.html")
        })
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (localStorage.getItem("currentUser")) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page
        this.router.navigate(["/login"]);
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar\">\r\n\t<a class=\"navbar-brand mr-0 mr-md-2\" [routerLink]=\"['/login']\">\r\n\t\t<img src=\"assets/img/cup.png\" width=\"40\">\r\n\t\tStudent Fee System\r\n\t</a>\r\n\t\r\n\t<!-- <span class=\"text-white\">New to here?</span>\r\n\t<a class=\"btn btn-bd-download d-none d-lg-inline-block mb-3 mb-md-0 ml-md-3\" [routerLink]=\"['/signup']\">Sign Up\r\n\t</a> -->\r\n</header>\r\n<form class=\"form-signin\" name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\r\n\t<h1 class=\"h3 mb-3 font-weight-normal\">Please login in</h1>\r\n\t<label for=\"inputEmail\" class=\"sr-only\">User Name</label>\r\n\t<input type=\"text\"  name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" class=\"form-control border-upper-side\" placeholder=\"User Name\" required=\"\" autofocus=\"\">\r\n\t<label for=\"inputPassword\" class=\"sr-only\">Password</label>\r\n\t<input type=\"password\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" class=\"form-control border-lower-side\" placeholder=\"Password\" required=\"\">\r\n\t\r\n\t<div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"(f.submitted && !username.valid) || (f.submitted && !password.valid)\">\r\n\t\t<h4 class=\"alert-heading\">Oops!</h4>\r\n\t\t<p>User Name & Password are required</p>\r\n\t</div>\r\n\t<div class=\"alert alert-danger\" role=\"alert\" *ngIf=\"error && (username.valid && password.valid)\">\r\n\t\t<h4 class=\"alert-heading\">Oops!</h4>\r\n\t\t<p >{{error}}</p>\r\n\t</div>\r\n\r\n\t<!-- <div class=\"checkbox mb-3\">\r\n\t\t<label>\r\n          <a [routerLink]=\"['/forgot-password']\" class=\"text-purple\"> Forgot Password </a>\r\n        </label>\r\n\t</div> -->\r\n\t<button  class=\"btn btn-lg btn-bd-primary btn-block mt-3\" type=\"submit\">Login</button>\r\n\r\n</form>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.title = "Your are in login Page";
        this.model = {};
        this.loading = false;
        this.error = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.authenticationService.logout();
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        //this.router.navigate(["/app/dashboard"]);
        this.authenticationService
            .login(this.model.username, this.model.password)
            .subscribe(function (result) {
            if (result === true) {
                // login successful
                console.log(result);
                _this.router.navigate(["/app/dashboard"]);
            }
            else {
                // login failed
                _this.error = "Username or password is incorrect";
                _this.loading = false;
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/login/login.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/main/categories/categories.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"mt-2\">Categories</h2>\r\n<hr/>\r\n<a class=\"btn btn-bd-primary btn-sm mb-4\" href=\"#\">New Category</a>\r\n<br/>\r\n<table class=\"table table-sm table-bordered table-hover table-sortable\">\r\n\t<thead>\r\n\t\t<tr>\r\n\t\t\t<th scope=\"col\">#</th>\r\n\t\t\t<th scope=\"col\">Category</th>\r\n\t\t\t<th scope=\"col\">Featured</th>\r\n\t\t\t<th scope=\"col\">Subcat</th>\r\n\t\t\t<th scope=\"col\">Products</th>\r\n\t\t\t<th scope=\"col\">Actions</th>\r\n\t\t</tr>\r\n\t</thead>\r\n\t<tbody>\r\n\t\t<tr>\r\n\t\t\t<th scope=\"row\">1 </th>\r\n\t\t\t<td>\r\n\t\t\t\t<a [routerLink]=\"['/app/updatecategory']\">Electronics</a>\r\n\t\t\t</td>\r\n\t\t\t<td>0</td>\r\n\t\t\t<td>@mdo</td>\r\n\t\t\t<td>0</td>\r\n\t\t\t<td>\r\n\t\t\t\t<button class=\"btn btn-outline-success btn-sm\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-power-off\"></i>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t<button class=\"btn btn-outline-danger btn-sm\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-trash-o\"></i>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t<button class=\"btn btn-outline-warning btn-sm\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-edit\"></i>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<th scope=\"row\">2</th>\r\n\t\t\t<td>\r\n\t\t\t\t<a [routerLink]=\"['/app/updatecategory']\">Apparel</a>\r\n\t\t\t</td>\r\n\t\t\t<td>0</td>\r\n\t\t\t<td>@fat</td>\r\n\t\t\t<td>10</td>\r\n\t\t\t<td>\r\n\t\t\t\t<button class=\"btn btn-outline-success btn-sm\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-power-off\"></i>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t<button class=\"btn btn-outline-danger btn-sm\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-trash-o\"></i>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t<button class=\"btn btn-outline-warning btn-sm\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-edit\"></i>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t\t<tr>\r\n\t\t\t<th scope=\"row\">3</th>\r\n\t\t\t<td>\r\n\t\t\t\t<a [routerLink]=\"['/app/updatecategory']\">TV</a>\r\n\t\t\t</td>\r\n\t\t\t<td>0</td>\r\n\t\t\t<td>@fat</td>\r\n\t\t\t<td>5</td>\r\n\t\t\t<td>\r\n\t\t\t\t<button class=\"btn btn-outline-success btn-sm\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-power-off\"></i>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t<button class=\"btn btn-outline-danger btn-sm\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-trash-o\"></i>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t<button class=\"btn btn-outline-warning btn-sm\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-edit\"></i>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t</td>\r\n\t\t</tr>\r\n\t</tbody>\r\n</table>"

/***/ }),

/***/ "./src/app/main/categories/categories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent() {
    }
    CategoriesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/main/categories/categories.component.html")
        })
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/main/classes/addclass/addclass.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"mt-2\">Add Class</h2>\r\n<ol class=\"breadcrumb-arrow\">\r\n\t<li><a [routerLink]=\"['/app/classes']\">Classes</a></li>\r\n\t<li class=\"active\"><span>Add Class</span></li>\r\n</ol>\r\n\r\n\r\n<div class=\" \">\r\n\t<nav>\r\n\t\t<div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\r\n\t\t\t<a class=\"nav-item nav-link active\" id=\"nav-home-tab\" data-toggle=\"tab\" data-target=\"#classinfo\" href=\"#\" role=\"tab\" aria-controls=\"categoryinfo\"\r\n\t\t\t aria-selected=\"true\">Class Info</a>\r\n\t\t</div>\r\n\t</nav>\r\n\t<div class=\"tab-content pt-md-4 pl-3\" id=\"nav-tabContent\">\r\n\t\t<div class=\"tab-pane fade show active\" id=\"classinfo\" role=\"tabpanel\" aria-labelledby=\"classinfo-tab\">\r\n\t\t\t<div class=\"col-md-10 alert alert-danger\" role=\"alert\" *ngIf=\"(classForm.submitted && !classForm.valid)\">\r\n\t\t\t\tPlease fill in the highlighted fields.\r\n\t\t\t</div>\r\n\t\t\t<form (ngSubmit)=\"classForm.form.valid && addClass();\" #classForm=\"ngForm\" novalidate>\r\n\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Class Name</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"studentClass.name\" #name=\"ngModel\" required\r\n\t\t\t\t\t [ngClass]=\"{'has-error': classForm.submitted && !name.valid}\" >\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Description</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"description\" [(ngModel)]=\"studentClass.description\" #description=\"ngModel\" required\r\n\t\t\t\t\t [ngClass]=\"{'has-error': classForm.submitted && !description.valid}\" >\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t<label for=\"inputPassword\" class=\"col-sm-2 col-form-label\">Active</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<select class=\"form-control\" name=\"active\" [(ngModel)]=\"studentClass.active\" #active=\"ngModel\" required\r\n\t\t\t\t\t[ngClass]=\"{'has-error': classForm.submitted && !active.valid}\" >\r\n\t\t\t\t\t\t<option value=\"true\" selected=\"selected\">Yes</option>\r\n\t\t\t\t\t\t<option value=\"false\">No</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<button class=\"btn btn-bd-primary mb-4\">Save</button>\r\n\t\t\t<button type=\"button\" (click)=\"ClearAll(classForm)\" class=\"btn btn-outline-secondary mb-4\" >Reset</button>\r\n\t\t</form>\r\n\t\t</div>\r\n\t\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/main/classes/addclass/addclass.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddClassComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_progressbar__ = __webpack_require__("./node_modules/ngx-progressbar/modules/ngx-progressbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__ = __webpack_require__("./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_studentclass__ = __webpack_require__("./src/app/models/studentclass.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_class_service__ = __webpack_require__("./src/app/services/class.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddClassComponent = /** @class */ (function () {
    function AddClassComponent(classService, router, ngProgress, notif) {
        this.classService = classService;
        this.router = router;
        this.ngProgress = ngProgress;
        this.notif = notif;
        this.studentClass = new __WEBPACK_IMPORTED_MODULE_4__models_studentclass__["a" /* StudentClass */]();
    }
    AddClassComponent.prototype.ngOnInit = function () { };
    AddClassComponent.prototype.addClass = function () {
        var _this = this;
        console.log("in add student method" + JSON.stringify(this.studentClass));
        this.ngProgress.start();
        window.scroll(0, 0);
        this.classService
            .addClass(this.studentClass)
            .subscribe(function (result) {
            //this.students = result;
            console.log(result);
            _this.ngProgress.done();
            _this.notif.success("Success", "Class details has been saved successfully.");
        }, function (error) {
            console.log(error);
            _this.ngProgress.done();
            _this.notif.error("Failure", "While saving the Class details, please try again.");
        });
    };
    AddClassComponent.prototype.ClearAll = function (form) {
        console.log("res");
        form.resetForm();
    };
    AddClassComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/main/classes/addclass/addclass.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_class_service__["a" /* ClassService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_progressbar__["a" /* NgProgress */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["NotificationsService"]])
    ], AddClassComponent);
    return AddClassComponent;
}());



/***/ }),

/***/ "./src/app/main/classes/classdetail/classdetail.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"mt-2\">Class Detail</h2>\r\n<ol class=\"breadcrumb-arrow\">\r\n\t<li><a [routerLink]=\"['/app/classes']\">Classes</a></li>\r\n\t<li class=\"active\"><span>{{studentClass.name}}</span></li>\r\n</ol>\r\n\r\n\r\n<div class=\" \">\r\n\t<nav>\r\n\t\t<div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\r\n\t\t\t<a class=\"nav-item nav-link active\" id=\"nav-home-tab\" data-toggle=\"tab\" data-target=\"#classinfo\" href=\"#\" role=\"tab\" aria-controls=\"categoryinfo\"\r\n\t\t\t aria-selected=\"true\">Class Info</a>\r\n\t\t\t <a class=\"nav-item nav-link\" id=\"nav-contact-tab\" data-toggle=\"tab\" data-target=\"#classstudents\" href=\"#\" role=\"tab\" aria-controls=\"catproducts\"\r\n\t\t\t aria-selected=\"false\">Students</a>\r\n\t\t</div>\r\n\t</nav>\r\n\t<div class=\"tab-content pt-md-4 pl-3\" id=\"nav-tabContent\">\r\n\t\t<div class=\"tab-pane fade show active\" id=\"classinfo\" role=\"tabpanel\" aria-labelledby=\"classinfo-tab\">\r\n\t\t\t<form (ngSubmit)=\"classForm.form.valid\" #classForm=\"ngForm\" novalidate>\r\n\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t<label class=\"col-sm-2 col-form-label\">Class Name</label>\r\n\t\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control-plaintext\" name=\"name\" [(ngModel)]=\"studentClass.name\" #name=\"ngModel\" required\r\n\t\t\t\t\t\t [ngClass]=\"{'has-error': classForm.submitted && !name.valid}\" disabled>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-sm-2\">\r\n\t\t\t\t\t\t<!-- <button type=\"button\" class=\"btn btn-danger btn-sm text-white ng-star-inserted\" (click)=\"doInactiveClass(studentClass)\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-power-off\"></i>\r\n\t\t\t\t\t\t</button> -->\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-warning btn-sm text-white ng-star-inserted\" (click)=\"editClass(studentClass)\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-edit\"></i>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t<label class=\"col-sm-2 col-form-label\">Description</label>\r\n\t\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control-plaintext\" name=\"description\" [(ngModel)]=\"studentClass.description\" #description=\"ngModel\" required\r\n\t\t\t\t\t\t [ngClass]=\"{'has-error': classForm.submitted && !description.valid}\" disabled>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t<label for=\"inputPassword\" class=\"col-sm-2 col-form-label\">Active</label>\r\n\t\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t\t<select class=\"form-control-plaintext\" name=\"active\" [(ngModel)]=\"studentClass.active\" #active=\"ngModel\" required\r\n\t\t\t\t\t\t[ngClass]=\"{'has-error': classForm.submitted && !active.valid}\" disabled>\r\n\t\t\t\t\t\t\t<option value=\"true\" selected=\"selected\">Yes</option>\r\n\t\t\t\t\t\t\t<option value=\"false\">No</option>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</form>\r\n\t\t</div>\r\n\t\t<div class=\"tab-pane fade\" id=\"classstudents\" role=\"tabpanel\" aria-labelledby=\"classstudents-tab\">\r\n\t\t\t<a class=\"btn btn-bd-primary btn-sm mb-4\" [routerLink]=\"['/app/addstudent']\">Add Student</a>\r\n\t\t\t<br/>\r\n\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t\t<data-table id=\"persons-grid\" class=\"table table-sm\"\r\n\t\t\t\t\t\t\theaderTitle=\"Students\"\r\n\t\t\t\t\t\t\t[limit]=\"10\"\r\n\t\t\t\t\t\t\t[items]=\"items\"\r\n\t\t\t\t\t\t\t[itemCount]=\"itemCount\"\r\n\t\t\t\t\t\t\t(reload)=\"reloadItems($event)\"\r\n\t\t\t\t\t\t\t[pagination] = \"true\"\r\n\t\t\t\t\t\t\t[rowTooltip]=\"rowTooltip\"\r\n\t\t\t\t\t\t\t[indexColumn] = \"false\"\r\n\t\t\t\t\t\t\t[substituteRows]=\"false\"\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t<data-table-column\r\n\t\t\t\t\t\t\t\t[property]=\"'studentId'\"\r\n\t\t\t\t\t\t\t\t[header]=\"'#'\"\r\n\t\t\t\t\t\t\t\t[width]=\"55\"\r\n\t\t\t\t\t\t\t\t[sortable]=\"true\"\r\n\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t</data-table-column>\r\n\t\t\t\t\t\t\t<data-table-column\r\n\t\t\t\t\t\t\t\t[property]=\"'name'\"\r\n\t\t\t\t\t\t\t\t[header]=\"'Student Name'\"\r\n\t\t\t\t\t\t\t\t[sortable]=\"true\"\r\n\t\t\t\t\t\t\t\t[resizable]=\"true\">\r\n\t\t\t\t\t\t\t\t<ng-template #dataTableCell let-item=\"item\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:(0)\" (click)=\"viewStudent(item)\">{{item.firstName + \" \" + item.lastName}}</a>\r\n\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t</data-table-column>\r\n\t\t\t\t\t\t\t<data-table-column\r\n\t\t\t\t\t\t\t\t[property]=\"'admissionno'\"\r\n\t\t\t\t\t\t\t\t[header]=\"'Admission No.'\"\r\n\t\t\t\t\t\t\t\t[sortable]=\"true\"\r\n\t\t\t\t\t\t\t\t[resizable]=\"true\">\r\n\t\t\t\t\t\t\t</data-table-column>\r\n\t\t\t\t\t\t\t<data-table-column\r\n\t\t\t\t\t\t\t\t[property]=\"'fathername'\"\r\n\t\t\t\t\t\t\t\t[header]=\"'Father Name'\"\r\n\t\t\t\t\t\t\t\t[sortable]=\"true\"\r\n\t\t\t\t\t\t\t\t[resizable]=\"true\">\r\n\t\t\t\t\t\t\t</data-table-column>\r\n\t\t\t\t\t\t\t<data-table-column\r\n\t\t\t\t\t\t\t\t[property]=\"'mothername'\"\r\n\t\t\t\t\t\t\t\t[header]=\"'Mother Name'\"\r\n\t\t\t\t\t\t\t\t[sortable]=\"true\"\r\n\t\t\t\t\t\t\t\t[resizable]=\"true\">\r\n\t\t\t\t\t\t\t</data-table-column>\r\n\t\t\t\t\t\t\t<data-table-column\r\n\t\t\t\t\t\t\t\t[property]=\"'active'\"\r\n\t\t\t\t\t\t\t\t[header]=\"'Actions'\"\r\n\t\t\t\t\t\t\t\t[resizable]=\"true\">\r\n\t\t\t\t\t\t\t\t<ng-template #dataTableCell let-item=\"item\">\r\n\t\t\t\t\t\t\t\t\t<!-- <button class=\"btn btn-outline-success btn-sm\"  title=\"Click to active\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-power-off\"></i>\r\n\t\t\t\t\t\t\t\t\t</button> -->\r\n\t\t\t\t\t\t\t\t\t<!-- <button class=\"btn btn-danger btn-sm text-white\" (click)=\"doInactiveStudent(item)\" title=\"Inactive this student\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-power-off\"></i>\r\n\t\t\t\t\t\t\t\t\t</button> -->\r\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-warning btn-sm text-white\" (click)=\"editStudent(item)\" title=\"Edit this student\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-edit\"></i>\r\n\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t</data-table-column>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t</data-table>\r\n\t\t\t\t\t</div>\r\n\t\t</div>\r\n\t\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/main/classes/classdetail/classdetail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_progressbar__ = __webpack_require__("./node_modules/ngx-progressbar/modules/ngx-progressbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__ = __webpack_require__("./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular5_data_table__ = __webpack_require__("./node_modules/angular5-data-table/esm5/angular5-data-table.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_studentclass__ = __webpack_require__("./src/app/models/studentclass.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_class_service__ = __webpack_require__("./src/app/services/class.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_student_service__ = __webpack_require__("./src/app/services/student.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ClassDetailComponent = /** @class */ (function () {
    function ClassDetailComponent(classService, notif, studentService, router, ngProgress, route) {
        var _this = this;
        this.classService = classService;
        this.notif = notif;
        this.studentService = studentService;
        this.router = router;
        this.ngProgress = ngProgress;
        this.route = route;
        this.studentClass = new __WEBPACK_IMPORTED_MODULE_5__models_studentclass__["a" /* StudentClass */]();
        this.students = [];
        this.itemResource = new __WEBPACK_IMPORTED_MODULE_4_angular5_data_table__["b" /* DataTableResource */](this.students);
        this.items = [];
        this.itemCount = 0;
        this.params = { offset: 0, limit: 10 };
        this.route.params.subscribe(function (params) {
            _this.index = params['id'];
        });
    }
    ClassDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ngProgress.start();
        console.log(this.classService.classData);
        if (!this.classService.classData) {
            window.scroll(0, 0);
            this.classService
                .getClass(this.index)
                .subscribe(function (result) {
                if (result) {
                    _this.studentClass = result;
                    _this.showStudentDataGrid(result.students);
                }
                else {
                    _this.notif.info("Information", "No such record not found in the system, please try again.");
                }
                _this.ngProgress.done();
            }, function (error) {
                console.log(error);
                _this.ngProgress.done();
                _this.notif.error("Failure", "While fetching Student detail, please try again.");
            });
        }
        else {
            this.studentClass = this.classService.classData;
            this.showStudentDataGrid(this.studentClass.students);
            this.ngProgress.done();
        }
    };
    ClassDetailComponent.prototype.editClass = function (studentClass) {
        console.log('Clicked: ' + studentClass.name);
        this.classService.classData = studentClass;
        this.router.navigate(["/app/updateclass/" + studentClass.studentClassId]);
    };
    ClassDetailComponent.prototype.doInactiveClass = function (studentClass) {
        console.log('Clicked: ' + studentClass.name);
    };
    ClassDetailComponent.prototype.reloadItems = function (params) {
        var _this = this;
        console.log("reload");
        this.itemResource.query(params).then(function (items) { return _this.items = items; });
    };
    // special properties:
    ClassDetailComponent.prototype.rowClick = function (rowEvent) {
        console.log('Clicked: ' + rowEvent.row.item.name);
    };
    ClassDetailComponent.prototype.editStudent = function (student) {
        console.log('Clicked: ' + student.firstName);
        student.studentClass = this.studentClass;
        this.studentService.studentData = student;
        this.router.navigate(["/app/updatestudent/" + student.studentId]);
    };
    ClassDetailComponent.prototype.viewStudent = function (student) {
        console.log('Clicked: ' + student.firstName);
        student.studentClass = this.studentClass;
        this.studentService.studentData = student;
        this.router.navigate(["/app/studentdetail/" + student.studentId]);
    };
    ClassDetailComponent.prototype.doInactiveStudent = function (student) {
        console.log('Clicked: ' + student.firstName);
    };
    ClassDetailComponent.prototype.rowDoubleClick = function (rowEvent) {
        alert('Double clicked: ' + rowEvent.row.item.name);
    };
    ClassDetailComponent.prototype.rowTooltip = function (item) {
        return item.name;
    };
    ClassDetailComponent.prototype.showStudentDataGrid = function (students) {
        var _this = this;
        this.students = students;
        this.itemResource = new __WEBPACK_IMPORTED_MODULE_4_angular5_data_table__["b" /* DataTableResource */](students);
        this.reloadItems(this.params);
        this.itemResource.count().then(function (count) { return _this.itemCount = count; });
    };
    ClassDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/main/classes/classdetail/classdetail.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__services_class_service__["a" /* ClassService */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["NotificationsService"],
            __WEBPACK_IMPORTED_MODULE_7__services_student_service__["a" /* StudentService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_progressbar__["a" /* NgProgress */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], ClassDetailComponent);
    return ClassDetailComponent;
}());



/***/ }),

/***/ "./src/app/main/classes/classes.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"mt-2\">Classes</h2>\r\n<hr/>\r\n<a class=\"btn btn-bd-primary btn-sm mb-4\" [routerLink]=\"['/app/addclass']\">Add New Class</a>\r\n<!-- <div class=\"form-group row\">\r\n\t<div class=\"col-sm-6 input-group\">\r\n\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Please type here to search...\" aria-describedby=\"basic-addon2\"\r\n\t\t\t #searchVal (keyup)=\"filterData(searchVal.value)\">\r\n\t\t\t<div class=\"input-group-append\">\r\n\t\t\t  <span class=\"input-group-text\" id=\"basic-addon2\"><i class=\"fa fa-search\"></i></span>\r\n\t\t\t  \r\n\t\t\t</div>\r\n\t</div>\r\n\t<div class=\"col-sm-2\">\r\n\t\t<button class=\"btn btn-outline-secondary\">Remove Filter</button>\r\n\t</div>\r\n</div> -->\r\n\r\n<div class=\"table-responsive\">\r\n<data-table id=\"persons-grid\" class=\"table table-sm\"\r\n\theaderTitle=\"Classes\"\r\n\t[limit]=\"10\"\r\n\t[items]=\"items\"\r\n\t[itemCount]=\"itemCount\"\r\n\t(reload)=\"reloadItems($event)\"\r\n\t[pagination] = \"true\"\r\n\t[rowTooltip]=\"rowTooltip\"\r\n\t[indexColumn] = \"false\"\r\n\t[substituteRows]=\"false\"\r\n\t\r\n\t>\r\n\t<data-table-column\r\n\t\t[property]=\"'studentClassId'\"\r\n\t\t[header]=\"'#'\"\r\n\t\t[width]=\"55\"\r\n\t\t[sortable]=\"true\"\r\n\t\t>\r\n\t</data-table-column>\r\n\t<data-table-column\r\n\t\t[property]=\"'name'\"\r\n\t\t[header]=\"'Class Name'\"\r\n\t\t[sortable]=\"true\"\r\n\t\t[resizable]=\"true\">\r\n\t\t<ng-template #dataTableCell let-item=\"item\">\r\n\t\t\t<a href=\"javascript:(0)\" (click)=\"viewClass(item)\">{{item.name}}</a>\r\n\t\t</ng-template>\r\n\t</data-table-column>\r\n\t<data-table-column\r\n\t\t[property]=\"'description'\"\r\n\t\t[header]=\"'Class Description'\"\r\n\t\t[sortable]=\"true\"\r\n\t\t[resizable]=\"true\">\r\n\t</data-table-column>\r\n\t<data-table-column\r\n\t\t[property]=\"'active'\"\r\n\t\t[header]=\"'Active/ Inactive'\"\r\n\t\t[sortable]=\"true\"\r\n\t\t[resizable]=\"true\">\r\n\t\t<ng-template #dataTableCell let-item=\"item\">\r\n\t\t\t<span *ngIf=\"item.active\" class=\"badge-success\">\r\n\t\t\t\tActive\r\n\t\t\t</span>\r\n\t\t\t<span *ngIf=\"!item.active\" class=\"badge-danger\">\r\n\t\t\t\t\tIn-Active\r\n\t\t\t</span>\r\n\t\t</ng-template>\r\n\t</data-table-column>\r\n\t<data-table-column\r\n\t\t[property]=\"'active'\"\r\n\t\t[header]=\"'Actions'\"\r\n\t\t[resizable]=\"true\">\r\n\t\t<ng-template #dataTableCell let-item=\"item\">\r\n\t\t\t<!-- <button class=\"btn btn-outline-success btn-sm\"  title=\"Click to active\">\r\n\t\t\t\t<i class=\"fa fa-power-off\"></i>\r\n\t\t\t</button> -->\r\n\t\t\t<!-- <button *ngIf=\"item.active\" class=\"btn btn-danger btn-sm text-white\" (click)=\"doInactiveClass(item)\" title=\"Click to active the class\">\r\n\t\t\t\t\t<i class=\"fa fa-power-off\"></i>\r\n\t\t\t\t</button>\r\n\t\t\t\t<button *ngIf=\"!item.active\" class=\"btn btn-success btn-sm text-white\" (click)=\"doInactiveClass(item)\" title=\"Click to inactive the class\">\r\n\t\t\t\t\t<i class=\"fa fa-power-off\"></i>\r\n\t\t\t\t</button> -->\r\n\t\t\t<button class=\"btn btn-warning btn-sm text-white\" (click)=\"editClass(item)\" title=\"Edit this student\">\r\n\t\t\t\t<i class=\"fa fa-edit\"></i>\r\n\t\t\t</button>\r\n\t\t</ng-template>\r\n\t</data-table-column>\r\n\t\r\n</data-table>\r\n</div>\r\n<div class=\"mt-4\"></div>"

/***/ }),

/***/ "./src/app/main/classes/classes.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular5_data_table__ = __webpack_require__("./node_modules/angular5-data-table/esm5/angular5-data-table.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_progressbar__ = __webpack_require__("./node_modules/ngx-progressbar/modules/ngx-progressbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__ = __webpack_require__("./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_class_service__ = __webpack_require__("./src/app/services/class.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ClassesComponent = /** @class */ (function () {
    function ClassesComponent(classService, router, ngProgress, notif) {
        this.classService = classService;
        this.router = router;
        this.ngProgress = ngProgress;
        this.notif = notif;
        this.studentClasses = [];
        this.itemResource = new __WEBPACK_IMPORTED_MODULE_1_angular5_data_table__["b" /* DataTableResource */](this.studentClasses);
        this.items = [];
        this.itemCount = 0;
        this.params = { offset: 0, limit: 10 };
    }
    ClassesComponent.prototype.ngOnInit = function () {
        this.getClassData();
    };
    ClassesComponent.prototype.getClassData = function () {
        var _this = this;
        console.log("call Class service");
        this.ngProgress.start();
        this.classService
            .getClasses()
            .subscribe(function (result) {
            _this.studentClasses = result;
            //this.items = this.students;
            _this.itemResource = new __WEBPACK_IMPORTED_MODULE_1_angular5_data_table__["b" /* DataTableResource */](_this.studentClasses);
            _this.reloadItems(_this.params);
            _this.itemResource.count().then(function (count) { return _this.itemCount = count; });
            _this.ngProgress.done();
            if (_this.studentClasses.length == 0) {
                _this.notif.info("Information", "There are no Class details in the System.");
            }
        }, function (error) {
            console.log(error);
            _this.ngProgress.done();
            _this.notif.error("Failure", "While fetching Class details, please try again.");
        });
    };
    ClassesComponent.prototype.reloadItems = function (params) {
        var _this = this;
        console.log("reload");
        this.itemResource.query(params).then(function (items) { return _this.items = items; });
    };
    // special properties:
    ClassesComponent.prototype.rowClick = function (rowEvent) {
        console.log('Clicked: ' + rowEvent.row.item.name);
    };
    ClassesComponent.prototype.editClass = function (classd) {
        console.log('Clicked: ' + classd.name);
        this.classService.classData = classd;
        this.router.navigate(["/app/updateclass/" + classd.studentClassId]);
    };
    ClassesComponent.prototype.viewClass = function (classd) {
        console.log('Clicked: ' + classd.name);
        this.classService.classData = classd;
        this.router.navigate(["/app/classdetail/" + classd.studentClassId]);
    };
    ClassesComponent.prototype.doInactiveClass = function (classd) {
        console.log('Clicked: ' + classd.name);
    };
    ClassesComponent.prototype.rowDoubleClick = function (rowEvent) {
        alert('Double clicked: ' + rowEvent.row.item.name);
    };
    ClassesComponent.prototype.rowTooltip = function (item) {
        return item.name;
    };
    ClassesComponent.prototype.filterData = function (val) {
        this.searchClass = val;
        //console.log(val);
        if (val === '') {
            this.items = this.studentClasses;
            this.reloadItems(this.params);
        }
        // this.items.filter(val => this.items = val);
        this.items = this.studentClasses.filter(function (student) { return student.name.toLowerCase() === val.toLowerCase(); });
        //console.log(JSON.parse(this.students));
    };
    ClassesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/main/classes/classes.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_class_service__["a" /* ClassService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_progressbar__["a" /* NgProgress */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__["NotificationsService"]])
    ], ClassesComponent);
    return ClassesComponent;
}());



/***/ }),

/***/ "./src/app/main/classes/updateclass/updateclass.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"mt-2\">Update Class</h2>\r\n<ol class=\"breadcrumb-arrow\">\r\n\t<li><a [routerLink]=\"['/app/classes']\">Classes</a></li>\r\n\t<li class=\"active\"><span>{{studentClass.name}}</span></li>\r\n</ol>\r\n\r\n\r\n<div class=\" \">\r\n\t<nav>\r\n\t\t<div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\r\n\t\t\t<a class=\"nav-item nav-link active\" id=\"nav-home-tab\" data-toggle=\"tab\" data-target=\"#classinfo\" href=\"#\" role=\"tab\" aria-controls=\"categoryinfo\"\r\n\t\t\t aria-selected=\"true\">Class Info</a>\r\n\t\t\t <a class=\"nav-item nav-link\" id=\"nav-contact-tab\" data-toggle=\"tab\" data-target=\"#classstudents\" href=\"#\" role=\"tab\" aria-controls=\"catproducts\"\r\n\t\t\t aria-selected=\"false\">Students</a>\r\n\t\t</div>\r\n\t</nav>\r\n\t<div class=\"tab-content pt-md-4 pl-3\" id=\"nav-tabContent\">\r\n\t\t<div class=\"tab-pane fade show active\" id=\"classinfo\" role=\"tabpanel\" aria-labelledby=\"classinfo-tab\">\r\n\t\t\t<form (ngSubmit)=\"classForm.form.valid && updateClass();\" #classForm=\"ngForm\" novalidate>\r\n\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t<label class=\"col-sm-2 col-form-label\">Class Name</label>\r\n\t\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"studentClass.name\" #name=\"ngModel\" required\r\n\t\t\t\t\t\t [ngClass]=\"{'has-error': classForm.submitted && !name.valid}\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<!-- <div class=\"col-sm-2\">\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger btn-sm text-white ng-star-inserted\" (click)=\"doInactiveClass(studentClass)\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-power-off\"></i>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div> -->\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t<label class=\"col-sm-2 col-form-label\">Description</label>\r\n\t\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"description\" [(ngModel)]=\"studentClass.description\" #description=\"ngModel\" required\r\n\t\t\t\t\t\t [ngClass]=\"{'has-error': classForm.submitted && !description.valid}\">\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t<label for=\"inputPassword\" class=\"col-sm-2 col-form-label\">Active</label>\r\n\t\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t\t<select class=\"form-control\" name=\"active\" [(ngModel)]=\"studentClass.active\" #active=\"ngModel\" required\r\n\t\t\t\t\t\t[ngClass]=\"{'has-error': classForm.submitted && !active.valid}\">\r\n\t\t\t\t\t\t\t<option value=\"true\" selected=\"selected\">Yes</option>\r\n\t\t\t\t\t\t\t<option value=\"false\">No</option>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<button class=\"btn btn-bd-primary mb-4\">Update</button>\r\n\t\t\t\t<!-- <button type=\"button\" (click)=\"ClearAll(classForm)\" class=\"btn btn-outline-secondary mb-4\" >Reset</button> -->\r\n\t\t\t</form>\r\n\t\t</div>\r\n\t\t<div class=\"tab-pane fade\" id=\"classstudents\" role=\"tabpanel\" aria-labelledby=\"classstudents-tab\">\r\n\t\t\t<a class=\"btn btn-bd-primary btn-sm mb-4\" [routerLink]=\"['/app/addstudent']\">Add Student</a>\r\n\t\t\t<br/>\r\n\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t\t<data-table id=\"persons-grid\" class=\"table table-sm\"\r\n\t\t\t\t\t\t\theaderTitle=\"Students\"\r\n\t\t\t\t\t\t\t[limit]=\"10\"\r\n\t\t\t\t\t\t\t[items]=\"items\"\r\n\t\t\t\t\t\t\t[itemCount]=\"itemCount\"\r\n\t\t\t\t\t\t\t(reload)=\"reloadItems($event)\"\r\n\t\t\t\t\t\t\t[pagination] = \"true\"\r\n\t\t\t\t\t\t\t[rowTooltip]=\"rowTooltip\"\r\n\t\t\t\t\t\t\t[indexColumn] = \"false\"\r\n\t\t\t\t\t\t\t[substituteRows]=\"false\"\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t<data-table-column\r\n\t\t\t\t\t\t\t\t[property]=\"'studentId'\"\r\n\t\t\t\t\t\t\t\t[header]=\"'#'\"\r\n\t\t\t\t\t\t\t\t[width]=\"55\"\r\n\t\t\t\t\t\t\t\t[sortable]=\"true\"\r\n\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t</data-table-column>\r\n\t\t\t\t\t\t\t<data-table-column\r\n\t\t\t\t\t\t\t\t[property]=\"'name'\"\r\n\t\t\t\t\t\t\t\t[header]=\"'Student Name'\"\r\n\t\t\t\t\t\t\t\t[sortable]=\"true\"\r\n\t\t\t\t\t\t\t\t[resizable]=\"true\">\r\n\t\t\t\t\t\t\t\t<ng-template #dataTableCell let-item=\"item\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"javascript:(0)\" (click)=\"viewStudent(item)\">{{item.firstName + \" \" + item.lastName}}</a>\r\n\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t</data-table-column>\r\n\t\t\t\t\t\t\t<data-table-column\r\n\t\t\t\t\t\t\t\t[property]=\"'admissionno'\"\r\n\t\t\t\t\t\t\t\t[header]=\"'Admission No.'\"\r\n\t\t\t\t\t\t\t\t[sortable]=\"true\"\r\n\t\t\t\t\t\t\t\t[resizable]=\"true\">\r\n\t\t\t\t\t\t\t</data-table-column>\r\n\t\t\t\t\t\t\t<data-table-column\r\n\t\t\t\t\t\t\t\t[property]=\"'fathername'\"\r\n\t\t\t\t\t\t\t\t[header]=\"'Father Name'\"\r\n\t\t\t\t\t\t\t\t[sortable]=\"true\"\r\n\t\t\t\t\t\t\t\t[resizable]=\"true\">\r\n\t\t\t\t\t\t\t</data-table-column>\r\n\t\t\t\t\t\t\t<data-table-column\r\n\t\t\t\t\t\t\t\t[property]=\"'mothername'\"\r\n\t\t\t\t\t\t\t\t[header]=\"'Mother Name'\"\r\n\t\t\t\t\t\t\t\t[sortable]=\"true\"\r\n\t\t\t\t\t\t\t\t[resizable]=\"true\">\r\n\t\t\t\t\t\t\t</data-table-column>\r\n\t\t\t\t\t\t\t<data-table-column\r\n\t\t\t\t\t\t\t\t[property]=\"'active'\"\r\n\t\t\t\t\t\t\t\t[header]=\"'Actions'\"\r\n\t\t\t\t\t\t\t\t[resizable]=\"true\">\r\n\t\t\t\t\t\t\t\t<ng-template #dataTableCell let-item=\"item\">\r\n\t\t\t\t\t\t\t\t\t<!-- <button class=\"btn btn-outline-success btn-sm\"  title=\"Click to active\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-power-off\"></i>\r\n\t\t\t\t\t\t\t\t\t</button> -->\r\n\t\t\t\t\t\t\t\t\t<!-- <button class=\"btn btn-danger btn-sm text-white\" (click)=\"doInactiveStudent(item)\" title=\"Inactive this student\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-power-off\"></i>\r\n\t\t\t\t\t\t\t\t\t</button> -->\r\n\t\t\t\t\t\t\t\t\t<button class=\"btn btn-warning btn-sm text-white\" (click)=\"editStudent(item)\" title=\"Edit this student\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-edit\"></i>\r\n\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t</data-table-column>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t</data-table>\r\n\t\t\t\t\t</div>\r\n\t\t</div>\r\n\t\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/main/classes/updateclass/updateclass.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateClassComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_progressbar__ = __webpack_require__("./node_modules/ngx-progressbar/modules/ngx-progressbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__ = __webpack_require__("./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular5_data_table__ = __webpack_require__("./node_modules/angular5-data-table/esm5/angular5-data-table.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_studentclass__ = __webpack_require__("./src/app/models/studentclass.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_class_service__ = __webpack_require__("./src/app/services/class.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_student_service__ = __webpack_require__("./src/app/services/student.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UpdateClassComponent = /** @class */ (function () {
    function UpdateClassComponent(classService, notif, studentService, router, ngProgress, route) {
        var _this = this;
        this.classService = classService;
        this.notif = notif;
        this.studentService = studentService;
        this.router = router;
        this.ngProgress = ngProgress;
        this.route = route;
        this.studentClass = new __WEBPACK_IMPORTED_MODULE_5__models_studentclass__["a" /* StudentClass */]();
        this.students = [];
        this.itemResource = new __WEBPACK_IMPORTED_MODULE_4_angular5_data_table__["b" /* DataTableResource */](this.students);
        this.items = [];
        this.itemCount = 0;
        this.params = { offset: 0, limit: 10 };
        this.route.params.subscribe(function (params) {
            _this.index = params['id'];
        });
    }
    UpdateClassComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ngProgress.start();
        console.log(this.classService.classData);
        if (!this.classService.classData) {
            window.scroll(0, 0);
            this.classService
                .getClass(this.index)
                .subscribe(function (result) {
                if (result) {
                    _this.studentClass = result;
                    _this.showStudentDataGrid(result.students);
                }
                else {
                    _this.notif.info("Information", "No such record not found in the system, please try again.");
                }
                _this.ngProgress.done();
            }, function (error) {
                console.log(error);
                _this.ngProgress.done();
                _this.notif.error("Failure", "While fetching Class detail, please try again.");
            });
        }
        else {
            this.studentClass = this.classService.classData;
            this.showStudentDataGrid(this.studentClass.students);
            this.ngProgress.done();
        }
    };
    UpdateClassComponent.prototype.updateClass = function () {
        var _this = this;
        console.log("in Update student method" + JSON.stringify(this.studentClass));
        this.ngProgress.start();
        window.scroll(0, 0);
        this.classService
            .updateClass(this.studentClass)
            .subscribe(function (result) {
            //this.students = result;
            console.log(result);
            _this.ngProgress.done();
            _this.notif.success("Success", "Class details has been updated successfully.");
        }, function (error) {
            console.log(error);
            _this.ngProgress.done();
            _this.notif.error("Failure", "While updating the Class details, please try again.");
        });
    };
    UpdateClassComponent.prototype.ClearAll = function (form) {
        console.log("res");
        form.resetForm();
    };
    UpdateClassComponent.prototype.reloadItems = function (params) {
        var _this = this;
        console.log("reload");
        this.itemResource.query(params).then(function (items) { return _this.items = items; });
    };
    // special properties:
    UpdateClassComponent.prototype.rowClick = function (rowEvent) {
        console.log('Clicked: ' + rowEvent.row.item.name);
    };
    UpdateClassComponent.prototype.editStudent = function (student) {
        console.log('Clicked: ' + student.firstName);
        student.studentClass = this.studentClass;
        this.studentService.studentData = student;
        this.router.navigate(["/app/updatestudent/" + student.studentId]);
    };
    UpdateClassComponent.prototype.viewStudent = function (student) {
        console.log('Clicked: ' + student.firstName);
        student.studentClass = this.studentClass;
        this.studentService.studentData = student;
        this.router.navigate(["/app/studentdetail/" + student.studentId]);
    };
    UpdateClassComponent.prototype.doInactiveStudent = function (student) {
        console.log('Clicked: ' + student.firstName);
    };
    UpdateClassComponent.prototype.rowDoubleClick = function (rowEvent) {
        alert('Double clicked: ' + rowEvent.row.item.name);
    };
    UpdateClassComponent.prototype.rowTooltip = function (item) {
        return item.name;
    };
    UpdateClassComponent.prototype.showStudentDataGrid = function (students) {
        var _this = this;
        this.students = students;
        this.itemResource = new __WEBPACK_IMPORTED_MODULE_4_angular5_data_table__["b" /* DataTableResource */](students);
        this.reloadItems(this.params);
        this.itemResource.count().then(function (count) { return _this.itemCount = count; });
    };
    UpdateClassComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/main/classes/updateclass/updateclass.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__services_class_service__["a" /* ClassService */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["NotificationsService"],
            __WEBPACK_IMPORTED_MODULE_7__services_student_service__["a" /* StudentService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_progressbar__["a" /* NgProgress */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], UpdateClassComponent);
    return UpdateClassComponent;
}());



/***/ }),

/***/ "./src/app/main/classfee/addclassfee/addclassfee.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"mt-2\">Add Class Fee </h2>\r\n<ol class=\"breadcrumb-arrow\">\r\n\t<li><a [routerLink]=\"['/app/classfee']\">Class Fee</a></li>\r\n\t<li class=\"active\"><span>Add Class Fee</span></li>\r\n</ol>\r\n\r\n\r\n<div class=\" \">\r\n\t<nav>\r\n\t\t<div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\r\n\t\t\t<a class=\"nav-item nav-link active\" id=\"nav-home-tab\" data-toggle=\"tab\" data-target=\"#classfee\" href=\"#\" role=\"tab\" aria-controls=\"categoryinfo\"\r\n\t\t\t aria-selected=\"true\">Class Fee Info</a>\r\n\t\t</div>\r\n\t</nav>\r\n\t<div class=\"tab-content pt-md-4 pl-3\" id=\"nav-tabContent\">\r\n\t\t<div class=\"tab-pane fade show active\" id=\"classfee\" role=\"tabpanel\" aria-labelledby=\"classinfo-tab\">\r\n\t\t\t<div class=\"col-md-10 alert alert-danger\" role=\"alert\" *ngIf=\"(!classFeeForm.valid)\">\r\n\t\t\t\tPlease fill in the highlighted fields.\r\n\t\t\t</div>\r\n\t\t\t<form [formGroup]=\"classFeeForm\" (ngSubmit)=\"addClassFee(classFeeForm);\" novalidate>\r\n\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Class Fee Name</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"name\" required\r\n\t\t\t\t\t [ngClass]=\"{'has-error': !classFeeForm.controls.name.valid}\" >\r\n\t\t\t\t\t <!-- <small *ngIf=\"!classFeeForm.controls.name.valid\" class=\"text-danger\">\r\n\t\t\t\t\t\t\tName is required (minimum 5 characters).\r\n\t\t\t\t\t</small> -->\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Description</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"description\" required\r\n\t\t\t\t\t [ngClass]=\"{'has-error': !classFeeForm.controls.description.valid}\" >\r\n\t\t\t\t</div>\r\n\t\t\t\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t<label class=\"col-sm-2 col-form-label\">Start Date</label>\r\n\t\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"startDate\" required\r\n\t\t\t\t\t\t [ngClass]=\"{'has-error': !classFeeForm.controls.startDate.valid}\" placeholder=\"DD/MM/YYYY\" mask='00/00/0000'>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<label class=\"col-sm-2 col-form-label\">End Data</label>\r\n\t\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"endDate\" required \r\n\t\t\t\t\t\t[ngClass]=\"{'has-error': !classFeeForm.controls.endDate.valid}\" placeholder=\"DD/MM/YYYY\" mask='00/00/0000'/>\r\n\t\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div formArrayName=\"classFeeParams\">\r\n\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t<label class=\"col-sm-2 col-form-label\">Fee Param(s)</label>\r\n\t\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<span class=\"btn btn-success btn-sm text-white\" (click)=\"addFeeParams()\" style=\"cursor: default\">\r\n\t\t\t\t\t\t\tAdd Fee Params <i class=\"fa fa-plus\"></i>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</div>\r\n\t\t\t\t</div> \r\n\t\t\t\t<div *ngFor=\"let feeparam of classFeeForm.controls.classFeeParams.controls; let i=index\">\r\n\t\t\t\t\t\t<!-- Angular assigns array index as group name by default 0, 1, 2, ... -->\r\n\t\t\t\t\t\t<div [formGroupName]=\"i\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"col-sm-2 col-form-label\">{{i+1}} : Fee Type</label>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t\t\t\t\t\t <!-- <input type=\"text\" formControlName=\"classFeeParamsId\"/> -->\r\n\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\" formControlName=\"classFeeType\" required\r\n\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{'has-error': !classFeeForm.controls.classFeeParams.controls[i].controls.classFeeType.valid}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t <option *ngFor=\"let feetype of classFeeTypes\" [ngValue]=\"feetype\">{{feetype.name}}</option>\r\n\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t <label class=\"col-form-label\">Frequency :  {{displayFrequency(classFeeForm.controls.classFeeParams.controls[i].controls.classFeeType)}}</label> \r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<label class=\"col-sm-2 col-form-label\">Fee Amount</label>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-2\">\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\" formControlName=\"feeAmount\" required \r\n\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{'has-error': !classFeeForm.controls.classFeeParams.controls[i].controls.feeAmount.valid}\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-1\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"btn btn-danger btn-sm text-white\"  *ngIf=\"classFeeForm.controls.classFeeParams.controls.length > 1\" (click)=\"removeFeeParams(i)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-minus\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t\r\n\r\n\t\t\t<button type=\"submit\" class=\"btn btn-bd-primary mb-4\" >Save</button>\r\n\t\t\t<button type=\"button\" (click)=\"ClearAll()\" class=\"btn btn-outline-secondary mb-4\" >Reset</button>\r\n\t\t</form>\r\n\t\t</div>\r\n\t\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/main/classfee/addclassfee/addclassfee.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddClassFeeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_progressbar__ = __webpack_require__("./node_modules/ngx-progressbar/modules/ngx-progressbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__ = __webpack_require__("./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_classfee_service__ = __webpack_require__("./src/app/services/classfee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_classfee__ = __webpack_require__("./src/app/models/classfee.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_feetype_service__ = __webpack_require__("./src/app/services/feetype.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AddClassFeeComponent = /** @class */ (function () {
    function AddClassFeeComponent(classFeeService, router, ngProgress, notif, _fb, feeTypeService) {
        this.classFeeService = classFeeService;
        this.router = router;
        this.ngProgress = ngProgress;
        this.notif = notif;
        this._fb = _fb;
        this.feeTypeService = feeTypeService;
        this.classFee = new __WEBPACK_IMPORTED_MODULE_6__models_classfee__["a" /* ClassFee */]();
        this.classFeeTypes = [];
    }
    AddClassFeeComponent.prototype.ngOnInit = function () {
        this.getFeeTypeData();
        this.classFeeForm = this._fb.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].minLength(5)]],
            description: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]],
            startDate: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]],
            endDate: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]],
            classFeeParams: this._fb.array([
                this.initAddFeeParams(),
            ])
        });
    };
    AddClassFeeComponent.prototype.getFeeTypeData = function () {
        var _this = this;
        console.log("call Class service");
        this.ngProgress.start();
        this.feeTypeService
            .getFeeTypes()
            .subscribe(function (result) {
            _this.classFeeTypes = result;
            _this.ngProgress.done();
            if (_this.classFeeTypes.length == 0) {
                _this.notif.info("Information", "There are no Fee Type in the System.");
            }
        }, function (error) {
            console.log(error);
            _this.ngProgress.done();
            _this.notif.error("Failure", "While fetching Fee Type details, please try again.");
        });
    };
    AddClassFeeComponent.prototype.initAddFeeParams = function () {
        // initialize our address
        return this._fb.group({
            // classFeeParamsId : [1],
            classFeeType: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required],
            feeAmount: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]
        });
    };
    AddClassFeeComponent.prototype.addFeeParams = function () {
        // add address to the list
        var control = this.classFeeForm.controls['classFeeParams'];
        control.push(this.initAddFeeParams());
    };
    AddClassFeeComponent.prototype.removeFeeParams = function (i) {
        // remove address from the list
        var control = this.classFeeForm.controls['classFeeParams'];
        control.removeAt(i);
    };
    AddClassFeeComponent.prototype.addClassFee = function (model) {
        var _this = this;
        if (this.classFeeForm.valid) {
            console.log("in add addClassFee method" + JSON.stringify(this.classFee));
            console.log(model);
            //this.classFee = model;
            this.classFee.name = model.controls.name.value;
            this.classFee.startDate = model.controls.startDate.value;
            this.classFee.endDate = model.controls.endDate.value;
            this.classFee.description = model.controls.description.value;
            this.classFee.classFeeParams = model.controls.classFeeParams.value;
            this.ngProgress.start();
            window.scroll(0, 0);
            this.classFeeService
                .addClassFee(this.classFee)
                .subscribe(function (result) {
                //this.students = result;
                console.log(result);
                _this.ngProgress.done();
                _this.notif.success("Success", "Class Fee details has been saved successfully.");
            }, function (error) {
                console.log(error);
                _this.ngProgress.done();
                _this.notif.error("Failure", "While saving the Class Fee details, please try again.");
            });
        }
    };
    AddClassFeeComponent.prototype.ClearAll = function () {
        if (this.classFeeForm.valid) {
            this.classFeeForm.reset();
        }
    };
    AddClassFeeComponent.prototype.displayFrequency = function (model) {
        if (model.value)
            return this.feeTypeService.displayFrequency(model.value.frequency);
        else
            return '';
    };
    AddClassFeeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/main/classfee/addclassfee/addclassfee.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_classfee_service__["a" /* ClassFeeService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_progressbar__["a" /* NgProgress */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__["NotificationsService"],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_7__services_feetype_service__["a" /* FeeTypeService */]])
    ], AddClassFeeComponent);
    return AddClassFeeComponent;
}());



/***/ }),

/***/ "./src/app/main/classfee/classfee.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"mt-2\">Class Fee</h2>\r\n<hr/>\r\n<a class=\"btn btn-bd-primary btn-sm mb-4\" [routerLink]=\"['/app/addclassfee']\">Add New Class Fee</a>\r\n<!-- <div class=\"form-group row\">\r\n\t<div class=\"col-sm-6 input-group\">\r\n\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Please type here to search...\" aria-describedby=\"basic-addon2\"\r\n\t\t\t #searchVal (keyup)=\"filterData(searchVal.value)\">\r\n\t\t\t<div class=\"input-group-append\">\r\n\t\t\t  <span class=\"input-group-text\" id=\"basic-addon2\"><i class=\"fa fa-search\"></i></span>\r\n\t\t\t  \r\n\t\t\t</div>\r\n\t</div>\r\n\t<div class=\"col-sm-2\">\r\n\t\t<button class=\"btn btn-outline-secondary\">Remove Filter</button>\r\n\t</div>\r\n</div> -->\r\n<div class=\"table-responsive\">\r\n<data-table id=\"persons-grid\" class=\"table table-sm\"\r\n\theaderTitle=\"Classes\"\r\n\t[limit]=\"10\"\r\n\t[items]=\"items\"\r\n\t[itemCount]=\"itemCount\"\r\n\t(reload)=\"reloadItems($event)\"\r\n\t[pagination] = \"true\"\r\n\t[rowTooltip]=\"rowTooltip\"\r\n\t[indexColumn] = \"false\"\r\n\t[substituteRows]=\"false\"\r\n\t\r\n\t>\r\n\t<data-table-column\r\n\t\t[property]=\"'classFeeId'\"\r\n\t\t[header]=\"'#'\"\r\n\t\t[width]=\"55\"\r\n\t\t[sortable]=\"true\"\r\n\t\t>\r\n\t</data-table-column>\r\n\t<data-table-column\r\n\t\t[property]=\"'name'\"\r\n\t\t[header]=\"'Class Fee Name'\"\r\n\t\t[sortable]=\"true\"\r\n\t\t[resizable]=\"true\">\r\n\t\t<ng-template #dataTableCell let-item=\"item\">\r\n\t\t\t<a href=\"javascript:(0)\" (click)=\"viewClass(item)\">{{item.name}}</a>\r\n\t\t</ng-template>\r\n\t</data-table-column>\r\n\t<data-table-column\r\n\t\t[property]=\"'description'\"\r\n\t\t[header]=\"'Class Fee Description'\"\r\n\t\t[sortable]=\"true\"\r\n\t\t[resizable]=\"true\">\r\n\t</data-table-column>\r\n\t<data-table-column\r\n\t\t[property]=\"'startDate'\"\r\n\t\t[header]=\"'Start Date'\"\r\n\t\t[sortable]=\"true\"\r\n\t\t[resizable]=\"true\">\r\n\t\t<ng-template #dataTableCell let-item=\"item\">\r\n\t\t\t{{item.startDate | date :'dd/MM/yyyy'}}\r\n\t\t</ng-template>\r\n\t</data-table-column>\r\n\t<data-table-column\r\n\t\t[property]=\"'endDate'\"\r\n\t\t[header]=\"'End Date'\"\r\n\t\t[sortable]=\"true\"\r\n\t\t[resizable]=\"true\">\r\n\t\t<ng-template #dataTableCell let-item=\"item\">\r\n\t\t\t{{item.endDate | date :'dd/MM/yyyy'}}\r\n\t\t</ng-template>\r\n\t</data-table-column>\r\n\t<data-table-column\r\n\t\t[property]=\"'active'\"\r\n\t\t[header]=\"'Actions'\"\r\n\t\t[resizable]=\"true\">\r\n\t\t<ng-template #dataTableCell let-item=\"item\">\r\n\t\t\t<!-- <button class=\"btn btn-outline-success btn-sm\"  title=\"Click to active\">\r\n\t\t\t\t<i class=\"fa fa-power-off\"></i>\r\n\t\t\t</button> -->\r\n\t\t\t<!-- <button *ngIf=\"item.active\" class=\"btn btn-danger btn-sm text-white\" (click)=\"doInactiveClass(item)\" title=\"Click to active the class\">\r\n\t\t\t\t\t<i class=\"fa fa-power-off\"></i>\r\n\t\t\t\t</button>\r\n\t\t\t\t<button *ngIf=\"!item.active\" class=\"btn btn-success btn-sm text-white\" (click)=\"doInactiveClass(item)\" title=\"Click to inactive the class\">\r\n\t\t\t\t\t<i class=\"fa fa-power-off\"></i>\r\n\t\t\t\t</button> -->\r\n\t\t\t<button class=\"btn btn-warning btn-sm text-white\" (click)=\"editClass(item)\" title=\"Edit this student\">\r\n\t\t\t\t<i class=\"fa fa-edit\"></i>\r\n\t\t\t</button>\r\n\t\t</ng-template>\r\n\t</data-table-column>\r\n\t\r\n</data-table>\r\n</div>\r\n<div class=\"mt-4\"></div>"

/***/ }),

/***/ "./src/app/main/classfee/classfee.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassFeeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular5_data_table__ = __webpack_require__("./node_modules/angular5-data-table/esm5/angular5-data-table.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_progressbar__ = __webpack_require__("./node_modules/ngx-progressbar/modules/ngx-progressbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__ = __webpack_require__("./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_classfee_service__ = __webpack_require__("./src/app/services/classfee.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ClassFeeComponent = /** @class */ (function () {
    function ClassFeeComponent(classFeeService, router, ngProgress, notif) {
        this.classFeeService = classFeeService;
        this.router = router;
        this.ngProgress = ngProgress;
        this.notif = notif;
        this.classFees = [];
        this.itemResource = new __WEBPACK_IMPORTED_MODULE_1_angular5_data_table__["b" /* DataTableResource */](this.classFees);
        this.items = [];
        this.itemCount = 0;
        this.params = { offset: 0, limit: 10 };
    }
    ClassFeeComponent.prototype.ngOnInit = function () {
        this.getClassData();
    };
    ClassFeeComponent.prototype.getClassData = function () {
        var _this = this;
        console.log("call Class service");
        this.ngProgress.start();
        this.classFeeService
            .getclassFees()
            .subscribe(function (result) {
            _this.classFees = result;
            console.log("Fee for Class ----> " + JSON.stringify(_this.classFees));
            //this.items = this.students;
            _this.itemResource = new __WEBPACK_IMPORTED_MODULE_1_angular5_data_table__["b" /* DataTableResource */](_this.classFees);
            _this.reloadItems(_this.params);
            _this.itemResource.count().then(function (count) { return _this.itemCount = count; });
            _this.ngProgress.done();
            if (_this.classFees.length == 0) {
                _this.notif.info("Information", "There are no Class Fee in the System.");
            }
        }, function (error) {
            console.log(error);
            _this.ngProgress.done();
            _this.notif.error("Failure", "While fetching Class Fee details, please try again.");
        });
    };
    ClassFeeComponent.prototype.reloadItems = function (params) {
        var _this = this;
        console.log("reload");
        this.itemResource.query(params).then(function (items) { return _this.items = items; });
    };
    // special properties:
    ClassFeeComponent.prototype.rowClick = function (rowEvent) {
        console.log('Clicked: ' + rowEvent.row.item.name);
    };
    ClassFeeComponent.prototype.editClass = function (classFee) {
        console.log('Clicked: ' + classFee.name);
        this.classFeeService.classFee = classFee;
        this.router.navigate(["/app/updateclassfee/" + classFee.classFeeId]);
    };
    ClassFeeComponent.prototype.viewClass = function (classFee) {
        console.log('Clicked: ' + classFee.name);
        this.classFeeService.classFee = classFee;
        this.router.navigate(["/app/classfeedetail/" + classFee.classFeeId]);
    };
    ClassFeeComponent.prototype.doInactiveClass = function (classFee) {
        console.log('Clicked: ' + classFee.name);
    };
    ClassFeeComponent.prototype.rowDoubleClick = function (rowEvent) {
        alert('Double clicked: ' + rowEvent.row.item.name);
    };
    ClassFeeComponent.prototype.rowTooltip = function (item) {
        return item.name;
    };
    ClassFeeComponent.prototype.filterData = function (val) {
        this.searchClass = val;
        //console.log(val);
        if (val === '') {
            this.items = this.classFees;
            this.reloadItems(this.params);
        }
        // this.items.filter(val => this.items = val);
        this.items = this.classFees.filter(function (student) { return student.name.toLowerCase() === val.toLowerCase(); });
        //console.log(JSON.parse(this.students));
    };
    ClassFeeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/main/classfee/classfee.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_classfee_service__["a" /* ClassFeeService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_progressbar__["a" /* NgProgress */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__["NotificationsService"]])
    ], ClassFeeComponent);
    return ClassFeeComponent;
}());



/***/ }),

/***/ "./src/app/main/classfee/classfeedetail/classfeedetail.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"mt-2\">Class Fee Detail</h2>\r\n<ol class=\"breadcrumb-arrow\">\r\n\t<li><a [routerLink]=\"['/app/classfee']\">Class Fee</a></li>\r\n\t<li class=\"active\"><span>{{classFee.name}}</span></li>\r\n</ol>\r\n\r\n\r\n<div class=\" \">\r\n\t<nav>\r\n\t\t<div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\r\n\t\t\t<a class=\"nav-item nav-link active\" id=\"nav-home-tab\" data-toggle=\"tab\" data-target=\"#classfee\" href=\"#\" role=\"tab\" aria-controls=\"categoryinfo\"\r\n\t\t\t aria-selected=\"true\">Class Fee Info</a>\r\n\t\t</div>\r\n\t</nav>\r\n\t<div class=\"tab-content pt-md-4 pl-3\" id=\"nav-tabContent\">\r\n\t\t<div class=\"tab-pane fade show active\" id=\"classfee\" role=\"tabpanel\" aria-labelledby=\"classinfo-tab\">\r\n\t\t\t<form [formGroup]=\"classFeeForm\" novalidate>\r\n\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Class Fee Name</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<input type=\"text\"class=\"form-control-plaintext\" formControlName=\"name\" required\r\n\t\t\t\t\t >\r\n\t\t\t\t\t <!-- <small *ngIf=\"!classFeeForm.controls.name.valid\" class=\"text-danger\">\r\n\t\t\t\t\t\t\tName is required (minimum 5 characters).\r\n\t\t\t\t\t</small> -->\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Description</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control-plaintext\" formControlName=\"description\" required\r\n\t\t\t\t\t >\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-sm-2\">\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-warning btn-sm text-white ng-star-inserted\" (click)=\"editClassFee(classFee)\">\r\n\t\t\t\t\t\t<i class=\"fa fa-edit\"></i>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t<label class=\"col-sm-2 col-form-label\">Start Date</label>\r\n\t\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control-plaintext\" formControlName=\"startDate\" required\r\n\t\t\t\t\t\t  placeholder=\"DD/MM/YYYY\" mask='00/00/0000'>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<label class=\"col-sm-2 col-form-label\">End Data</label>\r\n\t\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control-plaintext\" formControlName=\"endDate\" required \r\n\t\t\t\t\t\t placeholder=\"DD/MM/YYYY\" mask='00/00/0000'/>\r\n\t\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div formArrayName=\"classFeeParams\">\r\n\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t<label class=\"col-sm-2 col-form-label\">Fee Param(s)</label>\r\n\t\t\t\t\t<!-- <div class=\"col-sm-3\">\r\n\t\t\t\t\t\t<span class=\"btn btn-success btn-sm text-white\" (click)=\"addFeeParams()\" style=\"cursor: default\">\r\n\t\t\t\t\t\t\t\tAdd Fee Params <i class=\"fa fa-plus\"></i>\r\n\t\t\t\t\t\t</span>\r\n\t\t\t\t\t</div> -->\r\n\t\t\t\t</div> \r\n\t\t\t\t<div *ngFor=\"let feeparam of classFeeForm.controls.classFeeParams.controls; let i=index\">\r\n\t\t\t\t\t\t<div [formGroupName]=\"i\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"col-sm-2 col-form-label\">{{i+1}} : Fee Type</label>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t\t\t\t<select class=\"form-control-plaintext\" formControlName=\"classFeeType\" required\r\n\t\t\t\t\t\t\t\t\t\t[compareWith]=\"fnCompareFeeType\" >\r\n\t\t\t\t\t\t\t\t\t\t\t\t <option *ngFor=\"let feetype of classFeeTypes\" [ngValue]=\"feetype\">{{feetype.name}}</option>\r\n\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t <label class=\"col-form-label\">Frequency : {{feeTypeService.displayFrequency(classFeeForm.controls.classFeeParams.controls[i].controls.classFeeType.value.frequency)}}</label> \r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<label class=\"col-sm-2 col-form-label\">Fee Amount</label>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-2\">\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control-plaintext\" formControlName=\"feeAmount\" required \r\n\t\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<!-- <div class=\"col-sm-1\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"btn btn-danger btn-sm text-white\"  *ngIf=\"classFeeForm.controls.classFeeParams.controls.length > 1\" (click)=\"removeFeeParams(i)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-minus\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div> \r\n\t\t\t</div>\r\n\t\t\t\r\n\r\n\t\t\t<!-- <button class=\"btn btn-bd-primary mb-4\" [disabled]=\"!classFeeForm.valid\">Save</button> -->\r\n\t\t\t<!-- <button type=\"button\" (click)=\"ClearAll(classFeeForm)\" class=\"btn btn-outline-secondary mb-4\" >Reset</button> -->\r\n\t\t</form>\r\n\t\t</div>\r\n\t\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/main/classfee/classfeedetail/classfeedetail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassFeeDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_progressbar__ = __webpack_require__("./node_modules/ngx-progressbar/modules/ngx-progressbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__ = __webpack_require__("./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_classfee_service__ = __webpack_require__("./src/app/services/classfee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_classfee__ = __webpack_require__("./src/app/models/classfee.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_feetype_service__ = __webpack_require__("./src/app/services/feetype.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ClassFeeDetailComponent = /** @class */ (function () {
    function ClassFeeDetailComponent(classFeeService, router, ngProgress, notif, _fb, feeTypeService, route) {
        var _this = this;
        this.classFeeService = classFeeService;
        this.router = router;
        this.ngProgress = ngProgress;
        this.notif = notif;
        this._fb = _fb;
        this.feeTypeService = feeTypeService;
        this.route = route;
        this.classFee = new __WEBPACK_IMPORTED_MODULE_6__models_classfee__["a" /* ClassFee */]();
        this.classFeeTypes = [];
        this.route.params.subscribe(function (params) {
            _this.indexVal = params['id'];
        });
    }
    ClassFeeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.classFeeForm = this._fb.group({
            name: [{ value: '', disabled: true }, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].minLength(5)]],
            description: [{ value: '', disabled: true }, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required]],
            startDate: [{ value: '', disabled: true }, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required]],
            endDate: [{ value: '', disabled: true }, [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required]],
            classFeeParams: this._fb.array([])
        });
        this.getFeeTypeData();
        this.ngProgress.start();
        console.log(this.classFeeService.classFee);
        if (!this.classFeeService.classFee) {
            window.scroll(0, 0);
            this.classFeeService
                .getClassFee(this.indexVal)
                .subscribe(function (result) {
                if (result) {
                    _this.classFee = result;
                    _this.setFormControlsValues();
                }
                else {
                    _this.notif.info("Information", "No such record not found in the system, please try again.");
                }
                _this.ngProgress.done();
            }, function (error) {
                console.log(error);
                _this.ngProgress.done();
                _this.notif.error("Failure", "While fetching Student detail, please try again.");
            });
        }
        else {
            this.classFee = this.classFeeService.classFee;
            this.setFormControlsValues();
            this.ngProgress.done();
        }
    };
    ClassFeeDetailComponent.prototype.setFormControlsValues = function () {
        var _this = this;
        this.classFee.classFeeParams.forEach(function (element) {
            _this.addFeeParams();
        });
        this.classFeeForm.patchValue(this.classFee);
    };
    ClassFeeDetailComponent.prototype.getFeeTypeData = function () {
        var _this = this;
        console.log("call Class service");
        this.ngProgress.start();
        this.feeTypeService
            .getFeeTypes()
            .subscribe(function (result) {
            _this.classFeeTypes = result;
            _this.ngProgress.done();
            if (_this.classFeeTypes.length == 0) {
                _this.notif.info("Information", "There are no Fee Type in the System.");
            }
        }, function (error) {
            console.log(error);
            _this.ngProgress.done();
            _this.notif.error("Failure", "While fetching Fee Type details, please try again.");
        });
    };
    ClassFeeDetailComponent.prototype.initAddFeeParams = function () {
        // initialize our address
        return this._fb.group({
            classFeeParamsId: [{ value: '', disabled: true }],
            classFeeType: [{ value: '', disabled: true }, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required],
            feeAmount: [{ value: '', disabled: true }, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required]
        });
    };
    ClassFeeDetailComponent.prototype.addFeeParams = function () {
        // add address to the list
        var control = this.classFeeForm.controls['classFeeParams'];
        control.push(this.initAddFeeParams());
    };
    ClassFeeDetailComponent.prototype.removeFeeParams = function (i) {
        // remove address from the list
        var control = this.classFeeForm.controls['classFeeParams'];
        control.removeAt(i);
    };
    ClassFeeDetailComponent.prototype.editClassFee = function (classFee) {
        console.log('Clicked: ' + classFee.name);
        this.classFeeService.classFee = classFee;
        this.router.navigate(["/app/updateclassfee/" + classFee.classFeeId]);
    };
    ClassFeeDetailComponent.prototype.ClearAll = function (form) {
        console.log("res");
        form.resetForm();
    };
    ClassFeeDetailComponent.prototype.fnCompareFeeType = function (a, b) {
        return a && b && a.classFeeTypeId == b.classFeeTypeId;
    };
    ClassFeeDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/main/classfee/classfeedetail/classfeedetail.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_classfee_service__["a" /* ClassFeeService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_progressbar__["a" /* NgProgress */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__["NotificationsService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_7__services_feetype_service__["a" /* FeeTypeService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], ClassFeeDetailComponent);
    return ClassFeeDetailComponent;
}());



/***/ }),

/***/ "./src/app/main/classfee/updateclassfee/updateclassfee.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"mt-2\">Update Class Fee</h2>\r\n<ol class=\"breadcrumb-arrow\">\r\n\t<li><a [routerLink]=\"['/app/classfee']\">Class Fee</a></li>\r\n\t<li class=\"active\"><span>{{classFee.name}}</span></li>\r\n</ol>\r\n\r\n\r\n<div class=\" \">\r\n\t<nav>\r\n\t\t<div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\r\n\t\t\t<a class=\"nav-item nav-link active\" id=\"nav-home-tab\" data-toggle=\"tab\" data-target=\"#classfee\" href=\"#\" role=\"tab\" aria-controls=\"categoryinfo\"\r\n\t\t\t aria-selected=\"true\">Class Fee Info</a>\r\n\t\t</div>\r\n\t</nav>\r\n\t<div class=\"tab-content pt-md-4 pl-3\" id=\"nav-tabContent\">\r\n\t\t<div class=\"tab-pane fade show active\" id=\"classfee\" role=\"tabpanel\" aria-labelledby=\"classinfo-tab\">\r\n\t\t\t<div class=\"col-md-10 alert alert-danger\" role=\"alert\" *ngIf=\"(!classFeeForm.valid)\">\r\n\t\t\t\tPlease fill in the highlighted fields.\r\n\t\t\t</div>\r\n\t\t\t<form [formGroup]=\"classFeeForm\" novalidate (ngSubmit)=\"updateClassFee(classFeeForm);\">\r\n\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Class Fee Name</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"name\" required\r\n\t\t\t\t\t [ngClass]=\"{'has-error': !classFeeForm.controls.name.valid}\" >\r\n\t\t\t\t\t <!-- <small *ngIf=\"!classFeeForm.controls.name.valid\" class=\"text-danger\">\r\n\t\t\t\t\t\t\tName is required (minimum 5 characters).\r\n\t\t\t\t\t</small> -->\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Description</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"description\" required\r\n\t\t\t\t\t [ngClass]=\"{'has-error': !classFeeForm.controls.description.valid}\" >\r\n\t\t\t\t</div>\r\n\t\t\t\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t<label class=\"col-sm-2 col-form-label\">Start Date</label>\r\n\t\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"startDate\" required\r\n\t\t\t\t\t\t [ngClass]=\"{'has-error': !classFeeForm.controls.startDate.valid}\" placeholder=\"DD/MM/YYYY\" mask='00/00/0000'>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<label class=\"col-sm-2 col-form-label\">End Data</label>\r\n\t\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" formControlName=\"endDate\" required \r\n\t\t\t\t\t\t[ngClass]=\"{'has-error': !classFeeForm.controls.endDate.valid}\" placeholder=\"DD/MM/YYYY\" mask='00/00/0000'/>\r\n\t\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div formArrayName=\"classFeeParams\">\r\n\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t<label class=\"col-sm-2 col-form-label\">Fee Param(s)</label>\r\n\t\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<span class=\"btn btn-success btn-sm text-white\" (click)=\"addFeeParams()\" style=\"cursor: default\">\r\n\t\t\t\t\t\t\tAdd Fee Params <i class=\"fa fa-plus\"></i>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</div>\r\n\t\t\t\t</div> \r\n\t\t\t\t<div *ngFor=\"let feeparam of classFeeForm.controls.classFeeParams.controls; let i=index\">\r\n\t\t\t\t\t\t<div [formGroupName]=\"i\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"col-sm-2 col-form-label\">{{i+1}} : Fee Type</label>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\" formControlName=\"classFeeType\" required\r\n\t\t\t\t\t\t\t\t\t\t[compareWith]=\"fnCompareFeeType\" [ngClass]=\"{'has-error': !classFeeForm.controls.classFeeParams.controls[i].controls.classFeeType.valid}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t <option *ngFor=\"let feetype of classFeeTypes\" [ngValue]=\"feetype\">{{feetype.name}}</option>\r\n\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t <label class=\"col-form-label\">Frequency :  {{feeTypeService.displayFrequency(classFeeForm.controls.classFeeParams.controls[i].controls.classFeeType.value.frequency)}}</label> \r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<label class=\"col-sm-2 col-form-label\">Fee Amount</label>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-2\">\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"number\" class=\"form-control\" formControlName=\"feeAmount\" required \r\n\t\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{'has-error': !classFeeForm.controls.classFeeParams.controls[i].controls.feeAmount.valid}\">\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-1\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"btn btn-danger btn-sm text-white\"  *ngIf=\"classFeeForm.controls.classFeeParams.controls.length > 1\" (click)=\"removeFeeParams(i)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-minus\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div> \r\n\t\t\t</div>\r\n\t\t\t\r\n\r\n\t\t\t <button type=\"submit\" class=\"btn btn-bd-primary mb-4\">Save</button>\r\n\t\t\t<!-- <button type=\"button\" (click)=\"ClearAll(classFeeForm)\" class=\"btn btn-outline-secondary mb-4\" >Reset</button> -->\r\n\t\t</form>\r\n\t\t</div>\r\n\t\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/main/classfee/updateclassfee/updateclassfee.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateClassFeeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_progressbar__ = __webpack_require__("./node_modules/ngx-progressbar/modules/ngx-progressbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__ = __webpack_require__("./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_classfee_service__ = __webpack_require__("./src/app/services/classfee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_classfee__ = __webpack_require__("./src/app/models/classfee.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_feetype_service__ = __webpack_require__("./src/app/services/feetype.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UpdateClassFeeComponent = /** @class */ (function () {
    function UpdateClassFeeComponent(classFeeService, router, ngProgress, notif, _fb, feeTypeService, route) {
        var _this = this;
        this.classFeeService = classFeeService;
        this.router = router;
        this.ngProgress = ngProgress;
        this.notif = notif;
        this._fb = _fb;
        this.feeTypeService = feeTypeService;
        this.route = route;
        this.classFee = new __WEBPACK_IMPORTED_MODULE_6__models_classfee__["a" /* ClassFee */]();
        this.classFeeTypes = [];
        this.route.params.subscribe(function (params) {
            _this.indexVal = params['id'];
        });
    }
    UpdateClassFeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.classFeeForm = this._fb.group({
            name: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].minLength(5)]],
            description: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required]],
            startDate: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required]],
            endDate: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required]],
            classFeeParams: this._fb.array([])
        });
        this.getFeeTypeData();
        this.ngProgress.start();
        console.log(this.classFeeService.classFee);
        if (!this.classFeeService.classFee) {
            window.scroll(0, 0);
            this.classFeeService
                .getClassFee(this.indexVal)
                .subscribe(function (result) {
                if (result) {
                    _this.classFee = result;
                    _this.setFormControlsValues();
                }
                else {
                    _this.notif.info("Information", "No such record not found in the system, please try again.");
                }
                _this.ngProgress.done();
            }, function (error) {
                console.log(error);
                _this.ngProgress.done();
                _this.notif.error("Failure", "While fetching Student detail, please try again.");
            });
        }
        else {
            this.classFee = this.classFeeService.classFee;
            this.setFormControlsValues();
            this.ngProgress.done();
        }
    };
    UpdateClassFeeComponent.prototype.setFormControlsValues = function () {
        var _this = this;
        this.classFee.classFeeParams.forEach(function (element) {
            _this.addFeeParams();
        });
        this.classFeeForm.patchValue(this.classFee);
    };
    UpdateClassFeeComponent.prototype.getFeeTypeData = function () {
        var _this = this;
        console.log("call Class service");
        this.ngProgress.start();
        this.feeTypeService
            .getFeeTypes()
            .subscribe(function (result) {
            _this.classFeeTypes = result;
            _this.ngProgress.done();
            if (_this.classFeeTypes.length == 0) {
                _this.notif.info("Information", "There are no Fee Type in the System.");
            }
        }, function (error) {
            console.log(error);
            _this.ngProgress.done();
            _this.notif.error("Failure", "While fetching Fee Type details, please try again.");
        });
    };
    UpdateClassFeeComponent.prototype.initAddFeeParams = function () {
        // initialize our address
        return this._fb.group({
            classFeeParamsId: [''],
            classFeeType: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required],
            feeAmount: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required]
        });
    };
    UpdateClassFeeComponent.prototype.addFeeParams = function () {
        // add address to the list
        var control = this.classFeeForm.controls['classFeeParams'];
        control.push(this.initAddFeeParams());
    };
    UpdateClassFeeComponent.prototype.removeFeeParams = function (i) {
        // remove address from the list
        var control = this.classFeeForm.controls['classFeeParams'];
        control.removeAt(i);
    };
    UpdateClassFeeComponent.prototype.editClassFee = function (classFee) {
        console.log('Clicked: ' + classFee.name);
        this.classFeeService.classFee = classFee;
        this.router.navigate(["/app/updateclassfee/" + classFee.classFeeId]);
    };
    UpdateClassFeeComponent.prototype.ClearAll = function (form) {
        console.log("res");
        form.resetForm();
    };
    UpdateClassFeeComponent.prototype.fnCompareFeeType = function (a, b) {
        return a && b && a.classFeeTypeId == b.classFeeTypeId;
    };
    UpdateClassFeeComponent.prototype.updateClassFee = function (model) {
        var _this = this;
        if (this.classFeeForm.valid) {
            console.log("in add UpdateFeeTypeComponent method" + JSON.stringify(this.classFee));
            console.log(model);
            //this.classFee = model;
            this.classFee.name = model.controls.name.value;
            this.classFee.startDate = model.controls.startDate.value;
            this.classFee.endDate = model.controls.endDate.value;
            this.classFee.description = model.controls.description.value;
            this.classFee.classFeeParams = model.controls.classFeeParams.value;
            this.ngProgress.start();
            window.scroll(0, 0);
            this.classFeeService
                .updateClassFee(this.classFee)
                .subscribe(function (result) {
                //this.students = result;
                console.log(result);
                _this.ngProgress.done();
                _this.notif.success("Success", "Class Fee details has been saved successfully.");
            }, function (error) {
                console.log(error);
                _this.ngProgress.done();
                _this.notif.error("Failure", "While saving the Class Fee details, please try again.");
            });
        }
    };
    UpdateClassFeeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/main/classfee/updateclassfee/updateclassfee.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_classfee_service__["a" /* ClassFeeService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_progressbar__["a" /* NgProgress */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__["NotificationsService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_7__services_feetype_service__["a" /* FeeTypeService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], UpdateClassFeeComponent);
    return UpdateClassFeeComponent;
}());



/***/ }),

/***/ "./src/app/main/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h1 class=\"mt-2\">Welcome to Student Fee Management System</h1>\r\n<hr/>\r\n<h3>Please use left side navigation</h3>\r\n\r\n<!-- <div class=\"row mt-4\">\r\n\t<div class=\"col-xl-3 col-sm-6 mb-3\">\r\n\t\t<div class=\"card text-white bg-primary o-hidden h-100\">\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<div class=\"card-body-icon\">\r\n\t\t\t\t\t<i class=\"fa fa-fw fa-comments\"></i>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"mr-5\">26 New Messages!</div>\r\n\t\t\t</div>\r\n\t\t\t<a class=\"card-footer text-white clearfix small z-1\" href=\"#\">\r\n\t\t\t\t<span class=\"float-left\">View Details</span>\r\n\t\t\t\t<span class=\"float-right\">\r\n                <i class=\"fa fa-angle-right\"></i>\r\n              </span>\r\n\t\t\t</a>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"col-xl-3 col-sm-6 mb-3\">\r\n\t\t<div class=\"card text-white bg-warning o-hidden h-100\">\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<div class=\"card-body-icon\">\r\n\t\t\t\t\t<i class=\"fa fa-fw fa-list\"></i>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"mr-5\">11 New Tasks!</div>\r\n\t\t\t</div>\r\n\t\t\t<a class=\"card-footer text-white clearfix small z-1\" href=\"#\">\r\n\t\t\t\t<span class=\"float-left\">View Details</span>\r\n\t\t\t\t<span class=\"float-right\">\r\n                <i class=\"fa fa-angle-right\"></i>\r\n              </span>\r\n\t\t\t</a>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"col-xl-3 col-sm-6 mb-3\">\r\n\t\t<div class=\"card text-white bg-success o-hidden h-100\">\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<div class=\"card-body-icon\">\r\n\t\t\t\t\t<i class=\"fa fa-fw fa-shopping-cart\"></i>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"mr-5\">123 New Orders!</div>\r\n\t\t\t</div>\r\n\t\t\t<a class=\"card-footer text-white clearfix small z-1\" href=\"#\">\r\n\t\t\t\t<span class=\"float-left\">View Details</span>\r\n\t\t\t\t<span class=\"float-right\">\r\n                <i class=\"fa fa-angle-right\"></i>\r\n              </span>\r\n\t\t\t</a>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"col-xl-3 col-sm-6 mb-3\">\r\n\t\t<div class=\"card text-white bg-danger o-hidden h-100\">\r\n\t\t\t<div class=\"card-body\">\r\n\t\t\t\t<div class=\"card-body-icon\">\r\n\t\t\t\t\t<i class=\"fa fa-fw fa-support\"></i>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"mr-5\">13 New Tickets!</div>\r\n\t\t\t</div>\r\n\t\t\t<a class=\"card-footer text-white clearfix small z-1\" href=\"#\">\r\n\t\t\t\t<span class=\"float-left\">View Details</span>\r\n\t\t\t\t<span class=\"float-right\">\r\n                <i class=\"fa fa-angle-right\"></i>\r\n              </span>\r\n\t\t\t</a>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<div class=\"card mb-3\">\r\n\t<div class=\"card-header\">\r\n\t\t<i class=\"fa fa-table\"></i> Data Table Example</div>\r\n\t<div class=\"card-body\">\r\n\t\t<div class=\"table-responsive\">\r\n\t\t\t<div id=\"dataTable_wrapper\" class=\"dataTables_wrapper container-fluid dt-bootstrap4\">\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-sm-12 col-md-6\">\r\n\t\t\t\t\t\t<div class=\"dataTables_length\" id=\"dataTable_length\"><label>Show <select name=\"dataTable_length\" aria-controls=\"dataTable\" class=\"form-control form-control-sm\"><option value=\"10\">10</option><option value=\"25\">25</option><option value=\"50\">50</option><option value=\"100\">100</option></select> entries</label></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-sm-12 col-md-6\">\r\n\t\t\t\t\t\t<div id=\"dataTable_filter\" class=\"dataTables_filter\"><label>Search:<input type=\"search\" class=\"form-control form-control-sm\" placeholder=\"\" aria-controls=\"dataTable\"></label></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-sm-12\">\r\n\t\t\t\t\t\t<table class=\"table table-bordered dataTable\" id=\"dataTable\" width=\"100%\" cellspacing=\"0\" role=\"grid\" aria-describedby=\"dataTable_info\"\r\n\t\t\t\t\t\t style=\"width: 100%;\">\r\n\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t<tr role=\"row\">\r\n\t\t\t\t\t\t\t\t\t<th class=\"sorting_asc\" tabindex=\"0\" aria-controls=\"dataTable\" rowspan=\"1\" colspan=\"1\" aria-sort=\"ascending\" aria-label=\"Name: activate to sort column descending\"\r\n\t\t\t\t\t\t\t\t\t style=\"width: 137px;\">Name</th>\r\n\t\t\t\t\t\t\t\t\t<th class=\"sorting\" tabindex=\"0\" aria-controls=\"dataTable\" rowspan=\"1\" colspan=\"1\" aria-label=\"Position: activate to sort column ascending\"\r\n\t\t\t\t\t\t\t\t\t style=\"width: 214px;\">Position</th>\r\n\t\t\t\t\t\t\t\t\t<th class=\"sorting\" tabindex=\"0\" aria-controls=\"dataTable\" rowspan=\"1\" colspan=\"1\" aria-label=\"Office: activate to sort column ascending\"\r\n\t\t\t\t\t\t\t\t\t style=\"width: 97px;\">Office</th>\r\n\t\t\t\t\t\t\t\t\t<th class=\"sorting\" tabindex=\"0\" aria-controls=\"dataTable\" rowspan=\"1\" colspan=\"1\" aria-label=\"Age: activate to sort column ascending\"\r\n\t\t\t\t\t\t\t\t\t style=\"width: 42px;\">Age</th>\r\n\t\t\t\t\t\t\t\t\t<th class=\"sorting\" tabindex=\"0\" aria-controls=\"dataTable\" rowspan=\"1\" colspan=\"1\" aria-label=\"Start date: activate to sort column ascending\"\r\n\t\t\t\t\t\t\t\t\t style=\"width: 93px;\">Start date</th>\r\n\t\t\t\t\t\t\t\t\t<th class=\"sorting\" tabindex=\"0\" aria-controls=\"dataTable\" rowspan=\"1\" colspan=\"1\" aria-label=\"Salary: activate to sort column ascending\"\r\n\t\t\t\t\t\t\t\t\t style=\"width: 74px;\">Salary</th>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t<tfoot>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<th rowspan=\"1\" colspan=\"1\">Name</th>\r\n\t\t\t\t\t\t\t\t\t<th rowspan=\"1\" colspan=\"1\">Position</th>\r\n\t\t\t\t\t\t\t\t\t<th rowspan=\"1\" colspan=\"1\">Office</th>\r\n\t\t\t\t\t\t\t\t\t<th rowspan=\"1\" colspan=\"1\">Age</th>\r\n\t\t\t\t\t\t\t\t\t<th rowspan=\"1\" colspan=\"1\">Start date</th>\r\n\t\t\t\t\t\t\t\t\t<th rowspan=\"1\" colspan=\"1\">Salary</th>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</tfoot>\r\n\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t<tr role=\"row\" class=\"odd\">\r\n\t\t\t\t\t\t\t\t\t<td class=\"sorting_1\">Airi Satou</td>\r\n\t\t\t\t\t\t\t\t\t<td>Accountant</td>\r\n\t\t\t\t\t\t\t\t\t<td>Tokyo</td>\r\n\t\t\t\t\t\t\t\t\t<td>33</td>\r\n\t\t\t\t\t\t\t\t\t<td>2008/11/28</td>\r\n\t\t\t\t\t\t\t\t\t<td>$162,700</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t<tr role=\"row\" class=\"even\">\r\n\t\t\t\t\t\t\t\t\t<td class=\"sorting_1\">Angelica Ramos</td>\r\n\t\t\t\t\t\t\t\t\t<td>Chief Executive Officer (CEO)</td>\r\n\t\t\t\t\t\t\t\t\t<td>London</td>\r\n\t\t\t\t\t\t\t\t\t<td>47</td>\r\n\t\t\t\t\t\t\t\t\t<td>2009/10/09</td>\r\n\t\t\t\t\t\t\t\t\t<td>$1,200,000</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t<tr role=\"row\" class=\"odd\">\r\n\t\t\t\t\t\t\t\t\t<td class=\"sorting_1\">Ashton Cox</td>\r\n\t\t\t\t\t\t\t\t\t<td>Junior Technical Author</td>\r\n\t\t\t\t\t\t\t\t\t<td>San Francisco</td>\r\n\t\t\t\t\t\t\t\t\t<td>66</td>\r\n\t\t\t\t\t\t\t\t\t<td>2009/01/12</td>\r\n\t\t\t\t\t\t\t\t\t<td>$86,000</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t<tr role=\"row\" class=\"even\">\r\n\t\t\t\t\t\t\t\t\t<td class=\"sorting_1\">Bradley Greer</td>\r\n\t\t\t\t\t\t\t\t\t<td>Software Engineer</td>\r\n\t\t\t\t\t\t\t\t\t<td>London</td>\r\n\t\t\t\t\t\t\t\t\t<td>41</td>\r\n\t\t\t\t\t\t\t\t\t<td>2012/10/13</td>\r\n\t\t\t\t\t\t\t\t\t<td>$132,000</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t<tr role=\"row\" class=\"odd\">\r\n\t\t\t\t\t\t\t\t\t<td class=\"sorting_1\">Brenden Wagner</td>\r\n\t\t\t\t\t\t\t\t\t<td>Software Engineer</td>\r\n\t\t\t\t\t\t\t\t\t<td>San Francisco</td>\r\n\t\t\t\t\t\t\t\t\t<td>28</td>\r\n\t\t\t\t\t\t\t\t\t<td>2011/06/07</td>\r\n\t\t\t\t\t\t\t\t\t<td>$206,850</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t<tr role=\"row\" class=\"even\">\r\n\t\t\t\t\t\t\t\t\t<td class=\"sorting_1\">Brielle Williamson</td>\r\n\t\t\t\t\t\t\t\t\t<td>Integration Specialist</td>\r\n\t\t\t\t\t\t\t\t\t<td>New York</td>\r\n\t\t\t\t\t\t\t\t\t<td>61</td>\r\n\t\t\t\t\t\t\t\t\t<td>2012/12/02</td>\r\n\t\t\t\t\t\t\t\t\t<td>$372,000</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t<tr role=\"row\" class=\"odd\">\r\n\t\t\t\t\t\t\t\t\t<td class=\"sorting_1\">Bruno Nash</td>\r\n\t\t\t\t\t\t\t\t\t<td>Software Engineer</td>\r\n\t\t\t\t\t\t\t\t\t<td>London</td>\r\n\t\t\t\t\t\t\t\t\t<td>38</td>\r\n\t\t\t\t\t\t\t\t\t<td>2011/05/03</td>\r\n\t\t\t\t\t\t\t\t\t<td>$163,500</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t<tr role=\"row\" class=\"even\">\r\n\t\t\t\t\t\t\t\t\t<td class=\"sorting_1\">Caesar Vance</td>\r\n\t\t\t\t\t\t\t\t\t<td>Pre-Sales Support</td>\r\n\t\t\t\t\t\t\t\t\t<td>New York</td>\r\n\t\t\t\t\t\t\t\t\t<td>21</td>\r\n\t\t\t\t\t\t\t\t\t<td>2011/12/12</td>\r\n\t\t\t\t\t\t\t\t\t<td>$106,450</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t<tr role=\"row\" class=\"odd\">\r\n\t\t\t\t\t\t\t\t\t<td class=\"sorting_1\">Cara Stevens</td>\r\n\t\t\t\t\t\t\t\t\t<td>Sales Assistant</td>\r\n\t\t\t\t\t\t\t\t\t<td>New York</td>\r\n\t\t\t\t\t\t\t\t\t<td>46</td>\r\n\t\t\t\t\t\t\t\t\t<td>2011/12/06</td>\r\n\t\t\t\t\t\t\t\t\t<td>$145,600</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t<tr role=\"row\" class=\"even\">\r\n\t\t\t\t\t\t\t\t\t<td class=\"sorting_1\">Cedric Kelly</td>\r\n\t\t\t\t\t\t\t\t\t<td>Senior Javascript Developer</td>\r\n\t\t\t\t\t\t\t\t\t<td>Edinburgh</td>\r\n\t\t\t\t\t\t\t\t\t<td>22</td>\r\n\t\t\t\t\t\t\t\t\t<td>2012/03/29</td>\r\n\t\t\t\t\t\t\t\t\t<td>$433,060</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</tbody>\r\n\t\t\t\t\t\t</table>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t<div class=\"col-sm-12 col-md-5\">\r\n\t\t\t\t\t\t<div class=\"dataTables_info\" id=\"dataTable_info\" role=\"status\" aria-live=\"polite\">Showing 1 to 10 of 57 entries</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"col-sm-12 col-md-7\">\r\n\t\t\t\t\t\t<div class=\"dataTables_paginate paging_simple_numbers\" id=\"dataTable_paginate\">\r\n\t\t\t\t\t\t\t<ul class=\"pagination\">\r\n\t\t\t\t\t\t\t\t<li class=\"paginate_button page-item previous disabled\" id=\"dataTable_previous\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" aria-controls=\"dataTable\" data-dt-idx=\"0\" tabindex=\"0\" class=\"page-link\">Previous</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li class=\"paginate_button page-item active\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" aria-controls=\"dataTable\" data-dt-idx=\"1\" tabindex=\"0\" class=\"page-link\">1</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li class=\"paginate_button page-item \">\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" aria-controls=\"dataTable\" data-dt-idx=\"2\" tabindex=\"0\" class=\"page-link\">2</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li class=\"paginate_button page-item \">\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" aria-controls=\"dataTable\" data-dt-idx=\"3\" tabindex=\"0\" class=\"page-link\">3</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li class=\"paginate_button page-item \">\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" aria-controls=\"dataTable\" data-dt-idx=\"4\" tabindex=\"0\" class=\"page-link\">4</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li class=\"paginate_button page-item \">\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" aria-controls=\"dataTable\" data-dt-idx=\"5\" tabindex=\"0\" class=\"page-link\">5</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li class=\"paginate_button page-item \">\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" aria-controls=\"dataTable\" data-dt-idx=\"6\" tabindex=\"0\" class=\"page-link\">6</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t<li class=\"paginate_button page-item next\" id=\"dataTable_next\">\r\n\t\t\t\t\t\t\t\t\t<a href=\"#\" aria-controls=\"dataTable\" data-dt-idx=\"7\" tabindex=\"0\" class=\"page-link\">Next</a>\r\n\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"card-footer small text-muted\">Updated yesterday at 11:59 PM</div>\r\n</div> -->\r\n"

/***/ }),

/***/ "./src/app/main/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/main/dashboard/dashboard.component.html")
        })
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/main/feetype/addfeetype/addfeetype.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"mt-2\">Add Fee Type</h2>\r\n<ol class=\"breadcrumb-arrow\">\r\n\t<li><a [routerLink]=\"['/app/feetype']\">Fee Type</a></li>\r\n\t<li class=\"active\"><span>Add Fee Type</span></li>\r\n</ol>\r\n\r\n\r\n<div class=\" \">\r\n\t<nav>\r\n\t\t<div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\r\n\t\t\t<a class=\"nav-item nav-link active\" id=\"nav-home-tab\" data-toggle=\"tab\" data-target=\"#feetypeinfo\" href=\"#\" role=\"tab\" aria-controls=\"categoryinfo\"\r\n\t\t\t aria-selected=\"true\">Fee Type Info</a>\r\n\t\t</div>\r\n\t</nav>\r\n\t<div class=\"tab-content pt-md-4 pl-3\" id=\"nav-tabContent\">\r\n\t\t<div class=\"tab-pane fade show active\" id=\"feetypeinfo\" role=\"tabpanel\" aria-labelledby=\"classinfo-tab\">\r\n\t\t\t<div class=\"col-md-10 alert alert-danger\" role=\"alert\" *ngIf=\"(classFeeTypeForm.submitted && !classFeeTypeForm.valid)\">\r\n\t\t\t\tPlease fill in the highlighted fields.\r\n\t\t\t</div>\r\n\t\t\t<form (ngSubmit)=\"classFeeTypeForm.form.valid && addClass();\" #classFeeTypeForm=\"ngForm\" novalidate>\r\n\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Fee Type Name</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"classFeeType.name\" #name=\"ngModel\" required\r\n\t\t\t\t\t [ngClass]=\"{'has-error': classFeeTypeForm.submitted && !name.valid}\" >\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Description</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"description\" [(ngModel)]=\"classFeeType.description\" #description=\"ngModel\" required \r\n\t\t\t\t\t[ngClass]=\"{'has-error': classFeeTypeForm.submitted && !description.valid}\"/>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t<label for=\"inputPassword\" class=\"col-sm-2 col-form-label\">Frequency</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<!-- <select class=\"form-control\" name=\"frequency\" [(ngModel)]=\"classFeeType.frequency\" #frequency=\"ngModel\" required\r\n\t\t\t\t\t[ngClass]=\"{'has-error': classFeeTypeForm.submitted && !frequency.valid}\" >\r\n\t\t\t\t\t\t\t<option value=\"Y\">Yearly</option>\r\n\t\t\t\t\t\t\t<option value=\"M\">Monthly</option>\r\n\t\t\t\t\t\t\t<option value=\"OT\">One Time</option>\r\n\t\t\t\t\t\t\t<option value=\"PT\">Per Term</option>\r\n\t\t\t\t\t\t\t<option value=\"PF\">Per Family</option>\r\n\t\t\t\t\t</select> -->\r\n\t\t\t\t\t<select class=\"form-control\" name=\"frequency\" [(ngModel)]=\"classFeeType.frequency\" #frequency=\"ngModel\" required\r\n\t\t\t\t\t[ngClass]=\"{'has-error': classFeeTypeForm.submitted && !frequency.valid}\" >\r\n\t\t\t\t\t <option *ngFor=\"let freq of frequencies\" [ngValue]=\"freq.id\">{{freq.name}}</option>\r\n\t\t\t\t\t </select>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<button class=\"btn btn-bd-primary mb-4\">Save</button>\r\n\t\t\t<button type=\"button\" (click)=\"ClearAll(classFeeTypeForm)\" class=\"btn btn-outline-secondary mb-4\" >Reset</button>\r\n\t\t</form>\r\n\t\t</div>\r\n\t\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/main/feetype/addfeetype/addfeetype.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddFeeTypeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_progressbar__ = __webpack_require__("./node_modules/ngx-progressbar/modules/ngx-progressbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__ = __webpack_require__("./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_feetype_service__ = __webpack_require__("./src/app/services/feetype.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_classfeetype__ = __webpack_require__("./src/app/models/classfeetype.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_frequencymeta__ = __webpack_require__("./src/app/models/frequencymeta.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AddFeeTypeComponent = /** @class */ (function () {
    function AddFeeTypeComponent(feeTypeService, router, ngProgress, notif) {
        this.feeTypeService = feeTypeService;
        this.router = router;
        this.ngProgress = ngProgress;
        this.notif = notif;
        this.classFeeType = new __WEBPACK_IMPORTED_MODULE_5__models_classfeetype__["a" /* ClassFeeType */]();
        this.frequencies = __WEBPACK_IMPORTED_MODULE_6__models_frequencymeta__["a" /* Frequencies */];
    }
    AddFeeTypeComponent.prototype.ngOnInit = function () { };
    AddFeeTypeComponent.prototype.addClass = function () {
        var _this = this;
        console.log("in add AddFeeTypeComponent method" + JSON.stringify(this.classFeeType));
        this.ngProgress.start();
        window.scroll(0, 0);
        this.feeTypeService
            .addFeeType(this.classFeeType)
            .subscribe(function (result) {
            //this.students = result;
            console.log(result);
            _this.ngProgress.done();
            _this.notif.success("Success", "Fee Type details has been saved successfully.");
        }, function (error) {
            console.log(error);
            _this.ngProgress.done();
            _this.notif.error("Failure", "While saving the Fee Type details, please try again.");
        });
    };
    AddFeeTypeComponent.prototype.ClearAll = function (form) {
        console.log("res");
        form.resetForm();
    };
    AddFeeTypeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/main/feetype/addfeetype/addfeetype.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_feetype_service__["a" /* FeeTypeService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_progressbar__["a" /* NgProgress */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["NotificationsService"]])
    ], AddFeeTypeComponent);
    return AddFeeTypeComponent;
}());



/***/ }),

/***/ "./src/app/main/feetype/feetype.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"mt-2\">Fee Type</h2>\r\n<hr/>\r\n<a class=\"btn btn-bd-primary btn-sm mb-4\" [routerLink]=\"['/app/addfeetype']\">Add New Fee Type</a>\r\n<!-- <div class=\"form-group row\">\r\n\t<div class=\"col-sm-6 input-group\">\r\n\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Please type here to search...\" aria-describedby=\"basic-addon2\"\r\n\t\t\t #searchVal (keyup)=\"filterData(searchVal.value)\">\r\n\t\t\t<div class=\"input-group-append\">\r\n\t\t\t  <span class=\"input-group-text\" id=\"basic-addon2\"><i class=\"fa fa-search\"></i></span>\r\n\t\t\t  \r\n\t\t\t</div>\r\n\t</div>\r\n\t<div class=\"col-sm-2\">\r\n\t\t<button class=\"btn btn-outline-secondary\">Remove Filter</button>\r\n\t</div>\r\n</div> -->\r\n\t\r\n<div class=\"table-responsive\">\r\n<data-table id=\"persons-grid\" class=\"table table-sm\"\r\n\theaderTitle=\"Classes\"\r\n\t[limit]=\"10\"\r\n\t[items]=\"items\"\r\n\t[itemCount]=\"itemCount\"\r\n\t(reload)=\"reloadItems($event)\"\r\n\t[pagination] = \"true\"\r\n\t[rowTooltip]=\"rowTooltip\"\r\n\t[indexColumn] = \"false\"\r\n\t[substituteRows]=\"false\"\r\n\t\r\n\t>\r\n\t<data-table-column\r\n\t\t[property]=\"'classFeeTypeId'\"\r\n\t\t[header]=\"'#'\"\r\n\t\t[width]=\"55\"\r\n\t\t[sortable]=\"true\"\r\n\t\t>\r\n\t</data-table-column>\r\n\t<data-table-column\r\n\t\t[property]=\"'name'\"\r\n\t\t[header]=\"'Fee Type Name'\"\r\n\t\t[sortable]=\"true\"\r\n\t\t[resizable]=\"true\">\r\n\t\t<ng-template #dataTableCell let-item=\"item\">\r\n\t\t\t<a href=\"javascript:(0)\" (click)=\"viewClass(item)\">{{item.name}}</a>\r\n\t\t</ng-template>\r\n\t</data-table-column>\r\n\t<data-table-column\r\n\t\t[property]=\"'description'\"\r\n\t\t[header]=\"'Fee Type Description'\"\r\n\t\t[sortable]=\"true\"\r\n\t\t[resizable]=\"true\">\r\n\t</data-table-column>\r\n\t<data-table-column\r\n\t\t[property]=\"'frequency'\"\r\n\t\t[header]=\"'Frequency'\"\r\n\t\t[sortable]=\"true\"\r\n\t\t[resizable]=\"true\">\r\n\t\t<ng-template #dataTableCell let-item=\"item\">\r\n\t\t\t{{feeTypeService.displayFrequency(item.frequency)}}\r\n\t\t</ng-template>\r\n\t</data-table-column>\r\n\t<data-table-column\r\n\t\t[property]=\"'active'\"\r\n\t\t[header]=\"'Actions'\"\r\n\t\t[resizable]=\"true\">\r\n\t\t<ng-template #dataTableCell let-item=\"item\">\r\n\t\t\t<!-- <button class=\"btn btn-outline-success btn-sm\"  title=\"Click to active\">\r\n\t\t\t\t<i class=\"fa fa-power-off\"></i>\r\n\t\t\t</button> -->\r\n\t\t\t<!-- <button *ngIf=\"item.active\" class=\"btn btn-danger btn-sm text-white\" (click)=\"doInactiveClass(item)\" title=\"Click to active the class\">\r\n\t\t\t\t\t<i class=\"fa fa-power-off\"></i>\r\n\t\t\t\t</button>\r\n\t\t\t\t<button *ngIf=\"!item.active\" class=\"btn btn-success btn-sm text-white\" (click)=\"doInactiveClass(item)\" title=\"Click to inactive the class\">\r\n\t\t\t\t\t<i class=\"fa fa-power-off\"></i>\r\n\t\t\t\t</button> -->\r\n\t\t\t<button class=\"btn btn-warning btn-sm text-white\" (click)=\"editClass(item)\" title=\"Edit this student\">\r\n\t\t\t\t<i class=\"fa fa-edit\"></i>\r\n\t\t\t</button>\r\n\t\t</ng-template>\r\n\t</data-table-column>\r\n\t\r\n</data-table>\r\n</div>\r\n<div class=\"mt-4\"></div>"

/***/ }),

/***/ "./src/app/main/feetype/feetype.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeeTypeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular5_data_table__ = __webpack_require__("./node_modules/angular5-data-table/esm5/angular5-data-table.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_progressbar__ = __webpack_require__("./node_modules/ngx-progressbar/modules/ngx-progressbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__ = __webpack_require__("./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_feetype_service__ = __webpack_require__("./src/app/services/feetype.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_classfeetype__ = __webpack_require__("./src/app/models/classfeetype.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FeeTypeComponent = /** @class */ (function () {
    function FeeTypeComponent(feeTypeService, router, ngProgress, notif) {
        this.feeTypeService = feeTypeService;
        this.router = router;
        this.ngProgress = ngProgress;
        this.notif = notif;
        this.classFeeTypes = [];
        this.itemResource = new __WEBPACK_IMPORTED_MODULE_1_angular5_data_table__["b" /* DataTableResource */](this.classFeeTypes);
        this.items = [];
        this.itemCount = 0;
        this.params = { offset: 0, limit: 10 };
    }
    FeeTypeComponent.prototype.ngOnInit = function () {
        this.getClassData();
    };
    FeeTypeComponent.prototype.getClassData = function () {
        var _this = this;
        console.log("call Class service");
        this.ngProgress.start();
        this.feeTypeService
            .getFeeTypes()
            .subscribe(function (result) {
            _this.classFeeTypes = result;
            //this.items = this.students;
            _this.itemResource = new __WEBPACK_IMPORTED_MODULE_1_angular5_data_table__["b" /* DataTableResource */](_this.classFeeTypes);
            _this.reloadItems(_this.params);
            _this.itemResource.count().then(function (count) { return _this.itemCount = count; });
            _this.ngProgress.done();
            if (_this.classFeeTypes.length == 0) {
                _this.notif.info("Information", "There are no Fee Type in the System.");
            }
        }, function (error) {
            console.log(error);
            _this.ngProgress.done();
            _this.notif.error("Failure", "While fetching Fee Type details, please try again.");
        });
    };
    FeeTypeComponent.prototype.reloadItems = function (params) {
        var _this = this;
        console.log("reload");
        this.itemResource.query(params).then(function (items) { return _this.items = items; });
    };
    // special properties:
    FeeTypeComponent.prototype.rowClick = function (rowEvent) {
        console.log('Clicked: ' + rowEvent.row.item.name);
    };
    FeeTypeComponent.prototype.editClass = function (classFeeType) {
        console.log('Clicked: ' + classFeeType.name);
        this.feeTypeService.feeType = classFeeType;
        this.router.navigate(["/app/updatefeetype/" + classFeeType.classFeeTypeId]);
    };
    FeeTypeComponent.prototype.viewClass = function (classFeeType) {
        console.log('Clicked: ' + __WEBPACK_IMPORTED_MODULE_6__models_classfeetype__["a" /* ClassFeeType */].name);
        this.feeTypeService.feeType = classFeeType;
        this.router.navigate(["/app/feetypedetail/" + classFeeType.classFeeTypeId]);
    };
    FeeTypeComponent.prototype.doInactiveClass = function (classFeeType) {
        console.log('Clicked: ' + classFeeType.name);
    };
    FeeTypeComponent.prototype.rowDoubleClick = function (rowEvent) {
        alert('Double clicked: ' + rowEvent.row.item.name);
    };
    FeeTypeComponent.prototype.rowTooltip = function (item) {
        return item.name;
    };
    FeeTypeComponent.prototype.filterData = function (val) {
        this.searchClass = val;
        //console.log(val);
        if (val === '') {
            this.items = this.classFeeTypes;
            this.reloadItems(this.params);
        }
        // this.items.filter(val => this.items = val);
        this.items = this.classFeeTypes.filter(function (student) { return student.name.toLowerCase() === val.toLowerCase(); });
        //console.log(JSON.parse(this.students));
    };
    FeeTypeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/main/feetype/feetype.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_feetype_service__["a" /* FeeTypeService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_progressbar__["a" /* NgProgress */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__["NotificationsService"]])
    ], FeeTypeComponent);
    return FeeTypeComponent;
}());



/***/ }),

/***/ "./src/app/main/feetype/feetypedetail/feetypedetail.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"mt-2\">Fee Type Detail</h2>\r\n<ol class=\"breadcrumb-arrow\">\r\n\t<li><a [routerLink]=\"['/app/feetype']\">Fee Type</a></li>\r\n\t<li class=\"active\"><span>{{classFeeType.name}}</span></li>\r\n</ol>\r\n\r\n\r\n<div class=\" \">\r\n\t<nav>\r\n\t\t<div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\r\n\t\t\t<a class=\"nav-item nav-link active\" id=\"nav-home-tab\" data-toggle=\"tab\" data-target=\"#feetypeinfo\" href=\"#\" role=\"tab\" aria-controls=\"categoryinfo\"\r\n\t\t\t aria-selected=\"true\">Fee Type Info</a>\r\n\t\t</div>\r\n\t</nav>\r\n\t<div class=\"tab-content pt-md-4 pl-3\" id=\"nav-tabContent\">\r\n\t\t<div class=\"tab-pane fade show active\" id=\"feetypeinfo\" role=\"tabpanel\" aria-labelledby=\"classinfo-tab\">\r\n\t\t\t<div class=\"col-md-10 alert alert-danger\" role=\"alert\" *ngIf=\"(classFeeTypeForm.submitted && !classFeeTypeForm.valid)\">\r\n\t\t\t\tPlease fill in the highlighted fields.\r\n\t\t\t</div>\r\n\t\t\t<form (ngSubmit)=\"classFeeTypeForm.form.valid\" #classFeeTypeForm=\"ngForm\" novalidate>\r\n\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Fee Type Name</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control-plaintext\" disabled name=\"name\" [(ngModel)]=\"classFeeType.name\" #name=\"ngModel\" required\r\n\t\t\t\t\t [ngClass]=\"{'has-error': classFeeTypeForm.submitted && !name.valid}\" >\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-sm-2\">\r\n\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-warning btn-sm text-white ng-star-inserted\" (click)=\"editFeeType(classFeeType)\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-edit\"></i>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Description</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control-plaintext\" disabled name=\"description\" [(ngModel)]=\"classFeeType.description\" #description=\"ngModel\" required \r\n\t\t\t\t\t[ngClass]=\"{'has-error': classFeeTypeForm.submitted && !description.valid}\"/>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t<label for=\"inputPassword\" class=\"col-sm-2 col-form-label\">Frequency</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<!-- <select class=\"form-control-plaintext\" disabled name=\"frequency\" [(ngModel)]=\"classFeeType.frequency\" #frequency=\"ngModel\" required\r\n\t\t\t\t\t[ngClass]=\"{'has-error': classFeeTypeForm.submitted && !frequency.valid}\" >\r\n\t\t\t\t\t\t<option value=\"Y\">Yearly</option>\r\n\t\t\t\t\t\t<option value=\"M\">Monthly</option>\r\n\t\t\t\t\t\t<option value=\"OT\">One Time</option>\r\n\t\t\t\t\t\t<option value=\"PT\">Per Term</option>\r\n\t\t\t\t\t\t<option value=\"PF\">Per Family</option>\r\n\t\t\t\t\t</select> -->\r\n\t\t\t\t\t<select class=\"form-control-plaintext\" disabled name=\"frequency\" [(ngModel)]=\"classFeeType.frequency\" #frequency=\"ngModel\" required\r\n\t\t\t\t\t\t[ngClass]=\"{'has-error': classFeeTypeForm.submitted && !frequency.valid}\" >\r\n\t\t\t\t\t \t\t<option *ngFor=\"let freq of frequencies\" [ngValue]=\"freq.id\">{{freq.name}}</option>\r\n\t\t\t\t\t </select>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t\t</div>\r\n\t\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/main/feetype/feetypedetail/feetypedetail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeeTypeDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_progressbar__ = __webpack_require__("./node_modules/ngx-progressbar/modules/ngx-progressbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__ = __webpack_require__("./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_feetype_service__ = __webpack_require__("./src/app/services/feetype.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_classfeetype__ = __webpack_require__("./src/app/models/classfeetype.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_frequencymeta__ = __webpack_require__("./src/app/models/frequencymeta.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FeeTypeDetailComponent = /** @class */ (function () {
    function FeeTypeDetailComponent(feeTypeService, router, ngProgress, notif, route) {
        var _this = this;
        this.feeTypeService = feeTypeService;
        this.router = router;
        this.ngProgress = ngProgress;
        this.notif = notif;
        this.route = route;
        this.classFeeType = new __WEBPACK_IMPORTED_MODULE_5__models_classfeetype__["a" /* ClassFeeType */]();
        this.frequencies = __WEBPACK_IMPORTED_MODULE_6__models_frequencymeta__["a" /* Frequencies */];
        this.route.params.subscribe(function (params) {
            _this.index = params['id'];
        });
    }
    FeeTypeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ngProgress.start();
        console.log(this.feeTypeService.feeType);
        if (!this.feeTypeService.feeType) {
            window.scroll(0, 0);
            this.feeTypeService
                .getFeeType(this.index)
                .subscribe(function (result) {
                if (result) {
                    _this.classFeeType = result;
                }
                else {
                    _this.notif.info("Information", "No such record not found in the system, please try again.");
                }
                _this.ngProgress.done();
            }, function (error) {
                console.log(error);
                _this.ngProgress.done();
                _this.notif.error("Failure", "While fetching Student detail, please try again.");
            });
        }
        else {
            this.classFeeType = this.feeTypeService.feeType;
            this.ngProgress.done();
        }
    };
    FeeTypeDetailComponent.prototype.editFeeType = function (classFeeType) {
        console.log('Clicked: ' + __WEBPACK_IMPORTED_MODULE_5__models_classfeetype__["a" /* ClassFeeType */].name);
        this.feeTypeService.feeType = classFeeType;
        this.router.navigate(["/app/updatefeetype/" + classFeeType.classFeeTypeId]);
    };
    FeeTypeDetailComponent.prototype.ClearAll = function (form) {
        console.log("res");
        form.resetForm();
    };
    FeeTypeDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/main/feetype/feetypedetail/feetypedetail.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_feetype_service__["a" /* FeeTypeService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_progressbar__["a" /* NgProgress */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["NotificationsService"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], FeeTypeDetailComponent);
    return FeeTypeDetailComponent;
}());



/***/ }),

/***/ "./src/app/main/feetype/updatefeetype/updatefeetype.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"mt-2\">Update Fee Type</h2>\r\n<ol class=\"breadcrumb-arrow\">\r\n\t<li><a [routerLink]=\"['/app/feetype']\">Fee Type</a></li>\r\n\t<li class=\"active\"><span>{{classFeeType.name}}</span></li>\r\n</ol>\r\n\r\n\r\n<div class=\" \">\r\n\t<nav>\r\n\t\t<div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\r\n\t\t\t<a class=\"nav-item nav-link active\" id=\"nav-home-tab\" data-toggle=\"tab\" data-target=\"#feetypeinfo\" href=\"#\" role=\"tab\" aria-controls=\"categoryinfo\"\r\n\t\t\t aria-selected=\"true\">Fee Type Info</a>\r\n\t\t</div>\r\n\t</nav>\r\n\t<div class=\"tab-content pt-md-4 pl-3\" id=\"nav-tabContent\">\r\n\t\t<div class=\"tab-pane fade show active\" id=\"feetypeinfo\" role=\"tabpanel\" aria-labelledby=\"classinfo-tab\">\r\n\t\t\t<div class=\"col-md-10 alert alert-danger\" role=\"alert\" *ngIf=\"(classFeeTypeForm.submitted && !classFeeTypeForm.valid)\">\r\n\t\t\t\tPlease fill in the highlighted fields.\r\n\t\t\t</div>\r\n\t\t\t<form (ngSubmit)=\"classFeeTypeForm.form.valid && updateFeeType();\" #classFeeTypeForm=\"ngForm\" novalidate>\r\n\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Fee Type Name</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"name\" [(ngModel)]=\"classFeeType.name\" #name=\"ngModel\" required\r\n\t\t\t\t\t [ngClass]=\"{'has-error': classFeeTypeForm.submitted && !name.valid}\" >\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Description</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"description\" [(ngModel)]=\"classFeeType.description\" #description=\"ngModel\" required \r\n\t\t\t\t\t[ngClass]=\"{'has-error': classFeeTypeForm.submitted && !description.valid}\"/>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t<label for=\"inputPassword\" class=\"col-sm-2 col-form-label\">Frequency</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<!-- <select class=\"form-control\" name=\"frequency\" [(ngModel)]=\"classFeeType.frequency\" #frequency=\"ngModel\" required\r\n\t\t\t\t\t[ngClass]=\"{'has-error': classFeeTypeForm.submitted && !frequency.valid}\" >\r\n\t\t\t\t\t\t\t<option value=\"Y\">Yearly</option>\r\n\t\t\t\t\t\t\t<option value=\"M\">Monthly</option>\r\n\t\t\t\t\t\t\t<option value=\"OT\">One Time</option>\r\n\t\t\t\t\t\t\t<option value=\"PT\">Per Term</option>\r\n\t\t\t\t\t\t\t<option value=\"PF\">Per Family</option>\r\n\t\t\t\t\t</select> -->\r\n\t\t\t\t\t<select class=\"form-control\" name=\"frequency\" [(ngModel)]=\"classFeeType.frequency\" #frequency=\"ngModel\" required\r\n\t\t\t\t\t[ngClass]=\"{'has-error': classFeeTypeForm.submitted && !frequency.valid}\" >\r\n\t\t\t\t\t <option *ngFor=\"let freq of frequencies\" [ngValue]=\"freq.id\">{{freq.name}}</option>\r\n\t\t\t\t\t </select>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<button class=\"btn btn-bd-primary mb-4\">Save</button>\r\n\t\t\t<!-- <button type=\"button\" (click)=\"ClearAll(classFeeTypeForm)\" class=\"btn btn-outline-secondary mb-4\" >Reset</button> -->\r\n\t\t</form>\r\n\t\t</div>\r\n\t\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/main/feetype/updatefeetype/updatefeetype.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateFeeTypeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_progressbar__ = __webpack_require__("./node_modules/ngx-progressbar/modules/ngx-progressbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__ = __webpack_require__("./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_feetype_service__ = __webpack_require__("./src/app/services/feetype.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_classfeetype__ = __webpack_require__("./src/app/models/classfeetype.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_frequencymeta__ = __webpack_require__("./src/app/models/frequencymeta.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UpdateFeeTypeComponent = /** @class */ (function () {
    function UpdateFeeTypeComponent(feeTypeService, router, ngProgress, notif, route) {
        var _this = this;
        this.feeTypeService = feeTypeService;
        this.router = router;
        this.ngProgress = ngProgress;
        this.notif = notif;
        this.route = route;
        this.classFeeType = new __WEBPACK_IMPORTED_MODULE_5__models_classfeetype__["a" /* ClassFeeType */]();
        this.frequencies = __WEBPACK_IMPORTED_MODULE_6__models_frequencymeta__["a" /* Frequencies */];
        this.route.params.subscribe(function (params) {
            _this.index = params['id'];
        });
    }
    UpdateFeeTypeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ngProgress.start();
        console.log(this.feeTypeService.feeType);
        if (!this.feeTypeService.feeType) {
            window.scroll(0, 0);
            this.feeTypeService
                .getFeeType(this.index)
                .subscribe(function (result) {
                if (result) {
                    _this.classFeeType = result;
                }
                else {
                    _this.notif.info("Information", "No such record not found in the system, please try again.");
                }
                _this.ngProgress.done();
            }, function (error) {
                console.log(error);
                _this.ngProgress.done();
                _this.notif.error("Failure", "While fetching Student detail, please try again.");
            });
        }
        else {
            this.classFeeType = this.feeTypeService.feeType;
            this.ngProgress.done();
        }
    };
    UpdateFeeTypeComponent.prototype.updateFeeType = function () {
        var _this = this;
        console.log("in add AddFeeTypeComponent method" + JSON.stringify(this.classFeeType));
        this.ngProgress.start();
        window.scroll(0, 0);
        this.feeTypeService
            .updateFeeType(this.classFeeType)
            .subscribe(function (result) {
            //this.students = result;
            console.log(result);
            _this.ngProgress.done();
            _this.notif.success("Success", "Fee Type details has been saved successfully.");
        }, function (error) {
            console.log(error);
            _this.ngProgress.done();
            _this.notif.error("Failure", "While saving the Fee Type details, please try again.");
        });
    };
    UpdateFeeTypeComponent.prototype.ClearAll = function (form) {
        console.log("res");
        form.resetForm();
    };
    UpdateFeeTypeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/main/feetype/updatefeetype/updatefeetype.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_feetype_service__["a" /* FeeTypeService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_progressbar__["a" /* NgProgress */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["NotificationsService"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], UpdateFeeTypeComponent);
    return UpdateFeeTypeComponent;
}());



/***/ }),

/***/ "./src/app/main/generateclassfee/generateclassfee.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"mt-2\">Generate Class Fee </h2>\r\n<div class=\" \">\r\n\t<nav>\r\n\t\t<div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\r\n\t\t\t<a class=\"nav-item nav-link active\" id=\"nav-home-tab\" data-toggle=\"tab\" data-target=\"#classfee\" href=\"#\" role=\"tab\" aria-controls=\"categoryinfo\"\r\n\t\t\t aria-selected=\"true\">Generate Class Fee</a>\r\n\t\t</div>\r\n\t</nav>\r\n\t<div class=\"tab-content pt-md-4 pl-3\" id=\"nav-tabContent\">\r\n\t\t<div class=\"tab-pane fade show active\" id=\"classfee\" role=\"tabpanel\" aria-labelledby=\"classinfo-tab\">\r\n\t\t\t<div class=\"col-md-10 alert alert-danger\" role=\"alert\" *ngIf=\"(!generateClassFeeForm.valid)\">\r\n\t\t\t\tPlease fill in the highlighted fields.\r\n\t\t\t</div>\r\n\t\t\t<form [formGroup]=\"generateClassFeeForm\" (ngSubmit)=\"generateClassFee(generateClassFeeForm);\" novalidate>\r\n\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t<label class=\"col-sm-2 col-form-label\">Class Fee Name</label>\r\n\t\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t\t<select class=\"form-control\" formControlName=\"classFee\" required\r\n\t\t\t\t\t\t\t[ngClass]=\"{'has-error': !generateClassFeeForm.controls.classFee.valid}\">\r\n\t\t\t\t\t\t\t<option *ngFor=\"let classfee of classFees\" [ngValue]=\"classfee\">{{classfee.name}}</option>\r\n\t\t\t\t\t\t</select>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\r\n\t\t\t<div formArrayName=\"studentClasses\">\r\n\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t<label class=\"col-sm-2 col-form-label\">Student Class(s)</label>\r\n\t\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<span class=\"btn btn-success btn-sm text-white\" (click)=\"addStudentClasses()\" style=\"cursor: default\">\r\n\t\t\t\t\t\t\tAdd Student Class <i class=\"fa fa-plus\"></i>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</div>\r\n\t\t\t\t</div> \r\n\t\t\t\t<div *ngFor=\"let studentCla of generateClassFeeForm.controls.studentClasses.controls; let i=index\">\r\n\t\t\t\t\t\t<!-- Angular assigns array index as group name by default 0, 1, 2, ... -->\r\n\t\t\t\t\t\t<div [formGroupName]=\"i\">\r\n\t\t\t\t\t\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"col-sm-2 col-form-label\">{{i+1}} : Student Class</label>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t\t\t\t\t\t <!-- <input type=\"text\" formControlName=\"classFeeParamsId\"/> -->\r\n\t\t\t\t\t\t\t\t\t\t<select class=\"form-control\" formControlName=\"0\" required\r\n\t\t\t\t\t\t\t\t\t\t[ngClass]=\"{'has-error': !generateClassFeeForm.controls.studentClasses.controls[i].controls.valid}\">\r\n\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t\t\t\t <option *ngFor=\"let studClass of studentClassesData\" [ngValue]=\"studClass\">{{studClass.name}}</option>\r\n\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-1\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"btn btn-danger btn-sm text-white\"  *ngIf=\"generateClassFeeForm.controls.studentClasses.controls.length > 1\" (click)=\"removeStudentClasses(i)\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-minus\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t\r\n\r\n\t\t\t<button type=\"submit\" class=\"btn btn-bd-primary mb-4\" >Generate Fee</button>\r\n\t\t\t<button type=\"button\" (click)=\"ClearAll()\" class=\"btn btn-outline-secondary mb-4\" >Reset</button>\r\n\t\t</form>\r\n\t\t</div>\r\n\t\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/main/generateclassfee/generateclassfee.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenerateClassFeeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_progressbar__ = __webpack_require__("./node_modules/ngx-progressbar/modules/ngx-progressbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__ = __webpack_require__("./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_classfee_service__ = __webpack_require__("./src/app/services/classfee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_class_service__ = __webpack_require__("./src/app/services/class.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_feetype_service__ = __webpack_require__("./src/app/services/feetype.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_generatefee__ = __webpack_require__("./src/app/models/generatefee.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var GenerateClassFeeComponent = /** @class */ (function () {
    function GenerateClassFeeComponent(classFeeService, router, ngProgress, notif, _fb, feeTypeService, classService) {
        this.classFeeService = classFeeService;
        this.router = router;
        this.ngProgress = ngProgress;
        this.notif = notif;
        this._fb = _fb;
        this.feeTypeService = feeTypeService;
        this.classService = classService;
        this.generateFee = new __WEBPACK_IMPORTED_MODULE_8__models_generatefee__["a" /* GenerateFee */]();
        this.classFees = [];
        this.studentClassesData = [];
    }
    GenerateClassFeeComponent.prototype.ngOnInit = function () {
        this.getClassFeeData();
        this.getClassData();
        this.generateClassFeeForm = this._fb.group({
            classFee: ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]],
            studentClasses: this._fb.array([
                this.initAddStudentClasses(),
            ])
        });
    };
    GenerateClassFeeComponent.prototype.initAddStudentClasses = function () {
        // initialize our address
        return this._fb.group({
            0: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]
        });
    };
    GenerateClassFeeComponent.prototype.addStudentClasses = function () {
        // add address to the list
        var control = this.generateClassFeeForm.controls['studentClasses'];
        control.push(this.initAddStudentClasses());
    };
    GenerateClassFeeComponent.prototype.removeStudentClasses = function (i) {
        // remove address from the list
        var control = this.generateClassFeeForm.controls['studentClasses'];
        control.removeAt(i);
    };
    GenerateClassFeeComponent.prototype.generateClassFee = function (model) {
        var _this = this;
        if (this.generateClassFeeForm.valid) {
            var tempStudentClasses = model.controls.studentClasses.value;
            var outStudentClasses_1 = [];
            tempStudentClasses.forEach(function (element) {
                outStudentClasses_1.push(element[0]);
            });
            this.generateFee.classFee = model.controls.classFee.value;
            this.generateFee.studentClasses = outStudentClasses_1;
            console.log(this.generateFee);
            this.ngProgress.start();
            window.scroll(0, 0);
            this.classFeeService
                .generateStudentFee(this.generateFee)
                .subscribe(function (result) {
                //this.students = result;
                console.log(result);
                _this.ngProgress.done();
                _this.notif.success("Success", "Generate Fee has been submitted successfully.");
            }, function (error) {
                console.log(error);
                _this.ngProgress.done();
                _this.notif.error("Failure", "While proceesing the Generate Fee, please try again.");
            });
        }
    };
    GenerateClassFeeComponent.prototype.ClearAll = function () {
        if (this.generateClassFeeForm.valid) {
            this.generateClassFeeForm.reset();
        }
    };
    GenerateClassFeeComponent.prototype.getClassFeeData = function () {
        var _this = this;
        console.log("call Class service");
        this.ngProgress.start();
        this.classFeeService
            .getclassFees()
            .subscribe(function (result) {
            _this.classFees = result;
            //console.log( "Fee for Class ----> " + JSON.stringify(this.classFees));
            _this.ngProgress.done();
            if (_this.classFees.length == 0) {
                _this.notif.info("Information", "There are no Class Fee in the System.");
            }
        }, function (error) {
            console.log(error);
            _this.ngProgress.done();
            _this.notif.error("Failure", "While fetching Class Fee details, please try again.");
        });
    };
    GenerateClassFeeComponent.prototype.getClassData = function () {
        var _this = this;
        console.log("call Class service");
        this.ngProgress.start();
        this.classService
            .getClasses()
            .subscribe(function (result) {
            _this.studentClassesData = result;
            //console.log( "Student Class Data ----> " + JSON.stringify(this.studentClassesData));
            _this.ngProgress.done();
            if (_this.studentClassesData.length == 0) {
                _this.notif.info("Information", "There are no Student Class details in the System.");
            }
        }, function (error) {
            console.log(error);
            _this.ngProgress.done();
            _this.notif.error("Failure", "While fetching Student Class details, please try again.");
        });
    };
    GenerateClassFeeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/main/generateclassfee/generateclassfee.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_classfee_service__["a" /* ClassFeeService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_progressbar__["a" /* NgProgress */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__["NotificationsService"],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_7__services_feetype_service__["a" /* FeeTypeService */],
            __WEBPACK_IMPORTED_MODULE_6__services_class_service__["a" /* ClassService */]])
    ], GenerateClassFeeComponent);
    return GenerateClassFeeComponent;
}());



/***/ }),

/***/ "./src/app/main/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar\">\r\n\t<a class=\"navbar-brand mr-0 mr-md-2\" [routerLink]=\"['/app/dashboard']\">\r\n\t\t<img src=\"assets/img/cup.png\" width=\"42\">\r\n\t\t{{appTitle}}\r\n\t</a>\r\n\t\r\n\t<ul class=\"navbar-nav flex-row ml-md-auto d-none d-md-flex pr-3\">\r\n\t\t<!-- <li class=\"nav-item\">\r\n\t\t\t<a class=\"nav-item nav-link\" href=\"/app/notifications\"><i class=\"fa fa-bell\"></i></a>\r\n\t\t</li> -->\r\n\t\t<li class=\"nav-item dropdown\">\r\n\t\t\t<a class=\"nav-item nav-link dropdown-toggle mr-md-2\" href=\"https://getbootstrap.com/docs/4.0/components/navbar/#\" id=\"bd-versions\"\r\n\t\t\t data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n\t\t\t\t{{userfullname}}\r\n\t\t\t</a>\r\n\t\t\t<div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"bd-versions\">\r\n\t\t\t\t\t<!-- <a class=\"dropdown-item\" href=\"#\">Profile</a>\r\n\t\t\t\t\t<div class=\"dropdown-divider\"></div>\r\n\t\t\t\t\t<a class=\"dropdown-item\" href=\"#\">Change Password</a> -->\r\n\t\t\t\t<a class=\"dropdown-item\"[routerLink]=\"\" (click)=\"logout()\">Logout</a>\r\n\t\t\t</div>\r\n\t\t</li>\r\n\t</ul>\r\n\t</header>"

/***/ }),

/***/ "./src/app/main/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.appTitle = "Student Fee System";
    }
    HeaderComponent.prototype.ngOnInit = function () {
        // reset login status
        //this.authenticationService.logout();\
        var userdetails = JSON.parse(localStorage.getItem("currentUser"));
        this.userfullname = userdetails.username;
        //console.log("header --> "  +userdetails.userfullname);
    };
    HeaderComponent.prototype.logout = function () {
        console.log("inside logut");
        this.authenticationService.logout();
        this.router.navigate(["/login"]);
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-header",
            template: __webpack_require__("./src/app/main/header/header.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.css":
/***/ (function(module, exports) {

module.exports = "/*\r\n:host /deep/ .data-table-row {\r\n    cursor: pointer;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    user-select: none;\r\n}\r\n*/\r\n\r\n\r\n.data-table.table>tbody+tbody {\r\n    border-top: none\r\n}\r\n\r\n\r\n.data-table.table td {\r\n    vertical-align: middle\r\n}\r\n\r\n\r\n.data-table>tbody>tr>td, .data-table>thead>tr>th {\r\n    overflow: hidden\r\n}\r\n\r\n\r\n.data-table>thead>tr>td {\r\n    border-bottom: 2px solid #dee2e6\r\n}\r\n\r\n\r\n.row-odd {\r\n    background-color: #f6f6f6\r\n}\r\n\r\n\r\n.data-table .substitute-rows > tr:hover, .data-table .data-table-row:hover {\r\n    background-color: #ececec\r\n}\r\n\r\n\r\n:host /deep/ .data-table {\r\n    -webkit-box-shadow: none !important;\r\n    box-shadow: none !important;\r\n    table-layout: auto !important;\r\n}\r\n\r\n\r\n.column-header {\r\n    position: relative\r\n}\r\n\r\n\r\n.expand-column-header {\r\n    width: 50px\r\n}\r\n\r\n\r\n.select-column-header {\r\n    width: 50px;\r\n    text-align: center\r\n}\r\n\r\n\r\n.index-column-header {\r\n    width: 40px\r\n}\r\n\r\n\r\n.column-header.sortable button {\r\n    -webkit-box-sizing: content-box;\r\n    box-sizing: content-box;\r\n    background: 0 0;\r\n    border: 0;\r\n    color: inherit;\r\n    cursor: pointer;\r\n    font: inherit;\r\n    line-height: normal;\r\n    overflow: visible;\r\n    padding: 0;\r\n    -webkit-appearance: button;\r\n    -webkit-user-select: none;\r\n    -moz-user-select: none;\r\n    -ms-user-select: none;\r\n    text-align: left\r\n}\r\n\r\n\r\n.column-header .column-sort-icon {\r\n    margin-left: 8px\r\n}\r\n\r\n\r\n.column-header.resizable .column-sort-icon {\r\n    margin-right: 8px\r\n}\r\n\r\n\r\n.column-header .column-sort-icon .column-sortable-icon {\r\n    color: #d3d3d3\r\n}\r\n\r\n\r\n.column-header .column-resize-handle {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    margin: 0;\r\n    padding: 0;\r\n    width: 8px;\r\n    height: 100%;\r\n    cursor: col-resize\r\n}\r\n\r\n\r\n.data-table-box {\r\n    position: relative\r\n}\r\n\r\n\r\n.busy {\r\n    position: absolute;\r\n    z-index: 1;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    background-color: rgba(0,0,0,.25)\r\n}\r\n\r\n\r\n.busy > i {\r\n    position: absolute;\r\n    left: 50%;\r\n    top: 50%;\r\n    -webkit-transform: translate(-50%,-50%);\r\n    transform: translate(-50%,-50%)\r\n}"

/***/ }),

/***/ "./src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<div class=\"container-fluid\">\r\n\t<div class=\"row flex-xl-nowrap\">\r\n\t\t<div class=\"col-12 col-md-3 col-xl-2 bd-sidebar\">\r\n\t\t\t<app-sidenav></app-sidenav>\r\n\t\t</div>\r\n\t\t<main class=\"col-12 col-md-9 col-xl-10 py-md-0 pl-md-3 bd-content\" role=\"main\">\r\n\t\t\t<router-outlet></router-outlet>\r\n\t\t</main>\r\n\t</div>\r\n</div>\r\n<simple-notifications></simple-notifications>\r\n<ng-progress [color]=\"'#ffc107'\" [thick]=\"true\"></ng-progress>\r\n<!-- <ng-progress [positionUsing]=\"'marginLeft'\" [minimum]=\"0.15\" [maximum]=\"1\"\r\n              [direction]=\"'leftToRightIncreased'\"\r\n\t\t\t [color]=\"'yellow'\"  [thick]=\"true\" [ease]=\"'linear'\"\r\n\t\t\t [showSpinner] =\"true\"\r\n></ng-progress> -->"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MainComponent = /** @class */ (function () {
    function MainComponent() {
        this.title = "Main Page";
    }
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/main/main.component.html"),
            styles: [__webpack_require__("./src/app/main/main.component.css")]
        })
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/main/sidenavigation/sidenav.component.html":
/***/ (function(module, exports) {

module.exports = "<span class=\"algolia-autocomplete\" style=\"position: relative; display: inline-block; direction: ltr;\">\r\n\t\t\t\t\t<button class=\"btn btn-link bd-search-docs-toggle d-md-none p-0 ml-3\" type=\"button\" data-toggle=\"collapse\" data-target=\"#bd-docs-nav\" aria-controls=\"bd-docs-nav\" aria-expanded=\"false\" aria-label=\"Toggle docs navigation\">\r\n\t\t\t\t\t\t<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 30 30\" width=\"30\" height=\"30\" focusable=\"false\"><title>Menu</title><path stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" d=\"M4 7h22M4 15h22M4 23h22\"></path></svg>\r\n\t\t\t\t</button>\r\n\t\t\t\t</span>\r\n\r\n<nav class=\"sidenav collapse bd-links\" id=\"bd-docs-nav\">\r\n\r\n\t<div class=\"bd-toc-item border-bottom p-2\">\r\n\t\t<a class=\"bd-toc-link\" routerLinkActive=\"sub-side-nav-active\" [routerLink]=\"['/app/dashboard']\">\r\n\t\t\t<i class=\"fa fa-th-list\"></i> Dashboard\r\n\t\t</a>\r\n\t</div>\r\n\t<!-- <div class=\"bd-toc-item border-bottom p-2\">\r\n\t\t<a class=\"bd-toc-link\" href=\"#\" data-toggle=\"collapse\" data-target=\"#Catelog\">\r\n\t\t\t<i class=\"fa fa-tags\"></i> Catelog\r\n\t\t</a>\r\n\t\t<div class=\" bd-toc-item\">\r\n\t\t\t<ul class=\"collapse\" id=\"Catelog\">\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a [routerLink]=\"['/app/categories']\" routerLinkActive=\"sub-side-nav-active\" class=\"sub-bd-toc-link \">Categories</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a href=\"#\" routerLinkActive=\"sub-side-nav-active\" class=\"sub-bd-toc-link \">Product</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a href=\"#\" routerLinkActive=\"sub-side-nav-active\" class=\"sub-bd-toc-link \">Review</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a href=\"#\" routerLinkActive=\"sub-side-nav-active\" class=\"sub-bd-toc-link \">Tags</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a href=\"#\" routerLinkActive=\"sub-side-nav-active\" class=\"sub-bd-toc-link \">Product Tabs</a>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</div> -->\r\n\r\n\t<!-- <div class=\"bd-toc-item border-bottom p-2\">\r\n\t\t<a class=\"bd-toc-link\" href=\"#\" data-toggle=\"collapse\" data-target=\"#Orders\">\r\n\t\t\t<i class=\"fa fa-shopping-basket\"></i> Orders\r\n\t\t</a>\r\n\t\t<div class=\" bd-toc-item\">\r\n\t\t\t<ul class=\"collapse\" id=\"Orders\">\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a href=\"#\" class=\"sub-bd-toc-link \">Orders List</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a href=\"#\" class=\"sub-bd-toc-link \">Order Statuses</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a href=\"#\" class=\"sub-bd-toc-link \">Statistics</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a href=\"#\" class=\"sub-bd-toc-link \">Accounting</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a href=\"#\" class=\"sub-bd-toc-link \">Payment Transactions</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a href=\"#\" class=\"sub-bd-toc-link \">Messages</a>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</div> -->\r\n\t<!-- <div class=\"bd-toc-item border-bottom p-2\">\r\n\t\t<a class=\"bd-toc-link\" href=\"#\" data-toggle=\"collapse\" data-target=\"#Discounts\">\r\n\t\t\t<i class=\"fa fa-gift\"></i> Discounts\r\n\t\t</a>\r\n\t\t<div class=\" bd-toc-item\">\r\n\t\t\t<ul class=\"collapse\" id=\"Discounts\">\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a href=\"#\" class=\"sub-bd-toc-link \">Volume Discounts</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a href=\"#\" class=\"sub-bd-toc-link \">Coupons</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a href=\"#\" class=\"sub-bd-toc-link \">Special Offers</a>\r\n\t\t\t\t</li>\r\n\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</div> -->\r\n\t<!-- <div class=\"bd-toc-item border-bottom p-2\">\r\n\t\t<a class=\"bd-toc-link\" href=\"#\" data-toggle=\"collapse\" data-target=\"#Users\">\r\n\t\t\t<i class=\"fa fa-users\"></i> Users\r\n\t\t</a>\r\n\t\t<div class=\" bd-toc-item\">\r\n\t\t\t<ul class=\"collapse\" id=\"Users\">\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a href=\"#\" class=\"sub-bd-toc-link \">Users List</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a href=\"#\" class=\"sub-bd-toc-link \">Membership Levels</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a href=\"#\" class=\"sub-bd-toc-link \">Roles</a>\r\n\t\t\t\t</li>\r\n\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</div> -->\r\n\t<!-- <div class=\"bd-toc-item border-bottom p-2\">\r\n\t\t<a class=\"bd-toc-link\" href=\"#\" data-toggle=\"collapse\" data-target=\"#Content\">\r\n\t\t\t<i class=\"fa fa-newspaper-o\"></i> Content\r\n\t\t</a>\r\n\t\t<div class=\" bd-toc-item\">\r\n\t\t\t<ul class=\"collapse\" id=\"Content\">\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a href=\"#\" class=\"sub-bd-toc-link \">News Messages</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a href=\"#\" class=\"sub-bd-toc-link \">Banners</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a href=\"#\" class=\"sub-bd-toc-link \">Front Page</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a href=\"#\" class=\"sub-bd-toc-link \">Pages</a>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</div> -->\r\n\t<div class=\"bd-toc-item border-bottom p-2\">\r\n\t\t<a class=\"bd-toc-link\" href=\"#\" data-toggle=\"collapse\" data-target=\"#School\">\r\n\t\t\t<i class=\"fa fa-newspaper-o\"></i> School\r\n\t\t</a>\r\n\t\t<div class=\" bd-toc-item\">\r\n\t\t\t<ul class=\"collapse show\" id=\"School\">\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a [routerLink]=\"['/app/classes']\" routerLinkActive=\"sub-side-nav-active\" class=\"sub-bd-toc-link \">Classes</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a [routerLink]=\"['/app/student']\" routerLinkActive=\"sub-side-nav-active\" class=\"sub-bd-toc-link \">Student</a>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</div>\r\n\t<div class=\"bd-toc-item border-bottom p-2\">\r\n\t\t<a class=\"bd-toc-link\" href=\"#\" data-toggle=\"collapse\" data-target=\"#Fees\">\r\n\t\t\t<i class=\"fa fa-newspaper-o\"></i> Fees\r\n\t\t</a>\r\n\t\t<div class=\" bd-toc-item\">\r\n\t\t\t<ul class=\"collapse show\" id=\"Fees\">\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a [routerLink]=\"['/app/feetype']\" routerLinkActive=\"sub-side-nav-active\" class=\"sub-bd-toc-link \">Fee Type</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a [routerLink]=\"['/app/classfee']\" routerLinkActive=\"sub-side-nav-active\" class=\"sub-bd-toc-link \">Class Fee</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a [routerLink]=\"['/app/generateclassfee']\" routerLinkActive=\"sub-side-nav-active\" class=\"sub-bd-toc-link \">Generate Class Fee</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<!-- <li>\r\n\t\t\t\t\t<a [routerLink]=\"['/app/payment']\" routerLinkActive=\"sub-side-nav-active\" class=\"sub-bd-toc-link \">Payment</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a [routerLink]=\"['/app/make']\" routerLinkActive=\"sub-side-nav-active\" class=\"sub-bd-toc-link \">Make</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t\r\n\t\t\t\t<li>\r\n\t\t\t\t\t<a [routerLink]=\"['/app/defaulters']\" routerLinkActive=\"sub-side-nav-active\" class=\"sub-bd-toc-link \">Defaulters</a>\r\n\t\t\t\t</li> -->\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</div>\r\n\t\r\n\r\n</nav>"

/***/ }),

/***/ "./src/app/main/sidenavigation/sidenav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideNavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SideNavComponent = /** @class */ (function () {
    function SideNavComponent() {
    }
    SideNavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: "app-sidenav",
            template: __webpack_require__("./src/app/main/sidenavigation/sidenav.component.html")
        })
    ], SideNavComponent);
    return SideNavComponent;
}());



/***/ }),

/***/ "./src/app/main/student/addstudent/addstudent.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"mt-2\">Add Student</h2>\r\n<ol class=\"breadcrumb-arrow\">\r\n\t<li><a [routerLink]=\"['/app/student']\">Student</a></li>\r\n\t<!-- <li><a [routerLink]=\"['/app/student']\">Library</a></li> -->\r\n\t<li class=\"active\"><span>Add Student</span></li>\r\n</ol>\r\n\r\n\r\n<div class=\" \">\r\n\t<nav>\r\n\t\t<div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\r\n\t\t\t<a class=\"nav-item nav-link active\" id=\"nav-home-tab\" data-toggle=\"tab\" data-target=\"#classinfo\" href=\"#\" role=\"tab\" aria-controls=\"categoryinfo\"\r\n\t\t\t aria-selected=\"true\">Student Info</a>\r\n\t\t</div>\r\n\t</nav>\r\n\t\r\n\t<div class=\"tab-content pt-md-4 pl-3\" id=\"nav-tabContent\">\r\n\t\t<div class=\"tab-pane fade show active\" id=\"classinfo\" role=\"tabpanel\" aria-labelledby=\"classinfo-tab\">\r\n\t\t\t<div class=\"col-md-10 alert alert-danger\" role=\"alert\" *ngIf=\"(sf.submitted && !sf.valid)\">\r\n\t\t\t\tPlease fill in the highlighted fields.\r\n\t\t\t</div>\r\n\t\t<form (ngSubmit)=\"sf.form.valid && addStudent();\" #sf=\"ngForm\" novalidate>\r\n\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Admission No.</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"admissionno\" [(ngModel)]=\"student.admissionno\" #admissionno=\"ngModel\" required\r\n\t\t\t\t\t [ngClass]=\"{'has-error': sf.submitted && !admissionno.valid}\" autofocus=\"\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Admission for Class</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<select class=\"form-control\" name=\"studentClass\" [(ngModel)]=\"student.studentClass\" #studentClass=\"ngModel\"\r\n\t\t\t\t\t required [ngClass]=\"{'has-error': sf.submitted && !studentClass.valid}\">\r\n\t\t\t\t\t <option *ngFor=\"let admclas of admissionClasses\" [ngValue]=\"admclas\">{{admclas.name}}</option>\r\n\t\t\t\t\t </select>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Student First Name</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"firstName\" [(ngModel)]=\"student.firstName\" #firstName=\"ngModel\" \r\n\t\t\t\t\trequired [ngClass]=\"{'has-error': sf.submitted && !firstName.valid}\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Student Last Name</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"lastName\" [(ngModel)]=\"student.lastName\" #lastName=\"ngModel\" \r\n\t\t\t\t\trequired [ngClass]=\"{'has-error': sf.submitted && !lastName.valid}\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Gender</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<select class=\"form-control\" name=\"gender\" [(ngModel)]=\"student.gender\" #gender=\"ngModel\" required [ngClass]=\"{'has-error': sf.submitted && !gender.valid}\">\r\n\t\t\t\t\t\t<option value=\"M\" selected>Male</option>\r\n\t\t\t\t\t\t<option value=\"F\">Female</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">DOB</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<input type=\"text\" placeholder=\"DD/MM/YYYY\" mask='00/00/0000' class=\"form-control\" name=\"studentdob\" [(ngModel)]=\"student.studentdob\" #studentdob=\"ngModel\" required [ngClass]=\"{'has-error': sf.submitted && !studentdob.valid}\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t\r\n\r\n\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Father Name</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"fathername\" [(ngModel)]=\"student.fathername\" #fathername=\"ngModel\" required [ngClass]=\"{'has-error': sf.submitted && !fathername.valid}\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Father Age</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"fatherage\" [(ngModel)]=\"student.fatherage\" #fatherage=\"ngModel\" mask='000'>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Father Qualification</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"fatherqualification\" [(ngModel)]=\"student.fatherqualification\" #fatherqualification=\"ngModel\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Father DOB</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"DD/MM/YYYY\" mask='00/00/0000' name=\"fatherdob\" [(ngModel)]=\"student.fatherdob\" #fatherdob=\"ngModel\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Father Profession</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"fatherprofession\" [(ngModel)]=\"student.fatherprofession\" #fatherprofession=\"ngModel\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Mother Name</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"mothername\" [(ngModel)]=\"student.mothername\" #mothername=\"ngModel\" required [ngClass]=\"{'has-error': sf.submitted && !mothername.valid}\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Mother Age</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"motherage\" [(ngModel)]=\"student.motherage\" #motherage=\"ngModel\" mask='000'>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Mother Qualification</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"motherqualification\" [(ngModel)]=\"student.motherqualification\" #motherqualification=\"ngModel\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Mother DOB</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"DD/MM/YYYY\" mask='00/00/0000' name=\"motherdob\" [(ngModel)]=\"student.motherdob\" #motherdob=\"ngModel\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Mother Profession</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"motherprofession\" [(ngModel)]=\"student.motherprofession\" #motherprofession=\"ngModel\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Address</label>\r\n\t\t\t\t<div class=\"col-sm-8\">\r\n\t\t\t\t\t<textarea class=\"form-control\" name=\"address\" [(ngModel)]=\"student.address\" #address=\"ngModel\" required [ngClass]=\"{'has-error': sf.submitted && !address.valid}\"\r\n\t\t\t\t\t [(ngModel)]=\"student.address\" #address=\"ngModel\"> </textarea>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Phone No.</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"phoneno\" [(ngModel)]=\"student.phoneno\" #phoneno=\"ngModel\" mask='00000-00000'>\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Cell No.</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"cellno\" [(ngModel)]=\"student.cellno\" #cellno=\"ngModel\" mask='(0000) 000-0000'>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Email Address</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<!-- <input type=\"email\" class=\"form-control\" name=\"emailaddress\" [(ngModel)]=\"student.emailaddress\" #emailaddress=\"ngModel\" email [ngClass]=\"{'has-error': (emailaddress.dirty || emailaddress.touched)}\" pattern=\"[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}\"> -->\r\n\t\t\t\t\t<input type=\"email\" class=\"form-control\" name=\"emailaddress\" [(ngModel)]=\"student.emailaddress\" #emailaddress=\"ngModel\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<button type=\"submit\" class=\"btn btn-bd-primary mb-4\">Update</button>\r\n\t\t\t\t<button type=\"button\" (click)=\"ClearAll(sf)\" class=\"btn btn-outline-secondary mb-4\" >Reset</button>\r\n\t\t\t</div>\r\n\r\n\t\t\t\r\n\t\t</form>\r\n\t\t</div>\r\n\t\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/main/student/addstudent/addstudent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddStudentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_notifications__ = __webpack_require__("./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_progressbar__ = __webpack_require__("./node_modules/ngx-progressbar/modules/ngx-progressbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_student_service__ = __webpack_require__("./src/app/services/student.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_student__ = __webpack_require__("./src/app/models/student.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_class_service__ = __webpack_require__("./src/app/services/class.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddStudentComponent = /** @class */ (function () {
    //private notif: NotificationsService;
    function AddStudentComponent(notif, studentService, ngProgress, classService) {
        this.notif = notif;
        this.studentService = studentService;
        this.ngProgress = ngProgress;
        this.classService = classService;
        this.model = {};
        this.student = new __WEBPACK_IMPORTED_MODULE_4__models_student__["a" /* Student */]();
        this.admissionClasses = [];
    }
    AddStudentComponent.prototype.ngOnInit = function () {
        this.getClassData();
    };
    AddStudentComponent.prototype.addStudent = function () {
        var _this = this;
        console.log("in add student method" + JSON.stringify(this.student));
        console.log("go for submussion" + this.model);
        this.ngProgress.start();
        window.scroll(0, 0);
        this.studentService
            .addStudent(this.student)
            .subscribe(function (result) {
            //this.students = result;
            console.log(result);
            _this.ngProgress.done();
            _this.notif.success("Success", "Student record has been saved successfully.");
        }, function (error) {
            console.log(error);
            _this.ngProgress.done();
            _this.notif.error("Failure", "While saving the Student details, please try again.");
        });
    };
    AddStudentComponent.prototype.ClearAll = function (form) {
        console.log("res");
        form.resetForm();
    };
    AddStudentComponent.prototype.getClassData = function () {
        var _this = this;
        console.log("call Class service");
        this.ngProgress.start();
        this.classService
            .getClasses()
            .subscribe(function (result) {
            _this.admissionClasses = result;
            _this.ngProgress.done();
            if (_this.admissionClasses.length == 0) {
                _this.notif.info("Information", "There are no class details in the System.");
            }
        }, function (error) {
            console.log(error);
            _this.ngProgress.done();
            _this.notif.error("Failure", "While fetching Class details, please try again.");
        });
    };
    AddStudentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/main/student/addstudent/addstudent.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angular2_notifications__["NotificationsService"],
            __WEBPACK_IMPORTED_MODULE_3__services_student_service__["a" /* StudentService */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_progressbar__["a" /* NgProgress */],
            __WEBPACK_IMPORTED_MODULE_5__services_class_service__["a" /* ClassService */]])
    ], AddStudentComponent);
    return AddStudentComponent;
}());



/***/ }),

/***/ "./src/app/main/student/student.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main/student/student.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"mt-2\">Student</h3>\r\n<hr/>\r\n<a class=\"btn btn-bd-primary btn-sm mb-4\" [routerLink]=\"['/app/addstudent']\">Add New Student</a>\r\n<!-- \r\n<div class=\"form-group row\">\r\n\t\t<div class=\"col-sm-6 input-group\">\r\n\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Please type here to search...\" aria-describedby=\"basic-addon2\"\r\n\t\t\t\t #searchVal (keyup)=\"filterData(searchVal.value)\">\r\n\t\t\t\t<div class=\"input-group-append\">\r\n\t\t\t\t  <span class=\"input-group-text\" id=\"basic-addon2\"><i class=\"fa fa-search\"></i></span>\r\n\t\t\t\t  \r\n\t\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"col-sm-2\">\r\n\t\t\t<button class=\"btn btn-outline-secondary\">Remove Filter</button>\r\n\t\t</div>\r\n\t</div> -->\r\n\r\n<div class=\"table-responsive\">\r\n<data-table id=\"persons-grid\" class=\"table table-sm\"\r\n        headerTitle=\"Students\"\r\n        [limit]=\"10\"\r\n        [items]=\"items\"\r\n        [itemCount]=\"itemCount\"\r\n        (reload)=\"reloadItems($event)\"\r\n\t\t[pagination] = \"true\"\r\n\t\t[rowTooltip]=\"rowTooltip\"\r\n\t\t[indexColumn] = \"false\"\r\n\t\t[substituteRows]=\"false\"\r\n\t\t\r\n        >\r\n\t\t<data-table-column\r\n            [property]=\"'studentId'\"\r\n            [header]=\"'#'\"\r\n\t\t\t[width]=\"55\"\r\n\t\t\t[sortable]=\"true\"\r\n\t\t\t>\r\n\t\t</data-table-column>\r\n\t\t<data-table-column\r\n            [property]=\"'name'\"\r\n            [header]=\"'Student Name'\"\r\n            [sortable]=\"true\"\r\n\t\t\t[resizable]=\"true\">\r\n\t\t\t<ng-template #dataTableCell let-item=\"item\">\r\n\t\t\t\t<a href=\"javascript:(0)\" (click)=\"viewStudent(item)\">{{item.firstName + \" \" + item.lastName}}</a>\r\n\t\t\t</ng-template>\r\n\t\t</data-table-column>\r\n\t\t<data-table-column\r\n            [property]=\"'admissionno'\"\r\n            [header]=\"'Admission No.'\"\r\n            [sortable]=\"true\"\r\n            [resizable]=\"true\">\r\n\t\t</data-table-column>\r\n\t\t<data-table-column\r\n            [property]=\"'fathername'\"\r\n            [header]=\"'Father Name'\"\r\n            [sortable]=\"true\"\r\n            [resizable]=\"true\">\r\n        </data-table-column>\r\n\t\t<data-table-column\r\n\t\t\t[property]=\"'mothername'\"\r\n\t\t\t[header]=\"'Mother Name'\"\r\n\t\t\t[sortable]=\"true\"\r\n\t\t\t[resizable]=\"true\">\r\n\t\t</data-table-column>\r\n\t\t<data-table-column\r\n\t\t\t[header]=\"'Class'\"\r\n\t\t\t[sortable]=\"true\"\r\n\t\t\t[resizable]=\"true\">\r\n\t\t\t<ng-template #dataTableCell let-item=\"item\">\r\n\t\t\t\t{{item.studentClass.name}}\r\n            </ng-template>\r\n\t\t</data-table-column>\r\n\t\t<data-table-column\r\n            [property]=\"'active'\"\r\n            [header]=\"'Actions'\"\r\n            [resizable]=\"true\">\r\n            <ng-template #dataTableCell let-item=\"item\">\r\n\t\t\t\t<!-- <button class=\"btn btn-outline-success btn-sm\"  title=\"Click to active\">\r\n\t\t\t\t\t<i class=\"fa fa-power-off\"></i>\r\n\t\t\t\t</button> -->\r\n\t\t\t\t<!-- <button class=\"btn btn-danger btn-sm text-white\" (click)=\"doInactiveStudent(item)\" title=\"Inactive this student\">\r\n\t\t\t\t\t<i class=\"fa fa-power-off\"></i>\r\n\t\t\t\t</button> -->\r\n\t\t\t\t<button class=\"btn btn-warning btn-sm text-white\" (click)=\"editStudent(item)\" title=\"Edit this student\">\r\n\t\t\t\t\t<i class=\"fa fa-edit\"></i>\r\n\t\t\t\t</button>\r\n            </ng-template>\r\n\t\t</data-table-column>\r\n\t\t\r\n\t</data-table>\r\n</div>\r\n\t<div class=\"mt-4\"></div>"

/***/ }),

/***/ "./src/app/main/student/student.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular5_data_table__ = __webpack_require__("./node_modules/angular5-data-table/esm5/angular5-data-table.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_progressbar__ = __webpack_require__("./node_modules/ngx-progressbar/modules/ngx-progressbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__ = __webpack_require__("./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_student_service__ = __webpack_require__("./src/app/services/student.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var StudentComponent = /** @class */ (function () {
    function StudentComponent(studentService, router, ngProgress, notif) {
        this.studentService = studentService;
        this.router = router;
        this.ngProgress = ngProgress;
        this.notif = notif;
        this.students = [];
        this.itemResource = new __WEBPACK_IMPORTED_MODULE_1_angular5_data_table__["b" /* DataTableResource */](this.students);
        this.items = [];
        this.itemCount = 0;
        this.params = { offset: 0, limit: 10 };
    }
    StudentComponent.prototype.ngOnInit = function () {
        this.getStudentData();
    };
    StudentComponent.prototype.getStudentData = function () {
        var _this = this;
        console.log("call studdent service");
        this.ngProgress.start();
        this.studentService
            .getStudents()
            .subscribe(function (result) {
            _this.students = result;
            //this.items = this.students;
            _this.itemResource = new __WEBPACK_IMPORTED_MODULE_1_angular5_data_table__["b" /* DataTableResource */](_this.students);
            _this.reloadItems(_this.params);
            _this.itemResource.count().then(function (count) { return _this.itemCount = count; });
            _this.ngProgress.done();
            if (_this.students.length == 0) {
                _this.notif.info("Information", "There are no Student details in the System.");
            }
        }, function (error) {
            console.log(error);
            _this.ngProgress.done();
            _this.notif.error("Failure", "While fetching Student details, please try again.");
        });
    };
    StudentComponent.prototype.reloadItems = function (params) {
        var _this = this;
        console.log("reload");
        this.itemResource.query(params).then(function (items) { return _this.items = items; });
    };
    // special properties:
    StudentComponent.prototype.rowClick = function (rowEvent) {
        console.log('Clicked: ' + rowEvent.row.item.name);
    };
    StudentComponent.prototype.editStudent = function (student) {
        console.log('Clicked: ' + student.firstName);
        this.studentService.studentData = student;
        this.router.navigate(["/app/updatestudent/" + student.studentId]);
    };
    StudentComponent.prototype.viewStudent = function (student) {
        console.log('Clicked: ' + student.firstName);
        this.studentService.studentData = student;
        this.router.navigate(["/app/studentdetail/" + student.studentId]);
    };
    StudentComponent.prototype.doInactiveStudent = function (student) {
        console.log('Clicked: ' + student.firstName);
    };
    StudentComponent.prototype.rowDoubleClick = function (rowEvent) {
        alert('Double clicked: ' + rowEvent.row.item.name);
    };
    StudentComponent.prototype.rowTooltip = function (item) {
        return item.name;
    };
    StudentComponent.prototype.filterData = function (val) {
        this.searchStudent = val;
        //console.log(val);
        if (val === '') {
            this.items = this.students;
            this.reloadItems(this.params);
        }
        // this.items.filter(val => this.items = val);
        this.items = this.students.filter(function (student) { return student.firstName.toLowerCase() === val.toLowerCase(); });
        //console.log(JSON.parse(this.students));
    };
    StudentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/main/student/student.component.html"),
            styles: [__webpack_require__("./src/app/main/student/student.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_student_service__["a" /* StudentService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3_ngx_progressbar__["a" /* NgProgress */],
            __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__["NotificationsService"]])
    ], StudentComponent);
    return StudentComponent;
}());



/***/ }),

/***/ "./src/app/main/student/studentdetail/studentdetail.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"mt-2\">Student Detail</h2>\r\n<ol class=\"breadcrumb-arrow\">\r\n\t<li><a [routerLink]=\"['/app/student']\">Student</a></li>\r\n\t<!-- <li><a [routerLink]=\"['/app/student']\">Library</a></li> -->\r\n\t<li class=\"active\"><span>{{student.firstName + \" \" + student.lastName}}</span></li>\r\n</ol>\r\n\r\n<div class=\"\">\r\n\t<nav>\r\n\t\t<div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\r\n\t\t\t<a class=\"nav-item nav-link active\" id=\"nav-home-tab\" data-toggle=\"tab\" data-target=\"#classinfo\" href=\"#\" role=\"tab\" aria-controls=\"categoryinfo\"\r\n\t\t\t aria-selected=\"true\">Student Info</a>\r\n\t\t\t<a class=\"nav-item nav-link\" id=\"nav-contact-tab\" data-toggle=\"tab\" data-target=\"#classstudents\" href=\"#\" role=\"tab\" aria-controls=\"catproducts\"\r\n\t\t\t aria-selected=\"false\">Fee Info</a>\r\n\t\t\t <a class=\"nav-item nav-link\" id=\"nav-contact-tab\" data-toggle=\"tab\" data-target=\"#paymentinfo\" href=\"#\" role=\"tab\" aria-controls=\"catproducts\"\r\n\t\t\t aria-selected=\"false\">Payment Info</a>\r\n\t\t</div>\r\n\t</nav>\r\n\t<div class=\"tab-content pt-md-4 pl-3\" id=\"nav-tabContent\">\r\n\t\t<div class=\"tab-pane fade show active\" id=\"classinfo\" role=\"tabpanel\" aria-labelledby=\"classinfo-tab\">\r\n\t\t\t<div class=\"col-md-10 alert alert-danger\" role=\"alert\" *ngIf=\"(sf.submitted && !sf.valid)\">\r\n\t\t\t\tPlease fill in the highlighted fields.\r\n\t\t\t</div>\r\n\t\t<form (ngSubmit)=\"sf.form.valid;\" #sf=\"ngForm\" novalidate>\r\n\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Admission No.</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control-plaintext\" name=\"admissionno\" [(ngModel)]=\"student.admissionno\" #admissionno=\"ngModel\" required\r\n\t\t\t\t\t [ngClass]=\"{'has-error': sf.submitted && !admissionno.valid}\" autofocus=\"\" disabled>\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Admission for Class</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<select class=\"form-control-plaintext\" name=\"studentClass\" [(ngModel)]=\"student.studentClass\" #studentClass=\"ngModel\"\r\n\t\t\t\t\t[compareWith]=\"fnCompareStudentClass\" required [ngClass]=\"{'has-error': sf.submitted && !studentClass.valid}\" disabled>\r\n\t\t\t\t\t <option *ngFor=\"let admclas of admissionClasses\" [ngValue]=\"admclas\">{{admclas.name}}</option>\r\n\t\t\t\t\t </select>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-sm-2\">\r\n\t\t\t\t\t<!-- <button type=\"button\" class=\"btn btn-danger btn-sm text-white ng-star-inserted\" (click)=\"doInactiveStudent(student)\">\r\n\t\t\t\t\t\t<i class=\"fa fa-power-off\"></i>\r\n\t\t\t\t\t</button> -->\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-warning btn-sm text-white ng-star-inserted\" (click)=\"editStudent(student)\">\r\n\t\t\t\t\t\t<i class=\"fa fa-edit\"></i>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Student First Name</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control-plaintext\" name=\"firstName\" [(ngModel)]=\"student.firstName\" #firstName=\"ngModel\" required\r\n\t\t\t\t\t [ngClass]=\"{'has-error': sf.submitted && !firstName.valid}\" autofocus=\"\" disabled>\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Student Last Name</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control-plaintext\" name=\"lastName\" [(ngModel)]=\"student.lastName\" #lastName=\"ngModel\"\r\n\t\t\t\t\t required [ngClass]=\"{'has-error': sf.submitted && !lastName.valid}\" disabled>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Gender</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<select class=\"form-control-plaintext\" name=\"gender\" [(ngModel)]=\"student.gender\" #gender=\"ngModel\" disabled>\r\n\t\t\t\t\t\t\t\t\t<option value=\"M\" selected>Male</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"F\">Female</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">DOB</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<input type=\"text\" placeholder=\"DD/MM/YYYY\" mask='00/00/0000' class=\"form-control-plaintext\" name=\"studentdob\" [(ngModel)]=\"student.studentdob\" #studentdob=\"ngModel\" required [ngClass]=\"{'has-error': sf.submitted && !studentdob.valid}\" disabled>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Father Name</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control-plaintext\" name=\"fathername\" [(ngModel)]=\"student.fathername\" #fathername=\"ngModel\" required [ngClass]=\"{'has-error': sf.submitted && !fathername.valid}\" disabled>\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Father Age</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control-plaintext\" name=\"fatherage\" [(ngModel)]=\"student.fatherage\" #fatherage=\"ngModel\" disabled>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Father Qualification</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control-plaintext\" name=\"fatherqualification\" [(ngModel)]=\"student.fatherqualification\" #fatherqualification=\"ngModel\" disabled>\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Father DOB</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control-plaintext\" placeholder=\"DD/MM/YYYY\" mask='00/00/0000' name=\"fatherdob\" [(ngModel)]=\"student.fatherdob\" #fatherdob=\"ngModel\" disabled>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Father Profession</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control-plaintext\" name=\"fatherprofession\" [(ngModel)]=\"student.fatherprofession\" #fatherprofession=\"ngModel\" disabled>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Mother Name</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control-plaintext\" name=\"mothername\" [(ngModel)]=\"student.mothername\" #mothername=\"ngModel\" required [ngClass]=\"{'has-error': sf.submitted && !mothername.valid}\" disabled>\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Mother Age</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control-plaintext\" name=\"motherage\" [(ngModel)]=\"student.motherage\" #motherage=\"ngModel\" disabled>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Mother Qualification</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control-plaintext\" name=\"motherqualification\" [(ngModel)]=\"student.motherqualification\" #motherqualification=\"ngModel\" disabled>\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Mother DOB</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control-plaintext\" placeholder=\"DD/MM/YYYY\" mask='00/00/0000' name=\"motherdob\" [(ngModel)]=\"student.motherdob\" #motherdob=\"ngModel\" disabled>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Mother Profession</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control-plaintext\" name=\"motherprofession\" [(ngModel)]=\"student.motherprofession\" #motherprofession=\"ngModel\" disabled>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Address</label>\r\n\t\t\t\t<div class=\"col-sm-8\">\r\n\t\t\t\t\t<textarea class=\"form-control-plaintext\" name=\"address\" [(ngModel)]=\"student.address\" #address=\"ngModel\" required [ngClass]=\"{'has-error': sf.submitted && !address.valid}\"\r\n\t\t\t\t\tdisabled [(ngModel)]=\"student.address\" #address=\"ngModel\"> </textarea>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Phone No.</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control-plaintext\" name=\"phoneno\" [(ngModel)]=\"student.phoneno\" #phoneno=\"ngModel\" disabled>\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Cell No.</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control-plaintext\" name=\"cellno\" [(ngModel)]=\"student.cellno\" #cellno=\"ngModel\" disabled>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Email Address</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<!-- <input type=\"email\" class=\"form-control-plaintext\" name=\"emailaddress\" [(ngModel)]=\"student.emailaddress\" #emailaddress=\"ngModel\" email [ngClass]=\"{'has-error': (emailaddress.dirty || emailaddress.touched)}\" pattern=\"[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}\"> -->\r\n\t\t\t\t\t<input type=\"email\" class=\"form-control-plaintext\" name=\"emailaddress\" [(ngModel)]=\"student.emailaddress\" #emailaddress=\"ngModel\" disabled>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</form>\r\n\t\t</div>\r\n\t\t<div class=\"tab-pane fade\" id=\"classstudents\" role=\"tabpanel\" aria-labelledby=\"classstudents-tab\">\r\n\t\t\t\t<div class=\"row mb-3 h5\">\r\n\t\t\t\t\t\t<div class=\"col-xl-3 col-sm-6\">\r\n\t\t\t\t\t\t\t<div class=\"card text-white bg-primary o-hidden p-2\">\r\n\t\t\t\t\t\t\t\t<div class=\"\">\r\n\t\t\t\t\t\t\t\t\tTotal Fee : \r\n\t\t\t\t\t\t\t\t\t<span class=\"pull-right\" *ngIf=\"studentFee\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-inr\"></i> {{studentFee.studentFeeAmt || 0}}\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"pull-right\" *ngIf=\"!studentFee\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-inr\"></i> 0\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-xl-3 col-sm-6\">\r\n\t\t\t\t\t\t\t<div class=\"card text-white bg-warning o-hidden p-2\">\r\n\t\t\t\t\t\t\t\t<div class=\"\">\r\n\t\t\t\t\t\t\t\t\tWaiver Amount : \r\n\t\t\t\t\t\t\t\t\t<span class=\"pull-right\" *ngIf=\"studentFee\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-inr\"></i> {{studentFee.studentWaiverFeeAmt || 0}}\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"pull-right\" *ngIf=\"!studentFee\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-inr\"></i> 0\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-xl-3 col-sm-6\">\r\n\t\t\t\t\t\t\t<div class=\"card text-white bg-danger o-hidden p-2\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"\">\r\n\t\t\t\t\t\t\t\t\t\t\tBalance Fee : \r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"pull-right\" *ngIf=\"studentFee\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-inr\"></i> {{studentFee.studentBalanceFeeAmt || 0}}\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"pull-right\" *ngIf=\"!studentFee\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-inr\"></i> 0\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-xl-3 col-sm-6\">\r\n\t\t\t\t\t\t\t<div class=\"card text-white bg-success o-hidden p-2\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"\">\r\n\t\t\t\t\t\t\t\t\t\t\tFee Paid : \r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"pull-right\" *ngIf=\"studentFee\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-inr\"></i> {{studentFee.studentPaidFeeAmt || 0}}\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"pull-right\" *ngIf=\"!studentFee\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-inr\"></i> 0\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-xl-12 col-sm-12\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-bd-primary\" data-toggle=\"modal\" data-target=\"#fineModal\">Add Fee/ Fine</button>\r\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-outline-success\" data-toggle=\"modal\" data-target=\"#paymentModal\">Add Payment</button>\r\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-outline-danger\"  data-toggle=\"modal\" data-target=\"#waiverModal\">Add Waiver</button>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t\t\t\t<data-table id=\"persons-grid\" class=\"table table-sm\"\r\n\t\t\t\t\t\t\t\t\theaderTitle=\"Student Fee\"\r\n\t\t\t\t\t\t\t\t\t[limit]=\"10\"\r\n\t\t\t\t\t\t\t\t\t[items]=\"studentFeeItems\"\r\n\t\t\t\t\t\t\t\t\t[itemCount]=\"studentFeeItemCount\"\r\n\t\t\t\t\t\t\t\t\t(reload)=\"reloadStudentFeeItems($event)\"\r\n\t\t\t\t\t\t\t\t\t[pagination] = \"true\"\r\n\t\t\t\t\t\t\t\t\t[rowTooltip]=\"rowTooltip\"\r\n\t\t\t\t\t\t\t\t\t[indexColumn] = \"true\"\r\n\t\t\t\t\t\t\t\t\t[substituteRows]=\"false\"\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t<data-table-column\r\n\t\t\t\t\t\t\t\t\t\t[property]=\"'name'\"\r\n\t\t\t\t\t\t\t\t\t\t[header]=\"'Fee'\"\r\n\t\t\t\t\t\t\t\t\t\t[resizable]=\"true\">\r\n\t\t\t\t\t\t\t\t\t</data-table-column>\r\n\t\t\t\t\t\t\t\t\t<data-table-column\r\n\t\t\t\t\t\t\t\t\t\t[property]=\"'paramType'\"\r\n\t\t\t\t\t\t\t\t\t\t[header]=\"'Frequency'\"\r\n\t\t\t\t\t\t\t\t\t\t[resizable]=\"true\">\r\n\t\t\t\t\t\t\t\t\t\t<ng-template #dataTableCell let-item=\"item\">\r\n\t\t\t\t\t\t\t\t\t\t\t{{feeTypeService.displayFrequency(item.paramType)}}\r\n\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t\t</data-table-column>\r\n\t\t\t\t\t\t\t\t\t<data-table-column\r\n\t\t\t\t\t\t\t\t\t\t[property]=\"'value'\"\r\n\t\t\t\t\t\t\t\t\t\t[header]=\"'Amount'\"\r\n\t\t\t\t\t\t\t\t\t\t[resizable]=\"true\">\r\n\t\t\t\t\t\t\t\t\t\t<ng-template #dataTableCell let-item=\"item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-inr\"></i> {{item.value}}\r\n\t\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t\t</data-table-column>\r\n\t\t\t\t\t\t\t\t\t<!-- <data-table-column\r\n\t\t\t\t\t\t\t\t\t\t[property]=\"'active'\"\r\n\t\t\t\t\t\t\t\t\t\t[header]=\"'Actions'\"\r\n\t\t\t\t\t\t\t\t\t\t[resizable]=\"true\">\r\n\t\t\t\t\t\t\t\t\t\t<ng-template #dataTableCell let-item=\"item\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-success btn-sm text-white\" title=\"Pay Fee\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-inr\"></i> Pay\r\n\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t\t</data-table-column> -->\t\r\n\t\t\t\t\t\t\t</data-table>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"mt-4 mb-4\">\r\n\t\t\t\t\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t\t\t\t<data-table id=\"persons-grid\" class=\"table table-sm\"\r\n\t\t\t\t\t\t\t\t\theaderTitle=\"Student Waiver\"\r\n\t\t\t\t\t\t\t\t\t[limit]=\"10\"\r\n\t\t\t\t\t\t\t\t\t[items]=\"studentFeeWaiverHistoryItems\"\r\n\t\t\t\t\t\t\t\t\t[itemCount]=\"studentFeeWaiverHistoryItemCount\"\r\n\t\t\t\t\t\t\t\t\t(reload)=\"reloadStudentFeeWaiverHistoryItems($event)\"\r\n\t\t\t\t\t\t\t\t\t[pagination] = \"true\"\r\n\t\t\t\t\t\t\t\t\t[rowTooltip]=\"rowTooltip\"\r\n\t\t\t\t\t\t\t\t\t[indexColumn] = \"true\"\r\n\t\t\t\t\t\t\t\t\t[substituteRows]=\"false\"\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t<data-table-column\r\n\t\t\t\t\t\t\t\t\t\t[property]=\"'studentFeeWaiverCmt'\"\r\n\t\t\t\t\t\t\t\t\t\t[header]=\"'Waiver Comment'\"\r\n\t\t\t\t\t\t\t\t\t\t[resizable]=\"true\">\r\n\t\t\t\t\t\t\t\t\t</data-table-column>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<data-table-column\r\n\t\t\t\t\t\t\t\t\t\t[property]=\"'studentFeeWaiverAmt'\"\r\n\t\t\t\t\t\t\t\t\t\t[header]=\"'Waiver Amount'\"\r\n\t\t\t\t\t\t\t\t\t\t[resizable]=\"true\">\r\n\t\t\t\t\t\t\t\t\t\t<ng-template #dataTableCell let-item=\"item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-inr\"></i> {{item.studentFeeWaiverAmt}}\r\n\t\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t\t</data-table-column>\t\r\n\t\t\t\t\t\t\t</data-table>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t</div>\r\n\t\t<div class=\"tab-pane fade mb-5\" id=\"paymentinfo\" role=\"tabpanel\" aria-labelledby=\"paymentinfo-tab\">\r\n\t\t\t\t<button class=\"btn btn-outline-success\" data-toggle=\"modal\" data-target=\"#paymentModal\">Add Payment</button>\r\n\t\t\t<br/>\r\n\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t\t<data-table id=\"payments-grid\" class=\"table table-sm\"\r\n\t\t\t\t\t\theaderTitle=\"Student Payment\"\r\n\t\t\t\t\t\t[limit]=\"10\"\r\n\t\t\t\t\t\t[items]=\"studentPaymentHistoryItems\"\r\n\t\t\t\t\t\t[itemCount]=\"studentPaymentHistoryItemCount\"\r\n\t\t\t\t\t\t(reload)=\"reloadStudentPaymentHistoryItems($event)\"\r\n\t\t\t\t\t\t[pagination] = \"true\"\r\n\t\t\t\t\t\t[rowTooltip]=\"rowTooltip\"\r\n\t\t\t\t\t\t[indexColumn] = \"true\"\r\n\t\t\t\t\t\t[substituteRows]=\"false\"\r\n\t\t\t\t\t\t[indexColumnHeader]=\"'#'\"\r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t\t<data-table-column\r\n\t\t\t\t\t\t\t[property]=\"'payamentStatus'\"\r\n\t\t\t\t\t\t\t[header]=\"'Payment Status'\"\r\n\t\t\t\t\t\t\t[resizable]=\"true\">\r\n\t\t\t\t\t\t</data-table-column>\r\n\t\t\t\t\t\t<data-table-column\r\n\t\t\t\t\t\t\t[property]=\"'startDate'\"\r\n\t\t\t\t\t\t\t[header]=\"'Payment Date'\"\r\n\t\t\t\t\t\t\t[resizable]=\"true\">\r\n\t\t\t\t\t\t   \r\n\t\t\t\t\t\t</data-table-column>\r\n\t\t\t\t\t\t<data-table-column\r\n\t\t\t\t\t\t\t[property]=\"'studentFeePaymentAmt'\"\r\n\t\t\t\t\t\t\t[header]=\"'Payment Amount'\"\r\n\t\t\t\t\t\t\t[resizable]=\"true\">\r\n\t\t\t\t\t\t\t<ng-template #dataTableCell let-item=\"item\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-inr\"></i> {{item.studentFeePaymentAmt}}\r\n\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t</data-table-column>\r\n\t\t\t\t\t\t<data-table-column\r\n\t\t\t\t\t\t\t[property]=\"'studentFeePaymentCmt'\"\r\n\t\t\t\t\t\t\t[header]=\"'Payment Comment'\"\r\n\t\t\t\t\t\t\t[resizable]=\"true\">\r\n\t\t\t\t\t\t</data-table-column>\r\n\t\t\t\t\t</data-table>\r\n\t\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"paymentModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"paymentModalLabel\" aria-hidden=\"true\">\r\n\t\t<div class=\"modal-dialog\" role=\"document\">\r\n\t\t\t<div class=\"modal-content\">\r\n\t\t\t\t<form (ngSubmit)=\"payFeeForm.form.valid && payFee(studentFee);\" #payFeeForm=\"ngForm\" novalidate>\r\n\t\t\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t\t<h5 class=\"modal-title\" id=\"exampleModalLabel\">Pay Fee</h5>\r\n\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-12 alert alert-danger\" role=\"alert\" *ngIf=\"(payFeeForm.submitted && !payFeeForm.valid)\">\r\n\t\t\t\t\t\t\t\t\t\tPlease fill in the highlighted fields.\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<label class=\"col-sm-12 col-form-label\">Amount</label>\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"  mask='0000000000' name=\"payfeeamount\" [(ngModel)]=\"payFeeAmount\" #payFeeAmountTxt=\"ngModel\" required [ngClass]=\"{'has-error': payFeeForm.submitted && !payFeeAmountTxt.valid}\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<label class=\"col-sm-12 col-form-label\">Comments</label>\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\r\n\t\t\t\t\t\t\t\t\t <input type=\"text\" class=\"form-control\"   name=\"payFeeComments\" [(ngModel)]=\"payFeeComments\" #payFeeCommentsTxt=\"ngModel\" required [ngClass]=\"{'has-error': payFeeForm.submitted && !payFeeCommentsTxt.valid}\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\">Save changes</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t\r\n\t<div class=\"modal fade\" id=\"fineModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"fineModalLabel\" aria-hidden=\"true\">\r\n\t\t<div class=\"modal-dialog\" role=\"document\">\r\n\t\t\t<div class=\"modal-content\">\r\n\t\t\t\t<form (ngSubmit)=\"fineForm.form.valid && addFine(studentFee);\" #fineForm=\"ngForm\" novalidate>\r\n\t\t\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t\t<h5 class=\"modal-title\" id=\"exampleModalLabel\">Add Fee/ Fine</h5>\r\n\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-12 alert alert-danger\" role=\"alert\" *ngIf=\"(fineForm.submitted && !fineForm.valid)\">\r\n\t\t\t\t\t\t\t\t\t\tPlease fill in the highlighted fields.\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<label class=\"col-sm-12 col-form-label\">Amount</label>\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"  mask='0000000000' name=\"fineamount\" [(ngModel)]=\"fineAmount\" #fineAmountTxt=\"ngModel\" required [ngClass]=\"{'has-error': fineForm.submitted && !fineAmountTxt.valid}\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<label class=\"col-sm-12 col-form-label\">Fee/ Fine Comments</label>\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\r\n\t\t\t\t\t\t\t\t\t <input type=\"text\" class=\"form-control\"   name=\"fineComments\" [(ngModel)]=\"fineComments\" #fineCommentsTxt=\"ngModel\" required [ngClass]=\"{'has-error': fineForm.submitted && !fineCommentsTxt.valid}\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\">Save changes</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"modal fade\" id=\"waiverModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"waiverModalLabel\" aria-hidden=\"true\">\r\n\t\t<div class=\"modal-dialog\" role=\"document\">\r\n\t\t\t<div class=\"modal-content\">\r\n\t\t\t\t<form (ngSubmit)=\"waiverFeeForm.form.valid && addWaiver(studentFee);\" #waiverFeeForm=\"ngForm\" novalidate>\r\n\t\t\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t\t<h5 class=\"modal-title\" id=\"exampleModalLabel\">Add Waiver</h5>\r\n\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-12 alert alert-danger\" role=\"alert\" *ngIf=\"(waiverFeeForm.submitted && !waiverFeeForm.valid)\">\r\n\t\t\t\t\t\t\t\t\t\tPlease fill in the highlighted fields.\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<label class=\"col-sm-12 col-form-label\">Name</label>\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"waiverName\" [(ngModel)]=\"waiverName\" #waiverNameTxt=\"ngModel\" required [ngClass]=\"{'has-error': waiverFeeForm.submitted && !waiverNameTxt.valid}\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<label class=\"col-sm-12 col-form-label\">Amount</label>\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"  mask='0000000000' name=\"waiverAmount\" [(ngModel)]=\"waiverAmount\" #waiverAmountTxt=\"ngModel\" required [ngClass]=\"{'has-error': waiverFeeForm.submitted && !waiverAmountTxt.valid}\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<label class=\"col-sm-12 col-form-label\">Comments</label>\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\r\n\t\t\t\t\t\t\t\t\t <input type=\"text\" class=\"form-control\"   name=\"waiverComments\" [(ngModel)]=\"waiverComments\" #waiverCommentsTxt=\"ngModel\" required [ngClass]=\"{'has-error': waiverFeeForm.submitted && !waiverCommentsTxt.valid}\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\">Save changes</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>"

/***/ }),

/***/ "./src/app/main/student/studentdetail/studentdetail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_progressbar__ = __webpack_require__("./node_modules/ngx-progressbar/modules/ngx-progressbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__ = __webpack_require__("./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular5_data_table__ = __webpack_require__("./node_modules/angular5-data-table/esm5/angular5-data-table.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_student_service__ = __webpack_require__("./src/app/services/student.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_student__ = __webpack_require__("./src/app/models/student.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_class_service__ = __webpack_require__("./src/app/services/class.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_studentfee__ = __webpack_require__("./src/app/models/studentfee.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_feetype_service__ = __webpack_require__("./src/app/services/feetype.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_paystudentfee__ = __webpack_require__("./src/app/models/paystudentfee.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__models_studentfine__ = __webpack_require__("./src/app/models/studentfine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__models_studentwaiver__ = __webpack_require__("./src/app/models/studentwaiver.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var StudentDetailComponent = /** @class */ (function () {
    function StudentDetailComponent(studentService, notif, router, ngProgress, route, classService, feeTypeService) {
        var _this = this;
        this.studentService = studentService;
        this.notif = notif;
        this.router = router;
        this.ngProgress = ngProgress;
        this.route = route;
        this.classService = classService;
        this.feeTypeService = feeTypeService;
        this.student = new __WEBPACK_IMPORTED_MODULE_6__models_student__["a" /* Student */]();
        this.payStudentFee = new __WEBPACK_IMPORTED_MODULE_10__models_paystudentfee__["a" /* PayStudentFee */]();
        this.studentFine = new __WEBPACK_IMPORTED_MODULE_11__models_studentfine__["a" /* StudentFine */]();
        this.studentWaiver = new __WEBPACK_IMPORTED_MODULE_12__models_studentwaiver__["a" /* StudentWaiver */]();
        this.studentFee = new __WEBPACK_IMPORTED_MODULE_8__models_studentfee__["a" /* StudentFee */]();
        this.admissionClasses = [];
        this.studentFeeParams = [];
        this.studentPaymentHistory = [];
        this.studentFeeWaiverHistory = [];
        this.studentFeeItemResource = new __WEBPACK_IMPORTED_MODULE_4_angular5_data_table__["b" /* DataTableResource */](this.studentFeeParams);
        this.studentFeeItems = [];
        this.studentFeeItemCount = 0;
        this.studentPaymentHistoryItemResource = new __WEBPACK_IMPORTED_MODULE_4_angular5_data_table__["b" /* DataTableResource */](this.studentPaymentHistory);
        this.studentPaymentHistoryItems = [];
        this.studentPaymentHistoryItemCount = 0;
        this.studentFeeWaiverHistoryItemResource = new __WEBPACK_IMPORTED_MODULE_4_angular5_data_table__["b" /* DataTableResource */](this.studentFeeWaiverHistory);
        this.studentFeeWaiverHistoryItems = [];
        this.studentFeeWaiverHistoryItemCount = 0;
        this.params = { offset: 0, limit: 10 };
        this.route.params.subscribe(function (params) {
            _this.index = params['id'];
        });
    }
    StudentDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getClassData();
        this.ngProgress.start();
        console.log(this.studentService.studentData);
        if (!this.studentService.studentData) {
            window.scroll(0, 0);
            this.studentService
                .getStudent(this.index)
                .subscribe(function (result) {
                if (result) {
                    _this.student = result;
                    _this.getStudentFee();
                }
                else {
                    _this.notif.info("Information", "No such record not found in the system, please try again.");
                }
                _this.ngProgress.done();
            }, function (error) {
                console.log(error);
                _this.ngProgress.done();
                _this.notif.error("Failure", "While fetching Student detail, please try again.");
            });
        }
        else {
            this.student = this.studentService.studentData;
            //this.notif.info("Good News", "Student detail is loaded successfuly.");
            this.ngProgress.done();
            this.getStudentFee();
        }
    };
    StudentDetailComponent.prototype.editStudent = function (student) {
        console.log('Clicked: ' + student.firstName);
        this.studentService.studentData = student;
        this.router.navigate(["/app/updatestudent/" + student.studentId]);
    };
    StudentDetailComponent.prototype.doInactiveStudent = function (student) {
        console.log('Clicked: ' + student.firstName);
    };
    StudentDetailComponent.prototype.getClassData = function () {
        var _this = this;
        console.log("call Class service");
        this.ngProgress.start();
        this.classService
            .getClasses()
            .subscribe(function (result) {
            _this.admissionClasses = result;
            _this.ngProgress.done();
            if (_this.admissionClasses.length == 0) {
                _this.notif.info("Information", "There are no class details in the System.");
            }
        }, function (error) {
            console.log(error);
            _this.ngProgress.done();
            _this.notif.error("Failure", "While fetching Class details, please try again.");
        });
    };
    StudentDetailComponent.prototype.fnCompareStudentClass = function (a, b) {
        //console.log(a && b && a.studentClassId == b.studentClassId);
        return a && b && a.studentClassId == b.studentClassId;
    };
    StudentDetailComponent.prototype.getStudentFee = function () {
        var _this = this;
        console.log("call Student service for student Fee");
        this.ngProgress.start();
        this.studentService
            .getStudentFee(this.index)
            .subscribe(function (result) {
            _this.studentFee = (result.studentFeeId) ? result : null;
            if (!_this.studentFee) {
                _this.notif.info("Information", "There are no Student Fee details in the System.");
            }
            else {
                _this.studentFeeParams = result.studentFeeParams;
                _this.studentPaymentHistory = result.studentPaymentHistories;
                _this.resetStudentFeeAndPaymentGrid();
                _this.ngProgress.done();
                _this.getWaiverDetails(result.studentFeeId);
            }
        }, function (error) {
            console.log(error);
            _this.ngProgress.done();
            _this.notif.error("Failure", "While fetching Student Fee details, please try again.");
        });
    };
    StudentDetailComponent.prototype.getWaiverDetails = function (studentFeeId) {
        var _this = this;
        console.log("call getWaiverDetails for student Fee");
        this.ngProgress.start();
        this.studentService
            .getWaiversFroStudentFee(studentFeeId)
            .subscribe(function (result) {
            _this.studentFeeWaiverHistory = result.studentFeeWaiverHistory;
            _this.studentFeeWaiverHistoryItemResource = new __WEBPACK_IMPORTED_MODULE_4_angular5_data_table__["b" /* DataTableResource */](_this.studentFeeWaiverHistory);
            _this.reloadStudentFeeWaiverHistoryItems(_this.params);
            _this.studentFeeWaiverHistoryItemResource.count().then(function (count) { return _this.studentFeeWaiverHistoryItemCount = count; });
            _this.ngProgress.done();
        }, function (error) {
            console.log(error);
            _this.ngProgress.done();
            _this.notif.error("Failure", "While fetching Waiver details, please try again.");
        });
    };
    StudentDetailComponent.prototype.reloadStudentFeeItems = function (params) {
        var _this = this;
        console.log("reload  --> reloadStudentFeeItems");
        this.studentFeeItemResource.query(params).then(function (items) { return _this.studentFeeItems = items; });
    };
    StudentDetailComponent.prototype.reloadStudentPaymentHistoryItems = function (params) {
        var _this = this;
        console.log("reload --> reloadStudentPaymentHistoryItems");
        this.studentPaymentHistoryItemResource.query(params).then(function (items) { return _this.studentPaymentHistoryItems = items; });
    };
    StudentDetailComponent.prototype.reloadStudentFeeWaiverHistoryItems = function (params) {
        var _this = this;
        console.log("reload --> reloadStudentFeeWaiverHistoryItems");
        this.studentFeeWaiverHistoryItemResource.query(params).then(function (items) { return _this.studentFeeWaiverHistoryItems = items; });
    };
    // special properties:
    StudentDetailComponent.prototype.rowClick = function (rowEvent) {
        console.log('Clicked: ' + rowEvent.row.item.name);
    };
    StudentDetailComponent.prototype.rowTooltip = function (item) {
        return item.name;
    };
    StudentDetailComponent.prototype.payFee = function (studentFee) {
        var _this = this;
        console.log("pay Fee" + studentFee);
        // let payStudentFee = {
        //   studentFee : studentFee,
        //   payFeeAmount : this.payFeeAmount,
        //   payFeeComments: this.payFeeComments
        // }
        //console.log(payStudentFee);
        this.payStudentFee.paymentAmount = this.payFeeAmount;
        this.payStudentFee.paymentComments = this.payFeeComments;
        this.payStudentFee.studentFee = this.studentFee;
        console.log(this.payStudentFee);
        this.ngProgress.start();
        window.scroll(0, 0);
        this.studentService
            .addStudentPayment(this.payStudentFee)
            .subscribe(function (result) {
            //this.students = result;
            console.log(result);
            _this.studentFee = result;
            _this.studentFeeParams = result.studentFeeParams;
            _this.studentPaymentHistory = result.studentPaymentHistories;
            _this.resetStudentFeeAndPaymentGrid();
            _this.ngProgress.done();
            _this.notif.success("Success", "Amount has been paid successfully.");
        }, function (error) {
            console.log(error);
            _this.ngProgress.done();
            _this.notif.error("Failure", "While doing payment, please try again.");
        });
    };
    StudentDetailComponent.prototype.addWaiver = function (studentFee) {
        var _this = this;
        this.studentWaiver.waiverName = this.waiverName;
        this.studentWaiver.waiverAmount = this.waiverAmount;
        this.studentWaiver.waiverComments = this.waiverComments;
        this.studentWaiver.studentFee = this.studentFee;
        console.log(this.studentWaiver);
        this.ngProgress.start();
        window.scroll(0, 0);
        this.studentService
            .addStudentWaiver(this.studentWaiver)
            .subscribe(function (result) {
            console.log(result);
            _this.studentFee = result;
            _this.resetStudentFeeAndPaymentGrid();
            _this.ngProgress.done();
            _this.notif.success("Success", "Waiver has been added successfully.");
            _this.getWaiverDetails(_this.studentFee.studentFeeId);
        }, function (error) {
            console.log(error);
            _this.ngProgress.done();
            _this.notif.error("Failure", "While adding waiver, please try again.");
        });
    };
    StudentDetailComponent.prototype.addFine = function (studentFee) {
        //alert(this.fineAmount + "==" + this.fineComments);
        var _this = this;
        this.studentFine.fineAmount = this.fineAmount;
        this.studentFine.fineComments = this.fineComments;
        this.studentFine.studentFee = this.studentFee;
        console.log(this.studentFine);
        this.ngProgress.start();
        window.scroll(0, 0);
        this.studentService
            .addStudentFine(this.studentFine)
            .subscribe(function (result) {
            //this.students = result;
            console.log(result);
            _this.studentFee = result;
            _this.studentFeeParams = result.studentFeeParams;
            _this.resetStudentFeeAndPaymentGrid();
            _this.ngProgress.done();
            _this.notif.success("Success", "Fine has been added successfully.");
        }, function (error) {
            console.log(error);
            _this.ngProgress.done();
            _this.notif.error("Failure", "While doing Fine, please try again.");
        });
    };
    StudentDetailComponent.prototype.resetStudentFeeAndPaymentGrid = function () {
        var _this = this;
        this.studentFeeItemResource = new __WEBPACK_IMPORTED_MODULE_4_angular5_data_table__["b" /* DataTableResource */](this.studentFeeParams);
        this.reloadStudentFeeItems(this.params);
        this.studentFeeItemResource.count().then(function (count) { return _this.studentFeeItemCount = count; });
        this.studentPaymentHistoryItemResource = new __WEBPACK_IMPORTED_MODULE_4_angular5_data_table__["b" /* DataTableResource */](this.studentPaymentHistory);
        this.reloadStudentPaymentHistoryItems(this.params);
        this.studentPaymentHistoryItemResource.count().then(function (count) { return _this.studentPaymentHistoryItemCount = count; });
    };
    StudentDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/main/student/studentdetail/studentdetail.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_student_service__["a" /* StudentService */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["NotificationsService"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_progressbar__["a" /* NgProgress */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_7__services_class_service__["a" /* ClassService */],
            __WEBPACK_IMPORTED_MODULE_9__services_feetype_service__["a" /* FeeTypeService */]])
    ], StudentDetailComponent);
    return StudentDetailComponent;
}());



/***/ }),

/***/ "./src/app/main/student/updatestudent/updatestudent.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"mt-2\">Update Student</h2>\r\n<ol class=\"breadcrumb-arrow\">\r\n\t<li><a [routerLink]=\"['/app/student']\">Student</a></li>\r\n\t<!-- <li><a [routerLink]=\"['/app/student']\">Library</a></li> -->\r\n\t<li class=\"active\"><span>{{student.firstName + \" \" + student.lastName}}</span></li>\t\r\n</ol>\r\n\r\n<div class=\" \">\r\n\t<nav>\r\n\t\t<div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\r\n\t\t\t<a class=\"nav-item nav-link active\" id=\"nav-home-tab\" data-toggle=\"tab\" data-target=\"#classinfo\" href=\"#\" role=\"tab\" aria-controls=\"categoryinfo\"\r\n\t\t\t aria-selected=\"true\">Student Info</a>\r\n\t\t\t<a class=\"nav-item nav-link\" id=\"nav-contact-tab\" data-toggle=\"tab\" data-target=\"#classstudents\" href=\"#\" role=\"tab\" aria-controls=\"catproducts\"\r\n\t\t\t aria-selected=\"false\">Fee Info</a>\r\n\t\t\t <a class=\"nav-item nav-link\" id=\"nav-contact-tab\" data-toggle=\"tab\" data-target=\"#paymentinfo\" href=\"#\" role=\"tab\" aria-controls=\"catproducts\"\r\n\t\t\t aria-selected=\"false\">Payment Info</a>\r\n\t\t</div>\r\n\t</nav>\r\n\t<div class=\"tab-content pt-md-4 pl-3\" id=\"nav-tabContent\">\r\n\t\t<div class=\"tab-pane fade show active\" id=\"classinfo\" role=\"tabpanel\" aria-labelledby=\"classinfo-tab\">\r\n\t\t\t<div class=\"col-md-10 alert alert-danger\" role=\"alert\" *ngIf=\"(sf.submitted && !sf.valid)\">\r\n\t\t\t\tPlease fill in the highlighted fields.\r\n\t\t\t</div>\r\n\t\t<form (ngSubmit)=\"sf.form.valid && updateStudent();\" #sf=\"ngForm\" novalidate>\r\n\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Admission No.</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"admissionno\" [(ngModel)]=\"student.admissionno\" #admissionno=\"ngModel\" required\r\n\t\t\t\t\t [ngClass]=\"{'has-error': sf.submitted && !admissionno.valid}\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Admission for Class</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t <select class=\"form-control\" name=\"studentClass\" [(ngModel)]=\"student.studentClass\" #studentClass=\"ngModel\"\r\n\t\t\t\t\t [compareWith]=\"fnCompareStudentClass\" required [ngClass]=\"{'has-error': sf.submitted && !studentClass.valid}\">\r\n\t\t\t\t\t <option *ngFor=\"let admclas of admissionClasses\" [ngValue]=\"admclas\">{{admclas.name}}</option>\r\n\t\t\t\t\t </select>\r\n\t\t\t\t</div>\r\n\t\t\t\t<!-- <div class=\"col-sm-2\">\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-danger btn-sm text-white ng-star-inserted\" (click)=\"doInactiveStudent(student)\">\r\n\t\t\t\t\t\t<i class=\"fa fa-power-off\"></i> In Active\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div> -->\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Student First Name</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"firstName\" [(ngModel)]=\"student.firstName\" #firstName=\"ngModel\" required\r\n\t\t\t\t\t [ngClass]=\"{'has-error': sf.submitted && !firstName.valid}\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Student Last Name</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"lastName\" [(ngModel)]=\"student.lastName\" #lastName=\"ngModel\"\r\n\t\t\t\t\t required [ngClass]=\"{'has-error': sf.submitted && !lastName.valid}\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Gender</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<select class=\"form-control\" name=\"gender\" [(ngModel)]=\"student.gender\" #gender=\"ngModel\">\r\n\t\t\t\t\t\t\t\t\t<option value=\"M\" selected>Male</option>\r\n\t\t\t\t\t\t\t\t\t<option value=\"F\">Female</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">DOB</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<input type=\"text\" placeholder=\"DD/MM/YYYY\" mask='00/00/0000' class=\"form-control\" name=\"studentdob\" [(ngModel)]=\"student.studentdob\" #studentdob=\"ngModel\" required [ngClass]=\"{'has-error': sf.submitted && !studentdob.valid}\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Father Name</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"fathername\" [(ngModel)]=\"student.fathername\" #fathername=\"ngModel\" required [ngClass]=\"{'has-error': sf.submitted && !fathername.valid}\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Father Age</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"fatherage\" [(ngModel)]=\"student.fatherage\" #fatherage=\"ngModel\" mask='000'>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Father Qualification</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"fatherqualification\" [(ngModel)]=\"student.fatherqualification\" #fatherqualification=\"ngModel\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Father DOB</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"DD/MM/YYYY\" mask='00/00/0000' name=\"fatherdob\" [(ngModel)]=\"student.fatherdob\" #fatherdob=\"ngModel\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Father Profession</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"fatherprofession\" [(ngModel)]=\"student.fatherprofession\" #fatherprofession=\"ngModel\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Mother Name</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"mothername\" [(ngModel)]=\"student.mothername\" #mothername=\"ngModel\" required [ngClass]=\"{'has-error': sf.submitted && !mothername.valid}\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Mother Age</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"motherage\" [(ngModel)]=\"student.motherage\" #motherage=\"ngModel\" mask='000'>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Mother Qualification</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"motherqualification\" [(ngModel)]=\"student.motherqualification\" #motherqualification=\"ngModel\">\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Mother DOB</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"DD/MM/YYYY\" mask='00/00/0000' name=\"motherdob\" [(ngModel)]=\"student.motherdob\" #motherdob=\"ngModel\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Mother Profession</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"motherprofession\" [(ngModel)]=\"student.motherprofession\" #motherprofession=\"ngModel\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Address</label>\r\n\t\t\t\t<div class=\"col-sm-8\">\r\n\t\t\t\t\t<textarea class=\"form-control\" name=\"address\" [(ngModel)]=\"student.address\" #address=\"ngModel\" required [ngClass]=\"{'has-error': sf.submitted && !address.valid}\"\r\n\t\t\t\t\t [(ngModel)]=\"student.address\" #address=\"ngModel\"> </textarea>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Phone No.</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"phoneno\" [(ngModel)]=\"student.phoneno\" #phoneno=\"ngModel\" mask='00000-00000'>\r\n\t\t\t\t</div>\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Cell No.</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"cellno\" [(ngModel)]=\"student.cellno\" #cellno=\"ngModel\" mask='(0000) 000-0000'>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t<label class=\"col-sm-2 col-form-label\">Email Address</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<!-- <input type=\"email\" class=\"form-control\" name=\"emailaddress\" [(ngModel)]=\"student.emailaddress\" #emailaddress=\"ngModel\" email [ngClass]=\"{'has-error': (emailaddress.dirty || emailaddress.touched)}\" pattern=\"[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}\"> -->\r\n\t\t\t\t\t<input type=\"email\" class=\"form-control\" name=\"emailaddress\" [(ngModel)]=\"student.emailaddress\" #emailaddress=\"ngModel\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<button type=\"submit\" class=\"btn btn-bd-primary mb-4\">Update</button>\r\n\t\t\t\t<!-- <button type=\"button\" (click)=\"ClearAll(sf)\" class=\"btn btn-outline-secondary mb-4\" >Reset</button> -->\r\n\t\t\t</div>\r\n\r\n\t\t\t\r\n\t\t</form>\r\n\t\t</div>\r\n\t\t<div class=\"tab-pane fade\" id=\"classstudents\" role=\"tabpanel\" aria-labelledby=\"classstudents-tab\">\r\n\t\t\t\t<div class=\"row mb-3 h5\">\r\n\t\t\t\t\t\t<div class=\"col-xl-3 col-sm-6\">\r\n\t\t\t\t\t\t\t<div class=\"card text-white bg-primary o-hidden p-2\">\r\n\t\t\t\t\t\t\t\t<div class=\"\">\r\n\t\t\t\t\t\t\t\t\tTotal Fee : \r\n\t\t\t\t\t\t\t\t\t<span class=\"pull-right\" *ngIf=\"studentFee\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-inr\"></i> {{studentFee.studentFeeAmt || 0}}\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"pull-right\" *ngIf=\"!studentFee\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-inr\"></i> 0\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-xl-3 col-sm-6\">\r\n\t\t\t\t\t\t\t<div class=\"card text-white bg-warning o-hidden p-2\">\r\n\t\t\t\t\t\t\t\t<div class=\"\">\r\n\t\t\t\t\t\t\t\t\tWaiver Amount : \r\n\t\t\t\t\t\t\t\t\t<span class=\"pull-right\" *ngIf=\"studentFee\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-inr\"></i> {{studentFee.studentWaiverFeeAmt || 0}}\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t<span class=\"pull-right\" *ngIf=\"!studentFee\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-inr\"></i> 0\r\n\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-xl-3 col-sm-6\">\r\n\t\t\t\t\t\t\t<div class=\"card text-white bg-danger o-hidden p-2\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"\">\r\n\t\t\t\t\t\t\t\t\t\t\tBalance Fee : \r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"pull-right\" *ngIf=\"studentFee\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-inr\"></i> {{studentFee.studentBalanceFeeAmt || 0}}\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"pull-right\" *ngIf=\"!studentFee\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-inr\"></i> 0\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-xl-3 col-sm-6\">\r\n\t\t\t\t\t\t\t<div class=\"card text-white bg-success o-hidden p-2\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"\">\r\n\t\t\t\t\t\t\t\t\t\t\tFee Paid : \r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"pull-right\" *ngIf=\"studentFee\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-inr\"></i> {{studentFee.studentPaidFeeAmt || 0}}\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"pull-right\" *ngIf=\"!studentFee\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-inr\"></i> 0\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-xl-12 col-sm-12\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-bd-primary\" data-toggle=\"modal\" data-target=\"#fineModal\">Add Fee/ Fine</button>\r\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-outline-success\" data-toggle=\"modal\" data-target=\"#paymentModal\">Add Payment</button>\r\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-outline-danger\"  data-toggle=\"modal\" data-target=\"#waiverModal\">Add Waiver</button>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t\t\t\t<data-table id=\"persons-grid\" class=\"table table-sm\"\r\n\t\t\t\t\t\t\t\t\theaderTitle=\"Student Fee\"\r\n\t\t\t\t\t\t\t\t\t[limit]=\"10\"\r\n\t\t\t\t\t\t\t\t\t[items]=\"studentFeeItems\"\r\n\t\t\t\t\t\t\t\t\t[itemCount]=\"studentFeeItemCount\"\r\n\t\t\t\t\t\t\t\t\t(reload)=\"reloadStudentFeeItems($event)\"\r\n\t\t\t\t\t\t\t\t\t[pagination] = \"true\"\r\n\t\t\t\t\t\t\t\t\t[rowTooltip]=\"rowTooltip\"\r\n\t\t\t\t\t\t\t\t\t[indexColumn] = \"true\"\r\n\t\t\t\t\t\t\t\t\t[substituteRows]=\"false\"\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t<data-table-column\r\n\t\t\t\t\t\t\t\t\t\t[property]=\"'name'\"\r\n\t\t\t\t\t\t\t\t\t\t[header]=\"'Fee'\"\r\n\t\t\t\t\t\t\t\t\t\t[resizable]=\"true\">\r\n\t\t\t\t\t\t\t\t\t</data-table-column>\r\n\t\t\t\t\t\t\t\t\t<data-table-column\r\n\t\t\t\t\t\t\t\t\t\t[property]=\"'paramType'\"\r\n\t\t\t\t\t\t\t\t\t\t[header]=\"'Frequency'\"\r\n\t\t\t\t\t\t\t\t\t\t[resizable]=\"true\">\r\n\t\t\t\t\t\t\t\t\t\t<ng-template #dataTableCell let-item=\"item\">\r\n\t\t\t\t\t\t\t\t\t\t\t{{feeTypeService.displayFrequency(item.paramType)}}\r\n\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t\t</data-table-column>\r\n\t\t\t\t\t\t\t\t\t<data-table-column\r\n\t\t\t\t\t\t\t\t\t\t[property]=\"'value'\"\r\n\t\t\t\t\t\t\t\t\t\t[header]=\"'Amount'\"\r\n\t\t\t\t\t\t\t\t\t\t[resizable]=\"true\">\r\n\t\t\t\t\t\t\t\t\t\t<ng-template #dataTableCell let-item=\"item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-inr\"></i> {{item.value}}\r\n\t\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t\t</data-table-column>\r\n\t\t\t\t\t\t\t\t\t<!-- <data-table-column\r\n\t\t\t\t\t\t\t\t\t\t[property]=\"'active'\"\r\n\t\t\t\t\t\t\t\t\t\t[header]=\"'Actions'\"\r\n\t\t\t\t\t\t\t\t\t\t[resizable]=\"true\">\r\n\t\t\t\t\t\t\t\t\t\t<ng-template #dataTableCell let-item=\"item\">\r\n\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-success btn-sm text-white\" title=\"Pay Fee\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-inr\"></i> Pay\r\n\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t\t</data-table-column> -->\t\r\n\t\t\t\t\t\t\t</data-table>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"mt-4 mb-4\">\r\n\t\t\t\t\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t\t\t\t<data-table id=\"persons-grid\" class=\"table table-sm\"\r\n\t\t\t\t\t\t\t\t\theaderTitle=\"Student Waiver\"\r\n\t\t\t\t\t\t\t\t\t[limit]=\"10\"\r\n\t\t\t\t\t\t\t\t\t[items]=\"studentFeeWaiverHistoryItems\"\r\n\t\t\t\t\t\t\t\t\t[itemCount]=\"studentFeeWaiverHistoryItemCount\"\r\n\t\t\t\t\t\t\t\t\t(reload)=\"reloadStudentFeeWaiverHistoryItems($event)\"\r\n\t\t\t\t\t\t\t\t\t[pagination] = \"true\"\r\n\t\t\t\t\t\t\t\t\t[rowTooltip]=\"rowTooltip\"\r\n\t\t\t\t\t\t\t\t\t[indexColumn] = \"true\"\r\n\t\t\t\t\t\t\t\t\t[substituteRows]=\"false\"\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t>\r\n\t\t\t\t\t\t\t\t\t<data-table-column\r\n\t\t\t\t\t\t\t\t\t\t[property]=\"'studentFeeWaiverCmt'\"\r\n\t\t\t\t\t\t\t\t\t\t[header]=\"'Waiver Comment'\"\r\n\t\t\t\t\t\t\t\t\t\t[resizable]=\"true\">\r\n\t\t\t\t\t\t\t\t\t</data-table-column>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<data-table-column\r\n\t\t\t\t\t\t\t\t\t\t[property]=\"'studentFeeWaiverAmt'\"\r\n\t\t\t\t\t\t\t\t\t\t[header]=\"'Waiver Amount'\"\r\n\t\t\t\t\t\t\t\t\t\t[resizable]=\"true\">\r\n\t\t\t\t\t\t\t\t\t\t<ng-template #dataTableCell let-item=\"item\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-inr\"></i> {{item.studentFeeWaiverAmt}}\r\n\t\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t\t</data-table-column>\t\r\n\t\t\t\t\t\t\t</data-table>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\r\n\t\t</div>\r\n\t\t<div class=\"tab-pane fade mb-5\" id=\"paymentinfo\" role=\"tabpanel\" aria-labelledby=\"paymentinfo-tab\">\r\n\t\t\t\t<button class=\"btn btn-outline-success\" data-toggle=\"modal\" data-target=\"#paymentModal\">Add Payment</button>\r\n\t\t\t<br/>\r\n\t\t\t<div class=\"table-responsive\">\r\n\t\t\t\t\t<data-table id=\"payments-grid\" class=\"table table-sm\"\r\n\t\t\t\t\t\theaderTitle=\"Student Payment\"\r\n\t\t\t\t\t\t[limit]=\"10\"\r\n\t\t\t\t\t\t[items]=\"studentPaymentHistoryItems\"\r\n\t\t\t\t\t\t[itemCount]=\"studentPaymentHistoryItemCount\"\r\n\t\t\t\t\t\t(reload)=\"reloadStudentPaymentHistoryItems($event)\"\r\n\t\t\t\t\t\t[pagination] = \"true\"\r\n\t\t\t\t\t\t[rowTooltip]=\"rowTooltip\"\r\n\t\t\t\t\t\t[indexColumn] = \"true\"\r\n\t\t\t\t\t\t[substituteRows]=\"false\"\r\n\t\t\t\t\t\t[indexColumnHeader]=\"'#'\"\r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t\t<data-table-column\r\n\t\t\t\t\t\t\t[property]=\"'payamentStatus'\"\r\n\t\t\t\t\t\t\t[header]=\"'Payment Status'\"\r\n\t\t\t\t\t\t\t[resizable]=\"true\">\r\n\t\t\t\t\t\t</data-table-column>\r\n\t\t\t\t\t\t<data-table-column\r\n\t\t\t\t\t\t\t[property]=\"'startDate'\"\r\n\t\t\t\t\t\t\t[header]=\"'Payment Date'\"\r\n\t\t\t\t\t\t\t[resizable]=\"true\">\r\n\t\t\t\t\t\t   \r\n\t\t\t\t\t\t</data-table-column>\r\n\t\t\t\t\t\t<data-table-column\r\n\t\t\t\t\t\t\t[property]=\"'studentFeePaymentAmt'\"\r\n\t\t\t\t\t\t\t[header]=\"'Payment Amount'\"\r\n\t\t\t\t\t\t\t[resizable]=\"true\">\r\n\t\t\t\t\t\t\t<ng-template #dataTableCell let-item=\"item\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-inr\"></i> {{item.studentFeePaymentAmt}}\r\n\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t</data-table-column>\r\n\t\t\t\t\t\t<data-table-column\r\n\t\t\t\t\t\t\t[property]=\"'studentFeePaymentCmt'\"\r\n\t\t\t\t\t\t\t[header]=\"'Payment Comment'\"\r\n\t\t\t\t\t\t\t[resizable]=\"true\">\r\n\t\t\t\t\t\t</data-table-column>\r\n\t\t\t\t\t</data-table>\r\n\t\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"paymentModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"paymentModalLabel\" aria-hidden=\"true\">\r\n\t\t<div class=\"modal-dialog\" role=\"document\">\r\n\t\t\t<div class=\"modal-content\">\r\n\t\t\t\t<form (ngSubmit)=\"payFeeForm.form.valid && payFee(studentFee);\" #payFeeForm=\"ngForm\" novalidate>\r\n\t\t\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t\t<h5 class=\"modal-title\" id=\"exampleModalLabel\">Pay Fee</h5>\r\n\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-12 alert alert-danger\" role=\"alert\" *ngIf=\"(payFeeForm.submitted && !payFeeForm.valid)\">\r\n\t\t\t\t\t\t\t\t\t\tPlease fill in the highlighted fields.\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<label class=\"col-sm-12 col-form-label\">Amount</label>\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"  mask='0000000000' name=\"payfeeamount\" [(ngModel)]=\"payFeeAmount\" #payFeeAmountTxt=\"ngModel\" required [ngClass]=\"{'has-error': payFeeForm.submitted && !payFeeAmountTxt.valid}\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<label class=\"col-sm-12 col-form-label\">Comments</label>\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\r\n\t\t\t\t\t\t\t\t\t <input type=\"text\" class=\"form-control\"   name=\"payFeeComments\" [(ngModel)]=\"payFeeComments\" #payFeeCommentsTxt=\"ngModel\" required [ngClass]=\"{'has-error': payFeeForm.submitted && !payFeeCommentsTxt.valid}\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\">Save changes</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"modal fade\" id=\"fineModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"fineModalLabel\" aria-hidden=\"true\">\r\n\t\t<div class=\"modal-dialog\" role=\"document\">\r\n\t\t\t<div class=\"modal-content\">\r\n\t\t\t\t<form (ngSubmit)=\"fineForm.form.valid && addFine(studentFee);\" #fineForm=\"ngForm\" novalidate>\r\n\t\t\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t\t<h5 class=\"modal-title\" id=\"exampleModalLabel\">Add Fee/ Fine</h5>\r\n\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-12 alert alert-danger\" role=\"alert\" *ngIf=\"(fineForm.submitted && !fineForm.valid)\">\r\n\t\t\t\t\t\t\t\t\t\tPlease fill in the highlighted fields.\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<label class=\"col-sm-12 col-form-label\">Amount</label>\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"  mask='0000000000' name=\"fineamount\" [(ngModel)]=\"fineAmount\" #fineAmountTxt=\"ngModel\" required [ngClass]=\"{'has-error': fineForm.submitted && !fineAmountTxt.valid}\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<label class=\"col-sm-12 col-form-label\">Fee/ Fine Comments</label>\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\r\n\t\t\t\t\t\t\t\t\t <input type=\"text\" class=\"form-control\"   name=\"fineComments\" [(ngModel)]=\"fineComments\" #fineCommentsTxt=\"ngModel\" required [ngClass]=\"{'has-error': fineForm.submitted && !fineCommentsTxt.valid}\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\">Save changes</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\t<div class=\"modal fade\" id=\"waiverModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"waiverModalLabel\" aria-hidden=\"true\">\r\n\t\t<div class=\"modal-dialog\" role=\"document\">\r\n\t\t\t<div class=\"modal-content\">\r\n\t\t\t\t<form (ngSubmit)=\"waiverFeeForm.form.valid && addWaiver(studentFee);\" #waiverFeeForm=\"ngForm\" novalidate>\r\n\t\t\t\t\t<div class=\"modal-header\">\r\n\t\t\t\t\t<h5 class=\"modal-title\" id=\"exampleModalLabel\">Add Waiver</h5>\r\n\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"modal-body\">\r\n\t\t\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-12 alert alert-danger\" role=\"alert\" *ngIf=\"(waiverFeeForm.submitted && !waiverFeeForm.valid)\">\r\n\t\t\t\t\t\t\t\t\t\tPlease fill in the highlighted fields.\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<label class=\"col-sm-12 col-form-label\">Name</label>\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" name=\"waiverName\" [(ngModel)]=\"waiverName\" #waiverNameTxt=\"ngModel\" required [ngClass]=\"{'has-error': waiverFeeForm.submitted && !waiverNameTxt.valid}\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<label class=\"col-sm-12 col-form-label\">Amount</label>\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\r\n\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"form-control\"  mask='0000000000' name=\"waiverAmount\" [(ngModel)]=\"waiverAmount\" #waiverAmountTxt=\"ngModel\" required [ngClass]=\"{'has-error': waiverFeeForm.submitted && !waiverAmountTxt.valid}\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<label class=\"col-sm-12 col-form-label\">Comments</label>\r\n\t\t\t\t\t\t\t\t<div class=\"col-sm-12\">\r\n\t\t\t\t\t\t\t\t\t <input type=\"text\" class=\"form-control\"   name=\"waiverComments\" [(ngModel)]=\"waiverComments\" #waiverCommentsTxt=\"ngModel\" required [ngClass]=\"{'has-error': waiverFeeForm.submitted && !waiverCommentsTxt.valid}\">\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"modal-footer\">\r\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\r\n\t\t\t\t\t<button type=\"submit\" class=\"btn btn-primary\">Save changes</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>"

/***/ }),

/***/ "./src/app/main/student/updatestudent/updatestudent.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateStudentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_progressbar__ = __webpack_require__("./node_modules/ngx-progressbar/modules/ngx-progressbar.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__ = __webpack_require__("./node_modules/angular2-notifications/angular2-notifications.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular5_data_table__ = __webpack_require__("./node_modules/angular5-data-table/esm5/angular5-data-table.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_student_service__ = __webpack_require__("./src/app/services/student.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_student__ = __webpack_require__("./src/app/models/student.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_class_service__ = __webpack_require__("./src/app/services/class.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_studentfee__ = __webpack_require__("./src/app/models/studentfee.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_feetype_service__ = __webpack_require__("./src/app/services/feetype.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_paystudentfee__ = __webpack_require__("./src/app/models/paystudentfee.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__models_studentfine__ = __webpack_require__("./src/app/models/studentfine.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__models_studentwaiver__ = __webpack_require__("./src/app/models/studentwaiver.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var UpdateStudentComponent = /** @class */ (function () {
    function UpdateStudentComponent(studentService, notif, router, ngProgress, route, classService, feeTypeService) {
        var _this = this;
        this.studentService = studentService;
        this.notif = notif;
        this.router = router;
        this.ngProgress = ngProgress;
        this.route = route;
        this.classService = classService;
        this.feeTypeService = feeTypeService;
        this.student = new __WEBPACK_IMPORTED_MODULE_6__models_student__["a" /* Student */]();
        this.payStudentFee = new __WEBPACK_IMPORTED_MODULE_10__models_paystudentfee__["a" /* PayStudentFee */]();
        this.studentFine = new __WEBPACK_IMPORTED_MODULE_11__models_studentfine__["a" /* StudentFine */]();
        this.studentWaiver = new __WEBPACK_IMPORTED_MODULE_12__models_studentwaiver__["a" /* StudentWaiver */]();
        this.studentFee = new __WEBPACK_IMPORTED_MODULE_8__models_studentfee__["a" /* StudentFee */]();
        this.admissionClasses = [];
        this.studentFeeParams = [];
        this.studentPaymentHistory = [];
        this.studentFeeWaiverHistory = [];
        this.studentFeeItemResource = new __WEBPACK_IMPORTED_MODULE_4_angular5_data_table__["b" /* DataTableResource */](this.studentFeeParams);
        this.studentFeeItems = [];
        this.studentFeeItemCount = 0;
        this.studentPaymentHistoryItemResource = new __WEBPACK_IMPORTED_MODULE_4_angular5_data_table__["b" /* DataTableResource */](this.studentPaymentHistory);
        this.studentPaymentHistoryItems = [];
        this.studentPaymentHistoryItemCount = 0;
        this.studentFeeWaiverHistoryItemResource = new __WEBPACK_IMPORTED_MODULE_4_angular5_data_table__["b" /* DataTableResource */](this.studentFeeWaiverHistory);
        this.studentFeeWaiverHistoryItems = [];
        this.studentFeeWaiverHistoryItemCount = 0;
        this.params = { offset: 0, limit: 10 };
        this.route.params.subscribe(function (params) {
            _this.index = params['id'];
        });
    }
    UpdateStudentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getClassData();
        this.ngProgress.start();
        console.log("Upadte Screen" + this.studentService.studentData);
        if (!this.studentService.studentData) {
            window.scroll(0, 0);
            this.studentService
                .getStudent(this.index)
                .subscribe(function (result) {
                if (result) {
                    _this.student = result;
                    _this.getStudentFee();
                }
                else {
                    _this.notif.info("Information", "No such record not found in the system, please try again.");
                }
                _this.ngProgress.done();
            }, function (error) {
                console.log(error);
                _this.ngProgress.done();
                _this.notif.error("Failure", "While fetching Student detail, please try again.");
            });
        }
        else {
            this.student = this.studentService.studentData;
            this.ngProgress.done();
            this.getStudentFee();
        }
    };
    UpdateStudentComponent.prototype.updateStudent = function () {
        var _this = this;
        console.log("in Update student method" + JSON.stringify(this.student));
        this.ngProgress.start();
        window.scroll(0, 0);
        this.studentService
            .updateStudent(this.student)
            .subscribe(function (result) {
            //this.students = result;
            console.log(result);
            _this.ngProgress.done();
            _this.notif.success("Success", "Student record has been updated successfully.");
        }, function (error) {
            console.log(error);
            _this.ngProgress.done();
            _this.notif.error("Failure", "While updating the Student details, please try again.");
        });
    };
    UpdateStudentComponent.prototype.ClearAll = function (form) {
        console.log("res");
        form.resetForm();
    };
    UpdateStudentComponent.prototype.doInactiveStudent = function (student) {
        console.log('Clicked: ' + student.firstName);
    };
    UpdateStudentComponent.prototype.getClassData = function () {
        var _this = this;
        console.log("call Class service");
        this.ngProgress.start();
        this.classService
            .getClasses()
            .subscribe(function (result) {
            _this.admissionClasses = result;
            _this.ngProgress.done();
            if (_this.admissionClasses.length == 0) {
                _this.notif.info("Information", "There are no class details in the System.");
            }
        }, function (error) {
            console.log(error);
            _this.ngProgress.done();
            _this.notif.error("Failure", "While fetching Class details, please try again.");
        });
    };
    UpdateStudentComponent.prototype.fnCompareStudentClass = function (a, b) {
        //console.log(a && b && a.studentClassId == b.studentClassId);
        return a && b && a.studentClassId == b.studentClassId;
    };
    UpdateStudentComponent.prototype.getStudentFee = function () {
        var _this = this;
        console.log("call Student service for student Fee");
        this.ngProgress.start();
        this.studentService
            .getStudentFee(this.index)
            .subscribe(function (result) {
            _this.studentFee = (result.studentFeeId) ? result : null;
            if (!_this.studentFee) {
                _this.notif.info("Information", "There are no Student Fee details in the System.");
            }
            else {
                _this.studentFeeParams = result.studentFeeParams;
                _this.studentPaymentHistory = result.studentPaymentHistories;
                _this.resetStudentFeeAndPaymentGrid();
                _this.ngProgress.done();
                _this.getWaiverDetails(result.studentFeeId);
            }
        }, function (error) {
            console.log(error);
            _this.ngProgress.done();
            _this.notif.error("Failure", "While fetching Student Fee details, please try again.");
        });
    };
    UpdateStudentComponent.prototype.getWaiverDetails = function (studentFeeId) {
        var _this = this;
        console.log("call getWaiverDetails for student Fee");
        this.ngProgress.start();
        this.studentService
            .getWaiversFroStudentFee(studentFeeId)
            .subscribe(function (result) {
            _this.studentFeeWaiverHistory = result.studentFeeWaiverHistory;
            _this.studentFeeWaiverHistoryItemResource = new __WEBPACK_IMPORTED_MODULE_4_angular5_data_table__["b" /* DataTableResource */](_this.studentFeeWaiverHistory);
            _this.reloadStudentFeeWaiverHistoryItems(_this.params);
            _this.studentFeeWaiverHistoryItemResource.count().then(function (count) { return _this.studentFeeWaiverHistoryItemCount = count; });
            _this.ngProgress.done();
        }, function (error) {
            console.log(error);
            _this.ngProgress.done();
            _this.notif.error("Failure", "While fetching Waiver details, please try again.");
        });
    };
    UpdateStudentComponent.prototype.reloadStudentFeeItems = function (params) {
        var _this = this;
        console.log("reload  --> reloadStudentFeeItems");
        this.studentFeeItemResource.query(params).then(function (items) { return _this.studentFeeItems = items; });
    };
    UpdateStudentComponent.prototype.reloadStudentPaymentHistoryItems = function (params) {
        var _this = this;
        console.log("reload --> reloadStudentPaymentHistoryItems");
        this.studentPaymentHistoryItemResource.query(params).then(function (items) { return _this.studentPaymentHistoryItems = items; });
    };
    UpdateStudentComponent.prototype.reloadStudentFeeWaiverHistoryItems = function (params) {
        var _this = this;
        console.log("reload --> reloadStudentFeeWaiverHistoryItems");
        this.studentFeeWaiverHistoryItemResource.query(params).then(function (items) { return _this.studentFeeWaiverHistoryItems = items; });
    };
    // special properties:
    UpdateStudentComponent.prototype.rowClick = function (rowEvent) {
        console.log('Clicked: ' + rowEvent.row.item.name);
    };
    UpdateStudentComponent.prototype.rowTooltip = function (item) {
        return item.name;
    };
    UpdateStudentComponent.prototype.payFee = function (studentFee) {
        var _this = this;
        console.log("pay Fee" + studentFee);
        // let payStudentFee = {
        //   studentFee : studentFee,
        //   payFeeAmount : this.payFeeAmount,
        //   payFeeComments: this.payFeeComments
        // }
        //console.log(payStudentFee);
        this.payStudentFee.paymentAmount = this.payFeeAmount;
        this.payStudentFee.paymentComments = this.payFeeComments;
        this.payStudentFee.studentFee = this.studentFee;
        console.log(this.payStudentFee);
        this.ngProgress.start();
        window.scroll(0, 0);
        this.studentService
            .addStudentPayment(this.payStudentFee)
            .subscribe(function (result) {
            //this.students = result;
            console.log(result);
            _this.studentFee = result;
            _this.studentFeeParams = result.studentFeeParams;
            _this.studentPaymentHistory = result.studentPaymentHistories;
            _this.resetStudentFeeAndPaymentGrid();
            _this.ngProgress.done();
            _this.notif.success("Success", "Amount has been paid successfully.");
        }, function (error) {
            console.log(error);
            _this.ngProgress.done();
            _this.notif.error("Failure", "While doing payment, please try again.");
        });
    };
    UpdateStudentComponent.prototype.addWaiver = function (studentFee) {
        var _this = this;
        this.studentWaiver.waiverName = this.waiverName;
        this.studentWaiver.waiverAmount = this.waiverAmount;
        this.studentWaiver.waiverComments = this.waiverComments;
        this.studentWaiver.studentFee = this.studentFee;
        console.log(this.studentWaiver);
        this.ngProgress.start();
        window.scroll(0, 0);
        this.studentService
            .addStudentWaiver(this.studentWaiver)
            .subscribe(function (result) {
            console.log(result);
            _this.studentFee = result;
            _this.resetStudentFeeAndPaymentGrid();
            _this.ngProgress.done();
            _this.notif.success("Success", "Waiver has been added successfully.");
            _this.getWaiverDetails(_this.studentFee.studentFeeId);
        }, function (error) {
            console.log(error);
            _this.ngProgress.done();
            _this.notif.error("Failure", "While adding waiver, please try again.");
        });
    };
    UpdateStudentComponent.prototype.addFine = function (studentFee) {
        //alert(this.fineAmount + "==" + this.fineComments);
        var _this = this;
        this.studentFine.fineAmount = this.fineAmount;
        this.studentFine.fineComments = this.fineComments;
        this.studentFine.studentFee = this.studentFee;
        console.log(this.studentFine);
        this.ngProgress.start();
        window.scroll(0, 0);
        this.studentService
            .addStudentFine(this.studentFine)
            .subscribe(function (result) {
            //this.students = result;
            console.log(result);
            _this.studentFee = result;
            _this.studentFeeParams = result.studentFeeParams;
            _this.resetStudentFeeAndPaymentGrid();
            _this.ngProgress.done();
            _this.notif.success("Success", "Fine has been added successfully.");
        }, function (error) {
            console.log(error);
            _this.ngProgress.done();
            _this.notif.error("Failure", "While doing Fine, please try again.");
        });
    };
    UpdateStudentComponent.prototype.resetStudentFeeAndPaymentGrid = function () {
        var _this = this;
        this.studentFeeItemResource = new __WEBPACK_IMPORTED_MODULE_4_angular5_data_table__["b" /* DataTableResource */](this.studentFeeParams);
        this.reloadStudentFeeItems(this.params);
        this.studentFeeItemResource.count().then(function (count) { return _this.studentFeeItemCount = count; });
        this.studentPaymentHistoryItemResource = new __WEBPACK_IMPORTED_MODULE_4_angular5_data_table__["b" /* DataTableResource */](this.studentPaymentHistory);
        this.reloadStudentPaymentHistoryItems(this.params);
        this.studentPaymentHistoryItemResource.count().then(function (count) { return _this.studentPaymentHistoryItemCount = count; });
    };
    UpdateStudentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/main/student/updatestudent/updatestudent.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_student_service__["a" /* StudentService */],
            __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["NotificationsService"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_progressbar__["a" /* NgProgress */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_7__services_class_service__["a" /* ClassService */],
            __WEBPACK_IMPORTED_MODULE_9__services_feetype_service__["a" /* FeeTypeService */]])
    ], UpdateStudentComponent);
    return UpdateStudentComponent;
}());



/***/ }),

/***/ "./src/app/main/updatecategory/updatecategory.component.html":
/***/ (function(module, exports) {

module.exports = "<h2 class=\"mt-2\">Categories</h2>\r\n<nav aria-label=\"breadcrumb\">\r\n\t<ol class=\"breadcrumb\">\r\n\t\t<li class=\"breadcrumb-item\">\r\n\t\t\t<a [routerLink]=\"['/app/categories']\">Categories</a>\r\n\t\t</li>\r\n\t\t<li class=\"breadcrumb-item active\" aria-current=\"page\">Apparel</li>\r\n\t</ol>\r\n</nav>\r\n\r\n\r\n<div class=\" \">\r\n\t<nav>\r\n\t\t<div class=\"nav nav-tabs\" id=\"nav-tab\" role=\"tablist\">\r\n\t\t\t<a class=\"nav-item nav-link active\" id=\"nav-home-tab\" data-toggle=\"tab\" data-target=\"#categoryinfo\" href=\"#\" role=\"tab\" aria-controls=\"categoryinfo\"\r\n\t\t\t aria-selected=\"true\">Category Info</a>\r\n\t\t\t<a class=\"nav-item nav-link\" id=\"nav-profile-tab\" data-toggle=\"tab\" data-target=\"#subcategories\" href=\"#\" role=\"tab\" aria-controls=\"subcategories\"\r\n\t\t\t aria-selected=\"false\">Subcategories</a>\r\n\t\t\t<a class=\"nav-item nav-link\" id=\"nav-contact-tab\" data-toggle=\"tab\" data-target=\"#catproducts\" href=\"#\" role=\"tab\" aria-controls=\"catproducts\"\r\n\t\t\t aria-selected=\"false\">Products</a>\r\n\t\t</div>\r\n\t</nav>\r\n\t<div class=\"tab-content pt-md-4 pl-3\" id=\"nav-tabContent\">\r\n\t\t<div class=\"tab-pane fade show active\" id=\"categoryinfo\" role=\"tabpanel\" aria-labelledby=\"categoryinfo-tab\">\r\n\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t<label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">Category Name</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"staticEmail\" value=\"\" placeholder=\"\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t<label for=\"inputPassword\" class=\"col-sm-2 col-form-label\">Show category title</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<select id=\"show-title\" name=\"show_title\" class=\"form-control\">\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"1\" selected=\"selected\">Show</option>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<option value=\"0\">Hide</option>\r\n\t\t\t\t\t\t\t\t\t  </select>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-group row\">\r\n\t\t\t\t<label for=\"inputPassword\" class=\"col-sm-2 col-form-label\">Description</label>\r\n\t\t\t\t<div class=\"col-sm-3\">\r\n\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"inputPassword\" placeholder=\"\">\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t<button class=\"btn btn-bd-primary mb-4\">Update</button>\r\n\t\t</div>\r\n\t\t<div class=\"tab-pane fade\" id=\"subcategories\" role=\"tabpanel\" aria-labelledby=\"subcategories-tab\">\r\n\t\t\t<a class=\"btn btn-bd-primary btn-sm mb-4\" href=\"#\">New Category</a>\r\n\t\t\t<br/>\r\n\t\t\t<table class=\"table table-sm table-bordered table-hover table-sortable\">\r\n\t\t\t\t<thead>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<th scope=\"col\">#</th>\r\n\t\t\t\t\t\t<th scope=\"col\">Category</th>\r\n\t\t\t\t\t\t<th scope=\"col\">Featured</th>\r\n\t\t\t\t\t\t<th scope=\"col\">Subcat</th>\r\n\t\t\t\t\t\t<th scope=\"col\">Products</th>\r\n\t\t\t\t\t\t<th scope=\"col\">Actions</th>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</thead>\r\n\t\t\t\t<tbody>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<th scope=\"row\">1 </th>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<a href=\"update-category.html\">Electronics</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>0</td>\r\n\t\t\t\t\t\t<td>@mdo</td>\r\n\t\t\t\t\t\t<td>0</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<button class=\"btn btn-outline-success btn-sm\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-power-off\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t<button class=\"btn btn-outline-danger btn-sm\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-trash-o\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t<button class=\"btn btn-outline-warning btn-sm\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-edit\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<th scope=\"row\">2</th>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<a href=\"update-category.html\">Apparel</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>0</td>\r\n\t\t\t\t\t\t<td>@fat</td>\r\n\t\t\t\t\t\t<td>10</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<button class=\"btn btn-outline-success btn-sm\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-power-off\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t<button class=\"btn btn-outline-danger btn-sm\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-trash-o\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t<button class=\"btn btn-outline-warning btn-sm\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-edit\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<th scope=\"row\">3</th>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<a href=\"update-category.html\">TV</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>0</td>\r\n\t\t\t\t\t\t<td>@fat</td>\r\n\t\t\t\t\t\t<td>5</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<button class=\"btn btn-outline-success btn-sm\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-power-off\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t<button class=\"btn btn-outline-danger btn-sm\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-trash-o\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t<button class=\"btn btn-outline-warning btn-sm\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-edit\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</tbody>\r\n\t\t\t</table>\r\n\t\t</div>\r\n\t\t<div class=\"tab-pane fade\" id=\"catproducts\" role=\"tabpanel\" aria-labelledby=\"catproducts-tab\">\r\n\t\t\t<a class=\"btn btn-bd-primary btn-sm mb-4\" href=\"#\">Add Product</a>\r\n\t\t\t<br/>\r\n\t\t\t<table class=\"table table-sm table-bordered table-hover table-sortable\">\r\n\t\t\t\t<thead>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<th scope=\"col\">#</th>\r\n\t\t\t\t\t\t<th scope=\"col\">Name</th>\r\n\t\t\t\t\t\t<th scope=\"col\">Price</th>\r\n\t\t\t\t\t\t<th scope=\"col\">SKU</th>\r\n\t\t\t\t\t\t<th scope=\"col\">In Stock</th>\r\n\t\t\t\t\t\t<th scope=\"col\">Actions</th>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</thead>\r\n\t\t\t\t<tbody>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<th scope=\"row\">1 </th>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<a href=\"#\">Electronics</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>0</td>\r\n\t\t\t\t\t\t<td>@mdo</td>\r\n\t\t\t\t\t\t<td>0</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<button class=\"btn btn-outline-success btn-sm\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-power-off\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t<button class=\"btn btn-outline-danger btn-sm\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-trash-o\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t<button class=\"btn btn-outline-warning btn-sm\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-edit\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<th scope=\"row\">2</th>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<a href=\"#\">Apparel</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>0</td>\r\n\t\t\t\t\t\t<td>@fat</td>\r\n\t\t\t\t\t\t<td>10</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<button class=\"btn btn-outline-success btn-sm\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-power-off\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t<button class=\"btn btn-outline-danger btn-sm\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-trash-o\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t<button class=\"btn btn-outline-warning btn-sm\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-edit\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<th scope=\"row\">3</th>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<a href=\"#\">TV</a>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t<td>0</td>\r\n\t\t\t\t\t\t<td>@fat</td>\r\n\t\t\t\t\t\t<td>5</td>\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<button class=\"btn btn-outline-success btn-sm\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-power-off\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t<button class=\"btn btn-outline-danger btn-sm\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-trash-o\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t<button class=\"btn btn-outline-warning btn-sm\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"fa fa-edit\"></i>\r\n\t\t\t\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</tbody>\r\n\t\t\t</table>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/main/updatecategory/updatecategory.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateCategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UpdateCategoryComponent = /** @class */ (function () {
    function UpdateCategoryComponent() {
    }
    UpdateCategoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/main/updatecategory/updatecategory.component.html")
        })
    ], UpdateCategoryComponent);
    return UpdateCategoryComponent;
}());



/***/ }),

/***/ "./src/app/models/baseurls.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return serviceBaseURL; });
var serviceBaseURL = "https://ngschooldemo.herokuapp.com"; //"http://localhost:8080";;


/***/ }),

/***/ "./src/app/models/classfee.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassFee; });
var ClassFee = /** @class */ (function () {
    function ClassFee() {
    }
    return ClassFee;
}());



/***/ }),

/***/ "./src/app/models/classfeetype.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassFeeType; });
var ClassFeeType = /** @class */ (function () {
    function ClassFeeType() {
    }
    return ClassFeeType;
}());



/***/ }),

/***/ "./src/app/models/frequencymeta.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Frequencies; });
var Frequencies = [
    { id: 'Y', name: 'Yearly' },
    { id: 'M', name: 'Monthly' },
    { id: 'OT', name: 'One Time' },
    { id: 'PT', name: 'Per Term' },
    { id: 'PF', name: 'Per Family' }
];


/***/ }),

/***/ "./src/app/models/generatefee.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GenerateFee; });
var GenerateFee = /** @class */ (function () {
    function GenerateFee() {
    }
    return GenerateFee;
}());



/***/ }),

/***/ "./src/app/models/paystudentfee.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PayStudentFee; });
var PayStudentFee = /** @class */ (function () {
    function PayStudentFee() {
    }
    return PayStudentFee;
}());



/***/ }),

/***/ "./src/app/models/student.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Student; });
var Student = /** @class */ (function () {
    function Student() {
    }
    return Student;
}());



/***/ }),

/***/ "./src/app/models/studentclass.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentClass; });
var StudentClass = /** @class */ (function () {
    function StudentClass() {
    }
    return StudentClass;
}());



/***/ }),

/***/ "./src/app/models/studentfee.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentFee; });
var StudentFee = /** @class */ (function () {
    function StudentFee() {
    }
    return StudentFee;
}());



/***/ }),

/***/ "./src/app/models/studentfine.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentFine; });
var StudentFine = /** @class */ (function () {
    function StudentFine() {
    }
    return StudentFine;
}());



/***/ }),

/***/ "./src/app/models/studentwaiver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentWaiver; });
var StudentWaiver = /** @class */ (function () {
    function StudentWaiver() {
    }
    return StudentWaiver;
}());



/***/ }),

/***/ "./src/app/services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_baseurls__ = __webpack_require__("./src/app/models/baseurls.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.apiURl = __WEBPACK_IMPORTED_MODULE_3__models_baseurls__["a" /* serviceBaseURL */];
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem("currentUser"));
        this.token = currentUser && currentUser.token;
    }
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        console.log("we are in the service" + username + "--" + password);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        this.appuser = { id: '', username: username,
            password: password, email: username, userId: username,
            userType: 'Admin' };
        return this.http
            .post(this.apiURl + "/api/users/login", JSON.stringify(this.appuser), options)
            .map(function (response) {
            // login successful if there's a jwt token in the response
            //let token = response.json() && response.json().token;
            //let firstName =  response.json() && response.json().firstName;
            //let lastName =  response.json() && response.json().lastName;
            _this.appuser = response.json();
            if (_this.appuser.userType) {
                // set token property
                //console.log("auth servie --" + response);
                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem("currentUser", 
                //JSON.stringify({ username: username, token: this.appuser.token, userfullname: this.appuser.userFullName})
                JSON.stringify(_this.appuser));
                // return true to indicate successful login
                return true;
            }
            else {
                // return false to indicate failed login
                return false;
            }
        });
    };
    AuthenticationService.prototype.logout = function () {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem("currentUser");
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/services/class.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_baseurls__ = __webpack_require__("./src/app/models/baseurls.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClassService = /** @class */ (function () {
    function ClassService(http) {
        this.http = http;
        this.apiURl = __WEBPACK_IMPORTED_MODULE_3__models_baseurls__["a" /* serviceBaseURL */];
    }
    ClassService.prototype.getClasses = function () {
        console.log("we are in the service at Get Class method");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        // get users from api
        return this.http
            .get(this.apiURl + "/api/studentclass", options)
            .map(function (response) {
            console.log(response.json());
            return response.json();
        });
    };
    ClassService.prototype.addClass = function (studentClass) {
        console.log("we are in the service at studentClass method" + studentClass);
        console.log(JSON.stringify(studentClass));
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        return this.http
            .post(this.apiURl + "/api/studentclass", JSON.stringify(studentClass), options).map(function (response) {
            // login successful if there's a jwt token in the response
            return response.json();
        });
    };
    ClassService.prototype.getClass = function (StudentClassId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        // get users from api
        return this.http
            .get(this.apiURl + "/api/studentclass/" + StudentClassId, options)
            .map(function (response) { return response.json(); });
    };
    ClassService.prototype.updateClass = function (studentClass) {
        console.log("we are in the service at studentClass method" + studentClass);
        console.log(JSON.stringify(studentClass));
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        return this.http
            .put(this.apiURl + "/api/studentclass", JSON.stringify(studentClass), options).map(function (response) {
            // login successful if there's a jwt token in the response
            return response.json();
        });
    };
    ClassService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]])
    ], ClassService);
    return ClassService;
}());



/***/ }),

/***/ "./src/app/services/classfee.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClassFeeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_baseurls__ = __webpack_require__("./src/app/models/baseurls.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClassFeeService = /** @class */ (function () {
    function ClassFeeService(http) {
        this.http = http;
        this.apiURl = __WEBPACK_IMPORTED_MODULE_3__models_baseurls__["a" /* serviceBaseURL */];
    }
    ClassFeeService.prototype.getclassFees = function () {
        console.log("we are in the service at Get ClassFeeService method");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        // get users from api
        return this.http
            .get(this.apiURl + "/api/classfee", options)
            .map(function (response) {
            console.log(response.json());
            return response.json();
        });
    };
    ClassFeeService.prototype.addClassFee = function (classFee) {
        console.log("we are in the service at studentClass method" + classFee);
        console.log(JSON.stringify(classFee));
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        return this.http
            .post(this.apiURl + "/api/classfee", JSON.stringify(classFee), options).map(function (response) {
            // login successful if there's a jwt token in the response
            return response.json();
        });
    };
    ClassFeeService.prototype.getClassFee = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        // get users from api
        return this.http
            .get(this.apiURl + "/api/classfee/" + id, options)
            .map(function (response) { return response.json(); });
    };
    ClassFeeService.prototype.updateClassFee = function (classFee) {
        console.log("we are in the service at studentClass method" + classFee);
        console.log(JSON.stringify(classFee));
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        return this.http
            .put(this.apiURl + "/api/classfee", JSON.stringify(classFee), options).map(function (response) {
            // login successful if there's a jwt token in the response
            return response.json();
        });
    };
    ClassFeeService.prototype.generateStudentFee = function (generateFee) {
        console.log("we are in the service at generateStudentFee method" + generateFee);
        console.log(JSON.stringify(generateFee));
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        return this.http
            .post(this.apiURl + "/api/generatestudentfee", generateFee, options).map(function (response) {
            // login successful if there's a jwt token in the response
            return response.json();
        });
    };
    ClassFeeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]])
    ], ClassFeeService);
    return ClassFeeService;
}());



/***/ }),

/***/ "./src/app/services/feetype.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeeTypeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_baseurls__ = __webpack_require__("./src/app/models/baseurls.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FeeTypeService = /** @class */ (function () {
    function FeeTypeService(http) {
        this.http = http;
        this.apiURl = __WEBPACK_IMPORTED_MODULE_3__models_baseurls__["a" /* serviceBaseURL */];
        this.varout = '';
    }
    FeeTypeService.prototype.getFeeTypes = function () {
        console.log("we are in the service at Get FeeTypeService method");
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        // get users from api
        return this.http
            .get(this.apiURl + "/api/feetype", options)
            .map(function (response) {
            console.log(response.json());
            return response.json();
        });
    };
    FeeTypeService.prototype.addFeeType = function (classFeeType) {
        console.log("we are in the service at studentClass method" + classFeeType);
        console.log(JSON.stringify(classFeeType));
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        return this.http
            .post(this.apiURl + "/api/feetype", JSON.stringify(classFeeType), options).map(function (response) {
            // login successful if there's a jwt token in the response
            return response.json();
        });
    };
    FeeTypeService.prototype.getFeeType = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        // get users from api
        return this.http
            .get(this.apiURl + "/api/feetype/" + id, options)
            .map(function (response) { return response.json(); });
    };
    FeeTypeService.prototype.updateFeeType = function (classFeeType) {
        console.log("we are in the service at studentClass method" + classFeeType);
        console.log(JSON.stringify(classFeeType));
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        return this.http
            .put(this.apiURl + "/api/feetype", JSON.stringify(classFeeType), options).map(function (response) {
            // login successful if there's a jwt token in the response
            return response.json();
        });
    };
    FeeTypeService.prototype.displayFrequency = function (val) {
        switch (val) {
            case "Y": {
                this.varout = 'Yearly';
                break;
            }
            case "M": {
                this.varout = 'Monthly';
                break;
            }
            case "OT": {
                this.varout = 'One Time';
                break;
            }
            case "PT": {
                this.varout = 'Per Term';
                break;
            }
            case "PF": {
                this.varout = 'Per Family';
                break;
            }
            default: {
                this.varout = '';
                break;
            }
        }
        return this.varout;
    };
    FeeTypeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]])
    ], FeeTypeService);
    return FeeTypeService;
}());



/***/ }),

/***/ "./src/app/services/student.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StudentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_baseurls__ = __webpack_require__("./src/app/models/baseurls.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_paystudentfee__ = __webpack_require__("./src/app/models/paystudentfee.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StudentService = /** @class */ (function () {
    function StudentService(http) {
        this.http = http;
        this.apiURl = __WEBPACK_IMPORTED_MODULE_3__models_baseurls__["a" /* serviceBaseURL */];
    }
    StudentService.prototype.getStudents = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        // get users from api
        return this.http
            .get(this.apiURl + "/api/students", options)
            .map(function (response) { return response.json(); });
    };
    StudentService.prototype.addStudent = function (student) {
        console.log("we are in the service at addStudent method" + student);
        console.log(JSON.stringify(student));
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        return this.http
            .post(this.apiURl + "/api/students", JSON.stringify(student), options).map(function (response) {
            // login successful if there's a jwt token in the response
            return response.json();
        });
    };
    StudentService.prototype.getStudent = function (studentId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        // get users from api
        return this.http
            .get(this.apiURl + "/api/students/" + studentId, options)
            .map(function (response) { return response.json(); });
    };
    StudentService.prototype.updateStudent = function (student) {
        console.log("we are in the service at addStudent method" + student);
        console.log(JSON.stringify(student));
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        return this.http
            .put(this.apiURl + "/api/students", JSON.stringify(student), options).map(function (response) {
            // login successful if there's a jwt token in the response
            return response.json();
        });
    };
    StudentService.prototype.getStudentFee = function (studentId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        // get users from api
        return this.http
            .get(this.apiURl + "/api/studentfees/" + studentId, options)
            .map(function (response) { return response.json(); });
    };
    StudentService.prototype.getWaiversFroStudentFee = function (studentFeeId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        // get users from api
        return this.http
            .get(this.apiURl + "/api/studentfees/" + studentFeeId + "/waiver", options)
            .map(function (response) { return response.json(); });
    };
    StudentService.prototype.getStudentPayment = function (studentId) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        // get users from api
        return this.http
            .get(this.apiURl + "/api/studentfees/" + studentId + "/payment", options)
            .map(function (response) { return response.json(); });
    };
    StudentService.prototype.addStudentPayment = function (payStudentFee) {
        console.log("we are in the service at addStudent method" + __WEBPACK_IMPORTED_MODULE_4__models_paystudentfee__["a" /* PayStudentFee */]);
        console.log(JSON.stringify(payStudentFee));
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        return this.http
            .post(this.apiURl + "/api/studentfees/" + payStudentFee.studentFee.studentFeeId + "/payment", JSON.stringify(payStudentFee), options).map(function (response) {
            // login successful if there's a jwt token in the response
            return response.json();
        });
    };
    StudentService.prototype.addStudentFine = function (studentFine) {
        console.log("we are in the service at Add Fine method" + studentFine);
        console.log(JSON.stringify(studentFine));
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        return this.http
            .post(this.apiURl + "/api/studentfees/" + studentFine.studentFee.studentFeeId + "/addfine", JSON.stringify(studentFine), options).map(function (response) {
            // login successful if there's a jwt token in the response
            return response.json();
        });
    };
    StudentService.prototype.addStudentWaiver = function (studentWaiver) {
        console.log("we are in the service at addwaiver method" + studentWaiver);
        console.log(JSON.stringify(studentWaiver));
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        return this.http
            .post(this.apiURl + "/api/studentfees/" + studentWaiver.studentFee.studentFeeId + "/addwaiver", JSON.stringify(studentWaiver), options).map(function (response) {
            // login successful if there's a jwt token in the response
            return response.json();
        });
    };
    StudentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]])
    ], StudentService);
    return StudentService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__ = __webpack_require__("./src/app/services/authentication.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(http, authenticationService) {
        this.http = http;
        this.authenticationService = authenticationService;
    }
    UserService.prototype.getUsers = function () {
        // add authorization header with jwt token
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({
            Authorization: "Bearer " + this.authenticationService.token
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* RequestOptions */]({ headers: headers });
        // get users from api
        return this.http
            .get("/api/users", options)
            .map(function (response) { return response.json(); });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */],
            __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar\">\r\n\t<a class=\"navbar-brand mr-0 mr-md-2\" href=\"https://getbootstrap.com/\" aria-label=\"Bootstrap\">\r\n\t</a>\r\n\t<img src=\"https://themes.getbootstrap.com/wp-content/themes/bootstrap-marketplace/assets/images/elements/bootstrap-stack.png\"\r\n\t srcset=\"https://themes.getbootstrap.com/wp-content/themes/bootstrap-marketplace/assets/images/elements/bootstrap-stack.png 1x, https://themes.getbootstrap.com/wp-content/themes/bootstrap-marketplace/assets/images/elements/bootstrap-stack@2x.png 2x\"\r\n\t style=\"width:3%\">\r\n\t<h5 class=\"my-0 mr-md-auto font-weight-normal pl-md-3 text-white\"> Admin Console</h5>\r\n  <span class=\"text-white\">Already have an account?</span>\r\n\t<a class=\"btn btn-bd-download d-none d-lg-inline-block mb-3 mb-md-0 ml-md-3\" [routerLink]=\"['/login']\">Log in</a>\r\n</header>\r\n<form class=\"form-signin\">\r\n\t<h1 class=\"h3 mb-3 font-weight-normal\">Sign Up here</h1>\r\n\t<label for=\"inputEmail\" class=\"sr-only\">Email</label>\r\n\t<input type=\"email\" class=\"form-control border-upper-side\" placeholder=\"Email\" required=\"\" autofocus=\"\">\r\n\t\r\n  <label for=\"inputPassword\" class=\"sr-only\">Name</label>\r\n\t<input type=\"input\" class=\"form-control border-none-side\" placeholder=\"Name\" required=\"\">\r\n\r\n  <label for=\"inputPassword\" class=\"sr-only\">Password</label>\r\n\t<input type=\"password\"  class=\"form-control border-lower-side\" placeholder=\"Password\" required=\"\">\r\n\t<!--<div class=\"alert alert-danger\" role=\"alert\">\r\n\t\t<h4 class=\"alert-heading\">Error!</h4>\r\n\t\t<p>User Name is required</p>\r\n\t\t<hr>\r\n\t\t<p class=\"mb-0\">Password is required</p>\r\n\t</div>\r\n-->\r\n<button class=\"btn btn-lg btn-bd-primary btn-block mt-3\" type=\"submit\">Submit</button>\r\n\r\n</form>"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
    }
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/signup/signup.component.html")
        })
    ], SignupComponent);
    return SignupComponent;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
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