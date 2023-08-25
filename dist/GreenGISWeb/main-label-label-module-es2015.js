(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-label-label-module"],{

/***/ "08S8":
/*!**************************************************!*\
  !*** ./src/app/main/label/distance.component.ts ***!
  \**************************************************/
/*! exports provided: DistanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistanceComponent", function() { return DistanceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_distance_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./distance.component.html */ "JPsP");
/* harmony import */ var _distance_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./distance.component.scss */ "36Bf");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _core_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/config.service */ "8WNu");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var green_gis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! green-gis */ "9/H4");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "IheW");








let DistanceComponent = class DistanceComponent {
    constructor(router, configService, http) {
        this.router = router;
        this.configService = configService;
        this.http = http;
        this.option = {
            labeled: true,
            label: {
                strokeStyle: "#ff0000",
                fillStyle: "#ffffff",
                offsetX: 0,
                offsetY: 0,
                fontColor: "#ff0000",
                fontSize: 12,
                placement: "BOTTOM",
                padding: 5
            }
        };
    }
    ngOnInit() {
    }
    /////////////////以下界面交互/////////////////////
    mapInit(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.map = event.map;
            this.http.get("assets/geojson/junction.json")
                .subscribe((data) => {
                const featureClass = new green_gis__WEBPACK_IMPORTED_MODULE_6__["FeatureClass"](green_gis__WEBPACK_IMPORTED_MODULE_6__["GeometryType"].Point);
                featureClass.loadGeoJSON(data);
                this.featureLayer = new green_gis__WEBPACK_IMPORTED_MODULE_6__["FeatureLayer"]();
                this.featureLayer.featureClass = featureClass;
                const field2 = new green_gis__WEBPACK_IMPORTED_MODULE_6__["Field"]();
                field2.name = "NAME";
                field2.type = green_gis__WEBPACK_IMPORTED_MODULE_6__["FieldType"].String;
                const renderer = new green_gis__WEBPACK_IMPORTED_MODULE_6__["CategoryRenderer"]();
                renderer.generate(featureClass, field2);
                this.featureLayer.renderer = renderer;
                this.label = new green_gis__WEBPACK_IMPORTED_MODULE_6__["Label"]();
                const symbol = new green_gis__WEBPACK_IMPORTED_MODULE_6__["SimpleTextSymbol"]();
                symbol.pointSymbolWidth = 12; //diameter
                symbol.pointSymbolHeight = 12; //diameter
                this.label.field = field2;
                this.label.symbol = symbol;
                this.label.collision = new green_gis__WEBPACK_IMPORTED_MODULE_6__["SimpleCollision"]();
                this.featureLayer.label = this.label;
                this.featureLayer.labeled = this.option.labeled;
                this.featureLayer.zoom = [12, 20];
                this.map.addLayer(this.featureLayer);
                this.map.setView([109.519, 18.271], 13);
            });
        });
    }
    switch() {
        this.featureLayer.labeled = this.option.labeled;
        this.map.redraw();
    }
    change() {
        if (this.label && this.label.symbol) {
            this.label.symbol.strokeStyle = this.option.label.strokeStyle;
            this.label.symbol.fillStyle = this.option.label.fillStyle;
            this.label.symbol.fontColor = this.option.label.fontColor;
            this.label.symbol.fontSize = this.option.label.fontSize;
            this.label.symbol.placement = this.option.label.placement;
            this.label.symbol.padding = this.option.label.padding;
            this.label.symbol.offsetX = this.option.label.offsetX;
            this.label.symbol.offsetY = this.option.label.offsetY;
            this.map.redraw();
        }
    }
};
DistanceComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _core_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] }
];
DistanceComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-distance',
        template: _raw_loader_distance_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_distance_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DistanceComponent);



/***/ }),

/***/ "36Bf":
/*!****************************************************!*\
  !*** ./src/app/main/label/distance.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkaXN0YW5jZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "9bwE":
/*!********************************************!*\
  !*** ./src/app/main/label/label.module.ts ***!
  \********************************************/
