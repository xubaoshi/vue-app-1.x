/**
 * Created by xu on 2016/4/13.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueValidator from 'vue-validator'
import { sync } from 'vuex-router-sync'
import store from './vuex/store'
import configRouter from './routes'
//import filters from './utils/filters'
import app from './components/app.vue'
import vueTouch from 'vue-touch'


// css
import './style/css/base.css'
import './style/css/reset.css'

// 引入路由
Vue.use(VueRouter)


// 引入表单校验
Vue.use(VueValidator)
Vue.use(vueTouch)

// 去除警告
// 注：？？
Vue.config.warnExpressionErrors = false

// 注册过滤器
//Object.keys(filters).forEach(k=>Vue.filter(k,filters[k]))

// 注册路由
const router = new VueRouter({
	// Html History模式 利用history.pushState() 和history.replaceState() 管理浏览历史记录
	history:true,
	// HTML5 history 模式下可用  Html5 history中的popstate事件对应的state来重置页面的滚动位置
	saveScrollPosition:true,
	// 场景切换钩子函数中发生的异常会被吞掉
	suppressTransitionError:true
})

configRouter(router)
sync(store,router)

router.start(app,'app')
window.router = router



