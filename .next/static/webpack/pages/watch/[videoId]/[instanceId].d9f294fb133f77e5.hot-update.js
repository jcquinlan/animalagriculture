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

/***/ "./components/styled/index.tsx":
/*!*************************************!*\
  !*** ./components/styled/index.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Colors\": function() { return /* binding */ Colors; },\n/* harmony export */   \"PageContainer\": function() { return /* binding */ PageContainer; },\n/* harmony export */   \"Container\": function() { return /* binding */ Container; },\n/* harmony export */   \"Center\": function() { return /* binding */ Center; },\n/* harmony export */   \"Button\": function() { return /* binding */ Button; },\n/* harmony export */   \"ButtonRow\": function() { return /* binding */ ButtonRow; },\n/* harmony export */   \"StyledLink\": function() { return /* binding */ StyledLink; },\n/* harmony export */   \"Link\": function() { return /* binding */ Link; },\n/* harmony export */   \"Red\": function() { return /* binding */ Red; }\n/* harmony export */ });\n/* harmony import */ var _Users_jcquinlan_Repos_animalagriculture_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_jcquinlan_Repos_animalagriculture_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _excluded = [\"children\", \"href\"];\n\nvar _jsxFileName = \"/Users/jcquinlan/Repos/animalagriculture/components/styled/index.tsx\",\n    _this = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_jcquinlan_Repos_animalagriculture_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar Colors = {\n  Vermillion: '#C64444',\n  Rosewood: '#561414',\n  Papaya: '#FDF0D5',\n  Indigo: '#083D77',\n  BabyBlue: '#A5D8FF'\n};\nvar PageContainer = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"styled__PageContainer\",\n  componentId: \"sc-dtvsen-0\"\n})([\"margin-top:60px;\"]);\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"styled__Container\",\n  componentId: \"sc-dtvsen-1\"\n})([\"width:100%;max-width:900px;margin:0 auto;padding:0 30px;\"]);\nvar Center = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"styled__Center\",\n  componentId: \"sc-dtvsen-2\"\n})([\"display:flex;flex-direction:column;justify-content:center;\"]);\nvar Button = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].button.withConfig({\n  displayName: \"styled__Button\",\n  componentId: \"sc-dtvsen-3\"\n})([\"padding:8px 15px;background-color:\", \";font-size:18px;font-weight:300;color:#fff;cursor:pointer;border:none;&:disabled{background-color:#eee;color:#666;}\"], Colors.Indigo);\nvar ButtonRow = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].div.withConfig({\n  displayName: \"styled__ButtonRow\",\n  componentId: \"sc-dtvsen-4\"\n})([\"display:flex;align-items:space-between;\"]);\nvar StyledLink = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].a.withConfig({\n  displayName: \"styled__StyledLink\",\n  componentId: \"sc-dtvsen-5\"\n})([\"color:\", \";text-decoration:underline;cursor:pointer;font-weight:bold;\"], Colors.Indigo);\n_c = StyledLink;\nvar Link = function Link(_ref) {\n  var children = _ref.children,\n      href = _ref.href,\n      rest = (0,_Users_jcquinlan_Repos_animalagriculture_node_modules_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, _excluded);\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), _objectSpread(_objectSpread({\n    href: href\n  }, rest), {}, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(StyledLink, {\n      children: children\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 9\n    }, _this)\n  }), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 57,\n    columnNumber: 12\n  }, _this);\n};\n_c2 = Link;\nvar Red = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].span.withConfig({\n  displayName: \"styled__Red\",\n  componentId: \"sc-dtvsen-6\"\n})([\"color:\", \";\"], Colors.Vermillion);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"StyledLink\");\n$RefreshReg$(_c2, \"Link\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3N0eWxlZC9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRU8sSUFBTUcsTUFBTSxHQUFHO0FBQ2xCQyxFQUFBQSxVQUFVLEVBQUUsU0FETTtBQUVsQkMsRUFBQUEsUUFBUSxFQUFFLFNBRlE7QUFHbEJDLEVBQUFBLE1BQU0sRUFBRSxTQUhVO0FBSWxCQyxFQUFBQSxNQUFNLEVBQUUsU0FKVTtBQUtsQkMsRUFBQUEsUUFBUSxFQUFFO0FBTFEsQ0FBZjtBQVFBLElBQU1DLGFBQWEsR0FBR1Qsd0VBQUg7QUFBQTtBQUFBO0FBQUEsd0JBQW5CO0FBSUEsSUFBTVcsU0FBUyxHQUFHWCx3RUFBSDtBQUFBO0FBQUE7QUFBQSxnRUFBZjtBQU9BLElBQU1ZLE1BQU0sR0FBR1osd0VBQUg7QUFBQTtBQUFBO0FBQUEsa0VBQVo7QUFNQSxJQUFNYSxNQUFNLEdBQUdiLDJFQUFIO0FBQUE7QUFBQTtBQUFBLGtLQUVLRyxNQUFNLENBQUNJLE1BRlosQ0FBWjtBQWVBLElBQU1RLFNBQVMsR0FBR2Ysd0VBQUg7QUFBQTtBQUFBO0FBQUEsK0NBQWY7QUFLQSxJQUFNZ0IsVUFBVSxHQUFHaEIsc0VBQUg7QUFBQTtBQUFBO0FBQUEsOEVBQ1ZHLE1BQU0sQ0FBQ0ksTUFERyxDQUFoQjtLQUFNUztBQU9OLElBQU1FLElBQUksR0FBRyxTQUFQQSxJQUFPLE9BQStCO0FBQUEsTUFBN0JDLFFBQTZCLFFBQTdCQSxRQUE2QjtBQUFBLE1BQW5CQyxJQUFtQixRQUFuQkEsSUFBbUI7QUFBQSxNQUFWQyxJQUFVOztBQUMvQyxzQkFBTyw4REFBQyxrREFBRDtBQUFVLFFBQUksRUFBRUQ7QUFBaEIsS0FBMEJDLElBQTFCO0FBQUEsMkJBQ0gsOERBQUMsVUFBRDtBQUFBLGdCQUFhRjtBQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERztBQUFBO0FBQUE7QUFBQTtBQUFBLFdBQVA7QUFHSCxDQUpNO01BQU1EO0FBTU4sSUFBTUksR0FBRyxHQUFHdEIseUVBQUg7QUFBQTtBQUFBO0FBQUEsb0JBQ0xHLE1BQU0sQ0FBQ0MsVUFERixDQUFUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc3R5bGVkL2luZGV4LnRzeD81OWQzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IHtkZWZhdWx0IGFzIE5leHRMaW5rfSBmcm9tICduZXh0L2xpbmsnO1xuXG5leHBvcnQgY29uc3QgQ29sb3JzID0ge1xuICAgIFZlcm1pbGxpb246ICcjQzY0NDQ0JyxcbiAgICBSb3Nld29vZDogJyM1NjE0MTQnLFxuICAgIFBhcGF5YTogJyNGREYwRDUnLFxuICAgIEluZGlnbzogJyMwODNENzcnLFxuICAgIEJhYnlCbHVlOiAnI0E1RDhGRicsXG59XG5cbmV4cG9ydCBjb25zdCBQYWdlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xuYDtcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA5MDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nOiAwIDMwcHg7XG5gO1xuXG5leHBvcnQgY29uc3QgQ2VudGVyID0gc3R5bGVkLmRpdmBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IFxuYDtcblxuZXhwb3J0IGNvbnN0IEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gICAgcGFkZGluZzogOHB4IDE1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtDb2xvcnMuSW5kaWdvfTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyOiBub25lO1xuXG4gICAgJjpkaXNhYmxlZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG4gICAgICAgIGNvbG9yOiAjNjY2O1xuICAgIH1cbmA7XG5cbmV4cG9ydCBjb25zdCBCdXR0b25Sb3cgPSBzdHlsZWQuZGl2YFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IHNwYWNlLWJldHdlZW47XG5gO1xuXG5leHBvcnQgY29uc3QgU3R5bGVkTGluayA9IHN0eWxlZC5hYFxuICAgIGNvbG9yOiAke0NvbG9ycy5JbmRpZ299O1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbmA7XG5cbmV4cG9ydCBjb25zdCBMaW5rID0gKHtjaGlsZHJlbiwgaHJlZiwgLi4ucmVzdH0pID0+IHtcbiAgICByZXR1cm4gPE5leHRMaW5rIGhyZWY9e2hyZWZ9IHsuLi5yZXN0fT5cbiAgICAgICAgPFN0eWxlZExpbms+e2NoaWxkcmVufTwvU3R5bGVkTGluaz5cbiAgICA8L05leHRMaW5rPlxufTtcblxuZXhwb3J0IGNvbnN0IFJlZCA9IHN0eWxlZC5zcGFuYFxuICBjb2xvcjogJHtDb2xvcnMuVmVybWlsbGlvbn07XG5gOyJdLCJuYW1lcyI6WyJzdHlsZWQiLCJkZWZhdWx0IiwiTmV4dExpbmsiLCJDb2xvcnMiLCJWZXJtaWxsaW9uIiwiUm9zZXdvb2QiLCJQYXBheWEiLCJJbmRpZ28iLCJCYWJ5Qmx1ZSIsIlBhZ2VDb250YWluZXIiLCJkaXYiLCJDb250YWluZXIiLCJDZW50ZXIiLCJCdXR0b24iLCJidXR0b24iLCJCdXR0b25Sb3ciLCJTdHlsZWRMaW5rIiwiYSIsIkxpbmsiLCJjaGlsZHJlbiIsImhyZWYiLCJyZXN0IiwiUmVkIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/styled/index.tsx\n");

/***/ })

});