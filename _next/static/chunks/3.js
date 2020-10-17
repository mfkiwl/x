(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[3],{

/***/ "./components/System/WindowManager/ProcessWindow.tsx":
/*!***********************************************************!*\
  !*** ./components/System/WindowManager/ProcessWindow.tsx ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_System_WindowManager_WindowManager_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/styles/System/WindowManager/WindowManager.module.scss */ \"./styles/System/WindowManager/WindowManager.module.scss\");\n/* harmony import */ var _styles_System_WindowManager_WindowManager_module_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_System_WindowManager_WindowManager_module_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dist/next-server/lib/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/constants */ \"./utils/constants.ts\");\n/* harmony import */ var _utils_windowmanager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/windowmanager */ \"./utils/windowmanager.ts\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/framer-motion.es.js\");\n/* harmony import */ var _contexts_ProcessManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/contexts/ProcessManager */ \"./contexts/ProcessManager.tsx\");\n/* harmony import */ var _contexts_SessionManager__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/contexts/SessionManager */ \"./contexts/SessionManager.tsx\");\n/* harmony import */ var _utils_motions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/utils/motions */ \"./utils/motions.ts\");\n\n\nvar _this = undefined,\n    _jsxFileName = \"/Users/dustin/Git/x/components/System/WindowManager/ProcessWindow.tsx\",\n    _s = $RefreshSig$();\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\n\n\n\n\n\n\n\nvar Window = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(_c = function _c() {\n  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! @/components/System/WindowManager/Window */ \"./components/System/WindowManager/Window.tsx\"));\n}, {\n  loadableGenerated: {\n    webpack: function webpack() {\n      return [/*require.resolve*/(/*! @/components/System/WindowManager/Window */ \"./components/System/WindowManager/Window.tsx\")];\n    },\n    modules: ['@/components/System/WindowManager/Window']\n  }\n});\n_c2 = Window;\nvar windowZindex = _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"baseZindex\"] + _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"windowsZindexLevel\"] * _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"zindexLevelSize\"]; // TODO: Stop so many re-renders on stackOrder & foregroundId changes\n// TODO: Focus next window without the need for processes and stackOrder\n\nvar ProcessWindow = function ProcessWindow(_ref) {\n  _s();\n\n  var _ref$loader = _ref.loader,\n      App = _ref$loader.loader,\n      loadedAppOptions = _ref$loader.loadedAppOptions,\n      _ref$loader$loaderOpt = _ref$loader.loaderOptions,\n      defaultWidth = _ref$loader$loaderOpt.width,\n      defaultHeight = _ref$loader$loaderOpt.height,\n      bgColor = _ref.bgColor,\n      initialHeight = _ref.height,\n      icon = _ref.icon,\n      id = _ref.id,\n      launchElement = _ref.launchElement,\n      lockAspectRatio = _ref.lockAspectRatio,\n      maximized = _ref.maximized,\n      minimized = _ref.minimized,\n      name = _ref.name,\n      taskbarElement = _ref.taskbarElement,\n      initialWidth = _ref.width,\n      windowed = _ref.windowed,\n      x = _ref.x,\n      y = _ref.y;\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_contexts_SessionManager__WEBPACK_IMPORTED_MODULE_8__[\"SessionContext\"]),\n      foreground = _useContext.foreground,\n      getState = _useContext.getState,\n      saveState = _useContext.saveState,\n      _useContext$session = _useContext.session,\n      foregroundId = _useContext$session.foregroundId,\n      stackOrder = _useContext$session.stackOrder;\n\n  var _useContext2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useContext\"])(_contexts_ProcessManager__WEBPACK_IMPORTED_MODULE_7__[\"ProcessContext\"]),\n      processes = _useContext2.processes,\n      close = _useContext2.close,\n      maximize = _useContext2.maximize,\n      minimize = _useContext2.minimize,\n      position = _useContext2.position,\n      restore = _useContext2.restore,\n      size = _useContext2.size;\n\n  var _getState = getState({\n    id: id\n  }),\n      _getState$x = _getState.x,\n      previousX = _getState$x === void 0 ? 0 : _getState$x,\n      _getState$y = _getState.y,\n      previousY = _getState$y === void 0 ? 0 : _getState$y;\n\n  var _getMaxDimensions = Object(_utils_windowmanager__WEBPACK_IMPORTED_MODULE_5__[\"getMaxDimensions\"])(initialWidth, initialHeight, defaultWidth, defaultHeight, lockAspectRatio),\n      height = _getMaxDimensions.height,\n      width = _getMaxDimensions.width;\n\n  var windowOptions = {\n    onMinimize: Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function () {\n      // TODO: Allow restoring maximized. Fix max restore.\n      // if (maximized) restore(id, 'maximized');\n      minimize(id);\n      Object(_utils_windowmanager__WEBPACK_IMPORTED_MODULE_5__[\"focusNextVisibleWindow\"])(stackOrder, processes, foreground);\n    }, [id, processes, stackOrder]),\n    onMaximize: Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function () {\n      return maximized ? restore(id, 'maximized') : maximize(id);\n    }, [id, maximized]),\n    onClose: Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function () {\n      saveState({\n        id: id,\n        height: height,\n        width: width,\n        x: x,\n        y: y\n      });\n      close(id);\n      Object(_utils_windowmanager__WEBPACK_IMPORTED_MODULE_5__[\"focusNextVisibleWindow\"])(stackOrder, processes, foreground);\n    }, [height, id, processes, stackOrder, width, x, y]),\n    onFocus: Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function () {\n      return foreground(id);\n    }, [id]),\n    onBlur: Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function (event) {\n      if (event.relatedTarget !== taskbarElement) {\n        foreground('');\n      }\n    }, [taskbarElement]),\n    updatePosition: Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function (event, data) {\n      return position(id)(event, data);\n    }, [id]),\n    zIndex: windowZindex + stackOrder.slice().reverse().indexOf(id),\n    maximized: maximized,\n    minimized: minimized,\n    id: id,\n    height: height,\n    width: width\n  };\n  var updateSize = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useCallback\"])(function (event, dir, ref, delta, pos) {\n    return size(id)(event, dir, ref, delta, pos);\n  }, [id]);\n  return __jsx(framer_motion__WEBPACK_IMPORTED_MODULE_6__[\"motion\"].article, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    key: id,\n    className: _styles_System_WindowManager_WindowManager_module_scss__WEBPACK_IMPORTED_MODULE_2___default.a.animatedWindows,\n    style: {\n      zIndex: foregroundId === id ? _utils_constants__WEBPACK_IMPORTED_MODULE_4__[\"foregroundZindex\"] : windowOptions.zIndex,\n      height: height,\n      width: width\n    }\n  }, Object(_utils_motions__WEBPACK_IMPORTED_MODULE_9__[\"windowMotionSettings\"])({\n    initialX: previousX,\n    initialY: previousY,\n    animation: minimized && 'minimized' || maximized && 'maximized' || 'start',\n    height: height,\n    width: width,\n    x: x,\n    y: y,\n    taskbarElement: taskbarElement,\n    launchElement: launchElement\n  }), {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 122,\n      columnNumber: 5\n    }\n  }), windowed ? __jsx(Window, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    icon: icon,\n    name: name,\n    bgColor: bgColor,\n    lockAspectRatio: lockAspectRatio,\n    updateSize: updateSize\n  }, windowOptions, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 144,\n      columnNumber: 9\n    }\n  }), __jsx(App, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, loadedAppOptions, windowOptions, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 152,\n      columnNumber: 11\n    }\n  }))) : __jsx(App, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n    key: id\n  }, loadedAppOptions, windowOptions, {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 155,\n      columnNumber: 9\n    }\n  })));\n};\n\n_s(ProcessWindow, \"CDsJsYO8UzzYLO2/oyDZUzIGrGE=\");\n\n_c3 = ProcessWindow;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProcessWindow);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"Window$dynamic\");\n$RefreshReg$(_c2, \"Window\");\n$RefreshReg$(_c3, \"ProcessWindow\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TeXN0ZW0vV2luZG93TWFuYWdlci9Qcm9jZXNzV2luZG93LnRzeD82Y2MwIl0sIm5hbWVzIjpbIldpbmRvdyIsImR5bmFtaWMiLCJ3aW5kb3daaW5kZXgiLCJiYXNlWmluZGV4Iiwid2luZG93c1ppbmRleExldmVsIiwiemluZGV4TGV2ZWxTaXplIiwiUHJvY2Vzc1dpbmRvdyIsImxvYWRlciIsIkFwcCIsImxvYWRlZEFwcE9wdGlvbnMiLCJsb2FkZXJPcHRpb25zIiwiZGVmYXVsdFdpZHRoIiwid2lkdGgiLCJkZWZhdWx0SGVpZ2h0IiwiaGVpZ2h0IiwiYmdDb2xvciIsImluaXRpYWxIZWlnaHQiLCJpY29uIiwiaWQiLCJsYXVuY2hFbGVtZW50IiwibG9ja0FzcGVjdFJhdGlvIiwibWF4aW1pemVkIiwibWluaW1pemVkIiwibmFtZSIsInRhc2tiYXJFbGVtZW50IiwiaW5pdGlhbFdpZHRoIiwid2luZG93ZWQiLCJ4IiwieSIsInVzZUNvbnRleHQiLCJTZXNzaW9uQ29udGV4dCIsImZvcmVncm91bmQiLCJnZXRTdGF0ZSIsInNhdmVTdGF0ZSIsInNlc3Npb24iLCJmb3JlZ3JvdW5kSWQiLCJzdGFja09yZGVyIiwiUHJvY2Vzc0NvbnRleHQiLCJwcm9jZXNzZXMiLCJjbG9zZSIsIm1heGltaXplIiwibWluaW1pemUiLCJwb3NpdGlvbiIsInJlc3RvcmUiLCJzaXplIiwicHJldmlvdXNYIiwicHJldmlvdXNZIiwiZ2V0TWF4RGltZW5zaW9ucyIsIndpbmRvd09wdGlvbnMiLCJvbk1pbmltaXplIiwidXNlQ2FsbGJhY2siLCJmb2N1c05leHRWaXNpYmxlV2luZG93Iiwib25NYXhpbWl6ZSIsIm9uQ2xvc2UiLCJvbkZvY3VzIiwib25CbHVyIiwiZXZlbnQiLCJyZWxhdGVkVGFyZ2V0IiwidXBkYXRlUG9zaXRpb24iLCJkYXRhIiwiekluZGV4Iiwic2xpY2UiLCJyZXZlcnNlIiwiaW5kZXhPZiIsInVwZGF0ZVNpemUiLCJkaXIiLCJyZWYiLCJkZWx0YSIsInBvcyIsInN0eWxlcyIsImFuaW1hdGVkV2luZG93cyIsImZvcmVncm91bmRaaW5kZXgiLCJ3aW5kb3dNb3Rpb25TZXR0aW5ncyIsImluaXRpYWxYIiwiaW5pdGlhbFkiLCJhbmltYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUlBO0FBQ0E7QUFNQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLG1EQUFPO0FBQUEsU0FBQyw2S0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQUFRLDhGQUFSO0FBQUE7QUFBQSxjQUFRLDBDQUFSO0FBQUE7QUFBQSxFQUF0QjtNQUFNRCxNO0FBRU4sSUFBTUUsWUFBWSxHQUFHQywyREFBVSxHQUFHQyxtRUFBa0IsR0FBR0MsZ0VBQXZELEMsQ0FFQTtBQUNBOztBQUVBLElBQU1DLGFBQWdDLEdBQUcsU0FBbkNBLGFBQW1DLE9Bb0JuQztBQUFBOztBQUFBLHlCQW5CSkMsTUFtQkk7QUFBQSxNQWxCTUMsR0FrQk4sZUFsQkZELE1Ba0JFO0FBQUEsTUFqQkZFLGdCQWlCRSxlQWpCRkEsZ0JBaUJFO0FBQUEsMENBaEJGQyxhQWdCRTtBQUFBLE1BaEJzQkMsWUFnQnRCLHlCQWhCZUMsS0FnQmY7QUFBQSxNQWhCNENDLGFBZ0I1Qyx5QkFoQm9DQyxNQWdCcEM7QUFBQSxNQWRKQyxPQWNJLFFBZEpBLE9BY0k7QUFBQSxNQWJJQyxhQWFKLFFBYkpGLE1BYUk7QUFBQSxNQVpKRyxJQVlJLFFBWkpBLElBWUk7QUFBQSxNQVhKQyxFQVdJLFFBWEpBLEVBV0k7QUFBQSxNQVZKQyxhQVVJLFFBVkpBLGFBVUk7QUFBQSxNQVRKQyxlQVNJLFFBVEpBLGVBU0k7QUFBQSxNQVJKQyxTQVFJLFFBUkpBLFNBUUk7QUFBQSxNQVBKQyxTQU9JLFFBUEpBLFNBT0k7QUFBQSxNQU5KQyxJQU1JLFFBTkpBLElBTUk7QUFBQSxNQUxKQyxjQUtJLFFBTEpBLGNBS0k7QUFBQSxNQUpH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QUVMOUMsWUFBTSxFQUFOQSxNQUZLO0FBR0xGLFdBQUssRUFBTEE7QUFISztBQUhULEtBUU00RCwyRUFBb0IsQ0FBQztBQUN2QkMsWUFBUSxFQUFFNUIsU0FEYTtBQUV2QjZCLFlBQVEsRUFBRTVCLFNBRmE7QUFHdkI2QixhQUFTLEVBQ05yRCxTQUFTLElBQUksV0FBZCxJQUErQkQsU0FBUyxJQUFJLFdBQTVDLElBQTRELE9BSnZDO0FBS3ZCUCxVQUFNLEVBQU5BLE1BTHVCO0FBTXZCRixTQUFLLEVBQUxBLEtBTnVCO0FBT3ZCZSxLQUFDLEVBQURBLENBUHVCO0FBUXZCQyxLQUFDLEVBQURBLENBUnVCO0FBU3ZCSixrQkFBYyxFQUFkQSxjQVR1QjtBQVV2QkwsaUJBQWEsRUFBYkE7QUFWdUIsR0FBRCxDQVIxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BcUJHTyxRQUFRLEdBQ1AsTUFBQyxNQUFEO0FBQ0UsUUFBSSxFQUFFVCxJQURSO0FBRUUsUUFBSSxFQUFFTSxJQUZSO0FBR0UsV0FBTyxFQUFFUixPQUhYO0FBSUUsbUJBQWUsRUFBRUssZUFKbkI7QUFLRSxjQUFVLEVBQUU0QztBQUxkLEtBTU1oQixhQU5OO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFRRSxNQUFDLEdBQUQseUZBQVN2QyxnQkFBVCxFQUErQnVDLGFBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FSRixDQURPLEdBWVAsTUFBQyxHQUFEO0FBQUssT0FBRyxFQUFFOUI7QUFBVixLQUFrQlQsZ0JBQWxCLEVBQXdDdUMsYUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQWpDSixDQURGO0FBc0NELENBbElEOztHQUFNMUMsYTs7TUFBQUEsYTtBQW9JU0EsNEVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL1N5c3RlbS9XaW5kb3dNYW5hZ2VyL1Byb2Nlc3NXaW5kb3cudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9TeXN0ZW0vV2luZG93TWFuYWdlci9XaW5kb3dNYW5hZ2VyLm1vZHVsZS5zY3NzJztcblxuaW1wb3J0IHR5cGUgeyBQcm9jZXNzIH0gZnJvbSAnQC91dGlscy9wcm9jZXNzJztcblxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcbmltcG9ydCB7XG4gIGJhc2VaaW5kZXgsXG4gIGZvcmVncm91bmRaaW5kZXgsXG4gIHdpbmRvd3NaaW5kZXhMZXZlbCxcbiAgemluZGV4TGV2ZWxTaXplXG59IGZyb20gJ0AvdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCB7XG4gIGZvY3VzTmV4dFZpc2libGVXaW5kb3csXG4gIGdldE1heERpbWVuc2lvbnNcbn0gZnJvbSAnQC91dGlscy93aW5kb3dtYW5hZ2VyJztcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xuaW1wb3J0IHsgUHJvY2Vzc0NvbnRleHQgfSBmcm9tICdAL2NvbnRleHRzL1Byb2Nlc3NNYW5hZ2VyJztcbmltcG9ydCB7IFNlc3Npb25Db250ZXh0IH0gZnJvbSAnQC9jb250ZXh0cy9TZXNzaW9uTWFuYWdlcic7XG5pbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHdpbmRvd01vdGlvblNldHRpbmdzIH0gZnJvbSAnQC91dGlscy9tb3Rpb25zJztcblxuY29uc3QgV2luZG93ID0gZHluYW1pYyhpbXBvcnQoJ0AvY29tcG9uZW50cy9TeXN0ZW0vV2luZG93TWFuYWdlci9XaW5kb3cnKSk7XG5cbmNvbnN0IHdpbmRvd1ppbmRleCA9IGJhc2VaaW5kZXggKyB3aW5kb3dzWmluZGV4TGV2ZWwgKiB6aW5kZXhMZXZlbFNpemU7XG5cbi8vIFRPRE86IFN0b3Agc28gbWFueSByZS1yZW5kZXJzIG9uIHN0YWNrT3JkZXIgJiBmb3JlZ3JvdW5kSWQgY2hhbmdlc1xuLy8gVE9ETzogRm9jdXMgbmV4dCB3aW5kb3cgd2l0aG91dCB0aGUgbmVlZCBmb3IgcHJvY2Vzc2VzIGFuZCBzdGFja09yZGVyXG5cbmNvbnN0IFByb2Nlc3NXaW5kb3c6IFJlYWN0LkZDPFByb2Nlc3M+ID0gKHtcbiAgbG9hZGVyOiB7XG4gICAgbG9hZGVyOiBBcHAsXG4gICAgbG9hZGVkQXBwT3B0aW9ucyxcbiAgICBsb2FkZXJPcHRpb25zOiB7IHdpZHRoOiBkZWZhdWx0V2lkdGgsIGhlaWdodDogZGVmYXVsdEhlaWdodCB9XG4gIH0sXG4gIGJnQ29sb3IsXG4gIGhlaWdodDogaW5pdGlhbEhlaWdodCxcbiAgaWNvbixcbiAgaWQsXG4gIGxhdW5jaEVsZW1lbnQsXG4gIGxvY2tBc3BlY3RSYXRpbyxcbiAgbWF4aW1pemVkLFxuICBtaW5pbWl6ZWQsXG4gIG5hbWUsXG4gIHRhc2tiYXJFbGVtZW50LFxuICB3aWR0aDogaW5pdGlhbFdpZHRoLFxuICB3aW5kb3dlZCxcbiAgeCxcbiAgeVxufSkgPT4ge1xuICBjb25zdCB7XG4gICAgZm9yZWdyb3VuZCxcbiAgICBnZXRTdGF0ZSxcbiAgICBzYXZlU3RhdGUsXG4gICAgc2Vzc2lvbjogeyBmb3JlZ3JvdW5kSWQsIHN0YWNrT3JkZXIgfVxuICB9ID0gdXNlQ29udGV4dChTZXNzaW9uQ29udGV4dCk7XG4gIGNvbnN0IHtcbiAgICBwcm9jZXNzZXMsXG4gICAgY2xvc2UsXG4gICAgbWF4aW1pemUsXG4gICAgbWluaW1pemUsXG4gICAgcG9zaXRpb24sXG4gICAgcmVzdG9yZSxcbiAgICBzaXplXG4gIH0gPSB1c2VDb250ZXh0KFByb2Nlc3NDb250ZXh0KTtcbiAgY29uc3QgeyB4OiBwcmV2aW91c1ggPSAwLCB5OiBwcmV2aW91c1kgPSAwIH0gPSBnZXRTdGF0ZSh7XG4gICAgaWRcbiAgfSk7XG4gIGNvbnN0IHsgaGVpZ2h0LCB3aWR0aCB9ID0gZ2V0TWF4RGltZW5zaW9ucyhcbiAgICBpbml0aWFsV2lkdGgsXG4gICAgaW5pdGlhbEhlaWdodCxcbiAgICBkZWZhdWx0V2lkdGgsXG4gICAgZGVmYXVsdEhlaWdodCxcbiAgICBsb2NrQXNwZWN0UmF0aW9cbiAgKTtcbiAgY29uc3Qgd2luZG93T3B0aW9ucyA9IHtcbiAgICBvbk1pbmltaXplOiB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICAvLyBUT0RPOiBBbGxvdyByZXN0b3JpbmcgbWF4aW1pemVkLiBGaXggbWF4IHJlc3RvcmUuXG4gICAgICAvLyBpZiAobWF4aW1pemVkKSByZXN0b3JlKGlkLCAnbWF4aW1pemVkJyk7XG4gICAgICBtaW5pbWl6ZShpZCk7XG4gICAgICBmb2N1c05leHRWaXNpYmxlV2luZG93KHN0YWNrT3JkZXIsIHByb2Nlc3NlcywgZm9yZWdyb3VuZCk7XG4gICAgfSwgW2lkLCBwcm9jZXNzZXMsIHN0YWNrT3JkZXJdKSxcbiAgICBvbk1heGltaXplOiB1c2VDYWxsYmFjayhcbiAgICAgICgpID0+IChtYXhpbWl6ZWQgPyByZXN0b3JlKGlkLCAnbWF4aW1pemVkJykgOiBtYXhpbWl6ZShpZCkpLFxuICAgICAgW2lkLCBtYXhpbWl6ZWRdXG4gICAgKSxcbiAgICBvbkNsb3NlOiB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgICBzYXZlU3RhdGUoe1xuICAgICAgICBpZCxcbiAgICAgICAgaGVpZ2h0LFxuICAgICAgICB3aWR0aCxcbiAgICAgICAgeCxcbiAgICAgICAgeVxuICAgICAgfSk7XG4gICAgICBjbG9zZShpZCk7XG4gICAgICBmb2N1c05leHRWaXNpYmxlV2luZG93KHN0YWNrT3JkZXIsIHByb2Nlc3NlcywgZm9yZWdyb3VuZCk7XG4gICAgfSwgW2hlaWdodCwgaWQsIHByb2Nlc3Nlcywgc3RhY2tPcmRlciwgd2lkdGgsIHgsIHldKSxcbiAgICBvbkZvY3VzOiB1c2VDYWxsYmFjaygoKSA9PiBmb3JlZ3JvdW5kKGlkKSwgW2lkXSksXG4gICAgb25CbHVyOiB1c2VDYWxsYmFjayhcbiAgICAgIChldmVudDogUmVhY3QuRm9jdXNFdmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQucmVsYXRlZFRhcmdldCAhPT0gdGFza2JhckVsZW1lbnQpIHtcbiAgICAgICAgICBmb3JlZ3JvdW5kKCcnKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFt0YXNrYmFyRWxlbWVudF1cbiAgICApLFxuICAgIHVwZGF0ZVBvc2l0aW9uOiB1c2VDYWxsYmFjaygoZXZlbnQsIGRhdGEpID0+IHBvc2l0aW9uKGlkKShldmVudCwgZGF0YSksIFtcbiAgICAgIGlkXG4gICAgXSksXG4gICAgekluZGV4OiB3aW5kb3daaW5kZXggKyBzdGFja09yZGVyLnNsaWNlKCkucmV2ZXJzZSgpLmluZGV4T2YoaWQpLFxuICAgIG1heGltaXplZCxcbiAgICBtaW5pbWl6ZWQsXG4gICAgaWQsXG4gICAgaGVpZ2h0LFxuICAgIHdpZHRoXG4gIH07XG4gIGNvbnN0IHVwZGF0ZVNpemUgPSB1c2VDYWxsYmFjayhcbiAgICAoZXZlbnQsIGRpciwgcmVmLCBkZWx0YSwgcG9zKSA9PiBzaXplKGlkKShldmVudCwgZGlyLCByZWYsIGRlbHRhLCBwb3MpLFxuICAgIFtpZF1cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxtb3Rpb24uYXJ0aWNsZVxuICAgICAga2V5PXtpZH1cbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFuaW1hdGVkV2luZG93c31cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIHpJbmRleDogZm9yZWdyb3VuZElkID09PSBpZCA/IGZvcmVncm91bmRaaW5kZXggOiB3aW5kb3dPcHRpb25zLnpJbmRleCxcbiAgICAgICAgaGVpZ2h0LFxuICAgICAgICB3aWR0aFxuICAgICAgfX1cbiAgICAgIHsuLi53aW5kb3dNb3Rpb25TZXR0aW5ncyh7XG4gICAgICAgIGluaXRpYWxYOiBwcmV2aW91c1gsXG4gICAgICAgIGluaXRpYWxZOiBwcmV2aW91c1ksXG4gICAgICAgIGFuaW1hdGlvbjpcbiAgICAgICAgICAobWluaW1pemVkICYmICdtaW5pbWl6ZWQnKSB8fCAobWF4aW1pemVkICYmICdtYXhpbWl6ZWQnKSB8fCAnc3RhcnQnLFxuICAgICAgICBoZWlnaHQsXG4gICAgICAgIHdpZHRoLFxuICAgICAgICB4LFxuICAgICAgICB5LFxuICAgICAgICB0YXNrYmFyRWxlbWVudCxcbiAgICAgICAgbGF1bmNoRWxlbWVudFxuICAgICAgfSl9XG4gICAgPlxuICAgICAge3dpbmRvd2VkID8gKFxuICAgICAgICA8V2luZG93XG4gICAgICAgICAgaWNvbj17aWNvbn1cbiAgICAgICAgICBuYW1lPXtuYW1lfVxuICAgICAgICAgIGJnQ29sb3I9e2JnQ29sb3J9XG4gICAgICAgICAgbG9ja0FzcGVjdFJhdGlvPXtsb2NrQXNwZWN0UmF0aW99XG4gICAgICAgICAgdXBkYXRlU2l6ZT17dXBkYXRlU2l6ZX1cbiAgICAgICAgICB7Li4ud2luZG93T3B0aW9uc31cbiAgICAgICAgPlxuICAgICAgICAgIDxBcHAgey4uLmxvYWRlZEFwcE9wdGlvbnN9IHsuLi53aW5kb3dPcHRpb25zfSAvPlxuICAgICAgICA8L1dpbmRvdz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxBcHAga2V5PXtpZH0gey4uLmxvYWRlZEFwcE9wdGlvbnN9IHsuLi53aW5kb3dPcHRpb25zfSAvPlxuICAgICAgKX1cbiAgICA8L21vdGlvbi5hcnRpY2xlPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvY2Vzc1dpbmRvdztcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/System/WindowManager/ProcessWindow.tsx\n");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toArray.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toArray.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return _toArray; });\n/* harmony import */ var _arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles */ \"./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js\");\n/* harmony import */ var _iterableToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray */ \"./node_modules/@babel/runtime/helpers/esm/iterableToArray.js\");\n/* harmony import */ var _unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray */ \"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js\");\n/* harmony import */ var _nonIterableRest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest */ \"./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js\");\n\n\n\n\nfunction _toArray(arr) {\n  return Object(_arrayWithHoles__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(arr) || Object(_iterableToArray__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(arr) || Object(_unsupportedIterableToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(arr) || Object(_nonIterableRest__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQXJyYXkuanM/NGY5NiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEM7QUFDRTtBQUNzQjtBQUN0QjtBQUNqQztBQUNmLFNBQVMsK0RBQWMsU0FBUyxnRUFBZSxTQUFTLDJFQUEwQixTQUFTLGdFQUFlO0FBQzFHIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQXJyYXkuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgYXJyYXlXaXRoSG9sZXMgZnJvbSBcIi4vYXJyYXlXaXRoSG9sZXNcIjtcbmltcG9ydCBpdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vaXRlcmFibGVUb0FycmF5XCI7XG5pbXBvcnQgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXlcIjtcbmltcG9ydCBub25JdGVyYWJsZVJlc3QgZnJvbSBcIi4vbm9uSXRlcmFibGVSZXN0XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdG9BcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/@babel/runtime/helpers/esm/toArray.js\n");

