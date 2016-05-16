'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');

gulp.task('default', function () {
  return gulp.src('sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('style'));
});

gulp.task('compress', function() {
  return gulp.src('js/app.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});

gulp.task('watch', function () {
  gulp.watch('sass/**/*.scss', ['default','compress']);
});
