(function () {
    'use strict';

    var gulp = require('gulp');
    var concat = require('gulp-concat');
    var minify = require('gulp-minify');
    var uglify = require('gulp-uglify');
    var ngAnnotate = require('gulp-ng-annotate');
    var sourcemaps = require('gulp-sourcemaps');
    var bs = require('browser-sync');
    var templateCache = require('gulp-angular-templatecache');

    var dependencies = require('./vendor.json');

    // Default task. Generate JS and templates bundles.
    gulp.task('default', ['generate-libs', 'generate-css', 'generate-js', 'generate-templates']);

    // Watch task. Generate JS and templates bundles and launch Browser Sync
    gulp.task('watch', ['default'], function () {
        var bsInstance = bs.create();

        bsInstance.init({
            server: {
                baseDir: './'
            }
        });
        
        gulp.watch('styles.css', ['generate-css']);
        gulp.watch('app/**/*.*.js', ['generate-js']);
        gulp.watch('app/**/*.*.html', ['generate-templates']);

        gulp.watch('dist/*.css').on('change', bsInstance.reload);
        gulp.watch('dist/*.js').on('change', bsInstance.reload);
        gulp.watch('*.html').on('change', bsInstance.reload);
    });

    // Generate JS app bundle
    gulp.task('generate-js', function () {
        return gulp.src(['app/*.module.js', 'app/**/*.js'])
            .pipe(sourcemaps.init())
            .pipe(concat('app.js'))
            .pipe(ngAnnotate())
            .pipe(uglify())
            .pipe(sourcemaps.write())
            .pipe(minify({
                noSource: true
            }))
            .pipe(gulp.dest('dist/'));
    });

    // Generate JS templates bundle
    gulp.task('generate-templates', function () {
        return gulp.src('app/**/*.html')
            .pipe(templateCache({
                module: 'hsApp'
            }))
            .pipe(uglify())
            .pipe(minify({
                noSource: true
            }))
            .pipe(gulp.dest('dist/'));
    });

    // Generate JS libs bundle
    gulp.task('generate-libs', function () {
        return gulp.src(dependencies.js)
            .pipe(concat('libs.js'))
            .pipe(gulp.dest('dist/'));
    });

    // Generate CSS bundle
    gulp.task('generate-css', function () {
        return gulp.src(dependencies.css)
            .pipe(concat('styles.css'))
            .pipe(gulp.dest('dist/'));
    });
})();