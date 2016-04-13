/**
 * Created by xu on 2016/4/13.
 */
if(process.env.NODE_ENV === 'production'){
	module.exports = require('./webpack.config.prod')
}else {
	module.exports = require('./webpack.config.dev')
}