const armeiro = require('../index.js');
const gulp = require('gulp');

test('Task sprite should be defined', () => {
  expect(gulp.tasks['sprite'].name).toBe('sprite');
});

test('Task watch:sprite should be defined', () => {
  expect(gulp.tasks['watch:sprite'].name).toBe('watch:sprite');
});
