(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-admin-registration-details-registration-details-module~form-form-module"],{

/***/ "./src/app/layout/form/admin/models/MembershipRegistration.ts":
/*!********************************************************************!*\
  !*** ./src/app/layout/form/admin/models/MembershipRegistration.ts ***!
  \********************************************************************/
/*! exports provided: MembershipRegistration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembershipRegistration", function() { return MembershipRegistration; });
var MembershipRegistration = /** @class */ (function () {
    function MembershipRegistration() {
    }
    return MembershipRegistration;
}());



/***/ }),

/***/ "./src/app/layout/form/admin/registration-details/registration-details.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/layout/form/admin/registration-details/registration-details.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n  <div class=\"card-header titlecss\"><i class=\"fa fa-user-plus\" style=\"color:#ffff\">&nbsp;&nbsp;</i>Update Registration</div><br>\r\n  <!-- Personal Information card Start-->\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">Personal Information </div>\r\n    <div class=\"card-body\">\r\n      <div style=\"font-family: 'Gill Sans';color: rgb(102, 99, 99);\">Walkin : <input type=\"checkbox\" formControlName=\"walkin\">\r\n      </div>\r\n      \r\n      <fieldset class=\"scheduler-border\">\r\n          <legend class=\"scheduler-border\">Please fill the details</legend>\r\n            <div class=\"row\">\r\n              <div class=\"col\">\r\n                <input type=\"text\" formControlName=\"walkinNo\" placeholder=\"Walkin No\">\r\n              </div>\r\n              <div class=\"col\">\r\n                <input type=\"text\" placeholder=\"Walkin Date\" formControlName=\"walkinDate\" readonly>\r\n              </div>\r\n              <div class=\"col\">\r\n                <input type=\"text\" placeholder=\"Reg Number\" formControlName=\"regNo\" readonly>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col\">\r\n                <select formControlName=\"regTitle\" class=\"select-dropdown form-control\" [(ngModel)]=\"membershipRegistration.regTitle\"\r\n                  [ngClass]=\"{ 'is-invalid': submitted && f.regTitle.errors }\">\r\n                  <option value=\"\" disabled selected>Select Title</option>\r\n                  <option *ngFor=\"let each of masterTitle\" value=\"{{each.value}}\">{{each.value}}</option>\r\n                </select>\r\n                <div *ngIf=\"submitted && f.regTitle.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"f.regTitle.errors.required\">Title is required</div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col\">\r\n                <input type=\"text\" formControlName=\"regPatFamilyName\" class=\"form-control\" [(ngModel)]=\"membershipRegistration.regPatFamilyName\"\r\n                  placeholder=\"Family Name\" [ngClass]=\"{ 'is-invalid': (submitted||f.regPatFamilyName.touched) && f.regPatFamilyName.errors }\" />\r\n                  <div *ngIf=\"(submitted||f.regPatFamilyName.touched ) && f.regPatFamilyName.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.regPatFamilyName.errors.required\">Family Name is required</div>\r\n                  </div>\r\n              </div>\r\n              <!-- <div class=\"col\">\r\n                          <input type=\"text\" formControlName=\"regPatmiddleName\" class=\"form-control\" placeholder=\"Middle Name\">\r\n                      </div> -->\r\n            </div>\r\n              <div class=\"row\">\r\n                <div class=\"col\">\r\n                  <input type=\"text\" formControlName=\"regPatName\" class=\"form-control\" [(ngModel)]=\"membershipRegistration.regPatName\"\r\n                    placeholder=\"Name\" [ngClass]=\"{ 'is-invalid': (submitted||f.regPatName.touched ) && f.regPatName.errors }\">\r\n                  <div *ngIf=\"(submitted||f.regPatName.touched) && f.regPatName.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.regPatName.errors.required\"> Name is required</div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col\">\r\n                  <select formControlName=\"regSex\" placeholder=\"gender\" class=\"select-dropdown form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.regSex.errors }\"\r\n                    [(ngModel)]=\"membershipRegistration.regSex\">\r\n                    <option value=\"\" disabled selected>Select Gender</option>\r\n                    <option *ngFor=\"let each of masterGender \" value=\"{{each.value}}\">{{each.value}}</option>\r\n                  </select>\r\n                  <div *ngIf=\"submitted && f.regSex.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.regSex.errors.required\"> Gender is required</div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col\">\r\n                  <select formControlName=\"regMarried\" [(ngModel)]=\"membershipRegistration.regMarried\" class=\"select-dropdown form-control\">\r\n                    <option value=\"\" disabled selected>Select Marital Status</option>\r\n                    <option *ngFor=\"let each of masterMaritalStatus \" value=\"{{each.value}}\">{{each.value}}</option>\r\n                  </select>\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col\">\r\n                  <input type=\"text\" placeholder=\"DataOfBirth\" bsDatepicker formControlName=\"regCalculatedDob\" [(ngModel)]=\"membershipRegistration.regCalculatedDob\"\r\n                    class=\"form-control\" (ngModelChange)=\"onselectedDob($event)\" [ngClass]=\"{ 'is-invalid': submitted && f.regCalculatedDob.errors }\" />\r\n\r\n                  <div *ngIf=\"submitted && f.regCalculatedDob.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.regCalculatedDob.errors.required\"> Date Of Birth is required</div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col\">\r\n                  <input type=\"text\" formControlName=\"regAge\" class=\"form-control\" placeholder=\"Age\" (keypress)=_keyPress($event) [(ngModel)]=\"membershipRegistration.regAge\"\r\n                    (ngModelChange)=\"onselectedAge($event)\" [ngClass]=\"{ 'is-invalid': submitted && f.regAge.errors }\">\r\n                  <div *ngIf=\"submitted && f.regAge.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.regAge.errors.required\"> Age is required</div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col\">\r\n                  <select formControlName=\"regAgeType\" class=\"select-dropdown form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.regAgeType.errors }\"\r\n                    [(ngModel)]=\"membershipRegistration.regAgeType\">\r\n                    <option value=\"\" disabled selected>Select Age Type</option>\r\n                    <option value=\"Y\">Years</option>\r\n                    <option value=\"M\">Months</option>\r\n                    <option value=\"D\">Days</option>\r\n                  </select>\r\n                  <div *ngIf=\"submitted && f.regAgeType.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.regAgeType.required\"> Age Type is required</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col\">\r\n                  <select formControlName=\"regReligion\" class=\"select-dropdown form-control\" [(ngModel)]=\"membershipRegistration.regReligion\">\r\n                    <option value=\"\" disabled selected>Select Religion</option>\r\n                    <option *ngFor=\"let each of masterReligion \" value=\"{{each.value}}\">{{each.value}}</option>\r\n                  </select>\r\n                </div>\r\n                <div class=\"col\">\r\n                  <select formControlName=\"regOccPn\" class=\"select-dropdown form-control\" [(ngModel)]=\"membershipRegistration.regOccPn\">\r\n                    <option value=\"\" disabled selected>Select Occupation</option>\r\n                    <option *ngFor=\"let each of masterOccupation \" value=\"{{each.value}}\">{{each.value}}</option>\r\n                  </select>\r\n                </div>\r\n\r\n                <div class=\"col\">\r\n                  <select formControlName=\"regNationality\" class=\"select-dropdown form-control\" [(ngModel)]=\"membershipRegistration.regNationality\">\r\n                    <option value=\"\" disabled selected>Select Nationality</option>\r\n                    <option *ngFor=\"let each of masterNationality \" value=\"{{each.value}}\">{{each.value}}</option>\r\n                  </select>\r\n\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col\">\r\n                  <input type=\"text\" placeholder=\"Anniversary Date\" bsDatepicker formControlName=\"regAnnivDate\" class=\"form-control\"\r\n                    [(ngModel)]=\"membershipRegistration.regAnnivDate\" [ngClass]=\"{ 'is-invalid': submitted && f.regAgeType.errors }\" />\r\n                  <div *ngIf=\"submitted && f.regAnnivDate.errors\" class=\"invalid-feedback\">\r\n                    <div *ngIf=\"f.regAnnivDate.required\"> Anniversary Date is required</div>\r\n                  </div>\r\n                </div>\r\n                <!-- <div class=\"col\">\r\n                                <input type=\"text\" formControlName=\"regPatStatus\" placeholder=\"Patient Status\"\r\n                                    [ngClass]=\"{ 'is-invalid': submitted && f.regPatStatus.errors }\">\r\n                                <div *ngIf=\"submitted && f.regPatStatus.errors\" class=\"invalid-feedback\">\r\n                                    <div *ngIf=\"f.regPatStatus.errors.required\">Patient status is required</div>\r\n                                </div>\r\n                            </div> -->\r\n                <div class=\"col\">\r\n                   <input type=\"text\" formControlName=\"regMobileNo\" placeholder=\"Mobile No\" (keypress)=_keyPress($event) class=\"form-control\" [(ngModel)]=\"membershipRegistration.regMobileNo\" [ngClass]=\"{ 'is-invalid': (submitted || f.regMobileNo.touched) && f.regMobileNo.errors }\"/>\r\n                      <div *ngIf=\"(submitted || f.regMobileNo.touched) && f.regMobileNo.errors\" class=\"invalid-feedback\">\r\n                          <div *ngIf=\"f.regMobileNo.errors.required\">Mobile No is required</div>\r\n                          <div *ngIf=\"f.regMobileNo.errors.maxlength\">Mobile No must be 10 digits </div>\r\n                          <div *ngIf=\"f.regMobileNo.errors.minlength\">Mobile No must be 10 digits </div>\r\n                          <div *ngIf=\"f.regMobileNo.errors.pattern\">Enter Valid Mobile No</div>\r\n                      </div>\r\n                    \r\n                </div>\r\n                <div class=\"col\">\r\n                  <input type=\"text\" formControlName=\"regResPhone\" placeholder=\"Phone No\" (keypress)=_keyPress($event) class=\"form-control\" [(ngModel)]=\"membershipRegistration.regResPhone\" [ngClass]=\"{ 'is-invalid': (submitted || f.regResPhone.touched) && f.regResPhone.errors }\"/>\r\n                  <div *ngIf=\"(submitted || f.regResPhone.touched) && f.regResPhone.errors\" class=\"invalid-feedback\">\r\n                      <div *ngIf=\"f.regResPhone.errors.required\">Phone No is required</div>\r\n                      <div *ngIf=\"f.regResPhone.errors.maxlength\">Phone No must be 10 digits </div>\r\n                      <div *ngIf=\"f.regResPhone.errors.minlength\">Phone No must be 10 digits </div>\r\n                      <div *ngIf=\"f.regResPhone.errors.pattern\">Enter Valid Phone No</div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col\">\r\n                  <input type=\"text\" formControlName=\"regEmail\" class=\"form-control\" placeholder=\"Email\" [(ngModel)]=\"membershipRegistration.regEmail\"\r\n                    [ngClass]=\"{ 'is-invalid': (submitted ||f.regEmail.touched)&& f.regEmail.errors }\">\r\n                  <div *ngIf=\"(submitted||f.regEmail.touched) && f.regEmail.errors\" class=\"invalid-feedback\">\r\n                     <div *ngIf=\"f.regEmail.errors.required\">Email is required</div>\r\n                    <div *ngIf=\"f.regEmail.errors.email\">Email must be a valid email address</div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col\">\r\n                  <input type=\"text\" formControlName=\"regFaxNo\" placeholder=\"Fax No\" class=\"form-control\" [(ngModel)]=\"membershipRegistration.regFaxNo\">\r\n                </div>\r\n              </div>\r\n              </fieldset>\r\n      <!--Communication Address Collapse Start-->\r\n      <div class=\"container\">\r\n\r\n        <button type=\"button\" (click)=\"addressCollapse()\" class=\"btn btn-primary collasps-btn\">Communication\r\n          Address</button><br>\r\n\r\n        <div [hidden]=\"isCollapsed\">\r\n                    <br>\r\n                    <fieldset class=\"scheduler-border\">\r\n                        <legend class=\"scheduler-border\">Please fill the details</legend>\r\n                              <div class=\"row\">\r\n                                <div class=\"col\">\r\n                                  <input type=\"text\" formControlName=\"regHno\" placeholder=\"House No\" class=\"form-control\" [(ngModel)]=\"membershipRegistration.regHno\">\r\n\r\n                                </div>\r\n                                <div class=\"col\">\r\n                                  <input type=\"text\" formControlName=\"regStreet\" placeholder=\"Street\" class=\"form-control\" [(ngModel)]=\"membershipRegistration.regStreet\">\r\n                                </div>\r\n\r\n                                <div class=\"col\">\r\n                                  <input type=\"text\" formControlName=\"regCity\" placeholder=\"City\" class=\"form-control\" [(ngModel)]=\"membershipRegistration.regCity\">\r\n\r\n                                </div>\r\n                              </div>\r\n                              <div class=\"row\">\r\n                                <div class=\"col\">\r\n                                  <select formControlName=\"regCountry\" class=\"select-dropdown form-control\" [(ngModel)]=\"membershipRegistration.regCountry\"\r\n                                    (ngModelChange)=\"onselectedCountry($event)\">\r\n                                    <option value=\"\" disabled selected>Select Country</option>\r\n                                    <option *ngFor=\"let each of masterCountry \" value=\"{{each.key}}\">{{each.value}}</option>\r\n                                  </select>\r\n\r\n                                </div>\r\n                                <div class=\"col\">\r\n                                  <select formControlName=\"regState\" class=\"select-dropdown form-control\" [(ngModel)]=\"membershipRegistration.regState\"\r\n                                    (ngModelChange)=\"onselectedState($event)\">\r\n                                    <option value=\"\" disabled selected>Select State</option>\r\n                                    <option *ngFor=\"let each of masterState \" value=\"{{each.key}}\">{{each.value}}</option>\r\n                                  </select>\r\n\r\n                                </div>\r\n\r\n                                <div class=\"col\">\r\n                                  <select formControlName=\"regArea\" class=\"select-dropdown form-control\" [(ngModel)]=\"membershipRegistration.regArea\">\r\n                                    <option value=\"\" disabled selected>Select District</option>\r\n                                    <option *ngFor=\"let each of masterDistrict \" value=\"{{each.key}}\">{{each.value}}</option>\r\n                                  </select>\r\n\r\n                                </div>\r\n                                <div class=\"col\">\r\n                                  <input type=\"text\" formControlName=\"regPin\" (keypress)=_keyPress($event) class=\"form-control\" placeholder=\"Pincode\" [(ngModel)]=\"membershipRegistration.regPin\"  [ngClass]=\"{ 'is-invalid': (submitted ||f.regPin.touched)&& f.regPin.errors }\">\r\n                                  <div *ngIf=\"(submitted || f.regPin.touched) && f.regPin.errors\" class=\"invalid-feedback\">\r\n                                      <div *ngIf=\"f.regPin.errors.required\">Pin code is required</div>\r\n                                      <div *ngIf=\"f.regPin.errors.maxlength\">Pin code  must be 6 digits </div>\r\n                                      <div *ngIf=\"f.regPin.errors.minlength\">Pin code  must be 6 digits </div>\r\n                                  </div>\r\n\r\n                                </div>\r\n                              </div>\r\n                      </fieldset>\r\n        </div>\r\n      </div>\r\n      <!--Communication Address Collapse End-->\r\n      <!--Miscellneous Collapse Start-->\r\n\r\n      <div class=\"container\">\r\n        <button type=\"button\" (click)=\"miscellneousCollapse()\" class=\"btn btn-primary collasps-btn\">Miscellneous\r\n          Information\r\n        </button>\r\n        <div [hidden]=\"ismiscellneousCollapse\">\r\n          <br>\r\n          <fieldset class=\"scheduler-border\">\r\n              <legend class=\"scheduler-border\">Please fill the details</legend>\r\n\r\n                    <div class=\"row\">\r\n                      <div class=\"col\">\r\n                        <select formControlName=\"regBldGrp\" class=\"select-dropdown form-control\" [(ngModel)]=\"membershipRegistration.regBldGrp\">\r\n                          <option value=\"\" disabled selected>Select Blood Group</option>\r\n                          <option *ngFor=\"let each of masterBloodGrup \" value=\"{{each.value}}\">{{each.value}}</option>\r\n                        </select>\r\n\r\n                      </div>\r\n                      <div class=\"col\">\r\n                        <input type=\"text\" formControlName=\"hospitalMr\" placeholder=\"Hospital MR\" class=\"form-control\"\r\n                          [(ngModel)]=\"membershipRegistration.hospitalMr\">\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                      <div class=\"col\">\r\n                        <input type=\"text\" formControlName=\"regCpAddress\" placeholder=\"Address...\" class=\"form-control\"\r\n                          [(ngModel)]=\"membershipRegistration.regCpAddress\">\r\n                      </div>\r\n                      <div class=\"col\">\r\n                        <select formControlName=\"knowAboutUs\" class=\"select-dropdown form-control\"   [(ngModel)]=\"membershipRegistration.knowAboutUs\" [ngClass]=\"{ 'is-invalid': (submitted || f.knowAboutUs.touched) && f.knowAboutUs.errors }\">\r\n                          <option value=\"\" disabled selected>How did you know about us?</option>\r\n                                        <option value=\"Friends\">Friends</option>\r\n                                        <option value=\"Ad\">Ad</option>\r\n                                        <option value=\"Internet\">Internet</option>\r\n                                        <option value=\"Referred by Hospital\">Referred by Hospital</option>\r\n                                        <option value=\"Others\">Others</option>\r\n\r\n                        </select>\r\n                        <div *ngIf=\"(submitted || f.knowAboutUs.touched) && f.knowAboutUs.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.knowAboutUs.errors.required\"> Please fill out the filed</div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n          </fieldset>\r\n        </div>\r\n      </div>\r\n      <!--Miscellneous  Collapse End-->\r\n      <!--Family Details  Collapse Start-->\r\n      <div class=\"container\">\r\n        <button type=\"button\" (click)=\"familyCollapse()\" class=\"btn btn-primary collasps-btn\">Family\r\n          Details\r\n        </button>\r\n        <div [hidden]=\"isFamilyCollapse\">\r\n          <br>\r\n          <fieldset class=\"scheduler-border\">\r\n              <legend class=\"scheduler-border\">Please fill the details</legend>\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"col\">\r\n                    <input type=\"text\" formControlName=\"regPsprtNo\" placeholder=\"Passport No\" class=\"form-control\"\r\n                      [(ngModel)]=\"membershipRegistration.regPsprtNo\">\r\n                  </div>\r\n                  <div class=\"col\">\r\n                    <input type=\"text\" placeholder=\"issued on\" bsDatepicker formControlName=\"regPsprtIssdt\" class=\"form-control\"\r\n                      [(ngModel)]=\"membershipRegistration.regPsprtIssdt\" />\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"col\">\r\n                    <input type=\"text\" placeholder=\"Valid upto\" bsDatepicker formControlName=\"regPsprtExdt\" class=\"form-control\"\r\n                      [(ngModel)]=\"membershipRegistration.regPsprtExdt\" />\r\n                  </div>\r\n                  <div class=\"col\">\r\n                    <input type=\"text\" formControlName=\"regDrLicense\" placeholder=\"Driving License No\" class=\"form-control\"\r\n                      [(ngModel)]=\"membershipRegistration.regDrLicense\">\r\n                  </div>\r\n                </div>\r\n          </fieldset>\r\n        </div>\r\n      </div>\r\n      <!--Family Details  Collapse End-->\r\n      <div style=\"font-family: Gill Sans;\"><textarea  formControlName=\"remarks\" class=\"form-control\"\r\n          placeholder=\"Enter Remarks...\"></textarea></div><br>\r\n      <div style=\"float: right;\">\r\n        <button class=\"btn btn-outline-primary\" [disabled]=\"!editForm.valid\">Update</button>&nbsp;&nbsp;\r\n        <button type=\"reset\" (click)=\"clear()\" class=\"btn btn-outline-primary\">Clear</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- Personal Information card End-->\r\n\r\n</form>"

