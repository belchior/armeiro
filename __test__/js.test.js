const armeiro = require('../index.js');
const gulp = require('gulp');

test('Task compress:js should be defined', () => {
  expect(gulp.tasks['compress:js'].name).toBe('compress:js');
});

test('Task concat:js should be defined', () => {
  expect(gulp.tasks['concat:js'].name).toBe('concat:js');
});

test('Task zip:js should be defined', () => {
  expect(gulp.tasks['zip:js'].name).toBe('zip:js');
});

test('Task watch:js:compress should be defined', () => {
  expect(gulp.tasks['watch:js:compress'].name).toBe('watch:js:compress');
});

test('Task watch:js:concat should be defined', () => {
  expect(gulp.tasks['watch:js:concat'].name).toBe('watch:js:concat');
});

test('Task watch:js:zip should be defined', () => {
  expect(gulp.tasks['watch:js:zip'].name).toBe('watch:js:zip');
});
