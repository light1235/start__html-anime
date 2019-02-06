var gulp         = require('gulp'), // Подключаем Gulp
	concat       = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
	uglify       = require('gulp-uglifyjs'), // Подключаем gulp-uglifyjs (для сжатия JS)
	cssnano      = require('gulp-cssnano'), // Подключаем пакет для минификации CSS
	rename       = require('gulp-rename'), // Подключаем библиотеку для переименования файлов
	del          = require('del'), // Подключаем библиотеку для удаления файлов и папок
	cache        = require('gulp-cache'), // Подключаем библиотеку кеширования
	autoprefixer = require('gulp-autoprefixer');// Подключаем библиотеку для автоматического добавления префиксов

//Compiled css
gulp.task('css-libs', function() {
	return gulp.src(['assets/css/main.css','assets/css/header.css','assets/css/footer.css']) // Выбираем файл для минификации
		.pipe(cssnano()) // Сжимаем
		.pipe(rename({suffix: '.min'})) // Добавляем суффикс .min
		.pipe(gulp.dest('assets/css')); // Выгружаем в папку app/css
});

gulp.task('clean', function() {
	return del.sync('dist'); // Удаляем папку dist перед сборкой
});


// Compiled libs
gulp.task('scripts', function() {
	return gulp.src([ // Берем все необходимые библиотеки
		'assets/libs/jquery/dist/jquery.min.js','assets/libs/jquery-3.3.1.min.js' // Берем jQuery
		])
		.pipe(concat('libs.min.js')) // Собираем их в кучу в новом файле libs.min.js
		.pipe(uglify()) // Сжимаем JS файл
		.pipe(gulp.dest('assets/js')); // Выгружаем в папку app/js
});



// Production build
gulp.task('build', ['clean', 'css-libs' , 'scripts'], function() {

	var buildCss = gulp.src([ // Переносим сss в продакшен
		'assets/css/main.min.css',
		'assets/css/header.min.css',
		'assets/css/footer.min.css',
		'assets/css/normalize.css'
		])
	.pipe(gulp.dest('dist/assets/css'))

	var buildFonts = gulp.src('assets/fonts/**/*') // Переносим шрифты в продакшен
	.pipe(gulp.dest('dist/assets/fonts'))

	var buildJs = gulp.src('assets/js/**/*') // Переносим скрипты в продакшен
	.pipe(gulp.dest('dist/assets/js'))
    //сжимать скрипты?!

	var buildHtml = gulp.src('assets/*.html') // Переносим HTML в продакшен
	.pipe(gulp.dest('dist/assets/'));

	var buildImg = gulp.src('assets/img/**/*') // Переносим HTML в продакшен
	.pipe(gulp.dest('dist/assets/img'));

});


gulp.task('clear', function (callback) {
	return cache.clearAll();
})






