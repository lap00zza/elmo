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
var gulp = require('gulp')
var uglify = require('gulp-uglify')
var pump = require('pump')
var babel = require('gulp-babel')
var sourcemaps = require('gulp-sourcemaps')
var rename = require('gulp-rename')
var path = require('path')
var childProcess = require('child_process')
var runSequence = require('run-sequence')

// Just transpile
gulp.task('build', function (cb) {
  pump([
    gulp.src('src/*.js'),
    sourcemaps.init(),
    babel({
      presets: ['es2015']
    }),
    sourcemaps.write('.'),
    gulp.dest('dist')
  ], cb)
})

// Transpile and minify
gulp.task('build-minified', function (cb) {
  pump([
    gulp.src('src/*.js'),
    sourcemaps.init(),
    babel({
      presets: ['es2015']
    }),
    uglify(),
    rename('elmo.min.js'),
    sourcemaps.write('.'),
    gulp.dest('dist')
  ], cb)
})

gulp.task('linter', function (done) {
  var esPath = path.resolve(__dirname, 'node_modules/eslint/bin/eslint.js')
  var eslintrcPath = path.resolve(__dirname, '.eslintrc.json')
  var esProcess = childProcess.fork(esPath, [
    '-c',
    eslintrcPath,
    './src',
    'gulpfile.js'
  ])

  esProcess.on('exit', function (exitCode) {
    // if its not a clean exit we call the done
    // callback with the error code.
    if (exitCode !== 0) {
      done(exitCode)
      return
    }
    // If no error, we move on with our lives.
    done()
  })
})

gulp.task('default', function () {
  runSequence('linter', 'build', 'build-minified')
})
