const armeiro = require('../index.js');
const gulp = require('gulp');

test('Task compress:image should be defined', () => {
  expect(gulp.tasks['compress:image'].name).toBe('compress:image');
});

test('Task watch:image:compress should be defined', () => {
  expect(gulp.tasks['watch:image:compress'].name).toBe('watch:image:compress');
});
