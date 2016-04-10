/**
 * Created by xubaoshi on 2016/4/9.
 */
var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: [path.resolve(__dirname,'../app/main.js')],
	output: {
		path:path.resolve(__dirname,'../output/build'),
		publicPath:'build/',
		filename:'[name].[hash].js',
		chunkFilename:'[id].[chunkhash].js'
	},
	resolve:{
		extensions:['','.js','.vue']
	},
	module:{
		loaders:[
			// 加载vue结尾的文件
			{
				test: /\.vue$/,
				loader: 'vue'
			},
			// js代码支持es2015
			{
				test: /\.js$/,
				loader: 'babel?presets=es2015',
				exclude: /node_modules/
			}
		]
	},
	plugins:[
		new HtmlWebpackPlugin({
			filename:'../main.html',
			template:path.resolve(__dirname,'../app/main.html'),
			inject:true
		})
	]
}