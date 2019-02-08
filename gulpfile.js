const gulp = require('gulp');
const less = require('gulp-less');
const path = require('path');

gulp.task('less', function () {
    return gulp.src('less/style.less')
        .pipe(less())
        .pipe(gulp.dest('css'));
});
// function styles() {
//
// }
// function scripts() {
//
// }
// gulp.task("less", function () {
//     gulp.src("less/style.less")
//         .pipe(less())
//         .pipe(gulp.dest("css"));
// });

//gulp.task('styles', styles);
//gulp.task('scripts', scripts);