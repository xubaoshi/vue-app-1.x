<template>
	<header class="header">
        <i class="fa fa-arrow-left" @click="goBack" v-if="history"></i>
		<slot name="header">
			<h2>header-title</h2>
		</slot>
	</header>
</template>

<script>
    export default{
        props:{
            history:{
                type:Boolean,
                default:true
            }
        },
        methods:{
            goBack:function(){
                window.history.back();
            }
        }
    }
</script>