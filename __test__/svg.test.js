const armeiro = require('../index.js');
const gulp = require('gulp');

test('Task compress:svg should be defined', () => {
  expect(gulp.tasks['compress:svg'].name).toBe('compress:svg');
});

test('Task watch:svg:compress should be defined', () => {
  expect(gulp.tasks['watch:svg:compress'].name).toBe('watch:svg:compress');
});
