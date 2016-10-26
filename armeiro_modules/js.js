
var armeiro = require('./armeirorc.js');
var gulp = require('gulp');


gulp.task('compress:js', function () {
  var sourcemaps = require('gulp-sourcemaps');
  var uglify = require('gulp-uglify');

  armeiro.js.forEach(function (target) {
    gulp.src(target.src)
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write('map'))
    .pipe(gulp.dest(armeiro.js.dest));
  });
});

gulp.task('concat:js', function () {
  var concat = require('gulp-concat');
  var sourcemaps = require('gulp-sourcemaps');

  armeiro.js.forEach(function (target) {
    gulp.src(target.src)
    .pipe(sourcemaps.init())
    .pipe(concat(armeiro.js.name))
    .pipe(sourcemaps.write('map'))
    .pipe(gulp.dest(armeiro.js.dest));
  });
});

gulp.task('zip:js', function () {
  var concat = require('gulp-concat');
  var sourcemaps = require('gulp-sourcemaps');
  var uglify = require('gulp-uglify');

  armeiro.js.forEach(function (target) {
    gulp.src(target.src)
    .pipe(sourcemaps.init())
    .pipe(concat(armeiro.js.name))
    .pipe(uglify())
    .pipe(sourcemaps.write('map'))
    .pipe(gulp.dest(armeiro.js.dest));
  });
});

gulp.task('watch:js:compress', function () {
  armeiro.js.forEach(function (target) {
    target.watch = target.watch || target.src;
    gulp.watch(target.watch, ['compress:js']);
  });
});

gulp.task('watch:js:concat', function () {
  armeiro.js.forEach(function (target) {
    target.watch = target.watch || target.src;
    gulp.watch(target.watch, ['concat:js']);
  });
});

gulp.task('watch:js:zip', function () {
  armeiro.js.forEach(function (target) {
    target.watch = target.watch || target.src;
    gulp.watch(target.watch, ['zip:js']);
  });
});
