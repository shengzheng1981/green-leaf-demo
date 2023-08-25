(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-basic-basic-module"], {
    /***/
    "LYsC":
    /*!*************************************************!*\
      !*** ./src/app/main/basic/basic.component.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function LYsC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXNpYy5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "SZMz":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/basic/basic.component.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function SZMz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"system-content\" style=\"grid-template-columns: 1fr\">\n    <div class=\"system-body\" >\n        <green-map-control (mapInit)=\"mapInit($event)\"></green-map-control>\n        <div class=\"panel\" style=\"position: absolute; top: 15px; right: 15px; z-index: 1000;\">\n            <div class=\"panel-heading\">\n                <div class=\"panel-title\">配置</div>\n            </div>\n            <div class=\"panel-body\" style=\"display: grid; grid-template-columns: 1fr 1fr; grid-gap: 10px; width: 540px\">\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">经度：</div>\n                    <input class=\"form-control\" type=\"number\" name=\"lng\" [(ngModel)]=\"option.lng\"  autocomplete=\"off\" (ngModelChange)=\"change()\" min=\"-180\" max=\"180\" step=\"0.001\">\n                </div>\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">纬度：</div>\n                    <input class=\"form-control\" type=\"number\" name=\"lat\" [(ngModel)]=\"option.lat\"  autocomplete=\"off\" (ngModelChange)=\"change()\" min=\"-85\" max=\"85\" step=\"0.001\">\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "mnQL":
    /*!***********************************************!*\
      !*** ./src/app/main/basic/basic.component.ts ***!
      \***********************************************/

    /*! exports provided: BasicComponent */

    /***/
    function mnQL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BasicComponent", function () {
        return BasicComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_basic_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./basic.component.html */
      "SZMz");
      /* harmony import */


      var _basic_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./basic.component.scss */
      "LYsC");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _core_config_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../core/config.service */
      "8WNu");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var green_gis__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! green-gis */
      "9/H4");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");

      var BasicComponent = /*#__PURE__*/function () {
        function BasicComponent(router, configService, http) {
          _classCallCheck(this, BasicComponent);

          this.router = router;
          this.configService = configService;
          this.http = http;
          this.option = {
            lng: 116.397411,
            lat: 39.909186
          };
        }

        _createClass(BasicComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {} /////////////////以下界面交互/////////////////////

        }, {
          key: "mapInit",
          value: function mapInit(event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.map = event.map;
                      this.create();

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "create",
          value: function create() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var marker, point, graphic;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      marker = new green_gis__WEBPACK_IMPORTED_MODULE_6__["SimpleMarkerSymbol"]();
                      marker.width = 32;
                      marker.height = 32;
                      marker.offsetX = -16;
                      marker.offsetY = -32;
                      marker.url = "assets/img/marker.svg";
                      _context2.next = 8;
                      return marker.load();

                    case 8:
                      point = new green_gis__WEBPACK_IMPORTED_MODULE_6__["Point"](this.option.lng, this.option.lat);
                      graphic = new green_gis__WEBPACK_IMPORTED_MODULE_6__["Graphic"](point, marker);
                      this.map.addGraphic(graphic);
                      this.map.setView([this.option.lng, this.option.lat], 12);

                    case 12:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "change",
          value: function change() {
            this.map.clearGraphics();
            this.create();
          }
        }]);

        return BasicComponent;
      }();

      BasicComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _core_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]
        }];
      };

      BasicComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-basic',
        template: _raw_loader_basic_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_basic_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], BasicComponent);
      /***/
    },

    /***/
    "puiu":
    /*!********************************************!*\
      !*** ./src/app/main/basic/basic.module.ts ***!
      \********************************************/

    /*! exports provided: BasicModule */

    /***/
    function puiu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BasicModule", function () {
        return BasicModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _basic_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./basic.component */
      "mnQL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../core/core.module */
      "pKmL");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../shared/shared.module */
      "YCQm");

      var routes = [{
        path: '',
        component: _basic_component__WEBPACK_IMPORTED_MODULE_2__["BasicComponent"]
      }];

      var BasicModule = function BasicModule() {
        _classCallCheck(this, BasicModule);
      };

      BasicModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"].forChild(), _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        declarations: [_basic_component__WEBPACK_IMPORTED_MODULE_2__["BasicComponent"]]
      })], BasicModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=main-basic-basic-module-es5.js.map