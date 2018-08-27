/**
 * Created by Pradip on 5/11/2016.
 * Modified by Jake on 8/26/18
 */

var BUILD = false;
var DEV = false;
var PROD = true;
// Ends configuration setting

if (BUILD && DEV) {
    throw "Cannot have different environment true at same time";
}

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    sassGlob = require('gulp-sass-glob'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    minify = require('gulp-minify'),
    browserSync = require('browser-sync').create(),
    exec = require('child_process').exec;

var config = {
    sassPath: './source/css',
    bootstrapPath: './source/node_modules/bootstrap/scss',
    nodeModules: './source/node_modules',
    sassWebFontPath: './node_modules/sass-web-fonts',
    prodFolder: './pl/public'
};

var pages = {
    home: './pl/public/patterns/04-pages-home/04-pages-home.html'
}

var sassOption = {
    errLogToConsole: true,
    // Default environment is dev
    outputStyle: BUILD ? 'compressed' : 'expanded',
    includePaths: [
        config.sassWebFontPath + '/_web-fonts.scss',
        config.sassPath,
        config.nodeModules]
};

gulp.task('sass', function() {
  return gulp.src(config.sassPath + '/**/style.scss')
            .pipe(sassGlob())
            .pipe(concat('style.css'))
            .pipe(rename({
                basename: 'style',
                extname: '.css'
            }))
            .pipe(sourcemaps.init())
            .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
            .pipe(sourcemaps.write('./source/maps'))
            .pipe(gulp.dest('./source/css'))
            .pipe(browserSync.stream());
});

gulp.task('pl', ['sass'], function (cb) {
  exec('php ./pl/core/console --generate', function (err, stdout, stderr) {
    browserSync.reload();
    cb(err);
  });
});

gulp.task('export', ['sass', 'pl'], function (cb) {
    exec('php ./pl/core/console --export', function (err, stdout, stderr) {
      console.log("Patterns Exported Successfully")
      cb(err);
    });
  });

// Start Static Server
gulp.task('serve', ['sass', 'pl', 'export'], function() {
  browserSync.init({
    server: {
      baseDir: './',
    },
    startPath: 'pl/public/',
    open: true
  });
});

// Watching Source Files
gulp.task('source:watch', ['sass', 'pl'], function () {
    gulp.watch('./source/**/*.twig', ['pl','export']);
});

gulp.task('default', ['source:watch', 'serve']);

