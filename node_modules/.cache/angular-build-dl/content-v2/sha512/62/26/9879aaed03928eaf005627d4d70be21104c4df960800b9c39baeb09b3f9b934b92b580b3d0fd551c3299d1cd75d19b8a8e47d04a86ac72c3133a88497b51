(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modules-features-accountpreferences-accountpreferences-module~modules-features-balance-balan~b5e48dde"],{

/***/ "65YB":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/component/navbar/navbar.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"v-mobile-navigation-container__wrapper\">\n  <v-mobile-navigation-container logoHref=\"/vds\"\n    logoSrc=\"https://purepng.com/public/uploads/large/purepng.com-voya-financial-logologobrand-logoiconslogos-251519938224xbtfv.png\">\n    <v-drilldown-menu class=\"\">\n      <v-drilldown-menu-page staticSearch id=\"main\" level=\"0\" searchResult=\"{}\" searchLink=\"/\">\n        <v-drilldown-menu-button to=\"retirement-accounts\">\n          My Retirement Accounts\n        </v-drilldown-menu-button>\n        <v-drilldown-menu-button to=\"financial-wellness\">\n          Financial Wellness\n        </v-drilldown-menu-button>\n        <v-drilldown-menu-button>\n          Get Professional Advice\n        </v-drilldown-menu-button>\n        <v-drilldown-menu-button (click)=\"newBrowser()\">My Profile</v-drilldown-menu-button>\n        <v-drilldown-menu-button>My Messages\n        </v-drilldown-menu-button>\n\n        <div slot=\"popularLinks\">\n          Popular Pages:\n          <span style=\"text-decoration:underline;color:#145A7B;\">Beneficiaries</span><span>&nbsp; ,&nbsp;\n          </span><span style=\"text-decoration:underline;color:#145A7B;\">Getting Your Money</span><span>&nbsp;\n            ,&nbsp;\n          </span><span style=\"text-decoration:underline;color:#145A7B;\">Forgot PIN</span><span>&nbsp; ,&nbsp;\n          </span><span style=\"text-decoration:underline;color:#145A7B;\">Get Investment Advice</span>\n        </div>\n      </v-drilldown-menu-page>\n\n      <v-drilldown-menu-page breadcrumbText=\"My Retirement Accounts\" from=\"main\" id=\"retirement-accounts\" level=\"1\"\n        title=\"My Retirement Accounts\" blockTitleTranslation blockBreadcrumbTranslation>\n        <v-drilldown-menu-button (click)=\"withinApp()\">\n          My Employer 401k Account (In App Browser)\n        </v-drilldown-menu-button>\n        <v-drilldown-menu-button>\n          Employer Savings Account\n        </v-drilldown-menu-button>\n        <v-drilldown-menu-button>\n          YRC Savings Account\n        </v-drilldown-menu-button>\n        <v-drilldown-menu-button>\n          Non Qualified Savings Plan\n        </v-drilldown-menu-button>\n        <v-drilldown-menu-button (click)=\"tabedBalance()\">\n         Balances\n        </v-drilldown-menu-button>\n      </v-drilldown-menu-page>\n\n      <v-drilldown-menu-page breadcrumbText=\"Main Menu\" from=\"main\" id=\"financial-wellness\" level=\"1\"\n        title=\"Financial Wellness\">\n        <v-drilldown-menu-link href=\"/\">\n          My Resource Center\n        </v-drilldown-menu-link>\n        <v-drilldown-menu-link href=\"/\">\n          Financial Wellness Assessment\n        </v-drilldown-menu-link>\n        <v-drilldown-menu-link href=\"/\">\n          Life Stage Guidance\n        </v-drilldown-menu-link>\n        <v-drilldown-menu-link href=\"/\">\n          Calculators & Tools\n        </v-drilldown-menu-link>\n        <v-drilldown-menu-link href=\"/\">\n          Personal Finance Management\n        </v-drilldown-menu-link>\n      </v-drilldown-menu-page>\n      <v-mobile-navigation-footer class=\"bgwhite\">\n        <v-icon linkButton name=\"commentdots\"> Contact US </v-icon>\n        <v-icon linkButton name=\"globeamericas\"> Ver en Español </v-icon>\n        <v-icon linkButton name=\"profile\"> Sign Out </v-icon>\n      </v-mobile-navigation-footer>\n    </v-drilldown-menu>\n\n    \n  </v-mobile-navigation-container>\n</div>");

/***/ }),

