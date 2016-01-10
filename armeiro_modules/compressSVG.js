
var armeiro = require('./armeirorc.js');
// var deleteFiles = require('./deleteFiles.js');
var gulp = require('gulp');
// var imageminSvgo = require('imagemin-svgo');

gulp.task('compress:svg', function () {
  var imageminSvgo = require('imagemin-svgo');

  return gulp.src(armeiro.svg.orig)
  .pipe(imageminSvgo()())
  .pipe(gulp.dest(armeiro.svg.dest));
});

gulp.task('delete:svg', function () {
  var deleteFiles = require('./deleteFiles.js');

  deleteFiles({
    orig: armeiro.svg.orig,
    dest: armeiro.svg.dest,
    extDest: '.svg'
  });
});

gulp.task('watch:svg', function () {
  return gulp.watch(armeiro.svg.orig, ['compress:svg']);
});
