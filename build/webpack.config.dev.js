var path = require('path')
var webpack = require('webpack')
// var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin');
// var Dashboard = require('webpack-dashboard');
// var DashboardPlugin = require('webpack-dashboard/plugin');
// var dashboard = new Dashboard();

module.exports = {
	devtool: 'cheap-source-map',
	context: path.resolve(__dirname, '../src'),
	entry: [
		'webpack/hot/only-dev-server',

		'./index.js'
	],
	output: {
		path: process.cwd(),
		filename: 'bundle.js',
		publicPath: '/'
	},
	plugins: [
		// new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		// new webpack.NoErrorsPlugin(),
		// new HtmlWebpackPlugin({
		// 	favicon: path.join(__dirname, '../src/favicon.ico'),
		// 	title: "vue app",
		// 	template: path.join(__dirname, '../src/index.html'),
		// 	inject: true
		// }),
		new ExtractTextPlugin({
			filename: '[hash:8].style.css',
			allChunks: true
		})
		// ,
		// new DashboardPlugin(dashboard.setData)
	],
	module: {
		rules: [{
				test: /\.vue$/,
				use: [{
					loader: 'vue-loader'
				}],
                exclude: /node_modules/
			},
			{
				test: /\.js$/,
				use: [{
					loader: 'babel-loader'
				}]
			},
			{
				test: /\.css$/,
				use: [{
						loader: "style-loader"
					},
					{
						loader: "css-loader",
						options: {
							sourceMap: true
						}
					}
				]
			},
			{
				test: /\.scss$/,
				use: [{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader'
					},
					{
						loader: 'sass-loader'
					}
				]
			},
			{
				test: /\.(jpe?g|png|gif)$/i,
				use: [{
					loader: 'url-loader',
					options: {
						limit: 10000,
						name: 'images/[hash:8].[name].[ext]'
					}
				}]
			}, {
				test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				use: [{
					loader: 'url-loader',
					options: {
						limit: 10000,
						name: 'fonts/[hash:8].[name].[ext]'
					}
				}]
			}
		]
	},

	resolve: {
		extensions: ['.js', '.vue', '.scss']
	}
}