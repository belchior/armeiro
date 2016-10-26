
var armeiro = require('./armeirorc.js');
var gulp = require('gulp');

gulp.task('copy', function () {
  return armeiro.copy.forEach(function (target) {
    gulp.src(target.src).pipe(gulp.dest(target.dest));
  });
});
