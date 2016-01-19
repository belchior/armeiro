
var armeiro = require('./armeirorc.js');
var gulp = require('gulp');

gulp.task('browsersync:proxy', function () {
  var browserSync = require('browser-sync').create();

  browserSync.init({
    open: false,
    serveStatic: [
      armeiro.browsersync.dest
    ],
    files: [
      armeiro.csbrowsersyncs.dest + '*.css',
      armeiro.browsersync.dest + '*.js'
    ]
  });
});

gulp.task('browsersync:server', function () {
  var browserSync = require('browser-sync').create();

  browserSync.init({
    open: false,
    server: {
      baseDir: armeiro.browsersync.dest
    },
    files: [
      armeiro.css.dest + '*.css',
      armeiro.js.dest + '*.js'
    ]
  });
});
