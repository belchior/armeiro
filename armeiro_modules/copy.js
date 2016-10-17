
var armeiro = require('./armeirorc.js');
var gulp = require('gulp');

gulp.task('copy', function () {
  return armeiro.copy.forEach(function (item) {
    gulp.src(item.orig).pipe(gulp.dest(item.dest));
  });
});
