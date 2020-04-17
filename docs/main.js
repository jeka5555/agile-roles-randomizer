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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"toolbar\">\n    <span>Agile Roles Randomizer</span>\n</mat-toolbar>\n\n<div class=\"nav-container\">\n    <mat-tab-group [selectedIndex]=\"selectedIndex\" (selectedTabChange)=\"navigate($event)\">\n        <mat-tab label=\"Рандомайзер\"></mat-tab>\n        <mat-tab label=\"Настройки\"></mat-tab>\n    </mat-tab-group>\n    <mat-divider class=\"divider\"></mat-divider>\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolbar {\n  display: flex;\n  justify-content: center; }\n\nmat-tab-group {\n  flex-direction: row; }\n\n.nav-container {\n  display: flex;\n  align-items: center;\n  flex-direction: column; }\n\n.divider {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXNCf0LXRgNC10L3QvtGBXFxQcm9qZWN0c1xcYWdpbGUtcm9sZXMtcmFuZG9taXplcjIvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWE7RUFDYix3QkFBdUIsRUFDeEI7O0FBRUQ7RUFDRSxvQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSxjQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLHVCQUFzQixFQUN2Qjs7QUFFRDtFQUNFLFlBQVcsRUFDWiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYmFyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbm1hdC10YWItZ3JvdXAge1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG4ubmF2LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7IFxuICBhbGlnbi1pdGVtczogY2VudGVyOyBcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmRpdmlkZXIge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var routingMap = ['/', '/settings'];
var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1))
            .subscribe(function () { return (_this.selectedIndex = routingMap.indexOf(_this.router.url) || 0); });
    };
    AppComponent.prototype.navigate = function (_a) {
        var index = _a.index;
        this.router.navigate([routingMap[index]]);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")],
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.material.module.ts":
/*!****************************************!*\
  !*** ./src/app/app.material.module.ts ***!
  \****************************************/
/*! exports provided: AppMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppMaterialModule", function() { return AppMaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppMaterialModule = /** @class */ (function () {
    function AppMaterialModule() {
    }
    AppMaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
            ],
        })
    ], AppMaterialModule);
    return AppMaterialModule;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.material.module */ "./src/app/app.material.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_randomizer_randomizer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/randomizer/randomizer.component */ "./src/app/components/randomizer/randomizer.component.ts");
/* harmony import */ var _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/settings/settings.component */ "./src/app/components/settings/settings.component.ts");
/* harmony import */ var _components_roles_table_roles_table_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/roles-table/roles-table.component */ "./src/app/components/roles-table/roles-table.component.ts");
/* harmony import */ var _services_data_storage_data_storage_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/data-storage/data-storage.service */ "./src/app/services/data-storage/data-storage.service.ts");
/* harmony import */ var ngx_clipboard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-clipboard */ "./node_modules/ngx-clipboard/fesm5/ngx-clipboard.js");
/* harmony import */ var _services_slack_api_slack_api_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/slack-api/slack-api.service */ "./src/app/services/slack-api/slack-api.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_9__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _app_material_module__WEBPACK_IMPORTED_MODULE_5__["AppMaterialModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkTableModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                ngx_clipboard__WEBPACK_IMPORTED_MODULE_14__["ClipboardModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot([
                    {
                        path: '',
                        component: _components_randomizer_randomizer_component__WEBPACK_IMPORTED_MODULE_10__["RandomizerComponent"],
                    },
                    {
                        path: 'settings',
                        component: _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_11__["SettingsComponent"],
                    },
                ]),
            ],
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _components_randomizer_randomizer_component__WEBPACK_IMPORTED_MODULE_10__["RandomizerComponent"], _components_settings_settings_component__WEBPACK_IMPORTED_MODULE_11__["SettingsComponent"], _components_roles_table_roles_table_component__WEBPACK_IMPORTED_MODULE_12__["RolesTableComponent"]],
            providers: [_services_data_storage_data_storage_service__WEBPACK_IMPORTED_MODULE_13__["DataStorageService"], _services_slack_api_slack_api_service__WEBPACK_IMPORTED_MODULE_15__["SlackApiService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/randomizer/randomizer.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/randomizer/randomizer.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cards-content\">\n    <mat-card>\n        <mat-card-content>\n            <h2 class=\"card-title\">Команда</h2>\n            <div *ngFor=\"let teamMember of allTeamMembers\">\n                <mat-checkbox [(ngModel)]=\"checked[teamMember]\" [checked]=\"true\" color=\"primary\">\n                    {{ teamMember }}\n                </mat-checkbox>\n            </div>\n        </mat-card-content>\n    </mat-card>\n\n    <mat-card>\n        <mat-card-content class=\"current-roles\">\n            <h2 class=\"card-title\">Текущие роли:</h2>\n\n            <mat-form-field *ngFor=\"let role of roles\">\n                <mat-select [placeholder]=\"role\" (selectionChange)=\"onSelectChange($event, role)\">\n                    <mat-option *ngFor=\"let teamMember of getTeamMembersForRole(role)\" [value]=\"teamMember\">\n                        {{ teamMember }}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n\n        </mat-card-content>\n    </mat-card>\n\n    <mat-card>\n        <mat-card-content>\n            <h2 class=\"card-title\">Выбранные роли:</h2>\n            <ng-container *ngFor=\"let chosenRole of chosenRoles\">\n                <div class=\"chosen-role\">\n                    <div class=\"role-name\"><b>{{ chosenRole.role }}:</b></div>\n                    <div>{{ chosenRole.teamMember }}</div>\n                </div>\n            </ng-container>\n\n            <button (click)=\"sendToSlack()\" *ngIf=\"chosenRoles && chosenRoles.length && !!slackToken && !!slackChannel\" mat-button color=\"primary\">\n                Отправить в Slack\n                <mat-icon>send</mat-icon>\n            </button>\n        </mat-card-content>\n    </mat-card>\n</div>\n\n<div class=\"button-container\">\n    <button (click)=\"randomize()\" [disabled]=\"randomInProgress\" class=\"app-button\" mat-raised-button color=\"primary\">\n        Выбрать новые роли\n    </button>\n</div>"

/***/ }),

