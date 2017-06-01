<template>
    <div class="load-more" v-show="isShow">
        <img src="../../img/loading.gif" alt="加载中。。。">
    </div>
</template>
<style>
    .load-more{
        text-align:center;
    }
    .load-more img{
        width:8%;
        height:8%;
    }
</style>    
<script>
    export default {
        props:{
            isShow:{
                type:Boolean,
                default:true
            }
        }
    }
</script>