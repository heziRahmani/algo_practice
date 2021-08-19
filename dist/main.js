/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _strings_ValidParentheses__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./strings/ValidParentheses */ \"./src/strings/ValidParentheses.js\");\n/*כללי והתקנות\r\nnpm install webpack webpack-cli --save-dev\r\nnpm i --save-dev html-loader\r\nnpm i --save-dev html-webpack-plugin html-loader\r\nnpm i @babel/preset-env @babel/preset-react @babel/core babel-loader\r\n\r\nכדי לעבוד עם ראקט צריך להתקין\r\nnpm i --save  react react-dom @babel/preset-react\r\n\r\n\r\n*/\r\n// import {} from \"./strings/anegram\";\r\n// import {isPalidrom} from \"./strings/Palindrome\";\r\n// import {} from \"./strings/letter-count\";\r\n\r\n// import {stringReversal} from \"./strings/stringReversal\";\r\n// import { isJustify } from \"./strings//textJustification\"\r\n// import {isOneEdit} from \"./strings/oneEditDistance\"\r\n// isOneEdit(\"sentence twe\",\"sentence two\")\r\n// console.log(isOneEdit(\"sentence twe\",\"sentence two\"));\r\n(0,_strings_ValidParentheses__WEBPACK_IMPORTED_MODULE_0__.isValidString)(\"{b(}la bla[bla bla bla])}\")\n\n//# sourceURL=webpack://tdd_lerninng/./src/index.js?");

/***/ }),

/***/ "./src/strings/ValidParentheses.js":
/*!*****************************************!*\
  !*** ./src/strings/ValidParentheses.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isValidString\": () => (/* binding */ isValidString)\n/* harmony export */ });\n/*\r\ngiving a string check if its valid.\r\nvalid if:\r\n*open brackets must be closed by the same type of bracket.\r\n*open brackets must be closed in the correct order\r\n*/\r\n\r\nconst isValidString = (_string) => {\r\n    let bracketArrey = [\"(\", \")\", \"[\", \"]\", \"{\", \"}\"];\r\n    let index;\r\n    // console.log(typeof( _string));\r\n    let stack = [];\r\n    let closingBrackets = 0;\r\n\r\n    //checks if the varuble is a string\r\n    if (typeof( _string) === 'string') \r\n    {\r\n        //loops tru the string\r\n        for (let i = 0; i < _string.length; i++) \r\n        {\r\n            \r\n            //second loop j\r\n            for (let j = 0; j < _string.length; j++) \r\n            {\r\n                \r\n                //checkes for brackets\r\n\r\n                if (_string.charAt(j) === bracketArrey[i]) \r\n                {\r\n                   \r\n                    //checkes if its open or closed brackets\r\n                    if (i%2==0) \r\n                    {\r\n                   \r\n                        //pusing the open brackets to the stack arrey\r\n                        stack.push(bracketArrey[i]);\r\n                       closingBrackets++\r\n                       console.log(closingBrackets);\r\n                        index = i;\r\n                      \r\n                    }\r\n\r\n                    //closing brackets\r\n                    //checkes that its not the first brackets\r\n                    else if (i%2  > 0) \r\n                    {\r\n                        //   // checkes if the closing brackets mach the last open\r\n                       \r\n                        if (index + 1 == i) {\r\n                            stack.pop();\r\n                            closingBrackets--\r\n                       console.log(closingBrackets);\r\n\r\n                        } else {\r\n                            console.log(false);\r\n                            return false;\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n        }\r\n        \r\n        console.log(stack.length == 0 );\r\n\r\n        if (closingBrackets!==0 ) \r\n        {\r\n            if (stack.length !== 0) {\r\n                console.log(\"stack length false\"+stack.length);\r\n                return false;\r\n            }\r\n           \r\n        }else{\r\n            console.log(\"stack length true\"+stack.length);\r\n            return true;\r\n        }\r\n        \r\n    }else{return false}\r\n};\r\n\n\n//# sourceURL=webpack://tdd_lerninng/./src/strings/ValidParentheses.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;