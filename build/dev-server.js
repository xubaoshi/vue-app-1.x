/**
 * Created by xubaoshi on 2016/4/9.
 */
var express = require("express");
var webpack = require("webpack");
var config = require("./webpack.dev.config");

// express 实例
var app = new express()

// webpack配置参数
var compiler = webpack(config)

// 使用webpack-dev-middleware中间件
var devMiddleWare = require('webpack-dev-middleware')(compiler,{
	publicPath:config.output.publicPath,
	stats:{
		colors:true,
		chunks:false
	}
})

// 使用webpack-hot-middleware中间件
var hotMiddleware = require('webpack-hot-middleware')(compiler)

//webpack插件，监听html文件改变事件
compiler.plugin('compilation',function(compilation){
	compilation.plugin('html-webpack-plugin-after-emit',function(data,cb){
		// 发布事件
		hotMiddleware.publish({action:'reload'})
		cb()
	})
})

// 注册中间件
app.use(devMiddleWare)

// 注册中间件
app.use(hotMiddleware)

// 监听端口
app.listen(8888,function(err){
	if(err){
		console.log(err)
		return
	}
	console.log("localhost:8888")
})

