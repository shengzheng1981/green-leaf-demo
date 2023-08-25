(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-animation-animation-module"],{

/***/ "4SdK":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/animation/line.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"system-content\" style=\"grid-template-columns: 1fr\">\n    <div class=\"system-body\" >\n        <green-map-control (mapInit)=\"mapInit($event)\"></green-map-control>\n        <div class=\"panel\" style=\"position: absolute; top: 15px; right: 15px; z-index: 1000;\">\n            <div class=\"panel-heading\">\n                <div class=\"panel-title\">配置</div>\n            </div>\n            <div class=\"panel-body\" style=\"display: grid; grid-template-columns: 1fr 1fr; grid-gap: 10px; width: 540px\" *ngIf=\"animation\">\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">起始色：</div>\n                    <input class=\"form-control\" type=\"color\" name=\"color\" [(ngModel)]=\"animation.startColor\"  (ngModelChange)=\"change()\">\n                </div>\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">终止色：</div>\n                    <input class=\"form-control\" type=\"color\" name=\"color\" [(ngModel)]=\"animation.endColor\"  (ngModelChange)=\"change()\">\n                </div>\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">线宽：</div>\n                    <input class=\"form-control\" type=\"number\" name=\"width\" [(ngModel)]=\"animation.lineWidth\"  autocomplete=\"off\" (ngModelChange)=\"change()\" min=\"2\" [max]=\"8\" step=\"1\">\n                </div>\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">弧度(rad)：</div>\n                    <input class=\"form-control\" type=\"number\" name=\"angle\" [(ngModel)]=\"animation.angle\"  autocomplete=\"off\" (ngModelChange)=\"change()\" min=\"0\" [max]=\"1\" step=\"0.1\">\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "7AeN":
/*!********************************************************!*\
  !*** ./src/app/main/animation/particle.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXJ0aWNsZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "9+ri":
/*!******************************************************!*\
  !*** ./src/app/main/animation/particle.component.ts ***!
  \******************************************************/
/*! exports provided: ParticleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticleComponent", function() { return ParticleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_particle_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./particle.component.html */ "Ro6E");
/* harmony import */ var _particle_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./particle.component.scss */ "7AeN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _core_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/config.service */ "8WNu");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var green_gis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! green-gis */ "9/H4");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "IheW");








let ParticleComponent = class ParticleComponent {
    constructor(router, configService, http) {
        this.router = router;
        this.configService = configService;
        this.http = http;
    }
    ngOnInit() {
    }
    /////////////////以下界面交互/////////////////////
    mapInit(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.map = event.map;
            this.map.setView([116.397411, 39.909186], 4);
            const point = new green_gis__WEBPACK_IMPORTED_MODULE_6__["Point"](116.397411, 39.909186);
            this.animation = new green_gis__WEBPACK_IMPORTED_MODULE_6__["ParticleAnimation"](point);
            this.map.addAnimation(this.animation);
        });
    }
    change() {
        if (this.animation) {
            this.map.redraw();
        }
    }
};
ParticleComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _core_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] }
];
ParticleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-particle',
        template: _raw_loader_particle_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_particle_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ParticleComponent);



/***/ }),

/***/ "9G1L":
/*!****************************************************!*\
  !*** ./src/app/main/animation/animation.module.ts ***!
  \****************************************************/
/*! exports provided: AnimationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationModule", function() { return AnimationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/core.module */ "pKmL");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "YCQm");
/* harmony import */ var _point_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./point.component */ "fHBY");
/* harmony import */ var _particle_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./particle.component */ "9+ri");
/* harmony import */ var _line_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./line.component */ "u82u");








const routes = [
    {
        path: 'point',
        component: _point_component__WEBPACK_IMPORTED_MODULE_5__["PointComponent"]
    },
    {
        path: 'line',
        component: _line_component__WEBPACK_IMPORTED_MODULE_7__["LineComponent"]
    },
    {
        path: 'particle',
        component: _particle_component__WEBPACK_IMPORTED_MODULE_6__["ParticleComponent"]
    }
];
let AnimationModule = class AnimationModule {
};
AnimationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"].forChild(),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        declarations: [
            _point_component__WEBPACK_IMPORTED_MODULE_5__["PointComponent"], _line_component__WEBPACK_IMPORTED_MODULE_7__["LineComponent"], _particle_component__WEBPACK_IMPORTED_MODULE_6__["ParticleComponent"]
        ]
    })
], AnimationModule);



/***/ }),

