var gulp = require('gulp'),
	watch = require('gulp-watch'),
  autoprefixer = require('gulp-autoprefixer'),
  jshint = require('gulp-jshint'),
  stylish = require('jshint-stylish'),
  sass = require('gulp-sass'),
  rename = require("gulp-rename"),
  minifyCss = require('gulp-minify-css'),
  uglify = require('gulp-uglify'),
  imagemin = require('gulp-imagemin'),
  concat = require('gulp-concat'),
  plumber = require('gulp-plumber'),
  concatCss = require('gulp-concat-css'),
  wrap = require('gulp-wrap');


// собираем html
gulp.task('layout', function () {
  return gulp.src(['app/**/*.html', '!app/layout.html'])
    .pipe(wrap({src: 'app/layout.html'}))
    .pipe(gulp.dest('dist'));
});

// перебрасываем папку sass в dist
gulp.task('sass-dist', function () {
  return gulp.src('app/sass/*.sass')
    .pipe(gulp.dest('dist/sass/'))
});

// компилируем sass html
gulp.task('sass', function () {
  return gulp.src('app/sass/*.sass')
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer({
        browsers: ['last 10 versions'],
        cascade: false
    }))
    .pipe(gulp.dest('dist/css/'))
    .pipe(minifyCss())
    .pipe(rename("style.min.css"))
    .pipe(gulp.dest('dist/css/'))
});

// собираем шрифты
gulp.task('fonts', function() {
  return gulp.src('app/css/fonts/**/*')
    .pipe(gulp.dest('dist/css/fonts'))
});

// собираем css плагинов
gulp.task('css', function(){
  return gulp.src('app/css/*.css')
    
    .pipe(concatCss("all-plugins.css"))
    .pipe(minifyCss())
    .pipe(gulp.dest('dist/css'))
});

// собираем картинки
gulp.task('images', function(){
  return gulp.src('app/images/**/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/images'))
});
gulp.task('images-content', function(){
  return gulp.src('app/assets/images/**/*.*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/assets/images'))
});

gulp.task('video', function(){
  return gulp.src('app/assets/video/**/*.*')
    .pipe(gulp.dest('dist/assets/video'))
});

// проверяем js на наличие ошибок
gulp.task('jshint', function(){
  return gulp.src('app/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

// собираем js плагины
gulp.task('concat', function() {
  return gulp.src(['app/js/jquery/*.js','app/js/lib/*.js'])
	.pipe(plumber())
	.pipe(uglify())
    .pipe(concat('all-plugins.js'))
    .pipe(rename("all-plugins.min.js"))
    .pipe(gulp.dest('dist/js/'))
});

// собираем наш кастомный js
gulp.task('js',function(){                
  gulp.src('app/js/_main.sass.js')
    .pipe(plumber())
    .pipe(gulp.dest('dist/js/'))
    .pipe(uglify()) 
    .pipe(rename("_main.sass.min.js"))
    .pipe(gulp.dest('dist/js/'))
});


// наблюдаем за изменениями
gulp.task('watch', function(){
	gulp.watch("app/*.html", [ "layout"]);
  	gulp.watch('app/sass/*.sass', ['sass-dist','sass','fonts'] );
  	gulp.watch('app/assets/images/**/*.*', ["images-content"]);
  	gulp.watch('app/images/*.*', ["images"]);
  	gulp.watch('app/assets/video/**/*.*', ["video"]);
  	gulp.watch("app/css/**/*.css", ["css"]);
  	gulp.watch('app/js/**/*.js',  ["jshint", "concat", "js"]);
});

// Default
gulp.task('default', ["layout","sass-dist","sass",'css','fonts',"jshint",'concat','js','images','images-content', "video", "watch"]);