/*! exports provided: LabelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelModule", function() { return LabelModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _simple_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./simple.component */ "exOU");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/core.module */ "pKmL");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "YCQm");
/* harmony import */ var _distance_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./distance.component */ "08S8");
/* harmony import */ var _cover_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cover.component */ "GQqY");








const routes = [
    {
        path: 'simple',
        component: _simple_component__WEBPACK_IMPORTED_MODULE_2__["SimpleComponent"]
    },
    {
        path: 'distance',
        component: _distance_component__WEBPACK_IMPORTED_MODULE_6__["DistanceComponent"]
    },
    {
        path: 'cover',
        component: _cover_component__WEBPACK_IMPORTED_MODULE_7__["CoverComponent"]
    }
];
let LabelModule = class LabelModule {
};
LabelModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"].forChild(),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ],
        declarations: [
            _simple_component__WEBPACK_IMPORTED_MODULE_2__["SimpleComponent"], _distance_component__WEBPACK_IMPORTED_MODULE_6__["DistanceComponent"], _cover_component__WEBPACK_IMPORTED_MODULE_7__["CoverComponent"]
        ]
    })
], LabelModule);



/***/ }),

/***/ "GQqY":
/*!***********************************************!*\
  !*** ./src/app/main/label/cover.component.ts ***!
  \***********************************************/
/*! exports provided: CoverComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoverComponent", function() { return CoverComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cover_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cover.component.html */ "kG5p");
/* harmony import */ var _cover_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cover.component.scss */ "RMGc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _core_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/config.service */ "8WNu");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var green_gis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! green-gis */ "9/H4");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "IheW");








let CoverComponent = class CoverComponent {
    constructor(router, configService, http) {
        this.router = router;
        this.configService = configService;
        this.http = http;
        this.option = {
            labeled: true,
            label: {
                strokeStyle: "#ff0000",
                fillStyle: "#ffffff",
                offsetX: 12,
                offsetY: 12,
                fontColor: "#ff0000",
                fontSize: 12,
                placement: "BOTTOM",
                padding: 5
            }
        };
    }
    ngOnInit() {
    }
    /////////////////以下界面交互/////////////////////
    mapInit(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.map = event.map;
            this.http.get("assets/geojson/junction.json")
                .subscribe((data) => {
                const featureClass = new green_gis__WEBPACK_IMPORTED_MODULE_6__["FeatureClass"](green_gis__WEBPACK_IMPORTED_MODULE_6__["GeometryType"].Point);
                featureClass.loadGeoJSON(data);
                this.featureLayer = new green_gis__WEBPACK_IMPORTED_MODULE_6__["FeatureLayer"]();
                this.featureLayer.featureClass = featureClass;
                const field2 = new green_gis__WEBPACK_IMPORTED_MODULE_6__["Field"]();
                field2.name = "NAME";
                field2.type = green_gis__WEBPACK_IMPORTED_MODULE_6__["FieldType"].String;
                const renderer = new green_gis__WEBPACK_IMPORTED_MODULE_6__["CategoryRenderer"]();
                renderer.generate(featureClass, field2);
                this.featureLayer.renderer = renderer;
                this.label = new green_gis__WEBPACK_IMPORTED_MODULE_6__["Label"]();
                const symbol = new green_gis__WEBPACK_IMPORTED_MODULE_6__["SimpleTextSymbol"]();
                symbol.pointSymbolWidth = 12; //diameter
                symbol.pointSymbolHeight = 12; //diameter
                this.label.field = field2;
                this.label.symbol = symbol;
                this.label.collision = new green_gis__WEBPACK_IMPORTED_MODULE_6__["CoverCollision"]();
                this.featureLayer.label = this.label;
                this.featureLayer.labeled = this.option.labeled;
                this.featureLayer.zoom = [12, 20];
                this.map.addLayer(this.featureLayer);
                this.map.setView([109.519, 18.271], 13);
            });
        });
    }
    switch() {
        this.featureLayer.labeled = this.option.labeled;
        this.map.redraw();
    }
    change() {
        if (this.label && this.label.symbol) {
            this.label.symbol.strokeStyle = this.option.label.strokeStyle;
            this.label.symbol.fillStyle = this.option.label.fillStyle;
            this.label.symbol.fontColor = this.option.label.fontColor;
            this.label.symbol.fontSize = this.option.label.fontSize;
            this.label.symbol.placement = this.option.label.placement;
            this.label.symbol.padding = this.option.label.padding;
            this.label.symbol.pointSymbolWidth = this.option.label.offsetX;
            this.label.symbol.pointSymbolHeight = this.option.label.offsetY;
            this.map.redraw();
        }
    }
};
CoverComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _core_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] }
];
CoverComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cover',
        template: _raw_loader_cover_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cover_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CoverComponent);



