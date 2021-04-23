(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-features-accountpreferences-accountpreferences-module"],{

/***/ "018v":
/*!********************************************************************************!*\
  !*** ./src/app/modules/features/accountpreferences/accountpreferences.page.ts ***!
  \********************************************************************************/
/*! exports provided: AccountpreferencesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountpreferencesPage", function() { return AccountpreferencesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_accountpreferences_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./accountpreferences.page.html */ "TZB6");
/* harmony import */ var _accountpreferences_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accountpreferences.page.scss */ "w335");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AccountpreferencesPage = class AccountpreferencesPage {
    constructor() { }
    ngOnInit() {
    }
};
AccountpreferencesPage.ctorParameters = () => [];
AccountpreferencesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-accountpreferences',
        template: _raw_loader_accountpreferences_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_accountpreferences_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AccountpreferencesPage);



/***/ }),

/***/ "3a8Q":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/features/accountpreferences/accountpreferences.module.ts ***!
  \**********************************************************************************/
/*! exports provided: AccountpreferencesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountpreferencesPageModule", function() { return AccountpreferencesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _accountpreferences_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./accountpreferences-routing.module */ "zLbs");
/* harmony import */ var _accountpreferences_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./accountpreferences.page */ "018v");
/* harmony import */ var _shared_component_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/component/footer/footer.component */ "fHDH");
/* harmony import */ var _shared_component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/component/navbar/navbar.component */ "89L0");









let AccountpreferencesPageModule = class AccountpreferencesPageModule {
};
AccountpreferencesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _accountpreferences_routing_module__WEBPACK_IMPORTED_MODULE_5__["AccountpreferencesPageRoutingModule"]
        ],
        declarations: [_accountpreferences_page__WEBPACK_IMPORTED_MODULE_6__["AccountpreferencesPage"], _shared_component_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _shared_component_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"]]
    })
], AccountpreferencesPageModule);



/***/ }),

/***/ "TZB6":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/features/accountpreferences/accountpreferences.page.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <app-navbar class=\"fixed\"></app-navbar>\n  <div class=\"backColor\">\n    \n\n    <ion-row class=\"vh14\">\n      <ion-col size=\"0.5\"></ion-col>\n      <ion-col size=\"11.5\">\n        <p class=\"mb-10\">Voya 401(k) Savings Plan</p>\n        <p class=\"font-25 font-orange\">Account Preferences</p>\n      </ion-col>\n    </ion-row>\n\n    <div class=\"w-95\">\n      <ion-row class=\"bg-white bb-1 p-10 border-top-lr\"><ion-col size=\"0.4\"></ion-col><ion-col class=\"1.3\"><ion-icon class=\"font-orange font-24\" name=\"person\"></ion-icon></ion-col><ion-col size=\"9.5\"><p class=\"mb-0\">Personal Details</p></ion-col><ion-col class=\"m-auto\" size=\"0.8\"><ion-icon name=\"arrow-forward\"></ion-icon></ion-col></ion-row>\n      <ion-row class=\"bg-white bb-1 p-10 border-bottom-lr\"><ion-col size=\"0.4\"></ion-col><ion-col class=\"1.3\"><ion-icon class=\"font-orange font-24\" name=\"person\"></ion-icon></ion-col><ion-col size=\"9.5\"><p class=\"mb-0\">Communication Preferences</p></ion-col><ion-col class=\"m-auto\" size=\"0.8\"><ion-icon name=\"arrow-forward\"></ion-icon></ion-col></ion-row>\n\n    </div>\n\n\n    \n  </div>\n  <!-- <app-footer></app-footer> -->\n</ion-content>");

/***/ }),

