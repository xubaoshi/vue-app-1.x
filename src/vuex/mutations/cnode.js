import * as types from '../types'

const state = {
    topics: [],
    topic: {}
}

const mutations = {
    [types.CNODE_TOPICS](state, action) {
        state.topics = state.topics.concat(action.data)
        console.log(state.topics)
        console.log('state.topics.length:  ' + state.topics.length)
    },
    [types.CNODE_TOPICS_CLEAR](state, action) {
        state.topics = []
    },
    [types.CNODE_TOPIC](state, action) {
        state.topic = action.data
    },
    [types.CNODE_TOPIC_CLEAR](state, action) {
        state.topic = {}
    }
}

export default {
    state,
    mutations
}