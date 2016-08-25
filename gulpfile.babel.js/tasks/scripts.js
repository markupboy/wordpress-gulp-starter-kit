// ==== SCRIPTS ==== //

import gulp from 'gulp';
import loadPlugins from 'gulp-load-plugins';
import util from 'gulp-util';
import merge from 'merge-stream';
import { scripts as config } from '../../gulpconfig';
import path from 'path';
import rollupIncludePaths from 'rollup-plugin-includepaths';

const plugins = loadPlugins({ camelize: true });

var includePathOptions = {
    paths: ['src/js']
};

// Check core scripts for errors
gulp.task('scripts-lint', function() {
  return gulp.src(config.lint.src)
  .pipe(plugins.jshint())
  .pipe(plugins.jshint.reporter('default')); // No need to pipe this anywhere
});

// Generate script bundles as defined in the configuration file
// Adapted from https://github.com/gulpjs/gulp/blob/master/docs/recipes/running-task-steps-per-folder.md
gulp.task('scripts-bundle', function(){
  return gulp.src('./src/**/*.js')
    .pipe(plugins.rollup({
      entry: './src/js/index.js',
      sourceMap: true,
      plugins: [
        rollupIncludePaths(includePathOptions)
      ]
    }))
    .pipe(plugins.babel())
    .on('error', util.log)
    .pipe(plugins.rename('bundle.js'))
    .pipe(plugins.sourcemaps.write('.'))
    .pipe(gulp.dest('build/js'));
});

// Minify scripts in place
gulp.task('scripts-minify', ['scripts-bundle'], function(){
  return gulp.src(config.minify.src)
  .pipe(plugins.sourcemaps.init())
  .pipe(plugins.uglify(config.minify.uglify))
  .pipe(plugins.sourcemaps.write('./'))
  .pipe(gulp.dest(config.minify.dest));
});

// Master script task; lint -> bundle -> minify
gulp.task('scripts', ['scripts-minify']);