/***/ "89L0":
/*!*********************************************************************!*\
  !*** ./src/app/modules/shared/component/navbar/navbar.component.ts ***!
  \*********************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./navbar.component.html */ "65YB");
/* harmony import */ var _navbar_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navbar.component.scss */ "ywv1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");







const { Network } = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"];
const { Browser } = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"];
let NavbarComponent = class NavbarComponent {
    constructor(cookieService, router) {
        this.cookieService = cookieService;
        this.router = router;
        Browser.addListener(`browserPageLoaded`, () => {
            console.log('browser event called');
        });
        Browser.addListener(`browserFinished`, () => {
            console.log('browser event finished');
        });
        Browser.prefetch({
            urls: ['https://www.voya.com']
        });
    }
    ngOnInit() { }
    newBrowser() {
        window.open('https://voya.com', '_system', 'location=yes');
        let currentTab = this.cookieService.get("currentTab");
        this.router.navigateByUrl(currentTab);
    }
    withinApp() {
        Browser.open({
            url: "https://www.voya.com",
            windowName: "_system"
        });
        let currentTab = this.cookieService.get("currentTab");
        this.router.navigateByUrl(currentTab);
    }
    tabedHome() {
        this.router.navigateByUrl("/home");
    }
    tabedBalance() {
        this.router.navigateByUrl("balance");
    }
};
NavbarComponent.ctorParameters = () => [
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
NavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-navbar',
        template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_navbar_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NavbarComponent);



/***/ }),

