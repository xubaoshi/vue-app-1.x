<template>
	<ul class="menu-list">
		<li>
			<a class="menu-item" :class="{'on': $route.name=='A'}" v-link="{path:'/'}" href="javascript:;">全部</a>
		</li>
		<li>
			<a class="menu-item" :class="{'on': $route.name=='B'}" v-link="{path:'/login'}" href="javascript:;">精华</a>
		</li>
		<li>
			<a class="menu-item" href="javascript:;">分享</a>
		</li>
		<li>
			<a class="menu-item" href="javascript:;">问答</a>
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