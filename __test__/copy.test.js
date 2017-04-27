const armeiro = require('../index.js');
const gulp = require('gulp');

test('Task copy should be defined', () => {
  expect(gulp.tasks['copy'].name).toBe('copy');
});

test('Task watch:copy should be defined', () => {
  expect(gulp.tasks['watch:copy'].name).toBe('watch:copy');
});
