const armeiro = require('../index.js');
const gulp = require('gulp');

test('Task browsersync:proxy should be defined', () => {
  expect(gulp.tasks['browsersync:proxy'].name).toBe('browsersync:proxy');
});

test('Task browsersync:server should be defined', () => {
  expect(gulp.tasks['browsersync:server'].name).toBe('browsersync:server');
});
