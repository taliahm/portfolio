const gulp = require('gulp');
const babel = require('babelify');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const buffer = require('vinyl-buffer');
const browserSync = require('browser-sync');
const reload = browserSync.reload;
const notify = require('gulp-notify');
const plumber = require('gulp-plumber');
const stylus = require('gulp-stylus');


gulp.task('styles', ()=> {
    return gulp.src('./src/styles/**/*.styl')
        .pipe(stylus()
        .on('error',notify.onError({
            message: "Error: <%= error.message %>",
            title: 'Error in CSS 😩'
        })))
        .pipe(gulp.dest('./public/styles/'))
        
    });

gulp.task('js', () => {
    browserify('src/app.js')
        .transform('babelify', {
            presets: ['es2015','react']
        })
        .bundle()
        .on('error',notify.onError({
            message: "Error: <%= error.message %>",
            title: 'Error in JS 💀'
        }))
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(gulp.dest('public/'))
        .pipe(reload({stream:true}));
});

gulp.task('bs', () => {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
});


gulp.task('default', ['js','bs', 'styles'], () => {
    gulp.watch('src/styles/**/*.styl', ['styles']);
    gulp.watch('src/**/*.js',['js']);
    gulp.watch('src/styles/**/*.styl',reload);
    gulp.watch('*.html', reload);
});