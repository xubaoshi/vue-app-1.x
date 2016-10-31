<template>
	<div>
		<ul v-for="topic in topics">
			<li>{{topic.id}}</li>
		</ul>
	</div>
</template>

<script>
    import { getTopics,getTopicsMore } from '../../vuex/actions/cnode'
    console.log('all.vue')
    export default {
        vuex:{
            getters:{
                topics:({cnode}) => cnode.topics,
                current:({route}) => route.params.type
            },
            actions:{
                getTopics,
                getTopicsMore
            }
        },
        route:{
            data(transition){
                var toTar = transition.to;
                if(toTar.params && toTar.params.tab != '' &&  toTar.params.tab != 'all'){
                    this.getTopics(toTar.params.tab)
                }else{
                    this.getTopics()
                }
                
            }
        }
    }
</script>