(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-admin-walkins-walkins-module"],{

/***/ "./src/app/layout/form/admin/walkins/walkins-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/layout/form/admin/walkins/walkins-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: WalkinsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkinsRoutingModule", function() { return WalkinsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _walkins_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./walkins.component */ "./src/app/layout/form/admin/walkins/walkins.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _walkins_component__WEBPACK_IMPORTED_MODULE_2__["WalkinsComponent"]
    }
];
var WalkinsRoutingModule = /** @class */ (function () {
    function WalkinsRoutingModule() {
    }
    WalkinsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], WalkinsRoutingModule);
    return WalkinsRoutingModule;
}());



/***/ }),

/***/ "./src/app/layout/form/admin/walkins/walkins.component.html":
/*!******************************************************************!*\
  !*** ./src/app/layout/form/admin/walkins/walkins.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"resultMsg\">{{resultMsg}}</div>\r\n<form [formGroup]=\"walkinForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n  <div class=\"card-header titlecss\"><i class=\"fa fa-user-plus\" style=\"color:#ffff\">&nbsp;&nbsp;</i>Walkin</div><br>\r\n  <!-- Personal Information card Start-->\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">Walkin Details </div>\r\n\r\n    <div class=\"card-body\">\r\n\r\n      <div style=\"font-family: 'Gill Sans';color: rgb(102, 99, 99);\">Walkin No : <input type=\"text\" formControlName=\"\"></div>\r\n      <fieldset class=\"scheduler-border\">\r\n        <legend class=\"scheduler-border\">Please fill the details</legend>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col\">\r\n            <select formControlName=\"patTitle\" class=\"select-dropdown form-control\" [ngClass]=\"{ 'is-invalid': (submitted || f.patTitle.touched) && f.patTitle.errors }\">\r\n              <option value=\"\" disabled selected>Select Title</option>\r\n              <option *ngFor=\"let each of masterTitle\" value=\"{{each.value}}\">{{each.value}}</option>\r\n            </select>\r\n            <div *ngIf=\"(submitted || f.patTitle.touched) && f.patTitle.errors\" class=\"invalid-feedback\">\r\n              <div *ngIf=\"f.patTitle.errors.required\">Title is required</div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col\">\r\n              <input type=\"text\" formControlName=\"patLastName\" class=\"form-control\" placeholder=\"Family Name\"\r\n                  [ngClass]=\"{ 'is-invalid': (submitted || f.patLastName.touched) && f.patLastName.errors }\" />\r\n              <div *ngIf=\" (submitted || f.patLastName.touched) && f.patLastName.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"f.patLastName.errors.required\">Family Name is required</div>\r\n              </div>\r\n          </div>\r\n          <div class=\"col\">\r\n              <input type=\"text\" formControlName=\"patFirstName\" class=\"form-control\" placeholder=\"Name\"\r\n                  [ngClass]=\"{ 'is-invalid': (submitted || f.patFirstName.touched) && f.patFirstName.errors }\">\r\n              <div *ngIf=\"(submitted || f.patFirstName.touched) && f.patFirstName.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"f.patFirstName.errors.required\"> Name is required</div>\r\n              </div>\r\n          </div>\r\n        </div>\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <select formControlName=\"patModeOfAppt\" class=\"select-dropdown form-control\" [ngClass]=\"{ 'is-invalid': (submitted || f.patModeOfAppt.touched) && f.patModeOfAppt.errors }\">\r\n                <option value=\"\" disabled selected>Select Mode Of Walkin</option>\r\n                <option value=\"Telephone\">Telephone</option>\r\n                <option value=\"Email\">Email</option>\r\n                <option value=\"By Person\">By Person</option>\r\n              </select>\r\n              <div *ngIf=\"(submitted || f.patModeOfAppt.touched) && f.patModeOfAppt.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"f.patModeOfAppt.errors.required\">Title is required</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col\">\r\n              <select formControlName=\"patSex\" class=\"select-dropdown form-control\" [ngClass]=\"{ 'is-invalid': (submitted || f.patSex.touched) && f.patSex.errors }\">\r\n                <option value=\"\" disabled selected>Select Sex</option>\r\n                <option *ngFor=\"let each of masterGender\" value=\"{{each.value}}\">{{each.value}}</option>\r\n              </select>\r\n              <div *ngIf=\"(submitted || f.patSex.touched) && f.patSex.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"f.patSex.errors.required\">Sex is required</div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col\"> \r\n                  <input type=\"text\" placeholder=\"DataOfBirth\" bsDatepicker formControlName=\"patDateOfBirth\"\r\n                            [(ngModel)]=\"selectedDob\" class=\"form-control\" (ngModelChange)=\"onselectedDob($event)\"\r\n                            [ngClass]=\"{ 'is-invalid': (submitted || f.patDateOfBirth.touched) && f.patDateOfBirth.errors }\" />\r\n\r\n                        <div *ngIf=\" (submitted || f.patDateOfBirth.touched) && f.patDateOfBirth.errors\" class=\"invalid-feedback\">\r\n                            <div *ngIf=\"f.patDateOfBirth.errors.required\"> Date Of Birth is required</div>\r\n                        </div>\r\n            </div>\r\n            <!-- <div class=\"col\">\r\n                    <input type=\"text\" formControlName=\"regPatmiddleName\" class=\"form-control\" placeholder=\"Middle Name\">\r\n                </div> -->\r\n          </div>\r\n          <div class=\"row\">\r\n\r\n            <div class=\"col\">\r\n              <input type=\"text\" placeholder=\"Age\" formControlName=\"patAge\" (keypress)=_keyPress($event) [(ngModel)]=\"age\"\r\n              (ngModelChange)=\"onselectedAge($event)\" > \r\n              \r\n            </div>\r\n\r\n            <div class=\"col\">\r\n              <input type=\"text\" formControlName=\"patPhoneNo\" (keypress)=_keyPress($event) placeholder=\"Phone No\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': (submitted || f.patPhoneNo.touched) && f.patPhoneNo.errors }\">\r\n              <div *ngIf=\"(submitted || f.patPhoneNo.touched) && f.patPhoneNo.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"f.patPhoneNo.errors.required\">Phone No is required</div>\r\n                  <div *ngIf=\"f.patPhoneNo.errors.maxlength\">Phone No Max 10 digits </div>\r\n                  <div *ngIf=\"f.patPhoneNo.errors.minlength\">Phone No Min 10 digits </div>\r\n                  <div *ngIf=\"f.patPhoneNo.errors.pattern\">Enter Valid Phone No </div>\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"col\">\r\n              <input type=\"text\" formControlName=\"patMobileNo\" placeholder=\"Mobile No\"  (keypress)=_keyPress($event)  class=\"form-control\" [ngClass]=\"{ 'is-invalid': (submitted || f.patMobileNo.touched) && f.patMobileNo.errors }\">\r\n              <div *ngIf=\"(submitted || f.patMobileNo.touched) && f.patMobileNo.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"f.patMobileNo.errors.required\">Mobile No is required</div>\r\n                  <div *ngIf=\"f.patMobileNo.errors.maxlength\">Mobile No Max 10 digits </div>\r\n                  <div *ngIf=\"f.patMobileNo.errors.minlength\">Mobile No Min 10 digits </div>\r\n                  <div *ngIf=\"f.patMobileNo.errors.pattern\">Enter Valid Mobile No</div>\r\n                 \r\n\r\n                </div>\r\n              \r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <select formControlName=\"docCode\" class=\"select-dropdown form-control\" [ngClass]=\"{ 'is-invalid': (submitted || f.docCode.touched) && f.docCode.errors }\">\r\n                <option value=\"\" disabled selected>Select Enquiry For</option>\r\n                <option *ngFor=\"let each of departmentNames\" value=\"{{each.key}}\">{{each.value}}</option>\r\n              </select>\r\n              <div *ngIf=\"(submitted || f.docCode.touched) && f.docCode.errors\" class=\"invalid-feedback\">\r\n                <div *ngIf=\"f.docCode.errors.required\">Enquiry For is required</div>\r\n              </div>\r\n            </div>\r\n              <div class=\"col\">\r\n                    <select formControlName=\"patReason\" class=\"select-dropdown form-control\" [ngClass]=\"{ 'is-invalid': (submitted || f.patReason.touched) && f.patReason.errors }\">\r\n                      <option value=\"\" disabled selected>How did you know about us?</option>\r\n                      <option value=\"Friends\">Friends</option>\r\n                      <option value=\"Ad\">Ad</option>\r\n                      <option value=\"Internet\">Internet</option>\r\n                      <option value=\"Referred by Hospital\">Referred by Hospital</option>\r\n                      <option value=\"Others\">Others</option>\r\n                    </select>\r\n                <div *ngIf=\"(submitted || f.patReason.touched) && f.patReason.errors\" class=\"invalid-feedback\">\r\n                  <div *ngIf=\"f.patReason.errors.required\">How did you know about us? is required</div>\r\n                </div>\r\n              </div>\r\n          </div>\r\n        \r\n\r\n      </fieldset>\r\n      <div style=\"font-family: Gill Sans;\"><textarea class=\"form-control\" formControlName=\"remarks\" class=\"form-control\"\r\n        placeholder=\"Enter Remarks...\"></textarea></div>\r\n        <br>\r\n\r\n\r\n      <div style=\"float: right;\">\r\n        <button class=\"btn btn-outline-primary\" [disabled]=\"!walkinForm.valid\">Submit</button>&nbsp;&nbsp;\r\n        <button type=\"reset\" (click)=\"clear()\" class=\"btn btn-outline-primary\">Clear</button>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <!-- Personal Information card End-->\r\n\r\n</form>"

/***/ }),

