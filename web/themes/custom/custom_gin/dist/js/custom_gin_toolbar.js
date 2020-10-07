/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "../";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/custom_gin_toolbar.js":
/*!**********************************!*\
  !*** ./js/custom_gin_toolbar.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* eslint-disable func-names, no-mutable-exports, comma-dangle, strict */\n\n\n(function ($, Drupal, drupalSettings) {\n  Drupal.behaviors.customGinToolbarActiveItem = {\n    attach: function attach() {\n      var path = drupalSettings.path.currentPath; // Check if on node edit form\n\n      if (path.indexOf('admin/content') > -1 || path.indexOf('/edit') > -1) {\n        $('.toolbar-icon-system-admin-content').addClass('is-active');\n      } // If Structure\n      else if (path.indexOf('admin/structure') > -1) {\n          $('.toolbar-icon-system-admin-structure').addClass('is-active');\n        } // If Appearance\n        else if (path.indexOf('admin/appearance') > -1 || path.indexOf('admin/theme') > -1) {\n            $('.toolbar-icon-system-themes-page').addClass('is-active');\n          } // If Modules\n          else if (path.indexOf('admin/modules') > -1) {\n              $('.toolbar-icon-system-modules-list').addClass('is-active');\n            } // If Configuration\n            else if (path.indexOf('admin/config') > -1) {\n                $('.toolbar-icon-system-admin-config').addClass('is-active');\n              } // If People\n              else if (path.indexOf('admin/people') > -1) {\n                  $('.toolbar-icon-entity-user-collection').addClass('is-active');\n                } // If Reports\n                else if (path.indexOf('admin/reports') > -1) {\n                    $('.toolbar-icon-system-admin-reports').addClass('is-active');\n                  } // If Help\n                  else if (path.indexOf('admin/help') > -1) {\n                      $('.toolbar-icon-help-main').addClass('is-active');\n                    } // If Commerce\n                    else if (path.indexOf('admin/commerce') > -1) {\n                        $('.toolbar-icon-commerce-admin-commerce').addClass('is-active');\n                      }\n    }\n  };\n  Drupal.behaviors.customGinToolbarToggle = {\n    attach: function attach(context) {\n      // Set sidebarState.\n      if (localStorage.getItem('GinSidebarOpen') === 'true') {\n        $('body').attr('data-toolbar-menu', 'open');\n        $('.toolbar-menu__trigger').addClass('is-active');\n      } else {\n        $('body').attr('data-toolbar-menu', '');\n        $('.toolbar-menu__trigger').removeClass('is-active');\n      } // Toolbar toggle\n\n\n      $('.toolbar-menu__trigger', context).on('click', function (e) {\n        e.preventDefault(); // Toggle active class.\n\n        $(this).toggleClass('is-active'); // Set active state.\n\n        if ($(this).hasClass('is-active')) {\n          $('body').attr('data-toolbar-menu', 'open');\n          localStorage.setItem('GinSidebarOpen', 'true');\n        } else {\n          $('body').attr('data-toolbar-menu', '');\n          localStorage.setItem('GinSidebarOpen', 'false');\n          $('.gin-toolbar-inline-styles').remove();\n        }\n      }); // Change when clicked\n\n      $('#toolbar-bar .toolbar-item', context).on('click', function () {\n        $('body').attr('data-toolbar-tray', $(this).data('toolbar-tray')); // Sticky toolbar width\n\n        $(document).ready(function () {\n          $('.sticky-header').each(function () {\n            $(this).width($('.sticky-table').width());\n          });\n        });\n      });\n    }\n  };\n})(jQuery, Drupal, drupalSettings);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9jdXN0b21fZ2luX3Rvb2xiYXIuanM/ODIzYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2pzL2N1c3RvbV9naW5fdG9vbGJhci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGZ1bmMtbmFtZXMsIG5vLW11dGFibGUtZXhwb3J0cywgY29tbWEtZGFuZ2xlLCBzdHJpY3QgKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4oKCQsIERydXBhbCwgZHJ1cGFsU2V0dGluZ3MpID0+IHtcbiAgRHJ1cGFsLmJlaGF2aW9ycy5jdXN0b21HaW5Ub29sYmFyQWN0aXZlSXRlbSA9IHtcbiAgICBhdHRhY2g6IGZ1bmN0aW9uIGF0dGFjaCgpIHtcbiAgICAgIGNvbnN0IHBhdGggPSBkcnVwYWxTZXR0aW5ncy5wYXRoLmN1cnJlbnRQYXRoO1xuXG4gICAgICAvLyBDaGVjayBpZiBvbiBub2RlIGVkaXQgZm9ybVxuICAgICAgaWYgKFxuICAgICAgICBwYXRoLmluZGV4T2YoJ2FkbWluL2NvbnRlbnQnKSA+IC0xIHx8XG4gICAgICAgIHBhdGguaW5kZXhPZignL2VkaXQnKSA+IC0xXG4gICAgICApIHtcbiAgICAgICAgJCgnLnRvb2xiYXItaWNvbi1zeXN0ZW0tYWRtaW4tY29udGVudCcpLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgIH1cbiAgICAgIC8vIElmIFN0cnVjdHVyZVxuICAgICAgZWxzZSBpZiAocGF0aC5pbmRleE9mKCdhZG1pbi9zdHJ1Y3R1cmUnKSA+IC0xKSB7XG4gICAgICAgICQoJy50b29sYmFyLWljb24tc3lzdGVtLWFkbWluLXN0cnVjdHVyZScpLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgIH1cbiAgICAgIC8vIElmIEFwcGVhcmFuY2VcbiAgICAgIGVsc2UgaWYgKFxuICAgICAgICBwYXRoLmluZGV4T2YoJ2FkbWluL2FwcGVhcmFuY2UnKSA+IC0xIHx8XG4gICAgICAgIHBhdGguaW5kZXhPZignYWRtaW4vdGhlbWUnKSA+IC0xXG4gICAgICApIHtcbiAgICAgICAgJCgnLnRvb2xiYXItaWNvbi1zeXN0ZW0tdGhlbWVzLXBhZ2UnKS5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICB9XG4gICAgICAvLyBJZiBNb2R1bGVzXG4gICAgICBlbHNlIGlmIChwYXRoLmluZGV4T2YoJ2FkbWluL21vZHVsZXMnKSA+IC0xKSB7XG4gICAgICAgICQoJy50b29sYmFyLWljb24tc3lzdGVtLW1vZHVsZXMtbGlzdCcpLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgIH1cbiAgICAgIC8vIElmIENvbmZpZ3VyYXRpb25cbiAgICAgIGVsc2UgaWYgKHBhdGguaW5kZXhPZignYWRtaW4vY29uZmlnJykgPiAtMSkge1xuICAgICAgICAkKCcudG9vbGJhci1pY29uLXN5c3RlbS1hZG1pbi1jb25maWcnKS5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICB9XG4gICAgICAvLyBJZiBQZW9wbGVcbiAgICAgIGVsc2UgaWYgKHBhdGguaW5kZXhPZignYWRtaW4vcGVvcGxlJykgPiAtMSkge1xuICAgICAgICAkKCcudG9vbGJhci1pY29uLWVudGl0eS11c2VyLWNvbGxlY3Rpb24nKS5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICB9XG4gICAgICAvLyBJZiBSZXBvcnRzXG4gICAgICBlbHNlIGlmIChwYXRoLmluZGV4T2YoJ2FkbWluL3JlcG9ydHMnKSA+IC0xKSB7XG4gICAgICAgICQoJy50b29sYmFyLWljb24tc3lzdGVtLWFkbWluLXJlcG9ydHMnKS5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICB9XG4gICAgICAvLyBJZiBIZWxwXG4gICAgICBlbHNlIGlmIChwYXRoLmluZGV4T2YoJ2FkbWluL2hlbHAnKSA+IC0xKSB7XG4gICAgICAgICQoJy50b29sYmFyLWljb24taGVscC1tYWluJykuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgfVxuXG4gICAgICAvLyBJZiBDb21tZXJjZVxuICAgICAgZWxzZSBpZiAocGF0aC5pbmRleE9mKCdhZG1pbi9jb21tZXJjZScpID4gLTEpIHtcbiAgICAgICAgJCgnLnRvb2xiYXItaWNvbi1jb21tZXJjZS1hZG1pbi1jb21tZXJjZScpLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgRHJ1cGFsLmJlaGF2aW9ycy5jdXN0b21HaW5Ub29sYmFyVG9nZ2xlID0ge1xuICAgIGF0dGFjaDogZnVuY3Rpb24gYXR0YWNoKGNvbnRleHQpIHtcbiAgICAgIC8vIFNldCBzaWRlYmFyU3RhdGUuXG4gICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0dpblNpZGViYXJPcGVuJykgPT09ICd0cnVlJykge1xuICAgICAgICAkKCdib2R5JykuYXR0cignZGF0YS10b29sYmFyLW1lbnUnLCAnb3BlbicpO1xuICAgICAgICAkKCcudG9vbGJhci1tZW51X190cmlnZ2VyJykuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgICQoJ2JvZHknKS5hdHRyKCdkYXRhLXRvb2xiYXItbWVudScsICcnKTtcbiAgICAgICAgJCgnLnRvb2xiYXItbWVudV9fdHJpZ2dlcicpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgIH1cblxuICAgICAgLy8gVG9vbGJhciB0b2dnbGVcbiAgICAgICQoJy50b29sYmFyLW1lbnVfX3RyaWdnZXInLCBjb250ZXh0KS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgLy8gVG9nZ2xlIGFjdGl2ZSBjbGFzcy5cbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnaXMtYWN0aXZlJyk7XG5cbiAgICAgICAgLy8gU2V0IGFjdGl2ZSBzdGF0ZS5cbiAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ2lzLWFjdGl2ZScpKSB7XG4gICAgICAgICAgJCgnYm9keScpLmF0dHIoJ2RhdGEtdG9vbGJhci1tZW51JywgJ29wZW4nKTtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnR2luU2lkZWJhck9wZW4nLCAndHJ1ZScpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICQoJ2JvZHknKS5hdHRyKCdkYXRhLXRvb2xiYXItbWVudScsICcnKTtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnR2luU2lkZWJhck9wZW4nLCAnZmFsc2UnKTtcbiAgICAgICAgICAkKCcuZ2luLXRvb2xiYXItaW5saW5lLXN0eWxlcycpLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy8gQ2hhbmdlIHdoZW4gY2xpY2tlZFxuICAgICAgJCgnI3Rvb2xiYXItYmFyIC50b29sYmFyLWl0ZW0nLCBjb250ZXh0KS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICQoJ2JvZHknKS5hdHRyKCdkYXRhLXRvb2xiYXItdHJheScsICQodGhpcykuZGF0YSgndG9vbGJhci10cmF5JykpO1xuXG4gICAgICAgIC8vIFN0aWNreSB0b29sYmFyIHdpZHRoXG4gICAgICAgICQoZG9jdW1lbnQpLnJlYWR5KCgpID0+IHtcbiAgICAgICAgICAkKCcuc3RpY2t5LWhlYWRlcicpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCh0aGlzKS53aWR0aCgkKCcuc3RpY2t5LXRhYmxlJykud2lkdGgoKSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xufSkoalF1ZXJ5LCBEcnVwYWwsIGRydXBhbFNldHRpbmdzKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./js/custom_gin_toolbar.js\n");

/***/ }),

/***/ "./styles/custom_gin_toolbar.scss":
/*!****************************************!*\
  !*** ./styles/custom_gin_toolbar.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdHlsZXMvY3VzdG9tX2dpbl90b29sYmFyLnNjc3M/YzliYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiIuL3N0eWxlcy9jdXN0b21fZ2luX3Rvb2xiYXIuc2Nzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./styles/custom_gin_toolbar.scss\n");

/***/ }),

/***/ 2:
/*!*************************************************************************!*\
  !*** multi ./js/custom_gin_toolbar.js ./styles/custom_gin_toolbar.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./js/custom_gin_toolbar.js */"./js/custom_gin_toolbar.js");
module.exports = __webpack_require__(/*! ./styles/custom_gin_toolbar.scss */"./styles/custom_gin_toolbar.scss");


/***/ })

/******/ });
//# sourceMappingURL=custom_gin_toolbar.js.map