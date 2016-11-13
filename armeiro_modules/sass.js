
var armeiro = require('./armeirorc.js');
var gulp = require('gulp');

gulp.task('compile:sass', function () {
  var sass = require('gulp-sass');
  var merged = require(armeiro.pathModules + 'merge-stream.js')();

  armeiro.sass.forEach(function (target) {
    merged.add(
      gulp.src(target.src)
      .pipe(sass.sync().on('error', sass.logError))
      .pipe(gulp.dest(target.dest))
    );
  });

  return merged;
});

gulp.task('compress:sass', function () {
  var cssnano = require('gulp-cssnano');
  var sass = require('gulp-sass');
  var merged = require(armeiro.pathModules + 'merge-stream.js')();

  armeiro.sass.forEach(function (target) {
    merged.add(
      gulp.src(target.src)
      .pipe(sass.sync().on('error', sass.logError))
      .pipe(cssnano())
      .pipe(gulp.dest(target.dest))
    );
  });

  return merged;
});

gulp.task('concat:sass', function () {
  var concat = require('gulp-concat');
  var sass = require('gulp-sass');
  var merged = require(armeiro.pathModules + 'merge-stream.js')();

  armeiro.sass.forEach(function (target) {
    merged.add(
      gulp.src(target.src)
      .pipe(concat(target.name))
      .pipe(sass.sync().on('error', sass.logError))
      .pipe(gulp.dest(target.dest))
    );
  });

  return merged;
});

gulp.task('zip:sass', function () {
  var concat = require('gulp-concat');
  var cssnano = require('gulp-cssnano');
  var sass = require('gulp-sass');
  var merged = require(armeiro.pathModules + 'merge-stream.js')();

  armeiro.sass.forEach(function (target) {
    merged.add(
      gulp.src(target.src)
      .pipe(concat(target.name))
      .pipe(sass.sync().on('error', sass.logError))
      .pipe(cssnano())
      .pipe(gulp.dest(target.dest))
    );
  });

  return merged;
});

gulp.task('watch:sass:compile', function () {
  armeiro.sass.forEach(function (target) {
    gulp.watch(target.watch, ['compile:sass']);
  });
});

gulp.task('watch:sass:compress', function () {
  armeiro.sass.forEach(function (target) {
    gulp.watch(target.watch, ['compress:sass']);
  });
});

gulp.task('watch:sass:concat', function () {
  armeiro.sass.forEach(function (target) {
    gulp.watch(target.watch, ['concat:sass']);
  });
});

gulp.task('watch:sass:zip', function () {
  armeiro.sass.forEach(function (target) {
    gulp.watch(target.watch, ['zip:sass']);
  });
});
