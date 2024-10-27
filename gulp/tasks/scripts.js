module.exports = function() {
    var libs = [
        'dev/static/js/libs/min.js',
        // 'node_modules/jquery-custom/jquery.2/dist/jquery.min.js',
        'node_modules/slick-carousel/slick/slick.min.js',
        'dev/static/js/libs/WOW_scrollSpy.js',

        //'node_modules/bootstrap/dist/js/bootstrap.js',    
    ]
    $.gulp.task('libsJS:dev', () => {
        return $.gulp.src(libs)
        
            .pipe($.gp.concat('libs.min.js'))
            .pipe($.gulp.dest('./build/static/js/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });

    $.gulp.task('libsJS:build', () => {
        return $.gulp.src(libs)
            .pipe($.gp.concat('libs.min.js'))
            .pipe($.gp.uglifyjs())
            .pipe($.gulp.dest('./build/static/js/'));
    });

    $.gulp.task('js:copy', () => {
        return $.gulp.src(['./dev/static/js/*.js',
                           '!./dev/static/js/libs.min.js'])
            .pipe($.gulp.dest('./build/static/js/'))
            .pipe($.browserSync.reload({
                stream: true
            }));
    });
};
