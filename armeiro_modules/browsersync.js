
var armeiro = require('./armeirorc.js');
var gulp = require('gulp');

gulp.task('browsersync:proxy', function () {
  var browserSync = require('browser-sync').create();

  browserSync.init({
    open: false,
    proxy: armeiro.browsersync.url,
    serveStatic: [
      armeiro.browsersync.dest
    ],
    files: [
      armeiro.browsersync.dest + '*.{css,js}'
    ],
    rewriteRules: [
      {
        match: /Browsersync/g,
        fn: function (req, res, match) {
          return 'kittenz';
        }
      }
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
      armeiro.browsersync.dest + '*.{html,css,js}'
    ]
  });
});
