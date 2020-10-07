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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/custom_gin_settings.js":
/*!***********************************!*\
  !*** ./js/custom_gin_settings.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* eslint-disable func-names, no-mutable-exports, comma-dangle, strict */\n\n\n(function ($, Drupal, drupalSettings) {\n  Drupal.behaviors.customGinSettings = {\n    attach: function attach(context) {\n      // Watch Darkmode setting has changed.\n      $('input[name=\"enable_darkmode\"]', context).change(function () {\n        var darkmode = $(this).is(':checked');\n        var accentColorPreset = $('[data-drupal-selector=\"edit-preset-accent-color\"] input:checked').val();\n        var focusColorPreset = $('select[name=\"preset_focus_color\"]').val(); // Toggle Darkmode.\n\n        Drupal.behaviors.customGinSettings.darkmode(darkmode); // Set custom color if 'custom' is set.\n\n        if (accentColorPreset === 'custom') {\n          var accentColorSetting = $('input[name=\"accent_color\"]', context).val();\n          Drupal.behaviors.customGinAccent.setCustomAccentColor('custom', accentColorSetting);\n        } else {\n          Drupal.behaviors.customGinAccent.setAccentColor(accentColorPreset);\n        } // Toggle Focus color.\n\n\n        Drupal.behaviors.customGinAccent.setFocusColor(focusColorPreset);\n      }); // Watch Accent color setting has changed.\n\n      $('[data-drupal-selector=\"edit-preset-accent-color\"] input', context).change(function () {\n        var accentColorPreset = $(this).val(); // Update.\n\n        Drupal.behaviors.customGinAccent.clearAccentColor();\n        Drupal.behaviors.customGinAccent.setAccentColor(accentColorPreset); // Set custom color if 'custom' is set.\n\n        if (accentColorPreset === 'custom') {\n          var accentColorSetting = $('input[name=\"accent_color\"]').val();\n          Drupal.behaviors.customGinAccent.setCustomAccentColor('custom', accentColorSetting);\n        }\n      }); // Watch Accent color setting has changed.\n\n      $('input[name=\"accent_color\"]', context).change(function () {\n        var accentColorSetting = $(this).val(); // Update.\n\n        Drupal.behaviors.customGinAccent.setCustomAccentColor('custom', accentColorSetting);\n      }); // Watch Accent color setting has changed.\n\n      $('select[name=\"preset_focus_color\"]', context).change(function () {\n        var accentColorPreset = $(this).val(); // Update.\n\n        Drupal.behaviors.customGinAccent.setFocusColor(accentColorPreset);\n      }); // Watch Accent color setting has changed.\n\n      $('input[name=\"focus_color\"]', context).change(function () {\n        var focusColorPreset = $('select[name=\"preset_focus_color\"]').val();\n        var focusColorSetting = $(this).val(); // Update.\n\n        Drupal.behaviors.customGinAccent.setFocusColor(focusColorPreset, focusColorSetting);\n      }); // Watch Hight contrast mode setting has changed.\n\n      $('input[name=\"high_contrast_mode\"]', context).change(function () {\n        var highContrastMode = $(this).is(':checked'); // Update.\n\n        Drupal.behaviors.customGinSettings.setHighContrastMode(highContrastMode);\n      }); // Watch user settings has changed.\n\n      $('input[name=\"enable_user_settings\"]', context).change(function () {\n        var active = $(this).is(':checked');\n        var darkmode = $('input[name=\"enable_darkmode\"]').is(':checked');\n        var accentColorSetting = $('input[name=\"accent_color\"]', context).val();\n        var accentColorPreset = $('[data-drupal-selector=\"edit-preset-accent-color\"] input:checked').val();\n        var highContrastMode = $('input[name=\"high_contrast_mode\"]').is(':checked'); // User setting disabled, use default settings instead.\n\n        if (!active) {\n          darkmode = drupalSettings.custom_gin.default_darkmode;\n          accentColorSetting = drupalSettings.custom_gin.default_accent_color;\n          accentColorPreset = drupalSettings.custom_gin.default_preset_accent_color;\n          highContrastMode = drupalSettings.custom_gin.default_high_contrast_mode;\n        } // Update.\n\n\n        Drupal.behaviors.customGinSettings.darkmode(darkmode);\n        Drupal.behaviors.customGinAccent.setAccentColor(accentColorPreset, accentColorSetting);\n        Drupal.behaviors.customGinSettings.setHighContrastMode(highContrastMode);\n      }); // Watch save\n\n      $('[data-drupal-selector=\"edit-submit\"]', context).click(function () {\n        var accentColorPreset = $('[data-drupal-selector=\"edit-preset-accent-color\"] input:checked').val();\n        var accentColorSetting = $('input[name=\"accent_color\"]', context).val(); // If on user form, check if we enable or disable the overrides.\n\n        if ($(this).parents('[data-drupal-selector=\"user-form\"]').length > 0) {\n          var userSettings = $('input[name=\"enable_user_settings\"]', context).is(':checked');\n\n          if (!userSettings) {\n            accentColorSetting = drupalSettings.custom_gin.default_accent_color;\n            accentColorPreset = drupalSettings.custom_gin.default_preset_accent_color;\n          }\n        } // Set custom color if 'custom' is set.\n\n\n        if (accentColorPreset === 'custom') {\n          localStorage.setItem('GinAccentColorCustom', accentColorSetting);\n        } else {\n          localStorage.setItem('GinAccentColorCustom', '');\n        }\n      });\n    },\n    darkmode: function darkmode() {\n      var darkmodeParam = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n      var darkmodeEnabled = darkmodeParam != null ? darkmodeParam : drupalSettings.custom_gin.darkmode;\n      var darkmodeClass = drupalSettings.custom_gin.darkmode_class; // Needs to check for both: backwards compabitility.\n\n      if (darkmodeEnabled === true || darkmodeEnabled === 1) {\n        $('body').addClass(darkmodeClass);\n      } else {\n        $('body').removeClass(darkmodeClass);\n      }\n    },\n    setHighContrastMode: function setHighContrastMode() {\n      var param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;\n      var enabled = param != null ? param : drupalSettings.custom_gin.highcontrastmode;\n      var className = drupalSettings.custom_gin.highcontrastmode_class; // Needs to check for both: backwards compabitility.\n\n      if (enabled === true || enabled === 1) {\n        $('body').addClass(className);\n      } else {\n        $('body').removeClass(className);\n      }\n    }\n  };\n})(jQuery, Drupal, drupalSettings);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9qcy9jdXN0b21fZ2luX3NldHRpbmdzLmpzP2VjYTIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiLi9qcy9jdXN0b21fZ2luX3NldHRpbmdzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgZnVuYy1uYW1lcywgbm8tbXV0YWJsZS1leHBvcnRzLCBjb21tYS1kYW5nbGUsIHN0cmljdCAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbigoJCwgRHJ1cGFsLCBkcnVwYWxTZXR0aW5ncykgPT4ge1xuICBEcnVwYWwuYmVoYXZpb3JzLmN1c3RvbUdpblNldHRpbmdzID0ge1xuICAgIGF0dGFjaDogZnVuY3Rpb24gYXR0YWNoKGNvbnRleHQpIHtcbiAgICAgIC8vIFdhdGNoIERhcmttb2RlIHNldHRpbmcgaGFzIGNoYW5nZWQuXG4gICAgICAkKCdpbnB1dFtuYW1lPVwiZW5hYmxlX2Rhcmttb2RlXCJdJywgY29udGV4dCkuY2hhbmdlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgZGFya21vZGUgPSAkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpO1xuICAgICAgICBjb25zdCBhY2NlbnRDb2xvclByZXNldCA9ICQoJ1tkYXRhLWRydXBhbC1zZWxlY3Rvcj1cImVkaXQtcHJlc2V0LWFjY2VudC1jb2xvclwiXSBpbnB1dDpjaGVja2VkJykudmFsKCk7XG4gICAgICAgIGNvbnN0IGZvY3VzQ29sb3JQcmVzZXQgPSAkKCdzZWxlY3RbbmFtZT1cInByZXNldF9mb2N1c19jb2xvclwiXScpLnZhbCgpO1xuXG4gICAgICAgIC8vIFRvZ2dsZSBEYXJrbW9kZS5cbiAgICAgICAgRHJ1cGFsLmJlaGF2aW9ycy5jdXN0b21HaW5TZXR0aW5ncy5kYXJrbW9kZShkYXJrbW9kZSk7XG5cbiAgICAgICAgLy8gU2V0IGN1c3RvbSBjb2xvciBpZiAnY3VzdG9tJyBpcyBzZXQuXG4gICAgICAgIGlmIChhY2NlbnRDb2xvclByZXNldCA9PT0gJ2N1c3RvbScpIHtcbiAgICAgICAgICBjb25zdCBhY2NlbnRDb2xvclNldHRpbmcgPSAkKCdpbnB1dFtuYW1lPVwiYWNjZW50X2NvbG9yXCJdJywgY29udGV4dCkudmFsKCk7XG5cbiAgICAgICAgICBEcnVwYWwuYmVoYXZpb3JzLmN1c3RvbUdpbkFjY2VudC5zZXRDdXN0b21BY2NlbnRDb2xvcignY3VzdG9tJywgYWNjZW50Q29sb3JTZXR0aW5nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBEcnVwYWwuYmVoYXZpb3JzLmN1c3RvbUdpbkFjY2VudC5zZXRBY2NlbnRDb2xvcihhY2NlbnRDb2xvclByZXNldCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBUb2dnbGUgRm9jdXMgY29sb3IuXG4gICAgICAgIERydXBhbC5iZWhhdmlvcnMuY3VzdG9tR2luQWNjZW50LnNldEZvY3VzQ29sb3IoZm9jdXNDb2xvclByZXNldCk7XG4gICAgICB9KTtcblxuICAgICAgLy8gV2F0Y2ggQWNjZW50IGNvbG9yIHNldHRpbmcgaGFzIGNoYW5nZWQuXG4gICAgICAkKCdbZGF0YS1kcnVwYWwtc2VsZWN0b3I9XCJlZGl0LXByZXNldC1hY2NlbnQtY29sb3JcIl0gaW5wdXQnLCBjb250ZXh0KS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBhY2NlbnRDb2xvclByZXNldCA9ICQodGhpcykudmFsKCk7XG5cbiAgICAgICAgLy8gVXBkYXRlLlxuICAgICAgICBEcnVwYWwuYmVoYXZpb3JzLmN1c3RvbUdpbkFjY2VudC5jbGVhckFjY2VudENvbG9yKCk7XG4gICAgICAgIERydXBhbC5iZWhhdmlvcnMuY3VzdG9tR2luQWNjZW50LnNldEFjY2VudENvbG9yKGFjY2VudENvbG9yUHJlc2V0KTtcblxuICAgICAgICAvLyBTZXQgY3VzdG9tIGNvbG9yIGlmICdjdXN0b20nIGlzIHNldC5cbiAgICAgICAgaWYgKGFjY2VudENvbG9yUHJlc2V0ID09PSAnY3VzdG9tJykge1xuICAgICAgICAgIGNvbnN0IGFjY2VudENvbG9yU2V0dGluZyA9ICQoJ2lucHV0W25hbWU9XCJhY2NlbnRfY29sb3JcIl0nKS52YWwoKTtcblxuICAgICAgICAgIERydXBhbC5iZWhhdmlvcnMuY3VzdG9tR2luQWNjZW50LnNldEN1c3RvbUFjY2VudENvbG9yKCdjdXN0b20nLCBhY2NlbnRDb2xvclNldHRpbmcpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgLy8gV2F0Y2ggQWNjZW50IGNvbG9yIHNldHRpbmcgaGFzIGNoYW5nZWQuXG4gICAgICAkKCdpbnB1dFtuYW1lPVwiYWNjZW50X2NvbG9yXCJdJywgY29udGV4dCkuY2hhbmdlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgYWNjZW50Q29sb3JTZXR0aW5nID0gJCh0aGlzKS52YWwoKTtcblxuICAgICAgICAvLyBVcGRhdGUuXG4gICAgICAgIERydXBhbC5iZWhhdmlvcnMuY3VzdG9tR2luQWNjZW50LnNldEN1c3RvbUFjY2VudENvbG9yKCdjdXN0b20nLCBhY2NlbnRDb2xvclNldHRpbmcpO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIFdhdGNoIEFjY2VudCBjb2xvciBzZXR0aW5nIGhhcyBjaGFuZ2VkLlxuICAgICAgJCgnc2VsZWN0W25hbWU9XCJwcmVzZXRfZm9jdXNfY29sb3JcIl0nLCBjb250ZXh0KS5jaGFuZ2UoZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBhY2NlbnRDb2xvclByZXNldCA9ICQodGhpcykudmFsKCk7XG5cbiAgICAgICAgLy8gVXBkYXRlLlxuICAgICAgICBEcnVwYWwuYmVoYXZpb3JzLmN1c3RvbUdpbkFjY2VudC5zZXRGb2N1c0NvbG9yKGFjY2VudENvbG9yUHJlc2V0KTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBXYXRjaCBBY2NlbnQgY29sb3Igc2V0dGluZyBoYXMgY2hhbmdlZC5cbiAgICAgICQoJ2lucHV0W25hbWU9XCJmb2N1c19jb2xvclwiXScsIGNvbnRleHQpLmNoYW5nZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGZvY3VzQ29sb3JQcmVzZXQgPSAkKCdzZWxlY3RbbmFtZT1cInByZXNldF9mb2N1c19jb2xvclwiXScpLnZhbCgpO1xuICAgICAgICBjb25zdCBmb2N1c0NvbG9yU2V0dGluZyA9ICQodGhpcykudmFsKCk7XG5cbiAgICAgICAgLy8gVXBkYXRlLlxuICAgICAgICBEcnVwYWwuYmVoYXZpb3JzLmN1c3RvbUdpbkFjY2VudC5zZXRGb2N1c0NvbG9yKGZvY3VzQ29sb3JQcmVzZXQsIGZvY3VzQ29sb3JTZXR0aW5nKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBXYXRjaCBIaWdodCBjb250cmFzdCBtb2RlIHNldHRpbmcgaGFzIGNoYW5nZWQuXG4gICAgICAkKCdpbnB1dFtuYW1lPVwiaGlnaF9jb250cmFzdF9tb2RlXCJdJywgY29udGV4dCkuY2hhbmdlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgaGlnaENvbnRyYXN0TW9kZSA9ICQodGhpcykuaXMoJzpjaGVja2VkJyk7XG5cbiAgICAgICAgLy8gVXBkYXRlLlxuICAgICAgICBEcnVwYWwuYmVoYXZpb3JzLmN1c3RvbUdpblNldHRpbmdzLnNldEhpZ2hDb250cmFzdE1vZGUoaGlnaENvbnRyYXN0TW9kZSk7XG4gICAgICB9KTtcblxuICAgICAgLy8gV2F0Y2ggdXNlciBzZXR0aW5ncyBoYXMgY2hhbmdlZC5cbiAgICAgICQoJ2lucHV0W25hbWU9XCJlbmFibGVfdXNlcl9zZXR0aW5nc1wiXScsIGNvbnRleHQpLmNoYW5nZShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZSA9ICQodGhpcykuaXMoJzpjaGVja2VkJyk7XG5cbiAgICAgICAgbGV0IGRhcmttb2RlID0gJCgnaW5wdXRbbmFtZT1cImVuYWJsZV9kYXJrbW9kZVwiXScpLmlzKCc6Y2hlY2tlZCcpO1xuICAgICAgICBsZXQgYWNjZW50Q29sb3JTZXR0aW5nID0gJCgnaW5wdXRbbmFtZT1cImFjY2VudF9jb2xvclwiXScsIGNvbnRleHQpLnZhbCgpO1xuICAgICAgICBsZXQgYWNjZW50Q29sb3JQcmVzZXQgPSAkKCdbZGF0YS1kcnVwYWwtc2VsZWN0b3I9XCJlZGl0LXByZXNldC1hY2NlbnQtY29sb3JcIl0gaW5wdXQ6Y2hlY2tlZCcpLnZhbCgpO1xuICAgICAgICBsZXQgaGlnaENvbnRyYXN0TW9kZSA9ICQoJ2lucHV0W25hbWU9XCJoaWdoX2NvbnRyYXN0X21vZGVcIl0nKS5pcygnOmNoZWNrZWQnKTtcblxuICAgICAgICAvLyBVc2VyIHNldHRpbmcgZGlzYWJsZWQsIHVzZSBkZWZhdWx0IHNldHRpbmdzIGluc3RlYWQuXG4gICAgICAgIGlmICghYWN0aXZlKSB7XG4gICAgICAgICAgZGFya21vZGUgPSBkcnVwYWxTZXR0aW5ncy5jdXN0b21fZ2luLmRlZmF1bHRfZGFya21vZGU7XG4gICAgICAgICAgYWNjZW50Q29sb3JTZXR0aW5nID0gZHJ1cGFsU2V0dGluZ3MuY3VzdG9tX2dpbi5kZWZhdWx0X2FjY2VudF9jb2xvcjtcbiAgICAgICAgICBhY2NlbnRDb2xvclByZXNldCA9IGRydXBhbFNldHRpbmdzLmN1c3RvbV9naW4uZGVmYXVsdF9wcmVzZXRfYWNjZW50X2NvbG9yO1xuICAgICAgICAgIGhpZ2hDb250cmFzdE1vZGUgPSBkcnVwYWxTZXR0aW5ncy5jdXN0b21fZ2luLmRlZmF1bHRfaGlnaF9jb250cmFzdF9tb2RlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVXBkYXRlLlxuICAgICAgICBEcnVwYWwuYmVoYXZpb3JzLmN1c3RvbUdpblNldHRpbmdzLmRhcmttb2RlKGRhcmttb2RlKTtcbiAgICAgICAgRHJ1cGFsLmJlaGF2aW9ycy5jdXN0b21HaW5BY2NlbnQuc2V0QWNjZW50Q29sb3IoYWNjZW50Q29sb3JQcmVzZXQsIGFjY2VudENvbG9yU2V0dGluZyk7XG4gICAgICAgIERydXBhbC5iZWhhdmlvcnMuY3VzdG9tR2luU2V0dGluZ3Muc2V0SGlnaENvbnRyYXN0TW9kZShoaWdoQ29udHJhc3RNb2RlKTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBXYXRjaCBzYXZlXG4gICAgICAkKCdbZGF0YS1kcnVwYWwtc2VsZWN0b3I9XCJlZGl0LXN1Ym1pdFwiXScsIGNvbnRleHQpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgYWNjZW50Q29sb3JQcmVzZXQgPSAkKCdbZGF0YS1kcnVwYWwtc2VsZWN0b3I9XCJlZGl0LXByZXNldC1hY2NlbnQtY29sb3JcIl0gaW5wdXQ6Y2hlY2tlZCcpLnZhbCgpO1xuICAgICAgICBsZXQgYWNjZW50Q29sb3JTZXR0aW5nID0gJCgnaW5wdXRbbmFtZT1cImFjY2VudF9jb2xvclwiXScsIGNvbnRleHQpLnZhbCgpO1xuXG4gICAgICAgIC8vIElmIG9uIHVzZXIgZm9ybSwgY2hlY2sgaWYgd2UgZW5hYmxlIG9yIGRpc2FibGUgdGhlIG92ZXJyaWRlcy5cbiAgICAgICAgaWYgKCQodGhpcykucGFyZW50cygnW2RhdGEtZHJ1cGFsLXNlbGVjdG9yPVwidXNlci1mb3JtXCJdJykubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGNvbnN0IHVzZXJTZXR0aW5ncyA9ICQoJ2lucHV0W25hbWU9XCJlbmFibGVfdXNlcl9zZXR0aW5nc1wiXScsIGNvbnRleHQpLmlzKCc6Y2hlY2tlZCcpO1xuXG4gICAgICAgICAgaWYgKCF1c2VyU2V0dGluZ3MpIHtcbiAgICAgICAgICAgIGFjY2VudENvbG9yU2V0dGluZyA9IGRydXBhbFNldHRpbmdzLmN1c3RvbV9naW4uZGVmYXVsdF9hY2NlbnRfY29sb3I7XG4gICAgICAgICAgICBhY2NlbnRDb2xvclByZXNldCA9IGRydXBhbFNldHRpbmdzLmN1c3RvbV9naW4uZGVmYXVsdF9wcmVzZXRfYWNjZW50X2NvbG9yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNldCBjdXN0b20gY29sb3IgaWYgJ2N1c3RvbScgaXMgc2V0LlxuICAgICAgICBpZiAoYWNjZW50Q29sb3JQcmVzZXQgPT09ICdjdXN0b20nKSB7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0dpbkFjY2VudENvbG9yQ3VzdG9tJywgYWNjZW50Q29sb3JTZXR0aW5nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnR2luQWNjZW50Q29sb3JDdXN0b20nLCAnJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBkYXJrbW9kZTogZnVuY3Rpb24gZGFya21vZGUoZGFya21vZGVQYXJhbSA9IG51bGwpIHtcbiAgICAgIGNvbnN0IGRhcmttb2RlRW5hYmxlZCA9IGRhcmttb2RlUGFyYW0gIT0gbnVsbCA/IGRhcmttb2RlUGFyYW0gOiBkcnVwYWxTZXR0aW5ncy5jdXN0b21fZ2luLmRhcmttb2RlO1xuICAgICAgY29uc3QgZGFya21vZGVDbGFzcyA9IGRydXBhbFNldHRpbmdzLmN1c3RvbV9naW4uZGFya21vZGVfY2xhc3M7XG5cbiAgICAgIC8vIE5lZWRzIHRvIGNoZWNrIGZvciBib3RoOiBiYWNrd2FyZHMgY29tcGFiaXRpbGl0eS5cbiAgICAgIGlmIChkYXJrbW9kZUVuYWJsZWQgPT09IHRydWUgfHwgZGFya21vZGVFbmFibGVkID09PSAxKSB7XG4gICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcyhkYXJrbW9kZUNsYXNzKTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoZGFya21vZGVDbGFzcyk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIHNldEhpZ2hDb250cmFzdE1vZGU6IGZ1bmN0aW9uIHNldEhpZ2hDb250cmFzdE1vZGUocGFyYW0gPSBudWxsKSB7XG4gICAgICBjb25zdCBlbmFibGVkID0gcGFyYW0gIT0gbnVsbCA/IHBhcmFtIDogZHJ1cGFsU2V0dGluZ3MuY3VzdG9tX2dpbi5oaWdoY29udHJhc3Rtb2RlO1xuICAgICAgY29uc3QgY2xhc3NOYW1lID0gZHJ1cGFsU2V0dGluZ3MuY3VzdG9tX2dpbi5oaWdoY29udHJhc3Rtb2RlX2NsYXNzO1xuXG4gICAgICAvLyBOZWVkcyB0byBjaGVjayBmb3IgYm90aDogYmFja3dhcmRzIGNvbXBhYml0aWxpdHkuXG4gICAgICBpZiAoZW5hYmxlZCA9PT0gdHJ1ZSB8fCBlbmFibGVkID09PSAxKSB7XG4gICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcyhjbGFzc05hbWUpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcyhjbGFzc05hbWUpO1xuICAgICAgfVxuICAgIH0sXG4gIH07XG59KShqUXVlcnksIERydXBhbCwgZHJ1cGFsU2V0dGluZ3MpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./js/custom_gin_settings.js\n");

/***/ }),

/***/ 6:
/*!*****************************************!*\
  !*** multi ./js/custom_gin_settings.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./js/custom_gin_settings.js */"./js/custom_gin_settings.js");


/***/ })

/******/ });
//# sourceMappingURL=custom_gin_settings.js.map