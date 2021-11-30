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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_jcquinlan_Repos_animalagriculture_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _Users_jcquinlan_Repos_animalagriculture_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-player */ \"./node_modules/react-player/lib/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/Header */ \"./components/Header.tsx\");\n/* harmony import */ var _components_styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../components/styled */ \"./components/styled/index.tsx\");\n/* harmony import */ var _services_videoService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../services/videoService */ \"./services/videoService.ts\");\n/* harmony import */ var _hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../hooks/useLocalStorage */ \"./hooks/useLocalStorage.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/jcquinlan/Repos/animalagriculture/pages/watch/[videoId]/[instanceId]/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _templateObject,\n    _templateObject2,\n    _templateObject3;\n\n\n\n\n\n\n\n\n\n\n\n\nvar getVideoProgressLSKey = function getVideoProgressLSKey(instanceId) {\n  return \"AA_WATCH_\".concat(instanceId);\n};\n\nvar secondsToReadableTime = function secondsToReadableTime(seconds) {\n  var hours = Math.floor(seconds / 3600);\n  var leftoverSecondsFromHours = seconds - hours * 3600;\n  var minutes = Math.floor(leftoverSecondsFromHours / 60);\n  var leftOverSeconds = leftoverSecondsFromHours - minutes * 60;\n  var minutesReadable = minutes < 10 ? \"0\".concat(minutes) : minutes;\n  var secondsReadable = leftOverSeconds < 10 ? \"0\".concat(leftOverSeconds) : leftOverSeconds;\n  return \"\".concat(hours, \":\").concat(minutesReadable, \":\").concat(secondsReadable);\n};\n\nvar Home = function Home() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null),\n      videoURL = _useState[0],\n      setVideoURL = _useState[1];\n\n  var videoRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      playerOpen = _useState2[0],\n      setPlayerOpen = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),\n      playing = _useState3[0],\n      setPlaying = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),\n      duration = _useState4[0],\n      setDuration = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0),\n      progress = _useState5[0],\n      setProgress = _useState5[1];\n\n  var _useState6 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1),\n      volume = _useState6[0],\n      setVolume = _useState6[1];\n\n  var _useLocalStorage = (0,_hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_9__.useLocalStorage)(getVideoProgressLSKey(router.query.instanceId), null),\n      _useLocalStorage2 = (0,_Users_jcquinlan_Repos_animalagriculture_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_useLocalStorage, 2),\n      savedProgress = _useLocalStorage2[0],\n      setSavedProgress = _useLocalStorage2[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {\n    var videoId = Array.isArray(router.query.videoId) ? router.query.videoId[0] : router.query.videoId;\n    var instanceId = Array.isArray(router.query.instanceId) ? router.query.instanceId[0] : router.query.instanceId;\n\n    if (videoId && instanceId) {\n      (0,_services_videoService__WEBPACK_IMPORTED_MODULE_8__.getVideoInstance)(parseInt(videoId), instanceId).then(function (res) {\n        console.log(res);\n        setVideoURL(res.data.video_id.url);\n      });\n    }\n  }, [router]);\n\n  var togglePlaying = function togglePlaying() {\n    setPlaying(!playing);\n  };\n\n  var handleClose = function handleClose() {\n    setPlayerOpen(false);\n    setPlaying(false);\n  };\n\n  var handleReady = function handleReady() {\n    var _videoRef$current;\n\n    var duration = (_videoRef$current = videoRef.current) === null || _videoRef$current === void 0 ? void 0 : _videoRef$current.getDuration();\n    setDuration(Math.round(duration));\n    console.log('READY');\n  };\n\n  var handleProgress = function handleProgress(_ref) {\n    var playedSeconds = _ref.playedSeconds;\n    setProgress(Math.round(playedSeconds));\n    setSavedProgress(playedSeconds);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_styled__WEBPACK_IMPORTED_MODULE_7__.PageContainer, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"title\", {\n        children: \"aa.watch\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 79,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"meta\", {\n        name: \"description\",\n        content: \"Get paid to watch important videos from activists\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"main\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_styled__WEBPACK_IMPORTED_MODULE_7__.Container, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 85,\n          columnNumber: 21\n        }, _this), !videoURL && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"h5\", {\n          children: \"Loading...\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 25\n        }, _this), videoURL && !playerOpen && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_styled__WEBPACK_IMPORTED_MODULE_7__.Button, {\n          onClick: function onClick() {\n            return setPlayerOpen(true);\n          },\n          children: progress ? 'resume the film' : 'start the film'\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 92,\n          columnNumber: 25\n        }, _this), videoURL && playerOpen && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(PlayerWrapper, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"div\", {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(react_player__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n              ref: videoRef,\n              url: \"https://www.farmtransparency.org/uploads/videos/Dominion_720.mp4\",\n              muted: !playing,\n              playing: playing,\n              volume: volume,\n              width: \"100%\",\n              height: 400,\n              onReady: handleReady,\n              onProgress: handleProgress,\n              controls: true\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 100,\n              columnNumber: 29\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(PlayerControls, {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"div\", {\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_styled__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                  onClick: togglePlaying,\n                  children: playing ? 'pause' : 'play'\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 115,\n                  columnNumber: 37\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(_components_styled__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                  onClick: handleClose,\n                  children: \"close\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 116,\n                  columnNumber: 37\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 114,\n                columnNumber: 33\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(\"input\", {\n                  type: \"range\",\n                  min: 0,\n                  max: 1,\n                  step: 0.02,\n                  value: volume,\n                  onChange: function onChange(event) {\n                    setVolume(event.target.valueAsNumber);\n                  }\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 120,\n                  columnNumber: 33\n                }, _this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 119,\n                columnNumber: 33\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxDEV)(Timer, {\n                children: [secondsToReadableTime(progress), \" / \", secondsToReadableTime(duration)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 132,\n                columnNumber: 33\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 113,\n              columnNumber: 29\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 99,\n            columnNumber: 29\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 25\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 77,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Home, \"aEGoqxxBCl9NBuMW/4K1Cn7aUBA=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter, _hooks_useLocalStorage__WEBPACK_IMPORTED_MODULE_9__.useLocalStorage];\n});\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar PlayerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_11__[\"default\"].div(_templateObject || (_templateObject = (0,_Users_jcquinlan_Repos_animalagriculture_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    position: absolute;\\n    width: 100%;\\n    height: 100%;\\n    top: 0;\\n    left: 0;\\n    background-color: rgba(0, 0, 0, 0.8);\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    padding-top: 60px;\\n\"])));\n_c2 = PlayerWrapper;\nvar PlayerControls = styled_components__WEBPACK_IMPORTED_MODULE_11__[\"default\"].div(_templateObject2 || (_templateObject2 = (0,_Users_jcquinlan_Repos_animalagriculture_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    margin-top: 30px;\\n    display: flex;\\n    justify-content: space-between;\\n\"])));\n_c3 = PlayerControls;\nvar Timer = styled_components__WEBPACK_IMPORTED_MODULE_11__[\"default\"].div(_templateObject3 || (_templateObject3 = (0,_Users_jcquinlan_Repos_animalagriculture_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    color: #fff;\\n\"])));\n_c4 = Timer;\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c2, \"PlayerWrapper\");\n$RefreshReg$(_c3, \"PlayerControls\");\n$RefreshReg$(_c4, \"Timer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy93YXRjaC9bdmlkZW9JZF0vW2luc3RhbmNlSWRdL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNYSxxQkFBcUIsR0FBRyxTQUF4QkEscUJBQXdCLENBQUNDLFVBQUQsRUFBZ0M7QUFDMUQsNEJBQW1CQSxVQUFuQjtBQUNILENBRkQ7O0FBSUEsSUFBTUMscUJBQXFCLEdBQUcsU0FBeEJBLHFCQUF3QixDQUFDQyxPQUFELEVBQXFCO0FBQy9DLE1BQU1DLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdILE9BQU8sR0FBRyxJQUFyQixDQUFkO0FBQ0EsTUFBTUksd0JBQXdCLEdBQUdKLE9BQU8sR0FBSUMsS0FBSyxHQUFHLElBQXBEO0FBQ0EsTUFBTUksT0FBTyxHQUFHSCxJQUFJLENBQUNDLEtBQUwsQ0FBV0Msd0JBQXdCLEdBQUcsRUFBdEMsQ0FBaEI7QUFDQSxNQUFNRSxlQUFlLEdBQUdGLHdCQUF3QixHQUFJQyxPQUFPLEdBQUcsRUFBOUQ7QUFFQSxNQUFNRSxlQUFlLEdBQUdGLE9BQU8sR0FBRyxFQUFWLGNBQW1CQSxPQUFuQixJQUErQkEsT0FBdkQ7QUFDQSxNQUFNRyxlQUFlLEdBQUdGLGVBQWUsR0FBRyxFQUFsQixjQUEyQkEsZUFBM0IsSUFBK0NBLGVBQXZFO0FBRUEsbUJBQVVMLEtBQVYsY0FBbUJNLGVBQW5CLGNBQXNDQyxlQUF0QztBQUNILENBVkQ7O0FBWUEsSUFBTUMsSUFBYyxHQUFHLFNBQWpCQSxJQUFpQixHQUFNO0FBQUE7O0FBQ3pCLGtCQUFnQ3ZCLCtDQUFRLENBQUMsSUFBRCxDQUF4QztBQUFBLE1BQU93QixRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLE1BQU1DLFFBQVEsR0FBRzNCLDZDQUFNLENBQUMsSUFBRCxDQUF2QjtBQUNBLE1BQU00QixNQUFNLEdBQUd2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QU1nRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy93YXRjaC9bdmlkZW9JZF0vW2luc3RhbmNlSWRdL2luZGV4LnRzeD8xZTZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFJlYWN0UGxheWVyIGZyb20gJ3JlYWN0LXBsYXllcic7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCB7IEJ1dHRvbiwgQ29udGFpbmVyLCBQYWdlQ29udGFpbmVyIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9zdHlsZWQnO1xuaW1wb3J0IHsgZ2V0VmlkZW9JbnN0YW5jZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NlcnZpY2VzL3ZpZGVvU2VydmljZSc7XG5pbXBvcnQgeyB1c2VMb2NhbFN0b3JhZ2UgfSBmcm9tICcuLi8uLi8uLi8uLi9ob29rcy91c2VMb2NhbFN0b3JhZ2UnO1xuXG5jb25zdCBnZXRWaWRlb1Byb2dyZXNzTFNLZXkgPSAoaW5zdGFuY2VJZDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICByZXR1cm4gYEFBX1dBVENIXyR7aW5zdGFuY2VJZH1gO1xufVxuXG5jb25zdCBzZWNvbmRzVG9SZWFkYWJsZVRpbWUgPSAoc2Vjb25kczogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKHNlY29uZHMgLyAzNjAwKTtcbiAgICBjb25zdCBsZWZ0b3ZlclNlY29uZHNGcm9tSG91cnMgPSBzZWNvbmRzIC0gKGhvdXJzICogMzYwMCk7XG4gICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IobGVmdG92ZXJTZWNvbmRzRnJvbUhvdXJzIC8gNjApO1xuICAgIGNvbnN0IGxlZnRPdmVyU2Vjb25kcyA9IGxlZnRvdmVyU2Vjb25kc0Zyb21Ib3VycyAtIChtaW51dGVzICogNjApO1xuXG4gICAgY29uc3QgbWludXRlc1JlYWRhYmxlID0gbWludXRlcyA8IDEwID8gYDAke21pbnV0ZXN9YCA6IG1pbnV0ZXM7XG4gICAgY29uc3Qgc2Vjb25kc1JlYWRhYmxlID0gbGVmdE92ZXJTZWNvbmRzIDwgMTAgPyBgMCR7bGVmdE92ZXJTZWNvbmRzfWAgOiBsZWZ0T3ZlclNlY29uZHM7XG5cbiAgICByZXR1cm4gYCR7aG91cnN9OiR7bWludXRlc1JlYWRhYmxlfToke3NlY29uZHNSZWFkYWJsZX1gO1xufVxuXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBbdmlkZW9VUkwsIHNldFZpZGVvVVJMXSA9IHVzZVN0YXRlKG51bGwpO1xuICAgIGNvbnN0IHZpZGVvUmVmID0gdXNlUmVmKG51bGwpO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAgIGNvbnN0IFtwbGF5ZXJPcGVuLCBzZXRQbGF5ZXJPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBbcGxheWluZywgc2V0UGxheWluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW2R1cmF0aW9uLCBzZXREdXJhdGlvbl0gPSB1c2VTdGF0ZSgwKTtcbiAgICBjb25zdCBbcHJvZ3Jlc3MsIHNldFByb2dyZXNzXSA9IHVzZVN0YXRlKDApO1xuICAgIGNvbnN0IFt2b2x1bWUsIHNldFZvbHVtZV0gPSB1c2VTdGF0ZSgxKTtcbiAgICBjb25zdCBbc2F2ZWRQcm9ncmVzcywgc2V0U2F2ZWRQcm9ncmVzc10gPSB1c2VMb2NhbFN0b3JhZ2UoXG4gICAgICAgIGdldFZpZGVvUHJvZ3Jlc3NMU0tleShyb3V0ZXIucXVlcnkuaW5zdGFuY2VJZCBhcyBzdHJpbmcpLFxuICAgICAgICBudWxsXG4gICAgKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHZpZGVvSWQgPSBBcnJheS5pc0FycmF5KHJvdXRlci5xdWVyeS52aWRlb0lkKSA/IHJvdXRlci5xdWVyeS52aWRlb0lkWzBdIDogcm91dGVyLnF1ZXJ5LnZpZGVvSWQ7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlSWQgPSBBcnJheS5pc0FycmF5KHJvdXRlci5xdWVyeS5pbnN0YW5jZUlkKSA/IHJvdXRlci5xdWVyeS5pbnN0YW5jZUlkWzBdIDogcm91dGVyLnF1ZXJ5Lmluc3RhbmNlSWQ7XG5cbiAgICAgICAgaWYgKHZpZGVvSWQgJiYgaW5zdGFuY2VJZCkge1xuICAgICAgICAgICAgZ2V0VmlkZW9JbnN0YW5jZShwYXJzZUludCh2aWRlb0lkKSwgaW5zdGFuY2VJZClcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgICAgICAgICAgIHNldFZpZGVvVVJMKHJlcy5kYXRhLnZpZGVvX2lkLnVybCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbcm91dGVyXSk7XG5cbiAgICBjb25zdCB0b2dnbGVQbGF5aW5nID0gKCkgPT4ge1xuICAgICAgICBzZXRQbGF5aW5nKCFwbGF5aW5nKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICAgICAgc2V0UGxheWVyT3BlbihmYWxzZSk7XG4gICAgICAgIHNldFBsYXlpbmcoZmFsc2UpO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVJlYWR5ID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBkdXJhdGlvbiA9IHZpZGVvUmVmLmN1cnJlbnQ/LmdldER1cmF0aW9uKCk7XG4gICAgICAgIHNldER1cmF0aW9uKE1hdGgucm91bmQoZHVyYXRpb24pKTtcblxuICAgICAgICBjb25zb2xlLmxvZygnUkVBRFknKVxuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVByb2dyZXNzID0gKHtwbGF5ZWRTZWNvbmRzfSkgPT4ge1xuICAgICAgICBzZXRQcm9ncmVzcyhNYXRoLnJvdW5kKHBsYXllZFNlY29uZHMpKTtcbiAgICAgICAgc2V0U2F2ZWRQcm9ncmVzcyhwbGF5ZWRTZWNvbmRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8UGFnZUNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5hYS53YXRjaDwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdldCBwYWlkIHRvIHdhdGNoIGltcG9ydGFudCB2aWRlb3MgZnJvbSBhY3RpdmlzdHNcIiAvPlxuICAgICAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8SGVhZGVyIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgeyF2aWRlb1VSTCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDU+TG9hZGluZy4uLjwvaDU+XG4gICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAge3ZpZGVvVVJMICYmICFwbGF5ZXJPcGVuICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gc2V0UGxheWVyT3Blbih0cnVlKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Byb2dyZXNzID8gJ3Jlc3VtZSB0aGUgZmlsbScgOiAnc3RhcnQgdGhlIGZpbG0nfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAge3ZpZGVvVVJMICYmIHBsYXllck9wZW4gJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFBsYXllcldyYXBwZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RQbGF5ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmPXt2aWRlb1JlZn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsPSdodHRwczovL3d3dy5mYXJtdHJhbnNwYXJlbmN5Lm9yZy91cGxvYWRzL3ZpZGVvcy9Eb21pbmlvbl83MjAubXA0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtdXRlZD17IXBsYXlpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXlpbmc9e3BsYXlpbmd9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZvbHVtZT17dm9sdW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD0nMTAwJSdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs0MDB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUmVhZHk9e2hhbmRsZVJlYWR5fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblByb2dyZXNzPXtoYW5kbGVQcm9ncmVzc31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udHJvbHM9e3RydWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQbGF5ZXJDb250cm9scz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dG9nZ2xlUGxheWluZ30+e3BsYXlpbmcgPyAncGF1c2UnIDogJ3BsYXknfTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+Y2xvc2U8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicmFuZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluPXswfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4PXsxfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcD17MC4wMn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2b2x1bWV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFZvbHVtZShldmVudC50YXJnZXQudmFsdWVBc051bWJlcilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8VGltZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7c2Vjb25kc1RvUmVhZGFibGVUaW1lKHByb2dyZXNzKX0gLyB7c2Vjb25kc1RvUmVhZGFibGVUaW1lKGR1cmF0aW9uKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9UaW1lcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1BsYXllckNvbnRyb2xzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9QbGF5ZXJXcmFwcGVyPlxuICAgICAgICAgICAgICAgICAgICApfVxuXG4gICAgICAgICAgICAgICAgPC9Db250YWluZXI+XG4gICAgICAgICAgICA8L21haW4+XG4gICAgICAgIDwvUGFnZUNvbnRhaW5lcj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG5cbmNvbnN0IFBsYXllcldyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogNjBweDtcbmA7XG5cbmNvbnN0IFBsYXllckNvbnRyb2xzID0gc3R5bGVkLmRpdmBcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuYDtcblxuY29uc3QgVGltZXIgPSBzdHlsZWQuZGl2YFxuICAgIGNvbG9yOiAjZmZmO1xuYDtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkhlYWQiLCJzdHlsZWQiLCJSZWFjdFBsYXllciIsInVzZVJvdXRlciIsIkhlYWRlciIsIkJ1dHRvbiIsIkNvbnRhaW5lciIsIlBhZ2VDb250YWluZXIiLCJnZXRWaWRlb0luc3RhbmNlIiwidXNlTG9jYWxTdG9yYWdlIiwiZ2V0VmlkZW9Qcm9ncmVzc0xTS2V5IiwiaW5zdGFuY2VJZCIsInNlY29uZHNUb1JlYWRhYmxlVGltZSIsInNlY29uZHMiLCJob3VycyIsIk1hdGgiLCJmbG9vciIsImxlZnRvdmVyU2Vjb25kc0Zyb21Ib3VycyIsIm1pbnV0ZXMiLCJsZWZ0T3ZlclNlY29uZHMiLCJtaW51dGVzUmVhZGFibGUiLCJzZWNvbmRzUmVhZGFibGUiLCJIb21lIiwidmlkZW9VUkwiLCJzZXRWaWRlb1VSTCIsInZpZGVvUmVmIiwicm91dGVyIiwicGxheWVyT3BlbiIsInNldFBsYXllck9wZW4iLCJwbGF5aW5nIiwic2V0UGxheWluZyIsImR1cmF0aW9uIiwic2V0RHVyYXRpb24iLCJwcm9ncmVzcyIsInNldFByb2dyZXNzIiwidm9sdW1lIiwic2V0Vm9sdW1lIiwicXVlcnkiLCJzYXZlZFByb2dyZXNzIiwic2V0U2F2ZWRQcm9ncmVzcyIsInZpZGVvSWQiLCJBcnJheSIsImlzQXJyYXkiLCJwYXJzZUludCIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsInZpZGVvX2lkIiwidXJsIiwidG9nZ2xlUGxheWluZyIsImhhbmRsZUNsb3NlIiwiaGFuZGxlUmVhZHkiLCJjdXJyZW50IiwiZ2V0RHVyYXRpb24iLCJyb3VuZCIsImhhbmRsZVByb2dyZXNzIiwicGxheWVkU2Vjb25kcyIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWVBc051bWJlciIsIlBsYXllcldyYXBwZXIiLCJkaXYiLCJQbGF5ZXJDb250cm9scyIsIlRpbWVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/watch/[videoId]/[instanceId]/index.tsx\n");

/***/ })

});