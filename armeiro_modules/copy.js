
var armeiro = require('./armeirorc.js');
var gulp = require('gulp');

gulp.task('copy', function () {
  var cp = require('cp');
  var glob = require('glob');
  var gutil = require('gulp-util');
  var fs = require('fs');
  var path = require('path');

  if (!Array.isArray(armeiro.copy)) {
    gutil.log(gutil.colors.red('Armeiro: O atributo copy precisa ser um array'));
    gutil.log(
      gutil.colors.red('Armeiro: Consulte a documentação em:'),
      gutil.colors.underline('https://github.com/belchior/armeiro')
    );
    return false;
  }

  return armeiro.copy.forEach(loadOriginFile);

  function loadOriginFile(item) {
    glob(item.orig, null, function (err, files) {
      if (err) {
        console.error(err);
        return false;
      }
      files.forEach(function (orig) {
        copyFile(orig, item.dest);
      });
    });
  }

  function copyFile(orig, dest) {
    fs.stat(dest, function (statError, stat) {
      if (statError) {
        if (lookLikeFile(dest)) {
          mkdirp(path.dirname(dest), function () {
            cp.sync(orig, dest);
          });
        } else if (lookLikeDir(dest)) {
          mkdirp(dest, function () {
            cp.sync(orig, path.join(dest, path.basename(orig)));
          });
        }
        return;
      }
      if (stat.isDirectory()) {
        dest += path.basename(orig);
      }
      cp.sync(orig, dest);
    });
  }

  function lookLikeDir(pathName) {
    return (
      typeof pathName === 'string' &&
      pathName.length > 0 &&
      pathName[pathName.length-1].match(/[\\/]/)
    ) || !path.extname(dest) ? true : false;
  }

  function lookLikeFile(pathName) {
    var ext = [
      '.html', '.css', '.js', '.svg', '.json',
      '.jpg', '.jpeg', '.png', '.gif',
      '.markdown', '.md',
      '.coffee', '.less', '.sass', '.scss'
    ];
    return !lookLikeDir() &&
      path.extname(dest) &&
      ext.indexOf(path.extname(dest)) >= 0
      ? true : false;
  }

});
