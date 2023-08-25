(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-layer-layer-module"],{

/***/ "+JG/":
/*!***************************************************!*\
  !*** ./src/app/main/layer/feature.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmZWF0dXJlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "6ae4":
/*!********************************************!*\
  !*** ./src/app/main/layer/layer.module.ts ***!
  \********************************************/
/*! exports provided: LayerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayerModule", function() { return LayerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/core.module */ "pKmL");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "YCQm");
/* harmony import */ var _feature_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./feature.component */ "kPVF");
/* harmony import */ var _graphic_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./graphic.component */ "rqzQ");







const routes = [
    {
        path: 'feature',
        component: _feature_component__WEBPACK_IMPORTED_MODULE_5__["FeatureComponent"]
    },
    {
        path: 'graphic',
        component: _graphic_component__WEBPACK_IMPORTED_MODULE_6__["GraphicComponent"]
    }
];
let LayerModule = class LayerModule {
};
LayerModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"].forChild(),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        declarations: [
            _feature_component__WEBPACK_IMPORTED_MODULE_5__["FeatureComponent"], _graphic_component__WEBPACK_IMPORTED_MODULE_6__["GraphicComponent"]
        ]
    })
], LayerModule);



/***/ }),

/***/ "Cj10":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/layer/graphic.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"system-content\" style=\"grid-template-columns: 1fr\">\n    <div class=\"system-body\" >\n        <green-map-control (mapInit)=\"mapInit($event)\"></green-map-control>\n        <div class=\"panel\" style=\"position: absolute; top: 15px; right: 15px; z-index: 1000;\">\n            <div class=\"panel-heading\">\n                <div class=\"panel-title\">配置</div>\n            </div>\n            <div class=\"panel-body\" style=\"display: grid; grid-template-columns: 1fr 1fr; grid-gap: 10px; width: 540px\" *ngIf=\"option\">\n                <div class=\"input-group\" style=\"text-align: center;\">\n                    <div class=\"input-group-addon\">交点图层：</div>\n                    <nz-switch class=\"form-control\" [(ngModel)]=\"option.pointVisible\" (ngModelChange)=\"change()\"></nz-switch>\n                </div>\n                <div class=\"input-group\"></div>\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">经线图层：</div>\n                    <nz-switch class=\"form-control\" [(ngModel)]=\"option.lngVisible\" (ngModelChange)=\"change()\"></nz-switch>\n                </div>\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">纬线图层：</div>\n                    <nz-switch class=\"form-control\" [(ngModel)]=\"option.latVisible\" (ngModelChange)=\"change()\"></nz-switch>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "XUBb":
/*!***************************************************!*\
  !*** ./src/app/main/layer/graphic.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJncmFwaGljLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "geLW":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/layer/feature.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"system-content\" style=\"grid-template-columns: 1fr\">\n    <div class=\"system-body\" >\n        <green-map-control (mapInit)=\"mapInit($event)\"></green-map-control>\n        <div class=\"panel\" style=\"position: absolute; top: 15px; right: 15px; z-index: 1000;\">\n            <div class=\"panel-heading\">\n                <div class=\"panel-title\">配置</div>\n            </div>\n            <div class=\"panel-body\" style=\"display: grid; grid-template-columns: 1fr 1fr; grid-gap: 10px; width: 540px\" *ngIf=\"option\">\n                <div class=\"input-group\" style=\"text-align: center;\">\n                    <div class=\"input-group-addon\">显示：</div>\n                    <nz-switch class=\"form-control\" [(ngModel)]=\"option.visible\" (ngModelChange)=\"change()\"></nz-switch>\n                </div>\n                <div class=\"input-group\"></div>\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">边框色：</div>\n                    <input class=\"form-control\" type=\"color\" name=\"strokeColor\" [(ngModel)]=\"option.strokeStyle\"  (ngModelChange)=\"change()\">\n                </div>\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">填充色：</div>\n                    <input class=\"form-control\" type=\"color\" name=\"fillColor\" [(ngModel)]=\"option.fillStyle\"  (ngModelChange)=\"change()\">\n                </div>\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">最小级别：</div>\n                    <input class=\"form-control\" type=\"number\" name=\"minZoom\" [(ngModel)]=\"option.minZoom\"  autocomplete=\"off\" (ngModelChange)=\"change()\" min=\"3\" [max]=\"option.maxZoom\" step=\"1\">\n                </div>\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">最大级别：</div>\n                    <input class=\"form-control\" type=\"number\" name=\"maxZoom\" [(ngModel)]=\"option.maxZoom\"  autocomplete=\"off\" (ngModelChange)=\"change()\" [min]=\"option.minZoom\" max=\"20\" step=\"1\">\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "kPVF":
/*!*************************************************!*\
  !*** ./src/app/main/layer/feature.component.ts ***!
  \*************************************************/
/*! exports provided: FeatureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureComponent", function() { return FeatureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_feature_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./feature.component.html */ "geLW");
/* harmony import */ var _feature_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feature.component.scss */ "+JG/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _core_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/config.service */ "8WNu");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var green_gis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! green-gis */ "9/H4");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "IheW");








