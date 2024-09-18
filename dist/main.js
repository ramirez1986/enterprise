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

/***/ "./components/modals/modals.js":
/*!*************************************!*\
  !*** ./components/modals/modals.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Modal: () => (/* binding */ Modal),\n/* harmony export */   Select: () => (/* binding */ Select)\n/* harmony export */ });\nclass Modal {\r\n  active = false;\r\n  visible = false;\r\n  onopen = null;\r\n  onclose = null;\r\n  relatedEmList = [];\r\n\r\n  constructor(structure, options) {\r\n    if (structure.nodeType) {\r\n      this.content = structure;\r\n\r\n    } else {\r\n      this.content = structure.content;\r\n    }\r\n    \r\n    this.modal = this.content.closest('.js-modal');\r\n    this.modal.inert = true;\r\n    this.container = this.modal.closest('.js-modal-container');\r\n    this.toggleButton = this.container?.querySelector('.js-modal-toggle-button') || structure.toggleButton;\r\n    this.closeButton = this.modal.querySelector('.js-modal-close-button');\r\n\r\n    if (this.toggleButton) {\r\n      this.modal.toggleButton = this.toggleButton;\r\n      this.modal.toggleButton.modal = this.modal;\r\n\r\n      this.toggleButton.addEventListener('click', (e) => {\r\n        if (!(this instanceof Select) || e.detail === 0) {\r\n          this.toggle();\r\n        }\r\n      });\r\n    }\r\n\r\n    if (this.closeButton) {\r\n      this.closeButton.addEventListener('click', (e) => {\r\n        this.close();\r\n      });\r\n    }\r\n\r\n    if (options) {\r\n      this.options = options;\r\n      this.options.detached && this.modal.remove();\r\n    }\r\n\r\n    document.addEventListener('mousedown', (e) => {\r\n      if (\r\n        this.modal.classList.contains('is-visible') &&\r\n        !this.toggleButton?.contains(e.target) &&\r\n        !this.modal.contains(e.target) &&\r\n        !this.modal.contains(e.target.closest('.js-modal')?.toggleButton) &&\r\n        !this.relatedEmList.find(em => em.contains(e.target)) &&\r\n        !e.target.closest('.js-toast')\r\n      ) {\r\n        this.close();\r\n      };\r\n    });\r\n    \r\n    const focusTriggers = [this.modal];\r\n    if (this.container?.contains(this.modal)) focusTriggers.push(this.toggleButton);\r\n    \r\n    for (const em of focusTriggers) {\r\n      em.addEventListener('focusout', (e) => {\r\n        if (\r\n          this.modal.classList.contains('is-visible') &&\r\n          document.body.contains(e.relatedTarget) &&\r\n          !this.toggleButton?.contains(e.relatedTarget) &&\r\n          !this.modal.contains(e.relatedTarget) &&\r\n          !this.modal.contains(e.relatedTarget.closest('.js-modal')?.toggleButton) &&\r\n          !this.relatedEmList.find(em => em.contains(e.relatedTarget)) &&\r\n          !e.relatedTarget.closest('.js-toast')\r\n        ) {\r\n          this.close();\r\n        }\r\n      });\r\n    }\r\n\r\n    document.addEventListener('keydown', (e) => {\r\n      if (this.modal.classList.contains('is-hidden')) return;\r\n      \r\n      if (e.code === 'Escape') {\r\n        for (const toggleButton of this.modal.querySelectorAll('.js-modal-toggle-button')) {\r\n          if (!toggleButton.modal.inert) {\r\n            return;\r\n          }\r\n        }\r\n\r\n        for (const em of this.relatedEmList) {\r\n          if (!em.closest('.js-modal').inert) {\r\n            return;\r\n          }\r\n        }\r\n        \r\n        this.close();\r\n      }\r\n    });\r\n  }\r\n\r\n  open() {\r\n    if (this.options?.detached) {\r\n      if ([...document.body.children].includes(this.modal)) {\r\n        return void this.modal.remove();\r\n      }\r\n  \r\n      this.moveToBody();\r\n  \r\n      this.modal.style.transitionDuration = '';\r\n    }\r\n\r\n    this.modal.classList.replace('is-hidden', 'is-visible');\r\n    this.toggleButton?.classList.replace('is-inactive', 'is-active');\r\n\r\n    this.modal.getAnimations().find(t => t.transitionProperty === 'opacity')?.finished.then(() => {\r\n      this.modal.inert = false;\r\n      this.closeButton?.focus();\r\n      this.onopen?.call();\r\n    }).catch(() => {});\r\n      \r\n    this.active = true;\r\n    document.body.style.overflow = 'hidden';\r\n  }\r\n  \r\n  close() {\r\n    this.modal.classList.replace('is-visible', 'is-hidden');\r\n    this.toggleButton?.classList.replace('is-active', 'is-inactive');\r\n    this.toggleButton?.focus();\r\n    this.active = false;\r\n    document.body.style.overflow = '';\r\n\r\n    this.modal.getAnimations().find(t => t.transitionProperty === 'opacity')?.finished.then(() => {\r\n      if (this.options?.detached) {\r\n        this.removeFromBody();\r\n      }\r\n      this.modal.inert = true;\r\n    }).catch(() => {});\r\n\r\n    this.onclose?.call();\r\n  }\r\n\r\n  toggle() {\r\n    !this.active ? this.open() : this.close();\r\n  };\r\n  \r\n  moveToBody() {\r\n    document.body.append(this.modal);\r\n\r\n    this.buttonRect = this.toggleButton?.getBoundingClientRect();\r\n\r\n    this.top = this.options?.top >= 0 ? this.options?.top : (this.buttonRect?.bottom || document.body.clientHeight / 2 - this.modal.clientHeight / 2);\r\n    this.left = this.options?.left >= 0 ? this.options?.left : (this.buttonRect?.x || document.body.clientWidth / 2 - this.modal.clientWidth / 2);\r\n\r\n    this.modal.style.transitionDuration = '0ms';\r\n    this.modal.style.top = `${this.top - 0}px`;\r\n    this.modal.style.left = `${this.left - 0}px`;\r\n    this.modal.zIndex = document.body.querySelectorAll('& > .modal').length + 100;\r\n    this.modal.style.zIndex = this.modal.zIndex;\r\n\r\n    if (this instanceof Select) {\r\n      this.modal.style.minWidth = `${this.toggleButton.clientWidth}px`;\r\n      \r\n      const modalRect = this.modal.getBoundingClientRect();\r\n      const buttonRect = this.toggleButton.getBoundingClientRect();\r\n\r\n      const distanceTop = buttonRect.y;\r\n      const distanceBottom = document.documentElement.clientHeight - buttonRect.bottom;\r\n\r\n      this.modal.style.maxHeight = `${Math.max(distanceTop, distanceBottom)}px`;\r\n\r\n      if (modalRect.bottom + 10 > document.documentElement.clientHeight && distanceTop > distanceBottom) {\r\n        this.modal.style.top = `${buttonRect.y - this.modal.clientHeight}px`;\r\n        this.modal.classList.add('modal--offset-top');\r\n\r\n      } else {\r\n        this.modal.classList.remove('modal--offset-top');\r\n      }\r\n      \r\n      if (modalRect.right > document.documentElement.clientWidth) {\r\n        this.modal.style.left = `${this.left - this.modal.clientWidth}px`;\r\n      }\r\n    }\r\n  }\r\n\r\n  removeFromBody() {\r\n    this.modal.style.top = '';\r\n    this.modal.style.left = '';\r\n    this.modal.style.zIndex = '';\r\n\r\n    this.modal.remove();\r\n  }\r\n}\r\n\r\nclass Select extends Modal {\r\n  constructor(element, itemFunctions, options) {\r\n    super(element, {detached: true});\r\n\r\n    this.type = options?.type;\r\n\r\n    this.toggleButton.addEventListener('mousedown', (e) => {\r\n      if (!this.active) {\r\n        this.open();\r\n\r\n      } else {\r\n        this.toggleButton.addEventListener('mouseup', (e) => {\r\n          this.close();\r\n        }, {once: true});\r\n      }\r\n    });\r\n\r\n    this.toggleButton.addEventListener('keydown', (e) => {\r\n      if (['ArrowDown', 'ArrowUp'].includes(e.code) && !this.active) {\r\n        this.open();\r\n      }\r\n    });\r\n\r\n    document.body.addEventListener('scroll', (e) => {\r\n      if (\r\n        this.modal.inert ||\r\n        this.modal.classList.contains('is-hidden') ||\r\n        this.modal.contains(e.target)\r\n      ) {\r\n        return;\r\n      }\r\n      \r\n      this.close();\r\n    }, true);\r\n\r\n    if (itemFunctions) {\r\n      this.items = {\r\n        array: [...this.content.getElementsByTagName('li')],\r\n        active: null,\r\n        activeIndex: 0,\r\n        keySearch: {\r\n          key: null,\r\n          indexCurrent: 0,\r\n          indexTemp: 0,\r\n          indexArray: [],\r\n        },\r\n      };\r\n      \r\n      new MutationObserver(() => {\r\n        if (this.modal.classList.contains('is-visible')) {\r\n          if (this.items.active) {\r\n            this.items.active.button.focus();\r\n\r\n          } else {\r\n            this.items.array[0].button.focus();\r\n          }\r\n\r\n        } else {\r\n          this.resetKeySearch();\r\n        }\r\n      }).observe(this.modal, {attributes: true});\r\n\r\n      this.items.array.map(item => {\r\n        item.button = item.querySelector('button');\r\n\r\n        item.button.addEventListener('mouseup', (e) => {\r\n          this.close();\r\n          \r\n          if (this.type) {\r\n            this.select(e.currentTarget);\r\n            \r\n          } else {\r\n            e.currentTarget.function?.();\r\n            this.defaultFunction?.();\r\n          }\r\n        });\r\n        \r\n        item.button.addEventListener('click', (e) => {\r\n          if (e.detail > 0) return;\r\n          \r\n          this.close();\r\n          \r\n          if (this.type) {\r\n            this.select(e.currentTarget);\r\n    \r\n          } else {\r\n            e.currentTarget.function?.();\r\n            this.defaultFunction?.();\r\n          }\r\n        });\r\n      });\r\n\r\n      if (this.type) {\r\n        this.toggleButton.textEm = this.toggleButton.querySelector('.js-inner-text') || this.toggleButton;\r\n        this.select(0, true);\r\n      }\r\n\r\n      itemFunctions.map(obj => {\r\n        if (obj.button) {\r\n          obj.button.function = obj.function;\r\n        }\r\n      });\r\n      this.defaultFunction = itemFunctions.find(item => typeof(item) === 'function');\r\n\r\n      document.addEventListener('keydown', (e) => {\r\n        if (this.modal.inert) return;\r\n\r\n        if (\r\n          [\r\n            'ArrowUp', 'ArrowDown', 'ArrowLeft',\r\n            'ArrowRight', 'Home', 'End',\r\n            'PageUp', 'PageDown'\r\n          ].includes(e.key)\r\n        ) {\r\n          e.preventDefault();\r\n          \r\n          if (['ArrowUp', 'ArrowLeft'].includes(e.key)) {\r\n            if (this.items.keySearch.indexCurrent >= 1) {\r\n              this.items.keySearch.indexCurrent--;\r\n  \r\n            } else this.items.keySearch.indexCurrent = this.items.array.length - 1;\r\n  \r\n          } else if (['ArrowDown', 'ArrowRight'].includes(e.key)) {\r\n            if (this.items.keySearch.indexCurrent <= this.items.array.length - 2) {\r\n              this.items.keySearch.indexCurrent++;\r\n  \r\n            } else this.items.keySearch.indexCurrent = 0;\r\n  \r\n          } else if (e.key === 'PageDown') {\r\n            this.items.keySearch.indexCurrent = this.items.array.findLastIndex(item => item.offsetTop < this.content.scrollTop + this.modal.clientHeight - this.items.array[0].clientHeight);\r\n            \r\n          } else if (e.key === 'PageUp') {\r\n            this.items.keySearch.indexCurrent = this.items.array.findIndex(item => item.offsetTop > this.content.scrollTop - this.modal.clientHeight + this.items.array[0].clientHeight);\r\n            \r\n          } else if (e.key === 'Home') {\r\n            this.items.keySearch.indexCurrent = 0;\r\n            \r\n          } else if (e.key === 'End') {\r\n            this.items.keySearch.indexCurrent = this.items.array.length - 1;\r\n          }\r\n          \r\n          this.items.keySearch.indexTemp = -1;\r\n          this.items.array[this.items.keySearch.indexCurrent].button.focus();\r\n          this.items.array[this.items.keySearch.indexCurrent].button.scrollIntoView();\r\n  \r\n        } else {\r\n          this.items.keySearch.indexArray.length = 0;\r\n  \r\n          this.items.array.forEach((item, index) => {\r\n            if (item.innerText[0].toLowerCase() === e.key.toLowerCase()) {\r\n              this.items.keySearch.indexArray.push(index);\r\n            }\r\n          });\r\n  \r\n          if (!this.items.keySearch.indexArray.length) return;\r\n  \r\n          if (this.items.keySearch.key === e.key.toLowerCase()) {\r\n            this.items.array[this.items.keySearch\r\n              .indexArray[++this.items.keySearch.indexTemp]\r\n            ] || (this.items.keySearch.indexTemp = 0);\r\n            this.items.keySearch.indexCurrent = this.items.keySearch\r\n              .indexArray[this.items.keySearch.indexTemp];\r\n  \r\n          } else {\r\n            this.items.keySearch.indexTemp = 0\r\n            this.items.keySearch.indexCurrent = this.items.keySearch\r\n              .indexArray[this.items.keySearch.indexTemp];\r\n            this.items.keySearch.key = e.key.toLowerCase();\r\n          }\r\n  \r\n          this.items.array[this.items.keySearch\r\n            .indexArray[this.items.keySearch.indexTemp]\r\n          ].button.focus();\r\n          this.items.array[this.items.keySearch\r\n            .indexArray[this.items.keySearch.indexTemp]\r\n          ].button.scrollIntoView();\r\n        }\r\n      });\r\n    }\r\n  }\r\n\r\n  select(item, classOnly) {\r\n    this.items.active?.button.classList.remove('is-selected');\r\n    this.items.active = this.items.array[item] || item.closest('li');\r\n    this.items.active.button.classList.add('is-selected');\r\n    this.items.activeIndex = this.items.array.indexOf(this.items.active);\r\n    this.items.keySearch.indexCurrent = this.items.activeIndex;\r\n\r\n    const itemContent = this.items.active.textContent.trim();\r\n    this.toggleButton.textEm.textContent = itemContent;\r\n    this.container.dataset.selectedOption = itemContent;\r\n\r\n    if (classOnly) return;\r\n\r\n    this.items.active.button.function?.();\r\n    this.defaultFunction?.();\r\n  }\r\n\r\n  resetKeySearch() {\r\n    this.items.keySearch.key = null;\r\n    this.items.keySearch.indexCurrent = this.items.activeIndex;\r\n    this.items.keySearch.indexTemp = 0;\r\n    this.items.keySearch.indexArray = [];\r\n  }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://enterprise/./components/modals/modals.js?");

/***/ }),