/***/ "SXpp":
/*!***********************************************************************!*\
  !*** ./src/app/modules/shared/component/footer/footer.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".voyaImage {\n  width: 55%;\n  margin: auto;\n  display: block;\n  margin-top: 8vw;\n}\n\nion-input {\n  --padding-top: 0px;\n  --padding-end: 0px;\n  --padding-bottom: 0px;\n  color: black;\n}\n\nion-toggle {\n  --background-checked: rgba(20, 90, 123, 1);\n}\n\nion-toggle.toggle-checked {\n  --background: #ffffff;\n  --background-checked: rgba(20, 90, 123, 1);\n  --handle-background: #7a49a5;\n  --handle-background-checked: #ffffff;\n}\n\n.ion-color-btnbackcolor {\n  --ion-color-btnbackcolor:#145a7b;\n  background: var(--ion-color-btnbackcolor);\n}\n\n.ion-color-white {\n  --ion-color-white:#ffffff;\n  --ion-color-black:#145a7b;\n  background: var(--ion-color-white);\n  color: var(--ion-color-black);\n}\n\n.backColor {\n  background-color: #f2f2f2;\n  height: 100%;\n}\n\n.dark {\n  color: black;\n}\n\n.icon-orange {\n  color: #d75525;\n}\n\n.fixed {\n  position: fixed;\n  z-index: 1;\n  width: 100%;\n}\n\n.bottomTabs {\n  position: fixed;\n  width: 100%;\n  bottom: 0px;\n  background-color: #f5f5f5;\n  border-top: 1px solid #00000036;\n  z-index: 1;\n}\n\n.w-95 {\n  width: 95%;\n  display: block;\n  margin: auto;\n}\n\n.vh14 {\n  padding-top: 14vh;\n}\n\n.m-auto {\n  margin: auto;\n}\n\n.m-20 {\n  margin: 20px;\n}\n\n.mb-0 {\n  margin-bottom: 0px;\n}\n\n.mb-5 {\n  margin-bottom: 5px;\n}\n\n.mb-10 {\n  margin-bottom: 10px;\n}\n\n.mb-15 {\n  margin-bottom: 15px;\n}\n\n.mb-20 {\n  margin-bottom: 20px;\n}\n\n.p-0 {\n  padding: 0px !important;\n}\n\n.p-10 {\n  padding: 10px;\n}\n\n.padding-6 {\n  padding: 6% !important;\n}\n\n.bg-white {\n  background-color: white;\n}\n\n.border-none {\n  border: none;\n  --inner-border-width: 0;\n}\n\n.border-bottom {\n  border-bottom: 1px solid #cecaca;\n}\n\n.border-color {\n  border: 1px solid #145a7b;\n}\n\n.bb-1 {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.24);\n}\n\n.border-top-lr {\n  border-radius: 15px 15px 0px 0px;\n}\n\n.border-bottom-lr {\n  border-radius: 0px 0px 15px 15px;\n}\n\n.b-radius {\n  border-radius: 12vw;\n}\n\n.hide {\n  display: none;\n}\n\n.show {\n  display: block;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-underline {\n  text-decoration: underline;\n}\n\n.font-10 {\n  font-size: 10px;\n}\n\n.font-14 {\n  font-size: 14px;\n}\n\n.font-16 {\n  font-size: 16px;\n}\n\n.font-22 {\n  font-size: 22px;\n}\n\n.font-25 {\n  font-size: 25px;\n}\n\n.font-24 {\n  font-size: 24px;\n}\n\n.font-orange {\n  color: #D75426;\n}\n\n.font-label-color {\n  color: #6E6E6E;\n}\n\n.sm-85 {\n  width: 93%;\n  margin: auto;\n  padding: 0px;\n  border-radius: 15px;\n}\n\n.w-60 {\n  width: 45%;\n}\n\n.mb-0 {\n  margin-bottom: 0px;\n}\n\n.font-12 {\n  font-size: 12px;\n}\n\n.tabActive {\n  border-top: 5px solid #d95525;\n  border-radius: 7px 8px 3px 37px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy90aGVtZS9jdXN0b20uc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNDSjs7QURDQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUNFSjs7QURDQTtFQUVJLDBDQUFBO0FDQ0o7O0FESUE7RUFDSSxxQkFBQTtFQUNBLDBDQUFBO0VBRUEsNEJBQUE7RUFDQSxvQ0FBQTtBQ0ZKOztBRElBO0VBQ0ksZ0NBQUE7RUFDQSx5Q0FBQTtBQ0RKOztBREdBO0VBQ0kseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtDQUFBO0VBQ0EsNkJBQUE7QUNBSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBRENBO0VBQ0ksWUFBQTtBQ0VKOztBREFBO0VBQ0ksY0FBQTtBQ0dKOztBRERBO0VBQ0ksZUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDSUo7O0FERkE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLCtCQUFBO0VBQ0EsVUFBQTtBQ0tKOztBREhBO0VBQ0ksVUFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDTUo7O0FESkE7RUFDSSxpQkFBQTtBQ09KOztBRExBO0VBQ0ksWUFBQTtBQ1FKOztBRE5BO0VBQ0ksWUFBQTtBQ1NKOztBRFBBO0VBQ0ksa0JBQUE7QUNVSjs7QURSQTtFQUNJLGtCQUFBO0FDV0o7O0FEVEE7RUFDSSxtQkFBQTtBQ1lKOztBRFZBO0VBQ0ksbUJBQUE7QUNhSjs7QURYQTtFQUNJLG1CQUFBO0FDY0o7O0FEWkE7RUFDSSx1QkFBQTtBQ2VKOztBRGJBO0VBQ0ksYUFBQTtBQ2dCSjs7QURkQTtFQUNJLHNCQUFBO0FDaUJKOztBRGZBO0VBQ0ksdUJBQUE7QUNrQko7O0FEaEJBO0VBQ0ksWUFBQTtFQUNBLHVCQUFBO0FDbUJKOztBRGpCQTtFQUNJLGdDQUFBO0FDb0JKOztBRGxCQTtFQUNJLHlCQUFBO0FDcUJKOztBRG5CQTtFQUNJLDRDQUFBO0FDc0JKOztBRHBCQTtFQUNJLGdDQUFBO0FDdUJKOztBRHJCQTtFQUNJLGdDQUFBO0FDd0JKOztBRHRCQTtFQUNJLG1CQUFBO0FDeUJKOztBRHZCQTtFQUNJLGFBQUE7QUMwQko7O0FEeEJBO0VBQ0ksY0FBQTtBQzJCSjs7QUR6QkE7RUFDSSxrQkFBQTtBQzRCSjs7QUQxQkE7RUFDSSwwQkFBQTtBQzZCSjs7QUQzQkE7RUFDSSxlQUFBO0FDOEJKOztBRDVCQTtFQUNJLGVBQUE7QUMrQko7O0FEN0JBO0VBQ0ksZUFBQTtBQ2dDSjs7QUQ5QkE7RUFDSSxlQUFBO0FDaUNKOztBRC9CQTtFQUNJLGVBQUE7QUNrQ0o7O0FEaENBO0VBQ0ksZUFBQTtBQ21DSjs7QURqQ0E7RUFDSSxjQUFBO0FDb0NKOztBRGxDQTtFQUNJLGNBQUE7QUNxQ0o7O0FEbENBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNxQ0o7O0FBeE1BO0VBQ0ksVUFBQTtBQTJNSjs7QUF6TUE7RUFDSSxrQkFBQTtBQTRNSjs7QUExTUE7RUFDSSxlQUFBO0FBNk1KOztBQTFNQTtFQUNJLDZCQUFBO0VBQ0EsK0JBQUE7QUE2TUoiLCJmaWxlIjoiZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZveWFJbWFnZXtcbiAgICB3aWR0aDogNTUlO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tdG9wOiA4dnc7XG59XG5pb24taW5wdXR7XG4gICAgLS1wYWRkaW5nLXRvcDogMHB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgY29sb3I6YmxhY2s7XG59XG5cbmlvbi10b2dnbGUge1xuICAgIC8vIC0tYmFja2dyb3VuZDogcmdiYSgyMCwgOTAsIDEyMywgMSk7XG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHJnYmEoMjAsIDkwLCAxMjMsIDEpO1xuICBcbiAgICAvLyAtLWhhbmRsZS1iYWNrZ3JvdW5kOiByZ2JhKDIwLCA5MCwgMTIzLCAxKTtcbiAgICAvLyAtLWhhbmRsZS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHdoaXRlO1xufVxuaW9uLXRvZ2dsZS50b2dnbGUtY2hlY2tlZCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiByZ2JhKDIwLCA5MCwgMTIzLCAxKTtcbiAgXG4gICAgLS1oYW5kbGUtYmFja2dyb3VuZDogIzdhNDlhNTtcbiAgICAtLWhhbmRsZS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNmZmZmZmY7XG4gIH1cbi5pb24tY29sb3ItYnRuYmFja2NvbG9yIHtcbiAgICAtLWlvbi1jb2xvci1idG5iYWNrY29sb3I6IzE0NWE3YjtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItYnRuYmFja2NvbG9yKTtcbn1cbi5pb24tY29sb3Itd2hpdGUge1xuICAgIC0taW9uLWNvbG9yLXdoaXRlOiNmZmZmZmY7XG4gICAgLS1pb24tY29sb3ItYmxhY2s6IzE0NWE3YjtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itd2hpdGUpO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItYmxhY2spO1xufVxuLmJhY2tDb2xvcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICAgIGhlaWdodDogMTAwJTtcbn1cbi5kYXJre1xuICAgIGNvbG9yOiBibGFjaztcbn1cbi5pY29uLW9yYW5nZXtcbiAgICBjb2xvcjogI2Q3NTUyNTtcbiB9XG4uZml4ZWR7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDE7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uYm90dG9tVGFic3tcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm90dG9tOiAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzAwMDAwMDM2O1xuICAgIHotaW5kZXg6IDE7XG59XG4udy05NXtcbiAgICB3aWR0aDogOTUlO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbjogYXV0bztcbn1cbi52aDE0e1xuICAgIHBhZGRpbmctdG9wOiAxNHZoO1xufVxuLm0tYXV0b3tcbiAgICBtYXJnaW46IGF1dG87XG59XG4ubS0yMHtcbiAgICBtYXJnaW46MjBweDtcbn1cbi5tYi0we1xuICAgIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi5tYi01e1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbn1cbi5tYi0xMHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLm1iLTE1e1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4ubWItMjB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5wLTB7XG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG4ucC0xMHtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuLnBhZGRpbmctNntcbiAgICBwYWRkaW5nOiA2JSAhaW1wb3J0YW50O1xufVxuLmJnLXdoaXRle1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuLmJvcmRlci1ub25le1xuICAgIGJvcmRlcjpub25lO1xuICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwO1xufVxuLmJvcmRlci1ib3R0b217XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjZWNhY2E7XG59XG4uYm9yZGVyLWNvbG9ye1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxNDVhN2I7XG59XG4uYmItMXtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjI0KTtcbn1cbi5ib3JkZXItdG9wLWxye1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAwcHggMHB4O1xufVxuLmJvcmRlci1ib3R0b20tbHJ7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4IDBweCAxNXB4IDE1cHg7XG59XG4uYi1yYWRpdXN7XG4gICAgYm9yZGVyLXJhZGl1czogMTJ2dztcbn1cbi5oaWRle1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG4uc2hvd3tcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbi50ZXh0LWNlbnRlcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udGV4dC11bmRlcmxpbmV7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG4uZm9udC0xMHtcbiAgICBmb250LXNpemU6IDEwcHg7XG59XG4uZm9udC0xNHtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG4uZm9udC0xNntcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG4uZm9udC0yMntcbiAgICBmb250LXNpemU6IDIycHg7XG59XG4uZm9udC0yNXtcbiAgICBmb250LXNpemU6IDI1cHg7XG59XG4uZm9udC0yNHtcbiAgICBmb250LXNpemU6IDI0cHg7XG59XG4uZm9udC1vcmFuZ2V7XG4gICAgY29sb3I6I0Q3NTQyNjtcbn1cbi5mb250LWxhYmVsLWNvbG9ye1xuICAgIGNvbG9yOiAjNkU2RTZFO1xufVxuXG4uc20tODV7XG4gICAgd2lkdGg6IDkzJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZzogMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59IiwiQGltcG9ydCAnLi4vLi4vLi4vLi4vLi4vc3R5bGVzL3RoZW1lL2N1c3RvbS5zY3NzJztcbi53LTYwe1xuICAgIHdpZHRoOiA0NSU7XG59XG4ubWItMHtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG4uZm9udC0xMntcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbi50YWJBY3RpdmV7XG4gICAgYm9yZGVyLXRvcDogNXB4IHNvbGlkICNkOTU1MjU7XG4gICAgYm9yZGVyLXJhZGl1czogN3B4IDhweCAzcHggMzdweDtcbn0iXX0= */");

