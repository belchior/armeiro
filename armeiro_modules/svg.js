
var armeiro = require('./armeirorc.js');
var gulp = require('gulp');

gulp.task('compress:svg', function () {
  var merged = require(armeiro.pathModules + 'merge-stream.js')();
  var svgmin = require('gulp-svgmin');

  armeiro.svg.forEach(function (target) {
    merged.add(
      gulp.src(target.src)
      .pipe(svgmin())
      .pipe(gulp.dest(target.dest))
    );
  });

  return merged;
});

gulp.task('watch:svg:compress', function () {
  armeiro.svg.forEach(function (target) {
    gulp.watch(target.watch, ['compress:svg']);
  });
});
