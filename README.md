## Elmo!
JS selector/DOM library for aliens. 

### Features
* Lightweight (seriously!)
* Chaineable
* Simple API

### Install
```shell
# bower
bower install elmojs

# npm
npm install elmojs --save-dev

# git
git clone https://github.com/lap00zza/elmo.git
```

### Usage
* Install Elmo!
* Include it in your `index.html` file 
```html
<script src="dist/elmo.min.js">
```
* Done! Check the examples below for sample usage.

### Examples
```js
// Select all the div's
elmo('div')

// add class pink to all selected div's
elmo('div').addClass('pink')

// Remove a class and add a event listener on all the 
// selected div's
elmo('div').removeClass('blue').on('click', function () {
     console.log(this)
})

// Change some styles
elmo('div').css({background: 'pink', margin: '1px'})

// You can even do some cool things like this
elmo("div")
    .on("mouseenter", function (){
	    elmo(this).css({background: 'pink', margin: '1px'})
    })
    .on("mouseleave", function (){
	    elmo(this).css("")
    })
```

### License
MIT License

Copyright (c) 2017 Jewel Mahanta

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
