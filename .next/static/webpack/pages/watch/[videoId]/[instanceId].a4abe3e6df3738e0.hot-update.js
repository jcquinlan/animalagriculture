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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_jcquinlan_Repos_animalagriculture_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-player */ \"./node_modules/react-player/lib/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/Header */ \"./components/Header.tsx\");\n/* harmony import */ var _components_styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/styled */ \"./components/styled/index.tsx\");\n/* harmony import */ var _services_videoService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/videoService */ \"./services/videoService.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/jcquinlan/Repos/animalagriculture/pages/watch/[videoId]/[instanceId]/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _templateObject,\n    _templateObject2,\n    _templateObject3;\n\n\n\n\n\n\n\n\n\n\n\nvar secondsToReadableTime = function secondsToReadableTime(seconds) {\n  var hours = Math.floor(seconds / 3600);\n  var leftoverSecondsFromHours = seconds - hours * 3600;\n  var minutes = Math.floor(leftoverSecondsFromHours / 60);\n  var leftOverSeconds = leftoverSecondsFromHours - minutes * 60;\n  var minutesReadable = minutes < 10 ? \"0\".concat(minutes) : minutes;\n  var secondsReadable = leftOverSeconds < 10 ? \"0\".concat(leftOverSeconds) : leftOverSeconds;\n  return \"\".concat(hours, \":\").concat(minutesReadable, \":\").concat(secondsReadable);\n};\n\nvar Home = function Home() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      videoURL = _useState[0],\n      setVideoURL = _useState[1];\n\n  var videoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      playerOpen = _useState2[0],\n      setPlayerOpen = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      playing = _useState3[0],\n      setPlaying = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),\n      duration = _useState4[0],\n      setDuration = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),\n      progress = _useState5[0],\n      setProgress = _useState5[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    var videoId = Array.isArray(router.query.videoId) ? router.query.videoId[0] : router.query.videoId;\n    var instanceId = Array.isArray(router.query.instanceId) ? router.query.instanceId[0] : router.query.instanceId;\n\n    if (videoId && instanceId) {\n      (0,_services_videoService__WEBPACK_IMPORTED_MODULE_7__.getVideoInstance)(parseInt(videoId), instanceId).then(function (res) {\n        console.log(res);\n        setVideoURL(res.data.video_id.url);\n      });\n    }\n  }, [router]);\n\n  var togglePlaying = function togglePlaying() {\n    setPlaying(!playing);\n  };\n\n  var handleClose = function handleClose() {\n    setPlayerOpen(false);\n  };\n\n  var handleReady = function handleReady() {\n    var _videoRef$current;\n\n    var duration = (_videoRef$current = videoRef.current) === null || _videoRef$current === void 0 ? void 0 : _videoRef$current.getDuration();\n    setDuration(Math.round(duration));\n  };\n\n  var handleProgress = function handleProgress(_ref) {\n    var playedSeconds = _ref.playedSeconds;\n    setProgress(Math.round(playedSeconds));\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_styled__WEBPACK_IMPORTED_MODULE_6__.PageContainer, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"title\", {\n        children: \"aa.watch\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 65,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"meta\", {\n        name: \"description\",\n        content: \"Get paid to watch important videos from activists\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 66,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"main\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_styled__WEBPACK_IMPORTED_MODULE_6__.Container, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 71,\n          columnNumber: 21\n        }, _this), !videoURL && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"h5\", {\n          children: \"Loading...\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 74,\n          columnNumber: 25\n        }, _this), videoURL && !playerOpen && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_styled__WEBPACK_IMPORTED_MODULE_6__.Button, {\n          onClick: function onClick() {\n            return setPlayerOpen(true);\n          },\n          children: \"start the film\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 25\n        }, _this), videoURL && playerOpen && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(PlayerWrapper, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_player__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n              ref: videoRef,\n              url: \"https://www.farmtransparency.org/uploads/videos/Dominion_720.mp4\",\n              muted: !playing,\n              playing: playing,\n              width: \"100%\",\n              height: 400,\n              onReady: handleReady,\n              onProgress: handleProgress,\n              controls: true\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 84,\n              columnNumber: 29\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(PlayerControls, {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_styled__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                  onClick: togglePlaying,\n                  children: playing ? 'pause' : 'play'\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 98,\n                  columnNumber: 37\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_styled__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                  onClick: handleClose,\n                  children: \"close\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 99,\n                  columnNumber: 37\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 97,\n                columnNumber: 33\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(Timer, {\n                children: [secondsToReadableTime(progress), \" / \", secondsToReadableTime(duration)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 102,\n                columnNumber: 33\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 96,\n              columnNumber: 29\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 83,\n            columnNumber: 29\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 82,\n          columnNumber: 25\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 70,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 63,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Home, \"OlOjnLk7NDfNtRVhFbqEfoZbumw=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];\n});\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar PlayerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div(_templateObject || (_templateObject = (0,_Users_jcquinlan_Repos_animalagriculture_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    position: absolute;\\n    width: 100%;\\n    height: 100%;\\n    top: 0;\\n    left: 0;\\n    background-color: rgba(0, 0, 0, 0.7);\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    padding-top: 60px;\\n\"])));\n_c2 = PlayerWrapper;\nvar PlayerControls = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div(_templateObject2 || (_templateObject2 = (0,_Users_jcquinlan_Repos_animalagriculture_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    margin-top: 30px;\\n    display: flex;\\n    justify-content: space-between;\\n\"])));\n_c3 = PlayerControls;\nvar Timer = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div(_templateObject3 || (_templateObject3 = (0,_Users_jcquinlan_Repos_animalagriculture_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    color: #fff;\\n\"])));\n_c4 = Timer;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c2, \"PlayerWrapper\");\n$RefreshReg$(_c3, \"PlayerControls\");\n$RefreshReg$(_c4, \"Timer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy93YXRjaC9bdmlkZW9JZF0vW2luc3RhbmNlSWRdL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUEsSUFBTVkscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixDQUFDQyxPQUFELEVBQXFCO0FBQy9DLE1BQU1DLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILE9BQU8sR0FBRyxJQUFyQixDQUFkO0FBQ0EsTUFBTUksd0JBQXdCLEdBQUdKLE9BQU8sR0FBSUMsS0FBSyxHQUFHLElBQXBEO0FBQ0EsTUFBTUksT0FBTyxHQUFHSCxJQUFJLENBQUNDLEtBQUwsQ0FBV0Msd0JBQXdCLEdBQUcsRUFBdEMsQ0FBaEI7QUFDQSxNQUFNRSxlQUFlLEdBQUdGLHdCQUF3QixHQUFJQyxPQUFPLEdBQUcsRUFBOUQ7QUFFQSxNQUFNRSxlQUFlLEdBQUdGLE9BQU8sR0FBRyxFQUFWLGNBQW1CQSxPQUFuQixJQUErQkEsT0FBdkQ7QUFDQSxNQUFNRyxlQUFlLEdBQUdGLGVBQWUsR0FBRyxFQUFsQixjQUEyQkEsZUFBM0IsSUFBK0NBLGVBQXZFO0FBRUEsbUJBQVVMLEtBQVYsY0FBbUJNLGVBQW5CLGNBQXNDQyxlQUF0QztBQUNILENBVkQ7O0FBWUEsSUFBTUMsSUFBYyxHQUFHLFNBQWpCQSxJQUFpQixHQUFNO0FBQUE7O0FBQ3pCLGtCQUFnQ3BCLCtDQUFRLENBQUMsSUFBRCxDQUF4QztBQUFBLE1BQU9xQixRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLE1BQU1DLFFBQVEsR0FBR3hCLDZDQUFNLENBQUMsSUFBRCxDQUF2QjtBQUNBLE1BQU15QixNQUFNLEdBQUdwQixzREFBUyxFQUF4Qjs7QUFDQSxtQkFBb0NKLCtDQUFRLENBQUMsS0FBRCxDQUE1QztBQUFBLE1BQU95QixVQUFQO0FBQUEsTUFBbUJDLGFBQW5COztBQUNBLG1C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SGJnQjtBQTZGTiwrREFBZUEsSUFBZjtBQUVBLElBQU1rQyxhQUFhLEdBQUdwRCw2REFBSCw0YkFBbkI7TUFBTW9EO0FBYU4sSUFBTUUsY0FBYyxHQUFHdEQsNkRBQUgsc1NBQXBCO01BQU1zRDtBQU1OLElBQU1DLEtBQUssR0FBR3ZELDZEQUFILHdPQUFYO01BQU11RCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy93YXRjaC9bdmlkZW9JZF0vW2luc3RhbmNlSWRdL2luZGV4LnRzeD8xZTZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFJlYWN0UGxheWVyIGZyb20gJ3JlYWN0LXBsYXllcic7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCB7IEJ1dHRvbiwgQnV0dG9uUm93LCBDb250YWluZXIsIFBhZ2VDb250YWluZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3N0eWxlZCc7XG5pbXBvcnQgeyBnZXRWaWRlb0luc3RhbmNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvdmlkZW9TZXJ2aWNlJztcblxuY29uc3Qgc2Vjb25kc1RvUmVhZGFibGVUaW1lID0gKHNlY29uZHM6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcihzZWNvbmRzIC8gMzYwMCk7XG4gICAgY29uc3QgbGVmdG92ZXJTZWNvbmRzRnJvbUhvdXJzID0gc2Vjb25kcyAtIChob3VycyAqIDM2MDApO1xuICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKGxlZnRvdmVyU2Vjb25kc0Zyb21Ib3VycyAvIDYwKTtcbiAgICBjb25zdCBsZWZ0T3ZlclNlY29uZHMgPSBsZWZ0b3ZlclNlY29uZHNGcm9tSG91cnMgLSAobWludXRlcyAqIDYwKTtcblxuICAgIGNvbnN0IG1pbnV0ZXNSZWFkYWJsZSA9IG1pbnV0ZXMgPCAxMCA/IGAwJHttaW51dGVzfWAgOiBtaW51dGVzO1xuICAgIGNvbnN0IHNlY29uZHNSZWFkYWJsZSA9IGxlZnRPdmVyU2Vjb25kcyA8IDEwID8gYDAke2xlZnRPdmVyU2Vjb25kc31gIDogbGVmdE92ZXJTZWNvbmRzO1xuXG4gICAgcmV0dXJuIGAke2hvdXJzfToke21pbnV0ZXNSZWFkYWJsZX06JHtzZWNvbmRzUmVhZGFibGV9YDtcbn1cblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgW3ZpZGVvVVJMLCBzZXRWaWRlb1VSTF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCB2aWRlb1JlZiA9IHVzZVJlZihudWxsKTtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBbcGxheWVyT3Blbiwgc2V0UGxheWVyT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3BsYXlpbmcsIHNldFBsYXlpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtkdXJhdGlvbiwgc2V0RHVyYXRpb25dID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW3Byb2dyZXNzLCBzZXRQcm9ncmVzc10gPSB1c2VTdGF0ZSgwKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHZpZGVvSWQgPSBBcnJheS5pc0FycmF5KHJvdXRlci5xdWVyeS52aWRlb0lkKSA/IHJvdXRlci5xdWVyeS52aWRlb0lkWzBdIDogcm91dGVyLnF1ZXJ5LnZpZGVvSWQ7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlSWQgPSBBcnJheS5pc0FycmF5KHJvdXRlci5xdWVyeS5pbnN0YW5jZUlkKSA/IHJvdXRlci5xdWVyeS5pbnN0YW5jZUlkWzBdIDogcm91dGVyLnF1ZXJ5Lmluc3RhbmNlSWQ7XG5cbiAgICAgICAgaWYgKHZpZGVvSWQgJiYgaW5zdGFuY2VJZCkge1xuICAgICAgICAgICAgZ2V0VmlkZW9JbnN0YW5jZShwYXJzZUludCh2aWRlb0lkKSwgaW5zdGFuY2VJZClcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgICAgICAgICAgIHNldFZpZGVvVVJMKHJlcy5kYXRhLnZpZGVvX2lkLnVybCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbcm91dGVyXSk7XG5cbiAgICBjb25zdCB0b2dnbGVQbGF5aW5nID0gKCkgPT4ge1xuICAgICAgICBzZXRQbGF5aW5nKCFwbGF5aW5nKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICAgICAgc2V0UGxheWVyT3BlbihmYWxzZSk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUmVhZHkgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGR1cmF0aW9uID0gdmlkZW9SZWYuY3VycmVudD8uZ2V0RHVyYXRpb24oKTtcbiAgICAgICAgc2V0RHVyYXRpb24oTWF0aC5yb3VuZChkdXJhdGlvbikpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVByb2dyZXNzID0gKHtwbGF5ZWRTZWNvbmRzfSkgPT4ge1xuICAgICAgICBzZXRQcm9ncmVzcyhNYXRoLnJvdW5kKHBsYXllZFNlY29uZHMpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8UGFnZUNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5hYS53YXRjaDwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdldCBwYWlkIHRvIHdhdGNoIGltcG9ydGFudCB2aWRlb3MgZnJvbSBhY3RpdmlzdHNcIiAvPlxuICAgICAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8SGVhZGVyIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgeyF2aWRlb1VSTCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDU+TG9hZGluZy4uLjwvaDU+XG4gICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAge3ZpZGVvVVJMICYmICFwbGF5ZXJPcGVuICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gc2V0UGxheWVyT3Blbih0cnVlKX0+c3RhcnQgdGhlIGZpbG08L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICB7dmlkZW9VUkwgJiYgcGxheWVyT3BlbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8UGxheWVyV3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdFBsYXllclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3ZpZGVvUmVmfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw9J2h0dHBzOi8vd3d3LmZhcm10cmFuc3BhcmVuY3kub3JnL3VwbG9hZHMvdmlkZW9zL0RvbWluaW9uXzcyMC5tcDQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11dGVkPXshcGxheWluZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWluZz17cGxheWluZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9JzEwMCUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NDAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblJlYWR5PXtoYW5kbGVSZWFkeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Qcm9ncmVzcz17aGFuZGxlUHJvZ3Jlc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xzPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGxheWVyQ29udHJvbHM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZVBsYXlpbmd9PntwbGF5aW5nID8gJ3BhdXNlJyA6ICdwbGF5J308L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2V9PmNsb3NlPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxUaW1lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWNvbmRzVG9SZWFkYWJsZVRpbWUocHJvZ3Jlc3MpfSAvIHtzZWNvbmRzVG9SZWFkYWJsZVRpbWUoZHVyYXRpb24pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RpbWVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUGxheWVyQ29udHJvbHM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BsYXllcldyYXBwZXI+XG4gICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgPC9QYWdlQ29udGFpbmVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcblxuY29uc3QgUGxheWVyV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xuYDtcblxuY29uc3QgUGxheWVyQ29udHJvbHMgPSBzdHlsZWQuZGl2YFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5gO1xuXG5jb25zdCBUaW1lciA9IHN0eWxlZC5kaXZgXG4gICAgY29sb3I6ICNmZmY7XG5gO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiSGVhZCIsInN0eWxlZCIsIlJlYWN0UGxheWVyIiwidXNlUm91dGVyIiwiSGVhZGVyIiwiQnV0dG9uIiwiQ29udGFpbmVyIiwiUGFnZUNvbnRhaW5lciIsImdldFZpZGVvSW5zdGFuY2UiLCJzZWNvbmRzVG9SZWFkYWJsZVRpbWUiLCJzZWNvbmRzIiwiaG91cnMiLCJNYXRoIiwiZmxvb3IiLCJsZWZ0b3ZlclNlY29uZHNGcm9tSG91cnMiLCJtaW51dGVzIiwibGVmdE92ZXJTZWNvbmRzIiwibWludXRlc1JlYWRhYmxlIiwic2Vjb25kc1JlYWRhYmxlIiwiSG9tZSIsInZpZGVvVVJMIiwic2V0VmlkZW9VUkwiLCJ2aWRlb1JlZiIsInJvdXRlciIsInBsYXllck9wZW4iLCJzZXRQbGF5ZXJPcGVuIiwicGxheWluZyIsInNldFBsYXlpbmciLCJkdXJhdGlvbiIsInNldER1cmF0aW9uIiwicHJvZ3Jlc3MiLCJzZXRQcm9ncmVzcyIsInZpZGVvSWQiLCJBcnJheSIsImlzQXJyYXkiLCJxdWVyeSIsImluc3RhbmNlSWQiLCJwYXJzZUludCIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInZpZGVvX2lkIiwidXJsIiwidG9nZ2xlUGxheWluZyIsImhhbmRsZUNsb3NlIiwiaGFuZGxlUmVhZHkiLCJjdXJyZW50IiwiZ2V0RHVyYXRpb24iLCJyb3VuZCIsImhhbmRsZVByb2dyZXNzIiwicGxheWVkU2Vjb25kcyIsIlBsYXllcldyYXBwZXIiLCJkaXYiLCJQbGF5ZXJDb250cm9scyIsIlRpbWVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/watch/[videoId]/[instanceId]/index.tsx\n");

/***/ })

});