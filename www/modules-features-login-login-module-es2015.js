(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-features-login-login-module"],{

/***/ "2zG1":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/features/login/login.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content color=\"bgcolor\">\n  <div class=\"backColor\">\n    <ion-row>\n      <ion-col class=\"mb-15\">\n        <img class=\"voyaImage\"\n          src=\"https://purepng.com/public/uploads/large/purepng.com-voya-financial-logologobrand-logoiconslogos-251519938224xbtfv.png\" />\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"mb-20\">\n      <ion-col>\n\n        <ion-list class=\"sm-85\">\n          \n          <ion-grid class=\"border-bottom\">\n            <ion-row>\n              <ion-col size=\"1\"></ion-col>\n              <ion-col size=\"11\">\n                <p class=\"mb-5 font-16 font-label-color\">Username</p>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col size=\"1\"></ion-col>\n                <ion-col size=\"9\">\n                  <ion-input class=\"p-0 font-16\" id=\"username\" [(ngModel)]=\"username\" type=\"text\"></ion-input>\n                </ion-col>\n              <ion-col size=\"2\">\n              </ion-col>\n            </ion-row>\n            \n          </ion-grid>\n\n          <ion-grid>\n            <ion-row>\n              <ion-col size=\"1\"></ion-col>\n              <ion-col size=\"11\">\n                <p class=\"mb-5 font-16 font-label-color\">Password</p>\n              </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col size=\"1\"></ion-col>\n                <ion-col size=\"9\">\n                  <ion-input class=\"p-0 font-16\" id=\"password\" [(ngModel)]=\"password\" type=\"password\"></ion-input>\n                </ion-col>\n                <ion-col size=\"2\" class=\"m-auto \">\n                  <ion-icon id=\"hide\" name=\"eye-sharp\" class=\"hide font-22 icon-orange\" (click)=\"togglePassword('hide')\"></ion-icon>\n                  <ion-icon id=\"show\" name=\"eye-off\" class=\"show font-22 icon-orange\" (click)=\"togglePassword('show')\"></ion-icon>\n                </ion-col>\n            </ion-row>\n            \n          </ion-grid>\n\n         \n        </ion-list>\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row class=\"m-auto sm-85 m-20 dark\">\n\n      <ion-col size=\"6\">\n        <ion-row  size=\"12\">\n          <ion-col size=\"4\" class=\"p-0 m-auto\">\n            <ion-toggle></ion-toggle>\n          </ion-col>\n          <ion-col size=\"8\" class=\"p-0 m-auto\">\n            <span class=\"font-14\">Remember Me</span>\n          </ion-col>\n\n        </ion-row>\n      </ion-col>\n      <!-- <ion-col>\n        <ion-toggle color=\"primary\"></ion-toggle><span></span>\n      </ion-col> -->\n\n      <ion-col size=\"6\">\n        <ion-row  size=\"12\">\n          <ion-col size=\"4\" class=\"p-0 m-auto\">\n            <ion-toggle [(ngModel)]=\"completed\" (ionChange)=\"updateItem($event)\" checked=\"false\"></ion-toggle>\n          </ion-col>\n          <ion-col size=\"8\" class=\"p-0 m-auto\">\n            <span class=\"font-14\">Touch/Face ID</span>\n          </ion-col>\n\n        </ion-row>\n      </ion-col>\n\n    </ion-row>\n\n\n \n\n\n    <ion-row class=\"m-auto m-20\">\n      <ion-col size=\"2\">\n        <!-- <ion-button expand=\"block\">Block Button</ion-button> -->\n      </ion-col>\n      <ion-col size=\"8\">\n        <ion-button shape=\"round\" (click)=\"openPage()\" color=\"btncolor\" expand=\"block\">Login</ion-button>\n      </ion-col>\n      <ion-col size=\"2\">\n        <!-- <ion-button expand=\"block\">Block Button</ion-button> -->\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row class=\"dark\">\n      <ion-col ><p class=\"text-center\"><a class=\"text-underline\">Forgot Username/Password?</a></p></ion-col>\n    </ion-row>\n\n    <ion-row class=\"sm-85 dark\">\n      <ion-col size=\"6\" class=\"m-auto\"><p class=\"text-center mb-0\">First time user?</p></ion-col>\n      <ion-col size=\"6\">\n        <ion-button (click)=\"removeData()\" color=\"btncolortemp\" shape=\"round\" class=\"b-radius border-color\" expand=\"block\">Register</ion-button>\n      </ion-col>\n    </ion-row>\n\n    <div class=\"font-10 m-20 dark\">\n      <p class=\"m-auto\"> Version 4.12</p>\n      <p class=\"m-auto\">© 2019, Voya All Rights Reserved.</p>\n      <p class=\"m-auto\">Voya and Voya logo are registered trademarks of Voya Services Company</p>\n    </div>\n\n\n  </div>\n</ion-content>");

