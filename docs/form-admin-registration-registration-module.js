(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-admin-registration-registration-module"],{

/***/ "./src/app/layout/form/admin/registration/registration-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/layout/form/admin/registration/registration-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: RegistrationRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationRoutingModule", function() { return RegistrationRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _registration_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registration.component */ "./src/app/layout/form/admin/registration/registration.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _registration_component__WEBPACK_IMPORTED_MODULE_2__["RegistrationComponent"]
    }
];
var RegistrationRoutingModule = /** @class */ (function () {
    function RegistrationRoutingModule() {
    }
    RegistrationRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], RegistrationRoutingModule);
    return RegistrationRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/form/admin/registration/registration.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/layout/form/admin/registration/registration.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"resultMsg\">{{resultMsg}}</div>\r\n<form [formGroup]=\"addForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n    <div class=\"card-header titlecss\"><i class=\"fa fa-user-plus\" style=\"color:#ffff\">&nbsp;&nbsp;</i>Registration</div><br>\r\n    <!-- Personal Information card Start-->\r\n    <div class=\"card\">\r\n        <div class=\"card-header\">Personal Information </div>\r\n\r\n        <div class=\"card-body\">\r\n\r\n            <div style=\"font-family: 'Gill Sans';color: rgb(102, 99, 99);\">Walkin : <input type=\"checkbox\"\r\n                    formControlName=\"walkin\"> </div>\r\n\r\n            <fieldset class=\"scheduler-border\">\r\n                <legend class=\"scheduler-border\">Please fill the details</legend>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col\">\r\n                        <input type=\"text\" formControlName=\"walkinNo\" placeholder=\"Walkin No\">\r\n                    </div>\r\n                    <div class=\"col\">\r\n                        <input type=\"text\" placeholder=\"Walkin Date\" formControlName=\"walkinDate\" readonly>\r\n                    </div>\r\n                    <div class=\"col\">\r\n                        <input type=\"text\" placeholder=\"Reg Number\" formControlName=\"registrationNo\" readonly>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col\">\r\n                        <select formControlName=\"regTitle\" class=\"select-dropdown form-control\" [ngClass]=\"{ 'is-invalid': (submitted || f.regTitle.touched) && f.regTitle.errors }\">\r\n                            <option value=\"\" disabled selected>Select Title</option>\r\n                            <option *ngFor=\"let each of masterTitle\" value=\"{{each.value}}\">{{each.value}}</option>\r\n                        </select>\r\n                        <div *ngIf=\"(submitted || f.regTitle.touched) && f.regTitle.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.regTitle.errors.required\">Title is required</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col\">\r\n                        <input type=\"text\" formControlName=\"regPatFamilyName\" class=\"form-control\" placeholder=\"Family Name\"\r\n                            [ngClass]=\"{ 'is-invalid': (submitted || f.regPatFamilyName.touched) && f.regPatFamilyName.errors }\" />\r\n                        <div *ngIf=\" (submitted || f.regPatFamilyName.touched) && f.regPatFamilyName.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.regPatFamilyName.errors.required\">Family Name is required</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col\">\r\n                        <input type=\"text\" formControlName=\"regPatName\" class=\"form-control\" placeholder=\"Name\"\r\n                            [ngClass]=\"{ 'is-invalid': (submitted || f.regPatName.touched) && f.regPatName.errors }\">\r\n                        <div *ngIf=\"(submitted || f.regPatName.touched) && f.regPatName.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.regPatName.errors.required\"> Name is required</div>\r\n                        </div>\r\n                    </div>\r\n                    <!-- <div class=\"col\">\r\n                    <input type=\"text\" formControlName=\"regPatmiddleName\" class=\"form-control\" placeholder=\"Middle Name\">\r\n                </div> -->\r\n                </div>\r\n                <div class=\"row\">\r\n\r\n                    <div class=\"col\">\r\n                        <select formControlName=\"regSex\" class=\"select-dropdown form-control\" [ngClass]=\"{ 'is-invalid': (submitted || f.regSex.touched) && f.regSex.errors }\">\r\n                            <option value=\"\" disabled selected>Select Gender</option>\r\n                            <option *ngFor=\"let each of masterGender \" value=\"{{each.value}}\">{{each.value}}</option>\r\n                        </select>\r\n                        <div *ngIf=\"(submitted || f.regSex.touched) && f.regSex.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.regSex.errors.required\"> Gender is required</div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col\">\r\n                        <select formControlName=\"regMarried\" class=\"select-dropdown form-control\" [ngClass]=\"{ 'is-invalid': (submitted || f.regMarried.touched) && f.regMarried.errors }\">\r\n\r\n                            <option value=\"\" disabled selected>Select Marital Status</option>\r\n                            <option *ngFor=\"let each of masterMaritalStatus \" value=\"{{each.value}}\">{{each.value}}</option>\r\n                        </select>\r\n                        <div *ngIf=\"(submitted || f.regMarried.touched) && f.regMarried.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.regMarried.errors.required\"> Marital Status is required</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col\">\r\n                        <input type=\"text\" placeholder=\"DataOfBirth\" bsDatepicker formControlName=\"regCalculatedDob\"\r\n                            [(ngModel)]=\"selectedDob\" class=\"form-control\" (ngModelChange)=\"onselectedDob($event)\"\r\n                            [ngClass]=\"{ 'is-invalid': (submitted || f.regCalculatedDob.touched) && f.regCalculatedDob.errors }\" />\r\n\r\n                        <div *ngIf=\" (submitted || f.regCalculatedDob.touched) && f.regCalculatedDob.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.regCalculatedDob.errors.required\"> Date Of Birth is required</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                \r\n                <div class=\"row\">\r\n\r\n                    <div class=\"col\">\r\n                        <input type=\"text\" placeholder=\"Age\"  formControlName=\"regAge\"  [(ngModel)]=\"age\" (keypress)=_keyPress($event)\r\n                            (ngModelChange)=\"onselectedAge($event)\" >\r\n                      \r\n                    </div>\r\n                    <div class=\"col\">\r\n                        <select formControlName=\"regAgeType\" class=\"select-dropdown form-control\" [ngClass]=\"{ 'is-invalid': (submitted || f.regAgeType.touched) && f.regAgeType.errors }\">\r\n                            <option value=\"\" disabled selected>Select Age Type</option>\r\n                            <option value=\"Y\">Years</option>\r\n                            <option value=\"M\">Months</option>\r\n                            <option value=\"D\">Days</option>\r\n                        </select>\r\n                        <div *ngIf=\"(submitted || f.regAgeType.touched) && f.regAgeType.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.regAgeType.errors.required\"> Age Type is required</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col\">\r\n                        <input type=\"text\" placeholder=\"Anniversary Date\" bsDatepicker formControlName=\"regAnnivDate\"\r\n                            class=\"form-control\" [ngClass]=\"{ 'is-invalid': (submitted || f.regAnnivDate.touched) && f.regAnnivDate.errors }\" />\r\n                        <div *ngIf=\"(submitted || f.regAnnivDate.touched) && f.regAnnivDate.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.regAnnivDate.errors.required\"> Anniversary Date is required</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n          \r\n                <div class=\"row\">\r\n                    <div class=\"col\">\r\n                        <select formControlName=\"regReligion\" class=\"select-dropdown form-control\" [ngClass]=\"{ 'is-invalid': (submitted || f.regReligion.touched) && f.regReligion.errors }\">\r\n                            <option value=\"\" disabled selected>Select Religion</option>\r\n                            <option *ngFor=\"let each of masterReligion \" value=\"{{each.value}}\">{{each.value}}</option>\r\n                        </select>\r\n                        <div *ngIf=\"(submitted || f.regReligion.touched) && f.regReligion.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.regReligion.errors.required\"> Religion is required</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col\">\r\n                        <select formControlName=\"regOccPn\" class=\"select-dropdown form-control\" [ngClass]=\"{ 'is-invalid': (submitted || f.regOccPn.touched) && f.regOccPn.errors }\">\r\n                            <option value=\"\" disabled selected>Select Occupation</option>\r\n                            <option *ngFor=\"let each of masterOccupation \" value=\"{{each.value}}\">{{each.value}}</option>\r\n                        </select>\r\n                        <div *ngIf=\"(submitted || f.regOccPn.touched) && f.regOccPn.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.regOccPn.errors.required\"> Occupation is required</div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"\r\n                            col\">\r\n                        <select formControlName=\"regNationality\" class=\"select-dropdown form-control\" [ngClass]=\"{ 'is-invalid': (submitted || f.regNationality.touched) && f.regNationality.errors }\">\r\n                            <option value=\"\" disabled selected>Select Nationality</option>\r\n                            <option *ngFor=\"let each of masterNationality \" value=\"{{each.value}}\">{{each.value}}</option>\r\n                        </select>\r\n                        <div *ngIf=\"(submitted || f.regNationality.touched) && f.regNationality.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.regNationality.errors.required\"> Nationality is required</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n\r\n                    <!-- <div class=\"col\">\r\n                        <input type=\"text\" formControlName=\"regPatStatus\" placeholder=\"Patient Status\"\r\n                            [ngClass]=\"{ 'is-invalid': submitted && f.regPatStatus.errors }\">\r\n                        <div *ngIf=\"submitted && f.regPatStatus.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.regPatStatus.errors.required\">Patient status is required</div>\r\n                        </div>\r\n                    </div> -->\r\n                    <div class=\"col\">\r\n                        <input type=\"text\" formControlName=\"regMobileNo\" (keypress)=_keyPress($event)  placeholder=\"Mobile No\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': (submitted || f.regMobileNo.touched) && f.regMobileNo.errors }\"/> \r\n                        <div *ngIf=\"(submitted || f.regMobileNo.touched) && f.regMobileNo.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"f.regMobileNo.errors.required\">Mobile No is required</div>\r\n                                <div *ngIf=\"f.regMobileNo.errors.maxlength\">Mobile No must be 10 digits </div>\r\n                                <div *ngIf=\"f.regMobileNo.errors.minlength\">Mobile No must be 10 digits </div>\r\n                                <div *ngIf=\"f.regMobileNo.errors.pattern\">Enter Valid Mobile No</div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col\">\r\n                        <input type=\"text\" formControlName=\"regResPhone\" (keypress)=_keyPress($event)  placeholder=\"Phone No\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': (submitted || f.regResPhone.touched) && f.regResPhone.errors }\"/>\r\n                        <div *ngIf=\"(submitted || f.regResPhone.touched) && f.regResPhone.errors\" class=\"invalid-feedback\">\r\n                                <div *ngIf=\"f.regResPhone.errors.required\">Phone No is required</div>\r\n                                <div *ngIf=\"f.regResPhone.errors.maxlength\">Phone No must be 10 digits </div>\r\n                                <div *ngIf=\"f.regResPhone.errors.minlength\">Phone No must be 10 digits </div>\r\n                                <div *ngIf=\"f.regResPhone.errors.pattern\">Enter Valid Phone No</div>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n\r\n                    <div class=\"col\">\r\n                        <input type=\"text\" formControlName=\"regEmail\" class=\"form-control\" placeholder=\"Email\">\r\n                        <!-- <div *ngIf=\"submitted && f.regEmail.errors\" class=\"invalid-feedback\">\r\n                             <div *ngIf=\"f.regEmail.errors.required\">Email is required</div> \r\n                            <div *ngIf=\"f.regEmail.errors.email\">Email must be a valid email address</div>\r\n                        </div> -->\r\n                    </div>\r\n\r\n                    <div class=\"col\">\r\n                        <input type=\"text\" formControlName=\"regFaxNo\" placeholder=\"Fax No\" class=\"form-control\">\r\n\r\n                    </div>\r\n                </div>\r\n            </fieldset>\r\n            <!--Communication Address Collapse Start-->\r\n            <div class=\"container\">\r\n\r\n                <button type=\"button\" (click)=\"addressCollapse()\" class=\"btn btn-primary collasps-btn\">Communication\r\n                    Address</button><br>\r\n\r\n                <div [hidden]=\"isCollapsed\">\r\n                    <br>\r\n                    <fieldset class=\"scheduler-border\">\r\n                        <legend class=\"scheduler-border\">Please fill the details</legend>\r\n\r\n                        <div class=\"row\">\r\n                            <div class=\"col\">\r\n                                <input type=\"text\" formControlName=\"regHno\" placeholder=\"House No\" class=\"form-control\">\r\n\r\n                            </div>\r\n                            <div class=\"col\">\r\n                                <input type=\"text\" formControlName=\"regStreet\" placeholder=\"Street\" class=\"form-control\">\r\n                            </div>\r\n\r\n                            <div class=\"col\">\r\n                                <input type=\"text\" formControlName=\"regCity\" placeholder=\"City\" class=\"form-control\">\r\n\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col\">\r\n                                <select formControlName=\"regCountry\" class=\"select-dropdown form-control\"  (ngModelChange)=\"onselectedCountry($event)\" [ngClass]=\"{ 'is-invalid': (submitted || f.regCountry.touched) && f.regCountry.errors }\">\r\n                                    <option value=\"\" disabled selected>Select Country</option>\r\n                                    <option *ngFor=\"let each of masterCountry \" value=\"{{each.key}}\">{{each.value}}</option>\r\n                                </select>\r\n                                <div *ngIf=\"(submitted || f.regCountry.touched) && f.regCountry.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.regCountry.errors.required\"> Country is required</div>\r\n                                </div>\r\n\r\n                            </div>\r\n                            <div class=\"col\">\r\n                                <select formControlName=\"regState\" class=\"select-dropdown form-control\"\r\n                                    (ngModelChange)=\"onselectedState($event)\" [ngClass]=\"{ 'is-invalid': (submitted || f.regState.touched) && f.regState.errors }\">\r\n                                    <option value=\"\" disabled selected>Select State</option>\r\n                                    <option *ngFor=\"let each of masterState \" value=\"{{each.key}}\">{{each.value}}</option>\r\n                                </select>\r\n                                <div *ngIf=\"(submitted || f.regState.touched) && f.regState.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.regState.errors.required\"> State is required</div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"col\">\r\n                                <select formControlName=\"regArea\" class=\"select-dropdown form-control\" [ngClass]=\"{ 'is-invalid': (submitted || f.regArea.touched) && f.regArea.errors }\">\r\n                                    <option value=\"\" disabled selected>Select District</option>\r\n                                    <option *ngFor=\"let each of masterDistrict \" value=\"{{each.key}}\">{{each.value}}</option>\r\n                                </select>\r\n                                <div *ngIf=\"(submitted || f.regArea.touched) && f.regArea.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.regArea.errors.required\"> Distrcit is required</div>\r\n                                </div>\r\n\r\n                            </div>\r\n                            <div class=\"col\">\r\n                                <input type=\"text\" formControlName=\"regPin\" (keypress)=_keyPress($event) placeholder=\"Pincode\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': (submitted || f.regPin.touched) && f.regPin.errors }\"/>\r\n                                <div *ngIf=\"(submitted || f.regPin.touched) && f.regPin.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.regPin.errors.required\">Pin code is required</div>\r\n                                    <div *ngIf=\"f.regPin.errors.maxlength\">Pin code must be 6 digits </div>\r\n                                    <div *ngIf=\"f.regPin.errors.minlength\">Pin code must be 6 digits </div>\r\n                                    </div>\r\n\r\n                            </div>\r\n                        </div>\r\n                    </fieldset>\r\n                </div>\r\n            </div>\r\n            <!--Communication Address Collapse End-->\r\n            <!--Miscellneous Collapse Start-->\r\n\r\n            <div class=\"container\">\r\n                <button type=\"button\" (click)=\"miscellneousCollapse()\" class=\"btn btn-primary collasps-btn\">Miscellneous\r\n                    Information\r\n                </button>\r\n                <div [hidden]=\"ismiscellneousCollapse\">\r\n                    <br>\r\n                    <fieldset class=\"scheduler-border\">\r\n                        <legend class=\"scheduler-border\">Please fill the details</legend>\r\n                        <div class=\"row\">\r\n                            <div class=\"col\">\r\n                                <select formControlName=\"regBldGrp\" class=\"select-dropdown form-control\" [ngClass]=\"{ 'is-invalid': (submitted || f.regBldGrp.touched) && f.regBldGrp.errors }\">\r\n                                    <option value=\"\" disabled selected>Select Blood Group</option>\r\n                                    <option *ngFor=\"let each of masterBloodGrup \" value=\"{{each.value}}\">{{each.value}}</option>\r\n                                </select>\r\n                                <div *ngIf=\"(submitted || f.regBldGrp.touched) && f.regBldGrp.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.regBldGrp.errors.required\"> Blood group is required</div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"\r\n                                    col\">\r\n                                <input type=\"text\" formControlName=\"hospitalMr\" placeholder=\"Hospital MR\" class=\"form-control\">\r\n\r\n                            </div>\r\n\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col\">\r\n                                <input type=\"text\" formControlName=\"regCpAddress\" placeholder=\"Address...\" class=\"form-control\">\r\n                            </div>\r\n                            <div class=\"col\">\r\n                                <select formControlName=\"knowAboutUs\" class=\"select-dropdown form-control\" [ngClass]=\"{ 'is-invalid': (submitted || f.knowAboutUs.touched) && f.knowAboutUs.errors }\">\r\n                                        <option value=\"\" disabled selected>How did you know about us?</option>\r\n                                        <option value=\"Friends\">Friends</option>\r\n                                        <option value=\"Ad\">Ad</option>\r\n                                        <option value=\"Internet\">Internet</option>\r\n                                        <option value=\"Referred by Hospital\">Referred by Hospital</option>\r\n                                        <option value=\"Others\">Others</option>\r\n\r\n                                </select>\r\n                                <div *ngIf=\"(submitted || f.knowAboutUs.touched) && f.knowAboutUs.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.knowAboutUs.errors.required\"> Please fill out the filed</div>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n                    </fieldset>\r\n                </div>\r\n            </div>\r\n            <!--Miscellneous  Collapse End-->\r\n            <!--Family Details  Collapse Start-->\r\n            <div class=\"container\">\r\n                <button type=\"button\" (click)=\"familyCollapse()\" class=\"btn btn-primary collasps-btn\">Family\r\n                    Details\r\n                </button>\r\n                <div [hidden]=\"isFamilyCollapse\">\r\n                    <br>\r\n                    <fieldset class=\"scheduler-border\">\r\n                        <legend class=\"scheduler-border\">Please fill the details</legend>\r\n                        <div class=\"row\">\r\n                            <div class=\"col\">\r\n                                <input type=\"text\" formControlName=\"regPsprtNo\" placeholder=\"Passport No\" class=\"form-control\">\r\n\r\n                            </div>\r\n                            <div class=\"col\">\r\n\r\n                                <input type=\"text\" placeholder=\"issued on\" bsDatepicker formControlName=\"regPsprtIssdt\"\r\n                                    class=\"form-control\" />\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col\">\r\n                                <input type=\"text\" placeholder=\"Valid upto\" bsDatepicker formControlName=\"regPsprtExdt\"\r\n                                    class=\"form-control\" />\r\n                            </div>\r\n                            <div class=\"col\">\r\n                                <input type=\"text\" formControlName=\"regDrLicense\" placeholder=\"Driving License No\" class=\"form-control\">\r\n\r\n                            </div>\r\n\r\n                        </div>\r\n                    </fieldset>\r\n                </div>\r\n            </div>\r\n            <!--Family Details  Collapse End-->\r\n            <div style=\"font-family: Gill Sans;\"><textarea class=\"form-control\" formControlName=\"remarks\" class=\"form-control\"\r\n                    placeholder=\"Enter Remarks...\"></textarea></div><br>\r\n            <div style=\"float: right;\">\r\n                <button class=\"btn btn-outline-primary\" [disabled]=\"!addForm.valid\">Register</button>&nbsp;&nbsp;\r\n                <button type=\"reset\" (click)=\"clear()\" class=\"btn btn-outline-primary\">Clear</button>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n    <!-- Personal Information card End-->\r\n\r\n</form>"

