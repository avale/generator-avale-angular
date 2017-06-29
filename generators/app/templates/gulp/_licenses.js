'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var fs = require('fs');
var Stream = require('stream');

var $ = require('gulp-load-plugins')();


gulp.task('licenses', function() {
    return $.bowerLicensesToJson('licenses.json')
        .pipe(gulp.dest(path.join(conf.paths.src, 'assets', 'data')));
});
