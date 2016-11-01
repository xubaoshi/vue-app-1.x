/**
 * Created by xu on 2016/4/15.
 */

'use strict'
export default function (router) {
	router.map({
		'*':{
			name:'A',
			component:require('./components/cnode/all.vue')
		},
		'/:tab':{
			name:'code_all',
			component:require('./components/cnode/all.vue')
		}
		,
		'/cnode/:id':{
			name:'cnode_show',
			component:require('./components/cnode/show.vue')
		}
	})
}