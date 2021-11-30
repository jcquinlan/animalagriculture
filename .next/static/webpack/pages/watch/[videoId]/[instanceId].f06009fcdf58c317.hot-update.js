"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/watch/[videoId]/[instanceId]",{

/***/ "./pages/watch/[videoId]/[instanceId]/index.tsx":
/*!******************************************************!*\
  !*** ./pages/watch/[videoId]/[instanceId]/index.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-player */ \"./node_modules/react-player/lib/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/Header */ \"./components/Header.tsx\");\n/* harmony import */ var _components_styled__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/styled */ \"./components/styled/index.tsx\");\n/* harmony import */ var _services_videoService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../services/videoService */ \"./services/videoService.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/jcquinlan/Repos/animalagriculture/pages/watch/[videoId]/[instanceId]/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nvar Home = function Home() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      videoURL = _useState[0],\n      setVideoURL = _useState[1];\n\n  var videoRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),\n      playing = _useState2[0],\n      setPlaying = _useState2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    var videoId = Array.isArray(router.query.videoId) ? router.query.videoId[0] : router.query.videoId;\n    var instanceId = Array.isArray(router.query.instanceId) ? router.query.instanceId[0] : router.query.instanceId;\n\n    if (videoId && instanceId) {\n      (0,_services_videoService__WEBPACK_IMPORTED_MODULE_6__.getVideoInstance)(parseInt(videoId), instanceId).then(function (res) {\n        console.log(res);\n        setVideoURL(res.data.video_id.url);\n      });\n    }\n  }, [router]);\n\n  var handleStart = function handleStart() {\n    setPlaying(true);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_styled__WEBPACK_IMPORTED_MODULE_5__.PageContainer, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"title\", {\n        children: \"aa.watch\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"meta\", {\n        name: \"description\",\n        content: \"Get paid to watch important videos from activists\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"main\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_styled__WEBPACK_IMPORTED_MODULE_5__.Container, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 42,\n          columnNumber: 21\n        }, _this), !videoURL && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"h5\", {\n          children: \"Loading...\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 25\n        }, _this), videoURL && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(PlayerWrapper, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(react_player__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n            ref: videoRef,\n            url: \"https://www.farmtransparency.org/uploads/videos/Dominion_720.mp4\",\n            muted: playing,\n            playing: playing\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 50,\n            columnNumber: 29\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 49,\n          columnNumber: 25\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_styled__WEBPACK_IMPORTED_MODULE_5__.ButtonRow, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_styled__WEBPACK_IMPORTED_MODULE_5__.Button, {\n            onClick: handleStart,\n            children: \"start\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 60,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Home, \"/HbCG5nj8tu13iZbStLV/ZveLEY=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];\n});\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy93YXRjaC9bdmlkZW9JZF0vW2luc3RhbmNlSWRdL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTVksSUFBYyxHQUFHLFNBQWpCQSxJQUFpQixHQUFNO0FBQUE7O0FBQ3pCLGtCQUFnQ1YsK0NBQVEsQ0FBQyxJQUFELENBQXhDO0FBQUEsTUFBT1csUUFBUDtBQUFBLE1BQWlCQyxXQUFqQjs7QUFDQSxNQUFNQyxRQUFRLEdBQUdkLDZDQUFNLENBQUMsSUFBRCxDQUF2QjtBQUNBLE1BQU1lLE1BQU0sR0FBR1gsc0RBQVMsRUFBeEI7O0FBQ0EsbUJBQThCSCwrQ0FBUSxDQUFDLEtBQUQsQ0FBdEM7QUFBQSxNQUFPZSxPQUFQO0FBQUEsTUFBZ0JDLFVBQWhCOztBQUVBbEIsRUFBQUEsZ0RBQVMsQ0FBQyxZQUFNO0FBQ1osUUFBTW1CLE9BQU8sR0FBR0MsS0FBSyxDQUFDQyxPQUFOLENBQWNMLE1BQU0sQ0FBQ00sS0FBUCxDQUFhSCxPQUEzQixJQUFzQ0gsTUFBTSxDQUFDTSxLQUFQLENBQWFILE9BQWIsQ0FBcUIsQ0FBckIsQ0FBdEMsR0FBZ0VILE1BQU0sQ0FBQ00sS0FBUCxDQUFhSCxPQUE3RjtBQUNBLFFBQU1JLFVBQVUsR0FBR0gsS0FBSyxDQUFDQyxPQUFOLENBQWNMLE1BQU0sQ0FBQ00sS0FBUCxDQUFhQyxVQUEzQixJQUF5Q1AsTUFBTSxDQUFDTSxLQUFQLENBQWFDLFVBQWIsQ0FBd0IsQ0FBeEIsQ0FBekMsR0FBc0VQLE1BQU0sQ0FBQ00sS0FBUCxDQUFhQyxVQUF0Rzs7QUFFQSxRQUFJSixPQUFPLElBQUlJLFVBQWYsRUFBMkI7QUFDdkJaLE1BQUFBLHdFQUFnQixDQUFDYSxRQUFRLENBQUNMLE9BQUQsQ0FBVCxFQUFvQkksVUFBcEIsQ0FBaEIsQ0FDS0UsSUFETCxDQUNVLFVBQUFDLEdBQUcsRUFBSTtBQUNUQyxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNBWixRQUFBQSxXQUFXLENBQUNZLEdBQUcsQ0FBQ0csSUFBSixDQUFTQyxRQUFULENBQWtCQyxHQUFuQixDQUFYO0FBQ0gsT0FKTDtBQUtIO0FBQ0osR0FYUSxFQVdOLENBQUNmLE1BQUQsQ0FYTSxDQUFUOztBQWFBLE1BQU1nQixXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3RCZCxJQUFBQSxVQUFVLENBQUMsSUFBRCxDQUFWO0FBQ0gsR0FGRDs7QUFJQSxzQkFDSSw4REFBQyw2REFBRDtBQUFBLDRCQUNJLDhEQUFDLGtEQUFEO0FBQUEsOEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQU0sWUFBSSxFQUFDLGFBQVg7QUFBeUIsZUFBTyxFQUFDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQU1JO0FBQUEsNkJBQ0ksOERBQUMseURBQUQ7QUFBQSxnQ0FDSSw4REFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLEVBR0ssQ0FBQ0wsUUFBRCxpQkFDRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKUixFQU9LQSxRQUFRLGlCQUNMLDhEQUFDLGFBQUQ7QUFBQSxpQ0FDSSw4REFBQyxvREFBRDtBQUNJLGVBQUcsRUFBRUUsUUFEVDtBQUVJLGVBQUcsRUFBQyxrRUFGUjtBQUdJLGlCQUFLLEVBQUVFLE9BSFg7QUFJSSxtQkFBTyxFQUFFQTtBQUpiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVJSLGVBa0JJLDhEQUFDLHlEQUFEO0FBQUEsaUNBQ0ksOERBQUMsc0RBQUQ7QUFBUSxtQkFBTyxFQUFFZSxXQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBbEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWlDSCxDQXhERDs7R0FBTXBCO1VBR2FQOzs7S0FIYk87QUEwRE4sK0RBQWVBLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd2F0Y2gvW3ZpZGVvSWRdL1tpbnN0YW5jZUlkXS9pbmRleC50c3g/MWU2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgUmVhY3RQbGF5ZXIgZnJvbSAncmVhY3QtcGxheWVyJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IHsgQnV0dG9uLCBCdXR0b25Sb3csIENvbnRhaW5lciwgUGFnZUNvbnRhaW5lciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvc3R5bGVkJztcbmltcG9ydCB7IGdldFZpZGVvSW5zdGFuY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy92aWRlb1NlcnZpY2UnO1xuXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBbdmlkZW9VUkwsIHNldFZpZGVvVVJMXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IHZpZGVvUmVmID0gdXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IFtwbGF5aW5nLCBzZXRQbGF5aW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHZpZGVvSWQgPSBBcnJheS5pc0FycmF5KHJvdXRlci5xdWVyeS52aWRlb0lkKSA/IHJvdXRlci5xdWVyeS52aWRlb0lkWzBdIDogcm91dGVyLnF1ZXJ5LnZpZGVvSWQ7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlSWQgPSBBcnJheS5pc0FycmF5KHJvdXRlci5xdWVyeS5pbnN0YW5jZUlkKSA/IHJvdXRlci5xdWVyeS5pbnN0YW5jZUlkWzBdIDogcm91dGVyLnF1ZXJ5Lmluc3RhbmNlSWQ7XG5cbiAgICAgICAgaWYgKHZpZGVvSWQgJiYgaW5zdGFuY2VJZCkge1xuICAgICAgICAgICAgZ2V0VmlkZW9JbnN0YW5jZShwYXJzZUludCh2aWRlb0lkKSwgaW5zdGFuY2VJZClcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgICAgICAgICAgIHNldFZpZGVvVVJMKHJlcy5kYXRhLnZpZGVvX2lkLnVybCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbcm91dGVyXSk7XG5cbiAgICBjb25zdCBoYW5kbGVTdGFydCA9ICgpID0+IHtcbiAgICAgICAgc2V0UGxheWluZyh0cnVlKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8UGFnZUNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5hYS53YXRjaDwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdldCBwYWlkIHRvIHdhdGNoIGltcG9ydGFudCB2aWRlb3MgZnJvbSBhY3RpdmlzdHNcIiAvPlxuICAgICAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8SGVhZGVyIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgeyF2aWRlb1VSTCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDU+TG9hZGluZy4uLjwvaDU+XG4gICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAge3ZpZGVvVVJMICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQbGF5ZXJXcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdFBsYXllclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3ZpZGVvUmVmfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw9J2h0dHBzOi8vd3d3LmZhcm10cmFuc3BhcmVuY3kub3JnL3VwbG9hZHMvdmlkZW9zL0RvbWluaW9uXzcyMC5tcDQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11dGVkPXtwbGF5aW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5aW5nPXtwbGF5aW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BsYXllcldyYXBwZXI+XG4gICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblJvdz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlU3RhcnR9PnN0YXJ0PC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uUm93PlxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgPC9tYWluPlxuICAgICAgICA8L1BhZ2VDb250YWluZXI+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuXG5cblxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiSGVhZCIsIlJlYWN0UGxheWVyIiwidXNlUm91dGVyIiwiSGVhZGVyIiwiQnV0dG9uIiwiQnV0dG9uUm93IiwiQ29udGFpbmVyIiwiUGFnZUNvbnRhaW5lciIsImdldFZpZGVvSW5zdGFuY2UiLCJIb21lIiwidmlkZW9VUkwiLCJzZXRWaWRlb1VSTCIsInZpZGVvUmVmIiwicm91dGVyIiwicGxheWluZyIsInNldFBsYXlpbmciLCJ2aWRlb0lkIiwiQXJyYXkiLCJpc0FycmF5IiwicXVlcnkiLCJpbnN0YW5jZUlkIiwicGFyc2VJbnQiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJ2aWRlb19pZCIsInVybCIsImhhbmRsZVN0YXJ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/watch/[videoId]/[instanceId]/index.tsx\n");

/***/ })

});