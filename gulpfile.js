var gulp = require('gulp');
var less = require('gulp-less');
var concat = require('gulp-concat');
var minifyCSS = require('gulp-minify-css');
var webserver = require('gulp-webserver');

gulp.task('less', function() {
    gulp.src(['src/less/index.less'])
        .pipe(less())
        .pipe(minifyCSS({
          keepBreaks: true
        }))
        .pipe(concat('css.css'))
        .pipe(gulp.dest('css'))
});

gulp.task('server', function() {
    return gulp.src('.').pipe(webserver({
        livereload: true
    }));
});

gulp.task('watch', function() {
    gulp.watch('src/less/*.less', ['less']);
});

gulp.task('default', ['watch', 'server'])
