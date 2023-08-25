(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main-animation-animation-module"], {
    /***/
    "4SdK":
    /*!******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/animation/line.component.html ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function SdK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"system-content\" style=\"grid-template-columns: 1fr\">\n    <div class=\"system-body\" >\n        <green-map-control (mapInit)=\"mapInit($event)\"></green-map-control>\n        <div class=\"panel\" style=\"position: absolute; top: 15px; right: 15px; z-index: 1000;\">\n            <div class=\"panel-heading\">\n                <div class=\"panel-title\">配置</div>\n            </div>\n            <div class=\"panel-body\" style=\"display: grid; grid-template-columns: 1fr 1fr; grid-gap: 10px; width: 540px\" *ngIf=\"animation\">\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">起始色：</div>\n                    <input class=\"form-control\" type=\"color\" name=\"color\" [(ngModel)]=\"animation.startColor\"  (ngModelChange)=\"change()\">\n                </div>\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">终止色：</div>\n                    <input class=\"form-control\" type=\"color\" name=\"color\" [(ngModel)]=\"animation.endColor\"  (ngModelChange)=\"change()\">\n                </div>\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">线宽：</div>\n                    <input class=\"form-control\" type=\"number\" name=\"width\" [(ngModel)]=\"animation.lineWidth\"  autocomplete=\"off\" (ngModelChange)=\"change()\" min=\"2\" [max]=\"8\" step=\"1\">\n                </div>\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">弧度(rad)：</div>\n                    <input class=\"form-control\" type=\"number\" name=\"angle\" [(ngModel)]=\"animation.angle\"  autocomplete=\"off\" (ngModelChange)=\"change()\" min=\"0\" [max]=\"1\" step=\"0.1\">\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "7AeN":
    /*!********************************************************!*\
      !*** ./src/app/main/animation/particle.component.scss ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function AeN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXJ0aWNsZS5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "9+ri":
    /*!******************************************************!*\
      !*** ./src/app/main/animation/particle.component.ts ***!
      \******************************************************/

    /*! exports provided: ParticleComponent */

    /***/
    function ri(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ParticleComponent", function () {
        return ParticleComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_particle_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./particle.component.html */
      "Ro6E");
      /* harmony import */


      var _particle_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./particle.component.scss */
      "7AeN");
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

      var ParticleComponent = /*#__PURE__*/function () {
        function ParticleComponent(router, configService, http) {
          _classCallCheck(this, ParticleComponent);

          this.router = router;
          this.configService = configService;
          this.http = http;
        }

        _createClass(ParticleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {} /////////////////以下界面交互/////////////////////

        }, {
          key: "mapInit",
          value: function mapInit(event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var point;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.map = event.map;
                      this.map.setView([116.397411, 39.909186], 4);
                      point = new green_gis__WEBPACK_IMPORTED_MODULE_6__["Point"](116.397411, 39.909186);
                      this.animation = new green_gis__WEBPACK_IMPORTED_MODULE_6__["ParticleAnimation"](point);
                      this.map.addAnimation(this.animation);

                    case 5:
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
            if (this.animation) {
              this.map.redraw();
            }
          }
        }]);

        return ParticleComponent;
      }();

      ParticleComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _core_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]
        }];
      };

      ParticleComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-particle',
        template: _raw_loader_particle_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_particle_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ParticleComponent);
      /***/
    },

    /***/
    "9G1L":
    /*!****************************************************!*\
      !*** ./src/app/main/animation/animation.module.ts ***!
      \****************************************************/

    /*! exports provided: AnimationModule */

    /***/
    function G1L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AnimationModule", function () {
        return AnimationModule;
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


      var _point_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./point.component */
      "fHBY");
      /* harmony import */


      var _particle_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./particle.component */
      "9+ri");
      /* harmony import */


      var _line_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./line.component */
      "u82u");

      var routes = [{
        path: 'point',
        component: _point_component__WEBPACK_IMPORTED_MODULE_5__["PointComponent"]
      }, {
        path: 'line',
        component: _line_component__WEBPACK_IMPORTED_MODULE_7__["LineComponent"]
      }, {
        path: 'particle',
        component: _particle_component__WEBPACK_IMPORTED_MODULE_6__["ParticleComponent"]
      }];

      var AnimationModule = function AnimationModule() {
        _classCallCheck(this, AnimationModule);
      };

      AnimationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"].forChild(), _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        declarations: [_point_component__WEBPACK_IMPORTED_MODULE_5__["PointComponent"], _line_component__WEBPACK_IMPORTED_MODULE_7__["LineComponent"], _particle_component__WEBPACK_IMPORTED_MODULE_6__["ParticleComponent"]]
      })], AnimationModule);
      /***/
    },

    /***/
    "DiWl":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/animation/point.component.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function DiWl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"system-content\" style=\"grid-template-columns: 1fr\">\n    <div class=\"system-body\" >\n        <green-map-control (mapInit)=\"mapInit($event)\"></green-map-control>\n        <div class=\"panel\" style=\"position: absolute; top: 15px; right: 15px; z-index: 1000;\">\n            <div class=\"panel-heading\">\n                <div class=\"panel-title\">配置</div>\n            </div>\n            <div class=\"panel-body\" style=\"display: grid; grid-template-columns: 1fr 1fr; grid-gap: 10px; width: 540px\" *ngIf=\"animation\">\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">颜色：</div>\n                    <input class=\"form-control\" type=\"color\" name=\"color\" [(ngModel)]=\"animation.color\"  (ngModelChange)=\"change()\">\n                </div>\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">光圈数：</div>\n                    <input class=\"form-control\" type=\"number\" name=\"ring\" [(ngModel)]=\"animation.ring\"  autocomplete=\"off\" (ngModelChange)=\"change()\" min=\"2\" [max]=\"5\" step=\"1\">\n                </div>\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">扩散速度：</div>\n                    <input class=\"form-control\" type=\"number\" name=\"velocity\" [(ngModel)]=\"animation.velocity\"  autocomplete=\"off\" (ngModelChange)=\"change()\" min=\"5\" [max]=\"30\" step=\"1\">\n                </div>\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">最大半径：</div>\n                    <input class=\"form-control\" type=\"number\" name=\"limit\" [(ngModel)]=\"animation.limit\"  autocomplete=\"off\" (ngModelChange)=\"change()\" min=\"20\" [max]=\"50\" step=\"1\">\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "LhA6":
    /*!****************************************************!*\
      !*** ./src/app/main/animation/line.component.scss ***!
      \****************************************************/

    /*! exports provided: default */

    /***/
    function LhA6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaW5lLmNvbXBvbmVudC5zY3NzIn0= */";
      /***/
    },

    /***/
    "Ro6E":
    /*!**********************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/animation/particle.component.html ***!
      \**********************************************************************************************/

    /*! exports provided: default */

    /***/
    function Ro6E(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"system-content\" style=\"grid-template-columns: 1fr\">\n    <div class=\"system-body\" >\n        <green-map-control (mapInit)=\"mapInit($event)\"></green-map-control>\n        <div class=\"panel\" style=\"position: absolute; top: 15px; right: 15px; z-index: 1000;\">\n            <div class=\"panel-heading\">\n                <div class=\"panel-title\">配置</div>\n            </div>\n            <div class=\"panel-body\" style=\"display: grid; grid-template-columns: 1fr 1fr; grid-gap: 10px; width: 540px\" *ngIf=\"animation\">\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">颜色：</div>\n                    <input class=\"form-control\" type=\"color\" name=\"color\" [(ngModel)]=\"animation.color\"  (ngModelChange)=\"change()\">\n                </div>\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">轨道半径：</div>\n                    <input class=\"form-control\" type=\"number\" name=\"radius\" [(ngModel)]=\"animation.radius\"  autocomplete=\"off\" (ngModelChange)=\"change()\" min=\"20\" [max]=\"80\" step=\"1\">\n                </div>\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">环绕速度：</div>\n                    <input class=\"form-control\" type=\"number\" name=\"speed\" [(ngModel)]=\"animation.speed\"  autocomplete=\"off\" (ngModelChange)=\"change()\" min=\"5\" [max]=\"20\" step=\"1\">\n                </div>\n                <div class=\"input-group\">\n                    <div class=\"input-group-addon\">粒子数：</div>\n                    <input class=\"form-control\" type=\"number\" name=\"count\" [(ngModel)]=\"animation.count\"  autocomplete=\"off\" (ngModelChange)=\"change()\" min=\"5\" [max]=\"50\" step=\"1\">\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";
      /***/
    },

    /***/
    "emAN":
    /*!*****************************************************!*\
      !*** ./src/app/main/animation/point.component.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function emAN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb2ludC5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "fHBY":
    /*!***************************************************!*\
      !*** ./src/app/main/animation/point.component.ts ***!
      \***************************************************/

    /*! exports provided: PointComponent */

    /***/
    function fHBY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PointComponent", function () {
        return PointComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_point_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./point.component.html */
      "DiWl");
      /* harmony import */


      var _point_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./point.component.scss */
      "emAN");
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

      var PointComponent = /*#__PURE__*/function () {
        function PointComponent(router, configService, http) {
          _classCallCheck(this, PointComponent);

          this.router = router;
          this.configService = configService;
          this.http = http;
        }

        _createClass(PointComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {} /////////////////以下界面交互/////////////////////

        }, {
          key: "mapInit",
          value: function mapInit(event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var point;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.map = event.map;
                      this.map.setView([116.397411, 39.909186], 4);
                      point = new green_gis__WEBPACK_IMPORTED_MODULE_6__["Point"](116.397411, 39.909186);
                      this.animation = new green_gis__WEBPACK_IMPORTED_MODULE_6__["PointAnimation"](point);
                      this.map.addAnimation(this.animation);

                    case 5:
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
            if (this.animation) {
              this.map.redraw();
            }
          }
        }]);

        return PointComponent;
      }();

      PointComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _core_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]
        }];
      };

      PointComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-point',
        template: _raw_loader_point_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_point_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PointComponent);
      /***/
    },

    /***/
    "u82u":
    /*!**************************************************!*\
      !*** ./src/app/main/animation/line.component.ts ***!
      \**************************************************/

    /*! exports provided: LineComponent */

    /***/
    function u82u(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LineComponent", function () {
        return LineComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_line_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./line.component.html */
      "4SdK");
      /* harmony import */


      var _line_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./line.component.scss */
      "LhA6");
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

      var LineComponent = /*#__PURE__*/function () {
        function LineComponent(router, configService, http) {
          _classCallCheck(this, LineComponent);

          this.router = router;
          this.configService = configService;
          this.http = http;
        }

        _createClass(LineComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {} /////////////////以下界面交互/////////////////////

        }, {
          key: "mapInit",
          value: function mapInit(event) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var polyline;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.map = event.map;
                      this.map.setView([116.397411, 39.909186], 4);
                      polyline = new green_gis__WEBPACK_IMPORTED_MODULE_6__["Polyline"]([[116.397411, 39.909186], [109.519, 18.271]]);
                      this.animation = new green_gis__WEBPACK_IMPORTED_MODULE_6__["LineAnimation"](polyline);
                      this.map.addAnimation(this.animation);

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "change",
          value: function change() {
            if (this.animation) {
              this.map.redraw();
            }
          }
        }]);

        return LineComponent;
      }();

      LineComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _core_config_service__WEBPACK_IMPORTED_MODULE_4__["ConfigService"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]
        }];
      };

      LineComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-line',
        template: _raw_loader_line_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_line_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LineComponent);
      /***/
    }
  }]);
})();
//# sourceMappingURL=main-animation-animation-module-es5.js.map