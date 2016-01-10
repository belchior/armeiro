
var armeiro = require('./armeirorc.js');
// var del = require('del');
var gulp = require('gulp');
// var spritesmith = require('gulp.spritesmith');

gulp.task('delete:sprite', function () {
  var del = require('del');

  del([
    armeiro.sprite.dest + armeiro.sprite.name,
    armeiro.sprite.dest + armeiro.sprite.cssName
  ]);
});

gulp.task('build:sprite', function () {
  var spritesmith = require('gulp.spritesmith');

  var spriteData = gulp.src(armeiro.sprite.orig)
  .pipe(spritesmith({
    imgName: armeiro.sprite.name,
    cssName: armeiro.sprite.cssName
  }));
  return spriteData.pipe(gulp.dest(armeiro.sprite.dest));
});
