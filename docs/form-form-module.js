(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-form-module"],{

/***/ "./src/app/layout/form/admin/test/test.component.html":
/*!************************************************************!*\
  !*** ./src/app/layout/form/admin/test/test.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  test works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/layout/form/admin/test/test.component.scss":
/*!************************************************************!*\
  !*** ./src/app/layout/form/admin/test/test.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/form/admin/test/test.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/layout/form/admin/test/test.component.ts ***!
  \**********************************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestComponent = /** @class */ (function () {
    function TestComponent() {
    }
    TestComponent.prototype.ngOnInit = function () {
    };
    TestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test',
            template: __webpack_require__(/*! ./test.component.html */ "./src/app/layout/form/admin/test/test.component.html"),
            styles: [__webpack_require__(/*! ./test.component.scss */ "./src/app/layout/form/admin/test/test.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TestComponent);
    return TestComponent;
}());



/***/ }),

/***/ "./src/app/layout/form/form-routing.module.ts":
/*!****************************************************!*\
  !*** ./src/app/layout/form/form-routing.module.ts ***!
  \****************************************************/
/*! exports provided: FormRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormRoutingModule", function() { return FormRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form.component */ "./src/app/layout/form/form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _form_component__WEBPACK_IMPORTED_MODULE_2__["FormComponent"]
    }
];
var FormRoutingModule = /** @class */ (function () {
    function FormRoutingModule() {
    }
    FormRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], FormRoutingModule);
    return FormRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/form/form.component.html":
