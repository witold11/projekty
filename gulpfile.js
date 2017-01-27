var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static Server + watching scss/html files
gulp.task('serve', function() {
    browserSync.init({
        server: "./5"
    });

    gulp.watch("5/*.html").on('change', browserSync.reload);
    gulp.watch("5/*.css").on('change', browserSync.reload);

});

gulp.task('default', ['serve']);