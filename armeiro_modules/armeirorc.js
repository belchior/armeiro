
var armeiro;
var gutil = require('gulp-util');
var fs = require('fs');
var path = require('path');
var projectRoot = path.resolve(__dirname, '../../') + '/';

try {
  armeiro = fs.readFileSync(projectRoot + '.armeirorc', 'utf-8');
  armeiro = addWatch(JSON.parse(armeiro));
} catch (e) {
  armeiro = require(projectRoot + 'package.json').armeiro;
  if (!armeiro) {
    gutil.log(gutil.colors.red('Armeiro: Erro ao carregar as configurações do projeto'));
    gutil.log(
      gutil.colors.red('Armeiro: Consulte a documentação em:'),
      gutil.colors.underline('https://github.com/belchior/armeiro')
    );
    process.exit();
  }
}

armeiro.pathModules = projectRoot + 'armeiro/armeiro_modules/';
module.exports = armeiro;

function addWatch(config) {
  var modules = ['copy', 'image', 'svg', 'css', 'js', 'less', 'sass', 'sprite'];
  modules.forEach(function (mod) {
    if (!config[mod] || !Array.isArray(config[mod])) {
      return;
    }
    config[mod].forEach(function (configMod) {
      configMod.watch = configMod.watch || configMod.src;
    });
  });
  return config;
}
