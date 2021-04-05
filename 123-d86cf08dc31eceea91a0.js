(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[123],{

/***/ "wvcQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ DashboardSoundSpectrum; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("HaE+");

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__("o0o1");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("q1tI");
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./src/jacdac/useRegisterValue.ts
var useRegisterValue = __webpack_require__("dYIP");

// EXTERNAL MODULE: ./src/components/hooks/useServiceHost.ts
var useServiceHost = __webpack_require__("asyI");

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__("tRbT");

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Mic.js
var Mic = __webpack_require__("3NjB");
var Mic_default = /*#__PURE__*/__webpack_require__.n(Mic);

// EXTERNAL MODULE: ./jacdac-ts/src/jdom/constants.ts
var constants = __webpack_require__("ZfHV");

// EXTERNAL MODULE: ./src/components/hooks/useAudioAnalyzer.ts + 1 modules
var useAudioAnalyzer = __webpack_require__("sgTi");

// CONCATENATED MODULE: ./src/components/hooks/useMicrophoneSpectrum.ts


function useMicrophoneSpectrum(enabled, options) {
  var _useMicrophoneAnalyze = Object(useAudioAnalyzer["a" /* useMicrophoneAnalyzer */])(options),
      analyser = _useMicrophoneAnalyze.analyser,
      onClickActivateMicrophone = _useMicrophoneAnalyze.onClickActivateMicrophone,
      closeMicrophone = _useMicrophoneAnalyze.closeMicrophone;

  var frequencies = Object(react["useRef"])(new Uint8Array(0));
  Object(react["useEffect"])(function () {
    if (!enabled) closeMicrophone();
  }, [enabled]);
  return {
    onClickActivateMicrophone: onClickActivateMicrophone,
    spectrum: function spectrum() {
      var a = analyser();
      if (!a) return frequencies.current;
      if (frequencies.current.length !== a.frequencyBinCount) frequencies.current = new Uint8Array(a.frequencyBinCount);
      a === null || a === void 0 ? void 0 : a.getByteFrequencyData(frequencies.current);
      return frequencies.current;
    }
  };
}
// EXTERNAL MODULE: ./src/components/ui/IconButtonWithProgress.tsx + 1 modules
var IconButtonWithProgress = __webpack_require__("gfZp");

// EXTERNAL MODULE: ./src/components/widgets/SvgWidget.tsx
var SvgWidget = __webpack_require__("7/Hy");

// EXTERNAL MODULE: ./src/components/widgets/useWidgetTheme.ts
var useWidgetTheme = __webpack_require__("Lml+");

// CONCATENATED MODULE: ./src/components/widgets/BytesBarGraphWidget.tsx





function BytesBarGraphWidget(props) {
  var register = props.register,
      size = props.size,
      visible = props.visible;
  var host = Object(useServiceHost["a" /* default */])(register.service);
  var color = host ? "secondary" : "primary";

  var _useWidgetTheme = Object(useWidgetTheme["a" /* default */])(color),
      background = _useWidgetTheme.background,
      controlBackground = _useWidgetTheme.controlBackground,
      active = _useWidgetTheme.active;

  var pathRef = Object(react["useRef"])();
  var w = 128;
  var h = w / 1.612;
  var m = 2;
  var dy = (h - 2 * m) / 0xff;
  Object(react["useEffect"])(function () {
    return visible && (register === null || register === void 0 ? void 0 : register.subscribe(constants["ad" /* REPORT_UPDATE */], function () {
      // render outside of react loop
      var current = pathRef.current;
      var bins = register.data;
      if (!current || !bins) return;
      var dx = (w - 2 * m) / bins.length;
      var dw = (w - 2 * m) / (bins.length * 6);
      var d = "M " + m + " " + (h - m) + " ";

      for (var i = 0; i < bins.length; ++i) {
        var bin = bins[i];
        d += " v " + -dy * bin + " h " + (dx - dw) + " v " + dy * bin + " h " + dw;
      }

      d += " z";
      current.setAttribute("d", d);
    }));
  }, [register, visible, pathRef.current]);
  return /*#__PURE__*/react_default.a.createElement(SvgWidget["a" /* default */], {
    width: w,
    height: h,
    size: size,
    background: background
  }, /*#__PURE__*/react_default.a.createElement("path", {
    fill: active,
    stroke: controlBackground,
    strokeWidth: m / 2,
    ref: pathRef
  }));
}
// CONCATENATED MODULE: ./src/components/dashboard/DashboardSoundSpectrum.tsx












function HostMicrophoneButton(props) {
  var host = props.host,
      service = props.service,
      visible = props.visible;
  var enabledRegister = service.register(constants["Ve" /* SoundSpectrumReg */].Enabled);
  var enabled = Object(useRegisterValue["a" /* useRegisterBoolValue */])(enabledRegister, props);

  var _useRegisterUnpackedV = Object(useRegisterValue["c" /* useRegisterUnpackedValue */])(service.register(constants["Ve" /* SoundSpectrumReg */].MinDecibels), props),
      minDecibels = _useRegisterUnpackedV[0];

  var _useRegisterUnpackedV2 = Object(useRegisterValue["c" /* useRegisterUnpackedValue */])(service.register(constants["Ve" /* SoundSpectrumReg */].MaxDecibels), props),
      maxDecibels = _useRegisterUnpackedV2[0];

  var _useRegisterUnpackedV3 = Object(useRegisterValue["c" /* useRegisterUnpackedValue */])(service.register(constants["Ve" /* SoundSpectrumReg */].FftPow2Size), props),
      fftPow2Size = _useRegisterUnpackedV3[0];

  var fftSize = 1 << (fftPow2Size || 5);

  var _useRegisterUnpackedV4 = Object(useRegisterValue["c" /* useRegisterUnpackedValue */])(service.register(constants["Ve" /* SoundSpectrumReg */].SmoothingTimeConstant), props),
      smoothingTimeConstant = _useRegisterUnpackedV4[0];

  var _useMicrophoneSpectru = useMicrophoneSpectrum(enabled && !!host, {
    fftSize: fftSize,
    smoothingTimeConstant: smoothingTimeConstant,
    minDecibels: minDecibels,
    maxDecibels: maxDecibels
  }),
      spectrum = _useMicrophoneSpectru.spectrum,
      onClickActivateMicrophone = _useMicrophoneSpectru.onClickActivateMicrophone;

  var title = enabled ? "Stop microphone" : "Start microphone";

  var handleClick = /*#__PURE__*/function () {
    var _ref = Object(asyncToGenerator["a" /* default */])( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
      return regenerator_default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (enabled) {
                _context.next = 3;
                break;
              }

              _context.next = 3;
              return onClickActivateMicrophone();

            case 3:
              _context.next = 5;
              return enabledRegister.sendSetBoolAsync(!enabled, true);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleClick() {
      return _ref.apply(this, arguments);
    };
  }(); // update volume on demand


  Object(react["useEffect"])(function () {
    return visible && enabled && (host === null || host === void 0 ? void 0 : host.subscribe(constants["Lc" /* REFRESH */], function () {
      var v = spectrum === null || spectrum === void 0 ? void 0 : spectrum();

      if (v !== undefined) {
        host.reading.setValues([v], true);
      }
    }));
  }, [host, spectrum, visible]);
  return /*#__PURE__*/react_default.a.createElement(IconButtonWithProgress["a" /* default */], {
    "aria-label": title,
    title: title,
    indeterminate: enabled,
    onClick: handleClick
  }, /*#__PURE__*/react_default.a.createElement(Mic_default.a, null));
}

function DashboardSoundSpectrum(props) {
  var service = props.service,
      visible = props.visible;
  var frequencyBinsRegister = service.register(constants["Ve" /* SoundSpectrumReg */].FrequencyBins);
  var host = Object(useServiceHost["a" /* default */])(service);
  return /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    direction: "column"
  }, /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true
  }, /*#__PURE__*/react_default.a.createElement(BytesBarGraphWidget, {
    visible: visible,
    register: frequencyBinsRegister
  })), /*#__PURE__*/react_default.a.createElement(Grid["a" /* default */], {
    item: true
  }, /*#__PURE__*/react_default.a.createElement(HostMicrophoneButton, {
    service: service,
    host: host,
    visible: visible
  })));
}

/***/ })

}]);
//# sourceMappingURL=123-d86cf08dc31eceea91a0.js.map