const armeiro = require('../index.js');
const gulp = require('gulp');

test('Task compile:sass should be defined', () => {
  expect(gulp.tasks['compile:sass'].name).toBe('compile:sass');
});

test('Task compress:sass should be defined', () => {
  expect(gulp.tasks['compress:sass'].name).toBe('compress:sass');
});

test('Task concat:sass should be defined', () => {
  expect(gulp.tasks['concat:sass'].name).toBe('concat:sass');
});

test('Task zip:sass should be defined', () => {
  expect(gulp.tasks['zip:sass'].name).toBe('zip:sass');
});

test('Task watch:sass:compile should be defined', () => {
  expect(gulp.tasks['watch:sass:compile'].name).toBe('watch:sass:compile');
});

test('Task watch:sass:compress should be defined', () => {
  expect(gulp.tasks['watch:sass:compress'].name).toBe('watch:sass:compress');
});

test('Task watch:sass:concat should be defined', () => {
  expect(gulp.tasks['watch:sass:concat'].name).toBe('watch:sass:concat');
});

test('Task watch:sass:zip should be defined', () => {
  expect(gulp.tasks['watch:sass:zip'].name).toBe('watch:sass:zip');
});
