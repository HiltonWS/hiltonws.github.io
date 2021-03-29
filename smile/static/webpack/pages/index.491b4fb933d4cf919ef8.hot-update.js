webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var C_Personal_Projects_smile_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Personal_Projects_smile_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Personal_Projects_smile_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Personal_Projects_smile_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/utils.module.css */ "./styles/utils.module.css");
/* harmony import */ var _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var face_api_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! face-api.js */ "./node_modules/face-api.js/build/es6/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);



var _jsxFileName = "C:\\Personal\\Projects\\smile\\pages\\index.js";





function Home() {
  var MODEL_URL = 'https://cdn.statically.io/gh/HiltonWS/hiltonws.github.io/1.1.1/smile/models';
  Promise.all([face_api_js__WEBPACK_IMPORTED_MODULE_6__["loadTinyFaceDetectorModel"](MODEL_URL), face_api_js__WEBPACK_IMPORTED_MODULE_6__["loadFaceLandmarkModel"](MODEL_URL), face_api_js__WEBPACK_IMPORTED_MODULE_6__["loadFaceExpressionModel"](MODEL_URL), face_api_js__WEBPACK_IMPORTED_MODULE_6__["loadFaceRecognitionModel"](MODEL_URL), face_api_js__WEBPACK_IMPORTED_MODULE_6__["loadSsdMobilenetv1Model"](MODEL_URL)]).then(start())["catch"](function (e) {
    return console.error(e);
  });

  function start() {
    return _start.apply(this, arguments);
  }

  function _start() {
    var _s = $RefreshSig$();

    _start = Object(C_Personal_Projects_smile_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(_s( /*#__PURE__*/C_Personal_Projects_smile_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      return C_Personal_Projects_smile_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _s();

              Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])( /*#__PURE__*/Object(C_Personal_Projects_smile_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Personal_Projects_smile_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
                var video;
                return C_Personal_Projects_smile_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        video = document.getElementById('inputVideo');
                        navigator.getUserMedia({
                          video: {}
                        }, function (stream) {
                          return video.srcObject = stream;
                        }, function (err) {
                          return console.error(err);
                        });
                        overlay.style.display = "none";
                        video.addEventListener('play', function () {
                          onPlay();
                        });

                      case 4:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              })));

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }), "OD7bBpZva5O2jO+Puf00hKivP7c="));
    return _start.apply(this, arguments);
  }

  function onPlay() {
    return _onPlay.apply(this, arguments);
  }

  function _onPlay() {
    _onPlay = Object(C_Personal_Projects_smile_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Personal_Projects_smile_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
      var video1, overlay, tinyOptions, lastSetInterval, onInterval;
      return C_Personal_Projects_smile_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              onInterval = function _onInterval() {
                lastSetInterval = setInterval( /*#__PURE__*/Object(C_Personal_Projects_smile_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/C_Personal_Projects_smile_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
                  var fullFaceDescriptions;
                  return C_Personal_Projects_smile_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          _context3.next = 2;
                          return face_api_js__WEBPACK_IMPORTED_MODULE_6__["detectAllFaces"](video1, tinyOptions).withFaceExpressions();

                        case 2:
                          fullFaceDescriptions = _context3.sent;
                          fullFaceDescriptions.forEach(function (element) {
                            if (element.expressions.happy > 0.90 && element.expressions.happy <= 1) {
                              overlay.style.display = "none";
                            } else {
                              overlay.style.display = "block";
                            }
                          });
                          clearInterval(lastSetInterval);
                          onInterval();

                        case 6:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3);
                })), 200);
              };

              video1 = document.getElementById('inputVideo');
              overlay = document.getElementById('overlay');
              overlay.width = video1.offsetWidth;
              overlay.height = video1.offsetHeight;
              tinyOptions = new face_api_js__WEBPACK_IMPORTED_MODULE_6__["TinyFaceDetectorOptions"]();
              onInterval();

            case 7:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));
    return _onPlay.apply(this, arguments);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("title", {
        children: _components_layout__WEBPACK_IMPORTED_MODULE_4__["siteTitle"]
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
      className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.headingMd,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("h1", {
        children: "Smile"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("video", {
        id: "inputVideo",
        autoPlay: true,
        muted: true,
        children: " "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("canvas", {
        className: _styles_utils_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.canvas,
        id: "overlay"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 63,
    columnNumber: 5
  }, this);
}
_c = Home;

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsIk1PREVMX1VSTCIsIlByb21pc2UiLCJhbGwiLCJmYWNlYXBpIiwidGhlbiIsInN0YXJ0IiwiZSIsImNvbnNvbGUiLCJlcnJvciIsInVzZUVmZmVjdCIsInZpZGVvIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm5hdmlnYXRvciIsImdldFVzZXJNZWRpYSIsInN0cmVhbSIsInNyY09iamVjdCIsImVyciIsIm92ZXJsYXkiLCJzdHlsZSIsImRpc3BsYXkiLCJhZGRFdmVudExpc3RlbmVyIiwib25QbGF5Iiwib25JbnRlcnZhbCIsImxhc3RTZXRJbnRlcnZhbCIsInNldEludGVydmFsIiwidmlkZW8xIiwidGlueU9wdGlvbnMiLCJ3aXRoRmFjZUV4cHJlc3Npb25zIiwiZnVsbEZhY2VEZXNjcmlwdGlvbnMiLCJmb3JFYWNoIiwiZWxlbWVudCIsImV4cHJlc3Npb25zIiwiaGFwcHkiLCJjbGVhckludGVydmFsIiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsImhlaWdodCIsIm9mZnNldEhlaWdodCIsInNpdGVUaXRsZSIsInV0aWxTdHlsZXMiLCJoZWFkaW5nTWQiLCJjYW52YXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFDN0IsTUFBTUMsU0FBUyxHQUFHLFNBQWxCO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUNFLENBQ0VDLHFFQUFBLENBQWtDSCxTQUFsQyxDQURGLEVBRUVHLGlFQUFBLENBQThCSCxTQUE5QixDQUZGLEVBR0VHLG1FQUFBLENBQWdDSCxTQUFoQyxDQUhGLEVBSUVHLG9FQUFBLENBQWlDSCxTQUFqQyxDQUpGLEVBS0VHLG1FQUFBLENBQWdDSCxTQUFoQyxDQUxGLENBREYsRUFTR0ksSUFUSCxDQVNRQyxLQUFLLEVBVGIsV0FV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QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFO0FBQU8sVUFBRSxFQUFDLFlBQVY7QUFBdUIsZ0JBQVEsTUFBL0I7QUFBZ0MsYUFBSyxNQUFyQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZGLGVBR0U7QUFBUSxpQkFBUyxFQUFFRCwrREFBVSxDQUFDRSxNQUE5QjtBQUFzQyxVQUFFLEVBQUM7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBWUQ7S0FuRXVCM0MsSSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40OTFiNGZiOTMzZDRjZjkxOWVmOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IExheW91dCwgeyBzaXRlVGl0bGUgfSBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCB1dGlsU3R5bGVzIGZyb20gJy4uL3N0eWxlcy91dGlscy5tb2R1bGUuY3NzJ1xuaW1wb3J0ICogYXMgZmFjZWFwaSBmcm9tICdmYWNlLWFwaS5qcyc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IE1PREVMX1VSTCA9ICcvbW9kZWxzJ1xuICBQcm9taXNlLmFsbChcbiAgICBbXG4gICAgICBmYWNlYXBpLmxvYWRUaW55RmFjZURldGVjdG9yTW9kZWwoTU9ERUxfVVJMKSxcbiAgICAgIGZhY2VhcGkubG9hZEZhY2VMYW5kbWFya01vZGVsKE1PREVMX1VSTCksXG4gICAgICBmYWNlYXBpLmxvYWRGYWNlRXhwcmVzc2lvbk1vZGVsKE1PREVMX1VSTCksXG4gICAgICBmYWNlYXBpLmxvYWRGYWNlUmVjb2duaXRpb25Nb2RlbChNT0RFTF9VUkwpLFxuICAgICAgZmFjZWFwaS5sb2FkU3NkTW9iaWxlbmV0djFNb2RlbChNT0RFTF9VUkwpXG4gICAgXVxuICApXG4gICAgLnRoZW4oc3RhcnQoKSlcbiAgICAuY2F0Y2goKGUpID0+IGNvbnNvbGUuZXJyb3IoZSkpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIHN0YXJ0KCkge1xuICAgIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCB2aWRlbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dFZpZGVvJylcbiAgICAgIG5hdmlnYXRvci5nZXRVc2VyTWVkaWEoXG4gICAgICAgIHsgdmlkZW86IHt9IH0sXG4gICAgICAgIHN0cmVhbSA9PiB2aWRlby5zcmNPYmplY3QgPSBzdHJlYW0sXG4gICAgICAgIGVyciA9PiBjb25zb2xlLmVycm9yKGVycilcbiAgICAgIClcbiAgICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICB2aWRlby5hZGRFdmVudExpc3RlbmVyKCdwbGF5JywgKCkgPT4ge1xuICAgICAgICBvblBsYXkoKVxuICAgICAgfSlcblxuICAgIH0pXG5cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIG9uUGxheSgpIHtcbiAgICBjb25zdCB2aWRlbzEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRWaWRlbycpXG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdmVybGF5JylcbiAgICBvdmVybGF5LndpZHRoID0gdmlkZW8xLm9mZnNldFdpZHRoO1xuICAgIG92ZXJsYXkuaGVpZ2h0ID0gdmlkZW8xLm9mZnNldEhlaWdodDtcbiAgICBjb25zdCB0aW55T3B0aW9ucyA9IG5ldyBmYWNlYXBpLlRpbnlGYWNlRGV0ZWN0b3JPcHRpb25zKCk7XG4gICAgbGV0IGxhc3RTZXRJbnRlcnZhbDtcbiAgICBmdW5jdGlvbiBvbkludGVydmFsKCkge1xuICAgICAgbGFzdFNldEludGVydmFsID0gc2V0SW50ZXJ2YWwoYXN5bmMgKCkgPT4ge1xuICAgICAgICBsZXQgZnVsbEZhY2VEZXNjcmlwdGlvbnMgPSBhd2FpdCBmYWNlYXBpLmRldGVjdEFsbEZhY2VzKHZpZGVvMSwgdGlueU9wdGlvbnMpLndpdGhGYWNlRXhwcmVzc2lvbnMoKVxuICAgICAgICBmdWxsRmFjZURlc2NyaXB0aW9ucy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgIGlmIChlbGVtZW50LmV4cHJlc3Npb25zLmhhcHB5ID4gMC45MCAmJiBlbGVtZW50LmV4cHJlc3Npb25zLmhhcHB5IDw9IDEpIHtcbiAgICAgICAgICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwobGFzdFNldEludGVydmFsKTtcbiAgICAgICAgb25JbnRlcnZhbCgpO1xuICAgICAgfSwgMjAwKTtcbiAgICB9XG4gICAgb25JbnRlcnZhbCgpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57c2l0ZVRpdGxlfTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaGVhZGluZ01kfT5cbiAgICAgICAgPGgxPlNtaWxlPC9oMT5cbiAgICAgICAgPHZpZGVvIGlkPVwiaW5wdXRWaWRlb1wiIGF1dG9QbGF5IG11dGVkPiA8L3ZpZGVvPlxuICAgICAgICA8Y2FudmFzIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5jYW52YXN9IGlkPVwib3ZlcmxheVwiIC8+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn0iXSwic291cmNlUm9vdCI6IiJ9