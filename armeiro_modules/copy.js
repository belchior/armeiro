
var armeiro = require('./armeirorc.js');
var gulp = require('gulp');

gulp.task('copy', function () {
  var merged = require(armeiro.pathModules + 'merge-stream.js')();
  var rename = require('gulp-rename');

  armeiro.copy.forEach(function (target) {
    merged.add(
      gulp.src(target.src, target.options)
      .pipe(rename(function (path) {
        target.name ? path.basename = target.name : '';
        target.prefix ? path.basename = target.prefix + path.basename : '';
        target.suffix ? path.basename = path.basename + target.suffix : '';
        target.extname ? path.extname = target.extname : '';
      }))
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
