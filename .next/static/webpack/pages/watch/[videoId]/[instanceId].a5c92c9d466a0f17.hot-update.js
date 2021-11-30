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

/***/ "./services/videoService.ts":
/*!**********************************!*\
  !*** ./services/videoService.ts ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"calculateQuestionTimestamps\": function() { return /* binding */ calculateQuestionTimestamps; },\n/* harmony export */   \"generateQuestionCode\": function() { return /* binding */ generateQuestionCode; },\n/* harmony export */   \"createVideoInstance\": function() { return /* binding */ createVideoInstance; },\n/* harmony export */   \"getVideoInstance\": function() { return /* binding */ getVideoInstance; },\n/* harmony export */   \"getVideoInstanceQuestions\": function() { return /* binding */ getVideoInstanceQuestions; }\n/* harmony export */ });\n/* harmony import */ var _Users_jcquinlan_Repos_animalagriculture_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_jcquinlan_Repos_animalagriculture_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_jcquinlan_Repos_animalagriculture_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Users_jcquinlan_Repos_animalagriculture_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n/**\n * \n * @param seconds The duration of the video\n * @returns An array of timestamps corresponding to when we should ask the user questions.\n * \n * Calculates timestamps for when we should ask a user a question, based on the length of\n * the video.\n */\nvar calculateQuestionTimestamps = function calculateQuestionTimestamps(seconds) {\n  var numberOfMinutes = Math.ceil(seconds / 60);\n  var numberOfQuestions;\n\n  if (numberOfMinutes < 5) {\n    numberOfQuestions = 3;\n  } else if (numberOfMinutes < 10) {\n    numberOfQuestions = 5;\n  } else if (numberOfMinutes < 30) {\n    numberOfQuestions = Math.floor(numberOfMinutes / 3);\n  } else {\n    numberOfQuestions = Math.floor(numberOfMinutes / 10);\n  }\n\n  var questionTimestamps = [];\n\n  for (var i = 1; i <= numberOfQuestions; i++) {\n    var gapInSeconds = seconds / numberOfQuestions;\n    var timestampIsInvalid = true;\n\n    while (timestampIsInvalid) {\n      // We can offset each question by up to 10% of the length of the video\n      var secondsOffsetMagnitude = Math.random() * (seconds / 10);\n      var isOffsetNegative = Math.random() <= .5;\n      var secondsOffset = isOffsetNegative ? secondsOffsetMagnitude * -1 : secondsOffsetMagnitude;\n      var timestamp = Math.floor(i * gapInSeconds + secondsOffset); // A timestamp is only valid if it isn't beyond the final 5% of the video's length\n      // and it is not less than 0\n\n      if (timestamp < seconds - seconds / 20 || timestamp < 0) {\n        timestampIsInvalid = false;\n        questionTimestamps.push(timestamp);\n      }\n    }\n  }\n\n  return questionTimestamps;\n};\nvar generateQuestionCode = function generateQuestionCode(length) {\n  var result = '';\n  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';\n  var charactersLength = characters.length;\n\n  for (var i = 0; i < length; i++) {\n    result += characters.charAt(Math.floor(Math.random() * charactersLength));\n  }\n\n  return result;\n};\nvar createVideoInstance = /*#__PURE__*/function () {\n  var _ref = (0,_Users_jcquinlan_Repos_animalagriculture_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_Users_jcquinlan_Repos_animalagriculture_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(videoId, paymentUsername) {\n    return _Users_jcquinlan_Repos_animalagriculture_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return fetch(\"/api/videos/\".concat(videoId, \"/instances\"), {\n              method: 'POST',\n              body: JSON.stringify({\n                payment_username: paymentUsername\n              }),\n              headers: {\n                'Content-Type': 'application/json'\n              }\n            }).then(function (res) {\n              return res.json();\n            });\n\n          case 2:\n            return _context.abrupt(\"return\", _context.sent);\n\n          case 3:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function createVideoInstance(_x, _x2) {\n    return _ref.apply(this, arguments);\n  };\n}();\nvar getVideoInstance = /*#__PURE__*/function () {\n  var _ref2 = (0,_Users_jcquinlan_Repos_animalagriculture_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_Users_jcquinlan_Repos_animalagriculture_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee2(videoId, code) {\n    return _Users_jcquinlan_Repos_animalagriculture_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return fetch(\"/api/videos/\".concat(videoId, \"/instances/\").concat(code)).then(function (res) {\n              return res.json();\n            });\n\n          case 2:\n            return _context2.abrupt(\"return\", _context2.sent);\n\n          case 3:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function getVideoInstance(_x3, _x4) {\n    return _ref2.apply(this, arguments);\n  };\n}();\nvar getVideoInstanceQuestions = function getVideoInstanceQuestions() {};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy92aWRlb1NlcnZpY2UudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPLElBQU1BLDJCQUEyQixHQUFHLFNBQTlCQSwyQkFBOEIsQ0FBQ0MsT0FBRCxFQUErQjtBQUN0RSxNQUFNQyxlQUFlLEdBQUdDLElBQUksQ0FBQ0MsSUFBTCxDQUFVSCxPQUFPLEdBQUcsRUFBcEIsQ0FBeEI7QUFDQSxNQUFJSSxpQkFBSjs7QUFFQSxNQUFJSCxlQUFlLEdBQUcsQ0FBdEIsRUFBeUI7QUFDckJHLElBQUFBLGlCQUFpQixHQUFHLENBQXBCO0FBQ0gsR0FGRCxNQUVPLElBQUlILGVBQWUsR0FBRyxFQUF0QixFQUEwQjtBQUM3QkcsSUFBQUEsaUJBQWlCLEdBQUcsQ0FBcEI7QUFDSCxHQUZNLE1BRUEsSUFBSUgsZUFBZSxHQUFHLEVBQXRCLEVBQTBCO0FBQzdCRyxJQUFBQSxpQkFBaUIsR0FBR0YsSUFBSSxDQUFDRyxLQUFMLENBQVdKLGVBQWUsR0FBRyxDQUE3QixDQUFwQjtBQUNILEdBRk0sTUFFQTtBQUNIRyxJQUFBQSxpQkFBaUIsR0FBR0YsSUFBSSxDQUFDRyxLQUFMLENBQVdKLGVBQWUsR0FBRyxFQUE3QixDQUFwQjtBQUNIOztBQUVELE1BQU1LLGtCQUFrQixHQUFHLEVBQTNCOztBQUNBLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsSUFBSUgsaUJBQXJCLEVBQXdDRyxDQUFDLEVBQXpDLEVBQTZDO0FBQ3pDLFFBQU1DLFlBQVksR0FBR1IsT0FBTyxHQUFHSSxpQkFBL0I7QUFDQSxRQUFJSyxrQkFBa0IsR0FBRyxJQUF6Qjs7QUFFQSxXQUFPQSxrQkFBUCxFQUEyQjtBQUN2QjtBQUNBLFVBQU1DLHNCQUFzQixHQUFHUixJQUFJLENBQUNTLE1BQUwsTUFBaUJYLE9BQU8sR0FBRyxFQUEzQixDQUEvQjtBQUNBLFVBQU1ZLGdCQUFnQixHQUFHVixJQUFJLENBQUNTLE1BQUwsTUFBaUIsRUFBMUM7QUFDQSxVQUFNRSxhQUFhLEdBQUdELGdCQUFnQixHQUFHRixzQkFBc0IsR0FBRyxDQUFDLENBQTdCLEdBQWlDQSxzQkFBdkU7QUFDQSxVQUFNSSxTQUFTLEdBQUdaLElBQUksQ0FBQ0csS0FBTCxDQUFZRSxDQUFDLEdBQUdDLFlBQUwsR0FBcUJLLGFBQWhDLENBQWxCLENBTHVCLENBT3ZCO0FBQ0E7O0FBQ0EsVUFBSUMsU0FBUyxHQUFHZCxPQUFPLEdBQUlBLE9BQU8sR0FBRyxFQUFqQyxJQUF3Q2MsU0FBUyxHQUFHLENBQXhELEVBQTJEO0FBQ3ZETCxRQUFBQSxrQkFBa0IsR0FBRyxLQUFyQjtBQUNBSCxRQUFBQSxrQkFBa0IsQ0FBQ1MsSUFBbkIsQ0FBd0JELFNBQXhCO0FBQ0g7QUFDSjtBQUNKOztBQUVELFNBQU9SLGtCQUFQO0FBQ0gsQ0FwQ007QUFzQ0EsSUFBTVUsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFDQyxNQUFELEVBQW9CO0FBQ3BELE1BQUlDLE1BQU0sR0FBRyxFQUFiO0FBQ0EsTUFBTUMsVUFBVSxHQUFHLGdFQUFuQjtBQUNBLE1BQU1DLGdCQUFnQixHQUFHRCxVQUFVLENBQUNGLE1BQXBDOztBQUVBLE9BQUssSUFBSVYsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR1UsTUFBcEIsRUFBNEJWLENBQUMsRUFBN0IsRUFBaUM7QUFDN0JXLElBQUFBLE1BQU0sSUFBSUMsVUFBVSxDQUFDRSxNQUFYLENBQWtCbkIsSUFBSSxDQUFDRyxLQUFMLENBQVdILElBQUksQ0FBQ1MsTUFBTCxLQUFnQlMsZ0JBQTNCLENBQWxCLENBQVY7QUFDSDs7QUFFRCxTQUFPRixNQUFQO0FBQ0gsQ0FWTTtBQVlBLElBQU1JLG1CQUFtQjtBQUFBLHdVQUFHLGlCQUFPQyxPQUFQLEVBQXdCQyxlQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDbEJDLEtBQUssdUJBQWdCRixPQUFoQixpQkFBcUM7QUFDL0NHLGNBQUFBLE1BQU0sRUFBRSxNQUR1QztBQUUvQ0MsY0FBQUEsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNqQkMsZ0JBQUFBLGdCQUFnQixFQUFFTjtBQURELGVBQWYsQ0FGeUM7QUFLL0NPLGNBQUFBLE9BQU8sRUFBRTtBQUNMLGdDQUFnQjtBQURYO0FBTHNDLGFBQXJDLENBQUwsQ0FTUkMsSUFUUSxDQVNILFVBQUNDLEdBQUQ7QUFBQSxxQkFBU0EsR0FBRyxDQUFDQyxJQUFKLEVBQVQ7QUFBQSxhQVRHLENBRGtCOztBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBSDs7QUFBQSxrQkFBbkJaLG1CQUFtQjtBQUFBO0FBQUE7QUFBQSxHQUF6QjtBQWFBLElBQU1hLGdCQUFnQjtBQUFBLHlVQUFHLGtCQUFPWixPQUFQLEVBQXdCYSxJQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDZlgsS0FBSyx1QkFBZ0JGLE9BQWhCLHdCQUFxQ2EsSUFBckMsRUFBTCxDQUNSSixJQURRLENBQ0gsVUFBQ0MsR0FBRDtBQUFBLHFCQUFTQSxHQUFHLENBQUNDLElBQUosRUFBVDtBQUFBLGFBREcsQ0FEZTs7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUg7O0FBQUEsa0JBQWhCQyxnQkFBZ0I7QUFBQTtBQUFBO0FBQUEsR0FBdEI7QUFLQSxJQUFNRSx5QkFBeUIsR0FBRyxTQUE1QkEseUJBQTRCLEdBQU0sQ0FFOUMsQ0FGTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zZXJ2aWNlcy92aWRlb1NlcnZpY2UudHM/M2EwMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBzdXBhYmFzZSB9IGZyb20gXCIuXCI7XG5cbi8qKlxuICogXG4gKiBAcGFyYW0gc2Vjb25kcyBUaGUgZHVyYXRpb24gb2YgdGhlIHZpZGVvXG4gKiBAcmV0dXJucyBBbiBhcnJheSBvZiB0aW1lc3RhbXBzIGNvcnJlc3BvbmRpbmcgdG8gd2hlbiB3ZSBzaG91bGQgYXNrIHRoZSB1c2VyIHF1ZXN0aW9ucy5cbiAqIFxuICogQ2FsY3VsYXRlcyB0aW1lc3RhbXBzIGZvciB3aGVuIHdlIHNob3VsZCBhc2sgYSB1c2VyIGEgcXVlc3Rpb24sIGJhc2VkIG9uIHRoZSBsZW5ndGggb2ZcbiAqIHRoZSB2aWRlby5cbiAqL1xuZXhwb3J0IGNvbnN0IGNhbGN1bGF0ZVF1ZXN0aW9uVGltZXN0YW1wcyA9IChzZWNvbmRzOiBudW1iZXIpOiBudW1iZXJbXSA9PiB7XG4gICAgY29uc3QgbnVtYmVyT2ZNaW51dGVzID0gTWF0aC5jZWlsKHNlY29uZHMgLyA2MCk7XG4gICAgbGV0IG51bWJlck9mUXVlc3Rpb25zO1xuXG4gICAgaWYgKG51bWJlck9mTWludXRlcyA8IDUpIHtcbiAgICAgICAgbnVtYmVyT2ZRdWVzdGlvbnMgPSAzO1xuICAgIH0gZWxzZSBpZiAobnVtYmVyT2ZNaW51dGVzIDwgMTApIHtcbiAgICAgICAgbnVtYmVyT2ZRdWVzdGlvbnMgPSA1O1xuICAgIH0gZWxzZSBpZiAobnVtYmVyT2ZNaW51dGVzIDwgMzApIHtcbiAgICAgICAgbnVtYmVyT2ZRdWVzdGlvbnMgPSBNYXRoLmZsb29yKG51bWJlck9mTWludXRlcyAvIDMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG51bWJlck9mUXVlc3Rpb25zID0gTWF0aC5mbG9vcihudW1iZXJPZk1pbnV0ZXMgLyAxMCk7XG4gICAgfVxuXG4gICAgY29uc3QgcXVlc3Rpb25UaW1lc3RhbXBzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbnVtYmVyT2ZRdWVzdGlvbnM7IGkrKykge1xuICAgICAgICBjb25zdCBnYXBJblNlY29uZHMgPSBzZWNvbmRzIC8gbnVtYmVyT2ZRdWVzdGlvbnM7XG4gICAgICAgIGxldCB0aW1lc3RhbXBJc0ludmFsaWQgPSB0cnVlO1xuXG4gICAgICAgIHdoaWxlICh0aW1lc3RhbXBJc0ludmFsaWQpIHtcbiAgICAgICAgICAgIC8vIFdlIGNhbiBvZmZzZXQgZWFjaCBxdWVzdGlvbiBieSB1cCB0byAxMCUgb2YgdGhlIGxlbmd0aCBvZiB0aGUgdmlkZW9cbiAgICAgICAgICAgIGNvbnN0IHNlY29uZHNPZmZzZXRNYWduaXR1ZGUgPSBNYXRoLnJhbmRvbSgpICogKHNlY29uZHMgLyAxMCk7XG4gICAgICAgICAgICBjb25zdCBpc09mZnNldE5lZ2F0aXZlID0gTWF0aC5yYW5kb20oKSA8PSAuNTtcbiAgICAgICAgICAgIGNvbnN0IHNlY29uZHNPZmZzZXQgPSBpc09mZnNldE5lZ2F0aXZlID8gc2Vjb25kc09mZnNldE1hZ25pdHVkZSAqIC0xIDogc2Vjb25kc09mZnNldE1hZ25pdHVkZTtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVzdGFtcCA9IE1hdGguZmxvb3IoKGkgKiBnYXBJblNlY29uZHMpICsgc2Vjb25kc09mZnNldCk7XG5cbiAgICAgICAgICAgIC8vIEEgdGltZXN0YW1wIGlzIG9ubHkgdmFsaWQgaWYgaXQgaXNuJ3QgYmV5b25kIHRoZSBmaW5hbCA1JSBvZiB0aGUgdmlkZW8ncyBsZW5ndGhcbiAgICAgICAgICAgIC8vIGFuZCBpdCBpcyBub3QgbGVzcyB0aGFuIDBcbiAgICAgICAgICAgIGlmICh0aW1lc3RhbXAgPCBzZWNvbmRzIC0gKHNlY29uZHMgLyAyMCkgfHwgdGltZXN0YW1wIDwgMCkge1xuICAgICAgICAgICAgICAgIHRpbWVzdGFtcElzSW52YWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHF1ZXN0aW9uVGltZXN0YW1wcy5wdXNoKHRpbWVzdGFtcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcXVlc3Rpb25UaW1lc3RhbXBzO1xufVxuXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVRdWVzdGlvbkNvZGUgPSAobGVuZ3RoOiBudW1iZXIpID0+IHtcbiAgICBsZXQgcmVzdWx0ID0gJyc7XG4gICAgY29uc3QgY2hhcmFjdGVycyA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSc7XG4gICAgY29uc3QgY2hhcmFjdGVyc0xlbmd0aCA9IGNoYXJhY3RlcnMubGVuZ3RoO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICByZXN1bHQgKz0gY2hhcmFjdGVycy5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhcmFjdGVyc0xlbmd0aCkpO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVWaWRlb0luc3RhbmNlID0gYXN5bmMgKHZpZGVvSWQ6IG51bWJlciwgcGF5bWVudFVzZXJuYW1lOiBzdHJpbmcpID0+IHtcbiAgICByZXR1cm4gYXdhaXQgZmV0Y2goYC9hcGkvdmlkZW9zLyR7dmlkZW9JZH0vaW5zdGFuY2VzYCwge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgcGF5bWVudF91c2VybmFtZTogcGF5bWVudFVzZXJuYW1lXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKChyZXMpID0+IHJlcy5qc29uKCkpXG59XG5cbmV4cG9ydCBjb25zdCBnZXRWaWRlb0luc3RhbmNlID0gYXN5bmMgKHZpZGVvSWQ6IG51bWJlciwgY29kZTogc3RyaW5nKSA9PiB7XG4gICAgcmV0dXJuIGF3YWl0IGZldGNoKGAvYXBpL3ZpZGVvcy8ke3ZpZGVvSWR9L2luc3RhbmNlcy8ke2NvZGV9YClcbiAgICAgICAgLnRoZW4oKHJlcykgPT4gcmVzLmpzb24oKSlcbn1cblxuZXhwb3J0IGNvbnN0IGdldFZpZGVvSW5zdGFuY2VRdWVzdGlvbnMgPSAoKSA9PiB7XG5cbn0iXSwibmFtZXMiOlsiY2FsY3VsYXRlUXVlc3Rpb25UaW1lc3RhbXBzIiwic2Vjb25kcyIsIm51bWJlck9mTWludXRlcyIsIk1hdGgiLCJjZWlsIiwibnVtYmVyT2ZRdWVzdGlvbnMiLCJmbG9vciIsInF1ZXN0aW9uVGltZXN0YW1wcyIsImkiLCJnYXBJblNlY29uZHMiLCJ0aW1lc3RhbXBJc0ludmFsaWQiLCJzZWNvbmRzT2Zmc2V0TWFnbml0dWRlIiwicmFuZG9tIiwiaXNPZmZzZXROZWdhdGl2ZSIsInNlY29uZHNPZmZzZXQiLCJ0aW1lc3RhbXAiLCJwdXNoIiwiZ2VuZXJhdGVRdWVzdGlvbkNvZGUiLCJsZW5ndGgiLCJyZXN1bHQiLCJjaGFyYWN0ZXJzIiwiY2hhcmFjdGVyc0xlbmd0aCIsImNoYXJBdCIsImNyZWF0ZVZpZGVvSW5zdGFuY2UiLCJ2aWRlb0lkIiwicGF5bWVudFVzZXJuYW1lIiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInBheW1lbnRfdXNlcm5hbWUiLCJoZWFkZXJzIiwidGhlbiIsInJlcyIsImpzb24iLCJnZXRWaWRlb0luc3RhbmNlIiwiY29kZSIsImdldFZpZGVvSW5zdGFuY2VRdWVzdGlvbnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./services/videoService.ts\n");

/***/ })

});