
var armeiro = require('./armeirorc.js');
var gulp = require('gulp');

gulp.task('compress:svg', function () {
  var svgmin = require('gulp-svgmin');

  armeiro.svg.forEach(function (target) {
    gulp.src(target.src)
    .pipe(svgmin())
    .pipe(gulp.dest(target.dest));
  });
});

gulp.task('watch:svg', function () {
  armeiro.svg.forEach(function (target) {
    gulp.watch(target.watch, ['compress:svg']);
  });
});