/***/ }),

/***/ "HK/w":
/*!*************************************************************!*\
  !*** ./src/app/modules/features/login/login.component.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".voyaImage {\n  width: 55%;\n  margin: auto;\n  display: block;\n  margin-top: 8vw;\n}\n\nion-input {\n  --padding-top: 0px;\n  --padding-end: 0px;\n  --padding-bottom: 0px;\n  color: black;\n}\n\nion-toggle {\n  --background-checked: rgba(20, 90, 123, 1);\n}\n\nion-toggle.toggle-checked {\n  --background: #ffffff;\n  --background-checked: rgba(20, 90, 123, 1);\n  --handle-background: #7a49a5;\n  --handle-background-checked: #ffffff;\n}\n\n.ion-color-btnbackcolor {\n  --ion-color-btnbackcolor:#145a7b;\n  background: var(--ion-color-btnbackcolor);\n}\n\n.ion-color-white {\n  --ion-color-white:#ffffff;\n  --ion-color-black:#145a7b;\n  background: var(--ion-color-white);\n  color: var(--ion-color-black);\n}\n\n.backColor {\n  background-color: #f2f2f2;\n  height: 100%;\n}\n\n.dark {\n  color: black;\n}\n\n.icon-orange {\n  color: #d75525;\n}\n\n.fixed {\n  position: fixed;\n  z-index: 1;\n  width: 100%;\n}\n\n.bottomTabs {\n  position: fixed;\n  width: 100%;\n  bottom: 0px;\n  background-color: #f5f5f5;\n  border-top: 1px solid #00000036;\n  z-index: 1;\n}\n\n.w-95 {\n  width: 95%;\n  display: block;\n  margin: auto;\n}\n\n.vh14 {\n  padding-top: 14vh;\n}\n\n.m-auto {\n  margin: auto;\n}\n\n.m-20 {\n  margin: 20px;\n}\n\n.mb-0 {\n  margin-bottom: 0px;\n}\n\n.mb-5 {\n  margin-bottom: 5px;\n}\n\n.mb-10 {\n  margin-bottom: 10px;\n}\n\n.mb-15 {\n  margin-bottom: 15px;\n}\n\n.mb-20 {\n  margin-bottom: 20px;\n}\n\n.p-0 {\n  padding: 0px !important;\n}\n\n.p-10 {\n  padding: 10px;\n}\n\n.padding-6 {\n  padding: 6% !important;\n}\n\n.bg-white {\n  background-color: white;\n}\n\n.border-none {\n  border: none;\n  --inner-border-width: 0;\n}\n\n.border-bottom {\n  border-bottom: 1px solid #cecaca;\n}\n\n.border-color {\n  border: 1px solid #145a7b;\n}\n\n.bb-1 {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.24);\n}\n\n.border-top-lr {\n  border-radius: 15px 15px 0px 0px;\n}\n\n.border-bottom-lr {\n  border-radius: 0px 0px 15px 15px;\n}\n\n.b-radius {\n  border-radius: 12vw;\n}\n\n.hide {\n  display: none;\n}\n\n.show {\n  display: block;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-underline {\n  text-decoration: underline;\n}\n\n.font-10 {\n  font-size: 10px;\n}\n\n.font-14 {\n  font-size: 14px;\n}\n\n.font-16 {\n  font-size: 16px;\n}\n\n.font-22 {\n  font-size: 22px;\n}\n\n.font-25 {\n  font-size: 25px;\n}\n\n.font-24 {\n  font-size: 24px;\n}\n\n.font-orange {\n  color: #D75426;\n}\n\n.font-label-color {\n  color: #6E6E6E;\n}\n\n.sm-85 {\n  width: 93%;\n  margin: auto;\n  padding: 0px;\n  border-radius: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3N0eWxlcy90aGVtZS9jdXN0b20uc2NzcyIsIi4uLy4uLy4uLy4uLy4uL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0NKOztBRENBO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQ0VKOztBRENBO0VBRUksMENBQUE7QUNDSjs7QURJQTtFQUNJLHFCQUFBO0VBQ0EsMENBQUE7RUFFQSw0QkFBQTtFQUNBLG9DQUFBO0FDRko7O0FESUE7RUFDSSxnQ0FBQTtFQUNBLHlDQUFBO0FDREo7O0FER0E7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0NBQUE7RUFDQSw2QkFBQTtBQ0FKOztBREVBO0VBQ0kseUJBQUE7RUFDQSxZQUFBO0FDQ0o7O0FEQ0E7RUFDSSxZQUFBO0FDRUo7O0FEQUE7RUFDSSxjQUFBO0FDR0o7O0FEREE7RUFDSSxlQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNJSjs7QURGQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxVQUFBO0FDS0o7O0FESEE7RUFDSSxVQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNNSjs7QURKQTtFQUNJLGlCQUFBO0FDT0o7O0FETEE7RUFDSSxZQUFBO0FDUUo7O0FETkE7RUFDSSxZQUFBO0FDU0o7O0FEUEE7RUFDSSxrQkFBQTtBQ1VKOztBRFJBO0VBQ0ksa0JBQUE7QUNXSjs7QURUQTtFQUNJLG1CQUFBO0FDWUo7O0FEVkE7RUFDSSxtQkFBQTtBQ2FKOztBRFhBO0VBQ0ksbUJBQUE7QUNjSjs7QURaQTtFQUNJLHVCQUFBO0FDZUo7O0FEYkE7RUFDSSxhQUFBO0FDZ0JKOztBRGRBO0VBQ0ksc0JBQUE7QUNpQko7O0FEZkE7RUFDSSx1QkFBQTtBQ2tCSjs7QURoQkE7RUFDSSxZQUFBO0VBQ0EsdUJBQUE7QUNtQko7O0FEakJBO0VBQ0ksZ0NBQUE7QUNvQko7O0FEbEJBO0VBQ0kseUJBQUE7QUNxQko7O0FEbkJBO0VBQ0ksNENBQUE7QUNzQko7O0FEcEJBO0VBQ0ksZ0NBQUE7QUN1Qko7O0FEckJBO0VBQ0ksZ0NBQUE7QUN3Qko7O0FEdEJBO0VBQ0ksbUJBQUE7QUN5Qko7O0FEdkJBO0VBQ0ksYUFBQTtBQzBCSjs7QUR4QkE7RUFDSSxjQUFBO0FDMkJKOztBRHpCQTtFQUNJLGtCQUFBO0FDNEJKOztBRDFCQTtFQUNJLDBCQUFBO0FDNkJKOztBRDNCQTtFQUNJLGVBQUE7QUM4Qko7O0FENUJBO0VBQ0ksZUFBQTtBQytCSjs7QUQ3QkE7RUFDSSxlQUFBO0FDZ0NKOztBRDlCQTtFQUNJLGVBQUE7QUNpQ0o7O0FEL0JBO0VBQ0ksZUFBQTtBQ2tDSjs7QURoQ0E7RUFDSSxlQUFBO0FDbUNKOztBRGpDQTtFQUNJLGNBQUE7QUNvQ0o7O0FEbENBO0VBQ0ksY0FBQTtBQ3FDSjs7QURsQ0E7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ3FDSiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi52b3lhSW1hZ2V7XG4gICAgd2lkdGg6IDU1JTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLXRvcDogOHZ3O1xufVxuaW9uLWlucHV0e1xuICAgIC0tcGFkZGluZy10b3A6IDBweDtcbiAgICAtLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgLS1wYWRkaW5nLWJvdHRvbTogMHB4O1xuICAgIGNvbG9yOmJsYWNrO1xufVxuXG5pb24tdG9nZ2xlIHtcbiAgICAvLyAtLWJhY2tncm91bmQ6IHJnYmEoMjAsIDkwLCAxMjMsIDEpO1xuICAgIC0tYmFja2dyb3VuZC1jaGVja2VkOiByZ2JhKDIwLCA5MCwgMTIzLCAxKTtcbiAgXG4gICAgLy8gLS1oYW5kbGUtYmFja2dyb3VuZDogcmdiYSgyMCwgOTAsIDEyMywgMSk7XG4gICAgLy8gLS1oYW5kbGUtYmFja2dyb3VuZC1jaGVja2VkOiB3aGl0ZTtcbn1cbmlvbi10b2dnbGUudG9nZ2xlLWNoZWNrZWQge1xuICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAtLWJhY2tncm91bmQtY2hlY2tlZDogcmdiYSgyMCwgOTAsIDEyMywgMSk7XG4gIFxuICAgIC0taGFuZGxlLWJhY2tncm91bmQ6ICM3YTQ5YTU7XG4gICAgLS1oYW5kbGUtYmFja2dyb3VuZC1jaGVja2VkOiAjZmZmZmZmO1xuICB9XG4uaW9uLWNvbG9yLWJ0bmJhY2tjb2xvciB7XG4gICAgLS1pb24tY29sb3ItYnRuYmFja2NvbG9yOiMxNDVhN2I7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWJ0bmJhY2tjb2xvcik7XG59XG4uaW9uLWNvbG9yLXdoaXRlIHtcbiAgICAtLWlvbi1jb2xvci13aGl0ZTojZmZmZmZmO1xuICAgIC0taW9uLWNvbG9yLWJsYWNrOiMxNDVhN2I7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWJsYWNrKTtcbn1cbi5iYWNrQ29sb3J7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG4uZGFya3tcbiAgICBjb2xvcjogYmxhY2s7XG59XG4uaWNvbi1vcmFuZ2V7XG4gICAgY29sb3I6ICNkNzU1MjU7XG4gfVxuLmZpeGVke1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiAxO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLmJvdHRvbVRhYnN7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvdHRvbTogMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMwMDAwMDAzNjtcbiAgICB6LWluZGV4OiAxO1xufVxuLnctOTV7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW46IGF1dG87XG59XG4udmgxNHtcbiAgICBwYWRkaW5nLXRvcDogMTR2aDtcbn1cbi5tLWF1dG97XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuLm0tMjB7XG4gICAgbWFyZ2luOjIwcHg7XG59XG4ubWItMHtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG4ubWItNXtcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG59XG4ubWItMTB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5tYi0xNXtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuLm1iLTIwe1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ucC0we1xuICAgIHBhZGRpbmc6IDBweCAhaW1wb3J0YW50O1xufVxuLnAtMTB7XG4gICAgcGFkZGluZzogMTBweDtcbn1cbi5wYWRkaW5nLTZ7XG4gICAgcGFkZGluZzogNiUgIWltcG9ydGFudDtcbn1cbi5iZy13aGl0ZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cbi5ib3JkZXItbm9uZXtcbiAgICBib3JkZXI6bm9uZTtcbiAgICAtLWlubmVyLWJvcmRlci13aWR0aDogMDtcbn1cbi5ib3JkZXItYm90dG9te1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2VjYWNhO1xufVxuLmJvcmRlci1jb2xvcntcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMTQ1YTdiO1xufVxuLmJiLTF7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yNCk7XG59XG4uYm9yZGVyLXRvcC1scntcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMHB4IDBweDtcbn1cbi5ib3JkZXItYm90dG9tLWxye1xuICAgIGJvcmRlci1yYWRpdXM6IDBweCAwcHggMTVweCAxNXB4O1xufVxuLmItcmFkaXVze1xuICAgIGJvcmRlci1yYWRpdXM6IDEydnc7XG59XG4uaGlkZXtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuLnNob3d7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG4udGV4dC1jZW50ZXJ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnRleHQtdW5kZXJsaW5le1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuLmZvbnQtMTB7XG4gICAgZm9udC1zaXplOiAxMHB4O1xufVxuLmZvbnQtMTR7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuLmZvbnQtMTZ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuLmZvbnQtMjJ7XG4gICAgZm9udC1zaXplOiAyMnB4O1xufVxuLmZvbnQtMjV7XG4gICAgZm9udC1zaXplOiAyNXB4O1xufVxuLmZvbnQtMjR7XG4gICAgZm9udC1zaXplOiAyNHB4O1xufVxuLmZvbnQtb3Jhbmdle1xuICAgIGNvbG9yOiNENzU0MjY7XG59XG4uZm9udC1sYWJlbC1jb2xvcntcbiAgICBjb2xvcjogIzZFNkU2RTtcbn1cblxuLnNtLTg1e1xuICAgIHdpZHRoOiA5MyU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xufSIsIi52b3lhSW1hZ2Uge1xuICB3aWR0aDogNTUlO1xuICBtYXJnaW46IGF1dG87XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiA4dnc7XG59XG5cbmlvbi1pbnB1dCB7XG4gIC0tcGFkZGluZy10b3A6IDBweDtcbiAgLS1wYWRkaW5nLWVuZDogMHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAwcHg7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuaW9uLXRvZ2dsZSB7XG4gIC0tYmFja2dyb3VuZC1jaGVja2VkOiByZ2JhKDIwLCA5MCwgMTIzLCAxKTtcbn1cblxuaW9uLXRvZ2dsZS50b2dnbGUtY2hlY2tlZCB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6IHJnYmEoMjAsIDkwLCAxMjMsIDEpO1xuICAtLWhhbmRsZS1iYWNrZ3JvdW5kOiAjN2E0OWE1O1xuICAtLWhhbmRsZS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNmZmZmZmY7XG59XG5cbi5pb24tY29sb3ItYnRuYmFja2NvbG9yIHtcbiAgLS1pb24tY29sb3ItYnRuYmFja2NvbG9yOiMxNDVhN2I7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1idG5iYWNrY29sb3IpO1xufVxuXG4uaW9uLWNvbG9yLXdoaXRlIHtcbiAgLS1pb24tY29sb3Itd2hpdGU6I2ZmZmZmZjtcbiAgLS1pb24tY29sb3ItYmxhY2s6IzE0NWE3YjtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXdoaXRlKTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1ibGFjayk7XG59XG5cbi5iYWNrQ29sb3Ige1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5kYXJrIHtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4uaWNvbi1vcmFuZ2Uge1xuICBjb2xvcjogI2Q3NTUyNTtcbn1cblxuLmZpeGVkIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiAxO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJvdHRvbVRhYnMge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICBib3R0b206IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMwMDAwMDAzNjtcbiAgei1pbmRleDogMTtcbn1cblxuLnctOTUge1xuICB3aWR0aDogOTUlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4udmgxNCB7XG4gIHBhZGRpbmctdG9wOiAxNHZoO1xufVxuXG4ubS1hdXRvIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4ubS0yMCB7XG4gIG1hcmdpbjogMjBweDtcbn1cblxuLm1iLTAge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbi5tYi01IHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4ubWItMTAge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ubWItMTUge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4ubWItMjAge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ucC0wIHtcbiAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5wLTEwIHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLnBhZGRpbmctNiB7XG4gIHBhZGRpbmc6IDYlICFpbXBvcnRhbnQ7XG59XG5cbi5iZy13aGl0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uYm9yZGVyLW5vbmUge1xuICBib3JkZXI6IG5vbmU7XG4gIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwO1xufVxuXG4uYm9yZGVyLWJvdHRvbSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2VjYWNhO1xufVxuXG4uYm9yZGVyLWNvbG9yIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzE0NWE3Yjtcbn1cblxuLmJiLTEge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjI0KTtcbn1cblxuLmJvcmRlci10b3AtbHIge1xuICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMHB4IDBweDtcbn1cblxuLmJvcmRlci1ib3R0b20tbHIge1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDE1cHggMTVweDtcbn1cblxuLmItcmFkaXVzIHtcbiAgYm9yZGVyLXJhZGl1czogMTJ2dztcbn1cblxuLmhpZGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4uc2hvdyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4udGV4dC1jZW50ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50ZXh0LXVuZGVybGluZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xufVxuXG4uZm9udC0xMCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLmZvbnQtMTQge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5mb250LTE2IHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uZm9udC0yMiB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLmZvbnQtMjUge1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5mb250LTI0IHtcbiAgZm9udC1zaXplOiAyNHB4O1xufVxuXG4uZm9udC1vcmFuZ2Uge1xuICBjb2xvcjogI0Q3NTQyNjtcbn1cblxuLmZvbnQtbGFiZWwtY29sb3Ige1xuICBjb2xvcjogIzZFNkU2RTtcbn1cblxuLnNtLTg1IHtcbiAgd2lkdGg6IDkzJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59Il19 */");

