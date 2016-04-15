/**
 * Created by xu on 2016/4/15.
 */

'use strict'
export default function (router) {
	router.map({
		'*':{
			name:'A',
			component:require('./components/test/A.vue')
		},
		'/':{
			name:'A',
			component:require('./components/test/A.vue')
		},
		'/login':{
			name:'B',
			component:require('./components/test/B.vue')
		}
	})
}