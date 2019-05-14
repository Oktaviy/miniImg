const gulp  = require('gulp'),
	  nokey = require('gulp-tinypng-nokey');

gulp.task('default', function() {
	return gulp.src('img/**/*')
		.pipe(nokey())
		.pipe(gulp.dest('miniImg'));
});