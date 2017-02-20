$(document).ready(function(){
    $('div').mouseenter(function(){
        $(this).animate({
            height: '+=20px'
        }); 
    });
   $('div').mouseleave(function(){
        $(this).animate({
            height: '-=20px'
        }); 
    });

    $("div").click(function(){
        $(this).hide('slow');
});

});

var gulp = require('gulp'),
  connect = require('gulp-connect'),
  jshint = require('gulp-jshint'),
  concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');
  var source = ["app.js", "gulpfile.js"];
 
gulp.task('connect', function() {
  connect.server();
});

 
gulp.task('lint', function() {
  return gulp.src(source)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('concat', function() {
  return gulp.src('./*.js')
    .pipe(concat('concat.js'))
    .pipe(gulp.dest('./dist/'));
});


gulp.task('uglify', function(){
    return gulp.src(['./app.js'])
        .pipe(rename('uglify.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});

 
gulp.task('default', ['connect']);