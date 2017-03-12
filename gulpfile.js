var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', ['sass'], function() {
	browserSync.init({
		server: {
			baseDir: "source"
		}
	});
});

gulp.task('sass', function() {
	return gulp.src('source/scss/*.scss')
		.pipe(sass())
		.pipe(gulp.dest('source/css'))
		.pipe(browserSync.reload({stream: true})); // prompts a reload after compilation
});

gulp.task('serve', ['browser-sync'], function() {
	gulp.watch('source/scss/*.scss', ['sass']);
	gulp.watch('source/*.html').on('change', browserSync.reload);
	gulp.watch('source/js/*.js').on('change', browserSync.reload);
	gulp.watch('source/css/*.css').on('change', browserSync.reload);
});