(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form-admin-registration-worklist-registration-worklist-module"],{

/***/ "./src/app/layout/form/admin/registration-worklist/registration-worklist-paging.service.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/layout/form/admin/registration-worklist/registration-worklist-paging.service.ts ***!
  \*************************************************************************************************/
/*! exports provided: RemotePagingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RemotePagingService", function() { return RemotePagingService; });
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


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' })
};
var RemotePagingService = /** @class */ (function () {
    function RemotePagingService(http) {
        this.http = http;
        this.getDataUrl = 'http://localhost:8086/getRegDetails';
        this.cancelMemberUrl = 'http://localhost:8086/cancelMemberById';
        this.getDataByDate = '';
    }
    RemotePagingService.prototype.getData = function () {
        return this.http.get("" + this.getDataUrl);
    };
    // getMembershipDetailsBydate(membershipRegistration: MembershipRegistration): Observable<any> {
    // //alert("Registartion No "+reg);
    // return this.http.get(this.getDataByDate + "/" + membershipRegistration).pipe(data => data);
    // }
    RemotePagingService.prototype.cancelMember = function (r_id) {
        //alert("service calling cancell*****"+r_id);
        return this.http.delete(this.cancelMemberUrl + '/' + r_id);
    };
    RemotePagingService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RemotePagingService);
    return RemotePagingService;
}());



/***/ }),

/***/ "./src/app/layout/form/admin/registration-worklist/registration-worklist.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/layout/form/admin/registration-worklist/registration-worklist.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <form [formGroup]=\"dateForm\" (ngSubmit)=\"checkDate()\" >\r\n    <div class=\"row\">\r\n      <div class=\"col-md-4\">\r\n    \r\n      <label>Start Date</label>\r\n      <input id=\"date1\" bsDatepicker class=\"form-control\" formControlName=\"date1\" name=\"start-date\"\r\n             format=\"dd/mm/yyyy\" data-date-format=\"dd/mm/yyyy\" />\r\n   \r\n      </div>\r\n      <div class=\"col-md-4\">\r\n      <label>End Date</label>\r\n      <input id=\"date2\" formControlName=\"date2\" bsDatepicker class=\"form-control\" name=\"end-date\"\r\n             format=\"dd/mm/yyyy\" data-date-format=\"dd/mm/yyyy\" />\r\n      </div>\r\n      <br>\r\n      <div class=\"col-md-4\">\r\n          <input type=\"button\" value=\"Check\" class=\"btn btn-sm btn-success\" />\r\n      </div>\r\n             <!-- onchange=\"checkDate()\" -->\r\n    <!--</div>\r\n    \r\n  </form> -->\r\n\r\n\r\n  <div class=\"card\">\r\n      <div class=\"card-body\">\r\n  \r\n  <form  [formGroup]=\"dateForm\" (ngSubmit)=\"checkDate()\">\r\n      <div class=\"row\">\r\n          <div class=\"col\">\r\n            \r\n            <input id=\"date1\" bsDatepicker class=\"form-control\" formControlName=\"date1\" name=\"start-date\" placeholder=\"From Date\" format=\"dd/mm/yyyy\" data-date-format=\"dd/mm/yyyy\" />\r\n          </div>\r\n          <div class=\"col\">\r\n            \r\n              <input id=\"date2\" formControlName=\"date2\" bsDatepicker class=\"form-control\" placeholder=\"To Date\" name=\"end-date\" format=\"dd/mm/yyyy\" data-date-format=\"dd/mm/yyyy\" />\r\n           </div>\r\n          <div class=\"col\">\r\n                        <button type=\"submit\" class=\"btn btn-primary\">Search</button>\r\n          </div>\r\n       </div>\r\n  </form>\r\n \r\n\r\n<div class=\"membersGrid\" style=\"align-content:flex-end\">\r\n  <mat-form-field >\r\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search............\">\r\n  </mat-form-field>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"example-container mat-elevation-z8\">\r\n\r\n  <mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n    <!-- ID Column -->\r\n    <ng-container matColumnDef=\"RegistrationNumber\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header><b> Reg Number</b> </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\"> {{row.regNo}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <!-- Progress Column -->\r\n    <ng-container matColumnDef=\"PatientName\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header><b> Name</b> </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\"> {{row.regPatName}} </mat-cell>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"MobileNo\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header> <b>Mobile No</b> </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\"> {{row.regMobileNo}} </mat-cell>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"Email\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header><b> Email</b> </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\"> {{row.regEmail}} </mat-cell>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"editPatient\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>  </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\"> <button class=\"btn btn-sm btn-success\" (click)=\"editUser(row)\" style=\"margin-left: 20px;\">Update</button> </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"cancel\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header>  </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let row\"> <button class=\"btn btn-sm btn-danger\" (click)=\"cancelUser(row)\" style=\"margin-left: 20px;\">cancel</button> </mat-cell>\r\n    </ng-container>\r\n\r\n\r\n    \r\n\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n    </mat-row>\r\n  </mat-table>\r\n\r\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n</div>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/layout/form/admin/registration-worklist/registration-worklist.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/layout/form/admin/registration-worklist/registration-worklist.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/form/admin/registration-worklist/registration-worklist.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/layout/form/admin/registration-worklist/registration-worklist.component.ts ***!
  \********************************************************************************************/
