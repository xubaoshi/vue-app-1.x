<template>
	<div>
        <v-header :history="false">
            <template slot="header">
                <h2>cnode</h2>
            </template>
        </v-header>
        <div class="content-with-menu" v-show="topic && topic.id !='' ">
            <div>
                <div class="row">
                    <ul class="data-lst">
                        <li>
                            <a v-link="{name:''}">
                                <div class="data-hd">
                                    <h4>{{topic.title}}</h4>
                                </div>
                                <div class="data-bd">
                                    <p class="data-vertical">作者：{{topic.author.loginname}}</p>
                                    <p class="data-vertical">发布日期：{{topic.create_at}}</p>
                                    <p class="data-vertical">访问量:{{topic.visit_count}}</p>
                                    <p style="width:100%">{{{topic.content}}}</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <menu></menu>
	</div>
</template>

<script>
    import vHeader from '../base/v_header.vue'
    import { getTopic } from '../../vuex/actions/cnode'
    export default {
        components:{vHeader},
        vuex:{
            getters:{
                topic:({cnode}) => cnode.topic,
                current:({route}) => route.params.type
            },
            actions:{
                getTopic
            }
        },
        route:{
            data(transition){
                var toTar = transition.to
                this.getTopic(toTar.params.id)
            }
        }
    }
</script>