/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Dashboard */ "./src/components/Dashboard.js");
/* harmony import */ var _components_Createtask__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Createtask */ "./src/components/Createtask.js");




const App = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h2", {
    className: "app-title"
  }, "Task To Do App"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("hr", null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Dashboard__WEBPACK_IMPORTED_MODULE_1__["default"], null), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Createtask__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/components/Createtask.js":
/*!**************************************!*\
  !*** ./src/components/Createtask.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_Createtas_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style/Createtas.scss */ "./src/style/Createtas.scss");



const Createtask = () => {
  // State variables to hold form data
  const [title, setTitle] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [description, setDescription] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [duration, setDuration] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [status, setStatus] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('pending');

  // Function to handle form submission
  const handleSubmit = e => {
    e.preventDefault();
    // Log form data to console
    console.log('Form Data:', {
      title,
      description,
      duration,
      status
    });
  };
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "form-container"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
    onSubmit: handleSubmit
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Title:"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "text",
    value: title,
    onChange: e => setTitle(e.target.value),
    required: true
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Description:"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("textarea", {
    value: description,
    onChange: e => setDescription(e.target.value),
    required: true
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Duration:"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "datetime-local",
    value: duration,
    onChange: e => setDuration(e.target.value),
    required: true
  }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", null, "Status:"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("select", {
    value: status,
    onChange: e => setStatus(e.target.value)
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "pending"
  }, "Pending"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "in-progress"
  }, "In Progress"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("option", {
    value: "completed"
  }, "Completed")), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("button", {
    type: "submit"
  }, "Submit")));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Createtask);

/***/ }),

/***/ "./src/components/Dashboard.js":
/*!*************************************!*\
  !*** ./src/components/Dashboard.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


const Dashboard = () => {
  return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "dashboard"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "card"
  }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("h3", null, "Dashboard"), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Edit Dashboard component at ", (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("code", null, "src/components/Dashboard.jsx"))));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dashboard);

/***/ }),

/***/ "./src/style/Createtas.scss":
/*!**********************************!*\
  !*** ./src/style/Createtas.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/style/main.scss":
/*!*****************************!*\
  !*** ./src/style/main.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style/main.scss */ "./src/style/main.scss");




/**
 * Import the stylesheet for the plugin.
 */


// Render the App component into the DOM
(0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.render)((0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_App__WEBPACK_IMPORTED_MODULE_1__["default"], null), document.getElementById('App'));
})();

/******/ })()
;
//# sourceMappingURL=index.js.map