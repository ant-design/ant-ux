var gulp = require('gulp');
var watch = require('gulp-watch');
var jade = require('gulp-jade');
var cssmin = require('gulp-cssmin');

gulp.task('jade', function() {
	gulp.src(['./views/*.jade'])
		.pipe(jade({
			pretty: true
		}))
		.pipe(gulp.dest('./'));
});

gulp.task('css', function () {
	gulp.src('views/public/css/*.css')
		.pipe(cssmin())
		.pipe(gulp.dest('./public/css'));
});

gulp.task('js', function() {
	gulp.src('views/public/js/*.js')
	.pipe(gulp.dest('./public/js/'));
});
gulp.task('watch', function(){
  gulp.watch('views/public/css/*.css', ['css']);
  gulp.watch('views/public/js/*.js', ['js']);
  gulp.watch('./views/*.jade', ['jade']);
  // Other watchers
})

gulp.task('site', ['jade','css','js']);

