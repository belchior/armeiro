
var armeiro = require('./armeirorc.js');
var gulp = require('gulp');

gulp.task('compile:sass', function () {
  var sass = require('gulp-sass');
  var sourcemaps = require('gulp-sourcemaps');

  armeiro.sass.forEach(function (target) {
    gulp.src(target.src)
    .pipe(sourcemaps.init())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(sourcemaps.write('map'))
    .pipe(gulp.dest(target.dest));
  });
});

gulp.task('compress:sass', function () {
  var cssnano = require('gulp-cssnano');
  var sass = require('gulp-sass');
  var sourcemaps = require('gulp-sourcemaps');

  armeiro.sass.forEach(function (target) {
    gulp.src(target.src)
    .pipe(sourcemaps.init())
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(cssnano())
    .pipe(sourcemaps.write('map'))
    .pipe(gulp.dest(target.dest));
  });
});

gulp.task('concat:sass', function () {
  var concat = require('gulp-concat');
  var sass = require('gulp-sass');
  var sourcemaps = require('gulp-sourcemaps');

  armeiro.sass.forEach(function (target) {
    gulp.src(target.src)
    .pipe(sourcemaps.init())
    .pipe(concat(target.name))
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(sourcemaps.write('map'))
    .pipe(gulp.dest(target.dest));
  });
});

gulp.task('zip:sass', function () {
  var concat = require('gulp-concat');
  var cssnano = require('gulp-cssnano');
  var sass = require('gulp-sass');
  var sourcemaps = require('gulp-sourcemaps');

  armeiro.sass.forEach(function (target) {
    gulp.src(target.src)
    .pipe(sourcemaps.init())
    .pipe(concat(target.name))
    .pipe(sass.sync().on('error', sass.logError))
    .pipe(cssnano())
    .pipe(sourcemaps.write('map'))
    .pipe(gulp.dest(target.dest));
  });
});

gulp.task('watch:sass:compile', function () {
  armeiro.sass.forEach(function (target) {
    target.watch = target.watch || target.src;
    gulp.watch(target.watch, ['compile:sass']);
  });
});

gulp.task('watch:sass:compress', function () {
  armeiro.sass.forEach(function (target) {
    target.watch = target.watch || target.src;
    gulp.watch(target.watch, ['compress:sass']);
  });
});

gulp.task('watch:sass:concat', function () {
  armeiro.sass.forEach(function (target) {
    target.watch = target.watch || target.src;
    gulp.watch(target.watch, ['concat:sass']);
  });
});

gulp.task('watch:sass:zip', function () {
  armeiro.sass.forEach(function (target) {
    target.watch = target.watch || target.src;
    gulp.watch(target.watch, ['zip:sass']);
  });
});
