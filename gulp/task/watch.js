var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

gulp.task('watch', function() {

	browserSync.init({
		notify:false,
		server: {
			baseDir: "app"
		}
	});

	//watch and reload the html
	watch('./app/index.html', function() {
		browserSync.reload();
	});

	//watch and inject css to html
	watch('./app/assets/styles/**/*.css', function() {
		gulp.start('cssInject');
	});

	//watch and inject js to html
	watch('./app/assets/scripts/**/*.js', function() {
		gulp.start('scriptRefresh');
	});
});

	gulp.task('cssInject', ['styles'], function() {
		return gulp.src('./app/temp/styles/Styles.css')
		.pipe(browserSync.stream());
	});

	gulp.task('scriptsRefresh', ['scripts'],function() {
	browserSync.reload();
	});