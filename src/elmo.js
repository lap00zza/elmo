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


/**
 * Elmo!
 *
 * A simple abstraction library made on top of document.querySelectorAll.
 * Elmo offers a very simple API to all the commonly used DOM methods
 * without the overhead of bigger libraries.
 * @example
 * var divs = new Elmo('div')
 */
class Elmo {
    /**
     * @param {String|HTMLElement} selector
     *      Must be a valid selector or a HTMLElement
     * @returns {Elmo}
     */
    constructor (selector){
        /** @type {NodeList} */
        this.elements = null;

        if (selector instanceof HTMLElement) {
            this.elements = [selector]
        } else {
            this.elements = document.querySelectorAll(selector)
        }
        return this
    }

    /**
     * Add a class to all the selected elements.
     * @param {String} className
     *      The name of the class to add.
     * @example
     * var divs = new Elmo('div')
     * divs.addClass('hello')
     * @returns {Elmo}
     */
    addClass(className) {
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i].classList.add(className)
        }
        return this
    }

    /**
     * Remove a class to all the selected elements.
     * @param {String} className
     *      The name of the class to remove.
     * @example
     * var divs = new Elmo('div')
     * divs.removeClass('hello')
     * @returns {Elmo}
     */
    removeClass(className) {
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i].classList.remove(className)
        }
        return this
    }

    /**
     * Add a event listener to the selected elements.
     * @param {String} eventType
     *      The type of event you are listening to.
     * @param {function} listener
     *      The listener function that will be called when the event is 
     *      triggered.
     * @example
     * var divs = new Elmo('div')
     * divs.on('click', function () {
     *      console.log(this);
     * })
     * @returns {Elmo}
     */
    on(eventType, listener) {
        if (typeof listener !== 'function') {
            throw new Error('Listener must be a function.')
        }
        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i].addEventListener(eventType, listener)
        }
        return this
    }

    /**
     * Set style on the selected elements.
     * @param {Object|String} style
     *      The style object/string. If you pass a object, the keys should
     *      be valid css properties and the values should be valid css
     *      property values.
     * @example
     * var divs = new Elmo('div')
     * divs.css({background: 'pink', margin: '1px'})
     * divs.css('color: blue; border: 1px solid black;')
     * divs.css('') // this will clear all the styles
     * @returns {Elmo}
     */
    css(style) {
        var cssText = '';

        // using Object is preferred
        if (typeof style === 'object') {
            Object.keys(style).forEach(function (rule) {
                cssText += rule + ': ' + style[rule] + ';'
            });
        } else if (typeof style === 'string') {
            cssText = style
        }

        for (var i = 0; i < this.elements.length; i++) {
            this.elements[i].style.cssText = cssText
        }

        return this
    }
}

/**
 * This will act as the main interface for Elmo.
 * 
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
var elmo = window.elmo = function (selector) {
    return new Elmo(selector)
}