/***/ "./src/app/components/randomizer/randomizer.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/randomizer/randomizer.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cards-content {\n  padding: 5px;\n  display: flex;\n  justify-content: center; }\n\nmat-card {\n  margin: 5px;\n  padding: 50px; }\n\nmat-checkbox {\n  margin: 10px;\n  font-size: 16px; }\n\nmat-form-field {\n  width: 250px; }\n\n.app-button {\n  margin: 5px; }\n\n.card-title {\n  margin: 10px 0;\n  color: rgba(0, 0, 0, 0.54); }\n\n.current-roles {\n  display: flex;\n  flex-direction: column; }\n\n.chosen-role {\n  margin: 20px 0px;\n  font-size: 16px;\n  line-height: 1.6; }\n\n.role-name {\n  color: rgba(0, 0, 0, 0.54); }\n\n.button-container {\n  display: flex;\n  justify-content: center;\n  margin-top: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yYW5kb21pemVyL0Q6XFzQn9C10YDQtdC90L7RgVxcUHJvamVjdHNcXGFnaWxlLXJvbGVzLXJhbmRvbWl6ZXIyL3NyY1xcYXBwXFxjb21wb25lbnRzXFxyYW5kb21pemVyXFxyYW5kb21pemVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBWTtFQUNaLGNBQWE7RUFDYix3QkFBdUIsRUFDeEI7O0FBRUQ7RUFDRSxZQUFXO0VBQ1gsY0FBYSxFQUNkOztBQUVEO0VBQ0UsYUFBWTtFQUNaLGdCQUFlLEVBQ2hCOztBQUVEO0VBQ0UsYUFBWSxFQUNiOztBQUVEO0VBQ0UsWUFBVyxFQUNaOztBQUVEO0VBQ0UsZUFBYztFQUNkLDJCQUEwQixFQUMzQjs7QUFFRDtFQUNFLGNBQWE7RUFDYix1QkFBc0IsRUFDdkI7O0FBRUQ7RUFDRSxpQkFBZ0I7RUFDaEIsZ0JBQWU7RUFDZixpQkFBZ0IsRUFDakI7O0FBRUQ7RUFDRSwyQkFBMEIsRUFDM0I7O0FBRUQ7RUFDRSxjQUFhO0VBQ2Isd0JBQXVCO0VBQ3ZCLGlCQUFnQixFQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmFuZG9taXplci9yYW5kb21pemVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRzLWNvbnRlbnQge1xuICBwYWRkaW5nOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5tYXQtY2FyZCB7XG4gIG1hcmdpbjogNXB4O1xuICBwYWRkaW5nOiA1MHB4O1xufVxuXG5tYXQtY2hlY2tib3gge1xuICBtYXJnaW46IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMjUwcHg7XG59XG5cbi5hcHAtYnV0dG9uIHtcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi5jYXJkLXRpdGxlIHtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xufVxuXG4uY3VycmVudC1yb2xlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5jaG9zZW4tcm9sZSB7XG4gIG1hcmdpbjogMjBweCAwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDEuNjtcbn1cblxuLnJvbGUtbmFtZSB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xufVxuXG4uYnV0dG9uLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/components/randomizer/randomizer.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/randomizer/randomizer.component.ts ***!
  \***************************************************************/
