"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/queue-microtask@1.2.3";
exports.ids = ["vendor-chunks/queue-microtask@1.2.3"];
exports.modules = {

/***/ "(rsc)/./node_modules/.pnpm/queue-microtask@1.2.3/node_modules/queue-microtask/index.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/.pnpm/queue-microtask@1.2.3/node_modules/queue-microtask/index.js ***!
  \****************************************************************************************/
/***/ ((module) => {

eval("/*! queue-microtask. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */ \nlet promise;\nmodule.exports = typeof queueMicrotask === \"function\" ? queueMicrotask.bind( false ? 0 : global) : (cb)=>(promise || (promise = Promise.resolve())).then(cb).catch((err)=>setTimeout(()=>{\n            throw err;\n        }, 0));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvLnBucG0vcXVldWUtbWljcm90YXNrQDEuMi4zL25vZGVfbW9kdWxlcy9xdWV1ZS1taWNyb3Rhc2svaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUEsc0ZBQXNGO0FBQ3RGLElBQUlBO0FBRUpDLE9BQU9DLE9BQU8sR0FBRyxPQUFPQyxtQkFBbUIsYUFDdkNBLGVBQWVDLElBQUksQ0FBQyxNQUFrQixHQUFjQyxDQUFNQSxHQUFHQyxVQUU3REMsQ0FBQUEsS0FBTSxDQUFDUCxXQUFZQSxDQUFBQSxVQUFVUSxRQUFRQyxPQUFPLEVBQUMsQ0FBQyxFQUM3Q0MsSUFBSSxDQUFDSCxJQUNMSSxLQUFLLENBQUNDLENBQUFBLE1BQU9DLFdBQVc7WUFBUSxNQUFNRDtRQUFJLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YWlsd2luZHVpLXN0dWRpby8uL25vZGVfbW9kdWxlcy8ucG5wbS9xdWV1ZS1taWNyb3Rhc2tAMS4yLjMvbm9kZV9tb2R1bGVzL3F1ZXVlLW1pY3JvdGFzay9pbmRleC5qcz9lMDUyIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISBxdWV1ZS1taWNyb3Rhc2suIE1JVCBMaWNlbnNlLiBGZXJvc3MgQWJvdWtoYWRpamVoIDxodHRwczovL2Zlcm9zcy5vcmcvb3BlbnNvdXJjZT4gKi9cbmxldCBwcm9taXNlXG5cbm1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHF1ZXVlTWljcm90YXNrID09PSAnZnVuY3Rpb24nXG4gID8gcXVldWVNaWNyb3Rhc2suYmluZCh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IGdsb2JhbClcbiAgLy8gcmV1c2UgcmVzb2x2ZWQgcHJvbWlzZSwgYW5kIGFsbG9jYXRlIGl0IGxhemlseVxuICA6IGNiID0+IChwcm9taXNlIHx8IChwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCkpKVxuICAgIC50aGVuKGNiKVxuICAgIC5jYXRjaChlcnIgPT4gc2V0VGltZW91dCgoKSA9PiB7IHRocm93IGVyciB9LCAwKSlcbiJdLCJuYW1lcyI6WyJwcm9taXNlIiwibW9kdWxlIiwiZXhwb3J0cyIsInF1ZXVlTWljcm90YXNrIiwiYmluZCIsIndpbmRvdyIsImdsb2JhbCIsImNiIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0aGVuIiwiY2F0Y2giLCJlcnIiLCJzZXRUaW1lb3V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/.pnpm/queue-microtask@1.2.3/node_modules/queue-microtask/index.js\n");

/***/ })

};
;