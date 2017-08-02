'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const browserSync = require('browser-sync');
const autoprefixer = require('gulp-autoprefixer');

// launch server
gulp.task('browser-sync', ['styles'], function() {
  browserSync.init({
    server: './public',
    port: 3000,
  });
});

// compile files from SCSS
gulp.task('styles', function () {
  return gulp.src('./public/scss/main.scss')
  .pipe(sass({
    includePaths: ['scss'],
    onError: browserSync.notify
  }))
  .pipe(autoprefixer(['last 2 versions'], { cascade: true }))
  .pipe(cleanCSS())
  .pipe(gulp.dest('./public/css/'))
  .pipe(browserSync.reload({stream:true}))
});

//reload when html changes
gulp.task('html', function() {
  browserSync.reload();
});

gulp.task('watch', ['styles', 'html'], function() {
  gulp.watch('./public/scss/main.scss', ['styles']);
  gulp.watch(['index.html'], ['html']);
});

gulp.task('dev', ['browser-sync', 'watch']);