/*!*************************************************!*\
  !*** ./src/app/layout/form/form.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"addForm\">\r\n        <div [@routerTransition]>\r\n            <app-page-header [heading]=\"'Forms'\" [icon]=\"'fa-edit'\"></app-page-header>\r\n          \r\n            <div class=\"row\">\r\n                   \r\n                <div class=\"col-lg-4\">\r\n        \r\n                    \r\n                        <fieldset class=\"form-group\">\r\n                            <label>FirstName</label>\r\n                            <input class=\"form-control\" formControlName=\"firstName\">\r\n                        </fieldset>\r\n                        <fieldset class=\"form-group\">\r\n                            <label>MiddleName</label>\r\n                            <input class=\"form-control\" formControlName=\"middleName\">\r\n                        </fieldset>\r\n                        <fieldset class=\"form-group\">\r\n                            <label>LastName</label>\r\n                            <input class=\"form-control\" formControlName=\"lastName\">\r\n                           \r\n                        </fieldset>\r\n        \r\n                        <fieldset class=\"form-group\">\r\n                            <label>Title</label>\r\n                            <select formControlName=\"title\" class=\"form-control\">\r\n                                    <option value=\"0\">--Select--</option>\r\n                                    \r\n                                    <option *ngFor=\"let each of masterTitle \"\r\n                                          value= \"{{each.key}}\">{{each.value}}\r\n                                    </option>\r\n                                </select>\r\n                        </fieldset>\r\n                        <fieldset class=\"form-group\">\r\n                            <label>Gender</label>\r\n                            <select formControlName=\"gender\" class=\"form-control\" >\r\n                                <option value=\"--Select--\">--Select--</option>\r\n                                \r\n                                <option *ngFor=\"let each of masterGender \"\r\n                                      value= \"{{each.key}}\">{{each.value}}\r\n                                </option>\r\n                            </select>\r\n                        </fieldset>\r\n                        <fieldset class=\"form-group\">\r\n                            <label>Nationality</label>\r\n                            <select formControlName=\"nationality\" class=\"form-control\" >\r\n                                <option value=\"--Select--\">--Select--</option>\r\n                                \r\n                                <option *ngFor=\"let each of masterNationality \"\r\n                                      value= \"{{each.key}}\">{{each.value}}\r\n                                </option>\r\n                            </select>\r\n                        </fieldset>\r\n                        <fieldset class=\"form-group\">\r\n                            <label>Occupation</label>\r\n                            <select formControlName=\"occupation\" class=\"form-control\" >\r\n                                <option value=\"--Select--\">--Select--</option>\r\n                                \r\n                                <option *ngFor=\"let each of masterOccupation \"\r\n                                      value= \"{{each.key}}\">{{each.value}}\r\n                                </option>\r\n                            </select>\r\n                        </fieldset>\r\n        \r\n                        <fieldset class=\"form-group\">\r\n                            <label>Religion</label>\r\n                            <select formControlName=\"religion\" class=\"form-control\" >\r\n                                <option value=\"--Select--\">--Select--</option>\r\n                                \r\n                                <option *ngFor=\"let each of masterReligion \"\r\n                                      value= \"{{each.key}}\">{{each.value}}\r\n                                </option>\r\n                            </select>\r\n                        </fieldset>\r\n        \r\n                        <fieldset class=\"form-group\">\r\n                            <label>maritalStatus</label>\r\n                            <select formControlName=\"maritalStatus\" class=\"form-control\" >\r\n                                <option value=\"--Select--\">--Select--</option>\r\n                                \r\n                                <option *ngFor=\"let each of masterMaritalStatus \"\r\n                                      value= \"{{each.key}}\">{{each.value}}\r\n                                </option>\r\n                            </select>\r\n                        </fieldset>\r\n        \r\n                        <fieldset class=\"form-group\">\r\n                            <label>anniversaryDate</label>\r\n                            <input class=\"form-control\" formControlName=\"anniversaryDate\" type=\"date\">\r\n                        </fieldset>\r\n        \r\n                        <fieldset class=\"form-group\">\r\n                            <label>patientStatus</label>\r\n                            <input class=\"form-control\" formControlName=\"patientStatus\" >\r\n                        </fieldset>\r\n        \r\n                        <fieldset class=\"form-group\">\r\n                            <label>remarks</label>\r\n                            <input class=\"form-control\" formControlName=\"remarks\" >\r\n                        </fieldset> \r\n        \r\n                    \r\n                </div>\r\n        \r\n                <div class=\"col-lg-4\">\r\n        \r\n                    \r\n                        <fieldset class=\"form-group\">\r\n                            <label>hno</label>\r\n                            <input class=\"form-control\" formControlName=\"hno\">\r\n                        </fieldset>\r\n                        <fieldset class=\"form-group\">\r\n                            <label>street</label>\r\n                            <input class=\"form-control\" formControlName=\"street\">\r\n                        </fieldset>\r\n                        <fieldset class=\"form-group\">\r\n                            <label>city</label>\r\n                            <input class=\"form-control\" formControlName=\"city\">\r\n                           \r\n                        </fieldset>\r\n        \r\n                        <fieldset class=\"form-group\">\r\n                            <label>Country</label>\r\n                            <select formControlName=\"country\" class=\"form-control\" [(ngModel)]=\"onselectedCountry\" (ngModelChange)=\"onselectedCountry($event)\">\r\n                                    <option value=\"0\">--Select--</option>\r\n                                    \r\n                                    <option *ngFor=\"let each of masterCountry \"\r\n                                          value= \"{{each.key}}\">{{each.value}}\r\n                                    </option>\r\n                                </select>\r\n                        </fieldset>\r\n                        <fieldset class=\"form-group\">\r\n                            <label>state</label>\r\n                            <select formControlName=\"state\" class=\"form-control\" [(ngModel)]=\"onselectedState\" (ngModelChange)=\"onselectedState($event)\">\r\n                                    <option value=\"0\">--Select--</option>\r\n                                    \r\n                                    <option *ngFor=\"let each of modifiedText \"\r\n                                          value= \"{{each.key}}\">{{each.value}}\r\n                                    </option>\r\n                                </select>\r\n                        </fieldset>\r\n                        <fieldset class=\"form-group\">\r\n                            <label>District</label>\r\n                            <select formControlName=\"district\" class=\"form-control\" >\r\n                                    <option value=\"0\">--Select--</option>\r\n                                    \r\n                                    <option *ngFor=\"let each of modifiedText2 \"\r\n                                          value= \"{{each.key}}\">{{each.value}}\r\n                                    </option>\r\n                                </select>\r\n                        </fieldset>\r\n                       \r\n        \r\n                       \r\n        \r\n                       \r\n        \r\n                        <fieldset class=\"form-group\">\r\n                            <label>Pincode</label>\r\n                            <input class=\"form-control\" formControlName=\"pincodeId\" >\r\n                        </fieldset>\r\n        \r\n                        <fieldset class=\"form-group\">\r\n                            <label>mobileNo</label>\r\n                            <input class=\"form-control\" formControlName=\"mobileNo\" >\r\n                        </fieldset>\r\n        \r\n                        <fieldset class=\"form-group\">\r\n                            <label>phoneNo</label>\r\n                            <input class=\"form-control\" formControlName=\"phoneNo\" >\r\n                        </fieldset>\r\n                        <fieldset class=\"form-group\">\r\n                                <label>faxNo</label>\r\n                                <input class=\"form-control\" formControlName=\"faxNo\" >\r\n                            </fieldset> \r\n                            <fieldset class=\"form-group\">\r\n                                    <label>email</label>\r\n                                    <input class=\"form-control\" formControlName=\"email\" >\r\n                                </fieldset>  \r\n        \r\n                    \r\n                </div>\r\n                \r\n            \r\n               \r\n            </div>\r\n        \r\n            <!-- /.row -->\r\n        </div>\r\n        <button type=\"submit\" (click)=\"onSubmit()\" class=\"btn btn-secondary\">Submit Button</button>&nbsp;&nbsp;\r\n        <button type=\"reset\" class=\"btn btn-secondary\">Reset Button</button>\r\n        </form>"

/***/ }),

