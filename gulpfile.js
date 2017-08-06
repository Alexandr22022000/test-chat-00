const gulp = require('gulp'),
    babel = require('gulp-babel'),
    browserify = require('gulp-browserify');

gulp.task('build', () => {
    gulp.src('views/index.html').pipe(gulp.dest('public'));
    gulp.src('views/styles.css').pipe(gulp.dest('public'));

     gulp.src('views/script.js')
         .pipe(babel({
             presets: ['es2015']
         }))
         .pipe(browserify({}))
         .pipe(gulp.dest('public'));

     console.log('Frontend built');
});