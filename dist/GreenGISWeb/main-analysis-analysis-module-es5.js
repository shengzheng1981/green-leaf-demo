(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-analysis-analysis-module"], {
    /***/
    "EBtM":
    /*!**************************************************!*\
      !*** ./src/app/main/analysis/analysis.module.ts ***!
      \**************************************************/

    /*! exports provided: AnalysisModule */

    /***/
    function EBtM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AnalysisModule", function () {
        return AnalysisModule;
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


      var _idw_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./idw.component */
      "UhqW");

      var routes = [{
        path: 'idw',
        component: _idw_component__WEBPACK_IMPORTED_MODULE_5__["IDWComponent"]
      }];

      var AnalysisModule = function AnalysisModule() {
        _classCallCheck(this, AnalysisModule);
      };

      AnalysisModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"].forChild(), _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        declarations: [_idw_component__WEBPACK_IMPORTED_MODULE_5__["IDWComponent"]]
      })], AnalysisModule);
      /***/
    },

    /***/
    "Po08":
    /*!**************************************************!*\
      !*** ./src/app/main/analysis/idw.component.scss ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function Po08(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpZHcuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "UhqW":
    /*!************************************************!*\
      !*** ./src/app/main/analysis/idw.component.ts ***!
      \************************************************/

    /*! exports provided: IDWComponent */

    /***/
    function UhqW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "IDWComponent", function () {
        return IDWComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_idw_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./idw.component.html */
      "p8ac");
      /* harmony import */


      var _idw_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./idw.component.scss */
      "Po08");
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

      var IDWComponent = /*#__PURE__*/function () {
        function IDWComponent(router, configService, http) {
          _classCallCheck(this, IDWComponent);

          this.router = router;
          this.configService = configService;
          this.http = http;
          this.option = {
            honey: false,
            honeySide: 10
          };
        }

        _createClass(IDWComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {} /////////////////以下界面交互/////////////////////

        }, {
          key: "mapInit",
          value: function mapInit(event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.map = event.map;
                      this.http.get("assets/geojson/sensor.json").subscribe(function (data) {
                        var featureClass = new green_gis__WEBPACK_IMPORTED_MODULE_6__["FeatureClass"](green_gis__WEBPACK_IMPORTED_MODULE_6__["GeometryType"].Point);
                        featureClass.loadGeoJSON(data);
                        var field = new green_gis__WEBPACK_IMPORTED_MODULE_6__["Field"]();
                        field.name = "DEPTH";
                        _this.idw = new green_gis__WEBPACK_IMPORTED_MODULE_6__["InverseDistanceWeight"]();
                        _this.idw.honey = false;

                        _this.idw.generate(featureClass, field);

                        var rasterLayer = new green_gis__WEBPACK_IMPORTED_MODULE_6__["RasterLayer"]();
                        rasterLayer.raster = _this.idw;

                        _this.map.addLayer(rasterLayer);

                        var featureLayer = new green_gis__WEBPACK_IMPORTED_MODULE_6__["FeatureLayer"]();
                        featureLayer.featureClass = featureClass;
                        var renderer = new green_gis__WEBPACK_IMPORTED_MODULE_6__["SimpleRenderer"]();
                        featureLayer.renderer = renderer;
                        featureLayer.zoom = [13, 20];

                        _this.map.addLayer(featureLayer);

                        _this.map.setView([109.519, 18.271], 13);
                      });

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "change",
          value: function change() {
            if (this.idw) {
              this.idw.honey = this.option.honey;
              this.idw.honeySide = this.option.honeySide;
              this.map.redraw();
            }
          }
        }]);

        return IDWComponent;
      }();

      IDWComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _core_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]
        }];
      };

      IDWComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-idw',
        template: _raw_loader_idw_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_idw_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], IDWComponent);
      /***/
    },

    /***/
    "p8ac":
    /*!****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/analysis/idw.component.html ***!
      \****************************************************************************************/

    /*! exports provided: default */

    /***/
    function p8ac(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"system-content\" style=\"grid-template-columns: 1fr\">\n    <div class=\"system-body\" >\n        <green-map-control (mapInit)=\"mapInit($event)\"></green-map-control>\n        <div class=\"panel\" style=\"position: absolute; top: 15px; right: 15px; z-index: 1000;\">\n            <div class=\"panel-heading\">\n                <div class=\"panel-title\">配置</div>\n            </div>\n            <div class=\"panel-body\" style=\"display: grid; grid-template-columns: 1fr 1fr; grid-gap: 10px; width: 540px\">\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">蜂窝：</div>\n                    <nz-switch class=\"form-control\" [(ngModel)]=\"option.honey\" (ngModelChange)=\"change()\"></nz-switch>\n                </div>\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">边长：</div>\n                    <input class=\"form-control\" type=\"number\" name=\"side\" [(ngModel)]=\"option.honeySide\"  autocomplete=\"off\" (ngModelChange)=\"change()\" min=\"6\" max=\"20\" step=\"1\">\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=main-analysis-analysis-module-es5.js.map