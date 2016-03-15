var gulp = require('gulp');
var webpack = require('gulp-webpack');

gulp.task('js', function() {
  return gulp.src('client/dev/app.js')
    .pipe(webpack({output: {filename: 'app.js'}}))
    .pipe(gulp.dest('client/build'));
});

gulp.task('copy', function () {
  return gulp
    .src(['client/dev/app.css','client/dev/index.html']) 
    .pipe(gulp.dest('client/build'));
});

gulp.task('watch-client', function() {
	gulp.watch('client/dev/**/*.*', ['build']);	
})

gulp.task('build', ['js', 'copy', 'watch-client']);