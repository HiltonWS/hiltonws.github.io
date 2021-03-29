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
  var MODEL_URL = 'https://cdn.statically.io/gh/HiltonWS/hiltonws.github.io/master/smile/models';
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
                        video.addEventListener('play', function () {
                          onPlay();
                        });

                      case 3:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsIk1PREVMX1VSTCIsIlByb21pc2UiLCJhbGwiLCJmYWNlYXBpIiwidGhlbiIsInN0YXJ0IiwiZSIsImNvbnNvbGUiLCJlcnJvciIsInVzZUVmZmVjdCIsInZpZGVvIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIm5hdmlnYXRvciIsImdldFVzZXJNZWRpYSIsInN0cmVhbSIsInNyY09iamVjdCIsImVyciIsImFkZEV2ZW50TGlzdGVuZXIiLCJvblBsYXkiLCJvbkludGVydmFsIiwibGFzdFNldEludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJ2aWRlbzEiLCJ0aW55T3B0aW9ucyIsIndpdGhGYWNlRXhwcmVzc2lvbnMiLCJmdWxsRmFjZURlc2NyaXB0aW9ucyIsImZvckVhY2giLCJlbGVtZW50IiwiZXhwcmVzc2lvbnMiLCJoYXBweSIsIm92ZXJsYXkiLCJzdHlsZSIsImRpc3BsYXkiLCJjbGVhckludGVydmFsIiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsImhlaWdodCIsIm9mZnNldEhlaWdodCIsInNpdGVUaXRsZSIsInV0aWxTdHlsZXMiLCJoZWFkaW5nTWQiLCJjYW52YXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFDN0IsTUFBTUMsU0FBUyxHQUFHLFNBQWxCO0FBQ0FDLFNBQU8sQ0FBQ0MsR0FBUixDQUNFLENBQ0VDLHFFQUFBLENBQWtDSCxTQUFsQyxDQURGLEVBRUVHLGlFQUFBLENBQThCSCxTQUE5QixDQUZGLEVBR0VHLG1FQUFBLENBQWdDSCxTQUFoQyxDQUhGLEVBSUVHLG9FQUFBLENBQWlDSCxTQUFqQyxDQUpGLEVBS0VHLG1FQUFBLENBQWdDSCxTQUFoQyxDQUxGLENBREYsRUFTR0ksSUFUSCxDQVNRQyxLQUFLLEVBVGIsV0FVUyxVQUFDQyxDQUFEO0FBQUEsV0FBT0MsT0FBTyxDQUFDQyxLQUFSLENBQWNGLENBQWQsQ0FBUDtBQUFBLEdBVlQ7O0FBRjZCLFdBY2RELEtBZGM7QUFBQTtBQUFBOztBQUFBO0FBQUE7O0FBQUEsNlFBYzdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7QUFDRUkscUVBQVMsNFFBQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0ZDLDZCQURFLEdBQ01DLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQUROO0FBRVJDLGlDQUFTLENBQUNDLFlBQVYsQ0FDRTtBQUFFSiwrQkFBSyxFQUFFO0FBQVQseUJBREYsRUFFRSxVQUFBSyxNQUFNO0FBQUEsaUNBQUlMLEtBQUssQ0FBQ00sU0FBTixHQUFrQkQsTUFBdEI7QUFBQSx5QkFGUixFQUdFLFVBQUFFLEdBQUc7QUFBQSxpQ0FBSVYsT0FBTyxDQUFDQyxLQUFSLENBQWNTLEdBQWQsQ0FBSjtBQUFBLHlCQUhMO0FBTUFQLDZCQUFLLENBQUNRLGdCQUFOLENBQXVCLE1BQXZCLEVBQStCLFlBQU07QUFDbkNDLGdDQUFNO0FBQ1AseUJBRkQ7O0FBUlE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBRCxHQUFUOztBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBZDZCO0FBQUE7QUFBQTs7QUFBQSxXQStCZEEsTUEvQmM7QUFBQTtBQUFBOztBQUFBO0FBQUEsMlFBK0I3QjtBQUFBLHlEQU9XQyxVQVBYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPV0Esd0JBUFgsMEJBT3dCO0FBQ3BCQywrQkFBZSxHQUFHQyxXQUFXLDRRQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBQ0tuQiwwREFBQSxDQUF1Qm9CLE1BQXZCLEVBQStCQyxXQUEvQixFQUE0Q0MsbUJBQTVDLEVBREw7O0FBQUE7QUFDeEJDLDhDQUR3QjtBQUU1QkEsOENBQW9CLENBQUNDLE9BQXJCLENBQTZCLFVBQUFDLE9BQU8sRUFBSTtBQUN0QyxnQ0FBSUEsT0FBTyxDQUFDQyxXQUFSLENBQW9CQyxLQUFwQixHQUE0QixJQUE1QixJQUFvQ0YsT0FBTyxDQUFDQyxXQUFSLENBQW9CQyxLQUFwQixJQUE2QixDQUFyRSxFQUF3RTtBQUN0RUMscUNBQU8sQ0FBQ0MsS0FBUixDQUFjQyxPQUFkLEdBQXdCLE1BQXhCO0FBQ0QsNkJBRkQsTUFFTztBQUNMRixxQ0FBTyxDQUFDQyxLQUFSLENBQWNDLE9BQWQsR0FBd0IsT0FBeEI7QUFDRDtBQUNGLDJCQU5EO0FBT0FDLHVDQUFhLENBQUNiLGVBQUQsQ0FBYjtBQUNBRCxvQ0FBVTs7QUFWa0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQUQsSUFXMUIsR0FYMEIsQ0FBN0I7QUFZRCxlQXBCSDs7QUFDUUcsb0JBRFIsR0FDaUJaLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixDQURqQjtBQUVRbUIscUJBRlIsR0FFa0JwQixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsU0FBeEIsQ0FGbEI7QUFHRW1CLHFCQUFPLENBQUNJLEtBQVIsR0FBZ0JaLE1BQU0sQ0FBQ2EsV0FBdkI7QUFDQUwscUJBQU8sQ0FBQ00sTUFBUixHQUFpQmQsTUFBTSxDQUFDZSxZQUF4QjtBQUNNZCx5QkFMUixHQUtzQixJQUFJckIsbUVBQUosRUFMdEI7QUFxQkVpQix3QkFBVTs7QUFyQlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0EvQjZCO0FBQUE7QUFBQTs7QUF1RDdCLHNCQUNFLHFFQUFDLDBEQUFEO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDRTtBQUFBLGtCQUFRbUIsNERBQVNBO0FBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFJRTtBQUFTLGVBQVMsRUFBRUMsK0RBQVUsQ0FBQ0MsU0FBL0I7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURGLGVBRUU7QUFBTyxVQUFFLEVBQUMsWUFBVjtBQUF1QixnQkFBUSxNQUEvQjtBQUFnQyxhQUFLLE1BQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRTtBQUFRLGlCQUFTLEVBQUVELCtEQUFVLENBQUNFLE1BQTlCO0FBQXNDLFVBQUUsRUFBQztBQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFZRDtLQW5FdUIzQyxJIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjhmYzc0ODZjODVlZjVkYTA2ZDBlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgTGF5b3V0LCB7IHNpdGVUaXRsZSB9IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IHV0aWxTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3V0aWxzLm1vZHVsZS5jc3MnXG5pbXBvcnQgKiBhcyBmYWNlYXBpIGZyb20gJ2ZhY2UtYXBpLmpzJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgTU9ERUxfVVJMID0gJy9tb2RlbHMnXG4gIFByb21pc2UuYWxsKFxuICAgIFtcbiAgICAgIGZhY2VhcGkubG9hZFRpbnlGYWNlRGV0ZWN0b3JNb2RlbChNT0RFTF9VUkwpLFxuICAgICAgZmFjZWFwaS5sb2FkRmFjZUxhbmRtYXJrTW9kZWwoTU9ERUxfVVJMKSxcbiAgICAgIGZhY2VhcGkubG9hZEZhY2VFeHByZXNzaW9uTW9kZWwoTU9ERUxfVVJMKSxcbiAgICAgIGZhY2VhcGkubG9hZEZhY2VSZWNvZ25pdGlvbk1vZGVsKE1PREVMX1VSTCksXG4gICAgICBmYWNlYXBpLmxvYWRTc2RNb2JpbGVuZXR2MU1vZGVsKE1PREVMX1VSTClcbiAgICBdXG4gIClcbiAgICAudGhlbihzdGFydCgpKVxuICAgIC5jYXRjaCgoZSkgPT4gY29uc29sZS5lcnJvcihlKSk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gc3RhcnQoKSB7XG4gICAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IHZpZGVvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0VmlkZW8nKVxuICAgICAgbmF2aWdhdG9yLmdldFVzZXJNZWRpYShcbiAgICAgICAgeyB2aWRlbzoge30gfSxcbiAgICAgICAgc3RyZWFtID0+IHZpZGVvLnNyY09iamVjdCA9IHN0cmVhbSxcbiAgICAgICAgZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKVxuICAgICAgKVxuICAgICAgXG4gICAgICB2aWRlby5hZGRFdmVudExpc3RlbmVyKCdwbGF5JywgKCkgPT4ge1xuICAgICAgICBvblBsYXkoKVxuICAgICAgfSlcblxuICAgIH0pXG5cbiAgfVxuXG4gIGFzeW5jIGZ1bmN0aW9uIG9uUGxheSgpIHtcbiAgICBjb25zdCB2aWRlbzEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRWaWRlbycpXG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdmVybGF5JylcbiAgICBvdmVybGF5LndpZHRoID0gdmlkZW8xLm9mZnNldFdpZHRoO1xuICAgIG92ZXJsYXkuaGVpZ2h0ID0gdmlkZW8xLm9mZnNldEhlaWdodDtcbiAgICBjb25zdCB0aW55T3B0aW9ucyA9IG5ldyBmYWNlYXBpLlRpbnlGYWNlRGV0ZWN0b3JPcHRpb25zKCk7XG4gICAgbGV0IGxhc3RTZXRJbnRlcnZhbDtcbiAgICBmdW5jdGlvbiBvbkludGVydmFsKCkge1xuICAgICAgbGFzdFNldEludGVydmFsID0gc2V0SW50ZXJ2YWwoYXN5bmMgKCkgPT4ge1xuICAgICAgICBsZXQgZnVsbEZhY2VEZXNjcmlwdGlvbnMgPSBhd2FpdCBmYWNlYXBpLmRldGVjdEFsbEZhY2VzKHZpZGVvMSwgdGlueU9wdGlvbnMpLndpdGhGYWNlRXhwcmVzc2lvbnMoKVxuICAgICAgICBmdWxsRmFjZURlc2NyaXB0aW9ucy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgIGlmIChlbGVtZW50LmV4cHJlc3Npb25zLmhhcHB5ID4gMC45MCAmJiBlbGVtZW50LmV4cHJlc3Npb25zLmhhcHB5IDw9IDEpIHtcbiAgICAgICAgICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwobGFzdFNldEludGVydmFsKTtcbiAgICAgICAgb25JbnRlcnZhbCgpO1xuICAgICAgfSwgMjAwKTtcbiAgICB9XG4gICAgb25JbnRlcnZhbCgpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57c2l0ZVRpdGxlfTwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9e3V0aWxTdHlsZXMuaGVhZGluZ01kfT5cbiAgICAgICAgPGgxPlNtaWxlPC9oMT5cbiAgICAgICAgPHZpZGVvIGlkPVwiaW5wdXRWaWRlb1wiIGF1dG9QbGF5IG11dGVkPiA8L3ZpZGVvPlxuICAgICAgICA8Y2FudmFzIGNsYXNzTmFtZT17dXRpbFN0eWxlcy5jYW52YXN9IGlkPVwib3ZlcmxheVwiIC8+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9MYXlvdXQ+XG4gIClcbn0iXSwic291cmNlUm9vdCI6IiJ9