/***/ }),

/***/ "fHDH":
/*!*********************************************************************!*\
  !*** ./src/app/modules/shared/component/footer/footer.component.ts ***!
  \*********************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "tJUC");
/* harmony import */ var _footer_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.component.scss */ "SXpp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let FooterComponent = class FooterComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
        this.pageRoute('/balance');
    }
    pageRoute(str) {
        // const homeDOM = document.getElementById('home');
        // homeDOM.style.borderTop ="none";
        // homeDOM.style.borderRadius ="none";
        // const balanceDOM = document.getElementById('balance');
        // balanceDOM.style.borderTop ="none";
        // balanceDOM.style.borderRadius ="none";
        // const contributionsDOM = document.getElementById('contributions');
        // contributionsDOM.style.borderTop ="none";
        // contributionsDOM.style.borderRadius ="none";
        // const investmentsDOM = document.getElementById('investments');
        // investmentsDOM.style.borderTop ="none";
        // investmentsDOM.style.borderRadius ="none";
        // const strDOM = document.getElementById(str);
        // strDOM.style.borderTop ="5px solid #d95525";
        // strDOM.style.borderRadius ="7px 8px 3px 37px";
        if (str === 'home') {
            this.router.navigateByUrl('/home');
        }
        else if (str === 'balance') {
            this.router.navigateByUrl('/balance');
        }
        else if (str === 'contributions') {
            this.router.navigateByUrl('/balance');
        }
        else if (str === 'investments') {
            this.router.navigateByUrl('/balance');
        }
    }
};
FooterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-footer',
        template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_footer_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FooterComponent);