/***/ }),

/***/ "./src/app/layout/form/admin/registration/registration.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/layout/form/admin/registration/registration.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/form/admin/registration/registration.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/layout/form/admin/registration/registration.component.ts ***!
  \**************************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _registration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registration.service */ "./src/app/layout/form/admin/registration/registration.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../auth/token-storage.service */ "./src/app/auth/token-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(token, formBuilder, registrationService, route, router) {
        this.token = token;
        this.formBuilder = formBuilder;
        this.registrationService = registrationService;
        this.route = route;
        this.router = router;
        this.isCollapsed = true;
        this.ismiscellneousCollapse = true;
        this.isFamilyCollapse = true;
        this.submitted = false;
        this.masterTitle = [];
        this.masterGender = [];
        this.masterNationality = [];
        this.masterCountry = [];
        this.masterState = [];
        this.masterOccupation = [];
        this.masterReligion = [];
        this.masterBloodGrup = [];
        this.masterMaritalStatus = [];
        this.masterDistrict = [];
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.info = {
            token: this.token.getToken(),
            username: this.token.getUsername(),
            authorities: this.token.getAuthorities()
        };
        //Reactive Form
        this.addForm = this.formBuilder.group({
            walkin: [],
            walkinNo: [],
            walkinDate: [],
            registrationNo: [],
            regTitle: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            regPatName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10)]],
            regPatLastName: [],
            regPatFamilyName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            regSex: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            regMarried: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            regCalculatedDob: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            regAge: [],
            regAgeType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            regReligion: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            regOccPn: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            regNationality: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            regAnnivDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            regPatStatus: [],
            remarks: [],
            regMobileNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[6-9]\d{9}$/)]],
            regResPhone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[6-9]\d{9}$/)]],
            regFaxNo: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            regEmail: [],
            regHno: [],
            regStreet: [],
            regCity: [],
            regArea: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            regState: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            regCountry: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            regPin: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]],
            regBldGrp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            hospitalMr: [],
            regCpAddress: [],
            knowAboutUs: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            regPsprtNo: [],
            regPsprtIssdt: null,
            regPsprtExdt: null,
            regDrLicense: [],
        });
        //Get Countries From Master Countries Table
        var array = [];
        this.registrationService.getCountries().subscribe(function (data) {
            _this.masterCountry = data;
            console.log(_this.masterCountry);
            var mapped = Object.keys(_this.masterCountry).map(function (key) { return ({ type: key, value: _this.masterCountry[key] }); });
            console.log(mapped);
            for (var each in data) {
                array.push({ "key": each, "value": data[each] });
                _this.masterCountry = array;
            }
        });
        //Get Titles From Master Title Table
        var masterTitlearray = [];
        this.registrationService.gettitles().subscribe(function (data) {
            _this.masterTitle = data;
            for (var each in data) {
                masterTitlearray.push({ "key": each, "value": data[each] });
                _this.masterTitle = masterTitlearray;
            }
            console.log(_this.masterTitle);
        });
        //Get Gender From Master Gender Table
        var mastermasterGenderarray = [];
        this.registrationService.getGender()
            .subscribe(function (data) {
            _this.masterGender = data;
            for (var each in data) {
                mastermasterGenderarray.push({ "key": each, "value": data[each] });
                _this.masterGender = mastermasterGenderarray;
            }
            console.log(_this.masterGender);
        });
        //Get Natitionality From Master Nationality Table
        var masterNationalityarray = [];
        this.registrationService.getNationalities()
            .subscribe(function (data) {
            _this.masterNationality = data;
            for (var each in data) {
                masterNationalityarray.push({ "key": each, "value": data[each] });
                _this.masterNationality = masterNationalityarray;
            }
            console.log(_this.masterNationality);
        });
        //Get Occupation From Master Occupation Table
        var masterOccupationarray = [];
        this.registrationService.getOccupations()
            .subscribe(function (data) {
            _this.masterOccupation = data;
            for (var each in data) {
                masterOccupationarray.push({ "key": each, "value": data[each] });
                _this.masterOccupation = masterOccupationarray;
            }
            console.log(_this.masterOccupation);
        });
        //Get Religion From Master Religion Table
        var masterReligionarray = [];
        this.registrationService.getReligions()
            .subscribe(function (data) {
            _this.masterReligion = data;
            for (var each in data) {
                masterReligionarray.push({ "key": each, "value": data[each] });
                _this.masterReligion = masterReligionarray;
            }
            console.log(_this.masterReligion);
        });
        //Get Bllod Group From Master Blood Group Table
        var masterBloodGroupArray = [];
        this.registrationService.getBloodgroups()
            .subscribe(function (data) {
            _this.masterBloodGrup = data;
            for (var each in data) {
                masterBloodGroupArray.push({ "key": each, "value": data[each] });
                _this.masterBloodGrup = masterBloodGroupArray;
            }
        });
        //Get Marital Status From Master Marital Status Table
        var masterMaritalStatusarray = [];
        this.registrationService.getMaritalStatus()
            .subscribe(function (data) {
            _this.masterMaritalStatus = data;
            for (var each in data) {
                masterMaritalStatusarray.push({ "key": each, "value": data[each] });
                _this.masterMaritalStatus = masterMaritalStatusarray;
            }
            console.log(_this.masterMaritalStatus);
        });
    };
    //Age Calculation From DOB
    RegistrationComponent.prototype.onselectedDob = function (dob) {
        console.log("Date of Birth ......" + dob);
        if (dob != null && dob != undefined) {
            var timeDiff = Math.abs(Date.now() - new Date(dob).getTime());
            this.age = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
            console.log("Age is ......" + this.age);
        }
        else {
            this.age = 0;
        }
    };
    //Get DOB From Age
    RegistrationComponent.prototype.onselectedAge = function (enteredAge) {
        var CurrentYear = new Date().getFullYear();
        var CurrentMonth = new Date().getMonth() + 1;
        var CurrentDate = new Date().getDate();
        if (enteredAge != '0' && enteredAge != '') {
            var AgeYear = CurrentYear - enteredAge;
            this.selectedDob = CurrentMonth + "/" + CurrentDate + "/" + AgeYear;
            console.log("Date of Birth ......" + this.selectedDob);
        }
        else {
            //this.selectedDob =CurrentMonth+"/"+ CurrentDate +"/"+CurrentYear;
            //this.age=0;
        }
    };
    //Get States based on Country
    RegistrationComponent.prototype.onselectedCountry = function (countryCode) {
        console.log("Country code" + countryCode);
        if (countryCode != null && countryCode != undefined) {
            this.countryFunction(countryCode);
        }
    };
    RegistrationComponent.prototype.countryFunction = function (countryCode) {
        //this.modifiedText=val;
        var _this = this;
        var team = this.addForm.value;
        console.log("team..." + countryCode);
        var array = [];
        this.registrationService.getStates(countryCode)
            .subscribe(function (data) {
            _this.masterState = data;
            for (var each in data) {
                array.push({ "key": each, "value": data[each] });
                _this.masterState = array;
            }
            console.log(_this.masterState);
        });
    };
    //Get Districts based on State
    RegistrationComponent.prototype.onselectedState = function (stateCode) {
        console.log("State code...." + stateCode);
        if (stateCode != null && stateCode != undefined) {
            this.stateFunction(stateCode);
        }
    };
    RegistrationComponent.prototype.stateFunction = function (stateCode) {
        var _this = this;
        //this.modifiedText2=val;
        console.log("State code" + stateCode);
        var team = this.addForm.value;
        var array2 = [];
        this.registrationService.getDistrict(stateCode).subscribe(function (data) {
            _this.masterDistrict = data;
            for (var each in data) {
                array2.push({ "key": each, "value": data[each] });
                _this.masterDistrict = array2;
            }
        });
    };
    Object.defineProperty(RegistrationComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.addForm.controls; },
        enumerable: true,
        configurable: true
    });
    RegistrationComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.addForm.invalid) {
            console.log("Validations checking working...........");
            return;
        }
        this.registrationService.patientInsert(this.addForm.value)
            .subscribe(function (data) {
            console.log("Name...");
            alert("Registration Success");
            _this.resultMsg = "Registration Success";
            _this.addForm.reset();
            _this.submitted = false;
            //this.router.navigate(['/registration']);
        });
    };
    //allows only numbers
    RegistrationComponent.prototype._keyPress = function (event) {
        var pattern = /[0-9]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    //For Collapse Address button
    RegistrationComponent.prototype.addressCollapse = function () {
        this.isCollapsed = !this.isCollapsed;
        this.submitted = false;
    };
    //For Collapse Miscellenous Info Button
    RegistrationComponent.prototype.miscellneousCollapse = function () {
        this.ismiscellneousCollapse = !this.ismiscellneousCollapse;
        this.submitted = false;
    };
    //For Collapse Family Details button
    RegistrationComponent.prototype.familyCollapse = function () {
        this.isFamilyCollapse = !this.isFamilyCollapse;
        this.submitted = false;
    };
    //For Reset values
    RegistrationComponent.prototype.clear = function () {
        this.addForm.reset();
        this.submitted = false;
        this.resultMsg = "";
    };
    RegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/layout/form/admin/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.scss */ "./src/app/layout/form/admin/registration/registration.component.scss")]
        }),
        __metadata("design:paramtypes", [_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_4__["TokenStorageService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _registration_service__WEBPACK_IMPORTED_MODULE_2__["RegistrationService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/layout/form/admin/registration/registration.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/layout/form/admin/registration/registration.module.ts ***!
  \***********************************************************************/
/*! exports provided: RegistrationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationModule", function() { return RegistrationModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _registration_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registration-routing.module */ "./src/app/layout/form/admin/registration/registration-routing.module.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _registration_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registration.component */ "./src/app/layout/form/admin/registration/registration.component.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var RegistrationModule = /** @class */ (function () {
    function RegistrationModule() {
    }
    RegistrationModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _registration_routing_module__WEBPACK_IMPORTED_MODULE_2__["RegistrationRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_3__["PageHeaderModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerModule"].forRoot()],
            declarations: [_registration_component__WEBPACK_IMPORTED_MODULE_5__["RegistrationComponent"]],
            bootstrap: [_registration_component__WEBPACK_IMPORTED_MODULE_5__["RegistrationComponent"]],
        })
    ], RegistrationModule);
    return RegistrationModule;
}());



