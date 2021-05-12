(self["webpackChunkjacdac_docs"] = self["webpackChunkjacdac_docs"] || []).push([[7111],{

/***/ 7859:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ DashboardMatrixKeypad; }
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var _jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71815);
/* harmony import */ var _jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(89196);
/* harmony import */ var _widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(48059);
/* harmony import */ var _widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(60650);
/* harmony import */ var _hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(49013);
/* harmony import */ var _hooks_useFireKey__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8966);
/* harmony import */ var _hooks_useKeyboardNavigationProps__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(68786);
/* harmony import */ var _ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2285);
/* harmony import */ var _widgets_useWidgetSize__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8584);










function DashboardMatrixKeypad(props) {
  var service = props.service,
      services = props.services,
      variant = props.variant;
  var widgetRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
  var pressedRegister = service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .MatrixKeypadReg.Pressed */ .f6T.Pressed);

  var _useRegisterUnpackedV = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(pressedRegister, props),
      pressed = _useRegisterUnpackedV[0];

  var _useRegisterUnpackedV2 = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .MatrixKeypadReg.Labels */ .f6T.Labels), props),
      labels = _useRegisterUnpackedV2[0];

  var _useRegisterUnpackedV3 = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .MatrixKeypadReg.Rows */ .f6T.Rows), props),
      rows = _useRegisterUnpackedV3[0];

  var _useRegisterUnpackedV4 = (0,_jacdac_useRegisterValue__WEBPACK_IMPORTED_MODULE_2__/* .useRegisterUnpackedValue */ .Pf)(service.register(_jacdac_ts_src_jdom_constants__WEBPACK_IMPORTED_MODULE_1__/* .MatrixKeypadReg.Columns */ .f6T.Columns), props),
      columns = _useRegisterUnpackedV4[0];

  var server = (0,_hooks_useServiceServer__WEBPACK_IMPORTED_MODULE_5__/* .default */ .Z)(service);
  var color = server ? "secondary" : "primary";

  var _useWidgetTheme = (0,_widgets_useWidgetTheme__WEBPACK_IMPORTED_MODULE_4__/* .default */ .Z)(color),
      background = _useWidgetTheme.background,
      controlBackground = _useWidgetTheme.controlBackground,
      active = _useWidgetTheme.active,
      textProps = _useWidgetTheme.textProps;

  var widgetSize = (0,_widgets_useWidgetSize__WEBPACK_IMPORTED_MODULE_7__/* .default */ .Z)(variant, services.length); // no data about layout

  if (rows === undefined || columns === undefined) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_ui_LoadingProgress__WEBPACK_IMPORTED_MODULE_6__/* .default */ .Z, null);
  var clickeable = !!server; // compute size

  var pw = 8;
  var ph = 8;
  var ps = 0.5;
  var pr = 1;
  var m = 2;
  var w = columns * pw + (columns + 1) * m;
  var h = rows * ph + (rows + 1) * m;

  var handleButtonUp = function handleButtonUp(index) {
    return function () {
      server.up(index);
      pressedRegister.refresh();
    };
  };

  var handleButtonDown = function handleButtonDown(index) {
    return function () {
      server.down(index);
      pressedRegister.refresh();
    };
  }; // add leds


  var render = function render() {
    var ledEls = [];
    var ledProps = {
      className: clickeable ? "clickeable" : undefined,
      role: clickeable ? "button" : "",
      tabIndex: clickeable ? 0 : undefined
    };
    var y = m;

    for (var row = 0; row < rows; row++) {
      var x = m;

      var _loop = function _loop(col) {
        var _labels$index;

        var index = row * columns + col;
        var on = (pressed === null || pressed === void 0 ? void 0 : pressed.findIndex(function (p) {
          return p[0] === index;
        })) > -1;
        var label = labels === null || labels === void 0 ? void 0 : (_labels$index = labels[index]) === null || _labels$index === void 0 ? void 0 : _labels$index[0];
        var handleUp = clickeable ? handleButtonUp(index) : undefined;
        var handleDown = clickeable ? handleButtonDown(index) : undefined;
        var fireUp = (0,_hooks_useFireKey__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)(handleUp);
        var fireDown = (0,_hooks_useFireKey__WEBPACK_IMPORTED_MODULE_8__/* .default */ .Z)(handleDown);
        ledEls.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", Object.assign({
          key: "l" + row + "-" + col,
          x: x,
          y: y,
          width: pw,
          height: ph,
          rx: pr,
          ry: pr,
          fill: on ? active : controlBackground,
          stroke: "none",
          strokeWidth: ps
        }, ledProps, {
          "aria-label": label || "key " + row + "," + col,
          onKeyDown: fireDown,
          onKeyUp: fireUp,
          onPointerDown: handleDown,
          onPointerUp: handleUp
        })));

        if (label) {
          ledEls.push( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("text", Object.assign({
            key: "t" + row + "-" + col,
            fontSize: ph * 2 / 3
          }, textProps, {
            x: x + pw / 2,
            y: y + ph / 2
          }), label));
        }

        x += pw + m;
      };

      for (var col = 0; col < columns; col++) {
        _loop(col);
      }

      y += ph + m;
    }

    return {
      ledEls: ledEls
    };
  };

  var _render = render(),
      ledEls = _render.ledEls;

  var navProps = (0,_hooks_useKeyboardNavigationProps__WEBPACK_IMPORTED_MODULE_9__/* .default */ .Z)(widgetRef.current);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_widgets_SvgWidget__WEBPACK_IMPORTED_MODULE_3__/* .default */ .Z, {
    width: w,
    height: h,
    size: widgetSize
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("rect", {
    x: 0,
    y: 0,
    width: w,
    height: h,
    rx: pr,
    ry: pr,
    fill: background
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("g", Object.assign({
    ref: widgetRef
  }, navProps), ledEls));
}

/***/ }),

