const gulp = require('gulp'),
    babel = require('gulp-babel'),
    browserify = require('gulp-browserify'),
    sass = require('gulp-sass');

gulp.task('build', () => {
    gulp.src('app/index.html').pipe(gulp.dest('views'));

    gulp.src('app/styles.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('views'));

    gulp.src('app/stylesMobile.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(gulp.dest('views'));

    gulp.src('app/script.js')
        .pipe(babel({presets: ['es2015']}))
        .pipe(browserify({}))
        .pipe(gulp.dest('views'));

     console.log('Frontend built');
});