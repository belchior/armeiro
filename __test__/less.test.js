const armeiro = require('../index.js');
const gulp = require('gulp');

test('Task compile:less should be defined', () => {
  expect(gulp.tasks['compile:less'].name).toBe('compile:less');
});

test('Task compress:less should be defined', () => {
  expect(gulp.tasks['compress:less'].name).toBe('compress:less');
});

test('Task concat:less should be defined', () => {
  expect(gulp.tasks['concat:less'].name).toBe('concat:less');
});

test('Task zip:less should be defined', () => {
  expect(gulp.tasks['zip:less'].name).toBe('zip:less');
});

test('Task watch:less:compile should be defined', () => {
  expect(gulp.tasks['watch:less:compile'].name).toBe('watch:less:compile');
});

test('Task watch:less:compress should be defined', () => {
  expect(gulp.tasks['watch:less:compress'].name).toBe('watch:less:compress');
});

test('Task watch:less:concat should be defined', () => {
  expect(gulp.tasks['watch:less:concat'].name).toBe('watch:less:concat');
});

test('Task watch:less:zip should be defined', () => {
  expect(gulp.tasks['watch:less:zip'].name).toBe('watch:less:zip');
});
