(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-renderer-renderer-module"],{

/***/ "3ArC":
/*!**************************************************!*\
  !*** ./src/app/main/renderer/class.component.ts ***!
  \**************************************************/
/*! exports provided: ClassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassComponent", function() { return ClassComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_class_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./class.component.html */ "prkE");
/* harmony import */ var _class_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./class.component.scss */ "QT67");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _core_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/config.service */ "8WNu");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var green_gis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! green-gis */ "9/H4");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "IheW");








let ClassComponent = class ClassComponent {
    constructor(router, configService, http) {
        this.router = router;
        this.configService = configService;
        this.http = http;
        this.option = {
            visible: true,
            strokeStyle: "#ff0000",
            fillStyle: "#ff0000"
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
                const field = new green_gis__WEBPACK_IMPORTED_MODULE_6__["Field"]();
                field.name = "DEPTH";
                field.type = green_gis__WEBPACK_IMPORTED_MODULE_6__["FieldType"].Number;
                this.renderer = new green_gis__WEBPACK_IMPORTED_MODULE_6__["ClassRenderer"]();
                this.renderer.generate(featureClass, field, 5);
                this.renderer.items.forEach(item => {
                    item.symbol.strokeStyle = this.colorRgb2Hex(item.symbol.strokeStyle);
                    item.symbol.fillStyle = this.colorRgb2Hex(item.symbol.fillStyle);
                });
                this.featureLayer.renderer = this.renderer;
                this.featureLayer.zoom = [7, 20];
                this.map.addLayer(this.featureLayer);
                this.map.setView([109.519, 18.271], 13);
            });
        });
    }
    colorRgb2Hex(rgb) {
        if (!rgb) {
            return null;
        }
        else {
            if (rgb.startsWith('rgb')) {
                rgb = rgb.split(',');
                let r = parseInt(rgb[0].split('(')[1]);
                let g = parseInt(rgb[1]);
                let b = parseInt(rgb[2].split(')')[0]);
                let hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
                return hex;
            }
            else {
                return rgb;
            }
        }
    }
    change() {
        if (this.featureLayer && this.renderer) {
            this.featureLayer.visible = this.option.visible;
            //this.renderer.symbol.strokeStyle = this.option.strokeStyle;
            //this.renderer.symbol.fillStyle = this.option.fillStyle;
            this.map.redraw();
        }
    }
};
ClassComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _core_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] }
];
ClassComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-class',
        template: _raw_loader_class_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_class_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ClassComponent);



/***/ }),

/***/ "5T3w":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/renderer/simple.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"system-content\" style=\"grid-template-columns: 1fr\">\n    <div class=\"system-body\" >\n        <green-map-control (mapInit)=\"mapInit($event)\"></green-map-control>\n        <div class=\"panel\" style=\"position: absolute; top: 15px; right: 15px; z-index: 1000;\">\n            <div class=\"panel-heading\">\n                <div class=\"panel-title\">配置</div>\n            </div>\n            <div class=\"panel-body\" style=\"display: grid; grid-template-columns: 1fr 1fr; grid-gap: 10px; width: 540px\" *ngIf=\"option\">\n                <div class=\"input-group\" style=\"text-align: center;\">\n                    <div class=\"input-group-addon\">显示：</div>\n                    <nz-switch class=\"form-control\" [(ngModel)]=\"option.visible\" (ngModelChange)=\"change()\"></nz-switch>\n                </div>\n                <div class=\"input-group\"></div>\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">边框色：</div>\n                    <input class=\"form-control\" type=\"color\" name=\"strokeColor\" [(ngModel)]=\"option.strokeStyle\"  (ngModelChange)=\"change()\">\n                </div>\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">填充色：</div>\n                    <input class=\"form-control\" type=\"color\" name=\"fillColor\" [(ngModel)]=\"option.fillStyle\"  (ngModelChange)=\"change()\">\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "I2r2":
/*!*****************************************************!*\
  !*** ./src/app/main/renderer/simple.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaW1wbGUuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "QT67":
/*!****************************************************!*\
  !*** ./src/app/main/renderer/class.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGFzcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "asUx":
/*!**************************************************!*\
  !*** ./src/app/main/renderer/renderer.module.ts ***!
  \**************************************************/
