import * as types from '../types'

const state = {
    cnode: {
        topics: [],
        topic: {}
    }
}

const mutations = {
    [types.CNODE_TOPICS](state, action) {
        state.cnode.topics = state.cnode.topics.concat(action.data)
    },
    [types.CNODE_TOPICS_CLEAR](state, action) {
        state.cnode.topics = []
    },
    [types.CNODE_TOPIC](state, action) {
        state.cnode.topics = action.data
    },
    [types.CNODE_TOPIC_CLEAR](state, action) {
        state.cnode.topic = {}
    }
}

export default {
    state,
    mutations
}