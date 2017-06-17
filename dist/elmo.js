'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 *  MIT License
 *
 *  Copyright (c) 2017 Jewel Mahanta
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in all
 *  copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *  SOFTWARE.
 */

// TODO: switch to webpack later
// TODO: maybe add a check to see if all reqd. params are present?

/**
 * Represents a missing parameter error.
 * @extends {Error}
 */
var ElmoMissingParameter = function (_Error) {
  _inherits(ElmoMissingParameter, _Error);

  function ElmoMissingParameter(message) {
    _classCallCheck(this, ElmoMissingParameter);

    var _this = _possibleConstructorReturn(this, (ElmoMissingParameter.__proto__ || Object.getPrototypeOf(ElmoMissingParameter)).call(this));

    _this.name = 'Missing Parameter';
    _this.message = message;
    return _this;
  }

  return ElmoMissingParameter;
}(Error);

/**
 * Represents a type not allowed error.
 * @extends {Error}
 */


var ElmoTypeNotAllowed = function (_Error2) {
  _inherits(ElmoTypeNotAllowed, _Error2);

  function ElmoTypeNotAllowed(message) {
    _classCallCheck(this, ElmoTypeNotAllowed);

    var _this2 = _possibleConstructorReturn(this, (ElmoTypeNotAllowed.__proto__ || Object.getPrototypeOf(ElmoTypeNotAllowed)).call(this));

    _this2.name = 'Type Not Allowed';
    _this2.message = message;
    return _this2;
  }

  return ElmoTypeNotAllowed;
}(Error);

/**
 * This helper function is used to maintain type consistency.
 * @param {Array} params
 */


function typeChecker(params) {
  for (var i = 0; i < params.length; i++) {
    if (params[i].pTypes.indexOf(_typeof(params[i].pValue)) === -1) {
      throw new ElmoTypeNotAllowed(params[i].pName + ' must be of these types: ' + params[i].pTypes.join());
    }
  }
}

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
      typeChecker([{ pName: 'className', pTypes: ['string'], pValue: className }]);

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
      typeChecker([{ pName: 'className', pTypes: ['string'], pValue: className }]);

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
      typeChecker([{ pName: 'eventType', pTypes: ['string'], pValue: eventType }, { pName: 'listener', pTypes: ['function'], pValue: listener }]);

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
      typeChecker([{ pName: 'style', pTypes: ['object', 'string'], pValue: style }]);

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
     * divs.attr('class')
     * @returns {String|null}
     *    If the attribute exists, then the value is returned. If
     *    the attribute does not exist, or there are no selected
     *    elements, then null is returned.
     */

  }, {
    key: 'getAttr',
    value: function getAttr(name) {
      typeChecker([{ pName: 'name', pTypes: ['string'], pValue: name }]

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
     * @param name - The name of the attribute whose value has to be set.
     * @param {String|Boolean} value - The value of the attribute to set.
     * @example
     * var divs = new Elmo('div')
     * divs.attr('awesome', 'oh! yeah')
     * @throws {ElmoTypeNotAllowed}
     *    If value is neither string nor boolean, this error is thrown.
     */

  }, {
    key: 'setAttr',
    value: function setAttr(name, value) {
      typeChecker([{ pName: 'name', pTypes: ['string'], pValue: name }, { pName: 'value', pTypes: ['string', 'boolean'], pValue: value }]);

      for (var j = 0; j < this.elements.length; j++) {
        this.elements[j].setAttribute(name, value);
      }
    }

    /**
     * Syntactic sugar for {@link Elmo#getAttr} and {@link Elmo#setAttr}
     * If only name is present, getAttr will be called. If name and
     * value are both present, setAttribute will be called.
     * @throws {ElmoMissingParameter}
     *    If neither name or value is present, this exception will be thrown.
     */

  }, {
    key: 'attr',
    value: function attr(name, value) {
      if (name && !value) {
        return this.getAttr(name);
      } else if (name && value) {
        this.setAttr(name, value);
        return this;
      } else {
        throw new ElmoMissingParameter('Parameter "name" should be present.');
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
//# sourceMappingURL=elmo.js.map
