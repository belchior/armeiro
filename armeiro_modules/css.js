
var armeiro = require('./armeirorc.js');
var gulp = require('gulp');


gulp.task('compress:css', function () {
  var cssnano = require('gulp-cssnano');
  var sourcemaps = require('gulp-sourcemaps');

  armeiro.css.forEach(function (target) {
    gulp.src(target.src)
    .pipe(sourcemaps.init())
    .pipe(cssnano())
    .pipe(sourcemaps.write('map'))
    .pipe(gulp.dest(target.dest));
  });
});

gulp.task('concat:css', function () {
  var concat = require('gulp-concat');

  armeiro.css.forEach(function (target) {
    gulp.src(target.src)
    .pipe(concat(target.name))
    .pipe(gulp.dest(target.dest));
  });
});

gulp.task('zip:css', function () {
  var concat = require('gulp-concat');
  var cssnano = require('gulp-cssnano');
  var sourcemaps = require('gulp-sourcemaps');

  armeiro.css.forEach(function (target) {
    gulp.src(target.src)
    .pipe(sourcemaps.init())
    .pipe(concat(target.name))
    .pipe(cssnano())
    .pipe(sourcemaps.write('map'))
    .pipe(gulp.dest(target.dest));
  });
});

gulp.task('watch:css:compress', function () {
  armeiro.css.forEach(function (target) {
    target.watch = target.watch || target.src;
    gulp.watch(target.watch, ['compress:css']);
  });
});

gulp.task('watch:css:concat', function () {
  armeiro.css.forEach(function (target) {
    target.watch = target.watch || target.src;
    gulp.watch(target.watch, ['concat:css']);
  });
});

gulp.task('watch:css:zip', function () {
  armeiro.css.forEach(function (target) {
    target.watch = target.watch || target.src;
    gulp.watch(target.watch, ['zip:css']);
  });
});
