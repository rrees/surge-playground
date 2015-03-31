var gulp = require('gulp');
var gulpPlugins = require('auto-plug')('gulp');
var jade = require('jade');

gulp.task('default', function() {
    return gulp
        .src('templates/**/*.jade')
        .pipe(gulpPlugins.jade({
            jade: jade,
            pretty: true
            }))
        .pipe(gulp.dest('build/'))
});
