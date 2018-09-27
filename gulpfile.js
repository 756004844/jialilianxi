"use strict";
var gulp = require("gulp");
var $=require("gulp-load-plugins")();
var browserSync=require('browser-sync').create(); 

var app={
	srcPath:"src/",
	prdPath:"dist/",
	devPath:"build/"
}
gulp.task("hello",function(){
	console.log("hello word");
});
gulp.task("html",function(){
	gulp.src(app.srcPath+"**/*.html")
	.pipe($.concat("index.html"))
	.pipe(gulp.dest(app.devPath))
	.pipe($.htmlmin({
		collapseWhitespace:true
	}))
	.pipe(gulp.dest(app.prdPath))
	.pipe(browserSync.stream());
});

gulp.task("watch",function(){
	gulp.watch(app.srcPath+"**/*.html",["html"]);
});
gulp.task("default",["html","watch"],function(){
	browserSync.init({
		server:{
			baseDir:app.prdPath
		},
		port:2018
	});
});