/*! exports provided: RendererModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RendererModule", function() { return RendererModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/core.module */ "pKmL");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "YCQm");
/* harmony import */ var _simple_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./simple.component */ "oImh");
/* harmony import */ var _category_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./category.component */ "ea/9");
/* harmony import */ var _class_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./class.component */ "3ArC");








const routes = [
    {
        path: 'simple',
        component: _simple_component__WEBPACK_IMPORTED_MODULE_5__["SimpleComponent"]
    },
    {
        path: 'category',
        component: _category_component__WEBPACK_IMPORTED_MODULE_6__["CategoryComponent"]
    },
    {
        path: 'class',
        component: _class_component__WEBPACK_IMPORTED_MODULE_7__["ClassComponent"]
    }
];
let RendererModule = class RendererModule {
};
RendererModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"].forChild(),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        declarations: [
            _simple_component__WEBPACK_IMPORTED_MODULE_5__["SimpleComponent"], _category_component__WEBPACK_IMPORTED_MODULE_6__["CategoryComponent"], _class_component__WEBPACK_IMPORTED_MODULE_7__["ClassComponent"]
        ]
    })
], RendererModule);



/***/ }),

/***/ "ea/9":
/*!*****************************************************!*\
  !*** ./src/app/main/renderer/category.component.ts ***!
  \*****************************************************/
/*! exports provided: CategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryComponent", function() { return CategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_category_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./category.component.html */ "s2g+");
/* harmony import */ var _category_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category.component.scss */ "w/M9");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _core_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/config.service */ "8WNu");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var green_gis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! green-gis */ "9/H4");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "IheW");








let CategoryComponent = class CategoryComponent {
    constructor(router, configService, http) {
        this.router = router;
        this.configService = configService;
        this.http = http;
        this.option = {
            visible: true,
            strokeStyle: "#ff0000",
            fillStyle: "#ff0000"
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
                const field = new green_gis__WEBPACK_IMPORTED_MODULE_6__["Field"]();
                field.name = "TYPE";
                field.type = green_gis__WEBPACK_IMPORTED_MODULE_6__["FieldType"].String;
                this.renderer = new green_gis__WEBPACK_IMPORTED_MODULE_6__["CategoryRenderer"]();
                this.renderer.generate(featureClass, field);
                this.renderer.items.forEach(item => {
                    item.symbol.strokeStyle = this.colorRgb2Hex(item.symbol.strokeStyle);
                    item.symbol.fillStyle = this.colorRgb2Hex(item.symbol.fillStyle);
                });
                this.featureLayer.renderer = this.renderer;
                this.featureLayer.zoom = [7, 20];
                this.map.addLayer(this.featureLayer);
                this.map.setView([109.519, 18.271], 13);
            });
        });
    }
    colorRgb2Hex(rgb) {
        if (!rgb) {
            return null;
        }
        else {
            if (rgb.startsWith('rgb')) {
                rgb = rgb.split(',');
                let r = parseInt(rgb[0].split('(')[1]);
                let g = parseInt(rgb[1]);
                let b = parseInt(rgb[2].split(')')[0]);
                let hex = "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
                return hex;
            }
            else {
                return rgb;
            }
        }
    }
    change() {
        if (this.featureLayer && this.renderer) {
            this.featureLayer.visible = this.option.visible;
            //this.renderer.symbol.strokeStyle = this.option.strokeStyle;
            //this.renderer.symbol.fillStyle = this.option.fillStyle;
            this.map.redraw();
        }
    }
};
CategoryComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _core_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] }
];
CategoryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-category',
        template: _raw_loader_category_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_category_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CategoryComponent);



/***/ }),

/***/ "oImh":
/*!***************************************************!*\
  !*** ./src/app/main/renderer/simple.component.ts ***!
  \***************************************************/
/*! exports provided: SimpleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleComponent", function() { return SimpleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_simple_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./simple.component.html */ "5T3w");
/* harmony import */ var _simple_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./simple.component.scss */ "I2r2");
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
            visible: true,
            strokeStyle: "#ff0000",
            fillStyle: "#ff0000"
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
            this.renderer.symbol.strokeStyle = this.option.strokeStyle;
            this.renderer.symbol.fillStyle = this.option.fillStyle;
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

