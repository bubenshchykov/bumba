var gulp = require('gulp');
var webpack = require('gulp-webpack');
var nodemon = require('gulp-nodemon');

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
});

gulp.task('watch-start-server', function () {
	nodemon({
		script: 'index.js',
		ext: 'js',
		watch: ['server', 'node_modules']
	});
});

gulp.task('start-dev', ['js', 'copy', 'watch-client', 'watch-start-server']);