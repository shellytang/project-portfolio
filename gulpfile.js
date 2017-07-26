'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
// const rename = require('gulp-rename');
// const uglify = require('gulp-uglify');
const browserSync = require('browser-sync');
const autoprefixer = require('gulp-autoprefixer');

// launch server
gulp.task('browser-sync', ['styles', 'scripts'], function() {
  browserSync.init({
    server: './',
    port: 3000,
  });
});

// compile files from SCSS
gulp.task('styles', function () {
  return gulp.src('./scss/main.scss')
  .pipe(sass({
    includePaths: ['scss'],
    onError: browserSync.notify
  }))
  .pipe(autoprefixer(['last 2 versions'], { cascade: true }))
  .pipe(cleanCSS())
  .pipe(gulp.dest('./css/'))
  .pipe(browserSync.reload({stream:true}))
});

//script paths - might not be necessary
gulp.task('scripts', function() {
  return gulp.src('./js/**/*.js')
      .pipe(concat('main.js'))
      .pipe(gulp.dest('./'))
      // .pipe(rename('main.min.js'))
      // .pipe(uglify())
      // .pipe(gulp.dest('./'))
      .pipe(browserSync.reload({stream:true}));
});

//reload when html changes
gulp.task('html', function() {
  browserSync.reload();
});

gulp.task('watch', ['scripts', 'styles', 'html'], function() {
  gulp.watch('./js/**/*.js', ['scripts']);
  gulp.watch('./scss/main.scss', ['styles']);
  gulp.watch(['index.html'], ['html']);
});

gulp.task('dev', ['browser-sync', 'watch']);