/***/ }),

/***/ "JPsP":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/label/distance.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"system-content\" style=\"grid-template-columns: 1fr\">\n    <div class=\"system-body\" >\n        <green-map-control (mapInit)=\"mapInit($event)\"></green-map-control>\n        <div class=\"panel\" style=\"position: absolute; top: 15px; right: 15px; z-index: 1000;\">\n            <div class=\"panel-heading\">\n                <div class=\"panel-title\">配置</div>\n            </div>\n            <div class=\"panel-body\" style=\"display: grid; grid-template-columns: 1fr 1fr; grid-gap: 10px; width: 540px\">\n                <div class=\"input-group\" style=\"text-align: center;\">\n                    <div class=\"input-group-addon\">标注：</div>\n                    <nz-switch class=\"form-control\" [(ngModel)]=\"option.labeled\" (ngModelChange)=\"switch()\"></nz-switch>\n                </div>\n                <div class=\"input-group\"></div>\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">边框色：</div>\n                    <input class=\"form-control\" type=\"color\" name=\"strokeColor\" [(ngModel)]=\"option.label.strokeStyle\"  (ngModelChange)=\"change()\">\n                </div>\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">填充色：</div>\n                    <input class=\"form-control\" type=\"color\" name=\"fillColor\" [(ngModel)]=\"option.label.fillStyle\"  (ngModelChange)=\"change()\">\n                </div>\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">字体颜色：</div>\n                    <input class=\"form-control\" type=\"color\" name=\"fontColor\" [(ngModel)]=\"option.label.fontColor\"  (ngModelChange)=\"change()\">\n                </div>\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">字体大小：</div>\n                    <input class=\"form-control\" type=\"number\" name=\"fontSize\" [(ngModel)]=\"option.label.fontSize\"  autocomplete=\"off\" (ngModelChange)=\"change()\" min=\"8\" max=\"20\" step=\"1\">\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "Km8x":
/*!**************************************************!*\
  !*** ./src/app/main/label/simple.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaW1wbGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "RMGc":
/*!*************************************************!*\
  !*** ./src/app/main/label/cover.component.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb3Zlci5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "exOU":
/*!************************************************!*\
  !*** ./src/app/main/label/simple.component.ts ***!
  \************************************************/
/*! exports provided: SimpleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleComponent", function() { return SimpleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_simple_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./simple.component.html */ "lB6H");
/* harmony import */ var _simple_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./simple.component.scss */ "Km8x");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _core_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/config.service */ "8WNu");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var green_gis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! green-gis */ "9/H4");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "IheW");








