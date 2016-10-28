import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)
// 支持form Data 传输数据
Vue.http.options.emulateJSON = true

var cnodeCommonUrl = 'https://cnodejs.org/api/v1'

export const topicsResource = Vue.resource(cnodeCommonUrl + '/topics')
export const topicResource = Vue.resource(cnodeCommonUrl + '/topic{/topicId}')
