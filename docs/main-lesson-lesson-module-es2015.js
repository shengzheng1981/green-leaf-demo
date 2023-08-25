(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-lesson-lesson-module"],{

/***/ "0bk9":
/*!*************************************************!*\
  !*** ./src/app/main/lesson/lesson.component.ts ***!
  \*************************************************/
/*! exports provided: LessonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonComponent", function() { return LessonComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_lesson_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./lesson.component.html */ "yeFm");
/* harmony import */ var _lesson_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lesson.component.scss */ "kLxa");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _core_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../core/config.service */ "8WNu");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "IheW");







let LessonComponent = class LessonComponent {
    constructor(configService, router, http) {
        this.configService = configService;
        this.router = router;
        this.http = http;
        this.videos = [];
    }
    ngOnInit() {
        this.http.get("assets/json/videos.json").subscribe(data => this.videos = data);
    }
    ngOnDestroy() {
    }
};
LessonComponent.ctorParameters = () => [
    { type: _core_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"] }
];
LessonComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-lesson',
        template: _raw_loader_lesson_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_lesson_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LessonComponent);



/***/ }),

/***/ "LK0P":
/*!**********************************************!*\
  !*** ./src/app/main/lesson/lesson.module.ts ***!
  \**********************************************/
/*! exports provided: LessonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LessonModule", function() { return LessonModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/core.module */ "pKmL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "YCQm");
/* harmony import */ var _lesson_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lesson.component */ "0bk9");






const routes = [
    {
        path: '',
        component: _lesson_component__WEBPACK_IMPORTED_MODULE_5__["LessonComponent"]
    }
];
let LessonModule = class LessonModule {
};
LessonModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_lesson_component__WEBPACK_IMPORTED_MODULE_5__["LessonComponent"]],
        imports: [
            _core_core_module__WEBPACK_IMPORTED_MODULE_2__["CoreModule"].forChild(),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ]
    })
], LessonModule);



/***/ }),

/***/ "kLxa":
/*!***************************************************!*\
  !*** ./src/app/main/lesson/lesson.component.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".video-card {\n  display: grid;\n  grid-template-rows: 300px 80px;\n  background: #f4f4f4;\n  box-shadow: 0 0 8px #e5e9ef;\n}\n.video-card .video-body {\n  height: 300px;\n  width: 100%;\n  background: black;\n  -o-object-position: center;\n     object-position: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsZXNzb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FBREo7QUFFSTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtLQUFBLHVCQUFBO0FBQVIiLCJmaWxlIjoibGVzc29uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvdGhlbWVcIjtcclxuXHJcbi52aWRlby1jYXJkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDMwMHB4IDgwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZjRmNGY0O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDhweCAjZTVlOWVmO1xyXG4gICAgLnZpZGVvLWJvZHkge1xyXG4gICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAudmlkZW8tZm9vdGVyIHtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iXX0= */");

/***/ }),

/***/ "yeFm":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/lesson/lesson.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"system-content\" style=\"grid-template-columns: 1fr\">\n    <div class=\"system-body\" style=\"display: grid; grid-auto-flow: row; grid-auto-rows: min-content; grid-template-columns: 1fr 1fr 1fr 1fr; grid-gap: 15px; padding: 15px; overflow-y: auto\">\n        <div class=\"video-card\" *ngFor=\"let video of videos\">\n            <!--<video class=\"video-body\" controls=\"controls\" loop=\"loop\">\n                <source [src]=\"video.url\" type=\"video/mp4\">\n                <source [src]=\"video.url\" type=\"video/ogg\">\n            </video>-->\n            <iframe [src]=\"video.url | safe\" scrolling=\"no\" border=\"0\" frameborder=\"no\" framespacing=\"0\" allowfullscreen=\"true\" style=\"width: 100%; height: 100%\"> </iframe>\n            <div class=\"video-footer\">\n                <div class=\"video-title\" style=\"padding: 5px 15px; font-size: 16px; font-family: '微软雅黑 Bold'\">{{video.title}}</div>\n                <div class=\"video-desc\" style=\"padding: 5px 15px; font-size: 12px; font-family: '微软雅黑'\">{{video.desc}}</div>\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ })

}]);
//# sourceMappingURL=main-lesson-lesson-module-es2015.js.map