/***/ }),

/***/ "./src/app/layout/form/admin/registration/registration.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/layout/form/admin/registration/registration.service.ts ***!
  \************************************************************************/
/*! exports provided: RegistrationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationService", function() { return RegistrationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../environments/environment.prod */ "./src/environments/environment.prod.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import {MasterCountry} from "./masterCountry";
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
};
var RegistrationService = /** @class */ (function () {
    function RegistrationService(http) {
        this.http = http;
        // formVar: FormGroup;
        // webPagesData:WebPagesData[];
        this.base_Url = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].base_Url;
        this.subreg = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].sub_reg;
        this.submasterData = _environments_environment_prod__WEBPACK_IMPORTED_MODULE_2__["environment"].sub_masterdata;
    }
    // masterCountry : MasterCountry[];
    // getDetails():Observable<WebPagesData[]> {
    // alert("in serveice")
    //  return this.http.get<WebPagesData[]>(this.url);
    //  }
    RegistrationService.prototype.patientInsert = function (registration) {
        //getDetails(searchkey:String){
        //return this.http.get(this.url);
        console.log(registration.regCalculatedDob);
        return this.http.post(this.base_Url + this.subreg + "membershipRegistration", registration);
    };
    // getPatientDetails(): Observable<MasterCountry[]> {
    //       return this.http.get<MasterCountry[]>(this.getUrl);
    //     }
    // getPatientDetails() {
    //       return this.http.get(this.getUrl).pipe(map((response: any) => response.json()));
    //    }
    RegistrationService.prototype.getCountries = function () {
        console.log("" + this.base_Url + this.submasterData);
        return this.http.get("" + (this.base_Url + this.submasterData + "countriesApi"));
    };
    RegistrationService.prototype.getStates = function (country) {
        return this.http.get(this.base_Url + this.submasterData + "getStatesByCountryApi/" + country);
    };
    RegistrationService.prototype.getDistrict = function (state) {
        return this.http.get(this.base_Url + this.submasterData + "getDistrictByStateApi/" + state);
    };
    RegistrationService.prototype.gettitles = function () {
        return this.http.get(this.base_Url + this.submasterData + "titleApi");
    };
    RegistrationService.prototype.getGender = function () {
        return this.http.get(this.base_Url + this.submasterData + "gendersApi");
    };
    RegistrationService.prototype.getBloodgroups = function () {
        return this.http.get(this.base_Url + this.submasterData + "bloodGroupsApi");
    };
    RegistrationService.prototype.getNationalities = function () {
        return this.http.get(this.base_Url + this.submasterData + "nationalitiesApi");
    };
    RegistrationService.prototype.getOccupations = function () {
        return this.http.get(this.base_Url + this.submasterData + "occupationsApi");
    };
    RegistrationService.prototype.getReligions = function () {
        return this.http.get(this.base_Url + this.submasterData + "religionsApi");
    };
    RegistrationService.prototype.getMaritalStatus = function () {
        return this.http.get(this.base_Url + this.submasterData + "maritalStatusApi");
    };
    RegistrationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RegistrationService);
    return RegistrationService;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true,
    base_Url: 'http://localhost:8086/',
    sub_masterdata: 'masterDataApi/',
    sub_reg: 'registration/'
};


/***/ })

}]);
//# sourceMappingURL=form-admin-registration-registration-module.js.map