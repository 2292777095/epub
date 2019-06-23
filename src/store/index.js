import Vue from 'vue'
import Vuex from 'vuex'
import bookStore from './modules/bookStore'
import getters from './getters'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        bookStore
    },
    getters,
    actions
})
