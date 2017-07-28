const gulp = require('gulp');
const typescript = require('gulp-typescript');
const del = require('del');
const browserSync = require('browser-sync').create();

// gulpコマンドで実行するデフォルトタスク
gulp.task('default',[
    'clean:dist',
    'compile:ts',
    'copy:html',
    'copy:bower',
    'server',
    'watch'
]);

// distフォルダを空っぽに
gulp.task('clean:dist', function(){
  return del.sync(['dist/*']); 
});

// src/tsをコンパイルしてdist/jsに展開
gulp.task('compile:ts', function(){
  return gulp.src(['src/ts/*.ts'])
    .pipe(typescript())
    .js 
    .pipe(gulp.dest('dist/js/'));
});

// HTMLをsrcからdistにコピー
gulp.task('copy:html', function(){
  return gulp.src(['src/*.html']) 
    .pipe(gulp.dest('dist/'));
});

gulp.task('copy:bower', function(){
    // アスタリスク2つを指定しないとファイルがコピーされない
    // baseの指定はフォルダ構成を再現する起点
    return gulp.src(
        ['src/js/bower_components/**'],
        { base: 'src/js' }
    )
    .pipe(gulp.dest('dist/js/'));
});

// ブラウザ起動
gulp.task('server', function(){
  browserSync.init({
    server: {
      baseDir: 'dist'
    },
    files: ['dist/*']
  });
});

// srcフォルダの監視
// ts,htmlが編集されたらタスクを再実行
gulp.task('watch', function(){
  gulp.watch([
    'src/ts/*.ts',
    'src/*.html'
  ], ['compile:ts','copy:html']); 
});