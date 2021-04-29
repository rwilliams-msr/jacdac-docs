(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[353],{

/***/ 50353:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardSevenSegmentDisplay; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71815);
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89196);
/* harmony import */ var _widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48059);
/* harmony import */ var _widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60650);
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(80838);
/* harmony import */ var _RegisterInput__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(24162);
/* harmony import */ var _ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2285);
/* harmony import */ var _hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(49013);









function DashboardSevenSegmentDisplay(props) {
  var service = props.service,
      visible = props.visible;

  var _ref = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .SevenSegmentDisplayReg.Digits */ .p2w.Digits)) || [new Uint8Array(0)],
      digits = _ref[0];

  var brightnessRegister = service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .SevenSegmentDisplayReg.Brightness */ .p2w.Brightness);

  var _useRegisterUnpackedV = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(brightnessRegister, props),
      brightness = _useRegisterUnpackedV[0];

  var _useRegisterUnpackedV2 = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .SevenSegmentDisplayReg.DigitCount */ .p2w.DigitCount), props),
      digitCount = _useRegisterUnpackedV2[0];

  var decimalPoint = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterBoolValue */ .I8)(service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .SevenSegmentDisplayReg.DecimalPoint */ .p2w.DecimalPoint), props);
  var server = (0,_hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(service);
  var color = server ? "secondary" : "primary";

  var _useWidgetTheme = (0,_widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(color),
      active = _useWidgetTheme.active,
      background = _useWidgetTheme.background;

  if (digitCount === undefined) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, null);
  var md = 4;
  var rs = 4;
  var hs = 32;
  var ws = 28;
  var wd = ws + 2 * rs;
  var hd = 2 * rs;
  var w = digitCount * (wd + 4 * md) + md;
  var h = 2 * md + 3 * hd + 2 * hs;
  var opacity = brightness || 0;
  /*
  GFEDCBA DP
  - A -
  |   |
  G   B
  |   |
  - F -
  |   |   -
  E   C  |DP|
  - D -   -
  */

  var VerticalSegment = function VerticalSegment(props) {
    var bit = (props.digit & props.mask) == props.mask;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
      fill: background,
      stroke: "none",
      d: "M " + props.mx + " " + props.my + " l " + -rs + " " + rs + " v " + hs + " l " + rs + " " + rs + " l " + rs + " " + -rs + " v " + -hs + " Z"
    }), bit && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
      opacity: opacity,
      fill: active,
      stroke: "none",
      d: "M " + props.mx + " " + props.my + " l " + -rs + " " + rs + " v " + hs + " l " + rs + " " + rs + " l " + rs + " " + -rs + " v " + -hs + " Z"
    }));
  };

  var HorizontalSegment = function HorizontalSegment(props) {
    var bit = (props.digit & props.mask) == props.mask;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
      fill: background,
      stroke: "none",
      d: "M " + props.mx + " " + props.my + " l " + rs + " " + -rs + " h " + ws + " l " + rs + " " + rs + " l " + -rs + " " + rs + " h " + -ws + " Z"
    }), bit && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
      opacity: opacity,
      fill: active,
      stroke: "none",
      d: "M " + props.mx + " " + props.my + " l " + rs + " " + -rs + " h " + ws + " l " + rs + " " + rs + " l " + -rs + " " + rs + " h " + -ws + " Z"
    }));
  };

  var DotSegment = function DotSegment(props) {
    var bit = (props.digit & 0x80) == 0x80;
    var mx = rs + wd + 2 * rs;
    var my = rs + 2 * hd + 2 * hs;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
      fill: background,
      stroke: "none",
      r: rs,
      cx: mx,
      cy: my
    }), bit && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("circle", {
      opacity: opacity,
      fill: active,
      stroke: "none",
      r: rs,
      cx: mx,
      cy: my
    }));
  };

  var Digit = function Digit(dprops) {
    var x = dprops.x,
        y = dprops.y,
        digit = dprops.digit;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", {
      transform: "translate(" + x + ", " + y + ")"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(VerticalSegment, {
      key: "G",
      mx: rs,
      my: rs,
      digit: digit,
      mask: 0x01
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(HorizontalSegment, {
      key: "F",
      mx: rs,
      my: rs + hs + hd,
      digit: digit,
      mask: 0x02
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(VerticalSegment, {
      key: "E",
      mx: rs,
      my: rs + hd + hs,
      digit: digit,
      mask: 0x04
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(HorizontalSegment, {
      key: "D",
      mx: rs,
      my: rs + 2 * hd + 2 * hs,
      digit: digit,
      mask: 0x08
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(VerticalSegment, {
      key: "C",
      mx: rs + wd,
      my: rs + hd + hs,
      digit: digit,
      mask: 0x10
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(VerticalSegment, {
      key: "B",
      mx: rs + wd,
      my: rs,
      digit: digit,
      mask: 0x20
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(HorizontalSegment, {
      key: "A",
      mx: rs,
      my: rs,
      digit: digit,
      mask: 0x40
    }), decimalPoint && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(DotSegment, {
      digit: digit
    }));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
    container: true,
    direction: "column"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
    item: true,
    xs: 12
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    width: w,
    height: h
  }, Array(digitCount).fill(0).map(function (_, i) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Digit, {
      key: i,
      x: md + (wd + 4 * md) * i,
      y: md,
      digit: (digits === null || digits === void 0 ? void 0 : digits[i]) || 0
    });
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z, {
    item: true
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_RegisterInput__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z, {
    register: brightnessRegister,
    visible: visible
  })));
}

/***/ })

}]);
//# sourceMappingURL=353-46dcf358d709a129bd67.js.map