
var armeiro = require('./armeirorc.js');
var gulp = require('gulp');


gulp.task('compress:css', function () {
  var cssnano = require('gulp-cssnano');
  var merged = require(armeiro.pathModules + 'merge-stream.js')();
  var sourcemaps = require('gulp-sourcemaps');

  armeiro.css.forEach(function (target) {
    merged.add(
      gulp.src(target.src)
      .pipe(sourcemaps.init())
      .pipe(cssnano())
      .pipe(sourcemaps.write('map'))
      .pipe(gulp.dest(target.dest))
    );
  });
});

gulp.task('concat:css', function () {
  var concat = require('gulp-concat');
  var merged = require(armeiro.pathModules + 'merge-stream.js')();

  armeiro.css.forEach(function (target) {
    merged.add(
      gulp.src(target.src)
      .pipe(concat(target.name))
      .pipe(gulp.dest(target.dest))
    );
  });

  return merged;
});

gulp.task('zip:css', function () {
  var concat = require('gulp-concat');
  var cssnano = require('gulp-cssnano');
  var merged = require(armeiro.pathModules + 'merge-stream.js')();
  var sourcemaps = require('gulp-sourcemaps');

  armeiro.css.forEach(function (target) {
    merged.add(
      gulp.src(target.src)
      .pipe(sourcemaps.init())
      .pipe(concat(target.name))
      .pipe(cssnano())
      .pipe(sourcemaps.write('map'))
      .pipe(gulp.dest(target.dest))
    );
  });

  return merged;
});

gulp.task('watch:css:compress', function () {
  armeiro.css.forEach(function (target) {
    gulp.watch(target.watch, ['compress:css']);
  });
});

gulp.task('watch:css:concat', function () {
  armeiro.css.forEach(function (target) {
    gulp.watch(target.watch, ['concat:css']);
  });
});

gulp.task('watch:css:zip', function () {
  armeiro.css.forEach(function (target) {
    gulp.watch(target.watch, ['zip:css']);
  });
});