/*! exports provided: RandomizerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RandomizerComponent", function() { return RandomizerComponent; });
/* harmony import */ var _enums_randomizer_modes_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../enums/randomizer-modes.enum */ "./src/app/enums/randomizer-modes.enum.ts");
/* harmony import */ var _services_data_storage_data_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data-storage/data-storage.service */ "./src/app/services/data-storage/data-storage.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_slack_api_slack_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/slack-api/slack-api.service */ "./src/app/services/slack-api/slack-api.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RANDOMIZE_ITERATIONS_COUNT = 50;
var RANDOMIZE_MILLISECONDS_COUNT = 2;
var RandomizerComponent = /** @class */ (function () {
    function RandomizerComponent(dataStorageService, slackApiService, snackBar, route) {
        this.dataStorageService = dataStorageService;
        this.slackApiService = slackApiService;
        this.snackBar = snackBar;
        this.route = route;
        this.checked = {};
        this.lastIterationRoles = {};
        this.chosenRoles = [];
        this.randomizeCount = 0;
        this.randomInProgress = false;
    }
    RandomizerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1)).subscribe(function (_a) {
            var data = _a.data;
            if (data) {
                try {
                    var serviceData = JSON.parse(data);
                    _this.dataStorageService.restoreState(serviceData);
                }
                catch (_b) {
                    throw new Error('Cannot parse data JSON - invalid format');
                }
            }
            _this.allTeamMembers = _this.dataStorageService.teamMembers;
            _this.roles = _this.dataStorageService.roles;
            _this.rolesMap = _this.dataStorageService.rolesMap;
            _this.randomizerMode = _this.dataStorageService.randomizerMode;
            _this.instantChoice = _this.dataStorageService.instantChoice;
            _this.slackToken = _this.dataStorageService.slackToken;
            _this.slackChannel = _this.dataStorageService.slackChannel;
            _this.allTeamMembers.forEach(function (teamMember) { return (_this.checked[teamMember] = true); });
        });
    };
    Object.defineProperty(RandomizerComponent.prototype, "checkedTeamMembers", {
        get: function () {
            var _this = this;
            return this.rolesMap.filter(function (_a) {
                var teamMember = _a.teamMember;
                return _this.checked[teamMember];
            });
        },
        enumerable: true,
        configurable: true
    });
    RandomizerComponent.prototype.getTeamMembersForRole = function (targetRole) {
        return this.checkedTeamMembers
            .filter(function (_a) {
            var teamMemberRoles = _a.teamMemberRoles;
            return teamMemberRoles.some(function (role) { return role === targetRole; });
        })
            .map(function (_a) {
            var teamMember = _a.teamMember;
            return teamMember;
        });
    };
    RandomizerComponent.prototype.onSelectChange = function (_a, role) {
        var value = _a.value;
        this.lastIterationRoles[role] = value;
    };
    RandomizerComponent.prototype.randomize = function () {
        var _this = this;
        this.randomInProgress = true;
        setTimeout(function () {
            var unsortedChosenRoles = _this.getChosenRoles([]);
            _this.chosenRoles =
                unsortedChosenRoles.length === _this.roles.length
                    ? _this.roles.map(function (role) {
                        return unsortedChosenRoles.find(function (chosenRoles) { return chosenRoles.role === role; });
                    })
                    : [];
            _this.randomizeCount++;
            if (!_this.instantChoice && _this.randomizeCount < RANDOMIZE_ITERATIONS_COUNT) {
                _this.randomize();
            }
            else {
                _this.randomizeCount = 0;
                _this.randomInProgress = false;
                if (unsortedChosenRoles.length !== _this.roles.length) {
                    _this.snackBar.open('Невозможно выбрать все роли', 'Недостаточно участников', { duration: 4000 });
                }
            }
        }, RANDOMIZE_MILLISECONDS_COUNT * this.randomizeCount);
    };
    RandomizerComponent.prototype.sendToSlack = function () {
        this.slackApiService.setTopic(this.chosenRoles);
    };
    RandomizerComponent.prototype.roleComparator = function (role1, role2) {
        return this.getTeamMembersForRole(role1).length - this.getTeamMembersForRole(role2).length;
    };
    RandomizerComponent.prototype.getChosenRoles = function (alreadyChosenRoles) {
        var remainingRoles = this.roles
            .filter(function (role) { return !alreadyChosenRoles.some(function (chosenRole) { return chosenRole.role === role; }); })
            .sort(this.roleComparator.bind(this));
        if (!remainingRoles.length) {
            return alreadyChosenRoles;
        }
        var firstRole = remainingRoles[0];
        var teamMembersForRole = this.getTeamMembersForRole(firstRole);
        var notChosenTeamMembers = this.filterByNotChosen(teamMembersForRole, alreadyChosenRoles);
        var membersFilteredByRandomizerMode = this.filterByRandomizerMode(firstRole, notChosenTeamMembers, this.randomizerMode);
        var chosenTeamMember = this.getRandomMember(membersFilteredByRandomizerMode);
        if (chosenTeamMember) {
            alreadyChosenRoles.push({
                role: firstRole,
                teamMember: chosenTeamMember,
            });
        }
        else {
            return alreadyChosenRoles;
        }
        return this.getChosenRoles(alreadyChosenRoles);
    };
    RandomizerComponent.prototype.getRandomMember = function (teamMembers) {
        return teamMembers[Math.floor(Math.random() * teamMembers.length)];
    };
    RandomizerComponent.prototype.filterByRandomizerMode = function (role, teamMembers, randomizerMode) {
        var _this = this;
        switch (randomizerMode) {
            case _enums_randomizer_modes_enum__WEBPACK_IMPORTED_MODULE_0__["RandomizerModes"].NEW_MEMBERS_FOR_ITERATION:
                return teamMembers.filter(function (teamMember) { return !_this.wasAlreadySelectedLastIteration(teamMember); });
            case _enums_randomizer_modes_enum__WEBPACK_IMPORTED_MODULE_0__["RandomizerModes"].NEW_MEMBERS_FOR_ROLE:
                return teamMembers.filter(function (teamMember) { return _this.lastIterationRoles[role] !== teamMember; });
            default:
                return teamMembers;
        }
    };
    RandomizerComponent.prototype.filterByNotChosen = function (teamMembers, chosenMembers) {
        return teamMembers.filter(function (teamMember) { return !chosenMembers.some(function (chosenRole) { return chosenRole.teamMember === teamMember; }); });
    };
    RandomizerComponent.prototype.wasAlreadySelectedLastIteration = function (teamMember) {
        var _this = this;
        return Object.keys(this.lastIterationRoles)
            .map(function (key) { return _this.lastIterationRoles[key]; })
            .includes(teamMember);
    };
    RandomizerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-randomizer',
            template: __webpack_require__(/*! ./randomizer.component.html */ "./src/app/components/randomizer/randomizer.component.html"),
            styles: [__webpack_require__(/*! ./randomizer.component.scss */ "./src/app/components/randomizer/randomizer.component.scss")],
        }),
        __metadata("design:paramtypes", [_services_data_storage_data_storage_service__WEBPACK_IMPORTED_MODULE_1__["DataStorageService"], _services_slack_api_slack_api_service__WEBPACK_IMPORTED_MODULE_6__["SlackApiService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], RandomizerComponent);
    return RandomizerComponent;
}());



/***/ }),

/***/ "./src/app/components/roles-table/roles-table.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/roles-table/roles-table.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-table [dataSource]=\"filteredTeamMembers\" class=\"table\">\n    <ng-container cdkColumnDef=\"name\">\n        <mat-header-cell *cdkHeaderCellDef> Имя / роль </mat-header-cell>\n        <mat-cell *cdkCellDef=\"let row\"> {{ row }} </mat-cell>\n    </ng-container>\n\n    <ng-container *ngFor=\"let role of filteredRoles; let i = index;\" [cdkColumnDef]=\"role\">\n        <mat-header-cell *cdkHeaderCellDef class=\"centered\"> {{ role }} </mat-header-cell>\n        <mat-cell *cdkCellDef=\"let row; let j = index;\" class=\"centered\"> \n            <mat-checkbox \n                [checked]=\"rolesTableCheckboxesState[j] ? rolesTableCheckboxesState[j][i] : false\" \n                (change)=\"onCheckBoxChange(j, i)\" \n                color=\"primary\">\n            </mat-checkbox> \n        </mat-cell>\n    </ng-container>\n\n    <mat-header-row *cdkHeaderRowDef=\"columns\"></mat-header-row>\n    <mat-row *cdkRowDef=\"let row; columns: columns\"></mat-row>\n</mat-table>"

/***/ }),

