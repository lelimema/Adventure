var gulp        = require('gulp');
var sass        = require('gulp-sass');
var uglify      = require('gulp-uglify');
var concat      = require('gulp-concat');
var imagemin    = require('gulp-imagemin');

// copy all HTML files
gulp.task('copyHtml', function (){
    gulp.src('*.html')
        .pipe(gulp.dest('dist'));
});

// gulp sass
gulp.task('sass', function () {
    return gulp.src('scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('dist/css'));
});

// gulp scripts
// minify and concat all JS files into one
gulp.task('scripts', function(){
    gulp.src('js/*.js')
        .pipe(concat('main.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

// gulp imagemin
// minify images
gulp.task('imageMin', () =>
    gulp.src('img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'))
);

// gulp watch
// Starts watcher. Watcher runs gulp sass task on changes
gulp.task('watch', function () {
    // watch sass file
    gulp.watch('./scss/**/*.scss', gulp.series('sass'));

    // watch scripts file
    gulp.watch('./js/**/*.js', gulp.series('scripts'));
});

// gulp default
//gulp.task('default', gulp.parallel(['copyHtml', 'sass', 'scripts', 'imageMin']));
