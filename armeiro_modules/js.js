
var armeiro = require('./armeirorc.js');
var gulp = require('gulp');


gulp.task('compress:js', function () {
  var merged = require(armeiro.pathModules + 'merge-stream.js')();
  var uglify = require('gulp-uglify');

  armeiro.js.forEach(function (target) {
    merged.add(
      gulp.src(target.src, target.options)
      .pipe(uglify())
      .pipe(gulp.dest(target.dest))
    );
  });

  return merged;
});

gulp.task('concat:js', function () {
  var concat = require('gulp-concat');
  var merged = require(armeiro.pathModules + 'merge-stream.js')();

  armeiro.js.forEach(function (target) {
    merged.add(
      gulp.src(target.src, target.options)
      .pipe(concat(target.name))
      .pipe(gulp.dest(target.dest))
    );
  });

  return merged;
});

gulp.task('zip:js', function () {
  var concat = require('gulp-concat');
  var merged = require(armeiro.pathModules + 'merge-stream.js')();
  var uglify = require('gulp-uglify');

  armeiro.js.forEach(function (target) {
    merged.add(
      gulp.src(target.src, target.options)
      .pipe(concat(target.name))
      .pipe(uglify())
      .pipe(gulp.dest(target.dest))
    );
  });

  return merged;
});

gulp.task('watch:js:compress', function () {
  armeiro.js.forEach(function (target) {
    gulp.watch(target.watch, ['compress:js']);
  });
});

gulp.task('watch:js:concat', function () {
  armeiro.js.forEach(function (target) {
    gulp.watch(target.watch, ['concat:js']);
  });
});

gulp.task('watch:js:zip', function () {
  armeiro.js.forEach(function (target) {
    gulp.watch(target.watch, ['zip:js']);
  });
});