/***/ }),

/***/ "./utils/windowmanager.ts":
/*!********************************!*\
  !*** ./utils/windowmanager.ts ***!
  \********************************/
/*! exports provided: getMaxDimensions, focusNextVisibleWindow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMaxDimensions\", function() { return getMaxDimensions; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"focusNextVisibleWindow\", function() { return focusNextVisibleWindow; });\n/* harmony import */ var _babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toArray */ \"./node_modules/@babel/runtime/helpers/esm/toArray.js\");\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/constants */ \"./utils/constants.ts\");\n\n\nvar getMaxDimensions = function getMaxDimensions(width, height) {\n  var defaultWidth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;\n  var defaultHeight = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;\n  var lockAspectRatio = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;\n\n  if (width === defaultWidth && height === defaultHeight) {\n    var maxWidth = window.innerWidth;\n    var maxHeight = window.innerHeight - _utils_constants__WEBPACK_IMPORTED_MODULE_1__[\"TASKBAR_HEIGHT\"];\n\n    if (lockAspectRatio) {\n      var aspectLockedHeight = Math.min(maxWidth, width) * (height / width);\n\n      if (aspectLockedHeight > maxHeight) {\n        maxWidth = maxHeight / (height / width);\n      } else {\n        maxHeight = aspectLockedHeight;\n      }\n    }\n\n    return {\n      height: Math.floor(Math.min(maxHeight, height)),\n      width: Math.floor(Math.min(maxWidth, width))\n    };\n  }\n\n  return {\n    height: height,\n    width: width\n  };\n}; // TODO: Find a way to not need processes or stackOrder (Maybe index in the DOM?)\n\nvar focusNextVisibleWindow = function focusNextVisibleWindow(stackOrder, processes, foreground) {\n  var _stackOrder = Object(_babel_runtime_helpers_esm_toArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(stackOrder),\n      remainingStackEntries = _stackOrder.slice(1);\n\n  var visibleProcessId = remainingStackEntries.find(function (stackId) {\n    return processes.find(function (process) {\n      return process.id === stackId && !process.minimized;\n    });\n  });\n  if (visibleProcessId) foreground(visibleProcessId);\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvd2luZG93bWFuYWdlci50cz8xNDRiIl0sIm5hbWVzIjpbImdldE1heERpbWVuc2lvbnMiLCJ3aWR0aCIsImhlaWdodCIsImRlZmF1bHRXaWR0aCIsImRlZmF1bHRIZWlnaHQiLCJsb2NrQXNwZWN0UmF0aW8iLCJtYXhXaWR0aCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJtYXhIZWlnaHQiLCJpbm5lckhlaWdodCIsIlRBU0tCQVJfSEVJR0hUIiwiYXNwZWN0TG9ja2VkSGVpZ2h0IiwiTWF0aCIsIm1pbiIsImZsb29yIiwiZm9jdXNOZXh0VmlzaWJsZVdpbmRvdyIsInN0YWNrT3JkZXIiLCJwcm9jZXNzZXMiLCJmb3JlZ3JvdW5kIiwicmVtYWluaW5nU3RhY2tFbnRyaWVzIiwidmlzaWJsZVByb2Nlc3NJZCIsImZpbmQiLCJzdGFja0lkIiwicHJvY2VzcyIsImlkIiwibWluaW1pemVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFFQTtBQUVPLElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FDOUJDLEtBRDhCLEVBRTlCQyxNQUY4QixFQU1RO0FBQUEsTUFIdENDLFlBR3NDLHVFQUh2QixDQUd1QjtBQUFBLE1BRnRDQyxhQUVzQyx1RUFGdEIsQ0FFc0I7QUFBQSxNQUR0Q0MsZUFDc0MsdUVBRHBCLEtBQ29COztBQUN0QyxNQUFJSixLQUFLLEtBQUtFLFlBQVYsSUFBMEJELE1BQU0sS0FBS0UsYUFBekMsRUFBd0Q7QUFDdEQsUUFBSUUsUUFBUSxHQUFHQyxNQUFNLENBQUNDLFVBQXRCO0FBQ0EsUUFBSUMsU0FBUyxHQUFHRixNQUFNLENBQUNHLFdBQVAsR0FBcUJDLCtEQUFyQzs7QUFFQSxRQUFJTixlQUFKLEVBQXFCO0FBQ25CLFVBQU1PLGtCQUFrQixHQUFHQyxJQUFJLENBQUNDLEdBQUwsQ0FBU1IsUUFBVCxFQUFtQkwsS0FBbkIsS0FBNkJDLE1BQU0sR0FBR0QsS0FBdEMsQ0FBM0I7O0FBRUEsVUFBSVcsa0JBQWtCLEdBQUdILFNBQXpCLEVBQW9DO0FBQ2xDSCxnQkFBUSxHQUFHRyxTQUFTLElBQUlQLE1BQU0sR0FBR0QsS0FBYixDQUFwQjtBQUNELE9BRkQsTUFFTztBQUNMUSxpQkFBUyxHQUFHRyxrQkFBWjtBQUNEO0FBQ0Y7O0FBRUQsV0FBTztBQUNMVixZQUFNLEVBQUVXLElBQUksQ0FBQ0UsS0FBTCxDQUFXRixJQUFJLENBQUNDLEdBQUwsQ0FBU0wsU0FBVCxFQUFvQlAsTUFBcEIsQ0FBWCxDQURIO0FBRUxELFdBQUssRUFBRVksSUFBSSxDQUFDRSxLQUFMLENBQVdGLElBQUksQ0FBQ0MsR0FBTCxDQUFTUixRQUFULEVBQW1CTCxLQUFuQixDQUFYO0FBRkYsS0FBUDtBQUlEOztBQUVELFNBQU87QUFBRUMsVUFBTSxFQUFOQSxNQUFGO0FBQVVELFNBQUssRUFBTEE7QUFBVixHQUFQO0FBQ0QsQ0E1Qk0sQyxDQThCUDs7QUFDTyxJQUFNZSxzQkFBc0IsR0FBRyxTQUF6QkEsc0JBQXlCLENBQ3BDQyxVQURvQyxFQUVwQ0MsU0FGb0MsRUFHcENDLFVBSG9DLEVBSTNCO0FBQUEsdUdBQzRCRixVQUQ1QjtBQUFBLE1BQ0dHLHFCQURIOztBQUVULE1BQU1DLGdCQUFnQixHQUFHRCxxQkFBcUIsQ0FBQ0UsSUFBdEIsQ0FBMkIsVUFBQ0MsT0FBRDtBQUFBLFdBQ2xETCxTQUFTLENBQUNJLElBQVYsQ0FBZSxVQUFDRSxPQUFEO0FBQUEsYUFBYUEsT0FBTyxDQUFDQyxFQUFSLEtBQWVGLE9BQWYsSUFBMEIsQ0FBQ0MsT0FBTyxDQUFDRSxTQUFoRDtBQUFBLEtBQWYsQ0FEa0Q7QUFBQSxHQUEzQixDQUF6QjtBQUlBLE1BQUlMLGdCQUFKLEVBQXNCRixVQUFVLENBQUNFLGdCQUFELENBQVY7QUFDdkIsQ0FYTSIsImZpbGUiOiIuL3V0aWxzL3dpbmRvd21hbmFnZXIudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdHlwZSB7IFByb2Nlc3NlcyB9IGZyb20gJ0AvdHlwZXMvdXRpbHMvcHJvY2Vzc21hbmFnZXInO1xuXG5pbXBvcnQgeyBUQVNLQkFSX0hFSUdIVCB9IGZyb20gJ0AvdXRpbHMvY29uc3RhbnRzJztcblxuZXhwb3J0IGNvbnN0IGdldE1heERpbWVuc2lvbnMgPSAoXG4gIHdpZHRoOiBudW1iZXIsXG4gIGhlaWdodDogbnVtYmVyLFxuICBkZWZhdWx0V2lkdGggPSAwLFxuICBkZWZhdWx0SGVpZ2h0ID0gMCxcbiAgbG9ja0FzcGVjdFJhdGlvID0gZmFsc2Vcbik6IHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXIgfSA9PiB7XG4gIGlmICh3aWR0aCA9PT0gZGVmYXVsdFdpZHRoICYmIGhlaWdodCA9PT0gZGVmYXVsdEhlaWdodCkge1xuICAgIGxldCBtYXhXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIGxldCBtYXhIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSBUQVNLQkFSX0hFSUdIVDtcblxuICAgIGlmIChsb2NrQXNwZWN0UmF0aW8pIHtcbiAgICAgIGNvbnN0IGFzcGVjdExvY2tlZEhlaWdodCA9IE1hdGgubWluKG1heFdpZHRoLCB3aWR0aCkgKiAoaGVpZ2h0IC8gd2lkdGgpO1xuXG4gICAgICBpZiAoYXNwZWN0TG9ja2VkSGVpZ2h0ID4gbWF4SGVpZ2h0KSB7XG4gICAgICAgIG1heFdpZHRoID0gbWF4SGVpZ2h0IC8gKGhlaWdodCAvIHdpZHRoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1heEhlaWdodCA9IGFzcGVjdExvY2tlZEhlaWdodDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgaGVpZ2h0OiBNYXRoLmZsb29yKE1hdGgubWluKG1heEhlaWdodCwgaGVpZ2h0KSksXG4gICAgICB3aWR0aDogTWF0aC5mbG9vcihNYXRoLm1pbihtYXhXaWR0aCwgd2lkdGgpKVxuICAgIH07XG4gIH1cblxuICByZXR1cm4geyBoZWlnaHQsIHdpZHRoIH07XG59O1xuXG4vLyBUT0RPOiBGaW5kIGEgd2F5IHRvIG5vdCBuZWVkIHByb2Nlc3NlcyBvciBzdGFja09yZGVyIChNYXliZSBpbmRleCBpbiB0aGUgRE9NPylcbmV4cG9ydCBjb25zdCBmb2N1c05leHRWaXNpYmxlV2luZG93ID0gKFxuICBzdGFja09yZGVyOiBzdHJpbmdbXSxcbiAgcHJvY2Vzc2VzOiBQcm9jZXNzZXMsXG4gIGZvcmVncm91bmQ6IChpZDogc3RyaW5nKSA9PiB2b2lkXG4pOiB2b2lkID0+IHtcbiAgY29uc3QgWywgLi4ucmVtYWluaW5nU3RhY2tFbnRyaWVzXSA9IHN0YWNrT3JkZXI7XG4gIGNvbnN0IHZpc2libGVQcm9jZXNzSWQgPSByZW1haW5pbmdTdGFja0VudHJpZXMuZmluZCgoc3RhY2tJZCkgPT5cbiAgICBwcm9jZXNzZXMuZmluZCgocHJvY2VzcykgPT4gcHJvY2Vzcy5pZCA9PT0gc3RhY2tJZCAmJiAhcHJvY2Vzcy5taW5pbWl6ZWQpXG4gICk7XG5cbiAgaWYgKHZpc2libGVQcm9jZXNzSWQpIGZvcmVncm91bmQodmlzaWJsZVByb2Nlc3NJZCk7XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/windowmanager.ts\n");

/***/ })

}]);