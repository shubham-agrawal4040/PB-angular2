var gulp = require('gulp');
var sass = require('gulp-sass');
/*var sass = require('gulp-sass');
var plugins = require('gulp-load-plugins')({ lazy: true });
var runSequence = require('run-sequence');
*/

gulp.task('sass', function(){
  return gulp.src('src/Content/sass/**.scss')
    .pipe(sass()) // Using gulp-sass
    .pipe(gulp.dest('src/Content/css'))
});

gulp.task('watch:scss', function() {
  console.log('Watching for changes');
  gulp.watch('src/Content/scss/**/*.scss', ['sass']); 
});

gulp.task('default', ['sass', 'watch:scss'], function(callback) {
	
});