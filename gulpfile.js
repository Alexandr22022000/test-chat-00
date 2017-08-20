const gulp = require('gulp'),
    babel = require('gulp-babel'),
    browserify = require('gulp-browserify');

gulp.task('build', () => {
    gulp.src('app/index.html').pipe(gulp.dest('views'));
    gulp.src('app/styles.css').pipe(gulp.dest('views'));
    gulp.src('app/stylesMobile.css').pipe(gulp.dest('views'));

     gulp.src('app/script.js')
         .pipe(babel({
             presets: ['es2015']
         }))
         .pipe(browserify({}))
         .pipe(gulp.dest('views'));

     console.log('Frontend built');
});