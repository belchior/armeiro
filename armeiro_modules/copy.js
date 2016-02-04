
var armeiro = require('./armeirorc.js');
var gulp = require('gulp');

gulp.task('copy', function () {
  var cp = require('cp');
  var glob = require('glob');
  var path = require('path');

  if (typeof armeiro.copy.orig === 'string') {
    cp(armeiro.copy.orig, armeiro.copy.dest);

  } else if (Array.isArray(armeiro.copy.orig) && armeiro.copy.orig.length > 0) {
    armeiro.copy.orig.forEach(function (pattern) {
      glob(pattern, null, function (err, files) {
        if (err) {
          return false;
        }
        files.forEach(function (file) {
          cp.sync(file, armeiro.copy.dest + path.basename(file));
        });
      });
    });
  }

});
