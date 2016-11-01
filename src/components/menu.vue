<template>
	<ul class="menu-list">
		<li>
			<a class="menu-item" :class="{'menu-on': ($route.params == null || $route.params.tab == '' || $route.params.tab =='all')}"
				v-link="{path:'/all'}" href="javascript:;"><i class="fa fa-home"></i></a>
		</li>
		<li>
			<a class="menu-item" :class="{'menu-on': $route.params.tab=='ask'}" v-link="{path:'/ask'}" href="javascript:;"><i class="fa fa-pencil"></i></a>
		</li>
		<li>
			<a class="menu-item" :class="{'menu-on': $route.params.tab=='share'}" v-link="{path:'/share'}" href="javascript:;"><i class="fa fa-share-alt-square"></i></a>
		</li>
		<li>
			<a class="menu-item" :class="{'menu-on': $route.params.tab=='good'}" v-link="{path:'/good'}" href="javascript:;"><i class="fa fa-css3"></i></a>
		</li>
	</ul>
</template>
<style>
	
</style>