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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-player */ \"./node_modules/react-player/lib/index.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/Header */ \"./components/Header.tsx\");\n/* harmony import */ var _components_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/styled */ \"./components/styled/index.tsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/jcquinlan/Repos/animalagriculture/pages/watch/[videoId]/[instanceId]/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nvar Home = function Home() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n      videoURL = _useState[0],\n      setVideoURL = _useState[1];\n\n  var videoRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n\n  var handleReady = function handleReady() {\n    console.log(videoRef.current.getDuration());\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_styled__WEBPACK_IMPORTED_MODULE_4__.PageContainer, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"title\", {\n        children: \"aa.watch\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"meta\", {\n        name: \"description\",\n        content: \"Get paid to watch important videos from activists\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"main\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_styled__WEBPACK_IMPORTED_MODULE_4__.Container, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 21\n        }, _this), !videoURL && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h5\", {\n          children: \"Loading...\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 25\n        }, _this), videoURL && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_player__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          ref: videoRef,\n          url: \"https://www.farmtransparency.org/uploads/videos/Dominion_720.mp4\",\n          muted: true,\n          playing: false,\n          onReady: handleReady\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 25\n        }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_styled__WEBPACK_IMPORTED_MODULE_4__.ButtonRow, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_components_styled__WEBPACK_IMPORTED_MODULE_4__.Button, {\n            onClick: function onClick() {},\n            children: \"start\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 42,\n            columnNumber: 25\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 21\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 17,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Home, \"T42nnkTUQPCBEywQYwVH8bB2gDo=\");\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy93YXRjaC9bdmlkZW9JZF0vW2luc3RhbmNlSWRdL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNUyxJQUFjLEdBQUcsU0FBakJBLElBQWlCLEdBQU07QUFBQTs7QUFDekIsa0JBQWdDUiwrQ0FBUSxDQUFDLElBQUQsQ0FBeEM7QUFBQSxNQUFPUyxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLE1BQU1DLFFBQVEsR0FBR1osNkNBQU0sQ0FBQyxJQUFELENBQXZCOztBQUVBLE1BQU1hLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDdEJDLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxRQUFRLENBQUNJLE9BQVQsQ0FBaUJDLFdBQWpCLEVBQVo7QUFDSCxHQUZEOztBQUlBLHNCQUNJLDhEQUFDLDZEQUFEO0FBQUEsNEJBQ0ksOERBQUMsa0RBQUQ7QUFBQSw4QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBRUk7QUFBTSxZQUFJLEVBQUMsYUFBWDtBQUF5QixlQUFPLEVBQUM7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKLGVBTUk7QUFBQSw2QkFDSSw4REFBQyx5REFBRDtBQUFBLGdDQUNJLDhEQUFDLDBEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosRUFHSyxDQUFDUCxRQUFELGlCQUNHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUpSLEVBT0tBLFFBQVEsaUJBQ0wsOERBQUMsb0RBQUQ7QUFDSSxhQUFHLEVBQUVFLFFBRFQ7QUFFSSxhQUFHLEVBQUMsa0VBRlI7QUFHSSxlQUFLLEVBQUUsSUFIWDtBQUlJLGlCQUFPLEVBQUUsS0FKYjtBQUtJLGlCQUFPLEVBQUVDO0FBTGI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFSUixlQWlCSSw4REFBQyx5REFBRDtBQUFBLGlDQUNJLDhEQUFDLHNEQUFEO0FBQVEsbUJBQU8sRUFBRSxtQkFBTSxDQUFHLENBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFqQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBZ0NILENBeENEOztHQUFNSjs7S0FBQUE7QUEwQ04sK0RBQWVBLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd2F0Y2gvW3ZpZGVvSWRdL1tpbnN0YW5jZUlkXS9pbmRleC50c3g/MWU2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgUmVhY3RQbGF5ZXIgZnJvbSAncmVhY3QtcGxheWVyJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IHsgQnV0dG9uLCBCdXR0b25Sb3csIENvbnRhaW5lciwgUGFnZUNvbnRhaW5lciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvc3R5bGVkJztcblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgW3ZpZGVvVVJMLCBzZXRWaWRlb1VSTF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCB2aWRlb1JlZiA9IHVzZVJlZihudWxsKTtcblxuICAgIGNvbnN0IGhhbmRsZVJlYWR5ID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyh2aWRlb1JlZi5jdXJyZW50LmdldER1cmF0aW9uKCkpO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxQYWdlQ29udGFpbmVyPlxuICAgICAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICAgICAgPHRpdGxlPmFhLndhdGNoPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2V0IHBhaWQgdG8gd2F0Y2ggaW1wb3J0YW50IHZpZGVvcyBmcm9tIGFjdGl2aXN0c1wiIC8+XG4gICAgICAgICAgICA8L0hlYWQ+XG5cbiAgICAgICAgICAgIDxtYWluPlxuICAgICAgICAgICAgICAgIDxDb250YWluZXI+XG4gICAgICAgICAgICAgICAgICAgIDxIZWFkZXIgLz5cblxuICAgICAgICAgICAgICAgICAgICB7IXZpZGVvVVJMICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNT5Mb2FkaW5nLi4uPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICB7dmlkZW9VUkwgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0UGxheWVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXt2aWRlb1JlZn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw9J2h0dHBzOi8vd3d3LmZhcm10cmFuc3BhcmVuY3kub3JnL3VwbG9hZHMvdmlkZW9zL0RvbWluaW9uXzcyMC5tcDQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbXV0ZWQ9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWluZz17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25SZWFkeT17aGFuZGxlUmVhZHl9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgIDxCdXR0b25Sb3c+XG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHsgfX0+c3RhcnQ8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b25Sb3c+XG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICA8L21haW4+XG4gICAgICAgIDwvUGFnZUNvbnRhaW5lcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG5cblxuXG4iXSwibmFtZXMiOlsidXNlUmVmIiwidXNlU3RhdGUiLCJIZWFkIiwiUmVhY3RQbGF5ZXIiLCJIZWFkZXIiLCJCdXR0b24iLCJCdXR0b25Sb3ciLCJDb250YWluZXIiLCJQYWdlQ29udGFpbmVyIiwiSG9tZSIsInZpZGVvVVJMIiwic2V0VmlkZW9VUkwiLCJ2aWRlb1JlZiIsImhhbmRsZVJlYWR5IiwiY29uc29sZSIsImxvZyIsImN1cnJlbnQiLCJnZXREdXJhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/watch/[videoId]/[instanceId]/index.tsx\n");

/***/ })

});