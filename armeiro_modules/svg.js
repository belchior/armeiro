
var armeiro = require('./armeirorc.js');
var gulp = require('gulp');

gulp.task('compress:svg', function () {
  var imageminSvgo = require('imagemin-svgo');

  armeiro.svg.forEach(function (target) {
    gulp.src(target.orig)
    .pipe(imageminSvgo()())
    .pipe(gulp.dest(target.dest));
  });
});

gulp.task('watch:svg', function () {
  armeiro.svg.forEach(function (target) {
    target.watch = target.watch || target.src;
    gulp.watch(target.watch, ['compress:svg']);
  });
});
