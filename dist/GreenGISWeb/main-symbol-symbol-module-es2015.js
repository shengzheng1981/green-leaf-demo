(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-symbol-symbol-module"],{

/***/ "/Iic":
/*!**********************************************!*\
  !*** ./src/app/main/symbol/symbol.module.ts ***!
  \**********************************************/
/*! exports provided: SymbolModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SymbolModule", function() { return SymbolModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/core.module */ "pKmL");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "YCQm");
/* harmony import */ var _point_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./point.component */ "HWq6");
/* harmony import */ var _marker_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./marker.component */ "hv47");
/* harmony import */ var _letter_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./letter.component */ "3wLN");
/* harmony import */ var _arrow_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./arrow.component */ "BqLN");
/* harmony import */ var _custom_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./custom.component */ "dJlj");










const routes = [
    {
        path: 'point',
        component: _point_component__WEBPACK_IMPORTED_MODULE_5__["PointComponent"]
    },
    {
        path: 'marker',
        component: _marker_component__WEBPACK_IMPORTED_MODULE_6__["MarkerComponent"]
    },
    {
        path: 'letter',
        component: _letter_component__WEBPACK_IMPORTED_MODULE_7__["LetterComponent"]
    },
    {
        path: 'arrow',
        component: _arrow_component__WEBPACK_IMPORTED_MODULE_8__["ArrowComponent"]
    },
    {
        path: 'custom',
        component: _custom_component__WEBPACK_IMPORTED_MODULE_9__["CustomComponent"]
    }
];
let SymbolModule = class SymbolModule {
};
SymbolModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"].forChild(),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        declarations: [
            _point_component__WEBPACK_IMPORTED_MODULE_5__["PointComponent"], _marker_component__WEBPACK_IMPORTED_MODULE_6__["MarkerComponent"], _letter_component__WEBPACK_IMPORTED_MODULE_7__["LetterComponent"], _arrow_component__WEBPACK_IMPORTED_MODULE_8__["ArrowComponent"], _custom_component__WEBPACK_IMPORTED_MODULE_9__["CustomComponent"]
        ]
    })
], SymbolModule);



/***/ }),

/***/ "/UfK":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/symbol/marker.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"system-content\" style=\"grid-template-columns: 1fr\">\n    <div class=\"system-body\" >\n        <green-map-control (mapInit)=\"mapInit($event)\"></green-map-control>\n        <div class=\"panel\" style=\"position: absolute; top: 15px; right: 15px; z-index: 1000;\">\n            <div class=\"panel-heading\">\n                <div class=\"panel-title\">配置</div>\n            </div>\n            <div class=\"panel-body\" style=\"display: grid; grid-template-columns: 1fr 1fr; grid-gap: 10px; width: 540px\" *ngIf=\"option\">\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">宽度：</div>\n                    <input class=\"form-control\" type=\"number\" name=\"width\" [(ngModel)]=\"option.width\"  autocomplete=\"off\" (ngModelChange)=\"change()\" min=\"4\" [max]=\"64\" step=\"1\">\n                </div>\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">高度：</div>\n                    <input class=\"form-control\" type=\"number\" name=\"height\" [(ngModel)]=\"option.height\"  autocomplete=\"off\" (ngModelChange)=\"change()\" min=\"4\" [max]=\"64\" step=\"1\">\n                </div>\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">X偏移：</div>\n                    <input class=\"form-control\" type=\"number\" name=\"offsetX\" [(ngModel)]=\"option.offsetX\"  autocomplete=\"off\" (ngModelChange)=\"change()\" min=\"-64\" [max]=\"64\" step=\"1\">\n                </div>\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">Y偏移：</div>\n                    <input class=\"form-control\" type=\"number\" name=\"offsetY\" [(ngModel)]=\"option.offsetY\"  autocomplete=\"off\" (ngModelChange)=\"change()\" min=\"-64\" [max]=\"64\" step=\"1\">\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "3wLN":
/*!*************************************************!*\
  !*** ./src/app/main/symbol/letter.component.ts ***!
  \*************************************************/
/*! exports provided: LetterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LetterComponent", function() { return LetterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_letter_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./letter.component.html */ "W+nK");
/* harmony import */ var _letter_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./letter.component.scss */ "vX85");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _core_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/config.service */ "8WNu");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var green_gis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! green-gis */ "9/H4");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "IheW");








