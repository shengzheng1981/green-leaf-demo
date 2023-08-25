(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-sandbox-sandbox-module"],{

/***/ "N9mJ":
/*!************************************************!*\
  !*** ./src/app/main/sandbox/sandbox.module.ts ***!
  \************************************************/
/*! exports provided: SandboxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SandboxModule", function() { return SandboxModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/core.module */ "pKmL");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "YCQm");
/* harmony import */ var _sandbox_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sandbox.component */ "lDic");






const routes = [
    {
        path: '',
        component: _sandbox_component__WEBPACK_IMPORTED_MODULE_5__["SandboxComponent"]
    }
];
let SandboxModule = class SandboxModule {
};
SandboxModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"].forChild(),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        declarations: [
            _sandbox_component__WEBPACK_IMPORTED_MODULE_5__["SandboxComponent"]
        ]
    })
], SandboxModule);



/***/ }),

/***/ "lDic":
/*!***************************************************!*\
  !*** ./src/app/main/sandbox/sandbox.component.ts ***!
  \***************************************************/
/*! exports provided: SandboxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SandboxComponent", function() { return SandboxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_sandbox_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./sandbox.component.html */ "wy4W");
/* harmony import */ var _sandbox_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sandbox.component.scss */ "w6Kh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _core_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/config.service */ "8WNu");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "IheW");







let SandboxComponent = class SandboxComponent {
    constructor(router, configService, http) {
        this.router = router;
        this.configService = configService;
        this.http = http;
        this.scripts = [];
    }
    ngOnInit() {
        this.editor = CodeMirror.fromTextArea(this.textarea.nativeElement, {
            lineNumbers: true,
            styleActiveLine: true,
            mode: "htmlmixed"
        });
        this.http.get("assets/json/scripts.json").subscribe(data => {
            this.scripts = data;
            this.source = this.scripts[0].items[0].script;
            this.editor.setValue(this.source);
            this.run();
        });
        this.source = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <script type="text/javascript" src="https://unpkg.com/green-leaf@0.0.7/green-leaf.js"></script>
  <link rel="stylesheet" href="https://unpkg.com/green-leaf@0.0.7/leaflet.css">
</head>
<body style="margin: 0px; overflow: hidden;">
  <div id="foo" style="width: 100%; height: 100%; overflow: hidden;"></div>
  <script>
    const map = new Green.Map("foo");
    //加载OSM切片
    const tile = new Green.Tile('http://{s}.tile.osm.org/{z}/{x}/{y}.png');
    tile.addTo(map);
    
    map.setView(new Green.LatLng(39.909186, 116.397411), 12);
    //设置渲染符号
    const symbol = new Green.SimplePointSymbol();
    const point = new Green.Point(new Green.LatLng(39.909186, 116.397411));
    const graphic = new Green.Graphic(point, symbol);
    //添加单个图形
    map.addGraphic(graphic);
  </script>
</body>
</html>`;
    }
    change(script) {
        this.source = script;
        this.editor.setValue(this.source);
        this.run();
    }
    run() {
        this.source = this.editor.getValue();
        setTimeout(() => {
            const iframe = document.createElement('iframe');
            iframe.style.height = "100%";
            iframe.style.width = "100%";
            iframe.style["border"] = "1px solid #ededed";
            iframe.style["box-shadow"] = "3px 3px 8px rgba(0,0,0,0.2)";
            const parent = this.sandbox.nativeElement;
            while (parent.firstChild) {
                parent.removeChild(parent.firstChild);
            }
            parent.appendChild(iframe);
            const frameDocument = iframe.contentDocument || iframe.contentWindow.document;
            frameDocument.open();
            frameDocument.write(this.source);
            frameDocument.close();
            // this.sandbox.nativeElement.contentWindow.document.body.innerHTML = "";
            // this.sandbox.nativeElement.contentDocument.open();
            // this.sandbox.nativeElement.contentDocument.write(this.source);
            // this.sandbox.nativeElement.contentDocument.close();
        });
    }
};
SandboxComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _core_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }
];
SandboxComponent.propDecorators = {
    sandbox: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['sandbox', { static: true },] }],
    textarea: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['textarea', { static: true },] }]
};
SandboxComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-sandbox',
        template: _raw_loader_sandbox_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_sandbox_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SandboxComponent);



/***/ }),

/***/ "w6Kh":
/*!*****************************************************!*\
  !*** ./src/app/main/sandbox/sandbox.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzYW5kYm94LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "wy4W":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/sandbox/sandbox.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"system-content\" style=\"grid-template-columns: 1fr\">\n    <div class=\"system-body\" style=\"display: grid; grid-template-columns: 1fr 2fr 3fr;\">\n        <ul nz-menu nzMode=\"inline\" style=\"overflow-y: auto; overflow-x: hidden;\">\n            <li nz-submenu *ngFor=\"let group of scripts\" [nzTitle]=\"group.title\" [nzOpen]=\"group.open\">\n                <ul>\n                    <li nz-menu-item *ngFor=\"let item of group.items\" [nzSelected]=\"item.selected\" (click)=\"change(item.script)\">{{item.title}}</li>\n                </ul>\n            </li>\n        </ul>\n        <div class=\"panel panel-grid\" style=\"height: 100%; width: 100%; padding: 10px;\">\n            <div class=\"panel-heading\" style=\"display: grid; grid-template-columns: 1fr auto\">\n                <div class=\"panel-title\">源码</div>\n                <div class=\"panel-action\">\n                    <button class=\"btn btn-xs btn-primary\" (click)=\"run()\">运行</button>\n                </div>\n            </div>\n            <div class=\"panel-body\" style=\"overflow-y: hidden;\">\n                <textarea #textarea style=\"height: 100%; width: 100%;\"></textarea>\n            </div>\n        </div>\n        <div #sandbox class=\"panel\" style=\"height: 100%; width: 100%; padding: 10px;\">\n            <!-- <iframe sandbox=\"allow-same-origin allow-scripts\" style=\"height: 100%; width: 100%; border: 1px solid #ededed;\n            box-shadow: 3px 3px 8px rgba(0,0,0,0.2)\"></iframe> -->\n        </div>\n    </div>\n</div>\n");

/***/ })

}]);
//# sourceMappingURL=main-sandbox-sandbox-module-es2015.js.map