let SimpleComponent = class SimpleComponent {
    constructor(router, configService, http) {
        this.router = router;
        this.configService = configService;
        this.http = http;
        this.option = {
            labeled: true,
            label: {
                strokeStyle: "#ff0000",
                fillStyle: "#ffffff",
                offsetX: 0,
                offsetY: 0,
                fontColor: "#ff0000",
                fontSize: 12,
                placement: "BOTTOM",
                padding: 5
            }
        };
    }
    ngOnInit() {
    }
    /////////////////以下界面交互/////////////////////
    mapInit(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.map = event.map;
            this.http.get("assets/geojson/junction.json")
                .subscribe((data) => {
                const featureClass = new green_gis__WEBPACK_IMPORTED_MODULE_6__["FeatureClass"](green_gis__WEBPACK_IMPORTED_MODULE_6__["GeometryType"].Point);
                featureClass.loadGeoJSON(data);
                this.featureLayer = new green_gis__WEBPACK_IMPORTED_MODULE_6__["FeatureLayer"]();
                this.featureLayer.featureClass = featureClass;
                const field2 = new green_gis__WEBPACK_IMPORTED_MODULE_6__["Field"]();
                field2.name = "NAME";
                field2.type = green_gis__WEBPACK_IMPORTED_MODULE_6__["FieldType"].String;
                const renderer = new green_gis__WEBPACK_IMPORTED_MODULE_6__["CategoryRenderer"]();
                renderer.generate(featureClass, field2);
                this.featureLayer.renderer = renderer;
                this.label = new green_gis__WEBPACK_IMPORTED_MODULE_6__["Label"]();
                const symbol = new green_gis__WEBPACK_IMPORTED_MODULE_6__["SimpleTextSymbol"]();
                symbol.pointSymbolWidth = 12; //diameter
                symbol.pointSymbolHeight = 12; //diameter
                this.label.field = field2;
                this.label.symbol = symbol;
                this.label.collision = new green_gis__WEBPACK_IMPORTED_MODULE_6__["NullCollision"]();
                this.featureLayer.label = this.label;
                this.featureLayer.labeled = this.option.labeled;
                this.featureLayer.zoom = [12, 20];
                this.map.addLayer(this.featureLayer);
                this.map.setView([109.519, 18.271], 13);
            });
        });
    }
    switch() {
        this.featureLayer.labeled = this.option.labeled;
        this.map.redraw();
    }
    change() {
        if (this.label && this.label.symbol) {
            this.label.symbol.strokeStyle = this.option.label.strokeStyle;
            this.label.symbol.fillStyle = this.option.label.fillStyle;
            this.label.symbol.fontColor = this.option.label.fontColor;
            this.label.symbol.fontSize = this.option.label.fontSize;
            this.label.symbol.placement = this.option.label.placement;
            this.label.symbol.padding = this.option.label.padding;
            this.label.symbol.offsetX = this.option.label.offsetX;
            this.label.symbol.offsetY = this.option.label.offsetY;
            this.map.redraw();
        }
    }
};
SimpleComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _core_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] }
];
SimpleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-simple',
        template: _raw_loader_simple_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_simple_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SimpleComponent);



/***/ }),