/***/ "prkE":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/renderer/class.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"system-content\" style=\"grid-template-columns: 1fr\">\n    <div class=\"system-body\" >\n        <green-map-control (mapInit)=\"mapInit($event)\"></green-map-control>\n        <div class=\"panel\" style=\"position: absolute; top: 15px; right: 15px; z-index: 1000;\">\n            <div class=\"panel-heading\">\n                <div class=\"panel-title\">配置</div>\n            </div>\n            <div class=\"panel-body\" style=\"display: grid; grid-template-columns: 1fr 1fr 1fr; grid-gap: 10px; width: 540px\" *ngIf=\"option\">\n                <div class=\"input-group\" style=\"text-align: center;\">\n                    <div class=\"input-group-addon\">显示：</div>\n                    <nz-switch class=\"form-control\" [(ngModel)]=\"option.visible\" (ngModelChange)=\"change()\"></nz-switch>\n                </div>\n                <div class=\"input-group\"></div>\n                <div class=\"input-group\"></div>\n                <ng-container *ngFor=\"let item of this.renderer?.items\">\n                    <div class=\"input-group\">\n                        <div class=\"input-group-addon\" style=\"width: 45px\">分类：</div>\n                        <input class=\"form-control\" [ngModel]=\"item.label\" readonly/>\n                    </div>\n                    <div class=\"input-group\" *ngIf=\"item.symbol\">\n                        <div class=\"input-group-addon\" style=\"width: 100px\">边框色：</div>\n                        <input class=\"form-control\" type=\"color\" [name]=\"item.value + 'strokeColor'\" [(ngModel)]=\"item.symbol.strokeStyle\"  (ngModelChange)=\"change()\">\n                    </div>\n                    <div class=\"input-group\" *ngIf=\"item.symbol\">\n                        <div class=\"input-group-addon\" style=\"width: 100px\">填充色：</div>\n                        <input class=\"form-control\" type=\"color\" [name]=\"item.value + 'fillColor'\" [(ngModel)]=\"item.symbol.fillStyle\"  (ngModelChange)=\"change()\">\n                    </div>\n                </ng-container>\n\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "s2g+":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/renderer/category.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"system-content\" style=\"grid-template-columns: 1fr\">\n    <div class=\"system-body\" >\n        <green-map-control (mapInit)=\"mapInit($event)\"></green-map-control>\n        <div class=\"panel\" style=\"position: absolute; top: 15px; right: 15px; z-index: 1000;\">\n            <div class=\"panel-heading\">\n                <div class=\"panel-title\">配置</div>\n            </div>\n            <div class=\"panel-body\" style=\"display: grid; grid-template-columns: 1fr 1fr 1fr; grid-gap: 10px; width: 540px\" *ngIf=\"option\">\n                <div class=\"input-group\" style=\"text-align: center;\">\n                    <div class=\"input-group-addon\">显示：</div>\n                    <nz-switch class=\"form-control\" [(ngModel)]=\"option.visible\" (ngModelChange)=\"change()\"></nz-switch>\n                </div>\n                <div class=\"input-group\"></div>\n                <div class=\"input-group\"></div>\n                <ng-container *ngFor=\"let item of this.renderer?.items\">\n                    <div class=\"input-group\">\n                        <div class=\"input-group-addon\" style=\"width: 100px\">分类：</div>\n                        <input class=\"form-control\" [ngModel]=\"item.value\" readonly/>\n                    </div>\n                    <div class=\"input-group\" *ngIf=\"item.symbol\">\n                        <div class=\"input-group-addon\" style=\"width: 100px\">边框色：</div>\n                        <input class=\"form-control\" type=\"color\" [name]=\"item.value + 'strokeColor'\" [(ngModel)]=\"item.symbol.strokeStyle\"  (ngModelChange)=\"change()\">\n                    </div>\n                    <div class=\"input-group\" *ngIf=\"item.symbol\">\n                        <div class=\"input-group-addon\" style=\"width: 100px\">填充色：</div>\n                        <input class=\"form-control\" type=\"color\" [name]=\"item.value + 'fillColor'\" [(ngModel)]=\"item.symbol.fillStyle\"  (ngModelChange)=\"change()\">\n                    </div>\n                </ng-container>\n\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "w/M9":
/*!*******************************************************!*\
  !*** ./src/app/main/renderer/category.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yeS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ })

}]);
//# sourceMappingURL=main-renderer-renderer-module-es2015.js.map