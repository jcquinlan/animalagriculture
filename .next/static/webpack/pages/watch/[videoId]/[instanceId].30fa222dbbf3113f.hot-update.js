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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_jcquinlan_Repos_animalagriculture_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _Users_jcquinlan_Repos_animalagriculture_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-player */ \"./node_modules/react-player/lib/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/Header */ \"./components/Header.tsx\");\n/* harmony import */ var _components_styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/styled */ \"./components/styled/index.tsx\");\n/* harmony import */ var _services_videoService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/videoService */ \"./services/videoService.ts\");\n/* harmony import */ var _hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../hooks/useLocalStorage */ \"./hooks/useLocalStorage.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/jcquinlan/Repos/animalagriculture/pages/watch/[videoId]/[instanceId]/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _templateObject,\n    _templateObject2,\n    _templateObject3;\n\n\n\n\n\n\n\n\n\n\n\n\nvar getVideoProgressLSKey = function getVideoProgressLSKey(instanceId) {\n  return \"AA_WATCH_\".concat(instanceId);\n};\n\nvar secondsToReadableTime = function secondsToReadableTime(seconds) {\n  var hours = Math.floor(seconds / 3600);\n  var leftoverSecondsFromHours = seconds - hours * 3600;\n  var minutes = Math.floor(leftoverSecondsFromHours / 60);\n  var leftOverSeconds = leftoverSecondsFromHours - minutes * 60;\n  var minutesReadable = minutes < 10 ? \"0\".concat(minutes) : minutes;\n  var secondsReadable = leftOverSeconds < 10 ? \"0\".concat(leftOverSeconds) : leftOverSeconds;\n  return \"\".concat(hours, \":\").concat(minutesReadable, \":\").concat(secondsReadable);\n};\n\nvar Home = function Home() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      videoURL = _useState[0],\n      setVideoURL = _useState[1];\n\n  var videoRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      playerOpen = _useState2[0],\n      setPlayerOpen = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      playing = _useState3[0],\n      setPlaying = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),\n      duration = _useState4[0],\n      setDuration = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),\n      progress = _useState5[0],\n      setProgress = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1),\n      volume = _useState6[0],\n      setVolume = _useState6[1];\n\n  var _useLocalStorage = (0,_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_9__.useLocalStorage)(getVideoProgressLSKey(router.query.instanceId), null),\n      _useLocalStorage2 = (0,_Users_jcquinlan_Repos_animalagriculture_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useLocalStorage, 2),\n      savedProgress = _useLocalStorage2[0],\n      setSavedProgress = _useLocalStorage2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    var videoId = Array.isArray(router.query.videoId) ? router.query.videoId[0] : router.query.videoId;\n    var instanceId = Array.isArray(router.query.instanceId) ? router.query.instanceId[0] : router.query.instanceId;\n\n    if (videoId && instanceId) {\n      (0,_services_videoService__WEBPACK_IMPORTED_MODULE_8__.getVideoInstance)(parseInt(videoId), instanceId).then(function (res) {\n        console.log(res);\n        setVideoURL(res.data.video_id.url);\n      });\n    }\n  }, [router]);\n\n  var togglePlaying = function togglePlaying() {\n    setPlaying(!playing);\n  };\n\n  var handleClose = function handleClose() {\n    setPlayerOpen(false);\n    setPlaying(false);\n  };\n\n  var handleReady = function handleReady() {\n    var _videoRef$current;\n\n    var duration = (_videoRef$current = videoRef.current) === null || _videoRef$current === void 0 ? void 0 : _videoRef$current.getDuration();\n    setDuration(Math.round(duration));\n    console.log('READY'); // if (savedProgress) {\n    //     videoRef.current?.seekTo(savedProgress, 'seconds');\n    // }\n  };\n\n  var handleProgress = function handleProgress(_ref) {\n    var playedSeconds = _ref.playedSeconds;\n    setProgress(Math.round(playedSeconds));\n    setSavedProgress(playedSeconds);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_styled__WEBPACK_IMPORTED_MODULE_7__.PageContainer, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"title\", {\n        children: \"aa.watch\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 83,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"meta\", {\n        name: \"description\",\n        content: \"Get paid to watch important videos from activists\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 82,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"main\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_styled__WEBPACK_IMPORTED_MODULE_7__.Container, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 89,\n          columnNumber: 21\n        }, _this), !videoURL && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"h5\", {\n          children: \"Loading...\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 25\n        }, _this), videoURL && !playerOpen && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_styled__WEBPACK_IMPORTED_MODULE_7__.Button, {\n          onClick: function onClick() {\n            return setPlayerOpen(true);\n          },\n          children: progress ? 'resume the film' : 'start the film'\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 96,\n          columnNumber: 25\n        }, _this), videoURL && playerOpen && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(PlayerWrapper, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"div\", {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(react_player__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n              ref: videoRef,\n              url: \"https://www.farmtransparency.org/uploads/videos/Dominion_720.mp4\",\n              muted: !playing,\n              playing: playing,\n              volume: volume,\n              width: \"100%\",\n              height: 400,\n              onReady: handleReady,\n              onProgress: handleProgress,\n              controls: true\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 104,\n              columnNumber: 29\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(PlayerControls, {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"div\", {\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_styled__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                  onClick: togglePlaying,\n                  children: playing ? 'pause' : 'play'\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 119,\n                  columnNumber: 37\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_styled__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                  onClick: handleClose,\n                  children: \"close\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 120,\n                  columnNumber: 37\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 118,\n                columnNumber: 33\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"input\", {\n                  type: \"range\",\n                  min: 0,\n                  max: 1,\n                  step: 0.02,\n                  value: volume,\n                  onChange: function onChange(event) {\n                    setVolume(event.target.valueAsNumber);\n                  }\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 124,\n                  columnNumber: 33\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 123,\n                columnNumber: 33\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(Timer, {\n                children: [secondsToReadableTime(progress), \" / \", secondsToReadableTime(duration)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 136,\n                columnNumber: 33\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 117,\n              columnNumber: 29\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 103,\n            columnNumber: 29\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 102,\n          columnNumber: 25\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 88,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 87,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 81,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Home, \"aEGoqxxBCl9NBuMW/4K1Cn7aUBA=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter, _hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_9__.useLocalStorage];\n});\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar PlayerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_11__[\"default\"].div(_templateObject || (_templateObject = (0,_Users_jcquinlan_Repos_animalagriculture_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    position: absolute;\\n    width: 100%;\\n    height: 100%;\\n    top: 0;\\n    left: 0;\\n    background-color: rgba(0, 0, 0, 0.8);\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    padding-top: 60px;\\n\"])));\n_c2 = PlayerWrapper;\nvar PlayerControls = styled_components__WEBPACK_IMPORTED_MODULE_11__[\"default\"].div(_templateObject2 || (_templateObject2 = (0,_Users_jcquinlan_Repos_animalagriculture_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    margin-top: 30px;\\n    display: flex;\\n    justify-content: space-between;\\n\"])));\n_c3 = PlayerControls;\nvar Timer = styled_components__WEBPACK_IMPORTED_MODULE_11__[\"default\"].div(_templateObject3 || (_templateObject3 = (0,_Users_jcquinlan_Repos_animalagriculture_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    color: #fff;\\n\"])));\n_c4 = Timer;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c2, \"PlayerWrapper\");\n$RefreshReg$(_c3, \"PlayerControls\");\n$RefreshReg$(_c4, \"Timer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy93YXRjaC9bdmlkZW9JZF0vW2luc3RhbmNlSWRdL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNYSxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLENBQUNDLFVBQUQsRUFBZ0M7QUFDMUQsNEJBQW1CQSxVQUFuQjtBQUNILENBRkQ7O0FBSUEsSUFBTUMscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixDQUFDQyxPQUFELEVBQXFCO0FBQy9DLE1BQU1DLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILE9BQU8sR0FBRyxJQUFyQixDQUFkO0FBQ0EsTUFBTUksd0JBQXdCLEdBQUdKLE9BQU8sR0FBSUMsS0FBSyxHQUFHLElBQXBEO0FBQ0EsTUFBTUksT0FBTyxHQUFHSCxJQUFJLENBQUNDLEtBQUwsQ0FBV0Msd0JBQXdCLEdBQUcsRUFBdEMsQ0FBaEI7QUFDQSxNQUFNRSxlQUFlLEdBQUdGLHdCQUF3QixHQUFJQyxPQUFPLEdBQUcsRUFBOUQ7QUFFQSxNQUFNRSxlQUFlLEdBQUdGLE9BQU8sR0FBRyxFQUFWLGNBQW1CQSxPQUFuQixJQUErQkEsT0FBdkQ7QUFDQSxNQUFNRyxlQUFlLEdBQUdGLGVBQWUsR0FBRyxFQUFsQixjQUEyQkEsZUFBM0IsSUFBK0NBLGVBQXZFO0FBRUEsbUJBQVVMLEtBQVYsY0FBbUJNLGVBQW5CLGNBQXNDQyxlQUF0QztBQUNILENBVkQ7O0FBWUEsSUFBTUMsSUFBYyxHQUFHLFNBQWpCQSxJQUFpQixHQUFNO0FBQUE7O0FBQ3pCLGtCQUFnQ3ZCLCtDQUFRLENBQUMsSUFBRCxDQUF4QztBQUFBLE1BQU93QixRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLE1BQU1DLFFBQVEsR0FBRzNCLDZDQUFNLENBQUMsSUFBRCxDQUF2QjtBQUNBLE1BQU00QixNQUFNLEdBQUd2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LEdBQUdoRSw4REFBSCx3T0FBWDtNQUFNZ0UiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvd2F0Y2gvW3ZpZGVvSWRdL1tpbnN0YW5jZUlkXS9pbmRleC50c3g/MWU2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZUVmZmVjdCwgdXNlUmVmLCB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0JztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcbmltcG9ydCBSZWFjdFBsYXllciBmcm9tICdyZWFjdC1wbGF5ZXInO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL0hlYWRlcic7XG5pbXBvcnQgeyBCdXR0b24sIENvbnRhaW5lciwgUGFnZUNvbnRhaW5lciB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvc3R5bGVkJztcbmltcG9ydCB7IGdldFZpZGVvSW5zdGFuY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zZXJ2aWNlcy92aWRlb1NlcnZpY2UnO1xuaW1wb3J0IHsgdXNlTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi4vLi4vLi4vLi4vaG9va3MvdXNlTG9jYWxTdG9yYWdlJztcblxuY29uc3QgZ2V0VmlkZW9Qcm9ncmVzc0xTS2V5ID0gKGluc3RhbmNlSWQ6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgcmV0dXJuIGBBQV9XQVRDSF8ke2luc3RhbmNlSWR9YDtcbn1cblxuY29uc3Qgc2Vjb25kc1RvUmVhZGFibGVUaW1lID0gKHNlY29uZHM6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcihzZWNvbmRzIC8gMzYwMCk7XG4gICAgY29uc3QgbGVmdG92ZXJTZWNvbmRzRnJvbUhvdXJzID0gc2Vjb25kcyAtIChob3VycyAqIDM2MDApO1xuICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKGxlZnRvdmVyU2Vjb25kc0Zyb21Ib3VycyAvIDYwKTtcbiAgICBjb25zdCBsZWZ0T3ZlclNlY29uZHMgPSBsZWZ0b3ZlclNlY29uZHNGcm9tSG91cnMgLSAobWludXRlcyAqIDYwKTtcblxuICAgIGNvbnN0IG1pbnV0ZXNSZWFkYWJsZSA9IG1pbnV0ZXMgPCAxMCA/IGAwJHttaW51dGVzfWAgOiBtaW51dGVzO1xuICAgIGNvbnN0IHNlY29uZHNSZWFkYWJsZSA9IGxlZnRPdmVyU2Vjb25kcyA8IDEwID8gYDAke2xlZnRPdmVyU2Vjb25kc31gIDogbGVmdE92ZXJTZWNvbmRzO1xuXG4gICAgcmV0dXJuIGAke2hvdXJzfToke21pbnV0ZXNSZWFkYWJsZX06JHtzZWNvbmRzUmVhZGFibGV9YDtcbn1cblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgW3ZpZGVvVVJMLCBzZXRWaWRlb1VSTF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCB2aWRlb1JlZiA9IHVzZVJlZihudWxsKTtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBbcGxheWVyT3Blbiwgc2V0UGxheWVyT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3BsYXlpbmcsIHNldFBsYXlpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtkdXJhdGlvbiwgc2V0RHVyYXRpb25dID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW3Byb2dyZXNzLCBzZXRQcm9ncmVzc10gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbdm9sdW1lLCBzZXRWb2x1bWVdID0gdXNlU3RhdGUoMSk7XG4gICAgY29uc3QgW3NhdmVkUHJvZ3Jlc3MsIHNldFNhdmVkUHJvZ3Jlc3NdID0gdXNlTG9jYWxTdG9yYWdlKFxuICAgICAgICBnZXRWaWRlb1Byb2dyZXNzTFNLZXkocm91dGVyLnF1ZXJ5Lmluc3RhbmNlSWQgYXMgc3RyaW5nKSxcbiAgICAgICAgbnVsbFxuICAgICk7XG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBjb25zdCB2aWRlb0lkID0gQXJyYXkuaXNBcnJheShyb3V0ZXIucXVlcnkudmlkZW9JZCkgPyByb3V0ZXIucXVlcnkudmlkZW9JZFswXSA6IHJvdXRlci5xdWVyeS52aWRlb0lkO1xuICAgICAgICBjb25zdCBpbnN0YW5jZUlkID0gQXJyYXkuaXNBcnJheShyb3V0ZXIucXVlcnkuaW5zdGFuY2VJZCkgPyByb3V0ZXIucXVlcnkuaW5zdGFuY2VJZFswXSA6IHJvdXRlci5xdWVyeS5pbnN0YW5jZUlkO1xuXG4gICAgICAgIGlmICh2aWRlb0lkICYmIGluc3RhbmNlSWQpIHtcbiAgICAgICAgICAgIGdldFZpZGVvSW5zdGFuY2UocGFyc2VJbnQodmlkZW9JZCksIGluc3RhbmNlSWQpXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxuICAgICAgICAgICAgICAgICAgICBzZXRWaWRlb1VSTChyZXMuZGF0YS52aWRlb19pZC51cmwpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW3JvdXRlcl0pO1xuXG4gICAgY29uc3QgdG9nZ2xlUGxheWluZyA9ICgpID0+IHtcbiAgICAgICAgc2V0UGxheWluZyghcGxheWluZyk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XG4gICAgICAgIHNldFBsYXllck9wZW4oZmFsc2UpO1xuICAgICAgICBzZXRQbGF5aW5nKGZhbHNlKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVSZWFkeSA9ICgpID0+IHtcbiAgICAgICAgY29uc3QgZHVyYXRpb24gPSB2aWRlb1JlZi5jdXJyZW50Py5nZXREdXJhdGlvbigpO1xuICAgICAgICBzZXREdXJhdGlvbihNYXRoLnJvdW5kKGR1cmF0aW9uKSk7XG5cbiAgICAgICAgY29uc29sZS5sb2coJ1JFQURZJylcblxuICAgICAgICAvLyBpZiAoc2F2ZWRQcm9ncmVzcykge1xuICAgICAgICAvLyAgICAgdmlkZW9SZWYuY3VycmVudD8uc2Vla1RvKHNhdmVkUHJvZ3Jlc3MsICdzZWNvbmRzJyk7XG4gICAgICAgIC8vIH1cbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVQcm9ncmVzcyA9ICh7cGxheWVkU2Vjb25kc30pID0+IHtcbiAgICAgICAgc2V0UHJvZ3Jlc3MoTWF0aC5yb3VuZChwbGF5ZWRTZWNvbmRzKSk7XG4gICAgICAgIHNldFNhdmVkUHJvZ3Jlc3MocGxheWVkU2Vjb25kcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFBhZ2VDb250YWluZXI+XG4gICAgICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgICAgICA8dGl0bGU+YWEud2F0Y2g8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZXQgcGFpZCB0byB3YXRjaCBpbXBvcnRhbnQgdmlkZW9zIGZyb20gYWN0aXZpc3RzXCIgLz5cbiAgICAgICAgICAgIDwvSGVhZD5cblxuICAgICAgICAgICAgPG1haW4+XG4gICAgICAgICAgICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgICAgICAgICAgICAgPEhlYWRlciAvPlxuXG4gICAgICAgICAgICAgICAgICAgIHshdmlkZW9VUkwgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1PkxvYWRpbmcuLi48L2g1PlxuICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgIHt2aWRlb1VSTCAmJiAhcGxheWVyT3BlbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9eygpID0+IHNldFBsYXllck9wZW4odHJ1ZSl9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9ncmVzcyA/ICdyZXN1bWUgdGhlIGZpbG0nIDogJ3N0YXJ0IHRoZSBmaWxtJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgICAgIHt2aWRlb1VSTCAmJiBwbGF5ZXJPcGVuICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQbGF5ZXJXcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0UGxheWVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZj17dmlkZW9SZWZ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybD0naHR0cHM6Ly93d3cuZmFybXRyYW5zcGFyZW5jeS5vcmcvdXBsb2Fkcy92aWRlb3MvRG9taW5pb25fNzIwLm1wNCdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXV0ZWQ9eyFwbGF5aW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGF5aW5nPXtwbGF5aW5nfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2b2x1bWU9e3ZvbHVtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9JzEwMCUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NDAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblJlYWR5PXtoYW5kbGVSZWFkeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Qcm9ncmVzcz17aGFuZGxlUHJvZ3Jlc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRyb2xzPXt0cnVlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UGxheWVyQ29udHJvbHM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e3RvZ2dsZVBsYXlpbmd9PntwbGF5aW5nID8gJ3BhdXNlJyA6ICdwbGF5J308L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlQ2xvc2V9PmNsb3NlPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInJhbmdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbj17MH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heD17MX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA9ezAuMDJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dm9sdW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2V2ZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRWb2x1bWUoZXZlbnQudGFyZ2V0LnZhbHVlQXNOdW1iZXIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRpbWVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NlY29uZHNUb1JlYWRhYmxlVGltZShwcm9ncmVzcyl9IC8ge3NlY29uZHNUb1JlYWRhYmxlVGltZShkdXJhdGlvbil9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvVGltZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9QbGF5ZXJDb250cm9scz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUGxheWVyV3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgICAgICAgPC9tYWluPlxuICAgICAgICA8L1BhZ2VDb250YWluZXI+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lO1xuXG5jb25zdCBQbGF5ZXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDYwcHg7XG5gO1xuXG5jb25zdCBQbGF5ZXJDb250cm9scyA9IHN0eWxlZC5kaXZgXG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbmA7XG5cbmNvbnN0IFRpbWVyID0gc3R5bGVkLmRpdmBcbiAgICBjb2xvcjogI2ZmZjtcbmA7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJIZWFkIiwic3R5bGVkIiwiUmVhY3RQbGF5ZXIiLCJ1c2VSb3V0ZXIiLCJIZWFkZXIiLCJCdXR0b24iLCJDb250YWluZXIiLCJQYWdlQ29udGFpbmVyIiwiZ2V0VmlkZW9JbnN0YW5jZSIsInVzZUxvY2FsU3RvcmFnZSIsImdldFZpZGVvUHJvZ3Jlc3NMU0tleSIsImluc3RhbmNlSWQiLCJzZWNvbmRzVG9SZWFkYWJsZVRpbWUiLCJzZWNvbmRzIiwiaG91cnMiLCJNYXRoIiwiZmxvb3IiLCJsZWZ0b3ZlclNlY29uZHNGcm9tSG91cnMiLCJtaW51dGVzIiwibGVmdE92ZXJTZWNvbmRzIiwibWludXRlc1JlYWRhYmxlIiwic2Vjb25kc1JlYWRhYmxlIiwiSG9tZSIsInZpZGVvVVJMIiwic2V0VmlkZW9VUkwiLCJ2aWRlb1JlZiIsInJvdXRlciIsInBsYXllck9wZW4iLCJzZXRQbGF5ZXJPcGVuIiwicGxheWluZyIsInNldFBsYXlpbmciLCJkdXJhdGlvbiIsInNldER1cmF0aW9uIiwicHJvZ3Jlc3MiLCJzZXRQcm9ncmVzcyIsInZvbHVtZSIsInNldFZvbHVtZSIsInF1ZXJ5Iiwic2F2ZWRQcm9ncmVzcyIsInNldFNhdmVkUHJvZ3Jlc3MiLCJ2aWRlb0lkIiwiQXJyYXkiLCJpc0FycmF5IiwicGFyc2VJbnQiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJ2aWRlb19pZCIsInVybCIsInRvZ2dsZVBsYXlpbmciLCJoYW5kbGVDbG9zZSIsImhhbmRsZVJlYWR5IiwiY3VycmVudCIsImdldER1cmF0aW9uIiwicm91bmQiLCJoYW5kbGVQcm9ncmVzcyIsInBsYXllZFNlY29uZHMiLCJldmVudCIsInRhcmdldCIsInZhbHVlQXNOdW1iZXIiLCJQbGF5ZXJXcmFwcGVyIiwiZGl2IiwiUGxheWVyQ29udHJvbHMiLCJUaW1lciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/watch/[videoId]/[instanceId]/index.tsx\n");

/***/ })

});