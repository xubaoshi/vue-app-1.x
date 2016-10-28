import { topicsResource, topicResource } from '../index'

export default {
    /**
     *  话题列表
     */
    getTopics: function (data) {
        return topicsResource.get(data)
    },
    /**
     * 话题详情
     */
    getTopic: function (id, data) {
        return topicResource.get(id, data)
    }
}
