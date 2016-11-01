/**
 * Created by xubaoshi on 2016/4/15.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import cnode from './mutations/cnode'
import common from './mutations/common'

const debug = process.env.NODE_ENV !== 'production'

Vue.use(Vuex)
Vue.config.debug = debug

export default new Vuex.Store({
	modules: {
		cnode,
		common
	}
})