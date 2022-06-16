"use strict";
(self["webpackChunkodin_todo"] = self["webpackChunkodin_todo"] || []).push([["index"],{

/***/ "./src/domElements.js":
/*!****************************!*\
  !*** ./src/domElements.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "footer": () => (/* binding */ footer),
/* harmony export */   "header": () => (/* binding */ header),
/* harmony export */   "main": () => (/* binding */ main)
/* harmony export */ });
const header = (() => {
    const header = document.createElement('header');
    const logoLink = document.createElement('a');
    logoLink.href = '#';
    const h1 = document.createElement('h1');
    h1.textContent = 'my todo\'s';

    logoLink.append(h1);

    header.append(logoLink);
    return header;
})();

const main = (() => {
    const main = document.createElement('main');

    return main;
})();

const footer = (() => {
    const footer = document.createElement('footer');

    const gitHubLink = document.createElement('a');
    gitHubLink.href = 'https://github.com/RobbeVanslambrouck';
    gitHubLink.target = '_blank';
    gitHubLink.textContent = ' robbe vanslambrouck';
    
    const githubLogo = document.createElement('i');
    gitHubLink.className = 'fa-brands fa-github';
    gitHubLink.prepend(githubLogo);

    footer.append(gitHubLink);
    return footer;
})();

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ "./src/todo.js");
/* harmony import */ var _domElements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domElements */ "./src/domElements.js");




document.body.append(_domElements__WEBPACK_IMPORTED_MODULE_1__.header, _domElements__WEBPACK_IMPORTED_MODULE_1__.main, _domElements__WEBPACK_IMPORTED_MODULE_1__.footer);


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFTTtBQUNQOztBQUVBO0FBQ0EsQ0FBQzs7QUFFTTtBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNqQ2lDO0FBQ0o7QUFDdUI7O0FBRXJELHFCQUFxQixnREFBTSxFQUFFLDhDQUFJLEVBQUUsZ0RBQU07Ozs7Ozs7Ozs7Ozs7OztBQ0psQztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby8uL3NyYy9kb21FbGVtZW50cy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLy4vc3JjL3RvZG8uanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IGhlYWRlciA9ICgoKSA9PiB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgY29uc3QgbG9nb0xpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgbG9nb0xpbmsuaHJlZiA9ICcjJztcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaDEudGV4dENvbnRlbnQgPSAnbXkgdG9kb1xcJ3MnO1xuXG4gICAgbG9nb0xpbmsuYXBwZW5kKGgxKTtcblxuICAgIGhlYWRlci5hcHBlbmQobG9nb0xpbmspO1xuICAgIHJldHVybiBoZWFkZXI7XG59KSgpO1xuXG5leHBvcnQgY29uc3QgbWFpbiA9ICgoKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ21haW4nKTtcblxuICAgIHJldHVybiBtYWluO1xufSkoKTtcblxuZXhwb3J0IGNvbnN0IGZvb3RlciA9ICgoKSA9PiB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG5cbiAgICBjb25zdCBnaXRIdWJMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGdpdEh1YkxpbmsuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vUm9iYmVWYW5zbGFtYnJvdWNrJztcbiAgICBnaXRIdWJMaW5rLnRhcmdldCA9ICdfYmxhbmsnO1xuICAgIGdpdEh1YkxpbmsudGV4dENvbnRlbnQgPSAnIHJvYmJlIHZhbnNsYW1icm91Y2snO1xuICAgIFxuICAgIGNvbnN0IGdpdGh1YkxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgZ2l0SHViTGluay5jbGFzc05hbWUgPSAnZmEtYnJhbmRzIGZhLWdpdGh1Yic7XG4gICAgZ2l0SHViTGluay5wcmVwZW5kKGdpdGh1YkxvZ28pO1xuXG4gICAgZm9vdGVyLmFwcGVuZChnaXRIdWJMaW5rKTtcbiAgICByZXR1cm4gZm9vdGVyO1xufSkoKTsiLCJpbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgeyBUb2RvIH0gZnJvbSAnLi90b2RvJztcbmltcG9ydCB7IGhlYWRlciwgbWFpbiwgZm9vdGVyIH0gZnJvbSAnLi9kb21FbGVtZW50cyc7XG5cbmRvY3VtZW50LmJvZHkuYXBwZW5kKGhlYWRlciwgbWFpbiwgZm9vdGVyKTtcbiIsImV4cG9ydCBjb25zdCBUb2RvID0gKHRpdGxlID0gJycpID0+IHtcbiAgICBsZXQgZGVzY3JpcHRpb24gPSAnJztcbiAgICBsZXQgZHVlRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IHN1YlRvZG9zID0gW107XG5cbiAgICBjb25zdCBhZGRTdWJUb2RvID0gKHN1YlRvZG8pID0+IHtcbiAgICAgICAgc3ViVG9kb3MucHVzaChzdWJUb2RvKTtcbiAgICB9XG5cbiAgICBjb25zdCBkZWxldGVTdWJUb2RvID0gKGluZGV4KSA9PiB7XG4gICAgICAgIHJldHVybiBzdWJUb2Rvcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cblxuICAgIGNvbnN0IGZpbmRTdWJUb2RvID0gKHN1YlRvZG8pID0+IHtcbiAgICAgICAgcmV0dXJuIHN1YlRvZG9zLmZpbmQoKGN1cnJUb2RvKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gY3VyclRvZG8gPT09IHN1YlRvZG87XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHRpdGxlLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgZHVlRGF0ZSxcbiAgICAgICAgc3ViVG9kb3MsXG4gICAgICAgIGFkZFN1YlRvZG8sXG4gICAgICAgIGRlbGV0ZVN1YlRvZG8sXG4gICAgICAgIGZpbmRTdWJUb2RvLFxuICAgIH1cbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9