'use strict';

var gulp = require('gulp');
var concat = require('gulp-concat');
var coffee = require('gulp-coffee');
var del = require('del');
var glob = require('glob');
var gutil = require('gulp-util');
var imagemin = require('gulp-imagemin');
var imageminOptipng = require('imagemin-optipng');
var less = require('gulp-less');
var minifyCss = require('gulp-minify-css');
var path = require('path');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var spritesmith = require('gulp.spritesmith');
var uglify = require('gulp-uglify');

var armeiro;
try {
  armeiro = require('./package.json').armeiro;
  if (!armeiro) {
    throw new Error();
  }
} catch (e) {
  gutil.log(gutil.colors.red('Armeiro: Não foi possível encontrar as configurações do projeto'));
  gutil.log(
    gutil.colors.red('Armeiro: Consulte a documentação em:'),
    gutil.colors.underline('https://github.com/belchior/armeiro')
  );
}

gulp.task('compile:coffee', function () {
  return gulp.src(armeiro.coffee.orig)
  .pipe(coffee({bare: true}).on('error', console.log))
  .pipe(gulp.dest(armeiro.coffee.dest));
});
gulp.task('compile:less', function () {
  return gulp.src(armeiro.less.orig)
  .pipe(less())
  .pipe(gulp.dest(armeiro.less.dest));
});
gulp.task('compile:sass', function () {
  return gulp.src(armeiro.sass.orig)
  .pipe(sass.sync().on('error', sass.logError))
  .pipe(gulp.dest(armeiro.sass.dest));
});
gulp.task('compile', ['compile:less', 'compile:sass', 'compile:coffee']);

gulp.task('compress:js', function () {
  return gulp.src(armeiro.js.orig)
  .pipe(sourcemaps.init())
  .pipe(uglify())
  .pipe(sourcemaps.write('map'))
  .pipe(gulp.dest(armeiro.js.dest));
});
gulp.task('compress:coffee', function () {
  return gulp.src(armeiro.coffee.orig)
  .pipe(coffee({bare: true}).on('error', console.log))
  .pipe(sourcemaps.init())
  .pipe(uglify())
  .pipe(sourcemaps.write('map'))
  .pipe(gulp.dest(armeiro.coffee.dest));
});
gulp.task('compress:css', function () {
  return gulp.src(armeiro.css.orig)
  .pipe(sourcemaps.init())
  .pipe(minifyCss())
  .pipe(sourcemaps.write('map'))
  .pipe(gulp.dest(armeiro.css.dest));
});
gulp.task('compress:less', function () {
  return gulp.src(armeiro.less.orig)
  .pipe(less())
  .pipe(sourcemaps.init())
  .pipe(minifyCss())
  .pipe(sourcemaps.write('map'))
  .pipe(gulp.dest(armeiro.less.dest));
});
gulp.task('compress:sass', function () {
  return gulp.src(armeiro.sass.orig)
  .pipe(sass.sync().on('error', sass.logError))
  .pipe(sourcemaps.init())
  .pipe(minifyCss())
  .pipe(sourcemaps.write('map'))
  .pipe(gulp.dest(armeiro.sass.dest));
});
gulp.task('compress:images', function () {
  return gulp.src(armeiro.images.orig)
  .pipe(imagemin({
    verbose: true,
    progressive: true,
    svgoPlugins: [{removeViewBox: false}],
    use: [imageminOptipng({optimizationLevel: 3})],
  }))
  .pipe(gulp.dest(armeiro.images.dest));
});
gulp.task('compress', [
  'compress:js', 'compress:coffee', 'compress:css', 'compress:less', 'compress:sass', 'compress:images'
]);

gulp.task('concat:js', function () {
  return gulp.src(armeiro.js.orig)
  .pipe(concat(armeiro.js.mainFile))
  .pipe(gulp.dest(armeiro.js.dest));
});
gulp.task('concat:coffee', function () {
  return gulp.src(armeiro.coffee.orig)
  .pipe(coffee({bare: true}).on('error', console.log))
  .pipe(concat(armeiro.coffee.mainFile))
  .pipe(gulp.dest(armeiro.coffee.dest));
});
gulp.task('concat:css', function () {
  return gulp.src(armeiro.css.orig)
  .pipe(concat(armeiro.css.mainFile))
  .pipe(gulp.dest(armeiro.css.dest));
});
gulp.task('concat:less', function () {
  return gulp.src(armeiro.less.orig)
  .pipe(less())
  .pipe(concat(armeiro.less.mainFile))
  .pipe(gulp.dest(armeiro.less.dest));
});
gulp.task('concat:sass', function () {
  return gulp.src(armeiro.sass.orig)
  .pipe(sass.sync().on('error', sass.logError))
  .pipe(concat(armeiro.sass.mainFile))
  .pipe(gulp.dest(armeiro.sass.dest));
});
gulp.task('concat', ['concat:js', 'concat:coffee', 'concat:css', 'concat:less', 'concat:sass']);

gulp.task('sprite', function () {
  var spriteData = gulp.src(armeiro.sprite.orig)
  .pipe(spritesmith({
    imgName: armeiro.sprite.name,
    cssName: armeiro.sprite.cssName
  }));
  return spriteData.pipe(gulp.dest(armeiro.sprite.dest));
});

