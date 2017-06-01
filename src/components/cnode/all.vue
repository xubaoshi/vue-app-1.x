<template>
	<div>
        <v-header :history="false">
            <template slot="header">
                <h2>cnode</h2>
            </template>
        </v-header>
        <div class="content-with-menu" v-show="topics && topics.length>0">
            <div>
                <p class="rst-sum">共{{topics.length}}条</p>
                <div class="row">
                    <ul class="data-lst">
                        <li v-for="topic in topics">
                            <a v-link="{name:'cnode_show',params:{id:topic.id}}">
                                <div class="data-hd">
                                    <h4>{{topic.title}}</h4>
                                </div>
                                <div class="data-bd">
                                    <p class="data-vertical">作者：{{topic.author.loginname}}</p>
                                    <p class="data-vertical">发布日期：{{topic.create_at}}</p>
                                    <p class="data-vertical">访问量:{{topic.visit_count}}</p>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
                <load-more :is-show="showMoreLoad"></load-more>
            </div>
        </div>
        <menu></menu>
	</div>
</template>

<script>
    import vHeader from '../base/v_header.vue'
    import menu from '../menu.vue'
    import loadMore from '../base/load_more.vue'
    import { getTopics,getTopicsMore } from '../../vuex/actions/cnode'
    import {getScrollParent,getCurrentDistance} from '.././../utils/position.js'
    export default {
        data:function(){
            return {
                pageIndex:0,
                tabOne:'all',
                scrollParent:null,
                currentTab:''
            }
        },
        ready:function(){
            this.scrollParent = getScrollParent(document.getElementsByTagName('body')[0])
            this.scrollParent.addEventListener('scroll',function(){
                let currentDistance = getCurrentDistance(this.scrollParent)
                if (currentDistance == 0 && !this.showMoreLoad && !this.showLoad) {
                    this.pageIndex += 1
                    this.getTopicsMore({tab:this.currentTab,page:this.pageIndex})
                }
            }.bind(this))
        },
        components:{menu,vHeader,loadMore},
        vuex:{
            getters:{
                topics:({cnode}) => cnode.topics,
                showMoreLoad:({common}) => common.showMoreLoad,
                showLoad:({common}) => common.showLoad,
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
                if(toTar.params && toTar.params.tab != '' &&  toTar.params.tab != this.tabOne){
                    this.getTopics({tab:toTar.params.tab,page:this.pageIndex})
                    this.currentTab = toTar.params.tab
                }else{
                    this.getTopics({tab:this.tabOne,page:this.pageIndex})
                    this.currentTab = this.tabOne
                }
                this.pageIndex=0
            }
        }
    }
</script>