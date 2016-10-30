import * as types from '../types'

const state = {
    topics: [],
    topic: {}
}

const mutations = {
    [types.CNODE_TOPICS](state, action) {
        state.topics = state.topics.concat(action.data)
    },
    [types.CNODE_TOPICS_CLEAR](state, action) {
        state.topics = []
    },
    [types.CNODE_TOPIC](state, action) {
        state.topics = action.data
    },
    [types.CNODE_TOPIC_CLEAR](state, action) {
        state.topic = {}
    }
}

export default {
    state,
    mutations
}