/***/ }),

/***/ "./src/app/layout/form/admin/registration-details/registration-details.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/layout/form/admin/registration-details/registration-details.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/form/admin/registration-details/registration-details.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/layout/form/admin/registration-details/registration-details.component.ts ***!
  \******************************************************************************************/
/*! exports provided: RegistrationDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationDetailsComponent", function() { return RegistrationDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _registration_details_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registration-details.service */ "./src/app/layout/form/admin/registration-details/registration-details.service.ts");
/* harmony import */ var _models_MembershipRegistration__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/MembershipRegistration */ "./src/app/layout/form/admin/models/MembershipRegistration.ts");
/* harmony import */ var _registration_registration_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../registration/registration.service */ "./src/app/layout/form/admin/registration/registration.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RegistrationDetailsComponent = /** @class */ (function () {
    function RegistrationDetailsComponent(regDetailsService, registrationService, formBuilder, router) {
        this.regDetailsService = regDetailsService;
        this.registrationService = registrationService;
        this.formBuilder = formBuilder;
        this.router = router;
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
        this.membershipRegistration = new _models_MembershipRegistration__WEBPACK_IMPORTED_MODULE_3__["MembershipRegistration"]();
    }
    RegistrationDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var reg = localStorage.getItem("editUserId");
        //alert("calling update*****"+registrationId);
        if (!reg) {
            alert("Invalid action.");
            this.router.navigate(['registration-workout']);
            return;
        }
        this.editForm = this.formBuilder.group({
            walkin: [],
            walkinNo: [],
            walkinDate: [],
            //registrationNo: [],
            regNo: [],
            regRegDate: [],
            regTime: [],
            regApptFlag: [],
            regApptNo: [],
            regApptDate: [],
            regDocCode: [],
            regBillType: [],
            regWcNum: [],
            regPatLocalName: [],
            regDob: [],
            regCivilId: [],
            regPoboxNo: [],
            regOffPhone: [],
            regCpTitle: [],
            regContactName: [],
            regCpPhone: [],
            regCpMobileNo: [],
            regHeadOfFamilyName: [],
            regHeadFamilyId: [],
            regFamilyHeadRelation: [],
            //regDrLicense:[],
            regCompanyCode: [],
            regEmpCode: [],
            regInsCompanyCode: [],
            regInsCompanyId: [],
            regInsPlanId: [],
            regInsPolicyNo: [],
            regPwd: [],
            regPatAdmissionType: [],
            regIsmlc: [],
            regMlcNo: [],
            regInfoPolice: [],
            regPoliceStationName: [],
            regPatBoughtby: [],
            regBoughtByAddr: [],
            regBoughtByPhone: [],
            regBoughtByMobileNo: [],
            regIsCancel: [],
            regDobType: [],
            regBornType: [],
            regMotherMrNumber: [],
            regDeliveryType: [],
            regReqCount: [],
            regAmtCollFlag: [],
            regPatTaeiff: [],
            regPatCategory: [],
            regReason: [],
            regOprId: [],
            regOprDate: [],
            regIsTemporary: [],
            regContCode: [],
            regContInsCode: [],
            regEmpStatus: [],
            regWcType: [],
            regRtNo: [],
            regPkgDescription: [],
            regValidity: [],
            createdDate: [],
            updatedDate: [],
            createdBy: [],
            modifiedBy: [],
            regBabyCount: [],
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
            regEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            regHno: [],
            regStreet: [],
            regCity: [],
            regArea: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            regState: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            regCountry: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            regPin: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)]],
            regHspCode: [],
            regBldGrp: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            hospitalMr: [],
            regCpAddress: [],
            regPsprtNo: [],
            regPsprtIssdt: null,
            regPsprtExdt: null,
            regDrLicense: [],
            knowAboutUs: [],
        });
        // this.regDetailsService.getMembershipDetails(+reg)
        //   .subscribe( data => {
        //     this.editForm.setValue(data);
        //   });
        this.getRegistrationDetails(+reg);
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
    //Get States based on Country
    RegistrationDetailsComponent.prototype.onselectedCountry = function (countryCode) {
        console.log("Country code" + countryCode);
        if (countryCode != null && countryCode != undefined) {
            this.countryFunction(countryCode);
        }
    };
    RegistrationDetailsComponent.prototype.countryFunction = function (countryCode) {
        //this.modifiedText=val;
        var _this = this;
        var team = this.editForm.value;
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
    RegistrationDetailsComponent.prototype.onselectedState = function (stateCode) {
        console.log("State code...." + stateCode);
        if (stateCode != null && stateCode != undefined) {
            this.stateFunction(stateCode);
        }
    };
    //allows only numbers
    RegistrationDetailsComponent.prototype._keyPress = function (event) {
        var pattern = /[0-9]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    RegistrationDetailsComponent.prototype.stateFunction = function (stateCode) {
        var _this = this;
        //this.modifiedText2=val;
        console.log("State code" + stateCode);
        var team = this.editForm.value;
        var array2 = [];
        this.registrationService.getDistrict(stateCode).subscribe(function (data) {
            _this.masterDistrict = data;
            for (var each in data) {
                array2.push({ "key": each, "value": data[each] });
                _this.masterDistrict = array2;
            }
        });
    };
    //Age Calculation From DOB
    RegistrationDetailsComponent.prototype.onselectedDob = function (dob) {
        console.log("Date of Birth ......" + dob);
        if (dob != null && dob != undefined) {
            var timeDiff = Math.abs(Date.now() - new Date(dob).getTime());
            this.membershipRegistration.regAge = Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
            console.log("Age is ......" + this.membershipRegistration.regAge);
        }
        else {
            this.membershipRegistration.regAge = 0;
        }
    };
    //Get DOB From Age
    RegistrationDetailsComponent.prototype.onselectedAge = function (enteredAge) {
        var CurrentYear = new Date().getFullYear();
        var CurrentMonth = new Date().getMonth() + 1;
        var CurrentDate = new Date().getDate();
        if (enteredAge != '0' && enteredAge != '') {
            var AgeYear = CurrentYear - enteredAge;
            this.membershipRegistration.regCalculatedDob = CurrentMonth + "/" + CurrentDate + "/" + AgeYear;
            console.log("Date of Birth ......" + this.membershipRegistration.regCalculatedDob);
        }
        else {
            //this.selectedDob =CurrentMonth+"/"+ CurrentDate +"/"+CurrentYear;
            //this.age=0;
        }
    };
    RegistrationDetailsComponent.prototype.getRegistrationDetails = function (regNo) {
        var _this = this;
        console.log(regNo);
        this.regDetailsService.getMembershipDetails(regNo).subscribe(function (data) {
            _this.membershipRegistration = data;
            if (_this.membershipRegistration.regCalculatedDob != null) {
                var dobYear = _this.membershipRegistration.regCalculatedDob.toString().substring(0, 4);
                var dobMonth = _this.membershipRegistration.regCalculatedDob.toString().substring(4, 6);
                var dobDay = _this.membershipRegistration.regCalculatedDob.toString().substring(6, 8);
                var resDobDate = dobYear + "-" + dobMonth + "-" + dobDay;
                var dateObj = new Date(resDobDate);
                _this.membershipRegistration.regCalculatedDob = dateObj;
            }
            if (_this.membershipRegistration.regAnnivDate != null) {
                var annivYear = _this.membershipRegistration.regAnnivDate.toString().substring(0, 4);
                var annivMonth = _this.membershipRegistration.regAnnivDate.toString().substring(4, 6);
                var annivDay = _this.membershipRegistration.regAnnivDate.toString().substring(6, 8);
                var resAnnivDate = annivYear + "-" + annivMonth + "-" + annivDay;
                var dateObj = new Date(resAnnivDate);
                _this.membershipRegistration.regAnnivDate = dateObj;
            }
            if (_this.membershipRegistration.regPsprtIssdt != null) {
                var psprtIssYear = _this.membershipRegistration.regPsprtIssdt.toString().substring(0, 4);
                var psprtIssMonth = _this.membershipRegistration.regPsprtIssdt.toString().substring(4, 6);
                var psprtIssDay = _this.membershipRegistration.regPsprtIssdt.toString().substring(6, 8);
                var resPsprtIssDate = psprtIssYear + "-" + psprtIssMonth + "-" + psprtIssDay;
                var dateObj = new Date(resPsprtIssDate);
                _this.membershipRegistration.regPsprtIssdt = dateObj;
            }
            if (_this.membershipRegistration.regPsprtExdt != null) {
                var psprtExpYear = _this.membershipRegistration.regPsprtExdt.toString().substring(0, 4);
                var psprtExpMonth = _this.membershipRegistration.regPsprtExdt.toString().substring(4, 6);
                var psprtExpDay = _this.membershipRegistration.regPsprtExdt.toString().substring(6, 8);
                var resPsprtExpDate = psprtExpYear + "-" + psprtExpMonth + "-" + psprtExpDay;
                var dateObj = new Date(resPsprtExpDate);
                _this.membershipRegistration.regPsprtExdt = dateObj;
            }
        });
    };
    Object.defineProperty(RegistrationDetailsComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.editForm.controls; },
        enumerable: true,
        configurable: true
    });
    RegistrationDetailsComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log("Date of Birth.............." + this.editForm.value.knowAboutUs);
        this.regNumber = localStorage.getItem("editUserId");
        this.editForm.value.regNo = this.regNumber;
        this.regDetailsService.updateUser(this.editForm.value)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])())
            .subscribe(function (data) {
            _this.router.navigate(['registration-worklist']);
        }, function (error) {
            alert(error);
        });
    };
    RegistrationDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registration-details',
            template: __webpack_require__(/*! ./registration-details.component.html */ "./src/app/layout/form/admin/registration-details/registration-details.component.html"),
            styles: [__webpack_require__(/*! ./registration-details.component.scss */ "./src/app/layout/form/admin/registration-details/registration-details.component.scss")]
        }),
        __metadata("design:paramtypes", [_registration_details_service__WEBPACK_IMPORTED_MODULE_2__["RegistrationDetailsService"], _registration_registration_service__WEBPACK_IMPORTED_MODULE_4__["RegistrationService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], RegistrationDetailsComponent);
    return RegistrationDetailsComponent;
}());



/***/ }),

