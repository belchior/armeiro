
var armeiro = require('./armeirorc.js');
var gulp = require('gulp');

gulp.task('copy', function () {
  var cp = require('cp');
  var glob = require('glob');
  var path = require('path');

  if (!Array.isArray(armeiro.copy)) {
    return false;
  }

  return armeiro.copy.forEach(function (item) {
    glob(item.orig, null, function (err, files) {
      if (err) {
        return false;
      }
      files.forEach(function (file) {
        cp.sync(file, item.dest + path.basename(file));
      });
    });
  });

});
