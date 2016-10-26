
var armeiro = require('./armeirorc.js');
var gulp = require('gulp');

gulp.task('compress:image', function () {
  var imagemin = require('gulp-imagemin');
  var imageminOptipng = require('imagemin-optipng');

  armeiro.image.forEach(function (target) {
    gulp.src(target.src)
    .pipe(imagemin({
      verbose: true,
      progressive: true,
      use: [imageminOptipng({optimizationLevel: 3})],
    }))
    .pipe(gulp.dest(target.dest));
  });
});

gulp.task('watch:image', function () {
  armeiro.image.forEach(function (target) {
    target.watch = target.watch || target.src;
    gulp.watch(target.watch, ['compress:image']);
  });
});
