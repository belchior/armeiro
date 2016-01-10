
var armeiro = require('./armeirorc.js');
var gulp = require('gulp');

gulp.task('doc:help', function () {
  var doc = '\n';
  doc += '# documentation\n';
  doc += 'gulp doc\n';
  doc += '\n';
  doc += '# compile\n';
  doc += 'gulp compile:coffee\n';
  doc += 'gulp compile:less\n';
  doc += 'gulp compile: sass\n';
  doc += '\n';
  doc += '# compress\n';
  doc += 'gulp compress:coffee\n';
  doc += 'gulp compress:images\n';
  doc += 'gulp compress:svg\n';
  doc += 'gulp compress:css\n';
  doc += 'gulp compress:js\n';
  doc += 'gulp compress:less\n';
  doc += 'gulp compress:sass\n';
  doc += '\n';
  doc += '# concat\n';
  doc += 'gulp concat:coffee\n';
  doc += 'gulp concat:css\n';
  doc += 'gulp concat:js\n';
  doc += 'gulp concat:less\n';
  doc += 'gulp concat:sass\n';
  doc += '\n';
  doc += '# delete\n';
  doc += 'gulp delete:coffee\n';
  doc += 'gulp delete:images\n';
  doc += 'gulp delete:svg\n';
  doc += 'gulp delete:css\n';
  doc += 'gulp delete:js\n';
  doc += 'gulp delete:less\n';
  doc += 'gulp delete:sass\n';
  doc += '\n';
  doc += '# watch\n';
  doc += 'gulp watch:[module]:build\n';
  doc += 'gulp watch:[module]:compress\n';
  doc += 'gulp watch:[module]:concat\n';

  console.log(doc);
});

gulp.task('doc', ['doc:help']);
