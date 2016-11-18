
var armeiro = require('./armeirorc.js');
var gulp = require('gulp');

gulp.task('compress:image', function () {
  var imagemin = require('gulp-imagemin');
  var imageminOptipng = require('imagemin-optipng');
  var merged = require(armeiro.pathModules + 'merge-stream.js')();

  armeiro.image.forEach(function (target) {
    merged.add(
      gulp.src(target.src, target.options)
      .pipe(imagemin({
        verbose: true,
        progressive: true,
        use: [imageminOptipng({optimizationLevel: 3})],
      }))
      .pipe(gulp.dest(target.dest))
    );
  });

  return merged;
});

gulp.task('watch:image:compress', function () {
  armeiro.image.forEach(function (target) {
    gulp.watch(target.watch, ['compress:image']);
  });
});
