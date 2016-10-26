
var armeiro = require('./armeirorc.js');
var gulp = require('gulp');


gulp.task('sprite', function () {
  var spritesmith = require('gulp.spritesmith');

  armeiro.sprite.forEach(function (target) {
    gulp.src(target.src)
    .pipe(spritesmith({
      algorithm: target.algorithm,
      imgName: target.imgName,
      imgPath: target.imgPath,
      cssName: target.cssName
    }))
    .pipe(gulp.dest(target.dest));
  });
});
