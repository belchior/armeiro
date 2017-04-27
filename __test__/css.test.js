const armeiro = require('../index.js');
const gulp = require('gulp');

test('Task compress:css should be defined', () => {
  expect(gulp.tasks['compress:css'].name).toBe('compress:css');
});

test('Task concat:css should be defined', () => {
  expect(gulp.tasks['concat:css'].name).toBe('concat:css');
});

test('Task zip:css should be defined', () => {
  expect(gulp.tasks['zip:css'].name).toBe('zip:css');
});

test('Task watch:css:compress should be defined', () => {
  expect(gulp.tasks['watch:css:compress'].name).toBe('watch:css:compress');
});

test('Task watch:css:concat should be defined', () => {
  expect(gulp.tasks['watch:css:concat'].name).toBe('watch:css:concat');
});

test('Task watch:css:zip should be defined', () => {
  expect(gulp.tasks['watch:css:zip'].name).toBe('watch:css:zip');
});
