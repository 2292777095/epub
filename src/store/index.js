import Vue from 'vue'
import Vuex from 'vuex'
import bookStore from './modules/bookStore'
import store from './modules/store'
import getters from './getters'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        bookStore,
        store
    },
    getters,
    actions
})