/***/ }),

/***/ "OO8S":
/*!***********************************************************!*\
  !*** ./src/app/modules/features/login/login.component.ts ***!
  \***********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.component.html */ "2zG1");
/* harmony import */ var _login_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component.scss */ "HK/w");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "b6Qw");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/core */ "gcOT");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_service_bio_metric_service_alerts_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/service/bio-metric-service/alerts.service */ "XGC+");
/* harmony import */ var _shared_service_bio_metric_service_storage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/service/bio-metric-service/storage.service */ "lOUc");
/* harmony import */ var _shared_service_login_validation_service_validation_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/service/login-validation-service/validation.service */ "PJ4f");










//import { FormGroup } from '@angular/forms';
const { Network } = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"];
const { Browser } = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"];
let LoginComponent = class LoginComponent {
    //credentialForm: FormGroup;
    constructor(alerts, storage, validation, cookieService, router) {
        this.alerts = alerts;
        this.storage = storage;
        this.validation = validation;
        this.cookieService = cookieService;
        this.router = router;
        this.password = "";
        this.username = "";
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let Biometric = yield this.storage.get('biometric');
            if (Biometric === true) {
                this.unLock();
            }
        });
    }
    updateItem(item) {
        console.log(item.detail.checked);
        //this.alerts.ConfirmAIO();
        if (item.detail.checked) {
            this.storage.set('biometric', item.detail.checked);
        }
        else {
            this.storage.remove('biometric');
        }
    }
    unLock() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let Biometric = yield this.storage.get('biometric');
            if (Biometric) {
                this.alerts.fingerPrintAIO();
            }
        });
    }
    removeData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.storage.remove('user_pass');
            yield this.storage.remove('biometric');
            this.alerts.toastInfo("Data Removed!");
        });
    }
    vdsPage() {
        this.router.navigateByUrl("/vds");
    }
    openPage() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.validation.checkUsernameAndPassword(this.username, this.password);
            this.validation.checkPassword(this.password);
            let Password = yield this.storage.get('user_pass');
            if (true) {
                this.alerts.toastInfo('Welcome');
                this.alerts.setPass(this.password);
            }
            else {}
        });
    }
    togglePassword(str) {
        if (str === 'hide') {
            document.getElementById(str).style.display = "none";
            document.getElementById('show').style.display = "block";
            document.getElementById("password").setAttribute("type", "password");
        }
        else {
            document.getElementById(str).style.display = "none";
            document.getElementById('hide').style.display = "block";
            document.getElementById("password").setAttribute("type", "text");
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _shared_service_bio_metric_service_alerts_service__WEBPACK_IMPORTED_MODULE_7__["AlertsService"] },
    { type: _shared_service_bio_metric_service_storage_service__WEBPACK_IMPORTED_MODULE_8__["StorageService"] },
    { type: _shared_service_login_validation_service_validation_service__WEBPACK_IMPORTED_MODULE_9__["ValidationService"] },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginComponent);