/***/ "./src/app/layout/form/admin/registration-details/registration-details.service.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/layout/form/admin/registration-details/registration-details.service.ts ***!
  \****************************************************************************************/
/*! exports provided: RegistrationDetailsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationDetailsService", function() { return RegistrationDetailsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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
var RegistrationDetailsService = /** @class */ (function () {
    function RegistrationDetailsService(http) {
        this.http = http;
        // formVar: FormGroup;
        // webPagesData:WebPagesData[];
        this.updateUrl = 'http://localhost:8086/updateRegistrationApi';
        this.getDetailsById = 'http://localhost:8086/getRegDetailsByRegNum';
    }
    RegistrationDetailsService.prototype.getMembershipDetails = function (reg) {
        //alert("Registartion No "+reg);
        return this.http.get(this.getDetailsById + "/" + reg).pipe(function (data) { return data; });
    };
    RegistrationDetailsService.prototype.updateUser = function (MembershipRegistration) {
        var r_id = Number(MembershipRegistration.regNo);
        //alert("id in service"+id)
        console.log("Id******" + MembershipRegistration.regNo);
        console.log("entered name******" + MembershipRegistration.regPatName);
        return this.http.put(this.updateUrl + '/' + r_id, MembershipRegistration);
    };
    RegistrationDetailsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RegistrationDetailsService);
    return RegistrationDetailsService;
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
//# sourceMappingURL=form-admin-registration-details-registration-details-module~form-form-module.js.map