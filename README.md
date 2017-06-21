<p align="center">
<img src="https://github.com/lap00zza/elmo/blob/master/assets/Elmo_Logo.png" height="200" width="200">
</p>
<h1 align="center">Elmo!</h1>
<p align="center"><em>a simple DOM library for aliens</em></p> 
<p align="center">
	<a href="https://saythanks.io/to/lap00zza"><img src="https://img.shields.io/badge/Say%20Thanks-!-1EAEDB.svg" alt="Say Thanks"></a>
	<a href="https://travis-ci.org/lap00zza/elmo"><img src="https://travis-ci.org/lap00zza/elmo.svg" alt="Build Status"></a>
	<a href="http://standardjs.com"><img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg" alt="js-standard-style"></a>
	<a href="https://www.npmjs.com/package/elmojs"><img src="https://img.shields.io/npm/v/elmojs.svg?maxAge=3600" alt="npm"></a>
	<a href="https://github.com/lap00zza/elmo"><img src="https://img.shields.io/bower/v/elmojs.svg?maxAge=3600" alt="bower"></a>
</p>
<p align="center"><a href="https://nodei.co/npm/elmojs/"><img src="https://nodei.co/npm/elmojs.png?downloads=true&downloadRank=true&stars=true"></a></p>

## Features
* Lightweight (seriously!)
* Chaineable
* Simple API

## Install
```shell
# bower
bower install elmojs

# npm
npm install elmojs

# git
git clone https://github.com/lap00zza/elmo.git
```

## Usage
* Install Elmo!
* Include it in your `index.html` file 
```html
<script src="dist/elmo.js">
<!-- or -->
<script src="dist/elmo.min.js">
```
* Done! Check the examples below for sample usage.

## Examples
```js
// Select all the div's
elmo('div')

// Change some styles
elmo('div').css({background: 'pink', margin: '1px'})
```
## Links
* Documentation: [elmo.js.org](https://elmo.js.org)

## Credits
* Roman Emilian ([@yumiris](https://github.com/yumiris)) for the awesome logo

## License
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