/***/ }),

/***/ "PJ4f":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/shared/service/login-validation-service/validation.service.ts ***!
  \***************************************************************************************/
/*! exports provided: ValidationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidationService", function() { return ValidationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



let ValidationService = class ValidationService {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.unamePattern = "^[a-z]{4}$";
        this.pwdPattern = "^[0-9]{4}$";
        // unamePattern = "^[a-z0-9_-]{8,15}$";
        // pwdPattern = "^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,12}$";
        //mobnumPattern = "^((\\+91-?)|0)?[0-9]{10}$"; 
        //emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
        this.isValidFormSubmitted = null;
        this.userForm = this.formBuilder.group({
            username: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.unamePattern)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.pwdPattern)]],
        });
    }
    checkUsernameAndPassword(ustr, pstr) {
        let validations_form = this.formBuilder.group({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](ustr, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.unamePattern)
            ])),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](pstr, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.pwdPattern)
            ]))
        });
        console.log(validations_form.status);
    }
    checkPassword(str) {
        if (str === "1234") {
            return true;
        }
        else {
            return false;
        }
    }
};
ValidationService.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
ValidationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ValidationService);



/***/ }),

/***/ "XGC+":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/shared/service/bio-metric-service/alerts.service.ts ***!
  \*****************************************************************************/
/*! exports provided: AlertsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertsService", function() { return AlertsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/fingerprint-aio/ngx */ "59pt");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./storage.service */ "lOUc");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/core */ "gcOT");






