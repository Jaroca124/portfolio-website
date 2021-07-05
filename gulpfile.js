var browserSync = require('browser-sync').create(),
    concat = require('gulp-concat'),
    exec = require('child_process').exec,
    gulp = require('gulp'),
    minify = require('gulp-minify'),
    sass = require('gulp-sass'),
    sassGlob = require('gulp-sass-glob'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require('gulp-rename');

var config = {
    sassPath: './src/css',
    bootstrapPath: './src/node_modules/bootstrap/scss',
    nodeModules: './src/node_modules',
    sassWebFontPath: './node_modules/sass-web-fonts',
    prodFolder: 'public'
};

var buildPaths = {
    target: './dist',
    styleGuide: 'public/index.html',
    home: 'public/patterns/05-prod-index-index/05-prod-index-index.html',
    portfolio: 'public/patterns/05-prod-portfolio-portfolio/05-prod-portfolio-portfolio.html',
    feed: 'public/patterns/05-prod-feed-feed/05-prod-feed-feed.html',
    skills: 'public/patterns/05-prod-skills-skills/05-prod-skills-skills.html',
    education: 'public/patterns/05-prod-education-education/05-prod-education-education.html',
    experience: 'public/patterns/05-prod-experience-experience/05-prod-experience-experience.html',
    marvel: 'public/patterns/05-prod-marvel-marvel/05-prod-marvel-marvel.html',
    ncp: 'public/patterns/05-prod-ncp-ncp/05-prod-ncp-ncp.html',
    vgs: 'public/patterns/05-prod-video-game-series-video-game-series/05-prod-video-game-series-video-game-series.html',
    about: 'public/patterns/05-prod-about-about/05-prod-about-about.html',
    allsafe: 'public/patterns/05-prod-allsafe-allsafe/05-prod-allsafe-allsafe.html'
}

gulp.task('sass', () => {
    return gulp.src(config.sassPath + '/**/style.scss')
        .pipe(sassGlob())
        .pipe(concat('style.css'))
        .pipe(rename({
            basename: 'style',
            extname: '.css'
        }))
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(gulp.dest('./src/css'))
        .pipe(browserSync.stream());
});

gulp.task('pl', (cb) => {
    exec('php core/console --generate', function(err, stdout, stderr) {
        browserSync.reload();
        cb(err);
    });
});

gulp.task('js', () => {
    gulp.src('./node_modules/bootstrap/dist/js/bootstrap.min.js')
        .pipe(gulp.dest('./src/js'));
    gulp.src('./node_modules/particlesjs/dist/particles.min.js')
        .pipe(gulp.dest('./src/js'));
    gulp.src('./node_modules/materialize-css/dist/js/materialize.min.js')
        .pipe(gulp.dest('./src/js'));

    return gulp.src('./src/_patterns/**/*.js')
        .pipe(concat('script.js'))
        .pipe(minify())
        .pipe(gulp.dest('./src/js'))
        .pipe(browserSync.stream());
});

gulp.task('moveAssets', () => {
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
        .pipe(gulp.dest('./dist/portfolio'));
    console.log("Portfolio Build Finished");

    // Feed
    console.log("Starting Feed Build...");
    gulp.src(buildPaths.feed)
        .pipe(rename({
            basename: 'index',
            extname: '.html'
        }))
        .pipe(gulp.dest('./dist/feed'));
    console.log("Feed Build Finished");

    // Skills
    console.log("Starting Skills Build...");
    gulp.src(buildPaths.skills)
        .pipe(rename({
            basename: 'index',
            extname: '.html'
        }))
        .pipe(gulp.dest('./dist/skills'));
    console.log("Skills Build Finished");

    // Education
    console.log("Starting Education Build...");
    gulp.src(buildPaths.education)
        .pipe(rename({
            basename: 'index',
            extname: '.html'
        }))
        .pipe(gulp.dest('./dist/education'));
    console.log("Education Build Finished");

    // Experience
    console.log("Starting Experience Build...");
    gulp.src(buildPaths.experience)
        .pipe(rename({
            basename: 'index',
            extname: '.html'
        }))
        .pipe(gulp.dest('./dist/experience'));
    console.log("Experience Build Finished");

    // About
    console.log("Starting About Build...");
    gulp.src(buildPaths.about)
        .pipe(rename({
            basename: 'index',
            extname: '.html'
        }))
        .pipe(gulp.dest('./dist/about'));
    console.log("About Build Finished");

    // Marvel
    console.log("Starting Marvel Build...");
    gulp.src(buildPaths.marvel)
        .pipe(rename({
            basename: 'index',
            extname: '.html'
        }))
        .pipe(gulp.dest('./dist/marvel'));
    console.log("Marvel Build Finished");

    // VGS
    console.log("Starting VGS Build...");
    gulp.src(buildPaths.vgs)
        .pipe(rename({
            basename: 'index',
            extname: '.html'
        }))
        .pipe(gulp.dest('./dist/video-game-series'));
    console.log("VGS Build Finished");

    // NCP
    console.log("Starting NCP Build...");
    gulp.src(buildPaths.ncp)
        .pipe(rename({
            basename: 'index',
            extname: '.html'
        }))
        .pipe(gulp.dest('./dist/ncp'));
    console.log("NCP Build Finished");
    
    // Allsafe
    console.log("Starting Alsafe Build...");
    gulp.src(buildPaths.allsafe)
        .pipe(rename({
            basename: 'index',
            extname: '.html'
        }))
        .pipe(gulp.dest('./dist/allsafe'));
    console.log("Allsafe Build Finished");

    // Sitemap
    gulp.src('./src/sitemap.xml').pipe(gulp.dest('./dist/'));

    // Copy CSS
    console.log("Starting Copy of CSS");
    gulp.src('./src/css/style.css')
        .pipe(gulp.dest('./dist/css'));
    console.log("Finished Copying CSS");

    // Copy JS
    console.log("Starting Copy of JS");
    gulp.src('./src/js/*.js')
        .pipe(gulp.dest('./dist/js'));
    console.log("Finished Copying JS");

    // Copy Images
    console.log("Starting Copy of Images");
    gulp.src('./src/assets/**/*')
        .pipe(gulp.dest('./dist/assets'));
    console.log("Finished Copying Images");

    // Copy Fonts
    console.log("Starting Copy of Fonts");
    return gulp.src('./src/webfonts/**/*')
        .pipe(gulp.dest('./dist/webfonts'));
});

gulp.task('build', gulp.series('sass', 'js', 'pl', 'moveAssets'));

// Start Static Server
gulp.task('serve', () => {
    browserSync.init({
        server: {
            baseDir: './',
        },
        startPath: 'public/',
        open: true
    });

    gulp.watch('./src/_patterns/**/*.twig', gulp.series('sass','js','pl'));
    gulp.watch('./src/_patterns/**/*.scss', gulp.series('sass','js','pl'));
    gulp.watch('./src/css/scss/**/*.scss', gulp.series('sass','js','pl'));
    gulp.watch('./src/_patterns/**/*.js', gulp.series('sass','js','pl'));
});

gulp.task('default', gulp.series('sass', 'js', 'pl', 'serve'));