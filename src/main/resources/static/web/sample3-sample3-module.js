(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sample3-sample3-module"],{

/***/ "./src/app/sample3/sample3-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/sample3/sample3-routing.module.ts ***!
  \***************************************************/
/*! exports provided: Sample3RoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sample3RoutingModule", function() { return Sample3RoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _sample3_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sample3.component */ "./src/app/sample3/sample3.component.ts");





const routes = [{ path: '', component: _sample3_component__WEBPACK_IMPORTED_MODULE_2__["Sample3Component"] }];
class Sample3RoutingModule {
}
Sample3RoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Sample3RoutingModule });
Sample3RoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function Sample3RoutingModule_Factory(t) { return new (t || Sample3RoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Sample3RoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Sample3RoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/sample3/sample3.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sample3/sample3.component.ts ***!
  \**********************************************/
/*! exports provided: Sample3Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sample3Component", function() { return Sample3Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class Sample3Component {
    constructor() {
    }
    ngOnInit() {
    }
}
Sample3Component.ɵfac = function Sample3Component_Factory(t) { return new (t || Sample3Component)(); };
Sample3Component.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: Sample3Component, selectors: [["app-sample3"]], decls: 2, vars: 0, template: function Sample3Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sample3 works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NhbXBsZTMvc2FtcGxlMy5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Sample3Component, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sample3',
                templateUrl: './sample3.component.html',
                styleUrls: ['./sample3.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/sample3/sample3.module.ts":
/*!*******************************************!*\
  !*** ./src/app/sample3/sample3.module.ts ***!
  \*******************************************/
/*! exports provided: Sample3Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sample3Module", function() { return Sample3Module; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _sample3_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sample3-routing.module */ "./src/app/sample3/sample3-routing.module.ts");
/* harmony import */ var _sample3_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sample3.component */ "./src/app/sample3/sample3.component.ts");





class Sample3Module {
}
Sample3Module.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: Sample3Module });
Sample3Module.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function Sample3Module_Factory(t) { return new (t || Sample3Module)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _sample3_routing_module__WEBPACK_IMPORTED_MODULE_2__["Sample3RoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](Sample3Module, { declarations: [_sample3_component__WEBPACK_IMPORTED_MODULE_3__["Sample3Component"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _sample3_routing_module__WEBPACK_IMPORTED_MODULE_2__["Sample3RoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Sample3Module, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_sample3_component__WEBPACK_IMPORTED_MODULE_3__["Sample3Component"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _sample3_routing_module__WEBPACK_IMPORTED_MODULE_2__["Sample3RoutingModule"]
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=sample3-sample3-module.js.map