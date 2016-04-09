/**
 * Created by xubaoshi on 2016/4/9.
 */
var express = require("express");
var webpack = require("webpack");
var config = require("./webpack.config");

// express 实例
var app = new  = express()

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

// 注册中间件
// TODO

