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

var buildPaths = {
    target: './public_html',
    styleGuide: './pl/public/index.html',
    home: './pl/public/patterns/05-prod-index-index/05-prod-index-index.html',
    portfolio: './pl/public/patterns/05-prod-portfolio-portfolio/05-prod-portfolio-portfolio.html',
    feed: './pl/public/patterns/05-prod-feed-feed/05-prod-feed-feed.html',
    skills: './pl/public/patterns/05-prod-skills-skills/05-prod-skills-skills.html',
    education: './pl/public/patterns/05-prod-education-education/05-prod-education-education.html',
    marvel: './pl/public/patterns/05-prod-marvel-marvel/05-prod-marvel-marvel.html',
    ncp: './pl/public/patterns/05-prod-ncp-ncp/05-prod-ncp-ncp.html'
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

gulp.task('js', ['pl'], function(cb) {
    gulp.src('./node_modules/bootstrap/dist/js/bootstrap.min.js')
        .pipe(gulp.dest('./source/js'));
    gulp.src('./node_modules/particlesjs/dist/particles.min.js')
        .pipe(gulp.dest('./source/js'));
    gulp.src('./node_modules/materialize-css/dist/js/materialize.min.js')
        .pipe(gulp.dest('./source/js'));
    gulp.src('./node_modules/progressbar.js/dist/progressbar.min.js')
        .pipe(gulp.dest('./source/js'));

    return gulp.src('./source/_patterns/**/*.js')
        .pipe(concat('script.js'))
        .pipe(minify())
        .pipe(sourcemaps.write('./source/js'))
        .pipe(gulp.dest('./source/js'))
        .pipe(browserSync.stream());
});

gulp.task('build_prod', ['sass', 'js', 'pl'], function (cb) {
    //Pattern Lab and Sass Will be Generated First Based on Dependencies

    // Home Page
    console.log("Starting Home Build...");
    gulp.src(buildPaths.home)
    .pipe(rename({
        basename: 'index',
        extname: '.html'
    }))
    .pipe(gulp.dest(buildPaths.target));
    console.log("Home Build Finished");

    // Portfolio
    console.log("Starting Portfolio Build...");
    gulp.src(buildPaths.portfolio)
    .pipe(rename({
        basename: 'index',
        extname: '.html'
    }))
    .pipe(gulp.dest('./public_html/portfolio'));
    console.log("Portfolio Build Finished");

    // Feed
    console.log("Starting Feed Build...");
    gulp.src(buildPaths.feed)
    .pipe(rename({
        basename: 'index',
        extname: '.html'
    }))
    .pipe(gulp.dest('./public_html/feed'));
    console.log("Feed Build Finished");

    // Skills
    console.log("Starting Skills Build...");
    gulp.src(buildPaths.skills)
    .pipe(rename({
        basename: 'index',
        extname: '.html'
    }))
    .pipe(gulp.dest('./public_html/skills'));
    console.log("Skills Build Finished");

    // Education
    console.log("Starting Education Build...");
    gulp.src(buildPaths.education)
    .pipe(rename({
        basename: 'index',
        extname: '.html'
    }))
    .pipe(gulp.dest('./public_html/education'));
    console.log("Education Build Finished");
    
    // Marvel
    console.log("Starting Marvel Build...");
    gulp.src(buildPaths.marvel)
    .pipe(rename({
        basename: 'index',
        extname: '.html'
    }))
    .pipe(gulp.dest('./public_html/marvel'));
    console.log("Marvel Build Finished");

    // NCP
    console.log("Starting NCP Build...");
    gulp.src(buildPaths.ncp)
    .pipe(rename({
        basename: 'index',
        extname: '.html'
    }))
    .pipe(gulp.dest('./public_html/ncp'));
    console.log("NCP Build Finished");

    // Copy CSS
    console.log("Starting Copy of CSS");
    gulp.src('./source/css/style.css')
        .pipe(gulp.dest('./public_html/css'));
    console.log("Finished Copying CSS");

    // Copy JS
    console.log("Starting Copy of JS");
    gulp.src('./source/js/*.js')
        .pipe(gulp.dest('./public_html/js'));
    console.log("Finished Copying JS");

    // Copy Images
    console.log("Starting Copy of Images");
    gulp.src('./source/assets/**/*')
        .pipe(gulp.dest('./public_html/assets'));
    console.log("Finished Copying Images");
});

// Start Static Server
gulp.task('serve', ['sass', 'pl'], function() {
  browserSync.init({
    server: {
      baseDir: './',
    },
    startPath: 'pl/public/',
    open: true
  });
});

// Watching Source Files
gulp.task('source:watch', ['sass', 'pl', 'js'], function () {
    gulp.watch('./source/_patterns/**/*.twig', ['pl']);
    gulp.watch('./source/_patterns/**/*.scss', ['sass', 'pl']);
    gulp.watch('./source/_patterns/**/*.js', ['pl', 'js']);
});

gulp.task('default', ['source:watch', 'serve']);

