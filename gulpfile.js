// Определяем переменную "preprocessor"
/* let preprocessor = 'sass';  */

const { src, dest, parallel, series, watch } = require('gulp'); 

const browserSync = require('browser-sync').create();
// Подключаем модули gulp-sass 
const sass = require('gulp-sass');     
// Подключаем Autoprefixer
const autoprefixer = require('gulp-autoprefixer');    
// Подключаем модуль gulp-clean-css
const cleancss = require('gulp-clean-css');


// Определяем логику работы Browsersync
function browsersync() {
    browserSync.init({ // Инициализация Browsersync
        /* server: { baseDir: 'source/' }, */  // Указываем папку сервера
        notify: false, // Отключаем уведомления
        online: true // Режим работы: true или false
    })

    
}

// Экспортируем функцию browsersync() как таск browsersync. Значение после знака = это имеющаяся функция.
exports.browsersync = browsersync;

function styles() {
	return src("source/sass/*.scss") // Выбираем источник, где находится файл САСС
	.pipe(sass()) // Преобразуем значение переменной "preprocessor" в функцию
	.pipe(autoprefixer({ overrideBrowserslist: ['last 10 versions'], grid: true })) // Создадим префиксы с помощью Autoprefixer
	.pipe(dest('source/css/')) // Выгрузим результат в папку "source/css/"
	.pipe(browserSync.stream()) // Сделаем инъекцию в браузер
}

// Экспортируем функцию styles() в таск styles
exports.styles = styles;

function startwatch() {

// Мониторим файлы препроцессора на изменения
watch("source/sass/**/*.scss", styles);
// Мониторим файлы HTML на изменения
watch('source/**/*.html').on('change', browserSync.reload);
 
}

exports.default = parallel(styles, browsersync, startwatch);