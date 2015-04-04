var gulp = require('gulp');
var gulpPlugins = require('auto-plug')('gulp');
var jade = require('jade');

gulp.task('default', ['deploy']);

gulp.task('build', ['jade', 'sass']);

gulp.task('jade', function() {
    return gulp
        .src('templates/**/*.jade')
        .pipe(gulpPlugins.jade({
            jade: jade,
            pretty: true
            }))
        .pipe(gulp.dest('build/'))
});

gulp.task('sass', function() {
    return gulp.src('scss/**/*.scss')
        .pipe(gulpPlugins.sass())
        .pipe(gulp.dest('build/css'));
});

gulp.task('deploy', ['build'], function() {
    return gulpPlugins.run('surge build acidic-cent.surge.sh').exec();
});
