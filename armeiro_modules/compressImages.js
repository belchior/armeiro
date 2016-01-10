
var armeiro = require('./armeirorc.js');
// var deleteFiles = require('./deleteFiles.js');
var gulp = require('gulp');
// var imagemin = require('gulp-imagemin');
// var imageminOptipng = require('imagemin-optipng');

gulp.task('compress:images', function () {
  var imagemin = require('gulp-imagemin');
  var imageminOptipng = require('imagemin-optipng');

  return gulp.src(armeiro.images.orig)
  .pipe(imagemin({
    verbose: true,
    progressive: true,
    use: [imageminOptipng({optimizationLevel: 3})],
  }))
  .pipe(gulp.dest(armeiro.images.dest));
});

gulp.task('delete:images', function () {
  var deleteFiles = require('./deleteFiles.js');
  
  deleteFiles({
    orig: armeiro.images.orig,
    dest: armeiro.images.dest,
    extDest: '.gif'
  });
  deleteFiles({
    orig: armeiro.images.orig,
    dest: armeiro.images.dest,
    extDest: '.jpeg'
  });
  deleteFiles({
    orig: armeiro.images.orig,
    dest: armeiro.images.dest,
    extDest: '.jpg'
  });
  deleteFiles({
    orig: armeiro.images.orig,
    dest: armeiro.images.dest,
    extDest: '.png'
  });
});

gulp.task('watch:images', function () {
  return gulp.watch(armeiro.images.orig, ['compress:images']);
});
