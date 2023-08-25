(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-dashboard-dashboard-module"],{

/***/ "9hGb":
/*!*********************************************************!*\
  !*** ./src/app/main/dashboard/dashboard.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".dashboard-wrapper {\n  height: 100%;\n  width: 100%;\n  background-color: #ffffff;\n  display: grid;\n  grid-template-rows: 1fr auto;\n}\n.dashboard-wrapper .dashboard-body {\n  padding: 10px;\n  height: 100%;\n  width: 100%;\n  display: grid;\n  grid-template-columns: 0.618fr 0.382fr;\n  grid-template-areas: \"a b\";\n}\n.dashboard-wrapper .dashboard-body .area-a {\n  grid-area: a;\n  padding: 50px;\n  display: grid;\n  grid-template-rows: 1fr auto auto auto auto 1fr;\n}\n.dashboard-wrapper .dashboard-body .area-b {\n  grid-area: b;\n  background: rgba(255, 255, 255, 0.5);\n  border-radius: 10px;\n  box-shadow: rgba(255, 255, 255, 0.3) 2px 2px;\n}\n.dashboard-wrapper .dashboard-foot {\n  height: 50px;\n  display: grid;\n  align-items: center;\n  justify-items: center;\n  background-color: #ffffff;\n}\n.dashboard-wrapper .dashboard-foot > a {\n  font-family: \"Arial Normal\", \"Arial\";\n  font-weight: 400;\n  font-style: normal;\n  font-size: 15px;\n  color: #276419;\n}\n[nz-carousel-content] {\n  text-align: center;\n  height: 160px;\n  line-height: 160px;\n  background: rgba(255, 255, 255, 0.5);\n  color: #4d9221;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcYXNzZXRzXFxzdHlsZXNcXHRoZW1lLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0FBREo7QUFHSTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQ0FBQTtFQUNBLDBCQUFBO0FBRFI7QUFFUTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLCtDQUFBO0FBQVo7QUFFUTtFQUNJLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsNENBQUE7QUFBWjtBQUlJO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7QUFGUjtBQUdRO0VBQ0ksb0NBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGNDekJDO0FEd0JiO0FBTUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsY0NuRFk7RURvRFosZ0JBQUE7QUFISiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy90aGVtZVwiO1xyXG5cclxuLmRhc2hib2FyZC13cmFwcGVye1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIGF1dG87XHJcblxyXG4gICAgLmRhc2hib2FyZC1ib2R5e1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjYxOGZyIDAuMzgyZnI7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ2EgYic7XHJcbiAgICAgICAgLmFyZWEtYSB7XHJcbiAgICAgICAgICAgIGdyaWQtYXJlYTogYTtcclxuICAgICAgICAgICAgcGFkZGluZzogNTBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgYXV0byBhdXRvIGF1dG8gYXV0byAxZnI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hcmVhLWIge1xyXG4gICAgICAgICAgICBncmlkLWFyZWE6IGI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpIDJweCAycHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5kYXNoYm9hcmQtZm9vdHtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICAgICYgPiBhIHtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdBcmlhbCBOb3JtYWwnLCAnQXJpYWwnO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgY29sb3I6ICRjb2xvci1mb250O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuW256LWNhcm91c2VsLWNvbnRlbnRdIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTYwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTYwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbiIsIiRjb2xvci1wcmltYXJ5OiByZ2IoNzcsMTQ2LDMzKTtcclxuJGNvbG9yLXByaW1hcnktYWN0aXZlOiByZ2IoMzksMTAwLDI1KTtcclxuJGNvbG9yLXByaW1hcnktaG92ZXI6IHJnYmEoNzcsMTQ2LDMzLCAwLjUpO1xyXG4kY29sb3ItcHJpbWFyeS1hY3RpdmUtaG92ZXI6IHJnYmEoMzksMTAwLDI1LCAwLjUpO1xyXG4kY29sb3ItcHJpbWFyeS1iZzogcmdiYSg3NywxNDYsMzMsIDAuMik7XHJcblxyXG4kY29sb3Itc3VjY2VzczogcmdiKDM0LCAyMTUsIDE4Nyk7XHJcbiRjb2xvci1zdWNjZXNzLWFjdGl2ZTogcmdiKDI0LCAxNDksIDEzMCk7XHJcbiRjb2xvci13YXJuaW5nOiByZ2IoMjU1LCAxMjgsIDApO1xyXG4kY29sb3Itd2FybmluZy1hY3RpdmU6IHJnYigyMDAsIDExMCwgMCk7XHJcbiRjb2xvci1kYW5nZXI6IHJnYigyNTUsIDkxLCA4Nyk7XHJcbiRjb2xvci1kYW5nZXItYWN0aXZlOiByZ2IoMjQ4LCAxOCwgMTEpO1xyXG5cclxuJGNvbG9yLWJhY2tncm91bmQ6IHJnYmEoNzcsMTQ2LDMzLCAwLjIpO1xyXG4kY29sb3ItYmFja2dyb3VuZC1saWdodDogcmdiKDIzMCwyNDUsMjA4KTtcclxuXHJcbiRjb2xvci1mb250OiByZ2IoMzksMTAwLDI1KTtcclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "GEmG":
/*!****************************************************!*\
  !*** ./src/app/main/dashboard/dashboard.module.ts ***!
  \****************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component */ "kaTA");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/core.module */ "pKmL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "YCQm");






