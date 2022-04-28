import Vue from 'vue'
import Vuex from 'vuex'

import state from './state.js'
import getters from './getters/index.js'
import actions from './actions/index.js'
import mutations from './mutations/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
  // strict: process.env.NODE_ENV !== 'production',
  state,
  getters,
  actions,
  mutations
})
