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
    getTopic: function (topicId, data) {
        if (data != null) {
            return topicResource.get({"topicId":topicId}, data)
        } else {
            return topicResource.get({"topicId":topicId})
        }
    }
}