let FeatureComponent = class FeatureComponent {
    constructor(router, configService, http) {
        this.router = router;
        this.configService = configService;
        this.http = http;
        this.option = {
            visible: true,
            strokeStyle: "#ff0000",
            fillStyle: "#ff0000",
            minZoom: 5,
            maxZoom: 20
        };
    }
    ngOnInit() {
    }
    /////////////////以下界面交互/////////////////////
    mapInit(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.map = event.map;
            this.http.get("assets/geojson/chongqing.json")
                .subscribe((data) => {
                const featureClass = new green_gis__WEBPACK_IMPORTED_MODULE_6__["FeatureClass"](green_gis__WEBPACK_IMPORTED_MODULE_6__["GeometryType"].Polygon);
                featureClass.loadGeoJSON(data);
                this.featureLayer = new green_gis__WEBPACK_IMPORTED_MODULE_6__["FeatureLayer"]();
                this.featureLayer.featureClass = featureClass;
                this.renderer = new green_gis__WEBPACK_IMPORTED_MODULE_6__["SimpleRenderer"]();
                this.renderer.symbol = new green_gis__WEBPACK_IMPORTED_MODULE_6__["SimpleFillSymbol"]();
                this.featureLayer.renderer = this.renderer;
                this.featureLayer.zoom = [5, 20];
                this.map.addLayer(this.featureLayer);
                this.map.setView([107.777, 29.809], 7);
            });
        });
    }
    change() {
        if (this.featureLayer && this.renderer) {
            this.featureLayer.visible = this.option.visible;
            this.featureLayer.zoom = [this.option.minZoom, this.option.maxZoom];
            this.renderer.symbol.strokeStyle = this.option.strokeStyle;
            this.renderer.symbol.fillStyle = this.option.fillStyle;
            this.map.redraw();
        }
    }
};
FeatureComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _core_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] }
];
FeatureComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-feature',
        template: _raw_loader_feature_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_feature_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FeatureComponent);



/***/ }),

/***/ "rqzQ":
/*!*************************************************!*\
  !*** ./src/app/main/layer/graphic.component.ts ***!
  \*************************************************/
/*! exports provided: GraphicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GraphicComponent", function() { return GraphicComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_graphic_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./graphic.component.html */ "Cj10");
/* harmony import */ var _graphic_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./graphic.component.scss */ "XUBb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _core_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/config.service */ "8WNu");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var green_gis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! green-gis */ "9/H4");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "IheW");








let GraphicComponent = class GraphicComponent {
    constructor(router, configService, http) {
        this.router = router;
        this.configService = configService;
        this.http = http;
        this.option = {
            latVisible: true,
            lngVisible: true,
            pointVisible: true
        };
    }
    ngOnInit() {
    }
    /////////////////以下界面交互/////////////////////
    mapInit(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.map = event.map;
            //画经线
            const lngSymbol = new green_gis__WEBPACK_IMPORTED_MODULE_6__["SimpleLineSymbol"]();
            lngSymbol.strokeStyle = "#0000ff";
            this.lngLayer = new green_gis__WEBPACK_IMPORTED_MODULE_6__["GraphicLayer"]();
            this.map.addLayer(this.lngLayer);
            for (let i = -180; i <= 180; i = i + 10) {
                const line = new green_gis__WEBPACK_IMPORTED_MODULE_6__["Polyline"]([[i, -80], [i, 80]]);
                const graphic = new green_gis__WEBPACK_IMPORTED_MODULE_6__["Graphic"](line, lngSymbol);
                this.lngLayer.add(graphic);
            }
            //画纬线
            const latSymbol = new green_gis__WEBPACK_IMPORTED_MODULE_6__["SimpleLineSymbol"]();
            latSymbol.strokeStyle = "#4d9221";
            this.latLayer = new green_gis__WEBPACK_IMPORTED_MODULE_6__["GraphicLayer"]();
            this.map.addLayer(this.latLayer);
            for (let j = -80; j <= 80; j = j + 10) {
                const line = new green_gis__WEBPACK_IMPORTED_MODULE_6__["Polyline"]([[-180, j], [180, j]]);
                const graphic = new green_gis__WEBPACK_IMPORTED_MODULE_6__["Graphic"](line, latSymbol);
                this.latLayer.add(graphic);
            }
            //画经纬线交点
            const pointSymbol = new green_gis__WEBPACK_IMPORTED_MODULE_6__["SimplePointSymbol"]();
            pointSymbol.radius = 5;
            pointSymbol.fillStyle = "#de77ae";
            pointSymbol.strokeStyle = "#c51b7d";
            this.pointLayer = new green_gis__WEBPACK_IMPORTED_MODULE_6__["GraphicLayer"]();
            this.map.addLayer(this.pointLayer);
            for (let i = -180; i <= 180; i = i + 10) {
                for (let j = -90; j <= 90; j = j + 10) {
                    const point = new green_gis__WEBPACK_IMPORTED_MODULE_6__["Point"](i, j);
                    const graphic = new green_gis__WEBPACK_IMPORTED_MODULE_6__["Graphic"](point, pointSymbol);
                    this.pointLayer.add(graphic);
                }
            }
            this.map.setView([0, 0], 3);
        });
    }
    change() {
        if (this.lngLayer && this.latLayer && this.pointLayer) {
            this.lngLayer.visible = this.option.lngVisible;
            this.latLayer.visible = this.option.latVisible;
            this.pointLayer.visible = this.option.pointVisible;
            this.map.redraw();
        }
    }
};
GraphicComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _core_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] }
];
GraphicComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-graphic',
        template: _raw_loader_graphic_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_graphic_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], GraphicComponent);



/***/ })

}]);
//# sourceMappingURL=main-layer-layer-module-es2015.js.map