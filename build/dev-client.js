/**
 * Created by xu on 2016/4/10.
 */
var hotClient = require('webpack-hot-middleware/client')
console.log("xuabaoshi05")
// 订阅事件，当event.action === 'reload'时执行页面刷新
hotClient.subscribe(function(event){
	console.log("xuabaoshi03")
	if(event.action == 'reload'){
		window.location.reload()
	}
	console.log("xuabaoshi04")
})