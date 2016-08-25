// ==== WATCH ==== //

import gulp from 'gulp';
import loadPlugins from 'gulp-load-plugins';
import { watch as config } from '../../gulpconfig';

const plugins = loadPlugins({ camelize: true });

gulp.task('watch', [], function() {
  gulp.watch(config.src.styles, ['styles']);
  gulp.watch(config.src.scripts, ['scripts']);
  gulp.watch(config.src.images, ['images']);
  gulp.watch(config.src.theme, ['theme']);
});