/***/ "./src/app/components/roles-table/roles-table.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/roles-table/roles-table.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".centered {\n  justify-content: center;\n  text-align: center; }\n\n.table {\n  min-width: 500px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yb2xlcy10YWJsZS9EOlxc0J/QtdGA0LXQvdC+0YFcXFByb2plY3RzXFxhZ2lsZS1yb2xlcy1yYW5kb21pemVyMi9zcmNcXGFwcFxcY29tcG9uZW50c1xccm9sZXMtdGFibGVcXHJvbGVzLXRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQXVCO0VBQ3ZCLG1CQUFrQixFQUNyQjs7QUFFRDtFQUNJLGlCQUFnQixFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcm9sZXMtdGFibGUvcm9sZXMtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyZWQge1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRhYmxlIHtcbiAgICBtaW4td2lkdGg6IDUwMHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/roles-table/roles-table.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/roles-table/roles-table.component.ts ***!
  \*****************************************************************/
/*! exports provided: RolesTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RolesTableComponent", function() { return RolesTableComponent; });
/* harmony import */ var _services_data_storage_data_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/data-storage/data-storage.service */ "./src/app/services/data-storage/data-storage.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RolesTableComponent = /** @class */ (function () {
    function RolesTableComponent(dataService) {
        this.dataService = dataService;
    }
    RolesTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.rolesTableCheckboxesState = this.dataService.rolesMap.map(function (_a) {
            var teamMemberRoles = _a.teamMemberRoles;
            return _this.roles.map(function (role) { return teamMemberRoles.includes(role); });
        });
    };
    RolesTableComponent.prototype.ngOnChanges = function (_a) {
        var teamMembers = _a.teamMembers, roles = _a.roles;
        if (teamMembers && teamMembers.currentValue) {
            this.filteredTeamMembers = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["uniq"])(teamMembers.currentValue.filter(function (member) { return !!member; }));
            this.saveStateToService();
        }
        if (roles && roles.currentValue) {
            this.filteredRoles = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["uniq"])(roles.currentValue.filter(function (role) { return !!role; }));
            this.columns = ['name'].concat(this.filteredRoles);
            this.saveStateToService();
        }
    };
    RolesTableComponent.prototype.onCheckBoxChange = function (i, j) {
        if (!this.rolesTableCheckboxesState[i]) {
            this.rolesTableCheckboxesState[i] = new Array(this.roles.length).fill(false);
        }
        this.rolesTableCheckboxesState[i][j] = !this.rolesTableCheckboxesState[i][j];
        this.saveStateToService();
    };
    RolesTableComponent.prototype.saveStateToService = function () {
        var _this = this;
        if (!this.filteredTeamMembers || !this.filteredRoles || !this.rolesTableCheckboxesState) {
            return;
        }
        var rolesMap = this.filteredTeamMembers.map(function (teamMember, memberIndex) {
            var teamMemberRoles = _this.filteredRoles.filter(function (role, roleIndex) {
                return _this.rolesTableCheckboxesState[memberIndex] ? _this.rolesTableCheckboxesState[memberIndex][roleIndex] : false;
            });
            return {
                teamMember: teamMember,
                teamMemberRoles: teamMemberRoles,
            };
        });
        this.dataService.rolesMap = rolesMap;
        this.dataService.roles = this.filteredRoles;
        this.dataService.teamMembers = this.filteredTeamMembers;
        this.dataService.updateState();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Array)
    ], RolesTableComponent.prototype, "teamMembers", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        __metadata("design:type", Array)
    ], RolesTableComponent.prototype, "roles", void 0);
    RolesTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-roles-table',
            template: __webpack_require__(/*! ./roles-table.component.html */ "./src/app/components/roles-table/roles-table.component.html"),
            styles: [__webpack_require__(/*! ./roles-table.component.scss */ "./src/app/components/roles-table/roles-table.component.scss")],
        }),
        __metadata("design:paramtypes", [_services_data_storage_data_storage_service__WEBPACK_IMPORTED_MODULE_0__["DataStorageService"]])
    ], RolesTableComponent);
    return RolesTableComponent;
}());



/***/ }),

