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

/***/ "./components/CaptchaQueue.tsx":
/*!*************************************!*\
  !*** ./components/CaptchaQueue.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_jcquinlan_Repos_animalagriculture_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _Users_jcquinlan_Repos_animalagriculture_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/jcquinlan/Repos/animalagriculture/components/CaptchaQueue.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _templateObject,\n    _templateObject2,\n    _templateObject3,\n    _templateObject4;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_jcquinlan_Repos_animalagriculture_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar CaptchaQueue = function CaptchaQueue(_ref) {\n  _s();\n\n  var captchas = _ref.captchas;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({}),\n      answers = _useState[0],\n      setAnswers = _useState[1];\n\n  var setCaptchaAnswer = function setCaptchaAnswer(id, value) {\n    setAnswers(function (answers) {\n      return _objectSpread(_objectSpread({}, answers), {}, (0,_Users_jcquinlan_Repos_animalagriculture_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({}, id, value));\n    });\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {\n    children: captchas.length && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Queue, {\n      children: captchas.map(function (captcha) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(CaptchaWrapper, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(CaptchaImage, {\n            dangerouslySetInnerHTML: {\n              __html: captcha.image\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 27,\n            columnNumber: 29\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(CaptchaAnswer, {\n            type: \"text\",\n            placeholder: \"What does the above captcha say?\",\n            onChange: function onChange(e) {\n              return setCaptchaAnswer(captcha.id, e.target.value);\n            }\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 28,\n            columnNumber: 29\n          }, _this)]\n        }, captcha.id, true, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 25\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 13\n    }, _this)\n  }, void 0, false);\n};\n\n_s(CaptchaQueue, \"SlLgiTL1v/ZMs8/MrcyjPCigSRg=\");\n\n_c = CaptchaQueue;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CaptchaQueue);\nvar Queue = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject || (_templateObject = (0,_Users_jcquinlan_Repos_animalagriculture_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    padding-left: 30px;\\n\"])));\n_c2 = Queue;\nvar CaptchaWrapper = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject2 || (_templateObject2 = (0,_Users_jcquinlan_Repos_animalagriculture_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    margin-bottom: 30px; \\n    background-color: #fff;\\n\"])));\n_c3 = CaptchaWrapper;\nvar CaptchaImage = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div(_templateObject3 || (_templateObject3 = (0,_Users_jcquinlan_Repos_animalagriculture_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n\"])));\n_c4 = CaptchaImage;\nvar CaptchaAnswer = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].input(_templateObject4 || (_templateObject4 = (0,_Users_jcquinlan_Repos_animalagriculture_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    width: 100%;\\n    padding: 10px 15px;\\n    margin-top: 0;\\n    border: none;\\n    background-color: #eee;\\n\"])));\n_c5 = CaptchaAnswer;\n\nvar _c, _c2, _c3, _c4, _c5;\n\n$RefreshReg$(_c, \"CaptchaQueue\");\n$RefreshReg$(_c2, \"Queue\");\n$RefreshReg$(_c3, \"CaptchaWrapper\");\n$RefreshReg$(_c4, \"CaptchaImage\");\n$RefreshReg$(_c5, \"CaptchaAnswer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhcHRjaGFRdWV1ZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7OztBQU1BLElBQU1HLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQWdCO0FBQUE7O0FBQUEsTUFBZEMsUUFBYyxRQUFkQSxRQUFjOztBQUNqQyxrQkFBOEJILCtDQUFRLENBQWlCLEVBQWpCLENBQXRDO0FBQUEsTUFBT0ksT0FBUDtBQUFBLE1BQWdCQyxVQUFoQjs7QUFFQSxNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUNDLEVBQUQsRUFBYUMsS0FBYixFQUErQjtBQUNwREgsSUFBQUEsVUFBVSxDQUFDLFVBQUFELE9BQU8sRUFBSTtBQUNsQiw2Q0FDT0EsT0FEUCx3S0FFS0csRUFGTCxFQUVVQyxLQUZWO0FBSUgsS0FMUyxDQUFWO0FBTUgsR0FQRDs7QUFTQSxzQkFDSTtBQUFBLGNBQ0NMLFFBQVEsQ0FBQ00sTUFBVCxpQkFDRyw4REFBQyxLQUFEO0FBQUEsZ0JBQ0tOLFFBQVEsQ0FBQ08sR0FBVCxDQUFhLFVBQUNDLE9BQUQsRUFBYTtBQUN2Qiw0QkFDSSw4REFBQyxjQUFEO0FBQUEsa0NBQ0ksOERBQUMsWUFBRDtBQUFjLG1DQUF1QixFQUFFO0FBQUNDLGNBQUFBLE1BQU0sRUFBRUQsT0FBTyxDQUFDRTtBQUFqQjtBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUksOERBQUMsYUFBRDtBQUNJLGdCQUFJLEVBQUMsTUFEVDtBQUVJLHVCQUFXLEVBQUMsa0NBRmhCO0FBR0ksb0JBQVEsRUFBRSxrQkFBQ0MsQ0FBRDtBQUFBLHFCQUFPUixnQkFBZ0IsQ0FBQ0ssT0FBTyxDQUFDSixFQUFULEVBQWFPLENBQUMsQ0FBQ0MsTUFBRixDQUFTUCxLQUF0QixDQUF2QjtBQUFBO0FBSGQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGSjtBQUFBLFdBQXFCRyxPQUFPLENBQUNKLEVBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREo7QUFVSCxPQVhBO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKLG1CQURKO0FBb0JILENBaENEOztHQUFNTDs7S0FBQUE7QUFrQ04sK0RBQWVBLFlBQWY7QUFHQSxJQUFNYyxLQUFLLEdBQUdmLDZEQUFILDZPQUFYO01BQU1lO0FBSU4sSUFBTUUsY0FBYyxHQUFHakIsNkRBQUgsOFFBQXBCO01BQU1pQjtBQUlOLElBQU1DLFlBQVksR0FBR2xCLDZEQUFILHNOQUFsQjtNQUFNa0I7QUFFTixJQUFNQyxhQUFhLEdBQUduQiwrREFBSCxxVUFBbkI7TUFBTW1CIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQ2FwdGNoYVF1ZXVlLnRzeD9jMzdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxudHlwZSBDYXB0Y2hhQW5zd2VycyA9IHtcbiAgICBbY2FwdGNoYUlkOiBzdHJpbmddOiBzdHJpbmdcbn1cblxuY29uc3QgQ2FwdGNoYVF1ZXVlID0gKHtjYXB0Y2hhc30pID0+IHtcbiAgICBjb25zdCBbYW5zd2Vycywgc2V0QW5zd2Vyc10gPSB1c2VTdGF0ZTxDYXB0Y2hhQW5zd2Vycz4oe30pO1xuXG4gICAgY29uc3Qgc2V0Q2FwdGNoYUFuc3dlciA9IChpZDogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSA9PiB7XG4gICAgICAgIHNldEFuc3dlcnMoYW5zd2VycyA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLmFuc3dlcnMsXG4gICAgICAgICAgICAgICAgW2lkXTogdmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAge2NhcHRjaGFzLmxlbmd0aCAmJiAoXG4gICAgICAgICAgICA8UXVldWU+XG4gICAgICAgICAgICAgICAge2NhcHRjaGFzLm1hcCgoY2FwdGNoYSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPENhcHRjaGFXcmFwcGVyIGtleT17Y2FwdGNoYS5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENhcHRjaGFJbWFnZSBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogY2FwdGNoYS5pbWFnZX19PjwvQ2FwdGNoYUltYWdlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDYXB0Y2hhQW5zd2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJXaGF0IGRvZXMgdGhlIGFib3ZlIGNhcHRjaGEgc2F5P1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Q2FwdGNoYUFuc3dlcihjYXB0Y2hhLmlkLCBlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQ2FwdGNoYVdyYXBwZXI+XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvUXVldWU+XG4gICAgICAgICl9XG4gICAgICAgIDwvPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2FwdGNoYVF1ZXVlO1xuXG5cbmNvbnN0IFF1ZXVlID0gc3R5bGVkLmRpdmBcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG5gO1xuXG5jb25zdCBDYXB0Y2hhV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbmA7XG5jb25zdCBDYXB0Y2hhSW1hZ2UgPSBzdHlsZWQuZGl2YFxuYDtcbmNvbnN0IENhcHRjaGFBbnN3ZXIgPSBzdHlsZWQuaW5wdXRgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG5gO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJzdHlsZWQiLCJDYXB0Y2hhUXVldWUiLCJjYXB0Y2hhcyIsImFuc3dlcnMiLCJzZXRBbnN3ZXJzIiwic2V0Q2FwdGNoYUFuc3dlciIsImlkIiwidmFsdWUiLCJsZW5ndGgiLCJtYXAiLCJjYXB0Y2hhIiwiX19odG1sIiwiaW1hZ2UiLCJlIiwidGFyZ2V0IiwiUXVldWUiLCJkaXYiLCJDYXB0Y2hhV3JhcHBlciIsIkNhcHRjaGFJbWFnZSIsIkNhcHRjaGFBbnN3ZXIiLCJpbnB1dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CaptchaQueue.tsx\n");

/***/ })

});