/***/ 68786:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ useKeyboardNavigationProps; }
});

// EXTERNAL MODULE: ./src/components/hooks/useFireKey.ts
var useFireKey = __webpack_require__(8966);
;// CONCATENATED MODULE: ./src/components/hooks/useArrowKeys.ts

var LEFT_KEY = 37;
var UP_KEY = 38;
var RIGHT_KEY = 39;
var DOWN_KEY = 40;
function useArrowKeys(options) {
  var _handlers;

  var onLeft = options.onLeft,
      onUp = options.onUp,
      onRight = options.onRight,
      onDown = options.onDown,
      symmetric = options.symmetric;
  if (!onLeft && !onUp && !onRight && !onDown) return undefined;
  var handlers = (_handlers = {}, _handlers[LEFT_KEY] = onLeft, _handlers[RIGHT_KEY] = onRight, _handlers[UP_KEY] = onUp || symmetric && onRight, _handlers[DOWN_KEY] = onDown || symmetric && onLeft, _handlers);
  return function (e) {
    var charCode = (0,useFireKey/* keyCodeFromEvent */.$)(e);
    var handler = handlers[charCode];

    if (handler) {
      e.preventDefault();
      handler();
    }
  };
}
;// CONCATENATED MODULE: ./src/components/hooks/useKeyboardNavigation.ts
function useKeyboardNavigation(parentRef) {
  var query = '[tabindex="0"]';

  var onMove = function onMove(offset) {
    return function () {
      console.log('keyboard move', {
        offset: offset
      });
      var focusable = Array.from((parentRef === null || parentRef === void 0 ? void 0 : parentRef.querySelectorAll(query)) || []);

      if (focusable.length) {
        var me = focusable.findIndex(function (f) {
          return f === document.activeElement;
        });
        var next = (me + offset + focusable.length) % focusable.length;
        focusable[next].focus();
      }
    };
  };

  return onMove;
}
;// CONCATENATED MODULE: ./src/components/hooks/useKeyboardNavigationProps.ts


function useKeyboardNavigationProps(parentRef, vertical) {
  var onMove = useKeyboardNavigation(parentRef);
  var onKeyDown = useArrowKeys({
    onLeft: !vertical && onMove(-1),
    onRight: !vertical && onMove(1),
    onDown: vertical && onMove(1),
    onUp: vertical && onMove(-1)
  });
  return {
    onKeyDown: parentRef && onKeyDown
  };
}

/***/ })

}]);
//# sourceMappingURL=7111-4bf4149d1ab42bc5c986.js.map