/***/ "./src/app/layout/form/admin/walkins/walkins.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/layout/form/admin/walkins/walkins.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/form/admin/walkins/walkins.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout/form/admin/walkins/walkins.component.ts ***!
  \****************************************************************/
/*! exports provided: WalkinsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkinsComponent", function() { return WalkinsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_token_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../auth/token-storage.service */ "./src/app/auth/token-storage.service.ts");
/* harmony import */ var _walkins_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./walkins.service */ "./src/app/layout/form/admin/walkins/walkins.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var WalkinsComponent = /** @class */ (function () {
    function WalkinsComponent(token, walkinsService, formBuilder, route, router) {
        this.token = token;
        this.walkinsService = walkinsService;
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.masterTitle = [];
        this.masterGender = [];
        this.departmentNames = [];
        this.isCollapsed = true;
        this.submitted = false;
    }
    WalkinsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.info = {
            token: this.token.getToken(),
            username: this.token.getUsername(),
            authorities: this.token.getAuthorities()
        };
        this.walkinForm = this.formBuilder.group({
            walkinNo: [''],
            patTitle: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            patLastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            patFirstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            patModeOfAppt: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            patSex: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            patDateOfBirth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            patAge: [],
            patPhoneNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[6-9]\d{9}$/)]],
            patMobileNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/^[6-9]\d{9}$/)]],
            docCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            remarks: [],
            patReason: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        var masterTitlearray = [];
        this.walkinsService.gettitles().subscribe(function (data) {
            _this.masterTitle = data;
            for (var each in data) {
                masterTitlearray.push({ "key": each, "value": data[each] });
                _this.masterTitle = masterTitlearray;
            }
            console.log(_this.masterTitle);
        });
        var mastermasterGenderarray = [];
        this.walkinsService.getGender()
            .subscribe(function (data) {
            _this.masterGender = data;
            for (var each in data) {
                mastermasterGenderarray.push({ "key": each, "value": data[each] });
                _this.masterGender = mastermasterGenderarray;
            }
            console.log(_this.masterGender);
        });
        var departmentNamesarray = [];
        this.walkinsService.getDepartment().subscribe(function (data) {
            _this.departmentNames = data;
            for (var each in data) {
                departmentNamesarray.push({ "key": each, "value": data[each] });
                _this.departmentNames = departmentNamesarray;
            }
            console.log(_this.departmentNames);
        });
    };
    //Age Calculation From DOB
    WalkinsComponent.prototype.onselectedDob = function (dob) {
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
    WalkinsComponent.prototype.onselectedAge = function (enteredAge) {
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
    Object.defineProperty(WalkinsComponent.prototype, "f", {
        get: function () { return this.walkinForm.controls; },
        enumerable: true,
        configurable: true
    });
    WalkinsComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.walkinForm.invalid) {
            return;
        }
        this.walkinsService.patientInsert(this.walkinForm.value)
            .subscribe(function (data) {
            _this.walkinForm.reset;
        });
    };
    //allows only numbers
    WalkinsComponent.prototype._keyPress = function (event) {
        var pattern = /[0-9]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    WalkinsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-walkins',
            template: __webpack_require__(/*! ./walkins.component.html */ "./src/app/layout/form/admin/walkins/walkins.component.html"),
            styles: [__webpack_require__(/*! ./walkins.component.scss */ "./src/app/layout/form/admin/walkins/walkins.component.scss")]
        }),
        __metadata("design:paramtypes", [_auth_token_storage_service__WEBPACK_IMPORTED_MODULE_3__["TokenStorageService"], _walkins_service__WEBPACK_IMPORTED_MODULE_4__["WalkinsService"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WalkinsComponent);
    return WalkinsComponent;
}());