/***/ "kG5p":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/label/cover.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"system-content\" style=\"grid-template-columns: 1fr\">\n    <div class=\"system-body\" >\n        <green-map-control (mapInit)=\"mapInit($event)\"></green-map-control>\n        <div class=\"panel\" style=\"position: absolute; top: 15px; right: 15px; z-index: 1000;\">\n            <div class=\"panel-heading\">\n                <div class=\"panel-title\">配置</div>\n            </div>\n            <div class=\"panel-body\" style=\"display: grid; grid-template-columns: 1fr 1fr; grid-gap: 10px; width: 540px\">\n                <div class=\"input-group\" style=\"text-align: center;\">\n                    <div class=\"input-group-addon\">标注：</div>\n                    <nz-switch class=\"form-control\" [(ngModel)]=\"option.labeled\" (ngModelChange)=\"switch()\"></nz-switch>\n                </div>\n                <div class=\"input-group\"></div>\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">边框色：</div>\n                    <input class=\"form-control\" type=\"color\" name=\"strokeColor\" [(ngModel)]=\"option.label.strokeStyle\"  (ngModelChange)=\"change()\">\n                </div>\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">填充色：</div>\n                    <input class=\"form-control\" type=\"color\" name=\"fillColor\" [(ngModel)]=\"option.label.fillStyle\"  (ngModelChange)=\"change()\">\n                </div>\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">字体颜色：</div>\n                    <input class=\"form-control\" type=\"color\" name=\"fontColor\" [(ngModel)]=\"option.label.fontColor\"  (ngModelChange)=\"change()\">\n                </div>\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">字体大小：</div>\n                    <input class=\"form-control\" type=\"number\" name=\"fontSize\" [(ngModel)]=\"option.label.fontSize\"  autocomplete=\"off\" (ngModelChange)=\"change()\" min=\"8\" max=\"20\" step=\"1\">\n                </div>\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">标注方位：</div>\n                    <select class=\"form-control\" name=\"placement\" [(ngModel)]=\"option.label.placement\" (ngModelChange)=\"change()\">\n                        <option value=\"TOP\">TOP</option>\n                        <option value=\"BOTTOM\">BOTTOM</option>\n                        <option value=\"LEFT\">LEFT</option>\n                        <option value=\"RIGHT\">RIGHT</option>\n                    </select>\n                </div>\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">周边留白：</div>\n                    <input class=\"form-control\" type=\"number\" name=\"padding\" [(ngModel)]=\"option.label.padding\"  autocomplete=\"off\" (ngModelChange)=\"change()\" min=\"2\" max=\"10\" step=\"1\">\n                </div>\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">X偏移：</div>\n                    <input class=\"form-control\" type=\"number\" name=\"offsetX\" [(ngModel)]=\"option.label.offsetX\"  autocomplete=\"off\" (ngModelChange)=\"change()\" min=\"0\" max=\"20\" step=\"1\">\n                </div>\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">Y偏移：</div>\n                    <input class=\"form-control\" type=\"number\" name=\"offsetY\" [(ngModel)]=\"option.label.offsetY\"  autocomplete=\"off\" (ngModelChange)=\"change()\" min=\"0\" max=\"20\" step=\"1\">\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "lB6H":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/label/simple.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"system-content\" style=\"grid-template-columns: 1fr\">\n    <div class=\"system-body\" >\n        <green-map-control (mapInit)=\"mapInit($event)\"></green-map-control>\n        <div class=\"panel\" style=\"position: absolute; top: 15px; right: 15px; z-index: 1000;\">\n            <div class=\"panel-heading\">\n                <div class=\"panel-title\">配置</div>\n            </div>\n            <div class=\"panel-body\" style=\"display: grid; grid-template-columns: 1fr 1fr; grid-gap: 10px; width: 540px\">\n                <div class=\"input-group\" style=\"text-align: center;\">\n                    <div class=\"input-group-addon\">标注：</div>\n                    <nz-switch class=\"form-control\" [(ngModel)]=\"option.labeled\" (ngModelChange)=\"switch()\"></nz-switch>\n                </div>\n                <div class=\"input-group\"></div>\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">边框色：</div>\n                    <input class=\"form-control\" type=\"color\" name=\"strokeColor\" [(ngModel)]=\"option.label.strokeStyle\"  (ngModelChange)=\"change()\">\n                </div>\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">填充色：</div>\n                    <input class=\"form-control\" type=\"color\" name=\"fillColor\" [(ngModel)]=\"option.label.fillStyle\"  (ngModelChange)=\"change()\">\n                </div>\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">字体颜色：</div>\n                    <input class=\"form-control\" type=\"color\" name=\"fontColor\" [(ngModel)]=\"option.label.fontColor\"  (ngModelChange)=\"change()\">\n                </div>\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">字体大小：</div>\n                    <input class=\"form-control\" type=\"number\" name=\"fontSize\" [(ngModel)]=\"option.label.fontSize\"  autocomplete=\"off\" (ngModelChange)=\"change()\" min=\"8\" max=\"20\" step=\"1\">\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ })

}]);
//# sourceMappingURL=main-label-label-module-es2015.js.map