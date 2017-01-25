var gulp = require('gulp');
var gulpPlugins = require('auto-plug')('gulp');

const jade = require('jade');
const webpack = require('webpack-stream');
const webpackConfig = require('./webpack.config.js')

gulp.task('default', ['deploy']);

gulp.task('build', ['jade', 'sass', 'js']);

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

gulp.task('js', function() {
  return gulp.src('src/index.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('build/js'));
});
