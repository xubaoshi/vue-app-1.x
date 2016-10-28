import * as types from '../types'

const state = {
    showLoad: false,
    showMoreLoad: false
}

const mutations = {
    [types.SHOW_LOADING](state, action) {
        state.showLoad = true
    },
    [types.HIDE_LOADING](state, action) {
        state.showLoad = false
    },
    [types.SHOW_MORE_LOADING](state, action) {
        state.showMoreLoad = true
    },
    [types.HIDE_MORE_LOADING](state, action) {
        state.showMoreLoad = false
    }
}

export default {
    state,
    mutations
}