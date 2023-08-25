(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-projection-projection-module"], {
    /***/
    "6KUt":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/projection/bmap.component.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function KUt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"system-content\" style=\"grid-template-columns: 1fr\">\n    <div class=\"system-body\" >\n        <baidu-map-control (mapInit)=\"mapInit($event)\"></baidu-map-control>\n        <div class=\"panel\" style=\"position: absolute; top: 15px; right: 15px; z-index: 1000;\">\n            <div class=\"panel-heading\">\n                <div class=\"panel-title\">配置</div>\n            </div>\n            <div class=\"panel-body\" style=\"display: grid; grid-template-columns: 1fr 1fr; grid-gap: 10px; width: 540px\">\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">经度：</div>\n                    <input class=\"form-control\" type=\"number\" name=\"lng\" [(ngModel)]=\"option.lng\"  autocomplete=\"off\" (ngModelChange)=\"change()\" min=\"-180\" max=\"180\" step=\"0.001\">\n                </div>\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">纬度：</div>\n                    <input class=\"form-control\" type=\"number\" name=\"lat\" [(ngModel)]=\"option.lat\"  autocomplete=\"off\" (ngModelChange)=\"change()\" min=\"-85\" max=\"85\" step=\"0.001\">\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "8OLX":
    /*!******************************************************!*\
      !*** ./src/app/main/projection/projection.module.ts ***!
      \******************************************************/

    /*! exports provided: ProjectionModule */

    /***/
    function OLX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectionModule", function () {
        return ProjectionModule;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../core/core.module */
      "pKmL");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../shared/shared.module */
      "YCQm");
      /* harmony import */


      var _amap_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./amap.component */
      "N5PA");
      /* harmony import */


      var _bmap_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./bmap.component */
      "Nc1I");

      var routes = [{
        path: 'amap',
        component: _amap_component__WEBPACK_IMPORTED_MODULE_5__["AmapComponent"]
      }, {
        path: 'bmap',
        component: _bmap_component__WEBPACK_IMPORTED_MODULE_6__["BmapComponent"]
      }];

      var ProjectionModule = function ProjectionModule() {
        _classCallCheck(this, ProjectionModule);
      };

      ProjectionModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"].forChild(), _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        declarations: [_amap_component__WEBPACK_IMPORTED_MODULE_5__["AmapComponent"], _bmap_component__WEBPACK_IMPORTED_MODULE_6__["BmapComponent"]]
      })], ProjectionModule);
      /***/
    },

    /***/
    "G/g1":
    /*!*****************************************************!*\
      !*** ./src/app/main/projection/amap.component.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function GG1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbWFwLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "JHe/":
    /*!*****************************************************!*\
      !*** ./src/app/main/projection/bmap.component.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function JHe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJibWFwLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "N5PA":
    /*!***************************************************!*\
      !*** ./src/app/main/projection/amap.component.ts ***!
      \***************************************************/

    /*! exports provided: AmapComponent */

    /***/
    function N5PA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AmapComponent", function () {
        return AmapComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_amap_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./amap.component.html */
      "wlnU");
      /* harmony import */


      var _amap_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./amap.component.scss */
      "G/g1");
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

      var AmapComponent = /*#__PURE__*/function () {
        function AmapComponent(router, configService, http) {
          _classCallCheck(this, AmapComponent);

          this.router = router;
          this.configService = configService;
          this.http = http;
          this.option = {
            lng: 116.397411,
            lat: 39.909186
          };
        }

        _createClass(AmapComponent, [{
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

        return AmapComponent;
      }();

      AmapComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _core_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]
        }];
      };

      AmapComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-amap',
        template: _raw_loader_amap_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_amap_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AmapComponent);
      /***/
    },

    /***/
    "Nc1I":
    /*!***************************************************!*\
      !*** ./src/app/main/projection/bmap.component.ts ***!
      \***************************************************/

    /*! exports provided: BmapComponent */

    /***/
    function Nc1I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BmapComponent", function () {
        return BmapComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_bmap_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./bmap.component.html */
      "6KUt");
      /* harmony import */


      var _bmap_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./bmap.component.scss */
      "JHe/");
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

      var BmapComponent = /*#__PURE__*/function () {
        function BmapComponent(router, configService, http) {
          _classCallCheck(this, BmapComponent);

          this.router = router;
          this.configService = configService;
          this.http = http;
          this.option = {
            lng: 116.397411,
            lat: 39.909186
          };
        }

        _createClass(BmapComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {} /////////////////以下界面交互/////////////////////

        }, {
          key: "mapInit",
          value: function mapInit(event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.map = event.map;
                      this.create();

                    case 2:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "create",
          value: function create() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var marker, point, graphic;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      marker = new green_gis__WEBPACK_IMPORTED_MODULE_6__["SimpleMarkerSymbol"]();
                      marker.width = 32;
                      marker.height = 32;
                      marker.offsetX = -16;
                      marker.offsetY = -32;
                      marker.url = "assets/img/marker.svg";
                      _context4.next = 8;
                      return marker.load();

                    case 8:
                      point = new green_gis__WEBPACK_IMPORTED_MODULE_6__["Point"](this.option.lng, this.option.lat);
                      graphic = new green_gis__WEBPACK_IMPORTED_MODULE_6__["Graphic"](point, marker);
                      this.map.addGraphic(graphic);
                      this.map.setView([this.option.lng, this.option.lat], 12);

                    case 12:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "change",
          value: function change() {
            this.map.clearGraphics();
            this.create();
          }
        }]);

        return BmapComponent;
      }();

      BmapComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _core_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]
        }];
      };

      BmapComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-bmap',
        template: _raw_loader_bmap_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_bmap_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], BmapComponent);
      /***/
    },

    /***/
    "wlnU":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/projection/amap.component.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function wlnU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"system-content\" style=\"grid-template-columns: 1fr\">\n    <div class=\"system-body\" >\n        <green-map-control (mapInit)=\"mapInit($event)\"></green-map-control>\n        <div class=\"panel\" style=\"position: absolute; top: 15px; right: 15px; z-index: 1000;\">\n            <div class=\"panel-heading\">\n                <div class=\"panel-title\">配置</div>\n            </div>\n            <div class=\"panel-body\" style=\"display: grid; grid-template-columns: 1fr 1fr; grid-gap: 10px; width: 540px\">\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">经度：</div>\n                    <input class=\"form-control\" type=\"number\" name=\"lng\" [(ngModel)]=\"option.lng\"  autocomplete=\"off\" (ngModelChange)=\"change()\" min=\"-180\" max=\"180\" step=\"0.001\">\n                </div>\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">纬度：</div>\n                    <input class=\"form-control\" type=\"number\" name=\"lat\" [(ngModel)]=\"option.lat\"  autocomplete=\"off\" (ngModelChange)=\"change()\" min=\"-85\" max=\"85\" step=\"0.001\">\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=main-projection-projection-module-es5.js.map