const { Device } = _capacitor_core__WEBPACK_IMPORTED_MODULE_5__["Plugins"];
let AlertsService = class AlertsService {
    constructor(alertCtrl, storage, toastController, navCtrl, faio) {
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.toastController = toastController;
        this.navCtrl = navCtrl;
        this.faio = faio;
    }
    setPass(password) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('Set password service');
            console.log(password);
            this.storage.set('user_pass', password);
            this.toastInfo("Password is set , Now you can login");
            setTimeout(() => {
                this.checkPass(password);
            }, 3000);
        });
    }
    checkPass(passworda) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //let { password } = passworda;
            let res = yield this.storage.get('user_pass');
            if (res == passworda) {
                try {
                    const device = yield Device.getInfo();
                    if (device.platform != "web") {
                        this.faio.isAvailable().then((result) => {
                            this.ConfirmAIO(); //Test if this phone have Biometric Hardware
                        });
                    }
                    else
                        this.toastInfo("Biometric isn't activated, please use emulator to use this login feature");
                }
                catch (error) { }
                this.navCtrl.navigateForward('/home', { animated: true });
            }
            else {
                this.toastError("Password Error");
            }
        });
    }
    toastError(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 4000,
                color: 'danger',
                animated: true,
                position: 'bottom'
            });
            toast.present();
        });
    }
    toastInfo(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 3000,
                color: 'primary',
                animated: true,
                position: 'bottom'
            });
            toast.present();
        });
    }
    ConfirmAIO() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Dear User',
                message: 'Do you want to use Biometric Authentication?',
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'primary',
                        handler: (c) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () { })
                    }, {
                        text: 'Yes',
                        handler: (o) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                            yield this.storage.set('biometric', true);
                            this.toastInfo("Now you can use Biometric");
                        })
                    }
                ]
            });
            yield alert.present();
        });
    }
    fingerPrintAIO() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.faio.isAvailable().then((result) => {
                this.faio.show({
                    title: 'Enter phone PIN, password or fingerprint',
                    subtitle: 'Unlock Voya-EB',
                    disableBackup: true,
                }).then((res) => {
                    this.navCtrl.navigateForward('/home', { animated: true });
                    return true;
                }).catch((error) => {
                    this.toastError(error.message);
                    return false;
                });
            }).catch((error) => {
                this.toastError("This phone don't have biometric hardware or it is deactivated, please check it");
            });
        });
    }
};
AlertsService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _storage_service__WEBPACK_IMPORTED_MODULE_4__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_3__["FingerprintAIO"] }
];
AlertsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AlertsService);



