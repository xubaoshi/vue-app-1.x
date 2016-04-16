/**
 * Created by xu on 2016/4/13.
 */
import path from 'path'
import gulp from 'gulp'
import gutil from 'gulp-util'
import WebpackDevServer from "webpack-dev-server"
import webpack from "webpack"
import del from 'del'
import env from 'gulp-env'
import gulpSequence from 'gulp-sequence'
import nodemon from 'gulp-nodemon'
import open from 'open'
import proxy from 'proxy-middleware';

const DEV_PORT = 5100, PROD_PROT = 8800

// 开发模式
gulp.task('dev', cb =>{
	let webpackConfig = require('./build/webpack.config')
	let myConfig = Object.create(webpackConfig)
	myConfig.entry.unshift('webpack-dev-server/client?http://localhost:' + DEV_PORT)

	// hot功能没有实现待完善
	new WebpackDevServer(webpack(myConfig), {
		noInfo: false,
		hot: false,
		inline: true,
		historyApiFallback: true,
		publicPath: myConfig.output.publicPath,
		stats: {
			colors: true
		}
	}).listen(DEV_PORT, "localhost", err => {
		if(err) throw new gutil.PluginError("webpack-dev-server", err)
		gutil.log("[webpack-dev-server]", "==> 🌎  http://localhost:" + DEV_PORT)
		open('http://localhost:' + DEV_PORT)
	});
})





// 清空dist文件夹
gulp.task('clean', cb=>del([path.join(__dirname, '/dist/*')]))

// 将服务器环境设置为发布模式
gulp.task('set-env-prod', () => {
	env({
		vars:{
			'NODE_ENV':'production'
		}
	})
})

// webpack打包
gulp.task('webpack',cb=>{
	let webpackConfig = require('./build/webpack.config')
	let myConfig = Object.create(webpackConfig)
	webpack(myConfig,function(err,stats){
		if(err) throw new gutil.PluginError("webpack",err)
		gutil.log("[webpack]",stats.toString({
			// output options
		}))
		cb()
	})
})

// 将服务器环境设置为发布模式 && webpack打包
gulp.task('webpack:dist',gulpSequence('set-env-prod','webpack'))

// 发布模式打包
gulp.task('build',gulpSequence('clean','webpack:dist'))

// 同步
gulp.task('nodemon',()=>{
	nodemon({
		script:path.join(__dirname,'./build/server.js'),
		ext:'js',
		watch:[
			path.join(__dirname,'/dist')
		],
		env:{'NODE_ENV':'production','PORT':PROD_PROT}
	})
})

// 发布
gulp.task('prod',gulpSequence('build','nodemon'))
