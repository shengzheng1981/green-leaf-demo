(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-cluster-cluster-module"], {
    /***/
    "04Tv":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/cluster/cluster.component.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function Tv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"system-content\" style=\"grid-template-columns: 1fr\">\n    <div class=\"system-body\" >\n        <green-map-control (mapInit)=\"mapInit($event)\"></green-map-control>\n        <div class=\"panel\" style=\"position: absolute; top: 15px; right: 15px; z-index: 1000;\">\n            <div class=\"panel-heading\">\n                <div class=\"panel-title\">配置</div>\n            </div>\n            <div class=\"panel-body\" style=\"display: grid; grid-template-columns: 1fr 1fr; grid-gap: 10px; width: 540px\">\n                <div class=\"input-group\" style=\"text-align: center;\">\n                    <div class=\"input-group-addon\">聚合：</div>\n                    <nz-switch class=\"form-control\" [(ngModel)]=\"option.cluster\" (ngModelChange)=\"switch()\"></nz-switch>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "BXgV":
    /*!*****************************************************!*\
      !*** ./src/app/main/cluster/cluster.component.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function BXgV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbHVzdGVyLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "DviC":
    /*!***************************************************!*\
      !*** ./src/app/main/cluster/cluster.component.ts ***!
      \***************************************************/

    /*! exports provided: ClusterComponent */

    /***/
    function DviC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClusterComponent", function () {
        return ClusterComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_cluster_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./cluster.component.html */
      "04Tv");
      /* harmony import */


      var _cluster_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cluster.component.scss */
      "BXgV");
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

      var ClusterComponent = /*#__PURE__*/function () {
        function ClusterComponent(router, configService, http) {
          _classCallCheck(this, ClusterComponent);

          this.router = router;
          this.configService = configService;
          this.http = http;
          this.option = {
            cluster: true
          };
        }

        _createClass(ClusterComponent, [{
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
                      this.http.get("assets/geojson/junction.json").subscribe(function (data) {
                        var featureClass = new green_gis__WEBPACK_IMPORTED_MODULE_6__["FeatureClass"](green_gis__WEBPACK_IMPORTED_MODULE_6__["GeometryType"].Point);
                        featureClass.loadGeoJSON(data);
                        _this.featureLayer = new green_gis__WEBPACK_IMPORTED_MODULE_6__["FeatureLayer"]();
                        _this.featureLayer.featureClass = featureClass;
                        var renderer = new green_gis__WEBPACK_IMPORTED_MODULE_6__["SimpleRenderer"]();
                        _this.featureLayer.cluster = _this.option.cluster;
                        _this.featureLayer.renderer = renderer;
                        _this.featureLayer.zoom = [13, 20];

                        _this.map.addLayer(_this.featureLayer);

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
          key: "switch",
          value: function _switch() {
            if (this.featureLayer) {
              this.featureLayer.cluster = this.option.cluster;
              this.map.redraw();
            }
          }
        }]);

        return ClusterComponent;
      }();

      ClusterComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _core_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]
        }];
      };

      ClusterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cluster',
        template: _raw_loader_cluster_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cluster_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ClusterComponent);
      /***/
    },

    /***/
    "vIgi":
    /*!************************************************!*\
      !*** ./src/app/main/cluster/cluster.module.ts ***!
      \************************************************/

    /*! exports provided: ClusterModule */

    /***/
    function vIgi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClusterModule", function () {
        return ClusterModule;
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


      var _cluster_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./cluster.component */
      "DviC");
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
        component: _cluster_component__WEBPACK_IMPORTED_MODULE_2__["ClusterComponent"]
      }];

      var ClusterModule = function ClusterModule() {
        _classCallCheck(this, ClusterModule);
      };

      ClusterModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"].forChild(), _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        declarations: [_cluster_component__WEBPACK_IMPORTED_MODULE_2__["ClusterComponent"]]
      })], ClusterModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=main-cluster-cluster-module-es5.js.map