gulp.task('clear:js', function () {
  deleteFiles({
    orig: armeiro.js.orig,
    dest: armeiro.js.dest,
    ext: '.js',
    extDest: '.js'
  });
  deleteFiles({
    orig: armeiro.js.orig,
    dest: armeiro.js.dest + 'map/',
    ext: '.js',
    extDest: '.js.map'
  });
});
gulp.task('clear:coffee', function () {
  deleteFiles({
    orig: armeiro.coffee.orig,
    dest: armeiro.coffee.dest,
    ext: '.coffee',
    extDest: '.js'
  });
  deleteFiles({
    orig: armeiro.coffee.orig,
    dest: armeiro.coffee.dest + 'map/',
    ext: '.coffee',
    extDest: '.js.map'
  });
});
gulp.task('clear:css', function () {
  deleteFiles({
    orig: armeiro.css.orig,
    dest: armeiro.css.dest,
    ext: '.css',
    extDest: '.css'
  });
  deleteFiles({
    orig: armeiro.css.orig,
    dest: armeiro.css.dest + 'map/',
    ext: '.css',
    extDest: '.css.map'
  });
});
gulp.task('clear:less', function () {
  deleteFiles({
    orig: armeiro.less.orig,
    dest: armeiro.less.dest,
    ext: '.less',
    extDest: '.css'
  });
  deleteFiles({
    orig: armeiro.less.orig,
    dest: armeiro.less.dest + 'map/',
    ext: '.less',
    extDest: '.css.map'
  });
});
gulp.task('clear:sass', function () {
  deleteFiles({
    orig: armeiro.sass.orig,
    dest: armeiro.sass.dest,
    ext: '.scss',
    extDest: '.css'
  });
  deleteFiles({
    orig: armeiro.sass.orig,
    dest: armeiro.sass.dest + 'map/',
    ext: '.sass',
    extDest: '.css.map'
  });
  deleteFiles({
    orig: armeiro.sass.orig,
    dest: armeiro.sass.dest,
    ext: '.sass',
    extDest: '.css'
  });
  deleteFiles({
    orig: armeiro.sass.orig,
    dest: armeiro.sass.dest + 'map/',
    ext: '.scss',
    extDest: '.css.map'
  });
});
gulp.task('clear:images', function () {
  deleteFiles({
    orig: armeiro.images.orig,
    dest: armeiro.images.dest,
    ext: '.gif',
    extDest: '.gif'
  });
  deleteFiles({
    orig: armeiro.images.orig,
    dest: armeiro.images.dest,
    ext: '.jpeg',
    extDest: '.jpeg'
  });
  deleteFiles({
    orig: armeiro.images.orig,
    dest: armeiro.images.dest,
    ext: '.jpg',
    extDest: '.jpg'
  });
  deleteFiles({
    orig: armeiro.images.orig,
    dest: armeiro.images.dest,
    ext: '.png',
    extDest: '.png'
  });
});
gulp.task('clear:sprite', function () {
  del([
    armeiro.sprite.dest + armeiro.sprite.name,
    armeiro.sprite.dest + armeiro.sprite.cssName
  ]);
});
gulp.task('clear', [
  'clear:js', 'clear:coffee', 'clear:css', 'clear:less', 'clear:sass', 'clear:images', 'clear:sprite'
]);

gulp.task('watch:coffee', function () {
  return gulp.watch(armeiro.coffee.orig, ['compile:coffee']);
});
gulp.task('watch:less', function () {
  return gulp.watch(armeiro.less.orig, ['compile:less']);
});
gulp.task('watch:sass', function () {
  return gulp.watch(armeiro.sass.orig, ['compile:sass']);
});
gulp.task('watch:images', function () {
  return gulp.watch(armeiro.images.orig, ['compress:images']);
});
gulp.task('watch:sprite', function () {
  return gulp.watch(armeiro.sprite.orig, ['sprite']);
});

gulp.task('help', function () {
  var doc = '\n';
  doc += 'usage: gulp [command]\n';
  doc += '            [command]:[option]\n\n';

  doc += '  command - compile, concat, compress, sprite, watch, clear, help\n';
  doc += '  option  - js, css, coffee, less, sass, images, sprite\n\n';

  doc += 'compile: Compila arquivos baseado nas seguintes opções\n';
  doc += '  coffee, less, sass\n\n';

  doc += 'concat: Junta o conteúdo de todos os arquivos em apenas um, baseado nas seguintes opções.\n';
  doc += '  js, css, coffee, less, sass\n';
  doc += '  Note que caso seja necessário os arquivos seram compilado antes de serem unidos.\n\n';

  doc += 'compress: Comprime arquivos baseado nas seguintes opções\n';
  doc += '  js, css, coffee, less, sass, images\n\n';

  doc += 'sprite: Gera sprite. Não tem opções\n\n';

  doc += 'watch: Permanece escutando alterações em arquivos e executa um commando baseado nas seguintes opções\n';
  doc += '  coffee (compile),\n';
  doc += '  less (compile),\n';
  doc += '  sass (compile),\n';
  doc += '  images (compress),\n';
  doc += '  sprite (sprite)\n\n';

  doc += 'clear: Remove todos arquivos de um diretório baseado nas seguintes opções\n';
  doc += '  js, css, coffee, less, sass, images, sprite\n';
  doc += '  Note que clear:[option] ira remover os arquivos do tipo [option]';
  doc += ' contidos no diretório armeiro.[option].dest\n\n';

  doc += 'help: Imprime a lista de comandos\n';

  console.log(doc);
});

gulp.task('default', ['help']);

function deleteFiles(obj) {
  var options = {};
  var cb = function (err, files) {
    if (err) {
      return gutil.log(gutil.colors.red('Armeiro: Arquivos não encontrados\n' + err));
    }
    files = files.map(function (file) {
      return obj.dest + path.basename(file, obj.ext) + obj.extDest;
    });
    del(files);
  };
  if (typeof obj.orig === 'string') {
    glob(obj.orig, options, cb);

  } else if (Array.isArray(obj.orig) && obj.orig.length > 0) {
    obj.orig.forEach(function (pattern) {
      glob(pattern, options, cb);
    });
  }
}
