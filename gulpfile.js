'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const browserSync = require('browser-sync');
const autoprefixer = require('gulp-autoprefixer');

// Launch server
gulp.task('browser-sync', ['sass', 'scripts'], function() {
  browserSync.init({
    server: './',
    port: 3000,
  });
});

// compile files from scss
gulp.task('styles', function(){
  gulp.src('scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('css/styles.css'))
    .pipe(browserSync.reload({stream:true}));
});

//compile files from js
gulp.task('scripts', function() {
  return gulp.src(['js/*.js'])
  .pipe(concat('main.js'))
  .pipe(gulp.dest('./'))
  .pipe(rename('main.min.js'))
  .pipe(uglify())
  .pipe(gulp.dest('./'))
  .pipe(browserSync.reload({stream:true}));
});

// reload pages with changes
gulp.task('html', function() {
  browserSync.reload();
});

// watch scss, js, and html files for changes & recompile, concat, and/or reload
gulp.task('watch', function () {
  gulp.watch(['scss/*.scss'], ['styles']);
  gulp.watch(['js/*.js'], ['scripts']);
  gulp.watch(['index.html'], ['html']);
});
