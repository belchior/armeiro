
var armeiro = require('./armeirorc.js');
var gulp = require('gulp');


gulp.task('sprite', function () {
  var merged = require(armeiro.pathModules + 'merge-stream.js')();
  var spritesmith = require('gulp.spritesmith');

  armeiro.sprite.forEach(function (target) {
    merged.add(
      gulp.src(target.src)
      .pipe(spritesmith({
        algorithm: target.algorithm,
        imgName: target.imgName,
        imgPath: target.imgPath,
        cssName: target.cssName
      }))
      .pipe(gulp.dest(target.dest))
    );
  });

  return merged;
});

gulp.task('watch:sprite', function () {
  armeiro.sprite.forEach(function (target) {
    gulp.watch(target.watch, ['sprite']);
  });
});
