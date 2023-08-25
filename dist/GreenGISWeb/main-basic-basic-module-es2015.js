(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-basic-basic-module"],{

/***/ "LYsC":
/*!*************************************************!*\
  !*** ./src/app/main/basic/basic.component.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXNpYy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "SZMz":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/basic/basic.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"system-content\" style=\"grid-template-columns: 1fr\">\n    <div class=\"system-body\" >\n        <green-map-control (mapInit)=\"mapInit($event)\"></green-map-control>\n        <div class=\"panel\" style=\"position: absolute; top: 15px; right: 15px; z-index: 1000;\">\n            <div class=\"panel-heading\">\n                <div class=\"panel-title\">配置</div>\n            </div>\n            <div class=\"panel-body\" style=\"display: grid; grid-template-columns: 1fr 1fr; grid-gap: 10px; width: 540px\">\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">经度：</div>\n                    <input class=\"form-control\" type=\"number\" name=\"lng\" [(ngModel)]=\"option.lng\"  autocomplete=\"off\" (ngModelChange)=\"change()\" min=\"-180\" max=\"180\" step=\"0.001\">\n                </div>\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">纬度：</div>\n                    <input class=\"form-control\" type=\"number\" name=\"lat\" [(ngModel)]=\"option.lat\"  autocomplete=\"off\" (ngModelChange)=\"change()\" min=\"-85\" max=\"85\" step=\"0.001\">\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "mnQL":
/*!***********************************************!*\
  !*** ./src/app/main/basic/basic.component.ts ***!
  \***********************************************/
/*! exports provided: BasicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicComponent", function() { return BasicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_basic_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./basic.component.html */ "SZMz");
/* harmony import */ var _basic_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic.component.scss */ "LYsC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _core_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/config.service */ "8WNu");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var green_gis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! green-gis */ "9/H4");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "IheW");








let BasicComponent = class BasicComponent {
    constructor(router, configService, http) {
        this.router = router;
        this.configService = configService;
        this.http = http;
        this.option = {
            lng: 116.397411,
            lat: 39.909186
        };
    }
    ngOnInit() {
    }
    /////////////////以下界面交互/////////////////////
    mapInit(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.map = event.map;
            this.create();
        });
    }
    create() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const marker = new green_gis__WEBPACK_IMPORTED_MODULE_6__["SimpleMarkerSymbol"]();
            marker.width = 32;
            marker.height = 32;
            marker.offsetX = -16;
            marker.offsetY = -32;
            marker.url = "assets/img/marker.svg";
            yield marker.load();
            const point = new green_gis__WEBPACK_IMPORTED_MODULE_6__["Point"](this.option.lng, this.option.lat);
            const graphic = new green_gis__WEBPACK_IMPORTED_MODULE_6__["Graphic"](point, marker);
            this.map.addGraphic(graphic);
            this.map.setView([this.option.lng, this.option.lat], 12);
        });
    }
    change() {
        this.map.clearGraphics();
        this.create();
    }
};
BasicComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _core_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] }
];
BasicComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-basic',
        template: _raw_loader_basic_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_basic_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BasicComponent);



/***/ }),

/***/ "puiu":
/*!********************************************!*\
  !*** ./src/app/main/basic/basic.module.ts ***!
  \********************************************/
/*! exports provided: BasicModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicModule", function() { return BasicModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _basic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basic.component */ "mnQL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/core.module */ "pKmL");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "YCQm");






const routes = [
    {
        path: '',
        component: _basic_component__WEBPACK_IMPORTED_MODULE_2__["BasicComponent"]
    }
];
let BasicModule = class BasicModule {
};
BasicModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"].forChild(),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ],
        declarations: [
            _basic_component__WEBPACK_IMPORTED_MODULE_2__["BasicComponent"]
        ]
    })
], BasicModule);



/***/ })

}]);
//# sourceMappingURL=main-basic-basic-module-es2015.js.map