/*! exports provided: GridMaterialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridMaterialComponent", function() { return GridMaterialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _registration_worklist_paging_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./registration-worklist-paging.service */ "./src/app/layout/form/admin/registration-worklist/registration-worklist-paging.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GridMaterialComponent = /** @class */ (function () {
    function GridMaterialComponent(formBuilder, dataService, router) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.dataService = dataService;
        this.router = router;
        this.displayedColumns = ['RegistrationNumber', 'PatientName', 'MobileNo', 'Email', 'editPatient', 'cancel'];
        this.flag = false;
        //const users : Data []= [];
        //console.log("hello"+this.flag);
        if (this.flag = true) {
            this.dataService.getData().subscribe(function (d) {
                _this.users = d;
                _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](_this.users);
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
                //console.log(this.users);
            });
        }
    }
    GridMaterialComponent.prototype.ngOnInit = function () {
        // this.dataService.getData().subscribe(res => {
        //   // Use MatTableDataSource for paginator
        //   this.dataSource = new MatTableDataSource(this.users);
        //   // Assign the paginator *after* dataSource is set
        //   this.dataSource.paginator = this.paginator;
        //   this.dataSource.sort = this.sort;
        //});
        this.dateForm = this.formBuilder.group({
            date1: [],
            date2: [],
        });
    };
    /**
     * Set the paginator and sort after the view init since this component will
     * be able to query its view for the initialized paginator and sort.
     */
    GridMaterialComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    // ngAfterViewInit() {
    //   this.dataSource.paginator = this.paginator;
    //   this.dataSource.sort = this.sort;
    // }
    GridMaterialComponent.prototype.editUser = function (row) {
        //alert("calling update*****"+row.registrationId.toString());
        localStorage.removeItem("editUserId");
        localStorage.setItem("editUserId", row.regNo.toString());
        this.router.navigate(['edit-user']);
    };
    GridMaterialComponent.prototype.cancelUser = function (row) {
        var _this = this;
        //alert("component cancell*****"+row.regNo);
        this.dataService.cancelMember(row.regNo).subscribe(function (data) {
            _this.users = _this.users.filter(function (u) { return u !== row; });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginator"])
    ], GridMaterialComponent.prototype, "paginator", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"]),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSort"])
    ], GridMaterialComponent.prototype, "sort", void 0);
    GridMaterialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-grid-material',
            template: __webpack_require__(/*! ./registration-worklist.component.html */ "./src/app/layout/form/admin/registration-worklist/registration-worklist.component.html"),
            styles: [__webpack_require__(/*! ./registration-worklist.component.scss */ "./src/app/layout/form/admin/registration-worklist/registration-worklist.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _registration_worklist_paging_service__WEBPACK_IMPORTED_MODULE_3__["RemotePagingService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], GridMaterialComponent);
    return GridMaterialComponent;
}());



/***/ }),

/***/ "./src/app/layout/form/admin/registration-worklist/registration-worklist.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/layout/form/admin/registration-worklist/registration-worklist.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: GridMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridMaterialModule", function() { return GridMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _registration_worklistl_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registration-worklistl-routing.module */ "./src/app/layout/form/admin/registration-worklist/registration-worklistl-routing.module.ts");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared */ "./src/app/shared/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _registration_worklist_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./registration-worklist.component */ "./src/app/layout/form/admin/registration-worklist/registration-worklist.component.ts");
/* harmony import */ var ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/datepicker */ "./node_modules/ngx-bootstrap/datepicker/fesm5/ngx-bootstrap-datepicker.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var GridMaterialModule = /** @class */ (function () {
    function GridMaterialModule() {
    }
    GridMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _shared__WEBPACK_IMPORTED_MODULE_3__["PageHeaderModule"], _registration_worklistl_routing_module__WEBPACK_IMPORTED_MODULE_2__["GridMaterialRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], ngx_bootstrap_datepicker__WEBPACK_IMPORTED_MODULE_6__["BsDatepickerModule"].forRoot(),
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressSpinnerModule"]
            ],
            declarations: [_registration_worklist_component__WEBPACK_IMPORTED_MODULE_5__["GridMaterialComponent"]],
            bootstrap: [_registration_worklist_component__WEBPACK_IMPORTED_MODULE_5__["GridMaterialComponent"]],
        })
    ], GridMaterialModule);
    return GridMaterialModule;
}());



/***/ }),

/***/ "./src/app/layout/form/admin/registration-worklist/registration-worklistl-routing.module.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/layout/form/admin/registration-worklist/registration-worklistl-routing.module.ts ***!
  \**************************************************************************************************/
/*! exports provided: GridMaterialRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GridMaterialRoutingModule", function() { return GridMaterialRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _registration_worklist_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registration-worklist.component */ "./src/app/layout/form/admin/registration-worklist/registration-worklist.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '', component: _registration_worklist_component__WEBPACK_IMPORTED_MODULE_2__["GridMaterialComponent"]
    }
];
var GridMaterialRoutingModule = /** @class */ (function () {
    function GridMaterialRoutingModule() {
    }
    GridMaterialRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], GridMaterialRoutingModule);
    return GridMaterialRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=form-admin-registration-worklist-registration-worklist-module.js.map