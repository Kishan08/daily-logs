var gulp = require('gulp'),
		sass = require('gulp-sass'),
		browserSync = require('browser-sync').create();

gulp.task('sass', function() {
	return gulp.src('src/sass/style.scss')
		.pipe(sass())
		.pipe(gulp.dest('src/css'))
		.pipe(browserSync.reload({
			stream: true
		}))
});

gulp.task('watch', ['runServer', 'sass'], function() {
	gulp.watch('src/sass/style.scss', ['sass']);
	gulp.watch('src/*.html', browserSync.reload);
	gulp.watch('src/js/main.js', browserSync.reload);
});

gulp.task('runServer', function () {
	browserSync.init({
		server: {
			baseDir: 'src'
		}
	})
});