/***/ "./components/navHeader/nav-header.js":
/*!********************************************!*\
  !*** ./components/navHeader/nav-header.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   navHeader: () => (/* binding */ navHeader)\n/* harmony export */ });\nconst navHeader = {\r\n  em: document.querySelector('.js-nav-header-nav'),\r\n};\r\nnavHeader.linksEm = navHeader.em.querySelector('.js-nav-header-nav-links');\r\nnavHeader.toggleButton = navHeader.em.querySelector('.js-nav-header-nav-toggle-button');\r\n\r\nnavHeader.toggleButton.addEventListener('click', () => {\r\n  navHeader.linksEm.classList.toggle('is-hidden');\r\n  navHeader.toggleButton.classList.toggle('is-active');\r\n});\r\n\r\n\n\n//# sourceURL=webpack://enterprise/./components/navHeader/nav-header.js?");

/***/ }),

/***/ "./layouts/hero/hero.js":
/*!******************************!*\
  !*** ./layouts/hero/hero.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_modals_modals_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/modals/modals.js */ \"./components/modals/modals.js\");\n\r\n\r\nconst heroEm = document.querySelector('.js-main-hero');\r\n\r\nconst heroSearch = {\r\n  mobileModal: new _components_modals_modals_js__WEBPACK_IMPORTED_MODULE_0__.Modal(\r\n    heroEm.querySelector('.js-search-filters-mobile'),\r\n    {\r\n      detached: true,\r\n      left: 0,\r\n      top: 0,\r\n    },\r\n  ),\r\n  cancelBtn: null,\r\n  applyBtn: null,\r\n};\r\n\r\nheroSearch.cancelBtn = heroSearch.mobileModal.modal.querySelector('.js-search-filters-cancel-btn');\r\nheroSearch.applyBtn = heroSearch.mobileModal.modal.querySelector('.js-search-filters-apply-btn');\r\n\r\nheroSearch.cancelBtn.addEventListener('click', (e) => {\r\n  heroSearch.mobileModal.close();\r\n});\r\n\r\nheroSearch.applyBtn.addEventListener('click', (e) => {\r\n  heroSearch.mobileModal.close();\r\n});\n\n//# sourceURL=webpack://enterprise/./layouts/hero/hero.js?");

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://enterprise/./src/main.css?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ \"./src/main.css\");\n/* harmony import */ var _components_modals_modals_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/modals/modals.js */ \"./components/modals/modals.js\");\n/* harmony import */ var _components_navHeader_nav_header_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/navHeader/nav-header.js */ \"./components/navHeader/nav-header.js\");\n/* harmony import */ var _layouts_hero_hero_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../layouts/hero/hero.js */ \"./layouts/hero/hero.js\");\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://enterprise/./src/main.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;