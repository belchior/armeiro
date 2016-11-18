
var armeiro = require('./armeirorc.js');
var gulp = require('gulp');
var gutil = require('gulp-util');
var errorHandler = function (err) {
  gutil.log(gutil.colors.red('ERROR', 'Armeiro:less'), err);
  this.emit('end', new gutil.PluginError('Armeiro:less', err, {showStack: false}));
};

gulp.task('compile:less', function () {
  var less = require('gulp-less');
  var merged = require(armeiro.pathModules + 'merge-stream.js')();

  armeiro.less.forEach(function (target) {
    merged.add(
      gulp.src(target.src, target.options)
      .pipe(less().on('error', errorHandler))
      .pipe(gulp.dest(target.dest))
    );
  });

  return merged;
});

gulp.task('compress:less', function () {
  var less = require('gulp-less');
  var cssnano = require('gulp-cssnano');
  var merged = require(armeiro.pathModules + 'merge-stream.js')();

  armeiro.less.forEach(function (target) {
    merged.add(
      gulp.src(target.src, target.options)
      .pipe(less().on('error', errorHandler))
      .pipe(cssnano())
      .pipe(gulp.dest(target.dest))
    );
  });

  return merged;
});

gulp.task('concat:less', function () {
  var concat = require('gulp-concat');
  var less = require('gulp-less');
  var merged = require(armeiro.pathModules + 'merge-stream.js')();

  armeiro.less.forEach(function (target) {
    merged.add(
      gulp.src(target.src, target.options)
      .pipe(concat(target.name))
      .pipe(less().on('error', errorHandler))
      .pipe(gulp.dest(target.dest))
    );
  });

  return merged;
});

gulp.task('zip:less', function () {
  var concat = require('gulp-concat');
  var cssnano = require('gulp-cssnano');
  var less = require('gulp-less');
  var merged = require(armeiro.pathModules + 'merge-stream.js')();

  armeiro.less.forEach(function (target) {
    merged.add(
      gulp.src(target.src, target.options)
      .pipe(concat(target.name))
      .pipe(less().on('error', errorHandler))
      .pipe(cssnano())
      .pipe(gulp.dest(target.dest))
    );
  });

  return merged;
});


gulp.task('watch:less:compile', function () {
  armeiro.less.forEach(function (target) {
    gulp.watch(target.watch, ['compile:less']);
  });
});

gulp.task('watch:less:compress', function () {
  armeiro.less.forEach(function (target) {
    gulp.watch(target.watch, ['compress:less']);
  });
});

gulp.task('watch:less:concat', function () {
  armeiro.less.forEach(function (target) {
    gulp.watch(target.watch, ['concat:less']);
  });
});

gulp.task('watch:less:zip', function () {
  armeiro.less.forEach(function (target) {
    gulp.watch(target.watch, ['zip:less']);
  });
});