/***/ }),

/***/ "lOUc":
/*!******************************************************************************!*\
  !*** ./src/app/modules/shared/service/bio-metric-service/storage.service.ts ***!
  \******************************************************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/core */ "gcOT");



const { Storage } = _capacitor_core__WEBPACK_IMPORTED_MODULE_2__["Plugins"];
let StorageService = class StorageService {
    constructor() { }
    set(key, value) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield Storage.set({ key, value })
                .then(value => {
                return true;
            })
                .catch(error => {
                return false;
            });
        });
    }
    get(key) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield Storage.get({ key })
                .then(data => {
                return JSON.parse(data.value);
            })
                .catch(error => {
                return error;
            });
        });
    }
    remove(key) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield Storage.remove({ key })
                .then(value => {
                return true;
            })
                .catch(error => {
                return false;
            });
        });
    }
};
StorageService.ctorParameters = () => [];
StorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], StorageService);



/***/ }),

/***/ "sltr":
/*!********************************************************!*\
  !*** ./src/app/modules/features/login/login.module.ts ***!
  \********************************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ag-grid-angular */ "cWTo");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-routing.module */ "xjeP");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login.component */ "OO8S");








let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_6__["LoginPageRoutingModule"],
            ag_grid_angular__WEBPACK_IMPORTED_MODULE_4__["AgGridModule"].withComponents([]),
        ],
        declarations: [_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"]]
    })
], LoginPageModule);



/***/ }),

/***/ "xjeP":
/*!****************************************************************!*\
  !*** ./src/app/modules/features/login/login-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "OO8S");




const routes = [
    {
        path: '',
        component: _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=modules-features-login-login-module-es2015.js.map