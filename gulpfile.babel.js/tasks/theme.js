// ==== THEME ==== //

import gulp from 'gulp';
import loadPlugins from 'gulp-load-plugins';
import { theme as config } from '../../gulpconfig';

const plugins = loadPlugins({ camelize: true });

// Copy PHP source files to the `build` folder
gulp.task('theme-php', function() {
  return gulp.src(config.php.src)
  .pipe(plugins.changed(config.php.dest))
  .pipe(gulp.dest(config.php.dest));
});

// All the theme tasks in one
gulp.task('theme', ['theme-php']);