/***/ "./src/app/layout/form/form.component.scss":
/*!*************************************************!*\
  !*** ./src/app/layout/form/form.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/form/form.component.ts":
/*!***********************************************!*\
  !*** ./src/app/layout/form/form.component.ts ***!
  \***********************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../router.animations */ "./src/app/router.animations.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { Registration  } from './Registration';
// import {MasterTitle} from "./MasterTitle";
// import { FormService } from './form.service';
// import {MasterGender} from "./MasterGender";
// import {MasterNationality} from "./MasterNationality";
// import {MasterCountry} from "./MasterCountry";
// import {MasterState} from "./masterState";
// import {MasterDistrict} from "./MasterDistrict";
// import {MasterOccupation} from "./MasterOccupation";
// import {MasterReligion} from "./MasterReligion";
// import {MasterMaritalStatus} from "./MasterMaritalStatus";
var FormComponent = /** @class */ (function () {
    function FormComponent(formBuilder) {
        this.formBuilder = formBuilder;
    }
    //   registration : Registration [];
    //   masterTitle: Array<MasterTitle> = [];
    //   masterGender: Array<MasterGender> = [];
    //   masterNationality: Array<MasterNationality> = [];
    //   masterCountry: Array<MasterCountry> = [];
    //   masterState: Array<MasterState> = [];
    // masterOccupation: Array<MasterOccupation> = [];
    // masterReligion: Array<MasterReligion> = [];
    // masterMaritalStatus: Array<MasterMaritalStatus> = [];
    // masterDistrict: Array<MasterDistrict> = [];
    // modifiedText: Array<MasterState> = [];
    // modifiedText2: Array<MasterDistrict> = [];
    // addForm: FormGroup;
    FormComponent.prototype.ngOnInit = function () {
        // this.addForm = this.formBuilder.group({
        //   firstName: [],
        //   lastName: [],
        //   middleName: [],
        //   title:[],
        //   gender: [],
        //   nationality:[],
        //   occupation:[],
        //   religion: [],
        //   maritalStatus: [],
        //   anniversaryDate: [],
        //   patientStatus: [],
        //   remarks: [],
        //   hno: [],
        //   street:[],
        //   city: [],
        //   district: [],
        //   state: [],
        //   country: [],
        //   pincodeId: [],
        //   mobileNo: [],
        //   phoneNo: [],
        //   faxNo: [],
        //   email: []
    };
    FormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/layout/form/form.component.html"),
            styles: [__webpack_require__(/*! ./form.component.scss */ "./src/app/layout/form/form.component.scss")],
            animations: [Object(_router_animations__WEBPACK_IMPORTED_MODULE_1__["routerTransition"])()]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/layout/form/form.module.ts":
/*!********************************************!*\
  !*** ./src/app/layout/form/form.module.ts ***!
  \********************************************/
/*! exports provided: FormModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormModule", function() { return FormModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _form_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./form-routing.module */ "./src/app/layout/form/form-routing.module.ts");
/* harmony import */ var _form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./form.component */ "./src/app/layout/form/form.component.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _admin_test_test_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/test/test.component */ "./src/app/layout/form/admin/test/test.component.ts");
/* harmony import */ var _admin_registration_details_registration_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/registration-details/registration-details.component */ "./src/app/layout/form/admin/registration-details/registration-details.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var FormModule = /** @class */ (function () {
    function FormModule() {
    }
    FormModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _form_routing_module__WEBPACK_IMPORTED_MODULE_2__["FormRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_4__["PageHeaderModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"]],
            declarations: [_form_component__WEBPACK_IMPORTED_MODULE_3__["FormComponent"], _admin_test_test_component__WEBPACK_IMPORTED_MODULE_6__["TestComponent"], _admin_registration_details_registration_details_component__WEBPACK_IMPORTED_MODULE_7__["RegistrationDetailsComponent"]]
        })
    ], FormModule);
    return FormModule;
}());



/***/ })

}]);
//# sourceMappingURL=form-form-module.js.map