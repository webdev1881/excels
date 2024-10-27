module.exports = function() {
    $.gulp.task('pug', ()=>  {


        let datas = {
            nav: JSON.parse($.fs.readFileSync('./data/navigation.json', 'utf8')),
            service: JSON.parse($.fs.readFileSync('./data/service.json', 'utf8')),
        }



        return $.gulp.src('./dev/pug/pages/*.pug')
            .pipe($.gp.pug({
                locals : datas,
                pretty: true
            }))
            .on('error', $.gp.notify.onError(function(error) {
                return {
                    title: 'Pug',
                    message: error.message
                };
            }))
            .pipe($.gulp.dest('./build/'))
            .on('end', $.browserSync.reload);
    });
};
