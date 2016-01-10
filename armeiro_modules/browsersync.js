
var armeiro = require('./armeirorc.js');
// var browserSync = require('browser-sync').create();
var gulp = require('gulp');
var proxyOptions = {};
var serverOptions = {
  open: false,
  server: {
    baseDir: 'build'
  },
  files: [
    armeiro.css.dest + '*.css',
    armeiro.js.dest + '*.js'
  ]
};

gulp.task('browsersync:proxy', function () {
  var browserSync = require('browser-sync').create();

  browserSync.init(proxyOptions);
});

gulp.task('browsersync', function () {
  var browserSync = require('browser-sync').create();

  browserSync.init(serverOptions);
});