/***/ "./src/app/components/settings/settings.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/settings/settings.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cards-content\">\n    <div class=\"row-container\">\n        <mat-card class=\"grow\">\n            <mat-card-content>\n                <h2 class=\"card-title\">Режим рандомайзера:</h2> \n                <mat-radio-group [(ngModel)]=\"randomizerMode\" (change)=\"saveStateToService()\">\n                    <mat-radio-button color=\"primary\" [value]=\"randomizerModes.NEW_MEMBERS_FOR_ITERATION\">\n                        Выбранные участники не могут быть выбраны на следующей итерации\n                    </mat-radio-button>\n                    <mat-radio-button color=\"primary\" [value]=\"randomizerModes.NEW_MEMBERS_FOR_ROLE\">\n                        Одну роль нельзя занимать два раза подряд\n                    </mat-radio-button>\n                    <mat-radio-button color=\"primary\" [value]=\"randomizerModes.NO_RESTRICTIONS\">\n                        Без ограничений\n                    </mat-radio-button>\n                </mat-radio-group>\n            </mat-card-content>\n        </mat-card>\n\n        <mat-card class=\"grow\">\n            <mat-card-content>\n                <h2 class=\"card-title\">Мгновенный выбор:</h2> \n                <mat-radio-group [(ngModel)]=\"instantChoice\" (change)=\"saveStateToService()\">\n                    <mat-radio-button color=\"primary\" [value]=\"true\">Включен</mat-radio-button>\n                    <mat-radio-button color=\"primary\" [value]=\"false\">Выключен</mat-radio-button>\n                </mat-radio-group>\n            </mat-card-content>\n        </mat-card>\n\n        <mat-card class=\"grow\">\n            <mat-card-content>\n                <h2 class=\"card-title\">Ссылка для копирования:</h2> \n                <input class=\"item-input copy-link\" [value]=\"copyLink\" disabled />\n                <button \n                    [cbContent]=\"copyLink\" \n                    (click)=\"copyLinkToClipboard()\" \n                    ngxClipboard \n                    mat-flat-button \n                    color=\"primary\" \n                    class=\"copy-link-button\">\n                    \n                    Скопировать\n                </button>\n            </mat-card-content>\n        </mat-card>\n    </div>\n\n    <div class=\"row-container\">\n        <mat-card class=\"grow\">\n            <mat-card-content>\n                <div class=\"inputs-container\">\n                    <div>\n                        <h2 class=\"card-title\">Роли:</h2> \n                        <div *ngFor=\"let role of roles; let i = index; trackBy: trackByFn\" class=\"input-container\">\n                            <input [value]=\"role\" (keyup)=\"onRoleValueChange($event, i)\" class=\"item-input\" />\n                            <button \n                                (click)=\"removeRole(i)\" \n                                mat-flat-button \n                                color=\"accent\" \n                                class=\"remove-item-button\">\n                                \n                                X\n                            </button>\n                        </div>\n                    </div>\n                    <button \n                        (click)=\"addFormControlForRole()\" \n                        mat-raised-button \n                        color=\"primary\" \n                        class=\"add-item-button\">\n                        \n                        Добавить\n                    </button>\n                </div>\n            </mat-card-content>\n        </mat-card>\n\n        <mat-card class=\"grow\">\n            <mat-card-content>\n                <div class=\"inputs-container\">\n                    <div>\n                        <h2 class=\"card-title\">Команда:</h2> \n                        <div *ngFor=\"let teamMember of teamMembers; let i = index; trackBy: trackByFn\" class=\"input-container\">\n                            <input [value]=\"teamMember\" (keyup)=\"onTeamMemberValueChange($event, i)\" class=\"item-input\" />\n                            <button \n                                (click)=\"removeTeamMember(i)\"\n                                mat-flat-button color=\"accent\" \n                                class=\"remove-item-button\">\n                                \n                                X\n                            </button>\n                        </div>\n                    </div>\n                    <button \n                        (click)=\"addFormControlForTeamMember()\" \n                        mat-raised-button color=\"primary\" \n                        class=\"add-item-button\">\n                        \n                        Добавить\n                    </button>\n                </div>\n            </mat-card-content>\n        </mat-card>\n\n        <mat-card class=\"grow\">\n            <mat-card-content>\n                <h2 class=\"card-title\">Таблица доступных ролей:</h2>\n                <app-roles-table [teamMembers]=\"teamMembers\" [roles]=\"roles\"></app-roles-table>\n            </mat-card-content>\n        </mat-card>\n\n    </div>\n\n    <div class=\"row-container\">\n        <mat-card class=\"grow\">\n            <mat-card-content>\n                <h2 class=\"card-title\">Оповещения с Slack:</h2>\n                <mat-slide-toggle [checked]=\"isPrivateChannel\" (change)=\"toogleChannelType($event)\" class=\"toggle\">Channel is private</mat-slide-toggle>\n                <mat-form-field class=\"full-width\">\n                    <input [value]=\"slackToken\" (keyup)=\"onSlackTokenValueChange($event)\" matInput placeholder=\"Токен для Slack API\" />\n                </mat-form-field>\n                <mat-form-field class=\"full-width\">\n                    <input [value]=\"slackChannel\" (keyup)=\"onSlackChannelValueChange($event)\" matInput placeholder=\"ID канала\" />\n                </mat-form-field>\n            </mat-card-content>\n        </mat-card>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/settings/settings.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/settings/settings.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cards-content {\n  padding: 5px;\n  display: flex;\n  flex-direction: column; }\n\n.card-title {\n  margin: 10px 0;\n  color: rgba(0, 0, 0, 0.54); }\n\nmat-card {\n  margin: 5px;\n  padding: 50px; }\n\n.toggle {\n  margin-bottom: 5px; }\n\nmat-card-content {\n  height: 100%; }\n\n.inputs-container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  justify-content: space-between; }\n\n.input-container {\n  display: flex;\n  margin-top: 12px; }\n\n.item-input {\n  width: 180px;\n  padding: 8px;\n  font-size: 14px;\n  border: 1px solid rgba(0, 0, 0, 0.12); }\n\n.add-item-button {\n  margin-top: 16px; }\n\n.remove-item-button {\n  margin-left: 8px;\n  height: 31px;\n  width: 32px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 2px;\n  -webkit-transform: scale(0.8);\n          transform: scale(0.8);\n  font-weight: bold; }\n\n.row-container {\n  display: flex;\n  justify-content: center;\n  width: 1320px;\n  align-self: center; }\n\nmat-card-content {\n  display: flex;\n  flex-direction: column; }\n\nmat-radio-group {\n  display: flex;\n  flex-direction: column;\n  padding-top: 8px; }\n\nmat-radio-button {\n  margin: 2px 0; }\n\n.grow {\n  flex-grow: 1; }\n\n.copy-link {\n  width: 250px;\n  margin-top: 12px; }\n\n.copy-link-button {\n  display: flex;\n  align-self: center;\n  margin-top: 12px;\n  height: 36px; }\n\n.full-width {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZXR0aW5ncy9EOlxc0J/QtdGA0LXQvdC+0YFcXFByb2plY3RzXFxhZ2lsZS1yb2xlcy1yYW5kb21pemVyMi9zcmNcXGFwcFxcY29tcG9uZW50c1xcc2V0dGluZ3NcXHNldHRpbmdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBWTtFQUNaLGNBQWE7RUFFYix1QkFBc0IsRUFDdkI7O0FBRUQ7RUFDRSxlQUFjO0VBQ2QsMkJBQTBCLEVBQzNCOztBQUVEO0VBQ0UsWUFBVztFQUNYLGNBQWEsRUFDZDs7QUFFRDtFQUNFLG1CQUFrQixFQUNuQjs7QUFFRDtFQUNFLGFBQVksRUFDYjs7QUFFRDtFQUNFLGNBQWE7RUFDYix1QkFBc0I7RUFDdEIsYUFBWTtFQUNaLCtCQUE4QixFQUMvQjs7QUFFRDtFQUNFLGNBQWE7RUFDYixpQkFBZ0IsRUFDakI7O0FBRUQ7RUFDRSxhQUFZO0VBQ1osYUFBWTtFQUNaLGdCQUFlO0VBQ2Ysc0NBQXFDLEVBQ3RDOztBQUVEO0VBQ0UsaUJBQWdCLEVBQ2pCOztBQUVEO0VBQ0UsaUJBQWdCO0VBQ2hCLGFBQVk7RUFDWixZQUFXO0VBQ1gsY0FBYTtFQUNiLG9CQUFtQjtFQUNuQix3QkFBdUI7RUFDdkIsZ0JBQWU7RUFDZiw4QkFBcUI7VUFBckIsc0JBQXFCO0VBQ3JCLGtCQUFpQixFQUNsQjs7QUFFRDtFQUNFLGNBQWE7RUFDYix3QkFBdUI7RUFDdkIsY0FBYTtFQUNiLG1CQUFrQixFQUNuQjs7QUFFRDtFQUNFLGNBQWE7RUFDYix1QkFBc0IsRUFDdkI7O0FBRUQ7RUFDRSxjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLGlCQUFnQixFQUNqQjs7QUFFRDtFQUNFLGNBQWEsRUFDZDs7QUFFRDtFQUNFLGFBQVksRUFDYjs7QUFFRDtFQUNFLGFBQVk7RUFDWixpQkFBZ0IsRUFDakI7O0FBRUQ7RUFDRSxjQUFhO0VBQ2IsbUJBQWtCO0VBQ2xCLGlCQUFnQjtFQUNoQixhQUFZLEVBQ2I7O0FBRUQ7RUFDRSxZQUFXLEVBQ1oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmRzLWNvbnRlbnQge1xuICBwYWRkaW5nOiA1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uY2FyZC10aXRsZSB7XG4gIG1hcmdpbjogMTBweCAwO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbn1cblxubWF0LWNhcmQge1xuICBtYXJnaW46IDVweDtcbiAgcGFkZGluZzogNTBweDtcbn1cblxuLnRvZ2dsZSB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxubWF0LWNhcmQtY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmlucHV0cy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmlucHV0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi10b3A6IDEycHg7XG59XG5cbi5pdGVtLWlucHV0IHtcbiAgd2lkdGg6IDE4MHB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLmFkZC1pdGVtLWJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi5yZW1vdmUtaXRlbS1idXR0b24ge1xuICBtYXJnaW4tbGVmdDogOHB4O1xuICBoZWlnaHQ6IDMxcHg7XG4gIHdpZHRoOiAzMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMnB4O1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucm93LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7IFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEzMjBweDsgXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxubWF0LWNhcmQtY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbm1hdC1yYWRpby1ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmctdG9wOiA4cHg7XG59XG5cbm1hdC1yYWRpby1idXR0b24ge1xuICBtYXJnaW46IDJweCAwO1xufVxuXG4uZ3JvdyB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLmNvcHktbGluayB7XG4gIHdpZHRoOiAyNTBweDtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cblxuLmNvcHktbGluay1idXR0b24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEycHg7XG4gIGhlaWdodDogMzZweDtcbn1cblxuLmZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/settings/settings.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/settings/settings.component.ts ***!
  \***********************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var _enums_randomizer_modes_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../enums/randomizer-modes.enum */ "./src/app/enums/randomizer-modes.enum.ts");
