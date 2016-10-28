import cnode from '../../resources/modules/cnode'
import * as types from '../types'

/**
 * 首页话题初始化
 */
export const getTopics = (store, tab) => {
    store.dispatch(types.CNODE_TOPICS_CLEAR)
    store.dispatch(types.SHOW_LOADING)
    cnode.getTopics({ page: 0, tab: tab, limit: 20 }).then(response => {
        if (response && response.data) {
            store.dispatch(types.CNODE_TOPICS,response.data)
            store.dispatch(types.HIDE_LOADING)
        }
    })
}

/**
 *  加载更多话题
 */
export const getTopicsMore = (store) => {
    store.dispatch(types.SHOW_MORE_LOADING)
    cnode.getTopics({ page: 0, tab: tab, limit: 20 }).then(response => {
        store.dispatch(types.HIDE_LOADING)
        if (response && response.data) {
            store.dispatch(types.CNODE_TOPICS,response.data)
            store.dispatch(types.HIDE_MORE_LOADING)
        }
    })
}

/**
 * 更多话题
 */
export const getTopic = (store, id) => {
    store.dispatch(types.CNODE_TOPIC_CLEAR)
    store.dispatch(types.CNODE_TOPIC_CLEAR)
    cnode.getTopic(id).then(response => {
        if (response) {
            store.dispatch(types.CNODE_TOPIC,response.data)
            store.dispatch(types.HIDE_LOADING)
        }
    })
}

