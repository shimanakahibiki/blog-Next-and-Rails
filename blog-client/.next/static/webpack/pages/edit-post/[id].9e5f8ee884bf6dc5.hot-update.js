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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   __N_SSP: function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst EditPost = (param)=>{\n    let { post } = param;\n    _s();\n    const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(post.title);\n    const [content, setContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(post.content);\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        // API\n        try {\n            await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].put(\"http://localhost:3001/api/v1/posts/\".concat(post.id), {\n                title: title,\n                content: content\n            });\n            router.push(\"/\");\n        } catch (error) {\n            alert(\"編集に失敗しました\");\n            console.error(error);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().title),\n                children: \"ブログの編集\"\n            }, void 0, false, {\n                fileName: \"/Users/shimanaka/dev/ruby/blog-RN/blog-client/src/pages/edit-post/[id].tsx\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().form),\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().label),\n                        children: \"title\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shimanaka/dev/ruby/blog-RN/blog-client/src/pages/edit-post/[id].tsx\",\n                        lineNumber: 52,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().input),\n                        onChange: (e)=>setTitle(e.target.value),\n                        value: title\n                    }, void 0, false, {\n                        fileName: \"/Users/shimanaka/dev/ruby/blog-RN/blog-client/src/pages/edit-post/[id].tsx\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().label),\n                        children: \"本文\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shimanaka/dev/ruby/blog-RN/blog-client/src/pages/edit-post/[id].tsx\",\n                        lineNumber: 61,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().textarea),\n                        onChange: (e)=>setTitle(e.target.value),\n                        value: content\n                    }, void 0, false, {\n                        fileName: \"/Users/shimanaka/dev/ruby/blog-RN/blog-client/src/pages/edit-post/[id].tsx\",\n                        lineNumber: 62,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().button),\n                        children: \"編集\"\n                    }, void 0, false, {\n                        fileName: \"/Users/shimanaka/dev/ruby/blog-RN/blog-client/src/pages/edit-post/[id].tsx\",\n                        lineNumber: 69,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/shimanaka/dev/ruby/blog-RN/blog-client/src/pages/edit-post/[id].tsx\",\n                lineNumber: 51,\n                columnNumber: 13\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/shimanaka/dev/ruby/blog-RN/blog-client/src/pages/edit-post/[id].tsx\",\n        lineNumber: 47,\n        columnNumber: 9\n    }, undefined);\n};\n_s(EditPost, \"alffocACvMnU/iKj3jCValQHawk=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = EditPost;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (EditPost);\nvar _c;\n$RefreshReg$(_c, \"EditPost\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvZWRpdC1wb3N0L1tpZF0udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUF5RDtBQUNQO0FBQ3hCO0FBQ2M7QUFxQnhDLE1BQU1JLFdBQVc7UUFBQyxFQUFDQyxJQUFJLEVBQVE7O0lBQzNCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHUCwrQ0FBUUEsQ0FBQ0ssS0FBS0MsS0FBSztJQUM3QyxNQUFNLENBQUNFLFNBQVNDLFdBQVcsR0FBR1QsK0NBQVFBLENBQUNLLEtBQUtHLE9BQU87SUFDbkQsTUFBTUUsU0FBU1Asc0RBQVNBO0lBRXhCLE1BQU1RLGVBQWUsT0FBT0M7UUFDeEJBLEVBQUVDLGNBQWM7UUFFcEIsTUFBTTtRQUNGLElBQUk7WUFDQSxNQUFNWCxpREFBUyxDQUFDLHNDQUE4QyxPQUFSRyxLQUFLVSxFQUFFLEdBQUk7Z0JBQzdEVCxPQUFPQTtnQkFDUEUsU0FBU0E7WUFDYjtZQUNBRSxPQUFPTSxJQUFJLENBQUM7UUFDaEIsRUFBRSxPQUFPQyxPQUFPO1lBQ1pDLE1BQU07WUFDTkMsUUFBUUYsS0FBSyxDQUFDQTtRQUNsQjtJQUNKO0lBRUEscUJBQ0ksOERBQUNHO1FBQUlDLFdBQVdwQiwwRUFBZ0I7OzBCQUM1Qiw4REFBQ3NCO2dCQUFHRixXQUFXcEIsc0VBQVk7MEJBQUU7Ozs7OzswQkFHN0IsOERBQUN1QjtnQkFBS0gsV0FBV3BCLHFFQUFXO2dCQUFFd0IsVUFBVWQ7O2tDQUNwQyw4REFBQ2U7d0JBQU1MLFdBQVdwQixzRUFBWTtrQ0FBRTs7Ozs7O2tDQUNoQyw4REFBQzBCO3dCQUNHQyxNQUFLO3dCQUNMUCxXQUFXcEIsc0VBQVk7d0JBQ3ZCNEIsVUFBVSxDQUFDakIsSUFDUEwsU0FBU0ssRUFBRWtCLE1BQU0sQ0FBQ0MsS0FBSzt3QkFFM0JBLE9BQU96Qjs7Ozs7O2tDQUVYLDhEQUFDb0I7d0JBQU1MLFdBQVdwQixzRUFBWTtrQ0FBRTs7Ozs7O2tDQUNoQyw4REFBQytCO3dCQUNHWCxXQUFXcEIseUVBQWU7d0JBQzFCNEIsVUFBVSxDQUFDakIsSUFDUEwsU0FBU0ssRUFBRWtCLE1BQU0sQ0FBQ0MsS0FBSzt3QkFFM0JBLE9BQU92Qjs7Ozs7O2tDQUVYLDhEQUFDeUI7d0JBQU9MLE1BQUs7d0JBQVNQLFdBQVdwQix1RUFBYTtrQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWhFO0dBaERNRzs7UUFHYUQsa0RBQVNBOzs7S0FIdEJDOztBQWtETiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvZWRpdC1wb3N0L1tpZF0udHN4Pzg0NGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRXZlbnQsIEZvcm1FdmVudCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IFBvc3QgZnJvbSBcIkAvdHlwZXNcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgICBwb3N0OiBQb3N0O1xufTtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0OiBhbnkpIHtcbiAgICBjb25zdCBpZCA9IGNvbnRleHQucGFyYW1zLmlkO1xuXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEvcG9zdHMvJHtpZH1gKTtcbiAgICBjb25zdCBwb3N0ID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICAgIHJldHVybntcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHBvc3QsXG4gICAgICAgIH0sXG4gICAgfTtcbn1cblxuXG5jb25zdCBFZGl0UG9zdCA9ICh7cG9zdH06IFByb3BzKSA9PiB7XG4gICAgY29uc3QgW3RpdGxlLCBzZXRUaXRsZV0gPSB1c2VTdGF0ZShwb3N0LnRpdGxlKTtcbiAgICBjb25zdCBbY29udGVudCwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZShwb3N0LmNvbnRlbnQpO1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGU6IEZvcm1FdmVudCkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgXG4gICAgLy8gQVBJXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBhd2FpdCBheGlvcy5wdXQoYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvdjEvcG9zdHMvJHtwb3N0LmlkfWAsIHtcbiAgICAgICAgICAgICAgICB0aXRsZTogdGl0bGUsXG4gICAgICAgICAgICAgICAgY29udGVudDogY29udGVudCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgYWxlcnQoXCLnt6jpm4bjgavlpLHmlZfjgZfjgb7jgZfjgZ9cIik7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAgICAgICAgICAgIOODluODreOCsOOBrue3qOmbhlxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17c3R5bGVzLmZvcm19IG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5sYWJlbH0+dGl0bGU8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbnB1dH0gXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZTogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RpdGxlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT17c3R5bGVzLmxhYmVsfT7mnKzmloc8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMudGV4dGFyZWF9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZTogQ2hhbmdlRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD4pID0+IFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGl0bGUoZS50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvbnRlbnR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259Pue3qOmbhjwvYnV0dG9uPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEVkaXRQb3N0OyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInN0eWxlcyIsImF4aW9zIiwidXNlUm91dGVyIiwiRWRpdFBvc3QiLCJwb3N0IiwidGl0bGUiLCJzZXRUaXRsZSIsImNvbnRlbnQiLCJzZXRDb250ZW50Iiwicm91dGVyIiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicHV0IiwiaWQiLCJwdXNoIiwiZXJyb3IiLCJhbGVydCIsImNvbnNvbGUiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJoMSIsImZvcm0iLCJvblN1Ym1pdCIsImxhYmVsIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRleHRhcmVhIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/edit-post/[id].tsx\n"));

/***/ })

});