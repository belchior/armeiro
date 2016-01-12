
var armeiro = require('./armeirorc.js');
var gulp = require('gulp');
var proxyOptions = {
  files: [
    armeiro.browsersync.dest
  ]
};
var serverOptions = {
  open: false,
  server: {
    baseDir: armeiro.browsersync.dest
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
