/**
 * Created by xu on 2016/4/10.
 */
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
var webpack = require('webpack')
var config = require('./webpack.config');

// 路径
config.output.publicPath = '/';

// dev plugins
config.plugins = [
	new webpack.optimize.OccurenceOrderPlugin(),
	new webpack.HotModuleReplacementPlugin(),
	new webpack.NoErrorsPlugin(),
	new HtmlWebpackPlugin({
		filename:'app/main.html',
		template:path.resolve(__dirname,'../app/main.html'),
		inject:true
	})
];

//动态向入口配置中注入 webpack-hot-middleware/client
var devClient = './build/dev-client';
Object.keys(config.entry).forEach(function(name,i){
	var extras = [devClient];
	config.entry[name] = extras.concat(config.entry[name])
})

module.exports = config;