let LetterComponent = class LetterComponent {
    constructor(router, configService, http) {
        this.router = router;
        this.configService = configService;
        this.http = http;
        this.option = {
            lng: 116.397411,
            lat: 39.909186,
            strokeStyle: "#ffffff",
            fillStyle: "#ff0000",
            fontColor: "#ffffff",
            fontSize: 12,
            radius: 10,
            letter: "A"
        };
    }
    ngOnInit() {
    }
    /////////////////以下界面交互/////////////////////
    mapInit(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.map = event.map;
            this.symbol = new green_gis__WEBPACK_IMPORTED_MODULE_6__["LetterSymbol"]();
            this.symbol.strokeStyle = this.option.strokeStyle;
            this.symbol.fillStyle = this.option.fillStyle;
            this.symbol.fontColor = this.option.fontColor;
            this.symbol.fontSize = this.option.fontSize;
            this.symbol.radius = this.option.radius;
            this.symbol.letter = this.option.letter;
            const point = new green_gis__WEBPACK_IMPORTED_MODULE_6__["Point"](this.option.lng, this.option.lat);
            const graphic = new green_gis__WEBPACK_IMPORTED_MODULE_6__["Graphic"](point, this.symbol);
            this.map.addGraphic(graphic);
            this.map.setView([this.option.lng, this.option.lat], 12);
        });
    }
    change() {
        if (this.symbol) {
            this.symbol.strokeStyle = this.option.strokeStyle;
            this.symbol.fillStyle = this.option.fillStyle;
            this.symbol.fontColor = this.option.fontColor;
            this.symbol.fontSize = this.option.fontSize;
            this.symbol.radius = this.option.radius;
            this.symbol.letter = this.option.letter;
            this.map.redraw();
        }
    }
};
LetterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _core_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] }
];
LetterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-letter',
        template: _raw_loader_letter_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_letter_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LetterComponent);



/***/ }),

/***/ "9P5o":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/symbol/arrow.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"system-content\" style=\"grid-template-columns: 1fr\">\n    <div class=\"system-body\" >\n        <green-map-control (mapInit)=\"mapInit($event)\"></green-map-control>\n        <div class=\"panel\" style=\"position: absolute; top: 15px; right: 15px; z-index: 1000;\">\n            <div class=\"panel-heading\">\n                <div class=\"panel-title\">配置</div>\n            </div>\n            <div class=\"panel-body\" style=\"display: grid; grid-template-columns: 1fr 1fr; grid-gap: 10px; width: 540px\" *ngIf=\"option\">\n                <div class=\"input-group\" style=\"text-align: center;\">\n                    <div class=\"input-group-addon\">显示：</div>\n                    <nz-switch class=\"form-control\" [(ngModel)]=\"option.visible\" (ngModelChange)=\"change()\"></nz-switch>\n                </div>\n                <div class=\"input-group\"></div>\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">颜色：</div>\n                    <input class=\"form-control\" type=\"color\" name=\"strokeColor\" [(ngModel)]=\"option.strokeStyle\"  (ngModelChange)=\"change()\">\n                </div>\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">线宽：</div>\n                    <input class=\"form-control\" type=\"number\" name=\"lineWidth\" [(ngModel)]=\"option.lineWidth\"  autocomplete=\"off\" (ngModelChange)=\"change()\" min=\"1\" [max]=\"8\" step=\"1\">\n                </div>\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">翼长：</div>\n                    <input class=\"form-control\" type=\"number\" name=\"arrowLength\" [(ngModel)]=\"option.arrowLength\"  autocomplete=\"off\" (ngModelChange)=\"change()\" min=\"4\" [max]=\"20\" step=\"1\">\n                </div>\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\" nz-tooltip nzTitle=\"显示箭头的最短线长\">最短线长：</div>\n                    <input class=\"form-control\" type=\"number\" name=\"minLength\" [(ngModel)]=\"option.minLength\"  autocomplete=\"off\" (ngModelChange)=\"change()\" min=\"30\" [max]=\"100\" step=\"1\">\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "BqLN":
/*!************************************************!*\
  !*** ./src/app/main/symbol/arrow.component.ts ***!
  \************************************************/
/*! exports provided: ArrowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrowComponent", function() { return ArrowComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_arrow_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./arrow.component.html */ "9P5o");
/* harmony import */ var _arrow_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./arrow.component.scss */ "nBon");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _core_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/config.service */ "8WNu");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var green_gis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! green-gis */ "9/H4");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "IheW");