/***/ }),

/***/ "tJUC":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/component/footer/footer.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-row class=\"ion-text-center font-12 bottomTabs\">\n  <ion-col id=\"home\">\n    <img class=\"w-60\" (click)=\"pageRoute('home')\" src=\"../../../assets/icon/u735.png\"/>\n    <p class=\"mb-0\">Home</p>\n  </ion-col>\n  <ion-col id=\"balance\">\n    <img class=\"w-60\" (click)=\"pageRoute('balance')\" src=\"../../../assets/icon/u746.png\"/>\n    <p class=\"mb-0\">Balances</p>\n  </ion-col>\n  <ion-col id=\"contributions\">\n    <img class=\"w-60\" (click)=\"pageRoute('contributions')\" src=\"../../../assets/icon/u759.png\"/>\n    <p class=\"mb-0\">Contributions</p>\n  </ion-col>\n  <ion-col id=\"investments\">\n    <img class=\"w-60\" (click)=\"pageRoute('investments')\" src=\"../../../assets/icon/u770.png\"/>\n    <p class=\"mb-0\">Investments</p>\n  </ion-col>\n</ion-row>");

/***/ }),

/***/ "ywv1":
/*!***********************************************************************!*\
  !*** ./src/app/modules/shared/component/navbar/navbar.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bgwhite {\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHVCQUFBO0FBQ0oiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnd2hpdGV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59Il19 */");

/***/ })

}]);
//# sourceMappingURL=default~modules-features-accountpreferences-accountpreferences-module~modules-features-balance-balan~b5e48dde-es2015.js.map