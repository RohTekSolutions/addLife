(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-admin-registration-details-registration-details-module"],{

/***/ "./src/app/layout/form/admin/registration-details/registration-details-routing.module.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/layout/form/admin/registration-details/registration-details-routing.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: RegistrationDetailsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationDetailsRoutingModule", function() { return RegistrationDetailsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _registration_details_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registration-details.component */ "./src/app/layout/form/admin/registration-details/registration-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _registration_details_component__WEBPACK_IMPORTED_MODULE_2__["RegistrationDetailsComponent"]
    }
];
var RegistrationDetailsRoutingModule = /** @class */ (function () {
    function RegistrationDetailsRoutingModule() {
    }
    RegistrationDetailsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RegistrationDetailsRoutingModule);
    return RegistrationDetailsRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/form/admin/registration-details/registration-details.module.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/layout/form/admin/registration-details/registration-details.module.ts ***!
  \***************************************************************************************/
/*! exports provided: RegistrationDetailsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationDetailsModule", function() { return RegistrationDetailsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _registration_details_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registration-details-routing.module */ "./src/app/layout/form/admin/registration-details/registration-details-routing.module.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _registration_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registration-details.component */ "./src/app/layout/form/admin/registration-details/registration-details.component.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../auth/auth-interceptor */ "./src/app/auth/auth-interceptor.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var RegistrationDetailsModule = /** @class */ (function () {
    function RegistrationDetailsModule() {
    }
    RegistrationDetailsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _registration_details_routing_module__WEBPACK_IMPORTED_MODULE_2__["RegistrationDetailsRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_3__["PageHeaderModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerModule"].forRoot()],
            declarations: [_registration_details_component__WEBPACK_IMPORTED_MODULE_5__["RegistrationDetailsComponent"]],
            providers: [_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_7__["httpInterceptorProviders"]],
            bootstrap: [_registration_details_component__WEBPACK_IMPORTED_MODULE_5__["RegistrationDetailsComponent"]],
        })
    ], RegistrationDetailsModule);
    return RegistrationDetailsModule;
}());



/***/ })

}]);
//# sourceMappingURL=form-admin-registration-details-registration-details-module.js.map