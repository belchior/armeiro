
var armeiro = require('./armeirorc.js');
var gulp = require('gulp');

gulp.task('build:coffee', function () {
  var coffee = require('gulp-coffee');
  var concat = require('gulp-concat');
  var sourcemaps = require('gulp-sourcemaps');
  var uglify = require('gulp-uglify');

  return gulp.src(armeiro.coffeeScript.orig)
  .pipe(sourcemaps.init())
  .pipe(coffee({bare: true}).on('error', console.log))
  .pipe(concat(armeiro.coffeeScript.mainFileCompressed))
  .pipe(uglify())
  .pipe(sourcemaps.write('map'))
  .pipe(gulp.dest(armeiro.coffeeScript.dest));
});

gulp.task('compile:coffee', function () {
  var coffee = require('gulp-coffee');
  var sourcemaps = require('gulp-sourcemaps');

  return gulp.src(armeiro.coffeeScript.orig)
  .pipe(sourcemaps.init())
  .pipe(coffee({bare: true}).on('error', console.log))
  .pipe(sourcemaps.write('map'))
  .pipe(gulp.dest(armeiro.coffeeScript.dest));
});

gulp.task('compress:coffee', function () {
  var coffee = require('gulp-coffee');
  var sourcemaps = require('gulp-sourcemaps');
  var uglify = require('gulp-uglify');

  return gulp.src(armeiro.coffeeScript.orig)
  .pipe(sourcemaps.init())
  .pipe(coffee({bare: true}).on('error', console.log))
  .pipe(uglify())
  .pipe(sourcemaps.write('map'))
  .pipe(gulp.dest(armeiro.coffeeScript.dest));
});

gulp.task('concat:coffee', function () {
  var coffee = require('gulp-coffee');
  var concat = require('gulp-concat');
  var sourcemaps = require('gulp-sourcemaps');

  return gulp.src(armeiro.coffeeScript.orig)
  .pipe(sourcemaps.init())
  .pipe(coffee({bare: true}).on('error', console.log))
  .pipe(concat(armeiro.coffeeScript.mainFile))
  .pipe(sourcemaps.write('map'))
  .pipe(gulp.dest(armeiro.coffeeScript.dest));
});

gulp.task('delete:coffee', function () {
  var deleteFiles = require('./deleteFiles.js');

  deleteFiles({
    orig: armeiro.coffeeScript.orig,
    dest: armeiro.coffeeScript.dest,
    extDest: '.js'
  });
  deleteFiles({
    orig: armeiro.coffeeScript.orig,
    dest: armeiro.coffeeScript.dest + 'map/',
    extDest: '.js.map'
  });
  deleteFiles({
    orig: armeiro.coffeeScript.dest + armeiro.coffeeScript.mainFile,
    dest: armeiro.coffeeScript.dest,
    extDest: '.js'
  });
  deleteFiles({
    orig: armeiro.coffeeScript.dest + armeiro.coffeeScript.mainFileCompressed,
    dest: armeiro.coffeeScript.dest,
    extDest: '.js'
  });
  deleteFiles({
    orig: armeiro.coffeeScript.dest + 'map/' + armeiro.coffeeScript.mainFileCompressed + '.map',
    dest: armeiro.coffeeScript.dest + 'map/',
    extDest: '.map'
  });
});

gulp.task('watch:coffee:build', function () {
  return gulp.watch(armeiro.coffeeScript.orig, ['build:coffee']);
});

gulp.task('watch:coffee:compile', function () {
  return gulp.watch(armeiro.coffeeScript.orig, ['compile:coffee']);
});

gulp.task('watch:coffee:compress', function () {
  return gulp.watch(armeiro.coffeeScript.orig, ['compress:coffee']);
});

gulp.task('watch:coffee:concat', function () {
  return gulp.watch(armeiro.coffeeScript.orig, ['concat:coffee']);
});