/***/ "w335":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/features/accountpreferences/accountpreferences.page.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".voyaImage {\n  width: 55%;\n  margin: auto;\n  display: block;\n  margin-top: 8vw;\n}\n\nion-input {\n  --padding-top: 0px;\n  --padding-end: 0px;\n  --padding-bottom: 0px;\n  color: black;\n}\n\nion-toggle {\n  --background-checked: rgba(20, 90, 123, 1);\n}\n\nion-toggle.toggle-checked {\n  --background: #ffffff;\n  --background-checked: rgba(20, 90, 123, 1);\n  --handle-background: #7a49a5;\n  --handle-background-checked: #ffffff;\n}\n\n.ion-color-btnbackcolor {\n  --ion-color-btnbackcolor:#145a7b;\n  background: var(--ion-color-btnbackcolor);\n}\n\n.ion-color-white {\n  --ion-color-white:#ffffff;\n  --ion-color-black:#145a7b;\n  background: var(--ion-color-white);\n  color: var(--ion-color-black);\n}\n\n.backColor {\n  background-color: #f2f2f2;\n  height: 100%;\n}\n\n.dark {\n  color: black;\n}\n\n.icon-orange {\n  color: #d75525;\n}\n\n.fixed {\n  position: fixed;\n  z-index: 1;\n  width: 100%;\n}\n\n.bottomTabs {\n  position: fixed;\n  width: 100%;\n  bottom: 0px;\n  background-color: #f5f5f5;\n  border-top: 1px solid #00000036;\n  z-index: 1;\n}\n\n.w-95 {\n  width: 95%;\n  display: block;\n  margin: auto;\n}\n\n.vh14 {\n  padding-top: 14vh;\n}\n\n.m-auto {\n  margin: auto;\n}\n\n.m-20 {\n  margin: 20px;\n}\n\n.mb-0 {\n  margin-bottom: 0px;\n}\n\n.mb-5 {\n  margin-bottom: 5px;\n}\n\n.mb-10 {\n  margin-bottom: 10px;\n}\n\n.mb-15 {\n  margin-bottom: 15px;\n}\n\n.mb-20 {\n  margin-bottom: 20px;\n}\n\n.p-0 {\n  padding: 0px !important;\n}\n\n.p-10 {\n  padding: 10px;\n}\n\n.padding-6 {\n  padding: 6% !important;\n}\n\n.bg-white {\n  background-color: white;\n}\n\n.border-none {\n  border: none;\n  --inner-border-width: 0;\n}\n\n.border-bottom {\n  border-bottom: 1px solid #cecaca;\n}\n\n.border-color {\n  border: 1px solid #145a7b;\n}\n\n.bb-1 {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.24);\n}\n\n.border-top-lr {\n  border-radius: 15px 15px 0px 0px;\n}\n\n.border-bottom-lr {\n  border-radius: 0px 0px 15px 15px;\n}\n\n.b-radius {\n  border-radius: 12vw;\n}\n\n.hide {\n  display: none;\n}\n\n.show {\n  display: block;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-underline {\n  text-decoration: underline;\n}\n\n.font-10 {\n  font-size: 10px;\n}\n\n.font-14 {\n  font-size: 14px;\n}\n\n.font-16 {\n  font-size: 16px;\n}\n\n.font-22 {\n  font-size: 22px;\n}\n\n.font-25 {\n  font-size: 25px;\n}\n\n.font-24 {\n  font-size: 24px;\n}\n\n.font-orange {\n  color: #D75426;\n}\n\n.font-label-color {\n  color: #6E6E6E;\n}\n\n.sm-85 {\n  width: 93%;\n  margin: auto;\n  padding: 0px;\n  border-radius: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy90aGVtZS9jdXN0b20uc2NzcyIsIi4uLy4uLy4uLy4uLy4uL2FjY291bnRwcmVmZXJlbmNlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FDRUo7O0FEQ0E7RUFFSSwwQ0FBQTtBQ0NKOztBRElBO0VBQ0kscUJBQUE7RUFDQSwwQ0FBQTtFQUVBLDRCQUFBO0VBQ0Esb0NBQUE7QUNGSjs7QURJQTtFQUNJLGdDQUFBO0VBQ0EseUNBQUE7QUNESjs7QURHQTtFQUNJLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQ0FBQTtFQUNBLDZCQUFBO0FDQUo7O0FERUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7QUNDSjs7QURDQTtFQUNJLFlBQUE7QUNFSjs7QURBQTtFQUNJLGNBQUE7QUNHSjs7QUREQTtFQUNJLGVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0lKOztBREZBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSwrQkFBQTtFQUNBLFVBQUE7QUNLSjs7QURIQTtFQUNJLFVBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ01KOztBREpBO0VBQ0ksaUJBQUE7QUNPSjs7QURMQTtFQUNJLFlBQUE7QUNRSjs7QUROQTtFQUNJLFlBQUE7QUNTSjs7QURQQTtFQUNJLGtCQUFBO0FDVUo7O0FEUkE7RUFDSSxrQkFBQTtBQ1dKOztBRFRBO0VBQ0ksbUJBQUE7QUNZSjs7QURWQTtFQUNJLG1CQUFBO0FDYUo7O0FEWEE7RUFDSSxtQkFBQTtBQ2NKOztBRFpBO0VBQ0ksdUJBQUE7QUNlSjs7QURiQTtFQUNJLGFBQUE7QUNnQko7O0FEZEE7RUFDSSxzQkFBQTtBQ2lCSjs7QURmQTtFQUNJLHVCQUFBO0FDa0JKOztBRGhCQTtFQUNJLFlBQUE7RUFDQSx1QkFBQTtBQ21CSjs7QURqQkE7RUFDSSxnQ0FBQTtBQ29CSjs7QURsQkE7RUFDSSx5QkFBQTtBQ3FCSjs7QURuQkE7RUFDSSw0Q0FBQTtBQ3NCSjs7QURwQkE7RUFDSSxnQ0FBQTtBQ3VCSjs7QURyQkE7RUFDSSxnQ0FBQTtBQ3dCSjs7QUR0QkE7RUFDSSxtQkFBQTtBQ3lCSjs7QUR2QkE7RUFDSSxhQUFBO0FDMEJKOztBRHhCQTtFQUNJLGNBQUE7QUMyQko7O0FEekJBO0VBQ0ksa0JBQUE7QUM0Qko7O0FEMUJBO0VBQ0ksMEJBQUE7QUM2Qko7O0FEM0JBO0VBQ0ksZUFBQTtBQzhCSjs7QUQ1QkE7RUFDSSxlQUFBO0FDK0JKOztBRDdCQTtFQUNJLGVBQUE7QUNnQ0o7O0FEOUJBO0VBQ0ksZUFBQTtBQ2lDSjs7QUQvQkE7RUFDSSxlQUFBO0FDa0NKOztBRGhDQTtFQUNJLGVBQUE7QUNtQ0o7O0FEakNBO0VBQ0ksY0FBQTtBQ29DSjs7QURsQ0E7RUFDSSxjQUFBO0FDcUNKOztBRGxDQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FDcUNKIiwiZmlsZSI6ImFjY291bnRwcmVmZXJlbmNlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudm95YUltYWdle1xuICAgIHdpZHRoOiA1NSU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi10b3A6IDh2dztcbn1cbmlvbi1pbnB1dHtcbiAgICAtLXBhZGRpbmctdG9wOiAwcHg7XG4gICAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDBweDtcbiAgICBjb2xvcjpibGFjaztcbn1cblxuaW9uLXRvZ2dsZSB7XG4gICAgLy8gLS1iYWNrZ3JvdW5kOiByZ2JhKDIwLCA5MCwgMTIzLCAxKTtcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogcmdiYSgyMCwgOTAsIDEyMywgMSk7XG4gIFxuICAgIC8vIC0taGFuZGxlLWJhY2tncm91bmQ6IHJnYmEoMjAsIDkwLCAxMjMsIDEpO1xuICAgIC8vIC0taGFuZGxlLWJhY2tncm91bmQtY2hlY2tlZDogd2hpdGU7XG59XG5pb24tdG9nZ2xlLnRvZ2dsZS1jaGVja2VkIHtcbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHJnYmEoMjAsIDkwLCAxMjMsIDEpO1xuICBcbiAgICAtLWhhbmRsZS1iYWNrZ3JvdW5kOiAjN2E0OWE1O1xuICAgIC0taGFuZGxlLWJhY2tncm91bmQtY2hlY2tlZDogI2ZmZmZmZjtcbiAgfVxuLmlvbi1jb2xvci1idG5iYWNrY29sb3Ige1xuICAgIC0taW9uLWNvbG9yLWJ0bmJhY2tjb2xvcjojMTQ1YTdiO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1idG5iYWNrY29sb3IpO1xufVxuLmlvbi1jb2xvci13aGl0ZSB7XG4gICAgLS1pb24tY29sb3Itd2hpdGU6I2ZmZmZmZjtcbiAgICAtLWlvbi1jb2xvci1ibGFjazojMTQ1YTdiO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1ibGFjayk7XG59XG4uYmFja0NvbG9ye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuLmRhcmt7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuLmljb24tb3Jhbmdle1xuICAgIGNvbG9yOiAjZDc1NTI1O1xuIH1cbi5maXhlZHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogMTtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5ib3R0b21UYWJze1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3R0b206IDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDAwMDAwMzY7XG4gICAgei1pbmRleDogMTtcbn1cbi53LTk1e1xuICAgIHdpZHRoOiA5NSU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuLnZoMTR7XG4gICAgcGFkZGluZy10b3A6IDE0dmg7XG59XG4ubS1hdXRve1xuICAgIG1hcmdpbjogYXV0bztcbn1cbi5tLTIwe1xuICAgIG1hcmdpbjoyMHB4O1xufVxuLm1iLTB7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuLm1iLTV7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLm1iLTEwe1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4ubWItMTV7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cbi5tYi0yMHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLnAtMHtcbiAgICBwYWRkaW5nOiAwcHggIWltcG9ydGFudDtcbn1cbi5wLTEwe1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG4ucGFkZGluZy02e1xuICAgIHBhZGRpbmc6IDYlICFpbXBvcnRhbnQ7XG59XG4uYmctd2hpdGV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG4uYm9yZGVyLW5vbmV7XG4gICAgYm9yZGVyOm5vbmU7XG4gICAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDA7XG59XG4uYm9yZGVyLWJvdHRvbXtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NlY2FjYTtcbn1cbi5ib3JkZXItY29sb3J7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzE0NWE3Yjtcbn1cbi5iYi0xe1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMjQpO1xufVxuLmJvcmRlci10b3AtbHJ7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDBweCAwcHg7XG59XG4uYm9yZGVyLWJvdHRvbS1scntcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDE1cHggMTVweDtcbn1cbi5iLXJhZGl1c3tcbiAgICBib3JkZXItcmFkaXVzOiAxMnZ3O1xufVxuLmhpZGV7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cbi5zaG93e1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuLnRleHQtY2VudGVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi50ZXh0LXVuZGVybGluZXtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbi5mb250LTEwe1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbn1cbi5mb250LTE0e1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5mb250LTE2e1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5mb250LTIye1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbn1cbi5mb250LTI1e1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbn1cbi5mb250LTI0e1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbn1cbi5mb250LW9yYW5nZXtcbiAgICBjb2xvcjojRDc1NDI2O1xufVxuLmZvbnQtbGFiZWwtY29sb3J7XG4gICAgY29sb3I6ICM2RTZFNkU7XG59XG5cbi5zbS04NXtcbiAgICB3aWR0aDogOTMlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbn0iLCIudm95YUltYWdlIHtcbiAgd2lkdGg6IDU1JTtcbiAgbWFyZ2luOiBhdXRvO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLXRvcDogOHZ3O1xufVxuXG5pb24taW5wdXQge1xuICAtLXBhZGRpbmctdG9wOiAwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmlvbi10b2dnbGUge1xuICAtLWJhY2tncm91bmQtY2hlY2tlZDogcmdiYSgyMCwgOTAsIDEyMywgMSk7XG59XG5cbmlvbi10b2dnbGUudG9nZ2xlLWNoZWNrZWQge1xuICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiByZ2JhKDIwLCA5MCwgMTIzLCAxKTtcbiAgLS1oYW5kbGUtYmFja2dyb3VuZDogIzdhNDlhNTtcbiAgLS1oYW5kbGUtYmFja2dyb3VuZC1jaGVja2VkOiAjZmZmZmZmO1xufVxuXG4uaW9uLWNvbG9yLWJ0bmJhY2tjb2xvciB7XG4gIC0taW9uLWNvbG9yLWJ0bmJhY2tjb2xvcjojMTQ1YTdiO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItYnRuYmFja2NvbG9yKTtcbn1cblxuLmlvbi1jb2xvci13aGl0ZSB7XG4gIC0taW9uLWNvbG9yLXdoaXRlOiNmZmZmZmY7XG4gIC0taW9uLWNvbG9yLWJsYWNrOiMxNDVhN2I7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci13aGl0ZSk7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItYmxhY2spO1xufVxuXG4uYmFja0NvbG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZGFyayB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuLmljb24tb3JhbmdlIHtcbiAgY29sb3I6ICNkNzU1MjU7XG59XG5cbi5maXhlZCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgei1pbmRleDogMTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5ib3R0b21UYWJzIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgYm90dG9tOiAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjMDAwMDAwMzY7XG4gIHotaW5kZXg6IDE7XG59XG5cbi53LTk1IHtcbiAgd2lkdGg6IDk1JTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnZoMTQge1xuICBwYWRkaW5nLXRvcDogMTR2aDtcbn1cblxuLm0tYXV0byB7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLm0tMjAge1xuICBtYXJnaW46IDIwcHg7XG59XG5cbi5tYi0wIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG4ubWItNSB7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLm1iLTEwIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLm1iLTE1IHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLm1iLTIwIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnAtMCB7XG4gIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuXG4ucC0xMCB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5wYWRkaW5nLTYge1xuICBwYWRkaW5nOiA2JSAhaW1wb3J0YW50O1xufVxuXG4uYmctd2hpdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmJvcmRlci1ub25lIHtcbiAgYm9yZGVyOiBub25lO1xuICAtLWlubmVyLWJvcmRlci13aWR0aDogMDtcbn1cblxuLmJvcmRlci1ib3R0b20ge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NlY2FjYTtcbn1cblxuLmJvcmRlci1jb2xvciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxNDVhN2I7XG59XG5cbi5iYi0xIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yNCk7XG59XG5cbi5ib3JkZXItdG9wLWxyIHtcbiAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDBweCAwcHg7XG59XG5cbi5ib3JkZXItYm90dG9tLWxyIHtcbiAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxNXB4IDE1cHg7XG59XG5cbi5iLXJhZGl1cyB7XG4gIGJvcmRlci1yYWRpdXM6IDEydnc7XG59XG5cbi5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLnNob3cge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnRleHQtY2VudGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udGV4dC11bmRlcmxpbmUge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmZvbnQtMTAge1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5mb250LTE0IHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uZm9udC0xNiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmZvbnQtMjIge1xuICBmb250LXNpemU6IDIycHg7XG59XG5cbi5mb250LTI1IHtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4uZm9udC0yNCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLmZvbnQtb3JhbmdlIHtcbiAgY29sb3I6ICNENzU0MjY7XG59XG5cbi5mb250LWxhYmVsLWNvbG9yIHtcbiAgY29sb3I6ICM2RTZFNkU7XG59XG5cbi5zbS04NSB7XG4gIHdpZHRoOiA5MyU7XG4gIG1hcmdpbjogYXV0bztcbiAgcGFkZGluZzogMHB4O1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xufSJdfQ== */");

/***/ }),

/***/ "zLbs":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/features/accountpreferences/accountpreferences-routing.module.ts ***!
  \******************************************************************************************/
/*! exports provided: AccountpreferencesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountpreferencesPageRoutingModule", function() { return AccountpreferencesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _accountpreferences_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./accountpreferences.page */ "018v");




const routes = [
    {
        path: '',
        component: _accountpreferences_page__WEBPACK_IMPORTED_MODULE_3__["AccountpreferencesPage"]
    }
];
let AccountpreferencesPageRoutingModule = class AccountpreferencesPageRoutingModule {
};
AccountpreferencesPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AccountpreferencesPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=modules-features-accountpreferences-accountpreferences-module-es2015.js.map