const routes = [
    {
        path: '',
        component: _dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]
    }
];
let DashboardModule = class DashboardModule {
};
DashboardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]],
        imports: [
            _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"].forChild(),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ]
    })
], DashboardModule);



/***/ }),

/***/ "kaTA":
/*!*******************************************************!*\
  !*** ./src/app/main/dashboard/dashboard.component.ts ***!
  \*******************************************************/
/*! exports provided: DashboardComponent, ShapeSymbol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapeSymbol", function() { return ShapeSymbol; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dashboard.component.html */ "sv3N");
/* harmony import */ var _dashboard_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.component.scss */ "9hGb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _core_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/config.service */ "8WNu");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var green_gis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! green-gis */ "9/H4");







let DashboardComponent = class DashboardComponent {
    constructor(configService, router) {
        this.configService = configService;
        this.router = router;
        this.option = {
            lng: 116.397411,
            lat: 39.909186,
            strokeStyle: "#ffffff",
            fillStyle: "#ff0000",
            radius: 20,
            sides: 4,
            flag: true,
        };
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        this.interval && clearInterval(this.interval);
    }
    mapInit(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.map = event.map;
            this.symbol = new ShapeSymbol();
            this.symbol.strokeStyle = this.option.strokeStyle;
            this.symbol.fillStyle = this.option.fillStyle;
            this.symbol.radius = this.option.radius;
            this.symbol.sides = this.option.sides;
            const point = new green_gis__WEBPACK_IMPORTED_MODULE_6__["Point"](this.option.lng, this.option.lat);
            const graphic = new green_gis__WEBPACK_IMPORTED_MODULE_6__["Graphic"](point, this.symbol);
            this.map.addGraphic(graphic);
            this.map.setView([this.option.lng, this.option.lat], 12);
            this.interval = setInterval(() => {
                if (this.symbol.sides == 12 && this.option.flag) {
                    this.option.flag = false;
                }
                else if (this.symbol.sides == 3 && !this.option.flag) {
                    this.option.flag = true;
                }
                if (this.option.flag) {
                    this.symbol.sides += 1;
                }
                if (!this.option.flag) {
                    this.symbol.sides -= 1;
                }
                this.map.redraw();
            }, 1000);
        });
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _core_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-dashboard',
        template: _raw_loader_dashboard_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_dashboard_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DashboardComponent);

class ShapeSymbol extends green_gis__WEBPACK_IMPORTED_MODULE_6__["PointSymbol"] {
    constructor() {
        super(...arguments);
        this.radius = 6;
        this.sides = 4;
    }
    draw(ctx, screenX, screenY) {
        ctx.save();
        //keep size
        //地理坐标 转回 屏幕坐标
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.lineWidth = this.lineWidth;
        ctx.strokeStyle = this.strokeStyle;
        ctx.fillStyle = this.fillStyle;
        ctx.lineWidth = this.lineWidth;
        ctx.beginPath(); //Start path
        //ctx.arc(screenX, screenY, this.radius, 0, Math.PI * 2, true);
        ctx.moveTo(screenX, screenY - this.radius);
        for (let i = 1; i < this.sides; i++) {
            let rad = 2 * Math.PI / this.sides * i;
            ctx.lineTo(screenX + this.radius * Math.sin(rad), screenY - this.radius * Math.cos(rad));
        }
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        ctx.restore();
    }
    contain(anchorX, anchorY, screenX, screenY) {
        return Math.sqrt((anchorX - screenX) * (anchorX - screenX) + (anchorY - screenY) * (anchorY - screenY)) <= this.radius;
    }
}


/***/ }),

/***/ "sv3N":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/dashboard/dashboard.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"dashboard-wrapper\">\n    <div class=\"dashboard-body\">\n        <div class=\"area-a\">\n            <div></div>\n            <h1 style=\"color: black; font-size: 64px; font-family: '华文行楷'; text-align: center\"><span style=\"font-size: 128px; \">A</span> <span style=\"margin-left: 60px; color: red;\">Green</span> <span style=\"margin-left: 30px;\"> GIS </span><span style=\"margin-left: 30px;\">API</span></h1>\n            <h5 style=\"color: gray; font-size: 24px; font-family: '华文行楷'; text-align: center\">\n                <span style=\"margin-left: 30px;\">Light</span>\n                <span style=\"margin-left: 30px;\">Quick</span>\n                <span style=\"margin-left: 30px;\">Agile</span>\n            </h5>\n            <h5 style=\"color: red; font-size: 24px; font-family: '华文行楷'; text-align: center\">for</h5>\n            <h5 style=\"color: gray; font-size: 24px; font-family: '华文行楷'; text-align: center\">\n                <span style=\"margin-left: 30px;\">Learning</span>\n                <span style=\"margin-left: 30px;\">Truth</span>\n                <span style=\"margin-left: 30px;\">Love</span>\n            </h5>\n            <div></div>\n        </div>\n        <div class=\"area-b\">\n            <green-map-control (mapInit)=\"mapInit($event)\"></green-map-control>\n        </div>\n    </div>\n    <div class=\"dashboard-foot\">\n        <a href=\"http://beian.miit.gov.cn/\" target=\"_blank\"><span>Copyright © 2018-2020 Green GIS 版权所有 </span>ICP证：京ICP备15010239号-2</a>\n    </div>\n</div>\n");

/***/ })

}]);
//# sourceMappingURL=main-dashboard-dashboard-module-es2015.js.map