let ArrowComponent = class ArrowComponent {
    constructor(router, configService, http) {
        this.router = router;
        this.configService = configService;
        this.http = http;
        this.option = {
            visible: true,
            strokeStyle: "#ff0000",
            lineWidth: 3,
            minLength: 50,
            arrowLength: 10,
            arrowAngle: Math.PI / 6
        };
    }
    ngOnInit() {
    }
    /////////////////以下界面交互/////////////////////
    mapInit(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.map = event.map;
            this.http.get("assets/geojson/pipe.json")
                .subscribe((data) => {
                const featureClass = new green_gis__WEBPACK_IMPORTED_MODULE_6__["FeatureClass"](green_gis__WEBPACK_IMPORTED_MODULE_6__["GeometryType"].Polyline);
                featureClass.loadGeoJSON(data);
                this.featureLayer = new green_gis__WEBPACK_IMPORTED_MODULE_6__["FeatureLayer"]();
                this.featureLayer.featureClass = featureClass;
                this.renderer = new green_gis__WEBPACK_IMPORTED_MODULE_6__["SimpleRenderer"]();
                const symbol = new green_gis__WEBPACK_IMPORTED_MODULE_6__["ArrowSymbol"]();
                symbol.lineWidth = this.option.lineWidth;
                symbol.strokeStyle = this.option.strokeStyle;
                symbol.minLength = this.option.minLength;
                symbol.arrowLength = this.option.arrowLength;
                this.renderer.symbol = symbol;
                this.featureLayer.renderer = this.renderer;
                this.featureLayer.zoom = [7, 20];
                this.map.addLayer(this.featureLayer);
                this.map.setView([109.519, 18.271], 13);
            });
        });
    }
    change() {
        if (this.featureLayer && this.renderer) {
            this.featureLayer.visible = this.option.visible;
            this.renderer.symbol.lineWidth = this.option.lineWidth;
            this.renderer.symbol.strokeStyle = this.option.strokeStyle;
            this.renderer.symbol.minLength = this.option.minLength;
            this.renderer.symbol.arrowLength = this.option.arrowLength;
            this.map.redraw();
        }
    }
};
ArrowComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _core_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] }
];
ArrowComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-arrow',
        template: _raw_loader_arrow_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_arrow_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ArrowComponent);



/***/ }),

/***/ "HWq6":
/*!************************************************!*\
  !*** ./src/app/main/symbol/point.component.ts ***!
  \************************************************/
