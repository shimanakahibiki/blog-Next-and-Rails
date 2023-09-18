"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/edit-post/[id]",{

/***/ "./src/pages/edit-post/[id].tsx":
/*!**************************************!*\
  !*** ./src/pages/edit-post/[id].tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst EditPost = (param)=>{\n    let { post } = param;\n    _s();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(post.title);\n    const [content, setContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(post.content);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        // API\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].put(\"http://localhost:3001/api/v1/posts/\".concat(post.id), {\n                title: title,\n                content: content\n            });\n            router.push(\"/\");\n        } catch (error) {\n            alert(\"編集に失敗しました\");\n            console.error(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),\n                children: \"ブログの編集\"\n            }, void 0, false, {\n                fileName: \"/Users/shimanaka/dev/ruby/blog-RN/blog-client/src/pages/edit-post/[id].tsx\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().form),\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().label),\n                        children: \"title\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shimanaka/dev/ruby/blog-RN/blog-client/src/pages/edit-post/[id].tsx\",\n                        lineNumber: 52,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().input),\n                        onChange: (e)=>setTitle(e.target.value),\n                        value: title\n                    }, void 0, false, {\n                        fileName: \"/Users/shimanaka/dev/ruby/blog-RN/blog-client/src/pages/edit-post/[id].tsx\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().label),\n                        children: \"本文\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shimanaka/dev/ruby/blog-RN/blog-client/src/pages/edit-post/[id].tsx\",\n                        lineNumber: 61,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().textarea),\n                        onChange: (e)=>setContent(e.target.value),\n                        value: content\n                    }, void 0, false, {\n                        fileName: \"/Users/shimanaka/dev/ruby/blog-RN/blog-client/src/pages/edit-post/[id].tsx\",\n                        lineNumber: 62,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().button),\n                        children: \"編集\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shimanaka/dev/ruby/blog-RN/blog-client/src/pages/edit-post/[id].tsx\",\n                        lineNumber: 69,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shimanaka/dev/ruby/blog-RN/blog-client/src/pages/edit-post/[id].tsx\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shimanaka/dev/ruby/blog-RN/blog-client/src/pages/edit-post/[id].tsx\",\n        lineNumber: 47,\n        columnNumber: 9\n    }, undefined);\n};\n_s(EditPost, \"alffocACvMnU/iKj3jCValQHawk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = EditPost;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditPost);\nvar _c;\n$RefreshReg$(_c, \"EditPost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZWRpdC1wb3N0L1tpZF0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF5RDtBQUNQO0FBQ3hCO0FBQ2M7QUFxQnhDLE1BQU1JLFdBQVc7UUFBQyxFQUFDQyxJQUFJLEVBQVE7O0lBQzNCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHUCwrQ0FBUUEsQ0FBQ0ssS0FBS0MsS0FBSztJQUM3QyxNQUFNLENBQUNFLFNBQVNDLFdBQVcsR0FBR1QsK0NBQVFBLENBQUNLLEtBQUtHLE9BQU87SUFDbkQsTUFBTUUsU0FBU1Asc0RBQVNBO0lBRXhCLE1BQU1RLGVBQWUsT0FBT0M7UUFDeEJBLEVBQUVDLGNBQWM7UUFFcEIsTUFBTTtRQUNGLElBQUk7WUFDQSxNQUFNWCxpREFBUyxDQUFDLHNDQUE4QyxPQUFSRyxLQUFLVSxFQUFFLEdBQUk7Z0JBQzdEVCxPQUFPQTtnQkFDUEUsU0FBU0E7WUFDYjtZQUNBRSxPQUFPTSxJQUFJLENBQUM7UUFDaEIsRUFBRSxPQUFPQyxPQUFPO1lBQ1pDLE1BQU07WUFDTkMsUUFBUUYsS0FBSyxDQUFDQTtRQUNsQjtJQUNKO0lBRUEscUJBQ0ksOERBQUNHO1FBQUlDLFdBQVdwQiwwRUFBZ0I7OzBCQUM1Qiw4REFBQ3NCO2dCQUFHRixXQUFXcEIsc0VBQVk7MEJBQUU7Ozs7OzswQkFHN0IsOERBQUN1QjtnQkFBS0gsV0FBV3BCLHFFQUFXO2dCQUFFd0IsVUFBVWQ7O2tDQUNwQyw4REFBQ2U7d0JBQU1MLFdBQVdwQixzRUFBWTtrQ0FBRTs7Ozs7O2tDQUNoQyw4REFBQzBCO3dCQUNHQyxNQUFLO3dCQUNMUCxXQUFXcEIsc0VBQVk7d0JBQ3ZCNEIsVUFBVSxDQUFDakIsSUFDUEwsU0FBU0ssRUFBRWtCLE1BQU0sQ0FBQ0MsS0FBSzt3QkFFM0JBLE9BQU96Qjs7Ozs7O2tDQUVYLDhEQUFDb0I7d0JBQU1MLFdBQVdwQixzRUFBWTtrQ0FBRTs7Ozs7O2tDQUNoQyw4REFBQytCO3dCQUNHWCxXQUFXcEIseUVBQWU7d0JBQzFCNEIsVUFBVSxDQUFDakIsSUFDUEgsV0FBV0csRUFBRWtCLE1BQU0sQ0FBQ0MsS0FBSzt3QkFFN0JBLE9BQU92Qjs7Ozs7O2tDQUVYLDhEQUFDeUI7d0JBQU9MLE1BQUs7d0JBQVNQLFdBQVdwQix1RUFBYTtrQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWhFO0dBaERNRzs7UUFHYUQsa0RBQVNBOzs7S0FIdEJDOztBQWtETiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvZWRpdC1wb3N0L1tpZF0udHN4Pzg0NGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRXZlbnQsIEZvcm1FdmVudCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IHsgUG9zdCB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuXG50eXBlIFByb3BzID0ge1xuICAgIHBvc3Q6IFBvc3Q7XG59O1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQ6IGFueSkge1xuICAgIGNvbnN0IGlkID0gY29udGV4dC5wYXJhbXMuaWQ7XG5cbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS9wb3N0cy8ke2lkfWApO1xuICAgIGNvbnN0IHBvc3QgPSBhd2FpdCByZXMuanNvbigpO1xuXG4gICAgcmV0dXJue1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgcG9zdCxcbiAgICAgICAgfSxcbiAgICB9O1xufVxuXG5cbmNvbnN0IEVkaXRQb3N0ID0gKHtwb3N0fTogUHJvcHMpID0+IHtcbiAgICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKHBvc3QudGl0bGUpO1xuICAgIGNvbnN0IFtjb250ZW50LCBzZXRDb250ZW50XSA9IHVzZVN0YXRlKHBvc3QuY29udGVudCk7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZTogRm9ybUV2ZW50KSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBcbiAgICAvLyBBUElcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGF3YWl0IGF4aW9zLnB1dChgaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS92MS9wb3N0cy8ke3Bvc3QuaWR9YCwge1xuICAgICAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBjb250ZW50LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByb3V0ZXIucHVzaChcIi9cIik7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBhbGVydChcIue3qOmbhuOBq+WkseaVl+OBl+OBvuOBl+OBn1wiKTtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy50aXRsZX0+XG4gICAgICAgICAgICAgICAg44OW44Ot44Kw44Gu57eo6ZuGXG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtzdHlsZXMuZm9ybX0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLmxhYmVsfT50aXRsZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmlucHV0fSBcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlOiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4gXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaXRsZShlLnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGl0bGV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPXtzdHlsZXMubGFiZWx9PuacrOaWhzwvbGFiZWw+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy50ZXh0YXJlYX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlOiBDaGFuZ2VFdmVudDxIVE1MVGV4dEFyZWFFbGVtZW50PikgPT4gXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRDb250ZW50KGUudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb250ZW50fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT7nt6jpm4Y8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBFZGl0UG9zdDsiXSwibmFtZXMiOlsidXNlU3RhdGUiLCJzdHlsZXMiLCJheGlvcyIsInVzZVJvdXRlciIsIkVkaXRQb3N0IiwicG9zdCIsInRpdGxlIiwic2V0VGl0bGUiLCJjb250ZW50Iiwic2V0Q29udGVudCIsInJvdXRlciIsImhhbmRsZVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInB1dCIsImlkIiwicHVzaCIsImVycm9yIiwiYWxlcnQiLCJjb25zb2xlIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiaDEiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImlucHV0IiwidHlwZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwidmFsdWUiLCJ0ZXh0YXJlYSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/edit-post/[id].tsx\n"));

/***/ })

});