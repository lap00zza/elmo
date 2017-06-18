/*!
 * MIT License
 * 
 * Copyright (c) 2017 Jewel Mahanta
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.typeChecker = typeChecker;
/**
 * This helper function is used to maintain type consistency.
 * @param {Array} params
 */
function typeChecker(params) {
  for (var i = 0; i < params.length; i++) {
    if (params[i].pTypes.indexOf(_typeof(params[i].pValue)) === -1) {
      throw new Error('Type Error', params[i].pName + ' must be of these types: ' + params[i].pTypes.join());
    }
  }
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }(); // TODO: switch to webpack later
// TODO: maybe add a check to see if all reqd. params are present?

var _utils = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Represents Elmo!
 * @example
 * var divs = new Elmo('div')
 */
var Elmo = function () {
  /**
   * @param {String|HTMLElement} selector
   *    Must be a valid selector or a HTMLElement
   * @returns {Elmo}
   */
  function Elmo(selector) {
    _classCallCheck(this, Elmo);

    this.elements = null;
    if (selector instanceof window.HTMLElement) {
      this.elements = [selector];
    } else {
      this.elements = document.querySelectorAll(selector);
    }
    return this;
  }

  /**
   * Add a class to all the selected elements.
   * @param {String} className
   *    The name of the class to add.
   * @example
   * var divs = new Elmo('div')
   * divs.addClass('hello')
   * @returns {Elmo}
   */


  _createClass(Elmo, [{
    key: 'addClass',
    value: function addClass(className) {
      (0, _utils.typeChecker)([{ pName: 'className', pTypes: ['string'], pValue: className }]);

      for (var i = 0; i < this.elements.length; i++) {
        this.elements[i].classList.add(className);
      }
      return this;
    }

    /**
     * Remove a class to all the selected elements.
     * @param {String} className
     *    The name of the class to remove.
     * @example
     * var divs = new Elmo('div')
     * divs.removeClass('hello')
     * @returns {Elmo}
     */

  }, {
    key: 'removeClass',
    value: function removeClass(className) {
      (0, _utils.typeChecker)([{ pName: 'className', pTypes: ['string'], pValue: className }]);

      for (var i = 0; i < this.elements.length; i++) {
        this.elements[i].classList.remove(className);
      }
      return this;
    }

    /**
     * Add a event listener to the selected elements.
     * @param {String} eventType
     *    The type of event you are listening to.
     * @param {function} listener
     *    The listener function that will be called when the event is
     *    triggered.
     * @example
     * var divs = new Elmo('div')
     * divs.on('click', function () {
       *      console.log(this)
       * })
     * @returns {Elmo}
     */

  }, {
    key: 'on',
    value: function on(eventType, listener) {
      (0, _utils.typeChecker)([{ pName: 'eventType', pTypes: ['string'], pValue: eventType }, { pName: 'listener', pTypes: ['function'], pValue: listener }]);

      for (var i = 0; i < this.elements.length; i++) {
        this.elements[i].addEventListener(eventType, listener);
      }
      return this;
    }

    /**
     * Set style on the selected elements.
     * @param {Object|String} style
     *    The style object/string. If you pass a object, the keys should
     *    be valid css properties and the values should be valid css
     *    property values.
     * @example
     * var divs = new Elmo('div')
     * divs.css({background: 'pink', margin: '1px'})
     * divs.css('color: blue; border: 1px solid black;')
     * divs.css('') // this will clear all the styles
     * @returns {Elmo}
     */

  }, {
    key: 'css',
    value: function css(style) {
      (0, _utils.typeChecker)([{ pName: 'style', pTypes: ['object', 'string'], pValue: style }]);

      var cssText = '';

      // using Object is preferred
      if ((typeof style === 'undefined' ? 'undefined' : _typeof(style)) === 'object') {
        Object.keys(style).forEach(function (rule) {
          cssText += rule + ': ' + style[rule] + ';';
        });
      } else if (typeof style === 'string') {
        cssText = style;
      }

      for (var i = 0; i < this.elements.length; i++) {
        this.elements[i].style.cssText = cssText;
      }

      return this;
    }

    /**
     * Get the value of an attribute of the first element in the
     * selected elements.
     * @param {String} name - The name of the attribute to get.
     * @example
     * var divs = new Elmo('div')
     * divs._getAttr('class')
     * @returns {String|null}
     *    If the attribute exists, then the value is returned. If
     *    the attribute does not exist, or there are no selected
     *    elements, then null is returned.
     */

  }, {
    key: '_getAttr',
    value: function _getAttr(name) {
      (0, _utils.typeChecker)([{ pName: 'name', pTypes: ['string'], pValue: name }]

      // NOTE: since we are only acting on the first
      // element, there is no point running it through
      // a for loop.
      );if (this.elements.length >= 1 && this.elements[0].hasAttribute(name)) {
        return this.elements[0].getAttribute(name);
      } else {
        return null;
      }
    }

    /**
     * Set an attribute of all the selected elements.
     * @param {String} name - The name of the attribute whose value has to be set.
     * @param {*} value - The value of the attribute to set.
     * @example
     * var divs = new Elmo('div')
     * divs._setAttr('awesome', 'oh! yeah')
     */

  }, {
    key: '_setAttr',
    value: function _setAttr(name, value) {
      (0, _utils.typeChecker)([{ pName: 'name', pTypes: ['string'], pValue: name }]);

      for (var j = 0; j < this.elements.length; j++) {
        this.elements[j].setAttribute(name, value.toString());
      }
    }

    /**
     * If only name is present, {@link Elmo#_getAttr} will be called. If name
     * and value are both present, {@link Elmo#_setAttr} will be called.
     * @param {String} name
     * @param {*} value
     * @throws
     *    If neither name or value is present, this exception will be thrown.
     */

  }, {
    key: 'attr',
    value: function attr(name) {
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (name && !value) {
        return this._getAttr(name);
      } else if (name && value) {
        this._setAttr(name, value);
        return this;
      } else {
        throw new Error('Missing Parameter', 'Parameter "name" should be present.');
      }
    }

    /**
     * Get the value of a dataset of the first element in the
     * selected elements.
     * @param {String} key - The data key to get
     * @example
     * var divs = new Elmo('div')
     * divs._getData('hello')
     * @returns {String|null}
     */

  }, {
    key: '_getData',
    value: function _getData(key) {
      (0, _utils.typeChecker)([{ pName: 'key', pTypes: ['string'], pValue: key }]);

      if (this.elements.length >= 1) {
        return this.elements[0].dataset[key] || null;
      } else {
        return null;
      }
    }

    /**
     * Set data on all the selected elements. _setData can either accept a
     * single object parameter or 2 parameters - key and value.
     * @param {String|Object} key
     *    If this parameter is a string, this acts as the key. This is used
     *    for storing data on the element. If this parameter is an object,
     *    then value parameter is ignored. The keys and values within the
     *    object will be used to set the data.
     * @param {*} value
     * @example
     * var divs = new Elmo('div')
     * // Using Object
     * divs._setData({cats: 1, dogs: 12})
     * // Using key and value
     * divs._setData('mangoes', 134)
     */

  }, {
    key: '_setData',
    value: function _setData(key) {
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      (0, _utils.typeChecker)([{ pName: 'key', pTypes: ['string', 'object'], pValue: key }]);

      if ((typeof key === 'undefined' ? 'undefined' : _typeof(key)) === 'object') {
        var dataObj = key;
        var keys = Object.keys(dataObj);
        for (var j = 0; j < this.elements.length; j++) {
          for (var k = 0; k < keys.length; k++) {
            var eKey = keys[k];
            this.elements[j].dataset[eKey] = dataObj[eKey].toString();
          }
        }
      } else if (typeof key === 'string') {
        for (var i = 0; i < this.elements.length; i++) {
          this.elements[i].dataset[key] = value;
        }
      }
    }

    /**
     * If only key is present, {@link Elmo#_getData} will be called. If key
     * and value are both present, {@link Elmo#_setData} will be called.
     * @param {String|Object} key
     * @param {*} value
     * @throws
     *    If neither key or value is present, this exception will be thrown.
     */

  }, {
    key: 'data',
    value: function data(key) {
      var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (key && !value && typeof key === 'string') {
        return this._getData(key);
      } else if (key && !value && (typeof key === 'undefined' ? 'undefined' : _typeof(key)) === 'object') {
        this._setData(key);
        return this;
      } else if (key && value) {
        this._setData(key, value);
        return this;
      } else {
        throw new Error('Missing Parameter', 'Parameter "key" must be present');
      }
    }
  }]);

  return Elmo;
}();

/**
 * This will act as the main interface for Elmo.
 * @param {String} selector
 * @example
 * elmo('div')
 * // Elmo {elements: NodeList()}
 * elmo('div').addClass('pink')
 * // Elmo {elements: NodeList()}
 * elmo('div').removeClass('blue').on('click', function () {
 *      console.log(this)
 * })
 * // Elmo {elements: NodeList()}
 * @returns {Elmo}
 */


window.e = window.elmo = function (selector) {
  return new Elmo(selector);
};

/***/ })
/******/ ]);