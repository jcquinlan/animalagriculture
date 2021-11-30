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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_jcquinlan_Repos_animalagriculture_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-player */ \"./node_modules/react-player/lib/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/Header */ \"./components/Header.tsx\");\n/* harmony import */ var _components_styled__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/styled */ \"./components/styled/index.tsx\");\n/* harmony import */ var _services_videoService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../services/videoService */ \"./services/videoService.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _jsxFileName = \"/Users/jcquinlan/Repos/animalagriculture/pages/watch/[videoId]/[instanceId]/index.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$(),\n    _templateObject,\n    _templateObject2;\n\n\n\n\n\n\n\n\n\n\n\nvar Home = function Home() {\n  _s();\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),\n      videoURL = _useState[0],\n      setVideoURL = _useState[1];\n\n  var videoRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      playerOpen = _useState2[0],\n      setPlayerOpen = _useState2[1];\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),\n      playing = _useState3[0],\n      setPlaying = _useState3[1];\n\n  var _useState4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),\n      duration = _useState4[0],\n      setDuration = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),\n      progress = _useState5[0],\n      setProgress = _useState5[1];\n\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {\n    var videoId = Array.isArray(router.query.videoId) ? router.query.videoId[0] : router.query.videoId;\n    var instanceId = Array.isArray(router.query.instanceId) ? router.query.instanceId[0] : router.query.instanceId;\n\n    if (videoId && instanceId) {\n      (0,_services_videoService__WEBPACK_IMPORTED_MODULE_7__.getVideoInstance)(parseInt(videoId), instanceId).then(function (res) {\n        console.log(res);\n        setVideoURL(res.data.video_id.url);\n      });\n    }\n  }, [router]);\n\n  var togglePlaying = function togglePlaying() {\n    setPlaying(!playing);\n  };\n\n  var handleClose = function handleClose() {\n    setPlayerOpen(false);\n  };\n\n  var handleReady = function handleReady() {\n    var _videoRef$current;\n\n    var duration = (_videoRef$current = videoRef.current) === null || _videoRef$current === void 0 ? void 0 : _videoRef$current.getDuration();\n    setDuration(duration);\n  };\n\n  var handleProgress = function handleProgress() {\n    console.log('progress');\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_styled__WEBPACK_IMPORTED_MODULE_6__.PageContainer, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"title\", {\n        children: \"aa.watch\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 53,\n        columnNumber: 17\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"meta\", {\n        name: \"description\",\n        content: \"Get paid to watch important videos from activists\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 54,\n        columnNumber: 17\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 52,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"main\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_styled__WEBPACK_IMPORTED_MODULE_6__.Container, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 59,\n          columnNumber: 21\n        }, _this), !videoURL && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"h5\", {\n          children: \"Loading...\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 62,\n          columnNumber: 25\n        }, _this), videoURL && !playerOpen && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_styled__WEBPACK_IMPORTED_MODULE_6__.Button, {\n          onClick: function onClick() {\n            return setPlayerOpen(true);\n          },\n          children: \"start the film\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 66,\n          columnNumber: 25\n        }, _this), videoURL && playerOpen && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(PlayerWrapper, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(react_player__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n              ref: videoRef,\n              url: \"https://www.farmtransparency.org/uploads/videos/Dominion_720.mp4\",\n              muted: !playing,\n              playing: playing,\n              width: \"100%\",\n              height: 400,\n              onReady: handleReady,\n              onProgress: handleProgress\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 72,\n              columnNumber: 29\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(PlayerControls, {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_styled__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                  onClick: togglePlaying,\n                  children: playing ? 'pause' : 'play'\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 85,\n                  columnNumber: 37\n                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_components_styled__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                  onClick: handleClose,\n                  children: \"close\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 86,\n                  columnNumber: 37\n                }, _this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 84,\n                columnNumber: 33\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n                children: [progress, \" / \", duration]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 89,\n                columnNumber: 33\n              }, _this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 83,\n              columnNumber: 29\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 71,\n            columnNumber: 29\n          }, _this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 70,\n          columnNumber: 25\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 58,\n        columnNumber: 17\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 51,\n    columnNumber: 9\n  }, _this);\n};\n\n_s(Home, \"OlOjnLk7NDfNtRVhFbqEfoZbumw=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter];\n});\n\n_c = Home;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\nvar PlayerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div(_templateObject || (_templateObject = (0,_Users_jcquinlan_Repos_animalagriculture_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    position: absolute;\\n    width: 100%;\\n    height: 100%;\\n    top: 0;\\n    left: 0;\\n    background-color: rgba(0, 0, 0, 0.7);\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    padding-top: 60px;\\n\"])));\n_c2 = PlayerWrapper;\nvar PlayerControls = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div(_templateObject2 || (_templateObject2 = (0,_Users_jcquinlan_Repos_animalagriculture_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n    margin-top: 30px;\\n    display: flex;\\n    justify-content: space-between;\\n\"])));\n_c3 = PlayerControls;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Home\");\n$RefreshReg$(_c2, \"PlayerWrapper\");\n$RefreshReg$(_c3, \"PlayerControls\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy93YXRjaC9bdmlkZW9JZF0vW2luc3RhbmNlSWRdL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQSxJQUFNWSxJQUFjLEdBQUcsU0FBakJBLElBQWlCLEdBQU07QUFBQTs7QUFDekIsa0JBQWdDViwrQ0FBUSxDQUFDLElBQUQsQ0FBeEM7QUFBQSxNQUFPVyxRQUFQO0FBQUEsTUFBaUJDLFdBQWpCOztBQUNBLE1BQU1DLFFBQVEsR0FBR2QsNkNBQU0sQ0FBQyxJQUFELENBQXZCO0FBQ0EsTUFBTWUsTUFBTSxHQUFHVixzREFBUyxFQUF4Qjs7QUFDQSxtQkFBb0NKLCtDQUFRLENBQUMsS0FBRCxDQUE1QztBQUFBLE1BQU9lLFVBQVA7QUFBQSxNQUFtQkMsYUFBbkI7O0FBQ0EsbUJBQThCaEIsK0NBQVEsQ0FBQyxLQUFELENBQXRDO0FBQUEsTUFBT2lCLE9BQVA7QUFBQSxNQUFnQkMsVUFBaEI7O0FBQ0EsbUJBQWdDbEIsK0NBQVEsQ0FBQyxDQUFELENBQXhDO0FBQUEsTUFBT21CLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBQ0EsbUJBQWdDcEIsK0NBQVEsQ0FBQyxDQUFELENBQXhDO0FBQUEsTUFBT3FCLFFBQVA7QUFBQSxNQUFpQkMsV0FBakI7O0FBRUF4QixFQUFBQSxnREFBUyxDQUFDLFlBQU07QUFDWixRQUFNeUIsT0FBTyxHQUFHQyxLQUFLLENBQUNDLE9BQU4sQ0FBY1gsTUFBTSxDQUFDWSxLQUFQLENBQWFILE9BQTNCLElBQXNDVCxNQUFNLENBQUNZLEtBQVAsQ0FBYUgsT0FBYixDQUFxQixDQUFyQixDQUF0QyxHQUFnRVQsTUFBTSxDQUFDWSxLQUFQLENBQWFILE9BQTdGO0FBQ0EsUUFBTUksVUFBVSxHQUFHSCxLQUFLLENBQUNDLE9BQU4sQ0FBY1gsTUFBTSxDQUFDWSxLQUFQLENBQWFDLFVBQTNCLElBQXlDYixN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QUFBLDJCQUNLaEIsUUFETCxTQUNrQkYsUUFEbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFaQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVpSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQW1ESCxDQTFGRDs7R0FBTVQ7VUFHYU47OztLQUhiTTtBQTRGTiwrREFBZUEsSUFBZjtBQUVBLElBQU1nQyxhQUFhLEdBQUd4Qyw2REFBSCw0YkFBbkI7TUFBTXdDO0FBYU4sSUFBTUUsY0FBYyxHQUFHMUMsNkRBQUgsc1NBQXBCO01BQU0wQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy93YXRjaC9bdmlkZW9JZF0vW2luc3RhbmNlSWRdL2luZGV4LnRzeD8xZTZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuaW1wb3J0IFJlYWN0UGxheWVyIGZyb20gJ3JlYWN0LXBsYXllcic7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvSGVhZGVyJztcbmltcG9ydCB7IEJ1dHRvbiwgQnV0dG9uUm93LCBDb250YWluZXIsIFBhZ2VDb250YWluZXIgfSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL3N0eWxlZCc7XG5pbXBvcnQgeyBnZXRWaWRlb0luc3RhbmNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2VydmljZXMvdmlkZW9TZXJ2aWNlJztcblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG4gICAgY29uc3QgW3ZpZGVvVVJMLCBzZXRWaWRlb1VSTF0gPSB1c2VTdGF0ZShudWxsKTtcbiAgICBjb25zdCB2aWRlb1JlZiA9IHVzZVJlZihudWxsKTtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgICBjb25zdCBbcGxheWVyT3Blbiwgc2V0UGxheWVyT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gICAgY29uc3QgW3BsYXlpbmcsIHNldFBsYXlpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICAgIGNvbnN0IFtkdXJhdGlvbiwgc2V0RHVyYXRpb25dID0gdXNlU3RhdGUoMCk7XG4gICAgY29uc3QgW3Byb2dyZXNzLCBzZXRQcm9ncmVzc10gPSB1c2VTdGF0ZSgwKTtcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IHZpZGVvSWQgPSBBcnJheS5pc0FycmF5KHJvdXRlci5xdWVyeS52aWRlb0lkKSA/IHJvdXRlci5xdWVyeS52aWRlb0lkWzBdIDogcm91dGVyLnF1ZXJ5LnZpZGVvSWQ7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlSWQgPSBBcnJheS5pc0FycmF5KHJvdXRlci5xdWVyeS5pbnN0YW5jZUlkKSA/IHJvdXRlci5xdWVyeS5pbnN0YW5jZUlkWzBdIDogcm91dGVyLnF1ZXJ5Lmluc3RhbmNlSWQ7XG5cbiAgICAgICAgaWYgKHZpZGVvSWQgJiYgaW5zdGFuY2VJZCkge1xuICAgICAgICAgICAgZ2V0VmlkZW9JbnN0YW5jZShwYXJzZUludCh2aWRlb0lkKSwgaW5zdGFuY2VJZClcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgICAgICAgICAgICAgIHNldFZpZGVvVVJMKHJlcy5kYXRhLnZpZGVvX2lkLnVybCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbcm91dGVyXSk7XG5cbiAgICBjb25zdCB0b2dnbGVQbGF5aW5nID0gKCkgPT4ge1xuICAgICAgICBzZXRQbGF5aW5nKCFwbGF5aW5nKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVDbG9zZSA9ICgpID0+IHtcbiAgICAgICAgc2V0UGxheWVyT3BlbihmYWxzZSk7XG4gICAgfVxuXG4gICAgY29uc3QgaGFuZGxlUmVhZHkgPSAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGR1cmF0aW9uID0gdmlkZW9SZWYuY3VycmVudD8uZ2V0RHVyYXRpb24oKTtcbiAgICAgICAgc2V0RHVyYXRpb24oZHVyYXRpb24pO1xuICAgIH1cblxuICAgIGNvbnN0IGhhbmRsZVByb2dyZXNzID0gKCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygncHJvZ3Jlc3MnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8UGFnZUNvbnRhaW5lcj5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5hYS53YXRjaDwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdldCBwYWlkIHRvIHdhdGNoIGltcG9ydGFudCB2aWRlb3MgZnJvbSBhY3RpdmlzdHNcIiAvPlxuICAgICAgICAgICAgPC9IZWFkPlxuXG4gICAgICAgICAgICA8bWFpbj5cbiAgICAgICAgICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgICAgICAgICAgICA8SGVhZGVyIC8+XG5cbiAgICAgICAgICAgICAgICAgICAgeyF2aWRlb1VSTCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDU+TG9hZGluZy4uLjwvaDU+XG4gICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAge3ZpZGVvVVJMICYmICFwbGF5ZXJPcGVuICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gc2V0UGxheWVyT3Blbih0cnVlKX0+c3RhcnQgdGhlIGZpbG08L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICB7dmlkZW9VUkwgJiYgcGxheWVyT3BlbiAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8UGxheWVyV3JhcHBlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdFBsYXllclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e3ZpZGVvUmVmfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw9J2h0dHBzOi8vd3d3LmZhcm10cmFuc3BhcmVuY3kub3JnL3VwbG9hZHMvdmlkZW9zL0RvbWluaW9uXzcyMC5tcDQnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11dGVkPXshcGxheWluZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheWluZz17cGxheWluZ31cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9JzEwMCUnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NDAwfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblJlYWR5PXtoYW5kbGVSZWFkeX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25Qcm9ncmVzcz17aGFuZGxlUHJvZ3Jlc3N9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQbGF5ZXJDb250cm9scz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17dG9nZ2xlUGxheWluZ30+e3BsYXlpbmcgPyAncGF1c2UnIDogJ3BsYXknfTwvQnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbG9zZX0+Y2xvc2U8L0J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9ncmVzc30gLyB7ZHVyYXRpb259XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvUGxheWVyQ29udHJvbHM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1BsYXllcldyYXBwZXI+XG4gICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICA8L0NvbnRhaW5lcj5cbiAgICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgPC9QYWdlQ29udGFpbmVyPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcblxuY29uc3QgUGxheWVyV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xuYDtcblxuY29uc3QgUGxheWVyQ29udHJvbHMgPSBzdHlsZWQuZGl2YFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5gO1xuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVN0YXRlIiwiSGVhZCIsInN0eWxlZCIsIlJlYWN0UGxheWVyIiwidXNlUm91dGVyIiwiSGVhZGVyIiwiQnV0dG9uIiwiQ29udGFpbmVyIiwiUGFnZUNvbnRhaW5lciIsImdldFZpZGVvSW5zdGFuY2UiLCJIb21lIiwidmlkZW9VUkwiLCJzZXRWaWRlb1VSTCIsInZpZGVvUmVmIiwicm91dGVyIiwicGxheWVyT3BlbiIsInNldFBsYXllck9wZW4iLCJwbGF5aW5nIiwic2V0UGxheWluZyIsImR1cmF0aW9uIiwic2V0RHVyYXRpb24iLCJwcm9ncmVzcyIsInNldFByb2dyZXNzIiwidmlkZW9JZCIsIkFycmF5IiwiaXNBcnJheSIsInF1ZXJ5IiwiaW5zdGFuY2VJZCIsInBhcnNlSW50IiwidGhlbiIsInJlcyIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwidmlkZW9faWQiLCJ1cmwiLCJ0b2dnbGVQbGF5aW5nIiwiaGFuZGxlQ2xvc2UiLCJoYW5kbGVSZWFkeSIsImN1cnJlbnQiLCJnZXREdXJhdGlvbiIsImhhbmRsZVByb2dyZXNzIiwiUGxheWVyV3JhcHBlciIsImRpdiIsIlBsYXllckNvbnRyb2xzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/watch/[videoId]/[instanceId]/index.tsx\n");

/***/ })

});