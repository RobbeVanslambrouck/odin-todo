"use strict";
(self["webpackChunkodin_todo"] = self["webpackChunkodin_todo"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");



/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Todo": () => (/* binding */ Todo)
/* harmony export */ });
const Todo = (title = '') => {
    let description = '';
    let dueDate = new Date();
    let subTodos = [];

    const addSubTodo = (subTodo) => {
        subTodos.push(subTodo);
    }

    const deleteSubTodo = (index) => {
        return subTodos.splice(index, 1);
    }

    const findSubTodo = (subTodo) => {
        return subTodos.find((currTodo) => {
            return currTodo === subTodo;
        });
    }

    return {
        title,
        description,
        dueDate,
        subTodos,
        addSubTodo,
        deleteSubTodo,
        findSubTodo,
    }
};

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWtDOzs7Ozs7Ozs7Ozs7Ozs7QUNBM0I7QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3RvZG8uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IHsgVG9kbyB9IGZyb20gJy4vdG9kbyc7IiwiZXhwb3J0IGNvbnN0IFRvZG8gPSAodGl0bGUgPSAnJykgPT4ge1xuICAgIGxldCBkZXNjcmlwdGlvbiA9ICcnO1xuICAgIGxldCBkdWVEYXRlID0gbmV3IERhdGUoKTtcbiAgICBsZXQgc3ViVG9kb3MgPSBbXTtcblxuICAgIGNvbnN0IGFkZFN1YlRvZG8gPSAoc3ViVG9kbykgPT4ge1xuICAgICAgICBzdWJUb2Rvcy5wdXNoKHN1YlRvZG8pO1xuICAgIH1cblxuICAgIGNvbnN0IGRlbGV0ZVN1YlRvZG8gPSAoaW5kZXgpID0+IHtcbiAgICAgICAgcmV0dXJuIHN1YlRvZG9zLnNwbGljZShpbmRleCwgMSk7XG4gICAgfVxuXG4gICAgY29uc3QgZmluZFN1YlRvZG8gPSAoc3ViVG9kbykgPT4ge1xuICAgICAgICByZXR1cm4gc3ViVG9kb3MuZmluZCgoY3VyclRvZG8pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBjdXJyVG9kbyA9PT0gc3ViVG9kbztcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBkdWVEYXRlLFxuICAgICAgICBzdWJUb2RvcyxcbiAgICAgICAgYWRkU3ViVG9kbyxcbiAgICAgICAgZGVsZXRlU3ViVG9kbyxcbiAgICAgICAgZmluZFN1YlRvZG8sXG4gICAgfVxufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=