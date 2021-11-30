"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/watch/[videoId]/new",{

/***/ "./pages/watch/[videoId]/new.tsx":
/*!***************************************!*\
  !*** ./pages/watch/[videoId]/new.tsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_jcquinlan_Repos_animalagriculture_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _components_styled__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/styled */ \"./components/styled/index.tsx\");\n/* harmony import */ var _services_videoService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/videoService */ \"./services/videoService.ts\");\n/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! util */ \"./node_modules/util/util.js\");\n/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/jcquinlan/Repos/animalagriculture/pages/watch/[videoId]/new.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _templateObject;\n\n\n\n\n\n\n\n\n\n\nvar New = function New() {\n  _s();\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      loading = _useState[0],\n      setLoading = _useState[1];\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),\n      paymentUsername = _useState2[0],\n      setPaymentUsername = _useState2[1];\n\n  var createInstance = function createInstance() {\n    var videoId = router.query.videoId;\n\n    if (videoId) {\n      var singleVideoId = (0,util__WEBPACK_IMPORTED_MODULE_6__.isArray)(videoId) ? videoId[0] : videoId;\n      var parsedVideoId = parseInt(singleVideoId);\n      (0,_services_videoService__WEBPACK_IMPORTED_MODULE_5__.createVideoInstance)(parsedVideoId).then(function (res) {\n        var code = res.data.code;\n        router.push(\"/watch/\".concat(videoId, \"/\").concat(code));\n      });\n    }\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_styled__WEBPACK_IMPORTED_MODULE_4__.PageContainer, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"title\", {\n        children: \"aa.watch\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"meta\", {\n        name: \"description\",\n        content: \"Get paid to watch important videos from activists\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"main\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(_components_styled__WEBPACK_IMPORTED_MODULE_4__.Container, {\n        children: [loading && 'One moment please...', !loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(\"div\", {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxDEV)(PaymentUsernameInput, {\n            type: \"text\",\n            value: paymentUsername,\n            onChange: function onChange(e) {\n              return setPaymentUsername(e.target.value);\n            },\n            placeholder: \"What's your Venmo username?\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 29\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 25\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(New, \"ct54DClRzg26IOq+kQyQHUuzEZs=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter];\n});\n\n_c = New;\n/* harmony default export */ __webpack_exports__[\"default\"] = (New);\nvar PaymentUsernameInput = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].input(_templateObject || (_templateObject = (0,_Users_jcquinlan_Repos_animalagriculture_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    padding: 10px 15px;\\n    border: none;\\n    background-color: #ddd;\\n\"])));\n_c2 = PaymentUsernameInput;\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"New\");\n$RefreshReg$(_c2, \"PaymentUsernameInput\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy93YXRjaC9bdmlkZW9JZF0vbmV3LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxJQUFNUSxHQUFhLEdBQUcsU0FBaEJBLEdBQWdCLEdBQU07QUFBQTs7QUFDeEIsTUFBTUMsTUFBTSxHQUFHUCxzREFBUyxFQUF4Qjs7QUFDQSxrQkFBOEJGLCtDQUFRLENBQUMsS0FBRCxDQUF0QztBQUFBLE1BQU9VLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBQ0EsbUJBQThDWCwrQ0FBUSxDQUFDLEVBQUQsQ0FBdEQ7QUFBQSxNQUFPWSxlQUFQO0FBQUEsTUFBd0JDLGtCQUF4Qjs7QUFFQSxNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFDekIsUUFBTUMsT0FBTyxHQUFHTixNQUFNLENBQUNPLEtBQVAsQ0FBYUQsT0FBN0I7O0FBRUEsUUFBSUEsT0FBSixFQUFhO0FBQ1QsVUFBTUUsYUFBYSxHQUFHViw2Q0FBTyxDQUFDUSxPQUFELENBQVAsR0FBbUJBLE9BQU8sQ0FBQyxDQUFELENBQTFCLEdBQWdDQSxPQUF0RDtBQUNBLFVBQU1HLGFBQWEsR0FBR0MsUUFBUSxDQUFDRixhQUFELENBQTlCO0FBRUFYLE1BQUFBLDJFQUFtQixDQUFDWSxhQUFELENBQW5CLENBQ0tFLElBREwsQ0FDVSxVQUFDQyxHQUFELEVBQVM7QUFDWCxZQUFNQyxJQUFJLEdBQUdELEdBQUcsQ0FBQ0UsSUFBSixDQUFTRCxJQUF0QjtBQUNBYixRQUFBQSxNQUFNLENBQUNlLElBQVAsa0JBQXNCVCxPQUF0QixjQUFpQ08sSUFBakM7QUFDSCxPQUpMO0FBS0g7QUFFSixHQWREOztBQWdCQSxzQkFDSSw4REFBQyw2REFBRDtBQUFBLDRCQUNJLDhEQUFDLGtEQUFEO0FBQUEsOEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixlQUVJO0FBQU0sWUFBSSxFQUFDLGFBQVg7QUFBeUIsZUFBTyxFQUFDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixlQU1JO0FBQUEsNkJBQ0ksOERBQUMseURBQUQ7QUFBQSxtQkFDS1osT0FBTyxJQUFJLHNCQURoQixFQUVLLENBQUNBLE9BQUQsaUJBQ0c7QUFBQSxpQ0FDSSw4REFBQyxvQkFBRDtBQUNJLGdCQUFJLEVBQUMsTUFEVDtBQUVJLGlCQUFLLEVBQUVFLGVBRlg7QUFHSSxvQkFBUSxFQUFFLGtCQUFDYSxDQUFEO0FBQUEscUJBQU9aLGtCQUFrQixDQUFDWSxDQUFDLENBQUNDLE1BQUYsQ0FBU0MsS0FBVixDQUF6QjtBQUFBLGFBSGQ7QUFJSSx1QkFBVyxFQUFDO0FBSmhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUhSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQXdCSCxDQTdDRDs7R0FBTW5CO1VBQ2FOOzs7S0FEYk07QUErQ04sK0RBQWVBLEdBQWY7QUFFQSxJQUFNb0Isb0JBQW9CLEdBQUd6QiwrREFBSCw2UkFBMUI7TUFBTXlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3dhdGNoL1t2aWRlb0lkXS9uZXcudHN4PzgwMDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHsgQ29udGFpbmVyLCBQYWdlQ29udGFpbmVyIH0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9zdHlsZWQnO1xuaW1wb3J0IHsgY3JlYXRlVmlkZW9JbnN0YW5jZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL3ZpZGVvU2VydmljZSc7XG5pbXBvcnQgeyBpc0FycmF5IH0gZnJvbSAndXRpbCc7XG5cblxuY29uc3QgTmV3OiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3BheW1lbnRVc2VybmFtZSwgc2V0UGF5bWVudFVzZXJuYW1lXSA9IHVzZVN0YXRlKCcnKTtcblxuICAgIGNvbnN0IGNyZWF0ZUluc3RhbmNlID0gKCkgPT4ge1xuICAgICAgICBjb25zdCB2aWRlb0lkID0gcm91dGVyLnF1ZXJ5LnZpZGVvSWQ7XG5cbiAgICAgICAgaWYgKHZpZGVvSWQpIHtcbiAgICAgICAgICAgIGNvbnN0IHNpbmdsZVZpZGVvSWQgPSBpc0FycmF5KHZpZGVvSWQpID8gdmlkZW9JZFswXSA6IHZpZGVvSWQ7XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRWaWRlb0lkID0gcGFyc2VJbnQoc2luZ2xlVmlkZW9JZCk7XG5cbiAgICAgICAgICAgIGNyZWF0ZVZpZGVvSW5zdGFuY2UocGFyc2VkVmlkZW9JZClcbiAgICAgICAgICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvZGUgPSByZXMuZGF0YS5jb2RlO1xuICAgICAgICAgICAgICAgICAgICByb3V0ZXIucHVzaChgL3dhdGNoLyR7dmlkZW9JZH0vJHtjb2RlfWApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFBhZ2VDb250YWluZXI+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+YWEud2F0Y2g8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZXQgcGFpZCB0byB3YXRjaCBpbXBvcnRhbnQgdmlkZW9zIGZyb20gYWN0aXZpc3RzXCIgLz5cbiAgICAgICAgICAgIDwvSGVhZD5cblxuICAgICAgICAgICAgPG1haW4+XG4gICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAge2xvYWRpbmcgJiYgJ09uZSBtb21lbnQgcGxlYXNlLi4uJ31cbiAgICAgICAgICAgICAgICAgICAgeyFsb2FkaW5nICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFBheW1lbnRVc2VybmFtZUlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3BheW1lbnRVc2VybmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRQYXltZW50VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIldoYXQncyB5b3VyIFZlbm1vIHVzZXJuYW1lP1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgPC9tYWluPlxuICAgICAgICA8L1BhZ2VDb250YWluZXI+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBOZXc7XG5cbmNvbnN0IFBheW1lbnRVc2VybmFtZUlucHV0ID0gc3R5bGVkLmlucHV0YFxuICAgIHBhZGRpbmc6IDEwcHggMTVweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbmA7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJIZWFkIiwidXNlUm91dGVyIiwic3R5bGVkIiwiQ29udGFpbmVyIiwiUGFnZUNvbnRhaW5lciIsImNyZWF0ZVZpZGVvSW5zdGFuY2UiLCJpc0FycmF5IiwiTmV3Iiwicm91dGVyIiwibG9hZGluZyIsInNldExvYWRpbmciLCJwYXltZW50VXNlcm5hbWUiLCJzZXRQYXltZW50VXNlcm5hbWUiLCJjcmVhdGVJbnN0YW5jZSIsInZpZGVvSWQiLCJxdWVyeSIsInNpbmdsZVZpZGVvSWQiLCJwYXJzZWRWaWRlb0lkIiwicGFyc2VJbnQiLCJ0aGVuIiwicmVzIiwiY29kZSIsImRhdGEiLCJwdXNoIiwiZSIsInRhcmdldCIsInZhbHVlIiwiUGF5bWVudFVzZXJuYW1lSW5wdXQiLCJpbnB1dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/watch/[videoId]/new.tsx\n");

/***/ })

});