/***/ }),

/***/ "./src/app/layout/form/admin/walkins/walkins.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout/form/admin/walkins/walkins.module.ts ***!
  \*************************************************************/
/*! exports provided: WalkinsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkinsModule", function() { return WalkinsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _walkins_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./walkins-routing.module */ "./src/app/layout/form/admin/walkins/walkins-routing.module.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _walkins_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./walkins.component */ "./src/app/layout/form/admin/walkins/walkins.component.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var WalkinsModule = /** @class */ (function () {
    function WalkinsModule() {
    }
    WalkinsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _walkins_routing_module__WEBPACK_IMPORTED_MODULE_2__["WalkinsRoutingModule"], _shared__WEBPACK_IMPORTED_MODULE_3__["PageHeaderModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerModule"].forRoot()],
            declarations: [_walkins_component__WEBPACK_IMPORTED_MODULE_5__["WalkinsComponent"]],
            bootstrap: [_walkins_component__WEBPACK_IMPORTED_MODULE_5__["WalkinsComponent"]]
        })
    ], WalkinsModule);
    return WalkinsModule;
}());



/***/ }),

/***/ "./src/app/layout/form/admin/walkins/walkins.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/layout/form/admin/walkins/walkins.service.ts ***!
  \**************************************************************/
/*! exports provided: WalkinsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkinsService", function() { return WalkinsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../environments/environment */ "./src/environments/environment.ts");
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
var WalkinsService = /** @class */ (function () {
    // formVar: FormGroup;
    // webPagesData:WebPagesData[];
    function WalkinsService(http) {
        this.http = http;
        this.base_Url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].base_Url;
        this.sub_master_Url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].sub_masterdata;
    }
    WalkinsService.prototype.patientInsert = function (walkindetails) {
        return this.http.post(this.base_Url + 'createWalkin', walkindetails);
    };
    WalkinsService.prototype.gettitles = function () {
        return this.http.get(this.base_Url + this.sub_master_Url + 'titleApi');
    };
    WalkinsService.prototype.getGender = function () {
        return this.http.get(this.base_Url + this.sub_master_Url + 'gendersApi');
    };
    WalkinsService.prototype.getDepartment = function () {
        return this.http.get(this.base_Url + 'getMsLabDepartmentNames');
    };
    WalkinsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root',
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], WalkinsService);
    return WalkinsService;
}());



/***/ })

}]);
//# sourceMappingURL=form-admin-walkins-walkins-module.js.map