/***/ "DiWl":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/animation/point.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"system-content\" style=\"grid-template-columns: 1fr\">\n    <div class=\"system-body\" >\n        <green-map-control (mapInit)=\"mapInit($event)\"></green-map-control>\n        <div class=\"panel\" style=\"position: absolute; top: 15px; right: 15px; z-index: 1000;\">\n            <div class=\"panel-heading\">\n                <div class=\"panel-title\">配置</div>\n            </div>\n            <div class=\"panel-body\" style=\"display: grid; grid-template-columns: 1fr 1fr; grid-gap: 10px; width: 540px\" *ngIf=\"animation\">\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">颜色：</div>\n                    <input class=\"form-control\" type=\"color\" name=\"color\" [(ngModel)]=\"animation.color\"  (ngModelChange)=\"change()\">\n                </div>\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">光圈数：</div>\n                    <input class=\"form-control\" type=\"number\" name=\"ring\" [(ngModel)]=\"animation.ring\"  autocomplete=\"off\" (ngModelChange)=\"change()\" min=\"2\" [max]=\"5\" step=\"1\">\n                </div>\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">扩散速度：</div>\n                    <input class=\"form-control\" type=\"number\" name=\"velocity\" [(ngModel)]=\"animation.velocity\"  autocomplete=\"off\" (ngModelChange)=\"change()\" min=\"5\" [max]=\"30\" step=\"1\">\n                </div>\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">最大半径：</div>\n                    <input class=\"form-control\" type=\"number\" name=\"limit\" [(ngModel)]=\"animation.limit\"  autocomplete=\"off\" (ngModelChange)=\"change()\" min=\"20\" [max]=\"50\" step=\"1\">\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "LhA6":
/*!****************************************************!*\
  !*** ./src/app/main/animation/line.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaW5lLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "Ro6E":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/animation/particle.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"system-content\" style=\"grid-template-columns: 1fr\">\n    <div class=\"system-body\" >\n        <green-map-control (mapInit)=\"mapInit($event)\"></green-map-control>\n        <div class=\"panel\" style=\"position: absolute; top: 15px; right: 15px; z-index: 1000;\">\n            <div class=\"panel-heading\">\n                <div class=\"panel-title\">配置</div>\n            </div>\n            <div class=\"panel-body\" style=\"display: grid; grid-template-columns: 1fr 1fr; grid-gap: 10px; width: 540px\" *ngIf=\"animation\">\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">颜色：</div>\n                    <input class=\"form-control\" type=\"color\" name=\"color\" [(ngModel)]=\"animation.color\"  (ngModelChange)=\"change()\">\n                </div>\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">轨道半径：</div>\n                    <input class=\"form-control\" type=\"number\" name=\"radius\" [(ngModel)]=\"animation.radius\"  autocomplete=\"off\" (ngModelChange)=\"change()\" min=\"20\" [max]=\"80\" step=\"1\">\n                </div>\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">环绕速度：</div>\n                    <input class=\"form-control\" type=\"number\" name=\"speed\" [(ngModel)]=\"animation.speed\"  autocomplete=\"off\" (ngModelChange)=\"change()\" min=\"5\" [max]=\"20\" step=\"1\">\n                </div>\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">粒子数：</div>\n                    <input class=\"form-control\" type=\"number\" name=\"count\" [(ngModel)]=\"animation.count\"  autocomplete=\"off\" (ngModelChange)=\"change()\" min=\"5\" [max]=\"50\" step=\"1\">\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "emAN":
/*!*****************************************************!*\
  !*** ./src/app/main/animation/point.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb2ludC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "fHBY":
/*!***************************************************!*\
  !*** ./src/app/main/animation/point.component.ts ***!
  \***************************************************/
/*! exports provided: PointComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointComponent", function() { return PointComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_point_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./point.component.html */ "DiWl");
/* harmony import */ var _point_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./point.component.scss */ "emAN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _core_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/config.service */ "8WNu");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var green_gis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! green-gis */ "9/H4");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "IheW");








let PointComponent = class PointComponent {
    constructor(router, configService, http) {
        this.router = router;
        this.configService = configService;
        this.http = http;
    }
    ngOnInit() {
    }
    /////////////////以下界面交互/////////////////////
    mapInit(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.map = event.map;
            this.map.setView([116.397411, 39.909186], 4);
            const point = new green_gis__WEBPACK_IMPORTED_MODULE_6__["Point"](116.397411, 39.909186);
            this.animation = new green_gis__WEBPACK_IMPORTED_MODULE_6__["PointAnimation"](point);
            this.map.addAnimation(this.animation);
        });
    }
    change() {
        if (this.animation) {
            this.map.redraw();
        }
    }
};
PointComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _core_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] }
];
PointComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-point',
        template: _raw_loader_point_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_point_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PointComponent);



/***/ }),

/***/ "u82u":
/*!**************************************************!*\
  !*** ./src/app/main/animation/line.component.ts ***!
  \**************************************************/
/*! exports provided: LineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineComponent", function() { return LineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_line_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./line.component.html */ "4SdK");
/* harmony import */ var _line_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./line.component.scss */ "LhA6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _core_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/config.service */ "8WNu");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var green_gis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! green-gis */ "9/H4");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "IheW");








let LineComponent = class LineComponent {
    constructor(router, configService, http) {
        this.router = router;
        this.configService = configService;
        this.http = http;
    }
    ngOnInit() {
    }
    /////////////////以下界面交互/////////////////////
    mapInit(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.map = event.map;
            this.map.setView([116.397411, 39.909186], 4);
            const polyline = new green_gis__WEBPACK_IMPORTED_MODULE_6__["Polyline"]([[116.397411, 39.909186], [109.519, 18.271]]);
            this.animation = new green_gis__WEBPACK_IMPORTED_MODULE_6__["LineAnimation"](polyline);
            this.map.addAnimation(this.animation);
        });
    }
    change() {
        if (this.animation) {
            this.map.redraw();
        }
    }
};
LineComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _core_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] }
];
LineComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-line',
        template: _raw_loader_line_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_line_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LineComponent);



/***/ })

}]);
//# sourceMappingURL=main-animation-animation-module-es2015.js.map