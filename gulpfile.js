//node modules
var gulp = require('gulp');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');

gulp.task('scripts-minify-concat', function() {
    // corpo da tarefa 
    return gulp
            .src(['src/js/**/*.js'])
            .pipe(uglify())
            .pipe(concat('scripts.js'))
            .pipe(gulp.dest('dist/js'));      
});

gulp.task('default', function() {

	gulp.start('scripts-minify-concat');

});