/* harmony import */ var _services_data_storage_data_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data-storage/data-storage.service */ "./src/app/services/data-storage/data-storage.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(dataStorageService, snackBar, cd) {
        this.dataStorageService = dataStorageService;
        this.snackBar = snackBar;
        this.cd = cd;
        this.roles = this.dataStorageService.roles;
        this.teamMembers = this.dataStorageService.teamMembers;
        this.randomizerMode = this.dataStorageService.randomizerMode;
        this.instantChoice = this.dataStorageService.instantChoice;
        this.slackToken = this.dataStorageService.slackToken;
        this.slackChannel = this.dataStorageService.slackChannel;
        this.isPrivateChannel = this.dataStorageService.isPrivateChannel;
        this.randomizerModes = _enums_randomizer_modes_enum__WEBPACK_IMPORTED_MODULE_0__["RandomizerModes"];
        this.onDestroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.trackByFn = function (number) { return number; };
    }
    SettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataStorageService
            .getState$()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (state) { return !!state; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (state) { return window.location.href.replace('settings', '') + "?data=" + state; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.onDestroy$))
            .subscribe(function (link) {
            _this.copyLink = link;
            _this.cd.detectChanges();
        });
        this.dataStorageService.updateState();
    };
    SettingsComponent.prototype.ngOnDestroy = function () {
        this.onDestroy$.next();
        this.onDestroy$.complete();
    };
    SettingsComponent.prototype.addFormControlForRole = function () {
        this.roles = this.roles.concat(['']);
    };
    SettingsComponent.prototype.onRoleValueChange = function (event, index) {
        var newValue = event.target.value;
        this.roles = this.roles.slice(0, index).concat([newValue], this.roles.slice(index + 1, this.roles.length));
    };
    SettingsComponent.prototype.removeRole = function (roleIndex) {
        this.roles = this.roles.slice(0, roleIndex).concat(this.roles.slice(roleIndex + 1, this.roles.length));
    };
    SettingsComponent.prototype.addFormControlForTeamMember = function () {
        this.teamMembers = this.teamMembers.concat(['']);
    };
    SettingsComponent.prototype.onTeamMemberValueChange = function (event, index) {
        var newValue = event.target.value;
        this.teamMembers = this.teamMembers.slice(0, index).concat([newValue], this.teamMembers.slice(index + 1, this.teamMembers.length));
    };
    SettingsComponent.prototype.removeTeamMember = function (teamMemberIndex) {
        this.teamMembers = this.teamMembers.slice(0, teamMemberIndex).concat(this.teamMembers.slice(teamMemberIndex + 1, this.teamMembers.length));
    };
    SettingsComponent.prototype.saveStateToService = function () {
        this.dataStorageService.randomizerMode = this.randomizerMode;
        this.dataStorageService.instantChoice = this.instantChoice;
        this.dataStorageService.updateState();
    };
    SettingsComponent.prototype.copyLinkToClipboard = function () {
        this.snackBar.open('Ссылка скопирована в буфер обмена', '', { duration: 1000 });
    };
    SettingsComponent.prototype.onSlackTokenValueChange = function (event) {
        this.dataStorageService.slackToken = event.target.value;
    };
    SettingsComponent.prototype.onSlackChannelValueChange = function (event) {
        this.dataStorageService.slackChannel = event.target.value;
    };
    SettingsComponent.prototype.toogleChannelType = function (event) {
        this.dataStorageService.isPrivateChannel = event.checked;
    };
    SettingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__(/*! ./settings.component.html */ "./src/app/components/settings/settings.component.html"),
            styles: [__webpack_require__(/*! ./settings.component.scss */ "./src/app/components/settings/settings.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        }),
        __metadata("design:paramtypes", [_services_data_storage_data_storage_service__WEBPACK_IMPORTED_MODULE_1__["DataStorageService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/enums/randomizer-modes.enum.ts":
/*!************************************************!*\
  !*** ./src/app/enums/randomizer-modes.enum.ts ***!
  \************************************************/
/*! exports provided: RandomizerModes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RandomizerModes", function() { return RandomizerModes; });
var RandomizerModes;
(function (RandomizerModes) {
    RandomizerModes[RandomizerModes["NEW_MEMBERS_FOR_ITERATION"] = 0] = "NEW_MEMBERS_FOR_ITERATION";
    RandomizerModes[RandomizerModes["NEW_MEMBERS_FOR_ROLE"] = 1] = "NEW_MEMBERS_FOR_ROLE";
    RandomizerModes[RandomizerModes["NO_RESTRICTIONS"] = 2] = "NO_RESTRICTIONS";
})(RandomizerModes || (RandomizerModes = {}));


/***/ }),

/***/ "./src/app/helpers/data-compression.helper.ts":
/*!****************************************************!*\
  !*** ./src/app/helpers/data-compression.helper.ts ***!
  \****************************************************/
/*! exports provided: compressSettings, decompressSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compressSettings", function() { return compressSettings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decompressSettings", function() { return decompressSettings; });
var NUMBER_SYSTEM_BASE = 36;
function compressSettings(_a) {
    var teamMembers = _a.teamMembers, roles = _a.roles, rolesMap = _a.rolesMap, randomizerMode = _a.randomizerMode, instantChoice = _a.instantChoice, slackToken = _a.slackToken, slackChannel = _a.slackChannel, isPrivateChannel = _a.isPrivateChannel;
    var compressedRolesMap = teamMembers
        .map(function (person) {
        var teamMemberRoles = rolesMap.find(function (_a) {
            var teamMember = _a.teamMember;
            return teamMember === person;
        }).teamMemberRoles;
        return roles.map(function (role) { return +teamMemberRoles.includes(role); }).join('');
    })
        .map(function (stringifiedMemberRoles) { return parseInt("1" + stringifiedMemberRoles, 2); })
        .map(function (integerRepresentation) { return integerRepresentation.toString(NUMBER_SYSTEM_BASE); })
        .join('|');
    return {
        t: teamMembers,
        r: roles,
        z: compressedRolesMap,
        m: randomizerMode,
        i: +instantChoice,
        s: slackToken,
        c: slackChannel,
        p: isPrivateChannel,
    };
}
function decompressSettings(_a) {
    var t = _a.t, r = _a.r, z = _a.z, m = _a.m, i = _a.i, s = _a.s, c = _a.c, p = _a.p;
    var teamMembers = t;
    var roles = r;
    var stringRepresentation = z
        .split('|')
        .map(function (stringifiedMemberRoles) { return parseInt(stringifiedMemberRoles, NUMBER_SYSTEM_BASE); })
        .map(function (integerRepresentation) { return integerRepresentation.toString(2).substr(1); })
        .join('');
    var rolesMap = teamMembers.map(function (teamMember, teamMemberIndex) { return ({
        teamMember: teamMember,
        teamMemberRoles: roles.filter(function (_, roleIndex) { return !!+stringRepresentation[teamMemberIndex * roles.length + roleIndex]; }),
    }); });
    return {
        teamMembers: teamMembers,
        roles: roles,
        rolesMap: rolesMap,
        randomizerMode: m,
        instantChoice: !!i,
        slackToken: s,
        slackChannel: c,
        isPrivateChannel: p,
    };
}


/***/ }),

/***/ "./src/app/services/data-storage/data-storage.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/services/data-storage/data-storage.service.ts ***!
  \***************************************************************/
/*! exports provided: DataStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataStorageService", function() { return DataStorageService; });
/* harmony import */ var _enums_randomizer_modes_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../enums/randomizer-modes.enum */ "./src/app/enums/randomizer-modes.enum.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _helpers_data_compression_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../helpers/data-compression.helper */ "./src/app/helpers/data-compression.helper.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var defaultRoles = ['Scrum Master', 'Release Manager'];
var defaultTeamMembers = ['Name 1', 'Name 2', 'Name 3'];
var defaultRolesMap = [
    {
        teamMember: 'Name 1',
        teamMemberRoles: ['Scrum Master', 'Release Manager'],
    },
    {
        teamMember: 'Name 2',
        teamMemberRoles: ['Scrum Master', 'Release Manager'],
    },
    {
        teamMember: 'Name 3',
        teamMemberRoles: ['Scrum Master', 'Release Manager'],
    },
];
var defaultRandomizerMode = _enums_randomizer_modes_enum__WEBPACK_IMPORTED_MODULE_0__["RandomizerModes"].NEW_MEMBERS_FOR_ITERATION;
var defaultInstantChoice = false;
var defaultSlackToken = '';
var defaultSlackChannel = '';
var DataStorageService = /** @class */ (function () {
    function DataStorageService() {
        this._isPrivateChannel = false;
        this._state = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
    }
    Object.defineProperty(DataStorageService.prototype, "isPrivateChannel", {
        get: function () {
            return this._isPrivateChannel;
        },
        set: function (isPrivate) {
            this._isPrivateChannel = isPrivate;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataStorageService.prototype, "rolesMap", {
        get: function () {
            return this._rolesMap || defaultRolesMap;
        },
        set: function (rolesMap) {
            this._rolesMap = rolesMap;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataStorageService.prototype, "teamMembers", {
        get: function () {
            return this._teamMembers || defaultTeamMembers;
        },
        set: function (teamMembers) {
            this._teamMembers = teamMembers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataStorageService.prototype, "roles", {
        get: function () {
            return this._roles || defaultRoles;
        },
        set: function (roles) {
            this._roles = roles;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataStorageService.prototype, "randomizerMode", {
        get: function () {
            return this._randomizerMode || defaultRandomizerMode;
        },
        set: function (randomizerMode) {
            this._randomizerMode = randomizerMode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataStorageService.prototype, "instantChoice", {
        get: function () {
            return this._instantChoice || defaultInstantChoice;
        },
        set: function (instantChoice) {
            this._instantChoice = instantChoice;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataStorageService.prototype, "slackToken", {
        get: function () {
            return this._slackToken || defaultSlackToken;
        },
        set: function (slackToken) {
            this._slackToken = slackToken;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DataStorageService.prototype, "slackChannel", {
        get: function () {
            return this._slackChannel || defaultSlackChannel;
        },
        set: function (slackChannel) {
            this._slackChannel = slackChannel;
        },
        enumerable: true,
        configurable: true
    });
    DataStorageService.prototype.getState$ = function () {
        return this._state.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (state) { return JSON.stringify(Object(_helpers_data_compression_helper__WEBPACK_IMPORTED_MODULE_4__["compressSettings"])(state)); }));
    };
    DataStorageService.prototype.restoreState = function (minimizedServiceData) {
        var serviceData = Object(_helpers_data_compression_helper__WEBPACK_IMPORTED_MODULE_4__["decompressSettings"])(minimizedServiceData);
        this._teamMembers = serviceData.teamMembers;
        this._roles = serviceData.roles;
        this._rolesMap = serviceData.rolesMap;
        this._randomizerMode = serviceData.randomizerMode;
        this._instantChoice = serviceData.instantChoice;
        this._slackToken = serviceData.slackToken;
        this._slackChannel = serviceData.slackChannel;
        this._isPrivateChannel = serviceData.isPrivateChannel;
        this.updateState();
    };
    DataStorageService.prototype.updateState = function () {
        this._state.next({
            teamMembers: this.teamMembers,
            roles: this.roles,
            rolesMap: this.rolesMap,
            randomizerMode: this.randomizerMode,
            instantChoice: this.instantChoice,
            slackToken: this.slackToken,
            slackChannel: this.slackChannel,
            isPrivateChannel: this.isPrivateChannel,
        });
    };
    DataStorageService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], DataStorageService);
    return DataStorageService;
}());



/***/ }),

/***/ "./src/app/services/slack-api/slack-api.config.ts":
/*!********************************************************!*\
  !*** ./src/app/services/slack-api/slack-api.config.ts ***!
  \********************************************************/
/*! exports provided: SLACK_API_URL, SLACK_CHANNELS_SET_TOPIC, SLACK_PRIVATE_CHANNEL_SET_TOPIC, LINE_BREAK_CHARACTER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SLACK_API_URL", function() { return SLACK_API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SLACK_CHANNELS_SET_TOPIC", function() { return SLACK_CHANNELS_SET_TOPIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SLACK_PRIVATE_CHANNEL_SET_TOPIC", function() { return SLACK_PRIVATE_CHANNEL_SET_TOPIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LINE_BREAK_CHARACTER", function() { return LINE_BREAK_CHARACTER; });
var SLACK_API_URL = "https://slack.com/api/";
var SLACK_CHANNELS_SET_TOPIC = "channels.setTopic";
var SLACK_PRIVATE_CHANNEL_SET_TOPIC = "groups.setTopic";
var LINE_BREAK_CHARACTER = "\n";


/***/ }),

/***/ "./src/app/services/slack-api/slack-api.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/slack-api/slack-api.service.ts ***!
  \*********************************************************/
/*! exports provided: SlackApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlackApiService", function() { return SlackApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _slack_api_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slack-api.config */ "./src/app/services/slack-api/slack-api.config.ts");
/* harmony import */ var _data_storage_data_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data-storage/data-storage.service */ "./src/app/services/data-storage/data-storage.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SlackApiService = /** @class */ (function () {
    function SlackApiService(http, dataStorageService) {
        this.http = http;
        this.dataStorageService = dataStorageService;
    }
    SlackApiService.prototype.setTopic = function (chosenRoles) {
        var chosenRolesArray = [];
        chosenRoles.forEach(function (chosenRole) {
            chosenRolesArray.push(chosenRole.role + ": <@" + chosenRole.teamMember + ">");
        });
        var topic = "" + _slack_api_config__WEBPACK_IMPORTED_MODULE_2__["LINE_BREAK_CHARACTER"] + chosenRolesArray.join(_slack_api_config__WEBPACK_IMPORTED_MODULE_2__["LINE_BREAK_CHARACTER"]);
        var params = {
            topic: topic,
            token: this.dataStorageService.slackToken,
            channel: this.dataStorageService.slackChannel,
        };
        var SET_TOPIC = this.dataStorageService.isPrivateChannel ? _slack_api_config__WEBPACK_IMPORTED_MODULE_2__["SLACK_PRIVATE_CHANNEL_SET_TOPIC"] : _slack_api_config__WEBPACK_IMPORTED_MODULE_2__["SLACK_CHANNELS_SET_TOPIC"];
        this.http.get("" + _slack_api_config__WEBPACK_IMPORTED_MODULE_2__["SLACK_API_URL"] + SET_TOPIC, { params: params }).subscribe();
    };
    SlackApiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _data_storage_data_storage_service__WEBPACK_IMPORTED_MODULE_3__["DataStorageService"]])
    ], SlackApiService);
    return SlackApiService;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


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
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Перенос\Projects\agile-roles-randomizer2\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map