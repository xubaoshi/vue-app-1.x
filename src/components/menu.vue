<template>
	<ul class="menu-list">
		<li>
			<a class="menu-item" :class="{'on': ($route.params == null || $route.params.tab == '' || $route.params.tab =='all')}" v-link="{path:'/all'}" href="javascript:;"><i class="fa fa-home"></i></a>
		</li>
		<li>
			<a class="menu-item" :class="{'on': $route.params.tab=='ask'}" v-link="{path:'/ask'}" href="javascript:;"><i class="fa fa-pencil"></i></a>
		</li>
		<li>
			<a class="menu-item" :class="{'on': $route.params.tab=='share'}" v-link="{path:'/share'}" href="javascript:;"><i class="fa fa-share-alt-square"></i></a>
		</li>
		<li>
			<a class="menu-item" :class="{'on': $route.params.tab=='good'}" v-link="{path:'/good'}" href="javascript:;"><i class="fa fa-css3"></i></a>
		</li>
	</ul>
</template>
<style>
	.menu-list{
		/* 定位 */
		position:absolute;
		bottom:0;

		/*布局*/

		/*自身属性*/
		width:100%;
	}
	.menu-list > li{
		/*定位*/
		float:left;

		/*布局*/
		overflow:hidden;

		/*自身属性*/
		width:25%;
		height:30px;
		line-height:30px;

		/*文本属性*/
		text-align:center;
		background-color:#f2f2f2;
	}
	.menu-item{
		/*布局*/
		display:inline-block;
		/*自身属性*/
		height:30px;
		width:100%;
		/*文本属性*/
		color:#333333
	}
	.on{
		/*文本属性*/
		background-color:#dddddd;
	}
</style>