/*! exports provided: PointComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointComponent", function() { return PointComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_point_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./point.component.html */ "LciP");
/* harmony import */ var _point_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./point.component.scss */ "dizl");
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
        this.option = {
            visible: true,
            strokeStyle: "#ff0000",
            fillStyle: "#ff0000",
            radius: 6
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
                this.renderer = new green_gis__WEBPACK_IMPORTED_MODULE_6__["SimpleRenderer"]();
                this.renderer.symbol = new green_gis__WEBPACK_IMPORTED_MODULE_6__["SimplePointSymbol"]();
                this.featureLayer.renderer = this.renderer;
                this.featureLayer.zoom = [7, 20];
                this.map.addLayer(this.featureLayer);
                this.map.setView([109.519, 18.271], 13);
            });
        });
    }
    change() {
        if (this.featureLayer && this.renderer) {
            this.featureLayer.visible = this.option.visible;
            this.renderer.symbol.radius = this.option.radius;
            this.renderer.symbol.strokeStyle = this.option.strokeStyle;
            this.renderer.symbol.fillStyle = this.option.fillStyle;
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

/***/ "LciP":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/symbol/point.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"system-content\" style=\"grid-template-columns: 1fr\">\n    <div class=\"system-body\" >\n        <green-map-control (mapInit)=\"mapInit($event)\"></green-map-control>\n        <div class=\"panel\" style=\"position: absolute; top: 15px; right: 15px; z-index: 1000;\">\n            <div class=\"panel-heading\">\n                <div class=\"panel-title\">配置</div>\n            </div>\n            <div class=\"panel-body\" style=\"display: grid; grid-template-columns: 1fr 1fr; grid-gap: 10px; width: 540px\" *ngIf=\"option\">\n                <div class=\"input-group\" style=\"text-align: center;\">\n                    <div class=\"input-group-addon\">显示：</div>\n                    <nz-switch class=\"form-control\" [(ngModel)]=\"option.visible\" (ngModelChange)=\"change()\"></nz-switch>\n                </div>\n                <div class=\"input-group\"></div>\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">边框色：</div>\n                    <input class=\"form-control\" type=\"color\" name=\"strokeColor\" [(ngModel)]=\"option.strokeStyle\"  (ngModelChange)=\"change()\">\n                </div>\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">填充色：</div>\n                    <input class=\"form-control\" type=\"color\" name=\"fillColor\" [(ngModel)]=\"option.fillStyle\"  (ngModelChange)=\"change()\">\n                </div>\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">半径：</div>\n                    <input class=\"form-control\" type=\"number\" name=\"radius\" [(ngModel)]=\"option.radius\"  autocomplete=\"off\" (ngModelChange)=\"change()\" min=\"4\" [max]=\"16\" step=\"1\">\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "W+nK":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/symbol/letter.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"system-content\" style=\"grid-template-columns: 1fr\">\n    <div class=\"system-body\" >\n        <green-map-control (mapInit)=\"mapInit($event)\"></green-map-control>\n        <div class=\"panel\" style=\"position: absolute; top: 15px; right: 15px; z-index: 1000;\">\n            <div class=\"panel-heading\">\n                <div class=\"panel-title\">配置</div>\n            </div>\n            <div class=\"panel-body\" style=\"display: grid; grid-template-columns: 1fr 1fr; grid-gap: 10px; width: 540px\" *ngIf=\"option\">\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">边框色：</div>\n                    <input class=\"form-control\" type=\"color\" name=\"strokeColor\" [(ngModel)]=\"option.strokeStyle\"  (ngModelChange)=\"change()\">\n                </div>\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">填充色：</div>\n                    <input class=\"form-control\" type=\"color\" name=\"fillColor\" [(ngModel)]=\"option.fillStyle\"  (ngModelChange)=\"change()\">\n                </div>\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">字体颜色：</div>\n                    <input class=\"form-control\" type=\"color\" name=\"fontColor\" [(ngModel)]=\"option.fontColor\"  (ngModelChange)=\"change()\">\n                </div>\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">字体大小：</div>\n                    <input class=\"form-control\" type=\"number\" name=\"fontSize\" [(ngModel)]=\"option.fontSize\"  autocomplete=\"off\" (ngModelChange)=\"change()\" min=\"8\" [max]=\"18\" step=\"1\">\n                </div>\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">半径：</div>\n                    <input class=\"form-control\" type=\"number\" name=\"radius\" [(ngModel)]=\"option.radius\"  autocomplete=\"off\" (ngModelChange)=\"change()\" min=\"4\" [max]=\"20\" step=\"1\">\n                </div>\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">字母：</div>\n                    <input class=\"form-control\" type=\"string\" name=\"letter\" [(ngModel)]=\"option.letter\"  autocomplete=\"off\" (ngModelChange)=\"change()\">\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "dJlj":
/*!*************************************************!*\
  !*** ./src/app/main/symbol/custom.component.ts ***!
  \*************************************************/
/*! exports provided: CustomComponent, ShapeSymbol */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomComponent", function() { return CustomComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapeSymbol", function() { return ShapeSymbol; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_custom_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./custom.component.html */ "h0qh");
/* harmony import */ var _custom_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./custom.component.scss */ "pgpG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _core_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/config.service */ "8WNu");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var green_gis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! green-gis */ "9/H4");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "IheW");








let CustomComponent = class CustomComponent {
    constructor(router, configService, http) {
        this.router = router;
        this.configService = configService;
        this.http = http;
        this.option = {
            lng: 116.397411,
            lat: 39.909186,
            strokeStyle: "#ffffff",
            fillStyle: "#ff0000",
            radius: 10,
            sides: 4
        };
    }
    ngOnInit() {
    }
    /////////////////以下界面交互/////////////////////
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
        });
    }
    change() {
        if (this.symbol) {
            this.symbol.strokeStyle = this.option.strokeStyle;
            this.symbol.fillStyle = this.option.fillStyle;
            this.symbol.radius = this.option.radius;
            this.symbol.sides = this.option.sides;
            this.map.redraw();
        }
    }
};
CustomComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _core_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] }
];
CustomComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-custom',
        template: _raw_loader_custom_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_custom_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CustomComponent);

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

