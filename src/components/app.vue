<template>
	<router-view></router-view>
	<menu></menu>
</template>
<script>
	import menu from './menu.vue'
	import store from '../vuex/store'
	export default {
		components:{menu},
		store:store
	}
</script>