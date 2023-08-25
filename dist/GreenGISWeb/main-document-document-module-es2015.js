(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-document-document-module"],{

/***/ "A4Yb":
/*!*****************************************************!*\
  !*** ./src/app/main/document/document.component.ts ***!
  \*****************************************************/
/*! exports provided: DocumentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentComponent", function() { return DocumentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_document_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./document.component.html */ "mVIq");
/* harmony import */ var _document_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./document.component.scss */ "IGj2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _core_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/config.service */ "8WNu");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "IheW");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "iInd");







let DocumentComponent = class DocumentComponent {
    constructor(configService, router, http) {
        this.configService = configService;
        this.router = router;
        this.http = http;
        this.docs = [];
    }
    ngOnInit() {
        this.http.get("assets/json/docs.json").subscribe(data => this.docs = data);
    }
    change(doc) {
        this.article = doc;
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]().set('Content-Type', 'text/plain; charset=utf-8');
        this.http.get("assets/docs/" + doc.article, { headers, responseType: 'text' }).subscribe(data => {
            this.markdown.nativeElement.innerHTML = marked(data);
        });
    }
};
DocumentComponent.ctorParameters = () => [
    { type: _core_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }
];
DocumentComponent.propDecorators = {
    markdown: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['markdown', { static: true },] }]
};
DocumentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-document',
        template: _raw_loader_document_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_document_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DocumentComponent);



/***/ }),

/***/ "IGj2":
/*!*******************************************************!*\
  !*** ./src/app/main/document/document.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb2N1bWVudC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "LMyN":
/*!**************************************************!*\
  !*** ./src/app/main/document/document.module.ts ***!
  \**************************************************/
/*! exports provided: DocumentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentModule", function() { return DocumentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../core/core.module */ "pKmL");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "YCQm");
/* harmony import */ var _document_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./document.component */ "A4Yb");






const routes = [
    {
        path: '',
        component: _document_component__WEBPACK_IMPORTED_MODULE_5__["DocumentComponent"]
    }
];
let DocumentModule = class DocumentModule {
};
DocumentModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"].forChild(),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        declarations: [
            _document_component__WEBPACK_IMPORTED_MODULE_5__["DocumentComponent"]
        ]
    })
], DocumentModule);



/***/ }),

/***/ "mVIq":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/document/document.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"system-content\">\n    <div class=\"system-left\">\n        <ul nz-menu nzMode=\"inline\">\n            <ng-container *ngFor=\"let doc of docs\">\n                <li nz-menu-item *ngIf=\"!doc.children\">{{doc.title}}</li>\n                <li nz-submenu *ngIf=\"doc.children\" [nzTitle]=\"doc.title\">\n                    <ul>\n                        <li nz-menu-item *ngFor=\"let child of doc.children\" (click)=\"change(child)\">{{child.title}}</li>\n                    </ul>\n                </li>\n            </ng-container>\n        </ul>\n    </div>\n    <div class=\"system-body\" style=\"padding: 15px; display: grid; grid-gap: 10px; grid-template-columns: 1fr auto;\">\n        <div #container class=\"system-body-article\" style=\"height: 100%; overflow-y: auto;\">\n            <!--<article #markdown>\n                <section id=\"Start\" style=\"height: 400px;\">\n                    <h3>Start</h3>\n                </section>\n                <section id=\"Index\" style=\"height: 400px;\">\n                    <h3>Index</h3>\n                </section>\n                <section id=\"Command\" style=\"height: 400px;\">\n                    <h3>Command</h3>\n                </section>\n                <section id=\"Remark\" style=\"height: 400px;\">\n                    <h3>Remark</h3>\n                </section>\n            </article>-->\n            <div #markdown>\n\n            </div>\n        </div>\n        <div class=\"system-body-anchor\">\n            <!--<nz-anchor [nzContainer]=\"markdown\">\n                <nz-link nzHref=\"document#Start\" nzTitle=\"Start\"></nz-link>\n                <nz-link nzHref=\"document#Index\" nzTitle=\"Index\"></nz-link>\n                <nz-link nzHref=\"document#Command\" nzTitle=\"Command\"></nz-link>\n                <nz-link nzHref=\"document#Remark\" nzTitle=\"Remark\"></nz-link>\n            </nz-anchor>-->\n        </div>\n    </div>\n</div>\n");

/***/ })

}]);
//# sourceMappingURL=main-document-document-module-es2015.js.map