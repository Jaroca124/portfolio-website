var browserSync = require('browser-sync').create(),
    concat = require('gulp-concat'),
    del = require('del'),
    exec = require('child_process').exec,
    gulp = require('gulp'),
    minify = require('gulp-minify'),
    sassGlob = require('gulp-sass-glob'),
    rename = require('gulp-rename');

var sass = require('gulp-sass')(require('sass'));

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
    home: 'public/patterns/prod-index-index/prod-index-index.html',
    portfolio: 'public/patterns/prod-portfolio-portfolio/prod-portfolio-portfolio.html',
    feed: 'public/patterns/prod-feed-feed/prod-feed-feed.html',
    skills: 'public/patterns/prod-skills-skills/prod-skills-skills.html',
    education: 'public/patterns/prod-education-education/prod-education-education.html',
    experience: 'public/patterns/prod-experience-experience/prod-experience-experience.html',
    marvel: 'public/patterns/prod-marvel-marvel/prod-marvel-marvel.html',
    ncp: 'public/patterns/prod-ncp-ncp/prod-ncp-ncp.html',
    vgs: 'public/patterns/prod-video-game-series-video-game-series/prod-video-game-series-video-game-series.html',
    about: 'public/patterns/prod-about-about/prod-about-about.html',
    allsafe: 'public/patterns/prod-allsafe-allsafe/prod-allsafe-allsafe.html',
    galaxy: 'public/patterns/prod-galaxy-galaxy/prod-galaxy-galaxy.html',
    cabcs: 'public/patterns/prod-cabcs-cabcs/prod-cabcs-cabcs.html'
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
    exec('npm run build', function(err, stdout, stderr) {
        browserSync.reload();
        cb(err);
    });
});

gulp.task('js', () => {
    gulp.src('./node_modules/bootstrap/dist/js/bootstrap.min.js')
        .pipe(gulp.dest('./src/js/libraries/bootstrap'));
    gulp.src('./node_modules/particlesjs/dist/particles.min.js')
        .pipe(gulp.dest('./src/js/libraries/particles'));
    gulp.src('./node_modules/materialize-css/dist/js/materialize.min.js')
        .pipe(gulp.dest('./src/js/libraries/materialize'));
    gulp.src('./node_modules/stickybits/dist/stickybits.min.js')
        .pipe(gulp.dest('./src/js/libraries/stickybits'));

    return gulp.src(['./src/js/init.js', './src/_patterns/**/*.js'])
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
        .pipe(gulp.dest('./dist/marvel-movie-app'));
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
        .pipe(gulp.dest('./dist/natural-color-palette'));
    console.log("NCP Build Finished");
    
    // Allsafe
    console.log("Starting Allsafe Build...");
    gulp.src(buildPaths.allsafe)
        .pipe(rename({
            basename: 'index',
            extname: '.html'
        }))
        .pipe(gulp.dest('./dist/allsafe'));
    console.log("Allsafe Build Finished");
    
    // Galaxy
    console.log("Starting Galaxy Build...");
    gulp.src(buildPaths.galaxy)
        .pipe(rename({
            basename: 'index',
            extname: '.html'
        }))
        .pipe(gulp.dest('./dist/redhat-ansible-galaxy'));
    console.log("Galaxy Build Finished");

    // CABCS
    console.log("Starting CABCS Build...");
    gulp.src(buildPaths.cabcs)
        .pipe(rename({
            basename: 'index',
            extname: '.html'
        }))
        .pipe(gulp.dest('./dist/drone-operator-monitoring-research'));
    console.log("CABCS Build Finished");

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

gulp.task('clean', () => {
    return del(['./dist/**'], {"dot": true});
});

gulp.task('build', gulp.series('clean', 'sass', 'js', 'pl', 'moveAssets'));

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