/***/ "dizl":
/*!**************************************************!*\
  !*** ./src/app/main/symbol/point.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb2ludC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "h0qh":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/symbol/custom.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"system-content\" style=\"grid-template-columns: 1fr\">\n    <div class=\"system-body\" >\n        <green-map-control (mapInit)=\"mapInit($event)\"></green-map-control>\n        <div class=\"panel\" style=\"position: absolute; top: 15px; right: 15px; z-index: 1000;\">\n            <div class=\"panel-heading\">\n                <div class=\"panel-title\">配置</div>\n            </div>\n            <div class=\"panel-body\" style=\"display: grid; grid-template-columns: 1fr 1fr; grid-gap: 10px; width: 540px\" *ngIf=\"option\">\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">边框色：</div>\n                    <input class=\"form-control\" type=\"color\" name=\"strokeColor\" [(ngModel)]=\"option.strokeStyle\"  (ngModelChange)=\"change()\">\n                </div>\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">填充色：</div>\n                    <input class=\"form-control\" type=\"color\" name=\"fillColor\" [(ngModel)]=\"option.fillStyle\"  (ngModelChange)=\"change()\">\n                </div>\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">半径：</div>\n                    <input class=\"form-control\" type=\"number\" name=\"radius\" [(ngModel)]=\"option.radius\"  autocomplete=\"off\" (ngModelChange)=\"change()\" min=\"4\" [max]=\"20\" step=\"1\">\n                </div>\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">边数：</div>\n                    <input class=\"form-control\" type=\"number\" name=\"sides\" [(ngModel)]=\"option.sides\"  autocomplete=\"off\" (ngModelChange)=\"change()\" min=\"3\" [max]=\"20\" step=\"1\">\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "hv47":
/*!*************************************************!*\
  !*** ./src/app/main/symbol/marker.component.ts ***!
  \*************************************************/
/*! exports provided: MarkerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MarkerComponent", function() { return MarkerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_marker_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./marker.component.html */ "/UfK");
/* harmony import */ var _marker_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./marker.component.scss */ "k0RK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _core_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/config.service */ "8WNu");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var green_gis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! green-gis */ "9/H4");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "IheW");








let MarkerComponent = class MarkerComponent {
    constructor(router, configService, http) {
        this.router = router;
        this.configService = configService;
        this.http = http;
        this.option = {
            lng: 116.397411,
            lat: 39.909186,
            width: 32,
            height: 32,
            offsetX: -16,
            offsetY: -32,
            url: "assets/img/marker.svg"
        };
    }
    ngOnInit() {
    }
    /////////////////以下界面交互/////////////////////
    mapInit(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.map = event.map;
            this.marker = new green_gis__WEBPACK_IMPORTED_MODULE_6__["SimpleMarkerSymbol"]();
            this.marker.width = 32;
            this.marker.height = 32;
            this.marker.offsetX = -16;
            this.marker.offsetY = -32;
            this.marker.url = "assets/img/marker.svg";
            yield this.marker.load();
            const point = new green_gis__WEBPACK_IMPORTED_MODULE_6__["Point"](this.option.lng, this.option.lat);
            const graphic = new green_gis__WEBPACK_IMPORTED_MODULE_6__["Graphic"](point, this.marker);
            this.map.addGraphic(graphic);
            this.map.setView([this.option.lng, this.option.lat], 12);
        });
    }
    change() {
        if (this.marker) {
            this.marker.width = this.option.width;
            this.marker.height = this.option.height;
            this.marker.offsetX = this.option.offsetX;
            this.marker.offsetY = this.option.offsetY;
            this.marker.url = this.option.url;
            this.map.redraw();
        }
    }
};
MarkerComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _core_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] }
];
MarkerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-marker',
        template: _raw_loader_marker_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_marker_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MarkerComponent);



/***/ }),

/***/ "k0RK":
/*!***************************************************!*\
  !*** ./src/app/main/symbol/marker.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYXJrZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "nBon":
/*!**************************************************!*\
  !*** ./src/app/main/symbol/arrow.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcnJvdy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "pgpG":
/*!***************************************************!*\
  !*** ./src/app/main/symbol/custom.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjdXN0b20uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "vX85":
/*!***************************************************!*\
  !*** ./src/app/main/symbol/letter.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsZXR0ZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ })

}]);
//# sourceMappingURL=main-symbol-symbol-module-es2015.js.map