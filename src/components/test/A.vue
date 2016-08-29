<template>
		A PAGE
		<a v-link="{path:'/login'}">TO B　PAGE</a>
		<div class="touch" v-touch:swipeleft.prevent="panTest">
		</div>
</template>
<script>
	export default{
		methods:{
			panTest:function(e){
				console.log(e);
				var tar = e.target;
				var classname = tar.className;
				if(classname.indexOf('red') != -1){
					tar.className = 'touch';
				}else{
					tar.className = 'touch-red';
				}

			}
		}
	}
</script>

<style>
	.touch{
		width:200px;
		height:200px;
		background-color:#3e8f3e;
	}
	.touch-red{
		width:200px;
		height:200px;
		background-color:#fc8c84;
	}

</style>