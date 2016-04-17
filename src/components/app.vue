<template>
	<!--<personal-center></personal-center>-->
	<router-view></router-view>
	<menu></menu>
</template>
<script>
	import menu from './menu.vue'
	export default {
		components:{menu}
	}
</script>