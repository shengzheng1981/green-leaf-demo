(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-tile-tile-module"],{

/***/ "42ug":
/*!******************************************!*\
  !*** ./src/app/main/tile/tile.module.ts ***!
  \******************************************/
/*! exports provided: TileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileModule", function() { return TileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/core.module */ "pKmL");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "YCQm");
/* harmony import */ var _tile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tile.component */ "NtSQ");






const routes = [
    {
        path: '',
        component: _tile_component__WEBPACK_IMPORTED_MODULE_5__["TileComponent"]
    }
];
let TileModule = class TileModule {
};
TileModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"].forChild(),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        declarations: [
            _tile_component__WEBPACK_IMPORTED_MODULE_5__["TileComponent"]
        ]
    })
], TileModule);



/***/ }),

/***/ "NtSQ":
/*!*********************************************!*\
  !*** ./src/app/main/tile/tile.component.ts ***!
  \*********************************************/
/*! exports provided: TileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TileComponent", function() { return TileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tile.component.html */ "R2LA");
/* harmony import */ var _tile_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tile.component.scss */ "fYYi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _core_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/config.service */ "8WNu");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var green_gis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! green-gis */ "9/H4");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "IheW");








let TileComponent = class TileComponent {
    constructor(router, configService, http) {
        this.router = router;
        this.configService = configService;
        this.http = http;
        this.option = {
            lng: 116.397411,
            lat: 39.909186,
            url: "http://wprd01.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scl=1&style=7"
        };
    }
    ngOnInit() {
        this.map = new green_gis__WEBPACK_IMPORTED_MODULE_6__["Map"](this.gMapDiv.nativeElement);
        this.map.setTileUrl(this.option.url);
        this.create();
    }
    /////////////////以下界面交互/////////////////////
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
        this.map.setTileUrl(this.option.url);
        this.map.redraw();
    }
};
TileComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _core_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] }
];
TileComponent.propDecorators = {
    gMapDiv: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['gMapDiv', { static: true },] }]
};
TileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tile',
        template: _raw_loader_tile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tile_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TileComponent);



/***/ }),

/***/ "R2LA":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/tile/tile.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"system-content\" style=\"grid-template-columns: 1fr\">\n    <div class=\"system-body\" >\n        <div #gMapDiv style=\"width: 100%; height: 100%; position: absolute; z-index: 1; overflow: hidden;\"></div>\n        <div class=\"panel\" style=\"position: absolute; top: 15px; right: 15px; z-index: 1000;\">\n            <div class=\"panel-heading\">\n                <div class=\"panel-title\">配置</div>\n            </div>\n            <div class=\"panel-body\" style=\"display: grid; grid-template-columns: 1fr; grid-gap: 10px; width: 540px\">\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\" style=\"width: 60px;\">URL：</div>\n                    <input class=\"form-control\" name=\"url\" [(ngModel)]=\"option.url\"  autocomplete=\"off\" >\n                    <span class=\"input-group-addon\" (click)=\"change()\" style=\"cursor: pointer; width: 60px;\">刷新</span>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "fYYi":
/*!***********************************************!*\
  !*** ./src/app/main/tile/tile.component.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0aWxlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=main-tile-tile-module-es2015.js.map