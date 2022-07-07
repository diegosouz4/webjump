const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const autoprefixer = require("gulp-autoprefixer");
const mincss = require("gulp-clean-css");
const terser = require("gulp-terser");
const babel = require("gulp-babel");
var sourcemaps = require("gulp-sourcemaps");

// Css functions
function minifyCss() {
  return gulp
    .src("src/sass/**/*.scss")
    .pipe(sourcemaps.init())
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer("last 2 versions"))
    .pipe(mincss())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("public/assets/css"));
}

//Js functions
function minifyJs() {
  return gulp
    .src("src/js/**/*.js")
    .pipe(sourcemaps.init())
    .pipe(
      babel({
        presets: [
          [
            "@babel/env",
            {
              modules: false,
            },
          ],
        ],
      })
    )
    .pipe(terser())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest("public/assets/js"));
}

// Watch task
function watch() {
  gulp.watch("src/sass/**/*.scss", minifyCss);
  gulp.watch("src/js/**/*.js", minifyJs);
}

// Tasks
exports.minifyCss = minifyCss;
exports.minifyJs = minifyJs;
exports.watch = watch;

exports.default = gulp.series(minifyCss, minifyJs, watch);
