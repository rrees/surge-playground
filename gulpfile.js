var gulp = require('gulp');
var gulpPlugins = require('auto-plug')('gulp');
var jade = require('jade');

gulp.task('default', ['deploy']);

gulp.task('build', function() {
    return gulp
        .src('templates/**/*.jade')
        .pipe(gulpPlugins.jade({
            jade: jade,
            pretty: true
            }))
        .pipe(gulp.dest('build/'))
});

gulp.task('deploy', ['build'], function() {
    return gulpPlugins.run('surge build acidic-cent.surge.sh').exec();
});
