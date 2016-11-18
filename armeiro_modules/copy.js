
var armeiro = require('./armeirorc.js');
var gulp = require('gulp');

gulp.task('copy', function () {
  var merged = require(armeiro.pathModules + 'merge-stream.js')();

  armeiro.copy.forEach(function (target) {
    merged.add(
      gulp.src(target.src, target.options)
      .pipe(gulp.dest(target.dest))
    );
  });

  return merged;
});

gulp.task('watch:copy', function () {
  armeiro.copy.forEach(function (target) {
    gulp.watch(target.watch, ['copy']);
  });
});
