// ==== MAIN ==== //

import gulp from 'gulp';
import loadPlugins from 'gulp-load-plugins';
import { project, utils as config } from '../../gulpconfig';

const plugins = loadPlugins({ camelize: true });

// Default task chain: build -> (livereload or browsersync) -> watch
gulp.task('default', ['watch']);

// One-off setup tasks
gulp.task('setup', ['utils-normalize']);

// Build a working copy of the theme
gulp.task('build', ['images', 'scripts', 'styles', 'theme']);

// Dist task chain: wipe -> build -> clean -> copy -> compress images
// NOTE: this is a resource-intensive task!
gulp.task('dist', ['images-optimize'], function() {
  return gulp.src(config.dist.dest + '/**/*')
    .pipe(plugins.zip(project + '.zip'))
    .pipe(gulp.dest(config.dist.dest));
});
