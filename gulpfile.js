//node modules
var gulp = require('gulp');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var concatcss = require('gulp-concat-css');
var cssreplace = require('gulp-replace');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

//minify and concat javascripts
gulp.task('scripts-minify-concat', function() {
    return gulp
            .src(['src/js/**/*.js'])
            .pipe(uglify())
            .pipe(concat('scripts.js'))
            .pipe(gulp.dest('dist/js'));      
});

//minify and concat css
gulp.task('styles-minify-concat', function() {
     return gulp
	 		.src('src/css/**/*.css')
	 		.pipe(concatcss("style.css"))
	 		.pipe(cssreplace('/*!', '/*'))
	 		.pipe(cssnano())
	    	.pipe(gulp.dest('dist/css'));
    	
});

//compress images
gulp.task('images-compress', function(){
    return gulp.src('src/img/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('dist/img'));
});


//Default task
gulp.task('default', function() {

	gulp.start('scripts-minify-concat', 'styles-minify-concat', 'images-compress');

});
