// TODO: maybe add a check to see if all reqd. params are present?

import { typeChecker } from './utils'

/**
 * Represents Elmo!
 * @example
 * var divs = new Elmo('div')
 */
class Elmo {
  /**
   * @param {String|HTMLElement} selector
   *    Must be a valid selector or a HTMLElement
   * @returns {Elmo}
   */
  constructor (selector) {
    this.elements = null
    if (selector instanceof window.HTMLElement) {
      this.elements = [selector]
    } else {
      this.elements = document.querySelectorAll(selector)
    }
    return this
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
  addClass (className) {
    typeChecker([
      {pName: 'className', pTypes: ['string'], pValue: className}
    ])

    for (var i = 0; i < this.elements.length; i++) {
      this.elements[i].classList.add(className)
    }
    return this
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
  removeClass (className) {
    typeChecker([
      {pName: 'className', pTypes: ['string'], pValue: className}
    ])

    for (var i = 0; i < this.elements.length; i++) {
      this.elements[i].classList.remove(className)
    }
    return this
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
  on (eventType, listener) {
    typeChecker([
      {pName: 'eventType', pTypes: ['string'], pValue: eventType},
      {pName: 'listener', pTypes: ['function'], pValue: listener}
    ])

    for (var i = 0; i < this.elements.length; i++) {
      this.elements[i].addEventListener(eventType, listener)
    }
    return this
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
  css (style) {
    typeChecker([
      {pName: 'style', pTypes: ['object', 'string'], pValue: style}
    ])

    var cssText = ''

    // using Object is preferred
    if (typeof style === 'object') {
      Object.keys(style).forEach(function (rule) {
        cssText += rule + ': ' + style[rule] + ';'
      })
    } else if (typeof style === 'string') {
      cssText = style
    }

    for (var i = 0; i < this.elements.length; i++) {
      this.elements[i].style.cssText = cssText
    }

    return this
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
  _getAttr (name) {
    typeChecker([
      {pName: 'name', pTypes: ['string'], pValue: name}
    ])

    // NOTE: since we are only acting on the first
    // element, there is no point running it through
    // a for loop.
    if (this.elements.length >= 1 && this.elements[0].hasAttribute(name)) {
      return this.elements[0].getAttribute(name)
    } else {
      return null
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
  _setAttr (name, value) {
    typeChecker([
      {pName: 'name', pTypes: ['string'], pValue: name}
    ])

    for (var j = 0; j < this.elements.length; j++) {
      this.elements[j].setAttribute(name, value.toString())
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
  attr (name, value = null) {
    if (name && !value) {
      return this._getAttr(name)
    } else if (name && value) {
      this._setAttr(name, value)
      return this
    } else {
      throw new Error('Missing Parameter', 'Parameter "name" should be present.')
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
  _getData (key) {
    typeChecker([
      {pName: 'key', pTypes: ['string'], pValue: key}
    ])

    if (this.elements.length >= 1) {
      return this.elements[0].dataset[key] || null
    } else {
      return null
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
  _setData (key, value = null) {
    typeChecker([
      {pName: 'key', pTypes: ['string', 'object'], pValue: key}
    ])

    if (typeof key === 'object') {
      var dataObj = key
      var keys = Object.keys(dataObj)
      for (var j = 0; j < this.elements.length; j++) {
        for (var k = 0; k < keys.length; k++) {
          var eKey = keys[k]
          this.elements[j].dataset[eKey] = dataObj[eKey].toString()
        }
      }
    } else if (typeof key === 'string') {
      for (var i = 0; i < this.elements.length; i++) {
        this.elements[i].dataset[key] = value
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
  data (key, value = null) {
    if (key && !value && typeof key === 'string') {
      return this._getData(key)
    } else if (key && !value && typeof key === 'object') {
      this._setData(key)
      return this
    } else if (key && value) {
      this._setData(key, value)
      return this
    } else {
      throw new Error('Missing Parameter', 'Parameter "key" must be present')
    }
  }
}

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
  return new Elmo(selector)
}
